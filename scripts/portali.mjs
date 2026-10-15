/**
 * MAGIC WAY – creazione, modifica ed eliminazione dei portali (solo master).
 *
 * Un portale creato dal pannello è un COLLEGAMENTO fra due aree, ognuna con il suo nome scelto dal master:
 *  - area d'INGRESSO (viola sul livello Regioni) con il comportamento Magic Way → punta all'arrivo;
 *  - area d'ARRIVO (verde) nella scena di destinazione: è l'area di aggancio dove compaiono i token.
 *    Se c'è il ritorno, l'arrivo ha a sua volta un comportamento Magic Way che punta all'ingresso.
 * Entrambe sono visibili solo al master e solo quando è attivo il livello Regioni.
 * La zona (gruppo del pannello) è salvata nei flag magic-way.zona (id), zonaNome, zonaColore e zonaPercorso di tutte
 * e due le aree.
 *
 * A PROVA DI ESPORTAZIONE: ogni area ha un codice proprio (flag magic-way.codice) e ogni portale ricorda,
 * nei suoi flag, il codice, il nome e la mappa del suo arrivo (memoriaArrivo). Se la mappa viene esportata
 * e importata in un altro mondo con ID diversi, riparazione.mjs ritrova l'arrivo dal codice e ripara il collegamento.
 */
import { MOD, TIPO, COLORI, t } from "./costanti.mjs";

/** Visibilità delle regioni: solo sul livello Regioni del master (i giocatori non le vedono mai). */
const VISIBILITA = CONST.REGION_VISIBILITY?.LAYER ?? 0;

/** Nuovo codice di un'area (resta uguale anche quando la mappa viene esportata e importata). */
export const nuovoCodice = () => foundry.utils.randomID(16);

/** Codice di un'area (null se non ce l'ha). */
export const codiceDi = region => region?.getFlag?.(MOD, "codice") ?? null;

/** Quello che un portale ricorda del suo arrivo, per poterlo ritrovare dopo un'importazione. */
export function memoriaArrivo(dest, regionePortale) {
  return {
    codiceArrivo: codiceDi(dest),
    nomeArrivo: dest.name,
    scenaArrivo: dest.parent?.name ?? "",
    arrivoStessaScena: dest.parent === regionePortale.parent
  };
}

/**
 * Dati della zona con questo id da scrivere nelle aree: nome, colore e percorso (le zone dalla più esterna a
 * questa, con id, nome, colore). Tutto null se la zona non esiste.
 */
function datiZona(id) {
  const elenco = game.settings.get(MOD, "zone")?.elenco ?? [];
  const z = id ? elenco.find(z => z.id === id) : null;
  if (!z) return { nome: null, colore: null, percorso: null };
  const percorso = [];
  const viste = new Set();
  for (let x = z; x && !viste.has(x.id); x = x.padre ? elenco.find(y => y.id === x.padre) : null) {
    viste.add(x.id);
    percorso.unshift({ id: x.id, nome: x.nome, colore: x.colore ?? null });
  }
  return { nome: z.nome, colore: z.colore ?? null, percorso };
}

/** Riscrive in tutte le aree nome, colore e percorso della loro zona (dopo una modifica alle zone). */
export async function aggiornaFlagZone() {
  for (const s of game.scenes) for (const r of s.regions) {
    const id = r.getFlag(MOD, "zona");
    if (!id) continue;
    const d = datiZona(id);
    if (!d.nome) continue; // zona sconosciuta: ci pensa la riparazione
    const ora = { n: r.getFlag(MOD, "zonaNome"), c: r.getFlag(MOD, "zonaColore") ?? null, p: JSON.stringify(r.getFlag(MOD, "zonaPercorso") ?? null) };
    if (ora.n === d.nome && ora.c === d.colore && ora.p === JSON.stringify(d.percorso)) continue;
    await r.update({ [`flags.${MOD}.zonaNome`]: d.nome, [`flags.${MOD}.zonaColore`]: d.colore, [`flags.${MOD}.zonaPercorso`]: d.percorso });
  }
}

/** Forma rettangolare della regione a partire dall'area disegnata sulla mappa. */
function forma(area) {
  return { type: "rectangle", x: area.x, y: area.y, width: area.width, height: area.height, rotation: 0, hole: false };
}

/**
 * Crea un collegamento completo.
 * @param {object} dati     {nome, nomeArrivo, modalita, passano, ritorno, modalitaRitorno, zona}
 * @param {object} ingresso {scena, area, livello} dall'area disegnata sulla mappa
 * @param {object} arrivo   {scena, area, livello} dall'area disegnata sulla mappa
 */
