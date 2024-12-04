import { a9 as z, s as p, D as Y } from "./main-lm2DHsZh.js";
import { C as M, c as T, P as i, B as x, G as u, M as I, U as G, L as m, D as k, V as B } from "./enums-DDkmfb-t.js";
const K = () => Y.getLogger("esri.views.webgl.checkWebGLError");
function q(t, e) {
  switch (e) {
    case t.INVALID_ENUM:
      return "Invalid Enum. An unacceptable value has been specified for an enumerated argument.";
    case t.INVALID_VALUE:
      return "Invalid Value. A numeric argument is out of range.";
    case t.INVALID_OPERATION:
      return "Invalid Operation. The specified command is not allowed for the current state.";
    case t.INVALID_FRAMEBUFFER_OPERATION:
      return "Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";
    case t.OUT_OF_MEMORY:
      return "Out of memory. Not enough memory is left to execute the command.";
    case t.CONTEXT_LOST_WEBGL:
      return "WebGL context has been lost";
    default:
      return "Unknown error";
  }
}
const H = !!z("enable-feature:webgl-debug");
function V() {
  return H;
}
function ce() {
  return H;
}
function D(t) {
  if (V()) {
    const e = t.getError();
    if (e) {
      const r = q(t, e), n = new Error().stack;
      K().error(new p("webgl-error", "WebGL error occurred", { message: r, stack: n }));
    }
  }
}
var O;
(function(t) {
  t[t.Texture = 0] = "Texture", t[t.RenderBuffer = 1] = "RenderBuffer";
})(O || (O = {}));
function j(t) {
  switch (t) {
    case M.BYTE:
    case M.UNSIGNED_BYTE:
      return 1;
    case M.SHORT:
    case M.UNSIGNED_SHORT:
    case M.HALF_FLOAT:
      return 2;
    case M.FLOAT:
    case M.INT:
    case M.UNSIGNED_INT:
      return 4;
  }
}
function Z(t) {
  const e = t.gl;
  switch (e.getError()) {
    case e.NO_ERROR:
      return null;
    case e.INVALID_ENUM:
      return "An unacceptable value has been specified for an enumerated argument";
    case e.INVALID_VALUE:
      return "An unacceptable value has been specified for an argument";
    case e.INVALID_OPERATION:
      return "The specified command is not allowed for the current state";
    case e.INVALID_FRAMEBUFFER_OPERATION:
      return "The currently bound framebuffer is not framebuffer complete";
    case e.OUT_OF_MEMORY:
      return "Not enough memory is left to execute the command";
    case e.CONTEXT_LOST_WEBGL:
      return "WebGL context is lost";
  }
  return "Unknown error";
}
function le(t, e, r, n, s = 0) {
  const o = t.gl;
  t.bindBuffer(r);
  for (const a of n) {
    const _ = e.get(a.name);
    if (_ === void 0) {
      console.warn(`There is no location for vertex attribute '${a.name}' defined.`);
      continue;
    }
    const l = s * a.stride;
    if (a.count <= 4) o.vertexAttribPointer(_, a.count, a.type, a.normalized, a.stride, a.offset + l), o.enableVertexAttribArray(_), a.divisor > 0 && t.gl.vertexAttribDivisor(_, a.divisor);
    else if (a.count === 9) for (let c = 0; c < 3; c++) o.vertexAttribPointer(_ + c, 3, a.type, a.normalized, a.stride, a.offset + 12 * c + l), o.enableVertexAttribArray(_ + c), a.divisor > 0 && t.gl.vertexAttribDivisor(_ + c, a.divisor);
    else if (a.count === 16) for (let c = 0; c < 4; c++) o.vertexAttribPointer(_ + c, 4, a.type, a.normalized, a.stride, a.offset + 16 * c + l), o.enableVertexAttribArray(_ + c), a.divisor > 0 && t.gl?.vertexAttribDivisor(_ + c, a.divisor);
    else console.error("Unsupported vertex attribute element count: " + a.count);
    if (V()) {
      const c = Z(t), d = j(a.type), h = a.offset, E = Math.round(d / h) !== d / h ? `. Offset not a multiple of stride. DataType requires ${d} bytes, but descriptor has an offset of ${h}` : "";
      c && console.error(`Unable to bind vertex attribute "${a.name}" with baseInstanceOffset ${l}${E}:`, c, a);
    }
  }
}
function J(t) {
  switch (t) {
    case u.ALPHA:
    case u.LUMINANCE:
    case u.RED:
    case u.RED_INTEGER:
    case i.R8:
    case i.R8I:
    case i.R8UI:
    case i.R8_SNORM:
    case x.STENCIL_INDEX8:
      return 1;
    case u.LUMINANCE_ALPHA:
    case u.RG:
    case u.RG_INTEGER:
    case i.RGBA4:
    case i.R16F:
    case i.R16I:
    case i.R16UI:
    case i.RG8:
    case i.RG8I:
    case i.RG8UI:
    case i.RG8_SNORM:
    case i.RGB565:
    case i.RGB5_A1:
    case x.DEPTH_COMPONENT16:
      return 2;
    case u.DEPTH_COMPONENT:
    case u.RGB:
    case u.RGB_INTEGER:
    case i.RGB8:
    case i.RGB8I:
    case i.RGB8UI:
    case i.RGB8_SNORM:
    case i.SRGB8:
    case x.DEPTH_COMPONENT24:
      return 3;
    case u.DEPTH_STENCIL:
    case u.DEPTH24_STENCIL8:
    case u.RGBA:
    case u.RGBA_INTEGER:
    case i.RGBA8:
    case i.R32F:
    case i.R11F_G11F_B10F:
    case i.RG16F:
    case i.R32I:
    case i.R32UI:
    case i.RG16I:
    case i.RG16UI:
    case i.RGBA8I:
    case i.RGBA8UI:
    case i.RGBA8_SNORM:
    case i.SRGB8_ALPHA8:
    case i.RGB9_E5:
    case i.RGB10_A2UI:
    case i.RGB10_A2:
    case x.DEPTH_STENCIL:
    case x.DEPTH_COMPONENT32F:
    case x.DEPTH24_STENCIL8:
      return 4;
    case x.DEPTH32F_STENCIL8:
      return 5;
    case i.RGB16F:
    case i.RGB16I:
    case i.RGB16UI:
      return 6;
    case i.RG32F:
    case i.RG32I:
    case i.RG32UI:
    case i.RGBA16F:
    case i.RGBA16I:
    case i.RGBA16UI:
      return 8;
    case i.RGB32F:
    case i.RGB32I:
    case i.RGB32UI:
      return 12;
    case i.RGBA32F:
    case i.RGBA32I:
    case i.RGBA32UI:
      return 16;
    case T.COMPRESSED_RGB_S3TC_DXT1_EXT:
    case T.COMPRESSED_RGBA_S3TC_DXT1_EXT:
      return 0.5;
    case T.COMPRESSED_RGBA_S3TC_DXT3_EXT:
    case T.COMPRESSED_RGBA_S3TC_DXT5_EXT:
      return 1;
    case T.COMPRESSED_R11_EAC:
    case T.COMPRESSED_SIGNED_R11_EAC:
    case T.COMPRESSED_RGB8_ETC2:
    case T.COMPRESSED_SRGB8_ETC2:
    case T.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:
    case T.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:
      return 0.5;
    case T.COMPRESSED_RG11_EAC:
    case T.COMPRESSED_SIGNED_RG11_EAC:
    case T.COMPRESSED_RGBA8_ETC2_EAC:
    case T.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:
      return 1;
  }
  return 0;
}
class Q {
  constructor(e = 0, r = e) {
    this.width = e, this.height = r, this.target = I.TEXTURE_2D, this.pixelFormat = u.RGBA, this.dataType = G.UNSIGNED_BYTE, this.samplingMode = m.LINEAR, this.wrapMode = k.REPEAT, this.maxAnisotropy = 1, this.flipped = !1, this.hasMipmap = !1, this.isOpaque = !1, this.unpackAlignment = 4, this.preMultiplyAlpha = !1, this.depth = 1, this.isImmutable = !1;
  }
}
function ee(t) {
  return t.width <= 0 || t.height <= 0 ? 0 : Math.round(t.width * t.height * (t.hasMipmap ? 4 / 3 : 1) * (t.internalFormat == null ? 4 : J(t.internalFormat)));
}
class F extends Q {
  constructor(e, r) {
    switch (super(), this.context = e, Object.assign(this, r), this.internalFormat) {
      case i.R16F:
      case i.R16I:
      case i.R16UI:
      case i.R32F:
      case i.R32I:
      case i.R32UI:
      case i.R8_SNORM:
      case i.R8:
      case i.R8I:
      case i.R8UI:
        this.pixelFormat = u.RED;
    }
  }
  static validate(e, r) {
    return new F(e, r);
  }
}
const C = 4;
let te = class g {
  constructor(e, r = null, n = null) {
    if (this.type = O.Texture, this._glName = null, this._samplingModeDirty = !1, this._wrapModeDirty = !1, this._wasImmutablyAllocated = !1, "context" in e) this._descriptor = e, n = r;
    else {
      const s = F.validate(e, r);
      if (!s) throw new p("Texture descriptor invalid");
      this._descriptor = s;
    }
    this._descriptor.target === I.TEXTURE_CUBE_MAP ? this._setDataCubeMap(n) : this.setData(n);
  }
  get glName() {
    return this._glName;
  }
  get descriptor() {
    return this._descriptor;
  }
  get usedMemory() {
    return ee(this._descriptor);
  }
  get isDirty() {
    return this._samplingModeDirty || this._wrapModeDirty;
  }
  dispose() {
    this._glName && this._descriptor.context.instanceCounter.decrement(B.Texture, this), this._descriptor.context.gl && this._glName && (this._descriptor.context.unbindTexture(this), this._descriptor.context.gl.deleteTexture(this._glName), this._glName = null);
  }
  release() {
    this.dispose();
  }
  resize(e, r) {
    const n = this._descriptor;
    if (n.width !== e || n.height !== r) {
      if (this._wasImmutablyAllocated) throw new p("Immutable textures can't be resized!");
      n.width = e, n.height = r, this._descriptor.target === I.TEXTURE_CUBE_MAP ? this._setDataCubeMap(null) : this.setData(null);
    }
  }
  _setDataCubeMap(e = null) {
    for (let r = I.TEXTURE_CUBE_MAP_POSITIVE_X; r <= I.TEXTURE_CUBE_MAP_NEGATIVE_Z; r++) this._setData(e, r);
  }
  setData(e) {
    this._setData(e);
  }
  _setData(e, r) {
    if (!this._descriptor.context?.gl) return;
    const n = this._descriptor.context.gl;
    D(n), this._glName || (this._glName = n.createTexture(), this._glName && this._descriptor.context.instanceCounter.increment(B.Texture, this)), e === void 0 && (e = null);
    const s = this._descriptor, o = r ?? s.target, a = S(o);
    e === null && (s.width = s.width || C, s.height = s.height || C, a && (s.depth = s.depth ?? 1));
    const _ = this._descriptor.context.bindTexture(this, g.TEXTURE_UNIT_FOR_UPDATES);
    this._descriptor.context.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES), U(s), this._configurePixelStorage(), D(n);
    const l = this._deriveInternalFormat();
    if (v(e)) {
      let c = "width" in e ? e.width : e.codedWidth, d = "height" in e ? e.height : e.codedHeight;
      const h = 1;
      e instanceof HTMLVideoElement && (c = e.videoWidth, d = e.videoHeight), s.width && s.height, a && s.depth, s.isImmutable && !this._wasImmutablyAllocated && this._texStorage(o, l, s.hasMipmap, c, d, h), this._texImage(o, 0, l, c, d, h, e), D(n), s.hasMipmap && this.generateMipmap(), s.width || (s.width = c), s.height || (s.height = d), a && !s.depth && (s.depth = h);
    } else {
      const { width: c, height: d, depth: h } = s;
      if (c == null || d == null) throw new p("Width and height must be specified!");
      if (a && h == null) throw new p("Depth must be specified!");
      if (s.isImmutable && !this._wasImmutablyAllocated && this._texStorage(o, l, s.hasMipmap, c, d, h), b(e)) {
        const E = e.levels, R = X(o, c, d, h), N = Math.min(R - 1, E.length - 1);
        n.texParameteri(s.target, this._descriptor.context.gl.TEXTURE_MAX_LEVEL, N);
        const f = l;
        if (!ie(f)) throw new p("Attempting to use compressed data with an uncompressed format!");
        this._forEachMipmapLevel((A, P, w, $) => {
          const W = E[Math.min(A, E.length - 1)];
          this._compressedTexImage(o, A, f, P, w, $, W);
        }, N);
      } else this._texImage(o, 0, l, c, d, h, e), D(n), s.hasMipmap && this.generateMipmap();
    }
    L(n, this._descriptor), y(n, this._descriptor), re(this._descriptor.context, this._descriptor), D(n), this._descriptor.context.bindTexture(_, g.TEXTURE_UNIT_FOR_UPDATES);
  }
  updateData(e, r, n, s, o, a, _ = 0) {
    a || console.error("An attempt to use uninitialized data!"), this._glName || console.error("An attempt to update uninitialized texture!");
    const l = this._descriptor, c = this._deriveInternalFormat(), { context: d, pixelFormat: h, dataType: E, target: R, isImmutable: N } = l;
    if (N && !this._wasImmutablyAllocated) throw new p("Cannot update immutable texture before allocation!");
    const f = d.bindTexture(this, g.TEXTURE_UNIT_FOR_UPDATES, !0);
    (r < 0 || n < 0 || r + s > l.width || n + o > l.height) && console.error("An attempt to update out of bounds of the texture!"), this._configurePixelStorage();
    const { gl: A } = d;
    _ && A.pixelStorei(A.UNPACK_SKIP_ROWS, _), v(a) ? A.texSubImage2D(R, e, r, n, s, o, h, E, a) : b(a) ? A.compressedTexSubImage2D(R, e, r, n, s, o, c, a.levels[e]) : A.texSubImage2D(R, e, r, n, s, o, h, E, a), _ && A.pixelStorei(A.UNPACK_SKIP_ROWS, 0), d.bindTexture(f, g.TEXTURE_UNIT_FOR_UPDATES);
  }
  updateData3D(e, r, n, s, o, a, _, l) {
    l || console.error("An attempt to use uninitialized data!"), this._glName || console.error("An attempt to update uninitialized texture!");
    const c = this._descriptor, d = this._deriveInternalFormat(), { context: h, pixelFormat: E, dataType: R, isImmutable: N, target: f } = c;
    if (N && !this._wasImmutablyAllocated) throw new p("Cannot update immutable texture before allocation!");
    S(f) || console.warn("Attempting to set 3D texture data on a non-3D texture");
    const A = h.bindTexture(this, g.TEXTURE_UNIT_FOR_UPDATES);
    h.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES), (r < 0 || n < 0 || s < 0 || r + o > c.width || n + a > c.height || s + _ > c.depth) && console.error("An attempt to update out of bounds of the texture!"), this._configurePixelStorage();
    const { gl: P } = h;
    if (b(l)) l = l.levels[e], P.compressedTexSubImage3D(f, e, r, n, s, o, a, _, d, l);
    else {
      const w = l;
      P.texSubImage3D(f, e, r, n, s, o, a, _, E, R, w);
    }
    h.bindTexture(A, g.TEXTURE_UNIT_FOR_UPDATES);
  }
  generateMipmap() {
    const e = this._descriptor;
    if (!e.hasMipmap) {
      if (this._wasImmutablyAllocated) throw new p("Cannot add mipmaps to immutable texture after allocation");
      e.hasMipmap = !0, this._samplingModeDirty = !0, U(e);
    }
    e.samplingMode === m.LINEAR ? (this._samplingModeDirty = !0, e.samplingMode = m.LINEAR_MIPMAP_NEAREST) : e.samplingMode === m.NEAREST && (this._samplingModeDirty = !0, e.samplingMode = m.NEAREST_MIPMAP_NEAREST);
    const r = this._descriptor.context.bindTexture(this, g.TEXTURE_UNIT_FOR_UPDATES);
    this._descriptor.context.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES), this._descriptor.context.gl.generateMipmap(e.target), this._descriptor.context.bindTexture(r, g.TEXTURE_UNIT_FOR_UPDATES);
  }
  clearMipmap() {
    const e = this._descriptor;
    if (e.hasMipmap) {
      if (this._wasImmutablyAllocated) throw new p("Cannot delete mipmaps to immutable texture after allocation");
      e.hasMipmap = !1, this._samplingModeDirty = !0, U(e);
    }
    e.samplingMode === m.LINEAR_MIPMAP_NEAREST ? (this._samplingModeDirty = !0, e.samplingMode = m.LINEAR) : e.samplingMode === m.NEAREST_MIPMAP_NEAREST && (this._samplingModeDirty = !0, e.samplingMode = m.NEAREST);
  }
  setSamplingMode(e) {
    e !== this._descriptor.samplingMode && (this._descriptor.samplingMode = e, this._samplingModeDirty = !0);
  }
  setWrapMode(e) {
    e !== this._descriptor.wrapMode && (this._descriptor.wrapMode = e, U(this._descriptor), this._wrapModeDirty = !0);
  }
  applyChanges() {
    const e = this._descriptor, r = e.context.gl;
    this._samplingModeDirty && (L(r, e), this._samplingModeDirty = !1), this._wrapModeDirty && (y(r, e), this._wrapModeDirty = !1);
  }
  _deriveInternalFormat() {
    if (this._descriptor.internalFormat != null) return this._descriptor.internalFormat === u.DEPTH_STENCIL && (this._descriptor.internalFormat = u.DEPTH24_STENCIL8), this._descriptor.internalFormat;
    switch (this._descriptor.dataType) {
      case G.FLOAT:
        switch (this._descriptor.pixelFormat) {
          case u.RGBA:
            return this._descriptor.internalFormat = i.RGBA32F;
          case u.RGB:
            return this._descriptor.internalFormat = i.RGB32F;
          default:
            throw new p("Unable to derive format");
        }
      case G.UNSIGNED_BYTE:
        switch (this._descriptor.pixelFormat) {
          case u.RGBA:
            return this._descriptor.internalFormat = i.RGBA8;
          case u.RGB:
            return this._descriptor.internalFormat = i.RGB8;
        }
    }
    return this._descriptor.internalFormat = this._descriptor.pixelFormat === u.DEPTH_STENCIL ? u.DEPTH24_STENCIL8 : this._descriptor.pixelFormat;
  }
  _configurePixelStorage() {
    const e = this._descriptor.context.gl, { unpackAlignment: r, flipped: n, preMultiplyAlpha: s } = this._descriptor;
    e.pixelStorei(e.UNPACK_ALIGNMENT, r), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, n ? 1 : 0), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s ? 1 : 0);
  }
  _texStorage(e, r, n, s, o, a) {
    const { gl: _ } = this._descriptor.context;
    if (!se(r)) throw new p("Immutable textures must have a sized internal format");
    if (!this._descriptor.isImmutable) return;
    const l = n ? X(e, s, o, a) : 1;
    if (S(e)) {
      if (a == null) throw new p("Missing depth dimension for 3D texture upload");
      _.texStorage3D(e, l, r, s, o, a);
    } else _.texStorage2D(e, l, r, s, o);
    this._wasImmutablyAllocated = !0;
  }
  _texImage(e, r, n, s, o, a, _) {
    const l = this._descriptor.context.gl, c = S(e), { isImmutable: d, pixelFormat: h, dataType: E } = this._descriptor;
    if (d) {
      if (_ != null) {
        const R = _;
        if (c) {
          if (a == null) throw new p("Missing depth dimension for 3D texture upload");
          l.texSubImage3D(e, r, 0, 0, 0, s, o, a, h, E, R);
        } else l.texSubImage2D(e, r, 0, 0, s, o, h, E, R);
      }
    } else {
      const R = _;
      if (c) {
        if (a == null) throw new p("Missing depth dimension for 3D texture upload");
        l.texImage3D(e, r, n, s, o, a, 0, h, E, R);
      } else l.texImage2D(e, r, n, s, o, 0, h, E, R);
    }
  }
  _compressedTexImage(e, r, n, s, o, a, _) {
    const l = this._descriptor.context.gl, c = S(e);
    if (this._descriptor.isImmutable) {
      if (_ != null) if (c) {
        if (a == null) throw new p("Missing depth dimension for 3D texture upload");
        l.compressedTexSubImage3D(e, r, 0, 0, 0, s, o, a, n, _);
      } else l.compressedTexSubImage2D(e, r, 0, 0, s, o, n, _);
    } else if (c) {
      if (a == null) throw new p("Missing depth dimension for 3D texture upload");
      l.compressedTexImage3D(e, r, n, s, o, a, 0, _);
    } else l.compressedTexImage2D(e, r, n, s, o, 0, _);
  }
  _forEachMipmapLevel(e, r = 1 / 0) {
    let { width: n, height: s, depth: o, hasMipmap: a, target: _ } = this._descriptor;
    const l = _ === I.TEXTURE_3D;
    if (n == null || s == null || l && o == null) throw new p("Missing texture dimensions for mipmap calculation");
    for (let c = 0; e(c, n, s, o), a && (n !== 1 || s !== 1 || l && o !== 1) && !(c >= r); ++c) n = Math.max(1, n >> 1), s = Math.max(1, s >> 1), l && (o = Math.max(1, o >> 1));
  }
};
function U(t) {
  (t.width != null && t.width < 0 || t.height != null && t.height < 0 || t.depth != null && t.depth < 0) && console.error("Negative dimension parameters are not allowed!");
}
function L(t, e) {
  let r = e.samplingMode, n = e.samplingMode;
  r === m.LINEAR_MIPMAP_NEAREST || r === m.LINEAR_MIPMAP_LINEAR ? (r = m.LINEAR, e.hasMipmap || (n = m.LINEAR)) : r !== m.NEAREST_MIPMAP_NEAREST && r !== m.NEAREST_MIPMAP_LINEAR || (r = m.NEAREST, e.hasMipmap || (n = m.NEAREST)), t.texParameteri(e.target, t.TEXTURE_MAG_FILTER, r), t.texParameteri(e.target, t.TEXTURE_MIN_FILTER, n);
}
function y(t, e) {
  typeof e.wrapMode == "number" ? (t.texParameteri(e.target, t.TEXTURE_WRAP_S, e.wrapMode), t.texParameteri(e.target, t.TEXTURE_WRAP_T, e.wrapMode)) : (t.texParameteri(e.target, t.TEXTURE_WRAP_S, e.wrapMode.s), t.texParameteri(e.target, t.TEXTURE_WRAP_T, e.wrapMode.t));
}
function re(t, e) {
  const r = t.capabilities.textureFilterAnisotropic;
  r && t.gl.texParameterf(e.target, r.TEXTURE_MAX_ANISOTROPY, e.maxAnisotropy ?? 1);
}
function se(t) {
  return t in i;
}
function ie(t) {
  return t in T;
}
function b(t) {
  return t != null && "type" in t && t.type === "compressed";
}
function ae(t) {
  return t != null && "byteLength" in t;
}
function v(t) {
  return t != null && !b(t) && !ae(t);
}
function S(t) {
  return t === I.TEXTURE_3D || t === I.TEXTURE_2D_ARRAY;
}
function X(t, e, r, n = 1) {
  let s = Math.max(e, r);
  return t === I.TEXTURE_3D && (s = Math.max(s, n)), Math.round(Math.log(s) / Math.LN2) + 1;
}
te.TEXTURE_UNIT_FOR_UPDATES = 0;
export {
  le as E,
  J as a,
  O as b,
  te as c,
  V as d,
  Q as e,
  ce as f,
  Z as o,
  j as s,
  D as u
};
//# sourceMappingURL=Texture-DhDvGrgF.js.map
