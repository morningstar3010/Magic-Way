/**
 * MAGIC WAY – il comportamento di regione "Magic Way – Portale".
 *
 * Un portale è una Regione di Foundry (invisibile ai giocatori) con questo comportamento.
 * Dati salvati nel comportamento:
 *  - destinazione   → la regione d'arrivo (area di aggancio), anche su un'altra scena
 *  - modalita       → "libero" | "controllato" (aperto/chiuso) | "comando"
 *  - aperto         → usato solo in modalità "controllato"
 *  - passano        → chi viene teletrasportato: "giocatori" (token di un giocatore), "png" (mostri e PNG
 *                     del master) oppure "tutti". Sceglie il master, portale per portale.
 *
 * Quando un token ENTRA nell'area muovendosi, il client di chi l'ha mosso ferma il resto del movimento
 * e chiede al master attivo di teletrasportarlo (vedi teletrasporto.mjs). Il master ricontrolla tutto.
 */
import { MODALITA, PASSANO } from "./costanti.mjs";
import { richiediTeletrasporto, ingressoAperto, tokenAmmesso, appenaArrivato } from "./teletrasporto.mjs";

const { DocumentUUIDField, StringField, BooleanField } = foundry.data.fields;

export class PortaleMagicWay extends foundry.data.regionBehaviors.RegionBehaviorType {

  /** Etichette e suggerimenti dei campi: MAGICWAY.Comportamento.FIELDS.<campo>.label / .hint */
  static LOCALIZATION_PREFIXES = ["MAGICWAY.Comportamento"];

  static defineSchema() {
    return {
      destinazione: new DocumentUUIDField({ type: "Region" }),
      modalita: new StringField({ required: true, blank: false, initial: "libero", choices: MODALITA }),
      aperto: new BooleanField({ initial: true }),
      passano: new StringField({ required: true, blank: false, initial: "giocatori", choices: PASSANO })
    };
  }

  /** Portali della versione 1.0/1.1: la vecchia spunta "solo giocatori" diventa la scelta "chi passa". */
  static migrateData(source) {
    if ((source.passano === undefined) && ("soloGiocatori" in source)) {
      source.passano = source.soloGiocatori === false ? "tutti" : "giocatori";
    }
    return super.migrateData(source);
  }

  /**
   * Un token è entrato nell'area muovendosi.
   * @param {object} event  Evento di regione (event.data.token, event.data.movement, event.user)
   * @this {PortaleMagicWay}
   */
  static async #entrata(event) {
    // Reagisce solo il client dell'utente che ha mosso il token (l'evento arriva a tutti).
    if (!event.user?.isSelf) return;
    const { token, movement } = event.data ?? {};
    if (!token || !this.destinazione) return;
    if (!ingressoAperto(this)) return;
    if (!tokenAmmesso(this, token)) return;

    // Niente rimbalzi: il token è appena arrivato da un altro portale, oppure è stato "saltato" qui.
    if (appenaArrivato(token)) return;
    const ultimo = movement?.passed?.waypoints?.at?.(-1);
    if (ultimo?.action === "displace") return;

    // Il resto del percorso non va fatto: il token sparisce nel portale.
    try {
      if (movement) {
        if (typeof token.stopMovement === "function") await token.stopMovement();
        else token.pauseMovement?.();
      }
    } catch (err) { /* il movimento era già finito */ }
    try { await token.object?.movementAnimationPromise; } catch (err) { /* nessuna animazione in corso */ }

    richiediTeletrasporto((this.behavior ?? this.parent).uuid, [token.uuid], { automatico: true });
  }

  static events = {
    [CONST.REGION_EVENTS.TOKEN_MOVE_IN ?? "tokenMoveIn"]: this.#entrata
  };
}
