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
  y as te,
} from "./react.CWkcPvHD.mjs";
import { T as l, a as ne, r as u, t as d } from "./motion.UJ_SjFSS.mjs";
import {
  A as f,
  Ct as re,
  Dt as ie,
  L as p,
  P as m,
  Tt as h,
  U as g,
  Z as _,
  _t as ae,
  a as v,
  b as oe,
  bt as se,
  d as y,
  ft as ce,
  gt as le,
  ht as b,
  i as x,
  lt as ue,
  n as de,
  pt as fe,
  rt as S,
  vt as pe,
  w as me,
  x as C,
  xt as he,
  yt as w,
} from "./framer.B5VSaEF1.mjs";
import { n as ge, t as T } from "./oUOBdDjnU.Bka8fP0w.mjs";
import { i as E, t as D } from "./auTZY4oaD.CiWilCi0.mjs";
import { n as O, t as k } from "./Qz0U1kQ59.DcFwlR6q.mjs";
import _e, { t as A } from "./a0249ZLsqCaC2zR-Rv1uGyuoUPxjXwSFnJSwtSwS_fg.DJsYj_lR.mjs";
var j, M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    _(),
    d(),
    n(),
    ge(),
    O(),
    E(),
    A(),
    (j = g(k)),
    (M = g(T)),
    (N = ie(l.div)),
    (P = {
      aBDnDb0m9: `(max-width: 809.98px)`,
      KCfP3JH9a: `(min-width: 810px) and (max-width: 1199.98px)`,
      VSXVb3OZ7: `(min-width: 1200px)`,
    }),
    (F = []),
    (I = `framer-DgsQ9`),
    (L = {
      aBDnDb0m9: `framer-v-hhjlft`,
      KCfP3JH9a: `framer-v-aogvzz`,
      VSXVb3OZ7: `framer-v-pzyxrg`,
    }),
    (R = (e, t, n) => (e && t ? `position` : n)),
    (z = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (B = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (V = {
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
    (H = { damping: 70, delay: 0.6, mass: 1, stiffness: 210, type: `spring` }),
    (U = (e, t, n) => {
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
    (W = { dateStyle: `medium`, timeZone: `UTC` }),
    (G = (e, t) => U(e, W, t)),
    (K = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (q = () => ({
      from: { alias: `uVv9xTfsF`, data: D, type: `Collection` },
      select: [
        { collection: `uVv9xTfsF`, name: `TRRxvReo0`, type: `Identifier` },
        { collection: `uVv9xTfsF`, name: `CWrQ3fgaH`, type: `Identifier` },
        { collection: `uVv9xTfsF`, name: `ZfcQek_8H`, type: `Identifier` },
        { collection: `uVv9xTfsF`, name: `Hz3oIYPRx`, type: `Identifier` },
        { collection: `uVv9xTfsF`, name: `bNzKOQmIZ`, type: `Identifier` },
        { collection: `uVv9xTfsF`, name: `id`, type: `Identifier` },
      ],
    })),
    (J = ({ query: e, pageSize: t, children: n }) => n(w(e))),
    (Y = { Desktop: `VSXVb3OZ7`, Phone: `aBDnDb0m9`, Tablet: `KCfP3JH9a` }),
    (X = ({ value: e }) =>
      b()
        ? null
        : i(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `VSXVb3OZ7`,
    })),
    (Q = h(
      r(function (e, n) {
        let r = o(null),
          c = n ?? r,
          d = te(),
          { activeLocale: f, setLocale: ie } = ae(),
          p = ue(),
          { style: h, className: g, layoutId: _, variant: b, ...S } = Z(e);
        pe(t(() => _e({}, f), [f]));
        let [w, ge] = fe(b, P, !1),
          E = m(I),
          D = a(y)?.isLayoutTemplate,
          O = !!a(ne)?.transition?.layout,
          A = R(D, O),
          j = se(`Y27bLo1pW`),
          M = re(),
          F = le();
        return (
          he(),
          ce({}),
          i(y.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: Y,
              primaryVariantId: `VSXVb3OZ7`,
              variantClassNames: L,
            },
            children: s(u, {
              id: _ ?? d,
              children: [
                i(X, {
                  value: `html body { background: var(--token-a33c1b5b-e297-4002-8e0e-dc2265f4a460, rgb(0, 13, 14)); }`,
                }),
                s(l.div, {
                  ...S,
                  className: m(E, `framer-pzyxrg`, g),
                  ref: c,
                  style: { ...h },
                  children: [
                    i(l.div, {
                      "aria-label": `Scroll Trigger`,
                      className: `framer-6zlkv6`,
                      "data-framer-name": `Scroll Triger`,
                      id: j,
                      layout: A,
                      ref: M(j),
                    }),
                    s(l.div, {
                      className: `framer-10inntb`,
                      "data-framer-name": `Main`,
                      layout: A,
                      children: [
                        i(x, {
                          height: 500,
                          width: `calc(${p?.width || `100vw`} - 40px)`,
                          y: (p?.y || 0) + 160 + 0 + 0 + 0,
                          children: i(v, {
                            className: `framer-ux6ch7-container`,
                            nodeId: `rbXrwRomt`,
                            scopeId: `EyK7bnNLZ`,
                            children: i(C, {
                              breakpoint: w,
                              overrides: {
                                aBDnDb0m9: { variant: B(`pSNtHM_tN`) },
                                KCfP3JH9a: { variant: B(`ZsEu9N9BR`) },
                              },
                              children: i(k, {
                                height: `100%`,
                                id: `rbXrwRomt`,
                                l2pnRkKH_: `Consulting`,
                                layoutId: `rbXrwRomt`,
                                ldDYz64mB: `Practical guidance on college admissions, entrance exams, scholarships, document verification and careers across India.`,
                                NIiecT1dL: `Date`,
                                sb0ubaw0c: z(
                                  {
                                    pixelHeight: 3754,
                                    pixelWidth: 5e3,
                                    src: `https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?width=5000&height=3754`,
                                    srcSet: `https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?scale-down-to=512&width=5000&height=3754 512w,https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?scale-down-to=1024&width=5000&height=3754 1024w,https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?scale-down-to=2048&width=5000&height=3754 2048w,https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?scale-down-to=4096&width=5000&height=3754 4096w,https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?width=5000&height=3754 5000w`,
                                  },
                                  ``
                                ),
                                SdbUp40qY: `News & Insights `,
                                style: { width: `100%` },
                                variant: B(`P143wiNhf`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        i(`section`, {
                          className: `framer-br2n99`,
                          "data-framer-name": `Blog`,
                          children: i(N, {
                            __framer__animate: { transition: H },
                            __framer__animateOnce: !0,
                            __framer__enter: V,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-tjo8yn`,
                            children: i(de, {
                              children: i(J, {
                                query: q(),
                                children: (e, t, n) =>
                                  i(ee, {
                                    children: e?.map(
                                      (
                                        {
                                          bNzKOQmIZ: e,
                                          CWrQ3fgaH: t,
                                          Hz3oIYPRx: n,
                                          id: r,
                                          TRRxvReo0: a,
                                          ZfcQek_8H: o,
                                        },
                                        s
                                      ) => (
                                        (a ??= ``),
                                        (t ??= ``),
                                        (e ??= ``),
                                        i(
                                          u,
                                          {
                                            id: `uVv9xTfsF-${r}`,
                                            children: i(oe.Provider, {
                                              value: { bNzKOQmIZ: e },
                                              children: i(me, {
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
                                                  i(C, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      aBDnDb0m9: {
                                                        width: `max(min(max(${p?.width || `100vw`} - 72px, 1px), 1300px), 50px)`,
                                                        y:
                                                          (p?.y || 0) +
                                                          160 +
                                                          0 +
                                                          0 +
                                                          500 +
                                                          80 +
                                                          0 +
                                                          0,
                                                      },
                                                      KCfP3JH9a: {
                                                        width: `max((min(max(${p?.width || `100vw`} - 104px, 1px), 1300px) - 24px) / 2, 50px)`,
                                                        y:
                                                          (p?.y || 0) +
                                                          160 +
                                                          0 +
                                                          0 +
                                                          500 +
                                                          90 +
                                                          0 +
                                                          0,
                                                      },
                                                    },
                                                    children: i(x, {
                                                      height: 413,
                                                      width: `max((min(max(${p?.width || `100vw`} - 104px, 1px), 1300px) - 48px) / 3, 50px)`,
                                                      y:
                                                        (p?.y || 0) +
                                                        160 +
                                                        0 +
                                                        0 +
                                                        500 +
                                                        110 +
                                                        0 +
                                                        0,
                                                      children: i(v, {
                                                        className: `framer-4jszw4-container`,
                                                        nodeId: `czYGwusIt`,
                                                        scopeId: `EyK7bnNLZ`,
                                                        children: i(C, {
                                                          breakpoint: w,
                                                          overrides: {
                                                            aBDnDb0m9: {
                                                              Egl9NM6GY: e[2],
                                                              variant: B(`rgu1PtWlN`),
                                                            },
                                                            KCfP3JH9a: { Egl9NM6GY: e[1] },
                                                          },
                                                          children: i(T, {
                                                            Egl9NM6GY: e[0],
                                                            height: `100%`,
                                                            id: `czYGwusIt`,
                                                            IILdZawGK: a,
                                                            layoutId: `czYGwusIt`,
                                                            MvMhaSmST: !1,
                                                            PdZcCQfym: K(n),
                                                            style: { width: `100%` },
                                                            variant: B(`WtvInyS1z`),
                                                            width: `100%`,
                                                            wn1BMTGLU: G(o, F),
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
                  ],
                }),
                i(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-DgsQ9.framer-1dtqyqg, .framer-DgsQ9 .framer-1dtqyqg { display: block; }`,
        `.framer-DgsQ9.framer-pzyxrg { align-content: center; align-items: center; background-color: var(--token-a33c1b5b-e297-4002-8e0e-dc2265f4a460, #000d0e); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 160px 20px 160px 20px; position: relative; width: 1200px; }`,
        `.framer-DgsQ9 .framer-6zlkv6 { flex: none; height: 1px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: 60px; width: 100%; z-index: 1; }`,
        `.framer-DgsQ9 .framer-10inntb { align-content: center; align-items: center; background-color: var(--token-705c06af-cdcf-4608-86f8-396aaf15edc9, #001517); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-DgsQ9 .framer-ux6ch7-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-DgsQ9 .framer-br2n99 { align-content: center; align-items: center; background-color: var(--token-710ade2f-af2d-4eb3-a472-dbe729d9e382, #f5f7f7); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 110px 32px 140px 32px; position: relative; width: 100%; }`,
        `.framer-DgsQ9 .framer-tjo8yn { display: grid; flex: 1 0 0px; gap: 36px 24px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; max-width: 1300px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-DgsQ9 .framer-4jszw4-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-DgsQ9.framer-pzyxrg { width: 810px; } .framer-DgsQ9 .framer-br2n99 { padding: 90px 32px 140px 32px; } .framer-DgsQ9 .framer-tjo8yn { grid-template-columns: repeat(2, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-DgsQ9.framer-pzyxrg { width: 390px; } .framer-DgsQ9 .framer-br2n99 { padding: 80px 16px 80px 16px; } .framer-DgsQ9 .framer-tjo8yn { grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ],
      `framer-DgsQ9`
    )),
    (Q.displayName = `Blogs`),
    (Q.defaultProps = { height: 2715, width: 1200 }),
    f(Q, [{ explicitInter: !0, fonts: [] }, ...j, ...M], { supportsExplicitInterCodegen: !0 }),
    (Q.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = S.get(q(), n);
        return Promise.allSettled([
          r.preload(),
          p(k, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => p(T, {}, t)));
          })(),
        ]);
      },
    }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerEyK7bnNLZ`,
          slots: [],
          annotations: {
            framerScrollSections: `{"Y27bLo1pW":{"pattern":":Y27bLo1pW","name":"scroll-trigger"}}`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerIntrinsicHeight: `2715`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"KCfP3JH9a":{"layout":["fixed","auto"]},"aBDnDb0m9":{"layout":["fixed","auto"]}}}`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, F as queryParamNames };
//# sourceMappingURL=T-KiEV5LLs_UiddCvq_6-C1wqrmM0Xd0Z0KdrhFbz0U.WM1S3pBG.mjs.map
