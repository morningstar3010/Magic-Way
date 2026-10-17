/**
 * MAGIC WAY – il teletrasporto vero e proprio (eseguito SEMPRE dal client del master attivo).
 *
 * - Stessa scena: il token viene spostato con un movimento di tipo "displace" (salto istantaneo, senza
 *   animazione e senza attraversare i muri).
 * - Scena diversa: il token viene ricreato nella scena d'arrivo (stesso id se libero, stesso attore,
 *   stesse impostazioni) e poi cancellato da quella di partenza. I giocatori proprietari vengono portati
 *   sulla scena d'arrivo e la loro vista viene centrata sul token.
 * - Con l'effetto attivo: lampo e dissolvenza alla partenza, lampo e apparizione all'arrivo (effetti.mjs).
 */
import { MOD, TIPO, t, log } from "./costanti.mjs";
import { calcolaPosizioni, tokenDentro } from "./geometria.mjs";
import { inviaAlGm, inviaAiClient, inviaATutti } from "./socket.mjs";
import { effettoAttivo, puntoLampo, attendi, DURATA, ATTESA_CAMBIO_SCENA } from "./effetti.mjs";

/* ------------------------------------------------------------------------------------------------ */
/*  Protezione contro il "rimbalzo"                                                                 */
/* ------------------------------------------------------------------------------------------------ */

/** Token appena arrivati: id → istante fino a cui ignorare l'ingresso in un portale. */
const ARRIVI = new Map();

/** Segna un token come appena arrivato (per 3 secondi non viene ri-teletrasportato). */
export function segnaArrivo(id) {
  ARRIVI.set(id, Date.now() + 3000);
}

/** Vero se il token è appena arrivato con un teletrasporto. */
export function appenaArrivato(token) {
  const fino = ARRIVI.get(token.id);
  if (!fino) return false;
  if (Date.now() > fino) { ARRIVI.delete(token.id); return false; }
  return true;
}

/* ------------------------------------------------------------------------------------------------ */
/*  Regole del portale                                                                              */
/* ------------------------------------------------------------------------------------------------ */

/** Vero se chi entra adesso nel portale deve essere teletrasportato da solo. */
export function ingressoAperto(sistema) {
  if (sistema.modalita === "libero") return true;
  if (sistema.modalita === "controllato") return !!sistema.aperto;
  return false; // "comando": entrare non fa niente, decide il master dal pannello
}

/** Vero se il token rientra fra quelli che il portale deve spostare. */
export function tokenAmmesso(sistema, token) {
  const delGiocatore = !!token.actor?.hasPlayerOwner;
  switch (sistema.passano) {
    case "tutti": return true;                // giocatori, mostri e PNG
    case "png": return !delGiocatore;         // solo mostri e PNG gestiti dal master
    default: return delGiocatore;             // solo i token dei giocatori
  }
}

/** Token presenti nell'area del portale che verrebbero teletrasportati. */
export function presentiNelPortale(behavior) {
  return tokenDentro(behavior.parent).filter(tk => tokenAmmesso(behavior.system, tk));
}

/* ------------------------------------------------------------------------------------------------ */
/*  Richiesta dal client che ha mosso il token                                                      */
/* ------------------------------------------------------------------------------------------------ */

/** Chiede al master attivo di teletrasportare i token indicati attraverso un portale. */
export function richiediTeletrasporto(behaviorUuid, tokenUuids, opzioni = {}) {
  return inviaAlGm("teletrasporto", { behaviorUuid, tokenUuids, ...opzioni });
}

/** Lato master: ricontrolla tutto e poi esegue. */
export async function eseguiRichiesta({ behaviorUuid, tokenUuids, automatico = false, daComando = false }) {
  const behavior = await fromUuid(behaviorUuid);
  if (!behavior || behavior.type !== TIPO || behavior.disabled) return;
  if (automatico && !ingressoAperto(behavior.system)) return;
  const scena = behavior.parent?.parent;
  const tokens = (await Promise.all((tokenUuids ?? []).map(u => fromUuid(u))))
    .filter(tk => tk && tk.parent === scena && tokenAmmesso(behavior.system, tk));
  if (!tokens.length) return;
  return teletrasporta(behavior, tokens, { daComando });
}

