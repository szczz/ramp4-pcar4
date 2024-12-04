import { $ as y, s as c, O as n, P as p, ea as R, bx as _, e9 as h, b8 as S, ii as O, ec as L, eH as U, Q as K, f1 as V, he as C, d as M, ij as k, ik as q, D as w, il as z, I as F, Z as J, C as D } from "./main-lm2DHsZh.js";
import { i as $ } from "./originUtils-BLsWtgV9.js";
import { o as A } from "./jsonContext-Cdt0iWTe.js";
import { p as B, n as Z } from "./resourceUtils-DWAsP-yN.js";
import { i as T } from "./saveAPIKeyUtils-DRUsfLzY.js";
import { t as H } from "./saveUtils-DGiWOint.js";
async function Q(s, o, t, e, i, r, a) {
  let l = null;
  if (t != null) {
    const u = `${s}/nodepages/`, N = u + Math.floor(t.rootIndex / t.nodesPerPage);
    try {
      return { type: "page", rootPage: (await y(N, { query: { f: "json", ...e, token: i }, responseType: "json", signal: a })).data, rootIndex: t.rootIndex, pageSize: t.nodesPerPage, lodMetric: t.lodSelectionMetricType, urlPrefix: u };
    } catch (E) {
      r?.warn("#fetchIndexInfo()", "Failed to load root node page. Falling back to node documents.", N, E), l = E;
    }
  }
  if (!o) return null;
  const d = o?.split("/").pop(), f = `${s}/nodes/`, v = f + d;
  try {
    return { type: "node", rootNode: (await y(v, { query: { f: "json", ...e, token: i }, responseType: "json", signal: a })).data, urlPrefix: f };
  } catch (u) {
    throw new c("sceneservice:root-node-missing", "Root node missing.", { pageError: l, nodeError: u, url: v });
  }
}
let G = null;
function W() {
  return G;
}
const oe = (s) => {
  let o = class extends s {
    constructor() {
      super(...arguments), this.spatialReference = null, this.fullExtent = null, this.heightModelInfo = null, this.minScale = 0, this.maxScale = 0, this.version = { major: Number.NaN, minor: Number.NaN, versionString: "" }, this.copyright = null, this.sublayerTitleMode = "item-title", this.title = null, this.layerId = null, this.indexInfo = null, this._debouncedSaveOperations = V(async (t, e, i) => {
        switch (t) {
          case g.SAVE:
            return this._save(e);
          case g.SAVE_AS:
            return this._saveAs(i, e);
        }
      });
    }
    readSpatialReference(t, e) {
      return I(e);
    }
    readFullExtent(t, e, i) {
      if (t != null && typeof t == "object") {
        const l = t.spatialReference == null ? { ...t, spatialReference: I(e) } : t;
        return S.fromJSON(l, i);
      }
      const r = e.store, a = I(e);
      return a == null || r?.extent == null || !Array.isArray(r.extent) || r.extent.some((l) => l < x) ? null : new S({ xmin: r.extent[0], ymin: r.extent[1], xmax: r.extent[2], ymax: r.extent[3], spatialReference: a });
    }
    parseVersionString(t) {
      const e = { major: Number.NaN, minor: Number.NaN, versionString: t }, i = t.split(".");
      return i.length >= 2 && (e.major = parseInt(i[0], 10), e.minor = parseInt(i[1], 10)), e;
    }
    readVersion(t, e) {
      const i = e.store, r = i.version != null ? i.version.toString() : "";
      return this.parseVersionString(r);
    }
    readTitlePortalItem(t) {
      return this.sublayerTitleMode !== "item-title" ? void 0 : t;
    }
    readTitleService(t, e) {
      const i = this.portalItem?.title;
      if (this.sublayerTitleMode === "item-title") return this.url ? C(this.url, e.name) : e.name;
      let r = e.name;
      if (!r && this.url) {
        const a = M(this.url);
        a != null && (r = a.title);
      }
      return this.sublayerTitleMode === "item-title-and-service-name" && i && (r = i + " - " + r), k(r);
    }
    set url(t) {
      if (t == null) return void this._set("url", t);
      const e = q({ layer: this, url: t, nonStandardUrlAllowed: !1, logger: w.getLogger(this) });
      this._set("url", e.url), e.layerId != null && this._set("layerId", e.layerId);
    }
    writeUrl(t, e, i, r) {
      z(this, t, "layers", e, r);
    }
    get parsedUrl() {
      const t = this._get("url"), e = F(t);
      return e && this.layerId != null && (e.path = `${e.path}/layers/${this.layerId}`), e;
    }
    async _fetchIndexAndUpdateExtent(t, e) {
      this.indexInfo = Q(this.parsedUrl?.path ?? "", this.rootNode, t, this.customParameters, this.apiKey, w.getLogger(this), e), this.fullExtent == null || this.fullExtent.hasZ || this._updateExtent(await this.indexInfo);
    }
    _updateExtent(t) {
      if (t?.type === "page") {
        const e = t.rootIndex % t.pageSize, i = t.rootPage?.nodes?.[e];
        if (i?.obb?.center == null || i.obb.halfSize == null) throw new c("sceneservice:invalid-node-page", "Invalid node page.");
        if (i.obb.center[0] < x || this.fullExtent == null || this.fullExtent.hasZ) return;
        const r = i.obb.halfSize, a = i.obb.center[2], l = Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]);
        this.fullExtent.zmin = a - l, this.fullExtent.zmax = a + l;
      } else if (t?.type === "node") {
        const e = t.rootNode?.mbs;
        if (!Array.isArray(e) || e.length !== 4 || e[0] < x) return;
        const i = e[2], r = e[3], { fullExtent: a } = this;
        a && (a.zmin = i - r, a.zmax = i + r);
      }
    }
    async _fetchService(t) {
      if (this.url == null) throw new c("sceneservice:url-not-set", "Scene service can not be loaded without valid portal item or url");
      if (this.layerId == null && /SceneServer\/*$/i.test(this.url)) {
        const e = await this._fetchFirstLayerId(t);
        e != null && (this.layerId = e);
      }
      return this._fetchServiceLayer(t);
    }
    async _fetchFirstLayerId(t) {
      const e = await y(this.url ?? "", { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: t });
      if (e.data && Array.isArray(e.data.layers) && e.data.layers.length > 0) return e.data.layers[0].id;
    }
    async _fetchServiceLayer(t) {
      const e = await y(this.parsedUrl?.path ?? "", { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: t });
      e.ssl && this.url && (this.url = this.url.replace(/^http:/i, "https:"));
      let i = !1;
      if (e.data.layerType && e.data.layerType === "Voxel" && (i = !0), i) return this._fetchVoxelServiceLayer();
      const r = e.data;
      this.read(r, this._getServiceContext()), this.validateLayer(r);
    }
    async _fetchVoxelServiceLayer(t) {
      const e = (await y(this.parsedUrl?.path + "/layer", { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: t })).data;
      this.read(e, this._getServiceContext()), this.validateLayer(e);
    }
    _getServiceContext() {
      return { origin: "service", portalItem: this.portalItem, portal: this.portalItem?.portal, url: this.parsedUrl };
    }
    async _ensureLoadBeforeSave() {
      await this.load(), "beforeSave" in this && typeof this.beforeSave == "function" && await this.beforeSave();
    }
    validateLayer(t) {
    }
    async _saveAs(t, e) {
      const i = { ...P, ...e };
      let r = J.from(t);
      if (!r) throw new c("sceneservice:portal-item-required", "_saveAs() requires a portal item to save to");
      T(r), r.id && (r = r.clone(), r.id = null);
      const a = r.portal || D.getDefault();
      await this._ensureLoadBeforeSave(), r.type = b, r.portal = a;
      const l = A(r, "portal-item", !0), d = { layers: [this.write({}, l)] };
      return await Promise.all(l.resources.pendingOperations ?? []), await this._validateAgainstJSONSchema(d, l, i), this.url && (r.url = this.url), r.title || (r.title = this.title), j(r, i, m.newItem), await a.signIn(), await a.user?.addItem({ item: r, folder: i?.folder, data: d }), await B(this.resourceReferences, l), this.portalItem = r, $(l), l.portalItem = r, r;
    }
    async _save(t) {
      const e = { ...P, ...t };
      if (!this.portalItem) throw new c("sceneservice:portal-item-not-set", "Portal item to save to has not been set on this SceneService");
      if (T(this.portalItem), this.portalItem.type !== b) throw new c("sceneservice:portal-item-wrong-type", `Portal item needs to have type "${b}"`);
      await this._ensureLoadBeforeSave();
      const i = A(this.portalItem, "portal-item", !0), r = { layers: [this.write({}, i)] };
      return await Promise.all(i.resources.pendingOperations ?? []), await this._validateAgainstJSONSchema(r, i, e), this.url && (this.portalItem.url = this.url), this.portalItem.title || (this.portalItem.title = this.title), j(this.portalItem, e, m.existingItem), await Z(this.portalItem, r, this.resourceReferences, i), $(i), this.portalItem;
    }
    async _validateAgainstJSONSchema(t, e, i) {
      const r = i?.validationOptions;
      H(e, { errorName: "sceneservice:save" }, { ignoreUnsupported: r?.ignoreUnsupported, supplementalUnsupportedErrors: ["scenemodification:unsupported"] });
      const a = r?.enabled, l = W();
      if (a && l) {
        const d = (await l()).validate(t, i.portalItemLayerType);
        if (!d.length) return;
        const f = `Layer item did not validate:
${d.join(`
`)}`;
        if (w.getLogger(this).error(`_validateAgainstJSONSchema(): ${f}`), r.failPolicy === "throw") {
          const v = d.map((u) => new c("sceneservice:schema-validation", u));
          throw new c("sceneservice-validate:error", "Failed to save layer item due to schema validation, see `details.errors`.", { validationErrors: v });
        }
      }
    }
  };
  return n([p(R)], o.prototype, "id", void 0), n([p({ type: _ })], o.prototype, "spatialReference", void 0), n([h("spatialReference", ["spatialReference", "store.indexCRS", "store.geographicCRS"])], o.prototype, "readSpatialReference", null), n([p({ type: S })], o.prototype, "fullExtent", void 0), n([h("fullExtent", ["fullExtent", "store.extent", "spatialReference", "store.indexCRS", "store.geographicCRS"])], o.prototype, "readFullExtent", null), n([p({ readOnly: !0, type: O })], o.prototype, "heightModelInfo", void 0), n([p({ type: Number, json: { name: "layerDefinition.minScale", write: !0, origins: { service: { read: { source: "minScale" }, write: !1 } } } })], o.prototype, "minScale", void 0), n([p({ type: Number, json: { name: "layerDefinition.maxScale", write: !0, origins: { service: { read: { source: "maxScale" }, write: !1 } } } })], o.prototype, "maxScale", void 0), n([p({ readOnly: !0 })], o.prototype, "version", void 0), n([h("version", ["store.version"])], o.prototype, "readVersion", null), n([p({ type: String, json: { read: { source: "copyrightText" } } })], o.prototype, "copyright", void 0), n([p({ type: String, json: { read: !1 } })], o.prototype, "sublayerTitleMode", void 0), n([p({ type: String })], o.prototype, "title", void 0), n([h("portal-item", "title")], o.prototype, "readTitlePortalItem", null), n([h("service", "title", ["name"])], o.prototype, "readTitleService", null), n([p({ type: Number, json: { origins: { service: { read: { source: "id" } }, "portal-item": { write: { target: "id", isRequired: !0, ignoreOrigin: !0 }, read: !1 } } } })], o.prototype, "layerId", void 0), n([p(L)], o.prototype, "url", null), n([U("url")], o.prototype, "writeUrl", null), n([p()], o.prototype, "parsedUrl", null), n([p({ readOnly: !0 })], o.prototype, "store", void 0), n([p({ type: String, readOnly: !0, json: { read: { source: "store.rootNode" } } })], o.prototype, "rootNode", void 0), o = n([K("esri.layers.mixins.SceneService")], o), o;
}, x = -1e38;
function I(s) {
  if (s.spatialReference != null) return _.fromJSON(s.spatialReference);
  const o = s.store, t = o.indexCRS || o.geographicCRS, e = t && parseInt(t.substring(t.lastIndexOf("/") + 1, t.length), 10);
  return e != null ? new _(e) : null;
}
function j(s, o, t) {
  s.typeKeywords || (s.typeKeywords = []);
  const e = o.getTypeKeywords();
  for (const i of e) s.typeKeywords.push(i);
  s.typeKeywords && (s.typeKeywords = s.typeKeywords.filter((i, r, a) => a.indexOf(i) === r), t === m.newItem && (s.typeKeywords = s.typeKeywords.filter((i) => i !== "Hosted Service")));
}
var m;
(function(s) {
  s[s.existingItem = 0] = "existingItem", s[s.newItem = 1] = "newItem";
})(m || (m = {}));
const b = "Scene Service", P = { getTypeKeywords: () => [], portalItemLayerType: "unknown", validationOptions: { enabled: !0, ignoreUnsupported: !1, failPolicy: "throw" } };
var g;
(function(s) {
  s[s.SAVE = 0] = "SAVE", s[s.SAVE_AS = 1] = "SAVE_AS";
})(g || (g = {}));
export {
  g as C,
  oe as L,
  Q as r
};
//# sourceMappingURL=SceneService-DqMgcBnh.js.map