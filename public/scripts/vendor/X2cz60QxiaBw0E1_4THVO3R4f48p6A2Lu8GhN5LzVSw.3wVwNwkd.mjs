import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { S as t, Z as n, q as r } from "./framer.B5VSaEF1.mjs";
import { n as i, t as a } from "./shared-lib.Dlb4YuQV.mjs";
import { i as o, t as s } from "./auTZY4oaD.CiWilCi0.mjs";
function c(e, t) {
  let n = e?.TRRxvReo0,
    r = e?.Hz3oIYPRx;
  return {
    breakpoints: [
      { hash: `1iqn34t`, mediaQuery: `(min-width: 1200px)` },
      { hash: `h6v1co`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1i1eikq`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: { NosDil9Na: `scroll-trigger` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-26uno`,
    socialImage: f(r),
    title: `${n === void 0 ? `{{TRRxvReo0}}` : d(n)} — Business Consulting Agency`,
    viewport: `width=device-width`,
  };
}
async function l(e, n) {
  let i = new t(),
    a = {
      from: { alias: `t_mmcsO67`, data: s, type: `Collection` },
      select: [
        { collection: `t_mmcsO67`, name: `TRRxvReo0`, type: `Identifier` },
        { collection: `t_mmcsO67`, name: `Hz3oIYPRx`, type: `Identifier` },
      ],
      where: r(e, `t_mmcsO67`),
    },
    o = await i.query(a, n);
  if (o.length === 0) throw Error(`No data matches pathVariables`);
  let l = o[0];
  return c(l, n);
}
async function u(e, n) {
  let r = new t(),
    i = {
      from: { alias: `t_mmcsO67`, data: s, type: `Collection` },
      select: [
        { collection: `t_mmcsO67`, name: `TRRxvReo0`, type: `Identifier` },
        { collection: `t_mmcsO67`, name: `Hz3oIYPRx`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `t_mmcsO67`, name: t, type: `Identifier` });
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
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
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
//# sourceMappingURL=X2cz60QxiaBw0E1_4THVO3R4f48p6A2Lu8GhN5LzVSw.3wVwNwkd.mjs.map
