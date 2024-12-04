import { O as u, P as _, jM as Z, Q as M, jN as de, jO as ue, jP as T, jQ as pe, bX as ie, da as oe, jR as ne, I as B, ad as D, jS as C, s as A, jT as _e, dO as b, jU as R, $ as P, fA as j, jV as z, fG as F, fB as $, jW as fe, is as ee, a1 as H, jX as ge, jY as me, z as q, dA as te, bA as ve, a0 as N, jZ as we } from "./main-lm2DHsZh.js";
import { s as Se } from "./substitute-BsDRtTF7.js";
const J = "esri-identity-modal", W = { base: J, info: `${J}__info`, notice: `${J}__notice` }, Ie = "ArcGIS Online";
let x = class extends de {
  constructor(d, e) {
    super(d, e), this.container = document.createElement("div"), this.error = null, this.oAuthPrompt = !1, this.open = !1, this.signingIn = !1, this.server = null, this.resource = null, this._usernameInputNode = null, this._passwordInputNode = null, document.body.appendChild(this.container);
  }
  loadDependencies() {
    return ue({ button: () => import("./calcite-button-DFMPmuDm.js"), input: () => import("./calcite-input-CmEWOqzC.js"), label: () => import("./calcite-label-hlIaK-74.js"), modal: () => import("./calcite-modal-lOKRl645.js"), notice: () => import("./calcite-notice-CJfM9q_f.js") });
  }
  get title() {
    return this.commonMessages?.auth.signIn;
  }
  render() {
    const { open: d, title: e, messages: s, signingIn: t, oAuthPrompt: r, server: i, resource: n, error: h } = this, { info: p, oAuthInfo: o, lblItem: l, invalidUser: c, noAuthService: a, lblUser: f, lblPwd: g, lblCancel: v, lblSigning: w, lblOk: k } = s;
    return T("div", { class: this.classes(W.base, pe()) }, T("form", { bind: this, onsubmit: this._submit }, T("calcite-modal", { bind: this, open: d, outsideCloseDisabled: !0, scale: "s", widthScale: "s", onCalciteModalClose: this._cancel, onCalciteModalOpen: this._focusUsernameInput }, T("div", { slot: "header" }, e), T("div", { slot: "content" }, T("div", { class: W.info }, Se(r ? o : p, { server: i && /\.arcgis\.com/i.test(i) ? Ie : i, resource: `(${n || l})` })), h ? T("calcite-notice", { class: W.notice, icon: "exclamation-mark-triangle", kind: "danger", open: !0 }, T("div", { slot: "message" }, h.details?.httpStatus ? c : a)) : null, r ? null : [T("calcite-label", null, f, T("calcite-input", { afterCreate: (m) => this._usernameInputNode = m, autocomplete: "off", bind: this, name: "username", required: !0, spellcheck: !1, type: "text", value: "" })), T("calcite-label", null, g, T("calcite-input", { afterCreate: (m) => this._passwordInputNode = m, bind: this, name: "password", required: !0, type: "password", value: "" }))]), T("calcite-button", { appearance: "outline", bind: this, onclick: this._cancel, slot: "secondary", type: "button", width: "full" }, v), T("calcite-button", { loading: !!t, slot: "primary", type: "submit", width: "full" }, t ? w : k))));
  }
  _focusUsernameInput() {
    requestAnimationFrame(() => {
      this._usernameInputNode?.setFocus();
    });
  }
  _cancel() {
    this._set("signingIn", !1), this.open = !1, this._usernameInputNode && (this._usernameInputNode.value = ""), this._passwordInputNode && (this._passwordInputNode.value = ""), this.emit("cancel");
  }
  _submit(d) {
    d.preventDefault(), this._set("signingIn", !0);
    const e = this.oAuthPrompt ? {} : { username: this._usernameInputNode?.value, password: this._passwordInputNode?.value };
    this.emit("submit", e);
  }
};
u([_({ readOnly: !0 })], x.prototype, "container", void 0), u([_(), Z("esri/t9n/common")], x.prototype, "commonMessages", void 0), u([_()], x.prototype, "error", void 0), u([_(), Z("esri/identity/t9n/identity")], x.prototype, "messages", void 0), u([_()], x.prototype, "oAuthPrompt", void 0), u([_()], x.prototype, "open", void 0), u([_()], x.prototype, "signingIn", void 0), u([_()], x.prototype, "server", void 0), u([_({ readOnly: !0 })], x.prototype, "title", null), u([_()], x.prototype, "resource", void 0), x = u([M("esri.identity.IdentityModal")], x);
const se = x, G = "esriJSAPIOAuth";
class K {
  constructor(e, s) {
    this.oAuthInfo = null, this.storage = null, this.appId = null, this.codeVerifier = null, this.expires = null, this.refreshToken = null, this.ssl = null, this.stateUID = null, this.token = null, this.userId = null, this.oAuthInfo = e, this.storage = s, this._init();
  }
  isValid() {
    let e = !1;
    if (this.oAuthInfo && this.userId && (this.refreshToken || this.token)) {
      if (this.expires == null && this.refreshToken) e = !0;
      else if (this.expires) {
        const s = Date.now();
        this.expires > s && (this.expires - s) / 1e3 > 60 * this.oAuthInfo.minTimeUntilExpiration && (e = !0);
      }
    }
    return e;
  }
  save() {
    if (!this.storage) return !1;
    const e = this._load(), s = this.oAuthInfo;
    if (s?.authNamespace && s.portalUrl) {
      let t = e[s.authNamespace];
      t || (t = e[s.authNamespace] = {}), this.appId || (this.appId = s.appId), t[s.portalUrl] = { appId: this.appId, codeVerifier: this.codeVerifier, expires: this.expires, refreshToken: this.refreshToken, ssl: this.ssl, stateUID: this.stateUID, token: this.token, userId: this.userId };
      try {
        this.storage.setItem(G, JSON.stringify(e));
      } catch (r) {
        return console.warn(r), !1;
      }
      return !0;
    }
    return !1;
  }
  destroy() {
    const e = this._load(), s = this.oAuthInfo;
    if (s?.appId && s?.portalUrl && (this.expires == null || this.expires > Date.now()) && (this.refreshToken || this.token)) {
      const t = s.portalUrl.replace(/^http:/i, "https:") + "/sharing/rest/oauth2/revokeToken", r = new FormData();
      if (r.append("f", "json"), r.append("auth_token", this.refreshToken || this.token), r.append("client_id", s.appId), r.append("token_type_hint", this.refreshToken ? "refresh_token" : "access_token"), typeof navigator.sendBeacon == "function") navigator.sendBeacon(t, r);
      else {
        const i = new XMLHttpRequest();
        i.open("POST", t), i.send(r);
      }
    }
    if (s?.authNamespace && s.portalUrl && this.storage) {
      const t = e[s.authNamespace];
      if (t) {
        delete t[s.portalUrl];
        try {
          this.storage.setItem(G, JSON.stringify(e));
        } catch (r) {
          console.log(r);
        }
      }
    }
    s && (s._oAuthCred = null, this.oAuthInfo = null);
  }
  _init() {
    const e = this._load(), s = this.oAuthInfo;
    if (s?.authNamespace && s.portalUrl) {
      let t = e[s.authNamespace];
      t && (t = t[s.portalUrl], t && (this.appId = t.appId, this.codeVerifier = t.codeVerifier, this.expires = t.expires, this.refreshToken = t.refreshToken, this.ssl = t.ssl, this.stateUID = t.stateUID, this.token = t.token, this.userId = t.userId));
    }
  }
  _load() {
    let e = {};
    if (this.storage) {
      const s = this.storage.getItem(G);
      if (s) try {
        e = JSON.parse(s);
      } catch (t) {
        console.warn(t);
      }
    }
    return e;
  }
}
K.prototype.declaredClass = "esri.identity.OAuthCredential";
var Q;
let U = Q = class extends ie {
  constructor(d) {
    super(d), this._oAuthCred = null, this.appId = null, this.authNamespace = "/", this.expiration = 20160, this.flowType = "auto", this.forceLogin = !1, this.forceUserId = !1, this.locale = null, this.minTimeUntilExpiration = 30, this.popup = !1, this.popupCallbackUrl = "oauth-callback.html", this.popupWindowFeatures = "height=490,width=800,resizable,scrollbars,status", this.portalUrl = "https://www.arcgis.com", this.preserveUrlHash = !1, this.userId = null;
  }
  clone() {
    return Q.fromJSON(this.toJSON());
  }
};
u([_({ json: { write: !0 } })], U.prototype, "appId", void 0), u([_({ json: { write: !0 } })], U.prototype, "authNamespace", void 0), u([_({ json: { write: !0 } })], U.prototype, "expiration", void 0), u([_({ json: { write: !0 } })], U.prototype, "flowType", void 0), u([_({ json: { write: !0 } })], U.prototype, "forceLogin", void 0), u([_({ json: { write: !0 } })], U.prototype, "forceUserId", void 0), u([_({ json: { write: !0 } })], U.prototype, "locale", void 0), u([_({ json: { write: !0 } })], U.prototype, "minTimeUntilExpiration", void 0), u([_({ json: { write: !0 } })], U.prototype, "popup", void 0), u([_({ json: { write: !0 } })], U.prototype, "popupCallbackUrl", void 0), u([_({ json: { write: !0 } })], U.prototype, "popupWindowFeatures", void 0), u([_({ json: { write: !0 } })], U.prototype, "portalUrl", void 0), u([_({ json: { write: !0 } })], U.prototype, "preserveUrlHash", void 0), u([_({ json: { write: !0 } })], U.prototype, "userId", void 0), U = Q = u([M("esri.identity.OAuthInfo")], U);
const re = U;
let O = class extends ie {
  constructor(d) {
    super(d), this.adminTokenServiceUrl = null, this.currentVersion = null, this.hasPortal = null, this.hasServer = null, this.owningSystemUrl = null, this.owningTenant = null, this.server = null, this.shortLivedTokenValidity = null, this.tokenServiceUrl = null, this.webTierAuth = null;
  }
};
u([_({ json: { write: !0 } })], O.prototype, "adminTokenServiceUrl", void 0), u([_({ json: { write: !0 } })], O.prototype, "currentVersion", void 0), u([_({ json: { write: !0 } })], O.prototype, "hasPortal", void 0), u([_({ json: { write: !0 } })], O.prototype, "hasServer", void 0), u([_({ json: { write: !0 } })], O.prototype, "owningSystemUrl", void 0), u([_({ json: { write: !0 } })], O.prototype, "owningTenant", void 0), u([_({ json: { write: !0 } })], O.prototype, "server", void 0), u([_({ json: { write: !0 } })], O.prototype, "shortLivedTokenValidity", void 0), u([_({ json: { write: !0 } })], O.prototype, "tokenServiceUrl", void 0), u([_({ json: { write: !0 } })], O.prototype, "webTierAuth", void 0), O = u([M("esri.identity.ServerInfo")], O);
const X = O, E = {}, ae = (d) => {
  const e = new R(d.owningSystemUrl).host, s = new R(d.server).host, t = /.+\.arcgis\.com$/i;
  return t.test(e) && t.test(s);
}, Y = (d, e) => !!(ae(d) && e && e.some((s) => s.test(d.server)));
let V = null, L = null;
try {
  V = window.localStorage, L = window.sessionStorage;
} catch {
}
class he extends oe {
  constructor() {
    super(), this._portalConfig = globalThis.esriGeowConfig, this.serverInfos = [], this.oAuthInfos = [], this.credentials = [], this._soReqs = [], this._xoReqs = [], this._portals = [], this._defaultOAuthInfo = null, this._defaultTokenValidity = 60, this.dialog = null, this.tokenValidity = null, this.normalizeWebTierAuth = !1, this._appOrigin = window.origin !== "null" ? window.origin : window.location.origin, this._appUrlObj = B(window.location.href), this._busy = null, this._rejectOnPersistedPageShow = !1, this._oAuthLocationParams = null, this._gwTokenUrl = "/sharing/rest/generateToken", this._agsRest = "/rest/services", this._agsPortal = /\/sharing(\/|$)/i, this._agsAdmin = /(https?:\/\/[^/]+\/[^/]+)\/admin\/?(\/.*)?$/i, this._adminSvcs = /\/rest\/admin\/services(\/|$)/i, this._gwDomains = [{ regex: /^https?:\/\/www\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i, customBaseUrl: "mapsdev.arcgis.com", tokenServiceUrl: "https://dev.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, customBaseUrl: "mapsdevext.arcgis.com", tokenServiceUrl: "https://devext.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i, customBaseUrl: "mapsqa.arcgis.com", tokenServiceUrl: "https://qaext.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }], this._legacyFed = [], this._regexSDirUrl = /http.+\/rest\/services\/?/gi, this._regexServerType = /(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|KnowledgeGraphServer|MapServer|MissionServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer|VideoServer)).*/gi, this._gwUser = /http.+\/users\/([^/]+).*/i, this._gwItem = /http.+\/items\/([^/]+).*/i, this._gwGroup = /http.+\/groups\/([^/]+).*/i, this._rePortalTokenSvc = /\/sharing(\/rest)?\/generatetoken/i, this._createDefaultOAuthInfo = !0, this._hasTestedIfAppIsOnPortal = !1, this._getPlatformSelfError = null, this._getOAuthLocationParams(), window.addEventListener("pageshow", (e) => {
      this._pageShowHandler(e);
    });
  }
  registerServers(e) {
    const s = this.serverInfos;
    s ? (e = e.filter((t) => !this.findServerInfo(t.server)), this.serverInfos = s.concat(e)) : this.serverInfos = e, e.forEach((t) => {
      t.owningSystemUrl && this._portals.push(t.owningSystemUrl), t.hasPortal && this._portals.push(t.server);
    });
  }
  registerOAuthInfos(e) {
    const s = this.oAuthInfos;
    if (s) {
      for (const t of e) {
        const r = this.findOAuthInfo(t.portalUrl);
        r && s.splice(s.indexOf(r), 1);
      }
      this.oAuthInfos = s.concat(e);
    } else this.oAuthInfos = e;
  }
  registerToken(e) {
    e = { ...e };
    const s = this._sanitizeUrl(e.server), t = this._isServerRsrc(s);
    let r, i = this.findServerInfo(s), n = !0;
    i || (i = new X(), i.server = this._getServerInstanceRoot(s), t ? i.hasServer = !0 : (i.tokenServiceUrl = this._getTokenSvcUrl(s), i.hasPortal = !0), this.registerServers([i])), r = this._findCredential(s), r ? (delete e.server, Object.assign(r, e), n = !1) : (r = new S({ userId: e.userId, server: i.server ?? void 0, token: e.token, expires: e.expires, ssl: e.ssl, scope: t ? "server" : "portal" }), r.resources = [s], this.credentials.push(r)), r.emitTokenChange(!1), n || r.refreshServerTokens();
  }
  toJSON() {
    return ne({ serverInfos: this.serverInfos.map((e) => e.toJSON()), oAuthInfos: this.oAuthInfos.map((e) => e.toJSON()), credentials: this.credentials.map((e) => e.toJSON()) });
  }
  initialize(e) {
    if (!e) return;
    typeof e == "string" && (e = JSON.parse(e));
    const s = e.serverInfos, t = e.oAuthInfos, r = e.credentials;
    if (s) {
      const i = [];
      s.forEach((n) => {
        n.server && n.tokenServiceUrl && i.push(n.declaredClass ? n : new X(n));
      }), i.length && this.registerServers(i);
    }
    if (t) {
      const i = [];
      t.forEach((n) => {
        n.appId && i.push(n.declaredClass ? n : new re(n));
      }), i.length && this.registerOAuthInfos(i);
    }
    r && r.forEach((i) => {
      i.server && i.token && i.expires && i.expires > Date.now() && ((i = i.declaredClass ? i : new S(i)).emitTokenChange(), this.credentials.push(i));
    });
  }
  findServerInfo(e) {
    let s;
    e = this._sanitizeUrl(e);
    for (const t of this.serverInfos) if (this._hasSameServerInstance(t.server, e)) {
      s = t;
      break;
    }
    return s;
  }
  findOAuthInfo(e) {
    let s;
    e = this._sanitizeUrl(e);
    for (const t of this.oAuthInfos) if (this._hasSameServerInstance(t.portalUrl, e)) {
      s = t;
      break;
    }
    return s;
  }
  findCredential(e, s) {
    if (!e) return;
    let t;
    e = this._sanitizeUrl(e);
    const r = this._isServerRsrc(e) ? "server" : "portal";
    if (s) {
      for (const i of this.credentials) if (this._hasSameServerInstance(i.server, e) && s === i.userId && i.scope === r) {
        t = i;
        break;
      }
    } else for (const i of this.credentials) if (this._hasSameServerInstance(i.server, e) && this._getIdenticalSvcIdx(e, i) !== -1 && i.scope === r) {
      t = i;
      break;
    }
    return t;
  }
  getCredential(e, s) {
    let t, r, i = !0;
    s && (t = !!s.token, r = s.error, i = s.prompt !== !1), s = { ...s }, e = this._sanitizeUrl(e);
    const n = new AbortController(), h = D();
    if (s.signal && C(s.signal, () => {
      n.abort();
    }), C(n, () => {
      h.reject(new A("identity-manager:user-aborted", "ABORTED"));
    }), _e(n)) return h.promise;
    s.signal = n.signal;
    const p = this._isAdminResource(e), o = t ? this.findCredential(e) : null;
    let l;
    if (o && r && r.details && r.details.httpStatus === 498) o.destroy();
    else if (o) return l = new A("identity-manager:not-authorized", "You are currently signed in as: '" + o.userId + "'. You do not have access to this resource: " + e, { error: r }), h.reject(l), h.promise;
    const c = this._findCredential(e, s);
    if (c) return h.resolve(c), h.promise;
    let a = this.findServerInfo(e);
    if (a) !a.hasPortal && a.server && a.owningSystemUrl && this._hasSameServerInstance(a.server, a.owningSystemUrl) && (a.hasPortal = !0), !a.hasServer && this._isServerRsrc(e) && (a._restInfoPms = this._getTokenSvcUrl(e), a.hasServer = !0);
    else {
      const f = this._getTokenSvcUrl(e);
      if (!f) return l = new A("identity-manager:unknown-resource", "Unknown resource - could not find token service endpoint."), h.reject(l), h.promise;
      a = new X(), a.server = this._getServerInstanceRoot(e), typeof f == "string" ? (a.tokenServiceUrl = f, a.hasPortal = !0) : (a._restInfoPms = f, a.hasServer = !0), this.registerServers([a]);
    }
    return a.hasPortal && a._selfReq === void 0 && (i || b(a.tokenServiceUrl, this._appOrigin) || this._gwDomains.some((f) => f.tokenServiceUrl === a.tokenServiceUrl)) && (a._selfReq = { owningTenant: s?.owningTenant, selfDfd: this._getPortalSelf(a.tokenServiceUrl.replace(this._rePortalTokenSvc, "/sharing/rest/portals/self"), e) }), this._enqueue(e, a, s, h, p);
  }
  getResourceName(e) {
    return this._isRESTService(e) ? e.replace(this._regexSDirUrl, "").replace(this._regexServerType, "") || "" : this._gwUser.test(e) && e.replace(this._gwUser, "$1") || this._gwItem.test(e) && e.replace(this._gwItem, "$1") || this._gwGroup.test(e) && e.replace(this._gwGroup, "$1") || "";
  }
  generateToken(e, s, t) {
    const r = this._rePortalTokenSvc.test(e.tokenServiceUrl), i = new R(this._appOrigin), n = e.shortLivedTokenValidity;
    let h, p, o, l, c, a, f, g;
    s && (g = this.tokenValidity || n || this._defaultTokenValidity, g > n && n > 0 && (g = n)), t && (h = t.isAdmin, p = t.serverUrl, o = t.token, a = t.signal, f = t.ssl, e.customParameters = t.customParameters), h ? l = e.adminTokenServiceUrl : (l = e.tokenServiceUrl, c = new R(l.toLowerCase()), e.webTierAuth && t?.serverUrl && !f && i.scheme === "http" && (b(i.uri, l, !0) || c.scheme === "https" && i.host === c.host && i.port === "7080" && c.port === "7443") && (l = l.replace(/^https:/i, "http:").replace(/:7443/i, ":7080")));
    const v = { query: { request: "getToken", username: s?.username, password: s?.password, serverUrl: p, token: o, expiration: g, referer: h || r ? this._appOrigin : null, client: h ? "referer" : null, f: "json", ...e.customParameters }, method: "post", authMode: "anonymous", useProxy: this._useProxy(e, t), signal: a, ...t?.ioArgs };
    return r || (v.withCredentials = !1), P(l, v).then((w) => {
      const k = w.data;
      if (!k?.token) return new A("identity-manager:authentication-failed", "Unable to generate token");
      const m = e.server;
      return E[m] || (E[m] = {}), s && (E[m][s.username] = s.password), k.validity = g, k;
    });
  }
  isBusy() {
    return !!this._busy;
  }
  async checkSignInStatus(e) {
    return (await this.checkAppAccess(e, "")).credential;
  }
  checkAppAccess(e, s, t) {
    let r = !1;
    return this.getCredential(e, { prompt: !1 }).then((i) => {
      let n;
      const h = { f: "json" };
      if (i.scope === "portal") if (s && (this._doPortalSignIn(e) || t?.force)) n = i.server + "/sharing/rest/oauth2/validateAppAccess", h.client_id = s;
      else {
        if (!i.token) return { credential: i };
        n = i.server + "/sharing/rest";
      }
      else {
        if (!i.token) return { credential: i };
        n = i.server + "/rest/services";
      }
      return i.token && (h.token = i.token), P(n, { query: h, authMode: "anonymous" }).then((p) => {
        if (p.data.valid === !1) throw new A("identity-manager:not-authorized", `You are currently signed in as: '${i.userId}'.`, p.data);
        return r = !!p.data.viewOnlyUserTypeApp, { credential: i };
      }).catch((p) => {
        if (p.name === "identity-manager:not-authorized") throw p;
        const o = p.details?.httpStatus;
        if (o === 498) throw i.destroy(), new A("identity-manager:not-authenticated", "User is not signed in.");
        if (o === 400) throw new A("identity-manager:invalid-request");
        return { credential: i };
      });
    }).then((i) => ({ credential: i.credential, viewOnly: r }));
  }
  setOAuthResponseHash(e) {
    e && (e.charAt(0) === "#" && (e = e.substring(1)), this._processOAuthPopupParams(j(e)));
  }
  setOAuthRedirectionHandler(e) {
    this._oAuthRedirectFunc = e;
  }
  setProtocolErrorHandler(e) {
    this._protocolFunc = e;
  }
  signIn(e, s, t = {}) {
    const r = D(), i = () => {
      p?.remove(), o?.remove(), this.dialog?.destroy(), this.dialog = p = o = null;
    }, n = () => {
      i(), this._oAuthDfd = null, r.reject(new A("identity-manager:user-aborted", "ABORTED"));
    };
    t.signal && C(t.signal, () => {
      n();
    });
    const h = new se({ open: !0, resource: this.getResourceName(e), server: s.server });
    this.dialog = h, this.emit("dialog-create");
    let p = h.on("cancel", n), o = h.on("submit", (l) => {
      this.generateToken(s, l, { isAdmin: t.isAdmin, signal: t.signal }).then((c) => {
        i();
        const a = new S({ userId: l.username, server: s.server ?? void 0, token: c.token, expires: c.expires != null ? Number(c.expires) : null, ssl: !!c.ssl, isAdmin: t.isAdmin, validity: c.validity });
        r.resolve(a);
      }).catch((c) => {
        h.error = c, h.signingIn = !1;
      });
    });
    return r.promise;
  }
  oAuthSignIn(e, s, t, r) {
    this._oAuthDfd = D();
    const i = this._oAuthDfd;
    let n;
    r?.signal && C(r.signal, () => {
      const a = this._oAuthDfd && this._oAuthDfd.oAuthWin_;
      a && !a.closed ? a.close() : this.dialog && l();
    }), i.resUrl_ = e, i.sinfo_ = s, i.oinfo_ = t;
    const h = t._oAuthCred;
    if (h.storage && (t.flowType === "authorization-code" || t.flowType === "auto" && s.currentVersion >= 8.4)) {
      let a = crypto.getRandomValues(new Uint8Array(32));
      n = z(a), h.codeVerifier = n, a = crypto.getRandomValues(new Uint8Array(32)), h.stateUID = z(a), h.save() || (h.codeVerifier = n = null);
    } else h.codeVerifier = null;
    let p, o;
    this._getCodeChallenge(n).then((a) => {
      const f = !r || r.oAuthPopupConfirmation !== !1;
      if (!t.popup || !f) return void this._doOAuthSignIn(e, s, t, a);
      const g = new se({ oAuthPrompt: !0, server: s.server, open: !0 });
      this.dialog = g, this.emit("dialog-create"), p = g.on("cancel", l), o = g.on("submit", () => {
        c(), this._doOAuthSignIn(e, s, t, a);
      });
    });
    const l = () => {
      c(), this._oAuthDfd = null, i.reject(new A("identity-manager:user-aborted", "ABORTED"));
    }, c = () => {
      p?.remove(), o?.remove(), this.dialog?.destroy(), this.dialog = null;
    };
    return i.promise;
  }
  destroyCredentials() {
    this.credentials && this.credentials.slice().forEach((e) => {
      e.destroy();
    }), this.emit("credentials-destroy");
  }
  enablePostMessageAuth(e = "https://www.arcgis.com/sharing/rest") {
    this._postMessageAuthHandle && this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = F(window, "message", (s) => {
      if ((s.origin === this._appOrigin || s.origin.endsWith(".arcgis.com")) && s.data?.type === "arcgis:auth:requestCredential") {
        const t = s.source;
        this.getCredential(e).then((r) => {
          t.postMessage({ type: "arcgis:auth:credential", credential: { expires: r.expires, server: r.server, ssl: r.ssl, token: r.token, userId: r.userId } }, s.origin);
        }).catch((r) => {
          t.postMessage({ type: "arcgis:auth:error", error: { name: r.name, message: r.message } }, s.origin);
        });
      }
    });
  }
  disablePostMessageAuth() {
    this._postMessageAuthHandle && (this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = null);
  }
  _getOAuthLocationParams() {
    let e = window.location.hash;
    if (e) {
      e.charAt(0) === "#" && (e = e.substring(1));
      const t = j(e);
      let r = !1;
      if (t.access_token && t.expires_in && t.state && t.hasOwnProperty("username")) try {
        t.state = JSON.parse(t.state), t.state.portalUrl && (this._oAuthLocationParams = t, r = !0);
      } catch {
      }
      else if (t.error && t.error_description && (console.log("IdentityManager OAuth Error: ", t.error, " - ", t.error_description), t.error === "access_denied" && (r = !0, t.state))) try {
        t.state = JSON.parse(t.state);
      } catch {
      }
      r && (window.location.hash = t.state?.hash || "");
    }
    let s = window.location.search;
    if (s) {
      s.charAt(0) === "?" && (s = s.substring(1));
      const t = j(s);
      let r = !1;
      if (t.code && t.state) try {
        t.state = JSON.parse(t.state), t.state.portalUrl && t.state.uid && (this._oAuthLocationParams = t, r = !0);
      } catch {
      }
      else if (t.error && t.error_description && (console.log("IdentityManager OAuth Error: ", t.error, " - ", t.error_description), t.error === "access_denied" && (r = !0, t.state))) try {
        t.state = JSON.parse(t.state);
      } catch {
      }
      if (r) {
        const i = { ...t };
        ["code", "error", "error_description", "message_code", "persist", "state"].forEach((p) => {
          delete i[p];
        });
        const n = $(i), h = window.location.pathname + (n ? `?${n}` : "") + (t.state?.hash || "");
        window.history.replaceState(window.history.state, "", h);
      }
    }
  }
  _getOAuthToken(e, s, t, r, i) {
    return e = e.replace(/^http:/i, "https:"), P(`${e}/sharing/rest/oauth2/token`, { authMode: "anonymous", method: "post", query: r && i ? { grant_type: "authorization_code", code: s, redirect_uri: r, client_id: t, code_verifier: i } : { grant_type: "refresh_token", refresh_token: s, client_id: t } }).then((n) => n.data);
  }
  async _getCodeChallenge(e) {
    if (e && globalThis.isSecureContext) {
      const s = new TextEncoder().encode(e), t = await crypto.subtle.digest("SHA-256", s);
      return z(new Uint8Array(t));
    }
    return null;
  }
  _pageShowHandler(e) {
    if (e.persisted && this.isBusy() && this._rejectOnPersistedPageShow) {
      const s = new A("identity-manager:user-aborted", "ABORTED");
      this._errbackFunc(s);
    }
  }
  _findCredential(e, s) {
    let t, r, i, n, h = -1;
    const p = s?.token, o = s?.resource, l = this._isServerRsrc(e) ? "server" : "portal", c = this.credentials.filter((a) => this._hasSameServerInstance(a.server, e) && a.scope === l);
    if (e = o || e, c.length) if (c.length === 1) {
      if (t = c[0], i = this.findServerInfo(t.server), r = i?.owningSystemUrl, n = r ? this.findCredential(r, t.userId) : void 0, h = this._getIdenticalSvcIdx(e, t), !p) return h === -1 && t.resources.push(e), this._addResource(e, n), t;
      h !== -1 && (t.resources.splice(h, 1), this._removeResource(e, n));
    } else {
      let a, f;
      if (c.some((g) => (f = this._getIdenticalSvcIdx(e, g), f !== -1 && (a = g, i = this.findServerInfo(a.server), r = i?.owningSystemUrl, n = r ? this.findCredential(r, a.userId) : void 0, h = f, !0))), p) a && (a.resources.splice(h, 1), this._removeResource(e, n));
      else if (a) return this._addResource(e, n), a;
    }
  }
  _findOAuthInfo(e) {
    let s = this.findOAuthInfo(e);
    if (!s) {
      for (const t of this.oAuthInfos) if (this._isIdProvider(t.portalUrl, e)) {
        s = t;
        break;
      }
    }
    return s;
  }
  _addResource(e, s) {
    s && this._getIdenticalSvcIdx(e, s) === -1 && s.resources.push(e);
  }
  _removeResource(e, s) {
    let t = -1;
    s && (t = this._getIdenticalSvcIdx(e, s), t > -1 && s.resources.splice(t, 1));
  }
  _useProxy(e, s) {
    return s?.isAdmin && !b(e.adminTokenServiceUrl, this._appOrigin) || !this._isPortalDomain(e.tokenServiceUrl) && String(e.currentVersion) === "10.1" && !b(e.tokenServiceUrl, this._appOrigin);
  }
  _getOrigin(e) {
    const s = new R(e);
    return s.scheme + "://" + s.host + (s.port != null ? ":" + s.port : "");
  }
  _getServerInstanceRoot(e) {
    const s = e.toLowerCase();
    let t = s.indexOf(this._agsRest);
    return t === -1 && this._isAdminResource(e) && (t = this._agsAdmin.test(e) ? e.replace(this._agsAdmin, "$1").length : e.search(this._adminSvcs)), t !== -1 || fe(s) || (t = s.indexOf("/sharing")), t === -1 && s.endsWith("/") && (t = s.length - 1), t > -1 ? e.substring(0, t) : e;
  }
  _hasSameServerInstance(e, s) {
    return e.endsWith("/") && (e = e.slice(0, -1)), e = e.toLowerCase(), s = this._getServerInstanceRoot(s).toLowerCase(), e = ee(e), s = ee(s), (e = e.substring(e.indexOf(":"))) === (s = s.substring(s.indexOf(":")));
  }
  _sanitizeUrl(e) {
    const s = (H.request.proxyUrl || "").toLowerCase(), t = s ? e.toLowerCase().indexOf(s + "?") : -1;
    return t !== -1 && (e = e.substring(t + s.length + 1)), e = ge(e), B(e).path;
  }
  _isRESTService(e) {
    return e.includes(this._agsRest);
  }
  _isAdminResource(e) {
    return this._agsAdmin.test(e) || this._adminSvcs.test(e);
  }
  _isServerRsrc(e) {
    return this._isRESTService(e) || this._isAdminResource(e);
  }
  _isIdenticalService(e, s) {
    let t = !1;
    if (this._isRESTService(e) && this._isRESTService(s)) {
      const r = this._getSuffix(e).toLowerCase(), i = this._getSuffix(s).toLowerCase();
      if (t = r === i, !t) {
        const n = /(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;
        t = r.replaceAll(n, "$1") === i.replaceAll(n, "$1");
      }
    } else this._isAdminResource(e) && this._isAdminResource(s) ? t = !0 : this._isServerRsrc(e) || this._isServerRsrc(s) || !this._isPortalDomain(e) || (t = !0);
    return t;
  }
  _isPortalDomain(e) {
    const s = new R(e.toLowerCase()), t = this._portalConfig;
    let r = this._gwDomains.some((i) => i.regex.test(s.uri));
    return !r && t && (r = this._hasSameServerInstance(this._getServerInstanceRoot(t.restBaseUrl), s.uri)), r || H.portalUrl && (r = b(s, H.portalUrl, !0)), r || (r = this._portals.some((i) => this._hasSameServerInstance(i, s.uri))), r = r || this._agsPortal.test(s.path), r;
  }
  _isIdProvider(e, s) {
    let t = -1, r = -1;
    this._gwDomains.forEach((n, h) => {
      t === -1 && n.regex.test(e) && (t = h), r === -1 && n.regex.test(s) && (r = h);
    });
    let i = !1;
    if (t > -1 && r > -1 && (t === 0 || t === 4 ? r !== 0 && r !== 4 || (i = !0) : t === 1 ? r !== 1 && r !== 2 || (i = !0) : t === 2 ? r === 2 && (i = !0) : t === 3 && r === 3 && (i = !0)), !i) {
      const n = this.findServerInfo(s), h = n?.owningSystemUrl;
      h && ae(n) && this._isPortalDomain(h) && this._isIdProvider(e, h) && (i = !0);
    }
    return i;
  }
  _getIdenticalSvcIdx(e, s) {
    let t = -1;
    for (let r = 0; r < s.resources.length; r++) {
      const i = s.resources[r];
      if (this._isIdenticalService(e, i)) {
        t = r;
        break;
      }
    }
    return t;
  }
  _getSuffix(e) {
    return e.replace(this._regexSDirUrl, "").replace(this._regexServerType, "$1");
  }
  _getTokenSvcUrl(e) {
    let s, t, r;
    if (this._isRESTService(e) || this._isAdminResource(e)) {
      const i = this._getServerInstanceRoot(e);
      return s = i + "/admin/generateToken", t = P(e = i + "/rest/info", { query: { f: "json" } }).then((n) => n.data), { adminUrl: s, promise: t };
    }
    if (this._isPortalDomain(e)) {
      let i = "";
      if (this._gwDomains.some((n) => (n.regex.test(e) && (i = n.tokenServiceUrl), !!i)), i || this._portals.some((n) => (this._hasSameServerInstance(n, e) && (i = n + this._gwTokenUrl), !!i)), i || (r = e.toLowerCase().indexOf("/sharing"), r !== -1 && (i = e.substring(0, r) + this._gwTokenUrl)), i || (i = this._getOrigin(e) + this._gwTokenUrl), i) {
        const n = new R(e).port;
        /^http:\/\//i.test(e) && n === "7080" && (i = i.replace(/:7080/i, ":7443")), i = i.replace(/http:/i, "https:");
      }
      return i;
    }
  }
  _processOAuthResponseParams(e, s, t) {
    const r = s._oAuthCred;
    if (e.code) {
      const n = r.codeVerifier;
      return r.codeVerifier = null, r.stateUID = null, r.save(), this._getOAuthToken(t.server, e.code, s.appId, this._getRedirectURI(s, !0), n).then((h) => {
        const p = new S({ userId: h.username, server: t.server ?? void 0, token: h.access_token, expires: Date.now() + 1e3 * h.expires_in, ssl: h.ssl, oAuthState: e.state, _oAuthCred: r });
        return s.userId = p.userId, r.storage = h.persist ? V : L, r.refreshToken = h.refresh_token, r.token = null, r.expires = h.refresh_token_expires_in ? Date.now() + 1e3 * h.refresh_token_expires_in : null, r.userId = p.userId, r.ssl = p.ssl, r.save(), p;
      });
    }
    const i = new S({ userId: e.username, server: t.server ?? void 0, token: e.access_token, expires: Date.now() + 1e3 * Number(e.expires_in), ssl: e.ssl === "true", oAuthState: e.state, _oAuthCred: r });
    return s.userId = i.userId, r.storage = e.persist ? V : L, r.refreshToken = null, r.token = i.token, r.expires = i.expires, r.userId = i.userId, r.ssl = i.ssl, r.save(), Promise.resolve(i);
  }
  _processOAuthPopupParams(e) {
    const s = this._oAuthDfd;
    if (this._oAuthDfd = null, s) if (clearInterval(this._oAuthIntervalId), this._oAuthOnPopupHandle?.remove(), e.error) {
      const t = e.error === "access_denied", r = new A(t ? "identity-manager:user-aborted" : "identity-manager:authentication-failed", t ? "ABORTED" : "OAuth: " + e.error + " - " + e.error_description);
      s.reject(r);
    } else this._processOAuthResponseParams(e, s.oinfo_, s.sinfo_).then((t) => {
      s.resolve(t);
    }).catch((t) => {
      s.reject(t);
    });
  }
  _setOAuthResponseQueryString(e) {
    e && (e.charAt(0) === "?" && (e = e.substring(1)), this._processOAuthPopupParams(j(e)));
  }
  async _exchangeToken(e, s, t) {
    return (await P(`${e}/sharing/rest/oauth2/exchangeToken`, { authMode: "anonymous", method: "post", query: { f: "json", client_id: s, token: t } })).data.token;
  }
  async _getPlatformSelf(e, s) {
    if (this._getPlatformSelfError && Date.now() - this._getPlatformSelfError[1] < 1e3) throw this._getPlatformSelfError[0];
    e = e.replace(/^http:/i, "https:");
    try {
      const t = await P(`${e}/sharing/rest/oauth2/platformSelf`, { authMode: "anonymous", headers: { "X-Esri-Auth-Client-Id": s, "X-Esri-Auth-Redirect-Uri": window.location.href.replace(/#.*$/, "") }, method: "post", query: { f: "json", expiration: 30 }, withCredentials: !0 });
      return this._getPlatformSelfError = null, t.data;
    } catch (t) {
      throw t.details?.messageCode === "OAUTH_0066" && (this._getPlatformSelfError = [t, Date.now()]), t;
    }
  }
  _getPortalSelf(e, s) {
    let t;
    return this._gwDomains.some((r) => (r.regex.test(e) && (t = r.customBaseUrl), !!t)), t ? Promise.resolve({ allSSL: !0, currentVersion: "8.4", customBaseUrl: t, portalMode: "multitenant", supportsOAuth: !0 }) : (this._appOrigin.startsWith("https:") ? e = e.replace(/^http:/i, "https:").replace(/:7080/i, ":7443") : /^http:/i.test(s) && (e = e.replace(/^https:/i, "http:").replace(/:7443/i, ":7080")), P(e, { query: { f: "json" }, authMode: "anonymous", withCredentials: !0 }).then((r) => r.data));
  }
  _doPortalSignIn(e) {
    const s = this._portalConfig, t = window.location.href, r = this.findServerInfo(e);
    return !(!s && !this._isPortalDomain(t) || !(r ? r.hasPortal || r.owningSystemUrl && this._isPortalDomain(r.owningSystemUrl) : this._isPortalDomain(e)) || !(this._isIdProvider(t, e) || s && (this._hasSameServerInstance(this._getServerInstanceRoot(s.restBaseUrl), e) || this._isIdProvider(s.restBaseUrl, e)) || b(t, e, !0)));
  }
  _checkProtocol(e, s, t, r) {
    let i = !0;
    const n = r ? s.adminTokenServiceUrl : s.tokenServiceUrl;
    return n.trim().toLowerCase().startsWith("https:") && !this._appOrigin.startsWith("https:") && me(n) && (i = !!this._protocolFunc && !!this._protocolFunc({ resourceUrl: e, serverInfo: s }), !i) && t(new A("identity-manager:aborted", "Aborted the Sign-In process to avoid sending password over insecure connection.")), i;
  }
  _enqueue(e, s, t, r, i, n) {
    return r || (r = D()), r.resUrl_ = e, r.sinfo_ = s, r.options_ = t, r.admin_ = i, r.refresh_ = n, this._busy ? this._hasSameServerInstance(this._getServerInstanceRoot(e), this._busy.resUrl_) ? (this._oAuthDfd && this._oAuthDfd.oAuthWin_ && this._oAuthDfd.oAuthWin_.focus(), this._soReqs.push(r)) : this._xoReqs.push(r) : this._doSignIn(r), r.promise;
  }
  _doSignIn(e) {
    this._busy = e, this._rejectOnPersistedPageShow = !1;
    const s = (o) => {
      const l = e.options_?.resource, c = e.resUrl_, a = e.refresh_;
      let f = !1;
      this.credentials.includes(o) || (a && this.credentials.includes(a) ? (a.userId = o.userId, a.token = o.token, a.expires = o.expires, a.validity = o.validity, a.ssl = o.ssl, a.creationTime = o.creationTime, f = !0, o = a) : this.credentials.push(o)), o.resources || (o.resources = []), o.resources.includes(l || c) || o.resources.push(l || c), o.scope = this._isServerRsrc(c) ? "server" : "portal", o.emitTokenChange();
      const g = this._soReqs, v = {};
      this._soReqs = [], g.forEach((w) => {
        if (!this._isIdenticalService(c, w.resUrl_)) {
          const k = this._getSuffix(w.resUrl_);
          v[k] || (v[k] = !0, o.resources.push(w.resUrl_));
        }
      }), e.resolve(o), g.forEach((w) => {
        this._hasSameServerInstance(this._getServerInstanceRoot(c), w.resUrl_) ? w.resolve(o) : this._soReqs.push(w);
      }), this._busy = e.resUrl_ = e.sinfo_ = e.refresh_ = null, f || this.emit("credential-create", { credential: o }), this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, t = (o) => {
      e.reject(o), this._busy = e.resUrl_ = e.sinfo_ = e.refresh_ = null, this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, r = (o, l, c, a) => {
      const f = e.sinfo_, g = !e.options_ || e.options_.prompt !== !1, v = f.hasPortal && this._findOAuthInfo(e.resUrl_);
      let w, k;
      if (o) s(new S({ userId: o, server: f.server ?? void 0, token: c ?? void 0, expires: a != null ? Number(a) : null, ssl: !!l }));
      else if (window !== window.parent && this._appUrlObj.query?.["arcgis-auth-origin"] && this._appUrlObj.query?.["arcgis-auth-portal"] && this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]), e.resUrl_)) {
        window.parent.postMessage({ type: "arcgis:auth:requestCredential" }, this._appUrlObj.query["arcgis-auth-origin"]);
        const m = F(window, "message", (I) => {
          I.source === window.parent && I.data && (I.data.type === "arcgis:auth:credential" ? (m.remove(), I.data.credential.expires < Date.now() ? t(new A("identity-manager:credential-request-failed", "Parent application's token has expired.")) : s(new S(I.data.credential))) : I.data.type === "arcgis:auth:error" && (m.remove(), I.data.error.name === "tokenExpiredError" ? t(new A("identity-manager:credential-request-failed", "Parent application's token has expired.")) : t(A.fromJSON(I.data.error))));
        });
        C(e.options_?.signal, () => {
          m.remove();
        });
      } else if (v) {
        let m = v._oAuthCred;
        if (!m) {
          const I = new K(v, V), y = new K(v, L);
          I.isValid() && y.isValid() ? I.expires > y.expires ? (m = I, y.destroy()) : (m = y, I.destroy()) : m = I.isValid() ? I : y, v._oAuthCred = m;
        }
        if (m.isValid()) {
          w = new S({ userId: m.userId ?? void 0, server: f.server ?? void 0, token: m.token ?? void 0, expires: m.expires, ssl: m.ssl ?? void 0, _oAuthCred: m });
          const I = v.appId !== m.appId && this._doPortalSignIn(e.resUrl_);
          I || m.refreshToken ? (e._pendingDfd = m.refreshToken ? this._getOAuthToken(f.server, m.refreshToken, m.appId).then((y) => (w.expires = Date.now() + 1e3 * y.expires_in, w.token = y.access_token, w)) : Promise.resolve(w), e._pendingDfd.then((y) => I ? this._exchangeToken(y.server, v.appId, y.token).then((ce) => (y.token = ce, y)).catch(() => y) : y).then((y) => {
            s(y);
          }).catch(() => {
            m?.destroy(), r();
          })) : s(w);
        } else if (this._oAuthLocationParams && this._hasSameServerInstance(v.portalUrl, this._oAuthLocationParams.state.portalUrl) && (this._oAuthLocationParams.access_token || this._oAuthLocationParams.code && this._oAuthLocationParams.state.uid === m.stateUID && m.codeVerifier)) {
          const I = this._oAuthLocationParams;
          this._oAuthLocationParams = null, e._pendingDfd = this._processOAuthResponseParams(I, v, f).then((y) => {
            s(y);
          }).catch(t);
        } else {
          const I = () => {
            g ? e._pendingDfd = this.oAuthSignIn(e.resUrl_, f, v, e.options_).then(s, t) : (k = new A("identity-manager:not-authenticated", "User is not signed in."), t(k));
          };
          this._doPortalSignIn(e.resUrl_) ? e._pendingDfd = this._getPlatformSelf(f.server, v.appId).then((y) => {
            b(y.portalUrl, this._appOrigin, !0) ? (w = new S({ userId: y.username, server: f.server ?? void 0, expires: Date.now() + 1e3 * y.expires_in, token: y.token }), s(w)) : I();
          }).catch(I) : I();
        }
      } else if (g) {
        if (this._checkProtocol(e.resUrl_, f, t, e.admin_)) {
          let m = e.options_;
          e.admin_ && (m = m || {}, m.isAdmin = !0), e._pendingDfd = this.signIn(e.resUrl_, f, m).then(s, t);
        }
      } else k = new A("identity-manager:not-authenticated", "User is not signed in."), t(k);
    }, i = () => {
      const o = e.sinfo_, l = o.owningSystemUrl, c = e.options_;
      let a, f, g, v;
      if (c && (a = c.token, f = c.error, g = c.prompt), v = this._findCredential(l, { token: a, resource: e.resUrl_ }), !v) {
        for (const w of this.credentials) if (this._isIdProvider(l, w.server)) {
          v = w;
          break;
        }
      }
      if (v) {
        const w = this.findCredential(e.resUrl_, v.userId);
        if (w) s(w);
        else if (Y(o, this._legacyFed)) {
          const k = v.toJSON();
          k.server = o.server, k.resources = null, s(new S(k));
        } else
          (e._pendingDfd = this.generateToken(this.findServerInfo(v.server), null, { serverUrl: e.resUrl_, token: v.token, signal: e.options_.signal, ssl: v.ssl })).then((k) => {
            s(new S({ userId: v?.userId, server: o.server ?? void 0, token: k.token, expires: k.expires != null ? Number(k.expires) : null, ssl: !!k.ssl, isAdmin: e.admin_, validity: k.validity }));
          }, t);
      } else
        this._busy = null, a && (e.options_.token = null), (e._pendingDfd = this.getCredential(l.replace(/\/?$/, "/sharing"), { resource: e.resUrl_, owningTenant: o.owningTenant, signal: e.options_.signal, token: a, error: f, prompt: g })).then(() => {
          this._enqueue(e.resUrl_, e.sinfo_, e.options_, e, e.admin_);
        }, (w) => {
          e.resUrl_ = e.sinfo_ = e.refresh_ = null, e.reject(w);
        });
    };
    this._errbackFunc = t;
    const n = e.sinfo_.owningSystemUrl, h = this._isServerRsrc(e.resUrl_), p = e.sinfo_._restInfoPms;
    p ? p.promise.then((o) => {
      const l = e.sinfo_;
      if (l._restInfoPms) {
        l.adminTokenServiceUrl = l._restInfoPms.adminUrl, l._restInfoPms = null, l.tokenServiceUrl = (q("authInfo.tokenServicesUrl", o) || q("authInfo.tokenServiceUrl", o) || q("tokenServiceUrl", o)) ?? null, l.shortLivedTokenValidity = q("authInfo.shortLivedTokenValidity", o) ?? null, l.currentVersion = o.currentVersion, l.owningTenant = o.owningTenant;
        const c = l.owningSystemUrl = o.owningSystemUrl;
        c && this._portals.push(c);
      }
      h && l.owningSystemUrl ? i() : r();
    }, () => {
      e.sinfo_._restInfoPms = null;
      const o = new A("identity-manager:server-identification-failed", "Unknown resource - could not find token service endpoint.");
      t(o);
    }) : h && n ? i() : e.sinfo_._selfReq ? e.sinfo_._selfReq.selfDfd.then((o) => {
      const l = {};
      let c, a, f, g;
      return o && (c = o.user?.username, l.username = c, l.allSSL = o.allSSL, a = o.supportsOAuth, g = parseFloat(o.currentVersion), o.portalMode === "multitenant" && (f = o.customBaseUrl), e.sinfo_.currentVersion = g), e.sinfo_.webTierAuth = !!c, c && this.normalizeWebTierAuth ? this.generateToken(e.sinfo_, null, { ssl: l.allSSL }).catch(() => null).then((v) => (l.portalToken = v?.token, l.tokenExpiration = v?.expires, l)) : !c && a && g >= 4.4 && !this._findOAuthInfo(e.resUrl_) ? this._generateOAuthInfo({ portalUrl: e.sinfo_.server, customBaseUrl: f, owningTenant: e.sinfo_._selfReq.owningTenant }).catch(() => null).then(() => l) : l;
    }).catch(() => null).then((o) => {
      e.sinfo_._selfReq = null, o ? r(o.username, o.allSSL, o.portalToken, o.tokenExpiration) : r();
    }) : r();
  }
  _generateOAuthInfo(e) {
    let s, t = null, r = e.portalUrl;
    const i = e.customBaseUrl, n = e.owningTenant, h = !this._defaultOAuthInfo && this._createDefaultOAuthInfo && !this._hasTestedIfAppIsOnPortal;
    if (h) {
      t = window.location.href;
      let p = t.indexOf("?");
      p > -1 && (t = t.slice(0, p)), p = t.search(/\/(apps|home)\//), t = p > -1 ? t.slice(0, p) : null;
    }
    return h && t ? (this._hasTestedIfAppIsOnPortal = !0, s = P(t + "/sharing/rest", { query: { f: "json" } }).then(() => {
      this._defaultOAuthInfo = new re({ appId: "arcgisonline", popupCallbackUrl: t + "/home/oauth-callback.html" });
    })) : s = Promise.resolve(), s.then(() => {
      if (this._defaultOAuthInfo) return r = r.replace(/^http:/i, "https:"), P(r + "/sharing/rest/oauth2/validateRedirectUri", { query: { accountId: n, client_id: this._defaultOAuthInfo.appId, redirect_uri: te(this._defaultOAuthInfo.popupCallbackUrl), f: "json" } }).then((p) => {
        if (p.data.valid) {
          const o = this._defaultOAuthInfo.clone();
          p.data.urlKey && i ? o.portalUrl = "https://" + p.data.urlKey.toLowerCase() + "." + i : o.portalUrl = r, o.popup = window !== window.top || !(b(r, this._appOrigin) || this._gwDomains.some((l) => l.regex.test(r) && l.regex.test(this._appOrigin))), this.oAuthInfos.push(o);
        }
      });
    });
  }
  _doOAuthSignIn(e, s, t, r) {
    const i = t._oAuthCred, n = { portalUrl: t.portalUrl };
    !t.popup && t.preserveUrlHash && window.location.hash && (n.hash = window.location.hash), i.stateUID && (n.uid = i.stateUID);
    const h = { client_id: t.appId, response_type: i.codeVerifier ? "code" : "token", state: JSON.stringify(n), expiration: t.expiration, locale: t.locale, redirect_uri: this._getRedirectURI(t, !!i.codeVerifier) };
    t.forceLogin && (h.force_login = !0), t.forceUserId && t.userId && (h.prepopulatedusername = t.userId), !t.popup && this._doPortalSignIn(e) && (h.redirectToUserOrgUrl = !0), i.codeVerifier && (h.code_challenge = r || i.codeVerifier, h.code_challenge_method = r ? "S256" : "plain");
    const p = t.portalUrl.replace(/^http:/i, "https:") + "/sharing/oauth2/authorize", o = p + "?" + $(h);
    if (t.popup) {
      const l = window.open(o, "esriJSAPIOAuth", t.popupWindowFeatures);
      if (l) l.focus(), this._oAuthDfd.oAuthWin_ = l, this._oAuthIntervalId = setInterval(() => {
        if (l.closed) {
          clearInterval(this._oAuthIntervalId), this._oAuthOnPopupHandle.remove();
          const c = this._oAuthDfd;
          if (c) {
            const a = new A("identity-manager:user-aborted", "ABORTED");
            c.reject(a);
          }
        }
      }, 500), this._oAuthOnPopupHandle = F(window, ["arcgis:auth:hash", "arcgis:auth:location:search"], (c) => {
        c.type === "arcgis:auth:hash" ? this.setOAuthResponseHash(c.detail) : this._setOAuthResponseQueryString(c.detail);
      });
      else {
        const c = new A("identity-manager:popup-blocked", "ABORTED");
        this._oAuthDfd.reject(c);
      }
    } else this._rejectOnPersistedPageShow = !0, this._oAuthRedirectFunc ? this._oAuthRedirectFunc({ authorizeParams: h, authorizeUrl: p, resourceUrl: e, serverInfo: s, oAuthInfo: t }) : window.location.href = o;
  }
  _getRedirectURI(e, s) {
    const t = window.location.href.replace(/#.*$/, "");
    if (e.popup) return te(e.popupCallbackUrl);
    if (s) {
      const r = B(t);
      return r.query && ["code", "error", "error_description", "message_code", "persist", "state"].forEach((i) => {
        delete r.query[i];
      }), ve(r.path, r.query);
    }
    return t;
  }
}
he.prototype.declaredClass = "esri.identity.IdentityManagerBase";
let S = class extends oe.EventedAccessor {
  constructor(d) {
    super(d), this._oAuthCred = null, this.tokenRefreshBuffer = 2, d?._oAuthCred && (this._oAuthCred = d._oAuthCred);
  }
  initialize() {
    this.resources = this.resources || [], this.creationTime == null && (this.creationTime = Date.now());
  }
  refreshToken() {
    const d = N, e = d.findServerInfo(this.server), s = e?.owningSystemUrl, t = !!s && this.scope === "server", r = t && Y(e, d._legacyFed), i = e.webTierAuth, n = i && d.normalizeWebTierAuth, h = E[this.server], p = h?.[this.userId];
    let o, l = this.resources && this.resources[0], c = t ? d.findServerInfo(s) : null, a = { username: this.userId, password: p };
    if (i && !n) return;
    t && !c && d.serverInfos.some((g) => (d._isIdProvider(s, g.server) && (c = g), !!c));
    const f = c ? d.findCredential(c.server, this.userId) : null;
    if (!t || f) {
      if (!r) {
        if (t) o = { serverUrl: l, token: f?.token, ssl: f?.ssl };
        else if (n) a = null, o = { ssl: this.ssl };
        else {
          if (!p) {
            let g;
            return l && (l = d._sanitizeUrl(l), this._enqueued = 1, g = d._enqueue(l, e, null, null, this.isAdmin, this), g.then(() => {
              this._enqueued = 0, this.refreshServerTokens();
            }).catch(() => {
              this._enqueued = 0;
            })), g;
          }
          this.isAdmin && (o = { isAdmin: !0 });
        }
        return d.generateToken(t ? c : e, t ? null : a, o).then((g) => {
          this.token = g.token, this.expires = g.expires != null ? Number(g.expires) : null, this.creationTime = Date.now(), this.validity = g.validity, this.emitTokenChange(), this.refreshServerTokens();
        }).catch(() => {
        });
      }
      f?.refreshToken();
    }
  }
  refreshServerTokens() {
    if (this.scope === "portal") {
      const d = N;
      d.credentials.forEach((e) => {
        const s = d.findServerInfo(e.server), t = s?.owningSystemUrl;
        e !== this && e.userId === this.userId && t && e.scope === "server" && (d._hasSameServerInstance(this.server, t) || d._isIdProvider(t, this.server)) && (Y(s, d._legacyFed) ? (e.token = this.token, e.expires = this.expires, e.creationTime = this.creationTime, e.validity = this.validity, e.emitTokenChange()) : e.refreshToken());
      });
    }
  }
  emitTokenChange(d) {
    clearTimeout(this._refreshTimer);
    const e = N, s = this.server ? e.findServerInfo(this.server) : null, t = s?.owningSystemUrl, r = t ? e.findServerInfo(t) : null;
    d === !1 || t && this.scope !== "portal" && (!r?.webTierAuth || e.normalizeWebTierAuth) || this.expires == null && this.validity == null || this._startRefreshTimer(), this.emit("token-change");
  }
  destroy() {
    this.userId = this.server = this.token = this.expires = this.validity = this.resources = this.creationTime = null, this._oAuthCred && (this._oAuthCred.destroy(), this._oAuthCred = null);
    const d = N, e = d.credentials.indexOf(this);
    e > -1 && d.credentials.splice(e, 1), this.emitTokenChange(), this.emit("destroy");
  }
  toJSON() {
    const d = ne({ userId: this.userId, server: this.server, token: this.token, expires: this.expires, validity: this.validity, ssl: this.ssl, isAdmin: this.isAdmin, creationTime: this.creationTime, scope: this.scope }), e = this.resources;
    return e && e.length > 0 && (d.resources = e.slice()), d;
  }
  _startRefreshTimer() {
    clearTimeout(this._refreshTimer);
    const d = 6e4 * this.tokenRefreshBuffer, e = 2 ** 31 - 1;
    let s = (this.validity ? this.creationTime + 6e4 * this.validity : this.expires) - Date.now();
    s < 0 ? s = 0 : s > e && (s = e), this._refreshTimer = setTimeout(this.refreshToken.bind(this), s > d ? s - d : s);
  }
};
u([_()], S.prototype, "creationTime", void 0), u([_()], S.prototype, "expires", void 0), u([_()], S.prototype, "isAdmin", void 0), u([_()], S.prototype, "oAuthState", void 0), u([_()], S.prototype, "resources", void 0), u([_()], S.prototype, "scope", void 0), u([_()], S.prototype, "server", void 0), u([_()], S.prototype, "ssl", void 0), u([_()], S.prototype, "token", void 0), u([_()], S.prototype, "tokenRefreshBuffer", void 0), u([_()], S.prototype, "userId", void 0), u([_()], S.prototype, "validity", void 0), S = u([M("esri.identity.Credential")], S);
class le extends he {
}
le.prototype.declaredClass = "esri.identity.IdentityManager";
const ye = new le();
we(ye);
export {
  ye as default
};
//# sourceMappingURL=IdentityManager-lGiEWdQA.js.map
