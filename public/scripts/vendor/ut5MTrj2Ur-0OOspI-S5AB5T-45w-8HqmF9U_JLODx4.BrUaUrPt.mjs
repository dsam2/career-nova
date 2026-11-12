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
import { T as l, a as u, r as d, t as f } from "./motion.UJ_SjFSS.mjs";
import {
  A as p,
  Ct as ne,
  Dt as re,
  L as m,
  P as h,
  Tt as g,
  U as _,
  Z as v,
  _t as ie,
  a as y,
  b,
  bt as ae,
  d as x,
  ft as oe,
  ht as S,
  i as C,
  lt as se,
  n as ce,
  pt as le,
  rt as w,
  vt as ue,
  w as de,
  x as T,
  xt as E,
  yt as D,
} from "./framer.B5VSaEF1.mjs";
import { n as fe, t as O } from "./tpOWGyu5J.Dy-lqiLU.mjs";
import { i as k, t as A } from "./MgDkoXCTm.eQuaoENj.mjs";
import { n as j, t as M } from "./Qz0U1kQ59.DcFwlR6q.mjs";
import pe, { t as N } from "./lQClACz-4uA8imAu9lDqO0DwLmRpGMJk_5J_aChiKRU.DR16c8Uf.mjs";
var P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    v(),
    f(),
    n(),
    j(),
    fe(),
    k(),
    N(),
    (P = _(M)),
    (F = _(O)),
    (I = re(l.div)),
    (L = {
      BbWV7D_f9: `(max-width: 809.98px)`,
      E81iR3GBw: `(min-width: 1200px)`,
      FMtHvIDEI: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (R = []),
    (z = `framer-NftpB`),
    (B = {
      BbWV7D_f9: `framer-v-1nk2pp6`,
      E81iR3GBw: `framer-v-e3fqt7`,
      FMtHvIDEI: `framer-v-1t78qy6`,
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
      from: { alias: `ZzcTRRbO4`, data: A, type: `Collection` },
      select: [
        { collection: `ZzcTRRbO4`, name: `I0cWIyBUM`, type: `Identifier` },
        { collection: `ZzcTRRbO4`, name: `LQ4k8pMWh`, type: `Identifier` },
        { collection: `ZzcTRRbO4`, name: `cN0Ychn2P`, type: `Identifier` },
        { collection: `ZzcTRRbO4`, name: `LfkY4TS8p`, type: `Identifier` },
        { collection: `ZzcTRRbO4`, name: `eOHobAcGV`, type: `Identifier` },
        { collection: `ZzcTRRbO4`, name: `PL0YsbUUz`, type: `Identifier` },
        { collection: `ZzcTRRbO4`, name: `id`, type: `Identifier` },
      ],
    })),
    (J = ({ query: e, pageSize: t, children: n }) => n(D(e))),
    (Y = { Desktop: `E81iR3GBw`, Phone: `BbWV7D_f9`, Tablet: `FMtHvIDEI` }),
    (X = ({ value: e }) =>
      S()
        ? null
        : i(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `E81iR3GBw`,
    })),
    (Q = g(
      r(function (e, n) {
        let r = o(null),
          c = n ?? r,
          f = te(),
          { activeLocale: p, setLocale: re } = ie(),
          m = se(),
          { style: g, className: _, layoutId: v, variant: S, ...w } = Z(e);
        ue(t(() => pe({}, p), [p]));
        let [D, fe] = le(S, L, !1),
          k = h(z),
          A = a(x)?.isLayoutTemplate,
          j = !!a(u)?.transition?.layout,
          N = V(A, j),
          P = ae(`iyN0yyltj`),
          F = ne();
        return (
          E(),
          oe({}),
          i(x.Provider, {
            value: {
              activeVariantId: D,
              humanReadableVariantMap: Y,
              primaryVariantId: `E81iR3GBw`,
              variantClassNames: B,
            },
            children: s(d, {
              id: v ?? f,
              children: [
                i(X, {
                  value: `html body { background: var(--token-a33c1b5b-e297-4002-8e0e-dc2265f4a460, rgb(0, 13, 14)); }`,
                }),
                s(l.div, {
                  ...w,
                  className: h(k, `framer-e3fqt7`, _),
                  ref: c,
                  style: { ...g },
                  children: [
                    i(l.div, {
                      "aria-label": `Scroll Trigger`,
                      className: `framer-12cyb4f`,
                      "data-framer-name": `Scroll Triger`,
                      id: P,
                      layout: N,
                      ref: F(P),
                    }),
                    s(l.div, {
                      className: `framer-1gw4lb`,
                      "data-framer-name": `Main`,
                      layout: N,
                      children: [
                        i(C, {
                          height: 500,
                          width: `calc(${m?.width || `100vw`} - 40px)`,
                          y: (m?.y || 0) + 160 + 0 + 0 + 0,
                          children: i(y, {
                            className: `framer-1w0rjlb-container`,
                            nodeId: `jxE0G_8EG`,
                            scopeId: `B1ccsbbPp`,
                            children: i(T, {
                              breakpoint: D,
                              overrides: {
                                BbWV7D_f9: { variant: U(`pSNtHM_tN`) },
                                FMtHvIDEI: { variant: U(`ZsEu9N9BR`) },
                              },
                              children: i(M, {
                                height: `100%`,
                                id: `jxE0G_8EG`,
                                l2pnRkKH_: `Consulting`,
                                layoutId: `jxE0G_8EG`,
                                ldDYz64mB: `Explore business transformations driven by practical strategy, collaboration & results.`,
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
                                SdbUp40qY: `Success Stories`,
                                style: { width: `100%` },
                                variant: U(`P143wiNhf`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        i(`section`, {
                          className: `framer-19j2tto`,
                          "data-framer-name": `Cases`,
                          children: i(I, {
                            __framer__animate: { transition: G },
                            __framer__animateOnce: !0,
                            __framer__enter: W,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-1xjqogx`,
                            children: i(ce, {
                              children: i(J, {
                                query: q(),
                                children: (e, t, n) =>
                                  i(ee, {
                                    children: e?.map(
                                      (
                                        {
                                          cN0Ychn2P: e,
                                          eOHobAcGV: t,
                                          I0cWIyBUM: n,
                                          id: r,
                                          LfkY4TS8p: a,
                                          LQ4k8pMWh: o,
                                          PL0YsbUUz: s,
                                        },
                                        c
                                      ) => (
                                        (n ??= ``),
                                        (o ??= ``),
                                        (e ??= ``),
                                        (t ??= ``),
                                        (s ??= ``),
                                        i(
                                          d,
                                          {
                                            id: `ZzcTRRbO4-${r}`,
                                            children: i(b.Provider, {
                                              value: { PL0YsbUUz: s },
                                              children: i(de, {
                                                links: [
                                                  {
                                                    href: {
                                                      pathVariables: { PL0YsbUUz: s },
                                                      webPageId: `Zcp7d8sGp`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: {
                                                      pathVariables: { PL0YsbUUz: s },
                                                      webPageId: `Zcp7d8sGp`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: {
                                                      pathVariables: { PL0YsbUUz: s },
                                                      webPageId: `Zcp7d8sGp`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                ],
                                                children: (r) =>
                                                  i(T, {
                                                    breakpoint: D,
                                                    overrides: {
                                                      BbWV7D_f9: {
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
                                                      FMtHvIDEI: {
                                                        width: `max((min(${m?.width || `100vw`} - 104px, 1300px) - 20px) / 2, 50px)`,
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
                                                      height: 530,
                                                      width: `max((min(${m?.width || `100vw`} - 104px, 1300px) - 40px) / 3, 50px)`,
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
                                                      children: i(y, {
                                                        className: `framer-xrpfhl-container`,
                                                        nodeId: `qwWSxnXIK`,
                                                        scopeId: `B1ccsbbPp`,
                                                        children: i(T, {
                                                          breakpoint: D,
                                                          overrides: {
                                                            BbWV7D_f9: { ten_bIQOV: r[2] },
                                                            FMtHvIDEI: { ten_bIQOV: r[1] },
                                                          },
                                                          children: i(O, {
                                                            fsllypOej: n,
                                                            H3udW32Bc: t,
                                                            height: `100%`,
                                                            id: `qwWSxnXIK`,
                                                            jx2PsilzR: K(a),
                                                            KkQf7cJ4L: o,
                                                            layoutId: `qwWSxnXIK`,
                                                            qseMxDcHx: e,
                                                            style: { width: `100%` },
                                                            ten_bIQOV: r[0],
                                                            variant: U(`X4mawqGhb`),
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
                  ],
                }),
                i(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-NftpB.framer-10boacx, .framer-NftpB .framer-10boacx { display: block; }`,
        `.framer-NftpB.framer-e3fqt7 { align-content: center; align-items: center; background-color: var(--token-a33c1b5b-e297-4002-8e0e-dc2265f4a460, #000d0e); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 160px 20px 160px 20px; position: relative; width: 1200px; }`,
        `.framer-NftpB .framer-12cyb4f { flex: none; height: 1px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: 60px; width: 100%; z-index: 1; }`,
        `.framer-NftpB .framer-1gw4lb { align-content: center; align-items: center; background-color: var(--token-705c06af-cdcf-4608-86f8-396aaf15edc9, #001517); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NftpB .framer-1w0rjlb-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-NftpB .framer-19j2tto { align-content: center; align-items: center; background-color: var(--token-710ade2f-af2d-4eb3-a472-dbe729d9e382, #f5f7f7); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 110px 32px 120px 32px; position: relative; width: 100%; }`,
        `.framer-NftpB .framer-1xjqogx { display: grid; flex: none; gap: 50px 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; max-width: 1300px; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NftpB .framer-xrpfhl-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-NftpB.framer-e3fqt7 { width: 810px; } .framer-NftpB .framer-19j2tto { padding: 90px 32px 120px 32px; } .framer-NftpB .framer-1xjqogx { grid-template-columns: repeat(2, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-NftpB.framer-e3fqt7 { width: 390px; } .framer-NftpB .framer-19j2tto { padding: 80px 16px 90px 16px; } .framer-NftpB .framer-1xjqogx { gap: 32px 20px; grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ],
      `framer-NftpB`
    )),
    (Q.displayName = `Case Studies`),
    (Q.defaultProps = { height: 2879.5, width: 1200 }),
    p(Q, [{ explicitInter: !0, fonts: [] }, ...P, ...F], { supportsExplicitInterCodegen: !0 }),
    (Q.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = w.get(q(), n);
        return Promise.allSettled([
          r.preload(),
          m(M, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => m(O, {}, t)));
          })(),
        ]);
      },
    }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerB1ccsbbPp`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerContractVersion: `1`,
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerScrollSections: `{"iyN0yyltj":{"pattern":":iyN0yyltj","name":"scroll-trigger"}}`,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"FMtHvIDEI":{"layout":["fixed","auto"]},"BbWV7D_f9":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `2879.5`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, R as queryParamNames };
//# sourceMappingURL=ut5MTrj2Ur-0OOspI-S5AB5T-45w-8HqmF9U_JLODx4.BrUaUrPt.mjs.map
