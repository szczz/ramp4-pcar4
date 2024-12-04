import { s, dN as s$1, di as Z, b6 as i, dm as d$1, G as n$1, dO as s$2, ax as b$1, a6 as G, dn as ot, dp as rt } from './main-ZcwzHdcj.js';
import { m } from './FeatureStore-Dj9fZ3CG.js';
import { x, j } from './timeSupport-DmOH2eYT.js';
import { $ } from './QueryEngine-Cixqh9Ux.js';
import { E, N } from './geojson-ByyCzX2A.js';
import { p } from './sourceUtils-DvAQGuVC.js';
import { o as oe, e as ee, K } from './wfsUtils-C22AuE4_.js';
import './preload-helper-dJJaZANz.js';
import './BoundsStore-_aOzxvox.js';
import './PooledRBush-BT1god6O.js';
import './json-DYk0G9qS.js';
import './WhereClause-RIR3gOSV.js';
import './TimeOnly-DwfHPI8R.js';
import './QueryEngineCapabilities-wlDphL4g.js';
import './utils-lqkYgsy4.js';
import './utils-D29aT8_x.js';
import './utils-twDxURmB.js';
import './date-BnBdrlFs.js';
import './xmlUtils-CR4x2opA.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const w="esri.layers.WFSLayer";class R{constructor(){this._customParameters=null,this._queryEngine=null,this._supportsPagination=!0;}destroy(){this._queryEngine?.destroy(),this._queryEngine=null;}async load(e,r={}){const{getFeatureUrl:s$2,getFeatureOutputFormat:o,fields:n,geometryType:i$1,featureType:u,maxRecordCount:c,maxTotalRecordCount:p,maxPageCount:d,objectIdField:g,customParameters:y}=e,{spatialReference:_,getFeatureSpatialReference:w}=oe(s$2,u,e.spatialReference);try{await x(w,_);}catch{throw new s("unsupported-projection","Projection not supported",{inSpatialReference:w,outSpatialReference:_})}s$1(r),this._customParameters=y,this._featureType=u,this._fieldsIndex=Z.fromLayerJSON({fields:n,dateFieldsTimeReference:n.some((e=>"esriFieldTypeDate"===e.type))?{timeZoneIANA:i}:null}),this._geometryType=i$1,this._getFeatureUrl=s$2,this._getFeatureOutputFormat=o,this._getFeatureSpatialReference=w,this._maxRecordCount=c,this._maxTotalRecordCount=p,this._maxPageCount=d,this._objectIdField=g,this._spatialReference=_;let R=await this._snapshotFeatures(r);if(R.errors.length>0&&(this._supportsPagination=!1,R=await this._snapshotFeatures(r),R.errors.length>0))throw R.errors[0];return this._queryEngine=new $({fieldsIndex:this._fieldsIndex,geometryType:i$1,hasM:!1,hasZ:!1,objectIdField:g,spatialReference:_,timeInfo:null,featureStore:new m({geometryType:i$1,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(R.features),{warnings:T(R),extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new s("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(t){return this._customParameters=t.customParameters,this._maxRecordCount=t.maxRecordCount,this._maxTotalRecordCount=t.maxTotalRecordCount,this._maxPageCount=t.maxPageCount,this._snapshotTask?.abort(),this._snapshotTask=d$1((e=>this._snapshotFeatures({signal:e}))),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._queryEngine.featureStore.addMany(e.features);for(const t of T(e))n$1.getLogger(w).warn(new s$2("wfs-layer:refresh-warning",t.message,t.details));e.errors?.length&&n$1.getLogger(w).warn(new s$2("wfs-layer:refresh-error","Refresh completed with errors",{errors:e.errors}));}),(()=>{this._queryEngine.featureStore.clear();})),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures(e){const t=e?.signal,r=this._maxTotalRecordCount,o=this._maxPageCount,n=this._supportsPagination?await ee(this._getFeatureUrl,this._featureType.typeName,{customParameters:this._customParameters,signal:t}):void 0;let i=[];const u=[];if(null==n)try{i=await this._singleQuery(t);}catch(l){b$1(l)||u.push(l);}else {const e=Math.min(n,r),a=F(this,Math.max(1,Math.min(Math.ceil(e/this._maxRecordCount),o)),t);await Promise.allSettled(Array.from({length:10}).map((()=>S(a,i,u))));}return s$1(t),{features:i,totalRecordCount:n,maxTotalRecordCount:r,maxPageCount:o,errors:u}}async _singleQuery(e){const t=await K(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:e});return this._processGeoJSON(t,{signal:e})}async _pageQuery(e,t){const r=e*this._maxRecordCount,a=await K(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,startIndex:r,count:this._maxRecordCount,signal:t});return this._processGeoJSON(a,{startIndex:r,signal:t})}_processGeoJSON(e,t){E(e,this._getFeatureSpatialReference.wkid);const{startIndex:r,signal:s}=t;s$1(s);const o=N(e,{geometryType:this._geometryType,hasZ:!1,objectIdField:this._objectIdField});if(!G(this._spatialReference,this._getFeatureSpatialReference))for(const a of o)null!=a.geometry&&(a.geometry=ot(j(rt(a.geometry,this._geometryType,!1,!1),this._getFeatureSpatialReference,this._spatialReference)));let l=r??1;for(const a of o){const e={};p(this._fieldsIndex,e,a.attributes,!0),a.attributes=e,null==e[this._objectIdField]&&(a.objectId=e[this._objectIdField]=l++);}return o}}function*F(e,t,r){for(let a=0;a<t;a++)yield e._pageQuery(a,r);}async function S(e,t,r){let a=e.next();for(;!a.done;){try{const e=await a.value;t.push(...e);}catch(o){b$1(o)||r.push(o);}a=e.next();}}function T(e){const t=[];return null!=e.totalRecordCount&&(e.features.length<e.totalRecordCount&&t.push({name:"wfs-layer:maxRecordCount-too-low",message:`Could only fetch ${e.features.length} of ${e.totalRecordCount} in ${e.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`,details:{recordCount:e.features.length,totalRecordCount:e.totalRecordCount}}),e.totalRecordCount>e.maxTotalRecordCount&&t.push({name:"wfs-layer:large-dataset",message:`The number of ${e.totalRecordCount} features exceeds the maximum allowed of ${e.maxTotalRecordCount}.`,details:{recordCount:e.features.length,totalRecordCount:e.totalRecordCount,maxTotalRecordCount:e.maxTotalRecordCount}})),t}

export { R as default };
