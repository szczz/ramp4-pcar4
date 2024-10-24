import { ba as u$1, a5 as c, a4 as V, q, ay as e, aX as e$1, aY as y, aZ as c$1 } from './main-a010f0a1.js';
import { t as t$2 } from './highlightReasons-3431986d.js';
import { m as m$1, u as u$2 } from './LayerView-e515ca7d.js';
import { t as t$1 } from './GraphicContainer-8799a3d2.js';
import { $ } from './GraphicsView2D-a244433f.js';
import { t } from './HighlightCounter-67dd6678.js';
import './preload-helper-a4975f27.js';
import './Container-9fb23c55.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-046036e0.js';
import './AGraphicContainer-840c4aed.js';
import './TechniqueInstance-0cce5304.js';
import './UpdateTracking2D-1ee6793d.js';
import './TurboLine-567bd340.js';
import './enums-d24bcbbf.js';
import './earcut-6a41e038.js';
import './GeometryUtils-37c5397c.js';
import './Rect-09e0f861.js';
import './LabelMetric-294aa471.js';
import './Program-7c333960.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-27788dcb.js';
import './constants-412c3a33.js';
import './TileContainer-d513e669.js';
import './WGLContainer-066c96d6.js';
import './ProgramTemplate-a287b1a9.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-e96f2525.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-cd20612e.js';
import './TimeOnly-b6dc2bc0.js';
import './timeSupport-c9ed0a12.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-7a8053ff.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
