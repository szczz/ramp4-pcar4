import { bd as e, bf as a$1, bj as d$1, bk as P, N as has } from './main-ZcwzHdcj.js';
import { r as re } from './FeatureLayerView2D-DZ7ljup3.js';
import './preload-helper-dJJaZANz.js';
import './Container-Bcfoftbj.js';
import './highlightReasons-YOmWpplf.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-BcGpRBCj.js';
import './timeSupport-Ck37JvL1.js';
import './LayerView-DrJIhr98.js';
import './layerViewUtils-CRtvGSrJ.js';
import './TechniqueInstance-KDLr2G3n.js';
import './UpdateTracking2D-BlCtoAgT.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-B_QVgNi9.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-DIrgiFIN.js';
import './Program-Dw204J9G.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-DBoC0yYR.js';
import './TileContainer-DoIGINYf.js';
import './WGLContainer-BXJm6cE9.js';
import './ProgramTemplate-BUEXYvVH.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-KIi1ykXF.js';
import './CircularArray-BCXLb8ry.js';
import './tileUtils-Ceq3VL9e.js';
import './SDFHelper-BC_UQDac.js';
import './floatRGBA-CO2Jaujz.js';
import './FeatureCommandQueue-Bvdncfsu.js';
import './constants-BNnV1ogR.js';
import './HighlightCounter-CHU2nBTE.js';
import './popupUtils-DP88Vv8e.js';
import './RefreshableLayerView-CWMn7Ivb.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let o=class extends re{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._workerProxy,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([a$1("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
