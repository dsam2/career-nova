import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  C as r,
  E as i,
  F as a,
  I as o,
  M as s,
  N as c,
  P as l,
  R as u,
  T as d,
  _ as f,
  b as p,
  c as m,
  j as h,
  k as g,
  l as _,
  o as v,
  s as y,
  v as b,
  y as x,
} from "./react.CWkcPvHD.mjs";
import {
  G as S,
  T as C,
  V as w,
  Y as ee,
  a as T,
  et as E,
  f as D,
  g as O,
  r as k,
  t as A,
} from "./motion.UJ_SjFSS.mjs";
import {
  A as j,
  C as M,
  Dt as N,
  E as te,
  G as ne,
  K as re,
  L as ie,
  O as P,
  Ot as ae,
  P as F,
  St as oe,
  T as I,
  Tt as L,
  U as R,
  W as z,
  Z as B,
  _t as V,
  i as se,
  j as H,
  lt as U,
  m as ce,
  o as W,
  p as G,
  wt as K,
} from "./framer.B5VSaEF1.mjs";
import {
  _ as le,
  b as ue,
  d as de,
  f as q,
  g as fe,
  h as pe,
  l as me,
  m as J,
  p as Y,
  u as he,
  v as ge,
  y as _e,
} from "./shared-lib.Dlb4YuQV.mjs";
import { i as X, n as ve, r as ye, t as be } from "./p2FU4QOGa.BxVaMVmz.mjs";
import { i as xe, n as Se, r as Ce, t as we } from "./Uupbhq6cF.BHFHcyu8.mjs";
import { r as Te, t as Ee } from "./TWMSVpnV8.CI53xpCA.mjs";
import { i as De, n as Oe, r as ke, t as Ae } from "./JlQPYH9lf.Dzlq9O7H.mjs";
import { i as je, n as Me, r as Ne, t as Pe } from "./GK8heJFj7.Bs6hOCzB.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./CfPVaqsaE.Bb8Pf2hD.mjs";
var ze,
  Be,
  Ve = e(() => {
    ((ze = (e) => e), (Be = (e) => typeof e == `function`));
  }),
  He = e(() => {
    Ve();
  }),
  Ue = e(() => {
    (Ve(), He());
  }),
  We,
  Ge = e(() => {
    ((We = {}),
      Object.defineProperty(We, "__esModule", { value: !0 }),
      (We.warning = function () {}),
      (We.invariant = function () {}),
      We.__esModule,
      We.warning,
      We.invariant);
  }),
  Ke = e(() => {});
function qe(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var Je = e(() => {}),
  Ye = e(() => {
    Ve();
  });
function Xe(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function Ze(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = Xe(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              Be(n) ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : yt[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function Qe(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function $e({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = bt.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return Qe(e, n);
        },
      });
    });
}
function et(e) {
  e.forEach($e);
}
function tt() {
  typeof ResizeObserver < `u` && (xt = new ResizeObserver(et));
}
function nt(e, t) {
  xt || tt();
  let n = Xe(e);
  return (
    n.forEach((e) => {
      let n = bt.get(e);
      (n || ((n = new Set()), bt.set(e, n)), n.add(t), xt?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = bt.get(e);
        (n?.delete(t), (n != null && n.size) || xt == null || xt.unobserve(e));
      });
    }
  );
}
function rt() {
  ((Ct = () => {
    let e = { width: n.innerWidth, height: n.innerHeight },
      t = { target: n, size: e, contentSize: e };
    St.forEach((e) => e(t));
  }),
    n.addEventListener(`resize`, Ct));
}
function it(e) {
  return (
    St.add(e),
    Ct || rt(),
    () => {
      (St.delete(e), !St.size && Ct && (Ct = void 0));
    }
  );
}
function at(e, t) {
  return Be(e) ? it(e) : nt(e, t);
}
function ot(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function st(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt = e(() => {
    (u(),
      Ue(),
      Ge(),
      Ke(),
      Ve(),
      Je(),
      Ye(),
      (ct = [``, `X`, `Y`, `Z`]),
      (lt = [`translate`, `scale`, `rotate`, `skew`]),
      (ut = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
      (dt = {
        translate: {
          syntax: `<length-percentage>`,
          initialValue: `0px`,
          toDefaultUnit: (e) => e + `px`,
        },
        rotate: ut,
        scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: ze },
        skew: ut,
      }),
      (ft = new Map()),
      (pt = (e) => `--motion-${e}`),
      (mt = [`x`, `y`, `z`]),
      lt.forEach((e) => {
        ct.forEach((t) => {
          (mt.push(e + t), ft.set(pt(e + t), dt[e]));
        });
      }),
      new Set(mt),
      (ht = (e, t) => document.createElement(`div`).animate(e, t)),
      (gt = {
        cssRegisterProperty: () =>
          typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
        partialKeyframes: () => {
          try {
            ht({ opacity: [1] });
          } catch {
            return !1;
          }
          return !0;
        },
        finished: () => !!ht({ opacity: [0, 1] }, { duration: 0.001 }).finished,
        linearEasing: () => {
          try {
            ht({ opacity: 0 }, { easing: `linear(0, 1)` });
          } catch {
            return !1;
          }
          return !0;
        },
      }),
      (_t = {}),
      (vt = {}));
    for (let e in gt) vt[e] = () => (_t[e] === void 0 && (_t[e] = gt[e]()), _t[e]);
    ((yt = { any: 0, all: 1 }),
      (bt = new WeakMap()),
      (St = new Set()),
      (wt = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return Ze(
            e,
            (r) => {
              if ((t(), st(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), st(e, `viewleave`, t));
                };
            },
            qe(r, [`once`])
          );
        },
      }),
      (Tt = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), ot(e, t, r));
      }),
      (Et = {
        inView: wt,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = Tt(e, `hoverstart`, t),
              i = Tt(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: r }) => {
            let i = (t) => {
                (r(), ot(e, `pressend`, t), n.removeEventListener(`pointerup`, i));
              },
              a = (r) => {
                (t(), ot(e, `pressstart`, r), n.addEventListener(`pointerup`, i));
              };
            return (
              e.addEventListener(`pointerdown`, a),
              () => {
                (e.removeEventListener(`pointerdown`, a), n.removeEventListener(`pointerup`, i));
              }
            );
          },
        },
      }),
      [...Object.keys(Et)]);
  });
