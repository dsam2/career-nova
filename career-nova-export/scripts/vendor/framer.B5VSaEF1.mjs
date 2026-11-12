import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  C as r,
  E as i,
  F as a,
  I as o,
  L as s,
  M as c,
  N as l,
  O as u,
  P as d,
  R as f,
  S as p,
  T as m,
  _ as h,
  a as g,
  c as _,
  d as v,
  f as y,
  g as b,
  h as x,
  i as S,
  j as C,
  k as w,
  l as T,
  m as E,
  o as D,
  s as O,
  u as k,
  v as A,
  w as j,
  x as M,
  y as N,
  z as P,
} from "./react.CWkcPvHD.mjs";
import {
  $ as F,
  A as I,
  B as ee,
  C as te,
  D as ne,
  E as re,
  F as L,
  G as R,
  H as ie,
  I as ae,
  J as oe,
  K as se,
  L as ce,
  M as le,
  N as ue,
  O as de,
  P as fe,
  Q as z,
  R as pe,
  S as me,
  T as he,
  U as ge,
  V as _e,
  W as ve,
  X as ye,
  Y as be,
  Z as xe,
  _ as Se,
  a as Ce,
  at as we,
  b as Te,
  c as Ee,
  ct as De,
  d as Oe,
  dt as ke,
  et as Ae,
  f as je,
  g as Me,
  h as Ne,
  i as Pe,
  it as Fe,
  j as Ie,
  k as Le,
  l as Re,
  lt as ze,
  m as Be,
  n as Ve,
  nt as He,
  o as Ue,
  ot as We,
  p as Ge,
  q as Ke,
  r as qe,
  rt as Je,
  s as Ye,
  st as Xe,
  tt as Ze,
  u as Qe,
  ut as $e,
  v as et,
  x as tt,
  y as nt,
  z as rt,
} from "./motion.UJ_SjFSS.mjs";
function it(e) {
  return typeof e == `function`;
}
function at(e) {
  return typeof e == `boolean`;
}
function B(e) {
  return typeof e == `string`;
}
function V(e) {
  return Number.isFinite(e);
}
function ot(e) {
  return Array.isArray(e);
}
function H(e) {
  return typeof e == `object` && !!e && !ot(e);
}
function st(e) {
  for (let t in e) return !1;
  return !0;
}
function ct(e) {
  return e === void 0;
}
function lt(e) {
  return e === null;
}
function ut(e) {
  return e == null;
}
function dt(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function ft(e) {
  return H(e) && it(e.return);
}
function pt(e) {
  return H(e) && it(e.then);
}
function mt(e) {
  return e instanceof Promise;
}
function ht(e) {
  return `url('${gt(e)}')`;
}
function gt(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function _t(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function vt(e, t, n) {
  if (Wv.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (Wv.set(e, t), t))
    .catch((t) => {
      throw (Wv.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(Iv), Wv.set(e, r));
}
function yt(e, t) {
  Lv && (Gv.set(e, t), Kv.has(e) && vt(e, t, `registered loader ${e}`));
}
function bt() {
  if (!Lv) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(qv),
      i = r ? e.slice(qv.length) : e;
    if (!i) continue;
    Kv.add(i);
    let a = Gv.get(i);
    a ? vt(i, a, `registered loader ${i}`) : r && vt(i, () => import(n), n);
  }
}
function xt(e) {
  return typeof e == `object` && !!e && !y(e) && Yv in e;
}
function St(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function Ct(e, t = `default`, n) {
  n && yt(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !Wv.has(n)) return;
      let e = Wv.get(n);
      mt(e) ? s(() => e) : (i = St(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = St(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    c = !1,
    l = h(function (t, r) {
      if (
        (d(() => {
          c = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && Jv !== void 0 && Jv.add(n), !i)) throw s(e);
      return _(i, { ref: r, ...t });
    });
  return (
    (l.preload = () => (o(), s(e))),
    (l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
    l
  );
}
function wt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Tt(e) {
  return e === null || !(Zv in e) ? !1 : typeof e.equals == `function`;
}
function Et(e, t) {
  return e === t || (e !== e && t !== t);
}
function Dt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Et(e[r], t[r])) return !1;
  return !0;
}
function Ot(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Pt(e[r], t[r], !0)) return !1;
  return !0;
}
function kt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Et(r, t.get(n))) return !1;
  return !0;
}
function At(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Pt(r, t.get(n), !0)) return !1;
  return !0;
}
function jt(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function Mt(e, t) {
  let n = Xv(e);
  if (n.length !== Xv(t).length) return !1;
  for (let r of n)
    if (!wt(t, r) || (!(r === `_owner` && wt(e, `$$typeof`) && e.$$typeof) && !Et(e[r], t[r])))
      return !1;
  return !0;
}
function Nt(e, t) {
  let n = Xv(e);
  if (n.length !== Xv(t).length) return !1;
  for (let r of n)
    if (!wt(t, r) || (!(r === `_owner` && wt(e, `$$typeof`) && e.$$typeof) && !Pt(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Pt(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? Ot(e, t) : Dt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? At(e, t) : kt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return jt(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? Tt(e) && Tt(t)
        ? e.equals(t)
        : n
          ? Nt(e, t)
          : Mt(e, t)
      : !1;
}
function Ft(e, t, n = !0) {
  try {
    return Pt(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function It(e) {
  return p.useCallback((t) => e[t], [e]);
}
function Lt({ api: e, children: t }) {
  return _(Qv.Provider, { value: e, children: t });
}
function Rt() {
  return p.useContext(Qv);
}
function zt({ routes: e, children: t }) {
  let n = It(e),
    r = c(() => ({ getRoute: n }), [n]);
  return _(Qv.Provider, { value: r, children: t });
}
function Bt() {
  let e = Rt(),
    t = C($v),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = n ? e.getRoute?.(n) : void 0;
  return c(() => {
    if (!(!n || !i)) return { ...i, id: n, pathVariables: r };
  }, [n, r, i]);
}
function Vt() {
  let e = Bt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Ht(e) {
  let t = Bt(),
    n = p.useRef(t);
  Ft(n.current, t) || !t || ((n.current = t), e(t));
}
function Ut(e) {
  let t = Rt();
  if (e) return t.getRoute?.(e);
}
function Wt(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Gt(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Kt(e, t) {
  let n = Bt(),
    r = Ut(t) ?? n;
  return p.useMemo(() => (r ? Wt(r, e) : e), [e, r]);
}
function qt() {
  return Bt()?.pathVariables;
}
function U(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function W(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function Jt(e) {
  return e === null || (typeof e != `object` && typeof e != `function`);
}
function Yt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === my
  );
}
function Xt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Zt(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function Qt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Zt(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function $t(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function en(e) {
  return hy.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function tn(e) {
  return !(!Number.isInteger(e) || e < 0 || e > fy);
}
function nn(e) {
  return !(!Number.isInteger(e) || e < 0 || e > dy);
}
function rn(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return tn(+e);
}
function an(e) {
  let t = Object.keys(e);
  for (var n = t.length - 1; n >= 0 && !rn(t[n]); n--);
  return ((t.length = n + 1), t);
}
function on(e) {
  return new Uint8Array(e).toBase64();
}
function sn(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function cn(e) {
  return Buffer.from(e).toString(`base64`);
}
function ln(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function un(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function dn(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function fn(e, t) {
  return pn(JSON.parse(e), t);
}
function pn(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === iy) return;
    if (e === oy) return NaN;
    if (e === sy) return 1 / 0;
    if (e === cy) return -1 / 0;
    if (e === ly) return -0;
    if (o || typeof e != `number`) throw Error(`Invalid input`);
    if (e in r) return r[e];
    let s = n[e];
    if (!s || typeof s != `object`) r[e] = s;
    else if (Array.isArray(s))
      if (typeof s[0] == `string`) {
        let o = s[0],
          c = t && Object.hasOwn(t, o) ? t[o] : void 0;
        if (c) {
          let t = s[1];
          if ((typeof t != `number` && (t = n.push(s[1]) - 1), (i ??= new Set()), i.has(t)))
            throw Error(`Invalid circular reference`);
          return (i.add(t), (r[e] = c(a(t))), i.delete(t), r[e]);
        }
        switch (o) {
          case `Date`:
            r[e] = new Date(s[1]);
            break;
          case `Set`:
            let t = new Set();
            r[e] = t;
            for (let e = 1; e < s.length; e += 1) t.add(a(s[e]));
            break;
          case `Map`:
            let i = new Map();
            r[e] = i;
            for (let e = 1; e < s.length; e += 2) i.set(a(s[e]), a(s[e + 1]));
            break;
          case `RegExp`:
            r[e] = new RegExp(s[1], s[2]);
            break;
          case `Object`: {
            let t = s[1];
            if (typeof n[t] == `object` && n[t][0] !== `BigInt`) throw Error(`Invalid input`);
            r[e] = Object(a(t));
            break;
          }
          case `BigInt`:
            r[e] = BigInt(s[1]);
            break;
          case `null`:
            let c = Object.create(null);
            r[e] = c;
            for (let e = 1; e < s.length; e += 2) {
              if (s[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              c[s[e]] = a(s[e + 1]);
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (n[s[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = globalThis[o],
              i = a(s[1]);
            r[e] = s[2] === void 0 ? new t(i) : new t(i, s[2], s[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = s[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            let n = yy(t);
            r[e] = n;
            break;
          }
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`: {
            let t = o.slice(9);
            r[e] = Temporal[t].from(s[1]);
            break;
          }
          case `URL`: {
            let t = new URL(s[1]);
            r[e] = t;
            break;
          }
          case `URLSearchParams`: {
            let t = new URLSearchParams(s[1]);
            r[e] = t;
            break;
          }
          default:
            throw Error(`Unknown type ${o}`);
        }
      } else if (s[0] === uy) {
        let t = s[1];
        if (!nn(t)) throw Error(`Invalid input`);
        let n = [];
        ((r[e] = n), (n[fy] = void 0), delete n[fy]);
        for (let e = 2; e < s.length; e += 2) {
          let r = s[e];
          if (!tn(r) || r >= t) throw Error(`Invalid input`);
          n[r] = a(s[e + 1]);
        }
        n.length = t;
      } else {
        let t = Array(s.length);
        r[e] = t;
        for (let e = 0; e < s.length; e += 1) {
          let n = s[e];
          n !== ay && (t[e] = a(n));
        }
      }
    else {
      let t = {};
      r[e] = t;
      for (let e of Object.keys(s)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        let n = s[e];
        t[e] = a(n);
      }
    }
    return r[e];
  }
  return a(0);
}
function mn(e, t) {
  let n = hn(!1, e, t);
  return typeof n == `string` ? n : `[${n.join(`,`)}]`;
}
function hn(e, t, n) {
  let r = [],
    i = new Map(),
    a = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) a.push({ key: e, fn: n[e] });
  let o = [],
    s = 0;
  function c(n, l) {
    if (n === void 0) return iy;
    if (Number.isNaN(n)) return oy;
    if (n === 1 / 0) return sy;
    if (n === -1 / 0) return cy;
    if (n === 0 && 1 / n < 0) return ly;
    if (i.has(n)) return i.get(n);
    ((l ??= s++), i.set(n, l));
    for (let { key: e, fn: t } of a) {
      let i = t(n);
      if (i) return ((r[l] = `["${e}",${c(i)}]`), l);
    }
    if (typeof n == `function`) throw new py(`Cannot stringify a function`, o, n, t);
    if (typeof n == `symbol`) throw new py(`Cannot stringify a Symbol primitive`, o, n, t);
    let u = ``;
    if (Jt(n)) u = gn(n);
    else if (typeof n.then == `function`) {
      if (!e)
        throw new py(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          o,
          n,
          t
        );
      u = Promise.resolve(n).then((e) => {
        let t = c(e, l);
        t < 0 && (r[l] = t);
      });
    } else {
      let e = Xt(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          u = `["Object",${c(n.valueOf())}]`;
          break;
        case `Date`:
          u = `["Date","${isNaN(n.getDate()) ? `` : n.toISOString()}"]`;
          break;
        case `URL`:
          u = `["URL",${Qt(n.toString())}]`;
          break;
        case `URLSearchParams`:
          u = `["URLSearchParams",${Qt(n.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = n;
          u = i ? `["RegExp",${Qt(r)},"${i}"]` : `["RegExp",${Qt(r)}]`;
          break;
        case `Array`: {
          let e = !1;
          u = `[`;
          for (let t = 0; t < n.length; t += 1)
            if ((t > 0 && (u += `,`), Object.hasOwn(n, t)))
              (o.push(`[${t}]`), (u += c(n[t])), o.pop());
            else if (e) u += ay;
            else {
              let t = an(n),
                r = t.length,
                i = String(n.length).length;
              if ((n.length - r) * 3 > 4 + i + r * (i + 1)) {
                u = `[` + uy + `,` + n.length;
                for (let e = 0; e < t.length; e++) {
                  let r = t[e];
                  (o.push(`[${r}]`), (u += `,` + r + `,` + c(n[r])), o.pop());
                }
                break;
              } else ((e = !0), (u += ay));
            }
          u += `]`;
          break;
        }
        case `Set`:
          u = `["Set"`;
          for (let e of n) u += `,${c(e)}`;
          u += `]`;
          break;
        case `Map`:
          u = `["Map"`;
          for (let [e, t] of n)
            (o.push(`.get(${Jt(e) ? gn(e) : `...`})`), (u += `,${c(e)},${c(t)}`), o.pop());
          u += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`:
        case `DataView`: {
          let t = n;
          ((u = `["` + e + `",` + c(t.buffer)),
            t.byteLength !== t.buffer.byteLength && (u += `,${t.byteOffset},${t.length}`),
            (u += `]`));
          break;
        }
        case `ArrayBuffer`:
          u = `["ArrayBuffer","${vy(n)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          u = `["${e}",${Qt(n.toString())}]`;
          break;
        default:
          if (!Yt(n)) throw new py(`Cannot stringify arbitrary non-POJOs`, o, n, t);
          if ($t(n).length > 0) throw new py(`Cannot stringify POJOs with symbolic keys`, o, n, t);
          if (Object.getPrototypeOf(n) === null) {
            u = `["null"`;
            for (let e of Object.keys(n)) {
              if (e === `__proto__`)
                throw new py(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (o.push(en(e)), (u += `,${Qt(e)},${c(n[e])}`), o.pop());
            }
            u += `]`;
          } else {
            u = `{`;
            let e = !1;
            for (let r of Object.keys(n)) {
              if (r === `__proto__`)
                throw new py(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (e && (u += `,`), (e = !0), o.push(en(r)), (u += `${Qt(r)}:${c(n[r])}`), o.pop());
            }
            u += `}`;
          }
      }
    }
    return ((r[l] = u), l);
  }
  let l = c(t);
  return l < 0 ? `${l}` : r;
}
function gn(e) {
  let t = typeof e;
  return t === `string`
    ? Qt(e)
    : e === void 0
      ? iy.toString()
      : e === 0 && 1 / e < 0
        ? ly.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function _n(e, t, n = `lazy`) {
  switch ((by.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function vn(e) {
  return B(e) && (e === `` || Sy.test(e));
}
function yn() {
  return { [Cy.QueryCache]: new Map(), [Cy.CollectionUtilsCache]: new Map() };
}
function bn() {
  if (!Lv) return;
  if (wy !== void 0) return wy;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      wy = fn(e.text) ?? yn();
    } catch (e) {
      ((wy = yn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      Bv(() => {
        (e?.remove(), (e = null));
      }),
      wy
    );
  }
}
function xn(e, t) {
  if (
    (console.warn(
      _t(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    _n(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function Sn(e, t) {
  let n = bn();
  return n ? n[e].has(t) : !1;
}
function Cn(e, t) {
  let n = bn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function wn(e) {
  return e?.id ?? ty;
}
function Tn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function En(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (Oy.has(n)) return Oy.get(n);
    let r = new Ay(n, t);
    return (Oy.set(n, r), r);
  };
}
function Dn({ children: e, collectionUtils: t }) {
  let n = c(() => ({ get: En(t) }), [t]);
  return _(ky.Provider, { value: n, children: e });
}
function On() {
  return C(ky);
}
function kn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function An() {
  return P === void 0 ? void 0 : P;
}
function jn() {
  let e = An();
  return e ? jy.test(e.platform) : !1;
}
function Mn() {
  let e = An();
  return e
    ? My.test(e.platform)
      ? !0
      : Ny.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function Nn() {
  return jn() || Mn();
}
function Pn() {
  let e = An();
  return e ? Py.test(e.userAgent) : !1;
}
function Fn() {
  let e = An();
  return e ? Fy.test(e.userAgent) && Iy.test(e.vendor) && !Pn() : !1;
}
function In() {
  let e = An();
  return e ? Ly.test(e.userAgent) && Ry.test(e.vendor) : !1;
}
function Ln() {
  let e = An();
  return e ? zy.test(e.userAgent) : !1;
}
function Rn() {
  return typeof document == `object`;
}
function zn() {
  let e = An();
  if (!e) return -1;
  let t = By.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function Bn() {
  let e = An();
  return e ? Vy.test(e.userAgent) : !1;
}
function Vn() {
  return !1;
}
function Hn() {
  let e = An();
  return e && Hy.test(e.userAgent) ? `tablet` : e && Uy.test(e.userAgent) ? `phone` : `desktop`;
}
function Un() {
  return Hn() === `desktop`;
}
function Wn(e) {
  return Nn() ? e.metaKey : e.ctrlKey;
}
function Gn() {}
function Kn() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function qn(e, t) {
  let n = e?.priority,
    r = Kn();
  return n === `background`
    ? (t?.() ?? kn(1))
    : r?.yield
      ? r.yield(e).catch(Gn)
      : r?.postTask
        ? r.postTask(Gn, e).catch(Gn)
        : t
          ? t()
          : n === `user-blocking`
            ? qy
            : kn(0);
}
function Jn(e, t, r) {
  let i = -1 / 0,
    a,
    o = new Set();
  function s() {
    for (let e of o) e();
    o.clear();
  }
  function c() {
    return document.hidden ? (s(), !0) : !1;
  }
  function l() {
    Rn() && (document.addEventListener(`visibilitychange`, c), n.addEventListener(`pagehide`, s));
  }
  function u(n) {
    return new Promise((r) => {
      (setTimeout(r, Jy),
        e(() => {
          qn(n, t).then(r);
        }));
    });
  }
  function d(e) {
    return Rn()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), o.delete(r), t());
            };
          (o.add(r), c() || l(), e.then(r, r));
        })
      : e;
  }
  function f(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? u(a) : qn(a, t);
    return i ? d(o) : o;
  }
  function p(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let r = f(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (i = performance.now()),
          n && e.pendingPaintYieldCount--,
          a === e && e.pendingPaintYieldCount === 0 && (a = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      r.then(
        () => c(!0),
        () => c(!0)
      ),
      r
    );
  }
  function m(e, t) {
    let n = a;
    if (!n) {
      let r = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? Wy : Gy),
        s = Rn() && document.hidden ? Ky : o;
      if (r - i < s) return;
      ((n = { pendingPaintYieldCount: 0 }), (a = n));
    }
    let o = e.continueAfter === `paint` && (n.pendingPaintYieldCount > 0 || r?.() !== !1);
    return p(n, e, o);
  }
  function h(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !Rn() && !t ? (n ? void 0 : qy) : n ? m(i, r) : f(i);
  }
  return h;
}
function Yn() {
  let e = On(),
    { getRoute: t } = Rt();
  return l(
    (n, r, i = !0, a = !0) => {
      if (!n || !t) return;
      let o = t(n),
        { pathVariables: s, locale: c } = r;
      return Zn(o, { routeId: n, pathVariables: s, locale: c, collectionUtils: e }, i, a);
    },
    [t, e]
  );
}
function Xn(e, t = !0) {
  let n = Yn();
  d(() => {
    if (!(!t || !Zy)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function Zn(e, t, n = !0, r = !0) {
  if (!Zy || !e) return;
  let i = e.page;
  if (!(!i || !xt(i))) {
    n && (await Xy());
    try {
      let e = await i.preload();
      r && t && e && (await Qn(e, t));
    } catch {}
  }
}
async function Qn(e, t) {
  let n = e.loader;
  if (!n?.load) return;
  let r = {
    signal: t.signal ?? new AbortController().signal,
    pathVariables: t.pathVariables ?? {},
    routeId: t.routeId,
    locale: t.locale,
    collectionUtils: t.collectionUtils,
  };
  try {
    await n.load({}, r);
  } catch {}
}
function $n(e, t) {
  return e.replace(tb, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function er(e, t = !1) {
  let r = ``;
  if (n !== void 0)
    if (t) r = n.location.search;
    else {
      let e = n.history?.state?.queryParamBackAnchorSearch;
      r = e === void 0 ? n.location.search : e === `` ? `` : `?${e}`;
    }
  return r ? tr(r, e) : e;
}
function tr(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== nb && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function nr(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(tb)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !B(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = mt(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = mt(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = mt(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function rr(e, t) {
  return t ? `/${t}${e}` : e;
}
async function ir({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await nr(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = rr(u.path, t.slug)),
    o && u.path && (u.path = er(u.path, !0)),
    u
  );
}
function ar() {
  if (rb) return;
  rb = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (n.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((n.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), _n(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function or({ children: e, value: t }) {
  return _(ib.Provider, { value: t, children: e });
}
function sr() {
  return p.useContext(ib);
}
function cr(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function lr(e) {
  let t = ab,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < ob;) ((n = e.next(t)), r.push(n.value), (t += ab));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - ab }
  );
}
function ur(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function dr(e) {
  let { innerWidth: t, innerHeight: r } = n,
    [i, a] = ur(e.x),
    [o, s] = ur(e.y);
  return { x: a === `px` ? i : (i / 100) * t, y: s === `px` ? o : (o / 100) * r };
}
function fr(e) {
  let [t, n] = ur(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function pr(e) {
  let { x: t, y: r } = dr(e);
  return Math.hypot(Math.max(t, n.innerWidth - t), Math.max(r, n.innerHeight - r));
}
function mr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function hr(e) {
  return e ? lb[e] : void 0;
}
function gr(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (_r(t)) {
    let { easing: e, duration: n } = lr(
      ue({ keyframes: [0, 1], ...vr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = hr(n?.mask?.type),
    o = mr(n, `start`, e, a),
    s = mr({ ...ub, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function _r(e) {
  return e.type === `spring`;
}
function vr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function yr({ exit: e = fb, enter: t }) {
  let n = document.createElement(`style`);
  n.id = db;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += gr(`exit`, e)),
    (r += gr(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function br() {
  Bv(() => {
    Me.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(db);
      e && document.head.removeChild(e);
    });
  });
}
function xr() {
  return !!document.startViewTransition;
}
function Sr(e) {
  return new Promise((t) => {
    Me.render(() => {
      (performance.mark(`framer-vt-style`), yr(e), t());
    });
  });
}
async function Cr(e, t, n) {
  if (!xr()) {
    e();
    return;
  }
  if ((await Sr(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(pb),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), br());
      })
      .catch(pb),
    r
  );
}
function wr() {
  let e = sr(),
    t = w(void 0);
  return (
    d(() => {
      t.current &&= (t.current(), void 0);
    }),
    l(
      (n, r, i, a) => {
        let o = cr(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return Cr(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function Tr(e, t) {
  Bv(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function Er(e, t, n, i = r) {
  i(() => {
    let t = async (e) => (await Xy({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function Dr(e) {
  let t = w(new Set());
  return (
    Er(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    l(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function Or(e) {
  return H(e) && `routeId` in e;
}
function kr(e = n.history.state) {
  return Or(e) ? e : void 0;
}
function Ar(e) {
  return e?.entryId;
}
function jr(e) {
  gb = e;
}
function Mr() {
  return gb;
}
function Nr() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function Pr(e, t) {
  return Fr(e, Ar(e) ?? Ar(t));
}
function Fr(e, t = Nr()) {
  return { ...e, entryId: t };
}
function Ir(e, t, r = !1) {
  (performance.mark(`framer-history-replace`), jr(Pr(e, kr())), t && Tr(t, n.location.href));
  let i;
  i = $y().privateRouterReplaceState
    ? !t || t === n.location.href
      ? n.History.prototype.replaceState
      : n.history.replaceState
    : r
      ? n.History.prototype.replaceState
      : n.history.replaceState;
  try {
    i.call(n.history, gb, ``, t);
  } catch {}
}
function Lr(e) {
  (performance.mark(`framer-history-replace`),
    jr(Fr(e)),
    History.prototype.replaceState.call(n.history, gb, ``, void 0));
}
function Rr(e, t) {
  (performance.mark(`framer-history-push`), jr(Fr(e)), Tr(t, n.location.href), ar());
  try {
    n.history.pushState(gb, ``, t);
  } catch {}
}
function zr({ disabled: e, routeId: t, initialPathVariables: i, initialLocaleId: a }) {
  r(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let r = n.location.hash ? n.location.hash.slice(1) : void 0;
    Ir({ ...kr(), routeId: t, hash: r, pathVariables: i, localeId: a }, void 0, !0);
  }, []);
}
function Br(e, t, r) {
  let i = wr(),
    a = Dr(`framer-route-change`),
    { onHistoryTraversal: o, usesCustomScrollRestoration: s } = e,
    c = s ? `manual` : `after-transition`,
    u = w(void 0),
    f = l(() => {
      (u.current?.resolve(), (u.current = void 0));
    }, []),
    p = l(
      async ({ state: e }) => {
        if (!Or(e)) return;
        let s = a({ popstate: !0 }),
          l = Gt();
        (s.promise.finally(l), Ar(Mr()) !== (Ar(e) ?? Ar(kr())) && o(), jr(e));
        let { routeId: u, hash: d, pathVariables: p, localeId: m } = e,
          h = B(d) ? d : n.location.hash ? n.location.hash.slice(1) : void 0,
          g = !1,
          _ = () => {
            g ||=
              (r(
                u,
                B(m) ? m : void 0,
                h,
                n.location.pathname + n.location.search + n.location.hash,
                H(p) ? p : void 0,
                !0,
                s,
                !1
              ),
              !0);
          },
          v = c === `after-transition`;
        (await Promise.resolve(i(t.current, u, _))
          .then((e) => e?.updateCallbackDone)
          .catch(_)
          .finally(() => {
            v || f();
          }),
          await s.promise,
          v && f(),
          await n.navigation?.transition?.finished.catch(Iv),
          hb(),
          Tr(n.location.href));
      },
      [t, a, o, f, r, i, c]
    ),
    m = l(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        Or(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                u.current = { resolve: e, reject: t };
              }),
                (u.current = void 0));
            },
            scroll: c,
          });
      },
      [c]
    );
  d(
    () => (
      n.addEventListener(`popstate`, p),
      _b && n.navigation.addEventListener(`navigate`, m),
      () => {
        (n.removeEventListener(`popstate`, p),
          _b && n.navigation.removeEventListener(`navigate`, m));
      }
    ),
    [p, m]
  );
}
async function Vr(e, t, r) {
  if (!e.path || !t) return !1;
  let i = rr($n(e.path, t), r.slug);
  return (await fetch(i, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((n.location.href = n.location.origin + i), !0)
    : !1;
}
function Hr() {
  let e = On();
  return l((t) => Ur({ ...t, collectionUtils: e }), [e]);
}
async function Ur(e) {
  let t = await ir(e);
  if (t) {
    try {
      localStorage.preferredLocale = e.nextLocale.code;
    } catch {}
    try {
      if (!B(t.path)) throw Error(`Expected result.path to be a string`);
      if (t.isMissingInLocale && (await Vr(e.route, t.pathVariables, e.nextLocale))) return;
    } catch {}
    return t;
  }
}
function Wr(e) {
  let t = w(Promise.resolve()),
    r = w(),
    i = l(
      (n) => {
        if (n.navigationType === `traverse` || !n.canIntercept) return;
        let i = r.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          n.intercept({ handler: () => t.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return l(
    (e, a, o) => {
      if (!_b) {
        o?.();
        return;
      }
      ((t.current = e),
        (r.current = a),
        n.navigation.addEventListener(`navigate`, i),
        o?.(),
        e.finally(() => {
          t.current === e &&
            ((r.current = void 0), n.navigation.removeEventListener(`navigate`, i));
        }));
    },
    [i]
  );
}
function Gr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function Kr(e) {
  return Gr(e.trim().toLowerCase().replace(vb, `-`));
}
function qr({ children: e, value: t }) {
  return _(bb.Provider, { value: t, children: e });
}
function Jr() {
  return C(bb);
}
function Yr(e, t) {
  let n = o(() => ({ inputs: t, result: e() }))[0],
    r = w(!0),
    i = w(n),
    a =
      r.current || (t && i.current.inputs && Ft(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    d(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function Xr(e, t) {
  return Yr(() => e, t);
}
function Zr() {
  return p.useContext(wb);
}
function Qr() {
  return Zr().activeLocale?.code ?? `en-US`;
}
function $r() {
  return p.useContext(Tb);
}
function ei() {
  return n.location.search;
}
function ti() {
  return ``;
}
function ni(e) {
  return (
    Eb.add(e),
    n.addEventListener(`popstate`, e),
    () => {
      (Eb.delete(e), n.removeEventListener(`popstate`, e));
    }
  );
}
function ri() {
  for (let e of Eb) e();
}
function ii({ children: e, routerRenderKey: t, isNavigationCommitPending: r }) {
  let i = Jr() === `preview`,
    [a, s] = o(``),
    c = w(t);
  xb(() => {
    c.current = t;
  }, [t]);
  let d = M(ni, ei, ti),
    f = u(d),
    p = t !== u(t),
    m = i ? a : p ? d : f,
    h = l(
      async (e) => {
        if (i) {
          A(() => {
            s((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let a = r(),
          o = t;
        if ((await Xy({ continueAfter: `paint` }), a || r() || c.current !== o)) return;
        let l = kr();
        if (!l) return;
        let u = new URL(n.location.href),
          d = e(u.searchParams).toString();
        u.search = d;
        let f = l.queryParamBackAnchorSearch,
          p = n.location.search.slice(1),
          m = f === void 0 && d !== p,
          h = f !== void 0 && d === f,
          g = { ...l, queryParamBackAnchorSearch: h ? void 0 : (f ?? (m ? p : void 0)) },
          _ = u.toString();
        (m || h ? Rr(g, _) : Ir(g, _), ri());
      },
      [r, i, t]
    ),
    g = Yr(() => ({ urlSearchParams: new URLSearchParams(m), replaceSearchParams: h }), [m, h]);
  return _(Db.Provider, { value: g, children: e });
}
function ai(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = oi(e),
    [r, i] = oi(t),
    a = si(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function oi(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function si(e, t) {
  if (e === t || ((e = `/` + ci(e)), (t = `/` + ci(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Ab(e, 1 + s);
    if (n !== Ab(t, 1 + s)) break;
    n === kb && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Ab(t, 1 + s) === kb) return Mb(t, 1 + s + 1);
      if (s === 0) return Mb(t, 1 + s);
    } else r > a && (Ab(e, 1 + s) === kb ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Ab(e, s) === kb) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${Mb(t, 1 + o)}`;
}
function ci(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Ab(e, o);
    else if (Fb(a)) break;
    else a = kb;
    if (Fb(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Ab(t, t.length - 1) !== Ob || Ab(t, t.length - 2) !== Ob) {
            if (t.length > 2) {
              let e = jb(t, Pb);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = Mb(t, 0, e)), (n = t.length - 1 - jb(t, Pb))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          Nb && ((t += t.length > 0 ? `${Pb}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${Pb}${Mb(e, r + 1, o)}`) : (t = Mb(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === Ob && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function li(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || n.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function ui(e, t, n) {
  let r = Wt(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(tb, (e, t) => i[t] ?? e);
}
function di(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: r,
    currentPathVariables: i,
    hash: a,
    pathVariables: o,
    hashVariables: s,
    relative: c = !0,
    preserveQueryParams: l,
    onlyHash: u = !1,
    siteCanonicalURL: d,
    localeId: f,
    localeSlug: p,
  }
) {
  let m = ui(a, e, s);
  if (u) return m ?? ``;
  let h = t ?? `/`;
  (r && f && (h = r[f] ?? h), i && (h = h.replace(tb, (e, t) => String(i[t] || e))));
  let g = (f ? e?.pathLocalized?.[f] : void 0) ?? e?.path ?? `/`;
  o && (g = g.replace(tb, (e, t) => String(o[t] || e)));
  let _ = !!(h === g && m),
    v = !_ && o !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && h !== g;
  if (c)
    if (Ib.has(h) && n !== void 0) {
      let e = li(d);
      g = ai(n.location.pathname, e + g);
    } else g = ai(h, g);
  else g = rr(g, p);
  let y = _ || v;
  return ((l || y) && (g = er(g, y)), m && (g = `${g}#${m}`), g);
}
function fi() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[Lb] = 1), e);
}
function pi() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[Lb] = 1), e);
}
function mi(e) {
  return e instanceof HTMLInputElement && (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function hi(e) {
  return Lb in e && e[Lb] === 1;
}
function gi(e) {
  return Rb in e.nativeEvent && e.nativeEvent[Rb] === 1;
}
function _i(e) {
  let t = w(!1),
    n = w(null),
    r = M(Vv, Uv, zb);
  return (
    d(() => {
      if (!r) return;
      let i = n.current;
      if (t.current || !i) return;
      t.current = !0;
      let a = mi(i),
        o = i[a];
      if (o === e) return;
      if (i.type === `radio` && o === !0) {
        ((i.checked = !1), i.dispatchEvent(pi()));
        return;
      }
      if (a === `checked`) {
        let e = pi();
        ((e[Rb] = 1), i.dispatchEvent(e), i.dispatchEvent(pi()));
        return;
      }
      if (i.nodeName === `SELECT`) {
        i.dispatchEvent(fi());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(i), a)?.set;
      if (!s) return;
      s.call(i, ``);
      let c = fi();
      ((c[Rb] = 1),
        i.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(i, o), i.dispatchEvent(fi()));
        }));
    }, [r]),
    n
  );
}
function vi() {
  if (!Bb) return;
  ((Hb = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  Bb.forEach((n) => t.addEventListener(n, Vb, e));
}
function yi() {
  return (
    d(() => {
      if (!Hb || !Bb) return;
      let e = { capture: !0 },
        t = document.body;
      (Bb.forEach((n) => t.removeEventListener(n, Vb, e)),
        (Bb = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function bi(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function xi(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function Si() {
  ((cx = new sx()), cx.render.markStart());
}
function Ci() {
  (j(() => {
    cx?.useInsertionEffects.markRouterStart();
  }, []),
    r(() => {
      cx?.useLayoutEffects.markRouterStart();
    }, []),
    d(() => {
      cx?.useEffects.markRouterStart();
    }, []));
}
function wi() {
  (j(() => {
    (cx?.render.markEnd(), cx?.useInsertionEffects.markStart());
  }, []),
    r(() => {
      if ((cx?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        lx = !0;
        return;
      }
      Me.read(() => {
        (cx?.browserRendering.requestAnimationFrame.markStart(),
          cx?.unattributedHydrationOverhead.measure());
      });
    }, []),
    d(() => {
      (cx?.useEffects.markStart(),
        cx?.browserRendering.hasStarted ||
          (cx?.mutationEffects.measure(), cx?.useEffects.markAreSynchronous()));
    }, []));
}
function Ti() {
  (j(() => {
    cx?.useInsertionEffects.markEnd();
  }, []),
    r(() => {
      (cx?.useLayoutEffects.markEnd(),
        !(lx || document.visibilityState !== `visible`) &&
          Me.read(() => {
            (cx?.browserRendering.requestAnimationFrame.markEnd(),
              Xy().then(() => {
                cx?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    d(() => {
      cx?.useEffects.markEnd();
    }, []));
}
function Ei() {
  return (wi(), null);
}
function Di() {
  return (Ti(), null);
}
function Oi(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return p.isValidElement(e) ? p.cloneElement(e, n) : _(e, { ...n });
}
function ki() {
  return px;
}
function Ai(e) {
  if (mx?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      U(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: Ni(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          U(t, `localizedPath must be defined`);
          let i = Ni(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    mx = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: mx.pathRoutes,
    paths: mx.paths,
    pathRoutesLocalized: mx.pathRoutesLocalized,
    pathsLocalized: mx.pathsLocalized,
  };
}
function ji(e, t, n = !0, r = ki()) {
  return Mi(e, t, r, n);
}
function Mi(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Ai(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = Pi(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = Pi(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Pi(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Pi(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function Ni(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Pi(e, t) {
  let n = [],
    r = Fi(t).replace(tb, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function Fi(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Ii() {
  if (`PerformanceServerTiming` in n) {
    let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e || e.length === 0) return new URLSearchParams();
    let t = e.find((e) => e.name === `abtests`);
    return t ? new URLSearchParams(t.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function Li(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function Ri(e, t) {
  for (let [n, r] of t) Li(e, n, r);
}
function zi(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Bi(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function Vi(e, t) {
  if (n === void 0) return t;
  let r = t;
  if (t) {
    Bi(e, t);
    let n = e[t]?.abTestingParentId;
    n && (r = n);
  }
  return (Ri(e, Ii()), zi(e), r);
}
function Hi(e) {
  (d(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    j(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Ui(e, ...t) {
  hx.has(e) || (hx.add(e), console.warn(e, ...t));
}
function Wi(e, t, n) {
  Ui(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Gi(e) {
  return (
    typeof e == `object` &&
    !!e &&
    vx in e &&
    e[vx] instanceof Function &&
    yx in e &&
    e[yx] instanceof Function
  );
}
function Ki(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = _x(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function qi(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Ji(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Yi(e) {
  return Math.round(e * 2) / 2;
}
function Xi(e, t) {
  return { x: e, y: t };
}
function Zi(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function Qi(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function $i(e) {
  let t = ea(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function ea(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function ta(e, t, n) {
  return (
    (Sx.rgb_r = e / 255),
    (Sx.rgb_g = t / 255),
    (Sx.rgb_b = n / 255),
    Sx.rgbToHsluv(),
    { h: Sx.hsluv_h, s: Sx.hsluv_s, l: Sx.hsluv_l }
  );
}
function na(e, t, n, r = 1) {
  return (
    (Sx.hsluv_h = e),
    (Sx.hsluv_s = t),
    (Sx.hsluv_l = n),
    Sx.hsluvToRgb(),
    { r: Sx.rgb_r * 255, g: Sx.rgb_g * 255, b: Sx.rgb_b * 255, a: r }
  );
}
function ra(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function ia(e, t, n) {
  return {
    r: Qi(e) ? da(e, 255) * 255 : 0,
    g: Qi(t) ? da(t, 255) * 255 : 0,
    b: Qi(n) ? da(n, 255) * 255 : 0,
  };
}
function aa(e, t, n, r) {
  let i = [
    ma(Math.round(e).toString(16)),
    ma(Math.round(t).toString(16)),
    ma(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function oa(e, t, n) {
  let r,
    i,
    a = da(e, 255),
    o = da(t, 255),
    s = da(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function sa(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function ca(e, t, n) {
  let r, i, a;
  if (((e = da(e, 360)), (t = da(t * 100, 100)), (n = da(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = sa(s, o, e + 1 / 3)), (i = sa(s, o, e)), (a = sa(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function la(e, t, n) {
  ((e = da(e, 255)), (t = da(t, 255)), (n = da(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function ua(e, t, n) {
  ((e = da(e, 360) * 6), (t = da(t * 100, 100)), (n = da(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function da(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    fa(e) && (e = `100%`);
    let t = pa(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function fa(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function pa(e) {
  return typeof e == `string` && e.includes(`%`);
}
function ma(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function ha(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = xx[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = Cx.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = Cx.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = Cx.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: $i(r[2] ?? ``), l: $i(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = Cx.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: $i(r[2] ?? ``),
              l: $i(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = Cx.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: $i(r[2] ?? ``), v: $i(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = Cx.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: $i(r[2] ?? ``),
                  v: $i(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = Cx.hex8.exec(t))
                ? {
                    r: ga(r[1] ?? ``),
                    g: ga(r[2] ?? ``),
                    b: ga(r[3] ?? ``),
                    a: _a(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = Cx.hex6.exec(t))
                  ? {
                      r: ga(r[1] ?? ``),
                      g: ga(r[2] ?? ``),
                      b: ga(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = Cx.hex4.exec(t))
                    ? {
                        r: ga(`${r[1]}${r[1]}`),
                        g: ga(`${r[2]}${r[2]}`),
                        b: ga(`${r[3]}${r[3]}`),
                        a: _a(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = Cx.hex3.exec(t))
                      ? {
                          r: ga(`${r[1]}${r[1]}`),
                          g: ga(`${r[2]}${r[2]}`),
                          b: ga(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function ga(e) {
  return parseInt(e, 16);
}
function _a(e) {
  return ga(e) / 255;
}
function va(e) {
  let t = wx.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function ya(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function ba({ r: e, g: t, b: n, a: r }) {
  return { r: ya(e), g: ya(t), b: ya(n), a: r };
}
function xa(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function Sa({ r: e, g: t, b: n, a: r }) {
  return { r: xa(e), g: xa(t), b: xa(n), a: r };
}
function Ca({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function wa(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Ta({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = wa(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function Ea(e) {
  return Ox(Dx(e));
}
function Da(e) {
  return Ex(Tx(e));
}
function Oa(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = ja({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = ka(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? ja(e)
              : Ma(e)),
    i
  );
}
function ka(e) {
  let t = ha(e);
  if (t) return t.format === `hsl` ? Ma(t) : t.format === `hsv` ? Aa(t) : ja(t);
}
function Aa(e) {
  let t = ua(e.h, e.s, e.v);
  return { ...oa(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Na(e.a) };
}
function ja(e) {
  let t = ia(e.r, e.g, e.b);
  return { ...oa(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Na(e.a) };
}
function Ma(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Qi(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Qi(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = ea(e.s)),
    (r = Qi(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = ea(e.l)),
    (i = ca(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function Na(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Pa() {
  return by.location.origin === `https://screenshot.framer.invalid`;
}
function Fa({ children: e }) {
  if (C(Hx).top) return _(O, { children: e });
  let t = w({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    n = w({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    r = w(new Set()).current,
    i = w({
      getLayoutId: l(({ id: e, name: i, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = i ? `byName` : `byId`,
          s = t.current[o][e];
        if (s) return s;
        let c = i || e;
        if (!a && !r.has(c) && (!t.current.byLayoutId[c] || t.current.byLayoutId[c] === c))
          return (
            t.current.count[o][c] === void 0 &&
              ((t.current.count[o][c] = 0), (t.current.byLayoutId[c] = c), (n.current[o][e] = c)),
            r.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            U(!!c, `duplicatedId must be defined`);
            let u = t.current[o][c],
              d = t.current.byLastId[c];
            if (d && !l) {
              let e = t.current.byLayoutId[d],
                n = !e || e === i;
              d && !r.has(d) && (!i || n) && (l = [d, c]);
            }
            let f = u ? t.current.byLayoutId[u] : void 0,
              p = !f || f === i;
            if (u && !r.has(u) && (!i || p))
              return ((n.current[o][e] = u), (n.current.byLastId[c] = u), r.add(u), u);
          }
        let u = t.current.byLastId[e];
        if (u && !r.has(u)) return (r.add(u), (n.current.byId[e] = u), u);
        if (l) {
          let [t, i] = l;
          return ((n.current[o][e] = t), (n.current.byLastId[i] = t), r.add(t), t);
        }
        let d = t.current.byPossibleId[e];
        if (d && !r.has(d)) return (r.add(d), (n.current.byId[e] = d), d);
        let f = a?.[0],
          p = i || f || e,
          { layoutId: m, value: h } = Ia(p, (t.current.count[o][p] ?? -1) + 1, r);
        if (((t.current.count[o][p] = h), (n.current[o][e] = m), a?.length && !i)) {
          let e = a[a.length - 1];
          if ((e && (n.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (n.current.byPossibleId[t] || (n.current.byPossibleId[t] = m));
            }
        }
        return ((n.current.byLayoutId[m] = c), r.add(m), m);
      }, []),
      persistLayoutIdCache: l(() => {
        ((t.current = {
          byId: { ...t.current.byId, ...n.current.byId },
          byLastId: { ...t.current.byLastId, ...n.current.byLastId },
          byPossibleId: { ...t.current.byPossibleId, ...n.current.byPossibleId },
          byName: { ...t.current.byName, ...n.current.byName },
          byLastName: { ...t.current.byLastName, ...n.current.byLastName },
          byLayoutId: { ...t.current.byLayoutId, ...n.current.byLayoutId },
          count: { ...t.current.count, byName: {} },
        }),
          (n.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          r.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return _(Hx.Provider, { value: i, children: e });
}
function Ia(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function La({ enabled: e = !0, ...t }) {
  let n = C(Hx),
    r = c(() => ({ ...n, enabled: e }), [e]);
  return _(Hx.Provider, { ...t, value: r });
}
function Ra(e) {
  let t = w(null);
  return (t.current === null && (t.current = e()), t.current);
}
function za(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Ba(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return T(`div`, {
    style: Wx,
    children: [
      _(`div`, { className: `text`, style: Kx, children: r }),
      i && _(`div`, { className: `text`, style: qx, children: i }),
    ],
  });
}
function Ba(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function G(e) {
  return Number.isFinite(e);
}
function Va(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Ha(e) {
  return typeof e != `string` && typeof e != `number`;
}
function Ua(e) {
  return e != null && typeof e != `boolean` && !Va(e);
}
function Wa(e) {
  return (Math.PI / 180) * e;
}
function Ga(e) {
  return ct(e) ? !1 : e === 2 || e === 5;
}
function Ka(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function qa(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return Ja(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function Ja(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      W(e, `unknown constraint key`);
  }
}
function Ya(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(qa(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(qa(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function Xa(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(qa(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(qa(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function Za(e, t, n, r, i) {
  let a = Xa(G(e) ? e : Qx, n, r, i),
    o = Ya(G(t) ? t : $x, n, r, i);
  return (
    G(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (G(n.left) && G(n.right)
        ? (o = a / n.aspectRatio)
        : (G(n.top) && G(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function Qa(e, t) {
  return !G(e) || !G(t) ? null : e + t;
}
function $a(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function eo(e) {
  return !e._constraints || $a(e) ? !1 : e._constraints.enabled;
}
function to(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    G(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    G(n) && G(r) ? { width: n, height: r } : null
  );
}
function no(e) {
  let t = to(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return G(n) && G(r) ? { x: n, y: r, ...t } : null;
}
function ro(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!eo(e) || r) return no(e);
  let i = io(e),
    a = ao(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return Zx.toRect(i, o, null, n, null);
}
function io(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = Xx.quickfix({
      left: G(t),
      right: G(n),
      top: G(r),
      bottom: G(i),
      widthType: Ka(c),
      heightType: Ka(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function ao(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function oo() {
  return p.useContext(eS).parentSize;
}
function so(e) {
  return typeof e == `object`;
}
function co(e) {
  return so(e) ? e.width : e;
}
function lo(e) {
  return so(e) ? e.height : e;
}
function uo(e, t) {
  return _(tS, { parentSize: t, children: e });
}
function fo(e) {
  return ro(e, oo(), !0);
}
function po({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function mo(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function ho(e, t, n = iS) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!aS) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) aS = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = aS;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function go() {
  return Pa() ? Y.preview : Y.current();
}
function _o(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? Z.variable(e) : e === `` ? `""` : e;
}
function vo(e) {
  return e !== CS && e !== wS;
}
function yo(e) {
  for (let t in e) if (vo(t) && e?.[t] === !0) return !0;
  return !1;
}
function bo(e, t, n, r, i) {
  let a = p.useRef(null),
    o = p.useCallback(
      (e) => {
        t &&
          a.current !== !1 &&
          ((a.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t]
    ),
    s = p.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !yo(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n]
    ),
    c = p.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        if (yo(n)) {
          o(e);
          return;
        }
        r?.(e);
      },
      [o, r, t]
    );
  return p.useMemo(() => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }), [o, s, c, i]);
}
function xo(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return So(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return Co(r);
    case `lower-roman`:
    case `upper-roman`:
      return To(r);
    default:
      return So(r);
  }
}
function So(e) {
  return String(e).length;
}
function Co(e) {
  let t = 1;
  for (; wo(t) < e;) t++;
  return t;
}
function wo(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function To(e) {
  let t = 0;
  for (let n of MS) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function Eo(e, t) {
  return Z.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function Do(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function Oo() {
  return Y.current() === Y.preview ? ZS.value : XS.value;
}
function ko(e) {
  return lS(e, Oo, `framer-lib-combinedCSSRules`);
}
function Ao(e) {
  return H(e) || it(e);
}
function jo(e) {
  return !!e && QS in e && e[QS] === !0;
}
function Mo(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return at(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return ct(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return ot(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return ot(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = H(e.defaultValue) ? e.defaultValue : {};
        return (H(e.controls) && No(t, e.controls), t);
      }
      case `array`:
        return ot(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function No(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!ct(i) || jo(r)) continue;
    let a = Mo(r);
    ct(a) || (e[n] = a);
  }
}
function Po(e) {
  if (H(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Fo(e, t) {
  Ao(e) && No(Po(e), t);
}
function Io(e, t) {
  (Object.assign(e, { propertyControls: t }), Fo(e, t));
}
function Lo(e) {
  return e.propertyControls;
}
function Ro() {
  let e = Y.current();
  return e === Y.canvas || e === Y.export;
}
function zo() {
  let [e] = o(() => Ro());
  return e;
}
function Bo(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Vo(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of lC) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function Ho(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function Uo(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < uC) continue;
    let n = Ho(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${Ho(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function Wo(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of cC) {
    let n = Ho(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Go(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Wo(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: Uo(n, t, Vo(t.pixelWidth, t.pixelHeight)) };
}
function Ko() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: ht(oC.imagePlaceholderSvg),
  };
}
function qo(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function Jo(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function Yo(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...sC,
    objectPosition: Jo(e.positionX, e.positionY),
    objectFit: qo(e.fit),
  };
}
function Xo(e) {
  let t = p.useRef(e ? `auto` : `async`),
    n = l((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = l(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = l(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function Zo({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = oC.useImageSource(e, t, n),
    s = Yo(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = Xo(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Go(e.nodeFixedSize, e, o);
  return _(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function Qo({ image: e, containerSize: t, nodeId: n }) {
  let r = p.useRef(null),
    i = oC.useImageElement(e, t, n),
    a = Yo(e);
  return (
    p.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    _(`div`, { ref: r, style: { display: `contents`, ...sC } })
  );
}
function $o({ nodeId: e, image: t, containerSize: n }) {
  let r = p.useRef(null),
    i = oC.useImageSource(t, n, e);
  return (
    p.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = Yo(t);
      oC.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    _(`div`, { ref: r, style: { display: `contents`, ...sC } })
  );
}
function es({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (B(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = V(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Yi(e * (t.pixelWidth / 2)),
        s = oC.useImageSource(t, n);
      ((r = {
        ...dC,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: Jo(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        Y.current() === Y.canvas
          ? oC.canRenderOptimizedCanvasImage(oC.useImageSource(t))
            ? _($o, { image: t, ...n })
            : _(Qo, { image: t, ...n })
          : _(Zo, { image: t, avoidAsyncDecoding: Y.current() === Y.export, ...n });
  let o = a ? dC : (r ?? { ...dC, ...Ko() });
  return i
    ? _(he.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : _(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function ts(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function ns(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...sC,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), _(he.div, { style: n }))
    : (ts(e, n, !1), _(he.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function rs(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function is(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !pC.isImageObject(t)) return;
  let r = null;
  if (((r = B(n) ? { alt: ``, src: n } : _x.get(t, null)), pC.isImageObject(r))) return rs(r, e);
}
function as(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function os(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? he[e] : he.div;
}
function ss(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0));
}
function cs(e) {
  let t = {};
  return (!e || !mC || Y.current() !== Y.canvas || ss(t, e), t);
}
function ls(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function us(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = p.Children.map(t, (e) =>
        p.isValidElement(e) ? p.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function ds(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function fs(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o = !1, drag: s } = e,
    { getLayoutId: l, enabled: u } = C(Hx);
  return c(() => {
    if (!u) return e.layoutId;
    let c = t || e.layoutId;
    if (!c && (s || !i || o)) return;
    let d = c || l({ id: i, name: r, duplicatedFrom: a });
    if (d) return n ? `${d}-${n}` : d;
  }, [u]);
}
function ps() {
  let [e, t] = p.useState(0);
  return p.useCallback(() => t((e) => e + 1), []);
}
function ms(e) {
  let t = ps();
  d(() => {
    let n = e?.current;
    if (n)
      return (
        _C?.observeElementWithCallback(e.current, t),
        () => {
          _C?.unobserve(n);
        }
      );
  }, [e, t]);
}
function hs(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(vC)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(gs)
    .map(_s);
}
function gs(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function _s(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(gs);
  return t ? _s(t) : e;
}
function vs(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = C(hC),
    l = Y.current() === Y.canvas;
  xb(() => {
    !l ||
      c ||
      s ||
      (t.current && i && a && o && oC.queueMeasureRequest(ls(i), t.current, n(t.current)));
  });
}
function ys(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && oC.queueMeasureRequest(ls(t.id), t, hs(t));
}
function bs(e) {
  e.willChange = `transform`;
  let t = Y.current() === Y.canvas;
  xC && t && (e.translateZ = yC);
}
function xs(e) {
  ((e.willChange = `transform`), Ss(e, !0));
}
function Ss(e, t) {
  let n = Y.current() === Y.canvas;
  if (!xC || !n) return;
  let r = (B(e.transform) && e.transform) || ``;
  t ? r.includes(bC) || (e.transform = r + bC) : (e.transform = r.replace(bC, ``));
}
function Cs(e, t, n, r = !0) {
  if (!e) return;
  let i = $S(e.style),
    a = n || i[t],
    o = () => {
      ws(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function ws(e) {
  return B(e) || V(e) || lt(e);
}
function Ts(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function Es(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  Ts(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function Ds(e, t) {
  let n = [e, t];
  return TC.test(e) ? e : Es(1e3, EC, n, () => wC.multiplyAlpha(e, t));
}
function Os(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: Ds(e.value, t) }))
  );
}
function ks(e, t) {
  let n = 0;
  return (
    Os(e, t).forEach((e) => {
      n ^= CC(e.value) ^ e.position;
    }),
    n
  );
}
function As(e) {
  return e && DC.every((t) => t in e);
}
function js(e) {
  return e && OC.every((t) => t in e);
}
function Ms({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || jx(t)
      ? (n.backgroundColor = t)
      : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e))
    : e &&
      ((e = _x.get(e, null)),
      typeof e == `string` || jx(e)
        ? (n.background = e)
        : AC.isLinearGradient(e)
          ? (n.background = AC.toCSS(e))
          : MC.isRadialGradient(e)
            ? (n.background = MC.toCSS(e))
            : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e)));
}
function K(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function Ns(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Ps(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Fs(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    me(n)
      ? (t.cornerShape = ae(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    K(e, `size`, t),
    K(e, `width`, t),
    K(e, `height`, t),
    K(e, `minWidth`, t),
    K(e, `minHeight`, t),
    K(e, `top`, t),
    K(e, `right`, t),
    K(e, `bottom`, t),
    K(e, `left`, t),
    K(e, `position`, t),
    K(e, `overflow`, t),
    K(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && K(e, `border`, t),
    K(e, `borderRadius`, t),
    K(e, `radius`, t, `borderRadius`),
    K(e, `color`, t),
    K(e, `shadow`, t, `boxShadow`),
    K(e, `x`, t),
    K(e, `y`, t),
    K(e, `z`, t),
    K(e, `rotate`, t),
    K(e, `rotateX`, t),
    K(e, `rotateY`, t),
    K(e, `rotateZ`, t),
    K(e, `scale`, t),
    K(e, `scaleX`, t),
    K(e, `scaleY`, t),
    K(e, `skew`, t),
    K(e, `skewX`, t),
    K(e, `skewY`, t),
    K(e, `originX`, t),
    K(e, `originY`, t),
    K(e, `originZ`, t),
    Ms(e, t),
    t
  );
}
function Is(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof $S(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function Ls(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (PC.has(t)) return `pointer`;
}
function Rs(e) {
  return zs(e) ? !0 : e.style ? !!zs(e.style) : !1;
}
function zs(e) {
  return FC in e && (e[FC] === `scroll` || e[FC] === `auto`);
}
function Bs(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = Ie(e.minWidth),
    h = Ie(e.minHeight),
    g = Ie(e.maxWidth),
    _ = Ie(e.maxHeight);
  return {
    top: Ie(n),
    left: Ie(t),
    bottom: Ie(r),
    right: Ie(i),
    width: Ie(a),
    height: Ie(o),
    size: Ie(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function Vs(e) {
  let t = C(hC),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = Bs(e),
    s = fo(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: Y.current() === Y.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let l = !Is(e) && !e.__fromCanvasComponent && !Rs(e),
    u = !e.style || !(`pointerEvents` in e.style);
  l && u && (c.pointerEvents = `none`);
  let d = p.Children.count(e.children) > 0 &&
      p.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    f = Fs(e);
  (a === void 0 && !i && (Ns(f) || (c.width = IC.width), Ps(f) || (c.height = IC.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let m = {};
  (eo(o) &&
    s &&
    !po(e) &&
    (m = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(c, d, r, f, m, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    SC.applyWillChange(e, c, !0));
  let h = c;
  c.transform || (h = { x: 0, y: 0, ...c });
  let g = Ro();
  return (
    e.positionSticky
      ? (!g || oC.isOnPageCanvas || t) &&
        ((h.position = `sticky`),
        (h.willChange = `transform`),
        (h.top = e.positionStickyTop),
        (h.right = e.positionStickyRight),
        (h.bottom = e.positionStickyBottom),
        (h.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed
          ? (h.position = oC.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (h.position = `absolute`)),
    `rotate` in h && h.rotate === void 0 && delete h.rotate,
    [h, s]
  );
}
function Hs(e) {
  let t = {};
  for (let n in e)
    (te(n) || tC(n)) && !LC.has(n)
      ? (t[n] = $S(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof $S(e)[n] != `boolean` && !e.transition && (t.transition = $S(e)[n]));
  return t;
}
function Us(e) {
  return `data-framer-name` in e;
}
function Ws(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function Gs(e) {
  return _(he.div, { layoutId: BC, style: UC, children: e.children });
}
function Ks(e, t) {
  it(e) ? e(t) : qs(e) && (e.current = t);
}
function qs(e) {
  return H(e) && `current` in e;
}
function Js() {
  let e = Ra(() => new Set()),
    t = Ra(() => new Map());
  return Ra(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function Ys(e) {
  let t = w(null),
    n = Js();
  return Ra(() => (qs(e) ? n(e) : it(e) ? n(t, e) : n(t)));
}
function Xs(e, t, n) {
  let r = w(),
    i = w();
  (Yr(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function Zs(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new WC({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Qs(e, t, n) {
  let r = Ra(() => `${n.rootMargin}`),
    i = C(GC),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  Xs(
    e,
    (e) => {
      if (a && e !== null) return Zs(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function $s(e, t, n) {
  let r = p.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  KC(
    e,
    p.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = tc(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t]
    ),
    { threshold: qC, rootMargin: s, enabled: i ?? !0 }
  );
}
function ec(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, by.innerHeight);
}
function tc({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && ec(t, e) >= r;
}
function nc() {
  return C(ZC);
}
function rc() {
  return new Map();
}
function ic() {
  return Ra(rc);
}
function ac(e, t = []) {
  let { register: n, deregister: r } = C(QC);
  d(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function oc(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function sc(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (G(t.originX) && (r.originX = t.originX),
      G(t.originY) && (r.originY = t.originY),
      G(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (G(n.originX) && (r.originX = n.originX),
      G(n.originY) && (r.originY = n.originY),
      G(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function cc(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function lc(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return iw.PushLeft;
    case `left`:
      return iw.PushRight;
    case `bottom`:
      return iw.PushUp;
    case `top`:
      return iw.PushDown;
  }
}
function uc(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return iw.OverlayLeft;
    case `left`:
      return iw.OverlayRight;
    case `bottom`:
      return iw.OverlayUp;
    case `top`:
      return iw.OverlayDown;
  }
}
function dc(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return iw.FlipLeft;
    case `left`:
      return iw.FlipRight;
    case `bottom`:
      return iw.FlipUp;
    case `top`:
      return iw.FlipDown;
  }
}
function fc(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return mc(e, t.transition, t.component);
    case `removeOverlay`:
      return hc(e);
    case `add`:
      return gc(e, t.key, t.transition, t.component);
    case `remove`:
      return yc(e);
    case `update`:
      return pc(e, t.key, t.component);
    case `back`:
      return _c(e);
    case `forward`:
      return vc(e);
    default:
      return;
  }
}
function pc(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function mc(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function hc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function gc(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i && i.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? wc(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = Sc(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = bc(e, t, c),
    p = Cc(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function _c(e) {
  let t = { ...e.containers },
    n = yc(e);
  if (n) return ((n.containers = t), n);
}
function vc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = gc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function yc(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (U(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = xc(e, r, n),
    u = Cc(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function bc(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function xc(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function Sc(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function Cc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = Tc(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function wc(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function Tc(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Ec(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Ec(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Ec(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Ec(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Ec(e, t, n) {
  let r = {},
    i = {};
  return (
    ow.forEach((e) => {
      ((r[e] = tw[e]), (i[e] = { ...n, from: tw[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${$S(tw)[a]}%` : $S(tw)[a];
        (($S(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function Dc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Oc({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function kc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
      ? t.transition.animation
      : uw;
}
function Ac({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function jc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function Mc(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else if (e < n) {
    let t = r[e + 1];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  }
}
function Nc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Pc(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function Fc(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t && t.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t && t.transition) return t.transition.enter;
    }
}
function Ic(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t && t.transition.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t && t.transition.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return uw;
}
function Lc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Rc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function zc(e) {
  return p.Children.map(e.component, (t) => {
    if (!Ua(t) || !Ha(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? H(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      p.cloneElement(t, n)
    );
  });
}
function Bc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function Vc(e, t) {
  let n = xe(),
    r = ie();
  return _(lw, {
    ref: (e) => {
      if (t) {
        if (typeof t == `function`) {
          t(e);
          return;
        }
        t.current = e;
      }
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
function Hc(e) {
  return _w in e;
}
function Uc(e, t) {
  if (!Hc(e)) return;
  let n = _x.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function Wc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Gc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function Kc(e, t) {
  let n = [];
  (G(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    G(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    G(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    G(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    G(e.invert) && n.push(`invert(${e.invert / 100})`),
    G(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    G(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    G(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Wc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function qc(e, t) {
  G(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Jc(e, t) {
  (qc(e, t), Kc(e, t));
}
function Yc(e, t) {
  let n,
    r = (...r) => {
      (by.clearTimeout(n), (n = by.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      by.clearTimeout(n);
    }),
    r
  );
}
function Xc(...e) {
  return e.filter(Boolean).join(` `);
}
function Zc(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let a = Qc(i);
    if (a && t.has(a)) {
      n[a] = e[i];
      continue;
    }
    r[i] = e[i];
  }
  return [n, r];
}
function Qc(e) {
  if (e.startsWith(Sw)) return e.substr(Cw);
}
function $c(e, n, r) {
  let a = i.map(e, (e) => (y(e) ? t(e, n) : e));
  return r ? a : _(O, { children: a });
}
function el(e) {
  let t = Ra(() => tl(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function tl(e) {
  let n = { forwardedRef: e, childRef: null, ref: null };
  n.ref = nl(n);
  let r = (e, t) => {
      if (!n.forwardedRef && n.forwardedRef === e) {
        n.ref = t;
        return;
      }
      let r = !1;
      (n.childRef !== t && ((n.childRef = t), (r = !0)),
        n.forwardedRef !== e && ((n.forwardedRef = e), (r = !0)),
        r && (n.ref = nl(n)));
    },
    a = !1;
  function o(o, s) {
    if (a)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (a = !0),
      i.count(o) > 1 && e && ((n.forwardedRef = void 0), (n.ref = n.childRef)),
      i.map(o, (e) => {
        if (y(e)) {
          let i = `ref` in e ? e.ref : void 0;
          r(n.forwardedRef, i);
          let a = it(s) ? s(e.props) : s;
          return t(e, n.ref === i ? a : { ...a, ref: n.ref });
        }
        return e;
      })
    );
  }
  let s = function (e, t) {
    return _(O, { children: o(e, t) });
  };
  return (
    (s.cloneAsArray = o),
    {
      useSetup: (e) => {
        ((a = !1), r(e, n.childRef));
      },
      cloneAsElement: s,
    }
  );
}
function nl(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Ks(n, e), Ks(t, e));
  };
}
function rl(e, t, n, r, i, a, o, s) {
  let c = p.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !p.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !sl(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = ol([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = ol([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let m = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = _(
        Tw.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = al(e, a, r);
    (f.length
      ? (U(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = _(
          `div`,
          { className: `${Ew} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : U(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      m.push(d));
  }
  return (
    U(!s || m.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? m : [...m, _(`div`, { className: Dw }, `property-overrides-separator`)]
  );
}
function il(e) {
  return e.split(`-`)[2];
}
function al(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${il(a)}`);
  }
  return r;
}
function ol(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function sl(e, t) {
  for (let n of Object.keys(t)) if (!Ft(e[n], t[n], !0)) return !0;
  return !1;
}
function cl(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function ll(e) {
  return p.forwardRef(({ optimized: t, ...n }, r) => {
    let i = p.useContext(ww),
      a = p.useContext(Tw)?.variants,
      o = n[Fw];
    o && !Rn() && Nw.setAll(o, a, t ? n : null, i);
    let s = Lw(n);
    return _(e, { ref: r, ...n, ...s });
  });
}
function ul(e) {
  return B(e) || Array.isArray(e);
}
function dl(e) {
  return e in Bw;
}
function fl(e, t) {
  let n = Ra(() => ({ values: zw(t ? e : void 0) }));
  return (
    p.useEffect(() => {
      if (!t)
        for (let e of Rw) {
          let t = Bw[e];
          ct(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function pl(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: i,
    loopPauseOffscreen: a,
  },
  s
) {
  let u = ye(),
    f = Ra(zw),
    p = w(!1),
    m = Ww(),
    h = w(null),
    g = l(async () => {
      if (!i) return;
      let e = n || void 0,
        t = p.current && r === `mirror`,
        a = t ? Bw : i,
        o = t ? i : Bw;
      return (
        (p.current = !p.current),
        (h.current = Promise.all(
          Rw.map((t) => {
            if (!(u && t !== `opacity`))
              return (
                f[t].jump(o[t] ?? Bw[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    i = a[t] ?? o[t];
                  typeof i == `number` && je(f[t], i, r);
                })
              );
          })
        )),
        h.current
      );
    }, [i, r, n, u]),
    [_, v] = o(!1),
    y = w(!1),
    b = l(async () => {
      !e || !y.current || (await g(), await m(t ?? 0), b());
    }, [g, m, e, t]),
    x = l(() => {
      y.current || ((y.current = !0), A(() => v(!0)), b());
    }, [b]),
    S = l((e = !0) => {
      (Rw.forEach((e) => {
        f[e].stop();
      }),
        Rw.forEach((e) => {
          f[e].set(Bw[e]);
        }),
        (p.current = !1),
        e && ((y.current = !1), A(() => v(!1))));
    }, []),
    C = e && i,
    T = l(() => {
      document.hidden ? S(!1) : y.current && ((y.current = !1), x());
    }, [x, S]);
  (d(() => {
    if (C)
      return (
        document.addEventListener(`visibilitychange`, T),
        () => {
          document.removeEventListener(`visibilitychange`, T);
        }
      );
  }, [C, T]),
    d(() => {
      (C && a) || (C ? x() : S());
    }, [x, S, a, C]),
    d(() => () => S(), [S]));
  let E = w(!1),
    D = l(async () => {
      h.current && (await h.current, !E.current && S());
    }, [S]);
  KC(
    s,
    l(
      (e) => {
        e.isIntersecting ? ((E.current = !0), x()) : ((E.current = !1), D());
      },
      [x, D]
    ),
    { enabled: C && a }
  );
  let O = _ || !a;
  return c(() => ({ values: f, style: C && O ? Vw : Hw }), [C, O]);
}
function ml(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function hl(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = p.useRef(null),
    c = ye(),
    l = p.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : ml(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: u } = z(),
    d = Ae(u, l),
    f = R(a && s.current === null ? `hidden` : n),
    m = R(0),
    h = C(GC);
  return (
    Xs(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = Zs(h, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            Me.update(() => {
              (d.set(l(u.get())), a && f.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o]
    ),
    Ht(() => {
      o && d.set(0);
    }),
    { values: { y: c || !o ? m : d }, style: o ? { ...Vw, visibility: f } : Hw }
  );
}
function gl(e) {
  return typeof e == `object` && !!e;
}
function _l(e) {
  if (gl(e)) return e?.transition;
}
function vl(e, t, n, r, i, a) {
  let o = _l(e);
  return Promise.all(
    Rw.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = gl(e) ? (e?.[s] ?? Bw[s]) : Bw[s];
          if ((me(u) && (u = u.get()), !V(u))) return c();
          let d = He.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (B(i) && !l?.hasAnimated && by.MotionHandoffAnimation) {
            let e = by.MotionHandoffAnimation(i, s, Me);
            e && (f = e);
          }
          a ? l.set(u) : je(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function yl(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  s,
  l,
  u
) {
  let d = r ?? e,
    f = i ?? t,
    p = a ?? n,
    [m, h] = oe(),
    g = w({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    _ = Ra(() => {
      let e = d ?? l;
      if (!H(e)) return { values: zw() };
      let t = {};
      for (let n in e) {
        let r = H(e) ? e[n] : void 0;
        V(r) && (t[n] = r);
      }
      return { values: zw(t) };
    });
  Xs(
    o,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && f) return;
      let n = He.get(e);
      if (n) {
        Object.assign(g.current, { hasMounted: !0 });
        for (let e in _.values) {
          if (!dl(e)) continue;
          let t = l?.[e];
          n.setBaseTarget(e, V(t) ? t : Bw[e]);
        }
      }
    },
    [f]
  );
  let v = ye();
  Xs(o, (e) => {
    if (!s) {
      h?.();
      return;
    }
    if (e === null) return;
    if (m !== g.current.lastPresence) {
      (Object.assign(g.current, { lastPresence: m }),
        m
          ? d &&
            f &&
            (Object.assign(g.current, { running: !0 }),
            vl(f, _, v, o, u).then(() => Object.assign(g.current, { running: !1 })))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              vl(p, _, v, o, u)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    Ft(f, t) ||
      !f ||
      (Object.assign(g.current, { lastAnimate: f }),
      vl(f, _, v, o, u, !n).then(() => Object.assign(g.current, { running: !1 })));
  });
  let y = s && f;
  return c(() => ({ values: _.values, style: y ? Vw : Hw }), [y]);
}
function bl(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function xl(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o || !o.current) continue;
    let c = bl(o.current, document.documentElement) - qw - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function Sl(e, t = 0) {
  return e < t ? `up` : `down`;
}
function Cl(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Vt();
  p.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return le((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = Sl(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < Jw) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function wl(e, t, n) {
  let r = xl(e, t),
    i = [...Xw],
    a = r[0];
  if (!V(a)) return Zw;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!V(e)) return Zw;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function Tl(e) {
  return {
    x: e?.x ?? Bw.x,
    y: e?.y ?? Bw.y,
    scale: e?.scale ?? Bw.scale,
    opacity: e?.opacity ?? Bw.opacity,
    transformPerspective: e?.transformPerspective ?? Bw.transformPerspective,
    rotate: e?.rotate ?? Bw.rotate,
    rotateX: e?.rotateX ?? Bw.rotateX,
    rotateY: e?.rotateY ?? Bw.rotateY,
    skewX: e?.skewX ?? Bw.skewX,
    skewY: e?.skewY ?? Bw.skewY,
    transition: e?.transition ?? void 0,
  };
}
function El({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return p.useMemo(
    () => ({
      initial: r ?? Tl({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? Tl({ opacity: t }),
      exit: i ?? Tl(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function Dl(e, t) {
  let n = ye(),
    r = El(e),
    i = e.styleAppearEffectEnabled,
    a = fl(i ? r.initial : r.animate, i),
    o = p.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = Vt(),
    l = p.useRef(),
    u = p.useCallback(async ({ transition: i, ...o }, s) => {
      let c = i ?? r.animate.transition ?? e.transition;
      await l.current;
      let u = He.get(t.current);
      l.current = Promise.all(
        Rw.map((e) => {
          s && a.values[e].set(r.initial[e] ?? Bw[e]);
          let t = o[e] ?? Bw[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (V(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...c, onComplete: () => r() };
                typeof t == `number` && je(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && o.current.lastAppearState === !0;
  $s(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      if (t) {
        o.current.scheduledAppearState = e;
        return;
      }
      ((o.current.scheduledAppearState = void 0),
        (o.current.lastAppearState = e),
        n !== e && u(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollVisas && !d,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let f = e.targets && i && !e.scrollVisas;
  return (
    p.useEffect(() => {
      if (!f) return;
      let t = { initial: !0 },
        n = `initial`;
      return le((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = wl(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = L(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = $S(r)[l];
        d && u(d);
      });
    }, [s, f]),
    Cl(e.scrollVisas, (e) => void u(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Ht(() => {
      if (i && !(!e.targets && !e.scrollVisas))
        for (let e of Rw) a.values[e].set(r.initial?.[e] ?? Bw[e]);
    }),
    c(() => ({ values: a.values, style: i ? Vw : Hw }), [i])
  );
}
function Ol(e, t) {
  let n = p.useRef({});
  p.useEffect(() => {
    if (t !== void 0)
      for (let r of Xv(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = Ge({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), Me.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function kl(e, t) {
  let n = eT();
  return {
    inputRange: xl(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of Rw) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function Al(e) {
  let t = eT();
  for (let { target: n } of e) for (let e of Rw) t[e]?.push(n[e]);
  return t;
}
function jl(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: i,
    transformViewportThreshold: a = 0,
  },
  o
) {
  let s = ye(),
    c = fl($w(n, s), t),
    l = !t || !n,
    u = e === `onScrollTarget`,
    d = Vt();
  return (
    r(() => {
      if (!(l || !u))
        return le((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: i } = kl(n, a * t.containerLength);
          if (r.length !== 0)
            for (let e of Rw)
              (s && e !== `opacity`) ||
                (r.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(L(t.current, r, i[e])));
        });
    }, [s, u, a, n, l]),
    Xs(
      o,
      (t) => {
        if (l || u || t === null) return;
        let r = Al(n);
        return le(
          (e, { y: t }) => {
            for (let e of Rw)
              (s && e !== `opacity`) ||
                (tT.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  c.values[e].set(L(t.progress, tT, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [d, s, e, u, n, l]
    ),
    Ol(c.values, i),
    Ht(() => {
      if (l) return;
      let e = $w(n, s);
      for (let t of Rw) c.values[t].set(e?.[t] ?? Bw[t]);
    }),
    p.useMemo(() => ({ values: c.values, style: t ? Vw : Hw }), [t])
  );
}
function Ml(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Nl(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = Qc(n);
    if (r) {
      for (let i of rT)
        if (nT[i]?.has(r)) {
          t[i][r] = $S(e)[n];
          break;
        }
    } else t.forwardedProps[n] = $S(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = Ml(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = Ml(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Pl(e) {
  return H(e) && oT in e;
}
function Fl(e, t) {
  if (!e || !H(e)) return t;
  for (let n in e) {
    let r = e[n];
    !me(r) || !dl(n) || (V(r.get()) && t[n].push(r));
  }
}
function Il(e) {
  return B(e) || Array.isArray(e);
}
function Ll({ componentIdentifier: e, children: t }) {
  return t(C(cT)[e] ?? {});
}
function Rl() {
  return p.useContext(lT);
}
function zl(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Bl() {
  if (n === void 0 || fT)
    return _(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw mT;
}
function Vl({ children: e }) {
  return C(gT) ? _(O, { children: e }) : _(E, { fallback: hT, children: e });
}
function Hl() {
  return _(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Ul(e, t) {
  if (!Lv || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  _n(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Wl(...e) {
  console.error(...e);
}
function Gl() {
  return Y.current() !== Y.canvas;
}
function Kl({ getErrorMessage: e, fallback: t, children: n }) {
  return Gl()
    ? _(ql, { fallback: t, children: _(vT, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function ql({ children: e, fallback: t = _T }) {
  return n === void 0 ? _(E, { fallback: t, children: e }) : _(Vl, { children: e });
}
function Jl() {
  return p.useContext(bT);
}
function Yl() {
  let e = Jl();
  return p.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function Xl({ children: e, scopeId: t, nodeId: n }) {
  let r = Jl(),
    i = p.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return _(bT.Provider, { value: i, children: e });
}
function Zl(e, t) {
  return `${xT}${e}:${t}`;
}
function Ql(e, t) {
  return eu(`component`, e, t);
}
function $l(e, t) {
  return eu(`override`, e, t);
}
function eu(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${Zl(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function tu(e, t, n, r, i, a) {
  let o = ru(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function nu(e, t, n, r) {
  return ru(e, t, n, r);
}
function ru(e, t, n, r) {
  return !!(ct(n) || (n === 1 && r && e === t));
}
function iu(e, t, n, r, i, a) {
  let o = Jl();
  if (ct(t) || ct(n)) return _(yT, { children: e });
  let { disableCustomCode: s } = $y();
  return s && r
    ? _(`div`, {
        style: {
          padding: `12px 16px`,
          borderWidth: 1,
          borderRadius: 6,
          borderStyle: `solid`,
          borderColor: `rgba(149, 149, 149, 0.15)`,
          backgroundColor: `rgba(149, 149, 149, 0.1)`,
          fontSize: 12,
          color: `#a5a5a5`,
        },
        children: `Code component disabled`,
      })
    : (tu(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = _(Kl, { getErrorMessage: Ql.bind(null, t, n), fallback: null, children: e })),
      i && (e = _(Xl, { scopeId: t, nodeId: n, children: e })),
      e);
}
function au(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function ou(e) {
  return !(!e || e.placement || e.alignment);
}
function su(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      W(e);
  }
}
function cu(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${su(t)}, -100%`;
    case `right`:
      return `0%, ${su(t)}`;
    case `bottom`:
      return `${su(t)}, 0%`;
    case `left`:
      return `-100%, ${su(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function lu(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(AT)) {
      let e = n.getAttribute(AT);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function uu(e) {
  let { registerCursors: t } = C(wT),
    n = Ra(() => e),
    i = N();
  r(() => t(n, i), [t, i]);
}
function du(e) {
  return !!(e && typeof e == `object` && MT in e);
}
function fu(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function pu() {
  return Y.current() === Y.canvas;
}
function mu(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function hu(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function gu(e, t, n, r) {
  if (B(e)) {
    let i = mu(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    let { routeId: s } = ji(t.routes, o, void 0, r);
    return t.getRoute(s);
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function _u(e) {
  return B(e) && e.startsWith(`data:${zT}`);
}
function vu(e) {
  if (_u(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(zT.length),
        r = t.searchParams,
        i = r.has(FT) ? r.get(FT) : void 0,
        a,
        o = r.get(IT),
        s = r.get(LT),
        c = r.get(RT);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function yu(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = vu(e);
    if (!n || !n.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function bu(e) {
  if (!_u(e)) return e;
  let t = vu(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: xu(i) };
}
function xu(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Su(e, t, n, r, a, o) {
  let s = C(BT),
    u = Yl(),
    d = c(() => ({ scopeId: t, nodeId: n, furthestExternalComponent: u }), [t, n, u]),
    f = Rt(),
    p = Bt(),
    { locales: m } = Zr(),
    h = c(() => {
      let e = du(r) ? r : bu(r);
      if (e) return gu(e, f, p, m);
    }, [p, r, f, m]),
    g = !!(!pu() && s?.nodeId && d.nodeId),
    v = l(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), Wn(e))) {
            Tu(a.href, ``, `_blank`);
            return;
          }
          h ? a.navigate?.() : Tu(a.href, a.rel, a.target);
        }
      },
      [a, h]
    ),
    y = l(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), Tu(a.href, ``, `_blank`));
      },
      [a]
    ),
    b = l(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          h ? a.navigate?.() : Tu(a.href, a.rel, a.target));
      },
      [a, h]
    );
  Xs(
    o,
    (e) => {
      e !== null && g && (e.dataset.hydrated = `true`);
    },
    [g]
  );
  let x = e;
  return (
    g &&
      (i.forEach(e, (e) => {
        wu(e) &&
          (U(
            Cu(s),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          U(
            Cu(d),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          PT.collectNestedLink(s, d));
      }),
      (x = i.map(e, (e) => {
        if (!wu(e)) return e;
        let t = Eu(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: v,
            onAuxClick: y,
            onKeyDown: b,
            as: r.as && Eu(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return k(t, { ...i, ref: a }, n);
      }))),
    _(BT.Provider, { value: d, children: x })
  );
}
function Cu(e) {
  return !ct(e?.nodeId);
}
function wu(e) {
  return y(e) && (Eu(e.type) !== e.type || Eu(e.props.as) !== e.props.as);
}
function Tu(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Eu(e) {
  return e === `a` ? `span` : tt(e) && ce(e) === `a` ? he.span : e;
}
function Du({ component: e, props: t }) {
  let n = C(ww),
    r = k(e, t);
  if ((`variant` in t && t.variant != null) || !n) return r;
  let { activeVariantId: i, humanReadableVariantMap: a } = n;
  if (!i || !a) return r;
  let o = {};
  for (let [e, t] of Object.entries(a)) o[t] = { variant: e };
  return _(kw, { overrides: o, breakpoint: i, children: r });
}
function Ou(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Ou(e.parentElement, t)
      : null;
}
function ku({ children: e }) {
  return _(Vl, { children: e });
}
function Au(e) {
  return h(function (t, n) {
    return _(ku, { children: _(e, { ...t, ref: n }) });
  });
}
function ju(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Nu(e, t, o, s, a, c, l, i, r);
}
function Mu(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && mu(t))
    try {
      let [i, a] = t.split(`#`, 2);
      U(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      U(o !== void 0, `A href must have a defined pathname.`);
      let { routeId: s, pathVariables: c, localeId: l } = ji(e.routes, o, void 0, r),
        u = e.getRoute(s);
      if (u)
        return {
          routeId: s,
          route: u,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, c),
          locale: l ? r?.find(({ id: e }) => e === l) : void 0,
        };
    } catch {}
}
function Nu(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = di(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function Pu() {
  let e = C(KT),
    t = Bt()?.pathVariables;
  return e || t;
}
function Fu(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(GT)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Iu() {
  let e = P.connection || P.mozConnection || P.webkitConnection || {},
    t = P.deviceMemory && P.deviceMemory > YT,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? XT : ZT));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: JT }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    let { id: n, preload: i } = e,
      a = eE.get(n);
    if (!a?.size || $T.has(n)) return;
    (++s, $T.add(n));
    let c = i()?.catch(() => {});
    (o.unobserve(t), QT.delete(t));
    for (let e of a) (o.unobserve(e), QT.delete(e));
    (a.clear(), eE.delete(n), await c, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = QT.get(e);
      if (!n || $T.has(n.id)) {
        (o.unobserve(e), QT.delete(e));
        continue;
      }
      let r = n.id,
        a = eE.get(r),
        l = eE.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : eE.set(r, new Set([e])), setTimeout(c, qT, n, e));
      } else (a && a.delete(e), l <= 1 && eE.delete(r));
    }
  }
  return (e, t, n) => {
    if (!$T.has(n))
      return (
        QT.set(e, { id: n, preload: t }),
        o.observe(e),
        () => {
          (QT.delete(e), o.unobserve(e));
        }
      );
  };
}
function Lu(e, t) {
  let n = mu(e),
    r = {
      href: e === `` || hu(e, n) ? e : `https://${e}`,
      target: Ru(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = er(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Ru(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function zu(e, t) {
  console.warn(
    _t(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Bu(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return zu(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return mt(i) ? i.catch(zu) : i;
  } catch (e) {
    zu(e);
  }
}
async function Vu(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      U(a, `unresolvedSlug should be defined`);
      let o = Bu(a, r, n),
        s = mt(o) ? await o : o;
      s && (t[i] = s);
    }
    return t;
  }
  let [a, o] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: a.status === `fulfilled` ? a.value : void 0,
    hash: o.status === `fulfilled` ? o.value : void 0,
  };
}
function Hu(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Bu(o, r, n);
      mt(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Uu() {
  let e = On();
  return l((t, n, r, i = []) => Hu(t, n, r, e, i), [e]);
}
function Wu({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = On();
  return l(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = du(r) ? r : bu(r);
      if (!du(c))
        return _n(
          `published_site_click`,
          {
            ...s,
            href: o ? Gu(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (B(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (mt(n) ? await n : n) ?? null;
        }
      }
      return _n(
        `published_site_click`,
        {
          ...s,
          href: o ? Gu(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function Gu(e) {
  try {
    let t = new URL(e, by.document.baseURI);
    return t.origin === by.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function Ku(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function qu(e, t, n) {
  return async (r) => {
    let i = Wn(r),
      a = Ou(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await Xy({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function Ju(e, t, n, r, i, a, o, s) {
  if (!n) return Lu(e, r);
  let c = Mu(t, e, s, o);
  if (!c) return Lu(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Lu(e, r);
  let m = di(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !Rv,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = Ru(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = { pathVariables: f, locale: p },
    v = (e) => Ku(t, l, () => i(l, _, !1, !g), d, f, r.smoothScroll, e);
  return {
    href: m,
    target: h,
    onClick: qu(m, r.trackLinkClick, v),
    navigate: v,
    "data-framer-page-link-current":
      (n && Fu(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () => i(l, _, !0, !g),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
  };
}
function Yu(e, t, n) {
  let r = Xu(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (it(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (it(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function Xu(e, t) {
  let n = H(e) ? e : void 0,
    r = n && !st(n),
    i = t && !st(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function Zu(e, t, n) {
  if (!(t && Mn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: Qu } : { ...i, onTap: r }) : e;
}
function Qu(e) {
  let t = Ou(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function $u(e, t, n, r, i, a) {
  let o = du(e) ? e : bu(e);
  if (!du(o)) return B(e) ? Lu(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (mt(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return di(m, {
    currentRoutePath: s?.path,
    currentRoutePathLocalized: s?.pathLocalized,
    currentPathVariables: t.currentPathVariables,
    hash: l,
    pathVariables: g,
    hashVariables: _,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: i?.id,
    localeSlug: i?.slug,
  });
}
function ed() {
  return function () {
    async function e(e) {
      let t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest(`SHA-256`, t);
      return Array.from(new Uint8Array(n))
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``);
    }
    function t(e) {
      let t = ``;
      for (let n = 0; n < e; n++)
        t += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
          Math.floor(Math.random() * 62)
        );
      return t;
    }
    addEventListener(`message`, async (n) => {
      let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
        s = `0`.repeat(i),
        c = performance.now(),
        l = !0;
      for (; l;) {
        if (performance.now() - c > o) {
          ((l = !1), postMessage({ success: !1 }));
          return;
        }
        let n = t(a),
          i = `${Date.now()}:${n}`,
          u = await e(r + i);
        if (u.startsWith(s)) {
          postMessage({ success: !0, secret: i, hash: u });
          return;
        }
      }
    });
  }.toString();
}
async function td() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(new Blob([`(`, ed(), `)()`], { type: `application/javascript` })),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success ? e({ secret: t.data.secret, hash: t.data.hash }) : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({ salt: rE, difficulty: iE, tokenLength: aE, maxTime: oE }));
  });
}
function nd(e) {
  return Array.from(e.keys()).map(encodeURIComponent).join(`,`);
}
function rd(e, t) {
  try {
    let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n !== null && n[2]) {
      let t = JSON.parse(decodeURIComponent(n[2]));
      if (!t || typeof t != `object`) return;
      [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`].forEach(
        (n) => {
          typeof t[n] == `string` && e.append(n, t[n]);
        }
      );
    }
  } catch {}
}
function id() {
  let e = p.useContext(bE),
    t = p.useMemo(
      () =>
        lE.map((e) => ({
          inputRef: p.createRef(),
          originalName: e,
          methodsUsed: { setAttribute: !1, valueProperty: !1 },
        })),
      []
    );
  return {
    states: t,
    convertHoneypotFieldsForSubmission: p.useCallback(() => {
      t.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${cE}_${e.originalName}`);
      });
    }, [t]),
    replaceHoneypotWithMetadata: p.useCallback(
      (n) => {
        let r = t.length,
          i = 0,
          a = [];
        (t.forEach((e) => {
          let t = e.inputRef.current;
          if (t) {
            let r = t.name,
              o = t.value;
            if (o) {
              i++;
              let t = {
                [dE.name]: e.originalName,
                [dE.value]: o,
                [dE.setAttribute]: e.methodsUsed.setAttribute,
                [dE.valueProperty]: e.methodsUsed.valueProperty,
                [dE.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [dE.inputChangeTimeSinceModuleLoad]: e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [dE.wasFilledBeforeHydration]: e.methodsUsed.wasFilledBeforeHydration,
              };
              a.push(JSON.stringify(t));
            }
            (n.delete(r), (t.name = e.originalName));
          }
        }),
          n.append(`${cE}_${fE.fieldData}`, `[${a.join(`,`)}]`),
          n.append(`${cE}_${fE.fieldCount}`, r.toString()),
          n.append(`${cE}_${fE.fieldFilledCount}`, i.toString()),
          n.append(`${cE}_${fE.hpVersion}`, sE),
          n.append(`${cE}_${fE.siteId}`, e || ``),
          n.append(`${cE}_${fE.timeToSubmissionSinceModuleLoad}`, pE()));
      },
      [t, e]
    ),
  };
}
function ad({ states: e }) {
  return _(O, { children: e.map((e) => _(mE, { inputStateRef: e }, `hp_${e.originalName}`)) });
}
function od({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          sd(e, t, n);
        })
      : sd(e.pageviewEventData.current, t, n));
}
function sd(e, t, n) {
  return _n(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`
  );
}
function cd({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? yE : vE;
    case `incomplete`:
      return e === `error` ? yE : _E;
    case `submit`:
      return hE;
    case `success`:
      return gE;
    case `error`:
      return yE;
    default:
      W(t);
  }
}
function ld({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function ud(e) {
  e.preventDefault();
}
function dd(e, t) {
  let n = hu(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    `current` in t && t.current && (t.current.appendChild(r), r.click(), r.remove()));
}
function fd(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (fd(t)) return !0;
  return !1;
}
async function pd(e, t, n) {
  let r = await td();
  if (!r) throw Error(`Failed to calculate proof of work`);
  let i = { "Framer-Site-Id": n, "Framer-POW": r.secret, "Framer-Form-Fields": nd(t) },
    a = await fetch(e, { body: t, method: `POST`, headers: i });
  if (a.ok) return a;
  {
    let e = await a.json(),
      t = `Failed to submit form`;
    throw md(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function md(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    H(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function hd({ EditorBar: e, fast: t = !1 }) {
  let n = C(bE),
    r = M(Vv, t ? wE : TE, Uv),
    i = $y(),
    a = c(() => {
      let e = {},
        t;
      for (t in i)
        i.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = i[t]);
      return e;
    }, [i]);
  return !e || !n || !r
    ? null
    : _(CE, { children: _(E, { children: _(e, { framerSiteId: n, features: a }) }) });
}
function gd({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = w(),
    i = w(),
    a = w(t),
    s = w(null);
  ((a.current = t),
    d(() => {
      e && ((r.current ??= new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [c] = o(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        a.current ? vd(a.current, a.current.currentRouteId, a.current.currentPathVariables) : ``,
      resolveRoute: (e) => (a.current ? vd(a.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
      sendTrackingEvent: async (e) => {
        a.current && _d(a.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: s,
  }));
  return _(EE.Provider, { value: c, children: n });
}
async function _d(e, t) {
  if (!vn(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    _n(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function vd(e, t, n) {
  let r = e.getRoute(t);
  return !r || !r.path ? `` : n ? $n(r.path, n) : r.path;
}
function yd({ children: e, loadSnippetsModule: t }) {
  return _(LE.Provider, { value: t, children: e });
}
function bd() {
  return p.useContext(LE);
}
function xd(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Sd(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (U(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (U(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      W(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await Cd(a.createContextualFragment(e), r, i));
}
async function Cd(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = wd(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await Cd(r, e, null)));
  }
}
function wd(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return Td(r, t, n);
}
function Td(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function Ed(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = NE), (n = PE));
      break;
    case `bodyEnd`:
      ((t = FE), (n = IE));
      break;
    case `headStart`:
      ((t = kE), (n = AE));
      break;
    case `headEnd`:
      ((t = jE), (n = ME));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function Dd(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = xd(e),
    s = t.nextSibling;
  for (; s && s !== n;) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function Od(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = Ed(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = Dd(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((kd(t, o), s)) {
      await Sd(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = xd(e.id),
      u = `${c}
${e.code}
${l}`,
      d = jd(e.id, n, r, i);
    d ? await Sd(u, d, `afterend`) : await Sd(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function kd(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (Ad(n) && n.remove(), (n = e));
  }
}
function Ad(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function jd(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = Dd(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function Md() {
  let e = bd();
  return l(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(DE),
        o = a && a.dataset[OE] !== void 0;
      if (i && o) return;
      let { getSnippets: s, snippetsSorting: c } = await e.readMaybeAsync(),
        l = await s(t, n, r);
      for (let e in l) {
        let t = e,
          n = l[t],
          r = c[t];
        await Od(t, n, r);
      }
    },
    [e]
  );
}
function Nd(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function Pd() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((RE = e.timeZone), (zE = e.locale));
}
function Fd({ routeId: e, url: t, pathVariables: n, localeId: r }) {
  Rr({ routeId: e, pathVariables: n, localeId: r, paginationInfo: kr()?.paginationInfo }, t);
}
function Id(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let { historyPath: i, hash: a, pathVariables: o, localeId: s, currentRoutePath: c } = n,
    l = c !== void 0 && c === r,
    u = kr();
  Rr(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      localeId: s,
      queryParamBackAnchorSearch: l ? u?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function Ld(e, t, n, r) {
  let i = kr();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Rr(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
      },
      di(t, n)
    ));
}
function Rd() {
  return zn() >= 17 ? UE : HE;
}
function zd(e = Gd) {
  let t = (e) => {
    e.persisted && Jd();
  };
  In() && (n.addEventListener(`pageshow`, t), (VE = Date.now() - Rd()));
  let r = Bd(),
    i = Kd(e);
  return function () {
    (n.removeEventListener(`pageshow`, t), r(), i());
  };
}
function Bd() {
  let e = n.history.scrollRestoration;
  return (
    (n.history.scrollRestoration = `manual`),
    function () {
      n.history.scrollRestoration = e;
    }
  );
}
function Vd(e) {
  return H(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function Hd() {
  return { x: n.scrollX, y: n.scrollY };
}
function Ud() {
  let e = kr();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (Vd(t)) return t;
}
function Wd(e) {
  let t = kr();
  t && (Ir({ ...t, scrollPosition: e }, void 0, !0), In() && (VE = Date.now()));
}
function Gd(e, t = !1) {
  let n = Ud();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (In() && !t) {
      let e = Rd();
      if (Date.now() - VE < e) return;
    }
    Wd(e);
  }
}
function Kd(e) {
  let t = () => {
      e(Hd());
    },
    r = () => {
      e(Hd(), !0);
    },
    i = () => {
      document.visibilityState === `hidden` && r();
    };
  (document.addEventListener(`visibilitychange`, i), n.addEventListener(`pagehide`, r));
  let a = () => {
    (document.removeEventListener(`visibilitychange`, i), n.removeEventListener(`pagehide`, r));
  };
  if (!(`onscrollend` in n)) {
    let e = qd(t);
    return function () {
      (a(), e());
    };
  }
  return (
    n.addEventListener(`scrollend`, t),
    function () {
      (a(), n.removeEventListener(`scrollend`, t));
    }
  );
}
function qd(e) {
  let t, r;
  function i() {
    (clearTimeout(t), (t = void 0), (r = void 0));
  }
  let a = () => {
      let t = r;
      (i(), !(t === void 0 || Ar(kr()) !== t) && e());
    },
    o = () => {
      let e = Ar(kr());
      if (e === void 0) {
        i();
        return;
      }
      (clearTimeout(t), (r = e));
      let o = In() ? Rd() : 100;
      t = n.setTimeout(a, o);
    };
  return (
    n.addEventListener(`scroll`, o),
    function () {
      (n.removeEventListener(`scroll`, o), i());
    }
  );
}
function Jd() {
  let e = Ud();
  return e ? (n.scrollTo(e.x, e.y), !0) : !1;
}
function Yd(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function Xd(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (Yd(n, t), !0);
}
function Zd(e, t, r) {
  r !== `preserve-scroll-position` &&
    Me.render(
      () => {
        (r === `restore-scroll-position` && Jd()) || Xd(e, t) || n.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function Qd(e, t) {
  Me.read(() => {
    n.scrollY !== 0 ||
      n.scrollX !== 0 ||
      Me.render(
        () => {
          Jd() || Xd(e, t);
        },
        !1,
        !0
      );
  });
}
function $d(e) {
  let t = $y().scrollRestoration,
    n = w(void 0),
    i = w(!1),
    a = !!(t && !e),
    o = l(
      (e) => {
        ((n.current = e), a && (i.current = !0));
      },
      [a]
    ),
    s = l((e, t = !1) => {
      i.current || Gd(e, t);
    }, []),
    c = l(() => {
      a && (i.current = !0);
    }, [a]),
    u = l(() => n.current !== void 0 || i.current, []),
    d = l((e, t) => {
      let r = n.current;
      !r ||
        r.routeId !== e ||
        r.remountKey !== t ||
        ((n.current = void 0), (i.current = !1), Zd(r.hash, r.shouldSmoothScroll, r.behavior));
    }, []);
  return (
    r(() => {
      if (a) return zd(s);
    }, [a, s]),
    {
      usesCustomScrollRestoration: a,
      isNavigationCommitPending: u,
      onHistoryTraversal: c,
      scheduleScroll: o,
      commitNavigationScroll: d,
    }
  );
}
function ef({ currentRouteId: e, remountKey: t, scrollRestoration: i }) {
  let { commitNavigationScroll: a, usesCustomScrollRestoration: o } = i;
  return (
    r(() => {
      a(e, t);
    }),
    d(() => {
      o && Qd(n.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function tf() {
  let [e, t] = p.useState(0);
  return [e, p.useCallback(() => t((e) => e + 1), [])];
}
function nf(e) {
  if (!e) return Iv;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function rf(e) {
  let t = Wr(e),
    r = w(void 0),
    i = l(() => {
      (r.current?.abort(), (r.current = void 0));
    }, []);
  return {
    startNavigation: l(
      async (e, a, o, s = !0) => {
        i();
        let c = s ? new AbortController() : void 0;
        r.current = c;
        let l = c?.signal,
          u = Gt(l);
        if ((a.promise.finally(u), o === void 0)) return (e(l), a.promise);
        let d,
          f = new Promise((e, t) => {
            ((d = e), l?.addEventListener(`abort`, t));
          }).catch(Iv);
        if ((t(f, c, o), e(l), await a.promise, l?.aborted)) return;
        let p = n.navigation?.transition;
        d();
        try {
          await p?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        l?.aborted || hb();
      },
      [i, t]
    ),
    cancelPendingNavigation: i,
  };
}
function af({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: i,
  initialRoute: o,
  notFoundPage: s,
  collectionUtils: u,
  routes: f,
  initialLocaleId: p,
  initialCollectionItemId: m,
  locales: h = ey,
  preserveQueryParams: g = !1,
  LayoutTemplate: v,
  EditorBar: y,
  siteCanonicalURL: b,
  adaptLayoutToTextVisas: x,
}) {
  (Ci(), zr({ disabled: t, routeId: o, initialPathVariables: i, initialLocaleId: p }));
  let S = wr(),
    [C, E] = tf(),
    D = Dr(`framer-route-change`),
    O = c(() => (!$y().synchronousNavigationOnDesktop || !Un() ? A : (e) => e()), []),
    k = Md(),
    j = w(!0),
    M = w(),
    N = w(o),
    P = w(i),
    F = w(p),
    I = $d(t),
    { isNavigationCommitPending: ee, usesCustomScrollRestoration: te } = I,
    { startNavigation: ne, cancelPendingNavigation: re } = rf(te),
    L = I.scheduleScroll,
    R = F.current,
    ie = c(() => h.find(({ id: e }) => (R ? e === R : e === ty)) ?? null, [R, h]),
    ae = ie?.textVisas ?? `ltr`,
    oe = x ? ae : `ltr`;
  r(() => {
    x && document.documentElement.setAttribute(`dir`, ae);
  }, [ae, x]);
  let se = Hr(),
    ce = c(
      () => ({
        activeLocale: ie,
        locales: h,
        setLocale: async (e) => {
          let n = D({ localized: !0 });
          await Xy({ priority: `user-blocking`, continueAfter: `paint` });
          let r;
          B(e) ? (r = e) : H(e) && (r = e.id);
          let i = h.find(({ id: e }) => e === ty),
            a = h.find(({ id: e }) => e === r);
          if (!a) return;
          let o = N.current,
            s = f[o];
          if (s)
            try {
              let e = await se({
                currentLocale: ie,
                nextLocale: a,
                route: s,
                routeId: o,
                defaultLocale: i,
                pathVariables: P.current,
                preserveQueryParams: g,
              });
              if (!e) return;
              let r = e.path;
              ((j.current = !1),
                (P.current = e.pathVariables),
                (F.current = a.id),
                (M.current = r));
              let c = s.path && e.pathVariables ? $n(s.path, e.pathVariables) : s.path;
              (L({
                routeId: o,
                remountKey: `${a.id}${c}`,
                hash: void 0,
                shouldSmoothScroll: !1,
                behavior: `preserve-scroll-position`,
              }),
                ne(
                  () => {
                    S(o, o, () => O(E));
                  },
                  n,
                  t
                    ? void 0
                    : r
                      ? () => {
                          Fd({
                            routeId: o,
                            url: r,
                            pathVariables: e.pathVariables,
                            localeId: a.id,
                          });
                        }
                      : void 0,
                  !1
                ));
            } catch {}
        },
      }),
      [ie, t, E, h, g, f, L, ne, S, D, O, se]
    ),
    le = l(
      (e, t, n, r, i, a, o, s, c) => {
        j.current = !1;
        let l = N.current,
          u = f[e],
          d = Wt(u, n),
          p = u?.path && i ? $n(u.path, i) : u?.path;
        if (
          ((N.current = e),
          (P.current = i),
          (F.current = t),
          (M.current = r),
          L({
            routeId: e,
            remountKey: `${t}${p}`,
            hash: d,
            shouldSmoothScroll: s ?? !1,
            behavior: a
              ? te
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          a)
        ) {
          (re(), O(E));
          return;
        }
        ne(
          (t) => {
            S(l, e, () => O(E), t);
          },
          o,
          c,
          !0
        );
      },
      [E, f, te, L, ne, S, O, re]
    );
  (Br(I, N, le),
    d(() => {
      if (t) return;
      let e = () => {
        let e = kr(),
          t = n.location.hash === `` ? void 0 : n.location.hash.slice(1);
        (e && Wt(f[e.routeId], e.hash) === t) ||
          Lr({
            ...(e ||
              (Mr() ?? { routeId: N.current, pathVariables: P.current, localeId: F.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (n.addEventListener(`hashchange`, e), () => n.removeEventListener(`hashchange`, e));
    }, [t, f]));
  let ue = l(
      async (e, n, r, i, a) => {
        let o = f[e],
          s = xt(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          l = D({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          u = nf(a);
        if (
          (Xy({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(u),
          await Xy({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(tb)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let d = Wt(o, n),
          p = P.current,
          m = F.current;
        if (Nd({ routeId: N.current, pathVariables: p }, { routeId: e, pathVariables: r })) {
          let a = ee();
          if (a) {
            let t = o?.path && r ? $n(o.path, r) : o?.path;
            L({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: d,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else re();
          (l.ignore?.(), !a && te && Zd(d, i, `scroll-to-hash-or-top`));
          let s = f[e];
          (!t &&
            s &&
            Ld(
              e,
              s,
              {
                currentRoutePath: s.path,
                currentRoutePathLocalized: s.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: n,
                localeId: m,
                preserveQueryParams: g,
                siteCanonicalURL: b,
              },
              u
            ),
            !a && !te && Zd(d, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let _ = f[N.current],
          v =
            li(b) +
            di(o, {
              currentRoutePath: _?.path,
              currentRoutePathLocalized: _?.pathLocalized,
              currentPathVariables: p,
              hash: n,
              pathVariables: r,
              localeId: m,
              localeSlug: h.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: g,
              relative: !1,
              siteCanonicalURL: b,
            });
        le(
          e,
          m,
          n,
          v,
          r,
          !1,
          l,
          i,
          t
            ? void 0
            : () => {
                (u(),
                  Id(e, o, {
                    historyPath: v,
                    currentRoutePath: _?.path,
                    hash: n,
                    pathVariables: r,
                    localeId: m,
                  }));
              }
        );
      },
      [re, f, h, le, t, g, b, D, te, ee, L]
    ),
    de = It(f),
    fe = N.current,
    z = M.current,
    pe = P.current,
    me = f[fe],
    he = me?.path,
    ge = BE(me, fe, z, pe, ie, m),
    _e = j.current;
  d(() => {
    k(fe, pe ?? {}, ce.activeLocale, _e);
  }, [k, fe, pe, ce, _e]);
  let ve = c(
    () => ({
      navigate: ue,
      getRoute: de,
      currentRouteId: fe,
      currentPathVariables: pe,
      routes: f,
      collectionUtils: u,
      preserveQueryParams: g,
      pageviewEventData: ge,
      siteCanonicalURL: b,
      isInitialNavigation: _e,
    }),
    [ue, de, fe, pe, f, u, g, b, ge, _e]
  );
  if (!me) throw Error(`Router cannot find route for ${fe}`);
  let ye = !ie || !me.includedLocales || me.includedLocales.includes(ie.id),
    be = he && pe ? $n(he, pe) : he,
    xe = `${R}${be}`,
    Se = Ra(() => ({ ...e, display: `contents` }));
  return _(Lt, {
    api: ve,
    children: _(wb.Provider, {
      value: ce,
      children: _(Tb.Provider, {
        value: oe,
        children: _(OT, {
          children: _(ii, {
            routerRenderKey: C,
            isNavigationCommitPending: I.isNavigationCommitPending,
            children: T(gd, {
              currentRoutePath: be,
              routerAPI: ve,
              children: [
                y && _(hd, { EditorBar: y, fast: !0 }),
                _(pT, {
                  children: T(Vl, {
                    children: [
                      _(ux.Start, {}),
                      _(ef, { currentRouteId: fe, remountKey: xe, scrollRestoration: I }),
                      _(fx, {
                        notFoundPage: s,
                        defaultPageStyle: e,
                        routerRenderKey: C,
                        children: _(of, {
                          LayoutTemplate: v,
                          webPageId: me?.abTestingVariantId ?? fe,
                          style: e,
                          children: (t) =>
                            _(a, { children: ye ? Oi(me.page, t ? Se : e) : s && Oi(s, e) }, xe),
                        }),
                      }),
                      y && _(hd, { EditorBar: y }),
                      _(yi, {}),
                      _(ux.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function of({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? _(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function sf(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function cf(e) {
  return typeof e == `object` && !!e;
}
function lf(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!cf(r)) return;
    r = r[e];
  }
  return r;
}
function uf(e) {
  return `${e.credentials}:${e.url}`;
}
function df(e) {
  return B(e) && !Number.isNaN(Number(e));
}
function ff(e, t) {
  switch (e) {
    case `string`:
      return B(t) || V(t);
    case `color`:
      return B(t);
    case `boolean`:
      return at(t);
    case `number`:
      return V(t) || df(t);
    case `link`:
    case `image`:
      return B(t) && hu(t, !1);
    default:
      return !1;
  }
}
function pf(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = lf(e.data, t.resultKeyPath);
  if (ct(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!ff(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function mf(e, t) {
  if (Y.current() === Y.canvas) return !1;
  let n = Math.max(t * 1e3, GE);
  return Date.now() >= e + n;
}
function hf(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    routes: s,
    collectionUtils: c,
    notFoundPage: l,
    isReducedMotion: u = !1,
    skipAnimations: d = !1,
    includeDataObserver: f = !1,
    localeId: m,
    locales: h,
    preserveQueryParams: g,
    EditorBar: v,
    defaultPageStyle: y,
    disableHistory: b,
    LayoutTemplate: x,
    siteCanonicalURL: S,
    adaptLayoutToTextVisas: C,
    loadSnippetsModule: w,
    initialCollectionItemId: T,
  } = e;
  return (
    p.useEffect(() => {
      n || zx.start();
    }, []),
    n
      ? _(qr, {
          value: r ?? `preview`,
          children: _(Pe, {
            reducedMotion: d ? `always` : u ? `user` : `never`,
            skipAnimations: d,
            children: _(Dn, {
              collectionUtils: c,
              children: _(XE, {
                children: _(bE.Provider, {
                  value: a,
                  children: _(yd, {
                    loadSnippetsModule: w,
                    children: _(af, {
                      initialRoute: i,
                      initialPathVariables: o,
                      initialLocaleId: m,
                      initialCollectionItemId: T,
                      routes: s,
                      collectionUtils: c,
                      notFoundPage: l,
                      locales: h,
                      defaultPageStyle: y ?? { minHeight: `100vh`, width: `auto` },
                      preserveQueryParams: g,
                      EditorBar: v,
                      disableHistory: b,
                      LayoutTemplate: x,
                      siteCanonicalURL: S,
                      adaptLayoutToTextVisas: C,
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : _(f ? xw : p.Fragment, {
          children: _(zt, {
            routes: s,
            children: _(dw, { children: p.isValidElement(t) ? t : p.createElement(t, { key: i }) }),
          }),
        })
  );
}
function gf(e, t) {
  let n = Rt(),
    { activeLocale: r } = Zr(),
    i = Uu();
  return Yr(() => {
    let t = [],
      a = (e) => {
        if (e)
          return B(e) || du(e)
            ? $u(e, n, void 0, void 0, r, o)
            : $u(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function _f(e) {
  return {
    trace(...t) {
      return oC.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return oC.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return oC.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return oC.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return oC.getLogger(e)?.error(...t);
    },
    get enabled() {
      return oC.getLogger(e) !== void 0;
    },
  };
}
function vf(e) {
  let t = e.next();
  return (U(t.done, `Generator must not yield`), t.value);
}
async function yf(e, t = e.next()) {
  for (; !t.done;) {
    let n = await t.value;
    t = e.next(n);
  }
  return t.value;
}
function bf(e) {
  let t = e.next();
  return t.done ? t.value : yf(e, t);
}
function* xf(e) {
  let t = {},
    n = Object.keys(e),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (ft(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            yf(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function* Sf(e) {
  let t = [],
    n = e.keys(),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (ft(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            yf(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function Cf(e) {
  return Ef(e) || kf(e);
}
function wf(e) {
  return ot(e) && e.every(H);
}
function Tf(e) {
  return H(e) && it(e.read) && it(e.preload);
}
function Ef(e) {
  return wf(e) || Tf(e);
}
function Df(e) {
  return H(e) && H(e.schema);
}
function Of(e) {
  return H(e) && H(e.collectionByLocaleId);
}
function kf(e) {
  return Df(e) || Of(e);
}
function Af(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = ap(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function jf(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => QE.cast(e, t.definition)) };
  }
  return null;
}
function Mf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Nf(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Pf(e) {
  return Nf(e)?.value ?? !1;
}
function Ff(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function If(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Lf(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Rf(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return dt(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function zf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Bf(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function Vf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Hf(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function Uf(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Wf(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function Gf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Kf(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function qf(e) {
  return Kf(e)?.value ?? null;
}
function Jf(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = ap(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function Yf(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = QE.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function Xf(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Zf(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function Qf(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function $f(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function ep(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function tp(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function np(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function rp(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function ip(e) {
  return rp(e)?.value ?? null;
}
function ap(e, t, n) {
  if (lt(e) || lt(t)) return (U(e === t), 0);
  switch (e.type) {
    case `array`:
      return (U(e.type === t.type), Af(e, t, n));
    case `boolean`:
      return (U(e.type === t.type), Mf(e, t));
    case `color`:
      return (U(e.type === t.type), Ff(e, t));
    case `date`:
      return (U(e.type === t.type), Lf(e, t));
    case `enum`:
      return (U(e.type === t.type), zf(e, t));
    case `file`:
      return (U(e.type === t.type), Vf(e, t));
    case `link`:
      return (U(e.type === t.type), Uf(e, t));
    case `number`:
      return (U(e.type === t.type), Gf(e, t));
    case `object`:
      return (U(e.type === t.type), Jf(e, t, n));
    case `responsiveimage`:
      return (U(e.type === t.type), Xf(e, t));
    case `richtext`:
      return (U(e.type === t.type), Qf(e, t));
    case `vectorsetitem`:
      return (U(e.type === t.type), ep(e, t));
    case `string`:
      return (U(e.type === t.type), np(e, t, n));
    default:
      W(e);
  }
}
async function op(e, t) {
  return Tf(e) ? (await e.preload(t), e.read(t)) : e;
}
function sp(e) {
  return e.includes(rD);
}
function cp(e) {
  if (!kf(e) || !e.id) return;
  let t = tD.get(e.id);
  if (!t) return (tD.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function lp(e) {
  let t = cp(e);
  if (t) return t;
  let n = nD.get(e);
  if (n) return n;
  let r = `${rD}${Math.random().toString(16).slice(2)}`;
  return (nD.set(e, r), r);
}
function up(e, t) {
  if (Ef(e)) {
    let n = lp(e) + (t?.id ?? ty),
      r = iD.get(n);
    if (r) return r;
    let i = new eD(e, t);
    return (iD.set(n, i), i);
  }
  if (Df(e)) return e;
  if (Of(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  W(e, `Unsupported collection type`);
}
function dp(e) {
  return e;
}
function fp(e) {
  return it(e.getHash);
}
function q(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (H(r) && fp(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return dp(`${n})`);
}
function pp(e, t) {
  return { collectionId: lp(e), pointer: t };
}
function mp(e) {
  return H(e) && B(e.collectionId);
}
function hp(e, t) {
  return { collectionId: lp(e), pointer: t };
}
function gp(e) {
  return H(e) && B(e.collectionId);
}
function _p(e, t) {
  let n = new Map();
  function r(e) {
    if (H(e))
      if (e.type === `Collection` && Cf(e.data)) {
        let r = up(e.data, t),
          i = lp(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (ot(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function vp(e) {
  return e;
}
function yp(e) {
  return e;
}
function bp(e) {
  return e;
}
function xp() {
  return 25;
}
function Sp() {
  return 12500;
}
function Cp(e) {
  return Array(e).fill({ type: `All` });
}
function wp(e) {
  return e;
}
function Tp(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new dO(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function Ep(e) {
  let t = new Set();
  if (!e) return t;
  Tp(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (Tp(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function Dp(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) Dp(n, t);
      return;
    case `object`:
      for (let n in e.value) Dp(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function Op(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function kp(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Ap(e) {
  return `${e.functionName}(${e.arguments.map((e) => Fp(e)).join(`, `)})`;
}
function jp(e) {
  let t = `CASE`;
  e.value && (t += ` ${Fp(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Fp(n.when)} THEN ${Fp(n.then)}`;
  return (e.else && (t += ` ELSE ${Fp(e.else)}`), (t += ` END`), t);
}
function Mp(e) {
  let t = Fp(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function Np(e) {
  let t = Fp(e.left),
    n = Fp(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function Pp(e) {
  return `CAST(${Fp(e.value)} as ${e.dataType})`;
}
function Fp(e) {
  switch (e.type) {
    case `Identifier`:
      return Op(e);
    case `LiteralValue`:
      return kp(e);
    case `FunctionCall`:
      return Ap(e);
    case `Case`:
      return jp(e);
    case `UnaryOperation`:
      return Mp(e);
    case `BinaryOperation`:
      return Np(e);
    case `TypeCast`:
      return Pp(e);
    case `Select`:
      return `${Bp(e)}`;
    default:
      W(e);
  }
}
function Ip(e) {
  return Df(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Lp(e) {
  let t = `${Rp(e.left)} LEFT JOIN ${Rp(e.right)}`;
  return (e.constraint && (t += ` ON ${Fp(e.constraint)}`), t);
}
function Rp(e) {
  switch (e.type) {
    case `Collection`:
      return Ip(e);
    case `LeftJoin`:
      return Lp(e);
    default:
      W(e);
  }
}
function zp(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function Bp(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Fp(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Rp(e.from)}`),
    e.where && (t += ` WHERE ${Fp(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Fp(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Fp(e.limit)}`),
    e.offset && (t += ` OFFSET ${Fp(e.offset)}`),
    zp(t)
  );
}
function Vp(e) {
  return H(e) && e.type === `Collection`;
}
function Hp(e, t) {
  return Vp(t) && Cf(t.data) ? lp(t.data) : t;
}
function Up(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, Hp) + n;
}
function Wp(e) {
  let { activeLocale: t } = Zr();
  return OO.get(e, t).use();
}
function Gp(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(ct(e) || H(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function Kp(e) {
  let t = w(e);
  return (
    j(() => {
      t.current = e;
    }, [e]),
    Xr((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function qp(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function Jp() {
  return new Set();
}
function Yp(e) {
  let t = Ra(Jp),
    n = Ra(Jp);
  return (
    ac(() => () => qp(n, t)),
    d(() => () => qp(n, t), []),
    d(() => {
      qp(n, t);
    }, [e]),
    w({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function Xp(e, t, n) {
  return p.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function Zp(e) {
  for (let [t, n] of Object.entries(e)) if (by.matchMedia(n).matches) return t;
}
function Qp(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && by.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function $p(e, t, n = !0) {
  let r = C(cw),
    i = zo(),
    a = Pa(),
    o = Rn() && (!i || a),
    s = w(o ? (Zp(t) ?? e) : e),
    c = w(n && r ? e : s.current),
    u = ps(),
    f = ge(),
    p = l(
      (e) => {
        if (e !== s.current || e !== c.current) {
          let t = function () {
            ((s.current = c.current = e),
              A(() => {
                u();
              }));
          };
          i
            ? t()
            : f(() => {
                t();
              });
        }
      },
      [f, u, i]
    );
  return (
    xb(() => {
      if (i) {
        if (a) {
          p(Zp(t) ?? e);
          return;
        }
        p(e);
      }
    }, [e, a, i, t, p]),
    xb(() => {
      !n || r !== !0 || p(s.current);
    }, []),
    d(() => {
      if (!o || a) return;
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = by.matchMedia(r),
          i = (e) => {
            e.matches && p(n);
          };
        (em(t, i), e.push([t, i]));
      }
      return () => e.forEach(([e, t]) => tm(e, t));
    }, [a, t, p, o]),
    [s.current, c.current]
  );
}
function em(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function tm(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function nm(e) {
  setTimeout(e, 1);
}
function rm(e) {
  let t = new Set(),
    n = Qp(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (im(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (zv ? by.requestIdleCallback : nm)(() => {
    document.querySelector(kO)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (im(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    am(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function im(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function am(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function om() {
  let e = Bt(),
    { activeLocale: t } = Zr(),
    n = c(
      () =>
        di(e, {
          currentRoutePath: e?.path,
          currentRoutePathLocalized: e?.pathLocalized,
          currentPathVariables: e?.pathVariables,
          preserveQueryParams: !1,
          relative: !1,
          siteCanonicalURL: void 0,
          localeId: t?.id,
        }),
      [e, t?.id]
    );
  return p.useCallback(
    (e) => {
      if (!e) return;
      let t = `${n}-${e}`,
        r = AO.get(t);
      if (r) return r;
      let i = x();
      return (AO.set(t, i), i);
    },
    [n]
  );
}
function sm(e) {
  return H(e) && jO in e && e.page !== void 0;
}
function cm(e, t) {
  return `${e}-${t}`;
}
function lm(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (U(r !== void 0, `nextVariant should be defined`), r);
}
function um(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function dm(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function fm(e, t) {
  return t[e] || `framer-v-${e}`;
}
function pm(e, t, n) {
  return e && n.has(e) ? e : t;
}
function mm() {
  let e = w(),
    t = w(),
    n = l(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    d(
      () => () => {
        n();
      },
      [n]
    ),
    l(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function hm() {
  let e = w(),
    t = w(!1),
    n = w(),
    r = C(GC);
  return (
    d(
      () => () => {
        (e.current?.(), (n.current = void 0), (e.current = void 0));
      },
      []
    ),
    l(
      (i, a) => {
        if (!a?.current || t.current) {
          i();
          return;
        }
        if (((n.current = i), e.current)) return;
        let o = !1;
        e.current = Zs(r, `undefined`, a.current, null, (e) => {
          ((t.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), t.current && n.current?.());
              })));
        });
      },
      [r]
    )
  );
}
function gm(e) {
  let t = mm(),
    n = hm();
  return l(
    (r, i = !1) => {
      if (Rv) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function _m() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (PO = () => {
        (e(), (t = void 0));
      }));
  });
}
function vm(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (NO = _m()));
}
function ym() {
  (performance.mark(`click-received-listener`), (NO = void 0), PO?.(), (PO = void 0));
}
function bm(e = !1) {
  d(() => {
    e &&
      (document.addEventListener(`pointerup`, vm, !0),
      document.__proto__.addEventListener.call(document, `click`, ym, !0));
  }, [e]);
}
function xm({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: s,
}) {
  let u = ps(),
    d = pu(),
    f = Ra(() => new Set(i));
  bm($y().yieldOnTap);
  let p = gm(s),
    m = w({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: pm(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    h = l((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = m.current,
        o = pm(e, a, f),
        s = dm(i?.[o], t, n, !1, r);
      return [o, s ? cm(o, s) : void 0];
    }, []),
    g = l(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = h(r);
        if (o === e && s === t) return;
        (a && (m.current.isError = !1),
          (m.current.baseVariant = o || n),
          (m.current.gestureVariant = s));
        let c = $y().yieldOnTap && m.current.isPressedHasUpdated;
        (c &&
          NO &&
          (performance.mark(`wait-for-tap-start`),
          await NO,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await Xy({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: l,
          isPressed: d,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: g,
        } = m.current;
        if (l || f || d || g) {
          A(u);
          return;
        }
        p(() => A(u), i);
      },
      [h, u, p]
    ),
    _ = l(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        let r = t !== m.current.isPressed,
          i = e !== m.current.isHovered;
        (e !== void 0 && (m.current.isHovered = e),
          t !== void 0 && (m.current.isPressed = t),
          n !== void 0 && (m.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = m.current;
        ((m.current.isPressedHasUpdated = r),
          (m.current.isHoveredHasUpdated = i),
          g(a, o, s, a, !1));
      },
      [g]
    ),
    v = l(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = m.current,
          o = e === MO ? lm(r || [], i || n) : e;
        g(i, a, n, o, t, !0);
      },
      [g]
    ),
    y = l(() => {
      let { baseVariant: e } = m.current;
      ((m.current.loadedBaseVariant[e] = !0), p(() => A(u), !0));
    }, [u, p]);
  if (e !== m.current.lastVariant) {
    let [t, n] = h(e);
    ((m.current.lastVariant = t),
      (t !== m.current.baseVariant || n !== m.current.gestureVariant) &&
        ((m.current.baseVariant = t), (m.current.gestureVariant = n)));
  }
  let {
      baseVariant: b,
      gestureVariant: x,
      defaultVariant: S,
      enabledGestures: C,
      isHovered: T,
      isPressed: E,
      isError: D,
      loadedBaseVariant: O,
    } = m.current,
    k = Xp(m.current.baseVariant, m.current.gestureVariant, a);
  return c(() => {
    let e = [];
    b !== S && e.push(b);
    let t = C?.[b]?.loading,
      n = !D && !d && !!t && !O[b],
      r = n ? cm(b, `loading`) : x;
    r && e.push(r);
    let i = C?.[b],
      a = { onMouseEnter: () => _({ isHovered: !0 }), onMouseLeave: () => _({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => _({ isPressed: !0 }),
          onTapCancel: () => _({ isPressed: !1 }),
          onTap: () => _({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: b,
        gestureVariant: r,
        isLoading: n,
        transition: um(m.current.transitions, b),
        setVariant: v,
        setGestureState: _,
        clearLoadingGesture: y,
        addVariantProps: k,
        gestureHandlers: a,
        classNames: Xc(fm(b, o), dm(i, T, E, n, D)),
      }
    );
  }, [b, x, T, E, O, k, v, S, C, _, y, o]);
}
function Sm(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!Gl()) return r(e);
  let a = Cm(e, r),
    o = !1;
  function s(r, s) {
    let c = Jl(),
      { disableCustomCode: l } = $y();
    if (l) return _(e, { ...r, ref: s });
    if (nu(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? _(yb.Provider, {
            value: n,
            children: _(Kl, {
              getErrorMessage: $l.bind(null, t, n),
              fallback: _(e, { ...r, ref: s }),
              children: _(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Wl(a.error), Wl($l(t, n)), Ul(a.error), !0)), _(e, { ...r, ref: s }));
    if (a.status === `success`)
      return _(yb.Provider, { value: n, children: _(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return p.forwardRef(s);
}
function Cm(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function wm(e) {
  let t = [];
  return (
    i.forEach(e, (e) => {
      y(e) && e.type === a ? t.push(...wm(e.props.children)) : e && t.push(e);
    }),
    t
  );
}
function Tm(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function Em(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = Tm(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c;) {
    let { start: e, end: n } = t[Je(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function Dm(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = Tm(e, t, a),
    c = e,
    l = !1;
  for (; !l;) {
    let { start: r, end: u } = t[Je(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c === e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function Om() {
  let e = C(FO);
  return (Hm(!!e, `useTicker must be used within a Ticker component`), e);
}
function km() {
  let e = C(IO);
  return (Hm(!!e, `useTickerItem must be used within a TickerItem`), e);
}
function Am(e, t) {
  return (t?.offsetWidth ?? n.innerWidth) - (e.offsetLeft + e.offsetWidth);
}
function jm(e, t) {
  return e === `y` ? zO : t === `ltr` ? RO : BO;
}
function Mm({
  children: e,
  offset: t,
  axis: n,
  listSize: r = 0,
  numItems: i = 0,
  itemIndex: a,
  cloneIndex: o,
  bounds: s,
  alignItems: c,
  reproject: l = !0,
  size: u = `auto`,
  safeMargin: d,
}) {
  let { start: f, end: p } = s,
    { visibleLength: m, direction: h, inset: g } = Om(),
    { sign: v } = jm(n, h),
    y = Ae(() => {
      if (!l) return 0;
      let e = t.get();
      if ((!f && !p) || !r) return 0;
      if (e * v + s.end <= -g - d) return r * v;
      if (d > 0) {
        let t = m - d - g;
        if (e * v + s.start >= t) return -r * v;
      }
      return 0;
    }),
    b = Ae(() => {
      let e = t.get(),
        n = y.get();
      return (!f && !p) || !r ? 0 : e * v + f + n * v;
    }),
    x =
      o === void 0
        ? { "aria-hidden": !1, "aria-posinset": a + 1, "aria-setsize": i }
        : { "aria-hidden": !0 },
    S = u === `fill`,
    C = c === `stretch` ? `100%` : `fit-content`,
    w = {
      className: o === void 0 ? `ticker-item` : `clone-item`,
      style: {
        flexGrow: 0,
        flexShrink: 0,
        position: `relative`,
        flexBasis: u === `fill` ? `100%` : void 0,
        display: S ? `grid` : void 0,
        gridTemplateColumns: S ? `1fr` : void 0,
        gridTemplateRows: S ? `1fr` : void 0,
        minWidth: S ? 0 : void 0,
        minHeight: S ? 0 : void 0,
        height: n === `x` ? C : void 0,
        width: n === `y` ? C : void 0,
        x: n === `x` ? y : 0,
        y: n === `y` ? y : 0,
      },
      ...x,
    };
  return _(IO.Provider, {
    value: { start: f, end: p, offset: b, projection: y, itemIndex: a, cloneIndex: o, props: w },
    children: u === `manual` ? e : _(Nm, { children: e }),
  });
}
function Nm({ children: e }) {
  let { props: t } = km();
  return _(he.li, { ...t, children: e });
}
function Pm(e, t, r, i, a) {
  let o = w(!1);
  d(() => {
    let s = e.current;
    if (!s) return;
    let c = !1,
      l = new AbortController(),
      u = { signal: l.signal },
      d = { ...u, capture: !0 },
      f = t === `x` ? `scrollLeft` : `scrollTop`,
      p = t === `x` ? `offsetLeft` : `offsetTop`,
      m = t === `x` ? `ArrowLeft` : `ArrowUp`,
      h = t === `x` ? `ArrowRight` : `ArrowDown`,
      g = [],
      _ = 0,
      v = () => {
        let e = g[_];
        e &&
          (e.focus({ preventScroll: !0 }),
          r.set(-e[p]),
          (s[f] = 0),
          Me.render(() => {
            s[f] = 0;
          }));
      },
      y = (e) => {
        if (e.key === `Tab`) {
          (e.preventDefault(), S());
          let t = Array.from(
            document.querySelectorAll(
              `a, button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`
            )
          ).filter(Im);
          t.sort(Fm);
          let n = t[e.shiftKey ? 0 : t.length - 1],
            r = e.shiftKey ? t.length - 1 : 0;
          if (s.contains(n)) {
            t[r].focus();
            return;
          } else {
            let n = t.indexOf(g[_]),
              r = e.shiftKey ? -1 : 1;
            for (let e = n; e < t.length && e >= 0; e += r) {
              let n = t[e];
              if (!s.contains(n)) {
                n.focus();
                return;
              }
            }
          }
          return;
        } else e.key === m ? _-- : e.key === h && _++;
        ((_ = Je(0, g.length, _)), v());
      },
      b = () => {
        o.current ||
          ((g = Array.from(
            s.querySelectorAll(
              `.ticker-item a, .ticker-item button, .ticker-item input, .ticker-item textarea, .ticker-item select, .ticker-item [tabindex]:not([tabindex="-1"]), .ticker-item [contenteditable="true"]`
            )
          ).filter(Im)),
          (_ = 0),
          g.length &&
            (a(!0),
            (o.current = !0),
            v(),
            n.addEventListener(`focus`, x, d),
            n.addEventListener(`blur`, x, d),
            s.addEventListener(`keydown`, y, u)));
      },
      x = (e) => {
        (!e.target || !(e.target instanceof HTMLElement) || !s.contains(e.target)) && S();
      },
      S = () => {
        o.current &&
          ((o.current = !1),
          a(!1),
          i.set(r.get()),
          n.removeEventListener(`focus`, x),
          n.removeEventListener(`blur`, x),
          s.removeEventListener(`keydown`, y));
      },
      C = (e) => {
        let { target: t } = e;
        Im(t) && (o.current || b());
      },
      w = () => {
        c || ((c = !0), s.addEventListener(`focus`, C, d), n.addEventListener(`pointermove`, T, u));
      },
      T = () => {
        c &&
          ((c = !1),
          s.removeEventListener(`focus`, C, !0),
          n.removeEventListener(`pointermove`, T, u));
      };
    return (
      n.addEventListener(`keydown`, w, u),
      s.addEventListener(
        `pointerdown`,
        (e) => {
          let t = e.target.closest(`[aria-hidden="true"]`);
          t && t.removeAttribute(`aria-hidden`);
        },
        u
      ),
      s.addEventListener(
        `scroll`,
        () => {
          ((s.scrollLeft = 0), (s.scrollTop = 0));
        },
        u
      ),
      () => {
        (l.abort(), S());
      }
    );
  }, []);
}
function Fm(e, t) {
  return e.tabIndex >= 1 && t.tabIndex >= 1
    ? e.tabIndex - t.tabIndex
    : e.tabIndex >= 1 && t.tabIndex <= 0
      ? -1
      : +(t.tabIndex >= 1 && e.tabIndex <= 0);
}
function Im(e) {
  return e instanceof HTMLElement;
}
function Lm(e) {
  return e.end - e.start;
}
function Rm(e) {
  return e[e.length - 1].end - e[0].start;
}
function zm(e, t, n) {
  let r = Rm(t),
    i = Math.max(...t.map(Lm)),
    a = 0,
    o = 0;
  for (; o < e;) ((o = (r + n) * (a + 1) - i), a++);
  return Math.max(a - 1, 0);
}
function Bm(
  {
    items: e,
    velocity: t = 50,
    hoverFactor: r = 1,
    gap: i = 10,
    axis: a = `x`,
    align: s = `center`,
    offset: u,
    isStatic: d = !1,
    itemSize: f = `auto`,
    overflow: p = !1,
    loop: m = !0,
    children: h,
    as: g = `div`,
    snap: v,
    safeMargin: y = 0,
    fade: b = 0,
    fadeTransition: x,
    pageTransition: S,
    ...C
  },
  T
) {
  let E = w(null),
    D = ee(T, E),
    O = w(null),
    [k, A] = o({
      direction: `ltr`,
      visibleLength: 0,
      inset: 0,
      totalItemLength: 0,
      containerLength: 0,
      itemPositions: [],
      isMeasured: !1,
      maxInset: null,
    }),
    j = VO[s] || s,
    { sign: M } = jm(a, k.direction);
  if (d) {
    let t = R(0);
    return _(FO.Provider, {
      value: { ...k, gap: i, clampOffset: ne, offset: t, renderedOffset: t },
      children: _(Vm, {
        containerProps: C,
        containerRef: D,
        children: h,
        gap: i,
        axis: a,
        alignItems: j,
        offset: t,
        renderedOffset: t,
        items: e,
        itemSize: f,
        state: k,
        overflow: p,
        safeMargin: y,
        isStatic: !0,
        as: g,
        fade: b,
        sign: M,
      }),
    });
  }
  let [N, P] = o(!1),
    F = R(1),
    te = R(0);
  u ??= te;
  let re = Ae(() =>
      k.direction === `rtl` && a === `x`
        ? Je(k.totalItemLength + i + k.inset, k.inset, u.get())
        : Je(-k.totalItemLength - i - k.inset, -k.inset, u.get())
    ),
    L = R(0),
    ie = N ? L : m ? re : u,
    ae = _e(E, { margin: `100px` }),
    oe = Ke(),
    se = ae && oe,
    ce = be(),
    le = () => {
      if (!E.current || !O.current) return;
      let e = n.getComputedStyle(E.current).direction,
        { measureItem: t, lengthProp: r, viewportLengthProp: i, getCumulativeInset: o } = jm(a, e),
        s = a === `x` ? `paddingLeft` : `paddingTop`,
        c = a === `x` ? `paddingRight` : `paddingBottom`,
        l = E.current,
        u = O.current.querySelectorAll(`.ticker-item`);
      if (!u.length) return;
      let d = !1,
        f = [];
      for (let e = 0; e < u.length; e++) {
        let n = t(u[e], l);
        f.push(n);
        let r = k.itemPositions[e];
        (!r || n.start !== r.start || n.end !== r.end) && (d = !0);
      }
      let h = Math.min(l[r], n[i]),
        g = p ? n[i] : h;
      y > 0 && (g += y * 2);
      let _ = Rm(f),
        v = n.getComputedStyle(l),
        b = parseInt(v[s] ?? 0),
        x = parseInt(v[c] ?? 0),
        S = p ? o(u[0]) : b,
        C = m === !1 ? Math.max(0, _ - h + b + x) : null;
      (g !== k.visibleLength ||
        _ !== k.totalItemLength ||
        S !== k.inset ||
        k.itemPositions.length !== f.length ||
        d) &&
        A({
          direction: e,
          visibleLength: g,
          itemPositions: f,
          totalItemLength: _,
          inset: S,
          containerLength: h,
          maxInset: C,
          isMeasured: !0,
        });
    };
  ve(() => {
    if (!se || !E.current) return;
    le();
    let e = p ? I(le) : void 0,
      t = I(E.current, le);
    return () => {
      (e?.(), t());
    };
  }, [e, se, p]);
  let ue = k.totalItemLength > 0;
  rt(
    ue && se && u === te && !ce
      ? (e, n) => {
          let r = (n / 1e3) * (t * M * F.get());
          u.set(u.get() - r);
        }
      : ne
  );
  let de = c(
      () => (!ue || !k.visibleLength ? 0 : zm(k.visibleLength, k.itemPositions, i)),
      [ue, k]
    ),
    fe = k.totalItemLength === 0 ? 0 : (k.totalItemLength + i) * (de + 1),
    z = [];
  if (m)
    for (let t = 0; t < de; t++) {
      let n = [];
      e.forEach((r, o) => {
        let s = k.itemPositions[o],
          c = (k.totalItemLength + i) * (t + 1),
          l = s ? { start: s.start + c, end: s.end + c } : UO;
        n.push(
          _(
            Mm,
            {
              offset: ie,
              axis: a,
              listSize: fe,
              itemIndex: o,
              cloneIndex: o,
              bounds: l,
              alignItems: j,
              size: f,
              safeMargin: y,
              numItems: e.length,
              children: r,
            },
            `clone-${t}-${o}`
          )
        );
      });
      let r = `ticker-group-${t}`;
      z.push(_(qe, { id: r, children: n }, r));
    }
  Pm(E, a, L, u, P);
  let pe = l((e) => (k.maxInset === null ? e : Ne(-k.maxInset, 0, e)), [k.maxInset]);
  return _(FO.Provider, {
    value: { ...k, gap: i, clampOffset: pe, offset: u, renderedOffset: ie },
    children: _(Vm, {
      containerProps: C,
      children: h,
      containerRef: D,
      listRef: O,
      gap: i,
      axis: a,
      alignItems: j,
      isMeasured: ue,
      isInView: se,
      offset: u,
      renderedOffset: ie,
      items: e,
      itemSize: f,
      clonedItems: z,
      clampOffset: pe,
      snap: v,
      safeMargin: y,
      onPointerEnter: () => {
        je(F, r);
      },
      onPointerLeave: () => {
        je(F, 1);
      },
      totalListSize: fe,
      state: k,
      overflow: p,
      loop: m,
      as: g,
      fade: b,
      sign: M,
      fadeTransition: x,
      pageTransition: S,
    }),
  });
}
function Vm({
  children: e,
  containerProps: t,
  containerRef: n,
  listRef: r,
  gap: i,
  axis: a,
  alignItems: o,
  isMeasured: s,
  isInView: l,
  isStatic: u,
  items: d,
  offset: f,
  clonedItems: p,
  clampOffset: m,
  renderedOffset: h,
  onPointerEnter: g,
  onPointerLeave: v,
  totalListSize: y,
  itemSize: b,
  overflow: x,
  state: S,
  safeMargin: C,
  snap: E,
  loop: D,
  as: k,
  fade: A,
  sign: j,
  fadeTransition: M = KO,
  pageTransition: N,
}) {
  let P = c(() => he.create(k), [k]),
    F = {},
    { maxInset: I } = S;
  I !== null &&
    (F =
      a === `x`
        ? j > 0
          ? { left: I * -1, right: 0 }
          : { right: I, left: 0 }
        : { top: I * -1, bottom: 0 });
  let {
      drag: ee,
      _dragX: te,
      _dragY: ne,
      dragMomentum: re = !1,
      onDragEnd: L,
      onPointerDown: ie,
      ...ae
    } = t,
    oe = a === `x` ? te : ne,
    ce = w(null),
    le = () => {
      ce.current &&= (ce.current.stop(), null);
    };
  !L &&
    ee &&
    oe &&
    ((ie = () => {
      (oe.jump(f.get()), le());
    }),
    (L = (e, { velocity: t }) => {
      let n = f.get();
      (le(),
        Me.postRender(() => {
          let e = n + t[a] * (E ? 0.3 : 0.8);
          if (E)
            if (t[a] < 0) e = -Em(-n, S.itemPositions, i, -e);
            else if (t[a] > 0) e = -Dm(-n, S.itemPositions, i, -e, S.containerLength);
            else {
              let t = -Em(-n, S.itemPositions, i, -n),
                r = -Dm(-n, S.itemPositions, i, -n, S.containerLength);
              e = Math.abs(n - t) < Math.abs(n - r) ? t : r;
            }
          let r = D
            ? {}
            : j > 0
              ? { max: 0, min: F[a === `x` ? `left` : `top`] }
              : { min: 0, max: F.right };
          ce.current = je(
            oe,
            m(e * j) * j,
            E
              ? N
              : {
                  type: `inertia`,
                  velocity: t[a],
                  modifyTarget: () => e,
                  bounceDamping: 40,
                  bounceStiffness: 400,
                  ...r,
                }
          );
        }));
    }));
  let ue = R(+!D),
    de = R(0),
    fe = jm(a, S.direction),
    z = typeof A == `number` ? `px` : ``,
    pe = Ae(
      () =>
        `linear-gradient(to ${fe.direction}, rgba(0,0,0,${ue.get()}) 0px, black ${A}${z}, black calc(100% - ${A}${z}), rgba(0,0,0,${de.get()}) 100%)`
    ),
    me = A ? { maskImage: pe, WebkitMaskImage: pe } : {},
    ge = w({ start: !0, end: !1 });
  return (
    se(h, `change`, (e) => {
      if (I === null) return;
      let t = I * -1;
      ((e *= j),
        e < 0
          ? ge.current.start && (je(ue, 0, M), (ge.current.start = !1))
          : ge.current.start || (je(ue, 1, M), (ge.current.start = !0)),
        e > t
          ? ge.current.end && (je(de, 0, M), (ge.current.end = !1))
          : ge.current.end || (je(de, 1, M), (ge.current.end = !0)));
    }),
    T(O, {
      children: [
        _(P, {
          ...ae,
          ref: n,
          style: {
            overflowX: !x && a === `x` ? `clip` : void 0,
            overflowY: !x && a === `y` ? `clip` : void 0,
            ...WO,
            ...t.style,
            ...me,
          },
          onPointerEnter: g,
          onPointerLeave: v,
          drag: ee,
          _dragX: te,
          _dragY: ne,
          dragConstraints: F,
          dragMomentum: re,
          onPointerDown: ie,
          onDragEnd: L,
          children: T(he.ul, {
            ref: r,
            style: {
              ...GO,
              flexVisas: a === `x` ? `row` : `column`,
              gap: `${i}px`,
              x: a === `x` ? h : 0,
              y: a === `y` ? h : 0,
              opacity: s || u ? 1 : 0,
              alignItems: o,
              willChange: s && l ? `transform` : void 0,
              width: `100%`,
              height: `100%`,
              maxHeight: `100%`,
              maxWidth: `100%`,
            },
            children: [
              d.map((e, t) =>
                _(
                  Mm,
                  {
                    axis: a,
                    offset: h,
                    listSize: y,
                    itemIndex: t,
                    bounds: S.itemPositions[t] ?? UO,
                    alignItems: o,
                    size: b,
                    reproject: D,
                    safeMargin: C,
                    numItems: d.length,
                    children: e,
                  },
                  `original-` + t
                )
              ),
              p || null,
            ],
          }),
        }),
        ` `,
        e,
      ],
    })
  );
}
function Hm(e, t) {
  if (!e) throw Error(t);
}
function Um(e, t) {
  if (G(e)) return e;
  if (!B(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0];
  if (t === `x` && i) return Wm(parseInt(i));
  if (t === `y` && r) return Wm(parseInt(r));
}
function Wm(e) {
  return Number.isNaN(e) ? void 0 : e;
}
function Gm(e) {
  return typeof HTMLVideoElement < `u` && e instanceof HTMLVideoElement;
}
function Km(e) {
  if (typeof ImageBitmap < `u` && e instanceof ImageBitmap) {
    e.close();
    return;
  }
  Gm(e) && (e.pause(), e.removeAttribute(`src`), e.load());
}
function qm(e) {
  for (let t of Object.values(e)) t.type === `sampler2D` && Km(t.value);
}
function Jm(e, t) {
  return new Promise((r, i) => {
    let a = document.createElement(`video`);
    ((a.crossOrigin = `anonymous`),
      (a.muted = !0),
      (a.loop = !0),
      a.setAttribute(`playsinline`, ``),
      (a.preload = `auto`));
    let o = `Video texture load aborted`;
    if (t?.aborted) {
      (Km(a), i(Error(o)));
      return;
    }
    let s = () => d(o),
      c = () => d(`Failed to load video texture from "${e}"`),
      l = n.setTimeout(() => d(`Timed out loading video texture from "${e}"`), $O);
    function u() {
      (n.clearTimeout(l), t?.removeEventListener(`abort`, s), a.removeEventListener(`error`, c));
    }
    function d(e) {
      (u(), Km(a), i(Error(e)));
    }
    (t?.addEventListener(`abort`, s, { once: !0 }),
      a.addEventListener(
        `loadeddata`,
        () => {
          (u(), r(a));
        },
        { once: !0 }
      ),
      a.addEventListener(`error`, c, { once: !0 }),
      (a.src = e));
  });
}
function Ym(e, t) {
  let n = e.createBuffer();
  if (!n) throw Error(`Failed to create buffer`);
  return (e.bindBuffer(e.ARRAY_BUFFER, n), e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), n);
}
function Xm(e, t, n, r) {
  let i = e.getAttribLocation(t, `a_position`);
  i >= 0 &&
    (e.bindBuffer(e.ARRAY_BUFFER, n),
    e.enableVertexAttribArray(i),
    e.vertexAttribPointer(i, 2, e.FLOAT, !1, 0, 0));
  let a = e.getAttribLocation(t, `a_texCoord`);
  a >= 0 &&
    (e.bindBuffer(e.ARRAY_BUFFER, r),
    e.enableVertexAttribArray(a),
    e.vertexAttribPointer(a, 2, e.FLOAT, !1, 0, 0));
}
function Zm(e, t) {
  return {
    [nk.time.name]: e.getUniformLocation(t, nk.time.name),
    [nk.resolution.name]: e.getUniformLocation(t, nk.resolution.name),
    [nk.deltaTime.name]: e.getUniformLocation(t, nk.deltaTime.name),
    [nk.pixelRatio.name]: e.getUniformLocation(t, nk.pixelRatio.name),
    [nk.mousePosition.name]: e.getUniformLocation(t, nk.mousePosition.name),
    [nk.mousePointerDown.name]: e.getUniformLocation(t, nk.mousePointerDown.name),
    [nk.mouseHover.name]: e.getUniformLocation(t, nk.mouseHover.name),
  };
}
function Qm(e, t) {
  let n = e.createTexture();
  if (!n) throw Error(`Failed to create buffer texture`);
  return (
    e.bindTexture(e.TEXTURE_2D, n),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
    n
  );
}
function $m(e, t) {
  let n = e.createFramebuffer();
  if (!n) throw Error(`Failed to create buffer framebuffer`);
  return (
    e.bindFramebuffer(e.FRAMEBUFFER, n),
    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0),
    n
  );
}
function eh(e, t, n) {
  let r = e.checkFramebufferStatus(e.FRAMEBUFFER);
  if (r !== e.FRAMEBUFFER_COMPLETE)
    throw Error(
      `Shader buffer "${t}" framebuffer is incomplete (format: "${n}", status: 0x${r.toString(16)}).`
    );
}
function th(e, t) {
  switch (t) {
    case `rgba8`:
      return { internalFormat: e.RGBA8, uploadFormat: e.RGBA, pixelType: e.UNSIGNED_BYTE };
    case `r8`:
      return { internalFormat: e.R8, uploadFormat: e.RED, pixelType: e.UNSIGNED_BYTE };
    case `rg16f`:
      return { internalFormat: e.RG16F, uploadFormat: e.RG, pixelType: e.HALF_FLOAT };
    case `rgba16f`:
      return { internalFormat: e.RGBA16F, uploadFormat: e.RGBA, pixelType: e.HALF_FLOAT };
    case `rgba32f`:
      return { internalFormat: e.RGBA32F, uploadFormat: e.RGBA, pixelType: e.FLOAT };
  }
}
function nh(e) {
  return e === `rg16f` || e === `rgba16f` || e === `rgba32f`;
}
function rh(e) {
  return e.startsWith(ek) && e.length > ek.length;
}
function ih(e) {
  return rh(e) && e.endsWith(ok);
}
function ah(e) {
  return rh(e) && e.endsWith(sk);
}
function oh(e) {
  return rh(e) && e.endsWith(ck);
}
function sh(e) {
  return e.replace(lk, `_`);
}
function ch(e) {
  return `${ek}${sh(e)}`;
}
function lh(e) {
  return `${e}${sk}`;
}
function uh(e) {
  return `${ek}${sh(e)}${ok}`;
}
function dh(e) {
  return `${ek}${sh(e)}${ck}`;
}
function fh(e) {
  return `NUM_${sh(e)
    .replace(/[a-z0-9](?=[A-Z])/g, `$&_`)
    .toUpperCase()}`;
}
function ph(e) {
  switch (e) {
    case `number`:
    case `enum`:
      return `float`;
    case `boolean`:
      return `float`;
    case `color`:
      return `vec4`;
    case `responsiveimage`:
    case `file`:
      return `sampler2D`;
    default:
      W(e);
  }
}
function mh(e = {}) {
  let { propertyControls: t, heightmapSource: n, bufferNames: r } = e,
    i = [uk, dk, ``, fk, pk],
    a = t ? Object.values(t) : [];
  if (a.length > 0) {
    if (a.some((e) => e?.type === `array`)) {
      i.push(``);
      for (let e in t) {
        let n = t[e];
        if (!(!n || n.type !== `array`)) {
          if (n.control?.type !== `color`)
            throw Error(
              `Shader array control "${e}" is not supported. Only color arrays may be defined.`
            );
          if (!V(n.maxCount)) throw Error(`Shader array control "${e}" must have a maxCount.`);
          i.push(`#define ${fh(e)} ${n.maxCount}`);
        }
      }
    }
    i.push(``);
    for (let e in t) {
      let n = t[e];
      if (n)
        if (n.type === `array`) {
          let t = ch(e);
          (i.push(`uniform vec4 ${t}[${fh(e)}];`), i.push(`uniform int ${lh(t)};`));
        } else {
          let t = ph(n.type);
          i.push(`uniform ${t} ${ch(e)};`);
        }
    }
  }
  if ((n && i.push(`uniform sampler2D ${uh(n)};`), r && r.length > 0)) {
    i.push(``);
    for (let e of r) i.push(`uniform sampler2D ${dh(e)};`);
  }
  i.push(``);
  for (let e of Object.values(nk)) i.push(`uniform ${e.glslType} ${e.name};`);
  return (
    i.push(``),
    i.join(`
`)
  );
}
function hh(e, t, n = {}) {
  let r = mh(n);
  return t
    ? `${r}${t}
${e}`
    : r + e;
}
function gh(e, t, n) {
  if (e)
    return e.map((e) => ({
      uniformName: dh(e.name),
      fragment: hh(e.fragment, t, n),
      resolutionScale: e.resolutionScale ?? mk,
      format: e.format ?? hk,
    }));
}
function _h(e) {
  vh(e);
  let t = e.buffers ? e.buffers.map((e) => e.name) : void 0,
    n = hh(e.fragment, e.common, {
      propertyControls: e.propertyControls,
      heightmapSource: e.heightmapSource,
      bufferNames: t,
    }),
    r = gh(e.buffers, e.common, {
      propertyControls: e.propertyControls,
      heightmapSource: e.heightmapSource,
      bufferNames: t,
    });
  return { ...e, fragment: n, buffers: r, [gk]: !0 };
}
function vh(e) {
  let t = new Map();
  if (e.propertyControls)
    for (let n in e.propertyControls) {
      if (rh(n) || n === ek)
        throw Error(`Property control key "${n}" must not start with "${ek}".`);
      let e = ch(n);
      if (ih(e)) throw Error(`Property control key "${n}" must not end with "_heightmap".`);
      if (ah(e)) throw Error(`Property control key "${n}" must not end with "_length".`);
      if (oh(e)) throw Error(`Property control key "${n}" must not end with "_buffer".`);
      let r = t.get(e);
      if (r !== void 0)
        throw Error(
          `Property control keys "${r}" and "${n}" both resolve to the same uniform "${e}".`
        );
      t.set(e, n);
    }
  if (e.heightmapSource) {
    let t = e.propertyControls?.[e.heightmapSource];
    if (!t || t.type !== `responsiveimage`)
      throw Error(
        `heightmapSource "${e.heightmapSource}" must reference a ResponsiveImage property control.`
      );
  }
  if (e.buffers)
    for (let n of e.buffers) {
      if (rh(n.name)) throw Error(`Shader buffer name "${n.name}" must not start with "${ek}".`);
      let e = dh(n.name),
        r = t.get(e);
      if (r !== void 0)
        throw Error(
          r === n.name
            ? `Duplicate shader buffer name "${n.name}".`
            : `Shader buffer names "${r}" and "${n.name}" both resolve to the same uniform "${e}".`
        );
      if (
        (t.set(e, n.name),
        n.resolutionScale !== void 0 &&
          (!V(n.resolutionScale) || n.resolutionScale <= 0 || n.resolutionScale > 1))
      )
        throw Error(
          `Shader buffer "${n.name}" has invalid resolutionScale ${n.resolutionScale}. Must be in the range (0, 1].`
        );
      if (n.format !== void 0 && !tk.has(n.format))
        throw Error(
          `Shader buffer "${n.name}" has invalid format "${n.format}". Must be one of: ${[...tk].join(`, `)}.`
        );
    }
}
function yh(e, t = 0) {
  let n = e.indexOf(`var(`, t);
  if (n === -1) return null;
  let r = n + 4,
    i = 1,
    a;
  for (let t = r; t < e.length; t++)
    if (e[t] === `(`) i++;
    else if (e[t] === `)`) {
      if ((i--, i === 0)) return { start: n, end: t + 1, commaIndex: a };
    } else a === void 0 && e[t] === `,` && (a = t);
  return null;
}
function bh(e, t) {
  if (!t) return {};
  let { start: n, end: r, commaIndex: i } = t,
    a = e.substring(r).trim();
  return i
    ? {
        customProperty: e.substring(n + 4, i),
        fallback: e.substring(i + 1, r - 1).trim(),
        metadata: a,
      }
    : { customProperty: e.substring(n + 4, r - 1), metadata: a };
}
function xh(e) {
  return bh(e, yh(e));
}
function Sh(e, t) {
  if (e.size < t) return;
  let n = e.keys().next().value;
  n !== void 0 && e.delete(n);
}
function Ch(e, t) {
  if (!Oh(e)) return;
  let n = t?.();
  if (!n) return wh(e);
  let r = xk.generate(n, () => wh(e));
  if (r instanceof HTMLCanvasElement) return r;
}
function wh(e) {
  let t = Dh(e);
  if (!t) return;
  let n = Sk / Math.min(t.width, t.height),
    r = Sk * Sk,
    i = t.width * n * (t.height * n);
  i > r && (n *= Math.sqrt(r / i));
  let a = Math.max(1, Math.round(t.width * n)),
    o = Math.max(1, Math.round(t.height * n)),
    s = document.createElement(`canvas`);
  ((s.width = a), (s.height = o));
  let c = s.getContext(`2d`);
  if (!c) return;
  c.drawImage(t.source, 0, 0, a, o);
  let l = c.getImageData(0, 0, a, o).data,
    u = a * o,
    d = new Uint8Array(u);
  for (let e = 0; e < u; e++) d[e] = +((l[e * 4 + 3] ?? 0) > 0);
  let f = new Uint8Array(u);
  for (let e = 0; e < u; e++) {
    if (d[e] === 0) continue;
    let t = e % a,
      n = Math.floor(e / a);
    if (t === 0 || t === a - 1 || n === 0 || n === o - 1) continue;
    let r = !1;
    for (let e = -1; e <= 1 && !r; e++)
      for (let i = -1; i <= 1 && !r; i++)
        (i === 0 && e === 0) || (d[(n + e) * a + (t + i)] === 0 && (r = !0));
    r || (f[e] = 1);
  }
  let p = Th(f, a, o),
    m = 0;
  for (let e = 0; e < u; e++) {
    let t = p[e] ?? 0;
    t > m && (m = t);
  }
  let h = document.createElement(`canvas`);
  ((h.width = a), (h.height = o));
  let g = h.getContext(`2d`);
  if (!g) return;
  let _ = g.createImageData(a, o);
  for (let e = 0; e < u; e++) {
    let t = m > 0 ? (p[e] ?? 0) / m : 0;
    ((_.data[e * 4] = Math.round(t * 255)),
      (_.data[e * 4 + 1] = 255 - (l[e * 4 + 3] ?? 0)),
      (_.data[e * 4 + 2] = d[e] ? 255 : 0),
      (_.data[e * 4 + 3] = 255));
  }
  g.putImageData(_, 0, 0);
  let v = document.createElement(`canvas`);
  ((v.width = t.width), (v.height = t.height));
  let y = v.getContext(`2d`);
  if (y) return ((y.imageSmoothingEnabled = !0), y.drawImage(h, 0, 0, t.width, t.height), v);
}
function Th(e, t, n) {
  let r = t * n,
    i = new Float32Array(r),
    a = 1.95,
    o = 0.01,
    s = [],
    c = [];
  for (let i = 0; i < r; i++) {
    if (e[i] === 0) continue;
    let r = i % t,
      a = Math.floor(i / t);
    ((r + a) % 2 == 0 ? s : c).push(
      i,
      a > 0 ? i - t : -1,
      a < n - 1 ? i + t : -1,
      r > 0 ? i - 1 : -1,
      r < t - 1 ? i + 1 : -1
    );
  }
  let l = new Int32Array(s),
    u = new Int32Array(c),
    d = 1 - a,
    f = a / 4;
  for (let e = 0; e < 50; e++) (Eh(l, i, d, f, o), Eh(u, i, d, f, o));
  return i;
}
function Eh(e, t, n, r, i) {
  for (let a = 0; a < e.length; a += 5) {
    let o = e[a] ?? 0,
      s = e[a + 1] ?? -1,
      c = e[a + 2] ?? -1,
      l = e[a + 3] ?? -1,
      u = e[a + 4] ?? -1,
      d = s >= 0 ? (t[s] ?? 0) : 0,
      f = c >= 0 ? (t[c] ?? 0) : 0,
      p = l >= 0 ? (t[l] ?? 0) : 0,
      m = u >= 0 ? (t[u] ?? 0) : 0;
    t[o] = n * (t[o] ?? 0) + r * (i + d + f + p + m);
  }
}
function Dh(e) {
  if (e instanceof HTMLImageElement) {
    let t = e.naturalWidth,
      n = e.naturalHeight;
    return t > 0 && n > 0 ? { source: e, width: t, height: n } : void 0;
  }
  if (e instanceof HTMLCanvasElement)
    return e.width > 0 && e.height > 0 ? { source: e, width: e.width, height: e.height } : void 0;
}
function Oh(e) {
  return e instanceof HTMLImageElement || e instanceof HTMLCanvasElement;
}
function kh(e) {
  (e.controller.abort(), e.promise.then(Km, () => {}));
}
function Ah(e, t) {
  let n = xh(e);
  if (!n.customProperty) return e;
  if (t) {
    let e = getComputedStyle(t).getPropertyValue(n.customProperty).trim();
    if (e) return kx.srgbFromValue(e);
  }
  return kx.srgbFromValue(n.fallback ?? e);
}
function jh(e, t) {
  let n = Ah(e, t),
    r = J.toRgb(J(n));
  return [r.r / 255, r.g / 255, r.b / 255, r.a];
}
function Mh(e, t, n) {
  return Ph(e)
    ? n
      ? t?.aborted
        ? Promise.reject(Error(`Texture load aborted`))
        : Nh(Tk.acquire(n, e), t)
      : Jm(e, t)
    : Nh(
        xk.load(e, () => Lh(e)),
        t
      );
}
function Nh(e, t) {
  return t
    ? new Promise((n, r) => {
        let i = () => r(Error(`Texture load aborted`));
        if (t.aborted) {
          i();
          return;
        }
        (t.addEventListener(`abort`, i, { once: !0 }),
          e.then(
            (e) => {
              (t.removeEventListener(`abort`, i), n(e));
            },
            (e) => {
              (t.removeEventListener(`abort`, i), r(e));
            }
          ));
      })
    : e;
}
function Ph(e) {
  return Bh(e, Ak);
}
function Fh(e) {
  let { value: t } = e;
  if (B(t)) return t;
  if (H(t) && `src` in t) return t.src;
}
function Ih(e) {
  let t = new Set();
  for (let n of Object.values(e)) n.type === `file` && Ph(n.value) && t.add(n.value);
  return t;
}
function Lh(e) {
  return new Promise((t, n) => {
    let r = new Image();
    ((r.crossOrigin = `anonymous`),
      (r.onload = () => t(zh(r) ?? r)),
      (r.onerror = (t) => {
        let r =
          t instanceof ErrorEvent && t.message
            ? `Failed to load texture from "${e}": ${t.message}`
            : `Failed to load texture from "${e}"`;
        n(Error(r));
      }),
      (r.src = e));
  });
}
function Rh(e) {
  if (e instanceof HTMLImageElement) return e.src || void 0;
  if (e instanceof HTMLCanvasElement) return e.dataset.src || void 0;
}
function zh(e) {
  if (!Vh(e.src)) return;
  let t = e.naturalWidth,
    n = e.naturalHeight;
  if (t <= 0 || n <= 0) return;
  let r = Mk / Math.max(t, n),
    i = Math.max(1, Math.round(t * r)),
    a = Math.max(1, Math.round(n * r)),
    o = document.createElement(`canvas`);
  ((o.width = i), (o.height = a));
  let s = o.getContext(`2d`);
  if (s) return (s.drawImage(e, 0, 0, i, a), (o.dataset.src = e.src), o);
}
function Bh(e, t) {
  try {
    let n = new URL(e, `https://placeholder`).pathname.toLowerCase();
    return t.some((e) => n.endsWith(e));
  } catch {
    let n = e.toLowerCase();
    return t.some((e) => n.includes(e));
  }
}
function Vh(e) {
  return Bh(e, [jk]);
}
async function Hh(e, t, n, r) {
  switch (e.type) {
    case `number`:
    case `enum`:
      return { type: `float`, value: e.value };
    case `boolean`:
      return { type: `boolean`, value: e.value };
    case `color`:
      return { type: `vec4`, value: jh(e.value, t) };
    case `responsiveimage`:
    case `file`: {
      let t = Fh(e);
      return t ? { type: `sampler2D`, value: await Mh(t, n, r) } : void 0;
    }
    case `array`:
      return { type: `vec4[]`, value: e.value.map((e) => jh(e, t)) };
    default:
      W(e);
  }
}
async function Uh(e, t, n, r) {
  let i = {},
    a = n ? ch(n) : void 0,
    o = t?.current ?? null;
  try {
    for (let [s, c] of Object.entries(e)) {
      let e = await Hh(c, o, r, t);
      if (
        e &&
        ((i[s] = e),
        c.type === `array` && (i[lh(s)] = { type: `int`, value: c.value.length }),
        n && a && s === a && e.type === `sampler2D`)
      ) {
        let t = Ch(e.value, () => Rh(e.value));
        t && (i[uh(n)] = { type: `sampler2D`, value: t });
      }
    }
  } catch (e) {
    throw (t || qm(i), e);
  }
  return i;
}
function Wh(e) {
  return typeof e == `number` ? e : e === `performance` ? 0.75 : e === `consistent` ? 0 : 1;
}
function Gh(e, t, n) {
  let r = e * Dk;
  return { currentTime: r, elapsedTime: r - t, deltaTime: n === t ? 1 / 60 : r - n };
}
function Kh() {
  return C(zk);
}
function qh(e) {
  let t = w(e);
  return (Ft(t.current, e) || (t.current = e), t.current);
}
function Jh(e, t, n, r, i) {
  let [a, s] = o({}),
    [c, l] = o(e === void 0),
    u = qh(e);
  return (
    d(() => () => Tk.releaseAll(t), [t]),
    d(() => {
      if (!u) {
        (Tk.releaseAll(t),
          A(() => {
            (s({}), l(!0));
          }));
        return;
      }
      let e = new AbortController();
      return (
        Uh(u, t, n, e.signal)
          .then((n) => {
            e.signal.aborted ||
              (Tk.keepOnly(t, Ih(u)),
              A(() => {
                (s(n), l(!0));
              }),
              r?.());
          })
          .catch(() => {
            e.signal.aborted || (Tk.releaseAll(t), i?.());
          }),
        () => e.abort()
      );
    }, [u, t, n, r, i]),
    { resolvedUniforms: a, haveUniformsResolved: c }
  );
}
function Yh(e, t) {
  (d(() => {
    let n = e.current;
    if (!n) return;
    let r = new ResizeObserver(t);
    return (
      r.observe(n),
      () => {
        r.disconnect();
      }
    );
  }, [e, t]),
    Xh(t));
}
function Xh(e) {
  d(() => {
    let t = matchMedia(`(resolution: ${n.devicePixelRatio}dppx)`),
      r = () => {
        (e(),
          t.removeEventListener(`change`, r),
          (t = matchMedia(`(resolution: ${n.devicePixelRatio}dppx)`)),
          t.addEventListener(`change`, r));
      };
    return (
      t.addEventListener(`change`, r),
      () => {
        t.removeEventListener(`change`, r);
      }
    );
  }, [e]);
}
function Zh(e, t, n, i, a, s, c, u) {
  let d = ye() === !0 || Y.current() === Y.export,
    f = c || d,
    p,
    m,
    h,
    g;
  if (e !== null) {
    let r = e !== Rk.noSlot;
    ((p = !r), (m = (s ?? !0) && t && !n && !d && !u), (h = r && !m), (g = `instant`));
  } else ((p = a === `fallback` || !i), (m = (s ?? !0) && !d && !u), (h = !m), (g = a));
  let [_, v] = o(!1),
    y = l(() => {
      A(() => v(!0));
    }, []);
  (r(() => {
    _ && t && A(() => v(!1));
  }, [_, t]),
    _ && (p = !0));
  let [b, x] = o(!1),
    S = l(() => {
      A(() => x(!0));
    }, []),
    C = l(() => {
      A(() => x(!1));
    }, []),
    T = w(t);
  return (
    r(() => {
      let e = !T.current && t;
      ((T.current = t), e && b && C());
    }, [b, t, C]),
    b && (p = !0),
    a !== `fallback` && c && !_ && !b && i && e !== Rk.noSlot && (p = !1),
    {
      isFallbackOnly: p,
      effectiveAnimated: m,
      effectiveSingleFrame: h,
      effectiveMode: g,
      shouldSkipFallbackOverlay: f,
      onContextLost: y,
      onUniformResolutionSucceeded: C,
      onUniformResolutionFailed: S,
    }
  );
}
function Qh(e = !0) {
  let [t, r] = o(!e);
  return (
    xb(() => {
      if (!e) {
        A(() => r(!0));
        return;
      }
      A(() => r(!1));
      let t = n.setTimeout(() => {
        A(() => r(!0));
      }, Bk);
      return () => {
        clearTimeout(t);
      };
    }, [e]),
    t
  );
}
function $h(e, t) {
  for (let n of Object.values(e)) n.type === `sampler2D` && Gm(n.value) && t(n.value);
}
function eg(e, t, n) {
  let i = w(!1);
  r(() => {
    let r = t && !i.current;
    i.current = t;
    let a = !1;
    ($h(e, (e) => {
      if (t) {
        (r && (e.currentTime = 0), e.play().catch(() => {}));
        return;
      }
      (e.pause(),
        e.currentTime !== 0 &&
          (e.addEventListener(`seeked`, () => n(), { once: !0 }), (e.currentTime = 0), (a = !0)));
    }),
      a && n());
  }, [e, t, n]);
}
function tg({
  vertexShader: e = Ik,
  fragmentShader: t = Lk,
  animated: i = !0,
  resolutionScale: a,
  uniforms: s,
  onError: c,
  onReady: u,
  onContextLost: f,
  onUniformResolutionSucceeded: p,
  onUniformResolutionFailed: m,
  singleFrame: h = !1,
  heightmapSource: g,
  mouseDataRef: v,
  buffers: y,
}) {
  let b = w(null),
    x = w(null),
    S = w(0),
    C = w(0),
    T = w(0),
    E = w(null),
    [D, O] = o(!1),
    k = w(u);
  r(() => {
    k.current = u;
  }, [u]);
  let j = w(f);
  r(() => {
    j.current = f;
  }, [f]);
  let { resolvedUniforms: M, haveUniformsResolved: N } = Jh(s, b, g, p, m),
    P = w(M),
    F = w(i);
  r(() => {
    F.current = i;
  }, [i]);
  let I = w(h);
  r(() => {
    I.current = h;
  }, [h]);
  let ee = w(!1),
    te = l(() => {
      ee.current ||
        !N ||
        ((ee.current = !0),
        k.current?.(),
        (E.current = requestAnimationFrame(() => {
          ((E.current = null), performance.mark?.(`shader_rendered`));
        })));
    }, [N]),
    ne = w({ width: 0, height: 0, dpr: 0 }),
    re = w({ width: 0, height: 0, dpr: 0 }),
    L = l(() => {
      let e = b.current;
      e && (ne.current = { width: e.offsetWidth, height: e.offsetHeight, dpr: n.devicePixelRatio });
    }, []),
    R = l(() => {
      let e = x.current;
      if (!e) return;
      let t = ne.current,
        n = re.current;
      (t.width === n.width && t.height === n.height && t.dpr === n.dpr) ||
        (e.resize(), (re.current = { ...t }));
    }, []),
    ie = l(
      (e) => {
        let t = x.current;
        if (!t) return;
        if (I.current) {
          if (!N) return;
          (R(), t.render(0, 0, P.current, v?.current ?? kk), te());
          return;
        }
        if (!N) {
          S.current = requestAnimationFrame(ie);
          return;
        }
        (ee.current || ((C.current = e * Dk), (T.current = C.current)), R());
        let { currentTime: n, elapsedTime: r, deltaTime: i } = Gh(e, C.current, T.current);
        ((T.current = n),
          t.render(r, i, P.current, v?.current ?? kk),
          te(),
          !I.current && F.current && (S.current = requestAnimationFrame(ie)));
      },
      [N, te, v, R]
    ),
    ae = l(() => {
      let e = x.current;
      !e || !N || (R(), e.render(0, 0, P.current, v?.current ?? kk), te());
    }, [N, v, te, R]);
  (r(() => {
    ((P.current = M), I.current && x.current && ae());
  }, [M, ae]),
    eg(M, i && !h && N && D, ae),
    d(() => {
      let n = b.current;
      if (!(!n || !N)) {
        ee.current = !1;
        try {
          let r = new ak(n, e, t, Wh(a), j.current, y);
          ((x.current = r),
            (re.current = { width: 0, height: 0, dpr: 0 }),
            L(),
            R(),
            (C.current = performance.now() * Dk),
            (T.current = C.current),
            I.current ? ae() : (S.current = requestAnimationFrame(ie)),
            A(() => O(!0)));
        } catch (e) {
          (A(() => O(!1)), c && e instanceof Error && c(e));
        }
        return () => {
          (cancelAnimationFrame(S.current),
            E.current !== null && cancelAnimationFrame(E.current),
            x.current?.dispose(),
            (x.current = null));
        };
      }
    }, [e, t, a, ie, ae, c, y, N, L, R]));
  let oe = w(i),
    se = w(h);
  return (
    d(() => {
      let e = i && !oe.current,
        t = !h && se.current;
      ((e || t) &&
        x.current &&
        ((C.current = performance.now() * Dk),
        (T.current = C.current),
        (S.current = requestAnimationFrame(ie))),
        (oe.current = i),
        (se.current = h));
    }, [i, h, ie]),
    Yh(
      b,
      l(() => {
        let e = x.current;
        if (!e || !N) return;
        if ((L(), I.current)) {
          ae();
          return;
        }
        R();
        let {
          currentTime: t,
          elapsedTime: n,
          deltaTime: r,
        } = Gh(performance.now(), C.current, T.current);
        ((T.current = t), e.render(n, r, P.current, v?.current ?? kk));
      }, [N, v, ae, L, R])
    ),
    _(`canvas`, { ref: b, style: Vk, draggable: !1 })
  );
}
function ng() {
  ((Wk = re(0)), (Gk = re(0)));
  let e = 0,
    t = 0;
  function r() {
    !Wk || !Gk || (Wk.set(e), Gk.set(t));
  }
  n !== void 0 &&
    (n.addEventListener(
      `pointermove`,
      ig((n) => {
        ((e = n.clientX), (t = n.clientY), Me.update(r));
      })
    ),
    n.addEventListener(`dragover`, (n) => {
      ((e = n.clientX), (t = n.clientY), Me.update(r));
    }));
}
function rg(e = !0) {
  return (e && !Wk && ng(), { x: Wk, y: Gk });
}
function ig(e) {
  return (t) => {
    t.pointerType === `mouse` && e(t);
  };
}
function ag(e) {
  let t = e ?? Kk;
  return t.duration === void 0 ? t : { ...t, duration: t.duration * 1e3 };
}
function og(e, t, n) {
  return !e || e.width <= 0 || e.height <= 0
    ? [Ok, Ok]
    : [(t - e.left) / e.width, 1 - (n - e.top) / e.height];
}
function sg(e, t) {
  let r = w(kk),
    i = t?.enabled ?? !1,
    a = ag(t?.springOptions),
    o = w(null),
    s = l(() => {
      let t = e.current;
      t && (o.current = t.getBoundingClientRect());
    }, [e]),
    { x: c, y: u } = rg(i),
    f = R(0),
    p = R(0),
    m = c ?? f,
    h = u ?? p,
    g = Ae(m, (e) => og(o.current, e, h.get())[0]),
    _ = Ae(h, (e) => og(o.current, m.get(), e)[1]),
    v = R(0),
    y = R(0),
    b = F(g, a),
    x = F(_, a),
    S = F(v, a),
    C = F(y, a),
    T = Ze(b),
    E = Ze(x);
  return (
    d(() => {
      if (!i) return;
      let t = e.current;
      if (!t) return;
      s();
      let a = !1;
      n.addEventListener(`scroll`, s, { passive: !0, capture: !0 });
      let o = I(s),
        c = I(t, s),
        l = Se(
          t,
          () => (
            s(),
            a || ((a = !0), b.jump(g.get()), x.jump(_.get())),
            Me.update(() => y.set(1)),
            () => Me.update(() => y.set(0))
          )
        ),
        u = Le(t, () => (Me.update(() => v.set(1)), () => Me.update(() => v.set(0))));
      return () => {
        (n.removeEventListener(`scroll`, s, { capture: !0 }), o(), c(), l(), u(), (r.current = kk));
      };
    }, [i, e, g, _, v, y, b, x, s]),
    cg(
      i,
      l(() => {
        r.current = {
          position: [b.get(), x.get(), T.get(), E.get()],
          pointerDown: S.get(),
          hover: C.get(),
        };
      }, [b, x, S, C, T, E])
    ),
    r
  );
}
function cg(e, t) {
  d(() => {
    if (!e) return;
    let n = 0,
      r = performance.now();
    function i(e) {
      (t(e, e - r), (r = e), (n = requestAnimationFrame(i)));
    }
    return ((n = requestAnimationFrame(i)), () => cancelAnimationFrame(n));
  }, [e, t]);
}
function lg(e, t, n) {
  let r = Kh(),
    [i, a] = o(Rk.noSlot);
  return (
    d(() => {
      if (!r || !e) return;
      (r.register(e, t, n), A(() => a(r.getSlotStatus(e))));
      let i = r.subscribe(e, () => {
        A(() => a(r.getSlotStatus(e)));
      });
      return () => {
        i();
      };
    }, [r, e, t, n]),
    d(() => {
      if (!(!r || !e))
        return () => {
          r.deregister(e);
        };
    }, [r, e]),
    r ? i : null
  );
}
function ug(e, t, n) {
  let r = [],
    i = xl(e, t, (e) => r.unshift(e, e));
  if (n) {
    let e = i[i.length - 1];
    if (!V(e)) return Xk;
    (i.push(e + 1), r.push(-1));
  }
  let a = i[0];
  return V(a)
    ? a <= 1
      ? { inputRange: i, outputRange: r }
      : { inputRange: [0, Math.max(a - 1, 0), ...i], outputRange: [-1, -1, ...r] }
    : Xk;
}
function dg(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function fg(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${aA[e]}` : `${aA[e]} ${n}`;
}
function pg() {
  return n === void 0 ? {} : sA || ((sA = mg()), sA);
}
function mg() {
  let e = n.location,
    t = n?.bootstrap?.services;
  if (t) return t;
  let r;
  try {
    if (((r = n.top.location.origin), (t = n.top?.bootstrap?.services), t)) return t;
  } catch {}
  if (r && r !== e.origin) throw Error(`Unexpectedly embedded by ${r} (expected ${e.origin})`);
  if (e.origin.endsWith(`framer.com`) || e.origin.endsWith(`framer.dev`))
    throw Error(`ServiceMap data was not provided in document`);
  try {
    let n =
      new URLSearchParams(e.search).get(`services`) ||
      new URLSearchParams(e.hash.substring(1)).get(`services`);
    n && (t = JSON.parse(n));
  } catch {}
  if (t && typeof t == `object` && t.api) return t;
  throw Error(`ServiceMap requested but not available`);
}
function hg(e) {
  return e.key + e.extension;
}
function gg(e) {
  return `${pg().userContent}/assets/${e}`;
}
function _g(e) {
  return gg(hg(e));
}
function vg(e, t) {
  return t ? `${e} ${cA}` : e;
}
function yg(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return vg(e.name, e.isVariable);
  }
}
function bg(e) {
  return !!(e && Array.isArray(e));
}
function xg(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    Cg(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function Sg(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function Cg(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`name` in e && typeof e.name != `string`) ||
    !(`minValue` in e) ||
    typeof e.minValue != `number` ||
    !(`maxValue` in e) ||
    typeof e.maxValue != `number` ||
    !(`defaultValue` in e) ||
    typeof e.defaultValue != `number`
  );
}
function wg(e) {
  return dA[Eg(e)];
}
function Tg(e, t) {
  let n = e?.find((e) => e.tag === `wght`)?.defaultValue;
  return n !== void 0 && n >= 1 && n <= 1e3 ? n : (t ?? wg(`variable`) ?? 500);
}
function Eg(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function Dg(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function Og(e, t) {
  return { ...kg(e, t), ...Ag(e, t) };
}
function kg(e, t) {
  if (t.length === 0)
    return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: n, style: r } = e,
    i = new Map(),
    a = new Map();
  for (let r of t)
    r.isVariable === e.isVariable &&
      (i.set(`${r.weight}-${r.style}`, r),
      !(r.weight <= n) && (a.has(r.style) || a.set(r.style, r)));
  let o = a.get(r),
    s = a.get(`italic`),
    c = e.weight;
  c <= 300
    ? ((o = i.get(`400-${r}`) ?? o), (s = i.get(`400-italic`) ?? s))
    : c <= 500
      ? ((o = i.get(`700-${r}`) ?? o), (s = i.get(`700-italic`) ?? s))
      : ((o = i.get(`900-${r}`) ?? o), (s = i.get(`900-italic`) ?? s));
  let l = i.get(`${n}-italic`);
  return { variantBold: o, variantItalic: l, variantBoldItalic: s };
}
function Ag(e, t) {
  if (t.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n, r, i, a;
  for (let o of t) {
    if (!o.isVariable) continue;
    let t = o.weight === e.weight,
      s = o.weight === 400;
    o.style === `normal`
      ? t
        ? (n = o)
        : s
          ? (i = o)
          : (i ||= o)
      : o.style === `italic` && (t ? (r = o) : s ? (a = o) : (a ||= o));
  }
  return { variantVariable: n ?? i, variantVariableItalic: r ?? a };
}
function jg(e) {
  return !!e.variationAxes;
}
function Mg(e) {
  return Ng(e) || Pg(e);
}
function Ng(e) {
  return e.startsWith(mA);
}
function Pg(e) {
  return e.startsWith(pA);
}
function Fg(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r) {
      if (r.owner !== t.owner && r.file === t.file)
        return { existingFont: r, index: n, projectDuplicate: !0 };
      if (r && r.selector === t.selector)
        return { existingFont: r, index: n, projectDuplicate: !1 };
    }
  }
}
function Ig(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? cA : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function Lg({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = xg(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function Rg(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: jg(e), selector: e.selector };
}
function zg(e) {
  let t = e.fonts.map((e) => Rg(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = Rg(n);
    if (!e) continue;
    let r = Og(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function Bg(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
function Vg(e, t, n) {
  let r = e.get(t);
  r || ((r = new Map()), e.set(t, r));
  let i = r.get(n);
  return (i || ((i = { fonts: [] }), r.set(n, i)), i);
}
function Hg(e, t) {
  return Array.from(e.entries())
    .sort(([e], [t]) => e.localeCompare(t))
    .map(([e, n]) => ({
      family: e,
      variants: Array.from(n.entries())
        .sort(([e], [t]) => e.localeCompare(t))
        .map(([, e]) => ({
          fonts: e.fonts.map((e) => ({
            ...e,
            selected:
              e.font.assetKey && e.font.owner ? t.has(`${e.font.assetKey}:${e.font.owner}`) : !1,
          })),
        })),
    }));
}
async function Ug(e) {
  switch (e) {
    case `google`:
      return (await import("./google-74O3OFST.BZ57zP5h.mjs")).default;
    case `fontshare`:
      return (await import("./fontshare-SGA6PEZ5.CjCmvCKY.mjs")).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function Wg(e) {
  switch (e) {
    case `google`:
      return (await import("./google-CCGTL4SA.5HW9yzMR.mjs")).default;
    case `fontshare`:
      return (await import("./fontshare-HL54S5AN.CuFl42Lb.mjs")).default;
    case `framer`:
      return (await import("./framer-font-BMV7HBFP.BV4yRwNx.mjs")).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function Gg(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(Kg);
}
function Kg(e) {
  return gA.includes(e);
}
function qg(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = Gg(e)[0];
  return n && t[n];
}
function Jg(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function Yg(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
function Xg(e, t, n, r) {
  return `${e}-${t}-${n}-${r}`;
}
function Zg(e, t, n) {
  return `${e}-${t}-${n}`;
}
async function Qg(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = Xg(r, c, s, i);
  if (!MA.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: B(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), PA.set(l, { fontFace: u, doc: t }), $g(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < AA) return Qg(e, t, n + 1);
          throw new jA(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`
          );
        });
    MA.set(l, d);
  }
  await MA.get(l);
}
async function $g(e, t, n) {
  let r = Zg(e, t, n);
  if (!NA.has(r)) {
    let i = new OA.default(e, { style: t, weight: n }).load(null, kA);
    NA.set(r, i);
  }
  try {
    await NA.get(r);
  } catch {
    throw new jA(
      `Failed to check if font is ready (${kA}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`
    );
  }
}
function e_(e) {
  let t = e.style || `normal`,
    { family: n, url: r, weight: i } = e,
    a = Xg(n, t, i, r),
    o = PA.get(a);
  (o && (o.doc.fonts.delete(o.fontFace), PA.delete(a)), MA.delete(a), NA.delete(Zg(n, t, i)));
}
function t_(e) {
  try {
    if (e === `framer`) return n_(IA) ? IA : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import("./google-7KJOMI6T.4Zga1324.mjs")).default;
          case `fontshare`:
            return (await import("./fontshare-RXOLKSVM.DwUZJPwH.mjs")).default;
          default:
            W(e);
        }
      })();
      return n_(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function n_(e) {
  return H(e) && Object.values(e).every(i_);
}
function r_(e) {
  return H(e) && B(e.tag);
}
function i_(e) {
  return Array.isArray(e) && e.every(r_);
}
function a_(e, t, n, r = zA) {
  let [i, a] = p.useState(e),
    [o, s] = p.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      p.useCallback(
        (e) => {
          gi(e) ||
            (t && a(r(e)),
            n &&
              p.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t]
      ),
    ]
  );
}
function o_(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function s_() {
  return _(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: _(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function c_(e) {
  return e === void 0 ? `__undefined__` : V(e) ? String(e) : e === `` ? `__empty__` : e;
}
function l_(e, t) {
  d(() => {
    function r(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (n.addEventListener(`keyup`, r), () => n.removeEventListener(`keyup`, r));
  }, [e, t]);
}
function u_(e, t, r, i) {
  let a = n.innerHeight - i,
    o = Math.min(n.innerWidth - r, t),
    s = a / e;
  return Math.min(o, s);
}
function d_(e, { width: t, height: r }) {
  if (!e.src || !e.srcSet) return;
  let i = new n.Image();
  return (
    (i.src = e.src),
    (i.srcset = e.srcSet),
    (i.sizes = e.sizes || ``),
    (i.width = t),
    (i.height = r),
    i.decode()
  );
}
function f_() {
  return document.getElementById(HT) ?? document.getElementById(VT) ?? document.body;
}
function p_(e, t) {
  return V(e) ? e : (t ?? 0);
}
function m_(e) {
  return p_(e?.paddingTop, e?.padding) + p_(e?.paddingBottom, e?.padding);
}
function h_(e) {
  return p_(e?.paddingLeft, e?.padding) + p_(e?.paddingRight, e?.padding);
}
function g_(e, t) {
  if (!e || !t || !t.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - h_(e)}px)`,
      srcSet: Go(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function __(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in nj)) continue;
    let n = nj[t],
      r = e[t];
    if (!(!V(n) || !V(r)) && n !== r) return !0;
  }
  return !1;
}
function v_(e) {
  let t = He.get(e.current);
  if (!t) return !1;
  if (__(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (__(e.latestValues)) return !0;
  return !1;
}
function y_(e) {
  return h(function ({ lightbox: t, lightboxClassName: n, onClick: r, ...i }, s) {
    let u = C(Ce),
      f = C(YO),
      p = !!f,
      m = w(null),
      h = s ?? m,
      g = w(),
      v = c(() => g_(t, i.background), [t, i.background]),
      [y, b] = o(!1),
      [x, E] = o(),
      D = l(() => {
        if (t) {
          if (y) {
            A(() => {
              b(!0);
            });
            return;
          }
          Me.read(() => {
            if (!h.current) return;
            let e = getComputedStyle(h.current),
              n =
                h.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(h.current, `::after`)
                  : void 0,
              r = h.current.offsetWidth ?? 1,
              i = h.current.offsetHeight ?? 1,
              a = v_(h) || p ? { duration: 0 } : t.transition;
            A(() => {
              (E({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: n?.borderTopWidth,
                borderRight: n?.borderRightWidth,
                borderBottom: n?.borderBottomWidth,
                borderLeft: n?.borderLeftWidth,
                borderStyle: n?.borderStyle,
                borderColor: n?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                b(!0),
                f?.stop());
            });
          });
        }
      }, [t, y, h, f?.stop, p]),
      k = x?.aspectRatio ?? 1,
      j = Kp(() => {
        if (!t || !v || !v.src) return;
        let e = g.current?.[v.src];
        if (e) return e;
        let n = u_(k, t.maxWidth, h_(t), m_(t)),
          r = d_(v, { width: n, height: n * k });
        return ((g.current = { [v.src]: r }), r);
      }),
      M = l(
        async (e) => {
          (r?.(e), !(y || !t || !v) && (await j(), D()));
        },
        [r, D, y, v, t, j]
      ),
      P = l((e) => {
        (e?.stopPropagation(),
          A(() => {
            b(!1);
          }));
      }, []);
    (l_(y, P),
      d(() => {
        if (!t) return;
        let e;
        function n() {
          e = setTimeout(() => {
            j();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = h.current;
        return (
          i?.addEventListener(`mouseenter`, n),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, j),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, n),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, j));
          }
        );
      }, [j, h, t]));
    let F = N(),
      I = x?.transition ?? i.transition ?? u.transition,
      ee = x?.borderRadius,
      te = x?.imageRendering,
      ne = x?.filter,
      re = x?.borderTop,
      L = x?.borderRight,
      R = x?.borderBottom,
      ie = x?.borderLeft,
      ae = x?.borderStyle,
      oe = x?.borderColor,
      se = !!(re || L || R || ie || ae || oe),
      ce = se
        ? {
            "--border-top-width": re,
            "--border-right-width": L,
            "--border-bottom-width": R,
            "--border-left-width": ie,
            "--border-style": ae,
            "--border-color": oe,
          }
        : void 0,
      le = { [AT]: i.id },
      ue = p_(t?.paddingTop, t?.padding),
      de = p_(t?.paddingBottom, t?.padding),
      fe = p_(t?.paddingLeft, t?.padding),
      z = p_(t?.paddingRight, t?.padding),
      pe = x?.borderRadius ? { ...i.style, borderRadius: x.borderRadius } : i.style,
      me = y ? (i.layoutDependency ? `${i.layoutDependency}-open` : `open`) : i.layoutDependency,
      ge = p && y ? void 0 : (i.layoutId ?? (t ? F : void 0));
    return T(O, {
      children: [
        _(e, {
          ...i,
          style: pe,
          onClick: M,
          layoutId: ge,
          ref: h,
          layoutDependency: me,
          transition: I,
        }),
        _(Ve, {
          onExitComplete: () => {
            A(() => {
              (E(void 0), f?.start());
            });
          },
          children:
            y &&
            t &&
            v &&
            _(
              a,
              {
                children: S(
                  T(O, {
                    children: [
                      _(he.div, {
                        ...le,
                        className: n,
                        onClick: P,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: t.zIndex,
                          backgroundColor: t.backdrop ?? `transparent`,
                        },
                        transition: I,
                        initial: rj,
                        animate: ij,
                        exit: rj,
                      }),
                      _(he.div, {
                        ...le,
                        className: n,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${ue}px ${z}px ${de}px ${fe}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: t.zIndex,
                        },
                        children: _(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: k,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: t.maxWidth,
                          },
                          children: _(he.div, {
                            layoutId: ge,
                            transition: I,
                            onClick: D,
                            className: `framer-lightbox-container`,
                            "data-border": se,
                            style: {
                              aspectRatio: k,
                              borderRadius: ee,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: te,
                              filter: ne,
                              ...ce,
                            },
                            children: _(es, { image: v, alt: v.alt, draggable: i.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  f_()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function b_(e, t) {
  return sj && !t
    ? Document.parseHTMLUnsafe(e)
    : ((oj ??= new DOMParser()), oj.parseFromString(e, t ?? `text/html`));
}
function x_(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function S_(e, t, n, r) {
  return e.replace(cj, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = vu(u.replace(/&amp;/gu, `&`));
    if (!d || !d.target) return e;
    let f = t(d.target);
    if (!sm(f) || !sm(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Wt(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = bu(u);
    if (!_ || B(_)) return e;
    Fu(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(GT, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = ai(m, v)), i + o + `"${x_(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function C_(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function w_(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function T_(e, t, n) {
  let r = w([]);
  C_(r.current, e) ||
    ((r.current = e),
    RA.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || Y.current() !== Y.canvas || (e > 0 && ys(n.current));
    }));
}
function E_() {
  return { current: null };
}
async function D_(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function O_(e) {
  return e in fj;
}
function k_(e, t) {
  let n = {};
  for (let r in e) {
    if (!O_(r)) continue;
    let i = e[r],
      a = fj[r];
    ct(i) || ct(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function A_(e, t = `character`, n, r, i) {
  if (r) {
    let t = E_();
    return (n.add(t), _(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let o = t === r;
        return T(
          a,
          {
            children: [
              _(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(pj)?.map((e, t) => {
                  let r = E_();
                  return (n.add(r), _(`span`, { ref: r, style: i, children: e }, e + t));
                }),
              }),
              o ? null : ` `,
            ],
          },
          e + t + o
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let o = t === r,
          s = E_();
        return (
          n.add(s),
          T(
            a,
            { children: [_(`span`, { ref: s, style: i, children: e }), o ? null : ` `] },
            e + t + o
          )
        );
      });
    }
    default:
      return e;
  }
}
function j_(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      W(t);
  }
}
function M_(e) {
  let t = [];
  return (
    V(e.x) && t.push(`translateX(${e.x}px)`),
    V(e.y) && t.push(`translateY(${e.y}px)`),
    V(e.scale) && t.push(`scale(${e.scale})`),
    V(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    V(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    V(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    V(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    V(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function N_(e, t, n, r) {
  if (!n || !n.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : M_(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : M_(n.effect),
              };
      }
    default:
      W(i);
  }
}
function P_(e, t, n) {
  let r = Ra(() => new Set()),
    i = Ro(),
    a = n || !i,
    o = ye(),
    s = w({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let l = e?.trigger ?? `onMount`,
    u = e?.target,
    f = e?.threshold;
  d(() => {
    if (!a || n) return;
    s.current.hasMounted = !0;
    function e() {
      let { effect: e } = s.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && s.current.hasAnimatedOnce) ||
        (e?.type === `appear` && s.current.isAnimating)
      )
        return;
      Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            c = { current: void 0 };
          return (
            I_(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(s.current, { isAnimating: !1 });
              },
              c
            ),
            () => c.current?.()
          );
        }
        default:
          W(t);
      }
    }
    switch (l) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? et(n, e, { amount: f ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = u?.ref?.current;
        return t
          ? et(t, e, {
              amount: f ?? 0,
              root: document,
              margin: u?.offset ? `${u.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        W(l);
    }
  }, [a, r, n, t, u, f, l]);
  let p = !!e,
    m = e ? j_(e) : void 0;
  return c(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !p)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = N_(a, n || F_(e, t, i), s.current.effect, o);
        return {
          text: (e) => A_(e, m, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = E_();
            return (r.add(t), { ref: t, style: { ...e, ...c } });
          },
        };
      },
      play: () => {
        let { effect: e } = s.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            I_(m, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            W(t);
        }
      },
    }),
    [a, p, r, n, m]
  );
}
function F_(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function I_(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = k_(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await L_(n, u);
      if (
        e === null ||
        (je(e, l, { ...r, restDelta: 0.001, delay: fe(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        je(e, n, { ...r, restDelta: 0.001, delay: fe(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await D_(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (Me.read(() => {
          ((e = R_(n)),
            e.length !== 0 &&
              Me.update(() => {
                let t = e.map((e, t) =>
                  je(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          je(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      W(e);
  }
}
async function L_(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await D_(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function R_(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function z_(e) {
  let t = {};
  for (let n in e) (te(n) || tC(n)) && (t[n] = e[n]);
  return t;
}
function B_(e) {
  return e.type === a;
}
function V_(e) {
  return e.type === `br`;
}
function H_(e, n, r, a, o = {}, s, c = B_(e) ? -1 : 0) {
  let l = i.toArray(e.props.children);
  ct(r) || (l = l.slice(0, 1));
  let u = !0;
  l = l.map((e) => {
    if (((!y(e) || !V_(e)) && (u = !1), y(e))) return H_(e, n, r, a, o, s, c + 1);
    let t = ct(r) ? e : r;
    return B(t) && s ? s.text(t) : t;
  });
  let { "data-preset-tag": d, ...f } = e.props;
  if (B(e.type) || tt(e.type)) {
    let t = ce(e.type) || e.type,
      r = d || t,
      p = B(r) ? n?.[r] : void 0;
    ((f.className = Xc(`framer-text`, f.className, p)),
      s && c === 0 && !u && Object.assign(f, s.props(f.style)));
    let m = t === `h1` || t === `h2` || t === `h3` || t === `h4` || t === `h5` || t === `h6`,
      h = n?.anchor;
    if (m && h) {
      let e = U_(l, o);
      f.id = e;
      let t = Xc(`framer-text`, h),
        n = _(`a`, { href: `#${e}`, className: t, children: l });
      ((f.style = { ...(f.style ?? {}), scrollMarginTop: a }), (l = [n]));
    }
    r === `ol` &&
      (f.style = {
        ...(f.style ?? {}),
        [jS]: G_(f.start ?? 1, i.count(f.children), f.style?.[AS] ?? ``),
      });
  }
  return t(e, f, ...l);
}
function U_(e, t) {
  let n = Kr(e.map(W_).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function W_(e) {
  return B(e) || V(e)
    ? e.toString()
    : y(e)
      ? W_(e.props.children)
      : Array.isArray(e)
        ? e.map(W_).join(``)
        : ``;
}
function G_(e, t, n) {
  return xo(Number(e) || 1, t, n);
}
function K_(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = Xi(n.x, n.y),
    i = Jx(Xi(0.5, 0.5), r),
    a = X.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: Xi.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  U(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !Xi.isEqual(e, s) && !Xi.isEqual(e, c));
  U(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = Jx.intersection(i, Jx(s, c)),
    f = Jx.intersection(i, Jx(l, u));
  return (U(d && f, `linearGradientLine: Must have a start and end point.`), Jx(d, f));
}
function q_(e, t) {
  let n = K_(e.angle),
    r = Os(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = Jx.pointAtPercentDistance(n, i),
    s = Jx.pointAtPercentDistance(n, a),
    c = Te([i, a], [0, 1]);
  return {
    id: `id${t}g${AC.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: wC.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function J_(e, t) {
  return {
    id: `id${t}g${MC.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Os(e).map((t) => ({
      color: t.value,
      alpha: wC.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function Y_(e) {
  if (!B(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return V(parseFloat(t));
}
function X_(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return V(n) ? n : 50;
}
function Z_(e) {
  return Y_(e) ? X_(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function Q_(e) {
  return Y_(e) ? X_(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function $_(e, t, n, r) {
  if (((e = _x.get(e, `#09F`)), !pC.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * Z_(e.positionX) + f),
        (d = (t.height - l) * Q_(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * Q_(e.positionY)))
        : ((n = g), (u = (1 - g) * Z_(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function ev(e) {
  return e.startsWith(`data:${xj}`);
}
function tv(e, t) {
  if (/^\w+:/u.test(e) && !ev(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = Y.current() === Y.export;
  return oC.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function nv(e, t) {
  return (d(() => Dj.subscribeToTemplate(e), [e]), Dj.template(e, t));
}
function rv(e) {
  try {
    let t = b_(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function iv(e, t) {
  ov(e, av(t));
}
function av(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function ov(e, t) {
  (sv(e, t),
    Array.from(e.children).forEach((e) => {
      ov(e, t);
    }));
}
function sv(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function cv(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (Oj[t[2]] || 1));
}
function lv(e) {
  let t = cv(e.getAttribute(`width`)),
    n = cv(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function uv(e) {
  return e.indexOf(`image`) >= 0;
}
function dv(e) {
  return e.indexOf(`var(--`) >= 0;
}
function fv(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function pv(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? by,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = Dj.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && eo(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    G(s) &&
    G(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l && l.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function mv({ height: e, width: t, children: n }) {
  let r = hv();
  if (!r || !n) return n;
  let { props: i } = r;
  return _(he.li, {
    ...i,
    style: { ...i.style, width: t ?? `fit-content`, height: e ?? `fit-content` },
    children: n,
  });
}
function hv() {
  try {
    return km();
  } catch {
    return;
  }
}
function gv(e) {
  return e > Nj ? `lazy` : void 0;
}
function _v(e, t, n) {
  let r = bv(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function vv(e) {
  return e ? (e.fonts ?? ki()) : ki();
}
function yv(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : bv(e);
}
function bv(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    xv(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(Sv) })
      : t.fonts.push(Sv(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function xv(e) {
  return Pj in e;
}
function Sv(e) {
  let t = Cv(e) || wv(e) ? e : Tv(e);
  return wv(t) ? t : Ev(t);
}
function Cv(e) {
  return `source` in e;
}
function wv(e) {
  return `cssFamilyName` in e;
}
function Tv(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function Ev(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${cA}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function Dv(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function Ov(e) {
  return e.loader;
}
function kv(e, t, n) {
  let r = Ov(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  J,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Y,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  X,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  Z,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  Q,
  fD,
  pD,
  mD,
  hD,
  gD,
  $,
  _D,
  vD,
  yD,
  bD,
  xD,
  SD,
  CD,
  wD,
  TD,
  ED,
  DD,
  OD,
  kD,
  AD,
  jD,
  MD,
  ND,
  PD,
  FD,
  ID,
  LD,
  RD,
  zD,
  BD,
  VD,
  HD,
  UD,
  WD,
  GD,
  KD,
  qD,
  JD,
  YD,
  XD,
  ZD,
  QD,
  $D,
  eO,
  tO,
  nO,
  rO,
  iO,
  aO,
  oO,
  sO,
  cO,
  lO,
  uO,
  dO,
  fO,
  pO,
  mO,
  hO,
  gO,
  _O,
  vO,
  yO,
  bO,
  xO,
  SO,
  CO,
  wO,
  TO,
  EO,
  DO,
  OO,
  kO,
  AO,
  jO,
  MO,
  NO,
  PO,
  FO,
  IO,
  LO,
  RO,
  zO,
  BO,
  VO,
  HO,
  UO,
  WO,
  GO,
  KO,
  qO,
  JO,
  YO,
  XO,
  ZO,
  QO,
  $O,
  ek,
  tk,
  nk,
  rk,
  ik,
  ak,
  ok,
  sk,
  ck,
  lk,
  uk,
  dk,
  fk,
  pk,
  mk,
  hk,
  gk,
  _k,
  vk,
  yk,
  bk,
  xk,
  Sk,
  Ck,
  wk,
  Tk,
  Ek,
  Dk,
  Ok,
  kk,
  Ak,
  jk,
  Mk,
  Nk,
  Pk,
  Fk,
  Ik,
  Lk,
  Rk,
  zk,
  Bk,
  Vk,
  Hk,
  Uk,
  Wk,
  Gk,
  Kk,
  qk,
  Jk,
  Yk,
  Xk,
  Zk,
  Qk,
  $k,
  eA,
  tA,
  nA,
  rA,
  iA,
  aA,
  oA,
  sA,
  cA,
  lA,
  uA,
  dA,
  fA,
  pA,
  mA,
  hA,
  gA,
  _A,
  vA,
  yA,
  bA,
  xA,
  SA,
  CA,
  wA,
  TA,
  EA,
  DA,
  OA,
  kA,
  AA,
  jA,
  MA,
  NA,
  PA,
  FA,
  IA,
  LA,
  RA,
  zA,
  BA,
  VA,
  HA,
  UA,
  WA,
  GA,
  KA,
  qA,
  JA,
  YA,
  XA,
  ZA,
  QA,
  $A,
  ej,
  tj,
  nj,
  rj,
  ij,
  aj,
  oj,
  sj,
  cj,
  lj,
  uj,
  dj,
  fj,
  pj,
  mj,
  hj,
  gj,
  _j,
  vj,
  yj,
  bj,
  xj,
  Sj,
  Cj,
  wj,
  Tj,
  Ej,
  Dj,
  Oj,
  kj,
  Aj,
  jj,
  Mj,
  Nj,
  Pj,
  Fj = e(() => {
    (f(),
      nt(),
      ke(),
      m(),
      D(),
      g(),
      (Av = Fe({
        "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
          (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Hsluv = void 0));
          var t = class e {
            constructor() {
              ((this.hex = `#000000`),
                (this.rgb_r = 0),
                (this.rgb_g = 0),
                (this.rgb_b = 0),
                (this.xyz_x = 0),
                (this.xyz_y = 0),
                (this.xyz_z = 0),
                (this.luv_l = 0),
                (this.luv_u = 0),
                (this.luv_v = 0),
                (this.lch_l = 0),
                (this.lch_c = 0),
                (this.lch_h = 0),
                (this.hsluv_h = 0),
                (this.hsluv_s = 0),
                (this.hsluv_l = 0),
                (this.hpluv_h = 0),
                (this.hpluv_p = 0),
                (this.hpluv_l = 0),
                (this.r0s = 0),
                (this.r0i = 0),
                (this.r1s = 0),
                (this.r1i = 0),
                (this.g0s = 0),
                (this.g0i = 0),
                (this.g1s = 0),
                (this.g1i = 0),
                (this.b0s = 0),
                (this.b0i = 0),
                (this.b1s = 0),
                (this.b1i = 0));
            }
            static fromLinear(e) {
              return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
            }
            static toLinear(e) {
              return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
            }
            static yToL(t) {
              return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
            }
            static lToY(t) {
              return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
            }
            static rgbChannelToHex(t) {
              let n = Math.round(t * 255),
                r = n % 16,
                i = ((n - r) / 16) | 0;
              return e.hexChars.charAt(i) + e.hexChars.charAt(r);
            }
            static hexToRgbChannel(t, n) {
              let r = e.hexChars.indexOf(t.charAt(n)),
                i = e.hexChars.indexOf(t.charAt(n + 1));
              return (r * 16 + i) / 255;
            }
            static distanceFromOriginAngle(e, t, n) {
              let r = t / (Math.sin(n) - e * Math.cos(n));
              return r < 0 ? 1 / 0 : r;
            }
            static distanceFromOrigin(e, t) {
              return Math.abs(t) / Math.sqrt(e ** 2 + 1);
            }
            static min6(e, t, n, r, i, a) {
              return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
            }
            rgbToHex() {
              ((this.hex = `#`),
                (this.hex += e.rgbChannelToHex(this.rgb_r)),
                (this.hex += e.rgbChannelToHex(this.rgb_g)),
                (this.hex += e.rgbChannelToHex(this.rgb_b)));
            }
            hexToRgb() {
              ((this.hex = this.hex.toLowerCase()),
                (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
                (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
                (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
            }
            xyzToRgb() {
              ((this.rgb_r = e.fromLinear(
                e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
              )),
                (this.rgb_g = e.fromLinear(
                  e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
                )),
                (this.rgb_b = e.fromLinear(
                  e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
                )));
            }
            rgbToXyz() {
              let t = e.toLinear(this.rgb_r),
                n = e.toLinear(this.rgb_g),
                r = e.toLinear(this.rgb_b);
              ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
                (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
                (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
            }
            xyzToLuv() {
              let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
                n = 4 * this.xyz_x,
                r = 9 * this.xyz_y;
              (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
                (this.luv_l = e.yToL(this.xyz_y)),
                this.luv_l === 0
                  ? ((this.luv_u = 0), (this.luv_v = 0))
                  : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                    (this.luv_v = 13 * this.luv_l * (r - e.refV))));
            }
            luvToXyz() {
              if (this.luv_l === 0) {
                ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
                return;
              }
              let t = this.luv_u / (13 * this.luv_l) + e.refU,
                n = this.luv_v / (13 * this.luv_l) + e.refV;
              ((this.xyz_y = e.lToY(this.luv_l)),
                (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
                (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
            }
            luvToLch() {
              if (
                ((this.lch_l = this.luv_l),
                (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
                this.lch_c < 1e-8)
              )
                this.lch_h = 0;
              else {
                let e = Math.atan2(this.luv_v, this.luv_u);
                ((this.lch_h = (e * 180) / Math.PI),
                  this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
              }
            }
            lchToLuv() {
              let e = (this.lch_h / 180) * Math.PI;
              ((this.luv_l = this.lch_l),
                (this.luv_u = Math.cos(e) * this.lch_c),
                (this.luv_v = Math.sin(e) * this.lch_c));
            }
            calculateBoundingLines(t) {
              let n = (t + 16) ** 3 / 1560896,
                r = n > e.epsilon ? n : t / e.kappa,
                i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
                a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
                o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
                s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
                c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
                l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
                u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
                d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
                f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
              ((this.r0s = i / o),
                (this.r0i = (a * t) / o),
                (this.r1s = i / (o + 126452)),
                (this.r1i = ((a - 769860) * t) / (o + 126452)),
                (this.g0s = s / l),
                (this.g0i = (c * t) / l),
                (this.g1s = s / (l + 126452)),
                (this.g1i = ((c - 769860) * t) / (l + 126452)),
                (this.b0s = u / f),
                (this.b0i = (d * t) / f),
                (this.b1s = u / (f + 126452)),
                (this.b1i = ((d - 769860) * t) / (f + 126452)));
            }
            calcMaxChromaHpluv() {
              let t = e.distanceFromOrigin(this.r0s, this.r0i),
                n = e.distanceFromOrigin(this.r1s, this.r1i),
                r = e.distanceFromOrigin(this.g0s, this.g0i),
                i = e.distanceFromOrigin(this.g1s, this.g1i),
                a = e.distanceFromOrigin(this.b0s, this.b0i),
                o = e.distanceFromOrigin(this.b1s, this.b1i);
              return e.min6(t, n, r, i, a, o);
            }
            calcMaxChromaHsluv(t) {
              let n = (t / 360) * Math.PI * 2,
                r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
                i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
                a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
                o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
                s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
                c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
              return e.min6(r, i, a, o, s, c);
            }
            hsluvToLch() {
              if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
              else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
              else {
                ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
                let e = this.calcMaxChromaHsluv(this.hsluv_h);
                this.lch_c = (e / 100) * this.hsluv_s;
              }
              this.lch_h = this.hsluv_h;
            }
            lchToHsluv() {
              if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHsluv(this.lch_h);
                ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
              }
              this.hsluv_h = this.lch_h;
            }
            hpluvToLch() {
              if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
              else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
              else {
                ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
                let e = this.calcMaxChromaHpluv();
                this.lch_c = (e / 100) * this.hpluv_p;
              }
              this.lch_h = this.hpluv_h;
            }
            lchToHpluv() {
              if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHpluv();
                ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
              }
              this.hpluv_h = this.lch_h;
            }
            hsluvToRgb() {
              (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hpluvToRgb() {
              (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hsluvToHex() {
              (this.hsluvToRgb(), this.rgbToHex());
            }
            hpluvToHex() {
              (this.hpluvToRgb(), this.rgbToHex());
            }
            rgbToHsluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHsluv());
            }
            rgbToHpluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHpluv());
            }
            hexToHsluv() {
              (this.hexToRgb(), this.rgbToHsluv());
            }
            hexToHpluv() {
              (this.hexToRgb(), this.rgbToHpluv());
            }
          };
          ((e.Hsluv = t),
            (t.hexChars = `0123456789abcdef`),
            (t.refY = 1),
            (t.refU = 0.19783000664283),
            (t.refV = 0.46831999493879),
            (t.kappa = 903.2962962),
            (t.epsilon = 0.0088564516),
            (t.m_r0 = 3.240969941904521),
            (t.m_r1 = -1.537383177570093),
            (t.m_r2 = -0.498610760293),
            (t.m_g0 = -0.96924363628087),
            (t.m_g1 = 1.87596750150772),
            (t.m_g2 = 0.041555057407175),
            (t.m_b0 = 0.055630079696993),
            (t.m_b1 = -0.20397695888897),
            (t.m_b2 = 1.056971514242878));
        },
      })),
      (jv = Fe({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`) throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
                l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (Mv = Fe({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      (Nv = Fe({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = Mv();
        },
      })),
      (Pv = Fe({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = Nv(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (Fv = Fe({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function r(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t), e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` || document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function i(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function a(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function o(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function s(t, n) {
              function r() {
                var e = i;
                o(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), o(t));
            }
            function c(e, t, r) {
              ((t ||= {}),
                (r ||= n),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = r));
            }
            var l = null,
              u = null,
              d = null,
              f = null;
            function p(e) {
              return (
                u === null &&
                  (m(e) && /Apple/.test(n.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        n.navigator.userAgent
                      )),
                      (u = !!e && 603 > parseInt(e[1], 10)))
                    : (u = !1)),
                u
              );
            }
            function m(e) {
              return (f === null && (f = !!e.document.fonts), f);
            }
            function h(e, t) {
              var n = e.style,
                r = e.weight;
              if (d === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                d = i.style.font !== ``;
              }
              return [n, r, d ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((c.prototype.load = function (e, t) {
              var o = this,
                c = e || `BESbswy`,
                u = 0,
                d = t || 3e3,
                f = new Date().getTime();
              return new Promise(function (e, t) {
                if (m(o.context) && !p(o.context)) {
                  var g = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - f >= d
                          ? t(Error(`` + d + `ms timeout exceeded`))
                          : o.context.document.fonts
                              .load(h(o, `"` + o.family + `"`), c)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    _ = new Promise(function (e, t) {
                      u = setTimeout(function () {
                        t(Error(`` + d + `ms timeout exceeded`));
                      }, d);
                    });
                  Promise.race([_, g]).then(function () {
                    (clearTimeout(u), e(o));
                  }, t);
                } else
                  r(function () {
                    function r() {
                      var t;
                      ((t = (v != -1 && y != -1) || (v != -1 && b != -1) || (y != -1 && b != -1)) &&
                        ((t = v != y && v != b && y != b) ||
                          (l === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              n.navigator.userAgent
                            )),
                            (l =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            l &&
                            ((v == x && y == x && b == x) ||
                              (v == S && y == S && b == S) ||
                              (v == C && y == C && b == C)))),
                        (t = !t)),
                        t &&
                          (w.parentNode !== null && w.parentNode.removeChild(w),
                          clearTimeout(u),
                          e(o)));
                    }
                    function p() {
                      if (new Date().getTime() - f >= d)
                        (w.parentNode !== null && w.parentNode.removeChild(w),
                          t(Error(`` + d + `ms timeout exceeded`)));
                      else {
                        var e = o.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((v = m.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          (b = _.g.offsetWidth),
                          r()),
                          (u = setTimeout(p, 50)));
                      }
                    }
                    var m = new i(c),
                      g = new i(c),
                      _ = new i(c),
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = -1,
                      w = document.createElement(`div`);
                    ((w.dir = `ltr`),
                      a(m, h(o, `sans-serif`)),
                      a(g, h(o, `serif`)),
                      a(_, h(o, `monospace`)),
                      w.appendChild(m.g),
                      w.appendChild(g.g),
                      w.appendChild(_.g),
                      o.context.document.body.appendChild(w),
                      (x = m.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      (C = _.g.offsetWidth),
                      p(),
                      s(m, function (e) {
                        ((v = e), r());
                      }),
                      a(m, h(o, `"` + o.family + `",sans-serif`)),
                      s(g, function (e) {
                        ((y = e), r());
                      }),
                      a(g, h(o, `"` + o.family + `",serif`)),
                      s(_, function (e) {
                        ((b = e), r());
                      }),
                      a(_, h(o, `"` + o.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = c)
                : ((n.FontFaceObserver = c),
                  (n.FontFaceObserver.prototype.load = c.prototype.load)));
          })();
        },
      })),
      (Iv = () => {}),
      (Lv = n !== void 0),
      (Rv =
        Lv &&
        (P.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(P.userAgent))),
      (zv = Lv && typeof n.requestIdleCallback == `function`),
      (Bv = zv ? n.requestIdleCallback : setTimeout),
      (Vv = () => Iv),
      (Hv = () => !0),
      (Uv = () => !1),
      (Wv = new Map()),
      (Gv = new Map()),
      (Kv = new Set()),
      (qv = `:`),
      (Jv = Lv ? void 0 : new Set()),
      (Yv = `preload`),
      (Xv = Object.keys),
      (Zv = `equals`),
      (Qv = p.createContext({})),
      ($v = p.createContext({})),
      (ey = []),
      (ty = `default`),
      (ny = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (ry = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && yt(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = ny.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === ny.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === ny.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== ny.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && Jv !== void 0 && Jv.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = ny.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = ny.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && Wv.has(this.cacheHash) ? Wv.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!mt(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === ny.Fulfilled) return this.value;
          throw this.promiseState === ny.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (iy = -1),
      (ay = -2),
      (oy = -3),
      (sy = -4),
      (cy = -5),
      (ly = -6),
      (uy = -7),
      (dy = 2 ** 32 - 1),
      (fy = dy - 1),
      (py = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (my = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (hy = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (gy = typeof Uint8Array.fromBase64 == `function`),
      (_y = typeof process == `object` && process.versions?.node !== void 0),
      (vy = gy ? on : _y ? cn : un),
      (yy = gy ? sn : _y ? ln : dn),
      (by = Lv
        ? n
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (xy = 2),
      (Sy = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (Cy = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (Ty = class {
        payload = yn();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return mn(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (Ey = Lv ? void 0 : new Ty()),
      (Dy = Cy.CollectionUtilsCache),
      (Oy = new WeakMap()),
      (ky = s(void 0)),
      (Ay = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new ry(async () => {
              try {
                let t = await e();
                return (U(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(_t(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = wn(n),
            i = Tn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (Ey !== void 0) {
              if (mt(e)) return e.then((e) => (Ey.set(Dy, i, e), e));
              Ey.set(Dy, i, e);
            }
            return e;
          }
          if (Sn(Dy, i)) {
            let e = Cn(Dy, i);
            return (this.cacheMap.set(i, new ry(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = mt(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e](t, n)) : a?.[e](t, n);
          } catch (e) {
            (console.error(_t(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (Ey !== void 0 && Ey.set(Dy, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new ry(() =>
            s
              .then((e) => (Ey !== void 0 && Ey.set(Dy, i, e), e))
              .catch((e) => {
                console.error(_t(`Failed to call CollectionUtils method.`, e));
              })
          );
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
      }),
      (jy = /Mac/u),
      (My = /iPhone|iPod|iPad/iu),
      (Ny = /MacIntel/iu),
      (Py = /Edg\//u),
      (Fy = /Chrome/u),
      (Iy = /Google Inc/u),
      (Ly = /Safari/u),
      (Ry = /Apple Computer/u),
      (zy = /Firefox\/\d+\.\d+$/u),
      (By = /Version\/([\d.]+)/u),
      (Vy = /FramerX/u),
      (Hy = /tablet|iPad|Nexus 9/iu),
      (Uy = /mobi/iu),
      (Wy = 1e3 / 60),
      (Gy = 1e3 / 25),
      (Ky = 500),
      (qy = Promise.resolve()),
      (Jy = 100),
      (Yy = (e) => {
        Me.read(e, !1, !0);
      }),
      (Xy = Jn(Yy)),
      (Zy = !Rv),
      (Qy = {}),
      ($y = () => Qy),
      (eb = (e) => {
        Qy = e;
      }),
      (tb = RegExp(`:([a-z]\\w*)`, `gi`)),
      (nb = `framer_variant`),
      (rb = !1),
      (ib = p.createContext({ global: void 0, routes: {} })),
      (ab = 10),
      (ob = 1e4),
      (sb = (e) => `--view-transition-${e}`),
      (cb = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularVisas === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularVisas === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularVisas === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularVisas === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${sb(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${sb(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularVisas === `clockwise`) ||
              (t === `enter` && e.angularVisas === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${sb(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (lb = {
        circle: {
          makeKeyframe: (e, t) => `${sb(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${sb(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${pr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${sb(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: cb,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${fr(e.x)} ${fr(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = ur(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${sb(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${sb(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${sb(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${sb(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${sb(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${sb(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (ub = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (db = `view-transition-styles`),
      (fb = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (pb = () => {}),
      (hb = () => {
        (mb ||
          ((mb = document.createElement(`div`)),
          mb.setAttribute(`aria-live`, `assertive`),
          mb.setAttribute(`aria-atomic`, `true`),
          (mb.style.position = `absolute`),
          (mb.style.transform = `scale(0)`),
          document.body.append(mb)),
          setTimeout(() => {
            mb.textContent = document.title;
          }, 60));
      }),
      (_b =
        Lv &&
        typeof n.navigation?.back == `function` &&
        !(() => {
          if (P === void 0) return !1;
          let e = P.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !In()),
      (vb = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (yb = p.createContext(null)),
      (bb = (() => {
        let e = s(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (xb = typeof document < `u` ? r : d),
      (Sb = async () => {}),
      (Cb = { activeLocale: null, locales: [], setLocale: Sb }),
      (wb = (() => {
        let e = p.createContext(Cb);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (Tb = (() => {
        let e = p.createContext(`ltr`);
        return ((e.displayName = `LayoutVisasContext`), e);
      })()),
      (Eb = new Set()),
      (Db = (() => {
        let e = s({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Ob = 46),
      (kb = 47),
      (Ab = (e, t) => e.charCodeAt(t)),
      (jb = (e, t) => e.lastIndexOf(t)),
      (Mb = (e, t, n) => e.slice(t, n)),
      (Nb = !1),
      (Pb = `/`),
      (Fb = (e) => e === kb),
      (Ib = new Set([`/404.html`, `/404`, `/404/`])),
      (Lb = `__f_replay`),
      (Rb = `__f_replay_ignore`),
      (zb = () => Lv),
      (Bb =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (Vb = (e) => {
        e.target?.closest?.(`#main`) &&
          (hi(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (Hb = !1),
      (ax = [bi]),
      (ix = [bi]),
      (rx = [bi]),
      (nx = [bi]),
      (tx = [bi]),
      (ex = [bi]),
      ($b = [bi]),
      (Qb = [bi]),
      (Zb = [bi]),
      (Xb = [bi]),
      (Yb = [bi]),
      (Jb = [bi]),
      (qb = [bi]),
      (Kb = [bi]),
      (Gb = [bi]),
      (Wb = [bi]),
      (Ub = [bi]),
      (sx = class {
        constructor() {
          (ze(ox, 5, this),
            De(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            De(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            De(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            De(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            De(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            De(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            De(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            xi(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            xi(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        }
        markUseLayoutEffectsStart() {
          performance.mark(`framer-hydration-layout-effects-start`);
        }
        markRouterUseLayoutEffectStart() {
          performance.mark(`framer-hydration-router-layout-effect`);
        }
        markUseLayoutEffectsEnd() {
          (performance.mark(`framer-hydration-layout-effects-end`),
            xi(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        }
        markUseEffectsStart() {
          performance.mark(`framer-hydration-effects-start`);
        }
        markUseEffectsRouterStart() {
          performance.mark(`framer-hydration-router-effect`);
        }
        markUseEffectsAreSynchronous() {
          performance.mark(`framer-hydration-effects-sync`);
        }
        markUseEffectsEnd() {
          (performance.mark(`framer-hydration-effects-end`),
            xi(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        }
        markRafStart() {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        }
        markRafEnd() {
          (performance.mark(`framer-hydration-browser-raf-end`),
            xi(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            xi(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            xi(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          xi(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          xi(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (ox = Xe(null)),
      we(ox, 1, `markRenderStart`, ax, sx),
      we(ox, 1, `markRenderEnd`, ix, sx),
      we(ox, 1, `markUseInsertionEffectsStart`, rx, sx),
      we(ox, 1, `markUseInsertionEffectRouterStart`, nx, sx),
      we(ox, 1, `markUseInsertionEffectsEnd`, tx, sx),
      we(ox, 1, `markUseLayoutEffectsStart`, ex, sx),
      we(ox, 1, `markRouterUseLayoutEffectStart`, $b, sx),
      we(ox, 1, `markUseLayoutEffectsEnd`, Qb, sx),
      we(ox, 1, `markUseEffectsStart`, Zb, sx),
      we(ox, 1, `markUseEffectsRouterStart`, Xb, sx),
      we(ox, 1, `markUseEffectsAreSynchronous`, Yb, sx),
      we(ox, 1, `markUseEffectsEnd`, Jb, sx),
      we(ox, 1, `markRafStart`, qb, sx),
      we(ox, 1, `markRafEnd`, Kb, sx),
      we(ox, 1, `markLayoutStylePaintEnd`, Gb, sx),
      we(ox, 1, `measureMutationEffects`, Wb, sx),
      we(ox, 1, `measureUnattributedHydrationOverhead`, Ub, sx),
      We(ox, sx),
      (lx = !1),
      (ux = { Start: Ei, End: Di }),
      (dx = class extends Error {}),
      (fx = class extends v {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof dx)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Oi(e, t);
        }
      }),
      (px = Object.freeze([])),
      (hx = new Set()),
      (gx = class {
        observers = new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (_x = (() => {
        function e(e) {
          return (
            Wi(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Gi(e) ? e : new bx(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : Gi(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              Gi(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (vx = `onUpdate`),
      (yx = `finishTransaction`),
      (bx = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new gx();
        static interpolationFor(e, t) {
          if (Gi(e)) return Ki(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Gi(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Ji(e.x, t.x), y: Ji(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((Xi ||= {})),
      (xx = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (Sx = new (Av().Hsluv)()),
      (Cx = {
        rgb: RegExp(
          `rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        rgba: RegExp(
          `rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsl: RegExp(
          `hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsla: RegExp(
          `hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsv: RegExp(
          `hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsva: RegExp(
          `hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
      }),
      (wx =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (Tx = (e) => {
        let { r: t, g: n, b: r, a: i } = ba(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (Ex = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Sa({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (Dx = (e) => {
        let { r: t, g: n, b: r, a: i } = ba(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (Ox = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Sa({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (kx = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return Ca(this);
        }
        rgb() {
          return Da(this);
        }
        hsl() {
          return oa(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(Ta(t));
            case `srgb`:
              return new e(Ea(Ta(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Ea({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = J(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = va(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!B(t) || !J.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Ax = new Map()),
      (J = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Ax.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (Ax.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = Oa(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && ha(e) !== !1),
          (e.isColorObject = (e) =>
            H(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => aa(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && kx.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...ta(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = la(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = la(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = aa(e.r, e.g, e.b, !0);
            for (let e of Object.keys(xx)) if (xx[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: Zi(i, [0, 1], [t.r, r.r], a),
                g: Zi(i, [0, 1], [t.g, r.g], a),
                b: Zi(i, [0, 1], [t.b, r.b], a),
                a: Zi(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: Zi(i, [0, 1], [u, u + f], a),
                s: Zi(i, [0, 1], [c.s, l.s], a),
                l: Zi(i, [0, 1], [c.l, l.l], a),
                a: Zi(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(na(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => oa(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        let r = Te([0, 255], [0, 1]);
        function i(e) {
          e = r(e);
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: r, b: a } = e.toRgb(t);
            return 0.2126 * i(n) + 0.7152 * i(r) + 0.0722 * i(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (jx = (e) => e instanceof Ye),
      (Mx = jv().EventEmitter),
      (Nx = class {
        _emitter = new Mx();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (Px = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (Fx = by.requestAnimationFrame || Px),
      (Ix = (e) => Fx(e)),
      (Lx = 1 / 60),
      (Rx = class extends Nx {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          Lx = e;
        }
        static get TimeStep() {
          return Lx;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), Ix(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * Lx;
        }
        tick = () => {
          this._started &&
            (Ix(this.tick),
            this.emit(`update`, this._frame, Lx),
            this.emit(`render`, this._frame, Lx),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (zx = new Rx()),
      (Bx = { target: Pa() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (Y = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Bx.target,
        hasRestrictions: () => {
          let e = Bx.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (Vx = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Oe({
        borderTopWidth: Vx(`y`),
        borderLeftWidth: Vx(`x`),
        borderRightWidth: Vx(`x`),
        borderBottomWidth: Vx(`y`),
      }),
      (Hx = p.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (Ux = {
        background: void 0,
        display: `flex`,
        flexVisas: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (Wx = {
        ...Ux,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (Gx = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (Kx = { ...Gx, fontWeight: 500 }),
      (qx = {
        ...Gx,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (Jx = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = Wa(Xi.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(Xi(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => Xi.distance(e.a, e.b)),
          e
        );
      })()),
      (X = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => X.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: qi(e.x, t),
          y: qi(e.y, t),
          width: qi(e.width, t),
          height: qi(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: X.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: X.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: Xi.distance(t, n), height: Xi.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(X.minX)), y: Math.min(...e.map(X.minY)) },
            n = { x: Math.max(...e.map(X.maxX)), y: Math.max(...e.map(X.maxY)) };
          return X.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: X.minX(e), y: X.minY(e) },
          { x: X.minX(e), y: X.maxY(e) },
          { x: X.maxX(e), y: X.minY(e) },
          { x: X.maxX(e), y: X.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < X.minX(e) ||
            t.x > X.maxX(e) ||
            t.y < X.minY(e) ||
            t.y > X.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of X.points(t)) if (!X.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= X.maxX(e) || X.maxX(t) <= e.x || t.y >= X.maxY(e) || X.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = X.maxX(e),
            r = X.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = X.maxY(e),
            r = X.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => X.intersects(t, e)) === void 0,
        isEqual: (e, t) => X.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > X.maxX(e) && (n = t.x - X.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > X.maxY(e) && (r = t.y - X.maxY(e)),
            Xi.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: X.minX(e), y: X.minY(e) },
            r = { x: X.minX(t), y: X.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = X.minX(e),
            r = X.minY(e),
            i = X.maxX(e),
            a = X.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = X.cornerPoints(e);
          return [Jx(t, n), Jx(n, r), Jx(r, i), Jx(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  W(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              W(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  W(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              W(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = Jx(t, X.center(e)),
            r = X.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && Jx.intersection(n, t, !0)) {
              let n = Yx[e];
              return (U(n, () => `Invalid edge name: ${JSON.stringify(Yx)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          U(r, `Rect array is empty`);
          let i = X.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            U(o);
            let s = X.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (Yx = [`top`, `right`, `bottom`, `left`]),
      (Xx = {
        quickfix: (e) => (
          (Ga(e.widthType) || Ga(e.heightType)) && (e.aspectRatio = null),
          G(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || Ga(e.widthType) || G(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || Ga(e.heightType) || G(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (Zx = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = Xx.quickfix({
              left: G(t) || Gi(t),
              right: G(n) || Gi(n),
              top: G(r) || Gi(r),
              bottom: G(i) || Gi(i),
              widthType: Ka(a),
              heightType: Ka(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = _x.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = _x.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? _x.getNumber(t) : null,
              right: d.right ? _x.getNumber(n) : null,
              top: d.top ? _x.getNumber(r) : null,
              bottom: d.bottom ? _x.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? _x.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? _x.getNumber(t?.sizing.height) : null,
            c = Qa(e.left, e.right);
          if (o && G(c)) i = o - c;
          else if (n && Ga(e.widthType)) i = n.width;
          else if (G(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                W(e.widthType);
            }
          let l = Qa(e.top, e.bottom);
          if (s && G(l)) a = s - l;
          else if (n && Ga(e.heightType)) a = n.height;
          else if (G(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                W(e.heightType);
            }
          return Za(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = Zx.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? _x.getNumber(l.width) : null,
            d = l ? _x.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? X.pixelAligned(f) : f;
        },
      }),
      (Qx = 200),
      ($x = 200),
      (eS = p.createContext({ parentSize: 0 })),
      (tS = (e) => {
        let t = oo(),
          { parentSize: n, children: r } = e,
          i = p.useMemo(() => ({ parentSize: n }), [co(n), lo(n)]);
        return t === 1
          ? r
            ? _(O, { children: r })
            : null
          : _(eS.Provider, { value: i, children: r });
      }),
      (nS = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(nS || {})),
      (rS = p.createContext(void 0)),
      (iS = new Set()),
      (oS = `style[data-framer-css-ssr-minified]`),
      (sS = (() => {
        if (!Rn()) return new Set();
        let e = document.querySelector(oS)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (cS = `data-framer-css-ssr`),
      (lS = (e, t, n) =>
        p.forwardRef((r, i) => {
          let { sheet: a, cache: o } = p.useContext(rS) ?? {},
            s = n;
          if (!Rn()) {
            it(t) && (t = t(go(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            dS.add(e, s);
          }
          return (
            j(() => {
              (s && sS.has(s)) ||
                (it(t)
                  ? t(go(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && ho(e, a, o));
            }, []),
            _(e, { ...r, ref: i })
          );
        })),
      (uS = class {
        styles = new Set();
        componentIds = new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (dS = new uS()),
      (fS = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (pS = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(pS || {})),
      (mS = pS),
      (hS = `framer-form-input`),
      (gS = `framer-form-input-wrapper`),
      (_S = `framer-form-input-empty`),
      (vS = `framer-form-input-forced-focus`),
      (Z = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (U(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${_o(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            U(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (yS = [
        Z(`.${hS}`, {
          padding: Z.variable(mS.Padding),
          background: `transparent`,
          fontFamily: Z.variable(mS.FontFamily),
          fontWeight: Z.variable(mS.FontWeight),
          fontSize: Z.variable(mS.FontSize),
          fontStyle: Z.variable(mS.FontStyle),
          color: Z.variable(mS.FontColor),
          fontFeatureSettings: Z.variable(mS.FontOpenType),
          fontVariationSettings: Z.variable(mS.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: Z.variable(mS.WrapperHeight, `100%`),
          letterSpacing: Z.variable(mS.FontLetterSpacing),
          textAlign: Z.variable(mS.FontTextAlignment),
          lineHeight: Z.variable(mS.FontLineHeight),
        }),
        Z(`.${hS}:focus-visible`, { outline: `none` }),
      ]),
      (bS = [Z(`.${gS}`, { overflow: `hidden` })]),
      (xS = `var(${mS.BorderTopWidth}) var(${mS.BorderRightWidth}) var(${mS.BorderBottomWidth}) var(${mS.BorderLeftWidth})`),
      (SS = [
        `.${gS}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${mS.BorderRadiusTopLeft});
        border-top-right-radius: var(${mS.BorderRadiusTopRight});
        border-bottom-right-radius: var(${mS.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${mS.BorderRadiusBottomLeft});
        corner-shape: var(${mS.CornerShape});
        border-color: var(${mS.BorderColor});
        border-top-width: var(${mS.BorderTopWidth});
        border-right-width: var(${mS.BorderRightWidth});
        border-bottom-width: var(${mS.BorderBottomWidth});
        border-left-width: var(${mS.BorderLeftWidth});
        border-style: var(${mS.BorderStyle});
        transition: var(${mS.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ]),
      (CS = `customError`),
      (wS = `valid`),
      (TS = 10),
      (ES = 8),
      (DS = 16),
      (OS = {
        backgroundRepeat: `no-repeat`,
        backgroundSize: `${DS}px`,
        maskRepeat: `no-repeat`,
        maskSize: `${DS}px`,
        backgroundColor: Z.variable(mS.IconColor),
      }),
      (kS = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `${DS}px`,
        boxSizing: `content-box`,
        padding: Z.variable(mS.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...OS,
      }),
      (AS = `--list-style-type`),
      (jS = `--max-list-digits`),
      (MS = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (NS = { display: `flex`, flexVisas: `column`, justifyContent: `flex-start` }),
      (PS = { display: `inline-block` }),
      (FS = { display: `block` }),
      (IS = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${NS.display};
            flex-direction: ${NS.flexVisas};
            justify-content: ${NS.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${Eo([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Eo([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Eo([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${PS.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${Eo([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${Eo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Eo([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Eo([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${Eo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${Eo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Eo([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Eo([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${Eo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${Eo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Eo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Eo([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${Eo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Eo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${Eo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Eo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Eo([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${Eo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Eo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${FS.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${jS}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${Do(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (LS = `--text-truncation-display-inline-for-safari-16`),
      (RS = `--text-truncation-display-none-for-safari-16`),
      (zS = `--text-truncation-line-break-for-safari-16`),
      (BS = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (VS = `(background: -webkit-named-image(i))`),
      (HS = `(contain-intrinsic-size: inherit)`),
      (US = [
        `@supports ${VS} and (not ${HS}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${BS.join(`, `)} { display: var(${LS}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${BS.map((e) => `${e}::after`).join(`, `)} { content: var(${zS}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${RS}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${LS}, ${PS.display}) }
    }`,
      ]),
      (WS = `--framer-will-change-override`),
      (GS = `--framer-will-change-effect-override`),
      (KS = `--framer-will-change-filter-override`),
      (qS = `--overflow-clip-fallback`),
      (JS = `--one-if-corner-shape-supported`),
      (YS = (e) => {
        let t = [
            `[data-framer-component-type="Text"] { cursor: inherit; }`,
            `[data-framer-component-text-autosized] * { white-space: pre; }`,
            `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
            `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
            `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
            `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
            `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
            `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
          ],
          n = [
            `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
            `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
          ],
          r = [
            `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
            `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
            `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
          ],
          i = [
            `[data-framer-cursor="pointer"] { cursor: pointer; }`,
            `[data-framer-cursor="grab"] { cursor: grab; }`,
            `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
          ],
          a = [
            `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
            `[data-framer-generated] * { pointer-events: unset }`,
          ],
          o = [
            `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
            `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
            `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          ],
          s = `(background: -webkit-named-image(i))`,
          c = (e) =>
            e
              ? [
                  `body { ${WS}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${WS}: transform; } }`,
                ]
              : [`body { ${WS}: none; ${GS}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${KS}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${KS}: filter; } }`,
                ]
              : [`body { ${KS}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${qS}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${JS}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...IS,
          ...fS,
          `
[data-framer-component-type="Stack"]:not([data-framer-generated]) > *,
[data-framer-component-type="Stack"]:not([data-framer-generated]) > [data-framer-component-type] {
    position: relative;
}`,
          `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
          ...n,
          ...r,
          `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
          `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
          `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
          ...i,
          ...u(e),
          `.svgContainer svg { display: block; }`,
          `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
          ...o,
          d,
          `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
          ...US,
          f,
        ];
      }),
      (XS = mo(() => YS(!1))),
      (ZS = mo(() => YS(!0))),
      (QS = `optional`),
      ($S = (e) => e),
      (eC =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (tC = Bo(
        (e) =>
          eC.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (nC = (e) => () => {
        Ui(e);
      }),
      (rC = () => () => {}),
      (iC = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = oC.useImageSource(e, t, n);
          return c(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      (aC = !1),
      (oC = new Proxy(iC, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? rC()
              : nC(
                  aC
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (sC = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (cC = [1, 2, 2.2]),
      (lC = [512, 1024, 2048, 4096]),
      (uC = 512),
      (dC = { position: `absolute`, ...sC, top: 0, right: 0, bottom: 0, left: 0 }),
      (fC = `src`),
      (pC = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && fC in e;
        },
      }),
      (mC = Fn()),
      (hC = p.createContext(!1)),
      (gC = class {
        sharedResizeObserver;
        callbacks = new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (_C = Rn() ? new gC() : void 0),
      (vC = `data-framer-size-compatibility-wrapper`),
      (yC = `0.000001px`),
      (bC = ` translateZ(${yC})`),
      (xC = Bn() || In() || Vn()),
      (SC = (() => {
        class e extends v {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? bs(t) : xs(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Ft(this.props, e);
          }
          componentDidUpdate(e) {
            $S(this.props).clip &&
              $S(this.props).radius === 0 &&
              $S(e).radius !== 0 &&
              Cs(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (CC = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (wC = {
        hueRotate: (e, t) => J.toHslString(J.hueRotate(J(e), t)),
        setAlpha: (e, t) => J.toRgbString(J.alpha(J(e), t)),
        getAlpha: (e) => {
          let t = ha(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => J.toRgbString(J.multiplyAlpha(J(e), t)),
        toHexValue: (e) => J.toHex(J(e)).toUpperCase(),
        toHex: (e) => J.toHexString(J(e)).toUpperCase(),
        toRgb: (e) => J.toRgb(J(e)),
        toRgbString: (e) => J.toRgbString(J(e)),
        toHSV: (e) => J.toHsv(J(e)),
        toHSL: (e) => J.toHsl(J(e)),
        toHslString: (e) => J.toHslString(J(e)),
        toHsvString: (e) => J.toHsvString(J(e)),
        hsvToHSLString: (e) => J.toHslString(J(ra(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => J.toHex(J(ra(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => J.toHexString(J(ra(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => J.toRgbString(J(ra(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => ra(e.h, e.s, e.v),
        rgbaToString: (e) => J.toRgbString(J(e)),
        rgbToHexValue: (e) => J.toHex(J(e)),
        rgbToHexString: (e) => J.toHexString(J(e)),
        hslToString: (e) => J.toHslString(J(e)),
        hslToRgbString: (e) => J.toRgbString(J(e)),
        toColorPickerSquare: (e) => J.toRgbString(J({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => J(e).isValid !== !1,
        equals: (e, t) =>
          J.isP3String(e) || J.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = J(e)),
              typeof t == `string` && (t = J(t)),
              J.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = J(e);
          return t.a === 1 ? J.toHexString(t) : J.toRgbString(t);
        },
        toFormatString: (e) => (J.isP3String(e) ? e : J.toRgbString(J(e))),
      }),
      (TC = /var\(.+\)/u),
      (EC = new Map()),
      (DC = [`stops`]),
      (OC = [`start`, `end`]),
      (kC = [`angle`, `alpha`]),
      (AC = {
        isLinearGradient: (e) => H(e) && kC.every((t) => t in e) && (js(e) || As(e)),
        hash: (e) => e.angle ^ ks(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Os(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (jC = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (MC = {
        isRadialGradient: (e) => H(e) && jC.every((t) => t in e) && (js(e) || As(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ ks(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = Os(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (NC = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (PC = new Set([...NC, ...NC.map((e) => `${e}Capture`)])),
      (FC = `overflow`),
      (IC = { x: 0, y: 0, width: 200, height: 200 }),
      (LC = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (RC = h(function (e, t) {
        let { name: n, center: r, border: i, _border: a, __portal: o } = e,
          { props: s, children: c } = us(e),
          l = Hs(s),
          u = fs(e),
          d = Ls(e),
          f = w(null),
          p = t ?? f,
          m = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": d,
            "data-framer-highlight": d === `pointer` || void 0,
            "data-layoutid": u,
            "data-framer-offset-parent-id": $S(e)[`data-framer-offset-parent-id`],
          };
        !Us(e) && n && ($S(m)[`data-framer-name`] = n);
        let [h, g] = Vs(s),
          v = Bs(s),
          y = po(v);
        (r && !(g && !y && eo(v))
          ? ((l.transformTemplate ||= ds(r)), Object.assign(m, cs(r)))
          : (l.transformTemplate ||= void 0),
          vs(e, p));
        let b = is(e),
          x = Ws(s, v, g, C(hC)),
          S = uo(
            T(O, {
              children: [
                b
                  ? _(es, {
                      alt: e.alt ?? ``,
                      image: b,
                      containerSize: g ?? void 0,
                      nodeId: e.id && ls(e.id),
                      layoutId: u,
                    })
                  : null,
                c,
                _(ns, { ...a, border: i, layoutId: u }),
              ],
            }),
            x
          ),
          E = os(e.as),
          D = as(b);
        return (
          e.fitImageDimension &&
            D &&
            ((h[e.fitImageDimension] = `auto`), (h.aspectRatio = D.width / D.height)),
          T(E, { ...m, ...l, layoutId: u, style: h, ref: p, children: [S, o] })
        );
      })),
      (zC = ko(
        h(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? _(RC, { ...e, ref: t }) : null;
        })
      )),
      (BC = `__LAYOUT_TREE_ROOT`),
      (VC = p.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (HC = class extends v {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === BC && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return _(VC.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (UC = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (WC = class {
        sharedIntersectionObserver;
        callbacks = new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (GC = s(new Map())),
      (KC = typeof IntersectionObserver > `u` ? Iv : Qs),
      (qC = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (JC = p.createContext(null)),
      (YC = class extends v {
        layoutMaybeMutated = !1;
        projectionNodes = new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === BC && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return _(Re.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (XC = (e) => {
        let t = p.useContext(VC);
        return _(YC, { ...e, sharedLayoutContext: t });
      }),
      (ZC = p.createContext(!0)),
      (QC = s({ register: () => {}, deregister: () => {} })),
      ($C = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = ic(),
          i = w({
            register: l(
              (e) => {
                if (r.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                r.set(e, void 0);
              },
              [r]
            ),
            deregister: l(
              (e) => {
                (r.get(e)?.(), r.delete(e));
              },
              [r]
            ),
          }).current;
        return (
          d(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, it(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          _(QC.Provider, { value: i, children: n })
        );
      }),
      (ew = p.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: r = !1,
        visible: i,
        transitionProps: a,
        children: o,
        backdropColor: s,
        onTapBackdrop: c,
        backfaceVisible: l,
        exitBackfaceVisible: u,
        animation: f,
        exitAnimation: p,
        instant: m,
        initialProps: h,
        exitProps: g,
        position: v = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: y,
        index: b,
        areMagicMotionLayersPresent: x,
        id: S,
        isInitial: E,
      }) {
        let D = pe(),
          O = C(Ee),
          { persistLayoutIdCache: k } = C(Hx),
          A = w({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: sc({}, h, a),
          }),
          j = w(null),
          M = O !== null && !O.isPresent;
        (t && A.current.wasCurrent === void 0 && k(),
          d(() => {
            if (e || !D) return;
            if (M) {
              A.current = { ...A.current, wasBeingRemoved: M };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = A.current,
              o = (t && !i) || (!M && A.current.wasBeingRemoved && t),
              s = n && !r,
              c = sc(A.current.origins, h, a),
              l = A.current.wasReset;
            (o || s
              ? (D.stop(), D.start({ zIndex: b, ...c, ...a }), (l = !1))
              : l === !1 && (D.stop(), D.set({ zIndex: b, ...tw, opacity: 0 }), (l = !0)),
              (A.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, M]));
        let N = m ? { type: !1 } : `velocity` in f ? { ...f, velocity: 0 } : f,
          P = m ? { type: !1 } : p || f,
          F = { ...v };
        ((F.left === void 0 || F.right === void 0) && (F.width = `auto`),
          (F.top === void 0 || F.bottom === void 0) && (F.height = `auto`));
        let I = (cc(a) || cc(h)) && (e || t || n) ? 1200 : void 0,
          ee = { ...tw, ...A.current.origins },
          te = e
            ? {
                initial: { ...ee, ...h },
                animate: { ...ee, ...a, transition: N },
                exit: { ...ee, ...g, transition: f },
              }
            : { animate: D, exit: { ...ee, ...g, transition: P } },
          ne = !(M || x === !1),
          re = !!t && ne,
          L = t && E;
        return T(zC, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || M || (t && y) ? b : void 0,
            pointerEvents: void 0,
            visibility: i ? `visible` : `hidden`,
            perspective: I,
          },
          children: [
            e &&
              _(zC, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: f,
                initial: { opacity: m && i ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: s || `transparent`,
                onTap: M ? void 0 : c,
              }),
            _(zC, {
              ...F,
              ...te,
              transition: {
                default: N,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: M ? u : l,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: { pointerEvents: void 0, opacity: L || e || (t && y) ? 1 : 0 },
              "data-is-present": ne ? void 0 : !1,
              ref: j,
              children: _(JC.Provider, {
                value: j,
                children: _(ZC.Provider, {
                  value: re,
                  children: _($C, {
                    isCurrent: re,
                    isOverlayed: r,
                    children: _(XC, {
                      isLead: t,
                      animatesLayout: !!y,
                      transition: N,
                      isExiting: !ne,
                      isOverlayed: r,
                      id: S,
                      children: o,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, oc)),
      (tw = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (nw = class {
        warning = () => {
          Ui(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (rw = s(new nw())),
      (iw = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (aw = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (ow = Xv(tw)),
      (sw = p.createContext(void 0)),
      (cw = p.createContext(void 0)),
      (lw = (() => {
        class e extends v {
          #e = null;
          state = aw();
          static defaultProps = { enabled: !0 };
          static contextType = sw;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !Ua(t) || !Ha(t)) return;
            let n = { ...iw.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = fc(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!Ua(t) || !Ha(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, iw.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = fc(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !Ua(e) || !Ha(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, iw.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, iw.Fade, t);
          }
          push(e, t) {
            this.#i(e, lc(t), t);
          }
          modal(e, t) {
            this.#i(e, iw.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, uc(t), t);
          }
          flip(e, t) {
            this.#i(e, dc(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, iw.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = Dc(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              U(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              U(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                _(
                  ew,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: Lc(o, e),
                    transitionProps: u,
                    animation: Ic(o, e),
                    backfaceVisible: Pc(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: _(Gs, { children: zc({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              _(
                ew,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: Nc(n, t),
                  transitionProps: Fc(n, t),
                  instant: Lc(n, t, !0),
                  animation: Ic(n, t),
                  exitProps: e.transition.enter,
                  visible: Rc(n, t),
                  backdropColor: jc(e.transition),
                  backfaceVisible: Mc(n, t),
                  onTapBackdrop: Bc(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: zc({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return _(zC, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: _(rw.Provider, {
                value: this,
                children: T(cw.Provider, {
                  value: i,
                  children: [
                    _(ew, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: Oc(n),
                      animation: kc(n),
                      backfaceVisible: Ac(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: _(Fa, {
                        children: _(HC, {
                          children: _(Ve, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    _(Ve, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (uw = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (dw = ko(p.forwardRef(Vc))),
      $e(Pv(), 1),
      $e(Pv(), 1),
      $e(Pv(), 1),
      (fw = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (pw = Symbol(`private`)),
      (mw = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [pw]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new gx(),
                reset() {
                  for (let t in i)
                    if (fw(i, t)) {
                      let n = fw(e, t) ? $S(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, gw);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[pw].reset()),
          (e.addObserver = (e, t) => e[pw].observers.add(t)),
          e
        );
      })()),
      (hw = class {
        set = (e, t, n, r) => {
          if (t === pw) return !1;
          let i = e[pw],
            a,
            o;
          if (
            (Gi(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = _x(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = $S(e)[t];
          if (l !== void 0) {
            Gi(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), ($S(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === pw) return $S(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[pw].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(pw);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== pw) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (gw = new hw()),
      (_w = `opacity`),
      (vw = (() => {
        function e(t = {}) {
          let n = mw(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => mw.resetObject(e));
          }),
          (e.addObserver = (e, t) => mw.addObserver(e, t)),
          e
        );
      })()),
      (yw = { update: 0 }),
      (bw = p.createContext({ update: NaN })),
      (xw = class extends v {
        observers = [];
        state = yw;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), zx.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), vw.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            vw._stores.forEach((e) => {
              let t = vw.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            _(bw.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      $e(Pv(), 1),
      (Sw = `__framer__`),
      (Cw = Sw.length),
      (ww = p.createContext(void 0)),
      (Tw = p.createContext(void 0)),
      (Ew = `ssr-variant`),
      (Dw = `ssr-variant-group-separator`),
      (Ow = p.forwardRef(function (e, t) {
        let n = el(t),
          r = p.useContext(Tw),
          i = p.useSyncExternalStore(Vv, Uv, Hv),
          a = Ra(() => (i ? (Rn() ? 1 : 2) : 0)),
          o = p.useContext(ww);
        return Yr(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, cl(t, c, i));
            case 1:
              return rl(i, s, c, u, l, d, n, t);
            case 2:
              return rl(i, s, c, u, l, d, $c, void 0);
            default:
              W(a);
          }
        }, [o, r, n, e]);
      })),
      (kw = lS(Ow, `.${Ew} { display: contents }`, `PropertyOverrides`)),
      (Aw = `default`),
      (jw = new Set([Aw])),
      (Mw = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (U(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (U(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = Aw, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return Aw;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = il(r)) : Aw;
        }
        setAll(e, t = jw, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = it(n.transformTemplate) ? n.transformTemplate?.({}, Pw) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: H(a) ? a : void 0,
              animate: H(o) ? o : void 0,
              transformTemplate: B(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (Nw = new Mw()),
      (Pw = `__Appear_Animation_Transform__`),
      (Fw = `data-framer-appear-id`),
      (Iw = `data-framer-appear-animation`),
      (Lw = (e) => {
        if (Ro())
          return {
            animate: ul(e.animate) ? e.animate : void 0,
            initial: ul(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (Rw = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (zw = (e) => ({
        x: re(e?.x ?? 0),
        y: re(e?.y ?? 0),
        opacity: re(e?.opacity ?? 1),
        scale: re(e?.scale ?? 1),
        rotate: re(e?.rotate ?? 0),
        rotateX: re(e?.rotateX ?? 0),
        rotateY: re(e?.rotateY ?? 0),
        skewX: re(e?.skewX ?? 0),
        skewY: re(e?.skewY ?? 0),
        transformPerspective: re(e?.transformPerspective ?? 0),
      })),
      (Bw = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (Vw = { willChange: `transform` }),
      Object.freeze(Vw),
      (Hw = {}),
      Object.freeze(Hw),
      (Uw = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (Ww = () => {
        let e = w();
        return (
          d(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (Gw = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (Kw = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (qw = 1),
      (Jw = 4),
      (Yw = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollVisas`,
      ])),
      (Xw = [`animate`, `animate`]),
      (Zw = { inputRange: [], outputRange: [] }),
      (Qw = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      ($w = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (eT = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (tT = [0, 1]),
      (nT = { parallax: Gw, styleAppear: Yw, styleTransform: Qw, loop: Uw, presence: Kw }),
      (rT = Xv(nT)),
      (iT = (e) => e.reduce((e, t) => (e += t), 0)),
      (aT = (e) => e.reduce((e, t) => (e *= t), 1)),
      (oT = `current`),
      (sT = (e) =>
        p.forwardRef((t, n) => {
          if (t.__withFX)
            return _(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = Lw(t);
          if (r) return _(e, { ...t, ...r, ref: n });
          let {
              parallax: i = {},
              styleAppear: a = {},
              styleTransform: o = {},
              presence: s = {},
              loop: c = {},
              forwardedProps: l,
              targetOpacityValue: u,
              withPerspective: d,
              inSmartComponent: f = !1,
            } = Nl(t),
            m = Ys(n),
            { values: h, style: g } = yl(s, m, f, t.style, t[de]),
            { values: v, style: y } = hl(i, m, t.style?.visibility),
            { values: b, style: x } = jl(o, m),
            { values: S, style: C } = Dl(a, m),
            { values: w, style: T } = pl(c, m),
            E = p.useMemo(() => {
              let e = new Ye(u ?? 1);
              return {
                scale: [S.scale, w.scale, h.scale, b.scale],
                opacity: [S.opacity, w.opacity, h.opacity, e, b.opacity],
                x: [S.x, w.x, h.x, b.x],
                y: [S.y, w.y, v.y, h.y, b.y],
                rotate: [S.rotate, w.rotate, h.rotate, b.rotate],
                rotateX: [S.rotateX, w.rotateX, h.rotateX, b.rotateX],
                rotateY: [S.rotateY, w.rotateY, h.rotateY, b.rotateY],
                skewX: [S.skewX, w.skewX, h.skewX, b.skewX],
                skewY: [S.skewY, w.skewY, h.skewY, b.skewY],
                transformPerspective: [b.transformPerspective, S.transformPerspective],
              };
            }, [u, b, v, S, w, h]);
          Fl(t.style, E);
          let D = Ae(E.scale, aT),
            O = Ae(E.opacity, aT),
            k = Ae(E.x, iT),
            A = Ae(E.y, iT),
            j = Ae(E.rotate, iT),
            M = Ae(E.rotateX, iT),
            N = Ae(E.rotateY, iT),
            P = Ae(E.skewX, iT),
            F = Ae(E.skewY, iT),
            I = Ae(E.transformPerspective, iT),
            { drag: ee, dragConstraints: te } = l;
          ms(ee && Pl(te) ? te : void 0);
          let ne = {
            opacity: O,
            scale: D,
            x: k,
            y: A,
            rotate: j,
            rotateX: M,
            rotateY: N,
            skewX: P,
            skewY: F,
          };
          ct(d) && (ne.transformPerspective = I);
          let re = Il(t.animate) ? t.animate : void 0,
            L = Il(t.initial) ? t.initial : void 0,
            R = Il(t.exit) ? t.exit : void 0,
            ie = f && !s.presenceInitial ? { initial: L, animate: re, exit: R } : {};
          return _(e, {
            ...l,
            ...ie,
            __withFX: !0,
            style: { ...t.style, ...y, ...x, ...T, ...ne, ...C, ...g },
            values: h,
            ref: m,
          });
        })),
      (cT = s({})),
      (lT = p.createContext({})),
      (uT = p.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = p.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = el(a);
        return _(lT.Provider, { value: o, children: s(r, i) });
      })),
      (dT = (e) =>
        p.forwardRef((t, n) =>
          _(e, { layoutId: fs(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (fT = !1),
      (pT = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!zl(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              _t(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          _n(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!zl(e)) throw e;
          return ((fT = !0), this.props.children);
        }
      }),
      (mT = n === void 0 ? null : new Promise(() => {})),
      (hT = _(Bl, {})),
      (gT = s(!1)),
      (gT.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (_T = _(Hl, {})),
      (vT = class extends v {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Wl(this.props.getErrorMessage(), t?.componentStack), Ul(e, t));
        }
        render() {
          let { children: e, fallback: t = _T } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (yT = class extends v {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Ul(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (bT = p.createContext(void 0)),
      (xT = `code-crash:`),
      (ST = dT(
        p.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l
        ) {
          let u = Ra(() => (t ? `${t}-container` : void 0)),
            d = os(n),
            f = iu(
              p.Children.map(e, (e) =>
                p.isValidElement(e) ? p.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return _(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: _(hC.Provider, {
              value: !0,
              children: _(yb.Provider, {
                value: i ?? null,
                children: _(La, {
                  enabled: !1,
                  children: _(qe, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        })
      )),
      (CT = p.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = iu(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = os(f);
          return _(yb.Provider, {
            value: a ?? null,
            children: _(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return _(yb.Provider, {
            value: a ?? null,
            children: _(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (wT = s({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (TT = `framer-cursor-none`),
      (ET = `framer-pointer-events-none`),
      (DT = b(function ({ children: e }) {
        let t = Ra(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = au(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = ye();
        return T(wT.Provider, { value: t, children: [e, !n && _(jT, {})] });
      })),
      (OT = lS(
        DT,
        [
          `.${TT}, .${TT} * { cursor: none !important; }`,
          `.${ET}, .${ET} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (kT = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (AT = `data-framer-portal-id`),
      (jT = b(function () {
        let { onRegisterCursors: e } = C(wT),
          [t, n] = o(!1),
          i = R(0),
          a = R(0),
          s = R(0),
          c = w(null),
          u = w({ cursors: {}, cursorHash: void 0 }),
          f = ps();
        (r(() => {
          let e = by.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? A(() => n(!1)) : n(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || n(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          d(() => {
            if (!t) return;
            let e = 0,
              n = 0;
            function r() {
              (i.set(e), a.set(n), je(s, 1, { type: `tween`, duration: 0.2 }));
            }
            let o = () => {
              if (st(u.current.cursors)) return;
              let t = lu(e, n);
              t !== u.current.cursorHash && ((u.current.cursorHash = t), Me.update(() => f()));
            };
            function l(t) {
              if (t.pointerType === `touch`) {
                Be(o);
                return;
              }
              (Me.read(o, !0), (e = t.clientX), (n = t.clientY), Me.update(r));
            }
            function d(e) {
              if (e.target === c.current || !c.current) return;
              let t = new PointerEvent(e.type, {
                bubbles: !0,
                cancelable: e.cancelable,
                pointerType: e.pointerType,
                pointerId: e.pointerId,
                composed: e.composed,
                isPrimary: e.isPrimary,
                buttons: e.buttons,
                button: e.button,
              });
              Me.update(() => {
                c.current?.dispatchEvent(t);
              });
            }
            return (
              by.addEventListener(`pointermove`, l),
              document.addEventListener(`pointerdown`, d),
              document.addEventListener(`pointerup`, d),
              Me.read(o, !0),
              () => {
                (by.removeEventListener(`pointermove`, l),
                  document.removeEventListener(`pointerdown`, d),
                  document.removeEventListener(`pointerup`, d),
                  Be(o));
              }
            );
          }, [s, i, a, f, t]),
          d(() => {
            if (!t) return;
            function e() {
              je(s, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              by.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), by.removeEventListener(`blur`, e));
              }
            );
          }, [s, t]),
          r(() => {
            function t(e) {
              ((u.current.cursors = e),
                (u.current.cursorHash = st(e) ? null : lu(i.get(), a.get())),
                f());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(TT, !1));
            };
          }, [i, a, e, f]));
        let { cursors: p, cursorHash: m } = u.current,
          h = m ? p[m] : null,
          g = ou(h);
        r(() => {
          t && document.body.classList.toggle(TT, g);
        }, [g, t]);
        let v = h?.component,
          y = h?.transition ?? { duration: 0 },
          b = y.duration === void 0 ? y : { ...y, duration: y.duration * 1e3 },
          x = F(i, b),
          S = F(a, b),
          T = Ae(() => x.get() + (h?.offset?.x ?? 0)),
          D = Ae(() => S.get() + (h?.offset?.y ?? 0)),
          O = h?.alignment,
          k = h?.placement,
          j = l((e, t) => `translate(${cu(k, O)}) ${t}`, [O, k]);
        return !t || !h || !v
          ? null
          : _(E, {
              children: _(v, {
                transformTemplate: j,
                style: { ...kT, x: T, y: D, opacity: s },
                globalTapTarget: !0,
                variant: h?.variant,
                ref: c,
                className: ET,
              }),
            });
      })),
      (MT = `webPageId`),
      (NT = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            U(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (U(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((Lv && !Vn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(fu(e), e), this.collectedLinks.set(fu(t), t));
          let n = this.nestingInfo.get(fu(e)) ?? new Set();
          (n.add(fu(t)), this.nestingInfo.set(fu(e), n));
        }
      }),
      (PT = new NT()),
      (FT = `element`),
      (IT = `collection`),
      (LT = `collectionItemId`),
      (RT = `pathVariables`),
      (zT = `framer/page-link,`),
      (BT = s(void 0)),
      (VT = `overlay`),
      (HT = `template-overlay`),
      (UT = p.forwardRef(function ({ Component: e, ...t }, n) {
        return e ? _(e, { ...t, ref: n }) : null;
      })),
      (WT = class extends v {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((n.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(_t(Rv ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          _n(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (Rv && document.getElementById(`main`)?.innerHTML) || ``;
          return _(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${_t()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (GT = /:([a-z]\w*)/gi),
      (KT = s(void 0)),
      (qT = 500),
      (JT = 0.9),
      (YT = 1.7),
      (XT = 4),
      (ZT = 1 / 0),
      (QT = new WeakMap()),
      ($T = new Set()),
      (eE = new Map()),
      (tE = !Zy || typeof IntersectionObserver > `u` ? null : Iu()),
      (nE = Au(
        h(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: s,
            scopeId: l,
            motionChild: u,
            ...d
          },
          f
        ) {
          let p = Rt(),
            m = Bt(),
            h = Pu(),
            { activeLocale: g, locales: _ } = Zr(),
            v = Uu(),
            b = Yn(),
            x = pu(),
            S = Wu({ nodeId: s, clickTrackingId: i, router: p, href: t, activeLocale: g }),
            C = c(() => {
              if (!t) return {};
              let e = du(t) ? t : bu(t);
              if (!e) return {};
              if (B(e))
                return Ju(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: n,
                    trackLinkClick: S,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  b,
                  g?.id,
                  _,
                  h
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = v(i, s, g);
              if (mt(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: y,
                } = ju(p, m, e, g, c, h),
                x = Ru(n, !0),
                C = x === `_blank`,
                w = { pathVariables: f, locale: y },
                T = (e) => Ku(p, l, () => b(l, w, !1, !C), d, f, r, e);
              return {
                href: u,
                target: x,
                onClick: qu(u, S, T),
                "data-framer-page-link-current": (m && Fu(m, e, h)) || void 0,
                navigate: T,
                preload: () => b(l, w, !0, !C),
                _routeId: l,
                _pathVariables: f,
                _locale: y,
              };
            }, [t, p, g, h, n, m, r, S, a, _, o, v, b]),
            w = Ys(y(e) && `ref` in e ? e.ref : void 0),
            { navigate: T, preload: E, _routeId: D, _pathVariables: O, _locale: k, ...A } = C;
          Xs(
            w,
            (e) => {
              if (!(e === null || !D || !E || x))
                return tE?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`);
            },
            [E, D, O, k, x]
          );
          let j = !!T;
          return Su(
            el(f).cloneAsArray(e, (e) => Yu(e, { ...d, ...Zu(A, u, j) }, w)),
            l,
            s,
            t,
            C,
            w
          );
        })
      )),
      (rE = `framer`),
      (iE = 3),
      (aE = 30),
      (oE = 1e4),
      (sE = `3`),
      (cE = `__framer`),
      (lE = [
        `website`,
        `company`,
        `message`,
        `subject`,
        `title`,
        `description`,
        `feedback`,
        `notes`,
        `details`,
        `remarks`,
        `comments`,
      ]),
      (uE = Date.now()),
      (dE = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (fE = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (pE = () => ((Date.now() - uE) / 1e3).toFixed(2)),
      (mE = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          p.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          p.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` && ((r.setAttribute = !0), (r.inputChangeTimeSinceModuleLoad = pE())),
                a(e, t));
            };
            let o = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`);
            o &&
              Object.defineProperty(n, "value", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o.get?.call(this) ?? ``;
                },
                set: function (e) {
                  ((r.valueProperty = !0),
                    (r.inputChangeTimeSinceModuleLoad = pE()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted), (r.inputChangeTimeSinceModuleLoad = pE()));
            };
            return (
              n.addEventListener(`input`, s),
              () => {
                ((n.setAttribute = i.bind(n)),
                  o && Object.defineProperty(n, "value", o),
                  n.removeEventListener(`input`, s));
              }
            );
          }, [t, e]),
          _(`input`, {
            ref: t,
            type: `text`,
            name: n,
            suppressHydrationWarning: !0,
            tabIndex: -1,
            autoComplete: `one-time-code`,
            "aria-hidden": `true`,
            style: { position: `absolute`, transform: `scale(0)` },
            defaultValue: ``,
            "data-1p-ignore": !0,
            "data-lpignore": `true`,
            "data-form-type": `other`,
            "data-bwignore": !0,
          })
        );
      }),
      (hE = { state: `pending` }),
      (gE = { state: `success` }),
      (_E = { state: `incomplete` }),
      (vE = { state: `complete` }),
      (yE = { state: `error` }),
      (bE = p.createContext(void 0)),
      (xE = p.forwardRef(function (
        {
          action: e,
          children: t,
          redirectUrl: n,
          onSuccess: r,
          onError: i,
          onLoading: a,
          submitTrackingId: o,
          nodeId: s,
          ...c
        },
        l
      ) {
        let u = p.useRef(null),
          d = l ?? u,
          {
            states: f,
            convertHoneypotFieldsForSubmission: m,
            replaceHoneypotWithMetadata: h,
          } = id(),
          g = Rt(),
          v = Bt(),
          y = Pu(),
          b = On(),
          [x, S] = p.useReducer(cd, _E),
          { activeLocale: w, locales: E } = Zr(),
          D = C(bE),
          O = p.useRef({ onSuccess: r, onError: i, onLoading: a });
        O.current = { onSuccess: r, onError: i, onLoading: a };
        let k = p.useRef(!1);
        async function j(e) {
          if (B(e)) {
            let t = Mu(g, e, y, E);
            if (!t) {
              dd(e, d);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            g.navigate?.(n, r, i);
            return;
          }
          U(
            du(e),
            () => `Expected link to be either a LinkToWebPage or a string: ${JSON.stringify(e)}`
          );
          let t = await Vu(e.unresolvedPathSlugs, e.unresolvedHashSlugs, w, b),
            { routeId: n, elementId: r, pathVariables: i } = ju(g, v, e, w, t, y);
          g.navigate?.(n, r, i);
        }
        let M = async (t) => {
            if ((t.preventDefault(), !e || !D || k.current)) return;
            ((k.current = !0), m());
            let r = new FormData(t.currentTarget);
            (await Xy({ priority: `user-visible`, continueAfter: `paint` }),
              h(r),
              A(() => S({ type: `submit` })),
              rd(r, by.document));
            for (let [e, t] of r) t instanceof File && r.delete(e);
            try {
              (O.current.onLoading?.(),
                od({ router: g, nodeId: s, submitTrackingId: o, activeLocale: w }),
                await pd(e, r, D),
                A(() => S({ type: `success` })),
                O.current.onSuccess?.(),
                n && (await j(n)));
            } catch (e) {
              (A(() => S({ type: `error` })), O.current.onError?.(), console.error(e));
            }
            k.current = !1;
          },
          N = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` && n.checkValidity() && (e.preventDefault(), M(e)));
          },
          P = async (e) => {
            let t = e.currentTarget;
            (await Xy({ priority: `background`, continueAfter: `paint` }),
              A(() => S({ type: fd(t) ? `incomplete` : `complete` })));
          };
        return T(he.form, {
          ...c,
          onSubmit: ld(x) ? M : ud,
          onKeyDown: N,
          onChange: P,
          ref: d,
          children: [t(x), _(ad, { states: f })],
        });
      })),
      (SE = `__framer_force_showing_editorbar_since`),
      (CE = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (wE = () => {
        try {
          return !!localStorage[SE];
        } catch {
          return !1;
        }
      }),
      (TE = () => !wE()),
      (EE = (() => {
        let e = s(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (DE = `main`),
      (OE = `framerGeneratedPage`),
      (kE = `<!-- Start of headStart -->`),
      (AE = `<!-- End of headStart -->`),
      (jE = `<!-- Start of headEnd -->`),
      (ME = `<!-- End of headEnd -->`),
      (NE = `<!-- Start of bodyStart -->`),
      (PE = `<!-- End of bodyStart -->`),
      (FE = `<!-- Start of bodyEnd -->`),
      (IE = `<!-- End of bodyEnd -->`),
      (LE = p.createContext(void 0)),
      (RE = null),
      (zE = null),
      Bv(Pd),
      (BE = (e, t, r, i, a, o) => {
        let s = C(bE),
          c = w(),
          l = On(),
          u = w(!0);
        return (
          d(() => {
            function d() {
              (!RE || !zE) && Pd();
              let n = r ? new URL(r, by.location.href) : by.location,
                c = {
                  version: xy,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: n.href,
                  hostname: n.hostname,
                  pathname: n.pathname,
                  search: n.search || null,
                  hash: n.hash || null,
                  timezone: RE,
                  locale: zE,
                },
                d = u.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = d ?? null;
                    if (d === void 0) {
                      let n = e.collectionId && l?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && B(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = (mt(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (c.current = d()),
                t = e instanceof Promise ? await e : e;
              ((c.current = t),
                u.current ? (u.current = !1) : _n(`published_site_pageview`, t, `eager`));
            })();
            let f = async (e) => {
              if (e.persisted) {
                let e = (c.current = d()),
                  t = e instanceof Promise ? await e : e;
                ((c.current = t), _n(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              n.addEventListener(`pageshow`, f),
              () => {
                n.removeEventListener(`pageshow`, f);
              }
            );
          }, [e, t, r, i, a, s, l, o]),
          c
        );
      }),
      (VE = 0),
      (HE = 500),
      (UE = 200),
      (WE = { status: `loading`, data: void 0 }),
      (GE = 5e3),
      (KE = () => {}),
      (qE = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = new Map();
        #e = new Map();
        #t = new Set();
        #n = new Map();
        #r = new Map();
        #i = new Map();
        #a = new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = uf(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = uf(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = by.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = this.#r.get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          this.#a.set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              mf(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = Yc(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && mf(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!Rn() || !hu(e.url, !1)) return;
          let t = uf(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = pf(n, e);
          return (e.resultOutputType === `image` && B(i) && (await sf(i).catch(KE)), i);
        }
        async fetchWithCache(e) {
          if (!Rn()) return;
          let t = uf(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && mf(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, WE);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !this.#t.has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!hu(r, !1)) return KE;
          let a = uf(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n &&
                (n.delete(t),
                n.size === 0 && this.#e.delete(a),
                this.#e.size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (JE = s(void 0)),
      (YE = s(!0)),
      (XE = ({ children: e, client: t }) => {
        let [n] = o(() => t ?? new qE()),
          [r, i] = o(!0);
        return (
          d(
            () => (
              n.hydrateCache(),
              A(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          _(YE.Provider, { value: r, children: _(JE.Provider, { value: n, children: e }) })
        );
      }),
      (Ue.WillChange = Qe),
      (ZE = Au(
        h(function ({ links: e, children: t, ...n }, r) {
          return el(r)(t(gf((t) => e.map(t), [e])), n);
        })
      )),
      (QE = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return jf(e, t);
            case `boolean`:
              return Nf(e);
            case `color`:
              return If(e);
            case `date`:
              return Rf(e);
            case `enum`:
              return Bf(e);
            case `file`:
              return Hf(e);
            case `link`:
              return Wf(e);
            case `number`:
              return Kf(e);
            case `object`:
              return Yf(e, t);
            case `responsiveimage`:
              return Zf(e);
            case `richtext`:
              return $f(e);
            case `string`:
              return rp(e);
            case `vectorsetitem`:
              return tp(e);
            case `unknown`:
              return e;
            default:
              W(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return at(e)
            ? { type: `boolean`, value: e }
            : dt(e)
              ? { type: `date`, value: e.toISOString() }
              : V(e)
                ? { type: `number`, value: e }
                : B(e)
                  ? { type: `string`, value: e }
                  : ot(e)
                    ? { type: `array`, value: e.map(QE.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && ap(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && ap(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && ap(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && ap(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && ap(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => QE.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => QE.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = ip(e),
            i = ip(t);
          return lt(r) || lt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = ip(e),
            i = ip(t);
          return lt(r) || lt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = ip(e),
            i = ip(t);
          return lt(r) || lt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(QE.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return B(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              W(e);
          }
        },
      }),
      ($E = { type: `unknown`, isNullable: !0 }),
      (eD = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = Lo(e);
          U(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (U(n !== `array`, `Array properties are not supported`),
              U(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        collection;
        locale;
        schema;
        indexes = [];
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (ut(i)) continue;
            let a = this.schema[t];
            if (!ct(a)) {
              if ((U(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await op(this.collection, this.locale))[t]?.[n];
          return ry.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems() {
          return (await op(this.collection, this.locale)).map((e, t) => {
            let n = String(t);
            return this.getDatabaseItem(e, n);
          });
        }
        async resolveItems(e) {
          let t = await op(this.collection, this.locale);
          return e.map((e) => {
            let n = Number(e),
              r = t[n];
            return (U(r, `Can't find collection item`), this.getDatabaseItem(r, e));
          });
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (tD = new Map()),
      (nD = new WeakMap()),
      (rD = `$r_`),
      (iD = new Map()),
      (aD = class {
        constructor(e, t, n = {}) {
          ((this.options = n), (this.collections = _p(e, t)));
        }
        options;
        collections;
        *resolveArrayValue(e) {
          return yield* Sf(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* xf(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          U(mp(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          U(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = this.options.richTextMode === `raw` ? t.pointer : n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return pt(t) ? yield t : t;
        }
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          U(gp(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (U(n, `Can't find collection for vector set item pointer`),
            U(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return pt(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (oD = `index`),
      (sD = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), q(this.name, ...e));
        }
      }),
      (cD = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new uD();
        fields = new Q();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (lD = class {
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Q();
      }),
      (uD = class extends sD {
        name = `Indexes`;
      }),
      (dD = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          U(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                U(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: pp(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                U(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: hp(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Q = class extends sD {
        name = `Fields`;
      }),
      (fD = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return q(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (pD = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return q(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== oD) return !1;
          return !0;
        }
      }),
      (mD = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return q(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (hD = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (U(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (U(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = new Map();
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new pD();
        }
        getRequiredResolvedFields() {
          let e = new Q();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new mD(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          U(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (U(e, `Field must exist`), e.field);
        }
      }),
      (gD = 1e3),
      ($ = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = xp(),
            i = Sp(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (_D = class {
        pointers = new Map();
        values = new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (vD = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        fields;
        tuples;
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (yD = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (bD = class extends yD {
        group;
        getGroup() {
          return (U(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (U(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return vf(this.evaluate(void 0));
        }
        evaluateAsync() {
          return yf(this.evaluate(void 0));
        }
      }),
      (xD = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return q(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (SD = class e extends bD {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        projections;
        passthrough;
        inputGroup;
        getHash() {
          return q(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Q();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Q();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new mD(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new $(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = $.max(i, n);
          }
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new xD(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Sf(
              n.tuples.map((t) =>
                Sf(
                  this.projections.map((n) => xf({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new _D();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            U(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (CD = { type: 0 }),
      (wD = class extends yD {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        evaluateSync() {
          return vf(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return yf(this.evaluate(void 0, void 0));
        }
      }),
      (TD = { type: 0 }),
      (ED = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return q(`CaseCondition`, this.when, this.then);
        }
      }),
      (DD = class e extends wD {
        constructor(e, t, n) {
          let r = new Q(),
            i = new Q(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        getHash() {
          return q(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new $(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new ED(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* xf({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Sf(
              this.conditions.map((n) =>
                xf({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (QE.equal(n, e, TD)) return t;
          } else for (let { when: e, then: t } of r) if (Pf(e)) return t;
          return i;
        }
      }),
      (OD = class {
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        build() {
          let e = new hD();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Q(),
            o;
          if (t.orderBy) {
            o = new pD();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (ct(t)) continue;
                a.add(t.field);
                let r = new fD(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new dD(bp(this.fieldId++), void 0, t.definition, void 0),
                  a = new xD(t, r);
                i.push(a);
                let s = new fD(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Q(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (ct(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              U(n.alias, `Subqueries should have an alias`);
              let r = bp(this.fieldId++),
                a = n.alias,
                s = new dD(r, a, t.definition, void 0),
                c = new xD(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              W(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = up(t.data, this.locale),
            i = t.alias,
            a = new cD(vp(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new dD(bp(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new dD(bp(this.fieldId++), oD, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: oD, collectionName: i });
            let t = new pD(),
              r = new fD(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new pD(),
              o = new lD(yp(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new pD(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              W(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              W(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant($E, null);
        }
        buildLiteralValue(e) {
          let t = QE.parse(e.value);
          return this.normalizer.newScalarConstant($E, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (U(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                U(n, `Missing argument`),
                U(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                U(n, `Missing argument`),
                U(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              W(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new kD(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new kD(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new ED(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              W(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              W(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (kD = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Q();
        referencedOuterFields = new Q();
      }),
      (AD = class e extends bD {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        predicate;
        inputGroup;
        getHash() {
          return q(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new mD(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Sf(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Pf(n[t] ?? null));
        }
      }),
      (jD = class e extends bD {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return q(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return $.estimate(1, e ? 100 * gD : 50 * gD);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection;
          return new vD(
            this.getOutputFields(),
            (yield e.data.lookupItems(this.query)).map((n) => {
              let r = new _D();
              for (let i of e.resolvedFields) {
                let e = i.getValue(n);
                (r.addPointer(t, n.pointer), r.addValue(i, e));
              }
              return r;
            })
          );
        }
      }),
      (MD = class e extends bD {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return q(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new mD(new pD(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* xf({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (ND = class e extends bD {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return q(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return $.estimate(1, 200 * gD);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields();
          return new vD(
            t,
            (yield e.data.scanItems()).map((n) => {
              let r = new _D();
              for (let i of t) {
                let t = i.getValue(n);
                (r.addPointer(e, n.pointer), r.addValue(i, t));
              }
              return r;
            })
          );
        }
      }),
      (PD = class e extends bD {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return q(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new mD(new pD(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* xf({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (FD = class e extends wD {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* xf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Pf(n) && Pf(r) };
        }
      }),
      (ID = class extends wD {
        constructor(e, t) {
          let n = new Q(),
            r = new Q();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return q(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (LD = { type: 0 }),
      (RD = class e extends wD {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* xf({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: QE.contains(n, r, LD) };
        }
      }),
      (zD = { type: 0 }),
      (BD = class e extends wD {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* xf({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: QE.endsWith(n, r, zD) };
        }
      }),
      (VD = class e extends wD {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* xf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: QE.equal(n, r, CD) };
        }
      }),
      (HD = class e extends wD {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* xf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: QE.greaterThan(n, r, CD) };
        }
      }),
      (UD = class e extends wD {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* xf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: QE.greaterThanOrEqual(n, r, CD) };
        }
      }),
      (WD = class e extends wD {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* xf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: QE.lessThan(n, r, CD) };
        }
      }),
      (GD = class e extends wD {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* xf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: QE.lessThanOrEqual(n, r, CD) };
        }
      }),
      (KD = class e extends wD {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* xf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !QE.equal(n, r, CD) };
        }
      }),
      (qD = class e extends wD {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* xf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Pf(n) || Pf(r) };
        }
      }),
      (JD = { type: 0 }),
      (YD = class e extends wD {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* xf({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: QE.startsWith(n, r, JD) };
        }
      }),
      (XD = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof AD) {
            if (e.predicate instanceof FD) {
              let n = new MD(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof qD) {
              let n = new PD(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof ND)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new jD(n, Cp(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof AD) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof ND)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof VD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ID &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = Cp(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new jD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof KD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ID &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = Cp(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new jD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof WD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ID &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Cp(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new jD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof GD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ID &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Cp(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new jD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof HD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ID &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Cp(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new jD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof UD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ID &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Cp(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new jD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof RD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof ID &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = Cp(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new jD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof YD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof ID &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = Cp(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new jD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof BD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof ID &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = Cp(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new jD(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (ZD = class {
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        id;
        relational;
        nodes = [];
        winners = new Map();
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new QD();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          U(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (QD = class {
        node;
        cost = new $(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), $.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      ($D = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (eO = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new ZD(wp(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new $D(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            U(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (tO = class e extends bD {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        getHash() {
          return q(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Q();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Q(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new mD(new pD(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return $.max($.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new vD(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new _D();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* xf({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof VD) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new vD(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new _D();
              (n.merge(i),
                n.merge(a),
                Pf(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (nO = class e extends bD {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        limit;
        ordering;
        inputGroup;
        getHash() {
          return q(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new mD(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* xf({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = qf(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (rO = class e extends bD {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        offset;
        ordering;
        inputGroup;
        getHash() {
          return q(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new mD(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* xf({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = qf(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (iO = class e extends wD {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return q(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q(),
            t = Object.values(this.namedFields);
          for (let n of t) ct(n.collection) || e.add(n);
          return new mD(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new _D();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (aO = class e extends wD {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            U(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return q(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return QE.cast(n, this.definition);
        }
      }),
      (oO = class e extends wD {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          return q(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q();
          return (ct(this.field.collection) || e.add(this.field), new mD(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new _D();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (sO = { type: 0 }),
      (cO = class e extends wD {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* xf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: QE.in(n, r, sO) };
        }
      }),
      (lO = { type: 1 }),
      (uO = class e extends wD {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return q(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* xf({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: QE.indexOf(n, r, lO) };
        }
      }),
      (dO = class extends Error {}),
      (fO = class e extends wD {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        getHash() {
          return q(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* xf({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = Ep(n),
            a = Ep(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (pO = class e extends wD {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return q(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: QE.length(n) };
        }
      }),
      (mO = class e extends wD {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !Pf(yield* this.input.evaluate(e, t)) };
        }
      }),
      (hO = { type: 0 }),
      (gO = class e extends wD {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* xf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !QE.in(n, r, hO) };
        }
      }),
      (_O = class extends wD {
        constructor(e, t) {
          U(e.name !== oD, `Invalid field name`);
          let n = new Q(),
            r = new Q();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        field;
        isOuterField;
        definition;
        getHash() {
          return q(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (U(e, `Context must exist`), e.getValue(this.field))
            : (U(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (vO = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new ND(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new jD(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new tO(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof ID && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof tO && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new AD(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new SD(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof SD &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new nO(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new rO(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof ID) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new _O(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new ID(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof mO)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof VD) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof KD) return this.newScalarEquals(e.left, e.right);
          if (e instanceof WD) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof GD) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof HD) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof UD) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof FD) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof qD) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new mO(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof ID && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof ID && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof ID && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof ID && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new FD(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof ID && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof ID && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof ID && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof ID && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new qD(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof _O;
          if (t instanceof _O && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new VD(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof _O;
          if (t instanceof _O && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new KD(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof _O;
          if (t instanceof _O && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new WD(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof _O;
          if (t instanceof _O && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new GD(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof _O;
          if (t instanceof _O && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new HD(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof _O;
          if (t instanceof _O && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new UD(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new cO(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new gO(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new ED(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new DD(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new RD(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new YD(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new BD(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new pO(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new uO(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new iO(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new oO(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new fO(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new aO(e, t);
          return this.finishScalar(n);
        }
      }),
      (yO = class extends bD {}),
      (bO = class e extends yO {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        fields;
        resolver;
        inputGroup;
        getHash() {
          return q(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Q();
          return new mD(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return $.estimate(0, 100 * gD).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          U(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            U(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Q()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) Dp(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r);
              return (
                U(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new _D();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (U(s, `Item not found`), U(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (xO = { type: 0 }),
      (SO = class e extends yO {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        ordering;
        inputGroup;
        getHash() {
          return q(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== oD && (ct(e.collection) || t.add(e));
          return new mD(new pD(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new $(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === oD) {
                let r = n.collection;
                U(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                U(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                U(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!QE.equal(a, o, xO)) {
                if (lt(a) || QE.lessThan(a, o, xO)) return i ? -1 : 1;
                if (lt(o) || QE.greaterThan(a, o, xO)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (CO = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new eO();
        normalizer = new vO(this.memo);
        explorer = new XD(this.normalizer);
        optimize() {
          let e = new OD(this.normalizer, this.query, this.locale).build(),
            t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (U(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new bO(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new SO(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (wO = _f(`query-engine`)),
      (TO = class {
        async evalQuery(e, t, n, r = {}) {
          wO.enabled &&
            wO.debug(`Query:
${Bp(e)}`);
          let i = new aD(e, t, r),
            [a, o] = new CO(e, t, i).optimize(),
            s = await a.evaluateAsync(),
            c = Object.entries(o),
            l = [],
            u = bf(
              Sf(
                s.tuples.map((e) => {
                  let t = {},
                    r = {};
                  for (let [a, o] of c) {
                    let s = e.getValue(o);
                    ((t[a] = i.resolveValue(s)), n && (r[a] = s));
                  }
                  return (n && l.push(r), xf(t));
                })
              )
            );
          return n ? [mt(u) ? await u : u, l] : u;
        }
        async serializeableQuery(e, t) {
          return this.evalQuery(e, t, !0);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n) {
          let r = new aD(t, n);
          return bf(
            Sf(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let i = e[n];
                  t[n] = r.resolveValue(i);
                }
                return xf(t);
              })
            )
          );
        }
      }),
      (EO = Cy.QueryCache),
      (DO = class {
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e), (this.maxSize = t));
        }
        queryEngine;
        maxSize;
        cache = new Map();
        serializedCache = Ey === void 0 ? void 0 : new Map();
        clear() {
          (this.cache.clear(), this.serializedCache?.clear());
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.state !== `pending` && (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t) {
          let n = Up(e, t),
            r = this.cache.get(n);
          if (r) {
            if (
              (this.cache.delete(n),
              this.cache.set(n, r),
              Ey !== void 0 && this.serializedCache !== void 0 && !sp(n) && r.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(n);
              e !== void 0 && Ey.set(EO, n, e);
            }
            return r;
          }
          let i = new ry(() => {
            let r = sp(n),
              i = r ? void 0 : Cn(EO, n);
            if (i)
              try {
                return this.queryEngine.resolveSerializableQueryResult(i, e, t);
              } catch (e) {
                xn(e, n);
              }
            return Ey !== void 0 && !r
              ? this.queryEngine
                  .serializeableQuery(e, t)
                  .then(([e, t]) => (this.serializedCache?.set(n, t), Ey.set(EO, n, t), e))
              : this.queryEngine.query(e, t);
          });
          return (this.cache.set(n, i), this.prune(), i);
        }
      }),
      (OO = new DO(new TO())),
      (kO = `style[data-framer-breakpoint-css]`),
      (AO = new Map()),
      (jO = `page`),
      (MO = Symbol(`cycle`)),
      (FO = (() => {
        let e = s(null);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (IO = (() => {
        let e = s(void 0);
        return ((e.displayName = `TickerItemContext`), e);
      })()),
      (LO = (e, t, n, r, i) => ({
        sign: 1,
        direction: i,
        lengthProp: t,
        viewportLengthProp: n,
        paddingStartProp: r,
        measureItem: (n) => ({ start: n[e], end: n[e] + n[t] }),
        getCumulativeInset: (t) => {
          let n = 0,
            r = t;
          for (; r;) ((n += r[e]), (r = r.offsetParent));
          return n;
        },
      })),
      (RO = LO(`offsetLeft`, `offsetWidth`, `innerWidth`, `paddingLeft`, `right`)),
      (zO = LO(`offsetTop`, `offsetHeight`, `innerHeight`, `paddingTop`, `bottom`)),
      (BO = {
        ...RO,
        sign: -1,
        direction: `left`,
        paddingStartProp: `paddingRight`,
        measureItem: (e, t) => {
          let n = e.offsetWidth,
            r = Am(e, t);
          return { start: r, end: r + n };
        },
        getCumulativeInset: (e) => {
          let t = 0,
            n = e;
          for (; n;) ((t += Am(n, n.offsetParent)), (n = n.offsetParent));
          return t;
        },
      }),
      (VO = { start: `flex-start`, end: `flex-end` }),
      (HO = h(Bm)),
      (UO = { start: 0, end: 0 }),
      (WO = { display: `flex`, position: `relative` }),
      (GO = {
        display: `flex`,
        position: `relative`,
        willChange: `transform`,
        listStyleType: `none`,
        padding: 0,
        margin: 0,
        justifyContent: `flex-start`,
      }),
      (KO = { duration: 0.2, ease: `linear` }),
      (qO = h(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? he.div,
          m = zo(),
          h = (d === `paused` ? 0 : (i ?? 100)) * s;
        return _(HO, {
          ref: t,
          as: p,
          ...f,
          gap: l,
          axis: o,
          align: a ?? `center`,
          isStatic: m,
          velocity: h,
          hoverFactor: c,
          itemSize: `manual`,
          overflow: u,
        });
      })),
      (JO = h(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: f,
            ...p
          } = e,
          m = r ?? he.div,
          h = $r() === `rtl` && o === `x` ? -1 : 1,
          g = (f === `paused` ? 0 : (i ?? 100)) * s * h,
          v = R(0),
          y = w(0),
          b = w(!1),
          x = w(!1),
          S = w(!1),
          C = (e) => {
            S.current &&
              e.target &&
              e.target !== e.currentTarget &&
              (e.preventDefault(), e.stopPropagation());
          };
        return (
          rt((e, t) => {
            let n = Math.abs(v.getVelocity()),
              r = x.current ? g * c : g;
            if (performance.now() > y.current && (!b.current || n < Math.abs(r))) {
              let e = (t / 1e3) * r,
                n = v.get() - e;
              ((b.current &&= (v.stop(), !1)), v.set(n));
            }
          }),
          d(() => {
            f === `paused` && v.stop();
          }, [f, v]),
          _(HO, {
            ref: t,
            as: m,
            ...p,
            gap: l,
            axis: o,
            align: a ?? `center`,
            itemSize: `manual`,
            overflow: u,
            _dragX: o === `x` ? v : void 0,
            _dragY: o === `y` ? v : void 0,
            offset: v,
            drag: o,
            dragMomentum: !0,
            onClickCapture: C,
            onDragStart: () => {
              S.current = !0;
            },
            onDragEnd: () => {
              ((y.current = performance.now()),
                (b.current = !0),
                setTimeout(() => {
                  S.current = !1;
                }, 5));
            },
            onMouseEnter: () => {
              x.current = !0;
            },
            onMouseLeave: () => {
              x.current = !1;
            },
          })
        );
      })),
      (YO = (() => {
        let e = s(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (XO = ({ onPlayStateChange: e, children: t }) => {
        let n = c(
          () => ({ start: () => A(() => e(`running`)), stop: () => A(() => e(`paused`)) }),
          [e]
        );
        return _(YO.Provider, { value: n, children: t });
      }),
      (ZO = h(function (e, t) {
        let {
            children: n,
            tickerEffectDraggable: r,
            tickerEffectStackVisas: i,
            tickerEffectXOverflow: a,
            tickerEffectYOverflow: s,
            tickerEffectOverflow: c,
            tickerEffectGap: l,
            tickerEffectVisasModifier: u,
            tickerEffectHoverModifier: d,
            tickerEffectPosition: f,
            tickerEffectIsDataRepeater: p,
            style: m,
            ...h
          } = e,
          g = zo(),
          [v, y] = o(`running`),
          b = i?.startsWith(`column`) ? `y` : `x`,
          x = u === `reverse` ? -1 : 1,
          S = G(d) ? d / 100 : 1,
          C = (b === `x` ? (a ?? c ?? `visible`) : (s ?? c ?? `visible`)) === `visible`,
          w = Um(l, b),
          T = wm(n),
          E = { ...m, "--ticker-cms-total-children": p ? T.length : void 0, position: f };
        return g || !r
          ? _(XO, {
              onPlayStateChange: y,
              children: _(qO, {
                ...h,
                style: E,
                ref: t,
                axis: b,
                gap: w,
                overflow: C,
                directionModifier: x,
                hoverModifier: S,
                items: T,
                playState: v,
              }),
            })
          : _(XO, {
              onPlayStateChange: y,
              children: _(JO, {
                ...h,
                style: E,
                ref: t,
                axis: b,
                gap: w,
                overflow: C,
                directionModifier: x,
                hoverModifier: S,
                items: T,
                playState: v,
              }),
            });
      })),
      (QO = (e) => (t) => (t.tickerEffectEnabled ? _(ZO, { ...t, as: e }) : _(e, { ...t }))),
      ($O = 1e4),
      (ek = `u_`),
      (tk = new Set([`rgba8`, `r8`, `rg16f`, `rgba16f`, `rgba32f`])),
      (nk = {
        time: { name: `u_time`, glslType: `float` },
        resolution: { name: `u_resolution`, glslType: `vec2` },
        deltaTime: { name: `u_deltaTime`, glslType: `float` },
        pixelRatio: { name: `u_pixelRatio`, glslType: `float` },
        mousePosition: { name: `u_mousePosition`, glslType: `vec4` },
        mousePointerDown: { name: `u_mousePointerDown`, glslType: `float` },
        mouseHover: { name: `u_mouseHover`, glslType: `float` },
      }),
      (rk = `webglcontextlost`),
      (ik = () => {}),
      (ak = class {
        gl;
        canvas;
        contextLostHandler;
        disposed = !1;
        pixelRatio = n === void 0 ? 1 : n.devicePixelRatio;
        resolutionScale;
        lastBufferWidth = 0;
        lastBufferHeight = 0;
        onContextLost;
        resources;
        textures = new Map();
        get customTextureUnitBase() {
          return this.resources.bufferPasses.length;
        }
        constructor(e, t, n, r, i = ik, a = []) {
          ((this.resolutionScale = r), (this.canvas = e), (this.onContextLost = i));
          let o = e.getContext(`webgl2`, {
            alpha: !0,
            premultipliedAlpha: !1,
            antialias: !1,
            powerPreference: `default`,
            preserveDrawingBuffer: e instanceof OffscreenCanvas,
          });
          if (!o) throw Error(`WebGL2 not supported`);
          ((this.gl = o),
            (this.contextLostHandler = (e) => {
              (e.preventDefault(), this.dispose(), this.onContextLost?.());
            }),
            e.addEventListener(rk, this.contextLostHandler));
          try {
            this.resources = this.buildResources(t, n, a);
          } catch (t) {
            throw (e.removeEventListener(rk, this.contextLostHandler), t);
          }
          let { mainPass: s, bufferPasses: c } = this.resources;
          (o.clearColor(0, 0, 0, 0),
            c.length === 0 && (o.useProgram(s.program), o.bindVertexArray(s.vao)));
        }
        buildResources(e, t, n) {
          let { gl: r, canvas: i } = this,
            a = n.find((e) => nh(e.format));
          if (a && !r.getExtension(`EXT_color_buffer_float`))
            throw Error(
              `Shader buffer "${a.uniformName}" requested format "${a.format}" but the EXT_color_buffer_float extension is not available.`
            );
          let o = !a || !!r.getExtension(`OES_texture_float_linear`),
            s = this.compileShader(r.VERTEX_SHADER, e),
            c,
            l = [],
            u,
            d,
            f,
            p = [];
          try {
            c = this.linkFragmentProgram(s, t);
            for (let e of n) l.push([this.linkFragmentProgram(s, e.fragment), e]);
            ((u = Ym(r, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]))),
              (d = Ym(r, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]))),
              (f = this.buildPassState(c, n, u, d)));
            for (let e = 0; e < l.length; e++) {
              let t = l[e];
              if (!t) continue;
              let [r, i] = t;
              p.push(this.buildBufferPass(r, i, n, o, e, u, d));
            }
            return (
              this.allocateBufferPassStorages(p, i.width, i.height),
              this.bindStaticSamplerUnits(f, p),
              { positionBuffer: u, texCoordBuffer: d, mainPass: f, bufferPasses: p }
            );
          } catch (e) {
            for (let e of p) this.disposeBufferPass(e);
            for (let e = p.length; e < l.length; e++) {
              let t = l[e];
              t && r.deleteProgram(t[0]);
            }
            throw (
              f ? this.disposePass(f) : c && r.deleteProgram(c),
              d && r.deleteBuffer(d),
              u && r.deleteBuffer(u),
              e
            );
          } finally {
            r.deleteShader(s);
          }
        }
        render(e, t, n, r) {
          if (!this.disposed) {
            if (this.resources.bufferPasses.length === 0) {
              this.renderSinglePass(e, t, n, r);
              return;
            }
            this.renderMultiPass(e, t, n, r);
          }
        }
        renderSinglePass(e, t, n, r) {
          let {
            gl: i,
            canvas: a,
            resources: { mainPass: o },
          } = this;
          (this.updatePassBuiltIns(o, e, t, r, a.width, a.height),
            this.applyCustomUniforms(o, n, this.customTextureUnitBase),
            i.clear(i.COLOR_BUFFER_BIT),
            i.drawArrays(i.TRIANGLES, 0, 6));
        }
        renderMultiPass(e, t, n, r) {
          let {
            gl: i,
            canvas: a,
            resources: { mainPass: o, bufferPasses: s },
            customTextureUnitBase: c,
          } = this;
          for (let e of s)
            (i.activeTexture(i.TEXTURE0 + e.textureUnit),
              i.bindTexture(i.TEXTURE_2D, e.textures[+(e.writeIdx === 0)]));
          for (let a of s)
            (i.useProgram(a.program),
              i.bindVertexArray(a.vao),
              this.updatePassBuiltIns(a, e, t, r, a.width, a.height),
              this.applyCustomUniforms(a, n, c),
              i.bindFramebuffer(i.FRAMEBUFFER, a.fbos[a.writeIdx]),
              i.viewport(0, 0, a.width, a.height),
              i.clear(i.COLOR_BUFFER_BIT),
              i.drawArrays(i.TRIANGLES, 0, 6),
              i.activeTexture(i.TEXTURE0 + a.textureUnit),
              i.bindTexture(i.TEXTURE_2D, a.textures[a.writeIdx]),
              (a.writeIdx = +(a.writeIdx === 0)));
          (i.useProgram(o.program),
            i.bindVertexArray(o.vao),
            this.updatePassBuiltIns(o, e, t, r, a.width, a.height),
            this.applyCustomUniforms(o, n, c),
            i.bindFramebuffer(i.FRAMEBUFFER, null),
            i.viewport(0, 0, a.width, a.height),
            i.clear(i.COLOR_BUFFER_BIT),
            i.drawArrays(i.TRIANGLES, 0, 6));
        }
        resize() {
          if (this.disposed) return;
          let { canvas: e } = this;
          if (e instanceof OffscreenCanvas)
            throw Error(`resize() is not supported for OffscreenCanvas.`);
          let t = e.offsetWidth,
            r = e.offsetHeight,
            i = n.devicePixelRatio,
            a = Math.max(i * this.resolutionScale, 1);
          this.pixelRatio = a;
          let o = t * a,
            s = r * a;
          if (!(o === this.lastBufferWidth && s === this.lastBufferHeight)) {
            ((this.lastBufferWidth = o),
              (this.lastBufferHeight = s),
              (e.width = o),
              (e.height = s),
              this.gl.viewport(0, 0, o, s));
            try {
              this.allocateBufferPassStorages(this.resources.bufferPasses, o, s);
            } catch (e) {
              throw (this.dispose(), e);
            }
          }
        }
        resizeOffscreenCanvas(e, t, n) {
          if (!this.disposed) {
            (n !== void 0 && (this.pixelRatio = n), this.gl.viewport(0, 0, e, t));
            try {
              this.allocateBufferPassStorages(this.resources.bufferPasses, e, t);
            } catch (e) {
              throw (this.dispose(), e);
            }
          }
        }
        finish() {
          this.disposed || this.gl.finish();
        }
        dispose() {
          if (this.disposed) return;
          ((this.disposed = !0), this.canvas.removeEventListener(rk, this.contextLostHandler));
          for (let [, e] of this.textures) e.source && !Gm(e.source) && Km(e.source);
          if (this.gl.isContextLost()) return;
          let { gl: e, resources: t } = this;
          for (let e of t.bufferPasses) this.disposeBufferPass(e);
          (this.disposePass(t.mainPass),
            e.deleteBuffer(t.positionBuffer),
            e.deleteBuffer(t.texCoordBuffer));
          for (let [, t] of this.textures) e.deleteTexture(t.texture);
          this.textures.clear();
        }
        disposePass(e) {
          let { gl: t } = this;
          (t.deleteVertexArray(e.vao), t.deleteProgram(e.program));
        }
        disposeBufferPass(e) {
          let { gl: t } = this;
          this.disposePass(e);
          for (let n of e.textures) t.deleteTexture(n);
          for (let n of e.fbos) t.deleteFramebuffer(n);
        }
        buildPassState(e, t, n, r) {
          let { gl: i } = this,
            a = i.createVertexArray();
          if (!a) throw Error(`Failed to create vertex array object`);
          (i.bindVertexArray(a), Xm(i, e, n, r), i.bindVertexArray(null));
          let o = Zm(i, e),
            s = new Map();
          for (let n of t) s.set(n.uniformName, i.getUniformLocation(e, n.uniformName));
          return {
            program: e,
            vao: a,
            builtInLocations: o,
            customLocations: new Map(),
            bufferSamplerLocations: s,
          };
        }
        buildBufferPass(e, t, n, r, i, a, o) {
          let s = this.buildPassState(e, n, a, o),
            { gl: c } = this,
            l = th(c, t.format),
            u = nh(t.format) && !r ? c.NEAREST : c.LINEAR,
            d = Qm(c, u),
            f = Qm(c, u),
            p = $m(c, d),
            m = $m(c, f);
          return (
            c.bindFramebuffer(c.FRAMEBUFFER, null),
            c.bindTexture(c.TEXTURE_2D, null),
            {
              ...s,
              uniformName: t.uniformName,
              resolutionScale: t.resolutionScale,
              format: t.format,
              internalFormat: l.internalFormat,
              uploadFormat: l.uploadFormat,
              pixelType: l.pixelType,
              width: 0,
              height: 0,
              textures: [d, f],
              fbos: [p, m],
              writeIdx: 0,
              textureUnit: i,
            }
          );
        }
        bindStaticSamplerUnits(e, t) {
          let { gl: n } = this,
            r = [e, ...t];
          for (let e of r) {
            n.useProgram(e.program);
            for (let r of t) {
              let t = e.bufferSamplerLocations.get(r.uniformName);
              t && n.uniform1i(t, r.textureUnit);
            }
          }
        }
        allocateBufferPassStorages(e, t, n) {
          for (let r of e) this.allocateBufferPassStorage(r, t, n);
        }
        allocateBufferPassStorage(e, t, n) {
          let { gl: r } = this,
            i = Math.max(1, Math.floor(t * e.resolutionScale)),
            a = Math.max(1, Math.floor(n * e.resolutionScale));
          if (i === e.width && a === e.height) return;
          ((e.width = i), (e.height = a));
          for (let t of e.textures)
            (r.bindTexture(r.TEXTURE_2D, t),
              r.texImage2D(
                r.TEXTURE_2D,
                0,
                e.internalFormat,
                i,
                a,
                0,
                e.uploadFormat,
                e.pixelType,
                null
              ));
          r.bindTexture(r.TEXTURE_2D, null);
          let [o, s, c, l] = r.getParameter(r.VIEWPORT);
          for (let t of e.fbos)
            (r.bindFramebuffer(r.FRAMEBUFFER, t),
              eh(r, e.uniformName, e.format),
              r.viewport(0, 0, i, a),
              r.clear(r.COLOR_BUFFER_BIT));
          (r.bindFramebuffer(r.FRAMEBUFFER, null), r.viewport(o, s, c, l));
        }
        compileShader(e, t) {
          let { gl: n } = this,
            r = n.createShader(e);
          if (!r) throw Error(`Failed to create shader`);
          if (
            (n.shaderSource(r, t), n.compileShader(r), !n.getShaderParameter(r, n.COMPILE_STATUS))
          ) {
            let t = n.getShaderInfoLog(r);
            n.deleteShader(r);
            let i = e === n.VERTEX_SHADER ? `Vertex` : `Fragment`;
            throw Error(`${i} shader compilation failed: ${t}`);
          }
          return r;
        }
        linkFragmentProgram(e, t) {
          let { gl: n } = this,
            r = this.compileShader(n.FRAGMENT_SHADER, t);
          try {
            let t = n.createProgram();
            if (!t) throw Error(`Failed to create program`);
            if (
              (n.attachShader(t, e),
              n.attachShader(t, r),
              n.linkProgram(t),
              !n.getProgramParameter(t, n.LINK_STATUS))
            ) {
              let e = n.getProgramInfoLog(t);
              throw (n.deleteProgram(t), Error(`Program linking failed: ${e}`));
            }
            return t;
          } finally {
            n.deleteShader(r);
          }
        }
        setUniform(e, t) {
          if (e !== null)
            switch (t.type) {
              case `boolean`:
                this.gl.uniform1f(e, +!!t.value);
                break;
              case `float`:
                this.gl.uniform1f(e, t.value);
                break;
              case `int`:
                this.gl.uniform1i(e, t.value);
                break;
              case `vec2`:
                this.gl.uniform2fv(e, t.value);
                break;
              case `vec4`:
                this.gl.uniform4fv(e, t.value);
                break;
              case `vec4[]`:
                this.gl.uniform4fv(e, t.value.flat());
                break;
            }
        }
        bindTexture(e, t, n) {
          let { gl: r, textures: i } = this,
            a = i.get(e),
            o = !a;
          if (o) {
            let t = r.createTexture();
            if (!t) return;
            ((a = { texture: t, source: null }), i.set(e, a));
          }
          if (a) {
            if ((r.activeTexture(r.TEXTURE0 + n), r.bindTexture(r.TEXTURE_2D, a.texture), Gm(t))) {
              this.uploadVideoFrame(a, t, o);
              return;
            }
            (o || a.source !== t) &&
              (a.source && !Gm(a.source) && Km(a.source),
              (a.source = t),
              r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
              r.generateMipmap(r.TEXTURE_2D),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_LINEAR),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR));
          }
        }
        uploadVideoFrame(e, t, n) {
          let { gl: r } = this;
          if (t.readyState < t.HAVE_CURRENT_DATA || t.seeking) return;
          let { videoWidth: i, videoHeight: a, currentTime: o } = t;
          if (!(i === 0 || a === 0)) {
            if (
              (e.source && e.source !== t && !Gm(e.source) && Km(e.source),
              n || e.source !== t || e.videoWidth !== i || e.videoHeight !== a)
            ) {
              (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR),
                r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t),
                (e.source = t),
                (e.videoWidth = i),
                (e.videoHeight = a),
                (e.videoTime = o));
              return;
            }
            e.videoTime !== o &&
              (r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, r.RGBA, r.UNSIGNED_BYTE, t),
              (e.videoTime = o));
          }
        }
        applyCustomUniforms(e, t, n) {
          if (!t) return;
          let { gl: r } = this,
            i = n;
          for (let n in t) {
            let a = t[n];
            if (!a) continue;
            let o = e.customLocations.get(n);
            (o === void 0 &&
              ((o = r.getUniformLocation(e.program, n)), e.customLocations.set(n, o)),
              a.type === `sampler2D`
                ? (this.bindTexture(n, a.value, i), o !== null && r.uniform1i(o, i), i++)
                : this.setUniform(o, a));
          }
        }
        updatePassBuiltIns(e, t, n, r, i, a) {
          let { gl: o, pixelRatio: s } = this,
            c = e.builtInLocations;
          (c[nk.time.name] !== null && o.uniform1f(c[nk.time.name], t),
            c[nk.resolution.name] !== null && o.uniform2f(c[nk.resolution.name], i, a),
            c[nk.deltaTime.name] !== null && o.uniform1f(c[nk.deltaTime.name], n),
            c[nk.pixelRatio.name] !== null && o.uniform1f(c[nk.pixelRatio.name], s),
            c[nk.mousePosition.name] !== null && o.uniform4fv(c[nk.mousePosition.name], r.position),
            c[nk.mousePointerDown.name] !== null &&
              o.uniform1f(c[nk.mousePointerDown.name], r.pointerDown),
            c[nk.mouseHover.name] !== null && o.uniform1f(c[nk.mouseHover.name], r.hover));
        }
      }),
      (ok = `_heightmap`),
      (sk = `_length`),
      (ck = `_buffer`),
      (lk = /\W/gu),
      (uk = `#version 300 es`),
      (dk = `precision highp float;`),
      (fk = `in vec2 v_uv;`),
      (pk = `out vec4 fragColor;`),
      (mk = 0.5),
      (hk = `rgba8`),
      (gk = `__framer_shaderConfig__`),
      (_k = b(function ({ src: e }) {
        return e
          ? _(es, { image: { src: e, fit: `fill`, loading: `lazy` }, draggable: !1, alt: `` })
          : null;
      })),
      (vk = 30),
      (yk = 20),
      (bk = class {
        loaders = new Map();
        generated = new Map();
        load(e, t) {
          let n = this.loaders.get(e);
          if (n) return n;
          let r = t();
          return (
            r.catch(() => {
              this.loaders.get(e) === r && this.loaders.delete(e);
            }),
            Sh(this.loaders, vk),
            this.loaders.set(e, r),
            r
          );
        }
        generate(e, t) {
          let n = this.generated.get(e);
          if (n) return n;
          let r = t();
          if (r) return (Sh(this.generated, yk), this.generated.set(e, r), r);
        }
        clear() {
          (this.loaders.clear(), this.generated.clear());
        }
        get loadedSize() {
          return this.loaders.size;
        }
        get generatedSize() {
          return this.generated.size;
        }
      }),
      (xk = new bk()),
      (Sk = 1024),
      (Ck = 24),
      (wk = class {
        byOwner = new Map();
        acquire(e, t) {
          let n = this.byOwner.get(e);
          n || ((n = new Map()), this.byOwner.set(e, n));
          let r = n.get(t);
          if (r) return r.promise;
          if (this.size >= Ck)
            return Promise.reject(
              Error(`Video decoder pool is full (max ${Ck}); "${t}" falls back.`)
            );
          let i = new AbortController(),
            a = Jm(t, i.signal);
          return (
            a.catch(() => {
              n.get(t)?.promise === a && n.delete(t);
            }),
            n.set(t, { promise: a, controller: i }),
            a
          );
        }
        keepOnly(e, t) {
          let n = this.byOwner.get(e);
          if (n) {
            for (let [e, r] of n) t.has(e) || (n.delete(e), kh(r));
            n.size === 0 && this.byOwner.delete(e);
          }
        }
        releaseAll(e) {
          let t = this.byOwner.get(e);
          if (t) {
            for (let e of t.values()) kh(e);
            this.byOwner.delete(e);
          }
        }
        get size() {
          let e = 0;
          for (let t of this.byOwner.values()) e += t.size;
          return e;
        }
      }),
      (Tk = new wk()),
      (Ek = { position: `absolute`, inset: 0, width: `100%`, height: `100%` }),
      (Dk = 0.001),
      (Ok = -999),
      (kk = { position: [Ok, Ok, 0, 0], pointerDown: 0, hover: 0 }),
      (Ak = [`.mp4`, `.m4v`]),
      (jk = `.svg`),
      (Mk = 4096),
      (Nk = {
        display: `block`,
        width: `100%`,
        height: `100%`,
        objectFit: `cover`,
        position: `absolute`,
        inset: 0,
      }),
      (Pk = { position: `absolute`, inset: 0 }),
      (Fk = b(function ({ src: e, hidden: t = !1, onDisplaySrcChange: n }) {
        let [i, a] = o(e),
          [s, c] = o(void 0),
          [l, u] = o(i),
          f = w(null);
        i !== l && (c(l), u(i));
        let p = w(n);
        r(() => {
          p.current = n;
        }, [n]);
        let m = w(!0);
        return (
          r(() => {
            if (m.current) {
              m.current = !1;
              return;
            }
            s || p.current?.();
          }, [i]),
          d(() => {
            if (e === i) return;
            let t = !0;
            if (e) {
              let n = new Image();
              n.src = e;
              let r = () => (t ? A(() => a(e)) : void 0);
              typeof n.decode == `function` ? n.decode().then(r).catch(r) : (n.onload = r);
            } else A(() => a(void 0));
            return () => {
              t = !1;
            };
          }, [e, i]),
          d(() => {
            let e = f.current;
            if (!e || !s) return;
            let t = !1,
              n = e.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 300,
                easing: `ease-in-out`,
                fill: `forwards`,
              });
            return (
              (n.onfinish = () => {
                t || (A(() => c(void 0)), p.current?.());
              }),
              () => {
                ((t = !0), n.cancel());
              }
            );
          }, [s]),
          i
            ? T(`div`, {
                style: { ...Ek, opacity: +!t, pointerEvents: t ? `none` : void 0 },
                children: [
                  s &&
                    _(
                      `img`,
                      { src: s, decoding: `async`, style: Nk, draggable: !1, alt: `` },
                      `prev-${s}`
                    ),
                  _(
                    `div`,
                    {
                      ref: s ? f : void 0,
                      style: Pk,
                      children: _(`img`, {
                        src: i,
                        style: Nk,
                        decoding: `async`,
                        draggable: !1,
                        alt: ``,
                      }),
                    },
                    i
                  ),
                ],
              })
            : null
        );
      })),
      (Ik = `#version 300 es
precision highp float;

in vec2 a_position;
in vec2 a_texCoord;

out vec2 v_uv;

void main() {
    v_uv = a_texCoord;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`),
      (Lk = `#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 fragColor;

void main() {
    fragColor = vec4(0.0);
}
`),
      (Rk = { noSlot: 0, singleFrame: 1, animate: 2 }),
      (zk = s(null)),
      (Bk = 300),
      (Vk = { display: `block`, width: `100%`, height: `100%` }),
      (Hk = 250),
      (Uk = b(function ({
        mode: e,
        fallbackImage: t,
        skipInitialFallback: i,
        vertexShader: a,
        fragmentShader: s,
        animated: c,
        resolutionScale: u,
        uniforms: f,
        onError: p,
        onReady: m,
        singleFrame: h,
        onContextLost: g,
        onUniformResolutionSucceeded: v,
        onUniformResolutionFailed: y,
        heightmapSource: b,
        mouseDataRef: x,
        buffers: S,
      }) {
        let [C, E] = o(!1),
          [D, k] = o(!1),
          j = e === `progressive`,
          M = !!t,
          N = !!(i && M),
          P = j && M && !N,
          F = Qh(P),
          I = w(m);
        r(() => {
          I.current = m;
        }, [m]);
        let ee = l(() => {
          (A(() => E(!0)), I.current?.());
        }, []);
        d(() => {
          if (!j || !C || !F) return;
          let e = n.setTimeout(() => {
            A(() => k(!0));
          }, Hk);
          return () => {
            clearTimeout(e);
          };
        }, [j, F, C]);
        let te = P && !F,
          ne = h || te || (j && !N && !D),
          re = M && !N && (!F || !C);
        return T(O, {
          children: [
            _(`div`, {
              style: { ...Ek, opacity: +!te },
              children: _(tg, {
                vertexShader: a,
                fragmentShader: s,
                animated: c,
                resolutionScale: u,
                singleFrame: ne,
                uniforms: f,
                onError: p,
                onReady: ee,
                onContextLost: g,
                onUniformResolutionSucceeded: v,
                onUniformResolutionFailed: y,
                heightmapSource: b,
                mouseDataRef: x,
                buffers: S,
              }),
            }),
            t &&
              !N &&
              _(`div`, {
                style: {
                  ...Ek,
                  opacity: +!!re,
                  transition: `opacity 200ms ease-in-out`,
                  pointerEvents: `none`,
                },
                children: _(_k, { src: t }),
              }),
          ],
        });
      })),
      (Kk = { duration: 0 }),
      (qk = h(function (
        {
          mode: e = `instant`,
          fallbackImage: t,
          skipInitialFallback: n,
          placeholder: i,
          style: a,
          width: s,
          height: c,
          vertexShader: u,
          fragmentShader: f,
          animated: p,
          uniforms: m,
          onError: h,
          onReady: g,
          resolutionScale: v,
          poolId: y,
          isSelected: b = !1,
          isMultiSelected: x = !1,
          isPreviewActive: S = !1,
          heightmapSource: C,
          mouse: w,
          buffers: E,
          ...D
        },
        O
      ) {
        let k = Ys(O),
          j = Jr(),
          M = Y.current() === Y.preview && j === `preview`,
          P = !!(t && (n || M)),
          F = pu(),
          I = sg(k, F ? void 0 : w),
          [ee, te] = o(P);
        KC(
          k,
          l((e) => {
            A(() => te(e.isIntersecting));
          }, []),
          { threshold: 0, enabled: !0 }
        );
        let ne = N(),
          re = lg(y ?? ne, b, ee);
        d(() => {
          performance.mark?.(`shader_register`);
        }, []);
        let {
            isFallbackOnly: L,
            effectiveAnimated: R,
            effectiveSingleFrame: ie,
            effectiveMode: ae,
            shouldSkipFallbackOverlay: oe,
            onContextLost: se,
            onUniformResolutionSucceeded: ce,
            onUniformResolutionFailed: le,
          } = Zh(re, b, x, ee, e, p, P, S),
          [ue, de] = o(!1);
        r(() => {
          L && A(() => de(!1));
        }, [L]);
        let fe = l(() => {
            (A(() => de(!0)), g?.());
          }, [g]),
          z = {
            vertexShader: u,
            fragmentShader: f,
            uniforms: m,
            resolutionScale: v,
            onError: h,
            onContextLost: se,
            onUniformResolutionSucceeded: ce,
            onUniformResolutionFailed: le,
            heightmapSource: C,
            buffers: E,
          },
          pe = { style: a, width: s, height: c, ...D };
        if (F) {
          let e = !L && (P || ue);
          return T(Jk, {
            ref: k,
            ...pe,
            children: [
              !L &&
                _(Uk, {
                  mode: ae,
                  skipInitialFallback: oe,
                  onReady: fe,
                  ...z,
                  animated: R,
                  singleFrame: ie,
                  mouseDataRef: I,
                }),
              _(Fk, { src: t, hidden: e }),
              L && !t && i,
            ],
          });
        }
        return L
          ? _(Jk, { ref: k, ...pe, children: oe && !ee ? null : _(_k, { src: t }) })
          : _(Jk, {
              ref: k,
              ...pe,
              children: _(Uk, {
                mode: ae,
                fallbackImage: t,
                skipInitialFallback: oe,
                onReady: g,
                ...z,
                animated: R,
                singleFrame: ie,
                mouseDataRef: I,
              }),
            });
      })),
      (Jk = h(function ({ children: e, style: t, ...n }, r) {
        return _(zC, {
          ref: r,
          __fromCanvasComponent: !0,
          style: { borderRadius: `inherit`, cornerShape: `inherit`, ...t, overflow: `hidden` },
          ...n,
          componentType: `Shader`,
          children: e,
        });
      })),
      (Yk = new Set([
        `visibleVariantId`,
        `obscuredVariantId`,
        `threshold`,
        `animateOnce`,
        `variantAppearEffectEnabled`,
        `targets`,
        `exitTarget`,
        `scrollVisas`,
      ])),
      (Xk = { inputRange: [], outputRange: [] }),
      (Zk = (e) =>
        p.forwardRef((t, n) => {
          if (Y.current() === Y.canvas) return _(e, { ...t, ref: n });
          let [r, i] = Zc(t, Yk),
            {
              visibleVariantId: a,
              obscuredVariantId: o,
              animateOnce: s,
              threshold: c,
              variantAppearEffectEnabled: l,
              targets: u,
              exitTarget: d,
              scrollVisas: f,
            } = r,
            [m, h] = p.useState(o),
            g = p.useRef(!1),
            v = Ys(n);
          $s(
            v,
            (e) => {
              r.targets ||
                r.scrollVisas ||
                (s && g.current === !0) ||
                (g.current !== e &&
                  ((g.current = e),
                  p.startTransition(() => {
                    h(e ? a : o);
                  })));
            },
            { enabled: l, animateOnce: s, threshold: { y: c } }
          );
          let y = Vt(),
            b = p.useRef(y);
          return (
            p.useEffect(() => {
              if (f || !u) return;
              b.current !== y && ((b.current = y), p.startTransition(() => h(o)));
              let e = {},
                t;
              return le((n, { y: r }) => {
                if (!u[0] || (u[0].ref && !u[0].ref.current)) return;
                let { inputRange: i, outputRange: a } = ug(u, (c ?? 0) * r.containerLength, d);
                if (i.length === 0 || i.length !== a.length) return;
                let o = Math.floor(L(r.current, i, a));
                if (s && e[o]) return;
                e[o] = !0;
                let l = u[o]?.target ?? void 0;
                l !== t &&
                  ((t = l),
                  p.startTransition(() => {
                    h(l);
                  }));
              });
            }, [y, s, c, u, t.variant, f, d]),
            Cl(f, (e) => p.startTransition(() => h(e)), { enabled: l, repeat: !s }),
            Ht(() => {
              if (!l) return;
              let e = !r.targets && !r.scrollVisas ? r.obscuredVariantId : void 0;
              p.startTransition(() => h(e));
            }),
            !(`variantAppearEffectEnabled` in r) || l === !0
              ? _(e, { ...i, variant: m ?? t.variant, ref: v })
              : _(e, { ...i })
          );
        })),
      (Qk = p.createContext(void 0)),
      ($k = () => p.useContext(Qk)),
      (eA = {
        Arial: {
          Regular: { selector: `Arial`, weight: void 0 },
          Black: { selector: `Arial-Black`, weight: void 0 },
          Narrow: { selector: `Arial Narrow`, weight: void 0 },
          "Rounded Bold": { selector: `Arial Rounded MT Bold`, weight: void 0 },
        },
        Avenir: {
          Book: { selector: `Avenir`, weight: void 0 },
          Light: { selector: `Avenir-Light`, weight: void 0 },
          Medium: { selector: `Avenir-Medium`, weight: void 0 },
          Heavy: { selector: `Avenir-Heavy`, weight: void 0 },
          Black: { selector: `Avenir-Black`, weight: void 0 },
        },
        "Avenir Next": {
          Regular: { selector: `Avenir Next`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNext-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNext-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNext-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 },
        },
        "Avenir Next Condensed": {
          Regular: { selector: `Avenir Next Condensed`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNextCondensed-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNextCondensed-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNextCondensed-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNextCondensed-Heavy`, weight: void 0 },
        },
        Baskerville: {
          Regular: { selector: `Baskerville`, weight: void 0 },
          "Semi Bold": { selector: `Baskerville-SemiBold`, weight: void 0 },
        },
        "Bodoni 72": {
          Book: { selector: `Bodoni 72`, weight: void 0 },
          Oldstyle: { selector: `Bodoni 72 Oldstyle`, weight: void 0 },
          Smallcaps: { selector: `Bodoni 72 Smallcaps`, weight: void 0 },
        },
        Courier: { Regular: { selector: `Courier`, weight: void 0 } },
        "Courier New": { Regular: { selector: `Courier New`, weight: void 0 } },
        Futura: {
          Medium: { selector: `Futura`, weight: void 0 },
          Condensed: { selector: `Futura-CondensedMedium`, weight: void 0 },
          "Condensed ExtraBold": { selector: `Futura-CondensedExtraBold`, weight: void 0 },
        },
        Georgia: { Regular: { selector: `Georgia`, weight: void 0 } },
        "Gill Sans": {
          Regular: { selector: `Gill Sans`, weight: void 0 },
          Light: { selector: `GillSans-Light`, weight: void 0 },
          SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 },
          UltraBold: { selector: `GillSans-UltraBold`, weight: void 0 },
        },
        Helvetica: {
          Regular: { selector: `Helvetica`, weight: void 0 },
          Light: { selector: `Helvetica-Light`, weight: void 0 },
          Bold: { selector: `Helvetica-Bold`, weight: void 0 },
          Oblique: { selector: `Helvetica-Oblique`, weight: void 0 },
          "Light Oblique": { selector: `Helvetica-LightOblique`, weight: void 0 },
          "Bold Oblique": { selector: `Helvetica-BoldOblique`, weight: void 0 },
        },
        "Helvetica Neue": {
          Regular: { selector: `Helvetica Neue`, weight: void 0 },
          UltraLight: { selector: `HelveticaNeue-UltraLight`, weight: void 0 },
          Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 },
          Light: { selector: `HelveticaNeue-Light`, weight: void 0 },
          Medium: { selector: `HelveticaNeue-Medium`, weight: void 0 },
          Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 },
          Italic: { selector: `HelveticaNeue-Italic`, weight: void 0 },
          "UltraLight Italic": { selector: `HelveticaNeue-UltraLightItalic`, weight: void 0 },
          "Thin Italic": { selector: `HelveticaNeue-ThinItalic`, weight: void 0 },
          "Light Italic": { selector: `HelveticaNeue-LightItalic`, weight: void 0 },
          "Medium Italic": { selector: `HelveticaNeue-MediumItalic`, weight: void 0 },
          "Bold Italic": { selector: `HelveticaNeue-BoldItalic`, weight: void 0 },
          "Condensed Bold": { selector: `HelveticaNeue-CondensedBold`, weight: void 0 },
          "Condensed Black": { selector: `HelveticaNeue-CondensedBlack`, weight: void 0 },
        },
        "Hoefler Text": { Regular: { selector: `Hoefler Text`, weight: void 0 } },
        Impact: { Regular: { selector: `Impact`, weight: void 0 } },
        "Lucida Grande": { Regular: { selector: `Lucida Grande`, weight: void 0 } },
        Menlo: { Regular: { selector: `Menlo`, weight: void 0 } },
        Monaco: { Regular: { selector: `Monaco`, weight: void 0 } },
        Optima: {
          Regular: { selector: `Optima`, weight: void 0 },
          ExtraBlack: { selector: `Optima-ExtraBlack`, weight: void 0 },
        },
        Palatino: { Regular: { selector: `Palatino`, weight: void 0 } },
        "SF Pro Display": {
          Regular: { selector: `__SF-UI-Display-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Black__`, weight: 900 },
          Italic: { selector: `__SF-UI-Display-Italic__`, weight: 400 },
          "Ultralight Italic": { selector: `__SF-UI-Display-Ultralight-Italic__`, weight: 100 },
          "Thin Italic": { selector: `__SF-UI-Display-Thin-Italic__`, weight: 200 },
          "Light Italic": { selector: `__SF-UI-Display-Light-Italic__`, weight: 300 },
          "Medium Italic": { selector: `__SF-UI-Display-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Display-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Display-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Display-Heavy-Italic__`, weight: 800 },
          "Black Italic": { selector: `__SF-UI-Display-Black-Italic__`, weight: 900 },
        },
        "SF Pro Display Condensed": {
          Regular: { selector: `__SF-UI-Display-Condensed-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Condensed-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Condensed-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Condensed-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Condensed-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Condensed-Black__`, weight: 900 },
        },
        "SF Pro Text": {
          Regular: { selector: `__SF-UI-Text-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 },
          Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 },
          "Light Italic": { selector: `__SF-UI-Text-Light-Italic__`, weight: 200 },
          "Medium Italic": { selector: `__SF-UI-Text-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Text-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Text-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Text-Heavy-Italic__`, weight: 800 },
        },
        "SF Pro Text Condensed": {
          Regular: { selector: `__SF-UI-Text-Condensed-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Condensed-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Condensed-Heavy__`, weight: 800 },
        },
        Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } },
        Times: { Regular: { selector: `Times`, weight: void 0 } },
        "Times New Roman": { Regular: { selector: `Times New Roman`, weight: void 0 } },
        Trebuchet: { Regular: { selector: `Trebuchet MS`, weight: void 0 } },
        Verdana: { Regular: { selector: `Verdana`, weight: void 0 } },
      }),
      (tA = {
        "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
        "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
        "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
        "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
        "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
        "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
        "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
        "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
        "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`,
      }),
      (nA = eA),
      (rA = `System Default`),
      (iA = class {
        name = `local`;
        fontFamilies = [];
        byFamilyName = new Map();
        fontAliasBySelector = new Map();
        fontAliases = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.addFontFamily(t), t);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        importFonts() {
          let e = [];
          for (let t of Object.keys(nA)) {
            let n = nA[t];
            if (!n) continue;
            let r = this.createFontFamily(t);
            for (let e of Object.keys(n)) {
              let t = n[e];
              if (!t) continue;
              let { selector: i, weight: a } = t,
                o = { variant: e, selector: i, weight: a, family: r, cssFamilyName: r.name };
              r.fonts.push(o);
            }
            e.push(...r.fonts);
          }
          for (let [e, t] of Object.entries(tA)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: rA, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = fg(i, r),
                a = `__SystemDefault-${i}-${r}__`,
                o = {
                  variant: n,
                  selector: a,
                  style: r,
                  weight: i,
                  family: e,
                  cssFamilyName: e.name,
                };
              (e.fonts.push(o),
                t.set(
                  a,
                  `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`
                ));
            }
          return { fontFamily: e, aliases: t };
        }
        getFontAliasBySelector(e) {
          return this.fontAliasBySelector.get(e) || null;
        }
        getFontSelectorByAlias(e) {
          return this.fontAliases.get(e) || null;
        }
        isFontFamilyAlias(e) {
          return !!(e && /^__.*__$/u.exec(e));
        }
      }),
      (aA = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`,
      }),
      (oA = class extends Map {
        _hash = 0;
        get hash() {
          return this._hash;
        }
        set(e, t) {
          return (this._hash++, super.set(e, t));
        }
        delete(e) {
          return (this._hash++, super.delete(e));
        }
        clear() {
          return (this._hash++, super.clear());
        }
      }),
      (cA = `Variable`),
      (lA = `BI;`),
      (uA = class {
        name = `builtIn`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetByKey = new Map();
        importFonts(e) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetByKey.clear());
          let t = [];
          for (let n of e) {
            if (!this.isValidBuiltInFont(n)) continue;
            let { properties: e } = n,
              r = e.font.fontFamily,
              i = this.createFontFamily(r, e.font.foundryName, e.font.fontVersion),
              a = e.font.openTypeData,
              o = e.font.variationAxes,
              s = Array.isArray(o),
              c = s ? `variable` : e.font.fontSubFamily || `regular`,
              l = _g(n),
              u = xg(o),
              d = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: bg(a),
                variationAxes: u,
                category: e.font.fontCategory,
                weight: s ? Tg(u, e.font.faceDescriptors?.weight) : wg(c),
                style: Dg(c),
                cssFamilyName: vg(r, s),
              };
            (i.fonts.push(d), this.assetByKey.set(n.key, n), t.push(d));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = wg(e.variant),
                r = wg(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          let t = Eg(e);
          return {
            weight: t === `variable` || t === `variable-italic` ? 400 : dA[t],
            style: Dg(e),
          };
        }
        getFontBySelector(e) {
          let t = this.parseSelector(e);
          if (!t) return;
          let n = this.getFontFamilyByName(t.name);
          if (n) return n.fonts.find((t) => t.selector === e);
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e, t, n) {
          let r = this.byFamilyName.get(e);
          if (r && r.version === n) return r;
          let i = { source: this.name, name: e, fonts: [], foundryName: t, version: n };
          return (this.addFontFamily(i), i);
        }
        getOpenTypeFeatures(e) {
          U(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return bg(t)
            ? t?.map((e) => {
                if (Sg(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        isValidBuiltInFont(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font ||
            !e.properties.font.fontVersion ||
            !e.properties.font.fontFamily
            ? !1
            : `fontFamily` in e.properties.font;
        }
        createSelector(e, t, n) {
          return `${lA}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(lA)) return null;
          let [t, n] = e.split(lA);
          if (n === void 0) return null;
          let [r, i, a] = n.split(`/`);
          return !r || !i || !a
            ? null
            : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`),
              };
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
      }),
      (dA = {
        ultralight: 100,
        "ultralight-italic": 100,
        thin: 200,
        "thin-italic": 200,
        demi: 200,
        light: 300,
        "light-italic": 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        "regular-slanted": 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        "book-italic": 400,
        text: 400,
        "text-italic": 400,
        medium: 500,
        solid: 500,
        "medium-oblique": 500,
        "medium-italic": 500,
        mittel: 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        "bold-oblique": 700,
        fett: 700,
        ultrabold: 800,
        "ultrabold-italic": 800,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        extralight: 100,
        "extralight-italic": 100,
        "black-italic": 900,
        "extra-italic": 900,
        "extra-italic-bold": 900,
        satt: 900,
        heavy: 900,
        "heavy-italic": 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        "dense-light": 200,
        "dense-regular": 300,
        "dense-medium": 400,
        "dense-bold": 500,
        "solid-light": 600,
        "solid-regular": 700,
        "solid-medium": 800,
        "solid-bold": 900,
        53: 400,
        55: 600,
        "narrow-regular": 350,
        "narrow-black": 850,
        variable: 1e3,
        "variable-italic": 1e3,
      }),
      (fA = _f(`custom-font-source`)),
      (pA = `CUSTOM;`),
      (mA = `CUSTOMV2;`),
      (hA = class e {
        name = `custom`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetsByKey = new Map();
        debugByFamily = new Map();
        debugFamilies;
        importFonts(t) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let n = {},
            r = new Map();
          for (let i of t) {
            if (!this.isValidCustomFontAsset(i)) continue;
            let { family: t, variant: a, weight: o, style: s } = Lg(i.properties.font),
              c = i.properties.font.variationAxes,
              l = Array.isArray(c),
              u = i.properties.font.openTypeData,
              d = _g(i),
              f = Bg(i),
              p = Ig(i.properties),
              m = e.createLegacySelector(p),
              h = this.createFontFamily(t),
              g = e.createSelector(h.name, a),
              _ = {
                assetKey: i.key,
                family: h,
                selector: g,
                variant: a,
                weight: o,
                style: s,
                file: d,
                hasOpenTypeFeatures: bg(u),
                variationAxes: xg(c),
                owner: f,
                alternativeSelectors: {
                  [m]: {
                    variant: l ? `variable` : this.inferVariantName(p),
                    cssFamilyName: e.cssFontFamilyFromSelector(m),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(g),
              },
              v = Fg(h.fonts, _);
            if (v?.projectDuplicate) _.owner === `team` && ((h.fonts[v.index] = _), (n[g] = _));
            else if (v) {
              fA.debug(`Duplicate font found for:`, _, `with existing font:`, v.existingFont);
              let e = v.existingFont,
                t = _.file?.endsWith(`.woff2`) ?? !1,
                r = e.file?.endsWith(`.woff2`) ?? !1,
                i = t && !r,
                a = t === r,
                o = _.owner === `team` || e.owner !== `team`;
              (i || (a && o)) && ((h.fonts[v.index] = _), (n[g] = _));
            } else (h.fonts.push(_), (n[g] = _));
            (this.assetsByKey.set(i.key, i),
              Vg(r, t, a).fonts.push({ font: _, asset: i, selected: !1 }));
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && zg(e);
          return ((this.debugByFamily = r), (this.debugFamilies = void 0), Object.values(n));
        }
        getDebugFamilies() {
          if (this.debugFamilies) return this.debugFamilies;
          let e = new Set();
          for (let t of this.fontFamilies)
            for (let n of t.fonts) n.assetKey && n.owner && e.add(`${n.assetKey}:${n.owner}`);
          return ((this.debugFamilies = Hg(this.debugByFamily, e)), this.debugFamilies);
        }
        static createSelector(e, t) {
          return `${mA}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${pA}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            U(Mg(e), `Selector must be a custom font selector`),
            Pg(e) ? e.slice(pA.length) : e.slice(mA.length)
          );
        }
        isValidCustomFontAsset(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font
            ? !1
            : `fontFamily` in e.properties.font;
        }
        getOpenTypeFeatures(e) {
          U(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return bg(t)
            ? t?.map((e) => {
                if (Sg(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        inferVariantName(e) {
          let t = [
              `thin`,
              `ultra light`,
              `extra light`,
              `light`,
              `normal`,
              `medium`,
              `semi bold`,
              `bold`,
              `extra bold`,
              `black`,
            ],
            n = [...t.map((e) => `${e} italic`), ...t],
            r = e.toLowerCase(),
            i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)],
            a = n.find((e) => i.includes(e) || i.includes(e.replace(/\s+/gu, ``)));
          return a ? a.replace(/^\w|\s\w/gu, (e) => e.toUpperCase()) : `Regular`;
        }
        createFontFamily(e) {
          let t = this.byFamilyName.get(e);
          if (t) return t;
          let n = { source: this.name, name: e, fonts: [] };
          return (this.addFontFamily(n), n);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) || null;
        }
      }),
      (gA = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (_A = `FS;`),
      (vA = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900,
      }),
      (yA = Object.keys(vA)),
      (bA = RegExp(`^(?:${[...yA, `italic`, `variable`].join(`|`)})`, `u`)),
      (xA = class e {
        name = `fontshare`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = yA.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && vA[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(_A)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(_A, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${_A}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${_A}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await Ug(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!bA.exec(t) || t.split(` `).includes(`wide`));
                })
                .map((t) => ({
                  ...e.parseVariant(t.name),
                  selector: e.createSelector(a.name, t.name),
                  isVariable: t.is_variable,
                  fontshareVariantName: t.name,
                  file: t.file,
                })),
              o = e.createMetadataSelector(a.name),
              s = n?.[o],
              c = a.name,
              l = this.getFontFamilyByName(c);
            l || ((l = { name: c, fonts: [], source: this.name }), this.addFontFamily(l));
            let u = r[e.createMetadataSelector(a.name)];
            for (let e of t) {
              let {
                  variantBold: n,
                  variantBoldItalic: r,
                  variantItalic: o,
                  variantVariable: c,
                  variantVariableItalic: d,
                } = Og(e, t),
                f = {
                  family: l,
                  variant: e.fontshareVariantName.toLowerCase(),
                  selector: e.selector,
                  selectorBold: n?.selector,
                  selectorBoldItalic: r?.selector,
                  selectorItalic: o?.selector,
                  selectorVariable: c?.selector,
                  selectorVariableItalic: d?.selector,
                  weight: e.weight,
                  style: e.style,
                  file: e.file,
                  category: qg(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: vg(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await Wg(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (SA = `Inter`),
      (CA = `FR;`),
      (wA = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        "": 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
      }),
      (TA = class e {
        name = `framer`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(CA) && !e.startsWith(SA)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && wA[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${CA}${e}`;
        }
        importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = [];
          return (
            t.forEach((t) => {
              let { uiFamilyName: i, ...a } = t,
                o = e.createMetadataSelector(t.uiFamilyName),
                s = n?.[o],
                c = this.getFontFamilyByName(i);
              c ||= this.addFontFamily(i);
              let l = t.selector === t.selectorVariable || t.selector === t.selectorVariableItalic,
                u = { ...a, family: c, variationAxes: l ? s : void 0 };
              (c.fonts.push(u), r.push(u));
            }),
            r
          );
        }
        async getOpenTypeFeatures(t) {
          return (await Wg(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (EA = `GF;`),
      (DA = class e {
        name = `google`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          if (e === `regular`) return { style: `normal`, weight: 400 };
          let t = /(\d*)(normal|italic)?/u.exec(e);
          return t
            ? { weight: parseInt(t[1] || `400`), style: t[2] === `italic` ? `italic` : `normal` }
            : {};
        }
        parseSelector(e) {
          if (!e.startsWith(EA)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(EA, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${EA}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${EA}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let i = await Ug(`google`),
            a = [],
            o = Yg(t, (e) => e.family),
            s = Yg(n, (e) => e.family);
          for (let t in o) {
            let n = o[t];
            if (!n) continue;
            let c = this.getFontFamilyByName(n.family);
            c ||= this.addFontFamily(n.family);
            let l = n.variants.map((r) => ({
                ...e.parseVariant(r),
                googleFontsVariantName: r,
                selector: e.createSelector(t, r, !1),
                isVariable: !1,
                file: n.files[r],
              })),
              u = s[t],
              d = u?.axes
                ? u.variants.map((n) => ({
                    ...e.parseVariant(n),
                    googleFontsVariantName: n,
                    selector: e.createSelector(t, n, !0),
                    isVariable: !0,
                    file: u.files[n],
                  }))
                : [],
              f = e.createMetadataSelector(n.family),
              p = r?.[f],
              m = [...l, ...d],
              h = m.filter(dg),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (dg(e) ? Og(e, h) : void 0) ?? {},
                m = {
                  family: c,
                  variant: o,
                  selector: i,
                  selectorBold: s?.selector,
                  selectorBoldItalic: u?.selector,
                  selectorItalic: l?.selector,
                  selectorVariable: d?.selector,
                  selectorVariableItalic: f?.selector,
                  weight: t,
                  style: r,
                  category: Jg(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: vg(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await Wg(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (OA = $e(Fv(), 1)),
      (kA = 5e3),
      (AA = 3),
      (jA = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (MA = new Map()),
      (NA = new Map()),
      (PA = new Map()),
      (FA = (e, t) => Qg(e, t)),
      (IA = {
        "FR;Inter": [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (LA = class {
        enabled = !1;
        bySelector = new oA();
        loadedSelectors = new Set();
        getGoogleFontsListPromise;
        getFontshareFontsListPromise;
        getBuiltInFontsListPromise;
        customFontsImportPromise = new Promise((e) => {
          this.resolveCustomFontsImportPromise = e;
        });
        constructor() {
          ((this.local = new iA()),
            (this.google = new DA()),
            (this.fontshare = new xA()),
            (this.framer = new TA()),
            (this.custom = new hA()),
            (this.builtIn = new uA()),
            this.importLocalFonts());
        }
        local;
        google;
        fontshare;
        builtIn;
        framer;
        custom;
        get hash() {
          return this.bySelector.hash;
        }
        addFont(e) {
          if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
            for (let t of Object.keys(e.alternativeSelectors)) this.bySelector.set(t, e);
        }
        bySelectorValuesCache;
        getAvailableFonts() {
          if (
            !this.bySelectorValuesCache ||
            this.bySelectorValuesCache.hash !== this.bySelector.hash
          ) {
            let e = new Map();
            for (let t of this.bySelector.values()) e.set(t, !0);
            this.bySelectorValuesCache = {
              result: Array.from(e.keys()),
              hash: this.bySelector.hash,
            };
          }
          return this.bySelectorValuesCache.result;
        }
        importLocalFonts() {
          for (let e of this.local.importFonts()) (this.addFont(e), this.loadFont(e.selector));
        }
        async importGoogleFonts() {
          return (
            (this.getGoogleFontsListPromise ||= Promise.resolve().then(async () => {
              let { staticFonts: e, variableFonts: t } = await oC.fetchGoogleFontsList(),
                n = await t_(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = oC.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await t_(`fontshare`);
            for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n);
          }
          return this.getFontshareFontsListPromise;
        }
        async importAllWebFonts() {
          await Promise.all([
            this.importGoogleFonts(),
            this.importFontshareFonts(),
            this.importBuiltInFonts(),
          ]);
        }
        async importBuiltInFonts() {
          if (!this.getBuiltInFontsListPromise) {
            this.getBuiltInFontsListPromise = oC.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = t_(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e) {
          let t = new Map();
          for (let e of this.loadedSelectors) {
            if (!Mg(e)) continue;
            let n = this.getFontBySelector(e);
            n && t.set(e, n);
          }
          this.bySelector.forEach((e, t) => {
            Mg(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e);
          for (let e of n) this.addFont(e);
          for (let [e, n] of t) {
            let t = this.getFontBySelector(e);
            (t && t.file === n.file) ||
              (this.loadedSelectors.delete(e),
              n.file &&
                e_({ family: n.cssFamilyName, url: n.file, weight: n.weight, style: n.style }));
          }
          this.resolveCustomFontsImportPromise();
        }
        getCustomFontsImportPromise() {
          return this.customFontsImportPromise;
        }
        getCustomFontDebugFamilies() {
          return this.custom.getDebugFamilies();
        }
        getFontFamily(e) {
          return this[e.source].getFontFamilyByName(e.name);
        }
        getFontBySelector(e) {
          if (!e) return;
          let t;
          if (((t = this.bySelector.get(e)), t))
            return t.alternativeSelectors && e in t.alternativeSelectors
              ? { ...t, ...t.alternativeSelectors[e] }
              : t;
        }
        getDraftPropertiesBySelector(e) {
          let t = this.getFontBySelector(e);
          if (t)
            return {
              style: t.style,
              weight: t.weight,
              variant: t.variant,
              cssFamilyName: t.cssFamilyName,
              source: t.family.source,
              category: t.category,
            };
          let n = this.google.parseSelector(e);
          if (n) {
            let e = DA.parseVariant(n.variant);
            if (dg(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: yg(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = xA.parseVariant(r.variant);
            if (dg(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: yg(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = uA.parseVariant(i.variant);
            if (dg(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: yg(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return TA.getDraftFontPropertiesBySelector(e) || null;
        }
        isSelectorLoaded(e) {
          return this.loadedSelectors.has(e);
        }
        async loadFont(e) {
          let t = this.getFontBySelector(e);
          if (!t) return 2;
          if (this.loadedSelectors.has(e)) return 0;
          let n = t.cssFamilyName,
            r = t.family.source,
            i = jg(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((Vn() || (await $g(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await FA({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`: {
              if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
              let r = t.file;
              await FA({ family: n, url: r, weight: t.weight, style: t.style }, document);
              let i = this.getFontBySelector(e);
              return !i || i.file !== r
                ? (e_({ family: n, url: r, weight: t.weight, style: t.style }), 2)
                : (this.loadedSelectors.add(e), 1);
            }
            default:
              W(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(_A)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                Ui(`Failed to load Fontshare fonts:`, e);
              })
            ),
            e.some((e) => e.startsWith(EA)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  Ui(`Failed to load Google fonts:`, e);
                })
              ),
            e.some((e) => e.startsWith(lA)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  Ui(`Failed to load built-in fonts:`, e);
                })
              ),
            e.some(Mg) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  Ui(`Failed to load custom fonts:`, e);
                })
              ),
            t.length > 0 && (await Promise.all(t)));
          let n = [];
          for (let t of e) n.push(this.loadFont(t));
          return Promise.allSettled(n);
        }
        async loadFonts(e) {
          return {
            newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
              (e) => e.status === `fulfilled` && e.value === 1
            ).length,
          };
        }
        async loadMissingFonts(e, t) {
          let n = e.filter((e) => !RA.loadedSelectors.has(e));
          n.length !== 0 &&
            (await RA.loadWebFontsFromSelectors(n),
            n.every((e) => RA.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (U(e, `Can’t find Inter font`), e);
        }
        testing = { addFont: this.addFont.bind(this) };
      }),
      (RA = new LA()),
      (zA = (e) => e.target.value),
      (BA = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (VA = h(function (e, t) {
        let {
            autoFocus: n,
            className: r,
            inputName: i,
            max: a,
            min: o,
            placeholder: s,
            required: c,
            step: u,
            style: d,
            type: f,
            maxLength: p,
            value: m,
            defaultValue: h,
            autofillEnabled: g,
            onChange: v,
            onBlur: y,
            onInvalid: b,
            onFocus: x,
            onValid: S,
            onClear: C,
            ...w
          } = e,
          E = o_(m ?? h, f),
          [D, O, k] = a_(E ?? ``, !0, v),
          j = _i(E),
          M = l(() => {
            (O(``), C && A(() => C()));
          }, [C, O]),
          N = bo(S, b, k, y, x),
          P = l(
            (e) => {
              e.target === e.currentTarget && j.current?.focus();
            },
            [j]
          );
        if (f === `hidden`) return _(he.input, { type: `hidden`, name: i, defaultValue: h });
        let F = g === !1 ? BA : void 0,
          I = !!D,
          ee = !!C && I,
          te = Xc(HA, gS, r, f === `text` && UA, f === `textarea` && WA);
        return T(he.div, {
          ref: t,
          onClick: P,
          style: d,
          className: te,
          ...w,
          children: [
            f === `textarea`
              ? _(he.textarea, {
                  ref: j,
                  ...F,
                  ...N,
                  required: c,
                  autoFocus: n,
                  name: i,
                  placeholder: s,
                  className: hS,
                  value: D,
                  maxLength: p,
                })
              : _(he.input, {
                  ref: j,
                  ...F,
                  ...N,
                  type: f,
                  required: c,
                  autoFocus: n,
                  name: i,
                  placeholder: s,
                  className: Xc(hS, !I && _S),
                  value: D,
                  min: o,
                  max: a,
                  step: u,
                  maxLength: p,
                }),
            ee &&
              _(`button`, {
                type: `button`,
                className: GA,
                onClick: M,
                "aria-label": `Clear`,
                children: _(s_, {}),
              }),
          ],
        });
      })),
      (HA = `framer-form-text-input`),
      (UA = `framer-form-text-input-type`),
      (WA = `framer-form-textarea-input-type`),
      (GA = `framer-form-text-input-clear`),
      (KA = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (qA = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (JA = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (YA = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (XA = lS(
        VA,
        [
          ...yS,
          ...SS,
          ...bS,
          Z(`.${gS}`, {
            boxShadow: Z.variable(`--framer-input-box-shadow`),
            borderTopLeftRadius: Z.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: Z.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: Z.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: Z.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: Z.variable(`--framer-input-corner-shape`),
            background: Z.variable(`--framer-input-background`),
            transition: Z.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          Z(`.${HA} .${hS}::placeholder`, {
            color: Z.variable(`--framer-input-placeholder-color`),
          }),
          Z(`.${HA}`, {
            display: `flex`,
            alignItems: `center`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${HA} .${hS}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }),
          Z(`.${HA}.${WA}`, { padding: 0 }),
          Z(`.${HA}.${WA} textarea.${hS}`, {
            width: `100%`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${HA} .${hS}[type="date"], .${HA} .${hS}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          Z(`.${HA} .${hS}::-webkit-date-and-time-value`, { textAlign: `start` }),
          Z(`.${HA} textarea`, {
            display: `flex`,
            resize: Z.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          Z(`.${HA} textarea::-webkit-resizer`, { background: `no-repeat ${ht(KA)}` }),
          Z(`.${HA}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${ht(qA)}` }),
          Z(`.${HA} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }),
          Z(`.${HA} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }),
          Z(`.${HA} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          Z(`.${HA} .${hS}::-webkit-datetime-edit`, {
            height: Z.variable(`--framer-input-font-line-height`),
          }),
          Z(`.${HA} .${hS}.${_S}::-webkit-datetime-edit`, {
            color: Z.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": Z.variable(`--framer-input-placeholder-color`),
            overflow: `visible`,
          }),
          Z(`.${HA}.${UA}::before`, {
            content: Z.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `${DS}px`,
            height: `${DS}px`,
            marginRight: `${ES}px`,
            ...OS,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: Z.variable(`--framer-input-icon-mask-image`),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${HA} .${hS}[type="date"]::before, .${HA} .${hS}[type="time"]::before`, {
            ...kS,
            paddingLeft: `${TS}px`,
            maskPosition: `${TS}px center`,
            backgroundPosition: `${TS}px center`,
          }),
          Z(`.${HA} .${hS}[type="date"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, ht(JA)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${HA} .${hS}[type="time"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, ht(YA)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${HA} .${hS}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: Z.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `${DS}px`,
            height: `100%`,
          }),
          Z(`.${HA}:focus-within, .${HA}.${vS}`, {
            boxShadow: Z.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
            background: Z.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
          }),
          Z(`.${HA}:focus-within::after, .${HA}.${vS}::after`, {
            borderColor: Z.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: Z.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: Z.variable(`--framer-input-focused-border-width`, xS),
          }),
          Z(`.${GA}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `${DS}px`,
            height: `${DS}px`,
            marginLeft: `${ES}px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: Z.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          Z(`.${GA}:hover, .${GA}:focus-visible`, {
            color: Z.variable(`--framer-input-font-color`),
          }),
        ],
        `framer-lib-form-plain-text-input`
      )),
      (ZA = p.forwardRef(function (e, t) {
        let {
            autoFocus: n,
            className: r,
            inputName: i,
            required: a,
            hidden: o,
            defaultValue: s,
            value: c,
            selectOptions: l,
            style: u,
            onValid: d,
            onChange: f,
            onBlur: p,
            onInvalid: m,
            onFocus: h,
            ...g
          } = e,
          v = pu(),
          y = !v && c !== void 0,
          b = c ?? ``,
          [x, , S] = a_(b, y, f),
          C = _i(y ? b : s),
          w = bo(d, m, S, p, h);
        return o
          ? _(he.input, { type: `hidden`, name: i, defaultValue: s })
          : _(he.div, {
              ref: t,
              style: u,
              className: Xc(gS, QA, r),
              ...g,
              children: _(
                he.select,
                {
                  ref: C,
                  name: i,
                  autoFocus: n,
                  required: a,
                  className: hS,
                  defaultValue: s,
                  value: y ? x : void 0,
                  ...w,
                  children: l?.map((e, t) => {
                    switch (e.type) {
                      case `divider`:
                        return _(`hr`, {}, t);
                      case `option`:
                        return _(
                          `option`,
                          {
                            value: e.value ?? e.title,
                            disabled: e.disabled,
                            children: e.title ?? e.value,
                          },
                          t
                        );
                      default:
                        return W(e);
                    }
                  }),
                },
                v ? c_(s) : void 0
              ),
            });
      })),
      (QA = `framer-form-select-wrapper`),
      ($A = 16),
      (ej = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="${$A}" height="${$A}"><path d="M 3.5 6 L 8 10.5 L 12.5 6" fill="transparent" stroke-width="1.5" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`),
      (tj = lS(
        ZA,
        [
          ...yS,
          ...SS,
          ...bS,
          Z(`.${QA}`, {
            padding: Z.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            background: Z.variable(`--framer-input-background`),
            borderTopLeftRadius: Z.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: Z.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: Z.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: Z.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: Z.variable(`--framer-input-corner-shape`),
            boxShadow: Z.variable(`--framer-input-box-shadow`),
            transition: Z.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          Z(`.${QA} select`, {
            appearance: `none`,
            "-webkit-appearance": `none`,
            padding: Z.variable(`--framer-input-padding`),
            background: `transparent`,
          }),
          Z(`.${QA}::before`, {
            ...kS,
            paddingLeft: `${TS}px`,
            backgroundPosition: `${TS}px center`,
            maskPosition: `${TS}px center`,
            backgroundImage: Z.variable(`--framer-input-icon-image`),
            maskImage: Z.variable(`--framer-input-icon-mask-image`, `url('${ej}')`),
          }),
          Z(`.${QA} select:required:invalid`, {
            color: Z.variable(`--framer-input-invalid-text-color`),
          }),
          Z(`.${QA}:focus-within, .${QA}.${vS}`, {
            background: Z.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
            boxShadow: Z.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
          }),
          Z(`.${QA}:focus-within::after, .${QA}.${vS}::after`, {
            borderColor: Z.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: Z.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: Z.variable(`--framer-input-focused-border-width`, xS),
          }),
          Z(`.${QA} select option`, { color: `#000` }),
          Z(`.${QA} select option:disabled`, { color: `rgba(0, 0, 0, 0.4)` }),
        ],
        `framer-lib-form-select`
      )),
      (nj = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (rj = { opacity: 0 }),
      (ij = { opacity: 1 }),
      (aj = y_(
        p.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: i,
              draggable: a,
              fitImageDimension: s,
              style: l,
              ...u
            } = e,
            d = { ...l },
            f = c(() => as(n), [n]),
            [m, h] = o();
          p.useEffect(() => {
            if (!n?.src || !s || f) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                A(() => h({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, s, f]);
          let g = f ?? m;
          return (
            s && g && ((d[s] = `auto`), (d.aspectRatio = g.width / g.height)),
            n && delete d.background,
            T(os(e.as), {
              ...u,
              style: d,
              ref: t,
              draggable: a,
              children: [n && _(es, { image: n, alt: i, draggable: a }), r],
            })
          );
        })
      )),
      (sj = !Ln() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (cj =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (lj = `{{ text-placeholder }}`),
      (uj = `rich-text-wrapper`),
      (dj = ko(
        h(function (e, t) {
          let {
              id: n,
              name: r,
              html: i,
              htmlFromDesign: a,
              text: o,
              textFromDesign: s,
              fonts: l = [],
              width: u,
              height: f,
              left: p,
              right: m,
              top: h,
              bottom: g,
              center: v,
              className: y,
              stylesPresetsClassName: b,
              visible: x = !0,
              opacity: S,
              rotation: T = 0,
              verticalAlignment: E = `top`,
              isEditable: D = !1,
              environment: O = Y.current,
              withExternalLayout: k = !1,
              positionSticky: A,
              positionStickyTop: j,
              positionStickyRight: M,
              positionStickyBottom: N,
              positionStickyLeft: P,
              __htmlStructure: F,
              __fromCanvasComponent: I = !1,
              _forwardedOverrideId: ee,
              _forwardedOverrides: te,
              _usesDOMRect: ne,
              children: re,
              ...L
            } = e,
            R = oo(),
            ie = fs(e),
            ae = w(null),
            oe = t ?? ae,
            { navigate: se, getRoute: ce } = Rt(),
            le = Bt();
          (Xn(e.preload ?? []), vs(e, oe));
          let ue = C(hC),
            de = pu(),
            fe = o,
            z = ee ?? n;
          if (z && te) {
            let e = te[z];
            typeof e == `string` && (fe = e);
          }
          let pe = ``;
          if (fe) {
            let e = x_(fe);
            pe = F ? F.replace(lj, e) : `<p>${e}</p>`;
          } else if (i) pe = i;
          else if (s) {
            let e = x_(s);
            pe = F ? F.replace(lj, e) : `<p>${e}</p>`;
          } else a && (pe = a);
          let me = Pu(),
            ge = c(() => (de || !ce || !le ? pe : S_(pe, ce, le, me)), [pe, ce, le, me]);
          if (
            (d(() => {
              let e = oe.current;
              if (e === null) return;
              function t(e) {
                let t = Ou(e.target, oe.current);
                Wn(e) ||
                  !se ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (yu(se, t, me) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [se, me]),
            T_(l, I, oe),
            !x)
          )
            return null;
          let _e = D && O() === Y.canvas,
            ve = {
              outline: `none`,
              display: `flex`,
              flexVisas: `column`,
              justifyContent: w_(E),
              opacity: _e ? 0 : S,
              flexShrink: 0,
            },
            ye = Y.hasRestrictions(),
            be = ro(e, R || 0, !1),
            xe = ne && (u === `auto` || f === `auto`),
            Se =
              e.transformTemplate || !be || !ye || I || xe
                ? (e.transformTemplate ?? ds(v))
                : void 0;
          if (!k) {
            if (be && ye && !xe) {
              let e = _x.getNumber(T).toFixed(4);
              ((ve.transform = `translate(${be.x}px, ${be.y}px) rotate(${e}deg)`),
                (ve.width = be.width),
                (ve.minWidth = be.width),
                (ve.height = be.height));
            } else
              ((ve.left = p),
                (ve.right = m),
                (ve.top = h),
                (ve.bottom = g),
                (ve.width = u),
                (ve.height = f),
                (ve.rotate = T));
            A
              ? (!de || ue) &&
                ((ve.position = `sticky`),
                (ve.willChange = `transform`),
                (ve.top = j),
                (ve.right = M),
                (ve.bottom = N),
                (ve.left = P))
              : de && (e.positionFixed || e.positionAbsolute) && (ve.position = `absolute`);
          }
          return (
            Jc(e, ve),
            Gc(e, ve),
            Object.assign(ve, e.style),
            _(he.div, {
              id: n,
              ref: oe,
              ...L,
              style: ve,
              layoutId: ie,
              "data-framer-name": r,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": v,
              className: Xc(y, b, uj),
              transformTemplate: Se,
              dangerouslySetInnerHTML: { __html: ge },
            })
          );
        })
      )),
      (fj = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (pj = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (mj = h(function (e, t) {
        return _(`svg`, { ...e, ref: t, children: e.children });
      })),
      (hj = he.create(mj)),
      (gj = h(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return _(hj, {
          ...r,
          ref: i,
          viewBox: t,
          children: _(he.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (_j = []),
      (vj = `RichTextContainer`),
      (yj = h(function (e, t) {
        let {
            __fromCanvasComponent: n = !1,
            _forwardedOverrideId: r,
            _forwardedOverrides: i,
            _usesDOMRect: a,
            anchorLinkOffsetY: o,
            as: s,
            bottom: l,
            center: u,
            children: d,
            environment: f = Y.current,
            fonts: p = _j,
            height: m,
            isEditable: h = !1,
            left: g,
            name: v,
            opacity: y,
            positionSticky: b,
            positionStickyBottom: x,
            positionStickyLeft: S,
            positionStickyRight: T,
            positionStickyTop: E,
            right: D,
            rotation: O = 0,
            style: k,
            _initialStyle: A,
            stylesPresetsClassNames: j,
            text: M,
            top: N,
            verticalAlignment: P = `top`,
            visible: F = !0,
            width: I,
            withExternalLayout: ee = !1,
            viewBox: te,
            viewBoxScale: ne = 1,
            effect: re,
            ...L
          } = e,
          R = oo(),
          ie = f(),
          ae = ie === Y.canvas,
          oe = ae || ie === Y.export,
          se = C(hC),
          ce = fs(e),
          le = w(null),
          ue = t ?? le;
        (vs(e, ue), T_(p, n, ue));
        let de = P_(re, ue),
          fe = c(() => {
            if (d) return H_(d, j, M, o, void 0, de.getTokenizer());
          }, [d, j, M, o, de]);
        if (!F) return null;
        let z = { opacity: h && ae ? 0 : y },
          pe = w_(P);
        pe !== NS.justifyContent && (z.justifyContent = pe);
        let me = {},
          he = Y.hasRestrictions(),
          ge = ro(e, R || 0, !1),
          _e = a && (I === `auto` || m === `auto`),
          ve =
            e.transformTemplate || !ge || !he || n || _e ? (e.transformTemplate ?? ds(u)) : void 0;
        (ee ||
          (ge && he && !_e
            ? ((me.x = ge.x + (V(k?.x) ? k.x : 0)),
              (me.y = ge.y + (V(k?.y) ? k.y : 0)),
              (me.left = 0),
              (me.top = 0),
              (z.rotate = _x.getNumber(O)),
              (z.width = ge.width),
              (z.minWidth = ge.width),
              (z.height = ge.height))
            : ((z.left = g),
              (z.right = D),
              (z.top = N),
              (z.bottom = l),
              (z.width = I),
              (z.height = m),
              (z.rotate = O)),
          b
            ? (!oe || se) &&
              ((z.position = `sticky`),
              (z.willChange = `transform`),
              (z.top = E),
              (z.right = T),
              (z.bottom = x),
              (z.left = S))
            : ae && (e.positionFixed || e.positionAbsolute) && (z.position = `absolute`)),
          Jc(e, z),
          Gc(e, z),
          Object.assign(z, A, k, me),
          ce && (L.layout = `preserve-aspect`));
        let ye = os(e.as),
          be = L[`data-framer-name`] ?? v,
          xe = ae ? z_($S(L)) : L;
        return B(e.viewBox)
          ? e.as === void 0
            ? _(gj, {
                ...xe,
                ref: ue,
                style: z,
                layoutId: ce,
                viewBox: te,
                viewBoxScale: ne,
                transformTemplate: ve,
                "data-framer-name": be,
                "data-framer-component-type": vj,
                children: fe,
              })
            : _(ye, {
                ...xe,
                ref: ue,
                style: z,
                layoutId: ce,
                transformTemplate: ve,
                "data-framer-name": be,
                "data-framer-component-type": vj,
                children: _(gj, {
                  viewBox: te,
                  viewBoxScale: ne,
                  style: { width: `100%`, height: `100%` },
                  children: fe,
                }),
              })
          : _(ye, {
              ...xe,
              ref: ue,
              style: z,
              layoutId: ce,
              transformTemplate: ve,
              "data-framer-name": be,
              "data-framer-component-type": vj,
              children: fe,
            });
      })),
      (bj = ko(
        h(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (B(a)) {
            !r.stylesPresetsClassName &&
              H(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [B(t) ? `html` : `htmlFromDesign`]: a };
            return _(dj, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && B(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return _(yj, { ...r, ref: i, children: y(a) ? a : void 0 });
        })
      )),
      (xj = `framer/asset-reference,`),
      (Sj = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = tv(t);
        return _(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: _(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c
          ),
        });
      }),
      (Cj = Rn()),
      (wj = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
        id;
        svg;
        innerHTML;
        viewBox;
        count;
      }),
      (Tj = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (Ej = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(CC(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = rv(e);
            (s &&
              (t && iv(s, n),
              (s.id = n),
              (o = lv(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          Cj && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = Tj),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          Cj && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new wj(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !Cj) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        Cj && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${Tj}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (Dj = new Ej()),
      (Oj = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (kj = h(function (e, t) {
        let n = oo(),
          r = fs(e),
          i = p.useRef(null),
          a = t ?? i,
          o = $k();
        return (
          vs(e, i),
          _(jj, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (Aj = 5e4),
      (jj = class e extends SC {
        static supportsConstraints = !0;
        static defaultSVGProps = {
          left: void 0,
          right: void 0,
          top: void 0,
          bottom: void 0,
          style: void 0,
          _constraints: { enabled: !0, aspectRatio: null },
          parentSize: 0,
          rotation: 0,
          visible: !0,
          svg: ``,
          shadows: [],
        };
        static defaultProps = { ...SC.defaultProps, ...e.defaultSVGProps };
        static frame(e) {
          return ro(e, e.parentSize || 0);
        }
        container = p.createRef();
        svgElement = null;
        setSVGElement = (e) => {
          ((this.svgElement = e), this.setLayerElement(e));
        };
        previouslyRenderedSVG = ``;
        get frame() {
          return ro(this.props, this.props.parentSize || 0);
        }
        unmountedSVG = ``;
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: e } = this.props,
              t = e ? `svg${e}` : null;
            (Dj.subscribe(this.unmountedSVG, !e, t),
              (this.previouslyRenderedSVG = this.unmountedSVG));
          }
          this.props.svgContentId || pv(this.container, this.props);
        }
        componentWillUnmount() {
          (Dj.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ``));
        }
        componentDidUpdate(e) {
          if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
          let { fill: t } = this.props;
          (pC.isImageObject(t) &&
            pC.isImageObject(e.fill) &&
            t.src !== e.fill.src &&
            Cs(this.svgElement, `fill`, null, !1),
            pv(this.container, this.props));
        }
        collectLayout(e, t) {
          if (this.props.withExternalLayout) {
            ((t.width = `100%`), (t.height = `100%`), (t.aspectRatio = `inherit`));
            return;
          }
          let n = this.frame,
            {
              rotation: r,
              intrinsicWidth: i,
              intrinsicHeight: a,
              width: o,
              height: s,
            } = this.props,
            c = _x.getNumber(r);
          if (
            ((e.opacity = G(this.props.opacity) ? this.props.opacity : 1), Y.hasRestrictions() && n)
          ) {
            (Object.assign(e, {
              transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
              width: `${n.width}px`,
              height: `${n.height}px`,
            }),
              eo(this.props) && (e.position = `absolute`));
            let r = n.width / (i || 1),
              o = n.height / (a || 1);
            t.transformOrigin = `top left`;
            let { zoom: s, target: l } = Bx;
            if (l === Y.export) {
              let e = s > 1 ? s : 1;
              ((t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e));
            } else t.transform = `scale(${r}, ${o})`;
            i && a && ((t.width = i), (t.height = a));
            return;
          }
          let { left: l, right: u, top: d, bottom: f } = this.props;
          (Object.assign(e, {
            left: l,
            right: u,
            top: d,
            bottom: f,
            width: o,
            height: s,
            rotate: c,
          }),
            Object.assign(t, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` }));
        }
        render() {
          let {
            id: e,
            visible: t,
            style: n,
            fill: r,
            svg: i,
            intrinsicHeight: a,
            intrinsicWidth: o,
            title: s,
            description: c,
            layoutId: l,
            className: u,
            variants: d,
            withExternalLayout: f,
            innerRef: p,
            svgContentId: m,
            height: h,
            opacity: g,
            width: v,
            requiresOverflowVisible: y,
            ...b
          } = this.props;
          if (!f && (!t || !e)) return null;
          let x = e ?? l ?? `svg`,
            S = this.frame,
            C = S || { width: o || 100, height: a || 100 },
            w = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
            E = {};
          (this.collectLayout(w, E),
            Uc(this.props, w),
            Jc(this.props, w),
            SC.applyWillChange(this.props, w, !1));
          let D = null;
          if (typeof r == `string` || J.isColorObject(r)) {
            let e = J.isColorObject(r) ? r.initialValue || J.toRgbString(r) : r;
            ((w.fill = e), (w.color = e));
          } else if (AC.isLinearGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${AC.hash(t)}`;
            w.fill = `url(#${n})`;
            let { stops: i, x1: a, x2: o, y1: s, y2: c } = q_(t, x);
            D = _(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: _(`linearGradient`, {
                id: n,
                x1: a,
                x2: o,
                y1: s,
                y2: c,
                children: i.map((e, t) =>
                  _(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (MC.isRadialGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${MC.hash(t)}`;
            w.fill = `url(#${n})`;
            let i = J_(t, x);
            D = _(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: _(`radialGradient`, {
                id: n,
                cy: t.centerAnchorY,
                cx: t.centerAnchorX,
                r: t.widthFactor,
                children: i.stops.map((e, t) =>
                  _(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (pC.isImageObject(r)) {
            let e = $_(r, C, x);
            e &&
              ((w.fill = `url(#${e.id})`),
              (D = _(`svg`, {
                ref: this.setSVGElement,
                width: `100%`,
                height: `100%`,
                style: { position: `absolute` },
                role: `presentation`,
                children: _(`defs`, { children: _(Sj, { ...e }) }),
              })));
          }
          let k = { "data-framer-component-type": `SVG` },
            A = !S;
          A && Object.assign(k, cs(this.props.center));
          let j =
              !y &&
              !D &&
              !w.fill &&
              !w.background &&
              !w.backgroundImage &&
              i.length < Aj &&
              !uv(i) &&
              !dv(i),
            M = null;
          if (j)
            ((w.backgroundSize = `100% 100%`),
              (w.backgroundImage = ht(i)),
              Dj.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = ``));
          else {
            let e = m ? `svg${m}` : null,
              t = Dj.subscribe(i, !m, e, y);
            (Dj.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = i),
              fv(w) && (w.overflow = `hidden`),
              (M = T(O, {
                children: [
                  D,
                  _(
                    `div`,
                    {
                      className: `svgContainer`,
                      style: E,
                      ref: this.container,
                      dangerouslySetInnerHTML: { __html: t },
                    },
                    pC.isImageObject(r) ? r.src : ``
                  ),
                ],
              })));
          }
          let N = os(this.props.as),
            { href: P, target: F, rel: I, onClick: ee, onTap: te } = this.props,
            ne = s || c;
          return _(N, {
            ...k,
            ...b,
            layoutId: l,
            transformTemplate: A ? ds(this.props.center) : void 0,
            id: e,
            ref: p,
            style: w,
            className: u,
            variants: d,
            tabIndex: this.props.tabIndex,
            role: ne ? `img` : void 0,
            "aria-label": s,
            "aria-description": c,
            "aria-hidden": ne ? void 0 : `true`,
            onTap: te,
            onClick: ee,
            href: P,
            target: F,
            rel: I,
            children: M,
          });
        }
      }),
      (Mj = ko(kj)),
      (Nj = 1e3),
      (Pj = `explicitInter`),
      (Ye.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = re(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
//! Credit to Astro | MIT License
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
export {
  Jv as $,
  _v as A,
  QO as At,
  Fw as B,
  Y as C,
  om as Ct,
  qk as D,
  sT as Dt,
  Mj as E,
  Sm as Et,
  _h as F,
  gv as G,
  cS as H,
  RA as I,
  Ey as J,
  Lo as K,
  kv as L,
  ZS as M,
  Xy as Mt,
  dS as N,
  CT as O,
  ll as Ot,
  Xc as P,
  Ct as Q,
  Iw as R,
  TO as S,
  nv as St,
  bj as T,
  lS as Tt,
  vv as U,
  Pw as V,
  yv as W,
  bt as X,
  ji as Y,
  Fj as Z,
  dx as _,
  Zr as _t,
  ST as a,
  eb as at,
  KT as b,
  Kt as bt,
  xE as c,
  Yp as ct,
  ww as d,
  Bt as dt,
  Si as et,
  WT as f,
  uu as ft,
  nE as g,
  Qr as gt,
  ry as h,
  pu as ht,
  uT as i,
  rm as it,
  Io as j,
  Zk as jt,
  mv as k,
  Dv as kt,
  XA as l,
  Rl as lt,
  UT as m,
  nc as mt,
  ku as n,
  Vi as nt,
  nS as o,
  Dj as ot,
  aj as p,
  $p as pt,
  Gp as q,
  Ll as r,
  OO as rt,
  za as s,
  vi as st,
  Du as t,
  PT as tt,
  tj as u,
  qt as ut,
  or as v,
  Hi as vt,
  ZE as w,
  xm as wt,
  kw as x,
  Rt as xt,
  hf as y,
  Wp as yt,
  Nw as z,
};
//# sourceMappingURL=framer.B5VSaEF1.mjs.map
