/**
 * MAGIC WAY – geometria delle regioni e scelta delle caselle d'arrivo.
 *
 * Le caselle di aggancio sono Regioni di Foundry. Qui si calcola, leggendo direttamente le forme salvate
 * nella regione (rettangoli, ellissi, cerchi, poligoni, con i "buchi"), se un punto sta dentro, dove sta
 * il centro e quali caselle libere usare per far arrivare uno o più token senza sovrapporli.
 * Funziona anche per scene che il master non sta guardando (non usa il canvas).
 */

/** Ruota il punto p di -angolo (gradi) attorno al centro c. */
function ruota(p, c, gradi) {
  if (!gradi) return p;
  const r = -gradi * Math.PI / 180;
  const dx = p.x - c.x, dy = p.y - c.y;
  return { x: c.x + dx * Math.cos(r) - dy * Math.sin(r), y: c.y + dx * Math.sin(r) + dy * Math.cos(r) };
}

/** Punto dentro un poligono dato come array piatto [x0,y0,x1,y1,...] (regola pari/dispari). */
function dentroPoligono(punti, p) {
  let dentro = false;
  for (let i = 0, j = punti.length - 2; i < punti.length; j = i, i += 2) {
    const xi = punti[i], yi = punti[i + 1], xj = punti[j], yj = punti[j + 1];
    if (((yi > p.y) !== (yj > p.y)) && (p.x < (xj - xi) * (p.y - yi) / ((yj - yi) || 1e-9) + xi)) dentro = !dentro;
  }
  return dentro;
}

/** Vero se il punto sta dentro una singola forma della regione. */
function dentroForma(s, p) {
  switch (s.type) {
    case "rectangle": {
      const c = { x: s.x + s.width / 2, y: s.y + s.height / 2 };
      const q = ruota(p, c, s.rotation);
      return q.x >= s.x && q.x <= s.x + s.width && q.y >= s.y && q.y <= s.y + s.height;
    }
    case "ellipse": {
      const q = ruota(p, { x: s.x, y: s.y }, s.rotation);
      const dx = (q.x - s.x) / (s.radiusX || 1), dy = (q.y - s.y) / (s.radiusY || 1);
      return dx * dx + dy * dy <= 1;
    }
    case "circle": {
      const dx = p.x - s.x, dy = p.y - s.y;
      return dx * dx + dy * dy <= s.radius * s.radius;
    }
    case "polygon":
      return Array.isArray(s.points) && s.points.length >= 6 && dentroPoligono(s.points, p);
    default: {
      // Forme di tipo diverso: si usa il loro rettangolo di ingombro.
      const b = limitiForma(s);
      return !!b && p.x >= b.x0 && p.x <= b.x1 && p.y >= b.y0 && p.y <= b.y1;
    }
  }
}

/** Rettangolo di ingombro di una forma {x0,y0,x1,y1}. */
function limitiForma(s) {
  switch (s.type) {
    case "rectangle": {
      if (!s.rotation) return { x0: s.x, y0: s.y, x1: s.x + s.width, y1: s.y + s.height };
      const c = { x: s.x + s.width / 2, y: s.y + s.height / 2 };
      const ang = [[s.x, s.y], [s.x + s.width, s.y], [s.x, s.y + s.height], [s.x + s.width, s.y + s.height]]
        .map(([x, y]) => ruota({ x, y }, c, -s.rotation));
      return { x0: Math.min(...ang.map(a => a.x)), y0: Math.min(...ang.map(a => a.y)),
               x1: Math.max(...ang.map(a => a.x)), y1: Math.max(...ang.map(a => a.y)) };
    }
    case "ellipse": {
      const r = Math.max(s.radiusX, s.radiusY);
      return { x0: s.x - r, y0: s.y - r, x1: s.x + r, y1: s.y + r };
    }
    case "circle":
      return { x0: s.x - s.radius, y0: s.y - s.radius, x1: s.x + s.radius, y1: s.y + s.radius };
    case "polygon": {
      if (!Array.isArray(s.points) || s.points.length < 2) return null;
      const xs = s.points.filter((_, i) => i % 2 === 0), ys = s.points.filter((_, i) => i % 2 === 1);
      return { x0: Math.min(...xs), y0: Math.min(...ys), x1: Math.max(...xs), y1: Math.max(...ys) };
    }
    default:
      if (Number.isFinite(s.x) && Number.isFinite(s.width)) return { x0: s.x, y0: s.y, x1: s.x + s.width, y1: s.y + (s.height ?? s.width) };
      return null;
  }
}

/** Forme della regione come oggetti semplici. */
function forme(region) {
  return (region.shapes ?? []).map(s => (typeof s.toObject === "function" ? s.toObject() : s));
}

/** Vero se il punto {x,y} sta dentro la regione (dentro almeno una forma piena e fuori da tutti i buchi). */
export function contiene(region, p) {
  const f = forme(region);
  const piene = f.filter(s => !s.hole), buchi = f.filter(s => s.hole);
  return piene.some(s => dentroForma(s, p)) && !buchi.some(s => dentroForma(s, p));
}

/** Rettangolo di ingombro della regione. */
export function limiti(region) {
  const b = forme(region).filter(s => !s.hole).map(limitiForma).filter(Boolean);
  if (!b.length) return { x0: 0, y0: 0, x1: 0, y1: 0 };
  return { x0: Math.min(...b.map(r => r.x0)), y0: Math.min(...b.map(r => r.y0)),
           x1: Math.max(...b.map(r => r.x1)), y1: Math.max(...b.map(r => r.y1)) };
}

