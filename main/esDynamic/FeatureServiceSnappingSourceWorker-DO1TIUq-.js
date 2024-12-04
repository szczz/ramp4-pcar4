import { dV as X, cr as st, dK as y, le as it, lf as nt, aa as N, aO as j, O as h, P as d, Q as O, e2 as H, aP as Y, dj as $, lg as M, fK as z, k2 as D, lh as U, li as rt, lj as A, k9 as R, h as at, fw as tt, fF as ot, fj as lt, lk as ut, fn as b, b8 as ct, _ as ht, D as dt, J as ft, ll as pt, lm as _t, ln as gt, jt as yt, lo as mt, lp as Et, eN as Ft, lq as Ct, lr as q, dc as Tt, ls as St, fv as I, lt as vt, lu as B, lv as et, gr as bt, da as wt, ad as k, bx as v, g_ as It, S as V, gU as Ot, eV as xt } from "./main-lm2DHsZh.js";
import { m as $t } from "./FeatureStore-kbC0mBT0.js";
import { $ as At } from "./QueryEngine-cqgD_odw.js";
import { o as Rt } from "./BoundsStore-Ctj4ZYd-.js";
function J(e = !1, t) {
  if (e) {
    const { elevationInfo: s, alignPointsInFeatures: i } = t;
    return new zt(s, i);
  }
  return new Pt();
}
let Pt = class {
  async alignCandidates(t, s, i) {
    return t;
  }
  notifyElevationSourceChange() {
  }
};
const Ht = 1024;
let zt = class {
  constructor(t, s) {
    this._elevationInfo = t, this._alignPointsInFeatures = s, this._alignmentsCache = new X(Ht), this._cacheVersion = 0;
  }
  async alignCandidates(t, s, i) {
    const n = this._elevationInfo;
    return n == null || n.mode !== "absolute-height" || n.featureExpressionInfo ? this._alignComputedElevationCandidates(t, s, i) : (Nt(t, s, n), t);
  }
  notifyElevationSourceChange() {
    this._alignmentsCache.clear(), this._cacheVersion++;
  }
  async _alignComputedElevationCandidates(t, s, i) {
    const n = /* @__PURE__ */ new Map();
    for (const _ of t) st(n, _.objectId, jt).push(_);
    const [r, a, o] = this._prepareQuery(n, s), l = await this._alignPointsInFeatures(r, i);
    if (y(i), o !== this._cacheVersion) return this._alignComputedElevationCandidates(t, s, i);
    this._applyCacheAndResponse(r, l, a);
    const { drapedObjectIds: c, failedObjectIds: f } = l, g = [];
    for (const _ of t) {
      const { objectId: m } = _;
      c.has(m) && _.type === "edge" && (_.draped = !0), f.has(m) || g.push(_);
    }
    return g;
  }
  _prepareQuery(t, s) {
    const i = [], n = [];
    for (const [r, a] of t) {
      const o = [];
      for (const l of a) this._addToQueriesOrCachedResult(r, l.target, o, n), l.type === "edge" && (this._addToQueriesOrCachedResult(r, l.start, o, n), this._addToQueriesOrCachedResult(r, l.end, o, n));
      o.length !== 0 && i.push({ objectId: r, points: o });
    }
    return [{ spatialReference: s.toJSON(), pointsInFeatures: i }, n, this._cacheVersion];
  }
  _addToQueriesOrCachedResult(t, s, i, n) {
    const r = L(t, s), a = this._alignmentsCache.get(r);
    a == null ? i.push(s) : n.push(new Dt(s, a));
  }
  _applyCacheAndResponse(t, { elevations: s, drapedObjectIds: i, failedObjectIds: n }, r) {
    for (const l of r) l.apply();
    let a = 0;
    const o = this._alignmentsCache;
    for (const { objectId: l, points: c } of t.pointsInFeatures) {
      if (n.has(l)) {
        a += c.length;
        continue;
      }
      const f = !i.has(l);
      for (const g of c) {
        const _ = L(l, g), m = s[a++];
        g.z = m, f && o.put(_, m, 1);
      }
    }
  }
};
class Dt {
  constructor(t, s) {
    this.point = t, this.z = s;
  }
  apply() {
    this.point.z = this.z;
  }
}
function L(e, { x: t, y: s, z: i, spatialReference: n }) {
  return `${e}-${t}-${s}-${i ?? 0}}-wkid:${n?.wkid}`;
}
function Nt(e, t, s) {
  const { offset: i, unit: n } = s;
  if (i == null) return;
  const r = it(t), a = i * (nt(n ?? "meters") / r);
  for (const o of e) switch (o.type) {
    case "edge":
      o.start.z += a, o.end.z += a;
      continue;
    case "vertex":
      o.target.z += a;
      continue;
  }
}
function jt() {
  return [];
}
let Mt = class {
  filter(t, s) {
    return s;
  }
  notifyElevationSourceChange() {
  }
}, Ut = class {
  filter(t, s) {
    const { point: i, distance: n } = t, { z: r } = i;
    if (r == null || s.length === 0) return s;
    const a = Jt(n), o = this._updateCandidatesTo3D(s, i, a).filter(qt);
    return o.sort(Lt), o;
  }
  _updateCandidatesTo3D(t, s, i) {
    for (const n of t) switch (n.type) {
      case "edge":
        Bt(n, s, i);
        continue;
      case "vertex":
        Vt(n, s, i);
        continue;
    }
    return t;
  }
};
function qt(e) {
  return e.distance <= 1;
}
function Q(e = !1) {
  return e ? new Ut() : new Mt();
}
function Bt(e, t, { x: s, y: i, z: n }) {
  const { start: r, end: a, target: o } = e;
  e.draped || kt(o, t, r, a);
  const l = (t.x - o.x) / s, c = (t.y - o.y) / i, f = (t.z - o.z) / n;
  e.distance = Math.sqrt(l * l + c * c + f * f);
}
function kt(e, t, s, i) {
  const n = i.x - s.x, r = i.y - s.y, a = i.z - s.z, o = n * n + r * r + a * a, l = (t.x - s.x) * n + (t.y - s.y) * r + a * (t.z - s.z), c = Math.min(1, Math.max(0, l / o)), f = s.x + n * c, g = s.y + r * c, _ = s.z + a * c;
  e.x = f, e.y = g, e.z = _;
}
function Vt(e, t, { x: s, y: i, z: n }) {
  const { target: r } = e, a = (t.x - r.x) / s, o = (t.y - r.y) / i, l = (t.z - r.z) / n, c = Math.sqrt(a * a + o * o + l * l);
  e.distance = c;
}
function Jt(e) {
  return typeof e == "number" ? { x: e, y: e, z: e } : e;
}
function Lt(e, t) {
  return e.distance - t.distance;
}
function G(e = !1, t) {
  return e ? new Zt(t) : new Qt();
}
class Qt {
  async fetch() {
    return [];
  }
  notifySymbologyChange() {
  }
}
const Gt = 1024;
let Zt = class {
  constructor(t) {
    this._getSymbologyCandidates = t, this._candidatesCache = new X(Gt), this._cacheVersion = 0;
  }
  async fetch(t, s) {
    if (t.length === 0) return [];
    const i = [], n = [], r = this._candidatesCache;
    for (const g of t) {
      const _ = Z(g), m = r.get(_);
      if (m) for (const S of m) n.push(N(S));
      else i.push(g), r.put(_, [], 1);
    }
    if (i.length === 0) return n;
    const a = this._cacheVersion, { candidates: o, sourceCandidateIndices: l } = await this._getSymbologyCandidates(i, s);
    if (y(s), a !== this._cacheVersion) return this.fetch(t, s);
    const c = [], { length: f } = o;
    for (let g = 0; g < f; ++g) {
      const _ = o[g], m = Z(i[l[g]]), S = r.get(m);
      S.push(_), r.put(m, S, S.length), c.push(N(_));
    }
    return n.concat(c);
  }
  notifySymbologyChange() {
    this._candidatesCache.clear(), this._cacheVersion++;
  }
};
function Z(e) {
  switch (e.type) {
    case "vertex": {
      const { objectId: t, target: s } = e, i = `${t}-vertex-${s.x}-${s.y}-${s.z ?? 0}`;
      return j(i).toString();
    }
    case "edge": {
      const { objectId: t, start: s, end: i } = e, n = `${t}-edge-${s.x}-${s.y}-${s.z ?? 0}-to-${i.x}-${i.y}-${i.z ?? 0}`;
      return j(n).toString();
    }
    default:
      return "";
  }
}
let w = class extends H {
  constructor() {
    super(...arguments), this.updating = !1, this._pending = [];
  }
  push(t, s) {
    this._pending.push({ promise: t, callback: s }), this._pending.length === 1 && this._process();
  }
  _process() {
    if (!this._pending.length) return void (this.updating = !1);
    this.updating = !0;
    const t = this._pending[0];
    t.promise.then((s) => t.callback(s)).catch(() => {
    }).then(() => {
      this._pending.shift(), this._process();
    });
  }
};
h([d()], w.prototype, "updating", void 0), w = h([O("esri.core.AsyncSequence")], w);
class Wt {
  constructor(t, s) {
    this.data = t, this.resolution = s, this.state = { type: u.CREATED }, this.alive = !0;
  }
  process(t) {
    switch (this.state.type) {
      case u.CREATED:
        return this.state = this._gotoFetchCount(this.state, t), this.state.task.promise.then(t.resume, t.resume);
      case u.FETCH_COUNT:
        break;
      case u.FETCHED_COUNT:
        return this.state = this._gotoFetchFeatures(this.state, t), this.state.task.promise.then(t.resume, t.resume);
      case u.FETCH_FEATURES:
        break;
      case u.FETCHED_FEATURES:
        this.state = this._goToDone(this.state, t);
      case u.DONE:
    }
    return null;
  }
  get debugInfo() {
    return { data: this.data, featureCount: this._featureCount, state: this._stateToString };
  }
  get _featureCount() {
    switch (this.state.type) {
      case u.CREATED:
      case u.FETCH_COUNT:
        return 0;
      case u.FETCHED_COUNT:
        return this.state.featureCount;
      case u.FETCH_FEATURES:
        return this.state.previous.featureCount;
      case u.FETCHED_FEATURES:
        return this.state.features.length;
      case u.DONE:
        return this.state.previous.features.length;
    }
  }
  get _stateToString() {
    switch (this.state.type) {
      case u.CREATED:
        return "created";
      case u.FETCH_COUNT:
        return "fetch-count";
      case u.FETCHED_COUNT:
        return "fetched-count";
      case u.FETCH_FEATURES:
        return "fetch-features";
      case u.FETCHED_FEATURES:
        return "fetched-features";
      case u.DONE:
        return "done";
    }
  }
  _gotoFetchCount(t, s) {
    return { type: u.FETCH_COUNT, previous: t, task: $(async (i) => {
      const n = await M(s.fetchCount(this, i));
      this.state.type === u.FETCH_COUNT && (this.state = Kt(this.state, n.ok ? n.value : 1 / 0));
    }) };
  }
  _gotoFetchFeatures(t, s) {
    return { type: u.FETCH_FEATURES, previous: t, task: $(async (i) => {
      const n = await M(s.fetchFeatures(this, t.featureCount, i));
      this.state.type === u.FETCH_FEATURES && (this.state = Xt(this.state, n.ok ? n.value : []));
    }) };
  }
  _goToDone(t, s) {
    return s.finish(this, t.features), { type: u.DONE, previous: t };
  }
  reset() {
    const t = this.state;
    switch (this.state = { type: u.CREATED }, t.type) {
      case u.CREATED:
      case u.FETCHED_COUNT:
      case u.FETCHED_FEATURES:
      case u.DONE:
        break;
      case u.FETCH_COUNT:
      case u.FETCH_FEATURES:
        t.task.abort();
    }
  }
  intersects(t) {
    return t == null || !this.data.extent || (z(t, W), D(this.data.extent, W));
  }
}
function Kt(e, t) {
  return { type: u.FETCHED_COUNT, featureCount: t, previous: e };
}
function Xt(e, t) {
  return { type: u.FETCHED_FEATURES, previous: e, features: t };
}
var u;
(function(e) {
  e[e.CREATED = 0] = "CREATED", e[e.FETCH_COUNT = 1] = "FETCH_COUNT", e[e.FETCHED_COUNT = 2] = "FETCHED_COUNT", e[e.FETCH_FEATURES = 3] = "FETCH_FEATURES", e[e.FETCHED_FEATURES = 4] = "FETCHED_FEATURES", e[e.DONE = 5] = "DONE";
})(u || (u = {}));
const W = Y();
let p = class extends H {
  get _minimumVerticesPerFeature() {
    switch (this.store?.featureStore.geometryType) {
      case "esriGeometryPoint":
      case "esriGeometryMultipoint":
        return 1;
      case "esriGeometryPolygon":
        return 4;
      case "esriGeometryPolyline":
        return 2;
    }
  }
  get _mandatoryOutFields() {
    const t = /* @__PURE__ */ new Set();
    return this.objectIdField && t.add(this.objectIdField), this.globalIdField && t.add(this.globalIdField), t;
  }
  set outFields(t) {
    const s = this._get("outFields"), i = U(t, this._mandatoryOutFields);
    rt(i, s) || (this._set("outFields", i), A(i, s) || this.refresh());
  }
  get outFields() {
    return this._get("outFields") ?? this._mandatoryOutFields;
  }
  set filter(t) {
    const s = this._get("filter"), i = this._filterProperties(t);
    JSON.stringify(s) !== JSON.stringify(i) && this._set("filter", i);
  }
  set customParameters(t) {
    const s = this._get("customParameters");
    JSON.stringify(s) !== JSON.stringify(t) && this._set("customParameters", t);
  }
  get _configuration() {
    return { filter: this.filter, customParameters: this.customParameters, tileInfo: this.tileInfo, tileSize: this.tileSize };
  }
  set tileInfo(t) {
    const s = this._get("tileInfo");
    s !== t && (t != null && s != null && JSON.stringify(t) === JSON.stringify(s) || (this._set("tileInfo", t), this.store.tileInfo = t));
  }
  set tileSize(t) {
    this._get("tileSize") !== t && this._set("tileSize", t);
  }
  get updating() {
    return this.updatingExcludingEdits || this._pendingEdits.updating;
  }
  get updatingExcludingEdits() {
    return this._updatingHandles.updating;
  }
  get hasZ() {
    return this.store.featureStore.hasZ;
  }
  constructor(t) {
    super(t), this.suspended = !0, this.tilesOfInterest = [], this.availability = 0, this._pendingTiles = /* @__PURE__ */ new Map(), this._updatingHandles = new R(), this._pendingEdits = new w(), this._pendingEditsAbortController = new AbortController();
  }
  initialize() {
    this._initializeFetchExtent(), this._updatingHandles.add(() => this._configuration, () => this.refresh()), this._updatingHandles.add(() => this.tilesOfInterest, (t, s) => {
      at(t, s, ({ id: i }, { id: n }) => i === n) || this._process();
    }, tt), this.addHandles(ot(() => !this.suspended, () => this._process()));
  }
  destroy() {
    this._pendingTiles.forEach((t) => this._deletePendingTile(t)), this._pendingTiles.clear(), this.store.destroy(), this.tilesOfInterest.length = 0, this._pendingEditsAbortController.abort(), this._pendingEditsAbortController = null, this._updatingHandles.destroy();
  }
  refresh() {
    this.store.refresh(), this._pendingTiles.forEach((t) => this._deletePendingTile(t)), this._process();
  }
  applyEdits(t) {
    this._pendingEdits.push(t, async (s) => {
      if (s.addedFeatures.length === 0 && s.updatedFeatures.length === 0 && s.deletedFeatures.length === 0) return;
      for (const [, n] of this._pendingTiles) n.reset();
      const i = { ...s, deletedFeatures: s.deletedFeatures.map(({ objectId: n, globalId: r }) => n && n !== -1 ? n : this._lookupObjectIdByGlobalId(r)) };
      await this._updatingHandles.addPromise(this.store.processEdits(i, (n, r) => this._queryFeaturesById(n, r), this._pendingEditsAbortController.signal)), this._processPendingTiles();
    });
  }
  _initializeFetchExtent() {
    if (!this.capabilities.query.supportsExtent || !lt(this.url)) return;
    const t = $(async (s) => {
      try {
        const i = await ut(this.url, new b({ where: "1=1", outSpatialReference: this.spatialReference, cacheHint: this.capabilities.query.supportsCacheHint ?? void 0 }), { query: this._configuration.customParameters, signal: s });
        this.store.extent = ct.fromJSON(i.data?.extent);
      } catch (i) {
        ht(i), dt.getLogger(this).warn("Failed to fetch data extent", i);
      }
    });
    this._updatingHandles.addPromise(t.promise.then(() => this._process())), this.addHandles(ft(() => t.abort()));
  }
  get debugInfo() {
    return { numberOfFeatures: this.store.featureStore.numFeatures, tilesOfInterest: this.tilesOfInterest, pendingTiles: Array.from(this._pendingTiles.values()).map((t) => t.debugInfo), storedTiles: this.store.debugInfo };
  }
  _process() {
    this._markTilesNotAlive(), this._createPendingTiles(), this._deletePendingTiles(), this._processPendingTiles();
  }
  _markTilesNotAlive() {
    for (const [, t] of this._pendingTiles) t.alive = !1;
  }
  _createPendingTiles() {
    if (this.suspended) return;
    const t = this._collectMissingTilesInfo();
    if (this._setAvailability(t == null ? 1 : t.coveredArea / t.fullArea), t != null) for (const { data: s, resolution: i } of t.missingTiles) {
      const n = this._pendingTiles.get(s.id);
      n ? (n.resolution = i, n.alive = !0) : this._createPendingTile(s, i);
    }
  }
  _collectMissingTilesInfo() {
    let t = null;
    for (let s = this.tilesOfInterest.length - 1; s >= 0; s--) {
      const i = this.tilesOfInterest[s], n = this.store.process(i, (r, a) => this._verifyTileComplexity(r, a), this.outFields);
      t == null ? t = n : t.prepend(n);
    }
    return t;
  }
  _deletePendingTiles() {
    for (const [, t] of this._pendingTiles) t.alive || this._deletePendingTile(t);
  }
  _processPendingTiles() {
    const t = { fetchCount: (s, i) => this._fetchCount(s, i), fetchFeatures: (s, i, n) => this._fetchFeatures(s, i, n), finish: (s, i) => this._finishPendingTile(s, i), resume: () => this._processPendingTiles() };
    if (this._ensureFetchAllCounts(t)) for (const [, s] of this._pendingTiles) this._verifyTileComplexity(this.store.getFeatureCount(s.data), s.resolution) && this._updatingHandles.addPromise(s.process(t));
  }
  _verifyTileComplexity(t, s) {
    return this._verifyVertexComplexity(t) && this._verifyFeatureDensity(t, s);
  }
  _verifyVertexComplexity(t) {
    return t * this._minimumVerticesPerFeature < te;
  }
  _verifyFeatureDensity(t, s) {
    if (this.tileInfo == null) return !1;
    const i = this.tileSize * s;
    return t * (ee / (i * i)) < se;
  }
  _ensureFetchAllCounts(t) {
    let s = !0;
    for (const [, i] of this._pendingTiles) i.state.type < u.FETCHED_COUNT && this._updatingHandles.addPromise(i.process(t)), i.state.type <= u.FETCH_COUNT && (s = !1);
    return s;
  }
  _finishPendingTile(t, s) {
    this.store.add(t.data, s), this._deletePendingTile(t), this._updateAvailability();
  }
  _updateAvailability() {
    const t = this._collectMissingTilesInfo();
    this._setAvailability(t == null ? 1 : t.coveredArea / t.fullArea);
  }
  _setAvailability(t) {
    this._set("availability", t);
  }
  _createPendingTile(t, s) {
    const i = new Wt(t, s);
    return this._pendingTiles.set(t.id, i), i;
  }
  _deletePendingTile(t) {
    t.reset(), this._pendingTiles.delete(t.data.id);
  }
  async _fetchCount(t, s) {
    return this.store.fetchCount(t.data, this.url, this._createCountQuery(t), { query: this.customParameters, timeout: x, signal: s });
  }
  async _fetchFeatures(t, s, i) {
    let n = 0;
    const r = [];
    let a = 0, o = s;
    for (; ; ) {
      const l = this._createFeaturesQuery(t), c = this._setPagingParameters(l, n, o), { features: f, exceededTransferLimit: g } = await this._queryFeatures(l, i);
      c && (n += l.num), a += f.length;
      for (const _ of f) r.push(_);
      if (o = s - a, !c || !g || o <= 0) return r;
    }
  }
  _filterProperties(t) {
    return t == null ? { where: "1=1", gdbVersion: void 0, timeExtent: void 0 } : { where: t.where || "1=1", timeExtent: t.timeExtent, gdbVersion: t.gdbVersion };
  }
  _lookupObjectIdByGlobalId(t) {
    const s = this.globalIdField, i = this.objectIdField;
    if (s == null) throw new Error("Expected globalIdField to be defined");
    let n = null;
    if (this.store.featureStore.forEach((r) => {
      t === r.attributes[s] && (n = r.objectId ?? r.attributes[i]);
    }), n == null) throw new Error(`Expected to find a feature with globalId ${t}`);
    return n;
  }
  _queryFeaturesById(t, s) {
    const i = this._createFeaturesQuery();
    return i.objectIds = t, this._queryFeatures(i, s);
  }
  _queryFeatures(t, s) {
    return this.capabilities.query.supportsFormatPBF ? this._queryFeaturesPBF(t, s) : this._queryFeaturesJSON(t, s);
  }
  async _queryFeaturesPBF(t, s) {
    const { sourceSpatialReference: i } = this, { data: n } = await pt(this.url, t, new _t({ sourceSpatialReference: i }), { query: this._configuration.customParameters, timeout: x, signal: s });
    return gt(n);
  }
  async _queryFeaturesJSON(t, s) {
    const { sourceSpatialReference: i } = this, { data: n } = await yt(this.url, t, i, { query: this._configuration.customParameters, timeout: x, signal: s });
    return mt(n, this.objectIdField);
  }
  _createCountQuery(t) {
    const s = this._createBaseQuery(t);
    return this.capabilities.query.supportsCacheHint && (s.cacheHint = !0), s;
  }
  _createFeaturesQuery(t = null) {
    const s = this._createBaseQuery(t), i = t?.data != null ? this.store.getAttributesForTile(t?.data?.id) : null, n = U(Et(this.outFields, i ?? /* @__PURE__ */ new Set()), this._mandatoryOutFields);
    return s.outFields = Array.from(n), s.returnGeometry = !0, t != null && (this.capabilities.query.supportsResultType ? s.resultType = "tile" : this.capabilities.query.supportsCacheHint && (s.cacheHint = !0)), s;
  }
  _createBaseQuery(t) {
    const s = new b({ returnZ: this.hasZ, returnM: !1, geometry: this.tileInfo != null && t != null ? Ft(t.data.extent, this.tileInfo.spatialReference) : void 0 }), i = this._configuration.filter;
    return i != null && (s.where = i.where, s.gdbVersion = i.gdbVersion, s.timeExtent = i.timeExtent), s.outSpatialReference = this.spatialReference, s;
  }
  _setPagingParameters(t, s, i) {
    if (!this.capabilities.query.supportsPagination) return !1;
    const { supportsMaxRecordCountFactor: n, supportsCacheHint: r, tileMaxRecordCount: a, maxRecordCount: o, supportsResultType: l } = this.capabilities.query, c = n ? b.MAX_MAX_RECORD_COUNT_FACTOR : 1, f = c * ((l || r) && a ? a : o || Yt);
    return t.start = s, n ? (t.maxRecordCountFactor = Math.min(c, Math.ceil(i / f)), t.num = Math.min(i, t.maxRecordCountFactor * f)) : t.num = Math.min(i, f), !0;
  }
};
h([d({ constructOnly: !0 })], p.prototype, "url", void 0), h([d({ constructOnly: !0 })], p.prototype, "objectIdField", void 0), h([d({ constructOnly: !0 })], p.prototype, "globalIdField", void 0), h([d({ constructOnly: !0 })], p.prototype, "capabilities", void 0), h([d({ constructOnly: !0 })], p.prototype, "sourceSpatialReference", void 0), h([d({ constructOnly: !0 })], p.prototype, "spatialReference", void 0), h([d({ constructOnly: !0 })], p.prototype, "store", void 0), h([d({ readOnly: !0 })], p.prototype, "_minimumVerticesPerFeature", null), h([d()], p.prototype, "_mandatoryOutFields", null), h([d()], p.prototype, "outFields", null), h([d()], p.prototype, "suspended", void 0), h([d()], p.prototype, "filter", null), h([d()], p.prototype, "customParameters", null), h([d({ readOnly: !0 })], p.prototype, "_configuration", null), h([d()], p.prototype, "tileInfo", null), h([d()], p.prototype, "tileSize", null), h([d()], p.prototype, "tilesOfInterest", void 0), h([d({ readOnly: !0 })], p.prototype, "updating", null), h([d({ readOnly: !0 })], p.prototype, "updatingExcludingEdits", null), h([d({ readOnly: !0 })], p.prototype, "availability", void 0), h([d()], p.prototype, "hasZ", null), p = h([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")], p);
const Yt = 2e3, x = 6e5, te = 1e6, ee = 25, se = 1;
class ie {
  constructor() {
    this._store = /* @__PURE__ */ new Map(), this._byteSize = 0;
  }
  set(t, s) {
    this.delete(t), this._store.set(t, s), this._byteSize += s.byteSize;
  }
  delete(t) {
    const s = this._store.get(t);
    return !!this._store.delete(t) && (s != null && (this._byteSize -= s.byteSize), !0);
  }
  get(t) {
    return this._used(t), this._store.get(t);
  }
  has(t) {
    return this._used(t), this._store.has(t);
  }
  clear() {
    this._store.clear();
  }
  applyByteSizeLimit(t, s) {
    for (const [i, n] of this._store) {
      if (this._byteSize <= t) break;
      this.delete(i), s(n);
    }
  }
  values() {
    return this._store.values();
  }
  [Symbol.iterator]() {
    return this._store[Symbol.iterator]();
  }
  _used(t) {
    const s = this._store.get(t);
    s && (this._store.delete(t), this._store.set(t, s));
  }
}
let F = class extends H {
  constructor(e) {
    super(e), this.tileInfo = null, this.extent = null, this.maximumByteSize = 10 * Ct.MEGABYTES, this._tileBounds = new Rt(), this._tiles = new ie(), this._refCounts = /* @__PURE__ */ new Map(), this._tileFeatureCounts = /* @__PURE__ */ new Map(), this._tmpBoundingRect = Y();
  }
  add(e, t) {
    for (const n of t) this._referenceFeature(n.objectId);
    const s = this.featureStore.upsertMany(t), i = s.map((n) => new Set(Object.keys(n.attributes))).reduce((n, r) => q(n, r), new Set(Object.keys(s[0]?.attributes ?? [])));
    this._addTileStorage(e, new Set(s.map((n) => n.objectId)), re(s), i), this._tiles.applyByteSizeLimit(this.maximumByteSize, (n) => this._removeTileStorage(n));
  }
  getAttributesForTile(e) {
    return e ? this._tiles.get(e)?.attributeKeys : null;
  }
  destroy() {
    this.clear(), this._tileFeatureCounts.clear();
  }
  clear() {
    this.featureStore.clear(), this._tileBounds.clear(), this._tiles.clear(), this._refCounts.clear();
  }
  refresh() {
    this.clear(), this._tileFeatureCounts.clear();
  }
  processEdits(e, t, s) {
    return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)), this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures), t, s);
  }
  _addTileStorage(e, t, s, i) {
    const n = e.id;
    this._tiles.set(n, new le(e, t, s, i)), this._tileBounds.set(n, e.extent), this._tileFeatureCounts.set(n, t.size);
  }
  _remove({ id: e }) {
    const t = this._tiles.get(e);
    t && this._removeTileStorage(t);
  }
  _removeTileStorage(e) {
    const t = [];
    for (const i of e.objectIds) this._unreferenceFeature(i) === C.REMOVED && t.push(i);
    this.featureStore.removeManyById(t);
    const s = e.data.id;
    this._tiles.delete(s), this._tileBounds.delete(s);
  }
  _processEditsDelete(e) {
    this.featureStore.removeManyById(e);
    for (const [, t] of this._tiles) {
      for (const s of e) t.objectIds.delete(s);
      this._tileFeatureCounts.set(t.data.id, t.objectIds.size);
    }
    for (const t of e) this._refCounts.delete(t);
  }
  async _processEditsRefetch(e, t, s) {
    const i = (await t(e, s)).features, { hasZ: n, hasM: r } = this.featureStore;
    for (const a of i) {
      const o = Tt(this._tmpBoundingRect, a.geometry, n, r);
      o != null && this._tileBounds.forEachInBounds(o, (l) => {
        const c = this._tiles.get(l);
        this.featureStore.add(a);
        const f = a.objectId;
        c.objectIds.has(f) || (c.objectIds.add(f), this._referenceFeature(f), this._tileFeatureCounts.set(c.data.id, c.objectIds.size));
      });
    }
  }
  process(e, t = () => !0, s) {
    if (this.tileInfo == null || !e.extent || this.extent != null && !D(z(this.extent, this._tmpBoundingRect), e.extent)) return new P(e);
    const i = this.getAttributesForTile(e.id);
    if (A(s, i)) return new P(e);
    const n = this._createTileTree(e, this.tileInfo);
    return this._simplify(n, t, null, 0, 1), this._collectMissingTiles(e, n, this.tileInfo, s);
  }
  get debugInfo() {
    return Array.from(this._tiles.values()).map(({ data: e }) => ({ data: e, featureCount: this._tileFeatureCounts.get(e.id) || 0 }));
  }
  getFeatureCount(e) {
    return this._tileFeatureCounts.get(e.id) ?? 0;
  }
  async fetchCount(e, t, s, i) {
    const n = this._tileFeatureCounts.get(e.id);
    if (n != null) return n;
    const r = await St(t, s, i);
    return this._tileFeatureCounts.set(e.id, r.data.count), r.data.count;
  }
  _createTileTree(e, t) {
    const s = new K(e.level, e.row, e.col);
    return t.updateTileInfo(s, I.ExtrapolateOptions.POWER_OF_TWO), this._tileBounds.forEachInBounds(e.extent, (i) => {
      const n = this._tiles.get(i)?.data;
      n && ne(e, n) && this._populateChildren(s, n, t, this._tileFeatureCounts.get(n.id) || 0);
    }), s;
  }
  _populateChildren(e, t, s, i) {
    const n = t.level - e.level - 1;
    if (n < 0) return void (e.isLeaf = !0);
    const r = t.row >> n, a = t.col >> n, o = e.row << 1, l = a - (e.col << 1) + (r - o << 1), c = e.children[l];
    if (c != null) this._populateChildren(c, t, s, i);
    else {
      const f = new K(e.level + 1, r, a);
      s.updateTileInfo(f, I.ExtrapolateOptions.POWER_OF_TWO), e.children[l] = f, this._populateChildren(f, t, s, i);
    }
  }
  _simplify(e, t, s, i, n) {
    const r = n * n;
    if (e.isLeaf) return t(this.getFeatureCount(e), n) ? 0 : (this._remove(e), s != null && (s.children[i] = null), r);
    const a = n / 2, o = a * a;
    let l = 0;
    for (let c = 0; c < e.children.length; c++) {
      const f = e.children[c];
      l += f != null ? this._simplify(f, t, e, c, a) : o;
    }
    return l === 0 ? this._mergeChildren(e) : 1 - l / r < ce && (this._purge(e), s != null && (s.children[i] = null), l = r), l;
  }
  _mergeChildren(e) {
    const t = /* @__PURE__ */ new Set();
    let s, i = 0;
    this._forEachLeaf(e, (n) => {
      const r = this._tiles.get(n.id);
      if (r) {
        s = s ? q(s, r.attributeKeys) : new Set(r.attributeKeys), i += r.byteSize;
        for (const a of r.objectIds) t.has(a) || (t.add(a), this._referenceFeature(a));
        this._remove(n);
      }
    }), this._addTileStorage(e, t, i, s ?? /* @__PURE__ */ new Set()), e.isLeaf = !0, e.children[0] = e.children[1] = e.children[2] = e.children[3] = null, this._tileFeatureCounts.set(e.id, t.size);
  }
  _forEachLeaf(e, t) {
    for (const s of e.children) s != null && (s.isLeaf ? t(s) : this._forEachLeaf(s, t));
  }
  _purge(e) {
    if (e != null) if (e.isLeaf) this._remove(e);
    else for (let t = 0; t < e.children.length; t++) {
      const s = e.children[t];
      this._purge(s), e.children[t] = null;
    }
  }
  _collectMissingTiles(e, t, s, i) {
    const n = new ue(s, e, this.extent);
    return this._collectMissingTilesRecurse(t, n, 1, i), n.info;
  }
  _collectMissingTilesRecurse(e, t, s, i) {
    const n = this.getAttributesForTile(e.id), r = n && !A(i, n);
    if (r && t.addMissing(e.level, e.row, e.col, s), e.isLeaf) return;
    if (!e.hasChildren) return void (r || t.addMissing(e.level, e.row, e.col, s));
    const a = s / 2;
    for (let o = 0; o < e.children.length; o++) {
      const l = e.children[o];
      l == null ? t.addMissing(e.level + 1, (e.row << 1) + ((2 & o) >> 1), (e.col << 1) + (1 & o), a) : this._collectMissingTilesRecurse(l, t, a, i);
    }
  }
  _referenceFeature(e) {
    const t = (this._refCounts.get(e) || 0) + 1;
    return this._refCounts.set(e, t), t === 1 ? C.ADDED : C.UNCHANGED;
  }
  _unreferenceFeature(e) {
    const t = (this._refCounts.get(e) || 0) - 1;
    return t === 0 ? (this._refCounts.delete(e), C.REMOVED) : (t > 0 && this._refCounts.set(e, t), C.UNCHANGED);
  }
  get test() {
  }
};
function ne(e, t) {
  if (!e || !t) return !1;
  if (e.level === t.level) return e.row === t.row && e.col === t.col;
  const s = e.level < t.level, i = s ? e : t, n = s ? t : e, r = 1 << n.level - i.level;
  return Math.floor(n.row / r) === i.row && Math.floor(n.col / r) === i.col;
}
function re(e) {
  return e.reduce((t, s) => t + ae(s), 0);
}
function ae(e) {
  return 32 + oe(e.geometry) + vt(e.attributes);
}
function oe(e) {
  if (e == null) return 0;
  const t = B(e.lengths, 4);
  return 32 + B(e.coords, 8) + t;
}
h([d({ constructOnly: !0 })], F.prototype, "featureStore", void 0), h([d()], F.prototype, "tileInfo", void 0), h([d()], F.prototype, "extent", void 0), h([d()], F.prototype, "maximumByteSize", void 0), F = h([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")], F);
let le = class {
  constructor(t, s, i, n) {
    this.data = t, this.objectIds = s, this.byteSize = i, this.attributeKeys = n;
  }
};
class K {
  constructor(t, s, i) {
    this.level = t, this.row = s, this.col = i, this.isLeaf = !1, this.extent = null, this.children = [null, null, null, null];
  }
  get hasChildren() {
    return !this.isLeaf && (this.children[0] != null || this.children[1] != null || this.children[2] != null || this.children[3] != null);
  }
}
let P = class {
  constructor(t, s = []) {
    this.missingTiles = s, this.fullArea = 0, this.coveredArea = 0, this.fullArea = et(t.extent), this.coveredArea = this.fullArea;
  }
  prepend(t) {
    this.missingTiles = t.missingTiles.concat(this.missingTiles), this.coveredArea += t.coveredArea, this.fullArea += t.fullArea;
  }
}, ue = class {
  constructor(t, s, i) {
    this._tileInfo = t, this._extent = null, this.info = new P(s), i != null && (this._extent = z(i));
  }
  addMissing(t, s, i, n) {
    const r = new bt(null, t, s, i);
    this._tileInfo.updateTileInfo(r, I.ExtrapolateOptions.POWER_OF_TWO), r.extent == null || this._extent != null && !D(this._extent, r.extent) || (this.info.missingTiles.push({ data: r, resolution: n }), this.info.coveredArea -= et(r.extent));
  }
};
const ce = 0.18751;
var C;
(function(e) {
  e[e.ADDED = 0] = "ADDED", e[e.REMOVED = 1] = "REMOVED", e[e.UNCHANGED = 2] = "UNCHANGED";
})(C || (C = {}));
let T = class extends wt.EventedAccessor {
  constructor() {
    super(...arguments), this._isInitializing = !0, this.remoteClient = null, this._whenSetup = k(), this._elevationAligner = J(), this._elevationFilter = Q(), this._symbologyCandidatesFetcher = G(), this._updatingHandles = new R(), this._editsUpdatingHandles = new R(), this._pendingApplyEdits = /* @__PURE__ */ new Map(), this._alignPointsInFeatures = async (e, t) => {
      const s = { query: e }, i = await this.remoteClient.invoke("alignElevation", s, { signal: t });
      return y(t), i;
    }, this._getSymbologyCandidates = async (e, t) => {
      const s = { candidates: e, spatialReference: this._spatialReference.toJSON() }, i = await this.remoteClient.invoke("getSymbologyCandidates", s, { signal: t });
      return y(t), i;
    };
  }
  get updating() {
    return this.updatingExcludingEdits || this._editsUpdatingHandles.updating || this._featureFetcher.updating;
  }
  get updatingExcludingEdits() {
    return this._featureFetcher.updatingExcludingEdits || this._isInitializing || this._updatingHandles.updating;
  }
  destroy() {
    this._featureFetcher?.destroy(), this._queryEngine?.destroy(), this._featureStore?.clear();
  }
  async setup(e) {
    if (this.destroyed) return { result: {} };
    const { geometryType: t, objectIdField: s, timeInfo: i, fieldsIndex: n } = e.serviceInfo, { hasZ: r } = e, a = v.fromJSON(e.spatialReference);
    this._spatialReference = a, this._featureStore = new $t({ ...e.serviceInfo, hasZ: r, hasM: !1 }), this._queryEngine = new At({ spatialReference: e.spatialReference, featureStore: this._featureStore, geometryType: t, fieldsIndex: n, hasZ: r, hasM: !1, objectIdField: s, timeInfo: i }), this._featureFetcher = new p({ store: new F({ featureStore: this._featureStore }), url: e.serviceInfo.url, objectIdField: e.serviceInfo.objectIdField, globalIdField: e.serviceInfo.globalIdField, capabilities: e.serviceInfo.capabilities, spatialReference: a, sourceSpatialReference: v.fromJSON(e.serviceInfo.spatialReference), customParameters: e.configuration.customParameters });
    const o = e.configuration.viewType === "3d";
    return this._elevationAligner = J(o, { elevationInfo: e.elevationInfo != null ? It.fromJSON(e.elevationInfo) : null, alignPointsInFeatures: this._alignPointsInFeatures }), this._elevationFilter = Q(o), this.addHandles([V(() => this._featureFetcher.availability, (l) => this.emit("notify-availability", { availability: l }), tt), V(() => this.updating, () => this._notifyUpdating())]), this._whenSetup.resolve(), this._isInitializing = !1, this.configure(e.configuration);
  }
  async configure(e) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), this._updateFeatureFetcherConfiguration(e), E;
  }
  async setSuspended(e, t) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), y(t), this._featureFetcher.suspended = e, E;
  }
  async updateOutFields(e, t) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), y(t), this._featureFetcher.outFields = new Set(e ?? []), E;
  }
  async fetchCandidates(e, t) {
    await this._whenSetup.promise, y(t);
    const s = he(e), i = t?.signal, n = await this._queryEngine.executeQueryForSnapping(s, i);
    y(i);
    const r = await this._elevationAligner.alignCandidates(n.candidates, v.fromJSON(e.point.spatialReference) ?? v.WGS84, i);
    y(i);
    const a = await this._symbologyCandidatesFetcher.fetch(r, i);
    y(i);
    const o = a.length === 0 ? r : r.concat(a);
    return { result: { candidates: this._elevationFilter.filter(s, o) } };
  }
  async updateTiles(e, t) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), y(t), this._featureFetcher.tileSize = e.tileSize, this._featureFetcher.tilesOfInterest = e.tiles, this._featureFetcher.tileInfo = e.tileInfo != null ? I.fromJSON(e.tileInfo) : null, E;
  }
  async refresh(e, t) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), y(t), this._featureFetcher.refresh(), E;
  }
  async whenNotUpdating(e, t) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), y(t), await Ot(() => !this.updatingExcludingEdits, t), y(t), E;
  }
  async getDebugInfo(e, t) {
    return y(t), { result: this._featureFetcher.debugInfo };
  }
  async beginApplyEdits(e, t) {
    this._updatingHandles.addPromise(this._whenSetup.promise), y(t);
    const s = k();
    return this._pendingApplyEdits.set(e.id, s), this._featureFetcher.applyEdits(s.promise), this._editsUpdatingHandles.addPromise(s.promise), E;
  }
  async endApplyEdits(e, t) {
    const s = this._pendingApplyEdits.get(e.id);
    return s && s.resolve(e.edits), y(t), E;
  }
  async notifyElevationSourceChange(e, t) {
    return this._elevationAligner.notifyElevationSourceChange(), E;
  }
  async notifySymbologyChange(e, t) {
    return this._symbologyCandidatesFetcher.notifySymbologyChange(), E;
  }
  async setSymbologySnappingSupported(e) {
    return this._symbologyCandidatesFetcher = G(e, this._getSymbologyCandidates), E;
  }
  _updateFeatureFetcherConfiguration(e) {
    this._featureFetcher.filter = e.filter != null ? b.fromJSON(e.filter) : null, this._featureFetcher.customParameters = e.customParameters;
  }
  _notifyUpdating() {
    this.emit("notify-updating", { updating: this.updating });
  }
};
h([d({ readOnly: !0 })], T.prototype, "updating", null), h([d({ readOnly: !0 })], T.prototype, "updatingExcludingEdits", null), h([d()], T.prototype, "_isInitializing", void 0), T = h([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")], T);
const we = T;
function he(e) {
  if (!e.filter) return { ...e, query: { where: "1=1" } };
  const { distance: t, units: s, spatialRel: i, where: n, timeExtent: r, objectIds: a } = e.filter, o = { geometry: e.filter.geometry ? xt(e.filter.geometry) : void 0, distance: t, units: s, spatialRel: i, timeExtent: r, objectIds: a, where: n ?? "1=1" };
  return { ...e, query: o };
}
const E = { result: {} };
export {
  we as default
};
//# sourceMappingURL=FeatureServiceSnappingSourceWorker-DO1TIUq-.js.map