export async function creaPortale(dati, ingresso, arrivo) {
  const nome = dati.nome?.trim() || t("MAGICWAY.Portale.nomePredefinito");
  const nomeArrivo = dati.nomeArrivo?.trim() || `${nome} – ${t("MAGICWAY.Portale.arrivo")}`;
  const zona = dati.zona && dati.zona !== "tutti" ? dati.zona : null;
  const { nome: zonaNome, colore: zonaColore, percorso: zonaPercorso } = datiZona(zona);

  // 1) Area d'arrivo.
  const datiArrivo = {
    name: nomeArrivo,
    color: COLORI.arrivo,
    shapes: [forma(arrivo.area)],
    visibility: VISIBILITA,
    hidden: false, // «Nascosto» spegnerebbe il portale: le aree sono già invisibili ai giocatori grazie a visibility
    flags: { [MOD]: { ruolo: "arrivo", zona, zonaNome, zonaColore, zonaPercorso, codice: nuovoCodice() } }
  };
  if (arrivo.livello) datiArrivo.levels = [arrivo.livello];
  const [regArrivo] = await arrivo.scena.createEmbeddedDocuments("Region", [datiArrivo]);

  // 2) Area d'ingresso con il comportamento che porta all'arrivo.
  const datiIngresso = {
    name: nome,
    color: COLORI.ingresso,
    shapes: [forma(ingresso.area)],
    visibility: VISIBILITA,
    hidden: false, // «Nascosto» spegnerebbe il portale: le aree sono già invisibili ai giocatori grazie a visibility
    flags: { [MOD]: { ruolo: "ingresso", zona, zonaNome, zonaColore, zonaPercorso, codice: nuovoCodice() } },
    behaviors: [{
      name: "Magic Way",
      type: TIPO,
      system: { destinazione: regArrivo.uuid, modalita: dati.modalita, aperto: true, passano: dati.passano ?? "giocatori" },
      flags: { [MOD]: { ...memoriaArrivo(regArrivo, { parent: ingresso.scena }) } }
    }]
  };
  if (ingresso.livello) datiIngresso.levels = [ingresso.livello];
  const [regIngresso] = await ingresso.scena.createEmbeddedDocuments("Region", [datiIngresso]);

  // 3) Ritorno facoltativo: l'arrivo diventa a sua volta un portale verso l'ingresso.
  if (dati.ritorno) await creaRitorno(regArrivo, regIngresso, { modalita: dati.modalitaRitorno ?? dati.modalita, passano: dati.passano });
  ui.notifications.info(t("MAGICWAY.Avvisi.creato", { nome, da: ingresso.scena.name, a: arrivo.scena.name }));
  return { ingresso: regIngresso, arrivo: regArrivo };
}

/** Aggiunge alla regione «da» un comportamento Magic Way che porta alla regione «verso». */
export async function creaRitorno(da, verso, { modalita = "libero", passano = "giocatori" } = {}) {
  for (const r of [da, verso]) if (!codiceDi(r)) await r.setFlag(MOD, "codice", nuovoCodice());
  const [b] = await da.createEmbeddedDocuments("RegionBehavior", [{
    name: `Magic Way – ${t("MAGICWAY.Portale.ritorno")}`,
    type: TIPO,
    system: { destinazione: verso.uuid, modalita, aperto: true, passano },
    flags: { [MOD]: memoriaArrivo(verso, da) }
  }]);
  return b;
}

/** Tutti i comportamenti Magic Way di tutte le scene. */
export function tuttiIPortali() {
  const elenco = [];
  for (const scena of game.scenes) {
    for (const region of scena.regions) {
      for (const behavior of region.behaviors) if (behavior.type === TIPO) elenco.push(behavior);
    }
  }
  return elenco;
}

/**
 * Raggruppa i portali in COLLEGAMENTI (le due aree collegate, da mostrare affiancate).
 * @returns {{chiave: string, lati: {region: RegionDocument, behavior: RegionBehavior|null}[]}[]}
 *          lati[0] è l'ingresso (o il lato che ha il portale), lati[1] l'altra area (assente se manca l'arrivo)
 */
export function collegamenti() {
  const mappa = new Map();
  for (const b of tuttiIPortali()) {
    const r = b.parent;
    const d = b.system.destinazione ? fromUuidSync(b.system.destinazione) : null;
    const chiave = d ? [r.uuid, d.uuid].sort().join("|") : `${r.uuid}|`;
    let c = mappa.get(chiave);
    if (!c) { c = { chiave, regioni: new Map() }; mappa.set(chiave, c); }
    const lato = c.regioni.get(r.uuid);
    if (!lato) c.regioni.set(r.uuid, { region: r, behavior: b });
    else if (!lato.behavior) lato.behavior = b;
    if (d && !c.regioni.has(d.uuid)) c.regioni.set(d.uuid, { region: d, behavior: null });
  }
  return [...mappa.values()].map(c => {
    const lati = [...c.regioni.values()];
    // Prima l'ingresso creato dal pannello, poi chi ha il portale.
    const peso = l => (l.region.getFlag(MOD, "ruolo") === "ingresso" ? 0 : 2) + (l.behavior ? 0 : 1);
    lati.sort((a, b) => peso(a) - peso(b));
    return { chiave: c.chiave, lati };
  });
}

