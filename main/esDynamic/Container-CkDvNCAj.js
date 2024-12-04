import { O as g, P as m, Q as Y, e2 as k, a9 as S, D as U, aa as I, l8 as Z, l9 as z, la as j, da as Q, ad as T, bq as J, f9 as tt, bI as et } from "./main-lm2DHsZh.js";
import { l as it, c as L } from "./highlightReasons-B7i0i-F2.js";
import { I as st, r as C, a as w } from "./definitions-Doe0g1C2.js";
import { D as nt, O as rt, I as b } from "./enums-DDkmfb-t.js";
import { e as ot, c as lt } from "./Texture-DhDvGrgF.js";
const O = -1;
let f = class extends k {
  constructor(t) {
    super(t), this._from = null, this._to = null, this._final = null, this._current = [], this._time = 0, this.duration = S("mapview-transitions-duration"), this.effects = [];
  }
  set effect(t) {
    if (this._get("effect") !== (t = t || "")) {
      this._set("effect", t);
      try {
        this._transitionTo(P(t));
      } catch (i) {
        this._transitionTo([]), U.getLogger(this).warn("Invalid Effect", { effect: t, error: i });
      }
    }
  }
  get hasEffects() {
    return this.transitioning || !!this.effects.length;
  }
  set scale(t) {
    this._updateForScale(t);
  }
  get transitioning() {
    return this._to !== null;
  }
  canTransitionTo(t) {
    try {
      return this.scale > 0 && H(this._current, P(t), this.scale);
    } catch {
      return !1;
    }
  }
  transitionStep(t, i) {
    this._applyTimeTransition(t), this._updateForScale(i);
  }
  endTransitions() {
    this._applyTimeTransition(this.duration);
  }
  _transitionTo(t) {
    this.scale > 0 && H(this._current, t, this.scale) ? (this._final = t, this._to = I(t), ht(this._current, this._to, this.scale), this._from = I(this._current), this._time = 0) : (this._from = this._to = this._final = null, this._current = t), this._set("effects", this._current[0] ? I(this._current[0].effects) : []);
  }
  _applyTimeTransition(t) {
    if (!(this._to && this._from && this._current && this._final)) return;
    this._time += t;
    const i = Math.min(1, this._time / this.duration);
    for (let s = 0; s < this._current.length; s++) {
      const n = this._current[s], l = this._from[s], a = this._to[s];
      n.scale = at(l.scale, a.scale, i);
      for (let r = 0; r < n.effects.length; r++) {
        const o = n.effects[r], c = l.effects[r], u = a.effects[r];
        o.interpolate(c, u, i);
      }
    }
    i === 1 && (this._current = this._final, this._set("effects", this._current[0] ? I(this._current[0].effects) : []), this._from = this._to = this._final = null);
  }
  _updateForScale(t) {
    if (this._set("scale", t), this._current.length === 0) return;
    const i = this._current, s = this._current.length - 1;
    let n, l, a = 1;
    if (i.length === 1 || t >= i[0].scale) l = n = i[0].effects;
    else if (t <= i[s].scale) l = n = i[s].effects;
    else for (let r = 0; r < s; r++) {
      const o = i[r], c = i[r + 1];
      if (o.scale >= t && c.scale <= t) {
        a = (t - o.scale) / (c.scale - o.scale), n = o.effects, l = c.effects;
        break;
      }
    }
    for (let r = 0; r < this.effects.length; r++)
      this.effects[r].interpolate(n[r], l[r], a);
  }
};
function P(e) {
  const t = Z(e) || [];
  return ct(t) ? [{ scale: O, effects: t }] : t;
}
function H(e, t, i) {
  return !e[0]?.effects || !t[0]?.effects ? !0 : !((e[0]?.scale === O || t[0]?.scale === O) && (e.length > 1 || t.length > 1) && i <= 0) && z(e[0].effects, t[0].effects);
}
function ht(e, t, i) {
  const s = e.length > t.length ? e : t, n = e.length > t.length ? t : e, l = n[n.length - 1], a = l?.scale ?? i, r = l?.effects ?? [];
  for (let o = n.length; o < s.length; o++) n.push({ scale: a, effects: [...r] });
  for (let o = 0; o < s.length; o++) n[o].scale = n[o].scale === O ? i : n[o].scale, s[o].scale = s[o].scale === O ? i : s[o].scale, j(n[o].effects, s[o].effects);
}
function at(e, t, i) {
  return e + (t - e) * i;
}
function ct(e) {
  const t = e[0];
  return !!t && "type" in t;
}
g([m()], f.prototype, "_to", void 0), g([m()], f.prototype, "duration", void 0), g([m({ value: "" })], f.prototype, "effect", null), g([m({ readOnly: !0 })], f.prototype, "effects", void 0), g([m({ readOnly: !0 })], f.prototype, "hasEffects", null), g([m({ value: 0 })], f.prototype, "scale", null), g([m({ readOnly: !0 })], f.prototype, "transitioning", null), f = g([Y("esri.layers.effects.EffectView")], f);
let dt = class extends Q {
  constructor() {
    super(...arguments), this._fadeOutResolver = null, this._fadeInResolver = null, this._clips = null, this.computedVisible = !0, this.computedOpacity = 1, this.fadeTransitionEnabled = !1, this.inFadeTransition = !1, this._isReady = !1, this._opacity = 1, this.parent = null, this._stage = null, this._visible = !0;
  }
  get clips() {
    return this._clips;
  }
  set clips(t) {
    this._clips = t, this.requestRender();
  }
  get isReady() {
    return this._isReady;
  }
  get opacity() {
    return this._opacity;
  }
  set opacity(t) {
    this._opacity !== t && (this._opacity = Math.min(1, Math.max(t, 0)), this.requestRender());
  }
  get stage() {
    return this._stage;
  }
  set stage(t) {
    if (this._stage === t) return;
    const i = this._stage;
    this._stage = t, t ? this._stage?.untrashDisplayObject(this) || (this.onAttach(), this.emit("attach")) : i?.trashDisplayObject(this);
  }
  get transforms() {
    return this._getTransforms();
  }
  _getTransforms() {
    return this._transforms == null && (this._transforms = this._createTransforms()), this._transforms;
  }
  get visible() {
    return this._visible;
  }
  set visible(t) {
    this._visible !== t && (this._visible = t, this.requestRender());
  }
  get hasLabels() {
    return !1;
  }
  get hasHighlight() {
    return !1;
  }
  get hasBlending() {
    return !1;
  }
  fadeIn() {
    return this._fadeInResolver || (this._fadeOutResolver && (this._fadeOutResolver(), this._fadeOutResolver = null), this.opacity = 1, this.computedOpacity = 0, this.fadeTransitionEnabled = !0, this._fadeInResolver = T(), this.requestRender()), this._fadeInResolver.promise;
  }
  fadeOut() {
    return this._fadeOutResolver || (this.opacity = 0, this._fadeInResolver && (this._fadeInResolver(), this._fadeInResolver = null), this.fadeTransitionEnabled = !0, this._fadeOutResolver = T(), this.requestRender()), this._fadeOutResolver.promise;
  }
  endTransitions() {
    this._fadeInResolver?.(), this._fadeInResolver = null, this._fadeOutResolver?.(), this._fadeOutResolver = null, this.computedOpacity = this.visible ? this.opacity : 0, this.requestRender();
  }
  beforeRender(t) {
    this.updateTransitionProperties(t.deltaTime, t.state.scale), this.setTransform(t.state);
  }
  afterRender(t) {
    this._fadeInResolver && this.computedOpacity === this.opacity ? (this._fadeInResolver(), this._fadeInResolver = null) : this._fadeOutResolver && this.computedOpacity === 0 && (this._fadeOutResolver(), this._fadeOutResolver = null);
  }
  remove() {
    this.parent?.removeChild(this);
  }
  setTransform(t) {
  }
  processRender(t) {
    this.stage && this.computedVisible && this.doRender(t);
  }
  requestRender() {
    this.stage && this.stage.requestRender();
  }
  processDetach() {
    this._fadeInResolver && (this._fadeInResolver(), this._fadeInResolver = null), this._fadeOutResolver && (this._fadeOutResolver(), this._fadeOutResolver = null), this.onDetach(), this.emit("detach");
  }
  updateTransitionProperties(t, i) {
    const s = S("mapview-transitions-duration") === 0 ? 0 : 1 / S("mapview-transitions-duration");
    if (this.fadeTransitionEnabled && s !== 0) {
      const n = this._fadeOutResolver || !this.visible ? 0 : this.opacity, l = this.computedOpacity;
      if (l === n) this.computedVisible = this.visible;
      else {
        const a = t * s;
        this.computedOpacity = l > n ? Math.max(n, l - a) : Math.min(n, l + a), this.computedVisible = this.computedOpacity > 0;
        const r = n === this.computedOpacity;
        this.inFadeTransition = !r, r || this.requestRender();
      }
    } else this.computedOpacity = this.opacity, this.computedVisible = this.visible;
  }
  onAttach() {
  }
  onDetach() {
  }
  doRender(t) {
  }
  ready() {
    this._isReady || (this._isReady = !0, this.emit("isReady"), this.requestRender());
  }
};
const ut = 1, wt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], Pt = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], y = 256, _ = { outlineWidth: 1.3, outerHaloWidth: 0.4, innerHaloWidth: 0.4, outlinePosition: 0 }, M = () => U.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");
function ft(e, t) {
  t.fillColor[0] = e.color.r / 255, t.fillColor[1] = e.color.g / 255, t.fillColor[2] = e.color.b / 255, t.fillColor[3] = e.color.a, e.haloColor ? (t.outlineColor[0] = e.haloColor.r / 255, t.outlineColor[1] = e.haloColor.g / 255, t.outlineColor[2] = e.haloColor.b / 255, t.outlineColor[3] = e.haloColor.a) : (t.outlineColor[0] = t.fillColor[0], t.outlineColor[1] = t.fillColor[1], t.outlineColor[2] = t.fillColor[2], t.outlineColor[3] = t.fillColor[3]), t.fillColor[3] *= e.fillOpacity, t.outlineColor[3] *= e.haloOpacity, t.fillColor[0] *= t.fillColor[3], t.fillColor[1] *= t.fillColor[3], t.fillColor[2] *= t.fillColor[3], t.outlineColor[0] *= t.outlineColor[3], t.outlineColor[1] *= t.outlineColor[3], t.outlineColor[2] *= t.outlineColor[3], t.outlineWidth = _.outlineWidth, t.outerHaloWidth = _.outerHaloWidth, t.innerHaloWidth = _.innerHaloWidth, t.outlinePosition = _.outlinePosition;
}
const pt = [0, 0, 0, 0];
class V {
  constructor() {
    this.type = "single", this._convertedHighlightOptions = { fillColor: [0.2 * 0.75, 0.6 * 0.75, 0.675, 0.75], outlineColor: [0.2 * 0.9, 0.54, 0.81, 0.9], outlinePosition: _.outlinePosition, outlineWidth: _.outlineWidth, innerHaloWidth: _.innerHaloWidth, outerHaloWidth: _.outerHaloWidth }, this._shadeTexChanged = !0, this._texelData = new Uint8Array(4 * y), this._minMaxDistance = [0, 0];
  }
  setHighlightOptions(t) {
    const i = this._convertedHighlightOptions;
    ft(t, i);
    const s = i.outlinePosition - i.outlineWidth / 2 - i.outerHaloWidth, n = i.outlinePosition - i.outlineWidth / 2, l = i.outlinePosition + i.outlineWidth / 2, a = i.outlinePosition + i.outlineWidth / 2 + i.innerHaloWidth, r = Math.sqrt(Math.PI / 2) * ut, o = Math.abs(s) > r ? Math.round(10 * (Math.abs(s) - r)) / 10 : 0, c = Math.abs(a) > r ? Math.round(10 * (Math.abs(a) - r)) / 10 : 0;
    let u;
    o && !c ? M().error("The outer rim of the highlight is " + o + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards).") : !o && c ? M().error("The inner rim of the highlight is " + c + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards).") : o && c && M().error("The highlight is " + Math.max(o, c) + "px away from the edge of the feature; consider reducing some width values.");
    const h = [void 0, void 0, void 0, void 0];
    function R(d, v, p) {
      h[0] = (1 - p) * d[0] + p * v[0], h[1] = (1 - p) * d[1] + p * v[1], h[2] = (1 - p) * d[2] + p * v[2], h[3] = (1 - p) * d[3] + p * v[3];
    }
    const { _texelData: E } = this;
    for (let d = 0; d < y; ++d) u = s + d / (y - 1) * (a - s), u < s ? (h[0] = 0, h[1] = 0, h[2] = 0, h[3] = 0) : u < n ? R(pt, i.outlineColor, (u - s) / (n - s)) : u < l ? [h[0], h[1], h[2], h[3]] = i.outlineColor : u < a ? R(i.outlineColor, i.fillColor, (u - l) / (a - l)) : [h[0], h[1], h[2], h[3]] = i.fillColor, E[4 * d] = 255 * h[0], E[4 * d + 1] = 255 * h[1], E[4 * d + 2] = 255 * h[2], E[4 * d + 3] = 255 * h[3];
    this._minMaxDistance[0] = s, this._minMaxDistance[1] = a, this._shadeTexChanged = !0;
  }
  applyHighlightOptions(t, i) {
    if (!this._shadeTex) {
      const s = new ot();
      s.wrapMode = nt.CLAMP_TO_EDGE, s.width = y, s.height = 1, this._shadeTex = new lt(t, s);
    }
    this._shadeTexChanged && (this._shadeTex.updateData(0, 0, 0, y, 1, this._texelData), this._shadeTexChanged = !1), t.bindTexture(this._shadeTex, st), i.setUniform2fv("u_minMaxDistance", this._minMaxDistance);
  }
  destroy() {
    this._shadeTex?.dispose(), this._shadeTex = null;
  }
  getReasonsWithGradients() {
    return [{ activeReasons: (1 << it.length) - 1, activeGradient: this }];
  }
}
let gt = class {
  constructor() {
    this.type = "multi";
    const t = {};
    for (const i in L) t[i] = new V();
    this.gradients = t;
  }
  setHighlightOptions(t) {
    for (const i in L) {
      const s = L[i](t);
      this.gradients[i].setHighlightOptions(s);
    }
  }
  applyHighlightOptions(t, i, s) {
    this.gradients[s].applyHighlightOptions(t, i);
  }
  destroy() {
    for (const t in L) this.gradients[t].destroy();
  }
  getReasonsWithGradients() {
    let t = 1;
    const i = [];
    for (const s in this.gradients) {
      const n = this.gradients[s];
      i.push({ activeReasons: t, activeGradient: n }), t <<= 1;
    }
    return i;
  }
};
var G, D, $, x, N, F, A, W, q;
(function(e) {
  e[e.FILL = 0] = "FILL", e[e.LINE = 1] = "LINE", e[e.MARKER = 2] = "MARKER", e[e.TEXT = 3] = "TEXT", e[e.LABEL = 4] = "LABEL";
})(G || (G = {})), function(e) {
  e[e.NONE = 0] = "NONE", e[e.MAP = 1] = "MAP", e[e.LABEL = 2] = "LABEL", e[e.LABEL_ALPHA = 4] = "LABEL_ALPHA", e[e.HITTEST = 8] = "HITTEST", e[e.HIGHLIGHT = 16] = "HIGHLIGHT", e[e.CLIP = 32] = "CLIP", e[e.DEBUG = 64] = "DEBUG", e[e.NUM_DRAW_PHASES = 9] = "NUM_DRAW_PHASES";
}(D || (D = {})), function(e) {
  e[e.SIZE = 0] = "SIZE", e[e.COLOR = 1] = "COLOR", e[e.OPACITY = 2] = "OPACITY", e[e.ROTATION = 3] = "ROTATION";
}($ || ($ = {})), function(e) {
  e[e.MINMAX_TARGETS_OUTLINE = 128] = "MINMAX_TARGETS_OUTLINE", e[e.SCALE_TARGETS_OUTLINE = 256] = "SCALE_TARGETS_OUTLINE", e[e.FIELD_TARGETS_OUTLINE = 512] = "FIELD_TARGETS_OUTLINE", e[e.UNIT_TARGETS_OUTLINE = 1024] = "UNIT_TARGETS_OUTLINE";
}(x || (x = {})), function(e) {
  e[e.SPRITE = 0] = "SPRITE", e[e.GLYPH = 1] = "GLYPH";
}(N || (N = {})), function(e) {
  e[e.DEFAULT = 0] = "DEFAULT", e[e.SIMPLE = 1] = "SIMPLE", e[e.DOT_DENSITY = 2] = "DOT_DENSITY", e[e.OUTLINE_FILL = 3] = "OUTLINE_FILL", e[e.OUTLINE_FILL_SIMPLE = 4] = "OUTLINE_FILL_SIMPLE", e[e.HEATMAP = 5] = "HEATMAP", e[e.PIE_CHART = 6] = "PIE_CHART";
}(F || (F = {})), function(e) {
  e[e.All = 0] = "All", e[e.Highlight = 1] = "Highlight", e[e.InsideEffect = 2] = "InsideEffect", e[e.OutsideEffect = 3] = "OutsideEffect";
}(A || (A = {})), function(e) {
  e[e.BATCHING = 0] = "BATCHING", e[e.STRICT_ORDER = 1] = "STRICT_ORDER", e[e.STRICT_MARKERS_AND_TEXT = 2] = "STRICT_MARKERS_AND_TEXT";
}(W || (W = {})), function(e) {
  e[e.FILL = 0] = "FILL", e[e.LINE = 1] = "LINE", e[e.MARKER = 2] = "MARKER", e[e.TEXT = 3] = "TEXT";
}(q || (q = {}));
const B = { color: { write: [!0, !0, !0, !0], blendMode: "composite" }, depth: !1, stencil: { write: !1, test: { ref: (e) => e.stencilRef, compare: rt.EQUAL, mask: 255, op: { fail: b.KEEP, zFail: b.KEEP, zPass: b.REPLACE } } } }, _t = { color: { write: [!0, !0, !0, !0], blendMode: "additive" }, depth: !1, stencil: !1 }, mt = { ...B, color: { write: [!0, !0, !0, !0], blendMode: "delete" } };
function Rt({ pixelRatio: e, state: t, displayLevel: i, requiredLevel: s }, n) {
  const l = 1 / 2 ** (i - n.key.level), a = 1 / 2 ** (s - n.key.level);
  return { displayMat3: Array.from(t.displayMat3), displayViewMat3: Array.from(t.displayViewMat3), displayViewScreenMat3: Array.from(n.transforms.displayViewScreenMat3), viewMat3: Array.from(t.viewMat3), tileMat3: Array.from(n.transforms.tileMat3), displayZoomFactor: l, requiredZoomFactor: a, tileOffset: [n.x, n.y], currentScale: t.scale, currentZoom: i, metersPerSRUnit: J(t.spatialReference), rotation: t.rotation, pixelRatio: e };
}
function K(e) {
  return e.passOptions?.type === "highlight";
}
function X(e) {
  return e.passOptions?.type === "hittest";
}
function yt(e) {
  if (!X(e)) return null;
  const { position: t, distance: i, smallSymbolDistance: s, smallSymbolSizeThreshold: n } = e.passOptions;
  return { position: t, distance: i, smallSymbolDistance: s, smallSymbolSizeThreshold: n };
}
function Ot(e) {
  if (!K(e)) return null;
  const { activeReasons: t, highlightAll: i } = e.passOptions;
  return { activeReasons: t, highlightAll: i ? 1 : 0 };
}
function Gt(e, t, i) {
  const s = {};
  for (const n in i) i[n] instanceof Function ? s[n] = i[n](e, t) : s[n] = i[n];
  return s;
}
function Dt(e, t) {
  const { attributeView: i, context: s } = e;
  return { storage: i.getUniforms(s), view: Rt(e, t), hittestRequest: yt(e), highlight: Ot(e) };
}
function $t(e) {
  return { inside: e.selection === A.InsideEffect, outside: e.selection === A.OutsideEffect };
}
function Et(e) {
  return X(e) ? _t : K(e) && e.passOptions.stepType === "clear" ? mt : B;
}
function xt(e) {
  const { row: t, col: i } = e.key, s = i * w, n = t * w;
  return { tileOffsetFromLocalOrigin: [s % C, n % C], maxIntsToLocalOrigin: [Math.floor(s / C), Math.floor(n / C)] };
}
const vt = new tt({ esriGeometryPoint: "point", esriGeometryMultipoint: "multipoint", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon", esriGeometryMultiPatch: "multipatch", mesh: "mesh" });
function Nt(e) {
  return vt.toJSON(e);
}
function Ft(e) {
  const { bandCount: t, attributeTable: i, colormap: s, pixelType: n } = e.raster.rasterInfo;
  return t === 1 && (i != null || s != null || n === "u8" || n === "s8");
}
function It(e, t) {
  return e?.type === "single" && t.multiHighlightEnabled && (e.destroy(), e = null), e?.type !== "multi" || t.multiHighlightEnabled || (e.destroy(), e = null), e || (e = t.multiHighlightEnabled ? new gt() : new V()), e.setHighlightOptions(t), e;
}
function Wt(e, t, i) {
  const { painter: s, highlightGradient: n } = e, { highlight: l } = s.effects;
  if (!n) return;
  const a = e.passOptions, r = n.getReasonsWithGradients();
  for (let o = 0; o < r.length; o++) {
    const c = { ...e, passOptions: { type: "highlight", activeGradient: r[o].activeGradient, activeReasons: r[o].activeReasons, stepType: "burn", highlightAll: t } };
    if (l.bind(c), i(c), o < r.length - 1) {
      let h = 0;
      for (let R = o + 1; R < r.length; R++) h |= r[R].activeReasons;
      i({ ...e, passOptions: { type: "highlight", activeGradient: r[o].activeGradient, activeReasons: h, stepType: "clear", highlightAll: t } });
    }
    const u = { ...e, passOptions: { type: "highlight", activeGradient: r[o].activeGradient, activeReasons: r[o].activeReasons, stepType: "draw", highlightAll: t } };
    s.setPipelineState(Et(e)), s.updatePipelineState(e.context), l.draw(u), l.unbind();
  }
  e.passOptions = a;
}
class qt extends dt {
  constructor() {
    super(...arguments), this._childrenSet = /* @__PURE__ */ new Set(), this._needsSort = !1, this._children = [], this._effectView = null, this._highlightOptions = null, this._highlightGradient = null;
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(t) {
    this._blendMode = t, this.requestRender();
  }
  get children() {
    return this._children;
  }
  get clips() {
    return this._clips;
  }
  set clips(t) {
    this._clips = t, this.children.forEach((i) => i.clips = t);
  }
  get computedEffects() {
    return this._effectView?.effects ?? null;
  }
  get effect() {
    return this._effectView?.effect ?? "";
  }
  set effect(t) {
    (this._effectView || t) && (this._effectView || (this._effectView = new f()), this._effectView.effect = t, this.requestRender());
  }
  get highlightOptions() {
    return this._highlightOptions;
  }
  set highlightOptions(t) {
    if (!t) return this._highlightOptions = null, void (this._highlightGradient && (this._highlightGradient.destroy(), this._highlightGradient = null, this.requestRender()));
    this._highlightOptions?.equals(t) || (this._highlightOptions = t, this._highlightGradient = It(this._highlightGradient, t), this.requestRender());
  }
  get hasBlending() {
    return !!this.blendMode;
  }
  get hasHighlight() {
    return this.children.some((t) => t.hasHighlight);
  }
  get hasLabels() {
    return this.children.some((t) => t.hasLabels);
  }
  get requiresDedicatedFBO() {
    return this.children.some((t) => "blendMode" in t && t.blendMode && t.blendMode !== "normal");
  }
  updateTransitionProperties(t, i) {
    super.updateTransitionProperties(t, i), this._effectView && (this._effectView.transitionStep(t, i), this._effectView.transitioning && this.requestRender());
  }
  doRender(t) {
    const i = this.createRenderParams(t), { painter: s } = i;
    s.beforeRenderLayer(i, this._clips?.length ? 255 : 0, this.computedOpacity), this.renderChildren(i), s.afterRenderLayer(i, this.computedOpacity);
  }
  addChild(t) {
    return this.addChildAt(t, this.children.length);
  }
  addChildAt(t, i = this.children.length) {
    if (!t || this.contains(t)) return t;
    this._needsSort = !0;
    const s = t.parent;
    return s && s !== this && s.removeChild(t), i >= this.children.length ? this.children.push(t) : this.children.splice(i, 0, t), this._childrenSet.add(t), t.parent = this, t.stage = this.stage, this !== this.stage && (t.clips = this.clips), this.requestRender(), t;
  }
  contains(t) {
    return this._childrenSet.has(t);
  }
  endTransitions() {
    super.endTransitions(), this._effectView && (this._effectView.endTransitions(), this.requestRender());
  }
  removeAllChildren() {
    this._childrenSet.clear(), this._needsSort = !0;
    for (const t of this.children) this !== this.stage && (t.clips = null), t.stage = null, t.parent = null;
    this.children.length = 0;
  }
  removeChild(t) {
    return this.contains(t) ? this.removeChildAt(this.children.indexOf(t)) : t;
  }
  removeChildAt(t) {
    if (t < 0 || t >= this.children.length) return null;
    this._needsSort = !0;
    const i = this.children.splice(t, 1)[0];
    return this._childrenSet.delete(i), this !== this.stage && (i.clips = null), i.stage = null, i.parent = null, i;
  }
  sortChildren(t) {
    this._needsSort && (this.children.sort(t), this._needsSort = !1);
  }
  beforeRender(t) {
    super.beforeRender(t);
    for (const i of this.children) i.beforeRender(t);
  }
  afterRender(t) {
    super.afterRender(t);
    for (const i of this.children) i.afterRender(t);
  }
  _createTransforms() {
    return { displayViewScreenMat3: et() };
  }
  onAttach() {
    super.onAttach();
    const t = this.stage;
    for (const i of this.children) i.stage = t;
  }
  onDetach() {
    super.onDetach();
    for (const t of this.children) t.stage = null;
  }
  renderChildren(t) {
    for (const i of this.children) i.processRender(t);
  }
  createRenderParams(t) {
    return { ...t, requireFBO: this.requiresDedicatedFBO, blendMode: this.blendMode, effects: this.computedEffects, globalOpacity: t.globalOpacity * this.computedOpacity, inFadeTransition: this.inFadeTransition, highlightGradient: this._highlightGradient || t.highlightGradient };
  }
}
export {
  N as A,
  D as E,
  $ as L,
  Et as M,
  W as N,
  A as R,
  q as S,
  Wt as a,
  f as b,
  Nt as c,
  $t as d,
  Rt as e,
  K as f,
  Gt as g,
  qt as h,
  Pt as i,
  ut as o,
  X as p,
  Ft as r,
  dt as s,
  wt as t,
  xt as w,
  Dt as y
};
//# sourceMappingURL=Container-CkDvNCAj.js.map
