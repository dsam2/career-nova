import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  M as t,
  T as n,
  _ as r,
  c as i,
  j as a,
  k as o,
  l as s,
  o as c,
  s as ee,
  y as l,
} from "./react.CWkcPvHD.mjs";
import { T as u, a as te, r as d, t as f } from "./motion.UJ_SjFSS.mjs";
import {
  A as p,
  Dt as ne,
  L as m,
  P as h,
  Tt as g,
  U as _,
  Z as v,
  _t as y,
  a as b,
  b as re,
  d as x,
  ft as ie,
  ht as S,
  i as C,
  lt as ae,
  n as oe,
  pt as se,
  rt as w,
  vt as ce,
  w as le,
  x as T,
  xt as ue,
  yt as E,
} from "./framer.B5VSaEF1.mjs";
import { i as D, t as O } from "./WRyp7sdxk.DoPFXHs7.mjs";
import { n as k, t as A } from "./Qz0U1kQ59.DcFwlR6q.mjs";
import { n as j, t as M } from "./OtDDoEBRB.BAwzcbil.mjs";
import de, { t as N } from "./2BdnFEaQ273gGhPg-2IzNX-jLejxKEP0bcWfzT-WhbM.Dt-WCmmI.mjs";
var P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    v(),
    f(),
    n(),
    j(),
    k(),
    D(),
    N(),
    (P = _(A)),
    (F = _(M)),
    (I = ne(u.div)),
    (L = {
      mzM8p57RY: `(max-width: 809.98px)`,
      w95bMbdYa: `(min-width: 1200px)`,
      Z8vuNCsoo: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (R = []),
    (z = `framer-OcY1Q`),
    (B = {
      mzM8p57RY: `framer-v-dlwk3n`,
      w95bMbdYa: `framer-v-mx2gd7`,
      Z8vuNCsoo: `framer-v-1g1mkkk`,
    }),
    (V = (e, t, n) => (e && t ? `position` : n)),
    (H = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (U = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (W = {
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
    (G = { damping: 70, delay: 0.6, mass: 1, stiffness: 210, type: `spring` }),
    (K = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (q = () => ({
      from: { alias: `gQW_eXgGw`, data: O, type: `Collection` },
      select: [
        { collection: `gQW_eXgGw`, name: `CH64cYoSq`, type: `Identifier` },
        { collection: `gQW_eXgGw`, name: `sk_SngEwe`, type: `Identifier` },
        { collection: `gQW_eXgGw`, name: `TImVM2TSg`, type: `Identifier` },
        { collection: `gQW_eXgGw`, name: `Ezatht0JF`, type: `Identifier` },
        { collection: `gQW_eXgGw`, name: `gURS0n4RS`, type: `Identifier` },
        { collection: `gQW_eXgGw`, name: `id`, type: `Identifier` },
      ],
    })),
    (J = ({ query: e, pageSize: t, children: n }) => n(E(e))),
    (Y = { Desktop: `w95bMbdYa`, Phone: `mzM8p57RY`, Tablet: `Z8vuNCsoo` }),
    (X = ({ value: e }) =>
      S()
        ? null
        : i(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `w95bMbdYa`,
    })),
    (Q = g(
      r(function (e, n) {
        let r = o(null),
          c = n ?? r,
          f = l(),
          { activeLocale: p, setLocale: ne } = y(),
          m = ae(),
          { style: g, className: _, layoutId: v, variant: S, ...w } = Z(e);
        ce(t(() => de({}, p), [p]));
        let [E, D] = se(S, L, !1),
          O = h(z),
          k = a(x)?.isLayoutTemplate,
          j = !!a(te)?.transition?.layout,
          N = V(k, j);
        return (
          ue(),
          ie({}),
          i(x.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: Y,
              primaryVariantId: `w95bMbdYa`,
              variantClassNames: B,
            },
            children: s(d, {
              id: v ?? f,
              children: [
                i(X, {
                  value: `html body { background: var(--token-a33c1b5b-e297-4002-8e0e-dc2265f4a460, rgb(0, 13, 14)); }`,
                }),
                i(u.div, {
                  ...w,
                  className: h(O, `framer-mx2gd7`, _),
                  ref: c,
                  style: { ...g },
                  children: s(u.div, {
                    className: `framer-10a67jp`,
                    "data-framer-name": `Main`,
                    layout: N,
                    children: [
                      i(C, {
                        height: 500,
                        width: `calc(${m?.width || `100vw`} - 40px)`,
                        y: (m?.y || 0) + 160 + 0 + 0 + 0,
                        children: i(b, {
                          className: `framer-m1yhf6-container`,
                          nodeId: `Q0CjFK4Qq`,
                          scopeId: `Q0ojUtneJ`,
                          children: i(T, {
                            breakpoint: E,
                            overrides: {
                              mzM8p57RY: { variant: U(`pSNtHM_tN`) },
                              Z8vuNCsoo: { variant: U(`ZsEu9N9BR`) },
                            },
                            children: i(A, {
                              height: `100%`,
                              id: `Q0CjFK4Qq`,
                              l2pnRkKH_: `Consulting`,
                              layoutId: `Q0CjFK4Qq`,
                              ldDYz64mB: `Everything you need to plan your college admissions and build a career in India, in one place.`,
                              NIiecT1dL: `Date`,
                              sb0ubaw0c: H(
                                {
                                  pixelHeight: 3754,
                                  pixelWidth: 5e3,
                                  src: `https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?width=5000&height=3754`,
                                  srcSet: `https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?scale-down-to=512&width=5000&height=3754 512w,https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?scale-down-to=1024&width=5000&height=3754 1024w,https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?scale-down-to=2048&width=5000&height=3754 2048w,https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?scale-down-to=4096&width=5000&height=3754 4096w,https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?width=5000&height=3754 5000w`,
                                },
                                ``
                              ),
                              SdbUp40qY: `Expert Solutions`,
                              style: { width: `100%` },
                              variant: U(`P143wiNhf`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                      i(`section`, {
                        className: `framer-1l9a4yp`,
                        "data-framer-name": `Services`,
                        children: i(I, {
                          __framer__animate: { transition: G },
                          __framer__animateOnce: !0,
                          __framer__enter: W,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1kdj7t4`,
                          "data-framer-name": `Service`,
                          children: i(oe, {
                            children: i(J, {
                              query: q(),
                              children: (e, t, n) =>
                                i(ee, {
                                  children: e?.map(
                                    (
                                      {
                                        CH64cYoSq: e,
                                        Ezatht0JF: t,
                                        gURS0n4RS: n,
                                        id: r,
                                        sk_SngEwe: a,
                                        TImVM2TSg: o,
                                      },
                                      s
                                    ) => (
                                      (o ??= ``),
                                      (t ??= ``),
                                      (n ??= ``),
                                      i(
                                        d,
                                        {
                                          id: `gQW_eXgGw-${r}`,
                                          children: i(re.Provider, {
                                            value: { gURS0n4RS: n },
                                            children: i(le, {
                                              links: [
                                                {
                                                  href: {
                                                    pathVariables: { gURS0n4RS: n },
                                                    webPageId: `bAcjwMNPv`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: { gURS0n4RS: n },
                                                    webPageId: `bAcjwMNPv`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: { gURS0n4RS: n },
                                                    webPageId: `bAcjwMNPv`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                              ],
                                              children: (n) =>
                                                i(T, {
                                                  breakpoint: E,
                                                  overrides: {
                                                    mzM8p57RY: {
                                                      width: `max(min(${m?.width || `100vw`} - 72px, 1300px), 50px)`,
                                                      y:
                                                        (m?.y || 0) +
                                                        160 +
                                                        0 +
                                                        0 +
                                                        500 +
                                                        80 +
                                                        0 +
                                                        0 +
                                                        0,
                                                    },
                                                    Z8vuNCsoo: {
                                                      width: `max((min(${m?.width || `100vw`} - 104px, 1300px) - 22px) / 2, 50px)`,
                                                      y:
                                                        (m?.y || 0) +
                                                        160 +
                                                        0 +
                                                        0 +
                                                        500 +
                                                        90 +
                                                        0 +
                                                        0 +
                                                        0,
                                                    },
                                                  },
                                                  children: i(C, {
                                                    height: 469,
                                                    width: `max((min(${m?.width || `100vw`} - 104px, 1300px) - 44px) / 3, 50px)`,
                                                    y:
                                                      (m?.y || 0) +
                                                      160 +
                                                      0 +
                                                      0 +
                                                      500 +
                                                      110 +
                                                      0 +
                                                      0 +
                                                      0,
                                                    children: i(b, {
                                                      className: `framer-1ijgicx-container`,
                                                      nodeId: `Brw0wizfi`,
                                                      scopeId: `Q0ojUtneJ`,
                                                      children: i(T, {
                                                        breakpoint: E,
                                                        overrides: {
                                                          mzM8p57RY: {
                                                            J7XtChCOg: n[2],
                                                            variant: U(`vovzQvYvl`),
                                                          },
                                                          Z8vuNCsoo: { J7XtChCOg: n[1] },
                                                        },
                                                        children: i(M, {
                                                          height: `100%`,
                                                          id: `Brw0wizfi`,
                                                          IXjxfLLdn: t,
                                                          J7XtChCOg: n[0],
                                                          layoutId: `Brw0wizfi`,
                                                          mg8DYYsxQ: K(e),
                                                          OhstHbEXF: a,
                                                          style: { width: `100%` },
                                                          variant: U(`BHObDvU6T`),
                                                          VJW9hKSwq: o,
                                                          width: `100%`,
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
                i(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-OcY1Q.framer-1toth1z, .framer-OcY1Q .framer-1toth1z { display: block; }`,
        `.framer-OcY1Q.framer-mx2gd7 { align-content: center; align-items: center; background-color: var(--token-a33c1b5b-e297-4002-8e0e-dc2265f4a460, #000d0e); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 160px 20px 160px 20px; position: relative; width: 1200px; }`,
        `.framer-OcY1Q .framer-10a67jp { align-content: center; align-items: center; background-color: var(--token-705c06af-cdcf-4608-86f8-396aaf15edc9, #001517); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-OcY1Q .framer-m1yhf6-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-OcY1Q .framer-1l9a4yp { align-content: center; align-items: center; background-color: var(--token-710ade2f-af2d-4eb3-a472-dbe729d9e382, #f5f7f7); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 110px 32px 140px 32px; position: relative; width: 100%; }`,
        `.framer-OcY1Q .framer-1kdj7t4 { display: grid; flex: none; gap: 38px 22px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; max-width: 1300px; padding: 0px; position: relative; width: 100%; }`,
        `.framer-OcY1Q .framer-1ijgicx-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-OcY1Q.framer-mx2gd7 { width: 810px; } .framer-OcY1Q .framer-1l9a4yp { padding: 90px 32px 140px 32px; } .framer-OcY1Q .framer-1kdj7t4 { grid-template-columns: repeat(2, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-OcY1Q.framer-mx2gd7 { width: 390px; } .framer-OcY1Q .framer-1l9a4yp { padding: 80px 16px 90px 16px; } .framer-OcY1Q .framer-1kdj7t4 { gap: 32px 20px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ],
      `framer-OcY1Q`
    )),
    (Q.displayName = `Services`),
    (Q.defaultProps = { height: 3343.5, width: 1200 }),
    p(Q, [{ explicitInter: !0, fonts: [] }, ...P, ...F], { supportsExplicitInterCodegen: !0 }),
    (Q.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = w.get(q(), n);
        return Promise.allSettled([
          r.preload(),
          m(A, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => m(M, {}, t)));
          })(),
        ]);
      },
    }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerQ0ojUtneJ`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Z8vuNCsoo":{"layout":["fixed","auto"]},"mzM8p57RY":{"layout":["fixed","auto"]}}}`,
            framerVectorSets: `["omX0gWFPqDwhaiWwf6ab"]`,
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1200`,
            framerScrollSections: `false`,
            framerResponsiveScreen: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `3343.5`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, R as queryParamNames };
//# sourceMappingURL=1fmp5BFE6evSxpR6Pxf0gpMrHUr-99L4Kf4HGNnlBGA.kP6pVnVV.mjs.map
