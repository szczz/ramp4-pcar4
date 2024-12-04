import { a9 as o, dd as h } from "./main-lm2DHsZh.js";
import { h as a } from "./PooledRBush-BFEVh9JL.js";
const _ = 5e4, t = { minX: 0, minY: 0, maxX: 0, maxY: 0 };
function u(i) {
  t.minX = i[0], t.minY = i[1], t.maxX = i[2], t.maxY = i[3];
}
function l(i, s, d) {
  u(s), i.search(t, d);
}
class B {
  constructor() {
    this._indexInvalid = !1, this._boundsToLoad = [], this._boundsById = /* @__PURE__ */ new Map(), this._idByBounds = /* @__PURE__ */ new Map(), this._index = new a(9, o("esri-csp-restrictions") ? (s) => ({ minX: s[0], minY: s[1], maxX: s[2], maxY: s[3] }) : ["[0]", "[1]", "[2]", "[3]"]), this._loadIndex = () => {
      if (this._indexInvalid) {
        const s = new Array(this._idByBounds.size);
        let d = 0;
        this._idByBounds.forEach((n, e) => {
          s[d++] = e;
        }), this._indexInvalid = !1, this._index.clear(), this._index.load(s);
      } else this._boundsToLoad.length && (this._index.load(Array.from(new Set(this._boundsToLoad.filter((s) => this._idByBounds.has(s))))), this._boundsToLoad.length = 0);
    };
  }
  get fullBounds() {
    if (!this._boundsById.size) return null;
    const s = h();
    for (const d of this._boundsById.values()) d && (s[0] = Math.min(d[0], s[0]), s[1] = Math.min(d[1], s[1]), s[2] = Math.max(d[2], s[2]), s[3] = Math.max(d[3], s[3]));
    return s;
  }
  get valid() {
    return !this._indexInvalid;
  }
  clear() {
    this._indexInvalid = !1, this._boundsToLoad.length = 0, this._boundsById.clear(), this._idByBounds.clear(), this._index.clear();
  }
  delete(s) {
    const d = this._boundsById.get(s);
    this._boundsById.delete(s), d && (this._idByBounds.delete(d), this._indexInvalid || this._index.remove(d));
  }
  forEachInBounds(s, d) {
    this._loadIndex(), l(this._index, s, (n) => d(this._idByBounds.get(n)));
  }
  get(s) {
    return this._boundsById.get(s);
  }
  has(s) {
    return this._boundsById.has(s);
  }
  invalidateIndex() {
    this._indexInvalid || (this._indexInvalid = !0, this._boundsToLoad.length = 0);
  }
  set(s, d) {
    if (!this._indexInvalid) {
      const n = this._boundsById.get(s);
      n && (this._index.remove(n), this._idByBounds.delete(n));
    }
    this._boundsById.set(s, d), d && (this._idByBounds.set(d, s), this._indexInvalid || (this._boundsToLoad.push(d), this._boundsToLoad.length > _ && this._loadIndex()));
  }
}
export {
  B as o
};
//# sourceMappingURL=BoundsStore-Ctj4ZYd-.js.map
