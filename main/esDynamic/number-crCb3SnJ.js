import { b3 as E, b4 as S } from "./main-lm2DHsZh.js";
const x = { ar: [".", ","], bg: [",", " "], bs: [",", "."], ca: [",", "."], cs: [",", " "], da: [",", "."], de: [",", "."], "de-ch": [".", "’"], el: [",", "."], en: [".", ","], "en-au": [".", ","], es: [",", "."], "es-mx": [".", ","], et: [",", " "], fi: [",", " "], fr: [",", " "], "fr-ch": [",", " "], he: [".", ","], hi: [".", ",", "#,##,##0.###"], hr: [",", "."], hu: [",", " "], id: [",", "."], it: [",", "."], "it-ch": [".", "’"], ja: [".", ","], ko: [".", ","], lt: [",", " "], lv: [",", " "], mk: [",", "."], nb: [",", " "], nl: [",", "."], pl: [",", " "], pt: [",", "."], "pt-pt": [",", " "], ro: [",", "."], ru: [",", " "], sk: [",", " "], sl: [",", "."], sr: [",", "."], sv: [",", " "], th: [".", ","], tr: [",", "."], uk: [",", " "], vi: [",", "."], zh: [".", ","] };
function w(e = E()) {
  let t = (e = e.toLowerCase()) in x;
  if (!t) {
    const l = e.split("-");
    l.length > 1 && l[0] in x && (e = l[0], t = !0), t || (e = "en");
  }
  const [r, n, s = "#,##0.###"] = x[e];
  return { decimal: r, group: n, pattern: s };
}
function A(e, t) {
  const r = w((t = { ...t }).locale);
  t.customs = r;
  const n = t.pattern || r.pattern;
  return isNaN(e) || Math.abs(e) === 1 / 0 ? null : v(e, n, t);
}
const N = /[#0,]*[#0](?:\.0*#*)?/;
function v(e, t, r) {
  const n = (r = r || {}).customs.group, s = r.customs.decimal, l = t.split(";"), o = l[0];
  if ((t = l[e < 0 ? 1 : 0] || "-" + o).includes("%")) e *= 100;
  else if (t.includes("‰")) e *= 1e3;
  else {
    if (t.includes("¤")) throw new Error("currency notation not supported");
    if (t.includes("E")) throw new Error("exponential notation not supported");
  }
  const d = N, u = o.match(d);
  if (!u) throw new Error("unable to find a number expression in pattern: " + t);
  return r.fractional === !1 && (r.places = 0), t.replace(d, z(e, u[0], { decimal: s, group: n, places: r.places, round: r.round }));
}
function z(e, t, r) {
  (r = r || {}).places === !0 && (r.places = 0), r.places === 1 / 0 && (r.places = 6);
  const n = t.split("."), s = typeof r.places == "string" && r.places.indexOf(",");
  let l = r.places;
  s ? l = r.places.substring(s + 1) : +l >= 0 || (l = (n[1] || []).length), r.round < 0 || (e = Number(e.toFixed(Number(l))));
  const o = String(Math.abs(e)).split("."), d = o[1] || "";
  if (n[1] || r.places) {
    s && (r.places = r.places.substring(0, s));
    const c = r.places !== void 0 ? r.places : n[1] && n[1].lastIndexOf("0") + 1;
    +c > d.length && (o[1] = d.padEnd(Number(c), "0")), +l < d.length && (o[1] = d.substr(0, Number(l)));
  } else o[1] && o.pop();
  const u = n[0].replace(",", "");
  let g = u.indexOf("0");
  g !== -1 && (g = u.length - g, g > o[0].length && (o[0] = o[0].padStart(g, "0")), u.includes("#") || (o[0] = o[0].substr(o[0].length - g)));
  let p, i, a = n[0].lastIndexOf(",");
  if (a !== -1) {
    p = n[0].length - a - 1;
    const c = n[0].substr(0, a);
    a = c.lastIndexOf(","), a !== -1 && (i = c.length - a - 1);
  }
  const f = [];
  for (let c = o[0]; c; ) {
    const m = c.length - p;
    f.push(m > 0 ? c.substr(m) : c), c = m > 0 ? c.slice(0, m) : "", i && (p = i, i = void 0);
  }
  return o[0] = f.reverse().join(r.group || ","), o.join(r.decimal || ".");
}
function y(e) {
  const t = w((e = e || {}).locale), r = e.pattern || t.pattern, n = t.group, s = t.decimal;
  let l = 1;
  if (r.includes("%")) l /= 100;
  else if (r.includes("‰")) l /= 1e3;
  else if (r.includes("¤")) throw new Error("currency notation not supported");
  const o = r.split(";");
  return o.length === 1 && o.push("-" + o[0]), { regexp: h(o, (u) => (u = "(?:" + S(u, ".") + ")").replace(N, (g) => {
    const p = { signed: !1, separator: e.strict ? n : [n, ""], fractional: e.fractional, decimal: s, exponent: !1 }, i = g.split(".");
    let a = e.places;
    i.length === 1 && l !== 1 && (i[1] = "###"), i.length === 1 || a === 0 ? p.fractional = !1 : (a === void 0 && (a = e.pattern ? i[1].lastIndexOf("0") + 1 : 1 / 0), a && e.fractional == null && (p.fractional = !0), !e.places && +a < i[1].length && (a += "," + i[1].length), p.places = a);
    const f = i[0].split(",");
    return f.length > 1 && (p.groupSize = f.pop().length, f.length > 1 && (p.groupSize2 = f.pop().length)), "(" + O(p) + ")";
  }), !0).replaceAll(/[\xa0 ]/g, "[\\s\\xa0]"), group: n, decimal: s, factor: l };
}
function I(e, t) {
  const r = y(t), n = new RegExp("^" + r.regexp + "$").exec(e);
  if (!n) return NaN;
  let s = n[1];
  if (!n[1]) {
    if (!n[2]) return NaN;
    s = n[2], r.factor *= -1;
  }
  return s = s.replaceAll(new RegExp("[" + r.group + "\\s\\xa0]", "g"), "").replace(r.decimal, "."), Number(s) * r.factor;
}
function O(e) {
  "places" in (e = e || {}) || (e.places = 1 / 0), typeof e.decimal != "string" && (e.decimal = "."), "fractional" in e && !String(e.places).startsWith("0") || (e.fractional = [!0, !1]), "exponent" in e || (e.exponent = [!0, !1]), "eSigned" in e || (e.eSigned = [!0, !1]);
  const t = b(e), r = h(e.fractional, (s) => {
    let l = "";
    return s && e.places !== 0 && (l = "\\" + e.decimal, e.places === 1 / 0 ? l = "(?:" + l + "\\d+)?" : l += "\\d{" + e.places + "}"), l;
  }, !0);
  let n = t + r;
  return r && (n = "(?:(?:" + n + ")|(?:" + r + "))"), n + h(e.exponent, (s) => s ? "([eE]" + b({ signed: e.eSigned }) + ")" : "");
}
function b(e) {
  return "signed" in (e = e || {}) || (e.signed = [!0, !1]), "separator" in e ? "groupSize" in e || (e.groupSize = 3) : e.separator = "", h(e.signed, (t) => t ? "[-+]" : "", !0) + h(e.separator, (t) => {
    if (!t) return "(?:\\d+)";
    (t = S(t)) === " " ? t = "\\s" : t === " " && (t = "\\s\\xa0");
    const r = e.groupSize, n = e.groupSize2;
    if (n) {
      const s = "(?:0|[1-9]\\d{0," + (n - 1) + "}(?:[" + t + "]\\d{" + n + "})*[" + t + "]\\d{" + r + "})";
      return r - n > 0 ? "(?:" + s + "|(?:0|[1-9]\\d{0," + (r - 1) + "}))" : s;
    }
    return "(?:0|[1-9]\\d{0," + (r - 1) + "}(?:[" + t + "]\\d{" + r + "})*)";
  }, !0);
}
const h = (e, t, r) => {
  if (!Array.isArray(e)) return t(e);
  const n = [];
  for (let s = 0; s < e.length; s++) n.push(t(e[s]));
  return j(n.join("|"), !!r);
}, j = (e, t) => "(" + (t ? "?:" : "") + e + ")";
export {
  y as c,
  I as p,
  A as s
};
//# sourceMappingURL=number-crCb3SnJ.js.map
