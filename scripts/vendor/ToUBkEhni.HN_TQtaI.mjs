import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import { T as n, _ as r, c as i, o as a } from "./react.CWkcPvHD.mjs";
import { T as o } from "./motion.UJ_SjFSS.mjs";
import { P as s, St as c, Tt as l, Z as u, j as d, o as f } from "./framer.B5VSaEF1.mjs";
var p = e({ __FramerMetadata__: () => x, default: () => b }),
  m,
  h,
  g,
  _,
  v,
  y,
  b,
  x,
  S = t(() => {
    (a(),
      u(),
      n(),
      (m = `var(--framer-icon-mask)`),
      (h = r(function (e, t) {
        return i(`svg`, { ...e, ref: t, children: e.children });
      })),
      (g = o.create(h)),
      (_ = r((e, t) => {
        let { animated: n, layoutId: r, children: a, ...o } = e;
        return n
          ? i(g, { ...o, layoutId: r, ref: t, children: a })
          : i(`svg`, { ...o, ref: t, children: a });
      })),
      (v = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 16.5 0 L 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 12 C 0 12.828 0.672 13.5 1.5 13.5 L 6.428 13.5 L 9 10.5 L 11.572 13.5 L 16.5 13.5 C 17.328 13.5 18 12.828 18 12 L 18 1.5 C 18 0.672 17.328 0 16.5 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.5px" id="Eeevy4mkZ" transform="translate(3 4.5)" width="18px"/><path d="M 4.5 0 L 9 5.25 L 0 5.25 Z" fill="transparent" height="5.25px" id="GNFH5m9ni" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(7.5 15)" width="9px"/><path d="M 2.25 13.5 L 1.5 13.5 C 0.672 13.5 0 12.828 0 12 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 16.5 0 C 17.328 0 18 0.672 18 1.5 L 18 12 C 18 12.828 17.328 13.5 16.5 13.5 L 15.75 13.5" fill="transparent" height="13.5px" id="kBgedOaxq" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 4.5)" width="18px"/></svg>`),
      (y = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (b = l(
        r(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: a,
              variant: o,
              ezTt3ayMo: l,
              lschgej4H: u,
              qxTvv_EBh: d,
              ...f
            } = y(e),
            p = c(`1981905448`, v);
          return i(_, {
            ...f,
            className: s(`framer-F9UoJ`, r),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": d, "--21h8s6": l, "--pgex8v": u, ...n },
            viewBox: `0 0 24 24`,
            children: i(`use`, { href: p }),
          });
        }),
        [
          `.framer-F9UoJ { -webkit-mask: ${m}; aspect-ratio: 1; display: block; mask: ${m}; width: 24px; }`,
        ],
        `framer-F9UoJ`
      )),
      (b.displayName = `Airplay`),
      d(b, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: f.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: f.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: f.Number,
        },
      }),
      (x = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `Icon`,
            slots: [],
            annotations: {
              framerVector: `{"name":"Airplay","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
              framerImmutableVariables: `true`,
              framerSupportedLayoutHeight: `any-prefer-fixed`,
              framerDisableUnlink: `true`,
              framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
              framerSupportedLayoutWidth: `any-prefer-fixed`,
              framerIntrinsicWidth: `24`,
              framerContractVersion: `1`,
              framerIntrinsicHeight: `24`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { p as n, S as r, b as t };
//# sourceMappingURL=ToUBkEhni.HN_TQtaI.mjs.map
