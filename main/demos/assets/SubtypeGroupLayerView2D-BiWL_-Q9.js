import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-BI8Zq0MD.js';
import { X } from './FeatureLayerView2D-BFDnT5Ii.js';
import './preload-helper-dJJaZANz.js';
import './Container-BXAZ7KU4.js';
import './highlightReasons-DBmlOGBx.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-DXuyr8b5.js';
import './LayerView-CE4eRVZF.js';
import './TechniqueInstance-oP9JzSns.js';
import './UpdateTracking2D-67_neryh.js';
import './TurboLine-C8TDnaqT.js';
import './enums-DZmWLm_j.js';
import './earcut-CAZlSWlu.js';
import './GeometryUtils-CN39qK4K.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-DvRMUmgh.js';
import './Program-hwAarP1E.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-Dy8e5TgB.js';
import './constants-C0QDwCF4.js';
import './TileContainer-DRK5pOEH.js';
import './WGLContainer-CvkCJ9cB.js';
import './ProgramTemplate-D2RWMIk-.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-Ch8hA0cs.js';
import './floatRGBA-Dr5fwTGT.js';
import './FeatureCommandQueue-BnY9xSbw.js';
import './HighlightCounter-8VWgPl49.js';
import './popupUtils-DPeJ9wGB.js';
import './RefreshableLayerView-CtRCYFSz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
