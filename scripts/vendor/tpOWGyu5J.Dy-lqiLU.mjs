import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  F as n,
  M as r,
  P as i,
  R as a,
  T as o,
  _ as s,
  c,
  j as l,
  k as u,
  l as d,
  o as f,
  y as p,
} from "./react.CWkcPvHD.mjs";
import { G as m, T as h, a as g, r as _, t as v } from "./motion.UJ_SjFSS.mjs";
import {
  A as y,
  G as b,
  L as x,
  O as ee,
  P as S,
  T as C,
  Tt as w,
  U as T,
  W as E,
  Z as D,
  _t as O,
  g as k,
  i as A,
  j,
  lt as M,
  o as N,
  p as te,
  wt as ne,
} from "./framer.B5VSaEF1.mjs";
import { n as re, t as P } from "./SrcV65t7V.HrWPGov1.mjs";
import { g as F, h as I, m as ie, p as ae } from "./shared-lib.Dlb4YuQV.mjs";
import { i as oe, n as se, r as L, t as ce } from "./mdo3XsYBf.CjV_Nezm.mjs";
import { i as R, n as z, r as B, t as le } from "./GK8heJFj7.Bs6hOCzB.mjs";
function V(e) {
  let { children: n, intensity: r } = e,
    a = m(0),
    o = m(0);
  return (
    i(() => {
      let e = (e) => {
        let { clientX: n, clientY: i } = e,
          s = t.innerHeight,
          c = (n - t.innerWidth / 2) * r,
          l = (i - s / 2) * r;
        (a.set(c), o.set(l));
      };
      return (
        t.addEventListener(`mousemove`, e),
        () => {
          t.removeEventListener(`mousemove`, e);
        }
      );
    }, [r, a, o]),
    c(h.div, { style: { width: `100%`, height: `100%`, x: a, y: o }, children: n })
  );
}
var ue = e(() => {
    (a(),
      f(),
      o(),
      v(),
      D(),
      (V.defaultProps = { intensity: 0.05 }),
      j(V, {
        children: { type: N.ComponentInstance, title: `Content` },
        intensity: { type: N.Number, title: `Intensity`, min: 0, max: 1, step: 0.01 },
      }));
  }),
  H,
  U,
  W,
  G,
  de,
  K,
  q,
  J,
  Y,
  X,
  fe = e(() => {
    (f(),
      D(),
      v(),
      o(),
      re(),
      ue(),
      (H = T(P)),
      (U = T(V)),
      (W = `framer-1mLBb`),
      (G = { GSwPe_tCB: `framer-v-wl0gsw` }),
      (de = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (K = ({ value: e, children: t }) => {
        let n = l(g),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return c(g.Provider, { value: a, children: t });
      }),
      (q = h.create(n)),
      (J = ({ height: e, id: t, intensity: n, width: r, ...i }) => ({
        ...i,
        Btz1rNM5X: n ?? i.Btz1rNM5X ?? 0.05,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = w(
        s(function (e, t) {
          let n = u(null),
            r = t ?? n,
            i = p(),
            { activeLocale: a, setLocale: o } = O();
          M();
          let { style: s, className: l, layoutId: d, variant: f, Btz1rNM5X: m, ...g } = J(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = ne({ defaultVariant: `GSwPe_tCB`, ref: r, variant: f, variantClassNames: G }),
            k = Y(e, D),
            j = S(W);
          return c(_, {
            id: d ?? i,
            children: c(q, {
              animate: D,
              initial: !1,
              children: c(K, {
                value: de,
                children: c(h.div, {
                  ...g,
                  ...x,
                  className: S(j, `framer-wl0gsw`, l, y),
                  "data-framer-name": `Mouse Arrow`,
                  layoutDependency: k,
                  layoutId: `GSwPe_tCB`,
                  ref: r,
                  style: { ...s },
                  children: c(A, {
                    children: c(ee, {
                      className: `framer-147sykf-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: k,
                      layoutId: `uiPuWOD8C-container`,
                      nodeId: `uiPuWOD8C`,
                      rendersWithMotion: !0,
                      scopeId: `yPaseVdSs`,
                      children: c(V, {
                        height: `100%`,
                        id: `uiPuWOD8C`,
                        intensity: m,
                        layoutId: `uiPuWOD8C`,
                        width: `100%`,
                        children: c(h.div, {
                          className: `framer-73w4iy`,
                          "data-framer-name": `Arrow`,
                          layoutDependency: k,
                          layoutId: `HRWq1OoQq`,
                          style: {
                            backgroundColor: `var(--token-c80313c8-a0c1-4f14-ad5e-9b2193d38589, rgb(178, 123, 0))`,
                            borderBottomLeftRadius: 100,
                            borderBottomRightRadius: 100,
                            borderTopLeftRadius: 100,
                            borderTopRightRadius: 100,
                          },
                          children: c(P, {
                            animated: !0,
                            className: `framer-1ubydos`,
                            layoutDependency: k,
                            layoutId: `m0VoH_H3i`,
                            style: {
                              "--1335ju": 1.1,
                              "--18mrqx2": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                              "--3it368": 1,
                            },
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-1mLBb.framer-awodi0, .framer-1mLBb .framer-awodi0 { display: block; }`,
          `.framer-1mLBb.framer-wl0gsw { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 14.068181991577148px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-1mLBb .framer-147sykf-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-1mLBb .framer-73w4iy { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 17px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1mLBb .framer-1ubydos { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 38px; }`,
        ],
        `framer-1mLBb`
      )),
      (X.displayName = `Mouse Arrow`),
      (X.defaultProps = { height: 72, width: 72 }),
      j(X, {
        Btz1rNM5X: {
          defaultValue: 0.05,
          max: 1,
          min: 0,
          step: 0.01,
          title: `Intensity`,
          type: N.Number,
        },
        onBtz1rNM5XChange: { changes: `Btz1rNM5X`, type: N.ChangeHandler },
      }),
      y(X, [{ explicitInter: !0, fonts: [] }, ...H, ...U], { supportsExplicitInterCodegen: !0 }));
  });
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var pe,
  me,
  he,
  ge,
  _e,
  ve,
  Q,
  ye,
  be,
  xe,
  Se,
  Ce,
  we,
  $,
  Te = e(() => {
    (f(),
      D(),
      v(),
      o(),
      R(),
      oe(),
      F(),
      fe(),
      (pe = T(X)),
      (me = { X4mawqGhb: { hover: !0 } }),
      (he = [`X4mawqGhb`, `wZCHWxi97`]),
      (ge = `framer-5UXON`),
      (_e = { wZCHWxi97: `framer-v-k332o1`, X4mawqGhb: `framer-v-15umzd9` }),
      (ve = { delay: 0.1, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Q = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ye = (e, t) => `translate(-50%, -50%) ${t}`),
      (be = ({ value: e, children: t }) => {
        let n = l(g),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return c(g.Provider, { value: a, children: t });
      }),
      (xe = { Main: `X4mawqGhb`, Phone: `wZCHWxi97` }),
      (Se = h.create(n)),
      (Ce = ({
        height: e,
        id: t,
        image: n,
        link: r,
        service: i,
        stat: a,
        tag: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        fsllypOej:
          s ??
          l.fsllypOej ??
          `How We Helped A Manufacturing Firm Scale Operations Across Three Regions`,
        H3udW32Bc: o ?? l.H3udW32Bc ?? `Real estate`,
        jx2PsilzR: n ??
          l.jx2PsilzR ?? {
            alt: ``,
            pixelHeight: 1333,
            pixelWidth: 2e3,
            src: `https://framerusercontent.com/images/w0alFqcJqI8Uqhv9awWwqLUDJQ.jpg?width=2000&height=1333`,
            srcSet: `https://framerusercontent.com/images/w0alFqcJqI8Uqhv9awWwqLUDJQ.jpg?scale-down-to=512&width=2000&height=1333 512w,https://framerusercontent.com/images/w0alFqcJqI8Uqhv9awWwqLUDJQ.jpg?scale-down-to=1024&width=2000&height=1333 1024w,https://framerusercontent.com/images/w0alFqcJqI8Uqhv9awWwqLUDJQ.jpg?width=2000&height=1333 2000w`,
          },
        KkQf7cJ4L: i ?? l.KkQf7cJ4L ?? `Consulting`,
        qseMxDcHx: a ?? l.qseMxDcHx ?? `+42% Operational Efficiency`,
        ten_bIQOV: r ?? l.ten_bIQOV,
        variant: xe[l.variant] ?? l.variant ?? `X4mawqGhb`,
      })),
      (we = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = w(
        s(function (e, t) {
          let r = u(null),
            i = t ?? r,
            a = p(),
            { activeLocale: o, setLocale: s } = O(),
            l = M(),
            {
              style: f,
              className: m,
              layoutId: g,
              variant: v,
              fsllypOej: y,
              KkQf7cJ4L: x,
              qseMxDcHx: w,
              jx2PsilzR: T,
              H3udW32Bc: E,
              ten_bIQOV: D,
              ...j
            } = Ce(e),
            {
              baseVariant: N,
              classNames: re,
              clearLoadingGesture: P,
              gestureHandlers: F,
              gestureVariant: I,
              isLoading: ie,
              setGestureState: oe,
              setVariant: se,
              variants: L,
            } = ne({
              cycleOrder: he,
              defaultVariant: `X4mawqGhb`,
              enabledGestures: me,
              ref: i,
              variant: v,
              variantClassNames: _e,
            }),
            R = we(e, L),
            z = S(ge, ce, ae, le),
            B = () => N !== `wZCHWxi97`;
          return c(_, {
            id: g ?? a,
            children: c(Se, {
              animate: L,
              initial: !1,
              children: c(be, {
                value: ve,
                children: c(k, {
                  href: D,
                  motionChild: !0,
                  nodeId: `X4mawqGhb`,
                  openInNewTab: !1,
                  scopeId: `tpOWGyu5J`,
                  children: d(h.a, {
                    ...j,
                    ...F,
                    className: `${S(z, `framer-15umzd9`, m, re)} framer-nyb6mu`,
                    "data-framer-name": `Main`,
                    layoutDependency: R,
                    layoutId: `X4mawqGhb`,
                    ref: i,
                    style: { ...f },
                    ...Z(
                      {
                        "X4mawqGhb-hover": { "data-framer-name": void 0 },
                        wZCHWxi97: { "data-framer-name": `Phone` },
                      },
                      N,
                      I
                    ),
                    children: [
                      d(h.div, {
                        className: `framer-17ilj43`,
                        layoutDependency: R,
                        layoutId: `wa62lMHF9`,
                        style: {
                          borderBottomLeftRadius: 18,
                          borderBottomRightRadius: 18,
                          borderTopLeftRadius: 18,
                          borderTopRightRadius: 18,
                        },
                        variants: {
                          wZCHWxi97: {
                            borderBottomLeftRadius: 14,
                            borderBottomRightRadius: 14,
                            borderTopLeftRadius: 14,
                            borderTopRightRadius: 14,
                          },
                        },
                        children: [
                          c(h.div, {
                            className: `framer-1kxg8fp`,
                            "data-framer-name": `Tag`,
                            layoutDependency: R,
                            layoutId: `PASPGaYsZ`,
                            style: {
                              backdropFilter: `blur(9px)`,
                              backgroundColor: `var(--token-0f910912-547e-47c2-97e8-c09de715499c, rgba(0, 0, 0, 0.22))`,
                              borderBottomLeftRadius: 19,
                              borderBottomRightRadius: 19,
                              borderTopLeftRadius: 19,
                              borderTopRightRadius: 19,
                              WebkitBackdropFilter: `blur(9px)`,
                            },
                            children: c(C, {
                              __fromCanvasComponent: !0,
                              children: c(n, {
                                children: c(h.p, {
                                  className: `framer-styles-preset-115hxpd`,
                                  "data-styles-preset": `mdo3XsYBf`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                  },
                                  children: `Real estate`,
                                }),
                              }),
                              className: `framer-1lgk0hu`,
                              fonts: [`Inter`],
                              layoutDependency: R,
                              layoutId: `J_EHLIOaF`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                "--framer-link-text-color": `rgb(255, 230, 0)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: E,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          c(te, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 1333,
                              intrinsicWidth: 2e3,
                              loading: b(
                                (l?.y || 0) +
                                  0 +
                                  ((l?.height || 530) -
                                    0 -
                                    (310 +
                                      Math.max(0, ((l?.height || 530) - 0 - 330) / 1) * 1 +
                                      20) +
                                    0 +
                                    0) +
                                  0
                              ),
                              pixelHeight: 1333,
                              pixelWidth: 2e3,
                              sizes: l?.width || `100vw`,
                              ...Q(T),
                            },
                            className: `framer-1u2959n`,
                            layoutDependency: R,
                            layoutId: `Dz7nSQrid`,
                            ...Z(
                              {
                                wZCHWxi97: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1333,
                                    intrinsicWidth: 2e3,
                                    loading: b(
                                      (l?.y || 0) +
                                        0 +
                                        ((l?.height || 380) -
                                          0 -
                                          (220 +
                                            Math.max(0, ((l?.height || 380) - 0 - 234) / 1) * 1 +
                                            14) +
                                          0 +
                                          0) +
                                        0
                                    ),
                                    pixelHeight: 1333,
                                    pixelWidth: 2e3,
                                    sizes: l?.width || `100vw`,
                                    ...Q(T),
                                  },
                                },
                              },
                              N,
                              I
                            ),
                          }),
                          c(A, {
                            height: 72,
                            y:
                              (l?.y || 0) +
                              0 +
                              ((l?.height || 530) -
                                0 -
                                (310 + Math.max(0, ((l?.height || 530) - 0 - 330) / 1) * 1 + 20) +
                                0 +
                                0) +
                              119.3033,
                            ...Z(
                              {
                                wZCHWxi97: {
                                  y:
                                    (l?.y || 0) +
                                    0 +
                                    ((l?.height || 380) -
                                      0 -
                                      (220 +
                                        Math.max(0, ((l?.height || 380) - 0 - 234) / 1) * 1 +
                                        14) +
                                      0 +
                                      0) +
                                    74.2153,
                                },
                              },
                              N,
                              I
                            ),
                            children: c(ee, {
                              className: `framer-5lfkbb-container`,
                              layoutDependency: R,
                              layoutId: `a5Jd2ug21-container`,
                              nodeId: `a5Jd2ug21`,
                              rendersWithMotion: !0,
                              scopeId: `tpOWGyu5J`,
                              style: { scale: 0 },
                              transformTemplate: ye,
                              variants: { "X4mawqGhb-hover": { scale: 1 } },
                              children: c(X, {
                                Btz1rNM5X: 0.26,
                                height: `100%`,
                                id: `a5Jd2ug21`,
                                layoutId: `a5Jd2ug21`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                      }),
                      d(h.div, {
                        className: `framer-1bywyox`,
                        "data-framer-name": `Container`,
                        layoutDependency: R,
                        layoutId: `A53qpa_6C`,
                        children: [
                          d(h.div, {
                            className: `framer-1qqx7g7`,
                            layoutDependency: R,
                            layoutId: `yG9GV3puI`,
                            children: [
                              d(h.div, {
                                className: `framer-y6fnkr`,
                                "data-framer-name": `Content`,
                                layoutDependency: R,
                                layoutId: `x86WeBYOF`,
                                children: [
                                  c(C, {
                                    __fromCanvasComponent: !0,
                                    children: c(n, {
                                      children: c(h.p, {
                                        className: `framer-styles-preset-1xheykw`,
                                        "data-styles-preset": `vz9muakNv`,
                                        dir: `auto`,
                                        children: `Consulting`,
                                      }),
                                    }),
                                    className: `framer-18mls9q`,
                                    fonts: [`Inter`],
                                    layoutDependency: R,
                                    layoutId: `atbREVDaw`,
                                    style: {
                                      "--framer-link-text-color": `rgb(255, 230, 0)`,
                                      "--framer-link-text-decoration": `underline`,
                                      opacity: 0.75,
                                    },
                                    text: x,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  B() &&
                                    c(h.div, {
                                      className: `framer-1plp36s`,
                                      "data-framer-name": `Dot`,
                                      layoutDependency: R,
                                      layoutId: `kq3koWHw9`,
                                      style: {
                                        backgroundColor: `var(--token-c80313c8-a0c1-4f14-ad5e-9b2193d38589, rgb(178, 123, 0))`,
                                        borderBottomLeftRadius: 30,
                                        borderBottomRightRadius: 30,
                                        borderTopLeftRadius: 30,
                                        borderTopRightRadius: 30,
                                        opacity: 0.9,
                                      },
                                    }),
                                  B() &&
                                    c(C, {
                                      __fromCanvasComponent: !0,
                                      children: c(n, {
                                        children: c(h.p, {
                                          className: `framer-styles-preset-1xheykw`,
                                          "data-styles-preset": `vz9muakNv`,
                                          dir: `auto`,
                                          children: `+42% Operational Efficiency`,
                                        }),
                                      }),
                                      className: `framer-lriycd`,
                                      fonts: [`Inter`],
                                      layoutDependency: R,
                                      layoutId: `Bs87r0mH2`,
                                      style: {
                                        "--framer-link-text-color": `rgb(255, 230, 0)`,
                                        "--framer-link-text-decoration": `underline`,
                                        opacity: 0.75,
                                      },
                                      text: w,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                ],
                              }),
                              c(h.div, {
                                className: `framer-ux6344`,
                                "data-framer-name": `Title`,
                                layoutDependency: R,
                                layoutId: `yOG3PU3HK`,
                                children: c(C, {
                                  __fromCanvasComponent: !0,
                                  children: c(n, {
                                    children: c(h.h4, {
                                      className: `framer-styles-preset-hpamux`,
                                      "data-styles-preset": `GK8heJFj7`,
                                      dir: `auto`,
                                      children: `How We Helped A Manufacturing Firm Scale Operations Across Three Regions`,
                                    }),
                                  }),
                                  className: `framer-enkd0c`,
                                  fonts: [`Inter`],
                                  layoutDependency: R,
                                  layoutId: `lqWNuxA4k`,
                                  style: {
                                    "--framer-link-text-color": `rgb(255, 230, 0)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: y,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          c(h.div, {
                            className: `framer-ux9rk2`,
                            "data-framer-name": `Line`,
                            layoutDependency: R,
                            layoutId: `p3Gf1kPMP`,
                            style: {
                              backgroundColor: `var(--token-11f97a4c-509b-4690-8509-2eaf42b6e39a, rgba(255, 219, 88, 0.12))`,
                            },
                            children: c(h.div, {
                              className: `framer-11q72ua`,
                              "data-framer-name": `Line`,
                              layoutDependency: R,
                              layoutId: `Dk7jcKJ02`,
                              style: {
                                backgroundColor: `var(--token-2102cf31-f5f6-4625-9a76-51847e9aba45, #FFBF00)`,
                              },
                            }),
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
          `.framer-5UXON.framer-nyb6mu, .framer-5UXON .framer-nyb6mu { display: block; }`,
          `.framer-5UXON.framer-15umzd9 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 530px; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 740px; }`,
          `.framer-5UXON .framer-17ilj43 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 310px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-5UXON .framer-1kxg8fp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; left: 15px; overflow: var(--overflow-clip-fallback, clip); padding: 5px 14px 5px 14px; position: absolute; top: 15px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-5UXON .framer-1lgk0hu, .framer-5UXON .framer-18mls9q, .framer-5UXON .framer-lriycd { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-5UXON .framer-1u2959n { flex: none; height: 100%; overflow: visible; position: relative; width: 100%; z-index: 0; }`,
          `.framer-5UXON .framer-5lfkbb-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: auto; z-index: 1; }`,
          `.framer-5UXON .framer-1bywyox { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: hidden; padding: 0px 6px 32px 6px; position: relative; width: 100%; z-index: 3; }`,
          `.framer-5UXON .framer-1qqx7g7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-5UXON .framer-y6fnkr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-5UXON .framer-1plp36s { flex: none; height: 5px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 5px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-5UXON .framer-ux6344 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-5UXON .framer-enkd0c { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 450px; position: relative; width: 100%; }`,
          `.framer-5UXON .framer-ux9rk2 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-start; left: 6px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: 6px; z-index: 1; }`,
          `.framer-5UXON .framer-11q72ua { flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 0%; z-index: 1; }`,
          `.framer-5UXON.framer-v-k332o1.framer-15umzd9 { cursor: unset; gap: 14px; height: 380px; width: 420px; }`,
          `.framer-5UXON.framer-v-k332o1 .framer-17ilj43 { height: 220px; }`,
          `.framer-5UXON.framer-v-k332o1 .framer-1kxg8fp { left: 14px; top: 14px; }`,
          `.framer-5UXON.framer-v-k332o1 .framer-1qqx7g7 { gap: 4px; order: 1; }`,
          `.framer-5UXON.framer-v-k332o1 .framer-18mls9q { order: 1; }`,
          `.framer-5UXON.framer-v-k332o1 .framer-ux9rk2 { order: 0; }`,
          `.framer-5UXON.framer-v-15umzd9.hover .framer-11q72ua { width: 100%; }`,
          ...se,
          ...ie,
          ...z,
        ],
        `framer-5UXON`
      )),
      ($.displayName = `Case Card`),
      ($.defaultProps = { height: 530, width: 740 }),
      j($, {
        variant: {
          options: [`X4mawqGhb`, `wZCHWxi97`],
          optionTitles: [`Main`, `Phone`],
          title: `Variant`,
          type: N.Enum,
        },
        fsllypOej: {
          defaultValue: `How We Helped A Manufacturing Firm Scale Operations Across Three Regions`,
          displayTextArea: !1,
          title: `Title`,
          type: N.String,
        },
        onfsllypOejChange: { changes: `fsllypOej`, type: N.ChangeHandler },
        KkQf7cJ4L: {
          defaultValue: `Consulting`,
          displayTextArea: !1,
          title: `Service`,
          type: N.String,
        },
        onKkQf7cJ4LChange: { changes: `KkQf7cJ4L`, type: N.ChangeHandler },
        qseMxDcHx: {
          defaultValue: `+42% Operational Efficiency`,
          displayTextArea: !1,
          title: `Stat`,
          type: N.String,
        },
        onqseMxDcHxChange: { changes: `qseMxDcHx`, type: N.ChangeHandler },
        jx2PsilzR: {
          __defaultAssetReference: `data:framer/asset-reference,w0alFqcJqI8Uqhv9awWwqLUDJQ.jpg?originalFilename=2147704547.jpg&width=2000&height=1333`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,w0alFqcJqI8Uqhv9awWwqLUDJQ.jpg?originalFilename=2147704547.jpg&width=2000&height=1333`,
          },
          title: `Image`,
          type: N.ResponsiveImage,
        },
        H3udW32Bc: {
          defaultValue: `Real estate`,
          displayTextArea: !1,
          title: `Tag`,
          type: N.String,
        },
        onH3udW32BcChange: { changes: `H3udW32Bc`, type: N.ChangeHandler },
        ten_bIQOV: { title: `Link`, type: N.Link },
      }),
      y(
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
          ...pe,
          ...E(L),
          ...E(I),
          ...E(B),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([x(X, {}, t)])) }));
  });
export { Te as n, $ as t };
//# sourceMappingURL=tpOWGyu5J.Dy-lqiLU.mjs.map
