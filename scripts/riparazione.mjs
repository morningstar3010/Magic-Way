/**
 * MAGIC WAY – riparazione dei collegamenti (portali a prova di esportazione).
 *
 * Un portale ricorda il suo arrivo con un indirizzo fisso (Scene.<id>.Region.<id>). Se la mappa viene
 * esportata (compendio, avventura, file JSON) e importata in un altro mondo con ID diversi, l'indirizzo non
 * porta più da nessuna parte. Per questo:
 *  - ogni area Magic Way ha un CODICE proprio (flag magic-way.codice) che viaggia con la mappa;
 *  - ogni portale ricorda codice, nome e mappa del suo arrivo e se l'arrivo era sulla stessa mappa
 *    (flag magic-way.codiceArrivo / nomeArrivo / scenaArrivo / arrivoStessaScena);
 *  - ogni area ricorda anche NOME, COLORE e PERCORSO della sua zona (zone superiori comprese: flag
 *    magic-way.zonaNome, zonaColore, zonaPercorso).
 * La riparazione ritrova l'arrivo giusto dal codice e corregge l'indirizzo, ricrea le zone mancanti e,
 * per i portali creati con le versioni precedenti, assegna i codici che mancano.
 *
 * Quando parte: all'avvio del mondo, dopo l'importazione di scene o avventure (e quando vengono create
 * regioni, per esempio con «Importa dati»), e a mano con il pulsante «Ripara collegamenti» del pannello o
 * con la macro game.modules.get("magic-way").api.ripara(). La esegue solo il master attivo.
 */
import { MOD, TIPO, t, log, sonoIlGmAttivo } from "./costanti.mjs";
import { tuttiIPortali, codiceDi, nuovoCodice, memoriaArrivo, aggiornaFlagZone } from "./portali.mjs";
import { elencoZone, salvaZone, coloreValido } from "./zone.mjs";

/** Tutte le regioni del mondo. */
function tutteLeRegioni() {
  const elenco = [];
  for (const s of game.scenes) for (const r of s.regions) elenco.push(r);
  return elenco;
}

/** Regione indicata da un indirizzo, oppure null. */
function risolvi(uuid) {
  if (!uuid) return null;
  try { const d = fromUuidSync(uuid); return d?.documentName === "Region" ? d : null; } catch { return null; }
}

/** Vero se due oggetti di dati semplici sono uguali. */
const uguali = (a, b) => Object.keys(b).every(k => a?.[k] === b[k]);

let inCorso = false;

/**
 * Controlla e ripara tutti i collegamenti e le zone del mondo.
 * @param {object} [opzioni]
 * @param {boolean} [opzioni.avvisa=false]  Mostra sempre il resoconto (anche se è tutto a posto)
 * @returns {Promise<{codici:number, riparati:number, zone:number, mancanti:object[]}>}
 */
