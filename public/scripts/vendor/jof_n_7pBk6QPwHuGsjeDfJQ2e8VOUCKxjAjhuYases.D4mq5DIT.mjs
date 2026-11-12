import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  _ as i,
  c as a,
  j as o,
  k as ee,
  l as s,
  o as te,
  s as ne,
  y as re,
} from "./react.CWkcPvHD.mjs";
import { T as c, a as ie, r as l, t as ae } from "./motion.UJ_SjFSS.mjs";
import {
  A as u,
  Ct as oe,
  Dt as se,
  L as d,
  P as f,
  T as p,
  Tt as m,
  U as h,
  W as g,
  Z as _,
  _ as ce,
  _t as le,
  a as v,
  b as ue,
  bt as de,
  c as fe,
  d as pe,
  ft as me,
  ht as he,
  i as y,
  l as b,
  lt as ge,
  n as _e,
  p as ve,
  pt as ye,
  q as x,
  rt as S,
  u as be,
  ut as xe,
  vt as Se,
  w as Ce,
  x as C,
  xt as we,
  yt as Te,
} from "./framer.B5VSaEF1.mjs";
import {
  _ as Ee,
  b as De,
  g as w,
  h as T,
  m as E,
  p as Oe,
  v as D,
  y as ke,
} from "./shared-lib.Dlb4YuQV.mjs";
import { i as O, t as k } from "./WRyp7sdxk.DoPFXHs7.mjs";
import { n as A, t as j } from "./iq8J45AIS.DV-QoLM0.mjs";
import { i as Ae, n as je, r as M, t as Me } from "./H4GEN39UP.CSd0BSRv.mjs";
import { n as N, t as P } from "./Qz0U1kQ59.DcFwlR6q.mjs";
import { n as F, t as I } from "./OpkFe7y1L.BvUeyFnw.mjs";
import { n as L, t as R } from "./OtDDoEBRB.BAwzcbil.mjs";
import {
  C as z,
  S as Ne,
  _ as Pe,
  a as Fe,
  b as Ie,
  c as Le,
  d as Re,
  f as ze,
  g as Be,
  h as Ve,
  i as He,
  l as Ue,
  m as We,
  n as Ge,
  o as Ke,
  p as qe,
  r as Je,
  s as Ye,
  t as Xe,
  u as Ze,
  v as Qe,
  w as $e,
  x as et,
  y as tt,
} from "./ZYbMANjXJ.Bimgxc_D.mjs";
import nt, { t as rt } from "./De2dURvW-rjX_Y8ozEbXteA_seldtNHlcCK85JRP4Cs.CGIP5lVC.mjs";
var B, V, H, U, it, at, W, ot, st, ct, lt, G, K, q, J, ut, dt, Y, X, ft, Z, pt, Q, mt, $, ht;
e(() => {
  (te(),
    _(),
    ae(),
    r(),
    A(),
    F(),
    L(),
    N(),
    O(),
    Ae(),
    $e(),
    Ie(),
    Be(),
    ze(),
    De(),
    w(),
    Le(),
    He(),
    rt(),
    (B = h(P)),
    (V = h(I)),
    (H = se(c.div)),
    (U = h(j)),
    (it = h(R)),
    (at = {
      ausSZQxfG: `(max-width: 809.98px)`,
      fwbkSCLxh: `(min-width: 1200px)`,
      U0_v7YuTf: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (W = []),
    (ot = `framer-fmEQR`),
    (st = {
      ausSZQxfG: `framer-v-47nskh`,
      fwbkSCLxh: `framer-v-2n3aia`,
      U0_v7YuTf: `framer-v-194rsto`,
    }),
    (ct = (e, t, n) => (e && t ? `position` : n)),
    (lt = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (G = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (K = {
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
    (q = { damping: 70, delay: 0.6, mass: 1, stiffness: 210, type: `spring` }),
    (J = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (ut = (e, t, n) => {
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
    (dt = {
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
    (Y = (e) => ({
      from: { alias: `O7z2NUVQl`, data: k, type: `Collection` },
      limit: { type: `LiteralValue`, value: 3 },
      select: [
        { collection: `O7z2NUVQl`, name: `CH64cYoSq`, type: `Identifier` },
        { collection: `O7z2NUVQl`, name: `sk_SngEwe`, type: `Identifier` },
        { collection: `O7z2NUVQl`, name: `TImVM2TSg`, type: `Identifier` },
        { collection: `O7z2NUVQl`, name: `Ezatht0JF`, type: `Identifier` },
        { collection: `O7z2NUVQl`, name: `gURS0n4RS`, type: `Identifier` },
        { collection: `O7z2NUVQl`, name: `id`, type: `Identifier` },
      ],
      where: {
        operator: `not`,
        type: `UnaryOperation`,
        value: {
          left: { collection: `O7z2NUVQl`, name: `id`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
      },
    })),
    (X = (e) => ({
      from: { alias: `O7z2NUVQl`, data: k, type: `Collection` },
      limit: { type: `LiteralValue`, value: 2 },
      select: [
        { collection: `O7z2NUVQl`, name: `CH64cYoSq`, type: `Identifier` },
        { collection: `O7z2NUVQl`, name: `sk_SngEwe`, type: `Identifier` },
        { collection: `O7z2NUVQl`, name: `TImVM2TSg`, type: `Identifier` },
        { collection: `O7z2NUVQl`, name: `Ezatht0JF`, type: `Identifier` },
        { collection: `O7z2NUVQl`, name: `gURS0n4RS`, type: `Identifier` },
        { collection: `O7z2NUVQl`, name: `id`, type: `Identifier` },
      ],
      where: {
        operator: `not`,
        type: `UnaryOperation`,
        value: {
          left: { collection: `O7z2NUVQl`, name: `id`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
      },
    })),
    (ft = ({ query: e, pageSize: t, children: n }) => n(Te(e))),
    (Z = { Desktop: `fwbkSCLxh`, Phone: `ausSZQxfG`, Tablet: `U0_v7YuTf` }),
    (pt = ({ value: e }) =>
      he()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Q = (e) => ({
      from: { alias: `bAcjwMNPv`, data: k, type: `Collection` },
      select: [
        { collection: `bAcjwMNPv`, name: `TImVM2TSg`, type: `Identifier` },
        { collection: `bAcjwMNPv`, name: `Ezatht0JF`, type: `Identifier` },
        { collection: `bAcjwMNPv`, name: `CH64cYoSq`, type: `Identifier` },
        { collection: `bAcjwMNPv`, name: `hGvwulSfD`, type: `Identifier` },
        { collection: `bAcjwMNPv`, name: `qKIjUCwkX`, type: `Identifier` },
        { collection: `bAcjwMNPv`, name: `id`, type: `Identifier` },
      ],
      where: e,
    })),
    (mt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `fwbkSCLxh`,
    })),
    ($ = m(
      i(function (e, r) {
        let i = ee(null),
          te = r ?? i,
          ae = re(),
          { activeLocale: u, setLocale: se } = le(),
          d = ge(),
          m = xe(),
          [h] = Te(Q(x(m, `bAcjwMNPv`))),
          g = (e) => {
            if (!h) throw new ce(`No data matches path variables: ${JSON.stringify(m)}`);
            return h[e];
          },
          {
            style: _,
            className: he,
            layoutId: S,
            variant: De,
            TImVM2TSg: w = g(`TImVM2TSg`) ?? ``,
            Ezatht0JF: T = g(`Ezatht0JF`) ?? ``,
            CH64cYoSq: E = g(`CH64cYoSq`),
            hGvwulSfD: D = g(`hGvwulSfD`) ?? ``,
            qKIjUCwkX: ke = g(`qKIjUCwkX`) ?? ``,
            id: O = g(`id`),
            ...k
          } = mt(e);
        Se(n(() => nt({ CH64cYoSq: E, TImVM2TSg: w }, u), [E, w, u]));
        let [A, Ae] = ye(De, at, !1),
          je = f(ot, Ue, Xe, Fe, Pe, Ee, qe, et, Oe, Me),
          M = o(pe)?.isLayoutTemplate,
          N = !!o(ie)?.transition?.layout,
          F = ct(M, N),
          L = de(`ABt36MLMc`),
          z = oe();
        return (
          we(),
          me({}),
          a(pe.Provider, {
            value: {
              activeVariantId: A,
              humanReadableVariantMap: Z,
              primaryVariantId: `fwbkSCLxh`,
              variantClassNames: st,
            },
            children: s(l, {
              id: S ?? ae,
              children: [
                a(pt, {
                  value: `html body { background: var(--token-a33c1b5b-e297-4002-8e0e-dc2265f4a460, rgb(0, 13, 14)); }`,
                }),
                s(c.div, {
                  ...k,
                  className: f(je, `framer-2n3aia`, he),
                  ref: te,
                  style: { ..._ },
                  children: [
                    a(c.div, {
                      "aria-label": `Scroll Trigger`,
                      className: `framer-1pogbvs`,
                      "data-framer-name": `Scroll Triger`,
                      id: L,
                      layout: F,
                      ref: z(L),
                    }),
                    s(c.div, {
                      className: `framer-1tdf4le`,
                      "data-framer-name": `Main`,
                      layout: F,
                      children: [
                        a(y, {
                          height: 500,
                          width: `calc(${d?.width || `100vw`} - 40px)`,
                          children: a(v, {
                            className: `framer-dfxgv5-container`,
                            nodeId: `xziT0f7Xl`,
                            scopeId: `bAcjwMNPv`,
                            children: a(C, {
                              breakpoint: A,
                              overrides: {
                                ausSZQxfG: { variant: G(`pSNtHM_tN`) },
                                U0_v7YuTf: { variant: G(`ZsEu9N9BR`) },
                              },
                              children: a(P, {
                                height: `100%`,
                                id: `xziT0f7Xl`,
                                l2pnRkKH_: `Consulting`,
                                layoutId: `xziT0f7Xl`,
                                ldDYz64mB: T,
                                NIiecT1dL: `Date`,
                                sb0ubaw0c: lt(
                                  {
                                    pixelHeight: 3754,
                                    pixelWidth: 5e3,
                                    src: `https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?width=5000&height=3754`,
                                    srcSet: `https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?scale-down-to=512&width=5000&height=3754 512w,https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?scale-down-to=1024&width=5000&height=3754 1024w,https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?scale-down-to=2048&width=5000&height=3754 2048w,https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?scale-down-to=4096&width=5000&height=3754 4096w,https://framerusercontent.com/images/3EkROfxNMK8dOeytKe7yMlFfS4.webp?width=5000&height=3754 5000w`,
                                  },
                                  ``
                                ),
                                SdbUp40qY: w,
                                style: { width: `100%` },
                                variant: G(`P143wiNhf`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        a(`section`, {
                          className: `framer-1wqgsg`,
                          "data-framer-name": `Services`,
                          children: s(H, {
                            __framer__animate: { transition: q },
                            __framer__animateOnce: !0,
                            __framer__enter: K,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-1fe5dgd`,
                            "data-framer-name": `Inner`,
                            children: [
                              s(`div`, {
                                className: `framer-18mddwb`,
                                "data-framer-name": `Content`,
                                children: [
                                  a(p, {
                                    __fromCanvasComponent: !0,
                                    children: D,
                                    className: `framer-f1kgra`,
                                    fonts: [`Inter`],
                                    stylesPresetsClassNames: {
                                      a: `framer-styles-preset-1betvch`,
                                      code: `framer-styles-preset-1mav4qy`,
                                      h1: `framer-styles-preset-6x4h1n`,
                                      h2: `framer-styles-preset-1wyoo49`,
                                      h3: `framer-styles-preset-stkc5n`,
                                      h5: `framer-styles-preset-173n1xv`,
                                      p: `framer-styles-preset-1bsm36g`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(C, {
                                    breakpoint: A,
                                    overrides: {
                                      ausSZQxfG: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 3200,
                                          intrinsicWidth: 4800,
                                          pixelHeight: 5631,
                                          pixelWidth: 9245,
                                          sizes: `min(${d?.width || `100vw`} - 72px, 1300px)`,
                                          ...J(E),
                                        },
                                      },
                                      U0_v7YuTf: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 3200,
                                          intrinsicWidth: 4800,
                                          pixelHeight: 5631,
                                          pixelWidth: 9245,
                                          sizes: `min(${d?.width || `100vw`} - 104px, 1300px)`,
                                          ...J(E),
                                        },
                                      },
                                    },
                                    children: a(ve, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 3200,
                                        intrinsicWidth: 4800,
                                        pixelHeight: 5631,
                                        pixelWidth: 9245,
                                        sizes: `max((min(${d?.width || `100vw`} - 104px, 1300px) - 90px) / 1.7, 1px)`,
                                        ...J(E),
                                      },
                                      className: `framer-1gn6qa0`,
                                      "data-framer-name": `Image`,
                                    }),
                                  }),
                                  a(p, {
                                    __fromCanvasComponent: !0,
                                    children: ke,
                                    className: `framer-17zc3ri`,
                                    fonts: [`Inter`],
                                    stylesPresetsClassNames: {
                                      a: `framer-styles-preset-1betvch`,
                                      code: `framer-styles-preset-1mav4qy`,
                                      h1: `framer-styles-preset-6x4h1n`,
                                      h2: `framer-styles-preset-1wyoo49`,
                                      h3: `framer-styles-preset-stkc5n`,
                                      h5: `framer-styles-preset-173n1xv`,
                                      p: `framer-styles-preset-1bsm36g`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-1oas642`,
                                "data-framer-name": `Form`,
                                children: a(fe, {
                                  action: `https://api.framer.com/forms/v1/forms/b77b8f24-0c79-4f19-830e-b2254818e465/submit`,
                                  className: `framer-10jt789`,
                                  nodeId: `j_cJavzwZ`,
                                  children: (e) =>
                                    s(ne, {
                                      children: [
                                        s(`div`, {
                                          className: `framer-c0zx6x`,
                                          "data-framer-name": `fields`,
                                          children: [
                                            s(`div`, {
                                              className: `framer-1fa07nz`,
                                              "data-framer-name": `name`,
                                              children: [
                                                s(`label`, {
                                                  className: `framer-1cl638z`,
                                                  children: [
                                                    a(C, {
                                                      breakpoint: A,
                                                      overrides: {
                                                        ausSZQxfG: {
                                                          children: a(t, {
                                                            children: a(`p`, {
                                                              className: `framer-styles-preset-ar7l3c`,
                                                              "data-styles-preset": `VpaJFpv2y`,
                                                              dir: `auto`,
                                                              children: `Full Name*`,
                                                            }),
                                                          }),
                                                        },
                                                        U0_v7YuTf: {
                                                          children: a(t, {
                                                            children: a(`p`, {
                                                              className: `framer-styles-preset-ar7l3c`,
                                                              "data-styles-preset": `VpaJFpv2y`,
                                                              dir: `auto`,
                                                              children: `Full Name*`,
                                                            }),
                                                          }),
                                                        },
                                                      },
                                                      children: a(p, {
                                                        __fromCanvasComponent: !0,
                                                        children: a(t, {
                                                          children: a(`p`, {
                                                            className: `framer-styles-preset-1xheykw`,
                                                            "data-styles-preset": `vz9muakNv`,
                                                            dir: `auto`,
                                                            children: `Full Name*`,
                                                          }),
                                                        }),
                                                        className: `framer-136gzpl`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    a(b, {
                                                      className: `framer-1p2k211`,
                                                      inputName: `Full Name`,
                                                      placeholder: `Jordan Feliz`,
                                                      required: !0,
                                                      type: `text`,
                                                    }),
                                                  ],
                                                }),
                                                s(`label`, {
                                                  className: `framer-14b4d3a`,
                                                  children: [
                                                    a(C, {
                                                      breakpoint: A,
                                                      overrides: {
                                                        ausSZQxfG: {
                                                          children: a(t, {
                                                            children: a(`p`, {
                                                              className: `framer-styles-preset-ar7l3c`,
                                                              "data-styles-preset": `VpaJFpv2y`,
                                                              dir: `auto`,
                                                              children: `Company Name`,
                                                            }),
                                                          }),
                                                        },
                                                        U0_v7YuTf: {
                                                          children: a(t, {
                                                            children: a(`p`, {
                                                              className: `framer-styles-preset-ar7l3c`,
                                                              "data-styles-preset": `VpaJFpv2y`,
                                                              dir: `auto`,
                                                              children: `Company Name`,
                                                            }),
                                                          }),
                                                        },
                                                      },
                                                      children: a(p, {
                                                        __fromCanvasComponent: !0,
                                                        children: a(t, {
                                                          children: a(`p`, {
                                                            className: `framer-styles-preset-1xheykw`,
                                                            "data-styles-preset": `vz9muakNv`,
                                                            dir: `auto`,
                                                            children: `Company Name`,
                                                          }),
                                                        }),
                                                        className: `framer-969nzc`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    a(b, {
                                                      className: `framer-jo4jue`,
                                                      inputName: `Company Name`,
                                                      placeholder: `Framer Inc.`,
                                                      type: `text`,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            s(`div`, {
                                              className: `framer-lovs1j`,
                                              "data-framer-name": `contact`,
                                              children: [
                                                s(`label`, {
                                                  className: `framer-4g5zqp`,
                                                  children: [
                                                    a(C, {
                                                      breakpoint: A,
                                                      overrides: {
                                                        ausSZQxfG: {
                                                          children: a(t, {
                                                            children: a(`p`, {
                                                              className: `framer-styles-preset-ar7l3c`,
                                                              "data-styles-preset": `VpaJFpv2y`,
                                                              dir: `auto`,
                                                              children: `Email*`,
                                                            }),
                                                          }),
                                                        },
                                                        U0_v7YuTf: {
                                                          children: a(t, {
                                                            children: a(`p`, {
                                                              className: `framer-styles-preset-ar7l3c`,
                                                              "data-styles-preset": `VpaJFpv2y`,
                                                              dir: `auto`,
                                                              children: `Email*`,
                                                            }),
                                                          }),
                                                        },
                                                      },
                                                      children: a(p, {
                                                        __fromCanvasComponent: !0,
                                                        children: a(t, {
                                                          children: a(`p`, {
                                                            className: `framer-styles-preset-1xheykw`,
                                                            "data-styles-preset": `vz9muakNv`,
                                                            dir: `auto`,
                                                            children: `Email*`,
                                                          }),
                                                        }),
                                                        className: `framer-o9x973`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    a(b, {
                                                      className: `framer-189huj2`,
                                                      inputName: `Email`,
                                                      placeholder: `jordan@email.com`,
                                                      required: !0,
                                                      type: `email`,
                                                    }),
                                                  ],
                                                }),
                                                s(`label`, {
                                                  className: `framer-10f5u60`,
                                                  children: [
                                                    a(C, {
                                                      breakpoint: A,
                                                      overrides: {
                                                        ausSZQxfG: {
                                                          children: a(t, {
                                                            children: a(`p`, {
                                                              className: `framer-styles-preset-ar7l3c`,
                                                              "data-styles-preset": `VpaJFpv2y`,
                                                              dir: `auto`,
                                                              children: `Phone`,
                                                            }),
                                                          }),
                                                        },
                                                        U0_v7YuTf: {
                                                          children: a(t, {
                                                            children: a(`p`, {
                                                              className: `framer-styles-preset-ar7l3c`,
                                                              "data-styles-preset": `VpaJFpv2y`,
                                                              dir: `auto`,
                                                              children: `Phone`,
                                                            }),
                                                          }),
                                                        },
                                                      },
                                                      children: a(p, {
                                                        __fromCanvasComponent: !0,
                                                        children: a(t, {
                                                          children: a(`p`, {
                                                            className: `framer-styles-preset-1xheykw`,
                                                            "data-styles-preset": `vz9muakNv`,
                                                            dir: `auto`,
                                                            children: `Phone`,
                                                          }),
                                                        }),
                                                        className: `framer-hiv185`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    a(b, {
                                                      className: `framer-1lvdsmf`,
                                                      inputName: `Phone`,
                                                      placeholder: `+44`,
                                                      type: `tel`,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            s(`label`, {
                                              className: `framer-15vhjfx`,
                                              children: [
                                                a(C, {
                                                  breakpoint: A,
                                                  overrides: {
                                                    ausSZQxfG: {
                                                      children: a(t, {
                                                        children: a(`p`, {
                                                          className: `framer-styles-preset-ar7l3c`,
                                                          "data-styles-preset": `VpaJFpv2y`,
                                                          dir: `auto`,
                                                          children: `What do you need help with?*`,
                                                        }),
                                                      }),
                                                    },
                                                    U0_v7YuTf: {
                                                      children: a(t, {
                                                        children: a(`p`, {
                                                          className: `framer-styles-preset-ar7l3c`,
                                                          "data-styles-preset": `VpaJFpv2y`,
                                                          dir: `auto`,
                                                          children: `What do you need help with?*`,
                                                        }),
                                                      }),
                                                    },
                                                  },
                                                  children: a(p, {
                                                    __fromCanvasComponent: !0,
                                                    children: a(t, {
                                                      children: a(`p`, {
                                                        className: `framer-styles-preset-1xheykw`,
                                                        "data-styles-preset": `vz9muakNv`,
                                                        dir: `auto`,
                                                        children: `What do you need help with?*`,
                                                      }),
                                                    }),
                                                    className: `framer-3sv4u5`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                                a(be, {
                                                  className: `framer-1kj66kv`,
                                                  defaultValue: ``,
                                                  inputName: `Service`,
                                                  required: !0,
                                                  selectOptions: [
                                                    {
                                                      disabled: !0,
                                                      title: `Select…`,
                                                      type: `option`,
                                                      value: ``,
                                                    },
                                                    {
                                                      title: `Growth Consulting`,
                                                      type: `option`,
                                                      value: `Growth Consulting`,
                                                    },
                                                    {
                                                      title: `Financial Advisory`,
                                                      type: `option`,
                                                      value: `Financial Advisory`,
                                                    },
                                                    {
                                                      title: `Business Admissions`,
                                                      type: `option`,
                                                      value: `Business Admissions`,
                                                    },
                                                    {
                                                      title: `Scholarships & Financial Aid`,
                                                      type: `option`,
                                                      value: `Scholarships & Financial Aid`,
                                                    },
                                                    {
                                                      title: `Entrance Exam Guidance`,
                                                      type: `option`,
                                                      value: `Entrance Exam Guidance`,
                                                    },
                                                    {
                                                      title: `Scholarships Advisory`,
                                                      type: `option`,
                                                      value: `Scholarships Advisory`,
                                                    },
                                                    {
                                                      title: `General Inquiry`,
                                                      type: `option`,
                                                      value: `General Inquiry`,
                                                    },
                                                  ],
                                                }),
                                              ],
                                            }),
                                            s(`label`, {
                                              className: `framer-7n1drr`,
                                              children: [
                                                a(C, {
                                                  breakpoint: A,
                                                  overrides: {
                                                    ausSZQxfG: {
                                                      children: a(t, {
                                                        children: a(`p`, {
                                                          className: `framer-styles-preset-ar7l3c`,
                                                          "data-styles-preset": `VpaJFpv2y`,
                                                          dir: `auto`,
                                                          children: `Message*`,
                                                        }),
                                                      }),
                                                    },
                                                    U0_v7YuTf: {
                                                      children: a(t, {
                                                        children: a(`p`, {
                                                          className: `framer-styles-preset-ar7l3c`,
                                                          "data-styles-preset": `VpaJFpv2y`,
                                                          dir: `auto`,
                                                          children: `Message*`,
                                                        }),
                                                      }),
                                                    },
                                                  },
                                                  children: a(p, {
                                                    __fromCanvasComponent: !0,
                                                    children: a(t, {
                                                      children: a(`p`, {
                                                        className: `framer-styles-preset-1xheykw`,
                                                        "data-styles-preset": `vz9muakNv`,
                                                        dir: `auto`,
                                                        children: `Message*`,
                                                      }),
                                                    }),
                                                    className: `framer-10k9jmu`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                                a(b, {
                                                  className: `framer-o0knza`,
                                                  inputName: `Message`,
                                                  placeholder: `Your Message`,
                                                  required: !0,
                                                  type: `textarea`,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        a(`div`, {
                                          className: `framer-1shwfl`,
                                          "data-framer-name": `button`,
                                          children: a(C, {
                                            breakpoint: A,
                                            overrides: {
                                              ausSZQxfG: {
                                                width: `calc(min(min(${d?.width || `100vw`} - 72px, 1300px), 551px) - 48px)`,
                                              },
                                              U0_v7YuTf: {
                                                width: `calc(min(${d?.width || `100vw`} - 104px, 1300px) - 72px)`,
                                              },
                                            },
                                            children: a(y, {
                                              height: 47,
                                              width: `calc(min(max((min(${d?.width || `100vw`} - 104px, 1300px) - 90px) * 0.4118, 1px), 551px) - 72px)`,
                                              children: a(v, {
                                                className: `framer-uywaxn-container`,
                                                nodeId: `V6zu_5g7m`,
                                                scopeId: `bAcjwMNPv`,
                                                children: a(I, {
                                                  height: `100%`,
                                                  id: `V6zu_5g7m`,
                                                  layoutId: `V6zu_5g7m`,
                                                  style: { width: `100%` },
                                                  type: `submit`,
                                                  variant: ut(
                                                    e,
                                                    {
                                                      error: `Vv_UAqUy1`,
                                                      incomplete: `wy_sIIrA4`,
                                                      success: `vABjaDKXQ`,
                                                    },
                                                    G(`KojPjH1u9`)
                                                  ),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        a(`section`, {
                          className: `framer-hz5b5a`,
                          "data-framer-name": `More`,
                          children: s(`div`, {
                            className: `framer-28267d`,
                            "data-framer-name": `Container`,
                            children: [
                              s(`div`, {
                                className: `framer-59ut3m`,
                                "data-framer-name": `Heading`,
                                children: [
                                  a(y, {
                                    height: 13,
                                    children: a(v, {
                                      className: `framer-119dbu4-container`,
                                      "data-framer-name": `Tag`,
                                      name: `Tag`,
                                      nodeId: `T7wRz6uvi`,
                                      scopeId: `bAcjwMNPv`,
                                      children: a(j, {
                                        height: `100%`,
                                        id: `T7wRz6uvi`,
                                        layoutId: `T7wRz6uvi`,
                                        name: `Tag`,
                                        variant: G(`pqmTc8b_A`),
                                        width: `100%`,
                                        XqtCAHGpt: `Our Services`,
                                      }),
                                    }),
                                  }),
                                  a(p, {
                                    __fromCanvasComponent: !0,
                                    children: a(t, {
                                      children: a(`h2`, {
                                        className: `framer-styles-preset-hcmt7i`,
                                        "data-styles-preset": `H4GEN39UP`,
                                        dir: `auto`,
                                        children: `Explore More Business Services`,
                                      }),
                                    }),
                                    className: `framer-1qrl83t`,
                                    effect: dt,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(H, {
                                __framer__animate: { transition: q },
                                __framer__animateOnce: !0,
                                __framer__enter: K,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1fc8c4u`,
                                "data-framer-name": `Service`,
                                children: a(_e, {
                                  children: a(C, {
                                    breakpoint: A,
                                    overrides: {
                                      ausSZQxfG: { query: X(O) },
                                      U0_v7YuTf: { query: X(O) },
                                    },
                                    children: a(ft, {
                                      query: Y(O),
                                      children: (e, t, n) =>
                                        a(ne, {
                                          children: e?.map(
                                            (
                                              {
                                                CH64cYoSq: e,
                                                Ezatht0JF: t,
                                                gURS0n4RS: n,
                                                id: r,
                                                sk_SngEwe: i,
                                                TImVM2TSg: o,
                                              },
                                              ee
                                            ) => (
                                              (o ??= ``),
                                              (t ??= ``),
                                              (n ??= ``),
                                              a(
                                                l,
                                                {
                                                  id: `O7z2NUVQl-${r}`,
                                                  children: a(ue.Provider, {
                                                    value: { gURS0n4RS: n },
                                                    children: a(Ce, {
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
                                                        a(C, {
                                                          breakpoint: A,
                                                          overrides: {
                                                            ausSZQxfG: {
                                                              width: `max(min(${d?.width || `100vw`} - 72px, 1300px), 50px)`,
                                                            },
                                                            U0_v7YuTf: {
                                                              width: `max((min(${d?.width || `100vw`} - 104px, 1300px) - 22px) / 2, 50px)`,
                                                            },
                                                          },
                                                          children: a(y, {
                                                            height: 469,
                                                            width: `max((min(${d?.width || `100vw`} - 104px, 1300px) - 44px) / 3, 50px)`,
                                                            children: a(v, {
                                                              className: `framer-11ra4az-container`,
                                                              nodeId: `V7Rw7bdDZ`,
                                                              scopeId: `bAcjwMNPv`,
                                                              children: a(C, {
                                                                breakpoint: A,
                                                                overrides: {
                                                                  ausSZQxfG: {
                                                                    J7XtChCOg: n[2],
                                                                    variant: G(`vovzQvYvl`),
                                                                  },
                                                                  U0_v7YuTf: { J7XtChCOg: n[1] },
                                                                },
                                                                children: a(R, {
                                                                  height: `100%`,
                                                                  id: `V7Rw7bdDZ`,
                                                                  IXjxfLLdn: t,
                                                                  J7XtChCOg: n[0],
                                                                  layoutId: `V7Rw7bdDZ`,
                                                                  mg8DYYsxQ: J(e),
                                                                  OhstHbEXF: i,
                                                                  style: { width: `100%` },
                                                                  variant: G(`BHObDvU6T`),
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
                      ],
                    }),
                  ],
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-fmEQR.framer-14zz2ie, .framer-fmEQR .framer-14zz2ie { display: block; }`,
        `.framer-fmEQR.framer-2n3aia { align-content: center; align-items: center; background-color: var(--token-a33c1b5b-e297-4002-8e0e-dc2265f4a460, #000d0e); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 140px 20px 140px 20px; position: relative; width: 1200px; }`,
        `.framer-fmEQR .framer-1pogbvs { flex: none; height: 1px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: 60px; width: 100%; z-index: 1; }`,
        `.framer-fmEQR .framer-1tdf4le { align-content: center; align-items: center; background-color: var(--token-705c06af-cdcf-4608-86f8-396aaf15edc9, #001517); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-dfxgv5-container, .framer-fmEQR .framer-uywaxn-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-1wqgsg { align-content: center; align-items: center; background-color: var(--token-8597472e-8530-4424-91fc-d5043dad4450, #fffdf2); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 110px 32px 120px 32px; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-1fe5dgd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 90px; height: min-content; justify-content: center; max-width: 1300px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-18mddwb { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-fmEQR .framer-f1kgra, .framer-fmEQR .framer-17zc3ri { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; opacity: 0.9; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-fmEQR .framer-1gn6qa0 { aspect-ratio: 1.3642857142857143 / 1; border-bottom-left-radius: 22px; border-bottom-right-radius: 22px; border-top-left-radius: 22px; border-top-right-radius: 22px; flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-1oas642 { align-content: center; align-items: center; background-color: var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, #ffffff); border-bottom-left-radius: 22px; border-bottom-right-radius: 22px; border-top-left-radius: 22px; border-top-right-radius: 22px; display: flex; flex: 0.7 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 551px; overflow: var(--overflow-clip-fallback, clip); padding: 36px; position: sticky; top: 75px; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-fmEQR .framer-10jt789 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-c0zx6x, .framer-fmEQR .framer-1shwfl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-1fa07nz, .framer-fmEQR .framer-lovs1j { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-1cl638z, .framer-fmEQR .framer-14b4d3a, .framer-fmEQR .framer-4g5zqp, .framer-fmEQR .framer-10f5u60 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-136gzpl, .framer-fmEQR .framer-969nzc, .framer-fmEQR .framer-o9x973, .framer-fmEQR .framer-hiv185, .framer-fmEQR .framer-3sv4u5, .framer-fmEQR .framer-10k9jmu { flex: none; height: auto; opacity: 0.6; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-fmEQR .framer-1p2k211, .framer-fmEQR .framer-jo4jue, .framer-fmEQR .framer-189huj2, .framer-fmEQR .framer-1lvdsmf { --framer-input-background: var(--token-8597472e-8530-4424-91fc-d5043dad4450, #fffdf2); --framer-input-border-radius-bottom-left: 12px; --framer-input-border-radius-bottom-right: 12px; --framer-input-border-radius-top-left: 12px; --framer-input-border-radius-top-right: 12px; --framer-input-focused-border-color: #c9e6ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, #FFDB58); --framer-input-font-family: "Golos Text"; --framer-input-font-letter-spacing: -0.1px; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px 16px 12px 16px; --framer-input-placeholder-color: var(--token-b3d581bc-3541-4047-b0a1-e263eb935a8f, rgba(8, 20, 46, 0.29)); --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-15vhjfx, .framer-fmEQR .framer-7n1drr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-1kj66kv { --framer-input-background: var(--token-8597472e-8530-4424-91fc-d5043dad4450, #fffdf2); --framer-input-border-radius-bottom-left: 12px; --framer-input-border-radius-bottom-right: 12px; --framer-input-border-radius-top-left: 12px; --framer-input-border-radius-top-right: 12px; --framer-input-focused-border-color: #c9e6ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, #FFDB58); --framer-input-font-family: "Golos Text"; --framer-input-font-letter-spacing: -0.1px; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-invalid-text-color: var(--token-b3d581bc-3541-4047-b0a1-e263eb935a8f, rgba(8, 20, 46, 0.29)); --framer-input-padding: 12px 16px 12px 16px; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-o0knza { --framer-input-background: var(--token-8597472e-8530-4424-91fc-d5043dad4450, #fffdf2); --framer-input-border-radius-bottom-left: 12px; --framer-input-border-radius-bottom-right: 12px; --framer-input-border-radius-top-left: 12px; --framer-input-border-radius-top-right: 12px; --framer-input-focused-border-color: #c9e6ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, #FFDB58); --framer-input-font-family: "Golos Text"; --framer-input-font-letter-spacing: -0.1px; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px 16px 12px 16px; --framer-input-placeholder-color: var(--token-b3d581bc-3541-4047-b0a1-e263eb935a8f, rgba(8, 20, 46, 0.29)); --framer-input-wrapper-height: auto; flex: none; height: auto; min-height: 140px; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-hz5b5a { align-content: center; align-items: center; background-color: var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 100px 32px 140px 32px; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-28267d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 45px; height: min-content; justify-content: center; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-59ut3m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-119dbu4-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-fmEQR .framer-1qrl83t { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 600px; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-1fc8c4u { display: grid; flex: none; gap: 36px 22px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-fmEQR .framer-11ra4az-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        ...Ze,
        ...Ge,
        ...Ke,
        ...Qe,
        ...D,
        ...We,
        ...Ne,
        ...E,
        ...je,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-fmEQR.framer-2n3aia { width: 810px; } .framer-fmEQR .framer-1wqgsg { padding: 90px 32px 120px 32px; } .framer-fmEQR .framer-1fe5dgd { flex-direction: column; } .framer-fmEQR .framer-18mddwb { flex: none; width: 100%; } .framer-fmEQR .framer-1gn6qa0 { aspect-ratio: 1.5541666666666667 / 1; } .framer-fmEQR .framer-1oas642 { flex: none; max-width: unset; width: 100%; } .framer-fmEQR .framer-10jt789 { gap: 0px; } .framer-fmEQR .framer-hz5b5a { padding: 90px 32px 140px 32px; } .framer-fmEQR .framer-1fc8c4u { grid-template-columns: repeat(2, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-fmEQR.framer-2n3aia { width: 390px; } .framer-fmEQR .framer-1wqgsg { padding: 80px 16px 70px 16px; } .framer-fmEQR .framer-1fe5dgd { flex-direction: column; gap: 80px; } .framer-fmEQR .framer-18mddwb { flex: none; width: 100%; } .framer-fmEQR .framer-1gn6qa0 { aspect-ratio: 1.11875 / 1; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; } .framer-fmEQR .framer-1oas642 { flex: none; gap: 24px; padding: 24px; width: 100%; } .framer-fmEQR .framer-10jt789 { gap: 24px; } .framer-fmEQR .framer-1fa07nz, .framer-fmEQR .framer-lovs1j { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-fmEQR .framer-o0knza { min-height: 180px; } .framer-fmEQR .framer-hz5b5a { padding: 80px 16px 90px 16px; } .framer-fmEQR .framer-1fc8c4u { gap: 32px 20px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ],
      `framer-fmEQR`
    )),
    ($.displayName = `Services`),
    ($.defaultProps = { height: 4974.5, width: 1200 }),
    u(
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
        ...B,
        ...V,
        ...U,
        ...it,
        ...g(Re),
        ...g(Je),
        ...g(Ye),
        ...g(tt),
        ...g(ke),
        ...g(Ve),
        ...g(z),
        ...g(T),
        ...g(M),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = S.get(Q(x(t.pathVariables, `bAcjwMNPv`)), n).readMaybeAsync();
        return Promise.allSettled([
          d(P, {}, t),
          d(I, {}, t),
          d(j, {}, t),
          (async () => {
            let [e] = (await r) ?? [];
            return Promise.allSettled([S.get(Y(e?.id), n).preload(), S.get(X(e?.id), n).preload()]);
          })(),
          (async () => {
            let [e] = (await r) ?? [],
              i = (await S.get(Y(e?.id), n).readMaybeAsync()) ?? [];
            return Promise.allSettled(i.flatMap((e) => d(R, {}, t)));
          })(),
        ]);
      },
    }),
    (ht = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerbAcjwMNPv`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1200`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"U0_v7YuTf":{"layout":["fixed","auto"]},"ausSZQxfG":{"layout":["fixed","auto"]}}}`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerVectorSets: `["omX0gWFPqDwhaiWwf6ab"]`,
            framerIntrinsicHeight: `4974.5`,
            framerScrollSections: `{"ABt36MLMc":{"pattern":":ABt36MLMc","name":"scroll-trigger"}}`,
            framerResponsiveScreen: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ht as __FramerMetadata__, $ as default, W as queryParamNames };
//# sourceMappingURL=jof_n_7pBk6QPwHuGsjeDfJQ2e8VOUCKxjAjhuYases.D4mq5DIT.mjs.map
