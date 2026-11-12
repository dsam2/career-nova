import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  I as n,
  M as r,
  T as i,
  _ as a,
  c as o,
  j as s,
  k as c,
  l,
  o as u,
  y as d,
} from "./react.CWkcPvHD.mjs";
import { T as f, a as p, r as ee, t as m } from "./motion.UJ_SjFSS.mjs";
import {
  A as h,
  Ct as g,
  Dt as _,
  G as v,
  L as y,
  O as b,
  Ot as x,
  P as S,
  St as te,
  T as C,
  Tt as w,
  U as T,
  W as E,
  Z as D,
  _t as ne,
  a as O,
  bt as k,
  d as A,
  ft as re,
  ht as ie,
  i as j,
  j as M,
  lt as ae,
  m as N,
  o as P,
  p as oe,
  pt as se,
  vt as ce,
  w as F,
  wt as le,
  x as I,
  xt as ue,
} from "./framer.B5VSaEF1.mjs";
import {
  _ as de,
  a as fe,
  b as pe,
  c as me,
  d as he,
  f as ge,
  l as _e,
  o as ve,
  s as ye,
  u as be,
  v as xe,
  y as Se,
} from "./shared-lib.Dlb4YuQV.mjs";
import { n as Ce, t as L } from "./erS2dThW9.BrvLZ0Oe.mjs";
import { r as we, t as Te } from "./TWMSVpnV8.CI53xpCA.mjs";
import { r as Ee, t as De } from "./ToUBkEhni.HN_TQtaI.mjs";
import {
  a as R,
  c as z,
  i as Oe,
  n as ke,
  o as Ae,
  r as je,
  s as Me,
  t as Ne,
} from "./JlQPYH9lf.Dzlq9O7H.mjs";
import { n as Pe, t as B } from "./iq8J45AIS.DV-QoLM0.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./H4GEN39UP.CSd0BSRv.mjs";
import { n as ze, t as V } from "./Qz0U1kQ59.DcFwlR6q.mjs";
import Be, { t as Ve } from "./ef6AyIcoQZpslPo4N-N8P8qaRWbWggs2FrDh21_Lggk.DRuGtcyk.mjs";
var H,
  U,
  He,
  Ue,
  We,
  W,
  G,
  Ge = e(() => {
    (u(),
      D(),
      i(),
      (H = `var(--framer-icon-mask)`),
      (U = a(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (He = f.create(U)),
      (Ue = a((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(He, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (We = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 18 0 L 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 15 C 0 15.828 0.672 16.5 1.5 16.5 L 18 16.5 C 18.828 16.5 19.5 15.828 19.5 15 L 19.5 1.5 C 19.5 0.672 18.828 0 18 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="CcIDqS4bW" transform="translate(2.25 3.75)" width="19.5px"/><path d="M 0 5.25 L 3.75 9 L 12.75 0" fill="transparent" height="9px" id="txP0X4MiU" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6 7.5)" width="12.75px"/></svg>`),
      (W = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (G = w(
        a(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: s,
              lschgej4H: c,
              qxTvv_EBh: l,
              ...u
            } = W(e),
            d = te(`4119102008`, We);
          return o(Ue, {
            ...u,
            className: S(`framer-uMwCf`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": l, "--21h8s6": s, "--pgex8v": c, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: d }),
          });
        }),
        [
          `.framer-uMwCf { -webkit-mask: ${H}; aspect-ratio: 1; display: block; mask: ${H}; width: 24px; }`,
        ],
        `framer-uMwCf`
      )),
      (G.displayName = `Check`),
      M(G, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: P.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: P.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: P.Number,
        },
      }));
  }),
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  K,
  et = e(() => {
    (u(),
      D(),
      m(),
      i(),
      Ge(),
      pe(),
      (Ke = T(G)),
      (qe = `framer-0655i`),
      (Je = { q6iPxg4vE: `framer-v-1faeiij` }),
      (Ye = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Xe = ({ value: e, children: t }) => {
        let n = s(p),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return o(p.Provider, { value: a, children: t });
      }),
      (Ze = f.create(t)),
      (Qe = ({ color: e, height: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        ekizjHHT8: r ?? a.ekizjHHT8 ?? `Title`,
        V5CvjKBIZ:
          e ?? a.V5CvjKBIZ ?? `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
      })),
      ($e = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = w(
        a(function (e, n) {
          let r = c(null),
            i = n ?? r,
            a = d(),
            { activeLocale: s, setLocale: u } = ne();
          ae();
          let {
              style: p,
              className: m,
              layoutId: h,
              variant: g,
              ekizjHHT8: _,
              V5CvjKBIZ: v,
              ...y
            } = Qe(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: te,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = le({ defaultVariant: `q6iPxg4vE`, ref: i, variant: g, variantClassNames: Je }),
            A = $e(e, k),
            re = S(qe, de);
          return o(ee, {
            id: h ?? a,
            children: o(Ze, {
              animate: k,
              initial: !1,
              children: o(Xe, {
                value: Ye,
                children: l(f.div, {
                  ...y,
                  ...w,
                  className: S(re, `framer-1faeiij`, m, x),
                  "data-framer-name": `Desktop`,
                  layoutDependency: A,
                  layoutId: `q6iPxg4vE`,
                  ref: i,
                  style: { ...p },
                  children: [
                    o(G, {
                      animated: !0,
                      className: `framer-135vzhn`,
                      layoutDependency: A,
                      layoutId: `l018JrvR3`,
                      style: { "--1m6trwb": 0, "--21h8s6": v, "--pgex8v": 1.5, opacity: 0.7 },
                    }),
                    o(C, {
                      __fromCanvasComponent: !0,
                      children: o(t, {
                        children: o(f.p, {
                          className: `framer-styles-preset-1bsm36g`,
                          "data-styles-preset": `V83vTwGC4`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-V5CvjKBIZ-NJm0MSJ8z))`,
                          },
                          children: `Title`,
                        }),
                      }),
                      className: `framer-x4yxxk`,
                      "data-framer-name": `Title`,
                      fonts: [`Inter`],
                      layoutDependency: A,
                      layoutId: `tgpdnAKci`,
                      style: {
                        "--extracted-r6o4lv": `var(--variable-reference-V5CvjKBIZ-NJm0MSJ8z)`,
                        "--framer-paragraph-spacing": `0px`,
                        "--variable-reference-V5CvjKBIZ-NJm0MSJ8z": v,
                        opacity: 0.8,
                      },
                      text: _,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-0655i.framer-1561eex, .framer-0655i .framer-1561eex { display: block; }`,
          `.framer-0655i.framer-1faeiij { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 360px; }`,
          `.framer-0655i .framer-135vzhn { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 24px; }`,
          `.framer-0655i .framer-x4yxxk { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          ...xe,
        ],
        `framer-0655i`
      )),
      (K.displayName = `Features Point`),
      (K.defaultProps = { height: 24.5, width: 360 }),
      M(K, {
        ekizjHHT8: { defaultValue: `Title`, displayTextArea: !0, title: `Title`, type: P.String },
        onekizjHHT8Change: { changes: `ekizjHHT8`, type: P.ChangeHandler },
        V5CvjKBIZ: {
          defaultValue: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88)) /* {"name":"Blue D"} */`,
          title: `Color`,
          type: P.Color,
        },
      }),
      h(
        K,
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
          ...Ke,
          ...E(Se),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  J,
  ft,
  pt,
  mt,
  ht,
  Y,
  gt,
  _t,
  X,
  vt = e(() => {
    (u(),
      D(),
      m(),
      i(),
      z(),
      Fe(),
      Oe(),
      pe(),
      Ce(),
      et(),
      (tt = _(N)),
      (nt = T(K)),
      (rt = T(L)),
      (it = [`i7b0OANUk`, `H7j4co389`, `x_QmgH5en`, `Ry7DmXmep`]),
      (at = `framer-8xcjZ`),
      (ot = {
        H7j4co389: `framer-v-wom9q8`,
        i7b0OANUk: `framer-v-187oxp4`,
        Ry7DmXmep: `framer-v-zrei58`,
        x_QmgH5en: `framer-v-1of9re1`,
      }),
      (st = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ct = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 180,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (lt = { delay: 0, duration: 0.8, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ut = { delay: 0, duration: 2, ease: [0, 0, 1, 1], type: `tween` }),
      (dt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.75,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (J = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (ft = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (pt = ({ value: e, children: t }) => {
        let n = s(p),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return o(p.Provider, { value: a, children: t });
      }),
      (mt = {
        "Desktop Blue": `H7j4co389`,
        "Phone Blue": `Ry7DmXmep`,
        Desktop: `i7b0OANUk`,
        Phone: `x_QmgH5en`,
      }),
      (ht = f.create(t)),
      (Y = (e, t) => {
        let [r, i] = n(e),
          [a, o] = n(e);
        return t ? [e, t] : (e !== a && (i(e), o(e)), [r, i]);
      }),
      (gt = ({
        buttonText: e,
        details: t,
        features1: n,
        features10: r,
        features2: i,
        features3: a,
        features4: o,
        features5: s,
        features6: c,
        features7: l,
        features8: u,
        features9: d,
        height: f,
        icon: p,
        id: ee,
        link: m,
        perMonth: h,
        price: g,
        title: _,
        width: v,
        ...y
      }) => ({
        ...y,
        ajyhFkbp1: i ?? y.ajyhFkbp1 ?? `Custom Landing Page Design`,
        AWM6nsfP2: l ?? y.AWM6nsfP2 ?? `Test and timeline planning`,
        FBBGkgFl5: p ?? y.FBBGkgFl5 ?? Me,
        gbmvuCz8W: a ?? y.gbmvuCz8W ?? `Responsive Development`,
        iBG6msNdN: n ?? y.iBG6msNdN ?? `Brand Discovery Session`,
        IeaA88CuB: r ?? y.IeaA88CuB ?? `Career and goal discussion`,
        m_0FJjWV3: u ?? y.m_0FJjWV3 ?? `Scholarship and budget guidance`,
        n7zcP3mGi: e ?? y.n7zcP3mGi ?? `Book Counselling`,
        ObU9YZx4r: m ?? y.ObU9YZx4r,
        OifkrzCWc: _ ?? y.OifkrzCWc ?? `Starter`,
        r4iDqVx1_: d ?? y.r4iDqVx1_ ?? `Profile evaluation`,
        S9lnB0zG9: t ?? y.S9lnB0zG9 ?? `Early-stage startups and small projects`,
        TUSu5cgOw: g ?? y.TUSu5cgOw ?? `Tailored to you`,
        UUgWT_rri: o ?? y.UUgWT_rri ?? `Basic SEO Foundation`,
        variant: mt[y.variant] ?? y.variant ?? `i7b0OANUk`,
        VyxkBrEfa: s ?? y.VyxkBrEfa ?? `Analytics Setup`,
        wEyuqTAkR: h ?? y.wEyuqTAkR ?? ``,
        wwWcUhddG: c ?? y.wwWcUhddG ?? `Final design handoff`,
      })),
      (_t = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = w(
        a(function (e, n) {
          let r = c(null),
            i = n ?? r,
            a = d(),
            { activeLocale: s, setLocale: u } = ne(),
            p = ae(),
            {
              style: m,
              className: h,
              layoutId: g,
              variant: _,
              FBBGkgFl5: v,
              OifkrzCWc: y,
              S9lnB0zG9: x,
              TUSu5cgOw: te,
              wEyuqTAkR: w,
              iBG6msNdN: T,
              oniBG6msNdNChange: E,
              ajyhFkbp1: D,
              onajyhFkbp1Change: O,
              gbmvuCz8W: k,
              ongbmvuCz8WChange: A,
              UUgWT_rri: re,
              onUUgWT_rriChange: ie,
              VyxkBrEfa: M,
              onVyxkBrEfaChange: N,
              wwWcUhddG: P,
              onwwWcUhddGChange: oe,
              AWM6nsfP2: se,
              onAWM6nsfP2Change: ce,
              m_0FJjWV3: F,
              onm_0FJjWV3Change: I,
              r4iDqVx1_: ue,
              onr4iDqVx1_Change: fe,
              IeaA88CuB: pe,
              onIeaA88CuBChange: me,
              n7zcP3mGi: he,
              onn7zcP3mGiChange: ge,
              ObU9YZx4r: _e,
              ...ve
            } = gt(e),
            [ye, be] = Y(T, E),
            [xe, Se] = Y(D, O),
            [Ce, we] = Y(k, A),
            [Te, Ee] = Y(re, ie),
            [De, R] = Y(M, N),
            [z, Oe] = Y(P, oe),
            [ke, Ae] = Y(se, ce),
            [je, Me] = Y(F, I),
            [Pe, B] = Y(ue, fe),
            [Fe, Ie] = Y(pe, me),
            [Le, ze] = Y(he, ge),
            {
              baseVariant: V,
              classNames: Be,
              clearLoadingGesture: Ve,
              gestureHandlers: H,
              gestureVariant: U,
              isLoading: He,
              setGestureState: Ue,
              setVariant: We,
              variants: W,
            } = le({
              cycleOrder: it,
              defaultVariant: `i7b0OANUk`,
              ref: i,
              variant: _,
              variantClassNames: ot,
            }),
            G = _t(e, W),
            Ge = S(at, Ne, de, Re),
            Ke = J(w),
            qe = J(z),
            Je = J(ke),
            Ye = J(je),
            Xe = J(Pe),
            Ze = J(Fe);
          return o(ee, {
            id: g ?? a,
            children: o(ht, {
              animate: W,
              initial: !1,
              children: o(pt, {
                value: st,
                children: l(f.div, {
                  ...ve,
                  ...H,
                  className: S(Ge, `framer-187oxp4`, h, Be),
                  "data-framer-name": `Desktop`,
                  layoutDependency: G,
                  layoutId: `i7b0OANUk`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    ...m,
                  },
                  variants: {
                    H7j4co389: {
                      backgroundColor: `var(--token-c80313c8-a0c1-4f14-ad5e-9b2193d38589, rgb(178, 123, 0))`,
                    },
                    Ry7DmXmep: {
                      backgroundColor: `var(--token-c80313c8-a0c1-4f14-ad5e-9b2193d38589, rgb(178, 123, 0))`,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    },
                    x_QmgH5en: {
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    },
                  },
                  ...q(
                    {
                      H7j4co389: { "data-framer-name": `Desktop Blue` },
                      Ry7DmXmep: { "data-framer-name": `Phone Blue` },
                      x_QmgH5en: { "data-framer-name": `Phone` },
                    },
                    V,
                    U
                  ),
                  children: [
                    l(f.div, {
                      className: `framer-1wue872`,
                      "data-framer-name": `Top Content`,
                      layoutDependency: G,
                      layoutId: `YjA2BYjwW`,
                      children: [
                        l(f.div, {
                          className: `framer-1wgya7p`,
                          "data-framer-name": `Title & Details`,
                          layoutDependency: G,
                          layoutId: `Mmc6xRaO7`,
                          children: [
                            l(f.div, {
                              className: `framer-1jjn3fi`,
                              "data-framer-name": `Content`,
                              layoutDependency: G,
                              layoutId: `BtRiygfkS`,
                              children: [
                                o(tt, {
                                  __framer__animate: { transition: lt },
                                  __framer__animateOnce: !1,
                                  __framer__enter: ct,
                                  __framer__loop: dt,
                                  __framer__loopEffectEnabled: !0,
                                  __framer__loopPauseOffscreen: !0,
                                  __framer__loopRepeatDelay: 0,
                                  __framer__loopRepeatType: `mirror`,
                                  __framer__loopTransition: ut,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  animated: !0,
                                  className: `framer-12mg363`,
                                  Component: v,
                                  layoutDependency: G,
                                  layoutId: `ySYQ_6mOG`,
                                  style: {
                                    "--1m6trwb": 0,
                                    "--21h8s6": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                    "--pgex8v": 1.2,
                                  },
                                  variants: {
                                    H7j4co389: {
                                      "--21h8s6": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                    },
                                    Ry7DmXmep: {
                                      "--21h8s6": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                    },
                                  },
                                }),
                                o(C, {
                                  __fromCanvasComponent: !0,
                                  children: o(t, {
                                    children: o(f.h4, {
                                      className: `framer-styles-preset-4trj8p`,
                                      "data-styles-preset": `JlQPYH9lf`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-1eung3n, var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88)))`,
                                      },
                                      children: `Starter`,
                                    }),
                                  }),
                                  className: `framer-iueozj`,
                                  "data-framer-name": `Title`,
                                  fonts: [`Inter`],
                                  layoutDependency: G,
                                  layoutId: `s9TnPNRKr`,
                                  style: {
                                    "--extracted-1eung3n": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                    "--framer-paragraph-spacing": `0px`,
                                  },
                                  text: y,
                                  variants: {
                                    H7j4co389: {
                                      "--extracted-1eung3n": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                    },
                                    Ry7DmXmep: {
                                      "--extracted-1eung3n": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                    },
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...q(
                                    {
                                      H7j4co389: {
                                        children: o(t, {
                                          children: o(f.h4, {
                                            className: `framer-styles-preset-4trj8p`,
                                            "data-styles-preset": `JlQPYH9lf`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-1eung3n, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                            },
                                            children: `Starter`,
                                          }),
                                        }),
                                      },
                                      Ry7DmXmep: {
                                        children: o(t, {
                                          children: o(f.h4, {
                                            className: `framer-styles-preset-4trj8p`,
                                            "data-styles-preset": `JlQPYH9lf`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-1eung3n, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                            },
                                            children: `Starter`,
                                          }),
                                        }),
                                      },
                                    },
                                    V,
                                    U
                                  ),
                                }),
                              ],
                            }),
                            o(C, {
                              __fromCanvasComponent: !0,
                              children: o(t, {
                                children: o(f.p, {
                                  className: `framer-styles-preset-1bsm36g`,
                                  "data-styles-preset": `V83vTwGC4`,
                                  dir: `auto`,
                                  children: `Early-stage startups andsmall projects`,
                                }),
                              }),
                              className: `framer-cq3kr3`,
                              "data-framer-name": `Details`,
                              fonts: [`Inter`],
                              layoutDependency: G,
                              layoutId: `Z1XpwN_jr`,
                              style: { "--framer-paragraph-spacing": `0px`, opacity: 0.8 },
                              text: x,
                              variants: {
                                H7j4co389: {
                                  "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                },
                                Ry7DmXmep: {
                                  "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...q(
                                {
                                  H7j4co389: {
                                    children: o(t, {
                                      children: o(f.p, {
                                        className: `framer-styles-preset-1bsm36g`,
                                        "data-styles-preset": `V83vTwGC4`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                        },
                                        children: `Early-stage startups andsmall projects`,
                                      }),
                                    }),
                                  },
                                  Ry7DmXmep: {
                                    children: o(t, {
                                      children: o(f.p, {
                                        className: `framer-styles-preset-1bsm36g`,
                                        "data-styles-preset": `V83vTwGC4`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                        },
                                        children: `Early-stage startups and small projects`,
                                      }),
                                    }),
                                  },
                                },
                                V,
                                U
                              ),
                            }),
                          ],
                        }),
                        l(f.div, {
                          className: `framer-13ymjco`,
                          "data-framer-name": `Price`,
                          layoutDependency: G,
                          layoutId: `KasBvnjnh`,
                          children: [
                            o(C, {
                              __fromCanvasComponent: !0,
                              children: o(t, {
                                children: o(f.h2, {
                                  className: `framer-styles-preset-hcmt7i`,
                                  "data-styles-preset": `H4GEN39UP`,
                                  dir: `auto`,
                                  children: `Tailored to you`,
                                }),
                              }),
                              className: `framer-10441lz`,
                              "data-framer-name": `Price`,
                              fonts: [`Inter`],
                              layoutDependency: G,
                              layoutId: `RFqZU4ve8`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              text: te,
                              variants: {
                                H7j4co389: {
                                  "--extracted-1of0zx5": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                },
                                Ry7DmXmep: {
                                  "--extracted-1of0zx5": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...q(
                                {
                                  H7j4co389: {
                                    children: o(t, {
                                      children: o(f.h2, {
                                        className: `framer-styles-preset-hcmt7i`,
                                        "data-styles-preset": `H4GEN39UP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-1of0zx5, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                        },
                                        children: `Tailored to you`,
                                      }),
                                    }),
                                  },
                                  Ry7DmXmep: {
                                    children: o(t, {
                                      children: o(f.h2, {
                                        className: `framer-styles-preset-hcmt7i`,
                                        "data-styles-preset": `H4GEN39UP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-1of0zx5, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                        },
                                        children: `Tailored to you`,
                                      }),
                                    }),
                                  },
                                },
                                V,
                                U
                              ),
                            }),
                            Ke !== !1 &&
                              o(C, {
                                __fromCanvasComponent: !0,
                                children: o(t, {
                                  children: o(f.p, {
                                    className: `framer-styles-preset-1bsm36g`,
                                    "data-styles-preset": `V83vTwGC4`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88)))`,
                                    },
                                    children: ``,
                                  }),
                                }),
                                className: `framer-1bt846h`,
                                "data-framer-name": `Price`,
                                fonts: [`Inter`],
                                layoutDependency: G,
                                layoutId: `i0br3ML3s`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                  "--framer-paragraph-spacing": `0px`,
                                  opacity: 0.7,
                                },
                                text: w,
                                variants: {
                                  H7j4co389: {
                                    "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                  },
                                  Ry7DmXmep: {
                                    "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                  },
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...q(
                                  {
                                    H7j4co389: {
                                      children: o(t, {
                                        children: o(f.p, {
                                          className: `framer-styles-preset-1bsm36g`,
                                          "data-styles-preset": `V83vTwGC4`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                          },
                                          children: ``,
                                        }),
                                      }),
                                    },
                                    Ry7DmXmep: {
                                      children: o(t, {
                                        children: o(f.p, {
                                          className: `framer-styles-preset-1bsm36g`,
                                          "data-styles-preset": `V83vTwGC4`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                          },
                                          children: ``,
                                        }),
                                      }),
                                    },
                                  },
                                  V,
                                  U
                                ),
                              }),
                          ],
                        }),
                      ],
                    }),
                    l(f.div, {
                      className: `framer-fqcm8u`,
                      "data-border": !0,
                      "data-framer-name": `Bottom Content`,
                      layoutDependency: G,
                      layoutId: `SSZphA8oL`,
                      style: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgba(0, 0, 0, 0.08))`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                      },
                      variants: {
                        H7j4co389: {
                          "--border-color": `var(--token-4af0ba28-7eab-4f4f-a7ba-6e1996be8810, rgba(255, 255, 255, 0.1))`,
                        },
                        Ry7DmXmep: {
                          "--border-color": `var(--token-4af0ba28-7eab-4f4f-a7ba-6e1996be8810, rgba(255, 255, 255, 0.1))`,
                        },
                      },
                      children: [
                        l(f.div, {
                          className: `framer-14zhrfy`,
                          "data-framer-name": `Points`,
                          layoutDependency: G,
                          layoutId: `aqIKtcogH`,
                          children: [
                            o(j, {
                              height: 24,
                              width: `calc(${p?.width || `100vw`} - 56px)`,
                              y:
                                (p?.y || 0) +
                                36 +
                                (((p?.height || 680.5) - 72 - 770.4) / 2 + 335.4 + 35) +
                                36 +
                                0 +
                                0 +
                                0,
                              ...q(
                                {
                                  Ry7DmXmep: {
                                    width: `calc(${p?.width || `100vw`} - 44px)`,
                                    y:
                                      (p?.y || 0) +
                                      28 +
                                      (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                      30 +
                                      0 +
                                      0 +
                                      0,
                                  },
                                  x_QmgH5en: {
                                    width: `calc(${p?.width || `100vw`} - 44px)`,
                                    y:
                                      (p?.y || 0) +
                                      28 +
                                      (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                      30 +
                                      0 +
                                      0 +
                                      0,
                                  },
                                },
                                V,
                                U
                              ),
                              children: o(b, {
                                className: `framer-15yx99e-container`,
                                "data-framer-name": `Feature Point 1`,
                                layoutDependency: G,
                                layoutId: `V_Xjy6ap1-container`,
                                name: `Feature Point 1`,
                                nodeId: `V_Xjy6ap1`,
                                rendersWithMotion: !0,
                                scopeId: `E_HOdqSl1`,
                                children: o(K, {
                                  ekizjHHT8: ye,
                                  height: `100%`,
                                  id: `V_Xjy6ap1`,
                                  layoutId: `V_Xjy6ap1`,
                                  name: `Feature Point 1`,
                                  onekizjHHT8Change: be,
                                  style: { width: `100%` },
                                  V5CvjKBIZ: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                  width: `100%`,
                                  ...q(
                                    {
                                      H7j4co389: {
                                        V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                      },
                                      Ry7DmXmep: {
                                        V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                      },
                                    },
                                    V,
                                    U
                                  ),
                                }),
                              }),
                            }),
                            o(j, {
                              height: 24,
                              width: `calc(${p?.width || `100vw`} - 56px)`,
                              y:
                                (p?.y || 0) +
                                36 +
                                (((p?.height || 680.5) - 72 - 770.4) / 2 + 335.4 + 35) +
                                36 +
                                0 +
                                0 +
                                28,
                              ...q(
                                {
                                  Ry7DmXmep: {
                                    width: `calc(${p?.width || `100vw`} - 44px)`,
                                    y:
                                      (p?.y || 0) +
                                      28 +
                                      (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                      30 +
                                      0 +
                                      0 +
                                      28,
                                  },
                                  x_QmgH5en: {
                                    width: `calc(${p?.width || `100vw`} - 44px)`,
                                    y:
                                      (p?.y || 0) +
                                      28 +
                                      (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                      30 +
                                      0 +
                                      0 +
                                      28,
                                  },
                                },
                                V,
                                U
                              ),
                              children: o(b, {
                                className: `framer-1uv2ov5-container`,
                                "data-framer-name": `Feature Point 2`,
                                layoutDependency: G,
                                layoutId: `CrE8C_I7y-container`,
                                name: `Feature Point 2`,
                                nodeId: `CrE8C_I7y`,
                                rendersWithMotion: !0,
                                scopeId: `E_HOdqSl1`,
                                children: o(K, {
                                  ekizjHHT8: xe,
                                  height: `100%`,
                                  id: `CrE8C_I7y`,
                                  layoutId: `CrE8C_I7y`,
                                  name: `Feature Point 2`,
                                  onekizjHHT8Change: Se,
                                  style: { width: `100%` },
                                  V5CvjKBIZ: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                  width: `100%`,
                                  ...q(
                                    {
                                      H7j4co389: {
                                        V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                      },
                                      Ry7DmXmep: {
                                        V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                      },
                                    },
                                    V,
                                    U
                                  ),
                                }),
                              }),
                            }),
                            o(j, {
                              height: 24,
                              width: `calc(${p?.width || `100vw`} - 56px)`,
                              y:
                                (p?.y || 0) +
                                36 +
                                (((p?.height || 680.5) - 72 - 770.4) / 2 + 335.4 + 35) +
                                36 +
                                0 +
                                0 +
                                56,
                              ...q(
                                {
                                  Ry7DmXmep: {
                                    width: `calc(${p?.width || `100vw`} - 44px)`,
                                    y:
                                      (p?.y || 0) +
                                      28 +
                                      (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                      30 +
                                      0 +
                                      0 +
                                      56,
                                  },
                                  x_QmgH5en: {
                                    width: `calc(${p?.width || `100vw`} - 44px)`,
                                    y:
                                      (p?.y || 0) +
                                      28 +
                                      (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                      30 +
                                      0 +
                                      0 +
                                      56,
                                  },
                                },
                                V,
                                U
                              ),
                              children: o(b, {
                                className: `framer-8hmvs1-container`,
                                "data-framer-name": `Feature Point 3`,
                                layoutDependency: G,
                                layoutId: `ZTUMv8ChO-container`,
                                name: `Feature Point 3`,
                                nodeId: `ZTUMv8ChO`,
                                rendersWithMotion: !0,
                                scopeId: `E_HOdqSl1`,
                                children: o(K, {
                                  ekizjHHT8: Ce,
                                  height: `100%`,
                                  id: `ZTUMv8ChO`,
                                  layoutId: `ZTUMv8ChO`,
                                  name: `Feature Point 3`,
                                  onekizjHHT8Change: we,
                                  style: { width: `100%` },
                                  V5CvjKBIZ: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                  width: `100%`,
                                  ...q(
                                    {
                                      H7j4co389: {
                                        V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                      },
                                      Ry7DmXmep: {
                                        V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                      },
                                    },
                                    V,
                                    U
                                  ),
                                }),
                              }),
                            }),
                            o(j, {
                              height: 24,
                              width: `calc(${p?.width || `100vw`} - 56px)`,
                              y:
                                (p?.y || 0) +
                                36 +
                                (((p?.height || 680.5) - 72 - 770.4) / 2 + 335.4 + 35) +
                                36 +
                                0 +
                                0 +
                                84,
                              ...q(
                                {
                                  Ry7DmXmep: {
                                    width: `calc(${p?.width || `100vw`} - 44px)`,
                                    y:
                                      (p?.y || 0) +
                                      28 +
                                      (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                      30 +
                                      0 +
                                      0 +
                                      84,
                                  },
                                  x_QmgH5en: {
                                    width: `calc(${p?.width || `100vw`} - 44px)`,
                                    y:
                                      (p?.y || 0) +
                                      28 +
                                      (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                      30 +
                                      0 +
                                      0 +
                                      84,
                                  },
                                },
                                V,
                                U
                              ),
                              children: o(b, {
                                className: `framer-1ffzpz8-container`,
                                "data-framer-name": `Feature Point 4`,
                                layoutDependency: G,
                                layoutId: `tjrAPFldh-container`,
                                name: `Feature Point 4`,
                                nodeId: `tjrAPFldh`,
                                rendersWithMotion: !0,
                                scopeId: `E_HOdqSl1`,
                                children: o(K, {
                                  ekizjHHT8: Te,
                                  height: `100%`,
                                  id: `tjrAPFldh`,
                                  layoutId: `tjrAPFldh`,
                                  name: `Feature Point 4`,
                                  onekizjHHT8Change: Ee,
                                  style: { width: `100%` },
                                  V5CvjKBIZ: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                  width: `100%`,
                                  ...q(
                                    {
                                      H7j4co389: {
                                        V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                      },
                                      Ry7DmXmep: {
                                        V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                      },
                                    },
                                    V,
                                    U
                                  ),
                                }),
                              }),
                            }),
                            o(j, {
                              height: 24,
                              width: `calc(${p?.width || `100vw`} - 56px)`,
                              y:
                                (p?.y || 0) +
                                36 +
                                (((p?.height || 680.5) - 72 - 770.4) / 2 + 335.4 + 35) +
                                36 +
                                0 +
                                0 +
                                112,
                              ...q(
                                {
                                  Ry7DmXmep: {
                                    width: `calc(${p?.width || `100vw`} - 44px)`,
                                    y:
                                      (p?.y || 0) +
                                      28 +
                                      (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                      30 +
                                      0 +
                                      0 +
                                      112,
                                  },
                                  x_QmgH5en: {
                                    width: `calc(${p?.width || `100vw`} - 44px)`,
                                    y:
                                      (p?.y || 0) +
                                      28 +
                                      (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                      30 +
                                      0 +
                                      0 +
                                      112,
                                  },
                                },
                                V,
                                U
                              ),
                              children: o(b, {
                                className: `framer-5yhm0j-container`,
                                "data-framer-name": `Feature Point 5`,
                                layoutDependency: G,
                                layoutId: `tTeKmXjWU-container`,
                                name: `Feature Point 5`,
                                nodeId: `tTeKmXjWU`,
                                rendersWithMotion: !0,
                                scopeId: `E_HOdqSl1`,
                                children: o(K, {
                                  ekizjHHT8: De,
                                  height: `100%`,
                                  id: `tTeKmXjWU`,
                                  layoutId: `tTeKmXjWU`,
                                  name: `Feature Point 5`,
                                  onekizjHHT8Change: R,
                                  style: { width: `100%` },
                                  V5CvjKBIZ: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                  width: `100%`,
                                  ...q(
                                    {
                                      H7j4co389: {
                                        V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                      },
                                      Ry7DmXmep: {
                                        V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                      },
                                    },
                                    V,
                                    U
                                  ),
                                }),
                              }),
                            }),
                            qe !== !1 &&
                              o(j, {
                                height: 24,
                                width: `calc(${p?.width || `100vw`} - 56px)`,
                                y:
                                  (p?.y || 0) +
                                  36 +
                                  (((p?.height || 680.5) - 72 - 770.4) / 2 + 335.4 + 35) +
                                  36 +
                                  0 +
                                  0 +
                                  140,
                                ...q(
                                  {
                                    Ry7DmXmep: {
                                      width: `calc(${p?.width || `100vw`} - 44px)`,
                                      y:
                                        (p?.y || 0) +
                                        28 +
                                        (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                        30 +
                                        0 +
                                        0 +
                                        140,
                                    },
                                    x_QmgH5en: {
                                      width: `calc(${p?.width || `100vw`} - 44px)`,
                                      y:
                                        (p?.y || 0) +
                                        28 +
                                        (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                        30 +
                                        0 +
                                        0 +
                                        140,
                                    },
                                  },
                                  V,
                                  U
                                ),
                                children: o(b, {
                                  className: `framer-1dw84h1-container`,
                                  "data-framer-name": `Feature Point 6`,
                                  layoutDependency: G,
                                  layoutId: `LdGvHK9o6-container`,
                                  name: `Feature Point 6`,
                                  nodeId: `LdGvHK9o6`,
                                  rendersWithMotion: !0,
                                  scopeId: `E_HOdqSl1`,
                                  children: o(K, {
                                    ekizjHHT8: z,
                                    height: `100%`,
                                    id: `LdGvHK9o6`,
                                    layoutId: `LdGvHK9o6`,
                                    name: `Feature Point 6`,
                                    onekizjHHT8Change: Oe,
                                    style: { width: `100%` },
                                    V5CvjKBIZ: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                    width: `100%`,
                                    ...q(
                                      {
                                        H7j4co389: {
                                          V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                        },
                                        Ry7DmXmep: {
                                          V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                        },
                                      },
                                      V,
                                      U
                                    ),
                                  }),
                                }),
                              }),
                            Je !== !1 &&
                              o(j, {
                                height: 24,
                                width: `calc(${p?.width || `100vw`} - 56px)`,
                                y:
                                  (p?.y || 0) +
                                  36 +
                                  (((p?.height || 680.5) - 72 - 770.4) / 2 + 335.4 + 35) +
                                  36 +
                                  0 +
                                  0 +
                                  140,
                                ...q(
                                  {
                                    Ry7DmXmep: {
                                      width: `calc(${p?.width || `100vw`} - 44px)`,
                                      y:
                                        (p?.y || 0) +
                                        28 +
                                        (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                        30 +
                                        0 +
                                        0 +
                                        140,
                                    },
                                    x_QmgH5en: {
                                      width: `calc(${p?.width || `100vw`} - 44px)`,
                                      y:
                                        (p?.y || 0) +
                                        28 +
                                        (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                        30 +
                                        0 +
                                        0 +
                                        140,
                                    },
                                  },
                                  V,
                                  U
                                ),
                                children: o(b, {
                                  className: `framer-1ml3wdt-container`,
                                  "data-framer-name": `Feature Point 7`,
                                  layoutDependency: G,
                                  layoutId: `uSmga1P1D-container`,
                                  name: `Feature Point 7`,
                                  nodeId: `uSmga1P1D`,
                                  rendersWithMotion: !0,
                                  scopeId: `E_HOdqSl1`,
                                  children: o(K, {
                                    ekizjHHT8: ke,
                                    height: `100%`,
                                    id: `uSmga1P1D`,
                                    layoutId: `uSmga1P1D`,
                                    name: `Feature Point 7`,
                                    onekizjHHT8Change: Ae,
                                    style: { width: `100%` },
                                    V5CvjKBIZ: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                    width: `100%`,
                                    ...q(
                                      {
                                        H7j4co389: {
                                          V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                        },
                                        Ry7DmXmep: {
                                          V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                        },
                                      },
                                      V,
                                      U
                                    ),
                                  }),
                                }),
                              }),
                            Ye !== !1 &&
                              o(j, {
                                height: 24,
                                width: `calc(${p?.width || `100vw`} - 56px)`,
                                y:
                                  (p?.y || 0) +
                                  36 +
                                  (((p?.height || 680.5) - 72 - 770.4) / 2 + 335.4 + 35) +
                                  36 +
                                  0 +
                                  0 +
                                  140,
                                ...q(
                                  {
                                    Ry7DmXmep: {
                                      width: `calc(${p?.width || `100vw`} - 44px)`,
                                      y:
                                        (p?.y || 0) +
                                        28 +
                                        (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                        30 +
                                        0 +
                                        0 +
                                        140,
                                    },
                                    x_QmgH5en: {
                                      width: `calc(${p?.width || `100vw`} - 44px)`,
                                      y:
                                        (p?.y || 0) +
                                        28 +
                                        (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                        30 +
                                        0 +
                                        0 +
                                        140,
                                    },
                                  },
                                  V,
                                  U
                                ),
                                children: o(b, {
                                  className: `framer-n6cxjt-container`,
                                  "data-framer-name": `Feature Point 8`,
                                  layoutDependency: G,
                                  layoutId: `SjCynt0y9-container`,
                                  name: `Feature Point 8`,
                                  nodeId: `SjCynt0y9`,
                                  rendersWithMotion: !0,
                                  scopeId: `E_HOdqSl1`,
                                  children: o(K, {
                                    ekizjHHT8: je,
                                    height: `100%`,
                                    id: `SjCynt0y9`,
                                    layoutId: `SjCynt0y9`,
                                    name: `Feature Point 8`,
                                    onekizjHHT8Change: Me,
                                    style: { width: `100%` },
                                    V5CvjKBIZ: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                    width: `100%`,
                                    ...q(
                                      {
                                        H7j4co389: {
                                          V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                        },
                                        Ry7DmXmep: {
                                          V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                        },
                                      },
                                      V,
                                      U
                                    ),
                                  }),
                                }),
                              }),
                            Xe !== !1 &&
                              o(j, {
                                height: 24,
                                width: `calc(${p?.width || `100vw`} - 56px)`,
                                y:
                                  (p?.y || 0) +
                                  36 +
                                  (((p?.height || 680.5) - 72 - 770.4) / 2 + 335.4 + 35) +
                                  36 +
                                  0 +
                                  0 +
                                  140,
                                ...q(
                                  {
                                    Ry7DmXmep: {
                                      width: `calc(${p?.width || `100vw`} - 44px)`,
                                      y:
                                        (p?.y || 0) +
                                        28 +
                                        (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                        30 +
                                        0 +
                                        0 +
                                        140,
                                    },
                                    x_QmgH5en: {
                                      width: `calc(${p?.width || `100vw`} - 44px)`,
                                      y:
                                        (p?.y || 0) +
                                        28 +
                                        (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                        30 +
                                        0 +
                                        0 +
                                        140,
                                    },
                                  },
                                  V,
                                  U
                                ),
                                children: o(b, {
                                  className: `framer-vteig-container`,
                                  "data-framer-name": `Feature Point 9`,
                                  layoutDependency: G,
                                  layoutId: `wcJhwnsNY-container`,
                                  name: `Feature Point 9`,
                                  nodeId: `wcJhwnsNY`,
                                  rendersWithMotion: !0,
                                  scopeId: `E_HOdqSl1`,
                                  children: o(K, {
                                    ekizjHHT8: Pe,
                                    height: `100%`,
                                    id: `wcJhwnsNY`,
                                    layoutId: `wcJhwnsNY`,
                                    name: `Feature Point 9`,
                                    onekizjHHT8Change: B,
                                    style: { width: `100%` },
                                    V5CvjKBIZ: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                    width: `100%`,
                                    ...q(
                                      {
                                        H7j4co389: {
                                          V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                        },
                                        Ry7DmXmep: {
                                          V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                        },
                                      },
                                      V,
                                      U
                                    ),
                                  }),
                                }),
                              }),
                            Ze !== !1 &&
                              o(j, {
                                height: 24,
                                width: `calc(${p?.width || `100vw`} - 56px)`,
                                y:
                                  (p?.y || 0) +
                                  36 +
                                  (((p?.height || 680.5) - 72 - 770.4) / 2 + 335.4 + 35) +
                                  36 +
                                  0 +
                                  0 +
                                  140,
                                ...q(
                                  {
                                    Ry7DmXmep: {
                                      width: `calc(${p?.width || `100vw`} - 44px)`,
                                      y:
                                        (p?.y || 0) +
                                        28 +
                                        (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                        30 +
                                        0 +
                                        0 +
                                        140,
                                    },
                                    x_QmgH5en: {
                                      width: `calc(${p?.width || `100vw`} - 44px)`,
                                      y:
                                        (p?.y || 0) +
                                        28 +
                                        (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                        30 +
                                        0 +
                                        0 +
                                        140,
                                    },
                                  },
                                  V,
                                  U
                                ),
                                children: o(b, {
                                  className: `framer-cs8j46-container`,
                                  "data-framer-name": `Feature Point 10`,
                                  layoutDependency: G,
                                  layoutId: `nf_DrQsrc-container`,
                                  name: `Feature Point 10`,
                                  nodeId: `nf_DrQsrc`,
                                  rendersWithMotion: !0,
                                  scopeId: `E_HOdqSl1`,
                                  children: o(K, {
                                    ekizjHHT8: Fe,
                                    height: `100%`,
                                    id: `nf_DrQsrc`,
                                    layoutId: `nf_DrQsrc`,
                                    name: `Feature Point 10`,
                                    onekizjHHT8Change: Ie,
                                    style: { width: `100%` },
                                    V5CvjKBIZ: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                    width: `100%`,
                                    ...q(
                                      {
                                        H7j4co389: {
                                          V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                        },
                                        Ry7DmXmep: {
                                          V5CvjKBIZ: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                        },
                                      },
                                      V,
                                      U
                                    ),
                                  }),
                                }),
                              }),
                          ],
                        }),
                        o(j, {
                          height: 48,
                          width: `calc(${p?.width || `100vw`} - 56px)`,
                          y:
                            (p?.y || 0) +
                            36 +
                            (((p?.height || 680.5) - 72 - 770.4) / 2 + 335.4 + 35) +
                            36 +
                            316,
                          ...q(
                            {
                              Ry7DmXmep: {
                                width: `calc(${p?.width || `100vw`} - 44px)`,
                                y:
                                  (p?.y || 0) +
                                  28 +
                                  (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                  30 +
                                  316,
                              },
                              x_QmgH5en: {
                                width: `calc(${p?.width || `100vw`} - 44px)`,
                                y:
                                  (p?.y || 0) +
                                  28 +
                                  (((p?.height || 639.5) - 54 - 747.4) / 2 + 323.4 + 30) +
                                  30 +
                                  316,
                              },
                            },
                            V,
                            U
                          ),
                          children: o(b, {
                            className: `framer-sums3x-container`,
                            layoutDependency: G,
                            layoutId: `rzRRiONGc-container`,
                            nodeId: `rzRRiONGc`,
                            rendersWithMotion: !0,
                            scopeId: `E_HOdqSl1`,
                            children: o(L, {
                              dQDe2ecMb: _e,
                              GGZTVUGZ5: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                              height: `100%`,
                              id: `rzRRiONGc`,
                              LALAatWUM: Le,
                              layoutId: `rzRRiONGc`,
                              lCPX_SQT2: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                              oAbfzaz1L: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                              onLALAatWUMChange: ze,
                              qkIJkdmKd: !1,
                              style: { width: `100%` },
                              tWCC8YneY: `var(--token-c80313c8-a0c1-4f14-ad5e-9b2193d38589, rgb(178, 123, 0))`,
                              variant: ft(`IKSzx_isl`),
                              width: `100%`,
                              zkb7vpZI7: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                              ...q(
                                {
                                  H7j4co389: {
                                    GGZTVUGZ5: `var(--token-c80313c8-a0c1-4f14-ad5e-9b2193d38589, rgb(178, 123, 0))`,
                                    oAbfzaz1L: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                    tWCC8YneY: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                    zkb7vpZI7: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                  },
                                  Ry7DmXmep: {
                                    GGZTVUGZ5: `var(--token-c80313c8-a0c1-4f14-ad5e-9b2193d38589, rgb(178, 123, 0))`,
                                    oAbfzaz1L: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                    tWCC8YneY: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                    zkb7vpZI7: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                  },
                                },
                                V,
                                U
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
          `.framer-8xcjZ.framer-i8bq4x, .framer-8xcjZ .framer-i8bq4x { display: block; }`,
          `.framer-8xcjZ.framer-187oxp4 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: center; overflow: hidden; padding: 36px 28px 36px 28px; position: relative; width: 424px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-8xcjZ .framer-1wue872 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-8xcjZ .framer-1wgya7p { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-8xcjZ .framer-1jjn3fi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-8xcjZ .framer-12mg363 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 35px; }`,
          `.framer-8xcjZ .framer-iueozj, .framer-8xcjZ .framer-1bt846h { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-8xcjZ .framer-cq3kr3 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-8xcjZ .framer-13ymjco { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-8xcjZ .framer-10441lz { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-8xcjZ .framer-fqcm8u { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 36px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-8xcjZ .framer-14zhrfy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-8xcjZ .framer-15yx99e-container, .framer-8xcjZ .framer-1uv2ov5-container, .framer-8xcjZ .framer-8hmvs1-container, .framer-8xcjZ .framer-1ffzpz8-container, .framer-8xcjZ .framer-5yhm0j-container, .framer-8xcjZ .framer-1dw84h1-container, .framer-8xcjZ .framer-1ml3wdt-container, .framer-8xcjZ .framer-n6cxjt-container, .framer-8xcjZ .framer-vteig-container, .framer-8xcjZ .framer-cs8j46-container, .framer-8xcjZ .framer-sums3x-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-8xcjZ.framer-v-1of9re1.framer-187oxp4, .framer-8xcjZ.framer-v-zrei58.framer-187oxp4 { gap: 30px; padding: 28px 22px 26px 22px; }`,
          `.framer-8xcjZ.framer-v-1of9re1 .framer-1wue872, .framer-8xcjZ.framer-v-zrei58 .framer-1wue872 { gap: 28px; }`,
          `.framer-8xcjZ.framer-v-1of9re1 .framer-1wgya7p, .framer-8xcjZ.framer-v-zrei58 .framer-1wgya7p { gap: 14px; }`,
          `.framer-8xcjZ.framer-v-1of9re1 .framer-12mg363 { width: 32px; }`,
          `.framer-8xcjZ.framer-v-1of9re1 .framer-fqcm8u, .framer-8xcjZ.framer-v-zrei58 .framer-fqcm8u { padding: 30px 0px 0px 0px; }`,
          ...ke,
          ...xe,
          ...Ie,
          `.framer-8xcjZ[data-border="true"]::after, .framer-8xcjZ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-8xcjZ`
      )),
      (X.displayName = `Pricing Card`),
      (X.defaultProps = { height: 680.5, width: 424 }),
      M(X, {
        variant: {
          options: [`i7b0OANUk`, `H7j4co389`, `x_QmgH5en`, `Ry7DmXmep`],
          optionTitles: [`Desktop`, `Desktop Blue`, `Phone`, `Phone Blue`],
          title: `Variant`,
          type: P.Enum,
        },
        FBBGkgFl5: {
          defaultValue: {
            identifier: `module:oRZNz1OhAISK82DtcOGB/N62yml5nm6Kfn4RfwfiC/nIWEFZ57c.js:default`,
            moduleId: `oRZNz1OhAISK82DtcOGB`,
          },
          setModuleId: `omX0gWFPqDwhaiWwf6ab`,
          title: `Icon`,
          type: P.VectorSetItem,
        },
        OifkrzCWc: { defaultValue: `Starter`, displayTextArea: !1, title: `Title`, type: P.String },
        onOifkrzCWcChange: { changes: `OifkrzCWc`, type: P.ChangeHandler },
        S9lnB0zG9: {
          defaultValue: `Early-stage startups and small projects`,
          displayTextArea: !1,
          title: `Details`,
          type: P.String,
        },
        onS9lnB0zG9Change: { changes: `S9lnB0zG9`, type: P.ChangeHandler },
        TUSu5cgOw: { defaultValue: `Tailored to you`, displayTextArea: !1, title: `Price`, type: P.String },
        onTUSu5cgOwChange: { changes: `TUSu5cgOw`, type: P.ChangeHandler },
        wEyuqTAkR: {
          defaultValue: ``,
          displayTextArea: !1,
          title: ``,
          type: P.String,
        },
        onwEyuqTAkRChange: { changes: `wEyuqTAkR`, type: P.ChangeHandler },
        iBG6msNdN: {
          defaultValue: `Brand Discovery Session`,
          displayTextArea: !0,
          title: `Features 1`,
          type: P.String,
        },
        oniBG6msNdNChange: { changes: `iBG6msNdN`, type: P.ChangeHandler },
        ajyhFkbp1: {
          defaultValue: `Custom Landing Page Design`,
          displayTextArea: !0,
          title: `Features 2`,
          type: P.String,
        },
        onajyhFkbp1Change: { changes: `ajyhFkbp1`, type: P.ChangeHandler },
        gbmvuCz8W: {
          defaultValue: `Responsive Development`,
          displayTextArea: !0,
          title: `Features 3`,
          type: P.String,
        },
        ongbmvuCz8WChange: { changes: `gbmvuCz8W`, type: P.ChangeHandler },
        UUgWT_rri: {
          defaultValue: `Basic SEO Foundation`,
          displayTextArea: !0,
          title: `Features 4`,
          type: P.String,
        },
        onUUgWT_rriChange: { changes: `UUgWT_rri`, type: P.ChangeHandler },
        VyxkBrEfa: {
          defaultValue: `Analytics Setup`,
          displayTextArea: !0,
          title: `Features 5`,
          type: P.String,
        },
        onVyxkBrEfaChange: { changes: `VyxkBrEfa`, type: P.ChangeHandler },
        wwWcUhddG: {
          defaultValue: `Final design handoff`,
          displayTextArea: !0,
          title: `Features 6`,
          type: P.String,
        },
        onwwWcUhddGChange: { changes: `wwWcUhddG`, type: P.ChangeHandler },
        AWM6nsfP2: {
          defaultValue: `Test and timeline planning`,
          displayTextArea: !0,
          title: `Features 7`,
          type: P.String,
        },
        onAWM6nsfP2Change: { changes: `AWM6nsfP2`, type: P.ChangeHandler },
        m_0FJjWV3: {
          defaultValue: `Scholarship and budget guidance`,
          displayTextArea: !0,
          title: `Features 8`,
          type: P.String,
        },
        onm_0FJjWV3Change: { changes: `m_0FJjWV3`, type: P.ChangeHandler },
        r4iDqVx1_: {
          defaultValue: `Profile evaluation`,
          displayTextArea: !0,
          title: `Features 9`,
          type: P.String,
        },
        onr4iDqVx1_Change: { changes: `r4iDqVx1_`, type: P.ChangeHandler },
        IeaA88CuB: {
          defaultValue: `Career and goal discussion`,
          displayTextArea: !0,
          title: `Features 10`,
          type: P.String,
        },
        onIeaA88CuBChange: { changes: `IeaA88CuB`, type: P.ChangeHandler },
        n7zcP3mGi: {
          defaultValue: `Book Counselling`,
          displayTextArea: !1,
          title: `Button text`,
          type: P.String,
        },
        onn7zcP3mGiChange: { changes: `n7zcP3mGi`, type: P.ChangeHandler },
        ObU9YZx4r: { title: `Link`, type: P.Link },
      }),
      h(
        X,
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
          ...nt,
          ...rt,
          ...E(je),
          ...E(Se),
          ...E(Le),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (X.loader = { load: (e, t) => (t.locale, Promise.allSettled([y(K, {}, t), y(L, {}, t)])) }));
  }),
  yt,
  bt,
  Z,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  Q,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  $,
  Bt;
e(() => {
  (u(),
    D(),
    m(),
    i(),
    we(),
    Ee(),
    z(),
    vt(),
    Ce(),
    Pe(),
    Ae(),
    ze(),
    me(),
    ge(),
    Ve(),
    (yt = T(V)),
    (bt = T(X)),
    (Z = _(f.div)),
    (xt = T(L)),
    (St = x(O)),
    (Ct = T(B)),
    (wt = T(R)),
    (Tt = {
      echzxjpGr: `(max-width: 809.98px)`,
      T9UUcW9cN: `(min-width: 810px) and (max-width: 1199.98px)`,
      xkavg1nk3: `(min-width: 1200px)`,
    }),
    (Et = () => typeof document < `u`),
    (Dt = [`count`]),
    (Ot = `framer-5g0w1`),
    (kt = {
      echzxjpGr: `framer-v-was6jm`,
      T9UUcW9cN: `framer-v-4p22e`,
      xkavg1nk3: `framer-v-ssz62d`,
    }),
    (At = (e, t, n) => (e && t ? `position` : n)),
    (Q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (jt = {
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
    (Mt = { damping: 70, delay: 0.6, mass: 1, stiffness: 210, type: `spring` }),
    (Nt = {
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
    (Pt = {
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
    (Ft = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 1.4, duration: 0.8, ease: [0.44, 0, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (It = {
      effect: {
        filter: `blur(8px)`,
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
    (Lt = { Desktop: `xkavg1nk3`, Phone: `echzxjpGr`, Tablet: `T9UUcW9cN` }),
    (Rt = ({ value: e }) =>
      ie()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (zt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Lt[r.variant] ?? r.variant ?? `xkavg1nk3`,
    })),
    ($ = w(
      a(function (e, n) {
        let i = c(null),
          a = n ?? i,
          u = d(),
          { activeLocale: m, setLocale: h } = ne(),
          _ = ae(),
          { style: y, className: b, layoutId: x, variant: te, ...w } = zt(e);
        ce(r(() => Be({}, m), [m]));
        let [T, E] = se(te, Tt, !1),
          D = S(Ot, _e, fe),
          ie = s(A)?.isLayoutTemplate,
          M = !!s(p)?.transition?.layout,
          N = At(ie, M),
          P = k(`qu9cLrkqS`),
          le = g();
        ue();
        let de = () => !Et() || T !== `echzxjpGr`;
        return (
          re({}),
          o(A.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: Lt,
              primaryVariantId: `xkavg1nk3`,
              variantClassNames: kt,
            },
            children: l(ee, {
              id: x ?? u,
              children: [
                o(Rt, {
                  value: `html body { background: var(--token-a33c1b5b-e297-4002-8e0e-dc2265f4a460, rgb(0, 13, 14)); }`,
                }),
                l(f.div, {
                  ...w,
                  className: S(D, `framer-ssz62d`, b),
                  ref: a,
                  style: { ...y },
                  children: [
                    o(f.div, {
                      "aria-label": `Scroll Trigger`,
                      className: `framer-15ee2ao`,
                      "data-framer-name": `Scroll Triger`,
                      id: P,
                      layout: N,
                      ref: le(P),
                    }),
                    l(f.div, {
                      className: `framer-1lnjv4h`,
                      "data-framer-name": `Main`,
                      layout: N,
                      children: [
                        o(j, {
                          height: 500,
                          width: _?.width || `100vw`,
                          y: (_?.y || 0) + 0 + 0 + 0 + 0,
                          children: o(O, {
                            className: `framer-4prlzq-container`,
                            nodeId: `H2eIavxoi`,
                            scopeId: `zitVyT7Oh`,
                            children: o(I, {
                              breakpoint: T,
                              overrides: {
                                echzxjpGr: { variant: Q(`pSNtHM_tN`) },
                                T9UUcW9cN: { variant: Q(`ZsEu9N9BR`) },
                              },
                              children: o(V, {
                                height: `100%`,
                                id: `H2eIavxoi`,
                                l2pnRkKH_: ``,
                                layoutId: `H2eIavxoi`,
                                ldDYz64mB: `Flexible advisory support designed around your business priorities, challenges, and stage of growth.`,
                                NIiecT1dL: ``,
                                SdbUp40qY: `How We Support You`,
                                style: { width: `100%` },
                                variant: Q(`P143wiNhf`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        o(`section`, {
                          className: `framer-11u3v8q`,
                          "data-framer-name": `Price`,
                          children: l(`div`, {
                            className: `framer-194f8fw`,
                            "data-framer-name": `Container`,
                            children: [
                              l(Z, {
                                __framer__animate: { transition: Mt },
                                __framer__animateOnce: !0,
                                __framer__enter: jt,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-16uy1tx`,
                                "data-framer-name": `Tiers`,
                                children: [
                                  o(F, {
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
                                      o(I, {
                                        breakpoint: T,
                                        overrides: {
                                          echzxjpGr: {
                                            width: `min(${_?.width || `100vw`} - 32px, 1300px)`,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              500 +
                                              80 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          T9UUcW9cN: {
                                            width: `max((min(max(${_?.width || `100vw`} - 64px, 1px), 1300px) - 18px) / 2, 50px)`,
                                            y: (_?.y || 0) + 0 + 0 + 0 + 500 + 90 + 0 + 0 + 0 + 0,
                                          },
                                        },
                                        children: o(j, {
                                          height: 680,
                                          width: `max((min(max(${_?.width || `100vw`} - 64px, 1px), 1300px) - 36px) / 3, 1px)`,
                                          y: (_?.y || 0) + 0 + 0 + 0 + 500 + 90 + 0 + 0 + 0,
                                          children: o(O, {
                                            className: `framer-uq3cyz-container`,
                                            "data-framer-name": `Pricing Card (Starter)`,
                                            name: `Pricing Card (Starter)`,
                                            nodeId: `Sa4YNb58Y`,
                                            scopeId: `zitVyT7Oh`,
                                            children: o(I, {
                                              breakpoint: T,
                                              overrides: {
                                                echzxjpGr: {
                                                  ObU9YZx4r: e[2],
                                                  variant: Q(`x_QmgH5en`),
                                                },
                                                T9UUcW9cN: { ObU9YZx4r: e[1] },
                                              },
                                              children: o(X, {
                                                ajyhFkbp1: `Test and timeline planning`,
                                                AWM6nsfP2: ``,
                                                FBBGkgFl5: Te,
                                                gbmvuCz8W: `Scholarship and budget guidance`,
                                                height: `100%`,
                                                iBG6msNdN: `Course and college shortlist in India`,
                                                id: `Sa4YNb58Y`,
                                                IeaA88CuB: ``,
                                                layoutId: `Sa4YNb58Y`,
                                                m_0FJjWV3: ``,
                                                n7zcP3mGi: `Book Counselling`,
                                                name: `Pricing Card (Starter)`,
                                                ObU9YZx4r: e[0],
                                                OifkrzCWc: `Counselling & Planning`,
                                                r4iDqVx1_: ``,
                                                S9lnB0zG9: `For students deciding where and what to study.`,
                                                style: { width: `100%` },
                                                TUSu5cgOw: `Tailored to you`,
                                                UUgWT_rri: `Profile evaluation`,
                                                variant: Q(`i7b0OANUk`),
                                                VyxkBrEfa: `Career and goal discussion`,
                                                wEyuqTAkR: ``,
                                                width: `100%`,
                                                wwWcUhddG: `Course and college shortlist`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  o(F, {
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
                                      o(I, {
                                        breakpoint: T,
                                        overrides: {
                                          echzxjpGr: {
                                            width: `min(${_?.width || `100vw`} - 32px, 1300px)`,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              500 +
                                              80 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              692,
                                          },
                                          T9UUcW9cN: {
                                            width: `max((min(max(${_?.width || `100vw`} - 64px, 1px), 1300px) - 18px) / 2, 50px)`,
                                            y: (_?.y || 0) + 0 + 0 + 0 + 500 + 90 + 0 + 0 + 0 + 0,
                                          },
                                        },
                                        children: o(j, {
                                          height: 680,
                                          width: `max((min(max(${_?.width || `100vw`} - 64px, 1px), 1300px) - 36px) / 3, 1px)`,
                                          y: (_?.y || 0) + 0 + 0 + 0 + 500 + 90 + 0 + 0 + 0,
                                          children: o(O, {
                                            className: `framer-142tmf8-container`,
                                            "data-framer-name": `Pricing Card (Starter)`,
                                            name: `Pricing Card (Starter)`,
                                            nodeId: `d1cNn4pxw`,
                                            scopeId: `zitVyT7Oh`,
                                            children: o(I, {
                                              breakpoint: T,
                                              overrides: {
                                                echzxjpGr: {
                                                  ObU9YZx4r: e[2],
                                                  variant: Q(`Ry7DmXmep`),
                                                },
                                                T9UUcW9cN: { ObU9YZx4r: e[1] },
                                              },
                                              children: o(X, {
                                                ajyhFkbp1: `Document checklist and review`,
                                                AWM6nsfP2: `Application tracking`,
                                                FBBGkgFl5: Me,
                                                gbmvuCz8W: `Offer comparison`,
                                                height: `100%`,
                                                iBG6msNdN: `Includes all planning guidance`,
                                                id: `d1cNn4pxw`,
                                                IeaA88CuB: ``,
                                                layoutId: `d1cNn4pxw`,
                                                m_0FJjWV3: ``,
                                                n7zcP3mGi: `Book Counselling`,
                                                name: `Pricing Card (Starter)`,
                                                ObU9YZx4r: e[0],
                                                OifkrzCWc: `Applications`,
                                                r4iDqVx1_: ``,
                                                S9lnB0zG9: `For students ready to apply.`,
                                                style: { width: `100%` },
                                                TUSu5cgOw: `Tailored to you`,
                                                UUgWT_rri: `University applications`,
                                                variant: Q(`H7j4co389`),
                                                VyxkBrEfa: `SOP and LOR guidance`,
                                                wEyuqTAkR: ``,
                                                width: `100%`,
                                                wwWcUhddG: `Resume and CV preparation`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  o(F, {
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
                                      o(I, {
                                        breakpoint: T,
                                        overrides: {
                                          echzxjpGr: {
                                            width: `min(${_?.width || `100vw`} - 32px, 1300px)`,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              500 +
                                              80 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              1384,
                                          },
                                          T9UUcW9cN: {
                                            width: `max((min(max(${_?.width || `100vw`} - 64px, 1px), 1300px) - 18px) / 2, 50px)`,
                                            y: (_?.y || 0) + 0 + 0 + 0 + 500 + 90 + 0 + 0 + 0 + 698,
                                          },
                                        },
                                        children: o(j, {
                                          height: 680,
                                          width: `max((min(max(${_?.width || `100vw`} - 64px, 1px), 1300px) - 36px) / 3, 1px)`,
                                          y: (_?.y || 0) + 0 + 0 + 0 + 500 + 90 + 0 + 0 + 0,
                                          children: o(O, {
                                            className: `framer-sfxnss-container`,
                                            "data-framer-name": `Pricing Card (Starter)`,
                                            name: `Pricing Card (Starter)`,
                                            nodeId: `asH53RXzI`,
                                            scopeId: `zitVyT7Oh`,
                                            children: o(I, {
                                              breakpoint: T,
                                              overrides: {
                                                echzxjpGr: {
                                                  ObU9YZx4r: e[2],
                                                  variant: Q(`x_QmgH5en`),
                                                },
                                                T9UUcW9cN: { ObU9YZx4r: e[1] },
                                              },
                                              children: o(X, {
                                                ajyhFkbp1: `Interview preparation`,
                                                AWM6nsfP2: `Quarterly strategy workshops`,
                                                FBBGkgFl5: De,
                                                gbmvuCz8W: `Education loan guidance`,
                                                height: `100%`,
                                                iBG6msNdN: `Everything in Growth`,
                                                id: `asH53RXzI`,
                                                IeaA88CuB: ``,
                                                layoutId: `asH53RXzI`,
                                                m_0FJjWV3: ``,
                                                n7zcP3mGi: `Book Counselling`,
                                                name: `Pricing Card (Starter)`,
                                                ObU9YZx4r: e[0],
                                                OifkrzCWc: `Admission & Beyond`,
                                                r4iDqVx1_: ``,
                                                S9lnB0zG9: `For students with offers or ranks in hand.`,
                                                style: { width: `100%` },
                                                TUSu5cgOw: `Tailored to you`,
                                                UUgWT_rri: `Campus onboarding & transition guidance`,
                                                variant: Q(`i7b0OANUk`),
                                                VyxkBrEfa: `Resume and LinkedIn for job search`,
                                                wEyuqTAkR: ``,
                                                width: `100%`,
                                                wwWcUhddG: `Interview preparation for jobs`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-82xcuy`,
                                "data-framer-name": `View All`,
                                children: [
                                  o(C, {
                                    __fromCanvasComponent: !0,
                                    children: o(t, {
                                      children: o(`p`, {
                                        className: `framer-styles-preset-qlsyr3`,
                                        "data-styles-preset": `YMpbOMTQr`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `For larger or highly specialized engagements, we provide a customized proposal.`,
                                      }),
                                    }),
                                    className: `framer-ge20h2`,
                                    "data-framer-name": `Subtext`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `center`,
                                    withExternalLayout: !0,
                                  }),
                                  o(`div`, {
                                    className: `framer-1xsnovd`,
                                    "data-framer-name": `Line`,
                                  }),
                                  o(F, {
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
                                      o(I, {
                                        breakpoint: T,
                                        overrides: {
                                          echzxjpGr: {
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              500 +
                                              80 +
                                              0 +
                                              0 +
                                              2114 +
                                              0 +
                                              150.3,
                                          },
                                          T9UUcW9cN: {
                                            y:
                                              (_?.y || 0) + 0 + 0 + 0 + 500 + 90 + 0 + 1438 + 34.65,
                                          },
                                        },
                                        children: o(j, {
                                          height: 48,
                                          y: (_?.y || 0) + 0 + 0 + 0 + 500 + 90 + 0 + 725 + 34.65,
                                          children: o(I, {
                                            breakpoint: T,
                                            overrides: { T9UUcW9cN: { animate: Ft } },
                                            children: o(St, {
                                              animate: Nt,
                                              className: `framer-198pvjk-container`,
                                              "data-framer-appear-id": `198pvjk`,
                                              initial: Pt,
                                              nodeId: `WjaSYJWd3`,
                                              optimized: !0,
                                              rendersWithMotion: !0,
                                              scopeId: `zitVyT7Oh`,
                                              children: o(I, {
                                                breakpoint: T,
                                                overrides: {
                                                  echzxjpGr: { dQDe2ecMb: e[2] },
                                                  T9UUcW9cN: { dQDe2ecMb: e[1] },
                                                },
                                                children: o(L, {
                                                  dQDe2ecMb: e[0],
                                                  GGZTVUGZ5: `var(--token-11c233ce-ba11-4e3a-ba1d-5be950195b79, rgb(1, 43, 48))`,
                                                  height: `100%`,
                                                  id: `WjaSYJWd3`,
                                                  LALAatWUM: `Book Counselling`,
                                                  layoutId: `WjaSYJWd3`,
                                                  lCPX_SQT2: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                                  oAbfzaz1L: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                                  qkIJkdmKd: !1,
                                                  tWCC8YneY: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                  variant: Q(`ckPn2EswT`),
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
                        }),
                        o(`section`, {
                          className: `framer-11zfrmj`,
                          "data-framer-name": `FAQs`,
                          children: l(`div`, {
                            className: `framer-1onhbtx`,
                            "data-framer-name": `Container`,
                            children: [
                              l(`div`, {
                                className: `framer-c70zbs`,
                                "data-framer-name": `Left`,
                                children: [
                                  l(`div`, {
                                    className: `framer-1q97qas`,
                                    "data-framer-name": `Heading`,
                                    children: [
                                      o(I, {
                                        breakpoint: T,
                                        overrides: {
                                          echzxjpGr: {
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2972.3 +
                                              80 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          T9UUcW9cN: {
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2265.3 +
                                              120 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: o(j, {
                                          height: 13,
                                          y:
                                            (_?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1552.3 +
                                            120 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                          children: o(O, {
                                            className: `framer-2jdxi9-container`,
                                            "data-framer-name": `FAQs`,
                                            name: `FAQs`,
                                            nodeId: `sYMzwvW_K`,
                                            scopeId: `zitVyT7Oh`,
                                            children: o(B, {
                                              height: `100%`,
                                              id: `sYMzwvW_K`,
                                              layoutId: `sYMzwvW_K`,
                                              name: `FAQs`,
                                              variant: Q(`pqmTc8b_A`),
                                              width: `100%`,
                                              XqtCAHGpt: `FAQs`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      o(C, {
                                        __fromCanvasComponent: !0,
                                        children: o(t, {
                                          children: o(`h2`, {
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
                                        className: `framer-19umhjh`,
                                        effect: It,
                                        fonts: [`Inter`],
                                        id: `19umhjh`,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  de() &&
                                    l(`div`, {
                                      className: `framer-igigw6 hidden-was6jm`,
                                      "data-framer-name": `CTA`,
                                      children: [
                                        o(I, {
                                          breakpoint: T,
                                          overrides: {
                                            T9UUcW9cN: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 2400,
                                                intrinsicWidth: 1800,
                                                loading: v(
                                                  (_?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    2265.3 +
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
                                          children: o(oe, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 2400,
                                              intrinsicWidth: 1800,
                                              loading: v(
                                                (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1552.3 +
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
                                            className: `framer-1b2mu3d`,
                                            "data-framer-name": `Image`,
                                          }),
                                        }),
                                        o(C, {
                                          __fromCanvasComponent: !0,
                                          children: o(t, {
                                            children: o(`p`, {
                                              className: `framer-styles-preset-qlsyr3`,
                                              "data-styles-preset": `YMpbOMTQr`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: `Need Guidance? Book a consultation`,
                                            }),
                                          }),
                                          className: `framer-puywdc`,
                                          "data-framer-name": `Didn’t find your answer?`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(F, {
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
                                            o(I, {
                                              breakpoint: T,
                                              overrides: {
                                                T9UUcW9cN: {
                                                  width: `min(max((min(max(${_?.width || `100vw`} - 64px, 1px), 1300px) - 30px) * 0.375, 1px), 280px)`,
                                                  y:
                                                    (_?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    2265.3 +
                                                    120 +
                                                    0 +
                                                    0 +
                                                    205.7 +
                                                    0 +
                                                    239.3,
                                                },
                                              },
                                              children: o(j, {
                                                height: 48,
                                                width: `min(max((min(max(${_?.width || `100vw`} - 64px, 1px), 1300px) - 16px) * 0.4737, 1px), 280px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1552.3 +
                                                  120 +
                                                  0 +
                                                  0 +
                                                  205.7 +
                                                  0 +
                                                  239.3,
                                                children: o(O, {
                                                  className: `framer-1h67jcc-container`,
                                                  "data-framer-name": `Button`,
                                                  name: `Button`,
                                                  nodeId: `GBp07yQFy`,
                                                  scopeId: `zitVyT7Oh`,
                                                  children: o(I, {
                                                    breakpoint: T,
                                                    overrides: { T9UUcW9cN: { dQDe2ecMb: e[1] } },
                                                    children: o(L, {
                                                      dQDe2ecMb: e[0],
                                                      GGZTVUGZ5: `var(--token-11c233ce-ba11-4e3a-ba1d-5be950195b79, rgb(1, 43, 48))`,
                                                      height: `100%`,
                                                      id: `GBp07yQFy`,
                                                      LALAatWUM: `Book Counselling`,
                                                      layoutId: `GBp07yQFy`,
                                                      lCPX_SQT2: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                                      name: `Button`,
                                                      oAbfzaz1L: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                      qkIJkdmKd: !1,
                                                      style: { width: `100%` },
                                                      tWCC8YneY: `var(--token-c80313c8-a0c1-4f14-ad5e-9b2193d38589, rgb(178, 123, 0))`,
                                                      variant: Q(`AHziRZ1h2`),
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
                              o(Z, {
                                __framer__animate: { transition: Mt },
                                __framer__animateOnce: !0,
                                __framer__enter: jt,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-106srxv`,
                                "data-framer-name": `FAQs`,
                                children: o(I, {
                                  breakpoint: T,
                                  overrides: {
                                    echzxjpGr: {
                                      width: `min(${_?.width || `100vw`} - 32px, 1300px)`,
                                      y:
                                        (_?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        2972.3 +
                                        80 +
                                        0 +
                                        0 +
                                        115.78 +
                                        0 +
                                        0,
                                    },
                                    T9UUcW9cN: {
                                      width: `max((min(max(${_?.width || `100vw`} - 64px, 1px), 1300px) - 30px) / 1.6, 1px)`,
                                      y: (_?.y || 0) + 0 + 0 + 0 + 2265.3 + 120 + 0 + 0,
                                    },
                                  },
                                  children: o(j, {
                                    height: 493,
                                    width: `max((min(max(${_?.width || `100vw`} - 64px, 1px), 1300px) - 16px) / 1.9, 1px)`,
                                    y: (_?.y || 0) + 0 + 0 + 0 + 1552.3 + 120 + 0 + 0,
                                    children: o(O, {
                                      className: `framer-3is0h1-container`,
                                      nodeId: `FBPrRn8SO`,
                                      scopeId: `zitVyT7Oh`,
                                      children: o(R, {
                                        height: `100%`,
                                        id: `FBPrRn8SO`,
                                        layoutId: `FBPrRn8SO`,
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
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-5g0w1.framer-ouryi2, .framer-5g0w1 .framer-ouryi2 { display: block; }`,
        `.framer-5g0w1.framer-ssz62d { align-content: center; align-items: center; background-color: var(--token-a33c1b5b-e297-4002-8e0e-dc2265f4a460, #000d0e); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-5g0w1 .framer-15ee2ao { flex: none; height: 1px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: 60px; width: 100%; z-index: 1; }`,
        `.framer-5g0w1 .framer-1lnjv4h { align-content: center; align-items: center; background-color: var(--token-8303387e-d4c2-4989-af33-54d2c870c7ac, #000205); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-5g0w1 .framer-4prlzq-container, .framer-5g0w1 .framer-1h67jcc-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-5g0w1 .framer-11u3v8q { align-content: center; align-items: center; background-color: var(--token-8597472e-8530-4424-91fc-d5043dad4450, #edf7ff); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 90px 32px 120px 32px; position: relative; width: 100%; }`,
        `.framer-5g0w1 .framer-194f8fw { align-content: center; align-items: center; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 45px; height: min-content; justify-content: flex-start; max-width: 1300px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-5g0w1 .framer-16uy1tx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-5g0w1 .framer-uq3cyz-container, .framer-5g0w1 .framer-142tmf8-container, .framer-5g0w1 .framer-sfxnss-container, .framer-5g0w1 .framer-3is0h1-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-5g0w1 .framer-82xcuy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5g0w1 .framer-ge20h2 { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; max-width: 300px; opacity: 0.8; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-5g0w1 .framer-1xsnovd { background-color: var(--token-fe5faa7a-fb67-4b37-94b3-950cff1fcf02, rgba(0, 0, 0, 0.1)); flex: 1 0 0px; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
        `.framer-5g0w1 .framer-198pvjk-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-5g0w1 .framer-11zfrmj { align-content: center; align-items: center; background-color: var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, #ffffff); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 120px 32px 130px 32px; position: relative; width: 100%; }`,
        `.framer-5g0w1 .framer-1onhbtx { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 1300px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-5g0w1 .framer-c70zbs { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 0.9 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-5g0w1 .framer-1q97qas { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 5px 0px; position: relative; width: 100%; }`,
        `.framer-5g0w1 .framer-2jdxi9-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-5g0w1 .framer-19umhjh { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 520px; position: relative; width: 100%; }`,
        `.framer-5g0w1 .framer-igigw6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-end; max-width: 280px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-5g0w1 .framer-1b2mu3d { aspect-ratio: 1 / 1; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: auto; position: relative; width: 90px; }`,
        `.framer-5g0w1 .framer-puywdc { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 220px; opacity: 0.75; position: relative; width: 100%; }`,
        `.framer-5g0w1 .framer-106srxv { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        ...be,
        ...ve,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-5g0w1.framer-ssz62d { width: 810px; } .framer-5g0w1 .framer-11u3v8q { gap: 0px; } .framer-5g0w1 .framer-194f8fw { gap: 60px; } .framer-5g0w1 .framer-16uy1tx { align-content: unset; align-items: unset; display: grid; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); } .framer-5g0w1 .framer-uq3cyz-container, .framer-5g0w1 .framer-142tmf8-container, .framer-5g0w1 .framer-sfxnss-container { align-self: start; flex: none; justify-self: start; width: 100%; } .framer-5g0w1 .framer-ge20h2 { max-width: 280px; } .framer-5g0w1 .framer-1onhbtx { gap: 30px; } .framer-5g0w1 .framer-c70zbs { flex: 0.6 0 0px; } .framer-5g0w1 .framer-106srxv { gap: 32px; justify-content: flex-start; }}`,
        `@media (max-width: 809.98px) { .framer-5g0w1.framer-ssz62d { width: 390px; } .framer-5g0w1 .framer-11u3v8q { flex-direction: column; padding: 80px 16px 80px 16px; } .framer-5g0w1 .framer-194f8fw { flex: none; gap: 50px; width: 100%; } .framer-5g0w1 .framer-16uy1tx { flex-direction: column; gap: 12px; } .framer-5g0w1 .framer-uq3cyz-container, .framer-5g0w1 .framer-142tmf8-container, .framer-5g0w1 .framer-sfxnss-container, .framer-5g0w1 .framer-ge20h2, .framer-5g0w1 .framer-1xsnovd, .framer-5g0w1 .framer-3is0h1-container { flex: none; width: 100%; } .framer-5g0w1 .framer-82xcuy { flex-direction: column; gap: 16px; } .framer-5g0w1 .framer-11zfrmj { flex-direction: column; padding: 80px 16px 100px 16px; } .framer-5g0w1 .framer-1onhbtx { flex: none; flex-direction: column; gap: 32px; width: 100%; } .framer-5g0w1 .framer-c70zbs { align-self: unset; flex: none; gap: 0px; height: min-content; justify-content: center; width: 100%; } .framer-5g0w1 .framer-1q97qas { width: 100%; } .framer-5g0w1 .framer-106srxv { flex: none; flex-direction: column; gap: 40px; justify-content: flex-start; width: 100%; }}`,
      ],
      `framer-5g0w1`
    )),
    ($.displayName = `About`),
    ($.defaultProps = { height: 3285, width: 1200 }),
    h(
      $,
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
        ...yt,
        ...bt,
        ...xt,
        ...Ct,
        ...wt,
        ...E(he),
        ...E(ye),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([y(V, {}, t), y(X, {}, t), y(L, {}, t), y(B, {}, t), y(R, {}, t)])
      ),
    }),
    (Bt = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerzitVyT7Oh`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `3285`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"T9UUcW9cN":{"layout":["fixed","auto"]},"echzxjpGr":{"layout":["fixed","auto"]}}}`,
            framerColorSyntax: `true`,
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `{"qu9cLrkqS":{"pattern":":qu9cLrkqS","name":"scroll-trigger"}}`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Bt as __FramerMetadata__, $ as default, Dt as queryParamNames };
//# sourceMappingURL=QdNhm72-NhCOrUoS-DOEExKNyRocEFRynvoAF3tBV2s.C0EKnwVi.mjs.map