function Ot(e) {
  let {
      slots: n = [],
      gap: a,
      padding: u,
      paddingPerSide: d,
      paddingTop: f,
      paddingRight: p,
      paddingBottom: h,
      paddingLeft: v,
      speed: y,
      hoverFactor: x,
      direction: T,
      alignment: D,
      sizingOptions: A,
      fadeOptions: j,
      style: N,
    } = e,
    { fadeContent: te, overflow: ne, fadeWidth: re, fadeInset: ie, fadeAlpha: P } = j,
    { widthType: ae, heightType: F } = A,
    oe = d ? `${f}px ${p}px ${h}px ${v}px` : `${u}px`,
    I = M.current(),
    L = I === M.canvas || I === M.export,
    R = kt(),
    z = n.filter(Boolean),
    B = i.count(z),
    V = B > 0,
    se = S(0),
    H = At(T === !0 ? `left` : T, R),
    U = H === `left` || H === `right`,
    ce = Mt[H];
  E(se, ce);
  let W = g(null),
    G = s(() => [{ current: null }, { current: null }], []),
    [K, le] = o({ parent: null, children: null }),
    ue = null,
    de = [],
    q = 0,
    fe = 0;
  (L && ((q = B ? Math.floor(10 / B) : 0), (fe = 1)),
    !L &&
      V &&
      K.parent &&
      ((q = Math.round((K.parent / K.children) * 2) + 1), (q = Math.min(q, jt)), (fe = 1)));
  let pe = c(() => {
      if (V && W.current) {
        let e = U ? W.current.offsetWidth : W.current.offsetHeight,
          t = G[0].current ? (U ? G[0].current.offsetLeft : G[0].current.offsetTop) : 0,
          n =
            (G[1].current
              ? U
                ? G[1].current.offsetLeft + G[1].current.offsetWidth
                : G[1].current.offsetTop + G[1].current.offsetHeight
              : 0) -
            t +
            a;
        b(() => {
          le({ parent: e, children: n });
        });
      }
    }, []),
    me = L ? { contentVisibility: `auto` } : {};
  if (V) {
    if (!L) {
      let e = g(!0);
      r(
        () => (
          O.read(pe, !1, !0),
          at(W.current, ({ contentSize: t }) => {
            (!e.current && (t.width || t.height) && O.read(pe, !1, !0), (e.current = !1));
          })
        ),
        []
      );
    }
    ue = i.map(z, (e, n) => {
      let r;
      (n === 0 && (r = G[R === `rtl` && U ? 1 : 0]),
        n === z.length - 1 && (r = G[R === `rtl` && U ? 0 : 1]));
      let i = { width: ae ? e.props?.width : `100%`, height: F ? e.props?.height : `100%` };
      return m(k, {
        inherit: `id`,
        children: m(Nt, {
          ref: r,
          style: i,
          children: t(
            e,
            {
              style: { ...e.props?.style, ...i, flexShrink: 0, ...me },
              layoutId: e.props.layoutId ? e.props.layoutId + `-original-` + n : void 0,
            },
            e.props?.children
          ),
        }),
      });
    });
  }
  let J = L ? !0 : w(W);
  if (!L)
    for (let e = 0; e < q; e++)
      de = de.concat(
        i.map(z, (n, r) => {
          let i = {
            width: ae ? n.props?.width : `100%`,
            height: F ? n.props?.height : `100%`,
            willChange: J ? `transform` : void 0,
          };
          return m(
            k,
            {
              inherit: `id`,
              children: m(
                Nt,
                {
                  style: i,
                  children: t(
                    n,
                    {
                      key: e + ` ` + r,
                      style: {
                        ...n.props?.style,
                        width: ae ? n.props?.width : `100%`,
                        height: F ? n.props?.height : `100%`,
                        flexShrink: 0,
                        ...me,
                      },
                      layoutId: n.props.layoutId ? n.props.layoutId + `-dupe-` + e : void 0,
                    },
                    n.props?.children
                  ),
                },
                e + `li` + r
              ),
            },
            e + `lg` + r
          );
        })
      );
  let Y = K.children + K.children * Math.round(K.parent / K.children);
  (g(null), g(null), g(0));
  let he = g(!1),
    ge = ee(),
    _e = g(null),
    X = g(null);
  if (!L) {
    l(() => {
      if (!(ge || !Y || !y))
        return (
          (X.current = _e.current.animate(
            { transform: [ce(0), ce(Y)] },
            {
              duration: (Math.abs(Y) / y) * 1e3,
              iterations: 1 / 0,
              iterationStart: +(R === `rtl`),
              easing: `linear`,
            }
          )),
          () => X.current.cancel()
        );
    }, [x, Y, y, R]);
    let e = c(() => {
      if (!X.current) return;
      let e = document.hidden;
      J && !e && X.current.playState === `paused`
        ? X.current.play()
        : (!J || e) && X.current.playState === `running` && X.current.pause();
    }, [J]);
    (l(() => {
      e();
    }, [J, x, Y, y]),
      l(
        () => (
          document.addEventListener(`visibilitychange`, e),
          () => {
            document.removeEventListener(`visibilitychange`, e);
          }
        ),
        [e]
      ));
  }
  let ve = U ? `to right` : `to bottom`,
    ye = re / 2,
    be = 100 - re / 2,
    xe = `linear-gradient(${ve}, rgba(0, 0, 0, ${P}) ${zt(ie, 0, ye)}%, rgba(0, 0, 0, 1) ${ye}%, rgba(0, 0, 0, 1) ${be}%, rgba(0, 0, 0, ${P}) ${100 - ie}%)`;
  return V
    ? m(`section`, {
        style: {
          ...Pt,
          opacity: fe,
          WebkitMaskImage: te ? xe : void 0,
          maskImage: te ? xe : void 0,
          overflow: ne ? `visible` : `hidden`,
          padding: oe,
        },
        ref: W,
        children: _(C.ul, {
          ref: _e,
          style: {
            ...Pt,
            gap: a,
            top: T === `bottom` && Bt(Y) ? -Y : void 0,
            left: T === `right` && Bt(Y) ? Y * (R === `rtl` ? 1 : -1) : void 0,
            placeItems: D,
            position: `relative`,
            flexVisas: U ? `row` : `column`,
            ...N,
            willChange: L || !J ? `auto` : `transform`,
            transform: ce(0),
          },
          onMouseEnter: () => {
            ((he.current = !0), X.current && (X.current.playbackRate = x));
          },
          onMouseLeave: () => {
            ((he.current = !1), X.current && (X.current.playbackRate = 1));
          },
          children: [ue, de],
        }),
      })
    : _(`section`, {
        style: Ft,
        children: [
          m(`div`, { style: It, children: `✨` }),
          m(`p`, { style: Lt, children: `Connect to Content` }),
          m(`p`, {
            style: Rt,
            children: `Add layers or components to infinitely loop on your page.`,
          }),
        ],
      });
}
function kt() {
  return !n || !n.document || !n.document.documentElement
    ? `ltr`
    : n.document.documentElement.dir === `rtl`
      ? `rtl`
      : `ltr`;
}
function At(e, t) {
  return t === `rtl` ? (e === `left` ? `right` : e === `right` ? `left` : e) : e;
}
var jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt = e(() => {
    (u(),
      v(),
      d(),
      B(),
      A(),
      Dt(),
      (jt = 100),
      (Mt = {
        left: (e) => `translateX(-${e}px)`,
        right: (e) => `translateX(${e}px)`,
        top: (e) => `translateY(-${e}px)`,
        bottom: (e) => `translateY(${e}px)`,
      }),
      (Nt = f(({ children: e, ...t }, n) => {
        let r = g(),
          i = w(r);
        return (
          p(n, () => r.current),
          l(() => {
            let e = r.current;
            e &&
              (i
                ? e.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.dataset.origTabIndex;
                    t ? (e.tabIndex = t) : e.removeAttribute(`tabIndex`);
                  })
                : e.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.getAttribute(`tabIndex`);
                    (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                  }));
          }, [i]),
          m(`li`, { ...t, "aria-hidden": !i, ref: r, children: e })
        );
      })),
      (Ot.defaultProps = {
        gap: 10,
        padding: 10,
        sizingOptions: { widthType: !0, heightType: !0 },
        fadeOptions: { fadeContent: !0, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        direction: !0,
      }),
      H(Ot, {
        slots: { type: W.Array, title: `Children`, control: { type: W.ComponentInstance } },
        speed: {
          type: W.Number,
          title: `Speed`,
          min: 0,
          max: 1e3,
          defaultValue: 100,
          unit: `%`,
          displayStepper: !0,
          step: 5,
        },
        direction: {
          type: W.Enum,
          title: `Counselling`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        alignment: {
          type: W.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: W.Number, title: `Gap` },
        padding: {
          title: `Padding`,
          type: W.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        sizingOptions: {
          type: W.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: W.Boolean,
              title: `Width`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
            heightType: {
              type: W.Boolean,
              title: `Height`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
          },
        },
        fadeOptions: {
          type: W.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: W.Boolean, title: `Fade`, defaultValue: !0 },
            overflow: {
              type: W.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: W.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: W.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: W.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        hoverFactor: {
          type: W.Number,
          title: `Hover`,
          min: 0,
          max: 1,
          unit: `x`,
          defaultValue: 1,
          step: 0.1,
          displayStepper: !0,
          description: `Slows down the speed while you are hovering.`,
        },
      }),
      (Pt = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (Ft = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexVisas: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (It = { fontSize: 32, marginBottom: 10 }),
      (Lt = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Rt = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: `center` }),
      (zt = (e, t, n) => Math.min(Math.max(e, t), n)),
      (Bt = (e) => typeof e == `number` && !isNaN(e)));
  }),
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt = e(() => {
    (v(),
      B(),
      d(),
      (Ht = `var(--framer-icon-mask)`),
      (Ut = f(function (e, t) {
        return m(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Wt = C.create(Ut)),
      (Gt = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? m(Wt, { ...a, layoutId: r, ref: t, children: i })
          : m(`svg`, { ...a, ref: t, children: i });
      })),
      (Kt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 4.875 C 0 2.183 2.183 0 4.875 0 C 7.567 0 9.75 2.183 9.75 4.875" fill="transparent" height="4.875px" id="xOthhqQm9" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6 2.25)" width="9.75px"/><path d="M 2.994 15.75 L 0.245 11.063 C -0.264 10.167 0.045 9.027 0.938 8.512 C 1.83 7.997 2.972 8.298 3.493 9.188 L 5.244 12 L 5.244 1.875 C 5.244 0.839 6.084 0 7.119 0 C 8.155 0 8.994 0.839 8.994 1.875 L 8.994 7.125 C 8.994 6.089 9.834 5.25 10.869 5.25 C 11.905 5.25 12.744 6.089 12.744 7.125 L 12.744 8.625 C 12.744 7.589 13.584 6.75 14.619 6.75 C 15.655 6.75 16.494 7.589 16.494 8.625 L 16.494 12 C 16.494 14.25 15.744 15.75 15.744 15.75" fill="transparent" height="15.75px" id="oH9QTBXX2" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.756 5.25)" width="16.494093855186865px"/><path d="M 2.994 15.75 L 0.245 11.063 C -0.264 10.167 0.045 9.027 0.938 8.512 C 1.83 7.997 2.972 8.298 3.493 9.188 L 5.244 12 L 5.244 1.875 C 5.244 0.839 6.084 0 7.119 0 C 8.155 0 8.994 0.839 8.994 1.875 L 8.994 7.125 C 8.994 6.089 9.834 5.25 10.869 5.25 C 11.905 5.25 12.744 6.089 12.744 7.125 L 12.744 8.625 C 12.744 7.589 13.584 6.75 14.619 6.75 C 15.655 6.75 16.494 7.589 16.494 8.625 L 16.494 12 C 16.494 14.25 15.744 15.75 15.744 15.75 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="15.75px" id="scO7q1VsT" transform="translate(3.756 5.25)" width="16.494093855186865px"/></svg>`),
      (qt = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (Jt = L(
        f(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = qt(e),
            u = oe(`3093158817`, Kt);
          return m(Gt, {
            ...l,
            className: F(`framer-1Hl9F`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: m(`use`, { href: u }),
          });
        }),
        [
          `.framer-1Hl9F { -webkit-mask: ${Ht}; aspect-ratio: 1; display: block; mask: ${Ht}; width: 24px; }`,
        ],
        `framer-1Hl9F`
      )),
      (Jt.displayName = `Hand Tap`),
      H(Jt, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: W.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: W.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: W.Number,
        },
      }));
  }),
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn = e(() => {
    (v(),
      B(),
      d(),
      (Xt = `var(--framer-icon-mask)`),
      (Zt = f(function (e, t) {
        return m(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Qt = C.create(Zt)),
      ($t = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? m(Qt, { ...a, layoutId: r, ref: t, children: i })
          : m(`svg`, { ...a, ref: t, children: i });
      })),
      (en = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 9 L 9 0 L 18 9 L 13.5 9 L 13.5 12 L 4.5 12 L 4.5 9 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="12px" id="ltjDEqrlm" transform="translate(3 2.25)" width="18px"/><path d="M 0 9 L 9 0 L 18 9 L 13.5 9 L 13.5 12 L 4.5 12 L 4.5 9 Z" fill="transparent" height="12px" id="f2eQt57Or" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 2.25)" width="18px"/><path d="M 9 0 L 0 0" fill="transparent" height="1px" id="Eg4aofzi5" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(7.5 20.25)" width="9px"/><path d="M 9 0 L 0 0" fill="transparent" height="1px" id="RIAO8UTzL" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(7.5 17.25)" width="9px"/></svg>`),
      (tn = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (nn = L(
        f(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = tn(e),
            u = oe(`2290172060`, en);
          return m($t, {
            ...l,
            className: F(`framer-HXAA0`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: m(`use`, { href: u }),
          });
        }),
        [
          `.framer-HXAA0 { -webkit-mask: ${Xt}; aspect-ratio: 1; display: block; mask: ${Xt}; width: 24px; }`,
        ],
        `framer-HXAA0`
      )),
      (nn.displayName = `Arrow Fat Lines Up`),
      H(nn, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: W.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: W.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: W.Number,
        },
      }));
  }),
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn = e(() => {
    (v(),
      B(),
      d(),
      (an = `var(--framer-icon-mask)`),
      (on = f(function (e, t) {
        return m(`svg`, { ...e, ref: t, children: e.children });
      })),
      (sn = C.create(on)),
      (cn = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? m(sn, { ...a, layoutId: r, ref: t, children: i })
          : m(`svg`, { ...a, ref: t, children: i });
      })),
      (ln = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0.75 5.25 C 0.336 5.25 0 4.914 0 4.5 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 9.75 0 C 10.164 0 10.5 0.336 10.5 0.75 L 10.5 4.5 C 10.5 4.914 10.164 5.25 9.75 5.25 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="5.25px" id="iXN5907kZ" transform="translate(6.75 5.25)" width="10.5px"/><path d="M 0.75 5.25 C 0.336 5.25 0 4.914 0 4.5 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 13.5 0 C 13.914 0 14.25 0.336 14.25 0.75 L 14.25 4.5 C 14.25 4.914 13.914 5.25 13.5 5.25 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="5.25px" id="MNuTPPsTi" transform="translate(6.75 13.5)" width="14.25px"/><path d="M 0.75 5.25 C 0.336 5.25 0 4.914 0 4.5 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 13.5 0 C 13.914 0 14.25 0.336 14.25 0.75 L 14.25 4.5 C 14.25 4.914 13.914 5.25 13.5 5.25 Z" fill="transparent" height="5.25px" id="mR6JCHd9w" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6.75 13.5)" width="14.25px"/><path d="M 0 0 L 0 16.5" fill="transparent" height="16.5px" id="ScO_oiV2i" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 3.75)" width="1px"/><path d="M 0.75 5.25 C 0.336 5.25 0 4.914 0 4.5 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 9.75 0 C 10.164 0 10.5 0.336 10.5 0.75 L 10.5 4.5 C 10.5 4.914 10.164 5.25 9.75 5.25 Z" fill="transparent" height="5.25px" id="uOrhWxb47" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6.75 5.25)" width="10.5px"/></svg>`),
      (un = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (dn = L(
        f(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = un(e),
            u = oe(`500450984`, ln);
          return m(cn, {
            ...l,
            className: F(`framer-sImu7`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: m(`use`, { href: u }),
          });
        }),
        [
          `.framer-sImu7 { -webkit-mask: ${an}; aspect-ratio: 1; display: block; mask: ${an}; width: 24px; }`,
        ],
        `framer-sImu7`
      )),
      (dn.displayName = `Align Left`),
      H(dn, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: W.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: W.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: W.Number,
        },
      }));
  }),
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn = e(() => {
    (v(),
      B(),
      d(),
      (pn = `var(--framer-icon-mask)`),
      (mn = f(function (e, t) {
        return m(`svg`, { ...e, ref: t, children: e.children });
      })),
      (hn = C.create(mn)),
      (gn = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? m(hn, { ...a, layoutId: r, ref: t, children: i })
          : m(`svg`, { ...a, ref: t, children: i });
      })),
      (_n = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 3.75 0 L 0 11.25 L 7.5 11.25 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="11.25px" id="q_nKPtBGJ" transform="translate(2.25 6)" width="7.5px"/><path d="M 0 4.125 C 0 1.847 1.847 0 4.125 0 C 6.403 0 8.25 1.847 8.25 4.125 C 8.25 6.403 6.403 8.25 4.125 8.25 C 1.847 8.25 0 6.403 0 4.125 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="8.25px" id="MpPyBdaZ4" transform="translate(10.5 3)" width="8.25px"/><path d="M 0 5.25 L 0 0 L 8.25 0 L 8.25 5.25 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="5.25px" id="vndv5ExCK" transform="translate(12.75 14.25)" width="8.25px"/><path d="M 3.75 0 L 0 11.25 L 7.5 11.25 Z" fill="transparent" height="11.25px" id="vm9iwQat7" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.25 6)" width="7.5px"/><path d="M 0 4.125 C 0 1.847 1.847 0 4.125 0 C 6.403 0 8.25 1.847 8.25 4.125 C 8.25 6.403 6.403 8.25 4.125 8.25 C 1.847 8.25 0 6.403 0 4.125 Z" fill="transparent" height="8.25px" id="ZJXViX94I" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(10.5 3)" width="8.25px"/><path d="M 0 5.25 L 0 0 L 8.25 0 L 8.25 5.25 Z" fill="transparent" height="5.25px" id="sATOM9inG" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12.75 14.25)" width="8.25px"/></svg>`),
      (vn = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (yn = L(
        f(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = vn(e),
            u = oe(`3151112179`, _n);
          return m(gn, {
            ...l,
            className: F(`framer-c2uAX`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: m(`use`, { href: u }),
          });
        }),
        [
          `.framer-c2uAX { -webkit-mask: ${pn}; aspect-ratio: 1; display: block; mask: ${pn}; width: 24px; }`,
        ],
        `framer-c2uAX`
      )),
      (yn.displayName = `Shapes`),
      H(yn, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: W.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: W.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: W.Number,
        },
      }));
  }),
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On = e(() => {
    (v(),
      B(),
      d(),
      (xn = `var(--framer-icon-mask)`),
      (Sn = f(function (e, t) {
        return m(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Cn = C.create(Sn)),
      (wn = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? m(Cn, { ...a, layoutId: r, ref: t, children: i })
          : m(`svg`, { ...a, ref: t, children: i });
      })),
      (Tn = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 11.25 C 5.25 11.664 4.914 12 4.5 12 L 0.75 12 C 0.336 12 0 11.664 0 11.25 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="12px" id="tIQ4Tih7P" transform="translate(13.5 6)" width="5.25px"/><path d="M 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 15.75 C 5.25 16.164 4.914 16.5 4.5 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="aXejCQlZ9" transform="translate(5.25 3.75)" width="5.25px"/><path d="M 2.25 0 L 0 0" fill="transparent" height="1px" id="v9dvzpVYP" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(18.75 12)" width="2.25px"/><path d="M 2.25 0 L 0 0" fill="transparent" height="1px" id="L6ucRLzoy" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 12)" width="2.25px"/><path d="M 3 0 L 0 0" fill="transparent" height="1px" id="MWWarNJMw" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(10.5 12)" width="3px"/><path d="M 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 11.25 C 5.25 11.664 4.914 12 4.5 12 L 0.75 12 C 0.336 12 0 11.664 0 11.25 Z" fill="transparent" height="12px" id="BFvIImRVr" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(13.5 6)" width="5.25px"/><path d="M 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 15.75 C 5.25 16.164 4.914 16.5 4.5 16.5 Z" fill="transparent" height="16.5px" id="IDxKneBI0" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.25 3.75)" width="5.25px"/></svg>`),
      (En = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (Dn = L(
        f(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = En(e),
            u = oe(`1151607027`, Tn);
          return m(wn, {
            ...l,
            className: F(`framer-Che7t`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: m(`use`, { href: u }),
          });
        }),
        [
          `.framer-Che7t { -webkit-mask: ${xn}; aspect-ratio: 1; display: block; mask: ${xn}; width: 24px; }`,
        ],
        `framer-Che7t`
      )),
      (Dn.displayName = `Align Center Vertical`),
      H(Dn, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: W.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: W.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: W.Number,
        },
      }));
  });
function kn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn = e(() => {
    (v(),
      B(),
      A(),
      d(),
      bn(),
      je(),
      q(),
      (An = N(ce)),
      (jn = N(G)),
      (Mn = [`HJmyz3sY1`, `iuShrOiYj`, `fQyNftypY`]),
      (Nn = `framer-fXJ0H`),
      (Pn = {
        fQyNftypY: `framer-v-jjampd`,
        HJmyz3sY1: `framer-v-skq62g`,
        iuShrOiYj: `framer-v-1q15bym`,
      }),
      (Fn = {
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
      (In = { damping: 70, delay: 0.6, mass: 1, stiffness: 210, type: `spring` }),
      (Ln = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Rn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 180,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (zn = { delay: 0, duration: 0.8, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Bn = { delay: 0, duration: 2, ease: [0, 0, 1, 1], type: `tween` }),
      (Vn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.75,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Hn = ({ value: e, children: t }) => {
        let n = h(T),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(T.Provider, { value: i, children: t });
      }),
      (Un = { Alt: `iuShrOiYj`, Image: `fQyNftypY`, Main: `HJmyz3sY1` }),
      (Wn = C.create(a)),
      (Gn = ({ height: e, icon: t, id: n, text: r, title: i, width: a, ...o }) => ({
        ...o,
        g59gU85uU: i ?? o.g59gU85uU ?? `Idea generation`,
        HoFRXO9NM:
          r ??
          o.HoFRXO9NM ??
          `Uncover whitespace, evolve ideas toward novelty, and assess patentability`,
        jHO_xqRIm: t ?? o.jHO_xqRIm ?? yn,
        variant: Un[o.variant] ?? o.variant ?? `HJmyz3sY1`,
      })),
      (Kn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (qn = L(
        f(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = x(),
            { activeLocale: o, setLocale: s } = V(),
            c = U(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              jHO_xqRIm: p,
              g59gU85uU: h,
              HoFRXO9NM: v,
              ...y
            } = Gn(e),
            {
              baseVariant: b,
              classNames: S,
              clearLoadingGesture: w,
              gestureHandlers: ee,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: O,
              variants: A,
            } = K({
              cycleOrder: Mn,
              defaultVariant: `HJmyz3sY1`,
              ref: r,
              variant: f,
              variantClassNames: Pn,
            }),
            j = Kn(e, A),
            M = F(Nn, Pe, me),
            N = () => b !== `fQyNftypY`,
            te = () => b === `fQyNftypY`;
          return m(k, {
            id: d ?? i,
            children: m(Wn, {
              animate: A,
              initial: !1,
              children: m(Hn, {
                value: Ln,
                children: _(jn, {
                  ...y,
                  ...ee,
                  __framer__animate: { transition: In },
                  __framer__animateOnce: !0,
                  __framer__enter: Fn,
                  __framer__styleAppearEffectEnabled: !0,
                  __framer__threshold: 0,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: F(M, `framer-skq62g`, u, S),
                  "data-framer-name": `Main`,
                  layoutDependency: j,
                  layoutId: `HJmyz3sY1`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 26,
                    borderBottomRightRadius: 26,
                    borderTopLeftRadius: 26,
                    borderTopRightRadius: 26,
                    ...l,
                  },
                  variants: {
                    fQyNftypY: { backgroundColor: `rgba(0, 0, 0, 0)` },
                    iuShrOiYj: {
                      backgroundColor: `var(--token-c80313c8-a0c1-4f14-ad5e-9b2193d38589, rgb(178, 123, 0))`,
                    },
                  },
                  ...kn(
                    {
                      fQyNftypY: {
                        "data-framer-name": `Image`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 3584,
                          intrinsicWidth: 5376,
                          loading: ne(c?.y || 0),
                          pixelHeight: 3584,
                          pixelWidth: 5376,
                          positionX: `28.2%`,
                          positionY: `63.1%`,
                          sizes: c?.width || `100vw`,
                          src: `../../assets/stock/stock_blog_sop.jpg`,
                          srcSet: `../../assets/images/yxmyu5Z2EHxPHuNsxkR7JgEIq8.webp 512w,../../assets/images/yxmyu5Z2EHxPHuNsxkR7JgEIq8-8937cb.webp 1024w,../../assets/images/yxmyu5Z2EHxPHuNsxkR7JgEIq8-8cbf74.webp 2048w,../../assets/images/yxmyu5Z2EHxPHuNsxkR7JgEIq8-98c2f9.webp 4096w,../../assets/stock/stock_blog_sop.jpg 5376w`,
                        },
                      },
                      iuShrOiYj: { "data-framer-name": `Alt` },
                    },
                    b,
                    T
                  ),
                  children: [
                    N() &&
                      m(An, {
                        __framer__animate: { transition: zn },
                        __framer__animateOnce: !1,
                        __framer__enter: Rn,
                        __framer__loop: Vn,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopPauseOffscreen: !0,
                        __framer__loopRepeatDelay: 0,
                        __framer__loopRepeatType: `mirror`,
                        __framer__loopTransition: Bn,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        animated: !0,
                        className: `framer-10jrtc6`,
                        Component: p,
                        layoutDependency: j,
                        layoutId: `veRgtZL3f`,
                        style: {
                          "--1m6trwb": 0,
                          "--21h8s6": `var(--token-c80313c8-a0c1-4f14-ad5e-9b2193d38589, rgb(178, 123, 0))`,
                          "--pgex8v": 1.2,
                        },
                        variants: {
                          iuShrOiYj: {
                            "--21h8s6": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                          },
                        },
                      }),
                    _(C.div, {
                      className: `framer-mrq0rq`,
                      "data-framer-name": `Content`,
                      layoutDependency: j,
                      layoutId: `fZS31JsSL`,
                      children: [
                        m(I, {
                          __fromCanvasComponent: !0,
                          children: m(a, {
                            children: m(C.h4, {
                              className: `framer-styles-preset-hpamux`,
                              "data-styles-preset": `GK8heJFj7`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-1eung3n, var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88)))`,
                              },
                              children: `Idea generation`,
                            }),
                          }),
                          className: `framer-ldt4o5`,
                          fonts: [`Inter`],
                          layoutDependency: j,
                          layoutId: `u9WJ4uuMC`,
                          style: {
                            "--extracted-1eung3n": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                            "--framer-link-text-color": `rgb(255, 230, 0)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: h,
                          variants: {
                            fQyNftypY: {
                              "--extracted-1eung3n": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                            },
                            iuShrOiYj: {
                              "--extracted-1eung3n": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...kn(
                            {
                              fQyNftypY: {
                                children: m(a, {
                                  children: m(C.h4, {
                                    className: `framer-styles-preset-hpamux`,
                                    "data-styles-preset": `GK8heJFj7`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-1eung3n, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                    },
                                    children: `Idea generation`,
                                  }),
                                }),
                              },
                              iuShrOiYj: {
                                children: m(a, {
                                  children: m(C.h4, {
                                    className: `framer-styles-preset-hpamux`,
                                    "data-styles-preset": `GK8heJFj7`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-1eung3n, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                    },
                                    children: `Idea generation`,
                                  }),
                                }),
                              },
                            },
                            b,
                            T
                          ),
                        }),
                        m(I, {
                          __fromCanvasComponent: !0,
                          children: m(a, {
                            children: m(C.p, {
                              className: `framer-styles-preset-qlsyr3`,
                              "data-styles-preset": `YMpbOMTQr`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88)))`,
                              },
                              children: `Uncover whitespace, evolve ideas toward novelty, and assess patentability`,
                            }),
                          }),
                          className: `framer-1f0vmgw`,
                          fonts: [`Inter`],
                          layoutDependency: j,
                          layoutId: `BEWnxAkVS`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                            "--framer-link-text-color": `rgb(255, 230, 0)`,
                            "--framer-link-text-decoration": `underline`,
                            opacity: 0.7,
                          },
                          text: v,
                          variants: {
                            fQyNftypY: {
                              "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                              opacity: 0.85,
                            },
                            iuShrOiYj: {
                              "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...kn(
                            {
                              fQyNftypY: {
                                children: m(a, {
                                  children: m(C.p, {
                                    className: `framer-styles-preset-qlsyr3`,
                                    "data-styles-preset": `YMpbOMTQr`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                    },
                                    children: `Uncover whitespace, evolve ideas toward novelty, and assess patentability`,
                                  }),
                                }),
                              },
                              iuShrOiYj: {
                                children: m(a, {
                                  children: m(C.p, {
                                    className: `framer-styles-preset-qlsyr3`,
                                    "data-styles-preset": `YMpbOMTQr`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                    },
                                    children: `Uncover whitespace, evolve ideas toward novelty, and assess patentability`,
                                  }),
                                }),
                              },
                            },
                            b,
                            T
                          ),
                        }),
                      ],
                    }),
                    te() &&
                      m(C.div, {
                        className: `framer-1a7jr6t`,
                        "data-framer-name": `Mask`,
                        layoutDependency: j,
                        layoutId: `Juu8gIJZW`,
                        style: {
                          backdropFilter: `blur(5px)`,
                          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 1.567778716216216%, rgba(0, 0, 0, 0) 69.45734797297297%)`,
                          mask: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 33.04360879434122%, rgba(0,0,0,1) 100%) add`,
                          WebkitBackdropFilter: `blur(5px)`,
                          WebkitMask: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 33.04360879434122%, rgba(0,0,0,1) 100%) add`,
                        },
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-fXJ0H.framer-1bktp58, .framer-fXJ0H .framer-1bktp58 { display: block; }`,
          `.framer-fXJ0H.framer-skq62g { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; height: 395px; justify-content: space-between; overflow: visible; padding: 30px; position: relative; width: 280px; }`,
          `.framer-fXJ0H .framer-10jrtc6 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 60px; }`,
          `.framer-fXJ0H .framer-mrq0rq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-fXJ0H .framer-ldt4o5, .framer-fXJ0H .framer-1f0vmgw { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-fXJ0H .framer-1a7jr6t { bottom: 0px; flex: none; height: 45%; left: 0px; overflow: hidden; position: absolute; right: 0px; z-index: 0; }`,
          `.framer-fXJ0H.framer-v-1q15bym.framer-skq62g { overflow: hidden; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-fXJ0H.framer-v-jjampd.framer-skq62g { gap: 40px; justify-content: flex-end; overflow: hidden; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-fXJ0H.framer-v-jjampd .framer-mrq0rq { order: 3; z-index: 1; }`,
          `.framer-fXJ0H.framer-v-jjampd .framer-1a7jr6t { order: 4; }`,
          ...Me,
          ...he,
        ],
        `framer-fXJ0H`
      )),
      (qn.displayName = `About Card`),
      (qn.defaultProps = { height: 395, width: 280 }),
      H(qn, {
        variant: {
          options: [`HJmyz3sY1`, `iuShrOiYj`, `fQyNftypY`],
          optionTitles: [`Main`, `Alt`, `Image`],
          title: `Variant`,
          type: W.Enum,
        },
        jHO_xqRIm: {
          defaultValue: {
            identifier: `module:SUBEdtCFaOJwrjN2Inhk/bznEUerLEqVVXGfsDOYE/pKERsxd4H.js:default`,
            moduleId: `SUBEdtCFaOJwrjN2Inhk`,
          },
          setModuleId: `omX0gWFPqDwhaiWwf6ab`,
          title: `Icon`,
          type: W.VectorSetItem,
        },
        g59gU85uU: {
          defaultValue: `Idea generation`,
          displayTextArea: !1,
          title: `Title`,
          type: W.String,
        },
        ong59gU85uUChange: { changes: `g59gU85uU`, type: W.ChangeHandler },
        HoFRXO9NM: {
          defaultValue: `Uncover whitespace, evolve ideas toward novelty, and assess patentability`,
          displayTextArea: !0,
          title: `Text`,
          type: W.String,
        },
        onHoFRXO9NMChange: { changes: `HoFRXO9NM`, type: W.ChangeHandler },
      }),
      j(
        qn,
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
            ],
          },
          ...z(Ne),
          ...z(de),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Yn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur = e(() => {
    (v(),
      B(),
      A(),
      d(),
      Te(),
      je(),
      q(),
      (Xn = ae(N(C.div))),
      (Zn = [`sepewgdEt`, `tBQFzhd_u`, `RdeWz3Ehi`]),
      (Qn = `framer-tjWP0`),
      ($n = {
        RdeWz3Ehi: `framer-v-13i975d`,
        sepewgdEt: `framer-v-1ln2tib`,
        tBQFzhd_u: `framer-v-17jticf`,
      }),
      (er = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 70, delay: 0.6, mass: 1, stiffness: 210, type: `spring` },
        x: 0,
        y: 0,
      }),
      (tr = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 15,
      }),
      (nr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (rr = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ir = ({ value: e, children: t }) => {
        let n = h(T),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(T.Provider, { value: i, children: t });
      }),
      (ar = { Approach: `sepewgdEt`, Phone: `RdeWz3Ehi`, Tablet: `tBQFzhd_u` }),
      (or = C.create(a)),
      (sr = ({
        description: e,
        height: t,
        icon: n,
        id: r,
        image: i,
        title: a,
        width: o,
        ...s
      }) => ({
        ...s,
        HpgRvkXB_: i ?? s.HpgRvkXB_,
        PlH7tNkcK: n ?? s.PlH7tNkcK ?? Ee,
        Qi6kMH62r: e ?? s.Qi6kMH62r ?? `Description`,
        variant: ar[s.variant] ?? s.variant ?? `sepewgdEt`,
        ZZtWUY1u3: a ?? s.ZZtWUY1u3 ?? `Title`,
      })),
      (cr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (lr = L(
        f(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = x(),
            { activeLocale: o, setLocale: s } = V(),
            c = U(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              HpgRvkXB_: p,
              PlH7tNkcK: h,
              ZZtWUY1u3: v,
              Qi6kMH62r: y,
              ...b
            } = sr(e),
            {
              baseVariant: S,
              classNames: w,
              clearLoadingGesture: ee,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: A,
              variants: j,
            } = K({
              cycleOrder: Zn,
              defaultVariant: `sepewgdEt`,
              ref: r,
              variant: f,
              variantClassNames: $n,
            }),
            M = cr(e, j),
            N = F(Qn, Pe, me);
          return m(k, {
            id: d ?? i,
            children: m(or, {
              animate: j,
              initial: !1,
              children: m(ir, {
                value: nr,
                children: _(Xn, {
                  ...b,
                  ...T,
                  __framer__presenceAnimate: er,
                  __framer__presenceInitial: tr,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: F(N, `framer-1ln2tib`, u, w),
                  "data-framer-appear-id": `1ln2tib`,
                  "data-framer-name": `Approach`,
                  layoutDependency: M,
                  layoutId: `sepewgdEt`,
                  optimized: !0,
                  ref: r,
                  style: { ...l },
                  ...Yn(
                    {
                      RdeWz3Ehi: { "data-framer-name": `Phone` },
                      tBQFzhd_u: { "data-framer-name": `Tablet` },
                    },
                    S,
                    E
                  ),
                  children: [
                    m(C.div, {
                      className: `framer-1ep9q7a`,
                      "data-framer-name": `Image`,
                      layoutDependency: M,
                      layoutId: `NJFbn6V3V`,
                      style: {
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                      variants: {
                        RdeWz3Ehi: {
                          borderBottomLeftRadius: 16,
                          borderBottomRightRadius: 16,
                          borderTopLeftRadius: 16,
                          borderTopRightRadius: 16,
                        },
                      },
                      children: m(G, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: ne((c?.y || 0) + (0 + ((c?.height || 450) - 0 - 450) / 2) + 0),
                          sizes: `max((${c?.width || `100vw`} - 8px) / 2, 1px)`,
                          ...rr(p),
                        },
                        className: `framer-kz87t3`,
                        "data-framer-name": `Image`,
                        layoutDependency: M,
                        layoutId: `Ii4C90hzG`,
                        style: {
                          borderBottomLeftRadius: 20,
                          borderBottomRightRadius: 20,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        },
                        ...Yn(
                          {
                            RdeWz3Ehi: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: ne(
                                  (c?.y || 0) +
                                    0 +
                                    (((c?.height || 428.5) - 0 - 522.5) / 2 + 214.5 + 8) +
                                    0
                                ),
                                sizes: `max(${c?.width || `100vw`}, 1px)`,
                                ...rr(p),
                              },
                            },
                            tBQFzhd_u: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: ne(
                                  (c?.y || 0) +
                                    (0 +
                                      ((c?.height || 183.5) - 0 - ((c?.height || 183.5) - 0) * 1) /
                                        2) +
                                    (0 +
                                      (((c?.height || 183.5) - 0) * 1 -
                                        0 -
                                        (((c?.height || 183.5) - 0) * 1 - 0) * 1) /
                                        2)
                                ),
                                sizes: `max((${c?.width || `100vw`} - 8px) / 2, 1px)`,
                                ...rr(p),
                              },
                            },
                          },
                          S,
                          E
                        ),
                      }),
                    }),
                    _(C.div, {
                      className: `framer-iaxgtx`,
                      "data-framer-name": `Heading and subtext`,
                      layoutDependency: M,
                      layoutId: `oMe39MwaG`,
                      style: {
                        backgroundColor: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        boxShadow: `0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(255, 230, 0, 0.04), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(255, 230, 0, 0.03), 0px 10px 10px -3.75px rgba(255, 230, 0, 0.01)`,
                      },
                      variants: {
                        RdeWz3Ehi: {
                          borderBottomLeftRadius: 16,
                          borderBottomRightRadius: 16,
                          borderTopLeftRadius: 16,
                          borderTopRightRadius: 16,
                        },
                      },
                      children: [
                        _(C.div, {
                          className: `framer-r76qei`,
                          layoutDependency: M,
                          layoutId: `fDcXSUo3E`,
                          children: [
                            m(ce, {
                              animated: !0,
                              className: `framer-1u49ddv`,
                              Component: h,
                              layoutDependency: M,
                              layoutId: `zK3P0V8zJ`,
                              style: {
                                "--1m6trwb": 0,
                                "--21h8s6": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                "--pgex8v": 1.2,
                              },
                            }),
                            m(I, {
                              __fromCanvasComponent: !0,
                              children: m(a, {
                                children: m(C.h4, {
                                  className: `framer-styles-preset-hpamux`,
                                  "data-styles-preset": `GK8heJFj7`,
                                  dir: `auto`,
                                  children: `Title`,
                                }),
                              }),
                              className: `framer-1l62bih`,
                              fonts: [`Inter`],
                              layoutDependency: M,
                              layoutId: `J_NaSJov8`,
                              style: {
                                "--framer-link-text-color": `rgb(255, 230, 0)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: v,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        m(I, {
                          __fromCanvasComponent: !0,
                          children: m(a, {
                            children: m(C.p, {
                              className: `framer-styles-preset-qlsyr3`,
                              "data-styles-preset": `YMpbOMTQr`,
                              dir: `auto`,
                              style: { "--framer-text-alignment": `left` },
                              children: `Description`,
                            }),
                          }),
                          className: `framer-n5b5i9`,
                          fonts: [`Inter`],
                          layoutDependency: M,
                          layoutId: `rcKZnmtjz`,
                          style: {
                            "--framer-link-text-color": `rgb(255, 230, 0)`,
                            "--framer-link-text-decoration": `underline`,
                            opacity: 0.75,
                          },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-tjWP0.framer-1qmv2cw, .framer-tjWP0 .framer-1qmv2cw { display: block; }`,
          `.framer-tjWP0.framer-1ln2tib { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 600px; }`,
          `.framer-tjWP0 .framer-1ep9q7a { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-tjWP0 .framer-kz87t3 { flex: 1 0 0px; height: 450px; overflow: visible; position: relative; width: 1px; z-index: 2; }`,
          `.framer-tjWP0 .framer-iaxgtx { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 11px; height: auto; justify-content: flex-start; overflow: visible; padding: 26px; position: relative; width: 1px; z-index: 1; }`,
          `.framer-tjWP0 .framer-r76qei { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-tjWP0 .framer-1u49ddv { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 32px; }`,
          `.framer-tjWP0 .framer-1l62bih { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-tjWP0 .framer-n5b5i9 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-tjWP0.framer-v-17jticf .framer-1ep9q7a { align-self: stretch; height: auto; }`,
          `.framer-tjWP0.framer-v-17jticf .framer-kz87t3, .framer-tjWP0.framer-v-13i975d .framer-kz87t3 { height: 100%; }`,
          `.framer-tjWP0.framer-v-17jticf .framer-iaxgtx { align-self: unset; height: min-content; padding: 28px 24px 28px 24px; }`,
          `.framer-tjWP0.framer-v-17jticf .framer-r76qei { gap: 32px; }`,
          `.framer-tjWP0.framer-v-17jticf .framer-1u49ddv { width: 30px; }`,
          `.framer-tjWP0.framer-v-13i975d.framer-1ln2tib { flex-direction: column; }`,
          `.framer-tjWP0.framer-v-13i975d .framer-1ep9q7a { aspect-ratio: 2 / 1; flex: none; height: auto; order: 1; width: 100%; }`,
          `.framer-tjWP0.framer-v-13i975d .framer-iaxgtx { align-self: unset; flex: none; gap: 16px; height: min-content; order: 0; padding: 25px 22px 25px 22px; width: 100%; }`,
          `.framer-tjWP0.framer-v-13i975d .framer-r76qei { align-content: center; align-items: center; flex-direction: row; gap: 12px; }`,
          `.framer-tjWP0.framer-v-13i975d .framer-1u49ddv { width: 28px; }`,
          `.framer-tjWP0.framer-v-13i975d .framer-1l62bih { flex: 1 0 0px; width: 1px; }`,
          ...Me,
          ...he,
        ],
        `framer-tjWP0`
      )),
      (lr.displayName = `Approach card`),
      (lr.defaultProps = { height: 450, width: 600 }),
      H(lr, {
        variant: {
          options: [`sepewgdEt`, `tBQFzhd_u`, `RdeWz3Ehi`],
          optionTitles: [`Approach`, `Tablet`, `Phone`],
          title: `Variant`,
          type: W.Enum,
        },
        HpgRvkXB_: { title: `image`, type: W.ResponsiveImage },
        PlH7tNkcK: {
          defaultValue: {
            identifier: `module:J9o3ZXGfiPfMOyVqvs6J/SLPAnaUpcUkW5SEx4KmG/TWMSVpnV8.js:default`,
            moduleId: `J9o3ZXGfiPfMOyVqvs6J`,
          },
          setModuleId: `omX0gWFPqDwhaiWwf6ab`,
          title: `Icon`,
          type: W.VectorSetItem,
        },
        ZZtWUY1u3: { defaultValue: `Title`, displayTextArea: !1, title: `Title`, type: W.String },
        onZZtWUY1u3Change: { changes: `ZZtWUY1u3`, type: W.ChangeHandler },
        Qi6kMH62r: {
          defaultValue: `Description`,
          displayTextArea: !0,
          title: `Description`,
          type: W.String,
        },
        onQi6kMH62rChange: { changes: `Qi6kMH62r`, type: W.ChangeHandler },
      }),
      j(
        lr,
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
            ],
          },
          ...z(Ne),
          ...z(de),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function dr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr = e(() => {
    (v(),
      B(),
      A(),
      d(),
      Te(),
      je(),
      q(),
      (fr = [`CDYXBXWS_`, `tCLp081nR`]),
      (pr = `framer-BDkq2`),
      (mr = { CDYXBXWS_: `framer-v-2z7412`, tCLp081nR: `framer-v-gx4pr8` }),
      (hr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (gr = ({ value: e, children: t }) => {
        let n = h(T),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(T.Provider, { value: i, children: t });
      }),
      (_r = { Main: `CDYXBXWS_`, Phone: `tCLp081nR` }),
      (vr = C.create(a)),
      (yr = ({ description: e, height: t, icon: n, id: r, title: i, width: a, ...o }) => ({
        ...o,
        B7Fo2NnG9: n ?? o.B7Fo2NnG9 ?? Ee,
        ShOAEPPFP:
          e ??
          o.ShOAEPPFP ??
          `Every recommendation starts with your goals, ensuring our strategies are tailored to your business, industry.`,
        v2vbFM0CE: i ?? o.v2vbFM0CE ?? `Student-First Advice`,
        variant: _r[o.variant] ?? o.variant ?? `CDYXBXWS_`,
      })),
      (br = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (xr = L(
        f(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = x(),
            { activeLocale: o, setLocale: s } = V();
          U();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              B7Fo2NnG9: f,
              v2vbFM0CE: p,
              ShOAEPPFP: h,
              ...v
            } = yr(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: S,
              gestureHandlers: w,
              gestureVariant: ee,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = K({
              cycleOrder: fr,
              defaultVariant: `CDYXBXWS_`,
              ref: r,
              variant: d,
              variantClassNames: mr,
            }),
            A = br(e, O),
            j = F(pr, Pe, me);
          return m(k, {
            id: u ?? i,
            children: m(vr, {
              animate: O,
              initial: !1,
              children: m(gr, {
                value: hr,
                children: _(C.div, {
                  ...v,
                  ...w,
                  className: F(j, `framer-2z7412`, l, b),
                  "data-border": !0,
                  "data-framer-name": `Main`,
                  layoutDependency: A,
                  layoutId: `CDYXBXWS_`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...c,
                  },
                  ...dr({ tCLp081nR: { "data-framer-name": `Phone` } }, y, ee),
                  children: [
                    m(C.div, {
                      className: `framer-rwc22t`,
                      "data-border": !0,
                      "data-framer-name": `Icon`,
                      layoutDependency: A,
                      layoutId: `Sgew0hh3C`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-276bb6d3-2c53-44f6-8d0c-76c3e7b6c596, rgba(255, 255, 255, 0.08))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                      },
                      children: m(ce, {
                        animated: !0,
                        className: `framer-1hv79tf`,
                        Component: f,
                        layoutDependency: A,
                        layoutId: `rm25p4_bX`,
                        style: {
                          "--1m6trwb": 1,
                          "--21h8s6": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                          "--pgex8v": 1.5,
                        },
                      }),
                    }),
                    _(C.div, {
                      className: `framer-of9n2y`,
                      "data-framer-name": `Text wrapper`,
                      layoutDependency: A,
                      layoutId: `tvyNJBj6j`,
                      children: [
                        m(I, {
                          __fromCanvasComponent: !0,
                          children: m(a, {
                            children: m(C.h4, {
                              className: `framer-styles-preset-hpamux`,
                              "data-styles-preset": `GK8heJFj7`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-1eung3n, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                              },
                              children: `Strategic Clarity`,
                            }),
                          }),
                          className: `framer-1gh8fy4`,
                          fonts: [`Inter`],
                          layoutDependency: A,
                          layoutId: `EkcHRkRLR`,
                          style: {
                            "--extracted-1eung3n": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(255, 230, 0)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: p,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        m(I, {
                          __fromCanvasComponent: !0,
                          children: m(a, {
                            children: m(C.p, {
                              className: `framer-styles-preset-qlsyr3`,
                              "data-styles-preset": `YMpbOMTQr`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                              },
                              children: `Every recommendation starts with your goals, ensuring our strategies are tailored to your business, industry.`,
                            }),
                          }),
                          className: `framer-6vhj90`,
                          fonts: [`Inter`],
                          layoutDependency: A,
                          layoutId: `oyrcEfHzT`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(255, 230, 0)`,
                            "--framer-link-text-decoration": `underline`,
                            opacity: 0.8,
                          },
                          text: h,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-BDkq2.framer-vx8ahb, .framer-BDkq2 .framer-vx8ahb { display: block; }`,
          `.framer-BDkq2.framer-2z7412 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; height: 270px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 363px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-BDkq2 .framer-rwc22t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 12px; position: relative; width: min-content; }`,
          `.framer-BDkq2 .framer-1hv79tf { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 24px; }`,
          `.framer-BDkq2 .framer-of9n2y { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-BDkq2 .framer-1gh8fy4 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 347px; position: relative; width: 100%; }`,
          `.framer-BDkq2 .framer-6vhj90 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 315px; position: relative; width: 100%; }`,
          `.framer-BDkq2.framer-v-gx4pr8 .framer-6vhj90 { max-width: 267px; }`,
          ...Me,
          ...he,
          `.framer-BDkq2[data-border="true"]::after, .framer-BDkq2 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-BDkq2`
      )),
      (xr.displayName = `Feature Card`),
      (xr.defaultProps = { height: 270, width: 363 }),
      H(xr, {
        variant: {
          options: [`CDYXBXWS_`, `tCLp081nR`],
          optionTitles: [`Main`, `Phone`],
          title: `Variant`,
          type: W.Enum,
        },
        B7Fo2NnG9: {
          defaultValue: {
            identifier: `module:J9o3ZXGfiPfMOyVqvs6J/SLPAnaUpcUkW5SEx4KmG/TWMSVpnV8.js:default`,
            moduleId: `J9o3ZXGfiPfMOyVqvs6J`,
          },
          setModuleId: `omX0gWFPqDwhaiWwf6ab`,
          title: `Icon`,
          type: W.VectorSetItem,
        },
        v2vbFM0CE: {
          defaultValue: `Student-First Advice`,
          displayTextArea: !1,
          title: `Title`,
          type: W.String,
        },
        onv2vbFM0CEChange: { changes: `v2vbFM0CE`, type: W.ChangeHandler },
        ShOAEPPFP: {
          defaultValue: `Every recommendation starts with your goals, ensuring our strategies are tailored to your business, industry.`,
          displayTextArea: !1,
          title: `Description`,
          type: W.String,
        },
        onShOAEPPFPChange: { changes: `ShOAEPPFP`, type: W.ChangeHandler },
      }),
      j(
        xr,
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
            ],
          },
          ...z(Ne),
          ...z(de),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Cr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr = e(() => {
    (v(),
      B(),
      A(),
      d(),
      X(),
      (wr = [`BO_YN1XUI`, `VdJILs_4v`]),
      (Tr = `framer-V6wIU`),
      (Er = { BO_YN1XUI: `framer-v-16wk6ch`, VdJILs_4v: `framer-v-1cha28u` }),
      (Dr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Or = ({ value: e, children: t }) => {
        let n = h(T),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(T.Provider, { value: i, children: t });
      }),
      (kr = { Active: `BO_YN1XUI`, Disabled: `VdJILs_4v` }),
      (Ar = C.create(a)),
      (jr = ({ amount: e, height: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        J23yBDTwr: r ?? a.J23yBDTwr ?? `Engineering & Science & Research automation`,
        q4ztxfFQU: e ?? a.q4ztxfFQU ?? `01`,
        variant: kr[a.variant] ?? a.variant ?? `BO_YN1XUI`,
      })),
      (Mr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Nr = L(
        f(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = x(),
            { activeLocale: o, setLocale: s } = V();
          U();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              q4ztxfFQU: f,
              J23yBDTwr: p,
              ...h
            } = jr(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: S,
              gestureVariant: w,
              isLoading: ee,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = K({
              cycleOrder: wr,
              defaultVariant: `BO_YN1XUI`,
              ref: r,
              variant: d,
              variantClassNames: Er,
            }),
            O = Mr(e, D),
            A = F(Tr, be);
          return m(k, {
            id: u ?? i,
            children: m(Ar, {
              animate: D,
              initial: !1,
              children: m(Or, {
                value: Dr,
                children: _(C.div, {
                  ...h,
                  ...S,
                  className: F(A, `framer-16wk6ch`, l, y),
                  "data-framer-name": `Active`,
                  layoutDependency: O,
                  layoutId: `BO_YN1XUI`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 14,
                    borderBottomRightRadius: 14,
                    borderTopLeftRadius: 14,
                    borderTopRightRadius: 14,
                    boxShadow: `0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(255, 230, 0, 0.04), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(255, 230, 0, 0.03), 0px 10px 10px -3.75px rgba(255, 230, 0, 0.01)`,
                    opacity: 1,
                    ...c,
                  },
                  variants: { VdJILs_4v: { backgroundColor: `rgba(0, 0, 0, 0)`, opacity: 0.75 } },
                  ...Cr({ VdJILs_4v: { "data-framer-name": `Disabled` } }, v, w),
                  children: [
                    m(I, {
                      __fromCanvasComponent: !0,
                      children: m(a, {
                        children: m(C.p, {
                          className: `framer-styles-preset-uuzeo9`,
                          "data-styles-preset": `p2FU4QOGa`,
                          dir: `auto`,
                          children: `01`,
                        }),
                      }),
                      className: `framer-90x3vz`,
                      fonts: [`Inter`],
                      layoutDependency: O,
                      layoutId: `INUMKg9xi`,
                      style: {
                        "--framer-link-text-color": `rgb(255, 230, 0)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: f,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    m(I, {
                      __fromCanvasComponent: !0,
                      children: m(a, {
                        children: m(C.p, {
                          className: `framer-styles-preset-uuzeo9`,
                          "data-styles-preset": `p2FU4QOGa`,
                          dir: `auto`,
                          children: `Engineering & Science & Research automation`,
                        }),
                      }),
                      className: `framer-63sh2d`,
                      fonts: [`Inter`],
                      layoutDependency: O,
                      layoutId: `x58yD2Y6N`,
                      style: {
                        "--framer-link-text-color": `rgb(255, 230, 0)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: p,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-V6wIU.framer-ikxi7z, .framer-V6wIU .framer-ikxi7z { display: block; }`,
          `.framer-V6wIU.framer-16wk6ch { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 8px 18px 9px 18px; position: relative; width: min-content; }`,
          `.framer-V6wIU .framer-90x3vz, .framer-V6wIU .framer-63sh2d { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...ve,
        ],
        `framer-V6wIU`
      )),
      (Nr.displayName = `Approach bar`),
      (Nr.defaultProps = { height: 44, width: 244.5 }),
      H(Nr, {
        variant: {
          options: [`BO_YN1XUI`, `VdJILs_4v`],
          optionTitles: [`Active`, `Disabled`],
          title: `Variant`,
          type: W.Enum,
        },
        q4ztxfFQU: { defaultValue: `01`, displayTextArea: !1, title: `Amount`, type: W.String },
        onq4ztxfFQUChange: { changes: `q4ztxfFQU`, type: W.ChangeHandler },
        J23yBDTwr: {
          defaultValue: `Engineering & Science & Research automation`,
          displayTextArea: !1,
          title: `Title`,
          type: W.String,
        },
        onJ23yBDTwrChange: { changes: `J23yBDTwr`, type: W.ChangeHandler },
      }),
      j(
        Nr,
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
            ],
          },
          ...z(ye),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr = e(() => {
    (v(),
      B(),
      d(),
      (Fr = `var(--framer-icon-mask)`),
      (Ir = f(function (e, t) {
        return m(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Lr = C.create(Ir)),
      (Rr = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? m(Lr, { ...a, layoutId: r, ref: t, children: i })
          : m(`svg`, { ...a, ref: t, children: i });
      })),
      (zr = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 5.25 L 9 10.5 L 18 5.25 L 9 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="10.5px" id="lYFPhWKGp" transform="translate(3 2.25)" width="18px"/><path d="M 0 0 L 9 5.25 L 18 0" fill="transparent" height="5.25px" id="tjxbvx4B_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 16.5)" width="18px"/><path d="M 0 0 L 9 5.25 L 18 0" fill="transparent" height="5.25px" id="jkFbsHmSE" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 12)" width="18px"/><path d="M 0 5.25 L 9 10.5 L 18 5.25 L 9 0 Z" fill="transparent" height="10.5px" id="g8tAjyTpu" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 2.25)" width="18px"/></svg>`),
      (Br = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (Vr = L(
        f(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = Br(e),
            u = oe(`3076148817`, zr);
          return m(Rr, {
            ...l,
            className: F(`framer-qlGUT`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: m(`use`, { href: u }),
          });
        }),
        [
          `.framer-qlGUT { -webkit-mask: ${Fr}; aspect-ratio: 1; display: block; mask: ${Fr}; width: 24px; }`,
        ],
        `framer-qlGUT`
      )),
      (Vr.displayName = `Stack`),
      H(Vr, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: W.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: W.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: W.Number,
        },
      }));
  });
function Ur(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  Z,
  ei = e(() => {
    (v(),
      B(),
      A(),
      d(),
      Hr(),
      ue(),
      (Wr = R(Vr)),
      (Gr = [`N1iIGi9Y5`, `QcKuxbsg1`]),
      (Kr = `framer-j7giT`),
      (qr = { N1iIGi9Y5: `framer-v-8gtjmp`, QcKuxbsg1: `framer-v-rn4yl9` }),
      (Jr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Yr = ({ value: e, children: t }) => {
        let n = h(T),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(T.Provider, { value: i, children: t });
      }),
      (Xr = { "Variant 1": `N1iIGi9Y5`, "Variant 2": `QcKuxbsg1` }),
      (Zr = C.create(a)),
      (Qr = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        variant: Xr[i.variant] ?? i.variant ?? `N1iIGi9Y5`,
        XbP2lWmp8: n ?? i.XbP2lWmp8 ?? `Generic, one-size-fits-all solutions`,
      })),
      ($r = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = L(
        f(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = x(),
            { activeLocale: o, setLocale: s } = V();
          U();
          let { style: c, className: l, layoutId: u, variant: d, XbP2lWmp8: f, ...p } = Qr(e),
            {
              baseVariant: h,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: S,
              isLoading: w,
              setGestureState: ee,
              setVariant: T,
              variants: E,
            } = K({
              cycleOrder: Gr,
              defaultVariant: `N1iIGi9Y5`,
              ref: r,
              variant: d,
              variantClassNames: qr,
            }),
            D = $r(e, E),
            O = F(Kr, le),
            A = () => h !== `QcKuxbsg1`,
            j = () => h === `QcKuxbsg1`;
          return m(k, {
            id: u ?? i,
            children: m(Zr, {
              animate: E,
              initial: !1,
              children: m(Yr, {
                value: Jr,
                children: _(C.div, {
                  ...p,
                  ...b,
                  className: F(O, `framer-8gtjmp`, l, v),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: D,
                  layoutId: `N1iIGi9Y5`,
                  ref: r,
                  style: { ...c },
                  ...Ur({ QcKuxbsg1: { "data-framer-name": `Variant 2` } }, h, S),
                  children: [
                    A() &&
                      m(Vr, {
                        animated: !0,
                        className: `framer-1bvybta`,
                        layoutDependency: D,
                        layoutId: `pmdW6leVY`,
                        style: {
                          "--1m6trwb": 1,
                          "--21h8s6": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                          "--pgex8v": 1.5,
                        },
                      }),
                    m(I, {
                      __fromCanvasComponent: !0,
                      children: m(a, {
                        children: m(C.p, {
                          className: `framer-styles-preset-1bsm36g`,
                          "data-styles-preset": `V83vTwGC4`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                          },
                          children: `Generic, one-size-fits-all solutions`,
                        }),
                      }),
                      className: `framer-4cn4px`,
                      "data-framer-name": `Generic, one-size-fits-all solutions`,
                      fonts: [`Inter`],
                      layoutDependency: D,
                      layoutId: `jWwctYEHt`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      text: f,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    j() &&
                      m(te, {
                        className: `framer-cstaam`,
                        "data-framer-name": `Vector`,
                        fill: `rgba(0,0,0,1)`,
                        intrinsicHeight: 64,
                        intrinsicWidth: 51,
                        layoutDependency: D,
                        layoutId: `X8Caz8Rol`,
                        svg: `<svg width="51" height="64" viewBox="0 0 51 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3241 32.1698C19.3241 33.3986 19.6911 34.5998 20.3786 35.6213C21.0661 36.6429 22.0433 37.4387 23.1863 37.9084C24.3294 38.3781 25.587 38.5004 26.8001 38.2598C28.0131 38.019 29.127 37.4264 30.0008 36.5566C30.8747 35.6868 31.4691 34.5792 31.7088 33.3736C31.9486 32.1681 31.8231 30.919 31.3479 29.7845C30.8728 28.6499 30.0696 27.681 29.0398 27.0001C28.0101 26.3192 26.8001 25.9572 25.5631 25.9596C23.9073 25.963 22.3204 26.6187 21.1507 27.783C19.981 28.9472 19.3241 30.5249 19.3241 32.1698Z" fill="white"/>
<path d="M25.5631 51.5796C24.3267 51.5796 23.118 51.9438 22.0899 52.6262C21.0618 53.3086 20.2606 54.2785 19.7874 55.4132C19.3142 56.548 19.1903 57.7967 19.4317 59.0014C19.6729 60.206 20.2683 61.3125 21.1425 62.181C22.0169 63.0496 23.1308 63.6411 24.3435 63.8807C25.5563 64.1203 26.8132 63.9973 27.9555 63.5273C29.0979 63.0573 30.0743 62.2612 30.7612 61.24C31.4481 60.2187 31.8147 59.018 31.8147 57.7898C31.8147 56.1427 31.1561 54.5631 29.9836 53.3985C28.8113 52.2339 27.2212 51.5796 25.5631 51.5796Z" fill="white"/>
<path d="M44.7484 25.9596C43.5118 25.9596 42.3031 26.3238 41.2752 27.0062C40.2471 27.6886 39.4458 28.6585 38.9726 29.7933C38.4994 30.928 38.3756 32.1767 38.6168 33.3814C38.858 34.5859 39.4535 35.6926 40.3278 36.561C41.202 37.4295 42.3161 38.021 43.5287 38.2606C44.7414 38.5002 45.9984 38.3773 47.1407 37.9073C48.2831 37.4372 49.2594 36.6412 49.9463 35.6199C50.6333 34.5988 51 33.3981 51 32.1697C51 30.5228 50.3413 28.9431 49.1689 27.7785C47.9964 26.6139 46.4063 25.9596 44.7484 25.9596Z" fill="white"/>
<path d="M25.5631 12.4204C26.8001 12.4229 28.0101 12.0607 29.0398 11.3798C30.0696 10.699 30.8728 9.72999 31.3479 8.59544C31.8231 7.46089 31.9486 6.21181 31.7088 5.00636C31.4691 3.8009 30.8747 2.69313 30.0008 1.82333C29.127 0.953651 28.0131 0.360916 26.8001 0.120302C25.587 -0.120436 24.3294 0.00188131 23.1863 0.471542C22.0433 0.941203 21.0661 1.73709 20.3786 2.75863C19.6911 3.78016 19.3241 4.98134 19.3241 6.21018C19.3241 7.855 19.981 9.43269 21.1507 10.597C22.3204 11.7613 23.9073 12.417 25.5631 12.4204Z" fill="white"/>
<path d="M12.5032 31.4532C12.5032 30.2249 12.1365 29.0242 11.4496 28.0029C10.7627 26.9817 9.78636 26.1857 8.64398 25.7157C7.50161 25.2457 6.2447 25.1227 5.03196 25.3623C3.81922 25.6019 2.70532 26.1934 1.83097 27.062C0.956758 27.9304 0.361332 29.0369 0.120125 30.2416C-0.121082 31.4463 0.00268713 32.695 0.475862 33.8297C0.949037 34.9645 1.75036 35.9344 2.77834 36.6167C3.80644 37.2991 5.01513 37.6634 6.25153 37.6634C7.90961 37.6634 9.49972 37.0091 10.6722 35.8445C11.8446 34.6797 12.5032 33.1002 12.5032 31.4532Z" fill="white"/>
<path d="M39.7876 40.6302C37.5512 38.395 36.2959 35.3715 36.2959 32.22C36.2959 29.0685 37.5512 26.045 39.7876 23.8099C40.6595 22.9403 41.2524 21.8338 41.4917 20.6299C41.7309 19.4258 41.6056 18.1785 41.1317 17.0451C40.6579 15.9118 39.8566 14.9433 38.829 14.262C37.8015 13.5807 36.5938 13.2171 35.3583 13.2171C34.1229 13.2171 32.9152 13.5807 31.8878 14.262C30.8602 14.9433 30.0588 15.9118 29.585 17.0451C29.1111 18.1785 28.9858 19.4258 29.225 20.6299C29.4643 21.8338 30.0572 22.9403 30.929 23.8099C32.0524 24.9155 32.9442 26.2315 33.5528 27.6814C34.1613 29.1314 34.4746 30.6868 34.4746 32.2577C34.4746 33.8286 34.1613 35.3841 33.5528 36.834C32.9442 38.284 32.0524 39.5998 30.929 40.7056C30.0572 41.575 29.4643 42.6817 29.225 43.8856C28.9858 45.0897 29.1111 46.337 29.585 47.4704C30.0588 48.6037 30.8602 49.5722 31.8878 50.2534C32.9152 50.9348 34.1229 51.2984 35.3583 51.2984C36.5938 51.2984 37.8015 50.9348 38.829 50.2534C39.8566 49.5722 40.6579 48.6037 41.1317 47.4704C41.6056 46.337 41.7309 45.0897 41.4917 43.8856C41.2524 42.6817 40.6595 41.575 39.7876 40.7056V40.6302Z" fill="white"/>
<path d="M21.792 44.2507C21.7853 42.6202 21.1409 41.056 19.995 39.8885C17.7586 37.6533 16.5033 34.6298 16.5033 31.4783C16.5033 28.3269 17.7586 25.3035 19.995 23.0682C20.8669 22.1988 21.4598 21.0921 21.699 19.8882C21.9383 18.6842 21.813 17.4368 21.3391 16.3035C20.8653 15.1701 20.0639 14.2017 19.0363 13.5203C18.0089 12.8391 16.8011 12.4754 15.5657 12.4754C14.3303 12.4754 13.1226 12.8391 12.095 13.5203C11.0675 14.2017 10.2662 15.1701 9.79228 16.3035C9.31847 17.4368 9.19318 18.6842 9.43237 19.8882C9.67167 21.0921 10.2646 22.1988 11.1364 23.0682C12.2579 24.1737 13.148 25.4888 13.7555 26.9376C14.3629 28.3864 14.6756 29.9404 14.6756 31.5098C14.6756 33.0793 14.3629 34.6332 13.7555 36.082C13.148 37.5309 12.2579 38.8459 11.1364 39.9513C10.4167 40.6774 9.88782 41.5684 9.59663 42.5455C9.30543 43.5226 9.26063 44.5558 9.46641 45.5542C9.67218 46.5525 10.1221 47.4851 10.7765 48.27C11.4309 49.0548 12.2695 49.6675 13.2187 50.0542C14.1678 50.4409 15.198 50.5897 16.2187 50.4874C17.2393 50.3851 18.2189 50.0348 19.0711 49.4675C19.9233 48.9003 20.6219 48.1334 21.1052 47.2346C21.5886 46.3358 21.8419 45.3326 21.8426 44.3136L21.792 44.2507Z" fill="white"/>
</svg>
`,
                        withExternalLayout: !0,
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-j7giT.framer-1j00xi6, .framer-j7giT .framer-1j00xi6 { display: block; }`,
          `.framer-j7giT.framer-8gtjmp { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 342px; }`,
          `.framer-j7giT .framer-1bvybta { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); position: relative; width: 18px; }`,
          `.framer-j7giT .framer-4cn4px { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-j7giT .framer-cstaam { aspect-ratio: 0.796875 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); position: relative; width: 14px; }`,
          `.framer-j7giT.framer-v-rn4yl9 .framer-4cn4px { order: 2; }`,
          `.framer-j7giT.framer-v-rn4yl9 .framer-cstaam { order: 1; }`,
          ...ge,
        ],
        `framer-j7giT`
      )),
      (Z.displayName = `Feature`),
      (Z.defaultProps = { height: 24.5, width: 342 }),
      H(Z, {
        variant: {
          options: [`N1iIGi9Y5`, `QcKuxbsg1`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: W.Enum,
        },
        XbP2lWmp8: {
          defaultValue: `Generic, one-size-fits-all solutions`,
          displayTextArea: !1,
          title: `Title`,
          type: W.String,
        },
        onXbP2lWmp8Change: { changes: `XbP2lWmp8`, type: W.ChangeHandler },
      }),
      j(
        Z,
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
            ],
          },
          ...Wr,
          ...z(_e),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ti,
  ni,
  ri,
  ii,
  ai,
  $,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi = e(() => {
    (v(),
      B(),
      A(),
      d(),
      De(),
      fe(),
      q(),
      ei(),
      (ti = R(Z)),
      (ni = [`Ww5fzEmu1`, `irKjuxCYq`]),
      (ri = `framer-bW07m`),
      (ii = { irKjuxCYq: `framer-v-1ouirry`, Ww5fzEmu1: `framer-v-1afh44h` }),
      (ai = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      ($ = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (oi = ({ value: e, children: t }) => {
        let n = h(T),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(T.Provider, { value: i, children: t });
      }),
      (si = { "Variant 1": `Ww5fzEmu1`, "Variant 2": `irKjuxCYq` }),
      (ci = C.create(a)),
      (li = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: si[r.variant] ?? r.variant ?? `Ww5fzEmu1`,
      })),
      (ui = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (di = L(
        f(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = x(),
            { activeLocale: o, setLocale: s } = V(),
            c = U(),
            { style: l, className: u, layoutId: d, variant: f, ...p } = li(e),
            {
              baseVariant: h,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: S,
              isLoading: w,
              setGestureState: ee,
              setVariant: T,
              variants: E,
            } = K({
              cycleOrder: ni,
              defaultVariant: `Ww5fzEmu1`,
              ref: r,
              variant: f,
              variantClassNames: ii,
            }),
            D = ui(e, E),
            O = F(ri, Ae, me, Y);
          return m(k, {
            id: d ?? i,
            children: m(ci, {
              animate: E,
              initial: !1,
              children: m(oi, {
                value: ai,
                children: _(C.div, {
                  ...p,
                  ...b,
                  className: F(O, `framer-1afh44h`, u, v),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: D,
                  layoutId: `Ww5fzEmu1`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-e27ba22d-ed7b-40e3-95c6-4eb6e1e581d8, rgba(255, 255, 255, 0.02))`,
                    borderBottomLeftRadius: 26,
                    borderBottomRightRadius: 26,
                    borderTopLeftRadius: 26,
                    borderTopRightRadius: 26,
                    ...l,
                  },
                  ...Q({ irKjuxCYq: { "data-framer-name": `Variant 2` } }, h, S),
                  children: [
                    _(C.div, {
                      className: `framer-w0fdz1`,
                      "data-border": !0,
                      "data-framer-name": `Title Wrapper`,
                      layoutDependency: D,
                      layoutId: `o38feN2ik`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        borderBottomLeftRadius: 22,
                        borderBottomRightRadius: 22,
                        borderTopLeftRadius: 22,
                        borderTopRightRadius: 22,
                      },
                      children: [
                        m(I, {
                          __fromCanvasComponent: !0,
                          children: m(a, {
                            children: m(C.h4, {
                              className: `framer-styles-preset-4trj8p`,
                              "data-styles-preset": `JlQPYH9lf`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-1eung3n, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                              },
                              children: `What Students Often Face`,
                            }),
                          }),
                          className: `framer-r2qiav`,
                          "data-framer-name": `What Students Often Face`,
                          fonts: [`Inter`],
                          layoutDependency: D,
                          layoutId: `NOnRPg52S`,
                          style: {
                            "--extracted-1eung3n": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Q(
                            {
                              irKjuxCYq: {
                                children: m(a, {
                                  children: m(C.h4, {
                                    className: `framer-styles-preset-4trj8p`,
                                    "data-styles-preset": `JlQPYH9lf`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-1eung3n, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                    },
                                    children: `With CareerNova`,
                                  }),
                                }),
                              },
                            },
                            h,
                            S
                          ),
                        }),
                        m(I, {
                          __fromCanvasComponent: !0,
                          children: m(a, {
                            children: m(C.p, {
                              className: `framer-styles-preset-qlsyr3`,
                              "data-styles-preset": `YMpbOMTQr`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `start`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                              },
                              children: `Many students are pushed toward colleges before anyone has studied their profile.`,
                            }),
                          }),
                          className: `framer-ihmaxm`,
                          "data-framer-name": `Many consulting engagements deliver recommendations, but often fall short during implementation and measurable business impact.`,
                          fonts: [`Inter`],
                          layoutDependency: D,
                          layoutId: `qU4L7O39V`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                            "--framer-paragraph-spacing": `0px`,
                            opacity: 0.7,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Q(
                            {
                              irKjuxCYq: {
                                children: m(a, {
                                  children: m(C.p, {
                                    className: `framer-styles-preset-1xheykw`,
                                    "data-styles-preset": `vz9muakNv`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                    },
                                    children: `Honest advice combined with hands-on support at every stage.`,
                                  }),
                                }),
                              },
                            },
                            h,
                            S
                          ),
                        }),
                      ],
                    }),
                    _(C.div, {
                      className: `framer-kz4cg9`,
                      "data-framer-name": `Features`,
                      layoutDependency: D,
                      layoutId: `G377RIG3i`,
                      children: [
                        m(se, {
                          height: 24,
                          width: `calc(${c?.width || `100vw`} - 64px)`,
                          y:
                            (c?.y || 0) +
                            16 +
                            (((c?.height || 481) - 64 - 485.7) / 2 + 245.7 + 32) +
                            0 +
                            0,
                          ...Q(
                            {
                              irKjuxCYq: {
                                y:
                                  (c?.y || 0) +
                                  16 +
                                  (((c?.height || 480.5) - 64 - 484.4) / 2 + 244.4 + 32) +
                                  0 +
                                  0,
                              },
                            },
                            h,
                            S
                          ),
                          children: m(P, {
                            className: `framer-1cgzsyw-container`,
                            layoutDependency: D,
                            layoutId: `oSfZzE3Q6-container`,
                            nodeId: `oSfZzE3Q6`,
                            rendersWithMotion: !0,
                            scopeId: `vV80Npng9`,
                            children: m(Z, {
                              height: `100%`,
                              id: `oSfZzE3Q6`,
                              layoutId: `oSfZzE3Q6`,
                              style: { width: `100%` },
                              variant: $(`N1iIGi9Y5`),
                              width: `100%`,
                              XbP2lWmp8: `The same university list for every student`,
                              ...Q(
                                {
                                  irKjuxCYq: {
                                    variant: $(`QcKuxbsg1`),
                                    XbP2lWmp8: `Recommendations built around your profile`,
                                  },
                                },
                                h,
                                S
                              ),
                            }),
                          }),
                        }),
                        m(se, {
                          height: 24,
                          width: `calc(${c?.width || `100vw`} - 64px)`,
                          y:
                            (c?.y || 0) +
                            16 +
                            (((c?.height || 481) - 64 - 485.7) / 2 + 245.7 + 32) +
                            0 +
                            46,
                          ...Q(
                            {
                              irKjuxCYq: {
                                y:
                                  (c?.y || 0) +
                                  16 +
                                  (((c?.height || 480.5) - 64 - 484.4) / 2 + 244.4 + 32) +
                                  0 +
                                  46,
                              },
                            },
                            h,
                            S
                          ),
                          children: m(P, {
                            className: `framer-tspy9-container`,
                            layoutDependency: D,
                            layoutId: `Hl0PhnUsm-container`,
                            nodeId: `Hl0PhnUsm`,
                            rendersWithMotion: !0,
                            scopeId: `vV80Npng9`,
                            children: m(Z, {
                              height: `100%`,
                              id: `Hl0PhnUsm`,
                              layoutId: `Hl0PhnUsm`,
                              style: { width: `100%` },
                              variant: $(`N1iIGi9Y5`),
                              width: `100%`,
                              XbP2lWmp8: `Pressure to decide quickly`,
                              ...Q(
                                {
                                  irKjuxCYq: {
                                    variant: $(`QcKuxbsg1`),
                                    XbP2lWmp8: `Time to decide, with clear information`,
                                  },
                                },
                                h,
                                S
                              ),
                            }),
                          }),
                        }),
                        m(se, {
                          height: 24,
                          width: `calc(${c?.width || `100vw`} - 64px)`,
                          y:
                            (c?.y || 0) +
                            16 +
                            (((c?.height || 481) - 64 - 485.7) / 2 + 245.7 + 32) +
                            0 +
                            92,
                          ...Q(
                            {
                              irKjuxCYq: {
                                y:
                                  (c?.y || 0) +
                                  16 +
                                  (((c?.height || 480.5) - 64 - 484.4) / 2 + 244.4 + 32) +
                                  0 +
                                  92,
                              },
                            },
                            h,
                            S
                          ),
                          children: m(P, {
                            className: `framer-1nn9rhm-container`,
                            layoutDependency: D,
                            layoutId: `F24MqPxWA-container`,
                            nodeId: `F24MqPxWA`,
                            rendersWithMotion: !0,
                            scopeId: `vV80Npng9`,
                            children: m(Z, {
                              height: `100%`,
                              id: `F24MqPxWA`,
                              layoutId: `F24MqPxWA`,
                              style: { width: `100%` },
                              variant: $(`N1iIGi9Y5`),
                              width: `100%`,
                              XbP2lWmp8: `Unclear process and costs`,
                              ...Q(
                                {
                                  irKjuxCYq: {
                                    variant: $(`QcKuxbsg1`),
                                    XbP2lWmp8: `A transparent, step-by-step process`,
                                  },
                                },
                                h,
                                S
                              ),
                            }),
                          }),
                        }),
                        m(se, {
                          height: 24,
                          width: `calc(${c?.width || `100vw`} - 64px)`,
                          y:
                            (c?.y || 0) +
                            16 +
                            (((c?.height || 481) - 64 - 485.7) / 2 + 245.7 + 32) +
                            0 +
                            138,
                          ...Q(
                            {
                              irKjuxCYq: {
                                y:
                                  (c?.y || 0) +
                                  16 +
                                  (((c?.height || 480.5) - 64 - 484.4) / 2 + 244.4 + 32) +
                                  0 +
                                  138,
                              },
                            },
                            h,
                            S
                          ),
                          children: m(P, {
                            className: `framer-1t5ba5p-container`,
                            layoutDependency: D,
                            layoutId: `ZptNy_PL9-container`,
                            nodeId: `ZptNy_PL9`,
                            rendersWithMotion: !0,
                            scopeId: `vV80Npng9`,
                            children: m(Z, {
                              height: `100%`,
                              id: `ZptNy_PL9`,
                              layoutId: `ZptNy_PL9`,
                              style: { width: `100%` },
                              variant: $(`N1iIGi9Y5`),
                              width: `100%`,
                              XbP2lWmp8: `Support that stops after admission`,
                              ...Q(
                                {
                                  irKjuxCYq: {
                                    variant: $(`QcKuxbsg1`),
                                    XbP2lWmp8: `Support from application to career planning`,
                                  },
                                },
                                h,
                                S
                              ),
                            }),
                          }),
                        }),
                        m(se, {
                          height: 24,
                          width: `calc(${c?.width || `100vw`} - 64px)`,
                          y:
                            (c?.y || 0) +
                            16 +
                            (((c?.height || 481) - 64 - 485.7) / 2 + 245.7 + 32) +
                            0 +
                            184,
                          ...Q(
                            {
                              irKjuxCYq: {
                                y:
                                  (c?.y || 0) +
                                  16 +
                                  (((c?.height || 480.5) - 64 - 484.4) / 2 + 244.4 + 32) +
                                  0 +
                                  184,
                              },
                            },
                            h,
                            S
                          ),
                          children: m(P, {
                            className: `framer-6lk9n9-container`,
                            layoutDependency: D,
                            layoutId: `YFMmzeMas-container`,
                            nodeId: `YFMmzeMas`,
                            rendersWithMotion: !0,
                            scopeId: `vV80Npng9`,
                            children: m(Z, {
                              height: `100%`,
                              id: `YFMmzeMas`,
                              layoutId: `YFMmzeMas`,
                              style: { width: `100%` },
                              variant: $(`N1iIGi9Y5`),
                              width: `100%`,
                              XbP2lWmp8: `Promises that cannot be kept`,
                              ...Q(
                                {
                                  irKjuxCYq: {
                                    variant: $(`QcKuxbsg1`),
                                    XbP2lWmp8: `Realistic advice, never guarantees`,
                                  },
                                },
                                h,
                                S
                              ),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-bW07m.framer-14xtu5m, .framer-bW07m .framer-14xtu5m { display: block; }`,
          `.framer-bW07m.framer-1afh44h { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 16px 48px 16px; position: relative; width: 552px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-bW07m .framer-w0fdz1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 28px 28px 42px 28px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-bW07m .framer-r2qiav { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-bW07m .framer-ihmaxm { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 460px; position: relative; width: 100%; }`,
          `.framer-bW07m .framer-kz4cg9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 16px 0px 16px; position: relative; width: 100%; }`,
          `.framer-bW07m .framer-1cgzsyw-container, .framer-bW07m .framer-tspy9-container, .framer-bW07m .framer-1nn9rhm-container, .framer-bW07m .framer-1t5ba5p-container, .framer-bW07m .framer-6lk9n9-container { flex: none; height: auto; position: relative; width: 100%; }`,
          ...Oe,
          ...he,
          ...J,
          `.framer-bW07m[data-border="true"]::after, .framer-bW07m [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-bW07m`
      )),
      (di.displayName = `Comparison Card`),
      (di.defaultProps = { height: 481, width: 552 }),
      H(di, {
        variant: {
          options: [`Ww5fzEmu1`, `irKjuxCYq`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: W.Enum,
        },
      }),
      j(
        di,
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
            ],
          },
          ...ti,
          ...z(ke),
          ...z(de),
          ...z(pe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (di.loader = { load: (e, t) => (t.locale, Promise.allSettled([ie(Z, {}, t)])) }));
  }),
  pi,
  mi,
  hi,
  gi,
  _i = e(() => {
    (v(),
      B(),
      d(),
      (pi = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 0 4" fill="transparent" height="4px" id="WCoacj4pO" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(12 2)" width="1px"/><path d="M 0 0 L 0 4" fill="transparent" height="4px" id="g8xVuy9iF" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(12 18)" width="1px"/><path d="M 0 0 L 2.83 2.83" fill="transparent" height="2.83px" id="MJgfI3x9m" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(4.93 4.93)" width="2.83px"/><path d="M 0 0 L 2.83 2.83" fill="transparent" height="2.830000000000002px" id="xG18H0HUJ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(16.24 16.24)" width="2.830000000000002px"/><path d="M 0 0 L 4 0" fill="transparent" height="1px" id="pSuKuk3cd" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(2 12)" width="4px"/><path d="M 0 0 L 4 0" fill="transparent" height="1px" id="x06qgS98A" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(18 12)" width="4px"/><path d="M 0 2.83 L 2.83 0" fill="transparent" height="2.830000000000002px" id="sRU3S45LM" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(4.93 16.24)" width="2.83px"/><path d="M 0 2.83 L 2.83 0" fill="transparent" height="2.83px" id="ThtPp1YXQ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(16.24 4.93)" width="2.830000000000002px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (mi = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? m(C.div, { ...a, layoutId: r, ref: t }) : m(`div`, { ...a, ref: t });
      })),
      (hi = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        UO5clYVeQ: n ?? i.UO5clYVeQ ?? `rgb(0, 0, 0)`,
      })),
      (gi = L(
        f(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, UO5clYVeQ: o, ...s } = hi(e);
          return m(mi, {
            ...s,
            className: F(`framer-w0S00`, r),
            layoutId: i,
            ref: t,
            style: { "--43q7um": o, ...n },
          });
        }),
        [
          `.framer-w0S00 { -webkit-mask: ${pi}; aspect-ratio: 1; background-color: var(--43q7um); mask: ${pi}; width: 24px; }`,
        ],
        `framer-w0S00`
      )),
      (gi.displayName = `Loader`),
      H(gi, {
        UO5clYVeQ: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: W.Color },
      }));
  }),
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di = e(() => {
    (v(),
      B(),
      A(),
      d(),
      _i(),
      Fe(),
      (vi = R(gi)),
      (yi = `framer-uYAl8`),
      (bi = { fVr6woH4p: `framer-v-mfv6wq` }),
      (xi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Si = ({ value: e, children: t }) => {
        let n = h(T),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(T.Provider, { value: i, children: t });
      }),
      (Ci = C.create(a)),
      (wi = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        c02kgYSpN: n ?? i.c02kgYSpN ?? `Innovation`,
      })),
      (Ti = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ei = L(
        f(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = x(),
            { activeLocale: o, setLocale: s } = V();
          U();
          let { style: c, className: l, layoutId: u, variant: d, c02kgYSpN: f, ...p } = wi(e),
            {
              baseVariant: h,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: S,
              isLoading: w,
              setGestureState: ee,
              setVariant: T,
              variants: E,
            } = K({ defaultVariant: `fVr6woH4p`, ref: r, variant: d, variantClassNames: bi }),
            D = Ti(e, E),
            O = F(yi, Re);
          return m(k, {
            id: u ?? i,
            children: m(Ci, {
              animate: E,
              initial: !1,
              children: m(Si, {
                value: xi,
                children: _(C.div, {
                  ...p,
                  ...b,
                  className: F(O, `framer-mfv6wq`, l, v),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: D,
                  layoutId: `fVr6woH4p`,
                  ref: r,
                  style: { ...c },
                  children: [
                    m(I, {
                      __fromCanvasComponent: !0,
                      children: m(a, {
                        children: m(C.h3, {
                          className: `framer-styles-preset-exnuvb`,
                          "data-styles-preset": `CfPVaqsaE`,
                          dir: `auto`,
                          children: `Innovation`,
                        }),
                      }),
                      className: `framer-18qtrry`,
                      "data-framer-name": `Innovation`,
                      fonts: [`Inter`],
                      layoutDependency: D,
                      layoutId: `IY8iq75A1`,
                      style: { "--framer-paragraph-spacing": `0px` },
                      text: f,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    m(gi, {
                      animated: !0,
                      className: `framer-1puc8xu`,
                      layoutDependency: D,
                      layoutId: `C2yMhU06a`,
                      style: {
                        "--43q7um": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-uYAl8.framer-nb5r2l, .framer-uYAl8 .framer-nb5r2l { display: block; }`,
          `.framer-uYAl8.framer-mfv6wq { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: 94px; justify-content: center; overflow: visible; padding: 0px 0px 12px 0px; position: relative; width: min-content; }`,
          `.framer-uYAl8 .framer-18qtrry { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-uYAl8 .framer-1puc8xu { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 41px; }`,
          ...Ie,
        ],
        `framer-uYAl8`
      )),
      (Ei.displayName = `Ticker Item`),
      (Ei.defaultProps = { height: 94, width: 409.5 }),
      H(Ei, {
        c02kgYSpN: {
          defaultValue: `Innovation`,
          displayTextArea: !1,
          title: `Title`,
          type: W.String,
        },
        onc02kgYSpNChange: { changes: `c02kgYSpN`, type: W.ChangeHandler },
      }),
      j(
        Ei,
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
            ],
          },
          ...vi,
          ...z(Le),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Oi(e) {
  let { mode: t, start: n, end: r, value: i, decimals: a, commas: s, color: c, animation: u } = e,
    d = M.current() === M.canvas,
    f = e.tag,
    p = C[e.tag],
    m = t == "default",
    h = m ? n : i,
    v = m ? u.transition : e.transition,
    b = (e) => {
      let t = e.toFixed(a);
      return (s && (t = t.replace(/\B(?=(\d{3})+(?!\d))/g, `,`)), t);
    },
    [x, ee] = o(h),
    [T, E] = o(x),
    [O, k] = o(null),
    A = g(null),
    j = w(A, { once: !e.animation.replay, amount: `some` });
  S(i);
  let N = (e, t) => {
    d ||
      (O && O.stop(),
      E(t),
      k(
        D(e, t, {
          ...v,
          onUpdate: (e) => {
            ee(e);
          },
        })
      ));
  };
  return (
    l(() => {
      m && u.trigger == `appear` && N(n, r);
    }, []),
    l(() => {
      m && u.trigger == `layerInView` && (j ? N(n, r) : (O && O.stop(), ee(n)));
    }, [j]),
    l(() => {
      m || N(x, i);
    }, [i]),
    _(y, {
      children: [
        _(f, {
          style: {
            ...e.style,
            margin: 0,
            opacity: 0,
            pointerEvents: `none`,
            userSelect: `none`,
            textWrap: e.balance ? `balance` : void 0,
            fontVariantNumeric: e.monospace ? `tabular-nums` : void 0,
            textAlign: `center`,
            ...e.font,
          },
          children: [e.prefix, b(d ? h : T), e.suffix],
        }),
        _(p, {
          ref: A,
          style: {
            position: `absolute`,
            inset: 0,
            userSelect: e.userSelect ? `auto` : `none`,
            fontVariantNumeric: e.monospace ? `tabular-nums` : void 0,
            margin: 0,
            ...(c.mode == `solid`
              ? { color: c.color }
              : {
                  WebkitBackgroundClip: `text`,
                  WebkitTextFillColor: `transparent`,
                  backgroundImage: `linear-gradient(${c.angle}deg, ${c.startColor}, ${c.endColor})`,
                }),
            textDecoration: e.decoration,
            textWrap: e.balance ? `balance` : void 0,
            textAlign: `center`,
            ...e.font,
            ...e.style,
          },
          children: [e.prefix, b(d ? h : x), e.suffix],
        }),
      ],
    })
  );
}
var ki = e(() => {
  (v(),
    B(),
    d(),
    A(),
    (Oi.displayName = `Animated Number Counter`),
    H(Oi, {
      mode: {
        type: W.Enum,
        options: [`default`, `variants`],
        optionTitles: [`Default`, `Variants`],
        displaySegmentedControl: !0,
      },
      value: { type: W.Number, defaultValue: 0, hidden: (e) => e.mode !== `variants` },
      start: { type: W.Number, defaultValue: 0, hidden: (e) => e.mode !== "default" },
      end: { type: W.Number, defaultValue: 100, hidden: (e) => e.mode !== "default" },
      animation: {
        type: W.Object,
        icon: `effect`,
        hidden: (e) => e.mode !== "default",
        controls: {
          trigger: {
            type: W.Enum,
            defaultValue: `layerInView`,
            options: [`appear`, `layerInView`],
            optionTitles: [`Appear`, `Layer in View`],
            displaySegmentedControl: !0,
            segmentedControlVisas: `vertical`,
          },
          replay: {
            type: W.Boolean,
            defaultValue: !0,
            hidden(e) {
              return e.trigger !== `layerInView`;
            },
          },
          transition: {
            type: W.Transition,
            defaultValue: { type: `spring`, duration: 1, bounce: 0 },
          },
        },
      },
      transition: {
        type: W.Transition,
        defaultValue: { type: `spring`, duration: 1, bounce: 0 },
        hidden: (e) => e.mode !== `variants`,
      },
      decimals: {
        type: W.Enum,
        defaultValue: 0,
        options: [0, 1, 2, 3],
        optionTitles: [`Off`, `1`, `2`, `3`],
        displaySegmentedControl: !0,
      },
      commas: { type: W.Boolean, defaultValue: !0 },
      font: {
        type: `font`,
        controls: `extended`,
        defaultFontType: `sans-serif`,
        defaultValue: { fontSize: 16, lineHeight: 1 },
      },
      color: {
        type: W.Object,
        controls: {
          mode: {
            type: W.Enum,
            defaultValue: `solid`,
            options: [`solid`, `gradient`],
            optionTitles: [`Solid`, `Gradient`],
            displaySegmentedControl: !0,
          },
          color: { type: W.Color, defaultValue: `#000`, hidden: (e) => e.mode !== `solid` },
          startColor: { type: W.Color, defaultValue: `#000`, hidden: (e) => e.mode !== `gradient` },
          endColor: { type: W.Color, defaultValue: `#FFF`, hidden: (e) => e.mode !== `gradient` },
          angle: {
            type: W.Number,
            defaultValue: 180,
            min: -360,
            max: 360,
            unit: `°`,
            hidden: (e) => e.mode !== `gradient`,
          },
        },
      },
      prefix: { type: W.String, placeholder: `Prefix` },
      suffix: { type: W.String, placeholder: `Suffix` },
      decoration: {
        type: W.Enum,
        defaultValue: `none`,
        options: [`none`, `underline`, `line-through`],
        optionTitles: [`None`, `Underline`, `Strikethrough`],
      },
      balance: { type: W.Boolean, defaultValue: !1 },
      userSelect: { type: W.Boolean, defaultValue: !0 },
      tag: {
        type: W.Enum,
        defaultValue: `p`,
        displaySegmentedControl: !0,
        options: [`h1`, `h2`, `h3`, `p`],
        optionTitles: [`H1`, `H2`, `H3`, `P`],
      },
      monospace: {
        type: W.Boolean,
        defaultValue: !1,
        description: `More components at [Framer University](https://frameruni.link/cc).`,
      },
    }));
});
function Ai(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi = e(() => {
    (v(),
      B(),
      A(),
      d(),
      ki(),
      fe(),
      (ji = R(Oi)),
      (Mi = re(Oi)),
      (Ni = [`cOPACVR19`, `tPIE3GntU`]),
      (Pi = `framer-I9tjZ`),
      (Fi = { cOPACVR19: `framer-v-s934n9`, tPIE3GntU: `framer-v-9zub2s` }),
      (Ii = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Li = ({ value: e, children: t }) => {
        let n = h(T),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(T.Provider, { value: i, children: t });
      }),
      (Ri = { Desktop: `cOPACVR19`, Mobile: `tPIE3GntU` }),
      (zi = C.create(a)),
      (Bi = {}),
      (Vi = ({
        border: e,
        decimals: t,
        end: n,
        height: r,
        id: i,
        prefix: a,
        suffix: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        CewSTn9J7: s ?? l.CewSTn9J7 ?? `Transactions managed`,
        eGHZh27YN: a ?? l.eGHZh27YN ?? `$`,
        ew0Bf3mzC: o ?? l.ew0Bf3mzC ?? `M+`,
        gPPCA9TeG: e ??
          l.gPPCA9TeG ?? {
            borderBottomWidth: 0,
            borderColor: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05)) /* {"name":"W5"} */`,
            borderLeftWidth: 0,
            borderRightWidth: 1,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
        hiasu73t5: Bi[t] ?? t ?? l.hiasu73t5 ?? 0,
        mrabgVCuf: n ?? l.mrabgVCuf ?? 25,
        variant: Ri[l.variant] ?? l.variant ?? `cOPACVR19`,
      })),
      (Hi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ui = L(
        f(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = x(),
            { activeLocale: o, setLocale: s } = V();
          U();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              gPPCA9TeG: f,
              mrabgVCuf: p,
              eGHZh27YN: h,
              ew0Bf3mzC: v,
              CewSTn9J7: y,
              hiasu73t5: b,
              ...S
            } = Vi(e),
            {
              baseVariant: w,
              classNames: ee,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: O,
              setGestureState: A,
              setVariant: j,
              variants: M,
            } = K({
              cycleOrder: Ni,
              defaultVariant: `cOPACVR19`,
              ref: r,
              variant: d,
              variantClassNames: Fi,
            }),
            N = Hi(e, M),
            te = F(Pi, Y);
          return m(k, {
            id: u ?? i,
            children: m(zi, {
              animate: M,
              initial: !1,
              children: m(Li, {
                value: Ii,
                children: _(C.div, {
                  ...S,
                  ...E,
                  className: F(te, `framer-s934n9`, l, ee),
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  layoutDependency: N,
                  layoutId: `cOPACVR19`,
                  ref: r,
                  style: {
                    "--border-bottom-width": (f?.borderBottomWidth ?? f?.borderWidth) + `px`,
                    "--border-color": f?.borderColor,
                    "--border-left-width": (f?.borderLeftWidth ?? f?.borderWidth) + `px`,
                    "--border-right-width": (f?.borderRightWidth ?? f?.borderWidth) + `px`,
                    "--border-style": f?.borderStyle,
                    "--border-top-width": (f?.borderTopWidth ?? f?.borderWidth) + `px`,
                    ...c,
                  },
                  ...Ai({ tPIE3GntU: { "data-framer-name": `Mobile` } }, w, D),
                  children: [
                    m(se, {
                      children: m(P, {
                        className: `framer-jzo14d-container`,
                        isModuleExternal: !0,
                        layoutDependency: N,
                        layoutId: `fObB_EsQI-container`,
                        nodeId: `fObB_EsQI`,
                        rendersWithMotion: !0,
                        scopeId: `xjcOUhLOp`,
                        children: m(Oi, {
                          animation: {
                            replay: !1,
                            transition: {
                              damping: 60,
                              delay: 0.6,
                              mass: 1,
                              stiffness: 300,
                              type: `spring`,
                            },
                            trigger: `layerInView`,
                          },
                          balance: !1,
                          color: {
                            angle: 0,
                            color: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                            endColor: `var(--token-b7414fe1-9732-476d-bfbc-24a58490d0a7, rgb(236, 235, 216))`,
                            mode: `solid`,
                            startColor: `rgb(20, 0, 9)`,
                          },
                          commas: !0,
                          decimals: b,
                          decoration: `none`,
                          end: p,
                          font: {
                            fontFamily: `"Golos Text", "Golos Text Placeholder", sans-serif`,
                            fontFeatureSettings: `'tnum' on`,
                            fontSize: `70px`,
                            fontStyle: `normal`,
                            fontWeight: 400,
                            letterSpacing: `-0.055em`,
                            lineHeight: `1.1em`,
                          },
                          height: `100%`,
                          id: `fObB_EsQI`,
                          layoutId: `fObB_EsQI`,
                          mode: `default`,
                          monospace: !1,
                          prefix: h,
                          start: 0,
                          suffix: v,
                          tag: `p`,
                          transition: { bounce: 0, delay: 0, duration: 1, type: `spring` },
                          userSelect: !1,
                          value: 14.36,
                          width: `100%`,
                          ...Ai(
                            {
                              tPIE3GntU: {
                                font: {
                                  fontFamily: `"Golos Text", "Golos Text Placeholder", sans-serif`,
                                  fontFeatureSettings: `'tnum' on`,
                                  fontSize: `44px`,
                                  fontStyle: `normal`,
                                  fontWeight: 400,
                                  letterSpacing: `-0.03em`,
                                  lineHeight: `1.1em`,
                                },
                              },
                            },
                            w,
                            D
                          ),
                        }),
                      }),
                    }),
                    m(I, {
                      __fromCanvasComponent: !0,
                      children: m(a, {
                        children: m(C.p, {
                          className: `framer-styles-preset-1xheykw`,
                          "data-styles-preset": `vz9muakNv`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                          },
                          children: `Transactions managed`,
                        }),
                      }),
                      className: `framer-1yl1a90`,
                      fonts: [`Inter`],
                      layoutDependency: N,
                      layoutId: `eWzz6nsb9`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(255, 230, 0)`,
                        "--framer-link-text-decoration": `underline`,
                        opacity: 0.7,
                      },
                      text: y,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-I9tjZ.framer-wkbxea, .framer-I9tjZ .framer-wkbxea { display: block; }`,
          `.framer-I9tjZ.framer-s934n9 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: center; overflow: visible; padding: 85px 40px 85px 40px; position: relative; width: 280px; }`,
          `.framer-I9tjZ .framer-jzo14d-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-I9tjZ .framer-1yl1a90 { --framer-text-wrap-override: none; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-I9tjZ.framer-v-9zub2s.framer-s934n9 { gap: 4px; padding: 50px 26px 50px 26px; }`,
          ...J,
          `.framer-I9tjZ[data-border="true"]::after, .framer-I9tjZ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-I9tjZ`
      )),
      (Ui.displayName = `Stat`),
      (Ui.defaultProps = { height: 279, width: 280 }),
      H(Ui, {
        variant: {
          options: [`cOPACVR19`, `tPIE3GntU`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: W.Enum,
        },
        gPPCA9TeG: {
          defaultValue: {
            borderBottomWidth: 0,
            borderColor: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05)) /* {"name":"W5"} */`,
            borderLeftWidth: 0,
            borderRightWidth: 1,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
          title: `Border`,
          type: W.Border,
        },
        mrabgVCuf: { defaultValue: 25, title: `End`, type: W.Number },
        onmrabgVCufChange: { changes: `mrabgVCuf`, type: W.ChangeHandler },
        eGHZh27YN: { defaultValue: `$`, placeholder: `Prefix`, title: `Prefix`, type: W.String },
        oneGHZh27YNChange: { changes: `eGHZh27YN`, type: W.ChangeHandler },
        ew0Bf3mzC: { defaultValue: `M+`, placeholder: `Suffix`, title: `Suffix`, type: W.String },
        onew0Bf3mzCChange: { changes: `ew0Bf3mzC`, type: W.ChangeHandler },
        CewSTn9J7: {
          defaultValue: `Transactions managed`,
          displayTextArea: !1,
          title: `Title`,
          type: W.String,
        },
        onCewSTn9J7Change: { changes: `CewSTn9J7`, type: W.ChangeHandler },
        hiasu73t5: Mi?.decimals && {
          ...Mi.decimals,
          defaultValue: 0,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Decimals`,
        },
        onhiasu73t5Change: { changes: `hiasu73t5`, type: W.ChangeHandler },
      }),
      j(
        Ui,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Golos Text`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Golos Text`,
                url: `../../assets/fonts/q5uXsoe9Lv5t7Meb31EcOR9UdVTNs822plVRRQ5ZEr8zXcyx.woff2`,
                weight: `400`,
              },
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
            ],
          },
          ...ji,
          ...z(pe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i = e(() => {
    (v(),
      B(),
      A(),
      d(),
      xe(),
      (Gi = `framer-lyYzx`),
      (Ki = { q0w6OglkK: `framer-v-w8ie69` }),
      (qi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ji = ({ value: e, children: t }) => {
        let n = h(T),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(T.Provider, { value: i, children: t });
      }),
      (Yi = C.create(a)),
      (Xi = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Zi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Qi = L(
        f(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = x(),
            { activeLocale: o, setLocale: s } = V(),
            c = U(),
            { style: l, className: u, layoutId: d, variant: f, ...p } = Xi(e),
            {
              baseVariant: h,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: S,
              isLoading: w,
              setGestureState: ee,
              setVariant: T,
              variants: E,
            } = K({ defaultVariant: `q0w6OglkK`, ref: r, variant: f, variantClassNames: Ki }),
            D = Zi(e, E),
            O = F(Gi, we);
          return m(k, {
            id: d ?? i,
            children: m(Yi, {
              animate: E,
              initial: !1,
              children: m(Ji, {
                value: qi,
                children: _(C.div, {
                  ...p,
                  ...b,
                  className: F(O, `framer-w8ie69`, u, v),
                  "data-framer-name": `Main`,
                  layoutDependency: D,
                  layoutId: `q0w6OglkK`,
                  ref: r,
                  style: { ...l },
                  children: [
                    _(C.div, {
                      className: `framer-1iq4k67`,
                      "data-framer-name": `Face wrapper`,
                      layoutDependency: D,
                      layoutId: `XZxBgR8i7`,
                      children: [
                        m(G, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 1200,
                            intrinsicWidth: 900,
                            loading: ne((c?.y || 0) + (0 + ((c?.height || 44) - 0 - 40) / 2) + 0),
                            pixelHeight: 1200,
                            pixelWidth: 900,
                            positionX: `center`,
                            positionY: `top`,
                            sizes: `42px`,
                            src: `../../assets/images/ni7x1t3BKrCCMNpwm6Mzqk95d4-432e69.png`,
                            srcSet: `../../assets/images/ni7x1t3BKrCCMNpwm6Mzqk95d4.png 768w,../../assets/images/ni7x1t3BKrCCMNpwm6Mzqk95d4-432e69.png 900w`,
                          },
                          className: `framer-1sva497`,
                          "data-border": !0,
                          "data-framer-name": `Avatar Image`,
                          layoutDependency: D,
                          layoutId: `jdPpDsSkH`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            borderBottomLeftRadius: 100,
                            borderBottomRightRadius: 100,
                            borderTopLeftRadius: 100,
                            borderTopRightRadius: 100,
                          },
                        }),
                        m(G, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 1200,
                            intrinsicWidth: 900,
                            loading: ne((c?.y || 0) + (0 + ((c?.height || 44) - 0 - 40) / 2) + 0),
                            pixelHeight: 1200,
                            pixelWidth: 900,
                            positionX: `center`,
                            positionY: `top`,
                            sizes: `42px`,
                            src: `../../assets/images/703dfSdVGvJN5i0CezuHNnBqrE-e03ccd.png`,
                            srcSet: `../../assets/images/703dfSdVGvJN5i0CezuHNnBqrE.png 768w,../../assets/images/703dfSdVGvJN5i0CezuHNnBqrE-e03ccd.png 900w`,
                          },
                          className: `framer-1p71gdv`,
                          "data-border": !0,
                          "data-framer-name": `Avatar Image`,
                          layoutDependency: D,
                          layoutId: `Qlwqd3JqU`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            borderBottomLeftRadius: 100,
                            borderBottomRightRadius: 100,
                            borderTopLeftRadius: 100,
                            borderTopRightRadius: 100,
                          },
                        }),
                        m(G, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 1765,
                            intrinsicWidth: 1810,
                            loading: ne((c?.y || 0) + (0 + ((c?.height || 44) - 0 - 40) / 2) + 0),
                            pixelHeight: 1765,
                            pixelWidth: 1810,
                            positionX: `center`,
                            positionY: `top`,
                            sizes: `42px`,
                            src: `../../assets/images/MdJVZG9qGloNi00reBkrHmsQg-616fba.webp`,
                            srcSet: `../../assets/images/MdJVZG9qGloNi00reBkrHmsQg.webp 512w,../../assets/images/MdJVZG9qGloNi00reBkrHmsQg-70bb3f.webp 1024w,../../assets/images/MdJVZG9qGloNi00reBkrHmsQg-616fba.webp 1810w`,
                          },
                          className: `framer-tlaobw`,
                          "data-border": !0,
                          "data-framer-name": `Avatar Image`,
                          layoutDependency: D,
                          layoutId: `swP8ij3ue`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            borderBottomLeftRadius: 100,
                            borderBottomRightRadius: 100,
                            borderTopLeftRadius: 100,
                            borderTopRightRadius: 100,
                          },
                        }),
                      ],
                    }),
                    _(C.div, {
                      className: `framer-1sx8zpn`,
                      "data-framer-name": `Review`,
                      layoutDependency: D,
                      layoutId: `TIOw4QGL_`,
                      children: [
                        m(C.div, {
                          className: `framer-i04e7l`,
                          "data-framer-name": `Rating`,
                          layoutDependency: D,
                          layoutId: `cxh6Ue6IO`,
                          children: m(I, {
                            __fromCanvasComponent: !0,
                            children: m(a, {
                              children: m(C.p, {
                                className: `framer-styles-preset-pm9ab4`,
                                "data-styles-preset": `Uupbhq6cF`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88)))`,
                                },
                                children: `Trusted by`,
                              }),
                            }),
                            className: `framer-1esmclf`,
                            "data-framer-name": `4.8`,
                            fonts: [`Inter`],
                            layoutDependency: D,
                            layoutId: `IdyEH4aIg`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                              "--framer-paragraph-spacing": `0px`,
                              opacity: 0.5,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        m(C.div, {
                          className: `framer-1oxy748`,
                          "data-framer-name": `Number of Reviews`,
                          layoutDependency: D,
                          layoutId: `QGGL7S2aN`,
                          children: m(I, {
                            __fromCanvasComponent: !0,
                            children: m(a, {
                              children: m(C.p, {
                                className: `framer-styles-preset-pm9ab4`,
                                "data-styles-preset": `Uupbhq6cF`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88)))`,
                                },
                                children: `Guiding students across India`,
                              }),
                            }),
                            className: `framer-ucsa3e`,
                            "data-framer-name": `Reviews on`,
                            fonts: [`Inter`],
                            layoutDependency: D,
                            layoutId: `jte30HY0Z`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                              "--framer-paragraph-spacing": `0px`,
                              opacity: 0.75,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-lyYzx.framer-136b703, .framer-lyYzx .framer-136b703 { display: block; }`,
          `.framer-lyYzx.framer-w8ie69 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-lyYzx .framer-1iq4k67 { flex: none; gap: 0px; height: 40px; overflow: visible; position: relative; width: 99px; }`,
          `.framer-lyYzx .framer-1sva497 { aspect-ratio: 1 / 1; bottom: -2px; flex: none; left: 0px; position: absolute; top: 0px; width: auto; }`,
          `.framer-lyYzx .framer-1p71gdv { aspect-ratio: 1 / 1; bottom: -2px; flex: none; left: 30px; position: absolute; top: 0px; width: auto; }`,
          `.framer-lyYzx .framer-tlaobw { aspect-ratio: 1 / 1; bottom: -2px; flex: none; position: absolute; right: 0px; top: 0px; width: auto; }`,
          `.framer-lyYzx .framer-1sx8zpn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-lyYzx .framer-i04e7l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-lyYzx .framer-1esmclf, .framer-lyYzx .framer-ucsa3e { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-lyYzx .framer-1oxy748 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          ...Se,
          `.framer-lyYzx[data-border="true"]::after, .framer-lyYzx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-lyYzx`
      )),
      (Qi.displayName = `Social Proof`),
      (Qi.defaultProps = { height: 44, width: 225 }),
      j(
        Qi,
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
            ],
          },
          ...z(Ce),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export {
  at as A,
  nn as C,
  Ot as D,
  Yt as E,
  Vt as O,
  fn as S,
  Jt as T,
  Dn as _,
  Ei as a,
  bn as b,
  fi as c,
  xr as d,
  Sr as f,
  Jn as g,
  qn as h,
  Wi as i,
  Dt as k,
  Nr as l,
  ur as m,
  $i as n,
  Di as o,
  lr as p,
  Ui as r,
  di as s,
  Qi as t,
  Pr as u,
  On as v,
  rn as w,
  dn as x,
  yn as y,
};
//# sourceMappingURL=Zu_uDnDlu.Bm7HjSLm.mjs.map
