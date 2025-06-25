import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-75ed2508.js';
import { X } from './FeatureLayerView2D-5c1161ee.js';
import './preload-helper-a4975f27.js';
import './Container-acaae522.js';
import './highlightReasons-6e0d1464.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-0396b80e.js';
import './LayerView-201a7720.js';
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
import './tileUtils-6f82bc7d.js';
import './SDFHelper-bfdc0b42.js';
import './floatRGBA-d0802f1f.js';
import './FeatureCommandQueue-ee734728.js';
import './HighlightCounter-3f70afbf.js';
import './popupUtils-8e1c6013.js';
import './RefreshableLayerView-b466edae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
