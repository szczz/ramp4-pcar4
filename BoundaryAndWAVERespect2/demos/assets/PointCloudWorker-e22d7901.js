import { fU as t, q, bl as f$1, eF as n, fV as E } from './main-a010f0a1.js';
import { O as O$1 } from './quat-f1c0563d.js';
import { e as e$1 } from './quatf64-137a8dbb.js';
import { t as t$1, n as n$1 } from './vec3f32-cca6bca6.js';
import { a as a$1, b as a$2, d as d$1 } from './PointCloudUniqueValueRenderer-b758830c.js';
import { w, l, c as c$2, I as I$1 } from './I3SBinaryReader-d383d1e6.js';
import { O } from './orientedBoundingBox-b30aa5ca.js';
import './preload-helper-a4975f27.js';
import './mat3f64-3fe11525.js';
import './VertexAttribute-66b2103c.js';
import './mat4f64-b32e2490.js';
import './computeTranslationToOriginAndRotation-a5366d2e.js';
import './plane-de1d1c04.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function i(t,n,l,s){const{rendererJSON:i,isRGBRenderer:u}=t;let c=null,a=null;if(n&&u)c=n;else if(n&&"pointCloudUniqueValueRenderer"===i?.type){a=a$1.fromJSON(i);const e=a.colorUniqueValueInfos;c=new Uint8Array(3*s);const r=d(a.fieldTransformType);for(let o=0;o<s;o++){const t=(r?r(n[o]):n[o])+"";for(let r=0;r<e.length;r++)if(e[r].values.includes(t)){c[3*o]=e[r].color.r,c[3*o+1]=e[r].color.g,c[3*o+2]=e[r].color.b;break}}}else if(n&&"pointCloudStretchRenderer"===i?.type){a=a$2.fromJSON(i);const e=a.stops;c=new Uint8Array(3*s);const o=d(a.fieldTransformType);for(let r=0;r<s;r++){const t=o?o(n[r]):n[r],l=e.length-1;if(t<e[0].value)c[3*r]=e[0].color.r,c[3*r+1]=e[0].color.g,c[3*r+2]=e[0].color.b;else if(t>=e[l].value)c[3*r]=e[l].color.r,c[3*r+1]=e[l].color.g,c[3*r+2]=e[l].color.b;else for(let o=1;o<e.length;o++)if(t<e[o].value){const n=(t-e[o-1].value)/(e[o].value-e[o-1].value);c[3*r]=e[o].color.r*n+e[o-1].color.r*(1-n),c[3*r+1]=e[o].color.g*n+e[o-1].color.g*(1-n),c[3*r+2]=e[o].color.b*n+e[o-1].color.b*(1-n);break}}}else if(n&&"pointCloudClassBreaksRenderer"===i?.type){a=d$1.fromJSON(i);const r=a.colorClassBreakInfos;c=new Uint8Array(3*s);const o=d(a.fieldTransformType);for(let e=0;e<s;e++){const t=o?o(n[e]):n[e];for(let o=0;o<r.length;o++)if(t>=r[o].minValue&&t<=r[o].maxValue){c[3*e]=r[o].color.r,c[3*e+1]=r[o].color.g,c[3*e+2]=r[o].color.b;break}}}else c=new Uint8Array(3*s).fill(255);if(l&&a?.colorModulation){const e=a.colorModulation.minValue,r=a.colorModulation.maxValue,o=.3;for(let t=0;t<s;t++){const n=l[t],s=n>=r?1:n<=e?o:o+(1-o)*(n-e)/(r-e);c[3*t]=s*c[3*t],c[3*t+1]=s*c[3*t+1],c[3*t+2]=s*c[3*t+2];}}return c}function u(e,r){if(null==e.encoding||""===e.encoding){const o=w(r,e);if(null==o.vertexAttributes.position)return;const l$1=l(r,o.vertexAttributes.position),s=o.header.fields,i=[s.offsetX,s.offsetY,s.offsetZ],u=[s.scaleX,s.scaleY,s.scaleZ],c=l$1.length/3,a=new Float64Array(3*c);for(let e=0;e<c;e++)a[3*e]=l$1[3*e]*u[0]+i[0],a[3*e+1]=l$1[3*e+1]*u[1]+i[1],a[3*e+2]=l$1[3*e+2]*u[2]+i[2];return a}if("lepcc-xyz"===e.encoding)return c$2(r).result}function c$1(e,r,o){return e?.attributeInfo.useElevation?r?a(r,o):null:e?.attributeInfo.storageInfo?I$1(e.attributeInfo.storageInfo,e.buffer,o):null}function a(e,r){const o=new Float64Array(r);for(let t=0;t<r;t++)o[t]=e[3*t+2];return o}function f(e,r,o,t,n){const l=e.length/3;let s=0;for(let i=0;i<l;i++){let l=!0;for(let e=0;e<t.length&&l;e++){const{filterJSON:r}=t[e],o=n[e].values[i];switch(r.type){case"pointCloudValueFilter":{const e="exclude"===r.mode;r.values.includes(o)===e&&(l=!1);break}case"pointCloudBitfieldFilter":{const e=p(r.requiredSetBits),t=p(r.requiredClearBits);(o&e)===e&&0==(o&t)||(l=!1);break}case"pointCloudReturnFilter":{const e=15&o,t=o>>>4&15,n=t>1,s=1===e,i=e===t;let u=!1;for(const o of r.includedReturns)if("last"===o&&i||"firstOfMany"===o&&s&&n||"lastOfMany"===o&&i&&n||"single"===o&&!n){u=!0;break}u||(l=!1);break}}}l&&(o[s]=i,e[3*s]=e[3*i],e[3*s+1]=e[3*i+1],e[3*s+2]=e[3*i+2],r[3*s]=r[3*i],r[3*s+1]=r[3*i+1],r[3*s+2]=r[3*i+2],s++);}return s}function d(e){switch(e){default:case null:case"none":return e=>e;case"low-four-bit":return e=>15&e;case"high-four-bit":return e=>(240&e)>>4;case"absolute-value":return e=>Math.abs(e);case"modulo-ten":return e=>e%10}}function p(e){let r=0;for(const o of e||[])r|=1<<o;return r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class c{transform(t$1){const e=this._transform(t$1),a=[e.points.buffer,e.rgb.buffer];null!=e.pointIdFilterMap&&a.push(e.pointIdFilterMap.buffer);for(const o of e.attributes)"buffer"in o.values&&t(o.values.buffer)&&o.values.buffer!==e.rgb.buffer&&a.push(o.values.buffer);return Promise.resolve({result:e,transferList:a})}_transform(r){const e=u(r.schema,r.geometryBuffer);let a=e.length/3,o=null;const i$1=new Array,f$2=c$1(r.primaryAttributeData,e,a);null!=r.primaryAttributeData&&f$2&&i$1.push({attributeInfo:r.primaryAttributeData.attributeInfo,values:f$2});const s=c$1(r.modulationAttributeData,e,a);null!=r.modulationAttributeData&&s&&i$1.push({attributeInfo:r.modulationAttributeData.attributeInfo,values:s});let c=i(r.rendererInfo,f$2,s,a);if(r.filterInfo&&r.filterInfo.length>0&&null!=r.filterAttributesData){const f$1=r.filterAttributesData.filter(q).map((t=>{const r=c$1(t,e,a),o={attributeInfo:t.attributeInfo,values:r};return i$1.push(o),o}));o=new Uint32Array(a),a=f(e,c,o,r.filterInfo,f$1);}for(const t of r.userAttributesData){const r=c$1(t,e,a);i$1.push({attributeInfo:t.attributeInfo,values:r});}3*a<c.length&&(c=new Uint8Array(c.buffer.slice(0,3*a))),this._applyElevationOffsetInPlace(e,a,r.elevationOffset);const h=this._transformCoordinates(e,a,O.fromData(r.obbData),f$1.fromJSON(r.inSR),f$1.fromJSON(r.outSR));return {obbData:r.obbData,points:h,rgb:c,attributes:i$1,pointIdFilterMap:o}}_transformCoordinates(t,r,a,n$2,u){if(!n(t,n$2,0,t,u,0,r))throw new Error("Can't reproject");const l=t$1(a.center),m=n$1(),b=n$1(),p=t$1(a.halfSize);O$1(h,a.quaternion);const c=new Float32Array(3*r);for(let e=0;e<r;e++){let r=3*e;m[0]=t[r]-l[0],m[1]=t[r+1]-l[1],m[2]=t[r+2]-l[2],E(b,m,h),p[0]=Math.max(p[0],Math.abs(b[0])),p[1]=Math.max(p[1],Math.abs(b[1])),p[2]=Math.max(p[2],Math.abs(b[2])),c[r++]=m[0],c[r++]=m[1],c[r]=m[2];}return a.halfSize=p,c}_applyElevationOffsetInPlace(t,r,e){if(0!==e)for(let a=0;a<r;a++)t[3*a+2]+=e;}}const h=e$1();function I(){return new c}

export { I as default };
