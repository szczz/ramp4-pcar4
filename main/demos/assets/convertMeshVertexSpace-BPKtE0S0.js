import { dN as s, s as s$1, P as a } from './main-ZcwzHdcj.js';
import { l } from './MeshVertexAttributes-BbW4tEUV.js';
import { M } from './vertexSpaceConversion-BDgDzIWm.js';
import './preload-helper-dJJaZANz.js';
import './mat3f64-BNcPSU_3.js';
import './mat4f64-UGgSIQpQ.js';
import './spatialReferenceEllipsoidUtils-DbChxjCn.js';
import './computeTranslationToOriginAndRotation-qoRV4tp2.js';
import './meshVertexSpaceUtils-xgaHIHPo.js';
import './MeshLocalVertexSpace-BZvqvtbA.js';
import './vec3-dC-LMbQs.js';
import './projection-Cc01x1Lf.js';
import './DoubleArray-BsyEiImp.js';
import './BufferView-CMMs7kUZ.js';
import './vec4-BI93gZ_-.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
async function i(i,n,c){await Promise.resolve(),s(c);const m=M(i,n);if(!m)throw new s$1("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const p=i.cloneAndModifyVertexAttributes(new l({...m,uv:a(i.vertexAttributes.uv),color:a(i.vertexAttributes.color)}),n);return p.transform=null,p}

export { i as convertMeshVertexSpace };
