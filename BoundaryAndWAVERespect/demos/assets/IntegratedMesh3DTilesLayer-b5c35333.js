import { eB as l, e0 as u$1, e1 as j, e2 as t, e3 as m, eC as e, eD as i, bl as f$1, aI as M, dj as M$1, cn as r$1, cv as e$1, cy as u, eE as O$1, cu as r, eF as n, eG as u$2, eH as m$1, eI as b, eJ as K, s, C as a, U as U$1, J as s$1, aX as e$2, aY as y, eK as f, e7 as d, aZ as c, ed as b$1, cm as n$1 } from './main-75ed2508.js';
import { I, x, Z } from './elevationInfoUtils-9aa76b26.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let U=class extends(l(u$1(j(t(m(e(i(b$1)))))))){constructor(e){super(e),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new f$1({wkid:4326,vcsWkid:115700}),this.fullExtent=new M(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0;}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}_verifyArray(e,t){if(!Array.isArray(e)||e.length<t)return !1;for(const r of e)if("number"!=typeof r)return !1;return !0}_initFullExtent(e){const t=e.root?.boundingVolume;if(!t)return;if(t.box){const e=t?.box;if(e[3]>7972671&&e[7]>7972671&&e[11]>7945940)return}const r$2=e.root?.transform,i=n$1();if(t.region&&this._verifyArray(t.region,6)){const e=t.region,r=M$1(e[0]),i=M$1(e[1]),s=e[4],a=M$1(e[2]),n=M$1(e[3]),m=e[5];this.fullExtent=new M({xmin:r,ymin:i,zmin:s,xmax:a,ymax:n,zmax:m,spatialReference:this.spatialReference});}else if(t.sphere&&this._verifyArray(t.sphere,4)){const e=t.sphere,o=r$1(e[0],e[1],e[2]),s=e[3]/Math.sqrt(3),a=n$1();e$1(a,o,r$1(-s,-s,-s));const n$2=n$1();if(u(n$2,o,r$1(s,s,s)),r$2&&this._verifyArray(r$2,16)){const e=r$2;O$1(i,a,e),r(a,i),O$1(i,n$2,e),r(n$2,i);}n(a,u$2,0,a,f$1.WGS84,0,1),n(n$2,u$2,0,n$2,f$1.WGS84,0,1);const m=n$1(),d=n$1();m$1(m,a,n$2),b(d,a,n$2),this.fullExtent=new M({xmin:m[0],ymin:m[1],zmin:m[2],xmax:d[0],ymax:d[1],zmax:d[2],spatialReference:this.spatialReference});}else if(t.box&&this._verifyArray(t.box,12)){const e=t.box,i=r$1(e[0],e[1],e[2]),o=r$1(e[3],e[4],e[5]),s=r$1(e[6],e[7],e[8]),a=r$1(e[9],e[10],e[11]),n$2=[];for(let t=0;t<8;++t)n$2.push(n$1());if(u(n$2[0],i,o),u(n$2[0],n$2[0],s),u(n$2[0],n$2[0],a),K(n$2[1],i,o),u(n$2[1],n$2[1],s),u(n$2[1],n$2[1],a),u(n$2[2],i,o),K(n$2[2],n$2[2],s),u(n$2[2],n$2[2],a),K(n$2[3],i,o),K(n$2[3],n$2[3],s),u(n$2[3],n$2[3],a),u(n$2[4],i,o),u(n$2[4],n$2[4],s),K(n$2[4],n$2[4],a),K(n$2[5],i,o),u(n$2[5],n$2[5],s),K(n$2[5],n$2[5],a),u(n$2[6],i,o),K(n$2[6],n$2[6],s),K(n$2[6],n$2[6],a),K(n$2[7],i,o),K(n$2[7],n$2[7],s),K(n$2[7],n$2[7],a),r$2&&this._verifyArray(r$2,16)){const e=r$2;for(let t=0;t<8;++t)O$1(n$2[t],n$2[t],e);}const m=r$1(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE),l=r$1(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let t=0;t<8;++t)n(n$2[t],u$2,0,n$2[t],f$1.WGS84,0,1),m$1(l,l,n$2[t]),b(m,m,n$2[t]);this.fullExtent=new M({xmin:l[0],ymin:l[1],zmin:l[2],xmax:m[0],ymax:m[1],zmax:m[2],spatialReference:this.spatialReference});}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const i=null!=e?e.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:e=>{if(e.typeKeywords?.includes("IntegratedMesh"))return !0;throw new s("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},e);}catch(o){a(o);}if(this.url){const e=U$1(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:i}).then((e=>{this._initFullExtent(e.data);}),(e=>{a(e);}));await e;}}async fetchAttributionData(){return this.load().then((()=>({})))}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh 3d tiles layers";I(s$1.getLogger(this),x(t,"absolute-height",e)),I(s$1.getLogger(this),Z(t,e));}};e$2([y({type:["IntegratedMesh3DTilesLayer"]})],U.prototype,"operationalLayerType",void 0),e$2([y({type:f$1})],U.prototype,"spatialReference",void 0),e$2([y({type:M})],U.prototype,"fullExtent",void 0),e$2([y(f)],U.prototype,"elevationInfo",null),e$2([y({type:["show","hide"]})],U.prototype,"listMode",void 0),e$2([y(d)],U.prototype,"url",void 0),e$2([y({readOnly:!0})],U.prototype,"type",void 0),e$2([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],U.prototype,"path",void 0),e$2([y({type:Number,json:{origins:{"web-scene":{name:"layerDefinition.minScale",write:()=>{},read:()=>{}},"portal-item":{name:"layerDefinition.minScale",write:()=>{},read:()=>{}}}}})],U.prototype,"minScale",void 0),e$2([y({type:Number,json:{origins:{"web-scene":{name:"layerDefinition.maxScale",write:()=>{},read:()=>{}},"portal-item":{name:"layerDefinition.maxScale",write:()=>{},read:()=>{}}}}})],U.prototype,"maxScale",void 0),U=e$2([c("esri.layers.IntegratedMesh3DTilesLayer")],U);const z=U;

export { z as default };