export async function riparaCollegamenti({ avvisa = false } = {}) {
  const rapporto = { codici: 0, riparati: 0, zone: 0, mancanti: [] };
  if (!game.user.isGM || inCorso) return rapporto;
  inCorso = true;
  try {
    // 1) Codici mancanti (portali delle versioni precedenti o aggiunti a mano dalla configurazione della regione).
    const daCodificare = new Set();
    for (const r of tutteLeRegioni()) {
      if (r.getFlag(MOD, "ruolo") || r.behaviors.some(b => b.type === TIPO)) daCodificare.add(r);
    }
    for (const b of tuttiIPortali()) {
      // Un arrivo senza memoria è fidato solo se il portale non ricorda un codice diverso.
      const d = risolvi(b.system.destinazione);
      if (d && !b.getFlag(MOD, "codiceArrivo")) daCodificare.add(d);
    }
    for (const r of daCodificare) {
      if (codiceDi(r)) continue;
      await r.setFlag(MOD, "codice", nuovoCodice());
      rapporto.codici++;
    }

    // 2) Indice codice → aree.
    const perCodice = new Map();
    for (const r of tutteLeRegioni()) {
      const c = codiceDi(r);
      if (!c) continue;
      if (!perCodice.has(c)) perCodice.set(c, []);
      perCodice.get(c).push(r);
    }

    // 3) Ogni portale punta all'area giusta?
    for (const b of tuttiIPortali()) {
      const R = b.parent;
      const ricordo = b.flags?.[MOD] ?? {};
      const attuale = risolvi(b.system.destinazione);
      let giusto = attuale;
      if (ricordo.codiceArrivo) {
        const corretto = attuale && codiceDi(attuale) === ricordo.codiceArrivo
          && (!ricordo.arrivoStessaScena || attuale.parent === R.parent);
        if (!corretto) {
          const candidati = perCodice.get(ricordo.codiceArrivo) ?? [];
          // Se l'arrivo era sulla stessa mappa (anche una mappa duplicata) si cerca prima lì.
          giusto = (ricordo.arrivoStessaScena ? candidati.find(c => c.parent === R.parent) : null)
            ?? candidati.find(c => c.parent !== R.parent && c !== R)
            ?? candidati.find(c => c !== R)
            ?? null;
        }
      }
      if (!giusto) {
        rapporto.mancanti.push({ portale: R.name, mappa: R.parent.name, arrivo: ricordo.nomeArrivo ?? "", scena: ricordo.scenaArrivo ?? "" });
        continue;
      }
      const memoria = memoriaArrivo(giusto, R);
      if (giusto !== attuale) {
        await b.update({ "system.destinazione": giusto.uuid, [`flags.${MOD}`]: memoria });
        rapporto.riparati++;
        log(`collegamento riparato: «${R.name}» → «${giusto.name}» (${giusto.parent.name})`);
      } else if (!uguali(ricordo, memoria)) {
        await b.update({ [`flags.${MOD}`]: memoria });
      }
    }

    // 4) Zone: quelle che mancano vengono ricreate dal percorso scritto nelle aree (con tutte le zone superiori,
    //    nome e colore); se c'è già una zona con lo stesso nome allo stesso livello si usa quella.
    const elenco = elencoZone();
    const perId = new Map(elenco.map(z => [z.id, z]));
    let cambiato = false;
    for (const r of tutteLeRegioni()) {
      const id = r.getFlag(MOD, "zona");
      if (!id || perId.has(id)) continue;
      let percorso = r.getFlag(MOD, "zonaPercorso");
      if (!Array.isArray(percorso) || !percorso.length) {
        const nome = r.getFlag(MOD, "zonaNome");
        if (!nome) continue; // zona sconosciuta e senza nome: non si può ricreare
        percorso = [{ id, nome, colore: r.getFlag(MOD, "zonaColore") }];
      }
      let padre = null;
      for (const passo of percorso) {
        let z = perId.get(passo.id) ?? elenco.find(x => (x.padre ?? null) === padre && x.nome === passo.nome);
        if (!z) {
          z = { id: passo.id, nome: passo.nome, colore: coloreValido(passo.colore), padre };
          elenco.push(z);
          perId.set(z.id, z);
          cambiato = true;
          rapporto.zone++;
        }
        padre = z.id;
      }
      if (padre && padre !== id) await r.setFlag(MOD, "zona", padre);
    }
    if (cambiato) await salvaZone(elenco);
    await aggiornaFlagZone(); // nome, colore e percorso aggiornati in tutte le aree
  } catch (err) {
    console.error("Magic Way | riparazione non riuscita", err);
  } finally {
    inCorso = false;
  }

  // Resoconto.
  if (rapporto.riparati || rapporto.zone) {
    ui.notifications.info(t("MAGICWAY.Avvisi.riparati", { n: rapporto.riparati, z: rapporto.zone }));
  } else if (avvisa && !rapporto.mancanti.length) {
    ui.notifications.info(t("MAGICWAY.Avvisi.tuttoAPosto"));
  }
  if (avvisa && rapporto.mancanti.length) {
    const scene = [...new Set(rapporto.mancanti.map(m => m.scena).filter(Boolean))].join(", ") || "?";
    ui.notifications.warn(t("MAGICWAY.Avvisi.mancanti", { n: rapporto.mancanti.length, scene }), { permanent: true });
  }
  return rapporto;
}

/** Riparazione automatica: all'avvio e dopo ogni importazione (solo sul client del master attivo). */
export function registraRiparazione() {
  const automatica = foundry.utils.debounce(() => { if (sonoIlGmAttivo()) riparaCollegamenti(); }, 1500);
  for (const e of ["createScene", "createRegion", "importAdventure"]) Hooks.on(e, automatica);
  if (sonoIlGmAttivo()) riparaCollegamenti();
}