/* ------------------------------------------------------------------------------------------------ */
/*  Esecuzione (solo master)                                                                        */
/* ------------------------------------------------------------------------------------------------ */

/** Livello (piano) della scena d'arrivo: quello della regione, altrimenti il livello iniziale della scena. */
function livelloArrivo(region) {
  let id = region.levels ? [...region.levels][0] : undefined;
  if (id && typeof id === "object") id = id.id;
  if (!id) id = region.parent?._source?.initialLevel ?? undefined;
  return id || undefined;
}

/** Quota d'arrivo: base della regione, altrimenti base del livello, altrimenti quella attuale del token. */
function quotaArrivo(region, livello, token) {
  const b = region.elevation?.bottom;
  if (Number.isFinite(b)) return b;
  const lb = livello ? region.parent?.levels?.get?.(livello)?.elevation?.bottom : undefined;
  if (Number.isFinite(lb)) return lb;
  return Number.isFinite(token.elevation) ? token.elevation : 0;
}

/** Utenti giocatori collegati che possiedono l'attore del token. */
function proprietari(token) {
  const actor = token.actor;
  if (!actor) return [];
  return game.users.filter(u => u.active && !u.isGM && actor.testUserPermission(u, "OWNER"));
}

/**
 * Teletrasporta i token attraverso il portale.
 * @param {RegionBehavior} behavior  Il comportamento Magic Way del portale
 * @param {TokenDocument[]} tokens   Token da spostare (tutti nella scena del portale)
 * @param {object} [opzioni]
 * @param {boolean} [opzioni.daComando=false]  Avviato dal pannello del master
 * @returns {Promise<TokenDocument[]>} I token nella posizione d'arrivo
 */
