import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { dO as e, s, U as U$1, dP as F, bp as i$1, dQ as c$1, cm as n$1 } from './main-a010f0a1.js';

let c=a();function a(){return new e(50)}function u(){c=a();}async function l(e,o){if(e.resource?.href)return m(e.resource.href).then((e=>[e.width,e.height]));if(e.resource?.primitive)return null!=o?[o,o]:[256,256];throw new s("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function m(r){return U$1(r,{responseType:"image"}).then((e=>e.data))}async function f(e,o=null){if(!e.isPrimitive){const o=e.resource.href;if(!o)throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const s$1=c.get(o);if(void 0!==s$1)return s$1;const{fetch:n}=await __vitePreload(() => import('./objectResourceUtils-69533ce9.js').then(n => n.o),true?["./objectResourceUtils-69533ce9.js","./devEnvironmentUtils-1f64130b.js","./main-a010f0a1.js","./preload-helper-a4975f27.js","./main-396dead2.css","./mat3f64-3fe11525.js","./mat4f64-b32e2490.js","./BufferView-6bc7f086.js","./vec3-b1bf7d00.js","./DefaultMaterial_COLOR_GAMMA-e75004b1.js","./enums-af0bf3a9.js","./quat-f1c0563d.js","./quatf64-137a8dbb.js","./resourceUtils-bf9ad1da.js","./basicInterfaces-f85cdac5.js","./Indices-51d3264e.js","./NestedMap-7fc3349d.js","./requestImageUtils-dc0d1565.js","./orientedBoundingBox-b30aa5ca.js","./computeTranslationToOriginAndRotation-a5366d2e.js","./plane-de1d1c04.js","./triangle-d83210a1.js","./Util-27788dcb.js","./ObjectStack-df8b98f1.js","./lineSegment-c6d5abb9.js","./VertexAttribute-66b2103c.js","./Texture-046036e0.js","./InterleavedLayout-8100e89e.js","./types-e38a67d0.js","./OrderIndependentTransparency-67a8dcc4.js","./BindType-941d78d8.js","./sphere-e50567e0.js","./doublePrecisionUtils-434e21f5.js","./symbolColorUtils-84ff43ce.js","./RenderState-dde7519e.js"]:void 0,import.meta.url),a=await n(o,{disableTextures:!0}),u=F(a.referenceBoundingBox,n$1());return c.put(o,u),u}if(!e.resource?.primitive)throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const a=i$1(c$1(e.resource.primitive));if(null!=o)for(let r=0;r<a.length;r++)a[r]*=o;return F(a,n$1())}

export { u as clearBoundingBoxCache, l as computeIconLayerResourceSize, f as computeObjectLayerResourceSize };
