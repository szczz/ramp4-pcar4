import { kE as De, kF as Re, kG as Fe, D as z, fE as Y, u as X } from "./main-lm2DHsZh.js";
import { u as k, a as Me, b as v, c as M, d as Ue, f as j } from "./Texture-DhDvGrgF.js";
import { A as u, F as B, V as m, C as U, X as E, G as K, U as ye, t as q, n as y, M as A, B as D, H as T } from "./enums-DDkmfb-t.js";
const W = () => z.getLogger("esri.views.webgl.BufferObject");
let Ce = class R {
  static createIndex(e, r, t) {
    return new R(e, u.ELEMENT_ARRAY_BUFFER, r, t);
  }
  static createVertex(e, r, t) {
    return new R(e, u.ARRAY_BUFFER, r, t);
  }
  static createUniform(e, r, t) {
    return new R(e, u.UNIFORM_BUFFER, r, t);
  }
  static createPixelPack(e, r = B.STREAM_READ, t) {
    const n = new R(e, u.PIXEL_PACK_BUFFER, r);
    return t && n.setSize(t), n;
  }
  static createPixelUnpack(e, r = B.STREAM_DRAW, t) {
    return new R(e, u.PIXEL_UNPACK_BUFFER, r, t);
  }
  static createTransformFeedback(e, r = B.STATIC_DRAW, t) {
    const n = new R(e, u.TRANSFORM_FEEDBACK_BUFFER, r);
    return n.setSize(t), n;
  }
  constructor(e, r, t, n) {
    this._context = e, this.bufferType = r, this.usage = t, this._glName = null, this._size = -1, this._indexType = void 0, e.instanceCounter.increment(m.BufferObject, this), this._glName = this._context.gl.createBuffer(), k(this._context.gl), n && this.setData(n);
  }
  get glName() {
    return this._glName;
  }
  get size() {
    return this._size;
  }
  get indexType() {
    return this._indexType;
  }
  get usedMemory() {
    return this.bufferType === u.ELEMENT_ARRAY_BUFFER ? this._indexType === U.UNSIGNED_INT ? 4 * this._size : 2 * this._size : this._size;
  }
  get _isVAOAware() {
    return this.bufferType === u.ELEMENT_ARRAY_BUFFER || this.bufferType === u.ARRAY_BUFFER;
  }
  dispose() {
    this._context?.gl ? (this._glName && (this._context.gl.deleteBuffer(this._glName), this._glName = null), this._context.instanceCounter.decrement(m.BufferObject, this), this._context = null) : this._glName && W().warn("Leaked WebGL buffer object");
  }
  setSize(e, r = null) {
    if (this.bufferType === u.ELEMENT_ARRAY_BUFFER && r != null) switch (this._indexType = r, r) {
      case U.UNSIGNED_SHORT:
        e *= 2;
        break;
      case U.UNSIGNED_INT:
        e *= 4;
    }
    this._setBufferData(e);
  }
  setData(e) {
    if (!e) return;
    let r = e.byteLength;
    this.bufferType === u.ELEMENT_ARRAY_BUFFER && (De(e) && (r /= 2, this._indexType = U.UNSIGNED_SHORT), Re(e) && (r /= 4, this._indexType = U.UNSIGNED_INT)), this._setBufferData(r, e);
  }
  _setBufferData(e, r = null) {
    this._size = e;
    const t = this._context.getBoundVAO();
    this._isVAOAware && this._context.bindVAO(null), this._context.bindBuffer(this);
    const n = this._context.gl;
    r != null ? n.bufferData(this.bufferType, r, this.usage) : n.bufferData(this.bufferType, e, this.usage), k(n), this._isVAOAware && this._context.bindVAO(t);
  }
  setSubData(e, r, t, n) {
    if (!e) return;
    const s = this._context.getBoundVAO();
    this._isVAOAware && this._context.bindVAO(null), this._context.bindBuffer(this);
    const { gl: o } = this._context;
    o.bufferSubData(this.bufferType, r * e.BYTES_PER_ELEMENT, e, t, n - t), k(o), this._isVAOAware && this._context.bindVAO(s);
  }
  getSubData(e, r = 0, t, n) {
    if (t < 0 || n < 0) return;
    const s = we(e) ? e.BYTES_PER_ELEMENT : 1;
    if (s * ((t ?? 0) + (n ?? 0)) > e.byteLength) return;
    r + s * (n ?? 0) > this.usedMemory && W().warn("Potential problem getting subdata: requested data exceeds buffer size!");
    const o = this._context.gl;
    this.bufferType === u.TRANSFORM_FEEDBACK_BUFFER ? (this._context.bindBuffer(this, u.TRANSFORM_FEEDBACK_BUFFER), o.getBufferSubData(u.TRANSFORM_FEEDBACK_BUFFER, r, e, t, n), this._context.unbindBuffer(u.TRANSFORM_FEEDBACK_BUFFER)) : (this._context.bindBuffer(this, u.COPY_READ_BUFFER), o.getBufferSubData(u.COPY_READ_BUFFER, r, e, t, n), this._context.unbindBuffer(u.COPY_READ_BUFFER));
  }
  async getSubDataAsync(e, r = 0, t, n) {
    await this._context.clientWaitAsync(), this.getSubData(e, r, t, n);
  }
};
function we(i) {
  return Fe(i);
}
let ct = class {
  constructor(e, r, t = r) {
    this.internalFormat = e, this.width = r, this.height = t, this.multisampled = !1, this.samples = 1;
  }
};
function ve(i) {
  return i.width <= 0 || i.height <= 0 || i.internalFormat == null ? 0 : i.width * i.height * Me(i.internalFormat);
}
let Ne = class {
  constructor(e, r) {
    this._context = e, this._descriptor = r, this.type = v.RenderBuffer, this._context.instanceCounter.increment(m.Renderbuffer, this);
    const t = this._context.gl;
    this.glName = t.createRenderbuffer(), this._context.bindRenderbuffer(this);
    const { width: n, height: s, internalFormat: o, multisampled: h } = r;
    h ? t.renderbufferStorageMultisample(t.RENDERBUFFER, this.samples, o, n, s) : t.renderbufferStorage(t.RENDERBUFFER, o, n, s), this._context.bindRenderbuffer(null);
  }
  get descriptor() {
    return this._descriptor;
  }
  get samples() {
    const e = this._descriptor.samples, r = this._context.parameters.maxSamples;
    return e ? Math.min(e, r) : r;
  }
  get usedMemory() {
    return ve(this._descriptor);
  }
  resize(e, r) {
    const t = this._descriptor;
    if (t.width === e && t.height === r) return;
    t.width = e, t.height = r;
    const n = this._context.gl;
    this._context.bindRenderbuffer(this), t.multisampled ? n.renderbufferStorageMultisample(n.RENDERBUFFER, this.samples, t.internalFormat, t.width, t.height) : n.renderbufferStorage(n.RENDERBUFFER, t.internalFormat, t.width, t.height), this._context.bindRenderbuffer(null);
  }
  dispose() {
    this._context && (this._context.gl.deleteRenderbuffer(this.glName), this._context.instanceCounter.decrement(m.Renderbuffer, this), this._context = null);
  }
};
const Pe = () => z.getLogger("esri.views.webgl.FramebufferObject");
let Be = class C {
  constructor(e, r, t = null) {
    this._context = e, this._glName = null, this._colorAttachments = /* @__PURE__ */ new Map(), this._depthStencilBuffer = null, this._depthStencilTexture = null, this._initialized = !1, e.instanceCounter.increment(m.FramebufferObject, this);
    const n = L(r) ? r : new M(this._context, r);
    if (this._colorAttachments.set(E.COLOR_ATTACHMENT0, n), this._validateTextureDescriptor(n.descriptor), this._validateColorAttachmentPoint(E.COLOR_ATTACHMENT0), t != null) if (Oe(t)) this._depthStencilTexture = L(t) ? t : new M(this._context, t), this._validateTextureDescriptor(this._depthStencilTexture.descriptor);
    else {
      const s = Le(t) ? t : new Ne(this._context, t);
      this._depthStencilBuffer = s, this._validateRenderBufferDescriptor(s.descriptor);
    }
  }
  dispose() {
    if (this._colorAttachments.size === 0 && !this._glName) return;
    const e = this._context.getBoundFramebufferObject();
    this._colorAttachments.forEach((r, t) => this.detachColorTexture(t)?.dispose()), this.detachDepthStencilBuffer()?.dispose(), this.detachDepthStencilTexture()?.dispose(), this._glName && (this._context.gl.deleteFramebuffer(this._glName), this._glName = null), this._context.bindFramebuffer(e), this._context.instanceCounter.decrement(m.FramebufferObject, this);
  }
  get glName() {
    return this._glName;
  }
  get colorTexture() {
    return this._colorAttachments.get(E.COLOR_ATTACHMENT0);
  }
  get depthStencil() {
    return this._depthStencilTexture || this._depthStencilBuffer;
  }
  get depthStencilTexture() {
    return this._depthStencilTexture;
  }
  get width() {
    return this._colorAttachments.get(E.COLOR_ATTACHMENT0)?.descriptor?.width ?? 0;
  }
  get height() {
    return this._colorAttachments.get(E.COLOR_ATTACHMENT0)?.descriptor?.height ?? 0;
  }
  get usedMemory() {
    return [...this._colorAttachments].reduce((e, [r, t]) => e + t.usedMemory, this.depthStencil?.usedMemory ?? 0);
  }
  getColorTexture(e) {
    const r = this._colorAttachments.get(e);
    return r && L(r) ? r : null;
  }
  get colorAttachments() {
    return [...this._colorAttachments.keys()];
  }
  attachColorTexture(e, r = E.COLOR_ATTACHMENT0) {
    if (!e) return;
    this._validateColorAttachmentPoint(r);
    const t = e.descriptor;
    this._validateTextureDescriptor(t), this.detachColorTexture(r)?.dispose(), this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(e.glName, r)), this._colorAttachments.set(r, e);
  }
  detachColorTexture(e = E.COLOR_ATTACHMENT0) {
    const r = this._colorAttachments.get(e);
    if (r) {
      if (this._initialized) {
        const t = this._context.getBoundFramebufferObject();
        this._context.bindFramebuffer(this), this._framebufferTexture2D(null, e), this._context.bindFramebuffer(t);
      }
      return this._colorAttachments.delete(e), r;
    }
  }
  setColorTextureTarget(e, r = E.COLOR_ATTACHMENT0) {
    const t = this._colorAttachments.get(r);
    t && this._framebufferTexture2D(t.glName, r, e);
  }
  attachDepthStencil(e) {
    if (e) switch (e.type) {
      case v.Texture:
        return this._attachDepthStencilTexture(e);
      case v.RenderBuffer:
        return this._attachDepthStencilBuffer(e);
    }
  }
  _attachDepthStencilTexture(e) {
    if (e == null) return;
    const r = e.descriptor;
    r.pixelFormat !== K.DEPTH_STENCIL && r.pixelFormat !== K.DEPTH24_STENCIL8 && console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"), r.dataType !== ye.UNSIGNED_INT_24_8 && console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"), this._validateTextureDescriptor(r), this._disposeDepthStencilAttachments(), this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(e.glName, q)), this._depthStencilTexture?.dispose(), this._depthStencilTexture = e;
  }
  detachDepthStencilTexture() {
    const e = this._depthStencilTexture;
    if (e && this._initialized) {
      const r = this._context.getBoundFramebufferObject();
      this._context.bindFramebuffer(this), this._framebufferTexture2D(null, q), this._context.bindFramebuffer(r);
    }
    return this._depthStencilTexture = null, e;
  }
  _attachDepthStencilBuffer(e) {
    if (e == null) return;
    const r = e.descriptor;
    if (this._validateRenderBufferDescriptor(r), this._disposeDepthStencilAttachments(), this._initialized) {
      this._context.bindFramebuffer(this);
      const t = this._context.gl, n = this._getGLAttachmentPoint(r);
      t.framebufferRenderbuffer(y.FRAMEBUFFER, n, t.RENDERBUFFER, e.glName);
    }
    this._depthStencilBuffer = e;
  }
  detachDepthStencilBuffer() {
    const e = this._depthStencilBuffer;
    if (e && this._initialized) {
      const r = this._context.getBoundFramebufferObject();
      this._context.bindFramebuffer(this);
      const t = this._context.gl, n = this._getGLAttachmentPoint(e.descriptor);
      t.framebufferRenderbuffer(y.FRAMEBUFFER, n, t.RENDERBUFFER, null), this._context.bindFramebuffer(r);
    }
    return this._depthStencilBuffer = null, e;
  }
  copyToTexture(e, r, t, n, s, o, h) {
    (e < 0 || r < 0 || s < 0 || o < 0) && console.error("Offsets cannot be negative!"), (t <= 0 || n <= 0) && console.error("Copy width and height must be greater than zero!");
    const a = h.descriptor;
    h.descriptor.target !== A.TEXTURE_2D && console.error("Texture target must be TEXTURE_2D!"), (a?.width == null || a?.height == null || e + t > this.width || r + n > this.height || s + t > a.width || o + n > a.height) && console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");
    const c = this._context, l = c.bindTexture(h, M.TEXTURE_UNIT_FOR_UPDATES);
    c.setActiveTexture(M.TEXTURE_UNIT_FOR_UPDATES), c.bindFramebuffer(this), c.gl.copyTexSubImage2D(A.TEXTURE_2D, 0, s, o, e, r, t, n), c.bindTexture(l, M.TEXTURE_UNIT_FOR_UPDATES);
  }
  readPixels(e, r, t, n, s, o, h) {
    (t <= 0 || n <= 0) && console.error("Copy width and height must be greater than zero!"), h || console.error("Target memory is not initialized!"), this._context.bindFramebuffer(this), this._context.gl.readPixels(e, r, t, n, s, o, h);
  }
  async readPixelsAsync(e, r, t, n, s, o, h) {
    const { gl: a } = this._context, c = Ce.createPixelPack(this._context, B.STREAM_READ, h.byteLength);
    this._context.bindBuffer(c), this._context.bindFramebuffer(this), a.readPixels(e, r, t, n, s, o, 0), this._context.unbindBuffer(u.PIXEL_PACK_BUFFER), await c.getSubDataAsync(h), c.dispose();
  }
  resize(e, r) {
    if (this.width === e && this.height === r) return;
    const t = { width: e, height: r };
    N(t, this._context.parameters.maxTextureSize), this._colorAttachments.forEach((n) => n.resize(t.width, t.height)), this._depthStencilTexture?.resize(t.width, t.height), this._initialized && (N(t, this._context.parameters.maxRenderbufferSize), this._depthStencilBuffer?.resize(t.width, t.height), this._context.getBoundFramebufferObject() === this && this._context.bindFramebuffer(null), this._initialized = !1);
  }
  initializeAndBind(e = y.FRAMEBUFFER) {
    const r = this._context.gl;
    if (this._initialized) return void r.bindFramebuffer(e, this.glName);
    this._glName && r.deleteFramebuffer(this._glName);
    const t = r.createFramebuffer();
    if (r.bindFramebuffer(e, t), this._colorAttachments.forEach((n, s) => this._framebufferTexture2D(n.glName, s, Q(n), e)), this._depthStencilBuffer) {
      const n = this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);
      r.framebufferRenderbuffer(e, n, r.RENDERBUFFER, this._depthStencilBuffer.glName);
    } else this._depthStencilTexture && this._framebufferTexture2D(this._depthStencilTexture.glName, r.DEPTH_STENCIL_ATTACHMENT, Q(this._depthStencilTexture), e);
    Ue() && r.checkFramebufferStatus(e) !== r.FRAMEBUFFER_COMPLETE && console.error("Framebuffer is incomplete!"), this._glName = t, this._initialized = !0;
  }
  _framebufferTexture2D(e, r = E.COLOR_ATTACHMENT0, t = A.TEXTURE_2D, n = y.FRAMEBUFFER, s = 0) {
    this._context.gl.framebufferTexture2D(n, r, t, e, s);
  }
  _disposeDepthStencilAttachments() {
    const e = this._context.gl;
    if (this._depthStencilBuffer) {
      if (this._initialized) {
        this._context.bindFramebuffer(this);
        const r = this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);
        e.framebufferRenderbuffer(y.FRAMEBUFFER, r, e.RENDERBUFFER, null);
      }
      this._depthStencilBuffer = Y(this._depthStencilBuffer);
    }
    this._depthStencilTexture && (this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(null, e.DEPTH_STENCIL_ATTACHMENT)), this._depthStencilTexture = Y(this._depthStencilTexture));
  }
  _validateTextureDescriptor(e) {
    e.target !== A.TEXTURE_2D && e.target !== A.TEXTURE_CUBE_MAP && console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"), N(e, this._context.parameters.maxTextureSize), this._validateBufferDimensions(e);
  }
  _validateRenderBufferDescriptor(e) {
    N(e, this._context.parameters.maxRenderbufferSize), this._validateBufferDimensions(e);
  }
  _validateBufferDimensions(e) {
    e.width <= 0 && (e.width = this.width), e.height <= 0 && (e.height = this.height), this.width > 0 && this.height > 0 && (this.width === e.width && this.height === e.height || console.error("Attachment size must match framebuffer size!"));
  }
  _getGLAttachmentPoint(e) {
    switch (e.internalFormat) {
      case D.DEPTH_COMPONENT16:
      case D.DEPTH_COMPONENT24:
      case D.DEPTH_COMPONENT32F:
        return this._context.gl.DEPTH_ATTACHMENT;
      case D.DEPTH24_STENCIL8:
      case D.DEPTH32F_STENCIL8:
      case D.DEPTH_STENCIL:
        return this._context.gl.DEPTH_STENCIL_ATTACHMENT;
      case D.STENCIL_INDEX8:
        return this._context.gl.STENCIL_ATTACHMENT;
    }
  }
  _validateColorAttachmentPoint(e) {
    if (C._MAX_COLOR_ATTACHMENTS === -1) {
      const { gl: t } = this._context;
      C._MAX_COLOR_ATTACHMENTS = t.getParameter(t.MAX_COLOR_ATTACHMENTS);
    }
    const r = e - E.COLOR_ATTACHMENT0;
    r + 1 > C._MAX_COLOR_ATTACHMENTS && z.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject", `illegal attachment point for color attachment: ${r + 1}. Implementation supports up to ${C._MAX_COLOR_ATTACHMENTS} color attachments`);
  }
};
function L(i) {
  return i != null && "type" in i && i.type === v.Texture;
}
function Le(i) {
  return i != null && "type" in i && i.type === v.RenderBuffer;
}
function Oe(i) {
  return L(i) || i != null && "pixelFormat" in i;
}
function N(i, e) {
  const r = Math.max(i.width, i.height);
  if (r > e) {
    Pe().warn(`Resizing FBO attachment size ${i.width}x${i.height} to device limit ${e}`);
    const t = e / r;
    return i.width = Math.round(i.width * t), i.height = Math.round(i.height * t), !1;
  }
  return !0;
}
function Q(i) {
  return i.descriptor.target === A.TEXTURE_CUBE_MAP ? A.TEXTURE_CUBE_MAP_POSITIVE_X : A.TEXTURE_2D;
}
Be._MAX_COLOR_ATTACHMENTS = -1;
var Z, ce = { exports: {} };
(Z = ["precision", "highp", "mediump", "lowp", "attribute", "const", "uniform", "varying", "break", "continue", "do", "for", "while", "if", "else", "in", "out", "inout", "float", "int", "void", "bool", "true", "false", "discard", "return", "mat2", "mat3", "mat4", "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4", "bvec2", "bvec3", "bvec4", "sampler1D", "sampler2D", "sampler3D", "samplerCube", "sampler1DShadow", "sampler2DShadow", "struct", "asm", "class", "union", "enum", "typedef", "template", "this", "packed", "goto", "switch", "default", "inline", "noinline", "volatile", "public", "static", "extern", "external", "interface", "long", "short", "double", "half", "fixed", "unsigned", "input", "output", "hvec2", "hvec3", "hvec4", "dvec2", "dvec3", "dvec4", "fvec2", "fvec3", "fvec4", "sampler2DRect", "sampler3DRect", "sampler2DRectShadow", "sizeof", "cast", "namespace", "using"]) !== void 0 && (ce.exports = Z);
const ke = X(ce.exports);
var J, le = { exports: {} };
J = le, function(i) {
  var e = ["<<=", ">>=", "++", "--", "<<", ">>", "<=", ">=", "==", "!=", "&&", "||", "+=", "-=", "*=", "/=", "%=", "&=", "^^", "^=", "|=", "(", ")", "[", "]", ".", "!", "~", "*", "/", "%", "+", "-", "<", ">", "&", "^", "|", "?", ":", "=", ",", ";", "{", "}"];
  e !== void 0 && (J.exports = e);
}();
const ee = X(le.exports);
var fe = { exports: {} };
(function(i) {
  (function(e) {
    var r = /* @__PURE__ */ function() {
      return ["abs", "acos", "all", "any", "asin", "atan", "ceil", "clamp", "cos", "cross", "dFdx", "dFdy", "degrees", "distance", "dot", "equal", "exp", "exp2", "faceforward", "floor", "fract", "gl_BackColor", "gl_BackLightModelProduct", "gl_BackLightProduct", "gl_BackMaterial", "gl_BackSecondaryColor", "gl_ClipPlane", "gl_ClipVertex", "gl_Color", "gl_DepthRange", "gl_DepthRangeParameters", "gl_EyePlaneQ", "gl_EyePlaneR", "gl_EyePlaneS", "gl_EyePlaneT", "gl_Fog", "gl_FogCoord", "gl_FogFragCoord", "gl_FogParameters", "gl_FragColor", "gl_FragCoord", "gl_FragData", "gl_FragDepth", "gl_FragDepthEXT", "gl_FrontColor", "gl_FrontFacing", "gl_FrontLightModelProduct", "gl_FrontLightProduct", "gl_FrontMaterial", "gl_FrontSecondaryColor", "gl_LightModel", "gl_LightModelParameters", "gl_LightModelProducts", "gl_LightProducts", "gl_LightSource", "gl_LightSourceParameters", "gl_MaterialParameters", "gl_MaxClipPlanes", "gl_MaxCombinedTextureImageUnits", "gl_MaxDrawBuffers", "gl_MaxFragmentUniformComponents", "gl_MaxLights", "gl_MaxTextureCoords", "gl_MaxTextureImageUnits", "gl_MaxTextureUnits", "gl_MaxVaryingFloats", "gl_MaxVertexAttribs", "gl_MaxVertexTextureImageUnits", "gl_MaxVertexUniformComponents", "gl_ModelViewMatrix", "gl_ModelViewMatrixInverse", "gl_ModelViewMatrixInverseTranspose", "gl_ModelViewMatrixTranspose", "gl_ModelViewProjectionMatrix", "gl_ModelViewProjectionMatrixInverse", "gl_ModelViewProjectionMatrixInverseTranspose", "gl_ModelViewProjectionMatrixTranspose", "gl_MultiTexCoord0", "gl_MultiTexCoord1", "gl_MultiTexCoord2", "gl_MultiTexCoord3", "gl_MultiTexCoord4", "gl_MultiTexCoord5", "gl_MultiTexCoord6", "gl_MultiTexCoord7", "gl_Normal", "gl_NormalMatrix", "gl_NormalScale", "gl_ObjectPlaneQ", "gl_ObjectPlaneR", "gl_ObjectPlaneS", "gl_ObjectPlaneT", "gl_Point", "gl_PointCoord", "gl_PointParameters", "gl_PointSize", "gl_Position", "gl_ProjectionMatrix", "gl_ProjectionMatrixInverse", "gl_ProjectionMatrixInverseTranspose", "gl_ProjectionMatrixTranspose", "gl_SecondaryColor", "gl_TexCoord", "gl_TextureEnvColor", "gl_TextureMatrix", "gl_TextureMatrixInverse", "gl_TextureMatrixInverseTranspose", "gl_TextureMatrixTranspose", "gl_Vertex", "greaterThan", "greaterThanEqual", "inversesqrt", "length", "lessThan", "lessThanEqual", "log", "log2", "matrixCompMult", "max", "min", "mix", "mod", "normalize", "not", "notEqual", "pow", "radians", "reflect", "refract", "sign", "sin", "smoothstep", "sqrt", "step", "tan", "texture2D", "texture2DLod", "texture2DProj", "texture2DProjLod", "textureCube", "textureCubeLod", "texture2DLodEXT", "texture2DProjLodEXT", "textureCubeLodEXT", "texture2DGradEXT", "texture2DProjGradEXT", "textureCubeGradEXT", "textureSize", "texelFetch"];
    }();
    r !== void 0 && (i.exports = r);
  })();
})(fe);
const Ie = X(fe.exports), $e = ["layout", "centroid", "smooth", "case", "mat2x2", "mat2x3", "mat2x4", "mat3x2", "mat3x3", "mat3x4", "mat4x2", "mat4x3", "mat4x4", "uint", "uvec2", "uvec3", "uvec4", "samplerCubeShadow", "sampler2DArray", "sampler2DArrayShadow", "isampler2D", "isampler3D", "isamplerCube", "isampler2DArray", "usampler2D", "usampler3D", "usamplerCube", "usampler2DArray", "coherent", "restrict", "readonly", "writeonly", "resource", "atomic_uint", "noperspective", "patch", "sample", "subroutine", "common", "partition", "active", "filter", "image1D", "image2D", "image3D", "imageCube", "iimage1D", "iimage2D", "iimage3D", "iimageCube", "uimage1D", "uimage2D", "uimage3D", "uimageCube", "image1DArray", "image2DArray", "iimage1DArray", "iimage2DArray", "uimage1DArray", "uimage2DArray", "image1DShadow", "image2DShadow", "image1DArrayShadow", "image2DArrayShadow", "imageBuffer", "iimageBuffer", "uimageBuffer", "sampler1DArray", "sampler1DArrayShadow", "isampler1D", "isampler1DArray", "usampler1D", "usampler1DArray", "isampler2DRect", "usampler2DRect", "samplerBuffer", "isamplerBuffer", "usamplerBuffer", "sampler2DMS", "isampler2DMS", "usampler2DMS", "sampler2DMSArray", "isampler2DMSArray", "usampler2DMSArray", "trunc", "round", "roundEven", "isnan", "isinf", "floatBitsToInt", "floatBitsToUint", "intBitsToFloat", "uintBitsToFloat", "packSnorm2x16", "unpackSnorm2x16", "packUnorm2x16", "unpackUnorm2x16", "packHalf2x16", "unpackHalf2x16", "outerProduct", "transpose", "determinant", "inverse", "texture", "textureSize", "textureProj", "textureLod", "textureOffset", "texelFetch", "texelFetchOffset", "textureProjOffset", "textureLodOffset", "textureProjLod", "textureProjLodOffset", "textureGrad", "textureGradOffset", "textureProjGrad", "textureProjGradOffset"];
var x = 999, te = 9999, I = 0, $ = 1, re = 2, ie = 3, ne = 4, P = 5, He = 6, je = 7, ze = 8, se = 9, Xe = 10, oe = 11, Ve = ["block-comment", "line-comment", "preprocessor", "operator", "integer", "float", "ident", "builtin", "keyword", "whitespace", "eof", "integer"];
function Ge() {
  var i, e, r, t = 0, n = 0, s = x, o = [], h = [], a = 1, c = 0, l = 0, _ = !1, p = !1, g = "";
  return function(f) {
    return h = [], f !== null ? _e(f.replace ? f.replace(/\r\n/g, `
`) : f) : de();
  };
  function d(f) {
    f.length && h.push({ type: Ve[s], data: f, position: l, line: a, column: c });
  }
  function _e(f) {
    var S;
    for (t = 0, r = (g += f).length; i = g[t], t < r; ) {
      switch (S = t, s) {
        case I:
          t = xe();
          break;
        case $:
          t = pe();
          break;
        case re:
          t = V();
          break;
        case ie:
          t = Te();
          break;
        case ne:
          t = be();
          break;
        case oe:
          t = Ee();
          break;
        case P:
          t = Ae();
          break;
        case te:
          t = Se();
          break;
        case se:
          t = ge();
          break;
        case x:
          t = me();
      }
      S !== t && (g[S] === `
` ? (c = 0, ++a) : ++c);
    }
    return n += t, g = g.slice(t), h;
  }
  function de(f) {
    return o.length && d(o.join("")), s = Xe, d("(eof)"), h;
  }
  function me() {
    return o = o.length ? [] : o, e === "/" && i === "*" ? (l = n + t - 1, s = I, e = i, t + 1) : e === "/" && i === "/" ? (l = n + t - 1, s = $, e = i, t + 1) : i === "#" ? (s = re, l = n + t, t) : /\s/.test(i) ? (s = se, l = n + t, t) : (_ = /\d/.test(i), p = /[^\w_]/.test(i), l = n + t, s = _ ? ne : p ? ie : te, t);
  }
  function ge() {
    return /[^\s]/g.test(i) ? (d(o.join("")), s = x, t) : (o.push(i), e = i, t + 1);
  }
  function V() {
    return i !== "\r" && i !== `
` || e === "\\" ? (o.push(i), e = i, t + 1) : (d(o.join("")), s = x, t);
  }
  function pe() {
    return V();
  }
  function xe() {
    return i === "/" && e === "*" ? (o.push(i), d(o.join("")), s = x, t + 1) : (o.push(i), e = i, t + 1);
  }
  function Te() {
    if (e === "." && /\d/.test(i)) return s = P, t;
    if (e === "/" && i === "*") return s = I, t;
    if (e === "/" && i === "/") return s = $, t;
    if (i === "." && o.length) {
      for (; O(o); ) ;
      return s = P, t;
    }
    if (i === ";" || i === ")" || i === "(") {
      if (o.length) for (; O(o); ) ;
      return d(i), s = x, t + 1;
    }
    var f = o.length === 2 && i !== "=";
    if (/[\w_\d\s]/.test(i) || f) {
      for (; O(o); ) ;
      return s = x, t;
    }
    return o.push(i), e = i, t + 1;
  }
  function O(f) {
    for (var S, F, G = 0; ; ) {
      if (S = ee.indexOf(f.slice(0, f.length + G).join("")), F = ee[S], S === -1) {
        if (G-- + f.length > 0) continue;
        F = f.slice(0, 1).join("");
      }
      return d(F), l += F.length, (o = o.slice(F.length)).length;
    }
  }
  function Ee() {
    return /[^a-fA-F0-9]/.test(i) ? (d(o.join("")), s = x, t) : (o.push(i), e = i, t + 1);
  }
  function be() {
    return i === "." || /[eE]/.test(i) ? (o.push(i), s = P, e = i, t + 1) : i === "x" && o.length === 1 && o[0] === "0" ? (s = oe, o.push(i), e = i, t + 1) : /[^\d]/.test(i) ? (d(o.join("")), s = x, t) : (o.push(i), e = i, t + 1);
  }
  function Ae() {
    return i === "f" && (o.push(i), e = i, t += 1), /[eE]/.test(i) || i === "-" && /[eE]/.test(e) ? (o.push(i), e = i, t + 1) : /[^\d]/.test(i) ? (d(o.join("")), s = x, t) : (o.push(i), e = i, t + 1);
  }
  function Se() {
    if (/[^\d\w_]/.test(i)) {
      var f = o.join("");
      return s = ke.indexOf(f) > -1 ? ze : Ie.indexOf(f) > -1 ? je : He, d(o.join("")), s = x, t;
    }
    return o.push(i), e = i, t + 1;
  }
}
function Ye(i) {
  var e = Ge(), r = [];
  return r = (r = r.concat(e(i))).concat(e(null));
}
function Ke(i) {
  return Ye(i);
}
function qe(i) {
  return i.map((e) => e.type !== "eof" ? e.data : "").join("");
}
const H = /* @__PURE__ */ new Set(["GL_OES_standard_derivatives", "GL_EXT_frag_depth", "GL_EXT_draw_buffers", "GL_EXT_shader_texture_lod"]);
function We(i, e = "100", r = "300 es") {
  const t = /^\s*#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;
  for (const n of i) if (n.type === "preprocessor") {
    const s = t.exec(n.data);
    if (s) {
      const o = s[1].replaceAll(/\s{2,}/g, " ");
      if (o === r) return o;
      if (o === e) return n.data = "#version " + r, e;
      throw new Error("unknown glsl version: " + o);
    }
  }
  return i.splice(0, 0, { type: "preprocessor", data: "#version " + r }, { type: "whitespace", data: `
` }), null;
}
function Qe(i, e) {
  for (let r = e - 1; r >= 0; r--) {
    const t = i[r];
    if (t.type !== "whitespace" && t.type !== "block-comment") {
      if (t.type !== "keyword") break;
      if (t.data === "attribute" || t.data === "in") return !0;
    }
  }
  return !1;
}
function w(i, e, r, t) {
  t = t || r;
  for (const n of i) if (n.type === "ident" && n.data === r)
    return t in e ? e[t]++ : e[t] = 0, w(i, e, t + "_" + e[t], t);
  return r;
}
function ue(i, e, r = "afterVersion") {
  function t(a, c) {
    for (let l = c; l < a.length; l++) {
      const _ = a[l];
      if (_.type === "operator" && _.data === ";") return l;
    }
    return null;
  }
  function n(a) {
    let c = -1, l = 0, _ = -1;
    for (let p = 0; p < a.length; p++) {
      const g = a[p];
      if (g.type === "preprocessor" && (/#(if|ifdef|ifndef)\s+.+/.test(g.data) ? ++l : /#endif\s*.*/.test(g.data) && --l), r !== "afterVersion" && r !== "afterPrecision" || g.type === "preprocessor" && g.data.startsWith("#version") && (_ = Math.max(_, p)), r === "afterPrecision" && g.type === "keyword" && g.data === "precision") {
        const d = t(a, p);
        if (d === null) throw new Error("precision statement not followed by any semicolons!");
        _ = Math.max(_, d);
      }
      c < _ && l === 0 && (c = p);
    }
    return c + 1;
  }
  const s = { data: `
`, type: "whitespace" }, o = (a) => a < i.length && /[^\r\n]$/.test(i[a].data);
  let h = n(i);
  o(h - 1) && i.splice(h++, 0, s);
  for (const a of e) i.splice(h++, 0, a);
  o(h - 1) && o(h) && i.splice(h, 0, s);
}
function Ze(i, e, r, t = "lowp") {
  ue(i, [{ type: "keyword", data: "out" }, { type: "whitespace", data: " " }, { type: "keyword", data: t }, { type: "whitespace", data: " " }, { type: "keyword", data: r }, { type: "whitespace", data: " " }, { type: "ident", data: e }, { type: "operator", data: ";" }], "afterPrecision");
}
function Je(i, e, r, t, n = "lowp") {
  ue(i, [{ type: "keyword", data: "layout" }, { type: "operator", data: "(" }, { type: "keyword", data: "location" }, { type: "whitespace", data: " " }, { type: "operator", data: "=" }, { type: "whitespace", data: " " }, { type: "integer", data: t.toString() }, { type: "operator", data: ")" }, { type: "whitespace", data: " " }, { type: "keyword", data: "out" }, { type: "whitespace", data: " " }, { type: "keyword", data: n }, { type: "whitespace", data: " " }, { type: "keyword", data: r }, { type: "whitespace", data: " " }, { type: "ident", data: e }, { type: "operator", data: ";" }], "afterPrecision");
}
function et(i, e) {
  let r, t, n = -1;
  for (let s = e; s < i.length; s++) {
    const o = i[s];
    if (o.type === "operator" && (o.data === "[" && (r = s), o.data === "]")) {
      t = s;
      break;
    }
    o.type === "integer" && (n = parseInt(o.data, 10));
  }
  return r && t && i.splice(r, t - r + 1), n;
}
function ae(i, e) {
  if (i.startsWith("#version 300")) return i;
  const r = Ke(i);
  if (We(r, "100", "300 es") === "300 es") return i;
  let t = null, n = null;
  const s = {}, o = {};
  for (let h = 0; h < r.length; ++h) {
    const a = r[h];
    switch (a.type) {
      case "keyword":
        e === T.VERTEX_SHADER && a.data === "attribute" ? a.data = "in" : a.data === "varying" && (a.data = e === T.VERTEX_SHADER ? "out" : "in");
        break;
      case "builtin":
        if (/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(a.data.trim()) && (a.data = a.data.replaceAll(/(2D|Cube|EXT)/g, "")), e === T.FRAGMENT_SHADER && a.data === "gl_FragColor" && (t || (t = w(r, s, "fragColor"), Ze(r, t, "vec4")), a.data = t), e === T.FRAGMENT_SHADER && a.data === "gl_FragData") {
          const c = et(r, h + 1), l = w(r, s, "fragData");
          Je(r, l, "vec4", c, "mediump"), a.data = l;
        } else e === T.FRAGMENT_SHADER && a.data === "gl_FragDepthEXT" && (n || (n = w(r, s, "gl_FragDepth")), a.data = n);
        break;
      case "ident":
        if ($e.includes(a.data)) {
          if (e === T.VERTEX_SHADER && Qe(r, h)) throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");
          a.data in o || (o[a.data] = w(r, s, a.data)), a.data = o[a.data];
        }
    }
  }
  for (let h = r.length - 1; h >= 0; --h) {
    const a = r[h];
    if (a.type === "preprocessor") {
      const c = a.data.match(/#extension\s+(.*):/);
      if (c?.[1] && H.has(c[1].trim())) {
        const p = r[h + 1];
        r.splice(h, p && p.type === "whitespace" ? 2 : 1);
      }
      const l = a.data.match(/#ifdef\s+(.*)/);
      l?.[1] && H.has(l[1].trim()) && (a.data = "#if 1");
      const _ = a.data.match(/#ifndef\s+(.*)/);
      _?.[1] && H.has(_[1].trim()) && (a.data = "#if 0");
    }
  }
  return tt(i, qe(r));
}
function tt(i, e) {
  return e;
}
const rt = 4294967295;
class ut {
  constructor(e, r, t, n, s = /* @__PURE__ */ new Map(), o = []) {
    this._context = e, this._locations = n, this._uniformBlockBindings = s, this._transformFeedbackVaryings = o, this._refCount = 1, this._compiled = !1, this._linesOfCode = 0, this._nameToUniformLocation = /* @__PURE__ */ new Map(), this._nameToUniform1 = /* @__PURE__ */ new Map(), this._nameToUniform1v = /* @__PURE__ */ new Map(), this._nameToUniform2 = /* @__PURE__ */ new Map(), this._nameToUniform3 = /* @__PURE__ */ new Map(), this._nameToUniform4 = /* @__PURE__ */ new Map(), this._nameToUniformMatrix3 = /* @__PURE__ */ new Map(), this._nameToUniformMatrix4 = /* @__PURE__ */ new Map(), e || console.error("RenderingContext isn't initialized!"), r.length === 0 && console.error("Shaders source should not be empty!"), r = ae(r, T.VERTEX_SHADER), t = ae(t, T.FRAGMENT_SHADER), this._vShader = he(this._context, T.VERTEX_SHADER, r), this._fShader = he(this._context, T.FRAGMENT_SHADER, t), st.enabled && (this._linesOfCode = r.match(/\n/g).length + t.match(/\n/g).length + 2, this._context.instanceCounter.increment(m.LinesOfCode, this._vShader, this._linesOfCode)), this._vShader && this._fShader || console.error("Error loading shaders!"), this._context.instanceCounter.increment(m.Shader, this), j() && (this.vertexShader = r, this.fragmentShader = t), this.usedMemory = r.length + t.length;
    const h = this._context.gl, a = h.createProgram();
    h.attachShader(a, this._vShader), h.attachShader(a, this._fShader), this._locations.forEach((c, l) => h.bindAttribLocation(a, c, l)), this._transformFeedbackVaryings?.length && h.transformFeedbackVaryings(a, this._transformFeedbackVaryings, h.SEPARATE_ATTRIBS), h.linkProgram(a), j() && !h.getProgramParameter(a, h.LINK_STATUS) && console.error(`Could not link shader
validated: ${h.getProgramParameter(a, h.VALIDATE_STATUS)}, gl error ${h.getError()}, vertex: ${h.getShaderParameter(this._vShader, h.COMPILE_STATUS)}, fragment: ${h.getShaderParameter(this._fShader, h.COMPILE_STATUS)}, info log: ${h.getProgramInfoLog(a)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`);
    for (const [c, l] of this._uniformBlockBindings) {
      const _ = h.getUniformBlockIndex(a, c);
      _ < rt && h.uniformBlockBinding(a, _, l);
    }
    this._glName = a, this._context.instanceCounter.increment(m.Program, this);
  }
  get glName() {
    return this._glName;
  }
  get hasGLName() {
    return this._glName != null;
  }
  get hasTransformFeedbackVaryings() {
    return !!this._transformFeedbackVaryings?.length;
  }
  get compiled() {
    if (this._compiled) return !0;
    const e = this._context.gl.getExtension("KHR_parallel_shader_compile");
    return e == null || this.glName == null ? (this._compiled = !0, !0) : (this._compiled = !!this._context.gl.getProgramParameter(this.glName, e.COMPLETION_STATUS_KHR), this._compiled);
  }
  dispose() {
    if (--this._refCount > 0) return;
    const e = this._context.gl, r = this._context.instanceCounter;
    this._nameToUniformLocation.forEach((t) => t && r.decrement(m.Uniform, t)), this._nameToUniformLocation.clear(), this._vShader && (this._linesOfCode > 0 && (r.decrement(m.LinesOfCode, this._vShader, this._linesOfCode), this._linesOfCode = 0), e.deleteShader(this._vShader), this._vShader = null, r.decrement(m.Shader, this)), this._fShader && (e.deleteShader(this._fShader), this._fShader = null), this._glName && (e.deleteProgram(this._glName), this._glName = null, r.decrement(m.Program, this));
  }
  ref() {
    ++this._refCount;
  }
  _getUniformLocation(e) {
    const r = this._nameToUniformLocation.get(e);
    if (r !== void 0) return r;
    if (this.glName) {
      const t = this._context.gl.getUniformLocation(this.glName, e);
      return this._nameToUniformLocation.set(e, t), t && this._context.instanceCounter.increment(m.Uniform, t), t;
    }
    return null;
  }
  hasUniform(e) {
    return this._getUniformLocation(e) != null;
  }
  setUniform1i(e, r) {
    const t = this._nameToUniform1.get(e);
    t !== void 0 && r === t || (this._context.gl.uniform1i(this._getUniformLocation(e), r), this._nameToUniform1.set(e, r));
  }
  setUniform1iv(e, r) {
    b(this._nameToUniform1v, e, r) && this._context.gl.uniform1iv(this._getUniformLocation(e), r);
  }
  setUniform2iv(e, r) {
    b(this._nameToUniform2, e, r) && this._context.gl.uniform2iv(this._getUniformLocation(e), r);
  }
  setUniform3iv(e, r) {
    b(this._nameToUniform3, e, r) && this._context.gl.uniform3iv(this._getUniformLocation(e), r);
  }
  setUniform4iv(e, r) {
    b(this._nameToUniform4, e, r) && this._context.gl.uniform4iv(this._getUniformLocation(e), r);
  }
  setUniform1f(e, r) {
    const t = this._nameToUniform1.get(e);
    t !== void 0 && r === t || (this._context.gl.uniform1f(this._getUniformLocation(e), r), this._nameToUniform1.set(e, r));
  }
  setUniform1fv(e, r) {
    b(this._nameToUniform1v, e, r) && this._context.gl.uniform1fv(this._getUniformLocation(e), r);
  }
  setUniform2f(e, r, t) {
    const n = this._nameToUniform2.get(e);
    n === void 0 ? (this._context.gl.uniform2f(this._getUniformLocation(e), r, t), this._nameToUniform2.set(e, [r, t])) : r === n[0] && t === n[1] || (this._context.gl.uniform2f(this._getUniformLocation(e), r, t), n[0] = r, n[1] = t);
  }
  setUniform2fv(e, r) {
    b(this._nameToUniform2, e, r) && this._context.gl.uniform2fv(this._getUniformLocation(e), r);
  }
  setUniform3f(e, r, t, n) {
    const s = this._nameToUniform3.get(e);
    s === void 0 ? (this._context.gl.uniform3f(this._getUniformLocation(e), r, t, n), this._nameToUniform3.set(e, [r, t, n])) : r === s[0] && t === s[1] && n === s[2] || (this._context.gl.uniform3f(this._getUniformLocation(e), r, t, n), s[0] = r, s[1] = t, s[2] = n);
  }
  setUniform3fv(e, r) {
    const t = this._getUniformLocation(e);
    t != null && b(this._nameToUniform3, e, r) && this._context.gl.uniform3fv(t, r);
  }
  setUniform4f(e, r, t, n, s) {
    const o = this._nameToUniform4.get(e);
    o === void 0 ? (this._context.gl.uniform4f(this._getUniformLocation(e), r, t, n, s), this._nameToUniform4.set(e, [r, t, n, s])) : o !== void 0 && r === o[0] && t === o[1] && n === o[2] && s === o[3] || (this._context.gl.uniform4f(this._getUniformLocation(e), r, t, n, s), o[0] = r, o[1] = t, o[2] = n, o[3] = s);
  }
  setUniform4fv(e, r) {
    const t = this._getUniformLocation(e);
    t != null && b(this._nameToUniform4, e, r) && this._context.gl.uniform4fv(t, r);
  }
  setUniformMatrix3fv(e, r, t = !1) {
    const n = this._getUniformLocation(e);
    n != null && b(this._nameToUniformMatrix3, e, r) && this._context.gl.uniformMatrix3fv(n, t, r);
  }
  setUniformMatrix4fv(e, r, t = !1) {
    const n = this._getUniformLocation(e);
    n != null && b(this._nameToUniformMatrix4, e, r) && this._context.gl.uniformMatrix4fv(n, t, r);
  }
  stop() {
  }
}
function he(i, e, r) {
  const t = i.gl, n = t.createShader(e);
  return t.shaderSource(n, r), t.compileShader(n), j() && !t.getShaderParameter(n, t.COMPILE_STATUS) && (console.error("Compile error in ".concat(e === T.VERTEX_SHADER ? "vertex" : "fragment", " shader")), console.error(t.getShaderInfoLog(n)), console.error(it(r))), n;
}
function it(i) {
  let e = 2;
  return i.replaceAll(`
`, () => `
` + nt(e++) + ":");
}
function nt(i) {
  return i >= 1e3 ? i.toString() : ("  " + i).slice(-3);
}
function b(i, e, r) {
  const t = i.get(e);
  if (!t) return i.set(e, Array.from(r)), !0;
  const n = r.length;
  if (t.length !== n) return i.set(e, Array.from(r)), !0;
  for (let s = 0; s < n; ++s) {
    const o = r[s];
    if (t[s] !== o) {
      for (t[s] = o; s < n; ++s) t[s] = r[s];
      return !0;
    }
  }
  return !1;
}
const st = { enabled: !1 };
export {
  Be as E,
  Ce as c,
  ct as i,
  ut as r,
  Ne as s
};
//# sourceMappingURL=Program-CfcTPgr7.js.map