export async function teletrasporta(behavior, tokens, { daComando = false } = {}) {
  if (!game.user.isGM) throw new Error(t("MAGICWAY.Avvisi.soloMaster"));
  if (!tokens?.length) return [];
  const sistema = behavior.system;
  const dest = sistema.destinazione ? await fromUuid(sistema.destinazione) : null;
  if (!dest || dest.documentName !== "Region") {
    ui.notifications.warn(t("MAGICWAY.Avvisi.senzaArrivo", { nome: behavior.parent.name }));
    return [];
  }
  const origine = behavior.parent.parent;
  const arrivo = dest.parent;
  const stessaScena = origine === arrivo;
  const livello = livelloArrivo(dest);
  const posizioni = calcolaPosizioni(dest, tokens, new Set(stessaScena ? tokens.map(tk => tk.id) : []));
  const effetto = effettoAttivo();
  const alfa = new Map(tokens.map(tk => [tk.id, tk._source.alpha ?? 1])); // trasparenza originale di ogni token
  tokens.forEach(tk => segnaArrivo(tk.id));

  // Suono facoltativo, al momento dell'attivazione.
  const suono = game.settings.get(MOD, "suono");
  if (suono) foundry.audio.AudioHelper.play({ src: suono, volume: 0.8, autoplay: true, loop: false }, true);

  // 1) PARTENZA: lampo sui token e dissolvenza.
  if (effetto) {
    inviaATutti("lampo", { scena: origine.id, fase: "partenza", punti: tokens.map(tk => puntoLampo(tk, origine)) });
    try {
      await origine.updateEmbeddedDocuments("Token", tokens.map(tk => ({ _id: tk.id, alpha: 0 })),
        { animation: { duration: DURATA } });
      await attendi(DURATA);
    } catch (err) { log("dissolvenza non riuscita", err); }
  }

  let risultato;
  try {
    if (stessaScena) {
      // 2a) Salto istantaneo dentro la stessa scena.
      const aggiornamenti = [], movimento = {};
      tokens.forEach((tk, i) => {
        const punto = { ...posizioni[i], elevation: quotaArrivo(dest, livello, tk), action: "displace" };
        if (livello) punto.level = livello;
        aggiornamenti.push({ _id: tk.id });
        movimento[tk.id] = { waypoints: [punto] };
      });
      try {
        await arrivo.updateEmbeddedDocuments("Token", aggiornamenti, { movement: movimento });
      } catch (err) {
        // Riserva: aggiornamento diretto della posizione senza animazione.
        log("movimento displace non riuscito, uso l'aggiornamento diretto", err);
        const diretti = tokens.map((tk, i) => ({ _id: tk.id, ...posizioni[i], elevation: quotaArrivo(dest, livello, tk) }));
        await arrivo.updateEmbeddedDocuments("Token", diretti, { animate: false });
      }
      risultato = tokens;
    } else {
      // 2b) Cambio di scena: ricrea i token di là (invisibili se c'è l'effetto) e cancella quelli di qua.
      const daCreare = tokens.map((tk, i) => {
        const dati = tk.toObject();
        delete dati._movementHistory;
        delete dati._regions;
        dati._id = arrivo.tokens.has(tk.id) ? foundry.utils.randomID() : tk.id;
        dati.x = posizioni[i].x;
        dati.y = posizioni[i].y;
        dati.elevation = quotaArrivo(dest, livello, tk);
        dati.alpha = effetto ? 0 : alfa.get(tk.id);
        if (livello) dati.level = livello; else delete dati.level;
        return dati;
      });
      daCreare.forEach(d => segnaArrivo(d._id));
      const creati = await arrivo.createEmbeddedDocuments("Token", daCreare, { keepId: true });
      const sostituzioni = {};
      tokens.forEach((tk, i) => { if (creati[i]) sostituzioni[tk.id] = creati[i].uuid; });
      await origine.deleteEmbeddedDocuments("Token", Object.keys(sostituzioni), { replacements: sostituzioni });
      risultato = creati;
    }
  } catch (err) {
    // Qualcosa è andato storto: i token di partenza tornano visibili.
    console.error("Magic Way | teletrasporto non riuscito", err);
    if (effetto) {
      const ancora = tokens.filter(tk => origine.tokens.has(tk.id)).map(tk => ({ _id: tk.id, alpha: alfa.get(tk.id) }));
      if (ancora.length) await origine.updateEmbeddedDocuments("Token", ancora);
    }
    ui.notifications.error(t("MAGICWAY.Avvisi.errore", { nome: behavior.parent.name }));
    return [];
  }

  // 3) Vista dei giocatori (e del master) sulla scena d'arrivo.
  await portaLaVista(dest, tokens, risultato, { stessaScena, livello, daComando });

  // 4) ARRIVO: lampo e apparizione (sul cambio di scena si lascia ai giocatori il tempo di caricarla).
  if (effetto) {
    if (!stessaScena) await attendi(ATTESA_CAMBIO_SCENA);
    inviaATutti("lampo", { scena: arrivo.id, fase: "arrivo", punti: risultato.map(tk => puntoLampo(tk, arrivo)) });
    const visibili = risultato.map((tk, i) => ({ _id: tk.id, alpha: alfa.get(tokens[i].id) ?? 1 }));
    try {
      await arrivo.updateEmbeddedDocuments("Token", visibili, { animation: { duration: DURATA } });
    } catch (err) { log("apparizione non riuscita", err); }
  }

  // 5) Avviso al master e hook per altri moduli.
  if (game.settings.get(MOD, "notifiche")) {
    ui.notifications.info(t("MAGICWAY.Avvisi.fatto", {
      chi: tokens.map(tk => tk.name).join(", "),
      portale: behavior.parent.name,
      scena: arrivo.name
    }));
  }
  Hooks.callAll(`${MOD}.teletrasporto`, { portale: behavior, destinazione: dest, tokens: risultato });
  return risultato;
}

