import { a3 as p, a4 as u, D as l, a5 as s } from "./main-lm2DHsZh.js";
import { a as f, i as d } from "./MeshLocalVertexSpace-Dj055wa7.js";
function a() {
  return l.getLogger("esri.geometry.Mesh");
}
function c(e) {
  return e.origin != null;
}
function w(e) {
  return c(e.vertexSpace);
}
function y(e, n) {
  if (!c(e)) return null;
  const [r, i, o] = e.origin;
  return new p({ x: r, y: i, z: o, spatialReference: n });
}
function S(e, n) {
  const { x: r, y: i, z: o, spatialReference: g } = e, t = [r, i, o ?? 0];
  return n?.geographic !== void 0 && (u(a(), "option: geographic", { replacement: "Use the `vertexSpace` option instead.", version: "4.29", warnOnce: !0 }), n.vertexSpace && a().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")), (n?.vertexSpace ?? x(n?.geographic) ?? v(g)) === "local" ? new f({ origin: t }) : new d({ origin: t });
}
function v(e) {
  return e.isGeographic || e.isWebMercator ? "local" : "georeferenced";
}
function x(e) {
  return e == null ? void 0 : e ? "local" : "georeferenced";
}
function $(e, n) {
  return e.type === n.type && (e.origin === n.origin || e.origin != null && n.origin != null && s(e.origin, n.origin));
}
export {
  c as a,
  w as g,
  $ as m,
  S as s,
  y as u
};
//# sourceMappingURL=meshVertexSpaceUtils-ByPU76Jh.js.map