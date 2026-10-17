/**
 * MAGIC WAY – impostazioni del modulo e tasto rapido per il pannello.
 * Si trovano in: Impostazioni di gioco → Configura impostazioni → Magic Way.
 */
import { MOD } from "./costanti.mjs";
import { ridisegnaPannello } from "./pannello.mjs";
import { NOMI_LINGUE } from "./lingue-dati.mjs";

export function registraImpostazioni() {
  // Lingua dei testi di Magic Way: «Automatica» segue Foundry; le altre la forzano (vedi lingua.mjs).
  // Impostazione personale di ogni utente; al cambio la pagina si ricarica.
  game.settings.register(MOD, "lingua", {
    name: "MAGICWAY.Impostazioni.lingua.nome",
    hint: "MAGICWAY.Impostazioni.lingua.hint",
    scope: "client", config: true, type: String, default: "auto",
    choices: { auto: "MAGICWAY.Impostazioni.lingua.auto", ...NOMI_LINGUE },
    requiresReload: true
  });

  // Avviso al master (in alto a destra) a ogni teletrasporto.
  game.settings.register(MOD, "notifiche", {
    name: "MAGICWAY.Impostazioni.notifiche.nome",
    hint: "MAGICWAY.Impostazioni.notifiche.hint",
    scope: "world", config: true, type: Boolean, default: true
  });

  // Effetto del portale: lampo magico, il token svanisce alla partenza e riappare all'arrivo.
  game.settings.register(MOD, "effetto", {
    name: "MAGICWAY.Impostazioni.effetto.nome",
    hint: "MAGICWAY.Impostazioni.effetto.hint",
    scope: "world", config: true, type: Boolean, default: true
  });

  // Colore del lampo magico.
  game.settings.register(MOD, "coloreEffetto", {
    name: "MAGICWAY.Impostazioni.coloreEffetto.nome",
    hint: "MAGICWAY.Impostazioni.coloreEffetto.hint",
    scope: "world", config: true,
    type: foundry.data.fields.ColorField ? new foundry.data.fields.ColorField({ nullable: false, initial: "#b06cff" }) : String,
    default: "#b06cff"
  });

  // Dissolvenza quando i giocatori vengono portati sulla scena d'arrivo.
  game.settings.register(MOD, "dissolvenza", {
    name: "MAGICWAY.Impostazioni.dissolvenza.nome",
    hint: "MAGICWAY.Impostazioni.dissolvenza.hint",
    scope: "world", config: true, type: Boolean, default: true
  });

  // Suono facoltativo suonato a tutti a ogni teletrasporto (vuoto = nessun suono).
  game.settings.register(MOD, "suono", {
    name: "MAGICWAY.Impostazioni.suono.nome",
    hint: "MAGICWAY.Impostazioni.suono.hint",
    scope: "world", config: true, type: String, default: "", filePicker: "audio"
  });

  // «Il master segue il gruppo» (impostazione di ogni master): dopo un teletrasporto su comando la sua vista passa
  // alla scena d'arrivo; e quando un portale porta TUTTI i giocatori collegati sulla nuova scena, anche il master
  // ci passa e quella scena diventa la scena attiva.
  game.settings.register(MOD, "segueMaster", {
    name: "MAGICWAY.Impostazioni.segueMaster.nome",
    hint: "MAGICWAY.Impostazioni.segueMaster.hint",
    scope: "client", config: true, type: Boolean, default: true
  });

  // Lucchetto della colonna Zone: quando è chiuso le zone non si spostano con il trascinamento
  // (i portali si possono sempre trascinare nelle zone). Impostazione personale, si cambia dal pannello.
  game.settings.register(MOD, "zoneBloccate", {
    scope: "client", config: false, type: Boolean, default: true
  });

  // Zone del pannello (gruppi di portali creati dal master). Non compare fra le impostazioni: si gestisce dal pannello.
  game.settings.register(MOD, "zone", {
    scope: "world", config: false, type: Object, default: { elenco: [] },
    onChange: () => ridisegnaPannello()
  });

  // Tasto per aprire il pannello: nessun tasto predefinito, lo assegni da Configura comandi.
  game.keybindings.register(MOD, "pannello", {
    name: "MAGICWAY.Tasto.pannello",
    editable: [],
    restricted: true,
    onDown: () => {
      game.modules.get(MOD)?.api?.pannello();
      return true;
    }
  });
}
