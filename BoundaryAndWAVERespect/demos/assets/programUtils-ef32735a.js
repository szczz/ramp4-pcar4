import { t } from './NestedMap-7fc3349d.js';
import { r } from './Program-3340c827.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let e$1 = class e{constructor(t$1){this._rctx=t$1,this._store=new t;}dispose(){this._store.forEach((r=>r.forEach((r=>r.dispose())))),this._store.clear();}acquire(r$1,e,s,o){const c=this._store.get(r$1,e);if(null!=c)return c.ref(),c;const h=new r(this._rctx,r$1,e,s,o);return h.ref(),this._store.set(r$1,e,h),h}get test(){let r=0;return this._store.forEach((t=>t.forEach((t=>r+=t.hasGLName?2:1)))),{cachedWebGLProgramObjects:r}}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(e){const{options:n,value:o}=e;return "number"==typeof n[o]}function n(n){let o="";for(const t in n){const i=n[t];if("boolean"==typeof i)i&&(o+=`#define ${t}\n`);else if("number"==typeof i)o+=`#define ${t} ${i.toFixed()}\n`;else if("object"==typeof i)if(e(i)){const{value:e,options:n,namespace:f}=i,s=f?`${f}_`:"";for(const t in n)o+=`#define ${s}${t} ${n[t].toFixed()}\n`;o+=`#define ${t} ${s}${e}\n`;}else {const e=i.options;let n=0;for(const t in e)o+=`#define ${e[t]} ${(n++).toFixed()}\n`;o+=`#define ${t} ${e[i.value]}\n`;}}return o}

export { e$1 as e, n };
