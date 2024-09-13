import { ba as u$1, a5 as c, a4 as V, q, ay as e, aX as e$1, aY as y, aZ as c$1 } from './main-75ed2508.js';
import { t as t$2 } from './highlightReasons-6e0d1464.js';
import { m as m$1, u as u$2 } from './LayerView-201a7720.js';
import { t as t$1 } from './GraphicContainer-cf667fd9.js';
import { $ } from './GraphicsView2D-2f1cb819.js';
import { t } from './HighlightCounter-3f70afbf.js';
import './preload-helper-a4975f27.js';
import './Container-acaae522.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-0396b80e.js';
import './AGraphicContainer-fbac0cc6.js';
import './TechniqueInstance-df168856.js';
import './UpdateTracking2D-6ef58819.js';
import './TurboLine-9c2c72f4.js';
import './enums-d24bcbbf.js';
import './earcut-f3e03ba7.js';
import './GeometryUtils-1fa63953.js';
import './Rect-09e0f861.js';
import './LabelMetric-e8df36ea.js';
import './Program-3340c827.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-001e662b.js';
import './constants-412c3a33.js';
import './TileContainer-2a8f7184.js';
import './WGLContainer-1ee62669.js';
import './ProgramTemplate-020cde45.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-ee734728.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-d4a54f74.js';
import './TimeOnly-710e5349.js';
import './timeSupport-cdd02528.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-05cf6d08.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
