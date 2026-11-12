import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { S as t, Z as n, q as r } from "./framer.B5VSaEF1.mjs";
import { n as i, t as a } from "./shared-lib.Dlb4YuQV.mjs";
import { i as o, t as s } from "./WRyp7sdxk.DoPFXHs7.mjs";
function c(e, t) {
  let n = e?.TImVM2TSg,
    r = e?.CH64cYoSq;
  return {
    breakpoints: [
      { hash: `2n3aia`, mediaQuery: `(min-width: 1200px)` },
      { hash: `194rsto`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `47nskh`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: { ABt36MLMc: `scroll-trigger` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-fmEQR`,
    socialImage: f(r),
    title: `${n === void 0 ? `{{TImVM2TSg}}` : d(n)} — Business Consulting Agency`,
    viewport: `width=device-width`,
  };
}
async function l(e, n) {
  let i = new t(),
    a = {
      from: { alias: `bAcjwMNPv`, data: s, type: `Collection` },
      select: [
        { collection: `bAcjwMNPv`, name: `TImVM2TSg`, type: `Identifier` },
        { collection: `bAcjwMNPv`, name: `CH64cYoSq`, type: `Identifier` },
      ],
      where: r(e, `bAcjwMNPv`),
    },
    o = await i.query(a, n);
  if (o.length === 0) throw Error(`No data matches pathVariables`);
  let l = o[0];
  return c(l, n);
}
async function u(e, n) {
  let r = new t(),
    i = {
      from: { alias: `bAcjwMNPv`, data: s, type: `Collection` },
      select: [
        { collection: `bAcjwMNPv`, name: `TImVM2TSg`, type: `Identifier` },
        { collection: `bAcjwMNPv`, name: `CH64cYoSq`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `bAcjwMNPv`, name: t, type: `Identifier` });
  return (await r.query(i, n)).map((t) => ({
    metadata: c(t, n),
    pathVariables: Object.fromEntries(e.map((e) => [e, t[e]])),
  }));
}
var d,
  f,
  p,
  m,
  h = e(() => {
    (n(),
      o(),
      a(),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (p = 1),
      (m = {
        exports: {
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
h();
export {
  m as __FramerMetadata__,
  c as default,
  u as fetchAllMetadata,
  l as fetchMetadata,
  p as metadataVersion,
  h as t,
};
//# sourceMappingURL=De2dURvW-rjX_Y8ozEbXteA_seldtNHlcCK85JRP4Cs.CGIP5lVC.mjs.map
