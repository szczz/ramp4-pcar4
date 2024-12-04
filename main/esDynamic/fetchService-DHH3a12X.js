import { $ as l } from "./main-lm2DHsZh.js";
async function s(a, t) {
  const { data: e } = await l(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const h = { BingMapsLayer: async () => (await import("./BingMapsLayer-mAOG1VtN.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-RBzgVvQ2.js")).default, CSVLayer: async () => (await import("./CSVLayer-MHrBiyPA.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-B2Vxiik-.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-DjgIUQWZ.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-TqJ1pVYX.js")).default, FeatureLayer: async () => (await import("./main-lm2DHsZh.js").then((a) => a.rb)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-CAaBDJHp.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-iA_hDp0K.js")).default, GroupLayer: async () => (await import("./GroupLayer-Chlw2zrY.js")).default, ImageryLayer: async () => (await import("./main-lm2DHsZh.js").then((a) => a.rc)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-Lj-5vvz1.js")).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-60H_G8vR.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-DBalL53o.js")).default, KMLLayer: async () => (await import("./KMLLayer-S0oZDi6G.js")).default, KnowledgeGraphLayer: async () => (await import("./KnowledgeGraphLayer-B5M9-qid.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-D-om8ufY.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-DS1yhOPX.js")).default, MapImageLayer: async () => (await import("./main-lm2DHsZh.js").then((a) => a.rd)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-DL9Z8Lnh.js")).default, MediaLayer: async () => (await import("./MediaLayer-51mHKBYd.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-CN2hAJG4.js")).default, OpenStreetMapLayer: async () => (await import("./main-lm2DHsZh.js").then((a) => a.rf)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-YbJpYa3D.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-B743T93g.js")).default, RouteLayer: async () => (await import("./RouteLayer-CGuumm5r.js")).default, SceneLayer: async () => (await import("./SceneLayer-Aj6_Txnp.js")).default, StreamLayer: async () => (await import("./StreamLayer-DVuGOQRL.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-DOGbg85R.js")).default, TileLayer: async () => (await import("./main-lm2DHsZh.js").then((a) => a.rg)).default, UnknownLayer: async () => (await import("./UnknownLayer-HvBAoKP9.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-B9i_HFda.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-BaUwKNvA.js")).default, VideoLayer: async () => (await import("./VideoLayer-DLSjsRUk.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-DxS8u8WN.js")).default, WFSLayer: async () => (await import("./WFSLayer-BNngALQU.js")).default, WMSLayer: async () => (await import("./main-lm2DHsZh.js").then((a) => a.rh)).default, WMTSLayer: async () => (await import("./WMTSLayer-DDYVgfU_.js")).default, WebTileLayer: async () => (await import("./main-lm2DHsZh.js").then((a) => a.re)).default }, f = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
async function g(a, t) {
  const { loadContext: e, ...r } = t || {}, i = e ? await e.fetchServiceMetadata(a, r) : await s(a, r);
  u(i), c(i);
  const y = { serviceJSON: i };
  if ((i.currentVersion ?? 0) < 10.5) return y;
  const o = `${a}/layers`, n = e ? await e.fetchServiceMetadata(o, r) : await s(o, r);
  return u(n), c(n), y.layersJSON = { layers: n.layers, tables: n.tables }, y;
}
function p(a) {
  const { type: t } = a;
  return !!t && f.has(t);
}
function d(a) {
  return a.type === "Table";
}
function c(a) {
  a.layers = a.layers?.filter(p), a.tables = a.tables?.filter(d);
}
function L(a) {
  a.type ||= "Feature Layer";
}
function m(a) {
  a.type ||= "Table";
}
function u(a) {
  a.layers?.forEach(L), a.tables?.forEach(m);
}
function S(a) {
  switch (a) {
    case "Feature Layer":
    case "Table":
      return "FeatureLayer";
    case "Oriented Imagery Layer":
      return "OrientedImageryLayer";
    case "Catalog Layer":
      return "CatalogLayer";
  }
  return "FeatureLayer";
}
export {
  h as a,
  s as b,
  S as i,
  g as t
};
//# sourceMappingURL=fetchService-DHH3a12X.js.map
