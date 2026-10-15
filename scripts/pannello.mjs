/**
 * MAGIC WAY – il pannello di controllo del master.
 *
 * Si apre dal pulsante con la porta nella barra dei Token (o delle Regioni), dalla macro
 * game.modules.get("magic-way").api.pannello() o dal tasto assegnato in Configura comandi.
 *
 * Com'è fatto:
 *  - a SINISTRA, alta quanto la finestra, la colonna «Zone»: «Tutti» più le zone create dal master per
 *    raggruppare i portali (funzionano da filtro), in ordine alfabetico e ad albero (zone dentro le zone).
 *    Si crea, modifica ed elimina una zona; una zona si trascina dentro un'altra per farla diventare sua
 *    sottozona (o su «Tutti» per riportarla in cima); un portale si mette in una zona trascinando la testata del
 *    suo riquadro sopra la zona, oppure scegliendola nel menu del riquadro;
 *  - in ALTO: Nuovo portale, ricerca (per nome dei portali o della mappa), Apri tutti, Chiudi tutti, Solo questa scena,
 *    Ripara collegamenti (dopo aver importato mappe o avventure da un altro mondo);
 *  - al CENTRO: un riquadro per ogni collegamento, con le due aree collegate AFFIANCATE (ingresso a sinistra,
 *    arrivo a destra). Ogni area ha il suo nome, la sua mappa e, se da lì si parte, modalità, chi passa,
 *    apri/chiudi, presenti e «Teletrasporta ora». Un'area d'arrivo senza ritorno ha il pulsante «Crea il ritorno».
 * La ricerca e il filtro per zona agiscono subito, senza ridisegnare la finestra: i riquadri che non
 * corrispondono scompaiono, e durante una ricerca scompaiono anche le zone senza risultati.
 */
import { MOD, MODALITA, PASSANO, COLORI, t } from "./costanti.mjs";
import { tuttiIPortali, collegamenti, creaPortale, creaRitorno, eliminaCollegamento, ridisegnaRegione, assegnaZona } from "./portali.mjs";
import { elencoZone, alberoZone, creaZona, modificaZona, spostaZona, eliminaZona, puoAndareDentro, prossimoColore, coloreValido } from "./zone.mjs";
import { presentiNelPortale, teletrasporta } from "./teletrasporto.mjs";
import { tokenDentro, centro } from "./geometria.mjs";
import { disegnaArea, annullaCattura } from "./cattura.mjs";
import { riparaCollegamenti } from "./riparazione.mjs";

const { ApplicationV2, HandlebarsApplicationMixin, DialogV2 } = foundry.applications.api;

/**
 * Domanda Sì / No con i pulsanti nella lingua del modulo (quelli predefiniti di Foundry seguirebbero
 * la lingua generale, che può essere diversa da quella scelta per Magic Way).
 * ATTENZIONE: Foundry ripassa titoli ed etichette dei pulsanti dentro game.i18n.localize. Se gli si dà un testo
 * già tradotto che coincide con una sua chiave («Yes», «No», «Save»…), lo ritraduce nella lingua generale.
 * Per questo si passano sempre le CHIAVI MAGICWAY (che la lingua forzata ha già riempito con la lingua del modulo).
 * @param {string} titolo  Chiave del titolo
 * @param {string} domanda Testo della domanda, già tradotto
 * @returns {Promise<boolean>}
 */
async function conferma(titolo, domanda) {
  const ok = await DialogV2.confirm({
    window: { title: titolo },
    content: `<p>${domanda}</p>`,
    yes: { label: "MAGICWAY.Comune.si", icon: "fa-solid fa-check" },
    no: { label: "MAGICWAY.Comune.no", icon: "fa-solid fa-xmark" },
    rejectClose: false
  });
  return ok === true;
}

/** Colori pronti da cliccare nella finestra della zona. */
const COLORI_PROPOSTI = ["#8e44ad", "#16a085", "#d68910", "#2980b9", "#c0392b", "#27ae60", "#d35400", "#e84393", "#7f8c8d"];

/** Testo per la ricerca: minuscolo e senza accenti. */
const normalizza = s => String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();

