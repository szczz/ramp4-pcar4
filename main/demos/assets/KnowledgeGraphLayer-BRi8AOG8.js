import { e7 as l, eb as t, e8 as f, en as l$1, e9 as b, ea as j, ec as S, eo as e, a0 as V, A as a, s, eJ as e$1, eK as t$1, G as n$1, p, eB as n, ez as m, eC as Y, cu as r, bd as e$2, be as y, ed as o, eL as r$1, eg as p$1, bf as a$1, e1 as n$2, aT as V$1, em as f$1 } from './main-ZcwzHdcj.js';
import { a as ae, M, T, E as E$1 } from './KnowledgeGraphSublayer-Bp2XW-9H.js';
import { R as R$1 } from './knowledgeGraphService-CVy98Lz3.js';
import './preload-helper-dJJaZANz.js';
import './FeatureStore-Dj9fZ3CG.js';
import './BoundsStore-_aOzxvox.js';
import './PooledRBush-BT1god6O.js';
import './timeSupport-DmOH2eYT.js';
import './json-DYk0G9qS.js';
import './QueryEngine-Cixqh9Ux.js';
import './WhereClause-RIR3gOSV.js';
import './TimeOnly-DwfHPI8R.js';
import './QueryEngineCapabilities-wlDphL4g.js';
import './utils-lqkYgsy4.js';
import './utils-D29aT8_x.js';
import './utils-twDxURmB.js';
import './clientSideDefaults-GtDzWdYB.js';
import './GraphQueryStreaming-Cfxou_3E.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let E=class extends(l(t(f(l$1(b(j(S(e(f$1))))))))){constructor(e){super(e),this._graphTypeLookup=new Map,this._namedTypesModified=!1,this.dataManager=null,this.definitionSetMap=null,this.knowledgeGraph=null,this.layers=new(V.ofType(ae)),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="KnowledgeGraphLayer",this.sublayerIdsCache=new Map,this.tables=new(V.ofType(ae)),this.type="knowledge-graph",this.url=null;}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){try{await this.loadFromPortal({supportedTypes:["Knowledge Graph Layer"]},e);}catch(t){a(t);}await this._fetchMetadata(),await this._initializeLayerProperties(),this.loadLayerAssumingLocalCache();}async _fetchMetadata(){if(!this.url)throw new s("knowledge-graph:missing-url","KnowledgeGraphLayer must be created with a url");const e=await R$1(this.url);this.knowledgeGraph=e,this._forEachGraphType((e=>{e.name&&this._graphTypeLookup.set(e.name,e);}));}async _initializeLayerProperties(){this.originIdOf("inclusionModeDefinition")===e$1.USER?this._validateInclusionModeDefinition():await this._initializeInclusionModeDefinition(),this._setMemberTypes(),this.dataManager=new M({knowledgeGraph:this.knowledgeGraph,inclusionModeDefinition:this.inclusionModeDefinition});}async _initializeInclusionModeDefinition(){const e=this.definitionSetMap?await T(this.definitionSetMap,!0):{generateAllSublayers:!0,namedTypeDefinitions:new Map};[...this.layers.toArray(),...this.tables.toArray()].forEach((t=>{const i=this._graphTypeLookup.get(t.graphTypeName);i&&!e.namedTypeDefinitions.has(i.name)&&e.namedTypeDefinitions.set(i.name,{useAllData:!0});})),this.setAtOrigin("inclusionModeDefinition",e,t$1(this.originIdOf("definitionSetMap")));}_validateInclusionModeDefinition(){const{inclusionModeDefinition:e}=this;if(!e)return;const{namedTypeDefinitions:t}=e;if(t?.size>0)t.forEach(((e,i)=>{const s=this._graphTypeLookup.get(i);if(!s)return n$1.getLogger(this).warn(`A named type, ${i}, was in the inclusion list that wasn't in the data model and will be removed`),void t.delete(i);"relationship"!==s.type&&"entity"!==s.type&&(n$1.getLogger(this).warn(`A named type, ${i}, was in the inclusion list that wasn't properly modeled and will be removed`),t.delete(i));}));else if(!e.generateAllSublayers)throw new s("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined")}_setMemberTypes(){let e=[],t=[];const{inclusionModeDefinition:i}=this,o=i?.namedTypeDefinitions;!i||i.generateAllSublayers?(e=this.knowledgeGraph.dataModel?.entityTypes??[],t=this.knowledgeGraph.dataModel?.relationshipTypes??[]):o&&o.size>0&&o.forEach(((i,o)=>{const s=this._graphTypeLookup.get(o);switch(s?.type){case"relationship":t.push(s);break;case"entity":e.push(s);}})),this.memberEntityTypes=e,this.memberRelationshipTypes=t;}_forEachGraphType(e){[...this.knowledgeGraph.dataModel?.entityTypes??[],...this.knowledgeGraph.dataModel?.relationshipTypes??[]].forEach((t=>{e(t);}));}_refreshNamedTypes(){this._namedTypesModified=!0;for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0});}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const i of e)this.sublayerIdsCache.has(i.typeName)||(this.sublayerIdsCache.set(i.typeName,new Set),t.push(i.typeName)),this.sublayerIdsCache.get(i.typeName).add(i.id);for(const i of t){const e=this._graphTypeLookup.get(i);if(!e)continue;this._addSublayer(e).title=i,"entity"===e.type?this.dataManager.entityTypeNames.add(i):this.dataManager.relationshipTypeNames.add(i),this.dataManager.sublayerCaches.set(i,new Map);}this._refreshNamedTypes();}_createSublayers(e,t,i){e.forEach((e=>{const o=this._createSublayer(e);i(o)&&t.push(o),this._updateSublayerCaches(e);}));}_addSublayer(e){const t=this._createSublayer(e);return t.geometryType?this.layers.push(t):this.tables.push(t),t}_createSublayer(e){return new ae({objectType:e,parentCompositeLayer:this,graphType:e.type,title:e.name})}_updateSublayers(e,t){t.forEach((t=>{t.parentCompositeLayer=this;const i=e.find((e=>e.type===t.graphType&&e.name===t.graphTypeName));i&&(t.objectType=i,t.read({title:i.name},{origin:"service"}),this._updateSublayerCaches(i));}));}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map);}_saveUrlAsNewResource(e,t,i,o){e[t]="<pending>",i.pendingOperations.push(I(this.inclusionModeDefinition).then((s=>{const r=O(o);e[t]=r.itemRelativeUrl,i.toAdd.push({resource:r,content:{type:"blob",blob:s},compress:!1,finish:e=>{this.definitionSetMap=e.url;}});})));}_displaysAllRecords(e){for(const[,{useAllData:t}]of e.namedTypeDefinitions)if(!t)return !1;return !0}readDefinitionSetMap(e,t,i){return p(e,i)}writeDefinitionSetMap(e,t,i,o){const s=o?.portalItem,r=o?.resources,a=n(o?.origin);if(!s||!r||null==a)return void(e&&(t[i]=m(e,o)));const{inclusionModeDefinition:p}=this;if(!p||this._displaysAllRecords(p))return void(this.definitionSetMap=null);const l=this.originIdOf("inclusionModeDefinition");if(l===e$1.USER||this._namedTypesModified||a<l)this._saveUrlAsNewResource(t,i,r,s);else if(a===l&&e){const a=m(e,o);Y(a)?this._saveUrlAsNewResource(t,i,r,s):t[i]=a;}}set inclusionModeDefinition(e){"loaded"!==this.loadStatus&&"failed"!==this.loadStatus?this._set("inclusionModeDefinition",e):n$1.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded.");}loadLayerAssumingLocalCache(){const e=[...this.memberEntityTypes,...this.memberRelationshipTypes];this.originIdOf("layers")===e$1.DEFAULTS?this._createSublayers(e,this.layers,(e=>!!e.geometryType)):this._updateSublayers(e,this.layers),this.originIdOf("tables")===e$1.DEFAULTS?this._createSublayers(e,this.tables,(e=>!e.geometryType)):this._updateSublayers(e,this.tables),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach(((e,t)=>{const i=r(this.sublayerIdsCache,t,(()=>new Set));e.members?.forEach((e=>{i.add(e.id);}));}));}async addRecords(e){await this._handleNewRecords(e);}async removeRecords(e){const t=[];for(const i of e)!1===this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(i.typeName)?.useAllData&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(i.typeName)?.members?.has(i.id)&&t.push(i);this.dataManager.removeFromLayer(t);for(const i of t)this.sublayerIdsCache.get(i.typeName)?.delete(i.id);return this._refreshNamedTypes(),t}};e$2([y()],E.prototype,"dataManager",void 0),e$2([y({json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],E.prototype,"definitionSetMap",void 0),e$2([o("definitionSetMap")],E.prototype,"readDefinitionSetMap",null),e$2([r$1("definitionSetMap")],E.prototype,"writeDefinitionSetMap",null),e$2([y()],E.prototype,"inclusionModeDefinition",null),e$2([y()],E.prototype,"knowledgeGraph",void 0),e$2([y({type:V.ofType(ae),json:{write:{ignoreOrigin:!0}}})],E.prototype,"layers",void 0),e$2([y()],E.prototype,"memberEntityTypes",void 0),e$2([y()],E.prototype,"memberRelationshipTypes",void 0),e$2([y({type:["KnowledgeGraphLayer"]})],E.prototype,"operationalLayerType",void 0),e$2([y()],E.prototype,"sublayerIdsCache",void 0),e$2([y({type:V.ofType(ae),json:{write:{ignoreOrigin:!0}}})],E.prototype,"tables",void 0),e$2([y({json:{read:!1}})],E.prototype,"type",void 0),e$2([y(p$1)],E.prototype,"url",void 0),E=e$2([a$1("esri.layers.KnowledgeGraphLayer")],E);const R=E;async function I(e){const t=await E$1(e);return new Blob([t],{type:"application/x-protobuf"})}function O(e){const t=`definitionSetMap-${n$2()}.dat`,i=V$1("knowledgeGraphLayer",t);return e.resourceFromPath(i)}

export { R as default };
