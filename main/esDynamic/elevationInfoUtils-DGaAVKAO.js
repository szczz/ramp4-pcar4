import "./main-lm2DHsZh.js";
function t(n) {
  return n ? u : f;
}
function r(n, o) {
  return o?.mode ? o.mode : t(n).mode;
}
function l(n, o) {
  return r(n != null && n.hasZ, o);
}
function s(n, o, e) {
  return e && e.mode !== o ? `${n} only support ${o} elevation mode` : null;
}
function d(n, o, e) {
  return e?.mode === o ? `${n} do not support ${o} elevation mode` : null;
}
function p(n, o) {
  return o?.featureExpressionInfo != null && o.featureExpressionInfo.expression !== "0" ? `${n} do not support featureExpressionInfo` : null;
}
function m(n, o) {
  o && n.warn(".elevationInfo=", o);
}
const u = { mode: "absolute-height", offset: 0 }, f = { mode: "on-the-ground", offset: null };
export {
  m as $,
  d as P,
  s as Z,
  l as i,
  p as w
};
//# sourceMappingURL=elevationInfoUtils-DGaAVKAO.js.map
