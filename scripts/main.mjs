/**
 * MAGIC WAY  (modulo Foundry VTT v14, funziona con qualsiasi sistema di gioco)
 * ------------------------------------------------------------------------------------------
 * Portali di teletrasporto fra mappe (o dentro la stessa mappa) con caselle di aggancio invisibili
 * ai giocatori e un pannello di controllo per il master. Tre modalità:
 *   - LIBERO        chi entra nella casella viene teletrasportato subito all'arrivo;
 *   - APERTO/CHIUSO come il libero, ma funziona solo quando il master lo apre dal pannello;
 *   - SU COMANDO    entrare non fa niente: il master preme "Teletrasporta ora" e tutti i presenti
 *                   nell'area vengono portati all'arrivo.
 * Per ogni portale il master sceglie chi passa: solo giocatori, solo mostri e PNG, oppure tutti.
 * Effetto magico (attivabile): lampo e dissolvenza alla partenza, lampo e apparizione all'arrivo.
 * Lingue: inglese, italiano, tedesco, spagnolo, francese, polacco, portoghese brasiliano, russo,
 * cinese semplificato, giapponese, coreano. La lingua si può forzare nelle impostazioni del modulo.
 * A prova di esportazione: dopo l'importazione di mappe o avventure i collegamenti si riparano da soli.
 *
 * API per macro e altri moduli:  game.modules.get("magic-way").api
 *   .pannello()                         apre il pannello del master
 *   .portali()                          elenco dei comportamenti portale di tutte le scene
 *   .apri("Nome portale")               apre un portale aperto/chiuso (anche per uuid)
 *   .chiudi("Nome portale")             lo chiude
 *   .alterna("Nome portale")            apre se chiuso, chiude se aperto
 *   .modalita("Nome portale", "comando") cambia modalità: "libero" | "controllato" | "comando"
 *   .passano("Nome portale", "tutti")    chi passa: "giocatori" | "png" (mostri e PNG del master) | "tutti"
 *   .teletrasporta("Nome portale")      teletrasporta subito tutti i presenti nell'area
 *   .teletrasportaToken("Nome portale", [token]) teletrasporta token scelti (anche se non sono nell'area)
 *   .ripara()                           ripara i collegamenti dopo un'importazione (lo fa anche da solo)
 * Hook emesso dopo ogni teletrasporto:  Hooks.on("magic-way.teletrasporto", ({portale, destinazione, tokens}) => …)
 */
import { MOD, TIPO, t, log } from "./costanti.mjs";
import { registraImpostazioni } from "./impostazioni.mjs";
import { registraSocket, AZIONI_GM, AZIONI_CLIENT } from "./socket.mjs";
import { PortaleMagicWay } from "./comportamento.mjs";
import { eseguiRichiesta, teletrasporta, presentiNelPortale, centraSuToken, centraDopoCaricamento } from "./teletrasporto.mjs";
import { tuttiIPortali, trovaPortale } from "./portali.mjs";
import { lampo } from "./effetti.mjs";
import { riparaCollegamenti, registraRiparazione } from "./riparazione.mjs";
import { applicaLinguaForzata } from "./lingua.mjs";
import { apriPannello, registraAggiornamentoPannello, aggiungiPulsanti } from "./pannello.mjs";

Hooks.once("init", () => {
  log("inizializzazione");
  // Registra il comportamento di regione "Magic Way – Portale".
  CONFIG.RegionBehavior.dataModels[TIPO] = PortaleMagicWay;
  CONFIG.RegionBehavior.typeIcons[TIPO] = "fa-solid fa-dungeon";
  registraImpostazioni();
});

// Lingua forzata dall'impostazione «Lingua di Magic Way» (dopo che Foundry ha caricato le traduzioni).
Hooks.once("i18nInit", () => applicaLinguaForzata());

// Pulsante del pannello nella barra a sinistra.
Hooks.on("getSceneControlButtons", aggiungiPulsanti);

// «Nascosto» nella configurazione della regione: in Foundry 14 spegne tutti i comportamenti dell'area, quindi anche
// il portale. Le aree Magic Way sono già invisibili ai giocatori: se il master la spunta, lo si avvisa subito.
Hooks.on("updateRegion", (region, modifiche, opzioni, userId) => {
  if (userId !== game.user.id || modifiche.hidden !== true) return;
  if (!region.getFlag(MOD, "ruolo") && !region.behaviors.some(b => b.type === TIPO)) return;
  ui.notifications.warn(t("MAGICWAY.Avvisi.nascosta", { nome: region.name }), { permanent: true });
});

// Dopo un cambio di scena: se il master ci ha appena teletrasportati, centra la vista sul nostro token.
Hooks.on("canvasReady", () => centraDopoCaricamento());

Hooks.once("ready", () => {
  Object.assign(AZIONI_GM, { teletrasporto: dati => eseguiRichiesta(dati) });
  Object.assign(AZIONI_CLIENT, { centra: dati => centraSuToken(dati), lampo: dati => lampo(dati) });
  registraSocket();
  registraAggiornamentoPannello();
  registraRiparazione();

  /** Trova il portale o avvisa. */
  const portale = chiave => {
    const b = trovaPortale(chiave);
    if (!b) ui.notifications.warn(t("MAGICWAY.Avvisi.nonTrovato", { nome: String(chiave) }));
    return b;
  };
  const soloGm = () => {
    if (game.user.isGM) return true;
    ui.notifications.warn(t("MAGICWAY.Avvisi.soloMaster"));
    return false;
  };

  game.modules.get(MOD).api = {
    pannello: () => apriPannello(),
    ripara: () => riparaCollegamenti({ avvisa: true }),
    portali: () => tuttiIPortali(),
    apri: async chiave => { const b = soloGm() && portale(chiave); if (b) await b.update({ "system.aperto": true }); },
    chiudi: async chiave => { const b = soloGm() && portale(chiave); if (b) await b.update({ "system.aperto": false }); },
    alterna: async chiave => { const b = soloGm() && portale(chiave); if (b) await b.update({ "system.aperto": !b.system.aperto }); },
    passano: async (chiave, valore) => { const b = soloGm() && portale(chiave); if (b) await b.update({ "system.passano": valore }); },
    modalita: async (chiave, modalita) => { const b = soloGm() && portale(chiave); if (b) await b.update({ "system.modalita": modalita }); },
    teletrasporta: async chiave => {
      const b = soloGm() && portale(chiave);
      if (!b) return [];
      const presenti = presentiNelPortale(b);
      if (!presenti.length) { ui.notifications.warn(t("MAGICWAY.Avvisi.nessunoPresente", { nome: b.parent.name })); return []; }
      return teletrasporta(b, presenti, { daComando: true });
    },
    teletrasportaToken: async (chiave, tokens) => {
      const b = soloGm() && portale(chiave);
      if (!b) return [];
      const docs = (tokens ?? []).map(tk => tk?.document ?? tk).filter(tk => tk?.parent === b.parent.parent);
      return teletrasporta(b, docs, { daComando: true });
    }
  };
});