/** Centro della regione (centro del rettangolo di ingombro). */
export function centro(region) {
  const b = limiti(region);
  return { x: (b.x0 + b.x1) / 2, y: (b.y0 + b.y1) / 2 };
}

/** Centro di un token (in pixel) a partire dai suoi dati. */
export function centroToken(token) {
  const g = token.parent?.grid;
  const sx = g?.sizeX ?? g?.size ?? 100, sy = g?.sizeY ?? g?.size ?? 100;
  return { x: token.x + (token.width * sx) / 2, y: token.y + (token.height * sy) / 2 };
}

/** Token presenti dentro la regione (usa l'elenco di Foundry; se manca, calcola con i centri dei token). */
export function tokenDentro(region) {
  if (region.tokens instanceof Set) return [...region.tokens];
  const scena = region.parent;
  return scena.tokens.filter(tk => contiene(region, centroToken(tk)));
}

/**
 * Sceglie dove far arrivare i token nella regione di destinazione.
 * Prima le caselle libere dentro la regione, dalla più vicina al centro; se non bastano, le caselle
 * tutt'intorno ad anelli. Le caselle occupate da altri token della scena vengono evitate.
 * @param {RegionDocument} region   Casella/area d'arrivo
 * @param {TokenDocument[]} tokens  Token da sistemare
 * @param {Set<string>} escludi     Id dei token da non considerare come ostacolo (quelli che si stanno spostando)
 * @returns {{x:number, y:number}[]} Angolo in alto a sinistra di ciascun token, nello stesso ordine
 */
export function calcolaPosizioni(region, tokens, escludi = new Set()) {
  const scena = region.parent;
  const g = scena.grid;
  const c = centro(region);
  const sx = g.sizeX ?? g.size, sy = g.sizeY ?? g.size;

  // Mappa senza griglia: i token si dispongono a raggiera attorno al centro.
  if (g.type === CONST.GRID_TYPES.GRIDLESS) {
    return tokens.map((tk, i) => {
      const ang = i * 2.399963, dist = i ? sx * Math.sqrt(i) : 0; // spirale "a girasole"
      return { x: c.x + Math.cos(ang) * dist - (tk.width * sx) / 2, y: c.y + Math.sin(ang) * dist - (tk.height * sy) / 2 };
    });
  }

  const chiave = (i, j) => `${i},${j}`;
  const occupate = new Set();
  const segna = (i0, j0, w, h) => {
    for (let di = 0; di < h; di++) for (let dj = 0; dj < w; dj++) occupate.add(chiave(i0 + di, j0 + dj));
  };
  for (const tk of scena.tokens) {
    if (escludi.has(tk.id)) continue;
    const o = g.getOffset({ x: tk.x + 1, y: tk.y + 1 });
    segna(o.i, o.j, Math.max(1, Math.ceil(tk.width)), Math.max(1, Math.ceil(tk.height)));
  }

  // Limiti della scena: niente arrivi fuori dalla mappa.
  const area = scena.dimensions?.sceneRect;
  const nellaMappa = (i, j, w, h) => {
    if (!area) return true;
    const tl = g.getTopLeftPoint({ i, j });
    return tl.x >= area.x && tl.y >= area.y && tl.x + w * sx <= area.x + area.width && tl.y + h * sy <= area.y + area.height;
  };

  // Caselle candidate: prima quelle dentro la regione, poi anelli attorno al centro.
  const b = limiti(region);
  const o0 = g.getOffset({ x: b.x0 + 1, y: b.y0 + 1 });
  const o1 = g.getOffset({ x: b.x1 - 1, y: b.y1 - 1 });
  const dentro = [];
  for (let i = o0.i; i <= o1.i; i++) {
    for (let j = o0.j; j <= o1.j; j++) {
      const cc = g.getCenterPoint({ i, j });
      if (contiene(region, cc)) dentro.push({ i, j, d: Math.hypot(cc.x - c.x, cc.y - c.y) });
    }
  }
  dentro.sort((a, b2) => a.d - b2.d);
  const oc = g.getOffset(c);
  const candidate = dentro.length ? [...dentro] : [{ i: oc.i, j: oc.j }];
  const viste = new Set(candidate.map(k => chiave(k.i, k.j)));
  for (let r = 1; r <= 30; r++) {
    const anello = [];
    for (let di = -r; di <= r; di++) {
      for (let dj = -r; dj <= r; dj++) {
        if (Math.max(Math.abs(di), Math.abs(dj)) !== r) continue;
        const i = oc.i + di, j = oc.j + dj;
        if (viste.has(chiave(i, j))) continue;
        viste.add(chiave(i, j));
        anello.push({ i, j, d: Math.hypot(di, dj) });
      }
    }
    anello.sort((a, b2) => a.d - b2.d);
    candidate.push(...anello);
  }

  return tokens.map(tk => {
    const w = Math.max(1, Math.ceil(tk.width)), h = Math.max(1, Math.ceil(tk.height));
    for (const k of candidate) {
      let libera = nellaMappa(k.i, k.j, w, h);
      for (let di = 0; libera && di < h; di++) for (let dj = 0; libera && dj < w; dj++) {
        if (occupate.has(chiave(k.i + di, k.j + dj))) libera = false;
      }
      if (!libera) continue;
      segna(k.i, k.j, w, h);
      return g.getTopLeftPoint({ i: k.i, j: k.j });
    }
    return g.getTopLeftPoint(oc); // nessuna casella libera: si arriva sul centro
  });
}
