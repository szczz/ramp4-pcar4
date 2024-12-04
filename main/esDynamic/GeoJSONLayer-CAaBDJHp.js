import { O as r, P as s, Q as F, fa as w, f1 as _, U as j, b8 as O, s as f, b5 as J, eW as N, a9 as R, dT as I, D as m, gu as q, ek as P, gv as T, gw as k, e3 as D, gx as G, e7 as C, e4 as Q, e5 as Z, e6 as z, e8 as L, bx as S, _ as W, gy as g, gz as B, I as v, gA as U, fn as p, gB as V, er as A, dS as M, ea as H, gC as K, gD as X, gE as Y, eb as ee, gF as te, gG as re, W as se, gH as ie, gI as oe, gJ as ne, gK as ae, ec as le, gL as ue, ei as de } from "./main-lm2DHsZh.js";
import { l as pe } from "./clientSideDefaults-BkFQkY5x.js";
let l = class extends w {
  constructor() {
    super(...arguments), this.type = "geojson", this.refresh = _(async (e) => {
      await this.load();
      const { extent: t, timeExtent: o } = await this._connection.invoke("refresh", e);
      return this.sourceJSON.extent = t, o && (this.sourceJSON.timeInfo.timeExtent = [o.start, o.end]), { dataChanged: !0, updates: { extent: this.sourceJSON.extent, timeInfo: this.sourceJSON.timeInfo } };
    });
  }
  load(e) {
    const t = e != null ? e.signal : null;
    return this.addResolvingPromise(this._startWorker(t)), Promise.resolve(this);
  }
  destroy() {
    this._connection?.close(), this._connection = null;
  }
  applyEdits(e) {
    return this.load().then(() => this._applyEdits(e));
  }
  openPorts() {
    return this.load().then(() => this._connection.openPorts());
  }
  queryFeatures(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t)).then((o) => j.fromJSON(o));
  }
  queryFeaturesJSON(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t));
  }
  queryFeatureCount(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryFeatureCount", e ? e.toJSON() : null, t));
  }
  queryObjectIds(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryObjectIds", e ? e.toJSON() : null, t));
  }
  queryExtent(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryExtent", e ? e.toJSON() : null, t)).then((o) => ({ count: o.count, extent: O.fromJSON(o.extent) }));
  }
  querySnapping(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("querySnapping", e, t));
  }
  _applyEdits(e) {
    if (!this._connection) throw new f("geojson-layer-source:edit-failure", "Memory source not loaded");
    const t = this.layer.objectIdField, o = [], n = [], h = [];
    if (e.addFeatures) for (const a of e.addFeatures) o.push(this._serializeFeature(a));
    if (e.deleteFeatures) for (const a of e.deleteFeatures) "objectId" in a && a.objectId != null ? n.push(a.objectId) : "attributes" in a && a.attributes[t] != null && n.push(a.attributes[t]);
    if (e.updateFeatures) for (const a of e.updateFeatures) h.push(this._serializeFeature(a));
    return this._connection.invoke("applyEdits", { adds: o, updates: h, deletes: n }).then(({ extent: a, timeExtent: u, featureEditResults: c }) => (this.sourceJSON.extent = a, u && (this.sourceJSON.timeInfo.timeExtent = [u.start, u.end]), this._createEditsResult(c)));
  }
  _createEditsResult(e) {
    return { addFeatureResults: e.addResults ? e.addResults.map(this._createFeatureEditResult, this) : [], updateFeatureResults: e.updateResults ? e.updateResults.map(this._createFeatureEditResult, this) : [], deleteFeatureResults: e.deleteResults ? e.deleteResults.map(this._createFeatureEditResult, this) : [], addAttachmentResults: [], updateAttachmentResults: [], deleteAttachmentResults: [] };
  }
  _createFeatureEditResult(e) {
    const t = e.success === !0 ? null : e.error || { code: void 0, description: void 0 };
    return { objectId: e.objectId, globalId: e.globalId, error: t ? new f("geojson-layer-source:edit-failure", t.description, { code: t.code }) : null };
  }
  _serializeFeature(e) {
    const { attributes: t } = e, o = this._geometryForSerialization(e);
    return o ? { geometry: o.toJSON(), attributes: t } : { attributes: t };
  }
  _geometryForSerialization(e) {
    const { geometry: t } = e;
    return t == null ? null : t.type === "mesh" || t.type === "extent" ? J.fromExtent(t.extent) : t;
  }
  async _startWorker(e) {
    this._connection = await N("GeoJSONSourceWorker", { strategy: R("feature-layers-workers") ? "dedicated" : "local", signal: e, registryTarget: this });
    const { fields: t, spatialReference: o, hasZ: n, geometryType: h, objectIdField: a, url: u, timeInfo: c, customParameters: E } = this.layer, x = this.layer.originOf("spatialReference") === "defaults", $ = { url: u, customParameters: E, fields: t && t.map((y) => y.toJSON()), geometryType: I.toJSON(h), hasZ: n, objectIdField: a, timeInfo: c ? c.toJSON() : null, spatialReference: x ? null : o && o.toJSON() }, d = await this._connection.invoke("load", $, { signal: e });
    for (const y of d.warnings) m.getLogger(this.layer).warn("#load()", `$${y.message} (title: '${this.layer.title || "no title"}', id: '${this.layer.id ?? "no id"}')`, { warning: y });
    d.featureErrors.length && m.getLogger(this.layer).warn("#load()", `Encountered ${d.featureErrors.length} validation errors while loading features. (title: '${this.layer.title || "no title"}', id: '${this.layer.id ?? "no id"}')`, { errors: d.featureErrors }), this.sourceJSON = d.layerDefinition, this.capabilities = pe(this.sourceJSON.hasZ, !0);
  }
};
r([s()], l.prototype, "capabilities", void 0), r([s()], l.prototype, "type", void 0), r([s({ constructOnly: !0 })], l.prototype, "layer", void 0), r([s()], l.prototype, "sourceJSON", void 0), l = r([F("esri.layers.graphics.sources.GeoJSONSource")], l);
const b = ue();
let i = class extends q(P(T(k(D(G(C(Q(Z(z(L(de))))))))))) {
  constructor(e) {
    super(e), this.copyright = null, this.dateFieldsTimeZone = null, this.definitionExpression = null, this.displayField = null, this.editingEnabled = !1, this.elevationInfo = null, this.fields = null, this.fieldsIndex = null, this.fullExtent = null, this.geometryType = null, this.hasZ = void 0, this.labelsVisible = !0, this.labelingInfo = null, this.legendEnabled = !0, this.objectIdField = null, this.operationalLayerType = "GeoJSON", this.outFields = null, this.popupEnabled = !0, this.popupTemplate = null, this.screenSizePerspectiveEnabled = !0, this.source = new l({ layer: this }), this.spatialReference = S.WGS84, this.templates = null, this.title = "GeoJSON", this.type = "geojson";
  }
  destroy() {
    this.source?.destroy();
  }
  load(e) {
    const t = this.loadFromPortal({ supportedTypes: ["GeoJson"], supportsData: !1 }, e).catch(W).then(() => this.source.load(e)).then(() => {
      this.read(this.source.sourceJSON, { origin: "service", url: this.parsedUrl }), this.revert(["objectIdField", "fields", "timeInfo"], "service"), g(this.renderer, this.fieldsIndex), B(this.timeInfo, this.fieldsIndex);
    });
    return this.addResolvingPromise(t), Promise.resolve(this);
  }
  get capabilities() {
    return this.source ? this.source.capabilities : null;
  }
  get createQueryVersion() {
    return this.commitProperty("definitionExpression"), this.commitProperty("timeExtent"), this.commitProperty("timeOffset"), this.commitProperty("geometryType"), this.commitProperty("capabilities"), (this._get("createQueryVersion") || 0) + 1;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get isTable() {
    return this.loaded && this.geometryType == null;
  }
  get parsedUrl() {
    return this.url ? v(this.url) : null;
  }
  set renderer(e) {
    g(e, this.fieldsIndex), this._set("renderer", e);
  }
  set url(e) {
    if (!e) return void this._set("url", e);
    const t = v(e);
    this._set("url", t.path), t.query && (this.customParameters = { ...this.customParameters, ...t.query });
  }
  async applyEdits(e, t) {
    const { applyEdits: o } = await import("./editingSupport-Cv1mxR_w.js");
    await this.load();
    const n = await o(this, this.source, e, t);
    return this.read({ extent: this.source.sourceJSON.extent, timeInfo: this.source.sourceJSON.timeInfo }, { origin: "service", ignoreDefaults: !0 }), n;
  }
  on(e, t) {
    return super.on(e, t);
  }
  createPopupTemplate(e) {
    return U(this, e);
  }
  createQuery() {
    const e = new p(), t = this.capabilities?.data;
    e.returnGeometry = !0, t && t.supportsZ && (e.returnZ = !0), e.outFields = ["*"], e.where = this.definitionExpression || "1=1";
    const { timeOffset: o, timeExtent: n } = this;
    return e.timeExtent = o != null && n != null ? n.offset(-o.value, o.unit) : n || null, e;
  }
  getFieldDomain(e, t) {
    return this.getField(e)?.domain;
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  queryFeatures(e, t) {
    return this.load().then(() => this.source.queryFeatures(p.from(e) || this.createQuery(), t)).then((o) => {
      if (o?.features) for (const n of o.features) n.layer = n.sourceLayer = this;
      return o;
    });
  }
  queryObjectIds(e, t) {
    return this.load().then(() => this.source.queryObjectIds(p.from(e) || this.createQuery(), t));
  }
  queryFeatureCount(e, t) {
    return this.load().then(() => this.source.queryFeatureCount(p.from(e) || this.createQuery(), t));
  }
  queryExtent(e, t) {
    return this.load().then(() => this.source.queryExtent(p.from(e) || this.createQuery(), t));
  }
  async hasDataChanged() {
    try {
      const { dataChanged: e, updates: t } = await this.source.refresh(this.customParameters);
      return t != null && this.read(t, { origin: "service", url: this.parsedUrl, ignoreDefaults: !0 }), e;
    } catch {
    }
    return !1;
  }
};
r([s({ readOnly: !0, json: { read: !1, write: !1 } })], i.prototype, "capabilities", null), r([s({ type: String })], i.prototype, "copyright", void 0), r([s({ readOnly: !0 })], i.prototype, "createQueryVersion", null), r([s(V("dateFieldsTimeReference"))], i.prototype, "dateFieldsTimeZone", void 0), r([s({ readOnly: !0 })], i.prototype, "defaultPopupTemplate", null), r([s({ type: String, json: { name: "layerDefinition.definitionExpression", write: { enabled: !0, allowNull: !0 } } })], i.prototype, "definitionExpression", void 0), r([s({ type: String })], i.prototype, "displayField", void 0), r([s({ type: Boolean })], i.prototype, "editingEnabled", void 0), r([s(A)], i.prototype, "elevationInfo", void 0), r([s({ type: [M], json: { name: "layerDefinition.fields", write: { ignoreOrigin: !0, isRequired: !0 }, origins: { service: { name: "fields" } } } })], i.prototype, "fields", void 0), r([s(b.fieldsIndex)], i.prototype, "fieldsIndex", void 0), r([s({ type: O, json: { name: "extent" } })], i.prototype, "fullExtent", void 0), r([s({ type: ["point", "polygon", "polyline", "multipoint"], json: { read: { reader: I.read } } })], i.prototype, "geometryType", void 0), r([s({ type: Boolean })], i.prototype, "hasZ", void 0), r([s(H)], i.prototype, "id", void 0), r([s({ type: Boolean, readOnly: !0 })], i.prototype, "isTable", null), r([s(K)], i.prototype, "labelsVisible", void 0), r([s({ type: [X], json: { name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: Y }, write: !0 } })], i.prototype, "labelingInfo", void 0), r([s(ee)], i.prototype, "legendEnabled", void 0), r([s({ type: ["show", "hide"] })], i.prototype, "listMode", void 0), r([s({ type: String, json: { name: "layerDefinition.objectIdField", write: { ignoreOrigin: !0, isRequired: !0 }, origins: { service: { name: "objectIdField" } } } })], i.prototype, "objectIdField", void 0), r([s(te)], i.prototype, "opacity", void 0), r([s({ type: ["GeoJSON"] })], i.prototype, "operationalLayerType", void 0), r([s(b.outFields)], i.prototype, "outFields", void 0), r([s({ readOnly: !0 })], i.prototype, "parsedUrl", null), r([s(re)], i.prototype, "popupEnabled", void 0), r([s({ type: se, json: { name: "popupInfo", write: !0 } })], i.prototype, "popupTemplate", void 0), r([s({ types: ie, json: { name: "layerDefinition.drawingInfo.renderer", write: !0, origins: { service: { name: "drawingInfo.renderer" }, "web-scene": { types: oe } } } })], i.prototype, "renderer", null), r([s(ne)], i.prototype, "screenSizePerspectiveEnabled", void 0), r([s({ readOnly: !0 })], i.prototype, "source", void 0), r([s({ type: S })], i.prototype, "spatialReference", void 0), r([s({ type: [ae] })], i.prototype, "templates", void 0), r([s()], i.prototype, "title", void 0), r([s({ json: { read: !1 }, readOnly: !0 })], i.prototype, "type", void 0), r([s(le)], i.prototype, "url", null), i = r([F("esri.layers.GeoJSONLayer")], i);
const ye = i;
export {
  ye as default
};
//# sourceMappingURL=GeoJSONLayer-CAaBDJHp.js.map
