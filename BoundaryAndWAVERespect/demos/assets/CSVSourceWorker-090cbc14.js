import { d8 as d$1, d1 as K, s as s$1, d2 as d$2, ag as b$1, J as s$2, I, U as U$1, c_ as Z, aQ as i, d0 as H, a8 as G, aa as w, fS as M, fT as W, bl as f$1, da as t$1, db as e$1, cZ as g$1, y as bt } from './main-75ed2508.js';
import { e, n } from './date-305484fc.js';
import { t } from './json-aab78c64.js';
import { m as m$1 } from './FeatureStore-eb427284.js';
import { x as x$1 } from './timeSupport-cdd02528.js';
import { $ } from './QueryEngine-99444eab.js';
import { a as a$1 } from './number-a4c897cc.js';
import { i as i$1, o as o$1 } from './clientSideDefaults-9ded9281.js';
import './preload-helper-a4975f27.js';
import './BoundsStore-a633eca8.js';
import './PooledRBush-d0ddb609.js';
import './WhereClause-c05df8ae.js';
import './TimeOnly-710e5349.js';
import './QueryEngineCapabilities-5bb5f351.js';
import './utils-b7f0ddb9.js';
import './utils-9a14464d.js';
import './utils-e67402c4.js';
import './RenderState-dde7519e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const r=/^\s*"([\S\s]*)"\s*$/,l=/""/g,o="\n",s=[","," ",";","|","\t"];function*u(e,t,n){let i=0;for(;i<=e.length;){const r=e.indexOf(t,i),l=e.substring(i,r>-1?r:void 0);i+=l.length+t.length,n&&!l.trim()||(yield l);}}function c(e){const t=e.includes("\r\n")?"\r\n":o;return u(e,t,!0)}function d(e,t){return u(e,t,!1)}function f(e,t,n){e=e.trim(),t=t?.trim();const i=[],r=Array.from(new Set([n?.delimiter,...s])).filter((e=>null!=e));for(const o of r){const n=m(e,o).length,r=m(t,o).length??n;n>1&&i.push({weight:Math.min(n,r),delimiter:o});}const l=i.sort((({weight:e},{weight:t})=>t-e)).map((({delimiter:e})=>e));for(const o of l){const t=h(g(e,o).names,n?.longitudeField,n?.latitudeField);if(t.longitudeFieldName&&t.latitudeFieldName)return {delimiter:o,locationInfo:t}}return {delimiter:l[0],locationInfo:null}}function*a(e,t,n,i=(()=>Object.create(null))){const s=c(e);s.next();let u="",f="",a=0,g=i(),m=0;e:for(const c of s){const e=d(c,n);for(const o of e)if(u+=f+o,f="",a+=p(o),a%2==0){if(a>0){const e=r.exec(u);if(!e){g=i(),m=0,u="",a=0;continue e}g[t[m]]=e[1].replaceAll(l,'"'),m++;}else g[t[m]]=u,m++;u="",a=0;}else f=n;0===a?(yield g,g=i(),m=0):f=o;}}function g(e,t){const i=m(e,t).filter((e=>null!=e)),r=i.map((e=>d$1(e)));for(let n=r.length-1;n>=0;n--)r[n]||(r.splice(n,1),i.splice(n,1));return {names:r,aliases:i}}function m(e,t){if(!e?.length)return [];const n=[];let i="",o="",s=0;const u=d(e,t);for(const c of u)if(i+=o+c,o="",s+=p(c),s%2==0){if(s>0){const e=r.exec(i);e&&n.push(e[1].replaceAll(l,'"'));}else n.push(i);i="",s=0;}else o=t;return n}function p(e){let t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}function h(e,t,i){t=d$1(t)?.toLowerCase(),i=d$1(i)?.toLowerCase();const r=e.map((e=>e.toLowerCase())),l=t?e[r.indexOf(t)]:null,o=i?e[r.indexOf(i)]:null;return {longitudeFieldName:l||e[r.indexOf(F.find((e=>r.includes(e))))],latitudeFieldName:o||e[r.indexOf(y.find((e=>r.includes(e))))]}}function b(e,t,n,r,l){const o=[],s=a(e,n,t),u=[];for(const i of s){if(10===u.length)break;u.push(i);}for(let c=0;c<n.length;c++){const e=n[c],t=r[c];if(e===l.longitudeFieldName||e===l.latitudeFieldName)o.push({name:e,type:"esriFieldTypeDouble",alias:t});else {let n;switch(N(u.map((t=>t[e])))){case"integer":n="esriFieldTypeInteger";break;case"double":n="esriFieldTypeDouble";break;case"date":n="esriFieldTypeDate";break;default:n="esriFieldTypeString";}o.push({name:e,type:n,alias:t,length:K(n)});}}return o}function N(t){if(!t.length)return "string";const n=/[^+\-.,0-9]/;return t.map((t=>{if(""!==t){if(!n.test(t)){let e=x(t);if(!isNaN(e))return /[.,]/.test(t)||!Number.isInteger(e)||e>214783647||e<-214783648?"double":"integer";if(t.includes("E")){if(e=Number(t),!Number.isNaN(e))return "double";if(t.includes(",")&&(t=t.replace(",","."),e=Number(t),!Number.isNaN(e)))return "double"}}return e(t)?"date":"string"}})).reduce(((e,t)=>void 0===e?t:void 0===t?e:e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}const x=function(){const e=a$1(),n=new RegExp("^"+e.regexp+"$"),i=new RegExp("["+e.group+"\\s\\xa0]","g"),r=e.factor;return t=>{const l=n.exec(t);if(e.factor=r,!l)return NaN;let o=l[1];if(!l[1]){if(!l[2])return NaN;o=l[2],e.factor*=-1;}return o=o.replace(i,"").replace(e.decimal,"."),+o*e.factor}}(),y=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],F=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const O=o$1("esriGeometryPoint"),v=["csv"],D=[0,0];class k{constructor(e,t){this.x=e,this.y=t;}}class P{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)};}destroy(){this._queryEngine?.destroy(),this._queryEngine=null;}async load(e,t={}){this._loadOptions=e;const[i]=await Promise.all([this._fetch(t.signal),this._checkProjection(e?.parsingOptions?.spatialReference)]),n=R(i,e);this._locationInfo=n.locationInfo,this._delimiter=n.delimiter,this._queryEngine=this._createQueryEngine(n);const r=await this._createFeatures(i);this._queryEngine.featureStore.addMany(r);const{fullExtent:s,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();if(n.layerDefinition.extent=s,o){const{start:e,end:t}=o;n.layerDefinition.timeInfo.timeExtent=[e,t];}return n}async applyEdits(){throw new s$1("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=d$2(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(e=>{this._queryEngine.featureStore.clear(),b$1(e)||s$2.getLogger("esri.layers.CSVLayer").error(new s$1("csv-layer:refresh","An error occurred during refresh",{error:e}));})),await this._waitSnapshotComplete();const{fullExtent:i,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();return {extent:i,timeExtent:o}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:i,customParameters:r}=this._loadOptions;if(!i)throw new s$1("csv-layer:invalid-source","url not defined");const s=I(i);return (await U$1(s.path,{query:{...s.query,...r},responseType:"text",signal:t})).data}_createQueryEngine(e){const{objectIdField:t,fields:i$1,extent:n,timeInfo:r}=e.layerDefinition,s=new m$1({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new $({fieldsIndex:Z.fromLayerJSON({fields:i$1,dateFieldsTimeReference:{timeZoneIANA:i}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:r,objectIdField:t,spatialReference:n.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:s})}async _createFeatures(e){const{latitudeFieldName:t$2,longitudeFieldName:n$1}=this._locationInfo,{objectIdField:r,fieldsIndex:s,spatialReference:o}=this._queryEngine;let a$1=[];const u=[],h=s.fields.filter((e=>e.name!==r)).map((e=>e.name));let g=0;const I={};for(const i of s.fields)if("esriFieldTypeOID"!==i.type&&"esriFieldTypeGlobalID"!==i.type){const e=H(i);void 0!==e&&(I[i.name]=e);}const w$1=a(e,h,this._delimiter,i$1(I,r));for(const l of w$1){const e=this._parseCoordinateValue(l[t$2]),o=this._parseCoordinateValue(l[n$1]);if(null!=o&&null!=e&&!isNaN(e)&&!isNaN(o)){l[t$2]=e,l[n$1]=o;for(const e in l)if(e!==t$2&&e!==n$1)if(s.isDateField(e))l[e]=n(l[e]);else if(s.isNumericField(e)){const t=x(l[e]);isNaN(t)?l[e]=null:l[e]=t;}l[r]=g,g++,a$1.push(new k(o,e)),u.push(l);}}if(!G({wkid:4326},o))if(w(o))for(const i of a$1)[i.x,i.y]=M(i.x,i.y,D);else a$1=W(t,a$1,f$1.WGS84,o,null,null);const E=[];for(let i=0;i<a$1.length;i++){const{x:e,y:t}=a$1[i],n=u[i];n[r]=i+1,E.push(new t$1(new e$1([],[e,t]),n,null,n[r]));}return E}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=x(e);return (isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await x$1(g$1,e);}catch{throw new s$1("csv-layer:projection-not-supported","Projection not supported")}}}function R(e,t){const i$1=t.parsingOptions||{},r={delimiter:i$1.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:i$1.latitudeField,longitudeFieldName:i$1.longitudeField}},s=r.layerDefinition={name:bt(t.url,v)||"csv",dateFieldsTimeReference:{timeZoneIANA:i},drawingInfo:O,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:i$1.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:i$1.spatialReference||{wkid:4326}}},o=c(e),l=o.next().value?.trim(),m=o.next().value?.trim();if(!l)throw new s$1("csv-layer:empty-csv","CSV is empty",{csv:e});const{delimiter:c$1,locationInfo:d}=f(l,m,i$1);if(!c$1)throw new s$1("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:l,secondLine:m,parsingOptions:i$1});if(!d)throw new s$1("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:l,secondLine:m,parsingOptions:i$1});r.locationInfo=d,r.delimiter=c$1;const{names:u,aliases:p}=g(l,c$1),f$1=b(e,r.delimiter,u,p,r.locationInfo);if(i$1.fields?.length){const e=new Z(i$1.fields);for(const t of f$1){const i=e.get(t.name);i&&Object.assign(t,i);}}if(!f$1.some((e=>"esriFieldTypeOID"===e.type&&(s.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};s.objectIdField=e.name,f$1.unshift(e);}s.fields=f$1;const y=new Z(s.fields);if(r.locationInfo&&(r.locationInfo.latitudeFieldName=y.get(r.locationInfo.latitudeFieldName).name,r.locationInfo.longitudeFieldName=y.get(r.locationInfo.longitudeFieldName).name),s.timeInfo){const e=s.timeInfo;if(e.startTimeField){const t=y.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null;}if(e.endTimeField){const t=y.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null;}if(e.trackIdField){const t=y.get(e.trackIdField);e.trackIdField=t?t.name:null;}e.startTimeField||e.endTimeField||(s.timeInfo=null);}return r}

export { P as default };
