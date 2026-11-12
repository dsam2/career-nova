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
    (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 2.625 C 0 1.175 1.175 0 2.625 0 C 4.075 0 5.25 1.175 5.25 2.625 C 5.25 4.075 4.075 5.25 2.625 5.25 C 1.175 5.25 0 4.075 0 2.625 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="5.25px" id="ynWZqHrBU" transform="translate(4.5 15)" width="5.25px"/><path d="M 0 2.625 C 0 1.175 1.175 0 2.625 0 C 4.075 0 5.25 1.175 5.25 2.625 C 5.25 4.075 4.075 5.25 2.625 5.25 C 1.175 5.25 0 4.075 0 2.625 Z" fill="transparent" height="5.25px" id="G967lbGte" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 15)" width="5.25px"/><path d="M 0 0 L 3.75 3.75" fill="transparent" height="3.75px" id="hpcnaWJLF" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 6.75)" width="3.75px"/><path d="M 3.75 0 L 0 3.75" fill="transparent" height="3.75px" id="aa9vktiqJ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 6.75)" width="3.75px"/><path d="M 0 0 L 3.75 3.75" fill="transparent" height="3.75px" id="B8BOENXjn" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(17.25 15.75)" width="3.75px"/><path d="M 3.75 0 L 0 3.75" fill="transparent" height="3.75px" id="mROC4GLxr" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(17.25 15.75)" width="3.75px"/><path d="M 0 3.75 L 0 0 L 3.75 0" fill="transparent" height="3.75px" id="v9O3G8X0J" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(13.5 3.75)" width="3.75px"/><path d="M 0.75 0 L 2.25 1.5 C 6 5.25 3 9.75 0 10.5" fill="transparent" height="10.5px" id="O7ALn2HSz" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12.75 3.75)" width="3.9999999999999716px"/></svg>`),
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
          p = s(`1576933072`, g);
        return r(h, {
          ...f,
          className: o(`framer-e9VYS`, i),
          layoutId: a,
          ref: t,
          role: `presentation`,
          style: { "--1m6trwb": d, "--21h8s6": l, "--pgex8v": u, ...n },
          viewBox: `0 0 24 24`,
          children: r(`use`, { href: p }),
        });
      }),
      [
        `.framer-e9VYS { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
      ],
      `framer-e9VYS`
    )),
    (v.displayName = `Admissions`),
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
            framerVector: `{"name":"Admissions","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
            framerSupportedLayoutWidth: `any-prefer-fixed`,
            framerSupportedLayoutHeight: `any-prefer-fixed`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `24`,
            framerDisableUnlink: `true`,
            framerContractVersion: `1`,
            framerIntrinsicWidth: `24`,
            framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { y as __FramerMetadata__, v as default };
//# sourceMappingURL=DkLkWmjxd.D9_Eq1vd.mjs.map
