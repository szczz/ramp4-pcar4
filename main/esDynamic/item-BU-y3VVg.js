import { c1 as Y, c2 as ae, c4 as V, c5 as ce, c9 as q, cc as l, ci as a, ch as w, fV as o, cf as t, iJ as x, iK as ie, fW as C, iZ as Le, iY as u, lV as ke, c3 as ge, fT as me, c7 as G, lW as b, lc as M, c8 as ye, cg as xe, cb as de, cd as $, ce as p, g1 as K, ix as oe, cj as le, ck as ne, j4 as we, f$ as v, lX as pe, iv as Ce, f_ as Me, lY as f, lZ as Z, l_ as re, ca as U, iX as Se, l$ as O, kW as Te, m0 as ze, m1 as ee } from "./main-lm2DHsZh.js";
import { m as Ve } from "./marked.esm-DgqJBp_S.js";
const Ee = ["type", "aria-label", "checked", "disabled", "content"], te = /* @__PURE__ */ Y({
  __name: "checkbox",
  props: {
    value: {
      type: Object,
      required: !0
    },
    legendItem: {
      type: Object,
      required: !0
    },
    checked: { type: Boolean },
    label: { type: String },
    isRadio: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const { t: y } = ae(), i = e, m = V(i.legendItem.visibility);
    ce(() => {
      i.legendItem.checkVisibilityRules(), m.value = i.legendItem.visibility === i.checked;
    });
    const I = (s) => !s.symbologyStack.some((d) => d.visibility), A = () => {
      if (i.value instanceof Le)
        i.legendItem.toggleVisibility();
      else if (i.legendItem instanceof u) {
        if (I(i.legendItem) ? (i.legendItem.setSymbologyVisibility(void 0, !1), i.legendItem.setSymbologyVisibility(i.value.uid, !0), i.legendItem.toggleVisibility(!0)) : i.legendItem.setSymbologyVisibility(i.value.uid, !i.value.lastVisbility), I(i.legendItem) && i.legendItem.toggleVisibility(!1), i.legendItem.layer?.supportsFeatures) {
          const s = i.legendItem.symbologyStack.filter((T) => T.lastVisbility === !0).map((T) => T.definitionClause || "");
          let d = "";
          s.length === 0 ? d = "1=2" : s.length < i.legendItem.symbologyStack.length && (d = s.join(" OR ")), i.legendItem.layer?.setSqlFilter(ke.SYMBOL, d);
        }
        m.value = !0;
      }
    };
    return (s, d) => {
      const T = q("tippy");
      return l(), a("div", {
        class: "relative",
        onMouseover: d[3] || (d[3] = x(() => {
        }, ["stop"]))
      }, [
        w(o("input", {
          type: e.isRadio ? "radio" : "checkbox",
          "aria-label": t(y)(e.checked ? `legend.visibility.hide${e.label}` : `legend.visibility.show${e.label}`),
          onClick: d[0] || (d[0] = x((j) => A(), ["stop"])),
          checked: e.checked && m.value,
          onKeypress: d[1] || (d[1] = ie(x(() => {
          }, ["prevent"]), ["enter"])),
          onKeyup: d[2] || (d[2] = ie(x((j) => A(), ["stop"]), ["enter"])),
          class: C([[
            e.disabled ? "text-gray-400 border-gray-300" : "text-black cursor-pointer border-gray-500 hover:border-black"
          ], "mx-5 h-15 w-15"]),
          tabindex: "-1",
          disabled: e.disabled,
          content: t(y)(e.checked ? `legend.visibility.hide${e.label}` : `legend.visibility.show${e.label}`)
        }, null, 42, Ee), [
          [T, { placement: "top-end", hideOnClick: !1 }]
        ])
      ], 32);
    };
  }
}), He = ["aria-label"], Be = ["aria-label"], $e = ["aria-label"], Ae = ["aria-label"], Ze = ["aria-label"], Ue = ["aria-label"], Ge = ["content", "aria-label"], Re = /* @__PURE__ */ Y({
  __name: "legend-options",
  props: {
    legendItem: u
  },
  setup(e) {
    const { t: y } = ae(), i = ge("iApi"), m = V(), I = V(!1), A = me(), s = V(A.mobileView), d = e, T = () => {
      d.legendItem.layerControlAvailable(b.Symbology) && d.legendItem.toggleSymbology();
    }, j = () => {
      d.legendItem.layerControlAvailable(b.Datatable) && B("grid") && i.event.emit(K.GRID_TOGGLE, d.legendItem.layer);
    }, N = () => {
      d.legendItem.layerControlAvailable(b.Settings) && B("settings") && i.event.emit(K.SETTINGS_TOGGLE, d.legendItem.layer);
    }, X = () => {
      if (d.legendItem.layerControlAvailable(b.Metadata) && B("metadata")) {
        const z = d.legendItem?.layer?.config.metadata || d.legendItem?.layer?.parentLayer?.config?.metadata || {}, c = z?.name || d.legendItem?.layer?.name || "", L = d.legendItem?.layer?.config?.catalogueUrl || d.legendItem?.layer?.layerType === "sublayer" && d.legendItem?.layer?.parentLayer?.config?.catalogueUrl || void 0;
        if (z.url) {
          const R = z.url.split("."), E = R[R.length - 1], Q = E === "xml" || E === "md" ? E : "html";
          i.event.emit(K.METADATA_TOGGLE, {
            type: Q,
            layerName: c,
            url: z.url,
            catalogueUrl: L,
            layer: d.legendItem.layer
          });
        } else
          console.warn("Layer does not have a metadata url defined");
      }
    }, H = () => {
      d.legendItem.layerControlAvailable(b.BoundaryZoom) && d.legendItem?.layer?.zoomToLayerBoundary();
    }, F = () => {
      d.legendItem.layerControlAvailable(b.Remove) && i.geo.map.removeLayer(d.legendItem.layerUid);
    }, P = () => {
      D.value && (M(d.legendItem.layer).reload(), m.value.open = !1);
    }, D = G(() => d.legendItem.layerControlAvailable(b.Reload) && d.legendItem instanceof u && M(d.legendItem.layer)?.canReload), J = (z) => {
      I.value = !0, setTimeout(() => {
        I.value && (s.value || z._tippy?.show());
      }, 300);
    }, B = (z) => {
      try {
        return i.fixture.exists(z);
      } catch {
        return !1;
      }
    };
    return (z, c) => {
      const L = ye("dropdown-menu"), R = q("tippy");
      return l(), a("div", {
        onClick: c[2] || (c[2] = x(() => {
        }, ["stop"])),
        onMouseover: c[3] || (c[3] = x(() => {
        }, ["stop"])),
        class: "options display-block cursor-auto"
      }, [
        xe(L, {
          class: "flex-shrink-0",
          position: "bottom-end",
          tooltip: t(y)("legend.layer.options"),
          tooltipPlacement: "left",
          tooltipPlacementAlt: "left",
          ref_key: "dropdown",
          ref: m
        }, {
          header: de(() => c[4] || (c[4] = [
            o("div", { class: "flex p-4 justify-center items-center" }, [
              o("svg", {
                class: "inline-block fill-current w-18 h-18 mx-4",
                viewBox: "0 0 23 21"
              }, [
                o("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
              ])
            ], -1)
          ])),
          default: de(() => [
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(b).Metadata) || !B("metadata")
              }]),
              onClick: X,
              role: "button",
              "aria-label": t(y)("legend.layer.controls.metadata")
            }, [
              c[5] || (c[5] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                o("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" })
              ], -1)),
              $(" " + p(t(y)("legend.layer.controls.metadata")), 1)
            ], 10, He),
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(b).Settings) || !B("settings")
              }]),
              onClick: N,
              role: "button",
              "aria-label": t(y)("legend.layer.controls.settings")
            }, [
              c[6] || (c[6] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                o("g", null, [
                  o("path", { d: "M 3,17L 3,19L 9,19L 9,17L 3,17 Z M 3,5L 3,7L 13,7L 13,5L 3,5 Z M 13,21L 13,19L 21,19L 21,17L 13,17L 13,15L 11,15L 11,21L 13,21 Z M 7,9L 7,11L 3,11L 3,13L 7,13L 7,15L 9,15L 9,9L 7,9 Z M 21,13L 21,11L 11,11L 11,13L 21,13 Z M 15,9L 17,9L 17,7L 21,7L 21,5L 17,5L 17,3L 15,3L 15,9 Z " })
                ])
              ], -1)),
              $(" " + p(t(y)("legend.layer.controls.settings")), 1)
            ], 10, Be),
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(b).Datatable) || !B("grid")
              }]),
              onClick: j,
              role: "button",
              "aria-label": t(y)("legend.layer.controls.datatable")
            }, [
              c[7] || (c[7] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                o("path", { d: "M 4.00002,3L 20,3C 21.1046,3 22,3.89543 22,5L 22,20C 22,21.1046 21.1046,22 20,22L 4.00001,22C 2.89544,22 2.00001,21.1046 2.00001,20L 2.00002,5C 2.00002,3.89543 2.89545,3 4.00002,3 Z M 4.00002,7L 4.00001,10L 8,10L 8,7.00001L 4.00002,7 Z M 10,7.00001L 9.99999,10L 14,10L 14,7.00001L 10,7.00001 Z M 20,10L 20,7L 16,7.00001L 16,10L 20,10 Z M 4.00002,12L 4.00002,15L 8,15L 8,12L 4.00002,12 Z M 4.00001,20L 8,20L 8,17L 4.00002,17L 4.00001,20 Z M 9.99999,12L 9.99999,15L 14,15L 14,12L 9.99999,12 Z M 9.99999,20L 14,20L 14,17L 9.99999,17L 9.99999,20 Z M 20,20L 20,17L 16,17L 16,20L 20,20 Z M 20,12L 16,12L 16,15L 20,15L 20,12 Z " })
              ], -1)),
              $(" " + p(t(y)("legend.layer.controls.datatable")), 1)
            ], 10, $e),
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(b).Symbology)
              }]),
              onClick: T,
              role: "button",
              "aria-label": t(y)("legend.layer.controls.symbology")
            }, [
              c[8] || (c[8] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                o("path", { d: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" })
              ], -1)),
              $(" " + p(t(y)("legend.layer.controls.symbology")), 1)
            ], 10, Ae),
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(b).BoundaryZoom)
              }]),
              onClick: H,
              role: "button",
              "aria-label": t(y)("legend.layer.controls.boundaryzoom")
            }, [
              c[9] || (c[9] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 24 24"
              }, [
                o("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
                o("path", {
                  d: "M0 0h24v24H0V0z",
                  fill: "none"
                }),
                o("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
              ], -1)),
              $(" " + p(t(y)("legend.layer.controls.boundaryzoom")), 1)
            ], 10, Ze),
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(b).Remove)
              }]),
              onClick: F,
              role: "button",
              "aria-label": t(y)("legend.layer.controls.remove")
            }, [
              c[10] || (c[10] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                o("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" })
              ], -1)),
              $(" " + p(t(y)("legend.layer.controls.remove")), 1)
            ], 10, Ue),
            w((l(), a("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !D.value
              }]),
              content: D.value ? "" : t(y)("legend.layer.controls.reloadDisabled"),
              onMouseover: c[0] || (c[0] = x((E) => J(E.currentTarget), ["stop"])),
              onMouseout: c[1] || (c[1] = (E) => (
                //@ts-ignore
                (s.value || E.currentTarget?._tippy?.hide(), I.value = !1)
              )),
              onClick: P,
              role: "button",
              "aria-label": t(y)("legend.layer.controls.reload")
            }, [
              c[11] || (c[11] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 24 24"
              }, [
                o("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
              ], -1)),
              $(" " + p(t(y)("legend.layer.controls.reload")), 1)
            ], 42, Ge)), [
              [R, {
                placement: "top-start",
                trigger: "manual focus",
                aria: "describedby"
              }]
            ])
          ]),
          _: 1
        }, 8, ["tooltip"])
      ], 32);
    };
  }
}), je = /* @__PURE__ */ oe(Re, [["__scopeId", "data-v-9590866e"]]), Pe = { key: 0 }, De = {
  key: 0,
  class: "relative left-3"
}, Oe = ["innerHTML"], qe = ["src"], Ne = {
  key: 1,
  class: "symbologyIcon w-32 h-32"
}, Fe = ["innerHTML"], We = ["src"], Ke = {
  key: 1,
  class: "h-32 w-32 inline-flex justify-center items-center"
}, Ye = /* @__PURE__ */ Y({
  __name: "symbology-stack",
  props: {
    visible: { type: Boolean, required: !0 },
    legendItem: { type: Object, required: !0 }
  },
  setup(e) {
    const y = e, i = V([]);
    return ce(() => {
      y.legendItem.loadPromise.then(() => {
        y.legendItem.layerUid !== void 0 && Promise.all(M(y.legendItem.symbologyStack).map((m) => m.drawPromise)).then(() => {
          i.value = M(y.legendItem).symbologyStack;
        });
      });
    }), (m, I) => e.visible ? (l(), a("div", Ke, I[0] || (I[0] = [
      o("svg", {
        class: "fill-current w-16 h-16",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 352 512"
      }, [
        o("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" })
      ], -1)
    ]))) : (l(), a("div", Pe, [
      i.value.length > 1 ? (l(), a("div", De, [
        (l(!0), a(le, null, ne(i.value.slice(0, 3).reverse(), (A, s) => (l(), a("div", {
          class: C(["absolute", [s == 0 ? "symbol-0" : s == 1 ? "left-3 symbol-1" : "left-6 symbol-2"]]),
          style: we({ "z-index": 3 - s }),
          key: s
        }, [
          i.value[s].svgcode ? (l(), a("span", {
            key: 0,
            class: "symbologyIcon w-28 h-28",
            innerHTML: i.value[s].svgcode
          }, null, 8, Oe)) : i.value[s].imgUrl ? (l(), a("img", {
            key: 1,
            class: "symbologyIcon w-28 h-28",
            src: i.value[s].imgUrl
          }, null, 8, qe)) : v("", !0)
        ], 6))), 128))
      ])) : i.value.length > 0 ? (l(), a("div", Ne, [
        i.value[0].svgcode ? (l(), a("span", {
          key: 0,
          innerHTML: i.value[0].svgcode
        }, null, 8, Fe)) : i.value[0].imgUrl ? (l(), a("img", {
          key: 1,
          class: "symbologyIcon w-full h-full",
          src: i.value[0].imgUrl
        }, null, 8, We)) : v("", !0)
      ])) : v("", !0)
    ]));
  }
}), Xe = /* @__PURE__ */ oe(Ye, [["__scopeId", "data-v-34dfeccd"]]), Je = { class: "relative" }, Qe = ["content"], _e = {
  key: 0,
  class: "flex p-5 mr-[13px]"
}, et = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "black",
  width: "24px",
  height: "24px"
}, tt = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "black",
  width: "24px",
  height: "24px"
}, lt = ["disabled", "content", "aria-label"], nt = ["src"], at = { class: "h-auto break-words text-ellipsis" }, ot = {
  key: 4,
  class: "flex-1 pointer-events-none p-5"
}, st = {
  key: 5,
  class: "flex-1"
}, it = {
  key: 0,
  class: "text-lg font-bold"
}, dt = { key: 1 }, rt = { key: 2 }, ct = ["src"], gt = ["innerHTML"], mt = {
  key: 6,
  class: "relative"
}, yt = ["content", "aria-label"], ut = {
  key: 8,
  class: "relative"
}, vt = ["content", "aria-label"], bt = { class: "flex p-5" }, It = {
  key: 0,
  class: "fill-current w-18 h-18",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 352 512"
}, ft = {
  key: 1,
  class: "inline-block fill-current w-18 h-18 mr-1",
  viewBox: "0 1 23 22"
}, ht = ["content"], Lt = ["content"], kt = {
  key: 11,
  class: "relative top-1"
}, xt = ["content"], wt = {
  key: 0,
  class: "h-3 w-full absolute bottom-0"
}, pt = {
  key: 0,
  class: "symbology-stack default-focus-style"
}, Ct = { key: 0 }, Mt = {
  key: 0,
  class: "m-5"
}, St = {
  key: 0,
  class: "items-center grid-cols-1"
}, Tt = {
  key: 0,
  class: "symbologyIcon w-full p-5"
}, zt = ["src"], Vt = ["innerHTML"], Et = {
  key: 2,
  class: "flex-1 p-5 bg-black-75 text-white"
}, Ht = {
  key: 1,
  class: "flex items-center"
}, Bt = {
  key: 0,
  class: "symbologyIcon"
}, $t = ["src"], At = {
  key: 1,
  class: "symbologyIcon"
}, Zt = ["innerHTML"], Ut = { class: "flex-1 ml-15" }, Gt = { key: 1 }, Rt = { class: "flex p-5 ml-48" }, jt = {
  key: 0,
  class: "relative animate-spin spinner h-20 w-20 mr-10 pt-2"
}, Pt = { class: "flex-1 text-gray-500" }, Dt = {
  key: 1,
  class: "legend-group border-l-2 ml-4 pl-4"
}, Ot = /* @__PURE__ */ Y({
  __name: "item",
  props: {
    legendItem: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const y = pe(), i = me(), { t: m } = ae(), I = ge("iApi"), A = V(), s = e, d = Ce(), T = d.multilineItems, j = (s.legendItem instanceof u && s.legendItem.maxLines) ?? d.maxLines, N = V(i.mobileView), X = G(() => y.layerConfigs), H = V([]), F = V(!1), P = V(!1), D = G(() => s.legendItem instanceof u ? M(s.legendItem.layer)?.layerType : ""), J = G(() => s.legendItem instanceof u && M(s.legendItem.layer)?.canModifyLayer), B = G(() => {
      if (s.legendItem instanceof u) {
        const r = M(s.legendItem.layer);
        return r ? r.canReload : !0;
      } else
        return !1;
    }), z = G(() => I.animate), c = G(() => s.legendItem.children.length > 0 || // TODO: Determine why Vue reactivity isn't picking updates to the children property of the parent.
    // isGroup is being called on the parent before the children are mapped in legend.ts. After they're mapped, isGroup isn't called again.
    s.legendItem instanceof u && M(s.legendItem.layer)?.sublayers.length > 0), L = (r) => r === Z.Expand || r === Z.Visibility ? s.legendItem.controlAvailable(r) : s.legendItem.layerControlAvailable(r), R = (r) => Ve(r), E = () => {
      s.legendItem.children.length === 0 || !L(Z.Expand) || (s.legendItem.toggleExpanded(), I.updateAlert(m(`legend.alert.group${s.legendItem.expanded ? "Expanded" : "Collapsed"}`)));
    }, Q = () => {
      if (L(b.Symbology)) {
        const r = s.legendItem.toggleSymbology();
        I.updateAlert(m(`legend.alert.symbology${r ? "Expanded" : "Collapsed"}`));
      }
    }, ue = () => {
      L(b.Datatable) && W() && I.event.emit(K.GRID_TOGGLE, s.legendItem.layer);
    }, ve = (r) => {
      const n = document.createElement("span");
      n.innerHTML = r.svgcode;
      const h = n.firstElementChild;
      return h?.classList.add("max-w-full"), h?.classList.add("h-full"), h?.setAttribute("height", r.imgHeight), h?.setAttribute("width", r.imgWidth), n.outerHTML;
    }, W = () => {
      try {
        return I.fixture.exists("grid");
      } catch {
        return !1;
      }
    }, be = () => {
      s.legendItem.reload(), setTimeout(() => {
        const r = s.legendItem;
        let n = !0;
        if (r.layer)
          M(r.layer).reload(), n = !1;
        else if (r.isSublayer && r.parentLayerId) {
          const h = I.geo.layer.getLayer(r.parentLayerId);
          h && (M(h).reload(), n = !1);
        }
        if (n) {
          const h = r.isSublayer ? r.parentLayerId : r.layerId, k = X.value.find((S) => S.id === h);
          k !== void 0 && Ie(k);
        }
        s.legendItem.loadPromise.catch(() => {
        });
      }, 400);
    }, Ie = async (r) => {
      try {
        const n = I.geo.layer.getLayer(r.id);
        if (n) {
          const [h] = await ze(M(n).reload());
          if (h)
            throw new Error();
          return n;
        } else {
          const h = I.geo.layer.createLayer(r);
          return await I.geo.map.addLayer(h).catch(() => {
            throw new Error();
          }), h;
        }
      } catch {
        return;
      }
    }, fe = () => {
      const r = M(s.legendItem);
      let n = 0;
      if (r.type === f.Error) {
        s.legendItem.toggleHidden(!0);
        const h = setInterval(() => {
          const k = r.layer;
          (k && (k.layerExists || k.initiationState === ee.NEW || k.initiationState === ee.TERMINATING || k.initiationState === ee.TERMINATED) || n > 1200) && (clearInterval(h), k && I.geo.map.removeLayer(k), y.removeLayerConfig(r.layerId), I.fixture.get("legend")?.removeLayerItem(r.layerId)), n++;
        }, 250);
      } else {
        s.legendItem.error();
        const h = setInterval(() => {
          const k = r.parentLayerId || r.layerId, S = I.geo.layer.getLayer(k);
          S && (clearInterval(h), S.cancelLoad(), (I.fixture.get("legend")?.getLayerBoundItems(S) || []).forEach((g) => g.error())), n > 1200 && clearInterval(h), n++;
        }, 50);
      }
    }, se = () => {
      s.legendItem.loadPromise.then(() => {
        if (H.value = [], !s.legendItem.layer) {
          console.warn("Attempted to mount legend item component with undefined layer");
          return;
        }
        Promise.all(
          M(s.legendItem.symbologyStack.map((r) => r.drawPromise))
        ).then(() => {
          H.value = s.legendItem.symbologyStack, F.value = !0;
        });
      }).catch(() => {
      });
    }, he = (r) => {
      P.value = !0, setTimeout(() => {
        P.value && (N.value || r._tippy?.show());
      }, 300);
    };
    return s.legendItem instanceof u && (se(), Me(
      () => s.legendItem.symbologyStack,
      () => {
        se();
      }
    )), (r, n) => {
      const h = ye("item", !0), k = q("tippy"), S = q("truncate"), _ = q("focus-item");
      return e.legendItem.hidden ? v("", !0) : (l(), a("div", {
        key: `${e.legendItem.uid}-${e.legendItem.visibility}`,
        ref_key: "el",
        ref: A
      }, [
        o("div", Je, [
          w((l(), a("div", {
            class: C(["flex items-center hover:bg-gray-200 default-focus-style !p-5", [
              e.legendItem.type === t(f).Item ? "loaded-item" : e.legendItem.type === t(f).Error ? "non-loaded-item bg-red-200" : "non-loaded-item",
              c.value && L(t(Z).Expand) || !c.value && e.legendItem instanceof t(u) && L(t(b).Datatable) && W() && e.legendItem.type === t(f).Item ? "cursor-pointer" : "cursor-default",
              t(T) ? "multilined" : "singlelined"
            ]]),
            onMouseover: n[9] || (n[9] = x((g) => he(g.currentTarget), ["stop"])),
            onMouseout: n[10] || (n[10] = (g) => (
              //@ts-ignore
              (N.value || g.currentTarget?._tippy?.hide(), P.value = !1)
            )),
            onClick: n[11] || (n[11] = () => {
              !c.value && e.legendItem instanceof t(u) && L(t(b).Datatable) && W() && e.legendItem.type === t(f).Item ? ue() : c.value && E();
            }),
            content: c.value && L(t(Z).Expand) ? t(m)(e.legendItem.expanded ? "legend.group.collapse" : "legend.group.expand") : e.legendItem instanceof t(u) && e.legendItem.type === t(f).Item && L(t(b).Datatable) && W() ? t(m)("legend.layer.data") : "",
            "truncate-trigger": ""
          }, [
            e.legendItem.type !== t(f).Item ? (l(), a("div", _e, [
              e.legendItem.type === t(f).Placeholder ? (l(), a("svg", et, n[12] || (n[12] = [
                re('<path d="M0 0h24v24H0V0z" fill="none" data-v-b1261e08></path><path d="M0 0h24v24H0V0z" fill="none" data-v-b1261e08></path><circle cx="15.5" cy="9.5" r="1.5" data-v-b1261e08></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-b1261e08></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-b1261e08></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-b1261e08></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z" data-v-b1261e08></path>', 7)
              ]))) : (l(), a("svg", tt, n[13] || (n[13] = [
                re('<path d="M0 0h24v24H0V0z" fill="none" data-v-b1261e08></path><path d="M0 0h24v24H0V0z" fill="none" data-v-b1261e08></path><circle cx="15.5" cy="9.5" r="1.5" data-v-b1261e08></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-b1261e08></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-b1261e08></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-b1261e08></circle><path d="M 20,12C 20,7.6 16.4,4 12,4C 7.6,4 4,7.6 4,12C 4,16.4 7.6,20 12,20C 16.4,20 20,16.4 20,12 Z M 22,12C 22,17.5 17.5,22 12,22C 6.5,22 2,17.5 2,12C 2,6.5 6.5,2.00001 12,2.00001C 17.5,2.00001 22,6.5 22,12 Z M 15.5,8C 16.3,8 17,8.7 17,9.5C 17,10.3 16.3,11 15.5,11C 14.7,11 14,10.3 14,9.5C 14,8.7 14.7,8 15.5,8 Z M 10,9.5C 10,10.3 9.3,11 8.5,11C 7.7,11 7,10.3 7,9.5C 7,8.7 7.7,8 8.5,8C 9.3,8 10,8.7 10,9.5 Z M 12,14C 13.7524,14 15.2943,14.7212 16.1871,15.8129L 14.7697,17.2302C 14.3175,16.5078 13.2477,16 12,16C 10.7523,16 9.68254,16.5078 9.23024,17.2302L 7.81291,15.8129C 8.7057,14.7212 10.2476,14 12,14 Z" data-v-b1261e08></path>', 7)
              ])))
            ])) : v("", !0),
            e.legendItem.type === t(f).Item && e.legendItem instanceof t(u) && e.legendItem.layer.legend.length > 0 ? (l(), a("div", {
              key: 1,
              class: "relative w-32 h-32 mr-15",
              onMouseover: n[0] || (n[0] = x(() => {
              }, ["stop"]))
            }, [
              w((l(), a("button", {
                type: "button",
                onClick: x(Q, ["stop"]),
                class: C([L(t(b).Symbology) ? "cursor-pointer" : "cursor-default"]),
                disabled: !L(t(b).Symbology),
                content: e.legendItem instanceof t(u) && e.legendItem.symbologyExpanded ? t(m)("legend.symbology.hide") : t(m)("legend.symbology.expand"),
                "aria-label": e.legendItem instanceof t(u) && e.legendItem.symbologyExpanded ? t(m)("legend.symbology.hide") : t(m)("legend.symbology.expand")
              }, [
                e.legendItem.coverIcon ? (l(), a("img", {
                  key: 1,
                  class: C([{
                    "pointer-events-none": !L(t(b).Symbology)
                  }, "w-32 h-32 hover:scale-105"]),
                  src: e.legendItem.coverIcon,
                  alt: "Cover icon not found :("
                }, null, 10, nt)) : (l(), U(Xe, {
                  key: 0,
                  class: C([{
                    "pointer-events-none": !L(t(b).Symbology)
                  }, "w-32 h-32"]),
                  visible: e.legendItem instanceof t(u) && e.legendItem.symbologyExpanded,
                  legendItem: e.legendItem
                }, null, 8, ["class", "visible", "legendItem"]))
              ], 10, lt)), [
                [k, {
                  placement: "top-start"
                }]
              ])
            ], 32)) : v("", !0),
            c.value && L(t(Z).Expand) ? (l(), a("div", {
              key: 2,
              class: C(["expand-toggle p-8 pointer-events-none", { "rotate-180": e.legendItem.expanded }])
            }, n[14] || (n[14] = [
              o("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "18",
                viewBox: "0 0 24 24",
                width: "18"
              }, [
                o("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })
              ], -1)
            ]), 2)) : v("", !0),
            e.legendItem instanceof t(u) && t(T) ? w((l(), a("div", {
              key: 3,
              class: C(["flex-1 pointer-events-none m-5", `line-clamp-${t(j)}`])
            }, [
              o("span", at, p(e.legendItem.name ?? (e.legendItem?.layer?.name ? e.legendItem.layer?.name : e.legendItem.layerId)), 1)
            ], 2)), [
              [S, {
                externalTrigger: !0,
                noTruncateClass: !0
              }]
            ]) : e.legendItem instanceof t(u) ? w((l(), a("div", ot, [
              o("span", null, p(e.legendItem.name ?? (!e.legendItem.layer || e.legendItem?.layer?.name === "" ? e.legendItem.layerId : e.legendItem.layer?.name)), 1)
            ])), [
              [S, { externalTrigger: !0 }]
            ]) : e.legendItem instanceof t(Se) ? (l(), a("div", st, [
              e.legendItem.infoType === t(O).Title && e.legendItem.content ? (l(), a("h3", it, p(e.legendItem.content), 1)) : e.legendItem.infoType === t(O).Title ? (l(), a("h3", dt, p(e.legendItem.name), 1)) : e.legendItem.infoType === t(O).Text ? (l(), a("p", rt, p(e.legendItem.content), 1)) : e.legendItem.infoType === t(O).Image ? (l(), a("img", {
                key: 3,
                src: e.legendItem.content,
                alt: "InfoType image not found :("
              }, null, 8, ct)) : e.legendItem.infoType === t(O).Markdown ? (l(), a("div", {
                key: 4,
                class: "ramp-markdown",
                innerHTML: R(e.legendItem.content)
              }, null, 8, gt)) : (l(), U(Te(`${e.legendItem.uid}-info-section`), { key: 5 }))
            ])) : v("", !0),
            e.legendItem.type === t(f).Error && B.value ? (l(), a("div", mt, [
              w((l(), a("button", {
                type: "button",
                class: "text-gray-500 hover:text-black",
                content: t(m)("legend.layer.controls.reload"),
                onMouseover: n[1] || (n[1] = x(() => {
                }, ["stop"])),
                onClick: x(be, ["stop"]),
                "aria-label": t(m)("legend.layer.controls.reload")
              }, n[15] || (n[15] = [
                o("div", { class: "flex p-8" }, [
                  o("svg", {
                    class: "inline-block fill-current w-18 h-18",
                    viewBox: "0 0 24 24"
                  }, [
                    o("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
                  ])
                ], -1)
              ]), 40, yt)), [
                [k, {
                  placement: "top-start"
                }]
              ])
            ])) : v("", !0),
            (e.legendItem.type === t(f).Item || e.legendItem.type === t(f).Placeholder && t(T)) && e.legendItem instanceof t(u) ? (l(), U(je, {
              key: 7,
              class: C({
                invisible: e.legendItem.type === t(f).Placeholder
              }),
              legendItem: e.legendItem
            }, null, 8, ["class", "legendItem"])) : v("", !0),
            e.legendItem.type !== t(f).Item && e.legendItem instanceof t(u) ? (l(), a("div", ut, [
              w((l(), a("button", {
                type: "button",
                class: "text-gray-500 hover:text-black",
                content: e.legendItem.type === t(f).Error ? t(m)("legend.layer.controls.remove") : t(m)("legend.layer.controls.cancel"),
                onMouseover: n[2] || (n[2] = x(() => {
                }, ["stop"])),
                onClick: x(fe, ["stop"]),
                "aria-label": e.legendItem.type === t(f).Error ? t(m)("legend.layer.controls.remove") : t(m)("legend.layer.controls.cancel")
              }, [
                o("div", bt, [
                  e.legendItem.type === t(f).Placeholder ? (l(), a("svg", It, n[16] || (n[16] = [
                    o("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, null, -1)
                  ]))) : (l(), a("svg", ft, n[17] || (n[17] = [
                    o("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }, null, -1)
                  ])))
                ])
              ], 40, vt)), [
                [k, {
                  placement: "top-start"
                }]
              ])
            ])) : v("", !0),
            e.legendItem.type === t(f).Item && e.legendItem instanceof t(u) && e.legendItem.layerOffscale ? w((l(), a("div", {
              key: 9,
              class: "relative p-4 cursor-default",
              content: t(m)("legend.layer.offscale"),
              onMouseover: n[3] || (n[3] = x(() => {
              }, ["stop"])),
              onClick: n[4] || (n[4] = x(() => {
              }, ["stop"])),
              "focus-icon": ""
            }, n[18] || (n[18] = [
              o("svg", {
                class: "inline-block fill-gray-400 w-18 h-18",
                viewBox: "0 0 24 24"
              }, [
                o("path", { d: "M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z" })
              ], -1)
            ]), 40, ht)), [
              [k, {
                placement: "top-start"
              }]
            ]) : v("", !0),
            e.legendItem.type === t(f).Item && e.legendItem instanceof t(u) && !e.legendItem.layer?.mapLayer ? w((l(), a("div", {
              key: 10,
              class: "relative p-4 cursor-default",
              content: t(m)("legend.layer.data.only"),
              onMouseover: n[5] || (n[5] = x(() => {
              }, ["stop"])),
              onClick: n[6] || (n[6] = x(() => {
              }, ["stop"])),
              "focus-icon": ""
            }, n[19] || (n[19] = [
              o("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "18",
                viewBox: "0 -960 960 960",
                width: "18",
                class: "inline-block fill-gray-400"
              }, [
                o("path", { d: "m776.109-63.565-73.435-69.196q-51.302 32.573-106.091 59.145-54.788 26.572-116.255 26.572-88.94 0-167.803-33.893-78.862-33.894-138.052-93.239-59.19-59.346-93.19-138.205-34-78.86-34-167.619 0-64.607 19.12-125.521Q85.521-666.435 120-719.674l-50.848-50.848 68.761-68.761L844.87-132.326l-68.761 68.76Zm-345.392-92.653v-72.5l-52.25-52.086v-50.009l-219.01-218.752q-3 17.015-5 34.031-2 17.015-2 35.136 0 124.449 78.826 214.674 78.826 90.224 199.434 109.506Zm410.392-85.412-76.739-77.74q21.288-37.275 32.35-77.847 11.062-40.572 11.062-84.059 0-95.003-56.304-169.853-56.304-74.849-145.391-108.893v.522l-174.413 76.087v31.348L241.87-842.109q52.483-34.989 113.387-52.918 60.903-17.93 125.159-17.93 89.709 0 168.127 33.869 78.418 33.868 137.435 93.28 59.016 59.413 92.997 137.683 33.982 78.269 33.982 167.993 0 64.203-18.43 125.111-18.429 60.907-53.418 113.391Z" })
              ], -1)
            ]), 40, Lt)), [
              [k, {
                placement: "top-end"
              }]
            ]) : v("", !0),
            e.legendItem.type === t(f).Item && e.legendItem instanceof t(u) && e.legendItem.layerOffscale ? (l(), a("div", kt, [
              w((l(), a("button", {
                type: "button",
                class: "p-4",
                content: t(m)("legend.layer.zoomToVisible"),
                onMouseover: n[7] || (n[7] = x(() => {
                }, ["stop"])),
                onClick: n[8] || (n[8] = x((g) => e.legendItem.layer.zoomToVisibleScale(), ["stop"]))
              }, n[20] || (n[20] = [
                o("svg", {
                  class: "m-auto",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "18",
                  viewBox: "0 0 24 24",
                  width: "18"
                }, [
                  o("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
                  o("path", {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                  }),
                  o("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
                ], -1)
              ]), 40, xt)), [
                [k, {
                  placement: "top-start"
                }]
              ])
            ])) : e.legendItem.type === t(f).Item && L(t(Z).Visibility) ? (l(), U(te, {
              key: 12,
              checked: e.legendItem.visibility,
              value: e.legendItem,
              isRadio: e.legendItem.parent && e.legendItem.parent.exclusive,
              legendItem: e.legendItem,
              disabled: e.legendItem instanceof t(u) && !e.legendItem.layerControlAvailable(t(b).Visibility),
              label: c.value ? "Group" : "Layer"
            }, null, 8, ["checked", "value", "isRadio", "legendItem", "disabled", "label"])) : v("", !0)
          ], 42, Qe)), [
            [_, "show-truncate"],
            [k, {
              placement: "top-start",
              trigger: "manual focus",
              aria: "describedby"
            }]
          ]),
          e.legendItem.type === t(f).Placeholder || e.legendItem instanceof t(u) && e.legendItem.layerRedrawing && e.legendItem.visibility ? (l(), a("div", wt, n[21] || (n[21] = [
            o("div", { class: "progress-line" }, null, -1)
          ]))) : v("", !0)
        ]),
        e.legendItem instanceof t(u) && e.legendItem.symbologyExpanded ? w((l(), a("div", pt, [
          H.value.length > 0 ? (l(), a("div", Ct, [
            e.legendItem instanceof t(u) && e.legendItem.description ? (l(), a("p", Mt, p(e.legendItem.description), 1)) : v("", !0),
            (l(!0), a(le, null, ne(H.value, (g) => (l(), a("div", {
              class: "m-5",
              key: g.uid
            }, [
              g.imgUrl && e.legendItem.symbologyRenderStyle === "images" || !g.imgUrl && D.value === "ogc-wms" ? (l(), a("div", St, [
                g.imgUrl ? (l(), a("div", Tt, [
                  o("img", {
                    class: "max-w-full",
                    src: g.imgUrl
                  }, null, 8, zt)
                ])) : g.imgHeight ? (l(), a("div", {
                  key: 1,
                  class: "symbologyIcon w-full p-5",
                  innerHTML: ve(g)
                }, null, 8, Vt)) : v("", !0),
                g.label ? w((l(), a("div", Et, [
                  o("span", null, p(g.label), 1),
                  !g.imgUrl && H.value.length > 1 || g.imgUrl && g.definitionClause ? (l(), U(te, {
                    key: 0,
                    class: "float-right",
                    value: g,
                    legendItem: e.legendItem,
                    checked: g.visibility,
                    disabled: !L(t(b).Visibility),
                    label: "Symbol"
                  }, null, 8, ["value", "legendItem", "checked", "disabled"])) : v("", !0)
                ])), [
                  [S]
                ]) : v("", !0)
              ])) : (l(), a("div", Ht, [
                g.imgUrl ? (l(), a("div", Bt, [
                  o("img", {
                    class: "w-32 h-32",
                    src: g.imgUrl
                  }, null, 8, $t)
                ])) : g.svgcode ? (l(), a("div", At, [
                  o("span", {
                    innerHTML: g.svgcode
                  }, null, 8, Zt)
                ])) : v("", !0),
                w((l(), a("div", Ut, [
                  $(p(g.label), 1)
                ])), [
                  [S]
                ]),
                J.value && e.legendItem.layer.supportsFeatures && (!g.imgUrl && H.value.length > 1 || g.imgUrl && g.definitionClause) ? (l(), U(te, {
                  key: 2,
                  value: g,
                  legendItem: e.legendItem,
                  checked: g.visibility,
                  disabled: !L(t(b).Visibility),
                  label: "Symbol"
                }, null, 8, ["value", "legendItem", "checked", "disabled"])) : v("", !0)
              ]))
            ]))), 128))
          ])) : v("", !0),
          F.value ? v("", !0) : (l(), a("div", Gt, [
            w((l(), a("div", Rt, [
              z.value ? (l(), a("div", jt)) : v("", !0),
              w((l(), a("div", Pt, [
                o("span", null, p(t(m)("legend.symbology.loading")), 1)
              ])), [
                [S]
              ])
            ])), [
              [S]
            ])
          ]))
        ])), [
          [_]
        ]) : v("", !0),
        e.legendItem.expanded ? (l(), a("div", Dt, [
          (l(!0), a(le, null, ne(e.legendItem.children, (g) => (l(), U(h, {
            legendItem: g,
            key: g.uid
          }, null, 8, ["legendItem"]))), 128))
        ])) : v("", !0)
      ]));
    };
  }
}), Ft = /* @__PURE__ */ oe(Ot, [["__scopeId", "data-v-b1261e08"]]);
export {
  Ft as default
};
//# sourceMappingURL=item-BU-y3VVg.js.map
