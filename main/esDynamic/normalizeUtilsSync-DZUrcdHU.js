import { aP as A, aQ as R, aR as j, ap as J, aS as T, aT as K, aU as N, aK as Q, aV as U, aW as k, aX as V, aY as W, aZ as Y, a_ as p } from "./main-lm2DHsZh.js";
function D(i) {
  return X(i, !0);
}
function E(i) {
  return X(i, !1);
}
function X(i, s) {
  if (i == null) return null;
  const t = i.spatialReference, n = R(t), e = j(i) ? i.toJSON() : i;
  if (!n) return e;
  const h = J(t) ? 102100 : 4326, u = T[h].maxX, _ = T[h].minX;
  if (K(e)) return S(e, u, _);
  if (N(e)) return e.points = e.points.map((o) => S(o, u, _)), e;
  if (Q(e)) return Z(e, n);
  if (U(e) || k(e)) {
    const o = V(q, e), a = { xmin: o[0], ymin: o[1], xmax: o[2], ymax: o[3] }, r = p(a.xmin, _) * (2 * u), x = r === 0 ? e : W(e, r);
    return a.xmin += r, a.xmax += r, a.xmax > u ? L(x, u, s) : a.xmin < _ ? L(x, _, s) : x;
  }
  return e;
}
function Z(i, s) {
  if (!s) return i;
  const t = $(i, s).map((n) => n.extent);
  return t.length < 2 ? t[0] || i : t.length > 2 ? (i.xmin = s.valid[0], i.xmax = s.valid[1], i) : { rings: t.map((n) => [[n.xmin, n.ymin], [n.xmin, n.ymax], [n.xmax, n.ymax], [n.xmax, n.ymin], [n.xmin, n.ymin]]) };
}
function S(i, s, t) {
  if (Array.isArray(i)) {
    const n = i[0];
    if (n > s) {
      const e = p(n, s);
      i[0] = n + e * (-2 * s);
    } else if (n < t) {
      const e = p(n, t);
      i[0] = n + e * (-2 * t);
    }
  } else {
    const n = i.x;
    if (n > s) {
      const e = p(n, s);
      i.x += e * (-2 * s);
    } else if (n < t) {
      const e = p(n, t);
      i.x += e * (-2 * t);
    }
  }
  return i;
}
function $(i, s) {
  const t = [], { ymin: n, ymax: e, xmin: h, xmax: u } = i, _ = i.xmax - i.xmin, [o, a] = s.valid, { x: r, frameId: x } = w(i.xmin, s), { x: l, frameId: c } = w(i.xmax, s), b = r === l && _ > 0;
  if (_ > 2 * a) {
    const v = { xmin: h < u ? r : l, ymin: n, xmax: a, ymax: e }, O = { xmin: o, ymin: n, xmax: h < u ? l : r, ymax: e }, P = { xmin: 0, ymin: n, xmax: a, ymax: e }, C = { xmin: o, ymin: n, xmax: 0, ymax: e }, f = [], y = [];
    I(v, P) && f.push(x), I(v, C) && y.push(x), I(O, P) && f.push(c), I(O, C) && y.push(c);
    for (let d = x + 1; d < c; d++) f.push(d), y.push(d);
    t.push(new m(v, [x]), new m(O, [c]), new m(P, f), new m(C, y));
  } else r > l || b ? t.push(new m({ xmin: r, ymin: n, xmax: a, ymax: e }, [x]), new m({ xmin: o, ymin: n, xmax: l, ymax: e }, [c])) : t.push(new m({ xmin: r, ymin: n, xmax: l, ymax: e }, [x]));
  return t;
}
function w(i, s) {
  const [t, n] = s.valid, e = 2 * n;
  let h, u = 0;
  return i > n ? (h = Math.ceil(Math.abs(i - n) / e), i -= h * e, u = h) : i < t && (h = Math.ceil(Math.abs(i - t) / e), i += h * e, u = -h), { x: i, frameId: u };
}
function I(i, s) {
  const { xmin: t, ymin: n, xmax: e, ymax: h } = s;
  return g(i, t, n) && g(i, t, h) && g(i, e, h) && g(i, e, n);
}
function g(i, s, t) {
  return s >= i.xmin && s <= i.xmax && t >= i.ymin && t <= i.ymax;
}
function L(i, s, t = !0) {
  const n = !k(i);
  if (n && Y(i), t)
    return new z().cut(i, s);
  const e = n ? i.rings : i.paths, h = n ? 4 : 2, u = e.length, _ = -2 * s;
  for (let o = 0; o < u; o++) {
    const a = e[o];
    if (a && a.length >= h) {
      const r = [];
      for (const x of a) r.push([x[0] + _, x[1]]);
      e.push(r);
    }
  }
  return n ? i.rings = e : i.paths = e, i;
}
class m {
  constructor(s, t) {
    this.extent = s, this.frameIds = t;
  }
}
const q = A();
class z {
  constructor() {
    this._linesIn = [], this._linesOut = [];
  }
  cut(s, t) {
    let n;
    if (this._xCut = t, s.rings) this._closed = !0, n = s.rings, this._minPts = 4;
    else {
      if (!s.paths) return null;
      this._closed = !1, n = s.paths, this._minPts = 2;
    }
    for (const h of n) {
      if (!h || h.length < this._minPts) continue;
      let u = !0;
      for (const _ of h) u ? (this.moveTo(_), u = !1) : this.lineTo(_);
      this._closed && this.close();
    }
    this._pushLineIn(), this._pushLineOut(), n = [];
    for (const h of this._linesIn) h && h.length >= this._minPts && n.push(h);
    const e = -2 * this._xCut;
    for (const h of this._linesOut) if (h && h.length >= this._minPts) {
      for (const u of h) u[0] += e;
      n.push(h);
    }
    return this._closed ? s.rings = n : s.paths = n, s;
  }
  moveTo(s) {
    this._pushLineIn(), this._pushLineOut(), this._prevSide = this._side(s[0]), this._moveTo(s[0], s[1], this._prevSide), this._prevPt = s, this._firstPt = s;
  }
  lineTo(s) {
    const t = this._side(s[0]);
    if (t * this._prevSide == -1) {
      const n = this._intersect(this._prevPt, s);
      this._lineTo(this._xCut, n, 0), this._prevSide = 0, this._lineTo(s[0], s[1], t);
    } else this._lineTo(s[0], s[1], t);
    this._prevSide = t, this._prevPt = s;
  }
  close() {
    const s = this._firstPt, t = this._prevPt;
    s[0] === t[0] && s[1] === t[1] || this.lineTo(s), this._checkClosingPt(this._lineIn), this._checkClosingPt(this._lineOut);
  }
  _moveTo(s, t, n) {
    this._closed ? (this._lineIn.push([n <= 0 ? s : this._xCut, t]), this._lineOut.push([n >= 0 ? s : this._xCut, t])) : (n <= 0 && this._lineIn.push([s, t]), n >= 0 && this._lineOut.push([s, t]));
  }
  _lineTo(s, t, n) {
    this._closed ? (M(this._lineIn, n <= 0 ? s : this._xCut, t), M(this._lineOut, n >= 0 ? s : this._xCut, t)) : n < 0 ? (this._prevSide === 0 && this._pushLineOut(), this._lineIn.push([s, t])) : n > 0 ? (this._prevSide === 0 && this._pushLineIn(), this._lineOut.push([s, t])) : this._prevSide < 0 ? (this._lineIn.push([s, t]), this._lineOut.push([s, t])) : this._prevSide > 0 && (this._lineOut.push([s, t]), this._lineIn.push([s, t]));
  }
  _checkClosingPt(s) {
    const t = s.length;
    t > 3 && s[0][0] === this._xCut && s[t - 2][0] === this._xCut && s[1][0] === this._xCut && (s[0][1] = s[t - 2][1], s.pop());
  }
  _side(s) {
    return s < this._xCut ? -1 : s > this._xCut ? 1 : 0;
  }
  _intersect(s, t) {
    const n = (this._xCut - s[0]) / (t[0] - s[0]);
    return s[1] + n * (t[1] - s[1]);
  }
  _pushLineIn() {
    this._lineIn && this._lineIn.length >= this._minPts && this._linesIn.push(this._lineIn), this._lineIn = [];
  }
  _pushLineOut() {
    this._lineOut && this._lineOut.length >= this._minPts && this._linesOut.push(this._lineOut), this._lineOut = [];
  }
}
function M(i, s, t) {
  const n = i.length;
  n > 1 && i[n - 1][0] === s && i[n - 2][0] === s ? i[n - 1][1] = t : i.push([s, t]);
}
export {
  E as a,
  D as p
};
//# sourceMappingURL=normalizeUtilsSync-DZUrcdHU.js.map
