import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  C as n,
  F as r,
  I as i,
  M as a,
  N as o,
  P as s,
  R as c,
  T as l,
  _ as u,
  a as d,
  c as f,
  g as p,
  i as m,
  j as h,
  k as g,
  l as _,
  m as v,
  n as ee,
  o as y,
  p as b,
  r as x,
  s as te,
  t as ne,
  u as S,
  v as C,
  y as re,
  z as w,
} from "./react.CWkcPvHD.mjs";
import { T, a as E, r as D, t as O } from "./motion.UJ_SjFSS.mjs";
import {
  A as k,
  C as ie,
  Ct as ae,
  Dt as oe,
  E as se,
  L as A,
  Mt as ce,
  O as j,
  Ot as le,
  P as M,
  Q as N,
  St as ue,
  T as P,
  Tt as F,
  U as I,
  W as L,
  X as de,
  Y as fe,
  Z as R,
  _t as pe,
  a as me,
  at as he,
  b as ge,
  c as _e,
  ct as ve,
  d as ye,
  dt as be,
  et as xe,
  f as Se,
  ft as Ce,
  g as we,
  h as Te,
  ht as Ee,
  i as z,
  it as De,
  j as B,
  jt as Oe,
  kt as ke,
  l as Ae,
  lt as je,
  m as Me,
  n as Ne,
  nt as Pe,
  o as V,
  p as Fe,
  pt as Ie,
  rt as Le,
  s as Re,
  st as ze,
  v as Be,
  w as H,
  wt as Ve,
  x as He,
  xt as Ue,
  y as We,
  yt as Ge,
} from "./framer.B5VSaEF1.mjs";
import {
  a as Ke,
  c as qe,
  d as Je,
  f as Ye,
  g as Xe,
  h as Ze,
  l as Qe,
  m as $e,
  o as et,
  p as tt,
  s as nt,
  u as rt,
} from "./shared-lib.Dlb4YuQV.mjs";
import { n as it, t as at } from "./erS2dThW9.BrvLZ0Oe.mjs";
import { i as ot, n as st, r as ct, t as lt } from "./p2FU4QOGa.BxVaMVmz.mjs";
import { i as ut, n as dt, r as ft, t as pt } from "./Uupbhq6cF.BHFHcyu8.mjs";
import { i as mt, t as ht } from "./WRyp7sdxk.DoPFXHs7.mjs";
import { i as gt, n as _t, r as vt, t as yt } from "./e_qtYqPa5.BlW52RJ1.mjs";
import { i as bt, n as xt, r as St, t as Ct } from "./mdo3XsYBf.CjV_Nezm.mjs";
function wt(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
var Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt = e(() => {
    (c(),
      (Tt = class {
        constructor() {
          ((this.isRunning = !1),
            (this.value = 0),
            (this.from = 0),
            (this.to = 0),
            (this.duration = 0),
            (this.currentTime = 0));
        }
        advance(e) {
          var t;
          if (!this.isRunning) return;
          let n = !1;
          if (this.duration && this.easing) {
            this.currentTime += e;
            let t = wt(0, this.currentTime / this.duration, 1);
            n = t >= 1;
            let r = n ? 1 : this.easing(t);
            this.value = this.from + (this.to - this.from) * r;
          } else
            this.lerp
              ? ((this.value = (function (e, t, n, r) {
                  return (function (e, t, n) {
                    return (1 - n) * e + n * t;
                  })(e, t, 1 - Math.exp(-n * r));
                })(this.value, this.to, 60 * this.lerp, e)),
                Math.round(this.value) === this.to && ((this.value = this.to), (n = !0)))
              : ((this.value = this.to), (n = !0));
          (n && this.stop(), (t = this.onUpdate) == null || t.call(this, this.value, n));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o }) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (Et = class {
        constructor({ wrapper: e, content: n, autoResize: r = !0, debounce: i = 250 } = {}) {
          ((this.width = 0),
            (this.height = 0),
            (this.scrollWidth = 0),
            (this.scrollHeight = 0),
            (this.resize = () => {
              (this.onWrapperResize(), this.onContentResize());
            }),
            (this.onWrapperResize = () => {
              this.wrapper === t
                ? ((this.width = t.innerWidth), (this.height = t.innerHeight))
                : this.wrapper instanceof HTMLElement &&
                  ((this.width = this.wrapper.clientWidth),
                  (this.height = this.wrapper.clientHeight));
            }),
            (this.onContentResize = () => {
              this.wrapper === t
                ? ((this.scrollHeight = this.content.scrollHeight),
                  (this.scrollWidth = this.content.scrollWidth))
                : this.wrapper instanceof HTMLElement &&
                  ((this.scrollHeight = this.wrapper.scrollHeight),
                  (this.scrollWidth = this.wrapper.scrollWidth));
            }),
            (this.wrapper = e),
            (this.content = n),
            r &&
              ((this.debouncedResize = (function (e, t) {
                let n;
                return function () {
                  let r = arguments,
                    i = this;
                  (clearTimeout(n),
                    (n = setTimeout(function () {
                      e.apply(i, r);
                    }, t)));
                };
              })(this.resize, i)),
              this.wrapper === t
                ? t.addEventListener(`resize`, this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          var e, n;
          ((e = this.wrapperResizeObserver) == null || e.disconnect(),
            (n = this.contentResizeObserver) == null || n.disconnect(),
            t.removeEventListener(`resize`, this.debouncedResize, !1));
        }
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
      }),
      (Dt = class {
        constructor() {
          this.events = {};
        }
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e](...t);
        }
        on(e, t) {
          var n;
          return (
            ((n = this.events[e]) != null && n.push(t)) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (Ot = 100 / 6),
      (kt = class {
        constructor(e, { wheelMultiplier: n = 1, touchMultiplier: r = 1 }) {
          ((this.lastDelta = { x: 0, y: 0 }),
            (this.windowWidth = 0),
            (this.windowHeight = 0),
            (this.onTouchStart = (e) => {
              let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
              ((this.touchStart.x = t),
                (this.touchStart.y = n),
                (this.lastDelta = { x: 0, y: 0 }),
                this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
            }),
            (this.onTouchMove = (e) => {
              let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
                r = -(t - (this.touchStart?.x ?? 0)) * this.touchMultiplier,
                i = -(n - (this.touchStart?.y ?? 0)) * this.touchMultiplier;
              ((this.touchStart.x = t),
                (this.touchStart.y = n),
                (this.lastDelta = { x: r, y: i }),
                this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
            }),
            (this.onTouchEnd = (e) => {
              this.emitter.emit(`scroll`, {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: e,
              });
            }),
            (this.onWheel = (e) => {
              let { deltaX: t, deltaY: n, deltaMode: r } = e;
              ((t *= r === 1 ? Ot : r === 2 ? this.windowWidth : 1),
                (n *= r === 1 ? Ot : r === 2 ? this.windowHeight : 1),
                (t *= this.wheelMultiplier),
                (n *= this.wheelMultiplier),
                this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
            }),
            (this.onWindowResize = () => {
              ((this.windowWidth = t.innerWidth), (this.windowHeight = t.innerHeight));
            }),
            (this.element = e),
            (this.wheelMultiplier = n),
            (this.touchMultiplier = r),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new Dt()),
            t.addEventListener(`resize`, this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, { passive: !1 }),
            this.element.addEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
            this.element.addEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
            this.element.addEventListener(`touchend`, this.onTouchEnd, { passive: !1 }));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            t.removeEventListener(`resize`, this.onWindowResize, !1),
            this.element.removeEventListener(`wheel`, this.onWheel),
            this.element.removeEventListener(`touchstart`, this.onTouchStart),
            this.element.removeEventListener(`touchmove`, this.onTouchMove),
            this.element.removeEventListener(`touchend`, this.onTouchEnd));
        }
      }),
      (At = class {
        constructor({
          wrapper: e = t,
          content: n = document.documentElement,
          wheelEventsTarget: r = e,
          eventsTarget: i = r,
          smoothWheel: a = !0,
          syncTouch: o = !1,
          syncTouchLerp: s = 0.075,
          touchInertiaMultiplier: c = 35,
          duration: l,
          easing: u = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
          lerp: d = 0.1,
          infinite: f = !1,
          orientation: p = `vertical`,
          gestureOrientation: m = `vertical`,
          touchMultiplier: h = 1,
          wheelMultiplier: g = 1,
          autoResize: _ = !0,
          prevent: v,
          virtualScroll: ee,
          __experimental__naiveDimensions: y = !1,
        } = {}) {
          ((this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.userData = {}),
            (this.lastVelocity = 0),
            (this.velocity = 0),
            (this.direction = 0),
            (this.onPointerDown = (e) => {
              e.button === 1 && this.reset();
            }),
            (this.onVirtualScroll = (e) => {
              if (
                typeof this.options.virtualScroll == `function` &&
                !1 === this.options.virtualScroll(e)
              )
                return;
              let { deltaX: t, deltaY: n, event: r } = e;
              if (
                (this.emitter.emit(`virtual-scroll`, { deltaX: t, deltaY: n, event: r }), r.ctrlKey)
              )
                return;
              let i = r.type.includes(`touch`),
                a = r.type.includes(`wheel`);
              if (
                ((this.isTouching = r.type === `touchstart` || r.type === `touchmove`),
                this.options.syncTouch &&
                  i &&
                  r.type === `touchstart` &&
                  !this.isStopped &&
                  !this.isLocked)
              )
                return void this.reset();
              let o = t === 0 && n === 0,
                s =
                  (this.options.gestureOrientation === `vertical` && n === 0) ||
                  (this.options.gestureOrientation === `horizontal` && t === 0);
              if (o || s) return;
              let c = r.composedPath();
              c = c.slice(0, c.indexOf(this.rootElement));
              let l = this.options.prevent;
              if (
                c.find(
                  (e) =>
                    e instanceof Element &&
                    ((typeof l == `function` && l?.(e)) ||
                      e.hasAttribute?.call(e, `data-lenis-prevent`) ||
                      (i && e.hasAttribute?.call(e, `data-lenis-prevent-touch`)) ||
                      (a && e.hasAttribute?.call(e, `data-lenis-prevent-wheel`)) ||
                      (e.classList?.contains(`lenis`) && !e.classList?.contains(`lenis-stopped`)))
                )
              )
                return;
              if (this.isStopped || this.isLocked) return void r.preventDefault();
              if (!((this.options.syncTouch && i) || (this.options.smoothWheel && a)))
                return ((this.isScrolling = `native`), void this.animate.stop());
              r.preventDefault();
              let u = n;
              this.options.gestureOrientation === `both`
                ? (u = Math.abs(n) > Math.abs(t) ? n : t)
                : this.options.gestureOrientation === `horizontal` && (u = t);
              let d = i && this.options.syncTouch,
                f = i && r.type === `touchend` && Math.abs(u) > 5;
              (f && (u = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + u,
                  Object.assign(
                    { programmatic: !1 },
                    d
                      ? { lerp: f ? this.options.syncTouchLerp : 1 }
                      : {
                          lerp: this.options.lerp,
                          duration: this.options.duration,
                          easing: this.options.easing,
                        }
                  )
                ));
            }),
            (this.onNativeScroll = () => {
              if (
                (clearTimeout(this.__resetVelocityTimeout),
                delete this.__resetVelocityTimeout,
                this.__preventNextNativeScrollEvent)
              )
                delete this.__preventNextNativeScrollEvent;
              else if (!1 === this.isScrolling || this.isScrolling === `native`) {
                let e = this.animatedScroll;
                ((this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = this.animatedScroll - e),
                  (this.direction = Math.sign(this.animatedScroll - e)),
                  (this.isScrolling = `native`),
                  this.emit(),
                  this.velocity !== 0 &&
                    (this.__resetVelocityTimeout = setTimeout(() => {
                      ((this.lastVelocity = this.velocity),
                        (this.velocity = 0),
                        (this.isScrolling = !1),
                        this.emit());
                    }, 400)));
              }
            }),
            (t.lenisVersion = `1.1.9`),
            (e && e !== document.documentElement && e !== document.body) || (e = t),
            (this.options = {
              wrapper: e,
              content: n,
              wheelEventsTarget: r,
              eventsTarget: i,
              smoothWheel: a,
              syncTouch: o,
              syncTouchLerp: s,
              touchInertiaMultiplier: c,
              duration: l,
              easing: u,
              lerp: d,
              infinite: f,
              gestureOrientation: m,
              orientation: p,
              touchMultiplier: h,
              wheelMultiplier: g,
              autoResize: _,
              prevent: v,
              virtualScroll: ee,
              __experimental__naiveDimensions: y,
            }),
            (this.animate = new Tt()),
            (this.emitter = new Dt()),
            (this.dimensions = new Et({ wrapper: e, content: n, autoResize: _ })),
            this.updateClassName(),
            (this.userData = {}),
            (this.time = 0),
            (this.velocity = this.lastVelocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll, !1),
            this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown, !1),
            (this.virtualScroll = new kt(i, { touchMultiplier: h, wheelMultiplier: g })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll, !1),
            this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown, !1),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName());
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        setScroll(e) {
          this.isHorizontal ? (this.rootElement.scrollLeft = e) : (this.rootElement.scrollTop = e);
        }
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit(`scroll`, this);
        }
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped || ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(e) {
          let t = e - (this.time || e);
          ((this.time = e), this.animate.advance(0.001 * t));
        }
        scrollTo(
          e,
          {
            offset: n = 0,
            immediate: r = !1,
            lock: i = !1,
            duration: a = this.options.duration,
            easing: o = this.options.easing,
            lerp: s = this.options.lerp,
            onStart: c,
            onComplete: l,
            force: u = !1,
            programmatic: d = !0,
            userData: f = {},
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || u) {
            if (typeof e == `string` && [`top`, `left`, `start`].includes(e)) e = 0;
            else if (typeof e == `string` && [`bottom`, `right`, `end`].includes(e)) e = this.limit;
            else {
              let r;
              if (
                (typeof e == `string`
                  ? (r = document.querySelector(e))
                  : e instanceof HTMLElement && e != null && e.nodeType && (r = e),
                r)
              ) {
                if (this.options.wrapper !== t) {
                  let e = this.rootElement.getBoundingClientRect();
                  n -= this.isHorizontal ? e.left : e.top;
                }
                let i = r.getBoundingClientRect();
                e = (this.isHorizontal ? i.left : i.top) + this.animatedScroll;
              }
            }
            if (
              typeof e == `number` &&
              ((e += n),
              (e = Math.round(e)),
              this.options.infinite
                ? d && (this.targetScroll = this.animatedScroll = this.scroll)
                : (e = wt(0, e, this.limit)),
              e !== this.targetScroll)
            ) {
              if (((this.userData = f), r))
                return (
                  (this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  this.preventNextNativeScrollEvent(),
                  this.emit(),
                  l?.(this),
                  void (this.userData = {})
                );
              (d || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: a,
                  easing: o,
                  lerp: s,
                  onStart: () => {
                    (i && (this.isLocked = !0), (this.isScrolling = `smooth`), c?.(this));
                  },
                  onUpdate: (e, t) => {
                    ((this.isScrolling = `smooth`),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      d && (this.targetScroll = e),
                      t || this.emit(),
                      t &&
                        (this.reset(),
                        this.emit(),
                        l?.(this),
                        (this.userData = {}),
                        this.preventNextNativeScrollEvent()));
                  },
                }));
            }
          }
        }
        preventNextNativeScrollEvent() {
          ((this.__preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              delete this.__preventNextNativeScrollEvent;
            }));
        }
        get rootElement() {
          return this.options.wrapper === t ? document.documentElement : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite
            ? (function (e, t) {
                return ((e % t) + t) % t;
              })(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(e) {
          this.__isScrolling !== e && ((this.__isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(e) {
          this.__isStopped !== e && ((this.__isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(e) {
          this.__isLocked !== e && ((this.__isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, ``)
            .trim();
        }
      }));
  });
function Mt(e) {
  let { intensity: n } = e,
    r = g(null);
  return (
    s(() => {
      if (r.current)
        try {
          r.current.scrollTo(0, { immediate: !0 });
        } catch (e) {
          console.error(`Error scrolling to top:`, e);
        }
    }, [r]),
    s(() => {
      let e = () => {
        try {
          let e = document.querySelector(`[data-frameruni-stop-scroll]`),
            t = document.documentElement,
            n = t && t.style && t.style.overflow === `hidden`;
          r.current && (e || n ? r.current.stop() : r.current.start());
        } catch (e) {
          console.error(`Error in checkForStopScroll:`, e);
        }
      };
      e();
      let t, n;
      try {
        ((t = new MutationObserver(e)),
          (n = new MutationObserver(e)),
          document &&
            document.documentElement &&
            (t.observe(document.documentElement, {
              childList: !0,
              subtree: !0,
              attributes: !0,
              attributeFilter: [`data-frameruni-stop-scroll`],
            }),
            n.observe(document.documentElement, { attributes: !0, attributeFilter: [`style`] })));
      } catch (e) {
        console.error(`Error setting up observers:`, e);
      }
      return () => {
        try {
          (t && t.disconnect(), n && n.disconnect());
        } catch (e) {
          console.error(`Error disconnecting observers:`, e);
        }
      };
    }, []),
    s(() => {
      try {
        if (!document) return;
        let e = document.getElementsByTagName(`*`);
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          if (r)
            try {
              let e = t.getComputedStyle(r);
              e &&
                e.getPropertyValue(`overflow`) === `auto` &&
                r.setAttribute(`data-lenis-prevent`, `true`);
            } catch (e) {
              console.error(`Error getting computed style:`, e);
            }
        }
      } catch (e) {
        console.error(`Error in overflow detection:`, e);
      }
    }, []),
    s(() => {
      try {
        if (typeof At != `function`) {
          console.error(`Lenis is not available`);
          return;
        }
        r.current = new At({ duration: (n || 10) / 10 });
        let e = (t) => {
            if (r.current)
              try {
                (r.current.raf(t), requestAnimationFrame(e));
              } catch (e) {
                console.error(`Error in animation frame:`, e);
              }
          },
          t = requestAnimationFrame(e);
        return () => {
          if ((cancelAnimationFrame(t), r.current))
            try {
              (r.current.destroy(), (r.current = null));
            } catch (e) {
              console.error(`Error destroying Lenis:`, e);
            }
        };
      } catch (e) {
        return (console.error(`Error initializing Lenis:`, e), () => {});
      }
    }, [n]),
    s(() => {
      try {
        if (!document || !r.current) return;
        let e = Array.from(document.querySelectorAll(`a[href]`) || [])
            .filter((e) => {
              if (!e) return !1;
              let n = e;
              if (!n.href) return !1;
              let r =
                  n.href.startsWith(t.location.origin) ||
                  n.href.startsWith(`./`) ||
                  n.href.startsWith(`/`),
                i = n.href.includes(`#`);
              return r && i;
            })
            .map((e) => {
              try {
                let n = e,
                  r = n.href.includes(`#`) ? `#${n.href.split(`#`).pop()}` : ``,
                  i = r ? decodeURIComponent(r) : ``,
                  a = 0;
                try {
                  if (i) {
                    let e = document.querySelector(i);
                    if (e) {
                      let n = t.getComputedStyle(e).scrollMarginTop;
                      a = (n && parseInt(n)) || 0;
                    }
                  }
                } catch (e) {
                  console.error(`Error finding target element:`, e);
                }
                return { href: r, scrollMargin: a, anchorElement: n };
              } catch (e) {
                return (console.error(`Error processing anchor:`, e), null);
              }
            })
            .filter(Boolean),
          n = (e, t, n) => {
            try {
              (e && e.preventDefault && e.preventDefault(),
                r.current && t && r.current.scrollTo(t, { offset: -(n || 0) }));
            } catch (e) {
              console.error(`Error in anchor click handler:`, e);
            }
          },
          i = e.map(
            ({ href: e, scrollMargin: t }) =>
              (r) =>
                n(r, e, t)
          );
        return (
          e.forEach(({ anchorElement: e }, t) => {
            e && i[t] && e.addEventListener(`click`, i[t]);
          }),
          () => {
            e.forEach(({ anchorElement: e }, t) => {
              e && i[t] && e.removeEventListener(`click`, i[t]);
            });
          }
        );
      } catch (e) {
        return (console.error(`Error setting up anchor links:`, e), () => {});
      }
    }, [r]),
    f(`div`, { style: e.style })
  );
}
var Nt,
  Pt = e(() => {
    (c(),
      y(),
      R(),
      jt(),
      l(),
      (Nt = F(
        Mt,
        [
          `html.lenis { height: auto; }`,
          `.lenis.lenis-smooth { scroll-behavior: auto !important; }`,
          `.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`,
          `.lenis.lenis-stopped { overflow: hidden; }`,
          `.lenis.lenis-scrolling iframe { pointer-events: none; }`,
        ],
        ``
      )),
      (Nt.displayName = `Smooth Scroll`),
      B(Nt, {
        intensity: {
          title: `Intensity`,
          type: V.Number,
          defaultValue: 10,
          min: 0,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  });
function Ft(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  U,
  Gt = e(() => {
    (y(),
      R(),
      O(),
      l(),
      (It = [`w57K1k4Fy`, `YaSkLMfOg`, `wkoWLqDZl`]),
      (Lt = `framer-UXcol`),
      (Rt = {
        w57K1k4Fy: `framer-v-6zej15`,
        wkoWLqDZl: `framer-v-4vk60g`,
        YaSkLMfOg: `framer-v-1bki9lt`,
      }),
      (zt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Bt = ({ value: e, children: t }) => {
        let n = h(E),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(E.Provider, { value: i, children: t });
      }),
      (Vt = { Desktop: `w57K1k4Fy`, Large: `wkoWLqDZl`, Mobile: `YaSkLMfOg` }),
      (Ht = T.create(r)),
      (Ut = ({ height: e, id: t, name1: n, textColor: r, width: i, ...a }) => ({
        ...a,
        qmJlrqWO3: n ?? a.qmJlrqWO3 ?? `CareerNova Education Services`,
        variant: Vt[a.variant] ?? a.variant ?? `w57K1k4Fy`,
        w2b1OKy6D:
          r ??
          a.w2b1OKy6D ??
          `var(--token-8b57468b-891a-4c69-9794-ea2945515f05, rgb(255, 255, 255))`,
      })),
      (Wt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (U = F(
        u(function (e, t) {
          let n = g(null),
            i = t ?? n,
            a = re(),
            { activeLocale: o, setLocale: s } = pe();
          je();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              qmJlrqWO3: p,
              w2b1OKy6D: m,
              ...h
            } = Ut(e),
            {
              baseVariant: v,
              classNames: ee,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: te,
              setGestureState: ne,
              setVariant: S,
              variants: C,
            } = Ve({
              cycleOrder: It,
              defaultVariant: `w57K1k4Fy`,
              ref: i,
              variant: d,
              variantClassNames: Rt,
            }),
            w = Wt(e, C),
            E = M(Lt);
          return f(D, {
            id: u ?? a,
            children: f(Ht, {
              animate: C,
              initial: !1,
              children: f(Bt, {
                value: zt,
                children: f(we, {
                  href: { webPageId: `augiA20Il` },
                  motionChild: !0,
                  nodeId: `w57K1k4Fy`,
                  openInNewTab: !1,
                  scopeId: `FxUqAmo0x`,
                  children: _(T.a, {
                    ...h,
                    ...b,
                    className: `${M(E, `framer-6zej15`, l, ee)} framer-6vmcbz`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: w,
                    layoutId: `w57K1k4Fy`,
                    ref: i,
                    style: { ...c },
                    ...Ft(
                      {
                        wkoWLqDZl: { "data-framer-name": `Large` },
                        YaSkLMfOg: { "data-framer-name": `Mobile` },
                      },
                      v,
                      x
                    ),
                    children: [
                      f("img", {
                        className: "career-nova-nav-logo",
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAB4CAYAAADsWiDaAACH6klEQVR42uy9d5xdVdU+/qy99znn3ju9JpMeQgoplFBCT0LvSpkRRBBQQbCgWEBUZgYREDuISFekzoBIBylJKAECSUglvU8yvd56zt57/f44504CgoKvgt/f+97PZz7JzCR3zuzznFWf9Szg/17/9/qYL2YWADDQ8/qs/tY3Prvr1z7OS/zfUf7f6+O+5s5tEABAmY5D9MCGU8KvNtPHfR/1f0f5f6+P+5oFgAHq6V41xs8lDwYUQHX2/yzf/70+AfQ1GoJgpHr3QH/bWOaghABmZvo/8P3f6z8Z7xERmNlUg1MTPaTcbPfcgyLXK/4PfB9yaB/2gY/5xP7vDvgaJDMo0/HX2THPVtpsN8z2t44Kv3cz/a+N+ZiZ6uqaRfvkFYS5wLx5jSYMT0BExP/kv1P0b8XMmfUCs4BZDQ0WDQ1obGhg/PP//7/gCQYBK5kI3Ldi/RkJKdHam4XnrjyZma8AyDCYCP8LzoqZqba2SaK2Vn7Q9+MxhUTcg+dKMHMBMw9b2d5e8+bGjUO3bNlSzswVzFzNzI7nSBTEPagP9QW1EvX1Iopr6H9riYUZxMzj0ou/n8y88x274k9HmC0PHsCcXXkaA8TcJD/q+/0/d4j1zGJlXR01NzebXb9ekPCQTGVr7nh47sQVm7ft3p82U/pTuQn9A8nq1s5eMkRDwFSUy/hsrAWDWTkuCjwPgUa7mxA9NWVFtrSwcHNRceHqqqqiNdP22mP15/Yd3Q6gRRDxro9zbW2tnDx5Mjc2Ntr/FcCrrxc4eYek/W4Lkluabino+MtXM4mpZuOyRRBb/yYLD77slZEH/fTw+nqjGhrqLdE/Pxf6f8mdNjfXDQKuMBHD+o2bh9721IJj12zoOKylrXvvtt7ecb3JoDSrgUxgkc35sBYQgmCNj/ATCYBApADlgAFIpSClggDgSAVXMlzkEBMBKkvjPdWl3rrKuJy3x5hRL1z+9c+/U1Rc0JYcSA9e38yZ9Wru3AZD/z9yzcwggIHmZgE0g+rCh70/+faX3c2P3Gp7lpKz2+f0prdepS2v3SbjQyfSxNpfNJaPOOlqIrI8p15hVoMlIvv/HPiYmRoAaiQiAAYACgviePCllXs/+uzcUza3dp+weXvnHn0pU5z0LXK+D2MMAGYJGAgJQSCQIcvEQhCR9IikhCLAIQaCHHSQAwcBG51jawysDtjoHNhaAkMCBDgOYvE4CuMuhlUVdw+vKFk0cmhV85e/+Pl5s/cduTqVzg4mcLVNTdRcW2v/X4sRo3BCYG4DzcVczJ49T7/v+zW289mv+m3zrlKpNcyxIhJjv9jfMv9hb828u710KmMm7TdbFu113o01e55bT0S9oYeAbLqknjBrCqNhBVPj1TYMrf9LwVfb1CSb60IrJwkYsDzyil83n/buhtYvbNqyY3p7vy9SOQ1rDMBslCQWggWByEaZK0MCYAgikAAkAAp8mCANm0uBcxkExgezAZMEIEFCgEgCUgBEEEJACMkgwcaStZYlWyaSEkWJGIZWlvhjh5a9vsfE8fc2XvH5lysdsSbQHLnlJtnUVGv/n7WGKgEOUjW5zr/th8zmOt219pgCu646M5BhlAyBrBhHquZIXvv8LdS38Gmksjl0tqeMV1IhR08/buuo/Y6+s2x87VNAYjERmfdbVSL8d5UY6utZNDYSAFhmjj88f9U+Dz469/w1W3vO2NqVLB1IZwHtQwrWkkhEKSwhisaYCJYIEgKwAWACsJ8C51LQuSSs9sFhygZJDlgoWClAQkVP4S65hJAhEAWBSAymwhCCwdIaa2HZSKE8lBTGMLq6bGD3MVWPnXzUwX8698SD5uQPfGZ9vZrb8N/rksO6HXHftucrhFRn6YG1w3T/5ipH8f4UpEd5KlfmyRQCn+A7ZcYtrZGibA+IghFA0Iq+dX9D+9IlYB2gs70HHW1dNuFmxPCRY2AKxwReSc2rBSUjX4VT8U4inlhDxeUDZWNP3EpElv57QFdHQLOJORJ/eOy1Yx57cckVy9bvmL29K4ucn4WSxgiSJIjJMpMFQGwhIGAFASQg2cDmMrDpHph0D2yQBawBhABLBxT6YYBUaO2IQnBBhAUCRBaPwvcLLSJARAh9vwAojCEjW8pMsNYwLLNUysPwygKMGV6+YObB03/XeOHJDxNR5r85LsyDL9m+ssbqbVcEvSv39Ls2TEC6rbIwZtxMug/9A0kIp0I7pSOFUglBSiFeVInCMZOQ3LIQzz70Agb6fJQWSjjKZwRpXeCmnOpSjeLyYaDC0ejWlQPFNVPXeFWTXhw+4agfAxTQp/6L19UJNDebmCfwx6cWzL7n6Te/t2L91uN3dGpY7bOrpBWQggWTZQsCQzAAtjAAWCiQNeB0N8xAJ0y2G9baEERSRgmGCuvpBCByrUwCJEQIXhJgARBE9AGACCxEZA/DcIgFRYYxBGe+Rh+CFWxA1gSaQEJUlRdhVEVi+ZGHTf/zzy793G07Y6Ba+f5M/b/QGioAZZmWZ2cNtC47zm9dcaxKrx2e6WmBL4RxvAJJsBg261t487m5+Nvd98MrAUaUCVtdxqJkxEQ4FRPbh0ycOq9s2J7zEhWjljhlBy4FkCGi4FNPOCIXawnANs5O+kHjg997bfGW81t6MhQEGRtXAgJCWBBABCILyxpsCUQOrLBANgnb14og2QEOAoAQgkgIEAmwEJE1U4CQYbVZCIAkQAKCwn9nQ0yCSABMsCCQkIOVVY7ARlKACWDLIUjFe2v0NrxUMGCNBgNWlhcXYszQ8jUz9x9/y6++d+4dRJQEQLVNTSIf1/63WMC5c+fKjo7fc13drg8HgdmW+10vn9q54vHLddv88SYXWOFKUTrhGMx5fgk2vPYkKis9W1OVEDV7H98xYsap15WOOe0+ItkO2A+0tJ8i+OoF0GiZWVz3p2cue+ylpT9evqm32Pd9jrmOJVgZujyOojCGBYNIwZKFyXTD9rQiGOiGNVkQARAOKIr5CAAJGblWAORE8RsACmM5EhIEAhFgmELDSNFPo9A9h+6YrWW2QigiGUI0X/ALgc2DNykfxHBkLQlktTUMFrK8MIYJoytXn3jEAb+8/pt1t6fSGQAQ9fX1+G+rFeYJAgtxm6rYtF2OHduYjb5e0rX8tpv9bU+drbu2WW/MgeKF599FctUcO2Vyjaje/5x3xh//s1OJaBMANNVC1jY1Ac0Aav8++fpkwUcEMBMIvLU3O/7bDXfc9PKyzce292SQiMW0UkKF1iq6NLYgAFYoCAI41Ydczxb4AzsAbQCpQveZBwFFpockiFTkJsOaHpEIrReJ6GsytHgkwpgwD3IiCBJsiKwNjAAsxbwYctqCWQMkrJSulUIRR9GmocF0JG8rwNhZUCBmayxbAKqyKI7puw979ay64xouOe2wFzNZHzPrZ6qXr56nmf97OxuD9ToVQ9fC61+0a+8/Iijb3cyfu1WIjld52klf7tj9xNv2JaIWfvtWB/teqP9ZfEufsJuleNw1N9z/3Jf/+PD8G5Zt6C4Da+M4ShAESSlBMoqz2MCQA6Ec2Ewv/PYN8HtbogTChRUc+di8Kw1dYghEGVk+ESYLUWE5BGX+30bJhxCRxQthYhlWGyOFIzG0QGHy7qMXjBo1fPGmLdv33NbWNaUvlSseYAdp3wDaBxhWSGFJkAgzEBB4sJQVZslhxRYga42xDECOri7DzAP2eOjWa792ZZxow3+vFawXRI022bZxaMf2d65POcFlQ8fuNT549Sev+yaL1Uu22DK3X+522o3frRh7zC/ffvtWZ7/9Lgr+a9pr+bodM7uX/uK+3zw2d8XFm9v6EIt7xiGSgpzQGgmKMksCOXEgSCPTvhG5zs2wOg1WTvg9Di0aSwLnA/+oJMIgEGQYxAkZvl+UvWLQSub/HhabBAnWlo3VWsUTMQwtL/D3mjTyuRNm73fnV8447nEpiI1ltz2LkXc99OSeG7Z1zF62esOUlm1tU33rVPencsj4PmAMQGQgiSWRIAYxLDFzGDkyRTEhGxvkhKM82nPcsM5Tjt2v8WeXnfe7dCb3X5WQMNeLhoZGNDSw27Lgt4u3b+9/c//P/vhCAHb7/Gv+olIrTl7x9gpUjJm2Y8+z7psCoBdooI/SWvtEwFdb2ySbm+sMM488/fu/u2POm5uP6U33m8JYTBAcglQQUoQmgwikPJAjEXRvQbplDYJsL0g6IWDYRqWSMItlwVEWKyNARd+LSiahRSRIIcAIQRqCUYBIWkvEAVtAW1lY4GHssNK+fabufu+Zpx1z5+kzpy/OZHKhp3EkdPBePMRchbaOroqbHnx+1rrN22ev27LjoNa2vmm9Ge30p334uQDgABBkEFbABSwLIG8VCZa1QS6Q1eUF2G/SqL/+6pc//MGkquJVoRVkNDaS/TSBh01wabefZgfW/P7O9a+/cEHR5Ev2HLffrGUA0Lvu/rMG1jxyf/v6Laja5/Tfjjr0im81NdXKurpmky8if6rgy1u8zb2ZcRdcftOTryzdPIksacchxVBQQgBShXEXSXixGESQQu+m5cj0bAMJirJUfk8iAJJR5hl+zkK+B4DE0fdCTwgpw+8TyDLDBlZLCEFKeigrimHU8JLtM6ZPvrvxyq/8ebirVvsR0EqKEmh6+NZj7np06ZEjxkxac/7pe8/bf8+D1+VBOdgMUIQgsO789esnPP/8or2Wrlx/wNbWjiM6ejOT+lK+6k+lYXwNsAUIhkiyBAsmCMuGOfCtFEpOGjOk74yTZn3/+u+ce1vODwYf3E8l4VjR4NDURp/TL13eM+em699YV/zM8d/844kNDbNkY+M8zcyjNj7xheV+f1/R0KO+e0zJkFkvAE2C6KNfL/2ngffyojWTv/+rB55ZsHLbKOk42lFCCUiQkhBCgiAgnBg814Hu2IDuLSthdA5CychaReWOKEnAYAwXWTohonqcHEw4But1QkBQPo6DgJCUiLkoK/JQUV64edSwqgWTR4956mc/OPdpIurY5fCLli989Au/uOul415ZvOXkll5JxYXFKI756dLSxFv7Tp3w8iEHTfvbuScfv1QK6rf894dqmd25C5bt+eIby/Ze9M6qGa2dvTN7+1PjuwayGMhq2MAfBGNY1SG22UANKSvAgftOuPevt1/TQETrAUhm/kTbdPkEI5d++/Ppt26697WXFtrpX/j9ScPGH/4sNzVJqqszEC42PHfJ4t6Ojon7nHXvCCLq3rWM8qmBLw+8x+e9Pf2qGx957J2NHSNcxzGSIKV0QNKBEgxLDrxYHC5y6Nu4DANd20JMRfWzMGsMrRdkHlxRQgEJEQHPRkVgEohcqwQRWWawtSwdz0NlaRwjhlasGjd65FOzDtjzqQs/d+TCWMzpz+X0roc+dPH8h87+0yOvnffMG9umrmvPwWoLeK4GM0EbCSlQWJBAaVECxQl31dhR1XMP32/v+V/6wvEvDS8taskFf+8pBQHGcuzJV9+c+OQLC/Zas2rr0X2p7MzWjs6RfckM0gGDtQ8Ia6ERePG4d8CeY7ddfP6pXznnhJnPGvvJpcFz5tSr2bMbdS7XNYXW/+rNRY/cWtCZOPGVEy/74xENDWQbG8Fz6mfK2Y3zzPq59fflBjIHTvnsb3Zj4+9KyP10wJcH3mtvL530jRseemHRmtbhjisMkZCSJBwZA0kJqwSKCorBA23oXPsWglwKwnUiRjvv7LPms9OoYMwiTCiIBFjm3W2eZitAQlqjNQNCFhcUYvSwis5J40c/fciB02+/9PNHvSUF5d5/L5l59JwX/3jpw0+8Xffi4q3DV29KAiLBwiUrIaUhG4YARGwhLEMyLCsICSfmoaKoAMUx2TF8+JA3p00c8/phB46ae8bhh78jiNIfdCc8RyHrByX3PPzMbi++vuTwbS1dR7f39Ozf2tFVnQwI2VQOyKRQM7wCRx68zy9/feOPGquIktG58H/a4vUzV8Y23DCn5bU/TV2y0sHsr910bsnIw/88p75ezW5sMHPmNMjZsxt169J764N0cvzIA7/6hfB7jfpjVd7+E12LtgyPO/1Ljc/NX7F5nHIcA2IppIw4cwqkFBJFBQhaN6B74xKwojCpYBv1THdp8kctMuYohhMEJhnGdVJEfVYBIaTVYaVMVhTHMX5M9bv77LnHXb9vuOTPSlKbsYNvqgAEggSMNVMef+T3Fz705MIz5y3bUd2yIw0oZZxYgsAsDIkoc8bgQwAZZskkBBhkrYVllsRKSunEUBJzUZJQPGRo1bIJo4fOnzR26GM/OO/YhTFXduxiFd9jIVxHIufr8mtvvG+vVRu2nrC9o212d+9Acf9AJl7uyuIjD59+93VXfeuykDvxnwFf5DLBzGXZzXc86rQ8dfjjTS/z0Bnnv3HQWb84rK6uDvksPCzXAn3tr4/3s7a0atQhb72nFvhJgy/v75m55LiLr33l+fnrp0lJBgISJKEcB5IkRCyGIk+gf81iDHRvA3lxhC2YnX1TipIHFjTY2gpdbZRIiKhoDAspJWtLlhmyoqQAe4wbvuLwQ6f/5qff/MK9RJQFgH333ddZCAALFwau4yDn75jxxCP3fevhpxae+vyCrd6OjiwQSxjpxgSLiOlDCiLqB9vBnwcIocLDz5d1CCDpQJBkJrIGzJZJkfBQEIuhwFMYVlncPqqm8O1Rw8sfrz1q5txD9hy+noh2tRIOgGCXs3QBxCOAynsefUGce+pR3f9J4GFug8SsBie9/dGnE/3Pz3rh/keCtByvjrn8/mPj8dEvhP+ME088sTCRzW7oqdulNfhRs9v/CPgi4AlmxrmX3/iXh19YeErOklZCKBYSkgQEAW5BEeLE6F63ELl0F8hxw5g73xPNM02ivqlFZHFEyETJZ68hUZRBkFb7LBJxgYmjh64/+cRZNzd+4+xbiSgNAPteeKGz8LbVDMzTrusgl1xy4C23PvCdZ1559+T572z3utpzQEGBka4SzIIgox6wIAhyop9FgIxiUBHVFZmiuDJKeiRCC0ky4gASEwu2DGuslZoFuUKgwFMoL3Zzo2tK3q2uKHhuxn4Tnvvm6cculoJ6dwkFZAQ6+0nHecmtT1xZoF/+6aq5r+QWvbnem3rqtx/Z9+SGM7TvY+GK7aPPv+grz/Z0dVaf//lTv3v1j6+4u76+XgGw/2phnP5dcd5j53zefL3xzh/e8/j8azr7B7RyXSWYIJQCEyGWKIDM9aBv41JYY0DSg4XeSVmKGv4R2y5qecmQTRo1+jlinEghocEGUHJ8TYk+cubeN99y9WX1RNQX1hbr3ebmRgPAOEpix4qnDrjpT89+65W3V9e9ubJdptIAYq6RriOYLQGxsBUnJCjPhCFnsPvBUVsu/HtkmRmQ+c5K2J8ZrCtS9ACxZYSUSc2G2VqtodlKCImYI1CecFFTXbS1prhwzl4TRv/t62cf8drQoUO3CSKdb5Bw1HP7z1m9JklUZ/o6XzivoO3J2/p37MC8J/8mynY/MnfQ15oP8IjeZWZn9slnPzvv1cWzEoUxfOnsk79148+u/u3MmfVq3ryPF+f9W0cnm5qaZF1dnWn624KZP/jFPY2dXf1GxZUMTZqCAaGgoBjUux09W94FHAYpAeYgNHJRiWQwq41oTMh3O0gMZrAcgpB1oLmkoEDut+eYNy698NRvnnrEoW/94SffweTaWndlc7Nubm70XVfhznvund7816cumnXu9Res2dKn/KwFYjGjClxhSUtjASEcMIXXCkLU782DUERhQHRtFIEszwPMd0qEyA9oIoqbALawTACC/MywZAk4TMw2YD9DdnsyLbe3944Uwp47/513z/3rvIV9VaUFS77w7RtenTF192e+dsGpr0X0rv8U8FyiOj8zsPwI1fbw3bmBHn593kJTXjlKjj/8zG97RCvicRcXfafxykVL3p3FlrOuhMfQqX/Hz1f/w6unuijOO+ysy29dv61LqphjmYlkFFLHPRe2YxP6W9eDnHAsInyaeZBAQCTBAjsJnRE3KiSZRFYEBBJkjW/E6GGVdNqxB9/0q6u+eiURJSdPrnVXrmw2K5ub/Xg8hjv+/PBRf/7TfV/+8dW/q23p7BOBtoAbMyKhBMNKwz4IaieXOw8aiso0iIaMmMLsmmSEw6ibAgwCb7C2KCLeHwsABhZ20G/afDhkAcsgi4AECeE4AAHG16y7ewbc7p5kSU1J4nA7vGDctDFDtwGYn7ed/yGL5/dz52Ss//2DyGzjRUs2atvf7lQcc9mimmmn3wUAtz/46CFXXvWrH/QnAwNHSssg1po/dfDVNzTQda5jL2689caF77ZMFBIG1kgSEpol4q4D07YJqZ5NkMqBhRgMZXa6sIhVskv3QiD8mhWR1ZMKxDAm0HLfPcb0nnfOKRdc9sWTH/11/cUSgFq5stn3PBc33nb3zEcf/9tlP/jxdae0tPXBsAYpzwhHCQuWljmK1SKigcAg4WCQ8SLkYN93MP6M4rvQuMnIBWNnsApC/nHKP1hRAw2Wo8+sgYCFYAMLCaNtVBLKyBKl5ZAqzwytKnv0kAOm//7aKy+ZT0S571967n+ypGKSzEPl+l/+JaY3V727NqMH1rwjq/c5LjflhB9cQESGmUsOOvGLd29p6XVELGZtLkMQAkq49KmCr7a2STY21pnHX1o085vX3PqFTNY3ruMISwxLgOcKmJ5tyPZuh3S8qBAcNf3BOy2HkFGuK3bOTSBkqIiwbgdrYEBWHnXYPmt+/fPv1U0bUr4kohGbwoIEbvj5r4964oVXvnH19becsqOzD9YPGK5jBVxJgLTEu4S3+ZZcHjQU0bZEFOOJna07KQetHZMMGypyJwsmz6IJAUYR8RQIpep0BDiGIEYAhvYJMIF1bBcmFafEtJFxDKuqaOmTlbfsdcbv7vzaLFQDS8cSUa62tlY2NTX92zsbIUuFbA9zqdp466Oe2DBx60atN7/1Eg0ZM0VUH/D5bxB5S+JxF1+49KqbF6/YPJ5cZZi1hJAht1cJ+emBj5maGxqYmdURZ33/ms07OoV0XcOwxFLBUQrctQ3ZgU6Qo/B3BXqKGv20SyFZSAgSsHngRTGVNlbH3Jg66tBprz1xe+PpRNQ2c2a9uvz2s+XTtz50yLJl71x69Q03n9yeDMhaaaUiFq4jGSw5b60iN8mIyjV5ksEgKSFPMHUAoQan2IhUmORQWE8kIcJi8y5zHdaGho5gwWwjsFoIG9L8gxwAoxF3kmZyZTcdXtMj9hmdwOjdJqzebcyka0ccdcVSoG2ybb/3muyajWfFKrxEtuel73qls38TCe+YfytZgBqZmd3M1rsf9bDkwI7tMGveeIWKizwZn3DMIyOn1N4uCPjeT24567Y/P3Z2ztdGOFKyAUA2PD+mT8/y1dbViebmZnPtqOkXLdmw41BmGIClJQmHFGxvC/yBDkgh/h54UQwVMn/zN1RFcR2H1icCpDHQibinTjxi+otNN/6ojoi66+vr1U+uvlof91jpd95asKBx1fr1Xt9AFlAOICCMrwDBgJJWSBmOV5AAIrIBi9DdI4rvELl9Eru4XhK7lFLC8gkNdlIGa1tRwmQx2JQREoKBrM9AIEEyg31q+uzsYdvp0LH9cuKoEagcPnt50W4zrovvdubfgr65Z6XX/uaBhGidJLgXTiYFu421KpM/zxbWLIo7dXPy2ei/pZbXQBDC5XTbQ/fFsWTWQL+j1781XyjqE/GJZ7TucUzDxeBGLF2zafKZF111a2vngBUxR1itQTDR3IoEW/p0Yr6opmeZuejguu99t7snycL1yLCGKxRsfxv8ZAdIivcUqnYG9yKslUVZIkO8J8bKE0Mts5EEdfTBe7/WdOOPaomoJ8qsNQCMGz38xosv+dbDGzctnr3y3fWHrF63ac/O7uS0UjHgpNJJtA9AZLKehREMIQgxT8BxIIQDKVUEQAJDgeDmaVZgIcNkRMjwoaCorvh+T8McxncU2tIAEjoHIJvE0NJenDhD46x9U9hnaKtgOxK54lkviLEn3Fg9auaLRJTempy419AtL9yo+t5BnyHtqDgJpYSQLNz+JQAlbmXmwxoaqONf6R78ncUDMV3t2GzXgw96/qIz0impVy9YJIP+TbZs98N495lfuYQaqIuZ48ec/b0/rdjcUSRjnjE2ENHEVvhQkwAbqz8V8NXVha6g4XcPnrVmc9tuIGvYaimVAqe7ECTbogY/orBsJ6WXxE43m6e/h64tH7uLCKCwpFnOPGjq0r/eVn/aLsAzO6+jLgNgPYD1Qog74rE43l66dt/X7/jiixs3ZlTpxMM6Eh6NaenowbqWJJZvSfKWzsD0Z4ywaStACSDugTwJ6aqIQR2OVFJEROUoBpQRKZVBYGIISBgKQBYwcOD7gDT92H94Nz6//wA+t3caNTWa167T6E18dvWI6WfXV5bt2wS+AQCoqalWjqC46urpNCaZIcctUtrmQCYH5XiU8wPjyQXjs5vit1/9E+eUhoY6+XEZI++dxyAGGH73X//s8NLP+QOB3rh4nQraVuqK0ZNV8dTTrymo3O9R11H4SvY3v5i/dNN+EKTBUGE1ggcZRBASQqlPwe0yU3No9QoPOvUb3+jq6mfhOcRCgrIpmP42kOBdWpe8c3YjXyvLW7h8sB8F7TyYWQprAoi9J4/aft8vv3MqEbXX17OoqyPz973kerFy5Upqb2+nefPm6UnjalasiAVUWZxo/2bj7TP81qdm9ff1HG8zAwf5ft+kgVSf2rojh4Xr+vDWugFevsmnrb0esmkdZg+egBN3IB0JEcWCNiIwhOdvIiKrBUwMaaNRKAcwe0w7ztqzHadP60BhhYul62L48W1d9slFJGefiJ8/eMSUppmA+lpTE9fW1oKIDOeuzWoTSO37YGRYCklSSnCQAyRJf0e7Lhry1sl9W5p+S3Tqpbe+fdt7WnAfVdxnLhrELLAJep++36HVZ5qkDtYt3+D0bltuKoeOVO5uxz49Yq8v1APn4Nq7/3reb2597JJUNtBKSmWNjkIWFSZQEbGDhfzkE47aumbRDJjf3f/csZvaBqaG1GIhZJCE6W//+6l/hMI8JBTyymIcBerYtYaXB6cQbHzDY0ZU6+9960tfHTp06IaZ9fWqsZE+0Mzn2zqRVSAA5ZVVxV46GQgA3V7NSc0Amjcyx6p65h9ZPtA2a/TYgaOPmZncC46lXF8vVm/L4vUVaby4qAuLthK29DrIpBUgCJ7H8OJyULKFSUEYQiYAyt0UjqnejONHrMYh4/owpNzDgtUJ3PJCGk+92YvMgESsIo7iWLfX1FQrm5vBdeEoQegXXBfaNwhyAZgDGGlCKyvDpEZIqbpa1ppiFH4z3fv2a4nS/Zo+TvyXd9XcwCJIPtvkqFVnmKTVm5ducZIbl9vCoriUY47cOPawK79IRHbR1ra9zr/42l9sa+uwjisEax4cM9g5WB+9+b8pBfpY4GturmPHkXjkiRc/39bRx8KRDBOA+9pBNgsrPAjm6CJ3EjsHQRfJTlDe7Qo5WEKVRDDG2pLiAnniEQf85IvHHPDEzPp6Ne+j03QYgB+LS61i0gXgclOT3wxgbEgweArAU7cyO6f2vj5twbwFPy4S4rMHjBVmz1O1vOh4F92tEu9sj+PF5Tm8uhpY1VWI9l4NkEG8IA4NiQrZi8MKlmDmkM3Yb2Qf4nGJV1YV4PHFCi+tDeCnXFAsBlnOrNw40llX1tU1m9r3awj6Wu4KPsiwXWeEgISEkD6gpEjvWGIlCm9jbltENGRdCN4GAI38Yc38sHNBPjPHTOqZBxy1/rPoh966YpPqXv8OFyYceCNnJEcd/LVaIupk5uqjz6v/07IN3RWOFzNsfMm7zLwwdmnAk4AJc/xQGXzeJwC++vp60djYaFd0dI37zOnfOZGtJkVKmP5OmCALSAozoojYGQ5Zy108787CLL9v7kJCAiQMGy0P2Xfikt81XPKzmxu/JuY2NBhqbPw4v49NJDzEXGEBEIWWJpS+RbNAM0BE5iJg0d4HH796yYrVGFnp8v57luHI6ZU4fCJhRnkGs2b6SB5WiY3aw/x1Gs+tUFje4mOcXYHDypdhYlkfDBReXuPhhXVFeH2jhNUuUFgAGbNgo2EMg5UHL1ZUCQDt7e3vjZOIHRNo+NkcDCsSkmBCUkJITrACDkCBYet1LSjpXhG/i5mPQQP5aKjHhwNvjiKa7Se5vUann21W7vZDkJJ6+5rNqmfd2+x5xhYN20cWTz/3Ardg9MJ4zMWX6++4+Y0lW/aSpA0IMqSRhdVXNhGtbBcAknRC3Mz9hCzfypUrCQBu+kPTydu6kh4cZTjTL5Hp3YWCx7DYtTtAO91rXv8kL8Ij5GAJRErFOW3F+DHVuW9/9YKvEFGqvr5e/AsBthOLxaTruu8hTUTvY/JyFU1NTeKUM84uWv6uxpZtKWxZ349HnmpFohTYZ6TAIVNimLVnDntPTOLiI4bi4tPHY/7La7Hi6TmIF8SxvKMcT610sbAlDiAOEZeQyoUFw3IQHitpGBAGBpIfrHXKinM5H5lsFgoq1AgUNAg+pSSsZRilpOnuM2XqzcN61951W2kDn7d162UegMyHAE9n+9aNl9nFTyivdSKS0B2rNqi+dW8i5hpTUjlZOVNOuaq05rBmZpaX//LeS+954u0zUho65ghlTVg6Yqa/5yRHKmrCGP2JWr7m5mYbi7lYuWTVyQOpAAo+dLobJAyIZZQw7LR6GBTfwS4TZiFjJV8zE1FpJZcJrBNX4pjD9rvz+IN2fytvZT/qtTU0NAxW2pSnOBaLeQDKAKQ+4PeAlNIeedKZBiIOUVgEKg0ToHQg8dqqAK+tsrjhmW7sMTyNWfsCJ80Eym0vlnZX4LV3yrG4PQaIOFRJPOT1cdgXZqMBliAEABtYy+ju7vmQq/Y5l/PhZwMwBbCaYVV4HkIQrLVQkmHZwEoh27ZvCyrVG+f0tw57e9SoX9/Ic+oVzQ5DktCyz5VEs7XvrzyQ9OoHlOwZg7TSbWuXq4ENb8BzOSiumuDYsSffV73bWT+prYUEEJ+/ZM13Wrv7OO6yYE27jLy/n/y0M5aXjvdv0fIWH9XlAuDuTG7kjvb+/cEGnOkRMH5IFMiTu1lEbykGk4mQHhVmjhxx5UAGrpAItISf1XzIZCF+dXaZ+WXjCTdq8/H76A0NDfnT6rNMRoqYD6D7Q32ztYBVhlQcLF1YEYeRBZDxOJyKCqiqIaCCEXi3vQy3PD6AEy9fhdNuaMPNS8Zice8wUGG1pcJyrVWBMTJuyCvQ0lFWSDHIxKZI5D4ZCUe+30CktRF+LoCf1dBZjSAbAtHPBfB9jVwugK8D6KyGn9UI2FGd25aZzOqnr/f7Vh5Esxs1g6m+vl6ExIjZOgjeOU7w5ueVmxxjsp5pW7FQ+RvfQSIW02VVwx2MOvaF6t2/cAnXa9HcHOoswVBWvIe7EDUcBwsTUT10cNie4RTGYp+Y28273MuvuW2P1t5MEfwBy9kBMUgfyk/954kC9N7ySjhbEQ17SwsScWT706ipIfz4C8PsIUUbpFez90Mexq5raqoVdXWNHzOfIjAzdax/5AaZ3VbAmY7YwidvvpKZ6yNg8t97PcXWiUXMfQlIBUsOWLggqcJ2Wjy0QpoZO3IBZCLOBprZcUVxUYkQrEHGQFtgIJkEIIwkCGvD6XCSyjCpDyxLKI6ZIDDIZnNgcllIQVIJSCUhpYRVMhzxdQQkFJTWFFhJ3Lko3rX8vgeZeQbQ3NFIjaaB2TX+2/Vstv5AOj75A8J2Lp0jbdtKiLjSZSUlKlNx5N8qJ37pFDRQgAYGQh1ElkREbP/eDvEu4dIu7H8Cgdl8ch2O5uYwWN6yccusVDIJZLotrBXRUE0kJ5YPRmmwPcbYZaSRAaEEfA0gNYAzTyhC/Znl3LdsrtiyY6h/zLnfup6ITBOz/Dgc17ycQ/vG+ft0LH3oa+OrwKnOpFr68p9+OGzarPsbGxtXcn29oF3cOAFwvDiEmzBsKFQfFgok3XCOWDkQ0kU+qpdM8BzijA1oSMUQqiqOvTFxjynP7TG2JgNLds2W1tJ3l84/aUdr/56dnT5ASiOTho1BSjIl77PT0YVbk8tpzmZ9YvIhJMFREspRYGWgrISxEkQOIBgyAIxi4ef8XElq8aiWJbddPWLviy7s7d1SbnKvPSi9vqNhDSd3ZHnHwieEm2uFcB1dXFSkcmWHPVs++eI6EPngObIZzYPgMdYAbMCWwTBhZvsBGjs0yNz5970+ou+eZz3XQXdfcn8/1QNhcxTGc++bMhN5OYg8+AgkOMyWHIKf9FFRpPHLKybg3CNiWPDkM7a1JSlHHnT4/Fh86PL6eoi6j9lGam4OrXJvT2vl+sXvYofqQVdfkvuSAaVb2+OD97vxva0+KUSxNSStMQTHMcJxIFVMkFBESkFIb1A8iCVzLhVgwsgK/zMnnXzpDZccugJYcAy6NsxCkBKorlkM8Zvvf6X+kVEvvfTUrVu3d6ghw8swekj5nEP337tp/t8eovpZs2zjvHmDF0OCvSAAZbMaEDosDFgLyxbWKjCHGi+h5JsLX5EV2awoLR/i5Ur3XRmrmHBXZuD1ox2x7EapMpNgoFtXb5Xb5j1GZRUM8oQuKSpQPOSIhaWTvva5hgZKNXA9Ec3Wu6ypUgRDRgeQQoF5p5Q0472AE4OspH/fS3xEuSybzflDMuns3pzsAsGKULt2ZxEyP0vLELB5kZ686rsjoXvSOHCyi5dvnoYvHiWx4PGX0N3SjeG77YFhex91D9uAGhqa6OM+XLW1TZYZNH6f096migMWLXqng1avyVLxboe9OG7G7KXhcMtOq1dfX0/WWhpVXX7PrBlTX5o8efdMeUWVlE6BDKwgQ5JJekYo10J5LITLQSB593HDcc33v3zRDZdUlgZ9f30eyXd+hJ7Fx2Hry8fk5v/p8i0vXvLo7VeNFl869+S6kw+b9utf/azx4EWvPH7Ez376g5cB/N3KBEdJk80GyGZ95LIBclmNXE4j8A20b+D7GtpY+IFlP53RZDLCrdiL3Yl1P6/e/+oDC0ucw11e8zdpt0wCB2bFnDfU0r/8iSqrBBwpdXlJudIVhz1fMulrR1ADJRsaQg/xd+Gv0aGwUTQ2EurKWNAgCW6XUbvBOF6IT8Ty5TPJe56fV75t84YimBysckNaR16FDjRIEAhNtBwU8hEE6L4BnH96DW68bHcUOj7efO4lJPt72fMcaYpGDQwdd/RL4e9Xaz++6hpxOABDPX7XCw/tNap1uiocipqDv3U/EQU8Z44CZutduiKaASF+2/iyZT56Ww7jbv3Dg/svWrn+hM7e1OztPelh/WmS6WwAZh8Qwi8tLXFPPOaQ62tnBaOBlgZl+6HTaY2Ahe9rDPQkrenfFN/6ZNcfLpr5uR9WXvjry/7yp19HHr6egA/I3ANljbbQvoV2LBsD4ogXyIbhghAgMMpqGasepbzhM5aWH3beN8rik7cGPX992PP6j0Gu24IcPHDzX+XWFUtQd/wosLa6oLhU5SoOnVMx7dJaIurn+npB9IHFemYbMNgAVoRkCTAIgxcTJk6DCW9YdJb0CVGq8snGwpfmj0v1dXogshHJLYqJInP8Hio6QwgJywI61Y/GSyfjqi+NAXI5rHxzKbJd7UgkHOuIIlk8YvJcqZzN9fX4HzA3wrQr1bpyREUFwy0E+loXTgmVyTo4P9r3zjvPFRQXJ3an3Q5bEgGXAKwFsFYK3K8NV9zy0Nzxb63YcFpb98CJG7a17r69I+kOK/X6fnXJcS8ErXc8IdWAgSompZSyIk8mJZHzHbtxyatQ7bFrBnJdj/3i2hvfnTJlCtW9T320uTncS5s2Om4tEAQMFdhoZIQgtYFmNmRSMlFZKePV09qL9zvp9+XTvnir1//81/z+V77lxrKF0GQ6tvfLn/92Hvo6W/Dts0Yz5wZMvGyYotHHvlw+8csnE1HqnzBirDXGghlsdWT18txEHgQjiCPiYjRXLewnE/PlK/Pr166u0UYDQti8MB7RrgyVcAYDjFCRgAFOJ/GbhsNw6Vnl4GQWOza3om/DesTcGHSQQ3xIJcqrxz9ojcasWR+vtrfra9bseYaZZc+yn8/o700ibpPQsd7JRMSMOgsOy0U9PW6uKt7xo7Z3bumt3uur3yOi3rffvtW5beFC3HbRbZaIugB0EfCGZa5f2Y8Rt/7+vlNycDWSLxzmUHvc9PUY4fYIWAMOctB+Dn46hYGBpPBz0sjWd8T2Nx7Zv7GxccWcOfXqH528ZgtfAyLwIa2EFTBWB6K4uEjGhu2Byn2Ob5ow64pvAn5VtvX2J5Tcth+g4afj5olnW+Wv7liAYVUSV589lqXfj+Jheyg59PD7Syd+8fyGBtJhL5jMP25JMgNhfTJPvjS7uNz30MfAYLZg5k8m283Xp4QQ4421EV1ql6GeiIAZAo8gVcgWDtIp3PyTQ3DJOSOge/rh5+LoWb0cBXGJnCUgYKFFpa2csu86AJg1q8G+Jyv4GG0/amy0DFSYbM+E/q4+wBuBeBCMZrZhjxNMDQ3guuY6vm3WbV9Jv/LLd1ILr1oQBBsvcpyxc3ZZ0x5tOmpGpCK/FsAvAeA3p9/0YMxsYpsOQlVTtvCzKaRTaaSTGaQHcsims5xKdrDTvnU6gD92/L6R/z5GrY2+Jg1sKGlkLdkgl6WYcmVi+B6o3O2Qx6aeft2PCgsL/VzbIz+j7JYvxmKdgA/z6jt94o4HFsq5i3txyJQYvn8CW8r0CKd6b1M67ZRLZeUJtxCRDV1tnannetH4j/TyrAFsAOadwXZe95c5SrjYIsqAAAJ0TttPJtudN4+JAN/PVZpI5X3nZfKgoE9eEEdKhVxfBtddNROXnD8OfnsbpFOM9pVzAN0HchREYDnmuSScsjZgt7XvebOPXWAGGhuBLNoKc70tiUzOB6UZcqBrJIAhALbmY0PmJhCV9TJvO7Xn1WsW6QVXP6v7X7xGFh1xLREZfvtWp6npIh2WL8MNSGioU40rYUw2BZPuQiYdMBmBXOAjyGXR35NEb/cA+nuS6O7NIGcLMGTwWGsRChJ/cLjKxuhcjkVREQunajwqdtv/mWmnfPsnw8dM7/A7m7+ebdt4UawwHYOjsXprzP7uoRb5wkur0NOvccQ+Dr57gmcSMi1Vzd7dhZPP+/mXr3x6wZ/vPMnW19criggZjf9YqJFAhmAjzUDeeV9DNVWGHbR6FmADsIQ2bPBvqDJ/pFKLFBLJZCpujR1UELWDI40ccfJcKCWQ7RnA1y7aH1dcPAW57g64hZXoXLcWA1tXQroOhNZwFVnleZLiidVCuj1hTPavUrOnEAAMtLwzmXTWzeXYylxAmYHOwkzLyyMj8EVRQZ1Zzk0u0cjF/R1zLgreuv7WzJuNV8emrDuBOXUpUcGCnWOFFO7S4ibTSHXGv+7k5bJbfi7V242AgVw6i0wqi/6eAXR1pdDfl0M6q6mgbAjVjJ48NzJzQHMzPijmS5BV8URCVYyZjHH7zpq795EXXVU0as/1PesfuCC1/NnvFVR2F0OksXFzkbnjOV/c9+wa0Z9Mw3OLcez+fXzRwWlT4CpVMProFWXTL71u8j5HXEDWXveTn990/JXf+fqzH3mg21qAbRTzRVOr4Ih+yjstXt42sIUxFp9Ue42FFPBcVYr3oyRSAmUikMPI9mUx85Ah+OX39oLu2w6lPOisQNuyNyGEhTV5YRxi6cawbG3/ErYBGhrwr5MT564gAMi0rZ0gbYBclu1AMmc53YNM2/qRADB3bsPg7zmV6nyuv0oUV82+jcZ+9oFcXzdSb911YHbFtc+x//IlzOwQ1RluqpXMLPLQKRt3zp1dNCbpD3TL/s5+PdAdWrzO7iT6+nNIZbKBgJBV4/ZeMW7/M54AIOpq/z57r6qqIm6qlcvXL95aOOnIG078zv3HHXb+zRd3tb58Usurly0v8xb/pCDRUbx6HZnv38084xvr5fX3baU+3wU5BThjH7bfPV5QRWWVqtzj1Cfbhp73/SkHnfrDbTvaj9i4rZ/veeTFu1/bsH30vHmNOmqL/qOXNtoYGAasAVsd/cmDCQesjQCaV/BgKJGfzJn1ybBaeNfZ2vxgd15GQihwoFFeoXBLwwHwuAM6R5BFxWhduRh+9ybIRAmEYZCQcF2JviCOp97c0S6kxMrGf71d09yxkgFCtnPH7tJPo2fAR2mpYj+dRG/n5j1CgM59v69mRqPon3TRN8zAxgP1lmdGZZf9tVRl1t1shq44jbnvR0QlbwCEpuX17vLl9ZKIdvRse7qxu3vbz9Otr6uBVMZkkppTqRylk77IaThVE45KH3LWZRcTUcARK4eZCc3NYm7VCpo9u9HMnj07IgM0dU+dOv3JbW82XbBp9Y2njRmtio2VeGlxXN/3qisfm98lu3ak4CViiBcyHGJ89bAec+4+OZlxh6UmHvvlH/3+ic5NN1x9yt1bdvRXk1tsZGEpVm/cNvSKr3+/mZlnE1Hmg+j3tGulig2BQyY3Ra5XvEdIi/ON+0HrZz7BGQ4y2iCXNb0kZZh9Ew3OuOZ5eyYZ4Oof7I09dgf8nhxkrAC5/j60rngFkiQQWEBZCHIQcy1W7BDo4nGTgBc/PCr6CNdWV9dspJNANpWe7nf3IpPMiHLlcV+qH6K7cz8SDuY2zrPvrw0yN4kSoq5M5+sXZTObntM7lpi2tW+jsG3jkbnWFUeY7ffeLGrOvoWIVua9xPPDj7/5wAG9vcgvvRKtq6b0pTdDuhaVI8pQMGb6/L0/+80flNXwG2+/faszd2A7c+OgpJnJb/bx/U1Tu1bP+fz6v337xGK3f/KIContSOD214vMfS/2iVeXtikTCMgiDyVVJRjIGBRzq71yZhedOqNMDsQmvzHtpCtuu+XmP066/lf3/Xrrjh6QF7fsFUiSCggC/dbiFfvXfelbNzmOc8GsWbPyHPj3tm3zG+YEESKXyzZfy3vfcnHiQemisG2vPrnerrEWjuukQ70UE2mVhM+HlAI66ePQQ6pw4alDobuTkMKDlAItK5ci2b4RxYWlAAwkQlkJVwlauy2Nzdu7hxpt5b8a7+ULeNpPxV6788xq3Z1mm8vBVS76+iWC9Kax1vgiUil9j4xX6FqbJFUe8nzvu799tjS5+fieVMqkkynrdz8jZM+Sr9vtC8/LbPrT7XL0UY86GLYgyoDvB5z72zc/WidWLB8vc8gNnXTAnJpJs9/5+7KGBLOu6O18Y5rftvaora9ePVsPbDigvCCrlJJY2pawf/lbjB97rV+0tPVKKAdePAE3wWBy0RcwHzCsh79/cJsYO6ySebezbp46/eBVv7jqez/4zZ2vjm/pkywKywDhClZe2B4TpLI5rV+Y9+b5X//ete/8+trv3Thz5kw1b97OFaa7UliMsTyIvCjJCAWbdklA3vcn5QeI/uN8vpkzCfPmoaiwcIAoP4crBgvLzASlDOq/NB4OfPhGQJKFzWWxbeU7sAEhsBYuACHciHWlaFNrElnfHxdp02Wj+f+PCcI8jy83sq9143ARZCjIJa2fS6UyGcQHejaNjjLeHe953qO24dq1NyqGtZj0le/09Sw6Qg286miKkXIL0dHaYeyOJwqLyxZ9e2D5377tlo1b1rrktqbi4VO3qIrKNQ7GN1ePPjW6R77TAxQysxMEK3ZL9e6Yarp2jNfZjoM3vvzdCW7QN7TUS0LlDFZ2O3hwSZl+ZqkVry3pFLbPAAVxxIq88HykhwA+TCZrz5q0XVx+HCgx5OBXqqd/6Q20z5/6wwvP/9qvHlqPrHaNKEpIqBggPbAxgNVha8x1ZU/ngPnL44/d8Id7H37nq1844+UPWbFgYQ2DLWBFdPohwQCDCgx5UulOtysIzidCqZoZgTub81d5rot0LjfIUlaOAz+lcfzMGhwxvQC6rx/CiUEKgZ7OAfS3bkVcqWgvrkTIcxawLGh7L5Bmd9TqbT0TACytrwc1Nn7cckvYpN+4fG4iUbVbxhUjua9Pez0ZaYaO23sjbS0fmuvYUBSCr+E9fePI2uZCVkz83fTmPzyRSK89o7O9x1iCJOFKox1ub2s1xuxQ8d410+IlNdP6O19Djj2oWFlXx5JrekiQ7lpyQxl0hjpsRgrmCpcC2GQbRK4bpUKj34/xX1YVmaa3PHp9RSC62loUhIBIKHiVCbCIw5ACS5cD49pi2S3Pn75GnDVz7PaRh53XJCjpbXv6R1/4xUOLa/74QpqppAqioECyjBQWBimgHGWuloQnafOWVu8Pt/7pPmY+gIh2DJJ0d3kGQxZrsHNxXF7abdBE0nulVNnmO0P/ebdbXV3NADBh/JTuBUvXAlkSDAkR9XPJCXDJ6SMhbBKaGWSygPTQsXkrkE4BpYUIVRIZ1jKUZIAF9fgFpisn5cN/e2FvAMtWrmymf6GvawFgt2nHLWHmqT2pbRVVS1/dL8PYtOfBZ66POmgbw3/7IfWu5inRjEftNamWt06ReMUJjMfGRPRJ5SnhemCSNtPfaynZT8KDdE1hhYPCCikVjA7AxoLYIpezsGATK1Tco6vp6Te0+PPLPfTWmh0KOQbiDpyCAkjlwpCEIRdCCZBQJjAsp5RtkZfMlr2fPe6iN0ThmM5tC/48u3PDO3td93gXXnhHGFlWJW2sDCQ9gELGM7F+T25AzLDMgtyYWbZyw4ijTj73T8x8QvjAvZesa62O6ncG+RFfgV0FkKKBMBsCmxjQ2SD4RMDX3NRkQYThNWVLhbA5EHkkJJMSFKR9TJlagiOnF8Cm+kJ5WAhwALRvXA0jALaEnZwJFQ7HkETOAtmBDN5+c/mxUop7mptX8P9srRttA7ANwJLwK2d91IzFMDORcJb0rLj+JafwnePSfRljBUmGgGQZWhfpCKE8oWIxODGHSXrQjFAVSRVQAB8UWJSWMXVm4vKeeRZ/fK4by9/tBVhDFHoQxYVgQbBww+6QdCCkYxlKeK6U4+MdHT/9yoFzTz7q4Nya+Q/vwVt/f9zSdzvw46as2ZQsE6qqXFrhQAgxaJEEvW88OiInRL0AaSzrNxYvP/qcr37zWsdR3z/44Flq7ty5Jr/xSxATrAaM3PkGkfpq/u/0fnJ5Ptv9H8Z84qPMIwLAld+5sLumqjwJi8EhFwQax+9fgribRRBokLWQZJFLZTDQ2Tn4ZMLubFBLoRAIIGe0QC6Dlq7USVqbaqDRfoS61D+kfnF9veCmJtnU1CS5vl581PebO7dBgjXcmn1uV8VjwdZAkIIQClK6kMqDcuJwPReuq+Aqh2KuJMdzhVSuIDCVlsTIK0zQPXM0jv3+Wnz358uxfPV2qAILVRzGZVYQoFxASZDjsmVljHBFacI1R04Zdvtbf7z0t/uUt7sL7//6FzIr7933L6918NcfEHZLukLKwmKy8RKQWwiQu0sCYN+TRVBeRjACknSkSiVT+qWX3/7eldfeVDdv3jx90UUX5Y2OklLIQdIAW5C1OxlWeU7hYM0vvI8qLp1PxPLt8jv1VFdVrXt3U0dFtF1bioSHk/avAHKp8GKNBpSHZF8fMql+xJSA5Z0rQWUo5g5AIPB9QkyYLe2Z4qt++2AdgN/lGTT/ouX7l4m2s2Y1GKARidIjXmpznmj11MqhAUsmIYiFAjkK0nXhOA4c14XjeXBcF4YUiAwKC4rwylKLK29ZgVcXtAJKwSmIg4UHTQKCXJATi7adh6oMgSZRUhKTE8eOmV//9ZP+OEM9dcCiRy6vLwrWOpkk49Y3Suy9C+KEdJ84cvbUdRv75IgNW9pc4XnEBBK8U5KNdrlbNr+sOj/qyAwZS8jt2/vsQ02P3fHcc2+uOfbYGe8M7qrR2sBqwKqdIxDQkQSx2KXlFhEMAKiYK/8dCYf4CHeVgZmSiIJYwnvO8RwwE5uAMWpoDHuMUAjSJrywcPEdBnp6YHLZaGKNB8cBQBTJzkYcWXKpvbcXb67Ychkzx5ubm+wuLFt8cptYibmpVhJRrywe+0yirIKVA0NKQSoZAi7mQsYcODEPbjwGchTihS5EURV+dOs6HH3hM3h1QQdUUQyiII6ARBjDixjI8QDpQckYLMWNJUeMqirpufgrdT+be8OMJ6rf+e6Vix/7+Zep4y1nbUeB/fajFbj3jQKhPNeKeAy5QL/23a9/9frS4mJhc4ERu9aMeGdfHSK/HT0vARexjphJxjys2tBSVP+rXz3AzCWD/1uHfD5iE3U3or+zAVsLwYxwxsPuzHYh8IlNr9XWhknHnvvu8VJRLJ4vYGHMUEKZl4XJBYCxsFqDjUWyrzfMcCk/68nRbEBowpWUUFICNhBKkF22oXXszx968VyAOBIi+uRfVZOJGVQwbPqz7A0nhhVSuVCuA9f1oBwHrhuHSsTBSsEtLkBLJoHPXDIfP/3NUvjkQBZKaEQ6gMoDnDiEDOdBpOPaAIzC4lJ52EH7vPzM3d/54QVlj02Yf8cl13Wtf2WMY7Pm1e2jcfHDVeLtljLIhAurDZMgtLa24uLPzfzp7EOm/CXuecpa1qFLtINkT6ZdxEpIQkb6gnm7yLACSpm333l30mnnfPOBWCyWT1FsHsPMGsQ2XMIYufSdY5S7cJrlv0cpX3xE0W8LADd8/7KVI2uqu5gtwVgeXibhCIvAWFhjYIwBrEWQSoeqorRL1MgEtgJEFtITiDkC0D5cSejoHuDn5yxrYOaq5uY6/jSsH2Y1GCJwvPzQ13V8aE8sViCEEqxcD07MhevF4BbEIKQLr7gIazsSOPYLT+G5uRvgVhaGMhKRRh8rBUgnXNHqeRCOY5kcMWzYsMw3L/78jc80Tnm17dGLrlv8wn2nBj3rbAYlfNPiCfLyF3dHh18MGRewlqJbL0HkZIhI/+UPP71o/z3HvYPAqnC/6q5TFSLazBR6RBuRfS2F1tCSAAmSmpV+8dVFx59+1ld+WFlREbCwxbA5ZjYRAkOLxzb86fyeANCCGVCO53xi4IviKSml6Bg6rPoZz4sxQKa6zAWsgTEW1liwsTDGwGg9SDDNm+uIigi2BEcRyhIG8DXYBEIR20Vr24ZecdtTPyXAfhrWj4iYQzb1Vlk45OXiklIoV1rlKihXwXFdQDlwCuLY3pfASV96HCvX9MMpTcA3AEsHkB4gYxAyHv7pJsDCs6QKxP57TV7+1B2X3fjVyr+OeO2Oi6/s2vB6SbEbmA25YaJ+3kR6ZNUICE9AShNqV4v8+laCG497UY+283e/uOKsyWPKu23Op7DUxBHYOL+iC0wEIwVMtN4hr7wKFiBHyf5UVr/05vKrH3zq7c8VF3pvSkkEayxH1pTDVTYh1y9itIRcAiYGoJQnwjLcSv6Pgy8iQcJaxvT99rqrtLiAYEjGHAYHPow2YK1htYbJ5WDZvCdhYc6v4A7XA7gkMbzSBUwWli0EQSTTSfP03BVf+suba49tbq4z9XPmqE/e+tULBsgpHb7QjZfAcRQ7rgfpupCeCyUktFuJc654EWuWd8IpLUBgEYJOuSDpQSgP5HhwYgm2sgCl1cPE52pPfGLezSc+Ecz97kXvvHzvacmOFl3guni1a4z88ev7YWn/UHgxF2Q5Ek0flIsDhIQJDCslefLkye7e44av+sI5p311+PAhwvr+LqIWeRUwRPvp3qs0MDjGakHCc8WO3ix94/uX/6qx4Ve3jhkzbj2sUQJswwKzCeO86J6JXTscxP82JrP4GPs2LAC69rIvLRg9rHwzrIXv+1brHIzRCIwOLaDW8Fw5uCCFBhcs56sCBEBj7NAYEORgdBba5Mhhn9Zv2kZ3Pvj83cw8snH2bH777VudTxR8HVOYAI5VTnwxF6uG48Wk48YhHQcc7tfCzX9ehpeeWgOnogjhfsEYICPgOTFIJwbpxqzPRDUVFfabF332Z7efGbQvu/fbP+hc/UKpCJJBReVo9bY+1L/ujQnotQVIOBbGmnBEUeTHExCp9AvYwGi2FitXrrTW1sofXXJ287GHzfhhSWFCagtLgqKi/051sPyw/vvnbwEByyykFLx61YZhd9/ScM3zf7n51uKSoj7r50gQeNDVWh7soe8kmVqQhPxEwUdEXFtbK4gote+0PX4vykuot1dba8I4wdi8yzWIxb1oId9OyYVBCQYQfB1g4nAXkD5YB2DjwwSBEGD7yqKNNRc0PvAoMxfut99FQVNTk/zEwBfx75z4/ku0W701XlhEpGCNZUiXsH1rBtffugBUVBxS3Chsb0G6YYKhYiA3wcYpEGNHj8787uov/uKb4+ZMXvbE9V/q61xlpbBB+bAJzj4nf/VXy+nER2WsGB6M0ax3YiZ6WCF27vjwYq4TdbSYuckaY+R9tzRce8h+kx9V0sqoGTs4xEUQ0bKa/PhqVPfb9X4QC9bKxAaW7zcy8+w5P7/me38sSiiyRrMgEVm9nfMbuxo7Nv8ehT7xMbcNWQD4/c+uvHdYTUXP1tak9K1lNho6CGC1gfZ9FCRikCpcSz9Yh6JIXpWBXM5it2EKpcUEk9NgNrAcwBpfWj9rnnxlxb5fbrznj8xcVFdXZz4pAIZUq3ohpEo5XtmbFI/BsrXaz0F4Lu59bD3aNqcg4w4MHJAMEwvheCAZg3Ri1sg4jRk+rPOuX3zrykO5adaOBQ+f7Ot+7QqLIWP2c4Yc/PU7Sve/4jvG9EghDTQM5+1WXq3V5uttIgShCetSu1wj21wuJ566/8bzp08e867VVgJk8kuxscvH4GLs/IRhBGoOR8ZlANJtyx+bduaBNOnkU06+SUkj2LLJO27OM5rzG/5AMOBPHnyR9ZNS0PY9xg7/VVcuTgNpNoAFtIE1FiYI4HkuvIQXBqp5vblIsYoQTmyNHGIxaQjAmQxI+7A6BxP4YJuT6VSPefTlVZ8958f3PJAH4Mz6+v9oDFhfXy/C7YsQbA24cOgSIAY/F4ACH5nuJB5+dj3I88LhPUVgpUDKhVAelFfIViVo1NDq3j9ed+HPpg3cdG7XuqcOSAW+JmNl0aj9xPCZ3770lf3P/laQu1yYrNEcBIAN5yTeKwUQ6T9HH2485uZXMOy8D01ERH1X//iKL48fXZ2xWR8sJL9nuiYvYyJlqDkt8xZ1p/q+dFyVHOgxq+fceuyffnaiPOiAg54gBJJhDEWx33uEMkKuvf3EwQcAkydPZsugh+/7xS3Sq2rZ2CallNZqo8HWQusgFH8v8MJ9FELsoq5FEXcbKIm5OGRqAZBNAjYH1j6syUL7WUgTyOxAn3789dUnfuaKO+du3L59j0ihVNT+m61g1IKTjY2N4cKVWVMYAIKiMfOzmSLobFY6grB0TReWrOkBxzwYoijOiwFOAnDj0MLhiopSvv5HX/ztPvqPp6a2LNgHHNOSJBUP34+Gzbjk/Mrdjr7x6uPHayWutsYEARhgE5Y1YPNQw3vmoAcHtvjvVGLNzJn16vhDp82v+8zRXxs6tEJaX1sREUDt4Ee4iT0/1M/5xYrRlkxmAlRM+tkOu+XVOy6Z+3D9qlEjRi+ADiRBWMpz/cgCIlT4SvUn058K+BobG21tba0oIeoaN2bPn67eEhBZn43RMCaA0Rpgi/KqMgghIPMKVoN1yfBQTaBx1AHFIJGCCUsuYJ2FDXLwgyyIMyro6zJ/e+3d6bU/vP+V6+574csFcc82h0PYora2Sf6r9UBmptraJpkHnZQwf31twT4/+cVdIyPVBCqM7bUsQyXt0IYEjF21KQk/YyCUBAsn7K9KF9KJAzJmC4srxBmnHP3r04e+PLtv8+sHZzI5bU2GqsbNkMMO/+qPK3c/6o9v33qhc/aMs5mZYbTWRBbMBmwDcFTWyOcau1YLpFC0q+XD4GBho2aGvObyS/503OEH3hx3HWkZeueKLrFzX1wEPPEegfawOC2lRKKgmLJ9m7n17du+Ou8vv3qwpqq01eisILKcz3wBJtYGXR3d3Z8K+PJCkfWAOPWO+jsHguLXMxklBLEx1sAaRqA1ysrK4bpe6G4Jg4dBRBACSGcDHDDRxYThLjiVhrABOAhgTQCrfeggB5i0RKbTLF67o+LWR+bffsI3bnzumbfWzop7yjY315l8/bG2tkkOus0PAVt9fb0IAVcriYibm+uMksL0Mu/25e/86hc/rL9pweJ31/zYdSR/4xvHuUTUwU7Jw8rxOPCzdtP2LIBYtOxZhuUV14NwPEsiJvabPv61311cUNS15tnD/UxSC/goGTpOJiaeemPp8COvmVM/U+174a26sTEcWCGCMiZsZYUUqMEbDCIOmSRExEQQ0hEhk+WDetdsiQh33/TjS/fba/wcwVB52j7l9yztKl83KDYRCT0Kgue5cJVDwokh17GoqCzzxPd//9vGP5Qk4tlQkZ5Cwmm02sJPZs2nuXuNpzTVijoif926F26kdQ8dZHqXMos4WFjYwMJzFQqK4giyOUglIQZX0oeZUy4gVFYSPnfEEFx9VydEUSysxluCIQuCgmEJaZV00h3cst3ntq7sMUs3PXzMKd+//ekDJlb94rKzT3xdEmWbm+vyVjk689pdHqpm+37SATPHmp+dt88Tz7124WFHXnDa+pbO4nRXK1z4R/qB8RoaKACAWNXYF/zOxCXS30FdvRxmtkKEi6fdBIRXiEB6VFMcH7j1u0c8nlx+23UmyDJJDyWFJYpGHv2ninGnXNp0hpWzGuaaXccFBAxgArDRUe8UO7sJ0efEgkGEXCbrG20+ZD8ycX09ExGZjTsyF5z+xa8uWLRsTaXwPAtjBES46XOw0B8RO/KrJ6QScDxA+RoyZCuY7PbXh540rezQc887/7o77/xDYybwjVCuBEw4aKSMwD+aSP5PL/6rq2s2zE0SOPKR1sz6ZhVsq031dRvH9aS1DG2BkspydLW2Qor3iWsxIIihswFqjyjBL5t2IJPNgTyGNQTBDAgDkg4MAcL6BO0TjDabd7Bs6fJPePWtVSc8+uLy9V9suHveHmNHPH7qcYeu2L061hf3nA7f30kXj8UdpNJ+2aJ17RXPPPPS+JVrNhx1xOe/d9L6TdsmtLZ3w89mAUdpiinR0tY7+g9/efrwxkY8D4Co4pi3B/wnd1TI1hprBIMcCpfDhBp+ShZachPiyCP2f3GcevX4VHKLEK7UcaGVKd9/Xc20r3yz3l4oapvqeSfwasFohg2MFlbDWANLYf3MWgOCDW/wIGOFYKy1/6iu29hItrapSY6tiW+6/dHnvvTTn93y+KYtXZY8l2Et5a0d57PhQanicPJQCAOSDCEVHMeRgbEmtfnVo2684vP9bW0nPvCXJ549y3JgwIqYGUpBfPr7drGCieoCZv7GjoHtB7rJZ0f6zFYwi4A1EgWFyBQWwgR+ZOZpZ9GSgHTKYurYGOqOqsHdf+2AU1UKqw1YWoBDjToSNtwISQw/3SGF3w+Kl5o2UqKlt2XcovVt40pjqy645/FXgtJCr3PvM36wngK/XSGw2bRPrhcfdnDdFSM7e/qq+/pSbl8yiVwmFVYlpLDkOYKsVVZ4uidj1Stz3z6dgOfPmDzZSRBtbVl80/Ox7PZzXbnZhAQ/DyRdSOWCJYmKkuL0j7641w7dettnc0HaSkGkqiYbZ9Lx3ySi/jlz6tV7FaKaI84dO5bDmA9RO4sY4ee7REVhO4vUP2OuN9fVmdraWnnR6cc98bWrfvOjex546pq+dKCFIkUcajvtBF60/440SIpQmDVa2KikAClHBpl+ozc+e9pDt1907/TZm55auvSdE0GkiSFUPCTGobmZPzXwETXaaIVmm59ad2pbqv1Van3LMSrGRCALRnFZGXo7O6LK/S4zAcwgKHAuhe+cNRTNz29DOpuBUBy1gSxYMtjaaB1VWAsz2Sx0tl868WLEvBJrfLY7MjmxvbPPgdU1INQQa0D7UUTEgAkA64eNZiIrPEfAGkEaYW2CGUKwCNIZLF+24iTLXEVEnURAwZCjbspuWfT5knhGAi5IOCDpQjgxS05MDK8pfXNC6aph3JeGkJ4uKoi7qdI9HyosOeCZULrtQ1QDmAGtIdiA2Qy2sMgy7GAlwxLYQAjIQXLKP47FDQB567Xf++lnzvv21MfnLDkz8AMNQWqnOPsuoT6H8aBSEtLlcJ2rEFAEQBWIdO8OE1t9/+cXzbnm+on7fmP4uo3b9oYVbHwfn1rC8XcAnFOv3ILdFyYmnPLtopppEkHGECRsYOEoF4mCwpDTnV9/EOW+JC2yKYspuyl888wRsB1dEBzABgFgA8D4YSZoNKADhCJ2gGCGTvcj17tdmFS3UjYrlDAsJCxZ38AGmhia2GohrBEOrHAkC0mCyCq2LNhSJIIYsaytESAyW1rahl9z45/rIgMtS2smLbSxkUun1sQAByZkrhBIuuyqOD571J7bkdow3VqCK8nJuWMy8QmfaWSAZs36cOqRtcYgvyZ1kC9nYUV+jNGCrWG2JuyVMz4k5vu75Mr6vi+bbr3+2/tNGbvMGhv6VexsdYJCOT5E+4OloyCUhJIKSikIR0JJQezERdC/RWDLI5e++uxv/1pZUbElyKaov7un/78CfABAsxs1NzXJitEn/kGOPeWWwiETlPUHNEAwZFBQVAzluIOL3/OsbAaBpUDQ248rLtgde+1VjqBvAAo+jPbDYNzkwjqgCT8fZFzAQLAPk+1F0NcK29dGlO4RpH1JzAqCFQgKFtIGLNhYgmXAGLDhQS06RjivYFmABKN3II0X5877XMx1MXPmTAIRFw7Z9+49J42goqJwvUFIOFEyFo8Fx+1XWIigbyTbrE6UVhAXTXgsRpXvguvpg4eWZhID0IGfG5Qcg4WNgBiCESFjyhqQsWD+6KpQRMRNTU0gotbfXvuj8/beY0za+D4JIXjQle/iwklJKOVAkRwUI5dCRq4YROSw7dtQUOW+9fU/3nHVn0oK1EBmoCf2XwO+fF+Um06XVZPOvESMOuGG8mG7KdYZzUxsCYgVlYRct3yaHwkSggNYyyhS/bjlx1MRdwMY30LZABTkwFqDtQ82eWsYhKI2RoeE1Yh5a20aJtcLzvUA2QEglwSCNNhkINiPGLk8yNQgtiAyYNbhIDxsaP2statWbTzod7c/eNC8efNMbW2t3DT0lHurx+6z6uDd44L8rJUkASeBRKKwd7eyPgFOwgomTgyFO2TKg2FbdMo/tFLW942wOTBCUUayEYkzYhODDShMRSBpkKbCHy0ZrDP19XPUfpOHL/rKl864eHhNjTB+YEiIQT1ZEe0ZBolwAY0rIZSEUAJChkttFDlQjkOWhUX7gsrjZ/TWXdXw3TuLqoalmJlQ/18CPiJi1DbZH12ZE0OmXnC5GV3706KhkxTlktYwW6mc0P0OPnWD5g9EjFx/GgdNVbjpqr1g+3oBw2BkwcYPZ0OsjkgIIQBhdo78ERuQpbCOYDXYZMKCtZ8G/DQQZMBBGlanAZsFmyxgsoDOhbGgjYrcVhNJsl29far58We/I6I64lii3pL9j2g8cr8hxJk0Qylm4cABZQq4fxRMFq4Tlz5XbPOK9lgQtk7/icQvhwksWwOyBmQtYMMhrPB30iAbPlyO6zjyY8ogNzbO1pg5U33rnM/cU3viob8sLilQxhiD/NYAUgBJSKXCmE9KSCVCNywVpFAQItrMLqUwvm/Q9ubEb3y2bJ+m2296s6GBiBuY/zssXwTAhgbmq34UiKrdP/cjZ48zfxYfdaB0wUJba6TjwokVgEI7EwqK27DEICGhO7rwpZPL8bPLp0D3dkBZC8EBoC3AQXSTdAS8yBJaPWhBCeHniG7a4PwBazAHkesOouwydOEhPSUPZAuwlUEua5evXnvyQ0/MPbi5uTmor5+pgMP+MuOg6SuG1DjSD2AADdYZgh5wwAFQkABE4lmiwh3RPAj/47OyBLYgY0HGROFEPuvNU5nC7oLOGt/+K7d53lwTBFr++qpLrpp14LQnHMdTIKVFtMwFTCByQI4DpdTgx+DmSxEmJCLaWWb6eg0yb81Mb236fWOjsECd+J+wzsV/ghnS0MDMfJUoHXb8FUXTzq+LDztoe0nckUGgjXQdduIJiGj8jy2H/U0Od7v6HR34/rlDcN33JiPo74ENAjjCgAIGI2xDkTGA1oNAgo3aVEYDxoYgzbetOM/KDZMLivRIaBCYoQxY+HcTWj9HcVtbh3vHH++uZ2Z68skkEZF/+GfOqZ990LQUp3qJsikY2EQmYIFAA4bAsdJ2ZhCqJtM/03olAWkjwFmYMOHIWz1rwCaks8No+H5g/jX+JnF9PTMRpR+77SdfOWDP3dazgSLpmpDhHG0WchxIRw0mHiQJIlocBRFS5shoACz9zs06Ebx1brrlsSuJms3atTe6/yoAxX+KmkTUaJuaamWidL/m8oOuP4hHnvBc6dAJ0gUIUBrKYbAAc7j8z1gLwxqSCLnuDlxxThXuuW5flLkafjILRSayEJHFygMqbw2j3mh+kQm/xyWbXS1bpDlnogl8G05rwe4EI1upc75ZsuTdY35718MnLFy4MLjwwgsdonGP7DZ82CVlBSSD/m7uz+Zi3amYQOCHxf9Y6Soi8NyPqnKUb6eBwXnrG2muEGsI1gAMmAL+e42fj+p+ydbXsyCitisuO+/zk3arTmo/IBIOQyhIRwJKQahw2zpJAVIynHElgojOiqOwB4ErMx3vGqfn5WtSXfO+OmHCpTngXxt7+I/OSuS7IES0pXTKN48XE8/8lqg+dHthcaFSQhOkMhAem5ASGCZ7JrDCks129ttzji60c+88gGftl2C/p4ttJgclQk4a5QecTWgl8rESENYGEbkvNlHD3nIEOLPzRkexFQYTkUiPWGuQo6h1ezs/8Oc//oKZC2+77Taz774XOr+84Wf3TBlZ/rzNdlPSF+6aFsvQAQe5AOQUbwvngKfwP39ALZENp/7Y8KA2Xn56LH99gAUba/E/CK8aG8nW1tbKkw/eZ8H5dUd/u7qqWGjDFo4bTVrmrZ2EECLiHPDgUhqOhoqs1TAmSzZwhe5ZCbF9zs3p/g0zieoM88cfe1D/eYJmnWGuFyDiAuC3Wc4+m1330EW6c9E5FV53ZTbZAQMgJgEpORrqtXBcAQz0YM8hwIvXDsNtT1v8/MEebGjxgXgCUMJGmmAgkkQczejbSIfN7qIczbuMANLOOhpCGzk4DD1I2SSAYQRJMstWrJ545pe+djGAn2cyPSrnB/TDy77x7UuvufH1NT2ZwjnLB4qPOYJNLusrz8bS+MhNTxPGfDvnIgbnYy3riMYUTmg4ypH/eElPA4WiSc00N1Jq/aDXoYd+w/vmlz931/otHZOaXnjrO71berQ2LkEwSemSkA6FXiWSYrEMG8XG+eqCDSVxKbBkRefrBCEeYuaDiWjDP1m78MmCb/BgmqfQ3PqZogkdIkax1QAuY+afprfddyW7q+som/VyEn0E1gTo0FeSZUckAhNUSJGJffXzY91TToy5TS9sxT1Pbsf6ln5hyApfA4HWYB1pjJCwELAkBIWDmpbCToEdPNCdcwk2YnrxoDzYYAOeAZJCpNOBeeOtJT956tU355x46Iy36+vr3ZNPmrniil/e8tXfP7L8vidf3VZ9+UHFKPQsNKfLBnXA/3loQoNax3anmk3eeoeXbg3bANoP63wzZ86kuXPnirlzG8QsAA1zG210s/kjKvnrSy+9CY6S3/3sN67e5/H2+UcUFxYA5YVwdW9YIQBbQDAMC2ZLbAys0YMxKFuGtRZsjQiMNom2+UP68ZtHmfnY5jrq+CAl1E8UfMws5jbMEkSk31ubUnDjhcilB8oBSD3i7NtiNW1vZ1OdQ4O07WMSWWt1TkoP8ZKYVV6BQ1AVCkWbA6iOYYD7rRmQJ5z1Gn/hwnt0SUxP7elr242Umm6s3aO7L1WdymovnQlE1s/B6F3kNEEGghiDq2tspE4Vam/u7DIARFGzi5mF59rN67eqq66sv6+9vX1WdXV168yZM9XPL//6/V+qv/n42x949QtzV3D2s4eQ7OnZUQoA/8j6DFKdSLqD09qD7QvBzNayZoI1AtJ4RQUKiYREoLUgIh31eO3ObZu2AEA5sLkq27e9WvuZIpNNqiCbEURGsrGWladZxbUSsWS8tHJAUkWfWzjyK9ccOHfGvkO6J0PpA03B5inIddQozglQDsikoLM5GAMmyzasCLEwJuy4WKNhWMjegaRO4IU9u6moqe5h9/Cm5jrJHBKUPjHw5bWHqa4u/zRaZvb85IYJa954fnJ6YON4m+0ZLy1NfuX2s4ZkUz0FVutiYTOAzclETJFSEhAMR0oo10XACkK5fiIR6yUn1u14JT5kUXt5adnSBfcfsxHVEzYA0x4H0AmAHn8jWXHnzT8do0z3IRnWh3R39o3r7OobPpDMVGZzgcwGBr7WUWZsdrl2zXkXF1ofHS2Vk8QCIhYjdLfvmHDtz39zMoDbZs2ahXnz5smbf/CVby5b2lLyuxc2nnzijMDK/k2TPoJMNoNCyYm8oAMzDIyF9bNSKpLllWWoLitqrSovesNLFDybLd3nMSJp08yjJdaU2ZZ3p1vbMcVkevbqW9IwgTP95UGQKnAoAJkAxs/CRNOExhgEmhHkNIKAkfUd5AwySnjbzyir7k1vVyteby9dOGTcPq+P3G12r0z4I5FtG4qBddNE/7bRKtldKNEvDWskszk2DBPWxElYmyPNQvV2tOoC/fhhbStvbxiyxxcb5syZqYB5+iPqAP1PQFcv5jbMFbMbwx8m3QR0LjV1xUs3ndS1fvHnu7ev3gOZLiU4BeNnYHUmlAyTBAJbJQWUq9hRjlWKIBVBOAqSFEGxiCklPM+BcCRICCS8BOIFpWA3BlKFSJpCeIniLbKgcpVTMWZ+yeh93wAmvSm8eC/7WTBz0fXX37Tbtu6OGTs6uif1dfWP7UsODB1Ipmr6+wcS1tpSEDvaD0LWsATAwnqe215WUbpt+NDhm4fXlC48+rAZj02urV03lcjP0+8bGxvBzIWHntXw9DcOWnrI507c743Xx115xEGgbEgK/UD3owDoE047/87nXl38RZPLMimhSosLMbyquGPMiKrnKqpG3XnvXTfNjcc8DPR3z0D6mX39ji0nkd96kM20lXrSD4vlqQGk0inksgG0b5gZxlq2JjCsgwwCY2SgrWTDZI2F1blBKTRrBQaSGgwPkA4yvkDSFCJePLwjXj5sS2nN+LaKkSM3lBXmhjumbQiS24ay37Oby90IUn3oG+iDNWzYMhvrEENzvHy8ciece075mGPv/Yekiv8p+JjrRUNDIxobo6iJuaR79RPHrXnjqS+3b1sxS3etUzrVCUUCcDyQ8qAcD04shpjjQbkKUobKVUIBSgGCTaRkZQDOQQoBFgKGNRisHeFZ6cRAUoJIkCQWUkJ6joAbS8BNlMLEyuHL6pSNVT/vloxtLhx5zFyigu356/ZcBeW4SCZTsQ0berx5b7xWnRroLtne0hpPJvuC4SOGYGjNmPQXzzplA4CU6zocBPpD5j9YNDYSL9/IQ2694UvPfOOM4r3HH3HN3kSFS/5B8K0I0EefcvY9c19765yqsiLsvvuY5yZPnnT37395zePxgpJMJrX6AL/tiVN1pu/UhJOaCNsLJLuAVDe0b2CNMIalDcudPrSviWGUAEBCQpILAxcDgYNAxLOgRDeLgg6tnAFjnB2Om+jN5oJuHShfMPosyEhh3NRADwZ608pks472ily3dFTJyDET/MJh49+yY/Z4uqZj0V46s/ok9LXsl+vbephjdihku5FLJ5HKaFg/FcSHHcRFB33tzOLi/R7lplpJdc3mP2b5ktte3Xv5a49f0Ll55Tlxf0dp4A8gaxwYtyRZWFze6sZKO6zntiQSFalYQVGf44ntcBJp6XiBUNLCWEAg5piMx8xVUnCVNqkiwf4w1n1FIpuqsrlURcINVExkAJOC72dg83G6UJqEYiGIiDQkCeG6nigsKQIlhiBpS/udgtELqGrSffNLj/zrbKLej1uOqq2tpcmTJ/MH7YarbWqSzXV15pE3loyIb3zkpX32mnp3zeS668ISU535AOUH2dTUZM8+7+JfJ9PpcZ897dTrLjjr1PnMXJXr+OvZpnfD+XFq2ZOcbiCdg8n5TBAGLKM6uM/wc4LZF0ookFMAXxahPxvzhVPSaWOVm60qWc6yZEFAlcsSE/baXo7yViIK/n1RvYTP2w7QPUt293es2dPPtB+R7tw2SeU6imKmFenCfbMVB1x0aKJk30X/wAN8fPDlq9nrl7w0u79j/aXt6989Itvf6sdj+q3yylHLRk2esax6r6MWA2WbiktKB9LpNIwO4LjxUMM5l4sm8wET6F2EaD7057lAT01ny4o9Ob1pnEm1TxRBcj89sGOIMr0jy7wkTJCCn8vCWMnSixspJYX83QCOFNItSABFNTBy5EYumvxEqnDan7+SGLe4mcjMn//L+LJlhfqFF16wQDidF9bGGvKFF/4I88yyrq7O9HUsmdjf2zlj5Pgj78lvQP+g85s7t0HOmtXAJF3Dxp/Us+HO79ue9adVFA6UcLoDOpthqRwDqQQ7HBIjTSCE6xDiRYAtRDbtZdmrXGdilW9m3bKXnILpb5SUjGohotz7z68FGLJ44YYxbf39o7a0tBRm+/3yrds7nLbWDgcCJZXlpaP9dFIG6RQzCU54LtK5VGcuCLpKioq7qopLkjGybZMnjw/22mP0mhn7TFn1HqsuY2CdGZne+Ow+ucyaw3O9LbP92NQdo6afc0o4o/RvAh8AzN8yP16wravOs72O53hvjzmgdoVXUBR0pgYqf/77Z8Z2bF0/edv2zVVdPQPVykuM2NzaIYdWV00QkkpymYBJuELGHHJcxziOG6RyuZbK8rKgpLxsQCrqKC8t7S0vLmoj4hV77FadPOHQPdcVE3W+71CLe7a9McYmV85Ctu0oqXtnFFB/tSP7YdPdSGcDlsozQkpiSRAI4MZiEoWVMBie5eLdHlbVx/6SaMg7AMBNtZJqmy0I/+pahn9aYuCmJknRClTmzO4da5oaMlvfrCvxWhydTENJaVQ8QUq6JJSxgphkTAoUlQCoRoCy9dopfyEnhz2XGbL/omGyejMihVpmFovaeqYu2dA5tXVH115bW7uGb2/tH5JJZSYNpLLVAxntZgKNZH8vAt8gyPkIghy00TA2JGwIHYSj62zAzBDMcAVDwkJKi8KYA5eMP3n8qL8+ec+vzmuuI3+3oy4U+150m6b3zsgI9K0oRUlzP9Bg/q3ge/9ryYaOid+6vP4Pm1u6D/AhE8l0BrkgQGAkWDqhRFeekibdMMgbXCAj4DgxCOmFlB4h4XouPEdCCSCuLDwHAwWe2Dysumx7zZDKVSNKvBWjx1a8cdaRh60jonT+CR/oef0g9K8/Waa3HZ/g7ZPBnUB2ACaAJRVnK5iEFUyckVRYhECO87loyu1uzeeujzSd8WEW66MCsKGhgd7vnuu5Xkypa6S6ZhhmdtrfffCy/s2vXhELNpVmU91wPE97blwqD+wJaT2PlFteBXhVCNTQHTlnxHN+4Zg7qisOfc0EucGH77ZHn9ln3ebszE3tOw5ct7VztG/cSVlWIpXykc0FMBaw2geMgYFlNmwFW8D6bKyGifrZsIby7cZ8y5GthjWGoYOI2s8C2geML2KJIhwyfVzTCw/+7hwi0juFg5rF3Lk309y582w+F/iPJBz19fXuT6/5if/yipWHfOeKGx9YsHTdSKM5lCSQgiEkS6nAkWQXlBKSnJDTJ1WoBEEKJBVISI5mTUOeY5i2wVgj2JKwJMNxQgHEXA9xaeCSb0YOrWgfW1O5ZGRN1StTp417/txjZrzFzJCuh2zX60dlupd+1s21nujFusYgsxW2NwWQMEyKdC5gNoGMFVUgyaM7nZoZv/FqTr4+v32S9r8owL9Bi4m5XsxqaBTzGqEzmZXHrH/pruu4++3pQX8HnFiBiccTQsUkC6G5JBaTxdWVyLqjUlw48TlbtNvtBeWHvUREvuNI3P/Mq3suXrn+1HfXdxy6dnPrnr05Xd2fI6TSPowFQBoSwjjKYSEEpBSkpCJiIgsmZoY2Aaw1sHkaWb6IzGaQXAFm2PxknbWRzEnUBiTN1pKJcU4dceAeTz71wB/qiCgzuGbhY3iCfwl8+Y02zU+8Musnv7ntkaWrt5fD87SAluFgbvQHFFgQWEhAuEwi1A5hkiyEYCEUhAx5Y0wypPEMKuIAzJYYkai4MWyt5YANWwuCCSSsATkOCj0HFTGLIUWJFbuPGDZ/4uTqZ398yblPEFHAzHKg94XPusnVF7rBtmMouwm2P42sb401EH5WW9ZZ6RVUI6iY/lbBpC9c5HkjFodt3g8PlvHRtG1kXV2dcWMFWD33xp90vPvUjzJtS0EkTKwgLjzPhadgY4WerKwZCRMbs5HLp9xVMva0PxEltirl4La/PL3/onc2nbNyc+sRazbsmNCf005/1oSyD8wMxzGOUkSCCEISSUmCBEfzuizJYeQpVKGQPBsdsoMMG8BY4sGlfyGHMBxqCoiMIbAlayOGDWxINICG8QPtKVazD933kWfuvbEu0pD5WOdF/yrwfv/w34696cY/PvTu6i0lMpEwLEmGzHjJEMKGm2skIIlCoRBFg5PyXmyQsEiRogEhYlQIAWKBIPBho9jDGMOMcLKGEDYqBIuwA2sDtjoHBL4CGK7jobTAw8ghpdsmjKp+ee8pY+/6/kVnzg+X4C2bndm66Guif+Uxnt5a1Ne6A4EhExgSfjZtEq6ngpKpfQXjT76yZPgxfwjXZn28fuVO4NXKkFjBoxb/5Qe/61r95MmpvhZbVFQON+aRq2ATCSmLq4ZDDjlgS8GofW4sHf7Z3xCRWd++fsKNf3ju1JXrW89atallr44BjWxOI9p5Z0hKSBEOlJMFQwjWoQQuAUaAJCnpwlEOZMRYFlJGkrnIz4dAmwBGBzBBAGNysCYXdfkMEAQ7WTawFtZaCIZkENuAgIDYSh13lDPrgPH3P3X/788jIlNfX4+PujGePmZALQTB/PTmO2rvuufZe9a29HjkyICNL8PxMkEQDoQXg+s4iHsxeHEHnuvBEWyVI5OFhcVBLtAtsZinvZiLmOeRIGnBAtpakfN9SmZ8ijnOkIwfxNOpZFwbdnOW4Bsgm0oh8H34xgDsh0RTwIAsCxFyGznISlgWShGqijxMnjhq4x6ja267/upL/1gonVY2wcjspj/+JNe28Fw3uY56+gashgPtMxt/QBZWjYMac9IjVXucey4RpT8uAOfU16vZjY06yGw59rV76u/oXvHUCM057RUVKc9xTNy1csjQ0XBH7LvNHX7Aj4dPOfMex43Z2x975si/Pf3GN5at3Xb0praeRDIXhJN1ytEQKuqGMEIemhSgUCnfc114rkLcFYg7AkpQpiARHxBS7igvjvslJUXadWNZAtLW6iSYcqy1IUGuIC7I5bKOCbRrA7+gt6+X23p6lCPVsEw6W5Lz/eKcb5ALNLI5H76fAXLZMD6UysCYoFBx7Ogj9v/zX+7+zRfDlvVHs4Afx/KRUpIv/9lt599xd9Ptbds7JIpL4DgeCmIxFMUUYp7sr6is2lqQcFcOGVLaOmrUkB1FscTaRKxs3fjdx/dP2GvCwPgiZIlo4COA3V2RSpWveXNVweYdrUWpdHpsKqt3a21pH9ra01eTTAcTe/uSo1K5oHogZzAwkELON2DtA6wthDACbK02ClbLongMu48oS40fUXXPGWed9tu6Yw5azXrjtO5lf/0p9S45Odu5CqlU1vjkUW6gmwsTlTI+6bNvjTjgOxcQ0fKPCsA88Npa3j5mwf3XPNy+4uki5Xk6niiQEoEpLS1SJbsfrIdNOubXNdO/2BArSKQbfnnzZ+a98e4PVq5rn7GtrRPWMCiWCEhKtsYIWEiQIuEqJOIeihIOCjwVlBTGW4oL46uGVpRvHV1T2ZKIOe/WVCc2Td19j54D9xnXIST1sv3X26Ublm2onrfynVHbdvQMT2aCKVtaWka2bG0Zks4E03pSmZHptO/29XQjk9Hwiopx4qy973nkjhvOi4BH/6xMRR9Vyenaa6+z537tB9e/9NrKywcyGkPKVaa4KL6iorzstd3HTVg/dsyQ5ad88fTXxwqZxft+Y2ZOACgG1jnZvjY3MHYoky6FCQRYa60dggEgySqSPb7y+goLK3Kx2EQfQL/rxQcCP/uBB3Tf00unbtu+7uAV67bsvnXrjj17+pL79KdyVV29WQxksmA/jZC0pwx0xnNjLsbWlJk9xgy/70tnXHTNySdPXMsDbxy9fdlTN4muBRO7WjZZTR4CP2XjbqEqmHjqmjEzf3QUEW39sMLxIPCillLHpoVHzrnrB4+3r/xbIl5SYjwHJIQWoyfujcKJx83b89gffdWNJ1b9/Hd3nP7k39743rub2ma0tPWGrR3laWjfgSBBbgLFMQ9VpQmUFse2VFeULRxRXb5geM2wZYfvP23FMYfvtSkI/A86FwdAdTa7It7b0RGzwUCpJ1SVkjpORMoK4cGxEJYyDMFSKD+w5LMWHVkS3baw2sSKJ6eqndh21rm/b9EoB3Pmv7bb/DcW7b9q2aY9N3b17tfa2rVXkO4fcsDeE5+66uc/PuvB3/0u1djY+A93o9BH0GKWTU3N9te//cNF8xYs+bY24oGZh8x+9ZAvnL72kHLaDBDcRAK5VHJI0L94XE/bmhrOdU50HDWdOFUq/IEKx8EIUrpEcJaE0dJxosEAbSPmLsDawBhG1mdkfGs1SzYsjYZMShEbsFa0shvvV15xpxBF6y3FVpcNG9dZUH3QIhKqPa9XyMzub+954YBlqxfP3LR222Gdvb2HtPekCrsGcvAzGUCIAEYLx5Fyt5pys9/UsTff/IfrG0qATOea+29Ornr6glTL20hraWANW2ZVPvnUFeOPuf5UIlr7YRYwn1z4/asOffiGbz7TseL5Qrew0CrkuKSoUJZNnD0w7dgLGoZMPOE3dz32t/2bHnz6R8vXbT2ppX0AsOwDVkAI5cULUF2RwNDK0o7SosTciRNGz51x8IFvfemUmW/5mUx4810PQS5b0r39lamZ9i3js9nuCQ7pscbvKeZczxAJqgK4SoqMI0jLuKco7hIchyAlhTp9UoZ/KhkRGBnwGb5vjZWOZY751udWI7zuQBV1E3kt6ZyznIpqdpQP221HPD5tITluEjrIn3tp/a9+d/TmNWtOPHDfaS9dfOGF97w/A/7Y4Mu/wRXX/qniNz/5epcXV+jt6i7o3fTYAb2dOw4OBjoOkaZ3kjXpYUWu9QqcNFxHQ1AAKShUSOcgCpZltOjQsDWGmZm1NmSNhbY2nAcyILaWAh1AWwOyAmTD5XPhCi0HIA/aSlhViKyOpckt3Op4xetQUP1OYdmId2qmHLe8pHzUqv6eXjBzccONDxy8ZOmyk3e0dpzW0tEztK2rD0HOB3Rg4omYHDeivOO4mfv/4ve/vvaGVM+bx66fc9ftpuXFkd3dA8YEhh2HVPHEM1+bdOI1xzYQZRrCAPg9RdUoOZn62PVnvLz5zUfKZCJhAj9NQ0aOEaMPOOPNg8/8eS2A1s+fe9m1b7677rub2nthfRNAOo4TVxhSWYrRQ4dsqy4radpz7+mPNHzzjAXxgkJNUiDd3z62bcWzB3VtXznGBOnDba5rok62l8SlLXNkDhJZCGgI4rBkIkKqoJAKQhGEFKykstKRkA7gEEFGop0kAZKDagZCULiph60d3KNijISxBto4yAYKGVuItO92kle0RiQqXmdZ89buB352UWHxyLWpgf6dAyT/JPb7h+CrB0RjSI1y+lpf36d11eufH+jYMiPTs2kPj/tKiuMWrDOQgsGK4bpxdj3Huq7HjifJcVxIpUgqIumEmyotGJYNkbGRnJqFNcxsLQIDsNFsrGUdaLCxHBgGa8tWB6ytYWMMTKBhjCFrA2JLDpGE47iA8GBEIXKiGG5B5ZpEouZVVTDshXGzvvJGorB4YzrZr6767UP7LHrjlYu2tHV8Zmtbd2VvRw9gGKVlMew9YdSr55x/7kUX1B7fsuXVX9yeXPvX2o6W9SbQji0oijtle537wJTjr/78g/d/RtZFDfN8PYuZi5/4zXmvbXj1/qnkqICDjKrefQbtfsjnfnb0edde8d3v/viYp+e9+Yfl67ePHejNMeKCKkoKMHZoVeeoUcP/esjso+687AtHv50oLNLp5MCYFXNuPgS690vp9g1j0v2do+NiQJBJws8lAZ0Ns1dBWihhHTfOSqrQmClFUjkkhaRQfYCIpCDHcSClIqkAJYikCIeEKA/CQcFwMEfrLYy2bLRmPzCwfo5zWR+5rE/ZtC+0DohAkE4cycBDWidsQcWE1QVlY54buedhfykZdfgrbHz8o1j5Q8HXVFsr65qbzbsL7ru0bdHTl/RtXTWhQPXCzyVBkhGLJziWcI0XT5AX98iJORSLeeSo/6+9K4+Ourr3n3t/6+yTfSN7Ahh22VVMggpofS0PjAtIW1fsYuurlbZqSahaWxWxtXbjgT5abQ0KWKCyFAgKlh0BQ8KekH0hmWSW337v+2MSwVrU1/a8c9rT3zlzZuacnDkzdz7zzb3f72cRIckiZFmEIIqQpfjUAoLAQTinYNxxHM4cG45jE2bbhDNOmWPCsXm858c4bIeBcToQHhN37mS2A9txwBiDbTswLCfekrFt2KYNTdPALJOZJqeiSCG5PWA0AOpJM0R/Vq03MGTLyJtv3wgM2w+AzL/30TktTeceOtPePrG5IwTYAoYV5cZKJ415bNXKpS+c3fvL5c27VtwbOn+YWw6zvEkFcuZVD36j+Jq7XuT8VxJwv11VVUWqqqrortVP/PaDt569TTdjlggupY26jk2/bdFdSUOv/838ux/8yc69tV9vabtAqOpGZnoCirKyagoK83+y4oVH3w4mJhuh9u2jjvxp8/y+zpM3Wv2NJTzSLlqRbnDHAHPsePWSZKKoKlS3CkmWIIoUihLPhKOUQhQpBIGAiOKAHgMAZXEJ5IDpkBSPTeOiIHIqUE4EwiGIIIQSSmmcYOsw4jAG27HBLAe27cAybZi6BcO0YRomdN3mjmEw0zB5LBYjsUhMIJxDUIOwSQCpw6dvnTxv2S2EkP7LAfCvmylWVwjk1jechsNrv1b3h+d+1nF2NySXArfL5UiKBNXlpi63QiRVhKLKcXNBVYIcD8TjsiRySaJcFCkXJBGEckEQBQJpYKwmKQARAYfCMSliGnM4XIwRyeCEdjtMikKQTZtQHSb6QYjOHNhxuhoXOHOYYzPFYTzIuePnjqVaep/qWEaibRk+W4uAsBiMcC+Y3g9iRGFqMcgeL+DKAPcWnk3OG/GHklnffwXA+e/+aE3OgT3rHzvV2DbnfGdE8MoMZROHbVpf/fIDkfNbZx99+/mlsYYDNKprjjtrkj323heuTk0Yc+jAr+6XJiz8tXXu4Pq7d696fEVXwxGTCKKcMWZm962Lf/b5VqS1fHHuQ9W73ts/2XQcFGRn2MNzs1ZfNWPek48+cN15ABmHNjw5v7vx/TlG1+lRktEFS++HpCqQZC8kdyIkjx82kUEUryOpbl2W5F5BlENEEPsERY1JgmQKgmxQkQqiJIGA2RwOhQBREAWvwHmSQEyZEh7knAUoN4kiOKoiOaCCDYgs3rJyLMCO35htc+Y4zHEIt2xCbJsT0zSoZZgwDRu6bsI0LViGBcuMP9d1g9sxh2talFl6hHgCycKQyfdvmHDbU/MHAPixiQe53Imt8+y2W/e8tuT1zvp3HJfLB9ElCC5ZhahQuNwqVFWGrCpQXAqXZYnJKuGKJBJZEgW3R4HqdgM+PyAFACbB5GqUSO4WLvi7OVfqIKh1TPJ1EyG5NYqkFiUpWegF1c4g0P5zQFtNRAef6rgf3zhTQqHIMmLRcBBAADBcwOHsUP3J7J6utoxYz4Virb9zlB7uSI6FOnIkux9etxth5gZ8+XVjrp75UvLoL7/56r6W9JVPV37r6KED80KhkDCuZFjjA4sfv+nuG3OT/rz8wT+1f7CVMi6IgZFzd11//yszbyXEqOZ8yNonZ+9vOvhWgiTLYsqVs0O3fOf1aY8te1le9/vXN51s6E5JT/IYY4cXrFr84stLJ2bBbNm/ovzIrs1fd/oax6ksBMM0wEQf1GBKh5o4pMvjT6xze/0ng8lpTRnDhnfAN6oBSG0FoPkCgXAkHMVnN4QXUcktcT6QEECf3zIigt8MpXK9MyBEupNEmeeCRQqJ058JbhTBimQITkwVBAOwI4AWRiwcRjSiwTAtZpmcGQYhhm1Sy3SIqVkwdB26YcKI6rB1Bza3wQzNciVmSMU3fHPdyBu+fUdVFTGrqj66VyZ/jXXR01I7bfcrD2/pqN+syG4vBIESSRKgyipcHokrboUrssAURaAej0K9Xg98QT+4kgAdAaZ4E1okT2oTVf27iCvlDFypdbZrfEM30J1DJA2wP1HLKcsCNMOWAeTuPrqfdndEfecau711p08zt8eX7pKlgoimy/19IT0cjjm243DFpVDV7SWqy2UKsifa0q03pmVmhsePHt8/8cbcyHhAARAGkIOeTYXd9ccmnq7bO6arrXVSWoLXGxUS4fKmPD3lzhdX/m7zzvylP1z61YbG9tmBgMeZO/++655ZNDNxx7IFa07se9vxpxQKY2/+zvdHzPrKkztefeK/T256/h4r1ovUUTPbKhZvvGbRkqWTq99Y91q4L4bRE8eu+t5LK56dkQ5zT/Wir3Q2NDzkJV3o6tcQCCS8V5CVuy1v4rRTctGc04Dr1MASCGuOQqg/sNf/QWttIo/aiUGBZ3NqeoyYQWzH4aCA4pIRcPugUCUaCnc3eD1K5IqcApaY5IrkZqSYY8eWaABaVEkwjE/1GiI4yZk/G3qyGqtLMrXOkbbRVsKjPUPtWGSso/XkUOMCmN6DWKgb4XAMUc2EYdq2bYHomkX1qE4sw4LN4qQGS4taKdnDpKKbHvnp8Kvu/+aOymniIOP9I+AbbBVw3jV+07L7NrUd3phMJIlJskzdisioSDgRCAl4FOoLuuFNzoDiTgFTg72+YMpRV2LOIeJKf5cnFjd4PCUNhMq9H0rw/uKSBMC0OQHg23SwrmjfviNp506fyWpr78vTTaM4qts5UcNOJFQYEo5Eqc24atqAZllxVynG4DB7gNFM4uHMYKCCELd7IBSEMcgihVsWQWE5blXWqKA0yoSfVTyB+uTCwmMzr5nYdteMcREpXJN/au/Gkc2NzXMMUy1Kycx7Y/wt855Z9HRN1prq156jcIbdUFZ+50vLFkbWLp775oXje4i3eHrr7U9vW/iTe8e9Gm14P5A9oTy64EfbR9007+vlpz44tlIgwv7/evRrTyy8bXJnzYoX7tai3QskYrSmpKRtHnPN9Xsx5OamTUdb7dc27g00Hjs8lOmx8YYZLTYsK8PmLFG3mItDJjHTgc0pHMZhMxucx4O+ORmYXA747nHGIRBAlWUI3GaKJJg+r2xzQlrdktjudatNfrfrbHpSoCF7SGbTlEljWqdPKmn2+z19sWgsTky4TDng3PEDbcXR9uOj7L7WkZGeEyO1nvbRRl9nBrF6EOlsQ39/DFpUY5bDuW0T4jiMgBDC9H47kD1GHPG57z1QMOX2Xw024T8E30Xg8eFbX/pSTfPB36UJkmIRi1AQi/o8KvEnJcOdlAHiSgkl5RacDqQO/5OUUngwmFH2HhHkVrDLE2UP7PhDcs3J3uGnT7fnd13oGdnS2l7EQK40DCMLkluKGRaimgbLiet24nPe+MFDEuW4PSzl8Q00BxhIXBhjDViKAXBY3IjctDkcNqDNteImQHDiviSgAiABkihCUQhcxIFbEi/4At669IyMd+fNKeu5tsBF5NiJwr5+7Qp/SuaenKLRW6fNXjyjt7f1kZzCqbf/ceUtwTd+sOCXoe52p2T6Qn3n7553ubJG0IdWvD3nC3c8n9bUePwXnqSUh99d/9zuA1v+eI/T1zk5NVV+jyYNe++dc4mh6rXb8xvPN5RGtdgEzdBzNJtDswDD4nFDS3vANYEKgCACkoRBvzKBckgihSwOhjDT+JwbcSByMDDuxL1wbAbbMkGphEFDKkoIFIlCFQgkyiFRx1Jl+ZQqiIeSU4Mn84fknM3Myj7+8FduqSUDWpXLMZk5t5P6O/YWGx0fTA91nL2hp+XMSKu/LTnWdQ6Rnh7ohg5CqM1EFbYeQeqwcjr19qfuScif+srg1o4M8tc458nvrPzqu/Xblg+3ue0EPYoQSMqAHMiEnJTbkDp05N7UwhFbkrK/8EdR8bQ75keiGMiOHZVCGcqwuquLFxQUKBHNuvrs+bZRrc1tQ5uaWjP7dDuNEfhCvaEWKsr9La2dh1RV7i/IyzPS0zO5V1V1qigRj+yKuTxS2O12E69CqQ0bxKGMKy6JmyblhDi6bSPWH+NRI+Yzdd2tGaZqxRyluatZ7glHvV63Jy/U2+fnhOTFDDPgOCQjpuk+0zLk3r4oDNOCaehgphM3HQJAZcArCQgmJLSmZA7ZfOfNV52ae236cK7HxJyxYw9XPr3qQs223S9OKpv+8D0TnamH3/zxl0KhPlv1p4rXzlv81FPrWlvOna5/7qbP3Tj3kXuuymmorZvkMHpi63Fde23d9qHnm7pmRA1jWJ9uwNLtgZ0HAVEoJFmBKAvwe1wIeN2QFFWTZbFXEkmnIoidnqA/JIqkLdTRfWpIWrqdmZlJREHQCbU1SZJ1DxF1hzm62+8nsleQtajtOLoBxkxCiazqjqk4nMmmocu6pkst51t5/anTNGKY/qH5ORMNXUsQRSSpiqrKohDLTA2EkvzB9zMz05uz81IOBT2eg83NzWZFRVwWWlO+hC25mG0BIqlgppba37hj4oWW2juaavePDHeeHkUizTTS1wXNMMA5t7NGfK639MHfzFKUhEO8uloYDPRybfnFlzd273uzHF43PEnFkJNzD2YPHbOh6MrpNWryhEOE0P5LJyW8ukJARQWAikG39w97Xrt27fJRqow+29ohRGWqJQTTGyqmjesGIMqyaAEMtsXxD4kuvMzxXaAEsiwjqukEQMrek+cyTtSe8b2754hH1/rHtnZ0FsZiznDDtIq7enqDkaiuhjU9jkUiwCU4cBPr+Mwbrt6/cP6s2muvnf7cyy//fsjbWzduuOeu+5ajdvl9x7b8duQVpRU7WrPuXLFp/dpvPVH5yLySkpL2w4ffW/DiK1tyNtfsKw1HY1PCkRjACODywOOS4HcpPCUhIRIM+FoZtw5kZKScDyQnnMzPy2ucdOVQ4YpxQ5uyoHR5fZ4eZjsD+SYsnuf7D14rYYBJJEkiLMuGaVrC8t9syent603IDMrJiameqFuWa8vLy0OXnlgH5BSkpqaKlpcvcS6O0Sg4dwiiLWNPHFpb3lS7f4bRe77M7mtUWKQJavb0Ezd+Z/NUQkgv4Zy7drz+xJroiR2zRHfSgcxRU9aNnnn7diDrg0sJANUVEFK+WknKyi5Pi/6/+cNUkNLSTjKoco1nt14i9a/4LIEgFx92ltQS1NRg586dl763TxSIuF0qojEt+Nb2/Wl79u4Ze+psw5hwhE1rbW8ram5sTI/GbNhEhkel/RNGFG744bOPL516RVHDsz9+8cHpZVnq2a2rvltc9qXvr9l+Cs8/s+TJ7u4L+fPv/XbVtt0Hrw9bNJNzCpfMkZri78tOT23w+fzvZmdn758wcdiZuXNvaE6A64JASeRT7M8u5pZWVKC0s4SgDEg9fqkfzOrPuGCD6wQANdi5EwB28ot2CZ9OBvgsuu1LX0OUXbCM2PAz+1f9R9uxd27sajhW7s+ffO66u35wHTlYezA3dHz7NyZNGLXBmzfzz4QQ/SJDo1TsGvE1XlFxsbp9Zm+uOKUcAFBVVcUHpgDk7wTu37IshHOgqgrk+IjVBKtXY/XqD5H7MXB6vW6Ew9GUHzy7bGj9qa7rWto7p51pOHdNX0+PGgx4MXHKpKVrVixd1t1d722qPzY+UFByviBzRN3cLz/8wKFjdUu6Oy8IqgTkFxYcKyrOOxgMJry1cOEXj4zJTW+4zGcXgIr4P5GB+9raCl5VBU4Iwd8Khr+xEPLBsdhA8/zSsG/+2YEIAvCPVUVR9SCi1ZbsW/PaAjm5aBf5S7TvqCwVy6pq2Cepjv6VrkHdxfHjx8kAKD/SQHOpCrYdOFW08te/nH6k/twdna2NZemJ/tarplzzn8ueeXzft5/89dhd295a29YeyktIyjg0btTQNeVTx29YsGBOvShQw/lIWSsVKypS+aBCbvBH+S+/xpWVFCNGkL+sih/9g39fH1btyspKiooK4dJ2lMfjxhvr1xffPPvOn864+Y4jix57+qVZn7+zbtbsu//np8tfneRxuz9W1SoqKoSBcEHy76WNa1qqqwfW9efr9n3+z0fb0yorK+n/a7DyP9FVWVlJS0tLxUsB9Obu91MXLfnRt1ZVb84XLgnlKy0tFT8pB+5T6fe84u//Dvg/B9D/FyPgOnSkKq00AAAAAElFTkSuQmCC",
                        alt: "CareerNova Education Services",
                        style: {
                          height: "48px",
                          width: "auto",
                          maxHeight: "48px",
                          display: "block",
                          objectFit: "contain",
                          filter: "none",
                          transition: "transform 0.2s ease, opacity 0.2s ease"
                        }
                      })
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-UXcol.framer-6vmcbz, .framer-UXcol .framer-6vmcbz { display: block; }`,
          `.framer-UXcol.framer-6zej15 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-UXcol .framer-nqrwck { aspect-ratio: 0.7857142857142857 / 1; flex: none; height: auto; position: relative; width: 15px; }`,
          `.framer-UXcol .framer-9zt0xg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-UXcol.framer-v-1bki9lt.framer-6zej15 { gap: 5px; }`,
        ],
        `framer-UXcol`
      )),
      (U.displayName = `Logo`),
      (U.defaultProps = { height: 27.5, width: 200 }),
      B(U, {
        variant: {
          options: [`w57K1k4Fy`, `YaSkLMfOg`, `wkoWLqDZl`],
          optionTitles: [`Desktop`, `Mobile`, `Large`],
          title: `Variant`,
          type: V.Enum,
        },
        qmJlrqWO3: { defaultValue: `CareerNova Education Services`, title: `Name`, type: V.String },
        onqmJlrqWO3Change: { changes: `qmJlrqWO3`, type: V.ChangeHandler },
        w2b1OKy6D: {
          defaultValue: `var(--token-8b57468b-891a-4c69-9794-ea2945515f05, rgb(255, 255, 255))`,
          title: `Text Color`,
          type: V.Color,
        },
      }),
      k(
        U,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Golos Text Variable`,
                openType: !0,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Golos Text`,
                url: `../../assets/fonts/q5uCsoe9Lv5t7Meb31EcIxF2hYxREMs.woff2`,
                variationAxes: [
                  { defaultValue: 400, maxValue: 900, minValue: 400, name: `Weight`, tag: `wght` },
                ],
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Kt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  W,
  an = e(() => {
    (y(),
      R(),
      O(),
      l(),
      ot(),
      ut(),
      Xe(),
      (qt = { hvqqqkMg0: { hover: !0 }, LFtgsHFUq: { hover: !0 }, rocWnCIUA: { hover: !0 } }),
      (Jt = [`hvqqqkMg0`, `ClJx0ZTBy`, `LFtgsHFUq`, `rocWnCIUA`]),
      (Yt = `framer-OtDDP`),
      (Xt = {
        ClJx0ZTBy: `framer-v-o3mxtl`,
        hvqqqkMg0: `framer-v-1dz52zn`,
        LFtgsHFUq: `framer-v-c0et46`,
        rocWnCIUA: `framer-v-1s2ptvm`,
      }),
      (Zt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Qt = (e, t) => `translateX(-50%) ${t}`),
      ($t = ({ value: e, children: t }) => {
        let n = h(E),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(E.Provider, { value: i, children: t });
      }),
      (en = {
        "Desktop nav": `hvqqqkMg0`,
        "Tablet/Mobile nav text": `ClJx0ZTBy`,
        "White BG": `rocWnCIUA`,
        Small: `LFtgsHFUq`,
      }),
      (tn = T.create(r)),
      (nn = ({
        click: e,
        color: t,
        height: n,
        id: r,
        link: i,
        newTab: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        DJgPC8_RE: e ?? c.DJgPC8_RE,
        fENPxPHfW: o ?? c.fENPxPHfW ?? `Home`,
        phXAhP2BN: i ?? c.phXAhP2BN,
        qod_udNSc:
          t ??
          c.qod_udNSc ??
          `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
        variant: en[c.variant] ?? c.variant ?? `hvqqqkMg0`,
        ykltTf6lm: a ?? c.ykltTf6lm ?? !1,
      })),
      (rn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = F(
        u(function (e, t) {
          let n = g(null),
            i = t ?? n,
            a = re(),
            { activeLocale: o, setLocale: s } = pe();
          je();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              fENPxPHfW: p,
              phXAhP2BN: m,
              DJgPC8_RE: h,
              qod_udNSc: v,
              ykltTf6lm: ee,
              ...y
            } = nn(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: te,
              gestureHandlers: ne,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: E,
              variants: O,
            } = Ve({
              cycleOrder: Jt,
              defaultVariant: `hvqqqkMg0`,
              enabledGestures: qt,
              ref: i,
              variant: d,
              variantClassNames: Xt,
            }),
            k = rn(e, O),
            { activeVariantCallback: ie, delay: ae } = ve(b),
            oe = ie(async (...e) => {
              if ((w({ isPressed: !1 }), h && (await h(...e)) === !1)) return !1;
            }),
            se = M(Yt, pt, lt, tt);
          return f(D, {
            id: u ?? a,
            children: f(tn, {
              animate: O,
              initial: !1,
              children: f($t, {
                value: Zt,
                children: f(we, {
                  href: m,
                  motionChild: !0,
                  nodeId: `hvqqqkMg0`,
                  openInNewTab: ee,
                  scopeId: `ob10gzDNw`,
                  smoothScroll: !0,
                  children: f(T.a, {
                    ...y,
                    ...ne,
                    className: `${M(se, `framer-1dz52zn`, l, x)} framer-lsxdvs`,
                    "data-border": !0,
                    "data-framer-name": `Desktop nav`,
                    "data-highlight": !0,
                    layoutDependency: k,
                    layoutId: `hvqqqkMg0`,
                    onTap: oe,
                    ref: i,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-276bb6d3-2c53-44f6-8d0c-76c3e7b6c596, rgba(255, 255, 255, 0.08))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backdropFilter: `blur(10px)`,
                      backgroundColor: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.04))`,
                      borderBottomLeftRadius: 13,
                      borderBottomRightRadius: 13,
                      borderTopLeftRadius: 13,
                      borderTopRightRadius: 13,
                      WebkitBackdropFilter: `blur(10px)`,
                      ...c,
                    },
                    variants: {
                      ClJx0ZTBy: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backdropFilter: `none`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        WebkitBackdropFilter: `none`,
                      },
                      LFtgsHFUq: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                      },
                      rocWnCIUA: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `var(--token-e7c48652-500b-4e4a-8db4-eff35eedeef5, rgba(255, 255, 255, 0.8))`,
                      },
                    },
                    ...Kt(
                      {
                        "hvqqqkMg0-hover": { "data-framer-name": void 0 },
                        "LFtgsHFUq-hover": { "data-framer-name": void 0 },
                        "rocWnCIUA-hover": { "data-framer-name": void 0 },
                        ClJx0ZTBy: { "data-framer-name": `Tablet/Mobile nav text` },
                        LFtgsHFUq: { "data-framer-name": `Small` },
                        rocWnCIUA: { "data-framer-name": `White BG` },
                      },
                      b,
                      S
                    ),
                    children: _(T.div, {
                      className: `framer-1ibejwh`,
                      "data-framer-name": `Container`,
                      layoutDependency: k,
                      layoutId: `xF1yRLL4i`,
                      children: [
                        f(P, {
                          __fromCanvasComponent: !0,
                          children: f(r, {
                            children: f(T.p, {
                              className: `framer-styles-preset-pm9ab4`,
                              "data-styles-preset": `Uupbhq6cF`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-qod_udNSc-ob10gzDNw))`,
                              },
                              children: `Home`,
                            }),
                          }),
                          className: `framer-82v2wi`,
                          fonts: [`Inter`],
                          layoutDependency: k,
                          layoutId: `p_hfuaPiL`,
                          style: {
                            "--extracted-r6o4lv": `var(--variable-reference-qod_udNSc-ob10gzDNw)`,
                            "--framer-link-text-color": `rgb(255, 230, 0)`,
                            "--framer-link-text-decoration": `underline`,
                            "--variable-reference-qod_udNSc-ob10gzDNw": v,
                          },
                          text: p,
                          variants: {
                            rocWnCIUA: {
                              "--extracted-r6o4lv": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Kt(
                            {
                              "hvqqqkMg0-hover": { transformTemplate: Qt },
                              "LFtgsHFUq-hover": { transformTemplate: Qt },
                              "rocWnCIUA-hover": { transformTemplate: Qt },
                              ClJx0ZTBy: {
                                children: f(r, {
                                  children: f(T.p, {
                                    className: `framer-styles-preset-uuzeo9`,
                                    "data-styles-preset": `p2FU4QOGa`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-qod_udNSc-ob10gzDNw))`,
                                    },
                                    children: `Home`,
                                  }),
                                }),
                              },
                              LFtgsHFUq: {
                                children: f(r, {
                                  children: f(T.p, {
                                    className: `framer-styles-preset-1xheykw`,
                                    "data-styles-preset": `vz9muakNv`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-qod_udNSc-ob10gzDNw))`,
                                    },
                                    children: `Home`,
                                  }),
                                }),
                              },
                              rocWnCIUA: {
                                children: f(r, {
                                  children: f(T.p, {
                                    className: `framer-styles-preset-pm9ab4`,
                                    "data-styles-preset": `Uupbhq6cF`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88)))`,
                                    },
                                    children: `Home`,
                                  }),
                                }),
                              },
                            },
                            b,
                            S
                          ),
                        }),
                        f(P, {
                          __fromCanvasComponent: !0,
                          children: f(r, {
                            children: f(T.p, {
                              className: `framer-styles-preset-pm9ab4`,
                              "data-styles-preset": `Uupbhq6cF`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-qod_udNSc-ob10gzDNw))`,
                              },
                              children: `Home`,
                            }),
                          }),
                          className: `framer-6e02gn`,
                          fonts: [`Inter`],
                          layoutDependency: k,
                          layoutId: `zo4JfdZ9v`,
                          style: {
                            "--extracted-r6o4lv": `var(--variable-reference-qod_udNSc-ob10gzDNw)`,
                            "--framer-link-text-color": `rgb(255, 230, 0)`,
                            "--framer-link-text-decoration": `underline`,
                            "--variable-reference-qod_udNSc-ob10gzDNw": v,
                          },
                          text: p,
                          transformTemplate: Qt,
                          variants: {
                            rocWnCIUA: {
                              "--extracted-r6o4lv": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Kt(
                            {
                              "hvqqqkMg0-hover": {
                                children: f(r, {
                                  children: f(T.p, {
                                    className: `framer-styles-preset-pm9ab4`,
                                    "data-styles-preset": `Uupbhq6cF`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-qod_udNSc-ob10gzDNw))`,
                                    },
                                    children: `Home`,
                                  }),
                                }),
                                transformTemplate: void 0,
                              },
                              "LFtgsHFUq-hover": { transformTemplate: void 0 },
                              "rocWnCIUA-hover": { transformTemplate: void 0 },
                              ClJx0ZTBy: {
                                children: f(r, {
                                  children: f(T.p, {
                                    className: `framer-styles-preset-uuzeo9`,
                                    "data-styles-preset": `p2FU4QOGa`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-qod_udNSc-ob10gzDNw))`,
                                    },
                                    children: `Home`,
                                  }),
                                }),
                              },
                              LFtgsHFUq: {
                                children: f(r, {
                                  children: f(T.p, {
                                    className: `framer-styles-preset-1xheykw`,
                                    "data-styles-preset": `vz9muakNv`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-qod_udNSc-ob10gzDNw))`,
                                    },
                                    children: `Home`,
                                  }),
                                }),
                              },
                              rocWnCIUA: {
                                children: f(r, {
                                  children: f(T.p, {
                                    className: `framer-styles-preset-pm9ab4`,
                                    "data-styles-preset": `Uupbhq6cF`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88)))`,
                                    },
                                    children: `Home`,
                                  }),
                                }),
                              },
                            },
                            b,
                            S
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-OtDDP.framer-lsxdvs, .framer-OtDDP .framer-lsxdvs { display: block; }`,
          `.framer-OtDDP.framer-1dz52zn { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 7px 16px 8px 16px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-OtDDP .framer-1ibejwh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-OtDDP .framer-82v2wi { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-OtDDP .framer-6e02gn { bottom: -30px; flex: none; height: auto; left: 49%; position: absolute; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-OtDDP.framer-v-o3mxtl.framer-1dz52zn, .framer-OtDDP.framer-v-c0et46.framer-1dz52zn { padding: 0px; will-change: unset; }`,
          `.framer-OtDDP.framer-v-1dz52zn.hover .framer-1ibejwh, .framer-OtDDP.framer-v-c0et46.hover .framer-1ibejwh { justify-content: flex-end; }`,
          `.framer-OtDDP.framer-v-1dz52zn.hover .framer-82v2wi { left: 49%; position: absolute; top: -30px; z-index: 1; }`,
          `.framer-OtDDP.framer-v-1dz52zn.hover .framer-6e02gn, .framer-OtDDP.framer-v-c0et46.hover .framer-6e02gn, .framer-OtDDP.framer-v-1s2ptvm.hover .framer-6e02gn { bottom: unset; left: unset; position: relative; }`,
          `.framer-OtDDP.framer-v-c0et46.hover.framer-1dz52zn { will-change: unset; }`,
          `.framer-OtDDP.framer-v-c0et46.hover .framer-82v2wi, .framer-OtDDP.framer-v-1s2ptvm.hover .framer-82v2wi { left: 50%; position: absolute; top: -30px; z-index: 1; }`,
          ...dt,
          ...st,
          ...$e,
          `.framer-OtDDP[data-border="true"]::after, .framer-OtDDP [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-OtDDP`
      )),
      (W.displayName = `Nav item`),
      (W.defaultProps = { height: 36, width: 74 }),
      B(W, {
        variant: {
          options: [`hvqqqkMg0`, `ClJx0ZTBy`, `LFtgsHFUq`, `rocWnCIUA`],
          optionTitles: [`Desktop nav`, `Tablet/Mobile nav text`, `Small`, `White BG`],
          title: `Variant`,
          type: V.Enum,
        },
        fENPxPHfW: { defaultValue: `Home`, displayTextArea: !1, title: `Title`, type: V.String },
        onfENPxPHfWChange: { changes: `fENPxPHfW`, type: V.ChangeHandler },
        phXAhP2BN: { title: `Link`, type: V.Link },
        DJgPC8_RE: { title: `Click`, type: V.EventHandler },
        qod_udNSc: {
          defaultValue: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250)) /* {"name":"White"} */`,
          title: `Color`,
          type: V.Color,
        },
        ykltTf6lm: { defaultValue: !1, title: `New Tab`, type: V.Boolean },
        onykltTf6lmChange: { changes: `ykltTf6lm`, type: V.ChangeHandler },
      }),
      k(
        W,
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
          ...L(ft),
          ...L(ct),
          ...L(Ze),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function on(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  G,
  _n = e(() => {
    (y(),
      R(),
      O(),
      l(),
      (sn = { tgEO2JgcT: { pressed: !0 } }),
      (cn = [`tgEO2JgcT`, `QBb2zM3VB`]),
      (ln = `framer-kePnC`),
      (un = { QBb2zM3VB: `framer-v-566vgz`, tgEO2JgcT: `framer-v-d786ij` }),
      (dn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (fn = ({ value: e, children: t }) => {
        let n = h(E),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(E.Provider, { value: i, children: t });
      }),
      (pn = { Default: `tgEO2JgcT`, Opened: `QBb2zM3VB` }),
      (mn = T.create(r)),
      (hn = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        ARIR3WB0q: e ?? i.ARIR3WB0q,
        variant: pn[i.variant] ?? i.variant ?? `tgEO2JgcT`,
      })),
      (gn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = F(
        u(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = re(),
            { activeLocale: a, setLocale: o } = pe();
          je();
          let { style: s, className: c, layoutId: l, variant: u, ARIR3WB0q: d, ...p } = hn(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: v,
              gestureHandlers: ee,
              gestureVariant: y,
              isLoading: b,
              setGestureState: x,
              setVariant: te,
              variants: ne,
            } = Ve({
              cycleOrder: cn,
              defaultVariant: `tgEO2JgcT`,
              enabledGestures: sn,
              ref: r,
              variant: u,
              variantClassNames: un,
            }),
            S = gn(e, ne),
            { activeVariantCallback: C, delay: w } = ve(m),
            E = C(async (...e) => {
              if ((x({ isPressed: !1 }), d && (await d(...e)) === !1)) return !1;
            }),
            O = M(ln);
          return f(D, {
            id: l ?? i,
            children: f(mn, {
              animate: ne,
              initial: !1,
              children: f(fn, {
                value: dn,
                children: _(T.div, {
                  ...p,
                  ...ee,
                  className: M(O, `framer-d786ij`, c, h),
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: S,
                  layoutId: `tgEO2JgcT`,
                  onTap: E,
                  ref: r,
                  style: { ...s },
                  ...on(
                    {
                      "tgEO2JgcT-pressed": { "data-framer-name": void 0 },
                      QBb2zM3VB: { "data-framer-name": `Opened` },
                    },
                    m,
                    y
                  ),
                  children: [
                    f(T.div, {
                      className: `framer-1ihc6ms`,
                      layoutDependency: S,
                      layoutId: `dUOJ0EVWo`,
                      style: {
                        backgroundColor: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                        rotate: 0,
                      },
                      variants: { "tgEO2JgcT-pressed": { rotate: 0 }, QBb2zM3VB: { rotate: -45 } },
                    }),
                    f(T.div, {
                      className: `framer-6k9bls`,
                      layoutDependency: S,
                      layoutId: `UZ00J4npy`,
                      style: {
                        backgroundColor: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                        rotate: 0,
                      },
                      variants: { "tgEO2JgcT-pressed": { rotate: 0 }, QBb2zM3VB: { rotate: 45 } },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-kePnC.framer-tf8vzr, .framer-kePnC .framer-tf8vzr { display: block; }`,
          `.framer-kePnC.framer-d786ij { cursor: pointer; height: 28px; overflow: visible; position: relative; width: 28px; }`,
          `.framer-kePnC .framer-1ihc6ms { flex: none; height: 2px; left: calc(50.00000000000002% - 22px / 2); overflow: visible; position: absolute; top: 8px; width: 22px; }`,
          `.framer-kePnC .framer-6k9bls { bottom: 8px; flex: none; height: 2px; left: calc(50.00000000000002% - 22px / 2); overflow: visible; position: absolute; width: 22px; }`,
          `.framer-kePnC.framer-v-566vgz .framer-1ihc6ms { height: 2px; top: calc(50.00000000000002% - 2px / 2); }`,
          `.framer-kePnC.framer-v-566vgz .framer-6k9bls { bottom: unset; top: calc(50.00000000000002% - 2px / 2); }`,
          `.framer-kePnC.framer-v-d786ij.pressed .framer-1ihc6ms { top: 9px; }`,
          `.framer-kePnC.framer-v-d786ij.pressed .framer-6k9bls { bottom: 9px; }`,
        ],
        `framer-kePnC`
      )),
      (G.displayName = `Menu icon`),
      (G.defaultProps = { height: 28, width: 28 }),
      B(G, {
        variant: {
          options: [`tgEO2JgcT`, `QBb2zM3VB`],
          optionTitles: [`Default`, `Opened`],
          title: `Variant`,
          type: V.Enum,
        },
        ARIR3WB0q: { title: `Click`, type: V.EventHandler },
      }),
      k(G, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function K(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  q,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  J,
  Ln = e(() => {
    (y(),
      R(),
      O(),
      l(),
      it(),
      Gt(),
      an(),
      _n(),
      (vn = I(U)),
      (yn = I(G)),
      (bn = I(W)),
      (xn = I(at)),
      (Sn = le(oe(j))),
      (Cn = oe(T.nav)),
      (wn = [`JPQI0m2Hl`, `CB01XpOcI`, `SdeYTPZIg`, `eCuEujbwX`, `F5Rq0ZfkC`]),
      (Tn = `framer-AsZ1t`),
      (En = {
        CB01XpOcI: `framer-v-1i8xfff`,
        eCuEujbwX: `framer-v-1deylig`,
        F5Rq0ZfkC: `framer-v-v8da33`,
        JPQI0m2Hl: `framer-v-1am4r9l`,
        SdeYTPZIg: `framer-v-4nkped`,
      }),
      (Dn = { damping: 60, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (On = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (kn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (An = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.6, duration: 1.6, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (jn = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Mn = ({ value: e, children: t }) => {
        let n = h(E),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(E.Provider, { value: i, children: t });
      }),
      (Nn = {
        "Desktop navigation": `JPQI0m2Hl`,
        "Desktop scroll": `CB01XpOcI`,
        "Mobile navigation opened": `F5Rq0ZfkC`,
        "Mobile Scroll closed": `eCuEujbwX`,
        Mobile: `SdeYTPZIg`,
      }),
      (Pn = T.create(r)),
      (Fn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Nn[r.variant] ?? r.variant ?? `JPQI0m2Hl`,
      })),
      (In = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = F(
        u(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = re(),
            { activeLocale: a, setLocale: o } = pe(),
            s = je(),
            { style: c, className: l, layoutId: u, variant: d, ...p } = Fn(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: v,
              gestureHandlers: ee,
              gestureVariant: y,
              isLoading: b,
              setGestureState: x,
              setVariant: te,
              variants: ne,
            } = Ve({
              cycleOrder: wn,
              defaultVariant: `JPQI0m2Hl`,
              ref: r,
              variant: d,
              variantClassNames: En,
            }),
            S = In(e, ne),
            { activeVariantCallback: C, delay: w } = ve(m),
            E = C(async (...e) => {
              (x({ isPressed: !1 }), te(`eCuEujbwX`));
            }),
            O = C(async (...e) => {
              te(`F5Rq0ZfkC`);
            }),
            k = C(async (...e) => {
              te(`eCuEujbwX`);
            }),
            ie = M(Tn),
            ae = () => !![`SdeYTPZIg`, `eCuEujbwX`, `F5Rq0ZfkC`].includes(m),
            oe = () => m === `F5Rq0ZfkC`,
            se = () => ![`SdeYTPZIg`, `eCuEujbwX`].includes(m);
          Ue();
          let A = () => ![`SdeYTPZIg`, `eCuEujbwX`, `F5Rq0ZfkC`].includes(m);
          return f(D, {
            id: u ?? i,
            children: f(Pn, {
              animate: ne,
              initial: !1,
              children: f(Mn, {
                value: kn,
                children: f(Cn, {
                  ...p,
                  ...ee,
                  __framer__animate: { transition: Dn },
                  __framer__animateOnce: !1,
                  __framer__scrollVisas: { direction: `down`, target: On },
                  __framer__styleAppearEffectEnabled: !0,
                  __framer__threshold: 0.5,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: M(ie, `framer-1am4r9l`, l, h),
                  "data-framer-name": `Desktop navigation`,
                  layoutDependency: S,
                  layoutId: `JPQI0m2Hl`,
                  ref: r,
                  style: { backgroundColor: `rgba(0, 0, 0, 0)`, ...c },
                  variants: {
                    eCuEujbwX: {
                      backgroundColor: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                    },
                    F5Rq0ZfkC: {
                      backgroundColor: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                    },
                  },
                  ...K(
                    {
                      CB01XpOcI: { "data-framer-name": `Desktop scroll` },
                      eCuEujbwX: { "data-framer-name": `Mobile Scroll closed` },
                      F5Rq0ZfkC: {
                        "data-framer-name": `Mobile navigation opened`,
                        "data-highlight": !0,
                        onTap: E,
                      },
                      SdeYTPZIg: { "data-framer-name": `Mobile` },
                    },
                    m,
                    y
                  ),
                  children: _(T.div, {
                    className: `framer-wye0lu`,
                    "data-border": !0,
                    "data-framer-name": `Container`,
                    layoutDependency: S,
                    layoutId: `prBxg7UEw`,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-276bb6d3-2c53-44f6-8d0c-76c3e7b6c596, rgba(255, 255, 255, 0.08))`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                    },
                    variants: {
                      eCuEujbwX: {
                        "--border-color": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                      },
                      F5Rq0ZfkC: {
                        "--border-color": `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                      },
                    },
                    children: [
                      _(T.div, {
                        className: `framer-4yblnf`,
                        "data-framer-name": `Brand logo`,
                        layoutDependency: S,
                        layoutId: `J70_nysTp`,
                        children: [
                          f(z, {
                            height: 27,
                            y: (s?.y || 0) + (0 + ((s?.height || 69) - 0 - 78) / 2) + 24.5 + 0,
                            ...K(
                              {
                                eCuEujbwX: {
                                  y:
                                    (s?.y || 0) +
                                    (12 + ((s?.height || 56) - 16 - 40) / 2) +
                                    0 +
                                    2.5,
                                },
                                F5Rq0ZfkC: {
                                  y:
                                    (s?.y || 0) +
                                    12 +
                                    (((s?.height || 441) - 24 - 471) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    2.5,
                                },
                                SdeYTPZIg: {
                                  y:
                                    (s?.y || 0) +
                                    (12 + ((s?.height || 56) - 16 - 40) / 2) +
                                    0 +
                                    2.5,
                                },
                              },
                              m,
                              y
                            ),
                            children: f(j, {
                              className: `framer-2r7npf-container`,
                              layoutDependency: S,
                              layoutId: `vkzap7ZG9-container`,
                              nodeId: `vkzap7ZG9`,
                              rendersWithMotion: !0,
                              scopeId: `PzKCHg_CL`,
                              style: { opacity: 0.9 },
                              variants: { CB01XpOcI: { opacity: 1 } },
                              children: f(U, {
                                height: `100%`,
                                id: `vkzap7ZG9`,
                                layoutId: `vkzap7ZG9`,
                                qmJlrqWO3: `CareerNova Education Services`,
                                variant: q(`w57K1k4Fy`),
                                w2b1OKy6D: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                width: `100%`,
                                ...K(
                                  {
                                    eCuEujbwX: { variant: q(`YaSkLMfOg`) },
                                    F5Rq0ZfkC: { variant: q(`YaSkLMfOg`) },
                                    SdeYTPZIg: { variant: q(`YaSkLMfOg`) },
                                  },
                                  m,
                                  y
                                ),
                              }),
                            }),
                          }),
                          ae() &&
                            f(z, {
                              ...K(
                                {
                                  eCuEujbwX: {
                                    height: 32,
                                    width: `32px`,
                                    y:
                                      (s?.y || 0) +
                                      (12 + ((s?.height || 56) - 16 - 40) / 2) +
                                      0 +
                                      0,
                                  },
                                  F5Rq0ZfkC: {
                                    height: 32,
                                    width: `32px`,
                                    y:
                                      (s?.y || 0) +
                                      12 +
                                      (((s?.height || 441) - 24 - 471) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0,
                                  },
                                  SdeYTPZIg: {
                                    height: 32,
                                    width: `32px`,
                                    y:
                                      (s?.y || 0) +
                                      (12 + ((s?.height || 56) - 16 - 40) / 2) +
                                      0 +
                                      0,
                                  },
                                },
                                m,
                                y
                              ),
                              children: f(j, {
                                className: `framer-14s5xod-container`,
                                layoutDependency: S,
                                layoutId: `n3fNrqwbI-container`,
                                nodeId: `n3fNrqwbI`,
                                rendersWithMotion: !0,
                                scopeId: `PzKCHg_CL`,
                                children: f(G, {
                                  height: `100%`,
                                  id: `n3fNrqwbI`,
                                  layoutId: `n3fNrqwbI`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: q(`tgEO2JgcT`),
                                  width: `100%`,
                                  ...K(
                                    {
                                      eCuEujbwX: { ARIR3WB0q: O },
                                      F5Rq0ZfkC: { ARIR3WB0q: k, variant: q(`QBb2zM3VB`) },
                                      SdeYTPZIg: { ARIR3WB0q: O },
                                    },
                                    m,
                                    y
                                  ),
                                }),
                              }),
                            }),
                        ],
                      }),
                      oe() &&
                        f(T.div, {
                          className: `framer-lskzko`,
                          "data-framer-name": `Divider`,
                          layoutDependency: S,
                          layoutId: `CNXNLD18g`,
                          style: {
                            backgroundColor: `var(--token-276bb6d3-2c53-44f6-8d0c-76c3e7b6c596, rgba(255, 255, 255, 0.07))`,
                          },
                        }),
                      se() &&
                        _(T.div, {
                          className: `framer-1b1fkzk`,
                          "data-framer-name": `Nav items`,
                          layoutDependency: S,
                          layoutId: `tqC77lamd`,
                          children: [
                            f(H, {
                              links: [
                                { href: { webPageId: `Q0ojUtneJ` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `Q0ojUtneJ` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `Q0ojUtneJ` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(z, {
                                  height: 36,
                                  y: (s?.y || 0) + (0 + ((s?.height || 69) - 0 - 78) / 2) + 20 + 0,
                                  ...K(
                                    {
                                      F5Rq0ZfkC: {
                                        y:
                                          (s?.y || 0) +
                                          12 +
                                          (((s?.height || 441) - 24 - 471) / 2 + 0 + 0) +
                                          0 +
                                          73 +
                                          0 +
                                          0,
                                      },
                                    },
                                    m,
                                    y
                                  ),
                                  children: f(j, {
                                    className: `framer-q3j968-container`,
                                    "data-framer-name": `Services`,
                                    layoutDependency: S,
                                    layoutId: `FnBtzB57w-container`,
                                    name: `Services`,
                                    nodeId: `FnBtzB57w`,
                                    rendersWithMotion: !0,
                                    scopeId: `PzKCHg_CL`,
                                    children: f(W, {
                                      fENPxPHfW: `Services`,
                                      height: `100%`,
                                      id: `FnBtzB57w`,
                                      layoutId: `FnBtzB57w`,
                                      name: `Services`,
                                      phXAhP2BN: e[0],
                                      qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                      variant: q(`hvqqqkMg0`),
                                      width: `100%`,
                                      ykltTf6lm: !1,
                                      ...K(
                                        {
                                          CB01XpOcI: { phXAhP2BN: e[1], variant: q(`rocWnCIUA`) },
                                          F5Rq0ZfkC: { phXAhP2BN: e[2], variant: q(`ClJx0ZTBy`) },
                                        },
                                        m,
                                        y
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(H, {
                              links: [
                                { href: { webPageId: `B1ccsbbPp` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `B1ccsbbPp` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `B1ccsbbPp` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(z, {
                                  height: 36,
                                  y: (s?.y || 0) + (0 + ((s?.height || 69) - 0 - 78) / 2) + 20 + 0,
                                  ...K(
                                    {
                                      F5Rq0ZfkC: {
                                        y:
                                          (s?.y || 0) +
                                          12 +
                                          (((s?.height || 441) - 24 - 471) / 2 + 0 + 0) +
                                          0 +
                                          73 +
                                          0 +
                                          66,
                                      },
                                    },
                                    m,
                                    y
                                  ),
                                  children: f(j, {
                                    className: `framer-13h4gav-container`,
                                    "data-framer-name": `Cases`,
                                    layoutDependency: S,
                                    layoutId: `F1WNhcPjI-container`,
                                    name: `Cases`,
                                    nodeId: `F1WNhcPjI`,
                                    rendersWithMotion: !0,
                                    scopeId: `PzKCHg_CL`,
                                    children: f(W, {
                                      fENPxPHfW: `Case Studies`,
                                      height: `100%`,
                                      id: `F1WNhcPjI`,
                                      layoutId: `F1WNhcPjI`,
                                      name: `Cases`,
                                      phXAhP2BN: e[0],
                                      qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                      variant: q(`hvqqqkMg0`),
                                      width: `100%`,
                                      ykltTf6lm: !1,
                                      ...K(
                                        {
                                          CB01XpOcI: { phXAhP2BN: e[1], variant: q(`rocWnCIUA`) },
                                          F5Rq0ZfkC: { phXAhP2BN: e[2], variant: q(`ClJx0ZTBy`) },
                                        },
                                        m,
                                        y
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(H, {
                              links: [
                                { href: { webPageId: `zitVyT7Oh` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `zitVyT7Oh` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `zitVyT7Oh` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(z, {
                                  height: 36,
                                  y: (s?.y || 0) + (0 + ((s?.height || 69) - 0 - 78) / 2) + 20 + 0,
                                  ...K(
                                    {
                                      F5Rq0ZfkC: {
                                        y:
                                          (s?.y || 0) +
                                          12 +
                                          (((s?.height || 441) - 24 - 471) / 2 + 0 + 0) +
                                          0 +
                                          73 +
                                          0 +
                                          132,
                                      },
                                    },
                                    m,
                                    y
                                  ),
                                  children: f(j, {
                                    className: `framer-9dushn-container`,
                                    "data-framer-name": `How It Works`,
                                    layoutDependency: S,
                                    layoutId: `Q_8MCi2NC-container`,
                                    name: `How It Works`,
                                    nodeId: `Q_8MCi2NC`,
                                    rendersWithMotion: !0,
                                    scopeId: `PzKCHg_CL`,
                                    children: f(W, {
                                      fENPxPHfW: `How It Works`,
                                      height: `100%`,
                                      id: `Q_8MCi2NC`,
                                      layoutId: `Q_8MCi2NC`,
                                      name: `How It Works`,
                                      phXAhP2BN: e[0],
                                      qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                      variant: q(`hvqqqkMg0`),
                                      width: `100%`,
                                      ykltTf6lm: !1,
                                      ...K(
                                        {
                                          CB01XpOcI: { phXAhP2BN: e[1], variant: q(`rocWnCIUA`) },
                                          F5Rq0ZfkC: { phXAhP2BN: e[2], variant: q(`ClJx0ZTBy`) },
                                        },
                                        m,
                                        y
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(H, {
                              links: [
                                { href: { webPageId: `musfU1kBr` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `musfU1kBr` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `musfU1kBr` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(z, {
                                  height: 36,
                                  y: (s?.y || 0) + (0 + ((s?.height || 69) - 0 - 78) / 2) + 20 + 0,
                                  ...K(
                                    {
                                      F5Rq0ZfkC: {
                                        y:
                                          (s?.y || 0) +
                                          12 +
                                          (((s?.height || 441) - 24 - 471) / 2 + 0 + 0) +
                                          0 +
                                          73 +
                                          0 +
                                          198,
                                      },
                                    },
                                    m,
                                    y
                                  ),
                                  children: f(j, {
                                    className: `framer-1w5slhf-container`,
                                    "data-framer-name": `About`,
                                    layoutDependency: S,
                                    layoutId: `jXA2eUoJp-container`,
                                    name: `About`,
                                    nodeId: `jXA2eUoJp`,
                                    rendersWithMotion: !0,
                                    scopeId: `PzKCHg_CL`,
                                    children: f(W, {
                                      fENPxPHfW: `About`,
                                      height: `100%`,
                                      id: `jXA2eUoJp`,
                                      layoutId: `jXA2eUoJp`,
                                      name: `About`,
                                      phXAhP2BN: e[0],
                                      qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                      variant: q(`hvqqqkMg0`),
                                      width: `100%`,
                                      ykltTf6lm: !1,
                                      ...K(
                                        {
                                          CB01XpOcI: { phXAhP2BN: e[1], variant: q(`rocWnCIUA`) },
                                          F5Rq0ZfkC: { phXAhP2BN: e[2], variant: q(`ClJx0ZTBy`) },
                                        },
                                        m,
                                        y
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(H, {
                              links: [
                                { href: { webPageId: `EyK7bnNLZ` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `EyK7bnNLZ` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `EyK7bnNLZ` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(z, {
                                  height: 36,
                                  y: (s?.y || 0) + (0 + ((s?.height || 69) - 0 - 78) / 2) + 20 + 0,
                                  ...K(
                                    {
                                      F5Rq0ZfkC: {
                                        y:
                                          (s?.y || 0) +
                                          12 +
                                          (((s?.height || 441) - 24 - 471) / 2 + 0 + 0) +
                                          0 +
                                          73 +
                                          0 +
                                          264,
                                      },
                                    },
                                    m,
                                    y
                                  ),
                                  children: f(j, {
                                    className: `framer-1x5hvco-container`,
                                    "data-framer-name": `Blog`,
                                    layoutDependency: S,
                                    layoutId: `kBqw_Pzi0-container`,
                                    name: `Blog`,
                                    nodeId: `kBqw_Pzi0`,
                                    rendersWithMotion: !0,
                                    scopeId: `PzKCHg_CL`,
                                    children: f(W, {
                                      fENPxPHfW: `Blog`,
                                      height: `100%`,
                                      id: `kBqw_Pzi0`,
                                      layoutId: `kBqw_Pzi0`,
                                      name: `Blog`,
                                      phXAhP2BN: e[0],
                                      qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                      variant: q(`hvqqqkMg0`),
                                      width: `100%`,
                                      ykltTf6lm: !1,
                                      ...K(
                                        {
                                          CB01XpOcI: { phXAhP2BN: e[1], variant: q(`rocWnCIUA`) },
                                          F5Rq0ZfkC: { phXAhP2BN: e[2], variant: q(`ClJx0ZTBy`) },
                                        },
                                        m,
                                        y
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            oe() &&
                              f(H, {
                                links: [
                                  {
                                    href: { webPageId: `sGcuUgaBJ` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `sGcuUgaBJ` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  f(z, {
                                    ...K(
                                      {
                                        F5Rq0ZfkC: {
                                          height: 36,
                                          y:
                                            (s?.y || 0) +
                                            12 +
                                            (((s?.height || 441) - 24 - 471) / 2 + 0 + 0) +
                                            0 +
                                            73 +
                                            0 +
                                            330,
                                        },
                                      },
                                      m,
                                      y
                                    ),
                                    children: f(j, {
                                      className: `framer-1ip8yal-container`,
                                      "data-framer-name": `Contact us`,
                                      layoutDependency: S,
                                      layoutId: `CMibe0H2_-container`,
                                      name: `Contact us`,
                                      nodeId: `CMibe0H2_`,
                                      rendersWithMotion: !0,
                                      scopeId: `PzKCHg_CL`,
                                      children: f(W, {
                                        fENPxPHfW: `Contact Us`,
                                        height: `100%`,
                                        id: `CMibe0H2_`,
                                        layoutId: `CMibe0H2_`,
                                        name: `Contact us`,
                                        phXAhP2BN: e[0],
                                        qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                        variant: q(`ClJx0ZTBy`),
                                        width: `100%`,
                                        ykltTf6lm: !1,
                                        ...K({ F5Rq0ZfkC: { phXAhP2BN: e[1] } }, m, y),
                                      }),
                                    }),
                                  }),
                              }),
                          ],
                        }),
                      A() &&
                        f(T.div, {
                          className: `framer-o09s3v`,
                          "data-framer-name": `Button`,
                          layoutDependency: S,
                          layoutId: `oDhZgMPH5`,
                          children: f(H, {
                            links: [
                              { href: { webPageId: `sGcuUgaBJ` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `sGcuUgaBJ` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              f(z, {
                                height: 48,
                                y: (s?.y || 0) + (0 + ((s?.height || 69) - 0 - 78) / 2) + 14 + 0,
                                children: f(Sn, {
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  animate: An,
                                  className: `framer-rkuqdx-container`,
                                  "data-framer-appear-id": `rkuqdx`,
                                  initial: jn,
                                  layoutDependency: S,
                                  layoutId: `NuxNxl_0P-container`,
                                  nodeId: `NuxNxl_0P`,
                                  optimized: !0,
                                  rendersWithMotion: !0,
                                  scopeId: `PzKCHg_CL`,
                                  children: f(at, {
                                    dQDe2ecMb: e[0],
                                    GGZTVUGZ5: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                    height: `100%`,
                                    id: `NuxNxl_0P`,
                                    LALAatWUM: `Book Counselling`,
                                    layoutId: `NuxNxl_0P`,
                                    lCPX_SQT2: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                    oAbfzaz1L: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                    qkIJkdmKd: !1,
                                    tWCC8YneY: `var(--token-c80313c8-a0c1-4f14-ad5e-9b2193d38589, rgb(178, 123, 0))`,
                                    variant: q(`d5yIOSrIQ`),
                                    width: `100%`,
                                    zkb7vpZI7: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                    ...K(
                                      {
                                        CB01XpOcI: {
                                          dQDe2ecMb: e[1],
                                          lCPX_SQT2: `var(--token-e7c48652-500b-4e4a-8db4-eff35eedeef5, rgba(255, 255, 255, 0.8))`,
                                          oAbfzaz1L: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                          tWCC8YneY: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                        },
                                      },
                                      m,
                                      y
                                    ),
                                  }),
                                }),
                              }),
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-AsZ1t.framer-kkn8j4, .framer-AsZ1t .framer-kkn8j4 { display: block; }`,
          `.framer-AsZ1t.framer-1am4r9l { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 32px 0px 32px; position: relative; width: 1200px; }`,
          `.framer-AsZ1t .framer-wye0lu { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1300px; overflow: visible; padding: 14px 0px 16px 0px; position: relative; width: 1px; }`,
          `.framer-AsZ1t .framer-4yblnf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 260px; overflow: visible; padding: 0px; position: relative; width: auto; }`,
          `.framer-AsZ1t .framer-2r7npf-container, .framer-AsZ1t .framer-q3j968-container, .framer-AsZ1t .framer-13h4gav-container, .framer-AsZ1t .framer-9dushn-container, .framer-AsZ1t .framer-1w5slhf-container, .framer-AsZ1t .framer-1x5hvco-container, .framer-AsZ1t .framer-1ip8yal-container, .framer-AsZ1t .framer-rkuqdx-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-AsZ1t .framer-14s5xod-container { flex: none; height: 32px; position: relative; width: 32px; }`,
          `.framer-AsZ1t .framer-lskzko { flex: 1 0 0px; height: 1px; overflow: visible; position: relative; width: 1px; }`,
          `.framer-AsZ1t .framer-1b1fkzk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-AsZ1t .framer-o09s3v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-AsZ1t.framer-v-4nkped.framer-1am4r9l, .framer-AsZ1t.framer-v-1deylig.framer-1am4r9l { padding: 12px 16px 4px 16px; width: 358px; }`,
          `.framer-AsZ1t.framer-v-4nkped .framer-wye0lu, .framer-AsZ1t.framer-v-1deylig .framer-wye0lu { padding: 0px 0px 8px 0px; }`,
          `.framer-AsZ1t.framer-v-4nkped .framer-4yblnf, .framer-AsZ1t.framer-v-1deylig .framer-4yblnf { gap: unset; justify-content: space-between; max-width: unset; }`,
          `.framer-AsZ1t.framer-v-v8da33.framer-1am4r9l { cursor: pointer; flex-direction: column; gap: 20px; padding: 12px 16px 12px 16px; width: 358px; }`,
          `.framer-AsZ1t.framer-v-v8da33 .framer-wye0lu { flex: none; flex-direction: column; gap: 20px; justify-content: flex-start; order: 0; padding: 0px 0px 32px 0px; width: 100%; }`,
          `.framer-AsZ1t.framer-v-v8da33 .framer-4yblnf { flex: none; gap: unset; justify-content: space-between; max-width: unset; width: 100%; }`,
          `.framer-AsZ1t.framer-v-v8da33 .framer-lskzko { flex: none; width: 100%; }`,
          `.framer-AsZ1t.framer-v-v8da33 .framer-1b1fkzk { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 30px; width: 100%; }`,
          `.framer-AsZ1t.framer-v-v8da33 .framer-q3j968-container { order: 0; }`,
          `.framer-AsZ1t.framer-v-v8da33 .framer-13h4gav-container { order: 1; }`,
          `.framer-AsZ1t.framer-v-v8da33 .framer-9dushn-container { order: 2; }`,
          `.framer-AsZ1t.framer-v-v8da33 .framer-1w5slhf-container { order: 3; }`,
          `.framer-AsZ1t.framer-v-v8da33 .framer-1x5hvco-container { order: 4; }`,
          `.framer-AsZ1t.framer-v-v8da33 .framer-1ip8yal-container { order: 5; }`,
          `.framer-AsZ1t[data-border="true"]::after, .framer-AsZ1t [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-AsZ1t`
      )),
      (J.displayName = `Nav`),
      (J.defaultProps = { height: 69, width: 1200 }),
      B(J, {
        variant: {
          options: [`JPQI0m2Hl`, `CB01XpOcI`, `SdeYTPZIg`, `eCuEujbwX`, `F5Rq0ZfkC`],
          optionTitles: [
            `Desktop navigation`,
            `Desktop scroll`,
            `Mobile`,
            `Mobile Scroll closed`,
            `Mobile navigation opened`,
          ],
          title: `Variant`,
          type: V.Enum,
        },
      }),
      k(J, [{ explicitInter: !0, fonts: [] }, ...vn, ...yn, ...bn, ...xn], {
        supportsExplicitInterCodegen: !0,
      }),
      (J.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([A(U, {}, t), A(G, {}, t), A(W, {}, t), A(at, {}, t)])
        ),
      }));
  }),
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Y,
  Wn = e(() => {
    (y(),
      R(),
      l(),
      (Rn = `var(--framer-icon-mask)`),
      (zn = u(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Bn = T.create(zn)),
      (Vn = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(Bn, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (Hn = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 9.749 15.477 L 14.879 18.632 C 15.151 18.797 15.496 18.782 15.753 18.594 C 16.01 18.406 16.128 18.082 16.053 17.772 L 14.658 11.886 L 19.223 7.948 C 19.461 7.739 19.552 7.409 19.455 7.108 C 19.357 6.806 19.09 6.592 18.774 6.563 L 12.783 6.075 L 10.475 0.488 C 10.354 0.193 10.068 0 9.749 0 C 9.431 0 9.144 0.193 9.023 0.488 L 6.715 6.075 L 0.724 6.563 C 0.406 6.59 0.136 6.806 0.038 7.109 C -0.06 7.412 0.034 7.745 0.275 7.953 L 4.84 11.89 L 3.445 17.772 C 3.37 18.082 3.488 18.406 3.745 18.594 C 4.002 18.782 4.347 18.797 4.619 18.632 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="18.746261605760054px" id="t6hF1mhP1" transform="translate(2.251 2.25)" width="19.49332240036336px"/><path d="M 9.749 15.477 L 14.879 18.632 C 15.151 18.797 15.496 18.782 15.753 18.594 C 16.01 18.406 16.128 18.082 16.053 17.772 L 14.658 11.886 L 19.223 7.948 C 19.461 7.739 19.552 7.409 19.455 7.108 C 19.357 6.806 19.09 6.592 18.774 6.563 L 12.783 6.075 L 10.475 0.488 C 10.354 0.193 10.068 0 9.749 0 C 9.431 0 9.144 0.193 9.023 0.488 L 6.715 6.075 L 0.724 6.563 C 0.406 6.59 0.136 6.806 0.038 7.109 C -0.06 7.412 0.034 7.745 0.275 7.953 L 4.84 11.89 L 3.445 17.772 C 3.37 18.082 3.488 18.406 3.745 18.594 C 4.002 18.782 4.347 18.797 4.619 18.632 Z" fill="transparent" height="18.746261605760054px" id="b0GcHZb5O" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.251 2.25)" width="19.49332240036336px"/></svg>`),
      (Un = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (Y = F(
        u(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = Un(e),
            u = ue(`2930526878`, Hn);
          return f(Vn, {
            ...l,
            className: M(`framer-YnhV6`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: u }),
          });
        }),
        [
          `.framer-YnhV6 { -webkit-mask: ${Rn}; aspect-ratio: 1; display: block; mask: ${Rn}; width: 24px; }`,
        ],
        `framer-YnhV6`
      )),
      (Y.displayName = `Star`),
      B(Y, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: V.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: V.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: V.Number,
        },
      }));
  }),
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn = e(() => {
    (y(),
      R(),
      l(),
      (Gn = `var(--framer-icon-mask)`),
      (Kn = u(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (qn = T.create(Kn)),
      (Jn = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(qn, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (Yn = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 10 14 M 10 0 L 0 14" fill="transparent" height="14px" id="Qi8Lp_NLO" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(7 5)" width="10px"/></svg>`),
      (Xn = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (Zn = F(
        u(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = Xn(e),
            l = ue(`2502894650`, Yn);
          return f(Jn, {
            ...c,
            className: M(`framer-hM6J5`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: l }),
          });
        }),
        [
          `.framer-hM6J5 { -webkit-mask: ${Gn}; aspect-ratio: 1; display: block; mask: ${Gn}; width: 24px; }`,
        ],
        `framer-hM6J5`
      )),
      (Zn.displayName = `Alphabet X`),
      B(Zn, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: V.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: V.Number,
        },
      }));
  }),
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or = e(() => {
    (y(),
      R(),
      l(),
      ($n = `var(--framer-icon-mask)`),
      (er = u(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (tr = T.create(er)),
      (nr = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(tr, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (rr = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 6 L 6 12 L 18 0" fill="transparent" height="12px" id="KVyKpRjev" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(3 6)" width="18px"/></svg>`),
      (ir = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (ar = F(
        u(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = ir(e),
            l = ue(`1839610128`, rr);
          return f(nr, {
            ...c,
            className: M(`framer-MO1L3`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: l }),
          });
        }),
        [
          `.framer-MO1L3 { -webkit-mask: ${$n}; aspect-ratio: 1; display: block; mask: ${$n}; width: 24px; }`,
        ],
        `framer-MO1L3`
      )),
      (ar.displayName = `Check Good`),
      B(ar, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: V.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: V.Number,
        },
      }));
  }),
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr = e(() => {
    (y(),
      R(),
      l(),
      (sr = `var(--framer-icon-mask)`),
      (cr = u(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (lr = T.create(cr)),
      (ur = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(lr, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (dr = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 11.314 0 L 0 11.314" fill="transparent" height="11.31375px" id="OfxNkG6z8" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="var(--fbr8zx, 1.5)" stroke="var(--34440n, rgb(0, 0, 0))" transform="translate(6.343 6.343)" width="11.31366px"/><path d="M 10.834 10.834 L 10.834 1.538 C 10.835 1.336 10.795 1.136 10.718 0.949 C 10.641 0.762 10.528 0.592 10.385 0.449 C 10.242 0.306 10.072 0.192 9.885 0.115 C 9.698 0.038 9.498 -0.001 9.295 0 L 0 0" fill="transparent" height="10.833733225805112px" id="cf72FqlEm" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--fbr8zx, 1.5)" stroke="var(--34440n, rgb(0, 0, 0))" transform="translate(7.267 5.899)" width="10.833715152736417px"/></svg>`),
      (fr = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        htQyJXMKW: i ?? a.htQyJXMKW ?? 1.5,
        jDue3c8Jy: e ?? a.jDue3c8Jy ?? `rgb(0, 0, 0)`,
      })),
      (pr = F(
        u(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              jDue3c8Jy: o,
              htQyJXMKW: s,
              ...c
            } = fr(e),
            l = ue(`933102033`, dr);
          return f(ur, {
            ...c,
            className: M(`framer-UYIEC`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--34440n": o, "--fbr8zx": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: l }),
          });
        }),
        [
          `.framer-UYIEC { -webkit-mask: ${sr}; aspect-ratio: 1; display: block; mask: ${sr}; width: 24px; }`,
        ],
        `framer-UYIEC`
      )),
      (pr.displayName = `Arrow Up Right`),
      B(pr, {
        jDue3c8Jy: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: V.Color },
        htQyJXMKW: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 8,
          min: 1,
          title: `Width`,
          type: V.Number,
        },
      }));
  });
function hr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  X,
  Or = e(() => {
    (y(),
      R(),
      O(),
      l(),
      Qn(),
      or(),
      mr(),
      (gr = I(pr)),
      (_r = { jR6RQZYy2: { hover: !0 } }),
      (vr = [`jR6RQZYy2`, `Fikir83bI`, `kcHNleDja`, `WlZOo6YBY`]),
      (yr = `framer-rRR1t`),
      (br = {
        Fikir83bI: `framer-v-13t4ezj`,
        jR6RQZYy2: `framer-v-oxcq9p`,
        kcHNleDja: `framer-v-14ea9k1`,
        WlZOo6YBY: `framer-v-2tz9xe`,
      }),
      (xr = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Sr = (e, t) => `translate(-50%, -50%) ${t}`),
      (Cr = ({ value: e, children: t }) => {
        let n = h(E),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(E.Provider, { value: i, children: t });
      }),
      (wr = {
        Default: `jR6RQZYy2`,
        Disabled: `Fikir83bI`,
        Error: `WlZOo6YBY`,
        Success: `kcHNleDja`,
      }),
      (Tr = T.create(r)),
      (Er = ({ color: e, fill: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        bZkxe3HHi:
          e ??
          a.bZkxe3HHi ??
          `var(--token-3bacfb60-2898-4cf8-b6ee-027ac8520a73, rgb(255, 255, 255))`,
        PLPy8Quoc: t ?? a.PLPy8Quoc ?? `rgba(255, 255, 255, 0.2)`,
        variant: wr[a.variant] ?? a.variant ?? `jR6RQZYy2`,
      })),
      (Dr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = F(
        u(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = re(),
            { activeLocale: a, setLocale: o } = pe();
          je();
          let {
              style: s,
              className: c,
              layoutId: l,
              variant: u,
              bZkxe3HHi: d,
              PLPy8Quoc: p,
              ...m
            } = Er(e),
            {
              baseVariant: h,
              classNames: v,
              clearLoadingGesture: ee,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: te,
              setVariant: ne,
              variants: S,
            } = Ve({
              cycleOrder: vr,
              defaultVariant: `jR6RQZYy2`,
              enabledGestures: _r,
              ref: r,
              variant: u,
              variantClassNames: br,
            }),
            C = Dr(e, S),
            w = M(yr),
            E = () => !![`kcHNleDja`, `WlZOo6YBY`].includes(h);
          return f(D, {
            id: l ?? i,
            children: f(Tr, {
              animate: S,
              initial: !1,
              children: f(Cr, {
                value: xr,
                children: f(T.button, {
                  ...m,
                  ...y,
                  className: M(w, `framer-oxcq9p`, c, v),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: C,
                  layoutId: `jR6RQZYy2`,
                  ref: r,
                  style: {
                    borderBottomLeftRadius: 9,
                    borderBottomRightRadius: 9,
                    borderTopLeftRadius: 9,
                    borderTopRightRadius: 9,
                    opacity: 1,
                    ...s,
                  },
                  variants: {
                    "jR6RQZYy2-hover": { opacity: 0.5 },
                    Fikir83bI: { opacity: 0.5 },
                    kcHNleDja: { opacity: 1 },
                    WlZOo6YBY: { opacity: 1 },
                  },
                  ...hr(
                    {
                      "jR6RQZYy2-hover": { "data-framer-name": void 0 },
                      Fikir83bI: { "data-framer-name": `Disabled` },
                      kcHNleDja: { "data-framer-name": `Success` },
                      WlZOo6YBY: { "data-framer-name": `Error` },
                    },
                    h,
                    b
                  ),
                  children: _(T.div, {
                    className: `framer-1utsz6q`,
                    "data-border": !0,
                    layoutDependency: C,
                    layoutId: `mwmAP4Ujq`,
                    style: {
                      "--border-bottom-width": `0.5px`,
                      "--border-color": `rgba(255, 255, 255, 0.2)`,
                      "--border-left-width": `0.5px`,
                      "--border-right-width": `0.5px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0.5px`,
                      backgroundColor: p,
                      borderBottomLeftRadius: 11,
                      borderBottomRightRadius: 11,
                      borderTopLeftRadius: 11,
                      borderTopRightRadius: 11,
                    },
                    variants: {
                      kcHNleDja: {
                        backgroundColor: `var(--token-90eb39eb-8ae7-4d64-805e-41357c9bae67, rgb(255, 255, 255))`,
                      },
                      WlZOo6YBY: {
                        backgroundColor: `var(--token-90eb39eb-8ae7-4d64-805e-41357c9bae67, rgb(255, 255, 255))`,
                      },
                    },
                    children: [
                      E() &&
                        f(Me, {
                          animated: !0,
                          className: `framer-1nmpjpe`,
                          Component: ar,
                          layoutDependency: C,
                          layoutId: `ZNuBlIEfs`,
                          style: {
                            "--1ww558a": 1.5,
                            "--4rxgx6": `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18))`,
                          },
                          ...hr(
                            {
                              WlZOo6YBY: {
                                Component: Zn,
                                CRY1Fpez4: `var(--token-4e1e9419-eb3c-4fbd-bf8e-761d2269bc81, rgb(237, 2, 2))`,
                                height: `100%`,
                                id: `ZNuBlIEfs`,
                                style: { height: `100%`, width: `100%` },
                                vet7gqNu_: 1.5,
                                width: `100%`,
                              },
                            },
                            h,
                            b
                          ),
                        }),
                      f(pr, {
                        animated: !0,
                        className: `framer-1kyue1m`,
                        "data-framer-name": `1`,
                        layoutDependency: C,
                        layoutId: `p6RjXWqk8`,
                        style: {
                          "--34440n": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                          "--fbr8zx": 1.5,
                        },
                      }),
                      f(pr, {
                        animated: !0,
                        className: `framer-ieinje`,
                        "data-framer-name": `2`,
                        layoutDependency: C,
                        layoutId: `P0hCF8XQk`,
                        style: { "--34440n": d, "--fbr8zx": 1.5 },
                        transformTemplate: Sr,
                        ...hr(
                          {
                            kcHNleDja: { transformTemplate: void 0 },
                            WlZOo6YBY: { transformTemplate: void 0 },
                          },
                          h,
                          b
                        ),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-rRR1t.framer-sg1guk, .framer-rRR1t .framer-sg1guk { display: block; }`,
          `.framer-rRR1t.framer-oxcq9p { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 38px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 38px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-rRR1t .framer-1utsz6q { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 38px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-rRR1t .framer-1nmpjpe { flex: none; height: auto; position: relative; width: 18px; }`,
          `.framer-rRR1t .framer-1kyue1m { bottom: -14px; flex: none; height: auto; left: -15px; position: absolute; width: 18px; z-index: 1; }`,
          `.framer-rRR1t .framer-ieinje { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: 18px; z-index: 1; }`,
          `.framer-rRR1t.framer-v-13t4ezj.framer-oxcq9p { cursor: unset; height: min-content; width: min-content; }`,
          `.framer-rRR1t.framer-v-14ea9k1.framer-oxcq9p, .framer-rRR1t.framer-v-2tz9xe.framer-oxcq9p { cursor: unset; }`,
          `.framer-rRR1t.framer-v-14ea9k1 .framer-1kyue1m, .framer-rRR1t.framer-v-2tz9xe .framer-1kyue1m { bottom: unset; left: unset; right: -14px; top: -14px; }`,
          `.framer-rRR1t.framer-v-14ea9k1 .framer-ieinje, .framer-rRR1t.framer-v-2tz9xe .framer-ieinje { left: unset; right: -30px; top: -30px; }`,
          `.framer-rRR1t.framer-v-2tz9xe .framer-1nmpjpe { height: 18px; }`,
          `.framer-rRR1t[data-border="true"]::after, .framer-rRR1t [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-rRR1t`
      )),
      (X.displayName = `Newsletter Button`),
      (X.defaultProps = { height: 38, width: 38 }),
      B(X, {
        variant: {
          options: [`jR6RQZYy2`, `Fikir83bI`, `kcHNleDja`, `WlZOo6YBY`],
          optionTitles: [`Default`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: V.Enum,
        },
        bZkxe3HHi: {
          defaultValue: `var(--token-3bacfb60-2898-4cf8-b6ee-027ac8520a73, rgb(255, 255, 255))`,
          title: `Color`,
          type: V.Color,
        },
        PLPy8Quoc: { defaultValue: `rgba(255, 255, 255, 0.2)`, title: `Fill`, type: V.Color },
      }),
      k(X, [{ explicitInter: !0, fonts: [] }, ...gr], { supportsExplicitInterCodegen: !0 }));
  });
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Q,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  $,
  Qr = e(() => {
    (y(),
      R(),
      O(),
      l(),
      Wn(),
      mt(),
      gt(),
      qe(),
      bt(),
      Xe(),
      Ye(),
      it(),
      an(),
      Or(),
      (kr = oe(P)),
      (Ar = I(at)),
      (jr = I(Y)),
      (Mr = oe(T.div)),
      (Nr = I(X)),
      (Pr = I(W)),
      (Fr = [`mmUWDgbRY`, `p0FoBe3Zg`, `nkuMNWIlZ`]),
      (Ir = `framer-DgnMx`),
      (Lr = {
        mmUWDgbRY: `framer-v-nflg8x`,
        nkuMNWIlZ: `framer-v-bcbavv`,
        p0FoBe3Zg: `framer-v-aab0ug`,
      }),
      (Rr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (zr = {
        filter: `blur(8px)`,
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (Br = { damping: 80, delay: 0, mass: 1, stiffness: 200, type: `spring` }),
      (Vr = {
        effect: zr,
        repeat: !1,
        startDelay: 0,
        threshold: 0,
        tokenization: `word`,
        transition: Br,
        trigger: `onInView`,
        type: `appear`,
      }),
      (Hr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (Ur = { damping: 80, delay: 0.1, mass: 1, stiffness: 200, type: `spring` }),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Wr = (e, t, n) => {
        switch (e.state) {
          case `success`:
            return t.success ?? n;
          case `pending`:
            return t.pending ?? n;
          case `error`:
            return t.error ?? n;
          case `incomplete`:
            return t.incomplete ?? n;
          default:
            return n;
        }
      }),
      (Gr = () => ({
        from: { alias: `lLPCWSUD4`, data: ht, type: `Collection` },
        select: [
          { collection: `lLPCWSUD4`, name: `TImVM2TSg`, type: `Identifier` },
          { collection: `lLPCWSUD4`, name: `gURS0n4RS`, type: `Identifier` },
          { collection: `lLPCWSUD4`, name: `id`, type: `Identifier` },
        ],
      })),
      (Kr = ({ query: e, pageSize: t, children: n }) => n(Ge(e))),
      (qr = ({ value: e, children: t }) => {
        let n = h(E),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(E.Provider, { value: i, children: t });
      }),
      (Jr = { Desktop: `mmUWDgbRY`, Phone: `nkuMNWIlZ`, Tablet: `p0FoBe3Zg` }),
      (Yr = T.create(r)),
      (Xr = ({ cTAVisible: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        RfJ4jqjRp: e ?? i.RfJ4jqjRp ?? !0,
        variant: Jr[i.variant] ?? i.variant ?? `mmUWDgbRY`,
      })),
      (Zr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = F(
        u(function (e, t) {
          let n = g(null),
            i = t ?? n,
            a = re(),
            { activeLocale: o, setLocale: s } = pe(),
            c = je(),
            { style: l, className: u, layoutId: d, variant: p, RfJ4jqjRp: m, ...h } = Xr(e),
            {
              baseVariant: v,
              classNames: ee,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: ne,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = Ve({
              cycleOrder: Fr,
              defaultVariant: `mmUWDgbRY`,
              ref: i,
              variant: p,
              variantClassNames: Lr,
            }),
            E = Zr(e, w),
            O = M(Ir, Ke, tt, Ct, Qe, yt);
          return (
            Ue(),
            f(D, {
              id: d ?? a,
              children: f(Yr, {
                animate: w,
                initial: !1,
                children: f(qr, {
                  value: Rr,
                  children: _(T.section, {
                    ...h,
                    ...b,
                    className: M(O, `framer-nflg8x`, u, ee),
                    "data-framer-name": `Desktop`,
                    layoutDependency: E,
                    layoutId: `mmUWDgbRY`,
                    ref: i,
                    style: {
                      backgroundColor: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                      ...l,
                    },
                    ...Z(
                      {
                        nkuMNWIlZ: { "data-framer-name": `Phone` },
                        p0FoBe3Zg: { "data-framer-name": `Tablet` },
                      },
                      v,
                      x
                    ),
                    children: [
                      f(T.section, {
                        className: `framer-hy3wv1`,
                        "data-framer-name": `Content Container`,
                        layoutDependency: E,
                        layoutId: `XHOPbFXOw`,
                        children: _(T.div, {
                          className: `framer-12d3d5l`,
                          "data-framer-name": `Content`,
                          layoutDependency: E,
                          layoutId: `iEB2ZDwWn`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `rgba(0, 0, 0, 0)`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          variants: {
                            nkuMNWIlZ: {
                              "--border-bottom-width": `0px`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-top-width": `0px`,
                            },
                            p0FoBe3Zg: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(59, 62, 72))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                          },
                          ...Z({ p0FoBe3Zg: { "data-border": !0 } }, v, x),
                          children: [
                            m !== !1 &&
                              f(T.div, {
                                className: `framer-94t11s`,
                                layoutDependency: E,
                                layoutId: `koOtunfmN`,
                                children: _(T.div, {
                                  className: `framer-13b95lp`,
                                  "data-framer-name": `CTA`,
                                  layoutDependency: E,
                                  layoutId: `XQlGYTw3D`,
                                  style: {
                                    borderBottomLeftRadius: 24,
                                    borderBottomRightRadius: 24,
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24,
                                  },
                                  variants: {
                                    nkuMNWIlZ: {
                                      borderBottomLeftRadius: 18,
                                      borderBottomRightRadius: 18,
                                      borderTopLeftRadius: 18,
                                      borderTopRightRadius: 18,
                                    },
                                  },
                                  children: [
                                    f(T.div, {
                                      className: `framer-u5sl9s`,
                                      "data-framer-name": `Gradient`,
                                      layoutDependency: E,
                                      layoutId: `E29KeEgyU`,
                                      style: {
                                        background: `linear-gradient(9deg, var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88)) -10%, rgba(12, 14, 18, 0.2) 27%, rgba(12, 17, 28, 0.15) 93%)`,
                                      },
                                    }),
                                    f(Fe, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 2703,
                                        intrinsicWidth: 4104,
                                        pixelHeight: 2703,
                                        pixelWidth: 4104,
                                        positionX: `52.2%`,
                                        positionY: `57.9%`,
                                        sizes: `min(${c?.width || `100vw`} - 64px, 1300px)`,
                                        src: `../../assets/stock/stock_about_graduation.jpg`,
                                        srcSet: `../../assets/images/bSorq8bY0mxOEBCUceu6z6sLCE-5efcbb.webp 512w,../../assets/images/bSorq8bY0mxOEBCUceu6z6sLCE-a52e40.webp 1024w,../../assets/images/bSorq8bY0mxOEBCUceu6z6sLCE.webp 2048w,../../assets/images/bSorq8bY0mxOEBCUceu6z6sLCE-a712b4.webp 4096w,../../assets/stock/stock_about_graduation.jpg 4104w`,
                                      },
                                      className: `framer-1s9vg2e`,
                                      "data-framer-name": `Image`,
                                      layoutDependency: E,
                                      layoutId: `o8vCAthED`,
                                      style: { opacity: 0.5 },
                                      ...Z(
                                        {
                                          nkuMNWIlZ: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 2703,
                                              intrinsicWidth: 4104,
                                              pixelHeight: 2703,
                                              pixelWidth: 4104,
                                              positionX: `52.2%`,
                                              positionY: `57.9%`,
                                              sizes: `min(${c?.width || `100vw`} - 32px, 1300px)`,
                                              src: `../../assets/stock/stock_about_graduation.jpg`,
                                              srcSet: `../../assets/images/bSorq8bY0mxOEBCUceu6z6sLCE-5efcbb.webp 512w,../../assets/images/bSorq8bY0mxOEBCUceu6z6sLCE-a52e40.webp 1024w,../../assets/images/bSorq8bY0mxOEBCUceu6z6sLCE.webp 2048w,../../assets/images/bSorq8bY0mxOEBCUceu6z6sLCE-a712b4.webp 4096w,../../assets/stock/stock_about_graduation.jpg 4104w`,
                                            },
                                          },
                                        },
                                        v,
                                        x
                                      ),
                                    }),
                                    f(P, {
                                      __fromCanvasComponent: !0,
                                      children: f(r, {
                                        children: f(T.h2, {
                                          className: `framer-styles-preset-9lpzun`,
                                          "data-styles-preset": `kH4hVkPTC`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `center` },
                                          children: `Ready To Plan Your College Admissions?`,
                                        }),
                                      }),
                                      className: `framer-1ljhkg8`,
                                      effect: Vr,
                                      fonts: [`Inter`],
                                      layoutDependency: E,
                                      layoutId: `IPFBxYFpv`,
                                      style: {
                                        "--framer-link-text-color": `rgb(255, 230, 0)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    _(T.div, {
                                      className: `framer-1egnpj4`,
                                      "data-framer-name": `Body`,
                                      layoutDependency: E,
                                      layoutId: `STVa087xH`,
                                      children: [
                                        f(kr, {
                                          __framer__animate: { transition: Br },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Hr,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __fromCanvasComponent: !0,
                                          __perspectiveFX: !1,
                                          __smartComponentFX: !0,
                                          __targetOpacity: 0.85,
                                          children: f(r, {
                                            children: f(T.p, {
                                              className: `framer-styles-preset-1xheykw`,
                                              "data-styles-preset": `vz9muakNv`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                              },
                                              children: `Talk to a counsellor about your profile, your goals and the best path to secure top college admissions and build your career in India.`,
                                            }),
                                          }),
                                          className: `framer-jm6kiu`,
                                          fonts: [`Inter`],
                                          layoutDependency: E,
                                          layoutId: `OJSefusr5`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                            "--framer-link-text-color": `rgb(255, 230, 0)`,
                                            "--framer-link-text-decoration": `underline`,
                                            opacity: 0.85,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        _(Mr, {
                                          __framer__animate: { transition: Ur },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Hr,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __perspectiveFX: !1,
                                          __smartComponentFX: !0,
                                          __targetOpacity: 1,
                                          className: `framer-55wcv6`,
                                          "data-framer-name": `Button + Rating`,
                                          layoutDependency: E,
                                          layoutId: `rbNvg5lrw`,
                                          children: [
                                            f(H, {
                                              links: [
                                                {
                                                  href: { webPageId: `sGcuUgaBJ` },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: { webPageId: `sGcuUgaBJ` },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: { webPageId: `sGcuUgaBJ` },
                                                  implicitPathVariables: void 0,
                                                },
                                              ],
                                              children: (e) =>
                                                f(z, {
                                                  height: 48,
                                                  children: f(j, {
                                                    className: `framer-1hawk0x-container`,
                                                    layoutDependency: E,
                                                    layoutId: `av5J8I3sL-container`,
                                                    nodeId: `av5J8I3sL`,
                                                    rendersWithMotion: !0,
                                                    scopeId: `WFdOf_LUe`,
                                                    children: f(at, {
                                                      dQDe2ecMb: e[0],
                                                      GGZTVUGZ5: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                                      height: `100%`,
                                                      id: `av5J8I3sL`,
                                                      LALAatWUM: `Book Counselling`,
                                                      layoutId: `av5J8I3sL`,
                                                      lCPX_SQT2: `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                                      oAbfzaz1L: `var(--token-6d152444-b214-4d88-ac2d-36028b1469f8, rgb(255, 219, 88))`,
                                                      qkIJkdmKd: !1,
                                                      tWCC8YneY: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                      variant: Q(`AScdeMxwS`),
                                                      width: `100%`,
                                                      zkb7vpZI7: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                      ...Z(
                                                        {
                                                          nkuMNWIlZ: { dQDe2ecMb: e[2] },
                                                          p0FoBe3Zg: { dQDe2ecMb: e[1] },
                                                        },
                                                        v,
                                                        x
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                            }),
                                            _(T.div, {
                                              className: `framer-as7wo8`,
                                              "data-framer-name": `rating`,
                                              layoutDependency: E,
                                              layoutId: `d53IrUF6A`,
                                              children: [
                                                _(T.div, {
                                                  className: `framer-wv5h7g`,
                                                  "data-framer-name": `rating-wrapper`,
                                                  layoutDependency: E,
                                                  layoutId: `x0y0knPpQ`,
                                                  children: [
                                                    f(P, {
                                                      __fromCanvasComponent: !0,
                                                      children: f(r, {
                                                        children: f(T.p, {
                                                          className: `framer-styles-preset-1xheykw`,
                                                          "data-styles-preset": `vz9muakNv`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                                          },
                                                          children: f(T.strong, {
                                                            children: ``,
                                                          }),
                                                        }),
                                                      }),
                                                      className: `framer-k5c1jt`,
                                                      fonts: [`Inter`, `Inter-Bold`],
                                                      layoutDependency: E,
                                                      layoutId: `VxLkZ5Zzh`,
                                                      style: {
                                                        "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                        "--framer-link-text-color": `rgb(255, 230, 0)`,
                                                        "--framer-link-text-decoration": `underline`,
                                                        opacity: 0.65,
                                                      },
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    _(T.div, {
                                                      className: `framer-1l0kjsg`,
                                                      "data-framer-name": `stars`,
                                                      layoutDependency: E,
                                                      layoutId: `uC2PHgbrm`,
                                                      children: [
                                                        f(Y, {
                                                          animated: !0,
                                                          className: `framer-18miptu`,
                                                          layoutDependency: E,
                                                          layoutId: `f6APQSCAj`,
                                                          style: {
                                                            "--1m6trwb": 1,
                                                            "--21h8s6": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                            "--pgex8v": 1.3,
                                                          },
                                                        }),
                                                        f(Y, {
                                                          animated: !0,
                                                          className: `framer-1fherq5`,
                                                          layoutDependency: E,
                                                          layoutId: `zvZo9tBL5`,
                                                          style: {
                                                            "--1m6trwb": 1,
                                                            "--21h8s6": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                            "--pgex8v": 1.3,
                                                          },
                                                        }),
                                                        f(Y, {
                                                          animated: !0,
                                                          className: `framer-3m2qiz`,
                                                          layoutDependency: E,
                                                          layoutId: `J_2j5I_B8`,
                                                          style: {
                                                            "--1m6trwb": 1,
                                                            "--21h8s6": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                            "--pgex8v": 1.3,
                                                          },
                                                        }),
                                                        f(Y, {
                                                          animated: !0,
                                                          className: `framer-x1a9nw`,
                                                          layoutDependency: E,
                                                          layoutId: `YrLKgNF5e`,
                                                          style: {
                                                            "--1m6trwb": 1,
                                                            "--21h8s6": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                            "--pgex8v": 1.3,
                                                          },
                                                        }),
                                                        f(Y, {
                                                          animated: !0,
                                                          className: `framer-1nxcebl`,
                                                          layoutDependency: E,
                                                          layoutId: `L17Y0zfbR`,
                                                          style: {
                                                            "--1m6trwb": 1,
                                                            "--21h8s6": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                            "--pgex8v": 1.3,
                                                          },
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                f(T.div, {
                                                  className: `framer-zao0qa`,
                                                  "data-framer-name": `reviews-wrapper`,
                                                  layoutDependency: E,
                                                  layoutId: `NpOimqA2W`,
                                                  children: f(P, {
                                                    __fromCanvasComponent: !0,
                                                    children: f(r, {
                                                      children: f(T.p, {
                                                        className: `framer-styles-preset-115hxpd`,
                                                        "data-styles-preset": `mdo3XsYBf`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                                        },
                                                        children: `Guidance for students across India`,
                                                      }),
                                                    }),
                                                    className: `framer-1ighzst`,
                                                    fonts: [`Inter`],
                                                    layoutDependency: E,
                                                    layoutId: `JlvHcJT8d`,
                                                    style: {
                                                      "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                      "--framer-link-text-color": `rgb(255, 230, 0)`,
                                                      "--framer-link-text-decoration": `underline`,
                                                      opacity: 0.85,
                                                    },
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            f(T.div, {
                              className: `framer-nxoz60`,
                              "data-border": !0,
                              layoutDependency: E,
                              layoutId: `tGYoODqjc`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                              },
                              children: _(T.div, {
                                className: `framer-1qkkozq`,
                                "data-border": !0,
                                "data-framer-name": `Menu`,
                                layoutDependency: E,
                                layoutId: `y9t497J1t`,
                                style: {
                                  "--border-bottom-width": `0px`,
                                  "--border-color": `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `0px`,
                                },
                                variants: {
                                  nkuMNWIlZ: {
                                    "--border-color": `var(--token-11c233ce-ba11-4e3a-ba1d-5be950195b79, rgb(1, 43, 48))`,
                                    "--border-left-width": `0px`,
                                    "--border-right-width": `0px`,
                                  },
                                },
                                children: [
                                  _(Mr, {
                                    __framer__animate: { transition: Br },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Hr,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    className: `framer-i24vca`,
                                    "data-framer-name": `Left Content`,
                                    layoutDependency: E,
                                    layoutId: `TIrrSmW24`,
                                    children: [
                                      f(P, {
                                        __fromCanvasComponent: !0,
                                        children: f(r, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-qlsyr3`,
                                            "data-styles-preset": `YMpbOMTQr`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                            },
                                            children: `Insights on market trends, opportunities, and key movements`,
                                          }),
                                        }),
                                        className: `framer-rvuykr`,
                                        fonts: [`Inter`],
                                        layoutDependency: E,
                                        layoutId: `aFodHZky6`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      _(T.div, {
                                        className: `framer-1dc3u87`,
                                        layoutDependency: E,
                                        layoutId: `wKD_sTCt3`,
                                        children: [
                                          f(_e, {
                                            action: `https://api.framer.com/forms/v1/forms/fc9f309f-d8ea-466b-ba28-3506a215558b/submit`,
                                            className: `framer-1xyvegf`,
                                            layoutDependency: E,
                                            layoutId: `qR6MujSjO`,
                                            nodeId: `qR6MujSjO`,
                                            style: {
                                              borderBottomLeftRadius: 1,
                                              borderBottomRightRadius: 1,
                                              borderTopLeftRadius: 1,
                                              borderTopRightRadius: 1,
                                            },
                                            children: (e) =>
                                              _(te, {
                                                children: [
                                                  f(T.label, {
                                                    className: `framer-zo9e2a`,
                                                    layoutDependency: E,
                                                    layoutId: `inE9St2LY`,
                                                    children: f(Ae, {
                                                      className: `framer-9sdsy9`,
                                                      inputName: `Email`,
                                                      layoutDependency: E,
                                                      layoutId: `dUbpApKcR`,
                                                      placeholder: `Your email `,
                                                      required: !0,
                                                      style: {
                                                        "--framer-input-border-bottom-width": `1px`,
                                                        "--framer-input-border-color": `var(--token-276bb6d3-2c53-44f6-8d0c-76c3e7b6c596, rgba(255, 255, 255, 0.08))`,
                                                        "--framer-input-border-left-width": `1px`,
                                                        "--framer-input-border-radius-bottom-left": `11px`,
                                                        "--framer-input-border-radius-bottom-right": `11px`,
                                                        "--framer-input-border-radius-top-left": `11px`,
                                                        "--framer-input-border-radius-top-right": `11px`,
                                                        "--framer-input-border-right-width": `1px`,
                                                        "--framer-input-border-style": `solid`,
                                                        "--framer-input-border-top-width": `1px`,
                                                        "--framer-input-font-color": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                        "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                                        "--framer-input-placeholder-color": `var(--token-e71b4247-b025-46c1-bf5c-58a3788f18a1, rgba(255, 255, 255, 0.4))`,
                                                      },
                                                      type: `email`,
                                                    }),
                                                  }),
                                                  f(z, {
                                                    height: 40,
                                                    width: `40px`,
                                                    children: f(j, {
                                                      className: `framer-1rrchm8-container`,
                                                      layoutDependency: E,
                                                      layoutId: `tgNxdaUJn-container`,
                                                      nodeId: `tgNxdaUJn`,
                                                      rendersWithMotion: !0,
                                                      scopeId: `WFdOf_LUe`,
                                                      children: f(X, {
                                                        bZkxe3HHi: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                                        height: `100%`,
                                                        id: `tgNxdaUJn`,
                                                        layoutId: `tgNxdaUJn`,
                                                        PLPy8Quoc: `var(--token-276bb6d3-2c53-44f6-8d0c-76c3e7b6c596, rgba(255, 255, 255, 0.08))`,
                                                        style: { height: `100%`, width: `100%` },
                                                        type: `submit`,
                                                        variant: Wr(
                                                          e,
                                                          {
                                                            error: `WlZOo6YBY`,
                                                            success: `kcHNleDja`,
                                                          },
                                                          Q(`jR6RQZYy2`)
                                                        ),
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                          }),
                                          f(P, {
                                            __fromCanvasComponent: !0,
                                            children: f(r, {
                                              children: f(T.p, {
                                                className: `framer-styles-preset-115hxpd`,
                                                "data-styles-preset": `mdo3XsYBf`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                                },
                                                children: `Your data is handled with discretion`,
                                              }),
                                            }),
                                            className: `framer-8aofjd`,
                                            fonts: [`Inter`],
                                            layoutDependency: E,
                                            layoutId: `zlIXxHabh`,
                                            style: {
                                              "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                              "--framer-paragraph-spacing": `0px`,
                                              opacity: 0.65,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  _(Mr, {
                                    __framer__animate: { transition: Br },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Hr,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    className: `framer-h8cq0h`,
                                    "data-framer-name": `Services Container`,
                                    layoutDependency: E,
                                    layoutId: `DTlowB3OI`,
                                    children: [
                                      f(P, {
                                        __fromCanvasComponent: !0,
                                        children: f(r, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-12qamiq`,
                                            "data-styles-preset": `e_qtYqPa5`,
                                            dir: `auto`,
                                            children: `Services`,
                                          }),
                                        }),
                                        className: `framer-1g1hw3i`,
                                        fonts: [`Inter`],
                                        layoutDependency: E,
                                        layoutId: `gwEelGf2X`,
                                        style: {
                                          "--framer-link-text-color": `rgb(255, 230, 0)`,
                                          "--framer-link-text-decoration": `underline`,
                                          opacity: 0.75,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      f(T.div, {
                                        className: `framer-zcaf9v`,
                                        layoutDependency: E,
                                        layoutId: `lLPCWSUD4`,
                                        children: f(Ne, {
                                          children: f(Kr, {
                                            query: Gr(),
                                            children: (e, t, n) =>
                                              f(te, {
                                                children: e?.map(
                                                  ({ gURS0n4RS: e, id: t, TImVM2TSg: n }, r) => (
                                                    (n ??= ``),
                                                    (e ??= ``),
                                                    f(
                                                      D,
                                                      {
                                                        id: `lLPCWSUD4-${t}`,
                                                        children: f(ge.Provider, {
                                                          value: { gURS0n4RS: e },
                                                          children: f(H, {
                                                            links: [
                                                              {
                                                                href: {
                                                                  pathVariables: { gURS0n4RS: e },
                                                                  webPageId: `bAcjwMNPv`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                              {
                                                                href: {
                                                                  pathVariables: { gURS0n4RS: e },
                                                                  webPageId: `bAcjwMNPv`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                              {
                                                                href: {
                                                                  pathVariables: { gURS0n4RS: e },
                                                                  webPageId: `bAcjwMNPv`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                            ],
                                                            children: (e) =>
                                                              f(z, {
                                                                height: 36,
                                                                children: f(j, {
                                                                  className: `framer-oduvii-container`,
                                                                  layoutDependency: E,
                                                                  layoutId: `Rn4bdrO_q-container`,
                                                                  nodeId: `Rn4bdrO_q`,
                                                                  rendersWithMotion: !0,
                                                                  scopeId: `WFdOf_LUe`,
                                                                  children: f(W, {
                                                                    fENPxPHfW: n,
                                                                    height: `100%`,
                                                                    id: `Rn4bdrO_q`,
                                                                    layoutId: `Rn4bdrO_q`,
                                                                    phXAhP2BN: e[0],
                                                                    qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                                                    variant: Q(`LFtgsHFUq`),
                                                                    width: `100%`,
                                                                    ykltTf6lm: !1,
                                                                    ...Z(
                                                                      {
                                                                        nkuMNWIlZ: {
                                                                          phXAhP2BN: e[2],
                                                                        },
                                                                        p0FoBe3Zg: {
                                                                          phXAhP2BN: e[1],
                                                                        },
                                                                      },
                                                                      v,
                                                                      x
                                                                    ),
                                                                  }),
                                                                }),
                                                              }),
                                                          }),
                                                        }),
                                                      },
                                                      t
                                                    )
                                                  )
                                                ),
                                              }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  _(Mr, {
                                    __framer__animate: { transition: Br },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Hr,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    className: `framer-g032r`,
                                    "data-framer-name": `Services Container`,
                                    layoutDependency: E,
                                    layoutId: `itZJvWJKl`,
                                    children: [
                                      f(P, {
                                        __fromCanvasComponent: !0,
                                        children: f(r, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-12qamiq`,
                                            "data-styles-preset": `e_qtYqPa5`,
                                            dir: `auto`,
                                            children: `pages`,
                                          }),
                                        }),
                                        className: `framer-tfl1yw`,
                                        fonts: [`Inter`],
                                        layoutDependency: E,
                                        layoutId: `bQCt46LOi`,
                                        style: {
                                          "--framer-link-text-color": `rgb(255, 230, 0)`,
                                          "--framer-link-text-decoration": `underline`,
                                          opacity: 0.75,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      _(T.div, {
                                        className: `framer-1l2ja4l`,
                                        "data-framer-name": `Services`,
                                        layoutDependency: E,
                                        layoutId: `IyF2_Dil1`,
                                        children: [
                                          f(H, {
                                            links: [
                                              {
                                                href: { webPageId: `augiA20Il` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `augiA20Il` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `augiA20Il` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              f(z, {
                                                height: 36,
                                                children: f(j, {
                                                  className: `framer-1n6oel3-container`,
                                                  layoutDependency: E,
                                                  layoutId: `Hpl7KpV5w-container`,
                                                  nodeId: `Hpl7KpV5w`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `WFdOf_LUe`,
                                                  children: f(W, {
                                                    fENPxPHfW: `Home`,
                                                    height: `100%`,
                                                    id: `Hpl7KpV5w`,
                                                    layoutId: `Hpl7KpV5w`,
                                                    phXAhP2BN: e[0],
                                                    qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                                    variant: Q(`LFtgsHFUq`),
                                                    width: `100%`,
                                                    ykltTf6lm: !1,
                                                    ...Z(
                                                      {
                                                        nkuMNWIlZ: { phXAhP2BN: e[2] },
                                                        p0FoBe3Zg: { phXAhP2BN: e[1] },
                                                      },
                                                      v,
                                                      x
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          f(H, {
                                            links: [
                                              {
                                                href: { webPageId: `musfU1kBr` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `musfU1kBr` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `musfU1kBr` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              f(z, {
                                                height: 36,
                                                children: f(j, {
                                                  className: `framer-sy77mb-container`,
                                                  layoutDependency: E,
                                                  layoutId: `EEYZ_BXz6-container`,
                                                  nodeId: `EEYZ_BXz6`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `WFdOf_LUe`,
                                                  children: f(W, {
                                                    fENPxPHfW: `About`,
                                                    height: `100%`,
                                                    id: `EEYZ_BXz6`,
                                                    layoutId: `EEYZ_BXz6`,
                                                    phXAhP2BN: e[0],
                                                    qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                                    variant: Q(`LFtgsHFUq`),
                                                    width: `100%`,
                                                    ykltTf6lm: !1,
                                                    ...Z(
                                                      {
                                                        nkuMNWIlZ: { phXAhP2BN: e[2] },
                                                        p0FoBe3Zg: { phXAhP2BN: e[1] },
                                                      },
                                                      v,
                                                      x
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          f(H, {
                                            links: [
                                              {
                                                href: { webPageId: `Q0ojUtneJ` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `Q0ojUtneJ` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `Q0ojUtneJ` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              f(z, {
                                                height: 36,
                                                children: f(j, {
                                                  className: `framer-pmu55o-container`,
                                                  layoutDependency: E,
                                                  layoutId: `lw_Iklscr-container`,
                                                  nodeId: `lw_Iklscr`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `WFdOf_LUe`,
                                                  children: f(W, {
                                                    fENPxPHfW: `Services`,
                                                    height: `100%`,
                                                    id: `lw_Iklscr`,
                                                    layoutId: `lw_Iklscr`,
                                                    phXAhP2BN: e[0],
                                                    qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                                    variant: Q(`LFtgsHFUq`),
                                                    width: `100%`,
                                                    ykltTf6lm: !1,
                                                    ...Z(
                                                      {
                                                        nkuMNWIlZ: { phXAhP2BN: e[2] },
                                                        p0FoBe3Zg: { phXAhP2BN: e[1] },
                                                      },
                                                      v,
                                                      x
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          f(H, {
                                            links: [
                                              {
                                                href: { webPageId: `B1ccsbbPp` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `B1ccsbbPp` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `B1ccsbbPp` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              f(z, {
                                                height: 36,
                                                children: f(j, {
                                                  className: `framer-9t7ppv-container`,
                                                  layoutDependency: E,
                                                  layoutId: `zWbvSzCSq-container`,
                                                  nodeId: `zWbvSzCSq`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `WFdOf_LUe`,
                                                  children: f(W, {
                                                    fENPxPHfW: `Case Studies`,
                                                    height: `100%`,
                                                    id: `zWbvSzCSq`,
                                                    layoutId: `zWbvSzCSq`,
                                                    phXAhP2BN: e[0],
                                                    qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                                    variant: Q(`LFtgsHFUq`),
                                                    width: `100%`,
                                                    ykltTf6lm: !1,
                                                    ...Z(
                                                      {
                                                        nkuMNWIlZ: { phXAhP2BN: e[2] },
                                                        p0FoBe3Zg: { phXAhP2BN: e[1] },
                                                      },
                                                      v,
                                                      x
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          f(H, {
                                            links: [
                                              {
                                                href: { webPageId: `zitVyT7Oh` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `zitVyT7Oh` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `zitVyT7Oh` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              f(z, {
                                                height: 36,
                                                children: f(j, {
                                                  className: `framer-1awji17-container`,
                                                  layoutDependency: E,
                                                  layoutId: `bPVIyADDg-container`,
                                                  nodeId: `bPVIyADDg`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `WFdOf_LUe`,
                                                  children: f(W, {
                                                    fENPxPHfW: `How It Works`,
                                                    height: `100%`,
                                                    id: `bPVIyADDg`,
                                                    layoutId: `bPVIyADDg`,
                                                    phXAhP2BN: e[0],
                                                    qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                                    variant: Q(`LFtgsHFUq`),
                                                    width: `100%`,
                                                    ykltTf6lm: !1,
                                                    ...Z(
                                                      {
                                                        nkuMNWIlZ: { phXAhP2BN: e[2] },
                                                        p0FoBe3Zg: { phXAhP2BN: e[1] },
                                                      },
                                                      v,
                                                      x
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          f(H, {
                                            links: [
                                              {
                                                href: { webPageId: `sGcuUgaBJ` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `sGcuUgaBJ` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `sGcuUgaBJ` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              f(z, {
                                                height: 36,
                                                children: f(j, {
                                                  className: `framer-10v75ty-container`,
                                                  layoutDependency: E,
                                                  layoutId: `seDx4w_RD-container`,
                                                  nodeId: `seDx4w_RD`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `WFdOf_LUe`,
                                                  children: f(W, {
                                                    fENPxPHfW: `Contact`,
                                                    height: `100%`,
                                                    id: `seDx4w_RD`,
                                                    layoutId: `seDx4w_RD`,
                                                    phXAhP2BN: e[0],
                                                    qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                                    variant: Q(`LFtgsHFUq`),
                                                    width: `100%`,
                                                    ykltTf6lm: !1,
                                                    ...Z(
                                                      {
                                                        nkuMNWIlZ: { phXAhP2BN: e[2] },
                                                        p0FoBe3Zg: { phXAhP2BN: e[1] },
                                                      },
                                                      v,
                                                      x
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          f(H, {
                                            links: [
                                              {
                                                href: { webPageId: `EyK7bnNLZ` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `EyK7bnNLZ` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `EyK7bnNLZ` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              f(z, {
                                                height: 36,
                                                children: f(j, {
                                                  className: `framer-1bk2xrj-container`,
                                                  layoutDependency: E,
                                                  layoutId: `xBnV3TbXM-container`,
                                                  nodeId: `xBnV3TbXM`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `WFdOf_LUe`,
                                                  children: f(W, {
                                                    fENPxPHfW: `Blogs`,
                                                    height: `100%`,
                                                    id: `xBnV3TbXM`,
                                                    layoutId: `xBnV3TbXM`,
                                                    phXAhP2BN: e[0],
                                                    qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                                    variant: Q(`LFtgsHFUq`),
                                                    width: `100%`,
                                                    ykltTf6lm: !1,
                                                    ...Z(
                                                      {
                                                        nkuMNWIlZ: { phXAhP2BN: e[2] },
                                                        p0FoBe3Zg: { phXAhP2BN: e[1] },
                                                      },
                                                      v,
                                                      x
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  _(Mr, {
                                    __framer__animate: { transition: Br },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Hr,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    className: `framer-s5sp27`,
                                    "data-framer-name": `Services Container`,
                                    layoutDependency: E,
                                    layoutId: `Irar2Tiba`,
                                    children: [
                                      f(P, {
                                        __fromCanvasComponent: !0,
                                        children: f(r, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-12qamiq`,
                                            "data-styles-preset": `e_qtYqPa5`,
                                            dir: `auto`,
                                            children: `Socials`,
                                          }),
                                        }),
                                        className: `framer-1sph1jw`,
                                        fonts: [`Inter`],
                                        layoutDependency: E,
                                        layoutId: `urLs96dYI`,
                                        style: {
                                          "--framer-link-text-color": `rgb(255, 230, 0)`,
                                          "--framer-link-text-decoration": `underline`,
                                          opacity: 0.75,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      _(T.div, {
                                        className: `framer-gfqvlf`,
                                        "data-framer-name": `Services`,
                                        layoutDependency: E,
                                        layoutId: `GgYKkAocr`,
                                        children: [
                                          f(z, {
                                            height: 36,
                                            children: f(j, {
                                              className: `framer-1d57qsi-container`,
                                              layoutDependency: E,
                                              layoutId: `ejr2v7iYL-container`,
                                              nodeId: `ejr2v7iYL`,
                                              rendersWithMotion: !0,
                                              scopeId: `WFdOf_LUe`,
                                              children: f(W, {
                                                fENPxPHfW: `Facebook`,
                                                height: `100%`,
                                                id: `ejr2v7iYL`,
                                                layoutId: `ejr2v7iYL`,
                                                phXAhP2BN: `Facebook.com`,
                                                qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                                variant: Q(`LFtgsHFUq`),
                                                width: `100%`,
                                                ykltTf6lm: !0,
                                              }),
                                            }),
                                          }),
                                          f(z, {
                                            height: 36,
                                            children: f(j, {
                                              className: `framer-ydqy8c-container`,
                                              layoutDependency: E,
                                              layoutId: `ZY2Hd1FvR-container`,
                                              nodeId: `ZY2Hd1FvR`,
                                              rendersWithMotion: !0,
                                              scopeId: `WFdOf_LUe`,
                                              children: f(W, {
                                                fENPxPHfW: `LinkedIn`,
                                                height: `100%`,
                                                id: `ZY2Hd1FvR`,
                                                layoutId: `ZY2Hd1FvR`,
                                                phXAhP2BN: `LinkedIn.com`,
                                                qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                                variant: Q(`LFtgsHFUq`),
                                                width: `100%`,
                                                ykltTf6lm: !0,
                                              }),
                                            }),
                                          }),
                                          f(z, {
                                            height: 36,
                                            children: f(j, {
                                              className: `framer-5hzdr9-container`,
                                              layoutDependency: E,
                                              layoutId: `rvvRZKgXR-container`,
                                              nodeId: `rvvRZKgXR`,
                                              rendersWithMotion: !0,
                                              scopeId: `WFdOf_LUe`,
                                              children: f(W, {
                                                fENPxPHfW: `Instagram`,
                                                height: `100%`,
                                                id: `rvvRZKgXR`,
                                                layoutId: `rvvRZKgXR`,
                                                phXAhP2BN: `Instagram.com`,
                                                qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                                variant: Q(`LFtgsHFUq`),
                                                width: `100%`,
                                                ykltTf6lm: !0,
                                              }),
                                            }),
                                          }),
                                          f(z, {
                                            height: 36,
                                            children: f(j, {
                                              className: `framer-1luitih-container`,
                                              layoutDependency: E,
                                              layoutId: `zrPbjWKl1-container`,
                                              nodeId: `zrPbjWKl1`,
                                              rendersWithMotion: !0,
                                              scopeId: `WFdOf_LUe`,
                                              children: f(W, {
                                                fENPxPHfW: `Twitter`,
                                                height: `100%`,
                                                id: `zrPbjWKl1`,
                                                layoutId: `zrPbjWKl1`,
                                                phXAhP2BN: `Twitter.com`,
                                                qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                                variant: Q(`LFtgsHFUq`),
                                                width: `100%`,
                                                ykltTf6lm: !0,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      f(T.div, {
                        className: `framer-1pwj5jx`,
                        "data-border": !0,
                        "data-framer-name": `Copyright`,
                        layoutDependency: E,
                        layoutId: `N5f5VXOk9`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          rotate: 180,
                        },
                        children: _(T.div, {
                          className: `framer-1bzcv6h`,
                          "data-border": !0,
                          "data-framer-name": `Inner Spacer`,
                          layoutDependency: E,
                          layoutId: `Q5KSOnvqQ`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `var(--token-3c665125-e480-4944-91c7-2eedc7bccec7, rgba(255, 255, 255, 0.05))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                            rotate: 900,
                          },
                          variants: {
                            nkuMNWIlZ: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-11c233ce-ba11-4e3a-ba1d-5be950195b79, rgb(1, 43, 48))`,
                              "--border-top-width": `1px`,
                            },
                            p0FoBe3Zg: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(50, 54, 68))`,
                              "--border-top-width": `1px`,
                            },
                          },
                          children: [
                            f(T.div, {
                              className: `framer-mlcttg`,
                              "data-framer-name": `Copyright Legal`,
                              layoutDependency: E,
                              layoutId: `Ymblwru0Y`,
                              children: f(P, {
                                __fromCanvasComponent: !0,
                                children: f(r, {
                                  children: f(T.p, {
                                    className: `framer-styles-preset-qlsyr3`,
                                    "data-styles-preset": `YMpbOMTQr`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                    },
                                    children: `© 2026 CareerNova Education Services. All rights reserved.`,
                                  }),
                                }),
                                className: `framer-fea3qb`,
                                fonts: [`Inter`],
                                layoutDependency: E,
                                layoutId: `gKb8uBujd`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255))`,
                                  "--framer-link-text-color": `rgb(255, 230, 0)`,
                                  "--framer-link-text-decoration": `underline`,
                                  opacity: 0.8,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Z(
                                  {
                                    nkuMNWIlZ: {
                                      children: f(r, {
                                        children: f(T.p, {
                                          className: `framer-styles-preset-1xheykw`,
                                          "data-styles-preset": `vz9muakNv`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(255, 255, 255)))`,
                                          },
                                          children: `© 2026. All rights reserved.`,
                                        }),
                                      }),
                                    },
                                  },
                                  v,
                                  x
                                ),
                              }),
                            }),
                            f(z, {
                              height: 36,
                              children: f(j, {
                                className: `framer-p52zir-container`,
                                layoutDependency: E,
                                layoutId: `PXRgGYhsN-container`,
                                nodeId: `PXRgGYhsN`,
                                rendersWithMotion: !0,
                                scopeId: `WFdOf_LUe`,
                                children: f(W, {
                                  fENPxPHfW: `Made by KodenCore`,
                                  height: `100%`,
                                  id: `PXRgGYhsN`,
                                  layoutId: `PXRgGYhsN`,
                                  phXAhP2BN: `https://kodencore.com/`,
                                  qod_udNSc: `var(--token-0c35c7d3-21de-4070-8046-4a3fa0c5baf0, rgb(250, 250, 250))`,
                                  variant: Q(`LFtgsHFUq`),
                                  width: `100%`,
                                  ykltTf6lm: !0,
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-DgnMx.framer-y2cv0a, .framer-DgnMx .framer-y2cv0a { display: block; }`,
          `.framer-DgnMx.framer-nflg8x { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-DgnMx .framer-hy3wv1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 80px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-DgnMx .framer-12d3d5l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-DgnMx .framer-94t11s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 520px; justify-content: center; overflow: visible; padding: 0px 32px 70px 32px; position: relative; width: 100%; }`,
          `.framer-DgnMx .framer-13b95lp { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 1px; justify-content: flex-end; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 48px 40px 70px 40px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-DgnMx .framer-u5sl9s { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-DgnMx .framer-1s9vg2e { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-DgnMx .framer-1ljhkg8 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 800px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-DgnMx .framer-1egnpj4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; max-width: 40%; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-DgnMx .framer-jm6kiu { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-DgnMx .framer-55wcv6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-DgnMx .framer-1hawk0x-container, .framer-DgnMx .framer-oduvii-container, .framer-DgnMx .framer-1n6oel3-container, .framer-DgnMx .framer-sy77mb-container, .framer-DgnMx .framer-pmu55o-container, .framer-DgnMx .framer-9t7ppv-container, .framer-DgnMx .framer-1awji17-container, .framer-DgnMx .framer-10v75ty-container, .framer-DgnMx .framer-1bk2xrj-container, .framer-DgnMx .framer-1d57qsi-container, .framer-DgnMx .framer-ydqy8c-container, .framer-DgnMx .framer-5hzdr9-container, .framer-DgnMx .framer-1luitih-container, .framer-DgnMx .framer-p52zir-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-DgnMx .framer-as7wo8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-DgnMx .framer-wv5h7g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-DgnMx .framer-k5c1jt, .framer-DgnMx .framer-1ighzst { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-DgnMx .framer-1l0kjsg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 1px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 2px 0px; position: relative; width: min-content; }`,
          `.framer-DgnMx .framer-18miptu, .framer-DgnMx .framer-1fherq5, .framer-DgnMx .framer-3m2qiz, .framer-DgnMx .framer-x1a9nw, .framer-DgnMx .framer-1nxcebl { flex: none; height: auto; position: relative; width: 14px; }`,
          `.framer-DgnMx .framer-zao0qa { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-DgnMx .framer-nxoz60 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 32px 0px 32px; position: relative; width: 100%; }`,
          `.framer-DgnMx .framer-1qkkozq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 1300px; overflow: visible; padding: 56px 40px 90px 40px; position: relative; width: 100%; }`,
          `.framer-DgnMx .framer-i24vca { align-content: flex-start; align-items: flex-start; display: flex; flex: 2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-DgnMx .framer-rvuykr { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 340px; position: relative; width: 100%; }`,
          `.framer-DgnMx .framer-1dc3u87 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-DgnMx .framer-1xyvegf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; max-width: 340px; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-DgnMx .framer-zo9e2a { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
          `.framer-DgnMx .framer-9sdsy9 { --framer-input-focused-border-color: var(--token-4f267ef3-32e1-45a1-acf4-f0d8231720d7, rgba(255, 255, 255, 0.2)); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "Golos Text"; --framer-input-font-letter-spacing: -0.01em; --framer-input-font-line-height: 1.1em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-padding: 12px 2px 12px 18px; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-DgnMx .framer-1rrchm8-container { flex: none; height: 40px; position: relative; width: 40px; }`,
          `.framer-DgnMx .framer-8aofjd { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-DgnMx .framer-h8cq0h, .framer-DgnMx .framer-g032r, .framer-DgnMx .framer-s5sp27 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-DgnMx .framer-1g1hw3i, .framer-DgnMx .framer-tfl1yw, .framer-DgnMx .framer-1sph1jw { --framer-text-wrap-override: none; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-DgnMx .framer-zcaf9v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }`,
          `.framer-DgnMx .framer-1l2ja4l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-DgnMx .framer-gfqvlf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; max-width: 40%; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-DgnMx .framer-1pwj5jx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 32px 0px 32px; position: relative; width: 100%; }`,
          `.framer-DgnMx .framer-1bzcv6h { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 40px; justify-content: space-between; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 1px; }`,
          `.framer-DgnMx .framer-mlcttg { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-DgnMx .framer-fea3qb { --framer-text-wrap-override: none; flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-DgnMx.framer-v-aab0ug.framer-nflg8x { width: 810px; }`,
          `.framer-DgnMx.framer-v-aab0ug .framer-hy3wv1 { justify-content: flex-start; }`,
          `.framer-DgnMx.framer-v-aab0ug .framer-94t11s { height: 500px; padding: 0px 32px 40px 32px; }`,
          `.framer-DgnMx.framer-v-aab0ug .framer-13b95lp { justify-content: flex-start; padding: 120px 40px 70px 40px; }`,
          `.framer-DgnMx.framer-v-aab0ug .framer-1egnpj4 { max-width: 60%; }`,
          `.framer-DgnMx.framer-v-aab0ug .framer-1qkkozq { align-content: unset; align-items: unset; display: grid; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); justify-content: center; padding: 40px 40px 90px 40px; }`,
          `.framer-DgnMx.framer-v-aab0ug .framer-i24vca { align-self: start; flex: none; grid-column: span 3; justify-self: start; width: 100%; }`,
          `.framer-DgnMx.framer-v-aab0ug .framer-h8cq0h, .framer-DgnMx.framer-v-aab0ug .framer-g032r, .framer-DgnMx.framer-v-aab0ug .framer-s5sp27, .framer-DgnMx.framer-v-bcbavv .framer-g032r, .framer-DgnMx.framer-v-bcbavv .framer-s5sp27 { align-self: start; flex: none; justify-self: start; width: 100%; }`,
          `.framer-DgnMx.framer-v-aab0ug .framer-1bzcv6h { height: 80px; }`,
          `.framer-DgnMx.framer-v-bcbavv.framer-nflg8x { width: 390px; }`,
          `.framer-DgnMx.framer-v-bcbavv .framer-hy3wv1 { padding: 60px 0px 0px 0px; }`,
          `.framer-DgnMx.framer-v-bcbavv .framer-94t11s { height: min-content; padding: 0px 16px 24px 16px; }`,
          `.framer-DgnMx.framer-v-bcbavv .framer-13b95lp { flex: none; height: min-content; justify-content: center; padding: 100px 20px 40px 20px; }`,
          `.framer-DgnMx.framer-v-bcbavv .framer-1egnpj4 { gap: 26px; max-width: unset; }`,
          `.framer-DgnMx.framer-v-bcbavv .framer-55wcv6 { flex-direction: column; gap: 17px; justify-content: center; }`,
          `.framer-DgnMx.framer-v-bcbavv .framer-as7wo8 { align-content: center; align-items: center; }`,
          `.framer-DgnMx.framer-v-bcbavv .framer-nxoz60 { padding: 0px 16px 0px 16px; }`,
          `.framer-DgnMx.framer-v-bcbavv .framer-1qkkozq { align-content: unset; align-items: unset; display: grid; gap: 20px 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(3, minmax(0, 1fr)); justify-content: center; padding: 40px 0px 40px 0px; }`,
          `.framer-DgnMx.framer-v-bcbavv .framer-i24vca, .framer-DgnMx.framer-v-bcbavv .framer-h8cq0h { align-self: start; flex: none; grid-column: span 2; justify-self: start; width: 100%; }`,
          `.framer-DgnMx.framer-v-bcbavv .framer-gfqvlf { max-width: unset; }`,
          `.framer-DgnMx.framer-v-bcbavv .framer-1pwj5jx { gap: 0px; padding: 0px; }`,
          `.framer-DgnMx.framer-v-bcbavv .framer-1bzcv6h { align-content: flex-start; align-items: flex-start; gap: 6px; height: min-content; justify-content: flex-start; padding: 24px 16px 24px 16px; }`,
          `.framer-DgnMx.framer-v-bcbavv .framer-mlcttg { flex-wrap: wrap; max-width: 70%; }`,
          ...et,
          ...$e,
          ...xt,
          ...rt,
          ..._t,
          `.framer-DgnMx[data-border="true"]::after, .framer-DgnMx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-DgnMx`
      )),
      ($.displayName = `Section/Footer`),
      ($.defaultProps = { height: 1039.5, width: 1200 }),
      B($, {
        variant: {
          options: [`mmUWDgbRY`, `p0FoBe3Zg`, `nkuMNWIlZ`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: V.Enum,
        },
        RfJ4jqjRp: { defaultValue: !0, title: `CTA Visible`, type: V.Boolean },
        onRfJ4jqjRpChange: { changes: `RfJ4jqjRp`, type: V.ChangeHandler },
      }),
      k(
        $,
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
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Golos Text`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Golos Text`,
                url: `../../assets/fonts/q5uXsoe9Lv5t7Meb31EcOR9UdVTNs822plVRRQ5ZEr8zXcyx.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Ar,
          ...jr,
          ...Nr,
          ...Pr,
          ...L(nt),
          ...L(Ze),
          ...L(St),
          ...L(Je),
          ...L(vt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = Le.get(Gr(), n);
          return Promise.allSettled([
            r.preload(),
            A(at, {}, t),
            A(X, {}, t),
            A(W, {}, t),
            (async () => {
              let e = (await r.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => A(W, {}, t)));
            })(),
          ]);
        },
      }));
  }),
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si = e(() => {
    (y(),
      R(),
      O(),
      l(),
      Pt(),
      Ln(),
      Qr(),
      ($r = I(J)),
      (ei = Oe(J)),
      (ti = le(me)),
      (ni = I($)),
      (ri = I(Nt)),
      (ii = {
        qFHXxtZgJ: `(min-width: 810px) and (max-width: 1199.98px)`,
        tTip4r3vl: `(min-width: 1200px)`,
        u8ER4XjRy: `(max-width: 809.98px)`,
      }),
      (ai = `framer-wV6yU`),
      (oi = {
        qFHXxtZgJ: `framer-v-236m7b`,
        tTip4r3vl: `framer-v-1xwqg6o`,
        u8ER4XjRy: `framer-v-hy4897`,
      }),
      (si = (e, t) => `translateX(-50%) ${t}`),
      (ci = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 1.1, duration: 0.6, type: `spring` },
        x: 0,
        y: 0,
      }),
      (li = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -60,
      }),
      (ui = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (di = { u8ER4XjRy: [`.framer-wV6yU .framer-1wtik77 { height: 56px; }`] }),
      (fi = Object.keys(di)),
      (pi = { u8ER4XjRy: `.framer-hy4897-override` }),
      (mi = [
        `.framer-wV6yU.framer-iac2i9, .framer-wV6yU .framer-iac2i9 { display: block; }`,
        `.framer-wV6yU.framer-1xwqg6o { align-content: center; align-items: center; background-color: var(--token-710ade2f-af2d-4eb3-a472-dbe729d9e382, #f5f7f7); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-wV6yU .framer-1vs21cr-container { flex: none; height: auto; left: 50%; order: -1000; position: var(--framer-canvas-fixed-position, fixed); top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-wV6yU .framer-1wtik77 { flex: none; height: 63px; left: 0px; order: -999; overflow: var(--overflow-clip-fallback, clip); position: var(--framer-canvas-fixed-position, fixed); right: 0px; top: 0px; z-index: 1; }`,
        `.framer-wV6yU .framer-136axi1 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-wV6yU .framer-redw04-container { flex: none; height: auto; order: 1003; position: relative; width: 100%; }`,
        `.framer-wV6yU .framer-19n58jh-container { flex: none; height: auto; order: 1004; position: relative; width: auto; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (hi = {
        qFHXxtZgJ: `(min-width: 810px) and (max-width: 1199.98px)`,
        tTip4r3vl: `(min-width: 1200px)`,
        u8ER4XjRy: `(max-width: 809.98px)`,
      }),
      (gi = { Desktop: `tTip4r3vl`, Phone: `u8ER4XjRy`, Tablet: `qFHXxtZgJ` }),
      (_i = ({ value: e }) =>
        Ee()
          ? null
          : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (vi = ({ cTAVisible: e, height: t, id: n, scrollTrigger: r, width: i, ...a }) => ({
        ...a,
        HUYDzxTwp: r ?? a.HUYDzxTwp,
        variant: gi[a.variant] ?? a.variant ?? `tTip4r3vl`,
        W8Z0SmMMG: e ?? a.W8Z0SmMMG ?? !0,
      })),
      (yi = u(function (e, t) {
        let n = g(null),
          r = t ?? n,
          i = re(),
          { activeLocale: a, setLocale: o } = pe(),
          {
            style: s,
            className: c,
            layoutId: l,
            variant: u,
            W8Z0SmMMG: d,
            HUYDzxTwp: p,
            children: m,
            ...h
          } = vi(e),
          [v, ee] = Ie(u, ii, !1),
          y = M(ai);
        return (
          Ce({}),
          f(ye.Provider, {
            value: {
              activeVariantId: v,
              humanReadableVariantMap: gi,
              isLayoutTemplate: !0,
              primaryVariantId: `tTip4r3vl`,
              variantClassNames: oi,
            },
            children: _(D, {
              id: l ?? i,
              children: [
                f(_i, {
                  value: `:root body { background: var(--token-710ade2f-af2d-4eb3-a472-dbe729d9e382, rgb(245, 247, 247)); } @media (min-width: 810px) and (max-width: 1199.98px) { :root { font-size: 100%; } }`,
                }),
                _(T.div, {
                  ...h,
                  className: M(y, `framer-1xwqg6o`, c),
                  "data-layout-template": !0,
                  ref: r,
                  style: { ...s },
                  children: [
                    f(z, {
                      height: 69,
                      width: `100vw`,
                      y: 0,
                      children: f(ti, {
                        animate: ci,
                        className: `framer-1vs21cr-container`,
                        "data-framer-appear-id": `1vs21cr`,
                        "data-framer-layout-hint-center-x": !0,
                        initial: li,
                        layoutScroll: !0,
                        nodeId: `plDsOwb6r`,
                        optimized: !0,
                        rendersWithMotion: !0,
                        scopeId: `j47HO0I10`,
                        transformTemplate: si,
                        children: f(He, {
                          breakpoint: v,
                          overrides: {
                            qFHXxtZgJ: {
                              __framer__targets: [{ ref: p, target: `eCuEujbwX` }],
                              variant: ui(`SdeYTPZIg`),
                            },
                            u8ER4XjRy: {
                              __framer__targets: [{ ref: p, target: `eCuEujbwX` }],
                              variant: ui(`SdeYTPZIg`),
                            },
                          },
                          children: f(ei, {
                            __framer__animateOnce: !1,
                            __framer__targets: [{ ref: p, target: `CB01XpOcI` }],
                            __framer__threshold: 0,
                            __framer__variantAppearEffectEnabled: !0,
                            height: `100%`,
                            id: `plDsOwb6r`,
                            layoutId: `plDsOwb6r`,
                            style: { width: `100%` },
                            variant: ui(`JPQI0m2Hl`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    f(T.div, { className: `framer-1wtik77`, "data-framer-name": `Spacer` }),
                    m,
                    f(`div`, { className: `framer-136axi1` }),
                    f(z, {
                      height: 1039,
                      width: `100vw`,
                      y: 1e3,
                      children: f(me, {
                        className: `framer-redw04-container`,
                        "data-framer-name": `Footer`,
                        name: `Footer`,
                        nodeId: `ux4Ffjc__`,
                        scopeId: `j47HO0I10`,
                        children: f(He, {
                          breakpoint: v,
                          overrides: {
                            qFHXxtZgJ: { variant: ui(`p0FoBe3Zg`) },
                            u8ER4XjRy: { variant: ui(`nkuMNWIlZ`) },
                          },
                          children: f($, {
                            height: `100%`,
                            id: `ux4Ffjc__`,
                            layoutId: `ux4Ffjc__`,
                            name: `Footer`,
                            RfJ4jqjRp: d,
                            style: { width: `100%` },
                            variant: ui(`mmUWDgbRY`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    f(z, {
                      children: f(me, {
                        className: `framer-19n58jh-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `lyb_M3gL1`,
                        scopeId: `j47HO0I10`,
                        children: f(Nt, {
                          height: `100%`,
                          id: `lyb_M3gL1`,
                          intensity: 7,
                          layoutId: `lyb_M3gL1`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                f(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (bi = (e) =>
        e === ie.canvas || e === ie.export
          ? [
              ...mi,
              ...fi.flatMap((e) => {
                let t = pi[e];
                return di[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...mi, ...fi.map((e) => `@media ${hi[e]} { ${di[e].join(` `)} }`)]),
      (xi = F(yi, bi, `framer-wV6yU`)),
      (xi.displayName = `Template`),
      (xi.defaultProps = { height: 1e3, width: 1200 }),
      B(xi, {
        W8Z0SmMMG: { defaultValue: !0, title: `CTA Visible`, type: V.Boolean },
        HUYDzxTwp: { title: `Scroll Trigger`, type: V.ScrollSectionRef },
      }),
      k(xi, [{ explicitInter: !0, fonts: [] }, ...$r, ...ni, ...ri], {
        supportsExplicitInterCodegen: !0,
      }),
      (xi.loader = { load: (e, t) => (t.locale, Promise.allSettled([A(J, {}, t), A($, {}, t)])) }));
  });
function Ci({ webPageId: e, children: t, style: n, ...r }) {
  let i = {
      HUYDzxTwp: { href: { hash: `:GupJHRftr`, webPageId: `augiA20Il` }, refKey: !0 },
      W8Z0SmMMG: !0,
    },
    a = { ...i, HUYDzxTwp: { href: { hash: `:EvRLelOwA`, webPageId: `musfU1kBr` }, refKey: !0 } },
    o = { ...i, HUYDzxTwp: { href: { hash: `:qu9cLrkqS`, webPageId: `zitVyT7Oh` }, refKey: !0 } },
    s = {
      ...i,
      HUYDzxTwp: { href: { hash: `:iul6jyS8w`, webPageId: `gDCLiv8cL` }, refKey: !0 },
      W8Z0SmMMG: !1,
    },
    c = {
      ...i,
      HUYDzxTwp: { href: { hash: `:dmaaNgbVV`, webPageId: `sGcuUgaBJ` }, refKey: !0 },
      W8Z0SmMMG: !1,
    },
    l = { ...i, HUYDzxTwp: { href: { hash: `:Y27bLo1pW`, webPageId: `EyK7bnNLZ` }, refKey: !0 } },
    u = { ...i, HUYDzxTwp: { href: { hash: `:iyN0yyltj`, webPageId: `B1ccsbbPp` }, refKey: !0 } },
    d = { ...i, HUYDzxTwp: void 0 },
    f = { ...i, HUYDzxTwp: { href: { hash: `:ABt36MLMc`, webPageId: `bAcjwMNPv` }, refKey: !0 } },
    p = { ...i, HUYDzxTwp: { href: { hash: `:x867lmBcl`, webPageId: `Zcp7d8sGp` }, refKey: !0 } },
    m = { ...i, HUYDzxTwp: { href: { hash: `:NosDil9Na`, webPageId: `t_mmcsO67` }, refKey: !0 } },
    h = ae(),
    g =
      {
        augiA20Il: i,
        B1ccsbbPp: u,
        bAcjwMNPv: f,
        EyK7bnNLZ: l,
        gDCLiv8cL: s,
        musfU1kBr: a,
        Q0ojUtneJ: d,
        sGcuUgaBJ: c,
        t_mmcsO67: m,
        Zcp7d8sGp: p,
        zitVyT7Oh: o,
      }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `musfU1kBr`:
    case `zitVyT7Oh`:
    case `gDCLiv8cL`:
    case `sGcuUgaBJ`:
    case `EyK7bnNLZ`:
    case `B1ccsbbPp`:
    case `Q0ojUtneJ`:
    case `bAcjwMNPv`:
    case `Zcp7d8sGp`:
    case `t_mmcsO67`:
      return S(H, { links: [g.HUYDzxTwp] }, (e) =>
        S(xi, { ...g, HUYDzxTwp: h(e[0]), key: `Template1`, style: n }, t(!0))
      );
    default:
      return t(!1);
  }
}
function wi(e) {
  switch (e) {
    case `augiA20Il`:
    case `musfU1kBr`:
    case `zitVyT7Oh`:
    case `gDCLiv8cL`:
    case `sGcuUgaBJ`:
    case `EyK7bnNLZ`:
    case `B1ccsbbPp`:
    case `Q0ojUtneJ`:
    case `bAcjwMNPv`:
    case `Zcp7d8sGp`:
    case `t_mmcsO67`:
      return [
        { hash: `1xwqg6o`, mediaQuery: `(min-width: 1200px)` },
        { hash: `236m7b`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `hy4897`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function Ti({ routeId: e, pathVariables: a, localeId: c, collectionItemId: l }) {
  let u = Oi[e].page.preload();
  he({
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    privateRouterReplaceState: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  });
  let d = S(Be, {
    children: S(Se, {
      children: S(We, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: a,
        routes: Oi,
        collectionUtils: Ai,
        framerSiteId: ji,
        notFoundPage: N(() => import("./nFhnTJjlSPnMBYeS7EcK7_JyjmuJmxyIZHadkClekE8.C26v-PN5.mjs")),
        isReducedMotion: void 0,
        localeId: c,
        locales: ki,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://careernova.framer.media`,
        EditorBar:
          t === void 0
            ? void 0
            : (() => {
                if (Ni) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return N(async () => {
                  t.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: be, useLocaleInfo: pe, useRouter: Ue },
                    react: {
                      createElement: S,
                      Fragment: r,
                      memo: p,
                      useCallback: o,
                      useEffect: s,
                      useRef: g,
                      useState: i,
                      useLayoutEffect: n,
                    },
                    "react-dom": { createPortal: m },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextVisas: !1,
        LayoutTemplate: Ci,
        loadSnippetsModule: new Te(
          () => import("./Cxca24hFnE545uZwrD04roGfZPc6nuV-2eAzuUe3N2U.dObCGW41.mjs")
        ),
        initialCollectionItemId: l,
      }),
    }),
    value: {
      global: {
        enter: {
          opacity: 0,
          rotate: 0,
          rotate3d: !1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          transition: {
            damping: 30,
            delay: 0,
            duration: 0.2,
            ease: [0.27, 0, 0.51, 1],
            mass: 1,
            stiffness: 400,
            type: `tween`,
          },
          x: `0px`,
          y: `0px`,
        },
        exit: {
          opacity: 0,
          rotate: 0,
          rotate3d: !1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          transition: {
            damping: 30,
            delay: 0.2,
            duration: 0.2,
            ease: [0.27, 0, 0.51, 1],
            mass: 1,
            stiffness: 400,
            type: `tween`,
          },
          x: `0px`,
          y: `0px`,
        },
      },
      routes: {},
    },
  });
  return (await u, d);
}
function Ei() {
  Mi && t.__framer_events.push(arguments);
}
async function Di(e, n) {
  function r(e, n, r = !0) {
    if (e.caught || t.__framer_hadFatalError) return;
    let i = n?.componentStack;
    if (r) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          i
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        i
      );
    Ei(r ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: i,
      stack: i ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let i, a, o, s, c;
    if (e)
      ((c = JSON.parse(n.dataset.framerHydrateV2)),
        (i = c.routeId),
        (a = c.localeId),
        (o = c.pathVariables),
        (s = c.breakpoints),
        (i = Pe(Oi, i)));
    else {
      Pe(Oi, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((i = t.get(`id`)), (a = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((o ??= {}), (o[e.slice(4)] = n));
      }
      if (!i || !a) {
        let e = fe(Oi, decodeURIComponent(location.pathname), !0, ki);
        ((i = e.routeId), (a = e.localeId), (o = e.pathVariables));
      }
    }
    let l = Ti({
      routeId: i,
      localeId: a,
      pathVariables: o,
      collectionItemId: c?.collectionItemId,
    });
    t !== void 0 &&
      (async () => {
        let e = Oi[i],
          n = ki.find(({ id: e }) => (a ? e === a : e === "default")).code,
          r = c?.collectionItemId ?? null;
        if (r === null && e?.collectionId && Ai) {
          let t = await Ai[e.collectionId]?.(),
            [i] = Object.values(o);
          t && typeof i == `string` && (r = (await t.getRecordIdBySlug(i, n || void 0)) ?? null);
        }
        let s = Intl.DateTimeFormat().resolvedOptions(),
          l = s.timeZone,
          u = s.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          t.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: ji,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: r,
              framerLocale: n || null,
              webPageId: e?.abTestingVariantId ?? i,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: t.location.href,
              hostname: t.location.hostname || null,
              pathname: t.location.pathname || null,
              hash: t.location.hash || null,
              search: t.location.search || null,
              timezone: l,
              locale: u,
            },
            `eager`,
          ]),
          await ce({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: n || null } })
          ));
      })();
    let u = await l;
    e
      ? (ke(`framer-rewrite-breakpoints`, () => {
          (De(s), t.__framer_onRewriteBreakpoints?.(s));
        }),
        (Ni ? (e) => e() : C)(() => {
          (xe(), ze(), ne(n, u, { onRecoverableError: r }));
        }))
      : x(n, { onRecoverableError: r }).render(u);
  } catch (e) {
    throw (r(e, void 0, !1), e);
  }
}
var Oi, ki, Ai, ji, Mi, Ni;
e(() => {
  if (
    (c(),
    R(),
    l(),
    d(),
    ee(),
    Si(),
    (Oi = {
      augiA20Il: {
        elements: {
          cOMm90vJL: `excellence`,
          esZ2zY5mx: `partnership`,
          GupJHRftr: `scroll-trigger`,
          nrHc2EeAa: `acquisition`,
          VoApNnspm: `feature-card`,
        },
        page: N(() => import("./FHCAzGgU2TWDQ3k_3-k3mzJ8HGzXfNoo8EhqBDT_XFc.BeRkMNeR.mjs")),
        path: `/`,
      },
      musfU1kBr: {
        elements: {
          EvRLelOwA: `scroll-trigger`,
          eXX5R3Psb: `feature-card`,
          fnwNcgM56: `partnership`,
          uZbvwpH4x: `acquisition`,
          x5Xmua8Wr: `excellence`,
        },
        page: N(() => import("./ZPozsjziW160kd1sSUerMsDZrpEY6KxMxxb2qADntD0.BxbnnuTl.mjs")),
        path: `/about`,
      },
      zitVyT7Oh: {
        elements: { qu9cLrkqS: `scroll-trigger` },
        page: N(() => import("./QdNhm72-NhCOrUoS-DOEExKNyRocEFRynvoAF3tBV2s.C0EKnwVi.mjs")),
        path: `/how-it-works`,
      },
      gDCLiv8cL: {
        elements: { iul6jyS8w: `scroll-trigger` },
        page: N(() => import("./nFhnTJjlSPnMBYeS7EcK7_JyjmuJmxyIZHadkClekE8.C26v-PN5.mjs")),
        path: `/404`,
      },
      sGcuUgaBJ: {
        elements: { dmaaNgbVV: `scroll-trigger` },
        page: N(() => import("./zDmeA2Zv1_Jjqze31P6UyVS4w44ar0A9RLxNexBmae0.BdXJZPQZ.mjs")),
        path: `/contact`,
      },
      EyK7bnNLZ: {
        elements: { Y27bLo1pW: `scroll-trigger` },
        page: N(() => import("./T-KiEV5LLs_UiddCvq_6-C1wqrmM0Xd0Z0KdrhFbz0U.WM1S3pBG.mjs")),
        path: `/blogs`,
      },
      B1ccsbbPp: {
        elements: { iyN0yyltj: `scroll-trigger` },
        page: N(() => import("./ut5MTrj2Ur-0OOspI-S5AB5T-45w-8HqmF9U_JLODx4.BrUaUrPt.mjs")),
        path: `/case-studies`,
      },
      Q0ojUtneJ: {
        elements: {},
        page: N(() => import("./1fmp5BFE6evSxpR6Pxf0gpMrHUr-99L4Kf4HGNnlBGA.kP6pVnVV.mjs")),
        path: `/services`,
      },
      bAcjwMNPv: {
        collectionId: `WRyp7sdxk`,
        elements: { ABt36MLMc: `scroll-trigger` },
        page: N(() => import("./jof_n_7pBk6QPwHuGsjeDfJQ2e8VOUCKxjAjhuYases.D4mq5DIT.mjs")),
        path: `/services/:gURS0n4RS`,
      },
      Zcp7d8sGp: {
        collectionId: `MgDkoXCTm`,
        elements: { x867lmBcl: `scroll-trigger` },
        page: N(() => import("./ieI1SDhXQZj8EviqZIU5wP-GKYuRF_sBZhjvwwSG39A.CEnDcJ1C.mjs")),
        path: `/case-studies/:PL0YsbUUz`,
      },
      t_mmcsO67: {
        collectionId: `auTZY4oaD`,
        elements: { NosDil9Na: `scroll-trigger` },
        page: N(() => import("./32Oo-B4_hO5I68anph27bsja9vJJ7w0HHQ_A63YfdiM.CR1iyOgI.mjs")),
        path: `/blogs/:bNzKOQmIZ`,
      },
    }),
    (ki = [{ code: `en`, id: `default`, name: `English`, slug: ``, textVisas: `ltr` }]),
    (Ai = {
      auTZY4oaD: async () =>
        (await import("./RKd3JJFqFwQ15XN_mv7d7RLeWWIG9yVV5PnQ-He7vqw.BfsZMM2S.mjs"))?.utils,
      MgDkoXCTm: async () =>
        (await import("./dzblqbmUpEYGCk_5db3TFdt2LUcNMqqjjysU2JAGaj4.DODUn_gE.mjs"))?.utils,
      WRyp7sdxk: async () =>
        (await import("./fhVZDYpWf1ZgbVL3wlOm0LJzuEH-dH_bxdzTg6yHTlI.C5MHxhnF.mjs"))?.utils,
    }),
    (ji = `6639837afb1b7fac4f8380b98e197d680a31b84455adb5e064a42418625a92ec`),
    (Mi = typeof document < `u`),
    (Ni = Mi && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(w.userAgent)),
    Mi)
  ) {
    ((t.__framer_importFromPackage = (e, t) => () =>
      S(Re, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (t.__framer_events = t.__framer_events || []),
      de());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? Di(!0, e) : Di(!1, e);
  }
})();
export { wi as getLayoutTemplateBreakpoints, Ti as getPageRoot };
//# sourceMappingURL=script_main.B8TcFUs6.mjs.map
