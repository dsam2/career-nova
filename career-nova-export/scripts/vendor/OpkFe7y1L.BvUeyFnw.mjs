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
import { T as d, a as f, r as p, t as m } from "./motion.UJ_SjFSS.mjs";
import {
  A as h,
  Dt as g,
  P as _,
  T as v,
  Tt as y,
  W as b,
  Z as x,
  _t as S,
  j as C,
  lt as w,
  o as T,
  wt as E,
} from "./framer.B5VSaEF1.mjs";
import { g as D, h as O, m as k, p as A } from "./shared-lib.Dlb4YuQV.mjs";
function j(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q = e(() => {
    (l(),
      x(),
      m(),
      r(),
      D(),
      (M = g(d.div)),
      (N = { KojPjH1u9: { hover: !0 } }),
      (P = [`KojPjH1u9`, `gZH3QOljV`, `wy_sIIrA4`, `vABjaDKXQ`, `Vv_UAqUy1`]),
      (F = `framer-ncS1n`),
      (I = {
        gZH3QOljV: `framer-v-1cq0v2j`,
        KojPjH1u9: `framer-v-3p3d3s`,
        vABjaDKXQ: `framer-v-ms30og`,
        Vv_UAqUy1: `framer-v-d413a2`,
        wy_sIIrA4: `framer-v-1uvz2d8`,
      }),
      (L = { delay: 0, duration: 0.5, ease: [0.93, 0.21, 0.42, 0.97], type: `tween` }),
      (R = (e, t) => `translateX(-50%) ${t}`),
      (z = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (B = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (V = ({ value: e, children: t }) => {
        let r = o(f),
          i = e ?? r.transition,
          s = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: t });
      }),
      (H = {
        Default: `KojPjH1u9`,
        Disabled: `wy_sIIrA4`,
        Error: `Vv_UAqUy1`,
        Loading: `gZH3QOljV`,
        Success: `vABjaDKXQ`,
      }),
      (U = d.create(t)),
      (W = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: H[r.variant] ?? r.variant ?? `KojPjH1u9`,
      })),
      (G = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = y(
        i(function (e, n) {
          let r = s(null),
            i = n ?? r,
            o = u(),
            { activeLocale: l, setLocale: f } = S();
          w();
          let { style: m, className: h, layoutId: g, variant: y, ...b } = W(e),
            {
              baseVariant: x,
              classNames: C,
              clearLoadingGesture: T,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: k,
              setGestureState: H,
              setVariant: K,
              variants: q,
            } = E({
              cycleOrder: P,
              defaultVariant: `KojPjH1u9`,
              enabledGestures: N,
              ref: i,
              variant: y,
              variantClassNames: I,
            }),
            J = G(e, q),
            Y = _(F, A),
            X = () => x !== `gZH3QOljV`,
            Z = () => ![`wy_sIIrA4`, `vABjaDKXQ`, `Vv_UAqUy1`].includes(x),
            Q = () => x === `gZH3QOljV`;
          return a(p, {
            id: g ?? o,
            children: a(U, {
              animate: q,
              initial: !1,
              children: a(V, {
                value: L,
                children: c(d.button, {
                  ...b,
                  ...D,
                  className: _(Y, `framer-3p3d3s`, h, C),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: J,
                  layoutId: `KojPjH1u9`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                    borderBottomLeftRadius: 14,
                    borderBottomRightRadius: 14,
                    borderTopLeftRadius: 14,
                    borderTopRightRadius: 14,
                    opacity: 1,
                    ...m,
                  },
                  variants: {
                    "KojPjH1u9-hover": {
                      backgroundColor: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                      opacity: 1,
                    },
                    vABjaDKXQ: { opacity: 1 },
                    Vv_UAqUy1: { backgroundColor: `rgb(255, 196, 205)`, opacity: 1 },
                    wy_sIIrA4: { opacity: 0.9 },
                  },
                  ...j(
                    {
                      "KojPjH1u9-hover": { "data-framer-name": void 0 },
                      gZH3QOljV: { "data-framer-name": `Loading` },
                      vABjaDKXQ: { "data-framer-name": `Success` },
                      Vv_UAqUy1: { "data-framer-name": `Error` },
                      wy_sIIrA4: { "data-framer-name": `Disabled` },
                    },
                    x,
                    O
                  ),
                  children: [
                    X() &&
                      a(v, {
                        __fromCanvasComponent: !0,
                        children: a(t, {
                          children: a(d.p, {
                            className: `framer-styles-preset-1xheykw`,
                            "data-styles-preset": `vz9muakNv`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                            },
                            children: `Send message`,
                          }),
                        }),
                        className: `framer-1mjv1ba`,
                        fonts: [`Inter`],
                        layoutDependency: J,
                        layoutId: `NhPIGSrPm`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(255, 230, 0)`,
                          "--framer-link-text-decoration": `underline`,
                          opacity: 1,
                          rotateX: 0,
                          transformPerspective: 500,
                        },
                        variants: {
                          "KojPjH1u9-hover": { opacity: 0, rotateX: 60 },
                          Vv_UAqUy1: { "--extracted-r6o4lv": `rgb(191, 0, 0)` },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...j(
                          {
                            "KojPjH1u9-hover": { transformTemplate: R },
                            vABjaDKXQ: {
                              children: a(t, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-1xheykw`,
                                  "data-styles-preset": `vz9muakNv`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                  },
                                  children: `Message sent. Thank you!`,
                                }),
                              }),
                            },
                            Vv_UAqUy1: {
                              children: a(t, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-1xheykw`,
                                  "data-styles-preset": `vz9muakNv`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(191, 0, 0))`,
                                  },
                                  children: `Something went wrong`,
                                }),
                              }),
                            },
                          },
                          x,
                          O
                        ),
                      }),
                    Z() &&
                      a(v, {
                        __fromCanvasComponent: !0,
                        children: a(t, {
                          children: a(d.p, {
                            className: `framer-styles-preset-1xheykw`,
                            "data-styles-preset": `vz9muakNv`,
                            dir: `auto`,
                            children: `Send message`,
                          }),
                        }),
                        className: `framer-awgt7u`,
                        fonts: [`Inter`],
                        layoutDependency: J,
                        layoutId: `DaPfGZ_g1`,
                        style: {
                          "--framer-link-text-color": `rgb(255, 230, 0)`,
                          "--framer-link-text-decoration": `underline`,
                          opacity: 0,
                          rotateX: -60,
                          transformPerspective: 500,
                        },
                        transformTemplate: R,
                        variants: {
                          "KojPjH1u9-hover": {
                            "--extracted-r6o4lv": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                            opacity: 1,
                            rotateX: 0,
                            transformPerspective: void 0,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...j(
                          {
                            "KojPjH1u9-hover": {
                              children: a(t, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-1xheykw`,
                                  "data-styles-preset": `vz9muakNv`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88)))`,
                                  },
                                  children: `Send message`,
                                }),
                              }),
                              transformTemplate: void 0,
                            },
                          },
                          x,
                          O
                        ),
                      }),
                    Q() &&
                      a(d.div, {
                        className: `framer-1f2m6cx`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: J,
                        layoutId: `NBWnFxXxK`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: a(M, {
                          __framer__loop: B,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: z,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-mv6swv`,
                          "data-framer-name": `Conic`,
                          layoutDependency: J,
                          layoutId: `wRjXOvgyy`,
                          style: {
                            background: `conic-gradient(from 0deg at 50% 50%, rgb(13, 13, 13) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            gZH3QOljV: {
                              mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            },
                          },
                          children: a(d.div, {
                            className: `framer-hefk85`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: J,
                            layoutId: `ejRABZm02`,
                            style: {
                              backgroundColor: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: R,
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
          `.framer-ncS1n.framer-br7evs, .framer-ncS1n .framer-br7evs { display: block; }`,
          `.framer-ncS1n.framer-3p3d3s { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 12px 28px 12px 28px; position: relative; width: min-content; }`,
          `.framer-ncS1n .framer-1mjv1ba { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-ncS1n .framer-awgt7u { bottom: -1px; flex: none; height: auto; left: 50%; position: absolute; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-ncS1n .framer-1f2m6cx { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: auto; overflow: hidden; position: relative; width: 20px; }`,
          `.framer-ncS1n .framer-mv6swv { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-ncS1n .framer-hefk85 { aspect-ratio: 1 / 1; flex: none; height: auto; left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-ncS1n.framer-v-1cq0v2j.framer-3p3d3s, .framer-ncS1n.framer-v-1uvz2d8.framer-3p3d3s, .framer-ncS1n.framer-v-ms30og.framer-3p3d3s, .framer-ncS1n.framer-v-d413a2.framer-3p3d3s { cursor: unset; }`,
          `.framer-ncS1n.framer-v-1cq0v2j .framer-mv6swv { overflow: hidden; }`,
          `.framer-ncS1n.framer-v-3p3d3s.hover .framer-1mjv1ba { left: 50%; position: absolute; top: -1px; z-index: 1; }`,
          `.framer-ncS1n.framer-v-3p3d3s.hover .framer-awgt7u { bottom: unset; left: unset; position: relative; }`,
          ...k,
        ],
        `framer-ncS1n`
      )),
      (K.displayName = `Form button`),
      (K.defaultProps = { height: 47, width: 165 }),
      C(K, {
        variant: {
          options: [`KojPjH1u9`, `gZH3QOljV`, `wy_sIIrA4`, `vABjaDKXQ`, `Vv_UAqUy1`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: T.Enum,
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
          ...b(O),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { q as n, K as t };
//# sourceMappingURL=OpkFe7y1L.BvUeyFnw.mjs.map
