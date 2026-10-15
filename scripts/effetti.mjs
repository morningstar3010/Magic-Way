/**
 * MAGIC WAY – effetto grafico del portale (dissolvenza e apparizione).
 *
 * Quando un portale si attiva:
 *  1. PARTENZA – su ogni token compare un lampo magico (bagliore + anello che si allarga + scintille che
 *     girano) e il token svanisce con una dissolvenza;
 *  2. ARRIVO   – nel punto d'arrivo compare lo stesso lampo "al contrario" (l'anello si stringe) e il token
 *     riappare con una dissolvenza.
 * Il lampo è disegnato localmente da ogni client che sta guardando la scena (il master lo manda a tutti
 * via socket). La dissolvenza del token è un'animazione della sua trasparenza (alpha), fatta dal master.
 * Si accende/spegne e si colora da Impostazioni → Magic Way.
 */
import { MOD } from "./costanti.mjs";

/** Durata della dissolvenza e del lampo, in millisecondi. */
export const DURATA = 700;

/** Pausa che si concede ai giocatori per caricare la scena d'arrivo prima di far riapparire i token. */
export const ATTESA_CAMBIO_SCENA = 1500;

/** Vero se l'effetto è attivo nelle impostazioni. */
export function effettoAttivo() {
  return !!game.settings.get(MOD, "effetto");
}

/** Colore dell'effetto (numero esadecimale per PIXI). */
function coloreEffetto() {
  const c = String(game.settings.get(MOD, "coloreEffetto") || "#b06cff");
  const n = Number.parseInt(c.replace("#", "").slice(0, 6), 16);
  return Number.isFinite(n) ? n : 0xb06cff;
}

/** Attende i millisecondi indicati. */
export const attendi = ms => new Promise(r => setTimeout(r, ms));

/* ------------------------------------------------------------------------------------------------ */
/*  Disegno compatibile con PIXI 7 e PIXI 8                                                         */
/* ------------------------------------------------------------------------------------------------ */

function cerchioPieno(g, r, colore, alpha) {
  if (typeof g.beginFill === "function") g.beginFill(colore, alpha).drawCircle(0, 0, r).endFill();
  else g.circle(0, 0, r).fill({ color: colore, alpha });
}

function anello(g, r, spessore, colore, alpha) {
  if (typeof g.lineStyle === "function") { g.lineStyle(spessore, colore, alpha).drawCircle(0, 0, r); g.lineStyle(0); }
  else g.circle(0, 0, r).stroke({ width: spessore, color: colore, alpha });
}

/* ------------------------------------------------------------------------------------------------ */
/*  Lampo (eseguito su ogni client)                                                                 */
/* ------------------------------------------------------------------------------------------------ */

/**
 * Disegna il lampo magico nei punti indicati, se questo client sta guardando quella scena.
 * @param {object} dati
 * @param {string} dati.scena               Id della scena
 * @param {{x:number,y:number,r:number}[]} dati.punti  Centro e raggio (pixel) di ogni lampo
 * @param {"partenza"|"arrivo"} dati.fase  Partenza: l'anello si allarga. Arrivo: l'anello si stringe.
 */
export function lampo({ scena, punti, fase }) {
  if (!canvas?.ready || canvas.scene?.id !== scena || !punti?.length) return;
  const livello = canvas.interface ?? canvas.controls ?? canvas.stage;
  const colore = coloreEffetto();
  const somma = PIXI.BLEND_MODES?.ADD ?? "add";

  for (const p of punti) {
    const g = new PIXI.Graphics();
    g.position.set(p.x, p.y);
    g.blendMode = somma;
    livello.addChild(g);
    const inizio = performance.now();
    const passo = () => {
      if (g.destroyed) { canvas.app?.ticker?.remove(passo); return; } // la scena è stata cambiata
      const t = Math.min(1, (performance.now() - inizio) / DURATA);
      // Arrivo: l'anello parte largo e si chiude sul token; partenza: parte dal token e si allarga.
      const k = fase === "arrivo" ? 1 - t : t;
      const svanisce = 1 - t;
      g.clear();
      cerchioPieno(g, p.r * (0.55 + 0.25 * Math.sin(Math.PI * t)), colore, 0.35 * svanisce);
      cerchioPieno(g, p.r * 0.25, 0xffffff, 0.45 * Math.sin(Math.PI * t));
      anello(g, p.r * (0.3 + 0.9 * k), Math.max(2, p.r * 0.08), colore, 0.9 * svanisce);
      anello(g, p.r * (0.2 + 0.6 * k), Math.max(1, p.r * 0.03), 0xffffff, 0.6 * svanisce);
      // Scintille che girano attorno.
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2 + t * Math.PI * 2 * (fase === "arrivo" ? -1 : 1);
        const d = p.r * (0.35 + 0.75 * k);
        const x = Math.cos(a) * d, y = Math.sin(a) * d, rs = Math.max(2, p.r * 0.05) * svanisce + 1;
        if (typeof g.beginFill === "function") g.beginFill(0xffffff, 0.9 * svanisce).drawCircle(x, y, rs).endFill();
        else g.circle(x, y, rs).fill({ color: 0xffffff, alpha: 0.9 * svanisce });
      }
      if (t >= 1) {
        canvas.app.ticker.remove(passo);
        g.parent?.removeChild(g);
        g.destroy();
      }
    };
    canvas.app.ticker.add(passo);
  }
}

/** Centro e raggio del lampo per un token (anche per dati non ancora creati). */
export function puntoLampo(dati, scena) {
  const g = scena.grid;
  const sx = g.sizeX ?? g.size, sy = g.sizeY ?? g.size;
  const w = (dati.width ?? 1) * sx, h = (dati.height ?? 1) * sy;
  return { x: dati.x + w / 2, y: dati.y + h / 2, r: Math.max(w, h) * 0.9 };
}
