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
    (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 6.75 0 C 7.164 0 7.5 0.336 7.5 0.75 L 7.5 15.75 C 7.5 16.164 7.164 16.5 6.75 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="f4wCNbKGN" transform="translate(8.25 3.75)" width="7.5px"/><path d="M 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 6.75 0 C 7.164 0 7.5 0.336 7.5 0.75 L 7.5 15.75 C 7.5 16.164 7.164 16.5 6.75 16.5 Z" fill="transparent" height="16.5px" id="t9yji6UOz" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(8.25 3.75)" width="7.5px"/><path d="M 3.75 0 L 0 0" fill="transparent" height="1px" id="tKfmNKyXc" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(15.75 12)" width="3.75px"/><path d="M 3.75 0 L 0 0" fill="transparent" height="1px" id="lJ_QmkAlr" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 12)" width="3.75px"/></svg>`),
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
          p = s(`731605942`, g);
        return r(h, {
          ...f,
          className: o(`framer-XZo30`, i),
          layoutId: a,
          ref: t,
          role: `presentation`,
          style: { "--1m6trwb": d, "--21h8s6": l, "--pgex8v": u, ...n },
          viewBox: `0 0 24 24`,
          children: r(`use`, { href: p }),
        });
      }),
      [
        `.framer-XZo30 { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
      ],
      `framer-XZo30`
    )),
    (v.displayName = `Align Center Vertical Simple`),
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
            framerSupportedLayoutHeight: `any-prefer-fixed`,
            framerSupportedLayoutWidth: `any-prefer-fixed`,
            framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
            framerIntrinsicHeight: `24`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerDisableUnlink: `true`,
            framerVector: `{"name":"Align Center Vertical Simple","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { y as __FramerMetadata__, v as default };
//# sourceMappingURL=SRXdoBIev.DrR_TSCd.mjs.map
