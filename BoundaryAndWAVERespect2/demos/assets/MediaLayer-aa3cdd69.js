import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { aX as e, aZ as c$1, jh as l$2, eu as K$1, J as s$1, aY as y$1, G as x$1, dW as u$3, bl as f$1, fy as o, s, h9 as c$2, lp as s$2, e4 as o$1, ey as r, lq as I$2, lr as _$2, aF as j, h7 as n, dZ as S$1, ls as r$1, aI as M$2, dj as M$3, lt as s$3, lu as u$4, lv as i, e3 as m$1, e_ as m$2, ej as n$1, gn as e$2, h as u$5, eh as m$3, el as g, ei as R, ek as Y, lw as tt, em as Z, lx as ut, U as U$2, dT as n$2, aB as V$2, ly as c$3, a4 as V$3, jV as n$3, cV as o$2, b3 as d$2, K as s$4, bu as n$4, dK as I$3, a8 as G$1, bd as U$3, fu as o$4, hc as x$2, d_ as n$5, e2 as t$1, e0 as u$6, e1 as j$2, b1 as k$1, gq as A$1, ji as s$5, ed as b$3 } from './main-a010f0a1.js';
import { p as p$2 } from './imageUtils-b26f1581.js';
import { p as p$1, j as j$1, m as m$4 } from './perspectiveUtils-2dddb3d1.js';
import { t, e as e$1 } from './mat3f64-3fe11525.js';
import { p as p$3 } from './resourceExtension-b55f485f.js';
import { o as o$3 } from './BoundsStore-40922e00.js';
import './normalizeUtilsSync-7a8053ff.js';
import './PooledRBush-c1a157ba.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let c=class extends l$2{projectOrWarn(e,r){if(null==e)return e;const{geometry:t,pending:c}=K$1(e,r);return c?null:c||t?t:(s$1.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:r}),null)}};c=e([c$1("esri.layers.support.GeoreferenceBase")],c);const a$1=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const C=e$1(),b$2=n();let _$1=class _ extends S$1{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null;}};e([y$1()],_$1.prototype,"sourcePoint",void 0),e([y$1({type:x$1})],_$1.prototype,"mapPoint",void 0),_$1=e([c$1("esri.layers.support.ControlPoint")],_$1);let T$1=class T extends(u$3(a$1)){constructor(o){super(o),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0;}readControlPoints(o$1,t$1){const r=f$1.fromJSON(t$1.spatialReference),e=t(...t$1.coefficients,1);return o$1.map((o$1=>(o(b$2,o$1.x,o$1.y),p$1(b$2,b$2,e),{sourcePoint:o$1,mapPoint:new x$1({x:b$2[0],y:b$2[1],spatialReference:r})})))}writeControlPoints(o,t,e,i){if(null!=this.transform)null!=o&&O$1(o[0])&&(t.controlPoints=o.map((o=>{const t=o.sourcePoint;return {x:t.x,y:t.y}})),t.spatialReference=o[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else {const o=new s("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:i?.layer,georeference:this});i?.messages?i.messages.push(o):s$1.getLogger(this).error(o.name,o.message);}}get coords(){if(null==this.controlPoints)return null;const o=this._updateTransform(C);if(null==o||!O$1(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return H$1(o,this.width,this.height,t)}set coords(o$1){if(null==this.controlPoints||!O$1(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if(null==(o$1=this.projectOrWarn(o$1,t)))return;const{width:r,height:e}=this,{rings:[[n,s,c,a]]}=o$1,p={sourcePoint:c$2(0,e),mapPoint:new x$1({x:n[0],y:n[1],spatialReference:t})},u={sourcePoint:c$2(0,0),mapPoint:new x$1({x:s[0],y:s[1],spatialReference:t})},m={sourcePoint:c$2(r,0),mapPoint:new x$1({x:c[0],y:c[1],spatialReference:t})},f={sourcePoint:c$2(r,e),mapPoint:new x$1({x:a[0],y:a[1],spatialReference:t})};O$1(p)&&O$1(u)&&O$1(m)&&O$1(f)&&(E$1(C,p,u,m,f),this.controlPoints=this.controlPoints.map((({sourcePoint:o$1})=>(o(b$2,o$1.x,o$1.y),p$1(b$2,b$2,C),{sourcePoint:o$1,mapPoint:new x$1({x:b$2[0],y:b$2[1],spatialReference:t})}))));}get inverseTransform(){return null==this.transform?null:s$2(e$1(),this.transform)}get transform(){return this._updateTransform()}toMap(o$1){if(null==o$1||null==this.transform||null==this.controlPoints||!O$1(this.controlPoints[0]))return null;o(b$2,o$1.x,o$1.y);const t=this.controlPoints[0].mapPoint.spatialReference;return p$1(b$2,b$2,this.transform),new x$1({x:b$2[0],y:b$2[1],spatialReference:t})}toSource(o$1){if(null==o$1||null==this.inverseTransform||null==this.controlPoints||!O$1(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return o$1=o$1.normalize(),null==(o$1=K$1(o$1,t).geometry)?null:(o(b$2,o$1.x,o$1.y),p$1(b$2,b$2,this.inverseTransform),c$2(b$2[0],b$2[1]))}toSourceNormalized(o){const t=this.toSource(o);return null!=t&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(o){const{controlPoints:t,width:r,height:e}=this;if(!(null!=t&&r>0&&e>0))return null;const[n,i,s,l]=t;if(!O$1(n))return null;const c=n.mapPoint.spatialReference,a=this._projectControlPoint(i,c),p=this._projectControlPoint(s,c),u=this._projectControlPoint(l,c);if(!a.valid||!p.valid||!u.valid)return null;if(!O$1(a.controlPoint))return null;null==o&&(o=e$1());let m=null;return m=O$1(p.controlPoint)&&O$1(u.controlPoint)?E$1(o,n,a.controlPoint,p.controlPoint,u.controlPoint):O$1(p.controlPoint)?B(o,n,a.controlPoint,p.controlPoint):q(o,n,a.controlPoint),m.every((o=>0===o))?null:m}_projectControlPoint(o,t){if(!O$1(o))return {valid:!0,controlPoint:o};const{sourcePoint:r,mapPoint:e}=o,{geometry:i,pending:s}=K$1(e,t);return s?{valid:!1,controlPoint:null}:s||i?{valid:!0,controlPoint:{sourcePoint:r,mapPoint:i}}:(s$1.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:o,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function O$1(o){return null!=o?.sourcePoint&&null!=o.mapPoint}e([y$1({type:[_$1],json:{write:{allowNull:!1,isRequired:!0}}})],T$1.prototype,"controlPoints",void 0),e([o$1("controlPoints")],T$1.prototype,"readControlPoints",null),e([r("controlPoints")],T$1.prototype,"writeControlPoints",null),e([y$1()],T$1.prototype,"coords",null),e([y$1({json:{write:!0}})],T$1.prototype,"height",void 0),e([y$1({readOnly:!0})],T$1.prototype,"inverseTransform",null),e([y$1({readOnly:!0})],T$1.prototype,"transform",null),e([y$1({json:{write:!0}})],T$1.prototype,"width",void 0),T$1=e([c$1("esri.layers.support.ControlPointsGeoreference")],T$1);const N=n(),I$1=n(),L$1=n(),M$1=n(),A=n(),G=n(),J=n(),z=n(),U$1=Math.PI/2;function k(o$1,t,r){o(o$1,r.sourcePoint.x,r.sourcePoint.y),o(t,r.mapPoint.x,r.mapPoint.y);}function q(o,t,r){return k(N,A,t),k(I$1,G,r),I$2(L$1,I$1,N,U$1),I$2(M$1,N,I$1,U$1),I$2(J,G,A,-U$1),I$2(z,A,G,-U$1),F(o,N,I$1,L$1,M$1,A,G,J,z)}function B(o,t,r,e){return k(N,A,t),k(I$1,G,r),k(L$1,J,e),_$2(M$1,N,I$1,.5),I$2(M$1,L$1,M$1,Math.PI),_$2(z,A,G,.5),I$2(z,J,z,Math.PI),F(o,N,I$1,L$1,M$1,A,G,J,z)}function E$1(o,t,r,e,n){return k(N,A,t),k(I$1,G,r),k(L$1,J,e),k(M$1,z,n),F(o,N,I$1,L$1,M$1,A,G,J,z)}const V$1=new Array(8).fill(0),W=new Array(8).fill(0);function D(o,t,r,e,n){return o[0]=t[0],o[1]=t[1],o[2]=r[0],o[3]=r[1],o[4]=e[0],o[5]=e[1],o[6]=n[0],o[7]=n[1],o}function F(o,t,r,e,n,i,l,c,a){return j$1(o,D(V$1,t,r,e,n),D(W,i,l,c,a))}function H$1(o,t,r,e){const n=r$1(0,r),s=r$1(0,0),l=r$1(t,0),c=r$1(t,r);return p$1(n,n,o),p$1(s,s,o),p$1(l,l,o),p$1(c,c,o),new j({rings:[[n,s,l,c,n]],spatialReference:e})}const K=T$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const u$2=n();let y=class extends a$1{constructor(t){super(t),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners";}get coords(){let{topLeft:t,topRight:o,bottomLeft:e,bottomRight:r}=this;if(null==t||null==o||null==e||null==r)return null;const s=t.spatialReference;return o=this.projectOrWarn(o,s),e=this.projectOrWarn(e,s),r=this.projectOrWarn(r,s),null==o||null==e||null==r?null:new j({rings:[[[e.x,e.y],[t.x,t.y],[o.x,o.y],[r.x,r.y],[e.x,e.y]]],spatialReference:s})}set coords(t){const{topLeft:o}=this;if(null==o)return;const e=o.spatialReference;if(null==(t=this.projectOrWarn(t,e)))return;const{rings:[[r,s,i,l]]}=t;this.bottomLeft=new x$1({x:r[0],y:r[1],spatialReference:e}),this.topLeft=new x$1({x:s[0],y:s[1],spatialReference:e}),this.topRight=new x$1({x:i[0],y:i[1],spatialReference:e}),this.bottomRight=new x$1({x:l[0],y:l[1],spatialReference:e});}toSourceNormalized(t){const{topLeft:s,topRight:i,bottomRight:p,bottomLeft:c}=this;if(null==t||null==s||null==i||null==p||null==c)return null;const m=s.spatialReference;t=t.normalize();const f=K$1(t,m).geometry;if(null==f)return null;o(u$2,f.x,f.y);const y=j$1(e$1(),[s.x,s.y,c.x,c.y,i.x,i.y,p.x,p.y],[0,0,0,1,1,0,1,1]);return p$1(u$2,u$2,y),c$2(u$2[0],u$2[1])}};e([y$1()],y.prototype,"coords",null),e([y$1({type:x$1})],y.prototype,"bottomLeft",void 0),e([y$1({type:x$1})],y.prototype,"bottomRight",void 0),e([y$1({type:x$1})],y.prototype,"topLeft",void 0),e([y$1({type:x$1})],y.prototype,"topRight",void 0),y=e([c$1("esri.layers.support.CornersGeoreference")],y);const h=y;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let p=class extends a$1{constructor(t){super(t),this.extent=null,this.rotation=0,this.type="extent-and-rotation";}get coords(){if(null==this.extent)return null;const{xmin:t,ymin:e,xmax:r,ymax:o,spatialReference:n}=this.extent;let s;if(this.rotation){const{x:n,y:i}=this.extent.center,a=x(n,i,this.rotation);s=[a(t,e),a(t,o),a(r,o),a(r,e)],s.push(s[0]);}else s=[[t,e],[t,o],[r,o],[r,e],[t,e]];return new j({rings:[s],spatialReference:n})}set coords(t){if(null==t||null==this.extent)return;const r=this.extent.spatialReference;if(t=this.projectOrWarn(t,r),null==t?.extent)return;const{rings:[[o,n,s]],extent:{center:{x:i,y:c}}}=t,m=M$3(Math.PI/2-Math.atan2(n[1]-o[1],n[0]-o[0])),l=x(i,c,-m),[p,u]=l(o[0],o[1]),[f,h]=l(s[0],s[1]);this.extent=new M$2({xmin:p,ymin:u,xmax:f,ymax:h,spatialReference:r}),this.rotation=m;}toSourceNormalized(t){const{extent:e,rotation:n}=this;if(null==t||null==e)return null;const{xmin:s,ymin:i,xmax:a,ymax:c,center:l,spatialReference:p}=e;t=t.normalize();const u=K$1(t,p).geometry;if(null==u)return null;let f=u.x,h=u.y;return n&&([f,h]=x(l.x,l.y,-n)(f,h)),c$2(s$3(f,s,a,0,1),s$3(h,c,i,0,1))}};function x(t,e,r){const o=u$4(r),n=Math.cos(o),s=Math.sin(o);return (r,o)=>[n*(r-t)+s*(o-e)+t,n*(o-e)-s*(r-t)+e]}e([y$1()],p.prototype,"coords",null),e([y$1({type:M$2})],p.prototype,"extent",void 0),e([y$1({type:Number})],p.prototype,"rotation",void 0),p=e([c$1("esri.layers.support.ExtentAndRotationGeoreference")],p);const u$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const l$1={key:"type",base:a$1,typeMap:{"control-points":K,corners:h,"extent-and-rotation":u$1}},f={key:"type",base:a$1,typeMap:{"control-points":K}};let u=class extends(i(m$1(m$2))){constructor(e){super(e),this.georeference=null,this.opacity=1;}readGeoreference(e){return K.fromJSON(e)}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:r,contentWidth:o,contentHeight:t}=this;if(null==e||null==r||0===o||0===t)return null;const s=r.toSourceNormalized(e);return null==s?null:(s.x*=o,s.y*=t,s)}};e([y$1({types:l$1,json:{write:!0,types:f}})],u.prototype,"georeference",void 0),e([o$1("georeference")],u.prototype,"readGeoreference",null),e([y$1({json:{read:!1,write:!1}})],u.prototype,"opacity",void 0),u=e([c$1("esri.layers.support.MediaElementBase")],u);const d$1=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function m(e){return "media"===e?.type}function l(n,o){const i=n$1(o);return m(n)&&!!n.portalItem&&null!=i&&i>e$2.PORTAL_ITEM}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let w$1=class w extends d$1{constructor(e){super(e),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null;}load(){const e=this.image;if("string"==typeof e){const t=p$2(e).then((e=>{this._set("content",e);}));this.addResolvingPromise(t);}else if(e instanceof HTMLImageElement){const t=e.decode().then((()=>{this._set("content",e);}));this.addResolvingPromise(t);}else e?this._set("content",e):this.addResolvingPromise(Promise.reject(new s("image-element:invalid-image-type","Invalid image type",{image:e})));return Promise.resolve(this)}get contentWidth(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(e,t,r){return u$5(t.url,r)}writeImage(e,t,r,o){if(null==e)return;const n=o?.portalItem,s=o?.resources;if(!n||!s)return void("string"==typeof e&&(t[r]=m$3(e,o)));const a=E(e)?e:null;if(a){if(null==g(a))return void(t[r]=a);const e=m$3(a,{...o,verifyItemRelativeUrls:o?.verifyItemRelativeUrls?{writtenUrls:o.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},R.NO);if(n&&e&&!Y(e))return s.toKeep.push({resource:n.resourceFromPath(e),compress:!1}),void(t[r]=e)}t[r]="<pending>",s.pendingOperations.push(H(e).then((e=>{const o=U(e,n);t[r]=o.itemRelativeUrl,s.toAdd.push({resource:o,content:{type:"blob",blob:e},compress:!1,finish:e=>{this.image=e.url;}});})));}write(e,t){const r=super.write(e,t);return "mediaType"in r&&!r.url&&delete r.mediaType,r}};e([y$1()],w$1.prototype,"animationOptions",void 0),e([y$1({readOnly:!0})],w$1.prototype,"content",void 0),e([y$1({readOnly:!0})],w$1.prototype,"contentWidth",null),e([y$1({readOnly:!0})],w$1.prototype,"contentHeight",null),e([y$1({json:{name:"url",type:String,write:{overridePolicy:(e,t,r)=>({enabled:!l(r?.layer,r?.origin)})}}})],w$1.prototype,"image",void 0),e([o$1("image",["url"])],w$1.prototype,"readImage",null),e([r("image")],w$1.prototype,"writeImage",null),e([y$1({readOnly:!0,json:{read:!1,write:{target:"mediaType",ignoreOrigin:!0}}})],w$1.prototype,"type",void 0),w$1=e([c$1("esri.layers.support.ImageElement")],w$1);const b$1=w$1;function E(e){return "string"==typeof e&&!tt(e)&&!Z(e)}async function H(e){if("string"==typeof e){if(tt(e))return ut(e);return (await U$2(e,{responseType:"blob"})).data}return new Promise((t=>T(e).toBlob(t)))}function T(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,r=e instanceof HTMLImageElement?e.naturalHeight:e.height,o=document.createElement("canvas"),i=o.getContext("2d");return o.width=t,o.height=r,e instanceof HTMLImageElement?i.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&i.putImageData(e,0,0),o}function U(e,t){const r=n$2(),o=`${V$2("media",r)}.${p$3({type:"blob",blob:e})}`;return t.resourceFromPath(o)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends d$1{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video";}load(){const e=this.video;if("string"==typeof e){const o=document.createElement("video");o.src=e,o.crossOrigin="anonymous",o.autoplay=!0,o.muted=!0,o.loop=!0,this.addResolvingPromise(this._loadVideo(o).then((()=>{this._set("content",o);})));}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then((()=>{this._set("content",e);}))):this.addResolvingPromise(Promise.reject(new s("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}set video(e){"not-loaded"===this.loadStatus?this._set("video",e):s$1.getLogger(this).error("#video","video cannot be changed after the element is loaded.");}_loadVideo(e){return new Promise(((o,s)=>{const r=c$3(e,"canplay",(()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(o,s):o();}));this.addHandles(r,"canplay"),"anonymous"!==e.crossOrigin&&(e.crossOrigin="anonymous",e.src?.includes("blob:")||(e.src=e.src));}))}};e([y$1()],d.prototype,"autoplay",void 0),e([y$1({readOnly:!0})],d.prototype,"content",void 0),e([y$1({readOnly:!0})],d.prototype,"contentWidth",null),e([y$1({readOnly:!0})],d.prototype,"contentHeight",null),e([y$1()],d.prototype,"video",null),d=e([c$1("esri.layers.support.VideoElement")],d);const a=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const w={key:"type",defaultKeyValue:"image",base:d$1,typeMap:{image:b$1,video:a}},M=V$3.ofType(w);let I=class extends(m$2.LoadableMixin(n$3(o$2.EventedAccessor))){constructor(e){super(e),this._index=new o$3,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=e=>{for(const s of e.removed){const e=this._elementViewsMap.get(s);this._elementViewsMap.delete(s),this._index.delete(e),this.removeHandles(e),e.destroy(),this.notifyChange("fullExtent");}const{spatialReference:t}=this;for(const s of e.added){if(this._elementViewsMap.get(s))continue;const e=new m$4({spatialReference:t,element:s});this._elementViewsMap.set(s,e);const o=d$2((()=>e.coords),(()=>this._updateIndexForElement(e,!1)));this._updateIndexForElement(e,!0),this.addHandles(o,e);}this._elementsIndexes.clear(),this.elements.forEach(((e,t)=>this._elementsIndexes.set(e,t))),this.emit("refresh");},this.elements=new M;}async load(e){if(s$4(e),!this.spatialReference){const e=this.elements.find((e=>null!=e.georeference?.coords));this._set("spatialReference",e?e.georeference.coords.spatialReference:f$1.WGS84);}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear();}set elements(e){this._set("elements",n$4(e,this._get("elements"),M));}get fullExtent(){if("not-loaded"===this.loadStatus)return null;const e=this._index.fullBounds;return null==e?null:new M$2({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){"not-loaded"===this.loadStatus?this._set("spatialReference",e):s$1.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.");}async queryElements(e,t){await this.load(),await I$3(e.spatialReference,this.spatialReference,null,t);const s=G$1(e.spatialReference,this.spatialReference)?e:U$3(e,this.spatialReference);if(!s)return [];const o=s.normalize(),r=[];for(const n of o)this._index.forEachInBounds(o$4(n),(({normalizedCoords:e,element:t})=>{null!=e&&x$2(n,e)&&r.push(t);}));return r.sort(((e,t)=>this._elementsIndexes.get(e)-this._elementsIndexes.get(t))),r}_updateIndexForElement(e,t){const s=e.normalizedBounds,o=this._index.has(e),r=null!=s;this._index.delete(e),r&&this._index.set(e,s),this.notifyChange("fullExtent"),t||(o!==r?this.emit("refresh"):this.emit("change",{element:e.element}));}};e([y$1()],I.prototype,"elements",null),e([y$1({readOnly:!0})],I.prototype,"fullExtent",null),e([y$1()],I.prototype,"spatialReference",null),I=e([c$1("esri.layers.support.LocalMediaElementSource")],I);const V=I;

