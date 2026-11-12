import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { T as t, _ as n, c as r, o as i } from "./react.CWkcPvHD.mjs";
import { T as a } from "./motion.UJ_SjFSS.mjs";
import { P as o, St as s, Tt as c, Z as l, j as u, o as d } from "./framer.B5VSaEF1.mjs";
var f, p, m, h, g, _, v, y;
e(() => {
  (i(),
    l(),
    t(),
    (f = `var(--framer-icon-mask)`),
    (p = n(function (e, t) {
      return r(`svg`, { ...e, ref: t, children: e.children });
    })),
    (m = a.create(p)),
    (h = n((e, t) => {
      let { animated: n, layoutId: i, children: a, ...o } = e;
      return n
        ? r(m, { ...o, layoutId: i, ref: t, children: a })
        : r(`svg`, { ...o, ref: t, children: a });
    })),
    (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 3 C 0 1.343 1.343 0 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="6px" id="jOVwMWqOE" transform="translate(9 7.5)" width="6px"/><path d="M 0 0 L 3.375 0 L 3.375 3.375" fill="transparent" height="3.375px" id="Sc_lvRmtd" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(16.875 3.75)" width="3.375px"/><path d="M 0 3.375 L 3.375 3.375 L 3.375 0" fill="transparent" height="3.375px" id="uY5xKoxSW" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(16.875 16.875)" width="3.375px"/><path d="M 3.375 3.375 L 0 3.375 L 0 0" fill="transparent" height="3.375px" id="jFAqhvVNI" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 16.875)" width="3.375px"/><path d="M 3.375 0 L 0 0 L 0 3.375" fill="transparent" height="3.375px" id="akXBKapaV" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 3.75)" width="3.375px"/><path d="M 0 3 C 0 1.343 1.343 0 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 Z" fill="transparent" height="6px" id="FuiANUKXv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(9 7.5)" width="6px"/><path d="M 0 2.25 C 1.062 0.834 2.729 0 4.5 0 C 6.271 0 7.938 0.834 9 2.25" fill="transparent" height="2.25px" id="QPUzbP_h_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(7.5 13.5)" width="9px"/></svg>`),
    (_ = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
      ...o,
      ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
      lschgej4H: a ?? o.lschgej4H ?? 1.5,
      qxTvv_EBh: e ?? o.qxTvv_EBh,
    })),
    (v = c(
      n(function (e, t) {
        let {
            style: n,
            className: i,
            layoutId: a,
            variant: c,
            ezTt3ayMo: l,
            lschgej4H: u,
            qxTvv_EBh: d,
            ...f
          } = _(e),
          p = s(`4128920373`, g);
        return r(h, {
          ...f,
          className: o(`framer-5wo1B`, i),
          layoutId: a,
          ref: t,
          role: `presentation`,
          style: { "--1m6trwb": d, "--21h8s6": l, "--pgex8v": u, ...n },
          viewBox: `0 0 24 24`,
          children: r(`use`, { href: p }),
        });
      }),
      [
        `.framer-5wo1B { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
      ],
      `framer-5wo1B`
    )),
    (v.displayName = `User Focus`),
    u(v, {
      ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: d.Color },
      lschgej4H: {
        defaultValue: 1.5,
        displayStepper: !0,
        hidden: !1,
        max: 6,
        min: 0,
        step: 0.5,
        title: `Width`,
        type: d.Number,
      },
      qxTvv_EBh: {
        defaultValue: 0,
        displayStepper: !0,
        hidden: !1,
        max: 1,
        min: 0,
        step: 0.1,
        title: `Alpha`,
        type: d.Number,
      },
    }),
    (y = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `Icon`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `24`,
            framerIntrinsicHeight: `24`,
            framerSupportedLayoutHeight: `any-prefer-fixed`,
            framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
            framerContractVersion: `1`,
            framerVector: `{"name":"User Focus","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
            framerDisableUnlink: `true`,
            framerImmutableVariables: `true`,
            framerSupportedLayoutWidth: `any-prefer-fixed`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { y as __FramerMetadata__, v as default };
//# sourceMappingURL=T1IQicihP.R3Li2xey.mjs.map
