import { e as o } from "./basicInterfaces-Dnf5pTeQ.js";
import { N as _, S as c, T as h } from "./enums-DDkmfb-t.js";
function J(t, e, i = h.ADD, n = [0, 0, 0, 0]) {
  return { srcRgb: t, srcAlpha: t, dstRgb: e, dstAlpha: e, opRgb: i, opAlpha: i, color: { r: n[0], g: n[1], b: n[2], a: n[3] } };
}
function L(t, e, i, n, a = h.ADD, b = h.ADD, r = [0, 0, 0, 0]) {
  return { srcRgb: t, srcAlpha: e, dstRgb: i, dstAlpha: n, opRgb: a, opAlpha: b, color: { r: r[0], g: r[1], b: r[2], a: r[3] } };
}
const T = { face: _.BACK, mode: c.CCW }, w = { face: _.FRONT, mode: c.CCW }, Q = (t) => t === o.Back ? T : t === o.Front ? w : null, U = { zNear: 0, zFar: 1 }, V = { r: !0, g: !0, b: !0, a: !0 };
function B(t) {
  return P.intern(t);
}
function D(t) {
  return z.intern(t);
}
function y(t) {
  return F.intern(t);
}
function O(t) {
  return N.intern(t);
}
function C(t) {
  return K.intern(t);
}
function m(t) {
  return j.intern(t);
}
function A(t) {
  return x.intern(t);
}
function R(t) {
  return M.intern(t);
}
function k(t) {
  return $.intern(t);
}
function X(t) {
  return q.intern(t);
}
class s {
  constructor(e, i) {
    this._makeKey = e, this._makeRef = i, this._interns = /* @__PURE__ */ new Map();
  }
  intern(e) {
    if (!e) return null;
    const i = this._makeKey(e), n = this._interns;
    return n.has(i) || n.set(i, this._makeRef(e)), n.get(i) ?? null;
  }
}
function l(t) {
  return "[" + t.join(",") + "]";
}
const P = new s(d, (t) => ({ __tag: "Blending", ...t }));
function d(t) {
  return t ? l([t.srcRgb, t.srcAlpha, t.dstRgb, t.dstAlpha, t.opRgb, t.opAlpha, t.color.r, t.color.g, t.color.b, t.color.a]) : null;
}
const z = new s(u, (t) => ({ __tag: "Culling", ...t }));
function u(t) {
  return t ? l([t.face, t.mode]) : null;
}
const F = new s(f, (t) => ({ __tag: "PolygonOffset", ...t }));
function f(t) {
  return t ? l([t.factor, t.units]) : null;
}
const N = new s(p, (t) => ({ __tag: "DepthTest", ...t }));
function p(t) {
  return t ? l([t.func]) : null;
}
const K = new s(g, (t) => ({ __tag: "StencilTest", ...t }));
function g(t) {
  return t ? l([t.function.func, t.function.ref, t.function.mask, t.operation.fail, t.operation.zFail, t.operation.zPass]) : null;
}
const j = new s(v, (t) => ({ __tag: "DepthWrite", ...t }));
function v(t) {
  return t ? l([t.zNear, t.zFar]) : null;
}
const x = new s(I, (t) => ({ __tag: "ColorWrite", ...t }));
function I(t) {
  return t ? l([t.r, t.g, t.b, t.a]) : null;
}
const M = new s(W, (t) => ({ __tag: "StencilWrite", ...t }));
function W(t) {
  return t ? l([t.mask]) : null;
}
const $ = new s(S, (t) => ({ __tag: "DrawBuffers", ...t }));
function S(t) {
  return t ? l(t.buffers) : null;
}
const q = new s(E, (t) => ({ blending: B(t.blending), culling: D(t.culling), polygonOffset: y(t.polygonOffset), depthTest: O(t.depthTest), stencilTest: C(t.stencilTest), depthWrite: m(t.depthWrite), colorWrite: A(t.colorWrite), stencilWrite: R(t.stencilWrite), drawBuffers: k(t.drawBuffers) }));
function E(t) {
  return t ? l([d(t.blending), u(t.culling), f(t.polygonOffset), p(t.depthTest), g(t.stencilTest), v(t.depthWrite), I(t.colorWrite), W(t.stencilWrite), S(t.drawBuffers)]) : null;
}
class Y {
  constructor(e) {
    this._pipelineInvalid = !0, this._blendingInvalid = !0, this._cullingInvalid = !0, this._polygonOffsetInvalid = !0, this._depthTestInvalid = !0, this._stencilTestInvalid = !0, this._depthWriteInvalid = !0, this._colorWriteInvalid = !0, this._stencilWriteInvalid = !0, this._drawBuffersInvalid = !0, this._stateSetters = e;
  }
  setPipeline(e) {
    (this._pipelineInvalid || e !== this._pipeline) && (this._setBlending(e.blending), this._setCulling(e.culling), this._setPolygonOffset(e.polygonOffset), this._setDepthTest(e.depthTest), this._setStencilTest(e.stencilTest), this._setDepthWrite(e.depthWrite), this._setColorWrite(e.colorWrite), this._setStencilWrite(e.stencilWrite), this._setDrawBuffers(e.drawBuffers), this._pipeline = e), this._pipelineInvalid = !1;
  }
  invalidateBlending() {
    this._blendingInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateCulling() {
    this._cullingInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidatePolygonOffset() {
    this._polygonOffsetInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateDepthTest() {
    this._depthTestInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateStencilTest() {
    this._stencilTestInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateDepthWrite() {
    this._depthWriteInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateColorWrite() {
    this._colorWriteInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateStencilWrite() {
    this._stencilTestInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateDrawBuffers() {
    this._drawBuffersInvalid = !0, this._pipelineInvalid = !0;
  }
  _setBlending(e) {
    this._blending = this._setSubState(e, this._blending, this._blendingInvalid, this._stateSetters.setBlending), this._blendingInvalid = !1;
  }
  _setCulling(e) {
    this._culling = this._setSubState(e, this._culling, this._cullingInvalid, this._stateSetters.setCulling), this._cullingInvalid = !1;
  }
  _setPolygonOffset(e) {
    this._polygonOffset = this._setSubState(e, this._polygonOffset, this._polygonOffsetInvalid, this._stateSetters.setPolygonOffset), this._polygonOffsetInvalid = !1;
  }
  _setDepthTest(e) {
    this._depthTest = this._setSubState(e, this._depthTest, this._depthTestInvalid, this._stateSetters.setDepthTest), this._depthTestInvalid = !1;
  }
  _setStencilTest(e) {
    this._stencilTest = this._setSubState(e, this._stencilTest, this._stencilTestInvalid, this._stateSetters.setStencilTest), this._stencilTestInvalid = !1;
  }
  _setDepthWrite(e) {
    this._depthWrite = this._setSubState(e, this._depthWrite, this._depthWriteInvalid, this._stateSetters.setDepthWrite), this._depthWriteInvalid = !1;
  }
  _setColorWrite(e) {
    this._colorWrite = this._setSubState(e, this._colorWrite, this._colorWriteInvalid, this._stateSetters.setColorWrite), this._colorWriteInvalid = !1;
  }
  _setStencilWrite(e) {
    this._stencilWrite = this._setSubState(e, this._stencilWrite, this._stencilWriteInvalid, this._stateSetters.setStencilWrite), this._stencilTestInvalid = !1;
  }
  _setDrawBuffers(e) {
    this._drawBuffers = this._setSubState(e, this._drawBuffers, this._drawBuffersInvalid, this._stateSetters.setDrawBuffers), this._drawBuffersInvalid = !1;
  }
  _setSubState(e, i, n, a) {
    return (n || e !== i) && (a(e), this._pipelineInvalid = !0), e;
  }
}
export {
  Y as G,
  X as S,
  V as _,
  Q as h,
  L as l,
  U as o,
  J as s
};
//# sourceMappingURL=renderState-DjM_esgh.js.map
