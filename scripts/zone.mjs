/**
 * MAGIC WAY – le ZONE del pannello.
 *
 * Una zona è un gruppo di portali scelto dal master (per esempio «Torre del mago», «Sotterranei»), con un
 * nome e un colore: nel pannello funziona come un filtro. Le zone possono stare DENTRO altre zone
 * (sottozone, a qualsiasi profondità) e sono sempre mostrate in ordine alfabetico, livello per livello.
 * Scegliendo una zona si vedono i suoi portali e quelli di tutte le sue sottozone.
 * «Tutti» mostra ogni portale e non si può cancellare.
 *
 * Elenco delle zone: impostazione di mondo magic-way.zone = { elenco: [{id, nome, colore, padre}] }
 * (padre = id della zona superiore, oppure null se la zona sta in cima).
 * La zona di un collegamento sta nei flag delle sue aree: magic-way.zona (id), zonaNome, zonaColore e
 * zonaPercorso (le zone dalla più esterna alla più interna, con id, nome e colore): servono a ricreare la zona,
 * con tutte le zone superiori, quando la mappa viene importata in un altro mondo (riparazione.mjs).
 */
import { MOD } from "./costanti.mjs";
import { assegnaZona, aggiornaFlagZone } from "./portali.mjs";

/** Colori proposti alle zone nuove, uno dopo l'altro. */
export const COLORI_ZONE = ["#8e44ad", "#16a085", "#d68910", "#2980b9", "#c0392b", "#27ae60", "#d35400", "#e84393", "#7f8c8d"];

/** Colore usato per le zone senza colore (create con le versioni precedenti). */
export const COLORE_ZONA_BASE = "#9b8f7a";

/** Colore da proporre per la prossima zona. */
export function prossimoColore() {
  const usati = new Set(elencoZone().map(z => z.colore));
  return COLORI_ZONE.find(c => !usati.has(c)) ?? COLORI_ZONE[elencoZone().length % COLORI_ZONE.length];
}

/** Colore valido (#rrggbb) oppure quello di base. */
export function coloreValido(c) {
  return /^#[0-9a-f]{6}$/i.test(String(c ?? "")) ? String(c).toLowerCase() : COLORE_ZONA_BASE;
}

/** Elenco delle zone create dal master (copia). Una zona con una zona superiore inesistente torna in cima. */
export function elencoZone() {
  const elenco = foundry.utils.deepClone(game.settings.get(MOD, "zone")?.elenco ?? []);
  const ids = new Set(elenco.map(z => z.id));
  for (const z of elenco) if (!z.padre || !ids.has(z.padre) || z.padre === z.id) z.padre = null;
  return elenco;
}

export async function salvaZone(elenco) {
  await game.settings.set(MOD, "zone", { elenco });
}

/** Confronto alfabetico (senza badare a maiuscole e accenti, con i numeri in ordine naturale). */
const alfabetico = (a, b) => a.nome.localeCompare(b.nome, game.i18n?.lang, { sensitivity: "base", numeric: true });

/** Id della zona e di tutte le sue sottozone (a qualsiasi profondità). */
export function discendenti(id, elenco = elencoZone()) {
  const risultato = new Set([id]);
  let cresciuto = true;
  while (cresciuto) {
    cresciuto = false;
    for (const z of elenco) {
      if (z.padre && risultato.has(z.padre) && !risultato.has(z.id)) { risultato.add(z.id); cresciuto = true; }
    }
  }
  return risultato;
}

/**
 * Zone in ordine di visualizzazione: ad albero, in ordine alfabetico a ogni livello.
 * @returns {{id, nome, colore, padre, profondita: number, discendenti: string[]}[]}
 */
export function alberoZone(elenco = elencoZone()) {
  const figli = new Map();
  for (const z of elenco) {
    const p = z.padre ?? "";
    if (!figli.has(p)) figli.set(p, []);
    figli.get(p).push(z);
  }
  const risultato = [];
  const visita = (padre, profondita, viste) => {
    for (const z of (figli.get(padre) ?? []).sort(alfabetico)) {
      if (viste.has(z.id)) continue; // protezione contro giri chiusi
      viste.add(z.id);
      risultato.push({ ...z, profondita, discendenti: [...discendenti(z.id, elenco)] });
      visita(z.id, profondita + 1, viste);
    }
  };
  visita("", 0, new Set());
  return risultato;
}

/** Crea una zona (anche dentro un'altra) e ne restituisce l'id. */
export async function creaZona(nome, colore, padre = null) {
  const elenco = elencoZone();
  const id = foundry.utils.randomID();
  elenco.push({ id, nome: nome.trim(), colore: coloreValido(colore), padre: elenco.some(z => z.id === padre) ? padre : null });
  await salvaZone(elenco);
  return id;
}

/** Vero se la zona «id» può andare dentro «padre» (non dentro sé stessa né dentro una sua sottozona). */
export function puoAndareDentro(id, padre, elenco = elencoZone()) {
  if (!padre) return true;
  return !discendenti(id, elenco).has(padre);
}

/** Cambia nome, colore e/o zona superiore di una zona. */
export async function modificaZona(id, { nome, colore, padre } = {}) {
  const elenco = elencoZone();
  const z = elenco.find(z => z.id === id);
  if (!z) return;
  if (nome?.trim()) z.nome = nome.trim();
  if (colore) z.colore = coloreValido(colore);
  if (padre !== undefined && puoAndareDentro(id, padre || null, elenco)) z.padre = padre || null;
  await salvaZone(elenco);
  await aggiornaFlagZone(); // nome, colore e percorso sono scritti anche nelle aree
}

/** Sposta una zona dentro un'altra (o in cima con padre = null). Restituisce false se non è possibile. */
export async function spostaZona(id, padre) {
  const elenco = elencoZone();
  const z = elenco.find(z => z.id === id);
  if (!z || !puoAndareDentro(id, padre, elenco)) return false;
  if ((z.padre ?? null) === (padre ?? null)) return true;
  z.padre = padre ?? null;
  await salvaZone(elenco);
  await aggiornaFlagZone();
  return true;
}

/** Cancella una zona: le sue sottozone e i suoi portali passano alla zona superiore (o restano senza zona). */
export async function eliminaZona(id) {
  const elenco = elencoZone();
  const z = elenco.find(z => z.id === id);
  if (!z) return;
  const superiore = z.padre ?? null;
  for (const s of game.scenes) {
    for (const r of s.regions) if (r.getFlag(MOD, "zona") === id) await assegnaZona([r], superiore);
  }
  for (const figlia of elenco) if (figlia.padre === id) figlia.padre = superiore;
  await salvaZone(elenco.filter(x => x.id !== id));
  await aggiornaFlagZone();
}
