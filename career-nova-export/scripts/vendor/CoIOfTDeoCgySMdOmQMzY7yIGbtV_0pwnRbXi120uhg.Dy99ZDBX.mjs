import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { S as t, Z as n, q as r } from "./framer.B5VSaEF1.mjs";
import { n as i, t as a } from "./shared-lib.Dlb4YuQV.mjs";
import { i as o, t as s } from "./MgDkoXCTm.eQuaoENj.mjs";
function c(e, t) {
  let n = e?.I0cWIyBUM,
    r = e?.LfkY4TS8p;
  return {
    breakpoints: [
      { hash: `160lerd`, mediaQuery: `(min-width: 1200px)` },
      { hash: `ia36w3`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1g1eawu`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: { x867lmBcl: `scroll-trigger` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-8F5BX`,
    socialImage: f(r),
    title: `${n === void 0 ? `{{I0cWIyBUM}}` : d(n)} — Business Consulting Agency`,
    viewport: `width=device-width`,
  };
}
async function l(e, n) {
  let i = new t(),
    a = {
      from: { alias: `Zcp7d8sGp`, data: s, type: `Collection` },
      select: [
        { collection: `Zcp7d8sGp`, name: `I0cWIyBUM`, type: `Identifier` },
        { collection: `Zcp7d8sGp`, name: `LfkY4TS8p`, type: `Identifier` },
      ],
      where: r(e, `Zcp7d8sGp`),
    },
    o = await i.query(a, n);
  if (o.length === 0) throw Error(`No data matches pathVariables`);
  let l = o[0];
  return c(l, n);
}
async function u(e, n) {
  let r = new t(),
    i = {
      from: { alias: `Zcp7d8sGp`, data: s, type: `Collection` },
      select: [
        { collection: `Zcp7d8sGp`, name: `I0cWIyBUM`, type: `Identifier` },
        { collection: `Zcp7d8sGp`, name: `LfkY4TS8p`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `Zcp7d8sGp`, name: t, type: `Identifier` });
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
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
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
//# sourceMappingURL=CoIOfTDeoCgySMdOmQMzY7yIGbtV_0pwnRbXi120uhg.Dy99ZDBX.mjs.map
