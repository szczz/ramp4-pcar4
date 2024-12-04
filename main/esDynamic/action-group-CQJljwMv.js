import { c$ as p, d0 as h, cX as t } from "./main-lm2DHsZh.js";
import { c as f, d as g } from "./conditionalSlot-Bi5pMQuY.js";
import { c as b, s as v, a as x } from "./loadable-CsKbmXcU.js";
import { c as C, d as y } from "./locale-DlBi8777.js";
import { u as M, c as E, d as L, s as S } from "./t9n-BO4Ef3RJ.js";
import { d as O, a as k, S as a } from "./action-menu-CSIjX-he.js";
import { l as A } from "./dom-BHTTQ4_z.js";
import { d as P } from "./action-BJv-sdFl.js";
import { d as z } from "./icon-F11CuSC7.js";
import { d as w } from "./loader-BJcS0mbh.js";
const i = {
  menuActions: "menu-actions",
  menuTooltip: "menu-tooltip"
}, F = {
  menu: "ellipsis"
}, $ = {
  container: "container"
}, H = ':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;background-color:transparent;border-color:var(--calcite-action-group-border-color, var(--calcite-color-border-3));border-style:solid;border-width:0}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-internal-action-group-columns:1}:host([columns="2"]){--calcite-internal-action-group-columns:2}:host([columns="3"]){--calcite-internal-action-group-columns:3}:host([columns="4"]){--calcite-internal-action-group-columns:4}:host([columns="5"]){--calcite-internal-action-group-columns:5}:host([columns="6"]){--calcite-internal-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:transparent;grid-template-columns:repeat(var(--calcite-action-group-columns, var(--calcite-internal-action-group-columns, 3)), auto);gap:var(--calcite-action-group-gap, 1px);padding:var(--calcite-action-group-gap, 1px)}:host([hidden]){display:none}[hidden]{display:none}', G = H, T = /* @__PURE__ */ p(class extends h {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.setMenuOpen = (e) => {
      this.menuOpen = !!e.target.open;
    }, this.handleMenuActionsSlotChange = (e) => {
      this.hasMenuActions = A(e);
    }, this.expanded = !1, this.label = void 0, this.layout = "vertical", this.columns = void 0, this.menuOpen = !1, this.overlayPositioning = "absolute", this.scale = void 0, this.menuFlipPlacements = void 0, this.menuPlacement = void 0, this.messages = void 0, this.messageOverrides = void 0, this.effectiveLocale = "", this.defaultMessages = void 0, this.hasMenuActions = !1;
  }
  expandedHandler() {
    this.menuOpen = !1;
  }
  onMessagesChange() {
  }
  effectiveLocaleChange() {
    M(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await b(this), this.el.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    C(this), E(this), f(this);
  }
  disconnectedCallback() {
    y(this), L(this), g(this);
  }
  async componentWillLoad() {
    v(this), await S(this);
  }
  componentDidLoad() {
    x(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------
  renderMenu() {
    const { expanded: e, menuOpen: l, scale: n, layout: o, messages: s, overlayPositioning: r, hasMenuActions: d, menuFlipPlacements: u, menuPlacement: m } = this;
    return t("calcite-action-menu", { expanded: e, flipPlacements: u ?? (o === "horizontal" ? ["top", "bottom"] : ["left", "right"]), hidden: !d, label: s.more, onCalciteActionMenuOpen: this.setMenuOpen, open: l, overlayPositioning: r, placement: m ?? (o === "horizontal" ? "bottom-start" : "leading-start"), scale: n }, t("calcite-action", { icon: F.menu, scale: n, slot: a.trigger, text: s.more, textEnabled: e }), t("slot", { name: i.menuActions, onSlotchange: this.handleMenuActionsSlotChange }), t("slot", { name: i.menuTooltip, slot: a.tooltip }));
  }
  render() {
    return t("div", { key: "8143606c5745053f15140f34ff5ea375a683325f", "aria-label": this.label, class: $.container, role: "group" }, t("slot", { key: "e8c2821b9ce2e9d0293478989fc31d24f043f9c3" }), this.renderMenu());
  }
  static get delegatesFocus() {
    return !0;
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      expanded: ["expandedHandler"],
      messageOverrides: ["onMessagesChange"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return G;
  }
}, [17, "calcite-action-group", {
  expanded: [516],
  label: [1],
  layout: [513],
  columns: [514],
  menuOpen: [1540, "menu-open"],
  overlayPositioning: [513, "overlay-positioning"],
  scale: [513],
  menuFlipPlacements: [16],
  menuPlacement: [513, "menu-placement"],
  messages: [1040],
  messageOverrides: [1040],
  effectiveLocale: [32],
  defaultMessages: [32],
  hasMenuActions: [32],
  setFocus: [64]
}, void 0, {
  expanded: ["expandedHandler"],
  messageOverrides: ["onMessagesChange"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function _() {
  if (typeof customElements > "u")
    return;
  ["calcite-action-group", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover"].forEach((e) => {
    switch (e) {
      case "calcite-action-group":
        customElements.get(e) || customElements.define(e, T);
        break;
      case "calcite-action":
        customElements.get(e) || P();
        break;
      case "calcite-action-menu":
        customElements.get(e) || k();
        break;
      case "calcite-icon":
        customElements.get(e) || z();
        break;
      case "calcite-loader":
        customElements.get(e) || w();
        break;
      case "calcite-popover":
        customElements.get(e) || O();
        break;
    }
  });
}
_();
export {
  T as A,
  i as S,
  _ as d
};
//# sourceMappingURL=action-group-CQJljwMv.js.map