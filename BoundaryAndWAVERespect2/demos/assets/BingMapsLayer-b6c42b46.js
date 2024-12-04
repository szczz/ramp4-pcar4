import { d_ as n, e2 as t, d$ as f, fm as j$1, bl as f$1, aI as M, al as u$1, U as U$1, fY as o, s, aX as e, aY as y, aZ as c$1, fZ as t$1, ed as b$1, eZ as s$1, e0 as u$2, e3 as m$1, G as x$1, f_ as p } from './main-a010f0a1.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var h$1;const d=new t$1("0/0/0",0,0,0,void 0);let g=h$1=class extends(n(t(f(b$1)))){constructor(){super(...arguments),this.tileInfo=j$1.create({spatialReference:f$1.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new M(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,f$1.WebMercator),this.spatialReference=f$1.WebMercator;}getTileBounds(e,t,r,o){const s=o||u$1();return d.level=e,d.row=t,d.col=r,d.extent=s,this.tileInfo.updateTileInfo(d),d.extent=void 0,s}fetchTile(e,r,o,s={}){const{signal:i}=s,a=this.getTileUrl(e,r,o),p={responseType:"image",signal:i,query:{...this.refreshParameters}};return U$1(a??"",p).then((e=>e.data))}async fetchImageBitmapTile(e,r,o$1,s={}){const{signal:i}=s;if(this.fetchTile!==h$1.prototype.fetchTile){const t=await this.fetchTile(e,r,o$1,s);return o(t,e,r,o$1,i)}const a=this.getTileUrl(e,r,o$1)??"",p={responseType:"blob",signal:i,query:{...this.refreshParameters}},{data:l}=await U$1(a,p);return o(l,e,r,o$1,i)}getTileUrl(){throw new s("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};e([y({type:j$1})],g.prototype,"tileInfo",void 0),e([y({type:["show","hide"]})],g.prototype,"listMode",void 0),e([y({readOnly:!0,value:"base-tile"})],g.prototype,"type",void 0),e([y({nonNullable:!0})],g.prototype,"fullExtent",void 0),e([y()],g.prototype,"spatialReference",void 0),g=h$1=e([c$1("esri.layers.BaseTileLayer")],g);const j=g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const c=new s$1({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),m="https://dev.virtualearth.net";let h=class extends(n(u$2(m$1(j)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new j$1({size:[256,256],dpi:96,origin:new x$1({x:-20037508.342787,y:20037508.342787,spatialReference:f$1.WebMercator}),spatialReference:f$1.WebMercator,lods:[new p({level:1,resolution:78271.5169639999,scale:295828763.795777}),new p({level:2,resolution:39135.7584820001,scale:147914381.897889}),new p({level:3,resolution:19567.8792409999,scale:73957190.948944}),new p({level:4,resolution:9783.93962049996,scale:36978595.474472}),new p({level:5,resolution:4891.96981024998,scale:18489297.737236}),new p({level:6,resolution:2445.98490512499,scale:9244648.868618}),new p({level:7,resolution:1222.99245256249,scale:4622324.434309}),new p({level:8,resolution:611.49622628138,scale:2311162.217155}),new p({level:9,resolution:305.748113140558,scale:1155581.108577}),new p({level:10,resolution:152.874056570411,scale:577790.554289}),new p({level:11,resolution:76.4370282850732,scale:288895.277144}),new p({level:12,resolution:38.2185141425366,scale:144447.638572}),new p({level:13,resolution:19.1092570712683,scale:72223.819286}),new p({level:14,resolution:9.55462853563415,scale:36111.909643}),new p({level:15,resolution:4.77731426794937,scale:18055.954822}),new p({level:16,resolution:2.38865713397468,scale:9027.977411}),new p({level:17,resolution:1.19432856685505,scale:4513.988705}),new p({level:18,resolution:.597164283559817,scale:2256.994353}),new p({level:19,resolution:.298582141647617,scale:1128.497176}),new p({level:20,resolution:.1492910708238085,scale:564.248588})]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0;}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e);}get copyright(){return null!=this.bingMetadata?this.bingMetadata.copyright:null}get operationalLayerType(){return c.toJSON(this.style)}get bingLogo(){return null!=this.bingMetadata?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((()=>this._getMetadata()))):this.addResolvingPromise(Promise.reject(new s("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,r){if(!this.loaded||null==this.bingMetadata)return null;const o=this.bingMetadata.resourceSets[0].resources[0],a=o.imageUrlSubdomains[t%o.imageUrlSubdomains.length],s=this._getQuadKey(e,t,r);return o.imageUrl.replace("{subdomain}",a).replace("{quadkey}",s)}async fetchAttributionData(){return this.load().then((()=>{if(null==this.bingMetadata)return null;return {contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}}))}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return U$1(`${m}/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new s("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new s("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new s("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new s("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return U$1(this.portalUrl??"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new s("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey;})).catch((e=>{throw new s("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,r){let o="";for(let a=e;a>0;a--){let e=0;const s=1<<a-1;0!=(r&s)&&(e+=1),0!=(t&s)&&(e+=2),o+=e.toString();}return o}};e([y({json:{read:!1,write:!1},value:null})],h.prototype,"bingMetadata",null),e([y({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],h.prototype,"type",void 0),e([y({type:j$1})],h.prototype,"tileInfo",void 0),e([y({type:String,readOnly:!0,json:{read:!1,write:!1}})],h.prototype,"copyright",null),e([y({type:String,json:{write:!1,read:!1}})],h.prototype,"key",void 0),e([y({type:c.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:c.read}}})],h.prototype,"style",void 0),e([y({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],h.prototype,"operationalLayerType",null),e([y({type:String,json:{write:!1,read:!1}})],h.prototype,"culture",void 0),e([y({type:String,json:{write:!1,read:!1}})],h.prototype,"region",void 0),e([y({type:String,json:{write:!0,read:!0}})],h.prototype,"portalUrl",void 0),e([y({type:Boolean,json:{write:!1,read:!1}})],h.prototype,"hasAttributionData",void 0),e([y({type:String,readOnly:!0})],h.prototype,"bingLogo",null),h=e([c$1("esri.layers.BingMapsLayer")],h);const b=h;

export { b as default };
