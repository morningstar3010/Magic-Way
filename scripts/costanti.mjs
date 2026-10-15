/**
 * MAGIC WAY – costanti e piccole utilità condivise da tutti i file del modulo.
 */

/** Id del modulo (uguale alla cartella dentro Data/modules). */
export const MOD = "magic-way";

/**
 * Tipo del comportamento di regione registrato dal modulo.
 * Nel module.json è dichiarato come "portale": Foundry gli antepone da solo l'id del modulo.
 */
export const TIPO = `${MOD}.portale`;

/** Canale socket del modulo (richiede "socket": true nel module.json). */
export const SOCKET = `module.${MOD}`;

/** Le tre modalità di funzionamento di un portale → chiave di traduzione. */
export const MODALITA = {
  libero: "MAGICWAY.Modalita.libero",
  controllato: "MAGICWAY.Modalita.controllato",
  comando: "MAGICWAY.Modalita.comando"
};

/** Chi può passare attraverso un portale → chiave di traduzione. */
export const PASSANO = {
  giocatori: "MAGICWAY.Passano.giocatori",
  png: "MAGICWAY.Passano.png",
  tutti: "MAGICWAY.Passano.tutti"
};

/** Colori con cui il master vede le caselle sul livello Regioni (i giocatori non le vedono mai). */
export const COLORI = {
  ingresso: "#8e44ad",
  arrivo: "#16a085"
};

/** Messaggio nella console del browser con il prefisso del modulo. */
export const log = (...args) => console.log("Magic Way |", ...args);

/** Traduzione breve: t("CHIAVE") oppure t("CHIAVE", {valori}). */
export const t = (chiave, dati) => (dati ? game.i18n.format(chiave, dati) : game.i18n.localize(chiave));

/** Vero solo sul client del master attivo (uno solo, anche se ci sono più master collegati). */
export const sonoIlGmAttivo = () => game.user.isActiveGM ?? (game.users.activeGM?.id === game.user.id);
