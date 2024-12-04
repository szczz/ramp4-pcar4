import { dE as a, aG as e, dF as d, dG as c, aC as g, dH as p, dI as G, aN as b, dJ as h } from "./main-lm2DHsZh.js";
import { s as w } from "./sphere-Ds8CiJPS.js";
import { c as x } from "./plane-C3S-pcF5.js";
function s(r) {
  return r ? { origin: a(r.origin), vector: a(r.vector) } : { origin: e(), vector: e() };
}
function H(r, n, o = s()) {
  return d(o.origin, r), c(o.vector, n, r), o;
}
function I(r, n, o) {
  return A(r, n, 0, 1, o);
}
function A(r, n, o, u, i) {
  const { vector: t, origin: v } = r, f = c(x.get(), n, v), m = g(t, f) / p(t);
  return G(i, t, b(m, o, u)), h(i, i, r.origin);
}
new w(() => s());
export {
  I as M,
  H as h,
  s as v
};
//# sourceMappingURL=lineSegment-CER5kYeK.js.map