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
      (v = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 5.25 9.75 C 5.25 10.164 4.914 10.5 4.5 10.5 L 0.75 10.5 C 0.336 10.5 0 10.164 0 9.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="10.5px" id="gZmfOY9yU" transform="translate(13.5 6.75)" width="5.25px"/><path d="M 0.75 14.25 C 0.336 14.25 0 13.914 0 13.5 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 13.5 C 5.25 13.914 4.914 14.25 4.5 14.25 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="14.25px" id="EW6vX_PA6" transform="translate(5.25 3)" width="5.25px"/><path d="M 16.5 0 L 0 0" fill="transparent" height="1px" id="sl4X4k62F" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 20.25)" width="16.5px"/><path d="M 5.25 9.75 C 5.25 10.164 4.914 10.5 4.5 10.5 L 0.75 10.5 C 0.336 10.5 0 10.164 0 9.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 Z" fill="transparent" height="10.5px" id="oITfXx_Bq" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(13.5 6.75)" width="5.25px"/><path d="M 0.75 14.25 C 0.336 14.25 0 13.914 0 13.5 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 13.5 C 5.25 13.914 4.914 14.25 4.5 14.25 Z" fill="transparent" height="14.25px" id="qacB1cEaW" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.25 3)" width="5.25px"/></svg>`),
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
            p = c(`3711657681`, v);
          return i(_, {
            ...f,
            className: s(`framer-eGuGc`, r),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": d, "--21h8s6": l, "--pgex8v": u, ...n },
            viewBox: `0 0 24 24`,
            children: i(`use`, { href: p }),
          });
        }),
        [
          `.framer-eGuGc { -webkit-mask: ${m}; aspect-ratio: 1; display: block; mask: ${m}; width: 24px; }`,
        ],
        `framer-eGuGc`
      )),
      (b.displayName = `Align Bottom`),
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
              framerContractVersion: `1`,
              framerDisableUnlink: `true`,
              framerSupportedLayoutWidth: `any-prefer-fixed`,
              framerSupportedLayoutHeight: `any-prefer-fixed`,
              framerIntrinsicWidth: `24`,
              framerImmutableVariables: `true`,
              framerVector: `{"name":"Align Bottom","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
              framerIntrinsicHeight: `24`,
              framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { p as n, S as r, b as t };
//# sourceMappingURL=TWMSVpnV8.CI53xpCA.mjs.map
