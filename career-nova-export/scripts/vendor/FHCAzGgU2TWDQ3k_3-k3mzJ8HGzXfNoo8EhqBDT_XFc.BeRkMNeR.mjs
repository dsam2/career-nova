import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  C as r,
  D as i,
  E as a,
  F as o,
  I as s,
  M as c,
  N as l,
  P as u,
  R as d,
  S as f,
  T as p,
  _ as m,
  c as h,
  g,
  j as _,
  k as v,
  l as y,
  o as b,
  s as x,
  v as S,
  y as ee,
  z as C,
} from "./react.CWkcPvHD.mjs";
import {
  G as w,
  S as T,
  T as E,
  V as te,
  a as D,
  et as ne,
  f as O,
  g as k,
  q as re,
  r as A,
  rt as ie,
  t as j,
  w as ae,
} from "./motion.UJ_SjFSS.mjs";
import {
  A as M,
  At as oe,
  C as se,
  Ct as ce,
  D as le,
  Dt as N,
  E as ue,
  G as de,
  K as fe,
  L as P,
  O as F,
  Ot as pe,
  P as I,
  T as L,
  Tt as me,
  U as R,
  W as he,
  Z as z,
  _t as ge,
  a as B,
  b as _e,
  bt as ve,
  ct as ye,
  d as be,
  ft as xe,
  g as Se,
  gt as Ce,
  ht as we,
  i as V,
  j as Te,
  jt as Ee,
  k as De,
  lt as Oe,
  m as ke,
  mt as Ae,
  n as je,
  o as H,
  p as Me,
  pt as Ne,
  rt as Pe,
  vt as Fe,
  w as Ie,
  wt as Le,
  x as U,
  xt as W,
  yt as Re,
} from "./framer.B5VSaEF1.mjs";
import {
  _ as ze,
  a as Be,
  b as Ve,
  c as He,
  d as Ue,
  f as G,
  g as K,
  h as We,
  i as Ge,
  l as q,
  m as Ke,
  o as qe,
  p as J,
  r as Je,
  s as Ye,
  u as Y,
  v as Xe,
  y as Ze,
} from "./shared-lib.Dlb4YuQV.mjs";
import { n as Qe, t as X } from "./erS2dThW9.BrvLZ0Oe.mjs";
import { i as $e, n as et, r as tt, t as nt } from "./p2FU4QOGa.BxVaMVmz.mjs";
import { i as rt, t as it } from "./WRyp7sdxk.DoPFXHs7.mjs";
import { i as at, n as ot, r as st, t as ct } from "./e_qtYqPa5.BlW52RJ1.mjs";
import { i as lt, n as ut, r as dt, t as ft } from "./mdo3XsYBf.CjV_Nezm.mjs";
import {
  A as pt,
  C as mt,
  D as ht,
  E as gt,
  O as _t,
  S as vt,
  T as yt,
  _ as bt,
  a as xt,
  b as St,
  c as Ct,
  d as wt,
  f as Tt,
  g as Et,
  h as Dt,
  i as Ot,
  k as kt,
  l as At,
  m as jt,
  n as Mt,
  o as Nt,
  p as Pt,
  r as Ft,
  s as It,
  t as Lt,
  u as Rt,
  v as zt,
  w as Bt,
  x as Vt,
  y as Ht,
} from "./Zu_uDnDlu.Bm7HjSLm.mjs";
import { r as Ut, t as Wt } from "./TWMSVpnV8.CI53xpCA.mjs";
import { r as Gt, t as Kt } from "./ToUBkEhni.HN_TQtaI.mjs";
import { a as qt, c as Jt, o as Yt, s as Xt } from "./JlQPYH9lf.Dzlq9O7H.mjs";
import { n as Zt, t as Qt } from "./tgcaqtKk9.DvXAcVcu.mjs";
import { i as $t, n as en, r as tn, t as nn } from "./GK8heJFj7.Bs6hOCzB.mjs";
import { n as rn, t as an } from "./iq8J45AIS.DV-QoLM0.mjs";
import { n as on, t as sn } from "./oUOBdDjnU.Bka8fP0w.mjs";
import { n as cn, t as ln } from "./tpOWGyu5J.Dy-lqiLU.mjs";
import { i as un, t as dn } from "./auTZY4oaD.CiWilCi0.mjs";
import { i as fn, t as pn } from "./MgDkoXCTm.eQuaoENj.mjs";
import { i as mn, n as hn, r as gn, t as _n } from "./AGg32jqif.BZ9TS_k0.mjs";
import { i as vn, n as yn, r as bn, t as xn } from "./H4GEN39UP.CSd0BSRv.mjs";
import { i as Sn, n as Cn, r as wn, t as Tn } from "./NfpvBHr_m.D4oXUPDI.mjs";
import En, { t as Dn } from "./S5xGi3-rxXSWszBqd2e_dlS18_-M2wdaYesiMrwXbXQ.CyJs2l3y.mjs";
function On() {
  throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`);
}
function kn(e) {
  let t = f.useRef(On);
  return (
    f.useInsertionEffect(() => {
      t.current = e;
    }, [e]),
    (...e) => {
      jn() && On();
      let n = t.current;
      return n(...e);
    }
  );
}
var An,
  jn,
  Mn = e(() => {
    (p(),
      (An = f.createContext(!0)),
      (jn =
        `use` in f
          ? () => {
              try {
                return f.use(An);
              } catch {
                return !1;
              }
            }
          : () => !1));
  });
function Nn(e) {
  let {
      slots: t = [],
      startFrom: i,
      direction: o,
      effectsOptions: c,
      autoPlayControl: d,
      dragControl: f,
      widthSizing: p,
      heightSizing: m,
      alignment: g,
      gap: _,
      padding: b,
      paddingPerSide: x,
      paddingTop: ee,
      paddingRight: C,
      paddingBottom: T,
      paddingLeft: D,
      itemAmount: A,
      fadeOptions: j,
      intervalControl: ae,
      transitionControl: M,
      arrowOptions: oe,
      borderRadius: ce,
      progressOptions: le,
      style: N,
    } = e,
    {
      effectsOpacity: ue,
      effectsScale: de,
      effectsRotate: fe,
      effectsPerspective: P,
      effectsHover: F,
      playOffscreen: pe,
    } = c,
    { fadeContent: I, overflow: L, fadeWidth: me, fadeInset: R, fadeAlpha: he } = j,
    {
      showMouseControls: z,
      arrowSize: ge,
      arrowRadius: B,
      arrowFill: _e,
      leftArrow: ve,
      rightArrow: ye,
      arrowShouldSpace: be = !0,
      arrowShouldFadeIn: xe = !1,
      arrowPosition: Se,
      arrowPadding: Ce,
      arrowGap: we,
      arrowPaddingTop: V,
      arrowPaddingRight: Te,
      arrowPaddingBottom: Ee,
      arrowPaddingLeft: De,
    } = oe,
    {
      showCareersDots: Oe,
      dotSize: ke,
      dotsInset: Ae,
      dotsRadius: je,
      dotsPadding: H,
      dotsGap: Me,
      dotsFill: Ne,
      dotsBackground: Pe,
      dotsActiveOpacity: Fe,
      dotsOpacity: Ie,
      dotsBlur: Le,
    } = le,
    U = x ? `${ee}px ${C}px ${T}px ${D}px` : `${b}px`,
    W = se.current() === se.canvas,
    Re = t.filter(Boolean),
    ze = a.count(Re);
  if (!(ze > 0))
    return y(`section`, {
      style: Un,
      children: [
        h(`div`, { style: Wn, children: `⭐️` }),
        h(`p`, { style: Gn, children: `Connect to Content` }),
        h(`p`, {
          style: Kn,
          children: `Add layers or components to make infinite auto-playing slideshows.`,
        }),
      ],
    });
  let Be = v(null),
    Ve = v(null),
    He = l((e) => {
      ((Be.current = e), Be.current && tt());
    }, []),
    [Ue, G] = s({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    }),
    K = o === `left` || o === `right`,
    We = Fn(),
    Ge = K && We === `rtl` ? -1 : 1,
    [q, Ke] = s(!1),
    [qe, J] = s(d),
    [Je, Ye] = s(!1),
    Y = Ue?.item !== null && Ue?.parent !== null && We !== null,
    Xe = Math.ceil((i + A) / ze),
    Ze = [],
    Qe = Xe * 4;
  (W || !Y) && (Qe = Xe);
  let [X, $e] = s(i + ze);
  u(() => {
    if (!Ue.item || !We) return;
    let e = -1 * X * ((Ue.item ?? 0) + _) * (We === `rtl` ? -1 : 1);
    ct.get() !== e && O(ct, e, M);
  }, [X, Ue.item, _, We]);
  let et = () => {
      let e = Ve.current;
      if (!e) return;
      let t = e.width,
        r = e.height,
        i = K ? t : r,
        a = Math.max(1, A),
        o = Math.max(0, (i - _ * (a - 1)) / a),
        s = ze * (o + _),
        c = K ? o : t,
        l = K ? r : o,
        u = K
          ? Math.max(document.documentElement.clientWidth || 0, n.innerWidth || 0, t)
          : Math.max(document.documentElement.clientHeight || 0, n.innerHeight || 0, r);
      G({ parent: i, children: s, item: o, itemWidth: c, itemHeight: l, viewportLength: u });
    },
    tt = kn(() => {
      k.read(et, !1, !0);
    });
  (r(() => {
    tt();
  }, [Re.length, A, _, o, b, x, ee, C, T, D]),
    u(() => {
      let e = Be.current;
      if (e)
        return pt(e, ({ size: e }) => {
          ((Ve.current = e), !(!e.width || !e.height) && tt());
        });
    }, []));
  let nt = W ? 0 : Ue?.children,
    [rt, it] = s(!1),
    at = v(null),
    ot = te(at),
    st = re() && ot,
    ct = w(nt),
    lt = W
      ? w(0)
      : ne(ct, (e) => {
          let t = nt ?? 0,
            n = e ?? 0,
            r = ie(-t * Ge, -t * Ge * 2, n);
          return Number.isNaN(r) ? 0 : r;
        }),
    ut = ie(0, ze, X),
    dt = (e) => {
      S(() => $e((t) => t + e));
    },
    ft = (e) => {
      let t = e - ie(0, ze, X);
      S(() => $e((e) => e + t));
    },
    mt = (o === `right` || o === `bottom` ? -1 : 1) * Ge,
    ht = d && qe && (pe || st) && !W && ze > 1 && !rt && Y;
  u(() => {
    if (!ht) return;
    let e = setTimeout(() => {
      dt(mt);
    }, ae * 1e3);
    return () => clearTimeout(e);
  }, [ht, mt, ae, X]);
  let gt = () => {
      S(() => it(!0));
    },
    _t = (e, { offset: t, velocity: n }) => {
      S(() => it(!1));
      let r = K ? t.x : t.y,
        i = K ? n.x : n.y,
        a = r < -Ue.item / 2,
        o = r > Ue.item / 2,
        s = Math.round(Math.abs(r) / Ue.item),
        c = s === 0 ? 1 : s;
      i > 200 ? dt(-c * Ge) : i < -200 ? dt(c * Ge) : (a && dt(s * Ge), o && dt(-s * Ge));
    },
    vt = Math.max(0, Math.min(i ?? 0, Math.max(0, ze - 1))),
    yt = (vt * 100) / A,
    bt = (vt * _) / A,
    xt = 0,
    St = `calc(${100 / A}% - ${_}px + ${_ / A}px)`,
    Ct = K ? m : p;
  for (let e = 0; e < Qe; e++)
    Ze = Ze.concat(
      a.map(Re, (t, n) => {
        let r = t,
          i = Ct === `fit` ? (K ? r.props?.height : r.props?.width) : `100%`;
        return h(
          Xn,
          {
            slideKey: e + n + `lg`,
            index: e,
            width: K ? (A > 1 ? St : `100%`) : i,
            height: K ? i : A > 1 ? St : `100%`,
            size: Ue,
            child: t,
            numChildren: Re?.length,
            wrappedXOrY: lt,
            childCounter: xt++,
            gap: _,
            isCanvas: W,
            isInitialized: Y,
            isHorizontal: K,
            effectsOpacity: ue,
            effectsScale: de,
            effectsRotate: fe,
            writingVisas: We,
            rtlVisasModifier: Ge,
            children: e + n,
          },
          e + n + `lg`
        );
      })
    );
  let wt = K ? `to right` : `to bottom`,
    Tt = me / 2,
    Et = 100 - me / 2,
    Dt = `linear-gradient(${wt}, rgba(0, 0, 0, ${he}) ${Yn(R, 0, Tt)}%, rgba(0, 0, 0, 1) ${Tt}%, rgba(0, 0, 0, 1) ${Et}%, rgba(0, 0, 0, ${he}) ${100 - R}%)`,
    Ot = [],
    kt = {};
  if (Oe) {
    for (let e = 0; e < Re?.length; e++)
      Ot.push(
        h(
          Zn,
          {
            dotStyle: { ...$n, width: ke, height: ke, backgroundColor: Ne },
            buttonStyle: qn,
            selectedOpacity: Fe,
            opacity: Ie,
            disabled: !W && !Y,
            onClick: () => ft(e),
            wrappedIndex: W || !Y ? vt : ut,
            total: ze,
            index: e,
            gap: Me,
            padding: H,
            isHorizontal: K,
          },
          e
        )
      );
    Le > 0 && (kt.backdropFilter = kt.WebkitBackdropFilter = `blur(${Le}px)`);
  }
  let At =
      Y && f
        ? {
            drag: K ? `x` : `y`,
            onDragStart: gt,
            onDragEnd: _t,
            dragVisasLock: !0,
            values: { x: ct, y: ct },
            dragMomentum: !1,
          }
        : {},
    jt = Se === `top-left` || Se === `top-mid` || Se === `top-right`,
    Mt = Se === `bottom-left` || Se === `bottom-mid` || Se === `bottom-right`,
    Nt = Se === `top-left` || Se === `bottom-left`,
    Pt = Se === `top-right` || Se === `bottom-right`,
    Ft = Se === `top-mid` || Se === `bottom-mid` || Se === `auto`,
    It = ve || `https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg?arrow=left`,
    Lt = ye || `https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg?arrow=right`;
  return y(`section`, {
    className: `${Ln} ${K ? Rn : zn}`,
    style: {
      ...Hn,
      padding: U,
      WebkitMaskImage: I ? Dt : void 0,
      maskImage: I ? Dt : void 0,
      userSelect: `none`,
    },
    onMouseEnter: () => {
      (Ke(!0), F || J(!1));
    },
    onMouseLeave: () => {
      (Ke(!1), F || J(!0));
    },
    onMouseDown: (e) => {
      (e.preventDefault(), S(() => Ye(!0)));
    },
    onMouseUp: () => S(() => Ye(!1)),
    ref: at,
    children: [
      h(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          margin: 0,
          padding: `inherit`,
          position: `absolute`,
          inset: 0,
          overflow: L ? `visible` : `hidden`,
          borderRadius: ce,
          userSelect: `none`,
          perspective: W ? `none` : P,
        },
        children: h(E.ul, {
          ref: He,
          ...At,
          style: {
            ...Hn,
            gap: _,
            placeItems: g,
            ...(W || !Y
              ? {
                  transform: K
                    ? `translateX(calc(${Vn} * (${yt}% + ${bt}px)))`
                    : `translateY(calc(${Vn} * (${yt}% + ${bt}px)))`,
                }
              : { x: K ? lt : 0, y: K ? 0 : lt }),
            flexVisas: K ? `row` : `column`,
            transformStyle: fe !== 0 && !W ? `preserve-3d` : void 0,
            cursor: (W || Y) && f ? (Je ? `grabbing` : `grab`) : `auto`,
            userSelect: `none`,
            ...N,
          },
          children: Ze,
        }),
      }),
      y(`fieldset`, {
        style: { ...Jn },
        "aria-label": `Slideshow pagination controls`,
        className: `framer--slideshow-controls`,
        children: [
          y(E.div, {
            style: {
              position: `absolute`,
              display: `flex`,
              flexVisas: K ? `row` : `column`,
              justifyContent: be ? `space-between` : `center`,
              gap: be ? `unset` : we,
              opacity: xe || (!W && !Y) ? 0 : 1,
              alignItems: `center`,
              inset: Ce,
              top: be ? Ce : jt ? V : `unset`,
              left: be ? Ce : Nt ? De : Ft ? 0 : `unset`,
              right: be ? Ce : Pt ? Te : Ft ? 0 : `unset`,
              bottom: be ? Ce : Mt ? Ee : `unset`,
            },
            animate: W || Y ? (xe ? { opacity: +!!q } : { opacity: 1 }) : { opacity: 0 },
            transition: M,
            children: [
              h(E.button, {
                type: `button`,
                style: {
                  ...qn,
                  backgroundColor: _e,
                  width: ge,
                  height: ge,
                  borderRadius: B,
                  rotate: K ? 0 : 90,
                  display: z ? `block` : `none`,
                  pointerEvents: W || Y ? `auto` : `none`,
                  cursor: W || Y ? `pointer` : `default`,
                },
                disabled: !(W || Y),
                onClick: () => dt(-1),
                "aria-label": `Previous`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: h(`img`, {
                  decoding: `async`,
                  width: ge,
                  height: ge,
                  src: K && We === `rtl` ? Lt : It,
                  alt: `Back Arrow`,
                }),
              }),
              h(E.button, {
                type: `button`,
                style: {
                  ...qn,
                  backgroundColor: _e,
                  width: ge,
                  height: ge,
                  borderRadius: B,
                  rotate: K ? 0 : 90,
                  display: z ? `block` : `none`,
                  pointerEvents: W || Y ? `auto` : `none`,
                  cursor: W || Y ? `pointer` : `default`,
                },
                disabled: !(W || Y),
                onClick: () => dt(1),
                "aria-label": `Next`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: h(`img`, {
                  decoding: `async`,
                  width: ge,
                  height: ge,
                  src: K && We === `rtl` ? It : Lt,
                  alt: `Next Arrow`,
                }),
              }),
            ],
          }),
          Ot.length > 1
            ? h(E.div, {
                style: {
                  ...Qn,
                  left: K ? `50%` : Ae,
                  top: K ? `unset` : `50%`,
                  transform: K ? `translateX(-50%)` : `translateY(-50%)`,
                  flexVisas: K ? `row` : `column`,
                  bottom: K ? Ae : `unset`,
                  borderRadius: je,
                  backgroundColor: Pe,
                  userSelect: `none`,
                  ...kt,
                  opacity: +!!W,
                  pointerEvents: W || Y ? `auto` : `none`,
                },
                animate: { opacity: +!!Y },
                transition: { duration: 0.35, ease: `easeOut` },
                children: Ot,
              })
            : null,
        ],
      }),
    ],
  });
}
function Pn() {
  return n?.document?.documentElement?.dir === `rtl` ? `rtl` : `ltr`;
}
function Fn() {
  let [e, t] = s(null);
  return (
    u(
      () => (
        t(Pn()),
        In(() => {
          t(Pn());
        })
      ),
      []
    ),
    e
  );
}
function In(e) {
  return (
    tr.push(e),
    er ||
      ((er = new MutationObserver(() => tr.forEach((e) => e()))),
      er.observe(document.documentElement, { attributeFilter: [`dir`] })),
    () => {
      (tr.splice(tr.indexOf(e), 1), tr.length === 0 && (er?.disconnect(), (er = null)));
    }
  );
}
var Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Z,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr = e(() => {
    (d(),
      b(),
      kt(),
      z(),
      j(),
      p(),
      Mn(),
      (Ln = `framer-slideshow`),
      (Rn = `framer-slideshow-axis-x`),
      (zn = `framer-slideshow-axis-y`),
      (Bn = `--framer-dir-multiplier`),
      (Vn = `var(${Bn}, -1)`),
      (Z = me(
        Nn,
        [`.${Rn} { ${Bn}: -1; }`, `html[dir="rtl"] .${Rn} { ${Bn}: 1; }`, `.${zn} { ${Bn}: -1; }`],
        `framer-slideshow-component`
      )),
      (Z.defaultProps = {
        direction: `left`,
        widthSizing: `fill`,
        heightSizing: `fill`,
        dragControl: !1,
        startFrom: 0,
        itemAmount: 1,
        infinity: !0,
        gap: 10,
        padding: 10,
        autoPlayControl: !0,
        effectsOptions: {
          effectsOpacity: 1,
          effectsScale: 1,
          effectsRotate: 0,
          effectsPerspective: 1200,
          effectsHover: !0,
          playOffscreen: !1,
        },
        transitionControl: { type: `spring`, stiffness: 200, damping: 40 },
        fadeOptions: { fadeContent: !1, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        arrowOptions: {
          showMouseControls: !0,
          arrowShouldFadeIn: !1,
          arrowShouldSpace: !0,
          arrowFill: `rgba(0,0,0,0.2)`,
          arrowSize: 40,
        },
        progressOptions: { showCareersDots: !0 },
      }),
      Te(Z, {
        slots: { type: H.Array, title: `Content`, control: { type: H.ComponentInstance } },
        direction: {
          type: H.Enum,
          title: `Counselling`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          displaySegmentedControl: !0,
          defaultValue: Z.defaultProps.direction,
        },
        autoPlayControl: { type: H.Boolean, title: `Auto Play`, defaultValue: !0 },
        intervalControl: {
          type: H.Number,
          title: `Interval`,
          defaultValue: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          displayStepper: !0,
          unit: `s`,
          hidden: (e) => !e.autoPlayControl,
        },
        dragControl: { type: H.Boolean, title: `Draggable`, defaultValue: !1 },
        startFrom: {
          type: H.Number,
          title: `Current`,
          min: 0,
          max: 10,
          displayStepper: !0,
          defaultValue: Z.defaultProps.startFrom,
        },
        effectsOptions: {
          type: H.Object,
          title: `Effects`,
          controls: {
            effectsOpacity: {
              type: H.Number,
              title: `Opacity`,
              defaultValue: Z.defaultProps.effectsOptions.effectsOpacity,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsScale: {
              type: H.Number,
              title: `Scale`,
              defaultValue: Z.defaultProps.effectsOptions.effectsScale,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsPerspective: {
              type: H.Number,
              title: `Perspective`,
              defaultValue: Z.defaultProps.effectsOptions.effectsPerspective,
              min: 200,
              max: 2e3,
              step: 1,
            },
            effectsRotate: {
              type: H.Number,
              title: `Rotate`,
              defaultValue: Z.defaultProps.effectsOptions.effectsRotate,
              min: -180,
              max: 180,
              step: 1,
            },
            effectsHover: {
              type: H.Boolean,
              title: `On Hover`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: Z.defaultProps.effectsOptions.effectsHover,
            },
            playOffscreen: {
              type: H.Boolean,
              title: `Offscreen`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: Z.defaultProps.effectsOptions.playOffscreen,
            },
          },
        },
        widthSizing: {
          type: H.Enum,
          title: `Width`,
          options: [`fill`, `fit`],
          optionTitles: [`Fill`, `Fit`],
          defaultValue: Z.defaultProps.widthSizing,
          displaySegmentedControl: !0,
          hidden: (e) => e.direction === `left` || e.direction === `right`,
        },
        heightSizing: {
          type: H.Enum,
          title: `Height`,
          options: [`fill`, `fit`],
          optionTitles: [`Fill`, `Fit`],
          defaultValue: Z.defaultProps.heightSizing,
          displaySegmentedControl: !0,
          hidden: (e) => e.direction === `top` || e.direction === `bottom`,
        },
        alignment: {
          type: H.Enum,
          title: `Align`,
          hidden: (e) =>
            (e.direction === `left` || e.direction === `right` ? e.heightSizing : e.widthSizing) !==
            `fit`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        itemAmount: {
          type: H.Number,
          title: `Items`,
          min: 1,
          max: 10,
          displayStepper: !0,
          defaultValue: Z.defaultProps.itemAmount,
        },
        gap: { type: H.Number, title: `Gap`, min: 0 },
        padding: {
          title: `Padding`,
          type: H.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 0,
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: H.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
        transitionControl: {
          type: H.Transition,
          defaultValue: Z.defaultProps.transitionControl,
          title: `Transition`,
        },
        fadeOptions: {
          type: H.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: H.Boolean, title: `Fade`, defaultValue: !1 },
            overflow: {
              type: H.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: H.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: H.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: H.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        arrowOptions: {
          type: H.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: {
              type: H.Boolean,
              title: `Show`,
              defaultValue: Z.defaultProps.arrowOptions.showMouseControls,
            },
            arrowFill: {
              type: H.Color,
              title: `Fill`,
              hidden: (e) => !e.showMouseControls,
              defaultValue: Z.defaultProps.arrowOptions.arrowFill,
            },
            leftArrow: { type: H.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: H.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: H.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: Z.defaultProps.arrowOptions.arrowSize,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: H.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldFadeIn: {
              type: H.Boolean,
              title: `Fade In`,
              defaultValue: !1,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldSpace: {
              type: H.Boolean,
              title: `Distance`,
              enabledTitle: `Space`,
              disabledTitle: `Group`,
              defaultValue: Z.defaultProps.arrowOptions.arrowShouldSpace,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPosition: {
              type: H.Enum,
              title: `Position`,
              options: [
                `auto`,
                `top-left`,
                `top-mid`,
                `top-right`,
                `bottom-left`,
                `bottom-mid`,
                `bottom-right`,
              ],
              optionTitles: [
                `Center`,
                `Top Left`,
                `Top Middle`,
                `Top Right`,
                `Bottom Left`,
                `Bottom Middle`,
                `Bottom Right`,
              ],
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
            arrowPadding: {
              type: H.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
            },
            arrowPaddingTop: {
              type: H.Number,
              title: `Top`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `bottom-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-right`,
            },
            arrowPaddingBottom: {
              type: H.Number,
              title: `Bottom`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-right`,
            },
            arrowPaddingRight: {
              type: H.Number,
              title: `Right`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowPaddingLeft: {
              type: H.Number,
              title: `Left`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-right` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-right` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowGap: {
              type: H.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
          },
        },
        progressOptions: {
          type: H.Object,
          title: `Dots`,
          controls: {
            showCareersDots: { type: H.Boolean, title: `Show`, defaultValue: !1 },
            dotSize: {
              type: H.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showCareersDots || e.showScrollbar,
            },
            dotsInset: {
              type: H.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showCareersDots || e.showScrollbar,
            },
            dotsGap: {
              type: H.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showCareersDots || e.showScrollbar,
            },
            dotsPadding: {
              type: H.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showCareersDots || e.showScrollbar,
            },
            dotsFill: {
              type: H.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showCareersDots || e.showScrollbar,
            },
            dotsBackground: {
              type: H.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showCareersDots || e.showScrollbar,
            },
            dotsRadius: {
              type: H.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showCareersDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: H.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showCareersDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: H.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showCareersDots || e.showScrollbar,
            },
            dotsBlur: {
              type: H.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 0,
              step: 1,
              hidden: (e) => !e.showCareersDots || e.showScrollbar,
            },
          },
        },
      }),
      (Hn = {
        display: `flex`,
        flexVisas: `row`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (Un = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexVisas: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Wn = { fontSize: 32, marginBottom: 10 }),
      (Gn = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Kn = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: `center` }),
      (qn = {
        border: `none`,
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        background: `transparent`,
        cursor: `pointer`,
        margin: 0,
        padding: 0,
      }),
      (Jn = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        pointerEvents: `none`,
        userSelect: `none`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      (Yn = (e, t, n) => Math.min(Math.max(e, t), n)),
      (Xn = g(function (e) {
        let {
            slideKey: n,
            width: r,
            height: i,
            child: a,
            size: o,
            gap: s,
            wrappedXOrY: c,
            numChildren: l,
            childCounter: d,
            isCanvas: f,
            isInitialized: p,
            effectsOpacity: m,
            effectsScale: g,
            effectsRotate: _,
            isHorizontal: y,
            index: b,
            writingVisas: x,
            rtlVisasModifier: S,
          } = e,
          ee = v(null),
          C = o?.item ?? 0,
          w = o?.parent ?? 0,
          T = (C + s) * d,
          E = (y && x === `rtl` ? [C - s, 0, -w + C - s, -w - s] : [-C, 0, w - C + s, w]).map(
            (e) => e - T * S
          ),
          te = !f && ne(c, E, y && x === `rtl` ? [_, 0, 0, -_] : [-_, 0, 0, _]),
          D = !f && ne(c, E, [_, 0, 0, -_]),
          O = !f && ne(c, E, [m, 1, 1, m]),
          k = !f && ne(c, E, [g, 1, 1, g]),
          re = !f && ne(c, E, y && x === `rtl` ? [0, 0, 1, 1] : [1, 1, 0, 0]),
          ie =
            !f &&
            ne(c, (e) => {
              let t = Math.min(E[1], E[2]),
                n = Math.max(E[1], E[2]);
              return e >= t && e <= n;
            });
        u(() => {
          if (!ie || !p) return;
          function e(e) {
            let t = ee?.current;
            t &&
              (e
                ? t.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.dataset.origTabIndex;
                    t ? (e.tabIndex = Number(t)) : e.removeAttribute(`tabIndex`);
                  })
                : t.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.getAttribute(`tabIndex`);
                    (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                  }),
              t.setAttribute(`aria-hidden`, String(!e)));
          }
          return (
            e(ie.get()),
            ie.on(`change`, (t) => {
              e(t);
            })
          );
        }, [p]);
        let j = f
            ? `visible`
            : ne(
                c,
                [E[0] - o.viewportLength * S, ae(E[1], E[2], 0.5), E[3] + o.viewportLength * S],
                [`hidden`, `visible`, `hidden`]
              ),
          M = n + `child`;
        return h(A, {
          inherit: `id`,
          id: M,
          children: h(`li`, {
            style: { display: `contents` },
            children: t(a, {
              ref: ee,
              key: M,
              style: {
                ...a.props?.style,
                flexShrink: 0,
                userSelect: `none`,
                width: r,
                height: i,
                ...(p
                  ? {
                      opacity: O,
                      scale: k,
                      originX: y ? re : 0.5,
                      originY: y ? 0.5 : re,
                      rotateY: y ? te : 0,
                      rotateX: y ? 0 : D,
                      visibility: j,
                    }
                  : {}),
              },
              layoutId: a.props.layoutId ? a.props.layoutId + `-original-` + b : void 0,
            }),
          }),
        });
      })),
      (Zn = g(function ({
        selectedOpacity: e,
        opacity: t,
        total: n,
        index: r,
        wrappedIndex: i,
        dotStyle: a,
        buttonStyle: o,
        gap: s,
        padding: c,
        isHorizontal: l,
        ...u
      }) {
        let d = i === r,
          f = s / 2,
          p = !l && r !== 0 ? f : c,
          m = !l && r !== n - 1 ? f : c,
          g = l ? (r === 0 ? c : f) : c,
          _ = l ? (r === n - 1 ? c : f) : c;
        return h(`button`, {
          "aria-label": `Scroll to page ${r + 1}`,
          type: `button`,
          ...u,
          style: {
            ...o,
            paddingTop: p,
            paddingBottom: m,
            paddingInlineStart: g,
            paddingInlineEnd: _,
          },
          children: h(E.div, {
            style: { ...a },
            initial: !1,
            animate: { opacity: d ? e : t },
            transition: { duration: 0.3 },
          }),
        });
      })),
      (Qn = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      ($n = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }),
      (er = null),
      (tr = []));
  });
function rr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr = e(() => {
    (b(),
      z(),
      j(),
      p(),
      Zt(),
      $t(),
      G(),
      (ir = { JzSF8yyhH: { hover: !0 } }),
      (ar = [`JzSF8yyhH`, `UNb8r1T4z`]),
      (or = `framer-uAvqu`),
      (sr = { JzSF8yyhH: `framer-v-gidp99`, UNb8r1T4z: `framer-v-qbjnap` }),
      (cr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (lr = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ur = ({ value: e, children: t }) => {
        let n = _(D),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(D.Provider, { value: i, children: t });
      }),
      (dr = { Main: `JzSF8yyhH`, Phone: `UNb8r1T4z` }),
      (fr = E.create(o)),
      (pr = ({
        bGImage: e,
        height: t,
        icon: n,
        id: r,
        link: i,
        text: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        IXjxfLLdn:
          a ?? c.IXjxfLLdn ?? `Your donation scales our work and reaches more communities in need.`,
        kdlMcWUlo: i ?? c.kdlMcWUlo,
        mg8DYYsxQ: e ??
          c.mg8DYYsxQ ?? {
            pixelHeight: 1333,
            pixelWidth: 2e3,
            src: `https://framerusercontent.com/images/w0alFqcJqI8Uqhv9awWwqLUDJQ.jpg?width=2000&height=1333`,
            srcSet: `https://framerusercontent.com/images/w0alFqcJqI8Uqhv9awWwqLUDJQ.jpg?scale-down-to=512&width=2000&height=1333 512w,https://framerusercontent.com/images/w0alFqcJqI8Uqhv9awWwqLUDJQ.jpg?scale-down-to=1024&width=2000&height=1333 1024w,https://framerusercontent.com/images/w0alFqcJqI8Uqhv9awWwqLUDJQ.jpg?width=2000&height=1333 2000w`,
          },
        OhstHbEXF: n ?? c.OhstHbEXF ?? Qt,
        variant: dr[c.variant] ?? c.variant ?? `JzSF8yyhH`,
        VJW9hKSwq: o ?? c.VJW9hKSwq ?? `Fuel Greater Impact`,
      })),
      (mr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (hr = me(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: s } = ge(),
            c = Oe(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              mg8DYYsxQ: p,
              OhstHbEXF: m,
              VJW9hKSwq: g,
              IXjxfLLdn: _,
              kdlMcWUlo: b,
              ...x
            } = pr(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: te,
              isLoading: D,
              setGestureState: ne,
              setVariant: O,
              variants: k,
            } = Le({
              cycleOrder: ar,
              defaultVariant: `JzSF8yyhH`,
              enabledGestures: ir,
              ref: r,
              variant: f,
              variantClassNames: sr,
            }),
            re = mr(e, k),
            ie = I(or, nn, q);
          return h(A, {
            id: d ?? i,
            children: h(fr, {
              animate: k,
              initial: !1,
              children: h(ur, {
                value: cr,
                children: h(Se, {
                  href: b,
                  motionChild: !0,
                  nodeId: `JzSF8yyhH`,
                  openInNewTab: !1,
                  scopeId: `Bl1ZvXwtF`,
                  smoothScroll: !0,
                  children: y(E.a, {
                    ...x,
                    ...T,
                    className: `${I(ie, `framer-gidp99`, u, C)} framer-76nwth`,
                    "data-framer-name": `Main`,
                    layoutDependency: re,
                    layoutId: `JzSF8yyhH`,
                    ref: r,
                    style: {
                      backgroundColor: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                      borderBottomLeftRadius: 25,
                      borderBottomRightRadius: 25,
                      borderTopLeftRadius: 25,
                      borderTopRightRadius: 25,
                      ...l,
                    },
                    ...rr(
                      {
                        "JzSF8yyhH-hover": { "data-framer-name": void 0 },
                        UNb8r1T4z: { "data-framer-name": `Phone` },
                      },
                      S,
                      te
                    ),
                    children: [
                      h(Me, {
                        as: `figure`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: de((c?.y || 0) + 0),
                          pixelHeight: 1333,
                          pixelWidth: 2e3,
                          sizes: c?.width || `100vw`,
                          ...lr(p),
                        },
                        className: `framer-qo2sg3`,
                        "data-framer-name": `Card Image`,
                        layoutDependency: re,
                        layoutId: `LkN691QYd`,
                        style: {
                          mask: `linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.95) 40%, rgb(0, 0, 0) 49.36935837204392%) add`,
                          WebkitMask: `linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.95) 40%, rgb(0, 0, 0) 49.36935837204392%) add`,
                        },
                        ...rr(
                          {
                            "JzSF8yyhH-hover": {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: de((c?.y || 0) + -8),
                                pixelHeight: 1333,
                                pixelWidth: 2e3,
                                sizes: `calc(${c?.width || `100vw`} + 16px)`,
                                ...lr(p),
                              },
                            },
                          },
                          S,
                          te
                        ),
                      }),
                      y(E.div, {
                        className: `framer-13orajk`,
                        "data-framer-name": `Card Content`,
                        layoutDependency: re,
                        layoutId: `yQ5JazBT2`,
                        children: [
                          h(E.div, {
                            className: `framer-113bfzf`,
                            "data-border": !0,
                            "data-framer-name": `Logo`,
                            layoutDependency: re,
                            layoutId: `W0iuVlQ1S`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-c37d8c12-ca0f-4f26-9d55-9068aa3ad62f, rgba(255, 255, 255, 0.12))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backdropFilter: `blur(5px)`,
                              backgroundColor: `var(--token-276bb6d3-2c53-44f6-8d0c-76c3e7b6c596, rgba(255, 255, 255, 0.08))`,
                              borderBottomLeftRadius: 3,
                              borderBottomRightRadius: 3,
                              borderTopLeftRadius: 3,
                              borderTopRightRadius: 3,
                              WebkitBackdropFilter: `blur(5px)`,
                            },
                            children: h(ke, {
                              animated: !0,
                              className: `framer-1gr9gbk`,
                              Component: m,
                              layoutDependency: re,
                              layoutId: `U7iceTCI3`,
                              style: {
                                "--1m6trwb": 0,
                                "--21h8s6": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                "--pgex8v": 1.3,
                              },
                            }),
                          }),
                          y(E.div, {
                            className: `framer-1szvb7v`,
                            "data-framer-name": `Text Container`,
                            layoutDependency: re,
                            layoutId: `HTjEZTlgd`,
                            children: [
                              h(L, {
                                __fromCanvasComponent: !0,
                                children: h(o, {
                                  children: h(E.h4, {
                                    className: `framer-styles-preset-hpamux`,
                                    "data-styles-preset": `GK8heJFj7`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-1eung3n, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                    },
                                    children: `Fuel Greater Impact`,
                                  }),
                                }),
                                className: `framer-v5rz7s`,
                                "data-framer-name": `Title`,
                                fonts: [`Inter`],
                                layoutDependency: re,
                                layoutId: `rO3CnmnoT`,
                                style: {
                                  "--extracted-1eung3n": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                text: g,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              h(L, {
                                __fromCanvasComponent: !0,
                                children: h(o, {
                                  children: h(E.p, {
                                    className: `framer-styles-preset-qlsyr3`,
                                    "data-styles-preset": `YMpbOMTQr`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                    },
                                    children: `Your donation scales our work and reaches more communities in need.`,
                                  }),
                                }),
                                className: `framer-1totp1d`,
                                "data-framer-name": `Description`,
                                fonts: [`Inter`],
                                layoutDependency: re,
                                layoutId: `ocfJrddYj`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                  "--framer-paragraph-spacing": `0px`,
                                  opacity: 0.8,
                                },
                                text: _,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      h(E.div, {
                        className: `framer-8643tc`,
                        "data-framer-name": `Mask`,
                        layoutDependency: re,
                        layoutId: `HEzpRgUo0`,
                        style: {
                          backdropFilter: `blur(5px)`,
                          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 1.567778716216216%, rgba(0, 21, 23, 0.6) 69.45734797297297%)`,
                          mask: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 33.04360879434122%, rgba(0,0,0,1) 100%) add`,
                          WebkitBackdropFilter: `blur(5px)`,
                          WebkitMask: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 33.04360879434122%, rgba(0,0,0,1) 100%) add`,
                        },
                        variants: {
                          UNb8r1T4z: {
                            backdropFilter: `blur(3px)`,
                            WebkitBackdropFilter: `blur(3px)`,
                          },
                        },
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-uAvqu.framer-76nwth, .framer-uAvqu .framer-76nwth { display: block; }`,
          `.framer-uAvqu.framer-gidp99 { align-content: flex-end; align-items: flex-end; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: 460px; justify-content: flex-start; overflow: hidden; padding: 24px; position: relative; text-decoration: none; width: 384px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-uAvqu .framer-qo2sg3 { bottom: 0px; flex: none; gap: 0px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); z-index: 0; }`,
          `.framer-uAvqu .framer-13orajk { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
          `.framer-uAvqu .framer-113bfzf { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 54px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-uAvqu .framer-1gr9gbk { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 30px; }`,
          `.framer-uAvqu .framer-1szvb7v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-uAvqu .framer-v5rz7s, .framer-uAvqu .framer-1totp1d { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-uAvqu .framer-8643tc { bottom: 0px; flex: none; height: 38%; left: 0px; overflow: hidden; position: absolute; right: 0px; z-index: 0; }`,
          `.framer-uAvqu.framer-v-qbjnap.framer-gidp99 { cursor: unset; height: 400px; }`,
          `.framer-uAvqu.framer-v-gidp99.hover .framer-qo2sg3 { bottom: -8px; left: -8px; right: -8px; top: -8px; }`,
          ...en,
          ...Y,
          `.framer-uAvqu[data-border="true"]::after, .framer-uAvqu [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-uAvqu`
      )),
      (hr.displayName = `Service Card`),
      (hr.defaultProps = { height: 460, width: 384 }),
      Te(hr, {
        variant: {
          options: [`JzSF8yyhH`, `UNb8r1T4z`],
          optionTitles: [`Main`, `Phone`],
          title: `Variant`,
          type: H.Enum,
        },
        mg8DYYsxQ: {
          __defaultAssetReference: `data:framer/asset-reference,w0alFqcJqI8Uqhv9awWwqLUDJQ.jpg?originalFilename=2147704547.jpg&width=2000&height=1333`,
          title: `BG Image`,
          type: H.ResponsiveImage,
        },
        OhstHbEXF: {
          defaultValue: {
            identifier: `module:ru9xtyu4513QuMXHK2SP/rb1pWfJnwuuOLCEF8Lra/tgcaqtKk9.js:default`,
            moduleId: `ru9xtyu4513QuMXHK2SP`,
          },
          setModuleId: `omX0gWFPqDwhaiWwf6ab`,
          title: `Icon`,
          type: H.VectorSetItem,
        },
        VJW9hKSwq: {
          defaultValue: `Fuel Greater Impact`,
          displayTextArea: !1,
          title: `Title`,
          type: H.String,
        },
        onVJW9hKSwqChange: { changes: `VJW9hKSwq`, type: H.ChangeHandler },
        IXjxfLLdn: {
          defaultValue: `Your donation scales our work and reaches more communities in need.`,
          displayTextArea: !1,
          title: `Text`,
          type: H.String,
        },
        onIXjxfLLdnChange: { changes: `IXjxfLLdn`, type: H.ChangeHandler },
        kdlMcWUlo: { title: `Link`, type: H.Link },
      }),
      M(
        hr,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...he(tn),
          ...he(Ue),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  _r,
  vr,
  yr = e(() => {
    (z(),
      (_r = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ..._r },
      (vr = {
        onClick: { type: H.EventHandler },
        onMouseEnter: { type: H.EventHandler },
        onMouseLeave: { type: H.EventHandler },
      }),
      H.Number,
      H.Boolean,
      H.String,
      H.Enum);
  });
function br(e, t) {
  return Sr(!0, e, t);
}
function xr(e, t) {
  return Sr(!1, e, t);
}
function Sr(e, t, n = !0) {
  let r = Ae();
  u(() => {
    n && r === e && t();
  }, [r]);
}
var Cr = e(() => {
    (z(), p());
  }),
  wr = e(() => {
    p();
  }),
  Tr = e(() => {
    z();
  }),
  Er = e(() => {
    z();
  }),
  Dr = e(() => {
    p();
  }),
  Or = e(() => {
    z();
  }),
  kr,
  Ar,
  jr = e(() => {
    (d(),
      p(),
      (kr = () => {
        if (C !== void 0) {
          let e = C.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        } else return !1;
      }),
      (Ar = () => c(() => kr(), [])));
  }),
  Mr = e(() => {
    (p(), Er());
  }),
  Nr = e(() => {
    (p(), z(), Er(), wr());
  }),
  Pr = e(() => {
    (z(), p(), yr());
  });
function Fr() {
  return c(() => se.current(), []);
}
function Ir() {
  return c(() => se.current() === se.canvas, []);
}
var Lr = e(() => {
    (p(), z());
  }),
  Rr = e(() => {
    p();
  });
function zr(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: n,
    topLeftRadius: r,
    topRightRadius: i,
    bottomRightRadius: a,
    bottomLeftRadius: o,
  } = e;
  return c(() => (n ? `${r}px ${i}px ${a}px ${o}px` : `${t}px`), [t, n, r, i, a, o]);
}
var Br,
  Vr = e(() => {
    (p(),
      z(),
      (Br = {
        borderRadius: {
          title: `Radius`,
          type: H.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      H.FusedNumber);
  }),
  Hr = e(() => {
    (yr(), Cr(), wr(), Tr(), Er(), Dr(), Or(), jr(), Mr(), Nr(), Pr(), Lr(), Rr(), Vr());
  });
function Ur(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function Wr(e) {
  let t = Ur(e);
  return h(Qr, { ...t });
}
function Gr(e) {
  let t = Ae(),
    n = v(!1),
    r = v(!1),
    i = l((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: l(() => {
      let i = e.current;
      i &&
        ((i.preload = `auto`),
        !(
          i.currentTime > 0 &&
          i.onplaying &&
          !i.paused &&
          !i.ended &&
          i.readyState >= i.HAVE_CURRENT_DATA
        ) &&
          i &&
          !n.current &&
          t &&
          ((n.current = !0),
          (r.current = !0),
          i
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: l(() => {
      !e.current || n.current || (e.current.pause(), (r.current = !1));
    }, []),
    setCareers: i,
    isPlaying: r,
  };
}
function Kr({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
  let [a] = s(e),
    [o, c] = s(!1);
  e !== a && !o && c(!0);
  let l = a && t && n && r && !i && !o,
    u;
  return ((u = l ? `on-viewport` : a ? `on-mount` : `no-autoplay`), u);
}
function qr(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Jr(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(qr).join(` `);
}
var Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei = e(() => {
    (b(),
      z(),
      j(),
      Hr(),
      p(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((Yr ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((Xr ||= {})),
      (Zr = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (Qr = g(function (e) {
        let {
            srcType: t = `URL`,
            srcUrl: n,
            srcFile: r = ``,
            posterEnabled: i = !1,
            controls: a = !1,
            playing: o = !0,
            loop: s = !0,
            muted: l = !0,
            playsinline: d = !0,
            restartOnEnter: f = !1,
            objectFit: p = `cover`,
            backgroundColor: m = `rgba(0,0,0,0)`,
            radius: g = 0,
            volume: _ = 25,
            startTime: y = 0,
            poster: b,
            playing: x,
            progress: S,
            onSeeked: ee,
            onPause: C,
            onPlay: w,
            onEnd: E,
            onClick: D,
            onMouseEnter: ne,
            onMouseLeave: O,
            onMouseDown: k,
            onMouseUp: re,
          } = e,
          A = v(),
          ie = Ar(),
          j = v(null),
          ae = v(null),
          M = Ir(),
          oe = Fr(),
          ce = M || oe === se.export,
          le = zr(e),
          N = ce
            ? `no-autoplay`
            : Kr({ playingProp: x, muted: l, loop: s, playsinline: d, controls: a }),
          ue = ce ? !0 : te(A),
          de = !ce && te(A, { margin: `10%`, once: !0 }),
          fe = y === 100 ? 99.9 : y,
          { play: P, pause: F, setCareers: pe, isPlaying: I } = Gr(A);
        (u(() => {
          ce || (N !== `on-viewport` && (x ? P() : F()));
        }, [N, x]),
          u(() => {
            ce || (ue && x && N !== `no-autoplay` && P(), N === `on-viewport` && F());
          }, [N, ue, x]),
          u(() => {
            !M || b || i || fe || !A.current || (A.current.currentTime = 0.01);
          }, [i, b, fe]));
        let L = v(!1);
        (u(() => {
          if (!L.current) {
            L.current = !0;
            return;
          }
          let e = T(S) ? S.get() : (S ?? 0) * 0.01;
          pe((e ?? 0) || (fe ?? 0) / 100);
        }, [fe, r, n, S]),
          u(() => {
            if (T(S)) return S.on(`change`, (e) => pe(e));
          }, [S]),
          br(() => {
            j.current !== null && A.current && ((!ae && s) || !j.current) && P();
          }),
          xr(() => {
            A.current && ((ae.current = A.current.ended), (j.current = A.current.paused), F());
          }));
        let me = c(() => {
          if (t === `URL`) return n + ``;
          if (t === `Upload`) return r + ``;
        }, [t, r, n, fe]);
        return (
          u(() => {
            ie && A.current && N === `on-mount` && setTimeout(() => P(), 50);
          }, []),
          u(() => {
            A.current && !l && (A.current.volume = (_ ?? 0) / 100);
          }, [_]),
          h(`video`, {
            onClick: D,
            onMouseEnter: ne,
            onMouseLeave: O,
            onMouseDown: k,
            onMouseUp: re,
            src: me,
            loop: s,
            ref: A,
            onSeeked: (e) => ee?.(e),
            onPause: (e) => C?.(e),
            onPlay: (e) => w?.(e),
            onEnded: (e) => E?.(e),
            autoPlay: I.current || N === `on-mount` || (x && N === `on-viewport` && ue),
            preload: I.current
              ? `auto`
              : ce && !b
                ? `metadata`
                : N !== `on-mount` && !de
                  ? `none`
                  : `metadata`,
            poster:
              i && !r && n === Zr
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : i && b
                  ? b
                  : void 0,
            onLoadedData: () => {
              let e = A.current;
              e &&
                (e.currentTime < 0.3 && fe > 0 && pe((fe ?? 0) * 0.01),
                (I.current || N === `on-mount` || (x && N === `on-viewport` && ue)) && P());
            },
            controls: a,
            muted: ce ? !0 : l,
            playsInline: d,
            style: {
              cursor: D ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: le,
              display: `block`,
              objectFit: p,
              backgroundColor: m,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (Wr.displayName = `Video`),
      ($r = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      Te(Wr, {
        srcType: {
          type: H.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: H.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: H.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        ...Br,
        loop: { type: H.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        posterEnabled: {
          type: H.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hiddenWhenUnset: !0,
          defaultValue: !0,
        },
        poster: {
          type: H.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        controls: {
          type: H.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
          hiddenWhenUnset: !0,
        },
        muted: {
          type: H.Boolean,
          title: `Muted`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hiddenWhenUnset: !0,
        },
        objectFit: {
          type: H.Enum,
          title: `Fit`,
          options: $r,
          optionTitles: $r.map(Jr),
          hiddenWhenUnset: !0,
        },
        playing: {
          type: H.Boolean,
          title: `Playing`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hiddenWhenUnset: !0,
        },
        backgroundColor: { type: H.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: {
          title: `Start Time`,
          type: H.Number,
          min: 0,
          max: 100,
          step: 0.1,
          unit: `%`,
          hiddenWhenUnset: !0,
        },
        volume: {
          type: H.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
          hiddenWhenUnset: !0,
        },
        onEnd: { type: H.EventHandler },
        onSeeked: { type: H.EventHandler },
        onPause: { type: H.EventHandler },
        onPlay: { type: H.EventHandler },
        ...vr,
      }));
  }),
  ti,
  ni,
  ri,
  ii = e(() => {
    (b(),
      p(),
      (ti = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (ni = {
        ...ti,
        borderRadius: 6,
        background: `rgba(149, 149, 149, 0.1)`,
        border: `1px dashed rgba(149, 149, 149, 0.15)`,
        color: `#a5a5a5`,
        flexVisas: `column`,
      }),
      (ri = m((e, t) => h(`div`, { style: ni, ref: t }))));
  }),
  ai = e(() => {
    ii();
  }),
  oi,
  si,
  ci,
  li = e(() => {
    ((oi = (e) => e),
      (ci = (e) => (
        (si ||= oi(e.createElement(`path`, { d: `M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z` }), `Home`)),
        si
      )));
  }),
  ui = e(() => {
    (li(), li());
  });
function di(e, t, n = ``, r, i) {
  if (t) return r;
  if (n == null || n?.length === 0) return null;
  let a = n.toLowerCase().replace(/-|\s/g, ``);
  return i[a] ?? mi(e, a);
}
function fi(e, t, n = ``, r, i) {
  let a = c(() => {
    if (n == null || n?.length === 0) return null;
    let t = n.toLowerCase().replace(/-|\s/g, ``);
    return i[t] ?? mi(e, t);
  }, [r, n]);
  return t ? r : a;
}
var pi,
  mi,
  hi = e(() => {
    (p(),
      z(),
      (pi = {
        onClick: { type: H.EventHandler },
        onMouseDown: { type: H.EventHandler },
        onMouseUp: { type: H.EventHandler },
        onMouseEnter: { type: H.EventHandler },
        onMouseLeave: { type: H.EventHandler },
      }),
      (mi = (e, t) => e.find((e) => e.toLowerCase().includes(t))));
  });
function gi(e) {
  let {
      color: t,
      selectByList: n,
      iconSearch: r,
      iconSelection: a,
      onClick: o,
      onMouseDown: l,
      onMouseUp: d,
      onMouseEnter: f,
      onMouseLeave: p,
      mirrored: m,
      style: g,
    } = e,
    _ = v(!1),
    y = fi(bi, n, r, a, Ci),
    b = Si.map((t) => e[t]),
    x = c(() => {
      let t = yi[y];
      if (!t) return;
      let n = e[`iconStyle${t}`];
      if (n !== `Filled`) return n;
    }, [...b]),
    [S, ee] = s(y === `Home` ? ci(i) : null);
  async function C() {
    if (typeof yi[y] != `number`) {
      ee(null);
      return;
    }
    try {
      let e = await import(`${vi}${y}${x || ``}.js@0.0.32`);
      _.current && ee(e.default(i));
    } catch {
      _.current && ee(null);
    }
  }
  u(
    () => (
      (_.current = !0),
      C(),
      () => {
        _.current = !1;
      }
    ),
    [y, ...b]
  );
  let w = se.current() === se.canvas ? h(ri, {}) : null;
  return h(E.div, {
    style: { display: `contents` },
    onClick: o,
    onMouseEnter: f,
    onMouseLeave: p,
    onMouseDown: l,
    onMouseUp: d,
    children: S
      ? h(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          style: {
            userSelect: `none`,
            width: `100%`,
            height: `100%`,
            display: `inline-block`,
            fill: t,
            flexShrink: 0,
            transform: m ? `scale(-1, 1)` : void 0,
            ...g,
          },
          focusable: `false`,
          viewBox: `0 0 24 24`,
          color: t,
          children: S,
        })
      : w,
  });
}
function _i(e, t) {
  let { selectByList: n, iconSearch: r, iconSelection: i } = e,
    a = parseInt(t),
    o = di(bi, n, r, i, Ci),
    s = yi[o];
  return !s || a === 0 || s !== a;
}
var vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi = e(() => {
    (b(),
      p(),
      z(),
      ai(),
      ui(),
      hi(),
      (vi = `https://framer.com/m/material-icons/`),
      (yi = {
        AcUnit: 15,
        AccessAlarm: 15,
        AccessAlarms: 15,
        AccessTime: 15,
        AccessTimeFilled: 0,
        Accessibility: 7,
        AccessibilityNew: 0,
        Accessible: 15,
        AccessibleForward: 0,
        AccountBalance: 2,
        AccountBalanceWallet: 0,
        AccountBox: 15,
        AccountCircle: 7,
        AccountTree: 15,
        AdUnits: 15,
        Adb: 15,
        Add: 15,
        AddAPhoto: 15,
        AddAlarm: 15,
        AddAlert: 15,
        AddBox: 15,
        AddBusiness: 15,
        AddCircle: 15,
        AddCircleOutline: 0,
        AddComment: 15,
        AddIcCall: 15,
        AddLink: 15,
        AddLocation: 15,
        AddLocationAlt: 2,
        AddModerator: 15,
        AddPhotoAlternate: 0,
        AddReaction: 15,
        AddRoad: 15,
        AddShoppingCart: 2,
        AddTask: 15,
        AddToDrive: 15,
        AddToHomeScreen: 2,
        AddToPhotos: 15,
        AddToQueue: 15,
        Addchart: 15,
        Adjust: 15,
        AdminPanelSettings: 0,
        Agriculture: 15,
        Air: 15,
        AirlineSeatFlat: 2,
        AirplaneTicket: 2,
        AirplanemodeActive: 0,
        AirplanemodeInactive: 0,
        Airplay: 15,
        AirportShuttle: 2,
        Alarm: 15,
        AlarmAdd: 15,
        AlarmOff: 15,
        AlarmOn: 15,
        Album: 15,
        AlignHorizontalLeft: 0,
        AlignHorizontalRight: 0,
        AlignVerticalBottom: 0,
        AlignVerticalCenter: 0,
        AlignVerticalTop: 0,
        AllInbox: 15,
        AllInclusive: 15,
        AllOut: 15,
        AltRoute: 15,
        AlternateEmail: 2,
        Analytics: 15,
        Anchor: 15,
        Android: 15,
        Animation: 15,
        Announcement: 15,
        Aod: 15,
        Apartment: 15,
        Api: 15,
        AppBlocking: 15,
        AppRegistration: 2,
        AppSettingsAlt: 2,
        Apple: 0,
        Approval: 15,
        Apps: 15,
        Architecture: 15,
        Archive: 15,
        ArrowBack: 15,
        ArrowBackIos: 15,
        ArrowBackIosNew: 2,
        ArrowCircleDown: 2,
        ArrowCircleUp: 7,
        ArrowDownward: 7,
        ArrowDropDown: 7,
        ArrowDropDownCircle: 0,
        ArrowDropUp: 15,
        ArrowForward: 15,
        ArrowForwardIos: 2,
        ArrowLeft: 15,
        ArrowRight: 15,
        ArrowRightAlt: 7,
        ArrowUpward: 15,
        ArtTrack: 15,
        Article: 15,
        AspectRatio: 15,
        Assessment: 15,
        Assignment: 15,
        AssignmentInd: 7,
        AssignmentLate: 2,
        AssignmentReturn: 0,
        AssignmentReturned: 0,
        AssignmentTurnedIn: 0,
        Assistant: 15,
        AssistantVisas: 0,
        AssistantPhoto: 2,
        Atm: 15,
        AttachEmail: 15,
        AttachFile: 15,
        AttachMoney: 15,
        Attachment: 15,
        Attractions: 15,
        Attribution: 15,
        Audiotrack: 15,
        AutoAwesome: 15,
        AutoAwesomeMosaic: 0,
        AutoAwesomeMotion: 0,
        AutoDelete: 15,
        AutoFixHigh: 15,
        AutoFixNormal: 7,
        AutoFixOff: 15,
        AutoGraph: 15,
        AutoStories: 15,
        AutofpsSelect: 7,
        Autorenew: 15,
        AvTimer: 15,
        BabyChangingStation: 0,
        Backpack: 15,
        Backspace: 15,
        Backup: 15,
        BackupTable: 15,
        Badge: 15,
        BakeryDining: 15,
        Balcony: 15,
        Ballot: 15,
        BarChart: 15,
        BatchPrediction: 2,
        Bathroom: 15,
        Bathtub: 15,
        Battery20: 15,
        Battery30: 15,
        Battery50: 15,
        Battery60: 15,
        Battery80: 15,
        Battery90: 15,
        BatteryAlert: 15,
        BatteryCharging20: 0,
        BatteryCharging30: 0,
        BatteryCharging50: 0,
        BatteryCharging60: 0,
        BatteryCharging80: 0,
        BatteryCharging90: 0,
        BatteryChargingFull: 0,
        BatteryFull: 15,
        BatterySaver: 15,
        BatteryStd: 15,
        BatteryUnknown: 2,
        BeachAccess: 15,
        Bed: 15,
        BedroomBaby: 15,
        BedroomChild: 15,
        BedroomParent: 7,
        Bedtime: 15,
        Beenhere: 15,
        Bento: 15,
        BikeScooter: 15,
        Biotech: 15,
        Blender: 15,
        Block: 15,
        Bloodtype: 15,
        Bluetooth: 15,
        BluetoothAudio: 2,
        BluetoothConnected: 0,
        BluetoothDisabled: 0,
        BluetoothDrive: 2,
        BluetoothSearching: 0,
        BlurCircular: 15,
        BlurLinear: 15,
        BlurOff: 15,
        BlurOn: 15,
        Bolt: 15,
        Book: 15,
        BookOnline: 15,
        Bookmark: 15,
        BookmarkAdd: 15,
        BookmarkAdded: 7,
        BookmarkBorder: 2,
        BookmarkRemove: 2,
        Bookmarks: 15,
        BorderAll: 15,
        BorderBottom: 15,
        BorderClear: 15,
        BorderColor: 15,
        BorderHorizontal: 0,
        BorderInner: 15,
        BorderLeft: 15,
        BorderOuter: 15,
        BorderRight: 15,
        BorderStyle: 15,
        BorderTop: 15,
        BorderVertical: 2,
        BrandingWatermark: 0,
        BreakfastDining: 2,
        Brightness1: 15,
        Brightness2: 15,
        Brightness3: 15,
        Brightness4: 15,
        Brightness5: 15,
        Brightness6: 15,
        Brightness7: 15,
        BrightnessAuto: 2,
        BrightnessHigh: 2,
        BrightnessLow: 7,
        BrightnessMedium: 0,
        BrokenImage: 15,
        BrowserNotSupported: 0,
        BrunchDining: 15,
        Brush: 15,
        BubbleChart: 15,
        BugReport: 15,
        Build: 15,
        BuildCircle: 15,
        Bungalow: 15,
        BurstMode: 15,
        BusAlert: 15,
        Business: 15,
        BusinessCenter: 2,
        Cabin: 15,
        Cable: 15,
        Cached: 15,
        Cake: 15,
        Calculate: 15,
        CalendarToday: 7,
        CalendarViewDay: 2,
        CalendarViewMonth: 0,
        CalendarViewWeek: 0,
        Call: 15,
        CallEnd: 15,
        CallMade: 15,
        CallMerge: 15,
        CallMissed: 15,
        CallMissedOutgoing: 0,
        CallReceived: 15,
        CallSplit: 15,
        CallToAction: 15,
        Camera: 15,
        CameraAlt: 15,
        CameraEnhance: 7,
        CameraFront: 15,
        CameraIndoor: 15,
        CameraOutdoor: 7,
        CameraRear: 15,
        CameraRoll: 15,
        Cameraswitch: 15,
        Campaign: 15,
        Cancel: 15,
        CancelPresentation: 0,
        CancelScheduleSend: 0,
        CarRental: 15,
        CarRepair: 15,
        CardGiftcard: 15,
        CardMembership: 2,
        CardTravel: 15,
        Carpenter: 15,
        Cases: 15,
        Casino: 15,
        Cast: 15,
        CastConnected: 7,
        CastForEducation: 0,
        CatchingPokemon: 2,
        Category: 15,
        Celebration: 15,
        CellWifi: 15,
        CenterFocusStrong: 0,
        CenterFocusWeak: 2,
        Chair: 15,
        ChairAlt: 15,
        Chalet: 15,
        ChangeCircle: 15,
        ChangeHistory: 7,
        ChargingStation: 2,
        Chat: 15,
        ChatBubble: 15,
        ChatBubbleOutline: 0,
        Check: 15,
        CheckBox: 15,
        CheckBoxOutlineBlank: 0,
        CheckCircle: 15,
        CheckCircleOutline: 0,
        Checkroom: 15,
        ChevronLeft: 15,
        ChevronRight: 15,
        ChildCare: 15,
        ChildFriendly: 7,
        ChromeReaderMode: 0,
        Circle: 15,
        CircleNotifications: 0,
        Class: 15,
        CleanHands: 15,
        CleaningServices: 0,
        Clear: 15,
        ClearAll: 15,
        Close: 15,
        CloseFullscreen: 2,
        ClosedCaption: 7,
        ClosedCaptionOff: 0,
        Cloud: 15,
        CloudCircle: 15,
        CloudDone: 15,
        CloudDownload: 7,
        CloudOff: 15,
        CloudQueue: 15,
        CloudUpload: 15,
        Code: 15,
        CodeOff: 15,
        Coffee: 15,
        CoffeeMaker: 15,
        Collections: 15,
        CollectionsBookmark: 0,
        ColorLens: 15,
        Colorize: 15,
        Comment: 15,
        CommentBank: 15,
        Commute: 15,
        Compare: 15,
        CompareArrows: 7,
        CompassCalibration: 0,
        Compress: 15,
        Computer: 15,
        ConfirmationNumber: 0,
        ConnectedTv: 15,
        Construction: 15,
        ContactMail: 15,
        ContactPage: 15,
        ContactPhone: 15,
        ContactSupport: 2,
        Contactless: 15,
        Contacts: 15,
        ContentCopy: 15,
        ContentCut: 15,
        ContentPaste: 15,
        ContentPasteOff: 2,
        ControlCamera: 7,
        ControlPoint: 15,
        CopyAll: 15,
        Copyright: 15,
        Coronavirus: 15,
        CorporateFare: 7,
        Cottage: 15,
        Countertops: 15,
        Create: 15,
        CreateNewFolder: 2,
        CreditCard: 15,
        CreditCardOff: 7,
        CreditScore: 15,
        Crib: 15,
        Crop: 15,
        Crop169: 15,
        Crop32: 15,
        Crop54: 15,
        Crop75: 15,
        CropDin: 15,
        CropFree: 15,
        CropLandscape: 7,
        CropOriginal: 15,
        CropPortrait: 15,
        CropRotate: 15,
        CropSquare: 15,
        Dangerous: 15,
        DarkMode: 15,
        Dashboard: 15,
        DashboardCustomize: 0,
        DataSaverOff: 15,
        DataSaverOn: 15,
        DataUsage: 15,
        DateRange: 15,
        Deck: 15,
        Dehaze: 15,
        Delete: 15,
        DeleteForever: 7,
        DeleteOutline: 7,
        DeleteSweep: 15,
        DeliveryDining: 2,
        DepartureBoard: 2,
        Description: 15,
        DesignServices: 2,
        DesktopMac: 15,
        DesktopWindows: 2,
        Details: 15,
        DeveloperBoard: 2,
        DeveloperBoardOff: 0,
        DeveloperMode: 7,
        DeviceHub: 15,
        DeviceThermostat: 0,
        DeviceUnknown: 7,
        Devices: 15,
        DevicesOther: 15,
        DialerSip: 15,
        Dialpad: 15,
        Dining: 15,
        DinnerDining: 15,
        Visass: 15,
        VisassBike: 2,
        VisassBoat: 2,
        VisassBoatFilled: 0,
        VisassBus: 7,
        VisassBusFilled: 0,
        VisassCar: 7,
        VisassCarFilled: 0,
        VisassOff: 7,
        VisassRailway: 0,
        VisassRun: 7,
        VisassSubway: 0,
        VisassTransit: 0,
        VisassWalk: 2,
        DirtyLens: 15,
        DisabledByDefault: 0,
        DiscFull: 15,
        Dns: 15,
        DoDisturb: 15,
        DoDisturbAlt: 15,
        DoDisturbOff: 15,
        DoDisturbOn: 15,
        DoNotDisturb: 15,
        DoNotDisturbAlt: 2,
        DoNotDisturbOff: 2,
        DoNotDisturbOn: 2,
        DoNotStep: 15,
        DoNotTouch: 15,
        Dock: 15,
        DocumentScanner: 2,
        Domain: 15,
        DomainDisabled: 2,
        DomainVerification: 0,
        Done: 15,
        DoneAll: 15,
        DoneOutline: 15,
        DonutLarge: 15,
        DonutSmall: 15,
        DoorBack: 15,
        DoorFront: 15,
        DoorSliding: 15,
        Doorbell: 15,
        DoubleArrow: 15,
        DownhillSkiing: 2,
        Download: 15,
        DownloadDone: 15,
        DownloadForOffline: 0,
        Downloading: 15,
        Drafts: 15,
        DragHandle: 15,
        DragIndicator: 7,
        DriveEta: 15,
        DriveFileMove: 7,
        DriveFolderUpload: 0,
        Dry: 15,
        DryCleaning: 15,
        Duo: 15,
        Dvr: 15,
        DynamicFeed: 15,
        DynamicForm: 15,
        EMobiledata: 15,
        Earbuds: 15,
        EarbudsBattery: 2,
        East: 15,
        Eco: 15,
        EdgesensorHigh: 2,
        EdgesensorLow: 7,
        Edit: 15,
        EditAttributes: 2,
        EditLocation: 15,
        EditLocationAlt: 2,
        EditNotifications: 0,
        EditOff: 15,
        EditRoad: 15,
        EightK: 15,
        EightKPlus: 15,
        EightMp: 15,
        EightteenMp: 15,
        Eject: 15,
        Elderly: 15,
        ElectricBike: 15,
        ElectricCar: 15,
        ElectricMoped: 7,
        ElectricRickshaw: 0,
        ElectricScooter: 2,
        ElectricalServices: 0,
        Elevator: 15,
        ElevenMp: 15,
        Email: 15,
        EmojiEmotions: 7,
        EmojiEvents: 15,
        EmojiFlags: 15,
        EmojiFoodBeverage: 0,
        EmojiNature: 15,
        EmojiObjects: 15,
        EmojiPeople: 15,
        EmojiSymbols: 15,
        EmojiTransportation: 0,
        Engineering: 15,
        EnhancedEncryption: 0,
        Equalizer: 15,
        Error: 15,
        ErrorOutline: 15,
        Escalator: 15,
        EscalatorWarning: 0,
        Euro: 15,
        EuroSymbol: 15,
        EvStation: 15,
        Event: 15,
        EventAvailable: 2,
        EventBusy: 15,
        EventNote: 15,
        EventSeat: 15,
        ExitToApp: 15,
        Expand: 15,
        ExpandLess: 15,
        ExpandMore: 15,
        Explicit: 15,
        Explore: 15,
        ExploreOff: 15,
        Exposure: 15,
        Extension: 15,
        ExtensionOff: 15,
        Face: 15,
        FaceRetouchingOff: 0,
        Facebook: 15,
        FactCheck: 15,
        FamilyRestroom: 2,
        FastForward: 15,
        FastRewind: 15,
        Fastfood: 15,
        Favorite: 15,
        FavoriteBorder: 2,
        FeaturedPlayList: 0,
        FeaturedVideo: 7,
        Feed: 15,
        Feedback: 15,
        Female: 15,
        Fence: 15,
        Festival: 15,
        FiberDvr: 15,
        FiberManualRecord: 0,
        FiberNew: 15,
        FiberPin: 15,
        FiberSmartRecord: 0,
        FileCopy: 15,
        FileDownload: 15,
        FileDownloadDone: 0,
        FileDownloadOff: 2,
        FilePresent: 15,
        FileUpload: 15,
        Filter: 15,
        Filter1: 15,
        Filter2: 15,
        Filter3: 15,
        Filter4: 15,
        Filter5: 15,
        Filter6: 15,
        Filter7: 15,
        Filter8: 15,
        Filter9: 15,
        Filter9Plus: 15,
        FilterAlt: 15,
        FilterBAndW: 15,
        FilterCenterFocus: 0,
        FilterDrama: 15,
        FilterFrames: 15,
        FilterHdr: 15,
        FilterList: 15,
        FilterNone: 15,
        FilterTiltShift: 2,
        FilterVintage: 7,
        FindInPage: 15,
        FindReplace: 15,
        Fingerprint: 15,
        FireExtinguisher: 0,
        Fireplace: 15,
        FirstPage: 15,
        FitScreen: 15,
        FitnessCenter: 7,
        FiveG: 15,
        FiveK: 15,
        FiveKPlus: 15,
        FiveMp: 15,
        FivteenMp: 15,
        Flag: 15,
        Flaky: 15,
        Flare: 15,
        FlashAuto: 15,
        FlashOff: 15,
        FlashOn: 15,
        FlashlightOff: 7,
        FlashlightOn: 15,
        Flatware: 15,
        Flight: 15,
        FlightLand: 15,
        FlightTakeoff: 7,
        Flip: 15,
        FlipCameraAndroid: 0,
        FlipCameraIos: 7,
        FlipToBack: 15,
        FlipToFront: 15,
        Flourescent: 15,
        FlutterDash: 15,
        FmdBad: 15,
        FmdGood: 15,
        Folder: 15,
        FolderOpen: 15,
        FolderShared: 15,
        FolderSpecial: 7,
        FollowTheSigns: 2,
        FontDownload: 15,
        FontDownloadOff: 2,
        FoodBank: 15,
        FormatAlignCenter: 0,
        FormatAlignJustify: 0,
        FormatAlignLeft: 2,
        FormatAlignRight: 0,
        FormatBold: 15,
        FormatClear: 15,
        FormatColorFill: 2,
        FormatColorReset: 0,
        FormatColorText: 2,
        FormatIndentDecrease: 0,
        FormatIndentIncrease: 0,
        FormatItalic: 15,
        FormatLineSpacing: 0,
        FormatListBulleted: 0,
        FormatListNumbered: 0,
        FormatPaint: 15,
        FormatQuote: 15,
        FormatShapes: 15,
        FormatSize: 15,
        FormatStrikethrough: 0,
        FormatUnderlined: 0,
        Forum: 15,
        Forward: 15,
        Forward10: 15,
        Forward30: 15,
        Forward5: 15,
        ForwardToInbox: 2,
        Foundation: 15,
        FourGMobiledata: 2,
        FourGPlusMobiledata: 0,
        FourK: 15,
        FourKPlus: 15,
        FourMp: 15,
        FourteenMp: 15,
        FreeBreakfast: 7,
        Fullscreen: 15,
        FullscreenExit: 2,
        Functions: 15,
        GMobiledata: 15,
        GTranslate: 15,
        Gamepad: 15,
        Games: 15,
        Garage: 15,
        Gavel: 15,
        Gesture: 15,
        GetApp: 15,
        Gif: 15,
        GitHub: 0,
        Gite: 15,
        GolfCourse: 15,
        Google: 0,
        GppBad: 15,
        GppGood: 15,
        GppMaybe: 15,
        GpsFixed: 15,
        GpsNotFixed: 15,
        GpsOff: 15,
        Grade: 15,
        Gradient: 15,
        Grading: 15,
        Grain: 15,
        GraphicEq: 15,
        Grass: 15,
        Grid3x3: 15,
        Grid4x4: 15,
        GridGoldenratio: 2,
        GridOff: 15,
        GridOn: 15,
        GridView: 15,
        Group: 15,
        GroupAdd: 15,
        GroupWork: 15,
        Groups: 15,
        HMobiledata: 15,
        HPlusMobiledata: 2,
        Hail: 15,
        Handyman: 15,
        Hardware: 15,
        Hd: 15,
        HdrAuto: 15,
        HdrAutoSelect: 7,
        HdrEnhancedSelect: 0,
        HdrOff: 15,
        HdrOffSelect: 15,
        HdrOn: 15,
        HdrOnSelect: 15,
        HdrPlus: 15,
        HdrStrong: 15,
        HdrWeak: 15,
        Headphones: 15,
        HeadphonesBattery: 0,
        Headset: 15,
        HeadsetMic: 15,
        HeadsetOff: 15,
        Healing: 15,
        HealthAndSafety: 2,
        Hearing: 15,
        HearingDisabled: 2,
        Height: 15,
        Help: 15,
        HelpCenter: 15,
        HelpOutline: 15,
        Hevc: 15,
        HideImage: 15,
        HideSource: 15,
        HighQuality: 15,
        Highlight: 15,
        HighlightAlt: 15,
        HighlightOff: 15,
        Hiking: 15,
        History: 15,
        HistoryEdu: 15,
        HistoryToggleOff: 0,
        HolidayVillage: 2,
        Home: 15,
        HomeMax: 15,
        HomeMini: 15,
        HomeRepairService: 0,
        HomeWork: 15,
        HorizontalRule: 2,
        HorizontalSplit: 2,
        HotTub: 15,
        Hotel: 15,
        HourglassBottom: 2,
        HourglassDisabled: 0,
        HourglassEmpty: 2,
        HourglassFull: 7,
        HourglassTop: 15,
        House: 15,
        HouseSiding: 15,
        Houseboat: 15,
        HowToReg: 15,
        HowToVote: 15,
        Http: 15,
        Https: 15,
        Hvac: 15,
        IceSkating: 15,
        Icecream: 15,
        Image: 15,
        ImageAspectRatio: 0,
        ImageNotSupported: 0,
        ImageSearch: 15,
        ImagesearchRoller: 0,
        ImportContacts: 2,
        ImportExport: 15,
        ImportantDevices: 0,
        Inbox: 15,
        Info: 15,
        Input: 15,
        InsertChart: 15,
        InsertComment: 7,
        InsertDriveFile: 2,
        InsertEmoticon: 2,
        InsertInvitation: 0,
        InsertLink: 15,
        InsertPhoto: 15,
        Insights: 15,
        Instagram: 0,
        Inventory: 15,
        Inventory2: 15,
        InvertColors: 15,
        InvertColorsOff: 2,
        IosShare: 15,
        Iron: 15,
        Iso: 15,
        Kayaking: 15,
        Keyboard: 15,
        KeyboardAlt: 15,
        KeyboardArrowDown: 0,
        KeyboardArrowLeft: 0,
        KeyboardArrowRight: 0,
        KeyboardArrowUp: 2,
        KeyboardBackspace: 0,
        KeyboardCapslock: 0,
        KeyboardHide: 15,
        KeyboardReturn: 2,
        KeyboardTab: 15,
        KeyboardVoice: 7,
        KingBed: 15,
        Kitchen: 15,
        Kitesurfing: 15,
        Label: 15,
        LabelImportant: 2,
        LabelOff: 15,
        Landscape: 15,
        Language: 15,
        Laptop: 15,
        LaptopChromebook: 0,
        LaptopMac: 15,
        LaptopWindows: 7,
        LastPage: 15,
        Launch: 15,
        Layers: 15,
        LayersClear: 15,
        Leaderboard: 15,
        LeakAdd: 15,
        LeakRemove: 15,
        LegendToggle: 15,
        Lens: 15,
        LensBlur: 15,
        LibraryAdd: 15,
        LibraryAddCheck: 2,
        LibraryBooks: 15,
        LibraryMusic: 15,
        Light: 15,
        LightMode: 15,
        Lightbulb: 15,
        LineStyle: 15,
        LineWeight: 15,
        LinearScale: 15,
        Link: 15,
        LinkOff: 15,
        LinkedCamera: 15,
        LinkedIn: 0,
        Liquor: 15,
        List: 15,
        ListAlt: 15,
        LiveHelp: 15,
        LiveTv: 15,
        Living: 15,
        LocalActivity: 7,
        LocalAirport: 15,
        LocalAtm: 15,
        LocalBar: 15,
        LocalCafe: 15,
        LocalCarWash: 15,
        LocalDining: 15,
        LocalDrink: 15,
        LocalFireDepartment: 0,
        LocalFlorist: 15,
        LocalGasStation: 2,
        LocalGroceryStore: 0,
        LocalHospital: 7,
        LocalHotel: 15,
        LocalLaundryService: 0,
        LocalLibrary: 15,
        LocalMall: 15,
        LocalMovies: 15,
        LocalOffer: 15,
        LocalParking: 15,
        LocalPharmacy: 7,
        LocalPhone: 15,
        LocalPizza: 15,
        LocalPlay: 15,
        LocalPolice: 15,
        LocalPostOffice: 2,
        LocalPrintshop: 2,
        LocalSee: 15,
        LocalShipping: 7,
        LocalTaxi: 15,
        LocationCity: 15,
        LocationDisabled: 0,
        LocationOff: 15,
        LocationOn: 15,
        LocationSearching: 0,
        Lock: 15,
        LockClock: 15,
        LockOpen: 15,
        Login: 15,
        Logout: 15,
        Looks: 15,
        Looks3: 15,
        Looks4: 15,
        Looks5: 15,
        Looks6: 15,
        LooksOne: 15,
        LooksTwo: 15,
        Loop: 15,
        Loupe: 15,
        LowPriority: 15,
        Loyalty: 15,
        LteMobiledata: 7,
        LtePlusMobiledata: 0,
        Luggage: 15,
        LunchDining: 15,
        Mail: 15,
        MailOutline: 15,
        Male: 15,
        ManageAccounts: 2,
        ManageSearch: 15,
        Map: 15,
        MapsHomeWork: 15,
        MapsUgc: 15,
        Margin: 15,
        MarkAsUnread: 15,
        MarkChatRead: 15,
        MarkChatUnread: 2,
        MarkEmailRead: 7,
        MarkEmailUnread: 2,
        Markunread: 15,
        MarkunreadMailbox: 0,
        Masks: 15,
        Maximize: 15,
        MediaBluetoothOff: 0,
        MediaBluetoothOn: 0,
        Mediation: 15,
        MedicalServices: 2,
        Medication: 15,
        MeetingRoom: 15,
        Memory: 15,
        Menu: 15,
        MenuBook: 15,
        MenuOpen: 15,
        MergeType: 15,
        Message: 15,
        Mic: 15,
        MicExternalOff: 2,
        MicExternalOn: 7,
        MicNone: 15,
        MicOff: 15,
        Microwave: 15,
        MilitaryTech: 15,
        Minimize: 15,
        MissedVideoCall: 2,
        Mms: 15,
        MobileFriendly: 2,
        MobileOff: 15,
        MobileScreenShare: 0,
        MobiledataOff: 7,
        Mode: 15,
        ModeComment: 15,
        ModeEdit: 15,
        ModeEditOutline: 2,
        ModeNight: 15,
        ModeStandby: 15,
        ModelTraining: 7,
        MonetizationOn: 2,
        Money: 15,
        MoneyOff: 15,
        MoneyOffCsred: 7,
        Monitor: 15,
        MonitorWeight: 7,
        MonochromePhotos: 0,
        Mood: 15,
        MoodBad: 15,
        Moped: 15,
        More: 15,
        MoreHoriz: 15,
        MoreTime: 15,
        MoreVert: 15,
        MotionPhotosAuto: 0,
        MotionPhotosOff: 2,
        Mouse: 15,
        MoveToInbox: 15,
        Movie: 15,
        MovieCreation: 7,
        MovieFilter: 15,
        Moving: 15,
        Mp: 15,
        MultilineChart: 2,
        MultipleStop: 15,
        Museum: 15,
        MusicNote: 15,
        MusicOff: 15,
        MusicVideo: 15,
        MyLocation: 15,
        Nat: 15,
        Nature: 15,
        NaturePeople: 15,
        NavigateBefore: 2,
        NavigateNext: 15,
        Navigation: 15,
        NearMe: 15,
        NearMeDisabled: 2,
        NearbyError: 15,
        NearbyOff: 15,
        NetworkCell: 15,
        NetworkCheck: 15,
        NetworkLocked: 7,
        NetworkWifi: 15,
        NewReleases: 15,
        NextPlan: 15,
        NextWeek: 15,
        Nfc: 15,
        NightShelter: 15,
        Nightlife: 15,
        Nightlight: 15,
        NightlightRound: 2,
        NightsStay: 15,
        NineK: 15,
        NineKPlus: 15,
        NineMp: 15,
        NineteenMp: 15,
        NoAccounts: 15,
        NoBackpack: 15,
        NoCell: 15,
        NoDrinks: 15,
        NoEncryption: 15,
        NoFlash: 15,
        NoFood: 15,
        NoLuggage: 15,
        NoMeals: 15,
        NoMeetingRoom: 7,
        NoPhotography: 7,
        NoSim: 15,
        NoStroller: 15,
        NoTransfer: 15,
        NordicWalking: 7,
        North: 15,
        NorthEast: 15,
        NorthWest: 15,
        NotAccessible: 7,
        NotInterested: 7,
        NotListedLocation: 0,
        NotStarted: 15,
        Note: 15,
        NoteAdd: 15,
        NoteAlt: 15,
        Notes: 15,
        NotificationAdd: 2,
        Notifications: 7,
        NotificationsActive: 0,
        NotificationsNone: 0,
        NotificationsOff: 0,
        NotificationsPaused: 0,
        OfflineBolt: 15,
        OfflinePin: 15,
        OfflineShare: 15,
        OndemandVideo: 7,
        OneK: 15,
        OneKPlus: 15,
        OneKk: 15,
        OnlinePrediction: 0,
        Opacity: 15,
        OpenInBrowser: 7,
        OpenInFull: 15,
        OpenInNew: 15,
        OpenInNewOff: 15,
        OpenWith: 15,
        OtherHouses: 15,
        Outbound: 15,
        Outbox: 15,
        OutdoorGrill: 15,
        Outlet: 15,
        Padding: 15,
        Pages: 15,
        Pageview: 15,
        Paid: 15,
        Palette: 15,
        PanTool: 15,
        Panorama: 15,
        PanoramaFishEye: 2,
        PanoramaHorizontal: 0,
        PanoramaPhotosphere: 0,
        PanoramaVertical: 0,
        PanoramaWideAngle: 0,
        Paragliding: 15,
        Park: 15,
        PartyMode: 15,
        Password: 15,
        Pattern: 15,
        Pause: 15,
        PauseCircle: 15,
        PauseCircleFilled: 0,
        PauseCircleOutline: 0,
        PausePresentation: 0,
        Payment: 15,
        Payments: 15,
        PedalBike: 15,
        Pending: 15,
        PendingActions: 2,
        People: 15,
        PeopleAlt: 15,
        PeopleOutline: 7,
        PermCameraMic: 7,
        PermContactCalendar: 0,
        PermDataSetting: 2,
        PermIdentity: 15,
        PermMedia: 15,
        PermPhoneMsg: 15,
        PermScanWifi: 15,
        Person: 15,
        PersonAdd: 15,
        PersonAddAlt: 15,
        PersonAddAlt1: 7,
        PersonAddDisabled: 0,
        PersonOff: 15,
        PersonOutline: 7,
        PersonPin: 15,
        PersonPinCircle: 2,
        PersonRemove: 15,
        PersonRemoveAlt1: 0,
        PersonSearch: 15,
        PersonalVideo: 7,
        PestControl: 15,
        PestControlRodent: 0,
        Pets: 15,
        Phone: 15,
        PhoneAndroid: 15,
        PhoneCallback: 7,
        PhoneDisabled: 7,
        PhoneEnabled: 15,
        PhoneForwarded: 2,
        PhoneInTalk: 15,
        PhoneIphone: 15,
        PhoneLocked: 15,
        PhoneMissed: 15,
        PhonePaused: 15,
        Phonelink: 15,
        PhonelinkErase: 2,
        PhonelinkLock: 7,
        PhonelinkOff: 15,
        PhonelinkRing: 7,
        PhonelinkSetup: 2,
        Photo: 15,
        PhotoAlbum: 15,
        PhotoCamera: 15,
        PhotoCameraBack: 2,
        PhotoCameraFront: 0,
        PhotoFilter: 15,
        PhotoLibrary: 15,
        PhotoSizeSelectLarge: 0,
        PhotoSizeSelectSmall: 0,
        Piano: 15,
        PianoOff: 15,
        PictureAsPdf: 15,
        PictureInPicture: 0,
        PictureInPictureAlt: 0,
        PieChart: 15,
        PieChartOutline: 2,
        Pin: 15,
        PinDrop: 15,
        Pinterest: 0,
        PivotTableChart: 2,
        Place: 15,
        Plagiarism: 15,
        PlayArrow: 15,
        PlayCircle: 15,
        PlayCircleFilled: 0,
        PlayCircleOutline: 0,
        PlayDisabled: 15,
        PlayForWork: 15,
        PlayLesson: 15,
        PlaylistAdd: 15,
        PlaylistAddCheck: 0,
        PlaylistPlay: 15,
        Plumbing: 15,
        PlusOne: 15,
        Podcasts: 15,
        PointOfSale: 15,
        Policy: 15,
        Poll: 15,
        Pool: 15,
        PortableWifiOff: 2,
        Portrait: 15,
        PostAdd: 15,
        Power: 15,
        PowerInput: 15,
        PowerOff: 15,
        PowerSettingsNew: 0,
        PregnantWoman: 7,
        PresentToAll: 15,
        Preview: 15,
        PriceChange: 15,
        PriceCheck: 15,
        Print: 15,
        PrintDisabled: 7,
        PriorityHigh: 15,
        PrivacyTip: 15,
        Psychology: 15,
        Public: 15,
        PublicOff: 15,
        Publish: 15,
        PublishedWithChanges: 0,
        PushPin: 15,
        QrCode: 15,
        QrCode2: 15,
        QrCodeScanner: 7,
        QueryBuilder: 15,
        QueryStats: 15,
        QuestionAnswer: 2,
        Queue: 15,
        QueueMusic: 15,
        QueuePlayNext: 7,
        Quickreply: 15,
        Quiz: 15,
        RMobiledata: 15,
        Radar: 15,
        Radio: 15,
        RadioButtonChecked: 0,
        RadioButtonUnchecked: 0,
        RailwayAlert: 15,
        RamenDining: 15,
        RateReview: 15,
        RawOff: 15,
        RawOn: 15,
        ReadMore: 15,
        Receipt: 15,
        ReceiptLong: 15,
        RecentActors: 15,
        Recommend: 15,
        RecordVoiceOver: 2,
        Reddit: 0,
        Redeem: 15,
        Redo: 15,
        ReduceCapacity: 2,
        Refresh: 15,
        RememberMe: 15,
        Remove: 15,
        RemoveCircle: 15,
        RemoveCircleOutline: 0,
        RemoveDone: 15,
        RemoveFromQueue: 2,
        RemoveModerator: 2,
        RemoveRedEye: 15,
        RemoveShoppingCart: 0,
        Reorder: 15,
        Repeat: 15,
        RepeatOn: 15,
        RepeatOne: 15,
        RepeatOneOn: 15,
        Replay: 15,
        Replay10: 15,
        Replay30: 15,
        Replay5: 15,
        ReplayCircleFilled: 0,
        Reply: 15,
        ReplyAll: 15,
        Report: 15,
        ReportGmailerrorred: 0,
        ReportOff: 15,
        ReportProblem: 7,
        RequestPage: 15,
        RequestQuote: 15,
        ResetTv: 15,
        RestartAlt: 15,
        Restaurant: 15,
        RestaurantMenu: 2,
        Restore: 15,
        RestoreFromTrash: 0,
        RestorePage: 15,
        Reviews: 15,
        RiceBowl: 15,
        RingVolume: 15,
        Roofing: 15,
        Room: 15,
        RoomPreferences: 2,
        RoomService: 15,
        Rotate90DegreesCcw: 0,
        RotateLeft: 15,
        RotateRight: 15,
        Router: 15,
        Rowing: 15,
        RssFeed: 15,
        Rsvp: 15,
        Rtt: 15,
        Rule: 15,
        RuleFolder: 15,
        RunCircle: 15,
        RunningWithErrors: 0,
        RvHookup: 15,
        SafetyDivider: 7,
        Sailing: 15,
        Sanitizer: 15,
        Satellite: 15,
        Save: 15,
        SaveAlt: 15,
        SavedSearch: 15,
        Savings: 15,
        Scanner: 15,
        ScatterPlot: 15,
        Schedule: 15,
        ScheduleSend: 15,
        Schema: 15,
        School: 15,
        Science: 15,
        Score: 15,
        ScreenLockLandscape: 0,
        ScreenLockPortrait: 0,
        ScreenLockRotation: 0,
        ScreenRotation: 2,
        ScreenSearchDesktop: 0,
        ScreenShare: 15,
        Screenshot: 15,
        Sd: 15,
        SdCard: 15,
        SdCardAlert: 15,
        SdStorage: 15,
        Search: 15,
        SearchOff: 15,
        Security: 15,
        SecurityUpdate: 2,
        SecurityUpdateGood: 0,
        Segment: 15,
        SelectAll: 15,
        SelfImprovement: 2,
        Sell: 15,
        Send: 15,
        SendAndArchive: 2,
        SendToMobile: 15,
        SensorDoor: 15,
        SensorWindow: 15,
        Sensors: 15,
        SensorsOff: 15,
        SentimentNeutral: 0,
        SentimentSatisfied: 0,
        SetMeal: 15,
        Settings: 15,
        SettingsApplications: 0,
        SettingsBluetooth: 0,
        SettingsBrightness: 0,
        SettingsCell: 15,
        SettingsEthernet: 0,
        SettingsInputAntenna: 0,
        SettingsInputHdmi: 0,
        SettingsInputSvideo: 0,
        SettingsOverscan: 0,
        SettingsPhone: 7,
        SettingsPower: 7,
        SettingsRemote: 2,
        SettingsSuggest: 2,
        SettingsVoice: 7,
        SevenK: 15,
        SevenKPlus: 15,
        SevenMp: 15,
        SeventeenMp: 15,
        Share: 15,
        ShareLocation: 7,
        Shield: 15,
        Shop: 15,
        Shop2: 15,
        ShopTwo: 15,
        ShoppingBag: 15,
        ShoppingBasket: 2,
        ShoppingCart: 15,
        ShortText: 15,
        Shortcut: 15,
        ShowChart: 15,
        Shower: 15,
        Shuffle: 15,
        ShuffleOn: 15,
        ShutterSpeed: 15,
        Sick: 15,
        SignalCellular0Bar: 0,
        SignalCellular1Bar: 0,
        SignalCellular2Bar: 0,
        SignalCellular3Bar: 0,
        SignalCellular4Bar: 0,
        SignalCellularAlt: 0,
        SignalCellularNoSim: 0,
        SignalCellularNodata: 0,
        SignalCellularNull: 0,
        SignalCellularOff: 0,
        SignalWifi0Bar: 2,
        SignalWifi1Bar: 2,
        SignalWifi1BarLock: 0,
        SignalWifi2Bar: 2,
        SignalWifi2BarLock: 0,
        SignalWifi3Bar: 2,
        SignalWifi3BarLock: 0,
        SignalWifi4Bar: 2,
        SignalWifi4BarLock: 0,
        SignalWifiBad: 7,
        SignalWifiOff: 7,
        SimCard: 15,
        SimCardAlert: 15,
        SimCardDownload: 2,
        SingleBed: 15,
        Sip: 15,
        SixK: 15,
        SixKPlus: 15,
        SixMp: 15,
        SixteenMp: 15,
        SixtyFps: 15,
        SixtyFpsSelect: 2,
        Skateboarding: 7,
        SkipNext: 15,
        SkipPrevious: 15,
        Sledding: 15,
        Slideshow: 15,
        SlowMotionVideo: 2,
        SmartButton: 15,
        SmartDisplay: 15,
        SmartScreen: 15,
        SmartToy: 15,
        Smartphone: 15,
        SmokeFree: 15,
        SmokingRooms: 15,
        Sms: 15,
        SmsFailed: 15,
        SnippetFolder: 7,
        Snooze: 15,
        Snowboarding: 15,
        Snowmobile: 15,
        Snowshoeing: 15,
        Soap: 15,
        SocialDistance: 2,
        Sort: 15,
        SortByAlpha: 15,
        Source: 15,
        South: 15,
        SouthEast: 15,
        SouthWest: 15,
        Spa: 15,
        SpaceBar: 15,
        Speaker: 15,
        SpeakerGroup: 15,
        SpeakerNotes: 15,
        SpeakerNotesOff: 2,
        SpeakerPhone: 15,
        Speed: 15,
        Spellcheck: 15,
        Splitscreen: 15,
        Sports: 15,
        SportsBar: 15,
        SportsBaseball: 2,
        SportsBasketball: 0,
        SportsCricket: 7,
        SportsEsports: 7,
        SportsFootball: 2,
        SportsGolf: 15,
        SportsHandball: 2,
        SportsHockey: 15,
        SportsKabaddi: 7,
        SportsMma: 15,
        SportsMotorsports: 0,
        SportsRugby: 15,
        SportsScore: 15,
        SportsSoccer: 15,
        SportsTennis: 15,
        SportsVolleyball: 0,
        SquareFoot: 15,
        StackedBarChart: 2,
        StackedLineChart: 0,
        Stairs: 15,
        Star: 15,
        StarBorder: 15,
        StarBorderPurple500: 0,
        StarHalf: 15,
        StarOutline: 15,
        StarPurple500: 7,
        StarRate: 15,
        Stars: 15,
        StayCurrentLandscape: 0,
        StayCurrentPortrait: 0,
        StayPrimaryLandscape: 0,
        StayPrimaryPortrait: 0,
        StickyNote2: 15,
        Stop: 15,
        StopCircle: 15,
        StopScreenShare: 2,
        Storage: 15,
        Store: 15,
        StoreMallDirectory: 0,
        Storefront: 15,
        Storm: 15,
        Straighten: 15,
        Stream: 15,
        Streetview: 15,
        StrikethroughS: 2,
        Stroller: 15,
        Style: 15,
        Subject: 15,
        Subscript: 15,
        Subscriptions: 7,
        Subtitles: 15,
        SubtitlesOff: 15,
        Subway: 15,
        Summarize: 15,
        Superscript: 15,
        SupervisedUserCircle: 0,
        SupervisorAccount: 0,
        Support: 15,
        SupportAgent: 15,
        Surfing: 15,
        SurroundSound: 7,
        SwapCalls: 15,
        SwapHoriz: 15,
        SwapHorizontalCircle: 0,
        SwapVert: 15,
        SwapVerticalCircle: 0,
        Swipe: 15,
        SwitchAccount: 7,
        SwitchCamera: 15,
        SwitchLeft: 15,
        SwitchRight: 15,
        SwitchVideo: 15,
        Sync: 15,
        SyncAlt: 15,
        SyncDisabled: 15,
        SyncProblem: 15,
        SystemSecurityUpdate: 0,
        SystemUpdate: 15,
        SystemUpdateAlt: 2,
        Tab: 15,
        TabUnselected: 7,
        TableChart: 15,
        TableRows: 15,
        TableView: 15,
        Tablet: 15,
        TabletAndroid: 7,
        TabletMac: 15,
        Tag: 15,
        TagFaces: 15,
        TakeoutDining: 7,
        TapAndPlay: 15,
        Tapas: 15,
        Task: 15,
        TaskAlt: 15,
        TaxiAlert: 15,
        Telegram: 0,
        TenMp: 15,
        Terrain: 15,
        TextFields: 15,
        TextFormat: 15,
        TextRotateUp: 15,
        TextRotateVertical: 0,
        TextRotationAngleup: 0,
        TextRotationDown: 0,
        TextRotationNone: 0,
        TextSnippet: 15,
        Textsms: 15,
        Texture: 15,
        TheaterComedy: 7,
        Theaters: 15,
        Thermostat: 15,
        ThermostatAuto: 2,
        ThirteenMp: 15,
        ThirtyFps: 15,
        ThirtyFpsSelect: 2,
        ThreeDRotation: 2,
        ThreeGMobiledata: 0,
        ThreeK: 15,
        ThreeKPlus: 15,
        ThreeMp: 15,
        ThreeP: 15,
        ThreeSixty: 15,
        ThumbDown: 15,
        ThumbDownAlt: 15,
        ThumbDownOffAlt: 2,
        ThumbUp: 15,
        ThumbUpAlt: 15,
        ThumbUpOffAlt: 7,
        ThumbsUpDown: 15,
        TimeToLeave: 15,
        Timelapse: 15,
        Timeline: 15,
        Timer: 15,
        Timer10: 15,
        Timer10Select: 7,
        Timer3: 15,
        Timer3Select: 15,
        TimerOff: 15,
        TimesOneMobiledata: 0,
        Title: 15,
        Toc: 15,
        Today: 15,
        ToggleOff: 15,
        ToggleOn: 15,
        Toll: 15,
        Tonality: 15,
        Topic: 15,
        TouchApp: 15,
        Tour: 15,
        Toys: 15,
        TrackChanges: 15,
        Traffic: 15,
        Train: 15,
        Tram: 15,
        Transform: 15,
        Transgender: 15,
        TransitEnterexit: 0,
        Translate: 15,
        TravelExplore: 7,
        TrendingDown: 15,
        TrendingFlat: 15,
        TrendingUp: 15,
        TripOrigin: 15,
        Try: 15,
        Tty: 15,
        Tune: 15,
        Tungsten: 15,
        TurnedIn: 15,
        TurnedInNot: 15,
        Tv: 15,
        TvOff: 15,
        TwelveMp: 15,
        TwentyFourMp: 15,
        TwentyOneMp: 15,
        TwentyThreeMp: 7,
        TwentyTwoMp: 15,
        TwentyZeroMp: 15,
        Twitter: 0,
        TwoK: 15,
        TwoKPlus: 15,
        TwoMp: 15,
        TwoWheeler: 15,
        Umbrella: 15,
        Unarchive: 15,
        Undo: 15,
        UnfoldLess: 15,
        UnfoldMore: 15,
        Unpublished: 15,
        Unsubscribe: 15,
        Upcoming: 15,
        Update: 15,
        UpdateDisabled: 2,
        Upgrade: 15,
        Upload: 15,
        UploadFile: 15,
        Usb: 15,
        UsbOff: 15,
        Verified: 15,
        VerifiedUser: 15,
        VerticalAlignBottom: 0,
        VerticalAlignCenter: 0,
        VerticalAlignTop: 0,
        VerticalSplit: 7,
        Vibration: 15,
        VideoCall: 15,
        VideoCameraBack: 2,
        VideoCameraFront: 0,
        VideoLabel: 15,
        VideoLibrary: 15,
        VideoSettings: 7,
        VideoStable: 15,
        Videocam: 15,
        VideocamOff: 15,
        VideogameAsset: 2,
        VideogameAssetOff: 0,
        ViewAgenda: 15,
        ViewArray: 15,
        ViewCarousel: 15,
        ViewColumn: 15,
        ViewComfy: 15,
        ViewCompact: 15,
        ViewDay: 15,
        ViewHeadline: 15,
        ViewInAr: 15,
        ViewList: 15,
        ViewModule: 15,
        ViewQuilt: 15,
        ViewSidebar: 15,
        ViewStream: 15,
        ViewWeek: 15,
        Vignette: 15,
        Villa: 15,
        Visibility: 15,
        VisibilityOff: 7,
        VoiceChat: 15,
        VoiceOverOff: 15,
        Voicemail: 15,
        VolumeDown: 15,
        VolumeMute: 15,
        VolumeOff: 15,
        VolumeUp: 15,
        VolunteerActivism: 0,
        VpnKey: 15,
        VpnLock: 15,
        Vrpano: 15,
        Wallpaper: 15,
        Warning: 15,
        WarningAmber: 15,
        Wash: 15,
        Watch: 15,
        WatchLater: 15,
        Water: 15,
        WaterDamage: 15,
        WaterfallChart: 2,
        Waves: 15,
        WbAuto: 15,
        WbCloudy: 15,
        WbIncandescent: 2,
        WbIridescent: 15,
        WbShade: 15,
        WbSunny: 15,
        WbTwilight: 15,
        Wc: 15,
        Web: 15,
        WebAsset: 15,
        WebAssetOff: 15,
        Weekend: 15,
        West: 15,
        WhatsApp: 0,
        Whatshot: 15,
        WheelchairPickup: 0,
        WhereToVote: 15,
        Widgets: 15,
        Wifi: 15,
        WifiCalling: 15,
        WifiCalling3: 15,
        WifiLock: 15,
        WifiOff: 15,
        WifiProtectedSetup: 0,
        WifiTethering: 7,
        WifiTetheringOff: 0,
        Window: 15,
        WineBar: 15,
        Work: 15,
        WorkOff: 15,
        WorkOutline: 15,
        Workspaces: 15,
        WrapText: 15,
        WrongLocation: 7,
        Wysiwyg: 15,
        Yard: 15,
        YouTube: 0,
        YoutubeSearchedFor: 0,
        ZoomIn: 15,
        ZoomOut: 15,
        ZoomOutMap: 15,
      }),
      (bi = Object.keys(yi)),
      (xi = {
        15: [`Filled`, `TwoTone`, `Sharp`, `Rounded`, `Outlined`],
        7: [`Filled`, `TwoTone`, `Sharp`, `Rounded`],
        2: [`Filled`, `Sharp`],
      }),
      (Si = Object.keys(xi).map((e) => `iconStyle${e}`)),
      (Ci = bi.reduce((e, t) => ((e[t.toLowerCase()] = t), e), {})),
      (gi.displayName = `Material`),
      (gi.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `Home`,
        iconSearch: `Home`,
        color: `#66F`,
        selectByList: !0,
        weight: `Filled`,
        mirrored: !1,
      }),
      Te(gi, {
        selectByList: {
          type: H.Boolean,
          title: `Select`,
          enabledTitle: `List`,
          disabledTitle: `Search`,
          defaultValue: gi.defaultProps.selectByList,
        },
        iconSelection: {
          type: H.Enum,
          options: bi,
          defaultValue: gi.defaultProps.iconSelection,
          title: `Name`,
          hidden: ({ selectByList: e }) => !e,
          description: `Find every icon name on the [Material site](https://fonts.google.com/icons)`,
        },
        iconSearch: {
          type: H.String,
          title: `Name`,
          placeholder: `Menu, Wifi, Box…`,
          hidden: ({ selectByList: e }) => e,
        },
        mirrored: {
          type: H.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: gi.defaultProps.mirrored,
        },
        color: { type: H.Color, title: `Color`, defaultValue: gi.defaultProps.color },
        ...Object.keys(xi).reduce(
          (e, t) => (
            (e[`iconStyle${t}`] = {
              type: H.Enum,
              title: `Style`,
              defaultValue: `Filled`,
              options: xi[t],
              hidden: (e) => _i(e, t),
            }),
            e
          ),
          {}
        ),
        ...pi,
      }));
  });
function Ti(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li = e(() => {
    (b(),
      z(),
      j(),
      p(),
      wi(),
      (Ei = R(gi)),
      (Di = [`uaqA2TV6Y`, `twg1Wg3Li`]),
      (Oi = `framer-XbeQh`),
      (ki = { twg1Wg3Li: `framer-v-1obohjs`, uaqA2TV6Y: `framer-v-1mvqzgs` }),
      (Ai = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ji = ({ value: e, children: t }) => {
        let n = _(D),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(D.Provider, { value: i, children: t });
      }),
      (Mi = { Pause: `twg1Wg3Li`, Play: `uaqA2TV6Y` }),
      (Ni = E.create(o)),
      (Pi = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        Dn_9rw388: e ?? i.Dn_9rw388,
        variant: Mi[i.variant] ?? i.variant ?? `uaqA2TV6Y`,
      })),
      (Fi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ii = me(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = ge();
          Oe();
          let { style: s, className: c, layoutId: l, variant: u, Dn_9rw388: d, ...f } = Pi(e),
            {
              baseVariant: p,
              classNames: m,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: y,
              isLoading: b,
              setGestureState: x,
              setVariant: S,
              variants: C,
            } = Le({
              cycleOrder: Di,
              defaultVariant: `uaqA2TV6Y`,
              ref: r,
              variant: u,
              variantClassNames: ki,
            }),
            w = Fi(e, C),
            { activeVariantCallback: T, delay: te } = ye(p),
            D = T(async (...e) => {
              if ((x({ isPressed: !1 }), d && (await d(...e)) === !1)) return !1;
            }),
            ne = I(Oi);
          return h(A, {
            id: l ?? i,
            children: h(Ni, {
              animate: C,
              initial: !1,
              children: h(ji, {
                value: Ai,
                children: h(E.div, {
                  ...f,
                  ..._,
                  className: I(ne, `framer-1mvqzgs`, c, m),
                  "data-framer-name": `Play`,
                  "data-highlight": !0,
                  layoutDependency: w,
                  layoutId: `uaqA2TV6Y`,
                  onTap: D,
                  ref: r,
                  style: {
                    backdropFilter: `blur(25px)`,
                    backgroundColor: `var(--token-d187a35b-c23c-4f3a-a992-78666c72eb82, rgba(255, 255, 255, 0.1))`,
                    borderBottomLeftRadius: 1e3,
                    borderBottomRightRadius: 1e3,
                    borderTopLeftRadius: 1e3,
                    borderTopRightRadius: 1e3,
                    WebkitBackdropFilter: `blur(25px)`,
                    ...s,
                  },
                  ...Ti({ twg1Wg3Li: { "data-framer-name": `Pause` } }, p, y),
                  children: h(V, {
                    children: h(F, {
                      className: `framer-qz9t2-container`,
                      "data-framer-name": `Icon`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: w,
                      layoutId: `GEvFPepWX-container`,
                      name: `Icon`,
                      nodeId: `GEvFPepWX`,
                      rendersWithMotion: !0,
                      scopeId: `KtINauuD0`,
                      children: h(gi, {
                        color: `rgb(12, 14, 18)`,
                        height: `100%`,
                        iconSearch: `play arrow`,
                        iconSelection: `Home`,
                        iconStyle15: `Filled`,
                        iconStyle2: `Filled`,
                        iconStyle7: `Filled`,
                        id: `GEvFPepWX`,
                        layoutId: `GEvFPepWX`,
                        mirrored: !1,
                        name: `Icon`,
                        selectByList: !1,
                        style: { height: `100%`, width: `100%` },
                        width: `100%`,
                        ...Ti({ twg1Wg3Li: { iconSearch: `Pause` } }, p, y),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-XbeQh.framer-ogqlvd, .framer-XbeQh .framer-ogqlvd { display: block; }`,
          `.framer-XbeQh.framer-1mvqzgs { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; overflow: hidden; padding: 5px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-XbeQh .framer-qz9t2-container { flex: none; height: 20px; position: relative; width: 21px; }`,
        ],
        `framer-XbeQh`
      )),
      (Ii.displayName = `Video button`),
      (Ii.defaultProps = { height: 29.5, width: 30.5 }),
      Te(Ii, {
        variant: {
          options: [`uaqA2TV6Y`, `twg1Wg3Li`],
          optionTitles: [`Play`, `Pause`],
          title: `Variant`,
          type: H.Enum,
        },
        Dn_9rw388: { title: `Click`, type: H.EventHandler },
      }),
      M(Ii, [{ explicitInter: !0, fonts: [] }, ...Ei], { supportsExplicitInterCodegen: !0 }));
  });
function Ri(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea = e(() => {
    (b(),
      z(),
      j(),
      p(),
      ei(),
      Li(),
      (zi = R(Ii)),
      (Bi = R(Wr)),
      (Vi = fe(Wr)),
      (Hi = [`WgKJTcEzx`, `k66DyE92R`]),
      (Ui = `framer-yj5s8`),
      (Wi = { k66DyE92R: `framer-v-18hktry`, WgKJTcEzx: `framer-v-yvmeng` }),
      (Gi = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (Ki = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (qi = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ji = ({ value: e, children: t }) => {
        let n = _(D),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(D.Provider, { value: i, children: t });
      }),
      (Yi = { "Video Pause": `k66DyE92R`, "Video Play": `WgKJTcEzx` }),
      (Xi = E.create(o)),
      (Zi = ({ file: e, height: t, id: n, radius: r, width: i, ...a }) => ({
        ...a,
        fgsXYkf45: r ?? a.fgsXYkf45 ?? `10px`,
        QbZ8SSY2x: e ?? a.QbZ8SSY2x ?? `../../assets/misc/4kQLzTWFcGMi593GgWjIobIM5Mw.mp4`,
        variant: Yi[a.variant] ?? a.variant ?? `WgKJTcEzx`,
      })),
      (Qi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($i = me(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = ge(),
            s = Oe(),
            {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              fgsXYkf45: f,
              QbZ8SSY2x: p,
              ...m
            } = Zi(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: te,
            } = Le({
              cycleOrder: Hi,
              defaultVariant: `WgKJTcEzx`,
              ref: r,
              variant: d,
              variantClassNames: Wi,
            }),
            D = Qi(e, te),
            { activeVariantCallback: ne, delay: O } = ye(g),
            k = ne(async (...e) => {
              T(`k66DyE92R`);
            }),
            re = ne(async (...e) => {
              T(`WgKJTcEzx`);
            }),
            ie = I(Ui);
          return h(A, {
            id: u ?? i,
            children: h(Xi, {
              animate: te,
              initial: !1,
              children: h(Ji, {
                value: Ki,
                children: y(E.div, {
                  ...m,
                  ...x,
                  className: I(ie, `framer-yvmeng`, l, _),
                  "data-framer-name": `Video Play`,
                  layoutDependency: D,
                  layoutId: `WgKJTcEzx`,
                  ref: r,
                  style: {
                    borderBottomLeftRadius: Gi(f, 3),
                    borderBottomRightRadius: Gi(f, 2),
                    borderTopLeftRadius: Gi(f, 0),
                    borderTopRightRadius: Gi(f, 1),
                    ...c,
                  },
                  ...Ri({ k66DyE92R: { "data-framer-name": `Video Pause` } }, g, S),
                  children: [
                    h(V, {
                      height: 29,
                      y: (s?.y || 0) + (s?.height || 600) - 41,
                      children: h(F, {
                        className: `framer-1d9jt91-container`,
                        "data-framer-name": `Video Button`,
                        layoutDependency: D,
                        layoutId: `Jhp6xSJhG-container`,
                        name: `Video Button`,
                        nodeId: `Jhp6xSJhG`,
                        rendersWithMotion: !0,
                        scopeId: `lsX5OcQrc`,
                        children: h(Ii, {
                          Dn_9rw388: k,
                          height: `100%`,
                          id: `Jhp6xSJhG`,
                          layoutId: `Jhp6xSJhG`,
                          name: `Video Button`,
                          variant: qi(`twg1Wg3Li`),
                          width: `100%`,
                          ...Ri({ k66DyE92R: { Dn_9rw388: re, variant: qi(`uaqA2TV6Y`) } }, g, S),
                        }),
                      }),
                    }),
                    h(V, {
                      children: h(F, {
                        className: `framer-xreo94-container`,
                        "data-framer-name": `Video`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: D,
                        layoutId: `TGlbYJNK3-container`,
                        name: `Video`,
                        nodeId: `TGlbYJNK3`,
                        rendersWithMotion: !0,
                        scopeId: `lsX5OcQrc`,
                        children: h(Wr, {
                          backgroundColor: `rgba(0, 0, 0, 0)`,
                          borderRadius: 0,
                          bottomLeftRadius: 0,
                          bottomRightRadius: 0,
                          controls: !1,
                          height: `100%`,
                          id: `TGlbYJNK3`,
                          isMixedBorderRadius: !1,
                          layoutId: `TGlbYJNK3`,
                          loop: !0,
                          muted: !0,
                          name: `Video`,
                          objectFit: `cover`,
                          playing: !0,
                          posterEnabled: !0,
                          srcFile: p,
                          srcType: `Upload`,
                          srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                          startTime: 0,
                          style: { height: `100%`, width: `100%` },
                          topLeftRadius: 0,
                          topRightRadius: 0,
                          volume: 25,
                          width: `100%`,
                          ...Ri({ k66DyE92R: { playing: !1 } }, g, S),
                        }),
                      }),
                    }),
                    h(E.div, {
                      className: `framer-v4f04`,
                      "data-framer-name": `Cover`,
                      layoutDependency: D,
                      layoutId: `Ad4UqQO2u`,
                      style: {
                        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(12, 14, 18, 0.6) 100%)`,
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-yj5s8.framer-1134rxy, .framer-yj5s8 .framer-1134rxy { display: block; }`,
          `.framer-yj5s8.framer-yvmeng { height: 600px; overflow: hidden; position: relative; width: 360px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-yj5s8 .framer-1d9jt91-container { bottom: 12px; flex: none; height: auto; position: absolute; right: 12px; width: auto; z-index: 3; }`,
          `.framer-yj5s8 .framer-xreo94-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
          `.framer-yj5s8 .framer-v4f04 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
        ],
        `framer-yj5s8`
      )),
      ($i.displayName = `Video`),
      ($i.defaultProps = { height: 600, width: 360 }),
      Te($i, {
        variant: {
          options: [`WgKJTcEzx`, `k66DyE92R`],
          optionTitles: [`Video Play`, `Video Pause`],
          title: `Variant`,
          type: H.Enum,
        },
        fgsXYkf45: { defaultValue: `10px`, title: `Radius`, type: H.BorderRadius },
        QbZ8SSY2x: Vi?.srcFile && {
          ...Vi.srcFile,
          __defaultAssetReference: `data:framer/asset-reference,4kQLzTWFcGMi593GgWjIobIM5Mw.mp4?originalFilename=2126800_Man_Business_1280x720.mp4`,
          description: void 0,
          hidden: void 0,
          title: `File`,
        },
        onQbZ8SSY2xChange: { changes: `QbZ8SSY2x`, type: H.ChangeHandler },
      }),
      M($i, [{ explicitInter: !0, fonts: [] }, ...zi, ...Bi], { supportsExplicitInterCodegen: !0 }),
      ($i.loader = { load: (e, t) => (t.locale, Promise.allSettled([P(Ii, {}, t)])) }));
  });
function ta(e) {
  let {
    curveColor: t,
    topLeft: n,
    topRight: r,
    bottomLeft: i,
    bottomRight: a,
    topLeftSize: o,
    topRightSize: s,
    bottomLeftSize: c,
    bottomRightSize: l,
    style: u,
  } = e;
  return y(`div`, {
    style: {
      ...u,
      position: `relative`,
      width: `100%`,
      height: `100%`,
      overflow: `hidden`,
      pointerEvents: `none`,
    },
    children: [
      n &&
        h(`svg`, {
          style: {
            position: `absolute`,
            top: 0,
            left: 0,
            width: o,
            height: o,
            pointerEvents: `none`,
          },
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          children: h(`path`, { d: `M0 0L0 20C0 8.95431 8.95431 0 20 0L0 0Z`, fill: t }),
        }),
      r &&
        h(`svg`, {
          style: {
            position: `absolute`,
            top: 0,
            right: 0,
            width: s,
            height: s,
            pointerEvents: `none`,
            transform: `scaleX(-1)`,
          },
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          children: h(`path`, { d: `M0 0L0 20C0 8.95431 8.95431 0 20 0L0 0Z`, fill: t }),
        }),
      i &&
        h(`svg`, {
          style: {
            position: `absolute`,
            bottom: 0,
            left: 0,
            width: c,
            height: c,
            pointerEvents: `none`,
            transform: `scaleY(-1)`,
          },
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          children: h(`path`, { d: `M0 0L0 20C0 8.95431 8.95431 0 20 0L0 0Z`, fill: t }),
        }),
      a &&
        h(`svg`, {
          style: {
            position: `absolute`,
            bottom: 0,
            right: 0,
            width: l,
            height: l,
            pointerEvents: `none`,
            transform: `scale(-1, -1)`,
          },
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          children: h(`path`, { d: `M0 0L0 20C0 8.95431 8.95431 0 20 0L0 0Z`, fill: t }),
        }),
    ],
  });
}
var na = e(() => {
    (b(),
      z(),
      Te(ta, {
        curveColor: { type: H.Color, title: `Curve Color`, defaultValue: `#FFFFFF` },
        topLeft: {
          type: H.Boolean,
          title: `Top Left`,
          defaultValue: !0,
          enabledTitle: `On`,
          disabledTitle: `Off`,
        },
        topLeftSize: {
          type: H.Number,
          title: `Top Left Size`,
          defaultValue: 80,
          min: 4,
          max: 300,
          step: 5,
          unit: `px`,
          hidden: (e) => !e.topLeft,
        },
        topRight: {
          type: H.Boolean,
          title: `Top Right`,
          defaultValue: !1,
          enabledTitle: `On`,
          disabledTitle: `Off`,
        },
        topRightSize: {
          type: H.Number,
          title: `Top Right Size`,
          defaultValue: 80,
          min: 4,
          max: 300,
          step: 5,
          unit: `px`,
          hidden: (e) => !e.topRight,
        },
        bottomLeft: {
          type: H.Boolean,
          title: `Bottom Left`,
          defaultValue: !1,
          enabledTitle: `On`,
          disabledTitle: `Off`,
        },
        bottomLeftSize: {
          type: H.Number,
          title: `Bottom Left Size`,
          defaultValue: 80,
          min: 4,
          max: 300,
          step: 5,
          unit: `px`,
          hidden: (e) => !e.bottomLeft,
        },
        bottomRight: {
          type: H.Boolean,
          title: `Bottom Right`,
          defaultValue: !0,
          enabledTitle: `On`,
          disabledTitle: `Off`,
        },
        bottomRightSize: {
          type: H.Number,
          title: `Bottom Right Size`,
          defaultValue: 80,
          min: 4,
          max: 300,
          step: 5,
          unit: `px`,
          hidden: (e) => !e.bottomRight,
        },
      }));
  }),
  ra,
  ia,
  aa,
  oa,
  sa = e(() => {
    ((aa = (e) => (
      ra ||
        ((ra = new Map([
          [
            `bold`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z`,
              })
            ),
          ],
          [
            `duotone`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z`,
                opacity: `0.2`,
              }),
              e.createElement(`path`, {
                d: `M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z`,
              })
            ),
          ],
          [
            `fill`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z`,
              })
            ),
          ],
          [
            `light`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z`,
              })
            ),
          ],
          [
            `regular`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z`,
              })
            ),
          ],
          [
            `thin`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z`,
              })
            ),
          ],
        ])),
        (ia = e.forwardRef((t, n) => e.createElement(`g`, { ref: n, ...t }, ra.get(t.weight))))),
      ia
    )),
      (oa = aa));
  }),
  ca = e(() => {
    (sa(), sa());
  });
function la(e) {
  let {
      color: t,
      selectByList: n,
      iconSearch: r,
      iconSelection: a,
      onClick: o,
      onMouseDown: c,
      onMouseUp: l,
      onMouseEnter: d,
      onMouseLeave: f,
      weight: p,
      mirrored: m,
    } = e,
    g = v(!1),
    _ = fi(ua, n, r, a, pa),
    [y, b] = s(_ === `Home` ? oa(i) : null);
  async function x() {
    try {
      let e = await import(`${da}${_}.js@0.0.57`);
      g.current && b(e.default(i));
    } catch {
      g.current && b(null);
    }
  }
  u(
    () => (
      (g.current = !0),
      x(),
      () => {
        g.current = !1;
      }
    ),
    [_]
  );
  let S = se.current() === se.canvas ? h(ri, {}) : null;
  return h(E.div, {
    style: { display: `contents` },
    onClick: o,
    onMouseEnter: d,
    onMouseLeave: f,
    onMouseDown: c,
    onMouseUp: l,
    children: y
      ? h(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          viewBox: `0 0 256 256`,
          style: {
            userSelect: `none`,
            width: `100%`,
            height: `100%`,
            display: `inline-block`,
            fill: t,
            color: t,
            flexShrink: 0,
            transform: m ? `scale(-1, 1)` : void 0,
          },
          focusable: `false`,
          color: t,
          children: h(y, { color: t, weight: p }),
        })
      : S,
  });
}
var ua,
  da,
  fa,
  pa,
  ma = e(() => {
    (b(),
      p(),
      z(),
      j(),
      ai(),
      ca(),
      hi(),
      (ua =
        `Acorn.AddressBook.AddressBookTabs.AirTrafficControl.Airplane.AirplaneInFlight.AirplaneLanding.AirplaneTakeoff.AirplaneTaxiing.AirplaneTilt.Airplay.Alarm.Alien.AlignBottom.AlignBottomSimple.AlignCenterVertical.AlignLeft.AlignLeftSimple.AlignRight.AlignRightSimple.AlignTop.AlignTopSimple.AmazonLogo.Ambulance.Anchor.AnchorSimple.AndroidLogo.Angle.AngularLogo.Aperture.AppStoreLogo.AppWindow.AppleLogo.ApplePodcastsLogo.ApproximateEquals.Archive.ArchiveBox.ArchiveTray.Armchair.ArrowArcLeft.ArrowArcRight.ArrowBendDownLeft.ArrowBendDownRight.ArrowBendLeftDown.ArrowBendLeftUp.ArrowBendRightDown.ArrowBendRightUp.ArrowBendUpLeft.ArrowBendUpRight.ArrowCircleDown.ArrowCircleDownLeft.ArrowCircleDownRight.ArrowCircleLeft.ArrowCircleRight.ArrowCircleUp.ArrowCircleUpLeft.ArrowCircleUpRight.ArrowClockwise.ArrowDown.ArrowDownLeft.ArrowDownRight.ArrowElbowDownLeft.ArrowElbowDownRight.ArrowElbowLeft.ArrowElbowLeftDown.ArrowElbowLeftUp.ArrowElbowRight.ArrowElbowRightDown.ArrowElbowRightUp.ArrowElbowUpLeft.ArrowElbowUpRight.ArrowFatDown.ArrowFatLeft.ArrowFatLineDown.ArrowFatLineLeft.ArrowFatLineRight.ArrowFatLineUp.ArrowFatLinesDown.ArrowFatLinesLeft.ArrowFatLinesRight.ArrowFatLinesUp.ArrowFatRight.ArrowFatUp.ArrowLeft.ArrowLineDown.ArrowLineDownLeft.ArrowLineDownRight.ArrowLineLeft.ArrowLineRight.ArrowLineUp.ArrowLineUpLeft.ArrowLineUpRight.ArrowRight.ArrowSquareDown.ArrowSquareDownLeft.ArrowSquareDownRight.ArrowSquareIn.ArrowSquareLeft.ArrowSquareOut.ArrowSquareRight.ArrowSquareUp.ArrowSquareUpLeft.ArrowSquareUpRight.ArrowUDownLeft.ArrowUDownRight.ArrowULeftDown.ArrowULeftUp.ArrowURightDown.ArrowURightUp.ArrowUUpLeft.ArrowUUpRight.ArrowUp.ArrowUpLeft.ArrowUpRight.ArrowsClockwise.ArrowsDownUp.ArrowsHorizontal.ArrowsIn.ArrowsInCardinal.ArrowsInLineVertical.ArrowsInSimple.ArrowsLeftRight.ArrowsMerge.ArrowsOut.ArrowsOutCardinal.ArrowsOutSimple.ArrowsSplit.ArrowsVertical.Article.ArticleMedium.ArticleNyTimes.Asclepius.Asterisk.AsteriskSimple.At.Atom.Avocado.Axe.Baby.BabyCarriage.Backpack.Backspace.Bag.BagSimple.Balloon.Bandaids.Bank.Barbell.Barcode.Barn.Barricade.Baseball.BaseballCap.BaseballHelmet.Basket.Basketball.Bathtub.BatteryCharging.BatteryEmpty.BatteryFull.BatteryHigh.BatteryLow.BatteryMedium.BatteryPlus.BatteryPlusVertical.BatteryVerticalEmpty.BatteryVerticalFull.BatteryVerticalHigh.BatteryVerticalLow.BatteryWarning.BeachBall.Beanie.Bed.BeerBottle.BeerStein.BehanceLogo.Bell.BellRinging.BellSimple.BellSimpleRinging.BellSimpleSlash.BellSimpleZ.BellSlash.BellZ.Belt.BezierCurve.Bicycle.Binary.Binoculars.Biohazard.Bird.Blueprint.Bluetooth.BluetoothConnected.BluetoothSlash.BluetoothX.Boat.Bomb.Bone.Book.BookBookmark.BookOpen.BookOpenText.BookOpenUser.BookUser.Bookmark.BookmarkSimple.Bookmarks.BookmarksSimple.Books.Boot.Boules.BoundingBox.BowlFood.BowlSteam.BowlingBall.BoxArrowDown.BoxArrowUp.BoxingGlove.BracketsAngle.BracketsCurly.BracketsRound.BracketsSquare.Brain.Brandy.Bread.Bridge.Briefcase.BriefcaseMetal.Broadcast.Broom.Browser.Browsers.Bug.BugBeetle.BugDroid.Building.BuildingApartment.BuildingOffice.Buildings.Bulldozer.Bus.Butterfly.CableCar.Cactus.Cake.Calculator.Calendar.CalendarBlank.CalendarCheck.CalendarDot.CalendarDots.CalendarHeart.CalendarMinus.CalendarPlus.CalendarSlash.CalendarStar.CalendarX.CallBell.Camera.CameraPlus.CameraRotate.CameraSlash.Campfire.Car.CarBattery.CarProfile.CarSimple.Cardholder.Cards.CardsThree.CaretCircleDoubleUp.CaretCircleDown.CaretCircleLeft.CaretCircleRight.CaretCircleUp.CaretCircleUpDown.CaretDoubleDown.CaretDoubleLeft.CaretDoubleRight.CaretDoubleUp.CaretDown.CaretLeft.CaretLineDown.CaretLineLeft.CaretLineRight.CaretLineUp.CaretRight.CaretUp.CaretUpDown.Carrot.CashRegister.CassetteTape.CastleTurret.Cat.CellSignalFull.CellSignalHigh.CellSignalLow.CellSignalMedium.CellSignalNone.CellSignalSlash.CellSignalX.CellTower.Certificate.Chair.Chalkboard.ChalkboardSimple.ChalkboardTeacher.Champagne.ChargingStation.ChartBar.ChartBarHorizontal.ChartDonut.ChartLine.ChartLineDown.ChartLineUp.ChartPie.ChartPieSlice.ChartPolar.ChartScatter.Chat.ChatCentered.ChatCenteredDots.ChatCenteredSlash.ChatCenteredText.ChatCircle.ChatCircleDots.ChatCircleSlash.ChatCircleText.ChatDots.ChatSlash.ChatTeardrop.ChatTeardropDots.ChatTeardropSlash.ChatTeardropText.ChatText.Chats.ChatsCircle.ChatsTeardrop.Check.CheckCircle.CheckFat.CheckSquare.CheckSquareOffset.Checkerboard.Checks.Cheers.Cheese.ChefHat.Cherries.Church.Cigarette.CigaretteSlash.Circle.CircleDashed.CircleHalf.CircleHalfTilt.CircleNotch.CirclesFour.CirclesThree.CirclesThreePlus.Circuitry.City.Clipboard.ClipboardText.Clock.ClockAfternoon.ClockClockwise.ClockCountdown.ClockUser.ClosedCaptioning.Cloud.CloudArrowDown.CloudArrowUp.CloudCheck.CloudFog.CloudLightning.CloudMoon.CloudRain.CloudSlash.CloudSnow.CloudSun.CloudWarning.CloudX.Clover.Club.CoatHanger.CodaLogo.Code.CodeBlock.CodeSimple.CodepenLogo.CodesandboxLogo.Coffee.CoffeeBean.Coin.CoinVertical.Coins.Columns.ColumnsPlusLeft.ColumnsPlusRight.Command.Compass.CompassRose.CompassTool.ComputerTower.Confetti.ContactlessPayment.Control.Cookie.CookingPot.Copy.CopySimple.Copyleft.Copyright.CornersIn.CornersOut.Couch.CourtBasketball.Cow.CowboyHat.Cpu.Crane.CraneTower.CreditCard.Cricket.Crop.Cross.Crosshair.CrosshairSimple.Crown.CrownCross.CrownSimple.Cube.CubeFocus.CubeTransparent.CurrencyBtc.CurrencyCircleDollar.CurrencyCny.CurrencyDollar.CurrencyDollarSimple.CurrencyEth.CurrencyEur.CurrencyGbp.CurrencyInr.CurrencyJpy.CurrencyKrw.CurrencyKzt.CurrencyNgn.CurrencyRub.Cursor.CursorClick.CursorText.Cylinder.Database.Desk.Desktop.DesktopTower.Detective.DevToLogo.DeviceMobile.DeviceMobileCamera.DeviceMobileSlash.DeviceMobileSpeaker.DeviceRotate.DeviceTablet.DeviceTabletCamera.DeviceTabletSpeaker.Devices.Diamond.DiamondsFour.DiceFive.DiceFour.DiceOne.DiceSix.DiceThree.DiceTwo.Disc.DiscoBall.DiscordLogo.Divide.Dna.Dog.Door.DoorOpen.Dot.DotOutline.DotsNine.DotsSix.DotsSixVertical.DotsThree.DotsThreeCircle.DotsThreeOutline.DotsThreeVertical.Download.DownloadSimple.Dress.Dresser.DribbbleLogo.Drone.Drop.DropHalf.DropHalfBottom.DropSimple.DropSlash.DropboxLogo.Ear.EarSlash.Egg.EggCrack.Eject.EjectSimple.Elevator.Empty.Engine.Envelope.EnvelopeOpen.EnvelopeSimple.EnvelopeSimpleOpen.Equalizer.Equals.Eraser.EscalatorDown.EscalatorUp.Exam.ExclamationMark.Exclude.ExcludeSquare.Export.Eye.EyeClosed.EyeSlash.Eyedropper.EyedropperSample.Eyeglasses.Eyes.FaceMask.FacebookLogo.Factory.Faders.FadersHorizontal.FalloutShelter.Fan.Farm.FastForward.FastForwardCircle.Feather.FediverseLogo.FigmaLogo.File.FileArchive.FileArrowDown.FileArrowUp.FileAudio.FileC.FileCloud.FileCode.FileCpp.FileCss.FileCsv.FileDashed.FileDoc.FileHtml.FileImage.FileIni.FileJpg.FileJs.FileJsx.FileLock.FileMagnifyingGlass.FileMd.FileMinus.FilePdf.FilePlus.FilePng.FilePpt.FilePy.FileRs.FileSql.FileSvg.FileText.FileTs.FileTsx.FileTxt.FileVideo.FileVue.FileX.FileXls.FileZip.Files.FilmReel.FilmScript.FilmSlate.FilmStrip.Fingerprint.FingerprintSimple.FinnTheHuman.Fire.FireExtinguisher.FireSimple.FireTruck.FirstAid.FirstAidKit.Fish.FishSimple.Flag.FlagBanner.FlagBannerFold.FlagCheckered.FlagPennant.Flame.Flashlight.Flask.FlipHorizontal.FlipVertical.FloppyDisk.FloppyDiskBack.FlowArrow.Flower.FlowerLotus.FlowerTulip.FlyingSaucer.Folder.FolderDashed.FolderLock.FolderMinus.FolderNotch.FolderNotchMinus.FolderNotchOpen.FolderNotchPlus.FolderOpen.FolderPlus.FolderSimple.FolderSimpleDashed.FolderSimpleLock.FolderSimpleMinus.FolderSimplePlus.FolderSimpleStar.FolderSimpleUser.FolderStar.FolderUser.Folders.Football.FootballHelmet.Footprints.ForkKnife.FourK.FrameCorners.FramerLogo.Function.Funnel.FunnelSimple.FunnelSimpleX.FunnelX.GameController.Garage.GasCan.GasPump.Gauge.Gavel.Gear.GearFine.GearSix.GenderFemale.GenderIntersex.GenderMale.GenderNeuter.GenderNonbinary.GenderTransgender.Ghost.Gif.Gift.GitBranch.GitCommit.GitDiff.GitFork.GitMerge.GitPullRequest.GithubLogo.GitlabLogo.GitlabLogoSimple.Globe.GlobeHemisphereEast.GlobeHemisphereWest.GlobeSimple.GlobeSimpleX.GlobeStand.GlobeX.Goggles.Golf.GoodreadsLogo.GoogleCardboardLogo.GoogleChromeLogo.GoogleDriveLogo.GoogleLogo.GooglePhotosLogo.GooglePlayLogo.GooglePodcastsLogo.Gps.GpsFix.GpsSlash.Gradient.GraduationCap.Grains.GrainsSlash.Graph.GraphicsCard.GreaterThan.GreaterThanOrEqual.GridFour.GridNine.Guitar.HairDryer.Hamburger.Hammer.Hand.HandArrowDown.HandArrowUp.HandCoins.HandDeposit.HandEye.HandFist.HandGrabbing.HandHeart.HandPalm.HandPeace.HandPointing.HandSoap.HandSwipeLeft.HandSwipeRight.HandTap.HandWaving.HandWithdraw.Handbag.HandbagSimple.HandsClapping.HandsPraying.Handshake.HardDrive.HardDrives.HardHat.Hash.HashStraight.HeadCircuit.Headlights.Headphones.Headset.Heart.HeartBreak.HeartHalf.HeartStraight.HeartStraightBreak.Heartbeat.Hexagon.HighDefinition.HighHeel.Highlighter.HighlighterCircle.Hockey.Hoodie.Horse.Hospital.Hourglass.HourglassHigh.HourglassLow.HourglassMedium.HourglassSimple.HourglassSimpleHigh.HourglassSimpleLow.House.HouseLine.HouseSimple.Hurricane.IceCream.IdentificationBadge.IdentificationCard.Image.ImageBroken.ImageSquare.Images.ImagesSquare.Infinity.Info.InstagramLogo.Intersect.IntersectSquare.IntersectThree.Intersection.Invoice.Island.Jar.JarLabel.Jeep.Joystick.Kanban.Key.KeyReturn.Keyboard.Keyhole.Knife.Ladder.LadderSimple.Lamp.LampPendant.Laptop.Lasso.LastfmLogo.Layout.Leaf.Lectern.Lego.LegoSmiley.LessThan.LessThanOrEqual.LetterCircleH.LetterCircleP.LetterCircleV.Lifebuoy.Lightbulb.LightbulbFilament.Lighthouse.Lightning.LightningA.LightningSlash.LineSegment.LineSegments.LineVertical.Link.LinkBreak.LinkSimple.LinkSimpleBreak.LinkSimpleHorizontal.LinkedinLogo.LinktreeLogo.LinuxLogo.List.ListBullets.ListChecks.ListDashes.ListHeart.ListMagnifyingGlass.ListNumbers.ListPlus.ListStar.Lock.LockKey.LockKeyOpen.LockLaminated.LockLaminatedOpen.LockOpen.LockSimple.LockSimpleOpen.Lockers.Log.MagicWand.Magnet.MagnetStraight.MagnifyingGlass.MagnifyingGlassMinus.MagnifyingGlassPlus.Mailbox.MapPin.MapPinArea.MapPinLine.MapPinPlus.MapPinSimple.MapPinSimpleArea.MapPinSimpleLine.MapTrifold.MarkdownLogo.MarkerCircle.Martini.MaskHappy.MaskSad.MastodonLogo.MathOperations.MatrixLogo.Medal.MedalMilitary.MediumLogo.Megaphone.MegaphoneSimple.MemberOf.Memory.MessengerLogo.MetaLogo.Meteor.Metronome.Microphone.MicrophoneSlash.MicrophoneStage.Microscope.MicrosoftExcelLogo.MicrosoftOutlookLogo.MicrosoftTeamsLogo.MicrosoftWordLogo.Minus.MinusCircle.MinusSquare.Money.MoneyWavy.Monitor.MonitorArrowUp.MonitorPlay.Moon.MoonStars.Moped.MopedFront.Mosque.Motorcycle.Mountains.Mouse.MouseLeftClick.MouseMiddleClick.MouseRightClick.MouseScroll.MouseSimple.MusicNote.MusicNoteSimple.MusicNotes.MusicNotesMinus.MusicNotesPlus.MusicNotesSimple.NavigationArrow.Needle.Network.NetworkSlash.NetworkX.Newspaper.NewspaperClipping.NotEquals.NotMemberOf.NotSubsetOf.NotSupersetOf.Notches.Note.NoteBlank.NotePencil.Notebook.Notepad.Notification.NotionLogo.NuclearPlant.NumberCircleEight.NumberCircleFive.NumberCircleFour.NumberCircleNine.NumberCircleOne.NumberCircleSeven.NumberCircleSix.NumberCircleThree.NumberCircleTwo.NumberCircleZero.NumberEight.NumberFive.NumberFour.NumberNine.NumberOne.NumberSeven.NumberSix.NumberSquareEight.NumberSquareFive.NumberSquareFour.NumberSquareNine.NumberSquareOne.NumberSquareSeven.NumberSquareSix.NumberSquareThree.NumberSquareTwo.NumberSquareZero.NumberThree.NumberTwo.NumberZero.Numpad.Nut.NyTimesLogo.Octagon.OfficeChair.Onigiri.OpenAiLogo.Option.Orange.OrangeSlice.Oven.Package.PaintBrush.PaintBrushBroad.PaintBrushHousehold.PaintBucket.PaintRoller.Palette.Panorama.Pants.PaperPlane.PaperPlaneRight.PaperPlaneTilt.Paperclip.PaperclipHorizontal.Parachute.Paragraph.Parallelogram.Park.Password.Path.PatreonLogo.Pause.PauseCircle.PawPrint.PaypalLogo.Peace.Pen.PenNib.PenNibStraight.Pencil.PencilCircle.PencilLine.PencilRuler.PencilSimple.PencilSimpleLine.PencilSimpleSlash.PencilSlash.Pentagon.Pentagram.Pepper.Percent.Person.PersonArmsSpread.PersonSimple.PersonSimpleBike.PersonSimpleCircle.PersonSimpleHike.PersonSimpleRun.PersonSimpleSki.PersonSimpleSwim.PersonSimpleTaiChi.PersonSimpleThrow.PersonSimpleWalk.Perspective.Phone.PhoneCall.PhoneDisconnect.PhoneIncoming.PhoneList.PhoneOutgoing.PhonePause.PhonePlus.PhoneSlash.PhoneTransfer.PhoneX.PhosphorLogo.Pi.PianoKeys.PicnicTable.PictureInPicture.PiggyBank.Pill.PingPong.PintGlass.PinterestLogo.Pinwheel.Pipe.PipeWrench.PixLogo.Pizza.Placeholder.Planet.Plant.Play.PlayCircle.PlayPause.Playlist.Plug.PlugCharging.Plugs.PlugsConnected.Plus.PlusCircle.PlusMinus.PlusSquare.PokerChip.PoliceCar.Polygon.Popcorn.Popsicle.PottedPlant.Power.Prescription.Presentation.PresentationChart.Printer.Prohibit.ProhibitInset.ProjectorScreen.ProjectorScreenChart.Pulse.PushPin.PushPinSimple.PushPinSimpleSlash.PushPinSlash.PuzzlePiece.QrCode.Question.QuestionMark.Queue.Quotes.Rabbit.Racquet.Radical.Radio.RadioButton.Radioactive.Rainbow.RainbowCloud.Ranking.ReadCvLogo.Receipt.ReceiptX.Record.Rectangle.RectangleDashed.Recycle.RedditLogo.Repeat.RepeatOnce.ReplitLogo.Resize.Rewind.RewindCircle.RoadHorizon.Robot.Rocket.RocketLaunch.Rows.RowsPlusBottom.RowsPlusTop.Rss.RssSimple.Rug.Ruler.Sailboat.Scales.Scan.ScanSmiley.Scissors.Scooter.Screencast.Screwdriver.Scribble.ScribbleLoop.Scroll.Seal.SealCheck.SealPercent.SealQuestion.SealWarning.Seat.Seatbelt.SecurityCamera.Selection.SelectionAll.SelectionBackground.SelectionForeground.SelectionInverse.SelectionPlus.SelectionSlash.Shapes.Share.ShareFat.ShareNetwork.Shield.ShieldCheck.ShieldCheckered.ShieldChevron.ShieldPlus.ShieldSlash.ShieldStar.ShieldWarning.ShippingContainer.ShirtFolded.ShootingStar.ShoppingBag.ShoppingBagOpen.ShoppingCart.ShoppingCartSimple.Shovel.Shower.Shrimp.Shuffle.ShuffleAngular.ShuffleSimple.Sidebar.SidebarSimple.Sigma.SignIn.SignOut.Signature.Signpost.SimCard.Siren.SketchLogo.SkipBack.SkipBackCircle.SkipForward.SkipForwardCircle.Skull.SkypeLogo.SlackLogo.Sliders.SlidersHorizontal.Slideshow.Smiley.SmileyAngry.SmileyBlank.SmileyMeh.SmileyMelting.SmileyNervous.SmileySad.SmileySticker.SmileyWink.SmileyXEyes.SnapchatLogo.Sneaker.SneakerMove.Snowflake.SoccerBall.Sock.SolarPanel.SolarRoof.SortAscending.SortDescending.SoundcloudLogo.Spade.Sparkle.SpeakerHifi.SpeakerHigh.SpeakerLow.SpeakerNone.SpeakerSimpleHigh.SpeakerSimpleLow.SpeakerSimpleNone.SpeakerSimpleSlash.SpeakerSimpleX.SpeakerSlash.SpeakerX.Speedometer.Sphere.Spinner.SpinnerBall.SpinnerGap.Spiral.SplitHorizontal.SplitVertical.SpotifyLogo.SprayBottle.Square.SquareHalf.SquareHalfBottom.SquareLogo.SquareSplitVertical.SquaresFour.Stack.StackMinus.StackOverflowLogo.StackPlus.StackSimple.Stairs.Stamp.StandardDefinition.Star.StarAndCrescent.StarFour.StarHalf.StarOfDavid.SteamLogo.SteeringWheel.Steps.Stethoscope.Sticker.Stool.Stop.StopCircle.Storefront.Admissions.StripeLogo.Student.SubsetOf.SubsetProperOf.Subtitles.SubtitlesSlash.Subtract.SubtractSquare.Subway.Suitcase.SuitcaseRolling.SuitcaseSimple.Sun.SunDim.SunHorizon.Sunglasses.SupersetOf.SupersetProperOf.Swap.Swatches.SwimmingPool.Sword.Synagogue.Syringe.TShirt.Table.Tabs.Tag.TagChevron.TagSimple.Target.Taxi.TeaBag.TelegramLogo.Television.TelevisionSimple.TennisBall.Tent.Terminal.TerminalWindow.TestTube.TextAUnderline.TextAa.TextAlignCenter.TextAlignJustify.TextAlignLeft.TextAlignRight.TextB.TextColumns.TextH.TextHFive.TextHFour.TextHOne.TextHSix.TextHThree.TextHTwo.TextIndent.TextItalic.TextOutdent.TextStrikethrough.TextSubscript.TextSuperscript.TextT.TextTSlash.TextUnderline.Textbox.Thermometer.ThermometerCold.ThermometerHot.ThermometerSimple.ThreadsLogo.ThreeD.ThumbsDown.ThumbsUp.Ticket.TidalLogo.TiktokLogo.Tilde.Timer.TipJar.Tipi.Tire.ToggleLeft.ToggleRight.Toilet.ToiletPaper.Toolbox.Tooth.Tornado.Tote.ToteSimple.Towel.Tractor.Trademark.TrademarkRegistered.TrafficCone.TrafficSign.TrafficSignal.Train.TrainRegional.TrainSimple.Tram.Translate.Trash.TrashSimple.Tray.TrayArrowDown.TrayArrowUp.TreasureChest.Tree.TreeEvergreen.TreePalm.TreeStructure.TreeView.TrendDown.TrendUp.Triangle.TriangleDashed.Trolley.TrolleySuitcase.Trophy.Truck.TruckTrailer.TumblrLogo.TwitchLogo.TwitterLogo.Umbrella.UmbrellaSimple.Union.Unite.UniteSquare.Upload.UploadSimple.Usb.User.UserCheck.UserCircle.UserCircleCheck.UserCircleDashed.UserCircleGear.UserCircleMinus.UserCirclePlus.UserFocus.UserGear.UserList.UserMinus.UserPlus.UserRectangle.UserSound.UserSquare.UserSwitch.Users.UsersFour.UsersThree.Van.Vault.VectorThree.VectorTwo.Vibrate.Video.VideoCamera.VideoCameraSlash.VideoConference.Vignette.VinylRecord.VirtualReality.Virus.Visor.Voicemail.Volleyball.Wall.Wallet.Warehouse.Warning.WarningCircle.WarningDiamond.WarningOctagon.WashingMachine.Watch.WaveSawtooth.WaveSine.WaveSquare.WaveTriangle.Waveform.WaveformSlash.Waves.Webcam.WebcamSlash.WebhooksLogo.WechatLogo.WhatsappLogo.Wheelchair.WheelchairMotion.WifiHigh.WifiLow.WifiMedium.WifiNone.WifiSlash.WifiX.Wind.Windmill.WindowsLogo.Wine.Wrench.X.XCircle.XLogo.XSquare.Yarn.YinYang.YoutubeLogo`.split(
          `.`
        )),
      (da = `https://framer.com/m/phosphor-icons/`),
      (fa = [`thin`, `light`, `regular`, `bold`, `fill`, `duotone`]),
      (pa = ua.reduce((e, t) => ((e[t.toLowerCase()] = t), e), {})),
      (la.displayName = `Phosphor`),
      (la.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `House`,
        iconSearch: `House`,
        color: `#66F`,
        selectByList: !0,
        weight: `regular`,
        mirrored: !1,
      }),
      Te(la, {
        selectByList: {
          type: H.Boolean,
          title: `Select`,
          enabledTitle: `List`,
          disabledTitle: `Search`,
          defaultValue: la.defaultProps.selectByList,
        },
        iconSelection: {
          type: H.Enum,
          options: ua,
          defaultValue: la.defaultProps.iconSelection,
          title: `Name`,
          hidden: ({ selectByList: e }) => !e,
          description: `Find every icon name on the [Phosphor site](https://phosphoricons.com/)`,
        },
        iconSearch: {
          type: H.String,
          title: `Name`,
          placeholder: `Menu, Wifi, Box…`,
          hidden: ({ selectByList: e }) => e,
        },
        color: { type: H.Color, title: `Color`, defaultValue: la.defaultProps.color },
        weight: {
          type: H.Enum,
          title: `Weight`,
          optionTitles: fa.map((e) => e.charAt(0).toUpperCase() + e.slice(1)),
          options: fa,
          defaultValue: la.defaultProps.weight,
        },
        mirrored: {
          type: H.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: la.defaultProps.mirrored,
        },
        ...pi,
      }));
  });
function ha(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na = e(() => {
    (b(),
      z(),
      j(),
      p(),
      na(),
      ma(),
      $e(),
      K(),
      G(),
      (ga = R(la)),
      (_a = N(E.div)),
      (va = R(ta)),
      (ya = [`LDDG4BR4H`, `eJwFUnTKR`]),
      (ba = `framer-k4gTr`),
      (xa = { eJwFUnTKR: `framer-v-bvtrlk`, LDDG4BR4H: `framer-v-f72ixc` }),
      (Sa = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ca = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (wa = { delay: 0, duration: 1, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ta = {
        effect: {
          filter: `blur(4px)`,
          opacity: 0.001,
          rotate: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          x: 0,
          y: 20,
        },
        repeat: !1,
        startDelay: 0,
        threshold: 0,
        tokenization: `word`,
        transition: { damping: 80, delay: 0, mass: 1, stiffness: 200, type: `spring` },
        trigger: `onInView`,
        type: `appear`,
      }),
      (Ea = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Da = ({ value: e, children: t }) => {
        let n = _(D),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(D.Provider, { value: i, children: t });
      }),
      (Oa = { Mobile: `eJwFUnTKR`, Testimonial: `LDDG4BR4H` }),
      (ka = E.create(o)),
      (Aa = ({
        designation: e,
        height: t,
        id: n,
        image: r,
        name1: i,
        testimonial: a,
        width: o,
        ...s
      }) => ({
        ...s,
        B5TAlxR8C: i ?? s.B5TAlxR8C ?? `Johnny Sims`,
        BRbPRMZSH: r ??
          s.BRbPRMZSH ?? {
            pixelHeight: 1765,
            pixelWidth: 1810,
            src: `../../assets/images/MdJVZG9qGloNi00reBkrHmsQg-616fba.webp`,
            srcSet: `../../assets/images/MdJVZG9qGloNi00reBkrHmsQg.webp 512w,../../assets/images/MdJVZG9qGloNi00reBkrHmsQg-70bb3f.webp 1024w,../../assets/images/MdJVZG9qGloNi00reBkrHmsQg-616fba.webp 1810w`,
          },
        sJMxqcNat:
          a ??
          s.sJMxqcNat ??
          `"Consilio combines financial expertise with practical business insight. Their guidance has been invaluable to our organization."`,
        variant: Oa[s.variant] ?? s.variant ?? `LDDG4BR4H`,
        WBD87VX3Y: e ?? s.WBD87VX3Y ?? `VP of People at Telegram`,
      })),
      (ja = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ma = me(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: s } = ge(),
            c = Oe(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              sJMxqcNat: p,
              B5TAlxR8C: m,
              WBD87VX3Y: g,
              BRbPRMZSH: _,
              ...b
            } = Aa(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: te,
              setGestureState: D,
              setVariant: ne,
              variants: O,
            } = Le({
              cycleOrder: ya,
              defaultVariant: `LDDG4BR4H`,
              ref: r,
              variant: f,
              variantClassNames: xa,
            }),
            k = ja(e, O),
            re = I(ba, nt, q, J);
          return h(A, {
            id: d ?? i,
            children: h(ka, {
              animate: O,
              initial: !1,
              children: h(Da, {
                value: Sa,
                children: h(E.div, {
                  ...b,
                  ...w,
                  className: I(re, `framer-f72ixc`, u, S),
                  "data-framer-name": `Testimonial`,
                  layoutDependency: k,
                  layoutId: `LDDG4BR4H`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 22,
                    borderBottomRightRadius: 22,
                    borderTopLeftRadius: 22,
                    borderTopRightRadius: 22,
                    ...l,
                  },
                  variants: {
                    eJwFUnTKR: {
                      borderBottomLeftRadius: 18,
                      borderBottomRightRadius: 18,
                      borderTopLeftRadius: 18,
                      borderTopRightRadius: 18,
                    },
                  },
                  ...ha({ eJwFUnTKR: { "data-framer-name": `Mobile` } }, x, T),
                  children: y(E.div, {
                    className: `framer-wt1zt5`,
                    layoutDependency: k,
                    layoutId: `CMgIdM6tO`,
                    style: {
                      backgroundColor: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    },
                    variants: {
                      eJwFUnTKR: {
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                      },
                    },
                    children: [
                      y(E.div, {
                        className: `framer-y6bzyr`,
                        "data-framer-name": `Content`,
                        layoutDependency: k,
                        layoutId: `S1St0u_nh`,
                        children: [
                          y(_a, {
                            __framer__animate: { transition: wa },
                            __framer__animateOnce: !0,
                            __framer__enter: Ca,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-hz0k8n`,
                            "data-framer-name": `Rating`,
                            layoutDependency: k,
                            layoutId: `yDwTkhep0`,
                            children: [
                              h(V, {
                                children: h(F, {
                                  className: `framer-1oyfttr-container`,
                                  isModuleExternal: !0,
                                  layoutDependency: k,
                                  layoutId: `ScAw_L78B-container`,
                                  nodeId: `ScAw_L78B`,
                                  rendersWithMotion: !0,
                                  scopeId: `ndVMrM5W9`,
                                  children: h(la, {
                                    color: `rgb(12, 14, 18)`,
                                    height: `100%`,
                                    iconSearch: `star`,
                                    iconSelection: `Leaf`,
                                    id: `ScAw_L78B`,
                                    layoutId: `ScAw_L78B`,
                                    mirrored: !1,
                                    selectByList: !1,
                                    style: { height: `100%`, width: `100%` },
                                    weight: `fill`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              h(V, {
                                children: h(F, {
                                  className: `framer-545rut-container`,
                                  isModuleExternal: !0,
                                  layoutDependency: k,
                                  layoutId: `yEHu_TmJO-container`,
                                  nodeId: `yEHu_TmJO`,
                                  rendersWithMotion: !0,
                                  scopeId: `ndVMrM5W9`,
                                  children: h(la, {
                                    color: `rgb(12, 14, 18)`,
                                    height: `100%`,
                                    iconSearch: `star`,
                                    iconSelection: `Leaf`,
                                    id: `yEHu_TmJO`,
                                    layoutId: `yEHu_TmJO`,
                                    mirrored: !1,
                                    selectByList: !1,
                                    style: { height: `100%`, width: `100%` },
                                    weight: `fill`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              h(V, {
                                children: h(F, {
                                  className: `framer-15x0yem-container`,
                                  isModuleExternal: !0,
                                  layoutDependency: k,
                                  layoutId: `O1UnObHhz-container`,
                                  nodeId: `O1UnObHhz`,
                                  rendersWithMotion: !0,
                                  scopeId: `ndVMrM5W9`,
                                  children: h(la, {
                                    color: `rgb(12, 14, 18)`,
                                    height: `100%`,
                                    iconSearch: `star`,
                                    iconSelection: `Leaf`,
                                    id: `O1UnObHhz`,
                                    layoutId: `O1UnObHhz`,
                                    mirrored: !1,
                                    selectByList: !1,
                                    style: { height: `100%`, width: `100%` },
                                    weight: `fill`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              h(V, {
                                children: h(F, {
                                  className: `framer-11n8fz8-container`,
                                  isModuleExternal: !0,
                                  layoutDependency: k,
                                  layoutId: `lCgR4jS0V-container`,
                                  nodeId: `lCgR4jS0V`,
                                  rendersWithMotion: !0,
                                  scopeId: `ndVMrM5W9`,
                                  children: h(la, {
                                    color: `rgb(12, 14, 18)`,
                                    height: `100%`,
                                    iconSearch: `star`,
                                    iconSelection: `Leaf`,
                                    id: `lCgR4jS0V`,
                                    layoutId: `lCgR4jS0V`,
                                    mirrored: !1,
                                    selectByList: !1,
                                    style: { height: `100%`, width: `100%` },
                                    weight: `fill`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              h(V, {
                                children: h(F, {
                                  className: `framer-491xm-container`,
                                  isModuleExternal: !0,
                                  layoutDependency: k,
                                  layoutId: `TBfjPjBDN-container`,
                                  nodeId: `TBfjPjBDN`,
                                  rendersWithMotion: !0,
                                  scopeId: `ndVMrM5W9`,
                                  children: h(la, {
                                    color: `rgb(12, 14, 18)`,
                                    height: `100%`,
                                    iconSearch: `star`,
                                    iconSelection: `Leaf`,
                                    id: `TBfjPjBDN`,
                                    layoutId: `TBfjPjBDN`,
                                    mirrored: !1,
                                    selectByList: !1,
                                    style: { height: `100%`, width: `100%` },
                                    weight: `fill`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          h(L, {
                            __fromCanvasComponent: !0,
                            children: h(o, {
                              children: h(E.p, {
                                className: `framer-styles-preset-uuzeo9`,
                                "data-styles-preset": `p2FU4QOGa`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                },
                                children: `"Consilio combines financial expertise with practical business insight. Their guidance has been invaluable to our organization."`,
                              }),
                            }),
                            className: `framer-5bkf53`,
                            effect: Ta,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `xJ1oLui8S`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                              "--framer-paragraph-spacing": `0px`,
                              opacity: 0.88,
                            },
                            text: p,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      y(E.div, {
                        className: `framer-spq1m5`,
                        layoutDependency: k,
                        layoutId: `WNYb9482U`,
                        children: [
                          h(V, {
                            children: h(F, {
                              className: `framer-1lcx7uu-container`,
                              "data-code-component-plugin-id": `84d4c1`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: k,
                              layoutId: `mrQlLznLV-container`,
                              nodeId: `mrQlLznLV`,
                              rendersWithMotion: !0,
                              scopeId: `ndVMrM5W9`,
                              children: h(ta, {
                                bottomLeft: !0,
                                bottomLeftSize: 16,
                                bottomRight: !1,
                                bottomRightSize: 6,
                                curveColor: `var(--token-31ac618e-2676-4a39-9320-7a3775f1f04b, rgb(255, 255, 255))`,
                                height: `100%`,
                                id: `mrQlLznLV`,
                                layoutId: `mrQlLznLV`,
                                style: { height: `100%`, width: `100%` },
                                topLeft: !1,
                                topLeftSize: 35,
                                topRight: !1,
                                topRightSize: 4,
                                width: `100%`,
                                ...ha({ eJwFUnTKR: { bottomLeftSize: 14 } }, x, T),
                              }),
                            }),
                          }),
                          y(E.div, {
                            className: `framer-19ct8lv`,
                            "data-framer-name": `Inner Stack`,
                            layoutDependency: k,
                            layoutId: `QAoOGoXQe`,
                            children: [
                              h(E.div, {
                                className: `framer-9dmsx4`,
                                "data-framer-name": `Stack`,
                                layoutDependency: k,
                                layoutId: `FE_5L8sag`,
                                style: {
                                  backgroundColor: `var(--token-31ac618e-2676-4a39-9320-7a3775f1f04b, rgb(255, 255, 255))`,
                                  borderTopRightRadius: 16,
                                },
                                variants: { eJwFUnTKR: { borderTopRightRadius: 14 } },
                                children: h(Me, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: de(
                                      (c?.y || 0) +
                                        5 +
                                        (0 +
                                          (((c?.height || 330) -
                                            10 -
                                            Math.max(0, ((c?.height || 330) - 10 - 0) / 1) * 1) /
                                            1) *
                                            0) +
                                        Math.max(0, ((c?.height || 330) - 10 - 0) / 1) * 1 -
                                        116 +
                                        0 +
                                        40 +
                                        0 +
                                        0 +
                                        8 +
                                        0
                                    ),
                                    pixelHeight: 1765,
                                    pixelWidth: 1810,
                                    sizes: `60px`,
                                    ...Ea(_),
                                    positionX: `center`,
                                    positionY: `top`,
                                  },
                                  className: `framer-xfzn4`,
                                  layoutDependency: k,
                                  layoutId: `UiTsh_Ymj`,
                                  style: {
                                    borderBottomLeftRadius: 14,
                                    borderBottomRightRadius: 14,
                                    borderTopLeftRadius: 14,
                                    borderTopRightRadius: 14,
                                  },
                                  variants: {
                                    eJwFUnTKR: {
                                      borderBottomLeftRadius: 13,
                                      borderBottomRightRadius: 13,
                                      borderTopLeftRadius: 13,
                                      borderTopRightRadius: 13,
                                    },
                                  },
                                  ...ha(
                                    {
                                      eJwFUnTKR: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: de(
                                            (c?.y || 0) +
                                              5 +
                                              (((c?.height || 273.5) - 10 - 474.3) / 2 + 0 + 0) +
                                              474.3 -
                                              108 +
                                              0 +
                                              40 +
                                              0 +
                                              0 +
                                              8 +
                                              0
                                          ),
                                          pixelHeight: 1765,
                                          pixelWidth: 1810,
                                          sizes: `52px`,
                                          ...Ea(_),
                                          positionX: `center`,
                                          positionY: `top`,
                                        },
                                      },
                                    },
                                    x,
                                    T
                                  ),
                                }),
                              }),
                              h(V, {
                                children: h(F, {
                                  className: `framer-1aikte1-container`,
                                  "data-code-component-plugin-id": `84d4c1`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  layoutDependency: k,
                                  layoutId: `o9Wb37kfU-container`,
                                  nodeId: `o9Wb37kfU`,
                                  rendersWithMotion: !0,
                                  scopeId: `ndVMrM5W9`,
                                  children: h(ta, {
                                    bottomLeft: !0,
                                    bottomLeftSize: 16,
                                    bottomRight: !1,
                                    bottomRightSize: 6,
                                    curveColor: `var(--token-31ac618e-2676-4a39-9320-7a3775f1f04b, rgb(255, 255, 255))`,
                                    height: `100%`,
                                    id: `o9Wb37kfU`,
                                    layoutId: `o9Wb37kfU`,
                                    style: { height: `100%`, width: `100%` },
                                    topLeft: !1,
                                    topLeftSize: 35,
                                    topRight: !1,
                                    topRightSize: 4,
                                    width: `100%`,
                                    ...ha({ eJwFUnTKR: { bottomLeftSize: 14 } }, x, T),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      y(E.div, {
                        className: `framer-2ggpzf`,
                        "data-framer-name": `Image and name`,
                        layoutDependency: k,
                        layoutId: `UvvdbBUdp`,
                        children: [
                          h(L, {
                            __fromCanvasComponent: !0,
                            children: h(o, {
                              children: h(E.p, {
                                className: `framer-styles-preset-qlsyr3`,
                                "data-styles-preset": `YMpbOMTQr`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                },
                                children: `Johnny Sims`,
                              }),
                            }),
                            className: `framer-1tm13m8`,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `owSRrhUMe`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                              "--framer-paragraph-spacing": `0px`,
                              opacity: 0.85,
                            },
                            text: m,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          h(L, {
                            __fromCanvasComponent: !0,
                            children: h(o, {
                              children: h(E.p, {
                                className: `framer-styles-preset-1xheykw`,
                                "data-styles-preset": `vz9muakNv`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                },
                                children: `VP of People at Telegram`,
                              }),
                            }),
                            className: `framer-eciddm`,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `GLpe5slnR`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                              "--framer-paragraph-spacing": `0px`,
                              opacity: 0.6,
                            },
                            text: g,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-k4gTr.framer-98anep, .framer-k4gTr .framer-98anep { display: block; }`,
          `.framer-k4gTr.framer-f72ixc { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; height: 330px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 5px; position: relative; width: 350px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-k4gTr .framer-wt1zt5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: visible; padding: 32px 28px 22px 28px; position: relative; width: 100%; }`,
          `.framer-k4gTr .framer-y6bzyr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-k4gTr .framer-hz0k8n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-k4gTr .framer-1oyfttr-container, .framer-k4gTr .framer-545rut-container, .framer-k4gTr .framer-15x0yem-container, .framer-k4gTr .framer-11n8fz8-container, .framer-k4gTr .framer-491xm-container { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 15px; }`,
          `.framer-k4gTr .framer-5bkf53 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-k4gTr .framer-spq1m5 { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; z-index: 1; }`,
          `.framer-k4gTr .framer-1lcx7uu-container, .framer-k4gTr .framer-1aikte1-container { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 40px; z-index: 1; }`,
          `.framer-k4gTr .framer-19ct8lv { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-k4gTr .framer-9dmsx4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 8px; position: relative; width: min-content; z-index: 1; }`,
          `.framer-k4gTr .framer-xfzn4 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 60px; }`,
          `.framer-k4gTr .framer-2ggpzf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 1px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0px 70px; position: relative; width: 100%; }`,
          `.framer-k4gTr .framer-1tm13m8, .framer-k4gTr .framer-eciddm { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-k4gTr.framer-v-bvtrlk.framer-f72ixc { gap: 0px; height: min-content; justify-content: center; }`,
          `.framer-k4gTr.framer-v-bvtrlk .framer-wt1zt5 { flex: none; gap: 28px; height: min-content; justify-content: center; padding: 24px 22px 24px 22px; }`,
          `.framer-k4gTr.framer-v-bvtrlk .framer-xfzn4 { width: 52px; }`,
          ...et,
          ...Y,
          ...Ke,
        ],
        `framer-k4gTr`
      )),
      (Ma.displayName = `Testimonial`),
      (Ma.defaultProps = { height: 330, width: 350 }),
      Te(Ma, {
        variant: {
          options: [`LDDG4BR4H`, `eJwFUnTKR`],
          optionTitles: [`Testimonial`, `Mobile`],
          title: `Variant`,
          type: H.Enum,
        },
        sJMxqcNat: {
          defaultValue: `"Consilio combines financial expertise with practical business insight. Their guidance has been invaluable to our organization."`,
          displayTextArea: !1,
          title: `Testimonial`,
          type: H.String,
        },
        onsJMxqcNatChange: { changes: `sJMxqcNat`, type: H.ChangeHandler },
        B5TAlxR8C: {
          defaultValue: `Johnny Sims`,
          displayTextArea: !1,
          title: `Name`,
          type: H.String,
        },
        onB5TAlxR8CChange: { changes: `B5TAlxR8C`, type: H.ChangeHandler },
        WBD87VX3Y: {
          defaultValue: `VP of People at Telegram`,
          displayTextArea: !1,
          title: `Designation`,
          type: H.String,
        },
        onWBD87VX3YChange: { changes: `WBD87VX3Y`, type: H.ChangeHandler },
        BRbPRMZSH: {
          __defaultAssetReference: `data:framer/asset-reference,MdJVZG9qGloNi00reBkrHmsQg.webp?originalFilename=Professional+Portrait+%286%29.webp&width=1810&height=1765`,
          title: `Image`,
          type: H.ResponsiveImage,
        },
      }),
      M(
        Ma,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ga,
          ...va,
          ...he(tt),
          ...he(Ue),
          ...he(We),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Pa(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Fa,
  Ia,
  La,
  Ra,
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka = e(() => {
    (b(),
      z(),
      j(),
      p(),
      lt(),
      $e(),
      (Fa = [`fGcQ8iVZH`, `ld8sPgtuq`]),
      (Ia = `framer-4Disc`),
      (La = { fGcQ8iVZH: `framer-v-9jby88`, ld8sPgtuq: `framer-v-1pz7qga` }),
      (Ra = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (za = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ba = ({ value: e, children: t }) => {
        let n = _(D),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(D.Provider, { value: i, children: t });
      }),
      (Va = { Phone: `ld8sPgtuq`, Primary: `fGcQ8iVZH` }),
      (Ha = E.create(o)),
      (Ua = ({ description: e, height: t, id: n, image: r, title: i, width: a, ...o }) => ({
        ...o,
        iU68ScBCY: e ?? o.iU68ScBCY ?? `Description`,
        M6makQZJz: i ?? o.M6makQZJz ?? `Title`,
        OtapoObdF: r ?? o.OtapoObdF,
        variant: Va[o.variant] ?? o.variant ?? `fGcQ8iVZH`,
      })),
      (Wa = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ga = me(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: s } = ge(),
            c = Oe(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              OtapoObdF: p,
              M6makQZJz: m,
              iU68ScBCY: g,
              ..._
            } = Ua(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: te,
              setVariant: D,
              variants: ne,
            } = Le({
              cycleOrder: Fa,
              defaultVariant: `fGcQ8iVZH`,
              ref: r,
              variant: f,
              variantClassNames: La,
            }),
            O = Wa(e, ne),
            k = I(Ia, ft, nt),
            re = () => b !== `ld8sPgtuq`;
          return h(A, {
            id: d ?? i,
            children: h(Ha, {
              animate: ne,
              initial: !1,
              children: h(Ba, {
                value: za,
                children: y(Me, {
                  ..._,
                  ...C,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    loading: de(c?.y || 0),
                    sizes: c?.width || `100vw`,
                    ...Ra(p),
                  },
                  className: I(k, `framer-9jby88`, u, x),
                  "data-framer-name": `Primary`,
                  layoutDependency: O,
                  layoutId: `fGcQ8iVZH`,
                  ref: r,
                  style: {
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    ...l,
                  },
                  variants: {
                    ld8sPgtuq: {
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                  },
                  ...Pa({ ld8sPgtuq: { "data-framer-name": `Phone`, background: void 0 } }, b, w),
                  children: [
                    y(E.div, {
                      className: `framer-1fbdihy`,
                      "data-framer-name": `Text`,
                      layoutDependency: O,
                      layoutId: `AjeAy7fzb`,
                      children: [
                        h(L, {
                          __fromCanvasComponent: !0,
                          children: h(o, {
                            children: h(E.p, {
                              className: `framer-styles-preset-115hxpd`,
                              "data-styles-preset": `mdo3XsYBf`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                              },
                              children: `Title`,
                            }),
                          }),
                          className: `framer-1maj016`,
                          "data-framer-name": `Branding`,
                          fonts: [`Inter`],
                          layoutDependency: O,
                          layoutId: `c4Old2J4N`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                            "--framer-paragraph-spacing": `0px`,
                            opacity: 0.8,
                          },
                          text: m,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        h(L, {
                          __fromCanvasComponent: !0,
                          children: h(o, {
                            children: h(E.p, {
                              className: `framer-styles-preset-uuzeo9`,
                              "data-styles-preset": `p2FU4QOGa`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                              },
                              children: `Description`,
                            }),
                          }),
                          className: `framer-1cwqa1i`,
                          "data-framer-name": `Description`,
                          fonts: [`Inter`],
                          layoutDependency: O,
                          layoutId: `nCM193iGl`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: g,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    re() &&
                      h(E.div, {
                        className: `framer-met36r`,
                        "data-framer-name": `Mask`,
                        layoutDependency: O,
                        layoutId: `jV1DfJumh`,
                        style: {
                          backdropFilter: `blur(4px)`,
                          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 1.567778716216216%, rgba(0, 0, 0, 0) 69.45734797297297%)`,
                          mask: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 33.04360879434122%, rgba(0,0,0,1) 100%) add`,
                          WebkitBackdropFilter: `blur(4px)`,
                          WebkitMask: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 33.04360879434122%, rgba(0,0,0,1) 100%) add`,
                        },
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-4Disc.framer-csdnus, .framer-4Disc .framer-csdnus { display: block; }`,
          `.framer-4Disc.framer-9jby88 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: 150px; justify-content: flex-end; overflow: hidden; padding: 28px; position: relative; width: 180px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-4Disc .framer-1fbdihy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-4Disc .framer-1maj016 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-4Disc .framer-1cwqa1i { flex: none; height: auto; max-width: 400px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-4Disc .framer-met36r { bottom: 0px; flex: none; height: 25%; left: 0px; overflow: hidden; position: absolute; right: 0px; z-index: 0; }`,
          `.framer-4Disc.framer-v-1pz7qga.framer-9jby88 { gap: 21px; height: min-content; padding: 0px; will-change: unset; }`,
          `.framer-4Disc.framer-v-1pz7qga .framer-1fbdihy { gap: 8px; }`,
          ...ut,
          ...et,
        ],
        `framer-4Disc`
      )),
      (Ga.displayName = `Industry Item`),
      (Ga.defaultProps = { height: 150, width: 180 }),
      Te(Ga, {
        variant: {
          options: [`fGcQ8iVZH`, `ld8sPgtuq`],
          optionTitles: [`Primary`, `Phone`],
          title: `Variant`,
          type: H.Enum,
        },
        OtapoObdF: { title: `Image`, type: H.ResponsiveImage },
        M6makQZJz: {
          defaultValue: `Title`,
          displayTextArea: !1,
          placeholder: ``,
          title: `Title`,
          type: H.String,
        },
        onM6makQZJzChange: { changes: `M6makQZJz`, type: H.ChangeHandler },
        iU68ScBCY: {
          defaultValue: `Description`,
          displayTextArea: !1,
          title: `Description`,
          type: H.String,
        },
        oniU68ScBCYChange: { changes: `iU68ScBCY`, type: H.ChangeHandler },
      }),
      M(
        Ga,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...he(dt),
          ...he(tt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function qa(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  so,
  co,
  lo,
  uo = e(() => {
    (b(),
      z(),
      j(),
      p(),
      He(),
      (Ja = N(E.div)),
      (Ya = [`F9_jnIQL1`, `lITw2pRoa`, `OlLjydPwL`, `fCiQExCJF`, `vTC5JV3o_`, `w1nmO22fV`]),
      (Xa = `framer-T2b9n`),
      (Za = {
        F9_jnIQL1: `framer-v-sdfruq`,
        fCiQExCJF: `framer-v-19gayia`,
        lITw2pRoa: `framer-v-1fvtvr2`,
        OlLjydPwL: `framer-v-2qpwu`,
        vTC5JV3o_: `framer-v-cbvoo2`,
        w1nmO22fV: `framer-v-1ph5zuy`,
      }),
      (Qa = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 30,
        y: 0,
      }),
      ($a = { delay: 0, duration: 1, ease: [0.22, 1, 0.36, 1], type: `tween` }),
      (eo = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: $a,
        x: 30,
        y: 0,
      }),
      (to = { delay: 0, duration: 0.4, ease: [0.68, 0, 0.16, 0.97], type: `tween` }),
      (no = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 20,
        y: 0,
      }),
      (ro = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: $a,
        x: 20,
        y: 0,
      }),
      (io = ({ value: e, children: t }) => {
        let n = _(D),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(D.Provider, { value: i, children: t });
      }),
      (ao = {
        "Desktop active": `F9_jnIQL1`,
        "Desktop inactive": `lITw2pRoa`,
        "Phone active": `vTC5JV3o_`,
        "Phone inactive": `w1nmO22fV`,
        "Tablet active": `OlLjydPwL`,
        "Tablet inative": `fCiQExCJF`,
      }),
      (oo = E.create(o)),
      (so = ({ height: e, id: t, mouseEnter: n, title: r, width: i, ...a }) => ({
        ...a,
        fErYKCICq: r ?? a.fErYKCICq ?? `Title`,
        KrXbsPILD: n ?? a.KrXbsPILD,
        variant: ao[a.variant] ?? a.variant ?? `F9_jnIQL1`,
      })),
      (co = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (lo = me(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: s } = ge();
          Oe();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              fErYKCICq: f,
              KrXbsPILD: p,
              ...m
            } = so(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = Le({
              cycleOrder: Ya,
              defaultVariant: `F9_jnIQL1`,
              ref: r,
              variant: d,
              variantClassNames: Za,
            }),
            te = co(e, T),
            { activeVariantCallback: D, delay: ne } = ye(g),
            O = D(async (...e) => {
              if ((C({ isHovered: !0 }), p && (await p(...e)) === !1)) return !1;
            }),
            k = I(Xa, Be);
          return h(A, {
            id: u ?? i,
            children: h(oo, {
              animate: T,
              initial: !1,
              children: h(io, {
                value: to,
                children: h(Ja, {
                  ...m,
                  ...b,
                  __framer__animate: { transition: $a },
                  __framer__animateOnce: !0,
                  __framer__enter: Qa,
                  __framer__exit: eo,
                  __framer__styleAppearEffectEnabled: !0,
                  __framer__threshold: 0.5,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: I(k, `framer-sdfruq`, l, _),
                  "data-framer-name": `Desktop active`,
                  "data-highlight": !0,
                  layoutDependency: te,
                  layoutId: `F9_jnIQL1`,
                  onMouseEnter: O,
                  ref: r,
                  style: { ...c },
                  ...qa(
                    {
                      fCiQExCJF: { "data-framer-name": `Tablet inative` },
                      lITw2pRoa: { "data-framer-name": `Desktop inactive` },
                      OlLjydPwL: { "data-framer-name": `Tablet active` },
                      vTC5JV3o_: {
                        __framer__enter: no,
                        __framer__exit: ro,
                        "data-framer-name": `Phone active`,
                      },
                      w1nmO22fV: {
                        __framer__enter: no,
                        __framer__exit: ro,
                        "data-framer-name": `Phone inactive`,
                      },
                    },
                    g,
                    x
                  ),
                  children: h(E.div, {
                    className: `framer-1hdcu9u`,
                    "data-framer-name": `Container`,
                    layoutDependency: te,
                    layoutId: `H_Ud5S5AR`,
                    children: h(L, {
                      __fromCanvasComponent: !0,
                      children: h(o, {
                        children: h(E.h2, {
                          className: `framer-styles-preset-9lpzun`,
                          "data-styles-preset": `kH4hVkPTC`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-1of0zx5, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                          },
                          children: `Title`,
                        }),
                      }),
                      className: `framer-1giadl4`,
                      "data-framer-name": `Text`,
                      fonts: [`Inter`],
                      layoutDependency: te,
                      layoutId: `HLq6bgOrU`,
                      style: {
                        "--extracted-1of0zx5": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                        "--framer-paragraph-spacing": `0px`,
                        opacity: 1,
                      },
                      text: f,
                      variants: {
                        fCiQExCJF: { opacity: 0.15 },
                        lITw2pRoa: { opacity: 0.15 },
                        OlLjydPwL: { opacity: 1 },
                        vTC5JV3o_: { opacity: 1 },
                        w1nmO22fV: { opacity: 0.2 },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-T2b9n.framer-zetvaa, .framer-T2b9n .framer-zetvaa { display: block; }`,
          `.framer-T2b9n.framer-sdfruq { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: flex-start; overflow: visible; padding: 2px 0px 2px 8px; position: relative; width: 725px; }`,
          `.framer-T2b9n .framer-1hdcu9u { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-T2b9n .framer-1giadl4 { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-T2b9n.framer-v-1fvtvr2.framer-sdfruq { padding: 2px 0px 2px 0px; }`,
          `.framer-T2b9n.framer-v-1fvtvr2 .framer-1hdcu9u, .framer-T2b9n.framer-v-2qpwu .framer-1hdcu9u { gap: 20px; }`,
          `.framer-T2b9n.framer-v-2qpwu.framer-sdfruq, .framer-T2b9n.framer-v-19gayia.framer-sdfruq { gap: 14px; }`,
          `.framer-T2b9n.framer-v-19gayia .framer-1hdcu9u { gap: 16px; }`,
          `.framer-T2b9n.framer-v-cbvoo2.framer-sdfruq { gap: 14px; padding: 2px 0px 2px 0px; width: 320px; }`,
          `.framer-T2b9n.framer-v-cbvoo2 .framer-1hdcu9u, .framer-T2b9n.framer-v-1ph5zuy .framer-1hdcu9u { gap: 10px; }`,
          `.framer-T2b9n.framer-v-1ph5zuy.framer-sdfruq { gap: 10px; padding: 2px 0px 2px 0px; width: 320px; }`,
          ...qe,
        ],
        `framer-T2b9n`
      )),
      (lo.displayName = `Industry`),
      (lo.defaultProps = { height: 62, width: 725 }),
      Te(lo, {
        variant: {
          options: [`F9_jnIQL1`, `lITw2pRoa`, `OlLjydPwL`, `fCiQExCJF`, `vTC5JV3o_`, `w1nmO22fV`],
          optionTitles: [
            `Desktop active`,
            `Desktop inactive`,
            `Tablet active`,
            `Tablet inative`,
            `Phone active`,
            `Phone inactive`,
          ],
          title: `Variant`,
          type: H.Enum,
        },
        fErYKCICq: { defaultValue: `Title`, displayTextArea: !1, title: `Title`, type: H.String },
        onfErYKCICqChange: { changes: `fErYKCICq`, type: H.ChangeHandler },
        KrXbsPILD: { title: `Mouse Enter`, type: H.EventHandler },
      }),
      M(
        lo,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...he(Ye),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function fo(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  bo,
  xo,
  So,
  Co,
  wo,
  To,
  Eo,
  Do = e(() => {
    (b(),
      z(),
      j(),
      p(),
      at(),
      (po = N(E.div)),
      (mo = [`Fd2nh3mVM`, `zEwtHx1Mi`]),
      (ho = `framer-8gmi1`),
      (go = { Fd2nh3mVM: `framer-v-1x8sok8`, zEwtHx1Mi: `framer-v-1ypp01h` }),
      (_o = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (vo = { delay: 0.2, duration: 0.5, ease: [0.12, 0.23, 0.5, 1], type: `tween` }),
      (yo = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: vo,
        x: 0,
        y: 20,
      }),
      (bo = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (xo = ({ value: e, children: t }) => {
        let n = _(D),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(D.Provider, { value: i, children: t });
      }),
      (So = { "No BG": `zEwtHx1Mi`, Desktop: `Fd2nh3mVM` }),
      (Co = E.create(o)),
      (wo = ({ color: e, height: t, id: n, tAG: r, width: i, ...a }) => ({
        ...a,
        fetASprUN: r ?? a.fetASprUN ?? `Title`,
        variant: So[a.variant] ?? a.variant ?? `Fd2nh3mVM`,
        vbt93bo2d:
          e ??
          a.vbt93bo2d ??
          `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
      })),
      (To = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Eo = me(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: s } = ge();
          Oe();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              fetASprUN: f,
              vbt93bo2d: p,
              ...m
            } = wo(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = Le({
              cycleOrder: mo,
              defaultVariant: `Fd2nh3mVM`,
              ref: r,
              variant: d,
              variantClassNames: go,
            }),
            te = To(e, T),
            D = I(ho, ct);
          return h(A, {
            id: u ?? i,
            children: h(Co, {
              animate: T,
              initial: !1,
              children: h(xo, {
                value: bo,
                children: h(po, {
                  ...m,
                  ...b,
                  __framer__animate: { transition: vo },
                  __framer__animateOnce: !0,
                  __framer__enter: _o,
                  __framer__exit: yo,
                  __framer__styleAppearEffectEnabled: !0,
                  __framer__threshold: 0,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: I(D, `framer-1x8sok8`, l, _),
                  "data-framer-name": `Desktop`,
                  layoutDependency: te,
                  layoutId: `Fd2nh3mVM`,
                  ref: r,
                  style: {
                    backdropFilter: `blur(10px)`,
                    backgroundColor: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    WebkitBackdropFilter: `blur(10px)`,
                    ...c,
                  },
                  variants: {
                    zEwtHx1Mi: {
                      backdropFilter: `none`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                      WebkitBackdropFilter: `none`,
                    },
                  },
                  ...fo(
                    {
                      zEwtHx1Mi: {
                        __framer__styleAppearEffectEnabled: void 0,
                        "data-framer-name": `No BG`,
                      },
                    },
                    g,
                    x
                  ),
                  children: h(L, {
                    __fromCanvasComponent: !0,
                    children: h(o, {
                      children: h(E.p, {
                        className: `framer-styles-preset-12qamiq`,
                        "data-styles-preset": `e_qtYqPa5`,
                        dir: `auto`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-vbt93bo2d-tWjpbBGWc))`,
                        },
                        children: `Title`,
                      }),
                    }),
                    className: `framer-11jfc8p`,
                    "data-framer-name": `Title`,
                    fonts: [`Inter`],
                    layoutDependency: te,
                    layoutId: `SWRYO5UrD`,
                    style: {
                      "--extracted-r6o4lv": `var(--variable-reference-vbt93bo2d-tWjpbBGWc)`,
                      "--framer-paragraph-spacing": `0px`,
                      "--variable-reference-vbt93bo2d-tWjpbBGWc": p,
                    },
                    text: f,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-8gmi1.framer-bfywfv, .framer-8gmi1 .framer-bfywfv { display: block; }`,
          `.framer-8gmi1.framer-1x8sok8 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 9px 16px 9px 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-8gmi1 .framer-11jfc8p { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-8gmi1.framer-v-1ypp01h.framer-1x8sok8 { padding: 0px; will-change: unset; }`,
          ...ot,
        ],
        `framer-8gmi1`
      )),
      (Eo.displayName = `Section Tag`),
      (Eo.defaultProps = { height: 31, width: 71 }),
      Te(Eo, {
        variant: {
          options: [`Fd2nh3mVM`, `zEwtHx1Mi`],
          optionTitles: [`Desktop`, `No BG`],
          title: `Variant`,
          type: H.Enum,
        },
        fetASprUN: { defaultValue: `Title`, displayTextArea: !0, title: `TAG`, type: H.String },
        onfetASprUNChange: { changes: `fetASprUN`, type: H.ChangeHandler },
        vbt93bo2d: {
          defaultValue: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)) /* {"name":"White"} */`,
          title: `Color`,
          type: H.Color,
        },
      }),
      M(
        Eo,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...he(st),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Oo(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ko,
  Ao,
  jo,
  Mo,
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro,
  zo,
  Bo,
  Q,
  Vo,
  Ho,
  Uo,
  Wo,
  Go,
  Ko,
  qo,
  Jo,
  Yo = e(() => {
    (b(),
      z(),
      j(),
      p(),
      Ka(),
      uo(),
      Do(),
      (ko = R(Ga)),
      (Ao = N(E.div)),
      (jo = R(Eo)),
      (Mo = R(lo)),
      (No = [
        `nuSf7fOI9`,
        `d_Ze7Nez2`,
        `C3wDUveoh`,
        `axiD12Gen`,
        `KgCAOYUEM`,
        `t5j9Tza4s`,
        `rWwpzMyoJ`,
        `IPC1SSIGS`,
        `fCZUkpIT9`,
        `wHllqRrD7`,
        `bO2jkmxpp`,
        `vLBDpGbjR`,
        `kYb640Y9q`,
        `GGM_7XYIr`,
        `tDCHEHWPa`,
        `akjDL0XdX`,
        `r6RPRRbP3`,
        `vby23RBJ8`,
        `BJzpwIppy`,
        `emTjFYLix`,
        `UMeNZw7Dm`,
      ]),
      (Po = `framer-w1wLW`),
      (Fo = {
        akjDL0XdX: `framer-v-99ccxw`,
        axiD12Gen: `framer-v-abt7d5`,
        BJzpwIppy: `framer-v-15uzim`,
        bO2jkmxpp: `framer-v-19k7gy8`,
        C3wDUveoh: `framer-v-17jm8y1`,
        d_Ze7Nez2: `framer-v-fbpegc`,
        emTjFYLix: `framer-v-ndmf1t`,
        fCZUkpIT9: `framer-v-1797kl5`,
        GGM_7XYIr: `framer-v-1r58ldb`,
        IPC1SSIGS: `framer-v-1lbwra1`,
        KgCAOYUEM: `framer-v-1dk6hj1`,
        kYb640Y9q: `framer-v-ma9jy0`,
        nuSf7fOI9: `framer-v-llxzbd`,
        r6RPRRbP3: `framer-v-cb02v6`,
        rWwpzMyoJ: `framer-v-73dd3t`,
        t5j9Tza4s: `framer-v-me80ba`,
        tDCHEHWPa: `framer-v-15cz56s`,
        UMeNZw7Dm: `framer-v-ctas4w`,
        vby23RBJ8: `framer-v-10o23x7`,
        vLBDpGbjR: `framer-v-1jucthq`,
        wHllqRrD7: `framer-v-fogx62`,
      }),
      (Io = { delay: 0, duration: 0.4, ease: [0.68, 0, 0.16, 0.97], type: `tween` }),
      (Lo = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Ro = { bounce: 0.1, delay: 0, duration: 1.2, type: `spring` }),
      (zo = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Ro,
        x: 0,
        y: 0,
      }),
      (Bo = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Vo = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (Ho = ({ value: e, children: t }) => {
        let n = _(D),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(D.Provider, { value: i, children: t });
      }),
      (Uo = {
        "Desktop 1": `nuSf7fOI9`,
        "Desktop 2": `d_Ze7Nez2`,
        "Desktop 3": `C3wDUveoh`,
        "Desktop 4": `axiD12Gen`,
        "Desktop 5": `KgCAOYUEM`,
        "Desktop 6": `t5j9Tza4s`,
        "Desktop 7": `rWwpzMyoJ`,
        "Phone 1": `tDCHEHWPa`,
        "Phone 2": `akjDL0XdX`,
        "Phone 3": `r6RPRRbP3`,
        "Phone 4": `vby23RBJ8`,
        "Phone 5": `BJzpwIppy`,
        "Phone 6": `emTjFYLix`,
        "Phone 7": `UMeNZw7Dm`,
        "Tablet 1": `IPC1SSIGS`,
        "Tablet 2": `fCZUkpIT9`,
        "Tablet 3": `wHllqRrD7`,
        "Tablet 4": `bO2jkmxpp`,
        "Tablet 5": `vLBDpGbjR`,
        "Tablet 6": `kYb640Y9q`,
        "Tablet 7": `GGM_7XYIr`,
      }),
      (Wo = E.create(o)),
      (Go = (e, t) => {
        let [n, r] = s(e),
          [i, a] = s(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (Ko = ({
        _01Description: e,
        _01Image: t,
        _01Title: n,
        _02Description: r,
        _02Image: i,
        _02Title: a,
        _03Description: o,
        _03Image: s,
        _03Title: c,
        _04Description: l,
        _04Image: u,
        _04Title: d,
        _05Description: f,
        _05Image: p,
        _05Title: m,
        _06Description: h,
        _06Image: g,
        _06Title: _,
        _07Description: v,
        _07Image: y,
        _07Title: b,
        height: x,
        id: S,
        width: ee,
        ...C
      }) => ({
        ...C,
        AChBv6mnx: a ?? C.AChBv6mnx ?? `Title`,
        AtsGqKbqe: s ?? C.AtsGqKbqe,
        dfbYUaU7k: b ?? C.dfbYUaU7k ?? `Title`,
        DP3k2sIwB: f ?? C.DP3k2sIwB ?? `05 Description`,
        DvMnYDgLq: m ?? C.DvMnYDgLq ?? `Title`,
        dym8aGlmH: r ?? C.dym8aGlmH ?? `02 Description`,
        FhHZF40Gc: p ?? C.FhHZF40Gc,
        gRgZAVMwJ: u ?? C.gRgZAVMwJ,
        H3Z4yrNzo: h ?? C.H3Z4yrNzo ?? `06 Description`,
        hZtEnwWel: g ?? C.hZtEnwWel,
        kGMjQGWFg: i ?? C.kGMjQGWFg,
        L5bVOjC54: t ?? C.L5bVOjC54,
        nfr3_vd4_: e ?? C.nfr3_vd4_ ?? `01 Description`,
        rd_VK8DcK: d ?? C.rd_VK8DcK ?? `Title`,
        ry6udNzEB: y ?? C.ry6udNzEB,
        T3Zvj4lLt: l ?? C.T3Zvj4lLt ?? `04 Description`,
        u2WQNcukZ: o ?? C.u2WQNcukZ ?? `03 Description`,
        variant: Uo[C.variant] ?? C.variant ?? `nuSf7fOI9`,
        vraZoJ4v1: _ ?? C.vraZoJ4v1 ?? `Title`,
        Xgqdpwxoc: n ?? C.Xgqdpwxoc ?? `Title`,
        Y7m9L8sgJ: c ?? C.Y7m9L8sgJ ?? `Title`,
        YoMKINsBV: v ?? C.YoMKINsBV ?? `07 Description`,
      })),
      (qo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Jo = me(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = ge(),
            s = Oe(),
            {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              L5bVOjC54: f,
              Xgqdpwxoc: p,
              onXgqdpwxocChange: m,
              nfr3_vd4_: g,
              onnfr3_vd4_Change: _,
              kGMjQGWFg: b,
              AChBv6mnx: x,
              onAChBv6mnxChange: S,
              dym8aGlmH: C,
              ondym8aGlmHChange: w,
              AtsGqKbqe: T,
              Y7m9L8sgJ: te,
              onY7m9L8sgJChange: D,
              u2WQNcukZ: ne,
              onu2WQNcukZChange: O,
              gRgZAVMwJ: k,
              rd_VK8DcK: re,
              onrd_VK8DcKChange: ie,
              T3Zvj4lLt: j,
              onT3Zvj4lLtChange: ae,
              FhHZF40Gc: M,
              DvMnYDgLq: oe,
              onDvMnYDgLqChange: se,
              DP3k2sIwB: ce,
              onDP3k2sIwBChange: le,
              hZtEnwWel: N,
              vraZoJ4v1: ue,
              onvraZoJ4v1Change: de,
              H3Z4yrNzo: fe,
              onH3Z4yrNzoChange: P,
              ry6udNzEB: pe,
              dfbYUaU7k: L,
              ondfbYUaU7kChange: me,
              YoMKINsBV: R,
              onYoMKINsBVChange: he,
              ...z
            } = Ko(e),
            [B, _e] = Go(p, m),
            [ve, be] = Go(g, _),
            [xe, Se] = Go(x, S),
            [Ce, we] = Go(C, w),
            [Te, Ee] = Go(te, D),
            [De, ke] = Go(ne, O),
            [Ae, je] = Go(re, ie),
            [H, Me] = Go(j, ae),
            [Ne, Pe] = Go(oe, se),
            [Fe, Ie] = Go(ce, le),
            [U, W] = Go(ue, de),
            [Re, ze] = Go(fe, P),
            [Be, Ve] = Go(L, me),
            [He, Ue] = Go(R, he),
            {
              baseVariant: G,
              classNames: K,
              clearLoadingGesture: We,
              gestureHandlers: Ge,
              gestureVariant: q,
              isLoading: Ke,
              setGestureState: qe,
              setVariant: J,
              variants: Je,
            } = Le({
              cycleOrder: No,
              defaultVariant: `nuSf7fOI9`,
              ref: r,
              variant: d,
              variantClassNames: Fo,
            }),
            Ye = qo(e, Je),
            { activeVariantCallback: Y, delay: Xe } = ye(G),
            Ze = Y(async (...e) => {
              J(`nuSf7fOI9`);
            }),
            Qe = Y(async (...e) => {
              J(`IPC1SSIGS`);
            }),
            X = Y(async (...e) => {
              J(`tDCHEHWPa`);
            }),
            $e = Y(async (...e) => {
              J(`d_Ze7Nez2`);
            }),
            et = Y(async (...e) => {
              J(`fCZUkpIT9`);
            }),
            tt = Y(async (...e) => {
              J(`akjDL0XdX`);
            }),
            nt = Y(async (...e) => {
              J(`C3wDUveoh`);
            }),
            rt = Y(async (...e) => {
              J(`wHllqRrD7`);
            }),
            it = Y(async (...e) => {
              J(`r6RPRRbP3`);
            }),
            at = Y(async (...e) => {
              J(`axiD12Gen`);
            }),
            ot = Y(async (...e) => {
              J(`bO2jkmxpp`);
            }),
            st = Y(async (...e) => {
              J(`vby23RBJ8`);
            }),
            ct = Y(async (...e) => {
              J(`KgCAOYUEM`);
            }),
            lt = Y(async (...e) => {
              J(`vLBDpGbjR`);
            }),
            ut = Y(async (...e) => {
              J(`BJzpwIppy`);
            }),
            dt = Y(async (...e) => {
              J(`t5j9Tza4s`);
            }),
            ft = Y(async (...e) => {
              J(`kYb640Y9q`);
            }),
            pt = Y(async (...e) => {
              J(`emTjFYLix`);
            }),
            mt = Y(async (...e) => {
              J(`rWwpzMyoJ`);
            }),
            ht = Y(async (...e) => {
              J(`GGM_7XYIr`);
            }),
            gt = Y(async (...e) => {
              J(`UMeNZw7Dm`);
            }),
            _t = I(Po),
            vt = Vo(xe),
            yt = Vo(Te),
            bt = Vo(Ae),
            xt = Vo(Ne),
            St = Vo(U),
            Ct = Vo(Be);
          return h(A, {
            id: u ?? i,
            children: h(Wo, {
              animate: Je,
              initial: !1,
              children: h(Ho, {
                value: Io,
                children: y(E.div, {
                  ...z,
                  ...Ge,
                  className: I(_t, `framer-llxzbd`, l, K),
                  "data-framer-name": `Desktop 1`,
                  layoutDependency: Ye,
                  layoutId: `nuSf7fOI9`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                    ...c,
                  },
                  ...Oo(
                    {
                      akjDL0XdX: { "data-framer-name": `Phone 2` },
                      axiD12Gen: { "data-framer-name": `Desktop 4` },
                      BJzpwIppy: { "data-framer-name": `Phone 5` },
                      bO2jkmxpp: { "data-framer-name": `Tablet 4` },
                      C3wDUveoh: { "data-framer-name": `Desktop 3` },
                      d_Ze7Nez2: { "data-framer-name": `Desktop 2` },
                      emTjFYLix: { "data-framer-name": `Phone 6` },
                      fCZUkpIT9: { "data-framer-name": `Tablet 2` },
                      GGM_7XYIr: { "data-framer-name": `Tablet 7` },
                      IPC1SSIGS: { "data-framer-name": `Tablet 1` },
                      KgCAOYUEM: { "data-framer-name": `Desktop 5` },
                      kYb640Y9q: { "data-framer-name": `Tablet 6` },
                      r6RPRRbP3: { "data-framer-name": `Phone 3` },
                      rWwpzMyoJ: { "data-framer-name": `Desktop 7` },
                      t5j9Tza4s: { "data-framer-name": `Desktop 6` },
                      tDCHEHWPa: { "data-framer-name": `Phone 1` },
                      UMeNZw7Dm: { "data-framer-name": `Phone 7` },
                      vby23RBJ8: { "data-framer-name": `Phone 4` },
                      vLBDpGbjR: { "data-framer-name": `Tablet 5` },
                      wHllqRrD7: { "data-framer-name": `Tablet 3` },
                    },
                    G,
                    q
                  ),
                  children: [
                    h(Ao, {
                      className: `framer-npejc0`,
                      "data-framer-name": `Description`,
                      layoutDependency: Ye,
                      layoutId: `QPCCntuC1`,
                      ...Oo(
                        {
                          emTjFYLix: {
                            __framer__animate: { transition: Ro },
                            __framer__animateOnce: !0,
                            __framer__enter: Lo,
                            __framer__exit: zo,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                          },
                          tDCHEHWPa: {
                            __framer__animate: { transition: Ro },
                            __framer__animateOnce: !0,
                            __framer__enter: Lo,
                            __framer__exit: zo,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                          },
                          UMeNZw7Dm: {
                            __framer__animate: { transition: Ro },
                            __framer__animateOnce: !0,
                            __framer__enter: Lo,
                            __framer__exit: zo,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                          },
                        },
                        G,
                        q
                      ),
                      children: h(V, {
                        height: (((s?.height || 753.5) - 0) * 1 - 0) * 1,
                        width: `max((${s?.width || `100vw`} - 20px) / 2, 1px)`,
                        y: (s?.y || 0) + 0 + 0,
                        ...Oo(
                          {
                            akjDL0XdX: {
                              height: 0,
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 555 + 30,
                            },
                            BJzpwIppy: {
                              height: 0,
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 555 + 30,
                            },
                            bO2jkmxpp: { height: (((s?.height || 703.5) - 0) * 1 - 0) * 1 },
                            emTjFYLix: {
                              height: 0,
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 555 + 0,
                            },
                            fCZUkpIT9: { height: (((s?.height || 703.5) - 0) * 1 - 0) * 1 },
                            GGM_7XYIr: { height: (((s?.height || 703.5) - 0) * 1 - 0) * 1 },
                            IPC1SSIGS: { height: (((s?.height || 703.5) - 0) * 1 - 0) * 1 },
                            kYb640Y9q: { height: (((s?.height || 703.5) - 0) * 1 - 0) * 1 },
                            r6RPRRbP3: {
                              height: 0,
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 555 + 30,
                            },
                            tDCHEHWPa: {
                              height: 0,
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 555 + 0,
                            },
                            UMeNZw7Dm: {
                              height: 0,
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 555 + 0,
                            },
                            vby23RBJ8: {
                              height: 0,
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 555 + 30,
                            },
                            vLBDpGbjR: { height: (((s?.height || 703.5) - 0) * 1 - 0) * 1 },
                            wHllqRrD7: { height: (((s?.height || 703.5) - 0) * 1 - 0) * 1 },
                          },
                          G,
                          q
                        ),
                        children: h(F, {
                          className: `framer-gdpr9p-container`,
                          layoutDependency: Ye,
                          layoutId: `ovh0DMPAb-container`,
                          nodeId: `ovh0DMPAb`,
                          rendersWithMotion: !0,
                          scopeId: `oG7nEqkJ2`,
                          children: h(Ga, {
                            height: `100%`,
                            id: `ovh0DMPAb`,
                            iU68ScBCY: ve,
                            layoutId: `ovh0DMPAb`,
                            M6makQZJz: B,
                            oniU68ScBCYChange: be,
                            onM6makQZJzChange: _e,
                            OtapoObdF: Bo(f),
                            style: { height: `100%`, width: `100%` },
                            variant: Q(`fGcQ8iVZH`),
                            width: `100%`,
                            ...Oo(
                              {
                                akjDL0XdX: {
                                  iU68ScBCY: Ce,
                                  M6makQZJz: xe,
                                  oniU68ScBCYChange: we,
                                  onM6makQZJzChange: Se,
                                  OtapoObdF: Bo(b),
                                  variant: Q(`ld8sPgtuq`),
                                },
                                axiD12Gen: {
                                  iU68ScBCY: H,
                                  M6makQZJz: Ae,
                                  oniU68ScBCYChange: Me,
                                  onM6makQZJzChange: je,
                                  OtapoObdF: Bo(k),
                                },
                                BJzpwIppy: {
                                  iU68ScBCY: Fe,
                                  M6makQZJz: Ne,
                                  oniU68ScBCYChange: Ie,
                                  onM6makQZJzChange: Pe,
                                  OtapoObdF: Bo(M),
                                  variant: Q(`ld8sPgtuq`),
                                },
                                bO2jkmxpp: {
                                  iU68ScBCY: H,
                                  M6makQZJz: Ae,
                                  oniU68ScBCYChange: Me,
                                  onM6makQZJzChange: je,
                                  OtapoObdF: Bo(k),
                                },
                                C3wDUveoh: {
                                  iU68ScBCY: De,
                                  M6makQZJz: Te,
                                  oniU68ScBCYChange: ke,
                                  onM6makQZJzChange: Ee,
                                  OtapoObdF: Bo(T),
                                },
                                d_Ze7Nez2: {
                                  iU68ScBCY: Ce,
                                  M6makQZJz: xe,
                                  oniU68ScBCYChange: we,
                                  onM6makQZJzChange: Se,
                                  OtapoObdF: Bo(b),
                                },
                                emTjFYLix: {
                                  iU68ScBCY: Re,
                                  M6makQZJz: U,
                                  oniU68ScBCYChange: ze,
                                  onM6makQZJzChange: W,
                                  OtapoObdF: Bo(N),
                                  variant: Q(`ld8sPgtuq`),
                                },
                                fCZUkpIT9: {
                                  iU68ScBCY: Ce,
                                  M6makQZJz: xe,
                                  oniU68ScBCYChange: we,
                                  onM6makQZJzChange: Se,
                                  OtapoObdF: Bo(b),
                                },
                                GGM_7XYIr: {
                                  iU68ScBCY: He,
                                  M6makQZJz: Be,
                                  oniU68ScBCYChange: Ue,
                                  onM6makQZJzChange: Ve,
                                  OtapoObdF: Bo(pe),
                                },
                                KgCAOYUEM: {
                                  iU68ScBCY: Fe,
                                  M6makQZJz: Ne,
                                  oniU68ScBCYChange: Ie,
                                  onM6makQZJzChange: Pe,
                                  OtapoObdF: Bo(M),
                                },
                                kYb640Y9q: {
                                  iU68ScBCY: Re,
                                  M6makQZJz: U,
                                  oniU68ScBCYChange: ze,
                                  onM6makQZJzChange: W,
                                  OtapoObdF: Bo(N),
                                },
                                r6RPRRbP3: {
                                  iU68ScBCY: De,
                                  M6makQZJz: Te,
                                  oniU68ScBCYChange: ke,
                                  onM6makQZJzChange: Ee,
                                  OtapoObdF: Bo(T),
                                  variant: Q(`ld8sPgtuq`),
                                },
                                rWwpzMyoJ: {
                                  iU68ScBCY: He,
                                  M6makQZJz: Be,
                                  oniU68ScBCYChange: Ue,
                                  onM6makQZJzChange: Ve,
                                  OtapoObdF: Bo(pe),
                                },
                                t5j9Tza4s: {
                                  iU68ScBCY: Re,
                                  M6makQZJz: U,
                                  oniU68ScBCYChange: ze,
                                  onM6makQZJzChange: W,
                                  OtapoObdF: Bo(N),
                                },
                                tDCHEHWPa: { variant: Q(`ld8sPgtuq`) },
                                UMeNZw7Dm: {
                                  iU68ScBCY: He,
                                  M6makQZJz: Be,
                                  oniU68ScBCYChange: Ue,
                                  onM6makQZJzChange: Ve,
                                  OtapoObdF: Bo(pe),
                                  variant: Q(`ld8sPgtuq`),
                                },
                                vby23RBJ8: {
                                  iU68ScBCY: H,
                                  M6makQZJz: Ae,
                                  oniU68ScBCYChange: Me,
                                  onM6makQZJzChange: je,
                                  OtapoObdF: Bo(k),
                                  variant: Q(`ld8sPgtuq`),
                                },
                                vLBDpGbjR: {
                                  iU68ScBCY: Fe,
                                  M6makQZJz: Ne,
                                  oniU68ScBCYChange: Ie,
                                  onM6makQZJzChange: Pe,
                                  OtapoObdF: Bo(M),
                                },
                                wHllqRrD7: {
                                  iU68ScBCY: De,
                                  M6makQZJz: Te,
                                  oniU68ScBCYChange: ke,
                                  onM6makQZJzChange: Ee,
                                  OtapoObdF: Bo(T),
                                },
                              },
                              G,
                              q
                            ),
                          }),
                        }),
                      }),
                    }),
                    y(E.div, {
                      className: `framer-19ew3l8`,
                      "data-framer-name": `Items`,
                      layoutDependency: Ye,
                      layoutId: `veBQiRX0F`,
                      children: [
                        h(E.div, {
                          className: `framer-12uefpy`,
                          "data-framer-name": `Tag`,
                          layoutDependency: Ye,
                          layoutId: `CeSqiuNFa`,
                          children: h(V, {
                            height: 31,
                            y: (s?.y || 0) + 0 + 125 + 186 + 0,
                            ...Oo(
                              {
                                akjDL0XdX: { y: (s?.y || 0) + 0 + 0 + 0 + 186 + 0 },
                                BJzpwIppy: { y: (s?.y || 0) + 0 + 0 + 0 + 186 + 0 },
                                bO2jkmxpp: { y: (s?.y || 0) + 0 + 100 + 186 + 0 },
                                emTjFYLix: { y: (s?.y || 0) + 0 + 0 + 0 + 186 + 0 },
                                fCZUkpIT9: { y: (s?.y || 0) + 0 + 100 + 186 + 0 },
                                GGM_7XYIr: { y: (s?.y || 0) + 0 + 100 + 186 + 0 },
                                IPC1SSIGS: { y: (s?.y || 0) + 0 + 100 + 186 + 0 },
                                kYb640Y9q: { y: (s?.y || 0) + 0 + 100 + 186 + 0 },
                                r6RPRRbP3: { y: (s?.y || 0) + 0 + 0 + 0 + 186 + 0 },
                                tDCHEHWPa: { y: (s?.y || 0) + 0 + 0 + 0 + 186 + 0 },
                                UMeNZw7Dm: { y: (s?.y || 0) + 0 + 0 + 0 + 186 + 0 },
                                vby23RBJ8: { y: (s?.y || 0) + 0 + 0 + 0 + 186 + 0 },
                                vLBDpGbjR: { y: (s?.y || 0) + 0 + 100 + 186 + 0 },
                                wHllqRrD7: { y: (s?.y || 0) + 0 + 100 + 186 + 0 },
                              },
                              G,
                              q
                            ),
                            children: h(F, {
                              className: `framer-k2fs8p-container`,
                              layoutDependency: Ye,
                              layoutId: `DzuvFEdqS-container`,
                              nodeId: `DzuvFEdqS`,
                              rendersWithMotion: !0,
                              scopeId: `oG7nEqkJ2`,
                              children: h(Eo, {
                                fetASprUN: `Courses We Help You Choose`,
                                height: `100%`,
                                id: `DzuvFEdqS`,
                                layoutId: `DzuvFEdqS`,
                                variant: Q(`Fd2nh3mVM`),
                                vbt93bo2d: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        h(V, {
                          height: 62,
                          width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 40px)`,
                          y: (s?.y || 0) + 0 + 125 + 257,
                          ...Oo(
                            {
                              akjDL0XdX: {
                                width: s?.width || `100vw`,
                                y: (s?.y || 0) + 0 + 0 + 0 + 267,
                              },
                              BJzpwIppy: {
                                width: s?.width || `100vw`,
                                y: (s?.y || 0) + 0 + 0 + 0 + 267,
                              },
                              bO2jkmxpp: {
                                width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                y: (s?.y || 0) + 0 + 100 + 257,
                              },
                              emTjFYLix: {
                                width: s?.width || `100vw`,
                                y: (s?.y || 0) + 0 + 0 + 0 + 267,
                              },
                              fCZUkpIT9: {
                                width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                y: (s?.y || 0) + 0 + 100 + 257,
                              },
                              GGM_7XYIr: {
                                width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                y: (s?.y || 0) + 0 + 100 + 257,
                              },
                              IPC1SSIGS: {
                                width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                y: (s?.y || 0) + 0 + 100 + 257,
                              },
                              kYb640Y9q: {
                                width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                y: (s?.y || 0) + 0 + 100 + 257,
                              },
                              r6RPRRbP3: {
                                width: s?.width || `100vw`,
                                y: (s?.y || 0) + 0 + 0 + 0 + 267,
                              },
                              tDCHEHWPa: {
                                width: s?.width || `100vw`,
                                y: (s?.y || 0) + 0 + 0 + 0 + 267,
                              },
                              UMeNZw7Dm: {
                                width: s?.width || `100vw`,
                                y: (s?.y || 0) + 0 + 0 + 0 + 267,
                              },
                              vby23RBJ8: {
                                width: s?.width || `100vw`,
                                y: (s?.y || 0) + 0 + 0 + 0 + 267,
                              },
                              vLBDpGbjR: {
                                width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                y: (s?.y || 0) + 0 + 100 + 257,
                              },
                              wHllqRrD7: {
                                width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                y: (s?.y || 0) + 0 + 100 + 257,
                              },
                            },
                            G,
                            q
                          ),
                          children: h(F, {
                            className: `framer-1l6jclh-container`,
                            layoutDependency: Ye,
                            layoutId: `FASFVmWU7-container`,
                            nodeId: `FASFVmWU7`,
                            rendersWithMotion: !0,
                            scopeId: `oG7nEqkJ2`,
                            children: h(lo, {
                              fErYKCICq: B,
                              height: `100%`,
                              id: `FASFVmWU7`,
                              KrXbsPILD: Ze,
                              layoutId: `FASFVmWU7`,
                              onfErYKCICqChange: _e,
                              style: { width: `100%` },
                              variant: Q(`F9_jnIQL1`),
                              width: `100%`,
                              ...Oo(
                                {
                                  akjDL0XdX: { KrXbsPILD: X, variant: Q(`w1nmO22fV`) },
                                  axiD12Gen: { variant: Q(`lITw2pRoa`) },
                                  BJzpwIppy: { KrXbsPILD: X, variant: Q(`w1nmO22fV`) },
                                  bO2jkmxpp: { KrXbsPILD: Qe, variant: Q(`fCiQExCJF`) },
                                  C3wDUveoh: { variant: Q(`lITw2pRoa`) },
                                  d_Ze7Nez2: { variant: Q(`lITw2pRoa`) },
                                  emTjFYLix: { KrXbsPILD: X, variant: Q(`w1nmO22fV`) },
                                  fCZUkpIT9: { KrXbsPILD: Qe, variant: Q(`fCiQExCJF`) },
                                  GGM_7XYIr: { KrXbsPILD: Qe, variant: Q(`fCiQExCJF`) },
                                  IPC1SSIGS: { KrXbsPILD: Qe, variant: Q(`OlLjydPwL`) },
                                  KgCAOYUEM: { variant: Q(`lITw2pRoa`) },
                                  kYb640Y9q: { KrXbsPILD: Qe, variant: Q(`fCiQExCJF`) },
                                  r6RPRRbP3: { KrXbsPILD: X, variant: Q(`w1nmO22fV`) },
                                  rWwpzMyoJ: { variant: Q(`lITw2pRoa`) },
                                  t5j9Tza4s: { variant: Q(`lITw2pRoa`) },
                                  tDCHEHWPa: { KrXbsPILD: X, variant: Q(`vTC5JV3o_`) },
                                  UMeNZw7Dm: { KrXbsPILD: X, variant: Q(`w1nmO22fV`) },
                                  vby23RBJ8: { KrXbsPILD: X, variant: Q(`w1nmO22fV`) },
                                  vLBDpGbjR: { KrXbsPILD: Qe, variant: Q(`fCiQExCJF`) },
                                  wHllqRrD7: { KrXbsPILD: Qe, variant: Q(`fCiQExCJF`) },
                                },
                                G,
                                q
                              ),
                            }),
                          }),
                        }),
                        vt !== !1 &&
                          h(V, {
                            height: 62,
                            width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 40px)`,
                            y: (s?.y || 0) + 0 + 125 + 319,
                            ...Oo(
                              {
                                akjDL0XdX: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                BJzpwIppy: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                bO2jkmxpp: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                emTjFYLix: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                fCZUkpIT9: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                GGM_7XYIr: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                IPC1SSIGS: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                kYb640Y9q: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                r6RPRRbP3: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                tDCHEHWPa: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                UMeNZw7Dm: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                vby23RBJ8: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                vLBDpGbjR: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                wHllqRrD7: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                              },
                              G,
                              q
                            ),
                            children: h(F, {
                              className: `framer-7ccltb-container`,
                              layoutDependency: Ye,
                              layoutId: `BJpoX2Hkh-container`,
                              nodeId: `BJpoX2Hkh`,
                              rendersWithMotion: !0,
                              scopeId: `oG7nEqkJ2`,
                              children: h(lo, {
                                fErYKCICq: xe,
                                height: `100%`,
                                id: `BJpoX2Hkh`,
                                KrXbsPILD: $e,
                                layoutId: `BJpoX2Hkh`,
                                onfErYKCICqChange: Se,
                                style: { width: `100%` },
                                variant: Q(`lITw2pRoa`),
                                width: `100%`,
                                ...Oo(
                                  {
                                    akjDL0XdX: { KrXbsPILD: tt, variant: Q(`vTC5JV3o_`) },
                                    BJzpwIppy: { KrXbsPILD: tt, variant: Q(`w1nmO22fV`) },
                                    bO2jkmxpp: { KrXbsPILD: et, variant: Q(`fCiQExCJF`) },
                                    d_Ze7Nez2: { variant: Q(`F9_jnIQL1`) },
                                    emTjFYLix: { KrXbsPILD: tt, variant: Q(`w1nmO22fV`) },
                                    fCZUkpIT9: { KrXbsPILD: et, variant: Q(`OlLjydPwL`) },
                                    GGM_7XYIr: { KrXbsPILD: et, variant: Q(`fCiQExCJF`) },
                                    IPC1SSIGS: { KrXbsPILD: et, variant: Q(`fCiQExCJF`) },
                                    kYb640Y9q: { KrXbsPILD: et, variant: Q(`fCiQExCJF`) },
                                    r6RPRRbP3: { KrXbsPILD: tt, variant: Q(`w1nmO22fV`) },
                                    tDCHEHWPa: { KrXbsPILD: tt, variant: Q(`w1nmO22fV`) },
                                    UMeNZw7Dm: { KrXbsPILD: tt, variant: Q(`w1nmO22fV`) },
                                    vby23RBJ8: { KrXbsPILD: tt, variant: Q(`w1nmO22fV`) },
                                    vLBDpGbjR: { KrXbsPILD: et, variant: Q(`fCiQExCJF`) },
                                    wHllqRrD7: { KrXbsPILD: et, variant: Q(`fCiQExCJF`) },
                                  },
                                  G,
                                  q
                                ),
                              }),
                            }),
                          }),
                        yt !== !1 &&
                          h(V, {
                            height: 62,
                            width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 40px)`,
                            y: (s?.y || 0) + 0 + 125 + 319,
                            ...Oo(
                              {
                                akjDL0XdX: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                BJzpwIppy: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                bO2jkmxpp: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                emTjFYLix: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                fCZUkpIT9: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                GGM_7XYIr: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                IPC1SSIGS: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                kYb640Y9q: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                r6RPRRbP3: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                tDCHEHWPa: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                UMeNZw7Dm: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                vby23RBJ8: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                vLBDpGbjR: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                wHllqRrD7: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                              },
                              G,
                              q
                            ),
                            children: h(F, {
                              className: `framer-2u1h7s-container`,
                              layoutDependency: Ye,
                              layoutId: `s4Kokcf4y-container`,
                              nodeId: `s4Kokcf4y`,
                              rendersWithMotion: !0,
                              scopeId: `oG7nEqkJ2`,
                              children: h(lo, {
                                fErYKCICq: Te,
                                height: `100%`,
                                id: `s4Kokcf4y`,
                                KrXbsPILD: nt,
                                layoutId: `s4Kokcf4y`,
                                onfErYKCICqChange: Ee,
                                style: { width: `100%` },
                                variant: Q(`lITw2pRoa`),
                                width: `100%`,
                                ...Oo(
                                  {
                                    akjDL0XdX: { KrXbsPILD: it, variant: Q(`w1nmO22fV`) },
                                    BJzpwIppy: { KrXbsPILD: it, variant: Q(`w1nmO22fV`) },
                                    bO2jkmxpp: { KrXbsPILD: rt, variant: Q(`fCiQExCJF`) },
                                    C3wDUveoh: { variant: Q(`F9_jnIQL1`) },
                                    emTjFYLix: { KrXbsPILD: it, variant: Q(`w1nmO22fV`) },
                                    fCZUkpIT9: { KrXbsPILD: rt, variant: Q(`fCiQExCJF`) },
                                    GGM_7XYIr: { KrXbsPILD: rt, variant: Q(`fCiQExCJF`) },
                                    IPC1SSIGS: { KrXbsPILD: rt, variant: Q(`fCiQExCJF`) },
                                    kYb640Y9q: { KrXbsPILD: rt, variant: Q(`fCiQExCJF`) },
                                    r6RPRRbP3: { KrXbsPILD: it, variant: Q(`vTC5JV3o_`) },
                                    tDCHEHWPa: { KrXbsPILD: it, variant: Q(`w1nmO22fV`) },
                                    UMeNZw7Dm: { KrXbsPILD: it, variant: Q(`w1nmO22fV`) },
                                    vby23RBJ8: { KrXbsPILD: it, variant: Q(`w1nmO22fV`) },
                                    vLBDpGbjR: { KrXbsPILD: rt, variant: Q(`fCiQExCJF`) },
                                    wHllqRrD7: { KrXbsPILD: rt, variant: Q(`OlLjydPwL`) },
                                  },
                                  G,
                                  q
                                ),
                              }),
                            }),
                          }),
                        bt !== !1 &&
                          h(V, {
                            height: 62,
                            width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 40px)`,
                            y: (s?.y || 0) + 0 + 125 + 319,
                            ...Oo(
                              {
                                akjDL0XdX: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                BJzpwIppy: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                bO2jkmxpp: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                emTjFYLix: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                fCZUkpIT9: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                GGM_7XYIr: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                IPC1SSIGS: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                kYb640Y9q: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                r6RPRRbP3: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                tDCHEHWPa: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                UMeNZw7Dm: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                vby23RBJ8: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                vLBDpGbjR: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                wHllqRrD7: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                              },
                              G,
                              q
                            ),
                            children: h(F, {
                              className: `framer-90dpse-container`,
                              layoutDependency: Ye,
                              layoutId: `QGZ4D90Zi-container`,
                              nodeId: `QGZ4D90Zi`,
                              rendersWithMotion: !0,
                              scopeId: `oG7nEqkJ2`,
                              children: h(lo, {
                                fErYKCICq: Ae,
                                height: `100%`,
                                id: `QGZ4D90Zi`,
                                KrXbsPILD: at,
                                layoutId: `QGZ4D90Zi`,
                                onfErYKCICqChange: je,
                                style: { width: `100%` },
                                variant: Q(`lITw2pRoa`),
                                width: `100%`,
                                ...Oo(
                                  {
                                    akjDL0XdX: { KrXbsPILD: st, variant: Q(`w1nmO22fV`) },
                                    axiD12Gen: { variant: Q(`F9_jnIQL1`) },
                                    BJzpwIppy: { KrXbsPILD: st, variant: Q(`w1nmO22fV`) },
                                    bO2jkmxpp: { KrXbsPILD: ot, variant: Q(`OlLjydPwL`) },
                                    emTjFYLix: { KrXbsPILD: st, variant: Q(`w1nmO22fV`) },
                                    fCZUkpIT9: { KrXbsPILD: ot, variant: Q(`fCiQExCJF`) },
                                    GGM_7XYIr: { KrXbsPILD: ot, variant: Q(`fCiQExCJF`) },
                                    IPC1SSIGS: { KrXbsPILD: ot, variant: Q(`fCiQExCJF`) },
                                    kYb640Y9q: { KrXbsPILD: ot, variant: Q(`fCiQExCJF`) },
                                    r6RPRRbP3: { KrXbsPILD: st, variant: Q(`w1nmO22fV`) },
                                    tDCHEHWPa: { KrXbsPILD: st, variant: Q(`w1nmO22fV`) },
                                    UMeNZw7Dm: { KrXbsPILD: st, variant: Q(`w1nmO22fV`) },
                                    vby23RBJ8: { KrXbsPILD: st, variant: Q(`vTC5JV3o_`) },
                                    vLBDpGbjR: { KrXbsPILD: ot, variant: Q(`fCiQExCJF`) },
                                    wHllqRrD7: { KrXbsPILD: ot, variant: Q(`fCiQExCJF`) },
                                  },
                                  G,
                                  q
                                ),
                              }),
                            }),
                          }),
                        xt !== !1 &&
                          h(V, {
                            height: 62,
                            width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 40px)`,
                            y: (s?.y || 0) + 0 + 125 + 319,
                            ...Oo(
                              {
                                akjDL0XdX: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                BJzpwIppy: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                bO2jkmxpp: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                emTjFYLix: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                fCZUkpIT9: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                GGM_7XYIr: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                IPC1SSIGS: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                kYb640Y9q: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                r6RPRRbP3: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                tDCHEHWPa: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                UMeNZw7Dm: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                vby23RBJ8: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                vLBDpGbjR: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                wHllqRrD7: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                              },
                              G,
                              q
                            ),
                            children: h(F, {
                              className: `framer-purux7-container`,
                              layoutDependency: Ye,
                              layoutId: `JSkloFUkJ-container`,
                              nodeId: `JSkloFUkJ`,
                              rendersWithMotion: !0,
                              scopeId: `oG7nEqkJ2`,
                              children: h(lo, {
                                fErYKCICq: Ne,
                                height: `100%`,
                                id: `JSkloFUkJ`,
                                KrXbsPILD: ct,
                                layoutId: `JSkloFUkJ`,
                                onfErYKCICqChange: Pe,
                                style: { width: `100%` },
                                variant: Q(`lITw2pRoa`),
                                width: `100%`,
                                ...Oo(
                                  {
                                    akjDL0XdX: { KrXbsPILD: ut, variant: Q(`w1nmO22fV`) },
                                    BJzpwIppy: { KrXbsPILD: ut, variant: Q(`vTC5JV3o_`) },
                                    bO2jkmxpp: { KrXbsPILD: lt, variant: Q(`fCiQExCJF`) },
                                    emTjFYLix: { KrXbsPILD: ut, variant: Q(`w1nmO22fV`) },
                                    fCZUkpIT9: { KrXbsPILD: lt, variant: Q(`fCiQExCJF`) },
                                    GGM_7XYIr: { KrXbsPILD: lt, variant: Q(`fCiQExCJF`) },
                                    IPC1SSIGS: { KrXbsPILD: lt, variant: Q(`fCiQExCJF`) },
                                    KgCAOYUEM: { variant: Q(`F9_jnIQL1`) },
                                    kYb640Y9q: { KrXbsPILD: lt, variant: Q(`fCiQExCJF`) },
                                    r6RPRRbP3: { KrXbsPILD: ut, variant: Q(`w1nmO22fV`) },
                                    tDCHEHWPa: { KrXbsPILD: ut, variant: Q(`w1nmO22fV`) },
                                    UMeNZw7Dm: { KrXbsPILD: ut, variant: Q(`w1nmO22fV`) },
                                    vby23RBJ8: { KrXbsPILD: ut, variant: Q(`w1nmO22fV`) },
                                    vLBDpGbjR: { KrXbsPILD: lt, variant: Q(`OlLjydPwL`) },
                                    wHllqRrD7: { KrXbsPILD: lt, variant: Q(`fCiQExCJF`) },
                                  },
                                  G,
                                  q
                                ),
                              }),
                            }),
                          }),
                        St !== !1 &&
                          h(V, {
                            height: 62,
                            width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 40px)`,
                            y: (s?.y || 0) + 0 + 125 + 319,
                            ...Oo(
                              {
                                akjDL0XdX: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                BJzpwIppy: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                bO2jkmxpp: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                emTjFYLix: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                fCZUkpIT9: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                GGM_7XYIr: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                IPC1SSIGS: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                kYb640Y9q: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                r6RPRRbP3: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                tDCHEHWPa: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                UMeNZw7Dm: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                vby23RBJ8: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                vLBDpGbjR: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                wHllqRrD7: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                              },
                              G,
                              q
                            ),
                            children: h(F, {
                              className: `framer-5o7k5r-container`,
                              layoutDependency: Ye,
                              layoutId: `RnsTpp02v-container`,
                              nodeId: `RnsTpp02v`,
                              rendersWithMotion: !0,
                              scopeId: `oG7nEqkJ2`,
                              children: h(lo, {
                                fErYKCICq: U,
                                height: `100%`,
                                id: `RnsTpp02v`,
                                KrXbsPILD: dt,
                                layoutId: `RnsTpp02v`,
                                onfErYKCICqChange: W,
                                style: { width: `100%` },
                                variant: Q(`lITw2pRoa`),
                                width: `100%`,
                                ...Oo(
                                  {
                                    akjDL0XdX: { KrXbsPILD: pt, variant: Q(`w1nmO22fV`) },
                                    BJzpwIppy: { KrXbsPILD: pt, variant: Q(`w1nmO22fV`) },
                                    bO2jkmxpp: { KrXbsPILD: ft, variant: Q(`fCiQExCJF`) },
                                    emTjFYLix: { KrXbsPILD: pt, variant: Q(`vTC5JV3o_`) },
                                    fCZUkpIT9: { KrXbsPILD: ft, variant: Q(`fCiQExCJF`) },
                                    GGM_7XYIr: { KrXbsPILD: ft, variant: Q(`fCiQExCJF`) },
                                    IPC1SSIGS: { KrXbsPILD: ft, variant: Q(`fCiQExCJF`) },
                                    kYb640Y9q: { KrXbsPILD: ft, variant: Q(`OlLjydPwL`) },
                                    r6RPRRbP3: { KrXbsPILD: pt, variant: Q(`w1nmO22fV`) },
                                    t5j9Tza4s: { variant: Q(`F9_jnIQL1`) },
                                    tDCHEHWPa: { KrXbsPILD: pt, variant: Q(`w1nmO22fV`) },
                                    UMeNZw7Dm: { KrXbsPILD: pt, variant: Q(`w1nmO22fV`) },
                                    vby23RBJ8: { KrXbsPILD: pt, variant: Q(`w1nmO22fV`) },
                                    vLBDpGbjR: { KrXbsPILD: ft, variant: Q(`fCiQExCJF`) },
                                    wHllqRrD7: { KrXbsPILD: ft, variant: Q(`fCiQExCJF`) },
                                  },
                                  G,
                                  q
                                ),
                              }),
                            }),
                          }),
                        Ct !== !1 &&
                          h(V, {
                            height: 62,
                            width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 40px)`,
                            y: (s?.y || 0) + 0 + 125 + 319,
                            ...Oo(
                              {
                                akjDL0XdX: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                BJzpwIppy: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                bO2jkmxpp: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                emTjFYLix: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                fCZUkpIT9: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                GGM_7XYIr: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                IPC1SSIGS: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                kYb640Y9q: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                r6RPRRbP3: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                tDCHEHWPa: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                UMeNZw7Dm: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                vby23RBJ8: {
                                  width: s?.width || `100vw`,
                                  y: (s?.y || 0) + 0 + 0 + 0 + 329,
                                },
                                vLBDpGbjR: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                                wHllqRrD7: {
                                  width: `calc(max((${s?.width || `100vw`} - 20px) / 2, 1px) - 20px)`,
                                  y: (s?.y || 0) + 0 + 100 + 319,
                                },
                              },
                              G,
                              q
                            ),
                            children: h(F, {
                              className: `framer-1ud011h-container`,
                              layoutDependency: Ye,
                              layoutId: `rF1MZAvI9-container`,
                              nodeId: `rF1MZAvI9`,
                              rendersWithMotion: !0,
                              scopeId: `oG7nEqkJ2`,
                              children: h(lo, {
                                fErYKCICq: Be,
                                height: `100%`,
                                id: `rF1MZAvI9`,
                                KrXbsPILD: mt,
                                layoutId: `rF1MZAvI9`,
                                onfErYKCICqChange: Ve,
                                style: { width: `100%` },
                                variant: Q(`lITw2pRoa`),
                                width: `100%`,
                                ...Oo(
                                  {
                                    akjDL0XdX: { KrXbsPILD: gt, variant: Q(`w1nmO22fV`) },
                                    BJzpwIppy: { KrXbsPILD: gt, variant: Q(`w1nmO22fV`) },
                                    bO2jkmxpp: { KrXbsPILD: ht, variant: Q(`fCiQExCJF`) },
                                    emTjFYLix: { KrXbsPILD: gt, variant: Q(`w1nmO22fV`) },
                                    fCZUkpIT9: { KrXbsPILD: ht, variant: Q(`fCiQExCJF`) },
                                    GGM_7XYIr: { KrXbsPILD: ht, variant: Q(`OlLjydPwL`) },
                                    IPC1SSIGS: { KrXbsPILD: ht, variant: Q(`fCiQExCJF`) },
                                    kYb640Y9q: { KrXbsPILD: ht, variant: Q(`fCiQExCJF`) },
                                    r6RPRRbP3: { KrXbsPILD: gt, variant: Q(`w1nmO22fV`) },
                                    rWwpzMyoJ: { variant: Q(`F9_jnIQL1`) },
                                    tDCHEHWPa: { KrXbsPILD: gt, variant: Q(`w1nmO22fV`) },
                                    UMeNZw7Dm: { KrXbsPILD: gt, variant: Q(`vTC5JV3o_`) },
                                    vby23RBJ8: { KrXbsPILD: gt, variant: Q(`w1nmO22fV`) },
                                    vLBDpGbjR: { KrXbsPILD: lt, variant: Q(`fCiQExCJF`) },
                                    wHllqRrD7: { KrXbsPILD: ht, variant: Q(`fCiQExCJF`) },
                                  },
                                  G,
                                  q
                                ),
                              }),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-w1wLW.framer-8qai6w, .framer-w1wLW .framer-8qai6w { display: block; }`,
          `.framer-w1wLW.framer-llxzbd { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1128px; }`,
          `.framer-w1wLW .framer-npejc0 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 4 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-w1wLW .framer-gdpr9p-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `.framer-w1wLW .framer-19ew3l8 { align-content: flex-start; align-items: flex-start; display: flex; flex: 4 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 125px 0px 125px 40px; position: relative; width: 1px; }`,
          `.framer-w1wLW .framer-12uefpy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 40px 0px; position: relative; width: 100%; }`,
          `.framer-w1wLW .framer-k2fs8p-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-w1wLW .framer-1l6jclh-container, .framer-w1wLW .framer-7ccltb-container, .framer-w1wLW .framer-2u1h7s-container, .framer-w1wLW .framer-90dpse-container, .framer-w1wLW .framer-purux7-container, .framer-w1wLW .framer-5o7k5r-container, .framer-w1wLW .framer-1ud011h-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-w1wLW.framer-v-1lbwra1 .framer-npejc0, .framer-w1wLW.framer-v-1797kl5 .framer-npejc0, .framer-w1wLW.framer-v-fogx62 .framer-npejc0, .framer-w1wLW.framer-v-19k7gy8 .framer-npejc0, .framer-w1wLW.framer-v-1jucthq .framer-npejc0, .framer-w1wLW.framer-v-ma9jy0 .framer-npejc0, .framer-w1wLW.framer-v-1r58ldb .framer-npejc0 { flex: 3 0 0px; }`,
          `.framer-w1wLW.framer-v-1lbwra1 .framer-19ew3l8, .framer-w1wLW.framer-v-1797kl5 .framer-19ew3l8, .framer-w1wLW.framer-v-fogx62 .framer-19ew3l8, .framer-w1wLW.framer-v-19k7gy8 .framer-19ew3l8, .framer-w1wLW.framer-v-1jucthq .framer-19ew3l8, .framer-w1wLW.framer-v-ma9jy0 .framer-19ew3l8, .framer-w1wLW.framer-v-1r58ldb .framer-19ew3l8 { flex: 3 0 0px; padding: 100px 0px 100px 20px; }`,
          `.framer-w1wLW.framer-v-1jucthq .framer-12uefpy { order: 0; }`,
          `.framer-w1wLW.framer-v-1jucthq .framer-1l6jclh-container { order: 1; }`,
          `.framer-w1wLW.framer-v-1jucthq .framer-7ccltb-container { order: 2; }`,
          `.framer-w1wLW.framer-v-1jucthq .framer-2u1h7s-container { order: 3; }`,
          `.framer-w1wLW.framer-v-1jucthq .framer-90dpse-container { order: 4; }`,
          `.framer-w1wLW.framer-v-1jucthq .framer-purux7-container { order: 5; }`,
          `.framer-w1wLW.framer-v-1jucthq .framer-5o7k5r-container { order: 6; }`,
          `.framer-w1wLW.framer-v-1jucthq .framer-1ud011h-container { order: 7; }`,
          `.framer-w1wLW.framer-v-15cz56s.framer-llxzbd, .framer-w1wLW.framer-v-99ccxw.framer-llxzbd, .framer-w1wLW.framer-v-cb02v6.framer-llxzbd, .framer-w1wLW.framer-v-10o23x7.framer-llxzbd, .framer-w1wLW.framer-v-15uzim.framer-llxzbd, .framer-w1wLW.framer-v-ndmf1t.framer-llxzbd, .framer-w1wLW.framer-v-ctas4w.framer-llxzbd { flex-direction: column; gap: 40px; width: 400px; }`,
          `.framer-w1wLW.framer-v-15cz56s .framer-npejc0, .framer-w1wLW.framer-v-ndmf1t .framer-npejc0, .framer-w1wLW.framer-v-ctas4w .framer-npejc0 { align-self: unset; flex: none; height: min-content; order: 1; width: 100%; }`,
          `.framer-w1wLW.framer-v-15cz56s .framer-gdpr9p-container, .framer-w1wLW.framer-v-99ccxw .framer-gdpr9p-container, .framer-w1wLW.framer-v-cb02v6 .framer-gdpr9p-container, .framer-w1wLW.framer-v-10o23x7 .framer-gdpr9p-container, .framer-w1wLW.framer-v-15uzim .framer-gdpr9p-container, .framer-w1wLW.framer-v-ndmf1t .framer-gdpr9p-container, .framer-w1wLW.framer-v-ctas4w .framer-gdpr9p-container { align-self: stretch; flex: none; height: auto; width: 100%; }`,
          `.framer-w1wLW.framer-v-15cz56s .framer-19ew3l8, .framer-w1wLW.framer-v-99ccxw .framer-19ew3l8, .framer-w1wLW.framer-v-cb02v6 .framer-19ew3l8, .framer-w1wLW.framer-v-10o23x7 .framer-19ew3l8, .framer-w1wLW.framer-v-15uzim .framer-19ew3l8, .framer-w1wLW.framer-v-ndmf1t .framer-19ew3l8, .framer-w1wLW.framer-v-ctas4w .framer-19ew3l8 { flex: none; order: 0; padding: 0px; width: 100%; }`,
          `.framer-w1wLW.framer-v-15cz56s .framer-12uefpy, .framer-w1wLW.framer-v-99ccxw .framer-12uefpy, .framer-w1wLW.framer-v-cb02v6 .framer-12uefpy, .framer-w1wLW.framer-v-10o23x7 .framer-12uefpy, .framer-w1wLW.framer-v-15uzim .framer-12uefpy, .framer-w1wLW.framer-v-ndmf1t .framer-12uefpy, .framer-w1wLW.framer-v-ctas4w .framer-12uefpy { padding: 0px 0px 50px 0px; }`,
          `.framer-w1wLW.framer-v-99ccxw .framer-npejc0, .framer-w1wLW.framer-v-cb02v6 .framer-npejc0, .framer-w1wLW.framer-v-10o23x7 .framer-npejc0, .framer-w1wLW.framer-v-15uzim .framer-npejc0 { align-self: unset; flex: none; height: min-content; order: 1; padding: 30px 0px 0px 0px; width: 100%; }`,
        ],
        `framer-w1wLW`
      )),
      (Jo.displayName = `Industry Items`),
      (Jo.defaultProps = { height: 753.5, width: 1128 }),
      Te(Jo, {
        variant: {
          options: [
            `nuSf7fOI9`,
            `d_Ze7Nez2`,
            `C3wDUveoh`,
            `axiD12Gen`,
            `KgCAOYUEM`,
            `t5j9Tza4s`,
            `rWwpzMyoJ`,
            `IPC1SSIGS`,
            `fCZUkpIT9`,
            `wHllqRrD7`,
            `bO2jkmxpp`,
            `vLBDpGbjR`,
            `kYb640Y9q`,
            `GGM_7XYIr`,
            `tDCHEHWPa`,
            `akjDL0XdX`,
            `r6RPRRbP3`,
            `vby23RBJ8`,
            `BJzpwIppy`,
            `emTjFYLix`,
            `UMeNZw7Dm`,
          ],
          optionTitles: [
            `Desktop 1`,
            `Desktop 2`,
            `Desktop 3`,
            `Desktop 4`,
            `Desktop 5`,
            `Desktop 6`,
            `Desktop 7`,
            `Tablet 1`,
            `Tablet 2`,
            `Tablet 3`,
            `Tablet 4`,
            `Tablet 5`,
            `Tablet 6`,
            `Tablet 7`,
            `Phone 1`,
            `Phone 2`,
            `Phone 3`,
            `Phone 4`,
            `Phone 5`,
            `Phone 6`,
            `Phone 7`,
          ],
          title: `Variant`,
          type: H.Enum,
        },
        L5bVOjC54: { title: `01 Image`, type: H.ResponsiveImage },
        Xgqdpwxoc: {
          defaultValue: `Title`,
          displayTextArea: !1,
          placeholder: ``,
          title: `01 Title`,
          type: H.String,
        },
        onXgqdpwxocChange: { changes: `Xgqdpwxoc`, type: H.ChangeHandler },
        nfr3_vd4_: {
          defaultValue: `01 Description`,
          displayTextArea: !1,
          title: `01 Description`,
          type: H.String,
        },
        onnfr3_vd4_Change: { changes: `nfr3_vd4_`, type: H.ChangeHandler },
        kGMjQGWFg: { title: `02 Image`, type: H.ResponsiveImage },
        AChBv6mnx: {
          defaultValue: `Title`,
          displayTextArea: !1,
          placeholder: ``,
          title: `02 Title`,
          type: H.String,
        },
        onAChBv6mnxChange: { changes: `AChBv6mnx`, type: H.ChangeHandler },
        dym8aGlmH: {
          defaultValue: `02 Description`,
          displayTextArea: !1,
          title: `02 Description`,
          type: H.String,
        },
        ondym8aGlmHChange: { changes: `dym8aGlmH`, type: H.ChangeHandler },
        AtsGqKbqe: { title: `03 Image`, type: H.ResponsiveImage },
        Y7m9L8sgJ: {
          defaultValue: `Title`,
          displayTextArea: !1,
          placeholder: ``,
          title: `03 Title`,
          type: H.String,
        },
        onY7m9L8sgJChange: { changes: `Y7m9L8sgJ`, type: H.ChangeHandler },
        u2WQNcukZ: {
          defaultValue: `03 Description`,
          description: ``,
          displayTextArea: !1,
          title: `03 Description`,
          type: H.String,
        },
        onu2WQNcukZChange: { changes: `u2WQNcukZ`, type: H.ChangeHandler },
        gRgZAVMwJ: { title: `04 Image`, type: H.ResponsiveImage },
        rd_VK8DcK: {
          defaultValue: `Title`,
          description: ``,
          displayTextArea: !1,
          placeholder: ``,
          title: `04 Title`,
          type: H.String,
        },
        onrd_VK8DcKChange: { changes: `rd_VK8DcK`, type: H.ChangeHandler },
        T3Zvj4lLt: {
          defaultValue: `04 Description`,
          description: ``,
          displayTextArea: !1,
          placeholder: ``,
          title: `04 Description`,
          type: H.String,
        },
        onT3Zvj4lLtChange: { changes: `T3Zvj4lLt`, type: H.ChangeHandler },
        FhHZF40Gc: { title: `05 Image`, type: H.ResponsiveImage },
        DvMnYDgLq: {
          defaultValue: `Title`,
          displayTextArea: !1,
          placeholder: ``,
          title: `05 Title`,
          type: H.String,
        },
        onDvMnYDgLqChange: { changes: `DvMnYDgLq`, type: H.ChangeHandler },
        DP3k2sIwB: {
          defaultValue: `05 Description`,
          description: ``,
          displayTextArea: !1,
          title: `05 Description`,
          type: H.String,
        },
        onDP3k2sIwBChange: { changes: `DP3k2sIwB`, type: H.ChangeHandler },
        hZtEnwWel: { title: `06 Image`, type: H.ResponsiveImage },
        vraZoJ4v1: {
          defaultValue: `Title`,
          displayTextArea: !1,
          title: `06 Title`,
          type: H.String,
        },
        onvraZoJ4v1Change: { changes: `vraZoJ4v1`, type: H.ChangeHandler },
        H3Z4yrNzo: {
          defaultValue: `06 Description`,
          displayTextArea: !1,
          title: `06 Description`,
          type: H.String,
        },
        onH3Z4yrNzoChange: { changes: `H3Z4yrNzo`, type: H.ChangeHandler },
        ry6udNzEB: { title: `07 Image`, type: H.ResponsiveImage },
        dfbYUaU7k: {
          defaultValue: `Title`,
          displayTextArea: !1,
          title: `07 Title`,
          type: H.String,
        },
        ondfbYUaU7kChange: { changes: `dfbYUaU7k`, type: H.ChangeHandler },
        YoMKINsBV: {
          defaultValue: `07 Description`,
          displayTextArea: !1,
          title: `07 Description`,
          type: H.String,
        },
        onYoMKINsBVChange: { changes: `YoMKINsBV`, type: H.ChangeHandler },
      }),
      M(Jo, [{ explicitInter: !0, fonts: [] }, ...ko, ...jo, ...Mo], {
        supportsExplicitInterCodegen: !0,
      }),
      (Jo.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([P(Ga, {}, t), P(Eo, {}, t), P(lo, {}, t)])),
      }));
  });
function Xo(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Zo,
  Qo,
  $o,
  es,
  ts,
  ns,
  rs,
  is,
  as,
  os,
  ss,
  cs,
  ls,
  us,
  ds = e(() => {
    (b(),
      z(),
      j(),
      p(),
      _t(),
      Na(),
      (Zo = R(Ma)),
      (Qo = R(ht)),
      ($o = [`A2oUybhFf`, `SCxqxf1ZT`]),
      (es = `framer-0kE2j`),
      (ts = { A2oUybhFf: `framer-v-cr9qny`, SCxqxf1ZT: `framer-v-lg6kmf` }),
      (ns = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (rs = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (is = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (as = ({ value: e, children: t }) => {
        let n = _(D),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(D.Provider, { value: i, children: t });
      }),
      (os = { Main: `A2oUybhFf`, Mobile: `SCxqxf1ZT` }),
      (ss = E.create(o)),
      (cs = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: os[r.variant] ?? r.variant ?? `A2oUybhFf`,
      })),
      (ls = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (us = me(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = ge();
          Oe();
          let { style: s, className: c, layoutId: l, variant: u, ...d } = cs(e),
            {
              baseVariant: f,
              classNames: p,
              clearLoadingGesture: m,
              gestureHandlers: g,
              gestureVariant: _,
              isLoading: b,
              setGestureState: x,
              setVariant: S,
              variants: C,
            } = Le({
              cycleOrder: $o,
              defaultVariant: `A2oUybhFf`,
              ref: r,
              variant: u,
              variantClassNames: ts,
            }),
            w = ls(e, C),
            T = I(es),
            te = () => f !== `SCxqxf1ZT`,
            D = () => f === `SCxqxf1ZT`;
          return h(A, {
            id: l ?? i,
            children: h(ss, {
              animate: C,
              initial: !1,
              children: h(as, {
                value: ns,
                children: y(E.div, {
                  ...d,
                  ...g,
                  className: I(T, `framer-cr9qny`, c, p),
                  "data-framer-name": `Main`,
                  layoutDependency: w,
                  layoutId: `A2oUybhFf`,
                  ref: r,
                  style: { ...s },
                  ...Xo({ SCxqxf1ZT: { "data-framer-name": `Mobile` } }, f, _),
                  children: [
                    te() &&
                      h(V, {
                        children: h(F, {
                          className: `framer-1ra9yb5-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: w,
                          layoutId: `MewJNpEY8-container`,
                          nodeId: `MewJNpEY8`,
                          rendersWithMotion: !0,
                          scopeId: `XpeCdySB4`,
                          children: h(ht, {
                            alignment: `center`,
                            direction: `left`,
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !0,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 16,
                            height: `100%`,
                            hoverFactor: 0.5,
                            id: `MewJNpEY8`,
                            layoutId: `MewJNpEY8`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            sizingOptions: { heightType: !1, widthType: !0 },
                            slots: [
                              h(V, {
                                height: 320,
                                width: `350px`,
                                children: h(F, {
                                  className: `framer-5vmqd3-container`,
                                  "data-framer-name": `Testimonial 1`,
                                  inComponentSlot: !0,
                                  layoutDependency: w,
                                  layoutId: `QuhMfLfsI-container`,
                                  name: `Testimonial 1`,
                                  nodeId: `QuhMfLfsI`,
                                  rendersWithMotion: !0,
                                  scopeId: `XpeCdySB4`,
                                  children: h(Ma, {
                                    B5TAlxR8C: `Martha Sherwood`,
                                    BRbPRMZSH: rs(
                                      {
                                        pixelHeight: 1213,
                                        pixelWidth: 1293,
                                        src: `../../assets/images/DIv0ak73AhgXHEDVO6DPD3aQNQ-19efa7.webp`,
                                        srcSet: `../../assets/images/DIv0ak73AhgXHEDVO6DPD3aQNQ.webp 512w,../../assets/images/DIv0ak73AhgXHEDVO6DPD3aQNQ-cb4469.webp 1024w,../../assets/images/DIv0ak73AhgXHEDVO6DPD3aQNQ-19efa7.webp 1293w`,
                                      },
                                      ``
                                    ),
                                    height: `100%`,
                                    id: `QuhMfLfsI`,
                                    layoutId: `QuhMfLfsI`,
                                    name: `Testimonial 1`,
                                    sJMxqcNat: `"Professional, insightful, and focused on results. The value they delivered exceeded our expectations at every stage of the process."`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: is(`LDDG4BR4H`),
                                    WBD87VX3Y: `Managing Partner, CNN Firm`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              h(V, {
                                height: 320,
                                width: `350px`,
                                children: h(F, {
                                  className: `framer-j8uxrk-container`,
                                  "data-framer-name": `Testimonial 2`,
                                  inComponentSlot: !0,
                                  layoutDependency: w,
                                  layoutId: `XOghPY0FA-container`,
                                  name: `Testimonial 2`,
                                  nodeId: `XOghPY0FA`,
                                  rendersWithMotion: !0,
                                  scopeId: `XpeCdySB4`,
                                  children: h(Ma, {
                                    B5TAlxR8C: `David Jaye`,
                                    height: `100%`,
                                    id: `XOghPY0FA`,
                                    layoutId: `XOghPY0FA`,
                                    name: `Testimonial 2`,
                                    sJMxqcNat: `"The team provided actionable recommendations that immediately improved performance and strengthened our long-term growth strategy."`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: is(`LDDG4BR4H`),
                                    WBD87VX3Y: `Founder, Procura Firm`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              h(V, {
                                height: 320,
                                width: `350px`,
                                children: h(F, {
                                  className: `framer-17ceuie-container`,
                                  "data-framer-name": `Testimonial 3`,
                                  inComponentSlot: !0,
                                  layoutDependency: w,
                                  layoutId: `vnPg2qAKB-container`,
                                  name: `Testimonial 3`,
                                  nodeId: `vnPg2qAKB`,
                                  rendersWithMotion: !0,
                                  scopeId: `XpeCdySB4`,
                                  children: h(Ma, {
                                    B5TAlxR8C: `Emilia Barnes`,
                                    BRbPRMZSH: rs(
                                      {
                                        pixelHeight: 1727,
                                        pixelWidth: 1804,
                                        src: `https://framerusercontent.com/images/vPYZutTIWMoqQnVGPRq6V2AkJw.webp?width=1804&height=1727`,
                                        srcSet: `https://framerusercontent.com/images/vPYZutTIWMoqQnVGPRq6V2AkJw.webp?scale-down-to=512&width=1804&height=1727 512w,https://framerusercontent.com/images/vPYZutTIWMoqQnVGPRq6V2AkJw.webp?scale-down-to=1024&width=1804&height=1727 1024w,https://framerusercontent.com/images/vPYZutTIWMoqQnVGPRq6V2AkJw.webp?width=1804&height=1727 1804w`,
                                      },
                                      ``
                                    ),
                                    height: `100%`,
                                    id: `vnPg2qAKB`,
                                    layoutId: `vnPg2qAKB`,
                                    name: `Testimonial 3`,
                                    sJMxqcNat: `"Consilio combines financial expertise with practical business insight. Their guidance has been invaluable to our organization since day one."`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: is(`LDDG4BR4H`),
                                    WBD87VX3Y: `Operations Director, Techno`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              h(V, {
                                height: 320,
                                width: `350px`,
                                children: h(F, {
                                  className: `framer-1isf7pf-container`,
                                  "data-framer-name": `Testimonial 4`,
                                  inComponentSlot: !0,
                                  layoutDependency: w,
                                  layoutId: `EAaHFrmPq-container`,
                                  name: `Testimonial 4`,
                                  nodeId: `EAaHFrmPq`,
                                  rendersWithMotion: !0,
                                  scopeId: `XpeCdySB4`,
                                  children: h(Ma, {
                                    B5TAlxR8C: `Thomas Welsh`,
                                    BRbPRMZSH: rs(
                                      {
                                        pixelHeight: 1727,
                                        pixelWidth: 1677,
                                        src: `https://framerusercontent.com/images/sQUXMhCKkc256yPc7viijcNr4.webp?width=1677&height=1727`,
                                        srcSet: `https://framerusercontent.com/images/sQUXMhCKkc256yPc7viijcNr4.webp?scale-down-to=1024&width=1677&height=1727 994w,https://framerusercontent.com/images/sQUXMhCKkc256yPc7viijcNr4.webp?width=1677&height=1727 1677w`,
                                      },
                                      ``
                                    ),
                                    height: `100%`,
                                    id: `EAaHFrmPq`,
                                    layoutId: `EAaHFrmPq`,
                                    name: `Testimonial 4`,
                                    sJMxqcNat: `"We gained a clearer direction, stronger processes, and a more confident leadership team through our partnership with Consilio."`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: is(`LDDG4BR4H`),
                                    WBD87VX3Y: `CEO, AIK Logistics Company`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                            speed: 25,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    D() &&
                      h(V, {
                        children: h(F, {
                          className: `framer-mi0aey-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: w,
                          layoutId: `UTr2FrUXc-container`,
                          nodeId: `UTr2FrUXc`,
                          rendersWithMotion: !0,
                          scopeId: `XpeCdySB4`,
                          children: h(ht, {
                            alignment: `center`,
                            direction: `right`,
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !0,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 14,
                            height: `100%`,
                            hoverFactor: 0.5,
                            id: `UTr2FrUXc`,
                            layoutId: `UTr2FrUXc`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            sizingOptions: { heightType: !0, widthType: !0 },
                            slots: [
                              h(V, {
                                height: 300,
                                width: `320px`,
                                children: h(F, {
                                  className: `framer-17ip30x-container`,
                                  "data-framer-name": `Mobile 1`,
                                  inComponentSlot: !0,
                                  layoutDependency: w,
                                  layoutId: `t067pu9EN-container`,
                                  name: `Mobile 1`,
                                  nodeId: `t067pu9EN`,
                                  rendersWithMotion: !0,
                                  scopeId: `XpeCdySB4`,
                                  children: h(Ma, {
                                    B5TAlxR8C: `Martha Sherwood`,
                                    BRbPRMZSH: rs(
                                      {
                                        pixelHeight: 1213,
                                        pixelWidth: 1293,
                                        src: `../../assets/images/DIv0ak73AhgXHEDVO6DPD3aQNQ-19efa7.webp`,
                                        srcSet: `../../assets/images/DIv0ak73AhgXHEDVO6DPD3aQNQ.webp 512w,../../assets/images/DIv0ak73AhgXHEDVO6DPD3aQNQ-cb4469.webp 1024w,../../assets/images/DIv0ak73AhgXHEDVO6DPD3aQNQ-19efa7.webp 1293w`,
                                      },
                                      ``
                                    ),
                                    height: `100%`,
                                    id: `t067pu9EN`,
                                    layoutId: `t067pu9EN`,
                                    name: `Mobile 1`,
                                    sJMxqcNat: `"Professional, insightful, and focused on results. The value they delivered exceeded our expectations at every stage of the process."`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: is(`eJwFUnTKR`),
                                    WBD87VX3Y: `Managing Partner, CNN Firm`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              h(V, {
                                height: 300,
                                width: `320px`,
                                children: h(F, {
                                  className: `framer-1buuvne-container`,
                                  "data-framer-name": `Mobile 2`,
                                  inComponentSlot: !0,
                                  layoutDependency: w,
                                  layoutId: `okqahn4ea-container`,
                                  name: `Mobile 2`,
                                  nodeId: `okqahn4ea`,
                                  rendersWithMotion: !0,
                                  scopeId: `XpeCdySB4`,
                                  children: h(Ma, {
                                    B5TAlxR8C: `David Jaye`,
                                    height: `100%`,
                                    id: `okqahn4ea`,
                                    layoutId: `okqahn4ea`,
                                    name: `Mobile 2`,
                                    sJMxqcNat: `"The team provided actionable recommendations that immediately improved performance and strengthened our long-term growth strategy."`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: is(`eJwFUnTKR`),
                                    WBD87VX3Y: `Founder, Procura Firm`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              h(V, {
                                height: 300,
                                width: `320px`,
                                children: h(F, {
                                  className: `framer-adiz5v-container`,
                                  "data-framer-name": `Mobile 3`,
                                  inComponentSlot: !0,
                                  layoutDependency: w,
                                  layoutId: `l3bQ397OT-container`,
                                  name: `Mobile 3`,
                                  nodeId: `l3bQ397OT`,
                                  rendersWithMotion: !0,
                                  scopeId: `XpeCdySB4`,
                                  children: h(Ma, {
                                    B5TAlxR8C: `Emilia Barnes`,
                                    BRbPRMZSH: rs(
                                      {
                                        pixelHeight: 1727,
                                        pixelWidth: 1804,
                                        src: `https://framerusercontent.com/images/vPYZutTIWMoqQnVGPRq6V2AkJw.webp?width=1804&height=1727`,
                                        srcSet: `https://framerusercontent.com/images/vPYZutTIWMoqQnVGPRq6V2AkJw.webp?scale-down-to=512&width=1804&height=1727 512w,https://framerusercontent.com/images/vPYZutTIWMoqQnVGPRq6V2AkJw.webp?scale-down-to=1024&width=1804&height=1727 1024w,https://framerusercontent.com/images/vPYZutTIWMoqQnVGPRq6V2AkJw.webp?width=1804&height=1727 1804w`,
                                      },
                                      ``
                                    ),
                                    height: `100%`,
                                    id: `l3bQ397OT`,
                                    layoutId: `l3bQ397OT`,
                                    name: `Mobile 3`,
                                    sJMxqcNat: `"Consilio combines financial expertise with practical business insight. Their guidance has been invaluable to our organization since day one."`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: is(`eJwFUnTKR`),
                                    WBD87VX3Y: `Operations Director, Techno`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                            speed: 15,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-0kE2j.framer-130e345, .framer-0kE2j .framer-130e345 { display: block; }`,
          `.framer-0kE2j.framer-cr9qny { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 800px; }`,
          `.framer-0kE2j .framer-1ra9yb5-container { flex: 1 0 0px; height: 322px; position: relative; width: 1px; }`,
          `.framer-0kE2j .framer-5vmqd3-container, .framer-0kE2j .framer-j8uxrk-container, .framer-0kE2j .framer-17ceuie-container, .framer-0kE2j .framer-1isf7pf-container { height: 320px; position: relative; width: 350px; }`,
          `.framer-0kE2j .framer-mi0aey-container { flex: 1 0 0px; height: 300px; position: relative; width: 1px; }`,
          `.framer-0kE2j .framer-17ip30x-container, .framer-0kE2j .framer-1buuvne-container, .framer-0kE2j .framer-adiz5v-container { height: 300px; position: relative; width: 320px; }`,
        ],
        `framer-0kE2j`
      )),
      (us.displayName = `Testimonial Ticker`),
      (us.defaultProps = { height: 322, width: 800 }),
      Te(us, {
        variant: {
          options: [`A2oUybhFf`, `SCxqxf1ZT`],
          optionTitles: [`Main`, `Mobile`],
          title: `Variant`,
          type: H.Enum,
        },
      }),
      M(us, [{ explicitInter: !0, fonts: [] }, ...Zo, ...Qo], { supportsExplicitInterCodegen: !0 }),
      (us.loader = { load: (e, t) => (t.locale, Promise.allSettled([P(Ma, {}, t)])) }));
  }),
  fs,
  ps,
  ms,
  hs,
  gs,
  _s,
  vs,
  ys,
  bs,
  xs,
  Ss,
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As,
  js,
  Ms,
  Ns,
  Ps,
  Fs,
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs,
  Js,
  $,
  Ys,
  Xs,
  Zs,
  Qs,
  $s,
  ec,
  tc,
  nc,
  rc,
  ic,
  ac,
  oc,
  sc,
  cc,
  lc,
  uc,
  dc,
  fc,
  pc,
  mc,
  hc,
  gc,
  _c,
  vc,
  yc,
  bc,
  xc,
  Sc,
  Cc,
  wc,
  Tc,
  Ec;
e(() => {
  (b(),
    z(),
    j(),
    p(),
    _t(),
    gt(),
    Bt(),
    Ut(),
    Gt(),
    vt(),
    Jt(),
    Ge(),
    St(),
    zt(),
    nr(),
    gr(),
    Qe(),
    Et(),
    rn(),
    jt(),
    ea(),
    Tt(),
    Yt(),
    Na(),
    Rt(),
    Yo(),
    on(),
    cn(),
    Ct(),
    Nt(),
    Ot(),
    ds(),
    Mt(),
    un(),
    fn(),
    rt(),
    mn(),
    vn(),
    He(),
    Sn(),
    Ve(),
    G(),
    Dn(),
    (fs = pe(B)),
    (ps = pe(E.div)),
    (ms = R(X)),
    (hs = R($i)),
    (gs = oe(E.div)),
    (_s = R(an)),
    (vs = R(Lt)),
    (ys = N(E.div)),
    (bs = R(Dt)),
    (xs = R(xt)),
    (Ss = R(ht)),
    (Cs = R(hr)),
    (ws = R(Z)),
    (Ts = N(L)),
    (Es = R(wt)),
    (Ds = N(B)),
    (Os = R(ln)),
    (ks = R(Jo)),
    (As = R(Ma)),
    (js = R(At)),
    (Ms = Ee(At)),
    (Ns = R(Pt)),
    (Ps = R(It)),
    (Fs = R(Ft)),
    (Is = R(sn)),
    (Ls = R(qt)),
    (Rs = {
      FKeUsnHKg: `(max-width: 809.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
      XOpZf9jEo: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (zs = () => typeof document < `u`),
    (Bs = [`count`]),
    (Vs = `framer-HDnou`),
    (Hs = {
      FKeUsnHKg: `framer-v-1qvnpt1`,
      WQLkyLRf1: `framer-v-72rtr7`,
      XOpZf9jEo: `framer-v-1jp9pa2`,
    }),
    (Us = (e, t, n) => (e && t ? `position` : n)),
    (Ws = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.6, ease: [0.7, 0.01, 0.21, 0.92], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Gs = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (Ks = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 76, delay: 0.4, mass: 1, stiffness: 351, type: `spring` },
      x: 0,
      y: 0,
    }),
    (qs = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 30,
    }),
    (Js = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 76, delay: 0.3, mass: 1, stiffness: 351, type: `spring` },
      x: 0,
      y: 0,
    }),
    ($ = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Ys = {
      filter: `blur(8px)`,
      opacity: 0.001,
      rotate: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 20,
    }),
    (Xs = { damping: 80, delay: 0, mass: 1, stiffness: 200, type: `spring` }),
    (Zs = {
      effect: Ys,
      repeat: !1,
      startDelay: 0,
      threshold: 0,
      tokenization: `word`,
      transition: Xs,
      trigger: `onInView`,
      type: `appear`,
    }),
    (Qs = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 15,
    }),
    ($s = { damping: 70, delay: 0.6, mass: 1, stiffness: 210, type: `spring` }),
    (ec = { damping: 70, delay: 0.3, mass: 1, stiffness: 210, type: `spring` }),
    (tc = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (nc = () => ({
      from: { alias: `r9g7aS03I`, data: it, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `r9g7aS03I`, name: `CH64cYoSq`, type: `Identifier` },
        { collection: `r9g7aS03I`, name: `sk_SngEwe`, type: `Identifier` },
        { collection: `r9g7aS03I`, name: `TImVM2TSg`, type: `Identifier` },
        { collection: `r9g7aS03I`, name: `Ezatht0JF`, type: `Identifier` },
        { collection: `r9g7aS03I`, name: `gURS0n4RS`, type: `Identifier` },
        { collection: `r9g7aS03I`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `r9g7aS03I`, name: `P9ver8b06`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: 2 },
        type: `BinaryOperation`,
      },
    })),
    (rc = ({ query: e, pageSize: t, children: n }) => n(Re(e))),
    (ic = () => ({
      from: { alias: `oSOBACeqO`, data: it, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `oSOBACeqO`, name: `CH64cYoSq`, type: `Identifier` },
        { collection: `oSOBACeqO`, name: `sk_SngEwe`, type: `Identifier` },
        { collection: `oSOBACeqO`, name: `TImVM2TSg`, type: `Identifier` },
        { collection: `oSOBACeqO`, name: `Ezatht0JF`, type: `Identifier` },
        { collection: `oSOBACeqO`, name: `gURS0n4RS`, type: `Identifier` },
        { collection: `oSOBACeqO`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `oSOBACeqO`, name: `P9ver8b06`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: 3 },
        type: `BinaryOperation`,
      },
    })),
    (ac = () => ({
      from: { alias: `K05lVZcoq`, data: it, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `K05lVZcoq`, name: `CH64cYoSq`, type: `Identifier` },
        { collection: `K05lVZcoq`, name: `sk_SngEwe`, type: `Identifier` },
        { collection: `K05lVZcoq`, name: `TImVM2TSg`, type: `Identifier` },
        { collection: `K05lVZcoq`, name: `Ezatht0JF`, type: `Identifier` },
        { collection: `K05lVZcoq`, name: `gURS0n4RS`, type: `Identifier` },
        { collection: `K05lVZcoq`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `K05lVZcoq`, name: `P9ver8b06`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: 1 },
        type: `BinaryOperation`,
      },
    })),
    (oc = () => ({
      from: { alias: `Jr_nX7mA6`, data: it, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `Jr_nX7mA6`, name: `CH64cYoSq`, type: `Identifier` },
        { collection: `Jr_nX7mA6`, name: `sk_SngEwe`, type: `Identifier` },
        { collection: `Jr_nX7mA6`, name: `TImVM2TSg`, type: `Identifier` },
        { collection: `Jr_nX7mA6`, name: `Ezatht0JF`, type: `Identifier` },
        { collection: `Jr_nX7mA6`, name: `gURS0n4RS`, type: `Identifier` },
        { collection: `Jr_nX7mA6`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `Jr_nX7mA6`, name: `P9ver8b06`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: 4 },
        type: `BinaryOperation`,
      },
    })),
    (sc = () => ({
      from: { alias: `ppoz5x1G2`, data: it, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `ppoz5x1G2`, name: `CH64cYoSq`, type: `Identifier` },
        { collection: `ppoz5x1G2`, name: `sk_SngEwe`, type: `Identifier` },
        { collection: `ppoz5x1G2`, name: `TImVM2TSg`, type: `Identifier` },
        { collection: `ppoz5x1G2`, name: `Ezatht0JF`, type: `Identifier` },
        { collection: `ppoz5x1G2`, name: `gURS0n4RS`, type: `Identifier` },
        { collection: `ppoz5x1G2`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `ppoz5x1G2`, name: `P9ver8b06`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: 5 },
        type: `BinaryOperation`,
      },
    })),
    (cc = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.6, duration: 1.6, ease: [0.44, 0, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (lc = { delay: 1.4, duration: 0.8, ease: [0.44, 0, 0.56, 1], type: `tween` }),
    (uc = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: lc,
      x: 0,
      y: 0,
    }),
    (dc = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 20,
    }),
    (fc = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.6,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (pc = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: `tween` }),
    (mc = () => ({
      from: { alias: `WtJ81VOR9`, data: pn, type: `Collection` },
      limit: { type: `LiteralValue`, value: 3 },
      select: [
        { collection: `WtJ81VOR9`, name: `I0cWIyBUM`, type: `Identifier` },
        { collection: `WtJ81VOR9`, name: `LQ4k8pMWh`, type: `Identifier` },
        { collection: `WtJ81VOR9`, name: `cN0Ychn2P`, type: `Identifier` },
        { collection: `WtJ81VOR9`, name: `LfkY4TS8p`, type: `Identifier` },
        { collection: `WtJ81VOR9`, name: `eOHobAcGV`, type: `Identifier` },
        { collection: `WtJ81VOR9`, name: `PL0YsbUUz`, type: `Identifier` },
        { collection: `WtJ81VOR9`, name: `id`, type: `Identifier` },
      ],
    })),
    (hc = () => ({
      from: { alias: `WtJ81VOR9`, data: pn, type: `Collection` },
      limit: { type: `LiteralValue`, value: 2 },
      select: [
        { collection: `WtJ81VOR9`, name: `I0cWIyBUM`, type: `Identifier` },
        { collection: `WtJ81VOR9`, name: `LQ4k8pMWh`, type: `Identifier` },
        { collection: `WtJ81VOR9`, name: `cN0Ychn2P`, type: `Identifier` },
        { collection: `WtJ81VOR9`, name: `LfkY4TS8p`, type: `Identifier` },
        { collection: `WtJ81VOR9`, name: `eOHobAcGV`, type: `Identifier` },
        { collection: `WtJ81VOR9`, name: `PL0YsbUUz`, type: `Identifier` },
        { collection: `WtJ81VOR9`, name: `id`, type: `Identifier` },
      ],
    })),
    (gc = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (_c = (e, t, n) => {
      if (typeof e != `string`) return ``;
      let r = new Date(e);
      if (isNaN(r.getTime())) return ``;
      let i = `en-US`;
      try {
        return r.toLocaleString(n || i, t);
      } catch {
        return r.toLocaleString(i, t);
      }
    }),
    (vc = { dateStyle: `medium`, timeZone: `UTC` }),
    (yc = (e, t) => _c(e, vc, t)),
    (bc = () => ({
      from: { alias: `ZyUrS4t8V`, data: dn, type: `Collection` },
      limit: { type: `LiteralValue`, value: 3 },
      select: [
        { collection: `ZyUrS4t8V`, name: `TRRxvReo0`, type: `Identifier` },
        { collection: `ZyUrS4t8V`, name: `CWrQ3fgaH`, type: `Identifier` },
        { collection: `ZyUrS4t8V`, name: `ZfcQek_8H`, type: `Identifier` },
        { collection: `ZyUrS4t8V`, name: `Hz3oIYPRx`, type: `Identifier` },
        { collection: `ZyUrS4t8V`, name: `bNzKOQmIZ`, type: `Identifier` },
        { collection: `ZyUrS4t8V`, name: `id`, type: `Identifier` },
      ],
    })),
    (xc = () => ({
      from: { alias: `ZyUrS4t8V`, data: dn, type: `Collection` },
      limit: { type: `LiteralValue`, value: 2 },
      select: [
        { collection: `ZyUrS4t8V`, name: `TRRxvReo0`, type: `Identifier` },
        { collection: `ZyUrS4t8V`, name: `CWrQ3fgaH`, type: `Identifier` },
        { collection: `ZyUrS4t8V`, name: `ZfcQek_8H`, type: `Identifier` },
        { collection: `ZyUrS4t8V`, name: `Hz3oIYPRx`, type: `Identifier` },
        { collection: `ZyUrS4t8V`, name: `bNzKOQmIZ`, type: `Identifier` },
        { collection: `ZyUrS4t8V`, name: `id`, type: `Identifier` },
      ],
    })),
    (Sc = { Desktop: `WQLkyLRf1`, Phone: `FKeUsnHKg`, Tablet: `XOpZf9jEo` }),
    (Cc = ({ value: e }) =>
      we()
        ? null
        : h(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (wc = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Sc[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (Tc = me(
      m(function (e, t) {
        let n = v(null),
          r = t ?? n,
          i = ee(),
          { activeLocale: a, setLocale: s } = ge(),
          l = Oe(),
          { style: u, className: d, layoutId: f, variant: p, ...m } = wc(e);
        Fe(c(() => En({}, a), [a]));
        let [g, b] = Ne(p, Rs, !1),
          S = I(Vs, Tn, _n, xn, q, Be, ze),
          C = _(be)?.isLayoutTemplate,
          w = !!_(D)?.transition?.layout,
          T = Us(C, w),
          te = ve(`GupJHRftr`),
          ne = ce();
        W();
        let O = () => !zs() || g !== `FKeUsnHKg`,
          k = v(null),
          re = () => !zs() || ![`XOpZf9jEo`, `FKeUsnHKg`].includes(g),
          ie = ve(`VoApNnspm`),
          j = v(null),
          ae = v(null),
          M = v(null),
          oe = ve(`nrHc2EeAa`),
          se = ve(`cOMm90vJL`),
          N = ve(`esZ2zY5mx`),
          fe = Ce();
        return (
          xe({}),
          h(be.Provider, {
            value: {
              activeVariantId: g,
              humanReadableVariantMap: Sc,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: Hs,
            },
            children: y(A, {
              id: f ?? i,
              children: [
                h(Cc, {
                  value: `html body { background: var(--token-a33c1b5b-e297-4002-8e0e-dc2265f4a460, rgb(0, 13, 14)); }`,
                }),
                y(E.div, {
                  ...m,
                  className: I(S, `framer-72rtr7`, d),
                  ref: r,
                  style: { ...u },
                  children: [
                    h(E.div, {
                      "aria-label": `Scroll Trigger`,
                      className: `framer-14rusya`,
                      "data-framer-name": `Scroll Triger`,
                      id: te,
                      layout: T,
                      ref: ne(te),
                    }),
                    y(E.div, {
                      className: `framer-kcrqvk`,
                      "data-framer-name": `Main`,
                      layout: T,
                      children: [
                        y(`div`, {
                          className: `framer-1npfag2`,
                          "data-framer-name": `Hero`,
                          children: [
                            h(fs, {
                              animate: Ws,
                              className: `framer-lh02uz-container`,
                              "data-framer-appear-id": `lh02uz`,
                              initial: Gs,
                              optimized: !0,
                              children: h(U, {
                                breakpoint: g,
                                overrides: {
                                  FKeUsnHKg: {
                                    fallbackImage: `https://framerusercontent.com/images/Su7y4vgg9AplWBPZSalnwhjiQ.png?scale-down-to=900&width=780&height=1800`,
                                  },
                                  XOpZf9jEo: {
                                    fallbackImage: `https://framerusercontent.com/images/pDNUec4dIrzEoikRXsTZEPEBv4.png?scale-down-to=1000&width=1620&height=2000`,
                                  },
                                },
                                children: h(le, {
                                  __fromCanvasComponent: !0,
                                  animated: Je.animated,
                                  buffers: Je.buffers,
                                  fallbackImage: `https://framerusercontent.com/images/UhIqFUCjvvAzS2Pyib8WlOHV40.png?scale-down-to=1200&width=2400&height=1800`,
                                  fragmentShader: Je.fragment,
                                  height: `100%`,
                                  heightmapSource: Je.heightmapSource,
                                  mode: `progressive`,
                                  mouse: Je.mouse && { enabled: Je.mouse === `enabledByDefault` },
                                  resolutionScale: Je.resolutionScale,
                                  skipInitialFallback: !0,
                                  uniforms: {
                                    u_colors: {
                                      type: `array`,
                                      value: [
                                        `rgb(10, 12, 4)`,
                                        `rgb(160, 145, 0)`,
                                        `rgb(255, 255, 160)`,
                                        `rgb(255, 230, 0)`,
                                      ],
                                    },
                                    u_contrast: { type: `number`, value: 1.1 },
                                    u_distBias: { type: `number`, value: 0 },
                                    u_dither: { type: `number`, value: 0.08 },
                                    u_ditherMode: { type: `enum`, value: 1 },
                                    u_exposure: { type: `number`, value: 1.1 },
                                    u_jellify: { type: `boolean`, value: !1 },
                                    u_loop: { type: `number`, value: 0 },
                                    u_mousePersist: { type: `number`, value: 0.8 },
                                    u_mousePush: { type: `number`, value: 0.5 },
                                    u_mouseRadius: { type: `number`, value: 1 },
                                    u_mouseStretch: { type: `number`, value: 0 },
                                    u_saturation: { type: `number`, value: 1 },
                                    u_scale: { type: `number`, value: 0.1 },
                                    u_seed: { type: `number`, value: 689 },
                                    u_speed: { type: `number`, value: 0.16 },
                                    u_turbAmp: { type: `number`, value: 0.6 },
                                    u_turbFreq: { type: `number`, value: 0.1 },
                                    u_turbIter: { type: `number`, value: 7 },
                                    u_waveFreq: { type: `number`, value: 3.8 },
                                  },
                                  vertexShader: Je.vertex,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            y(`div`, {
                              className: `framer-1x01s5p`,
                              "data-framer-name": `Container`,
                              children: [
                                h(ps, {
                                  animate: Ks,
                                  className: `framer-1ipf8bw`,
                                  "data-framer-appear-id": `1ipf8bw`,
                                  "data-framer-name": `Top`,
                                  initial: qs,
                                  optimized: !0,
                                  children: h(L, {
                                    __fromCanvasComponent: !0,
                                    children: h(o, {
                                      children: y(`h1`, {
                                        className: `framer-styles-preset-ilesas`,
                                        "data-styles-preset": `NfpvBHr_m`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-8b5374b9-4a7c-45ad-9876-1159f29db2e9, rgba(255, 255, 255, 0.65))`,
                                        },
                                        children: [
                                          `Your Path To `,
                                          h(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                            },
                                            children: `Top Colleges & Careers In India`,
                                          }),
                                        ],
                                      }),
                                    }),
                                    className: `framer-u5gmvc`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                y(`div`, {
                                  className: `framer-19y0bap`,
                                  "data-framer-name": `Bottom`,
                                  children: [
                                    y(`div`, {
                                      className: `framer-1hcgniv`,
                                      "data-framer-name": `Wrapper`,
                                      children: [
                                        y(ps, {
                                          animate: Js,
                                          className: `framer-1ngdnik`,
                                          "data-framer-appear-id": `1ngdnik`,
                                          "data-framer-name": `Left`,
                                          initial: qs,
                                          optimized: !0,
                                          children: [
                                            h(`div`, {
                                              className: `framer-r8gyvu`,
                                              "data-border": !0,
                                              children: h(L, {
                                                __fromCanvasComponent: !0,
                                                children: h(o, {
                                                  children: h(`p`, {
                                                    className: `framer-styles-preset-13tsflb`,
                                                    "data-styles-preset": `AGg32jqif`,
                                                    dir: `auto`,
                                                    children: `CareerNova guides students across India through every step: choosing the right course and university, applications, counselling and building your career in India.`,
                                                  }),
                                                }),
                                                className: `framer-a69r67`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            h(Ie, {
                                              links: [
                                                {
                                                  href: { webPageId: `sGcuUgaBJ` },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: { webPageId: `sGcuUgaBJ` },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: { webPageId: `sGcuUgaBJ` },
                                                  implicitPathVariables: void 0,
                                                },
                                              ],
                                              children: (e) =>
                                                h(U, {
                                                  breakpoint: g,
                                                  overrides: {
                                                    XOpZf9jEo: {
                                                      y:
                                                        (l?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        125 +
                                                        469.5 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        212.5,
                                                    },
                                                  },
                                                  children: h(V, {
                                                    height: 48,
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      125 +
                                                      469.5 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      212.5,
                                                    children: h(B, {
                                                      className: `framer-pmsnwe-container`,
                                                      "data-framer-name": `Button`,
                                                      name: `Button`,
                                                      nodeId: `vbx3ysoWR`,
                                                      scopeId: `augiA20Il`,
                                                      children: h(U, {
                                                        breakpoint: g,
                                                        overrides: {
                                                          FKeUsnHKg: { dQDe2ecMb: e[2] },
                                                          XOpZf9jEo: { dQDe2ecMb: e[1] },
                                                        },
                                                        children: h(X, {
                                                          dQDe2ecMb: e[0],
                                                          GGZTVUGZ5: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                          height: `100%`,
                                                          id: `vbx3ysoWR`,
                                                          LALAatWUM: `Book Counselling`,
                                                          layoutId: `vbx3ysoWR`,
                                                          lCPX_SQT2: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                                          name: `Button`,
                                                          oAbfzaz1L: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                          qkIJkdmKd: !1,
                                                          tWCC8YneY: `var(--token-1ed826d8-2248-4799-bfca-701d0638982f, rgb(255, 230, 0))`,
                                                          variant: $(`AScdeMxwS`),
                                                          width: `100%`,
                                                          zkb7vpZI7: `var(--token-a33c1b5b-e297-4002-8e0e-dc2265f4a460, rgb(0, 13, 14))`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                            }),
                                          ],
                                        }),
                                        O() &&
                                          h(U, {
                                            breakpoint: g,
                                            overrides: {
                                              XOpZf9jEo: {
                                                width: `320px`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  125 +
                                                  469.5 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            children: h(V, {
                                              height: 210,
                                              width: `355px`,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                125 +
                                                469.5 +
                                                0 +
                                                0 +
                                                0 +
                                                50.5,
                                              children: h(B, {
                                                className: `framer-1ur3sde-container hidden-1qvnpt1`,
                                                "data-framer-name": `Video`,
                                                name: `Video`,
                                                nodeId: `KvxeTdnOB`,
                                                scopeId: `augiA20Il`,
                                                children: h($i, {
                                                  fgsXYkf45: `15px`,
                                                  height: `100%`,
                                                  id: `KvxeTdnOB`,
                                                  layoutId: `KvxeTdnOB`,
                                                  name: `Video`,
                                                  style: { height: `100%`, width: `100%` },
                                                  variant: $(`WgKJTcEzx`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                      ],
                                    }),
                                    h(`div`, {
                                      className: `framer-1ydpvd6`,
                                      "data-border": !0,
                                      "data-framer-name": `Logos`,
                                      children: h(U, {
                                        breakpoint: g,
                                        overrides: { FKeUsnHKg: { tickerEffectGap: `70px` } },
                                        children: y(gs, {
                                          className: `framer-17mlodp`,
                                          "data-framer-name": `Logo ticker`,
                                          tickerEffectAlign: `center`,
                                          tickerEffectVisasModifier: `default`,
                                          tickerEffectDraggable: !1,
                                          tickerEffectEnabled: !0,
                                          tickerEffectGap: `95px`,
                                          tickerEffectHoverModifier: 10,
                                          tickerEffectOverflow: `clip`,
                                          tickerEffectPosition: `relative`,
                                          tickerEffectStackVisas: `row`,
                                          tickerEffectVelocity: 40,
                                          children: [
                                            h(De, {
                                              children: h(ue, {
                                                className: `framer-1niuqe1`,
                                                "data-framer-name": `Mercury`,
                                                fill: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)) /* {"name":"White"} */`,
                                                intrinsicHeight: 25,
                                                intrinsicWidth: 136,
                                                svg: `<svg width="136" height="25" viewBox="0 0 136 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_54623_710)">
<path d="M34.205 20.9071L28.5806 3.98392C28.268 3.04199 27.7205 2.19587 26.9901 1.526C26.2596 0.856136 25.3705 0.384769 24.4073 0.156693C23.444 -0.0713821 22.4386 -0.0485862 21.4867 0.22292C20.5347 0.494427 19.6677 1.00562 18.9682 1.70792L17.1487 3.54067L15.3254 1.70792C14.6257 1.0061 13.7589 0.495326 12.8071 0.224104C11.8553 -0.0471175 10.8502 -0.0697809 9.8872 0.158262C8.92421 0.386304 8.03533 0.857479 7.30498 1.52705C6.57462 2.19662 6.02704 3.04235 5.71423 3.98392L0.0898638 20.9071C0.0142792 21.1265 -0.0171696 21.3588 -0.00266113 21.5905C0.0118474 21.8222 0.0720244 22.0487 0.174387 22.2569C0.27675 22.4651 0.419264 22.6509 0.593685 22.8035C0.768106 22.9561 0.970968 23.0725 1.19053 23.146C1.41009 23.2194 1.642 23.2484 1.87282 23.2314C2.10364 23.2143 2.3288 23.1515 2.53527 23.0466C2.74173 22.9417 2.9254 22.7967 3.07564 22.6201C3.22589 22.4435 3.33972 22.2388 3.41056 22.0178L9.03429 5.09397C9.15867 4.7205 9.37607 4.38507 9.66587 4.11947C9.95567 3.85386 10.3083 3.66688 10.6903 3.57623C11.0723 3.48558 11.4711 3.49427 11.8488 3.60148C12.2266 3.70868 12.5707 3.91086 12.8488 4.18884L15.0263 6.37747C13.8717 8.43973 12.069 10.0606 9.89953 10.9873H9.89376C9.57949 11.1229 9.31173 11.3479 9.1236 11.6346C8.93546 11.9212 8.83519 12.2568 8.83519 12.6C8.83519 12.9432 8.93546 13.2788 9.1236 13.5654C9.31173 13.8521 9.57949 14.0771 9.89376 14.2127C12.4324 15.2987 14.4544 17.3266 15.5373 19.8729C15.6722 20.1887 15.8964 20.4579 16.1824 20.6471C16.4683 20.8363 16.8033 20.9371 17.1458 20.9371C17.4884 20.9371 17.8234 20.8363 18.1093 20.6471C18.3952 20.4579 18.6195 20.1887 18.7543 19.8729C19.8368 17.3266 21.8587 15.2985 24.3972 14.2127C24.7117 14.0772 24.9796 13.8522 25.1679 13.5655C25.3562 13.2788 25.4565 12.943 25.4565 12.5997C25.4565 12.2564 25.3562 11.9206 25.1679 11.6339C24.9796 11.3472 24.7117 11.1222 24.3972 10.9866H24.3934C22.2252 10.0592 20.4237 8.43844 19.2698 6.37683L21.4474 4.1927C21.7252 3.91438 22.0694 3.71185 22.4472 3.60434C22.8249 3.49683 23.2238 3.48788 23.606 3.57834C23.9882 3.66881 24.341 3.8557 24.631 4.12128C24.921 4.38686 25.1386 4.72233 25.2631 5.0959L30.8868 22.0197C31.0374 22.4567 31.3537 22.8165 31.7671 23.021C32.1805 23.2255 32.6576 23.2581 33.0949 23.1119C33.5322 22.9656 33.8943 22.6523 34.1026 22.2398C34.3109 21.8274 34.3486 21.3492 34.2075 20.909L34.205 20.9071ZM18.5577 14.0181C18.0468 14.5307 17.5758 15.0818 17.1487 15.6665C16.291 14.4964 15.2615 13.4634 14.0951 12.6029C15.2612 11.7443 16.2907 10.7133 17.1487 9.54511C18.0064 10.7144 19.036 11.7465 20.2023 12.6061C19.6191 13.0342 19.0693 13.5062 18.5577 14.0181V14.0181Z" fill="#D9D9D9"/>
<path d="M43.7384 20.0161C43.6812 19.9605 43.6359 19.8936 43.6055 19.8197C43.5751 19.7458 43.5602 19.6664 43.5617 19.5864V3.11736C43.555 2.9499 43.6138 2.78646 43.7256 2.66191C43.7824 2.6027 43.8512 2.55632 43.9273 2.52585C44.0033 2.49539 44.085 2.48155 44.1669 2.48525H46.2099C46.5293 2.48525 46.7816 2.64542 46.9669 2.96576L51.8343 12.0235L56.7016 2.96576C56.8861 2.64499 57.1382 2.48482 57.458 2.48525H59.476C59.5598 2.48141 59.6435 2.49514 59.7216 2.52555C59.7998 2.55596 59.8709 2.60238 59.9302 2.66186C59.9895 2.72134 60.0357 2.79257 60.0661 2.871C60.0964 2.94943 60.1101 3.03333 60.1062 3.11736V19.5864C60.1099 19.6685 60.0961 19.7504 60.0657 19.8267C60.0354 19.9031 59.9891 19.972 59.9301 20.029C59.8059 20.1411 59.643 20.2001 59.476 20.1934H57.3069C57.2273 20.1938 57.1484 20.1783 57.0748 20.1479C57.0013 20.1175 56.9344 20.0728 56.8781 20.0164C56.8219 19.96 56.7773 19.8929 56.747 19.8191C56.7167 19.7453 56.7013 19.6662 56.7016 19.5864V8.71004L53.1958 15.3909C53.011 15.7622 52.7334 15.9477 52.3633 15.9472H51.304C50.9513 15.9472 50.6655 15.7618 50.4464 15.3909L46.9406 8.71004V19.5883C46.9445 19.7476 46.8856 19.902 46.7767 20.0181C46.7202 20.0777 46.6515 20.1244 46.5753 20.155C46.4992 20.1856 46.4174 20.1994 46.3354 20.1954H44.1662C44.0865 20.1966 44.0073 20.1813 43.9337 20.1505C43.8601 20.1196 43.7936 20.0739 43.7384 20.0161V20.0161Z" fill="#D9D9D9"/>
<path d="M63.7928 18.8279C62.6912 17.7487 62.1069 16.2138 62.0399 14.2233L62.0149 13.5911C62.0149 11.4828 62.5655 9.82159 63.6666 8.60747C64.7677 7.39335 66.2937 6.78607 68.2445 6.78564C70.2452 6.78564 71.7878 7.39292 72.8723 8.60747C73.9568 9.82202 74.4993 11.4411 74.4997 13.4646V13.9959C74.501 14.0758 74.486 14.1552 74.4556 14.2291C74.4252 14.303 74.3801 14.3699 74.3229 14.4256C74.2633 14.4847 74.1923 14.5309 74.1142 14.5614C74.0361 14.5919 73.9526 14.606 73.8689 14.6029H65.4957V14.8053C65.529 15.75 65.7852 16.5301 66.2642 17.1455C66.7433 17.7609 67.4032 18.0686 68.2438 18.0686C69.2028 18.0686 69.9846 17.6808 70.5892 16.9053C70.7409 16.7196 70.8581 16.6059 70.9427 16.5635C71.0272 16.5211 71.1694 16.4993 71.3711 16.4993H73.5909C73.7319 16.4965 73.8696 16.5418 73.9816 16.6277C74.0354 16.6692 74.0784 16.7231 74.1069 16.7849C74.1355 16.8466 74.1487 16.9144 74.1455 16.9823C74.1455 17.3871 73.906 17.8635 73.427 18.4117C72.9479 18.9598 72.2626 19.4363 71.3711 19.841C70.4796 20.2457 69.4455 20.448 68.2688 20.448C66.3863 20.4472 64.8943 19.9072 63.7928 18.8279ZM71.0189 12.4528V12.4021C71.0189 11.4072 70.7708 10.6102 70.2747 10.0111C69.7786 9.41196 69.1018 9.11217 68.2445 9.11175C67.3871 9.11175 66.7147 9.41153 66.2271 10.0111C65.7395 10.6107 65.4957 11.4077 65.4957 12.4021V12.4528H71.0189Z" fill="#D9D9D9"/>
<path d="M76.2038 20.0165C76.1465 19.9609 76.1013 19.894 76.0709 19.8201C76.0405 19.7461 76.0255 19.6667 76.027 19.5868V7.67166C76.024 7.58766 76.0381 7.50393 76.0685 7.4256C76.0989 7.34727 76.1449 7.27601 76.2038 7.2162C76.2593 7.1588 76.326 7.11344 76.3997 7.08294C76.4734 7.05244 76.5525 7.03745 76.6322 7.0389H78.7009C78.7847 7.03525 78.8683 7.04913 78.9464 7.07965C79.0246 7.11016 79.0955 7.15665 79.1548 7.21616C79.2141 7.27567 79.2604 7.3469 79.2907 7.42532C79.321 7.50373 79.3348 7.58762 79.3311 7.67166V8.71041C80.1718 7.59693 81.3824 7.04019 82.963 7.04019H84.0223C84.1033 7.03414 84.1847 7.0457 84.2609 7.07407C84.337 7.10244 84.4062 7.14695 84.4636 7.20457C84.5211 7.2622 84.5655 7.33158 84.5938 7.40797C84.622 7.48437 84.6336 7.56598 84.6275 7.64724V9.49412C84.6312 9.65359 84.5723 9.80814 84.4636 9.92453C84.4069 9.98394 84.3382 10.0305 84.2621 10.0609C84.186 10.0914 84.1042 10.1051 84.0223 10.1012H82.0299C81.2396 10.1012 80.6175 10.329 80.1636 10.7847C79.7098 11.2404 79.4829 11.8643 79.4829 12.6566V19.588C79.4831 19.6679 79.4676 19.747 79.4372 19.8208C79.4069 19.8946 79.3623 19.9617 79.3059 20.0181C79.2496 20.0745 79.1827 20.1192 79.1091 20.1496C79.0355 20.18 78.9566 20.1954 78.877 20.1951H76.6354C76.5551 20.197 76.4752 20.182 76.4009 20.1513C76.3266 20.1205 76.2595 20.0747 76.2038 20.0165V20.0165Z" fill="#D9D9D9"/>
<path d="M86.5223 18.9038C85.4211 17.8759 84.8368 16.4507 84.7694 14.628L84.7444 13.6162L84.7694 12.6045C84.8368 10.7835 85.4211 9.35846 86.5223 8.32934C87.6234 7.30023 89.099 6.78632 90.949 6.7876C92.2768 6.7876 93.3991 7.02314 94.3158 7.49423C95.2325 7.96532 95.9135 8.54347 96.3588 9.22869C96.8041 9.91177 97.0437 10.5653 97.0774 11.1893C97.087 11.2689 97.0771 11.3496 97.0485 11.4245C97.0199 11.4994 96.9736 11.5662 96.9134 11.619C96.7953 11.7341 96.6368 11.7978 96.4722 11.7963H94.2306C94.0457 11.7963 93.9113 11.7582 93.8271 11.682C93.743 11.6058 93.6589 11.4668 93.5748 11.2651C93.3233 10.6227 92.9914 10.1589 92.5789 9.87366C92.1665 9.58843 91.6411 9.44497 91.0028 9.44326C90.145 9.44326 89.4766 9.71306 88.9976 10.2527C88.5185 10.7923 88.2623 11.6188 88.229 12.7323L88.2034 13.6683L88.229 14.5034C88.3298 16.6965 89.2546 17.7929 91.0034 17.7924C91.6584 17.7924 92.188 17.6532 92.5924 17.3749C92.9967 17.0965 93.3244 16.6286 93.5755 15.9713C93.6224 15.819 93.7047 15.6801 93.8156 15.5659C93.9078 15.4802 94.0464 15.4374 94.2313 15.4374H96.4728C96.6373 15.436 96.7958 15.4995 96.9141 15.6141C96.9742 15.6671 97.0205 15.734 97.0491 15.809C97.0776 15.884 97.0876 15.9648 97.078 16.0445C97.0447 16.6346 96.8099 17.2712 96.3736 17.9543C95.9372 18.6374 95.2645 19.2235 94.3555 19.7125C93.4478 20.2016 92.3129 20.4462 90.9509 20.4462C89.0992 20.4466 87.623 19.9325 86.5223 18.9038Z" fill="#D9D9D9"/>
<path d="M99.7658 18.929C98.8743 17.9174 98.4287 16.5256 98.4292 14.7534V7.64598C98.4255 7.56389 98.4393 7.48195 98.4697 7.40562C98.5 7.3293 98.5463 7.26035 98.6053 7.20337C98.7215 7.09454 98.8755 7.03552 99.0344 7.03891H101.303C101.382 7.03866 101.461 7.05419 101.535 7.08461C101.608 7.11503 101.675 7.15973 101.731 7.21615C101.788 7.27257 101.832 7.3396 101.863 7.41336C101.893 7.48713 101.908 7.56619 101.908 7.64598V14.6031C101.908 16.6772 102.808 17.7144 104.607 17.7148C105.481 17.7148 106.175 17.4365 106.688 16.8797C107.2 16.323 107.457 15.5641 107.456 14.6031V7.64598C107.453 7.56384 107.467 7.48187 107.497 7.40555C107.527 7.32922 107.574 7.2603 107.633 7.20337C107.749 7.09446 107.903 7.03542 108.061 7.03891H110.306C110.387 7.03287 110.469 7.04443 110.545 7.0728C110.621 7.10117 110.69 7.14568 110.748 7.20331C110.805 7.26093 110.849 7.3303 110.878 7.4067C110.906 7.48309 110.917 7.56471 110.911 7.64598V19.5868C110.915 19.7461 110.856 19.9005 110.747 20.0165C110.691 20.0762 110.622 20.1229 110.546 20.1535C110.47 20.1841 110.388 20.1978 110.306 20.1938H108.213C108.133 20.1941 108.054 20.1786 107.981 20.1481C107.907 20.1177 107.84 20.073 107.784 20.0166C107.728 19.9602 107.683 19.8932 107.653 19.8194C107.623 19.7456 107.607 19.6666 107.607 19.5868V18.5493C106.683 19.814 105.287 20.4465 103.421 20.4469C101.876 20.4469 100.657 19.9409 99.7658 18.929Z" fill="#D9D9D9"/>
<path d="M113.279 20.0165C113.221 19.9609 113.176 19.894 113.146 19.8201C113.115 19.7461 113.1 19.6667 113.102 19.5868V7.67165C113.099 7.58766 113.113 7.50392 113.143 7.4256C113.174 7.34727 113.22 7.27601 113.279 7.2162C113.334 7.15876 113.401 7.11338 113.474 7.08288C113.548 7.05238 113.627 7.03741 113.707 7.0389H115.775C115.859 7.03526 115.943 7.04913 116.021 7.07964C116.099 7.11015 116.17 7.15664 116.229 7.21614C116.289 7.27564 116.335 7.34685 116.365 7.42527C116.396 7.50368 116.41 7.58759 116.406 7.67165V8.71041C117.246 7.59693 118.457 7.04018 120.038 7.04018H121.092C121.173 7.03414 121.254 7.0457 121.331 7.07407C121.407 7.10244 121.476 7.14695 121.533 7.20457C121.591 7.26219 121.635 7.33157 121.663 7.40797C121.692 7.48436 121.703 7.56597 121.697 7.64724V9.49412C121.701 9.65354 121.642 9.80799 121.533 9.92453C121.476 9.98374 121.408 10.0301 121.332 10.0606C121.256 10.091 121.174 10.1049 121.092 10.1012H119.1C118.309 10.1012 117.687 10.329 117.233 10.7847C116.779 11.2404 116.552 11.8643 116.552 12.6566V19.588C116.552 19.6679 116.537 19.747 116.507 19.8208C116.476 19.8946 116.432 19.9616 116.375 20.0181C116.319 20.0745 116.252 20.1192 116.179 20.1496C116.105 20.18 116.026 20.1954 115.947 20.1951H113.702C113.623 20.196 113.545 20.1807 113.472 20.1499C113.399 20.1192 113.333 20.0738 113.279 20.0165V20.0165Z" fill="#D9D9D9"/>
<path d="M125.671 24.8482C125.62 24.8046 125.579 24.7504 125.55 24.6893C125.522 24.6282 125.507 24.5616 125.507 24.4943C125.512 24.3537 125.547 24.2159 125.608 24.0896L127.601 19.4091L122.757 7.94945C122.7 7.83906 122.666 7.71856 122.656 7.59484C122.67 7.4483 122.732 7.3106 122.833 7.20299C122.88 7.14991 122.938 7.10774 123.004 7.07935C123.069 7.05097 123.139 7.03704 123.211 7.03853H125.304C125.607 7.03853 125.825 7.19913 125.96 7.51904L129.315 15.7667L132.719 7.51904C132.887 7.19913 133.122 7.03896 133.424 7.03853H135.467C135.537 7.03657 135.606 7.04901 135.671 7.07509C135.736 7.10116 135.795 7.14031 135.845 7.19013C135.893 7.23575 135.931 7.29076 135.957 7.35174C135.983 7.41273 135.996 7.47841 135.996 7.54474C135.99 7.68517 135.956 7.82299 135.895 7.94945L128.761 24.5193C128.626 24.8401 128.391 25.0005 128.056 25.0005H126.038C125.901 24.9999 125.769 24.9452 125.671 24.8482Z" fill="#D9D9D9"/>
</g>
<defs>
<clipPath id="clip0_54623_710">
<rect width="136" height="25" fill="white"/>
</clipPath>
</defs>
</svg>
`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            h(De, {
                                              children: h(ue, {
                                                className: `framer-1v3jrk9`,
                                                "data-framer-name": `Logo`,
                                                opacity: 0.85,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 122 27"><path d="M 3.323 3.042 C 4.957 1.363 7.175 0.382 9.424 0.26 C 10.193 0.26 10.965 0.265 11.735 0.258 C 11.696 1.146 11.735 2.037 11.712 2.925 C 11.603 4.91 10.921 6.85 9.772 8.408 C 8.28 10.503 5.996 11.908 3.572 12.272 C 2.514 12.456 1.44 12.339 0.374 12.371 C 0.392 11.394 0.335 10.413 0.406 9.438 C 0.614 7.02 1.675 4.703 3.323 3.042 Z M 12.448 0.258 C 13.272 0.268 14.097 0.253 14.925 0.263 C 16.984 0.419 19.015 1.27 20.566 2.746 C 22.276 4.325 23.448 6.584 23.748 8.998 C 23.88 10.117 23.797 11.249 23.848 12.373 C 23.126 12.371 22.408 12.368 21.687 12.373 C 19.914 12.321 18.172 11.704 16.688 10.664 C 16.004 10.137 15.301 9.602 14.788 8.871 C 13.657 7.506 12.903 5.828 12.609 4.027 C 12.392 2.783 12.48 1.514 12.447 0.258 Z M 0.375 13.085 C 1.108 13.13 1.843 13.048 2.573 13.135 C 5.7 13.207 8.734 15.098 10.354 17.976 C 11.283 19.588 11.783 21.499 11.718 23.397 C 11.716 24.019 11.725 24.639 11.708 25.258 C 10.549 25.221 9.377 25.323 8.228 25.081 C 5.677 24.619 3.331 22.984 1.919 20.651 C 0.849 18.954 0.315 16.881 0.371 14.834 C 0.371 14.249 0.371 13.667 0.375 13.085 Z M 19.943 13.349 C 21.2 13.048 22.496 13.097 23.774 13.097 L 23.83 13.157 C 23.802 14.458 23.897 15.774 23.654 17.06 C 23.144 19.946 21.369 22.524 18.982 23.939 C 17.496 24.83 15.79 25.268 14.091 25.248 C 13.548 25.25 13.003 25.238 12.459 25.255 C 12.459 24.178 12.418 23.096 12.531 22.024 C 12.795 19.429 14.098 17.013 15.973 15.381 C 17.133 14.396 18.496 13.682 19.943 13.349 Z M 33.317 20.44 C 33.317 20.878 33.176 21.248 32.895 21.551 C 32.629 21.838 32.292 21.981 31.885 21.981 C 31.494 21.981 31.165 21.838 30.9 21.551 C 30.634 21.248 30.501 20.877 30.501 20.439 L 30.501 4.824 C 30.501 4.386 30.634 4.024 30.9 3.737 C 31.181 3.434 31.525 3.282 31.932 3.282 C 32.339 3.282 32.668 3.434 32.918 3.737 C 33.184 4.024 33.317 4.386 33.317 4.824 L 33.317 20.44 Z M 44.623 8.462 C 45.029 8.462 45.366 8.614 45.632 8.917 C 45.898 9.204 46.031 9.566 46.031 10.004 L 46.031 16.421 C 46.031 18.207 45.569 19.622 44.646 20.667 C 43.723 21.711 42.393 22.233 40.656 22.233 C 38.919 22.233 37.589 21.711 36.665 20.667 C 35.758 19.622 35.304 18.207 35.304 16.421 L 35.304 10.004 C 35.304 9.566 35.437 9.203 35.703 8.917 C 35.969 8.614 36.305 8.462 36.712 8.462 C 37.119 8.462 37.456 8.614 37.722 8.917 C 37.988 9.204 38.121 9.566 38.121 10.004 L 38.121 16.421 C 38.121 17.449 38.332 18.216 38.754 18.721 C 39.177 19.209 39.811 19.454 40.656 19.454 C 41.517 19.454 42.158 19.209 42.581 18.721 C 43.003 18.215 43.214 17.449 43.214 16.421 L 43.214 10.004 C 43.214 9.566 43.347 9.203 43.613 8.917 C 43.879 8.614 44.216 8.462 44.623 8.462 Z M 54.502 8.209 C 55.754 8.209 56.677 8.538 57.272 9.195 C 57.867 9.836 58.258 10.669 58.445 11.696 L 58.047 11.469 L 58.234 11.065 C 58.422 10.677 58.711 10.264 59.103 9.827 C 59.494 9.372 59.963 8.993 60.511 8.69 C 61.074 8.369 61.7 8.209 62.389 8.209 C 63.516 8.209 64.368 8.471 64.947 8.993 C 65.542 9.515 65.949 10.214 66.168 11.09 C 66.387 11.95 66.497 12.909 66.497 13.971 L 66.497 20.44 C 66.497 20.878 66.363 21.248 66.097 21.551 C 65.831 21.838 65.495 21.981 65.088 21.981 C 64.681 21.981 64.345 21.838 64.079 21.551 C 63.813 21.248 63.68 20.877 63.68 20.439 L 63.68 13.971 C 63.68 13.415 63.617 12.918 63.492 12.48 C 63.367 12.025 63.14 11.663 62.811 11.394 C 62.483 11.124 62.013 10.99 61.403 10.99 C 60.808 10.99 60.3 11.124 59.877 11.394 C 59.467 11.65 59.133 12.027 58.915 12.48 C 58.711 12.919 58.61 13.415 58.61 13.971 L 58.61 20.44 C 58.61 20.878 58.477 21.248 58.211 21.552 C 57.945 21.838 57.608 21.981 57.202 21.981 C 56.795 21.981 56.458 21.838 56.192 21.552 C 55.926 21.248 55.793 20.878 55.793 20.44 L 55.793 13.971 C 55.793 13.415 55.731 12.918 55.605 12.48 C 55.48 12.025 55.253 11.663 54.925 11.394 C 54.596 11.124 54.126 10.99 53.516 10.99 C 52.922 10.99 52.413 11.124 51.991 11.394 C 51.568 11.664 51.247 12.026 51.028 12.48 C 50.825 12.919 50.723 13.415 50.723 13.971 L 50.723 20.44 C 50.723 20.878 50.59 21.248 50.324 21.552 C 50.058 21.838 49.722 21.981 49.315 21.981 C 48.908 21.981 48.572 21.838 48.306 21.552 C 48.039 21.248 47.906 20.878 47.906 20.44 L 47.906 10.004 C 47.906 9.566 48.039 9.204 48.306 8.917 C 48.572 8.614 48.908 8.463 49.315 8.463 C 49.722 8.463 50.058 8.614 50.324 8.918 C 50.59 9.204 50.723 9.566 50.723 10.004 L 50.723 11.091 L 50.371 11.015 C 50.512 10.728 50.708 10.425 50.958 10.105 C 51.224 9.752 51.532 9.438 51.873 9.17 C 52.233 8.884 52.632 8.656 53.07 8.488 C 53.509 8.303 53.986 8.21 54.502 8.21 Z M 71.024 20.44 C 71.024 20.878 70.891 21.248 70.624 21.551 C 70.359 21.838 70.022 21.981 69.615 21.981 C 69.209 21.981 68.872 21.838 68.606 21.551 C 68.34 21.248 68.207 20.877 68.207 20.439 L 68.207 10.004 C 68.207 9.566 68.34 9.203 68.606 8.917 C 68.872 8.614 69.209 8.462 69.615 8.462 C 70.022 8.462 70.359 8.614 70.624 8.917 C 70.891 9.204 71.024 9.566 71.024 10.004 L 71.024 20.439 Z M 69.592 6.82 C 69.06 6.82 68.684 6.727 68.465 6.542 C 68.246 6.357 68.137 6.028 68.137 5.556 L 68.137 5.076 C 68.137 4.588 68.254 4.259 68.488 4.091 C 68.739 3.905 69.115 3.813 69.615 3.813 C 70.163 3.813 70.547 3.905 70.765 4.091 C 70.984 4.276 71.094 4.605 71.094 5.077 L 71.094 5.557 C 71.094 6.045 70.977 6.382 70.742 6.567 C 70.507 6.736 70.124 6.82 69.592 6.82 Z M 79.458 8.209 C 80.616 8.209 81.492 8.471 82.087 8.993 C 82.697 9.515 83.112 10.214 83.331 11.09 C 83.565 11.95 83.683 12.909 83.683 13.971 L 83.683 20.44 C 83.683 20.878 83.55 21.248 83.284 21.551 C 83.018 21.838 82.681 21.981 82.274 21.981 C 81.868 21.981 81.531 21.838 81.265 21.551 C 80.999 21.248 80.866 20.877 80.866 20.439 L 80.866 13.971 C 80.866 13.415 80.796 12.918 80.655 12.48 C 80.53 12.025 80.295 11.663 79.951 11.394 C 79.607 11.124 79.114 10.99 78.472 10.99 C 77.846 10.99 77.314 11.124 76.876 11.394 C 76.462 11.654 76.122 12.029 75.89 12.48 C 75.671 12.919 75.561 13.415 75.561 13.971 L 75.561 20.44 C 75.561 20.878 75.429 21.248 75.162 21.552 C 74.896 21.838 74.56 21.981 74.153 21.981 C 73.746 21.981 73.41 21.838 73.144 21.552 C 72.878 21.248 72.745 20.878 72.745 20.44 L 72.745 10.004 C 72.745 9.566 72.878 9.204 73.144 8.917 C 73.41 8.614 73.746 8.463 74.153 8.463 C 74.56 8.463 74.896 8.614 75.162 8.918 C 75.429 9.204 75.561 9.566 75.561 10.004 L 75.561 11.091 L 75.209 11.015 C 75.35 10.728 75.553 10.425 75.82 10.105 C 76.086 9.768 76.399 9.456 76.758 9.17 C 77.118 8.884 77.525 8.656 77.979 8.488 C 78.433 8.303 78.926 8.21 79.458 8.21 Z M 97.618 15.234 C 97.618 16.616 97.329 17.837 96.75 18.898 C 96.186 19.943 95.42 20.759 94.45 21.349 C 93.495 21.939 92.423 22.233 91.234 22.233 C 90.045 22.233 88.965 21.939 87.995 21.349 C 87.04 20.759 86.274 19.942 85.694 18.898 C 85.131 17.837 84.849 16.615 84.849 15.234 C 84.849 13.853 85.131 12.64 85.694 11.596 C 86.274 10.534 87.04 9.709 87.995 9.119 C 88.965 8.513 90.045 8.209 91.234 8.209 C 92.423 8.209 93.495 8.513 94.45 9.119 C 95.42 9.709 96.186 10.534 96.75 11.595 C 97.329 12.64 97.618 13.853 97.618 15.234 Z M 94.802 15.234 C 94.802 14.375 94.637 13.634 94.309 13.01 C 93.996 12.37 93.566 11.873 93.018 11.52 C 92.486 11.166 91.891 10.989 91.234 10.989 C 90.577 10.989 89.974 11.166 89.427 11.52 C 88.894 11.874 88.464 12.371 88.136 13.01 C 87.823 13.634 87.666 14.375 87.666 15.234 C 87.666 16.077 87.823 16.818 88.136 17.458 C 88.464 18.081 88.894 18.57 89.427 18.924 C 89.974 19.277 90.577 19.454 91.234 19.454 C 91.891 19.454 92.486 19.277 93.018 18.923 C 93.566 18.569 93.996 18.081 94.309 17.458 C 94.637 16.817 94.802 16.077 94.802 15.234 Z M 108.116 8.462 C 108.523 8.462 108.86 8.614 109.126 8.917 C 109.392 9.204 109.525 9.566 109.525 10.004 L 109.525 16.421 C 109.525 18.207 109.063 19.622 108.14 20.667 C 107.216 21.711 105.887 22.233 104.15 22.233 C 102.413 22.233 101.083 21.711 100.159 20.667 C 99.252 19.622 98.798 18.207 98.798 16.421 L 98.798 10.004 C 98.798 9.566 98.931 9.203 99.197 8.917 C 99.463 8.614 99.799 8.462 100.206 8.462 C 100.613 8.462 100.949 8.614 101.216 8.917 C 101.482 9.204 101.615 9.566 101.615 10.004 L 101.615 16.421 C 101.615 17.449 101.826 18.216 102.248 18.721 C 102.671 19.209 103.305 19.454 104.15 19.454 C 105.01 19.454 105.652 19.209 106.074 18.721 C 106.497 18.215 106.708 17.449 106.708 16.421 L 106.708 10.004 C 106.708 9.566 106.841 9.203 107.107 8.917 C 107.373 8.614 107.71 8.462 108.116 8.462 Z M 110.673 19.883 C 110.516 19.648 110.446 19.344 110.462 18.974 C 110.477 18.603 110.681 18.283 111.072 18.013 C 111.308 17.849 111.59 17.777 111.87 17.812 C 112.151 17.828 112.425 17.98 112.691 18.267 C 113.145 18.755 113.622 19.134 114.123 19.404 C 114.624 19.673 115.25 19.808 116.001 19.808 C 116.236 19.791 116.494 19.757 116.775 19.707 C 117.057 19.64 117.3 19.505 117.503 19.302 C 117.722 19.083 117.832 18.755 117.832 18.317 C 117.832 17.946 117.714 17.651 117.48 17.432 C 117.245 17.213 116.932 17.028 116.541 16.876 C 116.125 16.711 115.702 16.568 115.273 16.447 C 114.788 16.295 114.287 16.127 113.771 15.941 C 113.286 15.764 112.821 15.527 112.386 15.234 C 111.962 14.929 111.609 14.522 111.353 14.046 C 111.088 13.558 110.955 12.943 110.955 12.202 C 110.955 11.359 111.173 10.644 111.612 10.054 C 112.05 9.464 112.613 9.009 113.302 8.69 C 113.999 8.371 114.75 8.208 115.508 8.209 C 115.993 8.209 116.502 8.277 117.034 8.412 C 117.566 8.53 118.074 8.732 118.559 9.018 C 119.045 9.288 119.452 9.65 119.78 10.105 C 119.952 10.358 120.054 10.661 120.085 11.014 C 120.116 11.368 119.968 11.688 119.639 11.975 C 119.405 12.177 119.131 12.269 118.818 12.253 C 118.505 12.219 118.247 12.101 118.043 11.899 C 117.777 11.528 117.417 11.233 116.963 11.014 C 116.525 10.795 116.017 10.686 115.437 10.686 C 115.177 10.689 114.917 10.723 114.663 10.787 C 114.397 10.837 114.162 10.964 113.959 11.166 C 113.755 11.351 113.654 11.655 113.654 12.076 C 113.654 12.463 113.771 12.775 114.006 13.01 C 114.241 13.23 114.553 13.415 114.945 13.567 C 115.351 13.701 115.782 13.836 116.236 13.971 C 116.705 14.106 117.182 14.266 117.667 14.451 C 118.153 14.636 118.598 14.881 119.005 15.184 C 119.412 15.487 119.741 15.883 119.991 16.371 C 120.242 16.843 120.367 17.45 120.367 18.191 C 120.367 19.05 120.132 19.782 119.662 20.389 C 119.193 20.996 118.606 21.459 117.902 21.779 C 117.216 22.078 116.483 22.232 115.743 22.233 C 114.82 22.233 113.896 22.065 112.973 21.728 C 112.05 21.374 111.283 20.759 110.673 19.883 Z" fill="var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path></svg>`,
                                                svgContentId: 9543818690,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            h(De, {
                                              children: h(ue, {
                                                className: `framer-18vlj7a`,
                                                "data-framer-name": `Symbol`,
                                                fill: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)) /* {"name":"White"} */`,
                                                intrinsicHeight: 27,
                                                intrinsicWidth: 27,
                                                svg: `<svg width="27" height="27" viewBox="-1 -1 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H25V25H0V0ZM6.25 6.25H18.75V18.75H6.25V6.25ZM18.75 18.75H25V12.5L18.75 18.75ZM18.75 18.75V25H12.5L18.75 18.75Z" fill="#D9D9D9"/>
</svg>
`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            h(De, {
                                              children: h(ue, {
                                                className: `framer-1yyaf74`,
                                                "data-framer-name": `Vector`,
                                                fill: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)) /* {"name":"White"} */`,
                                                intrinsicHeight: 32,
                                                intrinsicWidth: 114,
                                                svg: `<svg width="114" height="32" viewBox="0 0 114 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M53.9404 19.3106V30.6661H57.6949V18.5728C57.6949 17.0423 57.3611 15.6894 56.6938 14.5142C56.0262 13.3391 55.1085 12.4235 53.9404 11.7676C52.7999 11.1117 51.4789 10.7837 49.9769 10.7837C48.475 10.7837 47.1259 11.1253 45.9301 11.8086C45.0294 12.3027 44.2784 12.9363 43.6771 13.7095V1.39586H39.9227V30.6661H43.6771V19.3106C43.6771 18.3268 43.8996 17.4522 44.3448 16.687C44.7896 15.9218 45.4015 15.3205 46.1805 14.8832C46.9592 14.4459 47.8492 14.2273 48.8506 14.2273C50.3522 14.2273 51.5761 14.7056 52.5218 15.6621C53.4675 16.6187 53.9404 17.8348 53.9404 19.3106Z" fill="#D9D9D9"/>
<path d="M64.2811 30.0109C65.5883 30.7213 67.0622 31.0768 68.7032 31.0768C70.3719 31.0768 71.8324 30.7213 73.0839 30.0109C74.363 29.273 75.3645 28.2617 76.0878 26.9773C76.8107 25.6928 77.1722 24.2033 77.1722 22.5089V11.1941H73.4177V22.3447C73.4177 23.9572 73.0005 25.2281 72.1658 26.1574C71.3315 27.0592 70.1775 27.5102 68.7032 27.5102C67.7298 27.5102 66.8817 27.3053 66.1584 26.8953C65.435 26.4854 64.8788 25.8977 64.4897 25.1322C64.1278 24.3399 63.9473 23.4106 63.9473 22.3447V11.1941H60.1924V22.5089C60.1924 24.2033 60.5539 25.6928 61.2772 26.9773C62.0001 28.2617 63.0016 29.273 64.2811 30.0109Z" fill="#D9D9D9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M89.3017 31.0762C87.3269 31.0762 85.5469 30.6388 83.9615 29.7642C82.3762 28.8624 81.1243 27.6463 80.2066 26.1157C79.289 24.585 78.8299 22.8499 78.8299 20.9094C78.8299 18.9962 79.2751 17.2744 80.1652 15.744C81.0829 14.2135 82.3067 13.011 83.8363 12.1364C85.394 11.2345 87.1322 10.7835 89.0513 10.7835C90.887 10.7835 92.5 11.1935 93.8906 12.0134C95.3092 12.8333 96.4078 13.9675 97.1864 15.416C97.9931 16.8645 98.3964 18.5043 98.3964 20.3352C98.3964 20.6085 98.3826 20.9094 98.3546 21.2374C98.3269 21.5378 98.2712 21.893 98.1879 22.3033H82.6686C82.8009 23.0614 83.0371 23.7582 83.3773 24.3941C83.9335 25.4053 84.7263 26.1976 85.7554 26.7717C86.7845 27.3182 87.9665 27.5915 89.3017 27.5915C90.4142 27.5915 91.4294 27.4001 92.3471 27.0174C93.2929 26.635 94.0992 26.0609 94.7668 25.2958L97.1864 27.7146C96.2411 28.8077 95.0729 29.6411 93.682 30.2152C92.3195 30.789 90.859 31.0762 89.3017 31.0762ZM83.3358 17.3017C83.0241 17.8822 82.8041 18.5244 82.6765 19.2285H94.7367C94.6344 18.4226 94.4219 17.712 94.0991 17.0968C93.6267 16.1676 92.9591 15.457 92.0967 14.965C91.2347 14.4458 90.1918 14.1862 88.9679 14.1862C87.6884 14.1862 86.5621 14.4594 85.5883 15.006C84.6149 15.5526 83.864 16.3179 83.3358 17.3017Z" fill="#D9D9D9"/>
<path d="M100.817 29.4362C101.651 29.9555 102.555 30.3655 103.529 30.6659C104.53 30.9396 105.587 31.0762 106.699 31.0762C108.924 31.0762 110.69 30.5433 111.998 29.4773C113.333 28.4114 114 26.9631 114 25.1316C114 23.9294 113.736 22.959 113.208 22.221C112.707 21.4831 112.053 20.8958 111.247 20.4583C110.44 20.0212 109.592 19.6796 108.702 19.4335C107.812 19.1602 106.95 18.9005 106.115 18.6546C105.309 18.4086 104.655 18.108 104.154 17.7527C103.654 17.3974 103.403 16.8918 103.403 16.2359C103.403 15.58 103.681 15.0744 104.238 14.7191C104.822 14.3365 105.656 14.1452 106.741 14.1452C107.77 14.1452 108.688 14.3365 109.495 14.7191C110.329 15.1017 111.024 15.6483 111.58 16.3589L114 13.9812C113.221 12.9153 112.22 12.1227 110.996 11.6035C109.8 11.0569 108.424 10.7835 106.866 10.7835C105.392 10.7835 104.126 11.0159 103.07 11.4805C102.04 11.9451 101.234 12.6147 100.65 13.4892C100.066 14.3365 99.7737 15.3477 99.7737 16.5229C99.7737 17.698 100.024 18.6409 100.525 19.3516C101.053 20.0619 101.72 20.6225 102.527 21.0324C103.334 21.4423 104.182 21.7839 105.072 22.0572C105.99 22.3033 106.852 22.5626 107.659 22.8359C108.465 23.082 109.119 23.41 109.619 23.8199C110.148 24.2027 110.412 24.7492 110.412 25.4596C110.412 26.1704 110.092 26.7305 109.453 27.1405C108.813 27.5232 107.909 27.7146 106.741 27.7146C105.573 27.7146 104.516 27.5096 103.57 27.0997C102.625 26.6622 101.79 26.0062 101.067 25.1316L98.6474 27.5096C99.2593 28.2475 99.9823 28.8896 100.817 29.4362Z" fill="#D9D9D9"/>
<path d="M110.486 4.65521V5.38173H109.596V7.59212H108.751V5.38173H107.861V4.65521H110.486Z" fill="#D9D9D9"/>
<path d="M113.953 4.61127V7.6054H113.108V6.15236L112.489 6.83486H112.236L111.617 6.15236V7.6054H110.772V4.61127H111.071L112.363 5.88816L113.655 4.61127H113.953Z" fill="#D9D9D9"/>
<path d="M3.9218 9.43414C5.09109 13.1181 9.07819 15.1731 12.8272 14.0242C16.5763 12.8752 25.4561 6.87703 24.2867 3.19307C23.1174 -0.490899 12.3421 -0.46559 8.59299 0.68339C4.84391 1.83233 2.75255 5.75018 3.9218 9.43414Z" fill="#D9D9D9"/>
<path d="M1.65038 29.6349C3.8509 31.7971 7.41826 31.7971 9.61877 29.6349C11.8193 27.4724 15.8033 20.0519 13.6032 17.8897C11.4027 15.7276 3.8509 19.6427 1.65038 21.8045C-0.550128 23.9671 -0.550128 27.4724 1.65038 29.6349Z" fill="#D9D9D9"/>
<path d="M22.7046 31.7602C26.4982 32.759 30.3973 30.5471 31.4137 26.8194C32.4298 23.092 32.0193 12.5115 28.2261 11.5126C24.4325 10.514 18.6933 19.475 17.6768 23.2027C16.6602 26.93 18.9113 30.7614 22.7046 31.7602Z" fill="#D9D9D9"/>
</svg>
`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            h(De, {
                                              children: h(ue, {
                                                className: `framer-1sy3ma2`,
                                                "data-framer-name": `Logo`,
                                                opacity: 0.85,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 84 22"><path d="M 43.324 3.734 C 41.798 4.775 40.363 6.015 39.02 7.452 C 37.678 8.852 36.365 10.29 35.082 11.763 C 34.349 12.59 33.631 13.434 32.929 14.296 L 30.823 16.883 C 30.443 17.403 30.045 17.907 29.632 18.392 C 29.22 18.878 28.823 19.381 28.442 19.901 C 29.077 19.723 29.703 19.507 30.319 19.254 C 30.896 19.026 31.476 18.811 32.059 18.607 C 32.553 18.489 33.042 18.345 33.525 18.176 C 34.036 17.998 34.556 17.855 35.082 17.745 C 35.592 17.603 36.114 17.53 36.639 17.53 C 37.188 17.494 37.692 17.583 38.15 17.799 C 38.73 18.05 39.081 18.482 39.203 19.092 C 39.295 19.487 39.264 19.865 39.111 20.224 C 39.621 20.048 40.125 19.85 40.622 19.631 C 41.142 19.415 41.63 19.218 42.088 19.038 L 44.744 18.068 C 45.627 17.71 46.53 17.422 47.446 17.206 C 47.69 17.134 47.98 17.098 48.316 17.098 C 48.682 17.062 49.003 17.098 49.277 17.206 C 49.552 17.314 49.751 17.511 49.873 17.799 C 50.025 18.05 50.041 18.428 49.919 18.931 C 49.827 19.254 49.644 19.523 49.369 19.739 C 49.094 19.918 48.774 20.062 48.407 20.17 C 48.044 20.277 47.678 20.367 47.308 20.44 C 46.942 20.476 46.652 20.529 46.438 20.601 C 45.41 20.957 44.387 21.334 43.37 21.733 L 40.348 22.811 C 39.786 23.004 39.221 23.183 38.653 23.349 C 38.043 23.565 37.463 23.601 36.913 23.457 C 36.7 23.421 36.471 23.313 36.226 23.134 C 35.707 22.667 35.463 22.236 35.494 21.841 C 35.524 21.445 35.662 21.05 35.906 20.655 L 35.356 20.655 C 34.257 20.871 33.158 21.14 32.059 21.464 C 31.151 21.759 30.25 22.082 29.357 22.433 C 28.469 22.794 27.546 23.029 26.61 23.134 C 26.274 23.17 25.938 23.098 25.602 22.918 C 25.266 22.774 25.022 22.469 24.87 22.002 C 24.748 21.607 24.748 21.23 24.87 20.871 C 24.994 20.469 25.164 20.089 25.373 19.739 C 24.488 20.35 23.649 20.871 22.855 21.302 C 22.092 21.697 21.511 21.984 21.115 22.164 C 20.263 22.587 19.408 23 18.55 23.403 C 17.634 23.834 16.718 24.032 15.802 23.996 C 14.795 23.924 14.185 23.601 13.971 23.026 C 13.757 22.451 13.803 21.733 14.108 20.871 C 14.383 19.973 14.826 19.021 15.436 18.015 C 16.035 16.99 16.677 16.001 17.359 15.051 C 18.062 14.116 18.703 13.308 19.283 12.626 C 19.863 11.907 20.245 11.44 20.428 11.224 L 21.069 10.47 L 18.458 10.47 C 17.604 10.47 16.734 10.488 15.848 10.524 C 14.078 10.596 12.322 10.703 10.582 10.847 C 8.811 10.955 7.041 11.116 5.27 11.332 C 4.629 11.44 4.003 11.548 3.393 11.656 C 2.751 11.727 2.11 11.853 1.469 12.033 C 1.317 12.069 1.149 12.123 0.966 12.194 C 0.782 12.266 0.614 12.266 0.462 12.194 C 0.126 12.051 -0.027 11.799 0.004 11.44 C 0.004 11.045 0.157 10.793 0.462 10.686 C 4.125 9.572 7.896 8.872 11.773 8.584 C 15.599 8.263 19.432 8.066 23.267 7.991 C 24.061 7.129 24.854 6.285 25.648 5.458 C 26.45 4.623 27.259 3.797 28.075 2.979 C 28.472 2.549 28.93 2.01 29.449 1.363 C 29.998 0.68 30.548 0.249 31.097 0.07 C 31.403 -0.038 31.662 -0.02 31.876 0.123 C 32.12 0.231 32.303 0.429 32.425 0.716 C 32.548 0.968 32.593 1.255 32.563 1.578 C 32.532 1.902 32.41 2.189 32.197 2.441 C 31.259 3.366 30.328 4.3 29.403 5.243 C 28.481 6.148 27.58 7.082 26.701 8.045 C 27.159 8.045 27.587 8.117 27.984 8.261 C 28.35 8.369 28.67 8.548 28.945 8.8 C 29.251 9.051 29.464 9.428 29.586 9.931 C 29.678 10.363 29.632 10.74 29.449 11.063 C 29.272 11.345 29.035 11.567 28.762 11.71 C 28.487 11.817 28.197 11.835 27.892 11.764 C 27.617 11.656 27.404 11.422 27.251 11.063 C 26.854 10.883 26.396 10.758 25.877 10.686 C 25.358 10.578 24.87 10.524 24.412 10.524 L 23.954 11.009 C 22.617 12.507 21.289 14.016 19.97 15.536 C 18.596 17.152 17.512 18.895 16.718 20.763 C 17.787 20.512 18.886 20.152 20.016 19.685 C 21.148 19.217 22.263 18.696 23.359 18.123 C 24.457 17.548 25.541 16.937 26.61 16.29 C 27.679 15.608 28.671 14.907 29.587 14.188 C 30.739 12.797 31.915 11.431 33.113 10.093 C 34.319 8.743 35.556 7.432 36.822 6.159 C 37.586 5.367 38.365 4.595 39.157 3.842 C 39.939 3.098 40.748 2.397 41.584 1.74 C 41.92 1.453 42.287 1.273 42.683 1.201 C 43.111 1.093 43.462 1.291 43.737 1.794 C 43.889 2.117 43.92 2.477 43.828 2.872 C 43.767 3.231 43.599 3.518 43.325 3.734 Z" fill="var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path><path d="M 68.278 16.628 C 67.586 16.69 66.899 16.81 66.227 16.988 C 65.573 17.138 64.904 17.287 64.22 17.437 C 62.453 17.852 60.684 18.256 58.913 18.649 C 57.144 19.011 55.358 19.281 53.561 19.458 C 53.057 19.52 52.552 19.565 52.045 19.592 C 51.524 19.622 51.002 19.607 50.484 19.548 C 49.981 19.488 49.486 19.367 49.012 19.188 C 48.537 19.039 48.097 18.794 47.719 18.47 C 47.392 18.2 47.139 17.886 46.961 17.527 C 46.753 17.167 46.634 16.793 46.604 16.404 C 46.545 16.015 46.574 15.64 46.693 15.281 C 46.812 14.892 47.035 14.548 47.362 14.248 C 47.57 14.039 47.897 13.874 48.343 13.754 C 48.819 13.605 49.339 13.5 49.904 13.44 C 50.467 13.38 51.034 13.365 51.599 13.395 C 52.164 13.425 52.654 13.53 53.071 13.71 C 53.487 13.889 53.769 14.144 53.918 14.473 C 54.096 14.772 54.082 15.162 53.873 15.64 C 53.695 16 53.427 16.254 53.071 16.404 C 52.714 16.554 52.312 16.658 51.867 16.718 C 51.406 16.748 50.944 16.748 50.484 16.718 C 50.067 16.667 49.65 16.607 49.235 16.539 C 49.354 16.658 49.592 16.763 49.949 16.853 C 50.306 16.913 50.677 16.958 51.064 16.988 C 51.435 17.016 51.807 17.031 52.179 17.033 L 52.848 17.033 C 54.301 16.913 55.746 16.703 57.174 16.404 C 58.619 16.107 60.061 15.793 61.499 15.461 C 62.54 15.221 63.566 14.982 64.577 14.742 C 65.602 14.476 66.646 14.281 67.698 14.159 C 68.145 14.129 68.516 14.234 68.813 14.473 C 69.111 14.712 69.304 14.997 69.393 15.326 C 69.482 15.626 69.438 15.91 69.259 16.18 C 69.111 16.449 68.784 16.598 68.278 16.628 Z" fill="var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path><path d="M 82.499 17.405 C 80.91 17.442 79.289 17.496 77.637 17.569 C 75.998 17.607 74.363 17.387 72.775 16.913 C 72.645 16.912 72.516 16.874 72.401 16.804 C 72.214 17.423 71.934 18.025 71.559 18.608 C 71.228 19.141 70.834 19.62 70.391 20.029 C 69.961 20.426 69.469 20.723 68.941 20.904 C 68.443 21.086 67.944 21.105 67.445 20.959 C 66.978 20.813 66.635 20.539 66.417 20.138 C 66.167 19.738 66.027 19.282 65.996 18.772 C 65.965 18.262 66.027 17.751 66.183 17.241 C 66.308 16.731 66.495 16.275 66.744 15.874 C 67.149 15.291 67.664 14.854 68.287 14.562 C 68.91 14.271 69.534 14.234 70.157 14.453 C 70.219 13.943 70.469 13.542 70.905 13.25 C 71.341 12.959 71.809 12.995 72.308 13.36 C 72.776 13.688 73.279 13.945 73.803 14.125 C 74.373 14.272 74.951 14.363 75.533 14.398 C 76.126 14.435 76.702 14.453 77.263 14.453 C 77.855 14.417 78.416 14.398 78.946 14.398 C 79.57 14.398 80.24 14.362 80.956 14.289 C 81.673 14.18 82.328 14.234 82.92 14.453 C 83.263 14.599 83.497 14.836 83.621 15.164 C 83.777 15.492 83.824 15.82 83.762 16.148 C 83.73 16.476 83.606 16.767 83.387 17.023 C 83.169 17.278 82.873 17.405 82.499 17.405 Z M 68.521 18.116 C 68.614 18.006 68.801 17.952 69.082 17.952 L 69.082 17.46 C 69.019 17.533 68.926 17.624 68.801 17.733 C 68.677 17.806 68.583 17.934 68.521 18.116 Z" fill="var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path></svg>`,
                                                svgContentId: 9421191917,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            h(De, {
                                              children: h(ue, {
                                                className: `framer-2u9w0w`,
                                                "data-framer-name": `Vector`,
                                                fill: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)) /* {"name":"White"} */`,
                                                intrinsicHeight: 22,
                                                intrinsicWidth: 72,
                                                svg: `<svg width="72" height="22" viewBox="0 0 72 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6248 16.9665C13.736 18.2743 13.2868 19.6202 12.2755 20.6253C11.2642 21.6307 9.90221 22.085 8.57381 21.9869C8.46267 20.6792 8.91187 19.3333 9.92316 18.3282C10.9344 17.323 12.2965 16.8686 13.6248 16.9665Z" fill="#D9D9D9"/>
<path d="M11.2197 15.1493C9.89399 16.5461 7.97878 17.3834 5.8878 17.2893C3.79705 17.1953 1.96745 16.1896 0.776469 14.6798C2.10221 13.283 4.01742 12.4457 6.10839 12.5397C8.19914 12.6338 10.0287 13.6395 11.2197 15.1493Z" fill="#D9D9D9"/>
<path d="M0 10.654C0.27694 7.38325 1.95182 4.248 4.86924 2.18279C7.78654 0.11769 11.3367 -0.445918 14.5712 0.338917C14.2944 3.60964 12.6194 6.74492 9.70198 8.8101C6.78467 10.8752 3.2345 11.4388 0 10.654Z" fill="#D9D9D9"/>
<path d="M53.7752 6.64319V8.63488H54.9881V19.0473H57.1443V8.63488H59.9746V6.64319H57.1443V4.60517C57.1443 4.02089 57.1981 3.5518 57.3061 3.19767C57.4138 2.84359 57.5577 2.59578 57.7373 2.45409C57.935 2.2948 58.1687 2.21515 58.4382 2.21515C58.6537 2.21515 58.8783 2.2594 59.112 2.34786C59.3636 2.41872 59.579 2.60457 59.7588 2.90556L60.9448 1.15291C60.8192 0.975816 60.6393 0.80765 60.4057 0.648356C60.1903 0.488979 59.9297 0.356161 59.6242 0.249956C59.3187 0.143723 58.9681 0.0906621 58.5729 0.0906621C57.8181 0.0906621 57.1712 0.249956 56.6321 0.568627C56.1112 0.86961 55.7067 1.32989 55.4192 1.94954C55.1317 2.5692 54.9881 3.36583 54.9881 4.33956V6.64319H53.7752Z" fill="#D9D9D9"/>
<path d="M19.9115 2.58255V19.0471H29.6149V16.9227H22.2026V2.58255H19.9115Z" fill="#D9D9D9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.363 19.3128C36.6928 19.3128 37.8429 19.0561 38.8131 18.5426C39.8014 18.0117 40.619 17.2326 41.2659 16.2058L39.5138 15.117C39.0648 15.8606 38.5167 16.4183 37.8698 16.79C37.223 17.1441 36.4771 17.3212 35.6325 17.3212C34.7879 17.3212 34.0693 17.1441 33.4763 16.79C32.8833 16.436 32.434 15.9226 32.1285 15.2498C31.8965 14.7386 31.7523 14.1455 31.6968 13.4706H41.4546V13.2316C41.4726 13.0899 41.4816 12.9571 41.4816 12.8332C41.4816 11.5408 41.2479 10.4255 40.7809 9.48718C40.3136 8.54886 39.6398 7.83187 38.7593 7.33613C37.8967 6.82277 36.8544 6.56606 35.6325 6.56606C34.4107 6.56606 33.3324 6.83158 32.3981 7.36269C31.4817 7.89383 30.763 8.6374 30.2418 9.59342C29.7386 10.5494 29.487 11.6648 29.487 12.9394C29.487 14.1965 29.7296 15.3029 30.2149 16.2589C30.7179 17.2149 31.4099 17.9675 32.2904 18.5161C33.1888 19.0472 34.2129 19.3128 35.363 19.3128ZM32.1554 10.4432C31.9832 10.8026 31.8567 11.2098 31.7759 11.6648H39.1245C39.083 11.083 38.9343 10.5696 38.6782 10.1246C38.3907 9.59341 37.9865 9.17741 37.4653 8.87642C36.9444 8.57544 36.3332 8.42494 35.6325 8.42494C34.8059 8.42494 34.0962 8.602 33.5032 8.95607C32.9282 9.29243 32.4788 9.78817 32.1554 10.4432Z" fill="#D9D9D9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.2581 12.3498C49.9193 12.1308 49.4879 11.9379 48.9644 11.771C48.3715 11.5585 47.6256 11.4523 46.7272 11.4523C45.1998 11.4523 44.0049 11.8152 43.1423 12.5411C42.2977 13.2492 41.8756 14.1965 41.8756 15.3826C41.8756 16.2146 42.0731 16.9228 42.4683 17.507C42.8638 18.0913 43.385 18.5426 44.0318 18.8613C44.6966 19.1625 45.4065 19.3128 46.1611 19.3128C46.8438 19.3128 47.5269 19.189 48.2096 18.9411C48.9106 18.6932 49.4946 18.3127 49.9616 17.7992C50.0733 17.681 50.172 17.5557 50.2581 17.4235V19.0472H52.4143V10.2838C52.4143 9.48718 52.2079 8.81447 51.7944 8.26564C51.3992 7.71685 50.8331 7.30073 50.0965 7.01752C49.3776 6.71654 48.533 6.56606 47.5628 6.56606C46.4127 6.56606 45.4245 6.73425 44.5979 7.07061C43.7892 7.40696 43.1513 7.74332 42.684 8.07971L43.7353 9.6465C43.9328 9.5049 44.2026 9.3367 44.544 9.14195C44.8854 8.94717 45.2986 8.77901 45.7838 8.6374C46.287 8.4958 46.8438 8.42494 47.4551 8.42494C47.8323 8.42494 48.1917 8.46034 48.533 8.53117C48.8744 8.602 49.1709 8.71705 49.4225 8.87642C49.6921 9.03572 49.8988 9.25706 50.0424 9.54027C50.1863 9.80588 50.2581 10.1511 50.2581 10.576V12.3498ZM44.3822 14.1345C44.1665 14.4532 44.0587 14.8338 44.0587 15.2764C44.0587 15.7367 44.1665 16.135 44.3822 16.4714C44.6158 16.8077 44.9303 17.0644 45.3255 17.2415C45.7389 17.4008 46.206 17.4805 46.7272 17.4805C47.3919 17.4805 47.9849 17.3477 48.5061 17.0821C49.0452 16.8166 49.4674 16.4448 49.7728 15.9668C50.0965 15.4711 50.2581 14.9046 50.2581 14.2672V13.8078C49.9128 13.6423 49.5625 13.5121 49.2068 13.4174C48.542 13.2227 47.8323 13.1253 47.0775 13.1253C46.3768 13.1253 45.8018 13.2139 45.3524 13.3909C44.9213 13.5679 44.5979 13.8158 44.3822 14.1345Z" fill="#D9D9D9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M69.3316 18.5426C68.3613 19.0561 67.2113 19.3128 65.8817 19.3128C64.7316 19.3128 63.7072 19.0472 62.8088 18.5161C61.9283 17.9675 61.2366 17.2149 60.7334 16.2589C60.2481 15.3029 60.0057 14.1965 60.0057 12.9394C60.0057 11.6648 60.2573 10.5494 60.7603 9.59342C61.2815 8.6374 62.0001 7.89383 62.9165 7.36269C63.8511 6.83158 64.9291 6.56606 66.1513 6.56606C67.3731 6.56606 68.4152 6.82277 69.2777 7.33613C70.1582 7.83187 70.832 8.54886 71.2993 9.48718C71.7666 10.4255 72 11.5408 72 12.8332C72 12.9571 71.991 13.0899 71.9731 13.2316V13.4706H62.2152C62.2711 14.1455 62.415 14.7386 62.6472 15.2498C62.9527 15.9226 63.4018 16.436 63.9947 16.79C64.5877 17.1441 65.3067 17.3212 66.1513 17.3212C66.9956 17.3212 67.7414 17.1441 68.3883 16.79C69.0351 16.4183 69.5832 15.8606 70.0326 15.117L71.7846 16.2058C71.1375 17.2326 70.3201 18.0117 69.3316 18.5426ZM62.2946 11.6648C62.3754 11.2098 62.5019 10.8026 62.6742 10.4432C62.9976 9.78817 63.4467 9.29243 64.0217 8.95607C64.6147 8.602 65.3246 8.42494 66.1513 8.42494C66.8519 8.42494 67.4629 8.57544 67.9841 8.87642C68.5049 9.17741 68.9094 9.59341 69.1969 10.1246C69.4528 10.5696 69.6017 11.083 69.6432 11.6648H62.2946Z" fill="#D9D9D9"/>
</svg>
`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        h(`section`, {
                          className: `framer-1b000vb`,
                          "data-framer-name": `About`,
                          children: y(`div`, {
                            className: `framer-1389s3u`,
                            "data-framer-name": `Container`,
                            children: [
                              y(`div`, {
                                className: `framer-1hn87cp`,
                                "data-framer-name": `Top`,
                                children: [
                                  h(`div`, {
                                    className: `framer-onoqoz`,
                                    "data-framer-name": `Left`,
                                    children: h(U, {
                                      breakpoint: g,
                                      overrides: {
                                        FKeUsnHKg: {
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1e3 +
                                            80 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                      },
                                      children: h(V, {
                                        height: 13,
                                        y: (l?.y || 0) + 0 + 0 + 0 + 1e3 + 130 + 0 + 0 + 0 + 0,
                                        children: h(B, {
                                          className: `framer-1jc4x6u-container`,
                                          "data-framer-name": `Tag`,
                                          name: `Tag`,
                                          nodeId: `I_723CNyY`,
                                          scopeId: `augiA20Il`,
                                          children: h(an, {
                                            height: `100%`,
                                            id: `I_723CNyY`,
                                            layoutId: `I_723CNyY`,
                                            name: `Tag`,
                                            variant: $(`pqmTc8b_A`),
                                            width: `100%`,
                                            XqtCAHGpt: `ABOUT CAREERNOVA`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  y(`div`, {
                                    className: `framer-1oz7viq`,
                                    "data-framer-name": `Heading`,
                                    children: [
                                      h(L, {
                                        __fromCanvasComponent: !0,
                                        children: h(o, {
                                          children: y(`h2`, {
                                            className: `framer-styles-preset-hcmt7i`,
                                            "data-styles-preset": `H4GEN39UP`,
                                            dir: `auto`,
                                            children: [
                                              `We help students across India `,
                                              h(`span`, {
                                                style: {
                                                  "--framer-text-color": `var(--token-2102cf31-f5f6-4625-9a76-51847e9aba45, #FFBF00)`,
                                                },
                                                children: `turn college admissions and career goals into a clear, achievable plan.`,
                                              }),
                                            ],
                                          }),
                                        }),
                                        className: `framer-y16oeb`,
                                        effect: Zs,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      y(ys, {
                                        __framer__animate: { transition: $s },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Qs,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-g1b3jr`,
                                        children: [
                                          h(Ie, {
                                            links: [
                                              {
                                                href: { webPageId: `musfU1kBr` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `musfU1kBr` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `musfU1kBr` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              h(U, {
                                                breakpoint: g,
                                                overrides: {
                                                  FKeUsnHKg: {
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      1e3 +
                                                      80 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      27 +
                                                      0 +
                                                      82.76 +
                                                      0,
                                                  },
                                                },
                                                children: h(V, {
                                                  height: 48,
                                                  y:
                                                    (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    1e3 +
                                                    130 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    82.76 +
                                                    0,
                                                  children: h(B, {
                                                    className: `framer-tnrnlv-container`,
                                                    nodeId: `FXLWhYWzR`,
                                                    scopeId: `augiA20Il`,
                                                    children: h(U, {
                                                      breakpoint: g,
                                                      overrides: {
                                                        FKeUsnHKg: { dQDe2ecMb: e[2] },
                                                        XOpZf9jEo: { dQDe2ecMb: e[1] },
                                                      },
                                                      children: h(X, {
                                                        dQDe2ecMb: e[0],
                                                        GGZTVUGZ5: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                                        height: `100%`,
                                                        id: `FXLWhYWzR`,
                                                        LALAatWUM: `Book A Counselling Session`,
                                                        layoutId: `FXLWhYWzR`,
                                                        lCPX_SQT2: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                                        oAbfzaz1L: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                                        qkIJkdmKd: !1,
                                                        tWCC8YneY: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                        variant: $(`AScdeMxwS`),
                                                        width: `100%`,
                                                        zkb7vpZI7: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          O() &&
                                            h(V, {
                                              height: 44,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1e3 +
                                                130 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                82.76 +
                                                2,
                                              children: h(B, {
                                                className: `framer-82ojab-container hidden-1qvnpt1`,
                                                nodeId: `JmGPGM75b`,
                                                scopeId: `augiA20Il`,
                                                children: h(U, {
                                                  breakpoint: g,
                                                  overrides: {
                                                    XOpZf9jEo: { style: { width: `100%` } },
                                                  },
                                                  children: h(Lt, {
                                                    height: `100%`,
                                                    id: `JmGPGM75b`,
                                                    layoutId: `JmGPGM75b`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              y(`div`, {
                                className: `framer-s7apbq`,
                                "data-framer-name": `Values`,
                                children: [
                                  h(U, {
                                    breakpoint: g,
                                    overrides: {
                                      FKeUsnHKg: {
                                        height: 280,
                                        width: `min(${l?.width || `100vw`} - 32px, 1300px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1e3 +
                                          80 +
                                          0 +
                                          0 +
                                          207.76 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: h(V, {
                                      height: 395,
                                      width: `max((min(max(${l?.width || `100vw`} - 64px, 1px), 1300px) - 36px) / 3, 1px)`,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 1e3 + 130 + 0 + 190.76 + 0,
                                      children: h(B, {
                                        className: `framer-26705s-container`,
                                        "data-framer-name": `Admissions`,
                                        name: `Admissions`,
                                        nodeId: `S5T7jVBIh`,
                                        scopeId: `augiA20Il`,
                                        children: h(U, {
                                          breakpoint: g,
                                          overrides: {
                                            FKeUsnHKg: { style: { height: `100%`, width: `100%` } },
                                          },
                                          children: h(Dt, {
                                            g59gU85uU: `Personalised Guidance`,
                                            height: `100%`,
                                            HoFRXO9NM: `Every recommendation starts with your academics, interests, budget and goals, not a generic list.`,
                                            id: `S5T7jVBIh`,
                                            jHO_xqRIm: Xt,
                                            layoutId: `S5T7jVBIh`,
                                            name: `Admissions`,
                                            style: { width: `100%` },
                                            variant: $(`HJmyz3sY1`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  h(U, {
                                    breakpoint: g,
                                    overrides: {
                                      FKeUsnHKg: {
                                        height: 280,
                                        width: `min(${l?.width || `100vw`} - 32px, 1300px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1e3 +
                                          80 +
                                          0 +
                                          0 +
                                          207.76 +
                                          0 +
                                          292,
                                      },
                                    },
                                    children: h(V, {
                                      height: 395,
                                      width: `max((min(max(${l?.width || `100vw`} - 64px, 1px), 1300px) - 36px) / 3, 1px)`,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 1e3 + 130 + 0 + 190.76 + 0,
                                      children: h(B, {
                                        className: `framer-1djck2w-container`,
                                        "data-framer-name": `Admissions`,
                                        name: `Admissions`,
                                        nodeId: `jCQRTWVja`,
                                        scopeId: `augiA20Il`,
                                        children: h(U, {
                                          breakpoint: g,
                                          overrides: {
                                            FKeUsnHKg: { style: { height: `100%`, width: `100%` } },
                                          },
                                          children: h(Dt, {
                                            g59gU85uU: `End-To-End Support`,
                                            height: `100%`,
                                            HoFRXO9NM: `From shortlisting to applications, counselling and admission confirmation, one team stays with you.`,
                                            id: `jCQRTWVja`,
                                            jHO_xqRIm: Ht,
                                            layoutId: `jCQRTWVja`,
                                            name: `Admissions`,
                                            style: { width: `100%` },
                                            variant: $(`fQyNftypY`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  h(U, {
                                    breakpoint: g,
                                    overrides: {
                                      FKeUsnHKg: {
                                        height: 280,
                                        width: `min(${l?.width || `100vw`} - 32px, 1300px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1e3 +
                                          80 +
                                          0 +
                                          0 +
                                          207.76 +
                                          0 +
                                          584,
                                      },
                                    },
                                    children: h(V, {
                                      height: 395,
                                      width: `max((min(max(${l?.width || `100vw`} - 64px, 1px), 1300px) - 36px) / 3, 1px)`,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 1e3 + 130 + 0 + 190.76 + 0,
                                      children: h(B, {
                                        className: `framer-iaqb0v-container`,
                                        "data-framer-name": `Growth`,
                                        name: `Growth`,
                                        nodeId: `G4BTuhV0d`,
                                        scopeId: `augiA20Il`,
                                        children: h(U, {
                                          breakpoint: g,
                                          overrides: {
                                            FKeUsnHKg: { style: { height: `100%`, width: `100%` } },
                                          },
                                          children: h(Dt, {
                                            g59gU85uU: `Career Focused`,
                                            height: `100%`,
                                            HoFRXO9NM: `We help you choose courses with your future career in mind and support your career growth in India.`,
                                            id: `G4BTuhV0d`,
                                            jHO_xqRIm: Vt,
                                            layoutId: `G4BTuhV0d`,
                                            name: `Growth`,
                                            style: { width: `100%` },
                                            variant: $(`HJmyz3sY1`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        O() &&
                          h(`section`, {
                            className: `framer-1bp8941 hidden-1qvnpt1`,
                            "data-framer-name": `Ticker`,
                            children: h(ys, {
                              __framer__animate: { transition: ec },
                              __framer__animateOnce: !0,
                              __framer__enter: Qs,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1g0z9g6`,
                              "data-framer-name": `Container`,
                              children: h(V, {
                                children: h(B, {
                                  className: `framer-1a0gpxn-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  nodeId: `esOgd26DZ`,
                                  scopeId: `augiA20Il`,
                                  children: h(ht, {
                                    alignment: `center`,
                                    direction: `left`,
                                    fadeOptions: {
                                      fadeAlpha: 0,
                                      fadeContent: !0,
                                      fadeInset: 0,
                                      fadeWidth: 25,
                                      overflow: !0,
                                    },
                                    gap: 50,
                                    height: `100%`,
                                    hoverFactor: 1,
                                    id: `esOgd26DZ`,
                                    layoutId: `esOgd26DZ`,
                                    padding: 10,
                                    paddingBottom: 10,
                                    paddingLeft: 10,
                                    paddingPerSide: !1,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                    sizingOptions: { heightType: !0, widthType: !0 },
                                    slots: [
                                      h(V, {
                                        height: 118,
                                        width: `430px`,
                                        children: h(B, {
                                          className: `framer-1sc1f90-container`,
                                          "data-framer-name": `Ticker Item 1`,
                                          inComponentSlot: !0,
                                          name: `Ticker Item 1`,
                                          nodeId: `c31p6NN54`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: h(xt, {
                                            c02kgYSpN: `Admissions`,
                                            height: `100%`,
                                            id: `c31p6NN54`,
                                            layoutId: `c31p6NN54`,
                                            name: `Ticker Item 1`,
                                            style: { height: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      h(V, {
                                        height: 118,
                                        width: `505px`,
                                        children: h(B, {
                                          className: `framer-1l7lbbz-container`,
                                          "data-framer-name": `Ticker Item 2`,
                                          inComponentSlot: !0,
                                          name: `Ticker Item 2`,
                                          nodeId: `UM9KOPQ1W`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: h(xt, {
                                            c02kgYSpN: `Scholarships`,
                                            height: `100%`,
                                            id: `UM9KOPQ1W`,
                                            layoutId: `UM9KOPQ1W`,
                                            name: `Ticker Item 2`,
                                            style: { height: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      h(V, {
                                        height: 118,
                                        width: `260px`,
                                        children: h(B, {
                                          className: `framer-15p3oqy-container`,
                                          "data-framer-name": `Ticker Item 3`,
                                          inComponentSlot: !0,
                                          name: `Ticker Item 3`,
                                          nodeId: `j2fLyOumM`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: h(xt, {
                                            c02kgYSpN: `Counselling`,
                                            height: `100%`,
                                            id: `j2fLyOumM`,
                                            layoutId: `j2fLyOumM`,
                                            name: `Ticker Item 3`,
                                            style: { height: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      h(V, {
                                        height: 118,
                                        width: `330px`,
                                        children: h(B, {
                                          className: `framer-zjcv7n-container`,
                                          "data-framer-name": `Ticker Item 4`,
                                          inComponentSlot: !0,
                                          name: `Ticker Item 4`,
                                          nodeId: `Fc8MxOYUP`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: h(xt, {
                                            c02kgYSpN: `Careers`,
                                            height: `100%`,
                                            id: `Fc8MxOYUP`,
                                            layoutId: `Fc8MxOYUP`,
                                            name: `Ticker Item 4`,
                                            style: { height: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    ],
                                    speed: 40,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        h(`section`, {
                          className: `framer-caa57t`,
                          "data-framer-name": `Our Services`,
                          children: y(`div`, {
                            className: `framer-17mo30o`,
                            "data-framer-name": `Container`,
                            children: [
                              y(`div`, {
                                className: `framer-1qy8xd1`,
                                "data-framer-name": `Heading`,
                                children: [
                                  h(U, {
                                    breakpoint: g,
                                    overrides: {
                                      FKeUsnHKg: {
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          2231.76 +
                                          80 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: h(V, {
                                      height: 13,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 1965.76 + 120 + 0 + 0 + 0 + 0,
                                      children: h(B, {
                                        className: `framer-bhaegn-container`,
                                        "data-framer-name": `Tag`,
                                        name: `Tag`,
                                        nodeId: `dD8j3F15d`,
                                        scopeId: `augiA20Il`,
                                        children: h(an, {
                                          height: `100%`,
                                          id: `dD8j3F15d`,
                                          layoutId: `dD8j3F15d`,
                                          name: `Tag`,
                                          variant: $(`pqmTc8b_A`),
                                          width: `100%`,
                                          XqtCAHGpt: `Our Services`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  h(L, {
                                    __fromCanvasComponent: !0,
                                    children: h(o, {
                                      children: h(`h2`, {
                                        className: `framer-styles-preset-hcmt7i`,
                                        "data-styles-preset": `H4GEN39UP`,
                                        dir: `auto`,
                                        children: `Everything You Need, In One Place`,
                                      }),
                                    }),
                                    className: `framer-7u0qb6`,
                                    effect: Zs,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              y(ys, {
                                __framer__animate: { transition: ec },
                                __framer__animateOnce: !0,
                                __framer__enter: Qs,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1m6dsmr`,
                                "data-framer-name": `Content`,
                                children: [
                                  h(V, {
                                    children: h(B, {
                                      className: `framer-x92w9t-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `KVfwWuD3l`,
                                      scopeId: `augiA20Il`,
                                      children: h(U, {
                                        breakpoint: g,
                                        overrides: {
                                          FKeUsnHKg: {
                                            arrowOptions: {
                                              arrowFill: `var(--token-acbad6b7-2a19-4836-bd3c-cfb65d18c9f0, rgb(255, 255, 255))`,
                                              arrowGap: 16,
                                              arrowPadding: -1,
                                              arrowPaddingBottom: -40,
                                              arrowPaddingLeft: 500,
                                              arrowPaddingRight: 0,
                                              arrowPaddingTop: -80,
                                              arrowPosition: `bottom-mid`,
                                              arrowRadius: 24,
                                              arrowShouldFadeIn: !1,
                                              arrowShouldSpace: !1,
                                              arrowSize: 40,
                                              leftArrow: `../../assets/images/fQKLVndnpPlb5ThLWfnrL1tlGKg.svg`,
                                              rightArrow: `../../assets/images/aTiZAxwf8PO25qqqmkCyJQ4436I.png`,
                                              showMouseControls: !0,
                                            },
                                            dragControl: !0,
                                            gap: 24,
                                            itemAmount: 1,
                                          },
                                          XOpZf9jEo: { itemAmount: 2 },
                                        },
                                        children: h(Z, {
                                          alignment: `center`,
                                          arrowOptions: {
                                            arrowFill: `var(--token-8597472e-8530-4424-91fc-d5043dad4450, rgb(237, 247, 255))`,
                                            arrowGap: 22,
                                            arrowPadding: -1,
                                            arrowPaddingBottom: -52,
                                            arrowPaddingLeft: 500,
                                            arrowPaddingRight: 0,
                                            arrowPaddingTop: -80,
                                            arrowPosition: `bottom-mid`,
                                            arrowRadius: 20,
                                            arrowShouldFadeIn: !1,
                                            arrowShouldSpace: !1,
                                            arrowSize: 38,
                                            leftArrow: `../../assets/images/t5y8ihAWr04e5rh1e5YfzpGgPA.svg`,
                                            rightArrow: `../../assets/images/HW8DeQ9Yx95dpwt6ZgaCPOV1MRw.svg`,
                                            showMouseControls: !0,
                                          },
                                          autoPlayControl: !1,
                                          borderRadius: 0,
                                          direction: `left`,
                                          dragControl: !1,
                                          effectsOptions: {
                                            effectsHover: !1,
                                            effectsOpacity: 0.3,
                                            effectsPerspective: 200,
                                            effectsRotate: 0,
                                            effectsScale: 0.97,
                                            playOffscreen: !1,
                                          },
                                          fadeOptions: {
                                            fadeAlpha: 0.7,
                                            fadeContent: !1,
                                            fadeInset: 0,
                                            fadeWidth: 2,
                                            overflow: !0,
                                          },
                                          gap: 20,
                                          height: `100%`,
                                          heightSizing: `fill`,
                                          id: `KVfwWuD3l`,
                                          intervalControl: 1.2,
                                          itemAmount: 3,
                                          layoutId: `KVfwWuD3l`,
                                          padding: 0,
                                          paddingBottom: 0,
                                          paddingLeft: 0,
                                          paddingPerSide: !1,
                                          paddingRight: 0,
                                          paddingTop: 0,
                                          progressOptions: {
                                            dotsActiveOpacity: 1,
                                            dotsBackground: `var(--token-0abf3ee7-cbfb-49cc-a188-0762fae71699, rgb(221, 221, 221))`,
                                            dotsBlur: 0,
                                            dotsFill: `rgb(76, 76, 76)`,
                                            dotsGap: 11,
                                            dotsInset: -12,
                                            dotSize: 10,
                                            dotsOpacity: 0.5,
                                            dotsPadding: 10,
                                            dotsRadius: 50,
                                            showCareersDots: !1,
                                          },
                                          slots: [
                                            h(E.div, {
                                              className: `framer-pmg6jq`,
                                              "data-framer-name": `Service 1`,
                                              children: h(je, {
                                                children: h(rc, {
                                                  query: nc(),
                                                  children: (e, t, n) =>
                                                    h(x, {
                                                      children: e?.map(
                                                        (
                                                          {
                                                            CH64cYoSq: e,
                                                            Ezatht0JF: t,
                                                            gURS0n4RS: n,
                                                            id: r,
                                                            sk_SngEwe: i,
                                                            TImVM2TSg: a,
                                                          },
                                                          o
                                                        ) => (
                                                          (a ??= ``),
                                                          (t ??= ``),
                                                          (n ??= ``),
                                                          h(
                                                            A,
                                                            {
                                                              id: `r9g7aS03I-${r}`,
                                                              children: h(_e.Provider, {
                                                                value: { gURS0n4RS: n },
                                                                children: h(Ie, {
                                                                  links: [
                                                                    {
                                                                      href: {
                                                                        pathVariables: {
                                                                          gURS0n4RS: n,
                                                                        },
                                                                        webPageId: `bAcjwMNPv`,
                                                                      },
                                                                      implicitPathVariables: void 0,
                                                                    },
                                                                  ],
                                                                  children: (n) =>
                                                                    h(V, {
                                                                      height: 460,
                                                                      width: `365px`,
                                                                      children: h(B, {
                                                                        className: `framer-1fy8c95-container`,
                                                                        inComponentSlot: !0,
                                                                        nodeId: `dBDWJrUha`,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `augiA20Il`,
                                                                        children: h(hr, {
                                                                          height: `100%`,
                                                                          id: `dBDWJrUha`,
                                                                          IXjxfLLdn: t,
                                                                          kdlMcWUlo: n[0],
                                                                          layoutId: `dBDWJrUha`,
                                                                          mg8DYYsxQ: tc(e),
                                                                          OhstHbEXF: i,
                                                                          style: { width: `100%` },
                                                                          variant: $(`JzSF8yyhH`),
                                                                          VJW9hKSwq: a,
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                }),
                                                              }),
                                                            },
                                                            r
                                                          )
                                                        )
                                                      ),
                                                    }),
                                                }),
                                              }),
                                            }),
                                            h(E.div, {
                                              className: `framer-10bpe94`,
                                              "data-framer-name": `Service 3`,
                                              children: h(je, {
                                                children: h(rc, {
                                                  query: ic(),
                                                  children: (e, t, n) =>
                                                    h(x, {
                                                      children: e?.map(
                                                        (
                                                          {
                                                            CH64cYoSq: e,
                                                            Ezatht0JF: t,
                                                            gURS0n4RS: n,
                                                            id: r,
                                                            sk_SngEwe: i,
                                                            TImVM2TSg: a,
                                                          },
                                                          o
                                                        ) => (
                                                          (a ??= ``),
                                                          (t ??= ``),
                                                          (n ??= ``),
                                                          h(
                                                            A,
                                                            {
                                                              id: `oSOBACeqO-${r}`,
                                                              children: h(_e.Provider, {
                                                                value: { gURS0n4RS: n },
                                                                children: h(Ie, {
                                                                  links: [
                                                                    {
                                                                      href: {
                                                                        pathVariables: {
                                                                          gURS0n4RS: n,
                                                                        },
                                                                        webPageId: `bAcjwMNPv`,
                                                                      },
                                                                      implicitPathVariables: void 0,
                                                                    },
                                                                  ],
                                                                  children: (n) =>
                                                                    h(V, {
                                                                      height: 460,
                                                                      width: `365px`,
                                                                      children: h(B, {
                                                                        className: `framer-1vcgc3v-container`,
                                                                        inComponentSlot: !0,
                                                                        nodeId: `hKCXOO1Q9`,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `augiA20Il`,
                                                                        children: h(hr, {
                                                                          height: `100%`,
                                                                          id: `hKCXOO1Q9`,
                                                                          IXjxfLLdn: t,
                                                                          kdlMcWUlo: n[0],
                                                                          layoutId: `hKCXOO1Q9`,
                                                                          mg8DYYsxQ: tc(e),
                                                                          OhstHbEXF: i,
                                                                          style: { width: `100%` },
                                                                          variant: $(`JzSF8yyhH`),
                                                                          VJW9hKSwq: a,
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                }),
                                                              }),
                                                            },
                                                            r
                                                          )
                                                        )
                                                      ),
                                                    }),
                                                }),
                                              }),
                                            }),
                                            h(E.div, {
                                              className: `framer-1xv3mn2`,
                                              "data-framer-name": `Service 2`,
                                              children: h(je, {
                                                children: h(rc, {
                                                  query: ac(),
                                                  children: (e, t, n) =>
                                                    h(x, {
                                                      children: e?.map(
                                                        (
                                                          {
                                                            CH64cYoSq: e,
                                                            Ezatht0JF: t,
                                                            gURS0n4RS: n,
                                                            id: r,
                                                            sk_SngEwe: i,
                                                            TImVM2TSg: a,
                                                          },
                                                          o
                                                        ) => (
                                                          (a ??= ``),
                                                          (t ??= ``),
                                                          (n ??= ``),
                                                          h(
                                                            A,
                                                            {
                                                              id: `K05lVZcoq-${r}`,
                                                              children: h(_e.Provider, {
                                                                value: { gURS0n4RS: n },
                                                                children: h(Ie, {
                                                                  links: [
                                                                    {
                                                                      href: {
                                                                        pathVariables: {
                                                                          gURS0n4RS: n,
                                                                        },
                                                                        webPageId: `bAcjwMNPv`,
                                                                      },
                                                                      implicitPathVariables: void 0,
                                                                    },
                                                                  ],
                                                                  children: (n) =>
                                                                    h(V, {
                                                                      height: 460,
                                                                      width: `365px`,
                                                                      children: h(B, {
                                                                        className: `framer-vhn9ym-container`,
                                                                        inComponentSlot: !0,
                                                                        nodeId: `ORS08Ycgn`,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `augiA20Il`,
                                                                        children: h(hr, {
                                                                          height: `100%`,
                                                                          id: `ORS08Ycgn`,
                                                                          IXjxfLLdn: t,
                                                                          kdlMcWUlo: n[0],
                                                                          layoutId: `ORS08Ycgn`,
                                                                          mg8DYYsxQ: tc(e),
                                                                          OhstHbEXF: i,
                                                                          style: { width: `100%` },
                                                                          variant: $(`JzSF8yyhH`),
                                                                          VJW9hKSwq: a,
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                }),
                                                              }),
                                                            },
                                                            r
                                                          )
                                                        )
                                                      ),
                                                    }),
                                                }),
                                              }),
                                            }),
                                            h(E.div, {
                                              className: `framer-1kbowi1`,
                                              "data-framer-name": `Service 4`,
                                              children: h(je, {
                                                children: h(rc, {
                                                  query: oc(),
                                                  children: (e, t, n) =>
                                                    h(x, {
                                                      children: e?.map(
                                                        (
                                                          {
                                                            CH64cYoSq: e,
                                                            Ezatht0JF: t,
                                                            gURS0n4RS: n,
                                                            id: r,
                                                            sk_SngEwe: i,
                                                            TImVM2TSg: a,
                                                          },
                                                          o
                                                        ) => (
                                                          (a ??= ``),
                                                          (t ??= ``),
                                                          (n ??= ``),
                                                          h(
                                                            A,
                                                            {
                                                              id: `Jr_nX7mA6-${r}`,
                                                              children: h(_e.Provider, {
                                                                value: { gURS0n4RS: n },
                                                                children: h(Ie, {
                                                                  links: [
                                                                    {
                                                                      href: {
                                                                        pathVariables: {
                                                                          gURS0n4RS: n,
                                                                        },
                                                                        webPageId: `bAcjwMNPv`,
                                                                      },
                                                                      implicitPathVariables: void 0,
                                                                    },
                                                                  ],
                                                                  children: (n) =>
                                                                    h(V, {
                                                                      height: 460,
                                                                      width: `365px`,
                                                                      children: h(B, {
                                                                        className: `framer-keveou-container`,
                                                                        inComponentSlot: !0,
                                                                        nodeId: `FwaxGW22J`,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `augiA20Il`,
                                                                        children: h(hr, {
                                                                          height: `100%`,
                                                                          id: `FwaxGW22J`,
                                                                          IXjxfLLdn: t,
                                                                          kdlMcWUlo: n[0],
                                                                          layoutId: `FwaxGW22J`,
                                                                          mg8DYYsxQ: tc(e),
                                                                          OhstHbEXF: i,
                                                                          style: { width: `100%` },
                                                                          variant: $(`JzSF8yyhH`),
                                                                          VJW9hKSwq: a,
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                }),
                                                              }),
                                                            },
                                                            r
                                                          )
                                                        )
                                                      ),
                                                    }),
                                                }),
                                              }),
                                            }),
                                            h(E.div, {
                                              className: `framer-5tc8r3`,
                                              "data-framer-name": `Service 5`,
                                              children: h(je, {
                                                children: h(rc, {
                                                  query: sc(),
                                                  children: (e, t, n) =>
                                                    h(x, {
                                                      children: e?.map(
                                                        (
                                                          {
                                                            CH64cYoSq: e,
                                                            Ezatht0JF: t,
                                                            gURS0n4RS: n,
                                                            id: r,
                                                            sk_SngEwe: i,
                                                            TImVM2TSg: a,
                                                          },
                                                          o
                                                        ) => (
                                                          (a ??= ``),
                                                          (t ??= ``),
                                                          (n ??= ``),
                                                          h(
                                                            A,
                                                            {
                                                              id: `ppoz5x1G2-${r}`,
                                                              children: h(_e.Provider, {
                                                                value: { gURS0n4RS: n },
                                                                children: h(Ie, {
                                                                  links: [
                                                                    {
                                                                      href: {
                                                                        pathVariables: {
                                                                          gURS0n4RS: n,
                                                                        },
                                                                        webPageId: `bAcjwMNPv`,
                                                                      },
                                                                      implicitPathVariables: void 0,
                                                                    },
                                                                  ],
                                                                  children: (n) =>
                                                                    h(V, {
                                                                      height: 460,
                                                                      width: `365px`,
                                                                      children: h(B, {
                                                                        className: `framer-10la6wd-container`,
                                                                        inComponentSlot: !0,
                                                                        nodeId: `iumJ3Hx56`,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `augiA20Il`,
                                                                        children: h(hr, {
                                                                          height: `100%`,
                                                                          id: `iumJ3Hx56`,
                                                                          IXjxfLLdn: t,
                                                                          kdlMcWUlo: n[0],
                                                                          layoutId: `iumJ3Hx56`,
                                                                          mg8DYYsxQ: tc(e),
                                                                          OhstHbEXF: i,
                                                                          style: { width: `100%` },
                                                                          variant: $(`JzSF8yyhH`),
                                                                          VJW9hKSwq: a,
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                }),
                                                              }),
                                                            },
                                                            r
                                                          )
                                                        )
                                                      ),
                                                    }),
                                                }),
                                              }),
                                            }),
                                          ],
                                          startFrom: 1,
                                          style: { height: `100%`, width: `100%` },
                                          transitionControl: {
                                            damping: 66,
                                            delay: 0,
                                            mass: 2.2,
                                            stiffness: 228,
                                            type: `spring`,
                                          },
                                          width: `100%`,
                                          widthSizing: `fill`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  y(`div`, {
                                    className: `framer-f3a2ll`,
                                    "data-framer-name": `View All`,
                                    children: [
                                      h(L, {
                                        __fromCanvasComponent: !0,
                                        children: h(o, {
                                          children: h(`p`, {
                                            className: `framer-styles-preset-qlsyr3`,
                                            "data-styles-preset": `YMpbOMTQr`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `left` },
                                            children: `Helping businesses grow with clarity, confidence, and measurable results.`,
                                          }),
                                        }),
                                        className: `framer-184e371`,
                                        "data-framer-name": `Subtext`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `center`,
                                        withExternalLayout: !0,
                                      }),
                                      h(`div`, {
                                        className: `framer-1rsff88`,
                                        "data-framer-name": `Line`,
                                      }),
                                      h(Ie, {
                                        links: [
                                          {
                                            href: { webPageId: `Q0ojUtneJ` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `Q0ojUtneJ` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `Q0ojUtneJ` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          h(U, {
                                            breakpoint: g,
                                            overrides: {
                                              FKeUsnHKg: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  2231.76 +
                                                  80 +
                                                  0 +
                                                  0 +
                                                  103.76 +
                                                  0 +
                                                  526 +
                                                  0 +
                                                  150.3,
                                              },
                                            },
                                            children: h(V, {
                                              height: 48,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1965.76 +
                                                120 +
                                                0 +
                                                113.76 +
                                                0 +
                                                530 +
                                                34.65,
                                              children: h(U, {
                                                breakpoint: g,
                                                overrides: { XOpZf9jEo: { animate: uc } },
                                                children: h(fs, {
                                                  animate: cc,
                                                  className: `framer-awzdg6-container`,
                                                  "data-framer-appear-id": `awzdg6`,
                                                  initial: Gs,
                                                  nodeId: `gbORyogFQ`,
                                                  optimized: !0,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: h(U, {
                                                    breakpoint: g,
                                                    overrides: {
                                                      FKeUsnHKg: { dQDe2ecMb: e[2] },
                                                      XOpZf9jEo: { dQDe2ecMb: e[1] },
                                                    },
                                                    children: h(X, {
                                                      dQDe2ecMb: e[0],
                                                      GGZTVUGZ5: `var(--token-11c233ce-ba11-4e3a-ba1d-5be950195b79, rgb(1, 43, 48))`,
                                                      height: `100%`,
                                                      id: `gbORyogFQ`,
                                                      LALAatWUM: `View all services`,
                                                      layoutId: `gbORyogFQ`,
                                                      lCPX_SQT2: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                                      oAbfzaz1L: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                                      qkIJkdmKd: !1,
                                                      tWCC8YneY: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                      variant: $(`ckPn2EswT`),
                                                      width: `100%`,
                                                      zkb7vpZI7: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        h(`div`, {
                          className: `framer-1ml0xzm`,
                          "data-framer-name": `Our Values`,
                          children: y(`div`, {
                            className: `framer-1wtrnmw`,
                            "data-framer-name": `Container`,
                            children: [
                              y(`div`, {
                                className: `framer-1yeki47`,
                                "data-framer-name": `Title Wrapper`,
                                children: [
                                  y(`div`, {
                                    className: `framer-1s899bo`,
                                    "data-framer-name": `Top`,
                                    children: [
                                      h(U, {
                                        breakpoint: g,
                                        overrides: {
                                          FKeUsnHKg: {
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              3209.82 +
                                              80 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: h(V, {
                                          height: 13,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            2966.82 +
                                            130 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                          children: h(B, {
                                            className: `framer-c4qzvv-container`,
                                            "data-framer-name": `Why United`,
                                            name: `Why United`,
                                            nodeId: `aN7fRuwg4`,
                                            scopeId: `augiA20Il`,
                                            children: h(an, {
                                              height: `100%`,
                                              id: `aN7fRuwg4`,
                                              layoutId: `aN7fRuwg4`,
                                              name: `Why United`,
                                              variant: $(`xumQIq7vU`),
                                              width: `100%`,
                                              XqtCAHGpt: `Our Values`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      h(L, {
                                        __fromCanvasComponent: !0,
                                        children: h(o, {
                                          children: h(`h2`, {
                                            className: `framer-styles-preset-9lpzun`,
                                            "data-styles-preset": `kH4hVkPTC`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `The Principles That Guide Our Work`,
                                          }),
                                        }),
                                        className: `framer-jktv0q`,
                                        effect: Zs,
                                        fonts: [`Inter`],
                                        id: `jktv0q`,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  h(Ts, {
                                    __framer__animate: { transition: Xs },
                                    __framer__animateOnce: !0,
                                    __framer__enter: dc,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 0.8,
                                    children: h(o, {
                                      children: h(`p`, {
                                        className: `framer-styles-preset-qlsyr3`,
                                        "data-styles-preset": `YMpbOMTQr`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                        },
                                        children: `Our approach is built on honesty, transparency and personal attention to every student.`,
                                      }),
                                    }),
                                    className: `framer-1s7gha3`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              h(`div`, {
                                className: `framer-1socofz`,
                                "data-framer-name": `Sticky`,
                                children: h(U, {
                                  breakpoint: g,
                                  overrides: {
                                    FKeUsnHKg: { __framer__styleAppearEffectEnabled: void 0 },
                                    XOpZf9jEo: { __framer__styleAppearEffectEnabled: void 0 },
                                  },
                                  children: y(ys, {
                                    __framer__animate: { transition: $s },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Qs,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-euqki3`,
                                    "data-framer-name": `Card Wrapper`,
                                    children: [
                                      y(`div`, {
                                        className: `framer-1t707dk`,
                                        "data-framer-name": `Left Card Wrapper`,
                                        children: [
                                          h(U, {
                                            breakpoint: g,
                                            overrides: {
                                              FKeUsnHKg: {
                                                width: `max(min(${l?.width || `100vw`} - 32px, 1300px), 1px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  3209.82 +
                                                  80 +
                                                  0 +
                                                  0 +
                                                  258.08 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                              XOpZf9jEo: {
                                                width: `max((max(min(${l?.width || `100vw`} - 64px, 1300px), 1px) - 16px) / 2, 1px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  2966.82 +
                                                  130 +
                                                  0 +
                                                  0 +
                                                  270.08 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            children: h(V, {
                                              height: 270,
                                              width: `max((max(min(${l?.width || `100vw`} - 64px, 1300px), 1px) - 32px) / 3, 1px)`,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                2966.82 +
                                                130 +
                                                0 +
                                                0 +
                                                284.08 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                              children: h(U, {
                                                breakpoint: g,
                                                overrides: {
                                                  FKeUsnHKg: {
                                                    __framer__styleTransformEffectEnabled: void 0,
                                                  },
                                                  XOpZf9jEo: {
                                                    __framer__styleTransformEffectEnabled: void 0,
                                                  },
                                                },
                                                children: h(Ds, {
                                                  __framer__styleTransformEffectEnabled: !0,
                                                  __framer__transformTargets: [
                                                    {
                                                      target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 196,
                                                        y: 5,
                                                      },
                                                    },
                                                    {
                                                      ref: k,
                                                      target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0,
                                                      },
                                                    },
                                                  ],
                                                  __framer__transformTrigger: `onScrollTarget`,
                                                  __framer__transformViewportThreshold: 1,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-ziz7px-container`,
                                                  nodeId: `rnwBVx04t`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: h(wt, {
                                                    B7Fo2NnG9: Wt,
                                                    height: `100%`,
                                                    id: `rnwBVx04t`,
                                                    layoutId: `rnwBVx04t`,
                                                    ShOAEPPFP: `Every recommendation is based on what fits your profile and goals.`,
                                                    style: { width: `100%` },
                                                    v2vbFM0CE: `Student-First Advice`,
                                                    variant: $(`CDYXBXWS_`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          h(U, {
                                            breakpoint: g,
                                            overrides: {
                                              FKeUsnHKg: {
                                                width: `max(min(${l?.width || `100vw`} - 32px, 1300px), 1px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  3209.82 +
                                                  80 +
                                                  0 +
                                                  0 +
                                                  258.08 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  286,
                                              },
                                              XOpZf9jEo: {
                                                width: `max((max(min(${l?.width || `100vw`} - 64px, 1300px), 1px) - 16px) / 2, 1px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  2966.82 +
                                                  130 +
                                                  0 +
                                                  0 +
                                                  270.08 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            children: h(V, {
                                              height: 270,
                                              width: `max((max(min(${l?.width || `100vw`} - 64px, 1300px), 1px) - 32px) / 3, 1px)`,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                2966.82 +
                                                130 +
                                                0 +
                                                0 +
                                                284.08 +
                                                0 +
                                                0 +
                                                0 +
                                                286,
                                              children: h(U, {
                                                breakpoint: g,
                                                overrides: {
                                                  FKeUsnHKg: {
                                                    __framer__styleTransformEffectEnabled: void 0,
                                                  },
                                                  XOpZf9jEo: {
                                                    __framer__styleTransformEffectEnabled: void 0,
                                                  },
                                                },
                                                children: h(Ds, {
                                                  __framer__styleTransformEffectEnabled: !0,
                                                  __framer__transformTargets: [
                                                    {
                                                      target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 196,
                                                        y: -5,
                                                      },
                                                    },
                                                    {
                                                      ref: k,
                                                      target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0,
                                                      },
                                                    },
                                                  ],
                                                  __framer__transformTrigger: `onScrollTarget`,
                                                  __framer__transformViewportThreshold: 1,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-18ky8pu-container`,
                                                  nodeId: `js5v1zJrT`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: h(wt, {
                                                    B7Fo2NnG9: mt,
                                                    height: `100%`,
                                                    id: `js5v1zJrT`,
                                                    layoutId: `js5v1zJrT`,
                                                    ShOAEPPFP: `We tell you what is realistic. No guaranteed admissions, no fake promises.`,
                                                    style: { width: `100%` },
                                                    v2vbFM0CE: `Honest Guidance`,
                                                    variant: $(`CDYXBXWS_`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      h(U, {
                                        breakpoint: g,
                                        overrides: {
                                          FKeUsnHKg: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                          },
                                          XOpZf9jEo: {
                                            __framer__animate: { transition: pc },
                                            __framer__animateOnce: !0,
                                            __framer__enter: fc,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__styleTransformEffectEnabled: void 0,
                                            __framer__threshold: 0,
                                          },
                                        },
                                        children: h(ys, {
                                          __framer__styleTransformEffectEnabled: !0,
                                          __framer__transformTargets: [
                                            {
                                              target: {
                                                opacity: 0,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0.3,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 100,
                                              },
                                            },
                                            {
                                              ref: k,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0,
                                              },
                                            },
                                          ],
                                          __framer__transformTrigger: `onScrollTarget`,
                                          __framer__transformViewportThreshold: 1,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-11yuj6g`,
                                          "data-framer-name": `Image`,
                                          children: h(U, {
                                            breakpoint: g,
                                            overrides: {
                                              FKeUsnHKg: {
                                                background: {
                                                  alt: `Image`,
                                                  fit: `fill`,
                                                  intrinsicHeight: 3200,
                                                  intrinsicWidth: 4800,
                                                  loading: de(
                                                    (l?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      3209.82 +
                                                      80 +
                                                      0 +
                                                      0 +
                                                      258.08 +
                                                      0 +
                                                      0 +
                                                      572 +
                                                      0
                                                  ),
                                                  pixelHeight: 3200,
                                                  pixelWidth: 4800,
                                                  sizes: `max(min(max(min(${l?.width || `100vw`} - 32px, 1300px), 1px), 370px), 1px)`,
                                                  src: `../../assets/stock/stock_about_campus.jpg`,
                                                  srcSet: `../../assets/images/3TJCUPs1d1VKFuGr5r9i9L8I0Qs.webp 512w,../../assets/images/3TJCUPs1d1VKFuGr5r9i9L8I0Qs-588ed9.webp 1024w,../../assets/images/3TJCUPs1d1VKFuGr5r9i9L8I0Qs-c959a2.webp 2048w,../../assets/images/3TJCUPs1d1VKFuGr5r9i9L8I0Qs-c432aa.webp 4096w,../../assets/stock/stock_about_campus.jpg 4800w`,
                                                },
                                              },
                                              XOpZf9jEo: {
                                                background: {
                                                  alt: `Image`,
                                                  fit: `fill`,
                                                  intrinsicHeight: 3200,
                                                  intrinsicWidth: 4800,
                                                  loading: de(
                                                    (l?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      2966.82 +
                                                      130 +
                                                      0 +
                                                      0 +
                                                      270.08 +
                                                      0 +
                                                      0 +
                                                      286 +
                                                      0
                                                  ),
                                                  pixelHeight: 3200,
                                                  pixelWidth: 4800,
                                                  sizes: `max(min(${l?.width || `100vw`} - 64px, 1300px), 1px)`,
                                                  src: `../../assets/stock/stock_about_campus.jpg`,
                                                  srcSet: `../../assets/images/3TJCUPs1d1VKFuGr5r9i9L8I0Qs.webp 512w,../../assets/images/3TJCUPs1d1VKFuGr5r9i9L8I0Qs-588ed9.webp 1024w,../../assets/images/3TJCUPs1d1VKFuGr5r9i9L8I0Qs-c959a2.webp 2048w,../../assets/images/3TJCUPs1d1VKFuGr5r9i9L8I0Qs-c432aa.webp 4096w,../../assets/stock/stock_about_campus.jpg 4800w`,
                                                },
                                              },
                                            },
                                            children: h(Me, {
                                              background: {
                                                alt: `Image`,
                                                fit: `fill`,
                                                intrinsicHeight: 3200,
                                                intrinsicWidth: 4800,
                                                loading: de(
                                                  (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    2966.82 +
                                                    130 +
                                                    0 +
                                                    0 +
                                                    284.08 +
                                                    0 +
                                                    0 +
                                                    0
                                                ),
                                                pixelHeight: 3200,
                                                pixelWidth: 4800,
                                                sizes: `max(min(max((max(min(${l?.width || `100vw`} - 64px, 1300px), 1px) - 32px) / 3, 1px), 370px), 1px)`,
                                                src: `../../assets/stock/stock_about_campus.jpg`,
                                                srcSet: `../../assets/images/3TJCUPs1d1VKFuGr5r9i9L8I0Qs.webp 512w,../../assets/images/3TJCUPs1d1VKFuGr5r9i9L8I0Qs-588ed9.webp 1024w,../../assets/images/3TJCUPs1d1VKFuGr5r9i9L8I0Qs-c959a2.webp 2048w,../../assets/images/3TJCUPs1d1VKFuGr5r9i9L8I0Qs-c432aa.webp 4096w,../../assets/stock/stock_about_campus.jpg 4800w`,
                                              },
                                              className: `framer-fvlrav`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      y(`div`, {
                                        className: `framer-xlxgkn`,
                                        "data-framer-name": `Right Card Wrapper`,
                                        children: [
                                          h(U, {
                                            breakpoint: g,
                                            overrides: {
                                              FKeUsnHKg: {
                                                width: `max(min(${l?.width || `100vw`} - 32px, 1300px), 1px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  3209.82 +
                                                  80 +
                                                  0 +
                                                  0 +
                                                  258.08 +
                                                  0 +
                                                  0 +
                                                  1028 +
                                                  0 +
                                                  0,
                                              },
                                              XOpZf9jEo: {
                                                width: `max((max(min(${l?.width || `100vw`} - 64px, 1300px), 1px) - 16px) / 2, 1px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  2966.82 +
                                                  130 +
                                                  0 +
                                                  0 +
                                                  270.08 +
                                                  0 +
                                                  0 +
                                                  777 +
                                                  0,
                                              },
                                            },
                                            children: h(V, {
                                              height: 270,
                                              width: `max((max(min(${l?.width || `100vw`} - 64px, 1300px), 1px) - 32px) / 3, 1px)`,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                2966.82 +
                                                130 +
                                                0 +
                                                0 +
                                                284.08 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                              children: h(U, {
                                                breakpoint: g,
                                                overrides: {
                                                  FKeUsnHKg: {
                                                    __framer__styleTransformEffectEnabled: void 0,
                                                  },
                                                  XOpZf9jEo: {
                                                    __framer__styleTransformEffectEnabled: void 0,
                                                  },
                                                },
                                                children: h(Ds, {
                                                  __framer__styleTransformEffectEnabled: !0,
                                                  __framer__transformTargets: [
                                                    {
                                                      target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: -196,
                                                        y: 5,
                                                      },
                                                    },
                                                    {
                                                      ref: k,
                                                      target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0,
                                                      },
                                                    },
                                                  ],
                                                  __framer__transformTrigger: `onScrollTarget`,
                                                  __framer__transformViewportThreshold: 1,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-1jjw9st-container`,
                                                  nodeId: `Y2c5Kf0OH`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: h(U, {
                                                    breakpoint: g,
                                                    overrides: {
                                                      XOpZf9jEo: { variant: $(`tCLp081nR`) },
                                                    },
                                                    children: h(wt, {
                                                      B7Fo2NnG9: yt,
                                                      height: `100%`,
                                                      id: `Y2c5Kf0OH`,
                                                      layoutId: `Y2c5Kf0OH`,
                                                      ShOAEPPFP: `Clear information about the process, timelines and costs at every stage.`,
                                                      style: { width: `100%` },
                                                      v2vbFM0CE: `Transparency`,
                                                      variant: $(`CDYXBXWS_`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          h(U, {
                                            breakpoint: g,
                                            overrides: {
                                              FKeUsnHKg: {
                                                width: `max(min(${l?.width || `100vw`} - 32px, 1300px), 1px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  3209.82 +
                                                  80 +
                                                  0 +
                                                  0 +
                                                  258.08 +
                                                  0 +
                                                  0 +
                                                  1028 +
                                                  0 +
                                                  286,
                                              },
                                              XOpZf9jEo: {
                                                width: `max((max(min(${l?.width || `100vw`} - 64px, 1300px), 1px) - 16px) / 2, 1px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  2966.82 +
                                                  130 +
                                                  0 +
                                                  0 +
                                                  270.08 +
                                                  0 +
                                                  0 +
                                                  777 +
                                                  0,
                                              },
                                            },
                                            children: h(V, {
                                              height: 270,
                                              width: `max((max(min(${l?.width || `100vw`} - 64px, 1300px), 1px) - 32px) / 3, 1px)`,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                2966.82 +
                                                130 +
                                                0 +
                                                0 +
                                                284.08 +
                                                0 +
                                                0 +
                                                0 +
                                                286,
                                              children: h(U, {
                                                breakpoint: g,
                                                overrides: {
                                                  FKeUsnHKg: {
                                                    __framer__styleTransformEffectEnabled: void 0,
                                                  },
                                                  XOpZf9jEo: {
                                                    __framer__styleTransformEffectEnabled: void 0,
                                                  },
                                                },
                                                children: h(Ds, {
                                                  __framer__styleTransformEffectEnabled: !0,
                                                  __framer__transformTargets: [
                                                    {
                                                      target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: -196,
                                                        y: -5,
                                                      },
                                                    },
                                                    {
                                                      ref: k,
                                                      target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0,
                                                      },
                                                    },
                                                  ],
                                                  __framer__transformTrigger: `onScrollTarget`,
                                                  __framer__transformViewportThreshold: 1,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-179f7va-container`,
                                                  nodeId: `Lh1xt5Sx1`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: h(wt, {
                                                    B7Fo2NnG9: bt,
                                                    height: `100%`,
                                                    id: `Lh1xt5Sx1`,
                                                    layoutId: `Lh1xt5Sx1`,
                                                    ShOAEPPFP: `Help with college onboarding, career readiness and professional planning so you are prepared after you get in.`,
                                                    style: { width: `100%` },
                                                    v2vbFM0CE: `Support Beyond Admission`,
                                                    variant: $(`CDYXBXWS_`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              re() &&
                                h(`div`, {
                                  className: `framer-fldv36 hidden-1jp9pa2 hidden-1qvnpt1`,
                                  "data-framer-name": `Images Trigger`,
                                  children: h(`div`, {
                                    className: `framer-1yhgi88`,
                                    "data-framer-name": `Trigger`,
                                    id: ie,
                                    ref: k,
                                  }),
                                }),
                            ],
                          }),
                        }),
                        h(`section`, {
                          className: `framer-1ly4xme`,
                          "data-framer-name": `Cases`,
                          children: y(`div`, {
                            className: `framer-w1aexo`,
                            "data-framer-name": `Container`,
                            children: [
                              y(`div`, {
                                className: `framer-9y29fv`,
                                "data-framer-name": `Heading`,
                                children: [
                                  h(U, {
                                    breakpoint: g,
                                    overrides: {
                                      FKeUsnHKg: {
                                        y:
                                          (l?.y || 0) + 0 + 0 + 0 + 5211.9 + 70 + 0 + 0 + 0 + 0 + 0,
                                      },
                                      XOpZf9jEo: {
                                        y: (l?.y || 0) + 0 + 0 + 0 + 4533.9 + 130 + 0 + 0 + 0 + 0,
                                      },
                                    },
                                    children: h(V, {
                                      height: 13,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 4720.9 + 130 + 0 + 0 + 0 + 0,
                                      children: h(B, {
                                        className: `framer-1x0uwrj-container`,
                                        "data-framer-name": `Tag`,
                                        name: `Tag`,
                                        nodeId: `xv8FKYCtI`,
                                        scopeId: `augiA20Il`,
                                        children: h(an, {
                                          height: `100%`,
                                          id: `xv8FKYCtI`,
                                          layoutId: `xv8FKYCtI`,
                                          name: `Tag`,
                                          variant: $(`pqmTc8b_A`),
                                          width: `100%`,
                                          XqtCAHGpt: `case studies`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  h(U, {
                                    breakpoint: g,
                                    overrides: {
                                      FKeUsnHKg: {
                                        children: h(o, {
                                          children: h(`h2`, {
                                            className: `framer-styles-preset-hcmt7i`,
                                            "data-styles-preset": `H4GEN39UP`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `left` },
                                            children: `Where Admissions Creates Real Business Impact`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: h(L, {
                                      __fromCanvasComponent: !0,
                                      children: h(o, {
                                        children: h(`h2`, {
                                          className: `framer-styles-preset-hcmt7i`,
                                          "data-styles-preset": `H4GEN39UP`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `center` },
                                          children: `Where Admissions Creates Real Business Impact`,
                                        }),
                                      }),
                                      className: `framer-8ptjfk`,
                                      effect: Zs,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              h(`div`, {
                                className: `framer-3di2nt`,
                                "data-framer-name": `Content`,
                                children: h(ys, {
                                  __framer__animate: { transition: $s },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Qs,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-150stwx`,
                                  children: h(je, {
                                    children: h(U, {
                                      breakpoint: g,
                                      overrides: { XOpZf9jEo: { query: hc() } },
                                      children: h(rc, {
                                        query: mc(),
                                        children: (e, t, n) =>
                                          h(x, {
                                            children: e?.map(
                                              (
                                                {
                                                  cN0Ychn2P: e,
                                                  eOHobAcGV: t,
                                                  I0cWIyBUM: n,
                                                  id: r,
                                                  LfkY4TS8p: i,
                                                  LQ4k8pMWh: a,
                                                  PL0YsbUUz: o,
                                                },
                                                s
                                              ) => (
                                                (n ??= ``),
                                                (a ??= ``),
                                                (e ??= ``),
                                                (t ??= ``),
                                                (o ??= ``),
                                                h(
                                                  A,
                                                  {
                                                    id: `WtJ81VOR9-${r}`,
                                                    children: h(_e.Provider, {
                                                      value: { PL0YsbUUz: o },
                                                      children: h(`div`, {
                                                        className: `framer-1oq6cac`,
                                                        children: h(Ie, {
                                                          links: [
                                                            {
                                                              href: {
                                                                pathVariables: { PL0YsbUUz: o },
                                                                webPageId: `Zcp7d8sGp`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { PL0YsbUUz: o },
                                                                webPageId: `Zcp7d8sGp`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { PL0YsbUUz: o },
                                                                webPageId: `Zcp7d8sGp`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (r) =>
                                                            h(U, {
                                                              breakpoint: g,
                                                              overrides: {
                                                                FKeUsnHKg: {
                                                                  width: `max(min(${l?.width || `100vw`} - 32px, 1300px), 1px)`,
                                                                  y:
                                                                    (l?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    5211.9 +
                                                                    70 +
                                                                    0 +
                                                                    0 +
                                                                    111.76 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    1108 +
                                                                    0,
                                                                },
                                                                XOpZf9jEo: {
                                                                  width: `max((min(max(${l?.width || `100vw`} - 64px, 1px), 1300px) - 20px) / 2, 1px)`,
                                                                  y:
                                                                    (l?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    4533.9 +
                                                                    130 +
                                                                    0 +
                                                                    125.76 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0,
                                                                },
                                                              },
                                                              children: h(V, {
                                                                height: 530,
                                                                width: `max((min(max(${l?.width || `100vw`} - 64px, 1px), 1300px) - 40px) / 3, 1px)`,
                                                                y:
                                                                  (l?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  4720.9 +
                                                                  130 +
                                                                  0 +
                                                                  125.76 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                                children: h(B, {
                                                                  className: `framer-1h6cf76-container`,
                                                                  nodeId: `EJTSIqkU1`,
                                                                  scopeId: `augiA20Il`,
                                                                  children: h(U, {
                                                                    breakpoint: g,
                                                                    overrides: {
                                                                      FKeUsnHKg: {
                                                                        ten_bIQOV: r[2],
                                                                        variant: $(`wZCHWxi97`),
                                                                      },
                                                                      XOpZf9jEo: {
                                                                        ten_bIQOV: r[1],
                                                                      },
                                                                    },
                                                                    children: h(ln, {
                                                                      fsllypOej: n,
                                                                      H3udW32Bc: t,
                                                                      height: `100%`,
                                                                      id: `EJTSIqkU1`,
                                                                      jx2PsilzR: tc(i),
                                                                      KkQf7cJ4L: a,
                                                                      layoutId: `EJTSIqkU1`,
                                                                      qseMxDcHx: e,
                                                                      style: { width: `100%` },
                                                                      ten_bIQOV: r[0],
                                                                      variant: $(`X4mawqGhb`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                  r
                                                )
                                              )
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              h(Ie, {
                                links: [
                                  {
                                    href: { webPageId: `B1ccsbbPp` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `B1ccsbbPp` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `B1ccsbbPp` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  h(U, {
                                    breakpoint: g,
                                    overrides: {
                                      FKeUsnHKg: {
                                        y: (l?.y || 0) + 0 + 0 + 0 + 5211.9 + 70 + 0 + 0 + 1785.76,
                                      },
                                      XOpZf9jEo: {
                                        y: (l?.y || 0) + 0 + 0 + 0 + 4533.9 + 130 + 0 + 705.76,
                                      },
                                    },
                                    children: h(V, {
                                      height: 48,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 4720.9 + 130 + 0 + 705.76,
                                      children: h(B, {
                                        className: `framer-1wp75r7-container`,
                                        "data-framer-name": `Button`,
                                        name: `Button`,
                                        nodeId: `NE2rlQcfS`,
                                        scopeId: `augiA20Il`,
                                        children: h(U, {
                                          breakpoint: g,
                                          overrides: {
                                            FKeUsnHKg: { dQDe2ecMb: e[2] },
                                            XOpZf9jEo: { dQDe2ecMb: e[1] },
                                          },
                                          children: h(X, {
                                            dQDe2ecMb: e[0],
                                            GGZTVUGZ5: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                            height: `100%`,
                                            id: `NE2rlQcfS`,
                                            LALAatWUM: `View all cases`,
                                            layoutId: `NE2rlQcfS`,
                                            lCPX_SQT2: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                            name: `Button`,
                                            oAbfzaz1L: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                            qkIJkdmKd: !1,
                                            tWCC8YneY: `var(--token-c80313c8-a0c1-4f14-ad5e-9b2193d38589, rgb(178, 123, 0))`,
                                            variant: $(`AScdeMxwS`),
                                            width: `100%`,
                                            zkb7vpZI7: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                        }),
                        h(`div`, {
                          className: `framer-19y4626`,
                          "data-border": !0,
                          "data-framer-name": `Industries`,
                          children: h(U, {
                            breakpoint: g,
                            overrides: {
                              FKeUsnHKg: {
                                width: `min(${l?.width || `100vw`} - 32px, 1300px)`,
                                y: (l?.y || 0) + 0 + 0 + 0 + 7195.66 + 70 + 0,
                              },
                              XOpZf9jEo: {
                                width: `min(min(${l?.width || `100vw`}, 750px) - 64px, 1300px)`,
                                y: (l?.y || 0) + 0 + 0 + 0 + 5537.66 + 100 + 0,
                              },
                            },
                            children: h(V, {
                              height: 753,
                              width: `min(${l?.width || `100vw`} - 64px, 1300px)`,
                              y: (l?.y || 0) + 0 + 0 + 0 + 5724.66 + 100 + 0,
                              children: h(B, {
                                className: `framer-8jh6fz-container`,
                                nodeId: `TP6VXojlv`,
                                scopeId: `augiA20Il`,
                                children: h(U, {
                                  breakpoint: g,
                                  overrides: {
                                    FKeUsnHKg: { variant: $(`tDCHEHWPa`) },
                                    XOpZf9jEo: { variant: $(`IPC1SSIGS`) },
                                  },
                                  children: h(Jo, {
                                    AChBv6mnx: `Business & Management`,
                                    AtsGqKbqe: gc(
                                      {
                                        pixelHeight: 3665,
                                        pixelWidth: 3834,
                                        src: `https://framerusercontent.com/images/tEsCF2ts24QMQPR2Yqov9BvG8.webp?width=3834&height=3665`,
                                        srcSet: `https://framerusercontent.com/images/tEsCF2ts24QMQPR2Yqov9BvG8.webp?scale-down-to=512&width=3834&height=3665 512w,https://framerusercontent.com/images/tEsCF2ts24QMQPR2Yqov9BvG8.webp?scale-down-to=1024&width=3834&height=3665 1024w,https://framerusercontent.com/images/tEsCF2ts24QMQPR2Yqov9BvG8.webp?scale-down-to=2048&width=3834&height=3665 2048w,https://framerusercontent.com/images/tEsCF2ts24QMQPR2Yqov9BvG8.webp?width=3834&height=3665 3834w`,
                                      },
                                      ``
                                    ),
                                    dfbYUaU7k: ``,
                                    DP3k2sIwB: `Shortlisting and portfolio guidance for top design, visual communication, media, and liberal arts programs in India.`,
                                    DvMnYDgLq: `Arts, Design & Media`,
                                    dym8aGlmH: `NEET counselling, seat matrix guidance, and admissions across top government and private medical & dental colleges in India.`,
                                    FhHZF40Gc: gc(
                                      {
                                        pixelHeight: 4e3,
                                        pixelWidth: 4800,
                                        src: `../../assets/stock/stock_blog_documents.jpg`,
                                        srcSet: `../../assets/images/DvUG4Ft7GornS4usx89qfPhNk5I.webp 512w,../../assets/images/DvUG4Ft7GornS4usx89qfPhNk5I-c6d8ae.webp 1024w,../../assets/images/DvUG4Ft7GornS4usx89qfPhNk5I-85c19f.webp 2048w,../../assets/images/DvUG4Ft7GornS4usx89qfPhNk5I-e1d858.webp 4096w,../../assets/stock/stock_blog_documents.jpg 4800w`,
                                      },
                                      ``
                                    ),
                                    gRgZAVMwJ: gc(
                                      {
                                        pixelHeight: 3200,
                                        pixelWidth: 4800,
                                        src: `../../assets/stock/stock_about_campus.jpg`,
                                        srcSet: `../../assets/images/3TJCUPs1d1VKFuGr5r9i9L8I0Qs.webp 512w,../../assets/images/3TJCUPs1d1VKFuGr5r9i9L8I0Qs-588ed9.webp 1024w,../../assets/images/3TJCUPs1d1VKFuGr5r9i9L8I0Qs-c959a2.webp 2048w,../../assets/images/3TJCUPs1d1VKFuGr5r9i9L8I0Qs-c432aa.webp 4096w,../../assets/stock/stock_about_campus.jpg 4800w`,
                                      },
                                      ``
                                    ),
                                    H3Z4yrNzo: `Guidance for 5-year integrated law, BA/BBA LLB, LLM, and social sciences programs across top Indian institutes.`,
                                    height: `100%`,
                                    hZtEnwWel: gc(
                                      {
                                        pixelHeight: 3200,
                                        pixelWidth: 4800,
                                        src: `../../assets/stock/stock_blog_scholarships.jpg`,
                                        srcSet: `../../assets/images/8XwbpvWazAu7JCzLjOwM7uhyMXc.webp 512w,../../assets/images/8XwbpvWazAu7JCzLjOwM7uhyMXc-96e419.webp 1024w,../../assets/images/8XwbpvWazAu7JCzLjOwM7uhyMXc-193ea0.webp 2048w,../../assets/images/8XwbpvWazAu7JCzLjOwM7uhyMXc-2b1360.webp 4096w,../../assets/stock/stock_blog_scholarships.jpg 4800w`,
                                      },
                                      ``
                                    ),
                                    id: `TP6VXojlv`,
                                    kGMjQGWFg: gc(
                                      {
                                        pixelHeight: 4469,
                                        pixelWidth: 3931,
                                        src: `https://framerusercontent.com/images/LE212MTqFm8KTCjxPKrW9Sck.webp?width=3931&height=4469`,
                                        srcSet: `https://framerusercontent.com/images/LE212MTqFm8KTCjxPKrW9Sck.webp?scale-down-to=1024&width=3931&height=4469 900w,https://framerusercontent.com/images/LE212MTqFm8KTCjxPKrW9Sck.webp?scale-down-to=2048&width=3931&height=4469 1801w,https://framerusercontent.com/images/LE212MTqFm8KTCjxPKrW9Sck.webp?scale-down-to=4096&width=3931&height=4469 3602w,https://framerusercontent.com/images/LE212MTqFm8KTCjxPKrW9Sck.webp?width=3931&height=4469 3931w`,
                                      },
                                      ``
                                    ),
                                    L5bVOjC54: gc(
                                      {
                                        pixelHeight: 3548,
                                        pixelWidth: 4729,
                                        src: `../../assets/images/MDhZ9e6QV3i37FZE4zgwBgZLclo-1c87c9.webp`,
                                        srcSet: `../../assets/images/MDhZ9e6QV3i37FZE4zgwBgZLclo-16f408.webp 512w,../../assets/images/MDhZ9e6QV3i37FZE4zgwBgZLclo.webp 1024w,../../assets/images/MDhZ9e6QV3i37FZE4zgwBgZLclo-3d725d.webp 2048w,../../assets/images/MDhZ9e6QV3i37FZE4zgwBgZLclo-e0cfa3.webp 4096w,../../assets/images/MDhZ9e6QV3i37FZE4zgwBgZLclo-1c87c9.webp 4729w`,
                                      },
                                      ``
                                    ),
                                    layoutId: `TP6VXojlv`,
                                    nfr3_vd4_: `B.Tech, BE, and M.Tech guidance for Computer Science, AI, and core branches across top engineering colleges in India.`,
                                    rd_VK8DcK: `Science & Research`,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    T3Zvj4lLt: `Undergraduate and postgraduate research programs, integrated M.Sc, biotechnology, and leading science institutes in India.`,
                                    u2WQNcukZ: `BBA, MBA, and PGDM admissions, entrance score evaluation (CAT, XAT, MAT), and top Indian business school selection.`,
                                    variant: $(`nuSf7fOI9`),
                                    vraZoJ4v1: `Law & Social Sciences`,
                                    width: `100%`,
                                    Xgqdpwxoc: `Engineering & Science & Research`,
                                    Y7m9L8sgJ: `Medicine & Health Sciences`,
                                    YoMKINsBV: ``,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        y(`section`, {
                          className: `framer-1guxum3`,
                          "data-framer-name": `Testimonials`,
                          children: [
                            y(`div`, {
                              className: `framer-ygka16`,
                              "data-framer-name": `Container`,
                              children: [
                                h(U, {
                                  breakpoint: g,
                                  overrides: {
                                    FKeUsnHKg: {
                                      y: (l?.y || 0) + 0 + 0 + 0 + 8088.66 + 40 + 0 + 0 + 351.86,
                                    },
                                    XOpZf9jEo: {
                                      y: (l?.y || 0) + 0 + 0 + 0 + 6490.66 + 120 + 0 + 0 + 339.86,
                                    },
                                  },
                                  children: h(V, {
                                    height: 13,
                                    y: (l?.y || 0) + 0 + 0 + 0 + 6677.66 + 120 + 0 + 0 + 339.86,
                                    children: h(B, {
                                      className: `framer-pef9zm-container`,
                                      "data-framer-name": `Tag`,
                                      name: `Tag`,
                                      nodeId: `qCNh20HEj`,
                                      scopeId: `augiA20Il`,
                                      children: h(an, {
                                        height: `100%`,
                                        id: `qCNh20HEj`,
                                        layoutId: `qCNh20HEj`,
                                        name: `Tag`,
                                        variant: $(`pqmTc8b_A`),
                                        width: `100%`,
                                        XqtCAHGpt: `Testimonials`,
                                      }),
                                    }),
                                  }),
                                }),
                                y(`div`, {
                                  className: `framer-1m92sfz`,
                                  "data-framer-name": `Top`,
                                  children: [
                                    h(L, {
                                      __fromCanvasComponent: !0,
                                      children: h(o, {
                                        children: h(`h2`, {
                                          className: `framer-styles-preset-9lpzun`,
                                          "data-styles-preset": `kH4hVkPTC`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                          },
                                          children: `Trusted By Leaders Building What’s Next`,
                                        }),
                                      }),
                                      className: `framer-1exwx0l`,
                                      "data-framer-name": `Headline`,
                                      effect: Zs,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    h(Ts, {
                                      __framer__animate: { transition: Xs },
                                      __framer__animateOnce: !0,
                                      __framer__enter: dc,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 0.7,
                                      children: h(o, {
                                        children: h(`p`, {
                                          className: `framer-styles-preset-1bsm36g`,
                                          "data-styles-preset": `V83vTwGC4`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `center` },
                                          children: `Leaders trust CareerNova Education Services to bring clarity, perspective, and momentum to complex business decisions.`,
                                        }),
                                      }),
                                      className: `framer-4n8bec`,
                                      "data-framer-name": `Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                h(Ie, {
                                  links: [
                                    {
                                      href: { webPageId: `sGcuUgaBJ` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `sGcuUgaBJ` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `sGcuUgaBJ` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    h(U, {
                                      breakpoint: g,
                                      overrides: {
                                        FKeUsnHKg: {
                                          y:
                                            (l?.y || 0) + 0 + 0 + 0 + 8088.66 + 40 + 0 + 0 + 600.14,
                                        },
                                        XOpZf9jEo: {
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            6490.66 +
                                            120 +
                                            0 +
                                            0 +
                                            612.14,
                                        },
                                      },
                                      children: h(V, {
                                        height: 48,
                                        y: (l?.y || 0) + 0 + 0 + 0 + 6677.66 + 120 + 0 + 0 + 612.14,
                                        children: h(Ds, {
                                          __framer__animate: { transition: Xs },
                                          __framer__animateOnce: !0,
                                          __framer__enter: dc,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-j3w846-container`,
                                          nodeId: `y5YZN3ZGa`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: h(U, {
                                            breakpoint: g,
                                            overrides: {
                                              FKeUsnHKg: { dQDe2ecMb: e[2] },
                                              XOpZf9jEo: { dQDe2ecMb: e[1] },
                                            },
                                            children: h(X, {
                                              dQDe2ecMb: e[0],
                                              GGZTVUGZ5: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                              height: `100%`,
                                              id: `y5YZN3ZGa`,
                                              LALAatWUM: `Book Counselling`,
                                              layoutId: `y5YZN3ZGa`,
                                              lCPX_SQT2: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                              oAbfzaz1L: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                              qkIJkdmKd: !1,
                                              tWCC8YneY: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                              variant: $(`AScdeMxwS`),
                                              width: `100%`,
                                              zkb7vpZI7: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                            y(`div`, {
                              className: `framer-xv5p49`,
                              "data-framer-name": `Process Spacer`,
                              children: [
                                h(U, {
                                  breakpoint: g,
                                  overrides: {
                                    FKeUsnHKg: {
                                      width: `min(max(min(${l?.width || `100vw`} - 32px, 1300px), 50px), 420px)`,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 8088.66 + 40 + 1e3 + 0 + 0,
                                    },
                                    XOpZf9jEo: {
                                      y: (l?.y || 0) + 0 + 0 + 0 + 6490.66 + 120 + 1e3 + 0 + 0,
                                    },
                                  },
                                  children: h(V, {
                                    height: 330,
                                    width: `min(max((min(${l?.width || `100vw`} - 64px, 1300px) - 64px) / 2, 50px), 420px)`,
                                    y: (l?.y || 0) + 0 + 0 + 0 + 6677.66 + 120 + 1e3 + 0 + 0,
                                    children: h(B, {
                                      className: `framer-cxrkoj-container`,
                                      "data-framer-name": `Testimonial`,
                                      name: `Testimonial`,
                                      nodeId: `JI6L08bSK`,
                                      scopeId: `augiA20Il`,
                                      children: h(U, {
                                        breakpoint: g,
                                        overrides: { FKeUsnHKg: { variant: $(`eJwFUnTKR`) } },
                                        children: h(Ma, {
                                          B5TAlxR8C: `Aditi`,
                                          BRbPRMZSH: gc(
                                            {
                                              pixelHeight: 1644,
                                              pixelWidth: 1785,
                                              src: `../../assets/images/oPj6jxeNf4YTw8hAFkftGZFgXEk-0e4ffe.webp`,
                                              srcSet: `../../assets/images/oPj6jxeNf4YTw8hAFkftGZFgXEk.webp 512w,../../assets/images/oPj6jxeNf4YTw8hAFkftGZFgXEk-192c9c.webp 1024w,../../assets/images/oPj6jxeNf4YTw8hAFkftGZFgXEk-0e4ffe.webp 1785w`,
                                            },
                                            ``
                                          ),
                                          height: `100%`,
                                          id: `JI6L08bSK`,
                                          layoutId: `JI6L08bSK`,
                                          name: `Testimonial`,
                                          sJMxqcNat: `“CareerNova Education Services helped us see the bigger picture, prioritize what mattered, and move forward with far greater confidence.”`,
                                          style: { maxWidth: `100%`, width: `100%` },
                                          variant: $(`LDDG4BR4H`),
                                          WBD87VX3Y: `B.Tech Computer Science | Top Engineering College, Bengaluru, India`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                O() &&
                                  h(`div`, {
                                    className: `framer-1wi8chu hidden-1qvnpt1`,
                                    "data-framer-name": `Spacer`,
                                  }),
                                O() &&
                                  h(`div`, {
                                    className: `framer-1rv3j44 hidden-1qvnpt1`,
                                    "data-framer-name": `Spacer`,
                                  }),
                                h(U, {
                                  breakpoint: g,
                                  overrides: {
                                    FKeUsnHKg: {
                                      width: `min(max(min(${l?.width || `100vw`} - 32px, 1300px), 50px), 420px)`,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 8088.66 + 40 + 1e3 + 0 + 362,
                                    },
                                    XOpZf9jEo: {
                                      y: (l?.y || 0) + 0 + 0 + 0 + 6490.66 + 120 + 1e3 + 0 + 394,
                                    },
                                  },
                                  children: h(V, {
                                    height: 330,
                                    width: `min(max((min(${l?.width || `100vw`} - 64px, 1300px) - 64px) / 2, 50px), 420px)`,
                                    y: (l?.y || 0) + 0 + 0 + 0 + 6677.66 + 120 + 1e3 + 0 + 394,
                                    children: h(B, {
                                      className: `framer-1r3lf1y-container`,
                                      "data-framer-name": `Testimonial`,
                                      name: `Testimonial`,
                                      nodeId: `hbYE4c63U`,
                                      scopeId: `augiA20Il`,
                                      children: h(U, {
                                        breakpoint: g,
                                        overrides: { FKeUsnHKg: { variant: $(`eJwFUnTKR`) } },
                                        children: h(Ma, {
                                          B5TAlxR8C: `Karan`,
                                          BRbPRMZSH: gc(
                                            {
                                              pixelHeight: 3016,
                                              pixelWidth: 2566,
                                              src: `../../assets/images/QELrHjZUCw6AvZSBjpa9nwCnIyY-cfa284.webp`,
                                              srcSet: `../../assets/images/QELrHjZUCw6AvZSBjpa9nwCnIyY.webp 871w,../../assets/images/QELrHjZUCw6AvZSBjpa9nwCnIyY-d52e8f.webp 1742w,../../assets/images/QELrHjZUCw6AvZSBjpa9nwCnIyY-cfa284.webp 2566w`,
                                            },
                                            ``
                                          ),
                                          height: `100%`,
                                          id: `hbYE4c63U`,
                                          layoutId: `hbYE4c63U`,
                                          name: `Testimonial`,
                                          sJMxqcNat: `“Their advice was practical, direct, and deeply considered. We left every conversation with clearer priorities and direction.”`,
                                          style: { maxWidth: `100%`, width: `100%` },
                                          variant: $(`LDDG4BR4H`),
                                          WBD87VX3Y: `MBA / Management Programme | Top Business School, Mumbai, India`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                h(U, {
                                  breakpoint: g,
                                  overrides: {
                                    FKeUsnHKg: {
                                      width: `min(max(min(${l?.width || `100vw`} - 32px, 1300px), 50px), 420px)`,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 8088.66 + 40 + 1e3 + 0 + 724,
                                    },
                                    XOpZf9jEo: {
                                      y: (l?.y || 0) + 0 + 0 + 0 + 6490.66 + 120 + 1e3 + 0 + 788,
                                    },
                                  },
                                  children: h(V, {
                                    height: 330,
                                    width: `min(max((min(${l?.width || `100vw`} - 64px, 1300px) - 64px) / 2, 50px), 420px)`,
                                    y: (l?.y || 0) + 0 + 0 + 0 + 6677.66 + 120 + 1e3 + 0 + 788,
                                    children: h(B, {
                                      className: `framer-8634da-container`,
                                      "data-framer-name": `Testimonial`,
                                      name: `Testimonial`,
                                      nodeId: `nWqahDuyp`,
                                      scopeId: `augiA20Il`,
                                      children: h(U, {
                                        breakpoint: g,
                                        overrides: { FKeUsnHKg: { variant: $(`eJwFUnTKR`) } },
                                        children: h(Ma, {
                                          B5TAlxR8C: `Sneha`,
                                          BRbPRMZSH: gc(
                                            {
                                              pixelHeight: 1213,
                                              pixelWidth: 1293,
                                              src: `../../assets/images/DIv0ak73AhgXHEDVO6DPD3aQNQ-19efa7.webp`,
                                              srcSet: `../../assets/images/DIv0ak73AhgXHEDVO6DPD3aQNQ.webp 512w,../../assets/images/DIv0ak73AhgXHEDVO6DPD3aQNQ-cb4469.webp 1024w,../../assets/images/DIv0ak73AhgXHEDVO6DPD3aQNQ-19efa7.webp 1293w`,
                                            },
                                            ``
                                          ),
                                          height: `100%`,
                                          id: `nWqahDuyp`,
                                          layoutId: `nWqahDuyp`,
                                          name: `Testimonial`,
                                          sJMxqcNat: `“CareerNova Education Services brought structure to a complex challenge and helped our leadership team align around a stronger path forward.”`,
                                          style: { maxWidth: `100%`, width: `100%` },
                                          variant: $(`LDDG4BR4H`),
                                          WBD87VX3Y: `B.Com (Hons) & Economics | Premier Central University, Delhi, India`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                O() &&
                                  h(`div`, {
                                    className: `framer-1ldryo4 hidden-1qvnpt1`,
                                    "data-framer-name": `Spacer`,
                                  }),
                                O() &&
                                  h(`div`, {
                                    className: `framer-3z99vt hidden-1qvnpt1`,
                                    "data-framer-name": `Spacer`,
                                  }),
                                h(U, {
                                  breakpoint: g,
                                  overrides: {
                                    FKeUsnHKg: {
                                      width: `min(max(min(${l?.width || `100vw`} - 32px, 1300px), 50px), 420px)`,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 8088.66 + 40 + 1e3 + 0 + 1086,
                                    },
                                    XOpZf9jEo: {
                                      y: (l?.y || 0) + 0 + 0 + 0 + 6490.66 + 120 + 1e3 + 0 + 1182,
                                    },
                                  },
                                  children: h(V, {
                                    height: 330,
                                    width: `min(max((min(${l?.width || `100vw`} - 64px, 1300px) - 64px) / 2, 50px), 420px)`,
                                    y: (l?.y || 0) + 0 + 0 + 0 + 6677.66 + 120 + 1e3 + 0 + 1182,
                                    children: h(B, {
                                      className: `framer-16r393x-container`,
                                      "data-framer-name": `Testimonial`,
                                      name: `Testimonial`,
                                      nodeId: `pxiVmyRf7`,
                                      scopeId: `augiA20Il`,
                                      children: h(U, {
                                        breakpoint: g,
                                        overrides: { FKeUsnHKg: { variant: $(`eJwFUnTKR`) } },
                                        children: h(Ma, {
                                          B5TAlxR8C: `Rohan`,
                                          BRbPRMZSH: gc(
                                            {
                                              pixelHeight: 2019,
                                              pixelWidth: 2110,
                                              src: `../../assets/images/JoUBMRtarLjWrF8S7IC85kIjLM-546a14.webp`,
                                              srcSet: `../../assets/images/JoUBMRtarLjWrF8S7IC85kIjLM.webp 512w,../../assets/images/JoUBMRtarLjWrF8S7IC85kIjLM-a63643.webp 1024w,../../assets/images/JoUBMRtarLjWrF8S7IC85kIjLM-a731d5.webp 2048w,../../assets/images/JoUBMRtarLjWrF8S7IC85kIjLM-546a14.webp 2110w`,
                                            },
                                            ``
                                          ),
                                          height: `100%`,
                                          id: `pxiVmyRf7`,
                                          layoutId: `pxiVmyRf7`,
                                          name: `Testimonial`,
                                          sJMxqcNat: `“What stood out was their ability to challenge our thinking while keeping every recommendation grounded in commercial reality.”`,
                                          style: { maxWidth: `100%`, width: `100%` },
                                          variant: $(`LDDG4BR4H`),
                                          WBD87VX3Y: `B.Des Industrial Design | Top National Design Institute, Pune, India`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            h(`div`, {
                              className: `framer-13j64b2`,
                              "data-framer-name": `Container`,
                            }),
                          ],
                        }),
                        h(`section`, {
                          className: `framer-amq3p3`,
                          "data-framer-name": `Our Approach`,
                          children: y(`div`, {
                            className: `framer-12wl6m1`,
                            "data-framer-name": `Container`,
                            children: [
                              y(`div`, {
                                className: `framer-1it8r3x`,
                                "data-framer-name": `Top`,
                                children: [
                                  y(`div`, {
                                    className: `framer-1j7ex55`,
                                    "data-framer-name": `Content`,
                                    children: [
                                      y(`div`, {
                                        className: `framer-1grx4cn`,
                                        "data-framer-name": `Heading`,
                                        children: [
                                          h(U, {
                                            breakpoint: g,
                                            overrides: {
                                              FKeUsnHKg: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  11584.66 +
                                                  80 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                              XOpZf9jEo: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  10242.66 +
                                                  120 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            children: h(V, {
                                              height: 13,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                10429.66 +
                                                120 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                              children: h(B, {
                                                className: `framer-19q0rnq-container`,
                                                "data-framer-name": `Tag`,
                                                name: `Tag`,
                                                nodeId: `fR8QadTJ5`,
                                                scopeId: `augiA20Il`,
                                                children: h(an, {
                                                  height: `100%`,
                                                  id: `fR8QadTJ5`,
                                                  layoutId: `fR8QadTJ5`,
                                                  name: `Tag`,
                                                  variant: $(`pqmTc8b_A`),
                                                  width: `100%`,
                                                  XqtCAHGpt: `Our Approach`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          h(L, {
                                            __fromCanvasComponent: !0,
                                            children: h(o, {
                                              children: h(`h2`, {
                                                className: `framer-styles-preset-hcmt7i`,
                                                "data-styles-preset": `H4GEN39UP`,
                                                dir: `auto`,
                                                children: `A A Clear Path From First Call To Arrival`,
                                              }),
                                            }),
                                            className: `framer-tn8jyu`,
                                            effect: Zs,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      h(Ts, {
                                        __framer__animate: { transition: Xs },
                                        __framer__animateOnce: !0,
                                        __framer__enter: dc,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 0.8,
                                        children: h(o, {
                                          children: h(`p`, {
                                            className: `framer-styles-preset-qlsyr3`,
                                            "data-styles-preset": `YMpbOMTQr`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `left` },
                                            children: `A simple process built around you, with honest advice at every step.`,
                                          }),
                                        }),
                                        className: `framer-12lgp2y`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  O() &&
                                    h(Ie, {
                                      links: [
                                        {
                                          href: { webPageId: `musfU1kBr` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `musfU1kBr` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        h(U, {
                                          breakpoint: g,
                                          overrides: {
                                            XOpZf9jEo: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                10242.66 +
                                                120 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                149.06,
                                            },
                                          },
                                          children: h(V, {
                                            height: 48,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              10429.66 +
                                              120 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              157.06,
                                            children: h(U, {
                                              breakpoint: g,
                                              overrides: {
                                                XOpZf9jEo: {
                                                  __framer__animate: { transition: lc },
                                                },
                                              },
                                              children: h(Ds, {
                                                __framer__animate: { transition: Xs },
                                                __framer__animateOnce: !0,
                                                __framer__enter: dc,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: 0,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: `framer-5s6hl3-container hidden-1qvnpt1`,
                                                nodeId: `ajnG1SbT5`,
                                                rendersWithMotion: !0,
                                                scopeId: `augiA20Il`,
                                                children: h(U, {
                                                  breakpoint: g,
                                                  overrides: { XOpZf9jEo: { dQDe2ecMb: e[1] } },
                                                  children: h(X, {
                                                    dQDe2ecMb: e[0],
                                                    GGZTVUGZ5: `var(--token-c80313c8-a0c1-4f14-ad5e-9b2193d38589, rgb(178, 123, 0))`,
                                                    height: `100%`,
                                                    id: `ajnG1SbT5`,
                                                    LALAatWUM: `Book A Counselling Session`,
                                                    layoutId: `ajnG1SbT5`,
                                                    lCPX_SQT2: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                                    oAbfzaz1L: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                                    qkIJkdmKd: !1,
                                                    tWCC8YneY: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                    variant: $(`AScdeMxwS`),
                                                    width: `100%`,
                                                    zkb7vpZI7: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                ],
                              }),
                              y(ys, {
                                __framer__animate: { transition: $s },
                                __framer__animateOnce: !0,
                                __framer__enter: Qs,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-l9x9up`,
                                "data-framer-name": `Approaches`,
                                children: [
                                  O() &&
                                    y(`div`, {
                                      className: `framer-hopgyc hidden-1qvnpt1`,
                                      "data-framer-name": `Left bar`,
                                      children: [
                                        h(U, {
                                          breakpoint: g,
                                          overrides: {
                                            XOpZf9jEo: {
                                              width: `min(max((min(${l?.width || `100vw`} - 64px, 1300px) - 16px) / 3, 1px), 220px)`,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                10242.66 +
                                                120 +
                                                0 +
                                                0 +
                                                257.06 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                          },
                                          children: h(V, {
                                            height: 44,
                                            width: `min(max((min(${l?.width || `100vw`} - 64px, 1300px) - 16px) * 0.375, 1px), 220px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              10429.66 +
                                              120 +
                                              0 +
                                              0 +
                                              265.06 +
                                              0 +
                                              0 +
                                              0,
                                            children: h(B, {
                                              className: `framer-lwhs6m-container`,
                                              "data-framer-name": `Automation`,
                                              name: `Automation`,
                                              nodeId: `beMR69wWA`,
                                              rendersWithMotion: !0,
                                              scopeId: `augiA20Il`,
                                              children: h(Ms, {
                                                __framer__animateOnce: !1,
                                                __framer__targets: [
                                                  { ref: j, target: `PZkzodj4j` },
                                                  { ref: ae, target: `IVZi4h6v0` },
                                                  { ref: M, target: `IVZi4h6v0` },
                                                ],
                                                __framer__threshold: 0.5,
                                                __framer__variantAppearEffectEnabled: !0,
                                                height: `100%`,
                                                id: `beMR69wWA`,
                                                J23yBDTwr: `Understand`,
                                                layoutId: `beMR69wWA`,
                                                name: `Automation`,
                                                q4ztxfFQU: `01`,
                                                style: { maxWidth: `100%`, width: `100%` },
                                                variant: $(`BO_YN1XUI`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        h(U, {
                                          breakpoint: g,
                                          overrides: {
                                            XOpZf9jEo: {
                                              width: `min(max((min(${l?.width || `100vw`} - 64px, 1300px) - 16px) / 3, 1px), 220px)`,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                10242.66 +
                                                120 +
                                                0 +
                                                0 +
                                                257.06 +
                                                0 +
                                                0 +
                                                54,
                                            },
                                          },
                                          children: h(V, {
                                            height: 44,
                                            width: `min(max((min(${l?.width || `100vw`} - 64px, 1300px) - 16px) * 0.375, 1px), 220px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              10429.66 +
                                              120 +
                                              0 +
                                              0 +
                                              265.06 +
                                              0 +
                                              0 +
                                              54,
                                            children: h(B, {
                                              className: `framer-15y0h8z-container`,
                                              "data-framer-name": `Orchestration`,
                                              name: `Orchestration`,
                                              nodeId: `veLdaVZuR`,
                                              rendersWithMotion: !0,
                                              scopeId: `augiA20Il`,
                                              children: h(Ms, {
                                                __framer__animateOnce: !1,
                                                __framer__targets: [
                                                  { ref: ae, target: `PZkzodj4j` },
                                                  { ref: M, target: `IVZi4h6v0` },
                                                ],
                                                __framer__threshold: 0.5,
                                                __framer__variantAppearEffectEnabled: !0,
                                                height: `100%`,
                                                id: `veLdaVZuR`,
                                                J23yBDTwr: `Counselling`,
                                                layoutId: `veLdaVZuR`,
                                                name: `Orchestration`,
                                                q4ztxfFQU: `02`,
                                                style: { maxWidth: `100%`, width: `100%` },
                                                variant: $(`VdJILs_4v`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        h(U, {
                                          breakpoint: g,
                                          overrides: {
                                            XOpZf9jEo: {
                                              width: `min(max((min(${l?.width || `100vw`} - 64px, 1300px) - 16px) / 3, 1px), 220px)`,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                10242.66 +
                                                120 +
                                                0 +
                                                0 +
                                                257.06 +
                                                0 +
                                                0 +
                                                108,
                                            },
                                          },
                                          children: h(V, {
                                            height: 44,
                                            width: `min(max((min(${l?.width || `100vw`} - 64px, 1300px) - 16px) * 0.375, 1px), 220px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              10429.66 +
                                              120 +
                                              0 +
                                              0 +
                                              265.06 +
                                              0 +
                                              0 +
                                              108,
                                            children: h(B, {
                                              className: `framer-10xa7o5-container`,
                                              "data-framer-name": `Management`,
                                              name: `Management`,
                                              nodeId: `off_EG79q`,
                                              rendersWithMotion: !0,
                                              scopeId: `augiA20Il`,
                                              children: h(Ms, {
                                                __framer__animateOnce: !1,
                                                __framer__targets: [
                                                  { ref: M, target: `PZkzodj4j` },
                                                ],
                                                __framer__threshold: 0.5,
                                                __framer__variantAppearEffectEnabled: !0,
                                                height: `100%`,
                                                id: `off_EG79q`,
                                                J23yBDTwr: `Careers`,
                                                layoutId: `off_EG79q`,
                                                name: `Management`,
                                                q4ztxfFQU: `03`,
                                                style: { maxWidth: `100%`, width: `100%` },
                                                variant: $(`VdJILs_4v`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  y(`div`, {
                                    className: `framer-1na1wgq`,
                                    "data-framer-name": `Right bar`,
                                    children: [
                                      h(U, {
                                        breakpoint: g,
                                        overrides: {
                                          FKeUsnHKg: {
                                            width: `calc(${l?.width || `100vw`} - 32px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              11584.66 +
                                              80 +
                                              0 +
                                              0 +
                                              239.06 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          XOpZf9jEo: {
                                            width: `max((min(${l?.width || `100vw`} - 64px, 1300px) - 16px) / 1.5, 1px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              10242.66 +
                                              120 +
                                              0 +
                                              0 +
                                              257.06 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: h(V, {
                                          height: 450,
                                          width: `max((min(${l?.width || `100vw`} - 64px, 1300px) - 16px) / 1.6, 1px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            10429.66 +
                                            120 +
                                            0 +
                                            0 +
                                            265.06 +
                                            0 +
                                            0 +
                                            0,
                                          children: h(B, {
                                            className: `framer-z5o36e-container`,
                                            "data-framer-name": `Acquisition`,
                                            id: oe,
                                            name: `Acquisition`,
                                            nodeId: `nrHc2EeAa`,
                                            ref: j,
                                            scopeId: `augiA20Il`,
                                            children: h(U, {
                                              breakpoint: g,
                                              overrides: {
                                                FKeUsnHKg: { variant: $(`RdeWz3Ehi`) },
                                                XOpZf9jEo: { variant: $(`tBQFzhd_u`) },
                                              },
                                              children: h(Pt, {
                                                height: `100%`,
                                                HpgRvkXB_: gc(
                                                  {
                                                    pixelHeight: 3601,
                                                    pixelWidth: 4800,
                                                    src: `../../assets/images/K5fINDYMyduuJXuU3UH8H42J70-0c6594.webp`,
                                                    srcSet: `../../assets/images/K5fINDYMyduuJXuU3UH8H42J70.webp 512w,../../assets/images/K5fINDYMyduuJXuU3UH8H42J70-dd2853.webp 1024w,../../assets/images/K5fINDYMyduuJXuU3UH8H42J70-e00c46.webp 2048w,../../assets/images/K5fINDYMyduuJXuU3UH8H42J70-5d6cec.webp 4096w,../../assets/images/K5fINDYMyduuJXuU3UH8H42J70-0c6594.webp 4800w`,
                                                  },
                                                  ``
                                                ),
                                                id: `nrHc2EeAa`,
                                                layoutId: `nrHc2EeAa`,
                                                name: `Acquisition`,
                                                PlH7tNkcK: Vt,
                                                Qi6kMH62r: `We start with a detailed conversation about your academics, interests, budget and career goals, so every decision after is based on your real situation.`,
                                                style: { width: `100%` },
                                                variant: $(`sepewgdEt`),
                                                width: `100%`,
                                                ZZtWUY1u3: `Understand Your Goals`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      h(U, {
                                        breakpoint: g,
                                        overrides: {
                                          FKeUsnHKg: {
                                            width: `calc(${l?.width || `100vw`} - 32px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              11584.66 +
                                              80 +
                                              0 +
                                              0 +
                                              239.06 +
                                              0 +
                                              0 +
                                              0 +
                                              474,
                                          },
                                          XOpZf9jEo: {
                                            width: `max((min(${l?.width || `100vw`} - 64px, 1300px) - 16px) / 1.5, 1px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              10242.66 +
                                              120 +
                                              0 +
                                              0 +
                                              257.06 +
                                              0 +
                                              0 +
                                              498,
                                          },
                                        },
                                        children: h(V, {
                                          height: 450,
                                          width: `max((min(${l?.width || `100vw`} - 64px, 1300px) - 16px) / 1.6, 1px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            10429.66 +
                                            120 +
                                            0 +
                                            0 +
                                            265.06 +
                                            0 +
                                            0 +
                                            498,
                                          children: h(B, {
                                            className: `framer-1c0euu7-container`,
                                            "data-framer-name": `Excellence`,
                                            id: se,
                                            name: `Excellence`,
                                            nodeId: `cOMm90vJL`,
                                            ref: ae,
                                            scopeId: `augiA20Il`,
                                            children: h(U, {
                                              breakpoint: g,
                                              overrides: {
                                                FKeUsnHKg: { variant: $(`RdeWz3Ehi`) },
                                                XOpZf9jEo: { variant: $(`tBQFzhd_u`) },
                                              },
                                              children: h(Pt, {
                                                height: `100%`,
                                                HpgRvkXB_: gc(
                                                  {
                                                    pixelHeight: 3648,
                                                    pixelWidth: 5961,
                                                    positionX: `22.7%`,
                                                    positionY: `59.7%`,
                                                    src: `../../assets/images/8cjSzpABXLueKZcrHGMRKXCgVSg-a8abcf.webp`,
                                                    srcSet: `../../assets/images/8cjSzpABXLueKZcrHGMRKXCgVSg.webp 512w,../../assets/images/8cjSzpABXLueKZcrHGMRKXCgVSg-cd0e8b.webp 1024w,../../assets/images/8cjSzpABXLueKZcrHGMRKXCgVSg-532285.webp 2048w,../../assets/images/8cjSzpABXLueKZcrHGMRKXCgVSg-4b2f7d.webp 4096w,../../assets/images/8cjSzpABXLueKZcrHGMRKXCgVSg-a8abcf.webp 5961w`,
                                                  },
                                                  ``
                                                ),
                                                id: `cOMm90vJL`,
                                                layoutId: `cOMm90vJL`,
                                                name: `Excellence`,
                                                PlH7tNkcK: Kt,
                                                Qi6kMH62r: `We shortlist courses and universities that fit, plan your tests and timelines, and prepare strong applications, SOPs and documents.`,
                                                style: { width: `100%` },
                                                variant: $(`sepewgdEt`),
                                                width: `100%`,
                                                ZZtWUY1u3: `Shape Visas`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      h(U, {
                                        breakpoint: g,
                                        overrides: {
                                          FKeUsnHKg: {
                                            width: `calc(${l?.width || `100vw`} - 32px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              11584.66 +
                                              80 +
                                              0 +
                                              0 +
                                              239.06 +
                                              0 +
                                              0 +
                                              0 +
                                              948,
                                          },
                                          XOpZf9jEo: {
                                            width: `max((min(${l?.width || `100vw`} - 64px, 1300px) - 16px) / 1.5, 1px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              10242.66 +
                                              120 +
                                              0 +
                                              0 +
                                              257.06 +
                                              0 +
                                              0 +
                                              996,
                                          },
                                        },
                                        children: h(V, {
                                          height: 450,
                                          width: `max((min(${l?.width || `100vw`} - 64px, 1300px) - 16px) / 1.6, 1px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            10429.66 +
                                            120 +
                                            0 +
                                            0 +
                                            265.06 +
                                            0 +
                                            0 +
                                            996,
                                          children: h(B, {
                                            className: `framer-nrsm6q-container`,
                                            "data-framer-name": `Partnership`,
                                            id: N,
                                            name: `Partnership`,
                                            nodeId: `esZ2zY5mx`,
                                            ref: M,
                                            scopeId: `augiA20Il`,
                                            children: h(U, {
                                              breakpoint: g,
                                              overrides: {
                                                FKeUsnHKg: { variant: $(`RdeWz3Ehi`) },
                                                XOpZf9jEo: { variant: $(`tBQFzhd_u`) },
                                              },
                                              children: h(Pt, {
                                                height: `100%`,
                                                HpgRvkXB_: gc(
                                                  {
                                                    pixelHeight: 3548,
                                                    pixelWidth: 4729,
                                                    src: `../../assets/images/MDhZ9e6QV3i37FZE4zgwBgZLclo-1c87c9.webp`,
                                                    srcSet: `../../assets/images/MDhZ9e6QV3i37FZE4zgwBgZLclo-16f408.webp 512w,../../assets/images/MDhZ9e6QV3i37FZE4zgwBgZLclo.webp 1024w,../../assets/images/MDhZ9e6QV3i37FZE4zgwBgZLclo-3d725d.webp 2048w,../../assets/images/MDhZ9e6QV3i37FZE4zgwBgZLclo-e0cfa3.webp 4096w,../../assets/images/MDhZ9e6QV3i37FZE4zgwBgZLclo-1c87c9.webp 4729w`,
                                                  },
                                                  ``
                                                ),
                                                id: `esZ2zY5mx`,
                                                layoutId: `esZ2zY5mx`,
                                                name: `Partnership`,
                                                PlH7tNkcK: Wt,
                                                Qi6kMH62r: `We guide you through application documentation, counselling rounds, seat allotment, and career support throughout your studies.`,
                                                style: { width: `100%` },
                                                variant: $(`sepewgdEt`),
                                                width: `100%`,
                                                ZZtWUY1u3: `Make Careers`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        h(`section`, {
                          className: `framer-7t69tj`,
                          "data-framer-name": `Comparison`,
                          children: y(`div`, {
                            className: `framer-1we4npt`,
                            "data-framer-name": `Container`,
                            children: [
                              y(`div`, {
                                className: `framer-o2jw3n`,
                                "data-framer-name": `Top`,
                                children: [
                                  y(`div`, {
                                    className: `framer-1fcyfbo`,
                                    "data-framer-name": `Content`,
                                    children: [
                                      h(U, {
                                        breakpoint: g,
                                        overrides: {
                                          FKeUsnHKg: {
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              13381.72 +
                                              70 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          XOpZf9jEo: {
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              12185.72 +
                                              120 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: h(V, {
                                          height: 13,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            12380.72 +
                                            120 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                          children: h(B, {
                                            className: `framer-1ntzinr-container`,
                                            "data-framer-name": `Tag`,
                                            name: `Tag`,
                                            nodeId: `aO6LkIOjH`,
                                            scopeId: `augiA20Il`,
                                            children: h(an, {
                                              height: `100%`,
                                              id: `aO6LkIOjH`,
                                              layoutId: `aO6LkIOjH`,
                                              name: `Tag`,
                                              variant: $(`xumQIq7vU`),
                                              width: `100%`,
                                              XqtCAHGpt: `The Difference`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      h(U, {
                                        breakpoint: g,
                                        overrides: {
                                          XOpZf9jEo: {
                                            children: h(o, {
                                              children: h(`h2`, {
                                                className: `framer-styles-preset-hcmt7i`,
                                                "data-styles-preset": `H4GEN39UP`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                                },
                                                children: `Why Choose CareerNova`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: h(L, {
                                          __fromCanvasComponent: !0,
                                          children: h(o, {
                                            children: h(`h2`, {
                                              className: `framer-styles-preset-hcmt7i`,
                                              "data-styles-preset": `H4GEN39UP`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                              },
                                              children: `Why Choose CareerNova`,
                                            }),
                                          }),
                                          className: `framer-c6niz4`,
                                          "data-framer-name": `Text`,
                                          effect: Zs,
                                          fonts: [`Inter`],
                                          id: `c6niz4`,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  y(ys, {
                                    __framer__animate: { transition: $s },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Qs,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1vjwnf`,
                                    "data-framer-name": `Cards`,
                                    children: [
                                      h(U, {
                                        breakpoint: g,
                                        overrides: {
                                          FKeUsnHKg: {
                                            width: `min(${l?.width || `100vw`} - 32px, 1300px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              13381.72 +
                                              70 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              125.76 +
                                              0 +
                                              0,
                                          },
                                          XOpZf9jEo: {
                                            width: `min(${l?.width || `100vw`} - 64px, 1300px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              12185.72 +
                                              120 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              125.76 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: h(V, {
                                          height: 481,
                                          width: `max((min(${l?.width || `100vw`} - 64px, 1300px) - 16px) / 2, 1px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            12380.72 +
                                            120 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            125.76 +
                                            0,
                                          children: h(B, {
                                            className: `framer-1r15xo1-container`,
                                            nodeId: `Eg91oipE4`,
                                            scopeId: `augiA20Il`,
                                            children: h(It, {
                                              height: `100%`,
                                              id: `Eg91oipE4`,
                                              layoutId: `Eg91oipE4`,
                                              style: { width: `100%` },
                                              variant: $(`Ww5fzEmu1`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      h(U, {
                                        breakpoint: g,
                                        overrides: {
                                          FKeUsnHKg: {
                                            width: `min(${l?.width || `100vw`} - 32px, 1300px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              13381.72 +
                                              70 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              125.76 +
                                              0 +
                                              497,
                                          },
                                          XOpZf9jEo: {
                                            width: `min(${l?.width || `100vw`} - 64px, 1300px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              12185.72 +
                                              120 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              125.76 +
                                              0 +
                                              497,
                                          },
                                        },
                                        children: h(V, {
                                          height: 481,
                                          width: `max((min(${l?.width || `100vw`} - 64px, 1300px) - 16px) / 2, 1px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            12380.72 +
                                            120 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            125.76 +
                                            0,
                                          children: h(B, {
                                            className: `framer-1kvwdtr-container`,
                                            nodeId: `OnaxYd0zu`,
                                            scopeId: `augiA20Il`,
                                            children: h(It, {
                                              height: `100%`,
                                              id: `OnaxYd0zu`,
                                              layoutId: `OnaxYd0zu`,
                                              style: { width: `100%` },
                                              variant: $(`irKjuxCYq`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              y(`div`, {
                                className: `framer-uzor8h`,
                                "data-border": !0,
                                "data-framer-name": `Content`,
                                children: [
                                  h(U, {
                                    breakpoint: g,
                                    overrides: {
                                      FKeUsnHKg: {
                                        width: `min(${l?.width || `100vw`} - 32px, 1300px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          13381.72 +
                                          70 +
                                          0 +
                                          0 +
                                          1163.76 +
                                          0 +
                                          0,
                                      },
                                      XOpZf9jEo: {
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          12185.72 +
                                          120 +
                                          0 +
                                          0 +
                                          1143.76 +
                                          0,
                                      },
                                    },
                                    children: h(V, {
                                      height: 279,
                                      width: `max(min(${l?.width || `100vw`} - 64px, 1300px) / 4, 1px)`,
                                      y:
                                        (l?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        12380.72 +
                                        120 +
                                        0 +
                                        0 +
                                        686.76 +
                                        0,
                                      children: h(B, {
                                        className: `framer-1lohfbo-container`,
                                        nodeId: `iwSmKh5RN`,
                                        scopeId: `augiA20Il`,
                                        children: h(U, {
                                          breakpoint: g,
                                          overrides: {
                                            FKeUsnHKg: {
                                              gPPCA9TeG: {
                                                borderBottomWidth: 1,
                                                borderColor: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                                borderLeftWidth: 0,
                                                borderRightWidth: 0,
                                                borderStyle: `solid`,
                                                borderTopWidth: 0,
                                              },
                                              variant: $(`tPIE3GntU`),
                                            },
                                          },
                                          children: h(Ft, {
                                            CewSTn9J7: `Businesses Advised`,
                                            eGHZh27YN: ``,
                                            ew0Bf3mzC: `+`,
                                            gPPCA9TeG: {
                                              borderBottomWidth: 0,
                                              borderColor: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                              borderLeftWidth: 0,
                                              borderRightWidth: 1,
                                              borderStyle: `solid`,
                                              borderTopWidth: 0,
                                            },
                                            height: `100%`,
                                            hiasu73t5: 0,
                                            id: `iwSmKh5RN`,
                                            layoutId: `iwSmKh5RN`,
                                            mrabgVCuf: 180,
                                            style: { width: `100%` },
                                            variant: $(`cOPACVR19`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  h(U, {
                                    breakpoint: g,
                                    overrides: {
                                      FKeUsnHKg: {
                                        width: `min(${l?.width || `100vw`} - 32px, 1300px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          13381.72 +
                                          70 +
                                          0 +
                                          0 +
                                          1163.76 +
                                          0 +
                                          558,
                                      },
                                      XOpZf9jEo: {
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          12185.72 +
                                          120 +
                                          0 +
                                          0 +
                                          1143.76 +
                                          0,
                                      },
                                    },
                                    children: h(V, {
                                      height: 279,
                                      width: `max(min(${l?.width || `100vw`} - 64px, 1300px) / 4, 1px)`,
                                      y:
                                        (l?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        12380.72 +
                                        120 +
                                        0 +
                                        0 +
                                        686.76 +
                                        0,
                                      children: h(B, {
                                        className: `framer-1hu6uq7-container`,
                                        nodeId: `xUOD6ry0D`,
                                        scopeId: `augiA20Il`,
                                        children: h(U, {
                                          breakpoint: g,
                                          overrides: {
                                            FKeUsnHKg: {
                                              gPPCA9TeG: {
                                                borderBottomWidth: 1,
                                                borderColor: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                                borderLeftWidth: 0,
                                                borderRightWidth: 0,
                                                borderStyle: `solid`,
                                                borderTopWidth: 0,
                                              },
                                              variant: $(`tPIE3GntU`),
                                            },
                                          },
                                          children: h(Ft, {
                                            CewSTn9J7: `Years of Experience`,
                                            eGHZh27YN: ``,
                                            ew0Bf3mzC: `+`,
                                            gPPCA9TeG: {
                                              borderBottomWidth: 0,
                                              borderColor: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                              borderLeftWidth: 0,
                                              borderRightWidth: 1,
                                              borderStyle: `solid`,
                                              borderTopWidth: 0,
                                            },
                                            height: `100%`,
                                            hiasu73t5: 0,
                                            id: `xUOD6ry0D`,
                                            layoutId: `xUOD6ry0D`,
                                            mrabgVCuf: 15,
                                            style: { width: `100%` },
                                            variant: $(`cOPACVR19`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  h(U, {
                                    breakpoint: g,
                                    overrides: {
                                      FKeUsnHKg: {
                                        width: `min(${l?.width || `100vw`} - 32px, 1300px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          13381.72 +
                                          70 +
                                          0 +
                                          0 +
                                          1163.76 +
                                          0 +
                                          279,
                                      },
                                      XOpZf9jEo: {
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          12185.72 +
                                          120 +
                                          0 +
                                          0 +
                                          1143.76 +
                                          0,
                                      },
                                    },
                                    children: h(V, {
                                      height: 279,
                                      width: `max(min(${l?.width || `100vw`} - 64px, 1300px) / 4, 1px)`,
                                      y:
                                        (l?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        12380.72 +
                                        120 +
                                        0 +
                                        0 +
                                        686.76 +
                                        0,
                                      children: h(B, {
                                        className: `framer-1eeu1ut-container`,
                                        nodeId: `wfVgjY1nS`,
                                        scopeId: `augiA20Il`,
                                        children: h(U, {
                                          breakpoint: g,
                                          overrides: {
                                            FKeUsnHKg: {
                                              gPPCA9TeG: {
                                                borderBottomWidth: 1,
                                                borderColor: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                                borderLeftWidth: 0,
                                                borderRightWidth: 0,
                                                borderStyle: `solid`,
                                                borderTopWidth: 0,
                                              },
                                              variant: $(`tPIE3GntU`),
                                            },
                                          },
                                          children: h(Ft, {
                                            CewSTn9J7: `Client Satisfaction`,
                                            eGHZh27YN: ``,
                                            ew0Bf3mzC: `%`,
                                            gPPCA9TeG: {
                                              borderBottomWidth: 0,
                                              borderColor: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                              borderLeftWidth: 0,
                                              borderRightWidth: 1,
                                              borderStyle: `solid`,
                                              borderTopWidth: 0,
                                            },
                                            height: `100%`,
                                            hiasu73t5: 0,
                                            id: `wfVgjY1nS`,
                                            layoutId: `wfVgjY1nS`,
                                            mrabgVCuf: 97,
                                            style: { width: `100%` },
                                            variant: $(`cOPACVR19`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  h(U, {
                                    breakpoint: g,
                                    overrides: {
                                      FKeUsnHKg: {
                                        width: `min(${l?.width || `100vw`} - 32px, 1300px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          13381.72 +
                                          70 +
                                          0 +
                                          0 +
                                          1163.76 +
                                          0 +
                                          837,
                                      },
                                      XOpZf9jEo: {
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          12185.72 +
                                          120 +
                                          0 +
                                          0 +
                                          1143.76 +
                                          0,
                                      },
                                    },
                                    children: h(V, {
                                      height: 279,
                                      width: `max(min(${l?.width || `100vw`} - 64px, 1300px) / 4, 1px)`,
                                      y:
                                        (l?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        12380.72 +
                                        120 +
                                        0 +
                                        0 +
                                        686.76 +
                                        0,
                                      children: h(B, {
                                        className: `framer-1runybn-container`,
                                        nodeId: `VaPXZEDfl`,
                                        scopeId: `augiA20Il`,
                                        children: h(U, {
                                          breakpoint: g,
                                          overrides: {
                                            FKeUsnHKg: {
                                              gPPCA9TeG: {
                                                borderBottomWidth: 0,
                                                borderColor: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                                borderLeftWidth: 0,
                                                borderRightWidth: 0,
                                                borderStyle: `solid`,
                                                borderTopWidth: 0,
                                              },
                                              variant: $(`tPIE3GntU`),
                                            },
                                          },
                                          children: h(Ft, {
                                            CewSTn9J7: `Industry Specialists`,
                                            eGHZh27YN: ``,
                                            ew0Bf3mzC: `+`,
                                            gPPCA9TeG: {
                                              borderColor: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                              borderStyle: `solid`,
                                              borderWidth: 0,
                                            },
                                            height: `100%`,
                                            hiasu73t5: 0,
                                            id: `VaPXZEDfl`,
                                            layoutId: `VaPXZEDfl`,
                                            mrabgVCuf: 18,
                                            style: { width: `100%` },
                                            variant: $(`cOPACVR19`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        h(`section`, {
                          className: `framer-142eq1n`,
                          "data-framer-name": `Blog`,
                          children: y(`div`, {
                            className: `framer-rokw7h`,
                            "data-framer-name": `Content Wrapper`,
                            children: [
                              y(`div`, {
                                className: `framer-1ubx80s`,
                                "data-framer-name": `Title`,
                                children: [
                                  y(`div`, {
                                    className: `framer-1qr23ea`,
                                    "data-framer-name": `Title`,
                                    children: [
                                      h(U, {
                                        breakpoint: g,
                                        overrides: {
                                          FKeUsnHKg: {
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              15811.48 +
                                              80 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          XOpZf9jEo: {
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              13848.48 +
                                              140 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: h(V, {
                                          height: 13,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            13586.48 +
                                            140 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                          children: h(B, {
                                            className: `framer-1nswi0m-container`,
                                            "data-framer-name": `Tag`,
                                            name: `Tag`,
                                            nodeId: `vig466hYv`,
                                            scopeId: `augiA20Il`,
                                            children: h(an, {
                                              height: `100%`,
                                              id: `vig466hYv`,
                                              layoutId: `vig466hYv`,
                                              name: `Tag`,
                                              variant: $(`pqmTc8b_A`),
                                              width: `100%`,
                                              XqtCAHGpt: `Blog`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      h(L, {
                                        __fromCanvasComponent: !0,
                                        children: h(o, {
                                          children: h(`h2`, {
                                            className: `framer-styles-preset-hcmt7i`,
                                            "data-styles-preset": `H4GEN39UP`,
                                            dir: `auto`,
                                            children: `Latest Industry News & Insights`,
                                          }),
                                        }),
                                        className: `framer-udc92c`,
                                        effect: Zs,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  h(ys, {
                                    __framer__animate: { transition: Xs },
                                    __framer__animateOnce: !0,
                                    __framer__enter: dc,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-mb3p3o`,
                                    "data-framer-name": `Right`,
                                    children: h(Ie, {
                                      links: [
                                        {
                                          href: { webPageId: `EyK7bnNLZ` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `EyK7bnNLZ` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `EyK7bnNLZ` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        h(U, {
                                          breakpoint: g,
                                          overrides: {
                                            FKeUsnHKg: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                15811.48 +
                                                80 +
                                                0 +
                                                0 +
                                                0 +
                                                95.76 +
                                                0 +
                                                0,
                                            },
                                            XOpZf9jEo: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                13848.48 +
                                                140 +
                                                0 +
                                                0 +
                                                0 +
                                                23.76 +
                                                0 +
                                                0,
                                            },
                                          },
                                          children: h(V, {
                                            height: 48,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              13586.48 +
                                              140 +
                                              0 +
                                              0 +
                                              0 +
                                              23.76 +
                                              0 +
                                              0,
                                            children: h(B, {
                                              className: `framer-wys91y-container`,
                                              nodeId: `Ytt4ZGHgq`,
                                              scopeId: `augiA20Il`,
                                              children: h(U, {
                                                breakpoint: g,
                                                overrides: {
                                                  FKeUsnHKg: { dQDe2ecMb: e[2] },
                                                  XOpZf9jEo: { dQDe2ecMb: e[1] },
                                                },
                                                children: h(X, {
                                                  dQDe2ecMb: e[0],
                                                  GGZTVUGZ5: `var(--token-11c233ce-ba11-4e3a-ba1d-5be950195b79, rgb(1, 43, 48))`,
                                                  height: `100%`,
                                                  id: `Ytt4ZGHgq`,
                                                  LALAatWUM: `View all blog`,
                                                  layoutId: `Ytt4ZGHgq`,
                                                  lCPX_SQT2: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                                  oAbfzaz1L: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                                  qkIJkdmKd: !1,
                                                  tWCC8YneY: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                  variant: $(`AHziRZ1h2`),
                                                  width: `100%`,
                                                  zkb7vpZI7: `var(--token-7da12f2e-e101-4dee-a758-8f7e8473f9ee, rgb(20, 243, 193))`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                  }),
                                ],
                              }),
                              h(ys, {
                                __framer__animate: { transition: $s },
                                __framer__animateOnce: !0,
                                __framer__enter: Qs,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-md42mj`,
                                children: h(je, {
                                  children: h(U, {
                                    breakpoint: g,
                                    overrides: {
                                      FKeUsnHKg: { query: xc() },
                                      XOpZf9jEo: { query: xc() },
                                    },
                                    children: h(rc, {
                                      query: bc(),
                                      children: (e, t, n) =>
                                        h(x, {
                                          children: e?.map(
                                            (
                                              {
                                                bNzKOQmIZ: e,
                                                CWrQ3fgaH: t,
                                                Hz3oIYPRx: n,
                                                id: r,
                                                TRRxvReo0: i,
                                                ZfcQek_8H: a,
                                              },
                                              o
                                            ) => (
                                              (i ??= ``),
                                              (t ??= ``),
                                              (e ??= ``),
                                              h(
                                                A,
                                                {
                                                  id: `ZyUrS4t8V-${r}`,
                                                  children: h(_e.Provider, {
                                                    value: { bNzKOQmIZ: e },
                                                    children: h(Ie, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { bNzKOQmIZ: e },
                                                            webPageId: `t_mmcsO67`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { bNzKOQmIZ: e },
                                                            webPageId: `t_mmcsO67`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { bNzKOQmIZ: e },
                                                            webPageId: `t_mmcsO67`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (e) =>
                                                        h(U, {
                                                          breakpoint: g,
                                                          overrides: {
                                                            FKeUsnHKg: {
                                                              width: `max(min(max(${l?.width || `100vw`} - 32px, 1px), 350px), 50px)`,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                15811.48 +
                                                                80 +
                                                                0 +
                                                                183.76 +
                                                                0 +
                                                                0,
                                                            },
                                                            XOpZf9jEo: {
                                                              width: `max((min(max(${l?.width || `100vw`} - 64px, 1px), 1300px) - 24px) / 2, 50px)`,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                13848.48 +
                                                                140 +
                                                                0 +
                                                                111.76 +
                                                                0 +
                                                                0,
                                                            },
                                                          },
                                                          children: h(V, {
                                                            height: 413,
                                                            width: `max((min(max(${l?.width || `100vw`} - 64px, 1px), 1300px) - 48px) / 3, 50px)`,
                                                            y:
                                                              (l?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              13586.48 +
                                                              140 +
                                                              0 +
                                                              111.76 +
                                                              0 +
                                                              0,
                                                            children: h(B, {
                                                              className: `framer-vhtrf4-container`,
                                                              nodeId: `EPAhDVau3`,
                                                              scopeId: `augiA20Il`,
                                                              children: h(U, {
                                                                breakpoint: g,
                                                                overrides: {
                                                                  FKeUsnHKg: {
                                                                    Egl9NM6GY: e[2],
                                                                    variant: $(`rgu1PtWlN`),
                                                                  },
                                                                  XOpZf9jEo: { Egl9NM6GY: e[1] },
                                                                },
                                                                children: h(sn, {
                                                                  Egl9NM6GY: e[0],
                                                                  height: `100%`,
                                                                  id: `EPAhDVau3`,
                                                                  IILdZawGK: i,
                                                                  layoutId: `EPAhDVau3`,
                                                                  MvMhaSmST: !1,
                                                                  PdZcCQfym: tc(n),
                                                                  style: { width: `100%` },
                                                                  variant: $(`WtvInyS1z`),
                                                                  width: `100%`,
                                                                  wn1BMTGLU: yc(a, fe),
                                                                  woTEeIi6H: t,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  }),
                                                },
                                                r
                                              )
                                            )
                                          ),
                                        }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        h(`section`, {
                          className: `framer-m3u4uj`,
                          "data-framer-name": `FAQs`,
                          children: y(`div`, {
                            className: `framer-12aezb5`,
                            "data-framer-name": `Container`,
                            children: [
                              y(`div`, {
                                className: `framer-ecqwc4`,
                                "data-framer-name": `Left`,
                                children: [
                                  y(`div`, {
                                    className: `framer-3355yy`,
                                    "data-framer-name": `Heading`,
                                    children: [
                                      h(U, {
                                        breakpoint: g,
                                        overrides: {
                                          FKeUsnHKg: {
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              17013.24 +
                                              70 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          XOpZf9jEo: {
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              14635.24 +
                                              120 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: h(V, {
                                          height: 13,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            14373.24 +
                                            120 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                          children: h(B, {
                                            className: `framer-15q4kk6-container`,
                                            "data-framer-name": `FAQs`,
                                            name: `FAQs`,
                                            nodeId: `YGaJrjLw6`,
                                            scopeId: `augiA20Il`,
                                            children: h(an, {
                                              height: `100%`,
                                              id: `YGaJrjLw6`,
                                              layoutId: `YGaJrjLw6`,
                                              name: `FAQs`,
                                              variant: $(`pqmTc8b_A`),
                                              width: `100%`,
                                              XqtCAHGpt: `FAQs`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      h(L, {
                                        __fromCanvasComponent: !0,
                                        children: h(o, {
                                          children: h(`h2`, {
                                            className: `framer-styles-preset-9lpzun`,
                                            "data-styles-preset": `kH4hVkPTC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                            },
                                            children: `Your Commonly Asked Questions`,
                                          }),
                                        }),
                                        className: `framer-1qmbdiy`,
                                        effect: Zs,
                                        fonts: [`Inter`],
                                        id: `1qmbdiy`,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  O() &&
                                    y(`div`, {
                                      className: `framer-w9jscu hidden-1qvnpt1`,
                                      "data-framer-name": `CTA`,
                                      children: [
                                        h(U, {
                                          breakpoint: g,
                                          overrides: {
                                            XOpZf9jEo: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 2400,
                                                intrinsicWidth: 1800,
                                                loading: de(
                                                  (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    14635.24 +
                                                    120 +
                                                    0 +
                                                    0 +
                                                    205.7 +
                                                    0 +
                                                    0
                                                ),
                                                pixelHeight: 2400,
                                                pixelWidth: 1800,
                                                positionX: `center`,
                                                positionY: `top`,
                                                sizes: `90px`,
                                                src: `../../assets/images/zNnF3VIBpcb2D1YJ6vAh39bYyqA-84920b.webp`,
                                                srcSet: `../../assets/images/zNnF3VIBpcb2D1YJ6vAh39bYyqA.webp 768w,../../assets/images/zNnF3VIBpcb2D1YJ6vAh39bYyqA-b1a6ce.webp 1536w,../../assets/images/zNnF3VIBpcb2D1YJ6vAh39bYyqA-84920b.webp 1800w`,
                                              },
                                            },
                                          },
                                          children: h(Me, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 2400,
                                              intrinsicWidth: 1800,
                                              loading: de(
                                                (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  14373.24 +
                                                  120 +
                                                  0 +
                                                  0 +
                                                  205.7 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 2400,
                                              pixelWidth: 1800,
                                              positionX: `center`,
                                              positionY: `top`,
                                              sizes: `90px`,
                                              src: `../../assets/images/zNnF3VIBpcb2D1YJ6vAh39bYyqA-84920b.webp`,
                                              srcSet: `../../assets/images/zNnF3VIBpcb2D1YJ6vAh39bYyqA.webp 768w,../../assets/images/zNnF3VIBpcb2D1YJ6vAh39bYyqA-b1a6ce.webp 1536w,../../assets/images/zNnF3VIBpcb2D1YJ6vAh39bYyqA-84920b.webp 1800w`,
                                            },
                                            className: `framer-1jwxezv`,
                                            "data-framer-name": `Image`,
                                          }),
                                        }),
                                        h(L, {
                                          __fromCanvasComponent: !0,
                                          children: h(o, {
                                            children: h(`p`, {
                                              className: `framer-styles-preset-qlsyr3`,
                                              "data-styles-preset": `YMpbOMTQr`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: `Need Guidance? Book a consultation`,
                                            }),
                                          }),
                                          className: `framer-ijxr16`,
                                          "data-framer-name": `Didn’t find your answer?`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        h(Ie, {
                                          links: [
                                            {
                                              href: { webPageId: `sGcuUgaBJ` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `sGcuUgaBJ` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            h(U, {
                                              breakpoint: g,
                                              overrides: {
                                                XOpZf9jEo: {
                                                  width: `min(max((min(max(${l?.width || `100vw`} - 64px, 1px), 1300px) - 30px) * 0.375, 1px), 280px)`,
                                                  y:
                                                    (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    14635.24 +
                                                    120 +
                                                    0 +
                                                    0 +
                                                    205.7 +
                                                    0 +
                                                    239.3,
                                                },
                                              },
                                              children: h(V, {
                                                height: 48,
                                                width: `min(max((min(max(${l?.width || `100vw`} - 64px, 1px), 1300px) - 16px) * 0.4737, 1px), 280px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  14373.24 +
                                                  120 +
                                                  0 +
                                                  0 +
                                                  205.7 +
                                                  0 +
                                                  239.3,
                                                children: h(B, {
                                                  className: `framer-153k9ca-container`,
                                                  "data-framer-name": `Button`,
                                                  name: `Button`,
                                                  nodeId: `l_Puk_XyX`,
                                                  scopeId: `augiA20Il`,
                                                  children: h(U, {
                                                    breakpoint: g,
                                                    overrides: { XOpZf9jEo: { dQDe2ecMb: e[1] } },
                                                    children: h(X, {
                                                      dQDe2ecMb: e[0],
                                                      GGZTVUGZ5: `var(--token-11c233ce-ba11-4e3a-ba1d-5be950195b79, rgb(1, 43, 48))`,
                                                      height: `100%`,
                                                      id: `l_Puk_XyX`,
                                                      LALAatWUM: `Book Counselling`,
                                                      layoutId: `l_Puk_XyX`,
                                                      lCPX_SQT2: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                                      name: `Button`,
                                                      oAbfzaz1L: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                      qkIJkdmKd: !1,
                                                      style: { width: `100%` },
                                                      tWCC8YneY: `var(--token-c80313c8-a0c1-4f14-ad5e-9b2193d38589, rgb(178, 123, 0))`,
                                                      variant: $(`AHziRZ1h2`),
                                                      width: `100%`,
                                                      zkb7vpZI7: `var(--token-c80313c8-a0c1-4f14-ad5e-9b2193d38589, rgb(178, 123, 0))`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              h(ys, {
                                __framer__animate: { transition: $s },
                                __framer__animateOnce: !0,
                                __framer__enter: Qs,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-qkgwho`,
                                "data-framer-name": `FAQs`,
                                children: h(U, {
                                  breakpoint: g,
                                  overrides: {
                                    FKeUsnHKg: {
                                      width: `min(${l?.width || `100vw`} - 32px, 1300px)`,
                                      y:
                                        (l?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        17013.24 +
                                        70 +
                                        0 +
                                        0 +
                                        115.78 +
                                        0 +
                                        0,
                                    },
                                    XOpZf9jEo: {
                                      width: `max((min(max(${l?.width || `100vw`} - 64px, 1px), 1300px) - 30px) / 1.6, 1px)`,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 14635.24 + 120 + 0 + 0,
                                    },
                                  },
                                  children: h(V, {
                                    height: 493,
                                    width: `max((min(max(${l?.width || `100vw`} - 64px, 1px), 1300px) - 16px) / 1.9, 1px)`,
                                    y: (l?.y || 0) + 0 + 0 + 0 + 14373.24 + 120 + 0 + 0,
                                    children: h(B, {
                                      className: `framer-13b9yxy-container`,
                                      nodeId: `XiTW16D5S`,
                                      scopeId: `augiA20Il`,
                                      children: h(qt, {
                                        height: `100%`,
                                        id: `XiTW16D5S`,
                                        layoutId: `XiTW16D5S`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                h(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-HDnou.framer-lux5qc, .framer-HDnou .framer-lux5qc { display: block; }`,
        `.framer-HDnou.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-a33c1b5b-e297-4002-8e0e-dc2265f4a460, #000d0e); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-HDnou .framer-14rusya { flex: none; height: 1px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: 60px; width: 100%; z-index: 1; }`,
        `.framer-HDnou .framer-kcrqvk { align-content: center; align-items: center; background-color: var(--token-8597472e-8530-4424-91fc-d5043dad4450, #edf7ff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1npfag2 { align-content: center; align-items: center; background-color: var(--token-8303387e-d4c2-4989-af33-54d2c870c7ac, #0c0e12); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100vh; justify-content: space-between; max-height: 1000px; min-height: 900px; overflow: hidden; padding: 0px 32px 0px 32px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-lh02uz-container { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 100%) add; bottom: 0px; flex: none; left: 0px; mask: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%) add; pointer-events: none; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-effect-override, transform); z-index: 0; }`,
        `.framer-HDnou .framer-1x01s5p { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 125px 0px 40px 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1ipf8bw { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-HDnou .framer-u5gmvc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 750px; position: relative; width: 70%; }`,
        `.framer-HDnou .framer-19y0bap { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1hcgniv { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1ngdnik { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; max-width: 600px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-HDnou .framer-r8gyvu { --border-bottom-width: 1px; --border-color: var(--token-276bb6d3-2c53-44f6-8d0c-76c3e7b6c596, rgba(255, 255, 255, 0.07)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 28px 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-a69r67 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 480px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-HDnou .framer-pmsnwe-container, .framer-HDnou .framer-1jc4x6u-container, .framer-HDnou .framer-tnrnlv-container, .framer-HDnou .framer-82ojab-container, .framer-HDnou .framer-bhaegn-container, .framer-HDnou .framer-c4qzvv-container, .framer-HDnou .framer-1x0uwrj-container, .framer-HDnou .framer-1wp75r7-container, .framer-HDnou .framer-pef9zm-container, .framer-HDnou .framer-j3w846-container, .framer-HDnou .framer-19q0rnq-container, .framer-HDnou .framer-5s6hl3-container, .framer-HDnou .framer-1ntzinr-container, .framer-HDnou .framer-1nswi0m-container, .framer-HDnou .framer-wys91y-container, .framer-HDnou .framer-15q4kk6-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-HDnou .framer-1ur3sde-container { flex: none; height: 210px; position: relative; width: 355px; }`,
        `.framer-HDnou .framer-1ydpvd6 { --border-bottom-width: 0px; --border-color: var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 28px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-17mlodp { -webkit-mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 31.98198198198198%, rgb(0, 0, 0) 73.42342342342343%, rgba(0, 0, 0, 0) 100%) add; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 95px; height: min-content; justify-content: flex-start; mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 31.98198198198198%, rgb(0, 0, 0) 73.42342342342343%, rgba(0, 0, 0, 0) 100%) add; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-HDnou .framer-1niuqe1 { aspect-ratio: 5.44 / 1; flex: none; height: auto; opacity: 0.85; position: relative; width: 141px; }`,
        `.framer-HDnou .framer-1v3jrk9 { flex: none; height: 27px; opacity: 0.85; position: relative; width: 122px; }`,
        `.framer-HDnou .framer-18vlj7a { aspect-ratio: 1 / 1; flex: none; height: auto; opacity: 0.85; position: relative; width: 25px; }`,
        `.framer-HDnou .framer-1yyaf74 { aspect-ratio: 3.5625 / 1; flex: none; height: auto; opacity: 0.85; position: relative; width: 89px; }`,
        `.framer-HDnou .framer-1sy3ma2 { flex: none; height: 22px; opacity: 0.85; position: relative; width: 84px; }`,
        `.framer-HDnou .framer-2u9w0w { aspect-ratio: 3.272727272727273 / 1; flex: none; height: auto; opacity: 0.85; position: relative; width: 77px; }`,
        `.framer-HDnou .framer-1b000vb { align-content: center; align-items: center; background-color: var(--token-8597472e-8530-4424-91fc-d5043dad4450, #edf7ff); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 130px 32px 20px 32px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1389s3u { align-content: center; align-items: center; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; max-width: 1300px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-HDnou .framer-1hn87cp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-onoqoz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 33%; }`,
        `.framer-HDnou .framer-1oz7viq { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-HDnou .framer-y16oeb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-g1b3jr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-s7apbq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-26705s-container, .framer-HDnou .framer-1djck2w-container, .framer-HDnou .framer-iaqb0v-container, .framer-HDnou .framer-1h6cf76-container, .framer-HDnou .framer-1r15xo1-container, .framer-HDnou .framer-1kvwdtr-container, .framer-HDnou .framer-1lohfbo-container, .framer-HDnou .framer-1hu6uq7-container, .framer-HDnou .framer-1eeu1ut-container, .framer-HDnou .framer-1runybn-container, .framer-HDnou .framer-13b9yxy-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-HDnou .framer-1bp8941 { align-content: center; align-items: center; background-color: var(--token-8597472e-8530-4424-91fc-d5043dad4450, #edf7ff); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 50px 32px 70px 32px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1g0z9g6 { align-content: center; align-items: center; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; max-width: 1400px; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-HDnou .framer-1a0gpxn-container { flex: none; height: 110px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1sc1f90-container, .framer-HDnou .framer-1l7lbbz-container, .framer-HDnou .framer-15p3oqy-container, .framer-HDnou .framer-zjcv7n-container { height: 118px; position: relative; width: auto; }`,
        `.framer-HDnou .framer-caa57t { align-content: center; align-items: center; background-color: var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, #ffffff); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 32px 120px 32px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-17mo30o { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 1300px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-HDnou .framer-1qy8xd1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-7u0qb6, .framer-HDnou .framer-jktv0q, .framer-HDnou .framer-8ptjfk, .framer-HDnou .framer-tn8jyu { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 600px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1m6dsmr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-x92w9t-container { flex: none; height: 470px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-pmg6jq, .framer-HDnou .framer-10bpe94, .framer-HDnou .framer-1xv3mn2, .framer-HDnou .framer-1kbowi1, .framer-HDnou .framer-5tc8r3 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 365px; }`,
        `.framer-HDnou .framer-1fy8c95-container, .framer-HDnou .framer-1vcgc3v-container, .framer-HDnou .framer-vhn9ym-container, .framer-HDnou .framer-keveou-container, .framer-HDnou .framer-10la6wd-container, .framer-HDnou .framer-z5o36e-container, .framer-HDnou .framer-1c0euu7-container, .framer-HDnou .framer-nrsm6q-container, .framer-HDnou .framer-153k9ca-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-f3a2ll { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-184e371 { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; max-width: 300px; opacity: 0.8; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-HDnou .framer-1rsff88 { background-color: var(--token-fe5faa7a-fb67-4b37-94b3-950cff1fcf02, rgba(0, 0, 0, 0.1)); flex: 1 0 0px; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
        `.framer-HDnou .framer-awzdg6-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-HDnou .framer-1ml0xzm { align-content: center; align-items: center; background-color: var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, #FFDB58); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 130px 32px 120px 32px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-HDnou .framer-1wtrnmw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-HDnou .framer-1yeki47 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1s899bo, .framer-HDnou .framer-9y29fv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1s7gha3 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 550px; opacity: 0.8; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1socofz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; top: 140px; width: 100%; z-index: 1; }`,
        `.framer-HDnou .framer-euqki3 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-HDnou .framer-1t707dk { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-HDnou .framer-ziz7px-container, .framer-HDnou .framer-18ky8pu-container, .framer-HDnou .framer-1jjw9st-container, .framer-HDnou .framer-179f7va-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-HDnou .framer-11yuj6g { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 370px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-HDnou .framer-fvlrav { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: 1 0 0px; height: 556px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-HDnou .framer-xlxgkn { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-HDnou .framer-fldv36 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1yhgi88 { flex: none; height: 60vh; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1ly4xme { align-content: center; align-items: center; background-color: var(--token-710ade2f-af2d-4eb3-a472-dbe729d9e382, #f5f7f7); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 130px 32px 120px 32px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-w1aexo { align-content: center; align-items: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; max-width: 1300px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-HDnou .framer-3di2nt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-150stwx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1oq6cac { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-HDnou .framer-19y4626 { --border-bottom-width: 0px; --border-color: var(--token-dd0f2b58-cc35-46eb-aea0-03d54189da46, rgba(255, 255, 255, 0.06)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background-color: var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, #FFDB58); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: visible; padding: 100px 32px 100px 32px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-8jh6fz-container { flex: none; height: auto; max-width: 1300px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-HDnou .framer-1guxum3 { align-content: center; align-items: center; background-color: var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 120px 32px 120px 32px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-ygka16 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1300px; min-height: 100vh; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-HDnou .framer-1m92sfz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 0px 48px 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1exwx0l { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 700px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-4n8bec { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 600px; opacity: 0.7; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-xv5p49 { display: grid; flex: none; gap: 64px 64px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(4, minmax(0, 1fr)); height: min-content; justify-content: center; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; pointer-events: none; position: relative; width: 100%; z-index: 1; }`,
        `.framer-HDnou .framer-cxrkoj-container, .framer-HDnou .framer-8634da-container { align-self: start; flex: none; height: auto; justify-self: start; max-width: 420px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1wi8chu, .framer-HDnou .framer-1rv3j44 { align-self: start; flex: none; height: 100%; justify-self: start; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1r3lf1y-container, .framer-HDnou .framer-16r393x-container { align-self: start; flex: none; height: auto; justify-self: end; max-width: 420px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1ldryo4, .framer-HDnou .framer-3z99vt { align-self: center; flex: none; height: 100%; justify-self: center; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-HDnou .framer-13j64b2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 1300px; min-height: 100vh; overflow: visible; padding: 0px; pointer-events: none; position: relative; width: 100%; z-index: 1; }`,
        `.framer-HDnou .framer-amq3p3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 120px 32px 120px 32px; position: relative; width: 100%; z-index: 9; }`,
        `.framer-HDnou .framer-12wl6m1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1300px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1it8r3x { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1j7ex55 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-HDnou .framer-1grx4cn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-12lgp2y { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 520px; opacity: 0.8; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-HDnou .framer-l9x9up { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-hopgyc { align-content: flex-start; align-items: flex-start; display: flex; flex: 0.6 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; top: 120px; width: 1px; z-index: 1; }`,
        `.framer-HDnou .framer-lwhs6m-container, .framer-HDnou .framer-15y0h8z-container, .framer-HDnou .framer-10xa7o5-container { flex: none; height: auto; max-width: 220px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1na1wgq { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-HDnou .framer-7t69tj { align-content: center; align-items: center; background-color: var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, #FFDB58); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 120px 32px 120px 32px; position: relative; width: 100%; z-index: 9; }`,
        `.framer-HDnou .framer-1we4npt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1300px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 9; }`,
        `.framer-HDnou .framer-o2jw3n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1fcyfbo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-c6niz4 { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 600px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1vjwnf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-uzor8h { --border-bottom-width: 1px; --border-color: var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-142eq1n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 140px 32px 90px 32px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-rokw7h { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1300px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-HDnou .framer-1ubx80s { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-HDnou .framer-1qr23ea { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 68%; }`,
        `.framer-HDnou .framer-udc92c { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 480px; overflow: visible; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-mb3p3o { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-end; max-width: 420px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-HDnou .framer-md42mj { display: grid; flex: none; gap: 32px 24px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-vhtrf4-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-m3u4uj { align-content: center; align-items: center; background-color: var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, #ffffff); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 120px 32px 130px 32px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-12aezb5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 1300px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-HDnou .framer-ecqwc4 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 0.9 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-HDnou .framer-3355yy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 5px 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1qmbdiy { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 520px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-w9jscu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-end; max-width: 280px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-1jwxezv { aspect-ratio: 1 / 1; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: auto; position: relative; width: 90px; }`,
        `.framer-HDnou .framer-ijxr16 { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 220px; opacity: 0.75; position: relative; width: 100%; }`,
        `.framer-HDnou .framer-qkgwho { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        ...Cn,
        ...hn,
        ...yn,
        ...Y,
        ...qe,
        ...Xe,
        `.framer-HDnou[data-border="true"]::after, .framer-HDnou [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-HDnou.framer-72rtr7 { width: 810px; } .framer-HDnou .framer-u5gmvc { width: 95%; } .framer-HDnou .framer-1hcgniv { align-content: flex-start; align-items: flex-start; gap: 80px; justify-content: flex-start; } .framer-HDnou .framer-1ur3sde-container { width: 320px; } .framer-HDnou .framer-1b000vb, .framer-HDnou .framer-1bp8941, .framer-HDnou .framer-caa57t, .framer-HDnou .framer-1ly4xme { gap: 0px; } .framer-HDnou .framer-82ojab-container, .framer-HDnou .framer-1jjw9st-container, .framer-HDnou .framer-179f7va-container { flex: 1 0 0px; width: 1px; } .framer-HDnou .framer-1g0z9g6, .framer-HDnou .framer-1ubx80s { gap: 40px; } .framer-HDnou .framer-184e371 { max-width: 260px; } .framer-HDnou .framer-1ml0xzm { max-width: 100%; } .framer-HDnou .framer-1wtrnmw { gap: 50px; } .framer-HDnou .framer-euqki3 { flex-direction: column; justify-content: flex-start; } .framer-HDnou .framer-1t707dk { flex: none; flex-direction: row; width: 100%; } .framer-HDnou .framer-ziz7px-container { flex: 1 0 0px; order: 0; width: 1px; } .framer-HDnou .framer-18ky8pu-container { flex: 1 0 0px; order: 1; width: 1px; } .framer-HDnou .framer-11yuj6g { flex: none; max-width: unset; width: 100%; } .framer-HDnou .framer-fvlrav { height: 475px; order: 0; } .framer-HDnou .framer-xlxgkn { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: row; justify-content: flex-start; width: 100%; } .framer-HDnou .framer-19y4626 { gap: 60px; max-width: 750px; } .framer-HDnou .framer-1j7ex55 { gap: 8px; } .framer-HDnou .framer-hopgyc { flex: 0.5 0 0px; } .framer-HDnou .framer-1we4npt { align-content: center; align-items: center; gap: 40px; } .framer-HDnou .framer-1vjwnf { flex-direction: column; } .framer-HDnou .framer-1r15xo1-container, .framer-HDnou .framer-1kvwdtr-container { flex: none; width: 100%; } .framer-HDnou .framer-1qr23ea { width: 60%; } .framer-HDnou .framer-md42mj { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-HDnou .framer-12aezb5 { gap: 30px; } .framer-HDnou .framer-ecqwc4 { flex: 0.6 0 0px; } .framer-HDnou .framer-qkgwho { gap: 32px; justify-content: flex-start; }}`,
        `@media (max-width: 809.98px) { .framer-HDnou.framer-72rtr7 { width: 390px; } .framer-HDnou .framer-1npfag2 { padding: 0px 16px 0px 16px; } .framer-HDnou .framer-u5gmvc, .framer-HDnou .framer-onoqoz, .framer-HDnou .framer-1qr23ea, .framer-HDnou .framer-3355yy { width: 100%; } .framer-HDnou .framer-1hcgniv, .framer-HDnou .framer-euqki3 { align-content: center; align-items: center; flex-direction: column; } .framer-HDnou .framer-1ngdnik, .framer-HDnou .framer-184e371, .framer-HDnou .framer-1rsff88, .framer-HDnou .framer-1t707dk, .framer-HDnou .framer-11yuj6g, .framer-HDnou .framer-xlxgkn, .framer-HDnou .framer-1oq6cac, .framer-HDnou .framer-1r15xo1-container, .framer-HDnou .framer-1kvwdtr-container, .framer-HDnou .framer-13b9yxy-container { flex: none; width: 100%; } .framer-HDnou .framer-17mlodp { gap: 70px; } .framer-HDnou .framer-1b000vb { flex-direction: column; padding: 80px 16px 80px 16px; } .framer-HDnou .framer-1389s3u { flex: none; gap: 50px; width: 100%; } .framer-HDnou .framer-1hn87cp { flex-direction: column; gap: 14px; } .framer-HDnou .framer-1oz7viq { align-content: center; align-items: center; flex: none; width: 100%; } .framer-HDnou .framer-s7apbq { flex-direction: column; gap: 12px; } .framer-HDnou .framer-26705s-container, .framer-HDnou .framer-1djck2w-container, .framer-HDnou .framer-iaqb0v-container { flex: none; height: 280px; width: 100%; } .framer-HDnou .framer-caa57t { flex-direction: column; padding: 80px 16px 70px 16px; } .framer-HDnou .framer-17mo30o { flex: none; gap: 30px; width: 100%; } .framer-HDnou .framer-1m6dsmr { gap: 56px; } .framer-HDnou .framer-f3a2ll { flex-direction: column; gap: 16px; } .framer-HDnou .framer-1ml0xzm { max-width: 100%; padding: 80px 16px 80px 16px; } .framer-HDnou .framer-1wtrnmw { gap: 40px; } .framer-HDnou .framer-1yeki47 { gap: 18px; } .framer-HDnou .framer-fvlrav { aspect-ratio: 0.7954545454545454 / 1; height: auto; } .framer-HDnou .framer-1ly4xme { flex-direction: column; padding: 70px 16px 80px 16px; } .framer-HDnou .framer-w1aexo { flex: none; gap: 36px; width: 100%; } .framer-HDnou .framer-9y29fv { align-content: flex-start; align-items: flex-start; } .framer-HDnou .framer-150stwx, .framer-HDnou .framer-l9x9up { flex-direction: column; gap: 24px; } .framer-HDnou .framer-19y4626 { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; gap: 32px; padding: 70px 16px 70px 16px; } .framer-HDnou .framer-1guxum3 { padding: 40px 16px 40px 16px; } .framer-HDnou .framer-1m92sfz { padding: 16px 0px 24px 0px; } .framer-HDnou .framer-xv5p49 { gap: 32px 24px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(4, min-content); } .framer-HDnou .framer-13j64b2 { gap: 24px; } .framer-HDnou .framer-amq3p3, .framer-HDnou .framer-142eq1n { padding: 80px 16px 80px 16px; } .framer-HDnou .framer-12wl6m1 { gap: 40px; max-width: unset; } .framer-HDnou .framer-1j7ex55 { gap: 10px; } .framer-HDnou .framer-1na1wgq { flex: none; gap: 24px; order: 1; width: 100%; } .framer-HDnou .framer-7t69tj { padding: 70px 16px 80px 16px; } .framer-HDnou .framer-1we4npt { gap: 60px; z-index: 2; } .framer-HDnou .framer-1vjwnf, .framer-HDnou .framer-uzor8h { flex-direction: column; } .framer-HDnou .framer-1lohfbo-container { flex: none; order: 0; width: 100%; } .framer-HDnou .framer-1hu6uq7-container { flex: none; order: 2; width: 100%; } .framer-HDnou .framer-1eeu1ut-container { flex: none; order: 1; width: 100%; } .framer-HDnou .framer-1runybn-container { flex: none; order: 3; width: 100%; } .framer-HDnou .framer-rokw7h { max-width: 350px; } .framer-HDnou .framer-1ubx80s { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; } .framer-HDnou .framer-mb3p3o { align-content: flex-start; align-items: flex-start; flex: none; width: 100%; } .framer-HDnou .framer-md42mj { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-HDnou .framer-m3u4uj { flex-direction: column; padding: 70px 16px 100px 16px; } .framer-HDnou .framer-12aezb5 { flex: none; flex-direction: column; gap: 32px; width: 100%; } .framer-HDnou .framer-ecqwc4 { align-self: unset; flex: none; gap: 0px; height: min-content; justify-content: center; width: 100%; } .framer-HDnou .framer-qkgwho { flex: none; flex-direction: column; gap: 40px; justify-content: flex-start; width: 100%; }}`,
      ],
      `framer-HDnou`
    )),
    (Tc.displayName = `Home`),
    (Tc.defaultProps = { height: 15703.5, width: 1200 }),
    M(
      Tc,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
          ],
        },
        ...ms,
        ...hs,
        ..._s,
        ...vs,
        ...bs,
        ...xs,
        ...Ss,
        ...Cs,
        ...ws,
        ...Es,
        ...Os,
        ...ks,
        ...As,
        ...js,
        ...Ns,
        ...Ps,
        ...Fs,
        ...Is,
        ...Ls,
        ...he(wn),
        ...he(gn),
        ...he(bn),
        ...he(Ue),
        ...he(Ye),
        ...he(Ze),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Tc.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = Pe.get(nc(), n),
          i = Pe.get(ic(), n),
          a = Pe.get(ac(), n),
          o = Pe.get(oc(), n),
          s = Pe.get(sc(), n),
          c = Pe.get(mc(), n),
          l = Pe.get(hc(), n),
          u = Pe.get(bc(), n),
          d = Pe.get(xc(), n);
        return Promise.allSettled([
          r.preload(),
          i.preload(),
          a.preload(),
          o.preload(),
          s.preload(),
          c.preload(),
          l.preload(),
          u.preload(),
          d.preload(),
          P(X, {}, t),
          P($i, {}, t),
          P(an, {}, t),
          P(Lt, {}, t),
          P(Dt, {}, t),
          P(xt, {}, t),
          P(wt, {}, t),
          P(us, {}, t),
          P(Jo, {}, t),
          P(Ma, {}, t),
          P(At, {}, t),
          P(Pt, {}, t),
          P(It, {}, t),
          P(Ft, {}, t),
          P(qt, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => P(hr, {}, t)));
          })(),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => P(hr, {}, t)));
          })(),
          (async () => {
            let e = (await a.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => P(hr, {}, t)));
          })(),
          (async () => {
            let e = (await o.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => P(hr, {}, t)));
          })(),
          (async () => {
            let e = (await s.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => P(hr, {}, t)));
          })(),
          (async () => {
            let e = (await c.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => P(ln, {}, t)));
          })(),
          (async () => {
            let e = (await u.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => P(sn, {}, t)));
          })(),
        ]);
      },
    }),
    (Ec = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerResponsiveScreen: `true`,
            framerScrollSections: `{"GupJHRftr":{"pattern":":GupJHRftr","name":"scroll-trigger"},"VoApNnspm":{"pattern":":VoApNnspm","name":"feature-card"},"nrHc2EeAa":{"pattern":":nrHc2EeAa","name":"acquisition"},"cOMm90vJL":{"pattern":":cOMm90vJL","name":"excellence"},"esZ2zY5mx":{"pattern":":esZ2zY5mx","name":"partnership"}}`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `15703.5`,
            framerVectorSets: `["omX0gWFPqDwhaiWwf6ab"]`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"XOpZf9jEo":{"layout":["fixed","auto"]},"FKeUsnHKg":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ec as __FramerMetadata__, Tc as default, Bs as queryParamNames };
//# sourceMappingURL=FHCAzGgU2TWDQ3k_3-k3mzJ8HGzXfNoo8EhqBDT_XFc.BeRkMNeR.mjs.map
