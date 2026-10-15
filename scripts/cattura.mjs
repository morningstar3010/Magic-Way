/**
 * MAGIC WAY – "disegna l'area sulla mappa".
 *
 * Mentre il master crea un portale o ne ridisegna un'area, il prossimo trascinamento con il tasto sinistro
 * sulla mappa disegna un rettangolo agganciato alla griglia (con anteprima viola e misure nella fascia in
 * alto). Un semplice clic, senza trascinare, prende una sola casella.
 * Il clic non seleziona token né altro. Esc o clic destro annullano.
 * La cattura resta attiva anche se nel frattempo il master cambia scena: così può disegnare l'ingresso
 * su una mappa e l'arrivo su un'altra.
 */
let attiva = null;

/**
 * Attende che il master disegni un'area sulla mappa.
 * @param {string} messaggio  Testo mostrato nella fascia in alto
 * @param {string} [colore]   Colore dell'anteprima
 * @returns {Promise<{scena: Scene, area: {x:number,y:number,width:number,height:number}, punto: {x:number,y:number}, livello: string|null}|null>}
 *          null se annullato
 */
export function disegnaArea(messaggio, colore = "#8e44ad") {
  annullaCattura();
  return new Promise(resolve => {
    const fascia = document.createElement("div");
    fascia.id = "magic-way-fascia";
    fascia.innerHTML = `<i class="fa-solid fa-vector-square"></i><span class="mw-msg"></span><strong class="mw-misure"></strong><em>${game.i18n.localize("MAGICWAY.Cattura.esc")}</em>`;
    fascia.querySelector(".mw-msg").textContent = messaggio;
    document.body.append(fascia);
    const misure = fascia.querySelector(".mw-misure");

    let inizio = null;      // punto dove è stato premuto il tasto
    let anteprima = null;   // grafica PIXI del rettangolo

    const sullaMappa = ev => {
      const vista = canvas?.app?.view;
      return !!vista && ev.target === vista;
    };
    const blocca = ev => { ev.preventDefault(); ev.stopPropagation(); ev.stopImmediatePropagation(); };

    const suPremuto = ev => {
      if (!sullaMappa(ev)) return; // clic fuori dalla mappa (pannelli, barre): ignorato
      blocca(ev);
      if (ev.button === 2) return fine(null);
      if (ev.button !== 0) return;
      inizio = puntoMappa(ev);
      anteprima = creaAnteprima();
      aggiorna(inizio);
    };
    const suMovimento = ev => {
      if (!inizio) return;
      blocca(ev);
      aggiorna(puntoMappa(ev));
    };
    const suRilascio = ev => {
      if (!inizio) return;
      blocca(ev);
      const fineP = puntoMappa(ev);
      const area = rettangoloDa(canvas.scene, inizio, fineP);
      fine({ scena: canvas.scene, area, punto: { x: area.x + area.width / 2, y: area.y + area.height / 2 }, livello: canvas.level?.id ?? null });
    };
    const suTasto = ev => {
      if (ev.key !== "Escape") return;
      blocca(ev);
      fine(null);
    };

    /** Ridisegna l'anteprima e scrive le misure (caselle e distanza della griglia). */
    const aggiorna = p => {
      const r = rettangoloDa(canvas.scene, inizio, p);
      disegna(anteprima, r, colore);
      const g = canvas.scene.grid;
      const unita = g.units || "";
      const fmt = n => (Math.round(n * 100) / 100).toLocaleString(game.i18n.lang);
      misure.textContent = `${r.colonne} × ${r.righe}  (${fmt(r.colonne * g.distance)} × ${fmt(r.righe * g.distance)} ${unita})`;
    };

    const fine = valore => {
      document.removeEventListener("pointerdown", suPremuto, true);
      window.removeEventListener("pointermove", suMovimento, true);
      window.removeEventListener("pointerup", suRilascio, true);
      document.removeEventListener("keydown", suTasto, true);
      if (anteprima) { anteprima.parent?.removeChild(anteprima); anteprima.destroy(); }
      fascia.remove();
      attiva = null;
      resolve(valore);
    };
    document.addEventListener("pointerdown", suPremuto, true);
    window.addEventListener("pointermove", suMovimento, true);
    window.addEventListener("pointerup", suRilascio, true);
    document.addEventListener("keydown", suTasto, true);
    attiva = { fine };
  });
}

/** Annulla la cattura in corso (se c'è). */
export function annullaCattura() {
  attiva?.fine(null);
}

/**
 * Rettangolo agganciato alla griglia che copre tutte le caselle fra i due punti (estremi compresi).
 * Su una mappa senza griglia è il rettangolo libero (minimo una casella).
 */
export function rettangoloDa(scena, a, b) {
  const g = scena.grid;
  const sx = g.sizeX ?? g.size, sy = g.sizeY ?? g.size;
  if (g.type === CONST.GRID_TYPES.GRIDLESS) {
    const x = Math.min(a.x, b.x), y = Math.min(a.y, b.y);
    const width = Math.max(Math.abs(b.x - a.x), sx), height = Math.max(Math.abs(b.y - a.y), sy);
    return { x: Math.round(x), y: Math.round(y), width: Math.round(width), height: Math.round(height),
             colonne: Math.max(1, Math.round(width / sx)), righe: Math.max(1, Math.round(height / sy)) };
  }
  const o1 = g.getOffset(a), o2 = g.getOffset(b);
  const i0 = Math.min(o1.i, o2.i), i1 = Math.max(o1.i, o2.i);
  const j0 = Math.min(o1.j, o2.j), j1 = Math.max(o1.j, o2.j);
  const alto = g.getTopLeftPoint({ i: i0, j: j0 });
  const colonne = j1 - j0 + 1, righe = i1 - i0 + 1;
  return { x: alto.x, y: alto.y, width: colonne * sx, height: righe * sy, colonne, righe };
}

/** Grafica PIXI dell'anteprima, sopra la mappa. */
function creaAnteprima() {
  const g = new PIXI.Graphics();
  (canvas.controls ?? canvas.interface ?? canvas.stage).addChild(g);
  return g;
}

/** Disegna il rettangolo (compatibile con PIXI 7 e PIXI 8). */
function disegna(g, r, colore) {
  if (!g || g.destroyed) return;
  const c = Number.parseInt(colore.replace("#", ""), 16);
  g.clear();
  if (typeof g.lineStyle === "function") {
    g.lineStyle(4, c, 1).beginFill(c, 0.25).drawRect(r.x, r.y, r.width, r.height).endFill();
  } else {
    g.rect(r.x, r.y, r.width, r.height).fill({ color: c, alpha: 0.25 }).stroke({ width: 4, color: c });
  }
}

/** Converte le coordinate dello schermo in coordinate della mappa. */
function puntoMappa(ev) {
  if (typeof canvas.canvasCoordinatesFromClient === "function") {
    const p = canvas.canvasCoordinatesFromClient({ x: ev.clientX, y: ev.clientY });
    return { x: p.x, y: p.y };
  }
  const r = canvas.app.view.getBoundingClientRect();
  const p = canvas.stage.worldTransform.applyInverse({ x: ev.clientX - r.left, y: ev.clientY - r.top });
  return { x: p.x, y: p.y };
}
