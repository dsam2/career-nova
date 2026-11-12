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
import { i as D, n as O, r as k, t as A } from "./e_qtYqPa5.BlW52RJ1.mjs";
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
  G = e(() => {
    (l(),
      x(),
      m(),
      r(),
      D(),
      (M = g(d.div)),
      (N = [`pqmTc8b_A`, `xumQIq7vU`]),
      (P = `framer-zvw3p`),
      (F = { pqmTc8b_A: `framer-v-1yf81dc`, xumQIq7vU: `framer-v-7qiv2` }),
      (I = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (L = { delay: 0, duration: 0.4, ease: [0, 0, 1, 1], type: `tween` }),
      (R = {
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
      (z = ({ value: e, children: t }) => {
        let r = o(f),
          i = e ?? r.transition,
          s = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: t });
      }),
      (B = { Dark: `pqmTc8b_A`, Light: `xumQIq7vU` }),
      (V = d.create(t)),
      (H = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        variant: B[i.variant] ?? i.variant ?? `pqmTc8b_A`,
        XqtCAHGpt: n ?? i.XqtCAHGpt ?? `Integration`,
      })),
      (U = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = y(
        i(function (e, n) {
          let r = s(null),
            i = n ?? r,
            o = u(),
            { activeLocale: l, setLocale: f } = S();
          w();
          let { style: m, className: h, layoutId: g, variant: y, XqtCAHGpt: b, ...x } = H(e),
            {
              baseVariant: C,
              classNames: T,
              clearLoadingGesture: D,
              gestureHandlers: O,
              gestureVariant: k,
              isLoading: B,
              setGestureState: W,
              setVariant: G,
              variants: K,
            } = E({
              cycleOrder: N,
              defaultVariant: `pqmTc8b_A`,
              ref: i,
              variant: y,
              variantClassNames: F,
            }),
            q = U(e, K),
            J = _(P, A);
          return a(p, {
            id: g ?? o,
            children: a(V, {
              animate: K,
              initial: !1,
              children: a(z, {
                value: I,
                children: c(d.div, {
                  ...x,
                  ...O,
                  className: _(J, `framer-1yf81dc`, h, T),
                  "data-framer-name": `Dark`,
                  layoutDependency: q,
                  layoutId: `pqmTc8b_A`,
                  ref: i,
                  style: { ...m },
                  ...j({ xumQIq7vU: { "data-framer-name": `Light` } }, C, k),
                  children: [
                    a(M, {
                      __framer__loop: R,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopPauseOffscreen: !0,
                      __framer__loopRepeatDelay: 0,
                      __framer__loopRepeatType: `mirror`,
                      __framer__loopTransition: L,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 0.85,
                      className: `framer-2chx60`,
                      "data-framer-name": `Dot`,
                      layoutDependency: q,
                      layoutId: `mCU6DVts3`,
                      style: {
                        backgroundColor: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                        borderBottomLeftRadius: 3,
                        borderBottomRightRadius: 3,
                        borderTopLeftRadius: 3,
                        borderTopRightRadius: 3,
                        opacity: 0.85,
                      },
                      variants: {
                        xumQIq7vU: {
                          backgroundColor: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                        },
                      },
                    }),
                    a(v, {
                      __fromCanvasComponent: !0,
                      children: a(t, {
                        children: a(d.p, {
                          className: `framer-styles-preset-12qamiq`,
                          "data-styles-preset": `e_qtYqPa5`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88)))`,
                          },
                          children: `Integration`,
                        }),
                      }),
                      className: `framer-g1quql`,
                      fonts: [`Inter`],
                      layoutDependency: q,
                      layoutId: `A7tj6ZZmY`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                        "--framer-link-text-color": `rgb(255, 230, 0)`,
                        "--framer-link-text-decoration": `underline`,
                        opacity: 0.8,
                      },
                      text: b,
                      variants: {
                        xumQIq7vU: {
                          "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...j(
                        {
                          xumQIq7vU: {
                            children: a(t, {
                              children: a(d.p, {
                                className: `framer-styles-preset-12qamiq`,
                                "data-styles-preset": `e_qtYqPa5`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                },
                                children: `Integration`,
                              }),
                            }),
                          },
                        },
                        C,
                        k
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-zvw3p.framer-l3xmma, .framer-zvw3p .framer-l3xmma { display: block; }`,
          `.framer-zvw3p.framer-1yf81dc { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-zvw3p .framer-2chx60 { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 6px; }`,
          `.framer-zvw3p .framer-g1quql { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...O,
        ],
        `framer-zvw3p`
      )),
      (W.displayName = `Tagg`),
      (W.defaultProps = { height: 13, width: 111 }),
      C(W, {
        variant: {
          options: [`pqmTc8b_A`, `xumQIq7vU`],
          optionTitles: [`Dark`, `Light`],
          title: `Variant`,
          type: T.Enum,
        },
        XqtCAHGpt: {
          defaultValue: `Integration`,
          displayTextArea: !1,
          title: `Title`,
          type: T.String,
        },
        onXqtCAHGptChange: { changes: `XqtCAHGpt`, type: T.ChangeHandler },
      }),
      h(
        W,
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
          ...b(k),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { G as n, W as t };
//# sourceMappingURL=iq8J45AIS.DV-QoLM0.mjs.map
