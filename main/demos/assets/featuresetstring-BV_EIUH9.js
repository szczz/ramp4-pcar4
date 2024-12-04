import { a as ae, H, a1 as Ee, m as me, B, a2 as Ce, b as a, r, a3 as Ve, N, A as He, a4 as qe, a5 as Te, a6 as Ue, a7 as ke, P, a8 as pe, a9 as Be, aa as E } from './arcadeUtils-D4nEexig.js';
import './main-ZcwzHdcj.js';
import './preload-helper-dJJaZANz.js';
import './TimeOnly-DwfHPI8R.js';
import './ImmutableArray-B20xHd08.js';
import './number-DInNwZR2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function T(a,e){return a&&a.domain?"coded-value"===a.domain.type||"codedValue"===a.domain.type?N.convertObjectToArcadeDictionary({type:"codedValue",name:a.domain.name,dataType:E[a.field.type],codedValues:a.domain.codedValues.map((n=>({name:n.name,code:n.code})))},He(e)):N.convertObjectToArcadeDictionary({type:"range",name:a.domain.name,dataType:E[a.field.type],min:a.domain.minValue,max:a.domain.maxValue},He(e)):null}function b(h){"async"===h.mode&&(h.functions.domain=function(n,d){return h.standardFunctionAsync(n,d,(async(u,m,f)=>{if(ae(f,2,3,n,d),H(f[0])){return T(Ee(f[0],me(f[1]),void 0===f[2]?void 0:f[2]),n)}if(B(f[0])){await f[0]._ensureLoaded();return T(Ce(me(f[1]),f[0],null,void 0===f[2]?void 0:f[2]),n)}throw new a(n,r.InvalidParameter,d)}))},h.functions.subtypes=function(o,i){return h.standardFunctionAsync(o,i,(async(s,m,f)=>{if(ae(f,1,1,o,i),H(f[0])){const a=Ve(f[0]);return a?N.convertObjectToArcadeDictionary(a,He(o)):null}if(B(f[0])){await f[0]._ensureLoaded();const a=f[0].subtypeMetaData();return a?N.convertObjectToArcadeDictionary(a,He(o)):null}throw new a(o,r.InvalidParameter,i)}))},h.functions.domainname=function(n,o){return h.standardFunctionAsync(n,o,(async(d,u,l)=>{if(ae(l,2,4,n,o),H(l[0]))return qe(l[0],me(l[1]),l[2],void 0===l[3]?void 0:l[3]);if(B(l[0])){await l[0]._ensureLoaded();const n=Ce(me(l[1]),l[0],null,void 0===l[3]?void 0:l[3]);return Te(n,l[2])}throw new a(n,r.InvalidParameter,o)}))},h.signatures.push({name:"domainname",min:2,max:4}),h.functions.domaincode=function(n,o){return h.standardFunctionAsync(n,o,(async(d,u,m)=>{if(ae(m,2,4,n,o),H(m[0]))return Ue(m[0],me(m[1]),m[2],void 0===m[3]?void 0:m[3]);if(B(m[0])){await m[0]._ensureLoaded();const n=Ce(me(m[1]),m[0],null,void 0===m[3]?void 0:m[3]);return ke(n,m[2])}throw new a(n,r.InvalidParameter,o)}))},h.signatures.push({name:"domaincode",min:2,max:4}),h.functions.text=function(n,r$1){return h.standardFunctionAsync(n,r$1,(async(o,i,s)=>{if(ae(s,1,2,n,r$1),B(s[0])){const t=P(s[1],"");if(""===t)return s[0].castToText();if("schema"===t.toLowerCase())return s[0].convertToText("schema",o.abortSignal);if("featureset"===t.toLowerCase())return s[0].convertToText("featureset",o.abortSignal);throw new a(n,r.InvalidParameter,r$1)}return pe(s[0],s[1])}))},h.functions.gdbversion=function(n,o){return h.standardFunctionAsync(n,o,(async(i,s,d)=>{if(ae(d,1,1,n,o),H(d[0]))return d[0].gdbVersion();if(B(d[0])){return (await d[0].load()).gdbVersion}throw new a(n,r.InvalidParameter,o)}))},h.functions.schema=function(o,i){return h.standardFunctionAsync(o,i,(async(s,d,m)=>{if(ae(m,1,1,o,i),B(m[0]))return await m[0].load(),N.convertObjectToArcadeDictionary(m[0].schema(),He(o));if(H(m[0])){const a=Be(m[0]);return a?N.convertObjectToArcadeDictionary(a,He(o)):null}throw new a(o,r.InvalidParameter,i)}))});}

export { b as registerFunctions };
