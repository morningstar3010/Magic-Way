/**
 * MAGIC WAY – lingua forzata.
 *
 * Di solito Foundry carica da solo il file lang/<lingua>.json che corrisponde alla lingua scelta nel client.
 * Se però la lingua di Foundry ha un codice diverso da quello dei file del modulo (per esempio un pacchetto
 * di traduzione che usa un codice suo), Magic Way resterebbe in inglese. Con l'impostazione «Lingua di Magic Way»
 * l'utente sceglie la lingua a mano: all'avvio (hook i18nInit) i testi di quella lingua, presi da
 * lingue-dati.mjs, vengono copiati sopra quelli caricati da Foundry. Riguarda SOLO i testi di Magic Way:
 * la lingua di Foundry, del sistema di gioco e degli altri moduli non cambia.
 */
import { MOD, TIPO, log } from "./costanti.mjs";
import { TESTI } from "./lingue-dati.mjs";
import { PortaleMagicWay } from "./comportamento.mjs";

/** Applica la lingua scelta nelle impostazioni (se non è «Automatica»). */
export function applicaLinguaForzata() {
  let scelta = "auto";
  try { scelta = game.settings.get(MOD, "lingua"); } catch (err) { return; }
  if (!scelta || scelta === "auto" || !TESTI[scelta]) return;

  // Si toccano SOLO i testi di Magic Way: la lingua di Foundry, del sistema e degli altri moduli resta com'è.
  //  - il blocco MAGICWAY (tutti i testi del modulo);
  //  - il nome e la descrizione del comportamento «magic-way.portale» (nient'altro dentro TYPES).
  const dati = foundry.utils.deepClone(TESTI[scelta]);
  const tr = game.i18n.translations;
  tr.MAGICWAY = foundry.utils.mergeObject(tr.MAGICWAY ?? {}, dati.MAGICWAY, { inplace: false });
  const nome = dati.TYPES?.RegionBehavior?.[TIPO];
  const descrizione = dati.TYPES?.HINTS?.RegionBehavior?.[TIPO];
  tr.TYPES ??= {};
  if (nome) { tr.TYPES.RegionBehavior ??= {}; tr.TYPES.RegionBehavior[TIPO] = nome; }
  if (descrizione) { tr.TYPES.HINTS ??= {}; tr.TYPES.HINTS.RegionBehavior ??= {}; tr.TYPES.HINTS.RegionBehavior[TIPO] = descrizione; }

  // Etichette dei campi del comportamento nella configurazione della regione.
  try {
    const L = foundry.helpers?.Localization ?? globalThis.Localization;
    L?.localizeDataModel?.(PortaleMagicWay);
  } catch (err) { log("etichette del comportamento non aggiornate", err); }
  log(`lingua forzata: ${scelta}`);
}
