import { a as r } from "./fabric-Yk5c5EFe.js";
import { bY as a, bZ as s } from "./main-lm2DHsZh.js";
class x extends a {
  get config() {
    return this.$iApi.fixture.get("export").config?.timestamp;
  }
  make(t) {
    const e = this.config, i = {
      text: (/* @__PURE__ */ new Date()).toLocaleString("en-CA"),
      fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
      fill: "#000",
      fontSize: 20,
      top: 0,
      left: 0,
      originX: "left"
    };
    e?.value !== void 0 && (i.text = e.value);
    const o = s(i, t || {}), n = new r.fabric.Textbox(o.text, o);
    return Promise.resolve(n);
  }
}
export {
  x as default
};
//# sourceMappingURL=index-Dt95pYna.js.map