/** Protegge un testo da inserire nell'HTML dei dialoghi. */
const esc = s => foundry.utils.escapeHTML?.(String(s)) ?? String(s).replace(/[&<>"']/g, c => `&#${c.charCodeAt(0)};`);

export class PannelloMagicWay extends HandlebarsApplicationMixin(ApplicationV2) {

  static DEFAULT_OPTIONS = {
    id: "magic-way-pannello",
    classes: ["magic-way"],
    window: { title: "MAGICWAY.Pannello.titolo", icon: "fa-solid fa-dungeon", resizable: true },
    position: { width: 1080, height: 720 },
    actions: {
      nuovo: PannelloMagicWay.#nuovo,
      annulla: PannelloMagicWay.#annulla,
      scegliIngresso: PannelloMagicWay.#scegliIngresso,
      alterna: PannelloMagicWay.#alterna,
      teletrasporta: PannelloMagicWay.#teletrasporta,
      vai: PannelloMagicWay.#vai,
      ridisegna: PannelloMagicWay.#ridisegna,
      configura: PannelloMagicWay.#configura,
      creaRitorno: PannelloMagicWay.#creaRitorno,
      elimina: PannelloMagicWay.#elimina,
      apriTutti: PannelloMagicWay.#apriTutti,
      chiudiTutti: PannelloMagicWay.#chiudiTutti,
      filtro: PannelloMagicWay.#filtro,
      zona: PannelloMagicWay.#scegliZona,
      nuovaZona: PannelloMagicWay.#nuovaZona,
      nuovaSottozona: PannelloMagicWay.#nuovaSottozona,
      modificaZona: PannelloMagicWay.#modificaZona,
      eliminaZona: PannelloMagicWay.#eliminaZona,
      bloccaZone: PannelloMagicWay.#bloccaZone,
      svuotaRicerca: PannelloMagicWay.#svuotaRicerca,
      ripara: PannelloMagicWay.#ripara
    }
  };

  static PARTS = {
    main: { template: `modules/${MOD}/templates/pannello.hbs`, scrollable: [".mw-elenco", ".mw-zone-elenco"] }
  };

  /** Stato della creazione guidata: null oppure {fase: "dati"|"ingresso"|"arrivo", dati, ingresso}. */
  creazione = null;

  /** Filtri: solo la scena che il master sta guardando, zona scelta, testo cercato. */
  soloScena = false;
  zonaAttiva = "tutti";
  ricerca = "";

  /** Vero se un aggiornamento è arrivato mentre il master scriveva: si ridisegna appena esce dal campo. */
  daRidisegnare = false;

  /** Solo il master può aprire il pannello. */
  _canRender(options) {
    if (!game.user.isGM) return false;
    return super._canRender?.(options);
  }

  /** Vero se il master sta scrivendo in un campo di testo del pannello (non va interrotto). */
  staScrivendo() {
    const a = document.activeElement;
    return !!(this.element?.contains(a) && a.tagName === "INPUT" && ["text", "search", "number"].includes(a.type));
  }

  /* ---------------------------------------------------------------------------------------------- */
  /*  Dati per il modello                                                                           */
  /* ---------------------------------------------------------------------------------------------- */

  async _prepareContext(options) {
    const scenaCorrente = canvas.scene?.id;
    const opzioni = (elenco, sel) => Object.entries(elenco).map(([value, label]) => ({ value, label: t(label), selected: value === sel }));
    const zone = elencoZone();
    const albero = alberoZone(zone);
    /** Voci del menu delle zone, ad albero (le sottozone rientrate). */
    const vociZona = sel => [{ value: "", label: t("MAGICWAY.Zone.nessuna"), selected: !sel },
      ...albero.map(z => ({ value: z.id, label: `${"\u00a0\u00a0\u00a0".repeat(z.profondita)}${z.profondita ? "↳ " : ""}${z.nome}`, selected: z.id === sel }))];
    const idZone = new Set(zone.map(z => z.id));

    // Dati di un'area (un lato del collegamento).
    const lato = ({ region, behavior }, indice) => {
      const scena = region.parent;
      const ruolo = region.getFlag(MOD, "ruolo") ?? (behavior ? "ingresso" : "arrivo");
      const dati = {
        regionUuid: region.uuid,
        nome: region.name,
        scena: scena.name,
        scenaCorrente: scena.id === scenaCorrente,
        scenaAttiva: scena.active,
        ruolo,
        etichetta: t(indice === 0 ? "MAGICWAY.Pannello.ingresso" : "MAGICWAY.Pannello.arrivo"),
        colore: region.color?.css ?? String(region.color ?? (ruolo === "arrivo" ? COLORI.arrivo : COLORI.ingresso)),
        portale: null
      };
      if (behavior) {
        const s = behavior.system;
        const presenti = presentiNelPortale(behavior);
        const tutti = tokenDentro(region);
        let stato, statoClasse;
        // Spento anche quando l'area è «Nascosta»: in Foundry 14 una regione nascosta non attiva i comportamenti.
        if (behavior.disabled || region.hidden) { stato = t("MAGICWAY.Stato.disattivato"); statoClasse = "spento"; }
        else if (s.modalita === "libero") { stato = t("MAGICWAY.Stato.sempreAperto"); statoClasse = "aperto"; }
        else if (s.modalita === "controllato") { stato = s.aperto ? t("MAGICWAY.Stato.aperto") : t("MAGICWAY.Stato.chiuso"); statoClasse = s.aperto ? "aperto" : "chiuso"; }
        else { stato = t("MAGICWAY.Stato.attesa"); statoClasse = "comando"; }
        const dest = s.destinazione ? fromUuidSync(s.destinazione) : null;
        const ricordo = behavior.flags?.[MOD] ?? {};
        dati.portale = {
          uuid: behavior.uuid,
          opzioni: opzioni(MODALITA, s.modalita),
          opzioniPassano: opzioni(PASSANO, s.passano),
          controllato: s.modalita === "controllato",
          aperto: s.aperto,
          disattivato: behavior.disabled || !!region.hidden,
          stato, statoClasse,
          destOk: !!dest,
          avviso: dest ? "" : (ricordo.scenaArrivo
            ? t("MAGICWAY.Pannello.arrivoMancante", { nome: ricordo.nomeArrivo ?? "?", scena: ricordo.scenaArrivo })
            : t("MAGICWAY.Pannello.arrivoMancanteGenerico")),
          presenti: presenti.length,
          altri: tutti.length - presenti.length,
          nomiPresenti: presenti.map(tk => tk.name).join(", ")
        };
      }
      return dati;
    };

    const elenco = collegamenti().map(c => {
      const lati = c.lati.slice(0, 2).map((l, i) => lato(l, i));
      const regioni = c.lati.map(l => l.region);
      let zona = regioni.map(r => r.getFlag(MOD, "zona")).find(z => z && idZone.has(z)) ?? "";
      const datiZona = zone.find(z => z.id === zona);
      const testo = normalizza(lati.map(l => `${l.nome} ${l.scena}`).join(" "));
      return {
        chiave: c.chiave,
        lati,
        senzaArrivo: lati.length < 2,
        titolo: lati.map(l => l.nome).join(" ⇄ "),
        corrente: lati.some(l => l.scenaCorrente),
        zona,
        zonaNome: datiZona?.nome ?? "",
        zonaColore: datiZona ? coloreValido(datiZona.colore) : "",
        opzioniZona: vociZona(zona),
        testo
      };
    });
    // Prima i collegamenti della scena che si sta guardando, poi in ordine alfabetico.
    elenco.sort((a, b) => (b.corrente - a.corrente) || a.titolo.localeCompare(b.titolo));

    const c = this.creazione;
    return {
      collegamenti: elenco,
      vuoto: !elenco.length,
      soloScena: this.soloScena,
      ricerca: this.ricerca,
      zonaAttiva: this.zonaAttiva,
      zoneBloccate: game.settings.get(MOD, "zoneBloccate"),
      zone: [{ id: "tutti", nome: t("MAGICWAY.Zone.tutti"), fissa: true, colore: "", profondita: 0, discendenti: "tutti" },
        ...albero.map(z => ({ ...z, colore: coloreValido(z.colore), discendenti: z.discendenti.join(" "),
          rientro: z.profondita * 14 }))],
      creazione: c ? {
        ...c,
        faseDati: c.fase === "dati",
        faseIngresso: c.fase === "ingresso",
        faseArrivo: c.fase === "arrivo",
        opzioni: opzioni(MODALITA, c.dati.modalita),
        opzioniRitorno: opzioni(MODALITA, c.dati.modalitaRitorno),
        opzioniPassano: opzioni(PASSANO, c.dati.passano),
        opzioniZona: vociZona(c.dati.zona),
        ingressoTesto: c.ingresso ? c.ingresso.scena.name : ""
      } : null
    };
  }

  /* ---------------------------------------------------------------------------------------------- */
  /*  Eventi che non sono pulsanti: campi, ricerca, trascinamento                                   */
  /* ---------------------------------------------------------------------------------------------- */

  _onFirstRender(context, options) {
    super._onFirstRender?.(context, options);
    const el = this.element;
    el.addEventListener("change", ev => this.#suCambio(ev));
    el.addEventListener("input", ev => {
      if (ev.target.name !== "ricerca") return;
      this.ricerca = ev.target.value;
      this.applicaFiltri();
    });
    // Aggiornamenti arrivati mentre si scriveva: si ridisegna quando si esce dal campo.
    el.addEventListener("focusout", () => setTimeout(() => {
      if (this.daRidisegnare && this.rendered && !this.staScrivendo()) { this.daRidisegnare = false; this.render(); }
    }, 50));
    // TRASCINAMENTO
    //  - un collegamento (dalla sua testata) sopra una zona → va in quella zona («Tutti» = nessuna zona);
    //  - una zona sopra un'altra zona → diventa sua sottozona («Tutti» = torna in cima).
    let trascinato = null; // {tipo: "collegamento"|"zona", valore}
    el.addEventListener("dragstart", ev => {
      // Con il lucchetto chiuso le zone non si spostano (i portali sì).
      const zona = game.settings.get(MOD, "zoneBloccate") ? null : ev.target.closest?.(".mw-zona[draggable='true']");
      const testa = ev.target.closest?.(".mw-coppia-testa, .mw-maniglia");
      if (zona) trascinato = { tipo: "zona", valore: zona.dataset.zona };
      else if (testa) trascinato = { tipo: "collegamento", valore: testa.closest("[data-chiave]")?.dataset.chiave };
      else return;
      ev.dataTransfer.setData("text/plain", `magic-way:${trascinato.tipo}:${trascinato.valore}`);
      ev.dataTransfer.effectAllowed = "move";
      el.classList.add("mw-trascinando", `mw-trascina-${trascinato.tipo}`);
    });
    const pulisci = () => {
      trascinato = null;
      el.classList.remove("mw-trascinando", "mw-trascina-zona", "mw-trascina-collegamento");
      el.querySelectorAll(".mw-zona.sopra, .mw-zona.vietata").forEach(z => z.classList.remove("sopra", "vietata"));
    };
    el.addEventListener("dragend", pulisci);
    el.addEventListener("dragover", ev => {
      const z = ev.target.closest?.(".mw-zona");
      if (!z || !trascinato) return;
      el.querySelectorAll(".mw-zona.sopra, .mw-zona.vietata").forEach(x => x !== z && x.classList.remove("sopra", "vietata"));
      // Una zona non può andare dentro sé stessa né dentro una sua sottozona.
      const vietata = trascinato.tipo === "zona" && z.dataset.zona !== "tutti" && !puoAndareDentro(trascinato.valore, z.dataset.zona);
      z.classList.toggle("vietata", vietata);
      z.classList.toggle("sopra", !vietata);
      if (!vietata) { ev.preventDefault(); ev.dataTransfer.dropEffect = "move"; }
    });
    el.addEventListener("drop", async ev => {
      const z = ev.target.closest?.(".mw-zona");
      if (!z) return;
      ev.preventDefault();
      const dati = trascinato ?? (() => {
        const [prefisso, tipo, ...resto] = String(ev.dataTransfer.getData("text/plain") ?? "").split(":");
        return prefisso === "magic-way" ? { tipo, valore: resto.join(":") } : null;
      })();
      pulisci();
      if (!dati?.valore) return;
      const destinazione = z.dataset.zona === "tutti" ? null : z.dataset.zona;
      if (dati.tipo === "zona") {
        if (dati.valore !== destinazione) await spostaZona(dati.valore, destinazione);
      } else {
        const regioni = this.#regioniDi(dati.valore);
        if (regioni.length) await assegnaZona(regioni, destinazione);
      }
    });
  }

  _onRender(context, options) {
    super._onRender?.(context, options);
    this.applicaFiltri();
  }

  /** Mostra/nasconde collegamenti e zone secondo ricerca, zona scelta e «solo questa scena». */
  applicaFiltri() {
    const el = this.element;
    if (!el) return;
    const q = normalizza(this.ricerca);
    // Zona scelta: vale anche per tutte le sue sottozone.
    const righe = [...el.querySelectorAll(".mw-zona")];
    const famiglia = id => new Set((righe.find(r => r.dataset.zona === id)?.dataset.discendenti ?? id).split(" "));
    if (this.zonaAttiva !== "tutti" && !righe.some(r => r.dataset.zona === this.zonaAttiva)) this.zonaAttiva = "tutti";
    const scelta = this.zonaAttiva === "tutti" ? null : famiglia(this.zonaAttiva);
    const perZona = {}; // zona → collegamenti che passano i filtri (solo quelli messi direttamente in quella zona)
    let totale = 0, visibili = 0;
    for (const card of el.querySelectorAll(".mw-coppia")) {
      const okRicerca = !q || card.dataset.testo.includes(q);
      const okScena = !this.soloScena || card.dataset.corrente === "1";
      const passa = okRicerca && okScena;
      if (passa) {
        totale++;
        if (card.dataset.zona) perZona[card.dataset.zona] = (perZona[card.dataset.zona] ?? 0) + 1;
      }
      const mostra = passa && (!scelta || scelta.has(card.dataset.zona));
      card.hidden = !mostra;
      if (mostra) visibili++;
    }
    for (const z of righe) {
      const id = z.dataset.zona;
      // Il numero accanto alla zona conta anche i portali delle sue sottozone.
      const n = id === "tutti" ? totale : [...famiglia(id)].reduce((somma, x) => somma + (perZona[x] ?? 0), 0);
      z.querySelector(".mw-conta").textContent = n;
      z.classList.toggle("attiva", id === this.zonaAttiva);
      // Durante una ricerca le zone senza risultati spariscono («Tutti» resta sempre).
      z.hidden = id !== "tutti" && !!q && n === 0;
    }
    const vuoto = el.querySelector(".mw-nessun-risultato");
    if (vuoto) vuoto.hidden = visibili > 0 || !el.querySelector(".mw-coppia");
    const x = el.querySelector(".mw-cerca-svuota");
    if (x) x.hidden = !this.ricerca;
  }

  async #suCambio(ev) {
    const campo = ev.target;
    if (!campo.name || campo.name.startsWith("c-") || campo.name === "ricerca") return;
    if (campo.name === "nome") {
      const r = fromUuidSync(campo.closest("[data-region]")?.dataset.region);
      if (r && campo.value.trim()) await r.update({ name: campo.value.trim() });
      return;
    }
    if (campo.name === "zona") {
      const regioni = this.#regioniDi(campo.closest("[data-chiave]")?.dataset.chiave);
      if (regioni.length) await assegnaZona(regioni, campo.value || null);
      return;
    }
    const b = fromUuidSync(campo.closest("[data-behavior]")?.dataset.behavior);
    if (!b) return;
    if (campo.name === "modalita") await b.update({ "system.modalita": campo.value });
    else if (campo.name === "passano") await b.update({ "system.passano": campo.value });
  }

  /** Aree di un collegamento a partire dalla sua chiave ("uuidA|uuidB"). */
  #regioniDi(chiave) {
    return String(chiave ?? "").split("|").filter(Boolean).map(u => fromUuidSync(u)).filter(Boolean);
  }

  async close(options) {
    if (this.creazione) annullaCattura();
    this.creazione = null;
    return super.close(options);
  }

  /* ---------------------------------------------------------------------------------------------- */
  /*  Creazione guidata                                                                             */
  /* ---------------------------------------------------------------------------------------------- */

  static #nuovo() {
    this.creazione = {
      fase: "dati",
      dati: { nome: "", nomeArrivo: "", modalita: "libero", passano: "giocatori", ritorno: false, modalitaRitorno: "libero",
              zona: this.zonaAttiva === "tutti" ? "" : this.zonaAttiva }
    };
    this.render();
  }

  static #annulla() {
    annullaCattura();
    this.creazione = null;
    this.render();
  }

  static async #scegliIngresso() {
    const c = this.creazione;
    if (!c) return;
    // Legge i dati scritti nella scheda di creazione.
    const box = this.element.querySelector(".mw-creazione");
    const val = n => box.querySelector(`[name="${n}"]`);
    c.dati = {
      nome: val("c-nome").value,
      nomeArrivo: val("c-nomeArrivo").value,
      modalita: val("c-modalita").value,
      passano: val("c-passano").value,
      zona: val("c-zona").value,
      ritorno: val("c-ritorno").checked,
      modalitaRitorno: val("c-modalitaRitorno").value
    };

    // Passo 1: ingresso.
    c.fase = "ingresso";
    this.render();
    const ingresso = await disegnaArea(t("MAGICWAY.Cattura.ingresso"), COLORI.ingresso);
    if (!ingresso || this.creazione !== c) return PannelloMagicWay.#annulla.call(this);
    canvas.ping?.(ingresso.punto);

    // Passo 2: arrivo (il master può cambiare scena prima di disegnare).
    c.ingresso = ingresso;
    c.fase = "arrivo";
    this.render();
    const arrivo = await disegnaArea(t("MAGICWAY.Cattura.arrivo"), COLORI.arrivo);
    if (!arrivo || this.creazione !== c) return PannelloMagicWay.#annulla.call(this);
    canvas.ping?.(arrivo.punto);

    await creaPortale(c.dati, ingresso, arrivo);
    this.creazione = null;
    canvas.regions?.activate?.();
    this.render();
  }

  /* ---------------------------------------------------------------------------------------------- */
  /*  Azioni sulle aree e sui portali                                                               */
  /* ---------------------------------------------------------------------------------------------- */

  static #comportamento(el) { return fromUuidSync(el.closest("[data-behavior]")?.dataset.behavior); }
  static #regione(el) { return fromUuidSync(el.closest("[data-region]")?.dataset.region); }

  static async #alterna(ev, el) {
    const b = PannelloMagicWay.#comportamento(el);
    if (b) await b.update({ "system.aperto": !b.system.aperto });
  }

  static async #teletrasporta(ev, el) {
    const b = PannelloMagicWay.#comportamento(el);
    if (!b) return;
    const presenti = presentiNelPortale(b);
    if (!presenti.length) return ui.notifications.warn(t("MAGICWAY.Avvisi.nessunoPresente", { nome: b.parent.name }));
    await teletrasporta(b, presenti, { daComando: true });
  }

  static async #vai(ev, el) {
    const r = PannelloMagicWay.#regione(el);
    if (!r) return;
    const scena = r.parent;
    if (canvas.scene?.id !== scena.id) await scena.view();
    canvas.regions?.activate?.();
    const c = centro(r);
    await canvas.animatePan({ x: c.x, y: c.y, duration: 500 });
    canvas.ping?.(c);
  }

  static async #ridisegna(ev, el) {
    const r = PannelloMagicWay.#regione(el);
    if (!r) return;
    // Si parte dalla scena dell'area; il master può comunque cambiarla prima di disegnare.
    if (canvas.scene?.id !== r.parent.id) await r.parent.view();
    canvas.regions?.activate?.();
    const colore = r.getFlag(MOD, "ruolo") === "arrivo" ? COLORI.arrivo : COLORI.ingresso;
    const disegno = await disegnaArea(t("MAGICWAY.Cattura.ridisegna", { nome: r.name }), colore);
    if (!disegno) return;
    await ridisegnaRegione(r, disegno);
    canvas.ping?.(disegno.punto);
  }

  static #configura(ev, el) {
    PannelloMagicWay.#regione(el)?.sheet?.render(true);
  }

  static async #creaRitorno(ev, el) {
    const card = el.closest("[data-chiave]");
    const [a, b] = this.#regioniDi(card?.dataset.chiave);
    const da = PannelloMagicWay.#regione(el);
    if (!da || !a || !b) return;
    const verso = da === a ? b : a;
    const andata = verso.behaviors.find(x => x.type === "magic-way.portale" && x.system.destinazione === da.uuid);
    await creaRitorno(da, verso, { modalita: andata?.system.modalita ?? "libero", passano: andata?.system.passano ?? "giocatori" });
    ui.notifications.info(t("MAGICWAY.Avvisi.ritornoCreato", { nome: da.name }));
  }

  static async #elimina(ev, el) {
    const card = el.closest("[data-chiave]");
    const regioni = this.#regioniDi(card?.dataset.chiave);
    if (!regioni.length) return;
    const nomi = regioni.map(r => `«${esc(r.name)}»`).join(" ⇄ ");
    const ok = await conferma("MAGICWAY.Elimina.titolo", t("MAGICWAY.Elimina.domanda", { nome: nomi }));
    if (ok) await eliminaCollegamento(regioni);
  }

  static async #apriTutti() { await PannelloMagicWay.#impostaTutti.call(this, true); }
  static async #chiudiTutti() { await PannelloMagicWay.#impostaTutti.call(this, false); }

  /** Apre o chiude i portali aperto/chiuso dei collegamenti che si vedono in questo momento. */
  static async #impostaTutti(aperto) {
    const visibili = new Set([...this.element.querySelectorAll(".mw-coppia:not([hidden]) [data-behavior]")].map(e => e.dataset.behavior));
    for (const b of tuttiIPortali()) {
      if (!visibili.has(b.uuid) || b.system.modalita !== "controllato" || b.system.aperto === aperto) continue;
      await b.update({ "system.aperto": aperto });
    }
  }

  static #filtro(ev, el) {
    this.soloScena = !this.soloScena;
    el.classList.toggle("attivo", this.soloScena);
    this.applicaFiltri();
  }

  static async #ripara(ev, el) {
    el.disabled = true;
    try { await riparaCollegamenti({ avvisa: true }); } finally { el.disabled = false; }
    this.render();
  }

  static #svuotaRicerca() {
    this.ricerca = "";
    const campo = this.element.querySelector('[name="ricerca"]');
    if (campo) { campo.value = ""; campo.focus(); }
    this.applicaFiltri();
  }

  /* ---------------------------------------------------------------------------------------------- */
  /*  Zone                                                                                          */
  /* ---------------------------------------------------------------------------------------------- */

  static #scegliZona(ev, el) {
    if (ev.target.closest(".mw-zona-strumenti")) return; // clic su modifica/elimina
    this.zonaAttiva = el.closest(".mw-zona")?.dataset.zona ?? "tutti";
    this.applicaFiltri();
  }

  /**
   * Finestrella per una zona: nome, colore e zona superiore («in cima» = nessuna).
   * @param {string} titolo
   * @param {{id?: string, nome?: string, colore?: string, padre?: string|null}} zona  Valori di partenza
   * @returns {Promise<{nome: string, colore: string, padre: string|null}|null>} null se annullata
   */
  static async #chiediZona(titolo, { id = null, nome = "", colore, padre = null } = {}) {
    const c = coloreValido(colore);
    // Zone superiori possibili: tutte tranne la zona stessa e le sue sottozone.
    const voci = alberoZone().filter(z => !id || puoAndareDentro(id, z.id));
    const opzioniPadre = [`<option value="">${esc(t("MAGICWAY.Zone.inCima"))}</option>`,
      ...voci.map(z => `<option value="${z.id}" ${z.id === padre ? "selected" : ""}>${"&nbsp;&nbsp;&nbsp;".repeat(z.profondita)}${z.profondita ? "↳ " : ""}${esc(z.nome)}</option>`)].join("");
    const r = await DialogV2.input({
      window: { title: titolo },
      classes: ["magic-way-dialogo"],
      content: `
        <div class="form-group"><label>${t("MAGICWAY.Zone.nome")}</label>
          <div class="form-fields"><input type="text" name="nome" value="${esc(nome)}" autofocus required></div></div>
        <div class="form-group"><label>${t("MAGICWAY.Zone.dentro")}</label>
          <div class="form-fields"><select name="padre">${opzioniPadre}</select></div></div>
        <div class="form-group"><label>${t("MAGICWAY.Zone.colore")}</label>
          <div class="form-fields mw-scelta-colore">
            <input type="color" name="colore" value="${c}">
            ${COLORI_PROPOSTI.map(x => `<button type="button" class="mw-campione" style="background:${x}" data-colore="${x}" aria-label="${x}"
              onclick="this.closest('form').querySelector('[name=colore]').value='${x}'"></button>`).join("")}
          </div></div>`,
      ok: { label: "MAGICWAY.Zone.salva", icon: "fa-solid fa-check" },
      // Clic su un colore pronto: lo mette nel selettore (riserva se il browser ignora onclick).
      render: (event, dialogo) => {
        const radice = dialogo?.element ?? event?.target?.element;
        radice?.querySelectorAll?.(".mw-campione").forEach(b => b.addEventListener("click", () => {
          radice.querySelector('[name="colore"]').value = b.dataset.colore;
        }));
      },
      rejectClose: false
    });
    const n = r?.nome?.trim();
    return n ? { nome: n, colore: coloreValido(r.colore), padre: r.padre || null } : null;
  }

  static async #nuovaZona() {
    const dati = await PannelloMagicWay.#chiediZona("MAGICWAY.Zone.nuova", { colore: prossimoColore() });
    if (!dati) return;
    this.zonaAttiva = await creaZona(dati.nome, dati.colore, dati.padre);
  }

  /** Pulsante «+» su una zona: nuova zona già dentro quella. */
  static async #nuovaSottozona(ev, el) {
    const padre = el.closest(".mw-zona")?.dataset.zona;
    if (!padre || padre === "tutti") return;
    const dati = await PannelloMagicWay.#chiediZona("MAGICWAY.Zone.sottozona", { colore: prossimoColore(), padre });
    if (!dati) return;
    this.zonaAttiva = await creaZona(dati.nome, dati.colore, dati.padre);
  }

  static async #modificaZona(ev, el) {
    const id = el.closest(".mw-zona")?.dataset.zona;
    const z = elencoZone().find(z => z.id === id);
    if (!z) return;
    const dati = await PannelloMagicWay.#chiediZona("MAGICWAY.Zone.modifica", z);
    if (dati) await modificaZona(id, dati);
  }

  /** Lucchetto della colonna Zone: blocca o sblocca lo spostamento delle zone con il trascinamento. */
  static async #bloccaZone() {
    await game.settings.set(MOD, "zoneBloccate", !game.settings.get(MOD, "zoneBloccate"));
    this.render();
  }

  static async #eliminaZona(ev, el) {
    const id = el.closest(".mw-zona")?.dataset.zona;
    const z = elencoZone().find(z => z.id === id);
    if (!z) return;
    const ok = await conferma("MAGICWAY.Zone.elimina", t("MAGICWAY.Zone.eliminaDomanda", { nome: esc(z.nome) }));
    if (!ok) return;
    if (this.zonaAttiva === id) this.zonaAttiva = z.padre ?? "tutti";
    await eliminaZona(id);
  }
}