/** Trova un portale da uuid (del comportamento o della regione) oppure dal nome della regione. */
export function trovaPortale(chiave) {
  if (!chiave) return null;
  if (chiave.documentName === "RegionBehavior") return chiave;
  if (chiave.documentName === "Region") return chiave.behaviors.find(b => b.type === TIPO) ?? null;
  const doc = typeof chiave === "string" && chiave.includes(".") ? fromUuidSync(chiave) : null;
  if (doc?.documentName === "RegionBehavior") return doc;
  if (doc?.documentName === "Region") return doc.behaviors.find(b => b.type === TIPO) ?? null;
  return tuttiIPortali().find(b => b.parent.name === chiave) ?? null;
}

/**
 * Elimina un collegamento INSIEME ALLE SUE AREE (le regioni sulla mappa vengono cancellate in automatico).
 * Un'area si tiene, togliendole solo i portali di questo collegamento, soltanto se serve ancora ad altro:
 * - ha comportamenti che non appartengono a questo collegamento (altri portali o comportamenti di altri moduli);
 * - un portale di un ALTRO collegamento ci porta dentro.
 * @param {RegionDocument[]} regioni  Le aree del collegamento
 */
export async function eliminaCollegamento(regioni) {
  const aree = regioni.map(r => fromUuidSync(r.uuid) ?? r).filter(r => r?.parent);
  const uuids = new Set(aree.map(r => r.uuid));
  // Portale di questo collegamento: Magic Way e porta a un'altra area del collegamento (o a nessuna, se rotto).
  const delCollegamento = b => b.type === TIPO && (!b.system.destinazione || uuids.has(b.system.destinazione));
  const portali = tuttiIPortali();
  const daCancellare = new Map(); // scena → id delle regioni da cancellare
  const daRipulire = [];          // [regione, id dei comportamenti da togliere]
  for (const r of aree) {
    const altri = r.behaviors.filter(b => !delCollegamento(b));
    const usataDaFuori = portali.some(b => b.system.destinazione === r.uuid && !uuids.has(b.parent?.uuid));
    if (!altri.length && !usataDaFuori) {
      if (!daCancellare.has(r.parent)) daCancellare.set(r.parent, []);
      daCancellare.get(r.parent).push(r.id);
    } else {
      const ids = r.behaviors.filter(delCollegamento).map(b => b.id);
      if (ids.length) daRipulire.push([r, ids]);
    }
  }
  // Cancellando la regione si cancellano anche i suoi comportamenti.
  for (const [scena, ids] of daCancellare) await scena.deleteEmbeddedDocuments("Region", ids);
  for (const [r, ids] of daRipulire) await r.deleteEmbeddedDocuments("RegionBehavior", ids);
}

/**
 * Ridisegna un'area (ingresso o arrivo) con il rettangolo appena disegnato sulla mappa.
 * - Stessa scena: si cambia solo la forma (e il livello).
 * - Altra scena: si crea la regione nella nuova scena copiando nome, colore, flag e comportamenti, tutti i
 *   portali che puntavano alla vecchia vengono aggiornati e la vecchia viene cancellata.
 * @param {RegionDocument} region
 * @param {{scena: Scene, area: object, livello: string|null}} disegno
 */
export async function ridisegnaRegione(region, disegno) {
  const nuovaForma = [forma(disegno.area)];
  if (region.parent === disegno.scena) {
    const agg = { shapes: nuovaForma };
    if (disegno.livello) agg.levels = [disegno.livello];
    await region.update(agg);
    return region;
  }
  const dati = region.toObject();
  delete dati._id;
  dati.shapes = nuovaForma;
  if (disegno.livello) dati.levels = [disegno.livello]; else delete dati.levels;
  dati.behaviors = (dati.behaviors ?? []).map(b => { const c = { ...b }; delete c._id; return c; });
  const [nuova] = await disegno.scena.createEmbeddedDocuments("Region", [dati]);
  for (const b of tuttiIPortali()) {
    if (b.system.destinazione === region.uuid) {
      await b.update({ "system.destinazione": nuova.uuid, [`flags.${MOD}`]: memoriaArrivo(nuova, b.parent) });
    }
  }
  // I portali dentro l'area spostata ora stanno su un'altra mappa: si aggiorna quello che ricordano.
  for (const b of nuova.behaviors) {
    const d = b.type === TIPO && b.system.destinazione ? fromUuidSync(b.system.destinazione) : null;
    if (d) await b.update({ [`flags.${MOD}`]: memoriaArrivo(d, nuova) });
  }
  await region.delete();
  return nuova;
}

/** Mette le aree di un collegamento in una zona (null = nessuna zona). */
export async function assegnaZona(regioni, zona) {
  const valore = zona && zona !== "tutti" ? zona : null;
  const { nome, colore, percorso } = datiZona(valore);
  for (const r of regioni) {
    await r.update({ [`flags.${MOD}.zona`]: valore, [`flags.${MOD}.zonaNome`]: nome,
      [`flags.${MOD}.zonaColore`]: colore, [`flags.${MOD}.zonaPercorso`]: percorso });
  }
}
