class h {
  constructor(t = []) {
    this._elements = t;
  }
  length() {
    return this._elements.length;
  }
  get(t) {
    return this._elements[t];
  }
  toArray() {
    return this.slice();
  }
  slice(t = 0, r = this.length()) {
    const s = [];
    for (let e = t; e < r; e++) s.push(this.get(e));
    return s;
  }
}
export {
  h as t
};
//# sourceMappingURL=ImmutableArray-CiJxhY8_.js.map
