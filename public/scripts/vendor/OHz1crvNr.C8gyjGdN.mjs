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
    (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 16.5 0 C 17.328 0 18 0.672 18 1.5 L 18 12 C 18 12.828 17.328 13.5 16.5 13.5 L 1.5 13.5 C 0.672 13.5 0 12.828 0 12 L 0 1.5 C 0 0.672 0.672 0 1.5 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.5px" id="iY0OLpSVL" transform="translate(3 4.5)" width="18px"/><path d="M 16.5 0 C 17.328 0 18 0.672 18 1.5 L 18 12 C 18 12.828 17.328 13.5 16.5 13.5 L 1.5 13.5 C 0.672 13.5 0 12.828 0 12 L 0 1.5 C 0 0.672 0.672 0 1.5 0 Z" fill="transparent" height="13.5px" id="aYkDU59N2" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 4.5)" width="18px"/><path d="M 6 0 L 0 0" fill="transparent" height="1px" id="nP42I02bA" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(9 21)" width="6px"/><path d="M 0 2.25 L 2.25 0 L 4.5 2.25" fill="transparent" height="2.25px" id="lvrEZTfDN" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(9.75 8.25)" width="4.5px"/><path d="M 0 0 L 0 6" fill="transparent" height="6px" id="WozlEU9NW" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 8.25)" width="1px"/></svg>`),
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
          p = s(`3042383359`, g);
        return r(h, {
          ...f,
          className: o(`framer-h2YtI`, i),
          layoutId: a,
          ref: t,
          role: `presentation`,
          style: { "--1m6trwb": d, "--21h8s6": l, "--pgex8v": u, ...n },
          viewBox: `0 0 24 24`,
          children: r(`use`, { href: p }),
        });
      }),
      [
        `.framer-h2YtI { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
      ],
      `framer-h2YtI`
    )),
    (v.displayName = `Monitor Arrow Up`),
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
            framerIntrinsicHeight: `24`,
            framerIntrinsicWidth: `24`,
            framerSupportedLayoutWidth: `any-prefer-fixed`,
            framerContractVersion: `1`,
            framerSupportedLayoutHeight: `any-prefer-fixed`,
            framerVector: `{"name":"Monitor Arrow Up","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
            framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
            framerImmutableVariables: `true`,
            framerDisableUnlink: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { y as __FramerMetadata__, v as default };
//# sourceMappingURL=OHz1crvNr.C8gyjGdN.mjs.map