/** Porta i giocatori proprietari (e, se richiesto, il master) sulla scena d'arrivo e centra la vista. */
async function portaLaVista(dest, vecchi, nuovi, { stessaScena, livello, daComando }) {
  const arrivo = dest.parent;
  const opzioniVista = {};
  if (livello && arrivo.levels?.size > 1) opzioniVista.level = livello;
  if (game.settings.get(MOD, "dissolvenza")) opzioniVista.transition = { type: "fade", duration: 600 };

  const idTokens = nuovi.map(tk => tk.id);

  // Giocatori proprietari dei token: vengono portati sulla scena d'arrivo.
  const utenti = new Map();
  vecchi.forEach(tk => proprietari(tk).forEach(u => utenti.set(u.id, u)));
  if (!stessaScena && utenti.size) {
    const lista = [...utenti.values()];
    if (typeof arrivo.pullUsers === "function") await arrivo.pullUsers(lista, opzioniVista);
    else lista.forEach(u => game.socket.emit("pullToScene", arrivo.id, u.id));
  }
  // ...e la loro vista viene centrata sul proprio token appena arrivato.
  if (utenti.size) inviaAiClient("centra", { scena: arrivo.id, tokens: idTokens }, [...utenti.keys()]);

  if (stessaScena || !game.settings.get(MOD, "segueMaster")) return;

  // «Il master segue il gruppo»:
  //  - se ora TUTTI i giocatori collegati sono sulla scena d'arrivo (quelli appena portati più quelli che c'erano già),
  //    la scena d'arrivo diventa la scena attiva e anche il master ci passa. Non conta chi ha mosso il token (giocatore
  //    o master) e vale anche quando non c'è nessun giocatore collegato (per esempio mentre il master prepara o prova);
  //  - altrimenti il master ci passa solo dopo un teletrasporto su comando (come prima).
  const giocatori = game.users.filter(u => u.active && !u.isGM);
  const tuttiLi = giocatori.every(u => utenti.has(u.id) || u.viewedScene === arrivo.id);
  if (tuttiLi && !arrivo.active) await arrivo.activate();
  if ((tuttiLi || daComando) && canvas.scene?.id !== arrivo.id) {
    await arrivo.view(opzioniVista);
    centraSuToken({ scena: arrivo.id, tokens: idTokens, controlla: false });
  }
}

/* ------------------------------------------------------------------------------------------------ */
/*  Lato giocatore: centra la vista sul token arrivato                                              */
/* ------------------------------------------------------------------------------------------------ */

let centraInSospeso = null;

/** Centra la vista sui token indicati (subito se la scena è già quella visibile, altrimenti al caricamento). */
export function centraSuToken({ scena, tokens, controlla = true }) {
  if (canvas.ready && canvas.scene?.id === scena) return eseguiCentra(tokens, controlla);
  centraInSospeso = { scena, tokens, controlla, fino: Date.now() + 15000 };
}

function eseguiCentra(ids, controlla) {
  const oggetti = ids.map(id => canvas.tokens?.get(id)).filter(Boolean);
  if (!oggetti.length) return;
  const visibili = oggetti.filter(o => o.document.isOwner);
  if (controlla && visibili.length) visibili.forEach((o, i) => o.control({ releaseOthers: i === 0 }));
  const primo = (visibili[0] ?? oggetti[0]);
  canvas.animatePan({ x: primo.center.x, y: primo.center.y, duration: 400 });
}

/** Da chiamare a ogni canvasReady. */
export function centraDopoCaricamento() {
  const s = centraInSospeso;
  if (!s) return;
  if (Date.now() > s.fino) { centraInSospeso = null; return; }
  if (canvas.scene?.id !== s.scena) return;
  centraInSospeso = null;
  // Piccolo ritardo: i token devono essere disegnati.
  setTimeout(() => eseguiCentra(s.tokens, s.controlla), 250);
}
