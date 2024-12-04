import { bW as Fr, O as U, P as B, Q as hi, bX as qr, a3 as Re, b5 as mn, b6 as mr, e9 as an, eH as To, e2 as ol, $ as So, lF as wf, bL as Cf, fM as kf, cw as Hh, bx as ir, lG as Vh, aC as Aa, i0 as xf, aH as Ui, dG as If, cA as zh, aG as Pa, u as ui, f0 as gr, D as Af, S as fr, T as nc, bi as Pf, aN as rc, e3 as Df, e7 as Lf, e8 as Of, ek as Nf, lH as Rf, d as Mf, s as Wh, b8 as Gh, ec as Uf, ei as Bf } from "./main-lm2DHsZh.js";
import { i as ac } from "./TelemetryDisplay-B9bmuT4q.js";
import { t as Ff, e as Xh } from "./mat3f64-Dh9_zhFu.js";
import { w as Da } from "./spatialReferenceEllipsoidUtils-ChztuWhJ.js";
let ii = class extends Fr(qr) {
  constructor(t) {
    super(t), this.framerate = null, this.containerFormat = null, this.gop = null, this.aspectRatio = null, this.klv = null;
  }
};
U([B({ type: String })], ii.prototype, "framerate", void 0), U([B({ type: String })], ii.prototype, "containerFormat", void 0), U([B({ type: Number })], ii.prototype, "gop", void 0), U([B({ type: String })], ii.prototype, "aspectRatio", void 0), U([B({ type: Object })], ii.prototype, "klv", void 0), ii = U([hi("esri.layers.support.PlaybackInfo")], ii);
const qf = ii;
let si = class extends Fr(qr) {
  constructor(t) {
    super(t), this.frameCenter = null, this.frameOutline = null, this.lineOfSight = null, this.sensorLocation = null, this.sensorTrail = null;
  }
};
U([B({ type: Re })], si.prototype, "frameCenter", void 0), U([B({ type: mn })], si.prototype, "frameOutline", void 0), U([B({ type: mr })], si.prototype, "lineOfSight", void 0), U([B({ type: Re })], si.prototype, "sensorLocation", void 0), U([B({ type: mr })], si.prototype, "sensorTrail", void 0), si = U([hi("esri.layers.support.TelemetryData")], si);
const Eo = si;
let Vs = class extends ol {
  constructor() {
    super(...arguments), this.sourcePoint = null, this.mapPoint = null;
  }
};
function jf(i) {
  return i?.sourcePoint != null && i.mapPoint != null;
}
U([B()], Vs.prototype, "sourcePoint", void 0), U([B({ type: Re })], Vs.prototype, "mapPoint", void 0), Vs = U([hi("esri.layers.support.VideoFrame.ControlPoint")], Vs);
let Ti = class extends Fr(qr) {
  constructor(t) {
    super(t), this.frame = null, this.controlPoints = null;
  }
  readControlPoints(t) {
    return t.map((e) => ({ sourcePoint: { x: e.frameX, y: e.frameY }, mapPoint: new Re(e.point) }));
  }
  writeControlPoints(t, e) {
    t != null && jf(t[0]) && (e.controlPoints = t.map((s) => {
      const n = s.sourcePoint, r = s.mapPoint;
      return { frameX: n.x, frameY: n.y, point: r.toJSON() };
    }));
  }
};
U([B({ type: String })], Ti.prototype, "frame", void 0), U([B({ type: [Vs], json: { write: { allowNull: !1, isRequired: !0 } } })], Ti.prototype, "controlPoints", void 0), U([an("controlPoints")], Ti.prototype, "readControlPoints", null), U([To("controlPoints")], Ti.prototype, "writeControlPoints", null), Ti = U([hi("esri.layers.support.VideoFrame")], Ti);
const $f = Ti;
let Vi = class extends EventTarget {
  constructor() {
    super(...arguments), this._readyState = 0, this._responseType = "", this.timeout = 0, this._withCredentials = !1, this.onabort = null, this.onerror = null, this.onload = null, this.onloadend = null, this.onloadstart = null, this.onprogress = null, this.ontimeout = null, this.onreadystatechange = null, this.UNSENT = 0, this.OPENED = 1, this.HEADERS_RECEIVED = 2, this.LOADING = 3, this.DONE = 4, this._abortController = null, this._error = null, this._options = {}, this._response = null, this._sendFlag = !1, this._url = "";
  }
  get readyState() {
    return this._readyState;
  }
  get response() {
    return this.responseType === "" || this.responseType === "text" ? this.responseText : this.readyState !== this.DONE || this._error || !this._response ? null : this._response.data;
  }
  get responseText() {
    return this.responseType !== "" && this.responseType !== "text" && this._throwDOMException(), this.readyState !== this.DONE ? "" : this._response ? this._response.data : this._error?.raw != null ? typeof this._error.raw == "string" ? this._error.raw : JSON.stringify(this._error.raw) : "";
  }
  get responseType() {
    return this._responseType;
  }
  set responseType(t) {
    (t !== "document" || globalThis instanceof Window) && (this.readyState !== this.LOADING && this.readyState !== this.DONE || this._throwDOMException(), this._responseType = t);
  }
  get responseURL() {
    return (this._response || this._error)?.url ?? "";
  }
  get responseXML() {
    return this.responseType !== "" && this.responseType !== "document" && this._throwDOMException(), this.readyState !== this.DONE ? null : this._response?.data ?? null;
  }
  get status() {
    return (this._response || this._error)?.httpStatus ?? 0;
  }
  get statusText() {
    return "";
  }
  get upload() {
    return console.warn("upload not implemented"), null;
  }
  get withCredentials() {
    return this._withCredentials;
  }
  set withCredentials(t) {
    this.readyState !== this.UNSENT && this.readyState !== this.OPENED && this._throwDOMException(), this._withCredentials = t;
  }
  abort() {
    this.readyState === this.OPENED && this._sendFlag || this.readyState === this.HEADERS_RECEIVED || this.readyState === this.LOADING ? (this._sendFlag = !1, this._error = null, this._response = null, this._abortController?.abort(), this._updateReadyState(this.DONE), this._dispatchProgressEvent("abort"), this._dispatchProgressEvent("loadend")) : this.readyState === this.DONE && this._updateReadyState(this.UNSENT);
  }
  getAllResponseHeaders() {
    let t = "";
    const e = (this._response || this._error)?.getAllHeaders?.();
    if (e) for (const [s, n] of e) t += `${s}: ${n}\r
`;
    return t;
  }
  getResponseHeader(t) {
    return (this._response || this._error)?.getHeader?.(t) ?? null;
  }
  open(t, e) {
    switch (this._sendFlag = !1, this._options = {}, t) {
      case "GET":
        this._options.method = "auto";
        break;
      case "POST":
        this._options.method = "post";
        break;
      case "HEAD":
        this._options.method = "head";
        break;
      case "DELETE":
        this._options.method = "delete";
        break;
      case "PUT":
        this._options.method = "put";
    }
    this._url = e, this._error = null, this._response = null, this._abortController = new AbortController(), this._updateReadyState(this.OPENED);
  }
  overrideMimeType(t) {
    throw new Error("overrideMimeType not implemented");
  }
  send(t) {
    (this.readyState !== this.OPENED || this._sendFlag) && this._throwDOMException(), this._sendFlag = !0, this._updateReadyState(this.LOADING), this._dispatchProgressEvent("loadstart");
    const e = this._options;
    t instanceof URLSearchParams ? e.body = t.toString() : e.body = t, e.responseType = this.responseType === "" ? "text" : this.responseType === "arraybuffer" ? "array-buffer" : this.responseType, e.signal = this._abortController?.signal, this.timeout && (e.timeout = this.timeout), this.withCredentials && (e.withCredentials = !0), So(this._url, e).then((s) => {
      this._response = s, this._updateReadyState(this.DONE), this._dispatchProgressEvent("load");
    }).catch((s) => {
      this._sendFlag && (this._error = s.details, this._updateReadyState(this.DONE), wf(s) ? this._dispatchProgressEvent("timeout") : s.name === "AbortError" ? this._dispatchProgressEvent("abort") : this._dispatchProgressEvent("error"));
    }).finally(() => {
      this._sendFlag && this._dispatchProgressEvent("loadend");
    });
  }
  setRequestHeader(t, e) {
    (this.readyState !== this.OPENED || this._sendFlag) && this._throwDOMException(), this._options.headers ??= {}, this._options.headers[t] = e;
  }
  _dispatchProgressEvent(t) {
    const e = new ProgressEvent(t, { loaded: 0, total: 0 });
    this.dispatchEvent(e), this[`on${t}`]?.(e);
  }
  _throwDOMException() {
    throw new DOMException("", "InvalidStateError");
  }
  _updateReadyState(t) {
    if (this._readyState !== t && (this._readyState = t, t !== this.UNSENT)) {
      const e = new Event("readystatechange");
      this.dispatchEvent(e), this.onreadystatechange?.(e);
    }
  }
};
Vi.UNSENT = 0, Vi.OPENED = 1, Vi.HEADERS_RECEIVED = 2, Vi.LOADING = 3, Vi.DONE = 4;
let ye = class extends Fr(qr) {
  constructor(i) {
    super(i), this.duration = null, this.end = null, this.start = null, this.timezone = "UTC";
  }
  readEnd(i, t) {
    return t.end != null ? new Date(t.end) : null;
  }
  writeEnd(i, t) {
    t.end = i ? i.getTime() : null;
  }
  readStart(i, t) {
    return t.start != null ? new Date(t.start) : null;
  }
  writeStart(i, t) {
    t.start = i ? i.getTime() : null;
  }
};
U([B({ type: Number, json: { write: { allowNull: !0 } } })], ye.prototype, "duration", void 0), U([B({ type: Date, json: { write: { allowNull: !0 } } })], ye.prototype, "end", void 0), U([an("end")], ye.prototype, "readEnd", null), U([To("end")], ye.prototype, "writeEnd", null), U([B({ type: Date, json: { write: { allowNull: !0 } } })], ye.prototype, "start", void 0), U([an("start")], ye.prototype, "readStart", null), U([To("start")], ye.prototype, "writeStart", null), U([B({ type: String })], ye.prototype, "timezone", void 0), ye = U([hi("esri.layers.support.VideoTimeExtent")], ye);
const Hf = ye, F = { UASDatalinkLocalSet: 1e4, PrecisionTimeStamp: 10002, MissionId: 10003, PlatformTailNumber: 10004, PlatformHeadingAngle: 10005, PlatformPitchAngle: 10006, PlatformRollAngle: 10007, PlatformTrueAirspeed: 10008, PlatformIndicatedAirspeed: 10009, PlatformDesignation: 10010, ImageSourceSensor: 10011, ImageCoordinateSystem: 10012, SensorLatitude: 10013, SensorLongitude: 10014, SensorTrueAltitude: 10015, SensorHorizontalFOV: 10016, SensorVerticalFOV: 10017, SensorAzimuthAngle: 10018, SensorElevationAngle: 10019, SensorRollAngle: 10020, PlatformSlantRange: 10021, TargetWidth: 10022, FrameCenterLatitude: 10023, FrameCenterLongitude: 10024, FrameCenterElevation: 10025, OffsetCorner1Latitude: 10026, OffsetCorner1Longitude: 10027, OffsetCorner2Latitude: 10028, OffsetCorner2Longitude: 10029, OffsetCorner3Latitude: 10030, OffsetCorner3Longitude: 10031, OffsetCorner4Latitude: 10032, OffsetCorner4Longitude: 10033, TargetLocationLatitude: 10040, TargetLocationLongitude: 10041, TargetLocationElevation: 10042, TargetTrackGateWidth: 10043, TargetTrackGateHeight: 10044, TargetErrorEstimateHorizontal: 10045, TargetErrorEstimateLateral: 10046, GenericFlagData: 10047, PlatformGroundSpeed: 10056, PlatformGroundRange: 10057, PlatformRemainingFuel: 10058, PlatformCallSign: 10059, SensorFOVName: 10063, PlatformMagneticHeading: 10064, LDSVersionNumber: 10065, AlternatePlatformName: 10070, EventStartTimeUTC: 10072, VMTIDataSet: 10074, SensorEllipsoidHeight: 10075, OperationalMode: 10077, CornerLatitudePoint1: 10082, CornerLongitudePoint1: 10083, CornerLatitudePoint2: 10084, CornerLongitudePoint2: 10085, CornerLatitudePoint3: 10086, CornerLongitudePoint3: 10087, CornerLatitudePoint4: 10088, CornerLongitudePoint4: 10089, SARMotionImageryMetadata: 10095, SecurityClassification: 20001, SecurityClassifyingAuthority: 20002, SecurityClassifyingCountry: 20003, SecuritySCI: 20004, SecurityCaveats: 20005, SecurityReleaseInstructions: 20006, SecurityLDSVersion: 20022, EsriVideoWidth: 90001, EsriVideoHeight: 90002, EsriFrameCenterLatitude: 90050, EsriFrameCenterLongitude: 90051, EsriCornerLatitudePt1: 90052, EsriCornerLongitudePt1: 90053, EsriCornerLatitudePt2: 90054, EsriCornerLongitudePt2: 90055, EsriCornerLatitudePt3: 90056, EsriCornerLongitudePt3: 90057, EsriCornerLatitudePt4: 90058, EsriCornerLongitudePt4: 90059, EsriFrameOutline: 90060, EsriSensorPosition: 90061, EsriHorizonPixelPack: 90063, EsriGroundControlPoints: 90064 };
function Vf(i) {
  const { duration: t, end: e, start: s, timezone: n = "UTC" } = i || {};
  return typeof t != "number" ? null : new Hf({ duration: t || null, end: typeof e == "number" ? new Date(e) : null, start: typeof s == "number" ? new Date(s) : null, timezone: n });
}
function zf(i, t) {
  const e = [...t], s = e.findIndex((n) => n.equals(i));
  return s > -1 && e.splice(s), e.push(i), e;
}
function Wf(i) {
  if (!i?.size) return new Eo();
  const t = iy(i), e = Kf(i), s = Jf(i), n = ey(t, e);
  return new Eo({ frameCenter: e, frameOutline: s, lineOfSight: n, sensorLocation: t });
}
function Gf(i) {
  return i?.size ? i.get(F.EsriGroundControlPoints)?.value ?? null ?? null : null;
}
function Xf(i) {
  return i?.size ? i.get(F.EsriHorizonPixelPack)?.value ?? null : null;
}
function Kf(i) {
  return Yf(i) ?? Qf(i);
}
function Yf(i) {
  return i && i.has(F.EsriFrameCenterLatitude) && i.has(F.EsriFrameCenterLongitude) ? new Re({ x: i.get(F.EsriFrameCenterLongitude).value, y: i.get(F.EsriFrameCenterLatitude).value, z: i.get(F.FrameCenterElevation).value }) : null;
}
function Qf(i) {
  return i && i.has(F.FrameCenterLatitude) && i.has(F.FrameCenterLongitude) ? new Re({ x: i.get(F.FrameCenterLongitude)?.value, y: i.get(F.FrameCenterLatitude)?.value, z: i.get(F.FrameCenterElevation)?.value }) : null;
}
function Jf(i) {
  if (!i) return null;
  const t = i.get(F.EsriFrameOutline)?.value;
  return t ? mn.fromJSON(t.geometry) : Zf(i) ?? ty(i);
}
function Zf(i) {
  if (!(i.has(F.EsriCornerLatitudePt1) && i.has(F.EsriCornerLongitudePt1) && i.has(F.EsriCornerLatitudePt2) && i.has(F.EsriCornerLongitudePt2) && i.has(F.EsriCornerLatitudePt3) && i.has(F.EsriCornerLongitudePt3) && i.has(F.EsriCornerLatitudePt4) && i.has(F.EsriCornerLongitudePt4))) return null;
  const t = [i.get(F.EsriCornerLongitudePt1)?.value, i.get(F.EsriCornerLatitudePt1)?.value], e = [i.get(F.EsriCornerLongitudePt2)?.value, i.get(F.EsriCornerLatitudePt2)?.value], s = [i.get(F.EsriCornerLongitudePt3)?.value, i.get(F.EsriCornerLatitudePt3)?.value], n = [i.get(F.EsriCornerLongitudePt4)?.value, i.get(F.EsriCornerLatitudePt4)?.value];
  return new mn({ rings: [[t, e, s, n]] });
}
function ty(i) {
  if (!(i.has(F.OffsetCorner1Latitude) && i.has(F.OffsetCorner1Longitude) && i.has(F.OffsetCorner2Latitude) && i.has(F.OffsetCorner2Longitude) && i.has(F.OffsetCorner3Latitude) && i.has(F.OffsetCorner3Longitude) && i.has(F.OffsetCorner4Latitude) && i.has(F.OffsetCorner4Longitude) && i.has(F.FrameCenterLatitude) && i.has(F.FrameCenterLongitude))) return null;
  const t = i.get(F.FrameCenterLatitude)?.value, e = i.get(F.FrameCenterLongitude)?.value, s = t + i.get(F.OffsetCorner1Latitude)?.value, n = e + i.get(F.OffsetCorner1Longitude)?.value, r = t + i.get(F.OffsetCorner2Latitude)?.value, a = e + i.get(F.OffsetCorner2Longitude)?.value, l = t + i.get(F.OffsetCorner3Latitude)?.value, u = e + i.get(F.OffsetCorner3Longitude)?.value, p = t + i.get(F.OffsetCorner4Latitude)?.value, g = e + i.get(F.OffsetCorner4Longitude)?.value;
  return new mn({ rings: [[[n, s], [a, r], [u, l], [g, p]]] });
}
function ey(i, t) {
  if (!i || !t) return null;
  const e = [i.x, i.y, i.z], s = [t.x, t.y, t.z];
  return new mr({ paths: [[e, s]] });
}
function iy(i) {
  if (!i?.size) return null;
  if (i.has(F.EsriSensorPosition)) {
    const t = i.get(F.EsriSensorPosition)?.value;
    if (t) return Re.fromJSON(t.geometry);
  }
  return i.has(F.SensorLongitude) && i.has(F.SensorLatitude) && i.has(F.SensorTrueAltitude) ? new Re({ x: i.get(F.SensorLongitude)?.value, y: i.get(F.SensorLatitude)?.value, z: i.get(F.SensorTrueAltitude)?.value }) : null;
}
const Vt = Math.PI / 180;
let At = class extends ol {
  constructor(t) {
    super(), this.averageElevation = 0, this.imageHeight = 0, this.imageWidth = 0, this.metadataSupportsTransforms = !1, this.platformHeadingAngle = 0, this.platformPitchAngle = 0, this.platformRollAngle = 0, this.sensorHeadingAngle = 0, this.sensorAltitude = 0, this.sensorHorizontalFieldOfView = 0, this.sensorLatitude = 0, this.sensorLongitude = 0, this.sensorPitchAngle = 0, this.sensorRollAngle = 0, this.sensorVerticalFieldOfView = 0, this.vttMetadata = /* @__PURE__ */ new Map(), this._createMat3FromValues = (s) => {
      const n = s[0], r = s[1], a = s[2];
      return Ff(n[0], r[0], a[0], n[1], r[1], a[1], n[2], r[2], a[2]);
    }, this._multiplyMat3 = (s, n) => {
      const r = Xh();
      return Cf(r, s, n), r;
    }, this._transposeMat3 = (s) => {
      const n = Xh();
      return kf(n, s), n;
    }, this._calculateCameraFovForward = () => this._createMat3FromValues([[0, 0, 1], [Math.tan(0.5 * this.sensorHorizontalFieldOfView * Vt), 0, 0], [0, Math.tan(0.5 * this.sensorVerticalFieldOfView * Vt), 0]]), this._calculateCameraFovReverse = () => this._createMat3FromValues([[0, 1 / Math.tan(0.5 * this.sensorHorizontalFieldOfView * Vt), 0], [0, 0, 1 / Math.tan(0.5 * this.sensorVerticalFieldOfView * Vt)], [1, 0, 0]]), this._calculateCameraLook = () => this._getRotationMatrixZYX(this.sensorHeadingAngle * Vt, this.sensorPitchAngle * Vt, this.sensorRollAngle * Vt), this._calculateImageDimensionsForward = () => this._createMat3FromValues([[2 / this.imageWidth, 0, -1], [0, -2 / this.imageHeight, -1], [0, 0, 1]]), this._calculateImageDimensionsReverse = () => this._createMat3FromValues([[this.imageWidth / 2, 0, this.imageWidth / 2], [0, -this.imageHeight / 2, -this.imageHeight / 2], [0, 0, 1]]), this._calculatePlatformPositionMatrix = () => {
      const s = Math.sin(this.sensorLatitude * Vt), n = Math.cos(this.sensorLatitude * Vt), r = Math.sin(this.sensorLongitude * Vt), a = Math.cos(this.sensorLongitude * Vt);
      return this._createMat3FromValues([[-s * a, -r, -n * a], [-s * r, a, -n * r], [n, 0, -s]]);
    }, this._calculatePlatformOrientation = () => this._getRotationMatrixZYX(this.platformHeadingAngle * Vt, this.platformPitchAngle * Vt, this.platformRollAngle * Vt), this._extractValues = (s) => {
      this.imageWidth = s.get(F.EsriVideoWidth)?.value, this.imageHeight = s.get(F.EsriVideoHeight)?.value;
      const n = s.get(F.SensorEllipsoidHeight)?.value;
      this.sensorAltitude = n ?? s.get(F.SensorTrueAltitude)?.value, this.sensorLatitude = s.get(F.SensorLatitude)?.value, this.sensorLongitude = s.get(F.SensorLongitude)?.value, this.sensorHeadingAngle = s.get(F.SensorAzimuthAngle)?.value, this.sensorPitchAngle = s.get(F.SensorElevationAngle)?.value, this.sensorRollAngle = s.get(F.SensorRollAngle)?.value, this.sensorHorizontalFieldOfView = s.get(F.SensorHorizontalFOV)?.value, this.sensorVerticalFieldOfView = s.get(F.SensorVerticalFOV)?.value, this.platformHeadingAngle = s.get(F.PlatformHeadingAngle)?.value, this.platformPitchAngle = s.get(F.PlatformPitchAngle)?.value, this.platformRollAngle = s.get(F.PlatformRollAngle)?.value, this.averageElevation = s.get(F.FrameCenterElevation)?.value || 0;
    }, this._getRotationMatrixZYX = (s, n, r) => {
      const a = Math.cos(s), l = Math.sin(s), u = Math.cos(n), p = Math.sin(n), g = Math.cos(r), y = Math.sin(r);
      return this._createMat3FromValues([[a * u, a * p * y - g * l, l * y + a * g * p], [u * l, a * g + l * p * y, g * l * p - a * y], [-p, u * y, u * g]]);
    }, this._initCameraSensor = () => {
      const s = this._calculateCameraFovForward(), n = this._calculateCameraFovReverse(), r = this._calculateCameraLook(), a = this._calculateImageDimensionsForward(), l = this._calculateImageDimensionsReverse(), u = this._calculatePlatformPositionMatrix(), p = this._calculatePlatformOrientation(), g = this._multiplyMat3(this._multiplyMat3(u, p), r);
      this._imageToEarthTransform = this._multiplyMat3(this._multiplyMat3(g, s), a);
      const y = this._multiplyMat3(l, n);
      this._earthToImageTransform = this._multiplyMat3(y, this._transposeMat3(g)), this._platformPositionEcef = this._projectPointToECEF(this.sensorLongitude, this.sensorLatitude, this.sensorAltitude || this.averageElevation);
    }, this._metadataSupportsTransforms = (s) => {
      if (!s?.size) return !1;
      const n = s.get(F.EsriVideoWidth)?.value ?? 0, r = s.get(F.EsriVideoHeight)?.value ?? 0;
      if (n <= 0 || r <= 0) return !1;
      const a = s.get(F.SensorEllipsoidHeight)?.value, l = s.get(F.SensorTrueAltitude)?.value, u = s.get(F.SensorLatitude)?.value, p = s.get(F.SensorLongitude)?.value;
      if (a == null && l == null || u == null || p == null) return !1;
      const g = s.get(F.PlatformHeadingAngle)?.value, y = s.get(F.PlatformPitchAngle)?.value, T = s.get(F.PlatformRollAngle)?.value;
      if (g == null || y == null || T == null) return !1;
      const C = s.get(F.SensorHorizontalFOV)?.value, _ = s.get(F.SensorVerticalFOV)?.value;
      if (C == null || _ == null) return !1;
      const k = s.get(F.SensorAzimuthAngle)?.value, x = s.get(F.SensorElevationAngle)?.value, A = s.get(F.SensorRollAngle)?.value;
      return k != null && x != null && A != null;
    }, this._projectPointToECEF = (s, n, r) => {
      const a = [];
      return Hh([s, n, r], ir.WGS84, 0, a, Da, 0, 1), new Re({ x: a[0], y: a[1], z: a[2], spatialReference: Da });
    }, this._projectImageVectorToEllipsoid = (s, n) => {
      const r = Vh.semiMajorAxis + n, a = Vh.semiMinorAxis + n, l = a / r, u = r / a, { x: p, y: g, z: y } = this._platformPositionEcef, T = y ?? this.averageElevation, C = Ui(p, g, u * T), _ = Aa(s, s), k = Aa(s, C), x = Aa(C, C) - r * r, A = (-k - Math.sqrt(k * k - _ * x)) / _;
      if (A < 0) return [NaN, NaN, NaN];
      const I = Pa();
      return xf(I, C, s, A), I[2] = I[2] * l, I;
    };
    const e = t?.videoMetadata;
    this._set("metadataSupportsTransforms", this._metadataSupportsTransforms(e)), this.metadataSupportsTransforms && (this._extractValues(e), this._initCameraSensor());
  }
  transformGeoToImage(t, e, s) {
    const n = this._platformPositionEcef;
    if (!n) return [0, 0];
    const { x: r, y: a, z: l } = n, u = Ui(r, a, l), p = this._projectPointToECEF(t, e, s || this.averageElevation), g = Pa(), y = Ui(p.x, p.y, p.z);
    If(g, y, u), zh(g, g, this._earthToImageTransform);
    const T = g[0], C = g[1], _ = g[2];
    let k = Ui(NaN, NaN, NaN);
    return isNaN(_) || (k = Ui(T / _, C / _, _ / _)), [k[0], k[1]];
  }
  transformImageToGeo(t, e) {
    const s = Ui(t, e, 1), n = Pa();
    zh(n, s, this._imageToEarthTransform);
    const r = this._projectImageVectorToEllipsoid(n, this.averageElevation);
    let a;
    if (!isNaN(r[0])) {
      const l = [];
      Hh([r[0], r[1], r[2]], Da, 0, l, ir.WGS84, 0, 1), a = new Re({ x: l[0], y: l[1], z: l[2], spatialReference: ir.WGS84 });
    }
    return a;
  }
};
U([B()], At.prototype, "averageElevation", void 0), U([B()], At.prototype, "imageHeight", void 0), U([B()], At.prototype, "imageWidth", void 0), U([B({ readOnly: !0 })], At.prototype, "metadataSupportsTransforms", void 0), U([B()], At.prototype, "platformHeadingAngle", void 0), U([B()], At.prototype, "platformPitchAngle", void 0), U([B()], At.prototype, "platformRollAngle", void 0), U([B()], At.prototype, "sensorHeadingAngle", void 0), U([B()], At.prototype, "sensorAltitude", void 0), U([B()], At.prototype, "sensorHorizontalFieldOfView", void 0), U([B()], At.prototype, "sensorLatitude", void 0), U([B()], At.prototype, "sensorLongitude", void 0), U([B()], At.prototype, "sensorPitchAngle", void 0), U([B()], At.prototype, "sensorRollAngle", void 0), U([B()], At.prototype, "sensorVerticalFieldOfView", void 0), U([B()], At.prototype, "vttMetadata", void 0), At = U([hi("esri.layers.video.VideoCameraSensorModel")], At);
const sy = At;
var jr = typeof window < "u" ? window : gr !== void 0 ? gr : typeof self < "u" ? self : {};
const E = ui(jr);
var Kh = Array.prototype.slice, oc = ny;
function ny(i, t) {
  for (("length" in i) || (i = [i]), i = Kh.call(i); i.length; ) {
    var e = i.shift(), s = t(e);
    if (s) return s;
    e.childNodes && e.childNodes.length && (i = Kh.call(e.childNodes).concat(i));
  }
}
var ry = Zi;
function Zi(i, t) {
  if (!(this instanceof Zi)) return new Zi(i, t);
  this.data = i, this.nodeValue = i, this.length = i.length, this.ownerDocument = t || null;
}
Zi.prototype.nodeType = 8, Zi.prototype.nodeName = "#comment", Zi.prototype.toString = function() {
  return "[object Comment]";
};
var ay = ai;
function ai(i, t) {
  if (!(this instanceof ai)) return new ai(i);
  this.data = i || "", this.length = this.data.length, this.ownerDocument = t || null;
}
ai.prototype.type = "DOMTextNode", ai.prototype.nodeType = 3, ai.prototype.nodeName = "#text", ai.prototype.toString = function() {
  return this.data;
}, ai.prototype.replaceData = function(i, t, e) {
  var s = this.data, n = s.substring(0, i), r = s.substring(i + t, s.length);
  this.data = n + e + r, this.length = this.data.length;
};
var lc = oy;
function oy(i) {
  var t = this, e = i.type;
  i.target || (i.target = t), t.listeners || (t.listeners = {});
  var s = t.listeners[e];
  if (s) return s.forEach(function(n) {
    i.currentTarget = t, typeof n == "function" ? n(i) : n.handleEvent(i);
  });
  t.parentNode && t.parentNode.dispatchEvent(i);
}
var hc = ly;
function ly(i, t) {
  var e = this;
  e.listeners || (e.listeners = {}), e.listeners[i] || (e.listeners[i] = []), e.listeners[i].indexOf(t) === -1 && e.listeners[i].push(t);
}
var uc = hy;
function hy(i, t) {
  var e = this;
  if (e.listeners && e.listeners[i]) {
    var s = e.listeners[i], n = s.indexOf(t);
    n !== -1 && s.splice(n, 1);
  }
}
var uy = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"];
function dc(i) {
  switch (i.nodeType) {
    case 3:
      return ll(i.data);
    case 8:
      return "<!--" + i.data + "-->";
    default:
      return dy(i);
  }
}
function dy(i) {
  var t = [], e = i.tagName;
  return i.namespaceURI === "http://www.w3.org/1999/xhtml" && (e = e.toLowerCase()), t.push("<" + e + gy(i) + my(i)), uy.indexOf(e) > -1 ? t.push(" />") : (t.push(">"), i.childNodes.length ? t.push.apply(t, i.childNodes.map(dc)) : i.textContent || i.innerText ? t.push(ll(i.textContent || i.innerText)) : i.innerHTML && t.push(i.innerHTML), t.push("</" + e + ">")), t.join("");
}
function cy(i, t) {
  var e = typeof i[t];
  return t === "style" && Object.keys(i.style).length > 0 || i.hasOwnProperty(t) && (e === "string" || e === "boolean" || e === "number") && t !== "nodeName" && t !== "className" && t !== "tagName" && t !== "textContent" && t !== "innerText" && t !== "namespaceURI" && t !== "innerHTML";
}
function py(i) {
  if (typeof i == "string") return i;
  var t = "";
  return Object.keys(i).forEach(function(e) {
    var s = i[e];
    e = e.replace(/[A-Z]/g, function(n) {
      return "-" + n.toLowerCase();
    }), t += e + ":" + s + ";";
  }), t;
}
function my(i) {
  var t = i.dataset, e = [];
  for (var s in t) e.push({ name: "data-" + s, value: t[s] });
  return e.length ? cc(e) : "";
}
function cc(i) {
  var t = [];
  return i.forEach(function(e) {
    var s = e.name, n = e.value;
    s === "style" && (n = py(n)), t.push(s + '="' + fy(n) + '"');
  }), t.length ? " " + t.join(" ") : "";
}
function gy(i) {
  var t = [];
  for (var e in i) cy(i, e) && t.push({ name: e, value: i[e] });
  for (var s in i._attributes) for (var n in i._attributes[s]) {
    var r = i._attributes[s][n], a = (r.prefix ? r.prefix + ":" : "") + n;
    t.push({ name: a, value: r.value });
  }
  return i.className && t.push({ name: "class", value: i.className }), t.length ? cc(t) : "";
}
function ll(i) {
  var t = "";
  return typeof i == "string" ? t = i : i && (t = i.toString()), t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function fy(i) {
  return ll(i).replace(/"/g, "&quot;");
}
var La = oc, yy = lc, _y = hc, vy = uc, by = dc, Yh = "http://www.w3.org/1999/xhtml", pc = ct;
function ct(i, t, e) {
  if (!(this instanceof ct)) return new ct(i);
  var s = e === void 0 ? Yh : e || null;
  this.tagName = s === Yh ? String(i).toUpperCase() : i, this.nodeName = this.tagName, this.className = "", this.dataset = {}, this.childNodes = [], this.parentNode = null, this.style = {}, this.ownerDocument = t || null, this.namespaceURI = s, this._attributes = {}, this.tagName === "INPUT" && (this.type = "text");
}
ct.prototype.type = "DOMElement", ct.prototype.nodeType = 1, ct.prototype.appendChild = function(i) {
  return i.parentNode && i.parentNode.removeChild(i), this.childNodes.push(i), i.parentNode = this, i;
}, ct.prototype.replaceChild = function(i, t) {
  i.parentNode && i.parentNode.removeChild(i);
  var e = this.childNodes.indexOf(t);
  return t.parentNode = null, this.childNodes[e] = i, i.parentNode = this, t;
}, ct.prototype.removeChild = function(i) {
  var t = this.childNodes.indexOf(i);
  return this.childNodes.splice(t, 1), i.parentNode = null, i;
}, ct.prototype.insertBefore = function(i, t) {
  i.parentNode && i.parentNode.removeChild(i);
  var e = t == null ? -1 : this.childNodes.indexOf(t);
  return e > -1 ? this.childNodes.splice(e, 0, i) : this.childNodes.push(i), i.parentNode = this, i;
}, ct.prototype.setAttributeNS = function(i, t, e) {
  var s = null, n = t, r = t.indexOf(":");
  r > -1 && (s = t.substr(0, r), n = t.substr(r + 1)), this.tagName === "INPUT" && t === "type" ? this.type = e : (this._attributes[i] || (this._attributes[i] = {}))[n] = { value: e, prefix: s };
}, ct.prototype.getAttributeNS = function(i, t) {
  var e = this._attributes[i], s = e && e[t] && e[t].value;
  return this.tagName === "INPUT" && t === "type" ? this.type : typeof s != "string" ? null : s;
}, ct.prototype.removeAttributeNS = function(i, t) {
  var e = this._attributes[i];
  e && delete e[t];
}, ct.prototype.hasAttributeNS = function(i, t) {
  var e = this._attributes[i];
  return !!e && t in e;
}, ct.prototype.setAttribute = function(i, t) {
  return this.setAttributeNS(null, i, t);
}, ct.prototype.getAttribute = function(i) {
  return this.getAttributeNS(null, i);
}, ct.prototype.removeAttribute = function(i) {
  return this.removeAttributeNS(null, i);
}, ct.prototype.hasAttribute = function(i) {
  return this.hasAttributeNS(null, i);
}, ct.prototype.removeEventListener = vy, ct.prototype.addEventListener = _y, ct.prototype.dispatchEvent = yy, ct.prototype.focus = function() {
}, ct.prototype.toString = function() {
  return by(this);
}, ct.prototype.getElementsByClassName = function(i) {
  var t = i.split(" "), e = [];
  return La(this, function(s) {
    if (s.nodeType === 1) {
      var n = (s.className || "").split(" ");
      t.every(function(r) {
        return n.indexOf(r) !== -1;
      }) && e.push(s);
    }
  }), e;
}, ct.prototype.getElementsByTagName = function(i) {
  i = i.toLowerCase();
  var t = [];
  return La(this.childNodes, function(e) {
    e.nodeType !== 1 || i !== "*" && e.tagName.toLowerCase() !== i || t.push(e);
  }), t;
}, ct.prototype.contains = function(i) {
  return La(this, function(t) {
    return i === t;
  }) || !1;
};
var Oa = pc, Ty = Ee;
function Ee(i) {
  if (!(this instanceof Ee)) return new Ee();
  this.childNodes = [], this.parentNode = null, this.ownerDocument = i || null;
}
Ee.prototype.type = "DocumentFragment", Ee.prototype.nodeType = 11, Ee.prototype.nodeName = "#document-fragment", Ee.prototype.appendChild = Oa.prototype.appendChild, Ee.prototype.replaceChild = Oa.prototype.replaceChild, Ee.prototype.removeChild = Oa.prototype.removeChild, Ee.prototype.toString = function() {
  return this.childNodes.map(function(i) {
    return String(i);
  }).join("");
};
var Sy = wo;
function wo(i) {
}
wo.prototype.initEvent = function(i, t, e) {
  this.type = i, this.bubbles = t, this.cancelable = e;
}, wo.prototype.preventDefault = function() {
};
var Ey = oc, wy = ry, Cy = ay, Os = pc, ky = Ty, xy = Sy, Iy = lc, Ay = hc, Py = uc, Dy = yr;
function yr() {
  if (!(this instanceof yr)) return new yr();
  this.head = this.createElement("head"), this.body = this.createElement("body"), this.documentElement = this.createElement("html"), this.documentElement.appendChild(this.head), this.documentElement.appendChild(this.body), this.childNodes = [this.documentElement], this.nodeType = 9;
}
var te = yr.prototype;
te.createTextNode = function(i) {
  return new Cy(i, this);
}, te.createElementNS = function(i, t) {
  var e = i === null ? null : String(i);
  return new Os(t, this, e);
}, te.createElement = function(i) {
  return new Os(i, this);
}, te.createDocumentFragment = function() {
  return new ky(this);
}, te.createEvent = function(i) {
  return new xy();
}, te.createComment = function(i) {
  return new wy(i, this);
}, te.getElementById = function(i) {
  return i = String(i), Ey(this.childNodes, function(t) {
    if (String(t.id) === i) return t;
  }) || null;
}, te.getElementsByClassName = Os.prototype.getElementsByClassName, te.getElementsByTagName = Os.prototype.getElementsByTagName, te.contains = Os.prototype.contains, te.removeEventListener = Py, te.addEventListener = Ay, te.dispatchEvent = Iy;
var sr, Ly = new Dy(), Qh = gr !== void 0 ? gr : typeof window < "u" ? window : {}, Oy = Ly;
typeof document < "u" ? sr = document : (sr = Qh["__GLOBAL_DOCUMENT_CACHE@4"]) || (sr = Qh["__GLOBAL_DOCUMENT_CACHE@4"] = Oy);
var mc = sr;
const q = ui(mc);
var Co = { exports: {} };
(function(i, t) {
  function e(u) {
    if (u && typeof u == "object") {
      var p = u.which || u.keyCode || u.charCode;
      p && (u = p);
    }
    if (typeof u == "number") return a[u];
    var g, y = String(u);
    return (g = s[y.toLowerCase()]) ? g : (g = n[y.toLowerCase()]) || (y.length === 1 ? y.charCodeAt(0) : void 0);
  }
  e.isEventKey = function(u, p) {
    if (u && typeof u == "object") {
      var g = u.which || u.keyCode || u.charCode;
      if (g == null) return !1;
      if (typeof p == "string") {
        var y;
        if ((y = s[p.toLowerCase()]) || (y = n[p.toLowerCase()])) return y === g;
      } else if (typeof p == "number") return p === g;
      return !1;
    }
  };
  var s = (t = i.exports = e).code = t.codes = { backspace: 8, tab: 9, enter: 13, shift: 16, ctrl: 17, alt: 18, "pause/break": 19, "caps lock": 20, esc: 27, space: 32, "page up": 33, "page down": 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40, insert: 45, delete: 46, command: 91, "left command": 91, "right command": 93, "numpad *": 106, "numpad +": 107, "numpad -": 109, "numpad .": 110, "numpad /": 111, "num lock": 144, "scroll lock": 145, "my computer": 182, "my calculator": 183, ";": 186, "=": 187, ",": 188, "-": 189, ".": 190, "/": 191, "`": 192, "[": 219, "\\": 220, "]": 221, "'": 222 }, n = t.aliases = { windows: 91, "⇧": 16, "⌥": 18, "⌃": 17, "⌘": 91, ctl: 17, control: 17, option: 18, pause: 19, break: 19, caps: 20, return: 13, escape: 27, spc: 32, spacebar: 32, pgup: 33, pgdn: 34, ins: 45, del: 46, cmd: 91 };
  for (r = 97; r < 123; r++) s[String.fromCharCode(r)] = r - 32;
  for (var r = 48; r < 58; r++) s[r - 48] = r;
  for (r = 1; r < 13; r++) s["f" + r] = r + 111;
  for (r = 0; r < 10; r++) s["numpad " + r] = r + 96;
  var a = t.names = t.title = {};
  for (r in s) a[s[r]] = r;
  for (var l in n) s[l] = n[l];
})(Co, Co.exports);
const X = ui(Co.exports);
function Ny(i, t) {
  var e, s = null;
  try {
    e = JSON.parse(i, t);
  } catch (n) {
    s = n;
  }
  return [s, e];
}
const Ry = ui(Ny);
var ko = { exports: {} }, gc = { exports: {} };
(function(i) {
  function t() {
    return i.exports = t = Object.assign ? Object.assign.bind() : function(e) {
      for (var s = 1; s < arguments.length; s++) {
        var n = arguments[s];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, i.exports.__esModule = !0, i.exports.default = i.exports, t.apply(this, arguments);
  }
  i.exports = t, i.exports.__esModule = !0, i.exports.default = i.exports;
})(gc);
var My = gc.exports, Uy = Fy, By = Object.prototype.toString;
function Fy(i) {
  if (!i) return !1;
  var t = By.call(i);
  return t === "[object Function]" || typeof i == "function" && t !== "[object RegExp]" || typeof window < "u" && (i === window.setTimeout || i === window.alert || i === window.confirm || i === window.prompt);
}
var qy = jr;
function jy(i) {
  return i === void 0 && (i = ""), i.toLowerCase().split(";").reduce(function(t, e) {
    var s = e.split("="), n = s[0], r = s[1];
    return n.trim() === "charset" ? r.trim() : t;
  }, "utf-8");
}
var $y = function(i, t) {
  return t === void 0 && (t = !1), function(e, s, n) {
    if (e) i(e);
    else if (s.statusCode >= 400 && s.statusCode <= 599) {
      var r = n;
      if (t) if (qy.TextDecoder) {
        var a = jy(s.headers && s.headers["content-type"]);
        try {
          r = new TextDecoder(a).decode(n);
        } catch {
        }
      } else r = String.fromCharCode.apply(null, new Uint8Array(n));
      i({ cause: r });
    } else i(null, n);
  };
}, Jh = jr, Hy = My, Vy = Uy;
we.httpHandler = $y;
var zy = function(i) {
  var t = {};
  return i && i.trim().split(`
`).forEach(function(e) {
    var s = e.indexOf(":"), n = e.slice(0, s).trim().toLowerCase(), r = e.slice(s + 1).trim();
    t[n] === void 0 ? t[n] = r : Array.isArray(t[n]) ? t[n].push(r) : t[n] = [t[n], r];
  }), t;
};
function Wy(i, t) {
  for (var e = 0; e < i.length; e++) t(i[e]);
}
function Gy(i) {
  for (var t in i) if (i.hasOwnProperty(t)) return !1;
  return !0;
}
function fc(i, t, e) {
  var s = i;
  return Vy(t) ? (e = t, typeof i == "string" && (s = { uri: i })) : s = Hy({}, t, { uri: i }), s.callback = e, s;
}
function we(i, t, e) {
  return yc(t = fc(i, t, e));
}
function yc(i) {
  if (i.callback === void 0) throw new Error("callback argument missing");
  var t = !1, e = function(I, O, N) {
    t || (t = !0, i.callback(I, O, N));
  };
  function s() {
    p.readyState === 4 && setTimeout(a, 0);
  }
  function n() {
    var I = void 0;
    if (I = p.response ? p.response : p.responseText || Xy(p), x) try {
      I = JSON.parse(I);
    } catch {
    }
    return I;
  }
  function r(I) {
    return clearTimeout(g), I instanceof Error || (I = new Error("" + (I || "Unknown XMLHttpRequest Error"))), I.statusCode = 0, e(I, A);
  }
  function a() {
    if (!u) {
      var I;
      clearTimeout(g), I = i.useXDR && p.status === void 0 ? 200 : p.status === 1223 ? 204 : p.status;
      var O = A, N = null;
      return I !== 0 ? (O = { body: n(), statusCode: I, method: T, headers: {}, url: y, rawRequest: p }, p.getAllResponseHeaders && (O.headers = zy(p.getAllResponseHeaders()))) : N = new Error("Internal XMLHttpRequest Error"), e(N, O, O.body);
    }
  }
  var l, u, p = i.xhr || null;
  p || (p = i.cors || i.useXDR ? new we.XDomainRequest() : new we.XMLHttpRequest());
  var g, y = p.url = i.uri || i.url, T = p.method = i.method || "GET", C = i.body || i.data, _ = p.headers = i.headers || {}, k = !!i.sync, x = !1, A = { body: void 0, headers: {}, statusCode: 0, method: T, url: y, rawRequest: p };
  if ("json" in i && i.json !== !1 && (x = !0, _.accept || _.Accept || (_.Accept = "application/json"), T !== "GET" && T !== "HEAD" && (_["content-type"] || _["Content-Type"] || (_["Content-Type"] = "application/json"), C = JSON.stringify(i.json === !0 ? C : i.json))), p.onreadystatechange = s, p.onload = a, p.onerror = r, p.onprogress = function() {
  }, p.onabort = function() {
    u = !0;
  }, p.ontimeout = r, p.open(T, y, !k, i.username, i.password), k || (p.withCredentials = !!i.withCredentials), !k && i.timeout > 0 && (g = setTimeout(function() {
    if (!u) {
      u = !0, p.abort("timeout");
      var I = new Error("XMLHttpRequest timeout");
      I.code = "ETIMEDOUT", r(I);
    }
  }, i.timeout)), p.setRequestHeader) for (l in _) _.hasOwnProperty(l) && p.setRequestHeader(l, _[l]);
  else if (i.headers && !Gy(i.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
  return "responseType" in i && (p.responseType = i.responseType), "beforeSend" in i && typeof i.beforeSend == "function" && i.beforeSend(p), p.send(C || null), p;
}
function Xy(i) {
  try {
    if (i.responseType === "document") return i.responseXML;
    var t = i.responseXML && i.responseXML.documentElement.nodeName === "parsererror";
    if (i.responseType === "" && !t) return i.responseXML;
  } catch {
  }
  return null;
}
function Ky() {
}
ko.exports = we, ko.exports.default = we, we.XMLHttpRequest = Jh.XMLHttpRequest || Ky, we.XDomainRequest = "withCredentials" in new we.XMLHttpRequest() ? we.XMLHttpRequest : Jh.XDomainRequest, Wy(["get", "put", "post", "patch", "head", "delete"], function(i) {
  we[i === "delete" ? "del" : i] = function(t, e, s) {
    return (e = fc(t, e, s)).method = i.toUpperCase(), yc(e);
  };
});
const _c = ui(ko.exports);
var vc = { exports: {} }, Zh = mc, hl = Object.create || /* @__PURE__ */ function() {
  function i() {
  }
  return function(t) {
    if (arguments.length !== 1) throw new Error("Object.create shim only accepts one parameter.");
    return i.prototype = t, new i();
  };
}();
function ne(i, t) {
  this.name = "ParsingError", this.code = i.code, this.message = t || i.message;
}
function ul(i) {
  function t(s, n, r, a) {
    return 3600 * (0 | s) + 60 * (0 | n) + (0 | r) + (0 | a) / 1e3;
  }
  var e = i.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);
  return e ? e[3] ? t(e[1], e[2], e[3].replace(":", ""), e[4]) : e[1] > 59 ? t(e[1], e[2], 0, e[4]) : t(0, e[1], e[2], e[4]) : null;
}
function Qs() {
  this.values = hl(null);
}
function zs(i, t, e, s) {
  var n = s ? i.split(s) : [i];
  for (var r in n) if (typeof n[r] == "string") {
    var a = n[r].split(e);
    a.length === 2 && t(a[0].trim(), a[1].trim());
  }
}
function Yy(i, t, e) {
  var s = i;
  function n() {
    var l = ul(i);
    if (l === null) throw new ne(ne.Errors.BadTimeStamp, "Malformed timestamp: " + s);
    return i = i.replace(/^[^\sa-zA-Z-]+/, ""), l;
  }
  function r(l, u) {
    var p = new Qs();
    zs(l, function(g, y) {
      switch (g) {
        case "region":
          for (var T = e.length - 1; T >= 0; T--) if (e[T].id === y) {
            p.set(g, e[T].region);
            break;
          }
          break;
        case "vertical":
          p.alt(g, y, ["rl", "lr"]);
          break;
        case "line":
          var C = y.split(","), _ = C[0];
          p.integer(g, _), p.percent(g, _) && p.set("snapToLines", !1), p.alt(g, _, ["auto"]), C.length === 2 && p.alt("lineAlign", C[1], ["start", "center", "end"]);
          break;
        case "position":
          C = y.split(","), p.percent(g, C[0]), C.length === 2 && p.alt("positionAlign", C[1], ["start", "center", "end"]);
          break;
        case "size":
          p.percent(g, y);
          break;
        case "align":
          p.alt(g, y, ["start", "center", "end", "left", "right"]);
      }
    }, /:/, /\s/), u.region = p.get("region", null), u.vertical = p.get("vertical", "");
    try {
      u.line = p.get("line", "auto");
    } catch {
    }
    u.lineAlign = p.get("lineAlign", "start"), u.snapToLines = p.get("snapToLines", !0), u.size = p.get("size", 100);
    try {
      u.align = p.get("align", "center");
    } catch {
      u.align = p.get("align", "middle");
    }
    try {
      u.position = p.get("position", "auto");
    } catch {
      u.position = p.get("position", { start: 0, left: 0, center: 50, middle: 50, end: 100, right: 100 }, u.align);
    }
    u.positionAlign = p.get("positionAlign", { start: "start", left: "start", center: "center", middle: "center", end: "end", right: "end" }, u.align);
  }
  function a() {
    i = i.replace(/^\s+/, "");
  }
  if (a(), t.startTime = n(), a(), i.substr(0, 3) !== "-->") throw new ne(ne.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + s);
  i = i.substr(3), a(), t.endTime = n(), a(), r(i, t);
}
ne.prototype = hl(Error.prototype), ne.prototype.constructor = ne, ne.Errors = { BadSignature: { code: 0, message: "Malformed WebVTT signature." }, BadTimeStamp: { code: 1, message: "Malformed time stamp." } }, Qs.prototype = { set: function(i, t) {
  this.get(i) || t === "" || (this.values[i] = t);
}, get: function(i, t, e) {
  return e ? this.has(i) ? this.values[i] : t[e] : this.has(i) ? this.values[i] : t;
}, has: function(i) {
  return i in this.values;
}, alt: function(i, t, e) {
  for (var s = 0; s < e.length; ++s) if (t === e[s]) {
    this.set(i, t);
    break;
  }
}, integer: function(i, t) {
  /^-?\d+$/.test(t) && this.set(i, parseInt(t, 10));
}, percent: function(i, t) {
  return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(i, t), !0);
} };
var Na = Zh.createElement && Zh.createElement("textarea"), Qy = { c: "span", i: "i", b: "b", u: "u", ruby: "ruby", rt: "rt", v: "span", lang: "span" }, tu = { white: "rgba(255,255,255,1)", lime: "rgba(0,255,0,1)", cyan: "rgba(0,255,255,1)", red: "rgba(255,0,0,1)", yellow: "rgba(255,255,0,1)", magenta: "rgba(255,0,255,1)", blue: "rgba(0,0,255,1)", black: "rgba(0,0,0,1)" }, Jy = { v: "title", lang: "lang" }, eu = { rt: "ruby" };
function bc(i, t) {
  function e() {
    if (!t) return null;
    function _(x) {
      return t = t.substr(x.length), x;
    }
    var k = t.match(/^([^<]*)(<[^>]*>?)?/);
    return _(k[1] ? k[1] : k[2]);
  }
  function s(_) {
    return Na.innerHTML = _, _ = Na.textContent, Na.textContent = "", _;
  }
  function n(_, k) {
    return !eu[k.localName] || eu[k.localName] === _.localName;
  }
  function r(_, k) {
    var x = Qy[_];
    if (!x) return null;
    var A = i.document.createElement(x), I = Jy[_];
    return I && k && (A[I] = k.trim()), A;
  }
  for (var a, l = i.document.createElement("div"), u = l, p = []; (a = e()) !== null; ) if (a[0] !== "<") u.appendChild(i.document.createTextNode(s(a)));
  else {
    if (a[1] === "/") {
      p.length && p[p.length - 1] === a.substr(2).replace(">", "") && (p.pop(), u = u.parentNode);
      continue;
    }
    var g, y = ul(a.substr(1, a.length - 2));
    if (y) {
      g = i.document.createProcessingInstruction("timestamp", y), u.appendChild(g);
      continue;
    }
    var T = a.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
    if (!T || !(g = r(T[1], T[3])) || !n(u, g)) continue;
    if (T[2]) {
      var C = T[2].split(".");
      C.forEach(function(_) {
        var k = /^bg_/.test(_), x = k ? _.slice(3) : _;
        if (tu.hasOwnProperty(x)) {
          var A = k ? "background-color" : "color", I = tu[x];
          g.style[A] = I;
        }
      }), g.className = C.join(" ");
    }
    p.push(T[1]), u.appendChild(g), u = g;
  }
  return l;
}
var iu = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];
function Zy(i) {
  for (var t = 0; t < iu.length; t++) {
    var e = iu[t];
    if (i >= e[0] && i <= e[1]) return !0;
  }
  return !1;
}
function t_(i) {
  var t = [], e = "";
  if (!i || !i.childNodes) return "ltr";
  function s(a, l) {
    for (var u = l.childNodes.length - 1; u >= 0; u--) a.push(l.childNodes[u]);
  }
  function n(a) {
    if (!a || !a.length) return null;
    var l = a.pop(), u = l.textContent || l.innerText;
    if (u) {
      var p = u.match(/^.*(\n|\r)/);
      return p ? (a.length = 0, p[0]) : u;
    }
    return l.tagName === "ruby" ? n(a) : l.childNodes ? (s(a, l), n(a)) : void 0;
  }
  for (s(t, i); e = n(t); ) for (var r = 0; r < e.length; r++) if (Zy(e.charCodeAt(r))) return "rtl";
  return "ltr";
}
function e_(i) {
  if (typeof i.line == "number" && (i.snapToLines || i.line >= 0 && i.line <= 100)) return i.line;
  if (!i.track || !i.track.textTrackList || !i.track.textTrackList.mediaElement) return -1;
  for (var t = i.track, e = t.textTrackList, s = 0, n = 0; n < e.length && e[n] !== t; n++) e[n].mode === "showing" && s++;
  return -1 * ++s;
}
function nr() {
}
function rr(i, t, e) {
  nr.call(this), this.cue = t, this.cueDiv = bc(i, t.text);
  var s = { color: "rgba(255, 255, 255, 1)", backgroundColor: "rgba(0, 0, 0, 0.8)", position: "relative", left: 0, right: 0, top: 0, bottom: 0, display: "inline", writingMode: t.vertical === "" ? "horizontal-tb" : t.vertical === "lr" ? "vertical-lr" : "vertical-rl", unicodeBidi: "plaintext" };
  this.applyStyles(s, this.cueDiv), this.div = i.document.createElement("div"), s = { direction: t_(this.cueDiv), writingMode: t.vertical === "" ? "horizontal-tb" : t.vertical === "lr" ? "vertical-lr" : "vertical-rl", unicodeBidi: "plaintext", textAlign: t.align === "middle" ? "center" : t.align, font: e.font, whiteSpace: "pre-line", position: "absolute" }, this.applyStyles(s), this.div.appendChild(this.cueDiv);
  var n = 0;
  switch (t.positionAlign) {
    case "start":
    case "line-left":
      n = t.position;
      break;
    case "center":
      n = t.position - t.size / 2;
      break;
    case "end":
    case "line-right":
      n = t.position - t.size;
  }
  t.vertical === "" ? this.applyStyles({ left: this.formatStyle(n, "%"), width: this.formatStyle(t.size, "%") }) : this.applyStyles({ top: this.formatStyle(n, "%"), height: this.formatStyle(t.size, "%") }), this.move = function(r) {
    this.applyStyles({ top: this.formatStyle(r.top, "px"), bottom: this.formatStyle(r.bottom, "px"), left: this.formatStyle(r.left, "px"), right: this.formatStyle(r.right, "px"), height: this.formatStyle(r.height, "px"), width: this.formatStyle(r.width, "px") });
  };
}
function Ft(i) {
  var t, e, s, n;
  if (i.div) {
    e = i.div.offsetHeight, s = i.div.offsetWidth, n = i.div.offsetTop;
    var r = (r = i.div.childNodes) && (r = r[0]) && r.getClientRects && r.getClientRects();
    i = i.div.getBoundingClientRect(), t = r ? Math.max(r[0] && r[0].height || 0, i.height / r.length) : 0;
  }
  this.left = i.left, this.right = i.right, this.top = i.top || n, this.height = i.height || e, this.bottom = i.bottom || n + (i.height || e), this.width = i.width || s, this.lineHeight = t !== void 0 ? t : i.lineHeight;
}
function i_(i, t, e, s) {
  function n(x, A) {
    for (var I, O = new Ft(x), N = 1, P = 0; P < A.length; P++) {
      for (; x.overlapsOppositeAxis(e, A[P]) || x.within(e) && x.overlapsAny(s); ) x.move(A[P]);
      if (x.within(e)) return x;
      var j = x.intersectPercentage(e);
      N > j && (I = new Ft(x), N = j), x = new Ft(O);
    }
    return I || O;
  }
  var r = new Ft(t), a = t.cue, l = e_(a), u = [];
  if (a.snapToLines) {
    var p;
    switch (a.vertical) {
      case "":
        u = ["+y", "-y"], p = "height";
        break;
      case "rl":
        u = ["+x", "-x"], p = "width";
        break;
      case "lr":
        u = ["-x", "+x"], p = "width";
    }
    var g = r.lineHeight, y = g * Math.round(l), T = e[p] + g, C = u[0];
    Math.abs(y) > T && (y = y < 0 ? -1 : 1, y *= Math.ceil(T / g) * g), l < 0 && (y += a.vertical === "" ? e.height : e.width, u = u.reverse()), r.move(C, y);
  } else {
    var _ = r.lineHeight / e.height * 100;
    switch (a.lineAlign) {
      case "center":
        l -= _ / 2;
        break;
      case "end":
        l -= _;
    }
    switch (a.vertical) {
      case "":
        t.applyStyles({ top: t.formatStyle(l, "%") });
        break;
      case "rl":
        t.applyStyles({ left: t.formatStyle(l, "%") });
        break;
      case "lr":
        t.applyStyles({ right: t.formatStyle(l, "%") });
    }
    u = ["+y", "-x", "+x", "-y"], r = new Ft(t);
  }
  var k = n(r, u);
  t.move(k.toCSSCompatValues(e));
}
function ts() {
}
nr.prototype.applyStyles = function(i, t) {
  for (var e in t = t || this.div, i) i.hasOwnProperty(e) && (t.style[e] = i[e]);
}, nr.prototype.formatStyle = function(i, t) {
  return i === 0 ? 0 : i + t;
}, rr.prototype = hl(nr.prototype), rr.prototype.constructor = rr, Ft.prototype.move = function(i, t) {
  switch (t = t !== void 0 ? t : this.lineHeight, i) {
    case "+x":
      this.left += t, this.right += t;
      break;
    case "-x":
      this.left -= t, this.right -= t;
      break;
    case "+y":
      this.top += t, this.bottom += t;
      break;
    case "-y":
      this.top -= t, this.bottom -= t;
  }
}, Ft.prototype.overlaps = function(i) {
  return this.left < i.right && this.right > i.left && this.top < i.bottom && this.bottom > i.top;
}, Ft.prototype.overlapsAny = function(i) {
  for (var t = 0; t < i.length; t++) if (this.overlaps(i[t])) return !0;
  return !1;
}, Ft.prototype.within = function(i) {
  return this.top >= i.top && this.bottom <= i.bottom && this.left >= i.left && this.right <= i.right;
}, Ft.prototype.overlapsOppositeAxis = function(i, t) {
  switch (t) {
    case "+x":
      return this.left < i.left;
    case "-x":
      return this.right > i.right;
    case "+y":
      return this.top < i.top;
    case "-y":
      return this.bottom > i.bottom;
  }
}, Ft.prototype.intersectPercentage = function(i) {
  return Math.max(0, Math.min(this.right, i.right) - Math.max(this.left, i.left)) * Math.max(0, Math.min(this.bottom, i.bottom) - Math.max(this.top, i.top)) / (this.height * this.width);
}, Ft.prototype.toCSSCompatValues = function(i) {
  return { top: this.top - i.top, bottom: i.bottom - this.bottom, left: this.left - i.left, right: i.right - this.right, height: this.height, width: this.width };
}, Ft.getSimpleBoxPosition = function(i) {
  var t = i.div ? i.div.offsetHeight : i.tagName ? i.offsetHeight : 0, e = i.div ? i.div.offsetWidth : i.tagName ? i.offsetWidth : 0, s = i.div ? i.div.offsetTop : i.tagName ? i.offsetTop : 0;
  return { left: (i = i.div ? i.div.getBoundingClientRect() : i.tagName ? i.getBoundingClientRect() : i).left, right: i.right, top: i.top || s, height: i.height || t, bottom: i.bottom || s + (i.height || t), width: i.width || e };
}, ts.StringDecoder = function() {
  return { decode: function(i) {
    if (!i) return "";
    if (typeof i != "string") throw new Error("Error - expected string data.");
    return decodeURIComponent(encodeURIComponent(i));
  } };
}, ts.convertCueToDOMTree = function(i, t) {
  return i && t ? bc(i, t) : null;
};
var s_ = 0.05, n_ = "sans-serif", r_ = "1.5%";
ts.processCues = function(i, t, e) {
  if (!i || !t || !e) return null;
  for (; e.firstChild; ) e.removeChild(e.firstChild);
  var s = i.document.createElement("div");
  function n(p) {
    for (var g = 0; g < p.length; g++) if (p[g].hasBeenReset || !p[g].displayState) return !0;
    return !1;
  }
  if (s.style.position = "absolute", s.style.left = "0", s.style.right = "0", s.style.top = "0", s.style.bottom = "0", s.style.margin = r_, e.appendChild(s), n(t)) {
    var r = [], a = Ft.getSimpleBoxPosition(s), l = { font: Math.round(a.height * s_ * 100) / 100 + "px " + n_ };
    (function() {
      for (var p, g, y = 0; y < t.length; y++) g = t[y], p = new rr(i, g, l), s.appendChild(p.div), i_(i, p, a, r), g.displayState = p.div, r.push(Ft.getSimpleBoxPosition(p));
    })();
  } else for (var u = 0; u < t.length; u++) s.appendChild(t[u].displayState);
}, ts.Parser = function(i, t, e) {
  e || (e = t, t = {}), t || (t = {}), this.window = i, this.vttjs = t, this.state = "INITIAL", this.buffer = "", this.decoder = e || new TextDecoder("utf8"), this.regionList = [];
}, ts.Parser.prototype = { reportOrThrowError: function(i) {
  if (!(i instanceof ne)) throw i;
  this.onparsingerror && this.onparsingerror(i);
}, parse: function(i) {
  var t = this;
  function e() {
    for (var g = t.buffer, y = 0; y < g.length && g[y] !== "\r" && g[y] !== `
`; ) ++y;
    var T = g.substr(0, y);
    return g[y] === "\r" && ++y, g[y] === `
` && ++y, t.buffer = g.substr(y), T;
  }
  function s(g) {
    var y = new Qs();
    if (zs(g, function(C, _) {
      switch (C) {
        case "id":
          y.set(C, _);
          break;
        case "width":
          y.percent(C, _);
          break;
        case "lines":
          y.integer(C, _);
          break;
        case "regionanchor":
        case "viewportanchor":
          var k = _.split(",");
          if (k.length !== 2) break;
          var x = new Qs();
          if (x.percent("x", k[0]), x.percent("y", k[1]), !x.has("x") || !x.has("y")) break;
          y.set(C + "X", x.get("x")), y.set(C + "Y", x.get("y"));
          break;
        case "scroll":
          y.alt(C, _, ["up"]);
      }
    }, /=/, /\s/), y.has("id")) {
      var T = new (t.vttjs.VTTRegion || t.window.VTTRegion)();
      T.width = y.get("width", 100), T.lines = y.get("lines", 3), T.regionAnchorX = y.get("regionanchorX", 0), T.regionAnchorY = y.get("regionanchorY", 100), T.viewportAnchorX = y.get("viewportanchorX", 0), T.viewportAnchorY = y.get("viewportanchorY", 100), T.scroll = y.get("scroll", ""), t.onregion && t.onregion(T), t.regionList.push({ id: y.get("id"), region: T });
    }
  }
  function n(g) {
    var y = new Qs();
    zs(g, function(T, C) {
      switch (T) {
        case "MPEGT":
          y.integer(T + "S", C);
          break;
        case "LOCA":
          y.set(T + "L", ul(C));
      }
    }, /[^\d]:/, /,/), t.ontimestampmap && t.ontimestampmap({ MPEGTS: y.get("MPEGTS"), LOCAL: y.get("LOCAL") });
  }
  function r(g) {
    g.match(/X-TIMESTAMP-MAP/) ? zs(g, function(y, T) {
      y === "X-TIMESTAMP-MAP" && n(T);
    }, /=/) : zs(g, function(y, T) {
      y === "Region" && s(T);
    }, /:/);
  }
  i && (t.buffer += t.decoder.decode(i, { stream: !0 }));
  try {
    var a;
    if (t.state === "INITIAL") {
      if (!/\r\n|\n/.test(t.buffer)) return this;
      var l = (a = e()).match(/^WEBVTT([ \t].*)?$/);
      if (!l || !l[0]) throw new ne(ne.Errors.BadSignature);
      t.state = "HEADER";
    }
    for (var u = !1; t.buffer; ) {
      if (!/\r\n|\n/.test(t.buffer)) return this;
      switch (u ? u = !1 : a = e(), t.state) {
        case "HEADER":
          /:/.test(a) ? r(a) : a || (t.state = "ID");
          continue;
        case "NOTE":
          a || (t.state = "ID");
          continue;
        case "ID":
          if (/^NOTE($|[ \t])/.test(a)) {
            t.state = "NOTE";
            break;
          }
          if (!a) continue;
          t.cue = new (t.vttjs.VTTCue || t.window.VTTCue)(0, 0, "");
          try {
            t.cue.align = "center";
          } catch {
            t.cue.align = "middle";
          }
          if (t.state = "CUE", a.indexOf("-->") === -1) {
            t.cue.id = a;
            continue;
          }
        case "CUE":
          try {
            Yy(a, t.cue, t.regionList);
          } catch (g) {
            t.reportOrThrowError(g), t.cue = null, t.state = "BADCUE";
            continue;
          }
          t.state = "CUETEXT";
          continue;
        case "CUETEXT":
          var p = a.indexOf("-->") !== -1;
          if (!a || p && (u = !0)) {
            t.oncue && t.oncue(t.cue), t.cue = null, t.state = "ID";
            continue;
          }
          t.cue.text && (t.cue.text += `
`), t.cue.text += a.replace(/\u2028/g, `
`).replace(/u2029/g, `
`);
          continue;
        case "BADCUE":
          a || (t.state = "ID");
          continue;
      }
    }
  } catch (g) {
    t.reportOrThrowError(g), t.state === "CUETEXT" && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = t.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
  }
  return this;
}, flush: function() {
  var i = this;
  try {
    if (i.buffer += i.decoder.decode(), (i.cue || i.state === "HEADER") && (i.buffer += `

`, i.parse()), i.state === "INITIAL") throw new ne(ne.Errors.BadSignature);
  } catch (t) {
    i.reportOrThrowError(t);
  }
  return i.onflush && i.onflush(), this;
} };
var a_ = ts, o_ = "auto", l_ = { "": 1, lr: 1, rl: 1 }, h_ = { start: 1, center: 1, end: 1, left: 1, right: 1, auto: 1, "line-left": 1, "line-right": 1 };
function u_(i) {
  return typeof i == "string" && !!l_[i.toLowerCase()] && i.toLowerCase();
}
function Ra(i) {
  return typeof i == "string" && !!h_[i.toLowerCase()] && i.toLowerCase();
}
function Tc(i, t, e) {
  this.hasBeenReset = !1;
  var s = "", n = !1, r = i, a = t, l = e, u = null, p = "", g = !0, y = "auto", T = "start", C = "auto", _ = "auto", k = 100, x = "center";
  Object.defineProperties(this, { id: { enumerable: !0, get: function() {
    return s;
  }, set: function(A) {
    s = "" + A;
  } }, pauseOnExit: { enumerable: !0, get: function() {
    return n;
  }, set: function(A) {
    n = !!A;
  } }, startTime: { enumerable: !0, get: function() {
    return r;
  }, set: function(A) {
    if (typeof A != "number") throw new TypeError("Start time must be set to a number.");
    r = A, this.hasBeenReset = !0;
  } }, endTime: { enumerable: !0, get: function() {
    return a;
  }, set: function(A) {
    if (typeof A != "number") throw new TypeError("End time must be set to a number.");
    a = A, this.hasBeenReset = !0;
  } }, text: { enumerable: !0, get: function() {
    return l;
  }, set: function(A) {
    l = "" + A, this.hasBeenReset = !0;
  } }, region: { enumerable: !0, get: function() {
    return u;
  }, set: function(A) {
    u = A, this.hasBeenReset = !0;
  } }, vertical: { enumerable: !0, get: function() {
    return p;
  }, set: function(A) {
    var I = u_(A);
    if (I === !1) throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");
    p = I, this.hasBeenReset = !0;
  } }, snapToLines: { enumerable: !0, get: function() {
    return g;
  }, set: function(A) {
    g = !!A, this.hasBeenReset = !0;
  } }, line: { enumerable: !0, get: function() {
    return y;
  }, set: function(A) {
    if (typeof A != "number" && A !== o_) throw new SyntaxError("Line: an invalid number or illegal string was specified.");
    y = A, this.hasBeenReset = !0;
  } }, lineAlign: { enumerable: !0, get: function() {
    return T;
  }, set: function(A) {
    var I = Ra(A);
    I ? (T = I, this.hasBeenReset = !0) : console.warn("lineAlign: an invalid or illegal string was specified.");
  } }, position: { enumerable: !0, get: function() {
    return C;
  }, set: function(A) {
    if (A < 0 || A > 100) throw new Error("Position must be between 0 and 100.");
    C = A, this.hasBeenReset = !0;
  } }, positionAlign: { enumerable: !0, get: function() {
    return _;
  }, set: function(A) {
    var I = Ra(A);
    I ? (_ = I, this.hasBeenReset = !0) : console.warn("positionAlign: an invalid or illegal string was specified.");
  } }, size: { enumerable: !0, get: function() {
    return k;
  }, set: function(A) {
    if (A < 0 || A > 100) throw new Error("Size must be between 0 and 100.");
    k = A, this.hasBeenReset = !0;
  } }, align: { enumerable: !0, get: function() {
    return x;
  }, set: function(A) {
    var I = Ra(A);
    if (!I) throw new SyntaxError("align: an invalid or illegal alignment string was specified.");
    x = I, this.hasBeenReset = !0;
  } } }), this.displayState = void 0;
}
Tc.prototype.getCueAsHTML = function() {
  return WebVTT.convertCueToDOMTree(window, this.text);
};
var d_ = Tc, c_ = { "": !0, up: !0 };
function p_(i) {
  return typeof i == "string" && !!c_[i.toLowerCase()] && i.toLowerCase();
}
function Ns(i) {
  return typeof i == "number" && i >= 0 && i <= 100;
}
function m_() {
  var i = 100, t = 3, e = 0, s = 100, n = 0, r = 100, a = "";
  Object.defineProperties(this, { width: { enumerable: !0, get: function() {
    return i;
  }, set: function(l) {
    if (!Ns(l)) throw new Error("Width must be between 0 and 100.");
    i = l;
  } }, lines: { enumerable: !0, get: function() {
    return t;
  }, set: function(l) {
    if (typeof l != "number") throw new TypeError("Lines must be set to a number.");
    t = l;
  } }, regionAnchorY: { enumerable: !0, get: function() {
    return s;
  }, set: function(l) {
    if (!Ns(l)) throw new Error("RegionAnchorX must be between 0 and 100.");
    s = l;
  } }, regionAnchorX: { enumerable: !0, get: function() {
    return e;
  }, set: function(l) {
    if (!Ns(l)) throw new Error("RegionAnchorY must be between 0 and 100.");
    e = l;
  } }, viewportAnchorY: { enumerable: !0, get: function() {
    return r;
  }, set: function(l) {
    if (!Ns(l)) throw new Error("ViewportAnchorY must be between 0 and 100.");
    r = l;
  } }, viewportAnchorX: { enumerable: !0, get: function() {
    return n;
  }, set: function(l) {
    if (!Ns(l)) throw new Error("ViewportAnchorX must be between 0 and 100.");
    n = l;
  } }, scroll: { enumerable: !0, get: function() {
    return a;
  }, set: function(l) {
    var u = p_(l);
    u === !1 ? console.warn("Scroll: an invalid or illegal string was specified.") : a = u;
  } } });
}
var g_ = m_, $e = jr, xi = vc.exports = { WebVTT: a_, VTTCue: d_, VTTRegion: g_ };
$e.vttjs = xi, $e.WebVTT = xi.WebVTT;
var f_ = xi.VTTCue, y_ = xi.VTTRegion, __ = $e.VTTCue, v_ = $e.VTTRegion;
xi.shim = function() {
  $e.VTTCue = f_, $e.VTTRegion = y_;
}, xi.restore = function() {
  $e.VTTCue = __, $e.VTTRegion = v_;
}, $e.VTTCue || xi.shim();
const su = ui(vc.exports);
function ve() {
  return ve = Object.assign ? Object.assign.bind() : function(i) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (i[s] = e[s]);
    }
    return i;
  }, ve.apply(this, arguments);
}
var nu, Sc = { exports: {} };
nu = Sc, function(i) {
  var t = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, e = /^(?=([^\/?#]*))\1([^]*)$/, s = /(?:\/|^)\.(?=\/)/g, n = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, r = { buildAbsoluteURL: function(a, l, u) {
    if (u = u || {}, a = a.trim(), !(l = l.trim())) {
      if (!u.alwaysNormalize) return a;
      var p = r.parseURL(a);
      if (!p) throw new Error("Error trying to parse base URL.");
      return p.path = r.normalizePath(p.path), r.buildURLFromParts(p);
    }
    var g = r.parseURL(l);
    if (!g) throw new Error("Error trying to parse relative URL.");
    if (g.scheme) return u.alwaysNormalize ? (g.path = r.normalizePath(g.path), r.buildURLFromParts(g)) : l;
    var y = r.parseURL(a);
    if (!y) throw new Error("Error trying to parse base URL.");
    if (!y.netLoc && y.path && y.path[0] !== "/") {
      var T = e.exec(y.path);
      y.netLoc = T[1], y.path = T[2];
    }
    y.netLoc && !y.path && (y.path = "/");
    var C = { scheme: y.scheme, netLoc: g.netLoc, path: null, params: g.params, query: g.query, fragment: g.fragment };
    if (!g.netLoc && (C.netLoc = y.netLoc, g.path[0] !== "/")) if (g.path) {
      var _ = y.path, k = _.substring(0, _.lastIndexOf("/") + 1) + g.path;
      C.path = r.normalizePath(k);
    } else C.path = y.path, g.params || (C.params = y.params, g.query || (C.query = y.query));
    return C.path === null && (C.path = u.alwaysNormalize ? r.normalizePath(g.path) : g.path), r.buildURLFromParts(C);
  }, parseURL: function(a) {
    var l = t.exec(a);
    return l ? { scheme: l[1] || "", netLoc: l[2] || "", path: l[3] || "", params: l[4] || "", query: l[5] || "", fragment: l[6] || "" } : null;
  }, normalizePath: function(a) {
    for (a = a.split("").reverse().join("").replace(s, ""); a.length !== (a = a.replace(n, "")).length; ) ;
    return a.split("").reverse().join("");
  }, buildURLFromParts: function(a) {
    return a.scheme + a.netLoc + a.path + a.params + a.query + a.fragment;
  } };
  nu.exports = r;
}();
const ru = ui(Sc.exports);
var au = "http://example.com", $r = function(i, t) {
  if (/^[a-z]+:/i.test(t)) return t;
  /^data:/.test(i) && (i = E.location && E.location.href || "");
  var e = typeof E.URL == "function", s = /^\/\//.test(i), n = !E.location && !/\/\//i.test(i);
  if (e ? i = new E.URL(i, E.location || au) : /\/\//i.test(i) || (i = ru.buildAbsoluteURL(E.location && E.location.href || "", i)), e) {
    var r = new URL(t, i);
    return n ? r.href.slice(au.length) : s ? r.href.slice(r.protocol.length) : r.href;
  }
  return ru.buildAbsoluteURL(i, t);
}, dl = function() {
  function i() {
    this.listeners = {};
  }
  var t = i.prototype;
  return t.on = function(e, s) {
    this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(s);
  }, t.off = function(e, s) {
    if (!this.listeners[e]) return !1;
    var n = this.listeners[e].indexOf(s);
    return this.listeners[e] = this.listeners[e].slice(0), this.listeners[e].splice(n, 1), n > -1;
  }, t.trigger = function(e) {
    var s = this.listeners[e];
    if (s) if (arguments.length === 2) for (var n = s.length, r = 0; r < n; ++r) s[r].call(this, arguments[1]);
    else for (var a = Array.prototype.slice.call(arguments, 1), l = s.length, u = 0; u < l; ++u) s[u].apply(this, a);
  }, t.dispose = function() {
    this.listeners = {};
  }, t.pipe = function(e) {
    this.on("data", function(s) {
      e.push(s);
    });
  }, i;
}(), b_ = function(i) {
  return E.atob ? E.atob(i) : Buffer.from(i, "base64").toString("binary");
};
function T_(i) {
  for (var t = b_(i), e = new Uint8Array(t.length), s = 0; s < t.length; s++) e[s] = t.charCodeAt(s);
  return e;
}
class S_ extends dl {
  constructor() {
    super(), this.buffer = "";
  }
  push(t) {
    let e;
    for (this.buffer += t, e = this.buffer.indexOf(`
`); e > -1; e = this.buffer.indexOf(`
`)) this.trigger("data", this.buffer.substring(0, e)), this.buffer = this.buffer.substring(e + 1);
  }
}
const E_ = "	", Ma = function(i) {
  const t = /([0-9.]*)?@?([0-9.]*)?/.exec(i || ""), e = {};
  return t[1] && (e.length = parseInt(t[1], 10)), t[2] && (e.offset = parseInt(t[2], 10)), e;
}, w_ = function() {
  return new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))');
}, ee = function(i) {
  const t = {};
  if (!i) return t;
  const e = i.split(w_());
  let s, n = e.length;
  for (; n--; ) e[n] !== "" && (s = /([^=]*)=(.*)/.exec(e[n]).slice(1), s[0] = s[0].replace(/^\s+|\s+$/g, ""), s[1] = s[1].replace(/^\s+|\s+$/g, ""), s[1] = s[1].replace(/^['"](.*)['"]$/g, "$1"), t[s[0]] = s[1]);
  return t;
};
class C_ extends dl {
  constructor() {
    super(), this.customParsers = [], this.tagMappers = [];
  }
  push(t) {
    let e, s;
    if ((t = t.trim()).length !== 0) {
      if (t[0] !== "#") return void this.trigger("data", { type: "uri", uri: t });
      this.tagMappers.reduce((n, r) => {
        const a = r(t);
        return a === t ? n : n.concat([a]);
      }, [t]).forEach((n) => {
        for (let r = 0; r < this.customParsers.length; r++) if (this.customParsers[r].call(this, n)) return;
        if (n.indexOf("#EXT") === 0) if (n = n.replace("\r", ""), e = /^#EXTM3U/.exec(n), e) this.trigger("data", { type: "tag", tagType: "m3u" });
        else {
          if (e = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(n), e) return s = { type: "tag", tagType: "inf" }, e[1] && (s.duration = parseFloat(e[1])), e[2] && (s.title = e[2]), void this.trigger("data", s);
          if (e = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(n), e) return s = { type: "tag", tagType: "targetduration" }, e[1] && (s.duration = parseInt(e[1], 10)), void this.trigger("data", s);
          if (e = /^#EXT-X-VERSION:([0-9.]*)?/.exec(n), e) return s = { type: "tag", tagType: "version" }, e[1] && (s.version = parseInt(e[1], 10)), void this.trigger("data", s);
          if (e = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(n), e) return s = { type: "tag", tagType: "media-sequence" }, e[1] && (s.number = parseInt(e[1], 10)), void this.trigger("data", s);
          if (e = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(n), e) return s = { type: "tag", tagType: "discontinuity-sequence" }, e[1] && (s.number = parseInt(e[1], 10)), void this.trigger("data", s);
          if (e = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(n), e) return s = { type: "tag", tagType: "playlist-type" }, e[1] && (s.playlistType = e[1]), void this.trigger("data", s);
          if (e = /^#EXT-X-BYTERANGE:(.*)?$/.exec(n), e) return s = ve(Ma(e[1]), { type: "tag", tagType: "byterange" }), void this.trigger("data", s);
          if (e = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(n), e) return s = { type: "tag", tagType: "allow-cache" }, e[1] && (s.allowed = !/NO/.test(e[1])), void this.trigger("data", s);
          if (e = /^#EXT-X-MAP:(.*)$/.exec(n), e) {
            if (s = { type: "tag", tagType: "map" }, e[1]) {
              const r = ee(e[1]);
              r.URI && (s.uri = r.URI), r.BYTERANGE && (s.byterange = Ma(r.BYTERANGE));
            }
            this.trigger("data", s);
          } else if (e = /^#EXT-X-STREAM-INF:(.*)$/.exec(n), e) {
            if (s = { type: "tag", tagType: "stream-inf" }, e[1]) {
              if (s.attributes = ee(e[1]), s.attributes.RESOLUTION) {
                const r = s.attributes.RESOLUTION.split("x"), a = {};
                r[0] && (a.width = parseInt(r[0], 10)), r[1] && (a.height = parseInt(r[1], 10)), s.attributes.RESOLUTION = a;
              }
              s.attributes.BANDWIDTH && (s.attributes.BANDWIDTH = parseInt(s.attributes.BANDWIDTH, 10)), s.attributes["FRAME-RATE"] && (s.attributes["FRAME-RATE"] = parseFloat(s.attributes["FRAME-RATE"])), s.attributes["PROGRAM-ID"] && (s.attributes["PROGRAM-ID"] = parseInt(s.attributes["PROGRAM-ID"], 10));
            }
            this.trigger("data", s);
          } else {
            if (e = /^#EXT-X-MEDIA:(.*)$/.exec(n), e) return s = { type: "tag", tagType: "media" }, e[1] && (s.attributes = ee(e[1])), void this.trigger("data", s);
            if (e = /^#EXT-X-ENDLIST/.exec(n), e) this.trigger("data", { type: "tag", tagType: "endlist" });
            else if (e = /^#EXT-X-DISCONTINUITY/.exec(n), e) this.trigger("data", { type: "tag", tagType: "discontinuity" });
            else {
              if (e = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(n), e) return s = { type: "tag", tagType: "program-date-time" }, e[1] && (s.dateTimeString = e[1], s.dateTimeObject = new Date(e[1])), void this.trigger("data", s);
              if (e = /^#EXT-X-KEY:(.*)$/.exec(n), e) return s = { type: "tag", tagType: "key" }, e[1] && (s.attributes = ee(e[1]), s.attributes.IV && (s.attributes.IV.substring(0, 2).toLowerCase() === "0x" && (s.attributes.IV = s.attributes.IV.substring(2)), s.attributes.IV = s.attributes.IV.match(/.{8}/g), s.attributes.IV[0] = parseInt(s.attributes.IV[0], 16), s.attributes.IV[1] = parseInt(s.attributes.IV[1], 16), s.attributes.IV[2] = parseInt(s.attributes.IV[2], 16), s.attributes.IV[3] = parseInt(s.attributes.IV[3], 16), s.attributes.IV = new Uint32Array(s.attributes.IV))), void this.trigger("data", s);
              if (e = /^#EXT-X-START:(.*)$/.exec(n), e) return s = { type: "tag", tagType: "start" }, e[1] && (s.attributes = ee(e[1]), s.attributes["TIME-OFFSET"] = parseFloat(s.attributes["TIME-OFFSET"]), s.attributes.PRECISE = /YES/.test(s.attributes.PRECISE)), void this.trigger("data", s);
              if (e = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(n), e) return s = { type: "tag", tagType: "cue-out-cont" }, e[1] ? s.data = e[1] : s.data = "", void this.trigger("data", s);
              if (e = /^#EXT-X-CUE-OUT:(.*)?$/.exec(n), e) return s = { type: "tag", tagType: "cue-out" }, e[1] ? s.data = e[1] : s.data = "", void this.trigger("data", s);
              if (e = /^#EXT-X-CUE-IN:(.*)?$/.exec(n), e) return s = { type: "tag", tagType: "cue-in" }, e[1] ? s.data = e[1] : s.data = "", void this.trigger("data", s);
              if (e = /^#EXT-X-SKIP:(.*)$/.exec(n), e && e[1]) return s = { type: "tag", tagType: "skip" }, s.attributes = ee(e[1]), s.attributes.hasOwnProperty("SKIPPED-SEGMENTS") && (s.attributes["SKIPPED-SEGMENTS"] = parseInt(s.attributes["SKIPPED-SEGMENTS"], 10)), s.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") && (s.attributes["RECENTLY-REMOVED-DATERANGES"] = s.attributes["RECENTLY-REMOVED-DATERANGES"].split(E_)), void this.trigger("data", s);
              if (e = /^#EXT-X-PART:(.*)$/.exec(n), e && e[1]) return s = { type: "tag", tagType: "part" }, s.attributes = ee(e[1]), ["DURATION"].forEach(function(r) {
                s.attributes.hasOwnProperty(r) && (s.attributes[r] = parseFloat(s.attributes[r]));
              }), ["INDEPENDENT", "GAP"].forEach(function(r) {
                s.attributes.hasOwnProperty(r) && (s.attributes[r] = /YES/.test(s.attributes[r]));
              }), s.attributes.hasOwnProperty("BYTERANGE") && (s.attributes.byterange = Ma(s.attributes.BYTERANGE)), void this.trigger("data", s);
              if (e = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(n), e && e[1]) return s = { type: "tag", tagType: "server-control" }, s.attributes = ee(e[1]), ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(function(r) {
                s.attributes.hasOwnProperty(r) && (s.attributes[r] = parseFloat(s.attributes[r]));
              }), ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function(r) {
                s.attributes.hasOwnProperty(r) && (s.attributes[r] = /YES/.test(s.attributes[r]));
              }), void this.trigger("data", s);
              if (e = /^#EXT-X-PART-INF:(.*)$/.exec(n), e && e[1]) return s = { type: "tag", tagType: "part-inf" }, s.attributes = ee(e[1]), ["PART-TARGET"].forEach(function(r) {
                s.attributes.hasOwnProperty(r) && (s.attributes[r] = parseFloat(s.attributes[r]));
              }), void this.trigger("data", s);
              if (e = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(n), e && e[1]) return s = { type: "tag", tagType: "preload-hint" }, s.attributes = ee(e[1]), ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(function(r) {
                if (s.attributes.hasOwnProperty(r)) {
                  s.attributes[r] = parseInt(s.attributes[r], 10);
                  const a = r === "BYTERANGE-LENGTH" ? "length" : "offset";
                  s.attributes.byterange = s.attributes.byterange || {}, s.attributes.byterange[a] = s.attributes[r], delete s.attributes[r];
                }
              }), void this.trigger("data", s);
              if (e = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(n), e && e[1]) return s = { type: "tag", tagType: "rendition-report" }, s.attributes = ee(e[1]), ["LAST-MSN", "LAST-PART"].forEach(function(r) {
                s.attributes.hasOwnProperty(r) && (s.attributes[r] = parseInt(s.attributes[r], 10));
              }), void this.trigger("data", s);
              if (e = /^#EXT-X-DATERANGE:(.*)$/.exec(n), e && e[1]) {
                s = { type: "tag", tagType: "daterange" }, s.attributes = ee(e[1]), ["ID", "CLASS"].forEach(function(a) {
                  s.attributes.hasOwnProperty(a) && (s.attributes[a] = String(s.attributes[a]));
                }), ["START-DATE", "END-DATE"].forEach(function(a) {
                  s.attributes.hasOwnProperty(a) && (s.attributes[a] = new Date(s.attributes[a]));
                }), ["DURATION", "PLANNED-DURATION"].forEach(function(a) {
                  s.attributes.hasOwnProperty(a) && (s.attributes[a] = parseFloat(s.attributes[a]));
                }), ["END-ON-NEXT"].forEach(function(a) {
                  s.attributes.hasOwnProperty(a) && (s.attributes[a] = /YES/i.test(s.attributes[a]));
                }), ["SCTE35-CMD", " SCTE35-OUT", "SCTE35-IN"].forEach(function(a) {
                  s.attributes.hasOwnProperty(a) && (s.attributes[a] = s.attributes[a].toString(16));
                });
                const r = /^X-([A-Z]+-)+[A-Z]+$/;
                for (const a in s.attributes) {
                  if (!r.test(a)) continue;
                  const l = /[0-9A-Fa-f]{6}/g.test(s.attributes[a]), u = /^\d+(\.\d+)?$/.test(s.attributes[a]);
                  s.attributes[a] = l ? s.attributes[a].toString(16) : u ? parseFloat(s.attributes[a]) : String(s.attributes[a]);
                }
                this.trigger("data", s);
              } else if (e = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(n), e) this.trigger("data", { type: "tag", tagType: "independent-segments" });
              else {
                if (e = /^#EXT-X-CONTENT-STEERING:(.*)$/.exec(n), e) return s = { type: "tag", tagType: "content-steering" }, s.attributes = ee(e[1]), void this.trigger("data", s);
                this.trigger("data", { type: "tag", data: n.slice(4) });
              }
            }
          }
        }
        else this.trigger("data", { type: "comment", text: n.slice(1) });
      });
    }
  }
  addParser({ expression: t, customType: e, dataParser: s, segment: n }) {
    typeof s != "function" && (s = (r) => r), this.customParsers.push((r) => {
      if (t.exec(r)) return this.trigger("data", { type: "custom", data: s(r), customType: e, segment: n }), !0;
    });
  }
  addTagMapper({ expression: t, map: e }) {
    const s = (n) => t.test(n) ? e(n) : n;
    this.tagMappers.push(s);
  }
}
const k_ = (i) => i.toLowerCase().replace(/-(\w)/g, (t) => t[1].toUpperCase()), Ze = function(i) {
  const t = {};
  return Object.keys(i).forEach(function(e) {
    t[k_(e)] = i[e];
  }), t;
}, Ua = function(i) {
  const { serverControl: t, targetDuration: e, partTargetDuration: s } = i;
  if (!t) return;
  const n = "#EXT-X-SERVER-CONTROL", r = "holdBack", a = "partHoldBack", l = e && 3 * e, u = s && 2 * s;
  e && !t.hasOwnProperty(r) && (t[r] = l, this.trigger("info", { message: `${n} defaulting HOLD-BACK to targetDuration * 3 (${l}).` })), l && t[r] < l && (this.trigger("warn", { message: `${n} clamping HOLD-BACK (${t[r]}) to targetDuration * 3 (${l})` }), t[r] = l), s && !t.hasOwnProperty(a) && (t[a] = 3 * s, this.trigger("info", { message: `${n} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${t[a]}).` })), s && t[a] < u && (this.trigger("warn", { message: `${n} clamping PART-HOLD-BACK (${t[a]}) to partTargetDuration * 2 (${u}).` }), t[a] = u);
};
class x_ extends dl {
  constructor() {
    super(), this.lineStream = new S_(), this.parseStream = new C_(), this.lineStream.pipe(this.parseStream), this.lastProgramDateTime = null;
    const t = this, e = [];
    let s, n, r = {}, a = !1;
    const l = function() {
    }, u = { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} }, p = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";
    let g = 0;
    this.manifest = { allowCache: !0, discontinuityStarts: [], dateRanges: [], segments: [] };
    let y = 0, T = 0;
    const C = {};
    this.on("end", () => {
      r.uri || !r.parts && !r.preloadHints || (!r.map && s && (r.map = s), !r.key && n && (r.key = n), r.timeline || typeof g != "number" || (r.timeline = g), this.manifest.preloadSegment = r);
    }), this.parseStream.on("data", function(_) {
      let k, x;
      ({ tag() {
        ({ version() {
          _.version && (this.manifest.version = _.version);
        }, "allow-cache"() {
          this.manifest.allowCache = _.allowed, "allowed" in _ || (this.trigger("info", { message: "defaulting allowCache to YES" }), this.manifest.allowCache = !0);
        }, byterange() {
          const A = {};
          "length" in _ && (r.byterange = A, A.length = _.length, "offset" in _ || (_.offset = y)), "offset" in _ && (r.byterange = A, A.offset = _.offset), y = A.offset + A.length;
        }, endlist() {
          this.manifest.endList = !0;
        }, inf() {
          "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", { message: "defaulting media sequence to zero" })), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", { message: "defaulting discontinuity sequence to zero" })), _.title && (r.title = _.title), _.duration > 0 && (r.duration = _.duration), _.duration === 0 && (r.duration = 0.01, this.trigger("info", { message: "updating zero segment duration to a small value" })), this.manifest.segments = e;
        }, key() {
          if (_.attributes) if (_.attributes.METHOD !== "NONE") if (_.attributes.URI) {
            if (_.attributes.KEYFORMAT === "com.apple.streamingkeydelivery") return this.manifest.contentProtection = this.manifest.contentProtection || {}, void (this.manifest.contentProtection["com.apple.fps.1_0"] = { attributes: _.attributes });
            if (_.attributes.KEYFORMAT === "com.microsoft.playready") return this.manifest.contentProtection = this.manifest.contentProtection || {}, void (this.manifest.contentProtection["com.microsoft.playready"] = { uri: _.attributes.URI });
            if (_.attributes.KEYFORMAT === p)
              return ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(_.attributes.METHOD) === -1 ? void this.trigger("warn", { message: "invalid key method provided for Widevine" }) : (_.attributes.METHOD === "SAMPLE-AES-CENC" && this.trigger("warn", { message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead" }), _.attributes.URI.substring(0, 23) !== "data:text/plain;base64," ? void this.trigger("warn", { message: "invalid key URI provided for Widevine" }) : _.attributes.KEYID && _.attributes.KEYID.substring(0, 2) === "0x" ? (this.manifest.contentProtection = this.manifest.contentProtection || {}, void (this.manifest.contentProtection["com.widevine.alpha"] = { attributes: { schemeIdUri: _.attributes.KEYFORMAT, keyId: _.attributes.KEYID.substring(2) }, pssh: T_(_.attributes.URI.split(",")[1]) })) : void this.trigger("warn", { message: "invalid key ID provided for Widevine" }));
            _.attributes.METHOD || this.trigger("warn", { message: "defaulting key method to AES-128" }), n = { method: _.attributes.METHOD || "AES-128", uri: _.attributes.URI }, _.attributes.IV !== void 0 && (n.iv = _.attributes.IV);
          } else this.trigger("warn", { message: "ignoring key declaration without URI" });
          else n = null;
          else this.trigger("warn", { message: "ignoring key declaration without attribute list" });
        }, "media-sequence"() {
          isFinite(_.number) ? this.manifest.mediaSequence = _.number : this.trigger("warn", { message: "ignoring invalid media sequence: " + _.number });
        }, "discontinuity-sequence"() {
          isFinite(_.number) ? (this.manifest.discontinuitySequence = _.number, g = _.number) : this.trigger("warn", { message: "ignoring invalid discontinuity sequence: " + _.number });
        }, "playlist-type"() {
          /VOD|EVENT/.test(_.playlistType) ? this.manifest.playlistType = _.playlistType : this.trigger("warn", { message: "ignoring unknown playlist type: " + _.playlist });
        }, map() {
          s = {}, _.uri && (s.uri = _.uri), _.byterange && (s.byterange = _.byterange), n && (s.key = n);
        }, "stream-inf"() {
          this.manifest.playlists = e, this.manifest.mediaGroups = this.manifest.mediaGroups || u, _.attributes ? (r.attributes || (r.attributes = {}), ve(r.attributes, _.attributes)) : this.trigger("warn", { message: "ignoring empty stream-inf attributes" });
        }, media() {
          if (this.manifest.mediaGroups = this.manifest.mediaGroups || u, !(_.attributes && _.attributes.TYPE && _.attributes["GROUP-ID"] && _.attributes.NAME)) return void this.trigger("warn", { message: "ignoring incomplete or missing media group" });
          const A = this.manifest.mediaGroups[_.attributes.TYPE];
          A[_.attributes["GROUP-ID"]] = A[_.attributes["GROUP-ID"]] || {}, k = A[_.attributes["GROUP-ID"]], x = { default: /yes/i.test(_.attributes.DEFAULT) }, x.default ? x.autoselect = !0 : x.autoselect = /yes/i.test(_.attributes.AUTOSELECT), _.attributes.LANGUAGE && (x.language = _.attributes.LANGUAGE), _.attributes.URI && (x.uri = _.attributes.URI), _.attributes["INSTREAM-ID"] && (x.instreamId = _.attributes["INSTREAM-ID"]), _.attributes.CHARACTERISTICS && (x.characteristics = _.attributes.CHARACTERISTICS), _.attributes.FORCED && (x.forced = /yes/i.test(_.attributes.FORCED)), k[_.attributes.NAME] = x;
        }, discontinuity() {
          g += 1, r.discontinuity = !0, this.manifest.discontinuityStarts.push(e.length);
        }, "program-date-time"() {
          this.manifest.dateTimeString === void 0 && (this.manifest.dateTimeString = _.dateTimeString, this.manifest.dateTimeObject = _.dateTimeObject), r.dateTimeString = _.dateTimeString, r.dateTimeObject = _.dateTimeObject;
          const { lastProgramDateTime: A } = this;
          this.lastProgramDateTime = new Date(_.dateTimeString).getTime(), A === null && this.manifest.segments.reduceRight((I, O) => (O.programDateTime = I - 1e3 * O.duration, O.programDateTime), this.lastProgramDateTime);
        }, targetduration() {
          !isFinite(_.duration) || _.duration < 0 ? this.trigger("warn", { message: "ignoring invalid target duration: " + _.duration }) : (this.manifest.targetDuration = _.duration, Ua.call(this, this.manifest));
        }, start() {
          _.attributes && !isNaN(_.attributes["TIME-OFFSET"]) ? this.manifest.start = { timeOffset: _.attributes["TIME-OFFSET"], precise: _.attributes.PRECISE } : this.trigger("warn", { message: "ignoring start declaration without appropriate attribute list" });
        }, "cue-out"() {
          r.cueOut = _.data;
        }, "cue-out-cont"() {
          r.cueOutCont = _.data;
        }, "cue-in"() {
          r.cueIn = _.data;
        }, skip() {
          this.manifest.skip = Ze(_.attributes), this.warnOnMissingAttributes_("#EXT-X-SKIP", _.attributes, ["SKIPPED-SEGMENTS"]);
        }, part() {
          a = !0;
          const A = this.manifest.segments.length, I = Ze(_.attributes);
          r.parts = r.parts || [], r.parts.push(I), I.byterange && (I.byterange.hasOwnProperty("offset") || (I.byterange.offset = T), T = I.byterange.offset + I.byterange.length);
          const O = r.parts.length - 1;
          this.warnOnMissingAttributes_(`#EXT-X-PART #${O} for segment #${A}`, _.attributes, ["URI", "DURATION"]), this.manifest.renditionReports && this.manifest.renditionReports.forEach((N, P) => {
            N.hasOwnProperty("lastPart") || this.trigger("warn", { message: `#EXT-X-RENDITION-REPORT #${P} lacks required attribute(s): LAST-PART` });
          });
        }, "server-control"() {
          const A = this.manifest.serverControl = Ze(_.attributes);
          A.hasOwnProperty("canBlockReload") || (A.canBlockReload = !1, this.trigger("info", { message: "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false" })), Ua.call(this, this.manifest), A.canSkipDateranges && !A.hasOwnProperty("canSkipUntil") && this.trigger("warn", { message: "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set" });
        }, "preload-hint"() {
          const A = this.manifest.segments.length, I = Ze(_.attributes), O = I.type && I.type === "PART";
          r.preloadHints = r.preloadHints || [], r.preloadHints.push(I), I.byterange && (I.byterange.hasOwnProperty("offset") || (I.byterange.offset = O ? T : 0, O && (T = I.byterange.offset + I.byterange.length)));
          const N = r.preloadHints.length - 1;
          if (this.warnOnMissingAttributes_(`#EXT-X-PRELOAD-HINT #${N} for segment #${A}`, _.attributes, ["TYPE", "URI"]), I.type) for (let P = 0; P < r.preloadHints.length - 1; P++) {
            const j = r.preloadHints[P];
            j.type && j.type === I.type && this.trigger("warn", { message: `#EXT-X-PRELOAD-HINT #${N} for segment #${A} has the same TYPE ${I.type} as preload hint #${P}` });
          }
        }, "rendition-report"() {
          const A = Ze(_.attributes);
          this.manifest.renditionReports = this.manifest.renditionReports || [], this.manifest.renditionReports.push(A);
          const I = this.manifest.renditionReports.length - 1, O = ["LAST-MSN", "URI"];
          a && O.push("LAST-PART"), this.warnOnMissingAttributes_(`#EXT-X-RENDITION-REPORT #${I}`, _.attributes, O);
        }, "part-inf"() {
          this.manifest.partInf = Ze(_.attributes), this.warnOnMissingAttributes_("#EXT-X-PART-INF", _.attributes, ["PART-TARGET"]), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), Ua.call(this, this.manifest);
        }, daterange() {
          this.manifest.dateRanges.push(Ze(_.attributes));
          const A = this.manifest.dateRanges.length - 1;
          this.warnOnMissingAttributes_(`#EXT-X-DATERANGE #${A}`, _.attributes, ["ID", "START-DATE"]);
          const I = this.manifest.dateRanges[A];
          I.endDate && I.startDate && new Date(I.endDate) < new Date(I.startDate) && this.trigger("warn", { message: "EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE" }), I.duration && I.duration < 0 && this.trigger("warn", { message: "EXT-X-DATERANGE DURATION must not be negative" }), I.plannedDuration && I.plannedDuration < 0 && this.trigger("warn", { message: "EXT-X-DATERANGE PLANNED-DURATION must not be negative" });
          const O = !!I.endOnNext;
          if (O && !I.class && this.trigger("warn", { message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute" }), O && (I.duration || I.endDate) && this.trigger("warn", { message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes" }), I.duration && I.endDate) {
            const N = I.startDate.getTime() + 1e3 * I.duration;
            this.manifest.dateRanges[A].endDate = new Date(N);
          }
          if (C[I.id]) {
            for (const P in C[I.id]) if (I[P] && JSON.stringify(C[I.id][P]) !== JSON.stringify(I[P])) {
              this.trigger("warn", { message: "EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values" });
              break;
            }
            const N = this.manifest.dateRanges.findIndex((P) => P.id === I.id);
            this.manifest.dateRanges[N] = ve(this.manifest.dateRanges[N], I), C[I.id] = ve(C[I.id], I), this.manifest.dateRanges.pop();
          } else C[I.id] = I;
        }, "independent-segments"() {
          this.manifest.independentSegments = !0;
        }, "content-steering"() {
          this.manifest.contentSteering = Ze(_.attributes), this.warnOnMissingAttributes_("#EXT-X-CONTENT-STEERING", _.attributes, ["SERVER-URI"]);
        } }[_.tagType] || l).call(t);
      }, uri() {
        r.uri = _.uri, e.push(r), this.manifest.targetDuration && !("duration" in r) && (this.trigger("warn", { message: "defaulting segment duration to the target duration" }), r.duration = this.manifest.targetDuration), n && (r.key = n), r.timeline = g, s && (r.map = s), T = 0, this.lastProgramDateTime !== null && (r.programDateTime = this.lastProgramDateTime, this.lastProgramDateTime += 1e3 * r.duration), r = {};
      }, comment() {
      }, custom() {
        _.segment ? (r.custom = r.custom || {}, r.custom[_.customType] = _.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[_.customType] = _.data);
      } })[_.type].call(t);
    });
  }
  warnOnMissingAttributes_(t, e, s) {
    const n = [];
    s.forEach(function(r) {
      e.hasOwnProperty(r) || n.push(r);
    }), n.length && this.trigger("warn", { message: `${t} lacks required attribute(s): ${n.join(", ")}` });
  }
  push(t) {
    this.lineStream.push(t);
  }
  end() {
    this.lineStream.push(`
`), this.manifest.dateRanges.length && this.lastProgramDateTime === null && this.trigger("warn", { message: "A playlist with EXT-X-DATERANGE tag must contain atleast one EXT-X-PROGRAM-DATE-TIME tag" }), this.lastProgramDateTime = null, this.trigger("end");
  }
  addParser(t) {
    this.parseStream.addParser(t);
  }
  addTagMapper(t) {
    this.parseStream.addTagMapper(t);
  }
}
var Hn, ou, Ii = { mp4: /^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v|stpp.ttml.im1t)/, webm: /^(vp0?[89]|av0?1|opus|vorbis)/, ogg: /^(vp0?[89]|theora|flac|opus|vorbis)/, video: /^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/, audio: /^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3|speex|aac)/, text: /^(stpp.ttml.im1t)/, muxerVideo: /^(avc0?1)/, muxerAudio: /^(mp4a)/, muxerText: /a^/ }, I_ = ["video", "audio", "text"], lu = ["Video", "Audio", "Text"], Ec = function(i) {
  return i && i.replace(/avc1\.(\d+)\.(\d+)/i, function(t, e, s) {
    return "avc1." + ("00" + Number(e).toString(16)).slice(-2) + "00" + ("00" + Number(s).toString(16)).slice(-2);
  });
}, Ce = function(i) {
  i === void 0 && (i = "");
  var t = i.split(","), e = [];
  return t.forEach(function(s) {
    var n;
    s = s.trim(), I_.forEach(function(r) {
      var a = Ii[r].exec(s.toLowerCase());
      if (a && !(a.length <= 1)) {
        n = r;
        var l = s.substring(0, a[1].length), u = s.replace(l, "");
        e.push({ type: l, details: u, mediaType: r });
      }
    }), n || e.push({ type: s, details: "", mediaType: "unknown" });
  }), e;
}, A_ = function(i, t) {
  if (!i.mediaGroups.AUDIO || !t) return null;
  var e = i.mediaGroups.AUDIO[t];
  if (!e) return null;
  for (var s in e) {
    var n = e[s];
    if (n.default && n.playlists) return Ce(n.playlists[0].attributes.CODECS);
  }
  return null;
}, wc = function(i) {
  return i === void 0 && (i = ""), Ii.audio.test(i.trim().toLowerCase());
}, P_ = function(i) {
  return i === void 0 && (i = ""), Ii.text.test(i.trim().toLowerCase());
}, on = function(i) {
  if (i && typeof i == "string") {
    var t = i.toLowerCase().split(",").map(function(n) {
      return Ec(n.trim());
    }), e = "video";
    t.length === 1 && wc(t[0]) ? e = "audio" : t.length === 1 && P_(t[0]) && (e = "application");
    var s = "mp4";
    return t.every(function(n) {
      return Ii.mp4.test(n);
    }) ? s = "mp4" : t.every(function(n) {
      return Ii.webm.test(n);
    }) ? s = "webm" : t.every(function(n) {
      return Ii.ogg.test(n);
    }) && (s = "ogg"), e + "/" + s + ';codecs="' + i + '"';
  }
}, ar = function(i) {
  return i === void 0 && (i = ""), E.MediaSource && E.MediaSource.isTypeSupported && E.MediaSource.isTypeSupported(on(i)) || !1;
}, Ba = function(i) {
  return i === void 0 && (i = ""), i.toLowerCase().split(",").every(function(t) {
    t = t.trim();
    for (var e = 0; e < lu.length; e++) {
      var s = lu[e];
      if (Ii["muxer" + s].test(t)) return !0;
    }
    return !1;
  });
}, hu = "mp4a.40.2", D_ = "avc1.4d400d", L_ = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i, O_ = /^application\/dash\+xml/i, Cc = function(i) {
  return L_.test(i) ? "hls" : O_.test(i) ? "dash" : i === "application/vnd.videojs.vhs+json" ? "vhs-json" : null;
}, N_ = function(i) {
  return i.toString(2).length;
}, R_ = function(i) {
  return Math.ceil(N_(i) / 8);
}, kc = function(i) {
  return ArrayBuffer.isView === "function" ? ArrayBuffer.isView(i) : i && i.buffer instanceof ArrayBuffer;
}, M_ = function(i) {
  return kc(i);
}, W = function(i) {
  return i instanceof Uint8Array ? i : (Array.isArray(i) || M_(i) || i instanceof ArrayBuffer || (i = typeof i != "number" || typeof i == "number" && i != i ? 0 : [i]), new Uint8Array(i && i.buffer || i, i && i.byteOffset || 0, i && i.byteLength || 0));
}, Ot = E.BigInt || Number, xo = [Ot("0x1"), Ot("0x100"), Ot("0x10000"), Ot("0x1000000"), Ot("0x100000000"), Ot("0x10000000000"), Ot("0x1000000000000"), Ot("0x100000000000000"), Ot("0x10000000000000000")];
Hn = new Uint16Array([65484]), (ou = new Uint8Array(Hn.buffer, Hn.byteOffset, Hn.byteLength))[0] === 255 || ou[0];
var U_ = function(i, t) {
  var e = t === void 0 ? {} : t, s = e.signed, n = s !== void 0 && s, r = e.le, a = r !== void 0 && r;
  i = W(i);
  var l = a ? "reduce" : "reduceRight", u = (i[l] ? i[l] : Array.prototype[l]).call(i, function(g, y, T) {
    var C = a ? T : Math.abs(T + 1 - i.length);
    return g + Ot(y) * xo[C];
  }, Ot(0));
  if (n) {
    var p = xo[i.length] / Ot(2) - Ot(1);
    (u = Ot(u)) > p && (u -= p, u -= p, u -= Ot(2));
  }
  return Number(u);
}, B_ = function(i, t) {
  var e = {}.le, s = e !== void 0 && e;
  (typeof i != "bigint" && typeof i != "number" || typeof i == "number" && i != i) && (i = 0), i = Ot(i);
  for (var n = R_(i), r = new Uint8Array(new ArrayBuffer(n)), a = 0; a < n; a++) {
    var l = s ? a : Math.abs(a + 1 - r.length);
    r[l] = Number(i / xo[a] & Ot(255)), i < 0 && (r[l] = Math.abs(~r[l]), r[l] -= a === 0 ? 1 : 2);
  }
  return r;
}, xc = function(i, t) {
  if (typeof i != "string" && i && typeof i.toString == "function" && (i = i.toString()), typeof i != "string") return new Uint8Array();
  t || (i = unescape(encodeURIComponent(i)));
  for (var e = new Uint8Array(i.length), s = 0; s < i.length; s++) e[s] = i.charCodeAt(s);
  return e;
}, F_ = function() {
  for (var i = arguments.length, t = new Array(i), e = 0; e < i; e++) t[e] = arguments[e];
  if (t = t.filter(function(a) {
    return a && (a.byteLength || a.length) && typeof a != "string";
  }), t.length <= 1) return W(t[0]);
  var s = t.reduce(function(a, l, u) {
    return a + (l.byteLength || l.length);
  }, 0), n = new Uint8Array(s), r = 0;
  return t.forEach(function(a) {
    a = W(a), n.set(a, r), r += a.byteLength;
  }), n;
}, gt = function(i, t, e) {
  var s = e === void 0 ? {} : e, n = s.offset, r = n === void 0 ? 0 : n, a = s.mask, l = a === void 0 ? [] : a;
  i = W(i);
  var u = (t = W(t)).every ? t.every : Array.prototype.every;
  return t.length && i.length - r >= t.length && u.call(t, function(p, g) {
    return p === (l[g] ? l[g] & i[r + g] : i[r + g]);
  });
}, q_ = function(i, t, e) {
  t.forEach(function(s) {
    for (var n in i.mediaGroups[s]) for (var r in i.mediaGroups[s][n]) {
      var a = i.mediaGroups[s][n][r];
      e(a, s, n, r);
    }
  });
}, j_ = function(i) {
  return E.atob ? E.atob(i) : Buffer.from(i, "base64").toString("binary");
};
function $_(i) {
  for (var t = j_(i), e = new Uint8Array(t.length), s = 0; s < t.length; s++) e[s] = t.charCodeAt(s);
  return e;
}
var ni = {}, He = {};
function H_(i, t, e) {
  if (e === void 0 && (e = Array.prototype), i && typeof e.find == "function") return e.find.call(i, t);
  for (var s = 0; s < i.length; s++) if (Object.prototype.hasOwnProperty.call(i, s)) {
    var n = i[s];
    if (t.call(void 0, n, s, i)) return n;
  }
}
function cl(i, t) {
  return t === void 0 && (t = Object), t && typeof t.freeze == "function" ? t.freeze(i) : i;
}
function V_(i, t) {
  if (i === null || typeof i != "object") throw new TypeError("target is not an object");
  for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
  return i;
}
var Ic = cl({ HTML: "text/html", isHTML: function(i) {
  return i === Ic.HTML;
}, XML_APPLICATION: "application/xml", XML_TEXT: "text/xml", XML_XHTML_APPLICATION: "application/xhtml+xml", XML_SVG_IMAGE: "image/svg+xml" }), Ac = cl({ HTML: "http://www.w3.org/1999/xhtml", isHTML: function(i) {
  return i === Ac.HTML;
}, SVG: "http://www.w3.org/2000/svg", XML: "http://www.w3.org/XML/1998/namespace", XMLNS: "http://www.w3.org/2000/xmlns/" });
He.assign = V_, He.find = H_, He.freeze = cl, He.MIME_TYPE = Ic, He.NAMESPACE = Ac;
var Pc = He, De = Pc.find, ln = Pc.NAMESPACE;
function z_(i) {
  return i !== "";
}
function W_(i) {
  return i ? i.split(/[\t\n\f\r ]+/).filter(z_) : [];
}
function G_(i, t) {
  return i.hasOwnProperty(t) || (i[t] = !0), i;
}
function uu(i) {
  if (!i) return [];
  var t = W_(i);
  return Object.keys(t.reduce(G_, {}));
}
function X_(i) {
  return function(t) {
    return i && i.indexOf(t) !== -1;
  };
}
function Js(i, t) {
  for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
}
function zt(i, t) {
  var e = i.prototype;
  if (!(e instanceof t)) {
    let s = function() {
    };
    s.prototype = t.prototype, Js(e, s = new s()), i.prototype = e = s;
  }
  e.constructor != i && (typeof i != "function" && console.error("unknown Class:" + i), e.constructor = i);
}
var Qt = {}, _e = Qt.ELEMENT_NODE = 1, es = Qt.ATTRIBUTE_NODE = 2, or = Qt.TEXT_NODE = 3, Dc = Qt.CDATA_SECTION_NODE = 4, Lc = Qt.ENTITY_REFERENCE_NODE = 5, K_ = Qt.ENTITY_NODE = 6, Oc = Qt.PROCESSING_INSTRUCTION_NODE = 7, Nc = Qt.COMMENT_NODE = 8, Rc = Qt.DOCUMENT_NODE = 9, Mc = Qt.DOCUMENT_TYPE_NODE = 10, Ge = Qt.DOCUMENT_FRAGMENT_NODE = 11, Y_ = Qt.NOTATION_NODE = 12, Rt = {}, Dt = {};
Rt.INDEX_SIZE_ERR = (Dt[1] = "Index size error", 1), Rt.DOMSTRING_SIZE_ERR = (Dt[2] = "DOMString size error", 2);
var Gt = Rt.HIERARCHY_REQUEST_ERR = (Dt[3] = "Hierarchy request error", 3);
Rt.WRONG_DOCUMENT_ERR = (Dt[4] = "Wrong document", 4), Rt.INVALID_CHARACTER_ERR = (Dt[5] = "Invalid character", 5), Rt.NO_DATA_ALLOWED_ERR = (Dt[6] = "No data allowed", 6), Rt.NO_MODIFICATION_ALLOWED_ERR = (Dt[7] = "No modification allowed", 7);
var Uc = Rt.NOT_FOUND_ERR = (Dt[8] = "Not found", 8);
Rt.NOT_SUPPORTED_ERR = (Dt[9] = "Not supported", 9);
var du = Rt.INUSE_ATTRIBUTE_ERR = (Dt[10] = "Attribute in use", 10);
function xt(i, t) {
  if (t instanceof Error) var e = t;
  else e = this, Error.call(this, Dt[i]), this.message = Dt[i], Error.captureStackTrace && Error.captureStackTrace(this, xt);
  return e.code = i, t && (this.message = this.message + ": " + t), e;
}
function je() {
}
function zi(i, t) {
  this._node = i, this._refresh = t, pl(this);
}
function pl(i) {
  var t = i._node._inc || i._node.ownerDocument._inc;
  if (i._inc !== t) {
    var e = i._refresh(i._node);
    if (Vc(i, "length", e.length), !i.$$length || e.length < i.$$length) for (var s = e.length; s in i; s++) Object.prototype.hasOwnProperty.call(i, s) && delete i[s];
    Js(e, i), i._inc = t;
  }
}
function lr() {
}
function Bc(i, t) {
  for (var e = i.length; e--; ) if (i[e] === t) return e;
}
function cu(i, t, e, s) {
  if (s ? t[Bc(t, s)] = e : t[t.length++] = e, i) {
    e.ownerElement = i;
    var n = i.ownerDocument;
    n && (s && jc(n, i, s), Q_(n, i, e));
  }
}
function pu(i, t, e) {
  var s = Bc(t, e);
  if (!(s >= 0)) throw new xt(Uc, new Error(i.tagName + "@" + e));
  for (var n = t.length - 1; s < n; ) t[s] = t[++s];
  if (t.length = n, i) {
    var r = i.ownerDocument;
    r && (jc(r, i, e), e.ownerElement = null);
  }
}
function Fc() {
}
function at() {
}
function qc(i) {
  return (i == "<" ? "&lt;" : i == ">" && "&gt;") || i == "&" && "&amp;" || i == '"' && "&quot;" || "&#" + i.charCodeAt() + ";";
}
function Ws(i, t) {
  if (t(i)) return !0;
  if (i = i.firstChild) do
    if (Ws(i, t)) return !0;
  while (i = i.nextSibling);
}
function Rs() {
  this.ownerDocument = this;
}
function Q_(i, t, e) {
  i && i._inc++, e.namespaceURI === ln.XMLNS && (t._nsMap[e.prefix ? e.localName : ""] = e.value);
}
function jc(i, t, e, s) {
  i && i._inc++, e.namespaceURI === ln.XMLNS && delete t._nsMap[e.prefix ? e.localName : ""];
}
function ml(i, t, e) {
  if (i && i._inc) {
    i._inc++;
    var s = t.childNodes;
    if (e) s[s.length++] = e;
    else {
      for (var n = t.firstChild, r = 0; n; ) s[r++] = n, n = n.nextSibling;
      s.length = r, delete s[s.length];
    }
  }
}
function mu(i, t) {
  var e = t.previousSibling, s = t.nextSibling;
  return e ? e.nextSibling = s : i.firstChild = s, s ? s.previousSibling = e : i.lastChild = e, t.parentNode = null, t.previousSibling = null, t.nextSibling = null, ml(i.ownerDocument, i), t;
}
function J_(i) {
  return i && (i.nodeType === at.DOCUMENT_NODE || i.nodeType === at.DOCUMENT_FRAGMENT_NODE || i.nodeType === at.ELEMENT_NODE);
}
function Z_(i) {
  return i && (Le(i) || gl(i) || Ke(i) || i.nodeType === at.DOCUMENT_FRAGMENT_NODE || i.nodeType === at.COMMENT_NODE || i.nodeType === at.PROCESSING_INSTRUCTION_NODE);
}
function Ke(i) {
  return i && i.nodeType === at.DOCUMENT_TYPE_NODE;
}
function Le(i) {
  return i && i.nodeType === at.ELEMENT_NODE;
}
function gl(i) {
  return i && i.nodeType === at.TEXT_NODE;
}
function gu(i, t) {
  var e = i.childNodes || [];
  if (De(e, Le) || Ke(t)) return !1;
  var s = De(e, Ke);
  return !(t && s && e.indexOf(s) > e.indexOf(t));
}
function fu(i, t) {
  var e = i.childNodes || [];
  function s(r) {
    return Le(r) && r !== t;
  }
  if (De(e, s)) return !1;
  var n = De(e, Ke);
  return !(t && n && e.indexOf(n) > e.indexOf(t));
}
function t0(i, t, e) {
  if (!J_(i)) throw new xt(Gt, "Unexpected parent node type " + i.nodeType);
  if (e && e.parentNode !== i) throw new xt(Uc, "child not in parent");
  if (!Z_(t) || Ke(t) && i.nodeType !== at.DOCUMENT_NODE) throw new xt(Gt, "Unexpected node type " + t.nodeType + " for parent node type " + i.nodeType);
}
function e0(i, t, e) {
  var s = i.childNodes || [], n = t.childNodes || [];
  if (t.nodeType === at.DOCUMENT_FRAGMENT_NODE) {
    var r = n.filter(Le);
    if (r.length > 1 || De(n, gl)) throw new xt(Gt, "More than one element or text in fragment");
    if (r.length === 1 && !gu(i, e)) throw new xt(Gt, "Element in fragment can not be inserted before doctype");
  }
  if (Le(t) && !gu(i, e)) throw new xt(Gt, "Only one element can be added and only after doctype");
  if (Ke(t)) {
    if (De(s, Ke)) throw new xt(Gt, "Only one doctype is allowed");
    var a = De(s, Le);
    if (e && s.indexOf(a) < s.indexOf(e)) throw new xt(Gt, "Doctype can only be inserted before an element");
    if (!e && a) throw new xt(Gt, "Doctype can not be appended since element is present");
  }
}
function yu(i, t, e) {
  var s = i.childNodes || [], n = t.childNodes || [];
  if (t.nodeType === at.DOCUMENT_FRAGMENT_NODE) {
    var r = n.filter(Le);
    if (r.length > 1 || De(n, gl)) throw new xt(Gt, "More than one element or text in fragment");
    if (r.length === 1 && !fu(i, e)) throw new xt(Gt, "Element in fragment can not be inserted before doctype");
  }
  if (Le(t) && !fu(i, e)) throw new xt(Gt, "Only one element can be added and only after doctype");
  if (Ke(t)) {
    if (De(s, function(u) {
      return Ke(u) && u !== e;
    })) throw new xt(Gt, "Only one doctype is allowed");
    var a = De(s, Le);
    if (e && s.indexOf(a) < s.indexOf(e)) throw new xt(Gt, "Doctype can only be inserted before an element");
  }
}
function Vn(i, t, e, s) {
  t0(i, t, e), i.nodeType === at.DOCUMENT_NODE && (s || e0)(i, t, e);
  var n = t.parentNode;
  if (n && n.removeChild(t), t.nodeType === Ge) {
    var r = t.firstChild;
    if (r == null) return t;
    var a = t.lastChild;
  } else r = a = t;
  var l = e ? e.previousSibling : i.lastChild;
  r.previousSibling = l, a.nextSibling = e, l ? l.nextSibling = r : i.firstChild = r, e == null ? i.lastChild = a : e.previousSibling = a;
  do
    r.parentNode = i;
  while (r !== a && (r = r.nextSibling));
  return ml(i.ownerDocument || i, i), t.nodeType == Ge && (t.firstChild = t.lastChild = null), t;
}
function i0(i, t) {
  return t.parentNode && t.parentNode.removeChild(t), t.parentNode = i, t.previousSibling = i.lastChild, t.nextSibling = null, t.previousSibling ? t.previousSibling.nextSibling = t : i.firstChild = t, i.lastChild = t, ml(i.ownerDocument, i, t), t;
}
function Si() {
  this._nsMap = {};
}
function zn() {
}
function Ms() {
}
function Fa() {
}
function qa() {
}
function ja() {
}
function hr() {
}
function _u() {
}
function vu() {
}
function $a() {
}
function Wn() {
}
function Ha() {
}
function $c() {
}
function bu(i, t) {
  var e = [], s = this.nodeType == 9 && this.documentElement || this, n = s.prefix, r = s.namespaceURI;
  if (r && n == null && (n = s.lookupPrefix(r)) == null) var a = [{ namespace: r, prefix: null }];
  return Xi(this, e, i, t, a), e.join("");
}
function Tu(i, t, e) {
  var s = i.prefix || "", n = i.namespaceURI;
  if (!n || s === "xml" && n === ln.XML || n === ln.XMLNS) return !1;
  for (var r = e.length; r--; ) {
    var a = e[r];
    if (a.prefix === s) return a.namespace !== n;
  }
  return !0;
}
function Va(i, t, e) {
  i.push(" ", t, '="', e.replace(/[<>&"\t\n\r]/g, qc), '"');
}
function Xi(i, t, e, s, n) {
  if (n || (n = []), s) {
    if (!(i = s(i))) return;
    if (typeof i == "string") return void t.push(i);
  }
  switch (i.nodeType) {
    case _e:
      var r = i.attributes, a = r.length, l = i.firstChild, u = i.tagName, p = u;
      if (!(e = ln.isHTML(i.namespaceURI) || e) && !i.prefix && i.namespaceURI) {
        for (var g, y = 0; y < r.length; y++) if (r.item(y).name === "xmlns") {
          g = r.item(y).value;
          break;
        }
        if (!g) {
          for (var T = n.length - 1; T >= 0; T--)
            if ((C = n[T]).prefix === "" && C.namespace === i.namespaceURI) {
              g = C.namespace;
              break;
            }
        }
        if (g !== i.namespaceURI) for (T = n.length - 1; T >= 0; T--) {
          var C;
          if ((C = n[T]).namespace === i.namespaceURI) {
            C.prefix && (p = C.prefix + ":" + u);
            break;
          }
        }
      }
      t.push("<", p);
      for (var _ = 0; _ < a; _++)
        (k = r.item(_)).prefix == "xmlns" ? n.push({ prefix: k.localName, namespace: k.value }) : k.nodeName == "xmlns" && n.push({ prefix: "", namespace: k.value });
      for (_ = 0; _ < a; _++) {
        var k, x, A;
        Tu(k = r.item(_), e, n) && (Va(t, (x = k.prefix || "") ? "xmlns:" + x : "xmlns", A = k.namespaceURI), n.push({ prefix: x, namespace: A })), Xi(k, t, e, s, n);
      }
      if (u === p && Tu(i, e, n) && (Va(t, (x = i.prefix || "") ? "xmlns:" + x : "xmlns", A = i.namespaceURI), n.push({ prefix: x, namespace: A })), l || e && !/^(?:meta|link|img|br|hr|input)$/i.test(u)) {
        if (t.push(">"), e && /^script$/i.test(u)) for (; l; ) l.data ? t.push(l.data) : Xi(l, t, e, s, n.slice()), l = l.nextSibling;
        else for (; l; ) Xi(l, t, e, s, n.slice()), l = l.nextSibling;
        t.push("</", p, ">");
      } else t.push("/>");
      return;
    case Rc:
    case Ge:
      for (l = i.firstChild; l; ) Xi(l, t, e, s, n.slice()), l = l.nextSibling;
      return;
    case es:
      return Va(t, i.name, i.value);
    case or:
      return t.push(i.data.replace(/[<&>]/g, qc));
    case Dc:
      return t.push("<![CDATA[", i.data, "]]>");
    case Nc:
      return t.push("<!--", i.data, "-->");
    case Mc:
      var I = i.publicId, O = i.systemId;
      if (t.push("<!DOCTYPE ", i.name), I) t.push(" PUBLIC ", I), O && O != "." && t.push(" ", O), t.push(">");
      else if (O && O != ".") t.push(" SYSTEM ", O, ">");
      else {
        var N = i.internalSubset;
        N && t.push(" [", N, "]"), t.push(">");
      }
      return;
    case Oc:
      return t.push("<?", i.target, " ", i.data, "?>");
    case Lc:
      return t.push("&", i.nodeName, ";");
    default:
      t.push("??", i.nodeName);
  }
}
function Hc(i, t, e) {
  var s;
  switch (t.nodeType) {
    case _e:
      (s = t.cloneNode(!1)).ownerDocument = i;
    case Ge:
      break;
    case es:
      e = !0;
  }
  if (s || (s = t.cloneNode(!1)), s.ownerDocument = i, s.parentNode = null, e) for (var n = t.firstChild; n; ) s.appendChild(Hc(i, n, e)), n = n.nextSibling;
  return s;
}
function Io(i, t, e) {
  var s = new t.constructor();
  for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
    var r = t[n];
    typeof r != "object" && r != s[n] && (s[n] = r);
  }
  switch (t.childNodes && (s.childNodes = new je()), s.ownerDocument = i, s.nodeType) {
    case _e:
      var a = t.attributes, l = s.attributes = new lr(), u = a.length;
      l._ownerElement = s;
      for (var p = 0; p < u; p++) s.setAttributeNode(Io(i, a.item(p), !0));
      break;
    case es:
      e = !0;
  }
  if (e) for (var g = t.firstChild; g; ) s.appendChild(Io(i, g, e)), g = g.nextSibling;
  return s;
}
function Vc(i, t, e) {
  i[t] = e;
}
Rt.INVALID_STATE_ERR = (Dt[11] = "Invalid state", 11), Rt.SYNTAX_ERR = (Dt[12] = "Syntax error", 12), Rt.INVALID_MODIFICATION_ERR = (Dt[13] = "Invalid modification", 13), Rt.NAMESPACE_ERR = (Dt[14] = "Invalid namespace", 14), Rt.INVALID_ACCESS_ERR = (Dt[15] = "Invalid access", 15), xt.prototype = Error.prototype, Js(Rt, xt), je.prototype = { length: 0, item: function(i) {
  return i >= 0 && i < this.length ? this[i] : null;
}, toString: function(i, t) {
  for (var e = [], s = 0; s < this.length; s++) Xi(this[s], e, i, t);
  return e.join("");
}, filter: function(i) {
  return Array.prototype.filter.call(this, i);
}, indexOf: function(i) {
  return Array.prototype.indexOf.call(this, i);
} }, zi.prototype.item = function(i) {
  return pl(this), this[i] || null;
}, zt(zi, je), lr.prototype = { length: 0, item: je.prototype.item, getNamedItem: function(i) {
  for (var t = this.length; t--; ) {
    var e = this[t];
    if (e.nodeName == i) return e;
  }
}, setNamedItem: function(i) {
  var t = i.ownerElement;
  if (t && t != this._ownerElement) throw new xt(du);
  var e = this.getNamedItem(i.nodeName);
  return cu(this._ownerElement, this, i, e), e;
}, setNamedItemNS: function(i) {
  var t, e = i.ownerElement;
  if (e && e != this._ownerElement) throw new xt(du);
  return t = this.getNamedItemNS(i.namespaceURI, i.localName), cu(this._ownerElement, this, i, t), t;
}, removeNamedItem: function(i) {
  var t = this.getNamedItem(i);
  return pu(this._ownerElement, this, t), t;
}, removeNamedItemNS: function(i, t) {
  var e = this.getNamedItemNS(i, t);
  return pu(this._ownerElement, this, e), e;
}, getNamedItemNS: function(i, t) {
  for (var e = this.length; e--; ) {
    var s = this[e];
    if (s.localName == t && s.namespaceURI == i) return s;
  }
  return null;
} }, Fc.prototype = { hasFeature: function(i, t) {
  return !0;
}, createDocument: function(i, t, e) {
  var s = new Rs();
  if (s.implementation = this, s.childNodes = new je(), s.doctype = e || null, e && s.appendChild(e), t) {
    var n = s.createElementNS(i, t);
    s.appendChild(n);
  }
  return s;
}, createDocumentType: function(i, t, e) {
  var s = new hr();
  return s.name = i, s.nodeName = i, s.publicId = t || "", s.systemId = e || "", s;
} }, at.prototype = { firstChild: null, lastChild: null, previousSibling: null, nextSibling: null, attributes: null, parentNode: null, childNodes: null, ownerDocument: null, nodeValue: null, namespaceURI: null, prefix: null, localName: null, insertBefore: function(i, t) {
  return Vn(this, i, t);
}, replaceChild: function(i, t) {
  Vn(this, i, t, yu), t && this.removeChild(t);
}, removeChild: function(i) {
  return mu(this, i);
}, appendChild: function(i) {
  return this.insertBefore(i, null);
}, hasChildNodes: function() {
  return this.firstChild != null;
}, cloneNode: function(i) {
  return Io(this.ownerDocument || this, this, i);
}, normalize: function() {
  for (var i = this.firstChild; i; ) {
    var t = i.nextSibling;
    t && t.nodeType == or && i.nodeType == or ? (this.removeChild(t), i.appendData(t.data)) : (i.normalize(), i = t);
  }
}, isSupported: function(i, t) {
  return this.ownerDocument.implementation.hasFeature(i, t);
}, hasAttributes: function() {
  return this.attributes.length > 0;
}, lookupPrefix: function(i) {
  for (var t = this; t; ) {
    var e = t._nsMap;
    if (e) {
      for (var s in e) if (Object.prototype.hasOwnProperty.call(e, s) && e[s] === i) return s;
    }
    t = t.nodeType == es ? t.ownerDocument : t.parentNode;
  }
  return null;
}, lookupNamespaceURI: function(i) {
  for (var t = this; t; ) {
    var e = t._nsMap;
    if (e && Object.prototype.hasOwnProperty.call(e, i)) return e[i];
    t = t.nodeType == es ? t.ownerDocument : t.parentNode;
  }
  return null;
}, isDefaultNamespace: function(i) {
  return this.lookupPrefix(i) == null;
} }, Js(Qt, at), Js(Qt, at.prototype), Rs.prototype = { nodeName: "#document", nodeType: Rc, doctype: null, documentElement: null, _inc: 1, insertBefore: function(i, t) {
  if (i.nodeType == Ge) {
    for (var e = i.firstChild; e; ) {
      var s = e.nextSibling;
      this.insertBefore(e, t), e = s;
    }
    return i;
  }
  return Vn(this, i, t), i.ownerDocument = this, this.documentElement === null && i.nodeType === _e && (this.documentElement = i), i;
}, removeChild: function(i) {
  return this.documentElement == i && (this.documentElement = null), mu(this, i);
}, replaceChild: function(i, t) {
  Vn(this, i, t, yu), i.ownerDocument = this, t && this.removeChild(t), Le(i) && (this.documentElement = i);
}, importNode: function(i, t) {
  return Hc(this, i, t);
}, getElementById: function(i) {
  var t = null;
  return Ws(this.documentElement, function(e) {
    if (e.nodeType == _e && e.getAttribute("id") == i) return t = e, !0;
  }), t;
}, getElementsByClassName: function(i) {
  var t = uu(i);
  return new zi(this, function(e) {
    var s = [];
    return t.length > 0 && Ws(e.documentElement, function(n) {
      if (n !== e && n.nodeType === _e) {
        var r = n.getAttribute("class");
        if (r) {
          var a = i === r;
          if (!a) {
            var l = uu(r);
            a = t.every(X_(l));
          }
          a && s.push(n);
        }
      }
    }), s;
  });
}, createElement: function(i) {
  var t = new Si();
  return t.ownerDocument = this, t.nodeName = i, t.tagName = i, t.localName = i, t.childNodes = new je(), (t.attributes = new lr())._ownerElement = t, t;
}, createDocumentFragment: function() {
  var i = new Wn();
  return i.ownerDocument = this, i.childNodes = new je(), i;
}, createTextNode: function(i) {
  var t = new Fa();
  return t.ownerDocument = this, t.appendData(i), t;
}, createComment: function(i) {
  var t = new qa();
  return t.ownerDocument = this, t.appendData(i), t;
}, createCDATASection: function(i) {
  var t = new ja();
  return t.ownerDocument = this, t.appendData(i), t;
}, createProcessingInstruction: function(i, t) {
  var e = new Ha();
  return e.ownerDocument = this, e.tagName = e.nodeName = e.target = i, e.nodeValue = e.data = t, e;
}, createAttribute: function(i) {
  var t = new zn();
  return t.ownerDocument = this, t.name = i, t.nodeName = i, t.localName = i, t.specified = !0, t;
}, createEntityReference: function(i) {
  var t = new $a();
  return t.ownerDocument = this, t.nodeName = i, t;
}, createElementNS: function(i, t) {
  var e = new Si(), s = t.split(":"), n = e.attributes = new lr();
  return e.childNodes = new je(), e.ownerDocument = this, e.nodeName = t, e.tagName = t, e.namespaceURI = i, s.length == 2 ? (e.prefix = s[0], e.localName = s[1]) : e.localName = t, n._ownerElement = e, e;
}, createAttributeNS: function(i, t) {
  var e = new zn(), s = t.split(":");
  return e.ownerDocument = this, e.nodeName = t, e.name = t, e.namespaceURI = i, e.specified = !0, s.length == 2 ? (e.prefix = s[0], e.localName = s[1]) : e.localName = t, e;
} }, zt(Rs, at), Si.prototype = { nodeType: _e, hasAttribute: function(i) {
  return this.getAttributeNode(i) != null;
}, getAttribute: function(i) {
  var t = this.getAttributeNode(i);
  return t && t.value || "";
}, getAttributeNode: function(i) {
  return this.attributes.getNamedItem(i);
}, setAttribute: function(i, t) {
  var e = this.ownerDocument.createAttribute(i);
  e.value = e.nodeValue = "" + t, this.setAttributeNode(e);
}, removeAttribute: function(i) {
  var t = this.getAttributeNode(i);
  t && this.removeAttributeNode(t);
}, appendChild: function(i) {
  return i.nodeType === Ge ? this.insertBefore(i, null) : i0(this, i);
}, setAttributeNode: function(i) {
  return this.attributes.setNamedItem(i);
}, setAttributeNodeNS: function(i) {
  return this.attributes.setNamedItemNS(i);
}, removeAttributeNode: function(i) {
  return this.attributes.removeNamedItem(i.nodeName);
}, removeAttributeNS: function(i, t) {
  var e = this.getAttributeNodeNS(i, t);
  e && this.removeAttributeNode(e);
}, hasAttributeNS: function(i, t) {
  return this.getAttributeNodeNS(i, t) != null;
}, getAttributeNS: function(i, t) {
  var e = this.getAttributeNodeNS(i, t);
  return e && e.value || "";
}, setAttributeNS: function(i, t, e) {
  var s = this.ownerDocument.createAttributeNS(i, t);
  s.value = s.nodeValue = "" + e, this.setAttributeNode(s);
}, getAttributeNodeNS: function(i, t) {
  return this.attributes.getNamedItemNS(i, t);
}, getElementsByTagName: function(i) {
  return new zi(this, function(t) {
    var e = [];
    return Ws(t, function(s) {
      s === t || s.nodeType != _e || i !== "*" && s.tagName != i || e.push(s);
    }), e;
  });
}, getElementsByTagNameNS: function(i, t) {
  return new zi(this, function(e) {
    var s = [];
    return Ws(e, function(n) {
      n === e || n.nodeType !== _e || i !== "*" && n.namespaceURI !== i || t !== "*" && n.localName != t || s.push(n);
    }), s;
  });
} }, Rs.prototype.getElementsByTagName = Si.prototype.getElementsByTagName, Rs.prototype.getElementsByTagNameNS = Si.prototype.getElementsByTagNameNS, zt(Si, at), zn.prototype.nodeType = es, zt(zn, at), Ms.prototype = { data: "", substringData: function(i, t) {
  return this.data.substring(i, i + t);
}, appendData: function(i) {
  i = this.data + i, this.nodeValue = this.data = i, this.length = i.length;
}, insertData: function(i, t) {
  this.replaceData(i, 0, t);
}, appendChild: function(i) {
  throw new Error(Dt[Gt]);
}, deleteData: function(i, t) {
  this.replaceData(i, t, "");
}, replaceData: function(i, t, e) {
  e = this.data.substring(0, i) + e + this.data.substring(i + t), this.nodeValue = this.data = e, this.length = e.length;
} }, zt(Ms, at), Fa.prototype = { nodeName: "#text", nodeType: or, splitText: function(i) {
  var t = this.data, e = t.substring(i);
  t = t.substring(0, i), this.data = this.nodeValue = t, this.length = t.length;
  var s = this.ownerDocument.createTextNode(e);
  return this.parentNode && this.parentNode.insertBefore(s, this.nextSibling), s;
} }, zt(Fa, Ms), qa.prototype = { nodeName: "#comment", nodeType: Nc }, zt(qa, Ms), ja.prototype = { nodeName: "#cdata-section", nodeType: Dc }, zt(ja, Ms), hr.prototype.nodeType = Mc, zt(hr, at), _u.prototype.nodeType = Y_, zt(_u, at), vu.prototype.nodeType = K_, zt(vu, at), $a.prototype.nodeType = Lc, zt($a, at), Wn.prototype.nodeName = "#document-fragment", Wn.prototype.nodeType = Ge, zt(Wn, at), Ha.prototype.nodeType = Oc, zt(Ha, at), $c.prototype.serializeToString = function(i, t, e) {
  return bu.call(i, t, e);
}, at.prototype.toString = bu;
try {
  if (Object.defineProperty) {
    let i = function(t) {
      switch (t.nodeType) {
        case _e:
        case Ge:
          var e = [];
          for (t = t.firstChild; t; ) t.nodeType !== 7 && t.nodeType !== 8 && e.push(i(t)), t = t.nextSibling;
          return e.join("");
        default:
          return t.nodeValue;
      }
    };
    Object.defineProperty(zi.prototype, "length", { get: function() {
      return pl(this), this.$$length;
    } }), Object.defineProperty(at.prototype, "textContent", { get: function() {
      return i(this);
    }, set: function(t) {
      switch (this.nodeType) {
        case _e:
        case Ge:
          for (; this.firstChild; ) this.removeChild(this.firstChild);
          (t || String(t)) && this.appendChild(this.ownerDocument.createTextNode(t));
          break;
        default:
          this.data = t, this.value = t, this.nodeValue = t;
      }
    } }), Vc = function(t, e, s) {
      t["$$" + e] = s;
    };
  }
} catch {
}
ni.DocumentType = hr, ni.DOMException = xt, ni.DOMImplementation = Fc, ni.Element = Si, ni.Node = at, ni.NodeList = je, ni.XMLSerializer = $c;
var ur = {}, zc = {};
(function(i) {
  var t = He.freeze;
  i.XML_ENTITIES = t({ amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' }), i.HTML_ENTITIES = t({ Aacute: "Á", aacute: "á", Abreve: "Ă", abreve: "ă", ac: "∾", acd: "∿", acE: "∾̳", Acirc: "Â", acirc: "â", acute: "´", Acy: "А", acy: "а", AElig: "Æ", aelig: "æ", af: "⁡", Afr: "𝔄", afr: "𝔞", Agrave: "À", agrave: "à", alefsym: "ℵ", aleph: "ℵ", Alpha: "Α", alpha: "α", Amacr: "Ā", amacr: "ā", amalg: "⨿", AMP: "&", amp: "&", And: "⩓", and: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", Aogon: "Ą", aogon: "ą", Aopf: "𝔸", aopf: "𝕒", ap: "≈", apacir: "⩯", apE: "⩰", ape: "≊", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", Aring: "Å", aring: "å", Ascr: "𝒜", ascr: "𝒶", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", Barwed: "⌆", barwed: "⌅", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", Bcy: "Б", bcy: "б", bdquo: "„", becaus: "∵", Because: "∵", because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", Beta: "Β", beta: "β", beth: "ℶ", between: "≬", Bfr: "𝔅", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bNot: "⫭", bnot: "⌐", Bopf: "𝔹", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxDL: "╗", boxDl: "╖", boxdL: "╕", boxdl: "┐", boxDR: "╔", boxDr: "╓", boxdR: "╒", boxdr: "┌", boxH: "═", boxh: "─", boxHD: "╦", boxHd: "╤", boxhD: "╥", boxhd: "┬", boxHU: "╩", boxHu: "╧", boxhU: "╨", boxhu: "┴", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxUL: "╝", boxUl: "╜", boxuL: "╛", boxul: "┘", boxUR: "╚", boxUr: "╙", boxuR: "╘", boxur: "└", boxV: "║", boxv: "│", boxVH: "╬", boxVh: "╫", boxvH: "╪", boxvh: "┼", boxVL: "╣", boxVl: "╢", boxvL: "╡", boxvl: "┤", boxVR: "╠", boxVr: "╟", boxvR: "╞", boxvr: "├", bprime: "‵", Breve: "˘", breve: "˘", brvbar: "¦", Bscr: "ℬ", bscr: "𝒷", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", Bumpeq: "≎", bumpeq: "≏", Cacute: "Ć", cacute: "ć", Cap: "⋒", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", Ccaron: "Č", ccaron: "č", Ccedil: "Ç", ccedil: "ç", Ccirc: "Ĉ", ccirc: "ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", Cdot: "Ċ", cdot: "ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", CenterDot: "·", centerdot: "·", Cfr: "ℭ", cfr: "𝔠", CHcy: "Ч", chcy: "ч", check: "✓", checkmark: "✓", Chi: "Χ", chi: "χ", cir: "○", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cirE: "⧃", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", Colon: "∷", colon: ":", Colone: "⩴", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", Conint: "∯", conint: "∮", ContourIntegral: "∮", Copf: "ℂ", copf: "𝕔", coprod: "∐", Coproduct: "∐", COPY: "©", copy: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", Cross: "⨯", cross: "✗", Cscr: "𝒞", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", Cup: "⋓", cup: "∪", cupbrcap: "⩈", CupCap: "≍", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", Dagger: "‡", dagger: "†", daleth: "ℸ", Darr: "↡", dArr: "⇓", darr: "↓", dash: "‐", Dashv: "⫤", dashv: "⊣", dbkarow: "⤏", dblac: "˝", Dcaron: "Ď", dcaron: "ď", Dcy: "Д", dcy: "д", DD: "ⅅ", dd: "ⅆ", ddagger: "‡", ddarr: "⇊", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", Delta: "Δ", delta: "δ", demptyv: "⦱", dfisht: "⥿", Dfr: "𝔇", dfr: "𝔡", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", Diamond: "⋄", diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", DJcy: "Ђ", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", Dopf: "𝔻", dopf: "𝕕", Dot: "¨", dot: "˙", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrow: "↓", Downarrow: "⇓", downarrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", Dscr: "𝒟", dscr: "𝒹", DScy: "Ѕ", dscy: "ѕ", dsol: "⧶", Dstrok: "Đ", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", DZcy: "Џ", dzcy: "џ", dzigrarr: "⟿", Eacute: "É", eacute: "é", easter: "⩮", Ecaron: "Ě", ecaron: "ě", ecir: "≖", Ecirc: "Ê", ecirc: "ê", ecolon: "≕", Ecy: "Э", ecy: "э", eDDot: "⩷", Edot: "Ė", eDot: "≑", edot: "ė", ee: "ⅇ", efDot: "≒", Efr: "𝔈", efr: "𝔢", eg: "⪚", Egrave: "È", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", Emacr: "Ē", emacr: "ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp: " ", emsp13: " ", emsp14: " ", ENG: "Ŋ", eng: "ŋ", ensp: " ", Eogon: "Ę", eogon: "ę", Eopf: "𝔼", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", Epsilon: "Ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", Escr: "ℰ", escr: "ℯ", esdot: "≐", Esim: "⩳", esim: "≂", Eta: "Η", eta: "η", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", ExponentialE: "ⅇ", exponentiale: "ⅇ", fallingdotseq: "≒", Fcy: "Ф", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", Ffr: "𝔉", ffr: "𝔣", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", Fopf: "𝔽", fopf: "𝕗", ForAll: "∀", forall: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", Fscr: "ℱ", fscr: "𝒻", gacute: "ǵ", Gamma: "Γ", gamma: "γ", Gammad: "Ϝ", gammad: "ϝ", gap: "⪆", Gbreve: "Ğ", gbreve: "ğ", Gcedil: "Ģ", Gcirc: "Ĝ", gcirc: "ĝ", Gcy: "Г", gcy: "г", Gdot: "Ġ", gdot: "ġ", gE: "≧", ge: "≥", gEl: "⪌", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", Gfr: "𝔊", gfr: "𝔤", Gg: "⋙", gg: "≫", ggg: "⋙", gimel: "ℷ", GJcy: "Ѓ", gjcy: "ѓ", gl: "≷", gla: "⪥", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gnE: "≩", gne: "⪈", gneq: "⪈", gneqq: "≩", gnsim: "⋧", Gopf: "𝔾", gopf: "𝕘", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", Gt: "≫", GT: ">", gt: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", HARDcy: "Ъ", hardcy: "ъ", hArr: "⇔", harr: "↔", harrcir: "⥈", harrw: "↭", Hat: "^", hbar: "ℏ", Hcirc: "Ĥ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", Hfr: "ℌ", hfr: "𝔥", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", Hopf: "ℍ", hopf: "𝕙", horbar: "―", HorizontalLine: "─", Hscr: "ℋ", hscr: "𝒽", hslash: "ℏ", Hstrok: "Ħ", hstrok: "ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", Iacute: "Í", iacute: "í", ic: "⁣", Icirc: "Î", icirc: "î", Icy: "И", icy: "и", Idot: "İ", IEcy: "Е", iecy: "е", iexcl: "¡", iff: "⇔", Ifr: "ℑ", ifr: "𝔦", Igrave: "Ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", IJlig: "Ĳ", ijlig: "ĳ", Im: "ℑ", Imacr: "Ī", imacr: "ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", Implies: "⇒", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", Int: "∬", int: "∫", intcal: "⊺", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", IOcy: "Ё", iocy: "ё", Iogon: "Į", iogon: "į", Iopf: "𝕀", iopf: "𝕚", Iota: "Ι", iota: "ι", iprod: "⨼", iquest: "¿", Iscr: "ℐ", iscr: "𝒾", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", Itilde: "Ĩ", itilde: "ĩ", Iukcy: "І", iukcy: "і", Iuml: "Ï", iuml: "ï", Jcirc: "Ĵ", jcirc: "ĵ", Jcy: "Й", jcy: "й", Jfr: "𝔍", jfr: "𝔧", jmath: "ȷ", Jopf: "𝕁", jopf: "𝕛", Jscr: "𝒥", jscr: "𝒿", Jsercy: "Ј", jsercy: "ј", Jukcy: "Є", jukcy: "є", Kappa: "Κ", kappa: "κ", kappav: "ϰ", Kcedil: "Ķ", kcedil: "ķ", Kcy: "К", kcy: "к", Kfr: "𝔎", kfr: "𝔨", kgreen: "ĸ", KHcy: "Х", khcy: "х", KJcy: "Ќ", kjcy: "ќ", Kopf: "𝕂", kopf: "𝕜", Kscr: "𝒦", kscr: "𝓀", lAarr: "⇚", Lacute: "Ĺ", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", Lambda: "Λ", lambda: "λ", Lang: "⟪", lang: "⟨", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", Larr: "↞", lArr: "⇐", larr: "←", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", lAtail: "⤛", latail: "⤙", late: "⪭", lates: "⪭︀", lBarr: "⤎", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", Lcaron: "Ľ", lcaron: "ľ", Lcedil: "Ļ", lcedil: "ļ", lceil: "⌈", lcub: "{", Lcy: "Л", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", lE: "≦", le: "≤", LeftAngleBracket: "⟨", LeftArrow: "←", Leftarrow: "⇐", leftarrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", LeftRightArrow: "↔", Leftrightarrow: "⇔", leftrightarrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", lEg: "⪋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", Lfr: "𝔏", lfr: "𝔩", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", LJcy: "Љ", ljcy: "љ", Ll: "⋘", ll: "≪", llarr: "⇇", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", Lmidot: "Ŀ", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnap: "⪉", lnapprox: "⪉", lnE: "≨", lne: "⪇", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", LongLeftArrow: "⟵", Longleftarrow: "⟸", longleftarrow: "⟵", LongLeftRightArrow: "⟷", Longleftrightarrow: "⟺", longleftrightarrow: "⟷", longmapsto: "⟼", LongRightArrow: "⟶", Longrightarrow: "⟹", longrightarrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", Lopf: "𝕃", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", Lscr: "ℒ", lscr: "𝓁", Lsh: "↰", lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", Lstrok: "Ł", lstrok: "ł", Lt: "≪", LT: "<", lt: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", Map: "⤅", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", Mcy: "М", mcy: "м", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", mfr: "𝔪", mho: "℧", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", Mopf: "𝕄", mopf: "𝕞", mp: "∓", Mscr: "ℳ", mscr: "𝓂", mstpos: "∾", Mu: "Μ", mu: "μ", multimap: "⊸", mumap: "⊸", nabla: "∇", Nacute: "Ń", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", Ncaron: "Ň", ncaron: "ň", Ncedil: "Ņ", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", Ncy: "Н", ncy: "н", ndash: "–", ne: "≠", nearhk: "⤤", neArr: "⇗", nearr: "↗", nearrow: "↗", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, nexist: "∄", nexists: "∄", Nfr: "𝔑", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", nGt: "≫⃒", ngt: "≯", ngtr: "≯", nGtv: "≫̸", nhArr: "⇎", nharr: "↮", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", NJcy: "Њ", njcy: "њ", nlArr: "⇍", nlarr: "↚", nldr: "‥", nlE: "≦̸", nle: "≰", nLeftarrow: "⇍", nleftarrow: "↚", nLeftrightarrow: "⇎", nleftrightarrow: "↮", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nLt: "≪⃒", nlt: "≮", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", Nopf: "ℕ", nopf: "𝕟", Not: "⫬", not: "¬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrArr: "⇏", nrarr: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nRightarrow: "⇏", nrightarrow: "↛", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", Nscr: "𝒩", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", Ntilde: "Ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", Nu: "Ν", nu: "ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nVDash: "⊯", nVdash: "⊮", nvDash: "⊭", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwArr: "⇖", nwarr: "↖", nwarrow: "↖", nwnear: "⤧", Oacute: "Ó", oacute: "ó", oast: "⊛", ocir: "⊚", Ocirc: "Ô", ocirc: "ô", Ocy: "О", ocy: "о", odash: "⊝", Odblac: "Ő", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", OElig: "Œ", oelig: "œ", ofcir: "⦿", Ofr: "𝔒", ofr: "𝔬", ogon: "˛", Ograve: "Ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", Omacr: "Ō", omacr: "ō", Omega: "Ω", omega: "ω", Omicron: "Ο", omicron: "ο", omid: "⦶", ominus: "⊖", Oopf: "𝕆", oopf: "𝕠", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", Or: "⩔", or: "∨", orarr: "↻", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", Oscr: "𝒪", oscr: "ℴ", Oslash: "Ø", oslash: "ø", osol: "⊘", Otilde: "Õ", otilde: "õ", Otimes: "⨷", otimes: "⊗", otimesas: "⨶", Ouml: "Ö", ouml: "ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", par: "∥", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", Pcy: "П", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", Pfr: "𝔓", pfr: "𝔭", Phi: "Φ", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", Pi: "Π", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", Popf: "ℙ", popf: "𝕡", pound: "£", Pr: "⪻", pr: "≺", prap: "⪷", prcue: "≼", prE: "⪳", pre: "⪯", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", Prime: "″", prime: "′", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportion: "∷", Proportional: "∝", propto: "∝", prsim: "≾", prurel: "⊰", Pscr: "𝒫", pscr: "𝓅", Psi: "Ψ", psi: "ψ", puncsp: " ", Qfr: "𝔔", qfr: "𝔮", qint: "⨌", Qopf: "ℚ", qopf: "𝕢", qprime: "⁗", Qscr: "𝒬", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", QUOT: '"', quot: '"', rAarr: "⇛", race: "∽̱", Racute: "Ŕ", racute: "ŕ", radic: "√", raemptyv: "⦳", Rang: "⟫", rang: "⟩", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", Rarr: "↠", rArr: "⇒", rarr: "→", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", Rarrtl: "⤖", rarrtl: "↣", rarrw: "↝", rAtail: "⤜", ratail: "⤚", ratio: "∶", rationals: "ℚ", RBarr: "⤐", rBarr: "⤏", rbarr: "⤍", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", Rcaron: "Ř", rcaron: "ř", Rcedil: "Ŗ", rcedil: "ŗ", rceil: "⌉", rcub: "}", Rcy: "Р", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", Re: "ℜ", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", REG: "®", reg: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", Rfr: "ℜ", rfr: "𝔯", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", Rho: "Ρ", rho: "ρ", rhov: "ϱ", RightAngleBracket: "⟩", RightArrow: "→", Rightarrow: "⇒", rightarrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", Ropf: "ℝ", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", Rscr: "ℛ", rscr: "𝓇", Rsh: "↱", rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", Sacute: "Ś", sacute: "ś", sbquo: "‚", Sc: "⪼", sc: "≻", scap: "⪸", Scaron: "Š", scaron: "š", sccue: "≽", scE: "⪴", sce: "⪰", Scedil: "Ş", scedil: "ş", Scirc: "Ŝ", scirc: "ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", Scy: "С", scy: "с", sdot: "⋅", sdotb: "⊡", sdote: "⩦", searhk: "⤥", seArr: "⇘", searr: "↘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", Sfr: "𝔖", sfr: "𝔰", sfrown: "⌢", sharp: "♯", SHCHcy: "Щ", shchcy: "щ", SHcy: "Ш", shcy: "ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", Sigma: "Σ", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", SOFTcy: "Ь", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", Sopf: "𝕊", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", Square: "□", square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squf: "▪", srarr: "→", Sscr: "𝒮", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", Star: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", Sub: "⋐", sub: "⊂", subdot: "⪽", subE: "⫅", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", Subset: "⋐", subset: "⊂", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", Sum: "∑", sum: "∑", sung: "♪", Sup: "⋑", sup: "⊃", sup1: "¹", sup2: "²", sup3: "³", supdot: "⪾", supdsub: "⫘", supE: "⫆", supe: "⊇", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", Supset: "⋑", supset: "⊃", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swArr: "⇙", swarr: "↙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", Tau: "Τ", tau: "τ", tbrk: "⎴", Tcaron: "Ť", tcaron: "ť", Tcedil: "Ţ", tcedil: "ţ", Tcy: "Т", tcy: "т", tdot: "⃛", telrec: "⌕", Tfr: "𝔗", tfr: "𝔱", there4: "∴", Therefore: "∴", therefore: "∴", Theta: "Θ", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", thinsp: " ", ThinSpace: " ", thkap: "≈", thksim: "∼", THORN: "Þ", thorn: "þ", Tilde: "∼", tilde: "˜", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", Topf: "𝕋", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", TRADE: "™", trade: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", Tscr: "𝒯", tscr: "𝓉", TScy: "Ц", tscy: "ц", TSHcy: "Ћ", tshcy: "ћ", Tstrok: "Ŧ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", Uacute: "Ú", uacute: "ú", Uarr: "↟", uArr: "⇑", uarr: "↑", Uarrocir: "⥉", Ubrcy: "Ў", ubrcy: "ў", Ubreve: "Ŭ", ubreve: "ŭ", Ucirc: "Û", ucirc: "û", Ucy: "У", ucy: "у", udarr: "⇅", Udblac: "Ű", udblac: "ű", udhar: "⥮", ufisht: "⥾", Ufr: "𝔘", ufr: "𝔲", Ugrave: "Ù", ugrave: "ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", Umacr: "Ū", umacr: "ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", uogon: "ų", Uopf: "𝕌", uopf: "𝕦", UpArrow: "↑", Uparrow: "⇑", uparrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", UpDownArrow: "↕", Updownarrow: "⇕", updownarrow: "↕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", Upsi: "ϒ", upsi: "υ", upsih: "ϒ", Upsilon: "Υ", upsilon: "υ", UpTee: "⊥", UpTeeArrow: "↥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", Uring: "Ů", uring: "ů", urtri: "◹", Uscr: "𝒰", uscr: "𝓊", utdot: "⋰", Utilde: "Ũ", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", Uuml: "Ü", uuml: "ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", vArr: "⇕", varr: "↕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", Vbar: "⫫", vBar: "⫨", vBarv: "⫩", Vcy: "В", vcy: "в", VDash: "⊫", Vdash: "⊩", vDash: "⊨", vdash: "⊢", Vdashl: "⫦", Vee: "⋁", vee: "∨", veebar: "⊻", veeeq: "≚", vellip: "⋮", Verbar: "‖", verbar: "|", Vert: "‖", vert: "|", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", Vopf: "𝕍", vopf: "𝕧", vprop: "∝", vrtri: "⊳", Vscr: "𝒱", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", Vvdash: "⊪", vzigzag: "⦚", Wcirc: "Ŵ", wcirc: "ŵ", wedbar: "⩟", Wedge: "⋀", wedge: "∧", wedgeq: "≙", weierp: "℘", Wfr: "𝔚", wfr: "𝔴", Wopf: "𝕎", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", Wscr: "𝒲", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", Xfr: "𝔛", xfr: "𝔵", xhArr: "⟺", xharr: "⟷", Xi: "Ξ", xi: "ξ", xlArr: "⟸", xlarr: "⟵", xmap: "⟼", xnis: "⋻", xodot: "⨀", Xopf: "𝕏", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrArr: "⟹", xrarr: "⟶", Xscr: "𝒳", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", Yacute: "Ý", yacute: "ý", YAcy: "Я", yacy: "я", Ycirc: "Ŷ", ycirc: "ŷ", Ycy: "Ы", ycy: "ы", yen: "¥", Yfr: "𝔜", yfr: "𝔶", YIcy: "Ї", yicy: "ї", Yopf: "𝕐", yopf: "𝕪", Yscr: "𝒴", yscr: "𝓎", YUcy: "Ю", yucy: "ю", Yuml: "Ÿ", yuml: "ÿ", Zacute: "Ź", zacute: "ź", Zcaron: "Ž", zcaron: "ž", Zcy: "З", zcy: "з", Zdot: "Ż", zdot: "ż", zeetrf: "ℨ", ZeroWidthSpace: "​", Zeta: "Ζ", zeta: "ζ", Zfr: "ℨ", zfr: "𝔷", ZHcy: "Ж", zhcy: "ж", zigrarr: "⇝", Zopf: "ℤ", zopf: "𝕫", Zscr: "𝒵", zscr: "𝓏", zwj: "‍", zwnj: "‌" }), i.entityMap = i.HTML_ENTITIES;
})(zc);
var Ao = {}, hn = He.NAMESPACE, Po = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Su = new RegExp("[\\-\\.0-9" + Po.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), Eu = new RegExp("^" + Po.source + Su.source + "*(?::" + Po.source + Su.source + "*)?$"), Us = 0, ti = 1, Bi = 2, Bs = 3, Fi = 4, qi = 5, Fs = 6, Gn = 7;
function Ki(i, t) {
  this.message = i, this.locator = t, Error.captureStackTrace && Error.captureStackTrace(this, Ki);
}
function wu() {
}
function s0(i, t, e, s, n) {
  function r(it) {
    if (it > 65535) {
      var wt = 55296 + ((it -= 65536) >> 10), ce = 56320 + (1023 & it);
      return String.fromCharCode(wt, ce);
    }
    return String.fromCharCode(it);
  }
  function a(it) {
    var wt = it.slice(1, -1);
    return Object.hasOwnProperty.call(e, wt) ? e[wt] : wt.charAt(0) === "#" ? r(parseInt(wt.substr(1).replace("x", "0x"))) : (n.error("entity not found:" + it), it);
  }
  function l(it) {
    if (it > k) {
      var wt = i.substring(k, it).replace(/&#?\w+;/g, a);
      T && u(k), s.characters(wt, 0, it - k), k = it;
    }
  }
  function u(it, wt) {
    for (; it >= g && (wt = y.exec(i)); ) p = wt.index, g = p + wt[0].length, T.lineNumber++;
    T.columnNumber = it - p + 1;
  }
  for (var p = 0, g = 0, y = /.*(?:\r\n?|\n)|.*$/g, T = s.locator, C = [{ currentNSMap: t }], _ = {}, k = 0; ; ) {
    try {
      var x = i.indexOf("<", k);
      if (x < 0) {
        if (!i.substr(k).match(/^\s*$/)) {
          var A = s.doc, I = A.createTextNode(i.substr(k));
          A.appendChild(I), s.currentElement = I;
        }
        return;
      }
      switch (x > k && l(x), i.charAt(x + 1)) {
        case "/":
          var O = i.indexOf(">", x + 3), N = i.substring(x + 2, O).replace(/[ \t\n\r]+$/g, ""), P = C.pop();
          O < 0 ? (N = i.substring(x + 2).replace(/[\s<].*/, ""), n.error("end tag name: " + N + " is not complete:" + P.tagName), O = x + 1 + N.length) : N.match(/\s</) && (N = N.replace(/[\s<].*/, ""), n.error("end tag name: " + N + " maybe not complete"), O = x + 1 + N.length);
          var j = P.localNSMap, V = P.tagName == N;
          if (V || P.tagName && P.tagName.toLowerCase() == N.toLowerCase()) {
            if (s.endElement(P.uri, P.localName, N), j) for (var bt in j) Object.prototype.hasOwnProperty.call(j, bt) && s.endPrefixMapping(bt);
            V || n.fatalError("end tag name: " + N + " is not match the current start tagName:" + P.tagName);
          } else C.push(P);
          O++;
          break;
        case "?":
          T && u(x), O = l0(i, x, s);
          break;
        case "!":
          T && u(x), O = o0(i, x, s, n);
          break;
        default:
          T && u(x);
          var Z = new Gc(), Tt = C[C.length - 1].currentNSMap, ot = (O = n0(i, x, Z, Tt, a, n), Z.length);
          if (!Z.closed && a0(i, O, Z.tagName, _) && (Z.closed = !0, e.nbsp || n.warning("unclosed xml attribute")), T && ot) {
            for (var St = Cu(T, {}), et = 0; et < ot; et++) {
              var Zt = Z[et];
              u(Zt.offset), Zt.locator = Cu(T, {});
            }
            s.locator = St, ku(Z, s, Tt) && C.push(Z), s.locator = T;
          } else ku(Z, s, Tt) && C.push(Z);
          hn.isHTML(Z.uri) && !Z.closed ? O = r0(i, O, Z.tagName, a, s) : O++;
      }
    } catch (it) {
      if (it instanceof Ki) throw it;
      n.error("element parse error: " + it), O = -1;
    }
    O > k ? k = O : l(Math.max(x, k) + 1);
  }
}
function Cu(i, t) {
  return t.lineNumber = i.lineNumber, t.columnNumber = i.columnNumber, t;
}
function n0(i, t, e, s, n, r) {
  function a(T, C, _) {
    e.attributeNames.hasOwnProperty(T) && r.fatalError("Attribute " + T + " redefined"), e.addValue(T, C.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, n), _);
  }
  for (var l, u = ++t, p = Us; ; ) {
    var g = i.charAt(u);
    switch (g) {
      case "=":
        if (p === ti) l = i.slice(t, u), p = Bs;
        else {
          if (p !== Bi) throw new Error("attribute equal must after attrName");
          p = Bs;
        }
        break;
      case "'":
      case '"':
        if (p === Bs || p === ti) {
          if (p === ti && (r.warning('attribute value must after "="'), l = i.slice(t, u)), t = u + 1, !((u = i.indexOf(g, t)) > 0)) throw new Error("attribute value no end '" + g + "' match");
          a(l, y = i.slice(t, u), t - 1), p = qi;
        } else {
          if (p != Fi) throw new Error('attribute value must after "="');
          a(l, y = i.slice(t, u), t), r.warning('attribute "' + l + '" missed start quot(' + g + ")!!"), t = u + 1, p = qi;
        }
        break;
      case "/":
        switch (p) {
          case Us:
            e.setTagName(i.slice(t, u));
          case qi:
          case Fs:
          case Gn:
            p = Gn, e.closed = !0;
          case Fi:
          case ti:
            break;
          case Bi:
            e.closed = !0;
            break;
          default:
            throw new Error("attribute invalid close char('/')");
        }
        break;
      case "":
        return r.error("unexpected end of input"), p == Us && e.setTagName(i.slice(t, u)), u;
      case ">":
        switch (p) {
          case Us:
            e.setTagName(i.slice(t, u));
          case qi:
          case Fs:
          case Gn:
            break;
          case Fi:
          case ti:
            (y = i.slice(t, u)).slice(-1) === "/" && (e.closed = !0, y = y.slice(0, -1));
          case Bi:
            p === Bi && (y = l), p == Fi ? (r.warning('attribute "' + y + '" missed quot(")!'), a(l, y, t)) : (hn.isHTML(s[""]) && y.match(/^(?:disabled|checked|selected)$/i) || r.warning('attribute "' + y + '" missed value!! "' + y + '" instead!!'), a(y, y, t));
            break;
          case Bs:
            throw new Error("attribute value missed!!");
        }
        return u;
      case "":
        g = " ";
      default:
        if (g <= " ") switch (p) {
          case Us:
            e.setTagName(i.slice(t, u)), p = Fs;
            break;
          case ti:
            l = i.slice(t, u), p = Bi;
            break;
          case Fi:
            var y = i.slice(t, u);
            r.warning('attribute "' + y + '" missed quot(")!!'), a(l, y, t);
          case qi:
            p = Fs;
        }
        else switch (p) {
          case Bi:
            e.tagName, hn.isHTML(s[""]) && l.match(/^(?:disabled|checked|selected)$/i) || r.warning('attribute "' + l + '" missed value!! "' + l + '" instead2!!'), a(l, l, t), t = u, p = ti;
            break;
          case qi:
            r.warning('attribute space is required"' + l + '"!!');
          case Fs:
            p = ti, t = u;
            break;
          case Bs:
            p = Fi, t = u;
            break;
          case Gn:
            throw new Error("elements closed character '/' and '>' must be connected to");
        }
    }
    u++;
  }
}
function ku(i, t, e) {
  for (var s = i.tagName, n = null, r = i.length; r--; ) {
    var a = i[r], l = a.qName, u = a.value;
    if ((T = l.indexOf(":")) > 0) var p = a.prefix = l.slice(0, T), g = l.slice(T + 1), y = p === "xmlns" && g;
    else g = l, p = null, y = l === "xmlns" && "";
    a.localName = g, y !== !1 && (n == null && (n = {}, Wc(e, e = {})), e[y] = n[y] = u, a.uri = hn.XMLNS, t.startPrefixMapping(y, u));
  }
  for (r = i.length; r--; )
    (p = (a = i[r]).prefix) && (p === "xml" && (a.uri = hn.XML), p !== "xmlns" && (a.uri = e[p || ""]));
  var T;
  (T = s.indexOf(":")) > 0 ? (p = i.prefix = s.slice(0, T), g = i.localName = s.slice(T + 1)) : (p = null, g = i.localName = s);
  var C = i.uri = e[p || ""];
  if (t.startElement(C, g, s, i), !i.closed) return i.currentNSMap = e, i.localNSMap = n, !0;
  if (t.endElement(C, g, s), n) for (p in n) Object.prototype.hasOwnProperty.call(n, p) && t.endPrefixMapping(p);
}
function r0(i, t, e, s, n) {
  if (/^(?:script|textarea)$/i.test(e)) {
    var r = i.indexOf("</" + e + ">", t), a = i.substring(t + 1, r);
    if (/[&<]/.test(a)) return /^script$/i.test(e) ? (n.characters(a, 0, a.length), r) : (a = a.replace(/&#?\w+;/g, s), n.characters(a, 0, a.length), r);
  }
  return t + 1;
}
function a0(i, t, e, s) {
  var n = s[e];
  return n == null && ((n = i.lastIndexOf("</" + e + ">")) < t && (n = i.lastIndexOf("</" + e)), s[e] = n), n < t;
}
function Wc(i, t) {
  for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
}
function o0(i, t, e, s) {
  if (i.charAt(t + 2) === "-") return i.charAt(t + 3) === "-" ? (n = i.indexOf("-->", t + 4)) > t ? (e.comment(i, t + 4, n - t - 4), n + 3) : (s.error("Unclosed comment"), -1) : -1;
  if (i.substr(t + 3, 6) == "CDATA[") {
    var n = i.indexOf("]]>", t + 9);
    return e.startCDATA(), e.characters(i, t + 9, n - t - 9), e.endCDATA(), n + 3;
  }
  var r = h0(i, t), a = r.length;
  if (a > 1 && /!doctype/i.test(r[0][0])) {
    var l = r[1][0], u = !1, p = !1;
    a > 3 && (/^public$/i.test(r[2][0]) ? (u = r[3][0], p = a > 4 && r[4][0]) : /^system$/i.test(r[2][0]) && (p = r[3][0]));
    var g = r[a - 1];
    return e.startDTD(l, u, p), e.endDTD(), g.index + g[0].length;
  }
  return -1;
}
function l0(i, t, e) {
  var s = i.indexOf("?>", t);
  if (s) {
    var n = i.substring(t, s).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
    return n ? (n[0].length, e.processingInstruction(n[1], n[2]), s + 2) : -1;
  }
  return -1;
}
function Gc() {
  this.attributeNames = {};
}
function h0(i, t) {
  var e, s = [], n = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  for (n.lastIndex = t, n.exec(i); e = n.exec(i); ) if (s.push(e), e[1]) return s;
}
Ki.prototype = new Error(), Ki.prototype.name = Ki.name, wu.prototype = { parse: function(i, t, e) {
  var s = this.domBuilder;
  s.startDocument(), Wc(t, t = {}), s0(i, t, e, s, this.errorHandler), s.endDocument();
} }, Gc.prototype = { setTagName: function(i) {
  if (!Eu.test(i)) throw new Error("invalid tagName:" + i);
  this.tagName = i;
}, addValue: function(i, t, e) {
  if (!Eu.test(i)) throw new Error("invalid attribute:" + i);
  this.attributeNames[i] = this.length, this[this.length++] = { qName: i, value: t, offset: e };
}, length: 0, getLocalName: function(i) {
  return this[i].localName;
}, getLocator: function(i) {
  return this[i].locator;
}, getQName: function(i) {
  return this[i].qName;
}, getURI: function(i) {
  return this[i].uri;
}, getValue: function(i) {
  return this[i].value;
} }, Ao.XMLReader = wu, Ao.ParseError = Ki;
var u0 = He, xu = zc, Xc = Ao, d0 = ni.DOMImplementation, Iu = u0.NAMESPACE, c0 = Xc.ParseError, p0 = Xc.XMLReader;
function Au(i) {
  return i.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028]/g, `
`);
}
function Pu(i) {
  this.options = i || { locator: {} };
}
function m0(i, t, e) {
  if (!i) {
    if (t instanceof Gs) return t;
    i = t;
  }
  var s = {}, n = i instanceof Function;
  function r(a) {
    var l = i[a];
    !l && n && (l = i.length == 2 ? function(u) {
      i(a, u);
    } : i), s[a] = l && function(u) {
      l("[xmldom " + a + "]	" + u + Do(e));
    } || function() {
    };
  }
  return e = e || {}, r("warning"), r("error"), r("fatalError"), s;
}
function Gs() {
  this.cdata = !1;
}
function ji(i, t) {
  t.lineNumber = i.lineNumber, t.columnNumber = i.columnNumber;
}
function Do(i) {
  if (i) return `
@` + (i.systemId || "") + "#[line:" + i.lineNumber + ",col:" + i.columnNumber + "]";
}
function Du(i, t, e) {
  return typeof i == "string" ? i.substr(t, e) : i.length >= t + e || t ? new java.lang.String(i, t, e) + "" : i;
}
function Xn(i, t) {
  i.currentElement ? i.currentElement.appendChild(t) : i.doc.appendChild(t);
}
Pu.prototype.parseFromString = function(i, t) {
  var e = this.options, s = new p0(), n = e.domBuilder || new Gs(), r = e.errorHandler, a = e.locator, l = e.xmlns || {}, u = /\/x?html?$/.test(t), p = u ? xu.HTML_ENTITIES : xu.XML_ENTITIES;
  a && n.setDocumentLocator(a), s.errorHandler = m0(r, n, a), s.domBuilder = e.domBuilder || n, u && (l[""] = Iu.HTML), l.xml = l.xml || Iu.XML;
  var g = e.normalizeLineEndings || Au;
  return i && typeof i == "string" ? s.parse(g(i), l, p) : s.errorHandler.error("invalid doc source"), n.doc;
}, Gs.prototype = { startDocument: function() {
  this.doc = new d0().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
}, startElement: function(i, t, e, s) {
  var n = this.doc, r = n.createElementNS(i, e || t), a = s.length;
  Xn(this, r), this.currentElement = r, this.locator && ji(this.locator, r);
  for (var l = 0; l < a; l++) {
    i = s.getURI(l);
    var u = s.getValue(l), p = (e = s.getQName(l), n.createAttributeNS(i, e));
    this.locator && ji(s.getLocator(l), p), p.value = p.nodeValue = u, r.setAttributeNode(p);
  }
}, endElement: function(i, t, e) {
  var s = this.currentElement;
  s.tagName, this.currentElement = s.parentNode;
}, startPrefixMapping: function(i, t) {
}, endPrefixMapping: function(i) {
}, processingInstruction: function(i, t) {
  var e = this.doc.createProcessingInstruction(i, t);
  this.locator && ji(this.locator, e), Xn(this, e);
}, ignorableWhitespace: function(i, t, e) {
}, characters: function(i, t, e) {
  if (i = Du.apply(this, arguments)) {
    if (this.cdata) var s = this.doc.createCDATASection(i);
    else s = this.doc.createTextNode(i);
    this.currentElement ? this.currentElement.appendChild(s) : /^\s*$/.test(i) && this.doc.appendChild(s), this.locator && ji(this.locator, s);
  }
}, skippedEntity: function(i) {
}, endDocument: function() {
  this.doc.normalize();
}, setDocumentLocator: function(i) {
  (this.locator = i) && (i.lineNumber = 0);
}, comment: function(i, t, e) {
  i = Du.apply(this, arguments);
  var s = this.doc.createComment(i);
  this.locator && ji(this.locator, s), Xn(this, s);
}, startCDATA: function() {
  this.cdata = !0;
}, endCDATA: function() {
  this.cdata = !1;
}, startDTD: function(i, t, e) {
  var s = this.doc.implementation;
  if (s && s.createDocumentType) {
    var n = s.createDocumentType(i, t, e);
    this.locator && ji(this.locator, n), Xn(this, n), this.doc.doctype = n;
  }
}, warning: function(i) {
  console.warn("[xmldom warning]	" + i, Do(this.locator));
}, error: function(i) {
  console.error("[xmldom error]	" + i, Do(this.locator));
}, fatalError: function(i) {
  throw new c0(i, this.locator);
} }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(i) {
  Gs.prototype[i] = function() {
    return null;
  };
}), ur.__DOMHandler = Gs, ur.normalizeLineEndings = Au, ur.DOMParser = Pu;
var g0 = ur.DOMParser;
const Lu = (i) => !!i && typeof i == "object", Lt = (...i) => i.reduce((t, e) => (typeof e != "object" || Object.keys(e).forEach((s) => {
  Array.isArray(t[s]) && Array.isArray(e[s]) ? t[s] = t[s].concat(e[s]) : Lu(t[s]) && Lu(e[s]) ? t[s] = Lt(t[s], e[s]) : t[s] = e[s];
}), t), {}), Kc = (i) => Object.keys(i).map((t) => i[t]), f0 = (i, t) => {
  const e = [];
  for (let s = i; s < t; s++) e.push(s);
  return e;
}, hs = (i) => i.reduce((t, e) => t.concat(e), []), Yc = (i) => {
  if (!i.length) return [];
  const t = [];
  for (let e = 0; e < i.length; e++) t.push(i[e]);
  return t;
}, y0 = (i, t) => i.reduce((e, s, n) => (s[t] && e.push(n), e), []), _0 = (i, t) => Kc(i.reduce((e, s) => (s.forEach((n) => {
  e[t(n)] = n;
}), e), {}));
var us = { INVALID_NUMBER_OF_PERIOD: "INVALID_NUMBER_OF_PERIOD", INVALID_NUMBER_OF_CONTENT_STEERING: "INVALID_NUMBER_OF_CONTENT_STEERING", DASH_EMPTY_MANIFEST: "DASH_EMPTY_MANIFEST", DASH_INVALID_XML: "DASH_INVALID_XML", NO_BASE_URL: "NO_BASE_URL", MISSING_SEGMENT_INFORMATION: "MISSING_SEGMENT_INFORMATION", SEGMENT_TIME_UNSPECIFIED: "SEGMENT_TIME_UNSPECIFIED", UNSUPPORTED_UTC_TIMING_SCHEME: "UNSUPPORTED_UTC_TIMING_SCHEME" };
const un = ({ baseUrl: i = "", source: t = "", range: e = "", indexRange: s = "" }) => {
  const n = { uri: t, resolvedUri: $r(i || "", t) };
  if (e || s) {
    const r = (e || s).split("-");
    let a, l = E.BigInt ? E.BigInt(r[0]) : parseInt(r[0], 10), u = E.BigInt ? E.BigInt(r[1]) : parseInt(r[1], 10);
    l < Number.MAX_SAFE_INTEGER && typeof l == "bigint" && (l = Number(l)), u < Number.MAX_SAFE_INTEGER && typeof u == "bigint" && (u = Number(u)), a = typeof u == "bigint" || typeof l == "bigint" ? E.BigInt(u) - E.BigInt(l) + E.BigInt(1) : u - l + 1, typeof a == "bigint" && a < Number.MAX_SAFE_INTEGER && (a = Number(a)), n.byterange = { length: a, offset: l };
  }
  return n;
}, v0 = (i) => {
  let t;
  return t = typeof i.offset == "bigint" || typeof i.length == "bigint" ? E.BigInt(i.offset) + E.BigInt(i.length) - E.BigInt(1) : i.offset + i.length - 1, `${i.offset}-${t}`;
}, Ou = (i) => (i && typeof i != "number" && (i = parseInt(i, 10)), isNaN(i) ? null : i), b0 = { static(i) {
  const { duration: t, timescale: e = 1, sourceDuration: s, periodDuration: n } = i, r = Ou(i.endNumber), a = t / e;
  return typeof r == "number" ? { start: 0, end: r } : typeof n == "number" ? { start: 0, end: n / a } : { start: 0, end: s / a };
}, dynamic(i) {
  const { NOW: t, clientOffset: e, availabilityStartTime: s, timescale: n = 1, duration: r, periodStart: a = 0, minimumUpdatePeriod: l = 0, timeShiftBufferDepth: u = 1 / 0 } = i, p = Ou(i.endNumber), g = (t + e) / 1e3, y = s + a, T = g + l - y, C = Math.ceil(T * n / r), _ = Math.floor((g - y - u) * n / r), k = Math.floor((g - y) * n / r);
  return { start: Math.max(0, _), end: typeof p == "number" ? p : Math.min(C, k) };
} }, T0 = (i) => (t) => {
  const { duration: e, timescale: s = 1, periodStart: n, startNumber: r = 1 } = i;
  return { number: r + t, duration: e / s, timeline: n, time: t * e };
}, fl = (i) => {
  const { type: t, duration: e, timescale: s = 1, periodDuration: n, sourceDuration: r } = i, { start: a, end: l } = b0[t](i), u = f0(a, l).map(T0(i));
  if (t === "static") {
    const p = u.length - 1, g = typeof n == "number" ? n : r;
    u[p].duration = g - e / s * p;
  }
  return u;
}, Qc = (i) => {
  const { baseUrl: t, initialization: e = {}, sourceDuration: s, indexRange: n = "", periodStart: r, presentationTime: a, number: l = 0, duration: u } = i;
  if (!t) throw new Error(us.NO_BASE_URL);
  const p = un({ baseUrl: t, source: e.sourceURL, range: e.range }), g = un({ baseUrl: t, source: t, indexRange: n });
  if (g.map = p, u) {
    const y = fl(i);
    y.length && (g.duration = y[0].duration, g.timeline = y[0].timeline);
  } else s && (g.duration = s, g.timeline = r);
  return g.presentationTime = a || r, g.number = l, [g];
}, yl = (i, t, e) => {
  const s = i.sidx.map ? i.sidx.map : null, n = i.sidx.duration, r = i.timeline || 0, a = i.sidx.byterange, l = a.offset + a.length, u = t.timescale, p = t.references.filter((x) => x.referenceType !== 1), g = [], y = i.endList ? "static" : "dynamic", T = i.sidx.timeline;
  let C, _ = T, k = i.mediaSequence || 0;
  C = typeof t.firstOffset == "bigint" ? E.BigInt(l) + t.firstOffset : l + t.firstOffset;
  for (let x = 0; x < p.length; x++) {
    const A = t.references[x], I = A.referencedSize, O = A.subsegmentDuration;
    let N;
    N = typeof C == "bigint" ? C + E.BigInt(I) - E.BigInt(1) : C + I - 1;
    const P = Qc({ baseUrl: e, timescale: u, timeline: r, periodStart: T, presentationTime: _, number: k, duration: O, sourceDuration: n, indexRange: `${C}-${N}`, type: y })[0];
    s && (P.map = s), g.push(P), C += typeof C == "bigint" ? E.BigInt(I) : I, _ += O / u, k++;
  }
  return i.segments = g, i;
}, S0 = ["AUDIO", "SUBTITLES"], E0 = 1 / 60, Jc = (i) => _0(i, ({ timeline: t }) => t).sort((t, e) => t.timeline > e.timeline ? 1 : -1), w0 = (i, t) => {
  for (let e = 0; e < i.length; e++) if (i[e].attributes.NAME === t) return i[e];
  return null;
}, Nu = (i) => {
  let t = [];
  return q_(i, S0, (e, s, n, r) => {
    t = t.concat(e.playlists || []);
  }), t;
}, Ru = ({ playlist: i, mediaSequence: t }) => {
  i.mediaSequence = t, i.segments.forEach((e, s) => {
    e.number = i.mediaSequence + s;
  });
}, C0 = ({ oldPlaylists: i, newPlaylists: t, timelineStarts: e }) => {
  t.forEach((s) => {
    s.discontinuitySequence = e.findIndex(function({ timeline: l }) {
      return l === s.timeline;
    });
    const n = w0(i, s.attributes.NAME);
    if (!n || s.sidx) return;
    const r = s.segments[0], a = n.segments.findIndex(function(l) {
      return Math.abs(l.presentationTime - r.presentationTime) < E0;
    });
    if (a === -1) return Ru({ playlist: s, mediaSequence: n.mediaSequence + n.segments.length }), s.segments[0].discontinuity = !0, s.discontinuityStarts.unshift(0), void ((!n.segments.length && s.timeline > n.timeline || n.segments.length && s.timeline > n.segments[n.segments.length - 1].timeline) && s.discontinuitySequence--);
    n.segments[a].discontinuity && !r.discontinuity && (r.discontinuity = !0, s.discontinuityStarts.unshift(0), s.discontinuitySequence--), Ru({ playlist: s, mediaSequence: n.segments[a].number });
  });
}, k0 = ({ oldManifest: i, newManifest: t }) => {
  const e = i.playlists.concat(Nu(i)), s = t.playlists.concat(Nu(t));
  return t.timelineStarts = Jc([i.timelineStarts, t.timelineStarts]), C0({ oldPlaylists: e, newPlaylists: s, timelineStarts: t.timelineStarts }), t;
}, Hr = (i) => i && i.uri + "-" + v0(i.byterange), za = (i) => {
  const t = i.reduce(function(s, n) {
    return s[n.attributes.baseUrl] || (s[n.attributes.baseUrl] = []), s[n.attributes.baseUrl].push(n), s;
  }, {});
  let e = [];
  return Object.values(t).forEach((s) => {
    const n = Kc(s.reduce((r, a) => {
      const l = a.attributes.id + (a.attributes.lang || "");
      return r[l] ? (a.segments && (a.segments[0] && (a.segments[0].discontinuity = !0), r[l].segments.push(...a.segments)), a.attributes.contentProtection && (r[l].attributes.contentProtection = a.attributes.contentProtection)) : (r[l] = a, r[l].attributes.timelineStarts = []), r[l].attributes.timelineStarts.push({ start: a.attributes.periodStart, timeline: a.attributes.periodStart }), r;
    }, {}));
    e = e.concat(n);
  }), e.map((s) => (s.discontinuityStarts = y0(s.segments || [], "discontinuity"), s));
}, _l = (i, t) => {
  const e = Hr(i.sidx), s = e && t[e] && t[e].sidx;
  return s && yl(i, s, i.sidx.resolvedUri), i;
}, x0 = (i, t = {}) => {
  if (!Object.keys(t).length) return i;
  for (const e in i) i[e] = _l(i[e], t);
  return i;
}, I0 = ({ attributes: i, segments: t, sidx: e, mediaSequence: s, discontinuitySequence: n, discontinuityStarts: r }, a) => {
  const l = { attributes: { NAME: i.id, BANDWIDTH: i.bandwidth, CODECS: i.codecs, "PROGRAM-ID": 1 }, uri: "", endList: i.type === "static", timeline: i.periodStart, resolvedUri: i.baseUrl || "", targetDuration: i.duration, discontinuitySequence: n, discontinuityStarts: r, timelineStarts: i.timelineStarts, mediaSequence: s, segments: t };
  return i.contentProtection && (l.contentProtection = i.contentProtection), i.serviceLocation && (l.attributes.serviceLocation = i.serviceLocation), e && (l.sidx = e), a && (l.attributes.AUDIO = "audio", l.attributes.SUBTITLES = "subs"), l;
}, A0 = ({ attributes: i, segments: t, mediaSequence: e, discontinuityStarts: s, discontinuitySequence: n }) => {
  t === void 0 && (t = [{ uri: i.baseUrl, timeline: i.periodStart, resolvedUri: i.baseUrl || "", duration: i.sourceDuration, number: 0 }], i.duration = i.sourceDuration);
  const r = { NAME: i.id, BANDWIDTH: i.bandwidth, "PROGRAM-ID": 1 };
  i.codecs && (r.CODECS = i.codecs);
  const a = { attributes: r, uri: "", endList: i.type === "static", timeline: i.periodStart, resolvedUri: i.baseUrl || "", targetDuration: i.duration, timelineStarts: i.timelineStarts, discontinuityStarts: s, discontinuitySequence: n, mediaSequence: e, segments: t };
  return i.serviceLocation && (a.attributes.serviceLocation = i.serviceLocation), a;
}, P0 = (i, t = {}, e = !1) => {
  let s;
  const n = i.reduce((r, a) => {
    const l = a.attributes.role && a.attributes.role.value || "", u = a.attributes.lang || "";
    let p = a.attributes.label || "main";
    if (u && !a.attributes.label) {
      const y = l ? ` (${l})` : "";
      p = `${a.attributes.lang}${y}`;
    }
    r[p] || (r[p] = { language: u, autoselect: !0, default: l === "main", playlists: [], uri: "" });
    const g = _l(I0(a, e), t);
    return r[p].playlists.push(g), s === void 0 && l === "main" && (s = a, s.default = !0), r;
  }, {});
  return s || (n[Object.keys(n)[0]].default = !0), n;
}, D0 = (i, t = {}) => i.reduce((e, s) => {
  const n = s.attributes.label || s.attributes.lang || "text";
  return e[n] || (e[n] = { language: n, default: !1, autoselect: !1, playlists: [], uri: "" }), e[n].playlists.push(_l(A0(s), t)), e;
}, {}), L0 = (i) => i.reduce((t, e) => (e && e.forEach((s) => {
  const { channel: n, language: r } = s;
  t[r] = { autoselect: !1, default: !1, instreamId: n, language: r }, s.hasOwnProperty("aspectRatio") && (t[r].aspectRatio = s.aspectRatio), s.hasOwnProperty("easyReader") && (t[r].easyReader = s.easyReader), s.hasOwnProperty("3D") && (t[r]["3D"] = s["3D"]);
}), t), {}), O0 = ({ attributes: i, segments: t, sidx: e, discontinuityStarts: s }) => {
  const n = { attributes: { NAME: i.id, AUDIO: "audio", SUBTITLES: "subs", RESOLUTION: { width: i.width, height: i.height }, CODECS: i.codecs, BANDWIDTH: i.bandwidth, "PROGRAM-ID": 1 }, uri: "", endList: i.type === "static", timeline: i.periodStart, resolvedUri: i.baseUrl || "", targetDuration: i.duration, discontinuityStarts: s, timelineStarts: i.timelineStarts, segments: t };
  return i.frameRate && (n.attributes["FRAME-RATE"] = i.frameRate), i.contentProtection && (n.contentProtection = i.contentProtection), i.serviceLocation && (n.attributes.serviceLocation = i.serviceLocation), e && (n.sidx = e), n;
}, N0 = ({ attributes: i }) => i.mimeType === "video/mp4" || i.mimeType === "video/webm" || i.contentType === "video", R0 = ({ attributes: i }) => i.mimeType === "audio/mp4" || i.mimeType === "audio/webm" || i.contentType === "audio", M0 = ({ attributes: i }) => i.mimeType === "text/vtt" || i.contentType === "text", U0 = (i, t) => {
  i.forEach((e) => {
    e.mediaSequence = 0, e.discontinuitySequence = t.findIndex(function({ timeline: s }) {
      return s === e.timeline;
    }), e.segments && e.segments.forEach((s, n) => {
      s.number = n;
    });
  });
}, Mu = (i) => i ? Object.keys(i).reduce((t, e) => {
  const s = i[e];
  return t.concat(s.playlists);
}, []) : [], B0 = ({ dashPlaylists: i, locations: t, contentSteering: e, sidxMapping: s = {}, previousManifest: n, eventStream: r }) => {
  if (!i.length) return {};
  const { sourceDuration: a, type: l, suggestedPresentationDelay: u, minimumUpdatePeriod: p } = i[0].attributes, g = za(i.filter(N0)).map(O0), y = za(i.filter(R0)), T = za(i.filter(M0)), C = i.map((N) => N.attributes.captionServices).filter(Boolean), _ = { allowCache: !0, discontinuityStarts: [], segments: [], endList: !0, mediaGroups: { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} }, uri: "", duration: a, playlists: x0(g, s) };
  p >= 0 && (_.minimumUpdatePeriod = 1e3 * p), t && (_.locations = t), e && (_.contentSteering = e), l === "dynamic" && (_.suggestedPresentationDelay = u), r && r.length > 0 && (_.eventStream = r);
  const k = _.playlists.length === 0, x = y.length ? P0(y, s, k) : null, A = T.length ? D0(T, s) : null, I = g.concat(Mu(x), Mu(A)), O = I.map(({ timelineStarts: N }) => N);
  return _.timelineStarts = Jc(O), U0(I, _.timelineStarts), x && (_.mediaGroups.AUDIO.audio = x), A && (_.mediaGroups.SUBTITLES.subs = A), C.length && (_.mediaGroups["CLOSED-CAPTIONS"].cc = L0(C)), n ? k0({ oldManifest: n, newManifest: _ }) : _;
}, F0 = (i, t, e) => {
  const { NOW: s, clientOffset: n, availabilityStartTime: r, timescale: a = 1, periodStart: l = 0, minimumUpdatePeriod: u = 0 } = i, p = (s + n) / 1e3 + u - (r + l);
  return Math.ceil((p * a - t) / e);
}, Zc = (i, t) => {
  const { type: e, minimumUpdatePeriod: s = 0, media: n = "", sourceDuration: r, timescale: a = 1, startNumber: l = 1, periodStart: u } = i, p = [];
  let g = -1;
  for (let y = 0; y < t.length; y++) {
    const T = t[y], C = T.d, _ = T.r || 0, k = T.t || 0;
    let x;
    if (g < 0 && (g = k), k && k > g && (g = k), _ < 0) {
      const O = y + 1;
      x = O === t.length ? e === "dynamic" && s > 0 && n.indexOf("$Number$") > 0 ? F0(i, g, C) : (r * a - g) / C : (t[O].t - g) / C;
    } else x = _ + 1;
    const A = l + p.length + x;
    let I = l + p.length;
    for (; I < A; ) p.push({ number: I, duration: C / a, time: g, timeline: u }), g += C, I++;
  }
  return p;
}, q0 = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g, j0 = (i) => (t, e, s, n) => {
  if (t === "$$") return "$";
  if (i[e] === void 0) return t;
  const r = "" + i[e];
  return e === "RepresentationID" ? r : (n = s ? parseInt(n, 10) : 1, r.length >= n ? r : `${new Array(n - r.length + 1).join("0")}${r}`);
}, Uu = (i, t) => i.replace(q0, j0(t)), $0 = (i, t) => i.duration || t ? i.duration ? fl(i) : Zc(i, t) : [{ number: i.startNumber || 1, duration: i.sourceDuration, time: 0, timeline: i.periodStart }], H0 = (i, t) => {
  const e = { RepresentationID: i.id, Bandwidth: i.bandwidth || 0 }, { initialization: s = { sourceURL: "", range: "" } } = i, n = un({ baseUrl: i.baseUrl, source: Uu(s.sourceURL, e), range: s.range });
  return $0(i, t).map((r) => {
    e.Number = r.number, e.Time = r.time;
    const a = Uu(i.media || "", e), l = i.timescale || 1, u = i.presentationTimeOffset || 0, p = i.periodStart + (r.time - u) / l;
    return { uri: a, timeline: r.timeline, duration: r.duration, resolvedUri: $r(i.baseUrl || "", a), map: n, number: r.number, presentationTime: p };
  });
}, V0 = (i, t) => {
  const { baseUrl: e, initialization: s = {} } = i, n = un({ baseUrl: e, source: s.sourceURL, range: s.range }), r = un({ baseUrl: e, source: t.media, range: t.mediaRange });
  return r.map = n, r;
}, z0 = (i, t) => {
  const { duration: e, segmentUrls: s = [], periodStart: n } = i;
  if (!e && !t || e && t) throw new Error(us.SEGMENT_TIME_UNSPECIFIED);
  const r = s.map((l) => V0(i, l));
  let a;
  return e && (a = fl(i)), t && (a = Zc(i, t)), a.map((l, u) => {
    if (r[u]) {
      const p = r[u], g = i.timescale || 1, y = i.presentationTimeOffset || 0;
      return p.timeline = l.timeline, p.duration = l.duration, p.number = l.number, p.presentationTime = n + (l.time - y) / g, p;
    }
  }).filter((l) => l);
}, W0 = ({ attributes: i, segmentInfo: t }) => {
  let e, s;
  t.template ? (s = H0, e = Lt(i, t.template)) : t.base ? (s = Qc, e = Lt(i, t.base)) : t.list && (s = z0, e = Lt(i, t.list));
  const n = { attributes: i };
  if (!s) return n;
  const r = s(e, t.segmentTimeline);
  if (e.duration) {
    const { duration: a, timescale: l = 1 } = e;
    e.duration = a / l;
  } else r.length ? e.duration = r.reduce((a, l) => Math.max(a, Math.ceil(l.duration)), 0) : e.duration = 0;
  return n.attributes = e, n.segments = r, t.base && e.indexRange && (n.sidx = r[0], n.segments = []), n;
}, G0 = (i) => i.map(W0), ft = (i, t) => Yc(i.childNodes).filter(({ tagName: e }) => e === t), gn = (i) => i.textContent.trim(), X0 = (i) => parseFloat(i.split("/").reduce((t, e) => t / e)), $i = (i) => {
  const a = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(i);
  if (!a) return 0;
  const [l, u, p, g, y, T] = a.slice(1);
  return parseFloat(l || 0) * 31536e3 + parseFloat(u || 0) * 2592e3 + parseFloat(p || 0) * 86400 + parseFloat(g || 0) * 3600 + parseFloat(y || 0) * 60 + parseFloat(T || 0);
}, K0 = (i) => (/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(i) && (i += "Z"), Date.parse(i)), Bu = { mediaPresentationDuration: (i) => $i(i), availabilityStartTime: (i) => K0(i) / 1e3, minimumUpdatePeriod: (i) => $i(i), suggestedPresentationDelay: (i) => $i(i), type: (i) => i, timeShiftBufferDepth: (i) => $i(i), start: (i) => $i(i), width: (i) => parseInt(i, 10), height: (i) => parseInt(i, 10), bandwidth: (i) => parseInt(i, 10), frameRate: (i) => X0(i), startNumber: (i) => parseInt(i, 10), timescale: (i) => parseInt(i, 10), presentationTimeOffset: (i) => parseInt(i, 10), duration(i) {
  const t = parseInt(i, 10);
  return isNaN(t) ? $i(i) : t;
}, d: (i) => parseInt(i, 10), t: (i) => parseInt(i, 10), r: (i) => parseInt(i, 10), presentationTime: (i) => parseInt(i, 10), DEFAULT: (i) => i }, It = (i) => i && i.attributes ? Yc(i.attributes).reduce((t, e) => {
  const s = Bu[e.name] || Bu.DEFAULT;
  return t[e.name] = s(e.value), t;
}, {}) : {}, Y0 = { "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha", "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready", "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime", "urn:mpeg:dash:mp4protection:2011": "mp4protection" }, Vr = (i, t) => t.length ? hs(i.map(function(e) {
  return t.map(function(s) {
    const n = gn(s), r = $r(e.baseUrl, n), a = Lt(It(s), { baseUrl: r });
    return r !== n && !a.serviceLocation && e.serviceLocation && (a.serviceLocation = e.serviceLocation), a;
  });
})) : i, vl = (i) => {
  const t = ft(i, "SegmentTemplate")[0], e = ft(i, "SegmentList")[0], s = e && ft(e, "SegmentURL").map((y) => Lt({ tag: "SegmentURL" }, It(y))), n = ft(i, "SegmentBase")[0], r = e || t, a = r && ft(r, "SegmentTimeline")[0], l = e || n || t, u = l && ft(l, "Initialization")[0], p = t && It(t);
  p && u ? p.initialization = u && It(u) : p && p.initialization && (p.initialization = { sourceURL: p.initialization });
  const g = { template: p, segmentTimeline: a && ft(a, "S").map((y) => It(y)), list: e && Lt(It(e), { segmentUrls: s, initialization: It(u) }), base: n && Lt(It(n), { initialization: It(u) }) };
  return Object.keys(g).forEach((y) => {
    g[y] || delete g[y];
  }), g;
}, Q0 = (i, t, e) => (s) => {
  const n = ft(s, "BaseURL"), r = Vr(t, n), a = Lt(i, It(s)), l = vl(s);
  return r.map((u) => ({ segmentInfo: Lt(e, l), attributes: Lt(a, u) }));
}, J0 = (i) => i.reduce((t, e) => {
  const s = It(e);
  s.schemeIdUri && (s.schemeIdUri = s.schemeIdUri.toLowerCase());
  const n = Y0[s.schemeIdUri];
  if (n) {
    t[n] = { attributes: s };
    const r = ft(e, "cenc:pssh")[0];
    if (r) {
      const a = gn(r);
      t[n].pssh = a && $_(a);
    }
  }
  return t;
}, {}), Z0 = (i) => {
  if (i.schemeIdUri === "urn:scte:dash:cc:cea-608:2015")
    return (typeof i.value != "string" ? [] : i.value.split(";")).map((t) => {
      let e, s;
      return s = t, /^CC\d=/.test(t) ? [e, s] = t.split("=") : /^CC\d$/.test(t) && (e = t), { channel: e, language: s };
    });
  if (i.schemeIdUri === "urn:scte:dash:cc:cea-708:2015")
    return (typeof i.value != "string" ? [] : i.value.split(";")).map((t) => {
      const e = { channel: void 0, language: void 0, aspectRatio: 1, easyReader: 0, "3D": 0 };
      if (/=/.test(t)) {
        const [s, n = ""] = t.split("=");
        e.channel = s, e.language = t, n.split(",").forEach((r) => {
          const [a, l] = r.split(":");
          a === "lang" ? e.language = l : a === "er" ? e.easyReader = Number(l) : a === "war" ? e.aspectRatio = Number(l) : a === "3D" && (e["3D"] = Number(l));
        });
      } else e.language = t;
      return e.channel && (e.channel = "SERVICE" + e.channel), e;
    });
}, tv = (i) => hs(ft(i.node, "EventStream").map((t) => {
  const e = It(t), s = e.schemeIdUri;
  return ft(t, "Event").map((n) => {
    const r = It(n), a = r.presentationTime || 0, l = e.timescale || 1, u = r.duration || 0, p = a / l + i.attributes.start;
    return { schemeIdUri: s, value: e.value, id: r.id, start: p, end: p + u / l, messageData: gn(n) || r.messageData, contentEncoding: e.contentEncoding, presentationTimeOffset: e.presentationTimeOffset || 0 };
  });
})), ev = (i, t, e) => (s) => {
  const n = It(s), r = Vr(t, ft(s, "BaseURL")), a = ft(s, "Role")[0], l = { role: It(a) };
  let u = Lt(i, n, l);
  const p = ft(s, "Accessibility")[0], g = Z0(It(p));
  g && (u = Lt(u, { captionServices: g }));
  const y = ft(s, "Label")[0];
  if (y && y.childNodes.length) {
    const x = y.childNodes[0].nodeValue.trim();
    u = Lt(u, { label: x });
  }
  const T = J0(ft(s, "ContentProtection"));
  Object.keys(T).length && (u = Lt(u, { contentProtection: T }));
  const C = vl(s), _ = ft(s, "Representation"), k = Lt(e, C);
  return hs(_.map(Q0(u, r, k)));
}, iv = (i, t) => (e, s) => {
  const n = Vr(t, ft(e.node, "BaseURL")), r = Lt(i, { periodStart: e.attributes.start });
  typeof e.attributes.duration == "number" && (r.periodDuration = e.attributes.duration);
  const a = ft(e.node, "AdaptationSet"), l = vl(e.node);
  return hs(a.map(ev(r, n, l)));
}, sv = (i, t) => {
  if (i.length > 1 && t({ type: "warn", message: "The MPD manifest should contain no more than one ContentSteering tag" }), !i.length) return null;
  const e = Lt({ serverURL: gn(i[0]) }, It(i[0]));
  return e.queryBeforeStart = e.queryBeforeStart === "true", e;
}, nv = ({ attributes: i, priorPeriodAttributes: t, mpdType: e }) => typeof i.start == "number" ? i.start : t && typeof t.start == "number" && typeof t.duration == "number" ? t.start + t.duration : t || e !== "static" ? null : 0, rv = (i, t = {}) => {
  const { manifestUri: e = "", NOW: s = Date.now(), clientOffset: n = 0, eventHandler: r = function() {
  } } = t, a = ft(i, "Period");
  if (!a.length) throw new Error(us.INVALID_NUMBER_OF_PERIOD);
  const l = ft(i, "Location"), u = It(i), p = Vr([{ baseUrl: e }], ft(i, "BaseURL")), g = ft(i, "ContentSteering");
  u.type = u.type || "static", u.sourceDuration = u.mediaPresentationDuration || 0, u.NOW = s, u.clientOffset = n, l.length && (u.locations = l.map(gn));
  const y = [];
  return a.forEach((T, C) => {
    const _ = It(T), k = y[C - 1];
    _.start = nv({ attributes: _, priorPeriodAttributes: k ? k.attributes : null, mpdType: u.type }), y.push({ node: T, attributes: _ });
  }), { locations: u.locations, contentSteeringInfo: sv(g, r), representationInfo: hs(y.map(iv(u, p))), eventStream: hs(y.map(tv)) };
}, tp = (i) => {
  if (i === "") throw new Error(us.DASH_EMPTY_MANIFEST);
  const t = new g0();
  let e, s;
  try {
    e = t.parseFromString(i, "application/xml"), s = e && e.documentElement.tagName === "MPD" ? e.documentElement : null;
  } catch {
  }
  if (!s || s && s.getElementsByTagName("parsererror").length > 0) throw new Error(us.DASH_INVALID_XML);
  return s;
}, av = (i) => {
  const t = ft(i, "UTCTiming")[0];
  if (!t) return null;
  const e = It(t);
  switch (e.schemeIdUri) {
    case "urn:mpeg:dash:utc:http-head:2014":
    case "urn:mpeg:dash:utc:http-head:2012":
      e.method = "HEAD";
      break;
    case "urn:mpeg:dash:utc:http-xsdate:2014":
    case "urn:mpeg:dash:utc:http-iso:2014":
    case "urn:mpeg:dash:utc:http-xsdate:2012":
    case "urn:mpeg:dash:utc:http-iso:2012":
      e.method = "GET";
      break;
    case "urn:mpeg:dash:utc:direct:2014":
    case "urn:mpeg:dash:utc:direct:2012":
      e.method = "DIRECT", e.value = Date.parse(e.value);
      break;
    default:
      throw new Error(us.UNSUPPORTED_UTC_TIMING_SCHEME);
  }
  return e;
}, ov = (i, t = {}) => {
  const e = rv(tp(i), t), s = G0(e.representationInfo);
  return B0({ dashPlaylists: s, locations: e.locations, contentSteering: e.contentSteeringInfo, sidxMapping: t.sidxMapping, previousManifest: t.previousManifest, eventStream: e.eventStream });
}, lv = (i) => av(tp(i));
var Fu = Math.pow(2, 32), qu = function(i) {
  var t, e = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return e.getBigUint64 ? (t = e.getBigUint64(0)) < Number.MAX_SAFE_INTEGER ? Number(t) : t : e.getUint32(0) * Fu + e.getUint32(4);
};
const hv = ui(function(i) {
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength), e = { version: i[0], flags: new Uint8Array(i.subarray(1, 4)), references: [], referenceId: t.getUint32(4), timescale: t.getUint32(8) }, s = 12;
  e.version === 0 ? (e.earliestPresentationTime = t.getUint32(s), e.firstOffset = t.getUint32(s + 4), s += 8) : (e.earliestPresentationTime = qu(i.subarray(s)), e.firstOffset = qu(i.subarray(s + 8)), s += 16), s += 2;
  var n = t.getUint16(s);
  for (s += 2; n > 0; s += 12, n--) e.references.push({ referenceType: (128 & i[s]) >>> 7, referencedSize: 2147483647 & t.getUint32(s), subsegmentDuration: t.getUint32(s + 4), startsWithSap: !!(128 & i[s + 8]), sapType: (112 & i[s + 8]) >>> 4, sapDeltaTime: 268435455 & t.getUint32(s + 8) });
  return e;
});
var uv = W([73, 68, 51]), dv = function(i, t) {
  t === void 0 && (t = 0);
  var e = (i = W(i))[t + 5], s = i[t + 6] << 21 | i[t + 7] << 14 | i[t + 8] << 7 | i[t + 9];
  return (16 & e) >> 4 ? s + 20 : s + 10;
}, Xs = function i(t, e) {
  return e === void 0 && (e = 0), (t = W(t)).length - e < 10 || !gt(t, uv, { offset: e }) ? e : i(t, e += dv(t, e));
}, ju = function(i) {
  return typeof i == "string" ? xc(i) : i;
}, cv = function(i) {
  return Array.isArray(i) ? i.map(function(t) {
    return ju(t);
  }) : [ju(i)];
}, pv = function i(t, e, s) {
  s === void 0 && (s = !1), e = cv(e), t = W(t);
  var n = [];
  if (!e.length) return n;
  for (var r = 0; r < t.length; ) {
    var a = (t[r] << 24 | t[r + 1] << 16 | t[r + 2] << 8 | t[r + 3]) >>> 0, l = t.subarray(r + 4, r + 8);
    if (a === 0) break;
    var u = r + a;
    if (u > t.length) {
      if (s) break;
      u = t.length;
    }
    var p = t.subarray(r + 8, u);
    gt(l, e[0]) && (e.length === 1 ? n.push(p) : n.push.apply(n, i(p, e.slice(1), s))), r = u;
  }
  return n;
}, Kn = { EBML: W([26, 69, 223, 163]), DocType: W([66, 130]), Segment: W([24, 83, 128, 103]), SegmentInfo: W([21, 73, 169, 102]), Tracks: W([22, 84, 174, 107]), Track: W([174]), TrackNumber: W([215]), DefaultDuration: W([35, 227, 131]), TrackEntry: W([174]), TrackType: W([131]), FlagDefault: W([136]), CodecID: W([134]), CodecPrivate: W([99, 162]), VideoTrack: W([224]), AudioTrack: W([225]), Cluster: W([31, 67, 182, 117]), Timestamp: W([231]), TimestampScale: W([42, 215, 177]), BlockGroup: W([160]), BlockDuration: W([155]), Block: W([161]), SimpleBlock: W([163]) }, Lo = [128, 64, 32, 16, 8, 4, 2, 1], mv = function(i) {
  for (var t = 1, e = 0; e < Lo.length && !(i & Lo[e]); e++) t++;
  return t;
}, _r = function(i, t, e, s) {
  e === void 0 && (e = !0), s === void 0 && (s = !1);
  var n = mv(i[t]), r = i.subarray(t, t + n);
  return e && ((r = Array.prototype.slice.call(i, t, t + n))[0] ^= Lo[n - 1]), { length: n, value: U_(r, { signed: s }), bytes: r };
}, $u = function i(t) {
  return typeof t == "string" ? t.match(/.{1,2}/g).map(function(e) {
    return i(e);
  }) : typeof t == "number" ? B_(t) : t;
}, gv = function(i) {
  return Array.isArray(i) ? i.map(function(t) {
    return $u(t);
  }) : [$u(i)];
}, fv = function i(t, e, s) {
  if (s >= e.length) return e.length;
  var n = _r(e, s, !1);
  if (gt(t.bytes, n.bytes)) return s;
  var r = _r(e, s + n.length);
  return i(t, e, s + r.length + r.value + n.length);
}, Hu = function i(t, e) {
  e = gv(e), t = W(t);
  var s = [];
  if (!e.length) return s;
  for (var n = 0; n < t.length; ) {
    var r = _r(t, n, !1), a = _r(t, n + r.length), l = n + r.length + a.length;
    a.value === 127 && (a.value = fv(r, t, l), a.value !== t.length && (a.value -= l));
    var u = l + a.value > t.length ? t.length : l + a.value, p = t.subarray(l, u);
    gt(e[0], r.bytes) && (e.length === 1 ? s.push(p) : s = s.concat(i(p, e.slice(1)))), n += r.length + a.length + p.length;
  }
  return s;
}, yv = W([0, 0, 0, 1]), _v = W([0, 0, 1]), vv = W([0, 0, 3]), bv = function(i) {
  for (var t = [], e = 1; e < i.length - 2; ) gt(i.subarray(e, e + 3), vv) && (t.push(e + 2), e++), e++;
  if (t.length === 0) return i;
  var s = i.length - t.length, n = new Uint8Array(s), r = 0;
  for (e = 0; e < s; r++, e++) r === t[0] && (r++, t.shift()), n[e] = i[r];
  return n;
}, ep = function(i, t, e, s) {
  i = W(i), e = [].concat(e);
  for (var n, r = 0, a = 0; r < i.length && (a < s || n); ) {
    var l = void 0;
    if (gt(i.subarray(r), yv) ? l = 4 : gt(i.subarray(r), _v) && (l = 3), l) {
      if (a++, n) return bv(i.subarray(n, r));
      var u = void 0;
      t === "h264" ? u = 31 & i[r + l] : t === "h265" && (u = i[r + l] >> 1 & 63), e.indexOf(u) !== -1 && (n = r + l), r += l + (t === "h264" ? 1 : 2);
    } else r++;
  }
  return i.subarray(0, 0);
}, Tv = function(i, t, e) {
  return ep(i, "h264", t, e);
}, Sv = function(i, t, e) {
  return ep(i, "h265", t, e);
}, Bt = { webm: W([119, 101, 98, 109]), matroska: W([109, 97, 116, 114, 111, 115, 107, 97]), flac: W([102, 76, 97, 67]), ogg: W([79, 103, 103, 83]), ac3: W([11, 119]), riff: W([82, 73, 70, 70]), avi: W([65, 86, 73]), wav: W([87, 65, 86, 69]), "3gp": W([102, 116, 121, 112, 51, 103]), mp4: W([102, 116, 121, 112]), fmp4: W([115, 116, 121, 112]), mov: W([102, 116, 121, 112, 113, 116]), moov: W([109, 111, 111, 118]), moof: W([109, 111, 111, 102]) }, ds = { aac: function(i) {
  var t = Xs(i);
  return gt(i, [255, 16], { offset: t, mask: [255, 22] });
}, mp3: function(i) {
  var t = Xs(i);
  return gt(i, [255, 2], { offset: t, mask: [255, 6] });
}, webm: function(i) {
  var t = Hu(i, [Kn.EBML, Kn.DocType])[0];
  return gt(t, Bt.webm);
}, mkv: function(i) {
  var t = Hu(i, [Kn.EBML, Kn.DocType])[0];
  return gt(t, Bt.matroska);
}, mp4: function(i) {
  return !ds["3gp"](i) && !ds.mov(i) && (!(!gt(i, Bt.mp4, { offset: 4 }) && !gt(i, Bt.fmp4, { offset: 4 })) || !(!gt(i, Bt.moof, { offset: 4 }) && !gt(i, Bt.moov, { offset: 4 })) || void 0);
}, mov: function(i) {
  return gt(i, Bt.mov, { offset: 4 });
}, "3gp": function(i) {
  return gt(i, Bt["3gp"], { offset: 4 });
}, ac3: function(i) {
  var t = Xs(i);
  return gt(i, Bt.ac3, { offset: t });
}, ts: function(i) {
  if (i.length < 189 && i.length >= 1) return i[0] === 71;
  for (var t = 0; t + 188 < i.length && t < 188; ) {
    if (i[t] === 71 && i[t + 188] === 71) return !0;
    t += 1;
  }
  return !1;
}, flac: function(i) {
  var t = Xs(i);
  return gt(i, Bt.flac, { offset: t });
}, ogg: function(i) {
  return gt(i, Bt.ogg);
}, avi: function(i) {
  return gt(i, Bt.riff) && gt(i, Bt.avi, { offset: 8 });
}, wav: function(i) {
  return gt(i, Bt.riff) && gt(i, Bt.wav, { offset: 8 });
}, h264: function(i) {
  return Tv(i, 7, 3).length;
}, h265: function(i) {
  return Sv(i, [32, 33], 3).length;
} }, Oo = Object.keys(ds).filter(function(i) {
  return i !== "ts" && i !== "h264" && i !== "h265";
}).concat(["ts", "h264", "h265"]);
Oo.forEach(function(i) {
  var t = ds[i];
  ds[i] = function(e) {
    return t(W(e));
  };
});
var ip, sp, No, np, rp, ap, op, Ev = ds, bl = function(i) {
  i = W(i);
  for (var t = 0; t < Oo.length; t++) {
    var e = Oo[t];
    if (Ev[e](i)) return e;
  }
  return "";
}, wv = function(i) {
  return pv(i, ["moof"]).length > 0;
}, Wa = 9e4;
rp = function(i, t) {
  return ip(np(i, t));
}, ap = function(i, t) {
  return sp(No(i), t);
}, op = function(i, t, e) {
  return No(e ? i : i - t);
};
var Ci = { ONE_SECOND_IN_TS: Wa, secondsToVideoTs: ip = function(i) {
  return i * Wa;
}, secondsToAudioTs: sp = function(i, t) {
  return i * t;
}, videoTsToSeconds: No = function(i) {
  return i / Wa;
}, audioTsToSeconds: np = function(i, t) {
  return i / t;
}, audioTsToVideoTs: rp, videoTsToAudioTs: ap, metadataTsToSeconds: op }, Ro = "8.12.0";
const Ve = {}, oi = function(i, t) {
  return Ve[i] = Ve[i] || [], t && (Ve[i] = Ve[i].concat(t)), Ve[i];
}, Cv = function(i, t) {
  oi(i, t);
}, lp = function(i, t) {
  const e = oi(i).indexOf(t);
  return !(e <= -1) && (Ve[i] = Ve[i].slice(), Ve[i].splice(e, 1), !0);
}, kv = function(i, t) {
  oi(i, [].concat(t).map((e) => {
    const s = (...n) => (lp(i, s), e(...n));
    return s;
  }));
}, vr = { prefixed: !0 }, dr = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"]], Vu = dr[0];
let Ks;
for (let i = 0; i < dr.length; i++) if (dr[i][1] in q) {
  Ks = dr[i];
  break;
}
if (Ks) {
  for (let i = 0; i < Ks.length; i++) vr[Vu[i]] = Ks[i];
  vr.prefixed = Ks[0] !== Vu[0];
}
let Wt = [];
const xv = (i, t, e) => (s, n, r) => {
  const a = t.levels[n], l = new RegExp(`^(${a})$`);
  let u = i;
  if (s !== "log" && r.unshift(s.toUpperCase() + ":"), e && (u = `%c${i}`, r.unshift(e)), r.unshift(u + ":"), Wt) {
    Wt.push([].concat(r));
    const g = Wt.length - 1e3;
    Wt.splice(0, g > 0 ? g : 0);
  }
  if (!E.console) return;
  let p = E.console[s];
  p || s !== "debug" || (p = E.console.info || E.console.log), p && a && l.test(s) && p[Array.isArray(r) ? "apply" : "call"](E.console, r);
};
function Mo(i, t = ":", e = "") {
  let s, n = "info";
  const r = function(...a) {
    s("log", n, a);
  };
  return s = xv(i, r, e), r.createLogger = (a, l, u) => {
    const p = l !== void 0 ? l : t;
    return Mo(`${i} ${p} ${a}`, p, u !== void 0 ? u : e);
  }, r.createNewLogger = (a, l, u) => Mo(a, l, u), r.levels = { all: "debug|log|warn|error", off: "", debug: "debug|log|warn|error", info: "log|warn|error", warn: "warn|error", error: "error", DEFAULT: n }, r.level = (a) => {
    if (typeof a == "string") {
      if (!r.levels.hasOwnProperty(a)) throw new Error(`"${a}" in not a valid log level`);
      n = a;
    }
    return n;
  }, r.history = () => Wt ? [].concat(Wt) : [], r.history.filter = (a) => (Wt || []).filter((l) => new RegExp(`.*${a}.*`).test(l[0])), r.history.clear = () => {
    Wt && (Wt.length = 0);
  }, r.history.disable = () => {
    Wt !== null && (Wt.length = 0, Wt = null);
  }, r.history.enable = () => {
    Wt === null && (Wt = []);
  }, r.error = (...a) => s("error", n, a), r.warn = (...a) => s("warn", n, a), r.debug = (...a) => s("debug", n, a), r;
}
const J = Mo("VIDEOJS"), hp = J.createLogger, Iv = Object.prototype.toString, up = function(i) {
  return Me(i) ? Object.keys(i) : [];
};
function is(i, t) {
  up(i).forEach((e) => t(i[e], e));
}
function dp(i, t, e = 0) {
  return up(i).reduce((s, n) => t(s, i[n], n), e);
}
function Me(i) {
  return !!i && typeof i == "object";
}
function cs(i) {
  return Me(i) && Iv.call(i) === "[object Object]" && i.constructor === Object;
}
function ht(...i) {
  const t = {};
  return i.forEach((e) => {
    e && is(e, (s, n) => {
      cs(s) ? (cs(t[n]) || (t[n] = {}), t[n] = ht(t[n], s)) : t[n] = s;
    });
  }), t;
}
function cp(i = {}) {
  const t = [];
  for (const e in i) if (i.hasOwnProperty(e)) {
    const s = i[e];
    t.push(s);
  }
  return t;
}
function br(i, t, e, s = !0) {
  const n = (a) => Object.defineProperty(i, t, { value: a, enumerable: !0, writable: !0 }), r = { configurable: !0, enumerable: !0, get() {
    const a = e();
    return n(a), a;
  } };
  return s && (r.set = n), Object.defineProperty(i, t, r);
}
var Av = Object.freeze({ __proto__: null, each: is, reduce: dp, isObject: Me, isPlain: cs, merge: ht, values: cp, defineLazyProperty: br });
let pp, Tl = !1, mp = null, Oe = !1, gp = !1, Wi = !1, Gi = !1, Ne = !1, Uo = null, Tr = null, fp = null, Sr = !1, Er = !1, wr = !1, zr = !1, Bo = !1, Fo = !1, qo = !1;
const dn = !!(_s() && ("ontouchstart" in E || E.navigator.maxTouchPoints || E.DocumentTouch && E.document instanceof E.DocumentTouch)), ei = E.navigator && E.navigator.userAgentData;
if (ei && ei.platform && ei.brands && (Oe = ei.platform === "Android", Wi = !!ei.brands.find((i) => i.brand === "Microsoft Edge"), Gi = !!ei.brands.find((i) => i.brand === "Chromium"), Ne = !Wi && Gi, Uo = Tr = (ei.brands.find((i) => i.brand === "Chromium") || {}).version || null, Er = ei.platform === "Windows"), !Gi) {
  const i = E.navigator && E.navigator.userAgent || "";
  Tl = /iPod/i.test(i), mp = function() {
    const t = i.match(/OS (\d+)_/i);
    return t && t[1] ? t[1] : null;
  }(), Oe = /Android/i.test(i), pp = function() {
    const t = i.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
    if (!t) return null;
    const e = t[1] && parseFloat(t[1]), s = t[2] && parseFloat(t[2]);
    return e && s ? parseFloat(t[1] + "." + t[2]) : e || null;
  }(), gp = /Firefox/i.test(i), Wi = /Edg/i.test(i), Gi = /Chrome/i.test(i) || /CriOS/i.test(i), Ne = !Wi && Gi, Uo = Tr = function() {
    const t = i.match(/(Chrome|CriOS)\/(\d+)/);
    return t && t[2] ? parseFloat(t[2]) : null;
  }(), fp = function() {
    const t = /MSIE\s(\d+)\.\d/.exec(i);
    let e = t && parseFloat(t[1]);
    return !e && /Trident\/7.0/i.test(i) && /rv:11.0/.test(i) && (e = 11), e;
  }(), Bo = /Tizen/i.test(i), Fo = /Web0S/i.test(i), qo = Bo || Fo, Sr = /Safari/i.test(i) && !Ne && !Oe && !Wi && !qo, Er = /Windows/i.test(i), wr = /iPad/i.test(i) || Sr && dn && !/iPhone/i.test(i), zr = /iPhone/i.test(i) && !wr;
}
const $t = zr || wr || Tl, Wr = (Sr || $t) && !Ne;
var yp = Object.freeze({ __proto__: null, get IS_IPOD() {
  return Tl;
}, get IOS_VERSION() {
  return mp;
}, get IS_ANDROID() {
  return Oe;
}, get ANDROID_VERSION() {
  return pp;
}, get IS_FIREFOX() {
  return gp;
}, get IS_EDGE() {
  return Wi;
}, get IS_CHROMIUM() {
  return Gi;
}, get IS_CHROME() {
  return Ne;
}, get CHROMIUM_VERSION() {
  return Uo;
}, get CHROME_VERSION() {
  return Tr;
}, get IE_VERSION() {
  return fp;
}, get IS_SAFARI() {
  return Sr;
}, get IS_WINDOWS() {
  return Er;
}, get IS_IPAD() {
  return wr;
}, get IS_IPHONE() {
  return zr;
}, get IS_TIZEN() {
  return Bo;
}, get IS_WEBOS() {
  return Fo;
}, get IS_SMART_TV() {
  return qo;
}, TOUCH_ENABLED: dn, IS_IOS: $t, IS_ANY_SAFARI: Wr });
function zu(i) {
  return typeof i == "string" && !!i.trim();
}
function Pv(i) {
  if (i.indexOf(" ") >= 0) throw new Error("class has illegal whitespace characters");
}
function _s() {
  return q === E.document;
}
function vs(i) {
  return Me(i) && i.nodeType === 1;
}
function _p() {
  try {
    return E.parent !== E.self;
  } catch {
    return !0;
  }
}
function vp(i) {
  return function(t, e) {
    if (!zu(t)) return q[i](null);
    zu(e) && (e = q.querySelector(e));
    const s = vs(e) ? e : q;
    return s[i] && s[i](t);
  };
}
function Y(i = "div", t = {}, e = {}, s) {
  const n = q.createElement(i);
  return Object.getOwnPropertyNames(t).forEach(function(r) {
    const a = t[r];
    r === "textContent" ? di(n, a) : n[r] === a && r !== "tabIndex" || (n[r] = a);
  }), Object.getOwnPropertyNames(e).forEach(function(r) {
    n.setAttribute(r, e[r]);
  }), s && Sl(n, s), n;
}
function di(i, t) {
  return i.textContent === void 0 ? i.innerText = t : i.textContent = t, i;
}
function jo(i, t) {
  t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i);
}
function Zs(i, t) {
  return Pv(t), i.classList.contains(t);
}
function Ai(i, ...t) {
  return i.classList.add(...t.reduce((e, s) => e.concat(s.split(/\s+/)), [])), i;
}
function Gr(i, ...t) {
  return i ? (i.classList.remove(...t.reduce((e, s) => e.concat(s.split(/\s+/)), [])), i) : (J.warn("removeClass was called with an element that doesn't exist"), null);
}
function bp(i, t, e) {
  return typeof e == "function" && (e = e(i, t)), typeof e != "boolean" && (e = void 0), t.split(/\s+/).forEach((s) => i.classList.toggle(s, e)), i;
}
function Tp(i, t) {
  Object.getOwnPropertyNames(t).forEach(function(e) {
    const s = t[e];
    s == null || s === !1 ? i.removeAttribute(e) : i.setAttribute(e, s === !0 ? "" : s);
  });
}
function ri(i) {
  const t = {}, e = ["autoplay", "controls", "playsinline", "loop", "muted", "default", "defaultMuted"];
  if (i && i.attributes && i.attributes.length > 0) {
    const s = i.attributes;
    for (let n = s.length - 1; n >= 0; n--) {
      const r = s[n].name;
      let a = s[n].value;
      e.includes(r) && (a = a !== null), t[r] = a;
    }
  }
  return t;
}
function Sp(i, t) {
  return i.getAttribute(t);
}
function ps(i, t, e) {
  i.setAttribute(t, e);
}
function Xr(i, t) {
  i.removeAttribute(t);
}
function Ep() {
  q.body.focus(), q.onselectstart = function() {
    return !1;
  };
}
function wp() {
  q.onselectstart = function() {
    return !0;
  };
}
function ms(i) {
  if (i && i.getBoundingClientRect && i.parentNode) {
    const t = i.getBoundingClientRect(), e = {};
    return ["bottom", "height", "left", "right", "top", "width"].forEach((s) => {
      t[s] !== void 0 && (e[s] = t[s]);
    }), e.height || (e.height = parseFloat(gs(i, "height"))), e.width || (e.width = parseFloat(gs(i, "width"))), e;
  }
}
function cn(i) {
  if (!i || i && !i.offsetParent) return { left: 0, top: 0, width: 0, height: 0 };
  const t = i.offsetWidth, e = i.offsetHeight;
  let s = 0, n = 0;
  for (; i.offsetParent && i !== q[vr.fullscreenElement]; ) s += i.offsetLeft, n += i.offsetTop, i = i.offsetParent;
  return { left: s, top: n, width: t, height: e };
}
function Kr(i, t) {
  const e = { x: 0, y: 0 };
  if ($t) {
    let g = i;
    for (; g && g.nodeName.toLowerCase() !== "html"; ) {
      const y = gs(g, "transform");
      if (/^matrix/.test(y)) {
        const T = y.slice(7, -1).split(/,\s/).map(Number);
        e.x += T[4], e.y += T[5];
      } else if (/^matrix3d/.test(y)) {
        const T = y.slice(9, -1).split(/,\s/).map(Number);
        e.x += T[12], e.y += T[13];
      }
      g = g.parentNode;
    }
  }
  const s = {}, n = cn(t.target), r = cn(i), a = r.width, l = r.height;
  let u = t.offsetY - (r.top - n.top), p = t.offsetX - (r.left - n.left);
  return t.changedTouches && (p = t.changedTouches[0].pageX - r.left, u = t.changedTouches[0].pageY + r.top, $t && (p -= e.x, u -= e.y)), s.y = 1 - Math.max(0, Math.min(1, u / l)), s.x = Math.max(0, Math.min(1, p / a)), s;
}
function Cp(i) {
  return Me(i) && i.nodeType === 3;
}
function Yr(i) {
  for (; i.firstChild; ) i.removeChild(i.firstChild);
  return i;
}
function kp(i) {
  return typeof i == "function" && (i = i()), (Array.isArray(i) ? i : [i]).map((t) => (typeof t == "function" && (t = t()), vs(t) || Cp(t) ? t : typeof t == "string" && /\S/.test(t) ? q.createTextNode(t) : void 0)).filter((t) => t);
}
function Sl(i, t) {
  return kp(t).forEach((e) => i.appendChild(e)), i;
}
function xp(i, t) {
  return Sl(Yr(i), t);
}
function pn(i) {
  return i.button === void 0 && i.buttons === void 0 || i.button === 0 && i.buttons === void 0 || i.type === "mouseup" && i.button === 0 && i.buttons === 0 || i.button === 0 && i.buttons === 1;
}
const li = vp("querySelector"), Ip = vp("querySelectorAll");
function gs(i, t) {
  if (!i || !t) return "";
  if (typeof E.getComputedStyle == "function") {
    let e;
    try {
      e = E.getComputedStyle(i);
    } catch {
      return "";
    }
    return e ? e.getPropertyValue(t) || e[t] : "";
  }
  return "";
}
function Ap(i) {
  [...q.styleSheets].forEach((t) => {
    try {
      const e = [...t.cssRules].map((n) => n.cssText).join(""), s = q.createElement("style");
      s.textContent = e, i.document.head.appendChild(s);
    } catch {
      const s = q.createElement("link");
      s.rel = "stylesheet", s.type = t.type, s.media = t.media.mediaText, s.href = t.href, i.document.head.appendChild(s);
    }
  });
}
var Wu = Object.freeze({ __proto__: null, isReal: _s, isEl: vs, isInFrame: _p, createEl: Y, textContent: di, prependTo: jo, hasClass: Zs, addClass: Ai, removeClass: Gr, toggleClass: bp, setAttributes: Tp, getAttributes: ri, getAttribute: Sp, setAttribute: ps, removeAttribute: Xr, blockTextSelection: Ep, unblockTextSelection: wp, getBoundingClientRect: ms, findPosition: cn, getPointerPosition: Kr, isTextNode: Cp, emptyEl: Yr, normalizeContent: kp, appendContent: Sl, insertContent: xp, isSingleLeftClick: pn, $: li, $$: Ip, computedStyle: gs, copyStyleSheetsToWindow: Ap });
let $o, Pp = !1;
const Dv = function() {
  if ($o.options.autoSetup === !1) return;
  const i = Array.prototype.slice.call(q.getElementsByTagName("video")), t = Array.prototype.slice.call(q.getElementsByTagName("audio")), e = Array.prototype.slice.call(q.getElementsByTagName("video-js")), s = i.concat(t, e);
  if (s && s.length > 0) for (let n = 0, r = s.length; n < r; n++) {
    const a = s[n];
    if (!a || !a.getAttribute) {
      Ho(1);
      break;
    }
    a.player === void 0 && a.getAttribute("data-setup") !== null && $o(a);
  }
  else Pp || Ho(1);
};
function Ho(i, t) {
  _s() && (t && ($o = t), E.setTimeout(Dv, i));
}
function Vo() {
  Pp = !0, E.removeEventListener("load", Vo);
}
_s() && (q.readyState === "complete" ? Vo() : E.addEventListener("load", Vo));
const Dp = function(i) {
  const t = q.createElement("style");
  return t.className = i, t;
}, Lp = function(i, t) {
  i.styleSheet ? i.styleSheet.cssText = t : i.textContent = t;
};
var jt = /* @__PURE__ */ new WeakMap();
let Yn, Lv = 3;
function Te() {
  return Lv++;
}
function Gu(i, t) {
  if (!jt.has(i)) return;
  const e = jt.get(i);
  e.handlers[t].length === 0 && (delete e.handlers[t], i.removeEventListener ? i.removeEventListener(t, e.dispatcher, !1) : i.detachEvent && i.detachEvent("on" + t, e.dispatcher)), Object.getOwnPropertyNames(e.handlers).length <= 0 && (delete e.handlers, delete e.dispatcher, delete e.disabled), Object.getOwnPropertyNames(e).length === 0 && jt.delete(i);
}
function El(i, t, e, s) {
  e.forEach(function(n) {
    i(t, n, s);
  });
}
function Qr(i) {
  if (i.fixed_) return i;
  function t() {
    return !0;
  }
  function e() {
    return !1;
  }
  if (!i || !i.isPropagationStopped || !i.isImmediatePropagationStopped) {
    const s = i || E.event;
    i = {};
    for (const n in s) n !== "layerX" && n !== "layerY" && n !== "keyLocation" && n !== "webkitMovementX" && n !== "webkitMovementY" && n !== "path" && (n === "returnValue" && s.preventDefault || (i[n] = s[n]));
    if (i.target || (i.target = i.srcElement || q), i.relatedTarget || (i.relatedTarget = i.fromElement === i.target ? i.toElement : i.fromElement), i.preventDefault = function() {
      s.preventDefault && s.preventDefault(), i.returnValue = !1, s.returnValue = !1, i.defaultPrevented = !0;
    }, i.defaultPrevented = !1, i.stopPropagation = function() {
      s.stopPropagation && s.stopPropagation(), i.cancelBubble = !0, s.cancelBubble = !0, i.isPropagationStopped = t;
    }, i.isPropagationStopped = e, i.stopImmediatePropagation = function() {
      s.stopImmediatePropagation && s.stopImmediatePropagation(), i.isImmediatePropagationStopped = t, i.stopPropagation();
    }, i.isImmediatePropagationStopped = e, i.clientX !== null && i.clientX !== void 0) {
      const n = q.documentElement, r = q.body;
      i.pageX = i.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), i.pageY = i.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0);
    }
    i.which = i.charCode || i.keyCode, i.button !== null && i.button !== void 0 && (i.button = 1 & i.button ? 0 : 4 & i.button ? 1 : 2 & i.button ? 2 : 0);
  }
  return i.fixed_ = !0, i;
}
const Ov = function() {
  if (typeof Yn != "boolean") {
    Yn = !1;
    try {
      const i = Object.defineProperty({}, "passive", { get() {
        Yn = !0;
      } });
      E.addEventListener("test", null, i), E.removeEventListener("test", null, i);
    } catch {
    }
  }
  return Yn;
}, Nv = ["touchstart", "touchmove"];
function ae(i, t, e) {
  if (Array.isArray(t)) return El(ae, i, t, e);
  jt.has(i) || jt.set(i, {});
  const s = jt.get(i);
  if (s.handlers || (s.handlers = {}), s.handlers[t] || (s.handlers[t] = []), e.guid || (e.guid = Te()), s.handlers[t].push(e), s.dispatcher || (s.disabled = !1, s.dispatcher = function(n, r) {
    if (s.disabled) return;
    n = Qr(n);
    const a = s.handlers[n.type];
    if (a) {
      const l = a.slice(0);
      for (let u = 0, p = l.length; u < p && !n.isImmediatePropagationStopped(); u++) try {
        l[u].call(i, n, r);
      } catch (g) {
        J.error(g);
      }
    }
  }), s.handlers[t].length === 1) if (i.addEventListener) {
    let n = !1;
    Ov() && Nv.indexOf(t) > -1 && (n = { passive: !0 }), i.addEventListener(t, s.dispatcher, n);
  } else i.attachEvent && i.attachEvent("on" + t, s.dispatcher);
}
function Mt(i, t, e) {
  if (!jt.has(i)) return;
  const s = jt.get(i);
  if (!s.handlers) return;
  if (Array.isArray(t)) return El(Mt, i, t, e);
  const n = function(a, l) {
    s.handlers[l] = [], Gu(a, l);
  };
  if (t === void 0) {
    for (const a in s.handlers) Object.prototype.hasOwnProperty.call(s.handlers || {}, a) && n(i, a);
    return;
  }
  const r = s.handlers[t];
  if (r) if (e) {
    if (e.guid) for (let a = 0; a < r.length; a++) r[a].guid === e.guid && r.splice(a--, 1);
    Gu(i, t);
  } else n(i, t);
}
function bs(i, t, e) {
  const s = jt.has(i) ? jt.get(i) : {}, n = i.parentNode || i.ownerDocument;
  if (typeof t == "string" ? t = { type: t, target: i } : t.target || (t.target = i), t = Qr(t), s.dispatcher && s.dispatcher.call(i, t, e), n && !t.isPropagationStopped() && t.bubbles === !0) bs.call(null, n, t, e);
  else if (!n && !t.defaultPrevented && t.target && t.target[t.type]) {
    jt.has(t.target) || jt.set(t.target, {});
    const r = jt.get(t.target);
    t.target[t.type] && (r.disabled = !0, typeof t.target[t.type] == "function" && t.target[t.type](), r.disabled = !1);
  }
  return !t.defaultPrevented;
}
function Jr(i, t, e) {
  if (Array.isArray(t)) return El(Jr, i, t, e);
  const s = function() {
    Mt(i, t, s), e.apply(this, arguments);
  };
  s.guid = e.guid = e.guid || Te(), ae(i, t, s);
}
function wl(i, t, e) {
  const s = function() {
    Mt(i, t, s), e.apply(this, arguments);
  };
  s.guid = e.guid = e.guid || Te(), ae(i, t, s);
}
var Rv = Object.freeze({ __proto__: null, fixEvent: Qr, on: ae, off: Mt, trigger: bs, one: Jr, any: wl });
const ue = 30, ut = function(i, t, e) {
  t.guid || (t.guid = Te());
  const s = t.bind(i);
  return s.guid = e ? e + "_" + t.guid : t.guid, s;
}, Ue = function(i, t) {
  let e = E.performance.now();
  return function(...s) {
    const n = E.performance.now();
    n - e >= t && (i(...s), e = n);
  };
}, Op = function(i, t, e, s = E) {
  let n;
  const r = () => {
    s.clearTimeout(n), n = null;
  }, a = function() {
    const l = this, u = arguments;
    let p = function() {
      n = null, p = null, e || i.apply(l, u);
    };
    !n && e && i.apply(l, u), s.clearTimeout(n), n = s.setTimeout(p, t);
  };
  return a.cancel = r, a;
};
var Mv = Object.freeze({ __proto__: null, UPDATE_REFRESH_INTERVAL: ue, bind_: ut, throttle: Ue, debounce: Op });
let qs;
class le {
  on(t, e) {
    const s = this.addEventListener;
    this.addEventListener = () => {
    }, ae(this, t, e), this.addEventListener = s;
  }
  off(t, e) {
    Mt(this, t, e);
  }
  one(t, e) {
    const s = this.addEventListener;
    this.addEventListener = () => {
    }, Jr(this, t, e), this.addEventListener = s;
  }
  any(t, e) {
    const s = this.addEventListener;
    this.addEventListener = () => {
    }, wl(this, t, e), this.addEventListener = s;
  }
  trigger(t) {
    const e = t.type || t;
    typeof t == "string" && (t = { type: e }), t = Qr(t), this.allowedEvents_[e] && this["on" + e] && this["on" + e](t), bs(this, t);
  }
  queueTrigger(t) {
    qs || (qs = /* @__PURE__ */ new Map());
    const e = t.type || t;
    let s = qs.get(this);
    s || (s = /* @__PURE__ */ new Map(), qs.set(this, s));
    const n = s.get(e);
    s.delete(e), E.clearTimeout(n);
    const r = E.setTimeout(() => {
      s.delete(e), s.size === 0 && (s = null, qs.delete(this)), this.trigger(t);
    }, 0);
    s.set(e, r);
  }
}
le.prototype.allowedEvents_ = {}, le.prototype.addEventListener = le.prototype.on, le.prototype.removeEventListener = le.prototype.off, le.prototype.dispatchEvent = le.prototype.trigger;
const Zr = (i) => typeof i.name == "function" ? i.name() : typeof i.name == "string" ? i.name : i.name_ ? i.name_ : i.constructor && i.constructor.name ? i.constructor.name : typeof i, Xe = (i) => i instanceof le || !!i.eventBusEl_ && ["on", "one", "off", "trigger"].every((t) => typeof i[t] == "function"), Uv = (i, t) => {
  Xe(i) ? t() : (i.eventedCallbacks || (i.eventedCallbacks = []), i.eventedCallbacks.push(t));
}, zo = (i) => typeof i == "string" && /\S/.test(i) || Array.isArray(i) && !!i.length, Cr = (i, t, e) => {
  if (!i || !i.nodeName && !Xe(i)) throw new Error(`Invalid target for ${Zr(t)}#${e}; must be a DOM node or evented object.`);
}, Np = (i, t, e) => {
  if (!zo(i)) throw new Error(`Invalid event type for ${Zr(t)}#${e}; must be a non-empty string or array.`);
}, Rp = (i, t, e) => {
  if (typeof i != "function") throw new Error(`Invalid listener for ${Zr(t)}#${e}; must be a function.`);
}, Ga = (i, t, e) => {
  const s = t.length < 3 || t[0] === i || t[0] === i.eventBusEl_;
  let n, r, a;
  return s ? (n = i.eventBusEl_, t.length >= 3 && t.shift(), [r, a] = t) : [n, r, a] = t, Cr(n, i, e), Np(r, i, e), Rp(a, i, e), a = ut(i, a), { isTargetingSelf: s, target: n, type: r, listener: a };
}, bi = (i, t, e, s) => {
  Cr(i, i, t), i.nodeName ? Rv[t](i, e, s) : i[t](e, s);
}, Bv = { on(...i) {
  const { isTargetingSelf: t, target: e, type: s, listener: n } = Ga(this, i, "on");
  if (bi(e, "on", s, n), !t) {
    const r = () => this.off(e, s, n);
    r.guid = n.guid;
    const a = () => this.off("dispose", r);
    a.guid = n.guid, bi(this, "on", "dispose", r), bi(e, "on", "dispose", a);
  }
}, one(...i) {
  const { isTargetingSelf: t, target: e, type: s, listener: n } = Ga(this, i, "one");
  if (t) bi(e, "one", s, n);
  else {
    const r = (...a) => {
      this.off(e, s, r), n.apply(null, a);
    };
    r.guid = n.guid, bi(e, "one", s, r);
  }
}, any(...i) {
  const { isTargetingSelf: t, target: e, type: s, listener: n } = Ga(this, i, "any");
  if (t) bi(e, "any", s, n);
  else {
    const r = (...a) => {
      this.off(e, s, r), n.apply(null, a);
    };
    r.guid = n.guid, bi(e, "any", s, r);
  }
}, off(i, t, e) {
  if (!i || zo(i)) Mt(this.eventBusEl_, i, t);
  else {
    const s = i, n = t;
    Cr(s, this, "off"), Np(n, this, "off"), Rp(e, this, "off"), e = ut(this, e), this.off("dispose", e), s.nodeName ? (Mt(s, n, e), Mt(s, "dispose", e)) : Xe(s) && (s.off(n, e), s.off("dispose", e));
  }
}, trigger(i, t) {
  Cr(this.eventBusEl_, this, "trigger");
  const e = i && typeof i != "string" ? i.type : i;
  if (!zo(e)) throw new Error(`Invalid event type for ${Zr(this)}#trigger; must be a non-empty string or object with a type key that has a non-empty value.`);
  return bs(this.eventBusEl_, i, t);
} };
function Cl(i, t = {}) {
  const { eventBusKey: e } = t;
  if (e) {
    if (!i[e].nodeName) throw new Error(`The eventBusKey "${e}" does not refer to an element.`);
    i.eventBusEl_ = i[e];
  } else i.eventBusEl_ = Y("span", { className: "vjs-event-bus" });
  return Object.assign(i, Bv), i.eventedCallbacks && i.eventedCallbacks.forEach((s) => {
    s();
  }), i.on("dispose", () => {
    i.off(), [i, i.el_, i.eventBusEl_].forEach(function(s) {
      s && jt.has(s) && jt.delete(s);
    }), E.setTimeout(() => {
      i.eventBusEl_ = null;
    }, 0);
  }), i;
}
const Fv = { state: {}, setState(i) {
  let t;
  return typeof i == "function" && (i = i()), is(i, (e, s) => {
    this.state[s] !== e && (t = t || {}, t[s] = { from: this.state[s], to: e }), this.state[s] = e;
  }), t && Xe(this) && this.trigger({ changes: t, type: "statechanged" }), t;
} };
function Mp(i, t) {
  return Object.assign(i, Fv), i.state = Object.assign({}, i.state, t), typeof i.handleStateChanged == "function" && Xe(i) && i.on("statechanged", i.handleStateChanged), i;
}
const tn = function(i) {
  return typeof i != "string" ? i : i.replace(/./, (t) => t.toLowerCase());
}, Et = function(i) {
  return typeof i != "string" ? i : i.replace(/./, (t) => t.toUpperCase());
}, Up = function(i, t) {
  return Et(i) === Et(t);
};
var qv = Object.freeze({ __proto__: null, toLowerCase: tn, toTitleCase: Et, titleCaseEquals: Up });
class R {
  constructor(t, e, s) {
    if (!t && this.play ? this.player_ = t = this : this.player_ = t, this.isDisposed_ = !1, this.parentComponent_ = null, this.options_ = ht({}, this.options_), e = this.options_ = ht(this.options_, e), this.id_ = e.id || e.el && e.el.id, !this.id_) {
      const n = t && t.id && t.id() || "no_player";
      this.id_ = `${n}_component_${Te()}`;
    }
    this.name_ = e.name || null, e.el ? this.el_ = e.el : e.createEl !== !1 && (this.el_ = this.createEl()), e.className && this.el_ && e.className.split(" ").forEach((n) => this.addClass(n)), ["on", "off", "one", "any", "trigger"].forEach((n) => {
      this[n] = void 0;
    }), e.evented !== !1 && (Cl(this, { eventBusKey: this.el_ ? "el_" : null }), this.handleLanguagechange = this.handleLanguagechange.bind(this), this.on(this.player_, "languagechange", this.handleLanguagechange)), Mp(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, this.setTimeoutIds_ = /* @__PURE__ */ new Set(), this.setIntervalIds_ = /* @__PURE__ */ new Set(), this.rafIds_ = /* @__PURE__ */ new Set(), this.namedRafs_ = /* @__PURE__ */ new Map(), this.clearingTimersOnDispose_ = !1, e.initChildren !== !1 && this.initChildren(), this.ready(s), e.reportTouchActivity !== !1 && this.enableTouchActivity();
  }
  on(t, e) {
  }
  off(t, e) {
  }
  one(t, e) {
  }
  any(t, e) {
  }
  trigger(t, e) {
  }
  dispose(t = {}) {
    if (!this.isDisposed_) {
      if (this.readyQueue_ && (this.readyQueue_.length = 0), this.trigger({ type: "dispose", bubbles: !1 }), this.isDisposed_ = !0, this.children_) for (let e = this.children_.length - 1; e >= 0; e--) this.children_[e].dispose && this.children_[e].dispose();
      this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.parentComponent_ = null, this.el_ && (this.el_.parentNode && (t.restoreEl ? this.el_.parentNode.replaceChild(t.restoreEl, this.el_) : this.el_.parentNode.removeChild(this.el_)), this.el_ = null), this.player_ = null;
    }
  }
  isDisposed() {
    return !!this.isDisposed_;
  }
  player() {
    return this.player_;
  }
  options(t) {
    return t ? (this.options_ = ht(this.options_, t), this.options_) : this.options_;
  }
  el() {
    return this.el_;
  }
  createEl(t, e, s) {
    return Y(t, e, s);
  }
  localize(t, e, s = t) {
    const n = this.player_.language && this.player_.language(), r = this.player_.languages && this.player_.languages(), a = r && r[n], l = n && n.split("-")[0], u = r && r[l];
    let p = s;
    return a && a[t] ? p = a[t] : u && u[t] && (p = u[t]), e && (p = p.replace(/\{(\d+)\}/g, function(g, y) {
      const T = e[y - 1];
      let C = T;
      return T === void 0 && (C = g), C;
    })), p;
  }
  handleLanguagechange() {
  }
  contentEl() {
    return this.contentEl_ || this.el_;
  }
  id() {
    return this.id_;
  }
  name() {
    return this.name_;
  }
  children() {
    return this.children_;
  }
  getChildById(t) {
    return this.childIndex_[t];
  }
  getChild(t) {
    if (t) return this.childNameIndex_[t];
  }
  getDescendant(...t) {
    t = t.reduce((s, n) => s.concat(n), []);
    let e = this;
    for (let s = 0; s < t.length; s++) if (e = e.getChild(t[s]), !e || !e.getChild) return;
    return e;
  }
  setIcon(t, e = this.el()) {
    if (!this.player_.options_.experimentalSvgIcons) return;
    const s = "http://www.w3.org/2000/svg", n = Y("span", { className: "vjs-icon-placeholder vjs-svg-icon" }, { "aria-hidden": "true" }), r = q.createElementNS(s, "svg");
    r.setAttributeNS(null, "viewBox", "0 0 512 512");
    const a = q.createElementNS(s, "use");
    return r.appendChild(a), a.setAttributeNS(null, "href", `#vjs-icon-${t}`), n.appendChild(r), this.iconIsSet_ ? e.replaceChild(n, e.querySelector(".vjs-icon-placeholder")) : e.appendChild(n), this.iconIsSet_ = !0, n;
  }
  addChild(t, e = {}, s = this.children_.length) {
    let n, r;
    if (typeof t == "string") {
      r = Et(t);
      const a = e.componentClass || r;
      e.name = r;
      const l = R.getComponent(a);
      if (!l) throw new Error(`Component ${a} does not exist`);
      if (typeof l != "function") return null;
      n = new l(this.player_ || this, e);
    } else n = t;
    if (n.parentComponent_ && n.parentComponent_.removeChild(n), this.children_.splice(s, 0, n), n.parentComponent_ = this, typeof n.id == "function" && (this.childIndex_[n.id()] = n), r = r || n.name && Et(n.name()), r && (this.childNameIndex_[r] = n, this.childNameIndex_[tn(r)] = n), typeof n.el == "function" && n.el()) {
      let a = null;
      this.children_[s + 1] && (this.children_[s + 1].el_ ? a = this.children_[s + 1].el_ : vs(this.children_[s + 1]) && (a = this.children_[s + 1])), this.contentEl().insertBefore(n.el(), a);
    }
    return n;
  }
  removeChild(t) {
    if (typeof t == "string" && (t = this.getChild(t)), !t || !this.children_) return;
    let e = !1;
    for (let n = this.children_.length - 1; n >= 0; n--) if (this.children_[n] === t) {
      e = !0, this.children_.splice(n, 1);
      break;
    }
    if (!e) return;
    t.parentComponent_ = null, this.childIndex_[t.id()] = null, this.childNameIndex_[Et(t.name())] = null, this.childNameIndex_[tn(t.name())] = null;
    const s = t.el();
    s && s.parentNode === this.contentEl() && this.contentEl().removeChild(t.el());
  }
  initChildren() {
    const t = this.options_.children;
    if (t) {
      const e = this.options_, s = (a) => {
        const l = a.name;
        let u = a.opts;
        if (e[l] !== void 0 && (u = e[l]), u === !1) return;
        u === !0 && (u = {}), u.playerOptions = this.options_.playerOptions;
        const p = this.addChild(l, u);
        p && (this[l] = p);
      };
      let n;
      const r = R.getComponent("Tech");
      n = Array.isArray(t) ? t : Object.keys(t), n.concat(Object.keys(this.options_).filter(function(a) {
        return !n.some(function(l) {
          return typeof l == "string" ? a === l : a === l.name;
        });
      })).map((a) => {
        let l, u;
        return typeof a == "string" ? (l = a, u = t[l] || this.options_[l] || {}) : (l = a.name, u = a), { name: l, opts: u };
      }).filter((a) => {
        const l = R.getComponent(a.opts.componentClass || Et(a.name));
        return l && !r.isTech(l);
      }).forEach(s);
    }
  }
  buildCSSClass() {
    return "";
  }
  ready(t, e = !1) {
    if (t) return this.isReady_ ? void (e ? t.call(this) : this.setTimeout(t, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(t));
  }
  triggerReady() {
    this.isReady_ = !0, this.setTimeout(function() {
      const t = this.readyQueue_;
      this.readyQueue_ = [], t && t.length > 0 && t.forEach(function(e) {
        e.call(this);
      }, this), this.trigger("ready");
    }, 1);
  }
  $(t, e) {
    return li(t, e || this.contentEl());
  }
  $$(t, e) {
    return Ip(t, e || this.contentEl());
  }
  hasClass(t) {
    return Zs(this.el_, t);
  }
  addClass(...t) {
    Ai(this.el_, ...t);
  }
  removeClass(...t) {
    Gr(this.el_, ...t);
  }
  toggleClass(t, e) {
    bp(this.el_, t, e);
  }
  show() {
    this.removeClass("vjs-hidden");
  }
  hide() {
    this.addClass("vjs-hidden");
  }
  lockShowing() {
    this.addClass("vjs-lock-showing");
  }
  unlockShowing() {
    this.removeClass("vjs-lock-showing");
  }
  getAttribute(t) {
    return Sp(this.el_, t);
  }
  setAttribute(t, e) {
    ps(this.el_, t, e);
  }
  removeAttribute(t) {
    Xr(this.el_, t);
  }
  width(t, e) {
    return this.dimension("width", t, e);
  }
  height(t, e) {
    return this.dimension("height", t, e);
  }
  dimensions(t, e) {
    this.width(t, !0), this.height(e);
  }
  dimension(t, e, s) {
    if (e !== void 0) return e !== null && e == e || (e = 0), ("" + e).indexOf("%") !== -1 || ("" + e).indexOf("px") !== -1 ? this.el_.style[t] = e : this.el_.style[t] = e === "auto" ? "" : e + "px", void (s || this.trigger("componentresize"));
    if (!this.el_) return 0;
    const n = this.el_.style[t], r = n.indexOf("px");
    return parseInt(r !== -1 ? n.slice(0, r) : this.el_["offset" + Et(t)], 10);
  }
  currentDimension(t) {
    let e = 0;
    if (t !== "width" && t !== "height") throw new Error("currentDimension only accepts width or height value");
    if (e = gs(this.el_, t), e = parseFloat(e), e === 0 || isNaN(e)) {
      const s = `offset${Et(t)}`;
      e = this.el_[s];
    }
    return e;
  }
  currentDimensions() {
    return { width: this.currentDimension("width"), height: this.currentDimension("height") };
  }
  currentWidth() {
    return this.currentDimension("width");
  }
  currentHeight() {
    return this.currentDimension("height");
  }
  focus() {
    this.el_.focus();
  }
  blur() {
    this.el_.blur();
  }
  handleKeyDown(t) {
    this.player_ && (X.isEventKey(t, "Tab") || t.stopPropagation(), this.player_.handleKeyDown(t));
  }
  handleKeyPress(t) {
    this.handleKeyDown(t);
  }
  emitTapEvents() {
    let t = 0, e = null;
    const s = 10, n = 200;
    let r;
    this.on("touchstart", function(l) {
      l.touches.length === 1 && (e = { pageX: l.touches[0].pageX, pageY: l.touches[0].pageY }, t = E.performance.now(), r = !0);
    }), this.on("touchmove", function(l) {
      if (l.touches.length > 1) r = !1;
      else if (e) {
        const u = l.touches[0].pageX - e.pageX, p = l.touches[0].pageY - e.pageY;
        Math.sqrt(u * u + p * p) > s && (r = !1);
      }
    });
    const a = function() {
      r = !1;
    };
    this.on("touchleave", a), this.on("touchcancel", a), this.on("touchend", function(l) {
      e = null, r === !0 && E.performance.now() - t < n && (l.preventDefault(), this.trigger("tap"));
    });
  }
  enableTouchActivity() {
    if (!this.player() || !this.player().reportUserActivity) return;
    const t = ut(this.player(), this.player().reportUserActivity);
    let e;
    this.on("touchstart", function() {
      t(), this.clearInterval(e), e = this.setInterval(t, 250);
    });
    const s = function(n) {
      t(), this.clearInterval(e);
    };
    this.on("touchmove", t), this.on("touchend", s), this.on("touchcancel", s);
  }
  setTimeout(t, e) {
    var s;
    return t = ut(this, t), this.clearTimersOnDispose_(), s = E.setTimeout(() => {
      this.setTimeoutIds_.has(s) && this.setTimeoutIds_.delete(s), t();
    }, e), this.setTimeoutIds_.add(s), s;
  }
  clearTimeout(t) {
    return this.setTimeoutIds_.has(t) && (this.setTimeoutIds_.delete(t), E.clearTimeout(t)), t;
  }
  setInterval(t, e) {
    t = ut(this, t), this.clearTimersOnDispose_();
    const s = E.setInterval(t, e);
    return this.setIntervalIds_.add(s), s;
  }
  clearInterval(t) {
    return this.setIntervalIds_.has(t) && (this.setIntervalIds_.delete(t), E.clearInterval(t)), t;
  }
  requestAnimationFrame(t) {
    var e;
    return this.clearTimersOnDispose_(), t = ut(this, t), e = E.requestAnimationFrame(() => {
      this.rafIds_.has(e) && this.rafIds_.delete(e), t();
    }), this.rafIds_.add(e), e;
  }
  requestNamedAnimationFrame(t, e) {
    if (this.namedRafs_.has(t)) return;
    this.clearTimersOnDispose_(), e = ut(this, e);
    const s = this.requestAnimationFrame(() => {
      e(), this.namedRafs_.has(t) && this.namedRafs_.delete(t);
    });
    return this.namedRafs_.set(t, s), t;
  }
  cancelNamedAnimationFrame(t) {
    this.namedRafs_.has(t) && (this.cancelAnimationFrame(this.namedRafs_.get(t)), this.namedRafs_.delete(t));
  }
  cancelAnimationFrame(t) {
    return this.rafIds_.has(t) && (this.rafIds_.delete(t), E.cancelAnimationFrame(t)), t;
  }
  clearTimersOnDispose_() {
    this.clearingTimersOnDispose_ || (this.clearingTimersOnDispose_ = !0, this.one("dispose", () => {
      [["namedRafs_", "cancelNamedAnimationFrame"], ["rafIds_", "cancelAnimationFrame"], ["setTimeoutIds_", "clearTimeout"], ["setIntervalIds_", "clearInterval"]].forEach(([t, e]) => {
        this[t].forEach((s, n) => this[e](n));
      }), this.clearingTimersOnDispose_ = !1;
    }));
  }
  static registerComponent(t, e) {
    if (typeof t != "string" || !t) throw new Error(`Illegal component name, "${t}"; must be a non-empty string.`);
    const s = R.getComponent("Tech"), n = s && s.isTech(e), r = R === e || R.prototype.isPrototypeOf(e.prototype);
    if (n || !r) {
      let l;
      throw l = n ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error(`Illegal component, "${t}"; ${l}.`);
    }
    t = Et(t), R.components_ || (R.components_ = {});
    const a = R.getComponent("Player");
    if (t === "Player" && a && a.players) {
      const l = a.players, u = Object.keys(l);
      if (l && u.length > 0 && u.map((p) => l[p]).every(Boolean)) throw new Error("Can not register Player component after player has been created.");
    }
    return R.components_[t] = e, R.components_[tn(t)] = e, e;
  }
  static getComponent(t) {
    if (t && R.components_) return R.components_[t];
  }
}
function jv(i, t, e) {
  if (typeof t != "number" || t < 0 || t > e) throw new Error(`Failed to execute '${i}' on 'TimeRanges': The index provided (${t}) is non-numeric or out of bounds (0-${e}).`);
}
function Xu(i, t, e, s) {
  return jv(i, s, e.length - 1), e[s][t];
}
function Xa(i) {
  let t;
  return t = i === void 0 || i.length === 0 ? { length: 0, start() {
    throw new Error("This TimeRanges object is empty");
  }, end() {
    throw new Error("This TimeRanges object is empty");
  } } : { length: i.length, start: Xu.bind(null, "start", 0, i), end: Xu.bind(null, "end", 1, i) }, E.Symbol && E.Symbol.iterator && (t[E.Symbol.iterator] = () => (i || []).values()), t;
}
function be(i, t) {
  return Array.isArray(i) ? Xa(i) : i === void 0 || t === void 0 ? Xa() : Xa([[i, t]]);
}
R.registerComponent("Component", R);
const Bp = function(i, t) {
  i = i < 0 ? 0 : i;
  let e = Math.floor(i % 60), s = Math.floor(i / 60 % 60), n = Math.floor(i / 3600);
  const r = Math.floor(t / 60 % 60), a = Math.floor(t / 3600);
  return (isNaN(i) || i === 1 / 0) && (n = s = e = "-"), n = n > 0 || a > 0 ? n + ":" : "", s = ((n || r >= 10) && s < 10 ? "0" + s : s) + ":", e = e < 10 ? "0" + e : e, n + s + e;
};
let kl = Bp;
function Fp(i) {
  kl = i;
}
function qp() {
  kl = Bp;
}
function Di(i, t = i) {
  return kl(i, t);
}
var $v = Object.freeze({ __proto__: null, createTimeRanges: be, createTimeRange: be, setFormatTime: Fp, resetFormatTime: qp, formatTime: Di });
function jp(i, t) {
  let e, s, n = 0;
  if (!t) return 0;
  i && i.length || (i = be(0, 0));
  for (let r = 0; r < i.length; r++) e = i.start(r), s = i.end(r), s > t && (s = t), n += s - e;
  return n / t;
}
function _t(i) {
  if (i instanceof _t) return i;
  typeof i == "number" ? this.code = i : typeof i == "string" ? this.message = i : Me(i) && (typeof i.code == "number" && (this.code = i.code), Object.assign(this, i)), this.message || (this.message = _t.defaultMessages[this.code] || "");
}
function en(i) {
  return i != null && typeof i.then == "function";
}
function xe(i) {
  en(i) && i.then(null, (t) => {
  });
}
_t.prototype.code = 0, _t.prototype.message = "", _t.prototype.status = null, _t.prototype.metadata = null, _t.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], _t.defaultMessages = { 1: "You aborted the media playback", 2: "A network error caused the media download to fail part-way.", 3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.", 4: "The media could not be loaded, either because the server or network failed or because the format is not supported.", 5: "The media is encrypted and we do not have the keys to decrypt it." }, _t.MEDIA_ERR_CUSTOM = 0, _t.prototype.MEDIA_ERR_CUSTOM = 0, _t.MEDIA_ERR_ABORTED = 1, _t.prototype.MEDIA_ERR_ABORTED = 1, _t.MEDIA_ERR_NETWORK = 2, _t.prototype.MEDIA_ERR_NETWORK = 2, _t.MEDIA_ERR_DECODE = 3, _t.prototype.MEDIA_ERR_DECODE = 3, _t.MEDIA_ERR_SRC_NOT_SUPPORTED = 4, _t.prototype.MEDIA_ERR_SRC_NOT_SUPPORTED = 4, _t.MEDIA_ERR_ENCRYPTED = 5, _t.prototype.MEDIA_ERR_ENCRYPTED = 5;
const Ka = function(i) {
  return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce((t, e, s) => (i[e] && (t[e] = i[e]), t), { cues: i.cues && Array.prototype.map.call(i.cues, function(t) {
    return { startTime: t.startTime, endTime: t.endTime, text: t.text, id: t.id };
  }) });
};
var Ku = { textTracksToJson: function(i) {
  const t = i.$$("track"), e = Array.prototype.map.call(t, (s) => s.track);
  return Array.prototype.map.call(t, function(s) {
    const n = Ka(s.track);
    return s.src && (n.src = s.src), n;
  }).concat(Array.prototype.filter.call(i.textTracks(), function(s) {
    return e.indexOf(s) === -1;
  }).map(Ka));
}, jsonToTextTracks: function(i, t) {
  return i.forEach(function(e) {
    const s = t.addRemoteTextTrack(e).track;
    !e.src && e.cues && e.cues.forEach((n) => s.addCue(n));
  }), t.textTracks();
}, trackToJson_: Ka };
const Ya = "vjs-modal-dialog";
class fs extends R {
  constructor(t, e) {
    super(t, e), this.handleKeyDown_ = (s) => this.handleKeyDown(s), this.close_ = (s) => this.close(s), this.opened_ = this.hasBeenOpened_ = this.hasBeenFilled_ = !1, this.closeable(!this.options_.uncloseable), this.content(this.options_.content), this.contentEl_ = Y("div", { className: `${Ya}-content` }, { role: "document" }), this.descEl_ = Y("p", { className: `${Ya}-description vjs-control-text`, id: this.el().getAttribute("aria-describedby") }), di(this.descEl_, this.description()), this.el_.appendChild(this.descEl_), this.el_.appendChild(this.contentEl_);
  }
  createEl() {
    return super.createEl("div", { className: this.buildCSSClass(), tabIndex: -1 }, { "aria-describedby": `${this.id()}_description`, "aria-hidden": "true", "aria-label": this.label(), role: "dialog", "aria-live": "polite" });
  }
  dispose() {
    this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, super.dispose();
  }
  buildCSSClass() {
    return `${Ya} vjs-hidden ${super.buildCSSClass()}`;
  }
  label() {
    return this.localize(this.options_.label || "Modal Window");
  }
  description() {
    let t = this.options_.description || this.localize("This is a modal window.");
    return this.closeable() && (t += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), t;
  }
  open() {
    if (this.opened_) return void (this.options_.fillAlways && this.fill());
    const t = this.player();
    this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !t.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && t.pause(), this.on("keydown", this.handleKeyDown_), this.hadControls_ = t.controls(), t.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0;
  }
  opened(t) {
    return typeof t == "boolean" && this[t ? "open" : "close"](), this.opened_;
  }
  close() {
    if (!this.opened_) return;
    const t = this.player();
    this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && t.play(), this.off("keydown", this.handleKeyDown_), this.hadControls_ && t.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose();
  }
  closeable(t) {
    if (typeof t == "boolean") {
      const e = this.closeable_ = !!t;
      let s = this.getChild("closeButton");
      if (e && !s) {
        const n = this.contentEl_;
        this.contentEl_ = this.el_, s = this.addChild("closeButton", { controlText: "Close Modal Dialog" }), this.contentEl_ = n, this.on(s, "close", this.close_);
      }
      !e && s && (this.off(s, "close", this.close_), this.removeChild(s), s.dispose());
    }
    return this.closeable_;
  }
  fill() {
    this.fillWith(this.content());
  }
  fillWith(t) {
    const e = this.contentEl(), s = e.parentNode, n = e.nextSibling;
    this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, s.removeChild(e), this.empty(), xp(e, t), this.trigger("modalfill"), n ? s.insertBefore(e, n) : s.appendChild(e);
    const r = this.getChild("closeButton");
    r && s.appendChild(r.el_);
  }
  empty() {
    this.trigger("beforemodalempty"), Yr(this.contentEl()), this.trigger("modalempty");
  }
  content(t) {
    return t !== void 0 && (this.content_ = t), this.content_;
  }
  conditionalFocus_() {
    const t = q.activeElement, e = this.player_.el_;
    this.previouslyActiveEl_ = null, (e.contains(t) || e === t) && (this.previouslyActiveEl_ = t, this.focus());
  }
  conditionalBlur_() {
    this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null);
  }
  handleKeyDown(t) {
    if (t.stopPropagation(), X.isEventKey(t, "Escape") && this.closeable()) return t.preventDefault(), void this.close();
    if (!X.isEventKey(t, "Tab")) return;
    const e = this.focusableEls_(), s = this.el_.querySelector(":focus");
    let n;
    for (let r = 0; r < e.length; r++) if (s === e[r]) {
      n = r;
      break;
    }
    q.activeElement === this.el_ && (n = 0), t.shiftKey && n === 0 ? (e[e.length - 1].focus(), t.preventDefault()) : t.shiftKey || n !== e.length - 1 || (e[0].focus(), t.preventDefault());
  }
  focusableEls_() {
    const t = this.el_.querySelectorAll("*");
    return Array.prototype.filter.call(t, (e) => (e instanceof E.HTMLAnchorElement || e instanceof E.HTMLAreaElement) && e.hasAttribute("href") || (e instanceof E.HTMLInputElement || e instanceof E.HTMLSelectElement || e instanceof E.HTMLTextAreaElement || e instanceof E.HTMLButtonElement) && !e.hasAttribute("disabled") || e instanceof E.HTMLIFrameElement || e instanceof E.HTMLObjectElement || e instanceof E.HTMLEmbedElement || e.hasAttribute("tabindex") && e.getAttribute("tabindex") !== -1 || e.hasAttribute("contenteditable"));
  }
}
fs.prototype.options_ = { pauseOnOpen: !0, temporary: !0 }, R.registerComponent("ModalDialog", fs);
class ys extends le {
  constructor(t = []) {
    super(), this.tracks_ = [], Object.defineProperty(this, "length", { get() {
      return this.tracks_.length;
    } });
    for (let e = 0; e < t.length; e++) this.addTrack(t[e]);
  }
  addTrack(t) {
    const e = this.tracks_.length;
    "" + e in this || Object.defineProperty(this, e, { get() {
      return this.tracks_[e];
    } }), this.tracks_.indexOf(t) === -1 && (this.tracks_.push(t), this.trigger({ track: t, type: "addtrack", target: this })), t.labelchange_ = () => {
      this.trigger({ track: t, type: "labelchange", target: this });
    }, Xe(t) && t.addEventListener("labelchange", t.labelchange_);
  }
  removeTrack(t) {
    let e;
    for (let s = 0, n = this.length; s < n; s++) if (this[s] === t) {
      e = this[s], e.off && e.off(), this.tracks_.splice(s, 1);
      break;
    }
    e && this.trigger({ track: e, type: "removetrack", target: this });
  }
  getTrackById(t) {
    let e = null;
    for (let s = 0, n = this.length; s < n; s++) {
      const r = this[s];
      if (r.id === t) {
        e = r;
        break;
      }
    }
    return e;
  }
}
ys.prototype.allowedEvents_ = { change: "change", addtrack: "addtrack", removetrack: "removetrack", labelchange: "labelchange" };
for (const i in ys.prototype.allowedEvents_) ys.prototype["on" + i] = null;
const Qa = function(i, t) {
  for (let e = 0; e < i.length; e++) Object.keys(i[e]).length && t.id !== i[e].id && (i[e].enabled = !1);
};
class Hv extends ys {
  constructor(t = []) {
    for (let e = t.length - 1; e >= 0; e--) if (t[e].enabled) {
      Qa(t, t[e]);
      break;
    }
    super(t), this.changing_ = !1;
  }
  addTrack(t) {
    t.enabled && Qa(this, t), super.addTrack(t), t.addEventListener && (t.enabledChange_ = () => {
      this.changing_ || (this.changing_ = !0, Qa(this, t), this.changing_ = !1, this.trigger("change"));
    }, t.addEventListener("enabledchange", t.enabledChange_));
  }
  removeTrack(t) {
    super.removeTrack(t), t.removeEventListener && t.enabledChange_ && (t.removeEventListener("enabledchange", t.enabledChange_), t.enabledChange_ = null);
  }
}
const Ja = function(i, t) {
  for (let e = 0; e < i.length; e++) Object.keys(i[e]).length && t.id !== i[e].id && (i[e].selected = !1);
};
class Vv extends ys {
  constructor(t = []) {
    for (let e = t.length - 1; e >= 0; e--) if (t[e].selected) {
      Ja(t, t[e]);
      break;
    }
    super(t), this.changing_ = !1, Object.defineProperty(this, "selectedIndex", { get() {
      for (let e = 0; e < this.length; e++) if (this[e].selected) return e;
      return -1;
    }, set() {
    } });
  }
  addTrack(t) {
    t.selected && Ja(this, t), super.addTrack(t), t.addEventListener && (t.selectedChange_ = () => {
      this.changing_ || (this.changing_ = !0, Ja(this, t), this.changing_ = !1, this.trigger("change"));
    }, t.addEventListener("selectedchange", t.selectedChange_));
  }
  removeTrack(t) {
    super.removeTrack(t), t.removeEventListener && t.selectedChange_ && (t.removeEventListener("selectedchange", t.selectedChange_), t.selectedChange_ = null);
  }
}
class $p extends ys {
  addTrack(t) {
    super.addTrack(t), this.queueChange_ || (this.queueChange_ = () => this.queueTrigger("change")), this.triggerSelectedlanguagechange || (this.triggerSelectedlanguagechange_ = () => this.trigger("selectedlanguagechange")), t.addEventListener("modechange", this.queueChange_), ["metadata", "chapters"].indexOf(t.kind) === -1 && t.addEventListener("modechange", this.triggerSelectedlanguagechange_);
  }
  removeTrack(t) {
    super.removeTrack(t), t.removeEventListener && (this.queueChange_ && t.removeEventListener("modechange", this.queueChange_), this.selectedlanguagechange_ && t.removeEventListener("modechange", this.triggerSelectedlanguagechange_));
  }
}
class zv {
  constructor(t = []) {
    this.trackElements_ = [], Object.defineProperty(this, "length", { get() {
      return this.trackElements_.length;
    } });
    for (let e = 0, s = t.length; e < s; e++) this.addTrackElement_(t[e]);
  }
  addTrackElement_(t) {
    const e = this.trackElements_.length;
    "" + e in this || Object.defineProperty(this, e, { get() {
      return this.trackElements_[e];
    } }), this.trackElements_.indexOf(t) === -1 && this.trackElements_.push(t);
  }
  getTrackElementByTrack_(t) {
    let e;
    for (let s = 0, n = this.trackElements_.length; s < n; s++) if (t === this.trackElements_[s].track) {
      e = this.trackElements_[s];
      break;
    }
    return e;
  }
  removeTrackElement_(t) {
    for (let e = 0, s = this.trackElements_.length; e < s; e++) if (t === this.trackElements_[e]) {
      this.trackElements_[e].track && typeof this.trackElements_[e].track.off == "function" && this.trackElements_[e].track.off(), typeof this.trackElements_[e].off == "function" && this.trackElements_[e].off(), this.trackElements_.splice(e, 1);
      break;
    }
  }
}
class kr {
  constructor(t) {
    kr.prototype.setCues_.call(this, t), Object.defineProperty(this, "length", { get() {
      return this.length_;
    } });
  }
  setCues_(t) {
    const e = this.length || 0;
    let s = 0;
    const n = t.length;
    this.cues_ = t, this.length_ = t.length;
    const r = function(a) {
      "" + a in this || Object.defineProperty(this, "" + a, { get() {
        return this.cues_[a];
      } });
    };
    if (e < n) for (s = e; s < n; s++) r.call(this, s);
  }
  getCueById(t) {
    let e = null;
    for (let s = 0, n = this.length; s < n; s++) {
      const r = this[s];
      if (r.id === t) {
        e = r;
        break;
      }
    }
    return e;
  }
}
const Wv = { alternative: "alternative", captions: "captions", main: "main", sign: "sign", subtitles: "subtitles", commentary: "commentary" }, Gv = { alternative: "alternative", descriptions: "descriptions", main: "main", "main-desc": "main-desc", translation: "translation", commentary: "commentary" }, Xv = { subtitles: "subtitles", captions: "captions", descriptions: "descriptions", chapters: "chapters", metadata: "metadata" }, Yu = { disabled: "disabled", hidden: "hidden", showing: "showing" };
class xl extends le {
  constructor(t = {}) {
    super();
    const e = { id: t.id || "vjs_track_" + Te(), kind: t.kind || "", language: t.language || "" };
    let s = t.label || "";
    for (const n in e) Object.defineProperty(this, n, { get: () => e[n], set() {
    } });
    Object.defineProperty(this, "label", { get: () => s, set(n) {
      n !== s && (s = n, this.trigger("labelchange"));
    } });
  }
}
const Il = function(i) {
  const t = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"], e = q.createElement("a");
  e.href = i;
  const s = {};
  for (let n = 0; n < t.length; n++) s[t[n]] = e[t[n]];
  return s.protocol === "http:" && (s.host = s.host.replace(/:80$/, "")), s.protocol === "https:" && (s.host = s.host.replace(/:443$/, "")), s.protocol || (s.protocol = E.location.protocol), s.host || (s.host = E.location.host), s;
}, Hp = function(i) {
  if (!i.match(/^https?:\/\//)) {
    const t = q.createElement("a");
    t.href = i, i = t.href;
  }
  return i;
}, Al = function(i) {
  if (typeof i == "string") {
    const t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/.exec(i);
    if (t) return t.pop().toLowerCase();
  }
  return "";
}, ta = function(i, t = E.location) {
  const e = Il(i);
  return (e.protocol === ":" ? t.protocol : e.protocol) + e.host !== t.protocol + t.host;
};
var Kv = Object.freeze({ __proto__: null, parseUrl: Il, getAbsoluteURL: Hp, getFileExtension: Al, isCrossOrigin: ta });
const Qu = function(i, t) {
  const e = new E.WebVTT.Parser(E, E.vttjs, E.WebVTT.StringDecoder()), s = [];
  e.oncue = function(n) {
    t.addCue(n);
  }, e.onparsingerror = function(n) {
    s.push(n);
  }, e.onflush = function() {
    t.trigger({ type: "loadeddata", target: t });
  }, e.parse(i), s.length > 0 && (E.console && E.console.groupCollapsed && E.console.groupCollapsed(`Text Track parsing errors for ${t.src}`), s.forEach((n) => J.error(n)), E.console && E.console.groupEnd && E.console.groupEnd()), e.flush();
}, Ju = function(i, t) {
  const e = { uri: i }, s = ta(i);
  s && (e.cors = s);
  const n = t.tech_.crossOrigin() === "use-credentials";
  n && (e.withCredentials = n), _c(e, ut(this, function(r, a, l) {
    if (r) return J.error(r, a);
    t.loaded_ = !0, typeof E.WebVTT != "function" ? t.tech_ && t.tech_.any(["vttjsloaded", "vttjserror"], (u) => {
      if (u.type !== "vttjserror") return Qu(l, t);
      J.error(`vttjs failed to load, stopping trying to process ${t.src}`);
    }) : Qu(l, t);
  }));
};
class fn extends xl {
  constructor(t = {}) {
    if (!t.tech) throw new Error("A tech was not provided.");
    const e = ht(t, { kind: Xv[t.kind] || "subtitles", language: t.language || t.srclang || "" });
    let s = Yu[e.mode] || "disabled";
    const n = e.default;
    e.kind !== "metadata" && e.kind !== "chapters" || (s = "hidden"), super(e), this.tech_ = e.tech, this.cues_ = [], this.activeCues_ = [], this.preload_ = this.tech_.preloadTextTracks !== !1;
    const r = new kr(this.cues_), a = new kr(this.activeCues_);
    let l = !1;
    this.timeupdateHandler = ut(this, function(p = {}) {
      this.tech_.isDisposed() || (this.tech_.isReady_ ? (this.activeCues = this.activeCues, l && (this.trigger("cuechange"), l = !1), p.type !== "timeupdate" && (this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler))) : p.type !== "timeupdate" && (this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler)));
    });
    const u = () => {
      this.stopTracking();
    };
    this.tech_.one("dispose", u), s !== "disabled" && this.startTracking(), Object.defineProperties(this, { default: { get: () => n, set() {
    } }, mode: { get: () => s, set(p) {
      Yu[p] && s !== p && (s = p, this.preload_ || s === "disabled" || this.cues.length !== 0 || Ju(this.src, this), this.stopTracking(), s !== "disabled" && this.startTracking(), this.trigger("modechange"));
    } }, cues: { get() {
      return this.loaded_ ? r : null;
    }, set() {
    } }, activeCues: { get() {
      if (!this.loaded_) return null;
      if (this.cues.length === 0) return a;
      const p = this.tech_.currentTime(), g = [];
      for (let y = 0, T = this.cues.length; y < T; y++) {
        const C = this.cues[y];
        C.startTime <= p && C.endTime >= p && g.push(C);
      }
      if (l = !1, g.length !== this.activeCues_.length) l = !0;
      else for (let y = 0; y < g.length; y++) this.activeCues_.indexOf(g[y]) === -1 && (l = !0);
      return this.activeCues_ = g, a.setCues_(this.activeCues_), a;
    }, set() {
    } } }), e.src ? (this.src = e.src, this.preload_ || (this.loaded_ = !0), (this.preload_ || e.kind !== "subtitles" && e.kind !== "captions") && Ju(this.src, this)) : this.loaded_ = !0;
  }
  startTracking() {
    this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler), this.tech_.on("timeupdate", this.timeupdateHandler);
  }
  stopTracking() {
    this.rvf_ && (this.tech_.cancelVideoFrameCallback(this.rvf_), this.rvf_ = void 0), this.tech_.off("timeupdate", this.timeupdateHandler);
  }
  addCue(t) {
    let e = t;
    if (!("getCueAsHTML" in e)) {
      e = new E.vttjs.VTTCue(t.startTime, t.endTime, t.text);
      for (const n in t) n in e || (e[n] = t[n]);
      e.id = t.id, e.originalCue_ = t;
    }
    const s = this.tech_.textTracks();
    for (let n = 0; n < s.length; n++) s[n] !== this && s[n].removeCue(e);
    this.cues_.push(e), this.cues.setCues_(this.cues_);
  }
  removeCue(t) {
    let e = this.cues_.length;
    for (; e--; ) {
      const s = this.cues_[e];
      if (s === t || s.originalCue_ && s.originalCue_ === t) {
        this.cues_.splice(e, 1), this.cues.setCues_(this.cues_);
        break;
      }
    }
  }
}
fn.prototype.allowedEvents_ = { cuechange: "cuechange" };
class Vp extends xl {
  constructor(t = {}) {
    const e = ht(t, { kind: Gv[t.kind] || "" });
    super(e);
    let s = !1;
    Object.defineProperty(this, "enabled", { get: () => s, set(n) {
      typeof n == "boolean" && n !== s && (s = n, this.trigger("enabledchange"));
    } }), e.enabled && (this.enabled = e.enabled), this.loaded_ = !0;
  }
}
class zp extends xl {
  constructor(t = {}) {
    const e = ht(t, { kind: Wv[t.kind] || "" });
    super(e);
    let s = !1;
    Object.defineProperty(this, "selected", { get: () => s, set(n) {
      typeof n == "boolean" && n !== s && (s = n, this.trigger("selectedchange"));
    } }), e.selected && (this.selected = e.selected);
  }
}
class ze extends le {
  constructor(t = {}) {
    let e;
    super();
    const s = new fn(t);
    this.kind = s.kind, this.src = s.src, this.srclang = s.language, this.label = s.label, this.default = s.default, Object.defineProperties(this, { readyState: { get: () => e }, track: { get: () => s } }), e = ze.NONE, s.addEventListener("loadeddata", () => {
      e = ze.LOADED, this.trigger({ type: "load", target: this });
    });
  }
}
ze.prototype.allowedEvents_ = { load: "load" }, ze.NONE = 0, ze.LOADING = 1, ze.LOADED = 2, ze.ERROR = 3;
const he = { audio: { ListClass: Hv, TrackClass: Vp, capitalName: "Audio" }, video: { ListClass: Vv, TrackClass: zp, capitalName: "Video" }, text: { ListClass: $p, TrackClass: fn, capitalName: "Text" } };
Object.keys(he).forEach(function(i) {
  he[i].getterName = `${i}Tracks`, he[i].privateName = `${i}Tracks_`;
});
const ss = { remoteText: { ListClass: $p, TrackClass: fn, capitalName: "RemoteText", getterName: "remoteTextTracks", privateName: "remoteTextTracks_" }, remoteTextEl: { ListClass: zv, TrackClass: ze, capitalName: "RemoteTextTrackEls", getterName: "remoteTextTrackEls", privateName: "remoteTextTrackEls_" } }, qt = Object.assign({}, he, ss);
function Yv(i, t, e, s, n = {}) {
  const r = i.textTracks();
  n.kind = t, e && (n.label = e), s && (n.language = s), n.tech = i;
  const a = new qt.text.TrackClass(n);
  return r.addTrack(a), a;
}
ss.names = Object.keys(ss), he.names = Object.keys(he), qt.names = [].concat(ss.names).concat(he.names);
class K extends R {
  constructor(t = {}, e = function() {
  }) {
    t.reportTouchActivity = !1, super(null, t, e), this.onDurationChange_ = (s) => this.onDurationChange(s), this.trackProgress_ = (s) => this.trackProgress(s), this.trackCurrentTime_ = (s) => this.trackCurrentTime(s), this.stopTrackingCurrentTime_ = (s) => this.stopTrackingCurrentTime(s), this.disposeSourceHandler_ = (s) => this.disposeSourceHandler(s), this.queuedHanders_ = /* @__PURE__ */ new Set(), this.hasStarted_ = !1, this.on("playing", function() {
      this.hasStarted_ = !0;
    }), this.on("loadstart", function() {
      this.hasStarted_ = !1;
    }), qt.names.forEach((s) => {
      const n = qt[s];
      t && t[n.getterName] && (this[n.privateName] = t[n.getterName]);
    }), this.featuresProgressEvents || this.manualProgressOn(), this.featuresTimeupdateEvents || this.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach((s) => {
      t[`native${s}Tracks`] === !1 && (this[`featuresNative${s}Tracks`] = !1);
    }), t.nativeCaptions === !1 || t.nativeTextTracks === !1 ? this.featuresNativeTextTracks = !1 : t.nativeCaptions !== !0 && t.nativeTextTracks !== !0 || (this.featuresNativeTextTracks = !0), this.featuresNativeTextTracks || this.emulateTextTracks(), this.preloadTextTracks = t.preloadTextTracks !== !1, this.autoRemoteTextTracks_ = new qt.text.ListClass(), this.initTrackListeners(), t.nativeControlsForTouch || this.emitTapEvents(), this.constructor && (this.name_ = this.constructor.name || "Unknown Tech");
  }
  triggerSourceset(t) {
    this.isReady_ || this.one("ready", () => this.setTimeout(() => this.triggerSourceset(t), 1)), this.trigger({ src: t, type: "sourceset" });
  }
  manualProgressOn() {
    this.on("durationchange", this.onDurationChange_), this.manualProgress = !0, this.one("ready", this.trackProgress_);
  }
  manualProgressOff() {
    this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange_);
  }
  trackProgress(t) {
    this.stopTrackingProgress(), this.progressInterval = this.setInterval(ut(this, function() {
      const e = this.bufferedPercent();
      this.bufferedPercent_ !== e && this.trigger("progress"), this.bufferedPercent_ = e, e === 1 && this.stopTrackingProgress();
    }), 500);
  }
  onDurationChange(t) {
    this.duration_ = this.duration();
  }
  buffered() {
    return be(0, 0);
  }
  bufferedPercent() {
    return jp(this.buffered(), this.duration_);
  }
  stopTrackingProgress() {
    this.clearInterval(this.progressInterval);
  }
  manualTimeUpdatesOn() {
    this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime_), this.on("pause", this.stopTrackingCurrentTime_);
  }
  manualTimeUpdatesOff() {
    this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime_), this.off("pause", this.stopTrackingCurrentTime_);
  }
  trackCurrentTime() {
    this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
      this.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 });
    }, 250);
  }
  stopTrackingCurrentTime() {
    this.clearInterval(this.currentTimeInterval), this.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 });
  }
  dispose() {
    this.clearTracks(he.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), super.dispose();
  }
  clearTracks(t) {
    (t = [].concat(t)).forEach((e) => {
      const s = this[`${e}Tracks`]() || [];
      let n = s.length;
      for (; n--; ) {
        const r = s[n];
        e === "text" && this.removeRemoteTextTrack(r), s.removeTrack(r);
      }
    });
  }
  cleanupAutoTextTracks() {
    const t = this.autoRemoteTextTracks_ || [];
    let e = t.length;
    for (; e--; ) {
      const s = t[e];
      this.removeRemoteTextTrack(s);
    }
  }
  reset() {
  }
  crossOrigin() {
  }
  setCrossOrigin() {
  }
  error(t) {
    return t !== void 0 && (this.error_ = new _t(t), this.trigger("error")), this.error_;
  }
  played() {
    return this.hasStarted_ ? be(0, 0) : be();
  }
  play() {
  }
  setScrubbing(t) {
  }
  scrubbing() {
  }
  setCurrentTime(t) {
    this.manualTimeUpdates && this.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 });
  }
  initTrackListeners() {
    he.names.forEach((t) => {
      const e = he[t], s = () => {
        this.trigger(`${t}trackchange`);
      }, n = this[e.getterName]();
      n.addEventListener("removetrack", s), n.addEventListener("addtrack", s), this.on("dispose", () => {
        n.removeEventListener("removetrack", s), n.removeEventListener("addtrack", s);
      });
    });
  }
  addWebVttScript_() {
    if (!E.WebVTT) if (q.body.contains(this.el())) {
      if (!this.options_["vtt.js"] && cs(su) && Object.keys(su).length > 0) return void this.trigger("vttjsloaded");
      const t = q.createElement("script");
      t.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js", t.onload = () => {
        this.trigger("vttjsloaded");
      }, t.onerror = () => {
        this.trigger("vttjserror");
      }, this.on("dispose", () => {
        t.onload = null, t.onerror = null;
      }), E.WebVTT = !0, this.el().parentNode.appendChild(t);
    } else this.ready(this.addWebVttScript_);
  }
  emulateTextTracks() {
    const t = this.textTracks(), e = this.remoteTextTracks(), s = (l) => t.addTrack(l.track), n = (l) => t.removeTrack(l.track);
    e.on("addtrack", s), e.on("removetrack", n), this.addWebVttScript_();
    const r = () => this.trigger("texttrackchange"), a = () => {
      r();
      for (let l = 0; l < t.length; l++) {
        const u = t[l];
        u.removeEventListener("cuechange", r), u.mode === "showing" && u.addEventListener("cuechange", r);
      }
    };
    a(), t.addEventListener("change", a), t.addEventListener("addtrack", a), t.addEventListener("removetrack", a), this.on("dispose", function() {
      e.off("addtrack", s), e.off("removetrack", n), t.removeEventListener("change", a), t.removeEventListener("addtrack", a), t.removeEventListener("removetrack", a);
      for (let l = 0; l < t.length; l++)
        t[l].removeEventListener("cuechange", r);
    });
  }
  addTextTrack(t, e, s) {
    if (!t) throw new Error("TextTrack kind is required but was not provided");
    return Yv(this, t, e, s);
  }
  createRemoteTextTrack(t) {
    const e = ht(t, { tech: this });
    return new ss.remoteTextEl.TrackClass(e);
  }
  addRemoteTextTrack(t = {}, e) {
    const s = this.createRemoteTextTrack(t);
    return typeof e != "boolean" && (e = !1), this.remoteTextTrackEls().addTrackElement_(s), this.remoteTextTracks().addTrack(s.track), e === !1 && this.ready(() => this.autoRemoteTextTracks_.addTrack(s.track)), s;
  }
  removeRemoteTextTrack(t) {
    const e = this.remoteTextTrackEls().getTrackElementByTrack_(t);
    this.remoteTextTrackEls().removeTrackElement_(e), this.remoteTextTracks().removeTrack(t), this.autoRemoteTextTracks_.removeTrack(t);
  }
  getVideoPlaybackQuality() {
    return {};
  }
  requestPictureInPicture() {
    return Promise.reject();
  }
  disablePictureInPicture() {
    return !0;
  }
  setDisablePictureInPicture() {
  }
  requestVideoFrameCallback(t) {
    const e = Te();
    return !this.isReady_ || this.paused() ? (this.queuedHanders_.add(e), this.one("playing", () => {
      this.queuedHanders_.has(e) && (this.queuedHanders_.delete(e), t());
    })) : this.requestNamedAnimationFrame(e, t), e;
  }
  cancelVideoFrameCallback(t) {
    this.queuedHanders_.has(t) ? this.queuedHanders_.delete(t) : this.cancelNamedAnimationFrame(t);
  }
  setPoster() {
  }
  playsinline() {
  }
  setPlaysinline() {
  }
  overrideNativeAudioTracks(t) {
  }
  overrideNativeVideoTracks(t) {
  }
  canPlayType(t) {
    return "";
  }
  static canPlayType(t) {
    return "";
  }
  static canPlaySource(t, e) {
    return K.canPlayType(t.type);
  }
  static isTech(t) {
    return t.prototype instanceof K || t instanceof K || t === K;
  }
  static registerTech(t, e) {
    if (K.techs_ || (K.techs_ = {}), !K.isTech(e)) throw new Error(`Tech ${t} must be a Tech`);
    if (!K.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
    if (!K.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
    return t = Et(t), K.techs_[t] = e, K.techs_[tn(t)] = e, t !== "Tech" && K.defaultTechOrder_.push(t), e;
  }
  static getTech(t) {
    if (t) return K.techs_ && K.techs_[t] ? K.techs_[t] : (t = Et(t), E && E.videojs && E.videojs[t] ? (J.warn(`The ${t} tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)`), E.videojs[t]) : void 0);
  }
}
qt.names.forEach(function(i) {
  const t = qt[i];
  K.prototype[t.getterName] = function() {
    return this[t.privateName] = this[t.privateName] || new t.ListClass(), this[t.privateName];
  };
}), K.prototype.featuresVolumeControl = !0, K.prototype.featuresMuteControl = !0, K.prototype.featuresFullscreenResize = !1, K.prototype.featuresPlaybackRate = !1, K.prototype.featuresProgressEvents = !1, K.prototype.featuresSourceset = !1, K.prototype.featuresTimeupdateEvents = !1, K.prototype.featuresNativeTextTracks = !1, K.prototype.featuresVideoFrameCallback = !1, K.withSourceHandlers = function(i) {
  i.registerSourceHandler = function(t, e) {
    let s = i.sourceHandlers;
    s || (s = i.sourceHandlers = []), e === void 0 && (e = s.length), s.splice(e, 0, t);
  }, i.canPlayType = function(t) {
    const e = i.sourceHandlers || [];
    let s;
    for (let n = 0; n < e.length; n++) if (s = e[n].canPlayType(t), s) return s;
    return "";
  }, i.selectSourceHandler = function(t, e) {
    const s = i.sourceHandlers || [];
    let n;
    for (let r = 0; r < s.length; r++) if (n = s[r].canHandleSource(t, e), n) return s[r];
    return null;
  }, i.canPlaySource = function(t, e) {
    const s = i.selectSourceHandler(t, e);
    return s ? s.canHandleSource(t, e) : "";
  }, ["seekable", "seeking", "duration"].forEach(function(t) {
    const e = this[t];
    typeof e == "function" && (this[t] = function() {
      return this.sourceHandler_ && this.sourceHandler_[t] ? this.sourceHandler_[t].apply(this.sourceHandler_, arguments) : e.apply(this, arguments);
    });
  }, i.prototype), i.prototype.setSource = function(t) {
    let e = i.selectSourceHandler(t, this.options_);
    e || (i.nativeSourceHandler ? e = i.nativeSourceHandler : J.error("No source handler found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler_), e !== i.nativeSourceHandler && (this.currentSource_ = t), this.sourceHandler_ = e.handleSource(t, this, this.options_), this.one("dispose", this.disposeSourceHandler_);
  }, i.prototype.disposeSourceHandler = function() {
    this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null);
  };
}, R.registerComponent("Tech", K), K.registerTech("Tech", K), K.defaultTechOrder_ = [];
const Pi = {}, Wo = {}, xr = {};
function Qv(i, t) {
  Pi[i] = Pi[i] || [], Pi[i].push(t);
}
function Jv(i, t, e) {
  i.setTimeout(() => Ei(t, Pi[t.type], e, i), 1);
}
function Zv(i, t) {
  i.forEach((e) => e.setTech && e.setTech(t));
}
function tb(i, t, e) {
  return i.reduceRight(Pl(e), t[e]());
}
function eb(i, t, e, s) {
  return t[e](i.reduce(Pl(e), s));
}
function Zu(i, t, e, s = null) {
  const n = "call" + Et(e), r = i.reduce(Pl(n), s), a = r === xr, l = a ? null : t[e](r);
  return nb(i, e, l, a), l;
}
const ib = { buffered: 1, currentTime: 1, duration: 1, muted: 1, played: 1, paused: 1, seekable: 1, volume: 1, ended: 1 }, sb = { setCurrentTime: 1, setMuted: 1, setVolume: 1 }, td = { play: 1, pause: 1 };
function Pl(i) {
  return (t, e) => t === xr ? xr : e[i] ? e[i](t) : t;
}
function nb(i, t, e, s) {
  for (let n = i.length - 1; n >= 0; n--) {
    const r = i[n];
    r[t] && r[t](s, e);
  }
}
function rb(i) {
  Wo[i.id()] = null;
}
function ab(i, t) {
  const e = Wo[i.id()];
  let s = null;
  if (e == null) return s = t(i), Wo[i.id()] = [[t, s]], s;
  for (let n = 0; n < e.length; n++) {
    const [r, a] = e[n];
    r === t && (s = a);
  }
  return s === null && (s = t(i), e.push([t, s])), s;
}
function Ei(i = {}, t = [], e, s, n = [], r = !1) {
  const [a, ...l] = t;
  if (typeof a == "string") Ei(i, Pi[a], e, s, n, r);
  else if (a) {
    const u = ab(s, a);
    if (!u.setSource) return n.push(u), Ei(i, l, e, s, n, r);
    u.setSource(Object.assign({}, i), function(p, g) {
      if (p) return Ei(i, l, e, s, n, r);
      n.push(u), Ei(g, i.type === g.type ? l : Pi[g.type], e, s, n, r);
    });
  } else l.length ? Ei(i, l, e, s, n, r) : r ? e(i, n) : Ei(i, Pi["*"], e, s, n, !0);
}
const ob = { opus: "video/ogg", ogv: "video/ogg", mp4: "video/mp4", mov: "video/mp4", m4v: "video/mp4", mkv: "video/x-matroska", m4a: "audio/mp4", mp3: "audio/mpeg", aac: "audio/aac", caf: "audio/x-caf", flac: "audio/flac", oga: "audio/ogg", wav: "audio/wav", m3u8: "application/x-mpegURL", mpd: "application/dash+xml", jpg: "image/jpeg", jpeg: "image/jpeg", gif: "image/gif", png: "image/png", svg: "image/svg+xml", webp: "image/webp" }, Ir = function(i = "") {
  const t = Al(i);
  return ob[t.toLowerCase()] || "";
}, lb = (i, t) => {
  if (!t) return "";
  if (i.cache_.source.src === t && i.cache_.source.type) return i.cache_.source.type;
  const e = i.cache_.sources.filter((n) => n.src === t);
  if (e.length) return e[0].type;
  const s = i.$$("source");
  for (let n = 0; n < s.length; n++) {
    const r = s[n];
    if (r.type && r.src && r.src === t) return r.type;
  }
  return Ir(t);
}, Wp = function(i) {
  if (Array.isArray(i)) {
    let t = [];
    i.forEach(function(e) {
      e = Wp(e), Array.isArray(e) ? t = t.concat(e) : Me(e) && t.push(e);
    }), i = t;
  } else i = typeof i == "string" && i.trim() ? [ed({ src: i })] : Me(i) && typeof i.src == "string" && i.src && i.src.trim() ? [ed(i)] : [];
  return i;
};
function ed(i) {
  if (!i.type) {
    const t = Ir(i.src);
    t && (i.type = t);
  }
  return i;
}
var hb = `<svg xmlns="http://www.w3.org/2000/svg">
  <defs>
    <symbol viewBox="0 0 48 48" id="vjs-icon-play">
      <path d="M16 10v28l22-14z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-pause">
      <path d="M12 38h8V10h-8v28zm16-28v28h8V10h-8z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-audio">
      <path d="M24 2C14.06 2 6 10.06 6 20v14c0 3.31 2.69 6 6 6h6V24h-8v-4c0-7.73 6.27-14 14-14s14 6.27 14 14v4h-8v16h6c3.31 0 6-2.69 6-6V20c0-9.94-8.06-18-18-18z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-captions">
      <path d="M38 8H10c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM22 22h-3v-1h-4v6h4v-1h3v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2zm14 0h-3v-1h-4v6h4v-1h3v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-subtitles">
      <path d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-fullscreen-enter">
      <path d="M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4H10v10zm24 14h-6v4h10V28h-4v6zm-6-24v4h6v6h4V10H28z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-fullscreen-exit">
      <path d="M10 32h6v6h4V28H10v4zm6-16h-6v4h10V10h-4v6zm12 22h4v-6h6v-4H28v10zm4-22v-6h-4v10h10v-4h-6z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-play-circle">
      <path d="M20 33l12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-mute">
      <path d="M33 24c0-3.53-2.04-6.58-5-8.05v4.42l4.91 4.91c.06-.42.09-.85.09-1.28zm5 0c0 1.88-.41 3.65-1.08 5.28l3.03 3.03C41.25 29.82 42 27 42 24c0-8.56-5.99-15.72-14-17.54v4.13c5.78 1.72 10 7.07 10 13.41zM8.55 6L6 8.55 15.45 18H6v12h8l10 10V26.55l8.51 8.51c-1.34 1.03-2.85 1.86-4.51 2.36v4.13a17.94 17.94 0 0 0 7.37-3.62L39.45 42 42 39.45l-18-18L8.55 6zM24 8l-4.18 4.18L24 16.36V8z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-low">
      <path d="M14 18v12h8l10 10V8L22 18h-8z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-medium">
      <path d="M37 24c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zm-27-6v12h8l10 10V8L18 18h-8z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-high">
      <path d="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-spinner">
      <path d="M18.8 21l9.53-16.51C26.94 4.18 25.49 4 24 4c-4.8 0-9.19 1.69-12.64 4.51l7.33 12.69.11-.2zm24.28-3c-1.84-5.85-6.3-10.52-11.99-12.68L23.77 18h19.31zm.52 2H28.62l.58 1 9.53 16.5C41.99 33.94 44 29.21 44 24c0-1.37-.14-2.71-.4-4zm-26.53 4l-7.8-13.5C6.01 14.06 4 18.79 4 24c0 1.37.14 2.71.4 4h14.98l-2.31-4zM4.92 30c1.84 5.85 6.3 10.52 11.99 12.68L24.23 30H4.92zm22.54 0l-7.8 13.51c1.4.31 2.85.49 4.34.49 4.8 0 9.19-1.69 12.64-4.51L29.31 26.8 27.46 30z"></path>
    </symbol>
    <symbol viewBox="0 0 24 24" id="vjs-icon-hd">
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-chapters">
      <path d="M6 26h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm8 8h28v-4H14v4zm0 8h28v-4H14v4zm0-20v4h28v-4H14z"></path>
    </symbol>
    <symbol viewBox="0 0 40 40" id="vjs-icon-downloading">
      <path d="M18.208 36.875q-3.208-.292-5.979-1.729-2.771-1.438-4.812-3.729-2.042-2.292-3.188-5.229-1.146-2.938-1.146-6.23 0-6.583 4.334-11.416 4.333-4.834 10.833-5.5v3.166q-5.167.75-8.583 4.646Q6.25 14.75 6.25 19.958q0 5.209 3.396 9.104 3.396 3.896 8.562 4.646zM20 28.417L11.542 20l2.083-2.083 4.917 4.916v-11.25h2.916v11.25l4.875-4.916L28.417 20zm1.792 8.458v-3.167q1.833-.25 3.541-.958 1.709-.708 3.167-1.875l2.333 2.292q-1.958 1.583-4.25 2.541-2.291.959-4.791 1.167zm6.791-27.792q-1.541-1.125-3.25-1.854-1.708-.729-3.541-1.021V3.042q2.5.25 4.77 1.208 2.271.958 4.271 2.5zm4.584 21.584l-2.25-2.25q1.166-1.5 1.854-3.209.687-1.708.937-3.541h3.209q-.292 2.5-1.229 4.791-.938 2.292-2.521 4.209zm.541-12.417q-.291-1.833-.958-3.562-.667-1.73-1.833-3.188l2.375-2.208q1.541 1.916 2.458 4.208.917 2.292 1.167 4.75z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download">
      <path d="M10.8 40.55q-1.35 0-2.375-1T7.4 37.15v-7.7h3.4v7.7h26.35v-7.7h3.4v7.7q0 1.4-1 2.4t-2.4 1zM24 32.1L13.9 22.05l2.45-2.45 5.95 5.95V7.15h3.4v18.4l5.95-5.95 2.45 2.45z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download-done">
      <path d="M9.8 40.5v-3.45h28.4v3.45zm9.2-9.05L7.4 19.85l2.45-2.35L19 26.65l19.2-19.2 2.4 2.4z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download-off">
      <path d="M4.9 4.75L43.25 43.1 41 45.3l-4.75-4.75q-.05.05-.075.025-.025-.025-.075-.025H10.8q-1.35 0-2.375-1T7.4 37.15v-7.7h3.4v7.7h22.05l-7-7-1.85 1.8L13.9 21.9l1.85-1.85L2.7 7zm26.75 14.7l2.45 2.45-3.75 3.8-2.45-2.5zM25.7 7.15V21.1l-3.4-3.45V7.15z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-share">
      <path d="M36 32.17c-1.52 0-2.89.59-3.93 1.54L17.82 25.4c.11-.45.18-.92.18-1.4s-.07-.95-.18-1.4l14.1-8.23c1.07 1 2.5 1.62 4.08 1.62 3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6c0 .48.07.95.18 1.4l-14.1 8.23c-1.07-1-2.5-1.62-4.08-1.62-3.31 0-6 2.69-6 6s2.69 6 6 6c1.58 0 3.01-.62 4.08-1.62l14.25 8.31c-.1.42-.16.86-.16 1.31A5.83 5.83 0 1 0 36 32.17z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-cog">
      <path d="M38.86 25.95c.08-.64.14-1.29.14-1.95s-.06-1.31-.14-1.95l4.23-3.31c.38-.3.49-.84.24-1.28l-4-6.93c-.25-.43-.77-.61-1.22-.43l-4.98 2.01c-1.03-.79-2.16-1.46-3.38-1.97L29 4.84c-.09-.47-.5-.84-1-.84h-8c-.5 0-.91.37-.99.84l-.75 5.3a14.8 14.8 0 0 0-3.38 1.97L9.9 10.1a1 1 0 0 0-1.22.43l-4 6.93c-.25.43-.14.97.24 1.28l4.22 3.31C9.06 22.69 9 23.34 9 24s.06 1.31.14 1.95l-4.22 3.31c-.38.3-.49.84-.24 1.28l4 6.93c.25.43.77.61 1.22.43l4.98-2.01c1.03.79 2.16 1.46 3.38 1.97l.75 5.3c.08.47.49.84.99.84h8c.5 0 .91-.37.99-.84l.75-5.3a14.8 14.8 0 0 0 3.38-1.97l4.98 2.01a1 1 0 0 0 1.22-.43l4-6.93c.25-.43.14-.97-.24-1.28l-4.22-3.31zM24 31c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-square">
      <path d="M36 8H12c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H12V12h24v24z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-circle">
      <circle cx="24" cy="24" r="20"></circle>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-circle-outline">
      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-circle-inner-circle">
      <path d="M24 4C12.97 4 4 12.97 4 24s8.97 20 20 20 20-8.97 20-20S35.03 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm6-16c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6 6 2.69 6 6z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-cancel">
      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 27.17L31.17 34 24 26.83 16.83 34 14 31.17 21.17 24 14 16.83 16.83 14 24 21.17 31.17 14 34 16.83 26.83 24 34 31.17z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-replay">
      <path d="M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-repeat">
      <path d="M14 14h20v6l8-8-8-8v6H10v12h4v-8zm20 20H14v-6l-8 8 8 8v-6h24V26h-4v8z"></path>
    </symbol>
    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-5">
      <path d="M17.689 98l-8.697 8.696 8.697 8.697 2.486-2.485-4.32-4.319h1.302c4.93 0 9.071 1.722 12.424 5.165 3.352 3.443 5.029 7.638 5.029 12.584h3.55c0-2.958-.553-5.73-1.658-8.313-1.104-2.583-2.622-4.841-4.555-6.774-1.932-1.932-4.19-3.45-6.773-4.555-2.584-1.104-5.355-1.657-8.313-1.657H15.5l4.615-4.615zm-8.08 21.659v13.861h11.357v5.008H9.609V143h12.7c.834 0 1.55-.298 2.146-.894.596-.597.895-1.31.895-2.145v-7.781c0-.835-.299-1.55-.895-2.147a2.929 2.929 0 0 0-2.147-.894h-8.227v-5.096H25.35v-4.384z"></path>
    </symbol>
    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-10">
      <path d="M42.315 125.63c0-4.997-1.694-9.235-5.08-12.713-3.388-3.479-7.571-5.218-12.552-5.218h-1.315l4.363 4.363-2.51 2.51-8.787-8.786L25.221 97l2.45 2.45-4.662 4.663h1.375c2.988 0 5.788.557 8.397 1.673 2.61 1.116 4.892 2.65 6.844 4.602 1.953 1.953 3.487 4.234 4.602 6.844 1.116 2.61 1.674 5.41 1.674 8.398zM8.183 142v-19.657H3.176V117.8h9.643V142zm13.63 0c-1.156 0-2.127-.393-2.912-1.178-.778-.778-1.168-1.746-1.168-2.902v-16.04c0-1.156.393-2.127 1.178-2.912.779-.779 1.746-1.168 2.902-1.168h7.696c1.156 0 2.126.392 2.911 1.177.779.78 1.168 1.747 1.168 2.903v16.04c0 1.156-.392 2.127-1.177 2.912-.779.779-1.746 1.168-2.902 1.168zm.556-4.636h6.583v-15.02H22.37z"></path>
    </symbol>
    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-30">
      <path d="M26.047 97l-8.733 8.732 8.733 8.733 2.496-2.494-4.336-4.338h1.307c4.95 0 9.108 1.73 12.474 5.187 3.367 3.458 5.051 7.668 5.051 12.635h3.565c0-2.97-.556-5.751-1.665-8.346-1.109-2.594-2.633-4.862-4.574-6.802-1.94-1.941-4.208-3.466-6.803-4.575-2.594-1.109-5.375-1.664-8.345-1.664H23.85l4.634-4.634zM2.555 117.531v4.688h10.297v5.25H5.873v4.687h6.979v5.156H2.555V142H13.36c1.061 0 1.95-.395 2.668-1.186.718-.79 1.076-1.772 1.076-2.94v-16.218c0-1.168-.358-2.149-1.076-2.94-.717-.79-1.607-1.185-2.668-1.185zm22.482.14c-1.149 0-2.11.39-2.885 1.165-.78.78-1.172 1.744-1.172 2.893v15.943c0 1.149.388 2.11 1.163 2.885.78.78 1.745 1.172 2.894 1.172h7.649c1.148 0 2.11-.388 2.884-1.163.78-.78 1.17-1.745 1.17-2.894v-15.943c0-1.15-.386-2.111-1.16-2.885-.78-.78-1.746-1.172-2.894-1.172zm.553 4.518h6.545v14.93H25.59z"></path>
    </symbol>
    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-5">
      <path d="M29.508 97l-2.431 2.43 4.625 4.625h-1.364c-2.965 0-5.742.554-8.332 1.66-2.589 1.107-4.851 2.629-6.788 4.566-1.937 1.937-3.458 4.2-4.565 6.788-1.107 2.59-1.66 5.367-1.66 8.331h3.557c0-4.957 1.68-9.16 5.04-12.611 3.36-3.45 7.51-5.177 12.451-5.177h1.304l-4.326 4.33 2.49 2.49 8.715-8.716zm-9.783 21.61v13.89h11.382v5.018H19.725V142h12.727a2.93 2.93 0 0 0 2.15-.896 2.93 2.93 0 0 0 .896-2.15v-7.798c0-.837-.299-1.554-.896-2.152a2.93 2.93 0 0 0-2.15-.896h-8.245V123h11.29v-4.392z"></path>
    </symbol>
    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-10">
      <path d="M23.119 97l-2.386 2.383 4.538 4.538h-1.339c-2.908 0-5.633.543-8.173 1.63-2.54 1.085-4.76 2.577-6.66 4.478-1.9 1.9-3.392 4.12-4.478 6.66-1.085 2.54-1.629 5.264-1.629 8.172h3.49c0-4.863 1.648-8.986 4.944-12.372 3.297-3.385 7.368-5.078 12.216-5.078h1.279l-4.245 4.247 2.443 2.442 8.55-8.55zm-9.52 21.45v4.42h4.871V142h4.513v-23.55zm18.136 0c-1.125 0-2.066.377-2.824 1.135-.764.764-1.148 1.709-1.148 2.834v15.612c0 1.124.38 2.066 1.139 2.824.764.764 1.708 1.145 2.833 1.145h7.489c1.125 0 2.066-.378 2.824-1.136.764-.764 1.145-1.709 1.145-2.833v-15.612c0-1.125-.378-2.067-1.136-2.825-.764-.764-1.708-1.145-2.833-1.145zm.54 4.42h6.408v14.617h-6.407z"></path>
    </symbol>
    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-30">
      <path d="M25.549 97l-2.437 2.434 4.634 4.635H26.38c-2.97 0-5.753.555-8.347 1.664-2.594 1.109-4.861 2.633-6.802 4.574-1.94 1.94-3.465 4.207-4.574 6.802-1.109 2.594-1.664 5.377-1.664 8.347h3.565c0-4.967 1.683-9.178 5.05-12.636 3.366-3.458 7.525-5.187 12.475-5.187h1.307l-4.335 4.338 2.495 2.494 8.732-8.732zm-11.553 20.53v4.689h10.297v5.249h-6.978v4.688h6.978v5.156H13.996V142h10.808c1.06 0 1.948-.395 2.666-1.186.718-.79 1.077-1.771 1.077-2.94v-16.217c0-1.169-.36-2.15-1.077-2.94-.718-.79-1.605-1.186-2.666-1.186zm21.174.168c-1.149 0-2.11.389-2.884 1.163-.78.78-1.172 1.745-1.172 2.894v15.942c0 1.15.388 2.11 1.162 2.885.78.78 1.745 1.17 2.894 1.17h7.649c1.149 0 2.11-.386 2.885-1.16.78-.78 1.17-1.746 1.17-2.895v-15.942c0-1.15-.387-2.11-1.161-2.885-.78-.78-1.745-1.172-2.894-1.172zm.552 4.516h6.542v14.931h-6.542z"></path>
    </symbol>
    <symbol viewBox="0 0 512 512" id="vjs-icon-audio-description">
      <g fill-rule="evenodd"><path d="M227.29 381.351V162.993c50.38-1.017 89.108-3.028 117.631 17.126 27.374 19.342 48.734 56.965 44.89 105.325-4.067 51.155-41.335 94.139-89.776 98.475-24.085 2.155-71.972 0-71.972 0s-.84-1.352-.773-2.568m48.755-54.804c31.43 1.26 53.208-16.633 56.495-45.386 4.403-38.51-21.188-63.552-58.041-60.796v103.612c-.036 1.466.575 2.22 1.546 2.57"></path><path d="M383.78 381.328c13.336 3.71 17.387-11.06 23.215-21.408 12.722-22.571 22.294-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.51c-.587 3.874 2.226 7.315 3.865 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894"></path><path d="M425.154 381.328c13.336 3.71 17.384-11.061 23.215-21.408 12.721-22.571 22.291-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.511c-.586 3.874 2.226 7.315 3.866 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894"></path><path d="M466.26 381.328c13.337 3.71 17.385-11.061 23.216-21.408 12.722-22.571 22.292-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.51c-.587 3.874 2.225 7.315 3.865 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894M4.477 383.005H72.58l18.573-28.484 64.169-.135s.065 19.413.065 28.62h48.756V160.307h-58.816c-5.653 9.537-140.85 222.697-140.85 222.697zm152.667-145.282v71.158l-40.453-.27 40.453-70.888z"></path></g>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-next-item">
      <path d="M12 36l17-12-17-12v24zm20-24v24h4V12h-4z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-previous-item">
      <path d="M12 12h4v24h-4zm7 12l17 12V12z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-shuffle">
      <path d="M21.17 18.34L10.83 8 8 10.83l10.34 10.34 2.83-2.83zM29 8l4.09 4.09L8 37.17 10.83 40l25.09-25.09L40 19V8H29zm.66 18.83l-2.83 2.83 6.26 6.26L29 40h11V29l-4.09 4.09-6.25-6.26z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-cast">
      <path d="M42 6H6c-2.21 0-4 1.79-4 4v6h4v-6h36v28H28v4h14c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM2 36v6h6c0-3.31-2.69-6-6-6zm0-8v4c5.52 0 10 4.48 10 10h4c0-7.73-6.27-14-14-14zm0-8v4c9.94 0 18 8.06 18 18h4c0-12.15-9.85-22-22-22z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-picture-in-picture-enter">
      <path d="M38 22H22v11.99h16V22zm8 16V9.96C46 7.76 44.2 6 42 6H6C3.8 6 2 7.76 2 9.96V38c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4zm-4 .04H6V9.94h36v28.1z"></path>
    </symbol>
    <symbol viewBox="0 0 22 18" id="vjs-icon-picture-in-picture-exit">
      <path d="M18 4H4v10h14V4zm4 12V1.98C22 .88 21.1 0 20 0H2C.9 0 0 .88 0 1.98V16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H2V1.97h18v14.05z"></path>
      <path fill="none" d="M-1-3h24v24H-1z"></path>
    </symbol>
    <symbol viewBox="0 0 1792 1792" id="vjs-icon-facebook">
      <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759H734V905H479V609h255V391q0-186 104-288.5T1115 0q147 0 228 12z"></path>
    </symbol>
    <symbol viewBox="0 0 1792 1792" id="vjs-icon-linkedin">
      <path d="M477 625v991H147V625h330zm21-306q1 73-50.5 122T312 490h-2q-82 0-132-49t-50-122q0-74 51.5-122.5T314 148t133 48.5T498 319zm1166 729v568h-329v-530q0-105-40.5-164.5T1168 862q-63 0-105.5 34.5T999 982q-11 30-11 81v553H659q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5T1285 602q171 0 275 113.5t104 332.5z"></path>
    </symbol>
    <symbol viewBox="0 0 1792 1792" id="vjs-icon-twitter">
      <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5T1369.5 1125 1185 1335.5t-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5T285 1033q33 5 61 5 43 0 85-11-112-23-185.5-111.5T172 710v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5T884 653q-8-38-8-74 0-134 94.5-228.5T1199 256q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
    </symbol>
    <symbol viewBox="0 0 1792 1792" id="vjs-icon-tumblr">
      <path d="M1328 1329l80 237q-23 35-111 66t-177 32q-104 2-190.5-26T787 1564t-95-106-55.5-120-16.5-118V676H452V461q72-26 129-69.5t91-90 58-102 34-99T779 12q1-5 4.5-8.5T791 0h244v424h333v252h-334v518q0 30 6.5 56t22.5 52.5 49.5 41.5 81.5 14q78-2 134-29z"></path>
    </symbol>
    <symbol viewBox="0 0 1792 1792" id="vjs-icon-pinterest">
      <path d="M1664 896q0 209-103 385.5T1281.5 1561 896 1664q-111 0-218-32 59-93 78-164 9-34 54-211 20 39 73 67.5t114 28.5q121 0 216-68.5t147-188.5 52-270q0-114-59.5-214T1180 449t-255-63q-105 0-196 29t-154.5 77-109 110.5-67 129.5T377 866q0 104 40 183t117 111q30 12 38-20 2-7 8-31t8-30q6-23-11-43-51-61-51-151 0-151 104.5-259.5T904 517q151 0 235.5 82t84.5 213q0 170-68.5 289T980 1220q-61 0-98-43.5T859 1072q8-35 26.5-93.5t30-103T927 800q0-50-27-83t-77-33q-62 0-105 57t-43 142q0 73 25 122l-99 418q-17 70-13 177-206-91-333-281T128 896q0-209 103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z"></path>
    </symbol>
  </defs>
</svg>`;
class ub extends R {
  constructor(t, e, s) {
    if (super(t, ht({ createEl: !1 }, e), s), e.playerOptions.sources && e.playerOptions.sources.length !== 0) t.src(e.playerOptions.sources);
    else for (let n = 0, r = e.playerOptions.techOrder; n < r.length; n++) {
      const a = Et(r[n]);
      let l = K.getTech(a);
      if (a || (l = R.getComponent(a)), l && l.isSupported()) {
        t.loadTech_(a);
        break;
      }
    }
  }
}
R.registerComponent("MediaLoader", ub);
class ea extends R {
  constructor(t, e) {
    super(t, e), this.options_.controlText && this.controlText(this.options_.controlText), this.handleMouseOver_ = (s) => this.handleMouseOver(s), this.handleMouseOut_ = (s) => this.handleMouseOut(s), this.handleClick_ = (s) => this.handleClick(s), this.handleKeyDown_ = (s) => this.handleKeyDown(s), this.emitTapEvents(), this.enable();
  }
  createEl(t = "div", e = {}, s = {}) {
    e = Object.assign({ className: this.buildCSSClass(), tabIndex: 0 }, e), t === "button" && J.error(`Creating a ClickableComponent with an HTML element of ${t} is not supported; use a Button instead.`), s = Object.assign({ role: "button" }, s), this.tabIndex_ = e.tabIndex;
    const n = Y(t, e, s);
    return this.player_.options_.experimentalSvgIcons || n.appendChild(Y("span", { className: "vjs-icon-placeholder" }, { "aria-hidden": !0 })), this.createControlTextEl(n), n;
  }
  dispose() {
    this.controlTextEl_ = null, super.dispose();
  }
  createControlTextEl(t) {
    return this.controlTextEl_ = Y("span", { className: "vjs-control-text" }, { "aria-live": "polite" }), t && t.appendChild(this.controlTextEl_), this.controlText(this.controlText_, t), this.controlTextEl_;
  }
  controlText(t, e = this.el()) {
    if (t === void 0) return this.controlText_ || "Need Text";
    const s = this.localize(t);
    this.controlText_ = t, di(this.controlTextEl_, s), this.nonIconControl || this.player_.options_.noUITitleAttributes || e.setAttribute("title", s);
  }
  buildCSSClass() {
    return `vjs-control vjs-button ${super.buildCSSClass()}`;
  }
  enable() {
    this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), this.tabIndex_ !== void 0 && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick_), this.on("keydown", this.handleKeyDown_));
  }
  disable() {
    this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), this.tabIndex_ !== void 0 && this.el_.removeAttribute("tabIndex"), this.off("mouseover", this.handleMouseOver_), this.off("mouseout", this.handleMouseOut_), this.off(["tap", "click"], this.handleClick_), this.off("keydown", this.handleKeyDown_);
  }
  handleLanguagechange() {
    this.controlText(this.controlText_);
  }
  handleClick(t) {
    this.options_.clickHandler && this.options_.clickHandler.call(this, arguments);
  }
  handleKeyDown(t) {
    X.isEventKey(t, "Space") || X.isEventKey(t, "Enter") ? (t.preventDefault(), t.stopPropagation(), this.trigger("click")) : super.handleKeyDown(t);
  }
}
R.registerComponent("ClickableComponent", ea);
class Za extends ea {
  constructor(t, e) {
    super(t, e), this.update(), this.update_ = (s) => this.update(s), t.on("posterchange", this.update_);
  }
  dispose() {
    this.player().off("posterchange", this.update_), super.dispose();
  }
  createEl() {
    return Y("div", { className: "vjs-poster" });
  }
  crossOrigin(t) {
    if (t === void 0) return this.$("img") ? this.$("img").crossOrigin : this.player_.tech_ && this.player_.tech_.isReady_ ? this.player_.crossOrigin() : this.player_.options_.crossOrigin || this.player_.options_.crossorigin || null;
    t === null || t === "anonymous" || t === "use-credentials" ? this.$("img") && (this.$("img").crossOrigin = t) : this.player_.log.warn(`crossOrigin must be null,  "anonymous" or "use-credentials", given "${t}"`);
  }
  update(t) {
    const e = this.player().poster();
    this.setSrc(e), e ? this.show() : this.hide();
  }
  setSrc(t) {
    t ? (this.$("img") || this.el_.appendChild(Y("picture", { className: "vjs-poster", tabIndex: -1 }, {}, Y("img", { loading: "lazy", crossOrigin: this.crossOrigin() }, { alt: "" }))), this.$("img").src = t) : this.el_.textContent = "";
  }
  handleClick(t) {
    this.player_.controls() && (this.player_.tech(!0) && this.player_.tech(!0).focus(), this.player_.paused() ? xe(this.player_.play()) : this.player_.pause());
  }
}
Za.prototype.crossorigin = Za.prototype.crossOrigin, R.registerComponent("PosterImage", Za);
const oe = "#222", id = "#ccc", db = { monospace: "monospace", sansSerif: "sans-serif", serif: "serif", monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace', monospaceSerif: '"Courier New", monospace', proportionalSansSerif: "sans-serif", proportionalSerif: "serif", casual: '"Comic Sans MS", Impact, fantasy', script: '"Monotype Corsiva", cursive', smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif' };
function to(i, t) {
  let e;
  if (i.length === 4) e = i[1] + i[1] + i[2] + i[2] + i[3] + i[3];
  else {
    if (i.length !== 7) throw new Error("Invalid color code provided, " + i + "; must be formatted as e.g. #f0e or #f604e2.");
    e = i.slice(1);
  }
  return "rgba(" + parseInt(e.slice(0, 2), 16) + "," + parseInt(e.slice(2, 4), 16) + "," + parseInt(e.slice(4, 6), 16) + "," + t + ")";
}
function js(i, t, e) {
  try {
    i.style[t] = e;
  } catch {
    return;
  }
}
function sd(i) {
  return i ? `${i}px` : "";
}
class cb extends R {
  constructor(t, e, s) {
    super(t, e, s);
    const n = (a) => this.updateDisplay(a), r = (a) => {
      this.updateDisplayOverlay(), this.updateDisplay(a);
    };
    t.on("loadstart", (a) => this.toggleDisplay(a)), t.on("texttrackchange", n), t.on("loadedmetadata", (a) => {
      this.updateDisplayOverlay(), this.preselectTrack(a);
    }), t.ready(ut(this, function() {
      if (t.tech_ && t.tech_.featuresNativeTextTracks) return void this.hide();
      t.on("fullscreenchange", r), t.on("playerresize", r);
      const a = E.screen.orientation || E, l = E.screen.orientation ? "change" : "orientationchange";
      a.addEventListener(l, r), t.on("dispose", () => a.removeEventListener(l, r));
      const u = this.options_.playerOptions.tracks || [];
      for (let p = 0; p < u.length; p++) this.player_.addRemoteTextTrack(u[p], !0);
      this.preselectTrack();
    }));
  }
  preselectTrack() {
    const t = { captions: 1, subtitles: 1 }, e = this.player_.textTracks(), s = this.player_.cache_.selectedLanguage;
    let n, r, a;
    for (let l = 0; l < e.length; l++) {
      const u = e[l];
      s && s.enabled && s.language && s.language === u.language && u.kind in t ? u.kind === s.kind ? a = u : a || (a = u) : s && !s.enabled ? (a = null, n = null, r = null) : u.default && (u.kind !== "descriptions" || n ? u.kind in t && !r && (r = u) : n = u);
    }
    a ? a.mode = "showing" : r ? r.mode = "showing" : n && (n.mode = "showing");
  }
  toggleDisplay() {
    this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show();
  }
  createEl() {
    return super.createEl("div", { className: "vjs-text-track-display" }, { translate: "yes", "aria-live": "off", "aria-atomic": "true" });
  }
  clearDisplay() {
    typeof E.WebVTT == "function" && E.WebVTT.processCues(E, [], this.el_);
  }
  updateDisplay() {
    const t = this.player_.textTracks(), e = this.options_.allowMultipleShowingTracks;
    if (this.clearDisplay(), e) {
      const a = [];
      for (let l = 0; l < t.length; ++l) {
        const u = t[l];
        u.mode === "showing" && a.push(u);
      }
      return void this.updateForTrack(a);
    }
    let s = null, n = null, r = t.length;
    for (; r--; ) {
      const a = t[r];
      a.mode === "showing" && (a.kind === "descriptions" ? s = a : n = a);
    }
    n ? (this.getAttribute("aria-live") !== "off" && this.setAttribute("aria-live", "off"), this.updateForTrack(n)) : s && (this.getAttribute("aria-live") !== "assertive" && this.setAttribute("aria-live", "assertive"), this.updateForTrack(s));
  }
  updateDisplayOverlay() {
    if (!this.player_.videoHeight() || !E.CSS.supports("inset-inline: 10px")) return;
    const t = this.player_.currentWidth(), e = this.player_.currentHeight(), s = t / e, n = this.player_.videoWidth() / this.player_.videoHeight();
    let r = 0, a = 0;
    Math.abs(s - n) > 0.1 && (s > n ? r = Math.round((t - e * n) / 2) : a = Math.round((e - t / n) / 2)), js(this.el_, "insetInline", sd(r)), js(this.el_, "insetBlock", sd(a));
  }
  updateDisplayState(t) {
    const e = this.player_.textTrackSettings.getValues(), s = t.activeCues;
    let n = s.length;
    for (; n--; ) {
      const r = s[n];
      if (!r) continue;
      const a = r.displayState;
      if (e.color && (a.firstChild.style.color = e.color), e.textOpacity && js(a.firstChild, "color", to(e.color || "#fff", e.textOpacity)), e.backgroundColor && (a.firstChild.style.backgroundColor = e.backgroundColor), e.backgroundOpacity && js(a.firstChild, "backgroundColor", to(e.backgroundColor || "#000", e.backgroundOpacity)), e.windowColor && (e.windowOpacity ? js(a, "backgroundColor", to(e.windowColor, e.windowOpacity)) : a.style.backgroundColor = e.windowColor), e.edgeStyle && (e.edgeStyle === "dropshadow" ? a.firstChild.style.textShadow = `2px 2px 3px ${oe}, 2px 2px 4px ${oe}, 2px 2px 5px ${oe}` : e.edgeStyle === "raised" ? a.firstChild.style.textShadow = `1px 1px ${oe}, 2px 2px ${oe}, 3px 3px ${oe}` : e.edgeStyle === "depressed" ? a.firstChild.style.textShadow = `1px 1px ${id}, 0 1px ${id}, -1px -1px ${oe}, 0 -1px ${oe}` : e.edgeStyle === "uniform" && (a.firstChild.style.textShadow = `0 0 4px ${oe}, 0 0 4px ${oe}, 0 0 4px ${oe}, 0 0 4px ${oe}`)), e.fontPercent && e.fontPercent !== 1) {
        const l = E.parseFloat(a.style.fontSize);
        a.style.fontSize = l * e.fontPercent + "px", a.style.height = "auto", a.style.top = "auto";
      }
      e.fontFamily && e.fontFamily !== "default" && (e.fontFamily === "small-caps" ? a.firstChild.style.fontVariant = "small-caps" : a.firstChild.style.fontFamily = db[e.fontFamily]);
    }
  }
  updateForTrack(t) {
    if (Array.isArray(t) || (t = [t]), typeof E.WebVTT != "function" || t.every((s) => !s.activeCues)) return;
    const e = [];
    for (let s = 0; s < t.length; ++s) {
      const n = t[s];
      for (let r = 0; r < n.activeCues.length; ++r) e.push(n.activeCues[r]);
    }
    E.WebVTT.processCues(E, e, this.el_);
    for (let s = 0; s < t.length; ++s) {
      const n = t[s];
      for (let r = 0; r < n.activeCues.length; ++r) {
        const a = n.activeCues[r].displayState;
        Ai(a, "vjs-text-track-cue", "vjs-text-track-cue-" + (n.language ? n.language : s)), n.language && ps(a, "lang", n.language);
      }
      this.player_.textTrackSettings && this.updateDisplayState(n);
    }
  }
}
R.registerComponent("TextTrackDisplay", cb);
class pb extends R {
  createEl() {
    const t = this.player_.isAudio(), e = this.localize(t ? "Audio Player" : "Video Player"), s = Y("span", { className: "vjs-control-text", textContent: this.localize("{1} is loading.", [e]) }), n = super.createEl("div", { className: "vjs-loading-spinner", dir: "ltr" });
    return n.appendChild(s), n;
  }
  handleLanguagechange() {
    this.$(".vjs-control-text").textContent = this.localize("{1} is loading.", [this.player_.isAudio() ? "Audio Player" : "Video Player"]);
  }
}
R.registerComponent("LoadingSpinner", pb);
class re extends ea {
  createEl(t, e = {}, s = {}) {
    const n = Y("button", e = Object.assign({ className: this.buildCSSClass() }, e), s = Object.assign({ type: "button" }, s));
    return this.player_.options_.experimentalSvgIcons || n.appendChild(Y("span", { className: "vjs-icon-placeholder" }, { "aria-hidden": !0 })), this.createControlTextEl(n), n;
  }
  addChild(t, e = {}) {
    const s = this.constructor.name;
    return J.warn(`Adding an actionable (user controllable) child to a Button (${s}) is not supported; use a ClickableComponent instead.`), R.prototype.addChild.call(this, t, e);
  }
  enable() {
    super.enable(), this.el_.removeAttribute("disabled");
  }
  disable() {
    super.disable(), this.el_.setAttribute("disabled", "disabled");
  }
  handleKeyDown(t) {
    X.isEventKey(t, "Space") || X.isEventKey(t, "Enter") ? t.stopPropagation() : super.handleKeyDown(t);
  }
}
R.registerComponent("Button", re);
class nd extends re {
  constructor(t, e) {
    super(t, e), this.mouseused_ = !1, this.setIcon("play"), this.on("mousedown", (s) => this.handleMouseDown(s));
  }
  buildCSSClass() {
    return "vjs-big-play-button";
  }
  handleClick(t) {
    const e = this.player_.play();
    if (this.mouseused_ && "clientX" in t && "clientY" in t) return xe(e), void (this.player_.tech(!0) && this.player_.tech(!0).focus());
    const s = this.player_.getChild("controlBar"), n = s && s.getChild("playToggle");
    if (!n) return void this.player_.tech(!0).focus();
    const r = () => n.focus();
    en(e) ? e.then(r, () => {
    }) : this.setTimeout(r, 1);
  }
  handleKeyDown(t) {
    this.mouseused_ = !1, super.handleKeyDown(t);
  }
  handleMouseDown(t) {
    this.mouseused_ = !0;
  }
}
nd.prototype.controlText_ = "Play Video", R.registerComponent("BigPlayButton", nd);
class mb extends re {
  constructor(t, e) {
    super(t, e), this.setIcon("cancel"), this.controlText(e && e.controlText || this.localize("Close"));
  }
  buildCSSClass() {
    return `vjs-close-button ${super.buildCSSClass()}`;
  }
  handleClick(t) {
    this.trigger({ type: "close", bubbles: !1 });
  }
  handleKeyDown(t) {
    X.isEventKey(t, "Esc") ? (t.preventDefault(), t.stopPropagation(), this.trigger("click")) : super.handleKeyDown(t);
  }
}
R.registerComponent("CloseButton", mb);
class rd extends re {
  constructor(t, e = {}) {
    super(t, e), e.replay = e.replay === void 0 || e.replay, this.setIcon("play"), this.on(t, "play", (s) => this.handlePlay(s)), this.on(t, "pause", (s) => this.handlePause(s)), e.replay && this.on(t, "ended", (s) => this.handleEnded(s));
  }
  buildCSSClass() {
    return `vjs-play-control ${super.buildCSSClass()}`;
  }
  handleClick(t) {
    this.player_.paused() ? xe(this.player_.play()) : this.player_.pause();
  }
  handleSeeked(t) {
    this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(t) : this.handlePlay(t);
  }
  handlePlay(t) {
    this.removeClass("vjs-ended", "vjs-paused"), this.addClass("vjs-playing"), this.setIcon("pause"), this.controlText("Pause");
  }
  handlePause(t) {
    this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.setIcon("play"), this.controlText("Play");
  }
  handleEnded(t) {
    this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.setIcon("replay"), this.controlText("Replay"), this.one(this.player_, "seeked", (e) => this.handleSeeked(e));
  }
}
rd.prototype.controlText_ = "Play", R.registerComponent("PlayToggle", rd);
class ns extends R {
  constructor(t, e) {
    super(t, e), this.on(t, ["timeupdate", "ended", "seeking"], (s) => this.update(s)), this.updateTextNode_();
  }
  createEl() {
    const t = this.buildCSSClass(), e = super.createEl("div", { className: `${t} vjs-time-control vjs-control` }), s = Y("span", { className: "vjs-control-text", textContent: `${this.localize(this.labelText_)} ` }, { role: "presentation" });
    return e.appendChild(s), this.contentEl_ = Y("span", { className: `${t}-display` }, { role: "presentation" }), e.appendChild(this.contentEl_), e;
  }
  dispose() {
    this.contentEl_ = null, this.textNode_ = null, super.dispose();
  }
  update(t) {
    (this.player_.options_.enableSmoothSeeking || t.type !== "seeking") && this.updateContent(t);
  }
  updateTextNode_(t = 0) {
    t = Di(t), this.formattedTime_ !== t && (this.formattedTime_ = t, this.requestNamedAnimationFrame("TimeDisplay#updateTextNode_", () => {
      if (!this.contentEl_) return;
      let e = this.textNode_;
      e && this.contentEl_.firstChild !== e && (e = null, J.warn("TimeDisplay#updateTextnode_: Prevented replacement of text node element since it was no longer a child of this node. Appending a new node instead.")), this.textNode_ = q.createTextNode(this.formattedTime_), this.textNode_ && (e ? this.contentEl_.replaceChild(this.textNode_, e) : this.contentEl_.appendChild(this.textNode_));
    }));
  }
  updateContent(t) {
  }
}
ns.prototype.labelText_ = "Time", ns.prototype.controlText_ = "Time", R.registerComponent("TimeDisplay", ns);
class eo extends ns {
  buildCSSClass() {
    return "vjs-current-time";
  }
  updateContent(t) {
    let e;
    e = this.player_.ended() ? this.player_.duration() : this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(), this.updateTextNode_(e);
  }
}
eo.prototype.labelText_ = "Current Time", eo.prototype.controlText_ = "Current Time", R.registerComponent("CurrentTimeDisplay", eo);
class io extends ns {
  constructor(t, e) {
    super(t, e);
    const s = (n) => this.updateContent(n);
    this.on(t, "durationchange", s), this.on(t, "loadstart", s), this.on(t, "loadedmetadata", s);
  }
  buildCSSClass() {
    return "vjs-duration";
  }
  updateContent(t) {
    const e = this.player_.duration();
    this.updateTextNode_(e);
  }
}
io.prototype.labelText_ = "Duration", io.prototype.controlText_ = "Duration", R.registerComponent("DurationDisplay", io);
class gb extends R {
  createEl() {
    const t = super.createEl("div", { className: "vjs-time-control vjs-time-divider" }, { "aria-hidden": !0 }), e = super.createEl("div"), s = super.createEl("span", { textContent: "/" });
    return e.appendChild(s), t.appendChild(e), t;
  }
}
R.registerComponent("TimeDivider", gb);
class so extends ns {
  constructor(t, e) {
    super(t, e), this.on(t, "durationchange", (s) => this.updateContent(s));
  }
  buildCSSClass() {
    return "vjs-remaining-time";
  }
  createEl() {
    const t = super.createEl();
    return this.options_.displayNegative !== !1 && t.insertBefore(Y("span", {}, { "aria-hidden": !0 }, "-"), this.contentEl_), t;
  }
  updateContent(t) {
    if (typeof this.player_.duration() != "number") return;
    let e;
    e = this.player_.ended() ? 0 : this.player_.remainingTimeDisplay ? this.player_.remainingTimeDisplay() : this.player_.remainingTime(), this.updateTextNode_(e);
  }
}
so.prototype.labelText_ = "Remaining Time", so.prototype.controlText_ = "Remaining Time", R.registerComponent("RemainingTimeDisplay", so);
class fb extends R {
  constructor(t, e) {
    super(t, e), this.updateShowing(), this.on(this.player(), "durationchange", (s) => this.updateShowing(s));
  }
  createEl() {
    const t = super.createEl("div", { className: "vjs-live-control vjs-control" });
    return this.contentEl_ = Y("div", { className: "vjs-live-display" }, { "aria-live": "off" }), this.contentEl_.appendChild(Y("span", { className: "vjs-control-text", textContent: `${this.localize("Stream Type")} ` })), this.contentEl_.appendChild(q.createTextNode(this.localize("LIVE"))), t.appendChild(this.contentEl_), t;
  }
  dispose() {
    this.contentEl_ = null, super.dispose();
  }
  updateShowing(t) {
    this.player().duration() === 1 / 0 ? this.show() : this.hide();
  }
}
R.registerComponent("LiveDisplay", fb);
class ad extends re {
  constructor(t, e) {
    super(t, e), this.updateLiveEdgeStatus(), this.player_.liveTracker && (this.updateLiveEdgeStatusHandler_ = (s) => this.updateLiveEdgeStatus(s), this.on(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatusHandler_));
  }
  createEl() {
    const t = super.createEl("button", { className: "vjs-seek-to-live-control vjs-control" });
    return this.setIcon("circle", t), this.textEl_ = Y("span", { className: "vjs-seek-to-live-text", textContent: this.localize("LIVE") }, { "aria-hidden": "true" }), t.appendChild(this.textEl_), t;
  }
  updateLiveEdgeStatus() {
    !this.player_.liveTracker || this.player_.liveTracker.atLiveEdge() ? (this.setAttribute("aria-disabled", !0), this.addClass("vjs-at-live-edge"), this.controlText("Seek to live, currently playing live")) : (this.setAttribute("aria-disabled", !1), this.removeClass("vjs-at-live-edge"), this.controlText("Seek to live, currently behind live"));
  }
  handleClick() {
    this.player_.liveTracker.seekToLiveEdge();
  }
  dispose() {
    this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatusHandler_), this.textEl_ = null, super.dispose();
  }
}
function yn(i, t, e) {
  return i = Number(i), Math.min(e, Math.max(t, isNaN(i) ? t : i));
}
ad.prototype.controlText_ = "Seek to live, currently playing live", R.registerComponent("SeekToLive", ad);
var yb = Object.freeze({ __proto__: null, clamp: yn });
class Dl extends R {
  constructor(t, e) {
    super(t, e), this.handleMouseDown_ = (s) => this.handleMouseDown(s), this.handleMouseUp_ = (s) => this.handleMouseUp(s), this.handleKeyDown_ = (s) => this.handleKeyDown(s), this.handleClick_ = (s) => this.handleClick(s), this.handleMouseMove_ = (s) => this.handleMouseMove(s), this.update_ = (s) => this.update(s), this.bar = this.getChild(this.options_.barName), this.vertical(!!this.options_.vertical), this.enable();
  }
  enabled() {
    return this.enabled_;
  }
  enable() {
    this.enabled() || (this.on("mousedown", this.handleMouseDown_), this.on("touchstart", this.handleMouseDown_), this.on("keydown", this.handleKeyDown_), this.on("click", this.handleClick_), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0);
  }
  disable() {
    if (!this.enabled()) return;
    const t = this.bar.el_.ownerDocument;
    this.off("mousedown", this.handleMouseDown_), this.off("touchstart", this.handleMouseDown_), this.off("keydown", this.handleKeyDown_), this.off("click", this.handleClick_), this.off(this.player_, "controlsvisible", this.update_), this.off(t, "mousemove", this.handleMouseMove_), this.off(t, "mouseup", this.handleMouseUp_), this.off(t, "touchmove", this.handleMouseMove_), this.off(t, "touchend", this.handleMouseUp_), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1;
  }
  createEl(t, e = {}, s = {}) {
    return e.className = e.className + " vjs-slider", e = Object.assign({ tabIndex: 0 }, e), s = Object.assign({ role: "slider", "aria-valuenow": 0, "aria-valuemin": 0, "aria-valuemax": 100 }, s), super.createEl(t, e, s);
  }
  handleMouseDown(t) {
    const e = this.bar.el_.ownerDocument;
    t.type === "mousedown" && t.preventDefault(), t.type !== "touchstart" || Ne || t.preventDefault(), Ep(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(e, "mousemove", this.handleMouseMove_), this.on(e, "mouseup", this.handleMouseUp_), this.on(e, "touchmove", this.handleMouseMove_), this.on(e, "touchend", this.handleMouseUp_), this.handleMouseMove(t, !0);
  }
  handleMouseMove(t) {
  }
  handleMouseUp(t) {
    const e = this.bar.el_.ownerDocument;
    wp(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(e, "mousemove", this.handleMouseMove_), this.off(e, "mouseup", this.handleMouseUp_), this.off(e, "touchmove", this.handleMouseMove_), this.off(e, "touchend", this.handleMouseUp_), this.update();
  }
  update() {
    if (!this.el_ || !this.bar) return;
    const t = this.getProgress();
    return t === this.progress_ || (this.progress_ = t, this.requestNamedAnimationFrame("Slider#update", () => {
      const e = this.vertical() ? "height" : "width";
      this.bar.el().style[e] = (100 * t).toFixed(2) + "%";
    })), t;
  }
  getProgress() {
    return Number(yn(this.getPercent(), 0, 1).toFixed(4));
  }
  calculateDistance(t) {
    const e = Kr(this.el_, t);
    return this.vertical() ? e.y : e.x;
  }
  handleKeyDown(t) {
    X.isEventKey(t, "Left") || X.isEventKey(t, "Down") ? (t.preventDefault(), t.stopPropagation(), this.stepBack()) : X.isEventKey(t, "Right") || X.isEventKey(t, "Up") ? (t.preventDefault(), t.stopPropagation(), this.stepForward()) : super.handleKeyDown(t);
  }
  handleClick(t) {
    t.stopPropagation(), t.preventDefault();
  }
  vertical(t) {
    if (t === void 0) return this.vertical_ || !1;
    this.vertical_ = !!t, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal");
  }
}
R.registerComponent("Slider", Dl);
const no = (i, t) => yn(i / t * 100, 0, 100).toFixed(2) + "%";
class _b extends R {
  constructor(t, e) {
    super(t, e), this.partEls_ = [], this.on(t, "progress", (s) => this.update(s));
  }
  createEl() {
    const t = super.createEl("div", { className: "vjs-load-progress" }), e = Y("span", { className: "vjs-control-text" }), s = Y("span", { textContent: this.localize("Loaded") }), n = q.createTextNode(": ");
    return this.percentageEl_ = Y("span", { className: "vjs-control-text-loaded-percentage", textContent: "0%" }), t.appendChild(e), e.appendChild(s), e.appendChild(n), e.appendChild(this.percentageEl_), t;
  }
  dispose() {
    this.partEls_ = null, this.percentageEl_ = null, super.dispose();
  }
  update(t) {
    this.requestNamedAnimationFrame("LoadProgressBar#update", () => {
      const e = this.player_.liveTracker, s = this.player_.buffered(), n = e && e.isLive() ? e.seekableEnd() : this.player_.duration(), r = this.player_.bufferedEnd(), a = this.partEls_, l = no(r, n);
      this.percent_ !== l && (this.el_.style.width = l, di(this.percentageEl_, l), this.percent_ = l);
      for (let u = 0; u < s.length; u++) {
        const p = s.start(u), g = s.end(u);
        let y = a[u];
        y || (y = this.el_.appendChild(Y()), a[u] = y), y.dataset.start === p && y.dataset.end === g || (y.dataset.start = p, y.dataset.end = g, y.style.left = no(p, r), y.style.width = no(g - p, r));
      }
      for (let u = a.length; u > s.length; u--) this.el_.removeChild(a[u - 1]);
      a.length = s.length;
    });
  }
}
R.registerComponent("LoadProgressBar", _b);
class vb extends R {
  constructor(t, e) {
    super(t, e), this.update = Ue(ut(this, this.update), ue);
  }
  createEl() {
    return super.createEl("div", { className: "vjs-time-tooltip" }, { "aria-hidden": "true" });
  }
  update(t, e, s) {
    const n = cn(this.el_), r = ms(this.player_.el()), a = t.width * e;
    if (!r || !n) return;
    let l = t.left - r.left + a, u = t.width - a + (r.right - t.right);
    u || (u = t.width - a, l = a);
    let p = n.width / 2;
    l < p ? p += p - l : u < p && (p = u), p < 0 ? p = 0 : p > n.width && (p = n.width), p = Math.round(p), this.el_.style.right = `-${p}px`, this.write(s);
  }
  write(t) {
    di(this.el_, t);
  }
  updateTime(t, e, s, n) {
    this.requestNamedAnimationFrame("TimeTooltip#updateTime", () => {
      let r;
      const a = this.player_.duration();
      if (this.player_.liveTracker && this.player_.liveTracker.isLive()) {
        const l = this.player_.liveTracker.liveWindow(), u = l - e * l;
        r = (u < 1 ? "" : "-") + Di(u, l);
      } else r = Di(s, a);
      this.update(t, e, r), n && n();
    });
  }
}
R.registerComponent("TimeTooltip", vb);
class ro extends R {
  constructor(t, e) {
    super(t, e), this.setIcon("circle"), this.update = Ue(ut(this, this.update), ue);
  }
  createEl() {
    return super.createEl("div", { className: "vjs-play-progress vjs-slider-bar" }, { "aria-hidden": "true" });
  }
  update(t, e) {
    const s = this.getChild("timeTooltip");
    if (!s) return;
    const n = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
    s.updateTime(t, e, n);
  }
}
ro.prototype.options_ = { children: [] }, $t || Oe || ro.prototype.options_.children.push("timeTooltip"), R.registerComponent("PlayProgressBar", ro);
class od extends R {
  constructor(t, e) {
    super(t, e), this.update = Ue(ut(this, this.update), ue);
  }
  createEl() {
    return super.createEl("div", { className: "vjs-mouse-display" });
  }
  update(t, e) {
    const s = e * this.player_.duration();
    this.getChild("timeTooltip").updateTime(t, e, s, () => {
      this.el_.style.left = t.width * e + "px";
    });
  }
}
od.prototype.options_ = { children: ["timeTooltip"] }, R.registerComponent("MouseTimeDisplay", od);
const Qn = 5, ld = 12;
class ao extends Dl {
  constructor(t, e) {
    super(t, e), this.setEventHandlers_();
  }
  setEventHandlers_() {
    this.update_ = ut(this, this.update), this.update = Ue(this.update_, ue), this.on(this.player_, ["ended", "durationchange", "timeupdate"], this.update), this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update), this.updateInterval = null, this.enableIntervalHandler_ = (t) => this.enableInterval_(t), this.disableIntervalHandler_ = (t) => this.disableInterval_(t), this.on(this.player_, ["playing"], this.enableIntervalHandler_), this.on(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_), "hidden" in q && "visibilityState" in q && this.on(q, "visibilitychange", this.toggleVisibility_);
  }
  toggleVisibility_(t) {
    q.visibilityState === "hidden" ? (this.cancelNamedAnimationFrame("SeekBar#update"), this.cancelNamedAnimationFrame("Slider#update"), this.disableInterval_(t)) : (this.player_.ended() || this.player_.paused() || this.enableInterval_(), this.update());
  }
  enableInterval_() {
    this.updateInterval || (this.updateInterval = this.setInterval(this.update, ue));
  }
  disableInterval_(t) {
    this.player_.liveTracker && this.player_.liveTracker.isLive() && t && t.type !== "ended" || this.updateInterval && (this.clearInterval(this.updateInterval), this.updateInterval = null);
  }
  createEl() {
    return super.createEl("div", { className: "vjs-progress-holder" }, { "aria-label": this.localize("Progress Bar") });
  }
  update(t) {
    if (q.visibilityState === "hidden") return;
    const e = super.update();
    return this.requestNamedAnimationFrame("SeekBar#update", () => {
      const s = this.player_.ended() ? this.player_.duration() : this.getCurrentTime_(), n = this.player_.liveTracker;
      let r = this.player_.duration();
      n && n.isLive() && (r = this.player_.liveTracker.liveCurrentTime()), this.percent_ !== e && (this.el_.setAttribute("aria-valuenow", (100 * e).toFixed(2)), this.percent_ = e), this.currentTime_ === s && this.duration_ === r || (this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [Di(s, r), Di(r, r)], "{1} of {2}")), this.currentTime_ = s, this.duration_ = r), this.bar && this.bar.update(ms(this.el()), this.getProgress());
    }), e;
  }
  userSeek_(t) {
    this.player_.liveTracker && this.player_.liveTracker.isLive() && this.player_.liveTracker.nextSeekedFromUser(), this.player_.currentTime(t);
  }
  getCurrentTime_() {
    return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
  }
  getPercent() {
    const t = this.getCurrentTime_();
    let e;
    const s = this.player_.liveTracker;
    return s && s.isLive() ? (e = (t - s.seekableStart()) / s.liveWindow(), s.atLiveEdge() && (e = 1)) : e = t / this.player_.duration(), e;
  }
  handleMouseDown(t) {
    pn(t) && (t.stopPropagation(), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), super.handleMouseDown(t));
  }
  handleMouseMove(t, e = !1) {
    if (!pn(t) || isNaN(this.player_.duration())) return;
    let s;
    e || this.player_.scrubbing() || this.player_.scrubbing(!0);
    const n = this.calculateDistance(t), r = this.player_.liveTracker;
    if (r && r.isLive()) {
      if (n >= 0.99) return void r.seekToLiveEdge();
      const a = r.seekableStart(), l = r.liveCurrentTime();
      if (s = a + n * r.liveWindow(), s >= l && (s = l), s <= a && (s = a + 0.1), s === 1 / 0) return;
    } else s = n * this.player_.duration(), s === this.player_.duration() && (s -= 0.1);
    this.userSeek_(s), this.player_.options_.enableSmoothSeeking && this.update();
  }
  enable() {
    super.enable();
    const t = this.getChild("mouseTimeDisplay");
    t && t.show();
  }
  disable() {
    super.disable();
    const t = this.getChild("mouseTimeDisplay");
    t && t.hide();
  }
  handleMouseUp(t) {
    super.handleMouseUp(t), t && t.stopPropagation(), this.player_.scrubbing(!1), this.player_.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 }), this.videoWasPlaying ? xe(this.player_.play()) : this.update_();
  }
  stepForward() {
    this.userSeek_(this.player_.currentTime() + Qn);
  }
  stepBack() {
    this.userSeek_(this.player_.currentTime() - Qn);
  }
  handleAction(t) {
    this.player_.paused() ? this.player_.play() : this.player_.pause();
  }
  handleKeyDown(t) {
    const e = this.player_.liveTracker;
    if (X.isEventKey(t, "Space") || X.isEventKey(t, "Enter")) t.preventDefault(), t.stopPropagation(), this.handleAction(t);
    else if (X.isEventKey(t, "Home")) t.preventDefault(), t.stopPropagation(), this.userSeek_(0);
    else if (X.isEventKey(t, "End")) t.preventDefault(), t.stopPropagation(), e && e.isLive() ? this.userSeek_(e.liveCurrentTime()) : this.userSeek_(this.player_.duration());
    else if (/^[0-9]$/.test(X(t))) {
      t.preventDefault(), t.stopPropagation();
      const s = 10 * (X.codes[X(t)] - X.codes[0]) / 100;
      e && e.isLive() ? this.userSeek_(e.seekableStart() + e.liveWindow() * s) : this.userSeek_(this.player_.duration() * s);
    } else X.isEventKey(t, "PgDn") ? (t.preventDefault(), t.stopPropagation(), this.userSeek_(this.player_.currentTime() - Qn * ld)) : X.isEventKey(t, "PgUp") ? (t.preventDefault(), t.stopPropagation(), this.userSeek_(this.player_.currentTime() + Qn * ld)) : super.handleKeyDown(t);
  }
  dispose() {
    this.disableInterval_(), this.off(this.player_, ["ended", "durationchange", "timeupdate"], this.update), this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.update), this.off(this.player_, ["playing"], this.enableIntervalHandler_), this.off(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_), "hidden" in q && "visibilityState" in q && this.off(q, "visibilitychange", this.toggleVisibility_), super.dispose();
  }
}
ao.prototype.options_ = { children: ["loadProgressBar", "playProgressBar"], barName: "playProgressBar" }, $t || Oe || ao.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), R.registerComponent("SeekBar", ao);
class hd extends R {
  constructor(t, e) {
    super(t, e), this.handleMouseMove = Ue(ut(this, this.handleMouseMove), ue), this.throttledHandleMouseSeek = Ue(ut(this, this.handleMouseSeek), ue), this.handleMouseUpHandler_ = (s) => this.handleMouseUp(s), this.handleMouseDownHandler_ = (s) => this.handleMouseDown(s), this.enable();
  }
  createEl() {
    return super.createEl("div", { className: "vjs-progress-control vjs-control" });
  }
  handleMouseMove(t) {
    const e = this.getChild("seekBar");
    if (!e) return;
    const s = e.getChild("playProgressBar"), n = e.getChild("mouseTimeDisplay");
    if (!s && !n) return;
    const r = e.el(), a = cn(r);
    let l = Kr(r, t).x;
    l = yn(l, 0, 1), n && n.update(a, l), s && s.update(a, e.getProgress());
  }
  handleMouseSeek(t) {
    const e = this.getChild("seekBar");
    e && e.handleMouseMove(t);
  }
  enabled() {
    return this.enabled_;
  }
  disable() {
    if (this.children().forEach((t) => t.disable && t.disable()), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDownHandler_), this.off(this.el_, "mousemove", this.handleMouseMove), this.removeListenersAddedOnMousedownAndTouchstart(), this.addClass("disabled"), this.enabled_ = !1, this.player_.scrubbing())) {
      const t = this.getChild("seekBar");
      this.player_.scrubbing(!1), t.videoWasPlaying && xe(this.player_.play());
    }
  }
  enable() {
    this.children().forEach((t) => t.enable && t.enable()), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDownHandler_), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0);
  }
  removeListenersAddedOnMousedownAndTouchstart() {
    const t = this.el_.ownerDocument;
    this.off(t, "mousemove", this.throttledHandleMouseSeek), this.off(t, "touchmove", this.throttledHandleMouseSeek), this.off(t, "mouseup", this.handleMouseUpHandler_), this.off(t, "touchend", this.handleMouseUpHandler_);
  }
  handleMouseDown(t) {
    const e = this.el_.ownerDocument, s = this.getChild("seekBar");
    s && s.handleMouseDown(t), this.on(e, "mousemove", this.throttledHandleMouseSeek), this.on(e, "touchmove", this.throttledHandleMouseSeek), this.on(e, "mouseup", this.handleMouseUpHandler_), this.on(e, "touchend", this.handleMouseUpHandler_);
  }
  handleMouseUp(t) {
    const e = this.getChild("seekBar");
    e && e.handleMouseUp(t), this.removeListenersAddedOnMousedownAndTouchstart();
  }
}
hd.prototype.options_ = { children: ["seekBar"] }, R.registerComponent("ProgressControl", hd);
class ud extends re {
  constructor(t, e) {
    super(t, e), this.setIcon("picture-in-picture-enter"), this.on(t, ["enterpictureinpicture", "leavepictureinpicture"], (s) => this.handlePictureInPictureChange(s)), this.on(t, ["disablepictureinpicturechanged", "loadedmetadata"], (s) => this.handlePictureInPictureEnabledChange(s)), this.on(t, ["loadedmetadata", "audioonlymodechange", "audiopostermodechange"], () => this.handlePictureInPictureAudioModeChange()), this.disable();
  }
  buildCSSClass() {
    return `vjs-picture-in-picture-control vjs-hidden ${super.buildCSSClass()}`;
  }
  handlePictureInPictureAudioModeChange() {
    this.player_.currentType().substring(0, 5) === "audio" || this.player_.audioPosterMode() || this.player_.audioOnlyMode() ? (this.player_.isInPictureInPicture() && this.player_.exitPictureInPicture(), this.hide()) : this.show();
  }
  handlePictureInPictureEnabledChange() {
    q.pictureInPictureEnabled && this.player_.disablePictureInPicture() === !1 || this.player_.options_.enableDocumentPictureInPicture && "documentPictureInPicture" in E ? this.enable() : this.disable();
  }
  handlePictureInPictureChange(t) {
    this.player_.isInPictureInPicture() ? (this.setIcon("picture-in-picture-exit"), this.controlText("Exit Picture-in-Picture")) : (this.setIcon("picture-in-picture-enter"), this.controlText("Picture-in-Picture")), this.handlePictureInPictureEnabledChange();
  }
  handleClick(t) {
    this.player_.isInPictureInPicture() ? this.player_.exitPictureInPicture() : this.player_.requestPictureInPicture();
  }
  show() {
    typeof q.exitPictureInPicture == "function" && super.show();
  }
}
ud.prototype.controlText_ = "Picture-in-Picture", R.registerComponent("PictureInPictureToggle", ud);
class dd extends re {
  constructor(t, e) {
    super(t, e), this.setIcon("fullscreen-enter"), this.on(t, "fullscreenchange", (s) => this.handleFullscreenChange(s)), q[t.fsApi_.fullscreenEnabled] === !1 && this.disable();
  }
  buildCSSClass() {
    return `vjs-fullscreen-control ${super.buildCSSClass()}`;
  }
  handleFullscreenChange(t) {
    this.player_.isFullscreen() ? (this.controlText("Exit Fullscreen"), this.setIcon("fullscreen-exit")) : (this.controlText("Fullscreen"), this.setIcon("fullscreen-enter"));
  }
  handleClick(t) {
    this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen();
  }
}
dd.prototype.controlText_ = "Fullscreen", R.registerComponent("FullscreenToggle", dd);
const bb = function(i, t) {
  t.tech_ && !t.tech_.featuresVolumeControl && i.addClass("vjs-hidden"), i.on(t, "loadstart", function() {
    t.tech_.featuresVolumeControl ? i.removeClass("vjs-hidden") : i.addClass("vjs-hidden");
  });
};
class Tb extends R {
  createEl() {
    const t = super.createEl("div", { className: "vjs-volume-level" });
    return this.setIcon("circle", t), t.appendChild(super.createEl("span", { className: "vjs-control-text" })), t;
  }
}
R.registerComponent("VolumeLevel", Tb);
class Sb extends R {
  constructor(t, e) {
    super(t, e), this.update = Ue(ut(this, this.update), ue);
  }
  createEl() {
    return super.createEl("div", { className: "vjs-volume-tooltip" }, { "aria-hidden": "true" });
  }
  update(t, e, s, n) {
    if (!s) {
      const r = ms(this.el_), a = ms(this.player_.el()), l = t.width * e;
      if (!a || !r) return;
      const u = t.left - a.left + l, p = t.width - l + (a.right - t.right);
      let g = r.width / 2;
      u < g ? g += g - u : p < g && (g = p), g < 0 ? g = 0 : g > r.width && (g = r.width), this.el_.style.right = `-${g}px`;
    }
    this.write(`${n}%`);
  }
  write(t) {
    di(this.el_, t);
  }
  updateVolume(t, e, s, n, r) {
    this.requestNamedAnimationFrame("VolumeLevelTooltip#updateVolume", () => {
      this.update(t, e, s, n.toFixed(0)), r && r();
    });
  }
}
R.registerComponent("VolumeLevelTooltip", Sb);
class cd extends R {
  constructor(t, e) {
    super(t, e), this.update = Ue(ut(this, this.update), ue);
  }
  createEl() {
    return super.createEl("div", { className: "vjs-mouse-display" });
  }
  update(t, e, s) {
    const n = 100 * e;
    this.getChild("volumeLevelTooltip").updateVolume(t, e, s, n, () => {
      s ? this.el_.style.bottom = t.height * e + "px" : this.el_.style.left = t.width * e + "px";
    });
  }
}
cd.prototype.options_ = { children: ["volumeLevelTooltip"] }, R.registerComponent("MouseVolumeLevelDisplay", cd);
class Jn extends Dl {
  constructor(t, e) {
    super(t, e), this.on("slideractive", (s) => this.updateLastVolume_(s)), this.on(t, "volumechange", (s) => this.updateARIAAttributes(s)), t.ready(() => this.updateARIAAttributes());
  }
  createEl() {
    return super.createEl("div", { className: "vjs-volume-bar vjs-slider-bar" }, { "aria-label": this.localize("Volume Level"), "aria-live": "polite" });
  }
  handleMouseDown(t) {
    pn(t) && super.handleMouseDown(t);
  }
  handleMouseMove(t) {
    const e = this.getChild("mouseVolumeLevelDisplay");
    if (e) {
      const s = this.el(), n = ms(s), r = this.vertical();
      let a = Kr(s, t);
      a = r ? a.y : a.x, a = yn(a, 0, 1), e.update(n, a, r);
    }
    pn(t) && (this.checkMuted(), this.player_.volume(this.calculateDistance(t)));
  }
  checkMuted() {
    this.player_.muted() && this.player_.muted(!1);
  }
  getPercent() {
    return this.player_.muted() ? 0 : this.player_.volume();
  }
  stepForward() {
    this.checkMuted(), this.player_.volume(this.player_.volume() + 0.1);
  }
  stepBack() {
    this.checkMuted(), this.player_.volume(this.player_.volume() - 0.1);
  }
  updateARIAAttributes(t) {
    const e = this.player_.muted() ? 0 : this.volumeAsPercentage_();
    this.el_.setAttribute("aria-valuenow", e), this.el_.setAttribute("aria-valuetext", e + "%");
  }
  volumeAsPercentage_() {
    return Math.round(100 * this.player_.volume());
  }
  updateLastVolume_() {
    const t = this.player_.volume();
    this.one("sliderinactive", () => {
      this.player_.volume() === 0 && this.player_.lastVolume_(t);
    });
  }
}
Jn.prototype.options_ = { children: ["volumeLevel"], barName: "volumeLevel" }, $t || Oe || Jn.prototype.options_.children.splice(0, 0, "mouseVolumeLevelDisplay"), Jn.prototype.playerEvent = "volumechange", R.registerComponent("VolumeBar", Jn);
class pd extends R {
  constructor(t, e = {}) {
    e.vertical = e.vertical || !1, (e.volumeBar === void 0 || cs(e.volumeBar)) && (e.volumeBar = e.volumeBar || {}, e.volumeBar.vertical = e.vertical), super(t, e), bb(this, t), this.throttledHandleMouseMove = Ue(ut(this, this.handleMouseMove), ue), this.handleMouseUpHandler_ = (s) => this.handleMouseUp(s), this.on("mousedown", (s) => this.handleMouseDown(s)), this.on("touchstart", (s) => this.handleMouseDown(s)), this.on("mousemove", (s) => this.handleMouseMove(s)), this.on(this.volumeBar, ["focus", "slideractive"], () => {
      this.volumeBar.addClass("vjs-slider-active"), this.addClass("vjs-slider-active"), this.trigger("slideractive");
    }), this.on(this.volumeBar, ["blur", "sliderinactive"], () => {
      this.volumeBar.removeClass("vjs-slider-active"), this.removeClass("vjs-slider-active"), this.trigger("sliderinactive");
    });
  }
  createEl() {
    let t = "vjs-volume-horizontal";
    return this.options_.vertical && (t = "vjs-volume-vertical"), super.createEl("div", { className: `vjs-volume-control vjs-control ${t}` });
  }
  handleMouseDown(t) {
    const e = this.el_.ownerDocument;
    this.on(e, "mousemove", this.throttledHandleMouseMove), this.on(e, "touchmove", this.throttledHandleMouseMove), this.on(e, "mouseup", this.handleMouseUpHandler_), this.on(e, "touchend", this.handleMouseUpHandler_);
  }
  handleMouseUp(t) {
    const e = this.el_.ownerDocument;
    this.off(e, "mousemove", this.throttledHandleMouseMove), this.off(e, "touchmove", this.throttledHandleMouseMove), this.off(e, "mouseup", this.handleMouseUpHandler_), this.off(e, "touchend", this.handleMouseUpHandler_);
  }
  handleMouseMove(t) {
    this.volumeBar.handleMouseMove(t);
  }
}
pd.prototype.options_ = { children: ["volumeBar"] }, R.registerComponent("VolumeControl", pd);
const Eb = function(i, t) {
  t.tech_ && !t.tech_.featuresMuteControl && i.addClass("vjs-hidden"), i.on(t, "loadstart", function() {
    t.tech_.featuresMuteControl ? i.removeClass("vjs-hidden") : i.addClass("vjs-hidden");
  });
};
class md extends re {
  constructor(t, e) {
    super(t, e), Eb(this, t), this.on(t, ["loadstart", "volumechange"], (s) => this.update(s));
  }
  buildCSSClass() {
    return `vjs-mute-control ${super.buildCSSClass()}`;
  }
  handleClick(t) {
    const e = this.player_.volume(), s = this.player_.lastVolume_();
    if (e === 0) {
      const n = s < 0.1 ? 0.1 : s;
      this.player_.volume(n), this.player_.muted(!1);
    } else this.player_.muted(!this.player_.muted());
  }
  update(t) {
    this.updateIcon_(), this.updateControlText_();
  }
  updateIcon_() {
    const t = this.player_.volume();
    let e = 3;
    this.setIcon("volume-high"), $t && this.player_.tech_ && this.player_.tech_.el_ && this.player_.muted(this.player_.tech_.el_.muted), t === 0 || this.player_.muted() ? (this.setIcon("volume-mute"), e = 0) : t < 0.33 ? (this.setIcon("volume-low"), e = 1) : t < 0.67 && (this.setIcon("volume-medium"), e = 2), Gr(this.el_, [0, 1, 2, 3].reduce((s, n) => s + `${n ? " " : ""}vjs-vol-${n}`, "")), Ai(this.el_, `vjs-vol-${e}`);
  }
  updateControlText_() {
    const t = this.player_.muted() || this.player_.volume() === 0 ? "Unmute" : "Mute";
    this.controlText() !== t && this.controlText(t);
  }
}
md.prototype.controlText_ = "Mute", R.registerComponent("MuteToggle", md);
class gd extends R {
  constructor(t, e = {}) {
    e.inline !== void 0 ? e.inline = e.inline : e.inline = !0, (e.volumeControl === void 0 || cs(e.volumeControl)) && (e.volumeControl = e.volumeControl || {}, e.volumeControl.vertical = !e.inline), super(t, e), this.handleKeyPressHandler_ = (s) => this.handleKeyPress(s), this.on(t, ["loadstart"], (s) => this.volumePanelState_(s)), this.on(this.muteToggle, "keyup", (s) => this.handleKeyPress(s)), this.on(this.volumeControl, "keyup", (s) => this.handleVolumeControlKeyUp(s)), this.on("keydown", (s) => this.handleKeyPress(s)), this.on("mouseover", (s) => this.handleMouseOver(s)), this.on("mouseout", (s) => this.handleMouseOut(s)), this.on(this.volumeControl, ["slideractive"], this.sliderActive_), this.on(this.volumeControl, ["sliderinactive"], this.sliderInactive_);
  }
  sliderActive_() {
    this.addClass("vjs-slider-active");
  }
  sliderInactive_() {
    this.removeClass("vjs-slider-active");
  }
  volumePanelState_() {
    this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only");
  }
  createEl() {
    let t = "vjs-volume-panel-horizontal";
    return this.options_.inline || (t = "vjs-volume-panel-vertical"), super.createEl("div", { className: `vjs-volume-panel vjs-control ${t}` });
  }
  dispose() {
    this.handleMouseOut(), super.dispose();
  }
  handleVolumeControlKeyUp(t) {
    X.isEventKey(t, "Esc") && this.muteToggle.focus();
  }
  handleMouseOver(t) {
    this.addClass("vjs-hover"), ae(q, "keyup", this.handleKeyPressHandler_);
  }
  handleMouseOut(t) {
    this.removeClass("vjs-hover"), Mt(q, "keyup", this.handleKeyPressHandler_);
  }
  handleKeyPress(t) {
    X.isEventKey(t, "Esc") && this.handleMouseOut();
  }
}
gd.prototype.options_ = { children: ["muteToggle", "volumeControl"] }, R.registerComponent("VolumePanel", gd);
class fd extends re {
  constructor(t, e) {
    super(t, e), this.validOptions = [5, 10, 30], this.skipTime = this.getSkipForwardTime(), this.skipTime && this.validOptions.includes(this.skipTime) ? (this.setIcon(`forward-${this.skipTime}`), this.controlText(this.localize("Skip forward {1} seconds", [this.skipTime.toLocaleString(t.language())])), this.show()) : this.hide();
  }
  getSkipForwardTime() {
    const t = this.options_.playerOptions;
    return t.controlBar && t.controlBar.skipButtons && t.controlBar.skipButtons.forward;
  }
  buildCSSClass() {
    return `vjs-skip-forward-${this.getSkipForwardTime()} ${super.buildCSSClass()}`;
  }
  handleClick(t) {
    if (isNaN(this.player_.duration())) return;
    const e = this.player_.currentTime(), s = this.player_.liveTracker, n = s && s.isLive() ? s.seekableEnd() : this.player_.duration();
    let r;
    r = e + this.skipTime <= n ? e + this.skipTime : n, this.player_.currentTime(r);
  }
  handleLanguagechange() {
    this.controlText(this.localize("Skip forward {1} seconds", [this.skipTime]));
  }
}
fd.prototype.controlText_ = "Skip Forward", R.registerComponent("SkipForward", fd);
class yd extends re {
  constructor(t, e) {
    super(t, e), this.validOptions = [5, 10, 30], this.skipTime = this.getSkipBackwardTime(), this.skipTime && this.validOptions.includes(this.skipTime) ? (this.setIcon(`replay-${this.skipTime}`), this.controlText(this.localize("Skip backward {1} seconds", [this.skipTime.toLocaleString(t.language())])), this.show()) : this.hide();
  }
  getSkipBackwardTime() {
    const t = this.options_.playerOptions;
    return t.controlBar && t.controlBar.skipButtons && t.controlBar.skipButtons.backward;
  }
  buildCSSClass() {
    return `vjs-skip-backward-${this.getSkipBackwardTime()} ${super.buildCSSClass()}`;
  }
  handleClick(t) {
    const e = this.player_.currentTime(), s = this.player_.liveTracker, n = s && s.isLive() && s.seekableStart();
    let r;
    r = n && e - this.skipTime <= n ? n : e >= this.skipTime ? e - this.skipTime : 0, this.player_.currentTime(r);
  }
  handleLanguagechange() {
    this.controlText(this.localize("Skip backward {1} seconds", [this.skipTime]));
  }
}
yd.prototype.controlText_ = "Skip Backward", R.registerComponent("SkipBackward", yd);
class Gp extends R {
  constructor(t, e) {
    super(t, e), e && (this.menuButton_ = e.menuButton), this.focusedChild_ = -1, this.on("keydown", (s) => this.handleKeyDown(s)), this.boundHandleBlur_ = (s) => this.handleBlur(s), this.boundHandleTapClick_ = (s) => this.handleTapClick(s);
  }
  addEventListenerForItem(t) {
    t instanceof R && (this.on(t, "blur", this.boundHandleBlur_), this.on(t, ["tap", "click"], this.boundHandleTapClick_));
  }
  removeEventListenerForItem(t) {
    t instanceof R && (this.off(t, "blur", this.boundHandleBlur_), this.off(t, ["tap", "click"], this.boundHandleTapClick_));
  }
  removeChild(t) {
    typeof t == "string" && (t = this.getChild(t)), this.removeEventListenerForItem(t), super.removeChild(t);
  }
  addItem(t) {
    const e = this.addChild(t);
    e && this.addEventListenerForItem(e);
  }
  createEl() {
    const t = this.options_.contentElType || "ul";
    this.contentEl_ = Y(t, { className: "vjs-menu-content" }), this.contentEl_.setAttribute("role", "menu");
    const e = super.createEl("div", { append: this.contentEl_, className: "vjs-menu" });
    return e.appendChild(this.contentEl_), ae(e, "click", function(s) {
      s.preventDefault(), s.stopImmediatePropagation();
    }), e;
  }
  dispose() {
    this.contentEl_ = null, this.boundHandleBlur_ = null, this.boundHandleTapClick_ = null, super.dispose();
  }
  handleBlur(t) {
    const e = t.relatedTarget || q.activeElement;
    if (!this.children().some((s) => s.el() === e)) {
      const s = this.menuButton_;
      s && s.buttonPressed_ && e !== s.el().firstChild && s.unpressButton();
    }
  }
  handleTapClick(t) {
    if (this.menuButton_) {
      this.menuButton_.unpressButton();
      const e = this.children();
      if (!Array.isArray(e)) return;
      const s = e.filter((n) => n.el() === t.target)[0];
      if (!s) return;
      s.name() !== "CaptionSettingsMenuItem" && this.menuButton_.focus();
    }
  }
  handleKeyDown(t) {
    X.isEventKey(t, "Left") || X.isEventKey(t, "Down") ? (t.preventDefault(), t.stopPropagation(), this.stepForward()) : (X.isEventKey(t, "Right") || X.isEventKey(t, "Up")) && (t.preventDefault(), t.stopPropagation(), this.stepBack());
  }
  stepForward() {
    let t = 0;
    this.focusedChild_ !== void 0 && (t = this.focusedChild_ + 1), this.focus(t);
  }
  stepBack() {
    let t = 0;
    this.focusedChild_ !== void 0 && (t = this.focusedChild_ - 1), this.focus(t);
  }
  focus(t = 0) {
    const e = this.children().slice();
    e.length && e[0].hasClass("vjs-menu-title") && e.shift(), e.length > 0 && (t < 0 ? t = 0 : t >= e.length && (t = e.length - 1), this.focusedChild_ = t, e[t].el_.focus());
  }
}
R.registerComponent("Menu", Gp);
class Ll extends R {
  constructor(t, e = {}) {
    super(t, e), this.menuButton_ = new re(t, e), this.menuButton_.controlText(this.controlText_), this.menuButton_.el_.setAttribute("aria-haspopup", "true");
    const s = re.prototype.buildCSSClass();
    this.menuButton_.el_.className = this.buildCSSClass() + " " + s, this.menuButton_.removeClass("vjs-control"), this.addChild(this.menuButton_), this.update(), this.enabled_ = !0;
    const n = (r) => this.handleClick(r);
    this.handleMenuKeyUp_ = (r) => this.handleMenuKeyUp(r), this.on(this.menuButton_, "tap", n), this.on(this.menuButton_, "click", n), this.on(this.menuButton_, "keydown", (r) => this.handleKeyDown(r)), this.on(this.menuButton_, "mouseenter", () => {
      this.addClass("vjs-hover"), this.menu.show(), ae(q, "keyup", this.handleMenuKeyUp_);
    }), this.on("mouseleave", (r) => this.handleMouseLeave(r)), this.on("keydown", (r) => this.handleSubmenuKeyDown(r));
  }
  update() {
    const t = this.createMenu();
    this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = t, this.addChild(t), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? (this.hide(), this.menu.contentEl_.removeAttribute("role")) : (this.show(), this.menu.contentEl_.setAttribute("role", "menu"));
  }
  createMenu() {
    const t = new Gp(this.player_, { menuButton: this });
    if (this.hideThreshold_ = 0, this.options_.title) {
      const e = Y("li", { className: "vjs-menu-title", textContent: Et(this.options_.title), tabIndex: -1 }), s = new R(this.player_, { el: e });
      t.addItem(s);
    }
    if (this.items = this.createItems(), this.items) for (let e = 0; e < this.items.length; e++) t.addItem(this.items[e]);
    return t;
  }
  createItems() {
  }
  createEl() {
    return super.createEl("div", { className: this.buildWrapperCSSClass() }, {});
  }
  setIcon(t) {
    super.setIcon(t, this.menuButton_.el_);
  }
  buildWrapperCSSClass() {
    let t = "vjs-menu-button";
    return this.options_.inline === !0 ? t += "-inline" : t += "-popup", `vjs-menu-button ${t} ${re.prototype.buildCSSClass()} ${super.buildCSSClass()}`;
  }
  buildCSSClass() {
    let t = "vjs-menu-button";
    return this.options_.inline === !0 ? t += "-inline" : t += "-popup", `vjs-menu-button ${t} ${super.buildCSSClass()}`;
  }
  controlText(t, e = this.menuButton_.el()) {
    return this.menuButton_.controlText(t, e);
  }
  dispose() {
    this.handleMouseLeave(), super.dispose();
  }
  handleClick(t) {
    this.buttonPressed_ ? this.unpressButton() : this.pressButton();
  }
  handleMouseLeave(t) {
    this.removeClass("vjs-hover"), Mt(q, "keyup", this.handleMenuKeyUp_);
  }
  focus() {
    this.menuButton_.focus();
  }
  blur() {
    this.menuButton_.blur();
  }
  handleKeyDown(t) {
    X.isEventKey(t, "Esc") || X.isEventKey(t, "Tab") ? (this.buttonPressed_ && this.unpressButton(), X.isEventKey(t, "Tab") || (t.preventDefault(), this.menuButton_.focus())) : (X.isEventKey(t, "Up") || X.isEventKey(t, "Down")) && (this.buttonPressed_ || (t.preventDefault(), this.pressButton()));
  }
  handleMenuKeyUp(t) {
    (X.isEventKey(t, "Esc") || X.isEventKey(t, "Tab")) && this.removeClass("vjs-hover");
  }
  handleSubmenuKeyPress(t) {
    this.handleSubmenuKeyDown(t);
  }
  handleSubmenuKeyDown(t) {
    (X.isEventKey(t, "Esc") || X.isEventKey(t, "Tab")) && (this.buttonPressed_ && this.unpressButton(), X.isEventKey(t, "Tab") || (t.preventDefault(), this.menuButton_.focus()));
  }
  pressButton() {
    if (this.enabled_) {
      if (this.buttonPressed_ = !0, this.menu.show(), this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), $t && _p()) return;
      this.menu.focus();
    }
  }
  unpressButton() {
    this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menu.hide(), this.menuButton_.el_.setAttribute("aria-expanded", "false"));
  }
  disable() {
    this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable();
  }
  enable() {
    this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable();
  }
}
R.registerComponent("MenuButton", Ll);
class Ol extends Ll {
  constructor(t, e) {
    const s = e.tracks;
    if (super(t, e), this.items.length <= 1 && this.hide(), !s) return;
    const n = ut(this, this.update);
    s.addEventListener("removetrack", n), s.addEventListener("addtrack", n), s.addEventListener("labelchange", n), this.player_.on("ready", n), this.player_.on("dispose", function() {
      s.removeEventListener("removetrack", n), s.removeEventListener("addtrack", n), s.removeEventListener("labelchange", n);
    });
  }
}
R.registerComponent("TrackButton", Ol);
const wb = ["Tab", "Esc", "Up", "Down", "Right", "Left"];
class _n extends ea {
  constructor(t, e) {
    super(t, e), this.selectable = e.selectable, this.isSelected_ = e.selected || !1, this.multiSelectable = e.multiSelectable, this.selected(this.isSelected_), this.selectable ? this.multiSelectable ? this.el_.setAttribute("role", "menuitemcheckbox") : this.el_.setAttribute("role", "menuitemradio") : this.el_.setAttribute("role", "menuitem");
  }
  createEl(t, e, s) {
    this.nonIconControl = !0;
    const n = super.createEl("li", Object.assign({ className: "vjs-menu-item", tabIndex: -1 }, e), s), r = Y("span", { className: "vjs-menu-item-text", textContent: this.localize(this.options_.label) });
    return this.player_.options_.experimentalSvgIcons ? n.appendChild(r) : n.replaceChild(r, n.querySelector(".vjs-icon-placeholder")), n;
  }
  handleKeyDown(t) {
    wb.some((e) => X.isEventKey(t, e)) || super.handleKeyDown(t);
  }
  handleClick(t) {
    this.selected(!0);
  }
  selected(t) {
    this.selectable && (t ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1));
  }
}
R.registerComponent("MenuItem", _n);
class vn extends _n {
  constructor(t, e) {
    const s = e.track, n = t.textTracks();
    e.label = s.label || s.language || "Unknown", e.selected = s.mode === "showing", super(t, e), this.track = s, this.kinds = (e.kinds || [e.kind || this.track.kind]).filter(Boolean);
    const r = (...l) => {
      this.handleTracksChange.apply(this, l);
    }, a = (...l) => {
      this.handleSelectedLanguageChange.apply(this, l);
    };
    if (t.on(["loadstart", "texttrackchange"], r), n.addEventListener("change", r), n.addEventListener("selectedlanguagechange", a), this.on("dispose", function() {
      t.off(["loadstart", "texttrackchange"], r), n.removeEventListener("change", r), n.removeEventListener("selectedlanguagechange", a);
    }), n.onchange === void 0) {
      let l;
      this.on(["tap", "click"], function() {
        if (typeof E.Event != "object") try {
          l = new E.Event("change");
        } catch {
        }
        l || (l = q.createEvent("Event"), l.initEvent("change", !0, !0)), n.dispatchEvent(l);
      });
    }
    this.handleTracksChange();
  }
  handleClick(t) {
    const e = this.track, s = this.player_.textTracks();
    if (super.handleClick(t), s) for (let n = 0; n < s.length; n++) {
      const r = s[n];
      this.kinds.indexOf(r.kind) !== -1 && (r === e ? r.mode !== "showing" && (r.mode = "showing") : r.mode !== "disabled" && (r.mode = "disabled"));
    }
  }
  handleTracksChange(t) {
    const e = this.track.mode === "showing";
    e !== this.isSelected_ && this.selected(e);
  }
  handleSelectedLanguageChange(t) {
    if (this.track.mode === "showing") {
      const e = this.player_.cache_.selectedLanguage;
      if (e && e.enabled && e.language === this.track.language && e.kind !== this.track.kind) return;
      this.player_.cache_.selectedLanguage = { enabled: !0, language: this.track.language, kind: this.track.kind };
    }
  }
  dispose() {
    this.track = null, super.dispose();
  }
}
R.registerComponent("TextTrackMenuItem", vn);
class Xp extends vn {
  constructor(t, e) {
    e.track = { player: t, kind: e.kind, kinds: e.kinds, default: !1, mode: "disabled" }, e.kinds || (e.kinds = [e.kind]), e.label ? e.track.label = e.label : e.track.label = e.kinds.join(" and ") + " off", e.selectable = !0, e.multiSelectable = !1, super(t, e);
  }
  handleTracksChange(t) {
    const e = this.player().textTracks();
    let s = !0;
    for (let n = 0, r = e.length; n < r; n++) {
      const a = e[n];
      if (this.options_.kinds.indexOf(a.kind) > -1 && a.mode === "showing") {
        s = !1;
        break;
      }
    }
    s !== this.isSelected_ && this.selected(s);
  }
  handleSelectedLanguageChange(t) {
    const e = this.player().textTracks();
    let s = !0;
    for (let n = 0, r = e.length; n < r; n++) {
      const a = e[n];
      if (["captions", "descriptions", "subtitles"].indexOf(a.kind) > -1 && a.mode === "showing") {
        s = !1;
        break;
      }
    }
    s && (this.player_.cache_.selectedLanguage = { enabled: !1 });
  }
  handleLanguagechange() {
    this.$(".vjs-menu-item-text").textContent = this.player_.localize(this.options_.label), super.handleLanguagechange();
  }
}
R.registerComponent("OffTextTrackMenuItem", Xp);
class Ts extends Ol {
  constructor(t, e = {}) {
    e.tracks = t.textTracks(), super(t, e);
  }
  createItems(t = [], e = vn) {
    let s;
    this.label_ && (s = `${this.label_} off`), t.push(new Xp(this.player_, { kinds: this.kinds_, kind: this.kind_, label: s })), this.hideThreshold_ += 1;
    const n = this.player_.textTracks();
    Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
    for (let r = 0; r < n.length; r++) {
      const a = n[r];
      if (this.kinds_.indexOf(a.kind) > -1) {
        const l = new e(this.player_, { track: a, kinds: this.kinds_, kind: this.kind_, selectable: !0, multiSelectable: !1 });
        l.addClass(`vjs-${a.kind}-menu-item`), t.push(l);
      }
    }
    return t;
  }
}
R.registerComponent("TextTrackButton", Ts);
class Kp extends _n {
  constructor(t, e) {
    const s = e.track, n = e.cue, r = t.currentTime();
    e.selectable = !0, e.multiSelectable = !1, e.label = n.text, e.selected = n.startTime <= r && r < n.endTime, super(t, e), this.track = s, this.cue = n;
  }
  handleClick(t) {
    super.handleClick(), this.player_.currentTime(this.cue.startTime);
  }
}
R.registerComponent("ChaptersTrackMenuItem", Kp);
class oo extends Ts {
  constructor(t, e, s) {
    super(t, e, s), this.setIcon("chapters"), this.selectCurrentItem_ = () => {
      this.items.forEach((n) => {
        n.selected(this.track_.activeCues[0] === n.cue);
      });
    };
  }
  buildCSSClass() {
    return `vjs-chapters-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-chapters-button ${super.buildWrapperCSSClass()}`;
  }
  update(t) {
    if (t && t.track && t.track.kind !== "chapters") return;
    const e = this.findChaptersTrack();
    e !== this.track_ ? (this.setTrack(e), super.update()) : (!this.items || e && e.cues && e.cues.length !== this.items.length) && super.update();
  }
  setTrack(t) {
    if (this.track_ !== t) {
      if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
        const e = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
        e && e.removeEventListener("load", this.updateHandler_), this.track_.removeEventListener("cuechange", this.selectCurrentItem_), this.track_ = null;
      }
      if (this.track_ = t, this.track_) {
        this.track_.mode = "hidden";
        const e = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
        e && e.addEventListener("load", this.updateHandler_), this.track_.addEventListener("cuechange", this.selectCurrentItem_);
      }
    }
  }
  findChaptersTrack() {
    const t = this.player_.textTracks() || [];
    for (let e = t.length - 1; e >= 0; e--) {
      const s = t[e];
      if (s.kind === this.kind_) return s;
    }
  }
  getMenuCaption() {
    return this.track_ && this.track_.label ? this.track_.label : this.localize(Et(this.kind_));
  }
  createMenu() {
    return this.options_.title = this.getMenuCaption(), super.createMenu();
  }
  createItems() {
    const t = [];
    if (!this.track_) return t;
    const e = this.track_.cues;
    if (!e) return t;
    for (let s = 0, n = e.length; s < n; s++) {
      const r = e[s], a = new Kp(this.player_, { track: this.track_, cue: r });
      t.push(a);
    }
    return t;
  }
}
oo.prototype.kind_ = "chapters", oo.prototype.controlText_ = "Chapters", R.registerComponent("ChaptersButton", oo);
class lo extends Ts {
  constructor(t, e, s) {
    super(t, e, s), this.setIcon("audio-description");
    const n = t.textTracks(), r = ut(this, this.handleTracksChange);
    n.addEventListener("change", r), this.on("dispose", function() {
      n.removeEventListener("change", r);
    });
  }
  handleTracksChange(t) {
    const e = this.player().textTracks();
    let s = !1;
    for (let n = 0, r = e.length; n < r; n++) {
      const a = e[n];
      if (a.kind !== this.kind_ && a.mode === "showing") {
        s = !0;
        break;
      }
    }
    s ? this.disable() : this.enable();
  }
  buildCSSClass() {
    return `vjs-descriptions-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-descriptions-button ${super.buildWrapperCSSClass()}`;
  }
}
lo.prototype.kind_ = "descriptions", lo.prototype.controlText_ = "Descriptions", R.registerComponent("DescriptionsButton", lo);
class ho extends Ts {
  constructor(t, e, s) {
    super(t, e, s), this.setIcon("subtitles");
  }
  buildCSSClass() {
    return `vjs-subtitles-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-subtitles-button ${super.buildWrapperCSSClass()}`;
  }
}
ho.prototype.kind_ = "subtitles", ho.prototype.controlText_ = "Subtitles", R.registerComponent("SubtitlesButton", ho);
class Nl extends vn {
  constructor(t, e) {
    e.track = { player: t, kind: e.kind, label: e.kind + " settings", selectable: !1, default: !1, mode: "disabled" }, e.selectable = !1, e.name = "CaptionSettingsMenuItem", super(t, e), this.addClass("vjs-texttrack-settings"), this.controlText(", opens " + e.kind + " settings dialog");
  }
  handleClick(t) {
    this.player().getChild("textTrackSettings").open();
  }
  handleLanguagechange() {
    this.$(".vjs-menu-item-text").textContent = this.player_.localize(this.options_.kind + " settings"), super.handleLanguagechange();
  }
}
R.registerComponent("CaptionSettingsMenuItem", Nl);
class uo extends Ts {
  constructor(t, e, s) {
    super(t, e, s), this.setIcon("captions");
  }
  buildCSSClass() {
    return `vjs-captions-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-captions-button ${super.buildWrapperCSSClass()}`;
  }
  createItems() {
    const t = [];
    return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new Nl(this.player_, { kind: this.kind_ })), this.hideThreshold_ += 1), super.createItems(t);
  }
}
uo.prototype.kind_ = "captions", uo.prototype.controlText_ = "Captions", R.registerComponent("CaptionsButton", uo);
class Yp extends vn {
  createEl(t, e, s) {
    const n = super.createEl(t, e, s), r = n.querySelector(".vjs-menu-item-text");
    return this.options_.track.kind === "captions" && (this.player_.options_.experimentalSvgIcons ? this.setIcon("captions", n) : r.appendChild(Y("span", { className: "vjs-icon-placeholder" }, { "aria-hidden": !0 })), r.appendChild(Y("span", { className: "vjs-control-text", textContent: ` ${this.localize("Captions")}` }))), n;
  }
}
R.registerComponent("SubsCapsMenuItem", Yp);
class co extends Ts {
  constructor(t, e = {}) {
    super(t, e), this.label_ = "subtitles", this.setIcon("subtitles"), ["en", "en-us", "en-ca", "fr-ca"].indexOf(this.player_.language_) > -1 && (this.label_ = "captions", this.setIcon("captions")), this.menuButton_.controlText(Et(this.label_));
  }
  buildCSSClass() {
    return `vjs-subs-caps-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-subs-caps-button ${super.buildWrapperCSSClass()}`;
  }
  createItems() {
    let t = [];
    return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new Nl(this.player_, { kind: this.label_ })), this.hideThreshold_ += 1), t = super.createItems(t, Yp), t;
  }
}
co.prototype.kinds_ = ["captions", "subtitles"], co.prototype.controlText_ = "Subtitles", R.registerComponent("SubsCapsButton", co);
class Qp extends _n {
  constructor(t, e) {
    const s = e.track, n = t.audioTracks();
    e.label = s.label || s.language || "Unknown", e.selected = s.enabled, super(t, e), this.track = s, this.addClass(`vjs-${s.kind}-menu-item`);
    const r = (...a) => {
      this.handleTracksChange.apply(this, a);
    };
    n.addEventListener("change", r), this.on("dispose", () => {
      n.removeEventListener("change", r);
    });
  }
  createEl(t, e, s) {
    const n = super.createEl(t, e, s), r = n.querySelector(".vjs-menu-item-text");
    return ["main-desc", "description"].indexOf(this.options_.track.kind) >= 0 && (r.appendChild(Y("span", { className: "vjs-icon-placeholder" }, { "aria-hidden": !0 })), r.appendChild(Y("span", { className: "vjs-control-text", textContent: " " + this.localize("Descriptions") }))), n;
  }
  handleClick(t) {
    if (super.handleClick(t), this.track.enabled = !0, this.player_.tech_.featuresNativeAudioTracks) {
      const e = this.player_.audioTracks();
      for (let s = 0; s < e.length; s++) {
        const n = e[s];
        n !== this.track && (n.enabled = n === this.track);
      }
    }
  }
  handleTracksChange(t) {
    this.selected(this.track.enabled);
  }
}
R.registerComponent("AudioTrackMenuItem", Qp);
class _d extends Ol {
  constructor(t, e = {}) {
    e.tracks = t.audioTracks(), super(t, e), this.setIcon("audio");
  }
  buildCSSClass() {
    return `vjs-audio-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-audio-button ${super.buildWrapperCSSClass()}`;
  }
  createItems(t = []) {
    this.hideThreshold_ = 1;
    const e = this.player_.audioTracks();
    for (let s = 0; s < e.length; s++) {
      const n = e[s];
      t.push(new Qp(this.player_, { track: n, selectable: !0, multiSelectable: !1 }));
    }
    return t;
  }
}
_d.prototype.controlText_ = "Audio Track", R.registerComponent("AudioTrackButton", _d);
class Go extends _n {
  constructor(t, e) {
    const s = e.rate, n = parseFloat(s, 10);
    e.label = s, e.selected = n === t.playbackRate(), e.selectable = !0, e.multiSelectable = !1, super(t, e), this.label = s, this.rate = n, this.on(t, "ratechange", (r) => this.update(r));
  }
  handleClick(t) {
    super.handleClick(), this.player().playbackRate(this.rate);
  }
  update(t) {
    this.selected(this.player().playbackRate() === this.rate);
  }
}
Go.prototype.contentElType = "button", R.registerComponent("PlaybackRateMenuItem", Go);
class vd extends Ll {
  constructor(t, e) {
    super(t, e), this.menuButton_.el_.setAttribute("aria-describedby", this.labelElId_), this.updateVisibility(), this.updateLabel(), this.on(t, "loadstart", (s) => this.updateVisibility(s)), this.on(t, "ratechange", (s) => this.updateLabel(s)), this.on(t, "playbackrateschange", (s) => this.handlePlaybackRateschange(s));
  }
  createEl() {
    const t = super.createEl();
    return this.labelElId_ = "vjs-playback-rate-value-label-" + this.id_, this.labelEl_ = Y("div", { className: "vjs-playback-rate-value", id: this.labelElId_, textContent: "1x" }), t.appendChild(this.labelEl_), t;
  }
  dispose() {
    this.labelEl_ = null, super.dispose();
  }
  buildCSSClass() {
    return `vjs-playback-rate ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-playback-rate ${super.buildWrapperCSSClass()}`;
  }
  createItems() {
    const t = this.playbackRates(), e = [];
    for (let s = t.length - 1; s >= 0; s--) e.push(new Go(this.player(), { rate: t[s] + "x" }));
    return e;
  }
  handlePlaybackRateschange(t) {
    this.update();
  }
  playbackRates() {
    const t = this.player();
    return t.playbackRates && t.playbackRates() || [];
  }
  playbackRateSupported() {
    return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0;
  }
  updateVisibility(t) {
    this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden");
  }
  updateLabel(t) {
    this.playbackRateSupported() && (this.labelEl_.textContent = this.player().playbackRate() + "x");
  }
}
vd.prototype.controlText_ = "Playback Rate", R.registerComponent("PlaybackRateMenuButton", vd);
class Jp extends R {
  buildCSSClass() {
    return `vjs-spacer ${super.buildCSSClass()}`;
  }
  createEl(t = "div", e = {}, s = {}) {
    return e.className || (e.className = this.buildCSSClass()), super.createEl(t, e, s);
  }
}
R.registerComponent("Spacer", Jp);
class Cb extends Jp {
  buildCSSClass() {
    return `vjs-custom-control-spacer ${super.buildCSSClass()}`;
  }
  createEl() {
    return super.createEl("div", { className: this.buildCSSClass(), textContent: " " });
  }
}
R.registerComponent("CustomControlSpacer", Cb);
class bd extends R {
  createEl() {
    return super.createEl("div", { className: "vjs-control-bar", dir: "ltr" });
  }
}
bd.prototype.options_ = { children: ["playToggle", "skipBackward", "skipForward", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "pictureInPictureToggle", "fullscreenToggle"] }, R.registerComponent("ControlBar", bd);
class Td extends fs {
  constructor(t, e) {
    super(t, e), this.on(t, "error", (s) => {
      this.open(s);
    });
  }
  buildCSSClass() {
    return `vjs-error-display ${super.buildCSSClass()}`;
  }
  content() {
    const t = this.player().error();
    return t ? this.localize(t.message) : "";
  }
}
Td.prototype.options_ = Object.assign({}, fs.prototype.options_, { pauseOnOpen: !1, fillAlways: !0, temporary: !1, uncloseable: !0 }), R.registerComponent("ErrorDisplay", Td);
const po = "vjs-text-track-settings", Sd = ["#000", "Black"], Ed = ["#00F", "Blue"], wd = ["#0FF", "Cyan"], Cd = ["#0F0", "Green"], kd = ["#F0F", "Magenta"], xd = ["#F00", "Red"], Id = ["#FFF", "White"], Ad = ["#FF0", "Yellow"], mo = ["1", "Opaque"], go = ["0.5", "Semi-Transparent"], Pd = ["0", "Transparent"], wi = { backgroundColor: { selector: ".vjs-bg-color > select", id: "captions-background-color-%s", label: "Color", options: [Sd, Id, xd, Cd, Ed, Ad, kd, wd] }, backgroundOpacity: { selector: ".vjs-bg-opacity > select", id: "captions-background-opacity-%s", label: "Opacity", options: [mo, go, Pd] }, color: { selector: ".vjs-text-color > select", id: "captions-foreground-color-%s", label: "Color", options: [Id, Sd, xd, Cd, Ed, Ad, kd, wd] }, edgeStyle: { selector: ".vjs-edge-style > select", id: "%s", label: "Text Edge Style", options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Drop shadow"]] }, fontFamily: { selector: ".vjs-font-family > select", id: "captions-font-family-%s", label: "Font Family", options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]] }, fontPercent: { selector: ".vjs-font-percent > select", id: "captions-font-size-%s", label: "Font Size", options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]], default: 2, parser: (i) => i === "1.00" ? null : Number(i) }, textOpacity: { selector: ".vjs-text-opacity > select", id: "captions-foreground-opacity-%s", label: "Opacity", options: [mo, go] }, windowColor: { selector: ".vjs-window-color > select", id: "captions-window-color-%s", label: "Color" }, windowOpacity: { selector: ".vjs-window-opacity > select", id: "captions-window-opacity-%s", label: "Opacity", options: [Pd, go, mo] } };
function Zp(i, t) {
  if (t && (i = t(i)), i && i !== "none") return i;
}
function kb(i, t) {
  return Zp(i.options[i.options.selectedIndex].value, t);
}
function xb(i, t, e) {
  if (t) {
    for (let s = 0; s < i.options.length; s++) if (Zp(i.options[s].value, e) === t) {
      i.selectedIndex = s;
      break;
    }
  }
}
wi.windowColor.options = wi.backgroundColor.options;
class Ib extends fs {
  constructor(t, e) {
    e.temporary = !1, super(t, e), this.updateDisplay = this.updateDisplay.bind(this), this.fill(), this.hasBeenOpened_ = this.hasBeenFilled_ = !0, this.endDialog = Y("p", { className: "vjs-control-text", textContent: this.localize("End of dialog window.") }), this.el().appendChild(this.endDialog), this.setDefaults(), e.persistTextTrackSettings === void 0 && (this.options_.persistTextTrackSettings = this.options_.playerOptions.persistTextTrackSettings), this.on(this.$(".vjs-done-button"), "click", () => {
      this.saveSettings(), this.close();
    }), this.on(this.$(".vjs-default-button"), "click", () => {
      this.setDefaults(), this.updateDisplay();
    }), is(wi, (s) => {
      this.on(this.$(s.selector), "change", this.updateDisplay);
    }), this.options_.persistTextTrackSettings && this.restoreSettings();
  }
  dispose() {
    this.endDialog = null, super.dispose();
  }
  createElSelect_(t, e = "", s = "label") {
    const n = wi[t], r = n.id.replace("%s", this.id_), a = [e, r].join(" ").trim(), l = `vjs_select_${Te()}`;
    return [`<${s} id="${r}"${s === "label" ? ` for="${l}" class="vjs-label"` : ""}>`, this.localize(n.label), `</${s}>`, `<select aria-labelledby="${a}" id="${l}">`].concat(n.options.map((u) => {
      const p = r + "-" + u[1].replace(/\W+/g, "");
      return [`<option id="${p}" value="${u[0]}" `, `aria-labelledby="${a} ${p}">`, this.localize(u[1]), "</option>"].join("");
    })).concat("</select>").join("");
  }
  createElFgColor_() {
    const t = `captions-text-legend-${this.id_}`;
    return ['<fieldset class="vjs-fg vjs-track-setting">', `<legend id="${t}">`, this.localize("Text"), "</legend>", '<span class="vjs-text-color">', this.createElSelect_("color", t), "</span>", '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", t), "</span>", "</fieldset>"].join("");
  }
  createElBgColor_() {
    const t = `captions-background-${this.id_}`;
    return ['<fieldset class="vjs-bg vjs-track-setting">', `<legend id="${t}">`, this.localize("Text Background"), "</legend>", '<span class="vjs-bg-color">', this.createElSelect_("backgroundColor", t), "</span>", '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", t), "</span>", "</fieldset>"].join("");
  }
  createElWinColor_() {
    const t = `captions-window-${this.id_}`;
    return ['<fieldset class="vjs-window vjs-track-setting">', `<legend id="${t}">`, this.localize("Caption Area Background"), "</legend>", '<span class="vjs-window-color">', this.createElSelect_("windowColor", t), "</span>", '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", t), "</span>", "</fieldset>"].join("");
  }
  createElColors_() {
    return Y("div", { className: "vjs-track-settings-colors", innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("") });
  }
  createElFont_() {
    return Y("div", { className: "vjs-track-settings-font", innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("") });
  }
  createElControls_() {
    const t = this.localize("restore all settings to the default values");
    return Y("div", { className: "vjs-track-settings-controls", innerHTML: [`<button type="button" class="vjs-default-button" title="${t}">`, this.localize("Reset"), `<span class="vjs-control-text"> ${t}</span>`, "</button>", `<button type="button" class="vjs-done-button">${this.localize("Done")}</button>`].join("") });
  }
  content() {
    return [this.createElColors_(), this.createElFont_(), this.createElControls_()];
  }
  label() {
    return this.localize("Caption Settings Dialog");
  }
  description() {
    return this.localize("Beginning of dialog window. Escape will cancel and close the window.");
  }
  buildCSSClass() {
    return super.buildCSSClass() + " vjs-text-track-settings";
  }
  getValues() {
    return dp(wi, (t, e, s) => {
      const n = kb(this.$(e.selector), e.parser);
      return n !== void 0 && (t[s] = n), t;
    }, {});
  }
  setValues(t) {
    is(wi, (e, s) => {
      xb(this.$(e.selector), t[s], e.parser);
    });
  }
  setDefaults() {
    is(wi, (t) => {
      const e = t.hasOwnProperty("default") ? t.default : 0;
      this.$(t.selector).selectedIndex = e;
    });
  }
  restoreSettings() {
    let t;
    try {
      t = JSON.parse(E.localStorage.getItem(po));
    } catch (e) {
      J.warn(e);
    }
    t && this.setValues(t);
  }
  saveSettings() {
    if (!this.options_.persistTextTrackSettings) return;
    const t = this.getValues();
    try {
      Object.keys(t).length ? E.localStorage.setItem(po, JSON.stringify(t)) : E.localStorage.removeItem(po);
    } catch (e) {
      J.warn(e);
    }
  }
  updateDisplay() {
    const t = this.player_.getChild("textTrackDisplay");
    t && t.updateDisplay();
  }
  conditionalBlur_() {
    this.previouslyActiveEl_ = null;
    const t = this.player_.controlBar, e = t && t.subsCapsButton, s = t && t.captionsButton;
    e ? e.focus() : s && s.focus();
  }
  handleLanguagechange() {
    this.fill();
  }
}
R.registerComponent("TextTrackSettings", Ib);
class Ab extends R {
  constructor(t, e) {
    let s = e.ResizeObserver || E.ResizeObserver;
    e.ResizeObserver === null && (s = !1), super(t, ht({ createEl: !s, reportTouchActivity: !1 }, e)), this.ResizeObserver = e.ResizeObserver || E.ResizeObserver, this.loadListener_ = null, this.resizeObserver_ = null, this.debouncedHandler_ = Op(() => {
      this.resizeHandler();
    }, 100, !1, this), s ? (this.resizeObserver_ = new this.ResizeObserver(this.debouncedHandler_), this.resizeObserver_.observe(t.el())) : (this.loadListener_ = () => {
      if (!this.el_ || !this.el_.contentWindow) return;
      const n = this.debouncedHandler_;
      let r = this.unloadListener_ = function() {
        Mt(this, "resize", n), Mt(this, "unload", r), r = null;
      };
      ae(this.el_.contentWindow, "unload", r), ae(this.el_.contentWindow, "resize", n);
    }, this.one("load", this.loadListener_));
  }
  createEl() {
    return super.createEl("iframe", { className: "vjs-resize-manager", tabIndex: -1, title: this.localize("No content") }, { "aria-hidden": "true" });
  }
  resizeHandler() {
    this.player_ && this.player_.trigger && this.player_.trigger("playerresize");
  }
  dispose() {
    this.debouncedHandler_ && this.debouncedHandler_.cancel(), this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.loadListener_ && this.off("load", this.loadListener_), this.el_ && this.el_.contentWindow && this.unloadListener_ && this.unloadListener_.call(this.el_.contentWindow), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null, super.dispose();
  }
}
R.registerComponent("ResizeManager", Ab);
const Pb = { trackingThreshold: 20, liveTolerance: 15 };
class Db extends R {
  constructor(t, e) {
    super(t, ht(Pb, e, { createEl: !1 })), this.trackLiveHandler_ = () => this.trackLive_(), this.handlePlay_ = (s) => this.handlePlay(s), this.handleFirstTimeupdate_ = (s) => this.handleFirstTimeupdate(s), this.handleSeeked_ = (s) => this.handleSeeked(s), this.seekToLiveEdge_ = (s) => this.seekToLiveEdge(s), this.reset_(), this.on(this.player_, "durationchange", (s) => this.handleDurationchange(s)), this.on(this.player_, "canplay", () => this.toggleTracking());
  }
  trackLive_() {
    const t = this.player_.seekable();
    if (!t || !t.length) return;
    const e = Number(E.performance.now().toFixed(4)), s = this.lastTime_ === -1 ? 0 : (e - this.lastTime_) / 1e3;
    this.lastTime_ = e, this.pastSeekEnd_ = this.pastSeekEnd() + s;
    const n = this.liveCurrentTime(), r = this.player_.currentTime();
    let a = this.player_.paused() || this.seekedBehindLive_ || Math.abs(n - r) > this.options_.liveTolerance;
    this.timeupdateSeen_ && n !== 1 / 0 || (a = !1), a !== this.behindLiveEdge_ && (this.behindLiveEdge_ = a, this.trigger("liveedgechange"));
  }
  handleDurationchange() {
    this.toggleTracking();
  }
  toggleTracking() {
    this.player_.duration() === 1 / 0 && this.liveWindow() >= this.options_.trackingThreshold ? (this.player_.options_.liveui && this.player_.addClass("vjs-liveui"), this.startTracking()) : (this.player_.removeClass("vjs-liveui"), this.stopTracking());
  }
  startTracking() {
    this.isTracking() || (this.timeupdateSeen_ || (this.timeupdateSeen_ = this.player_.hasStarted()), this.trackingInterval_ = this.setInterval(this.trackLiveHandler_, ue), this.trackLive_(), this.on(this.player_, ["play", "pause"], this.trackLiveHandler_), this.timeupdateSeen_ ? this.on(this.player_, "seeked", this.handleSeeked_) : (this.one(this.player_, "play", this.handlePlay_), this.one(this.player_, "timeupdate", this.handleFirstTimeupdate_)));
  }
  handleFirstTimeupdate() {
    this.timeupdateSeen_ = !0, this.on(this.player_, "seeked", this.handleSeeked_);
  }
  handleSeeked() {
    const t = Math.abs(this.liveCurrentTime() - this.player_.currentTime());
    this.seekedBehindLive_ = this.nextSeekedFromUser_ && t > 2, this.nextSeekedFromUser_ = !1, this.trackLive_();
  }
  handlePlay() {
    this.one(this.player_, "timeupdate", this.seekToLiveEdge_);
  }
  reset_() {
    this.lastTime_ = -1, this.pastSeekEnd_ = 0, this.lastSeekEnd_ = -1, this.behindLiveEdge_ = !0, this.timeupdateSeen_ = !1, this.seekedBehindLive_ = !1, this.nextSeekedFromUser_ = !1, this.clearInterval(this.trackingInterval_), this.trackingInterval_ = null, this.off(this.player_, ["play", "pause"], this.trackLiveHandler_), this.off(this.player_, "seeked", this.handleSeeked_), this.off(this.player_, "play", this.handlePlay_), this.off(this.player_, "timeupdate", this.handleFirstTimeupdate_), this.off(this.player_, "timeupdate", this.seekToLiveEdge_);
  }
  nextSeekedFromUser() {
    this.nextSeekedFromUser_ = !0;
  }
  stopTracking() {
    this.isTracking() && (this.reset_(), this.trigger("liveedgechange"));
  }
  seekableEnd() {
    const t = this.player_.seekable(), e = [];
    let s = t ? t.length : 0;
    for (; s--; ) e.push(t.end(s));
    return e.length ? e.sort()[e.length - 1] : 1 / 0;
  }
  seekableStart() {
    const t = this.player_.seekable(), e = [];
    let s = t ? t.length : 0;
    for (; s--; ) e.push(t.start(s));
    return e.length ? e.sort()[0] : 0;
  }
  liveWindow() {
    const t = this.liveCurrentTime();
    return t === 1 / 0 ? 0 : t - this.seekableStart();
  }
  isLive() {
    return this.isTracking();
  }
  atLiveEdge() {
    return !this.behindLiveEdge();
  }
  liveCurrentTime() {
    return this.pastSeekEnd() + this.seekableEnd();
  }
  pastSeekEnd() {
    const t = this.seekableEnd();
    return this.lastSeekEnd_ !== -1 && t !== this.lastSeekEnd_ && (this.pastSeekEnd_ = 0), this.lastSeekEnd_ = t, this.pastSeekEnd_;
  }
  behindLiveEdge() {
    return this.behindLiveEdge_;
  }
  isTracking() {
    return typeof this.trackingInterval_ == "number";
  }
  seekToLiveEdge() {
    this.seekedBehindLive_ = !1, this.atLiveEdge() || (this.nextSeekedFromUser_ = !1, this.player_.currentTime(this.liveCurrentTime()));
  }
  dispose() {
    this.stopTracking(), super.dispose();
  }
}
R.registerComponent("LiveTracker", Db);
class Lb extends R {
  constructor(t, e) {
    super(t, e), this.on("statechanged", (s) => this.updateDom_()), this.updateDom_();
  }
  createEl() {
    return this.els = { title: Y("div", { className: "vjs-title-bar-title", id: `vjs-title-bar-title-${Te()}` }), description: Y("div", { className: "vjs-title-bar-description", id: `vjs-title-bar-description-${Te()}` }) }, Y("div", { className: "vjs-title-bar" }, {}, cp(this.els));
  }
  updateDom_() {
    const t = this.player_.tech_, e = t && t.el_, s = { title: "aria-labelledby", description: "aria-describedby" };
    ["title", "description"].forEach((n) => {
      const r = this.state[n], a = this.els[n], l = s[n];
      Yr(a), r && di(a, r), e && (e.removeAttribute(l), r && e.setAttribute(l, a.id));
    }), this.state.title || this.state.description ? this.show() : this.hide();
  }
  update(t) {
    this.setState(t);
  }
  dispose() {
    const t = this.player_.tech_, e = t && t.el_;
    e && (e.removeAttribute("aria-labelledby"), e.removeAttribute("aria-describedby")), super.dispose(), this.els = null;
  }
}
R.registerComponent("TitleBar", Lb);
const Xo = (i) => {
  const t = i.el();
  if (t.hasAttribute("src")) return i.triggerSourceset(t.src), !0;
  const e = i.$$("source"), s = [];
  let n = "";
  if (!e.length) return !1;
  for (let r = 0; r < e.length; r++) {
    const a = e[r].src;
    a && s.indexOf(a) === -1 && s.push(a);
  }
  return !!s.length && (s.length === 1 && (n = s[0]), i.triggerSourceset(n), !0);
}, Ob = Object.defineProperty({}, "innerHTML", { get() {
  return this.cloneNode(!0).innerHTML;
}, set(i) {
  const t = q.createElement(this.nodeName.toLowerCase());
  t.innerHTML = i;
  const e = q.createDocumentFragment();
  for (; t.childNodes.length; ) e.appendChild(t.childNodes[0]);
  return this.innerText = "", E.Element.prototype.appendChild.call(this, e), this.innerHTML;
} }), tm = (i, t) => {
  let e = {};
  for (let s = 0; s < i.length && (e = Object.getOwnPropertyDescriptor(i[s], t), !(e && e.set && e.get)); s++) ;
  return e.enumerable = !0, e.configurable = !0, e;
}, Nb = (i) => tm([i.el(), E.HTMLMediaElement.prototype, E.Element.prototype, Ob], "innerHTML"), Dd = function(i) {
  const t = i.el();
  if (t.resetSourceWatch_) return;
  const e = {}, s = Nb(i), n = (r) => (...a) => {
    const l = r.apply(t, a);
    return Xo(i), l;
  };
  ["append", "appendChild", "insertAdjacentHTML"].forEach((r) => {
    t[r] && (e[r] = t[r], t[r] = n(e[r]));
  }), Object.defineProperty(t, "innerHTML", ht(s, { set: n(s.set) })), t.resetSourceWatch_ = () => {
    t.resetSourceWatch_ = null, Object.keys(e).forEach((r) => {
      t[r] = e[r];
    }), Object.defineProperty(t, "innerHTML", s);
  }, i.one("sourceset", t.resetSourceWatch_);
}, Rb = Object.defineProperty({}, "src", { get() {
  return this.hasAttribute("src") ? Hp(E.Element.prototype.getAttribute.call(this, "src")) : "";
}, set(i) {
  return E.Element.prototype.setAttribute.call(this, "src", i), i;
} }), Mb = (i) => tm([i.el(), E.HTMLMediaElement.prototype, Rb], "src"), Ub = function(i) {
  if (!i.featuresSourceset) return;
  const t = i.el();
  if (t.resetSourceset_) return;
  const e = Mb(i), s = t.setAttribute, n = t.load;
  Object.defineProperty(t, "src", ht(e, { set: (r) => {
    const a = e.set.call(t, r);
    return i.triggerSourceset(t.src), a;
  } })), t.setAttribute = (r, a) => {
    const l = s.call(t, r, a);
    return /src/i.test(r) && i.triggerSourceset(t.src), l;
  }, t.load = () => {
    const r = n.call(t);
    return Xo(i) || (i.triggerSourceset(""), Dd(i)), r;
  }, t.currentSrc ? i.triggerSourceset(t.currentSrc) : Xo(i) || Dd(i), t.resetSourceset_ = () => {
    t.resetSourceset_ = null, t.load = n, t.setAttribute = s, Object.defineProperty(t, "src", e), t.resetSourceWatch_ && t.resetSourceWatch_();
  };
};
class H extends K {
  constructor(t, e) {
    super(t, e);
    const s = t.source;
    let n = !1;
    if (this.featuresVideoFrameCallback = this.featuresVideoFrameCallback && this.el_.tagName === "VIDEO", s && (this.el_.currentSrc !== s.src || t.tag && t.tag.initNetworkState_ === 3) ? this.setSource(s) : this.handleLateInit_(this.el_), t.enableSourceset && this.setupSourcesetHandling_(), this.isScrubbing_ = !1, this.el_.hasChildNodes()) {
      const r = this.el_.childNodes;
      let a = r.length;
      const l = [];
      for (; a--; ) {
        const u = r[a];
        u.nodeName.toLowerCase() === "track" && (this.featuresNativeTextTracks ? (this.remoteTextTrackEls().addTrackElement_(u), this.remoteTextTracks().addTrack(u.track), this.textTracks().addTrack(u.track), n || this.el_.hasAttribute("crossorigin") || !ta(u.src) || (n = !0)) : l.push(u));
      }
      for (let u = 0; u < l.length; u++) this.el_.removeChild(l[u]);
    }
    this.proxyNativeTracks_(), this.featuresNativeTextTracks && n && J.warn(`Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.
This may prevent text tracks from loading.`), this.restoreMetadataTracksInIOSNativePlayer_(), (dn || zr) && t.nativeControlsForTouch === !0 && this.setControls(!0), this.proxyWebkitFullscreen_(), this.triggerReady();
  }
  dispose() {
    this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), H.disposeMediaElement(this.el_), this.options_ = null, super.dispose();
  }
  setupSourcesetHandling_() {
    Ub(this);
  }
  restoreMetadataTracksInIOSNativePlayer_() {
    const t = this.textTracks();
    let e;
    const s = () => {
      e = [];
      for (let r = 0; r < t.length; r++) {
        const a = t[r];
        a.kind === "metadata" && e.push({ track: a, storedMode: a.mode });
      }
    };
    s(), t.addEventListener("change", s), this.on("dispose", () => t.removeEventListener("change", s));
    const n = () => {
      for (let r = 0; r < e.length; r++) {
        const a = e[r];
        a.track.mode === "disabled" && a.track.mode !== a.storedMode && (a.track.mode = a.storedMode);
      }
      t.removeEventListener("change", n);
    };
    this.on("webkitbeginfullscreen", () => {
      t.removeEventListener("change", s), t.removeEventListener("change", n), t.addEventListener("change", n);
    }), this.on("webkitendfullscreen", () => {
      t.removeEventListener("change", s), t.addEventListener("change", s), t.removeEventListener("change", n);
    });
  }
  overrideNative_(t, e) {
    if (e !== this[`featuresNative${t}Tracks`]) return;
    const s = t.toLowerCase();
    this[`${s}TracksListeners_`] && Object.keys(this[`${s}TracksListeners_`]).forEach((n) => {
      this.el()[`${s}Tracks`].removeEventListener(n, this[`${s}TracksListeners_`][n]);
    }), this[`featuresNative${t}Tracks`] = !e, this[`${s}TracksListeners_`] = null, this.proxyNativeTracksForType_(s);
  }
  overrideNativeAudioTracks(t) {
    this.overrideNative_("Audio", t);
  }
  overrideNativeVideoTracks(t) {
    this.overrideNative_("Video", t);
  }
  proxyNativeTracksForType_(t) {
    const e = he[t], s = this.el()[e.getterName], n = this[e.getterName]();
    if (!this[`featuresNative${e.capitalName}Tracks`] || !s || !s.addEventListener) return;
    const r = { change: (l) => {
      const u = { type: "change", target: n, currentTarget: n, srcElement: n };
      n.trigger(u), t === "text" && this[ss.remoteText.getterName]().trigger(u);
    }, addtrack(l) {
      n.addTrack(l.track);
    }, removetrack(l) {
      n.removeTrack(l.track);
    } }, a = function() {
      const l = [];
      for (let u = 0; u < n.length; u++) {
        let p = !1;
        for (let g = 0; g < s.length; g++) if (s[g] === n[u]) {
          p = !0;
          break;
        }
        p || l.push(n[u]);
      }
      for (; l.length; ) n.removeTrack(l.shift());
    };
    this[e.getterName + "Listeners_"] = r, Object.keys(r).forEach((l) => {
      const u = r[l];
      s.addEventListener(l, u), this.on("dispose", (p) => s.removeEventListener(l, u));
    }), this.on("loadstart", a), this.on("dispose", (l) => this.off("loadstart", a));
  }
  proxyNativeTracks_() {
    he.names.forEach((t) => {
      this.proxyNativeTracksForType_(t);
    });
  }
  createEl() {
    let t = this.options_.tag;
    if (!t || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
      if (t) {
        const s = t.cloneNode(!0);
        t.parentNode && t.parentNode.insertBefore(s, t), H.disposeMediaElement(t), t = s;
      } else {
        t = q.createElement("video");
        const s = ht({}, this.options_.tag && ri(this.options_.tag));
        dn && this.options_.nativeControlsForTouch === !0 || delete s.controls, Tp(t, Object.assign(s, { id: this.options_.techId, class: "vjs-tech" }));
      }
      t.playerId = this.options_.playerId;
    }
    this.options_.preload !== void 0 && ps(t, "preload", this.options_.preload), this.options_.disablePictureInPicture !== void 0 && (t.disablePictureInPicture = this.options_.disablePictureInPicture);
    const e = ["loop", "muted", "playsinline", "autoplay"];
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = this.options_[n];
      r !== void 0 && (r ? ps(t, n, n) : Xr(t, n), t[n] = r);
    }
    return t;
  }
  handleLateInit_(t) {
    if (t.networkState === 0 || t.networkState === 3) return;
    if (t.readyState === 0) {
      let s = !1;
      const n = function() {
        s = !0;
      };
      this.on("loadstart", n);
      const r = function() {
        s || this.trigger("loadstart");
      };
      return this.on("loadedmetadata", r), void this.ready(function() {
        this.off("loadstart", n), this.off("loadedmetadata", r), s || this.trigger("loadstart");
      });
    }
    const e = ["loadstart"];
    e.push("loadedmetadata"), t.readyState >= 2 && e.push("loadeddata"), t.readyState >= 3 && e.push("canplay"), t.readyState >= 4 && e.push("canplaythrough"), this.ready(function() {
      e.forEach(function(s) {
        this.trigger(s);
      }, this);
    });
  }
  setScrubbing(t) {
    this.isScrubbing_ = t;
  }
  scrubbing() {
    return this.isScrubbing_;
  }
  setCurrentTime(t) {
    try {
      this.isScrubbing_ && this.el_.fastSeek && Wr ? this.el_.fastSeek(t) : this.el_.currentTime = t;
    } catch (e) {
      J(e, "Video is not ready. (Video.js)");
    }
  }
  duration() {
    if (this.el_.duration === 1 / 0 && Oe && Ne && this.el_.currentTime === 0) {
      const t = () => {
        this.el_.currentTime > 0 && (this.el_.duration === 1 / 0 && this.trigger("durationchange"), this.off("timeupdate", t));
      };
      return this.on("timeupdate", t), NaN;
    }
    return this.el_.duration || NaN;
  }
  width() {
    return this.el_.offsetWidth;
  }
  height() {
    return this.el_.offsetHeight;
  }
  proxyWebkitFullscreen_() {
    if (!("webkitDisplayingFullscreen" in this.el_)) return;
    const t = function() {
      this.trigger("fullscreenchange", { isFullscreen: !1 }), this.el_.controls && !this.options_.nativeControlsForTouch && this.controls() && (this.el_.controls = !1);
    }, e = function() {
      "webkitPresentationMode" in this.el_ && this.el_.webkitPresentationMode !== "picture-in-picture" && (this.one("webkitendfullscreen", t), this.trigger("fullscreenchange", { isFullscreen: !0, nativeIOSFullscreen: !0 }));
    };
    this.on("webkitbeginfullscreen", e), this.on("dispose", () => {
      this.off("webkitbeginfullscreen", e), this.off("webkitendfullscreen", t);
    });
  }
  supportsFullScreen() {
    return typeof this.el_.webkitEnterFullScreen == "function";
  }
  enterFullScreen() {
    const t = this.el_;
    if (t.paused && t.networkState <= t.HAVE_METADATA) xe(this.el_.play()), this.setTimeout(function() {
      t.pause();
      try {
        t.webkitEnterFullScreen();
      } catch (e) {
        this.trigger("fullscreenerror", e);
      }
    }, 0);
    else try {
      t.webkitEnterFullScreen();
    } catch (e) {
      this.trigger("fullscreenerror", e);
    }
  }
  exitFullScreen() {
    this.el_.webkitDisplayingFullscreen ? this.el_.webkitExitFullScreen() : this.trigger("fullscreenerror", new Error("The video is not fullscreen"));
  }
  requestPictureInPicture() {
    return this.el_.requestPictureInPicture();
  }
  requestVideoFrameCallback(t) {
    return this.featuresVideoFrameCallback && !this.el_.webkitKeys ? this.el_.requestVideoFrameCallback(t) : super.requestVideoFrameCallback(t);
  }
  cancelVideoFrameCallback(t) {
    this.featuresVideoFrameCallback && !this.el_.webkitKeys ? this.el_.cancelVideoFrameCallback(t) : super.cancelVideoFrameCallback(t);
  }
  src(t) {
    if (t === void 0) return this.el_.src;
    this.setSrc(t);
  }
  reset() {
    H.resetMediaElement(this.el_);
  }
  currentSrc() {
    return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc;
  }
  setControls(t) {
    this.el_.controls = !!t;
  }
  addTextTrack(t, e, s) {
    return this.featuresNativeTextTracks ? this.el_.addTextTrack(t, e, s) : super.addTextTrack(t, e, s);
  }
  createRemoteTextTrack(t) {
    if (!this.featuresNativeTextTracks) return super.createRemoteTextTrack(t);
    const e = q.createElement("track");
    return t.kind && (e.kind = t.kind), t.label && (e.label = t.label), (t.language || t.srclang) && (e.srclang = t.language || t.srclang), t.default && (e.default = t.default), t.id && (e.id = t.id), t.src && (e.src = t.src), e;
  }
  addRemoteTextTrack(t, e) {
    const s = super.addRemoteTextTrack(t, e);
    return this.featuresNativeTextTracks && this.el().appendChild(s), s;
  }
  removeRemoteTextTrack(t) {
    if (super.removeRemoteTextTrack(t), this.featuresNativeTextTracks) {
      const e = this.$$("track");
      let s = e.length;
      for (; s--; ) t !== e[s] && t !== e[s].track || this.el().removeChild(e[s]);
    }
  }
  getVideoPlaybackQuality() {
    if (typeof this.el().getVideoPlaybackQuality == "function") return this.el().getVideoPlaybackQuality();
    const t = {};
    return this.el().webkitDroppedFrameCount !== void 0 && this.el().webkitDecodedFrameCount !== void 0 && (t.droppedVideoFrames = this.el().webkitDroppedFrameCount, t.totalVideoFrames = this.el().webkitDecodedFrameCount), E.performance && (t.creationTime = E.performance.now()), t;
  }
}
br(H, "TEST_VID", function() {
  if (!_s()) return;
  const i = q.createElement("video"), t = q.createElement("track");
  return t.kind = "captions", t.srclang = "en", t.label = "English", i.appendChild(t), i;
}), H.isSupported = function() {
  try {
    H.TEST_VID.volume = 0.5;
  } catch {
    return !1;
  }
  return !(!H.TEST_VID || !H.TEST_VID.canPlayType);
}, H.canPlayType = function(i) {
  return H.TEST_VID.canPlayType(i);
}, H.canPlaySource = function(i, t) {
  return H.canPlayType(i.type);
}, H.canControlVolume = function() {
  try {
    const i = H.TEST_VID.volume;
    H.TEST_VID.volume = i / 2 + 0.1;
    const t = i !== H.TEST_VID.volume;
    return t && $t ? (E.setTimeout(() => {
      H && H.prototype && (H.prototype.featuresVolumeControl = i !== H.TEST_VID.volume);
    }), !1) : t;
  } catch {
    return !1;
  }
}, H.canMuteVolume = function() {
  try {
    const i = H.TEST_VID.muted;
    return H.TEST_VID.muted = !i, H.TEST_VID.muted ? ps(H.TEST_VID, "muted", "muted") : Xr(H.TEST_VID, "muted", "muted"), i !== H.TEST_VID.muted;
  } catch {
    return !1;
  }
}, H.canControlPlaybackRate = function() {
  if (Oe && Ne && Tr < 58) return !1;
  try {
    const i = H.TEST_VID.playbackRate;
    return H.TEST_VID.playbackRate = i / 2 + 0.1, i !== H.TEST_VID.playbackRate;
  } catch {
    return !1;
  }
}, H.canOverrideAttributes = function() {
  try {
    const i = () => {
    };
    Object.defineProperty(q.createElement("video"), "src", { get: i, set: i }), Object.defineProperty(q.createElement("audio"), "src", { get: i, set: i }), Object.defineProperty(q.createElement("video"), "innerHTML", { get: i, set: i }), Object.defineProperty(q.createElement("audio"), "innerHTML", { get: i, set: i });
  } catch {
    return !1;
  }
  return !0;
}, H.supportsNativeTextTracks = function() {
  return Wr || $t && Ne;
}, H.supportsNativeVideoTracks = function() {
  return !(!H.TEST_VID || !H.TEST_VID.videoTracks);
}, H.supportsNativeAudioTracks = function() {
  return !(!H.TEST_VID || !H.TEST_VID.audioTracks);
}, H.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], [["featuresMuteControl", "canMuteVolume"], ["featuresPlaybackRate", "canControlPlaybackRate"], ["featuresSourceset", "canOverrideAttributes"], ["featuresNativeTextTracks", "supportsNativeTextTracks"], ["featuresNativeVideoTracks", "supportsNativeVideoTracks"], ["featuresNativeAudioTracks", "supportsNativeAudioTracks"]].forEach(function([i, t]) {
  br(H.prototype, i, () => H[t](), !0);
}), H.prototype.featuresVolumeControl = H.canControlVolume(), H.prototype.movingMediaElementInDOM = !$t, H.prototype.featuresFullscreenResize = !0, H.prototype.featuresProgressEvents = !0, H.prototype.featuresTimeupdateEvents = !0, H.prototype.featuresVideoFrameCallback = !(!H.TEST_VID || !H.TEST_VID.requestVideoFrameCallback), H.disposeMediaElement = function(i) {
  if (i) {
    for (i.parentNode && i.parentNode.removeChild(i); i.hasChildNodes(); ) i.removeChild(i.firstChild);
    i.removeAttribute("src"), typeof i.load == "function" && function() {
      try {
        i.load();
      } catch {
      }
    }();
  }
}, H.resetMediaElement = function(i) {
  if (!i) return;
  const t = i.querySelectorAll("source");
  let e = t.length;
  for (; e--; ) i.removeChild(t[e]);
  i.removeAttribute("src"), typeof i.load == "function" && function() {
    try {
      i.load();
    } catch {
    }
  }();
}, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function(i) {
  H.prototype[i] = function() {
    return this.el_[i] || this.el_.hasAttribute(i);
  };
}), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function(i) {
  H.prototype["set" + Et(i)] = function(t) {
    this.el_[i] = t, t ? this.el_.setAttribute(i, i) : this.el_.removeAttribute(i);
  };
}), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "played", "networkState", "readyState", "videoWidth", "videoHeight", "crossOrigin"].forEach(function(i) {
  H.prototype[i] = function() {
    return this.el_[i];
  };
}), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "crossOrigin"].forEach(function(i) {
  H.prototype["set" + Et(i)] = function(t) {
    this.el_[i] = t;
  };
}), ["pause", "load", "play"].forEach(function(i) {
  H.prototype[i] = function() {
    return this.el_[i]();
  };
}), K.withSourceHandlers(H), H.nativeSourceHandler = {}, H.nativeSourceHandler.canPlayType = function(i) {
  try {
    return H.TEST_VID.canPlayType(i);
  } catch {
    return "";
  }
}, H.nativeSourceHandler.canHandleSource = function(i, t) {
  if (i.type) return H.nativeSourceHandler.canPlayType(i.type);
  if (i.src) {
    const e = Al(i.src);
    return H.nativeSourceHandler.canPlayType(`video/${e}`);
  }
  return "";
}, H.nativeSourceHandler.handleSource = function(i, t, e) {
  t.setSrc(i.src);
}, H.nativeSourceHandler.dispose = function() {
}, H.registerSourceHandler(H.nativeSourceHandler), K.registerTech("Html5", H);
const em = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"], fo = { canplay: "CanPlay", canplaythrough: "CanPlayThrough", playing: "Playing", seeked: "Seeked" }, Ko = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"], cr = {};
Ko.forEach((i) => {
  const t = i.charAt(0) === "x" ? `x-${i.substring(1)}` : i;
  cr[i] = `vjs-layout-${t}`;
});
const Bb = { tiny: 210, xsmall: 320, small: 425, medium: 768, large: 1440, xlarge: 2560, huge: 1 / 0 };
class pt extends R {
  constructor(t, e, s) {
    if (t.id = t.id || e.id || `vjs_video_${Te()}`, (e = Object.assign(pt.getTagSettings(t), e)).initChildren = !1, e.createEl = !1, e.evented = !1, e.reportTouchActivity = !1, !e.language) {
      const a = t.closest("[lang]");
      a && (e.language = a.getAttribute("lang"));
    }
    if (super(null, e, s), this.boundDocumentFullscreenChange_ = (a) => this.documentFullscreenChange_(a), this.boundFullWindowOnEscKey_ = (a) => this.fullWindowOnEscKey(a), this.boundUpdateStyleEl_ = (a) => this.updateStyleEl_(a), this.boundApplyInitTime_ = (a) => this.applyInitTime_(a), this.boundUpdateCurrentBreakpoint_ = (a) => this.updateCurrentBreakpoint_(a), this.boundHandleTechClick_ = (a) => this.handleTechClick_(a), this.boundHandleTechDoubleClick_ = (a) => this.handleTechDoubleClick_(a), this.boundHandleTechTouchStart_ = (a) => this.handleTechTouchStart_(a), this.boundHandleTechTouchMove_ = (a) => this.handleTechTouchMove_(a), this.boundHandleTechTouchEnd_ = (a) => this.handleTechTouchEnd_(a), this.boundHandleTechTap_ = (a) => this.handleTechTap_(a), this.isFullscreen_ = !1, this.log = hp(this.id_), this.fsApi_ = vr, this.isPosterFromTech_ = !1, this.queuedCallbacks_ = [], this.isReady_ = !1, this.hasStarted_ = !1, this.userActive_ = !1, this.debugEnabled_ = !1, this.audioOnlyMode_ = !1, this.audioPosterMode_ = !1, this.audioOnlyCache_ = { playerHeight: null, hiddenChildren: [] }, !this.options_ || !this.options_.techOrder || !this.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
    if (this.tag = t, this.tagAttributes = t && ri(t), this.language(this.options_.language), e.languages) {
      const a = {};
      Object.getOwnPropertyNames(e.languages).forEach(function(l) {
        a[l.toLowerCase()] = e.languages[l];
      }), this.languages_ = a;
    } else this.languages_ = pt.prototype.options_.languages;
    this.resetCache_(), this.poster_ = e.poster || "", this.controls_ = !!e.controls, t.controls = !1, t.removeAttribute("controls"), this.changingSrc_ = !1, this.playCallbacks_ = [], this.playTerminatedQueue_ = [], t.hasAttribute("autoplay") ? this.autoplay(!0) : this.autoplay(this.options_.autoplay), e.plugins && Object.keys(e.plugins).forEach((a) => {
      if (typeof this[a] != "function") throw new Error(`plugin "${a}" does not exist`);
    }), this.scrubbing_ = !1, this.el_ = this.createEl(), Cl(this, { eventBusKey: "el_" }), this.fsApi_.requestFullscreen && (ae(q, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), this.on(this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_)), this.fluid_ && this.on(["playerreset", "resize"], this.boundUpdateStyleEl_);
    const n = ht(this.options_);
    if (e.plugins && Object.keys(e.plugins).forEach((a) => {
      this[a](e.plugins[a]);
    }), e.debug && this.debug(!0), this.options_.playerOptions = n, this.middleware_ = [], this.playbackRates(e.playbackRates), e.experimentalSvgIcons) {
      const a = new E.DOMParser().parseFromString(hb, "image/svg+xml");
      if (a.querySelector("parsererror")) J.warn("Failed to load SVG Icons. Falling back to Font Icons."), this.options_.experimentalSvgIcons = null;
      else {
        const l = a.documentElement;
        l.style.display = "none", this.el_.appendChild(l), this.addClass("vjs-svg-icons-enabled");
      }
    }
    this.initChildren(), this.isAudio(t.nodeName.toLowerCase() === "audio"), this.controls() ? this.addClass("vjs-controls-enabled") : this.addClass("vjs-controls-disabled"), this.el_.setAttribute("role", "region"), this.isAudio() ? this.el_.setAttribute("aria-label", this.localize("Audio Player")) : this.el_.setAttribute("aria-label", this.localize("Video Player")), this.isAudio() && this.addClass("vjs-audio"), dn && this.addClass("vjs-touch-enabled"), $t || this.addClass("vjs-workinghover"), pt.players[this.id_] = this;
    const r = Ro.split(".")[0];
    this.addClass(`vjs-v${r}`), this.userActive(!0), this.reportUserActivity(), this.one("play", (a) => this.listenForUserActivity_(a)), this.on("keydown", (a) => this.handleKeyDown(a)), this.on("languagechange", (a) => this.handleLanguagechange(a)), this.breakpoints(this.options_.breakpoints), this.responsive(this.options_.responsive), this.on("ready", () => {
      this.audioPosterMode(this.options_.audioPosterMode), this.audioOnlyMode(this.options_.audioOnlyMode);
    });
  }
  dispose() {
    this.trigger("dispose"), this.off("dispose"), Mt(q, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), Mt(q, "keydown", this.boundFullWindowOnEscKey_), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), pt.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), rb(this), qt.names.forEach((t) => {
      const e = this[qt[t].getterName]();
      e && e.off && e.off();
    }), super.dispose({ restoreEl: this.options_.restoreEl });
  }
  createEl() {
    let t, e = this.tag, s = this.playerElIngest_ = e.parentNode && e.parentNode.hasAttribute && e.parentNode.hasAttribute("data-vjs-player");
    const n = this.tag.tagName.toLowerCase() === "video-js";
    s ? t = this.el_ = e.parentNode : n || (t = this.el_ = super.createEl("div"));
    const r = ri(e);
    if (n) {
      for (t = this.el_ = e, e = this.tag = q.createElement("video"); t.children.length; ) e.appendChild(t.firstChild);
      Zs(t, "video-js") || Ai(t, "video-js"), t.appendChild(e), s = this.playerElIngest_ = t, Object.keys(t).forEach((u) => {
        try {
          e[u] = t[u];
        } catch {
        }
      });
    }
    e.setAttribute("tabindex", "-1"), r.tabindex = "-1", Ne && Er && (e.setAttribute("role", "application"), r.role = "application"), e.removeAttribute("width"), e.removeAttribute("height"), "width" in r && delete r.width, "height" in r && delete r.height, Object.getOwnPropertyNames(r).forEach(function(u) {
      n && u === "class" || t.setAttribute(u, r[u]), n && e.setAttribute(u, r[u]);
    }), e.playerId = e.id, e.id += "_html5_api", e.className = "vjs-tech", e.player = t.player = this, this.addClass("vjs-paused");
    const a = ["IS_SMART_TV", "IS_TIZEN", "IS_WEBOS", "IS_ANDROID", "IS_IPAD", "IS_IPHONE"].filter((u) => yp[u]).map((u) => "vjs-device-" + u.substring(3).toLowerCase().replace(/\_/g, "-"));
    if (this.addClass(...a), E.VIDEOJS_NO_DYNAMIC_STYLE !== !0) {
      this.styleEl_ = Dp("vjs-styles-dimensions");
      const u = li(".vjs-styles-defaults"), p = li("head");
      p.insertBefore(this.styleEl_, u ? u.nextSibling : p.firstChild);
    }
    this.fill_ = !1, this.fluid_ = !1, this.width(this.options_.width), this.height(this.options_.height), this.fill(this.options_.fill), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio), this.crossOrigin(this.options_.crossOrigin || this.options_.crossorigin);
    const l = e.getElementsByTagName("a");
    for (let u = 0; u < l.length; u++) {
      const p = l.item(u);
      Ai(p, "vjs-hidden"), p.setAttribute("hidden", "hidden");
    }
    return e.initNetworkState_ = e.networkState, e.parentNode && !s && e.parentNode.insertBefore(t, e), jo(e, t), this.children_.unshift(e), this.el_.setAttribute("lang", this.language_), this.el_.setAttribute("translate", "no"), this.el_ = t, t;
  }
  crossOrigin(t) {
    if (t === void 0) return this.techGet_("crossOrigin");
    t === null || t === "anonymous" || t === "use-credentials" ? (this.techCall_("setCrossOrigin", t), this.posterImage && this.posterImage.crossOrigin(t)) : J.warn(`crossOrigin must be null,  "anonymous" or "use-credentials", given "${t}"`);
  }
  width(t) {
    return this.dimension("width", t);
  }
  height(t) {
    return this.dimension("height", t);
  }
  dimension(t, e) {
    const s = t + "_";
    if (e === void 0) return this[s] || 0;
    if (e === "" || e === "auto") return this[s] = void 0, void this.updateStyleEl_();
    const n = parseFloat(e);
    isNaN(n) ? J.error(`Improper value "${e}" supplied for for ${t}`) : (this[s] = n, this.updateStyleEl_());
  }
  fluid(t) {
    if (t === void 0) return !!this.fluid_;
    this.fluid_ = !!t, Xe(this) && this.off(["playerreset", "resize"], this.boundUpdateStyleEl_), t ? (this.addClass("vjs-fluid"), this.fill(!1), Uv(this, () => {
      this.on(["playerreset", "resize"], this.boundUpdateStyleEl_);
    })) : this.removeClass("vjs-fluid"), this.updateStyleEl_();
  }
  fill(t) {
    if (t === void 0) return !!this.fill_;
    this.fill_ = !!t, t ? (this.addClass("vjs-fill"), this.fluid(!1)) : this.removeClass("vjs-fill");
  }
  aspectRatio(t) {
    if (t === void 0) return this.aspectRatio_;
    if (!/^\d+\:\d+$/.test(t)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
    this.aspectRatio_ = t, this.fluid(!0), this.updateStyleEl_();
  }
  updateStyleEl_() {
    if (E.VIDEOJS_NO_DYNAMIC_STYLE === !0) {
      const l = typeof this.width_ == "number" ? this.width_ : this.options_.width, u = typeof this.height_ == "number" ? this.height_ : this.options_.height, p = this.tech_ && this.tech_.el();
      return void (p && (l >= 0 && (p.width = l), u >= 0 && (p.height = u)));
    }
    let t, e, s, n;
    s = this.aspectRatio_ !== void 0 && this.aspectRatio_ !== "auto" ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9";
    const r = s.split(":"), a = r[1] / r[0];
    t = this.width_ !== void 0 ? this.width_ : this.height_ !== void 0 ? this.height_ / a : this.videoWidth() || 300, e = this.height_ !== void 0 ? this.height_ : t * a, n = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(n), Lp(this.styleEl_, `
      .${n} {
        width: ${t}px;
        height: ${e}px;
      }

      .${n}.vjs-fluid:not(.vjs-audio-only-mode) {
        padding-top: ${100 * a}%;
      }
    `);
  }
  loadTech_(t, e) {
    this.tech_ && this.unloadTech_();
    const s = Et(t), n = t.charAt(0).toLowerCase() + t.slice(1);
    s !== "Html5" && this.tag && (K.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = s, this.isReady_ = !1;
    let r = this.autoplay();
    (typeof this.autoplay() == "string" || this.autoplay() === !0 && this.options_.normalizeAutoplay) && (r = !1);
    const a = { source: e, autoplay: r, nativeControlsForTouch: this.options_.nativeControlsForTouch, playerId: this.id(), techId: `${this.id()}_${n}_api`, playsinline: this.options_.playsinline, preload: this.options_.preload, loop: this.options_.loop, disablePictureInPicture: this.options_.disablePictureInPicture, muted: this.options_.muted, poster: this.poster(), language: this.language(), playerElIngest: this.playerElIngest_ || !1, "vtt.js": this.options_["vtt.js"], canOverridePoster: !!this.options_.techCanOverridePoster, enableSourceset: this.options_.enableSourceset };
    qt.names.forEach((u) => {
      const p = qt[u];
      a[p.getterName] = this[p.privateName];
    }), Object.assign(a, this.options_[s]), Object.assign(a, this.options_[n]), Object.assign(a, this.options_[t.toLowerCase()]), this.tag && (a.tag = this.tag), e && e.src === this.cache_.src && this.cache_.currentTime > 0 && (a.startTime = this.cache_.currentTime);
    const l = K.getTech(t);
    if (!l) throw new Error(`No Tech named '${s}' exists! '${s}' should be registered using videojs.registerTech()'`);
    this.tech_ = new l(a), this.tech_.ready(ut(this, this.handleTechReady_), !0), Ku.jsonToTextTracks(this.textTracksJson_ || [], this.tech_), em.forEach((u) => {
      this.on(this.tech_, u, (p) => this[`handleTech${Et(u)}_`](p));
    }), Object.keys(fo).forEach((u) => {
      this.on(this.tech_, u, (p) => {
        this.tech_.playbackRate() === 0 && this.tech_.seeking() ? this.queuedCallbacks_.push({ callback: this[`handleTech${fo[u]}_`].bind(this), event: p }) : this[`handleTech${fo[u]}_`](p);
      });
    }), this.on(this.tech_, "loadstart", (u) => this.handleTechLoadStart_(u)), this.on(this.tech_, "sourceset", (u) => this.handleTechSourceset_(u)), this.on(this.tech_, "waiting", (u) => this.handleTechWaiting_(u)), this.on(this.tech_, "ended", (u) => this.handleTechEnded_(u)), this.on(this.tech_, "seeking", (u) => this.handleTechSeeking_(u)), this.on(this.tech_, "play", (u) => this.handleTechPlay_(u)), this.on(this.tech_, "pause", (u) => this.handleTechPause_(u)), this.on(this.tech_, "durationchange", (u) => this.handleTechDurationChange_(u)), this.on(this.tech_, "fullscreenchange", (u, p) => this.handleTechFullscreenChange_(u, p)), this.on(this.tech_, "fullscreenerror", (u, p) => this.handleTechFullscreenError_(u, p)), this.on(this.tech_, "enterpictureinpicture", (u) => this.handleTechEnterPictureInPicture_(u)), this.on(this.tech_, "leavepictureinpicture", (u) => this.handleTechLeavePictureInPicture_(u)), this.on(this.tech_, "error", (u) => this.handleTechError_(u)), this.on(this.tech_, "posterchange", (u) => this.handleTechPosterChange_(u)), this.on(this.tech_, "textdata", (u) => this.handleTechTextData_(u)), this.on(this.tech_, "ratechange", (u) => this.handleTechRateChange_(u)), this.on(this.tech_, "loadedmetadata", this.boundUpdateStyleEl_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || s === "Html5" && this.tag || jo(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null);
  }
  unloadTech_() {
    qt.names.forEach((t) => {
      const e = qt[t];
      this[e.privateName] = this[e.getterName]();
    }), this.textTracksJson_ = Ku.textTracksToJson(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1, this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")), this.isPosterFromTech_ = !1;
  }
  tech(t) {
    return t === void 0 && J.warn(`Using the tech directly can be dangerous. I hope you know what you're doing.
See https://github.com/videojs/video.js/issues/2617 for more info.
`), this.tech_;
  }
  version() {
    return { "video.js": Ro };
  }
  addTechControlsListeners_() {
    this.removeTechControlsListeners_(), this.on(this.tech_, "click", this.boundHandleTechClick_), this.on(this.tech_, "dblclick", this.boundHandleTechDoubleClick_), this.on(this.tech_, "touchstart", this.boundHandleTechTouchStart_), this.on(this.tech_, "touchmove", this.boundHandleTechTouchMove_), this.on(this.tech_, "touchend", this.boundHandleTechTouchEnd_), this.on(this.tech_, "tap", this.boundHandleTechTap_);
  }
  removeTechControlsListeners_() {
    this.off(this.tech_, "tap", this.boundHandleTechTap_), this.off(this.tech_, "touchstart", this.boundHandleTechTouchStart_), this.off(this.tech_, "touchmove", this.boundHandleTechTouchMove_), this.off(this.tech_, "touchend", this.boundHandleTechTouchEnd_), this.off(this.tech_, "click", this.boundHandleTechClick_), this.off(this.tech_, "dblclick", this.boundHandleTechDoubleClick_);
  }
  handleTechReady_() {
    this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_();
  }
  handleTechLoadStart_() {
    this.removeClass("vjs-ended", "vjs-seeking"), this.error(null), this.handleTechDurationChange_(), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : this.trigger("loadstart"), this.manualAutoplay_(this.autoplay() === !0 && this.options_.normalizeAutoplay ? "play" : this.autoplay());
  }
  manualAutoplay_(t) {
    if (!this.tech_ || typeof t != "string") return;
    const e = () => {
      const n = this.muted();
      this.muted(!0);
      const r = () => {
        this.muted(n);
      };
      this.playTerminatedQueue_.push(r);
      const a = this.play();
      if (en(a)) return a.catch((l) => {
        throw r(), new Error(`Rejection at manualAutoplay. Restoring muted value. ${l || ""}`);
      });
    };
    let s;
    return t !== "any" || this.muted() ? s = t !== "muted" || this.muted() ? this.play() : e() : (s = this.play(), en(s) && (s = s.catch(e))), en(s) ? s.then(() => {
      this.trigger({ type: "autoplay-success", autoplay: t });
    }).catch(() => {
      this.trigger({ type: "autoplay-failure", autoplay: t });
    }) : void 0;
  }
  updateSourceCaches_(t = "") {
    let e = t, s = "";
    typeof e != "string" && (e = t.src, s = t.type), this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], e && !s && (s = lb(this, e)), this.cache_.source = ht({}, t, { src: e, type: s });
    const n = this.cache_.sources.filter((u) => u.src && u.src === e), r = [], a = this.$$("source"), l = [];
    for (let u = 0; u < a.length; u++) {
      const p = ri(a[u]);
      r.push(p), p.src && p.src === e && l.push(p.src);
    }
    l.length && !n.length ? this.cache_.sources = r : n.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = e;
  }
  handleTechSourceset_(t) {
    if (!this.changingSrc_) {
      let e = (r) => this.updateSourceCaches_(r);
      const s = this.currentSource().src, n = t.src;
      s && !/^blob:/.test(s) && /^blob:/.test(n) && (!this.lastSource_ || this.lastSource_.tech !== n && this.lastSource_.player !== s) && (e = () => {
      }), e(n), t.src || this.tech_.any(["sourceset", "loadstart"], (r) => {
        if (r.type === "sourceset") return;
        const a = this.techGet_("currentSrc");
        this.lastSource_.tech = a, this.updateSourceCaches_(a);
      });
    }
    this.lastSource_ = { player: this.currentSource().src, tech: t.src }, this.trigger({ src: t.src, type: "sourceset" });
  }
  hasStarted(t) {
    if (t === void 0) return this.hasStarted_;
    t !== this.hasStarted_ && (this.hasStarted_ = t, this.hasStarted_ ? this.addClass("vjs-has-started") : this.removeClass("vjs-has-started"));
  }
  handleTechPlay_() {
    this.removeClass("vjs-ended", "vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play");
  }
  handleTechRateChange_() {
    this.tech_.playbackRate() > 0 && this.cache_.lastPlaybackRate === 0 && (this.queuedCallbacks_.forEach((t) => t.callback(t.event)), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange");
  }
  handleTechWaiting_() {
    this.addClass("vjs-waiting"), this.trigger("waiting");
    const t = this.currentTime(), e = () => {
      t !== this.currentTime() && (this.removeClass("vjs-waiting"), this.off("timeupdate", e));
    };
    this.on("timeupdate", e);
  }
  handleTechCanPlay_() {
    this.removeClass("vjs-waiting"), this.trigger("canplay");
  }
  handleTechCanPlayThrough_() {
    this.removeClass("vjs-waiting"), this.trigger("canplaythrough");
  }
  handleTechPlaying_() {
    this.removeClass("vjs-waiting"), this.trigger("playing");
  }
  handleTechSeeking_() {
    this.addClass("vjs-seeking"), this.trigger("seeking");
  }
  handleTechSeeked_() {
    this.removeClass("vjs-seeking", "vjs-ended"), this.trigger("seeked");
  }
  handleTechPause_() {
    this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause");
  }
  handleTechEnded_() {
    this.addClass("vjs-ended"), this.removeClass("vjs-waiting"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended");
  }
  handleTechDurationChange_() {
    this.duration(this.techGet_("duration"));
  }
  handleTechClick_(t) {
    this.controls_ && (this.options_ !== void 0 && this.options_.userActions !== void 0 && this.options_.userActions.click !== void 0 && this.options_.userActions.click === !1 || (this.options_ !== void 0 && this.options_.userActions !== void 0 && typeof this.options_.userActions.click == "function" ? this.options_.userActions.click.call(this, t) : this.paused() ? xe(this.play()) : this.pause()));
  }
  handleTechDoubleClick_(t) {
    this.controls_ && (Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), (e) => e.contains(t.target)) || this.options_ !== void 0 && this.options_.userActions !== void 0 && this.options_.userActions.doubleClick !== void 0 && this.options_.userActions.doubleClick === !1 || (this.options_ !== void 0 && this.options_.userActions !== void 0 && typeof this.options_.userActions.doubleClick == "function" ? this.options_.userActions.doubleClick.call(this, t) : this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen()));
  }
  handleTechTap_() {
    this.userActive(!this.userActive());
  }
  handleTechTouchStart_() {
    this.userWasActive = this.userActive();
  }
  handleTechTouchMove_() {
    this.userWasActive && this.reportUserActivity();
  }
  handleTechTouchEnd_(t) {
    t.cancelable && t.preventDefault();
  }
  toggleFullscreenClass_() {
    this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen");
  }
  documentFullscreenChange_(t) {
    const e = t.target.player;
    if (e && e !== this) return;
    const s = this.el();
    let n = q[this.fsApi_.fullscreenElement] === s;
    !n && s.matches && (n = s.matches(":" + this.fsApi_.fullscreen)), this.isFullscreen(n);
  }
  handleTechFullscreenChange_(t, e) {
    e && (e.nativeIOSFullscreen && (this.addClass("vjs-ios-native-fs"), this.tech_.one("webkitendfullscreen", () => {
      this.removeClass("vjs-ios-native-fs");
    })), this.isFullscreen(e.isFullscreen));
  }
  handleTechFullscreenError_(t, e) {
    this.trigger("fullscreenerror", e);
  }
  togglePictureInPictureClass_() {
    this.isInPictureInPicture() ? this.addClass("vjs-picture-in-picture") : this.removeClass("vjs-picture-in-picture");
  }
  handleTechEnterPictureInPicture_(t) {
    this.isInPictureInPicture(!0);
  }
  handleTechLeavePictureInPicture_(t) {
    this.isInPictureInPicture(!1);
  }
  handleTechError_() {
    const t = this.tech_.error();
    t && this.error(t);
  }
  handleTechTextData_() {
    let t = null;
    arguments.length > 1 && (t = arguments[1]), this.trigger("textdata", t);
  }
  getCache() {
    return this.cache_;
  }
  resetCache_() {
    this.cache_ = { currentTime: 0, initTime: 0, inactivityTimeout: this.options_.inactivityTimeout, duration: NaN, lastVolume: 1, lastPlaybackRate: this.defaultPlaybackRate(), media: null, src: "", source: {}, sources: [], playbackRates: [], volume: 1 };
  }
  techCall_(t, e) {
    this.ready(function() {
      if (t in sb) return eb(this.middleware_, this.tech_, t, e);
      if (t in td) return Zu(this.middleware_, this.tech_, t, e);
      try {
        this.tech_ && this.tech_[t](e);
      } catch (s) {
        throw J(s), s;
      }
    }, !0);
  }
  techGet_(t) {
    if (this.tech_ && this.tech_.isReady_) {
      if (t in ib) return tb(this.middleware_, this.tech_, t);
      if (t in td) return Zu(this.middleware_, this.tech_, t);
      try {
        return this.tech_[t]();
      } catch (e) {
        throw this.tech_[t] === void 0 ? (J(`Video.js: ${t} method not defined for ${this.techName_} playback technology.`, e), e) : e.name === "TypeError" ? (J(`Video.js: ${t} unavailable on ${this.techName_} playback technology element.`, e), this.tech_.isReady_ = !1, e) : (J(e), e);
      }
    }
  }
  play() {
    return new Promise((t) => {
      this.play_(t);
    });
  }
  play_(t = xe) {
    this.playCallbacks_.push(t);
    const e = !!(!this.changingSrc_ && (this.src() || this.currentSrc())), s = !!(Wr || $t);
    if (this.waitToPlay_ && (this.off(["ready", "loadstart"], this.waitToPlay_), this.waitToPlay_ = null), !this.isReady_ || !e) return this.waitToPlay_ = (r) => {
      this.play_();
    }, this.one(["ready", "loadstart"], this.waitToPlay_), void (!e && s && this.load());
    const n = this.techGet_("play");
    s && this.hasClass("vjs-ended") && this.resetProgressBar_(), n === null ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(n);
  }
  runPlayTerminatedQueue_() {
    const t = this.playTerminatedQueue_.slice(0);
    this.playTerminatedQueue_ = [], t.forEach(function(e) {
      e();
    });
  }
  runPlayCallbacks_(t) {
    const e = this.playCallbacks_.slice(0);
    this.playCallbacks_ = [], this.playTerminatedQueue_ = [], e.forEach(function(s) {
      s(t);
    });
  }
  pause() {
    this.techCall_("pause");
  }
  paused() {
    return this.techGet_("paused") !== !1;
  }
  played() {
    return this.techGet_("played") || be(0, 0);
  }
  scrubbing(t) {
    if (t === void 0) return this.scrubbing_;
    this.scrubbing_ = !!t, this.techCall_("setScrubbing", this.scrubbing_), t ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing");
  }
  currentTime(t) {
    return t === void 0 ? (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime) : (t < 0 && (t = 0), this.isReady_ && !this.changingSrc_ && this.tech_ && this.tech_.isReady_ ? (this.techCall_("setCurrentTime", t), this.cache_.initTime = 0, void (isFinite(t) && (this.cache_.currentTime = Number(t)))) : (this.cache_.initTime = t, this.off("canplay", this.boundApplyInitTime_), void this.one("canplay", this.boundApplyInitTime_)));
  }
  applyInitTime_() {
    this.currentTime(this.cache_.initTime);
  }
  duration(t) {
    if (t === void 0) return this.cache_.duration !== void 0 ? this.cache_.duration : NaN;
    (t = parseFloat(t)) < 0 && (t = 1 / 0), t !== this.cache_.duration && (this.cache_.duration = t, t === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), isNaN(t) || this.trigger("durationchange"));
  }
  remainingTime() {
    return this.duration() - this.currentTime();
  }
  remainingTimeDisplay() {
    return Math.floor(this.duration()) - Math.floor(this.currentTime());
  }
  buffered() {
    let t = this.techGet_("buffered");
    return t && t.length || (t = be(0, 0)), t;
  }
  seekable() {
    let t = this.techGet_("seekable");
    return t && t.length || (t = be(0, 0)), t;
  }
  seeking() {
    return this.techGet_("seeking");
  }
  ended() {
    return this.techGet_("ended");
  }
  networkState() {
    return this.techGet_("networkState");
  }
  readyState() {
    return this.techGet_("readyState");
  }
  bufferedPercent() {
    return jp(this.buffered(), this.duration());
  }
  bufferedEnd() {
    const t = this.buffered(), e = this.duration();
    let s = t.end(t.length - 1);
    return s > e && (s = e), s;
  }
  volume(t) {
    let e;
    return t !== void 0 ? (e = Math.max(0, Math.min(1, t)), this.cache_.volume = e, this.techCall_("setVolume", e), void (e > 0 && this.lastVolume_(e))) : (e = parseFloat(this.techGet_("volume")), isNaN(e) ? 1 : e);
  }
  muted(t) {
    if (t === void 0) return this.techGet_("muted") || !1;
    this.techCall_("setMuted", t);
  }
  defaultMuted(t) {
    return t !== void 0 && this.techCall_("setDefaultMuted", t), this.techGet_("defaultMuted") || !1;
  }
  lastVolume_(t) {
    if (t === void 0 || t === 0) return this.cache_.lastVolume;
    this.cache_.lastVolume = t;
  }
  supportsFullScreen() {
    return this.techGet_("supportsFullScreen") || !1;
  }
  isFullscreen(t) {
    if (t !== void 0) {
      const e = this.isFullscreen_;
      return this.isFullscreen_ = !!t, this.isFullscreen_ !== e && this.fsApi_.prefixed && this.trigger("fullscreenchange"), void this.toggleFullscreenClass_();
    }
    return this.isFullscreen_;
  }
  requestFullscreen(t) {
    this.isInPictureInPicture() && this.exitPictureInPicture();
    const e = this;
    return new Promise((s, n) => {
      function r() {
        e.off("fullscreenerror", l), e.off("fullscreenchange", a);
      }
      function a() {
        r(), s();
      }
      function l(p, g) {
        r(), n(g);
      }
      e.one("fullscreenchange", a), e.one("fullscreenerror", l);
      const u = e.requestFullscreenHelper_(t);
      u && (u.then(r, r), u.then(s, n));
    });
  }
  requestFullscreenHelper_(t) {
    let e;
    if (this.fsApi_.prefixed || (e = this.options_.fullscreen && this.options_.fullscreen.options || {}, t !== void 0 && (e = t)), this.fsApi_.requestFullscreen) {
      const s = this.el_[this.fsApi_.requestFullscreen](e);
      return s && s.then(() => this.isFullscreen(!0), () => this.isFullscreen(!1)), s;
    }
    this.tech_.supportsFullScreen() && !this.options_.preferFullWindow ? this.techCall_("enterFullScreen") : this.enterFullWindow();
  }
  exitFullscreen() {
    const t = this;
    return new Promise((e, s) => {
      function n() {
        t.off("fullscreenerror", a), t.off("fullscreenchange", r);
      }
      function r() {
        n(), e();
      }
      function a(u, p) {
        n(), s(p);
      }
      t.one("fullscreenchange", r), t.one("fullscreenerror", a);
      const l = t.exitFullscreenHelper_();
      l && (l.then(n, n), l.then(e, s));
    });
  }
  exitFullscreenHelper_() {
    if (this.fsApi_.requestFullscreen) {
      const t = q[this.fsApi_.exitFullscreen]();
      return t && xe(t.then(() => this.isFullscreen(!1))), t;
    }
    this.tech_.supportsFullScreen() && !this.options_.preferFullWindow ? this.techCall_("exitFullScreen") : this.exitFullWindow();
  }
  enterFullWindow() {
    this.isFullscreen(!0), this.isFullWindow = !0, this.docOrigOverflow = q.documentElement.style.overflow, ae(q, "keydown", this.boundFullWindowOnEscKey_), q.documentElement.style.overflow = "hidden", Ai(q.body, "vjs-full-window"), this.trigger("enterFullWindow");
  }
  fullWindowOnEscKey(t) {
    X.isEventKey(t, "Esc") && this.isFullscreen() === !0 && (this.isFullWindow ? this.exitFullWindow() : this.exitFullscreen());
  }
  exitFullWindow() {
    this.isFullscreen(!1), this.isFullWindow = !1, Mt(q, "keydown", this.boundFullWindowOnEscKey_), q.documentElement.style.overflow = this.docOrigOverflow, Gr(q.body, "vjs-full-window"), this.trigger("exitFullWindow");
  }
  disablePictureInPicture(t) {
    if (t === void 0) return this.techGet_("disablePictureInPicture");
    this.techCall_("setDisablePictureInPicture", t), this.options_.disablePictureInPicture = t, this.trigger("disablepictureinpicturechanged");
  }
  isInPictureInPicture(t) {
    return t !== void 0 ? (this.isInPictureInPicture_ = !!t, void this.togglePictureInPictureClass_()) : !!this.isInPictureInPicture_;
  }
  requestPictureInPicture() {
    if (this.options_.enableDocumentPictureInPicture && E.documentPictureInPicture) {
      const t = q.createElement(this.el().tagName);
      return t.classList = this.el().classList, t.classList.add("vjs-pip-container"), this.posterImage && t.appendChild(this.posterImage.el().cloneNode(!0)), this.titleBar && t.appendChild(this.titleBar.el().cloneNode(!0)), t.appendChild(Y("p", { className: "vjs-pip-text" }, {}, this.localize("Playing in picture-in-picture"))), E.documentPictureInPicture.requestWindow({ width: this.videoWidth(), height: this.videoHeight() }).then((e) => (Ap(e), this.el_.parentNode.insertBefore(t, this.el_), e.document.body.appendChild(this.el_), e.document.body.classList.add("vjs-pip-window"), this.player_.isInPictureInPicture(!0), this.player_.trigger({ type: "enterpictureinpicture", pipWindow: e }), e.addEventListener("pagehide", (s) => {
        const n = s.target.querySelector(".video-js");
        t.parentNode.replaceChild(n, t), this.player_.isInPictureInPicture(!1), this.player_.trigger("leavepictureinpicture");
      }), e));
    }
    return "pictureInPictureEnabled" in q && this.disablePictureInPicture() === !1 ? this.techGet_("requestPictureInPicture") : Promise.reject("No PiP mode is available");
  }
  exitPictureInPicture() {
    return E.documentPictureInPicture && E.documentPictureInPicture.window ? (E.documentPictureInPicture.window.close(), Promise.resolve()) : "pictureInPictureEnabled" in q ? q.exitPictureInPicture() : void 0;
  }
  handleKeyDown(t) {
    const { userActions: e } = this.options_;
    !e || !e.hotkeys || ((s) => {
      const n = s.tagName.toLowerCase();
      return s.isContentEditable ? !0 : n === "input" ? ["button", "checkbox", "hidden", "radio", "reset", "submit"].indexOf(s.type) === -1 : ["textarea"].indexOf(n) !== -1;
    })(this.el_.ownerDocument.activeElement) || (typeof e.hotkeys == "function" ? e.hotkeys.call(this, t) : this.handleHotkeys(t));
  }
  handleHotkeys(t) {
    const e = this.options_.userActions ? this.options_.userActions.hotkeys : {}, { fullscreenKey: s = (a) => X.isEventKey(a, "f"), muteKey: n = (a) => X.isEventKey(a, "m"), playPauseKey: r = (a) => X.isEventKey(a, "k") || X.isEventKey(a, "Space") } = e;
    if (s.call(this, t)) {
      t.preventDefault(), t.stopPropagation();
      const a = R.getComponent("FullscreenToggle");
      q[this.fsApi_.fullscreenEnabled] !== !1 && a.prototype.handleClick.call(this, t);
    } else n.call(this, t) ? (t.preventDefault(), t.stopPropagation(), R.getComponent("MuteToggle").prototype.handleClick.call(this, t)) : r.call(this, t) && (t.preventDefault(), t.stopPropagation(), R.getComponent("PlayToggle").prototype.handleClick.call(this, t));
  }
  canPlayType(t) {
    let e;
    for (let s = 0, n = this.options_.techOrder; s < n.length; s++) {
      const r = n[s];
      let a = K.getTech(r);
      if (a || (a = R.getComponent(r)), a) {
        if (a.isSupported() && (e = a.canPlayType(t), e)) return e;
      } else J.error(`The "${r}" tech is undefined. Skipped browser support check for that tech.`);
    }
    return "";
  }
  selectSource(t) {
    const e = this.options_.techOrder.map((l) => [l, K.getTech(l)]).filter(([l, u]) => u ? u.isSupported() : (J.error(`The "${l}" tech is undefined. Skipped browser support check for that tech.`), !1)), s = function(l, u, p) {
      let g;
      return l.some((y) => u.some((T) => {
        if (g = p(y, T), g) return !0;
      })), g;
    };
    let n;
    const r = (l) => (u, p) => l(p, u), a = ([l, u], p) => {
      if (u.canPlaySource(p, this.options_[l.toLowerCase()])) return { source: p, tech: l };
    };
    return n = this.options_.sourceOrder ? s(t, e, r(a)) : s(e, t, a), n || !1;
  }
  handleSrc_(t, e) {
    if (t === void 0) return this.cache_.src || "";
    this.resetRetryOnError_ && this.resetRetryOnError_();
    const s = Wp(t);
    if (s.length) {
      if (this.changingSrc_ = !0, e || (this.cache_.sources = s), this.updateSourceCaches_(s[0]), Jv(this, s[0], (n, r) => {
        if (this.middleware_ = r, e || (this.cache_.sources = s), this.updateSourceCaches_(n), this.src_(n)) return s.length > 1 ? this.handleSrc_(s.slice(1)) : (this.changingSrc_ = !1, this.setTimeout(function() {
          this.error({ code: 4, message: this.options_.notSupportedMessage });
        }, 0), void this.triggerReady());
        Zv(r, this.tech_);
      }), s.length > 1) {
        const n = () => {
          this.error(null), this.handleSrc_(s.slice(1), !0);
        }, r = () => {
          this.off("error", n);
        };
        this.one("error", n), this.one("playing", r), this.resetRetryOnError_ = () => {
          this.off("error", n), this.off("playing", r);
        };
      }
    } else this.setTimeout(function() {
      this.error({ code: 4, message: this.options_.notSupportedMessage });
    }, 0);
  }
  src(t) {
    return this.handleSrc_(t, !1);
  }
  src_(t) {
    const e = this.selectSource([t]);
    return !e || (Up(e.tech, this.techName_) ? (this.ready(function() {
      this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", t) : this.techCall_("src", t.src), this.changingSrc_ = !1;
    }, !0), !1) : (this.changingSrc_ = !0, this.loadTech_(e.tech, e.source), this.tech_.ready(() => {
      this.changingSrc_ = !1;
    }), !1));
  }
  load() {
    this.tech_ && this.tech_.vhs ? this.src(this.currentSource()) : this.techCall_("load");
  }
  reset() {
    this.paused() ? this.doReset_() : xe(this.play().then(() => this.doReset_()));
  }
  doReset_() {
    this.tech_ && this.tech_.clearTracks("text"), this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.resetCache_(), this.poster(""), this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset"), this.resetControlBarUI_(), this.error(null), this.titleBar && this.titleBar.update({ title: void 0, description: void 0 }), Xe(this) && this.trigger("playerreset");
  }
  resetControlBarUI_() {
    this.resetProgressBar_(), this.resetPlaybackRate_(), this.resetVolumeBar_();
  }
  resetProgressBar_() {
    this.currentTime(0);
    const { currentTimeDisplay: t, durationDisplay: e, progressControl: s, remainingTimeDisplay: n } = this.controlBar || {}, { seekBar: r } = s || {};
    t && t.updateContent(), e && e.updateContent(), n && n.updateContent(), r && (r.update(), r.loadProgressBar && r.loadProgressBar.update());
  }
  resetPlaybackRate_() {
    this.playbackRate(this.defaultPlaybackRate()), this.handleTechRateChange_();
  }
  resetVolumeBar_() {
    this.volume(1), this.trigger("volumechange");
  }
  currentSources() {
    const t = this.currentSource(), e = [];
    return Object.keys(t).length !== 0 && e.push(t), this.cache_.sources || e;
  }
  currentSource() {
    return this.cache_.source || {};
  }
  currentSrc() {
    return this.currentSource() && this.currentSource().src || "";
  }
  currentType() {
    return this.currentSource() && this.currentSource().type || "";
  }
  preload(t) {
    return t !== void 0 ? (this.techCall_("setPreload", t), void (this.options_.preload = t)) : this.techGet_("preload");
  }
  autoplay(t) {
    if (t === void 0) return this.options_.autoplay || !1;
    let e;
    typeof t == "string" && /(any|play|muted)/.test(t) || t === !0 && this.options_.normalizeAutoplay ? (this.options_.autoplay = t, this.manualAutoplay_(typeof t == "string" ? t : "play"), e = !1) : this.options_.autoplay = !!t, e = e === void 0 ? this.options_.autoplay : e, this.tech_ && this.techCall_("setAutoplay", e);
  }
  playsinline(t) {
    return t !== void 0 && (this.techCall_("setPlaysinline", t), this.options_.playsinline = t), this.techGet_("playsinline");
  }
  loop(t) {
    return t !== void 0 ? (this.techCall_("setLoop", t), void (this.options_.loop = t)) : this.techGet_("loop");
  }
  poster(t) {
    if (t === void 0) return this.poster_;
    t || (t = ""), t !== this.poster_ && (this.poster_ = t, this.techCall_("setPoster", t), this.isPosterFromTech_ = !1, this.trigger("posterchange"));
  }
  handleTechPosterChange_() {
    if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
      const t = this.tech_.poster() || "";
      t !== this.poster_ && (this.poster_ = t, this.isPosterFromTech_ = !0, this.trigger("posterchange"));
    }
  }
  controls(t) {
    if (t === void 0) return !!this.controls_;
    t = !!t, this.controls_ !== t && (this.controls_ = t, this.usingNativeControls() && this.techCall_("setControls", t), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()));
  }
  usingNativeControls(t) {
    if (t === void 0) return !!this.usingNativeControls_;
    t = !!t, this.usingNativeControls_ !== t && (this.usingNativeControls_ = t, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")));
  }
  error(t) {
    if (t === void 0) return this.error_ || null;
    if (oi("beforeerror").forEach((e) => {
      const s = e(this, t);
      Me(s) && !Array.isArray(s) || typeof s == "string" || typeof s == "number" || s === null ? t = s : this.log.error("please return a value that MediaError expects in beforeerror hooks");
    }), this.options_.suppressNotSupportedError && t && t.code === 4) {
      const e = function() {
        this.error(t);
      };
      return this.options_.suppressNotSupportedError = !1, this.any(["click", "touchstart"], e), void this.one("loadstart", function() {
        this.off(["click", "touchstart"], e);
      });
    }
    if (t === null) return this.error_ = null, this.removeClass("vjs-error"), void (this.errorDisplay && this.errorDisplay.close());
    this.error_ = new _t(t), this.addClass("vjs-error"), J.error(`(CODE:${this.error_.code} ${_t.errorTypes[this.error_.code]})`, this.error_.message, this.error_), this.trigger("error"), oi("error").forEach((e) => e(this, this.error_));
  }
  reportUserActivity(t) {
    this.userActivity_ = !0;
  }
  userActive(t) {
    if (t === void 0) return this.userActive_;
    if ((t = !!t) !== this.userActive_) {
      if (this.userActive_ = t, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive");
      this.tech_ && this.tech_.one("mousemove", function(e) {
        e.stopPropagation(), e.preventDefault();
      }), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive");
    }
  }
  listenForUserActivity_() {
    let t, e, s;
    const n = ut(this, this.reportUserActivity), r = function(y) {
      y.screenX === e && y.screenY === s || (e = y.screenX, s = y.screenY, n());
    }, a = function() {
      n(), this.clearInterval(t), t = this.setInterval(n, 250);
    }, l = function(y) {
      n(), this.clearInterval(t);
    };
    this.on("mousedown", a), this.on("mousemove", r), this.on("mouseup", l), this.on("mouseleave", l);
    const u = this.getChild("controlBar");
    let p;
    !u || $t || Oe || (u.on("mouseenter", function(y) {
      this.player().options_.inactivityTimeout !== 0 && (this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout), this.player().options_.inactivityTimeout = 0;
    }), u.on("mouseleave", function(y) {
      this.player().options_.inactivityTimeout = this.player().cache_.inactivityTimeout;
    })), this.on("keydown", n), this.on("keyup", n);
    const g = function() {
      if (!this.userActivity_) return;
      this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(p);
      const y = this.options_.inactivityTimeout;
      y <= 0 || (p = this.setTimeout(function() {
        this.userActivity_ || this.userActive(!1);
      }, y));
    };
    this.setInterval(g, 250);
  }
  playbackRate(t) {
    if (t === void 0) return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
    this.techCall_("setPlaybackRate", t);
  }
  defaultPlaybackRate(t) {
    return t !== void 0 ? this.techCall_("setDefaultPlaybackRate", t) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1;
  }
  isAudio(t) {
    if (t === void 0) return !!this.isAudio_;
    this.isAudio_ = !!t;
  }
  enableAudioOnlyUI_() {
    this.addClass("vjs-audio-only-mode");
    const t = this.children(), e = this.getChild("ControlBar"), s = e && e.currentHeight();
    t.forEach((n) => {
      n !== e && n.el_ && !n.hasClass("vjs-hidden") && (n.hide(), this.audioOnlyCache_.hiddenChildren.push(n));
    }), this.audioOnlyCache_.playerHeight = this.currentHeight(), this.height(s), this.trigger("audioonlymodechange");
  }
  disableAudioOnlyUI_() {
    this.removeClass("vjs-audio-only-mode"), this.audioOnlyCache_.hiddenChildren.forEach((t) => t.show()), this.height(this.audioOnlyCache_.playerHeight), this.trigger("audioonlymodechange");
  }
  audioOnlyMode(t) {
    if (typeof t != "boolean" || t === this.audioOnlyMode_) return this.audioOnlyMode_;
    if (this.audioOnlyMode_ = t, t) {
      const e = [];
      return this.isInPictureInPicture() && e.push(this.exitPictureInPicture()), this.isFullscreen() && e.push(this.exitFullscreen()), this.audioPosterMode() && e.push(this.audioPosterMode(!1)), Promise.all(e).then(() => this.enableAudioOnlyUI_());
    }
    return Promise.resolve().then(() => this.disableAudioOnlyUI_());
  }
  enablePosterModeUI_() {
    (this.tech_ && this.tech_).hide(), this.addClass("vjs-audio-poster-mode"), this.trigger("audiopostermodechange");
  }
  disablePosterModeUI_() {
    (this.tech_ && this.tech_).show(), this.removeClass("vjs-audio-poster-mode"), this.trigger("audiopostermodechange");
  }
  audioPosterMode(t) {
    return typeof t != "boolean" || t === this.audioPosterMode_ ? this.audioPosterMode_ : (this.audioPosterMode_ = t, t ? this.audioOnlyMode() ? this.audioOnlyMode(!1).then(() => {
      this.enablePosterModeUI_();
    }) : Promise.resolve().then(() => {
      this.enablePosterModeUI_();
    }) : Promise.resolve().then(() => {
      this.disablePosterModeUI_();
    }));
  }
  addTextTrack(t, e, s) {
    if (this.tech_) return this.tech_.addTextTrack(t, e, s);
  }
  addRemoteTextTrack(t, e) {
    if (this.tech_) return this.tech_.addRemoteTextTrack(t, e);
  }
  removeRemoteTextTrack(t = {}) {
    let { track: e } = t;
    if (e || (e = t), this.tech_) return this.tech_.removeRemoteTextTrack(e);
  }
  getVideoPlaybackQuality() {
    return this.techGet_("getVideoPlaybackQuality");
  }
  videoWidth() {
    return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0;
  }
  videoHeight() {
    return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0;
  }
  language(t) {
    if (t === void 0) return this.language_;
    this.language_ !== String(t).toLowerCase() && (this.language_ = String(t).toLowerCase(), Xe(this) && this.trigger("languagechange"));
  }
  languages() {
    return ht(pt.prototype.options_.languages, this.languages_);
  }
  toJSON() {
    const t = ht(this.options_), e = t.tracks;
    t.tracks = [];
    for (let s = 0; s < e.length; s++) {
      let n = e[s];
      n = ht(n), n.player = void 0, t.tracks[s] = n;
    }
    return t;
  }
  createModal(t, e) {
    (e = e || {}).content = t || "";
    const s = new fs(this, e);
    return this.addChild(s), s.on("dispose", () => {
      this.removeChild(s);
    }), s.open(), s;
  }
  updateCurrentBreakpoint_() {
    if (!this.responsive()) return;
    const t = this.currentBreakpoint(), e = this.currentWidth();
    for (let s = 0; s < Ko.length; s++) {
      const n = Ko[s];
      if (e <= this.breakpoints_[n]) {
        if (t === n) return;
        t && this.removeClass(cr[t]), this.addClass(cr[n]), this.breakpoint_ = n;
        break;
      }
    }
  }
  removeCurrentBreakpoint_() {
    const t = this.currentBreakpointClass();
    this.breakpoint_ = "", t && this.removeClass(t);
  }
  breakpoints(t) {
    return t === void 0 || (this.breakpoint_ = "", this.breakpoints_ = Object.assign({}, Bb, t), this.updateCurrentBreakpoint_()), Object.assign(this.breakpoints_);
  }
  responsive(t) {
    return t === void 0 ? this.responsive_ : (t = !!t) !== this.responsive_ ? (this.responsive_ = t, t ? (this.on("playerresize", this.boundUpdateCurrentBreakpoint_), this.updateCurrentBreakpoint_()) : (this.off("playerresize", this.boundUpdateCurrentBreakpoint_), this.removeCurrentBreakpoint_()), t) : void 0;
  }
  currentBreakpoint() {
    return this.breakpoint_;
  }
  currentBreakpointClass() {
    return cr[this.breakpoint_] || "";
  }
  loadMedia(t, e) {
    if (!t || typeof t != "object") return;
    const s = this.crossOrigin();
    this.reset(), this.cache_.media = ht(t);
    const { artist: n, artwork: r, description: a, poster: l, src: u, textTracks: p, title: g } = this.cache_.media;
    !r && l && (this.cache_.media.artwork = [{ src: l, type: Ir(l) }]), s && this.crossOrigin(s), u && this.src(u), l && this.poster(l), Array.isArray(p) && p.forEach((y) => this.addRemoteTextTrack(y, !1)), this.titleBar && this.titleBar.update({ title: g, description: a || n || "" }), this.ready(e);
  }
  getMedia() {
    if (!this.cache_.media) {
      const t = this.poster(), e = { src: this.currentSources(), textTracks: Array.prototype.map.call(this.remoteTextTracks(), (s) => ({ kind: s.kind, label: s.label, language: s.language, src: s.src })) };
      return t && (e.poster = t, e.artwork = [{ src: e.poster, type: Ir(e.poster) }]), e;
    }
    return ht(this.cache_.media);
  }
  static getTagSettings(t) {
    const e = { sources: [], tracks: [] }, s = ri(t), n = s["data-setup"];
    if (Zs(t, "vjs-fill") && (s.fill = !0), Zs(t, "vjs-fluid") && (s.fluid = !0), n !== null) {
      const [r, a] = Ry(n || "{}");
      r && J.error(r), Object.assign(s, a);
    }
    if (Object.assign(e, s), t.hasChildNodes()) {
      const r = t.childNodes;
      for (let a = 0, l = r.length; a < l; a++) {
        const u = r[a], p = u.nodeName.toLowerCase();
        p === "source" ? e.sources.push(ri(u)) : p === "track" && e.tracks.push(ri(u));
      }
    }
    return e;
  }
  debug(t) {
    if (t === void 0) return this.debugEnabled_;
    t ? (this.trigger("debugon"), this.previousLogLevel_ = this.log.level, this.log.level("debug"), this.debugEnabled_ = !0) : (this.trigger("debugoff"), this.log.level(this.previousLogLevel_), this.previousLogLevel_ = void 0, this.debugEnabled_ = !1);
  }
  playbackRates(t) {
    if (t === void 0) return this.cache_.playbackRates;
    Array.isArray(t) && t.every((e) => typeof e == "number") && (this.cache_.playbackRates = t, this.trigger("playbackrateschange"));
  }
}
qt.names.forEach(function(i) {
  const t = qt[i];
  pt.prototype[t.getterName] = function() {
    return this.tech_ ? this.tech_[t.getterName]() : (this[t.privateName] = this[t.privateName] || new t.ListClass(), this[t.privateName]);
  };
}), pt.prototype.crossorigin = pt.prototype.crossOrigin, pt.players = {};
const $s = E.navigator;
pt.prototype.options_ = { techOrder: K.defaultTechOrder_, html5: {}, enableSourceset: !0, inactivityTimeout: 2e3, playbackRates: [], liveui: !1, children: ["mediaLoader", "posterImage", "titleBar", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "liveTracker", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"], language: $s && ($s.languages && $s.languages[0] || $s.userLanguage || $s.language) || "en", languages: {}, notSupportedMessage: "No compatible source was found for this media.", normalizeAutoplay: !1, fullscreen: { options: { navigationUI: "hide" } }, breakpoints: {}, responsive: !1, audioOnlyMode: !1, audioPosterMode: !1, enableSmoothSeeking: !1 }, em.forEach(function(i) {
  pt.prototype[`handleTech${Et(i)}_`] = function() {
    return this.trigger(i);
  };
}), R.registerComponent("Player", pt);
const Ar = "plugin", rs = "activePlugins_", Yi = {}, Pr = (i) => Yi.hasOwnProperty(i), pr = (i) => Pr(i) ? Yi[i] : void 0, im = (i, t) => {
  i[rs] = i[rs] || {}, i[rs][t] = !0;
}, Dr = (i, t, e) => {
  const s = (e ? "before" : "") + "pluginsetup";
  i.trigger(s, t), i.trigger(s + ":" + t.name, t);
}, Fb = function(i, t) {
  const e = function() {
    Dr(this, { name: i, plugin: t, instance: null }, !0);
    const s = t.apply(this, arguments);
    return im(this, i), Dr(this, { name: i, plugin: t, instance: s }), s;
  };
  return Object.keys(t).forEach(function(s) {
    e[s] = t[s];
  }), e;
}, Ld = (i, t) => (t.prototype.name = i, function(...e) {
  Dr(this, { name: i, plugin: t, instance: null }, !0);
  const s = new t(this, ...e);
  return this[i] = () => s, Dr(this, s.getEventHash()), s;
});
class Xt {
  constructor(t) {
    if (this.constructor === Xt) throw new Error("Plugin must be sub-classed; not directly instantiated.");
    this.player = t, this.log || (this.log = this.player.log.createLogger(this.name)), Cl(this), delete this.trigger, Mp(this, this.constructor.defaultState), im(t, this.name), this.dispose = this.dispose.bind(this), t.on("dispose", this.dispose);
  }
  version() {
    return this.constructor.VERSION;
  }
  getEventHash(t = {}) {
    return t.name = this.name, t.plugin = this.constructor, t.instance = this, t;
  }
  trigger(t, e = {}) {
    return bs(this.eventBusEl_, t, this.getEventHash(e));
  }
  handleStateChanged(t) {
  }
  dispose() {
    const { name: t, player: e } = this;
    this.trigger("dispose"), this.off(), e.off("dispose", this.dispose), e[rs][t] = !1, this.player = this.state = null, e[t] = Ld(t, Yi[t]);
  }
  static isBasic(t) {
    const e = typeof t == "string" ? pr(t) : t;
    return typeof e == "function" && !Xt.prototype.isPrototypeOf(e.prototype);
  }
  static registerPlugin(t, e) {
    if (typeof t != "string") throw new Error(`Illegal plugin name, "${t}", must be a string, was ${typeof t}.`);
    if (Pr(t)) J.warn(`A plugin named "${t}" already exists. You may want to avoid re-registering plugins!`);
    else if (pt.prototype.hasOwnProperty(t)) throw new Error(`Illegal plugin name, "${t}", cannot share a name with an existing player method!`);
    if (typeof e != "function") throw new Error(`Illegal plugin for "${t}", must be a function, was ${typeof e}.`);
    return Yi[t] = e, t !== Ar && (Xt.isBasic(e) ? pt.prototype[t] = Fb(t, e) : pt.prototype[t] = Ld(t, e)), e;
  }
  static deregisterPlugin(t) {
    if (t === Ar) throw new Error("Cannot de-register base plugin.");
    Pr(t) && (delete Yi[t], delete pt.prototype[t]);
  }
  static getPlugins(t = Object.keys(Yi)) {
    let e;
    return t.forEach((s) => {
      const n = pr(s);
      n && (e = e || {}, e[s] = n);
    }), e;
  }
  static getPluginVersion(t) {
    const e = pr(t);
    return e && e.VERSION || "";
  }
}
function qb(i, t) {
  let e = !1;
  return function(...s) {
    return e || J.warn(i), e = !0, t.apply(this, s);
  };
}
function fe(i, t, e, s) {
  return qb(`${t} is deprecated and will be removed in ${i}.0; please use ${e} instead.`, s);
}
Xt.getPlugin = pr, Xt.BASE_PLUGIN_NAME = Ar, Xt.registerPlugin(Ar, Xt), pt.prototype.usingPlugin = function(i) {
  return !!this[rs] && this[rs][i] === !0;
}, pt.prototype.hasPlugin = function(i) {
  return !!Pr(i);
};
var jb = { UnsupportedSidxContainer: "unsupported-sidx-container-error", DashManifestSidxParsingError: "dash-manifest-sidx-parsing-error", HlsPlaylistRequestError: "hls-playlist-request-error", SegmentUnsupportedMediaFormat: "segment-unsupported-media-format-error", UnsupportedMediaInitialization: "unsupported-media-initialization-error", SegmentSwitchError: "segment-switch-error", SegmentExceedsSourceBufferQuota: "segment-exceeds-source-buffer-quota-error", SegmentAppendError: "segment-append-error", VttLoadError: "vtt-load-error", VttCueParsingError: "vtt-cue-parsing-error", AdsBeforePrerollError: "ads-before-preroll-error", AdsPrerollError: "ads-preroll-error", AdsMidrollError: "ads-midroll-error", AdsPostrollError: "ads-postroll-error", AdsMacroReplacementFailed: "ads-macro-replacement-failed", AdsResumeContentFailed: "ads-resume-content-failed", EMEFailedToRequestMediaKeySystemAccess: "eme-failed-request-media-key-system-access", EMEFailedToCreateMediaKeys: "eme-failed-create-media-keys", EMEFailedToAttachMediaKeysToVideoElement: "eme-failed-attach-media-keys-to-video", EMEFailedToCreateMediaKeySession: "eme-failed-create-media-key-session", EMEFailedToSetServerCertificate: "eme-failed-set-server-certificate", EMEFailedToGenerateLicenseRequest: "eme-failed-generate-license-request", EMEFailedToUpdateSessionWithReceivedLicenseKeys: "eme-failed-update-session", EMEFailedToCloseSession: "eme-failed-close-session", EMEFailedToRemoveKeysFromSession: "eme-failed-remove-keys", EMEFailedToLoadSessionBySessionId: "eme-failed-load-session" };
const sm = (i) => i.indexOf("#") === 0 ? i.slice(1) : i;
function D(i, t, e) {
  let s = D.getPlayer(i);
  if (s) return t && J.warn(`Player "${i}" is already initialised. Options will not be applied.`), e && s.ready(e), s;
  const n = typeof i == "string" ? li("#" + sm(i)) : i;
  if (!vs(n)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
  const r = "getRootNode" in n && n.getRootNode() instanceof E.ShadowRoot ? n.getRootNode() : n.ownerDocument.body;
  n.ownerDocument.defaultView && r.contains(n) || J.warn("The element supplied is not included in the DOM"), (t = t || {}).restoreEl === !0 && (t.restoreEl = (n.parentNode && n.parentNode.hasAttribute("data-vjs-player") ? n.parentNode : n).cloneNode(!0)), oi("beforesetup").forEach((l) => {
    const u = l(n, ht(t));
    Me(u) && !Array.isArray(u) ? t = ht(t, u) : J.error("please return an object in beforesetup hooks");
  });
  const a = R.getComponent("Player");
  return s = new a(n, t, e), oi("setup").forEach((l) => l(s)), s;
}
if (D.hooks_ = Ve, D.hooks = oi, D.hook = Cv, D.hookOnce = kv, D.removeHook = lp, E.VIDEOJS_NO_DYNAMIC_STYLE !== !0 && _s()) {
  let i = li(".vjs-styles-defaults");
  if (!i) {
    i = Dp("vjs-styles-defaults");
    const t = li("head");
    t && t.insertBefore(i, t.firstChild), Lp(i, `
      .video-js {
        width: 300px;
        height: 150px;
      }

      .vjs-fluid:not(.vjs-audio-only-mode) {
        padding-top: 56.25%
      }
    `);
  }
}
Ho(1, D), D.VERSION = Ro, D.options = pt.prototype.options_, D.getPlayers = () => pt.players, D.getPlayer = (i) => {
  const t = pt.players;
  let e;
  if (typeof i == "string") {
    const s = sm(i), n = t[s];
    if (n) return n;
    e = li("#" + s);
  } else e = i;
  if (vs(e)) {
    const { player: s, playerId: n } = e;
    if (s || t[n]) return s || t[n];
  }
}, D.getAllPlayers = () => Object.keys(pt.players).map((i) => pt.players[i]).filter(Boolean), D.players = pt.players, D.getComponent = R.getComponent, D.registerComponent = (i, t) => (K.isTech(t) && J.warn(`The ${i} tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)`), R.registerComponent.call(R, i, t)), D.getTech = K.getTech, D.registerTech = K.registerTech, D.use = Qv, Object.defineProperty(D, "middleware", { value: {}, writeable: !1, enumerable: !0 }), Object.defineProperty(D.middleware, "TERMINATOR", { value: xr, writeable: !1, enumerable: !0 }), D.browser = yp, D.obj = Av, D.mergeOptions = fe(9, "videojs.mergeOptions", "videojs.obj.merge", ht), D.defineLazyProperty = fe(9, "videojs.defineLazyProperty", "videojs.obj.defineLazyProperty", br), D.bind = fe(9, "videojs.bind", "native Function.prototype.bind", ut), D.registerPlugin = Xt.registerPlugin, D.deregisterPlugin = Xt.deregisterPlugin, D.plugin = (i, t) => (J.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), Xt.registerPlugin(i, t)), D.getPlugins = Xt.getPlugins, D.getPlugin = Xt.getPlugin, D.getPluginVersion = Xt.getPluginVersion, D.addLanguage = function(i, t) {
  return i = ("" + i).toLowerCase(), D.options.languages = ht(D.options.languages, { [i]: t }), D.options.languages[i];
}, D.log = J, D.createLogger = hp, D.time = $v, D.createTimeRange = fe(9, "videojs.createTimeRange", "videojs.time.createTimeRanges", be), D.createTimeRanges = fe(9, "videojs.createTimeRanges", "videojs.time.createTimeRanges", be), D.formatTime = fe(9, "videojs.formatTime", "videojs.time.formatTime", Di), D.setFormatTime = fe(9, "videojs.setFormatTime", "videojs.time.setFormatTime", Fp), D.resetFormatTime = fe(9, "videojs.resetFormatTime", "videojs.time.resetFormatTime", qp), D.parseUrl = fe(9, "videojs.parseUrl", "videojs.url.parseUrl", Il), D.isCrossOrigin = fe(9, "videojs.isCrossOrigin", "videojs.url.isCrossOrigin", ta), D.EventTarget = le, D.any = wl, D.on = ae, D.one = Jr, D.off = Mt, D.trigger = bs, D.xhr = _c, D.TextTrack = fn, D.AudioTrack = Vp, D.VideoTrack = zp, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach((i) => {
  D[i] = function() {
    return J.warn(`videojs.${i}() is deprecated; use videojs.dom.${i}() instead`), Wu[i].apply(null, arguments);
  };
}), D.computedStyle = fe(9, "videojs.computedStyle", "videojs.dom.computedStyle", gs), D.dom = Wu, D.fn = Mv, D.num = yb, D.str = qv, D.url = Kv, D.Error = jb;
class $b {
  constructor(t) {
    let e = this;
    return e.id = t.id, e.label = e.id, e.width = t.width, e.height = t.height, e.bitrate = t.bandwidth, e.frameRate = t.frameRate, e.enabled_ = t.enabled, Object.defineProperty(e, "enabled", { get: () => e.enabled_(), set(s) {
      e.enabled_(s);
    } }), e;
  }
}
class Lr extends D.EventTarget {
  constructor() {
    super();
    let t = this;
    return t.levels_ = [], t.selectedIndex_ = -1, Object.defineProperty(t, "selectedIndex", { get: () => t.selectedIndex_ }), Object.defineProperty(t, "length", { get: () => t.levels_.length }), t[Symbol.iterator] = () => t.levels_.values(), t;
  }
  addQualityLevel(t) {
    let e = this.getQualityLevelById(t.id);
    if (e) return e;
    const s = this.levels_.length;
    return e = new $b(t), "" + s in this || Object.defineProperty(this, s, { get() {
      return this.levels_[s];
    } }), this.levels_.push(e), this.trigger({ qualityLevel: e, type: "addqualitylevel" }), e;
  }
  removeQualityLevel(t) {
    let e = null;
    for (let s = 0, n = this.length; s < n; s++) if (this[s] === t) {
      e = this.levels_.splice(s, 1)[0], this.selectedIndex_ === s ? this.selectedIndex_ = -1 : this.selectedIndex_ > s && this.selectedIndex_--;
      break;
    }
    return e && this.trigger({ qualityLevel: t, type: "removequalitylevel" }), e;
  }
  getQualityLevelById(t) {
    for (let e = 0, s = this.length; e < s; e++) {
      const n = this[e];
      if (n.id === t) return n;
    }
    return null;
  }
  dispose() {
    this.selectedIndex_ = -1, this.levels_.length = 0;
  }
}
Lr.prototype.allowedEvents_ = { change: "change", addqualitylevel: "addqualitylevel", removequalitylevel: "removequalitylevel" };
for (const i in Lr.prototype.allowedEvents_) Lr.prototype["on" + i] = null;
var nm = "4.1.0";
const Hb = function(i, t) {
  const e = i.qualityLevels, s = new Lr(), n = function() {
    s.dispose(), i.qualityLevels = e, i.off("dispose", n);
  };
  return i.on("dispose", n), i.qualityLevels = () => s, i.qualityLevels.VERSION = nm, s;
}, Od = function(i) {
  return Hb(this, D.obj.merge({}, i));
};
D.registerPlugin("qualityLevels", Od), Od.VERSION = nm;
const Kt = $r, Or = (i, t) => t && t.responseURL && i !== t.responseURL ? t.responseURL : i, de = (i) => D.log.debug ? D.log.debug.bind(D, "VHS:", `${i} >`) : function() {
};
function st(...i) {
  const t = D.obj || D;
  return (t.merge || t.mergeOptions).apply(t, i);
}
function Jt(...i) {
  const t = D.time || D;
  return (t.createTimeRanges || t.createTimeRanges).apply(t, i);
}
function Vb(i) {
  if (i.length === 0) return "Buffered Ranges are empty";
  let t = `Buffered Ranges: 
`;
  for (let e = 0; e < i.length; e++) {
    const s = i.start(e), n = i.end(e);
    t += `${s} --> ${n}. Duration (${n - s})
`;
  }
  return t;
}
const Ie = 1 / 30, Ae = 3 * Ie, rm = function(i, t) {
  const e = [];
  let s;
  if (i && i.length) for (s = 0; s < i.length; s++) t(i.start(s), i.end(s)) && e.push([i.start(s), i.end(s)]);
  return Jt(e);
}, Qi = function(i, t) {
  return rm(i, function(e, s) {
    return e - Ae <= t && s + Ae >= t;
  });
}, Zn = function(i, t) {
  return rm(i, function(e) {
    return e - Ie >= t;
  });
}, zb = function(i) {
  if (i.length < 2) return Jt();
  const t = [];
  for (let e = 1; e < i.length; e++) {
    const s = i.end(e - 1), n = i.start(e);
    t.push([s, n]);
  }
  return Jt(t);
}, Wb = function(i, t) {
  let e = null, s = null, n = 0;
  const r = [], a = [];
  if (!(i && i.length && t && t.length)) return Jt();
  let l = i.length;
  for (; l--; ) r.push({ time: i.start(l), type: "start" }), r.push({ time: i.end(l), type: "end" });
  for (l = t.length; l--; ) r.push({ time: t.start(l), type: "start" }), r.push({ time: t.end(l), type: "end" });
  for (r.sort(function(u, p) {
    return u.time - p.time;
  }), l = 0; l < r.length; l++) r[l].type === "start" ? (n++, n === 2 && (e = r[l].time)) : r[l].type === "end" && (n--, n === 1 && (s = r[l].time)), e !== null && s !== null && (a.push([e, s]), e = null, s = null);
  return Jt(a);
}, am = (i) => {
  const t = [];
  if (!i || !i.length) return "";
  for (let e = 0; e < i.length; e++) t.push(i.start(e) + " => " + i.end(e));
  return t.join(", ");
}, Gb = function(i, t, e = 1) {
  return ((i.length ? i.end(i.length - 1) : 0) - t) / e;
}, ki = (i) => {
  const t = [];
  for (let e = 0; e < i.length; e++) t.push({ start: i.start(e), end: i.end(e) });
  return t;
}, Xb = function(i, t) {
  if (i === t) return !1;
  if (!i && t || !t && i || i.length !== t.length) return !0;
  for (let e = 0; e < i.length; e++) if (i.start(e) !== t.start(e) || i.end(e) !== t.end(e)) return !0;
  return !1;
}, yo = function(i) {
  if (i && i.length && i.end) return i.end(i.length - 1);
}, Rl = function(i, t) {
  let e = 0;
  if (!i || !i.length) return e;
  for (let s = 0; s < i.length; s++) {
    const n = i.start(s), r = i.end(s);
    t > r || (e += t > n && t <= r ? r - t : r - n);
  }
  return e;
}, Ml = (i, t) => {
  if (!t.preload) return t.duration;
  let e = 0;
  return (t.parts || []).forEach(function(s) {
    e += s.duration;
  }), (t.preloadHints || []).forEach(function(s) {
    s.type === "PART" && (e += i.partTargetDuration);
  }), e;
}, Yo = (i) => (i.segments || []).reduce((t, e, s) => (e.parts ? e.parts.forEach(function(n, r) {
  t.push({ duration: n.duration, segmentIndex: s, partIndex: r, part: n, segment: e });
}) : t.push({ duration: e.duration, segmentIndex: s, partIndex: null, segment: e, part: null }), t), []), om = (i) => {
  const t = i.segments && i.segments.length && i.segments[i.segments.length - 1];
  return t && t.parts || [];
}, lm = ({ preloadSegment: i }) => {
  if (!i) return;
  const { parts: t, preloadHints: e } = i;
  let s = (e || []).reduce((n, r) => n + (r.type === "PART" ? 1 : 0), 0);
  return s += t && t.length ? t.length : 0, s;
}, hm = (i, t) => {
  if (t.endList) return 0;
  if (i && i.suggestedPresentationDelay) return i.suggestedPresentationDelay;
  const e = om(t).length > 0;
  return e && t.serverControl && t.serverControl.partHoldBack ? t.serverControl.partHoldBack : e && t.partTargetDuration ? 3 * t.partTargetDuration : t.serverControl && t.serverControl.holdBack ? t.serverControl.holdBack : t.targetDuration ? 3 * t.targetDuration : 0;
}, Kb = function(i, t) {
  let e = 0, s = t - i.mediaSequence, n = i.segments[s];
  if (n) {
    if (n.start !== void 0) return { result: n.start, precise: !0 };
    if (n.end !== void 0) return { result: n.end - n.duration, precise: !0 };
  }
  for (; s--; ) {
    if (n = i.segments[s], n.end !== void 0) return { result: e + n.end, precise: !0 };
    if (e += Ml(i, n), n.start !== void 0) return { result: e + n.start, precise: !0 };
  }
  return { result: e, precise: !1 };
}, Yb = function(i, t) {
  let e, s = 0, n = t - i.mediaSequence;
  for (; n < i.segments.length; n++) {
    if (e = i.segments[n], e.start !== void 0) return { result: e.start - s, precise: !0 };
    if (s += Ml(i, e), e.end !== void 0) return { result: e.end - s, precise: !0 };
  }
  return { result: -1, precise: !1 };
}, um = function(i, t, e) {
  if (t === void 0 && (t = i.mediaSequence + i.segments.length), t < i.mediaSequence) return 0;
  const s = Kb(i, t);
  if (s.precise) return s.result;
  const n = Yb(i, t);
  return n.precise ? n.result : s.result + e;
}, dm = function(i, t, e) {
  if (!i) return 0;
  if (typeof e != "number" && (e = 0), t === void 0) {
    if (i.totalDuration) return i.totalDuration;
    if (!i.endList) return E.Infinity;
  }
  return um(i, t, e);
}, sn = function({ defaultDuration: i, durationList: t, startIndex: e, endIndex: s }) {
  let n = 0;
  if (e > s && ([e, s] = [s, e]), e < 0) {
    for (let r = e; r < Math.min(0, s); r++) n += i;
    e = 0;
  }
  for (let r = e; r < s; r++) n += t[r].duration;
  return n;
}, Nd = function(i, t, e, s) {
  if (!i || !i.segments) return null;
  if (i.endList) return dm(i);
  if (t === null) return null;
  t = t || 0;
  let n = um(i, i.mediaSequence + i.segments.length, t);
  return e && (n -= s = typeof s == "number" ? s : hm(null, i)), Math.max(0, n);
}, cm = function(i) {
  return i.excludeUntil && i.excludeUntil > Date.now();
}, Ul = function(i) {
  return i.excludeUntil && i.excludeUntil === 1 / 0;
}, ia = function(i) {
  const t = cm(i);
  return !i.disabled && !t;
}, pm = function(i, t) {
  return t.attributes && t.attributes[i];
}, Qb = function(i, t, e, s = 0) {
  return pm("BANDWIDTH", e) ? (i * e.attributes.BANDWIDTH - 8 * s) / t : NaN;
}, Qo = (i, t) => {
  if (i.playlists.length === 1) return !0;
  const e = t.attributes.BANDWIDTH || Number.MAX_VALUE;
  return i.playlists.filter((s) => !!ia(s) && (s.attributes.BANDWIDTH || 0) < e).length === 0;
}, Bl = (i, t) => !(!i && !t || !i && t || i && !t) && (i === t || !(!i.id || !t.id || i.id !== t.id) || !(!i.resolvedUri || !t.resolvedUri || i.resolvedUri !== t.resolvedUri) || !(!i.uri || !t.uri || i.uri !== t.uri)), Rd = function(i, t) {
  const e = i && i.mediaGroups && i.mediaGroups.AUDIO || {};
  let s = !1;
  for (const n in e) {
    for (const r in e[n]) if (s = t(e[n][r]), s) break;
    if (s) break;
  }
  return !!s;
}, bn = (i) => {
  if (!i || !i.playlists || !i.playlists.length)
    return Rd(i, (t) => t.playlists && t.playlists.length || t.uri);
  for (let t = 0; t < i.playlists.length; t++) {
    const e = i.playlists[t], s = e.attributes && e.attributes.CODECS;
    if (!(s && s.split(",").every((n) => wc(n))) && !Rd(i, (n) => Bl(e, n)))
      return !1;
  }
  return !0;
};
var Yt = { liveEdgeDelay: hm, duration: dm, seekable: function(i, t, e) {
  const s = t || 0;
  let n = Nd(i, t, !0, e);
  return n === null ? Jt() : (n < s && (n = s), Jt(s, n));
}, getMediaInfoForTime: function({ playlist: i, currentTime: t, startingSegmentIndex: e, startingPartIndex: s, startTime: n, exactManifestTimings: r }) {
  let a = t - n;
  const l = Yo(i);
  let u = 0;
  for (let p = 0; p < l.length; p++) {
    const g = l[p];
    if (e === g.segmentIndex && (typeof s != "number" || typeof g.partIndex != "number" || s === g.partIndex)) {
      u = p;
      break;
    }
  }
  if (a < 0) {
    if (u > 0) for (let p = u - 1; p >= 0; p--) {
      const g = l[p];
      if (a += g.duration, r) {
        if (a < 0) continue;
      } else if (a + Ie <= 0) continue;
      return { partIndex: g.partIndex, segmentIndex: g.segmentIndex, startTime: n - sn({ defaultDuration: i.targetDuration, durationList: l, startIndex: u, endIndex: p }) };
    }
    return { partIndex: l[0] && l[0].partIndex || null, segmentIndex: l[0] && l[0].segmentIndex || 0, startTime: t };
  }
  if (u < 0) {
    for (let p = u; p < 0; p++) if (a -= i.targetDuration, a < 0) return { partIndex: l[0] && l[0].partIndex || null, segmentIndex: l[0] && l[0].segmentIndex || 0, startTime: t };
    u = 0;
  }
  for (let p = u; p < l.length; p++) {
    const g = l[p];
    a -= g.duration;
    const y = g.duration > Ie;
    if (a !== 0 && !(y && a + Ie >= 0) || p === l.length - 1) {
      if (r) {
        if (a > 0) continue;
      } else if (a - Ie >= 0) continue;
      return { partIndex: g.partIndex, segmentIndex: g.segmentIndex, startTime: n + sn({ defaultDuration: i.targetDuration, durationList: l, startIndex: u, endIndex: p }) };
    }
  }
  return { segmentIndex: l[l.length - 1].segmentIndex, partIndex: l[l.length - 1].partIndex, startTime: t };
}, isEnabled: ia, isDisabled: function(i) {
  return i.disabled;
}, isExcluded: cm, isIncompatible: Ul, playlistEnd: Nd, isAes: function(i) {
  for (let t = 0; t < i.segments.length; t++) if (i.segments[t].key) return !0;
  return !1;
}, hasAttribute: pm, estimateSegmentRequestTime: Qb, isLowestEnabledRendition: Qo, isAudioOnly: bn, playlistMatch: Bl, segmentDurationWithParts: Ml };
const { log: mm } = D, as = (i, t) => `${i}-${t}`, gm = (i, t, e) => `placeholder-uri-${i}-${t}-${e}`, Jb = ({ onwarn: i, oninfo: t, manifestString: e, customTagParsers: s = [], customTagMappers: n = [], llhls: r }) => {
  const a = new x_();
  i && a.on("warn", i), t && a.on("info", t), s.forEach((p) => a.addParser(p)), n.forEach((p) => a.addTagMapper(p)), a.push(e), a.end();
  const l = a.manifest;
  if (r || (["preloadSegment", "skip", "serverControl", "renditionReports", "partInf", "partTargetDuration"].forEach(function(p) {
    l.hasOwnProperty(p) && delete l[p];
  }), l.segments && l.segments.forEach(function(p) {
    ["parts", "preloadHints"].forEach(function(g) {
      p.hasOwnProperty(g) && delete p[g];
    });
  })), !l.targetDuration) {
    let p = 10;
    l.segments && l.segments.length && (p = l.segments.reduce((g, y) => Math.max(g, y.duration), 0)), i && i({ message: `manifest has no targetDuration defaulting to ${p}` }), l.targetDuration = p;
  }
  const u = om(l);
  if (u.length && !l.partTargetDuration) {
    const p = u.reduce((g, y) => Math.max(g, y.duration), 0);
    i && (i({ message: `manifest has no partTargetDuration defaulting to ${p}` }), mm.error("LL-HLS manifest has parts but lacks required #EXT-X-PART-INF:PART-TARGET value. See https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis-09#section-4.4.3.7. Playback is not guaranteed.")), l.partTargetDuration = p;
  }
  return l;
}, Ss = (i, t) => {
  i.mediaGroups && ["AUDIO", "SUBTITLES"].forEach((e) => {
    if (i.mediaGroups[e]) for (const s in i.mediaGroups[e]) for (const n in i.mediaGroups[e][s]) {
      const r = i.mediaGroups[e][s][n];
      t(r, e, s, n);
    }
  });
}, fm = ({ playlist: i, uri: t, id: e }) => {
  i.id = e, i.playlistErrors_ = 0, t && (i.uri = t), i.attributes = i.attributes || {};
}, Zb = (i) => {
  let t = i.playlists.length;
  for (; t--; ) {
    const e = i.playlists[t];
    fm({ playlist: e, id: as(t, e.uri) }), e.resolvedUri = Kt(i.uri, e.uri), i.playlists[e.id] = e, i.playlists[e.uri] = e, e.attributes.BANDWIDTH || mm.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.");
  }
}, tT = (i) => {
  Ss(i, (t) => {
    t.uri && (t.resolvedUri = Kt(i.uri, t.uri));
  });
}, eT = (i, t) => {
  const e = as(0, t), s = { mediaGroups: { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} }, uri: E.location.href, resolvedUri: E.location.href, playlists: [{ uri: t, id: e, resolvedUri: t, attributes: {} }] };
  return s.playlists[e] = s.playlists[0], s.playlists[t] = s.playlists[0], s;
}, ym = (i, t, e = gm) => {
  i.uri = t;
  for (let n = 0; n < i.playlists.length; n++) if (!i.playlists[n].uri) {
    const r = `placeholder-uri-${n}`;
    i.playlists[n].uri = r;
  }
  const s = bn(i);
  Ss(i, (n, r, a, l) => {
    if (!n.playlists || !n.playlists.length) {
      if (s && r === "AUDIO" && !n.uri) for (let u = 0; u < i.playlists.length; u++) {
        const p = i.playlists[u];
        if (p.attributes && p.attributes.AUDIO && p.attributes.AUDIO === a) return;
      }
      n.playlists = [ve({}, n)];
    }
    n.playlists.forEach(function(u, p) {
      const g = e(r, a, l, u), y = as(p, g);
      u.uri ? u.resolvedUri = u.resolvedUri || Kt(i.uri, u.uri) : (u.uri = p === 0 ? g : y, u.resolvedUri = u.uri), u.id = u.id || y, u.attributes = u.attributes || {}, i.playlists[u.id] = u, i.playlists[u.uri] = u;
    });
  }), Zb(i), tT(i);
};
class Md {
  constructor() {
    this.offset_ = null, this.pendingDateRanges_ = /* @__PURE__ */ new Map(), this.processedDateRanges_ = /* @__PURE__ */ new Map();
  }
  setOffset(t = []) {
    if (this.offset_ !== null || !t.length) return;
    const [e] = t;
    e.programDateTime !== void 0 && (this.offset_ = e.programDateTime / 1e3);
  }
  setPendingDateRanges(t = []) {
    if (!t.length) return;
    const [e] = t, s = e.startDate.getTime();
    this.trimProcessedDateRanges_(s), this.pendingDateRanges_ = t.reduce((n, r) => (n.set(r.id, r), n), /* @__PURE__ */ new Map());
  }
  processDateRange(t) {
    this.pendingDateRanges_.delete(t.id), this.processedDateRanges_.set(t.id, t);
  }
  getDateRangesToProcess() {
    if (this.offset_ === null) return [];
    const t = {}, e = [];
    this.pendingDateRanges_.forEach((s, n) => {
      if (!this.processedDateRanges_.has(n) && (s.startTime = s.startDate.getTime() / 1e3 - this.offset_, s.processDateRange = () => this.processDateRange(s), e.push(s), s.class)) if (t[s.class]) {
        const r = t[s.class].push(s);
        s.classListIndex = r - 1;
      } else t[s.class] = [s], s.classListIndex = 0;
    });
    for (const s of e) {
      const n = t[s.class] || [];
      s.endDate ? s.endTime = s.endDate.getTime() / 1e3 - this.offset_ : s.endOnNext && n[s.classListIndex + 1] ? s.endTime = n[s.classListIndex + 1].startTime : s.duration ? s.endTime = s.startTime + s.duration : s.plannedDuration ? s.endTime = s.startTime + s.plannedDuration : s.endTime = s.startTime;
    }
    return e;
  }
  trimProcessedDateRanges_(t) {
    new Map(this.processedDateRanges_).forEach((e, s) => {
      e.startDate.getTime() < t && this.processedDateRanges_.delete(s);
    });
  }
}
const { EventTarget: iT } = D, sT = (i, t) => {
  if (t.endList || !t.serverControl) return i;
  const e = {};
  if (t.serverControl.canBlockReload) {
    const { preloadSegment: s } = t;
    let n = t.mediaSequence + t.segments.length;
    if (s) {
      const r = s.parts || [], a = lm(t) - 1;
      a > -1 && a !== r.length - 1 && (e._HLS_part = a), (a > -1 || r.length) && n--;
    }
    e._HLS_msn = n;
  }
  if (t.serverControl && t.serverControl.canSkipUntil && (e._HLS_skip = t.serverControl.canSkipDateranges ? "v2" : "YES"), Object.keys(e).length) {
    const s = new E.URL(i);
    ["_HLS_skip", "_HLS_msn", "_HLS_part"].forEach(function(n) {
      e.hasOwnProperty(n) && s.searchParams.set(n, e[n]);
    }), i = s.toString();
  }
  return i;
}, nT = (i, t) => {
  if (!i) return t;
  const e = st(i, t);
  if (i.preloadHints && !t.preloadHints && delete e.preloadHints, i.parts && !t.parts) delete e.parts;
  else if (i.parts && t.parts) for (let s = 0; s < t.parts.length; s++) i.parts && i.parts[s] && (e.parts[s] = st(i.parts[s], t.parts[s]));
  return !i.skipped && t.skipped && (e.skipped = !1), i.preload && !t.preload && (e.preload = !1), e;
}, rT = (i, t, e) => {
  const s = i.slice(), n = t.slice();
  e = e || 0;
  const r = [];
  let a;
  for (let l = 0; l < n.length; l++) {
    const u = s[l + e], p = n[l];
    u ? (a = u.map || a, r.push(nT(u, p))) : (a && !p.map && (p.map = a), r.push(p));
  }
  return r;
}, _m = (i, t) => {
  !i.resolvedUri && i.uri && (i.resolvedUri = Kt(t, i.uri)), i.key && !i.key.resolvedUri && (i.key.resolvedUri = Kt(t, i.key.uri)), i.map && !i.map.resolvedUri && (i.map.resolvedUri = Kt(t, i.map.uri)), i.map && i.map.key && !i.map.key.resolvedUri && (i.map.key.resolvedUri = Kt(t, i.map.key.uri)), i.parts && i.parts.length && i.parts.forEach((e) => {
    e.resolvedUri || (e.resolvedUri = Kt(t, e.uri));
  }), i.preloadHints && i.preloadHints.length && i.preloadHints.forEach((e) => {
    e.resolvedUri || (e.resolvedUri = Kt(t, e.uri));
  });
}, vm = function(i) {
  const t = i.segments || [], e = i.preloadSegment;
  if (e && e.parts && e.parts.length) {
    if (e.preloadHints) {
      for (let s = 0; s < e.preloadHints.length; s++) if (e.preloadHints[s].type === "MAP") return t;
    }
    e.duration = i.targetDuration, e.preload = !0, t.push(e);
  }
  return t;
}, bm = (i, t) => i === t || i.segments && t.segments && i.segments.length === t.segments.length && i.endList === t.endList && i.mediaSequence === t.mediaSequence && i.preloadSegment === t.preloadSegment, Jo = (i, t, e = bm) => {
  const s = st(i, {}), n = s.playlists[t.id];
  if (!n || e(n, t)) return null;
  t.segments = vm(t);
  const r = st(n, t);
  if (r.preloadSegment && !t.preloadSegment && delete r.preloadSegment, n.segments) {
    if (t.skip) {
      t.segments = t.segments || [];
      for (let a = 0; a < t.skip.skippedSegments; a++) t.segments.unshift({ skipped: !0 });
    }
    r.segments = rT(n.segments, t.segments, t.mediaSequence - n.mediaSequence);
  }
  r.segments.forEach((a) => {
    _m(a, r.resolvedUri);
  });
  for (let a = 0; a < s.playlists.length; a++) s.playlists[a].id === t.id && (s.playlists[a] = r);
  return s.playlists[t.id] = r, s.playlists[t.uri] = r, Ss(i, (a, l, u, p) => {
    if (a.playlists) for (let g = 0; g < a.playlists.length; g++) t.id === a.playlists[g].id && (a.playlists[g] = r);
  }), s;
}, Zo = (i, t) => {
  const e = i.segments || [], s = e[e.length - 1], n = s && s.parts && s.parts[s.parts.length - 1], r = n && n.duration || s && s.duration;
  return t && r ? 1e3 * r : 500 * (i.partTargetDuration || i.targetDuration || 10);
};
class Ji extends iT {
  constructor(t, e, s = {}) {
    if (super(), !t) throw new Error("A non-empty playlist URL or object is required");
    this.logger_ = de("PlaylistLoader");
    const { withCredentials: n = !1 } = s;
    this.src = t, this.vhs_ = e, this.withCredentials = n, this.addDateRangesToTextTrack_ = s.addDateRangesToTextTrack;
    const r = e.options_;
    this.customTagParsers = r && r.customTagParsers || [], this.customTagMappers = r && r.customTagMappers || [], this.llhls = r && r.llhls, this.dateRangesStorage_ = new Md(), this.state = "HAVE_NOTHING", this.handleMediaupdatetimeout_ = this.handleMediaupdatetimeout_.bind(this), this.on("mediaupdatetimeout", this.handleMediaupdatetimeout_), this.on("loadedplaylist", this.handleLoadedPlaylist_.bind(this));
  }
  handleLoadedPlaylist_() {
    const t = this.media();
    if (!t) return;
    this.dateRangesStorage_.setOffset(t.segments), this.dateRangesStorage_.setPendingDateRanges(t.dateRanges);
    const e = this.dateRangesStorage_.getDateRangesToProcess();
    e.length && this.addDateRangesToTextTrack_ && this.addDateRangesToTextTrack_(e);
  }
  handleMediaupdatetimeout_() {
    if (this.state !== "HAVE_METADATA") return;
    const t = this.media();
    let e = Kt(this.main.uri, t.uri);
    this.llhls && (e = sT(e, t)), this.state = "HAVE_CURRENT_METADATA", this.request = this.vhs_.xhr({ uri: e, withCredentials: this.withCredentials, requestType: "hls-playlist" }, (s, n) => {
      if (this.request) return s ? this.playlistRequestError(this.request, this.media(), "HAVE_METADATA") : void this.haveMetadata({ playlistString: this.request.responseText, url: this.media().uri, id: this.media().id });
    });
  }
  playlistRequestError(t, e, s) {
    const { uri: n, id: r } = e;
    this.request = null, s && (this.state = s), this.error = { playlist: this.main.playlists[r], status: t.status, message: `HLS playlist request error at URL: ${n}.`, responseText: t.responseText, code: t.status >= 500 ? 4 : 2, metadata: { errorType: D.Error.HlsPlaylistRequestError } }, this.trigger("error");
  }
  parseManifest_({ url: t, manifestString: e }) {
    return Jb({ onwarn: ({ message: s }) => this.logger_(`m3u8-parser warn for ${t}: ${s}`), oninfo: ({ message: s }) => this.logger_(`m3u8-parser info for ${t}: ${s}`), manifestString: e, customTagParsers: this.customTagParsers, customTagMappers: this.customTagMappers, llhls: this.llhls });
  }
  haveMetadata({ playlistString: t, playlistObject: e, url: s, id: n }) {
    this.request = null, this.state = "HAVE_METADATA";
    const r = e || this.parseManifest_({ url: s, manifestString: t });
    r.lastRequest = Date.now(), fm({ playlist: r, uri: s, id: n });
    const a = Jo(this.main, r);
    this.targetDuration = r.partTargetDuration || r.targetDuration, this.pendingMedia_ = null, a ? (this.main = a, this.media_ = this.main.playlists[n]) : this.trigger("playlistunchanged"), this.updateMediaUpdateTimeout_(Zo(this.media(), !!a)), this.trigger("loadedplaylist");
  }
  dispose() {
    this.trigger("dispose"), this.stopRequest(), E.clearTimeout(this.mediaUpdateTimeout), E.clearTimeout(this.finalRenditionTimeout), this.dateRangesStorage_ = new Md(), this.off();
  }
  stopRequest() {
    if (this.request) {
      const t = this.request;
      this.request = null, t.onreadystatechange = null, t.abort();
    }
  }
  media(t, e) {
    if (!t) return this.media_;
    if (this.state === "HAVE_NOTHING") throw new Error("Cannot switch media playlist from " + this.state);
    if (typeof t == "string") {
      if (!this.main.playlists[t]) throw new Error("Unknown playlist URI: " + t);
      t = this.main.playlists[t];
    }
    if (E.clearTimeout(this.finalRenditionTimeout), e) {
      const a = (t.partTargetDuration || t.targetDuration) / 2 * 1e3 || 5e3;
      return void (this.finalRenditionTimeout = E.setTimeout(this.media.bind(this, t, !1), a));
    }
    const s = this.state, n = !this.media_ || t.id !== this.media_.id, r = this.main.playlists[t.id];
    if (r && r.endList || t.endList && t.segments.length) return this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null), this.state = "HAVE_METADATA", this.media_ = t, void (n && (this.trigger("mediachanging"), s === "HAVE_MAIN_MANIFEST" ? this.trigger("loadedmetadata") : this.trigger("mediachange")));
    if (this.updateMediaUpdateTimeout_(Zo(t, !0)), n) {
      if (this.state = "SWITCHING_MEDIA", this.request) {
        if (t.resolvedUri === this.request.url) return;
        this.request.onreadystatechange = null, this.request.abort(), this.request = null;
      }
      this.media_ && this.trigger("mediachanging"), this.pendingMedia_ = t, this.request = this.vhs_.xhr({ uri: t.resolvedUri, withCredentials: this.withCredentials, requestType: "hls-playlist" }, (a, l) => {
        if (this.request) {
          if (t.lastRequest = Date.now(), t.resolvedUri = Or(t.resolvedUri, l), a) return this.playlistRequestError(this.request, t, s);
          this.haveMetadata({ playlistString: l.responseText, url: t.uri, id: t.id }), s === "HAVE_MAIN_MANIFEST" ? this.trigger("loadedmetadata") : this.trigger("mediachange");
        }
      });
    }
  }
  pause() {
    this.mediaUpdateTimeout && (E.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null), this.stopRequest(), this.state === "HAVE_NOTHING" && (this.started = !1), this.state === "SWITCHING_MEDIA" ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MAIN_MANIFEST" : this.state === "HAVE_CURRENT_METADATA" && (this.state = "HAVE_METADATA");
  }
  load(t) {
    this.mediaUpdateTimeout && (E.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null);
    const e = this.media();
    if (t) {
      const s = e ? (e.partTargetDuration || e.targetDuration) / 2 * 1e3 : 5e3;
      this.mediaUpdateTimeout = E.setTimeout(() => {
        this.mediaUpdateTimeout = null, this.load();
      }, s);
    } else this.started ? e && !e.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist") : this.start();
  }
  updateMediaUpdateTimeout_(t) {
    this.mediaUpdateTimeout && (E.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null), this.media() && !this.media().endList && (this.mediaUpdateTimeout = E.setTimeout(() => {
      this.mediaUpdateTimeout = null, this.trigger("mediaupdatetimeout"), this.updateMediaUpdateTimeout_(t);
    }, t));
  }
  start() {
    if (this.started = !0, typeof this.src == "object") return this.src.uri || (this.src.uri = E.location.href), this.src.resolvedUri = this.src.uri, void setTimeout(() => {
      this.setupInitialPlaylist(this.src);
    }, 0);
    this.request = this.vhs_.xhr({ uri: this.src, withCredentials: this.withCredentials, requestType: "hls-playlist" }, (t, e) => {
      if (!this.request) return;
      if (this.request = null, t) return this.error = { status: e.status, message: `HLS playlist request error at URL: ${this.src}.`, responseText: e.responseText, code: 2, metadata: { errorType: D.Error.HlsPlaylistRequestError } }, this.state === "HAVE_NOTHING" && (this.started = !1), this.trigger("error");
      this.src = Or(this.src, e);
      const s = this.parseManifest_({ manifestString: e.responseText, url: this.src });
      this.setupInitialPlaylist(s);
    });
  }
  srcUri() {
    return typeof this.src == "string" ? this.src : this.src.uri;
  }
  setupInitialPlaylist(t) {
    if (this.state = "HAVE_MAIN_MANIFEST", t.playlists) return this.main = t, ym(this.main, this.srcUri()), t.playlists.forEach((s) => {
      s.segments = vm(s), s.segments.forEach((n) => {
        _m(n, s.resolvedUri);
      });
    }), this.trigger("loadedplaylist"), void (this.request || this.media(this.main.playlists[0]));
    const e = this.srcUri() || E.location.href;
    this.main = eT(t, e), this.haveMetadata({ playlistObject: t, url: e, id: this.main.playlists[0].id }), this.trigger("loadedmetadata");
  }
  updateOrDeleteClone(t, e) {
    const s = this.main, n = t.ID;
    let r = s.playlists.length;
    for (; r--; ) {
      const a = s.playlists[r];
      if (a.attributes["PATHWAY-ID"] === n) {
        const l = a.resolvedUri, u = a.id;
        if (e) {
          const p = this.createCloneURI_(a.resolvedUri, t), g = as(n, p), y = this.createCloneAttributes_(n, a.attributes), T = this.createClonePlaylist_(a, g, t, y);
          s.playlists[r] = T, s.playlists[g] = T, s.playlists[p] = T;
        } else s.playlists.splice(r, 1);
        delete s.playlists[u], delete s.playlists[l];
      }
    }
    this.updateOrDeleteCloneMedia(t, e);
  }
  updateOrDeleteCloneMedia(t, e) {
    const s = this.main, n = t.ID;
    ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((r) => {
      if (s.mediaGroups[r] && s.mediaGroups[r][n]) {
        for (const a in s.mediaGroups[r]) if (a === n) {
          for (const l in s.mediaGroups[r][a])
            s.mediaGroups[r][a][l].playlists.forEach((u, p) => {
              const g = s.playlists[u.id], y = g.id, T = g.resolvedUri;
              delete s.playlists[y], delete s.playlists[T];
            });
          delete s.mediaGroups[r][a];
        }
      }
    }), e && this.createClonedMediaGroups_(t);
  }
  addClonePathway(t, e = {}) {
    const s = this.main, n = s.playlists.length, r = this.createCloneURI_(e.resolvedUri, t), a = as(t.ID, r), l = this.createCloneAttributes_(t.ID, e.attributes), u = this.createClonePlaylist_(e, a, t, l);
    s.playlists[n] = u, s.playlists[a] = u, s.playlists[r] = u, this.createClonedMediaGroups_(t);
  }
  createClonedMediaGroups_(t) {
    const e = t.ID, s = t["BASE-ID"], n = this.main;
    ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((r) => {
      if (n.mediaGroups[r] && !n.mediaGroups[r][e]) {
        for (const a in n.mediaGroups[r]) if (a === s) {
          n.mediaGroups[r][e] = {};
          for (const l in n.mediaGroups[r][a]) {
            const u = n.mediaGroups[r][a][l];
            n.mediaGroups[r][e][l] = ve({}, u);
            const p = n.mediaGroups[r][e][l], g = this.createCloneURI_(u.resolvedUri, t);
            p.resolvedUri = g, p.uri = g, p.playlists = [], u.playlists.forEach((y, T) => {
              const C = n.playlists[y.id], _ = gm(r, e, l), k = as(e, _);
              if (C && !n.playlists[k]) {
                const x = this.createClonePlaylist_(C, k, t), A = x.resolvedUri;
                n.playlists[k] = x, n.playlists[A] = x;
              }
              p.playlists[T] = this.createClonePlaylist_(y, k, t);
            });
          }
        }
      }
    });
  }
  createClonePlaylist_(t, e, s, n) {
    const r = this.createCloneURI_(t.resolvedUri, s), a = { resolvedUri: r, uri: r, id: e };
    return t.segments && (a.segments = []), n && (a.attributes = n), st(t, a);
  }
  createCloneURI_(t, e) {
    const s = new URL(t);
    s.hostname = e["URI-REPLACEMENT"].HOST;
    const n = e["URI-REPLACEMENT"].PARAMS;
    for (const r of Object.keys(n)) s.searchParams.set(r, n[r]);
    return s.href;
  }
  createCloneAttributes_(t, e) {
    const s = { "PATHWAY-ID": t };
    return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((n) => {
      e[n] && (s[n] = t);
    }), s;
  }
  getKeyIdSet(t) {
    if (t.contentProtection) {
      const e = /* @__PURE__ */ new Set();
      for (const s in t.contentProtection) {
        const n = t.contentProtection[s].attributes.keyId;
        n && e.add(n.toLowerCase());
      }
      return e;
    }
  }
}
const tl = function(i, t, e, s) {
  const n = i.responseType === "arraybuffer" ? i.response : i.responseText;
  !t && n && (i.responseTime = Date.now(), i.roundTripTime = i.responseTime - i.requestTime, i.bytesReceived = n.byteLength || n.length, i.bandwidth || (i.bandwidth = Math.floor(i.bytesReceived / i.roundTripTime * 8 * 1e3))), e.headers && (i.responseHeaders = e.headers), t && t.code === "ETIMEDOUT" && (i.timedout = !0), t || i.aborted || e.statusCode === 200 || e.statusCode === 206 || e.statusCode === 0 || (t = new Error("XHR Failed with a response of: " + (i && (n || i.responseText)))), s(t, i);
}, aT = (i, t) => {
  if (!i || !i.size) return;
  let e = t;
  return i.forEach((s) => {
    e = s(e);
  }), e;
}, oT = (i, t, e, s) => {
  i && i.size && i.forEach((n) => {
    n(t, e, s);
  });
}, Tm = function() {
  const i = function t(e, s) {
    e = st({ timeout: 45e3 }, e);
    const n = t.beforeRequest || D.Vhs.xhr.beforeRequest, r = t._requestCallbackSet || D.Vhs.xhr._requestCallbackSet || /* @__PURE__ */ new Set(), a = t._responseCallbackSet || D.Vhs.xhr._responseCallbackSet;
    n && typeof n == "function" && (D.log.warn("beforeRequest is deprecated, use onRequest instead."), r.add(n));
    const l = D.Vhs.xhr.original === !0 ? D.xhr : D.Vhs.xhr, u = aT(r, e);
    r.delete(n);
    const p = l(u || e, function(y, T) {
      return oT(a, p, y, T), tl(p, y, T, s);
    }), g = p.abort;
    return p.abort = function() {
      return p.aborted = !0, g.apply(p, arguments);
    }, p.uri = e.uri, p.requestTime = Date.now(), p;
  };
  return i.original = !0, i;
}, lT = function(i) {
  let t;
  const e = i.offset;
  return t = typeof i.offset == "bigint" || typeof i.length == "bigint" ? E.BigInt(i.offset) + E.BigInt(i.length) - E.BigInt(1) : i.offset + i.length - 1, "bytes=" + e + "-" + t;
}, el = function(i) {
  const t = {};
  return i.byterange && (t.Range = lT(i.byterange)), t;
}, hT = function(i, t) {
  return i.start(t) + "-" + i.end(t);
}, uT = function(i, t) {
  const e = i.toString(16);
  return "00".substring(0, 2 - e.length) + e + (t % 2 ? " " : "");
}, dT = function(i) {
  return i >= 32 && i < 126 ? String.fromCharCode(i) : ".";
}, Sm = function(i) {
  const t = {};
  return Object.keys(i).forEach((e) => {
    const s = i[e];
    kc(s) ? t[e] = { bytes: s.buffer, byteOffset: s.byteOffset, byteLength: s.byteLength } : t[e] = s;
  }), t;
}, Nr = function(i) {
  const t = i.byterange || { length: 1 / 0, offset: 0 };
  return [t.length, t.offset, i.resolvedUri].join(",");
}, Em = function(i) {
  return i.resolvedUri;
}, wm = (i) => {
  const t = Array.prototype.slice.call(i), e = 16;
  let s, n, r = "";
  for (let a = 0; a < t.length / e; a++) s = t.slice(a * e, a * e + e).map(uT).join(""), n = t.slice(a * e, a * e + e).map(dT).join(""), r += s + " " + n + `
`;
  return r;
}, cT = ({ bytes: i }) => wm(i), pT = (i) => {
  let t, e = "";
  for (t = 0; t < i.length; t++) e += hT(i, t) + " ";
  return e;
};
var mT = Object.freeze({ __proto__: null, createTransferableMessage: Sm, initSegmentId: Nr, segmentKeyId: Em, hexDump: wm, tagDump: cT, textRanges: pT });
const Cm = 0.25, gT = (i, t) => {
  if (!t.dateTimeObject) return null;
  const e = t.videoTimingInfo.transmuxerPrependedSeconds, s = i - (t.videoTimingInfo.transmuxedPresentationStart + e);
  return new Date(t.dateTimeObject.getTime() + 1e3 * s);
}, fT = (i) => i.transmuxedPresentationEnd - i.transmuxedPresentationStart - i.transmuxerPrependedSeconds, yT = (i, t) => {
  let e;
  try {
    e = new Date(i);
  } catch {
    return null;
  }
  if (!t || !t.segments || t.segments.length === 0) return null;
  let s = t.segments[0];
  if (e < new Date(s.dateTimeObject)) return null;
  for (let l = 0; l < t.segments.length - 1 && (s = t.segments[l], !(e < new Date(t.segments[l + 1].dateTimeObject))); l++)
    ;
  const n = t.segments[t.segments.length - 1], r = n.dateTimeObject, a = n.videoTimingInfo ? fT(n.videoTimingInfo) : n.duration + n.duration * Cm;
  return e > new Date(r.getTime() + 1e3 * a) ? null : (e > new Date(r) && (s = n), { segment: s, estimatedStart: s.videoTimingInfo ? s.videoTimingInfo.transmuxedPresentationStart : Yt.duration(t, t.mediaSequence + t.segments.indexOf(s)), type: s.videoTimingInfo ? "accurate" : "estimate" });
}, _T = (i, t) => {
  if (!t || !t.segments || t.segments.length === 0) return null;
  let e, s = 0;
  for (let r = 0; r < t.segments.length && (e = t.segments[r], s = e.videoTimingInfo ? e.videoTimingInfo.transmuxedPresentationEnd : s + e.duration, !(i <= s)); r++) ;
  const n = t.segments[t.segments.length - 1];
  if (n.videoTimingInfo && n.videoTimingInfo.transmuxedPresentationEnd < i) return null;
  if (i > s) {
    if (i > s + n.duration * Cm) return null;
    e = n;
  }
  return { segment: e, estimatedStart: e.videoTimingInfo ? e.videoTimingInfo.transmuxedPresentationStart : s - e.duration, type: e.videoTimingInfo ? "accurate" : "estimate" };
}, vT = (i, t) => {
  let e, s;
  try {
    e = new Date(i), s = new Date(t);
  } catch {
  }
  const n = e.getTime();
  return (s.getTime() - n) / 1e3;
}, bT = (i) => {
  if (!i.segments || i.segments.length === 0) return !1;
  for (let t = 0; t < i.segments.length; t++)
    if (!i.segments[t].dateTimeObject) return !1;
  return !0;
}, TT = ({ playlist: i, time: t, callback: e }) => {
  if (!e) throw new Error("getProgramTime: callback must be provided");
  if (!i || t === void 0) return e({ message: "getProgramTime: playlist and time must be provided" });
  const s = _T(t, i);
  if (!s) return e({ message: "valid programTime was not found" });
  if (s.type === "estimate") return e({ message: "Accurate programTime could not be determined. Please seek to e.seekTime and try again", seekTime: s.estimatedStart });
  const n = { mediaSeconds: t }, r = gT(t, s.segment);
  return r && (n.programDateTime = r.toISOString()), e(null, n);
}, km = ({ programTime: i, playlist: t, retryCount: e = 2, seekTo: s, pauseAfterSeek: n = !0, tech: r, callback: a }) => {
  if (!a) throw new Error("seekToProgramTime: callback must be provided");
  if (i === void 0 || !t || !s) return a({ message: "seekToProgramTime: programTime, seekTo and playlist must be provided" });
  if (!t.endList && !r.hasStarted_) return a({ message: "player must be playing a live stream to start buffering" });
  if (!bT(t)) return a({ message: "programDateTime tags must be provided in the manifest " + t.resolvedUri });
  const l = yT(i, t);
  if (!l) return a({ message: `${i} was not found in the stream` });
  const u = l.segment, p = vT(u.dateTimeObject, i);
  if (l.type === "estimate") return e === 0 ? a({ message: `${i} is not buffered yet. Try again` }) : (s(l.estimatedStart + p), void r.one("seeked", () => {
    km({ programTime: i, playlist: t, retryCount: e - 1, seekTo: s, pauseAfterSeek: n, tech: r, callback: a });
  }));
  const g = u.start + p, y = () => a(null, r.currentTime());
  r.one("seeked", y), n && r.pause(), s(g);
}, Ud = (i, t) => {
  if (i.readyState === 4) return t();
}, ST = (i, t, e) => {
  let s, n = [], r = !1;
  const a = function(g, y, T, C) {
    return y.abort(), r = !0, e(g, y, T, C);
  }, l = function(g, y) {
    if (r) return;
    if (g) return a(g, y, "", n);
    const T = y.responseText.substring(n && n.byteLength || 0, y.responseText.length);
    if (n = F_(n, xc(T, !0)), s = s || Xs(n), n.length < 10 || s && n.length < s + 2) return Ud(y, () => a(g, y, "", n));
    const C = bl(n);
    return C === "ts" && n.length < 188 || !C && n.length < 376 ? Ud(y, () => a(g, y, "", n)) : a(null, y, C, n);
  }, u = { uri: i, beforeSend(g) {
    g.overrideMimeType("text/plain; charset=x-user-defined"), g.addEventListener("progress", function({ total: y, loaded: T }) {
      return tl(g, null, { statusCode: g.status }, l);
    });
  } }, p = t(u, function(g, y) {
    return tl(p, g, y, l);
  });
  return p;
}, { EventTarget: ET } = D, Bd = function(i, t) {
  if (!bm(i, t) || i.sidx && t.sidx && (i.sidx.offset !== t.sidx.offset || i.sidx.length !== t.sidx.length) || !i.sidx && t.sidx || i.sidx && !t.sidx || i.segments && !t.segments || !i.segments && t.segments) return !1;
  if (!i.segments && !t.segments) return !0;
  for (let e = 0; e < i.segments.length; e++) {
    const s = i.segments[e], n = t.segments[e];
    if (s.uri !== n.uri) return !1;
    if (!s.byterange && !n.byterange) continue;
    const r = s.byterange, a = n.byterange;
    if (r && !a || !r && a || r.offset !== a.offset || r.length !== a.length) return !1;
  }
  return !0;
}, wT = (i, t, e, s) => `placeholder-uri-${i}-${t}-${s.attributes.NAME || e}`, CT = ({ mainXml: i, srcUrl: t, clientOffset: e, sidxMapping: s, previousManifest: n }) => {
  const r = ov(i, { manifestUri: t, clientOffset: e, sidxMapping: s, previousManifest: n });
  return ym(r, t, wT), r;
}, kT = (i, t) => {
  Ss(i, (e, s, n, r) => {
    r in t.mediaGroups[s][n] || delete i.mediaGroups[s][n][r];
  });
}, xT = (i, t, e) => {
  let s = !0, n = st(i, { duration: t.duration, minimumUpdatePeriod: t.minimumUpdatePeriod, timelineStarts: t.timelineStarts });
  for (let r = 0; r < t.playlists.length; r++) {
    const a = t.playlists[r];
    if (a.sidx) {
      const u = Hr(a.sidx);
      e && e[u] && e[u].sidx && yl(a, e[u].sidx, a.sidx.resolvedUri);
    }
    const l = Jo(n, a, Bd);
    l && (n = l, s = !1);
  }
  return Ss(t, (r, a, l, u) => {
    if (r.playlists && r.playlists.length) {
      const p = r.playlists[0].id, g = Jo(n, r.playlists[0], Bd);
      g && (n = g, u in n.mediaGroups[a][l] || (n.mediaGroups[a][l][u] = r), n.mediaGroups[a][l][u].playlists[0] = n.playlists[p], s = !1);
    }
  }), kT(n, t), t.minimumUpdatePeriod !== i.minimumUpdatePeriod && (s = !1), s ? null : n;
}, IT = (i, t) => (!i.map && !t.map || !!(i.map && t.map && i.map.byterange.offset === t.map.byterange.offset && i.map.byterange.length === t.map.byterange.length)) && i.uri === t.uri && i.byterange.offset === t.byterange.offset && i.byterange.length === t.byterange.length, Fd = (i, t) => {
  const e = {};
  for (const s in i) {
    const n = i[s].sidx;
    if (n) {
      const r = Hr(n);
      if (!t[r]) break;
      const a = t[r].sidxInfo;
      IT(a, n) && (e[r] = t[r]);
    }
  }
  return e;
}, AT = (i, t) => {
  let e = Fd(i.playlists, t);
  return Ss(i, (s, n, r, a) => {
    if (s.playlists && s.playlists.length) {
      const l = s.playlists;
      e = st(e, Fd(l, t));
    }
  }), e;
};
class il extends ET {
  constructor(t, e, s = {}, n) {
    super(), this.mainPlaylistLoader_ = n || this, n || (this.isMain_ = !0);
    const { withCredentials: r = !1 } = s;
    if (this.vhs_ = e, this.withCredentials = r, this.addMetadataToTextTrack = s.addMetadataToTextTrack, !t) throw new Error("A non-empty playlist URL or object is required");
    this.on("minimumUpdatePeriod", () => {
      this.refreshXml_();
    }), this.on("mediaupdatetimeout", () => {
      this.refreshMedia_(this.media().id);
    }), this.state = "HAVE_NOTHING", this.loadedPlaylists_ = {}, this.logger_ = de("DashPlaylistLoader"), this.isMain_ ? (this.mainPlaylistLoader_.srcUrl = t, this.mainPlaylistLoader_.sidxMapping_ = {}) : this.childPlaylist_ = t;
  }
  requestErrored_(t, e, s) {
    return !this.request || (this.request = null, t ? (this.error = typeof t != "object" || t instanceof Error ? { status: e.status, message: "DASH request error at URL: " + e.uri, response: e.response, code: 2, metadata: t.metadata } : t, s && (this.state = s), this.trigger("error"), !0) : void 0);
  }
  addSidxSegments_(t, e, s) {
    const n = t.sidx && Hr(t.sidx);
    if (!t.sidx || !n || this.mainPlaylistLoader_.sidxMapping_[n]) return void (this.mediaRequest_ = E.setTimeout(() => s(!1), 0));
    const r = Or(t.sidx.resolvedUri), a = (l, u) => {
      if (this.requestErrored_(l, u, e)) return;
      const p = this.mainPlaylistLoader_.sidxMapping_;
      let g;
      try {
        g = hv(W(u.response).subarray(8));
      } catch (y) {
        return y.metadata = { errorType: D.Error.DashManifestSidxParsingError }, void this.requestErrored_(y, u, e);
      }
      return p[n] = { sidxInfo: t.sidx, sidx: g }, yl(t, g, t.sidx.resolvedUri), s(!0);
    };
    this.request = ST(r, this.vhs_.xhr, (l, u, p, g) => {
      if (l) return a(l, u);
      if (!p || p !== "mp4") {
        const C = p || "unknown";
        return a({ status: u.status, message: `Unsupported ${C} container type for sidx segment at URL: ${r}`, response: "", playlist: t, internal: !0, playlistExclusionDuration: 1 / 0, code: 2, metadata: { errorType: D.Error.UnsupportedSidxContainer, sidxContainer: C } }, u);
      }
      const { offset: y, length: T } = t.sidx.byterange;
      if (g.length >= T + y) return a(l, { response: g.subarray(y, y + T), status: u.status, uri: u.uri });
      this.request = this.vhs_.xhr({ uri: r, responseType: "arraybuffer", headers: el({ byterange: t.sidx.byterange }) }, a);
    });
  }
  dispose() {
    this.trigger("dispose"), this.stopRequest(), this.loadedPlaylists_ = {}, E.clearTimeout(this.minimumUpdatePeriodTimeout_), E.clearTimeout(this.mediaRequest_), E.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null, this.mediaRequest_ = null, this.minimumUpdatePeriodTimeout_ = null, this.mainPlaylistLoader_.createMupOnMedia_ && (this.off("loadedmetadata", this.mainPlaylistLoader_.createMupOnMedia_), this.mainPlaylistLoader_.createMupOnMedia_ = null), this.off();
  }
  hasPendingRequest() {
    return this.request || this.mediaRequest_;
  }
  stopRequest() {
    if (this.request) {
      const t = this.request;
      this.request = null, t.onreadystatechange = null, t.abort();
    }
  }
  media(t) {
    if (!t) return this.media_;
    if (this.state === "HAVE_NOTHING") throw new Error("Cannot switch media playlist from " + this.state);
    const e = this.state;
    if (typeof t == "string") {
      if (!this.mainPlaylistLoader_.main.playlists[t]) throw new Error("Unknown playlist URI: " + t);
      t = this.mainPlaylistLoader_.main.playlists[t];
    }
    const s = !this.media_ || t.id !== this.media_.id;
    if (s && this.loadedPlaylists_[t.id] && this.loadedPlaylists_[t.id].endList) return this.state = "HAVE_METADATA", this.media_ = t, void (s && (this.trigger("mediachanging"), this.trigger("mediachange")));
    s && (this.media_ && this.trigger("mediachanging"), this.addSidxSegments_(t, e, (n) => {
      this.haveMetadata({ startingState: e, playlist: t });
    }));
  }
  haveMetadata({ startingState: t, playlist: e }) {
    this.state = "HAVE_METADATA", this.loadedPlaylists_[e.id] = e, this.mediaRequest_ = null, this.refreshMedia_(e.id), t === "HAVE_MAIN_MANIFEST" ? this.trigger("loadedmetadata") : this.trigger("mediachange");
  }
  pause() {
    this.mainPlaylistLoader_.createMupOnMedia_ && (this.off("loadedmetadata", this.mainPlaylistLoader_.createMupOnMedia_), this.mainPlaylistLoader_.createMupOnMedia_ = null), this.stopRequest(), E.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null, this.isMain_ && (E.clearTimeout(this.mainPlaylistLoader_.minimumUpdatePeriodTimeout_), this.mainPlaylistLoader_.minimumUpdatePeriodTimeout_ = null), this.state === "HAVE_NOTHING" && (this.started = !1);
  }
  load(t) {
    E.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null;
    const e = this.media();
    if (t) {
      const s = e ? e.targetDuration / 2 * 1e3 : 5e3;
      this.mediaUpdateTimeout = E.setTimeout(() => this.load(), s);
    } else this.started ? e && !e.endList ? (this.isMain_ && !this.minimumUpdatePeriodTimeout_ && (this.trigger("minimumUpdatePeriod"), this.updateMinimumUpdatePeriodTimeout_()), this.trigger("mediaupdatetimeout")) : this.trigger("loadedplaylist") : this.start();
  }
  start() {
    this.started = !0, this.isMain_ ? this.requestMain_((t, e) => {
      this.haveMain_(), this.hasPendingRequest() || this.media_ || this.media(this.mainPlaylistLoader_.main.playlists[0]);
    }) : this.mediaRequest_ = E.setTimeout(() => this.haveMain_(), 0);
  }
  requestMain_(t) {
    this.request = this.vhs_.xhr({ uri: this.mainPlaylistLoader_.srcUrl, withCredentials: this.withCredentials, requestType: "dash-manifest" }, (e, s) => {
      if (this.requestErrored_(e, s)) return void (this.state === "HAVE_NOTHING" && (this.started = !1));
      const n = s.responseText !== this.mainPlaylistLoader_.mainXml_;
      return this.mainPlaylistLoader_.mainXml_ = s.responseText, s.responseHeaders && s.responseHeaders.date ? this.mainLoaded_ = Date.parse(s.responseHeaders.date) : this.mainLoaded_ = Date.now(), this.mainPlaylistLoader_.srcUrl = Or(this.mainPlaylistLoader_.srcUrl, s), n ? (this.handleMain_(), void this.syncClientServerClock_(() => t(s, n))) : t(s, n);
    });
  }
  syncClientServerClock_(t) {
    const e = lv(this.mainPlaylistLoader_.mainXml_);
    return e === null ? (this.mainPlaylistLoader_.clientOffset_ = this.mainLoaded_ - Date.now(), t()) : e.method === "DIRECT" ? (this.mainPlaylistLoader_.clientOffset_ = e.value - Date.now(), t()) : void (this.request = this.vhs_.xhr({ uri: Kt(this.mainPlaylistLoader_.srcUrl, e.value), method: e.method, withCredentials: this.withCredentials, requestType: "dash-clock-sync" }, (s, n) => {
      if (!this.request) return;
      if (s) return this.mainPlaylistLoader_.clientOffset_ = this.mainLoaded_ - Date.now(), t();
      let r;
      r = e.method === "HEAD" ? n.responseHeaders && n.responseHeaders.date ? Date.parse(n.responseHeaders.date) : this.mainLoaded_ : Date.parse(n.responseText), this.mainPlaylistLoader_.clientOffset_ = r - Date.now(), t();
    }));
  }
  haveMain_() {
    this.state = "HAVE_MAIN_MANIFEST", this.isMain_ ? this.trigger("loadedplaylist") : this.media_ || this.media(this.childPlaylist_);
  }
  handleMain_() {
    this.mediaRequest_ = null;
    const t = this.mainPlaylistLoader_.main;
    let e = CT({ mainXml: this.mainPlaylistLoader_.mainXml_, srcUrl: this.mainPlaylistLoader_.srcUrl, clientOffset: this.mainPlaylistLoader_.clientOffset_, sidxMapping: this.mainPlaylistLoader_.sidxMapping_, previousManifest: t });
    t && (e = xT(t, e, this.mainPlaylistLoader_.sidxMapping_)), this.mainPlaylistLoader_.main = e || t;
    const s = this.mainPlaylistLoader_.main.locations && this.mainPlaylistLoader_.main.locations[0];
    return s && s !== this.mainPlaylistLoader_.srcUrl && (this.mainPlaylistLoader_.srcUrl = s), (!t || e && e.minimumUpdatePeriod !== t.minimumUpdatePeriod) && this.updateMinimumUpdatePeriodTimeout_(), this.addEventStreamToMetadataTrack_(e), !!e;
  }
  updateMinimumUpdatePeriodTimeout_() {
    const t = this.mainPlaylistLoader_;
    t.createMupOnMedia_ && (t.off("loadedmetadata", t.createMupOnMedia_), t.createMupOnMedia_ = null), t.minimumUpdatePeriodTimeout_ && (E.clearTimeout(t.minimumUpdatePeriodTimeout_), t.minimumUpdatePeriodTimeout_ = null);
    let e = t.main && t.main.minimumUpdatePeriod;
    e === 0 && (t.media() ? e = 1e3 * t.media().targetDuration : (t.createMupOnMedia_ = t.updateMinimumUpdatePeriodTimeout_, t.one("loadedmetadata", t.createMupOnMedia_))), typeof e != "number" || e <= 0 ? e < 0 && this.logger_(`found invalid minimumUpdatePeriod of ${e}, not setting a timeout`) : this.createMUPTimeout_(e);
  }
  createMUPTimeout_(t) {
    const e = this.mainPlaylistLoader_;
    e.minimumUpdatePeriodTimeout_ = E.setTimeout(() => {
      e.minimumUpdatePeriodTimeout_ = null, e.trigger("minimumUpdatePeriod"), e.createMUPTimeout_(t);
    }, t);
  }
  refreshXml_() {
    this.requestMain_((t, e) => {
      e && (this.media_ && (this.media_ = this.mainPlaylistLoader_.main.playlists[this.media_.id]), this.mainPlaylistLoader_.sidxMapping_ = AT(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.sidxMapping_), this.addSidxSegments_(this.media(), this.state, (s) => {
        this.refreshMedia_(this.media().id);
      }));
    });
  }
  refreshMedia_(t) {
    if (!t) throw new Error("refreshMedia_ must take a media id");
    this.media_ && this.isMain_ && this.handleMain_();
    const e = this.mainPlaylistLoader_.main.playlists, s = !this.media_ || this.media_ !== e[t];
    if (s ? this.media_ = e[t] : this.trigger("playlistunchanged"), !this.mediaUpdateTimeout) {
      const n = () => {
        this.media().endList || (this.mediaUpdateTimeout = E.setTimeout(() => {
          this.trigger("mediaupdatetimeout"), n();
        }, Zo(this.media(), !!s)));
      };
      n();
    }
    this.trigger("loadedplaylist");
  }
  addEventStreamToMetadataTrack_(t) {
    if (t && this.mainPlaylistLoader_.main.eventStream) {
      const e = this.mainPlaylistLoader_.main.eventStream.map((s) => ({ cueTime: s.start, frames: [{ data: s.messageData }] }));
      this.addMetadataToTextTrack("EventStream", e, this.mainPlaylistLoader_.main.duration);
    }
  }
  getKeyIdSet(t) {
    if (t.contentProtection) {
      const e = /* @__PURE__ */ new Set();
      for (const s in t.contentProtection) {
        const n = t.contentProtection[s].attributes["cenc:default_KID"];
        n && e.add(n.replace(/-/g, "").toLowerCase());
      }
      return e;
    }
  }
}
var Pt = { GOAL_BUFFER_LENGTH: 30, MAX_GOAL_BUFFER_LENGTH: 60, BACK_BUFFER_LENGTH: 30, GOAL_BUFFER_LENGTH_RATE: 1, INITIAL_BANDWIDTH: 4194304, BANDWIDTH_VARIANCE: 1.2, BUFFER_LOW_WATER_LINE: 0, MAX_BUFFER_LOW_WATER_LINE: 30, EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE: 16, BUFFER_LOW_WATER_LINE_RATE: 1, BUFFER_HIGH_WATER_LINE: 30 };
const PT = (i) => {
  const t = new Uint8Array(new ArrayBuffer(i.length));
  for (let e = 0; e < i.length; e++) t[e] = i.charCodeAt(e);
  return t.buffer;
}, xm = function(i) {
  return i.on = i.addEventListener, i.off = i.removeEventListener, i;
}, DT = function(i) {
  try {
    return URL.createObjectURL(new Blob([i], { type: "application/javascript" }));
  } catch {
    const e = new BlobBuilder();
    return e.append(i), URL.createObjectURL(e.getBlob());
  }
}, Im = function(i) {
  return function() {
    const t = DT(i), e = xm(new Worker(t));
    e.objURL = t;
    const s = e.terminate;
    return e.on = e.addEventListener, e.off = e.removeEventListener, e.terminate = function() {
      return URL.revokeObjectURL(t), s.call(this);
    }, e;
  };
}, Am = function(i) {
  return `var browserWorkerPolyFill = ${xm.toString()};
browserWorkerPolyFill(self);
` + i;
}, Pm = function(i) {
  return i.toString().replace(/^function.+?{/, "").slice(0, -1);
}, LT = Am(Pm(function() {
  var i = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = function() {
    this.init = function() {
      var o = {};
      this.on = function(h, c) {
        o[h] || (o[h] = []), o[h] = o[h].concat(c);
      }, this.off = function(h, c) {
        var d;
        return !!o[h] && (d = o[h].indexOf(c), o[h] = o[h].slice(), o[h].splice(d, 1), d > -1);
      }, this.trigger = function(h) {
        var c, d, m, f;
        if (c = o[h]) if (arguments.length === 2) for (m = c.length, d = 0; d < m; ++d) c[d].call(this, arguments[1]);
        else {
          for (f = [], d = arguments.length, d = 1; d < arguments.length; ++d) f.push(arguments[d]);
          for (m = c.length, d = 0; d < m; ++d) c[d].apply(this, f);
        }
      }, this.dispose = function() {
        o = {};
      };
    };
  };
  t.prototype.pipe = function(o) {
    return this.on("data", function(h) {
      o.push(h);
    }), this.on("done", function(h) {
      o.flush(h);
    }), this.on("partialdone", function(h) {
      o.partialFlush(h);
    }), this.on("endedtimeline", function(h) {
      o.endTimeline(h);
    }), this.on("reset", function(h) {
      o.reset(h);
    }), o;
  }, t.prototype.push = function(o) {
    this.trigger("data", o);
  }, t.prototype.flush = function(o) {
    this.trigger("done", o);
  }, t.prototype.partialFlush = function(o) {
    this.trigger("partialdone", o);
  }, t.prototype.endTimeline = function(o) {
    this.trigger("endedtimeline", o);
  }, t.prototype.reset = function(o) {
    this.trigger("reset", o);
  };
  var e, s, n, r, a, l, u, p, g, y, T, C, _, k, x, A, I, O, N, P, j, V, bt, Z, Tt, ot, St, et, Zt, it, wt, ce, ci, pi, mi, gi, jl, $l, Hl, sa, Ye = t, Vl = Math.pow(2, 32), Tn = { getUint64: function(o) {
    var h, c = new DataView(o.buffer, o.byteOffset, o.byteLength);
    return c.getBigUint64 ? (h = c.getBigUint64(0)) < Number.MAX_SAFE_INTEGER ? Number(h) : h : c.getUint32(0) * Vl + c.getUint32(4);
  }, MAX_UINT32: Vl }, zl = Tn.MAX_UINT32;
  (function() {
    var o;
    if (V = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], mvex: [], mvhd: [], pasp: [], sdtp: [], smhd: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], styp: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [] }, typeof Uint8Array < "u") {
      for (o in V) V.hasOwnProperty(o) && (V[o] = [o.charCodeAt(0), o.charCodeAt(1), o.charCodeAt(2), o.charCodeAt(3)]);
      bt = new Uint8Array([105, 115, 111, 109]), Tt = new Uint8Array([97, 118, 99, 49]), Z = new Uint8Array([0, 0, 0, 1]), ot = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), St = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), et = { video: ot, audio: St }, wt = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), it = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), ce = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), ci = ce, pi = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), mi = ce, Zt = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
  })(), e = function(o) {
    var h, c, d = [], m = 0;
    for (h = 1; h < arguments.length; h++) d.push(arguments[h]);
    for (h = d.length; h--; ) m += d[h].byteLength;
    for (c = new Uint8Array(m + 8), new DataView(c.buffer, c.byteOffset, c.byteLength).setUint32(0, c.byteLength), c.set(o, 4), h = 0, m = 8; h < d.length; h++) c.set(d[h], m), m += d[h].byteLength;
    return c;
  }, s = function() {
    return e(V.dinf, e(V.dref, wt));
  }, n = function(o) {
    return e(V.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, o.audioobjecttype << 3 | o.samplingfrequencyindex >>> 1, o.samplingfrequencyindex << 7 | o.channelcount << 3, 6, 1, 2]));
  }, x = function(o) {
    return e(V.hdlr, et[o]);
  }, k = function(o) {
    var h = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, o.duration >>> 24 & 255, o.duration >>> 16 & 255, o.duration >>> 8 & 255, 255 & o.duration, 85, 196, 0, 0]);
    return o.samplerate && (h[12] = o.samplerate >>> 24 & 255, h[13] = o.samplerate >>> 16 & 255, h[14] = o.samplerate >>> 8 & 255, h[15] = 255 & o.samplerate), e(V.mdhd, h);
  }, _ = function(o) {
    return e(V.mdia, k(o), x(o.type), l(o));
  }, a = function(o) {
    return e(V.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & o) >> 24, (16711680 & o) >> 16, (65280 & o) >> 8, 255 & o]));
  }, l = function(o) {
    return e(V.minf, o.type === "video" ? e(V.vmhd, Zt) : e(V.smhd, it), s(), I(o));
  }, u = function(o, h) {
    for (var c = [], d = h.length; d--; ) c[d] = N(h[d]);
    return e.apply(null, [V.moof, a(o)].concat(c));
  }, p = function(o) {
    for (var h = o.length, c = []; h--; ) c[h] = T(o[h]);
    return e.apply(null, [V.moov, y(4294967295)].concat(c).concat(g(o)));
  }, g = function(o) {
    for (var h = o.length, c = []; h--; ) c[h] = P(o[h]);
    return e.apply(null, [V.mvex].concat(c));
  }, y = function(o) {
    var h = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & o) >> 24, (16711680 & o) >> 16, (65280 & o) >> 8, 255 & o, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
    return e(V.mvhd, h);
  }, A = function(o) {
    var h, c, d = o.samples || [], m = new Uint8Array(4 + d.length);
    for (c = 0; c < d.length; c++) h = d[c].flags, m[c + 4] = h.dependsOn << 4 | h.isDependedOn << 2 | h.hasRedundancy;
    return e(V.sdtp, m);
  }, I = function(o) {
    return e(V.stbl, O(o), e(V.stts, mi), e(V.stsc, ci), e(V.stsz, pi), e(V.stco, ce));
  }, O = function(o) {
    return e(V.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), o.type === "video" ? gi(o) : jl(o));
  }, gi = function(o) {
    var h, c, d = o.sps || [], m = o.pps || [], f = [], v = [];
    for (h = 0; h < d.length; h++) f.push((65280 & d[h].byteLength) >>> 8), f.push(255 & d[h].byteLength), f = f.concat(Array.prototype.slice.call(d[h]));
    for (h = 0; h < m.length; h++) v.push((65280 & m[h].byteLength) >>> 8), v.push(255 & m[h].byteLength), v = v.concat(Array.prototype.slice.call(m[h]));
    if (c = [V.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & o.width) >> 8, 255 & o.width, (65280 & o.height) >> 8, 255 & o.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), e(V.avcC, new Uint8Array([1, o.profileIdc, o.profileCompatibility, o.levelIdc, 255].concat([d.length], f, [m.length], v))), e(V.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192]))], o.sarRatio) {
      var S = o.sarRatio[0], b = o.sarRatio[1];
      c.push(e(V.pasp, new Uint8Array([(4278190080 & S) >> 24, (16711680 & S) >> 16, (65280 & S) >> 8, 255 & S, (4278190080 & b) >> 24, (16711680 & b) >> 16, (65280 & b) >> 8, 255 & b])));
    }
    return e.apply(null, c);
  }, jl = function(o) {
    return e(V.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & o.channelcount) >> 8, 255 & o.channelcount, (65280 & o.samplesize) >> 8, 255 & o.samplesize, 0, 0, 0, 0, (65280 & o.samplerate) >> 8, 255 & o.samplerate, 0, 0]), n(o));
  }, C = function(o) {
    var h = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & o.id) >> 24, (16711680 & o.id) >> 16, (65280 & o.id) >> 8, 255 & o.id, 0, 0, 0, 0, (4278190080 & o.duration) >> 24, (16711680 & o.duration) >> 16, (65280 & o.duration) >> 8, 255 & o.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & o.width) >> 8, 255 & o.width, 0, 0, (65280 & o.height) >> 8, 255 & o.height, 0, 0]);
    return e(V.tkhd, h);
  }, N = function(o) {
    var h, c, d, m, f, v, S;
    return h = e(V.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & o.id) >> 24, (16711680 & o.id) >> 16, (65280 & o.id) >> 8, 255 & o.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), v = Math.floor(o.baseMediaDecodeTime / zl), S = Math.floor(o.baseMediaDecodeTime % zl), c = e(V.tfdt, new Uint8Array([1, 0, 0, 0, v >>> 24 & 255, v >>> 16 & 255, v >>> 8 & 255, 255 & v, S >>> 24 & 255, S >>> 16 & 255, S >>> 8 & 255, 255 & S])), f = 92, o.type === "audio" ? (d = j(o, f), e(V.traf, h, c, d)) : (m = A(o), d = j(o, m.length + f), e(V.traf, h, c, d, m));
  }, T = function(o) {
    return o.duration = o.duration || 4294967295, e(V.trak, C(o), _(o));
  }, P = function(o) {
    var h = new Uint8Array([0, 0, 0, 0, (4278190080 & o.id) >> 24, (16711680 & o.id) >> 16, (65280 & o.id) >> 8, 255 & o.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
    return o.type !== "video" && (h[h.length - 1] = 0), e(V.trex, h);
  }, sa = function(o, h) {
    var c = 0, d = 0, m = 0, f = 0;
    return o.length && (o[0].duration !== void 0 && (c = 1), o[0].size !== void 0 && (d = 2), o[0].flags !== void 0 && (m = 4), o[0].compositionTimeOffset !== void 0 && (f = 8)), [0, 0, c | d | m | f, 1, (4278190080 & o.length) >>> 24, (16711680 & o.length) >>> 16, (65280 & o.length) >>> 8, 255 & o.length, (4278190080 & h) >>> 24, (16711680 & h) >>> 16, (65280 & h) >>> 8, 255 & h];
  }, Hl = function(o, h) {
    var c, d, m, f, v, S;
    for (h += 20 + 16 * (f = o.samples || []).length, m = sa(f, h), (d = new Uint8Array(m.length + 16 * f.length)).set(m), c = m.length, S = 0; S < f.length; S++) v = f[S], d[c++] = (4278190080 & v.duration) >>> 24, d[c++] = (16711680 & v.duration) >>> 16, d[c++] = (65280 & v.duration) >>> 8, d[c++] = 255 & v.duration, d[c++] = (4278190080 & v.size) >>> 24, d[c++] = (16711680 & v.size) >>> 16, d[c++] = (65280 & v.size) >>> 8, d[c++] = 255 & v.size, d[c++] = v.flags.isLeading << 2 | v.flags.dependsOn, d[c++] = v.flags.isDependedOn << 6 | v.flags.hasRedundancy << 4 | v.flags.paddingValue << 1 | v.flags.isNonSyncSample, d[c++] = 61440 & v.flags.degradationPriority, d[c++] = 15 & v.flags.degradationPriority, d[c++] = (4278190080 & v.compositionTimeOffset) >>> 24, d[c++] = (16711680 & v.compositionTimeOffset) >>> 16, d[c++] = (65280 & v.compositionTimeOffset) >>> 8, d[c++] = 255 & v.compositionTimeOffset;
    return e(V.trun, d);
  }, $l = function(o, h) {
    var c, d, m, f, v, S;
    for (h += 20 + 8 * (f = o.samples || []).length, m = sa(f, h), (c = new Uint8Array(m.length + 8 * f.length)).set(m), d = m.length, S = 0; S < f.length; S++) v = f[S], c[d++] = (4278190080 & v.duration) >>> 24, c[d++] = (16711680 & v.duration) >>> 16, c[d++] = (65280 & v.duration) >>> 8, c[d++] = 255 & v.duration, c[d++] = (4278190080 & v.size) >>> 24, c[d++] = (16711680 & v.size) >>> 16, c[d++] = (65280 & v.size) >>> 8, c[d++] = 255 & v.size;
    return e(V.trun, c);
  }, j = function(o, h) {
    return o.type === "audio" ? $l(o, h) : Hl(o, h);
  };
  var na, Wl, Gl, ra, Xl, Kl, Yl, Ql, ig = { ftyp: r = function() {
    return e(V.ftyp, bt, Z, bt, Tt);
  }, mdat: function(o) {
    return e(V.mdat, o);
  }, moof: u, moov: p, initSegment: function(o) {
    var h, c = r(), d = p(o);
    return (h = new Uint8Array(c.byteLength + d.byteLength)).set(c), h.set(d, c.byteLength), h;
  } }, sg = function() {
    return { size: 0, flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0, degradationPriority: 0, isNonSyncSample: 1 } };
  }, Jl = function(o, h) {
    var c = sg();
    return c.dataOffset = h, c.compositionTimeOffset = o.pts - o.dts, c.duration = o.duration, c.size = 4 * o.length, c.size += o.byteLength, o.keyFrame && (c.flags.dependsOn = 2, c.flags.isNonSyncSample = 0), c;
  }, ng = { groupNalsIntoFrames: function(o) {
    var h, c, d = [], m = [];
    for (m.byteLength = 0, m.nalCount = 0, m.duration = 0, d.byteLength = 0, h = 0; h < o.length; h++) (c = o[h]).nalUnitType === "access_unit_delimiter_rbsp" ? (d.length && (d.duration = c.dts - d.dts, m.byteLength += d.byteLength, m.nalCount += d.length, m.duration += d.duration, m.push(d)), (d = [c]).byteLength = c.data.byteLength, d.pts = c.pts, d.dts = c.dts) : (c.nalUnitType === "slice_layer_without_partitioning_rbsp_idr" && (d.keyFrame = !0), d.duration = c.dts - d.dts, d.byteLength += c.data.byteLength, d.push(c));
    return m.length && (!d.duration || d.duration <= 0) && (d.duration = m[m.length - 1].duration), m.byteLength += d.byteLength, m.nalCount += d.length, m.duration += d.duration, m.push(d), m;
  }, groupFramesIntoGops: function(o) {
    var h, c, d = [], m = [];
    for (d.byteLength = 0, d.nalCount = 0, d.duration = 0, d.pts = o[0].pts, d.dts = o[0].dts, m.byteLength = 0, m.nalCount = 0, m.duration = 0, m.pts = o[0].pts, m.dts = o[0].dts, h = 0; h < o.length; h++) (c = o[h]).keyFrame ? (d.length && (m.push(d), m.byteLength += d.byteLength, m.nalCount += d.nalCount, m.duration += d.duration), (d = [c]).nalCount = c.length, d.byteLength = c.byteLength, d.pts = c.pts, d.dts = c.dts, d.duration = c.duration) : (d.duration += c.duration, d.nalCount += c.length, d.byteLength += c.byteLength, d.push(c));
    return m.length && d.duration <= 0 && (d.duration = m[m.length - 1].duration), m.byteLength += d.byteLength, m.nalCount += d.nalCount, m.duration += d.duration, m.push(d), m;
  }, extendFirstKeyFrame: function(o) {
    var h;
    return !o[0][0].keyFrame && o.length > 1 && (h = o.shift(), o.byteLength -= h.byteLength, o.nalCount -= h.nalCount, o[0][0].dts = h.dts, o[0][0].pts = h.pts, o[0][0].duration += h.duration), o;
  }, generateSampleTable: function(o, h) {
    var c, d, m, f, v, S = h || 0, b = [];
    for (c = 0; c < o.length; c++) for (f = o[c], d = 0; d < f.length; d++) v = f[d], S += (m = Jl(v, S)).size, b.push(m);
    return b;
  }, concatenateNalData: function(o) {
    var h, c, d, m, f, v, S = 0, b = o.byteLength, w = o.nalCount, L = new Uint8Array(b + 4 * w), M = new DataView(L.buffer);
    for (h = 0; h < o.length; h++) for (m = o[h], c = 0; c < m.length; c++) for (f = m[c], d = 0; d < f.length; d++) v = f[d], M.setUint32(S, v.data.byteLength), S += 4, L.set(v.data, S), S += v.data.byteLength;
    return L;
  }, generateSampleTableForFrame: function(o, h) {
    var c, d = [];
    return c = Jl(o, h || 0), d.push(c), d;
  }, concatenateNalDataForFrame: function(o) {
    var h, c, d = 0, m = o.byteLength, f = o.length, v = new Uint8Array(m + 4 * f), S = new DataView(v.buffer);
    for (h = 0; h < o.length; h++) c = o[h], S.setUint32(d, c.data.byteLength), d += 4, v.set(c.data, d), d += c.data.byteLength;
    return v;
  } }, Qe = [33, 16, 5, 32, 164, 27], aa = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252], nt = function(o) {
    for (var h = []; o--; ) h.push(0);
    return h;
  }, rg = function(o) {
    return Object.keys(o).reduce(function(h, c) {
      return h[c] = new Uint8Array(o[c].reduce(function(d, m) {
        return d.concat(m);
      }, [])), h;
    }, {});
  }, ag = function() {
    if (!na) {
      var o = { 96e3: [Qe, [227, 64], nt(154), [56]], 88200: [Qe, [231], nt(170), [56]], 64e3: [Qe, [248, 192], nt(240), [56]], 48e3: [Qe, [255, 192], nt(268), [55, 148, 128], nt(54), [112]], 44100: [Qe, [255, 192], nt(268), [55, 163, 128], nt(84), [112]], 32e3: [Qe, [255, 192], nt(268), [55, 234], nt(226), [112]], 24e3: [Qe, [255, 192], nt(268), [55, 255, 128], nt(268), [111, 112], nt(126), [224]], 16e3: [Qe, [255, 192], nt(268), [55, 255, 128], nt(268), [111, 255], nt(269), [223, 108], nt(195), [1, 192]], 12e3: [aa, nt(268), [3, 127, 248], nt(268), [6, 255, 240], nt(268), [13, 255, 224], nt(268), [27, 253, 128], nt(259), [56]], 11025: [aa, nt(268), [3, 127, 248], nt(268), [6, 255, 240], nt(268), [13, 255, 224], nt(268), [27, 255, 192], nt(268), [55, 175, 128], nt(108), [112]], 8e3: [aa, nt(268), [3, 121, 16], nt(47), [7]] };
      na = rg(o);
    }
    return na;
  }, oa = 9e4;
  Kl = function(o, h) {
    return Wl(Xl(o, h));
  }, Yl = function(o, h) {
    return Gl(ra(o), h);
  }, Ql = function(o, h, c) {
    return ra(c ? o : o - h);
  };
  var dt = { ONE_SECOND_IN_TS: oa, secondsToVideoTs: Wl = function(o) {
    return o * oa;
  }, secondsToAudioTs: Gl = function(o, h) {
    return o * h;
  }, videoTsToSeconds: ra = function(o) {
    return o / oa;
  }, audioTsToSeconds: Xl = function(o, h) {
    return o / h;
  }, audioTsToVideoTs: Kl, videoTsToAudioTs: Yl, metadataTsToSeconds: Ql }, og = ag, Sn = dt, lg = function(o) {
    var h, c = 0;
    for (h = 0; h < o.length; h++) c += o[h].data.byteLength;
    return c;
  }, hg = { prefixWithSilence: function(o, h, c, d) {
    var m, f, v, S, b = 0, w = 0, L = 0, M = 0;
    if (h.length && (m = Sn.audioTsToVideoTs(o.baseMediaDecodeTime, o.samplerate), b = Math.ceil(Sn.ONE_SECOND_IN_TS / (o.samplerate / 1024)), c && d && (w = m - Math.max(c, d), M = (L = Math.floor(w / b)) * b), !(L < 1 || M > Sn.ONE_SECOND_IN_TS / 2))) {
      for ((f = og()[o.samplerate]) || (f = h[0].data), v = 0; v < L; v++) S = h[0], h.splice(0, 0, { data: f, dts: S.dts - b, pts: S.pts - b });
      return o.baseMediaDecodeTime -= Math.floor(Sn.videoTsToAudioTs(M, o.samplerate)), M;
    }
  }, trimAdtsFramesByEarliestDts: function(o, h, c) {
    return h.minSegmentDts >= c ? o : (h.minSegmentDts = 1 / 0, o.filter(function(d) {
      return d.dts >= c && (h.minSegmentDts = Math.min(h.minSegmentDts, d.dts), h.minSegmentPts = h.minSegmentDts, !0);
    }));
  }, generateSampleTable: function(o) {
    var h, c, d = [];
    for (h = 0; h < o.length; h++) c = o[h], d.push({ size: c.data.byteLength, duration: 1024 });
    return d;
  }, concatenateFrameData: function(o) {
    var h, c, d = 0, m = new Uint8Array(lg(o));
    for (h = 0; h < o.length; h++) c = o[h], m.set(c.data, d), d += c.data.byteLength;
    return m;
  } }, ug = dt.ONE_SECOND_IN_TS, dg = { clearDtsInfo: function(o) {
    delete o.minSegmentDts, delete o.maxSegmentDts, delete o.minSegmentPts, delete o.maxSegmentPts;
  }, calculateTrackBaseMediaDecodeTime: function(o, h) {
    var c, d = o.minSegmentDts;
    return h || (d -= o.timelineStartInfo.dts), c = o.timelineStartInfo.baseMediaDecodeTime, c += d, c = Math.max(0, c), o.type === "audio" && (c *= o.samplerate / ug, c = Math.floor(c)), c;
  }, collectDtsInfo: function(o, h) {
    typeof h.pts == "number" && (o.timelineStartInfo.pts === void 0 && (o.timelineStartInfo.pts = h.pts), o.minSegmentPts === void 0 ? o.minSegmentPts = h.pts : o.minSegmentPts = Math.min(o.minSegmentPts, h.pts), o.maxSegmentPts === void 0 ? o.maxSegmentPts = h.pts : o.maxSegmentPts = Math.max(o.maxSegmentPts, h.pts)), typeof h.dts == "number" && (o.timelineStartInfo.dts === void 0 && (o.timelineStartInfo.dts = h.dts), o.minSegmentDts === void 0 ? o.minSegmentDts = h.dts : o.minSegmentDts = Math.min(o.minSegmentDts, h.dts), o.maxSegmentDts === void 0 ? o.maxSegmentDts = h.dts : o.maxSegmentDts = Math.max(o.maxSegmentDts, h.dts));
  } }, Zl = 4, cg = 128, th = { parseSei: function(o) {
    for (var h = 0, c = { payloadType: -1, payloadSize: 0 }, d = 0, m = 0; h < o.byteLength && o[h] !== cg; ) {
      for (; o[h] === 255; ) d += 255, h++;
      for (d += o[h++]; o[h] === 255; ) m += 255, h++;
      if (m += o[h++], !c.payload && d === Zl) {
        if (String.fromCharCode(o[h + 3], o[h + 4], o[h + 5], o[h + 6]) === "GA94") {
          c.payloadType = d, c.payloadSize = m, c.payload = o.subarray(h, h + m);
          break;
        }
        c.payload = void 0;
      }
      h += m, d = 0, m = 0;
    }
    return c;
  }, parseUserData: function(o) {
    return o.payload[0] !== 181 || (o.payload[1] << 8 | o.payload[2]) != 49 || String.fromCharCode(o.payload[3], o.payload[4], o.payload[5], o.payload[6]) !== "GA94" || o.payload[7] !== 3 ? null : o.payload.subarray(8, o.payload.length - 1);
  }, parseCaptionPackets: function(o, h) {
    var c, d, m, f, v = [];
    if (!(64 & h[0])) return v;
    for (d = 31 & h[0], c = 0; c < d; c++) f = { type: 3 & h[(m = 3 * c) + 2], pts: o }, 4 & h[m + 2] && (f.ccData = h[m + 3] << 8 | h[m + 4], v.push(f));
    return v;
  }, discardEmulationPreventionBytes: function(o) {
    for (var h, c, d = o.byteLength, m = [], f = 1; f < d - 2; ) o[f] === 0 && o[f + 1] === 0 && o[f + 2] === 3 ? (m.push(f + 2), f += 2) : f++;
    if (m.length === 0) return o;
    h = d - m.length, c = new Uint8Array(h);
    var v = 0;
    for (f = 0; f < h; v++, f++) v === m[0] && (v++, m.shift()), c[f] = o[v];
    return c;
  }, USER_DATA_REGISTERED_ITU_T_T35: Zl }, la = Ye, En = th, Ht = function(o) {
    o = o || {}, Ht.prototype.init.call(this), this.parse708captions_ = typeof o.parse708captions != "boolean" || o.parse708captions, this.captionPackets_ = [], this.ccStreams_ = [new mt(0, 0), new mt(0, 1), new mt(1, 0), new mt(1, 1)], this.parse708captions_ && (this.cc708Stream_ = new lt({ captionServices: o.captionServices })), this.reset(), this.ccStreams_.forEach(function(h) {
      h.on("data", this.trigger.bind(this, "data")), h.on("partialdone", this.trigger.bind(this, "partialdone")), h.on("done", this.trigger.bind(this, "done"));
    }, this), this.parse708captions_ && (this.cc708Stream_.on("data", this.trigger.bind(this, "data")), this.cc708Stream_.on("partialdone", this.trigger.bind(this, "partialdone")), this.cc708Stream_.on("done", this.trigger.bind(this, "done")));
  };
  Ht.prototype = new la(), Ht.prototype.push = function(o) {
    var h, c, d;
    if (o.nalUnitType === "sei_rbsp" && (h = En.parseSei(o.escapedRBSP)).payload && h.payloadType === En.USER_DATA_REGISTERED_ITU_T_T35 && (c = En.parseUserData(h))) if (o.dts < this.latestDts_) this.ignoreNextEqualDts_ = !0;
    else {
      if (o.dts === this.latestDts_ && this.ignoreNextEqualDts_) return this.numSameDts_--, void (this.numSameDts_ || (this.ignoreNextEqualDts_ = !1));
      d = En.parseCaptionPackets(o.pts, c), this.captionPackets_ = this.captionPackets_.concat(d), this.latestDts_ !== o.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = o.dts;
    }
  }, Ht.prototype.flushCCStreams = function(o) {
    this.ccStreams_.forEach(function(h) {
      return o === "flush" ? h.flush() : h.partialFlush();
    }, this);
  }, Ht.prototype.flushStream = function(o) {
    this.captionPackets_.length ? (this.captionPackets_.forEach(function(h, c) {
      h.presortIndex = c;
    }), this.captionPackets_.sort(function(h, c) {
      return h.pts === c.pts ? h.presortIndex - c.presortIndex : h.pts - c.pts;
    }), this.captionPackets_.forEach(function(h) {
      h.type < 2 ? this.dispatchCea608Packet(h) : this.dispatchCea708Packet(h);
    }, this), this.captionPackets_.length = 0, this.flushCCStreams(o)) : this.flushCCStreams(o);
  }, Ht.prototype.flush = function() {
    return this.flushStream("flush");
  }, Ht.prototype.partialFlush = function() {
    return this.flushStream("partialFlush");
  }, Ht.prototype.reset = function() {
    this.latestDts_ = null, this.ignoreNextEqualDts_ = !1, this.numSameDts_ = 0, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach(function(o) {
      o.reset();
    });
  }, Ht.prototype.dispatchCea608Packet = function(o) {
    this.setsTextOrXDSActive(o) ? this.activeCea608Channel_[o.type] = null : this.setsChannel1Active(o) ? this.activeCea608Channel_[o.type] = 0 : this.setsChannel2Active(o) && (this.activeCea608Channel_[o.type] = 1), this.activeCea608Channel_[o.type] !== null && this.ccStreams_[(o.type << 1) + this.activeCea608Channel_[o.type]].push(o);
  }, Ht.prototype.setsChannel1Active = function(o) {
    return (30720 & o.ccData) == 4096;
  }, Ht.prototype.setsChannel2Active = function(o) {
    return (30720 & o.ccData) == 6144;
  }, Ht.prototype.setsTextOrXDSActive = function(o) {
    return (28928 & o.ccData) == 256 || (30974 & o.ccData) == 4138 || (30974 & o.ccData) == 6186;
  }, Ht.prototype.dispatchCea708Packet = function(o) {
    this.parse708captions_ && this.cc708Stream_.push(o);
  };
  var pg = { 127: 9834, 4128: 32, 4129: 160, 4133: 8230, 4138: 352, 4140: 338, 4144: 9608, 4145: 8216, 4146: 8217, 4147: 8220, 4148: 8221, 4149: 8226, 4153: 8482, 4154: 353, 4156: 339, 4157: 8480, 4159: 376, 4214: 8539, 4215: 8540, 4216: 8541, 4217: 8542, 4218: 9168, 4219: 9124, 4220: 9123, 4221: 9135, 4222: 9126, 4223: 9121, 4256: 12600 }, mg = function(o) {
    var h = pg[o] || o;
    return 4096 & o && o === h ? "" : String.fromCharCode(h);
  }, wn = function(o) {
    return 32 <= o && o <= 127 || 160 <= o && o <= 255;
  }, Be = function(o) {
    this.windowNum = o, this.reset();
  };
  Be.prototype.reset = function() {
    this.clearText(), this.pendingNewLine = !1, this.winAttr = {}, this.penAttr = {}, this.penLoc = {}, this.penColor = {}, this.visible = 0, this.rowLock = 0, this.columnLock = 0, this.priority = 0, this.relativePositioning = 0, this.anchorVertical = 0, this.anchorHorizontal = 0, this.anchorPoint = 0, this.rowCount = 1, this.virtualRowCount = this.rowCount + 1, this.columnCount = 41, this.windowStyle = 0, this.penStyle = 0;
  }, Be.prototype.getText = function() {
    return this.rows.join(`
`);
  }, Be.prototype.clearText = function() {
    this.rows = [""], this.rowIdx = 0;
  }, Be.prototype.newLine = function(o) {
    for (this.rows.length >= this.virtualRowCount && typeof this.beforeRowOverflow == "function" && this.beforeRowOverflow(o), this.rows.length > 0 && (this.rows.push(""), this.rowIdx++); this.rows.length > this.virtualRowCount; ) this.rows.shift(), this.rowIdx--;
  }, Be.prototype.isEmpty = function() {
    return this.rows.length === 0 || this.rows.length === 1 && this.rows[0] === "";
  }, Be.prototype.addText = function(o) {
    this.rows[this.rowIdx] += o;
  }, Be.prototype.backspace = function() {
    if (!this.isEmpty()) {
      var o = this.rows[this.rowIdx];
      this.rows[this.rowIdx] = o.substr(0, o.length - 1);
    }
  };
  var Cn = function(o, h, c) {
    this.serviceNum = o, this.text = "", this.currentWindow = new Be(-1), this.windows = [], this.stream = c, typeof h == "string" && this.createTextDecoder(h);
  };
  Cn.prototype.init = function(o, h) {
    this.startPts = o;
    for (var c = 0; c < 8; c++) this.windows[c] = new Be(c), typeof h == "function" && (this.windows[c].beforeRowOverflow = h);
  }, Cn.prototype.setCurrentWindow = function(o) {
    this.currentWindow = this.windows[o];
  }, Cn.prototype.createTextDecoder = function(o) {
    if (typeof TextDecoder > "u") this.stream.trigger("log", { level: "warn", message: "The `encoding` option is unsupported without TextDecoder support" });
    else try {
      this.textDecoder_ = new TextDecoder(o);
    } catch (h) {
      this.stream.trigger("log", { level: "warn", message: "TextDecoder could not be created with " + o + " encoding. " + h });
    }
  };
  var lt = function(o) {
    o = o || {}, lt.prototype.init.call(this);
    var h, c = this, d = o.captionServices || {}, m = {};
    Object.keys(d).forEach((f) => {
      h = d[f], /^SERVICE/.test(f) && (m[f] = h.encoding);
    }), this.serviceEncodings = m, this.current708Packet = null, this.services = {}, this.push = function(f) {
      f.type === 3 ? (c.new708Packet(), c.add708Bytes(f)) : (c.current708Packet === null && c.new708Packet(), c.add708Bytes(f));
    };
  };
  lt.prototype = new la(), lt.prototype.new708Packet = function() {
    this.current708Packet !== null && this.push708Packet(), this.current708Packet = { data: [], ptsVals: [] };
  }, lt.prototype.add708Bytes = function(o) {
    var h = o.ccData, c = h >>> 8, d = 255 & h;
    this.current708Packet.ptsVals.push(o.pts), this.current708Packet.data.push(c), this.current708Packet.data.push(d);
  }, lt.prototype.push708Packet = function() {
    var o = this.current708Packet, h = o.data, c = null, d = null, m = 0, f = h[m++];
    for (o.seq = f >> 6, o.sizeCode = 63 & f; m < h.length; m++) d = 31 & (f = h[m++]), (c = f >> 5) === 7 && d > 0 && (c = f = h[m++]), this.pushServiceBlock(c, m, d), d > 0 && (m += d - 1);
  }, lt.prototype.pushServiceBlock = function(o, h, c) {
    var d, m = h, f = this.current708Packet.data, v = this.services[o];
    for (v || (v = this.initService(o, m)); m < h + c && m < f.length; m++) d = f[m], wn(d) ? m = this.handleText(m, v) : d === 24 ? m = this.multiByteCharacter(m, v) : d === 16 ? m = this.extendedCommands(m, v) : 128 <= d && d <= 135 ? m = this.setCurrentWindow(m, v) : 152 <= d && d <= 159 ? m = this.defineWindow(m, v) : d === 136 ? m = this.clearWindows(m, v) : d === 140 ? m = this.deleteWindows(m, v) : d === 137 ? m = this.displayWindows(m, v) : d === 138 ? m = this.hideWindows(m, v) : d === 139 ? m = this.toggleWindows(m, v) : d === 151 ? m = this.setWindowAttributes(m, v) : d === 144 ? m = this.setPenAttributes(m, v) : d === 145 ? m = this.setPenColor(m, v) : d === 146 ? m = this.setPenLocation(m, v) : d === 143 ? v = this.reset(m, v) : d === 8 ? v.currentWindow.backspace() : d === 12 ? v.currentWindow.clearText() : d === 13 ? v.currentWindow.pendingNewLine = !0 : d === 14 ? v.currentWindow.clearText() : d === 141 && m++;
  }, lt.prototype.extendedCommands = function(o, h) {
    var c = this.current708Packet.data[++o];
    return wn(c) && (o = this.handleText(o, h, { isExtended: !0 })), o;
  }, lt.prototype.getPts = function(o) {
    return this.current708Packet.ptsVals[Math.floor(o / 2)];
  }, lt.prototype.initService = function(o, h) {
    var c, d, m = this;
    return (c = "SERVICE" + o) in this.serviceEncodings && (d = this.serviceEncodings[c]), this.services[o] = new Cn(o, d, m), this.services[o].init(this.getPts(h), function(f) {
      m.flushDisplayed(f, m.services[o]);
    }), this.services[o];
  }, lt.prototype.handleText = function(o, h, c) {
    var d, m, f = c && c.isExtended, v = c && c.isMultiByte, S = this.current708Packet.data, b = f ? 4096 : 0, w = S[o], L = S[o + 1], M = h.currentWindow;
    function $(z) {
      return z.map((Q) => ("0" + (255 & Q).toString(16)).slice(-2)).join("");
    }
    if (v ? (m = [w, L], o++) : m = [w], h.textDecoder_ && !f) d = h.textDecoder_.decode(new Uint8Array(m));
    else if (v) {
      const z = $(m);
      d = String.fromCharCode(parseInt(z, 16));
    } else d = mg(b | w);
    return M.pendingNewLine && !M.isEmpty() && M.newLine(this.getPts(o)), M.pendingNewLine = !1, M.addText(d), o;
  }, lt.prototype.multiByteCharacter = function(o, h) {
    var c = this.current708Packet.data, d = c[o + 1], m = c[o + 2];
    return wn(d) && wn(m) && (o = this.handleText(++o, h, { isMultiByte: !0 })), o;
  }, lt.prototype.setCurrentWindow = function(o, h) {
    var c = 7 & this.current708Packet.data[o];
    return h.setCurrentWindow(c), o;
  }, lt.prototype.defineWindow = function(o, h) {
    var c = this.current708Packet.data, d = c[o], m = 7 & d;
    h.setCurrentWindow(m);
    var f = h.currentWindow;
    return d = c[++o], f.visible = (32 & d) >> 5, f.rowLock = (16 & d) >> 4, f.columnLock = (8 & d) >> 3, f.priority = 7 & d, d = c[++o], f.relativePositioning = (128 & d) >> 7, f.anchorVertical = 127 & d, d = c[++o], f.anchorHorizontal = d, d = c[++o], f.anchorPoint = (240 & d) >> 4, f.rowCount = 15 & d, d = c[++o], f.columnCount = 63 & d, d = c[++o], f.windowStyle = (56 & d) >> 3, f.penStyle = 7 & d, f.virtualRowCount = f.rowCount + 1, o;
  }, lt.prototype.setWindowAttributes = function(o, h) {
    var c = this.current708Packet.data, d = c[o], m = h.currentWindow.winAttr;
    return d = c[++o], m.fillOpacity = (192 & d) >> 6, m.fillRed = (48 & d) >> 4, m.fillGreen = (12 & d) >> 2, m.fillBlue = 3 & d, d = c[++o], m.borderType = (192 & d) >> 6, m.borderRed = (48 & d) >> 4, m.borderGreen = (12 & d) >> 2, m.borderBlue = 3 & d, d = c[++o], m.borderType += (128 & d) >> 5, m.wordWrap = (64 & d) >> 6, m.printDirection = (48 & d) >> 4, m.scrollDirection = (12 & d) >> 2, m.justify = 3 & d, d = c[++o], m.effectSpeed = (240 & d) >> 4, m.effectDirection = (12 & d) >> 2, m.displayEffect = 3 & d, o;
  }, lt.prototype.flushDisplayed = function(o, h) {
    for (var c = [], d = 0; d < 8; d++) h.windows[d].visible && !h.windows[d].isEmpty() && c.push(h.windows[d].getText());
    h.endPts = o, h.text = c.join(`

`), this.pushCaption(h), h.startPts = o;
  }, lt.prototype.pushCaption = function(o) {
    o.text !== "" && (this.trigger("data", { startPts: o.startPts, endPts: o.endPts, text: o.text, stream: "cc708_" + o.serviceNum }), o.text = "", o.startPts = o.endPts);
  }, lt.prototype.displayWindows = function(o, h) {
    var c = this.current708Packet.data[++o], d = this.getPts(o);
    this.flushDisplayed(d, h);
    for (var m = 0; m < 8; m++) c & 1 << m && (h.windows[m].visible = 1);
    return o;
  }, lt.prototype.hideWindows = function(o, h) {
    var c = this.current708Packet.data[++o], d = this.getPts(o);
    this.flushDisplayed(d, h);
    for (var m = 0; m < 8; m++) c & 1 << m && (h.windows[m].visible = 0);
    return o;
  }, lt.prototype.toggleWindows = function(o, h) {
    var c = this.current708Packet.data[++o], d = this.getPts(o);
    this.flushDisplayed(d, h);
    for (var m = 0; m < 8; m++) c & 1 << m && (h.windows[m].visible ^= 1);
    return o;
  }, lt.prototype.clearWindows = function(o, h) {
    var c = this.current708Packet.data[++o], d = this.getPts(o);
    this.flushDisplayed(d, h);
    for (var m = 0; m < 8; m++) c & 1 << m && h.windows[m].clearText();
    return o;
  }, lt.prototype.deleteWindows = function(o, h) {
    var c = this.current708Packet.data[++o], d = this.getPts(o);
    this.flushDisplayed(d, h);
    for (var m = 0; m < 8; m++) c & 1 << m && h.windows[m].reset();
    return o;
  }, lt.prototype.setPenAttributes = function(o, h) {
    var c = this.current708Packet.data, d = c[o], m = h.currentWindow.penAttr;
    return d = c[++o], m.textTag = (240 & d) >> 4, m.offset = (12 & d) >> 2, m.penSize = 3 & d, d = c[++o], m.italics = (128 & d) >> 7, m.underline = (64 & d) >> 6, m.edgeType = (56 & d) >> 3, m.fontStyle = 7 & d, o;
  }, lt.prototype.setPenColor = function(o, h) {
    var c = this.current708Packet.data, d = c[o], m = h.currentWindow.penColor;
    return d = c[++o], m.fgOpacity = (192 & d) >> 6, m.fgRed = (48 & d) >> 4, m.fgGreen = (12 & d) >> 2, m.fgBlue = 3 & d, d = c[++o], m.bgOpacity = (192 & d) >> 6, m.bgRed = (48 & d) >> 4, m.bgGreen = (12 & d) >> 2, m.bgBlue = 3 & d, d = c[++o], m.edgeRed = (48 & d) >> 4, m.edgeGreen = (12 & d) >> 2, m.edgeBlue = 3 & d, o;
  }, lt.prototype.setPenLocation = function(o, h) {
    var c = this.current708Packet.data, d = c[o], m = h.currentWindow.penLoc;
    return h.currentWindow.pendingNewLine = !0, d = c[++o], m.row = 15 & d, d = c[++o], m.column = 63 & d, o;
  }, lt.prototype.reset = function(o, h) {
    var c = this.getPts(o);
    return this.flushDisplayed(c, h), this.initService(h.serviceNum, o);
  };
  var gg = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 304: 174, 305: 176, 306: 189, 307: 191, 308: 8482, 309: 162, 310: 163, 311: 9834, 312: 224, 313: 160, 314: 232, 315: 226, 316: 234, 317: 238, 318: 244, 319: 251, 544: 193, 545: 201, 546: 211, 547: 218, 548: 220, 549: 252, 550: 8216, 551: 161, 552: 42, 553: 39, 554: 8212, 555: 169, 556: 8480, 557: 8226, 558: 8220, 559: 8221, 560: 192, 561: 194, 562: 199, 563: 200, 564: 202, 565: 203, 566: 235, 567: 206, 568: 207, 569: 239, 570: 212, 571: 217, 572: 249, 573: 219, 574: 171, 575: 187, 800: 195, 801: 227, 802: 205, 803: 204, 804: 236, 805: 210, 806: 242, 807: 213, 808: 245, 809: 123, 810: 125, 811: 92, 812: 94, 813: 95, 814: 124, 815: 126, 816: 196, 817: 228, 818: 214, 819: 246, 820: 223, 821: 165, 822: 164, 823: 9474, 824: 197, 825: 229, 826: 216, 827: 248, 828: 9484, 829: 9488, 830: 9492, 831: 9496 }, kn = function(o) {
    return o === null ? "" : (o = gg[o] || o, String.fromCharCode(o));
  }, xn = 14, fg = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152], fi = function() {
    for (var o = [], h = xn + 1; h--; ) o.push({ text: "", indent: 0, offset: 0 });
    return o;
  }, mt = function(o, h) {
    mt.prototype.init.call(this), this.field_ = o || 0, this.dataChannel_ = h || 0, this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)), this.setConstants(), this.reset(), this.push = function(c) {
      var d, m, f, v, S;
      if ((d = 32639 & c.ccData) !== this.lastControlCode_) {
        if ((61440 & d) == 4096 ? this.lastControlCode_ = d : d !== this.PADDING_ && (this.lastControlCode_ = null), f = d >>> 8, v = 255 & d, d !== this.PADDING_) if (d === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn";
        else if (d === this.END_OF_CAPTION_) this.mode_ = "popOn", this.clearFormatting(c.pts), this.flushDisplayed(c.pts), m = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = m, this.startPts_ = c.pts;
        else if (d === this.ROLL_UP_2_ROWS_) this.rollUpRows_ = 2, this.setRollUp(c.pts);
        else if (d === this.ROLL_UP_3_ROWS_) this.rollUpRows_ = 3, this.setRollUp(c.pts);
        else if (d === this.ROLL_UP_4_ROWS_) this.rollUpRows_ = 4, this.setRollUp(c.pts);
        else if (d === this.CARRIAGE_RETURN_) this.clearFormatting(c.pts), this.flushDisplayed(c.pts), this.shiftRowsUp_(), this.startPts_ = c.pts;
        else if (d === this.BACKSPACE_) this.mode_ === "popOn" ? this.nonDisplayed_[this.row_].text = this.nonDisplayed_[this.row_].text.slice(0, -1) : this.displayed_[this.row_].text = this.displayed_[this.row_].text.slice(0, -1);
        else if (d === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(c.pts), this.displayed_ = fi();
        else if (d === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = fi();
        else if (d === this.RESUME_DIRECT_CAPTIONING_) this.mode_ !== "paintOn" && (this.flushDisplayed(c.pts), this.displayed_ = fi()), this.mode_ = "paintOn", this.startPts_ = c.pts;
        else if (this.isSpecialCharacter(f, v)) S = kn((f = (3 & f) << 8) | v), this[this.mode_](c.pts, S), this.column_++;
        else if (this.isExtCharacter(f, v)) this.mode_ === "popOn" ? this.nonDisplayed_[this.row_].text = this.nonDisplayed_[this.row_].text.slice(0, -1) : this.displayed_[this.row_].text = this.displayed_[this.row_].text.slice(0, -1), S = kn((f = (3 & f) << 8) | v), this[this.mode_](c.pts, S), this.column_++;
        else if (this.isMidRowCode(f, v)) this.clearFormatting(c.pts), this[this.mode_](c.pts, " "), this.column_++, 14 & ~v || this.addFormatting(c.pts, ["i"]), 1 & ~v || this.addFormatting(c.pts, ["u"]);
        else if (this.isOffsetControlCode(f, v)) {
          const w = 3 & v;
          this.nonDisplayed_[this.row_].offset = w, this.column_ += w;
        } else if (this.isPAC(f, v)) {
          var b = fg.indexOf(7968 & d);
          if (this.mode_ === "rollUp" && (b - this.rollUpRows_ + 1 < 0 && (b = this.rollUpRows_ - 1), this.setRollUp(c.pts, b)), b !== this.row_ && b >= 0 && b <= 14 && (this.clearFormatting(c.pts), this.row_ = b), 1 & v && this.formatting_.indexOf("u") === -1 && this.addFormatting(c.pts, ["u"]), !(16 & ~d)) {
            const w = (14 & d) >> 1;
            this.column_ = 4 * w, this.nonDisplayed_[this.row_].indent += w;
          }
          this.isColorPAC(v) && (14 & ~v || this.addFormatting(c.pts, ["i"]));
        } else this.isNormalChar(f) && (v === 0 && (v = null), S = kn(f), S += kn(v), this[this.mode_](c.pts, S), this.column_ += S.length);
      } else this.lastControlCode_ = null;
    };
  };
  mt.prototype = new la(), mt.prototype.flushDisplayed = function(o) {
    const h = (d) => {
      this.trigger("log", { level: "warn", message: "Skipping a malformed 608 caption at index " + d + "." });
    }, c = [];
    this.displayed_.forEach((d, m) => {
      if (d && d.text && d.text.length) {
        try {
          d.text = d.text.trim();
        } catch {
          h(m);
        }
        d.text.length && c.push({ text: d.text, line: m + 1, position: 10 + Math.min(70, 10 * d.indent) + 2.5 * d.offset });
      } else d == null && h(m);
    }), c.length && this.trigger("data", { startPts: this.startPts_, endPts: o, content: c, stream: this.name_ });
  }, mt.prototype.reset = function() {
    this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = fi(), this.nonDisplayed_ = fi(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = xn, this.rollUpRows_ = 2, this.formatting_ = [];
  }, mt.prototype.setConstants = function() {
    this.dataChannel_ === 0 ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : this.dataChannel_ === 1 && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_;
  }, mt.prototype.isSpecialCharacter = function(o, h) {
    return o === this.EXT_ && h >= 48 && h <= 63;
  }, mt.prototype.isExtCharacter = function(o, h) {
    return (o === this.EXT_ + 1 || o === this.EXT_ + 2) && h >= 32 && h <= 63;
  }, mt.prototype.isMidRowCode = function(o, h) {
    return o === this.EXT_ && h >= 32 && h <= 47;
  }, mt.prototype.isOffsetControlCode = function(o, h) {
    return o === this.OFFSET_ && h >= 33 && h <= 35;
  }, mt.prototype.isPAC = function(o, h) {
    return o >= this.BASE_ && o < this.BASE_ + 8 && h >= 64 && h <= 127;
  }, mt.prototype.isColorPAC = function(o) {
    return o >= 64 && o <= 79 || o >= 96 && o <= 127;
  }, mt.prototype.isNormalChar = function(o) {
    return o >= 32 && o <= 127;
  }, mt.prototype.setRollUp = function(o, h) {
    if (this.mode_ !== "rollUp" && (this.row_ = xn, this.mode_ = "rollUp", this.flushDisplayed(o), this.nonDisplayed_ = fi(), this.displayed_ = fi()), h !== void 0 && h !== this.row_) for (var c = 0; c < this.rollUpRows_; c++) this.displayed_[h - c] = this.displayed_[this.row_ - c], this.displayed_[this.row_ - c] = { text: "", indent: 0, offset: 0 };
    h === void 0 && (h = this.row_), this.topRow_ = h - this.rollUpRows_ + 1;
  }, mt.prototype.addFormatting = function(o, h) {
    this.formatting_ = this.formatting_.concat(h);
    var c = h.reduce(function(d, m) {
      return d + "<" + m + ">";
    }, "");
    this[this.mode_](o, c);
  }, mt.prototype.clearFormatting = function(o) {
    if (this.formatting_.length) {
      var h = this.formatting_.reverse().reduce(function(c, d) {
        return c + "</" + d + ">";
      }, "");
      this.formatting_ = [], this[this.mode_](o, h);
    }
  }, mt.prototype.popOn = function(o, h) {
    var c = this.nonDisplayed_[this.row_].text;
    c += h, this.nonDisplayed_[this.row_].text = c;
  }, mt.prototype.rollUp = function(o, h) {
    var c = this.displayed_[this.row_].text;
    c += h, this.displayed_[this.row_].text = c;
  }, mt.prototype.shiftRowsUp_ = function() {
    var o;
    for (o = 0; o < this.topRow_; o++) this.displayed_[o] = { text: "", indent: 0, offset: 0 };
    for (o = this.row_ + 1; o < xn + 1; o++) this.displayed_[o] = { text: "", indent: 0, offset: 0 };
    for (o = this.topRow_; o < this.row_; o++) this.displayed_[o] = this.displayed_[o + 1];
    this.displayed_[this.row_] = { text: "", indent: 0, offset: 0 };
  }, mt.prototype.paintOn = function(o, h) {
    var c = this.displayed_[this.row_].text;
    c += h, this.displayed_[this.row_].text = c;
  };
  var eh = { CaptionStream: Ht, Cea608Stream: mt, Cea708Stream: lt }, In = { H264_STREAM_TYPE: 27, ADTS_STREAM_TYPE: 15, METADATA_STREAM_TYPE: 21 }, yg = Ye, _g = 8589934592, vg = 4294967296, ih = "shared", ha = function(o, h) {
    var c = 1;
    for (o > h && (c = -1); Math.abs(h - o) > vg; ) o += c * _g;
    return o;
  }, ua = function(o) {
    var h, c;
    ua.prototype.init.call(this), this.type_ = o || ih, this.push = function(d) {
      d.type !== "metadata" ? this.type_ !== ih && d.type !== this.type_ || (c === void 0 && (c = d.dts), d.dts = ha(d.dts, c), d.pts = ha(d.pts, c), h = d.dts, this.trigger("data", d)) : this.trigger("data", d);
    }, this.flush = function() {
      c = h, this.trigger("done");
    }, this.endTimeline = function() {
      this.flush(), this.trigger("endedtimeline");
    }, this.discontinuity = function() {
      c = void 0, h = void 0;
    }, this.reset = function() {
      this.discontinuity(), this.trigger("reset");
    };
  };
  ua.prototype = new yg();
  var da, sh = { TimestampRolloverStream: ua, handleRollover: ha }, bg = (o, h, c) => {
    if (!o) return -1;
    for (var d = c; d < o.length; d++) if (o[d] === h) return d;
    return -1;
  }, An = bg, Pn = { Iso88591: 0, Utf16: 1, Utf16be: 2, Utf8: 3 }, nh = function(o, h, c) {
    var d, m = "";
    for (d = h; d < c; d++) m += "%" + ("00" + o[d].toString(16)).slice(-2);
    return m;
  }, Es = function(o, h, c) {
    return decodeURIComponent(nh(o, h, c));
  }, ws = function(o, h, c) {
    return unescape(nh(o, h, c));
  }, Cs = function(o) {
    return o[0] << 21 | o[1] << 14 | o[2] << 7 | o[3];
  }, ks = { APIC: function(o) {
    var h, c, d = 1, m = "-->";
    o.data[0] === Pn.Utf8 && ((h = An(o.data, 0, d)) < 0 || (o.mimeType = ws(o.data, d, h), d = h + 1, o.pictureType = o.data[d], d++, (c = An(o.data, 0, d)) < 0 || (o.description = Es(o.data, d, c), d = c + 1, o.mimeType === m ? o.url = ws(o.data, d, o.data.length) : o.pictureData = o.data.subarray(d, o.data.length))));
  }, "T*": function(o) {
    o.data[0] === Pn.Utf8 && (o.value = Es(o.data, 1, o.data.length).replace(/\0*$/, ""), o.values = o.value.split("\0"));
  }, TXXX: function(o) {
    var h;
    o.data[0] === Pn.Utf8 && (h = An(o.data, 0, 1)) !== -1 && (o.description = Es(o.data, 1, h), o.value = Es(o.data, h + 1, o.data.length).replace(/\0*$/, ""), o.data = o.value);
  }, "W*": function(o) {
    o.url = ws(o.data, 0, o.data.length).replace(/\0.*$/, "");
  }, WXXX: function(o) {
    var h;
    o.data[0] === Pn.Utf8 && (h = An(o.data, 0, 1)) !== -1 && (o.description = Es(o.data, 1, h), o.url = ws(o.data, h + 1, o.data.length).replace(/\0.*$/, ""));
  }, PRIV: function(o) {
    var h;
    for (h = 0; h < o.data.length; h++) if (o.data[h] === 0) {
      o.owner = ws(o.data, 0, h);
      break;
    }
    o.privateData = o.data.subarray(h + 1), o.data = o.privateData;
  } }, rh = { parseId3Frames: function(o) {
    var h, c = 10, d = 0, m = [];
    if (!(o.length < 10 || o[0] !== 73 || o[1] !== 68 || o[2] !== 51)) {
      d = Cs(o.subarray(6, 10)), d += 10, 64 & o[5] && (c += 4, c += Cs(o.subarray(10, 14)), d -= Cs(o.subarray(16, 20)));
      do {
        if ((h = Cs(o.subarray(c + 4, c + 8))) < 1) break;
        var f = { id: String.fromCharCode(o[c], o[c + 1], o[c + 2], o[c + 3]), data: o.subarray(c + 10, c + h + 10) };
        f.key = f.id, ks[f.id] ? ks[f.id](f) : f.id[0] === "T" ? ks["T*"](f) : f.id[0] === "W" && ks["W*"](f), m.push(f), c += 10, c += h;
      } while (c < d);
      return m;
    }
  }, parseSyncSafeInteger: Cs, frameParsers: ks }, Tg = In, Je = rh;
  (da = function(o) {
    var h, c = { descriptor: o && o.descriptor }, d = 0, m = [], f = 0;
    if (da.prototype.init.call(this), this.dispatchType = Tg.METADATA_STREAM_TYPE.toString(16), c.descriptor) for (h = 0; h < c.descriptor.length; h++) this.dispatchType += ("00" + c.descriptor[h].toString(16)).slice(-2);
    this.push = function(v) {
      var S, b, w, L, M;
      if (v.type === "timed-metadata") {
        if (v.dataAlignmentIndicator && (f = 0, m.length = 0), m.length === 0 && (v.data.length < 10 || v.data[0] !== 73 || v.data[1] !== 68 || v.data[2] !== 51)) this.trigger("log", { level: "warn", message: "Skipping unrecognized metadata packet" });
        else if (m.push(v), f += v.data.byteLength, m.length === 1 && (d = Je.parseSyncSafeInteger(v.data.subarray(6, 10)), d += 10), !(f < d)) {
          for (S = { data: new Uint8Array(d), frames: [], pts: m[0].pts, dts: m[0].dts }, M = 0; M < d; ) S.data.set(m[0].data.subarray(0, d - M), M), M += m[0].data.byteLength, f -= m[0].data.byteLength, m.shift();
          b = 10, 64 & S.data[5] && (b += 4, b += Je.parseSyncSafeInteger(S.data.subarray(10, 14)), d -= Je.parseSyncSafeInteger(S.data.subarray(16, 20)));
          do {
            if ((w = Je.parseSyncSafeInteger(S.data.subarray(b + 4, b + 8))) < 1) {
              this.trigger("log", { level: "warn", message: "Malformed ID3 frame encountered. Skipping remaining metadata parsing." });
              break;
            }
            if ((L = { id: String.fromCharCode(S.data[b], S.data[b + 1], S.data[b + 2], S.data[b + 3]), data: S.data.subarray(b + 10, b + w + 10) }).key = L.id, Je.frameParsers[L.id] ? Je.frameParsers[L.id](L) : L.id[0] === "T" ? Je.frameParsers["T*"](L) : L.id[0] === "W" && Je.frameParsers["W*"](L), L.owner === "com.apple.streaming.transportStreamTimestamp") {
              var $ = L.data, z = (1 & $[3]) << 30 | $[4] << 22 | $[5] << 14 | $[6] << 6 | $[7] >>> 2;
              z *= 4, z += 3 & $[7], L.timeStamp = z, S.pts === void 0 && S.dts === void 0 && (S.pts = L.timeStamp, S.dts = L.timeStamp), this.trigger("timestamp", L);
            }
            S.frames.push(L), b += 10, b += w;
          } while (b < d);
          this.trigger("data", S);
        }
      }
    };
  }).prototype = new Ye();
  var ca, xs, Dn, Sg = da, pa = Ye, ma = eh, pe = In, Eg = sh.TimestampRolloverStream, Li = 188, ga = 71;
  (ca = function() {
    var o = new Uint8Array(Li), h = 0;
    ca.prototype.init.call(this), this.push = function(c) {
      var d, m = 0, f = Li;
      for (h ? ((d = new Uint8Array(c.byteLength + h)).set(o.subarray(0, h)), d.set(c, h), h = 0) : d = c; f < d.byteLength; ) d[m] !== ga || d[f] !== ga ? (m++, f++) : (this.trigger("data", d.subarray(m, f)), m += Li, f += Li);
      m < d.byteLength && (o.set(d.subarray(m), 0), h = d.byteLength - m);
    }, this.flush = function() {
      h === Li && o[0] === ga && (this.trigger("data", o), h = 0), this.trigger("done");
    }, this.endTimeline = function() {
      this.flush(), this.trigger("endedtimeline");
    }, this.reset = function() {
      h = 0, this.trigger("reset");
    };
  }).prototype = new pa(), xs = function() {
    var o, h, c, d;
    xs.prototype.init.call(this), d = this, this.packetsWaitingForPmt = [], this.programMapTable = void 0, o = function(m, f) {
      var v = 0;
      f.payloadUnitStartIndicator && (v += m[v] + 1), f.type === "pat" ? h(m.subarray(v), f) : c(m.subarray(v), f);
    }, h = function(m, f) {
      f.section_number = m[7], f.last_section_number = m[8], d.pmtPid = (31 & m[10]) << 8 | m[11], f.pmtPid = d.pmtPid;
    }, c = function(m, f) {
      var v, S;
      if (1 & m[5]) {
        for (d.programMapTable = { video: null, audio: null, "timed-metadata": {} }, v = 3 + ((15 & m[1]) << 8 | m[2]) - 4, S = 12 + ((15 & m[10]) << 8 | m[11]); S < v; ) {
          var b = m[S], w = (31 & m[S + 1]) << 8 | m[S + 2];
          b === pe.H264_STREAM_TYPE && d.programMapTable.video === null ? d.programMapTable.video = w : b === pe.ADTS_STREAM_TYPE && d.programMapTable.audio === null ? d.programMapTable.audio = w : b === pe.METADATA_STREAM_TYPE && (d.programMapTable["timed-metadata"][w] = b), S += 5 + ((15 & m[S + 3]) << 8 | m[S + 4]);
        }
        f.programMapTable = d.programMapTable;
      }
    }, this.push = function(m) {
      var f = {}, v = 4;
      if (f.payloadUnitStartIndicator = !!(64 & m[1]), f.pid = 31 & m[1], f.pid <<= 8, f.pid |= m[2], (48 & m[3]) >>> 4 > 1 && (v += m[v] + 1), f.pid === 0) f.type = "pat", o(m.subarray(v), f), this.trigger("data", f);
      else if (f.pid === this.pmtPid) for (f.type = "pmt", o(m.subarray(v), f), this.trigger("data", f); this.packetsWaitingForPmt.length; ) this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
      else this.programMapTable === void 0 ? this.packetsWaitingForPmt.push([m, v, f]) : this.processPes_(m, v, f);
    }, this.processPes_ = function(m, f, v) {
      v.pid === this.programMapTable.video ? v.streamType = pe.H264_STREAM_TYPE : v.pid === this.programMapTable.audio ? v.streamType = pe.ADTS_STREAM_TYPE : v.streamType = this.programMapTable["timed-metadata"][v.pid], v.type = "pes", v.data = m.subarray(f), this.trigger("data", v);
    };
  }, xs.prototype = new pa(), xs.STREAM_TYPES = { h264: 27, adts: 15 }, Dn = function() {
    var o, h = this, c = !1, d = { data: [], size: 0 }, m = { data: [], size: 0 }, f = { data: [], size: 0 }, v = function(b, w) {
      var L;
      const M = b[0] << 16 | b[1] << 8 | b[2];
      w.data = new Uint8Array(), M === 1 && (w.packetLength = 6 + (b[4] << 8 | b[5]), w.dataAlignmentIndicator = !!(4 & b[6]), 192 & (L = b[7]) && (w.pts = (14 & b[9]) << 27 | (255 & b[10]) << 20 | (254 & b[11]) << 12 | (255 & b[12]) << 5 | (254 & b[13]) >>> 3, w.pts *= 4, w.pts += (6 & b[13]) >>> 1, w.dts = w.pts, 64 & L && (w.dts = (14 & b[14]) << 27 | (255 & b[15]) << 20 | (254 & b[16]) << 12 | (255 & b[17]) << 5 | (254 & b[18]) >>> 3, w.dts *= 4, w.dts += (6 & b[18]) >>> 1)), w.data = b.subarray(9 + b[8]));
    }, S = function(b, w, L) {
      var M, $ = new Uint8Array(b.size), z = { type: w }, Q = 0, tt = 0, Nt = !1;
      if (b.data.length && !(b.size < 9)) {
        for (z.trackId = b.data[0].pid, Q = 0; Q < b.data.length; Q++) M = b.data[Q], $.set(M.data, tt), tt += M.data.byteLength;
        v($, z), Nt = w === "video" || z.packetLength <= b.size, (L || Nt) && (b.size = 0, b.data.length = 0), Nt && h.trigger("data", z);
      }
    };
    Dn.prototype.init.call(this), this.push = function(b) {
      ({ pat: function() {
      }, pes: function() {
        var w, L;
        switch (b.streamType) {
          case pe.H264_STREAM_TYPE:
            w = d, L = "video";
            break;
          case pe.ADTS_STREAM_TYPE:
            w = m, L = "audio";
            break;
          case pe.METADATA_STREAM_TYPE:
            w = f, L = "timed-metadata";
            break;
          default:
            return;
        }
        b.payloadUnitStartIndicator && S(w, L, !0), w.data.push(b), w.size += b.data.byteLength;
      }, pmt: function() {
        var w = { type: "metadata", tracks: [] };
        (o = b.programMapTable).video !== null && w.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +o.video, codec: "avc", type: "video" }), o.audio !== null && w.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +o.audio, codec: "adts", type: "audio" }), c = !0, h.trigger("data", w);
      } })[b.type]();
    }, this.reset = function() {
      d.size = 0, d.data.length = 0, m.size = 0, m.data.length = 0, this.trigger("reset");
    }, this.flushStreams_ = function() {
      S(d, "video"), S(m, "audio"), S(f, "timed-metadata");
    }, this.flush = function() {
      if (!c && o) {
        var b = { type: "metadata", tracks: [] };
        o.video !== null && b.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +o.video, codec: "avc", type: "video" }), o.audio !== null && b.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +o.audio, codec: "adts", type: "audio" }), h.trigger("data", b);
      }
      c = !1, this.flushStreams_(), this.trigger("done");
    };
  }, Dn.prototype = new pa();
  var ah = { PAT_PID: 0, MP2T_PACKET_LENGTH: Li, TransportPacketStream: ca, TransportParseStream: xs, ElementaryStream: Dn, TimestampRolloverStream: Eg, CaptionStream: ma.CaptionStream, Cea608Stream: ma.Cea608Stream, Cea708Stream: ma.Cea708Stream, MetadataStream: Sg };
  for (var fa in pe) pe.hasOwnProperty(fa) && (ah[fa] = pe[fa]);
  var ya, wg = ah, Cg = Ye, kg = dt.ONE_SECOND_IN_TS, oh = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
  (ya = function(o) {
    var h, c = 0;
    ya.prototype.init.call(this), this.skipWarn_ = function(d, m) {
      this.trigger("log", { level: "warn", message: `adts skiping bytes ${d} to ${m} in frame ${c} outside syncword` });
    }, this.push = function(d) {
      var m, f, v, S, b, w = 0;
      if (o || (c = 0), d.type === "audio") {
        var L;
        for (h && h.length ? (v = h, (h = new Uint8Array(v.byteLength + d.data.byteLength)).set(v), h.set(d.data, v.byteLength)) : h = d.data; w + 7 < h.length; ) if (h[w] === 255 && (246 & h[w + 1]) == 240) {
          if (typeof L == "number" && (this.skipWarn_(L, w), L = null), f = 2 * (1 & ~h[w + 1]), m = (3 & h[w + 3]) << 11 | h[w + 4] << 3 | (224 & h[w + 5]) >> 5, b = (S = 1024 * (1 + (3 & h[w + 6]))) * kg / oh[(60 & h[w + 2]) >>> 2], h.byteLength - w < m) break;
          this.trigger("data", { pts: d.pts + c * b, dts: d.dts + c * b, sampleCount: S, audioobjecttype: 1 + (h[w + 2] >>> 6 & 3), channelcount: (1 & h[w + 2]) << 2 | (192 & h[w + 3]) >>> 6, samplerate: oh[(60 & h[w + 2]) >>> 2], samplingfrequencyindex: (60 & h[w + 2]) >>> 2, samplesize: 16, data: h.subarray(w + 7 + f, w + m) }), c++, w += m;
        } else typeof L != "number" && (L = w), w++;
        typeof L == "number" && (this.skipWarn_(L, w), L = null), h = h.subarray(w);
      }
    }, this.flush = function() {
      c = 0, this.trigger("done");
    }, this.reset = function() {
      h = void 0, this.trigger("reset");
    }, this.endTimeline = function() {
      h = void 0, this.trigger("endedtimeline");
    };
  }).prototype = new Cg();
  var lh, xg = ya;
  lh = function(o) {
    var h = o.byteLength, c = 0, d = 0;
    this.length = function() {
      return 8 * h;
    }, this.bitsAvailable = function() {
      return 8 * h + d;
    }, this.loadWord = function() {
      var m = o.byteLength - h, f = new Uint8Array(4), v = Math.min(4, h);
      if (v === 0) throw new Error("no bytes available");
      f.set(o.subarray(m, m + v)), c = new DataView(f.buffer).getUint32(0), d = 8 * v, h -= v;
    }, this.skipBits = function(m) {
      var f;
      d > m ? (c <<= m, d -= m) : (m -= d, m -= 8 * (f = Math.floor(m / 8)), h -= f, this.loadWord(), c <<= m, d -= m);
    }, this.readBits = function(m) {
      var f = Math.min(d, m), v = c >>> 32 - f;
      return (d -= f) > 0 ? c <<= f : h > 0 && this.loadWord(), (f = m - f) > 0 ? v << f | this.readBits(f) : v;
    }, this.skipLeadingZeros = function() {
      var m;
      for (m = 0; m < d; ++m) if (c & 2147483648 >>> m) return c <<= m, d -= m, m;
      return this.loadWord(), m + this.skipLeadingZeros();
    }, this.skipUnsignedExpGolomb = function() {
      this.skipBits(1 + this.skipLeadingZeros());
    }, this.skipExpGolomb = function() {
      this.skipBits(1 + this.skipLeadingZeros());
    }, this.readUnsignedExpGolomb = function() {
      var m = this.skipLeadingZeros();
      return this.readBits(m + 1) - 1;
    }, this.readExpGolomb = function() {
      var m = this.readUnsignedExpGolomb();
      return 1 & m ? 1 + m >>> 1 : -1 * (m >>> 1);
    }, this.readBoolean = function() {
      return this.readBits(1) === 1;
    }, this.readUnsignedByte = function() {
      return this.readBits(8);
    }, this.loadWord();
  };
  var Ln, On, hh, uh = Ye, Ig = lh;
  (On = function() {
    var o, h, c = 0;
    On.prototype.init.call(this), this.push = function(d) {
      var m;
      h ? ((m = new Uint8Array(h.byteLength + d.data.byteLength)).set(h), m.set(d.data, h.byteLength), h = m) : h = d.data;
      for (var f = h.byteLength; c < f - 3; c++) if (h[c + 2] === 1) {
        o = c + 5;
        break;
      }
      for (; o < f; ) switch (h[o]) {
        case 0:
          if (h[o - 1] !== 0) {
            o += 2;
            break;
          }
          if (h[o - 2] !== 0) {
            o++;
            break;
          }
          c + 3 !== o - 2 && this.trigger("data", h.subarray(c + 3, o - 2));
          do
            o++;
          while (h[o] !== 1 && o < f);
          c = o - 2, o += 3;
          break;
        case 1:
          if (h[o - 1] !== 0 || h[o - 2] !== 0) {
            o += 3;
            break;
          }
          this.trigger("data", h.subarray(c + 3, o - 2)), c = o - 2, o += 3;
          break;
        default:
          o += 3;
      }
      h = h.subarray(c), o -= c, c = 0;
    }, this.reset = function() {
      h = null, c = 0, this.trigger("reset");
    }, this.flush = function() {
      h && h.byteLength > 3 && this.trigger("data", h.subarray(c + 3)), h = null, c = 0, this.trigger("done");
    }, this.endTimeline = function() {
      this.flush(), this.trigger("endedtimeline");
    };
  }).prototype = new uh(), hh = { 100: !0, 110: !0, 122: !0, 244: !0, 44: !0, 83: !0, 86: !0, 118: !0, 128: !0, 138: !0, 139: !0, 134: !0 }, Ln = function() {
    var o, h, c, d, m, f, v, S = new On();
    Ln.prototype.init.call(this), o = this, this.push = function(b) {
      b.type === "video" && (h = b.trackId, c = b.pts, d = b.dts, S.push(b));
    }, S.on("data", function(b) {
      var w = { trackId: h, pts: c, dts: d, data: b, nalUnitTypeCode: 31 & b[0] };
      switch (w.nalUnitTypeCode) {
        case 5:
          w.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
          break;
        case 6:
          w.nalUnitType = "sei_rbsp", w.escapedRBSP = m(b.subarray(1));
          break;
        case 7:
          w.nalUnitType = "seq_parameter_set_rbsp", w.escapedRBSP = m(b.subarray(1)), w.config = f(w.escapedRBSP);
          break;
        case 8:
          w.nalUnitType = "pic_parameter_set_rbsp";
          break;
        case 9:
          w.nalUnitType = "access_unit_delimiter_rbsp";
      }
      o.trigger("data", w);
    }), S.on("done", function() {
      o.trigger("done");
    }), S.on("partialdone", function() {
      o.trigger("partialdone");
    }), S.on("reset", function() {
      o.trigger("reset");
    }), S.on("endedtimeline", function() {
      o.trigger("endedtimeline");
    }), this.flush = function() {
      S.flush();
    }, this.partialFlush = function() {
      S.partialFlush();
    }, this.reset = function() {
      S.reset();
    }, this.endTimeline = function() {
      S.endTimeline();
    }, v = function(b, w) {
      var L, M = 8, $ = 8;
      for (L = 0; L < b; L++) $ !== 0 && ($ = (M + w.readExpGolomb() + 256) % 256), M = $ === 0 ? M : $;
    }, m = function(b) {
      for (var w, L, M = b.byteLength, $ = [], z = 1; z < M - 2; ) b[z] === 0 && b[z + 1] === 0 && b[z + 2] === 3 ? ($.push(z + 2), z += 2) : z++;
      if ($.length === 0) return b;
      w = M - $.length, L = new Uint8Array(w);
      var Q = 0;
      for (z = 0; z < w; Q++, z++) Q === $[0] && (Q++, $.shift()), L[z] = b[Q];
      return L;
    }, f = function(b) {
      var w, L, M, $, z, Q, tt, Nt, ge, Mi, Bh, vi, Fh = 0, qh = 0, jh = 0, $h = 0, kt = [1, 1];
      if (L = (w = new Ig(b)).readUnsignedByte(), $ = w.readUnsignedByte(), M = w.readUnsignedByte(), w.skipUnsignedExpGolomb(), hh[L] && ((z = w.readUnsignedExpGolomb()) === 3 && w.skipBits(1), w.skipUnsignedExpGolomb(), w.skipUnsignedExpGolomb(), w.skipBits(1), w.readBoolean())) for (Bh = z !== 3 ? 8 : 12, vi = 0; vi < Bh; vi++) w.readBoolean() && v(vi < 6 ? 16 : 64, w);
      if (w.skipUnsignedExpGolomb(), (Q = w.readUnsignedExpGolomb()) === 0) w.readUnsignedExpGolomb();
      else if (Q === 1) for (w.skipBits(1), w.skipExpGolomb(), w.skipExpGolomb(), tt = w.readUnsignedExpGolomb(), vi = 0; vi < tt; vi++) w.skipExpGolomb();
      if (w.skipUnsignedExpGolomb(), w.skipBits(1), Nt = w.readUnsignedExpGolomb(), ge = w.readUnsignedExpGolomb(), (Mi = w.readBits(1)) === 0 && w.skipBits(1), w.skipBits(1), w.readBoolean() && (Fh = w.readUnsignedExpGolomb(), qh = w.readUnsignedExpGolomb(), jh = w.readUnsignedExpGolomb(), $h = w.readUnsignedExpGolomb()), w.readBoolean() && w.readBoolean()) {
        switch (w.readUnsignedByte()) {
          case 1:
            kt = [1, 1];
            break;
          case 2:
            kt = [12, 11];
            break;
          case 3:
            kt = [10, 11];
            break;
          case 4:
            kt = [16, 11];
            break;
          case 5:
            kt = [40, 33];
            break;
          case 6:
            kt = [24, 11];
            break;
          case 7:
            kt = [20, 11];
            break;
          case 8:
            kt = [32, 11];
            break;
          case 9:
            kt = [80, 33];
            break;
          case 10:
            kt = [18, 11];
            break;
          case 11:
            kt = [15, 11];
            break;
          case 12:
            kt = [64, 33];
            break;
          case 13:
            kt = [160, 99];
            break;
          case 14:
            kt = [4, 3];
            break;
          case 15:
            kt = [3, 2];
            break;
          case 16:
            kt = [2, 1];
            break;
          case 255:
            kt = [w.readUnsignedByte() << 8 | w.readUnsignedByte(), w.readUnsignedByte() << 8 | w.readUnsignedByte()];
        }
        kt && (kt[0], kt[1]);
      }
      return { profileIdc: L, levelIdc: M, profileCompatibility: $, width: 16 * (Nt + 1) - 2 * Fh - 2 * qh, height: (2 - Mi) * (ge + 1) * 16 - 2 * jh - 2 * $h, sarRatio: kt };
    };
  }, Ln.prototype = new uh();
  var _a, Ag = { H264Stream: Ln, NalByteStream: On }, Pg = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], dh = function(o, h) {
    var c = o[h + 6] << 21 | o[h + 7] << 14 | o[h + 8] << 7 | o[h + 9];
    return c = c >= 0 ? c : 0, (16 & o[h + 5]) >> 4 ? c + 20 : c + 10;
  }, ch = function(o, h) {
    return o.length - h < 10 || o[h] !== 73 || o[h + 1] !== 68 || o[h + 2] !== 51 ? h : (h += dh(o, h), ch(o, h));
  }, ph = function(o) {
    return o[0] << 21 | o[1] << 14 | o[2] << 7 | o[3];
  }, Dg = function(o, h, c) {
    var d, m = "";
    for (d = h; d < c; d++) m += "%" + ("00" + o[d].toString(16)).slice(-2);
    return m;
  }, Lg = function(o, h, c) {
    return unescape(Dg(o, h, c));
  }, va = { isLikelyAacData: function(o) {
    var h = ch(o, 0);
    return o.length >= h + 2 && !(255 & ~o[h]) && !(240 & ~o[h + 1]) && (22 & o[h + 1]) == 16;
  }, parseId3TagSize: dh, parseAdtsSize: function(o, h) {
    var c = (224 & o[h + 5]) >> 5, d = o[h + 4] << 3;
    return 6144 & o[h + 3] | d | c;
  }, parseType: function(o, h) {
    return o[h] === 73 && o[h + 1] === 68 && o[h + 2] === 51 ? "timed-metadata" : !0 & o[h] && !(240 & ~o[h + 1]) ? "audio" : null;
  }, parseSampleRate: function(o) {
    for (var h = 0; h + 5 < o.length; ) {
      if (o[h] === 255 && (246 & o[h + 1]) == 240) return Pg[(60 & o[h + 2]) >>> 2];
      h++;
    }
    return null;
  }, parseAacTimestamp: function(o) {
    var h, c, d;
    h = 10, 64 & o[5] && (h += 4, h += ph(o.subarray(10, 14)));
    do {
      if ((c = ph(o.subarray(h + 4, h + 8))) < 1) return null;
      if (String.fromCharCode(o[h], o[h + 1], o[h + 2], o[h + 3]) === "PRIV") {
        d = o.subarray(h + 10, h + c + 10);
        for (var m = 0; m < d.byteLength; m++) if (d[m] === 0) {
          if (Lg(d, 0, m) === "com.apple.streaming.transportStreamTimestamp") {
            var f = d.subarray(m + 1), v = (1 & f[3]) << 30 | f[4] << 22 | f[5] << 14 | f[6] << 6 | f[7] >>> 2;
            return v *= 4, v += 3 & f[7];
          }
          break;
        }
      }
      h += 10, h += c;
    } while (h < o.byteLength);
    return null;
  } }, mh = va;
  (_a = function() {
    var o = new Uint8Array(), h = 0;
    _a.prototype.init.call(this), this.setTimestamp = function(c) {
      h = c;
    }, this.push = function(c) {
      var d, m, f, v, S = 0, b = 0;
      for (o.length ? (v = o.length, (o = new Uint8Array(c.byteLength + v)).set(o.subarray(0, v)), o.set(c, v)) : o = c; o.length - b >= 3; ) if (o[b] !== 73 || o[b + 1] !== 68 || o[b + 2] !== 51) if (255 & ~o[b] || 240 & ~o[b + 1]) b++;
      else {
        if (o.length - b < 7 || b + (S = mh.parseAdtsSize(o, b)) > o.length) break;
        f = { type: "audio", data: o.subarray(b, b + S), pts: h, dts: h }, this.trigger("data", f), b += S;
      }
      else {
        if (o.length - b < 10 || b + (S = mh.parseId3TagSize(o, b)) > o.length) break;
        m = { type: "timed-metadata", data: o.subarray(b, b + S) }, this.trigger("data", m), b += S;
      }
      d = o.length - b, o = d > 0 ? o.subarray(b) : new Uint8Array();
    }, this.reset = function() {
      o = new Uint8Array(), this.trigger("reset");
    }, this.endTimeline = function() {
      o = new Uint8Array(), this.trigger("endedtimeline");
    };
  }).prototype = new Ye();
  var Is, Oi, Nn, yi, Og = _a, Ng = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"], Rg = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility", "sarRatio"], Rn = Ye, As = ig, Ps = ng, Mn = hg, me = dg, Fe = wg, Un = dt, gh = xg, Mg = Ag.H264Stream, Ug = Og, Bg = va.isLikelyAacData, Fg = dt.ONE_SECOND_IN_TS, ba = Ng, Ta = Rg, qg = function(o, h) {
    h.stream = o, this.trigger("log", h);
  }, fh = function(o, h) {
    for (var c = Object.keys(h), d = 0; d < c.length; d++) {
      var m = c[d];
      m !== "headOfPipeline" && h[m].on && h[m].on("log", qg.bind(o, m));
    }
  }, yh = function(o, h) {
    var c;
    if (o.length !== h.length) return !1;
    for (c = 0; c < o.length; c++) if (o[c] !== h[c]) return !1;
    return !0;
  }, Sa = function(o, h, c, d, m, f) {
    return { start: { dts: o, pts: o + (c - h) }, end: { dts: o + (d - h), pts: o + (m - c) }, prependedContentDuration: f, baseMediaDecodeTime: o };
  };
  Oi = function(o, h) {
    var c, d = [], m = 0, f = 0, v = 1 / 0;
    c = (h = h || {}).firstSequenceNumber || 0, Oi.prototype.init.call(this), this.push = function(S) {
      me.collectDtsInfo(o, S), o && ba.forEach(function(b) {
        o[b] = S[b];
      }), d.push(S);
    }, this.setEarliestDts = function(S) {
      m = S;
    }, this.setVideoBaseMediaDecodeTime = function(S) {
      v = S;
    }, this.setAudioAppendStart = function(S) {
      f = S;
    }, this.flush = function() {
      var S, b, w, L, M, $, z;
      d.length !== 0 ? (S = Mn.trimAdtsFramesByEarliestDts(d, o, m), o.baseMediaDecodeTime = me.calculateTrackBaseMediaDecodeTime(o, h.keepOriginalTimestamps), z = Mn.prefixWithSilence(o, S, f, v), o.samples = Mn.generateSampleTable(S), w = As.mdat(Mn.concatenateFrameData(S)), d = [], b = As.moof(c, [o]), L = new Uint8Array(b.byteLength + w.byteLength), c++, L.set(b), L.set(w, b.byteLength), me.clearDtsInfo(o), M = Math.ceil(1024 * Fg / o.samplerate), S.length && ($ = S.length * M, this.trigger("segmentTimingInfo", Sa(Un.audioTsToVideoTs(o.baseMediaDecodeTime, o.samplerate), S[0].dts, S[0].pts, S[0].dts + $, S[0].pts + $, z || 0)), this.trigger("timingInfo", { start: S[0].pts, end: S[0].pts + $ })), this.trigger("data", { track: o, boxes: L }), this.trigger("done", "AudioSegmentStream")) : this.trigger("done", "AudioSegmentStream");
    }, this.reset = function() {
      me.clearDtsInfo(o), d = [], this.trigger("reset");
    };
  }, Oi.prototype = new Rn(), Is = function(o, h) {
    var c, d, m, f = [], v = [];
    c = (h = h || {}).firstSequenceNumber || 0, Is.prototype.init.call(this), delete o.minPTS, this.gopCache_ = [], this.push = function(S) {
      me.collectDtsInfo(o, S), S.nalUnitType !== "seq_parameter_set_rbsp" || d || (d = S.config, o.sps = [S.data], Ta.forEach(function(b) {
        o[b] = d[b];
      }, this)), S.nalUnitType !== "pic_parameter_set_rbsp" || m || (m = S.data, o.pps = [S.data]), f.push(S);
    }, this.flush = function() {
      for (var S, b, w, L, M, $, z, Q, tt = 0; f.length && f[0].nalUnitType !== "access_unit_delimiter_rbsp"; ) f.shift();
      if (f.length === 0) return this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
      if (S = Ps.groupNalsIntoFrames(f), (w = Ps.groupFramesIntoGops(S))[0][0].keyFrame || ((b = this.getGopForFusion_(f[0], o)) ? (tt = b.duration, w.unshift(b), w.byteLength += b.byteLength, w.nalCount += b.nalCount, w.pts = b.pts, w.dts = b.dts, w.duration += b.duration) : w = Ps.extendFirstKeyFrame(w)), v.length) {
        var Nt;
        if (!(Nt = h.alignGopsAtEnd ? this.alignGopsAtEnd_(w) : this.alignGopsAtStart_(w))) return this.gopCache_.unshift({ gop: w.pop(), pps: o.pps, sps: o.sps }), this.gopCache_.length = Math.min(6, this.gopCache_.length), f = [], this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
        me.clearDtsInfo(o), w = Nt;
      }
      me.collectDtsInfo(o, w), o.samples = Ps.generateSampleTable(w), M = As.mdat(Ps.concatenateNalData(w)), o.baseMediaDecodeTime = me.calculateTrackBaseMediaDecodeTime(o, h.keepOriginalTimestamps), this.trigger("processedGopsInfo", w.map(function(ge) {
        return { pts: ge.pts, dts: ge.dts, byteLength: ge.byteLength };
      })), z = w[0], Q = w[w.length - 1], this.trigger("segmentTimingInfo", Sa(o.baseMediaDecodeTime, z.dts, z.pts, Q.dts + Q.duration, Q.pts + Q.duration, tt)), this.trigger("timingInfo", { start: w[0].pts, end: w[w.length - 1].pts + w[w.length - 1].duration }), this.gopCache_.unshift({ gop: w.pop(), pps: o.pps, sps: o.sps }), this.gopCache_.length = Math.min(6, this.gopCache_.length), f = [], this.trigger("baseMediaDecodeTime", o.baseMediaDecodeTime), this.trigger("timelineStartInfo", o.timelineStartInfo), L = As.moof(c, [o]), $ = new Uint8Array(L.byteLength + M.byteLength), c++, $.set(L), $.set(M, L.byteLength), this.trigger("data", { track: o, boxes: $ }), this.resetStream_(), this.trigger("done", "VideoSegmentStream");
    }, this.reset = function() {
      this.resetStream_(), f = [], this.gopCache_.length = 0, v.length = 0, this.trigger("reset");
    }, this.resetStream_ = function() {
      me.clearDtsInfo(o), d = void 0, m = void 0;
    }, this.getGopForFusion_ = function(S) {
      var b, w, L, M, $, z = 45e3, Q = 1e4, tt = 1 / 0;
      for ($ = 0; $ < this.gopCache_.length; $++) L = (M = this.gopCache_[$]).gop, o.pps && yh(o.pps[0], M.pps[0]) && o.sps && yh(o.sps[0], M.sps[0]) && (L.dts < o.timelineStartInfo.dts || (b = S.dts - L.dts - L.duration) >= -Q && b <= z && (!w || tt > b) && (w = M, tt = b));
      return w ? w.gop : null;
    }, this.alignGopsAtStart_ = function(S) {
      var b, w, L, M, $, z, Q, tt;
      for ($ = S.byteLength, z = S.nalCount, Q = S.duration, b = w = 0; b < v.length && w < S.length && (L = v[b], M = S[w], L.pts !== M.pts); ) M.pts > L.pts ? b++ : (w++, $ -= M.byteLength, z -= M.nalCount, Q -= M.duration);
      return w === 0 ? S : w === S.length ? null : ((tt = S.slice(w)).byteLength = $, tt.duration = Q, tt.nalCount = z, tt.pts = tt[0].pts, tt.dts = tt[0].dts, tt);
    }, this.alignGopsAtEnd_ = function(S) {
      var b, w, L, M, $, z, Q;
      for (b = v.length - 1, w = S.length - 1, $ = null, z = !1; b >= 0 && w >= 0; ) {
        if (L = v[b], M = S[w], L.pts === M.pts) {
          z = !0;
          break;
        }
        L.pts > M.pts ? b-- : (b === v.length - 1 && ($ = w), w--);
      }
      if (!z && $ === null) return null;
      if ((Q = z ? w : $) === 0) return S;
      var tt = S.slice(Q), Nt = tt.reduce(function(ge, Mi) {
        return ge.byteLength += Mi.byteLength, ge.duration += Mi.duration, ge.nalCount += Mi.nalCount, ge;
      }, { byteLength: 0, duration: 0, nalCount: 0 });
      return tt.byteLength = Nt.byteLength, tt.duration = Nt.duration, tt.nalCount = Nt.nalCount, tt.pts = tt[0].pts, tt.dts = tt[0].dts, tt;
    }, this.alignGopsWith = function(S) {
      v = S;
    };
  }, Is.prototype = new Rn(), yi = function(o, h) {
    this.numberOfTracks = 0, this.metadataStream = h, (o = o || {}).remux !== void 0 ? this.remuxTracks = !!o.remux : this.remuxTracks = !0, typeof o.keepOriginalTimestamps == "boolean" ? this.keepOriginalTimestamps = o.keepOriginalTimestamps : this.keepOriginalTimestamps = !1, this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, yi.prototype.init.call(this), this.push = function(c) {
      return c.content || c.text ? this.pendingCaptions.push(c) : c.frames ? this.pendingMetadata.push(c) : (this.pendingTracks.push(c.track), this.pendingBytes += c.boxes.byteLength, c.track.type === "video" && (this.videoTrack = c.track, this.pendingBoxes.push(c.boxes)), void (c.track.type === "audio" && (this.audioTrack = c.track, this.pendingBoxes.unshift(c.boxes))));
    };
  }, yi.prototype = new Rn(), yi.prototype.flush = function(o) {
    var h, c, d, m, f = 0, v = { captions: [], captionStreams: {}, metadata: [], info: {} }, S = 0;
    if (this.pendingTracks.length < this.numberOfTracks) {
      if (o !== "VideoSegmentStream" && o !== "AudioSegmentStream" || this.remuxTracks) return;
      if (this.pendingTracks.length === 0) return this.emittedTracks++, void (this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0));
    }
    if (this.videoTrack ? (S = this.videoTrack.timelineStartInfo.pts, Ta.forEach(function(b) {
      v.info[b] = this.videoTrack[b];
    }, this)) : this.audioTrack && (S = this.audioTrack.timelineStartInfo.pts, ba.forEach(function(b) {
      v.info[b] = this.audioTrack[b];
    }, this)), this.videoTrack || this.audioTrack) {
      for (this.pendingTracks.length === 1 ? v.type = this.pendingTracks[0].type : v.type = "combined", this.emittedTracks += this.pendingTracks.length, d = As.initSegment(this.pendingTracks), v.initSegment = new Uint8Array(d.byteLength), v.initSegment.set(d), v.data = new Uint8Array(this.pendingBytes), m = 0; m < this.pendingBoxes.length; m++) v.data.set(this.pendingBoxes[m], f), f += this.pendingBoxes[m].byteLength;
      for (m = 0; m < this.pendingCaptions.length; m++) (h = this.pendingCaptions[m]).startTime = Un.metadataTsToSeconds(h.startPts, S, this.keepOriginalTimestamps), h.endTime = Un.metadataTsToSeconds(h.endPts, S, this.keepOriginalTimestamps), v.captionStreams[h.stream] = !0, v.captions.push(h);
      for (m = 0; m < this.pendingMetadata.length; m++) (c = this.pendingMetadata[m]).cueTime = Un.metadataTsToSeconds(c.pts, S, this.keepOriginalTimestamps), v.metadata.push(c);
      for (v.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", v), m = 0; m < v.captions.length; m++) h = v.captions[m], this.trigger("caption", h);
      for (m = 0; m < v.metadata.length; m++) c = v.metadata[m], this.trigger("id3Frame", c);
    }
    this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0);
  }, yi.prototype.setRemux = function(o) {
    this.remuxTracks = o;
  }, Nn = function(o) {
    var h, c, d = this, m = !0;
    Nn.prototype.init.call(this), o = o || {}, this.baseMediaDecodeTime = o.baseMediaDecodeTime || 0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function() {
      var f = {};
      this.transmuxPipeline_ = f, f.type = "aac", f.metadataStream = new Fe.MetadataStream(), f.aacStream = new Ug(), f.audioTimestampRolloverStream = new Fe.TimestampRolloverStream("audio"), f.timedMetadataTimestampRolloverStream = new Fe.TimestampRolloverStream("timed-metadata"), f.adtsStream = new gh(), f.coalesceStream = new yi(o, f.metadataStream), f.headOfPipeline = f.aacStream, f.aacStream.pipe(f.audioTimestampRolloverStream).pipe(f.adtsStream), f.aacStream.pipe(f.timedMetadataTimestampRolloverStream).pipe(f.metadataStream).pipe(f.coalesceStream), f.metadataStream.on("timestamp", function(v) {
        f.aacStream.setTimestamp(v.timeStamp);
      }), f.aacStream.on("data", function(v) {
        v.type !== "timed-metadata" && v.type !== "audio" || f.audioSegmentStream || (c = c || { timelineStartInfo: { baseMediaDecodeTime: d.baseMediaDecodeTime }, codec: "adts", type: "audio" }, f.coalesceStream.numberOfTracks++, f.audioSegmentStream = new Oi(c, o), f.audioSegmentStream.on("log", d.getLogTrigger_("audioSegmentStream")), f.audioSegmentStream.on("timingInfo", d.trigger.bind(d, "audioTimingInfo")), f.adtsStream.pipe(f.audioSegmentStream).pipe(f.coalesceStream), d.trigger("trackinfo", { hasAudio: !!c, hasVideo: !!h }));
      }), f.coalesceStream.on("data", this.trigger.bind(this, "data")), f.coalesceStream.on("done", this.trigger.bind(this, "done")), fh(this, f);
    }, this.setupTsPipeline = function() {
      var f = {};
      this.transmuxPipeline_ = f, f.type = "ts", f.metadataStream = new Fe.MetadataStream(), f.packetStream = new Fe.TransportPacketStream(), f.parseStream = new Fe.TransportParseStream(), f.elementaryStream = new Fe.ElementaryStream(), f.timestampRolloverStream = new Fe.TimestampRolloverStream(), f.adtsStream = new gh(), f.h264Stream = new Mg(), f.captionStream = new Fe.CaptionStream(o), f.coalesceStream = new yi(o, f.metadataStream), f.headOfPipeline = f.packetStream, f.packetStream.pipe(f.parseStream).pipe(f.elementaryStream).pipe(f.timestampRolloverStream), f.timestampRolloverStream.pipe(f.h264Stream), f.timestampRolloverStream.pipe(f.adtsStream), f.timestampRolloverStream.pipe(f.metadataStream).pipe(f.coalesceStream), f.h264Stream.pipe(f.captionStream).pipe(f.coalesceStream), f.elementaryStream.on("data", function(v) {
        var S;
        if (v.type === "metadata") {
          for (S = v.tracks.length; S--; ) h || v.tracks[S].type !== "video" ? c || v.tracks[S].type !== "audio" || ((c = v.tracks[S]).timelineStartInfo.baseMediaDecodeTime = d.baseMediaDecodeTime) : (h = v.tracks[S]).timelineStartInfo.baseMediaDecodeTime = d.baseMediaDecodeTime;
          h && !f.videoSegmentStream && (f.coalesceStream.numberOfTracks++, f.videoSegmentStream = new Is(h, o), f.videoSegmentStream.on("log", d.getLogTrigger_("videoSegmentStream")), f.videoSegmentStream.on("timelineStartInfo", function(b) {
            c && !o.keepOriginalTimestamps && (c.timelineStartInfo = b, f.audioSegmentStream.setEarliestDts(b.dts - d.baseMediaDecodeTime));
          }), f.videoSegmentStream.on("processedGopsInfo", d.trigger.bind(d, "gopInfo")), f.videoSegmentStream.on("segmentTimingInfo", d.trigger.bind(d, "videoSegmentTimingInfo")), f.videoSegmentStream.on("baseMediaDecodeTime", function(b) {
            c && f.audioSegmentStream.setVideoBaseMediaDecodeTime(b);
          }), f.videoSegmentStream.on("timingInfo", d.trigger.bind(d, "videoTimingInfo")), f.h264Stream.pipe(f.videoSegmentStream).pipe(f.coalesceStream)), c && !f.audioSegmentStream && (f.coalesceStream.numberOfTracks++, f.audioSegmentStream = new Oi(c, o), f.audioSegmentStream.on("log", d.getLogTrigger_("audioSegmentStream")), f.audioSegmentStream.on("timingInfo", d.trigger.bind(d, "audioTimingInfo")), f.audioSegmentStream.on("segmentTimingInfo", d.trigger.bind(d, "audioSegmentTimingInfo")), f.adtsStream.pipe(f.audioSegmentStream).pipe(f.coalesceStream)), d.trigger("trackinfo", { hasAudio: !!c, hasVideo: !!h });
        }
      }), f.coalesceStream.on("data", this.trigger.bind(this, "data")), f.coalesceStream.on("id3Frame", function(v) {
        v.dispatchType = f.metadataStream.dispatchType, d.trigger("id3Frame", v);
      }), f.coalesceStream.on("caption", this.trigger.bind(this, "caption")), f.coalesceStream.on("done", this.trigger.bind(this, "done")), fh(this, f);
    }, this.setBaseMediaDecodeTime = function(f) {
      var v = this.transmuxPipeline_;
      o.keepOriginalTimestamps || (this.baseMediaDecodeTime = f), c && (c.timelineStartInfo.dts = void 0, c.timelineStartInfo.pts = void 0, me.clearDtsInfo(c), v.audioTimestampRolloverStream && v.audioTimestampRolloverStream.discontinuity()), h && (v.videoSegmentStream && (v.videoSegmentStream.gopCache_ = []), h.timelineStartInfo.dts = void 0, h.timelineStartInfo.pts = void 0, me.clearDtsInfo(h), v.captionStream.reset()), v.timestampRolloverStream && v.timestampRolloverStream.discontinuity();
    }, this.setAudioAppendStart = function(f) {
      c && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(f);
    }, this.setRemux = function(f) {
      var v = this.transmuxPipeline_;
      o.remux = f, v && v.coalesceStream && v.coalesceStream.setRemux(f);
    }, this.alignGopsWith = function(f) {
      h && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(f);
    }, this.getLogTrigger_ = function(f) {
      var v = this;
      return function(S) {
        S.stream = f, v.trigger("log", S);
      };
    }, this.push = function(f) {
      if (m) {
        var v = Bg(f);
        v && this.transmuxPipeline_.type !== "aac" ? this.setupAacPipeline() : v || this.transmuxPipeline_.type === "ts" || this.setupTsPipeline(), m = !1;
      }
      this.transmuxPipeline_.headOfPipeline.push(f);
    }, this.flush = function() {
      m = !0, this.transmuxPipeline_.headOfPipeline.flush();
    }, this.endTimeline = function() {
      this.transmuxPipeline_.headOfPipeline.endTimeline();
    }, this.reset = function() {
      this.transmuxPipeline_.headOfPipeline && this.transmuxPipeline_.headOfPipeline.reset();
    }, this.resetCaptions = function() {
      this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset();
    };
  }, Nn.prototype = new Rn();
  var _h, vh, bh, Th, Sh, Ea, Eh, jg = { Transmuxer: Nn, VideoSegmentStream: Is, AudioSegmentStream: Oi, AUDIO_PROPERTIES: ba, VIDEO_PROPERTIES: Ta, generateSegmentTimingInfo: Sa }, Bn = { toUnsigned: function(o) {
    return o >>> 0;
  }, toHexString: function(o) {
    return ("00" + o.toString(16)).slice(-2);
  } }, wh = function(o) {
    var h = "";
    return h += String.fromCharCode(o[0]), h += String.fromCharCode(o[1]), h += String.fromCharCode(o[2]), h += String.fromCharCode(o[3]);
  }, $g = Bn.toUnsigned, Hg = wh, Ch = function(o, h) {
    var c, d, m, f, v, S = [];
    if (!h.length) return null;
    for (c = 0; c < o.byteLength; ) d = $g(o[c] << 24 | o[c + 1] << 16 | o[c + 2] << 8 | o[c + 3]), m = Hg(o.subarray(c + 4, c + 8)), f = d > 1 ? c + d : o.byteLength, m === h[0] && (h.length === 1 ? S.push(o.subarray(c + 8, f)) : (v = Ch(o.subarray(c + 8, f), h.slice(1))).length && (S = S.concat(v))), c = f;
    return S;
  }, kh = Ch, Vg = Bn.toUnsigned, zg = Tn.getUint64, xh = function(o) {
    var h = { version: o[0], flags: new Uint8Array(o.subarray(1, 4)) };
    return h.version === 1 ? h.baseMediaDecodeTime = zg(o.subarray(4)) : h.baseMediaDecodeTime = Vg(o[4] << 24 | o[5] << 16 | o[6] << 8 | o[7]), h;
  }, Ih = function(o) {
    return { isLeading: (12 & o[0]) >>> 2, dependsOn: 3 & o[0], isDependedOn: (192 & o[1]) >>> 6, hasRedundancy: (48 & o[1]) >>> 4, paddingValue: (14 & o[1]) >>> 1, isNonSyncSample: 1 & o[1], degradationPriority: o[2] << 8 | o[3] };
  }, Ah = function(o) {
    var h, c = { version: o[0], flags: new Uint8Array(o.subarray(1, 4)), samples: [] }, d = new DataView(o.buffer, o.byteOffset, o.byteLength), m = 1 & c.flags[2], f = 4 & c.flags[2], v = 1 & c.flags[1], S = 2 & c.flags[1], b = 4 & c.flags[1], w = 8 & c.flags[1], L = d.getUint32(4), M = 8;
    for (m && (c.dataOffset = d.getInt32(M), M += 4), f && L && (h = { flags: Ih(o.subarray(M, M + 4)) }, M += 4, v && (h.duration = d.getUint32(M), M += 4), S && (h.size = d.getUint32(M), M += 4), w && (c.version === 1 ? h.compositionTimeOffset = d.getInt32(M) : h.compositionTimeOffset = d.getUint32(M), M += 4), c.samples.push(h), L--); L--; ) h = {}, v && (h.duration = d.getUint32(M), M += 4), S && (h.size = d.getUint32(M), M += 4), b && (h.flags = Ih(o.subarray(M, M + 4)), M += 4), w && (c.version === 1 ? h.compositionTimeOffset = d.getInt32(M) : h.compositionTimeOffset = d.getUint32(M), M += 4), c.samples.push(h);
    return c;
  }, Ph = function(o) {
    var h, c = new DataView(o.buffer, o.byteOffset, o.byteLength), d = { version: o[0], flags: new Uint8Array(o.subarray(1, 4)), trackId: c.getUint32(4) }, m = 1 & d.flags[2], f = 2 & d.flags[2], v = 8 & d.flags[2], S = 16 & d.flags[2], b = 32 & d.flags[2], w = 65536 & d.flags[0], L = 131072 & d.flags[0];
    return h = 8, m && (h += 4, d.baseDataOffset = c.getUint32(12), h += 4), f && (d.sampleDescriptionIndex = c.getUint32(h), h += 4), v && (d.defaultSampleDuration = c.getUint32(h), h += 4), S && (d.defaultSampleSize = c.getUint32(h), h += 4), b && (d.defaultSampleFlags = c.getUint32(h)), w && (d.durationIsEmpty = !0), !m && L && (d.baseDataOffsetIsMoof = !0), d;
  }, Dh = typeof window < "u" ? window : i !== void 0 ? i : typeof self < "u" ? self : {}, Wg = th.discardEmulationPreventionBytes, Gg = eh.CaptionStream, Ds = kh, Xg = xh, Kg = Ah, Yg = Ph, Lh = Dh, Qg = function(o, h) {
    for (var c = o, d = 0; d < h.length; d++) {
      var m = h[d];
      if (c < m.size) return m;
      c -= m.size;
    }
    return null;
  }, Jg = function(o, h, c) {
    var d, m, f, v, S = new DataView(o.buffer, o.byteOffset, o.byteLength), b = { logs: [], seiNals: [] };
    for (m = 0; m + 4 < o.length; m += f) if (f = S.getUint32(m), m += 4, !(f <= 0)) switch (31 & o[m]) {
      case 6:
        var w = o.subarray(m + 1, m + 1 + f), L = Qg(m, h);
        if (d = { nalUnitType: "sei_rbsp", size: f, data: w, escapedRBSP: Wg(w), trackId: c }, L) d.pts = L.pts, d.dts = L.dts, v = L;
        else {
          if (!v) {
            b.logs.push({ level: "warn", message: "We've encountered a nal unit without data at " + m + " for trackId " + c + ". See mux.js#223." });
            break;
          }
          d.pts = v.pts, d.dts = v.dts;
        }
        b.seiNals.push(d);
    }
    return b;
  }, Zg = function(o, h, c) {
    var d = h, m = c.defaultSampleDuration || 0, f = c.defaultSampleSize || 0, v = c.trackId, S = [];
    return o.forEach(function(b) {
      var w = Kg(b).samples;
      w.forEach(function(L) {
        L.duration === void 0 && (L.duration = m), L.size === void 0 && (L.size = f), L.trackId = v, L.dts = d, L.compositionTimeOffset === void 0 && (L.compositionTimeOffset = 0), typeof d == "bigint" ? (L.pts = d + Lh.BigInt(L.compositionTimeOffset), d += Lh.BigInt(L.duration)) : (L.pts = d + L.compositionTimeOffset, d += L.duration);
      }), S = S.concat(w);
    }), S;
  }, tf = function(o, h) {
    var c = Ds(o, ["moof", "traf"]), d = Ds(o, ["mdat"]), m = {}, f = [];
    return d.forEach(function(v, S) {
      var b = c[S];
      f.push({ mdat: v, traf: b });
    }), f.forEach(function(v) {
      var S, b, w = v.mdat, L = v.traf, M = Ds(L, ["tfhd"]), $ = Yg(M[0]), z = $.trackId, Q = Ds(L, ["tfdt"]), tt = Q.length > 0 ? Xg(Q[0]).baseMediaDecodeTime : 0, Nt = Ds(L, ["trun"]);
      h === z && Nt.length > 0 && (S = Zg(Nt, tt, $), b = Jg(w, S, z), m[z] || (m[z] = { seiNals: [], logs: [] }), m[z].seiNals = m[z].seiNals.concat(b.seiNals), m[z].logs = m[z].logs.concat(b.logs));
    }), m;
  }, ef = function(o, h, c) {
    if (h === null) return null;
    var d = tf(o, h)[h] || {};
    return { seiNals: d.seiNals, logs: d.logs, timescale: c };
  }, sf = function() {
    var o, h, c, d, m, f, v = !1;
    this.isInitialized = function() {
      return v;
    }, this.init = function(S) {
      o = new Gg(), v = !0, f = !!S && S.isPartial, o.on("data", function(b) {
        b.startTime = b.startPts / d, b.endTime = b.endPts / d, m.captions.push(b), m.captionStreams[b.stream] = !0;
      }), o.on("log", function(b) {
        m.logs.push(b);
      });
    }, this.isNewInit = function(S, b) {
      return !(S && S.length === 0 || b && typeof b == "object" && Object.keys(b).length === 0) && (c !== S[0] || d !== b[c]);
    }, this.parse = function(S, b, w) {
      var L;
      if (!this.isInitialized() || !b || !w) return null;
      if (this.isNewInit(b, w)) c = b[0], d = w[c];
      else if (c === null || !d) return h.push(S), null;
      for (; h.length > 0; ) {
        var M = h.shift();
        this.parse(M, b, w);
      }
      return (L = ef(S, c, d)) && L.logs && (m.logs = m.logs.concat(L.logs)), L !== null && L.seiNals ? (this.pushNals(L.seiNals), this.flushStream(), m) : m.logs.length ? { logs: m.logs, captions: [], captionStreams: [] } : null;
    }, this.pushNals = function(S) {
      if (!this.isInitialized() || !S || S.length === 0) return null;
      S.forEach(function(b) {
        o.push(b);
      });
    }, this.flushStream = function() {
      if (!this.isInitialized()) return null;
      f ? o.partialFlush() : o.flush();
    }, this.clearParsedCaptions = function() {
      m.captions = [], m.captionStreams = {}, m.logs = [];
    }, this.resetCaptionStream = function() {
      if (!this.isInitialized()) return null;
      o.reset();
    }, this.clearAllCaptions = function() {
      this.clearParsedCaptions(), this.resetCaptionStream();
    }, this.reset = function() {
      h = [], c = null, d = null, m ? this.clearParsedCaptions() : m = { captions: [], captionStreams: {}, logs: [] }, this.resetCaptionStream();
    }, this.reset();
  }, nf = sf, Fn = function(o) {
    for (var h = 0, c = String.fromCharCode(o[h]), d = ""; c !== "\0"; ) d += c, h++, c = String.fromCharCode(o[h]);
    return d += c;
  }, rf = Tn.getUint64, af = function(o) {
    var h, c, d, m, f, v, S, b = 4, w = o[0];
    if (w === 0) b += (h = Fn(o.subarray(b))).length, b += (c = Fn(o.subarray(b))).length, d = (L = new DataView(o.buffer)).getUint32(b), b += 4, f = L.getUint32(b), b += 4, v = L.getUint32(b), b += 4, S = L.getUint32(b), b += 4;
    else if (w === 1) {
      var L;
      d = (L = new DataView(o.buffer)).getUint32(b), b += 4, m = rf(o.subarray(b)), b += 8, v = L.getUint32(b), b += 4, S = L.getUint32(b), b += 4, b += (h = Fn(o.subarray(b))).length, b += (c = Fn(o.subarray(b))).length;
    }
    var M = { scheme_id_uri: h, value: c, timescale: d || 1, presentation_time: m, presentation_time_delta: f, event_duration: v, id: S, message_data: new Uint8Array(o.subarray(b, o.byteLength)) };
    return lf(w, M) ? M : void 0;
  }, of = function(o, h, c, d) {
    return o || o === 0 ? o / h : d + c / h;
  }, lf = function(o, h) {
    var c = h.scheme_id_uri !== "\0", d = o === 0 && Oh(h.presentation_time_delta) && c, m = o === 1 && Oh(h.presentation_time) && c;
    return !(o > 1) && d || m;
  }, Oh = function(o) {
    return o !== void 0 || o !== null;
  }, hf = { parseEmsgBox: af, scaleTime: of }, qn = Bn.toUnsigned, Ls = Bn.toHexString, Ct = kh, Ni = wh, wa = hf, uf = Ph, df = Ah, cf = xh, pf = Tn.getUint64, Ca = Dh, mf = rh.parseId3Frames;
  _h = function(o) {
    var h = {};
    return Ct(o, ["moov", "trak"]).reduce(function(c, d) {
      var m, f, v, S, b;
      return (m = Ct(d, ["tkhd"])[0]) ? (f = m[0], S = qn(m[v = f === 0 ? 12 : 20] << 24 | m[v + 1] << 16 | m[v + 2] << 8 | m[v + 3]), (b = Ct(d, ["mdia", "mdhd"])[0]) ? (v = (f = b[0]) === 0 ? 12 : 20, c[S] = qn(b[v] << 24 | b[v + 1] << 16 | b[v + 2] << 8 | b[v + 3]), c) : null) : null;
    }, h);
  }, vh = function(o, h) {
    var c = Ct(h, ["moof", "traf"]).reduce(function(d, m) {
      var f, v = Ct(m, ["tfhd"])[0], S = qn(v[4] << 24 | v[5] << 16 | v[6] << 8 | v[7]), b = o[S] || 9e4, w = Ct(m, ["tfdt"])[0], L = new DataView(w.buffer, w.byteOffset, w.byteLength);
      let M;
      return typeof (f = w[0] === 1 ? pf(w.subarray(4, 12)) : L.getUint32(4)) == "bigint" ? M = f / Ca.BigInt(b) : typeof f != "number" || isNaN(f) || (M = f / b), M < Number.MAX_SAFE_INTEGER && (M = Number(M)), M < d && (d = M), d;
    }, 1 / 0);
    return typeof c == "bigint" || isFinite(c) ? c : 0;
  }, bh = function(o, h) {
    var c, d = Ct(h, ["moof", "traf"]), m = 0, f = 0;
    if (d && d.length) {
      var v = Ct(d[0], ["tfhd"])[0], S = Ct(d[0], ["trun"])[0], b = Ct(d[0], ["tfdt"])[0];
      if (v && (c = uf(v).trackId), b && (m = cf(b).baseMediaDecodeTime), S) {
        var w = df(S);
        w.samples && w.samples.length && (f = w.samples[0].compositionTimeOffset || 0);
      }
    }
    var L = o[c] || 9e4;
    typeof m == "bigint" && (f = Ca.BigInt(f), L = Ca.BigInt(L));
    var M = (m + f) / L;
    return typeof M == "bigint" && M < Number.MAX_SAFE_INTEGER && (M = Number(M)), M;
  }, Th = function(o) {
    var h = Ct(o, ["moov", "trak"]), c = [];
    return h.forEach(function(d) {
      var m = Ct(d, ["mdia", "hdlr"]), f = Ct(d, ["tkhd"]);
      m.forEach(function(v, S) {
        var b, w, L = Ni(v.subarray(8, 12)), M = f[S];
        L === "vide" && (w = (b = new DataView(M.buffer, M.byteOffset, M.byteLength)).getUint8(0) === 0 ? b.getUint32(12) : b.getUint32(20), c.push(w));
      });
    }), c;
  }, Ea = function(o) {
    var h = o[0] === 0 ? 12 : 20;
    return qn(o[h] << 24 | o[h + 1] << 16 | o[h + 2] << 8 | o[h + 3]);
  }, Sh = function(o) {
    var h = Ct(o, ["moov", "trak"]), c = [];
    return h.forEach(function(d) {
      var m, f, v = {}, S = Ct(d, ["tkhd"])[0];
      S && (f = (m = new DataView(S.buffer, S.byteOffset, S.byteLength)).getUint8(0), v.id = f === 0 ? m.getUint32(12) : m.getUint32(20));
      var b = Ct(d, ["mdia", "hdlr"])[0];
      if (b) {
        var w = Ni(b.subarray(8, 12));
        v.type = w === "vide" ? "video" : w === "soun" ? "audio" : w;
      }
      var L = Ct(d, ["mdia", "minf", "stbl", "stsd"])[0];
      if (L) {
        var M = L.subarray(8);
        v.codec = Ni(M.subarray(4, 8));
        var $, z = Ct(M, [v.codec])[0];
        z && (/^[asm]vc[1-9]$/i.test(v.codec) ? ($ = z.subarray(78), Ni($.subarray(4, 8)) === "avcC" && $.length > 11 ? (v.codec += ".", v.codec += Ls($[9]), v.codec += Ls($[10]), v.codec += Ls($[11])) : v.codec = "avc1.4d400d") : /^mp4[a,v]$/i.test(v.codec) ? ($ = z.subarray(28), Ni($.subarray(4, 8)) === "esds" && $.length > 20 && $[19] !== 0 ? (v.codec += "." + Ls($[19]), v.codec += "." + Ls($[20] >>> 2 & 63).replace(/^0/, "")) : v.codec = "mp4a.40.2") : v.codec = v.codec.toLowerCase());
      }
      var Q = Ct(d, ["mdia", "mdhd"])[0];
      Q && (v.timescale = Ea(Q)), c.push(v);
    }), c;
  }, Eh = function(o, h = 0) {
    return Ct(o, ["emsg"]).map((c) => {
      var d = wa.parseEmsgBox(new Uint8Array(c)), m = mf(d.message_data);
      return { cueTime: wa.scaleTime(d.presentation_time, d.timescale, d.presentation_time_delta, h), duration: wa.scaleTime(d.event_duration, d.timescale), frames: m };
    });
  };
  var ka = { findBox: Ct, parseType: Ni, timescale: _h, startTime: vh, compositionStartTime: bh, videoTrackIds: Th, tracks: Sh, getTimescaleFromMediaHeader: Ea, getEmsgID3: Eh }, xa = In, Nh = function(o) {
    var h = 31 & o[1];
    return h <<= 8, h |= o[2];
  }, jn = function(o) {
    return !!(64 & o[1]);
  }, $n = function(o) {
    var h = 0;
    return (48 & o[3]) >>> 4 > 1 && (h += o[4] + 1), h;
  }, gf = function(o) {
    if (!jn(o)) return null;
    var h = 4 + $n(o);
    if (h >= o.byteLength) return null;
    var c, d = null;
    return 192 & (c = o[h + 7]) && ((d = {}).pts = (14 & o[h + 9]) << 27 | (255 & o[h + 10]) << 20 | (254 & o[h + 11]) << 12 | (255 & o[h + 12]) << 5 | (254 & o[h + 13]) >>> 3, d.pts *= 4, d.pts += (6 & o[h + 13]) >>> 1, d.dts = d.pts, 64 & c && (d.dts = (14 & o[h + 14]) << 27 | (255 & o[h + 15]) << 20 | (254 & o[h + 16]) << 12 | (255 & o[h + 17]) << 5 | (254 & o[h + 18]) >>> 3, d.dts *= 4, d.dts += (6 & o[h + 18]) >>> 1)), d;
  }, Ia = function(o) {
    switch (o) {
      case 5:
        return "slice_layer_without_partitioning_rbsp_idr";
      case 6:
        return "sei_rbsp";
      case 7:
        return "seq_parameter_set_rbsp";
      case 8:
        return "pic_parameter_set_rbsp";
      case 9:
        return "access_unit_delimiter_rbsp";
      default:
        return null;
    }
  }, ff = { parseType: function(o, h) {
    var c = Nh(o);
    return c === 0 ? "pat" : c === h ? "pmt" : h ? "pes" : null;
  }, parsePat: function(o) {
    var h = jn(o), c = 4 + $n(o);
    return h && (c += o[c] + 1), (31 & o[c + 10]) << 8 | o[c + 11];
  }, parsePmt: function(o) {
    var h = {}, c = jn(o), d = 4 + $n(o);
    if (c && (d += o[d] + 1), 1 & o[d + 5]) {
      var m;
      m = 3 + ((15 & o[d + 1]) << 8 | o[d + 2]) - 4;
      for (var f = 12 + ((15 & o[d + 10]) << 8 | o[d + 11]); f < m; ) {
        var v = d + f;
        h[(31 & o[v + 1]) << 8 | o[v + 2]] = o[v], f += 5 + ((15 & o[v + 3]) << 8 | o[v + 4]);
      }
      return h;
    }
  }, parsePayloadUnitStartIndicator: jn, parsePesType: function(o, h) {
    switch (h[Nh(o)]) {
      case xa.H264_STREAM_TYPE:
        return "video";
      case xa.ADTS_STREAM_TYPE:
        return "audio";
      case xa.METADATA_STREAM_TYPE:
        return "timed-metadata";
      default:
        return null;
    }
  }, parsePesTime: gf, videoPacketContainsKeyFrame: function(o) {
    for (var h = 4 + $n(o), c = o.subarray(h), d = 0, m = 0, f = !1; m < c.byteLength - 3; m++) if (c[m + 2] === 1) {
      d = m + 5;
      break;
    }
    for (; d < c.byteLength; ) switch (c[d]) {
      case 0:
        if (c[d - 1] !== 0) {
          d += 2;
          break;
        }
        if (c[d - 2] !== 0) {
          d++;
          break;
        }
        m + 3 !== d - 2 && Ia(31 & c[m + 3]) === "slice_layer_without_partitioning_rbsp_idr" && (f = !0);
        do
          d++;
        while (c[d] !== 1 && d < c.length);
        m = d - 2, d += 3;
        break;
      case 1:
        if (c[d - 1] !== 0 || c[d - 2] !== 0) {
          d += 3;
          break;
        }
        Ia(31 & c[m + 3]) === "slice_layer_without_partitioning_rbsp_idr" && (f = !0), m = d - 2, d += 3;
        break;
      default:
        d += 3;
    }
    return c = c.subarray(m), d -= m, m = 0, c && c.byteLength > 3 && Ia(31 & c[m + 3]) === "slice_layer_without_partitioning_rbsp_idr" && (f = !0), f;
  } }, Rh = In, Ri = sh.handleRollover, rt = {};
  rt.ts = ff, rt.aac = va;
  var _i = dt.ONE_SECOND_IN_TS, Ut = 188, Se = 71, yf = function(o, h) {
    for (var c, d = 0, m = Ut; m < o.byteLength; ) if (o[d] !== Se || o[m] !== Se) d++, m++;
    else {
      switch (c = o.subarray(d, m), rt.ts.parseType(c, h.pid)) {
        case "pat":
          h.pid = rt.ts.parsePat(c);
          break;
        case "pmt":
          var f = rt.ts.parsePmt(c);
          h.table = h.table || {}, Object.keys(f).forEach(function(v) {
            h.table[v] = f[v];
          });
      }
      d += Ut, m += Ut;
    }
  }, Mh = function(o, h, c) {
    for (var d, m, f, v, S = 0, b = Ut, w = !1; b <= o.byteLength; ) if (o[S] !== Se || o[b] !== Se && b !== o.byteLength) S++, b++;
    else {
      if (d = o.subarray(S, b), rt.ts.parseType(d, h.pid) === "pes" && (m = rt.ts.parsePesType(d, h.table), f = rt.ts.parsePayloadUnitStartIndicator(d), m === "audio" && f && (v = rt.ts.parsePesTime(d)) && (v.type = "audio", c.audio.push(v), w = !0)), w) break;
      S += Ut, b += Ut;
    }
    for (S = (b = o.byteLength) - Ut, w = !1; S >= 0; ) if (o[S] !== Se || o[b] !== Se && b !== o.byteLength) S--, b--;
    else {
      if (d = o.subarray(S, b), rt.ts.parseType(d, h.pid) === "pes" && (m = rt.ts.parsePesType(d, h.table), f = rt.ts.parsePayloadUnitStartIndicator(d), m === "audio" && f && (v = rt.ts.parsePesTime(d)) && (v.type = "audio", c.audio.push(v), w = !0)), w) break;
      S -= Ut, b -= Ut;
    }
  }, _f = function(o, h, c) {
    for (var d, m, f, v, S, b, w, L = 0, M = Ut, $ = !1, z = { data: [], size: 0 }; M < o.byteLength; ) if (o[L] !== Se || o[M] !== Se) L++, M++;
    else {
      if (d = o.subarray(L, M), rt.ts.parseType(d, h.pid) === "pes" && (m = rt.ts.parsePesType(d, h.table), f = rt.ts.parsePayloadUnitStartIndicator(d), m === "video" && (f && !$ && (v = rt.ts.parsePesTime(d)) && (v.type = "video", c.video.push(v), $ = !0), !c.firstKeyFrame))) {
        if (f && z.size !== 0) {
          for (S = new Uint8Array(z.size), b = 0; z.data.length; ) w = z.data.shift(), S.set(w, b), b += w.byteLength;
          if (rt.ts.videoPacketContainsKeyFrame(S)) {
            var Q = rt.ts.parsePesTime(S);
            Q ? (c.firstKeyFrame = Q, c.firstKeyFrame.type = "video") : console.warn("Failed to extract PTS/DTS from PES at first keyframe. This could be an unusual TS segment, or else mux.js did not parse your TS segment correctly. If you know your TS segments do contain PTS/DTS on keyframes please file a bug report! You can try ffprobe to double check for yourself.");
          }
          z.size = 0;
        }
        z.data.push(d), z.size += d.byteLength;
      }
      if ($ && c.firstKeyFrame) break;
      L += Ut, M += Ut;
    }
    for (L = (M = o.byteLength) - Ut, $ = !1; L >= 0; ) if (o[L] !== Se || o[M] !== Se) L--, M--;
    else {
      if (d = o.subarray(L, M), rt.ts.parseType(d, h.pid) === "pes" && (m = rt.ts.parsePesType(d, h.table), f = rt.ts.parsePayloadUnitStartIndicator(d), m === "video" && f && (v = rt.ts.parsePesTime(d)) && (v.type = "video", c.video.push(v), $ = !0)), $) break;
      L -= Ut, M -= Ut;
    }
  }, vf = function(o, h) {
    if (o.audio && o.audio.length) {
      var c = h;
      (c === void 0 || isNaN(c)) && (c = o.audio[0].dts), o.audio.forEach(function(f) {
        f.dts = Ri(f.dts, c), f.pts = Ri(f.pts, c), f.dtsTime = f.dts / _i, f.ptsTime = f.pts / _i;
      });
    }
    if (o.video && o.video.length) {
      var d = h;
      if ((d === void 0 || isNaN(d)) && (d = o.video[0].dts), o.video.forEach(function(f) {
        f.dts = Ri(f.dts, d), f.pts = Ri(f.pts, d), f.dtsTime = f.dts / _i, f.ptsTime = f.pts / _i;
      }), o.firstKeyFrame) {
        var m = o.firstKeyFrame;
        m.dts = Ri(m.dts, d), m.pts = Ri(m.pts, d), m.dtsTime = m.dts / _i, m.ptsTime = m.pts / _i;
      }
    }
  }, bf = function(o) {
    for (var h, c = !1, d = 0, m = null, f = null, v = 0, S = 0; o.length - S >= 3; ) {
      switch (rt.aac.parseType(o, S)) {
        case "timed-metadata":
          if (o.length - S < 10) {
            c = !0;
            break;
          }
          if ((v = rt.aac.parseId3TagSize(o, S)) > o.length) {
            c = !0;
            break;
          }
          f === null && (h = o.subarray(S, S + v), f = rt.aac.parseAacTimestamp(h)), S += v;
          break;
        case "audio":
          if (o.length - S < 7) {
            c = !0;
            break;
          }
          if ((v = rt.aac.parseAdtsSize(o, S)) > o.length) {
            c = !0;
            break;
          }
          m === null && (h = o.subarray(S, S + v), m = rt.aac.parseSampleRate(h)), d++, S += v;
          break;
        default:
          S++;
      }
      if (c) return null;
    }
    if (m === null || f === null) return null;
    var b = _i / m;
    return { audio: [{ type: "audio", dts: f, pts: f }, { type: "audio", dts: f + 1024 * d * b, pts: f + 1024 * d * b }] };
  }, Tf = function(o) {
    var h = { pid: null, table: null }, c = {};
    for (var d in yf(o, h), h.table)
      if (h.table.hasOwnProperty(d)) switch (h.table[d]) {
        case Rh.H264_STREAM_TYPE:
          c.video = [], _f(o, h, c), c.video.length === 0 && delete c.video;
          break;
        case Rh.ADTS_STREAM_TYPE:
          c.audio = [], Mh(o, h, c), c.audio.length === 0 && delete c.audio;
      }
    return c;
  }, Sf = { inspect: function(o, h) {
    var c;
    return (c = rt.aac.isLikelyAacData(o) ? bf(o) : Tf(o)) && (c.audio || c.video) ? (vf(c, h), c) : null;
  }, parseAudioPes_: Mh };
  const Ef = function(o, h) {
    h.on("data", function(c) {
      const d = c.initSegment;
      c.initSegment = { data: d.buffer, byteOffset: d.byteOffset, byteLength: d.byteLength };
      const m = c.data;
      c.data = m.buffer, o.postMessage({ action: "data", segment: c, byteOffset: m.byteOffset, byteLength: m.byteLength }, [c.data]);
    }), h.on("done", function(c) {
      o.postMessage({ action: "done" });
    }), h.on("gopInfo", function(c) {
      o.postMessage({ action: "gopInfo", gopInfo: c });
    }), h.on("videoSegmentTimingInfo", function(c) {
      const d = { start: { decode: dt.videoTsToSeconds(c.start.dts), presentation: dt.videoTsToSeconds(c.start.pts) }, end: { decode: dt.videoTsToSeconds(c.end.dts), presentation: dt.videoTsToSeconds(c.end.pts) }, baseMediaDecodeTime: dt.videoTsToSeconds(c.baseMediaDecodeTime) };
      c.prependedContentDuration && (d.prependedContentDuration = dt.videoTsToSeconds(c.prependedContentDuration)), o.postMessage({ action: "videoSegmentTimingInfo", videoSegmentTimingInfo: d });
    }), h.on("audioSegmentTimingInfo", function(c) {
      const d = { start: { decode: dt.videoTsToSeconds(c.start.dts), presentation: dt.videoTsToSeconds(c.start.pts) }, end: { decode: dt.videoTsToSeconds(c.end.dts), presentation: dt.videoTsToSeconds(c.end.pts) }, baseMediaDecodeTime: dt.videoTsToSeconds(c.baseMediaDecodeTime) };
      c.prependedContentDuration && (d.prependedContentDuration = dt.videoTsToSeconds(c.prependedContentDuration)), o.postMessage({ action: "audioSegmentTimingInfo", audioSegmentTimingInfo: d });
    }), h.on("id3Frame", function(c) {
      o.postMessage({ action: "id3Frame", id3Frame: c });
    }), h.on("caption", function(c) {
      o.postMessage({ action: "caption", caption: c });
    }), h.on("trackinfo", function(c) {
      o.postMessage({ action: "trackinfo", trackInfo: c });
    }), h.on("audioTimingInfo", function(c) {
      o.postMessage({ action: "audioTimingInfo", audioTimingInfo: { start: dt.videoTsToSeconds(c.start), end: dt.videoTsToSeconds(c.end) } });
    }), h.on("videoTimingInfo", function(c) {
      o.postMessage({ action: "videoTimingInfo", videoTimingInfo: { start: dt.videoTsToSeconds(c.start), end: dt.videoTsToSeconds(c.end) } });
    }), h.on("log", function(c) {
      o.postMessage({ action: "log", log: c });
    });
  };
  class Uh {
    constructor(h, c) {
      this.options = c || {}, this.self = h, this.init();
    }
    init() {
      this.transmuxer && this.transmuxer.dispose(), this.transmuxer = new jg.Transmuxer(this.options), Ef(this.self, this.transmuxer);
    }
    pushMp4Captions(h) {
      this.captionParser || (this.captionParser = new nf(), this.captionParser.init());
      const c = new Uint8Array(h.data, h.byteOffset, h.byteLength), d = this.captionParser.parse(c, h.trackIds, h.timescales);
      this.self.postMessage({ action: "mp4Captions", captions: d && d.captions || [], logs: d && d.logs || [], data: c.buffer }, [c.buffer]);
    }
    probeMp4StartTime({ timescales: h, data: c }) {
      const d = ka.startTime(h, c);
      this.self.postMessage({ action: "probeMp4StartTime", startTime: d, data: c }, [c.buffer]);
    }
    probeMp4Tracks({ data: h }) {
      const c = ka.tracks(h);
      this.self.postMessage({ action: "probeMp4Tracks", tracks: c, data: h }, [h.buffer]);
    }
    probeEmsgID3({ data: h, offset: c }) {
      const d = ka.getEmsgID3(h, c);
      this.self.postMessage({ action: "probeEmsgID3", id3Frames: d, emsgData: h }, [h.buffer]);
    }
    probeTs({ data: h, baseStartTime: c }) {
      const d = typeof c != "number" || isNaN(c) ? void 0 : c * dt.ONE_SECOND_IN_TS, m = Sf.inspect(h, d);
      let f = null;
      m && (f = { hasVideo: m.video && m.video.length === 2 || !1, hasAudio: m.audio && m.audio.length === 2 || !1 }, f.hasVideo && (f.videoStart = m.video[0].ptsTime), f.hasAudio && (f.audioStart = m.audio[0].ptsTime)), this.self.postMessage({ action: "probeTs", result: f, data: h }, [h.buffer]);
    }
    clearAllMp4Captions() {
      this.captionParser && this.captionParser.clearAllCaptions();
    }
    clearParsedMp4Captions() {
      this.captionParser && this.captionParser.clearParsedCaptions();
    }
    push(h) {
      const c = new Uint8Array(h.data, h.byteOffset, h.byteLength);
      this.transmuxer.push(c);
    }
    reset() {
      this.transmuxer.reset();
    }
    setTimestampOffset(h) {
      const c = h.timestampOffset || 0;
      this.transmuxer.setBaseMediaDecodeTime(Math.round(dt.secondsToVideoTs(c)));
    }
    setAudioAppendStart(h) {
      this.transmuxer.setAudioAppendStart(Math.ceil(dt.secondsToVideoTs(h.appendStart)));
    }
    setRemux(h) {
      this.transmuxer.setRemux(h.remux);
    }
    flush(h) {
      this.transmuxer.flush(), self.postMessage({ action: "done", type: "transmuxed" });
    }
    endTimeline() {
      this.transmuxer.endTimeline(), self.postMessage({ action: "endedtimeline", type: "transmuxed" });
    }
    alignGopsWith(h) {
      this.transmuxer.alignGopsWith(h.gopsToAlignWith.slice());
    }
  }
  self.onmessage = function(o) {
    o.data.action === "init" && o.data.options ? this.messageHandlers = new Uh(self, o.data.options) : (this.messageHandlers || (this.messageHandlers = new Uh(self)), o.data && o.data.action && o.data.action !== "init" && this.messageHandlers[o.data.action] && this.messageHandlers[o.data.action](o.data));
  };
}));
var OT = Im(LT);
const NT = (i, t, e) => {
  const { type: s, initSegment: n, captions: r, captionStreams: a, metadata: l, videoFrameDtsTime: u, videoFramePtsTime: p } = i.data.segment;
  t.buffer.push({ captions: r, captionStreams: a, metadata: l });
  const g = i.data.segment.boxes || { data: i.data.segment.data }, y = { type: s, data: new Uint8Array(g.data, g.data.byteOffset, g.data.byteLength), initSegment: new Uint8Array(n.data, n.byteOffset, n.byteLength) };
  u !== void 0 && (y.videoFrameDtsTime = u), p !== void 0 && (y.videoFramePtsTime = p), e(y);
}, RT = ({ transmuxedData: i, callback: t }) => {
  i.buffer = [], t(i);
}, MT = (i, t) => {
  t.gopInfo = i.data.gopInfo;
}, Dm = (i) => {
  const { transmuxer: t, bytes: e, audioAppendStart: s, gopsToAlignWith: n, remux: r, onData: a, onTrackInfo: l, onAudioTimingInfo: u, onVideoTimingInfo: p, onVideoSegmentTimingInfo: g, onAudioSegmentTimingInfo: y, onId3: T, onCaptions: C, onDone: _, onEndedTimeline: k, onTransmuxerLog: x, isEndOfTimeline: A } = i, I = { buffer: [] };
  let O = A;
  const N = (P) => {
    t.currentTransmux === i && (P.data.action === "data" && NT(P, I, a), P.data.action === "trackinfo" && l(P.data.trackInfo), P.data.action === "gopInfo" && MT(P, I), P.data.action === "audioTimingInfo" && u(P.data.audioTimingInfo), P.data.action === "videoTimingInfo" && p(P.data.videoTimingInfo), P.data.action === "videoSegmentTimingInfo" && g(P.data.videoSegmentTimingInfo), P.data.action === "audioSegmentTimingInfo" && y(P.data.audioSegmentTimingInfo), P.data.action === "id3Frame" && T([P.data.id3Frame], P.data.id3Frame.dispatchType), P.data.action === "caption" && C(P.data.caption), P.data.action === "endedtimeline" && (O = !1, k()), P.data.action === "log" && x(P.data.log), P.data.type === "transmuxed" && (O || (t.onmessage = null, RT({ transmuxedData: I, callback: _ }), Lm(t))));
  };
  if (t.onmessage = N, s && t.postMessage({ action: "setAudioAppendStart", appendStart: s }), Array.isArray(n) && t.postMessage({ action: "alignGopsWith", gopsToAlignWith: n }), r !== void 0 && t.postMessage({ action: "setRemux", remux: r }), e.byteLength) {
    const P = e instanceof ArrayBuffer ? e : e.buffer, j = e instanceof ArrayBuffer ? 0 : e.byteOffset;
    t.postMessage({ action: "push", data: P, byteOffset: j, byteLength: e.byteLength }, [P]);
  }
  A && t.postMessage({ action: "endTimeline" }), t.postMessage({ action: "flush" });
}, Lm = (i) => {
  i.currentTransmux = null, i.transmuxQueue.length && (i.currentTransmux = i.transmuxQueue.shift(), typeof i.currentTransmux == "function" ? i.currentTransmux() : Dm(i.currentTransmux));
}, qd = (i, t) => {
  i.postMessage({ action: t }), Lm(i);
}, jd = (i, t) => {
  if (!t.currentTransmux) return t.currentTransmux = i, void qd(t, i);
  t.transmuxQueue.push(qd.bind(null, t, i));
}, Om = (i) => {
  if (!i.transmuxer.currentTransmux) return i.transmuxer.currentTransmux = i, void Dm(i);
  i.transmuxer.transmuxQueue.push(i);
};
var _o = { reset: (i) => {
  jd("reset", i);
}, endTimeline: (i) => {
  jd("endTimeline", i);
}, transmux: Om, createTransmuxer: (i) => {
  const t = new OT();
  t.currentTransmux = null, t.transmuxQueue = [];
  const e = t.terminate;
  return t.terminate = () => (t.currentTransmux = null, t.transmuxQueue.length = 0, e.call(t)), t.postMessage({ action: "init", options: i }), t;
} };
const nn = function(i) {
  const t = i.transmuxer, e = i.endAction || i.action, s = i.callback, n = ve({}, i, { endAction: null, transmuxer: null, callback: null }), r = (a) => {
    a.data.action === e && (t.removeEventListener("message", r), a.data.data && (a.data.data = new Uint8Array(a.data.data, i.byteOffset || 0, i.byteLength || a.data.data.byteLength), i.data && (i.data = a.data.data)), s(a.data));
  };
  if (t.addEventListener("message", r), i.data) {
    const a = i.data instanceof ArrayBuffer;
    n.byteOffset = a ? 0 : i.data.byteOffset, n.byteLength = i.data.byteLength;
    const l = [a ? i.data : i.data.buffer];
    t.postMessage(n, l);
  } else t.postMessage(n);
}, Pe = { FAILURE: 2, TIMEOUT: -101, ABORTED: -102 }, sl = (i) => {
  i.forEach((t) => {
    t.abort();
  });
}, UT = (i) => ({ bandwidth: i.bandwidth, bytesReceived: i.bytesReceived || 0, roundTripTime: i.roundTripTime || 0 }), BT = (i) => {
  const t = i.target, e = { bandwidth: 1 / 0, bytesReceived: 0, roundTripTime: Date.now() - t.requestTime || 0 };
  return e.bytesReceived = i.loaded, e.bandwidth = Math.floor(e.bytesReceived / e.roundTripTime * 8 * 1e3), e;
}, Fl = (i, t) => t.timedout ? { status: t.status, message: "HLS request timed-out at URL: " + t.uri, code: Pe.TIMEOUT, xhr: t } : t.aborted ? { status: t.status, message: "HLS request aborted at URL: " + t.uri, code: Pe.ABORTED, xhr: t } : i ? { status: t.status, message: "HLS request errored at URL: " + t.uri, code: Pe.FAILURE, xhr: t } : t.responseType === "arraybuffer" && t.response.byteLength === 0 ? { status: t.status, message: "Empty HLS response at URL: " + t.uri, code: Pe.FAILURE, xhr: t } : null, $d = (i, t, e) => (s, n) => {
  const r = n.response, a = Fl(s, n);
  if (a) return e(a, i);
  if (r.byteLength !== 16) return e({ status: n.status, message: "Invalid HLS key at URL: " + n.uri, code: Pe.FAILURE, xhr: n }, i);
  const l = new DataView(r), u = new Uint32Array([l.getUint32(0), l.getUint32(4), l.getUint32(8), l.getUint32(12)]);
  for (let p = 0; p < t.length; p++) t[p].bytes = u;
  return e(null, i);
}, Nm = (i, t) => {
  const e = bl(i.map.bytes);
  if (e !== "mp4") {
    const s = i.map.resolvedUri || i.map.uri, n = e || "unknown";
    return t({ internal: !0, message: `Found unsupported ${n} container for initialization segment at URL: ${s}`, code: Pe.FAILURE, metadata: { errorType: D.Error.UnsupportedMediaInitialization, mediaType: n } });
  }
  nn({ action: "probeMp4Tracks", data: i.map.bytes, transmuxer: i.transmuxer, callback: ({ tracks: s, data: n }) => (i.map.bytes = n, s.forEach(function(r) {
    i.map.tracks = i.map.tracks || {}, i.map.tracks[r.type] || (i.map.tracks[r.type] = r, typeof r.id == "number" && r.timescale && (i.map.timescales = i.map.timescales || {}, i.map.timescales[r.id] = r.timescale));
  }), t(null)) });
}, FT = ({ segment: i, finishProcessingFn: t }) => (e, s) => {
  const n = Fl(e, s);
  if (n) return t(n, i);
  const r = new Uint8Array(s.response);
  if (i.map.key) return i.map.encryptedBytes = r, t(null, i);
  i.map.bytes = r, Nm(i, function(a) {
    if (a) return a.xhr = s, a.status = s.status, t(a, i);
    t(null, i);
  });
}, qT = ({ segment: i, finishProcessingFn: t, responseType: e }) => (s, n) => {
  const r = Fl(s, n);
  if (r) return t(r, i);
  const a = e !== "arraybuffer" && n.responseText ? PT(n.responseText.substring(i.lastReachedChar || 0)) : n.response;
  return i.stats = UT(n), i.key ? i.encryptedBytes = new Uint8Array(a) : i.bytes = new Uint8Array(a), t(null, i);
}, jT = ({ segment: i, bytes: t, trackInfoFn: e, timingInfoFn: s, videoSegmentTimingInfoFn: n, audioSegmentTimingInfoFn: r, id3Fn: a, captionsFn: l, isEndOfTimeline: u, endedTimelineFn: p, dataFn: g, doneFn: y, onTransmuxerLog: T }) => {
  const C = i.map && i.map.tracks || {}, _ = !!(C.audio && C.video);
  let k = s.bind(null, i, "audio", "start");
  const x = s.bind(null, i, "audio", "end");
  let A = s.bind(null, i, "video", "start");
  const I = s.bind(null, i, "video", "end"), O = () => Om({ bytes: t, transmuxer: i.transmuxer, audioAppendStart: i.audioAppendStart, gopsToAlignWith: i.gopsToAlignWith, remux: _, onData: (N) => {
    N.type = N.type === "combined" ? "video" : N.type, g(i, N);
  }, onTrackInfo: (N) => {
    e && (_ && (N.isMuxed = !0), e(i, N));
  }, onAudioTimingInfo: (N) => {
    k && N.start !== void 0 && (k(N.start), k = null), x && N.end !== void 0 && x(N.end);
  }, onVideoTimingInfo: (N) => {
    A && N.start !== void 0 && (A(N.start), A = null), I && N.end !== void 0 && I(N.end);
  }, onVideoSegmentTimingInfo: (N) => {
    n(N);
  }, onAudioSegmentTimingInfo: (N) => {
    r(N);
  }, onId3: (N, P) => {
    a(i, N, P);
  }, onCaptions: (N) => {
    l(i, [N]);
  }, isEndOfTimeline: u, onEndedTimeline: () => {
    p();
  }, onTransmuxerLog: T, onDone: (N) => {
    y && (N.type = N.type === "combined" ? "video" : N.type, y(null, i, N));
  } });
  nn({ action: "probeTs", transmuxer: i.transmuxer, data: t, baseStartTime: i.baseStartTime, callback: (N) => {
    i.bytes = t = N.data;
    const P = N.result;
    P && (e(i, { hasAudio: P.hasAudio, hasVideo: P.hasVideo, isMuxed: _ }), e = null), O();
  } });
}, Rm = ({ segment: i, bytes: t, trackInfoFn: e, timingInfoFn: s, videoSegmentTimingInfoFn: n, audioSegmentTimingInfoFn: r, id3Fn: a, captionsFn: l, isEndOfTimeline: u, endedTimelineFn: p, dataFn: g, doneFn: y, onTransmuxerLog: T }) => {
  let C = new Uint8Array(t);
  if (wv(C)) {
    i.isFmp4 = !0;
    const { tracks: _ } = i.map, k = { isFmp4: !0, hasVideo: !!_.video, hasAudio: !!_.audio };
    _.audio && _.audio.codec && _.audio.codec !== "enca" && (k.audioCodec = _.audio.codec), _.video && _.video.codec && _.video.codec !== "encv" && (k.videoCodec = _.video.codec), _.video && _.audio && (k.isMuxed = !0), e(i, k);
    const x = (A, I) => {
      g(i, { data: C, type: k.hasAudio && !k.isMuxed ? "audio" : "video" }), I && I.length && a(i, I), A && A.length && l(i, A), y(null, i, {});
    };
    nn({ action: "probeMp4StartTime", timescales: i.map.timescales, data: C, transmuxer: i.transmuxer, callback: ({ data: A, startTime: I }) => {
      t = A.buffer, i.bytes = C = A, k.hasAudio && !k.isMuxed && s(i, "audio", "start", I), k.hasVideo && s(i, "video", "start", I), nn({ action: "probeEmsgID3", data: C, transmuxer: i.transmuxer, offset: I, callback: ({ emsgData: O, id3Frames: N }) => {
        t = O.buffer, i.bytes = C = O, _.video && O.byteLength && i.transmuxer ? nn({ action: "pushMp4Captions", endAction: "mp4Captions", transmuxer: i.transmuxer, data: C, timescales: i.map.timescales, trackIds: [_.video.id], callback: (P) => {
          t = P.data.buffer, i.bytes = C = P.data, P.logs.forEach(function(j) {
            T(st(j, { stream: "mp4CaptionParser" }));
          }), x(P.captions, N);
        } }) : x(void 0, N);
      } });
    } });
  } else if (i.transmuxer) {
    if (i.container === void 0 && (i.container = bl(C)), i.container !== "ts" && i.container !== "aac") return e(i, { hasAudio: !1, hasVideo: !1 }), void y(null, i, {});
    jT({ segment: i, bytes: t, trackInfoFn: e, timingInfoFn: s, videoSegmentTimingInfoFn: n, audioSegmentTimingInfoFn: r, id3Fn: a, captionsFn: l, isEndOfTimeline: u, endedTimelineFn: p, dataFn: g, doneFn: y, onTransmuxerLog: T });
  } else y(null, i, {});
}, Mm = function({ id: i, key: t, encryptedBytes: e, decryptionWorker: s }, n) {
  const r = (l) => {
    if (l.data.source === i) {
      s.removeEventListener("message", r);
      const u = l.data.decrypted;
      n(new Uint8Array(u.bytes, u.byteOffset, u.byteLength));
    }
  };
  let a;
  s.addEventListener("message", r), a = t.bytes.slice ? t.bytes.slice() : new Uint32Array(Array.prototype.slice.call(t.bytes)), s.postMessage(Sm({ source: i, encrypted: e, key: a, iv: t.iv }), [e.buffer, a.buffer]);
}, $T = ({ decryptionWorker: i, segment: t, trackInfoFn: e, timingInfoFn: s, videoSegmentTimingInfoFn: n, audioSegmentTimingInfoFn: r, id3Fn: a, captionsFn: l, isEndOfTimeline: u, endedTimelineFn: p, dataFn: g, doneFn: y, onTransmuxerLog: T }) => {
  Mm({ id: t.requestId, key: t.key, encryptedBytes: t.encryptedBytes, decryptionWorker: i }, (C) => {
    t.bytes = C, Rm({ segment: t, bytes: t.bytes, trackInfoFn: e, timingInfoFn: s, videoSegmentTimingInfoFn: n, audioSegmentTimingInfoFn: r, id3Fn: a, captionsFn: l, isEndOfTimeline: u, endedTimelineFn: p, dataFn: g, doneFn: y, onTransmuxerLog: T });
  });
}, HT = ({ activeXhrs: i, decryptionWorker: t, trackInfoFn: e, timingInfoFn: s, videoSegmentTimingInfoFn: n, audioSegmentTimingInfoFn: r, id3Fn: a, captionsFn: l, isEndOfTimeline: u, endedTimelineFn: p, dataFn: g, doneFn: y, onTransmuxerLog: T }) => {
  let C = 0, _ = !1;
  return (k, x) => {
    if (!_) {
      if (k) return _ = !0, sl(i), y(k, x);
      if (C += 1, C === i.length) {
        const A = function() {
          if (x.encryptedBytes) return $T({ decryptionWorker: t, segment: x, trackInfoFn: e, timingInfoFn: s, videoSegmentTimingInfoFn: n, audioSegmentTimingInfoFn: r, id3Fn: a, captionsFn: l, isEndOfTimeline: u, endedTimelineFn: p, dataFn: g, doneFn: y, onTransmuxerLog: T });
          Rm({ segment: x, bytes: x.bytes, trackInfoFn: e, timingInfoFn: s, videoSegmentTimingInfoFn: n, audioSegmentTimingInfoFn: r, id3Fn: a, captionsFn: l, isEndOfTimeline: u, endedTimelineFn: p, dataFn: g, doneFn: y, onTransmuxerLog: T });
        };
        if (x.endOfAllRequests = Date.now(), x.map && x.map.encryptedBytes && !x.map.bytes) return Mm({ decryptionWorker: t, id: x.requestId + "-init", encryptedBytes: x.map.encryptedBytes, key: x.map.key }, (I) => {
          x.map.bytes = I, Nm(x, (O) => {
            if (O) return sl(i), y(O, x);
            A();
          });
        });
        A();
      }
    }
  };
}, VT = ({ loadendState: i, abortFn: t }) => (e) => {
  e.target.aborted && t && !i.calledAbortFn && (t(), i.calledAbortFn = !0);
}, zT = ({ segment: i, progressFn: t, trackInfoFn: e, timingInfoFn: s, videoSegmentTimingInfoFn: n, audioSegmentTimingInfoFn: r, id3Fn: a, captionsFn: l, isEndOfTimeline: u, endedTimelineFn: p, dataFn: g }) => (y) => {
  if (!y.target.aborted) return i.stats = st(i.stats, BT(y)), !i.stats.firstBytesReceivedAt && i.stats.bytesReceived && (i.stats.firstBytesReceivedAt = Date.now()), t(y, i);
}, WT = ({ xhr: i, xhrOptions: t, decryptionWorker: e, segment: s, abortFn: n, progressFn: r, trackInfoFn: a, timingInfoFn: l, videoSegmentTimingInfoFn: u, audioSegmentTimingInfoFn: p, id3Fn: g, captionsFn: y, isEndOfTimeline: T, endedTimelineFn: C, dataFn: _, doneFn: k, onTransmuxerLog: x }) => {
  const A = [], I = HT({ activeXhrs: A, decryptionWorker: e, trackInfoFn: a, timingInfoFn: l, videoSegmentTimingInfoFn: u, audioSegmentTimingInfoFn: p, id3Fn: g, captionsFn: y, isEndOfTimeline: T, endedTimelineFn: C, dataFn: _, doneFn: k, onTransmuxerLog: x });
  if (s.key && !s.key.bytes) {
    const j = [s.key];
    s.map && !s.map.bytes && s.map.key && s.map.key.resolvedUri === s.key.resolvedUri && j.push(s.map.key);
    const V = i(st(t, { uri: s.key.resolvedUri, responseType: "arraybuffer", requestType: "segment-key" }), $d(s, j, I));
    A.push(V);
  }
  if (s.map && !s.map.bytes) {
    if (s.map.key && (!s.key || s.key.resolvedUri !== s.map.key.resolvedUri)) {
      const V = i(st(t, { uri: s.map.key.resolvedUri, responseType: "arraybuffer", requestType: "segment-key" }), $d(s, [s.map.key], I));
      A.push(V);
    }
    const j = i(st(t, { uri: s.map.resolvedUri, responseType: "arraybuffer", headers: el(s.map), requestType: "segment-media-initialization" }), FT({ segment: s, finishProcessingFn: I }));
    A.push(j);
  }
  const O = st(t, { uri: s.part && s.part.resolvedUri || s.resolvedUri, responseType: "arraybuffer", headers: el(s), requestType: "segment" }), N = i(O, qT({ segment: s, finishProcessingFn: I, responseType: O.responseType }));
  N.addEventListener("progress", zT({ segment: s, progressFn: r, trackInfoFn: a, timingInfoFn: l, videoSegmentTimingInfoFn: u, audioSegmentTimingInfoFn: p, id3Fn: g, captionsFn: y, isEndOfTimeline: T, endedTimelineFn: C, dataFn: _ })), A.push(N);
  const P = {};
  return A.forEach((j) => {
    j.addEventListener("loadend", VT({ loadendState: P, abortFn: n }));
  }), () => sl(A);
}, GT = de("CodecUtils"), XT = function(i) {
  const t = i.attributes || {};
  if (t.CODECS) return Ce(t.CODECS);
}, Um = (i, t) => {
  const e = t.attributes || {};
  return i && i.mediaGroups && i.mediaGroups.AUDIO && e.AUDIO && i.mediaGroups.AUDIO[e.AUDIO];
}, KT = (i, t) => {
  if (!Um(i, t)) return !0;
  const e = t.attributes || {}, s = i.mediaGroups.AUDIO[e.AUDIO];
  for (const n in s) if (!s[n].uri && !s[n].playlists) return !0;
  return !1;
}, Rr = function(i) {
  const t = {};
  return i.forEach(({ mediaType: e, type: s, details: n }) => {
    t[e] = t[e] || [], t[e].push(Ec(`${s}${n}`));
  }), Object.keys(t).forEach(function(e) {
    if (t[e].length > 1) return GT(`multiple ${e} codecs found as attributes: ${t[e].join(", ")}. Setting playlist codecs to null so that we wait for mux.js to probe segments for real codecs.`), void (t[e] = null);
    t[e] = t[e][0];
  }), t;
}, Hd = function(i) {
  let t = 0;
  return i.audio && t++, i.video && t++, t;
}, rn = function(i, t) {
  const e = t.attributes || {}, s = Rr(XT(t) || []);
  if (Um(i, t) && !s.audio && !KT(i, t)) {
    const n = Rr(A_(i, e.AUDIO) || []);
    n.audio && (s.audio = n.audio);
  }
  return s;
}, tr = de("PlaylistSelector"), Vd = function(i) {
  if (!i || !i.playlist) return;
  const t = i.playlist;
  return JSON.stringify({ id: t.id, bandwidth: i.bandwidth, width: i.width, height: i.height, codecs: t.attributes && t.attributes.CODECS || "" });
}, Mr = function(i, t) {
  if (!i) return "";
  const e = E.getComputedStyle(i);
  return e ? e[t] : "";
}, os = function(i, t) {
  const e = i.slice();
  i.sort(function(s, n) {
    const r = t(s, n);
    return r === 0 ? e.indexOf(s) - e.indexOf(n) : r;
  });
}, ql = function(i, t) {
  let e, s;
  return i.attributes.BANDWIDTH && (e = i.attributes.BANDWIDTH), e = e || E.Number.MAX_VALUE, t.attributes.BANDWIDTH && (s = t.attributes.BANDWIDTH), s = s || E.Number.MAX_VALUE, e - s;
}, YT = function(i, t) {
  let e, s;
  return i.attributes.RESOLUTION && i.attributes.RESOLUTION.width && (e = i.attributes.RESOLUTION.width), e = e || E.Number.MAX_VALUE, t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (s = t.attributes.RESOLUTION.width), s = s || E.Number.MAX_VALUE, e === s && i.attributes.BANDWIDTH && t.attributes.BANDWIDTH ? i.attributes.BANDWIDTH - t.attributes.BANDWIDTH : e - s;
};
let Bm = function(i, t, e, s, n, r) {
  if (!i) return;
  const a = { bandwidth: t, width: e, height: s, limitRenditionByPlayerDimensions: n };
  let l = i.playlists;
  Yt.isAudioOnly(i) && (l = r.getAudioTrackPlaylists_(), a.audioOnly = !0);
  let u = l.map((P) => {
    let j;
    const V = P.attributes && P.attributes.RESOLUTION && P.attributes.RESOLUTION.width, bt = P.attributes && P.attributes.RESOLUTION && P.attributes.RESOLUTION.height;
    return j = P.attributes && P.attributes.BANDWIDTH, j = j || E.Number.MAX_VALUE, { bandwidth: j, width: V, height: bt, playlist: P };
  });
  os(u, (P, j) => P.bandwidth - j.bandwidth), u = u.filter((P) => !Yt.isIncompatible(P.playlist));
  let p = u.filter((P) => Yt.isEnabled(P.playlist));
  p.length || (p = u.filter((P) => !Yt.isDisabled(P.playlist)));
  const g = p.filter((P) => P.bandwidth * Pt.BANDWIDTH_VARIANCE < t);
  let y = g[g.length - 1];
  const T = g.filter((P) => P.bandwidth === y.bandwidth)[0];
  if (n === !1) {
    const P = T || p[0] || u[0];
    if (P && P.playlist) {
      let j = "sortedPlaylistReps";
      return T && (j = "bandwidthBestRep"), p[0] && (j = "enabledPlaylistReps"), tr(`choosing ${Vd(P)} using ${j} with options`, a), P.playlist;
    }
    return tr("could not choose a playlist with options", a), null;
  }
  const C = g.filter((P) => P.width && P.height);
  os(C, (P, j) => P.width - j.width);
  const _ = C.filter((P) => P.width === e && P.height === s);
  y = _[_.length - 1];
  const k = _.filter((P) => P.bandwidth === y.bandwidth)[0];
  let x, A, I, O;
  if (k || (x = C.filter((P) => P.width > e || P.height > s), A = x.filter((P) => P.width === x[0].width && P.height === x[0].height), y = A[A.length - 1], I = A.filter((P) => P.bandwidth === y.bandwidth)[0]), r.leastPixelDiffSelector) {
    const P = C.map((j) => (j.pixelDiff = Math.abs(j.width - e) + Math.abs(j.height - s), j));
    os(P, (j, V) => j.pixelDiff === V.pixelDiff ? V.bandwidth - j.bandwidth : j.pixelDiff - V.pixelDiff), O = P[0];
  }
  const N = O || I || k || T || p[0] || u[0];
  if (N && N.playlist) {
    let P = "sortedPlaylistReps";
    return O ? P = "leastPixelDiffRep" : I ? P = "resolutionPlusOneRep" : k ? P = "resolutionBestRep" : T ? P = "bandwidthBestRep" : p[0] && (P = "enabledPlaylistReps"), tr(`choosing ${Vd(N)} using ${P} with options`, a), N.playlist;
  }
  return tr("could not choose a playlist with options", a), null;
};
const zd = function() {
  let i = this.useDevicePixelRatio && E.devicePixelRatio || 1;
  return isNaN(this.customPixelRatio) || (i = this.customPixelRatio), Bm(this.playlists.main, this.systemBandwidth, parseInt(Mr(this.tech_.el(), "width"), 10) * i, parseInt(Mr(this.tech_.el(), "height"), 10) * i, this.limitRenditionByPlayerDimensions, this.playlistController_);
}, QT = function(i) {
  let t = -1, e = -1;
  if (i < 0 || i > 1) throw new Error("Moving average bandwidth decay must be between 0 and 1.");
  return function() {
    let s = this.useDevicePixelRatio && E.devicePixelRatio || 1;
    return isNaN(this.customPixelRatio) || (s = this.customPixelRatio), t < 0 && (t = this.systemBandwidth, e = this.systemBandwidth), this.systemBandwidth > 0 && this.systemBandwidth !== e && (t = i * this.systemBandwidth + (1 - i) * t, e = this.systemBandwidth), Bm(this.playlists.main, t, parseInt(Mr(this.tech_.el(), "width"), 10) * s, parseInt(Mr(this.tech_.el(), "height"), 10) * s, this.limitRenditionByPlayerDimensions, this.playlistController_);
  };
}, JT = function(i) {
  const { main: t, currentTime: e, bandwidth: s, duration: n, segmentDuration: r, timeUntilRebuffer: a, currentTimeline: l, syncController: u } = i, p = t.playlists.filter((C) => !Yt.isIncompatible(C));
  let g = p.filter(Yt.isEnabled);
  g.length || (g = p.filter((C) => !Yt.isDisabled(C)));
  const y = g.filter(Yt.hasAttribute.bind(null, "BANDWIDTH")).map((C) => {
    const _ = u.getSyncPoint(C, n, l, e) ? 1 : 2;
    return { playlist: C, rebufferingImpact: Yt.estimateSegmentRequestTime(r, s, C) * _ - a };
  }), T = y.filter((C) => C.rebufferingImpact <= 0);
  return os(T, (C, _) => ql(_.playlist, C.playlist)), T.length ? T[0] : (os(y, (C, _) => C.rebufferingImpact - _.rebufferingImpact), y[0] || null);
}, ZT = function() {
  const i = this.playlists.main.playlists.filter(Yt.isEnabled);
  return os(i, (t, e) => ql(t, e)), i.filter((t) => !!rn(this.playlists.main, t).video)[0] || null;
}, t1 = (i) => {
  let t, e = 0;
  return i.bytes && (t = new Uint8Array(i.bytes), i.segments.forEach((s) => {
    t.set(s, e), e += s.byteLength;
  })), t;
};
function Fm(i) {
  try {
    return new URL(i).pathname.split("/").slice(-2).join("/");
  } catch {
    return "";
  }
}
const e1 = function(i, t, e) {
  if (!i[e]) {
    t.trigger({ type: "usage", name: "vhs-608" });
    let s = e;
    /^cc708_/.test(e) && (s = "SERVICE" + e.split("_")[1]);
    const n = t.textTracks().getTrackById(s);
    if (n) i[e] = n;
    else {
      let r = e, a = e, l = !1;
      const u = (t.options_.vhs && t.options_.vhs.captionServices || {})[s];
      u && (r = u.label, a = u.language, l = u.default), i[e] = t.addRemoteTextTrack({ kind: "captions", id: s, default: l, label: r, language: a }, !1).track;
    }
  }
}, i1 = function({ inbandTextTracks: i, captionArray: t, timestampOffset: e }) {
  if (!t) return;
  const s = E.WebKitDataCue || E.VTTCue;
  t.forEach((n) => {
    const r = n.stream;
    n.content ? n.content.forEach((a) => {
      const l = new s(n.startTime + e, n.endTime + e, a.text);
      l.line = a.line, l.align = "left", l.position = a.position, l.positionAlign = "line-left", i[r].addCue(l);
    }) : i[r].addCue(new s(n.startTime + e, n.endTime + e, n.text));
  });
}, s1 = function(i) {
  Object.defineProperties(i.frame, { id: { get: () => (D.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), i.value.key) }, value: { get: () => (D.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), i.value.data) }, privateData: { get: () => (D.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), i.value.data) } });
}, n1 = ({ inbandTextTracks: i, metadataArray: t, timestampOffset: e, videoDuration: s }) => {
  if (!t) return;
  const n = E.WebKitDataCue || E.VTTCue, r = i.metadataTrack_;
  if (!r || (t.forEach((g) => {
    const y = g.cueTime + e;
    !(typeof y != "number" || E.isNaN(y) || y < 0) && y < 1 / 0 && g.frames && g.frames.length && g.frames.forEach((T) => {
      const C = new n(y, y, T.value || T.url || T.data || "");
      C.frame = T, C.value = T, s1(C), r.addCue(C);
    });
  }), !r.cues || !r.cues.length)) return;
  const a = r.cues, l = [];
  for (let g = 0; g < a.length; g++) a[g] && l.push(a[g]);
  const u = l.reduce((g, y) => {
    const T = g[y.startTime] || [];
    return T.push(y), g[y.startTime] = T, g;
  }, {}), p = Object.keys(u).sort((g, y) => Number(g) - Number(y));
  p.forEach((g, y) => {
    const T = u[g], C = isFinite(s) ? s : g, _ = Number(p[y + 1]) || C;
    T.forEach((k) => {
      k.endTime = _;
    });
  });
}, r1 = { id: "ID", class: "CLASS", startDate: "START-DATE", duration: "DURATION", endDate: "END-DATE", endOnNext: "END-ON-NEXT", plannedDuration: "PLANNED-DURATION", scte35Out: "SCTE35-OUT", scte35In: "SCTE35-IN" }, a1 = /* @__PURE__ */ new Set(["id", "class", "startDate", "duration", "endDate", "endOnNext", "startTime", "endTime", "processDateRange"]), o1 = ({ inbandTextTracks: i, dateRanges: t }) => {
  const e = i.metadataTrack_;
  if (!e) return;
  const s = E.WebKitDataCue || E.VTTCue;
  t.forEach((n) => {
    for (const r of Object.keys(n)) {
      if (a1.has(r)) continue;
      const a = new s(n.startTime, n.endTime, "");
      a.id = n.id, a.type = "com.apple.quicktime.HLS", a.value = { key: r1[r], data: n[r] }, r !== "scte35Out" && r !== "scte35In" || (a.value.data = new Uint8Array(a.value.data.match(/[\da-f]{2}/gi)).buffer), e.addCue(a);
    }
    n.processDateRange();
  });
}, Wd = (i, t, e) => {
  i.metadataTrack_ || (i.metadataTrack_ = e.addRemoteTextTrack({ kind: "metadata", label: "Timed Metadata" }, !1).track, D.browser.IS_ANY_SAFARI || (i.metadataTrack_.inBandMetadataTrackDispatchType = t));
}, Ys = function(i, t, e) {
  let s, n;
  if (e && e.cues) for (s = e.cues.length; s--; ) n = e.cues[s], n.startTime >= i && n.endTime <= t && e.removeCue(n);
}, l1 = function(i) {
  const t = i.cues;
  if (!t) return;
  const e = {};
  for (let s = t.length - 1; s >= 0; s--) {
    const n = t[s], r = `${n.startTime}-${n.endTime}-${n.text}`;
    e[r] ? i.removeCue(n) : e[r] = n;
  }
}, h1 = (i, t, e) => {
  if (t == null || !i.length) return [];
  const s = Math.ceil((t - e + 3) * Ci.ONE_SECOND_IN_TS);
  let n;
  for (n = 0; n < i.length && !(i[n].pts > s); n++) ;
  return i.slice(n);
}, u1 = (i, t, e) => {
  if (!t.length) return i;
  if (e) return t.slice();
  const s = t[0].pts;
  let n = 0;
  for (; n < i.length && !(i[n].pts >= s); n++) ;
  return i.slice(0, n).concat(t);
}, d1 = (i, t, e, s) => {
  const n = Math.ceil((t - s) * Ci.ONE_SECOND_IN_TS), r = Math.ceil((e - s) * Ci.ONE_SECOND_IN_TS), a = i.slice();
  let l = i.length;
  for (; l-- && !(i[l].pts <= r); ) ;
  if (l === -1) return a;
  let u = l + 1;
  for (; u-- && !(i[u].pts <= n); ) ;
  return u = Math.max(u, 0), a.splice(u, l - u + 1), a;
}, c1 = function(i, t) {
  if (!i && !t || !i && t || i && !t) return !1;
  if (i === t) return !0;
  const e = Object.keys(i).sort(), s = Object.keys(t).sort();
  if (e.length !== s.length) return !1;
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (r !== s[n] || i[r] !== t[r]) return !1;
  }
  return !0;
}, qm = 22, p1 = function(i, t, e) {
  t = t || [];
  const s = [];
  let n = 0;
  for (let r = 0; r < t.length; r++) {
    const a = t[r];
    if (i === a.timeline && (s.push(r), n += a.duration, n > e)) return r;
  }
  return s.length === 0 ? 0 : s[s.length - 1];
}, Hs = 1, m1 = 500, Gd = (i) => typeof i == "number" && isFinite(i), er = 1 / 60, g1 = (i, t, e) => i === "main" && t && e ? e.hasAudio || e.hasVideo ? t.hasVideo && !e.hasVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !t.hasVideo && e.hasVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null : "Neither audio nor video found in segment." : null, f1 = (i, t, e) => {
  let s = t - Pt.BACK_BUFFER_LENGTH;
  i.length && (s = Math.max(s, i.start(0)));
  const n = t - e;
  return Math.min(n, s);
}, Hi = (i) => {
  const { startOfSegment: t, duration: e, segment: s, part: n, playlist: { mediaSequence: r, id: a, segments: l = [] }, mediaIndex: u, partIndex: p, timeline: g } = i, y = l.length - 1;
  let T = "mediaIndex/partIndex increment";
  i.getMediaInfoForTime ? T = `getMediaInfoForTime (${i.getMediaInfoForTime})` : i.isSyncRequest && (T = "getSyncSegmentCandidate (isSyncRequest)"), i.independent && (T += ` with independent ${i.independent}`);
  const C = typeof p == "number", _ = i.segment.uri ? "segment" : "pre-segment", k = C ? lm({ preloadSegment: s }) - 1 : 0;
  return `${_} [${r + u}/${r + y}]` + (C ? ` part [${p}/${k}]` : "") + ` segment start/end [${s.start} => ${s.end}]` + (C ? ` part start/end [${n.start} => ${n.end}]` : "") + ` startOfSegment [${t}] duration [${e}] timeline [${g}] selected by [${T}] playlist [${a}]`;
}, Xd = (i) => `${i}TimingInfo`, y1 = ({ segmentTimeline: i, currentTimeline: t, startOfSegment: e, buffered: s, overrideCheck: n }) => n || i !== t ? i < t ? e : s.length ? s.end(s.length - 1) : e : null, Kd = ({ timelineChangeController: i, currentTimeline: t, segmentTimeline: e, loaderType: s, audioDisabled: n }) => {
  if (t === e) return !1;
  if (s === "audio") {
    const r = i.lastTimelineChange({ type: "main" });
    return !r || r.to !== e;
  }
  if (s === "main" && n) {
    const r = i.pendingTimelineChange({ type: "audio" });
    return !r || r.to !== e;
  }
  return !1;
}, _1 = (i) => {
  let t = 0;
  return ["video", "audio"].forEach(function(e) {
    const s = i[`${e}TimingInfo`];
    if (!s) return;
    const { start: n, end: r } = s;
    let a;
    typeof n == "bigint" || typeof r == "bigint" ? a = E.BigInt(r) - E.BigInt(n) : typeof n == "number" && typeof r == "number" && (a = r - n), a !== void 0 && a > t && (t = a);
  }), typeof t == "bigint" && t < Number.MAX_SAFE_INTEGER && (t = Number(t)), t;
}, Yd = ({ segmentDuration: i, maxDuration: t }) => !!i && Math.round(i) > t + Ie, v1 = (i, t) => {
  if (t !== "hls") return null;
  const e = _1({ audioTimingInfo: i.audioTimingInfo, videoTimingInfo: i.videoTimingInfo });
  if (!e) return null;
  const s = i.playlist.targetDuration, n = Yd({ segmentDuration: e, maxDuration: 2 * s }), r = Yd({ segmentDuration: e, maxDuration: s }), a = `Segment with index ${i.mediaIndex} from playlist ${i.playlist.id} has a duration of ${e} when the reported duration is ${i.duration} and the target duration is ${s}. For HLS content, a duration in excess of the target duration may result in playback issues. See the HLS specification section on EXT-X-TARGETDURATION for more details: https://tools.ietf.org/html/draft-pantos-http-live-streaming-23#section-4.3.3.1`;
  return n || r ? { severity: n ? "warn" : "info", message: a } : null;
};
class nl extends D.EventTarget {
  constructor(t, e = {}) {
    if (super(), !t) throw new TypeError("Initialization settings are required");
    if (typeof t.currentTime != "function") throw new TypeError("No currentTime getter specified");
    if (!t.mediaSource) throw new TypeError("No MediaSource specified");
    this.bandwidth = t.bandwidth, this.throughput = { rate: 0, count: 0 }, this.roundTrip = NaN, this.resetStats_(), this.mediaIndex = null, this.partIndex = null, this.hasPlayed_ = t.hasPlayed, this.currentTime_ = t.currentTime, this.seekable_ = t.seekable, this.seeking_ = t.seeking, this.duration_ = t.duration, this.mediaSource_ = t.mediaSource, this.vhs_ = t.vhs, this.loaderType_ = t.loaderType, this.currentMediaInfo_ = void 0, this.startingMediaInfo_ = void 0, this.segmentMetadataTrack_ = t.segmentMetadataTrack, this.goalBufferLength_ = t.goalBufferLength, this.sourceType_ = t.sourceType, this.sourceUpdater_ = t.sourceUpdater, this.inbandTextTracks_ = t.inbandTextTracks, this.state_ = "INIT", this.timelineChangeController_ = t.timelineChangeController, this.shouldSaveSegmentTimingInfo_ = !0, this.parse708captions_ = t.parse708captions, this.useDtsForTimestampOffset_ = t.useDtsForTimestampOffset, this.captionServices_ = t.captionServices, this.exactManifestTimings = t.exactManifestTimings, this.addMetadataToTextTrack = t.addMetadataToTextTrack, this.checkBufferTimeout_ = null, this.error_ = void 0, this.currentTimeline_ = -1, this.shouldForceTimestampOffsetAfterResync_ = !1, this.pendingSegment_ = null, this.xhrOptions_ = null, this.pendingSegments_ = [], this.audioDisabled_ = !1, this.isPendingTimestampOffset_ = !1, this.gopBuffer_ = [], this.timeMapping_ = 0, this.safeAppend_ = !1, this.appendInitSegment_ = { audio: !0, video: !0 }, this.playlistOfLastInitSegment_ = { audio: null, video: null }, this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_ = { id3: [], caption: [] }, this.waitingOnRemove_ = !1, this.quotaExceededErrorRetryTimeout_ = null, this.activeInitSegmentId_ = null, this.initSegments_ = {}, this.cacheEncryptionKeys_ = t.cacheEncryptionKeys, this.keyCache_ = {}, this.decrypter_ = t.decrypter, this.syncController_ = t.syncController, this.syncPoint_ = { segmentIndex: 0, time: 0 }, this.transmuxer_ = this.createTransmuxer_(), this.triggerSyncInfoUpdate_ = () => this.trigger("syncinfoupdate"), this.syncController_.on("syncinfoupdate", this.triggerSyncInfoUpdate_), this.mediaSource_.addEventListener("sourceopen", () => {
      this.isEndOfStream_() || (this.ended_ = !1);
    }), this.fetchAtBuffer_ = !1, this.logger_ = de(`SegmentLoader[${this.loaderType_}]`), Object.defineProperty(this, "state", { get() {
      return this.state_;
    }, set(s) {
      s !== this.state_ && (this.logger_(`${this.state_} -> ${s}`), this.state_ = s, this.trigger("statechange"));
    } }), this.sourceUpdater_.on("ready", () => {
      this.hasEnoughInfoToAppend_() && this.processCallQueue_();
    }), this.loaderType_ === "main" && this.timelineChangeController_.on("pendingtimelinechange", () => {
      this.hasEnoughInfoToAppend_() && this.processCallQueue_();
    }), this.loaderType_ === "audio" && this.timelineChangeController_.on("timelinechange", () => {
      this.hasEnoughInfoToLoad_() && this.processLoadQueue_(), this.hasEnoughInfoToAppend_() && this.processCallQueue_();
    });
  }
  get mediaSequenceSync_() {
    return this.syncController_.getMediaSequenceSync(this.loaderType_);
  }
  createTransmuxer_() {
    return _o.createTransmuxer({ remux: !1, alignGopsAtEnd: this.safeAppend_, keepOriginalTimestamps: !0, parse708captions: this.parse708captions_, captionServices: this.captionServices_ });
  }
  resetStats_() {
    this.mediaBytesTransferred = 0, this.mediaRequests = 0, this.mediaRequestsAborted = 0, this.mediaRequestsTimedout = 0, this.mediaRequestsErrored = 0, this.mediaTransferDuration = 0, this.mediaSecondsLoaded = 0, this.mediaAppends = 0;
  }
  dispose() {
    this.trigger("dispose"), this.state = "DISPOSED", this.pause(), this.abort_(), this.transmuxer_ && this.transmuxer_.terminate(), this.resetStats_(), this.checkBufferTimeout_ && E.clearTimeout(this.checkBufferTimeout_), this.syncController_ && this.triggerSyncInfoUpdate_ && this.syncController_.off("syncinfoupdate", this.triggerSyncInfoUpdate_), this.off();
  }
  setAudio(t) {
    this.audioDisabled_ = !t, t ? this.appendInitSegment_.audio = !0 : this.sourceUpdater_.removeAudio(0, this.duration_());
  }
  abort() {
    this.state === "WAITING" ? (this.abort_(), this.state = "READY", this.paused() || this.monitorBuffer_()) : this.pendingSegment_ && (this.pendingSegment_ = null);
  }
  abort_() {
    this.pendingSegment_ && this.pendingSegment_.abortRequests && this.pendingSegment_.abortRequests(), this.pendingSegment_ = null, this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [], this.timelineChangeController_.clearPendingTimelineChange(this.loaderType_), this.waitingOnRemove_ = !1, E.clearTimeout(this.quotaExceededErrorRetryTimeout_), this.quotaExceededErrorRetryTimeout_ = null;
  }
  checkForAbort_(t) {
    return this.state !== "APPENDING" || this.pendingSegment_ ? !this.pendingSegment_ || this.pendingSegment_.requestId !== t : (this.state = "READY", !0);
  }
  error(t) {
    return t !== void 0 && (this.logger_("error occurred:", t), this.error_ = t), this.pendingSegment_ = null, this.error_;
  }
  endOfStream() {
    this.ended_ = !0, this.transmuxer_ && _o.reset(this.transmuxer_), this.gopBuffer_.length = 0, this.pause(), this.trigger("ended");
  }
  buffered_() {
    const t = this.getMediaInfo_();
    if (!this.sourceUpdater_ || !t) return Jt();
    if (this.loaderType_ === "main") {
      const { hasAudio: e, hasVideo: s, isMuxed: n } = t;
      if (s && e && !this.audioDisabled_ && !n) return this.sourceUpdater_.buffered();
      if (s) return this.sourceUpdater_.videoBuffered();
    }
    return this.sourceUpdater_.audioBuffered();
  }
  initSegmentForMap(t, e = !1) {
    if (!t) return null;
    const s = Nr(t);
    let n = this.initSegments_[s];
    return e && !n && t.bytes && (this.initSegments_[s] = n = { resolvedUri: t.resolvedUri, byterange: t.byterange, bytes: t.bytes, tracks: t.tracks, timescales: t.timescales }), n || t;
  }
  segmentKey(t, e = !1) {
    if (!t) return null;
    const s = Em(t);
    let n = this.keyCache_[s];
    this.cacheEncryptionKeys_ && e && !n && t.bytes && (this.keyCache_[s] = n = { resolvedUri: t.resolvedUri, bytes: t.bytes });
    const r = { resolvedUri: (n || t).resolvedUri };
    return n && (r.bytes = n.bytes), r;
  }
  couldBeginLoading_() {
    return this.playlist_ && !this.paused();
  }
  load() {
    if (this.monitorBuffer_(), this.playlist_) return this.state === "INIT" && this.couldBeginLoading_() ? this.init_() : void (!this.couldBeginLoading_() || this.state !== "READY" && this.state !== "INIT" || (this.state = "READY"));
  }
  init_() {
    return this.state = "READY", this.resetEverything(), this.monitorBuffer_();
  }
  playlist(t, e = {}) {
    if (!t) return;
    const s = this.playlist_, n = this.pendingSegment_;
    this.playlist_ = t, this.xhrOptions_ = e, this.state === "INIT" && (t.syncInfo = { mediaSequence: t.mediaSequence, time: 0 }, this.loaderType_ === "main" && this.syncController_.setDateTimeMappingForStart(t));
    let r = null;
    if (s && (s.id ? r = s.id : s.uri && (r = s.uri)), this.logger_(`playlist update [${r} => ${t.id || t.uri}]`), this.mediaSequenceSync_ && (this.mediaSequenceSync_.update(t, this.currentTime_()), this.logger_(`Playlist update:
currentTime: ${this.currentTime_()}
bufferedEnd: ${yo(this.buffered_())}
`, this.mediaSequenceSync_.diagnostics)), this.trigger("syncinfoupdate"), this.state === "INIT" && this.couldBeginLoading_()) return this.init_();
    if (!s || s.uri !== t.uri)
      return this.mediaIndex !== null && (!t.endList && typeof t.partTargetDuration == "number" ? this.resetLoader() : this.resyncLoader()), this.currentMediaInfo_ = void 0, void this.trigger("playlistupdate");
    const a = t.mediaSequence - s.mediaSequence;
    if (this.logger_(`live window shift [${a}]`), this.mediaIndex !== null) if (this.mediaIndex -= a, this.mediaIndex < 0) this.mediaIndex = null, this.partIndex = null;
    else {
      const l = this.playlist_.segments[this.mediaIndex];
      if (this.partIndex && (!l.parts || !l.parts.length || !l.parts[this.partIndex])) {
        const u = this.mediaIndex;
        this.logger_(`currently processing part (index ${this.partIndex}) no longer exists.`), this.resetLoader(), this.mediaIndex = u;
      }
    }
    n && (n.mediaIndex -= a, n.mediaIndex < 0 ? (n.mediaIndex = null, n.partIndex = null) : (n.mediaIndex >= 0 && (n.segment = t.segments[n.mediaIndex]), n.partIndex >= 0 && n.segment.parts && (n.part = n.segment.parts[n.partIndex]))), this.syncController_.saveExpiredSegmentInfo(s, t);
  }
  pause() {
    this.checkBufferTimeout_ && (E.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null);
  }
  paused() {
    return this.checkBufferTimeout_ === null;
  }
  resetEverything(t) {
    this.ended_ = !1, this.activeInitSegmentId_ = null, this.appendInitSegment_ = { audio: !0, video: !0 }, this.resetLoader(), this.remove(0, 1 / 0, t), this.transmuxer_ && (this.transmuxer_.postMessage({ action: "clearAllMp4Captions" }), this.transmuxer_.postMessage({ action: "reset" }));
  }
  resetLoader() {
    this.fetchAtBuffer_ = !1, this.mediaSequenceSync_ && this.mediaSequenceSync_.resetAppendedStatus(), this.resyncLoader();
  }
  resyncLoader() {
    this.transmuxer_ && _o.reset(this.transmuxer_), this.mediaIndex = null, this.partIndex = null, this.syncPoint_ = null, this.isPendingTimestampOffset_ = !1;
    const t = this.currentMediaInfo_ && this.currentMediaInfo_.isFmp4;
    this.sourceType_ === "hls" && !t && (this.shouldForceTimestampOffsetAfterResync_ = !0), this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [], this.abort(), this.transmuxer_ && this.transmuxer_.postMessage({ action: "clearParsedMp4Captions" });
  }
  remove(t, e, s = () => {
  }, n = !1) {
    if (e === 1 / 0 && (e = this.duration_()), e <= t) return void this.logger_("skipping remove because end ${end} is <= start ${start}");
    if (!this.sourceUpdater_ || !this.getMediaInfo_()) return void this.logger_("skipping remove because no source updater or starting media info");
    let r = 1;
    const a = () => {
      r--, r === 0 && s();
    };
    !n && this.audioDisabled_ || (r++, this.sourceUpdater_.removeAudio(t, e, a)), (n || this.loaderType_ === "main") && (this.gopBuffer_ = d1(this.gopBuffer_, t, e, this.timeMapping_), r++, this.sourceUpdater_.removeVideo(t, e, a));
    for (const l in this.inbandTextTracks_) Ys(t, e, this.inbandTextTracks_[l]);
    Ys(t, e, this.segmentMetadataTrack_), a();
  }
  monitorBuffer_() {
    this.checkBufferTimeout_ && E.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = E.setTimeout(this.monitorBufferTick_.bind(this), 1);
  }
  monitorBufferTick_() {
    this.state === "READY" && this.fillBuffer_(), this.checkBufferTimeout_ && E.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = E.setTimeout(this.monitorBufferTick_.bind(this), m1);
  }
  fillBuffer_() {
    if (this.sourceUpdater_.updating()) return;
    const t = this.chooseNextRequest_();
    t && (typeof t.timestampOffset == "number" && (this.isPendingTimestampOffset_ = !1, this.timelineChangeController_.pendingTimelineChange({ type: this.loaderType_, from: this.currentTimeline_, to: t.timeline })), this.loadSegment_(t));
  }
  isEndOfStream_(t = this.mediaIndex, e = this.playlist_, s = this.partIndex) {
    if (!e || !this.mediaSource_) return !1;
    const n = typeof t == "number" && e.segments[t], r = t + 1 === e.segments.length, a = !n || !n.parts || s + 1 === n.parts.length;
    return e.endList && this.mediaSource_.readyState === "open" && r && a;
  }
  chooseNextRequest_() {
    const t = this.buffered_(), e = yo(t) || 0, s = Rl(t, this.currentTime_()), n = !this.hasPlayed_() && s >= 1, r = s >= this.goalBufferLength_(), a = this.playlist_.segments;
    if (!a.length || n || r) return null;
    this.syncPoint_ = this.syncPoint_ || this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_(), this.loaderType_);
    const l = { partIndex: null, mediaIndex: null, startOfSegment: null, playlist: this.playlist_, isSyncRequest: !this.syncPoint_ };
    if (l.isSyncRequest) l.mediaIndex = p1(this.currentTimeline_, a, e), this.logger_(`choose next request. Can not find sync point. Fallback to media Index: ${l.mediaIndex}`);
    else if (this.mediaIndex !== null) {
      const T = a[this.mediaIndex], C = typeof this.partIndex == "number" ? this.partIndex : -1;
      l.startOfSegment = T.end ? T.end : e, T.parts && T.parts[C + 1] ? (l.mediaIndex = this.mediaIndex, l.partIndex = C + 1) : l.mediaIndex = this.mediaIndex + 1;
    } else {
      let T, C, _;
      const k = this.fetchAtBuffer_ ? e : this.currentTime_();
      if (this.mediaSequenceSync_ && this.logger_(`chooseNextRequest_ request after Quality Switch:
For TargetTime: ${k}.
CurrentTime: ${this.currentTime_()}
BufferedEnd: ${e}
Fetch At Buffer: ${this.fetchAtBuffer_}
`, this.mediaSequenceSync_.diagnostics), this.mediaSequenceSync_ && this.mediaSequenceSync_.isReliable) {
        const x = this.getSyncInfoFromMediaSequenceSync_(k);
        if (!x) return this.logger_("chooseNextRequest_ - no sync info found using media sequence sync"), null;
        this.logger_(`chooseNextRequest_ mediaSequence syncInfo (${x.start} --> ${x.end})`), T = x.segmentIndex, C = x.partIndex, _ = x.start;
      } else {
        this.logger_("chooseNextRequest_ - fallback to a regular segment selection algorithm, based on a syncPoint.");
        const x = Yt.getMediaInfoForTime({ exactManifestTimings: this.exactManifestTimings, playlist: this.playlist_, currentTime: k, startingPartIndex: this.syncPoint_.partIndex, startingSegmentIndex: this.syncPoint_.segmentIndex, startTime: this.syncPoint_.time });
        T = x.segmentIndex, C = x.partIndex, _ = x.startTime;
      }
      l.getMediaInfoForTime = this.fetchAtBuffer_ ? `bufferedEnd ${k}` : `currentTime ${k}`, l.mediaIndex = T, l.startOfSegment = _, l.partIndex = C, this.logger_(`choose next request. Playlist switched and we have a sync point. Media Index: ${l.mediaIndex} `);
    }
    const u = a[l.mediaIndex];
    let p = u && typeof l.partIndex == "number" && u.parts && u.parts[l.partIndex];
    if (!u || typeof l.partIndex == "number" && !p) return null;
    typeof l.partIndex != "number" && u.parts && (l.partIndex = 0, p = u.parts[0]);
    const g = this.vhs_.playlists && this.vhs_.playlists.main && this.vhs_.playlists.main.independentSegments || this.playlist_.independentSegments;
    if (!s && p && !g && !p.independent) if (l.partIndex === 0) {
      const T = a[l.mediaIndex - 1], C = T.parts && T.parts.length && T.parts[T.parts.length - 1];
      C && C.independent && (l.mediaIndex -= 1, l.partIndex = T.parts.length - 1, l.independent = "previous segment");
    } else u.parts[l.partIndex - 1].independent && (l.partIndex -= 1, l.independent = "previous part");
    const y = this.mediaSource_ && this.mediaSource_.readyState === "ended";
    return l.mediaIndex >= a.length - 1 && y && !this.seeking_() ? null : (this.shouldForceTimestampOffsetAfterResync_ && (this.shouldForceTimestampOffsetAfterResync_ = !1, l.forceTimestampOffset = !0, this.logger_("choose next request. Force timestamp offset after loader resync")), this.generateSegmentInfo_(l));
  }
  getSyncInfoFromMediaSequenceSync_(t) {
    if (!this.mediaSequenceSync_) return null;
    const e = Math.max(t, this.mediaSequenceSync_.start);
    t !== e && this.logger_(`getSyncInfoFromMediaSequenceSync_. Pulled target time from ${t} to ${e}`);
    const s = this.mediaSequenceSync_.getSyncInfoForTime(e);
    if (!s) return null;
    if (!s.isAppended) return s;
    const n = this.mediaSequenceSync_.getSyncInfoForTime(s.end);
    return n ? (n.isAppended && this.logger_("getSyncInfoFromMediaSequenceSync_: We encounter unexpected scenario where next media sequence sync info is also appended!"), n) : null;
  }
  generateSegmentInfo_(t) {
    const { independent: e, playlist: s, mediaIndex: n, startOfSegment: r, isSyncRequest: a, partIndex: l, forceTimestampOffset: u, getMediaInfoForTime: p } = t, g = s.segments[n], y = typeof l == "number" && g.parts[l], T = { requestId: "segment-loader-" + Math.random(), uri: y && y.resolvedUri || g.resolvedUri, mediaIndex: n, partIndex: y ? l : null, isSyncRequest: a, startOfSegment: r, playlist: s, bytes: null, encryptedBytes: null, timestampOffset: null, timeline: g.timeline, duration: y && y.duration || g.duration, segment: g, part: y, byteLength: 0, transmuxer: this.transmuxer_, getMediaInfoForTime: p, independent: e }, C = u !== void 0 ? u : this.isPendingTimestampOffset_;
    T.timestampOffset = this.timestampOffsetForSegment_({ segmentTimeline: g.timeline, currentTimeline: this.currentTimeline_, startOfSegment: r, buffered: this.buffered_(), overrideCheck: C });
    const _ = yo(this.sourceUpdater_.audioBuffered());
    return typeof _ == "number" && (T.audioAppendStart = _ - this.sourceUpdater_.audioTimestampOffset()), this.sourceUpdater_.videoBuffered().length && (T.gopsToAlignWith = h1(this.gopBuffer_, this.currentTime_() - this.sourceUpdater_.videoTimestampOffset(), this.timeMapping_)), T;
  }
  timestampOffsetForSegment_(t) {
    return y1(t);
  }
  earlyAbortWhenNeeded_(t) {
    if (this.vhs_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH || Date.now() - (t.firstBytesReceivedAt || Date.now()) < 1e3) return;
    const e = this.currentTime_(), s = t.bandwidth, n = this.pendingSegment_.duration, r = Yt.estimateSegmentRequestTime(n, s, this.playlist_, t.bytesReceived), a = Gb(this.buffered_(), e, this.vhs_.tech_.playbackRate()) - 1;
    if (r <= a) return;
    const l = JT({ main: this.vhs_.playlists.main, currentTime: e, bandwidth: s, duration: this.duration_(), segmentDuration: n, timeUntilRebuffer: a, currentTimeline: this.currentTimeline_, syncController: this.syncController_ });
    if (!l) return;
    const u = r - a - l.rebufferingImpact;
    let p = 0.5;
    a <= Ie && (p = 1), !l.playlist || l.playlist.uri === this.playlist_.uri || u < p || (this.bandwidth = l.playlist.attributes.BANDWIDTH * Pt.BANDWIDTH_VARIANCE + 1, this.trigger("earlyabort"));
  }
  handleAbort_(t) {
    this.logger_(`Aborting ${Hi(t)}`), this.mediaRequestsAborted += 1;
  }
  handleProgress_(t, e) {
    this.earlyAbortWhenNeeded_(e.stats), this.checkForAbort_(e.requestId) || this.trigger("progress");
  }
  handleTrackInfo_(t, e) {
    this.earlyAbortWhenNeeded_(t.stats), this.checkForAbort_(t.requestId) || this.checkForIllegalMediaSwitch(e) || (e = e || {}, c1(this.currentMediaInfo_, e) || (this.appendInitSegment_ = { audio: !0, video: !0 }, this.startingMediaInfo_ = e, this.currentMediaInfo_ = e, this.logger_("trackinfo update", e), this.trigger("trackinfo")), this.checkForAbort_(t.requestId) || (this.pendingSegment_.trackInfo = e, this.hasEnoughInfoToAppend_() && this.processCallQueue_()));
  }
  handleTimingInfo_(t, e, s, n) {
    if (this.earlyAbortWhenNeeded_(t.stats), this.checkForAbort_(t.requestId)) return;
    const r = this.pendingSegment_, a = Xd(e);
    r[a] = r[a] || {}, r[a][s] = n, this.logger_(`timinginfo: ${e} - ${s} - ${n}`), this.hasEnoughInfoToAppend_() && this.processCallQueue_();
  }
  handleCaptions_(t, e) {
    if (this.earlyAbortWhenNeeded_(t.stats), this.checkForAbort_(t.requestId)) return;
    if (e.length === 0) return void this.logger_("SegmentLoader received no captions from a caption event");
    if (!this.pendingSegment_.hasAppendedData_) return void this.metadataQueue_.caption.push(this.handleCaptions_.bind(this, t, e));
    const s = this.sourceUpdater_.videoTimestampOffset() === null ? this.sourceUpdater_.audioTimestampOffset() : this.sourceUpdater_.videoTimestampOffset(), n = {};
    e.forEach((r) => {
      n[r.stream] = n[r.stream] || { startTime: 1 / 0, captions: [], endTime: 0 };
      const a = n[r.stream];
      a.startTime = Math.min(a.startTime, r.startTime + s), a.endTime = Math.max(a.endTime, r.endTime + s), a.captions.push(r);
    }), Object.keys(n).forEach((r) => {
      const { startTime: a, endTime: l, captions: u } = n[r], p = this.inbandTextTracks_;
      this.logger_(`adding cues from ${a} -> ${l} for ${r}`), e1(p, this.vhs_.tech_, r), Ys(a, l, p[r]), i1({ captionArray: u, inbandTextTracks: p, timestampOffset: s });
    }), this.transmuxer_ && this.transmuxer_.postMessage({ action: "clearParsedMp4Captions" });
  }
  handleId3_(t, e, s) {
    this.earlyAbortWhenNeeded_(t.stats), !this.checkForAbort_(t.requestId) && (this.pendingSegment_.hasAppendedData_ ? this.addMetadataToTextTrack(s, e, this.duration_()) : this.metadataQueue_.id3.push(this.handleId3_.bind(this, t, e, s)));
  }
  processMetadataQueue_() {
    this.metadataQueue_.id3.forEach((t) => t()), this.metadataQueue_.caption.forEach((t) => t()), this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [];
  }
  processCallQueue_() {
    const t = this.callQueue_;
    this.callQueue_ = [], t.forEach((e) => e());
  }
  processLoadQueue_() {
    const t = this.loadQueue_;
    this.loadQueue_ = [], t.forEach((e) => e());
  }
  hasEnoughInfoToLoad_() {
    if (this.loaderType_ !== "audio") return !0;
    const t = this.pendingSegment_;
    return !!t && (!this.getCurrentMediaInfo_() || !Kd({ timelineChangeController: this.timelineChangeController_, currentTimeline: this.currentTimeline_, segmentTimeline: t.timeline, loaderType: this.loaderType_, audioDisabled: this.audioDisabled_ }));
  }
  getCurrentMediaInfo_(t = this.pendingSegment_) {
    return t && t.trackInfo || this.currentMediaInfo_;
  }
  getMediaInfo_(t = this.pendingSegment_) {
    return this.getCurrentMediaInfo_(t) || this.startingMediaInfo_;
  }
  getPendingSegmentPlaylist() {
    return this.pendingSegment_ ? this.pendingSegment_.playlist : null;
  }
  hasEnoughInfoToAppend_() {
    if (!this.sourceUpdater_.ready() || this.waitingOnRemove_ || this.quotaExceededErrorRetryTimeout_) return !1;
    const t = this.pendingSegment_, e = this.getCurrentMediaInfo_();
    if (!t || !e) return !1;
    const { hasAudio: s, hasVideo: n, isMuxed: r } = e;
    return !(n && !t.videoTimingInfo) && !(s && !this.audioDisabled_ && !r && !t.audioTimingInfo) && !Kd({ timelineChangeController: this.timelineChangeController_, currentTimeline: this.currentTimeline_, segmentTimeline: t.timeline, loaderType: this.loaderType_, audioDisabled: this.audioDisabled_ });
  }
  handleData_(t, e) {
    if (this.earlyAbortWhenNeeded_(t.stats), this.checkForAbort_(t.requestId)) return;
    if (this.callQueue_.length || !this.hasEnoughInfoToAppend_()) return void this.callQueue_.push(this.handleData_.bind(this, t, e));
    const s = this.pendingSegment_;
    if (this.setTimeMapping_(s.timeline), this.updateMediaSecondsLoaded_(s.part || s.segment), this.mediaSource_.readyState !== "closed") {
      if (t.map && (t.map = this.initSegmentForMap(t.map, !0), s.segment.map = t.map), t.key && this.segmentKey(t.key, !0), s.isFmp4 = t.isFmp4, s.timingInfo = s.timingInfo || {}, s.isFmp4) this.trigger("fmp4"), s.timingInfo.start = s[Xd(e.type)].start;
      else {
        const n = this.getCurrentMediaInfo_(), r = this.loaderType_ === "main" && n && n.hasVideo;
        let a;
        r && (a = s.videoTimingInfo.start), s.timingInfo.start = this.trueSegmentStart_({ currentStart: s.timingInfo.start, playlist: s.playlist, mediaIndex: s.mediaIndex, currentVideoTimestampOffset: this.sourceUpdater_.videoTimestampOffset(), useVideoTimingInfo: r, firstVideoFrameTimeForData: a, videoTimingInfo: s.videoTimingInfo, audioTimingInfo: s.audioTimingInfo });
      }
      if (this.updateAppendInitSegmentStatus(s, e.type), this.updateSourceBufferTimestampOffset_(s), s.isSyncRequest) {
        this.updateTimingInfoEnd_(s), this.syncController_.saveSegmentTimingInfo({ segmentInfo: s, shouldSaveTimelineMapping: this.loaderType_ === "main" });
        const n = this.chooseNextRequest_();
        if (n.mediaIndex !== s.mediaIndex || n.partIndex !== s.partIndex) return void this.logger_("sync segment was incorrect, not appending");
        this.logger_("sync segment was correct, appending");
      }
      s.hasAppendedData_ = !0, this.processMetadataQueue_(), this.appendData_(s, e);
    }
  }
  updateAppendInitSegmentStatus(t, e) {
    this.loaderType_ !== "main" || typeof t.timestampOffset != "number" || t.changedTimestampOffset || (this.appendInitSegment_ = { audio: !0, video: !0 }), this.playlistOfLastInitSegment_[e] !== t.playlist && (this.appendInitSegment_[e] = !0);
  }
  getInitSegmentAndUpdateState_({ type: t, initSegment: e, map: s, playlist: n }) {
    if (s) {
      const r = Nr(s);
      if (this.activeInitSegmentId_ === r) return null;
      e = this.initSegmentForMap(s, !0).bytes, this.activeInitSegmentId_ = r;
    }
    return e && this.appendInitSegment_[t] ? (this.playlistOfLastInitSegment_[t] = n, this.appendInitSegment_[t] = !1, this.activeInitSegmentId_ = null, e) : null;
  }
  handleQuotaExceededError_({ segmentInfo: t, type: e, bytes: s }, n) {
    const r = this.sourceUpdater_.audioBuffered(), a = this.sourceUpdater_.videoBuffered();
    r.length > 1 && this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the audio buffer: " + ki(r).join(", ")), a.length > 1 && this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the video buffer: " + ki(a).join(", "));
    const l = r.length ? r.start(0) : 0, u = r.length ? r.end(r.length - 1) : 0, p = a.length ? a.start(0) : 0, g = a.length ? a.end(a.length - 1) : 0;
    if (u - l <= Hs && g - p <= Hs) return this.logger_(`On QUOTA_EXCEEDED_ERR, single segment too large to append to buffer, triggering an error. Appended byte length: ${s.byteLength}, audio buffer: ${ki(r).join(", ")}, video buffer: ${ki(a).join(", ")}, `), this.error({ message: "Quota exceeded error with append of a single segment of content", excludeUntil: 1 / 0, metadata: { errorType: D.Error.SegmentExceedsSourceBufferQuota } }), void this.trigger("error");
    this.waitingOnRemove_ = !0, this.callQueue_.push(this.appendToSourceBuffer_.bind(this, { segmentInfo: t, type: e, bytes: s }));
    const y = this.currentTime_() - Hs;
    this.logger_(`On QUOTA_EXCEEDED_ERR, removing audio/video from 0 to ${y}`), this.remove(0, y, () => {
      this.logger_(`On QUOTA_EXCEEDED_ERR, retrying append in ${Hs}s`), this.waitingOnRemove_ = !1, this.quotaExceededErrorRetryTimeout_ = E.setTimeout(() => {
        this.logger_("On QUOTA_EXCEEDED_ERR, re-processing call queue"), this.quotaExceededErrorRetryTimeout_ = null, this.processCallQueue_();
      }, 1e3 * Hs);
    }, !0);
  }
  handleAppendError_({ segmentInfo: t, type: e, bytes: s }, n) {
    n && (n.code !== qm ? (this.logger_("Received non QUOTA_EXCEEDED_ERR on append", n), this.error({ message: `${e} append of ${s.length}b failed for segment #${t.mediaIndex} in playlist ${t.playlist.id}`, metadata: { errorType: D.Error.SegmentAppendError } }), this.trigger("appenderror")) : this.handleQuotaExceededError_({ segmentInfo: t, type: e, bytes: s }));
  }
  appendToSourceBuffer_({ segmentInfo: t, type: e, initSegment: s, data: n, bytes: r }) {
    if (!r) {
      const a = [n];
      let l = n.byteLength;
      s && (a.unshift(s), l += s.byteLength), r = t1({ bytes: l, segments: a });
    }
    this.sourceUpdater_.appendBuffer({ segmentInfo: t, type: e, bytes: r }, this.handleAppendError_.bind(this, { segmentInfo: t, type: e, bytes: r }));
  }
  handleSegmentTimingInfo_(t, e, s) {
    if (!this.pendingSegment_ || e !== this.pendingSegment_.requestId) return;
    const n = this.pendingSegment_.segment, r = `${t}TimingInfo`;
    n[r] || (n[r] = {}), n[r].transmuxerPrependedSeconds = s.prependedContentDuration || 0, n[r].transmuxedPresentationStart = s.start.presentation, n[r].transmuxedDecodeStart = s.start.decode, n[r].transmuxedPresentationEnd = s.end.presentation, n[r].transmuxedDecodeEnd = s.end.decode, n[r].baseMediaDecodeTime = s.baseMediaDecodeTime;
  }
  appendData_(t, e) {
    const { type: s, data: n } = e;
    if (!n || !n.byteLength || s === "audio" && this.audioDisabled_) return;
    const r = this.getInitSegmentAndUpdateState_({ type: s, initSegment: e.initSegment, playlist: t.playlist, map: t.isFmp4 ? t.segment.map : null });
    this.appendToSourceBuffer_({ segmentInfo: t, type: s, initSegment: r, data: n });
  }
  loadSegment_(t) {
    this.state = "WAITING", this.pendingSegment_ = t, this.trimBackBuffer_(t), typeof t.timestampOffset == "number" && this.transmuxer_ && this.transmuxer_.postMessage({ action: "clearAllMp4Captions" }), this.hasEnoughInfoToLoad_() ? this.updateTransmuxerAndRequestSegment_(t) : this.loadQueue_.push(() => {
      const e = ve({}, t, { forceTimestampOffset: !0 });
      ve(t, this.generateSegmentInfo_(e)), this.isPendingTimestampOffset_ = !1, this.updateTransmuxerAndRequestSegment_(t);
    });
  }
  updateTransmuxerAndRequestSegment_(t) {
    this.shouldUpdateTransmuxerTimestampOffset_(t.timestampOffset) && (this.gopBuffer_.length = 0, t.gopsToAlignWith = [], this.timeMapping_ = 0, this.transmuxer_.postMessage({ action: "reset" }), this.transmuxer_.postMessage({ action: "setTimestampOffset", timestampOffset: t.timestampOffset }));
    const e = this.createSimplifiedSegmentObj_(t), s = this.isEndOfStream_(t.mediaIndex, t.playlist, t.partIndex), n = this.mediaIndex !== null, r = t.timeline !== this.currentTimeline_ && t.timeline > 0, a = s || n && r;
    this.logger_(`Requesting
${Fm(t.uri)}
${Hi(t)}`), e.map && !e.map.bytes && (this.logger_("going to request init segment."), this.appendInitSegment_ = { video: !0, audio: !0 }), t.abortRequests = WT({ xhr: this.vhs_.xhr, xhrOptions: this.xhrOptions_, decryptionWorker: this.decrypter_, segment: e, abortFn: this.handleAbort_.bind(this, t), progressFn: this.handleProgress_.bind(this), trackInfoFn: this.handleTrackInfo_.bind(this), timingInfoFn: this.handleTimingInfo_.bind(this), videoSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, "video", t.requestId), audioSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, "audio", t.requestId), captionsFn: this.handleCaptions_.bind(this), isEndOfTimeline: a, endedTimelineFn: () => {
      this.logger_("received endedtimeline callback");
    }, id3Fn: this.handleId3_.bind(this), dataFn: this.handleData_.bind(this), doneFn: this.segmentRequestFinished_.bind(this), onTransmuxerLog: ({ message: l, level: u, stream: p }) => {
      this.logger_(`${Hi(t)} logged from transmuxer stream ${p} as a ${u}: ${l}`);
    } });
  }
  trimBackBuffer_(t) {
    const e = f1(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
    e > 0 && this.remove(0, e);
  }
  createSimplifiedSegmentObj_(t) {
    const e = t.segment, s = t.part, n = { resolvedUri: s ? s.resolvedUri : e.resolvedUri, byterange: s ? s.byterange : e.byterange, requestId: t.requestId, transmuxer: t.transmuxer, audioAppendStart: t.audioAppendStart, gopsToAlignWith: t.gopsToAlignWith, part: t.part }, r = t.playlist.segments[t.mediaIndex - 1];
    if (r && r.timeline === e.timeline && (r.videoTimingInfo ? n.baseStartTime = r.videoTimingInfo.transmuxedDecodeEnd : r.audioTimingInfo && (n.baseStartTime = r.audioTimingInfo.transmuxedDecodeEnd)), e.key) {
      const a = e.key.iv || new Uint32Array([0, 0, 0, t.mediaIndex + t.playlist.mediaSequence]);
      n.key = this.segmentKey(e.key), n.key.iv = a;
    }
    return e.map && (n.map = this.initSegmentForMap(e.map)), n;
  }
  saveTransferStats_(t) {
    this.mediaRequests += 1, t && (this.mediaBytesTransferred += t.bytesReceived, this.mediaTransferDuration += t.roundTripTime);
  }
  saveBandwidthRelatedStats_(t, e) {
    this.pendingSegment_.byteLength = e.bytesReceived, t < er ? this.logger_(`Ignoring segment's bandwidth because its duration of ${t} is less than the min to record ${er}`) : (this.bandwidth = e.bandwidth, this.roundTrip = e.roundTripTime);
  }
  handleTimeout_() {
    this.mediaRequestsTimedout += 1, this.bandwidth = 1, this.roundTrip = NaN, this.trigger("bandwidthupdate"), this.trigger("timeout");
  }
  segmentRequestFinished_(t, e, s) {
    if (this.callQueue_.length) return void this.callQueue_.push(this.segmentRequestFinished_.bind(this, t, e, s));
    if (this.saveTransferStats_(e.stats), !this.pendingSegment_ || e.requestId !== this.pendingSegment_.requestId) return;
    if (t)
      return this.pendingSegment_ = null, this.state = "READY", t.code === Pe.ABORTED ? void 0 : (this.pause(), t.code === Pe.TIMEOUT ? void this.handleTimeout_() : (this.mediaRequestsErrored += 1, this.error(t), void this.trigger("error")));
    const n = this.pendingSegment_;
    this.saveBandwidthRelatedStats_(n.duration, e.stats), n.endOfAllRequests = e.endOfAllRequests, s.gopInfo && (this.gopBuffer_ = u1(this.gopBuffer_, s.gopInfo, this.safeAppend_)), this.state = "APPENDING", this.trigger("appending"), this.waitForAppendsToComplete_(n);
  }
  setTimeMapping_(t) {
    const e = this.syncController_.mappingForTimeline(t);
    e !== null && (this.timeMapping_ = e);
  }
  updateMediaSecondsLoaded_(t) {
    typeof t.start == "number" && typeof t.end == "number" ? this.mediaSecondsLoaded += t.end - t.start : this.mediaSecondsLoaded += t.duration;
  }
  shouldUpdateTransmuxerTimestampOffset_(t) {
    return t !== null && (this.loaderType_ === "main" && t !== this.sourceUpdater_.videoTimestampOffset() || !this.audioDisabled_ && t !== this.sourceUpdater_.audioTimestampOffset());
  }
  trueSegmentStart_({ currentStart: t, playlist: e, mediaIndex: s, firstVideoFrameTimeForData: n, currentVideoTimestampOffset: r, useVideoTimingInfo: a, videoTimingInfo: l, audioTimingInfo: u }) {
    if (t !== void 0) return t;
    if (!a) return u.start;
    const p = e.segments[s - 1];
    return s !== 0 && p && p.start !== void 0 && p.end === n + r ? l.start : n;
  }
  waitForAppendsToComplete_(t) {
    const e = this.getCurrentMediaInfo_(t);
    if (!e) return this.error({ message: "No starting media returned, likely due to an unsupported media format.", playlistExclusionDuration: 1 / 0, metadata: { errorType: D.Error.SegmentUnsupportedMediaFormat } }), void this.trigger("error");
    const { hasAudio: s, hasVideo: n, isMuxed: r } = e, a = this.loaderType_ === "main" && n, l = !this.audioDisabled_ && s && !r;
    if (t.waitingOnAppends = 0, !t.hasAppendedData_) return t.timingInfo || typeof t.timestampOffset != "number" || (this.isPendingTimestampOffset_ = !0), t.timingInfo = { start: 0 }, t.waitingOnAppends++, this.isPendingTimestampOffset_ || (this.updateSourceBufferTimestampOffset_(t), this.processMetadataQueue_()), void this.checkAppendsDone_(t);
    a && t.waitingOnAppends++, l && t.waitingOnAppends++, a && this.sourceUpdater_.videoQueueCallback(this.checkAppendsDone_.bind(this, t)), l && this.sourceUpdater_.audioQueueCallback(this.checkAppendsDone_.bind(this, t));
  }
  checkAppendsDone_(t) {
    this.checkForAbort_(t.requestId) || (t.waitingOnAppends--, t.waitingOnAppends === 0 && this.handleAppendsDone_());
  }
  checkForIllegalMediaSwitch(t) {
    const e = g1(this.loaderType_, this.getCurrentMediaInfo_(), t);
    return !!e && (this.error({ message: e, playlistExclusionDuration: 1 / 0, metadata: { errorType: D.Error.SegmentSwitchError } }), this.trigger("error"), !0);
  }
  updateSourceBufferTimestampOffset_(t) {
    if (t.timestampOffset === null || typeof t.timingInfo.start != "number" || t.changedTimestampOffset || this.loaderType_ !== "main") return;
    let e = !1;
    t.timestampOffset -= this.getSegmentStartTimeForTimestampOffsetCalculation_({ videoTimingInfo: t.segment.videoTimingInfo, audioTimingInfo: t.segment.audioTimingInfo, timingInfo: t.timingInfo }), t.changedTimestampOffset = !0, t.timestampOffset !== this.sourceUpdater_.videoTimestampOffset() && (this.sourceUpdater_.videoTimestampOffset(t.timestampOffset), e = !0), t.timestampOffset !== this.sourceUpdater_.audioTimestampOffset() && (this.sourceUpdater_.audioTimestampOffset(t.timestampOffset), e = !0), e && this.trigger("timestampoffset");
  }
  getSegmentStartTimeForTimestampOffsetCalculation_({ videoTimingInfo: t, audioTimingInfo: e, timingInfo: s }) {
    return this.useDtsForTimestampOffset_ ? t && typeof t.transmuxedDecodeStart == "number" ? t.transmuxedDecodeStart : e && typeof e.transmuxedDecodeStart == "number" ? e.transmuxedDecodeStart : s.start : s.start;
  }
  updateTimingInfoEnd_(t) {
    t.timingInfo = t.timingInfo || {};
    const e = this.getMediaInfo_(), s = this.loaderType_ === "main" && e && e.hasVideo && t.videoTimingInfo ? t.videoTimingInfo : t.audioTimingInfo;
    s && (t.timingInfo.end = typeof s.end == "number" ? s.end : s.start + t.duration);
  }
  handleAppendsDone_() {
    if (this.pendingSegment_ && this.trigger("appendsdone"), !this.pendingSegment_) return this.state = "READY", void (this.paused() || this.monitorBuffer_());
    const t = this.pendingSegment_;
    t.part && t.part.syncInfo ? t.part.syncInfo.markAppended() : t.segment.syncInfo && t.segment.syncInfo.markAppended(), this.updateTimingInfoEnd_(t), this.shouldSaveSegmentTimingInfo_ && this.syncController_.saveSegmentTimingInfo({ segmentInfo: t, shouldSaveTimelineMapping: this.loaderType_ === "main" });
    const e = v1(t, this.sourceType_);
    if (e && (e.severity === "warn" ? D.log.warn(e.message) : this.logger_(e.message)), this.recordThroughput_(t), this.pendingSegment_ = null, this.state = "READY", t.isSyncRequest && (this.trigger("syncinfoupdate"), !t.hasAppendedData_)) return void this.logger_(`Throwing away un-appended sync request ${Hi(t)}`);
    this.logger_(`Appended ${Hi(t)}`), this.addSegmentMetadataCue_(t), this.fetchAtBuffer_ = !0, this.currentTimeline_ !== t.timeline && (this.timelineChangeController_.lastTimelineChange({ type: this.loaderType_, from: this.currentTimeline_, to: t.timeline }), this.loaderType_ !== "main" || this.audioDisabled_ || this.timelineChangeController_.lastTimelineChange({ type: "audio", from: this.currentTimeline_, to: t.timeline })), this.currentTimeline_ = t.timeline, this.trigger("syncinfoupdate");
    const s = t.segment, n = t.part, r = s.end && this.currentTime_() - s.end > 3 * t.playlist.targetDuration, a = n && n.end && this.currentTime_() - n.end > 3 * t.playlist.partTargetDuration;
    if (r || a) return this.logger_(`bad ${r ? "segment" : "part"} ${Hi(t)}`), void this.resetEverything();
    this.mediaIndex !== null && this.trigger("bandwidthupdate"), this.trigger("progress"), this.mediaIndex = t.mediaIndex, this.partIndex = t.partIndex, this.isEndOfStream_(t.mediaIndex, t.playlist, t.partIndex) && this.endOfStream(), this.trigger("appended"), t.hasAppendedData_ && this.mediaAppends++, this.paused() || this.monitorBuffer_();
  }
  recordThroughput_(t) {
    if (t.duration < er) return void this.logger_(`Ignoring segment's throughput because its duration of ${t.duration} is less than the min to record ${er}`);
    const e = this.throughput.rate, s = Date.now() - t.endOfAllRequests + 1, n = Math.floor(t.byteLength / s * 8 * 1e3);
    this.throughput.rate += (n - e) / ++this.throughput.count;
  }
  addSegmentMetadataCue_(t) {
    if (!this.segmentMetadataTrack_) return;
    const e = t.segment, s = e.start, n = e.end;
    if (!Gd(s) || !Gd(n)) return;
    Ys(s, n, this.segmentMetadataTrack_);
    const r = E.WebKitDataCue || E.VTTCue, a = { custom: e.custom, dateTimeObject: e.dateTimeObject, dateTimeString: e.dateTimeString, programDateTime: e.programDateTime, bandwidth: t.playlist.attributes.BANDWIDTH, resolution: t.playlist.attributes.RESOLUTION, codecs: t.playlist.attributes.CODECS, byteLength: t.byteLength, uri: t.uri, timeline: t.timeline, playlist: t.playlist.id, start: s, end: n }, l = new r(s, n, JSON.stringify(a));
    l.value = a, this.segmentMetadataTrack_.addCue(l);
  }
}
function We() {
}
const jm = function(i) {
  return typeof i != "string" ? i : i.replace(/./, (t) => t.toUpperCase());
}, b1 = ["video", "audio"], rl = (i, t) => {
  const e = t[`${i}Buffer`];
  return e && e.updating || t.queuePending[i];
}, T1 = (i, t) => {
  for (let e = 0; e < t.length; e++) {
    const s = t[e];
    if (s.type === "mediaSource") return null;
    if (s.type === i) return e;
  }
  return null;
}, ls = (i, t) => {
  if (t.queue.length === 0) return;
  let e = 0, s = t.queue[e];
  if (s.type !== "mediaSource") {
    if (i !== "mediaSource" && t.ready() && t.mediaSource.readyState !== "closed" && !rl(i, t)) {
      if (s.type !== i) {
        if (e = T1(i, t.queue), e === null) return;
        s = t.queue[e];
      }
      return t.queue.splice(e, 1), t.queuePending[i] = s, s.action(i, t), s.doneFn ? void 0 : (t.queuePending[i] = null, void ls(i, t));
    }
  } else t.updating() || t.mediaSource.readyState === "closed" || (t.queue.shift(), s.action(t), s.doneFn && s.doneFn(), ls("audio", t), ls("video", t));
}, $m = (i, t) => {
  const e = t[`${i}Buffer`], s = jm(i);
  e && (e.removeEventListener("updateend", t[`on${s}UpdateEnd_`]), e.removeEventListener("error", t[`on${s}Error_`]), t.codecs[i] = null, t[`${i}Buffer`] = null);
}, ke = (i, t) => i && t && Array.prototype.indexOf.call(i.sourceBuffers, t) !== -1, ie = { appendBuffer: (i, t, e) => (s, n) => {
  const r = n[`${s}Buffer`];
  if (ke(n.mediaSource, r)) {
    n.logger_(`Appending segment ${t.mediaIndex}'s ${i.length} bytes to ${s}Buffer`);
    try {
      r.appendBuffer(i);
    } catch (a) {
      n.logger_(`Error with code ${a.code} ` + (a.code === qm ? "(QUOTA_EXCEEDED_ERR) " : "") + `when appending segment ${t.mediaIndex} to ${s}Buffer`), n.queuePending[s] = null, e(a);
    }
  }
}, remove: (i, t) => (e, s) => {
  const n = s[`${e}Buffer`];
  if (ke(s.mediaSource, n)) {
    s.logger_(`Removing ${i} to ${t} from ${e}Buffer`);
    try {
      n.remove(i, t);
    } catch {
      s.logger_(`Remove ${i} to ${t} from ${e}Buffer failed`);
    }
  }
}, timestampOffset: (i) => (t, e) => {
  const s = e[`${t}Buffer`];
  ke(e.mediaSource, s) && (e.logger_(`Setting ${t}timestampOffset to ${i}`), s.timestampOffset = i);
}, callback: (i) => (t, e) => {
  i();
}, endOfStream: (i) => (t) => {
  if (t.mediaSource.readyState === "open") {
    t.logger_(`Calling mediaSource endOfStream(${i || ""})`);
    try {
      t.mediaSource.endOfStream(i);
    } catch (e) {
      D.log.warn("Failed to call media source endOfStream", e);
    }
  }
}, duration: (i) => (t) => {
  t.logger_(`Setting mediaSource duration to ${i}`);
  try {
    t.mediaSource.duration = i;
  } catch (e) {
    D.log.warn("Failed to set media source duration", e);
  }
}, abort: () => (i, t) => {
  if (t.mediaSource.readyState !== "open") return;
  const e = t[`${i}Buffer`];
  if (ke(t.mediaSource, e)) {
    t.logger_(`calling abort on ${i}Buffer`);
    try {
      e.abort();
    } catch (s) {
      D.log.warn(`Failed to abort on ${i}Buffer`, s);
    }
  }
}, addSourceBuffer: (i, t) => (e) => {
  const s = jm(i), n = on(t);
  e.logger_(`Adding ${i}Buffer with codec ${t} to mediaSource`);
  const r = e.mediaSource.addSourceBuffer(n);
  r.addEventListener("updateend", e[`on${s}UpdateEnd_`]), r.addEventListener("error", e[`on${s}Error_`]), e.codecs[i] = t, e[`${i}Buffer`] = r;
}, removeSourceBuffer: (i) => (t) => {
  const e = t[`${i}Buffer`];
  if ($m(i, t), ke(t.mediaSource, e)) {
    t.logger_(`Removing ${i}Buffer with codec ${t.codecs[i]} from mediaSource`);
    try {
      t.mediaSource.removeSourceBuffer(e);
    } catch (s) {
      D.log.warn(`Failed to removeSourceBuffer ${i}Buffer`, s);
    }
  }
}, changeType: (i) => (t, e) => {
  const s = e[`${t}Buffer`], n = on(i);
  if (!ke(e.mediaSource, s)) return;
  const r = i.substring(0, i.indexOf(".")), a = e.codecs[t];
  if (a.substring(0, a.indexOf(".")) !== r) {
    e.logger_(`changing ${t}Buffer codec from ${e.codecs[t]} to ${i}`);
    try {
      s.changeType(n), e.codecs[t] = i;
    } catch (l) {
      D.log.warn(`Failed to changeType on ${t}Buffer`, l);
    }
  }
} }, se = ({ type: i, sourceUpdater: t, action: e, doneFn: s, name: n }) => {
  t.queue.push({ type: i, action: e, doneFn: s, name: n }), ls(i, t);
}, Qd = (i, t) => (e) => {
  const s = Vb(t[`${i}Buffered`]());
  if (t.logger_(`received "updateend" event for ${i} Source Buffer: `, s), t.queuePending[i]) {
    const n = t.queuePending[i].doneFn;
    t.queuePending[i] = null, n && n(t[`${i}Error_`]);
  }
  ls(i, t);
};
class Hm extends D.EventTarget {
  constructor(t) {
    super(), this.mediaSource = t, this.sourceopenListener_ = () => ls("mediaSource", this), this.mediaSource.addEventListener("sourceopen", this.sourceopenListener_), this.logger_ = de("SourceUpdater"), this.audioTimestampOffset_ = 0, this.videoTimestampOffset_ = 0, this.queue = [], this.queuePending = { audio: null, video: null }, this.delayedAudioAppendQueue_ = [], this.videoAppendQueued_ = !1, this.codecs = {}, this.onVideoUpdateEnd_ = Qd("video", this), this.onAudioUpdateEnd_ = Qd("audio", this), this.onVideoError_ = (e) => {
      this.videoError_ = e;
    }, this.onAudioError_ = (e) => {
      this.audioError_ = e;
    }, this.createdSourceBuffers_ = !1, this.initializedEme_ = !1, this.triggeredReady_ = !1;
  }
  initializedEme() {
    this.initializedEme_ = !0, this.triggerReady();
  }
  hasCreatedSourceBuffers() {
    return this.createdSourceBuffers_;
  }
  hasInitializedAnyEme() {
    return this.initializedEme_;
  }
  ready() {
    return this.hasCreatedSourceBuffers() && this.hasInitializedAnyEme();
  }
  createSourceBuffers(t) {
    this.hasCreatedSourceBuffers() || (this.addOrChangeSourceBuffers(t), this.createdSourceBuffers_ = !0, this.trigger("createdsourcebuffers"), this.triggerReady());
  }
  triggerReady() {
    this.ready() && !this.triggeredReady_ && (this.triggeredReady_ = !0, this.trigger("ready"));
  }
  addSourceBuffer(t, e) {
    se({ type: "mediaSource", sourceUpdater: this, action: ie.addSourceBuffer(t, e), name: "addSourceBuffer" });
  }
  abort(t) {
    se({ type: t, sourceUpdater: this, action: ie.abort(t), name: "abort" });
  }
  removeSourceBuffer(t) {
    this.canRemoveSourceBuffer() ? se({ type: "mediaSource", sourceUpdater: this, action: ie.removeSourceBuffer(t), name: "removeSourceBuffer" }) : D.log.error("removeSourceBuffer is not supported!");
  }
  canRemoveSourceBuffer() {
    return !D.browser.IS_FIREFOX && E.MediaSource && E.MediaSource.prototype && typeof E.MediaSource.prototype.removeSourceBuffer == "function";
  }
  static canChangeType() {
    return E.SourceBuffer && E.SourceBuffer.prototype && typeof E.SourceBuffer.prototype.changeType == "function";
  }
  canChangeType() {
    return this.constructor.canChangeType();
  }
  changeType(t, e) {
    this.canChangeType() ? se({ type: t, sourceUpdater: this, action: ie.changeType(e), name: "changeType" }) : D.log.error("changeType is not supported!");
  }
  addOrChangeSourceBuffers(t) {
    if (!t || typeof t != "object" || Object.keys(t).length === 0) throw new Error("Cannot addOrChangeSourceBuffers to undefined codecs");
    Object.keys(t).forEach((e) => {
      const s = t[e];
      if (!this.hasCreatedSourceBuffers()) return this.addSourceBuffer(e, s);
      this.canChangeType() && this.changeType(e, s);
    });
  }
  appendBuffer(t, e) {
    const { segmentInfo: s, type: n, bytes: r } = t;
    if (this.processedAppend_ = !0, n === "audio" && this.videoBuffer && !this.videoAppendQueued_) return this.delayedAudioAppendQueue_.push([t, e]), void this.logger_(`delayed audio append of ${r.length} until video append`);
    const a = e;
    if (se({ type: n, sourceUpdater: this, action: ie.appendBuffer(r, s || { mediaIndex: -1 }, a), doneFn: e, name: "appendBuffer" }), n === "video") {
      if (this.videoAppendQueued_ = !0, !this.delayedAudioAppendQueue_.length) return;
      const l = this.delayedAudioAppendQueue_.slice();
      this.logger_(`queuing delayed audio ${l.length} appendBuffers`), this.delayedAudioAppendQueue_.length = 0, l.forEach((u) => {
        this.appendBuffer.apply(this, u);
      });
    }
  }
  audioBuffered() {
    return ke(this.mediaSource, this.audioBuffer) && this.audioBuffer.buffered ? this.audioBuffer.buffered : Jt();
  }
  videoBuffered() {
    return ke(this.mediaSource, this.videoBuffer) && this.videoBuffer.buffered ? this.videoBuffer.buffered : Jt();
  }
  buffered() {
    const t = ke(this.mediaSource, this.videoBuffer) ? this.videoBuffer : null, e = ke(this.mediaSource, this.audioBuffer) ? this.audioBuffer : null;
    return e && !t ? this.audioBuffered() : t && !e ? this.videoBuffered() : Wb(this.audioBuffered(), this.videoBuffered());
  }
  setDuration(t, e = We) {
    se({ type: "mediaSource", sourceUpdater: this, action: ie.duration(t), name: "duration", doneFn: e });
  }
  endOfStream(t = null, e = We) {
    typeof t != "string" && (t = void 0), se({ type: "mediaSource", sourceUpdater: this, action: ie.endOfStream(t), name: "endOfStream", doneFn: e });
  }
  removeAudio(t, e, s = We) {
    this.audioBuffered().length && this.audioBuffered().end(0) !== 0 ? se({ type: "audio", sourceUpdater: this, action: ie.remove(t, e), doneFn: s, name: "remove" }) : s();
  }
  removeVideo(t, e, s = We) {
    this.videoBuffered().length && this.videoBuffered().end(0) !== 0 ? se({ type: "video", sourceUpdater: this, action: ie.remove(t, e), doneFn: s, name: "remove" }) : s();
  }
  updating() {
    return !(!rl("audio", this) && !rl("video", this));
  }
  audioTimestampOffset(t) {
    return t !== void 0 && this.audioBuffer && this.audioTimestampOffset_ !== t && (se({ type: "audio", sourceUpdater: this, action: ie.timestampOffset(t), name: "timestampOffset" }), this.audioTimestampOffset_ = t), this.audioTimestampOffset_;
  }
  videoTimestampOffset(t) {
    return t !== void 0 && this.videoBuffer && this.videoTimestampOffset !== t && (se({ type: "video", sourceUpdater: this, action: ie.timestampOffset(t), name: "timestampOffset" }), this.videoTimestampOffset_ = t), this.videoTimestampOffset_;
  }
  audioQueueCallback(t) {
    this.audioBuffer && se({ type: "audio", sourceUpdater: this, action: ie.callback(t), name: "callback" });
  }
  videoQueueCallback(t) {
    this.videoBuffer && se({ type: "video", sourceUpdater: this, action: ie.callback(t), name: "callback" });
  }
  dispose() {
    this.trigger("dispose"), b1.forEach((t) => {
      this.abort(t), this.canRemoveSourceBuffer() ? this.removeSourceBuffer(t) : this[`${t}QueueCallback`](() => $m(t, this));
    }), this.videoAppendQueued_ = !1, this.delayedAudioAppendQueue_.length = 0, this.sourceopenListener_ && this.mediaSource.removeEventListener("sourceopen", this.sourceopenListener_), this.off();
  }
}
const Jd = (i) => decodeURIComponent(escape(String.fromCharCode.apply(null, i))), S1 = (i) => {
  const t = new Uint8Array(i);
  return Array.from(t).map((e) => e.toString(16).padStart(2, "0")).join("");
}, Zd = new Uint8Array(`

`.split("").map((i) => i.charCodeAt(0)));
class E1 extends Error {
  constructor() {
    super("Trying to parse received VTT cues, but there is no WebVTT. Make sure vtt.js is loaded.");
  }
}
class w1 extends nl {
  constructor(t, e = {}) {
    super(t, e), this.mediaSource_ = null, this.subtitlesTrack_ = null, this.featuresNativeTextTracks_ = t.featuresNativeTextTracks, this.loadVttJs = t.loadVttJs, this.shouldSaveSegmentTimingInfo_ = !1;
  }
  createTransmuxer_() {
    return null;
  }
  buffered_() {
    if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues || !this.subtitlesTrack_.cues.length) return Jt();
    const t = this.subtitlesTrack_.cues;
    return Jt([[t[0].startTime, t[t.length - 1].startTime]]);
  }
  initSegmentForMap(t, e = !1) {
    if (!t) return null;
    const s = Nr(t);
    let n = this.initSegments_[s];
    if (e && !n && t.bytes) {
      const r = Zd.byteLength + t.bytes.byteLength, a = new Uint8Array(r);
      a.set(t.bytes), a.set(Zd, t.bytes.byteLength), this.initSegments_[s] = n = { resolvedUri: t.resolvedUri, byterange: t.byterange, bytes: a };
    }
    return n || t;
  }
  couldBeginLoading_() {
    return this.playlist_ && this.subtitlesTrack_ && !this.paused();
  }
  init_() {
    return this.state = "READY", this.resetEverything(), this.monitorBuffer_();
  }
  track(t) {
    return t === void 0 || (this.subtitlesTrack_ = t, this.state === "INIT" && this.couldBeginLoading_() && this.init_()), this.subtitlesTrack_;
  }
  remove(t, e) {
    Ys(t, e, this.subtitlesTrack_);
  }
  fillBuffer_() {
    const t = this.chooseNextRequest_();
    if (t) {
      if (this.syncController_.timestampOffsetForTimeline(t.timeline) === null) {
        const e = () => {
          this.state = "READY", this.paused() || this.monitorBuffer_();
        };
        return this.syncController_.one("timestampoffset", e), void (this.state = "WAITING_ON_TIMELINE");
      }
      this.loadSegment_(t);
    }
  }
  timestampOffsetForSegment_() {
    return null;
  }
  chooseNextRequest_() {
    return this.skipEmptySegments_(super.chooseNextRequest_());
  }
  skipEmptySegments_(t) {
    for (; t && t.segment.empty; ) {
      if (t.mediaIndex + 1 >= t.playlist.segments.length) {
        t = null;
        break;
      }
      t = this.generateSegmentInfo_({ playlist: t.playlist, mediaIndex: t.mediaIndex + 1, startOfSegment: t.startOfSegment + t.duration, isSyncRequest: t.isSyncRequest });
    }
    return t;
  }
  stopForError(t) {
    this.error(t), this.state = "READY", this.pause(), this.trigger("error");
  }
  segmentRequestFinished_(t, e, s) {
    if (!this.subtitlesTrack_) return void (this.state = "READY");
    if (this.saveTransferStats_(e.stats), !this.pendingSegment_) return this.state = "READY", void (this.mediaRequestsAborted += 1);
    if (t) return t.code === Pe.TIMEOUT && this.handleTimeout_(), t.code === Pe.ABORTED ? this.mediaRequestsAborted += 1 : this.mediaRequestsErrored += 1, void this.stopForError(t);
    const n = this.pendingSegment_;
    this.saveBandwidthRelatedStats_(n.duration, e.stats), e.key && this.segmentKey(e.key, !0), this.state = "APPENDING", this.trigger("appending");
    const r = n.segment;
    if (r.map && (r.map.bytes = e.map.bytes), n.bytes = e.bytes, typeof E.WebVTT != "function" && typeof this.loadVttJs == "function") return this.state = "WAITING_ON_VTTJS", void this.loadVttJs().then(() => this.segmentRequestFinished_(t, e, s), () => this.stopForError({ message: "Error loading vtt.js", metadata: { errorType: D.Error.VttLoadError } }));
    r.requested = !0;
    try {
      this.parseVTTCues_(n);
    } catch (a) {
      return void this.stopForError({ message: a.message, metadata: { errorType: D.Error.VttCueParsingError } });
    }
    if (this.updateTimeMapping_(n, this.syncController_.timelines[n.timeline], this.playlist_), n.cues.length ? n.timingInfo = { start: n.cues[0].startTime, end: n.cues[n.cues.length - 1].endTime } : n.timingInfo = { start: n.startOfSegment, end: n.startOfSegment + n.duration }, n.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void (this.state = "READY");
    n.byteLength = n.bytes.byteLength, this.mediaSecondsLoaded += r.duration, n.cues.forEach((a) => {
      this.subtitlesTrack_.addCue(this.featuresNativeTextTracks_ ? new E.VTTCue(a.startTime, a.endTime, a.text) : a);
    }), l1(this.subtitlesTrack_), this.handleAppendsDone_();
  }
  handleData_() {
  }
  updateTimingInfoEnd_() {
  }
  parseVTTCues_(t) {
    let e, s = !1;
    if (typeof E.WebVTT != "function") throw new E1();
    typeof E.TextDecoder == "function" ? e = new E.TextDecoder("utf8") : (e = E.WebVTT.StringDecoder(), s = !0);
    const n = new E.WebVTT.Parser(E, E.vttjs, e);
    if (t.cues = [], t.timestampmap = { MPEGTS: 0, LOCAL: 0 }, n.oncue = t.cues.push.bind(t.cues), n.ontimestampmap = (a) => {
      t.timestampmap = a;
    }, n.onparsingerror = (a) => {
      D.log.warn("Error encountered when parsing cues: " + a.message);
    }, t.segment.map) {
      let a = t.segment.map.bytes;
      s && (a = Jd(a)), n.parse(a);
    }
    let r = t.bytes;
    s && (r = Jd(r)), n.parse(r), n.flush();
  }
  updateTimeMapping_(t, e, s) {
    const n = t.segment;
    if (!e) return;
    if (!t.cues.length) return void (n.empty = !0);
    const { MPEGTS: r, LOCAL: a } = t.timestampmap, l = r / Ci.ONE_SECOND_IN_TS - a + e.mapping;
    if (t.cues.forEach((u) => {
      const p = u.endTime - u.startTime, g = r === 0 ? u.startTime + l : this.handleRollover_(u.startTime + l, e.time);
      u.startTime = Math.max(g, 0), u.endTime = Math.max(g + p, 0);
    }), !s.syncInfo) {
      const u = t.cues[0].startTime, p = t.cues[t.cues.length - 1].startTime;
      s.syncInfo = { mediaSequence: s.mediaSequence + t.mediaIndex, time: Math.min(u, p - n.duration) };
    }
  }
  handleRollover_(t, e) {
    if (e === null) return t;
    let s = t * Ci.ONE_SECOND_IN_TS;
    const n = e * Ci.ONE_SECOND_IN_TS;
    let r;
    for (r = n < s ? -8589934592 : 8589934592; Math.abs(s - n) > 4294967296; ) s += r;
    return s / Ci.ONE_SECOND_IN_TS;
  }
}
const C1 = function(i, t) {
  const e = i.cues;
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    if (t >= n.adStartTime && t <= n.adEndTime) return n;
  }
  return null;
}, k1 = function(i, t, e = 0) {
  if (!i.segments) return;
  let s, n = e;
  for (let r = 0; r < i.segments.length; r++) {
    const a = i.segments[r];
    if (s || (s = C1(t, n + a.duration / 2)), s) {
      if ("cueIn" in a) {
        s.endTime = n, s.adEndTime = n, n += a.duration, s = null;
        continue;
      }
      if (n < s.endTime) {
        n += a.duration;
        continue;
      }
      s.endTime += a.duration;
    } else if ("cueOut" in a && (s = new E.VTTCue(n, n + a.duration, a.cueOut), s.adStartTime = n, s.adEndTime = n + parseFloat(a.cueOut), t.addCue(s)), "cueOutCont" in a) {
      const [l, u] = a.cueOutCont.split("/").map(parseFloat);
      s = new E.VTTCue(n, n + a.duration, ""), s.adStartTime = n - l, s.adEndTime = s.adStartTime + u, t.addCue(s);
    }
    n += a.duration;
  }
};
class tc {
  constructor({ start: t, end: e, segmentIndex: s, partIndex: n = null, appended: r = !1 }) {
    this.start_ = t, this.end_ = e, this.segmentIndex_ = s, this.partIndex_ = n, this.appended_ = r;
  }
  isInRange(t) {
    return t >= this.start && t < this.end;
  }
  markAppended() {
    this.appended_ = !0;
  }
  resetAppendedStatus() {
    this.appended_ = !1;
  }
  get isAppended() {
    return this.appended_;
  }
  get start() {
    return this.start_;
  }
  get end() {
    return this.end_;
  }
  get segmentIndex() {
    return this.segmentIndex_;
  }
  get partIndex() {
    return this.partIndex_;
  }
}
class x1 {
  constructor(t, e = []) {
    this.segmentSyncInfo_ = t, this.partsSyncInfo_ = e;
  }
  get segmentSyncInfo() {
    return this.segmentSyncInfo_;
  }
  get partsSyncInfo() {
    return this.partsSyncInfo_;
  }
  get hasPartsSyncInfo() {
    return this.partsSyncInfo_.length > 0;
  }
  resetAppendStatus() {
    this.segmentSyncInfo_.resetAppendedStatus(), this.partsSyncInfo_.forEach((t) => t.resetAppendedStatus());
  }
}
class vo {
  constructor() {
    this.storage_ = /* @__PURE__ */ new Map(), this.diagnostics_ = "", this.isReliable_ = !1, this.start_ = -1 / 0, this.end_ = 1 / 0;
  }
  get start() {
    return this.start_;
  }
  get end() {
    return this.end_;
  }
  get diagnostics() {
    return this.diagnostics_;
  }
  get isReliable() {
    return this.isReliable_;
  }
  resetAppendedStatus() {
    this.storage_.forEach((t) => t.resetAppendStatus());
  }
  update(t, e) {
    const { mediaSequence: s, segments: n } = t;
    if (this.isReliable_ = this.isReliablePlaylist_(s, n), this.isReliable_) return this.updateStorage_(n, s, this.calculateBaseTime_(s, e));
  }
  getSyncInfoForTime(t) {
    for (const { segmentSyncInfo: e, partsSyncInfo: s } of this.storage_.values()) if (s.length) {
      for (const n of s) if (n.isInRange(t)) return n;
    } else if (e.isInRange(t)) return e;
    return null;
  }
  updateStorage_(t, e, s) {
    const n = /* @__PURE__ */ new Map();
    let r = `
`, a = s, l = e;
    this.start_ = a, t.forEach((u, p) => {
      const g = this.storage_.get(l), y = a, T = y + u.duration, C = !!(g && g.segmentSyncInfo && g.segmentSyncInfo.isAppended), _ = new tc({ start: y, end: T, appended: C, segmentIndex: p });
      u.syncInfo = _;
      let k = a;
      const x = (u.parts || []).map((A, I) => {
        const O = k, N = k + A.duration, P = !!(g && g.partsSyncInfo && g.partsSyncInfo[I] && g.partsSyncInfo[I].isAppended), j = new tc({ start: O, end: N, appended: P, segmentIndex: p, partIndex: I });
        return k = N, r += `Media Sequence: ${l}.${I} | Range: ${O} --> ${N} | Appended: ${P}
`, A.syncInfo = j, j;
      });
      n.set(l, new x1(_, x)), r += `${Fm(u.resolvedUri)} | Media Sequence: ${l} | Range: ${y} --> ${T} | Appended: ${C}
`, l++, a = T;
    }), this.end_ = a, this.storage_ = n, this.diagnostics_ = r;
  }
  calculateBaseTime_(t, e) {
    return this.storage_.size ? this.storage_.has(t) ? this.storage_.get(t).segmentSyncInfo.start : e : 0;
  }
  isReliablePlaylist_(t, e) {
    return t != null && Array.isArray(e) && e.length;
  }
}
const I1 = 86400, bo = [{ name: "VOD", run: (i, t, e, s, n) => e !== 1 / 0 ? { time: 0, segmentIndex: 0, partIndex: null } : null }, { name: "MediaSequence", run: (i, t, e, s, n, r) => {
  const a = i.getMediaSequenceSync(r);
  if (!a || !a.isReliable) return null;
  const l = a.getSyncInfoForTime(n);
  return l ? { time: l.start, partIndex: l.partIndex, segmentIndex: l.segmentIndex } : null;
} }, { name: "ProgramDateTime", run: (i, t, e, s, n) => {
  if (!Object.keys(i.timelineToDatetimeMappings).length) return null;
  let r = null, a = null;
  const l = Yo(t);
  n = n || 0;
  for (let u = 0; u < l.length; u++) {
    const p = l[t.endList || n === 0 ? u : l.length - (u + 1)], g = p.segment, y = i.timelineToDatetimeMappings[g.timeline];
    if (!y || !g.dateTimeObject) continue;
    let T = g.dateTimeObject.getTime() / 1e3 + y;
    if (g.parts && typeof p.partIndex == "number") for (let _ = 0; _ < p.partIndex; _++) T += g.parts[_].duration;
    const C = Math.abs(n - T);
    if (a !== null && (C === 0 || a < C)) break;
    a = C, r = { time: T, segmentIndex: p.segmentIndex, partIndex: p.partIndex };
  }
  return r;
} }, { name: "Segment", run: (i, t, e, s, n) => {
  let r = null, a = null;
  n = n || 0;
  const l = Yo(t);
  for (let u = 0; u < l.length; u++) {
    const p = l[t.endList || n === 0 ? u : l.length - (u + 1)], g = p.segment, y = p.part && p.part.start || g && g.start;
    if (g.timeline === s && y !== void 0) {
      const T = Math.abs(n - y);
      if (a !== null && a < T) break;
      (!r || a === null || a >= T) && (a = T, r = { time: y, segmentIndex: p.segmentIndex, partIndex: p.partIndex });
    }
  }
  return r;
} }, { name: "Discontinuity", run: (i, t, e, s, n) => {
  let r = null;
  if (n = n || 0, t.discontinuityStarts && t.discontinuityStarts.length) {
    let a = null;
    for (let l = 0; l < t.discontinuityStarts.length; l++) {
      const u = t.discontinuityStarts[l], p = t.discontinuitySequence + l + 1, g = i.discontinuities[p];
      if (g) {
        const y = Math.abs(n - g.time);
        if (a !== null && a < y) break;
        (!r || a === null || a >= y) && (a = y, r = { time: g.time, segmentIndex: u, partIndex: null });
      }
    }
  }
  return r;
} }, { name: "Playlist", run: (i, t, e, s, n) => t.syncInfo ? { time: t.syncInfo.time, segmentIndex: t.syncInfo.mediaSequence - t.mediaSequence, partIndex: null } : null }];
class A1 extends D.EventTarget {
  constructor(t = {}) {
    super(), this.timelines = [], this.discontinuities = [], this.timelineToDatetimeMappings = {}, this.mediaSequenceStorage_ = { main: new vo(), audio: new vo(), vtt: new vo() }, this.logger_ = de("SyncController");
  }
  getMediaSequenceSync(t) {
    return this.mediaSequenceStorage_[t] || null;
  }
  getSyncPoint(t, e, s, n, r) {
    if (e !== 1 / 0)
      return bo.find(({ name: l }) => l === "VOD").run(this, t, e);
    const a = this.runStrategies_(t, e, s, n, r);
    if (!a.length) return null;
    for (const l of a) {
      const { syncPoint: u, strategy: p } = l, { segmentIndex: g, time: y } = u;
      if (g < 0) continue;
      const T = y, C = T + t.segments[g].duration;
      if (this.logger_(`Strategy: ${p}. Current time: ${n}. selected segment: ${g}. Time: [${T} -> ${C}]}`), n >= T && n < C) return this.logger_("Found sync point with exact match: ", u), u;
    }
    return this.selectSyncPoint_(a, { key: "time", value: n });
  }
  getExpiredTime(t, e) {
    if (!t || !t.segments) return null;
    const s = this.runStrategies_(t, e, t.discontinuitySequence, 0);
    if (!s.length) return null;
    const n = this.selectSyncPoint_(s, { key: "segmentIndex", value: 0 });
    return n.segmentIndex > 0 && (n.time *= -1), Math.abs(n.time + sn({ defaultDuration: t.targetDuration, durationList: t.segments, startIndex: n.segmentIndex, endIndex: 0 }));
  }
  runStrategies_(t, e, s, n, r) {
    const a = [];
    for (let l = 0; l < bo.length; l++) {
      const u = bo[l], p = u.run(this, t, e, s, n, r);
      p && (p.strategy = u.name, a.push({ strategy: u.name, syncPoint: p }));
    }
    return a;
  }
  selectSyncPoint_(t, e) {
    let s = t[0].syncPoint, n = Math.abs(t[0].syncPoint[e.key] - e.value), r = t[0].strategy;
    for (let a = 1; a < t.length; a++) {
      const l = Math.abs(t[a].syncPoint[e.key] - e.value);
      l < n && (n = l, s = t[a].syncPoint, r = t[a].strategy);
    }
    return this.logger_(`syncPoint for [${e.key}: ${e.value}] chosen with strategy [${r}]: [time:${s.time}, segmentIndex:${s.segmentIndex}` + (typeof s.partIndex == "number" ? `,partIndex:${s.partIndex}` : "") + "]"), s;
  }
  saveExpiredSegmentInfo(t, e) {
    const s = e.mediaSequence - t.mediaSequence;
    if (s > I1) D.log.warn(`Not saving expired segment info. Media sequence gap ${s} is too large.`);
    else for (let n = s - 1; n >= 0; n--) {
      const r = t.segments[n];
      if (r && r.start !== void 0) {
        e.syncInfo = { mediaSequence: t.mediaSequence + n, time: r.start }, this.logger_(`playlist refresh sync: [time:${e.syncInfo.time}, mediaSequence: ${e.syncInfo.mediaSequence}]`), this.trigger("syncinfoupdate");
        break;
      }
    }
  }
  setDateTimeMappingForStart(t) {
    if (this.timelineToDatetimeMappings = {}, t.segments && t.segments.length && t.segments[0].dateTimeObject) {
      const e = t.segments[0], s = e.dateTimeObject.getTime() / 1e3;
      this.timelineToDatetimeMappings[e.timeline] = -s;
    }
  }
  saveSegmentTimingInfo({ segmentInfo: t, shouldSaveTimelineMapping: e }) {
    const s = this.calculateSegmentTimeMapping_(t, t.timingInfo, e), n = t.segment;
    s && (this.saveDiscontinuitySyncInfo_(t), t.playlist.syncInfo || (t.playlist.syncInfo = { mediaSequence: t.playlist.mediaSequence + t.mediaIndex, time: n.start }));
    const r = n.dateTimeObject;
    n.discontinuity && e && r && (this.timelineToDatetimeMappings[n.timeline] = -r.getTime() / 1e3);
  }
  timestampOffsetForTimeline(t) {
    return this.timelines[t] === void 0 ? null : this.timelines[t].time;
  }
  mappingForTimeline(t) {
    return this.timelines[t] === void 0 ? null : this.timelines[t].mapping;
  }
  calculateSegmentTimeMapping_(t, e, s) {
    const n = t.segment, r = t.part;
    let a, l, u = this.timelines[t.timeline];
    if (typeof t.timestampOffset == "number") u = { time: t.startOfSegment, mapping: t.startOfSegment - e.start }, s && (this.timelines[t.timeline] = u, this.trigger("timestampoffset"), this.logger_(`time mapping for timeline ${t.timeline}: [time: ${u.time}] [mapping: ${u.mapping}]`)), a = t.startOfSegment, l = e.end + u.mapping;
    else {
      if (!u) return !1;
      a = e.start + u.mapping, l = e.end + u.mapping;
    }
    return r && (r.start = a, r.end = l), (!n.start || a < n.start) && (n.start = a), n.end = l, !0;
  }
  saveDiscontinuitySyncInfo_(t) {
    const e = t.playlist, s = t.segment;
    if (s.discontinuity) this.discontinuities[s.timeline] = { time: s.start, accuracy: 0 };
    else if (e.discontinuityStarts && e.discontinuityStarts.length) for (let n = 0; n < e.discontinuityStarts.length; n++) {
      const r = e.discontinuityStarts[n], a = e.discontinuitySequence + n + 1, l = r - t.mediaIndex, u = Math.abs(l);
      if (!this.discontinuities[a] || this.discontinuities[a].accuracy > u) {
        let p;
        p = l < 0 ? s.start - sn({ defaultDuration: e.targetDuration, durationList: e.segments, startIndex: t.mediaIndex, endIndex: r }) : s.end + sn({ defaultDuration: e.targetDuration, durationList: e.segments, startIndex: t.mediaIndex + 1, endIndex: r }), this.discontinuities[a] = { time: p, accuracy: u };
      }
    }
  }
  dispose() {
    this.trigger("dispose"), this.off();
  }
}
class P1 extends D.EventTarget {
  constructor() {
    super(), this.pendingTimelineChanges_ = {}, this.lastTimelineChanges_ = {};
  }
  clearPendingTimelineChange(t) {
    this.pendingTimelineChanges_[t] = null, this.trigger("pendingtimelinechange");
  }
  pendingTimelineChange({ type: t, from: e, to: s }) {
    return typeof e == "number" && typeof s == "number" && (this.pendingTimelineChanges_[t] = { type: t, from: e, to: s }, this.trigger("pendingtimelinechange")), this.pendingTimelineChanges_[t];
  }
  lastTimelineChange({ type: t, from: e, to: s }) {
    return typeof e == "number" && typeof s == "number" && (this.lastTimelineChanges_[t] = { type: t, from: e, to: s }, delete this.pendingTimelineChanges_[t], this.trigger("timelinechange")), this.lastTimelineChanges_[t];
  }
  dispose() {
    this.trigger("dispose"), this.pendingTimelineChanges_ = {}, this.lastTimelineChanges_ = {}, this.off();
  }
}
const D1 = Am(Pm(function() {
  var i = function() {
    function _() {
      this.listeners = {};
    }
    var k = _.prototype;
    return k.on = function(x, A) {
      this.listeners[x] || (this.listeners[x] = []), this.listeners[x].push(A);
    }, k.off = function(x, A) {
      if (!this.listeners[x]) return !1;
      var I = this.listeners[x].indexOf(A);
      return this.listeners[x] = this.listeners[x].slice(0), this.listeners[x].splice(I, 1), I > -1;
    }, k.trigger = function(x) {
      var A = this.listeners[x];
      if (A) if (arguments.length === 2) for (var I = A.length, O = 0; O < I; ++O) A[O].call(this, arguments[1]);
      else for (var N = Array.prototype.slice.call(arguments, 1), P = A.length, j = 0; j < P; ++j) A[j].apply(this, N);
    }, k.dispose = function() {
      this.listeners = {};
    }, k.pipe = function(x) {
      this.on("data", function(A) {
        x.push(A);
      });
    }, _;
  }();
  function t(_) {
    return _.subarray(0, _.byteLength - _[_.byteLength - 1]);
  }
  const e = function() {
    const _ = [[[], [], [], [], []], [[], [], [], [], []]], k = _[0], x = _[1], A = k[4], I = x[4];
    let O, N, P;
    const j = [], V = [];
    let bt, Z, Tt, ot, St, et;
    for (O = 0; O < 256; O++) V[(j[O] = O << 1 ^ 283 * (O >> 7)) ^ O] = O;
    for (N = P = 0; !A[N]; N ^= bt || 1, P = V[P] || 1) for (ot = P ^ P << 1 ^ P << 2 ^ P << 3 ^ P << 4, ot = ot >> 8 ^ 255 & ot ^ 99, A[N] = ot, I[ot] = N, Tt = j[Z = j[bt = j[N]]], et = 16843009 * Tt ^ 65537 * Z ^ 257 * bt ^ 16843008 * N, St = 257 * j[ot] ^ 16843008 * ot, O = 0; O < 4; O++) k[O][N] = St = St << 24 ^ St >>> 8, x[O][ot] = et = et << 24 ^ et >>> 8;
    for (O = 0; O < 5; O++) k[O] = k[O].slice(0), x[O] = x[O].slice(0);
    return _;
  };
  let s = null;
  class n {
    constructor(k) {
      let x, A, I;
      s || (s = e()), this._tables = [[s[0][0].slice(), s[0][1].slice(), s[0][2].slice(), s[0][3].slice(), s[0][4].slice()], [s[1][0].slice(), s[1][1].slice(), s[1][2].slice(), s[1][3].slice(), s[1][4].slice()]];
      const O = this._tables[0][4], N = this._tables[1], P = k.length;
      let j = 1;
      if (P !== 4 && P !== 6 && P !== 8) throw new Error("Invalid aes key size");
      const V = k.slice(0), bt = [];
      for (this._key = [V, bt], x = P; x < 4 * P + 28; x++) I = V[x - 1], (x % P == 0 || P === 8 && x % P == 4) && (I = O[I >>> 24] << 24 ^ O[I >> 16 & 255] << 16 ^ O[I >> 8 & 255] << 8 ^ O[255 & I], x % P == 0 && (I = I << 8 ^ I >>> 24 ^ j << 24, j = j << 1 ^ 283 * (j >> 7))), V[x] = V[x - P] ^ I;
      for (A = 0; x; A++, x--) I = V[3 & A ? x : x - 4], bt[A] = x <= 4 || A < 4 ? I : N[0][O[I >>> 24]] ^ N[1][O[I >> 16 & 255]] ^ N[2][O[I >> 8 & 255]] ^ N[3][O[255 & I]];
    }
    decrypt(k, x, A, I, O, N) {
      const P = this._key[1];
      let j, V, bt, Z = k ^ P[0], Tt = I ^ P[1], ot = A ^ P[2], St = x ^ P[3];
      const et = P.length / 4 - 2;
      let Zt, it = 4;
      const wt = this._tables[1], ce = wt[0], ci = wt[1], pi = wt[2], mi = wt[3], gi = wt[4];
      for (Zt = 0; Zt < et; Zt++) j = ce[Z >>> 24] ^ ci[Tt >> 16 & 255] ^ pi[ot >> 8 & 255] ^ mi[255 & St] ^ P[it], V = ce[Tt >>> 24] ^ ci[ot >> 16 & 255] ^ pi[St >> 8 & 255] ^ mi[255 & Z] ^ P[it + 1], bt = ce[ot >>> 24] ^ ci[St >> 16 & 255] ^ pi[Z >> 8 & 255] ^ mi[255 & Tt] ^ P[it + 2], St = ce[St >>> 24] ^ ci[Z >> 16 & 255] ^ pi[Tt >> 8 & 255] ^ mi[255 & ot] ^ P[it + 3], it += 4, Z = j, Tt = V, ot = bt;
      for (Zt = 0; Zt < 4; Zt++) O[(3 & -Zt) + N] = gi[Z >>> 24] << 24 ^ gi[Tt >> 16 & 255] << 16 ^ gi[ot >> 8 & 255] << 8 ^ gi[255 & St] ^ P[it++], j = Z, Z = Tt, Tt = ot, ot = St, St = j;
    }
  }
  class r extends i {
    constructor() {
      super(i), this.jobs = [], this.delay = 1, this.timeout_ = null;
    }
    processJob_() {
      this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null;
    }
    push(k) {
      this.jobs.push(k), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay));
    }
  }
  const a = function(_) {
    return _ << 24 | (65280 & _) << 8 | (16711680 & _) >> 8 | _ >>> 24;
  }, l = function(_, k, x) {
    const A = new Int32Array(_.buffer, _.byteOffset, _.byteLength >> 2), I = new n(Array.prototype.slice.call(k)), O = new Uint8Array(_.byteLength), N = new Int32Array(O.buffer);
    let P, j, V, bt, Z, Tt, ot, St, et;
    for (P = x[0], j = x[1], V = x[2], bt = x[3], et = 0; et < A.length; et += 4) Z = a(A[et]), Tt = a(A[et + 1]), ot = a(A[et + 2]), St = a(A[et + 3]), I.decrypt(Z, Tt, ot, St, N, et), N[et] = a(N[et] ^ P), N[et + 1] = a(N[et + 1] ^ j), N[et + 2] = a(N[et + 2] ^ V), N[et + 3] = a(N[et + 3] ^ bt), P = Z, j = Tt, V = ot, bt = St;
    return O;
  };
  class u {
    constructor(k, x, A, I) {
      const O = u.STEP, N = new Int32Array(k.buffer), P = new Uint8Array(k.byteLength);
      let j = 0;
      for (this.asyncStream_ = new r(), this.asyncStream_.push(this.decryptChunk_(N.subarray(j, j + O), x, A, P)), j = O; j < N.length; j += O) A = new Uint32Array([a(N[j - 4]), a(N[j - 3]), a(N[j - 2]), a(N[j - 1])]), this.asyncStream_.push(this.decryptChunk_(N.subarray(j, j + O), x, A, P));
      this.asyncStream_.push(function() {
        I(null, t(P));
      });
    }
    static get STEP() {
      return 32e3;
    }
    decryptChunk_(k, x, A, I) {
      return function() {
        const O = l(k, x, A);
        I.set(O, k.byteOffset);
      };
    }
  }
  var p, g = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  p = typeof window < "u" ? window : g !== void 0 ? g : typeof self < "u" ? self : {};
  var y = function(_) {
    return ArrayBuffer.isView === "function" ? ArrayBuffer.isView(_) : _ && _.buffer instanceof ArrayBuffer;
  }, T = p.BigInt || Number;
  T("0x1"), T("0x100"), T("0x10000"), T("0x1000000"), T("0x100000000"), T("0x10000000000"), T("0x1000000000000"), T("0x100000000000000"), T("0x10000000000000000"), function() {
    var _ = new Uint16Array([65484]), k = new Uint8Array(_.buffer, _.byteOffset, _.byteLength);
    k[0] === 255 || k[0];
  }();
  const C = function(_) {
    const k = {};
    return Object.keys(_).forEach((x) => {
      const A = _[x];
      y(A) ? k[x] = { bytes: A.buffer, byteOffset: A.byteOffset, byteLength: A.byteLength } : k[x] = A;
    }), k;
  };
  self.onmessage = function(_) {
    const k = _.data, x = new Uint8Array(k.encrypted.bytes, k.encrypted.byteOffset, k.encrypted.byteLength), A = new Uint32Array(k.key.bytes, k.key.byteOffset, k.key.byteLength / 4), I = new Uint32Array(k.iv.bytes, k.iv.byteOffset, k.iv.byteLength / 4);
    new u(x, A, I, function(O, N) {
      self.postMessage(C({ source: k.source, decrypted: N }), [N.buffer]);
    });
  };
}));
var L1 = Im(D1);
const O1 = (i) => {
  let t = i.default ? "main" : "alternative";
  return i.characteristics && i.characteristics.indexOf("public.accessibility.describes-video") >= 0 && (t = "main-desc"), t;
}, Vm = (i, t) => {
  i.abort(), i.pause(), t && t.activePlaylistLoader && (t.activePlaylistLoader.pause(), t.activePlaylistLoader = null);
}, al = (i, t) => {
  t.activePlaylistLoader = i, i.load();
}, N1 = (i, t) => () => {
  const { segmentLoaders: { [i]: e, main: s }, mediaTypes: { [i]: n } } = t, r = n.activeTrack(), a = n.getActiveGroup(), l = n.activePlaylistLoader, u = n.lastGroup_;
  a && u && a.id === u.id || (n.lastGroup_ = a, n.lastTrack_ = r, Vm(e, n), a && !a.isMainPlaylist && (a.playlistLoader ? (e.resyncLoader(), al(a.playlistLoader, n)) : l && s.resetEverything()));
}, R1 = (i, t) => () => {
  const { segmentLoaders: { [i]: e }, mediaTypes: { [i]: s } } = t;
  s.lastGroup_ = null, e.abort(), e.pause();
}, M1 = (i, t) => () => {
  const { mainPlaylistLoader: e, segmentLoaders: { [i]: s, main: n }, mediaTypes: { [i]: r } } = t, a = r.activeTrack(), l = r.getActiveGroup(), u = r.activePlaylistLoader, p = r.lastTrack_;
  if ((!p || !a || p.id !== a.id) && (r.lastGroup_ = l, r.lastTrack_ = a, Vm(s, r), l)) {
    if (l.isMainPlaylist) {
      if (!a || !p || a.id === p.id) return;
      const g = t.vhs.playlistController_, y = g.selectPlaylist();
      return g.media() === y ? void 0 : (r.logger_(`track change. Switching main audio from ${p.id} to ${a.id}`), e.pause(), n.resetEverything(), void g.fastQualityChange_(y));
    }
    if (i === "AUDIO") {
      if (!l.playlistLoader) return n.setAudio(!0), void n.resetEverything();
      s.setAudio(!0), n.setAudio(!1);
    }
    u !== l.playlistLoader && (s.track && s.track(a), s.resetEverything()), al(l.playlistLoader, r);
  }
}, Ur = { AUDIO: (i, t) => () => {
  const { mediaTypes: { [i]: e }, excludePlaylist: s } = t, n = e.activeTrack(), r = e.activeGroup(), a = (r.filter((u) => u.default)[0] || r[0]).id, l = e.tracks[a];
  if (n !== l) {
    D.log.warn("Problem encountered loading the alternate audio track.Switching back to default.");
    for (const u in e.tracks) e.tracks[u].enabled = e.tracks[u] === l;
    e.onTrackChanged();
  } else s({ error: { message: "Problem encountered loading the default audio track." } });
}, SUBTITLES: (i, t) => () => {
  const { mediaTypes: { [i]: e } } = t;
  D.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track.");
  const s = e.activeTrack();
  s && (s.mode = "disabled"), e.onTrackChanged();
} }, ec = { AUDIO: (i, t, e) => {
  if (!t) return;
  const { tech: s, requestOptions: n, segmentLoaders: { [i]: r } } = e;
  t.on("loadedmetadata", () => {
    const a = t.media();
    r.playlist(a, n), (!s.paused() || a.endList && s.preload() !== "none") && r.load();
  }), t.on("loadedplaylist", () => {
    r.playlist(t.media(), n), s.paused() || r.load();
  }), t.on("error", Ur[i](i, e));
}, SUBTITLES: (i, t, e) => {
  const { tech: s, requestOptions: n, segmentLoaders: { [i]: r }, mediaTypes: { [i]: a } } = e;
  t.on("loadedmetadata", () => {
    const l = t.media();
    r.playlist(l, n), r.track(a.activeTrack()), (!s.paused() || l.endList && s.preload() !== "none") && r.load();
  }), t.on("loadedplaylist", () => {
    r.playlist(t.media(), n), s.paused() || r.load();
  }), t.on("error", Ur[i](i, e));
} }, U1 = { AUDIO: (i, t) => {
  const { vhs: e, sourceType: s, segmentLoaders: { [i]: n }, requestOptions: r, main: { mediaGroups: a }, mediaTypes: { [i]: { groups: l, tracks: u, logger_: p } }, mainPlaylistLoader: g } = t, y = bn(g.main);
  a[i] && Object.keys(a[i]).length !== 0 || (a[i] = { main: { default: { default: !0 } } }, y && (a[i].main.default.playlists = g.main.playlists));
  for (const T in a[i]) {
    l[T] || (l[T] = []);
    for (const C in a[i][T]) {
      let _, k = a[i][T][C];
      if (y ? (p(`AUDIO group '${T}' label '${C}' is a main playlist`), k.isMainPlaylist = !0, _ = null) : _ = s === "vhs-json" && k.playlists ? new Ji(k.playlists[0], e, r) : k.resolvedUri ? new Ji(k.resolvedUri, e, r) : k.playlists && s === "dash" ? new il(k.playlists[0], e, r, g) : null, k = st({ id: C, playlistLoader: _ }, k), ec[i](i, k.playlistLoader, t), l[T].push(k), u[C] === void 0) {
        const x = new D.AudioTrack({ id: C, kind: O1(k), enabled: !1, language: k.language, default: k.default, label: C });
        u[C] = x;
      }
    }
  }
  n.on("error", Ur[i](i, t));
}, SUBTITLES: (i, t) => {
  const { tech: e, vhs: s, sourceType: n, segmentLoaders: { [i]: r }, requestOptions: a, main: { mediaGroups: l }, mediaTypes: { [i]: { groups: u, tracks: p } }, mainPlaylistLoader: g } = t;
  for (const y in l[i]) {
    u[y] || (u[y] = []);
    for (const T in l[i][y]) {
      if (!s.options_.useForcedSubtitles && l[i][y][T].forced) continue;
      let C, _ = l[i][y][T];
      if (n === "hls") C = new Ji(_.resolvedUri, s, a);
      else if (n === "dash") {
        if (!_.playlists.filter((k) => k.excludeUntil !== 1 / 0).length) return;
        C = new il(_.playlists[0], s, a, g);
      } else n === "vhs-json" && (C = new Ji(_.playlists ? _.playlists[0] : _.resolvedUri, s, a));
      if (_ = st({ id: T, playlistLoader: C }, _), ec[i](i, _.playlistLoader, t), u[y].push(_), p[T] === void 0) {
        const k = e.addRemoteTextTrack({ id: T, kind: "subtitles", default: _.default && _.autoselect, language: _.language, label: T }, !1).track;
        p[T] = k;
      }
    }
  }
  r.on("error", Ur[i](i, t));
}, "CLOSED-CAPTIONS": (i, t) => {
  const { tech: e, main: { mediaGroups: s }, mediaTypes: { [i]: { groups: n, tracks: r } } } = t;
  for (const a in s[i]) {
    n[a] || (n[a] = []);
    for (const l in s[i][a]) {
      const u = s[i][a][l];
      if (!/^(?:CC|SERVICE)/.test(u.instreamId)) continue;
      const p = e.options_.vhs && e.options_.vhs.captionServices || {};
      let g = { label: l, language: u.language, instreamId: u.instreamId, default: u.default && u.autoselect };
      if (p[g.instreamId] && (g = st(g, p[g.instreamId])), g.default === void 0 && delete g.default, n[a].push(st({ id: l }, u)), r[l] === void 0) {
        const y = e.addRemoteTextTrack({ id: g.instreamId, kind: "captions", default: g.default, language: g.language, label: g.label }, !1).track;
        r[l] = y;
      }
    }
  }
} }, zm = (i, t) => {
  for (let e = 0; e < i.length; e++)
    if (Bl(t, i[e]) || i[e].playlists && zm(i[e].playlists, t)) return !0;
  return !1;
}, B1 = (i, t) => (e) => {
  const { mainPlaylistLoader: s, mediaTypes: { [i]: { groups: n } } } = t, r = s.media();
  if (!r) return null;
  let a = null;
  r.attributes[i] && (a = n[r.attributes[i]]);
  const l = Object.keys(n);
  if (!a) if (i === "AUDIO" && l.length > 1 && bn(t.main)) for (let u = 0; u < l.length; u++) {
    const p = n[l[u]];
    if (zm(p, r)) {
      a = p;
      break;
    }
  }
  else n.main ? a = n.main : l.length === 1 && (a = n[l[0]]);
  return e === void 0 ? a : e !== null && a && a.filter((u) => u.id === e.id)[0] || null;
}, F1 = { AUDIO: (i, t) => () => {
  const { mediaTypes: { [i]: { tracks: e } } } = t;
  for (const s in e) if (e[s].enabled) return e[s];
  return null;
}, SUBTITLES: (i, t) => () => {
  const { mediaTypes: { [i]: { tracks: e } } } = t;
  for (const s in e) if (e[s].mode === "showing" || e[s].mode === "hidden") return e[s];
  return null;
} }, q1 = (i, { mediaTypes: t }) => () => {
  const e = t[i].activeTrack();
  return e ? t[i].activeGroup(e) : null;
}, j1 = (i) => {
  ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((p) => {
    U1[p](p, i);
  });
  const { mediaTypes: t, mainPlaylistLoader: e, tech: s, vhs: n, segmentLoaders: { AUDIO: r, main: a } } = i;
  ["AUDIO", "SUBTITLES"].forEach((p) => {
    t[p].activeGroup = B1(p, i), t[p].activeTrack = F1[p](p, i), t[p].onGroupChanged = N1(p, i), t[p].onGroupChanging = R1(p, i), t[p].onTrackChanged = M1(p, i), t[p].getActiveGroup = q1(p, i);
  });
  const l = t.AUDIO.activeGroup();
  if (l) {
    const p = (l.filter((g) => g.default)[0] || l[0]).id;
    t.AUDIO.tracks[p].enabled = !0, t.AUDIO.onGroupChanged(), t.AUDIO.onTrackChanged(), t.AUDIO.getActiveGroup().playlistLoader ? (a.setAudio(!1), r.setAudio(!0)) : a.setAudio(!0);
  }
  e.on("mediachange", () => {
    ["AUDIO", "SUBTITLES"].forEach((p) => t[p].onGroupChanged());
  }), e.on("mediachanging", () => {
    ["AUDIO", "SUBTITLES"].forEach((p) => t[p].onGroupChanging());
  });
  const u = () => {
    t.AUDIO.onTrackChanged(), s.trigger({ type: "usage", name: "vhs-audio-change" });
  };
  s.audioTracks().addEventListener("change", u), s.remoteTextTracks().addEventListener("change", t.SUBTITLES.onTrackChanged), n.on("dispose", () => {
    s.audioTracks().removeEventListener("change", u), s.remoteTextTracks().removeEventListener("change", t.SUBTITLES.onTrackChanged);
  }), s.clearTracks("audio");
  for (const p in t.AUDIO.tracks) s.audioTracks().addTrack(t.AUDIO.tracks[p]);
}, $1 = () => {
  const i = {};
  return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((t) => {
    i[t] = { groups: {}, tracks: {}, activePlaylistLoader: null, activeGroup: We, activeTrack: We, getActiveGroup: We, onGroupChanged: We, onTrackChanged: We, lastTrack_: null, logger_: de(`MediaGroups[${t}]`) };
  }), i;
};
class ic {
  constructor() {
    this.priority_ = [], this.pathwayClones_ = /* @__PURE__ */ new Map();
  }
  set version(t) {
    t === 1 && (this.version_ = t);
  }
  set ttl(t) {
    this.ttl_ = t || 300;
  }
  set reloadUri(t) {
    t && (this.reloadUri_ = Kt(this.reloadUri_, t));
  }
  set priority(t) {
    t && t.length && (this.priority_ = t);
  }
  set pathwayClones(t) {
    t && t.length && (this.pathwayClones_ = new Map(t.map((e) => [e.ID, e])));
  }
  get version() {
    return this.version_;
  }
  get ttl() {
    return this.ttl_;
  }
  get reloadUri() {
    return this.reloadUri_;
  }
  get priority() {
    return this.priority_;
  }
  get pathwayClones() {
    return this.pathwayClones_;
  }
}
class H1 extends D.EventTarget {
  constructor(t, e) {
    super(), this.currentPathway = null, this.defaultPathway = null, this.queryBeforeStart = !1, this.availablePathways_ = /* @__PURE__ */ new Set(), this.steeringManifest = new ic(), this.proxyServerUrl_ = null, this.manifestType_ = null, this.ttlTimeout_ = null, this.request_ = null, this.currentPathwayClones = /* @__PURE__ */ new Map(), this.nextPathwayClones = /* @__PURE__ */ new Map(), this.excludedSteeringManifestURLs = /* @__PURE__ */ new Set(), this.logger_ = de("Content Steering"), this.xhr_ = t, this.getBandwidth_ = e;
  }
  assignTagProperties(t, e) {
    this.manifestType_ = e.serverUri ? "HLS" : "DASH";
    const s = e.serverUri || e.serverURL;
    if (!s) return this.logger_(`steering manifest URL is ${s}, cannot request steering manifest.`), void this.trigger("error");
    s.startsWith("data:") ? this.decodeDataUriManifest_(s.substring(s.indexOf(",") + 1)) : (this.steeringManifest.reloadUri = Kt(t, s), this.defaultPathway = e.pathwayId || e.defaultServiceLocation, this.queryBeforeStart = e.queryBeforeStart, this.proxyServerUrl_ = e.proxyServerURL, this.defaultPathway && !this.queryBeforeStart && this.trigger("content-steering"));
  }
  requestSteeringManifest(t) {
    const e = this.steeringManifest.reloadUri;
    if (!e) return;
    const s = t ? e : this.getRequestURI(e);
    if (!s) return this.logger_("No valid content steering manifest URIs. Stopping content steering."), this.trigger("error"), void this.dispose();
    this.request_ = this.xhr_({ uri: s, requestType: "content-steering-manifest" }, (n, r) => {
      if (n) {
        if (r.status === 410) return this.logger_(`manifest request 410 ${n}.`), this.logger_(`There will be no more content steering requests to ${s} this session.`), void this.excludedSteeringManifestURLs.add(s);
        if (r.status === 429) {
          const l = r.responseHeaders["retry-after"];
          return this.logger_(`manifest request 429 ${n}.`), this.logger_(`content steering will retry in ${l} seconds.`), void this.startTTLTimeout_(parseInt(l, 10));
        }
        return this.logger_(`manifest failed to load ${n}.`), void this.startTTLTimeout_();
      }
      const a = JSON.parse(this.request_.responseText);
      this.assignSteeringProperties_(a), this.startTTLTimeout_();
    });
  }
  setProxyServerUrl_(t) {
    const e = new E.URL(t), s = new E.URL(this.proxyServerUrl_);
    return s.searchParams.set("url", encodeURI(e.toString())), this.setSteeringParams_(s.toString());
  }
  decodeDataUriManifest_(t) {
    const e = JSON.parse(E.atob(t));
    this.assignSteeringProperties_(e);
  }
  setSteeringParams_(t) {
    const e = new E.URL(t), s = this.getPathway(), n = this.getBandwidth_();
    if (s) {
      const r = `_${this.manifestType_}_pathway`;
      e.searchParams.set(r, s);
    }
    if (n) {
      const r = `_${this.manifestType_}_throughput`;
      e.searchParams.set(r, n);
    }
    return e.toString();
  }
  assignSteeringProperties_(t) {
    if (this.steeringManifest.version = t.VERSION, !this.steeringManifest.version) return this.logger_(`manifest version is ${t.VERSION}, which is not supported.`), void this.trigger("error");
    this.steeringManifest.ttl = t.TTL, this.steeringManifest.reloadUri = t["RELOAD-URI"], this.steeringManifest.priority = t["PATHWAY-PRIORITY"] || t["SERVICE-LOCATION-PRIORITY"], this.steeringManifest.pathwayClones = t["PATHWAY-CLONES"], this.nextPathwayClones = this.steeringManifest.pathwayClones, this.availablePathways_.size || (this.logger_("There are no available pathways for content steering. Ending content steering."), this.trigger("error"), this.dispose());
    const e = ((s) => {
      for (const n of s) if (this.availablePathways_.has(n)) return n;
      return [...this.availablePathways_][0];
    })(this.steeringManifest.priority);
    this.currentPathway !== e && (this.currentPathway = e, this.trigger("content-steering"));
  }
  getPathway() {
    return this.currentPathway || this.defaultPathway;
  }
  getRequestURI(t) {
    if (!t) return null;
    const e = (n) => this.excludedSteeringManifestURLs.has(n);
    if (this.proxyServerUrl_) {
      const n = this.setProxyServerUrl_(t);
      if (!e(n)) return n;
    }
    const s = this.setSteeringParams_(t);
    return e(s) ? null : s;
  }
  startTTLTimeout_(t = this.steeringManifest.ttl) {
    const e = 1e3 * t;
    this.ttlTimeout_ = E.setTimeout(() => {
      this.requestSteeringManifest();
    }, e);
  }
  clearTTLTimeout_() {
    E.clearTimeout(this.ttlTimeout_), this.ttlTimeout_ = null;
  }
  abort() {
    this.request_ && this.request_.abort(), this.request_ = null;
  }
  dispose() {
    this.off("content-steering"), this.off("error"), this.abort(), this.clearTTLTimeout_(), this.currentPathway = null, this.defaultPathway = null, this.queryBeforeStart = null, this.proxyServerUrl_ = null, this.manifestType_ = null, this.ttlTimeout_ = null, this.request_ = null, this.excludedSteeringManifestURLs = /* @__PURE__ */ new Set(), this.availablePathways_ = /* @__PURE__ */ new Set(), this.steeringManifest = new ic();
  }
  addAvailablePathway(t) {
    t && this.availablePathways_.add(t);
  }
  clearAvailablePathways() {
    this.availablePathways_.clear();
  }
  excludePathway(t) {
    return this.availablePathways_.delete(t);
  }
  didDASHTagChange(t, e) {
    return !e && this.steeringManifest.reloadUri || e && (Kt(t, e.serverURL) !== this.steeringManifest.reloadUri || e.defaultServiceLocation !== this.defaultPathway || e.queryBeforeStart !== this.queryBeforeStart || e.proxyServerURL !== this.proxyServerUrl_);
  }
  getAvailablePathways() {
    return this.availablePathways_;
  }
}
const V1 = 10;
let qe;
const z1 = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred", "mediaAppends"], W1 = function(i) {
  return this.audioSegmentLoader_[i] + this.mainSegmentLoader_[i];
}, G1 = function({ currentPlaylist: i, buffered: t, currentTime: e, nextPlaylist: s, bufferLowWaterLine: n, bufferHighWaterLine: r, duration: a, bufferBasedABR: l, log: u }) {
  if (!s) return D.log.warn("We received no playlist to switch to. Please check your stream."), !1;
  const p = `allowing switch ${i && i.id || "null"} -> ${s.id}`;
  if (!i) return u(`${p} as current playlist is not set`), !0;
  if (s.id === i.id) return !1;
  const g = !!Qi(t, e).length;
  if (!i.endList) return g || typeof i.partTargetDuration != "number" ? (u(`${p} as current playlist is live`), !0) : (u(`not ${p} as current playlist is live llhls, but currentTime isn't in buffered.`), !1);
  const y = Rl(t, e), T = l ? Pt.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE : Pt.MAX_BUFFER_LOW_WATER_LINE;
  if (a < T) return u(`${p} as duration < max low water line (${a} < ${T})`), !0;
  const C = s.attributes.BANDWIDTH, _ = i.attributes.BANDWIDTH;
  if (C < _ && (!l || y < r)) {
    let k = `${p} as next bandwidth < current bandwidth (${C} < ${_})`;
    return l && (k += ` and forwardBuffer < bufferHighWaterLine (${y} < ${r})`), u(k), !0;
  }
  if ((!l || C > _) && y >= n) {
    let k = `${p} as forwardBuffer >= bufferLowWaterLine (${y} >= ${n})`;
    return l && (k += ` and next bandwidth > current bandwidth (${C} > ${_})`), u(k), !0;
  }
  return u(`not ${p} as no switching criteria met`), !1;
};
class X1 extends D.EventTarget {
  constructor(t) {
    super();
    const { src: e, withCredentials: s, tech: n, bandwidth: r, externVhs: a, useCueTags: l, playlistExclusionDuration: u, enableLowInitialPlaylist: p, sourceType: g, cacheEncryptionKeys: y, bufferBasedABR: T, leastPixelDiffSelector: C, captionServices: _ } = t;
    if (!e) throw new Error("A non-empty playlist URL or JSON manifest string is required");
    let { maxPlaylistRetries: k } = t;
    k == null && (k = 1 / 0), qe = a, this.bufferBasedABR = !!T, this.leastPixelDiffSelector = !!C, this.withCredentials = s, this.tech_ = n, this.vhs_ = n.vhs, this.sourceType_ = g, this.useCueTags_ = l, this.playlistExclusionDuration = u, this.maxPlaylistRetries = k, this.enableLowInitialPlaylist = p, this.useCueTags_ && (this.cueTagsTrack_ = this.tech_.addTextTrack("metadata", "ad-cues"), this.cueTagsTrack_.inBandMetadataTrackDispatchType = ""), this.requestOptions_ = { withCredentials: s, maxPlaylistRetries: k, timeout: null }, this.on("error", this.pauseLoading), this.mediaTypes_ = $1(), this.mediaSource = new E.MediaSource(), this.handleDurationChange_ = this.handleDurationChange_.bind(this), this.handleSourceOpen_ = this.handleSourceOpen_.bind(this), this.handleSourceEnded_ = this.handleSourceEnded_.bind(this), this.mediaSource.addEventListener("durationchange", this.handleDurationChange_), this.mediaSource.addEventListener("sourceopen", this.handleSourceOpen_), this.mediaSource.addEventListener("sourceended", this.handleSourceEnded_), this.seekable_ = Jt(), this.hasPlayed_ = !1, this.syncController_ = new A1(t), this.segmentMetadataTrack_ = n.addRemoteTextTrack({ kind: "metadata", label: "segment-metadata" }, !1).track, this.decrypter_ = new L1(), this.sourceUpdater_ = new Hm(this.mediaSource), this.inbandTextTracks_ = {}, this.timelineChangeController_ = new P1(), this.keyStatusMap_ = /* @__PURE__ */ new Map();
    const x = { vhs: this.vhs_, parse708captions: t.parse708captions, useDtsForTimestampOffset: t.useDtsForTimestampOffset, captionServices: _, mediaSource: this.mediaSource, currentTime: this.tech_.currentTime.bind(this.tech_), seekable: () => this.seekable(), seeking: () => this.tech_.seeking(), duration: () => this.duration(), hasPlayed: () => this.hasPlayed_, goalBufferLength: () => this.goalBufferLength(), bandwidth: r, syncController: this.syncController_, decrypter: this.decrypter_, sourceType: this.sourceType_, inbandTextTracks: this.inbandTextTracks_, cacheEncryptionKeys: y, sourceUpdater: this.sourceUpdater_, timelineChangeController: this.timelineChangeController_, exactManifestTimings: t.exactManifestTimings, addMetadataToTextTrack: this.addMetadataToTextTrack.bind(this) };
    this.mainPlaylistLoader_ = this.sourceType_ === "dash" ? new il(e, this.vhs_, st(this.requestOptions_, { addMetadataToTextTrack: this.addMetadataToTextTrack.bind(this) })) : new Ji(e, this.vhs_, st(this.requestOptions_, { addDateRangesToTextTrack: this.addDateRangesToTextTrack_.bind(this) })), this.setupMainPlaylistLoaderListeners_(), this.mainSegmentLoader_ = new nl(st(x, { segmentMetadataTrack: this.segmentMetadataTrack_, loaderType: "main" }), t), this.audioSegmentLoader_ = new nl(st(x, { loaderType: "audio" }), t), this.subtitleSegmentLoader_ = new w1(st(x, { loaderType: "vtt", featuresNativeTextTracks: this.tech_.featuresNativeTextTracks, loadVttJs: () => new Promise((O, N) => {
      function P() {
        n.off("vttjserror", j), O();
      }
      function j() {
        n.off("vttjsloaded", P), N();
      }
      n.one("vttjsloaded", P), n.one("vttjserror", j), n.addWebVttScript_();
    }) }), t);
    const A = () => this.mainSegmentLoader_.bandwidth;
    this.contentSteeringController_ = new H1(this.vhs_.xhr, A), this.setupSegmentLoaderListeners_(), this.bufferBasedABR && (this.mainPlaylistLoader_.one("loadedplaylist", () => this.startABRTimer_()), this.tech_.on("pause", () => this.stopABRTimer_()), this.tech_.on("play", () => this.startABRTimer_())), z1.forEach((O) => {
      this[O + "_"] = W1.bind(this, O);
    }), this.logger_ = de("pc"), this.triggeredFmp4Usage = !1, this.tech_.preload() === "none" ? (this.loadOnPlay_ = () => {
      this.loadOnPlay_ = null, this.mainPlaylistLoader_.load();
    }, this.tech_.one("play", this.loadOnPlay_)) : this.mainPlaylistLoader_.load(), this.timeToLoadedData__ = -1, this.mainAppendsToLoadedData__ = -1, this.audioAppendsToLoadedData__ = -1;
    const I = this.tech_.preload() === "none" ? "play" : "loadstart";
    this.tech_.one(I, () => {
      const O = Date.now();
      this.tech_.one("loadeddata", () => {
        this.timeToLoadedData__ = Date.now() - O, this.mainAppendsToLoadedData__ = this.mainSegmentLoader_.mediaAppends, this.audioAppendsToLoadedData__ = this.audioSegmentLoader_.mediaAppends;
      });
    });
  }
  mainAppendsToLoadedData_() {
    return this.mainAppendsToLoadedData__;
  }
  audioAppendsToLoadedData_() {
    return this.audioAppendsToLoadedData__;
  }
  appendsToLoadedData_() {
    const t = this.mainAppendsToLoadedData_(), e = this.audioAppendsToLoadedData_();
    return t === -1 || e === -1 ? -1 : t + e;
  }
  timeToLoadedData_() {
    return this.timeToLoadedData__;
  }
  checkABR_(t = "abr") {
    const e = this.selectPlaylist();
    e && this.shouldSwitchToMedia_(e) && this.switchMedia_(e, t);
  }
  switchMedia_(t, e, s) {
    const n = this.media(), r = n && (n.id || n.uri), a = t && (t.id || t.uri);
    r && r !== a && (this.logger_(`switch media ${r} -> ${a} from ${e}`), this.tech_.trigger({ type: "usage", name: `vhs-rendition-change-${e}` })), this.mainPlaylistLoader_.media(t, s);
  }
  switchMediaForDASHContentSteering_() {
    ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((t) => {
      const e = this.mediaTypes_[t], s = e ? e.activeGroup() : null, n = this.contentSteeringController_.getPathway();
      if (s && n) {
        const r = (s.length ? s[0].playlists : s.playlists).filter((a) => a.attributes.serviceLocation === n);
        r.length && this.mediaTypes_[t].activePlaylistLoader.media(r[0]);
      }
    });
  }
  startABRTimer_() {
    this.stopABRTimer_(), this.abrTimer_ = E.setInterval(() => this.checkABR_(), 250);
  }
  stopABRTimer_() {
    this.tech_.scrubbing && this.tech_.scrubbing() || (E.clearInterval(this.abrTimer_), this.abrTimer_ = null);
  }
  getAudioTrackPlaylists_() {
    const t = this.main(), e = t && t.playlists || [];
    if (!t || !t.mediaGroups || !t.mediaGroups.AUDIO) return e;
    const s = t.mediaGroups.AUDIO, n = Object.keys(s);
    let r;
    if (Object.keys(this.mediaTypes_.AUDIO.groups).length) r = this.mediaTypes_.AUDIO.activeTrack();
    else {
      const l = s.main || n.length && s[n[0]];
      for (const u in l) if (l[u].default) {
        r = { label: u };
        break;
      }
    }
    if (!r) return e;
    const a = [];
    for (const l in s) if (s[l][r.label]) {
      const u = s[l][r.label];
      if (u.playlists && u.playlists.length) a.push.apply(a, u.playlists);
      else if (u.uri) a.push(u);
      else if (t.playlists.length) for (let p = 0; p < t.playlists.length; p++) {
        const g = t.playlists[p];
        g.attributes && g.attributes.AUDIO && g.attributes.AUDIO === l && a.push(g);
      }
    }
    return a.length ? a : e;
  }
  setupMainPlaylistLoaderListeners_() {
    this.mainPlaylistLoader_.on("loadedmetadata", () => {
      const t = this.mainPlaylistLoader_.media(), e = 1.5 * t.targetDuration * 1e3;
      Qo(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.media()) ? this.requestOptions_.timeout = 0 : this.requestOptions_.timeout = e, t.endList && this.tech_.preload() !== "none" && (this.mainSegmentLoader_.playlist(t, this.requestOptions_), this.mainSegmentLoader_.load()), j1({ sourceType: this.sourceType_, segmentLoaders: { AUDIO: this.audioSegmentLoader_, SUBTITLES: this.subtitleSegmentLoader_, main: this.mainSegmentLoader_ }, tech: this.tech_, requestOptions: this.requestOptions_, mainPlaylistLoader: this.mainPlaylistLoader_, vhs: this.vhs_, main: this.main(), mediaTypes: this.mediaTypes_, excludePlaylist: this.excludePlaylist.bind(this) }), this.triggerPresenceUsage_(this.main(), t), this.setupFirstPlay(), !this.mediaTypes_.AUDIO.activePlaylistLoader || this.mediaTypes_.AUDIO.activePlaylistLoader.media() ? this.trigger("selectedinitialmedia") : this.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata", () => {
        this.trigger("selectedinitialmedia");
      });
    }), this.mainPlaylistLoader_.on("loadedplaylist", () => {
      this.loadOnPlay_ && this.tech_.off("play", this.loadOnPlay_);
      let t = this.mainPlaylistLoader_.media();
      if (!t) {
        let e;
        if (this.attachContentSteeringListeners_(), this.initContentSteeringController_(), this.excludeUnsupportedVariants_(), this.enableLowInitialPlaylist && (e = this.selectInitialPlaylist()), e || (e = this.selectPlaylist()), !e || !this.shouldSwitchToMedia_(e) || (this.initialMedia_ = e, this.switchMedia_(this.initialMedia_, "initial"), !(this.sourceType_ === "vhs-json" && this.initialMedia_.segments))) return;
        t = this.initialMedia_;
      }
      this.handleUpdatedMediaPlaylist(t);
    }), this.mainPlaylistLoader_.on("error", () => {
      const t = this.mainPlaylistLoader_.error;
      this.excludePlaylist({ playlistToExclude: t.playlist, error: t });
    }), this.mainPlaylistLoader_.on("mediachanging", () => {
      this.mainSegmentLoader_.abort(), this.mainSegmentLoader_.pause();
    }), this.mainPlaylistLoader_.on("mediachange", () => {
      const t = this.mainPlaylistLoader_.media(), e = 1.5 * t.targetDuration * 1e3;
      Qo(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.media()) ? this.requestOptions_.timeout = 0 : this.requestOptions_.timeout = e, this.sourceType_ === "dash" && this.mainPlaylistLoader_.load(), this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.playlist(t, this.requestOptions_), this.waitingForFastQualityPlaylistReceived_ ? this.runFastQualitySwitch_() : this.mainSegmentLoader_.load(), this.tech_.trigger({ type: "mediachange", bubbles: !0 });
    }), this.mainPlaylistLoader_.on("playlistunchanged", () => {
      const t = this.mainPlaylistLoader_.media();
      t.lastExcludeReason_ !== "playlist-unchanged" && this.stuckAtPlaylistEnd_(t) && (this.excludePlaylist({ error: { message: "Playlist no longer updating.", reason: "playlist-unchanged" } }), this.tech_.trigger("playliststuck"));
    }), this.mainPlaylistLoader_.on("renditiondisabled", () => {
      this.tech_.trigger({ type: "usage", name: "vhs-rendition-disabled" });
    }), this.mainPlaylistLoader_.on("renditionenabled", () => {
      this.tech_.trigger({ type: "usage", name: "vhs-rendition-enabled" });
    });
  }
  handleUpdatedMediaPlaylist(t) {
    this.useCueTags_ && this.updateAdCues_(t), this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.playlist(t, this.requestOptions_), this.waitingForFastQualityPlaylistReceived_ && this.runFastQualitySwitch_(), this.updateDuration(!t.endList), this.tech_.paused() || (this.mainSegmentLoader_.load(), this.audioSegmentLoader_ && this.audioSegmentLoader_.load());
  }
  triggerPresenceUsage_(t, e) {
    const s = t.mediaGroups || {};
    let n = !0;
    const r = Object.keys(s.AUDIO);
    for (const a in s.AUDIO) for (const l in s.AUDIO[a])
      s.AUDIO[a][l].uri || (n = !1);
    n && this.tech_.trigger({ type: "usage", name: "vhs-demuxed" }), Object.keys(s.SUBTITLES).length && this.tech_.trigger({ type: "usage", name: "vhs-webvtt" }), qe.Playlist.isAes(e) && this.tech_.trigger({ type: "usage", name: "vhs-aes" }), r.length && Object.keys(s.AUDIO[r[0]]).length > 1 && this.tech_.trigger({ type: "usage", name: "vhs-alternate-audio" }), this.useCueTags_ && this.tech_.trigger({ type: "usage", name: "vhs-playlist-cue-tags" });
  }
  shouldSwitchToMedia_(t) {
    const e = this.mainPlaylistLoader_.media() || this.mainPlaylistLoader_.pendingMedia_, s = this.tech_.currentTime(), n = this.bufferLowWaterLine(), r = this.bufferHighWaterLine(), a = this.tech_.buffered();
    return G1({ buffered: a, currentTime: s, currentPlaylist: e, nextPlaylist: t, bufferLowWaterLine: n, bufferHighWaterLine: r, duration: this.duration(), bufferBasedABR: this.bufferBasedABR, log: this.logger_ });
  }
  setupSegmentLoaderListeners_() {
    this.mainSegmentLoader_.on("bandwidthupdate", () => {
      this.checkABR_("bandwidthupdate"), this.tech_.trigger("bandwidthupdate");
    }), this.mainSegmentLoader_.on("timeout", () => {
      this.bufferBasedABR && this.mainSegmentLoader_.load();
    }), this.bufferBasedABR || this.mainSegmentLoader_.on("progress", () => {
      this.trigger("progress");
    }), this.mainSegmentLoader_.on("error", () => {
      const e = this.mainSegmentLoader_.error();
      this.excludePlaylist({ playlistToExclude: e.playlist, error: e });
    }), this.mainSegmentLoader_.on("appenderror", () => {
      this.error = this.mainSegmentLoader_.error_, this.trigger("error");
    }), this.mainSegmentLoader_.on("syncinfoupdate", () => {
      this.onSyncInfoUpdate_();
    }), this.mainSegmentLoader_.on("timestampoffset", () => {
      this.tech_.trigger({ type: "usage", name: "vhs-timestamp-offset" });
    }), this.audioSegmentLoader_.on("syncinfoupdate", () => {
      this.onSyncInfoUpdate_();
    }), this.audioSegmentLoader_.on("appenderror", () => {
      this.error = this.audioSegmentLoader_.error_, this.trigger("error");
    }), this.mainSegmentLoader_.on("ended", () => {
      this.logger_("main segment loader ended"), this.onEndOfStream();
    }), this.mainSegmentLoader_.on("earlyabort", (e) => {
      this.bufferBasedABR || (this.delegateLoaders_("all", ["abort"]), this.excludePlaylist({ error: { message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering." }, playlistExclusionDuration: V1 }));
    });
    const t = () => {
      if (!this.sourceUpdater_.hasCreatedSourceBuffers()) return this.tryToCreateSourceBuffers_();
      const e = this.getCodecsOrExclude_();
      e && this.sourceUpdater_.addOrChangeSourceBuffers(e);
    };
    this.mainSegmentLoader_.on("trackinfo", t), this.audioSegmentLoader_.on("trackinfo", t), this.mainSegmentLoader_.on("fmp4", () => {
      this.triggeredFmp4Usage || (this.tech_.trigger({ type: "usage", name: "vhs-fmp4" }), this.triggeredFmp4Usage = !0);
    }), this.audioSegmentLoader_.on("fmp4", () => {
      this.triggeredFmp4Usage || (this.tech_.trigger({ type: "usage", name: "vhs-fmp4" }), this.triggeredFmp4Usage = !0);
    }), this.audioSegmentLoader_.on("ended", () => {
      this.logger_("audioSegmentLoader ended"), this.onEndOfStream();
    });
  }
  mediaSecondsLoaded_() {
    return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded);
  }
  load() {
    this.mainSegmentLoader_.load(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load();
  }
  fastQualityChange_(t = this.selectPlaylist()) {
    t && t === this.mainPlaylistLoader_.media() ? this.logger_("skipping fastQualityChange because new media is same as old") : (this.switchMedia_(t, "fast-quality"), this.waitingForFastQualityPlaylistReceived_ = !0);
  }
  runFastQualitySwitch_() {
    this.waitingForFastQualityPlaylistReceived_ = !1, this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.resetEverything(() => {
      this.tech_.setCurrentTime(this.tech_.currentTime());
    });
  }
  play() {
    if (this.setupFirstPlay()) return;
    this.tech_.ended() && this.tech_.setCurrentTime(0), this.hasPlayed_ && this.load();
    const t = this.tech_.seekable();
    return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < t.start(0) ? this.tech_.setCurrentTime(t.end(t.length - 1)) : void 0;
  }
  setupFirstPlay() {
    const t = this.mainPlaylistLoader_.media();
    if (!t || this.tech_.paused() || this.hasPlayed_) return !1;
    if (!t.endList || t.start) {
      const e = this.seekable();
      if (!e.length) return !1;
      const s = e.end(0);
      let n = s;
      if (t.start) {
        const r = t.start.timeOffset;
        n = r < 0 ? Math.max(s + r, e.start(0)) : Math.min(s, r);
      }
      this.trigger("firstplay"), this.tech_.setCurrentTime(n);
    }
    return this.hasPlayed_ = !0, this.load(), !0;
  }
  handleSourceOpen_() {
    if (this.tryToCreateSourceBuffers_(), this.tech_.autoplay()) {
      const t = this.tech_.play();
      t !== void 0 && typeof t.then == "function" && t.then(null, (e) => {
      });
    }
    this.trigger("sourceopen");
  }
  handleSourceEnded_() {
    if (!this.inbandTextTracks_.metadataTrack_) return;
    const t = this.inbandTextTracks_.metadataTrack_.cues;
    if (!t || !t.length) return;
    const e = this.duration();
    t[t.length - 1].endTime = isNaN(e) || Math.abs(e) === 1 / 0 ? Number.MAX_VALUE : e;
  }
  handleDurationChange_() {
    this.tech_.trigger("durationchange");
  }
  onEndOfStream() {
    let t = this.mainSegmentLoader_.ended_;
    if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
      const e = this.mainSegmentLoader_.getCurrentMediaInfo_();
      t = !e || e.hasVideo ? t && this.audioSegmentLoader_.ended_ : this.audioSegmentLoader_.ended_;
    }
    t && (this.stopABRTimer_(), this.sourceUpdater_.endOfStream());
  }
  stuckAtPlaylistEnd_(t) {
    if (!this.seekable().length) return !1;
    const e = this.syncController_.getExpiredTime(t, this.duration());
    if (e === null) return !1;
    const s = qe.Playlist.playlistEnd(t, e), n = this.tech_.currentTime(), r = this.tech_.buffered();
    if (!r.length) return s - n <= Ae;
    const a = r.end(r.length - 1);
    return a - n <= Ae && s - a <= Ae;
  }
  excludePlaylist({ playlistToExclude: t = this.mainPlaylistLoader_.media(), error: e = {}, playlistExclusionDuration: s }) {
    if (t = t || this.mainPlaylistLoader_.media(), s = s || e.playlistExclusionDuration || this.playlistExclusionDuration, !t) return this.error = e, void (this.mediaSource.readyState !== "open" ? this.trigger("error") : this.sourceUpdater_.endOfStream("network"));
    t.playlistErrors_++;
    const n = this.mainPlaylistLoader_.main.playlists, r = n.filter(ia), a = r.length === 1 && r[0] === t;
    if (n.length === 1 && s !== 1 / 0) return D.log.warn(`Problem encountered with playlist ${t.id}. Trying again since it is the only playlist.`), this.tech_.trigger("retryplaylist"), this.mainPlaylistLoader_.load(a);
    if (a) {
      if (this.main().contentSteering) {
        const _ = this.pathwayAttribute_(t), k = 1e3 * this.contentSteeringController_.steeringManifest.ttl;
        return this.contentSteeringController_.excludePathway(_), this.excludeThenChangePathway_(), void setTimeout(() => {
          this.contentSteeringController_.addAvailablePathway(_);
        }, k);
      }
      let C = !1;
      n.forEach((_) => {
        if (_ === t) return;
        const k = _.excludeUntil;
        k !== void 0 && k !== 1 / 0 && (C = !0, delete _.excludeUntil);
      }), C && (D.log.warn("Removing other playlists from the exclusion list because the last rendition is about to be excluded."), this.tech_.trigger("retryplaylist"));
    }
    let l;
    l = t.playlistErrors_ > this.maxPlaylistRetries ? 1 / 0 : Date.now() + 1e3 * s, t.excludeUntil = l, e.reason && (t.lastExcludeReason_ = e.reason), this.tech_.trigger("excludeplaylist"), this.tech_.trigger({ type: "usage", name: "vhs-rendition-excluded" });
    const u = this.selectPlaylist();
    if (!u) return this.error = "Playback cannot continue. No available working or supported playlists.", void this.trigger("error");
    const p = e.internal ? this.logger_ : D.log.warn, g = e.message ? " " + e.message : "";
    p(`${e.internal ? "Internal problem" : "Problem"} encountered with playlist ${t.id}.${g} Switching to playlist ${u.id}.`), u.attributes.AUDIO !== t.attributes.AUDIO && this.delegateLoaders_("audio", ["abort", "pause"]), u.attributes.SUBTITLES !== t.attributes.SUBTITLES && this.delegateLoaders_("subtitle", ["abort", "pause"]), this.delegateLoaders_("main", ["abort", "pause"]);
    const y = u.targetDuration / 2 * 1e3 || 5e3, T = typeof u.lastRequest == "number" && Date.now() - u.lastRequest <= y;
    return this.switchMedia_(u, "exclude", a || T);
  }
  pauseLoading() {
    this.delegateLoaders_("all", ["abort", "pause"]), this.stopABRTimer_();
  }
  delegateLoaders_(t, e) {
    const s = [], n = t === "all";
    (n || t === "main") && s.push(this.mainPlaylistLoader_);
    const r = [];
    (n || t === "audio") && r.push("AUDIO"), (n || t === "subtitle") && (r.push("CLOSED-CAPTIONS"), r.push("SUBTITLES")), r.forEach((a) => {
      const l = this.mediaTypes_[a] && this.mediaTypes_[a].activePlaylistLoader;
      l && s.push(l);
    }), ["main", "audio", "subtitle"].forEach((a) => {
      const l = this[`${a}SegmentLoader_`];
      !l || t !== a && t !== "all" || s.push(l);
    }), s.forEach((a) => e.forEach((l) => {
      typeof a[l] == "function" && a[l]();
    }));
  }
  setCurrentTime(t) {
    const e = Qi(this.tech_.buffered(), t);
    return this.mainPlaylistLoader_ && this.mainPlaylistLoader_.media() && this.mainPlaylistLoader_.media().segments ? e && e.length ? t : (this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.resetEverything(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.pause(), this.audioSegmentLoader_.resetEverything()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.pause(), this.subtitleSegmentLoader_.resetEverything()), void this.load()) : 0;
  }
  duration() {
    if (!this.mainPlaylistLoader_) return 0;
    const t = this.mainPlaylistLoader_.media();
    return t ? t.endList ? this.mediaSource ? this.mediaSource.duration : qe.Playlist.duration(t) : 1 / 0 : 0;
  }
  seekable() {
    return this.seekable_;
  }
  onSyncInfoUpdate_() {
    let t;
    if (!this.mainPlaylistLoader_) return;
    let e = this.mainPlaylistLoader_.media();
    if (!e) return;
    let s = this.syncController_.getExpiredTime(e, this.duration());
    if (s === null) return;
    const n = this.mainPlaylistLoader_.main, r = qe.Playlist.seekable(e, s, qe.Playlist.liveEdgeDelay(n, e));
    if (r.length === 0 || this.mediaTypes_.AUDIO.activePlaylistLoader && (e = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), s = this.syncController_.getExpiredTime(e, this.duration()), s === null || (t = qe.Playlist.seekable(e, s, qe.Playlist.liveEdgeDelay(n, e)), t.length === 0)))
      return;
    let a, l;
    this.seekable_ && this.seekable_.length && (a = this.seekable_.end(0), l = this.seekable_.start(0)), t ? t.start(0) > r.end(0) || r.start(0) > t.end(0) ? this.seekable_ = r : this.seekable_ = Jt([[t.start(0) > r.start(0) ? t.start(0) : r.start(0), t.end(0) < r.end(0) ? t.end(0) : r.end(0)]]) : this.seekable_ = r, this.seekable_ && this.seekable_.length && this.seekable_.end(0) === a && this.seekable_.start(0) === l || (this.logger_(`seekable updated [${am(this.seekable_)}]`), this.tech_.trigger("seekablechanged"));
  }
  updateDuration(t) {
    if (this.updateDuration_ && (this.mediaSource.removeEventListener("sourceopen", this.updateDuration_), this.updateDuration_ = null), this.mediaSource.readyState !== "open") return this.updateDuration_ = this.updateDuration.bind(this, t), void this.mediaSource.addEventListener("sourceopen", this.updateDuration_);
    if (t) {
      const n = this.seekable();
      return n.length ? void ((isNaN(this.mediaSource.duration) || this.mediaSource.duration < n.end(n.length - 1)) && this.sourceUpdater_.setDuration(n.end(n.length - 1))) : void 0;
    }
    const e = this.tech_.buffered();
    let s = qe.Playlist.duration(this.mainPlaylistLoader_.media());
    e.length > 0 && (s = Math.max(s, e.end(e.length - 1))), this.mediaSource.duration !== s && this.sourceUpdater_.setDuration(s);
  }
  dispose() {
    this.trigger("dispose"), this.decrypter_.terminate(), this.mainPlaylistLoader_.dispose(), this.mainSegmentLoader_.dispose(), this.contentSteeringController_.dispose(), this.keyStatusMap_.clear(), this.loadOnPlay_ && this.tech_.off("play", this.loadOnPlay_), ["AUDIO", "SUBTITLES"].forEach((t) => {
      const e = this.mediaTypes_[t].groups;
      for (const s in e) e[s].forEach((n) => {
        n.playlistLoader && n.playlistLoader.dispose();
      });
    }), this.audioSegmentLoader_.dispose(), this.subtitleSegmentLoader_.dispose(), this.sourceUpdater_.dispose(), this.timelineChangeController_.dispose(), this.stopABRTimer_(), this.updateDuration_ && this.mediaSource.removeEventListener("sourceopen", this.updateDuration_), this.mediaSource.removeEventListener("durationchange", this.handleDurationChange_), this.mediaSource.removeEventListener("sourceopen", this.handleSourceOpen_), this.mediaSource.removeEventListener("sourceended", this.handleSourceEnded_), this.off();
  }
  main() {
    return this.mainPlaylistLoader_.main;
  }
  media() {
    return this.mainPlaylistLoader_.media() || this.initialMedia_;
  }
  areMediaTypesKnown_() {
    const t = !!this.mediaTypes_.AUDIO.activePlaylistLoader, e = !!this.mainSegmentLoader_.getCurrentMediaInfo_(), s = !t || !!this.audioSegmentLoader_.getCurrentMediaInfo_();
    return !(!e || !s);
  }
  getCodecsOrExclude_() {
    const t = { main: this.mainSegmentLoader_.getCurrentMediaInfo_() || {}, audio: this.audioSegmentLoader_.getCurrentMediaInfo_() || {} }, e = this.mainSegmentLoader_.getPendingSegmentPlaylist() || this.media();
    t.video = t.main;
    const s = rn(this.main(), e), n = {}, r = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
    if (t.main.hasVideo && (n.video = s.video || t.main.videoCodec || D_), t.main.isMuxed && (n.video += `,${s.audio || t.main.audioCodec || hu}`), (t.main.hasAudio && !t.main.isMuxed || t.audio.hasAudio || r) && (n.audio = s.audio || t.main.audioCodec || t.audio.audioCodec || hu, t.audio.isFmp4 = t.main.hasAudio && !t.main.isMuxed ? t.main.isFmp4 : t.audio.isFmp4), !n.audio && !n.video) return void this.excludePlaylist({ playlistToExclude: e, error: { message: "Could not determine codecs for playlist." }, playlistExclusionDuration: 1 / 0 });
    const a = (p, g) => p ? ar(g) : Ba(g), l = {};
    let u;
    if (["video", "audio"].forEach(function(p) {
      if (n.hasOwnProperty(p) && !a(t[p].isFmp4, n[p])) {
        const g = t[p].isFmp4 ? "browser" : "muxer";
        l[g] = l[g] || [], l[g].push(n[p]), p === "audio" && (u = g);
      }
    }), r && u && e.attributes.AUDIO) {
      const p = e.attributes.AUDIO;
      this.main().playlists.forEach((g) => {
        (g.attributes && g.attributes.AUDIO) === p && g !== e && (g.excludeUntil = 1 / 0);
      }), this.logger_(`excluding audio group ${p} as ${u} does not support codec(s): "${n.audio}"`);
    }
    if (!Object.keys(l).length) {
      if (this.sourceUpdater_.hasCreatedSourceBuffers() && !this.sourceUpdater_.canChangeType()) {
        const p = [];
        if (["video", "audio"].forEach((g) => {
          const y = (Ce(this.sourceUpdater_.codecs[g] || "")[0] || {}).type, T = (Ce(n[g] || "")[0] || {}).type;
          y && T && y.toLowerCase() !== T.toLowerCase() && p.push(`"${this.sourceUpdater_.codecs[g]}" -> "${n[g]}"`);
        }), p.length) return void this.excludePlaylist({ playlistToExclude: e, error: { message: `Codec switching not supported: ${p.join(", ")}.`, internal: !0 }, playlistExclusionDuration: 1 / 0 });
      }
      return n;
    }
    {
      const p = Object.keys(l).reduce((g, y) => (g && (g += ", "), g += `${y} does not support codec(s): "${l[y].join(",")}"`), "") + ".";
      this.excludePlaylist({ playlistToExclude: e, error: { internal: !0, message: p }, playlistExclusionDuration: 1 / 0 });
    }
  }
  tryToCreateSourceBuffers_() {
    if (this.mediaSource.readyState !== "open" || this.sourceUpdater_.hasCreatedSourceBuffers() || !this.areMediaTypesKnown_()) return;
    const t = this.getCodecsOrExclude_();
    if (!t) return;
    this.sourceUpdater_.createSourceBuffers(t);
    const e = [t.video, t.audio].filter(Boolean).join(",");
    this.excludeIncompatibleVariants_(e);
  }
  excludeUnsupportedVariants_() {
    const t = this.main().playlists, e = [];
    Object.keys(t).forEach((s) => {
      const n = t[s];
      if (e.indexOf(n.id) !== -1) return;
      e.push(n.id);
      const r = rn(this.main, n), a = [];
      !r.audio || Ba(r.audio) || ar(r.audio) || a.push(`audio codec ${r.audio}`), !r.video || Ba(r.video) || ar(r.video) || a.push(`video codec ${r.video}`), r.text && r.text === "stpp.ttml.im1t" && a.push(`text codec ${r.text}`), a.length && (n.excludeUntil = 1 / 0, this.logger_(`excluding ${n.id} for unsupported: ${a.join(", ")}`));
    });
  }
  excludeIncompatibleVariants_(t) {
    const e = [], s = this.main().playlists, n = Rr(Ce(t)), r = Hd(n), a = n.video && Ce(n.video)[0] || null, l = n.audio && Ce(n.audio)[0] || null;
    Object.keys(s).forEach((u) => {
      const p = s[u];
      if (e.indexOf(p.id) !== -1 || p.excludeUntil === 1 / 0) return;
      e.push(p.id);
      const g = [], y = rn(this.mainPlaylistLoader_.main, p), T = Hd(y);
      if (y.audio || y.video) {
        if (T !== r && g.push(`codec count "${T}" !== "${r}"`), !this.sourceUpdater_.canChangeType()) {
          const C = y.video && Ce(y.video)[0] || null, _ = y.audio && Ce(y.audio)[0] || null;
          C && a && C.type.toLowerCase() !== a.type.toLowerCase() && g.push(`video codec "${C.type}" !== "${a.type}"`), _ && l && _.type.toLowerCase() !== l.type.toLowerCase() && g.push(`audio codec "${_.type}" !== "${l.type}"`);
        }
        g.length && (p.excludeUntil = 1 / 0, this.logger_(`excluding ${p.id}: ${g.join(" && ")}`));
      }
    });
  }
  updateAdCues_(t) {
    let e = 0;
    const s = this.seekable();
    s.length && (e = s.start(0)), k1(t, this.cueTagsTrack_, e);
  }
  goalBufferLength() {
    const t = this.tech_.currentTime(), e = Pt.GOAL_BUFFER_LENGTH, s = Pt.GOAL_BUFFER_LENGTH_RATE, n = Math.max(e, Pt.MAX_GOAL_BUFFER_LENGTH);
    return Math.min(e + t * s, n);
  }
  bufferLowWaterLine() {
    const t = this.tech_.currentTime(), e = Pt.BUFFER_LOW_WATER_LINE, s = Pt.BUFFER_LOW_WATER_LINE_RATE, n = Math.max(e, Pt.MAX_BUFFER_LOW_WATER_LINE), r = Math.max(e, Pt.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE);
    return Math.min(e + t * s, this.bufferBasedABR ? r : n);
  }
  bufferHighWaterLine() {
    return Pt.BUFFER_HIGH_WATER_LINE;
  }
  addDateRangesToTextTrack_(t) {
    Wd(this.inbandTextTracks_, "com.apple.streaming", this.tech_), o1({ inbandTextTracks: this.inbandTextTracks_, dateRanges: t });
  }
  addMetadataToTextTrack(t, e, s) {
    const n = this.sourceUpdater_.videoBuffer ? this.sourceUpdater_.videoTimestampOffset() : this.sourceUpdater_.audioTimestampOffset();
    Wd(this.inbandTextTracks_, t, this.tech_), n1({ inbandTextTracks: this.inbandTextTracks_, metadataArray: e, timestampOffset: n, videoDuration: s });
  }
  pathwayAttribute_(t) {
    return t.attributes["PATHWAY-ID"] || t.attributes.serviceLocation;
  }
  initContentSteeringController_() {
    const t = this.main();
    if (t.contentSteering) {
      for (const e of t.playlists) this.contentSteeringController_.addAvailablePathway(this.pathwayAttribute_(e));
      this.contentSteeringController_.assignTagProperties(t.uri, t.contentSteering), this.contentSteeringController_.queryBeforeStart ? this.contentSteeringController_.requestSteeringManifest(!0) : this.tech_.one("canplay", () => {
        this.contentSteeringController_.requestSteeringManifest();
      });
    }
  }
  resetContentSteeringController_() {
    this.contentSteeringController_.clearAvailablePathways(), this.contentSteeringController_.dispose(), this.initContentSteeringController_();
  }
  attachContentSteeringListeners_() {
    this.contentSteeringController_.on("content-steering", this.excludeThenChangePathway_.bind(this)), this.sourceType_ === "dash" && this.mainPlaylistLoader_.on("loadedplaylist", () => {
      const t = this.main();
      (this.contentSteeringController_.didDASHTagChange(t.uri, t.contentSteering) || (() => {
        const e = this.contentSteeringController_.getAvailablePathways(), s = [];
        for (const n of t.playlists) {
          const r = n.attributes.serviceLocation;
          if (r && (s.push(r), !e.has(r))) return !0;
        }
        return !(s.length || !e.size);
      })()) && this.resetContentSteeringController_();
    });
  }
  excludeThenChangePathway_() {
    const t = this.contentSteeringController_.getPathway();
    if (!t) return;
    this.handlePathwayClones_();
    const e = this.main().playlists, s = /* @__PURE__ */ new Set();
    let n = !1;
    Object.keys(e).forEach((r) => {
      const a = e[r], l = this.pathwayAttribute_(a), u = l && t !== l;
      a.excludeUntil === 1 / 0 && a.lastExcludeReason_ === "content-steering" && !u && (delete a.excludeUntil, delete a.lastExcludeReason_, n = !0);
      const p = !a.excludeUntil && a.excludeUntil !== 1 / 0;
      !s.has(a.id) && u && p && (s.add(a.id), a.excludeUntil = 1 / 0, a.lastExcludeReason_ = "content-steering", this.logger_(`excluding ${a.id} for ${a.lastExcludeReason_}`));
    }), this.contentSteeringController_.manifestType_ === "DASH" && Object.keys(this.mediaTypes_).forEach((r) => {
      const a = this.mediaTypes_[r];
      if (a.activePlaylistLoader) {
        const l = a.activePlaylistLoader.media_;
        l && l.attributes.serviceLocation !== t && (n = !0);
      }
    }), n && this.changeSegmentPathway_();
  }
  handlePathwayClones_() {
    const t = this.main().playlists, e = this.contentSteeringController_.currentPathwayClones, s = this.contentSteeringController_.nextPathwayClones;
    if (e && e.size || s && s.size) {
      for (const [n, r] of e.entries())
        s.get(n) || (this.mainPlaylistLoader_.updateOrDeleteClone(r), this.contentSteeringController_.excludePathway(n));
      for (const [n, r] of s.entries()) {
        const a = e.get(n);
        a ? this.equalPathwayClones_(a, r) || (this.mainPlaylistLoader_.updateOrDeleteClone(r, !0), this.contentSteeringController_.addAvailablePathway(n)) : (t.filter((l) => l.attributes["PATHWAY-ID"] === r["BASE-ID"]).forEach((l) => {
          this.mainPlaylistLoader_.addClonePathway(r, l);
        }), this.contentSteeringController_.addAvailablePathway(n));
      }
      this.contentSteeringController_.currentPathwayClones = new Map(JSON.parse(JSON.stringify([...s])));
    }
  }
  equalPathwayClones_(t, e) {
    if (t["BASE-ID"] !== e["BASE-ID"] || t.ID !== e.ID || t["URI-REPLACEMENT"].HOST !== e["URI-REPLACEMENT"].HOST) return !1;
    const s = t["URI-REPLACEMENT"].PARAMS, n = e["URI-REPLACEMENT"].PARAMS;
    for (const r in s) if (s[r] !== n[r]) return !1;
    for (const r in n) if (s[r] !== n[r]) return !1;
    return !0;
  }
  changeSegmentPathway_() {
    const t = this.selectPlaylist();
    this.pauseLoading(), this.contentSteeringController_.manifestType_ === "DASH" && this.switchMediaForDASHContentSteering_(), this.switchMedia_(t, "content-steering");
  }
  excludeNonUsablePlaylistsByKeyId_() {
    if (!this.mainPlaylistLoader_ || !this.mainPlaylistLoader_.main) return;
    let t = 0;
    const e = "non-usable";
    this.mainPlaylistLoader_.main.playlists.forEach((s) => {
      const n = this.mainPlaylistLoader_.getKeyIdSet(s);
      n && n.size && n.forEach((r) => {
        const a = "usable", l = this.keyStatusMap_.has(r) && this.keyStatusMap_.get(r) === a, u = s.lastExcludeReason_ === e && s.excludeUntil === 1 / 0;
        l ? l && u && (delete s.excludeUntil, delete s.lastExcludeReason_, this.logger_(`enabling playlist ${s.id} because key ID ${r} is ${a}`)) : (s.excludeUntil !== 1 / 0 && s.lastExcludeReason_ !== e && (s.excludeUntil = 1 / 0, s.lastExcludeReason_ = e, this.logger_(`excluding playlist ${s.id} because the key ID ${r} doesn't exist in the keyStatusMap or is not ${a}`)), t++);
      });
    }), t >= this.mainPlaylistLoader_.main.playlists.length && this.mainPlaylistLoader_.main.playlists.forEach((s) => {
      const n = s && s.attributes && s.attributes.RESOLUTION && s.attributes.RESOLUTION.height < 720, r = s.excludeUntil === 1 / 0 && s.lastExcludeReason_ === e;
      n && r && (delete s.excludeUntil, D.log.warn(`enabling non-HD playlist ${s.id} because all playlists were excluded due to ${e} key IDs`));
    });
  }
  addKeyStatus_(t, e) {
    const s = (typeof t == "string" ? t : S1(t)).slice(0, 32).toLowerCase();
    this.logger_(`KeyStatus '${e}' with key ID ${s} added to the keyStatusMap`), this.keyStatusMap_.set(s, e);
  }
  updatePlaylistByKeyStatus(t, e) {
    this.addKeyStatus_(t, e), this.waitingForFastQualityPlaylistReceived_ || this.excludeNonUsableThenChangePlaylist_(), this.mainPlaylistLoader_.off("loadedplaylist", this.excludeNonUsableThenChangePlaylist_.bind(this)), this.mainPlaylistLoader_.on("loadedplaylist", this.excludeNonUsableThenChangePlaylist_.bind(this));
  }
  excludeNonUsableThenChangePlaylist_() {
    this.excludeNonUsablePlaylistsByKeyId_(), this.fastQualityChange_();
  }
}
const K1 = (i, t, e) => (s) => {
  const n = i.main.playlists[t], r = Ul(n), a = ia(n);
  return s === void 0 ? a : (s ? delete n.disabled : n.disabled = !0, s === a || r || (e(n), s ? i.trigger("renditionenabled") : i.trigger("renditiondisabled")), s);
};
class Y1 {
  constructor(t, e, s) {
    const { playlistController_: n } = t, r = n.fastQualityChange_.bind(n);
    if (e.attributes) {
      const a = e.attributes.RESOLUTION;
      this.width = a && a.width, this.height = a && a.height, this.bandwidth = e.attributes.BANDWIDTH, this.frameRate = e.attributes["FRAME-RATE"];
    }
    this.codecs = rn(n.main(), e), this.playlist = e, this.id = s, this.enabled = K1(t.playlists, e.id, r);
  }
}
const Q1 = function(i) {
  i.representations = () => {
    const t = i.playlistController_.main(), e = bn(t) ? i.playlistController_.getAudioTrackPlaylists_() : t.playlists;
    return e ? e.filter((s) => !Ul(s)).map((s, n) => new Y1(i, s, s.id)) : [];
  };
}, sc = ["seeking", "seeked", "pause", "playing", "error"];
class J1 {
  constructor(t) {
    this.playlistController_ = t.playlistController, this.tech_ = t.tech, this.seekable = t.seekable, this.allowSeeksWithinUnsafeLiveWindow = t.allowSeeksWithinUnsafeLiveWindow, this.liveRangeSafeTimeDelta = t.liveRangeSafeTimeDelta, this.media = t.media, this.consecutiveUpdates = 0, this.lastRecordedTime = null, this.checkCurrentTimeTimeout_ = null, this.logger_ = de("PlaybackWatcher"), this.logger_("initialize");
    const e = () => this.monitorCurrentTime_(), s = () => this.monitorCurrentTime_(), n = () => this.techWaiting_(), r = () => this.resetTimeUpdate_(), a = this.playlistController_, l = ["main", "subtitle", "audio"], u = {};
    l.forEach((g) => {
      u[g] = { reset: () => this.resetSegmentDownloads_(g), updateend: () => this.checkSegmentDownloads_(g) }, a[`${g}SegmentLoader_`].on("appendsdone", u[g].updateend), a[`${g}SegmentLoader_`].on("playlistupdate", u[g].reset), this.tech_.on(["seeked", "seeking"], u[g].reset);
    });
    const p = (g) => {
      ["main", "audio"].forEach((y) => {
        a[`${y}SegmentLoader_`][g]("appended", this.seekingAppendCheck_);
      });
    };
    this.seekingAppendCheck_ = () => {
      this.fixesBadSeeks_() && (this.consecutiveUpdates = 0, this.lastRecordedTime = this.tech_.currentTime(), p("off"));
    }, this.clearSeekingAppendCheck_ = () => p("off"), this.watchForBadSeeking_ = () => {
      this.clearSeekingAppendCheck_(), p("on");
    }, this.tech_.on("seeked", this.clearSeekingAppendCheck_), this.tech_.on("seeking", this.watchForBadSeeking_), this.tech_.on("waiting", n), this.tech_.on(sc, r), this.tech_.on("canplay", s), this.tech_.one("play", e), this.dispose = () => {
      this.clearSeekingAppendCheck_(), this.logger_("dispose"), this.tech_.off("waiting", n), this.tech_.off(sc, r), this.tech_.off("canplay", s), this.tech_.off("play", e), this.tech_.off("seeking", this.watchForBadSeeking_), this.tech_.off("seeked", this.clearSeekingAppendCheck_), l.forEach((g) => {
        a[`${g}SegmentLoader_`].off("appendsdone", u[g].updateend), a[`${g}SegmentLoader_`].off("playlistupdate", u[g].reset), this.tech_.off(["seeked", "seeking"], u[g].reset);
      }), this.checkCurrentTimeTimeout_ && E.clearTimeout(this.checkCurrentTimeTimeout_), this.resetTimeUpdate_();
    };
  }
  monitorCurrentTime_() {
    this.checkCurrentTime_(), this.checkCurrentTimeTimeout_ && E.clearTimeout(this.checkCurrentTimeTimeout_), this.checkCurrentTimeTimeout_ = E.setTimeout(this.monitorCurrentTime_.bind(this), 250);
  }
  resetSegmentDownloads_(t) {
    const e = this.playlistController_[`${t}SegmentLoader_`];
    this[`${t}StalledDownloads_`] > 0 && this.logger_(`resetting possible stalled download count for ${t} loader`), this[`${t}StalledDownloads_`] = 0, this[`${t}Buffered_`] = e.buffered_();
  }
  checkSegmentDownloads_(t) {
    const e = this.playlistController_, s = e[`${t}SegmentLoader_`], n = s.buffered_(), r = Xb(this[`${t}Buffered_`], n);
    this[`${t}Buffered_`] = n, r ? this.resetSegmentDownloads_(t) : (this[`${t}StalledDownloads_`]++, this.logger_(`found #${this[`${t}StalledDownloads_`]} ${t} appends that did not increase buffer (possible stalled download)`, { playlistId: s.playlist_ && s.playlist_.id, buffered: ki(n) }), this[`${t}StalledDownloads_`] < 10 || (this.logger_(`${t} loader stalled download exclusion`), this.resetSegmentDownloads_(t), this.tech_.trigger({ type: "usage", name: `vhs-${t}-download-exclusion` }), t !== "subtitle" && e.excludePlaylist({ error: { message: `Excessive ${t} segment downloading detected.` }, playlistExclusionDuration: 1 / 0 })));
  }
  checkCurrentTime_() {
    if (this.tech_.paused() || this.tech_.seeking()) return;
    const t = this.tech_.currentTime(), e = this.tech_.buffered();
    if (this.lastRecordedTime === t && (!e.length || t + Ae >= e.end(e.length - 1))) return this.techWaiting_();
    this.consecutiveUpdates >= 5 && t === this.lastRecordedTime ? (this.consecutiveUpdates++, this.waiting_()) : t === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0, this.lastRecordedTime = t);
  }
  resetTimeUpdate_() {
    this.consecutiveUpdates = 0;
  }
  fixesBadSeeks_() {
    if (!this.tech_.seeking()) return !1;
    const t = this.seekable(), e = this.tech_.currentTime();
    let s;
    if (this.afterSeekableWindow_(t, e, this.media(), this.allowSeeksWithinUnsafeLiveWindow) && (s = t.end(t.length - 1)), this.beforeSeekableWindow_(t, e)) {
      const T = t.start(0);
      s = T + (T === t.end(0) ? 0 : Ae);
    }
    if (s !== void 0) return this.logger_(`Trying to seek outside of seekable at time ${e} with seekable range ${am(t)}. Seeking to ${s}.`), this.tech_.setCurrentTime(s), !0;
    const n = this.playlistController_.sourceUpdater_, r = this.tech_.buffered(), a = n.audioBuffer ? n.audioBuffered() : null, l = n.videoBuffer ? n.videoBuffered() : null, u = this.media(), p = u.partTargetDuration ? u.partTargetDuration : 2 * (u.targetDuration - Ie), g = [a, l];
    for (let T = 0; T < g.length; T++)
      if (g[T] && Rl(g[T], e) < p)
        return !1;
    const y = Zn(r, e);
    return y.length !== 0 && (s = y.start(0) + Ae, this.logger_(`Buffered region starts (${y.start(0)})  just beyond seek point (${e}). Seeking to ${s}.`), this.tech_.setCurrentTime(s), !0);
  }
  waiting_() {
    if (this.techWaiting_()) return;
    const t = this.tech_.currentTime(), e = this.tech_.buffered(), s = Qi(e, t);
    return s.length && t + 3 <= s.end(0) ? (this.resetTimeUpdate_(), this.tech_.setCurrentTime(t), this.logger_(`Stopped at ${t} while inside a buffered region [${s.start(0)} -> ${s.end(0)}]. Attempting to resume playback by seeking to the current time.`), void this.tech_.trigger({ type: "usage", name: "vhs-unknown-waiting" })) : void 0;
  }
  techWaiting_() {
    const t = this.seekable(), e = this.tech_.currentTime();
    if (this.tech_.seeking()) return !0;
    if (this.beforeSeekableWindow_(t, e)) {
      const a = t.end(t.length - 1);
      return this.logger_(`Fell out of live window at time ${e}. Seeking to live point (seekable end) ${a}`), this.resetTimeUpdate_(), this.tech_.setCurrentTime(a), this.tech_.trigger({ type: "usage", name: "vhs-live-resync" }), !0;
    }
    const s = this.tech_.vhs.playlistController_.sourceUpdater_, n = this.tech_.buffered();
    if (this.videoUnderflow_({ audioBuffered: s.audioBuffered(), videoBuffered: s.videoBuffered(), currentTime: e })) return this.resetTimeUpdate_(), this.tech_.setCurrentTime(e), this.tech_.trigger({ type: "usage", name: "vhs-video-underflow" }), !0;
    const r = Zn(n, e);
    return r.length > 0 && (this.logger_(`Stopped at ${e} and seeking to ${r.start(0)}`), this.resetTimeUpdate_(), this.skipTheGap_(e), !0);
  }
  afterSeekableWindow_(t, e, s, n = !1) {
    if (!t.length) return !1;
    let r = t.end(t.length - 1) + Ae;
    const a = !s.endList, l = typeof s.partTargetDuration == "number";
    return a && (l || n) && (r = t.end(t.length - 1) + 3 * s.targetDuration), e > r;
  }
  beforeSeekableWindow_(t, e) {
    return !!(t.length && t.start(0) > 0 && e < t.start(0) - this.liveRangeSafeTimeDelta);
  }
  videoUnderflow_({ videoBuffered: t, audioBuffered: e, currentTime: s }) {
    if (!t) return;
    let n;
    if (t.length && e.length) {
      const r = Qi(t, s - 3), a = Qi(t, s), l = Qi(e, s);
      l.length && !a.length && r.length && (n = { start: r.end(0), end: l.end(0) });
    } else
      Zn(t, s).length || (n = this.gapFromVideoUnderflow_(t, s));
    return !!n && (this.logger_(`Encountered a gap in video from ${n.start} to ${n.end}. Seeking to current time ${s}`), !0);
  }
  skipTheGap_(t) {
    const e = this.tech_.buffered(), s = this.tech_.currentTime(), n = Zn(e, s);
    this.resetTimeUpdate_(), n.length !== 0 && s === t && (this.logger_("skipTheGap_:", "currentTime:", s, "scheduled currentTime:", t, "nextRange start:", n.start(0)), this.tech_.setCurrentTime(n.start(0) + Ie), this.tech_.trigger({ type: "usage", name: "vhs-gap-skip" }));
  }
  gapFromVideoUnderflow_(t, e) {
    const s = zb(t);
    for (let n = 0; n < s.length; n++) {
      const r = s.start(n), a = s.end(n);
      if (e - r < 4 && e - r > 2) return { start: r, end: a };
    }
    return null;
  }
}
const Z1 = { errorInterval: 30, getSource(i) {
  return i(this.tech({ IWillNotUseThisInPlugins: !0 }).currentSource_ || this.currentSource());
} }, Wm = function(i, t) {
  let e = 0, s = 0;
  const n = st(Z1, t);
  i.ready(() => {
    i.trigger({ type: "usage", name: "vhs-error-reload-initialized" });
  });
  const r = function() {
    s && i.currentTime(s);
  }, a = function(g) {
    g != null && (s = i.duration() !== 1 / 0 && i.currentTime() || 0, i.one("loadedmetadata", r), i.src(g), i.trigger({ type: "usage", name: "vhs-error-reload" }), i.play());
  }, l = function() {
    if (Date.now() - e < 1e3 * n.errorInterval) i.trigger({ type: "usage", name: "vhs-error-reload-canceled" });
    else {
      if (n.getSource && typeof n.getSource == "function") return e = Date.now(), n.getSource.call(i, a);
      D.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!");
    }
  }, u = function() {
    i.off("loadedmetadata", r), i.off("error", l), i.off("dispose", u);
  }, p = function(g) {
    u(), Wm(i, g);
  };
  i.on("error", l), i.on("dispose", u), i.reloadSourceOnError = p;
}, tS = function(i) {
  Wm(this, i);
};
var Gm = "3.12.1", eS = "7.0.3", iS = "1.3.0", sS = "7.1.0", nS = "4.0.1";
const vt = { PlaylistLoader: Ji, Playlist: Yt, utils: mT, STANDARD_PLAYLIST_SELECTOR: zd, INITIAL_PLAYLIST_SELECTOR: ZT, lastBandwidthSelector: zd, movingAverageBandwidthSelector: QT, comparePlaylistBandwidth: ql, comparePlaylistResolution: YT, xhr: Tm() };
Object.keys(Pt).forEach((i) => {
  Object.defineProperty(vt, i, { get: () => (D.log.warn(`using Vhs.${i} is UNSAFE be sure you know what you are doing`), Pt[i]), set(t) {
    D.log.warn(`using Vhs.${i} is UNSAFE be sure you know what you are doing`), typeof t != "number" || t < 0 ? D.log.warn(`value of Vhs.${i} must be greater than or equal to 0`) : Pt[i] = t;
  } });
});
const Xm = "videojs-vhs", Km = function(i, t) {
  const e = t.media();
  let s = -1;
  for (let n = 0; n < i.length; n++) if (i[n].id === e.id) {
    s = n;
    break;
  }
  i.selectedIndex_ = s, i.trigger({ selectedIndex: s, type: "change" });
}, rS = function(i, t) {
  t.representations().forEach((e) => {
    i.addQualityLevel(e);
  }), Km(i, t.playlists);
};
vt.canPlaySource = function() {
  return D.log.warn("VHS is no longer a tech. Please remove it from your player's techOrder.");
};
const aS = (i, t, e) => {
  if (!i) return i;
  let s = {};
  t && t.attributes && t.attributes.CODECS && (s = Rr(Ce(t.attributes.CODECS))), e && e.attributes && e.attributes.CODECS && (s.audio = e.attributes.CODECS);
  const n = on(s.video), r = on(s.audio), a = {};
  for (const l in i) a[l] = {}, r && (a[l].audioContentType = r), n && (a[l].videoContentType = n), t.contentProtection && t.contentProtection[l] && t.contentProtection[l].pssh && (a[l].pssh = t.contentProtection[l].pssh), typeof i[l] == "string" && (a[l].url = i[l]);
  return st(i, a);
}, oS = (i, t) => i.reduce((e, s) => {
  if (!s.contentProtection) return e;
  const n = t.reduce((r, a) => {
    const l = s.contentProtection[a];
    return l && l.pssh && (r[a] = { pssh: l.pssh }), r;
  }, {});
  return Object.keys(n).length && e.push(n), e;
}, []), lS = ({ player: i, sourceKeySystems: t, audioMedia: e, mainPlaylists: s }) => {
  if (!i.eme.initializeMediaKeys) return Promise.resolve();
  const n = e ? s.concat([e]) : s, r = oS(n, Object.keys(t)), a = [], l = [];
  return r.forEach((u) => {
    l.push(new Promise((p, g) => {
      i.tech_.one("keysessioncreated", p);
    })), a.push(new Promise((p, g) => {
      i.eme.initializeMediaKeys({ keySystems: u }, (y) => {
        y ? g(y) : p();
      });
    }));
  }), Promise.race([Promise.all(a), Promise.race(l)]);
}, hS = ({ player: i, sourceKeySystems: t, media: e, audioMedia: s }) => {
  const n = aS(t, e, s);
  return !!n && (i.currentSource().keySystems = n, !(n && !i.eme) || (D.log.warn("DRM encrypted source cannot be decrypted without a DRM plugin"), !1));
}, Ym = () => {
  if (!E.localStorage) return null;
  const i = E.localStorage.getItem(Xm);
  if (!i) return null;
  try {
    return JSON.parse(i);
  } catch {
    return null;
  }
}, uS = (i) => {
  if (!E.localStorage) return !1;
  let t = Ym();
  t = t ? st(t, i) : i;
  try {
    E.localStorage.setItem(Xm, JSON.stringify(t));
  } catch {
    return !1;
  }
  return t;
}, dS = (i) => i.toLowerCase().indexOf("data:application/vnd.videojs.vhs+json,") === 0 ? JSON.parse(i.substring(i.indexOf(",") + 1)) : i, Qm = (i, t) => {
  i._requestCallbackSet || (i._requestCallbackSet = /* @__PURE__ */ new Set()), i._requestCallbackSet.add(t);
}, Jm = (i, t) => {
  i._responseCallbackSet || (i._responseCallbackSet = /* @__PURE__ */ new Set()), i._responseCallbackSet.add(t);
}, Zm = (i, t) => {
  i._requestCallbackSet && (i._requestCallbackSet.delete(t), i._requestCallbackSet.size || delete i._requestCallbackSet);
}, tg = (i, t) => {
  i._responseCallbackSet && (i._responseCallbackSet.delete(t), i._responseCallbackSet.size || delete i._responseCallbackSet);
};
vt.supportsNativeHls = function() {
  if (!q || !q.createElement) return !1;
  const i = q.createElement("video");
  return D.getTech("Html5").isSupported() ? ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some(function(t) {
    return /maybe|probably/i.test(i.canPlayType(t));
  }) : !1;
}(), vt.supportsNativeDash = !!(q && q.createElement && D.getTech("Html5").isSupported()) && /maybe|probably/i.test(q.createElement("video").canPlayType("application/dash+xml")), vt.supportsTypeNatively = (i) => i === "hls" ? vt.supportsNativeHls : i === "dash" && vt.supportsNativeDash, vt.isSupported = function() {
  return D.log.warn("VHS is no longer a tech. Please remove it from your player's techOrder.");
}, vt.xhr.onRequest = function(i) {
  Qm(vt.xhr, i);
}, vt.xhr.onResponse = function(i) {
  Jm(vt.xhr, i);
}, vt.xhr.offRequest = function(i) {
  Zm(vt.xhr, i);
}, vt.xhr.offResponse = function(i) {
  tg(vt.xhr, i);
};
const cS = D.getComponent("Component");
class eg extends cS {
  constructor(t, e, s) {
    if (super(e, s.vhs), typeof s.initialBandwidth == "number" && (this.options_.bandwidth = s.initialBandwidth), this.logger_ = de("VhsHandler"), e.options_ && e.options_.playerId) {
      const n = D.getPlayer(e.options_.playerId);
      this.player_ = n;
    }
    if (this.tech_ = e, this.source_ = t, this.stats = {}, this.ignoreNextSeekingEvent_ = !1, this.setOptions_(), this.options_.overrideNative && e.overrideNativeAudioTracks && e.overrideNativeVideoTracks) e.overrideNativeAudioTracks(!0), e.overrideNativeVideoTracks(!0);
    else if (this.options_.overrideNative && (e.featuresNativeVideoTracks || e.featuresNativeAudioTracks)) throw new Error("Overriding native VHS requires emulated tracks. See https://git.io/vMpjB");
    this.on(q, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], (n) => {
      const r = q.fullscreenElement || q.webkitFullscreenElement || q.mozFullScreenElement || q.msFullscreenElement;
      r && r.contains(this.tech_.el()) ? this.playlistController_.fastQualityChange_() : this.playlistController_.checkABR_();
    }), this.on(this.tech_, "seeking", function() {
      this.ignoreNextSeekingEvent_ ? this.ignoreNextSeekingEvent_ = !1 : this.setCurrentTime(this.tech_.currentTime());
    }), this.on(this.tech_, "error", function() {
      this.tech_.error() && this.playlistController_ && this.playlistController_.pauseLoading();
    }), this.on(this.tech_, "play", this.play);
  }
  setOptions_(t = {}) {
    if (this.options_ = st(this.options_, t), this.options_.withCredentials = this.options_.withCredentials || !1, this.options_.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions !== !1, this.options_.useDevicePixelRatio = this.options_.useDevicePixelRatio || !1, this.options_.useBandwidthFromLocalStorage = this.source_.useBandwidthFromLocalStorage !== void 0 ? this.source_.useBandwidthFromLocalStorage : this.options_.useBandwidthFromLocalStorage || !1, this.options_.useForcedSubtitles = this.options_.useForcedSubtitles || !1, this.options_.useNetworkInformationApi = this.options_.useNetworkInformationApi || !1, this.options_.useDtsForTimestampOffset = this.options_.useDtsForTimestampOffset || !1, this.options_.customTagParsers = this.options_.customTagParsers || [], this.options_.customTagMappers = this.options_.customTagMappers || [], this.options_.cacheEncryptionKeys = this.options_.cacheEncryptionKeys || !1, this.options_.llhls = this.options_.llhls !== !1, this.options_.bufferBasedABR = this.options_.bufferBasedABR || !1, typeof this.options_.playlistExclusionDuration != "number" && (this.options_.playlistExclusionDuration = 60), typeof this.options_.bandwidth != "number" && this.options_.useBandwidthFromLocalStorage) {
      const s = Ym();
      s && s.bandwidth && (this.options_.bandwidth = s.bandwidth, this.tech_.trigger({ type: "usage", name: "vhs-bandwidth-from-local-storage" })), s && s.throughput && (this.options_.throughput = s.throughput, this.tech_.trigger({ type: "usage", name: "vhs-throughput-from-local-storage" }));
    }
    typeof this.options_.bandwidth != "number" && (this.options_.bandwidth = Pt.INITIAL_BANDWIDTH), this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === Pt.INITIAL_BANDWIDTH, ["withCredentials", "useDevicePixelRatio", "customPixelRatio", "limitRenditionByPlayerDimensions", "bandwidth", "customTagParsers", "customTagMappers", "cacheEncryptionKeys", "playlistSelector", "initialPlaylistSelector", "bufferBasedABR", "liveRangeSafeTimeDelta", "llhls", "useForcedSubtitles", "useNetworkInformationApi", "useDtsForTimestampOffset", "exactManifestTimings", "leastPixelDiffSelector"].forEach((s) => {
      this.source_[s] !== void 0 && (this.options_[s] = this.source_[s]);
    }), this.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions, this.useDevicePixelRatio = this.options_.useDevicePixelRatio;
    const e = this.options_.customPixelRatio;
    typeof e == "number" && e >= 0 && (this.customPixelRatio = e);
  }
  setOptions(t = {}) {
    this.setOptions_(t);
  }
  src(t, e) {
    if (!t) return;
    this.setOptions_(), this.options_.src = dS(this.source_.src), this.options_.tech = this.tech_, this.options_.externVhs = vt, this.options_.sourceType = Cc(e), this.options_.seekTo = (r) => {
      this.tech_.setCurrentTime(r);
    }, this.playlistController_ = new X1(this.options_);
    const s = st({ liveRangeSafeTimeDelta: Ae }, this.options_, { seekable: () => this.seekable(), media: () => this.playlistController_.media(), playlistController: this.playlistController_ });
    this.playbackWatcher_ = new J1(s), this.playlistController_.on("error", () => {
      const r = D.players[this.tech_.options_.playerId];
      let a = this.playlistController_.error;
      typeof a != "object" || a.code ? typeof a == "string" && (a = { message: a, code: 3 }) : a.code = 3, r.error(a);
    });
    const n = this.options_.bufferBasedABR ? vt.movingAverageBandwidthSelector(0.55) : vt.STANDARD_PLAYLIST_SELECTOR;
    this.playlistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : n.bind(this), this.playlistController_.selectInitialPlaylist = vt.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.playlistController_.mainPlaylistLoader_, this.mediaSource = this.playlistController_.mediaSource, Object.defineProperties(this, { selectPlaylist: { get() {
      return this.playlistController_.selectPlaylist;
    }, set(r) {
      this.playlistController_.selectPlaylist = r.bind(this);
    } }, throughput: { get() {
      return this.playlistController_.mainSegmentLoader_.throughput.rate;
    }, set(r) {
      this.playlistController_.mainSegmentLoader_.throughput.rate = r, this.playlistController_.mainSegmentLoader_.throughput.count = 1;
    } }, bandwidth: { get() {
      let r = this.playlistController_.mainSegmentLoader_.bandwidth;
      const a = E.navigator.connection || E.navigator.mozConnection || E.navigator.webkitConnection, l = 1e7;
      if (this.options_.useNetworkInformationApi && a) {
        const u = 1e3 * a.downlink * 1e3;
        r = u >= l && r >= l ? Math.max(r, u) : u;
      }
      return r;
    }, set(r) {
      this.playlistController_.mainSegmentLoader_.bandwidth = r, this.playlistController_.mainSegmentLoader_.throughput = { rate: 0, count: 0 };
    } }, systemBandwidth: { get() {
      const r = 1 / (this.bandwidth || 1);
      let a;
      return a = this.throughput > 0 ? 1 / this.throughput : 0, Math.floor(1 / (r + a));
    }, set() {
      D.log.error('The "systemBandwidth" property is read-only');
    } } }), this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth), this.options_.throughput && (this.throughput = this.options_.throughput), Object.defineProperties(this.stats, { bandwidth: { get: () => this.bandwidth || 0, enumerable: !0 }, mediaRequests: { get: () => this.playlistController_.mediaRequests_() || 0, enumerable: !0 }, mediaRequestsAborted: { get: () => this.playlistController_.mediaRequestsAborted_() || 0, enumerable: !0 }, mediaRequestsTimedout: { get: () => this.playlistController_.mediaRequestsTimedout_() || 0, enumerable: !0 }, mediaRequestsErrored: { get: () => this.playlistController_.mediaRequestsErrored_() || 0, enumerable: !0 }, mediaTransferDuration: { get: () => this.playlistController_.mediaTransferDuration_() || 0, enumerable: !0 }, mediaBytesTransferred: { get: () => this.playlistController_.mediaBytesTransferred_() || 0, enumerable: !0 }, mediaSecondsLoaded: { get: () => this.playlistController_.mediaSecondsLoaded_() || 0, enumerable: !0 }, mediaAppends: { get: () => this.playlistController_.mediaAppends_() || 0, enumerable: !0 }, mainAppendsToLoadedData: { get: () => this.playlistController_.mainAppendsToLoadedData_() || 0, enumerable: !0 }, audioAppendsToLoadedData: { get: () => this.playlistController_.audioAppendsToLoadedData_() || 0, enumerable: !0 }, appendsToLoadedData: { get: () => this.playlistController_.appendsToLoadedData_() || 0, enumerable: !0 }, timeToLoadedData: { get: () => this.playlistController_.timeToLoadedData_() || 0, enumerable: !0 }, buffered: { get: () => ki(this.tech_.buffered()), enumerable: !0 }, currentTime: { get: () => this.tech_.currentTime(), enumerable: !0 }, currentSource: { get: () => this.tech_.currentSource_, enumerable: !0 }, currentTech: { get: () => this.tech_.name_, enumerable: !0 }, duration: { get: () => this.tech_.duration(), enumerable: !0 }, main: { get: () => this.playlists.main, enumerable: !0 }, playerDimensions: { get: () => this.tech_.currentDimensions(), enumerable: !0 }, seekable: { get: () => ki(this.tech_.seekable()), enumerable: !0 }, timestamp: { get: () => Date.now(), enumerable: !0 }, videoPlaybackQuality: { get: () => this.tech_.getVideoPlaybackQuality(), enumerable: !0 } }), this.tech_.one("canplay", this.playlistController_.setupFirstPlay.bind(this.playlistController_)), this.tech_.on("bandwidthupdate", () => {
      this.options_.useBandwidthFromLocalStorage && uS({ bandwidth: this.bandwidth, throughput: Math.round(this.throughput) });
    }), this.playlistController_.on("selectedinitialmedia", () => {
      Q1(this);
    }), this.playlistController_.sourceUpdater_.on("createdsourcebuffers", () => {
      this.setupEme_();
    }), this.on(this.playlistController_, "progress", function() {
      this.tech_.trigger("progress");
    }), this.on(this.playlistController_, "firstplay", function() {
      this.ignoreNextSeekingEvent_ = !0;
    }), this.setupQualityLevels_(), this.tech_.el() && (this.mediaSourceUrl_ = E.URL.createObjectURL(this.playlistController_.mediaSource), this.tech_.src(this.mediaSourceUrl_));
  }
  createKeySessions_() {
    const t = this.playlistController_.mediaTypes_.AUDIO.activePlaylistLoader;
    this.logger_("waiting for EME key session creation"), lS({ player: this.player_, sourceKeySystems: this.source_.keySystems, audioMedia: t && t.media(), mainPlaylists: this.playlists.main.playlists }).then(() => {
      this.logger_("created EME key session"), this.playlistController_.sourceUpdater_.initializedEme();
    }).catch((e) => {
      this.logger_("error while creating EME key session", e), this.player_.error({ message: "Failed to initialize media keys for EME", code: 3, metadata: { errorType: D.Error.EMEKeySessionCreationError } });
    });
  }
  handleWaitingForKey_() {
    this.logger_("waitingforkey fired, attempting to create any new key sessions"), this.createKeySessions_();
  }
  setupEme_() {
    const t = this.playlistController_.mediaTypes_.AUDIO.activePlaylistLoader, e = hS({ player: this.player_, sourceKeySystems: this.source_.keySystems, media: this.playlists.media(), audioMedia: t && t.media() });
    this.player_.tech_.on("keystatuschange", (s) => {
      this.playlistController_.updatePlaylistByKeyStatus(s.keyId, s.status);
    }), this.handleWaitingForKey_ = this.handleWaitingForKey_.bind(this), this.player_.tech_.on("waitingforkey", this.handleWaitingForKey_), e ? this.createKeySessions_() : this.playlistController_.sourceUpdater_.initializedEme();
  }
  setupQualityLevels_() {
    const t = D.players[this.tech_.options_.playerId];
    t && t.qualityLevels && !this.qualityLevels_ && (this.qualityLevels_ = t.qualityLevels(), this.playlistController_.on("selectedinitialmedia", () => {
      rS(this.qualityLevels_, this);
    }), this.playlists.on("mediachange", () => {
      Km(this.qualityLevels_, this.playlists);
    }));
  }
  static version() {
    return { "@videojs/http-streaming": Gm, "mux.js": eS, "mpd-parser": iS, "m3u8-parser": sS, "aes-decrypter": nS };
  }
  version() {
    return this.constructor.version();
  }
  canChangeType() {
    return Hm.canChangeType();
  }
  play() {
    this.playlistController_.play();
  }
  setCurrentTime(t) {
    this.playlistController_.setCurrentTime(t);
  }
  duration() {
    return this.playlistController_.duration();
  }
  seekable() {
    return this.playlistController_.seekable();
  }
  dispose() {
    this.playbackWatcher_ && this.playbackWatcher_.dispose(), this.playlistController_ && this.playlistController_.dispose(), this.qualityLevels_ && this.qualityLevels_.dispose(), this.tech_ && this.tech_.vhs && delete this.tech_.vhs, this.mediaSourceUrl_ && E.URL.revokeObjectURL && (E.URL.revokeObjectURL(this.mediaSourceUrl_), this.mediaSourceUrl_ = null), this.tech_ && this.tech_.off("waitingforkey", this.handleWaitingForKey_), super.dispose();
  }
  convertToProgramTime(t, e) {
    return TT({ playlist: this.playlistController_.media(), time: t, callback: e });
  }
  seekToProgramTime(t, e, s = !0, n = 2) {
    return km({ programTime: t, playlist: this.playlistController_.media(), retryCount: n, pauseAfterSeek: s, seekTo: this.options_.seekTo, tech: this.options_.tech, callback: e });
  }
  setupXhrHooks_() {
    this.xhr.onRequest = (t) => {
      Qm(this.xhr, t);
    }, this.xhr.onResponse = (t) => {
      Jm(this.xhr, t);
    }, this.xhr.offRequest = (t) => {
      Zm(this.xhr, t);
    }, this.xhr.offResponse = (t) => {
      tg(this.xhr, t);
    }, this.player_.trigger("xhr-hooks-ready");
  }
}
const Br = { name: "videojs-http-streaming", VERSION: Gm, canHandleSource(i, t = {}) {
  const e = st(D.options, t);
  return Br.canPlayType(i.type, e);
}, handleSource(i, t, e = {}) {
  const s = st(D.options, e);
  return t.vhs = new eg(i, t, s), t.vhs.xhr = Tm(), t.vhs.setupXhrHooks_(), t.vhs.src(i.src, i.type), t.vhs;
}, canPlayType(i, t) {
  const e = Cc(i);
  if (!e) return "";
  const s = Br.getOverrideNative(t);
  return !vt.supportsTypeNatively(e) || s ? "maybe" : "";
}, getOverrideNative(i = {}) {
  const { vhs: t = {} } = i, e = !(D.browser.IS_ANY_SAFARI || D.browser.IS_IOS), { overrideNative: s = e } = t;
  return s;
} };
ar("avc1.4d400d,mp4a.40.2") && D.getTech("Html5").registerSourceHandler(Br, 0), D.VhsHandler = eg, D.VhsSourceHandler = Br, D.Vhs = vt, D.use || D.registerComponent("Vhs", vt), D.options.vhs = D.options.vhs || {}, D.getPlugin && D.getPlugin("reloadSourceOnError") || D.registerPlugin("reloadSourceOnError", tS);
const pS = "application/x-mpegURL";
let yt = class extends ol {
  constructor() {
    super(), this._defaultConfigs = { autoplay: !1, fluid: !1, fullscreen: !1, loop: !1, muted: !1, preload: "auto", responsive: !1, startTime: 0 }, this._prevPlayingState = !1, this.currentMetadata = null, this.element = null, this.sensorModel = null, this.state = "not-ready", this.waitingTimestamp = null, this._initController = () => {
      !this._controller && this.playerUrl && (this.element = document.createElement("video"), D.log.level("error"), this._controller = D(this.element, this._defaultConfigs), this._controller.muted(this.muted), this._controller.loop(this.loop), this._controller.playbackRate(this.rate), this._controller.ready(this._handleReady), this._controller.on("canplay", this._handleCanPlay), this._controller.on("durationchange", this._handleDurationChange), this._controller.on("ended", this._handleEnded), this._controller.on("error", this._handleError), this._controller.on("loadeddata", this._handleDataLoaded), this._controller.on("loadedmetadata", this._handleLoadedMetadata), this._controller.on("loadstart", this._handleLoadStart), this._controller.on("play", this._handlePlay), this._controller.on("timeupdate", this._handleTimeUpdate), this._controller.on("waiting", this._handleWaiting), this._controller.on("xhr-hooks-ready", this._handleXHRhooksReady));
    }, this._handleReady = () => {
      this.state = "ready";
    }, this._handleCanPlay = () => {
      this._prevPlayingState = this.state === "playing", this.state = "can-play";
    }, this._handleCueChange = () => {
      if (!this.subtitleTrack?.activeCues?.length) return;
      const i = this.subtitleTrack?.activeCues[0], t = i.text ? JSON.parse(i.text) : null;
      if (!t?.data?.length) return;
      const e = t.data[0]?.value ?? [], s = /* @__PURE__ */ new Map();
      for (const n of e)
        Array.isArray(n.value) ? n.tagId === 90064 ? s.set(n.tagId, n) : n.value.forEach((r) => {
          s.set(r.tagId, r);
        }) : s.set(n.tagId, n);
      s.set(F.EsriVideoWidth, { name: "Video Width", tagId: F.EsriVideoWidth, value: this._controller?.videoWidth() }), s.set(F.EsriVideoHeight, { name: "Video Height", tagId: F.EsriVideoHeight, value: this._controller?.videoHeight() }), this.currentMetadata = new Map(s), this.sensorModel = new sy({ videoMetadata: this.currentMetadata });
    }, this._handleDataLoaded = () => {
      this.state = "data-loaded", this._set("videoWidth", this._controller?.videoWidth()), this._set("videoHeight", this._controller?.videoHeight());
    }, this._handleDurationChange = () => this.notifyChange("duration"), this._handleEnded = () => {
      if (!this.loop) return this._set("ended", !0), this.notifyChange("buffered"), this.notifyChange("currentTime"), this.notifyChange("duration"), this.notifyChange("waiting"), void (this.state = "can-play");
      this.setCurrentTime(0), this.play();
    }, this._handleError = () => {
      Af.getLogger(this).error("video stream error ::", this._controller?.error());
    }, this._handleLoadStart = () => {
      this.state = "can-play";
    }, this._handleLoadedMetadata = () => {
      this.notifyChange("subtitleTrack"), this.notifyChange("buffered");
    }, this._handlePlay = () => this.notifyChange("ended"), this._handleTimeUpdate = () => {
      this.notifyChange("currentTime"), this.notifyChange("buffered"), this.notifyChange("bufferedPercent"), this._set("videoWidth", this._controller?.videoWidth()), this._set("videoHeight", this._controller?.videoHeight());
    }, this._handleWaiting = () => {
      this.waitingTimestamp = this._controller?.currentTime();
    }, this._handleXHRhooksReady = () => {
      const i = (t) => (t.xhr = new Vi(), t);
      this._controller?.tech(!0)?.vhs.xhr.onRequest(i);
    };
  }
  initialize() {
    this.addHandles([fr(() => this.playerUrl, (i) => {
      i && (this._initController(), this._controller?.src({ type: pS, src: this.playerUrl }));
    }, nc), fr(() => this.subtitleTrack, () => {
      this.subtitleTrack && (this.subtitleTrack.mode = "showing");
    })]), this.addHandles(Pf(() => this.subtitleTrack, "cuechange", this._handleCueChange));
  }
  destroy() {
    this._controller?.dispose();
  }
  get buffered() {
    return this._controller?.bufferedEnd() ?? 0;
  }
  get bufferedPercent() {
    return this._controller?.bufferedPercent() ?? 0;
  }
  get currentTime() {
    return this._controller?.currentTime() ?? 0;
  }
  get duration() {
    return this._controller?.duration() ?? 0;
  }
  get ended() {
    return this._controller?.ended() ?? this._get("ended") ?? !0;
  }
  set ended(i) {
    this._controller?.ended(i), this._set("ended", i);
  }
  get loop() {
    return this._controller?.loop() ?? this._get("loop") ?? !1;
  }
  set loop(i) {
    this._controller?.loop(i), this._set("loop", i);
  }
  get muted() {
    return this._controller?.muted() ?? this._get("muted") ?? !1;
  }
  set muted(i) {
    this._controller?.muted(i), this._set("muted", i);
  }
  get playerUrl() {
    return this._controller?.src() || "";
  }
  set playerUrl(i) {
    this._set("playerUrl", i);
  }
  get playing() {
    return !this.ended && (this.state === "can-play" ? this._prevPlayingState : this.state === "playing");
  }
  get rate() {
    return this._controller?.playbackRate() ?? this._get("rate") ?? 1;
  }
  set rate(i) {
    this._controller?.playbackRate(i), this._set("rate", i);
  }
  get started() {
    return this._controller?.hasStarted() || !1;
  }
  get subtitleTrack() {
    const i = this._controller?.textTracks();
    return i?.length ? Array.from(i).find((t) => t.kind === "subtitles") : null;
  }
  get waiting() {
    return !this.waitingTimestamp && (this.waitingTimestamp === this.currentTime || (this.waitingTimestamp = null, !1));
  }
  pause() {
    this._controller?.pause(), this.state = "paused";
  }
  play() {
    this._controller?.play(), this.state = "playing";
  }
  reset() {
    this._controller && (this.pause(), this.setCurrentTime(0), this._set("ended", !0));
  }
  setCurrentTime(i) {
    const t = rc(i, 0, this.duration);
    this._controller?.currentTime(t), this.notifyChange("currentTime");
  }
};
U([B()], yt.prototype, "buffered", null), U([B()], yt.prototype, "bufferedPercent", null), U([B({ readOnly: !0 })], yt.prototype, "currentTime", null), U([B()], yt.prototype, "currentMetadata", void 0), U([B({ readOnly: !0 })], yt.prototype, "duration", null), U([B()], yt.prototype, "element", void 0), U([B({ readOnly: !0 })], yt.prototype, "ended", null), U([B()], yt.prototype, "loop", null), U([B()], yt.prototype, "muted", null), U([B()], yt.prototype, "playerUrl", null), U([B({ readOnly: !0 })], yt.prototype, "playing", null), U([B()], yt.prototype, "rate", null), U([B()], yt.prototype, "sensorModel", void 0), U([B({ readOnly: !0 })], yt.prototype, "started", null), U([B()], yt.prototype, "state", void 0), U([B()], yt.prototype, "subtitleTrack", null), U([B({ readOnly: !0 })], yt.prototype, "videoHeight", void 0), U([B({ readOnly: !0 })], yt.prototype, "videoWidth", void 0), U([B({ readOnly: !0 })], yt.prototype, "waiting", null), U([B()], yt.prototype, "waitingTimestamp", void 0), yt = U([hi("esri.layers.video.VideoController")], yt);
const mS = yt;
let G = class extends Df(Lf(Of(Nf(Bf)))) {
  constructor(i) {
    super(i), this._trailPoints = [], this.capabilities = null, this.connectionInfo = null, this.controller = new mS(), this.copyright = null, this.coverage = null, this.created = null, this.description = null, this.elevationSource = null, this.frame = null, this.frameCount = null, this.fullExtent = null, this.initialExtent = null, this.layerId = null, this.playbackInfo = null, this.posterUrl = null, this.protocol = "hls", this.qualities = null, this.serviceItemId = null, this.sourceJSON = null, this.sourceQuality = null, this.sourceType = null, this.spatialReference = ir.WGS84, this.telemetryDisplay = null, this.title = null, this.type = "video", this.url = null, this.videoTimeExtent = null;
  }
  initialize() {
    this.telemetryDisplay = new ac({ frameCenter: !0, frameOutline: !0, lineOfSight: !0, sensorLocation: !0, sensorTrail: !0 }), this.addHandles([fr(() => this.metadata, () => {
      this.notifyChange("telemetry"), this.notifyChange("groundControlPoints"), this.notifyChange("frameHorizonPoints");
    }), fr(() => this.telemetry?.sensorLocation, (i) => this._setSensorTrail(i), nc)]);
  }
  load(i) {
    const t = i != null ? i.signal : null;
    return this.addResolvingPromise(this._fetchService(t)), Promise.resolve(this);
  }
  get buffered() {
    return this.controller.buffered;
  }
  readCapabilitiesFromService(i, t) {
    return Rf(t);
  }
  readConnectionInfo(i, t) {
    const e = t.connectionUrl;
    return this.controller.playerUrl = e && this.protocol ? e[this.protocol] : "", e;
  }
  get currentTime() {
    return this.controller.currentTime;
  }
  get duration() {
    return this.controller.duration;
  }
  get ended() {
    return this.controller.ended;
  }
  get frameHorizonPoints() {
    return Xf(this.metadata);
  }
  get groundControlPoints() {
    return Gf(this.metadata);
  }
  get loop() {
    return this.controller.loop;
  }
  set loop(i) {
    this.controller.loop = i;
  }
  get metadata() {
    return this.controller?.currentMetadata;
  }
  get muted() {
    return this.controller.muted;
  }
  set muted(i) {
    this.controller.muted = i;
  }
  get playbackRate() {
    return this.controller.rate;
  }
  set playbackRate(i) {
    this.controller.rate = i;
  }
  get playerUrl() {
    return this.controller.playerUrl;
  }
  get playing() {
    return this.controller.playing;
  }
  get state() {
    return this.controller.state;
  }
  get telemetry() {
    return Wf(this.metadata);
  }
  get videoElement() {
    return this.controller?.element;
  }
  get videoHeight() {
    return this.controller?.videoHeight;
  }
  get videoWidth() {
    return this.controller?.videoWidth;
  }
  get waiting() {
    return this.controller.waiting;
  }
  play() {
    this.controller.play();
  }
  pause() {
    this.controller.pause();
  }
  reset() {
    this.controller.reset();
  }
  setCurrentTime(i) {
    if (!this.duration) return;
    const t = rc(i, 0, this.duration);
    this.controller.setCurrentTime(t);
  }
  getCurrentFrame() {
  }
  toGround(i, t) {
    return this.controller?.sensorModel?.metadataSupportsTransforms ? this.controller.sensorModel.transformImageToGeo(i, t) : null;
  }
  toVideo(i) {
    if (!this.controller?.sensorModel?.metadataSupportsTransforms) return null;
    const t = this.controller.sensorModel.transformGeoToImage(i.x, i.y, i.z);
    return { x: t[0], y: t[1] };
  }
  async _fetchService(i) {
    if (this.sourceJSON) return void this.read(this.sourceJSON, { origin: "service", url: this.parsedUrl });
    const t = Mf(this.parsedUrl?.path);
    if (t == null) throw new Wh("arcgis-layers:url-mismatch", "The url is not a valid arcgis resource");
    let e = null;
    const { data: s, ssl: n } = await So(t.url.path, { query: { f: "json", ...this.parsedUrl.query, ...this.customParameters }, signal: i }), r = s;
    if (this.url = t.url.path, n && (this.url = this.url.replace(/^http:/i, "https:")), !r?.currentVersion) return r.currentVersion = "11.2", this.sourceJSON = r, void this.read(this.sourceJSON, { origin: "service", url: this.parsedUrl });
    let a = t?.sublayer;
    if (a == null && r.layers?.length && (a = r.layers[0].id), a == null) throw new Wh("arcgis-layers:url-mismatch", "The url is not a valid arcgis resource");
    this.url = `${t.url.path}/${a}`, e = await So(this.url, { query: { f: "json", ...this.customParameters }, signal: i });
    const l = { ...r, ...e.data };
    this.sourceJSON = l, this.read(this.sourceJSON, { origin: "service", url: this.parsedUrl });
  }
  _setSensorTrail(i) {
    if (!i) return;
    const t = zf(i, this._trailPoints);
    this._trailPoints = [...t];
    const e = this._trailPoints.map((n) => n.toArray()), s = new mr({ hasZ: i.hasZ, paths: [e] });
    this.telemetry.sensorTrail = s.clone();
  }
};
U([B({ readOnly: !0 })], G.prototype, "buffered", null), U([B({ readOnly: !0, json: { read: !1 } })], G.prototype, "capabilities", void 0), U([an("service", "capabilities", ["supportsAppend", "supportsCoverageQuery", "supportsExportClip", "supportsExportFrameset", "supportsMensuration", "supportsUpdate"])], G.prototype, "readCapabilitiesFromService", null), U([B({ readOnly: !0 })], G.prototype, "connectionInfo", void 0), U([an("connectionInfo", ["connectionUrl"])], G.prototype, "readConnectionInfo", null), U([B()], G.prototype, "controller", void 0), U([B({ type: String })], G.prototype, "copyright", void 0), U([B({ type: mn })], G.prototype, "coverage", void 0), U([B({ type: Date })], G.prototype, "created", void 0), U([B({ type: Number })], G.prototype, "currentTime", null), U([B({ type: String })], G.prototype, "description", void 0), U([B({ type: Number })], G.prototype, "duration", null), U([B({ readOnly: !0 })], G.prototype, "elevationSource", void 0), U([B({ type: Boolean })], G.prototype, "ended", null), U([B({ type: $f })], G.prototype, "frame", void 0), U([B({ type: Number })], G.prototype, "frameCount", void 0), U([B({ type: Gh })], G.prototype, "fullExtent", void 0), U([B({ readOnly: !0 })], G.prototype, "frameHorizonPoints", null), U([B({ readOnly: !0 })], G.prototype, "groundControlPoints", null), U([B({ type: Gh })], G.prototype, "initialExtent", void 0), U([B({ readOnly: !0, json: { read: { source: "id" } } })], G.prototype, "layerId", void 0), U([B({ type: Boolean })], G.prototype, "loop", null), U([B({ readOnly: !0 })], G.prototype, "metadata", null), U([B({ type: Boolean })], G.prototype, "muted", null), U([B({ type: qf })], G.prototype, "playbackInfo", void 0), U([B({ type: Number })], G.prototype, "playbackRate", null), U([B({ type: String })], G.prototype, "playerUrl", null), U([B({ readOnly: !0 })], G.prototype, "playing", null), U([B({ readOnly: !0, json: { read: { source: "poster" } } })], G.prototype, "posterUrl", void 0), U([B({ type: String })], G.prototype, "protocol", void 0), U([B({ readOnly: !0 })], G.prototype, "qualities", void 0), U([B({ readOnly: !0 })], G.prototype, "serviceItemId", void 0), U([B()], G.prototype, "sourceJSON", void 0), U([B()], G.prototype, "sourceQuality", void 0), U([B({ readOnly: !0, json: { name: "serviceType" } })], G.prototype, "sourceType", void 0), U([B()], G.prototype, "spatialReference", void 0), U([B({ type: String })], G.prototype, "state", null), U([B({ type: Eo })], G.prototype, "telemetry", null), U([B({ type: ac })], G.prototype, "telemetryDisplay", void 0), U([B({ readOnly: !1, json: { read: { source: "name" } } })], G.prototype, "title", void 0), U([B({ readOnly: !0 })], G.prototype, "type", void 0), U([B(Uf)], G.prototype, "url", void 0), U([B({ readOnly: !0 })], G.prototype, "videoElement", null), U([B({ readOnly: !0 })], G.prototype, "videoHeight", null), U([B({ readOnly: !0, nonNullable: !1, json: { read: { reader: Vf, source: "time" } } })], G.prototype, "videoTimeExtent", void 0), U([B({ readOnly: !0 })], G.prototype, "videoWidth", null), U([B({ readOnly: !0 })], G.prototype, "waiting", null), G = U([hi("esri.layers.VideoLayer")], G);
const CS = G;
export {
  CS as default
};
//# sourceMappingURL=VideoLayer-DLSjsRUk.js.map
