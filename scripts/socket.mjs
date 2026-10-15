/**
 * MAGIC WAY – comunicazione fra i client.
 *
 * Un giocatore non può creare token su un'altra scena né cancellarli: quando il suo token entra in un
 * portale, il suo client chiede al master attivo di eseguire il teletrasporto. Il master, a sua volta,
 * avvisa i client dei giocatori coinvolti perché centrino la vista sul loro token appena arrivato.
 */
import { SOCKET, sonoIlGmAttivo, log, t } from "./costanti.mjs";

/** Azioni che può eseguire solo il master attivo: nome → funzione(dati). Popolato da main.mjs. */
export const AZIONI_GM = {};

/** Azioni che esegue ogni client destinatario: nome → funzione(dati). Popolato da main.mjs. */
export const AZIONI_CLIENT = {};

/** Chiede al master attivo di eseguire un'azione (se questo client È il master attivo la esegue subito). */
export function inviaAlGm(azione, dati) {
  if (sonoIlGmAttivo()) return eseguiGm(azione, dati);
  if (!game.users.activeGM) {
    ui.notifications.warn(t("MAGICWAY.Avvisi.serveMaster"));
    return;
  }
  game.socket.emit(SOCKET, { verso: "gm", azione, dati });
}

/** Manda un'azione ai client di alcuni utenti (array di id). Il mittente la esegue subito se è fra i destinatari. */
export function inviaAiClient(azione, dati, utenti) {
  if (!utenti?.length) return;
  game.socket.emit(SOCKET, { verso: "client", azione, dati, utenti });
  if (utenti.includes(game.user.id)) eseguiClient(azione, dati);
}

/** Manda un'azione a tutti i client collegati, compreso questo. */
export function inviaATutti(azione, dati) {
  game.socket.emit(SOCKET, { verso: "tutti", azione, dati });
  eseguiClient(azione, dati);
}

async function eseguiGm(azione, dati) {
  const fn = AZIONI_GM[azione];
  if (!fn) return log("azione sconosciuta", azione);
  try { return await fn(dati); } catch (err) { console.error("Magic Way | errore", azione, err); }
}

async function eseguiClient(azione, dati) {
  const fn = AZIONI_CLIENT[azione];
  if (!fn) return log("azione client sconosciuta", azione);
  try { return await fn(dati); } catch (err) { console.error("Magic Way | errore client", azione, err); }
}

/** Ascolta i messaggi in arrivo. */
export function registraSocket() {
  game.socket.on(SOCKET, msg => {
    if (!msg?.azione) return;
    if (msg.verso === "gm") {
      if (sonoIlGmAttivo()) eseguiGm(msg.azione, msg.dati);
    } else if (msg.verso === "tutti") {
      eseguiClient(msg.azione, msg.dati);
    } else if (msg.verso === "client") {
      if (msg.utenti?.includes(game.user.id)) eseguiClient(msg.azione, msg.dati);
    }
  });
}
