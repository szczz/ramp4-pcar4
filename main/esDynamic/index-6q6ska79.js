import { a as i } from "./fabric-Yk5c5EFe.js";
import { bY as a } from "./main-lm2DHsZh.js";
class l extends a {
  get config() {
    return this.$iApi.fixture.get("export").config?.mapElements;
  }
  make(r) {
    const t = this.$iApi.geo.map.caption.scaleHelper(), n = [];
    for (let e = 0; e < 2; e++) {
      const o = new i.fabric.Text(
        this.$iApi.$i18n.t("export.scaleBar.approx", [
          `${this.$iApi.$i18n.n(t[e].distance, "number")}${t[e].units}`
        ]),
        {
          fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
          fill: "#000",
          fontSize: 16,
          top: e * 50,
          left: 0,
          originX: "left",
          originY: "top"
        }
      ), s = new i.fabric.Line([0, e === 0 ? 30 : 40, t[e].pixels, e === 0 ? 30 : 40], {
        stroke: "black",
        strokeWidth: 3
      });
      n.push(new i.fabric.Group([s, o]));
    }
    return Promise.resolve(new i.fabric.Group(n, r));
  }
}
export {
  l as default
};
//# sourceMappingURL=index-6q6ska79.js.map