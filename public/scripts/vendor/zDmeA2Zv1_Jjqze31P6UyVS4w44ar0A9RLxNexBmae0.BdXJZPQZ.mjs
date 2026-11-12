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
  s as d,
  y as ee,
} from "./react.CWkcPvHD.mjs";
import { T as f, a as p, r as te, t as m } from "./motion.UJ_SjFSS.mjs";
import {
  A as h,
  Ct as ne,
  Dt as g,
  L as _,
  O as v,
  Ot as y,
  P as b,
  T as x,
  Tt as S,
  U as C,
  W as w,
  Z as T,
  _t as E,
  a as D,
  bt as re,
  c as ie,
  d as O,
  ft as ae,
  ht as k,
  i as A,
  j,
  l as M,
  lt as oe,
  o as N,
  p as se,
  pt as ce,
  vt as le,
  wt as P,
  x as F,
} from "./framer.B5VSaEF1.mjs";
import {
  d as I,
  f as L,
  g as R,
  h as z,
  l as ue,
  m as B,
  p as V,
  u as de,
} from "./shared-lib.Dlb4YuQV.mjs";
import { n as fe, t as H } from "./erS2dThW9.BrvLZ0Oe.mjs";
import { n as pe, t as U } from "./iq8J45AIS.DV-QoLM0.mjs";
import { i as me, n as he, r as ge, t as _e } from "./AGg32jqif.BZ9TS_k0.mjs";
import { i as ve, n as ye, r as be, t as xe } from "./H4GEN39UP.CSd0BSRv.mjs";
import { n as Se, t as W } from "./Qz0U1kQ59.DcFwlR6q.mjs";
import { n as Ce, t as G } from "./OpkFe7y1L.BvUeyFnw.mjs";
import we, { t as Te } from "./w9l1WRyBVWa9bZAlkWHjqsPhOXMvr3w4w9Vr_Kj5yRA.C7ZFCx4r.mjs";
var Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  K,
  Ie,
  Le,
  q,
  Re = e(() => {
    (u(),
      T(),
      m(),
      i(),
      me(),
      R(),
      fe(),
      (Ee = C(H)),
      (De = y(g(v))),
      (Oe = `framer-pbvoK`),
      (ke = { IXWyEYpBI: `framer-v-16305xy` }),
      (Ae = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (je = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 1.2, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (Me = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (Ne = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Pe = ({ value: e, children: t }) => {
        let n = s(p),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return o(p.Provider, { value: a, children: t });
      }),
      (Fe = f.create(t)),
      (K = (e, t) => {
        let [r, i] = n(e),
          [a, o] = n(e);
        return t ? [e, t] : (e !== a && (i(e), o(e)), [r, i]);
      }),
      (Ie = ({
        buttonText: e,
        height: t,
        id: n,
        link: r,
        newTab: i,
        text: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        Ad6DUqH2O: o ?? c.Ad6DUqH2O ?? `Book Counselling`,
        JXUp1fkxB: i ?? c.JXUp1fkxB ?? !1,
        M70qdS25o: r ?? c.M70qdS25o,
        mMr0fZn6j: e ?? c.mMr0fZn6j ?? `Book Counselling`,
        vwiM7ebbC:
          a ?? c.vwiM7ebbC ?? `Questions about pricing, enterprise plans, or custom requirements?`,
      })),
      (Le = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = S(
        a(function (e, n) {
          let r = c(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: s, setLocale: u } = E(),
            d = oe(),
            {
              style: p,
              className: m,
              layoutId: h,
              variant: ne,
              Ad6DUqH2O: g,
              vwiM7ebbC: _,
              mMr0fZn6j: v,
              onmMr0fZn6jChange: y,
              M70qdS25o: S,
              JXUp1fkxB: C,
              onJXUp1fkxBChange: w,
              ...T
            } = Ie(e),
            [D, re] = K(v, y),
            [ie, O] = K(C, w),
            {
              baseVariant: ae,
              classNames: k,
              clearLoadingGesture: j,
              gestureHandlers: M,
              gestureVariant: N,
              isLoading: se,
              setGestureState: ce,
              setVariant: le,
              variants: F,
            } = P({ defaultVariant: `IXWyEYpBI`, ref: i, variant: ne, variantClassNames: ke }),
            I = Le(e, F),
            L = b(Oe, _e, V);
          return o(te, {
            id: h ?? a,
            children: o(Fe, {
              animate: F,
              initial: !1,
              children: o(Pe, {
                value: Ae,
                children: l(f.div, {
                  ...T,
                  ...M,
                  className: b(L, `framer-16305xy`, m, k),
                  "data-framer-name": `Main`,
                  layoutDependency: I,
                  layoutId: `IXWyEYpBI`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 18,
                    borderBottomRightRadius: 18,
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: 18,
                    ...p,
                  },
                  children: [
                    l(f.div, {
                      className: `framer-1s6hkws`,
                      "data-framer-name": `Content`,
                      layoutDependency: I,
                      layoutId: `U9EQ2VRDt`,
                      children: [
                        o(x, {
                          __fromCanvasComponent: !0,
                          children: o(t, {
                            children: o(f.p, {
                              className: `framer-styles-preset-13tsflb`,
                              "data-styles-preset": `AGg32jqif`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88)))`,
                              },
                              children: `Book Counselling`,
                            }),
                          }),
                          className: `framer-1digc30`,
                          fonts: [`Inter`],
                          layoutDependency: I,
                          layoutId: `McJisT9n9`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                            "--framer-link-text-color": `rgb(255, 230, 0)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: g,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        o(x, {
                          __fromCanvasComponent: !0,
                          children: o(t, {
                            children: o(f.p, {
                              className: `framer-styles-preset-1xheykw`,
                              "data-styles-preset": `vz9muakNv`,
                              dir: `auto`,
                              style: { "--framer-text-alignment": `left` },
                              children: `Questions about pricing, enterprise plans, or custom requirements?`,
                            }),
                          }),
                          className: `framer-4tlzz1`,
                          fonts: [`Inter`],
                          layoutDependency: I,
                          layoutId: `ULhJ24k4T`,
                          style: {
                            "--framer-link-text-color": `rgb(255, 230, 0)`,
                            "--framer-link-text-decoration": `underline`,
                            opacity: 0.75,
                          },
                          text: _,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    o(A, {
                      height: 48,
                      y: (d?.y || 0) + 30 + 294.5,
                      children: o(De, {
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        animate: je,
                        className: `framer-bqbv7m-container`,
                        "data-framer-appear-id": `bqbv7m`,
                        initial: Me,
                        layoutDependency: I,
                        layoutId: `C9qKX9Ztb-container`,
                        nodeId: `C9qKX9Ztb`,
                        optimized: !0,
                        rendersWithMotion: !0,
                        scopeId: `DjwUd8oxA`,
                        children: o(H, {
                          dQDe2ecMb: S,
                          GGZTVUGZ5: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                          height: `100%`,
                          id: `C9qKX9Ztb`,
                          LALAatWUM: D,
                          layoutId: `C9qKX9Ztb`,
                          lCPX_SQT2: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                          oAbfzaz1L: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                          onLALAatWUMChange: re,
                          onqkIJkdmKdChange: O,
                          qkIJkdmKd: ie,
                          tWCC8YneY: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                          variant: Ne(`AHziRZ1h2`),
                          width: `100%`,
                          zkb7vpZI7: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
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
          `.framer-pbvoK.framer-1oxvkpz, .framer-pbvoK .framer-1oxvkpz { display: block; }`,
          `.framer-pbvoK.framer-16305xy { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: relative; width: 290px; }`,
          `.framer-pbvoK .framer-1s6hkws { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-pbvoK .framer-1digc30, .framer-pbvoK .framer-4tlzz1 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-pbvoK .framer-bqbv7m-container { flex: none; height: auto; position: relative; width: auto; }`,
          ...he,
          ...B,
        ],
        `framer-pbvoK`
      )),
      (q.displayName = `Contact card`),
      (q.defaultProps = { height: 232.5, width: 290 }),
      j(q, {
        Ad6DUqH2O: {
          defaultValue: `Book Counselling`,
          displayTextArea: !1,
          title: `Title`,
          type: N.String,
        },
        onAd6DUqH2OChange: { changes: `Ad6DUqH2O`, type: N.ChangeHandler },
        vwiM7ebbC: {
          defaultValue: `Questions about pricing, enterprise plans, or custom requirements?`,
          displayTextArea: !0,
          title: `Text`,
          type: N.String,
        },
        onvwiM7ebbCChange: { changes: `vwiM7ebbC`, type: N.ChangeHandler },
        mMr0fZn6j: {
          defaultValue: `Book Counselling`,
          displayTextArea: !1,
          title: `Button text`,
          type: N.String,
        },
        onmMr0fZn6jChange: { changes: `mMr0fZn6j`, type: N.ChangeHandler },
        M70qdS25o: { title: `Link`, type: N.Link },
        JXUp1fkxB: { defaultValue: !1, title: `New Tab`, type: N.Boolean },
        onJXUp1fkxBChange: { changes: `JXUp1fkxB`, type: N.ChangeHandler },
      }),
      h(
        q,
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
          ...Ee,
          ...w(ge),
          ...w(z),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (q.loader = { load: (e, t) => (t.locale, Promise.allSettled([_(H, {}, t)])) }));
  }),
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  J,
  qe,
  Je,
  Ye,
  Y,
  Xe,
  X,
  Z,
  Ze,
  Q,
  Qe,
  $e,
  $,
  et;
e(() => {
  (u(),
    T(),
    m(),
    i(),
    Re(),
    pe(),
    Ce(),
    Se(),
    ve(),
    R(),
    L(),
    Te(),
    (ze = C(W)),
    (Be = C(U)),
    (Ve = g(x)),
    (He = C(G)),
    (Ue = C(q)),
    (We = g(f.div)),
    (Ge = {
      D2cSMHZnI: `(min-width: 810px) and (max-width: 1199.98px)`,
      jKHGOp6xG: `(max-width: 809.98px)`,
      uRZCJ1H9H: `(min-width: 1200px)`,
    }),
    (Ke = () => typeof document < `u`),
    (J = []),
    (qe = `framer-cuuhq`),
    (Je = {
      D2cSMHZnI: `framer-v-ye4bop`,
      jKHGOp6xG: `framer-v-1cgtl7h`,
      uRZCJ1H9H: `framer-v-8law`,
    }),
    (Ye = (e, t, n) => (e && t ? `position` : n)),
    (Y = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Xe = {
      effect: {
        filter: `blur(10px)`,
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      },
      tokenization: `word`,
      transition: { bounce: 0, delay: 0.05, duration: 0.4, type: `spring` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (X = {
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
    (Z = { damping: 70, delay: 0.6, mass: 1, stiffness: 210, type: `spring` }),
    (Ze = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
        default:
          return n;
      }
    }),
    (Q = { Desktop: `uRZCJ1H9H`, Phone: `jKHGOp6xG`, Tablet: `D2cSMHZnI` }),
    (Qe = ({ value: e }) =>
      k()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    ($e = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `uRZCJ1H9H`,
    })),
    ($ = S(
      a(function (e, n) {
        let i = c(null),
          a = n ?? i,
          u = ee(),
          { activeLocale: m, setLocale: h } = E(),
          g = oe(),
          { style: _, className: v, layoutId: y, variant: S, ...C } = $e(e);
        le(r(() => we({}, m), [m]));
        let [w, T] = ce(S, Ge, !1),
          k = b(qe, xe, ue, V),
          j = s(O)?.isLayoutTemplate,
          N = !!s(p)?.transition?.layout,
          P = Ye(j, N),
          I = re(`dmaaNgbVV`),
          L = ne(),
          R = () => !Ke() || w !== `jKHGOp6xG`;
        return (
          ae({}),
          o(O.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: Q,
              primaryVariantId: `uRZCJ1H9H`,
              variantClassNames: Je,
            },
            children: l(te, {
              id: y ?? u,
              children: [
                o(Qe, {
                  value: `html body { background: var(--token-4942d7a0-e46d-4ae9-9080-79d660a8d22c, rgb(18, 18, 18)); }`,
                }),
                l(f.div, {
                  ...C,
                  className: b(k, `framer-8law`, v),
                  ref: a,
                  style: { ..._ },
                  children: [
                    o(f.div, {
                      "aria-label": `Scroll Trigger`,
                      className: `framer-b2pefh`,
                      "data-framer-name": `Scroll Triger`,
                      id: I,
                      layout: P,
                      ref: L(I),
                    }),
                    l(f.div, {
                      className: `framer-4f7luk`,
                      "data-framer-name": `Main`,
                      layout: P,
                      children: [
                        o(A, {
                          height: 500,
                          width: g?.width || `100vw`,
                          children: o(D, {
                            className: `framer-jajw16-container`,
                            nodeId: `ybkNmaLnD`,
                            scopeId: `sGcuUgaBJ`,
                            children: o(F, {
                              breakpoint: w,
                              overrides: {
                                D2cSMHZnI: { variant: Y(`ZsEu9N9BR`) },
                                jKHGOp6xG: { variant: Y(`pSNtHM_tN`) },
                              },
                              children: o(W, {
                                height: `100%`,
                                id: `ybkNmaLnD`,
                                l2pnRkKH_: ``,
                                layoutId: `ybkNmaLnD`,
                                ldDYz64mB: `Partner with consultants committed to achieving measurable business results.`,
                                NIiecT1dL: ``,
                                SdbUp40qY: `Let's Plan Your Future`,
                                style: { width: `100%` },
                                variant: Y(`P143wiNhf`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        o(`section`, {
                          className: `framer-kb1bdu`,
                          "data-framer-name": `Content`,
                          children: l(`div`, {
                            className: `framer-101et7n`,
                            "data-framer-name": `Container`,
                            children: [
                              l(`div`, {
                                className: `framer-1gynuwz`,
                                "data-framer-name": `Left`,
                                children: [
                                  l(`div`, {
                                    className: `framer-1o1z00e`,
                                    "data-framer-name": `Content`,
                                    children: [
                                      o(A, {
                                        height: 13,
                                        children: o(D, {
                                          className: `framer-9bzoa9-container`,
                                          "data-framer-name": `Contact`,
                                          name: `Contact`,
                                          nodeId: `OPIYwwoa9`,
                                          scopeId: `sGcuUgaBJ`,
                                          children: o(U, {
                                            height: `100%`,
                                            id: `OPIYwwoa9`,
                                            layoutId: `OPIYwwoa9`,
                                            name: `Contact`,
                                            variant: Y(`pqmTc8b_A`),
                                            width: `100%`,
                                            XqtCAHGpt: `Reach out`,
                                          }),
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-14wc3ae`,
                                        "data-framer-name": `Heading and subtext`,
                                        children: [
                                          o(x, {
                                            __fromCanvasComponent: !0,
                                            children: o(t, {
                                              children: o(`h2`, {
                                                className: `framer-styles-preset-hcmt7i`,
                                                "data-styles-preset": `H4GEN39UP`,
                                                dir: `auto`,
                                                style: { "--framer-text-alignment": `left` },
                                                children: `Book Your Counselling Session`,
                                              }),
                                            }),
                                            className: `framer-16czdg2`,
                                            effect: Xe,
                                            fonts: [`Inter`],
                                            id: `16czdg2`,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(Ve, {
                                            __framer__animate: { transition: Z },
                                            __framer__animateOnce: !0,
                                            __framer__enter: X,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __fromCanvasComponent: !0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 0.75,
                                            children: o(t, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-qlsyr3`,
                                                "data-styles-preset": `YMpbOMTQr`,
                                                dir: `auto`,
                                                style: { "--framer-text-alignment": `left` },
                                                children: `Tell us about your academic background and goals. A CareerNova senior counsellor will review your profile and guide you through the next steps.`,
                                              }),
                                            }),
                                            className: `framer-1c3u5nr`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  R() &&
                                    o(F, {
                                      breakpoint: w,
                                      overrides: {
                                        D2cSMHZnI: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 3200,
                                            intrinsicWidth: 4800,
                                            pixelHeight: 3200,
                                            pixelWidth: 4800,
                                            positionX: `right`,
                                            positionY: `center`,
                                            sizes: `270px`,
                                            src: `../../assets/images/53AsHPSyCXktoHGup40sKjDhtFc-1fc986.webp`,
                                            srcSet: `../../assets/images/53AsHPSyCXktoHGup40sKjDhtFc.webp 512w,../../assets/images/53AsHPSyCXktoHGup40sKjDhtFc-e88117.webp 1024w,../../assets/images/53AsHPSyCXktoHGup40sKjDhtFc-b4920c.webp 2048w,../../assets/images/53AsHPSyCXktoHGup40sKjDhtFc-65af6c.webp 4096w,../../assets/images/53AsHPSyCXktoHGup40sKjDhtFc-1fc986.webp 4800w`,
                                          },
                                        },
                                      },
                                      children: o(se, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 3200,
                                          intrinsicWidth: 4800,
                                          pixelHeight: 3200,
                                          pixelWidth: 4800,
                                          positionX: `right`,
                                          positionY: `center`,
                                          sizes: `320px`,
                                          src: `../../assets/images/53AsHPSyCXktoHGup40sKjDhtFc-1fc986.webp`,
                                          srcSet: `../../assets/images/53AsHPSyCXktoHGup40sKjDhtFc.webp 512w,../../assets/images/53AsHPSyCXktoHGup40sKjDhtFc-e88117.webp 1024w,../../assets/images/53AsHPSyCXktoHGup40sKjDhtFc-b4920c.webp 2048w,../../assets/images/53AsHPSyCXktoHGup40sKjDhtFc-65af6c.webp 4096w,../../assets/images/53AsHPSyCXktoHGup40sKjDhtFc-1fc986.webp 4800w`,
                                        },
                                        className: `framer-su8mb3 hidden-1cgtl7h`,
                                        "data-framer-name": `Image`,
                                      }),
                                    }),
                                ],
                              }),
                              l(We, {
                                __framer__animate: { transition: Z },
                                __framer__animateOnce: !0,
                                __framer__enter: X,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-5mue0n`,
                                "data-framer-name": `Form`,
                                children: [
                                  o(`div`, {
                                    className: `framer-1c9xq7x`,
                                    "data-framer-name": `Form Contact`,
                                    children: o(ie, {
                                      action: `https://api.framer.com/forms/v1/forms/d15fc413-c970-4b0c-8aae-e1ba3c23680d/submit`,
                                      className: `framer-q62u99`,
                                      nodeId: `u4vV_ZHkq`,
                                      children: (e) =>
                                        l(d, {
                                          children: [
                                            l(`div`, {
                                              className: `framer-1diiter`,
                                              "data-framer-name": `Name and email`,
                                              children: [
                                                l(`label`, {
                                                  className: `framer-6xvhf7`,
                                                  children: [
                                                    o(x, {
                                                      __fromCanvasComponent: !0,
                                                      children: o(t, {
                                                        children: o(`p`, {
                                                          className: `framer-styles-preset-1xheykw`,
                                                          "data-styles-preset": `vz9muakNv`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                                          },
                                                          children: `Name`,
                                                        }),
                                                      }),
                                                      className: `framer-cd3ozb`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    o(M, {
                                                      className: `framer-msr7gh`,
                                                      inputName: `Name`,
                                                      placeholder: `Full name`,
                                                      required: !0,
                                                      type: `text`,
                                                    }),
                                                  ],
                                                }),
                                                l(`label`, {
                                                  className: `framer-uxp3qd`,
                                                  children: [
                                                    o(x, {
                                                      __fromCanvasComponent: !0,
                                                      children: o(t, {
                                                        children: o(`p`, {
                                                          className: `framer-styles-preset-1xheykw`,
                                                          "data-styles-preset": `vz9muakNv`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                                          },
                                                          children: `Email`,
                                                        }),
                                                      }),
                                                      className: `framer-1bugr2h`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    o(M, {
                                                      className: `framer-19frdig`,
                                                      inputName: `Email`,
                                                      placeholder: `Email address`,
                                                      required: !0,
                                                      type: `email`,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            l(`div`, {
                                              className: `framer-gqcjqb`,
                                              "data-framer-name": `Company and phone`,
                                              children: [
                                                l(`label`, {
                                                  className: `framer-1om20do`,
                                                  children: [
                                                    o(x, {
                                                      __fromCanvasComponent: !0,
                                                      children: o(t, {
                                                        children: o(`p`, {
                                                          className: `framer-styles-preset-1xheykw`,
                                                          "data-styles-preset": `vz9muakNv`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                                          },
                                                          children: `Company`,
                                                        }),
                                                      }),
                                                      className: `framer-182dqdc`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    o(M, {
                                                      className: `framer-1agcamn`,
                                                      inputName: `Company`,
                                                      placeholder: `Company name`,
                                                      required: !1,
                                                      type: `text`,
                                                    }),
                                                  ],
                                                }),
                                                l(`label`, {
                                                  className: `framer-nigg4v`,
                                                  children: [
                                                    o(x, {
                                                      __fromCanvasComponent: !0,
                                                      children: o(t, {
                                                        children: o(`p`, {
                                                          className: `framer-styles-preset-1xheykw`,
                                                          "data-styles-preset": `vz9muakNv`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                                          },
                                                          children: `Phone`,
                                                        }),
                                                      }),
                                                      className: `framer-1cfahrr`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    o(M, {
                                                      className: `framer-hgbzzs`,
                                                      inputName: `Phone`,
                                                      placeholder: `Phone number`,
                                                      required: !1,
                                                      type: `tel`,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            l(`label`, {
                                              className: `framer-kdy9yh`,
                                              "data-framer-name": `Message`,
                                              children: [
                                                o(x, {
                                                  __fromCanvasComponent: !0,
                                                  children: o(t, {
                                                    children: o(`p`, {
                                                      className: `framer-styles-preset-1xheykw`,
                                                      "data-styles-preset": `vz9muakNv`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                                      },
                                                      children: `Message`,
                                                    }),
                                                  }),
                                                  className: `framer-1kic5z3`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                o(M, {
                                                  className: `framer-1ny7tm1`,
                                                  inputName: `Message`,
                                                  placeholder: `Enter message`,
                                                  required: !1,
                                                  type: `textarea`,
                                                }),
                                              ],
                                            }),
                                            o(F, {
                                              breakpoint: w,
                                              overrides: {
                                                D2cSMHZnI: {
                                                  width: `calc(min(max(${g?.width || `100vw`} - 64px, 1px), 1300px) - 64px)`,
                                                },
                                                jKHGOp6xG: {
                                                  width: `calc(min(${g?.width || `100vw`}, 1300px) - 76px)`,
                                                },
                                              },
                                              children: o(A, {
                                                height: 47,
                                                width: `calc(max(min(max(${g?.width || `100vw`} - 64px, 1px), 1300px) * 0.68 - 120px, 1px) - 64px)`,
                                                children: o(D, {
                                                  className: `framer-cqupw0-container`,
                                                  "data-framer-name": `Book My Counselling Session`,
                                                  name: `Book My Counselling Session`,
                                                  nodeId: `gkXWo40wR`,
                                                  scopeId: `sGcuUgaBJ`,
                                                  children: o(G, {
                                                    height: `100%`,
                                                    id: `gkXWo40wR`,
                                                    layoutId: `gkXWo40wR`,
                                                    name: `Book My Counselling Session`,
                                                    style: { width: `100%` },
                                                    type: `submit`,
                                                    variant: Ze(
                                                      e,
                                                      {
                                                        error: `Vv_UAqUy1`,
                                                        incomplete: `wy_sIIrA4`,
                                                        pending: `gZH3QOljV`,
                                                        success: `vABjaDKXQ`,
                                                      },
                                                      Y(`KojPjH1u9`)
                                                    ),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                    }),
                                  }),
                                  l(`div`, {
                                    className: `framer-zjodr4`,
                                    "data-framer-name": `Contact`,
                                    children: [
                                      o(F, {
                                        breakpoint: w,
                                        overrides: {
                                          D2cSMHZnI: {
                                            width: `max((min(max(${g?.width || `100vw`} - 64px, 1px), 1300px) - 16px) / 2, 1px)`,
                                          },
                                          jKHGOp6xG: {
                                            width: `calc(min(${g?.width || `100vw`}, 1300px) - 32px)`,
                                          },
                                        },
                                        children: o(A, {
                                          height: 232,
                                          width: `max((max(min(max(${g?.width || `100vw`} - 64px, 1px), 1300px) * 0.68 - 120px, 1px) - 16px) / 2, 1px)`,
                                          children: o(D, {
                                            className: `framer-fjwvin-container`,
                                            "data-framer-name": `Book Counselling`,
                                            name: `Book Counselling`,
                                            nodeId: `Gdo9u88OJ`,
                                            scopeId: `sGcuUgaBJ`,
                                            children: o(q, {
                                              Ad6DUqH2O: `Call us today`,
                                              height: `100%`,
                                              id: `Gdo9u88OJ`,
                                              JXUp1fkxB: !0,
                                              layoutId: `Gdo9u88OJ`,
                                              M70qdS25o: `tel:+1(255) 800 54 007`,
                                              mMr0fZn6j: `Call Us Now`,
                                              name: `Book Counselling`,
                                              style: { width: `100%` },
                                              vwiM7ebbC: `You can call our support team for enquiries. Available 24/7`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      o(F, {
                                        breakpoint: w,
                                        overrides: {
                                          D2cSMHZnI: {
                                            width: `max((min(max(${g?.width || `100vw`} - 64px, 1px), 1300px) - 16px) / 2, 1px)`,
                                          },
                                          jKHGOp6xG: {
                                            width: `calc(min(${g?.width || `100vw`}, 1300px) - 32px)`,
                                          },
                                        },
                                        children: o(A, {
                                          height: 232,
                                          width: `max((max(min(max(${g?.width || `100vw`} - 64px, 1px), 1300px) * 0.68 - 120px, 1px) - 16px) / 2, 1px)`,
                                          children: o(D, {
                                            className: `framer-ki0hw8-container`,
                                            "data-framer-name": `Support`,
                                            name: `Support`,
                                            nodeId: `LzvH_8xYg`,
                                            scopeId: `sGcuUgaBJ`,
                                            children: o(F, {
                                              breakpoint: w,
                                              overrides: {
                                                jKHGOp6xG: { Ad6DUqH2O: `Support & help` },
                                              },
                                              children: o(q, {
                                                Ad6DUqH2O: `Send an email`,
                                                height: `100%`,
                                                id: `LzvH_8xYg`,
                                                JXUp1fkxB: !1,
                                                layoutId: `LzvH_8xYg`,
                                                M70qdS25o: `mailto:someone@example.com`,
                                                mMr0fZn6j: `Email Us Now`,
                                                name: `Support`,
                                                style: { width: `100%` },
                                                vwiM7ebbC: `Send our team an email and we'll get back to you within a day`,
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
        `.framer-cuuhq.framer-1shk7ck, .framer-cuuhq .framer-1shk7ck { display: block; }`,
        `.framer-cuuhq.framer-8law { align-content: center; align-items: center; background-color: var(--token-4942d7a0-e46d-4ae9-9080-79d660a8d22c, #121212); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-cuuhq .framer-b2pefh { flex: none; height: 1px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: 60px; width: 100%; z-index: 1; }`,
        `.framer-cuuhq .framer-4f7luk { align-content: center; align-items: center; background-color: var(--token-705c06af-cdcf-4608-86f8-396aaf15edc9, #001517); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-cuuhq .framer-jajw16-container, .framer-cuuhq .framer-cqupw0-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-cuuhq .framer-kb1bdu { align-content: center; align-items: center; background-color: var(--token-8597472e-8530-4424-91fc-d5043dad4450, #fffdf2); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 128px 32px 130px 32px; position: relative; width: 100%; z-index: 9; }`,
        `.framer-cuuhq .framer-101et7n { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: flex-start; max-width: 1300px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 9; }`,
        `.framer-cuuhq .framer-1gynuwz { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 32%; }`,
        `.framer-cuuhq .framer-1o1z00e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-cuuhq .framer-9bzoa9-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-cuuhq .framer-14wc3ae { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-cuuhq .framer-16czdg2 { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-cuuhq .framer-1c3u5nr { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; opacity: 0.75; position: relative; width: 100%; }`,
        `.framer-cuuhq .framer-su8mb3 { border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; flex: none; height: 240px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 320px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-cuuhq .framer-5mue0n { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-cuuhq .framer-1c9xq7x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-cuuhq .framer-q62u99 { align-content: flex-start; align-items: flex-start; background-color: var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, #ffffff); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 32px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-cuuhq .framer-1diiter { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-cuuhq .framer-6xvhf7, .framer-cuuhq .framer-uxp3qd, .framer-cuuhq .framer-1om20do, .framer-cuuhq .framer-nigg4v { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-cuuhq .framer-cd3ozb, .framer-cuuhq .framer-1bugr2h, .framer-cuuhq .framer-182dqdc, .framer-cuuhq .framer-1cfahrr, .framer-cuuhq .framer-1kic5z3 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-cuuhq .framer-msr7gh, .framer-cuuhq .framer-1agcamn { --framer-input-background: var(--token-8597472e-8530-4424-91fc-d5043dad4450, #fffdf2); --framer-input-border-radius-bottom-left: 12px; --framer-input-border-radius-bottom-right: 12px; --framer-input-border-radius-top-left: 12px; --framer-input-border-radius-top-right: 12px; --framer-input-focused-border-color: #d1eaff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-transition: all 0.3s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, #FFDB58); --framer-input-font-family: "Golos Text"; --framer-input-font-letter-spacing: -0.01em; --framer-input-font-line-height: 1.2em; --framer-input-font-open-type-features: 'salt' on; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 8px 8px 8px 16px; --framer-input-placeholder-color: var(--token-b3d581bc-3541-4047-b0a1-e263eb935a8f, rgba(8, 20, 46, 0.29)); flex: none; height: 48px; position: relative; width: 100%; }`,
        `.framer-cuuhq .framer-19frdig, .framer-cuuhq .framer-hgbzzs { --framer-input-background: var(--token-8597472e-8530-4424-91fc-d5043dad4450, #fffdf2); --framer-input-border-radius-bottom-left: 12px; --framer-input-border-radius-bottom-right: 12px; --framer-input-border-radius-top-left: 12px; --framer-input-border-radius-top-right: 12px; --framer-input-focused-border-color: #d1eaff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-transition: all 0.3s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, #FFDB58); --framer-input-font-family: "Golos Text"; --framer-input-font-letter-spacing: -0.01em; --framer-input-font-line-height: 1.2em; --framer-input-font-open-type-features: 'salt' on; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 8px 8px 8px 16px; --framer-input-placeholder-color: var(--token-b3d581bc-3541-4047-b0a1-e263eb935a8f, rgba(8, 20, 46, 0.29)); flex: none; height: 48px; position: relative; width: 100%; }`,
        `.framer-cuuhq .framer-gqcjqb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-cuuhq .framer-kdy9yh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-cuuhq .framer-1ny7tm1 { --framer-input-background: var(--token-8597472e-8530-4424-91fc-d5043dad4450, #fffdf2); --framer-input-border-radius-bottom-left: 12px; --framer-input-border-radius-bottom-right: 12px; --framer-input-border-radius-top-left: 12px; --framer-input-border-radius-top-right: 12px; --framer-input-focused-border-color: #d1eaff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-transition: all 0.3s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, #FFDB58); --framer-input-font-family: "Golos Text"; --framer-input-font-letter-spacing: -0.01em; --framer-input-font-line-height: 1.2em; --framer-input-font-open-type-features: 'salt' on; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 16px 8px 8px 16px; --framer-input-placeholder-color: var(--token-b3d581bc-3541-4047-b0a1-e263eb935a8f, rgba(8, 20, 46, 0.29)); --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 180px; position: relative; width: 100%; }`,
        `.framer-cuuhq .framer-zjodr4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-cuuhq .framer-fjwvin-container, .framer-cuuhq .framer-ki0hw8-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        ...ye,
        ...de,
        ...B,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-cuuhq.framer-8law { width: 810px; } .framer-cuuhq .framer-kb1bdu { align-content: flex-start; align-items: flex-start; justify-content: flex-start; } .framer-cuuhq .framer-101et7n { align-content: center; align-items: center; flex-direction: column; gap: 40px; } .framer-cuuhq .framer-1gynuwz { align-self: unset; flex-direction: row; gap: 100px; height: min-content; justify-content: flex-start; width: 100%; } .framer-cuuhq .framer-1o1z00e { flex: 1 0 0px; width: 1px; } .framer-cuuhq .framer-14wc3ae { gap: 10px; } .framer-cuuhq .framer-su8mb3 { height: 200px; width: 270px; } .framer-cuuhq .framer-5mue0n { flex: none; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-cuuhq.framer-8law { width: 390px; } .framer-cuuhq .framer-b2pefh { order: 1; } .framer-cuuhq .framer-4f7luk { order: 0; } .framer-cuuhq .framer-kb1bdu { flex-direction: column; padding: 0px; z-index: 1; } .framer-cuuhq .framer-101et7n { align-content: center; align-items: center; flex: none; flex-direction: column; gap: 40px; padding: 120px 16px 90px 16px; width: 100%; } .framer-cuuhq .framer-1gynuwz { align-self: unset; gap: 0px; height: min-content; justify-content: center; width: 100%; } .framer-cuuhq .framer-5mue0n, .framer-cuuhq .framer-6xvhf7, .framer-cuuhq .framer-uxp3qd, .framer-cuuhq .framer-1om20do, .framer-cuuhq .framer-nigg4v, .framer-cuuhq .framer-fjwvin-container, .framer-cuuhq .framer-ki0hw8-container { flex: none; width: 100%; } .framer-cuuhq .framer-1c9xq7x { max-width: 100%; } .framer-cuuhq .framer-q62u99 { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; padding: 22px; } .framer-cuuhq .framer-1diiter, .framer-cuuhq .framer-zjodr4 { flex-direction: column; } .framer-cuuhq .framer-gqcjqb { align-content: flex-start; align-items: flex-start; flex-direction: column; justify-content: flex-start; }}`,
      ],
      `framer-cuuhq`
    )),
    ($.displayName = `Home`),
    ($.defaultProps = { height: 2037.5, width: 1200 }),
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
            {
              cssFamilyName: `Golos Text`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Golos Text`,
              url: `../../assets/fonts/q5uXsoe9Lv5t7Meb31EcOR9UdVTNs822plVRRQ5ZEr8zXcyx.woff2`,
              weight: `400`,
            },
          ],
        },
        ...ze,
        ...Be,
        ...He,
        ...Ue,
        ...w(be),
        ...w(I),
        ...w(z),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([_(W, {}, t), _(U, {}, t), _(G, {}, t), _(q, {}, t)])
      ),
    }),
    (et = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramersGcuUgaBJ`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicHeight: `2037.5`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"D2cSMHZnI":{"layout":["fixed","auto"]},"jKHGOp6xG":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerScrollSections: `{"dmaaNgbVV":{"pattern":":dmaaNgbVV","name":"scroll-trigger"}}`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { et as __FramerMetadata__, $ as default, J as queryParamNames };
//# sourceMappingURL=zDmeA2Zv1_Jjqze31P6UyVS4w44ar0A9RLxNexBmae0.BdXJZPQZ.mjs.map