function L(e){return "object"==typeof e&&null!=e&&"type"in e}function O(e){return L(e)&&"image"===e.type}let _=class extends(n$5(t$1(u$6(j$2(m$1(b$3)))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=k$1((async(e,r,o)=>{const{save:t,saveAs:s}=await __vitePreload(() => import('./mediaLayerUtils-186d2329.js'),true?["./mediaLayerUtils-186d2329.js","./utils-ec689b48.js","./main-a010f0a1.js","./preload-helper-a4975f27.js","./main-396dead2.css","./originUtils-f2cf510b.js","./multiOriginJSONSupportUtils-3d5af7a5.js","./jsonContext-c70ea03f.js","./saveAPIKeyUtils-a10981af.js","./saveUtils-00574aeb.js","./resourceUtils-419c5ffb.js","./resourceUtils-35747f32.js"]:void 0,import.meta.url);switch(e){case A$1.SAVE:return t(this,r);case A$1.SAVE_AS:return s(this,o,r)}})),this.source=new V;}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new s("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const s$1=this._getSourceOverride(t,this.georeference);s$1&&(this.setAtOrigin("source",s$1,"web-map"),t=s$1);const i=L(t)?new V({elements:new V$3([t])}):t;this._set("effectiveSource",i),this.spatialReference&&(i.spatialReference=this.spatialReference),await i.load(e),this.spatialReference=i.spatialReference;}destroy(){this.effectiveSource?.destroy(),this.source?.destroy();}readGeoreference(e,r){return e&&"itemId"in r&&r.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){"loaded"!==this.loadStatus&&"failed"!==this.loadStatus?this._set("source",e):s$1.getLogger(this).error("#source","source cannot be changed after the layer is loaded.");}castSource(e){return e?Array.isArray(e)?new V({elements:new V$3(e)}):e instanceof V$3?new V({elements:e}):e:null}readSource(e,r,o){if("itemId"in r&&r.itemId)return;const t=this._createSource(r);return t?.read(r,o),t}writeSource(e,r,t,s$1){O(e)?e.write(r,s$1):s$1?.messages&&s$1?.messages?.push(new s("media-layer:unsupported-source","source must be an 'ImageElement'"));}async save(e){return this._debouncedSaveOperations(A$1.SAVE,e)}async saveAs(e,r){return this._debouncedSaveOperations(A$1.SAVE_AS,r,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new b$1;case"video":return new a}return null}_getSourceOverride(e,r){if(L(e)&&this.originIdOf("source")===e$2.PORTAL_ITEM&&r&&this.originIdOf("georeference")===e$2.WEB_MAP){const o=e.toJSON(),t=this._createSource(o);return t.read({...o},{origin:"portal-item"}),t.read({georeference:r},{origin:"web-map"}),t}return null}};e([y$1({readOnly:!0})],_.prototype,"effectiveSource",void 0),e([y$1({readOnly:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!1}}}})],_.prototype,"georeference",void 0),e([o$1("web-map","georeference")],_.prototype,"readGeoreference",null),e([y$1({type:String})],_.prototype,"copyright",void 0),e([y$1({readOnly:!0})],_.prototype,"fullExtent",null),e([y$1({type:["MediaLayer"]})],_.prototype,"operationalLayerType",void 0),e([y$1({type:["show","hide"]})],_.prototype,"listMode",void 0),e([y$1({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,overridePolicy(e,r,o){return {enabled:!0,allowNull:!1,ignoreOrigin:l(this,o?.origin)&&O(e)&&!!e.georeference&&e.originIdOf("georeference")>e$2.PORTAL_ITEM}}}}})],_.prototype,"source",null),e([s$5("source")],_.prototype,"castSource",null),e([o$1("source",["url"])],_.prototype,"readSource",null),e([r("source")],_.prototype,"writeSource",null),e([y$1()],_.prototype,"spatialReference",void 0),e([y$1({readOnly:!0})],_.prototype,"type",void 0),_=e([c$1("esri.layers.MediaLayer")],_);const b=_;

export { b as default };
