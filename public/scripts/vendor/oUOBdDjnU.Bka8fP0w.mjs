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
  G as g,
  P as _,
  T as v,
  Tt as y,
  W as b,
  Z as x,
  _t as S,
  g as C,
  j as w,
  lt as T,
  o as E,
  p as D,
  wt as O,
} from "./framer.B5VSaEF1.mjs";
import { g as k, h as A, m as j, p as M } from "./shared-lib.Dlb4YuQV.mjs";
import { i as N, n as P, r as F, t as I } from "./GK8heJFj7.Bs6hOCzB.mjs";
function L(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var R,
  z,
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
  X = e(() => {
    (l(),
      x(),
      m(),
      r(),
      N(),
      k(),
      (R = { WtvInyS1z: { hover: !0 } }),
      (z = [`WtvInyS1z`, `rgu1PtWlN`]),
      (B = `framer-QYS2E`),
      (V = { rgu1PtWlN: `framer-v-7g7vv4`, WtvInyS1z: `framer-v-1xoi9cf` }),
      (H = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
      (U = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (W = ({ value: e, children: t }) => {
        let r = o(f),
          i = e ?? r.transition,
          s = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: t });
      }),
      (G = { Desktop: `WtvInyS1z`, Phone: `rgu1PtWlN` }),
      (K = d.create(t)),
      (q = ({
        category: e,
        date: t,
        height: n,
        id: r,
        image: i,
        link: a,
        newTab: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        Egl9NM6GY: a ?? l.Egl9NM6GY,
        IILdZawGK: s ?? l.IILdZawGK ?? `Title`,
        MvMhaSmST: o ?? l.MvMhaSmST ?? !1,
        PdZcCQfym: i ??
          l.PdZcCQfym ?? {
            pixelHeight: 4500,
            pixelWidth: 6e3,
            src: `https://framerusercontent.com/images/lo5RylodfYZsSdm0OBRQaq6z8.webp?width=6000&height=4500`,
            srcSet: `https://framerusercontent.com/images/lo5RylodfYZsSdm0OBRQaq6z8.webp?scale-down-to=512&width=6000&height=4500 512w,https://framerusercontent.com/images/lo5RylodfYZsSdm0OBRQaq6z8.webp?scale-down-to=1024&width=6000&height=4500 1024w,https://framerusercontent.com/images/lo5RylodfYZsSdm0OBRQaq6z8.webp?scale-down-to=2048&width=6000&height=4500 2048w,https://framerusercontent.com/images/lo5RylodfYZsSdm0OBRQaq6z8.webp?scale-down-to=4096&width=6000&height=4500 4096w,https://framerusercontent.com/images/lo5RylodfYZsSdm0OBRQaq6z8.webp?width=6000&height=4500 6000w`,
          },
        variant: G[l.variant] ?? l.variant ?? `WtvInyS1z`,
        wn1BMTGLU: t ?? l.wn1BMTGLU ?? `12 June 2025`,
        woTEeIi6H: e ?? l.woTEeIi6H ?? `Web design`,
      })),
      (J = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = y(
        i(function (e, n) {
          let r = s(null),
            i = n ?? r,
            o = u(),
            { activeLocale: l, setLocale: f } = S(),
            m = T(),
            {
              style: h,
              className: y,
              layoutId: b,
              variant: x,
              IILdZawGK: w,
              woTEeIi6H: E,
              wn1BMTGLU: k,
              PdZcCQfym: A,
              MvMhaSmST: j,
              Egl9NM6GY: N,
              ...P
            } = q(e),
            {
              baseVariant: F,
              classNames: G,
              clearLoadingGesture: Y,
              gestureHandlers: X,
              gestureVariant: Z,
              isLoading: ee,
              setGestureState: te,
              setVariant: ne,
              variants: Q,
            } = O({
              cycleOrder: z,
              defaultVariant: `WtvInyS1z`,
              enabledGestures: R,
              ref: i,
              variant: x,
              variantClassNames: V,
            }),
            $ = J(e, Q),
            re = _(B, M, I);
          return a(p, {
            id: b ?? o,
            children: a(K, {
              animate: Q,
              initial: !1,
              children: a(W, {
                value: H,
                children: a(C, {
                  href: N,
                  motionChild: !0,
                  nodeId: `WtvInyS1z`,
                  openInNewTab: j,
                  scopeId: `oUOBdDjnU`,
                  children: c(d.a, {
                    ...P,
                    ...X,
                    className: `${_(re, `framer-1xoi9cf`, y, G)} framer-scuk6s`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: $,
                    layoutId: `WtvInyS1z`,
                    ref: i,
                    style: { ...h },
                    ...L(
                      {
                        "WtvInyS1z-hover": { "data-framer-name": void 0 },
                        rgu1PtWlN: { "data-framer-name": `Phone` },
                      },
                      F,
                      Z
                    ),
                    children: [
                      a(d.div, {
                        className: `framer-1bzxxag`,
                        "data-framer-name": `Image`,
                        layoutDependency: $,
                        layoutId: `nW3dJUK1E`,
                        style: {
                          borderBottomLeftRadius: 20,
                          borderBottomRightRadius: 20,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        },
                        variants: {
                          rgu1PtWlN: {
                            borderBottomLeftRadius: 18,
                            borderBottomRightRadius: 18,
                            borderTopLeftRadius: 18,
                            borderTopRightRadius: 18,
                          },
                        },
                        children: a(D, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: g((m?.y || 0) + 0 + 0 + 0),
                            pixelHeight: 4500,
                            pixelWidth: 6e3,
                            sizes: m?.width || `100vw`,
                            ...U(A),
                          },
                          className: `framer-qgnumy`,
                          "data-framer-name": `Image`,
                          layoutDependency: $,
                          layoutId: `Bt60U4OJq`,
                          ...L(
                            {
                              "WtvInyS1z-hover": {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: g((m?.y || 0) + 0 + 0 + -6.6),
                                  pixelHeight: 4500,
                                  pixelWidth: 6e3,
                                  sizes: `calc(${m?.width || `100vw`} * 1.04)`,
                                  ...U(A),
                                },
                              },
                            },
                            F,
                            Z
                          ),
                        }),
                      }),
                      c(d.div, {
                        className: `framer-iz0jo3`,
                        "data-framer-name": `Title & Details`,
                        layoutDependency: $,
                        layoutId: `el1eJbAr_`,
                        style: { opacity: 1 },
                        variants: { "WtvInyS1z-hover": { opacity: 0.8 } },
                        children: [
                          c(d.div, {
                            className: `framer-mqtl4y`,
                            "data-framer-name": `Top`,
                            layoutDependency: $,
                            layoutId: `fyY0RylFW`,
                            children: [
                              a(v, {
                                __fromCanvasComponent: !0,
                                children: a(t, {
                                  children: a(d.p, {
                                    className: `framer-styles-preset-1xheykw`,
                                    "data-styles-preset": `vz9muakNv`,
                                    dir: `auto`,
                                    children: `12 June 2025`,
                                  }),
                                }),
                                className: `framer-15flbcb`,
                                "data-framer-name": `Details`,
                                fonts: [`Inter`],
                                layoutDependency: $,
                                layoutId: `bpuG4INjj`,
                                style: { "--framer-paragraph-spacing": `0px`, opacity: 0.6 },
                                text: k,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(d.div, {
                                className: `framer-1s4m40q`,
                                "data-framer-name": `Dot`,
                                layoutDependency: $,
                                layoutId: `Qq0l7U8wn`,
                                style: {
                                  backgroundColor: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                  borderBottomLeftRadius: 8,
                                  borderBottomRightRadius: 8,
                                  borderTopLeftRadius: 8,
                                  borderTopRightRadius: 8,
                                  opacity: 0.6,
                                },
                              }),
                              a(v, {
                                __fromCanvasComponent: !0,
                                children: a(t, {
                                  children: a(d.p, {
                                    className: `framer-styles-preset-1xheykw`,
                                    "data-styles-preset": `vz9muakNv`,
                                    dir: `auto`,
                                    children: `Web design`,
                                  }),
                                }),
                                className: `framer-4sma4j`,
                                "data-framer-name": `Details`,
                                fonts: [`Inter`],
                                layoutDependency: $,
                                layoutId: `uVriqtnLY`,
                                style: { "--framer-paragraph-spacing": `0px`, opacity: 0.6 },
                                text: E,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          a(v, {
                            __fromCanvasComponent: !0,
                            children: a(t, {
                              children: a(d.h4, {
                                className: `framer-styles-preset-hpamux`,
                                "data-styles-preset": `GK8heJFj7`,
                                dir: `auto`,
                                children: `Title`,
                              }),
                            }),
                            className: `framer-y0nfj5`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: $,
                            layoutId: `Rtl_mE9ui`,
                            style: { "--framer-paragraph-spacing": `0px` },
                            text: w,
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
          `.framer-QYS2E.framer-scuk6s, .framer-QYS2E .framer-scuk6s { display: block; }`,
          `.framer-QYS2E.framer-1xoi9cf { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 424px; }`,
          `.framer-QYS2E .framer-1bzxxag { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: 330px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-QYS2E .framer-qgnumy { flex: none; height: 100%; overflow: visible; position: relative; width: 100%; }`,
          `.framer-QYS2E .framer-iz0jo3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 4px 6px 4px; position: relative; width: 100%; }`,
          `.framer-QYS2E .framer-mqtl4y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; max-width: 100%; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-QYS2E .framer-15flbcb, .framer-QYS2E .framer-4sma4j { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 2; display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre; width: auto; }`,
          `.framer-QYS2E .framer-1s4m40q { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 6px; }`,
          `.framer-QYS2E .framer-y0nfj5 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 380px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
          `.framer-QYS2E.framer-v-7g7vv4.framer-1xoi9cf { cursor: unset; }`,
          `.framer-QYS2E.framer-v-7g7vv4 .framer-1bzxxag { height: 260px; }`,
          `.framer-QYS2E.framer-v-7g7vv4 .framer-iz0jo3 { gap: 6px; }`,
          `.framer-QYS2E.framer-v-1xoi9cf.hover .framer-qgnumy { height: 104%; width: 104%; }`,
          ...j,
          ...P,
        ],
        `framer-QYS2E`
      )),
      (Y.displayName = `Blog Card`),
      (Y.defaultProps = { height: 413.5, width: 424 }),
      w(Y, {
        variant: {
          options: [`WtvInyS1z`, `rgu1PtWlN`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: E.Enum,
        },
        IILdZawGK: { defaultValue: `Title`, displayTextArea: !1, title: `Title`, type: E.String },
        onIILdZawGKChange: { changes: `IILdZawGK`, type: E.ChangeHandler },
        woTEeIi6H: {
          defaultValue: `Web design`,
          displayTextArea: !1,
          title: `Category`,
          type: E.String,
        },
        onwoTEeIi6HChange: { changes: `woTEeIi6H`, type: E.ChangeHandler },
        wn1BMTGLU: {
          defaultValue: `12 June 2025`,
          displayTextArea: !1,
          title: `Date`,
          type: E.String,
        },
        onwn1BMTGLUChange: { changes: `wn1BMTGLU`, type: E.ChangeHandler },
        PdZcCQfym: {
          __defaultAssetReference: `data:framer/asset-reference,lo5RylodfYZsSdm0OBRQaq6z8.webp?originalFilename=093.webp&width=6000&height=4500`,
          title: `Image`,
          type: E.ResponsiveImage,
        },
        MvMhaSmST: { defaultValue: !1, title: `New Tab`, type: E.Boolean },
        onMvMhaSmSTChange: { changes: `MvMhaSmST`, type: E.ChangeHandler },
        Egl9NM6GY: { title: `Link`, type: E.Link },
      }),
      h(
        Y,
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
          ...b(A),
          ...b(F),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { X as n, Y as t };
//# sourceMappingURL=oUOBdDjnU.Bka8fP0w.mjs.map