/* ------------------------------------------------------------------------------------------------ */
/*  Apertura e aggiornamento automatico                                                             */
/* ------------------------------------------------------------------------------------------------ */

let pannello = null;

/** Apre (o porta in primo piano) il pannello del master. */
export function apriPannello() {
  if (!game.user.isGM) return ui.notifications.warn(t("MAGICWAY.Avvisi.soloMaster"));
  pannello ??= new PannelloMagicWay();
  pannello.render({ force: true });
  return pannello;
}

/** Ridisegna il pannello (al massimo 4 volte al secondo), senza interrompere il master mentre scrive. */
export function ridisegnaPannello() {
  if (!pannello?.rendered) return;
  if (pannello.staScrivendo()) { pannello.daRidisegnare = true; return; }
  pannello.render();
}

/** Ridisegna il pannello quando cambiano portali, regioni, token, scene o zone. */
export function registraAggiornamentoPannello() {
  const ridisegna = foundry.utils.debounce(ridisegnaPannello, 250);
  const eventi = [
    "createRegion", "updateRegion", "deleteRegion",
    "createRegionBehavior", "updateRegionBehavior", "deleteRegionBehavior",
    "createToken", "updateToken", "deleteToken",
    "createScene", "updateScene", "deleteScene", "canvasReady"
  ];
  for (const e of eventi) Hooks.on(e, ridisegna);
  return ridisegna;
}

/** Pulsante nella barra a sinistra (gruppi Token e Regioni), solo per il master. */
export function aggiungiPulsanti(controls) {
  if (!game.user.isGM) return;
  for (const nome of ["tokens", "regions"]) {
    const gruppo = controls[nome];
    if (!gruppo?.tools) continue;
    gruppo.tools.magicWay = {
      name: "magicWay",
      title: "MAGICWAY.Pannello.pulsante",
      icon: "fa-solid fa-dungeon",
      order: Object.keys(gruppo.tools).length + 1,
      button: true,
      visible: true,
      onChange: () => apriPannello()
    };
  }
}
