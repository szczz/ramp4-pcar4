import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-a010f0a1.js';
import { X } from './FeatureLayerView2D-50114607.js';
import './preload-helper-a4975f27.js';
import './Container-9fb23c55.js';
import './highlightReasons-3431986d.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-046036e0.js';
import './LayerView-e515ca7d.js';
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
import './tileUtils-6f82bc7d.js';
import './SDFHelper-93810460.js';
import './floatRGBA-c2a735be.js';
import './FeatureCommandQueue-e96f2525.js';
import './HighlightCounter-67dd6678.js';
import './popupUtils-50a72629.js';
import './RefreshableLayerView-44e84667.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
