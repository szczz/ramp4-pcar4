class i {
}
const u = i;
function e(t, ...r) {
  let o = "";
  for (let n = 0; n < r.length; n++) o += t[n] + r[n];
  return o += t[t.length - 1], o;
}
(function(t) {
  function r(n) {
    return Math.round(n).toString();
  }
  function o(n) {
    return n.toPrecision(8);
  }
  t.int = r, t.float = o;
})(e || (e = {}));
export {
  u as n,
  e as o
};
//# sourceMappingURL=interfaces-Aq8q9x0N.js.map
