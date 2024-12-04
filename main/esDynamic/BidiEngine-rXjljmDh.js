const I = [["(", ")"], [")", "("], ["<", ">"], [">", "<"], ["[", "]"], ["]", "["], ["{", "}"], ["}", "{"], ["«", "»"], ["»", "«"], ["‹", "›"], ["›", "‹"], ["⁽", "⁾"], ["⁾", "⁽"], ["₍", "₎"], ["₎", "₍"], ["≤", "≥"], ["≥", "≤"], ["〈", "〉"], ["〉", "〈"], ["﹙", "﹚"], ["﹚", "﹙"], ["﹛", "﹜"], ["﹜", "﹛"], ["﹝", "﹞"], ["﹞", "﹝"], ["﹤", "﹥"], ["﹥", "﹤"]], V = ["آ", "أ", "إ", "ا"], $ = ["ﻵ", "ﻷ", "ﻹ", "ﻻ"], tt = ["ﻶ", "ﻸ", "ﻺ", "ﻼ"], k = ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "إ", "أ", "آ", "ة", "ى", "ل", "م", "ن", "ه", "و", "ي", "إ", "أ", "آ", "ة", "ى", "ی", "ئ", "ؤ"], rt = ["ﺍ", "ﺏ", "ﺕ", "ﺙ", "ﺝ", "ﺡ", "ﺥ", "ﺩ", "ﺫ", "ﺭ", "ﺯ", "ﺱ", "ﺵ", "ﺹ", "ﺽ", "ﻁ", "ﻅ", "ﻉ", "ﻍ", "ﻑ", "ﻕ", "ﻙ", "ﻝ", "ﻡ", "ﻥ", "ﻩ", "ﻭ", "ﻱ", "ﺇ", "ﺃ", "ﺁ", "ﺓ", "ﻯ", "ﯼ", "ﺉ", "ﺅ", "ﹰ", "ﹲ", "ﹴ", "ﹶ", "ﹸ", "ﹺ", "ﹼ", "ﹾ", "ﺀ", "ﺉ", "ﺅ"], et = ["ﺎ", "ﺐ", "ﺖ", "ﺚ", "ﺞ", "ﺢ", "ﺦ", "ﺪ", "ﺬ", "ﺮ", "ﺰ", "ﺲ", "ﺶ", "ﺺ", "ﺾ", "ﻂ", "ﻆ", "ﻊ", "ﻎ", "ﻒ", "ﻖ", "ﻚ", "ﻞ", "ﻢ", "ﻦ", "ﻪ", "ﻮ", "ﻲ", "ﺈ", "ﺄ", "ﺂ", "ﺔ", "ﻰ", "ﯽ", "ﺊ", "ﺆ", "ﹰ", "ﹲ", "ﹴ", "ﹶ", "ﹸ", "ﹺ", "ﹼ", "ﹾ", "ﺀ", "ﺊ", "ﺆ"], nt = ["ﺎ", "ﺒ", "ﺘ", "ﺜ", "ﺠ", "ﺤ", "ﺨ", "ﺪ", "ﺬ", "ﺮ", "ﺰ", "ﺴ", "ﺸ", "ﺼ", "ﻀ", "ﻄ", "ﻈ", "ﻌ", "ﻐ", "ﻔ", "ﻘ", "ﻜ", "ﻠ", "ﻤ", "ﻨ", "ﻬ", "ﻮ", "ﻴ", "ﺈ", "ﺄ", "ﺂ", "ﺔ", "ﻰ", "ﯿ", "ﺌ", "ﺆ", "ﹱ", "ﹲ", "ﹴ", "ﹷ", "ﹹ", "ﹻ", "ﹽ", "ﹿ", "ﺀ", "ﺌ", "ﺆ"], ot = ["ﺍ", "ﺑ", "ﺗ", "ﺛ", "ﺟ", "ﺣ", "ﺧ", "ﺩ", "ﺫ", "ﺭ", "ﺯ", "ﺳ", "ﺷ", "ﺻ", "ﺿ", "ﻃ", "ﻇ", "ﻋ", "ﻏ", "ﻓ", "ﻗ", "ﻛ", "ﻟ", "ﻣ", "ﻧ", "ﻫ", "ﻭ", "ﻳ", "ﺇ", "ﺃ", "ﺁ", "ﺓ", "ﻯ", "ﯾ", "ﺋ", "ﺅ", "ﹰ", "ﹲ", "ﹴ", "ﹶ", "ﹸ", "ﹺ", "ﹼ", "ﹾ", "ﺀ", "ﺋ", "ﺅ"], z = ["ء", "آ", "أ", "ؤ", "إ", "ا", "ة", "د", "ذ", "ر", "ز", "و", "ى"], it = ["ً", "ً", "ٌ", "؟", "ٍ", "؟", "َ", "َ", "ُ", "ُ", "ِ", "ِ", "ّ", "ّ", "ْ", "ْ", "ء", "آ", "آ", "أ", "أ", "ؤ", "ؤ", "إ", "إ", "ئ", "ئ", "ئ", "ئ", "ا", "ا", "ب", "ب", "ب", "ب", "ة", "ة", "ت", "ت", "ت", "ت", "ث", "ث", "ث", "ث", "ج", "ج", "ج", "ج", "ح", "ح", "ح", "ح", "خ", "خ", "خ", "خ", "د", "د", "ذ", "ذ", "ر", "ر", "ز", "ز", "س", "س", "س", "س", "ش", "ش", "ش", "ش", "ص", "ص", "ص", "ص", "ض", "ض", "ض", "ض", "ط", "ط", "ط", "ط", "ظ", "ظ", "ظ", "ظ", "ع", "ع", "ع", "ع", "غ", "غ", "غ", "غ", "ف", "ف", "ف", "ف", "ق", "ق", "ق", "ق", "ك", "ك", "ك", "ك", "ل", "ل", "ل", "ل", "م", "م", "م", "م", "ن", "ن", "ن", "ن", "ه", "ه", "ه", "ه", "و", "و", "ى", "ى", "ي", "ي", "ي", "ي", "ﻵ", "ﻶ", "ﻷ", "ﻸ", "ﻹ", "ﻺ", "ﻻ", "ﻼ", "؟", "؟", "؟"], q = ["ء", "ف"], ut = ["غ", "ي"], st = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], at = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], e = 0, u = 1, h = 2, B = 3, t = 4, _ = 5, j = 6, r = 7, m = 8, R = 9, b = 10, T = 11, n = 12, ft = 13, ct = 14, lt = 15, ht = 16, Tt = 17, l = 18, At = ["UBAT_L", "UBAT_R", "UBAT_EN", "UBAT_AN", "UBAT_ON", "UBAT_B", "UBAT_S", "UBAT_AL", "UBAT_WS", "UBAT_CS", "UBAT_ES", "UBAT_ET", "UBAT_NSM", "UBAT_LRE", "UBAT_RLE", "UBAT_PDF", "UBAT_LRO", "UBAT_RLO", "UBAT_BN"], p = 100, Lt = [p + 0, e, e, e, e, p + 1, p + 2, p + 3, u, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, p + 4, t, t, t, e, t, e, t, e, t, t, t, e, e, t, t, e, e, e, e, e, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, e, e, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, e, e, e, e, e, e, e, e, e, e, e, e, e, e, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, e, e, t, t, e, e, t, t, e, e, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, e, e, e, p + 5, r, r, p + 6, p + 7], gt = [[l, l, l, l, l, l, l, l, l, j, _, j, m, _, l, l, l, l, l, l, l, l, l, l, l, l, l, l, _, _, _, j, m, t, t, T, T, T, t, t, t, t, t, b, R, b, R, R, h, h, h, h, h, h, h, h, h, h, R, t, t, t, t, t, t, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, t, t, t, t, t, t, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, t, t, t, t, l, l, l, l, l, l, _, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, R, t, T, T, T, T, t, t, t, t, e, t, t, l, t, t, T, T, h, h, t, e, t, t, t, h, e, t, t, t, t, t, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, t, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, t, e, e, e, e, e, e, e, e], [e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, t, t, t, t, t, t, t, t, t, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, t, t, e, e, e, e, e, e, e, t, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, t, e, t, t, t, t, t, t, t, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, u, n, u, n, n, u, n, n, u, n, t, t, t, t, t, t, t, t, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, t, t, t, t, t, u, u, u, u, u, t, t, t, t, t, t, t, t, t, t, t], [B, B, B, B, t, t, t, t, r, T, T, r, R, r, t, t, n, n, n, n, n, n, n, n, n, n, n, r, t, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, B, B, B, B, B, B, B, B, B, B, T, B, B, r, r, r, n, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, n, n, n, n, n, n, n, B, t, n, n, n, n, n, n, r, r, n, n, t, n, n, n, n, r, r, h, h, h, h, h, h, h, h, h, h, r, r, r, r, r, r], [r, r, r, r, r, r, r, r, r, r, r, r, r, r, t, r, r, n, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, t, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, n, n, n, n, n, n, n, n, n, n, n, r, t, t, t, t, t, t, t, t, t, t, t, t, t, t, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, n, n, n, n, n, n, n, n, n, u, u, t, t, t, t, u, t, t, t, t, t], [m, m, m, m, m, m, m, m, m, m, m, l, l, l, e, u, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, m, _, ft, ct, lt, ht, Tt, R, T, T, T, T, T, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, R, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, m, l, l, l, l, l, t, t, t, t, t, l, l, l, l, l, l, h, e, t, t, h, h, h, h, h, h, b, b, t, t, t, e, h, h, h, h, h, h, h, h, h, h, b, b, t, t, t, t, e, e, e, e, e, e, e, e, e, e, e, e, e, t, t, t, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t], [e, e, e, e, e, e, e, t, t, t, t, t, t, t, t, t, t, t, t, e, e, e, e, e, t, t, t, t, t, u, n, u, u, u, u, u, u, u, u, u, u, b, u, u, u, u, u, u, u, u, u, u, u, u, u, t, u, u, u, u, u, t, u, t, u, u, t, u, u, t, u, u, u, u, u, u, u, u, u, u, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r], [n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, n, n, n, n, n, n, n, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, R, t, R, t, t, R, t, t, t, t, t, t, t, t, t, T, t, t, b, b, t, t, t, t, t, T, T, t, t, t, t, t, r, r, r, r, r, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, t, t, l], [t, t, t, T, T, T, t, t, t, t, t, b, R, b, R, R, h, h, h, h, h, h, h, h, h, h, R, t, t, t, t, t, t, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, t, t, t, t, t, t, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, t, t, t, t, t, t, t, t, t, t, t, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, t, t, t, e, e, e, e, e, e, t, t, e, e, e, e, e, e, t, t, e, e, e, e, e, e, t, t, e, e, e, t, t, t, T, T, t, t, t, T, T, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t]];
class Pt {
  constructor() {
    this.inputFormat = "ILYNN", this.outputFormat = "VLNNN", this.sourceToTarget = [], this.targetToSource = [], this.levels = [];
  }
  bidiTransform(o, s, a) {
    if (this.sourceToTarget = [], this.targetToSource = [], !o) return "";
    if (Ot(this.sourceToTarget, this.targetToSource, o.length), !this.checkParameters(s, a)) return o;
    s = this.inputFormat, a = this.outputFormat;
    let f = o;
    const c = It, L = H(s.charAt(1)), A = H(a.charAt(1)), g = (s.charAt(0) === "I" ? "L" : s.charAt(0)) + L, d = (a.charAt(0) === "I" ? "L" : a.charAt(0)) + A, U = s.charAt(2) + a.charAt(2);
    c.defInFormat = g, c.defOutFormat = d, c.defSwap = U;
    const w = E(o, g, d, U, c);
    let N = !1;
    return a.charAt(1) === "R" ? N = !0 : a.charAt(1) !== "C" && a.charAt(1) !== "D" || (N = this.checkContextual(w) === "rtl"), this.sourceToTarget = F, this.targetToSource = xt(this.sourceToTarget), P = this.targetToSource, f = s.charAt(3) === a.charAt(3) ? w : a.charAt(3) === "S" ? Bt(N, w) : Rt(w, N, !0), this.sourceToTarget = F, this.targetToSource = P, this.levels = y, f;
  }
  _inputFormatSetter(o) {
    if (!J.test(o)) throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");
    this.inputFormat = o;
  }
  _outputFormatSetter(o) {
    if (!J.test(o)) throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");
    this.outputFormat = o;
  }
  checkParameters(o, s) {
    return o ? this._inputFormatSetter(o) : o = this.inputFormat, s ? this._outputFormatSetter(s) : s = this.outputFormat, o !== s;
  }
  checkContextual(o) {
    let s = D(o);
    if (s !== "ltr" && s !== "rtl") {
      try {
        s = document.dir.toLowerCase();
      } catch {
      }
      s !== "ltr" && s !== "rtl" && (s = "ltr");
    }
    return s;
  }
  hasBidiChar(o) {
    return Dt.test(o);
  }
}
function E(i, o, s, a, f) {
  const c = dt(i, { inFormat: o, outFormat: s, swap: a }, f);
  if (c.inFormat === c.outFormat) return i;
  o = c.inFormat, s = c.outFormat, a = c.swap;
  const L = o.substring(0, 1), A = o.substring(1, 4), g = s.substring(0, 1), d = s.substring(1, 4);
  if (f.inFormat = o, f.outFormat = s, f.swap = a, L === "L" && s === "VLTR") {
    if (A === "LTR") return f.dir = v, S(i, f);
    if (A === "RTL") return f.dir = O, S(i, f);
  }
  if (L === "V" && g === "V") return f.dir = A === "RTL" ? O : v, Y(i, f);
  if (L === "L" && s === "VRTL") return A === "LTR" ? (f.dir = v, i = S(i, f)) : (f.dir = O, i = S(i, f)), Y(i);
  if (o === "VLTR" && s === "LLTR") return f.dir = v, S(i, f);
  if (L === "V" && g === "L" && A !== d) return i = Y(i), A === "RTL" ? E(i, "LLTR", "VLTR", a, f) : E(i, "LRTL", "VRTL", a, f);
  if (o === "VRTL" && s === "LRTL") return E(i, "LRTL", "VRTL", a, f);
  if (L === "L" && g === "L") {
    const U = f.swap;
    return f.swap = U.substr(0, 1) + "N", A === "RTL" ? (f.dir = O, i = S(i, f), f.swap = "N" + U.substr(1, 2), f.dir = v, i = S(i, f)) : (f.dir = v, i = S(i, f), f.swap = "N" + U.substr(1, 2), i = E(i, "VLTR", "LRTL", f.swap, f)), i;
  }
  return i;
}
function dt(i, o, s) {
  if (o.inFormat === void 0 && (o.inFormat = s.defInFormat), o.outFormat === void 0 && (o.outFormat = s.defOutFormat), o.swap === void 0 && (o.swap = s.defSwap), o.inFormat === o.outFormat) return o;
  const a = o.inFormat.substring(0, 1), f = o.outFormat.substring(0, 1);
  let c, L = o.inFormat.substring(1, 4), A = o.outFormat.substring(1, 4);
  return L.charAt(0) === "C" && (c = D(i), L = c === "ltr" || c === "rtl" ? c.toUpperCase() : o.inFormat.charAt(2) === "L" ? "LTR" : "RTL", o.inFormat = a + L), A.charAt(0) === "C" && (c = D(i), c === "rtl" ? A = "RTL" : c === "ltr" ? (c = mt(i), A = c.toUpperCase()) : A = o.outFormat.charAt(2) === "L" ? "LTR" : "RTL", o.outFormat = f + A), o;
}
function Bt(i, o, s) {
  if (o.length === 0) return "";
  i === void 0 && (i = !0);
  const a = (o = String(o)).split("");
  let f = 0, c = 1, L = a.length;
  i || (f = a.length - 1, c = -1, L = 1);
  const A = Ut(a, f, c, L);
  let g = "";
  for (let d = 0; d < a.length; d++) _t(A, A.length, d) > -1 ? (X(P, d, !i, -1), F.splice(d, 1)) : g += a[d];
  return g;
}
function Ut(i, o, s, a, f) {
  let c = 0;
  const L = [];
  let A = 0;
  for (let g = o; g * s < a; g += s) if (Q(i[g]) || x(i[g])) {
    if (i[g] === "ل" && St(i, g + s, s, a)) {
      i[g] = Et(i[g + s], c === 0 ? $ : tt), g += s, Vt(i, g, s, a), L[A] = g, A++, c = 0;
      continue;
    }
    const d = i[g];
    c === 1 ? i[g] = Z(i, g + s, s, a) ? vt(i[g]) : W(i[g], et) : Z(i, g + s, s, a) === !0 ? i[g] = W(i[g], ot) : i[g] = W(i[g], rt), x(d) || (c = 1), Ct(d) === !0 && (c = 0);
  } else c = 0;
  return L;
}
function D(i) {
  const o = /[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(i);
  return o ? o[0] <= "z" ? "ltr" : "rtl" : "";
}
function mt(i) {
  const o = i.split("");
  return o.reverse(), D(o.join(""));
}
function Rt(i, o, s) {
  if (i.length === 0) return "";
  o === void 0 && (o = !0);
  let a = "";
  const f = (i = String(i)).split("");
  for (let c = 0; c < i.length; c++) {
    let L = !1;
    if (f[c] >= "ﹰ" && f[c] < "\uFEFF") {
      const A = i.charCodeAt(c);
      f[c] >= "ﻵ" && f[c] <= "ﻼ" ? (o ? (c > 0 && s && f[c - 1] === " " ? a = a.substring(0, a.length - 1) + "ل" : (a += "ل", L = !0), a += V[(A - 65269) / 2]) : (a += V[(A - 65269) / 2], a += "ل", c + 1 < i.length && s && f[c + 1] === " " ? c++ : L = !0), L && (X(P, c, !0, 1), F.splice(c, 0, F[c]))) : a += it[A - 65136];
    } else a += f[c];
  }
  return a;
}
function S(i, o) {
  const s = i.split(""), a = [];
  return K(s, a, o), bt(s, a, o), G(2, s, a, o), G(1, s, a, o), y = a, s.join("");
}
function K(i, o, s) {
  const a = i.length, f = s.dir ? at : st;
  let c = 0, L = -1;
  const A = [], g = [];
  s.hiLevel = s.dir, s.lastArabic = !1, s.hasUbatAl = !1, s.hasUbatB = !1, s.hasUbatS = !1;
  for (let d = 0; d < a; d++) A[d] = pt(i[d]);
  for (let d = 0; d < a; d++) {
    const U = c, w = wt(i, A, g, d, s);
    g[d] = w, c = f[U][w];
    const N = 240 & c;
    c &= 15;
    const M = f[c][jt];
    if (o[d] = M, N > 0) if (N === 16) {
      for (let C = L; C < d; C++) o[C] = 1;
      L = -1;
    } else L = -1;
    if (f[c][kt]) L === -1 && (L = d);
    else if (L > -1) {
      for (let C = L; C < d; C++) o[C] = M;
      L = -1;
    }
    A[d] === _ && (o[d] = 0), s.hiLevel |= M;
  }
  s.hasUbatS && Ft(A, o, a, s);
}
function Ft(i, o, s, a) {
  for (let f = 0; f < s; f++) if (i[f] === j) {
    o[f] = a.dir;
    for (let c = f - 1; c >= 0 && i[c] === m; c--) o[c] = a.dir;
  }
}
function bt(i, o, s) {
  if (s.hiLevel !== 0 && s.swap.substr(0, 1) !== s.swap.substr(1, 2)) for (let a = 0; a < i.length; a++) o[a] === 1 && (i[a] = Nt(i[a]));
}
function pt(i) {
  const o = i.charCodeAt(0), s = Lt[o >> 8];
  return s < p ? s : gt[s - p][255 & o];
}
function Y(i, o) {
  const s = i.split("");
  if (o) {
    const a = [];
    K(s, a, o), y = a;
  }
  return s.reverse(), F.reverse(), s.join("");
}
function _t(i, o, s) {
  for (let a = 0; a < o; a++) if (i[a] === s) return a;
  return -1;
}
function Q(i) {
  for (let o = 0; o < q.length; o++) if (i >= q[o] && i <= ut[o]) return !0;
  return !1;
}
function Z(i, o, s, a) {
  for (; o * s < a && x(i[o]); ) o += s;
  return !!(o * s < a && Q(i[o]));
}
function St(i, o, s, a) {
  for (; o * s < a && x(i[o]); ) o += s;
  let f = " ";
  if (!(o * s < a)) return !1;
  f = i[o];
  for (let c = 0; c < V.length; c++) if (V[c] === f) return !0;
  return !1;
}
function G(i, o, s, a) {
  if (a.hiLevel < i) return;
  if (i === 1 && a.dir === O && !a.hasUbatB) return o.reverse(), void F.reverse();
  const f = o.length;
  let c, L, A, g, d, U = 0;
  for (; U < f; ) {
    if (s[U] >= i) {
      for (c = U + 1; c < f && s[c] >= i; ) c++;
      for (L = U, A = c - 1; L < A; L++, A--) g = o[L], o[L] = o[A], o[A] = g, d = F[L], F[L] = F[A], F[A] = d;
      U = c;
    }
    U++;
  }
}
function wt(i, o, s, a, f) {
  const c = o[a];
  return { UBAT_L: () => (f.lastArabic = !1, e), UBAT_R: () => (f.lastArabic = !1, u), UBAT_ON: () => t, UBAT_AN: () => B, UBAT_EN: () => f.lastArabic ? B : h, UBAT_AL: () => (f.lastArabic = !0, f.hasUbatAl = !0, u), UBAT_WS: () => t, UBAT_CS: () => {
    let L, A;
    return a < 1 || a + 1 >= o.length || (L = s[a - 1]) !== h && L !== B || (A = o[a + 1]) !== h && A !== B ? t : (f.lastArabic && (A = B), A === L ? A : t);
  }, UBAT_ES: () => (a > 0 ? s[a - 1] : _) === h && a + 1 < o.length && o[a + 1] === h ? h : t, UBAT_ET: () => {
    if (a > 0 && s[a - 1] === h) return h;
    if (f.lastArabic) return t;
    let L = a + 1;
    const A = o.length;
    for (; L < A && o[L] === T; ) L++;
    return L < A && o[L] === h ? h : t;
  }, UBAT_NSM: () => {
    if (f.inFormat === "VLTR") {
      const L = o.length;
      let A = a + 1;
      for (; A < L && o[A] === n; ) A++;
      if (A < L) {
        const g = i[a].charCodeAt(0), d = g >= 1425 && g <= 2303 || g === 64286, U = o[A];
        if (d && (U === u || U === r)) return u;
      }
    }
    return a < 1 || o[a - 1] === _ ? t : s[a - 1];
  }, UBAT_B: () => (f.lastArabic = !0, f.hasUbatB = !0, f.dir), UBAT_S: () => (f.hasUbatS = !0, t), UBAT_LRE: () => (f.lastArabic = !1, t), UBAT_RLE: () => (f.lastArabic = !1, t), UBAT_LRO: () => (f.lastArabic = !1, t), UBAT_RLO: () => (f.lastArabic = !1, t), UBAT_PDF: () => (f.lastArabic = !1, t), UBAT_BN: () => t }[At[c]]();
}
function Nt(i) {
  let o, s = 0, a = I.length - 1;
  for (; s <= a; ) if (o = Math.floor((s + a) / 2), i < I[o][0]) a = o - 1;
  else {
    if (!(i > I[o][0])) return I[o][1];
    s = o + 1;
  }
  return i;
}
function Ct(i) {
  for (let o = 0; o < z.length; o++) if (z[o] === i) return !0;
  return !1;
}
function vt(i) {
  for (let o = 0; o < k.length; o++) if (i === k[o]) return nt[o];
  return i;
}
function W(i, o) {
  for (let s = 0; s < k.length; s++) if (i === k[s]) return o[s];
  return i;
}
function x(i) {
  return i >= "ً" && i <= "ٕ";
}
function H(i) {
  return i === "L" ? "LTR" : i === "R" ? "RTL" : i === "C" ? "CLR" : i === "D" ? "CRL" : "";
}
function Vt(i, o, s, a) {
  for (; o * s < a && x(i[o]); ) o += s;
  return o * s < a && (i[o] = " ", !0);
}
function Et(i, o) {
  for (let s = 0; s < V.length; s++) if (i === V[s]) return o[s];
  return i;
}
function Ot(i, o, s) {
  F = [], y = [];
  for (let a = 0; a < s; a++) i[a] = a, o[a] = a, F[a] = a;
}
function xt(i) {
  const o = new Array(i.length);
  for (let s = 0; s < i.length; s++) o[i[s]] = s;
  return o;
}
function X(i, o, s, a) {
  for (let f = 0; f < i.length; f++) (i[f] > o || !s && i[f] === o) && (i[f] += a);
}
let F = [], P = [], y = [];
const It = { dir: 0, defInFormat: "LLTR", defoutFormat: "VLTR", defSwap: "YN", inFormat: "LLTR", outFormat: "VLTR", swap: "YN", hiLevel: 0, lastArabic: !1, hasUbatAl: !1, hasBlockSep: !1, hasSegSep: !1, defOutFormat: "" }, jt = 5, kt = 6, v = 0, O = 1, J = /^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/, Dt = /[\u0591-\u06ff\ufb1d-\ufefc]/;
export {
  Pt as C
};
//# sourceMappingURL=BidiEngine-rXjljmDh.js.map
