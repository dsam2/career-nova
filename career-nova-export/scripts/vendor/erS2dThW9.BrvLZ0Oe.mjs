import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  _ as i,
  c as a,
  j as o,
  k as s,
  l as c,
  o as l,
  y as u,
} from "./react.CWkcPvHD.mjs";
import { T as d, a as f, r as ee, t as p } from "./motion.UJ_SjFSS.mjs";
import {
  A as m,
  P as h,
  T as g,
  Tt as _,
  U as v,
  W as y,
  Z as b,
  _t as x,
  ct as S,
  g as C,
  j as w,
  lt as te,
  o as T,
  wt as E,
} from "./framer.B5VSaEF1.mjs";
import { n as D, t as O } from "./SrcV65t7V.HrWPGov1.mjs";
import {
  _ as ne,
  b as k,
  d as A,
  f as j,
  g as M,
  h as N,
  l as re,
  m as P,
  p as ie,
  u as F,
  v as I,
  y as L,
} from "./shared-lib.Dlb4YuQV.mjs";
function R(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z = e(() => {
    (l(),
      b(),
      p(),
      r(),
      D(),
      k(),
      M(),
      j(),
      (z = v(O)),
      (B = {
        AHziRZ1h2: { hover: !0 },
        AScdeMxwS: { hover: !0 },
        ckPn2EswT: { hover: !0 },
        d5yIOSrIQ: { hover: !0 },
        IKSzx_isl: { hover: !0 },
      }),
      (V = [`AScdeMxwS`, `AHziRZ1h2`, `d5yIOSrIQ`, `ckPn2EswT`, `IKSzx_isl`]),
      (H = `framer-Xl5mj`),
      (U = {
        AHziRZ1h2: `framer-v-18a8r8k`,
        AScdeMxwS: `framer-v-39xvlj`,
        ckPn2EswT: `framer-v-1uc1f7v`,
        d5yIOSrIQ: `framer-v-waxsbe`,
        IKSzx_isl: `framer-v-1xg029q`,
      }),
      (W = { delay: 0, duration: 0.4, ease: [1, 0, 0.4, 1], type: `tween` }),
      (G = ({ value: e, children: t }) => {
        let r = o(f),
          i = e ?? r.transition,
          s = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: t });
      }),
      (K = {
        "Simple arrow": `ckPn2EswT`,
        Large: `IKSzx_isl`,
        Line: `d5yIOSrIQ`,
        Primary: `AScdeMxwS`,
        Simple: `AHziRZ1h2`,
      }),
      (q = d.create(t)),
      (J = ({
        bGFill: e,
        click: t,
        cTA: n,
        height: r,
        iconBG: i,
        iconColor: a,
        id: o,
        lineFill: s,
        link: c,
        newTab: l,
        textColor: u,
        width: d,
        ...f
      }) => ({
        ...f,
        dQDe2ecMb: c ?? f.dQDe2ecMb,
        GGZTVUGZ5:
          i ??
          f.GGZTVUGZ5 ??
          `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
        LALAatWUM: n ?? f.LALAatWUM ?? `Book Counselling`,
        lCPX_SQT2:
          s ??
          f.lCPX_SQT2 ??
          `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
        oAbfzaz1L:
          u ??
          f.oAbfzaz1L ??
          `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
        qkIJkdmKd: l ?? f.qkIJkdmKd ?? !1,
        Rc5BpQ_lm: t ?? f.Rc5BpQ_lm,
        tWCC8YneY:
          e ?? f.tWCC8YneY ?? `var(--token-c80313c8-a0c1-4f14-ad5e-9b2193d38589, rgb(178, 123, 0))`,
        variant: K[f.variant] ?? f.variant ?? `AScdeMxwS`,
        zkb7vpZI7:
          a ?? f.zkb7vpZI7 ?? `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = _(
        i(function (e, n) {
          let r = s(null),
            i = n ?? r,
            o = u(),
            { activeLocale: l, setLocale: f } = x();
          te();
          let {
              style: p,
              className: m,
              layoutId: _,
              variant: v,
              LALAatWUM: y,
              dQDe2ecMb: b,
              qkIJkdmKd: w,
              Rc5BpQ_lm: T,
              oAbfzaz1L: D,
              tWCC8YneY: k,
              zkb7vpZI7: A,
              GGZTVUGZ5: j,
              lCPX_SQT2: M,
              ...N
            } = J(e),
            {
              baseVariant: P,
              classNames: F,
              clearLoadingGesture: I,
              gestureHandlers: L,
              gestureVariant: z,
              isLoading: K,
              setGestureState: X,
              setVariant: Z,
              variants: Q,
            } = E({
              cycleOrder: V,
              defaultVariant: `AScdeMxwS`,
              enabledGestures: B,
              ref: i,
              variant: v,
              variantClassNames: U,
            }),
            $ = Y(e, Q),
            { activeVariantCallback: ae, delay: oe } = S(P),
            se = ae(async (...e) => {
              if ((X({ isPressed: !1 }), T && (await T(...e)) === !1)) return !1;
            }),
            ce = h(H, re, ie, ne),
            le = () => !(z === `IKSzx_isl-hover` || P === `IKSzx_isl`),
            ue = () =>
              !(
                [`AHziRZ1h2-hover`, `d5yIOSrIQ-hover`].includes(z) ||
                [`AHziRZ1h2`, `d5yIOSrIQ`].includes(P)
              );
          return a(ee, {
            id: _ ?? o,
            children: a(q, {
              animate: Q,
              initial: !1,
              children: a(G, {
                value: W,
                children: a(C, {
                  href: b,
                  motionChild: !0,
                  nodeId: `AScdeMxwS`,
                  openInNewTab: w,
                  scopeId: `erS2dThW9`,
                  smoothScroll: !0,
                  children: c(d.a, {
                    ...N,
                    ...L,
                    className: `${h(ce, `framer-39xvlj`, m, F)} framer-yhbd3f`,
                    "data-framer-name": `Primary`,
                    "data-highlight": !0,
                    layoutDependency: $,
                    layoutId: `AScdeMxwS`,
                    onTap: se,
                    ref: i,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backdropFilter: `none`,
                      backgroundColor: k,
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      boxShadow: `0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(255, 230, 0, 0.04), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(255, 230, 0, 0.03), 0px 10px 10px -3.75px rgba(255, 230, 0, 0.01)`,
                      WebkitBackdropFilter: `none`,
                      ...p,
                    },
                    variants: {
                      "AHziRZ1h2-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backdropFilter: `none`,
                        WebkitBackdropFilter: `none`,
                      },
                      "AScdeMxwS-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backdropFilter: `none`,
                        WebkitBackdropFilter: `none`,
                      },
                      ckPn2EswT: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backdropFilter: `none`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        WebkitBackdropFilter: `none`,
                      },
                      d5yIOSrIQ: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-c37d8c12-ca0f-4f26-9d55-9068aa3ad62f, rgba(255, 255, 255, 0.14))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backdropFilter: `blur(10px)`,
                        backgroundColor: M,
                        WebkitBackdropFilter: `blur(10px)`,
                      },
                      IKSzx_isl: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backdropFilter: `none`,
                        WebkitBackdropFilter: `none`,
                      },
                    },
                    ...R(
                      {
                        "AHziRZ1h2-hover": { "data-framer-name": void 0 },
                        "AScdeMxwS-hover": { "data-framer-name": void 0 },
                        "ckPn2EswT-hover": { "data-framer-name": void 0 },
                        "d5yIOSrIQ-hover": { "data-framer-name": void 0 },
                        "IKSzx_isl-hover": { "data-framer-name": void 0 },
                        AHziRZ1h2: { "data-framer-name": `Simple` },
                        ckPn2EswT: { "data-framer-name": `Simple arrow` },
                        d5yIOSrIQ: { "data-border": !0, "data-framer-name": `Line` },
                        IKSzx_isl: { "data-framer-name": `Large` },
                      },
                      P,
                      z
                    ),
                    children: [
                      c(d.div, {
                        className: `framer-17hpsvh`,
                        "data-framer-name": `Text`,
                        layoutDependency: $,
                        layoutId: `qQppJWQ2k`,
                        style: { opacity: 1 },
                        variants: {
                          "AHziRZ1h2-hover": { opacity: 0.9 },
                          "AScdeMxwS-hover": { opacity: 1 },
                          ckPn2EswT: { opacity: 1 },
                          d5yIOSrIQ: { opacity: 0.9 },
                          IKSzx_isl: { opacity: 1 },
                        },
                        children: [
                          a(g, {
                            __fromCanvasComponent: !0,
                            children: a(t, {
                              children: a(d.p, {
                                className: `framer-styles-preset-qlsyr3`,
                                "data-styles-preset": `YMpbOMTQr`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-oAbfzaz1L-erS2dThW9))`,
                                },
                                children: `Book Counselling`,
                              }),
                            }),
                            className: `framer-n434ag`,
                            fonts: [`Inter`],
                            layoutDependency: $,
                            layoutId: `zK5Tck5WP`,
                            style: {
                              "--extracted-r6o4lv": `var(--variable-reference-oAbfzaz1L-erS2dThW9)`,
                              "--framer-link-text-color": `rgb(255, 230, 0)`,
                              "--framer-link-text-decoration": `underline`,
                              "--variable-reference-oAbfzaz1L-erS2dThW9": D,
                            },
                            text: y,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...R(
                              {
                                ckPn2EswT: {
                                  children: a(t, {
                                    children: a(d.p, {
                                      className: `framer-styles-preset-1bsm36g`,
                                      "data-styles-preset": `V83vTwGC4`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-oAbfzaz1L-erS2dThW9))`,
                                      },
                                      children: `Book Counselling`,
                                    }),
                                  }),
                                },
                                d5yIOSrIQ: {
                                  children: a(t, {
                                    children: a(d.p, {
                                      className: `framer-styles-preset-1xheykw`,
                                      "data-styles-preset": `vz9muakNv`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-oAbfzaz1L-erS2dThW9))`,
                                      },
                                      children: `Book Counselling`,
                                    }),
                                  }),
                                },
                                IKSzx_isl: {
                                  children: a(t, {
                                    children: a(d.p, {
                                      className: `framer-styles-preset-1bsm36g`,
                                      "data-styles-preset": `V83vTwGC4`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-oAbfzaz1L-erS2dThW9))`,
                                      },
                                      children: `Book Counselling`,
                                    }),
                                  }),
                                },
                              },
                              P,
                              z
                            ),
                          }),
                          le() &&
                            a(g, {
                              __fromCanvasComponent: !0,
                              children: a(t, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-qlsyr3`,
                                  "data-styles-preset": `YMpbOMTQr`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-oAbfzaz1L-erS2dThW9))`,
                                  },
                                  children: `Book Counselling`,
                                }),
                              }),
                              className: `framer-g7muo8`,
                              fonts: [`Inter`],
                              layoutDependency: $,
                              layoutId: `JGD2uLNoU`,
                              style: {
                                "--extracted-r6o4lv": `var(--variable-reference-oAbfzaz1L-erS2dThW9)`,
                                "--framer-link-text-color": `rgb(255, 230, 0)`,
                                "--framer-link-text-decoration": `underline`,
                                "--variable-reference-oAbfzaz1L-erS2dThW9": D,
                              },
                              text: y,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...R(
                                {
                                  ckPn2EswT: {
                                    children: a(t, {
                                      children: a(d.p, {
                                        className: `framer-styles-preset-1bsm36g`,
                                        "data-styles-preset": `V83vTwGC4`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-oAbfzaz1L-erS2dThW9))`,
                                        },
                                        children: `Book Counselling`,
                                      }),
                                    }),
                                  },
                                  d5yIOSrIQ: {
                                    children: a(t, {
                                      children: a(d.p, {
                                        className: `framer-styles-preset-1xheykw`,
                                        "data-styles-preset": `vz9muakNv`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-oAbfzaz1L-erS2dThW9))`,
                                        },
                                        children: `Book Counselling`,
                                      }),
                                    }),
                                  },
                                },
                                P,
                                z
                              ),
                            }),
                        ],
                      }),
                      ue() &&
                        c(d.div, {
                          className: `framer-f97dkt`,
                          "data-framer-name": `arrow`,
                          layoutDependency: $,
                          layoutId: `UjqzDmVS6`,
                          style: {
                            backgroundColor: j,
                            borderBottomLeftRadius: 12,
                            borderBottomRightRadius: 12,
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                          },
                          variants: { ckPn2EswT: { backgroundColor: `rgba(0, 0, 0, 0)` } },
                          children: [
                            a(O, {
                              animated: !0,
                              className: `framer-164vrxp`,
                              layoutDependency: $,
                              layoutId: `h8jgPS5DF`,
                              style: { "--1335ju": 1.5, "--18mrqx2": A, "--3it368": 1 },
                            }),
                            a(O, {
                              animated: !0,
                              className: `framer-1ajydfw`,
                              layoutDependency: $,
                              layoutId: `cIETirIJG`,
                              style: { "--1335ju": 1.5, "--18mrqx2": A, "--3it368": 1 },
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
          `.framer-Xl5mj.framer-yhbd3f, .framer-Xl5mj .framer-yhbd3f { display: block; }`,
          `.framer-Xl5mj.framer-39xvlj { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; overflow: visible; padding: 5px 5px 5px 32px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-Xl5mj .framer-17hpsvh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 23px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-Xl5mj .framer-n434ag, .framer-Xl5mj .framer-g7muo8 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-Xl5mj .framer-f97dkt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 7px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Xl5mj .framer-164vrxp { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 24px; }`,
          `.framer-Xl5mj .framer-1ajydfw { aspect-ratio: 1 / 1; bottom: -25px; flex: none; height: auto; left: -25px; position: absolute; width: 24px; z-index: 1; }`,
          `.framer-Xl5mj.framer-v-18a8r8k.framer-39xvlj { padding: 10px 32px 10px 32px; }`,
          `.framer-Xl5mj.framer-v-18a8r8k .framer-17hpsvh, .framer-Xl5mj.framer-v-waxsbe .framer-17hpsvh { order: 1; }`,
          `.framer-Xl5mj.framer-v-waxsbe.framer-39xvlj { padding: 8px 22px 8px 22px; }`,
          `.framer-Xl5mj.framer-v-1uc1f7v.framer-39xvlj { gap: 4px; padding: 0px; }`,
          `.framer-Xl5mj.framer-v-1uc1f7v .framer-f97dkt { padding: 1px; }`,
          `.framer-Xl5mj.framer-v-1uc1f7v .framer-164vrxp, .framer-Xl5mj.framer-v-1uc1f7v .framer-1ajydfw { width: 26px; }`,
          `.framer-Xl5mj.framer-v-1xg029q.framer-39xvlj { gap: unset; justify-content: space-between; width: 400px; }`,
          `.framer-Xl5mj.framer-v-1xg029q .framer-17hpsvh { flex: 1 0 0px; height: min-content; width: 1px; }`,
          `.framer-Xl5mj.framer-v-1xg029q .framer-f97dkt { padding: 8px; }`,
          `.framer-Xl5mj.framer-v-1xg029q .framer-164vrxp, .framer-Xl5mj.framer-v-1xg029q .framer-1ajydfw { width: 25px; }`,
          `.framer-Xl5mj.framer-v-39xvlj.hover .framer-f97dkt { justify-content: flex-start; }`,
          `.framer-Xl5mj.framer-v-39xvlj.hover .framer-164vrxp, .framer-Xl5mj.framer-v-1uc1f7v.hover .framer-164vrxp, .framer-Xl5mj.framer-v-1xg029q.hover .framer-164vrxp { position: absolute; right: -25px; top: -25px; z-index: 1; }`,
          `.framer-Xl5mj.framer-v-39xvlj.hover .framer-1ajydfw, .framer-Xl5mj.framer-v-1uc1f7v.hover .framer-1ajydfw, .framer-Xl5mj.framer-v-1xg029q.hover .framer-1ajydfw { bottom: unset; left: unset; position: relative; }`,
          `.framer-Xl5mj.framer-v-18a8r8k.hover .framer-17hpsvh, .framer-Xl5mj.framer-v-waxsbe.hover .framer-17hpsvh, .framer-Xl5mj.framer-v-1xg029q.hover .framer-17hpsvh { justify-content: flex-end; }`,
          `.framer-Xl5mj.framer-v-18a8r8k.hover .framer-n434ag { z-index: 1; }`,
          `.framer-Xl5mj.framer-v-1xg029q.hover.framer-39xvlj { gap: unset; }`,
          ...F,
          ...P,
          ...I,
          `.framer-Xl5mj[data-border="true"]::after, .framer-Xl5mj [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Xl5mj`
      )),
      (X.displayName = `Button`),
      (X.defaultProps = { height: 48, width: 241.5 }),
      w(X, {
        variant: {
          options: [`AScdeMxwS`, `AHziRZ1h2`, `d5yIOSrIQ`, `ckPn2EswT`, `IKSzx_isl`],
          optionTitles: [`Primary`, `Simple`, `Line`, `Simple arrow`, `Large`],
          title: `Variant`,
          type: T.Enum,
        },
        LALAatWUM: {
          defaultValue: `Book Counselling`,
          displayTextArea: !1,
          title: `CTA`,
          type: T.String,
        },
        onLALAatWUMChange: { changes: `LALAatWUM`, type: T.ChangeHandler },
        dQDe2ecMb: { title: `Link`, type: T.Link },
        qkIJkdmKd: { defaultValue: !1, title: `New Tab`, type: T.Boolean },
        onqkIJkdmKdChange: { changes: `qkIJkdmKd`, type: T.ChangeHandler },
        Rc5BpQ_lm: { title: `Click`, type: T.EventHandler },
        oAbfzaz1L: {
          defaultValue: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
          title: `Text Color`,
          type: T.Color,
        },
        tWCC8YneY: {
          defaultValue: `var(--token-c80313c8-a0c1-4f14-ad5e-9b2193d38589, rgb(178, 123, 0)) /* {"name":"Blue 2"} */`,
          title: `BG Fill`,
          type: T.Color,
        },
        zkb7vpZI7: {
          defaultValue: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88)) /* {"name":"Blue D"} */`,
          title: `Icon Color`,
          type: T.Color,
        },
        GGZTVUGZ5: {
          defaultValue: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)) /* {"name":"White"} */`,
          title: `Icon BG`,
          type: T.Color,
        },
        lCPX_SQT2: {
          defaultValue: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05)) /* {"name":"W5"} */`,
          title: `Line Fill`,
          type: T.Color,
        },
      }),
      m(
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
          ...z,
          ...y(A),
          ...y(N),
          ...y(L),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { Z as n, X as t };
//# sourceMappingURL=erS2dThW9.BrvLZ0Oe.mjs.map
