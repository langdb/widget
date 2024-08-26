import * as ze from "react";
import _e, { createContext as vo, useRef as ue, useState as ye, useEffect as te, useMemo as G, useCallback as ve, forwardRef as Kt, useContext as Dr, lazy as ji, isValidElement as Wt, Suspense as Bi, createRef as sr, useImperativeHandle as Gt, Component as Mi, useReducer as Li, Fragment as zi } from "react";
function $i(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var or = { exports: {} }, Ot = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ns;
function Fi() {
  if (ns) return Ot;
  ns = 1;
  var r = _e, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, u, l) {
    var c, d = {}, p = null, h = null;
    l !== void 0 && (p = "" + l), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (h = u.ref);
    for (c in u) n.call(u, c) && !o.hasOwnProperty(c) && (d[c] = u[c]);
    if (a && a.defaultProps) for (c in u = a.defaultProps, u) d[c] === void 0 && (d[c] = u[c]);
    return { $$typeof: e, type: a, key: p, ref: h, props: d, _owner: s.current };
  }
  return Ot.Fragment = t, Ot.jsx = i, Ot.jsxs = i, Ot;
}
var Dt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rs;
function Hi() {
  return rs || (rs = 1, process.env.NODE_ENV !== "production" && function() {
    var r = _e, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function b(f) {
      if (f === null || typeof f != "object")
        return null;
      var E = m && f[m] || f[g];
      return typeof E == "function" ? E : null;
    }
    var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(f) {
      {
        for (var E = arguments.length, $ = new Array(E > 1 ? E - 1 : 0), Z = 1; Z < E; Z++)
          $[Z - 1] = arguments[Z];
        x("error", f, $);
      }
    }
    function x(f, E, $) {
      {
        var Z = k.ReactDebugCurrentFrame, me = Z.getStackAddendum();
        me !== "" && (E += "%s", $ = $.concat([me]));
        var we = $.map(function(ae) {
          return String(ae);
        });
        we.unshift("Warning: " + E), Function.prototype.apply.call(console[f], console, we);
      }
    }
    var A = !1, w = !1, R = !1, M = !1, F = !1, T;
    T = Symbol.for("react.module.reference");
    function I(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === n || f === o || F || f === s || f === l || f === c || M || f === h || A || w || R || typeof f == "object" && f !== null && (f.$$typeof === p || f.$$typeof === d || f.$$typeof === i || f.$$typeof === a || f.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === T || f.getModuleId !== void 0));
    }
    function _(f, E, $) {
      var Z = f.displayName;
      if (Z)
        return Z;
      var me = E.displayName || E.name || "";
      return me !== "" ? $ + "(" + me + ")" : $;
    }
    function D(f) {
      return f.displayName || "Context";
    }
    function z(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case l:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case a:
            var E = f;
            return D(E) + ".Consumer";
          case i:
            var $ = f;
            return D($._context) + ".Provider";
          case u:
            return _(f, f.render, "ForwardRef");
          case d:
            var Z = f.displayName || null;
            return Z !== null ? Z : z(f.type) || "Memo";
          case p: {
            var me = f, we = me._payload, ae = me._init;
            try {
              return z(ae(we));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, X = 0, re, oe, le, N, S, O, H;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function W() {
      {
        if (X === 0) {
          re = console.log, oe = console.info, le = console.warn, N = console.error, S = console.group, O = console.groupCollapsed, H = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        X++;
      }
    }
    function ne() {
      {
        if (X--, X === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, f, {
              value: re
            }),
            info: B({}, f, {
              value: oe
            }),
            warn: B({}, f, {
              value: le
            }),
            error: B({}, f, {
              value: N
            }),
            group: B({}, f, {
              value: S
            }),
            groupCollapsed: B({}, f, {
              value: O
            }),
            groupEnd: B({}, f, {
              value: H
            })
          });
        }
        X < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = k.ReactCurrentDispatcher, K;
    function J(f, E, $) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (me) {
            var Z = me.stack.trim().match(/\n( *(at )?)/);
            K = Z && Z[1] || "";
          }
        return `
` + K + f;
      }
    }
    var se = !1, V;
    {
      var Ae = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ae();
    }
    function j(f, E) {
      if (!f || se)
        return "";
      {
        var $ = V.get(f);
        if ($ !== void 0)
          return $;
      }
      var Z;
      se = !0;
      var me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var we;
      we = Y.current, Y.current = null, W();
      try {
        if (E) {
          var ae = function() {
            throw Error();
          };
          if (Object.defineProperty(ae.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ae, []);
            } catch (Fe) {
              Z = Fe;
            }
            Reflect.construct(f, [], ae);
          } else {
            try {
              ae.call();
            } catch (Fe) {
              Z = Fe;
            }
            f.call(ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Fe) {
            Z = Fe;
          }
          f();
        }
      } catch (Fe) {
        if (Fe && Z && typeof Fe.stack == "string") {
          for (var ie = Fe.stack.split(`
`), $e = Z.stack.split(`
`), Pe = ie.length - 1, Oe = $e.length - 1; Pe >= 1 && Oe >= 0 && ie[Pe] !== $e[Oe]; )
            Oe--;
          for (; Pe >= 1 && Oe >= 0; Pe--, Oe--)
            if (ie[Pe] !== $e[Oe]) {
              if (Pe !== 1 || Oe !== 1)
                do
                  if (Pe--, Oe--, Oe < 0 || ie[Pe] !== $e[Oe]) {
                    var Ye = `
` + ie[Pe].replace(" at new ", " at ");
                    return f.displayName && Ye.includes("<anonymous>") && (Ye = Ye.replace("<anonymous>", f.displayName)), typeof f == "function" && V.set(f, Ye), Ye;
                  }
                while (Pe >= 1 && Oe >= 0);
              break;
            }
        }
      } finally {
        se = !1, Y.current = we, ne(), Error.prepareStackTrace = me;
      }
      var vt = f ? f.displayName || f.name : "", at = vt ? J(vt) : "";
      return typeof f == "function" && V.set(f, at), at;
    }
    function je(f, E, $) {
      return j(f, !1);
    }
    function qe(f) {
      var E = f.prototype;
      return !!(E && E.isReactComponent);
    }
    function He(f, E, $) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return j(f, qe(f));
      if (typeof f == "string")
        return J(f);
      switch (f) {
        case l:
          return J("Suspense");
        case c:
          return J("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case u:
            return je(f.render);
          case d:
            return He(f.type, E, $);
          case p: {
            var Z = f, me = Z._payload, we = Z._init;
            try {
              return He(we(me), E, $);
            } catch {
            }
          }
        }
      return "";
    }
    var C = Object.prototype.hasOwnProperty, L = {}, Q = k.ReactDebugCurrentFrame;
    function ce(f) {
      if (f) {
        var E = f._owner, $ = He(f.type, f._source, E ? E.type : null);
        Q.setExtraStackFrame($);
      } else
        Q.setExtraStackFrame(null);
    }
    function Ce(f, E, $, Z, me) {
      {
        var we = Function.call.bind(C);
        for (var ae in f)
          if (we(f, ae)) {
            var ie = void 0;
            try {
              if (typeof f[ae] != "function") {
                var $e = Error((Z || "React class") + ": " + $ + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $e.name = "Invariant Violation", $e;
              }
              ie = f[ae](E, ae, Z, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Pe) {
              ie = Pe;
            }
            ie && !(ie instanceof Error) && (ce(me), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Z || "React class", $, ae, typeof ie), ce(null)), ie instanceof Error && !(ie.message in L) && (L[ie.message] = !0, ce(me), y("Failed %s type: %s", $, ie.message), ce(null));
          }
      }
    }
    var Se = Array.isArray;
    function de(f) {
      return Se(f);
    }
    function Re(f) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, $ = E && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return $;
      }
    }
    function P(f) {
      try {
        return U(f), !1;
      } catch {
        return !0;
      }
    }
    function U(f) {
      return "" + f;
    }
    function he(f) {
      if (P(f))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Re(f)), U(f);
    }
    var pe = k.ReactCurrentOwner, De = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qe, et, it;
    it = {};
    function St(f) {
      if (C.call(f, "ref")) {
        var E = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function At(f) {
      if (C.call(f, "key")) {
        var E = Object.getOwnPropertyDescriptor(f, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function ft(f, E) {
      if (typeof f.ref == "string" && pe.current && E && pe.current.stateNode !== E) {
        var $ = z(pe.current.type);
        it[$] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(pe.current.type), f.ref), it[$] = !0);
      }
    }
    function Et(f, E) {
      {
        var $ = function() {
          Qe || (Qe = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        $.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: $,
          configurable: !0
        });
      }
    }
    function Tt(f, E) {
      {
        var $ = function() {
          et || (et = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        $.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: $,
          configurable: !0
        });
      }
    }
    var It = function(f, E, $, Z, me, we, ae) {
      var ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: f,
        key: E,
        ref: $,
        props: ae,
        // Record the component responsible for creating this element.
        _owner: we
      };
      return ie._store = {}, Object.defineProperty(ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.defineProperty(ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.freeze && (Object.freeze(ie.props), Object.freeze(ie)), ie;
    };
    function Pt(f, E, $, Z, me) {
      {
        var we, ae = {}, ie = null, $e = null;
        $ !== void 0 && (he($), ie = "" + $), At(E) && (he(E.key), ie = "" + E.key), St(E) && ($e = E.ref, ft(E, me));
        for (we in E)
          C.call(E, we) && !De.hasOwnProperty(we) && (ae[we] = E[we]);
        if (f && f.defaultProps) {
          var Pe = f.defaultProps;
          for (we in Pe)
            ae[we] === void 0 && (ae[we] = Pe[we]);
        }
        if (ie || $e) {
          var Oe = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          ie && Et(ae, Oe), $e && Tt(ae, Oe);
        }
        return It(f, ie, $e, me, Z, pe.current, ae);
      }
    }
    var Rt = k.ReactCurrentOwner, Xr = k.ReactDebugCurrentFrame;
    function gt(f) {
      if (f) {
        var E = f._owner, $ = He(f.type, f._source, E ? E.type : null);
        Xr.setExtraStackFrame($);
      } else
        Xr.setExtraStackFrame(null);
    }
    var Fn;
    Fn = !1;
    function Hn(f) {
      return typeof f == "object" && f !== null && f.$$typeof === e;
    }
    function Kr() {
      {
        if (Rt.current) {
          var f = z(Rt.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Ci(f) {
      return "";
    }
    var Gr = {};
    function Si(f) {
      {
        var E = Kr();
        if (!E) {
          var $ = typeof f == "string" ? f : f.displayName || f.name;
          $ && (E = `

Check the top-level render call using <` + $ + ">.");
        }
        return E;
      }
    }
    function Jr(f, E) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var $ = Si(E);
        if (Gr[$])
          return;
        Gr[$] = !0;
        var Z = "";
        f && f._owner && f._owner !== Rt.current && (Z = " It was passed a child from " + z(f._owner.type) + "."), gt(f), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, Z), gt(null);
      }
    }
    function Vr(f, E) {
      {
        if (typeof f != "object")
          return;
        if (de(f))
          for (var $ = 0; $ < f.length; $++) {
            var Z = f[$];
            Hn(Z) && Jr(Z, E);
          }
        else if (Hn(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var me = b(f);
          if (typeof me == "function" && me !== f.entries)
            for (var we = me.call(f), ae; !(ae = we.next()).done; )
              Hn(ae.value) && Jr(ae.value, E);
        }
      }
    }
    function Ai(f) {
      {
        var E = f.type;
        if (E == null || typeof E == "string")
          return;
        var $;
        if (typeof E == "function")
          $ = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === d))
          $ = E.propTypes;
        else
          return;
        if ($) {
          var Z = z(E);
          Ce($, f.props, "prop", Z, f);
        } else if (E.PropTypes !== void 0 && !Fn) {
          Fn = !0;
          var me = z(E);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ei(f) {
      {
        for (var E = Object.keys(f.props), $ = 0; $ < E.length; $++) {
          var Z = E[$];
          if (Z !== "children" && Z !== "key") {
            gt(f), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Z), gt(null);
            break;
          }
        }
        f.ref !== null && (gt(f), y("Invalid attribute `ref` supplied to `React.Fragment`."), gt(null));
      }
    }
    var es = {};
    function ts(f, E, $, Z, me, we) {
      {
        var ae = I(f);
        if (!ae) {
          var ie = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $e = Ci();
          $e ? ie += $e : ie += Kr();
          var Pe;
          f === null ? Pe = "null" : de(f) ? Pe = "array" : f !== void 0 && f.$$typeof === e ? (Pe = "<" + (z(f.type) || "Unknown") + " />", ie = " Did you accidentally export a JSX literal instead of a component?") : Pe = typeof f, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Pe, ie);
        }
        var Oe = Pt(f, E, $, me, we);
        if (Oe == null)
          return Oe;
        if (ae) {
          var Ye = E.children;
          if (Ye !== void 0)
            if (Z)
              if (de(Ye)) {
                for (var vt = 0; vt < Ye.length; vt++)
                  Vr(Ye[vt], f);
                Object.freeze && Object.freeze(Ye);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Vr(Ye, f);
        }
        if (C.call(E, "key")) {
          var at = z(f), Fe = Object.keys(E).filter(function(Di) {
            return Di !== "key";
          }), Nn = Fe.length > 0 ? "{key: someKey, " + Fe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!es[at + Nn]) {
            var Oi = Fe.length > 0 ? "{" + Fe.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Nn, at, Oi, at), es[at + Nn] = !0;
          }
        }
        return f === n ? Ei(Oe) : Ai(Oe), Oe;
      }
    }
    function Ti(f, E, $) {
      return ts(f, E, $, !0);
    }
    function Ii(f, E, $) {
      return ts(f, E, $, !1);
    }
    var Pi = Ii, Ri = Ti;
    Dt.Fragment = n, Dt.jsx = Pi, Dt.jsxs = Ri;
  }()), Dt;
}
process.env.NODE_ENV === "production" ? or.exports = Fi() : or.exports = Hi();
var v = or.exports, Ni = Object.defineProperty, rn = (r, e, t) => ((n, s, o) => s in n ? Ni(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class st extends Error {
  constructor(e = {}) {
    super(e.message), rn(this, "exceptionId"), rn(this, "message"), rn(this, "source"), rn(this, "type"), this.message = e.message ?? "", this.source = e.source, this.type = this.constructor.name, this.exceptionId = e.exceptionId;
  }
}
class ct extends st {
}
class Cn extends st {
}
const ee = (r) => {
  typeof r != "string" ? r && typeof r.toString == "function" ? console.warn(`[nlux] ${r.toString()}`) : console.warn("[nlux]") : console.warn(`[nlux] ${r}`);
}, ss = [], ir = (r) => {
  ss.includes(r) || (ss.push(r), ee(r));
}, yo = class bn {
  static register(e) {
    const t = e.__compId;
    t ? bn.componentDefs.get(t) === void 0 && (e.__renderer && e.__updater ? bn.componentDefs.set(t, { id: t, model: e, render: e.__renderer, update: e.__updater }) : ee(`Component with id "${t}" missing renderer or updater`)) : ee("Component definition missing valid id");
  }
  static retrieve(e) {
    const t = bn.componentDefs.get(e);
    if (t) return t;
    ee(`Component with id "${e}" not registered`);
  }
};
yo.componentDefs = /* @__PURE__ */ new Map();
let xo = yo;
btoa("sectionsRegistered") + "";
const Ve = (r) => {
  const e = requestAnimationFrame(() => {
    r();
  });
  return () => {
    cancelAnimationFrame(e);
  };
}, Qt = (r) => {
  r.replaceChildren();
}, Ze = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (r) => {
  const e = 16 * Math.random() | 0;
  return (r == "x" ? e : 3 & e | 8).toString(16);
});
class We {
  constructor(e, t) {
    this.subComponentElementIds = /* @__PURE__ */ new Map(), this.subComponents = /* @__PURE__ */ new Map(), this.__context = null, this.__destroyed = !1, this.__status = "unmounted", this.actionsOnDomReady = [], this.compEventGetter = (i) => {
      if (this.destroyed) return () => {
      };
      const a = this.rendererEventListeners.get(i);
      if (!a) throw new st({ source: this.constructor.name, message: `Unable to call renderer event "${i}" because no matching event listener was found. Make sure that the event listener is registered using @CompEventListener() decorator in the component model class, and use class methods instead of arrow function attributes.` });
      return a;
    };
    const n = Object.getPrototypeOf(this).constructor.__compId;
    if (!n) throw new ct({ source: this.constructor.name, message: "Unable to instantiate component: missing compId in implementation. Component should be annotated using @Model() to set compId before iy can be instantiated." });
    if (this.def = xo.retrieve(n) ?? null, !this.def) throw new ct({ source: this.constructor.name, message: `Unable to instantiate component "${n}" because it's not registered. Component should be registered using CompRegistry.register(ComponentClass) before instantiating a component.` });
    this.__instanceId = Ze(), this.__destroyed = !1, this.__context = e, this.renderedDom = null, this.renderingRoot = null, this.props = t;
    const s = t ? Object.entries(t) : [];
    this.elementProps = new Map(s), this.rendererEventListeners = /* @__PURE__ */ new Map();
    const o = this.constructor.__compEventListeners;
    o && o.forEach((i, a) => {
      i.forEach((u) => {
        const l = Object.getPrototypeOf(this)[u];
        typeof l == "function" ? this.addRendererEventListener(a, l.bind(this)) : ee(`Unable to set event listener "${a}" because method "${u}" cannot be found on component "${this.constructor.name} at runtime!"`);
      });
    }), this.rendererProps = Object.freeze(t);
  }
  get destroyed() {
    return this.__destroyed;
  }
  get id() {
    return this.__instanceId;
  }
  get rendered() {
    return this.renderedDom !== null;
  }
  get root() {
    return this.throwIfDestroyed(), this.renderedDom && this.renderingRoot ? this.renderingRoot : null;
  }
  get status() {
    return this.__status;
  }
  get context() {
    if (!this.__context) throw new ct({ source: this.constructor.name, message: "Unable to get context because it's not set" });
    return this.__context;
  }
  destroy() {
    this.destroyComponent();
  }
  destroyListItemComponent() {
    this.destroyComponent(!0);
  }
  getProp(e) {
    return this.throwIfDestroyed(), this.elementProps.get(e) ?? null;
  }
  render(e, t) {
    var i;
    if (!this.def) return;
    if (this.destroyed) return void ee(`Unable to render component "${(i = this.def) == null ? void 0 : i.id}" because it is already destroyed`);
    if (this.rendered || this.renderedDom) return void ee(`Unable to render component "${this.def.id}" because it is already rendered`);
    const n = document.createDocumentFragment(), s = Object.getPrototypeOf(this).constructor.__compId, o = this.executeRenderer(n);
    if (!o) throw new st({ source: this.constructor.name, message: `Unable to render component "${s}" because renderer returned null` });
    this.renderedDom = o;
    for (const [, a] of this.subComponents) {
      const u = this.getSubComponentPortal(a.id);
      u && this.mountSubComponentToPortal(a.id, u);
    }
    Ve(() => {
      this.destroyed || (t ? e.insertBefore(n, t) : e.append(n), this.renderingRoot = e);
    });
  }
  updateSubComponent(e, t, n) {
    this.throwIfDestroyed();
    const s = this.subComponents.get(e);
    s && !s.destroyed && s.setProp(t, n);
  }
  addSubComponent(e, t, n) {
    if (this.throwIfDestroyed(), this.subComponents.has(e)) throw new ct({ source: this.constructor.name, message: `Unable to add sub-component "${e}" because it already exists` });
    if (this.subComponents.set(e, t), n && this.subComponentElementIds.set(e, n), this.renderedDom) {
      const s = this.getSubComponentPortal(e);
      s && this.mountSubComponentToPortal(e, s);
    }
  }
  executeDomAction(e, ...t) {
    if (this.throwIfDestroyed(), !this.renderedDom) return void this.actionsOnDomReady.push(() => this.executeDomAction(e, ...t));
    if (!this.renderingRoot) throw new st({ source: this.constructor.name, message: "Unable to execute DOM action because renderingRoot is not set" });
    const n = this.renderedDom.actions[e];
    if (!n) throw new st({ source: this.constructor.name, message: `Unable to execute DOM action "${String(e)}" because it does not exist` });
    return Ve(() => n(...t));
  }
  executeRenderer(e) {
    var s;
    const t = (s = this.def) == null ? void 0 : s.render;
    if (!t) return null;
    if (this.renderingRoot) throw new st({ source: this.constructor.name, message: "Unable to render component because renderingRoot is already set" });
    const n = t({ appendToRoot: (o) => {
      e.append(o), this.runDomActionsQueue();
    }, compEvent: this.compEventGetter, props: this.rendererProps, context: this.context });
    return n && (this.renderingRoot = e), n;
  }
  removeSubComponent(e) {
    this.throwIfDestroyed(), Ve(() => {
      const t = this.subComponents.get(e);
      t && (t.renderingRoot = null, t.destroy(), this.subComponents.delete(e));
    });
  }
  runDomActionsQueue() {
    if (this.actionsOnDomReady.length > 0 && this.rendered) {
      const e = this.actionsOnDomReady;
      this.actionsOnDomReady = [];
      for (const t of e) Ve(() => t());
    }
  }
  setProp(e, t) {
    this.destroyed ? ee(`Unable to set prop "${String(e)}" because component "${this.constructor.name}" is destroyed`) : this.elementProps.has(e) ? (this.schedulePropUpdate(e, this.elementProps.get(e), t), this.props = Object.freeze(Object.fromEntries(this.elementProps)), this.elementProps.set(e, t)) : ee(`Unable to set prop "${String(e)}" because it does not exist in the component props`);
  }
  throwIfDestroyed() {
    if (this.__destroyed) throw new ct({ source: this.constructor.name, message: "Unable to call method on destroyed component" });
  }
  addRendererEventListener(e, t) {
    if (this.throwIfDestroyed(), this.rendererEventListeners.has(e)) throw new ct({ source: this.constructor.name, message: `Unable to add event listener to rendererEvents "${e}" because it already exists` });
    this.rendererEventListeners.set(e, t);
  }
  destroyComponent(e = !1) {
    if (this.throwIfDestroyed(), this.subComponents.forEach((t) => {
      t.destroy();
    }), this.renderedDom) {
      this.renderedDom.elements && (this.renderedDom.elements = void 0), this.renderedDom.actions && (this.renderedDom.actions = void 0), this.renderedDom.onDestroy && this.renderedDom.onDestroy();
      const t = this.renderingRoot;
      Ve(() => {
        var n;
        if (t) if (t instanceof DocumentFragment) for (; t.firstChild; ) t.removeChild(t.firstChild);
        else e ? (n = t.parentElement) == null || n.removeChild(t) : Qt(t);
      }), this.renderedDom = null, this.renderingRoot = null;
    }
    this.__destroyed = !0, this.__context = null, this.props = void 0, this.elementProps.clear(), this.rendererEventListeners.clear(), this.subComponents.clear();
  }
  getSubComponentPortal(e) {
    var o;
    const t = this.subComponents.get(e), n = this.subComponentElementIds.get(e);
    if (!t || !n) return null;
    const s = ((o = this.renderedDom) == null ? void 0 : o.elements)[n];
    return s instanceof HTMLElement ? s : null;
  }
  mountSubComponentToPortal(e, t) {
    const n = this.subComponents.get(e);
    n == null || n.render(t);
  }
  schedulePropUpdate(e, t, n) {
    var a;
    if (!this.renderedDom || !((a = this.def) != null && a.update)) return;
    const s = this.renderedDom, o = this.renderingRoot, i = this.def.update;
    o && Ve(() => {
      i({ propName: e, currentValue: t, newValue: n, dom: { root: o, elements: s.elements, actions: s.actions }, updateSubComponent: this.updateSubComponent });
    });
  }
}
We.__compEventListeners = null, We.__compId = null, We.__renderer = null, We.__updater = null;
const ot = (r, e, t) => (n) => {
  n.__compId = r, n.__renderer = e, n.__updater = t;
}, Xe = (r) => (e, t) => {
  const n = e;
  if (typeof n.constructor != "function") throw new ct({ source: "CallbackFor", message: "@CallbackFor can only be used on methods of a class!" });
  n.constructor.hasOwnProperty("__compEventListeners") && n.constructor.__compEventListeners !== null || (n.constructor.__compEventListeners = /* @__PURE__ */ new Map());
  const s = n.constructor.__compEventListeners, o = s.get(r);
  o ? o.push(t) : s.set(r, [t]);
};
function Ui() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
let ht = { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
function os(r) {
  ht = r;
}
var _i = Object.defineProperty, bo = (r, e, t) => ((n, s, o) => s in n ? _i(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
let Ft = class {
  constructor(e) {
    bo(this, "options"), this.options = e || ht;
  }
  postprocess(e) {
    return e;
  }
  preprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
};
bo(Ft, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]));
const wo = /[&<>"']/, qi = new RegExp(wo.source, "g"), ko = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Yi = new RegExp(ko.source, "g"), Wi = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, is = (r) => Wi[r];
function Ne(r, e) {
  if (e) {
    if (wo.test(r)) return r.replace(qi, is);
  } else if (ko.test(r)) return r.replace(Yi, is);
  return r;
}
const Qi = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function Zi(r) {
  return r.replace(Qi, (e, t) => (t = t.toLowerCase()) === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "");
}
const Xi = /(^|[^\[])\^/g;
function xe(r, e) {
  let t = typeof r == "string" ? r : r.source;
  e = e || "";
  const n = { replace: (s, o) => {
    let i = typeof o == "string" ? o : o.source;
    return i = i.replace(Xi, "$1"), t = t.replace(s, i), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
function as(r) {
  try {
    r = encodeURI(r).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return r;
}
const Ht = { exec: () => null };
function cs(r, e) {
  const t = r.replace(/\|/g, (s, o, i) => {
    let a = !1, u = o;
    for (; --u >= 0 && i[u] === "\\"; ) a = !a;
    return a ? "|" : " |";
  }).split(/ \|/);
  let n = 0;
  if (t[0].trim() || t.shift(), t.length > 0 && !t[t.length - 1].trim() && t.pop(), e) if (t.length > e) t.splice(e);
  else for (; t.length < e; ) t.push("");
  for (; n < t.length; n++) t[n] = t[n].trim().replace(/\\\|/g, "|");
  return t;
}
function sn(r, e, t) {
  const n = r.length;
  if (n === 0) return "";
  let s = 0;
  for (; s < n; ) {
    const o = r.charAt(n - s - 1);
    if (o !== e || t) {
      if (o === e || !t) break;
      s++;
    } else s++;
  }
  return r.slice(0, n - s);
}
const Jt = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Co = /(?:[*+-]|\d{1,9}[.)])/, So = xe(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Co).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), jr = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Br = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Ki = xe(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Br).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Gi = xe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Co).getRegex(), zn = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Mr = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Ji = xe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Mr).replace("tag", zn).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ls = xe(jr).replace("hr", Jt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zn).getRegex(), Lr = { blockquote: xe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ls).getRegex(), code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, def: Ki, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hr: Jt, html: Ji, lheading: So, list: Gi, newline: /^(?: *(?:\n|$))+/, paragraph: ls, table: Ht, text: /^[^\n]+/ }, us = xe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Jt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zn).getRegex(), Vi = { ...Lr, table: us, paragraph: xe(jr).replace("hr", Jt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", us).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zn).getRegex() }, ea = { ...Lr, html: xe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Mr).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Ht, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: xe(jr).replace("hr", Jt).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", So).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Ao = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Eo = /^( {2,}|\\)\n(?!\s*$)/, Vt = "\\p{P}\\p{S}", ta = xe(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Vt).getRegex(), na = xe(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Vt).getRegex(), ra = xe("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Vt).getRegex(), sa = xe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Vt).getRegex(), oa = xe(/\\([punct])/, "gu").replace(/punct/g, Vt).getRegex(), ia = xe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), aa = xe(Mr).replace("(?:-->|$)", "-->").getRegex(), ca = xe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", aa).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Sn = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, la = xe(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Sn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ds = xe(/^!?\[(label)\]\[(ref)\]/).replace("label", Sn).replace("ref", Br).getRegex(), ps = xe(/^!?\[(ref)\](?:\[\])?/).replace("ref", Br).getRegex(), zr = { _backpedal: Ht, anyPunctuation: oa, autolink: ia, blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, br: Eo, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, del: Ht, emStrongLDelim: na, emStrongRDelimAst: ra, emStrongRDelimUnd: sa, escape: Ao, link: la, nolink: ps, punctuation: ta, reflink: ds, reflinkSearch: xe("reflink|nolink(?!\\()", "g").replace("reflink", ds).replace("nolink", ps).getRegex(), tag: ca, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, url: Ht }, ua = { ...zr, link: xe(/^!?\[(label)\]\((.*?)\)/).replace("label", Sn).getRegex(), reflink: xe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Sn).getRegex() }, ar = { ...zr, escape: xe(Ao).replace("])", "~|])").getRegex(), url: xe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, da = { ...ar, br: xe(Eo).replace("{2,}", "*").getRegex(), text: xe(ar.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, on = { normal: Lr, gfm: Vi, pedantic: ea }, jt = { normal: zr, gfm: ar, breaks: da, pedantic: ua };
var pa = Object.defineProperty, Un = (r, e, t) => ((n, s, o) => s in n ? pa(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
function hs(r, e, t, n) {
  const s = e.href, o = e.title ? Ne(e.title) : null, i = r[1].replace(/\\([\[\]])/g, "$1");
  if (r[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const a = { type: "link", raw: t, href: s, title: o, text: i, tokens: n.inlineTokens(i) };
    return n.state.inLink = !1, a;
  }
  return { type: "image", raw: t, href: s, title: o, text: Ne(i) };
}
let An = class {
  constructor(e) {
    Un(this, "lexer"), Un(this, "options"), Un(this, "rules"), this.options = e || ht;
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, s;
      return t[2] === "@" ? (n = Ne(t[1]), s = "mailto:" + n) : (n = Ne(t[1]), s = n), { type: "link", raw: t[0], text: n, href: s, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      n = sn(n.replace(/^ *>[ \t]?/gm, ""), `
`);
      const s = this.lexer.state.top;
      this.lexer.state.top = !0;
      const o = this.lexer.blockTokens(n);
      return this.lexer.state.top = s, { type: "blockquote", raw: t[0], tokens: o, text: n };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const n = t[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : sn(n, `
`) };
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(n), o = /^ /.test(n) && / $/.test(n);
      return s && o && (n = n.substring(1, n.length - 1)), n = Ne(n, !0), { type: "codespan", raw: t[0], text: n };
    }
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const n = t[1].toLowerCase().replace(/\s+/g, " "), s = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", o = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: n, raw: t[0], href: s, title: o };
    }
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t) return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
  }
  emStrong(e, t, n = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (s && !(s[3] && n.match(/[\p{L}\p{N}]/u)) && (!(s[1] || s[2]) || !n || this.rules.inline.punctuation.exec(n))) {
      const o = [...s[0]].length - 1;
      let i, a, u = o, l = 0;
      const c = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, t = t.slice(-1 * e.length + o); (s = c.exec(t)) != null; ) {
        if (i = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !i) continue;
        if (a = [...i].length, s[3] || s[4]) {
          u += a;
          continue;
        }
        if ((s[5] || s[6]) && o % 3 && !((o + a) % 3)) {
          l += a;
          continue;
        }
        if (u -= a, u > 0) continue;
        a = Math.min(a, a + u + l);
        const d = [...s[0]][0].length, p = e.slice(0, o + s.index + d + a);
        if (Math.min(o, a) % 2) {
          const m = p.slice(1, -1);
          return { type: "em", raw: p, text: m, tokens: this.lexer.inlineTokens(m) };
        }
        const h = p.slice(2, -2);
        return { type: "strong", raw: p, text: h, tokens: this.lexer.inlineTokens(h) };
      }
    }
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: Ne(t[1]) };
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const n = t[0], s = function(o, i) {
        const a = o.match(/^(\s+)(?:```)/);
        if (a === null) return i;
        const u = a[1];
        return i.split(`
`).map((l) => {
          const c = l.match(/^\s+/);
          if (c === null) return l;
          const [d] = c;
          return d.length >= u.length ? l.slice(u.length) : l;
        }).join(`
`);
      }(n, t[3] || "");
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: s };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (/#$/.test(n)) {
        const s = sn(n, "#");
        this.options.pedantic ? n = s.trim() : s && !/ $/.test(s) || (n = s.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: t[0] };
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t)
      return { type: "html", block: !0, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] };
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      let n;
      return n = this.lexer.state.inRawBlock ? t[0] : Ne(t[0]), { type: "text", raw: t[0], text: n };
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t) return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const n = t[2].trim();
      if (!this.options.pedantic && /^</.test(n)) {
        if (!/>$/.test(n)) return;
        const i = sn(n.slice(0, -1), "\\");
        if ((n.length - i.length) % 2 == 0) return;
      } else {
        const i = function(a, u) {
          if (a.indexOf(u[1]) === -1) return -1;
          let l = 0;
          for (let c = 0; c < a.length; c++) if (a[c] === "\\") c++;
          else if (a[c] === u[0]) l++;
          else if (a[c] === u[1] && (l--, l < 0)) return c;
          return -1;
        }(t[2], "()");
        if (i > -1) {
          const a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + i;
          t[2] = t[2].substring(0, i), t[0] = t[0].substring(0, a).trim(), t[3] = "";
        }
      }
      let s = t[2], o = "";
      if (this.options.pedantic) {
        const i = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
        i && (s = i[1], o = i[3]);
      } else o = t[3] ? t[3].slice(1, -1) : "";
      return s = s.trim(), /^</.test(s) && (s = this.options.pedantic && !/>$/.test(n) ? s.slice(1) : s.slice(1, -1)), hs(t, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer);
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim();
      const s = n.length > 1, o = { type: "list", raw: "", ordered: s, start: s ? +n.slice(0, -1) : "", loose: !1, items: [] };
      n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = s ? n : "[*+-]");
      const i = new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let a = "", u = "", l = !1;
      for (; e; ) {
        let c = !1;
        if (!(t = i.exec(e)) || this.rules.block.hr.test(e)) break;
        a = t[0], e = e.substring(a.length);
        let d = t[2].split(`
`, 1)[0].replace(/^\t+/, (k) => " ".repeat(3 * k.length)), p = e.split(`
`, 1)[0], h = 0;
        this.options.pedantic ? (h = 2, u = d.trimStart()) : (h = t[2].search(/[^ ]/), h = h > 4 ? 1 : h, u = d.slice(h), h += t[1].length);
        let m = !1;
        if (!d && /^ *$/.test(p) && (a += p + `
`, e = e.substring(p.length + 1), c = !0), !c) {
          const k = new RegExp(`^ {0,${Math.min(3, h - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), y = new RegExp(`^ {0,${Math.min(3, h - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), x = new RegExp(`^ {0,${Math.min(3, h - 1)}}(?:\`\`\`|~~~)`), A = new RegExp(`^ {0,${Math.min(3, h - 1)}}#`);
          for (; e; ) {
            const w = e.split(`
`, 1)[0];
            if (p = w, this.options.pedantic && (p = p.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), x.test(p) || A.test(p) || k.test(p) || y.test(e)) break;
            if (p.search(/[^ ]/) >= h || !p.trim()) u += `
` + p.slice(h);
            else {
              if (m || d.search(/[^ ]/) >= 4 || x.test(d) || A.test(d) || y.test(d)) break;
              u += `
` + p;
            }
            m || p.trim() || (m = !0), a += w + `
`, e = e.substring(w.length + 1), d = p.slice(h);
          }
        }
        o.loose || (l ? o.loose = !0 : /\n *\n *$/.test(a) && (l = !0));
        let g, b = null;
        this.options.gfm && (b = /^\[[ xX]\] /.exec(u), b && (g = b[0] !== "[ ] ", u = u.replace(/^\[[ xX]\] +/, ""))), o.items.push({ type: "list_item", raw: a, task: !!b, checked: g, loose: !1, text: u, tokens: [] }), o.raw += a;
      }
      o.items[o.items.length - 1].raw = a.trimEnd(), o.items[o.items.length - 1].text = u.trimEnd(), o.raw = o.raw.trimEnd();
      for (let c = 0; c < o.items.length; c++) if (this.lexer.state.top = !1, o.items[c].tokens = this.lexer.blockTokens(o.items[c].text, []), !o.loose) {
        const d = o.items[c].tokens.filter((h) => h.type === "space"), p = d.length > 0 && d.some((h) => /\n.*\n/.test(h.raw));
        o.loose = p;
      }
      if (o.loose) for (let c = 0; c < o.items.length; c++) o.items[c].loose = !0;
      return o;
    }
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      const s = t[(n[2] || n[1]).replace(/\s+/g, " ").toLowerCase()];
      if (!s) {
        const o = n[0].charAt(0);
        return { type: "text", raw: o, text: o };
      }
      return hs(n, s, n[0], this.lexer);
    }
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2])) return;
    const n = cs(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), o = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], i = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === s.length) {
      for (const a of s) /^ *-+: *$/.test(a) ? i.align.push("right") : /^ *:-+: *$/.test(a) ? i.align.push("center") : /^ *:-+ *$/.test(a) ? i.align.push("left") : i.align.push(null);
      for (const a of n) i.header.push({ text: a, tokens: this.lexer.inline(a) });
      for (const a of o) i.rows.push(cs(a, i.header.length).map((u) => ({ text: u, tokens: this.lexer.inline(u) })));
      return i;
    }
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: t[0] };
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  url(e) {
    var n;
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let s, o;
      if (t[2] === "@") s = Ne(t[0]), o = "mailto:" + s;
      else {
        let i;
        do
          i = t[0], t[0] = ((n = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : n[0]) ?? "";
        while (i !== t[0]);
        s = Ne(t[0]), o = t[1] === "www." ? "http://" + t[0] : t[0];
      }
      return { type: "link", raw: t[0], text: s, href: o, tokens: [{ type: "text", raw: s, text: s }] };
    }
  }
};
var ha = Object.defineProperty, Bt = (r, e, t) => ((n, s, o) => s in n ? ha(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
let xt = class cr {
  constructor(e) {
    Bt(this, "options"), Bt(this, "state"), Bt(this, "tokens"), Bt(this, "inlineQueue"), Bt(this, "tokenizer"), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || ht, this.options.tokenizer = this.options.tokenizer || new An(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    const t = { block: on.normal, inline: jt.normal };
    this.options.pedantic ? (t.block = on.pedantic, t.inline = jt.pedantic) : this.options.gfm && (t.block = on.gfm, this.options.breaks ? t.inline = jt.breaks : t.inline = jt.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: on, inline: jt };
  }
  static lex(e, t) {
    return new cr(t).lex(e);
  }
  static lexInline(e, t) {
    return new cr(t).inlineTokens(e);
  }
  blockTokens(e, t = []) {
    let n, s, o, i;
    for (e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, (a, u, l) => u + "    ".repeat(l.length)); e; ) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((a) => !!(n = a.call({ lexer: this }, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0)))) if (n = this.tokenizer.space(e)) e = e.substring(n.raw.length), n.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(n);
    else if (n = this.tokenizer.code(e)) e = e.substring(n.raw.length), s = t[t.length - 1], !s || s.type !== "paragraph" && s.type !== "text" ? t.push(n) : (s.raw += `
` + n.raw, s.text += `
` + n.text, this.inlineQueue[this.inlineQueue.length - 1].src = s.text);
    else if (n = this.tokenizer.fences(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.heading(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.hr(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.blockquote(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.list(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.html(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.def(e)) e = e.substring(n.raw.length), s = t[t.length - 1], !s || s.type !== "paragraph" && s.type !== "text" ? this.tokens.links[n.tag] || (this.tokens.links[n.tag] = { href: n.href, title: n.title }) : (s.raw += `
` + n.raw, s.text += `
` + n.raw, this.inlineQueue[this.inlineQueue.length - 1].src = s.text);
    else if (n = this.tokenizer.table(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.lheading(e)) e = e.substring(n.raw.length), t.push(n);
    else {
      if (o = e, this.options.extensions && this.options.extensions.startBlock) {
        let a = 1 / 0;
        const u = e.slice(1);
        let l;
        this.options.extensions.startBlock.forEach((c) => {
          l = c.call({ lexer: this }, u), typeof l == "number" && l >= 0 && (a = Math.min(a, l));
        }), a < 1 / 0 && a >= 0 && (o = e.substring(0, a + 1));
      }
      if (this.state.top && (n = this.tokenizer.paragraph(o))) s = t[t.length - 1], i && s.type === "paragraph" ? (s.raw += `
` + n.raw, s.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(n), i = o.length !== e.length, e = e.substring(n.raw.length);
      else if (n = this.tokenizer.text(e)) e = e.substring(n.raw.length), s = t[t.length - 1], s && s.type === "text" ? (s.raw += `
` + n.raw, s.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(n);
      else if (e) {
        const a = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(a);
          break;
        }
        throw new Error(a);
      }
    }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let n, s, o, i, a, u, l = e;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0) for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null; ) c.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; ) l = l.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(l)) != null; ) l = l.slice(0, i.index) + "++" + l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; ) if (a || (u = ""), a = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((c) => !!(n = c.call({ lexer: this }, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0)))) if (n = this.tokenizer.escape(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.tag(e)) e = e.substring(n.raw.length), s = t[t.length - 1], s && n.type === "text" && s.type === "text" ? (s.raw += n.raw, s.text += n.text) : t.push(n);
    else if (n = this.tokenizer.link(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(n.raw.length), s = t[t.length - 1], s && n.type === "text" && s.type === "text" ? (s.raw += n.raw, s.text += n.text) : t.push(n);
    else if (n = this.tokenizer.emStrong(e, l, u)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.codespan(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.br(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.del(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.autolink(e)) e = e.substring(n.raw.length), t.push(n);
    else if (this.state.inLink || !(n = this.tokenizer.url(e))) {
      if (o = e, this.options.extensions && this.options.extensions.startInline) {
        let c = 1 / 0;
        const d = e.slice(1);
        let p;
        this.options.extensions.startInline.forEach((h) => {
          p = h.call({ lexer: this }, d), typeof p == "number" && p >= 0 && (c = Math.min(c, p));
        }), c < 1 / 0 && c >= 0 && (o = e.substring(0, c + 1));
      }
      if (n = this.tokenizer.inlineText(o)) e = e.substring(n.raw.length), n.raw.slice(-1) !== "_" && (u = n.raw.slice(-1)), a = !0, s = t[t.length - 1], s && s.type === "text" ? (s.raw += n.raw, s.text += n.text) : t.push(n);
      else if (e) {
        const c = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(c);
          break;
        }
        throw new Error(c);
      }
    } else e = e.substring(n.raw.length), t.push(n);
    return t;
  }
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
};
var ma = Object.defineProperty, fa = (r, e, t) => ((n, s, o) => s in n ? ma(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, e + "", t);
let En = class {
  constructor(e) {
    fa(this, "options"), this.options = e || ht;
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  br() {
    return "<br>";
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  code(e, t, n) {
    var o;
    const s = (o = (t || "").match(/^\S*/)) == null ? void 0 : o[0];
    return e = e.replace(/\n$/, "") + `
`, s ? '<pre><code class="language-' + Ne(s) + '">' + (n ? e : Ne(e, !0)) + `</code></pre>
` : "<pre><code>" + (n ? e : Ne(e, !0)) + `</code></pre>
`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  heading(e, t, n) {
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  html(e, t) {
    return e;
  }
  image(e, t, n) {
    const s = as(e);
    if (s === null) return n;
    let o = `<img src="${e = s}" alt="${n}"`;
    return t && (o += ` title="${t}"`), o += ">", o;
  }
  link(e, t, n) {
    const s = as(e);
    if (s === null) return n;
    let o = '<a href="' + (e = s) + '"';
    return t && (o += ' title="' + t + '"'), o += ">" + n + "</a>", o;
  }
  list(e, t, n) {
    const s = t ? "ol" : "ul";
    return "<" + s + (t && n !== 1 ? ' start="' + n + '"' : "") + `>
` + e + "</" + s + `>
`;
  }
  listitem(e, t, n) {
    return `<li>${e}</li>
`;
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  tablecell(e, t) {
    const n = t.header ? "th" : "td";
    return (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e + `</${n}>
`;
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  text(e) {
    return e;
  }
}, $r = class {
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, n) {
    return "" + n;
  }
  image(e, t, n) {
    return "" + n;
  }
  br() {
    return "";
  }
};
var ga = Object.defineProperty, _n = (r, e, t) => ((n, s, o) => s in n ? ga(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
let bt = class lr {
  constructor(e) {
    _n(this, "options"), _n(this, "renderer"), _n(this, "textRenderer"), this.options = e || ht, this.options.renderer = this.options.renderer || new En(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new $r();
  }
  static parse(e, t) {
    return new lr(t).parse(e);
  }
  static parseInline(e, t) {
    return new lr(t).parseInline(e);
  }
  parse(e, t = !0) {
    let n = "";
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
        const i = o, a = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (a !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(i.type)) {
          n += a || "";
          continue;
        }
      }
      switch (o.type) {
        case "space":
          continue;
        case "hr":
          n += this.renderer.hr();
          continue;
        case "heading": {
          const i = o;
          n += this.renderer.heading(this.parseInline(i.tokens), i.depth, Zi(this.parseInline(i.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const i = o;
          n += this.renderer.code(i.text, i.lang, !!i.escaped);
          continue;
        }
        case "table": {
          const i = o;
          let a = "", u = "";
          for (let c = 0; c < i.header.length; c++) u += this.renderer.tablecell(this.parseInline(i.header[c].tokens), { header: !0, align: i.align[c] });
          a += this.renderer.tablerow(u);
          let l = "";
          for (let c = 0; c < i.rows.length; c++) {
            const d = i.rows[c];
            u = "";
            for (let p = 0; p < d.length; p++) u += this.renderer.tablecell(this.parseInline(d[p].tokens), { header: !1, align: i.align[p] });
            l += this.renderer.tablerow(u);
          }
          n += this.renderer.table(a, l);
          continue;
        }
        case "blockquote": {
          const i = o, a = this.parse(i.tokens);
          n += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          const i = o, a = i.ordered, u = i.start, l = i.loose;
          let c = "";
          for (let d = 0; d < i.items.length; d++) {
            const p = i.items[d], h = p.checked, m = p.task;
            let g = "";
            if (p.task) {
              const b = this.renderer.checkbox(!!h);
              l ? p.tokens.length > 0 && p.tokens[0].type === "paragraph" ? (p.tokens[0].text = b + " " + p.tokens[0].text, p.tokens[0].tokens && p.tokens[0].tokens.length > 0 && p.tokens[0].tokens[0].type === "text" && (p.tokens[0].tokens[0].text = b + " " + p.tokens[0].tokens[0].text)) : p.tokens.unshift({ type: "text", text: b + " " }) : g += b + " ";
            }
            g += this.parse(p.tokens, l), c += this.renderer.listitem(g, m, !!h);
          }
          n += this.renderer.list(c, a, u);
          continue;
        }
        case "html": {
          const i = o;
          n += this.renderer.html(i.text, i.block);
          continue;
        }
        case "paragraph": {
          const i = o;
          n += this.renderer.paragraph(this.parseInline(i.tokens));
          continue;
        }
        case "text": {
          let i = o, a = i.tokens ? this.parseInline(i.tokens) : i.text;
          for (; s + 1 < e.length && e[s + 1].type === "text"; ) i = e[++s], a += `
` + (i.tokens ? this.parseInline(i.tokens) : i.text);
          n += t ? this.renderer.paragraph(a) : a;
          continue;
        }
        default: {
          const i = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return n;
  }
  parseInline(e, t) {
    t = t || this.renderer;
    let n = "";
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
        const i = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (i !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          n += i || "";
          continue;
        }
      }
      switch (o.type) {
        case "escape": {
          const i = o;
          n += t.text(i.text);
          break;
        }
        case "html": {
          const i = o;
          n += t.html(i.text);
          break;
        }
        case "link": {
          const i = o;
          n += t.link(i.href, i.title, this.parseInline(i.tokens, t));
          break;
        }
        case "image": {
          const i = o;
          n += t.image(i.href, i.title, i.text);
          break;
        }
        case "strong": {
          const i = o;
          n += t.strong(this.parseInline(i.tokens, t));
          break;
        }
        case "em": {
          const i = o;
          n += t.em(this.parseInline(i.tokens, t));
          break;
        }
        case "codespan": {
          const i = o;
          n += t.codespan(i.text);
          break;
        }
        case "br":
          n += t.br();
          break;
        case "del": {
          const i = o;
          n += t.del(this.parseInline(i.tokens, t));
          break;
        }
        case "text": {
          const i = o;
          n += t.text(i.text);
          break;
        }
        default: {
          const i = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return n;
  }
};
var Nt, ms, ur, va = Object.defineProperty, To = (r) => {
  throw TypeError(r);
}, Ke = (r, e, t) => ((n, s, o) => s in n ? va(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t), dr = (r, e, t) => (((n, s, o) => {
  s.has(n) || To("Cannot " + o);
})(r, e, "access private method"), t);
Nt = /* @__PURE__ */ new WeakSet(), ms = function(r, e) {
  return (t) => {
    if (t.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
      const n = "<p>An error occurred:</p><pre>" + Ne(t.message + "", !0) + "</pre>";
      return e ? Promise.resolve(n) : n;
    }
    if (e) return Promise.reject(t);
    throw t;
  };
}, ur = function(r, e) {
  return (t, n) => {
    const s = { ...n }, o = { ...this.defaults, ...s };
    this.defaults.async === !0 && s.async === !1 && (o.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), o.async = !0);
    const i = dr(this, Nt, ms).call(this, !!o.silent, !!o.async);
    if (t == null) return i(new Error("marked(): input parameter is undefined or null"));
    if (typeof t != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
    if (o.hooks && (o.hooks.options = o), o.async) return Promise.resolve(o.hooks ? o.hooks.preprocess(t) : t).then((a) => r(a, o)).then((a) => o.hooks ? o.hooks.processAllTokens(a) : a).then((a) => o.walkTokens ? Promise.all(this.walkTokens(a, o.walkTokens)).then(() => a) : a).then((a) => e(a, o)).then((a) => o.hooks ? o.hooks.postprocess(a) : a).catch(i);
    try {
      o.hooks && (t = o.hooks.preprocess(t));
      let a = r(t, o);
      o.hooks && (a = o.hooks.processAllTokens(a)), o.walkTokens && this.walkTokens(a, o.walkTokens);
      let u = e(a, o);
      return o.hooks && (u = o.hooks.postprocess(u)), u;
    } catch (a) {
      return i(a);
    }
  };
};
const lt = new class {
  constructor(...r) {
    var e, t, n;
    e = this, (t = Nt).has(e) ? To("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ke(this, "Hooks", Ft), Ke(this, "Lexer", xt), Ke(this, "Parser", bt), Ke(this, "Renderer", En), Ke(this, "TextRenderer", $r), Ke(this, "Tokenizer", An), Ke(this, "defaults", { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null }), Ke(this, "options", this.setOptions), Ke(this, "parse", dr(this, Nt, ur).call(this, xt.lex, bt.parse)), Ke(this, "parseInline", dr(this, Nt, ur).call(this, xt.lexInline, bt.parseInline)), this.use(...r);
  }
  lexer(r, e) {
    return xt.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return bt.parse(r, e ?? this.defaults);
  }
  setOptions(r) {
    return this.defaults = { ...this.defaults, ...r }, this;
  }
  use(...r) {
    const e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return r.forEach((t) => {
      const n = { ...t };
      if (n.async = this.defaults.async || n.async || !1, t.extensions && (t.extensions.forEach((s) => {
        if (!s.name) throw new Error("extension name required");
        if ("renderer" in s) {
          const o = e.renderers[s.name];
          e.renderers[s.name] = o ? function(...i) {
            let a = s.renderer.apply(this, i);
            return a === !1 && (a = o.apply(this, i)), a;
          } : s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          const o = e[s.level];
          o ? o.unshift(s.tokenizer) : e[s.level] = [s.tokenizer], s.start && (s.level === "block" ? e.startBlock ? e.startBlock.push(s.start) : e.startBlock = [s.start] : s.level === "inline" && (e.startInline ? e.startInline.push(s.start) : e.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (e.childTokens[s.name] = s.childTokens);
      }), n.extensions = e), t.renderer) {
        const s = this.defaults.renderer || new En(this.defaults);
        for (const o in t.renderer) {
          if (!(o in s)) throw new Error(`renderer '${o}' does not exist`);
          if (o === "options") continue;
          const i = o, a = t.renderer[i], u = s[i];
          s[i] = (...l) => {
            let c = a.apply(s, l);
            return c === !1 && (c = u.apply(s, l)), c || "";
          };
        }
        n.renderer = s;
      }
      if (t.tokenizer) {
        const s = this.defaults.tokenizer || new An(this.defaults);
        for (const o in t.tokenizer) {
          if (!(o in s)) throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o)) continue;
          const i = o, a = t.tokenizer[i], u = s[i];
          s[i] = (...l) => {
            let c = a.apply(s, l);
            return c === !1 && (c = u.apply(s, l)), c;
          };
        }
        n.tokenizer = s;
      }
      if (t.hooks) {
        const s = this.defaults.hooks || new Ft();
        for (const o in t.hooks) {
          if (!(o in s)) throw new Error(`hook '${o}' does not exist`);
          if (o === "options") continue;
          const i = o, a = t.hooks[i], u = s[i];
          Ft.passThroughHooks.has(o) ? s[i] = (l) => {
            if (this.defaults.async) return Promise.resolve(a.call(s, l)).then((d) => u.call(s, d));
            const c = a.call(s, l);
            return u.call(s, c);
          } : s[i] = (...l) => {
            let c = a.apply(s, l);
            return c === !1 && (c = u.apply(s, l)), c;
          };
        }
        n.hooks = s;
      }
      if (t.walkTokens) {
        const s = this.defaults.walkTokens, o = t.walkTokens;
        n.walkTokens = function(i) {
          let a = [];
          return a.push(o.call(this, i)), s && (a = a.concat(s.call(this, i))), a;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  walkTokens(r, e) {
    var n, s;
    let t = [];
    for (const o of r) switch (t = t.concat(e.call(this, o)), o.type) {
      case "table": {
        const i = o;
        for (const a of i.header) t = t.concat(this.walkTokens(a.tokens, e));
        for (const a of i.rows) for (const u of a) t = t.concat(this.walkTokens(u.tokens, e));
        break;
      }
      case "list": {
        const i = o;
        t = t.concat(this.walkTokens(i.items, e));
        break;
      }
      default: {
        const i = o;
        (s = (n = this.defaults.extensions) == null ? void 0 : n.childTokens) != null && s[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((a) => {
          const u = i[a].flat(1 / 0);
          t = t.concat(this.walkTokens(u, e));
        }) : i.tokens && (t = t.concat(this.walkTokens(i.tokens, e)));
      }
    }
    return t;
  }
}();
function Ee(r, e) {
  return lt.parse(r, e);
}
Ee.options = Ee.setOptions = function(r) {
  return lt.setOptions(r), Ee.defaults = lt.defaults, os(Ee.defaults), Ee;
}, Ee.getDefaults = Ui, Ee.defaults = ht, Ee.use = function(...r) {
  return lt.use(...r), Ee.defaults = lt.defaults, os(Ee.defaults), Ee;
}, Ee.walkTokens = function(r, e) {
  return lt.walkTokens(r, e);
}, Ee.parseInline = lt.parseInline, Ee.Parser = bt, Ee.parser = bt.parse, Ee.Renderer = En, Ee.TextRenderer = $r, Ee.Lexer = xt, Ee.lexer = xt.lex, Ee.Tokenizer = An, Ee.Hooks = Ft, Ee.parse = Ee;
const Io = (r, e) => {
  const { showCodeBlockCopyButton: t, markdownLinkTarget: n, syntaxHighlighter: s, htmlSanitizer: o } = e || {}, i = Ee(r, { async: !1, breaks: !0 });
  if (typeof i != "string") throw new Error("Markdown parsing failed");
  const a = document.createElement("div");
  return a.innerHTML = o ? o(i) : i, a.querySelectorAll("pre").forEach((u) => {
    const l = document.createElement("div");
    l.className = "code-block";
    const c = u.querySelector("code");
    if (!c) {
      const m = u.innerHTML;
      return l.innerHTML = o ? o(m) : m, void u.replaceWith(l);
    }
    let d;
    for (let m = 0; m < c.classList.length; m++) {
      const g = c.classList[m];
      if (g.startsWith("language-")) {
        d = g.slice(9);
        break;
      }
    }
    const p = document.createElement("pre"), h = "<div>" + c.innerHTML + "</div>";
    if (p.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(h) : h, d && (p.setAttribute("data-language", d), s)) {
      const m = "<div>" + s.createHighlighter()(c.textContent || "", d) + "</div>";
      p.innerHTML = o ? o(m) : m, p.className = "highlighter-dark";
    }
    Qt(l), l.appendChild(p), u.replaceWith(l);
  }), t !== !1 && a.querySelectorAll(".code-block").forEach((u) => {
    var p;
    if (!u.querySelector("pre") || (p = u.previousElementSibling) != null && p.classList.contains("nlux-comp-copyButton")) return;
    const l = "Copy code block to clipboard", c = document.createElement("button");
    c.classList.add("nlux-comp-copyButton"), c.setAttribute("aria-label", l), c.setAttribute("title", l);
    const d = document.createElement("span");
    d.classList.add("icon-copy"), c.appendChild(d), u.appendChild(c);
  }), n !== "self" && a.querySelectorAll("a").forEach((u) => {
    u.setAttribute("target", "_blank");
  }), a.innerHTML;
}, fs = (r) => {
  if (!(r instanceof HTMLButtonElement) || r.dataset.clickListenerSet === "true") return;
  let e = !1;
  const t = r.nextElementSibling;
  r.addEventListener("click", () => {
    if (e || !t) return;
    const n = t.innerText;
    navigator.clipboard.writeText(n ?? ""), e = !0, r.classList.add("clicked"), setTimeout(() => {
      e = !1, r.classList.remove("clicked");
    }, 1e3);
  }), r.dataset.clickListenerSet = "true";
}, Po = (r) => {
  const e = "nlux-comp-copyButton";
  r instanceof HTMLButtonElement && r.classList.contains(e) ? fs(r) : r.querySelectorAll(`.${e}`).forEach(fs);
}, ya = (r, e) => {
  let t = !1;
  const { onComplete: n } = e || {}, s = [], o = (e != null && e.skipStreamingAnimation ? "timeout" : "animationFrame") == "timeout" ? (d) => setTimeout(d, 0) : (d) => requestAnimationFrame(d), i = document.createElement("div");
  i.classList.add("md-in-progress"), r.append(i);
  const a = () => {
    for (; i.firstChild; ) {
      const d = i.firstChild;
      d instanceof HTMLElement && Po(d), i.before(d);
    }
  }, u = !(e != null && e.skipStreamingAnimation) && (e != null && e.streamingAnimationSpeed) && e.streamingAnimationSpeed >= 0 ? e.streamingAnimationSpeed : e != null && e.skipStreamingAnimation ? 0 : 8, l = { timeSinceLastProcessing: (/* @__PURE__ */ new Date()).getTime(), currentMarkdown: "", previousHtml: void 0 };
  let c = setInterval(() => {
    const d = (/* @__PURE__ */ new Date()).getTime(), p = (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) !== "never";
    if (s.length === 0 && p) {
      const m = typeof (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) == "number" ? e.waitTimeBeforeStreamCompletion : 2e3;
      return void ((t || d - l.timeSinceLastProcessing > m) && (t = !0, c && (clearInterval(c), c = void 0), a(), i.remove(), n == null ? void 0 : n()));
    }
    l.timeSinceLastProcessing = d;
    const h = s.shift();
    h !== void 0 && typeof h == "string" && o(() => {
      const m = l.currentMarkdown + h, g = Io(m, e).trim();
      if (typeof g != "string") return l.currentMarkdown = l.currentMarkdown.slice(0, -h.length), void ee("Markdown parsing failed");
      if (l.previousHtml && g.length > l.previousHtml.length && g.startsWith(l.previousHtml)) {
        a();
        const b = g.slice(l.previousHtml.length).trim();
        i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(b) : b, l.currentMarkdown = h, l.previousHtml = void 0;
      } else i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(g) : g, l.currentMarkdown = m, l.previousHtml = g;
    });
  }, u);
  return { next: (d) => {
    if (t) ee("Stream is already complete. No more chunks can be added");
    else for (const p of d) s.push(p);
  }, complete: () => {
    s.push(`
`), t = !0;
  }, cancel: () => {
    c && (clearInterval(c), c = void 0), t = !0, i.remove();
  }, error: () => {
    t = !0;
  } };
}, Ro = (r, e) => {
  const t = document.createElement("div");
  if (t.classList.add("nlux-comp-avatarContainer"), r) {
    const n = document.createElement("div");
    n.classList.add("nlux-comp-avatarPicture"), n.style.backgroundImage = `url("${encodeURI(r)}")`, t.append(n);
  }
  return t;
}, Fr = "nlux-comp-avatar", Hr = (r) => {
  const e = document.createElement("div");
  return e.classList.add(Fr), r.avatar || r.name ? (r.name && (e.title = r.name), r.avatar && r.avatar instanceof HTMLElement ? (e.append(r.avatar.cloneNode(!0)), e) : (e.append(Ro(r.avatar)), e)) : e;
}, an = { received: "nlux_msg_received", sent: "nlux_msg_sent" }, Oo = (r, e) => {
  Object.keys(an).forEach((t) => {
    r.classList.remove(an[t]);
  }), an[e] && r.classList.add(an[e]);
}, $t = { streaming: "nlux_msg_streaming", complete: "nlux_msg_complete" }, Do = (r, e) => {
  Object.keys($t).forEach((t) => {
    r.classList.remove($t[t]);
  }), $t[e] && r.classList.add($t[e]);
}, jo = (r, e = "text", t) => {
  if (e === "markdown") {
    const n = document.createElement("div"), s = Io(r, t);
    n.innerHTML = t != null && t.htmlSanitizer ? t.htmlSanitizer(s) : s, Po(n);
    const o = document.createDocumentFragment();
    for (; n.firstChild; ) o.appendChild(n.firstChild);
    return o;
  }
  return document.createTextNode(r);
}, Bo = "nlux-comp-message", cn = { received: "nlux-comp-chatItem--received", sent: "nlux-comp-chatItem--sent" }, Mo = (r, e) => {
  Object.keys(cn).forEach((t) => {
    r.classList.remove(cn[t]);
  }), cn[e] && r.classList.add(cn[e]);
}, ln = { bubbles: "nlux-comp-chatItem--bubblesLayout", list: "nlux-comp-chatItem--listLayout" }, Lo = (r, e) => {
  Object.keys(ln).forEach((t) => {
    r.classList.remove(ln[t]);
  }), ln[e] && r.classList.add(ln[e]);
}, zo = "nlux-comp-chatItem-participantInfo", $o = "nlux-comp-chatItem-participantName", xa = (r) => {
  const e = document.createElement("div");
  e.classList.add("nlux-comp-chatItem");
  const t = { direction: r.direction, status: r.status, message: r.message, htmlSanitizer: r.htmlSanitizer };
  let n;
  if (r.avatar !== void 0) {
    const i = { name: r.name, avatar: r.avatar };
    n = Hr(i);
  }
  const s = document.createElement("span");
  s.classList.add($o), s.textContent = r.name;
  {
    const i = document.createElement("div");
    i.classList.add(zo), n !== void 0 && i.append(n), i.append(s), e.append(i);
  }
  Mo(e, r.direction), Lo(e, r.layout);
  const o = ((i) => {
    const a = document.createElement("div");
    a.classList.add(Bo);
    const u = i.status ? i.status : "complete";
    return Do(a, u), Oo(a, i.direction), a;
  })(t);
  return e.append(o), e;
}, gs = (r, e, t) => {
  if (e.name !== t.name && typeof t.avatar == "string") {
    const n = t.name && t.name.length > 0 ? t.name[0].toUpperCase() : "", s = r.querySelector("* > .nlux-comp-avatarContainer > .avtr_ltr");
    s == null || s.replaceChildren(n);
  }
}, Fo = (r, e, t) => {
  e.avatar === t.avatar && e.name === t.name || (e.avatar !== t.avatar && ((n, s, o) => {
    if (s.avatar !== o.avatar) if (typeof o.avatar == "string" && typeof s.avatar == "string") {
      const i = n.querySelector("* > .nlux-comp-avatarContainer > .nlux-comp-avatarPicture");
      i !== null && (i.style.backgroundImage = `url("${encodeURI(o.avatar)}")`);
    } else if (typeof o.avatar == "string") {
      const i = Ro(o.avatar);
      n.replaceChildren(i);
    } else o.avatar ? n.replaceChildren(o.avatar.cloneNode(!0)) : Qt(n);
  })(r, e, t), t.name ? e.name !== t.name && (r.title = t.name, gs(r, e, t)) : (r.title = "", gs(r, e, t)));
}, ba = (r, e, t) => {
  if (e.message === t.message && e.status === t.status && e.direction === t.direction || !t || !t.hasOwnProperty("message") && !t.hasOwnProperty("status") && !t.hasOwnProperty("direction")) return;
  e.direction !== t.direction && Oo(r, t.direction);
  const n = t.status;
  if (e.status !== n) return Do(r, t.status), void ((s, o, i) => {
    const a = i.status;
    if (a !== "streaming" && a === "complete") {
      const u = i.message ? i.message : "", l = document.createTextNode(u);
      s.classList.add($t[a]), Qt(s), s.append(l);
    }
  })(r, 0, t);
  n === "complete" && (e.message === t.message && e.format === t.format || ((s, o, i) => {
    o.message === i.message && o.format === i.format || (Qt(s), s.append(jo(i.message ?? "", i.format, { htmlSanitizer: i.htmlSanitizer })));
  })(r, e, t));
}, vs = "dom/getElement";
var wa = Object.defineProperty, ka = Object.getOwnPropertyDescriptor, ys = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? ka(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && wa(e, t, o), o;
};
let wn = class extends We {
  constructor(e, t) {
    super(e, t), this.serverResponse = [], this.stringContent = "", t.domProps.message !== void 0 && (this.stringContent = t.domProps.message);
  }
  addChunk(e, t) {
    this.throwIfDestroyed(), this.executeDomAction("processStreamedChunk", e), typeof e == "string" && (this.stringContent += e), this.serverResponse.push(t);
  }
  commitChunks() {
    this.throwIfDestroyed(), this.executeDomAction("commitStreamedChunks");
  }
  getChatSegmentItem() {
    return this.getProp("domProps").direction === "received" ? { uid: this.props.uid, participantRole: "assistant", content: this.getItemContent(), serverResponse: this.serverResponse, status: "complete", dataTransferMode: "batch", time: /* @__PURE__ */ new Date() } : { uid: this.props.uid, participantRole: "user", content: this.getItemContent(), status: "complete", time: /* @__PURE__ */ new Date() };
  }
  getItemContent() {
    return this.aiMessageContent ?? this.stringContent;
  }
  updateDomProps(e) {
    const t = this.getProp("domProps"), n = { ...t, ...e };
    this.setProp("domProps", n), this.executeDomAction("updateDomProps", t, n);
  }
  updateMarkdownStreamRenderer(e, t) {
    if (this.setProp(e, t), e === "syntaxHighlighter") {
      const n = t;
      this.executeDomAction("updateMarkdownStreamRenderer", { syntaxHighlighter: n });
    }
    if (e === "htmlSanitizer") {
      const n = t;
      this.executeDomAction("updateMarkdownStreamRenderer", { htmlSanitizer: n });
    }
  }
  onMarkdownStreamComplete(e) {
    this.context.emit("messageRendered", { uid: this.props.uid });
  }
};
ys([Xe("markdown-stream-complete")], wn.prototype, "onMarkdownStreamComplete", 1), wn = ys([ot("chatItem", ({ props: r, appendToRoot: e, compEvent: t }) => {
  const n = xa({ ...r.domProps, htmlSanitizer: r.htmlSanitizer, message: void 0 }), s = ((c, d) => {
    const p = c.querySelector(d);
    if (!p) throw new Cn({ source: vs, message: `Could not find element with query "${d}". Make sure the query provided matches an element that exists in the root element.` });
    if (!(p instanceof HTMLElement)) throw new Cn({ source: vs, message: `Element with query "${d}" is not a valid HTMLElement.` });
    return p;
  })(n, ".nlux-comp-message");
  if (!s) throw new Error("Message container not found");
  const o = document.createElement("div");
  o.classList.add("nlux-markdownStream-root");
  const i = document.createElement("div");
  if (i.classList.add("nlux-markdown-container"), i.setAttribute("nlux-message-id", r.uid), o.append(i), s.append(o), r.domProps.message) {
    const c = jo(r.domProps.message ?? "", "markdown", { markdownLinkTarget: r.markdownLinkTarget, syntaxHighlighter: r.syntaxHighlighter, htmlSanitizer: r.htmlSanitizer });
    i.append(c);
  }
  let a;
  e(n);
  let u = { ...r };
  const l = (c) => ((d, p) => {
    const h = ya(d, { syntaxHighlighter: p == null ? void 0 : p.syntaxHighlighter, htmlSanitizer: p == null ? void 0 : p.htmlSanitizer, markdownLinkTarget: p == null ? void 0 : p.markdownLinkTarget, showCodeBlockCopyButton: p == null ? void 0 : p.showCodeBlockCopyButton, skipStreamingAnimation: p == null ? void 0 : p.skipStreamingAnimation, streamingAnimationSpeed: p == null ? void 0 : p.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: p == null ? void 0 : p.waitTimeBeforeStreamCompletion, onComplete: p == null ? void 0 : p.onComplete });
    return { next(m) {
      h.next(m);
    }, complete() {
      h.complete();
    } };
  })(i, { syntaxHighlighter: c.syntaxHighlighter, htmlSanitizer: c.htmlSanitizer, markdownLinkTarget: c.markdownLinkTarget, showCodeBlockCopyButton: c.showCodeBlockCopyButton, skipStreamingAnimation: c.skipStreamingAnimation, streamingAnimationSpeed: c.streamingAnimationSpeed, onComplete: () => t("markdown-stream-complete") });
  return { elements: { chatItemContainer: n }, actions: { focus: () => {
    n.focus();
  }, processStreamedChunk: (c) => {
    a || (a = l(u)), a.next(c);
  }, commitStreamedChunks: () => {
    a && a.complete();
  }, updateMarkdownStreamRenderer: (c) => {
    u = { ...u, ...c }, l(u);
  }, updateDomProps: (c, d) => {
    ((p, h, m) => {
      if ((h.direction !== m.direction || h.layout !== m.layout || h.status !== m.status || h.message !== m.message || h.name !== m.name || h.avatar !== m.avatar) && m && (m.hasOwnProperty("direction") || m.hasOwnProperty("layout") || m.hasOwnProperty("status") || m.hasOwnProperty("message") || m.hasOwnProperty("loader") || m.hasOwnProperty("name") || m.hasOwnProperty("avatar"))) {
        if (h.direction !== m.direction && Mo(p, m.direction), h.layout !== m.layout && Lo(p, m.layout), h.direction !== m.direction || h.status !== m.status || h.message !== m.message) {
          const g = p.querySelector(`.${Bo}`);
          g && ba(g, { direction: h.direction, status: h.status, message: h.message, htmlSanitizer: h.htmlSanitizer }, { direction: m.direction, status: m.status, message: m.message, htmlSanitizer: h.htmlSanitizer });
        }
        if (h.name !== m.name || h.avatar !== m.avatar) {
          const g = p.querySelector(`.${Fr}`);
          if (!m.name && !m.avatar) return void (g == null ? void 0 : g.remove());
          if (g) Fo(g, { name: h.name, avatar: h.avatar }, { name: m.name, avatar: m.avatar });
          else if (m.name !== void 0 || m.avatar !== void 0) {
            const b = { name: m.name, avatar: m.avatar }, k = Hr(b), y = p.querySelector(`.${zo}`);
            y && y.prepend(k);
          }
        }
        if (h.name !== m.name) {
          const g = p.querySelector(`.${$o}`);
          g && (g.textContent = m.name || "");
        }
      }
    })(n, c, d);
  } }, onDestroy: () => {
    n.remove(), a = void 0;
  } };
}, ({ propName: r, newValue: e, dom: t }) => {
  var n;
  switch (r) {
    case "markdownLinkTarget":
    case "skipStreamingAnimation":
    case "syntaxHighlighter":
    case "htmlSanitizer":
    case "showCodeBlockCopyButton":
    case "streamingAnimationSpeed":
      (n = t.actions) == null || n.updateMarkdownStreamRenderer({ [r]: e });
  }
})], wn);
const Ca = (r, e) => {
  let t, n = e, s = r, o = !0;
  const i = ((g, b) => {
    let k = !1;
    if (typeof g != "function") throw new st({ source: "x/throttle", message: "Callback must be a function" });
    return (...y) => {
      k || (g.apply(void 0, y), k = !0, setTimeout(function() {
        k = !1;
      }, b));
    };
  })(/* @__PURE__ */ ((g) => {
    let b, k;
    return (y) => {
      const x = y.target;
      if (!(x instanceof HTMLElement)) return;
      const { scrollTop: A, clientHeight: w, scrollHeight: R } = x, M = R - 30, F = Math.ceil(A + w) >= M, T = b === void 0 || k === void 0 ? void 0 : A > b && k === R ? "down" : A < b && k === R ? "up" : void 0;
      k = R, b = A, g({ scrolledToBottom: F, scrollDirection: T });
    };
  })(({ scrolledToBottom: g, scrollDirection: b }) => {
    o ? b === "up" && (o = !1) : b === "down" && g && (o = !0);
  }), 50), a = (g) => {
    g.addEventListener("scroll", i);
  }, u = (g) => {
    g == null || g.removeEventListener("scroll", i);
  }, l = (g) => {
    (t == null ? void 0 : t.uid) === g && (c == null || c.disconnect(), d == null || d.disconnect(), t = void 0, c = void 0, d = void 0);
  };
  let c, d;
  const p = () => {
    s == null || s.scrollTo({ top: 5e4, behavior: "instant" });
  }, h = () => {
    s && n && o && p();
  }, m = () => {
    h();
  };
  return a(s), { updateConversationContainer: (g) => {
    u(s), a(g), s = g;
  }, updateProps: ({ autoScroll: g }) => {
    n = g;
  }, handleNewChatSegmentAdded: (g, b) => {
    t && (c == null || c.disconnect(), d == null || d.disconnect()), t = { uid: g, container: b }, c = new ResizeObserver(h), c.observe(b), d = new MutationObserver(m), d.observe(b, { childList: !0, subtree: !0, characterData: !0 }), n && p();
  }, handleChatSegmentRemoved: (g) => l(g), handleChatSegmentComplete: (g) => l(g), destroy: () => {
    t && (l(t.uid), t = void 0), u(s), s = void 0;
  } };
}, wt = (r) => {
  var n;
  const e = typeof r == "function" ? r.__compId : void 0;
  if (!e) throw new Error("Invalid compClass! Component should be registered before using");
  const t = (n = xo.retrieve(e)) == null ? void 0 : n.model;
  if (!t || typeof t != "function") throw new Error(`Component "${e}" is not registered`);
  return { withContext: (s) => ({ create: () => new t(s, {}), withProps: (o) => ({ create: () => new t(s, o) }) }) };
}, Sa = (r) => {
  const e = ["adapter", "events"], t = Object.keys(r).filter((s) => !e.includes(s)), n = {};
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    n[o] = r[o];
  }
  return n;
}, Ho = () => {
  const r = document.createElement("div");
  r.classList.add("nlux-comp-messageLoader");
  const e = document.createElement("span");
  e.classList.add("spinning-loader");
  const t = document.createElement("div");
  return t.classList.add("nlux-comp-loaderContainer"), t.appendChild(e), r.appendChild(t), r;
}, xs = (r) => {
  const e = "nlux-chatSegment";
  return r === "complete" ? `${e} nlux-chatSegment--complete` : r === "error" ? `${e} nlux-chatSegment--error` : `${e} nlux-chatSegment--active`;
}, un = (r, e) => {
  var t, n;
  return r === "assistant" ? ((t = e == null ? void 0 : e.assistant) == null ? void 0 : t.name) ?? "Assistant" : r === "user" ? ((n = e == null ? void 0 : e.user) == null ? void 0 : n.name) ?? "User" : "";
}, Aa = "bubbles";
var Ea = Object.defineProperty, Ta = Object.getOwnPropertyDescriptor, dn = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? Ta(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && Ea(e, t, o), o;
};
let yt = class extends We {
  constructor(e, t) {
    super(e, t), this.chatItemCompIdsByIndex = [], this.chatItemComponentsById = /* @__PURE__ */ new Map();
  }
  addChatItem(e) {
    var s, o;
    if (this.throwIfDestroyed(), this.chatItemComponentsById.has(e.uid)) throw new Error(`CompChatSegment: chat item with id "${e.uid}" already exists`);
    const t = ((i, a, u, l) => {
      const c = a ?? Aa;
      if (i.participantRole === "assistant") {
        const p = i.status === "complete" ? "complete" : "streaming";
        return i.dataTransferMode === "stream" ? { status: p, layout: c, direction: "received", name: un("assistant", { assistant: l }), avatar: l == null ? void 0 : l.avatar } : i.status === "complete" ? { status: p, layout: c, direction: "received", name: un("assistant", { assistant: l }), avatar: l == null ? void 0 : l.avatar, message: (d = i.content, typeof d == "string" ? d : typeof d == "object" ? `${d}` : d == null ? "" : typeof d.toString == "function" ? d.toString() : JSON.stringify(d)) } : { status: p, layout: c, direction: "received", name: un("assistant", { assistant: l }), avatar: l == null ? void 0 : l.avatar };
      }
      var d;
      return { status: "complete", layout: c, direction: "sent", message: i.content, name: un("user", { user: u }), avatar: u == null ? void 0 : u.avatar };
    })(e, this.getProp("conversationLayout"), this.getProp("userPersona"), this.getProp("assistantPersona"));
    if (!t) throw new Error(`CompChatSegment: chat item with id "${e.uid}" has invalid props`);
    const n = wt(wn).withContext(this.context).withProps({ uid: e.uid, domProps: t, markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed") }).create();
    this.chatItemComponentsById.set(e.uid, n), this.chatItemCompIdsByIndex.push(e.uid), this.rendered && ((o = (s = this.renderedDom) == null ? void 0 : s.elements) != null && o.chatSegmentContainer ? n.render(this.renderedDom.elements.chatSegmentContainer, this.renderedDom.elements.loaderContainer) : ir("CompChatSegment: chatSegmentContainer is not available"));
  }
  addChunk(e, t, n) {
    if (this.destroyed) return;
    const s = this.chatItemComponentsById.get(e);
    if (!s) throw new Error(`CompChatSegment: chat item with id "${e}" not found`);
    s.addChunk(t, n);
  }
  complete() {
    this.throwIfDestroyed(), this.chatItemComponentsById.forEach((e) => e.commitChunks()), this.setProp("status", "complete");
  }
  destroy() {
    this.chatItemComponentsById.forEach((e) => e.destroy()), this.chatItemComponentsById.clear(), this.chatItemCompIdsByIndex = [], super.destroy();
  }
  getChatItems() {
    return this.chatItemCompIdsByIndex.map((e) => this.chatItemComponentsById.get(e)).filter((e) => !!e);
  }
  setAssistantPersona(e) {
    this.setProp("assistantPersona", e);
    const t = { name: e == null ? void 0 : e.name, avatar: e == null ? void 0 : e.avatar };
    this.chatItemComponentsById.forEach((n) => {
      n.getChatSegmentItem().participantRole === "assistant" && n.updateDomProps(t);
    });
  }
  setLayout(e) {
    this.setProp("conversationLayout", e), this.chatItemComponentsById.forEach((t) => {
      t.updateDomProps({ layout: e });
    });
  }
  setUserPersona(e) {
    this.setProp("userPersona", e);
    const t = { name: e == null ? void 0 : e.name, avatar: e == null ? void 0 : e.avatar };
    this.chatItemComponentsById.forEach((n) => {
      n.getChatSegmentItem().participantRole === "user" && n.updateDomProps(t);
    });
  }
  updateMarkdownStreamRenderer(e, t) {
    this.setProp(e, t);
  }
  onLoaderShown(e) {
    var t;
    (t = this.renderedDom) != null && t.elements && (this.renderedDom.elements.loaderContainer = e);
  }
  setProp(e, t) {
    super.setProp(e, t), e !== "markdownLinkTarget" && e !== "syntaxHighlighter" && e !== "htmlSanitizer" && e !== "skipStreamingAnimation" && e !== "streamingAnimationSpeed" || this.chatItemComponentsById.forEach((n) => {
      n.updateMarkdownStreamRenderer(e, t);
    });
  }
  onChatSegmentReady() {
    Ve(() => {
      var t, n, s, o;
      if (!((n = (t = this.renderedDom) == null ? void 0 : t.elements) != null && n.chatSegmentContainer)) return;
      const e = (o = (s = this.renderedDom) == null ? void 0 : s.elements) == null ? void 0 : o.chatSegmentContainer;
      this.chatItemComponentsById.forEach((i) => {
        i.rendered || i.render(e);
      });
    });
  }
  onLoaderHidden() {
    var e;
    (e = this.renderedDom) != null && e.elements && (this.renderedDom.elements.loaderContainer = void 0);
  }
};
dn([Xe("loader-shown")], yt.prototype, "onLoaderShown", 1), dn([Xe("chat-segment-ready")], yt.prototype, "onChatSegmentReady", 1), dn([Xe("loader-hidden")], yt.prototype, "onLoaderHidden", 1), yt = dn([ot("chatSegment", ({ props: r, compEvent: e, appendToRoot: t }) => {
  let n;
  const s = document.createElement("div");
  s.className = xs(r.status);
  const o = () => {
    if (!n) {
      n = document.createElement("div"), n.className = "nlux-chatSegment-loader-container";
      const i = Ho();
      n.appendChild(i), s.appendChild(n), e("loader-shown")(n);
    }
  };
  return r.status === "active" && o(), t(s), e("chat-segment-ready")(), { elements: { chatSegmentContainer: s, loaderContainer: n }, actions: { showLoader: o, hideLoader: () => {
    n && (n.remove(), n = void 0, e("loader-hidden")());
  } }, onDestroy: () => {
    s.remove();
  } };
}, ({ propName: r, newValue: e, dom: t }) => {
  var n, s, o;
  if (r === "status") {
    const i = (n = t.elements) == null ? void 0 : n.chatSegmentContainer;
    if (!i) return;
    const a = e;
    i.className = xs(a), a === "active" ? (s = t.actions) == null || s.showLoader() : (o = t.actions) == null || o.hideLoader();
  }
})], yt);
let pr = class extends We {
  constructor(e, t) {
    super(e, t), this.chatSegmentCompIdsByIndex = [], this.chatSegmentComponentsById = /* @__PURE__ */ new Map(), t.messages && t.messages.length > 0 && this.addChatSegment("complete", t.messages);
  }
  addChatItem(e, t) {
    const n = this.chatSegmentComponentsById.get(e);
    if (!n) throw new Error(`CompConversation: chat segment with id "${e}" not found`);
    n.destroyed ? ir(`CompConversation: chat segment with id "${e}" is destroyed and cannot be used`) : n.addChatItem(t);
  }
  addChatSegment(e = "active", t) {
    this.throwIfDestroyed();
    const n = Ze(), s = wt(yt).withContext(this.context).withProps({ uid: n, status: e, conversationLayout: this.getProp("conversationLayout"), userPersona: this.getProp("userPersona"), assistantPersona: this.getProp("assistantPersona"), markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed") }).create();
    if (t) for (const i of t) i.role === "assistant" ? s.addChatItem({ uid: Ze(), participantRole: "assistant", time: /* @__PURE__ */ new Date(), dataTransferMode: "batch", status: "complete", content: i.message, serverResponse: i.serverResponse, contentType: "text" }) : i.role === "user" && s.addChatItem({ uid: Ze(), participantRole: "user", time: /* @__PURE__ */ new Date(), status: "complete", content: i.message, contentType: "text" });
    this.chatSegmentComponentsById.set(n, s), this.chatSegmentCompIdsByIndex.push(n);
    const o = s.id;
    return this.addSubComponent(o, s, "segmentsContainer"), this.notifyAboutSegmentCountChange(this.chatSegmentCompIdsByIndex.length), n;
  }
  addChunk(e, t, n, s) {
    const o = this.chatSegmentComponentsById.get(e);
    if (!o) throw new Error(`CompConversation: chat segment with id "${e}" not found`);
    o.addChunk(t, n, s);
  }
  completeChatSegment(e) {
    const t = this.chatSegmentComponentsById.get(e);
    if (!t) throw new Error(`CompConversation: chat segment with id "${e}" not found`);
    t.destroyed || t.complete();
  }
  getChatSegmentContainer(e) {
    const t = this.chatSegmentComponentsById.get(e);
    if ((t == null ? void 0 : t.root) instanceof HTMLElement) return t.root;
  }
  getConversationContentForAdapter(e = "max") {
    if (typeof e == "number" && e < 0) return void ir(`Invalid value provided for 'historyPayloadSize' : "${e}"! Value must be a positive integer or 'max'.`);
    if (e === 0) return;
    const t = ((n) => {
      const s = [];
      return n.forEach((o) => {
        o.items.forEach((i) => {
          if (i.status === "complete") {
            if (i.participantRole === "assistant") s.push({ role: "assistant", message: i.content });
            else if (i.participantRole === "user") return s.push({ role: "user", message: i.content });
          }
        });
      }), s;
    })(this.chatSegmentCompIdsByIndex.map((n) => this.chatSegmentComponentsById.get(n)).filter((n) => n !== void 0).map((n) => ({ uid: n.id, status: "complete", items: n.getChatItems().map((s) => s.getChatSegmentItem()) })));
    return e === "max" ? t : t.slice(-e);
  }
  removeChatSegment(e) {
    const t = this.chatSegmentComponentsById.get(e);
    if (!t) return;
    const n = t.id;
    this.subComponents.has(n) && this.removeSubComponent(n), this.chatSegmentComponentsById.delete(t.id);
    const s = this.chatSegmentCompIdsByIndex.indexOf(e);
    s >= 0 && this.chatSegmentCompIdsByIndex.splice(s, 1), this.notifyAboutSegmentCountChange(this.chatSegmentCompIdsByIndex.length);
  }
  setAssistantPersona(e) {
    this.setProp("assistantPersona", e), this.chatSegmentComponentsById.forEach((t) => {
      t.setAssistantPersona(e);
    });
  }
  setConversationLayout(e) {
    this.setProp("conversationLayout", e), this.chatSegmentComponentsById.forEach((t) => {
      t.setLayout(e);
    });
  }
  setUserPersona(e) {
    this.setProp("userPersona", e), this.chatSegmentComponentsById.forEach((t) => {
      t.setUserPersona(e);
    });
  }
  updateMarkdownStreamRenderer(e, t) {
    this.setProp(e, t);
  }
  setProp(e, t) {
    if (super.setProp(e, t), e === "markdownLinkTarget" || e === "syntaxHighlighter" || e === "htmlSanitizer" || e === "skipStreamingAnimation" || e === "streamingAnimationSpeed" || e === "showCodeBlockCopyButton") {
      const n = e, s = t;
      this.chatSegmentComponentsById.forEach((o) => {
        o.updateMarkdownStreamRenderer(n, s);
      });
    }
  }
  notifyAboutSegmentCountChange(e) {
    const t = this.getProp("onSegmentCountChange");
    t && t(e);
  }
};
pr = ((r, e, t, n) => {
  for (var s, o = e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = s(o) || o);
  return o;
})([ot("conversation", ({ appendToRoot: r }) => {
  const e = document.createElement("div");
  return e.classList.add("nlux-chatSegments-container"), r(e), { elements: { segmentsContainer: e }, actions: {} };
}, () => {
})], pr);
const qn = { typing: "nlux-composer--typing", "submitting-prompt": "nlux-composer--submitting", "submitting-conversation-starter": "nlux-composer--submitting", waiting: "nlux-composer--waiting" }, No = (r, e) => {
  Object.keys(qn).forEach((t) => {
    r.classList.remove(qn[t]);
  }), r.classList.add(qn[e]);
}, Ia = (r) => {
  const e = document.createElement("div");
  e.classList.add("nlux-comp-composer");
  const t = document.createElement("textarea");
  t.placeholder = r.placeholder ?? "", t.value = r.message ?? "", r.autoFocus && (t.autofocus = !0);
  const n = document.createElement("button");
  return n.append((() => {
    const s = document.createElement("div");
    s.classList.add("nlux-comp-sendIcon");
    const o = document.createElement("div");
    return o.classList.add("nlux-comp-sendIcon-container"), s.appendChild(o), s;
  })()), n.append(Ho()), e.append(t), e.append(n), No(e, r.status), r.status !== "submitting-conversation-starter" && r.status !== "submitting-prompt" || (t.disabled = !0, n.disabled = !0), r.status === "waiting" && (n.disabled = !0), r.status === "typing" && (n.disabled = r.disableSubmitButton ?? t.value === ""), e;
}, Tn = (r, e) => {
  let t = !1;
  const n = e ? r.querySelector(e) : r, s = n instanceof HTMLElement ? n : void 0;
  if (!s) throw new Cn({ source: "dom/listenTo", message: `Could not find element with query "${e}". Make sure the query provided matches an element that exists in the root element.` });
  const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = () => {
    s && (o.forEach((l, c) => {
      s.removeEventListener(c, l);
    }), o.clear(), i.clear());
  }, u = { on: (l, c) => {
    if (!c || !s) return u;
    if (!o.has(l)) {
      const d = (p) => {
        var h;
        (h = i.get(l)) == null || h.forEach((m) => m(p));
      };
      o.set(l, d), s.addEventListener(l, d);
    }
    return i.has(l) || i.set(l, /* @__PURE__ */ new Set()), i.get(l).add(c), u;
  }, get: () => {
    if (t) throw new Error("listenTo().get() can only be used once!");
    return t = !0, [s, a];
  } };
  return u;
};
var Pa = Object.defineProperty, Ra = Object.getOwnPropertyDescriptor, Mt = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? Ra(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && Pa(e, t, o), o;
};
let ut = class extends We {
  constructor(e, { props: t, eventListeners: n }) {
    super(e, t), this.userEventListeners = n;
  }
  focusTextInput() {
    this.executeDomAction("focusTextInput");
  }
  handleCommandEnterKeyPressed(e) {
    var n;
    ((n = this.getProp("domCompProps")) == null ? void 0 : n.submitShortcut) === "CommandEnter" && (this.handleSendButtonClick(), e == null || e.preventDefault());
  }
  handleEnterKeyPressed(e) {
    var n;
    const t = (n = this.getProp("domCompProps")) == null ? void 0 : n.submitShortcut;
    t && (t !== "Enter" || e != null && e.isComposing) || (this.handleSendButtonClick(), e == null || e.preventDefault());
  }
  handleSendButtonClick() {
    var s;
    const e = this.getProp("domCompProps");
    if (e != null && e.disableSubmitButton || !(e == null ? void 0 : e.message)) return;
    const n = (s = this.userEventListeners) == null ? void 0 : s.onSubmit;
    n && n();
  }
  handleTextChange(e) {
    var s;
    const t = (s = this.userEventListeners) == null ? void 0 : s.onTextUpdated;
    t && t(e);
    const n = this.getProp("domCompProps");
    this.setDomProps({ ...n, message: e });
  }
  handleTextInputUpdated(e) {
    const t = e.target;
    t instanceof HTMLTextAreaElement && this.handleTextChange(t.value);
  }
  setDomProps(e) {
    this.setProp("domCompProps", e);
  }
};
Mt([Xe("command-enter-key-pressed")], ut.prototype, "handleCommandEnterKeyPressed", 1), Mt([Xe("enter-key-pressed")], ut.prototype, "handleEnterKeyPressed", 1), Mt([Xe("send-message-clicked")], ut.prototype, "handleSendButtonClick", 1), Mt([Xe("text-updated")], ut.prototype, "handleTextInputUpdated", 1), ut = Mt([ot("composer", ({ appendToRoot: r, props: e, compEvent: t }) => {
  const n = Ia(e.domCompProps);
  r(n);
  const [s, o] = Tn(n, ":scope > textarea").on("input", t("text-updated")).on("keydown", (c) => {
    const d = c.key === "Enter" && !c.isComposing, p = c.altKey || c.ctrlKey || c.metaKey || c.shiftKey;
    if (d && !p) return void t("enter-key-pressed")(c);
    const h = c.getModifierState("Meta") && c.key === "Enter", m = c.getModifierState("Control") && c.key === "Enter";
    (h || m) && t("command-enter-key-pressed")(c);
  }).get(), [i, a] = Tn(n, ":scope > button").on("click", t("send-message-clicked")).get();
  if (!(i instanceof HTMLButtonElement)) throw new Error("Expected a button element");
  if (!(s instanceof HTMLTextAreaElement)) throw new Cn({ source: (u = "composer", l = "render", `#${u}/${l}`), message: "Expected a textarea element" });
  var u, l;
  return { elements: { root: n, textInput: s, sendButton: i }, actions: { focusTextInput: () => Ve(() => {
    s.focus(), s.setSelectionRange(s.value.length, s.value.length);
  }) }, onDestroy: () => {
    o(), a();
  } };
}, ({ propName: r, currentValue: e, newValue: t, dom: n }) => {
  var s;
  r === "domCompProps" && ((s = n.elements) != null && s.root) && ((o, i, a) => {
    if (i.status === a.status && i.message === a.message && i.placeholder === a.placeholder && i.autoFocus === a.autoFocus && i.disableSubmitButton === a.disableSubmitButton) return;
    if (i.status !== a.status) return No(o, a.status), void ((l, c, d) => {
      if (c.status === d.status) return;
      const p = l.querySelector("* > textarea");
      d.status !== "typing" && d.status !== "waiting" || !p.disabled ? d.status !== "submitting-prompt" && d.status !== "submitting-conversation-starter" || p.disabled || (p.disabled = !0) : p.disabled = !1;
      const h = l.querySelector("* > button");
      if (d.status === "typing") {
        const m = (c.disableSubmitButton !== d.disableSubmitButton ? d.disableSubmitButton : c.disableSubmitButton) ?? p.value === "";
        h.disabled !== m && (h.disabled = m);
      } else d.status !== "waiting" && d.status !== "submitting-prompt" && d.status !== "submitting-conversation-starter" || h.disabled || (h.disabled = !0);
      c.placeholder !== d.placeholder && (p.placeholder = d.placeholder ?? ""), c.message !== d.message && (p.value = d.message ?? ""), c.autoFocus !== d.autoFocus && (p.autofocus = d.autoFocus ?? !1);
    })(o, i, a);
    const u = o.querySelector("* > textarea");
    if (i.placeholder !== a.placeholder && (u.placeholder = a.placeholder ?? ""), i.autoFocus !== a.autoFocus && (u.autofocus = a.autoFocus ?? !1), i.message !== a.message && (u.value = a.message ?? ""), i.status === "typing") {
      const l = o.querySelector("* > button"), c = (i.disableSubmitButton !== a.disableSubmitButton ? a.disableSubmitButton : i.disableSubmitButton) ?? u.value === "";
      l.disabled !== c && (l.disabled = c);
    }
  })(n.elements.root, e, t);
})], ut);
const hr = (r) => {
  if (typeof r != "object" || r === null) return !1;
  const e = r;
  return (typeof e.streamText == "function" || typeof e.batchText == "function") && ["stream", "batch"].includes(e.dataTransferMode) && typeof e.id == "string" && typeof e.info == "object" && e.info !== null && typeof e.preProcessAiBatchedMessage == "function" && typeof e.preProcessAiStreamedChunk == "function";
}, Be = (r, e = 1) => {
  setTimeout(() => {
    r();
  }, e);
}, Oa = (r, e, t, n, s, o, i, a, u) => new Promise((l) => {
  const c = Ze(), d = [], p = [];
  let h = !1, m = !1, g = !1;
  const b = hr(t), k = { next: (y) => {
    if (m || g) return;
    let x, A;
    if (b) {
      const w = y, R = t.preProcessAiStreamedChunk(w, n);
      R != null && (x = R, A = w, d.push(x), p.push(A));
    } else x = y, d.push(x);
    x != null ? (h || h || (h = !0, Be(() => {
      s.forEach((w) => {
        w({ uid: c, status: "streaming", time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" });
      });
    })), Be(() => {
      i.forEach((w) => {
        w({ chunk: x, messageId: c, serverResponse: A });
      });
    })) : ee("Adapter returned an undefined or null value from streamText. This chunk will be ignored.");
  }, complete: () => {
    m || g || (g = !0, Be(() => {
      const y = { uid: c, status: "complete", content: d, contentType: "text", serverResponse: void 0, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" };
      o.forEach((x) => {
        x(y);
      }), l();
    }), Be(() => {
      const y = { uid: r, status: "complete", items: [e, { uid: c, status: "complete", contentType: "text", content: d, serverResponse: p, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" }] };
      a.forEach((x) => {
        x(y);
      });
    }));
  }, error: (y) => {
    m || g || (m = !0, Be(() => {
      u.forEach((x) => {
        x("failed-to-stream-content", y);
      }), l();
    }));
  } };
  t.streamText(e.content, k, n);
}), Da = (r, e, t) => {
  if (!r) return (() => {
    const y = /* @__PURE__ */ new Set(), x = Ze(), A = { uid: x, status: "complete", items: [] };
    return Be(() => {
      y.forEach((w) => {
        w(A);
      }), y.clear();
    }), { segment: A, observable: { on: (w, R) => {
      w === "complete" && y.add(R);
    }, removeListener: (w, R) => {
      y.delete(R);
    }, destroy: () => {
      y.clear();
    }, get segmentId() {
      return x;
    } }, dataTransferMode: "batch" };
  })();
  const n = e;
  if (n.streamText === void 0 && n.batchText === void 0 && n.streamServerComponent === void 0) return ((y) => {
    const x = /* @__PURE__ */ new Set(), A = Ze(), w = { uid: A, status: "error", items: [] };
    return Be(() => {
      x.forEach((R) => R(y)), x.clear();
    }), { segment: w, dataTransferMode: "stream", observable: { on: (R, M) => {
      R === "error" && x.add(M);
    }, removeListener: (R, M) => {
      x.delete(M);
    }, destroy: () => {
      x.clear();
    }, get segmentId() {
      return A;
    } } };
  })("no-data-transfer-mode-supported");
  const s = Ze(), o = ((y) => ({ uid: Ze(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: y, contentType: "text" }))(r);
  let i, a, u, l, c, d, p = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set();
  Be(() => {
    p != null && p.size && (p.forEach((y) => {
      y(o);
    }), p.clear(), p = void 0);
  });
  const g = ((y) => {
    const x = [], A = y, w = y;
    (A == null ? void 0 : A.streamText) === void 0 && (w == null ? void 0 : w.streamServerComponent) === void 0 || x.push("stream"), (A == null ? void 0 : A.batchText) !== void 0 && x.push("batch");
    const R = hr(y) ? y : void 0, M = (R == null ? void 0 : R.dataTransferMode) ?? void 0, F = x.length === 1 ? x[0] : "stream";
    return M ?? F;
  })(e);
  ((y) => "streamServerComponent" in y ? "server-component" : "text")(e) === "server-component" ? (u = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), ((y, x, A, w, R, M, F, T) => new Promise((I, _) => {
    try {
      const D = x.content, z = Ze(), B = "assistant", X = "streaming", re = /* @__PURE__ */ new Date(), oe = "stream";
      let le, N;
      const S = () => {
        Be(() => {
          M.forEach((q) => {
            le && N && q({ ...le, content: N, status: "complete" });
          });
        }, 20);
        const H = { uid: y, status: "complete", items: [x, le] };
        Be(() => {
          F.forEach((q) => {
            q(H);
          }), I();
        }, 20);
      }, O = () => {
        T.forEach((H) => {
          H("failed-to-stream-server-component", new Error("Failed to load content"));
        });
      };
      N = A.streamServerComponent(D, w, { onServerComponentReceived: S, onError: O }), le = { uid: z, content: N, contentType: "server-component", participantRole: B, status: X, time: re, dataTransferMode: oe }, Be(() => {
        R.forEach((H) => {
          H(le);
        });
      }, 10);
    } catch (D) {
      ee(D);
      const z = D instanceof Error ? D : typeof D == "string" ? new Error(D) : new Error("Unknown error");
      Be(() => {
        T.forEach((B) => B("failed-to-load-content", z));
      });
    }
  }))(s, o, e, t, a, u, h, m).finally(() => {
    Be(() => k());
  })) : g === "batch" ? (i = /* @__PURE__ */ new Set(), (async (y, x, A, w, R, M, F) => {
    try {
      const T = x.content, I = hr(A) ? A : void 0, _ = I !== void 0, D = Ze(), z = "assistant", B = "complete", X = /* @__PURE__ */ new Date(), re = "batch";
      let oe;
      if (_) {
        const S = await I.batchText(T, w), O = I.preProcessAiBatchedMessage(S, w);
        O != null && (oe = { uid: D, content: O, contentType: "text", serverResponse: S, participantRole: z, status: B, time: X, dataTransferMode: re });
      } else oe = { uid: D, content: await A.batchText(T, w), contentType: "text", serverResponse: void 0, participantRole: z, status: B, time: X, dataTransferMode: re };
      if (!oe) throw new Error("Response from adapter was undefined or cannot be processed");
      const le = oe;
      Be(() => {
        R.forEach((S) => {
          S(le);
        });
      });
      const N = { uid: y, status: "complete", items: [x, oe] };
      Be(() => {
        M.forEach((S) => {
          S(N);
        });
      });
    } catch (T) {
      ee(T);
      const I = T instanceof Error ? T : typeof T == "string" ? new Error(T) : new Error("Unknown error");
      Be(() => {
        F.forEach((_) => _("failed-to-load-content", I));
      });
    }
  })(s, o, e, t, i, h, m).finally(() => {
    Be(() => k());
  })) : (l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), Oa(s, o, e, t, l, c, d, h, m).finally(() => {
    Be(() => k());
  }));
  const k = () => {
    p == null || p.clear(), p = void 0, i == null || i.clear(), i = void 0, a == null || a.clear(), a = void 0, u == null || u.clear(), u = void 0, l == null || l.clear(), l = void 0, c == null || c.clear(), c = void 0, d == null || d.clear(), d = void 0, h == null || h.clear(), h = void 0, m == null || m.clear(), m = void 0;
  };
  return { segment: { status: "active", uid: s, items: [] }, dataTransferMode: g, observable: { get segmentId() {
    return s;
  }, on: (y, x) => {
    y === "userMessageReceived" && p ? p.add(x) : y === "aiMessageReceived" && i ? i.add(x) : y === "aiServerComponentStreamStarted" && a ? a.add(x) : y === "aiServerComponentStreamed" && u ? u.add(x) : y === "aiMessageStreamStarted" && l ? l.add(x) : y === "aiMessageStreamed" && c ? c.add(x) : y === "aiChunkReceived" && d ? d.add(x) : y === "complete" && h ? h.add(x) : y === "error" && m && m.add(x);
  }, removeListener: (y, x) => {
    y !== "userMessageReceived" ? y !== "aiMessageReceived" ? y !== "aiMessageStreamStarted" ? y !== "aiMessageStreamed" ? y !== "aiChunkReceived" ? y !== "complete" ? y !== "error" || (m == null || m.delete(x)) : h == null || h.delete(x) : d == null || d.delete(x) : c == null || c.delete(x) : l == null || l.delete(x) : i == null || i.delete(x) : p == null || p.delete(x);
  }, destroy: () => k() } };
}, ja = { "data-transfer-mode-not-supported": "Requested data transfer mode is not supported", "no-data-transfer-mode-supported": "Adapter does not support any valid data transfer modes", "connection-error": "Connection error", "invalid-credentials": "Invalid credentials", "invalid-api-key": "Invalid API key", "http-server-side-error": "HTTP server side error", "http-client-side-error": "HTTP client side error", "failed-to-load-content": "Failed to load content", "failed-to-stream-content": "Failed to stream content", "failed-to-stream-server-component": "Failed to stream server component", "failed-to-render-content": "Failed to display content" }, mr = (r, e) => r !== void 0 && r.length > 0 || e !== void 0 && e > 0 ? "active" : "starting", bs = "nlux-comp-welcomeMessage-text", Uo = (r, e) => {
  const t = r.querySelector(`.${bs}`);
  if (e !== "" && e !== void 0) if (t) t.textContent = e;
  else {
    const n = document.createElement("div");
    n.classList.add(bs), n.textContent = e, r.appendChild(n);
  }
  else t == null || t.remove();
}, _o = "nlux-comp-welcomeMessage-personaName", fr = (r) => {
  const e = document.createElement("div");
  e.classList.add("nlux-comp-welcomeMessage");
  const t = Hr({ name: r.name, avatar: r.avatar });
  e.append(t);
  const n = document.createElement("div"), s = document.createTextNode(r.name);
  return n.append(s), n.classList.add(_o), e.append(n), Uo(e, r.message), e;
}, ws = () => fr({ name: "", avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAAewgAAHsIAXgkHaEAABj0SURBVHic7Z13vBxV2ce/Z29ugEQMEAICQUBAkBqqlCiRKqC0gApKE14poh8VUCmihv4SCB2CVAtFQBR9UZpCaMIL0ouAGIIEQgsJya27e/zjmb117+yUc+bM7J7v53Nys3dnzjx3dn9z2nOeR2mt8Xg89Sm5NsDjyTNeIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCKNsVdwzY4Ktqgej+v6RHwpQ8lqr2jFD3q+9UAPrGHDcwN8F6JD3hr1m0LHjgYnAWsAqwGrA8sDKwNLAOGAMsCTQPuDkMtANdAALgUXAPOBtYC4wB5gNvI5m7gBLhxjOiK8VwMAdpQOPrf1eD31PD/5dcJwa8lr+P+D4Ie8pCxtZ249/z3id1gTSoowHNgEmBWUDNGsBYy1eswy8BrwIPAs8BTyBiMeTEi+QdCwFfA6YAmwLbAaMHf7Ytsoo4NNB2XPA758GHgHuB2bBwFbGExUvkPisAOwK7ALsAKyQrR4is3FQjgR6EaH8CfgL8E+HdhUKL5BoLAHsBUwFdkczxq05sWkHdgwKiFhuBm7DtyyheIGEsyFwMHCA0nol18YYZLugnAfcAlwD3OPUopziBVKf3dEcCXzJtSGWGQ0cEJTHgV8A1wI9Dm3KFX4dZDD7A48iffVmF8dQNgdmAv8CTkCmoFseLxDhq8CTaH09Wm+J1rRwmYjWZyBC+TEy/mpZWl0gOwEPorkRzaT+BS1f0ExAcybwKvCtNDe5yLSqQNYAbkZzF5ptc/BlzHOZiGYm0vXcKukNLyqtKJD9gRdB7+v6m1ewsiXoR4CTE931gtJKAvkEcAua69Es4f77VthyKuLOsk3cD6CItIpADgReRjM1B1+wZigbo3kIOCPm51A4mn0dZDRwFVp/w7UhTcoJyETHQYizZNPRzALZXMGNwJquDWlyNgeeAw5DFhmbimYVyBHA5WjXZrQMJcRdZUvgaMe2GKUZBXIZWh/p2ogW5SjEf20v4H23ppiheQSiWBL4E5odXJvS4kxGNm7tiuxJKTTNIpBV0PwNWNu1IR4AVkKmgr8I3OnWlHTYE8iwfdqGGD6uWA/0LGS7qydf/AX4BvAb14YkxZ5AqtZqFkSAWwctR0s71OWcXwPLAhe7NiQJ1gSiKnamkHTf0qaaDDxg5SIe01yErEmd59qQuBR1DLI1WntxFItzkX7F+Y7tiEURXU0mAQ+5NsKTiBnIGlVhKFYLolgDzcPYmwLw2Ody4EPgJsd2RMKeQLThMYji42j+riQWlafY3Ai8hWaWa0MaYVEgButSgOYBJCaVpzn4G7AWmn+7NiSMYnSxNLcBG7k2w2OUEjKWXJ0cR1HJdxdLRho/Q3x7PM3HSsDdwHZ5dSzNexdrd+CnRmry5JXPA+eiOda1IfXIcxdrRTS3uzbCkwk/QMKh5u7zznMX6y7ys07TDTwJvAC8gkxTdiIxb5dGIqtvCHyWfD908sxtwIqA+SQfKcjrh3kG+RiU3wr8DvgrkrimEasAOyN74L9g0a5mpATcgWy6yg1Km16vCOg9bdlkJyq2AB4zakx8LgQuQPFaorPllu4AnIL0sT3ROREJWBeb9pPnm7bFpkCWSXimmovMbrjgLuBYFM+JKQlr0YP+fwzirOeJjP400pWNRfvJHxq3xJ43bzLdzQBnaQaO04pzLXixXKy0noUExF7VdOVNyu+QMZ1z7A2C48daWg/N9xzEeOpGxg3n2roVwDPARmieyUFMqyKUDYDvxD7PAnmZJQL4rYNrfoCkKbvb6lWkUfoQ2AIRi6cRmguBZVybYXFHYQxJK74JrG/Nlvp8BGyGUrMzvGYPmm1Av4qEQvWEcxWaqS4NyMM07yh05tsxe4FtUBmkShZHSyT3BgCLgc+h+Sf5asHzyD7AlmjtbFYzDwuF15O1C7tSnwee6/vijrK4vaQKDN9+/CqyK/JRexduGn4PrOzq4m4H6dL/38+aDfX5X+Dvfa+0li9wnC5hFJSITpUrUvfwTE6PAd81e9GmZCXgOFcXt7YOUj7l41EOewAJNJYVz1JvhV4H/7S3oUeV+lu/NA2LVqieClSrfWIZgUfJ2epxDukAxgHlsINGTVto/MIWW5C6T82BZXM0kzOePtwtdHqwtwrlavqlkJJClatSH6qRTfvlYFo172UMmh81/E5ZwGUXa3rGySm/D/o/oTe3qlFdZekShT/1R6ZNich6ysHdbXgj5qD12TlI3pn3ciKattBbaQFrAlHhZX0F2zU4xlzRvAicH3oTNX0th+pJ2IoooKIpdVZQOrh2NULRnKA0CzO7H8UsYxR8O+wYG7hqQX6eaRMNBygNkYpSqN4qqrsCpRi3XQFKUeqsyKBfqThPNQ0cl4OuTN7LSVRhxGIBFwuFy6MyXfy5AQmkHAvVXUGPLolIosxwlRSqqwK9gbDi94l/Afwcd46aRWAFYE80f8jqgi4WquL72KRrPY6JbaECtKbUUZaWoNF4pKRQZY3qLMvJye09PgdP6byXE8I/DLO4WCj8trVrDmc6Wn2Q7FQFPRXU4l70Um2hhwHQ0SstTRs1YSbhN8DZyMYrT30+i+zgfDmLi2XdguxKdmkKysApqR5XJYVa3CuD9lEj3KpSCdVZ7h+zJBdHjT+mrqH5OSqrC2U9SD86w6b4TDSdqetpK6E6yjJ1O6qEbh9QlmiDSlXeL5VM2X1dDroxeS8Ho1HDfm+BLMP+LIuE8cmCHpShHN4KEUFXBb0UlDrL/X9bSUFZB+MUI1cD+DuapxE3HE99at+lP9m+UJZjkP2wN109lIuArtS1aEQEo0qU3u/qdx3RA94f3UZ13GgRibmcKGcjTpyekTmQDARizRerctyYob/6K9lF+hiPbIZKR5uCKqiPumWMoZT8TiHiCFoXVElEMrpNumIm0HyAPCk99elA7k9f2NK26R3GL5LVIH05shPHLzEljrKm9GGXiGNUqV8c0P+zTZwbSx92oxb3BouLqaZ6ay3UL1L/Dc3NGCRJqFUsBm0Y1DLtYes6wy/M6anO14gYequoBd39r8MIFgbVRz3Sooxtly5musb5YuCHqWpofqZiORpjVi3IbhldZxaal1M9uUvB+seCbqmxLeKwSclYRXWUUYuClqTWFUvGG0gYIs/IHASMtXmBLGaxSsCO1q4zmNNSnd2mpOVY2CNf7ji+WDVGlaBLnBX12HZx8EouknOQiCue+jyI5YmfLGaxtiCbweabpIlO0iZOiiwMxnxJxDGgLrrK4q84ph10NalI7kH+Lr+yPpw7Ucr6GCSLhcLtM1o8ujDxuUoG5OqjQBxRu1VhtJVQnRXZX5J0b4kwIwcLc3krj5DBAB2yGYN8LoNraGBmorMCb93Sop7+1yZQoEsKtbgsriqlxDNbM7HmzF1I3gCmZHUx212sNsS5zDa3AgtinzVQHBUtU7YmCcYxalEP+mPt0F5Kspi4CHFiPNCscYVkIRIMvAcN8gTB6ijEdhdrPTTLZdDkxu+GBDaqjl5xFzHVcgwlqLa0qBd6ddKW5MwcdGtcl/mI+83sure5104ja3sWaxNr9ffzGoqHY59VKqG6yqjuqt24WNDfUnX0Uh07WkQTxHOIyItoHgK2tWVizqkAW1EaIA5N315b1V016eYzCIuRFTVoJtmrP0BxOTrOF1ye4qqnIhucbLUcQwkcG1VHL3rMKLEj3kPvdCTBTCuyA6iX++5XTRwaiR5TrprvHgfYTn9gP4S95ur+PlMEFBK9pKPc/zoralPJXRX0Um2oeE+9PwNzgE/aMS63HKPh/mEPFI3cv4rF7jH2u1jrWqtf+APwfuSjg8AKqm/3X5bqCCgp8e1qU0kG7afSWj5aN6G4pO6nVNVSLM/D2pzFmghMtFY/gFKXRD5WB0+anir0OBIH9LVYqrOMVu3yAVc1kZoyxVVoPR2JMtjsvIlSX6vbOdBBy5HBR2hTf2tYrBs089D67khBx6rBzawEgeEcaaOPUuBG31Vm0JRaoyJ7E9I5YxYBzUJgu4afZwbYnOZdzeq0H1wZ41gg6NpUcC8QkDvfq2UGRsWa+p2BpisH0662ygfApsC/6t63kUMwrTDSG2mwGZt3ouVQlDMjH6tA9VZkHSIkQEnmlIDuqtgWhBqKUMpoPS0HoUBtlPlonUQce6D1LTY+IpuDdJsOdg8iLgeNCWat6DYQlNo0NXtqrUh09/izgROBj1myzAWdwBYoXq/7blWH3ZvrgCVsGGWzizXeYvcqRkYqJb5Q8t/8URu091Ti3IMqmhNz0B0y+ZluS1jLUR3x3IPRLIO2EyfL5iyWrRx8H4G6OdKRqraQpNM+ClZFgpWtDiyP7HlfEom99T4wF3gJeE7si4kCKuIuodtV1FX2i9CcBKwY+3p5Q7ELWj0JBGIZ0lSMHDehDbg0+P9oG6bZzFG4jKV6f43Wjdega12r3sTi2BHYE/FG3pBaLeFdoPlI9+92xIFyfuSrlZBZthLo6AHo/gfLW04z4BDCdk6GBxU5A9mbzoCfRrEW1YTD214C1jFer2JD5EndmLIeeUpwYCyrvp9qLBK175vAZ1JaugC4EjgXrd8C+r/0mvofvAZKSJariCjNw8DW6Ux1g4afopgmr4Z/SCr8u7kcgxeJ53Jlxfi412YXy4ai/4FWjcVRaz3izZcfjdanYK7LMg44FjgamAac1fCMwIlRlXWchcz90Xp2Qhtdcp1Salq/BgaLQdXrag1m6HqQlS6WzUH6khYGchdGOjCeONZDciVegmZFCwPQpYAzkVyEjVulmrgrVSJOjb4O/Mz5IDtemQUcgtaoEYr8bSOePwHNkUN+Z+Vhb3Ml3bSiO9HcEOkDiJ6x9lDgeWq5Em0hdm2JdA2/2vD42nTvyDM3Q8vPySjauQFepVGMtMafxU/q/M7Kd9nmOohpg69hQBS9kOs2RlqWc9CZpxcuATcis2LTGx6tNTH6iLshX748Mx/YhjBH/8af3xJIt3UoVibxXeQHSYbiVGN1aW4H/WVj9cXnHMTT+fCGR0YXyb9A7wnZZV+KySsodgb1LlBfCHqkNwZxJhn6Q7jIMJWE69G8Ham70Zg7AJfiqHEYkadoo3buuZ1sExRF5U0k/NPs8MMafoAfA75vwqCo2BRIxWBd6QLC9fN7JIlPXvgycJnhOi9FotvnhbeBzYAFouOQCYfGhInfyqZ0mwJpPF6IxqPAiwbq+SWy8Jc3jgS+Y7jO75KP9An/RuISzDNUX1jrYfKB3IdNgXQaquenBuo4j3yHzbkQ2MpwnV9HwgW54lFgEtKCmGB3wteoyoauMwibAllsoI5XgDtT1nEsGfdbE3IX5j1SvwFcYLjOKPwKEfxCg3U2mnE01WMZhE2BmMhmcnLK8/chynRqPlga8d8yzfeQblwWaCTt9kGG612dxtEUew1fE7ArkPdSnv8f4Lcpzt8CO184m+yORA40zUyku/OQhbpr3IF4JUSPExCdKDNzprr0g7ApkHdSnv+DFOeuBNyf8vqusNUlehqYDByBhA8yxYPIbNzuiMu/DQ6LcExLCeQ1INqej+G0Aw8DS6W4vksmIW7strgCWBNZpLwvYR2vI+GHvoBsB7CZTHNvoqXPiL8PJwI294P8J8W5ab4g9yF91iJzGeKSYuVDR2Z8rgrK2siXfAuki7QyMh6qBUjtQB52s4EngVnIDJVN77WBRJ0Cf9fGxfMokPuRjLhJuBXx9Sk6bci44YAMrvVKUK4e8Luao6nG0uA3IqsQPfnrXBsG2OxizU54XtL1iiuQWatmYX+yCN1an56guBQHwLdiHFt/P3tKbArkNeLf4FOIGq1kMNOx2293xTWuDXBMY2fOfl6zYYBNgcwnnvv1C5DIY/cMZDGwGdmMfPmOZckUZDwUFSszaLa9eeMYnSTn3HnACQnOKxKXuzbAEXH80+Yhfl/GsS2QZyIety/xu1anUwwXkrR8EvGraiXGIdO7UXmWAnrzAjwV4ZgTib/iPSU4r1U4z7UBGXMg8XYIPm3LENsCeaLB+6cjO8TisAytl2lpBeINWIvOUTGP/4cVK7AvkDcYeXbheJI5I/6V4q6Sp+EM1wZkxKbIgmUcHrNhCGSz5XZogs1XgZ1I5mV7A9kkBs0jE4jmk1R04m4ZnoPFYBVZCOTR4OdLSKuxDnBPgnpmAF8zZVRBMbX1OK+MRhZI4zDLhiE1bLqa1LgJmc1K84eciexraHU+gQxgf+XaEEscSPzuc1K3pEhk0YK8SzpxnAz82JAtzUAzp2BLMm2fpDcSmbyH/TmQZKvrzcyqNJfPWY1JwPoxz3meZK5JkcmzQL6ERCLxDOds1wZYIEmUyz8at2IIeRXIXmTwxxeYtYCdXRthkKVJ5tpvJS/hQPIokKOA21wbUQDOcW2AQY4gfmzdN2i8EJ2avAnkMvpTannC2Qg7AR5ckKR7lSagR2TyIpDtkdQAWYWnaRaaYSyyD8mSFl1n2pB6uBbIpsje63uJP4PhkeBsm7s2IiVJImc+j3jwWieLhcKhrI3sG/8KktPCk44ZSNCFIrIt0lWMy0zThoyEC4HcgOyU85hhMtISW/NotUiSLmIVuNawHSPioot1rYNrNjs2ohnaZiOkBYnL9dgLhzQMFwK5BLNBjT0yFpns2oiYJI0gmenEhAuBaNxEHG92MuuXG2ATGgejrsdjyGxnZriaxZpOdpH5WoX1kImPIpBUzJkH6HAlkIW0brQOm1zs2oAIfBEJcxqXl7Hs2l4Pl+sgJjJHeQYzAZjm2ogGXJnwPCexz1wK5F2KOfuSd36CpH/IIyci8Xbj8hJ2I8iPiOuV9JMcX79ZudG1AXWYQPLNXseYNCQOrgWygNYI/pY1n0cy3eaJPyc8707EFckJrgUCcD7iW+MxywXILr08cDXJvSf2NWlIXPIgEJBsrB7z/J9rAxBv3UMTnns8sMigLbHJi0CeonkjdbhkZdzmSl+d5IlU55CDDMV5EQhIfg8riRhbnAOQHXtZsyTwQIrz9zNlSBryJJBukmeX8oRzOdmnpnsAmJjw3KuwGE40DnkSCEhznHS2wxPOfcCnMrxW0o1cH5CjbGF5EwjIrEW3ayOakHYkDGzSp3oUPg48AmyXoo69yJGfXh4F0kG85Cme6CyPbKxa00LdmyHbYLdKUce5pBu3GCePAgHpZnk3FDtMQBLOTDFY57HA40g2rKQ8T7LoJlbJq0BA3Asy2ZjfgowF/gb8KGU9OyHpLdJOx+qgrtyRZ4EA7Ijk6/bY4SzgIeQ+R2UMkobiXuAuYGsDduwBvGWgHuO4CNoQh3eQ/QOZ7wNoIbYB7gYeRIKxPYBkjF0MLAGMR+JWbYhET9kNSQlnip/hyFM3CkprSxMGh8SNJBnKMcBFJiv0hLIAcfFYElgWez2NWzC5IHit+e9y3rtYNS6mGLvlmoVxyL6N8dj7jjxBTlbLwyiKQEASy//OtREeI8yhIHGFiyQQgKlYzknnsc6HyFpJh2M7IlE0gYCs0j7u2ghPIjqBz5LTGat6FFEgIFOLT7o2whOLbkQcL7s2JA5FFUgZudn/79oQTySqyOdVuIXfogoEoBe56fe7NsTTkMMR95bCUWSBgLgoTAF+79YMTwhzgGtcG5GUogukxt5I+jZP/rCax9w2zSIQgKOBH7o2wjMMp0EX0tJMAgHJ/LoX3sExT6zu2oA0NJtAAP4AbIBESvG4J0mKtdzQjAIBeAXJQXGFa0M8rI6EHyokzSqQGkcgQekWuzakxVnPtQFJaXaBgAROWwfpenncsIFrA5LSCgIBeBMZvB+Gz4/oAi+QgnA18GkkYrgnOz7j2oCktJpAAOYh23gPBd5wbEursC4Sl6twtKJAalwLrI1kZPLdLrssB6zl2ogktLJAQFywT0MCqZ1FwVd9c866rg1IQqsLpMZ7SIrhNZEkmPPcmtOUFHLB0AtkMO8g2Xc/BXwbCSzQClSwvwW2kGshXiD16QAuRSKUb4+MVz5yaZAl7gC+DqwBrIbs1DwBO6kHxlio0zpFiYuVB8YjEQD3BnYBRrs1JzGPALche2heCTlucySC4lTMOBxegu1stRbiYnmBJGMlYGckZOcU7KYUSMsiZNflX5C9GS8lqGNP4CtBSRqNczIS5tQeXiC5pA3Z+jsZCWezKdJdccX7wDNILpCHkODSHxiqe1Xgm4hQ4owp7iVe/N9keIEUhvWBjZF4tusgawCfRCIWmqILeB2YDfwTCYjwNPAC2Thn7oDkP9wLWecYiReALTOxyQuk0IxDumYrBz+XRRLajEeCRI9GVptLyF77XmTjVw8SbO09pCWYB8wF3kZm3VwzDhHJVMTnanlkVuwtxKXneCQKjX0KJRCPpwnw07weTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwj/Ba/47FkhCYEqAAAAAElFTkSuQmCC" });
var Ba = Object.defineProperty, Ma = Object.getOwnPropertyDescriptor, ks = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? Ma(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && Ba(e, t, o), o;
};
let kn = class extends We {
  constructor(r, e) {
    super(r, e), this.updateConversationStarters = (t) => {
    };
  }
  conversationStarterClicked(r) {
    this.getProp("onConversationStarterSelected")(r);
  }
};
ks([Xe("conversation-starter-selected")], kn.prototype, "conversationStarterClicked", 1), kn = ks([ot("conversationStarters", ({ appendToRoot: r, props: e, compEvent: t }) => {
  const n = ((o) => {
    const i = document.createElement("div");
    return i.classList.add("nlux-comp-conversationStarters"), o.forEach((a, u) => {
      const l = document.createElement("button");
      l.classList.add("nlux-comp-conversationStarter");
      let c = document.createElement("div");
      a.icon && (typeof a.icon == "string" ? (c = document.createElement("img"), c.setAttribute("src", a.icon), c.setAttribute("width", "16px")) : (c.className = "nlux-comp-conversationStarter-icon-container", c.appendChild(a.icon)));
      const d = document.createElement("span");
      d.classList.add("nlux-comp-conversationStarter-prompt"), d.textContent = a.label ?? a.prompt, l.appendChild(c), l.appendChild(d), i.appendChild(l);
    }), i;
  })(e.conversationStarters);
  r(n);
  let s = [];
  return e.conversationStarters.forEach((o, i) => {
    const [a, u] = Tn(n, `:scope > :nth-child(${i + 1})`).on("click", () => {
      t("conversation-starter-selected")(o);
    }).get();
    s.push(u);
  }), { elements: {}, actions: {}, onDestroy: () => {
    s.forEach((o) => o()), s = [], n.remove();
  } };
}, ({}) => {
})], kn);
let gr = class extends We {
  constructor(r, e) {
    super(r, e), this.setConversationStarters(e.conversationStarters);
  }
  setConversationStarters(r) {
    var e;
    if (r || this.conversationStartersComp) {
      if (r && !this.conversationStartersComp) {
        const t = this.getProp("onConversationStarterSelected");
        return this.conversationStartersComp = wt(kn).withContext(this.context).withProps({ conversationStarters: r, onConversationStarterSelected: t }).create(), void this.addSubComponent(this.conversationStartersComp.id, this.conversationStartersComp, "conversationStartersContainer");
      }
      !r && this.conversationStartersComp ? (this.removeSubComponent(this.conversationStartersComp.id), this.conversationStartersComp = void 0) : (e = this.conversationStartersComp) == null || e.updateConversationStarters(r);
    }
  }
  setShowGreeting(r) {
    this.setProp("showGreeting", r), this.executeDomAction("resetGreeting", r);
  }
  setAssistantPersona(r) {
    this.setProp("assistantPersona", r), this.executeDomAction("updateAssistantPersona", r);
  }
  resetConversationStarters() {
    const r = this.getProp("conversationStarters");
    this.setConversationStarters(r);
  }
};
gr = ((r, e, t, n) => {
  for (var s, o = e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = s(o) || o);
  return o;
})([ot("launchPad", ({ appendToRoot: r, props: e }) => {
  const t = { assistantPersona: e.assistantPersona, conversationStarters: e.conversationStarters, showGreeting: e.showGreeting !== !1 };
  let n;
  if (t.showGreeting) if (e.assistantPersona) {
    const i = e.assistantPersona;
    n = fr({ name: i.name, avatar: i.avatar, message: i.tagline });
  } else n = ws();
  n && (r(n), t.greetingElement = n);
  const s = document.createElement("div");
  s.classList.add("nlux-conversationStarters-container"), r(s);
  const o = (i = !0) => {
    t.showGreeting = i, t.greetingElement && (t.greetingElement.remove(), t.greetingElement = void 0), i && (t.greetingElement = t.assistantPersona ? fr({ name: t.assistantPersona.name, avatar: t.assistantPersona.avatar, message: t.assistantPersona.tagline }) : ws(), t.greetingElement && s.insertAdjacentElement("beforebegin", t.greetingElement));
  };
  return { elements: { conversationStartersContainer: s }, actions: { resetGreeting: (i = !0) => {
    o(i);
  }, updateAssistantPersona: (i) => {
    const a = t.assistantPersona;
    t.assistantPersona = i, (a || i) && t.showGreeting && (i && a ? ((u, l, c) => {
      if (l.message !== c.message || l.name !== c.name || l.avatar !== c.avatar) {
        if (l.message !== c.message && Uo(u, c.message), l.name !== c.name) {
          const d = u.querySelector(`.${_o}`);
          if (d) {
            const p = document.createTextNode(c.name);
            d.replaceChildren(p);
          }
        }
        if (l.avatar !== c.avatar || l.name !== c.name) {
          const d = u.querySelector(`.${Fr}`);
          d && Fo(d, { name: l.name, avatar: l.avatar }, { name: c.name, avatar: c.avatar });
        }
      }
    })(t.greetingElement, { name: a == null ? void 0 : a.name, avatar: a == null ? void 0 : a.avatar, message: a == null ? void 0 : a.tagline }, { name: i.name, avatar: i.avatar, message: i.tagline }) : o());
  } }, onDestroy: () => {
    var i;
    (i = t.greetingElement) == null || i.remove(), s.remove();
  } };
}, ({}) => {
})], gr);
var La = Object.defineProperty, za = Object.getOwnPropertyDescriptor, Yn = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? za(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && La(e, t, o), o;
};
let pn = class extends We {
  constructor(r, { conversationLayout: e, autoScroll: t, streamingAnimationSpeed: n, visible: s = !0, composer: o, assistantPersona: i, userPersona: a, showGreeting: u, conversationStarters: l, initialConversationContent: c, syntaxHighlighter: d, htmlSanitizer: p, markdownLinkTarget: h, showCodeBlockCopyButton: m, skipStreamingAnimation: g }) {
    if (super(r, { conversationLayout: e, visible: s, autoScroll: t, streamingAnimationSpeed: n, assistantPersona: i, userPersona: a, conversationStarters: l, showGreeting: u, initialConversationContent: c, composer: o, syntaxHighlighter: d, htmlSanitizer: p, markdownLinkTarget: h, showCodeBlockCopyButton: m, skipStreamingAnimation: g }), this.prompt = "", this.handleConversationStarterClick = (b) => {
      this.composer.setDomProps({ status: "submitting-conversation-starter" }), this.composer.handleTextChange(b.prompt), this.composer.handleSendButtonClick();
    }, this.handleSegmentCountChange = (b) => {
      var y, x;
      if (this.segmentCount === b) return;
      this.segmentCount = b;
      const k = mr(this.getProp("initialConversationContent") || void 0, this.segmentCount);
      this.chatRoomStatus !== k && (this.chatRoomStatus = k, this.executeDomAction("updateChatRoomStatus", this.chatRoomStatus), this.chatRoomStatus === "active" ? (y = this.launchPad) != null && y.id && (this.removeSubComponent((x = this.launchPad) == null ? void 0 : x.id), this.launchPad = void 0) : this.addLaunchPad(this.getProp("showGreeting") ?? !0, this.getProp("assistantPersona"), this.getProp("conversationStarters"), this.handleConversationStarterClick));
    }, this.segmentCount = c && c.length > 0 ? 1 : 0, this.chatRoomStatus = mr(c, this.segmentCount), this.chatRoomStatus === "starting" && this.addLaunchPad(u, i, l, this.handleConversationStarterClick), this.addConversation(i, a, c), this.addComposer(o == null ? void 0 : o.placeholder, o == null ? void 0 : o.autoFocus, o == null ? void 0 : o.disableSubmitButton, o == null ? void 0 : o.submitShortcut), !this.conversation || !this.composer) throw new Error("Chat room not initialized — An error occurred while initializing key components.");
  }
  getConversationContentForAdapter(r = "max") {
    return this.conversation.getConversationContentForAdapter(r);
  }
  hide() {
    this.setProp("visible", !1);
  }
  messagesContainerClicked() {
    var r;
    (r = this.composer) == null || r.focusTextInput();
  }
  onChatRoomReady() {
    Ve(() => {
      var e, t;
      const r = (t = (e = this.renderedDom) == null ? void 0 : e.elements) == null ? void 0 : t.conversationContainer;
      if (r instanceof HTMLElement) {
        this.autoScrollController = Ca(r, this.getProp("autoScroll") ?? !0);
        let n = 0;
        const s = 20, o = () => {
          r.scrollHeight > r.clientHeight && (r.scrollTo({ behavior: "smooth", top: 5e4 }), clearInterval(i));
        }, i = setInterval(() => {
          n >= s ? clearInterval(i) : (o(), n++);
        }, 10);
      }
      this.context.emit("ready", { aiChatProps: Sa(this.context.aiChatProps) });
    });
  }
  setProps(r) {
    var e, t, n, s, o, i, a;
    if (r.hasOwnProperty("autoScroll")) {
      const u = r.autoScroll;
      (e = this.autoScrollController) == null || e.updateProps({ autoScroll: u });
    }
    if (r.hasOwnProperty("conversationLayout") && ((t = this.conversation) == null || t.setConversationLayout(r.conversationLayout)), r.hasOwnProperty("syntaxHighlighter") && this.setProp("syntaxHighlighter", r.syntaxHighlighter), r.hasOwnProperty("htmlSanitizer") && this.setProp("htmlSanitizer", r.htmlSanitizer), r.hasOwnProperty("markdownLinkTarget") && this.setProp("markdownLinkTarget", r.markdownLinkTarget), r.hasOwnProperty("skipStreamingAnimation") && this.setProp("skipStreamingAnimation", r.skipStreamingAnimation), r.hasOwnProperty("streamingAnimationSpeed") && this.setProp("streamingAnimationSpeed", r.streamingAnimationSpeed), r.hasOwnProperty("assistantPersona") && ((n = this.conversation) == null || n.setAssistantPersona(r.assistantPersona ?? void 0), (s = this.launchPad) == null || s.setAssistantPersona(r.assistantPersona ?? void 0)), r.hasOwnProperty("userPersona") && ((o = this.conversation) == null || o.setUserPersona(r.userPersona ?? void 0)), r.hasOwnProperty("showGreeting") && ((i = this.launchPad) == null || i.setShowGreeting(r.showGreeting ?? !0)), r.hasOwnProperty("conversationStarters") && ((a = this.launchPad) == null || a.setConversationStarters(r.conversationStarters)), r.hasOwnProperty("composer") && this.composer) {
      const u = { ...this.composer.getProp("domCompProps"), ...r.composer };
      this.composer.setDomProps(u);
    }
  }
  show() {
    this.setProp("visible", !0);
  }
  setProp(r, e) {
    if (super.setProp(r, e), r === "markdownLinkTarget" || r === "syntaxHighlighter" || r === "htmlSanitizer" || r === "skipStreamingAnimation" || r === "streamingAnimationSpeed") {
      const t = r, n = e;
      this.conversation.updateMarkdownStreamRenderer(t, n);
    }
  }
  addLaunchPad(r, e, t, n) {
    this.launchPad = wt(gr).withContext(this.context).withProps({ showGreeting: r, assistantPersona: e, conversationStarters: t, onConversationStarterSelected: n }).create(), this.addSubComponent(this.launchPad.id, this.launchPad, "launchPadContainer");
  }
  addConversation(r, e, t) {
    this.conversation = wt(pr).withContext(this.context).withProps({ assistantPersona: r, userPersona: e, messages: t, conversationLayout: this.getProp("conversationLayout"), markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), onSegmentCountChange: this.handleSegmentCountChange }).create(), this.addSubComponent(this.conversation.id, this.conversation, "conversationContainer");
  }
  addComposer(r, e, t, n) {
    this.composer = wt(ut).withContext(this.context).withProps({ props: { domCompProps: { status: "typing", placeholder: r, autoFocus: e, disableSubmitButton: t, submitShortcut: n } }, eventListeners: { onTextUpdated: (s) => this.handleComposerTextChange(s), onSubmit: () => this.handleComposerSubmit() } }).create(), this.addSubComponent(this.composer.id, this.composer, "composerContainer");
  }
  handleComposerSubmit() {
    const r = this.props.composer;
    (({ context: e, composerInstance: t, conversation: n, autoScrollController: s, messageToSend: o, resetComposer: i, setComposerAsWaiting: a }) => () => {
      var l, c;
      const u = n.addChatSegment();
      try {
        const d = t.getProp("domCompProps");
        t.setDomProps({ ...d, status: "submitting-prompt" });
        const p = { aiChatProps: e.aiChatProps, conversationHistory: n.getConversationContentForAdapter((c = (l = e.aiChatProps) == null ? void 0 : l.conversationOptions) == null ? void 0 : c.historyPayloadSize) }, h = Da(o, e.adapter, p);
        h.observable.on("error", (m, g) => {
          n.removeChatSegment(u), s == null || s.handleChatSegmentRemoved(u), i(!1), e.exception(m), e.emit("error", { errorId: m, message: ja[m], errorObject: g });
        }), h.observable.on("userMessageReceived", (m) => {
          n.addChatItem(u, m), e.emit("messageSent", { uid: m.uid, message: m.content }), Ve(() => {
            if (s) {
              const g = n.getChatSegmentContainer(u);
              g && s.handleNewChatSegmentAdded(u, g);
            }
          });
        }), h.dataTransferMode === "batch" ? h.observable.on("aiMessageReceived", (m) => {
          const g = typeof m.content == "string", b = { ...m, content: g ? "" : m.content };
          n.addChatItem(u, b), g && n.addChunk(u, b.uid, m.content, m.serverResponse), n.completeChatSegment(u), e.emit("messageReceived", { uid: m.uid, message: m.content }), i(!0);
        }) : (h.observable.on("aiMessageStreamStarted", (m) => {
          n.addChatItem(u, m), a(), e.emit("messageStreamStarted", { uid: m.uid });
        }), h.observable.on("aiChunkReceived", (m) => {
          const { messageId: g, chunk: b, serverResponse: k } = m;
          n.addChunk(u, g, b, k);
        }), h.observable.on("aiMessageStreamed", (m) => {
          m.status === "complete" && e.emit("messageReceived", { uid: m.uid, message: m.content });
        }), h.observable.on("aiServerComponentStreamStarted", (m) => {
          n.addChatItem(u, m), a(), e.emit("messageStreamStarted", { uid: m.uid });
        }), h.observable.on("aiServerComponentStreamed", (m) => {
          m.status === "complete" && e.emit("messageReceived", { uid: m.uid, message: m.content });
        }), h.observable.on("complete", () => {
          n.completeChatSegment(u), i(!1);
        }));
      } catch (d) {
        ee(d), i(!1);
      }
    })({ context: this.context, composerInstance: this.composer, conversation: this.conversation, messageToSend: this.prompt, autoScrollController: this.autoScrollController, resetComposer: (e) => {
      this.destroyed || this.resetComposer(e, r == null ? void 0 : r.autoFocus);
    }, setComposerAsWaiting: () => {
      this.destroyed || this.composer.setDomProps({ status: "waiting" });
    } })();
  }
  handleComposerTextChange(r) {
    this.prompt = r;
  }
  resetComposer(r = !1, e = !1) {
    if (!this.composer) return;
    const t = { ...this.composer.getProp("domCompProps"), status: "typing" };
    r && (t.message = ""), this.composer.setDomProps(t), e && this.composer.focusTextInput();
  }
};
Yn([Xe("conversation-container-clicked")], pn.prototype, "messagesContainerClicked", 1), Yn([Xe("chat-room-ready")], pn.prototype, "onChatRoomReady", 1), pn = Yn([ot("chatRoom", ({ appendToRoot: r, compEvent: e, props: t }) => {
  const n = document.createElement("div");
  n.classList.add("nlux-conversation-container");
  const s = document.createElement("div");
  s.classList.add("nlux-composer-container");
  const o = document.createElement("div");
  o.classList.add("nlux-launchPad-container");
  const i = document.createDocumentFragment();
  i.appendChild(o), i.appendChild(n), i.appendChild(s);
  const a = t.visible ?? !0, u = document.createElement("div"), l = (p) => {
    u.classList.remove("nlux-chatRoom-starting"), u.classList.remove("nlux-chatRoom-active"), u.classList.add(`nlux-chatRoom-${p}`);
  };
  u.classList.add("nlux-chatRoom-container"), l(mr(t.initialConversationContent)), u.append(i), u.style.display = a ? "" : "none";
  const [c, d] = Tn(u, ":scope > .nlux-conversation-container").on("click", e("conversation-container-clicked")).get();
  return r(u), e("chat-room-ready")(), { elements: { composerContainer: s, conversationContainer: n, launchPadContainer: o }, actions: { updateChatRoomStatus: (p) => {
    l(p);
  } }, onDestroy: () => {
    d();
  } };
}, ({ propName: r, newValue: e, dom: { elements: t } }) => {
})], pn);
const $a = (r) => {
  const e = /* @__PURE__ */ new Set();
  let t = !1, n = null, s = null;
  const o = () => {
    if (t || e.size === 0) return;
    t = !0;
    const a = e.values().next().value;
    e.delete(a), n = (({ message: u }) => {
      const l = document.createElement("div");
      l.classList.add("nlux-comp-exceptionItem");
      const c = document.createElement("span");
      return c.classList.add("nlux-comp-exp_itm_msg"), c.append(document.createTextNode(u)), l.append(c), l;
    })(a), r.append(n), s = setTimeout(i, 3e3);
  }, i = () => {
    n == null || n.classList.add("nlux-comp-exceptionItem--hiding"), s = setTimeout(() => {
      t = !1, n == null || n.remove(), n = null, o();
    }, 500);
  };
  return { displayException: (a) => {
    e.add({ message: a }), t || o();
  }, destroy: () => {
    e.clear(), n == null || n.remove(), s && clearTimeout(s);
  } };
};
let Cs = class extends We {
  constructor(r, e) {
    super(r, e);
  }
  destroy() {
    super.destroy();
  }
  showAlert(r, e) {
    this.executeDomAction("displayException", e);
  }
};
Cs = ((r, e, t, n) => {
  for (var s, o = e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = s(o) || o);
  return o;
})([ot("exceptionsBox", ({ props: r, appendToRoot: e }) => {
  const t = (() => {
    const s = document.createElement("div");
    return s.classList.add("nlux-comp-exceptionBox"), s;
  })();
  e(t);
  let n = $a(t);
  return { elements: { root: t }, actions: { displayException: (s) => {
    n == null || n.displayException(s);
  } }, onDestroy: () => {
    n == null || n.destroy(), t.remove(), n = void 0;
  } };
}, () => {
})], Cs);
class Fa {
  constructor(e) {
    this.actionToPerformWhenIdle = "none", this.itemIds = /* @__PURE__ */ new Set(), this.status = "idle", this.theContextId = null, this.updateQueueByItemId = /* @__PURE__ */ new Map(), this.dataAdapter = e;
  }
  get contextId() {
    return this.theContextId;
  }
  async createContext(e) {
    if (this.status === "destroyed") return { success: !1, error: "The context has been destroyed" };
    const t = e ?? null;
    this.itemIds.clear(), t !== null && Object.keys(t).forEach((n) => {
      this.itemIds.add(n);
    }), this.actionToPerformWhenIdle = "none";
    try {
      const n = await this.dataAdapter.create(t ?? {});
      return n.success ? (this.theContextId = n.contextId, { success: !0, contextId: n.contextId }) : { success: !1, error: "Failed to set the context" };
    } catch (n) {
      return { success: !1, error: `${n}` };
    }
  }
  async destroy() {
    return this.status === "destroyed" ? (ee("Context.DataSyncService.destroy() called on a state that has already been destroyed"), { success: !0 }) : (this.status !== "updating" || this.contextId || ee("Context.DataSyncService.destroy() called with no contextId!"), this.contextId && (this.status = "updating", await this.dataAdapter.discard(this.contextId)), this.status = "destroyed", this.theContextId = null, this.updateQueueByItemId.clear(), this.actionToPerformWhenIdle = "none", { success: !0 });
  }
  async flush() {
    if (!this.contextId) throw new Error("Context not initialized");
    if (this.status === "updating") return void (this.actionToPerformWhenIdle = "flush");
    this.status = "updating";
    const e = this.updateQueueByItemId.keys(), t = [], n = [];
    for (const o of e) {
      const i = this.updateQueueByItemId.get(o);
      i && (i.operation !== "delete" ? ["set", "update"].includes(i.operation) && t.push(o) : n.push(o));
    }
    const s = t.reduce((o, i) => {
      const a = this.updateQueueByItemId.get(i);
      return a && (a.operation === "set" && (o[i] = { value: a.data, description: a.description }), a.operation !== "update" || a.data === void 0 && a.description === void 0 || (o[i] = { value: a.data, description: a.description })), o;
    }, {});
    if (Object.keys(s).length > 0) {
      Object.keys(s).forEach((o) => {
        this.updateQueueByItemId.delete(o);
      });
      try {
        await this.dataAdapter.updateItems(this.contextId, s);
      } catch (o) {
        ee(`Failed to update context data: ${o}`), Object.keys(s).forEach((i) => {
          const a = s[i];
          a && this.updateQueueByItemId.set(i, { operation: "update", data: a.value, description: a.description });
        });
      }
    }
    if (n.length > 0) {
      n.forEach((o) => {
        this.itemIds.delete(o), this.updateQueueByItemId.delete(o);
      });
      try {
        await this.dataAdapter.removeItems(this.contextId, n);
      } catch (o) {
        ee(`Failed to delete context data: ${o}`), n.forEach((i) => {
          this.itemIds.add(i), this.updateQueueByItemId.set(i, { operation: "delete" });
        });
      }
    }
    await this.backToIdle();
  }
  hasActiveItemWithId(e) {
    var t;
    return this.itemIds.has(e) && (!this.updateQueueByItemId.has(e) || ((t = this.updateQueueByItemId.get(e)) == null ? void 0 : t.operation) !== "delete");
  }
  hasItemWithId(e) {
    return this.itemIds.has(e);
  }
  removeItem(e) {
    if (this.status === "destroyed") throw new Error("The context has been destroyed");
    if (!this.contextId) throw new Error("Context not initialized");
    if (!this.itemIds.has(e)) throw new Error("Item not found");
    this.updateQueueByItemId.set(e, { operation: "delete" });
  }
  async resetContextData(e) {
    const t = this.contextId;
    if (this.itemIds.clear(), this.updateQueueByItemId.clear(), this.status !== "updating") {
      if (!t) return ee("resetContextData() called with no contextId!"), void await this.backToIdle();
      try {
        this.status = "updating", await this.dataAdapter.resetItems(t, e);
      } catch (n) {
        ee(`Failed to reset context data: ${n}`);
      }
      this.updateQueueByItemId.clear(), e ? (this.itemIds.clear(), Object.keys(e).forEach((n) => {
        this.itemIds.add(n);
      })) : this.itemIds.clear(), await this.backToIdle();
    } else this.actionToPerformWhenIdle = "reset";
  }
  setItemData(e, t, n) {
    if (this.status === "destroyed") throw new Error("The context has been destroyed");
    this.updateQueueByItemId.set(e, { operation: "set", description: t, data: n }), this.itemIds.add(e);
  }
  updateItemData(e, t, n) {
    if (this.status === "destroyed") throw new Error("The context has been destroyed");
    if (n === void 0 && t === void 0) return;
    const s = this.updateQueueByItemId.get(e);
    if ((s == null ? void 0 : s.operation) === "delete") throw new Error("Item has been deleted");
    const o = n ?? (s == null ? void 0 : s.data) ?? void 0, i = t ?? (s == null ? void 0 : s.description) ?? void 0;
    this.updateQueueByItemId.set(e, { operation: "update", data: o, description: i });
  }
  async backToIdle() {
    this.status = "idle";
    const e = this.actionToPerformWhenIdle;
    this.actionToPerformWhenIdle = "none", e !== "flush" ? e !== "reset" || await this.resetContextData() : await this.flush();
  }
}
class Ha {
  constructor(e, t) {
    this.actionToPerformWhenIdle = "none", this.status = "idle", this.taskCallbacks = /* @__PURE__ */ new Map(), this.tasks = /* @__PURE__ */ new Set(), this.updateQueueByTaskId = /* @__PURE__ */ new Map(), this.contextId = e, this.adapter = t;
  }
  canRunTask(e) {
    return this.taskCallbacks.has(e);
  }
  async destroy() {
    return this.status === "destroyed" ? (ee("Context.TasksService.destroy() called on a state that has already been destroyed"), { success: !0 }) : (this.status = "updating", await this.unregisterAllTasks(), this.status = "destroyed", this.updateQueueByTaskId.clear(), this.tasks.clear(), { success: !0 });
  }
  async flush() {
    if (this.status === "updating") return void (this.actionToPerformWhenIdle = "flush");
    const e = this.updateQueueByTaskId.keys(), t = [], n = [], s = [];
    for (const i of e) {
      const a = this.updateQueueByTaskId.get(i);
      a && (a.operation !== "delete" ? a.operation !== "set" ? a.operation === "update" && n.push(i) : t.push(i) : s.push(i));
    }
    if (t.length === 0 && n.length === 0 && s.length === 0) return;
    this.status = "updating";
    const o = { ...this.buildUpdateObject(t), ...this.buildUpdateObject(n) };
    if (Object.keys(o).length > 0) try {
      const i = await this.adapter.updateTasks(this.contextId, o);
      if (i.success) for (const a of Object.keys(o)) {
        const u = this.updateQueueByTaskId.get(a);
        u && u.operation === "set" && (this.taskCallbacks.set(a, u.callback), this.updateQueueByTaskId.delete(a));
      }
      else ee(`Context.TasksService.flush() failed to register tasks for context ID ${this.contextId}
Error: ${i.error}`);
    } catch (i) {
      ee(`Context.TasksService.flush() failed to register tasks for context ID ${this.contextId}
Error: ${i}`);
    }
    if (s.length > 0) try {
      const i = await this.adapter.removeTasks(this.contextId, s);
      if (i.success) for (const a of s) this.taskCallbacks.delete(a), this.updateQueueByTaskId.delete(a);
      else ee(`Context.TasksService.flush() failed to unregister tasks for context ID ${this.contextId}
Error: ${i.error}`);
    } catch (i) {
      ee(`Context.TasksService.flush() failed to unregister tasks for context ID ${this.contextId}
Error: ${i}`);
    }
    await this.backToIdle();
  }
  hasTask(e) {
    return this.tasks.has(e);
  }
  async registerTask(e, t, n, s) {
    if (this.status === "destroyed") throw new Error("Context has been destroyed");
    if (this.tasks.has(e)) throw new Error(`A task with ID '${e}' already exists. Task IDs must be unique.`);
    this.updateQueueByTaskId.set(e, { operation: "set", description: t, paramDescriptions: s || [], callback: n }), this.tasks.add(e);
  }
  async resetContextData() {
    const e = this.contextId;
    if (this.tasks.clear(), this.taskCallbacks.clear(), this.updateQueueByTaskId.clear(), this.status !== "updating") {
      if (!e) return ee("resetContextData() called with no contextId!"), void await this.backToIdle();
      try {
        this.status = "updating", await this.unregisterAllTasks();
      } catch (t) {
        ee(`Failed to reset context data: ${t}`);
      }
      await this.backToIdle();
    } else this.actionToPerformWhenIdle = "reset";
  }
  async runTask(e, t) {
    if (this.status === "destroyed") throw new Error("Context has been destroyed");
    if (!this.tasks.has(e)) return { success: !1, error: `Task with ID ${e} not found` };
    const n = this.taskCallbacks.get(e);
    if (!n) return { success: !1, error: `The task with ID '${e}' has no callback. This is potential due to failed registration.` };
    try {
      return { success: !0, result: n(...t ?? []) };
    } catch (s) {
      return { success: !1, error: `${s}` };
    }
  }
  async unregisterAllTasks() {
    if (this.tasks.size === 0) return { success: !0 };
    const e = await this.adapter.resetTasks(this.contextId);
    return e.success && (this.tasks.clear(), this.taskCallbacks.clear(), this.updateQueueByTaskId.clear()), e;
  }
  async unregisterTask(e) {
    if (this.status === "destroyed") throw new Error("Context has been destroyed");
    return this.tasks.has(e) ? (this.tasks.delete(e), this.taskCallbacks.delete(e), this.updateQueueByTaskId.set(e, { operation: "delete" }), { success: !0 }) : { success: !0 };
  }
  async updateTaskCallback(e, t) {
    if (this.status === "destroyed") throw new Error("The context has been destroyed");
    if (!this.tasks.has(e)) throw new Error(`Task with ID ${e} not found`);
    this.taskCallbacks.set(e, t);
  }
  async updateTaskDescription(e, t) {
    if (this.status === "destroyed") throw new Error("The context has been destroyed");
    if (!this.tasks.has(e)) throw new Error(`Task with ID ${e} not found`);
    const n = this.updateQueueByTaskId.get(e);
    if (n) if (n.operation !== "update") {
      const s = { operation: "update", description: t };
      this.updateQueueByTaskId.set(e, s);
    } else n.description = t;
    else this.updateQueueByTaskId.set(e, { operation: "update", description: t });
  }
  async updateTaskParamDescriptions(e, t) {
    if (this.status === "destroyed") throw new Error("The context has been destroyed");
    if (!this.tasks.has(e)) throw new Error(`Task with ID ${e} not found`);
    const n = this.updateQueueByTaskId.get(e);
    if (n) if (n.operation !== "update") {
      const s = { operation: "update", paramDescriptions: t };
      this.updateQueueByTaskId.set(e, s);
    } else n.paramDescriptions = t;
    else this.updateQueueByTaskId.set(e, { operation: "update", paramDescriptions: t });
  }
  async backToIdle() {
    this.status = "idle";
    const e = this.actionToPerformWhenIdle;
    this.actionToPerformWhenIdle = "none", e !== "flush" ? e !== "reset" || await this.unregisterAllTasks() : await this.flush();
  }
  buildUpdateObject(e) {
    return e.reduce((t, n) => {
      const s = this.updateQueueByTaskId.get(n);
      if (!s) return t;
      if (s.operation === "set" && (t[n] = { description: s.description, paramDescriptions: s.paramDescriptions }), s.operation === "update" && (s.description !== void 0 || s.paramDescriptions !== void 0)) {
        const o = {};
        s.description !== void 0 && (o.description = s.description), s.paramDescriptions !== void 0 && (o.paramDescriptions = s.paramDescriptions), t[n] = o;
      }
      return t;
    }, {});
  }
}
class Na {
  constructor() {
    this.theDataAdapter = null, this.theDataSyncOptions = null, this.theDataSyncService = null, this.theStatus = "idle", this.theTasksAdapter = null, this.theTasksService = null, this.destroy = async () => {
      var e, t;
      return this.theStatus === "destroyed" || (this.theStatus = "destroyed", await Promise.all([(e = this.theDataSyncService) == null ? void 0 : e.destroy(), (t = this.theTasksService) == null ? void 0 : t.destroy()]), this.theDataSyncService = null, this.theTasksService = null, this.theDataAdapter = null, this.theTasksAdapter = null), { success: !0 };
    }, this.flush = async () => {
      var e, t;
      try {
        await ((e = this.theDataSyncService) == null ? void 0 : e.flush());
      } catch {
        return { success: !1, error: "Failed to flush context data" };
      }
      try {
        await ((t = this.theTasksService) == null ? void 0 : t.flush());
      } catch {
        return { success: !1, error: "Failed to flush context tasks" };
      }
      return { success: !0 };
    }, this.initialize = async (e) => {
      var t;
      if (this.theStatus === "initializing") return ee(`${this.constructor.name}.initialize() called while context is still initializing! You cannot initialize twice at the same time. Use ${this.constructor.name}.status or await ${this.constructor.name}.initialize() to make sure that the context is not initializing before calling this method.`), { success: !1, error: "Context is still initializing! Use AiContext.status to check the context status before calling this method." };
      if (this.theStatus === "syncing") return ee(`${this.constructor.name}.initialize() called on an already initialized context! Use ${this.constructor.name}.status to check the context status before calling this method. `), { success: !1, error: "Context already initialized! Use AiContext.status to check the context status before calling this method." };
      if (this.theStatus === "destroyed") return ee(`${this.constructor.name}.initialize() called on destroyed context! Use ${this.constructor.name}.status to check the context status before calling this method. When the context is destroyed, it cannot be used anymore and you should create a new context.`), { success: !1, error: "Context has been destroyed" };
      if (this.theStatus === "error") return ee(`${this.constructor.name}.initialize() called on a context in error state! Use ${this.constructor.name}.status to check the context status before calling this method. When the context is in error state, it cannot be used anymore and you should create a new context.`), { success: !1, error: "Context is in error state" };
      if (!this.theDataAdapter) return ee(`Adapter not set! You must set the adapter before initializing the context. Use ${this.constructor.name}.withAdapter() to set the adapter before calling this method.`), { success: !1, error: "Adapter not set" };
      this.theStatus = "initializing", this.theDataSyncService = new Fa(this.theDataAdapter);
      try {
        const n = await this.theDataSyncService.createContext(e);
        return this.status === "destroyed" ? (n.success && await ((t = this.theDataSyncService) == null ? void 0 : t.resetContextData()), { success: !1, error: "Context has been destroyed" }) : n.success ? this.contextId ? (this.theStatus = "syncing", this.theTasksAdapter ? this.theTasksService = new Ha(this.contextId, this.theTasksAdapter) : ee("Initializing nlux AiContext without tasks adapter. The context will not handle registering and executing tasks by AI. If you want to use tasks triggered by AI, you should provide an adapter that implements ContextAdapter interface [type ContextAdapter = ContextDataAdapter & ContextTasksAdapter]"), { success: !0, contextId: n.contextId }) : (this.theStatus = "error", { success: !1, error: "Failed to obtain context ID" }) : (this.theStatus = "error", { success: !1, error: "Failed to initialize context" });
      } catch (n) {
        return this.theStatus = "error", { success: !1, error: `${n}` };
      }
    }, this.observeState = (e, t, n) => {
      var s;
      if (this.theStatus !== "idle") if (this.theStatus !== "initializing") {
        if (this.theStatus !== "destroyed") return (s = this.theDataSyncService) == null || s.setItemData(e, t, n ?? null), { setData: (o) => {
          var i;
          (i = this.theDataSyncService) == null || i.updateItemData(e, void 0, o);
        }, setDescription: (o) => {
          var i;
          (i = this.theDataSyncService) == null || i.updateItemData(e, o, void 0);
        }, discard: () => {
          var o;
          (o = this.theDataSyncService) == null || o.removeItem(e);
        } };
        ee(`${this.constructor.name}.observeState() called on destroyed context! Use ${this.constructor.name}.status to check the context status before calling this method. When the context is destroyed, it cannot be used anymore and you should create a new context.`);
      } else ee(`${this.constructor.name}.observeState() called while context is still initializing! You cannot observe state items while the context is initializing. Use ${this.constructor.name}.status or await ${this.constructor.name}.initialize() to make sure that the context is not initializing before calling this method.`);
      else ee(`${this.constructor.name}.observeState() called on idle context! Use ${this.constructor.name}.status to check the context status before calling this method. Use ${this.constructor.name}.initialize() to initialize the context when it is not initialized.`);
    }, this.registerTask = (e, t, n, s) => {
      if (this.theStatus === "idle") return void ee(`${this.constructor.name}.registerTask() called on idle context! Use ${this.constructor.name}.status to check the context status before calling this method. Use ${this.constructor.name}.initialize() to initialize the context when it is not initialized.`);
      if (!this.theTasksService) return void ee(`${this.constructor.name}.registerTask() called on a context that has does not have tasks service! You should use an adapter that implements ContextTasksAdapter interface in order to register tasks. Use ${this.constructor.name}.withAdapter() to set the right adapter before calling this method.`);
      if (this.theStatus === "destroyed") return void ee(`${this.constructor.name}.registerTask() called on destroyed context! Use ${this.constructor.name}.status to check the context status before calling this method. When the context is destroyed, it cannot be used anymore and you should create a new context.`);
      let o = "updating";
      if (!this.theTasksService.hasTask(e)) return this.theTasksService.registerTask(e, t, n, s).then(() => {
        o === "updating" && (o = "set");
      }).catch(() => {
        ee(`${this.constructor.name}.registerTask() failed to register task '${e}'!
The task will be marked as deleted and will not be updated anymore.`), o === "updating" && (o = "deleted", this.unregisterTask(e));
      }), { discard: () => {
        o = "deleted", this.unregisterTask(e);
      }, setDescription: (i) => {
        var a;
        if (o === "deleted") throw new Error("Task has been deleted");
        o = "updating", (a = this.theTasksService) == null || a.updateTaskDescription(e, i).then(() => {
          o === "updating" && (o = "set");
        }).catch(() => {
          o === "updating" && (o = "set");
        });
      }, setCallback: (i) => {
        var a;
        if (o === "deleted") throw new Error("Task has been deleted");
        o = "updating", (a = this.theTasksService) == null || a.updateTaskCallback(e, i).then(() => {
          o === "updating" && (o = "set");
        }).catch(() => {
          o === "updating" && (o = "set");
        });
      }, setParamDescriptions: (i) => {
        var a;
        if (o === "deleted") throw new Error("Task has been deleted");
        o = "updating", (a = this.theTasksService) == null || a.updateTaskParamDescriptions(e, i).then(() => {
          o === "updating" && (o = "set");
        }).catch(() => {
          o === "updating" && (o = "set");
        });
      } };
      console.warn(`${this.constructor.name}.registerTask() called with existing taskId: ${e}! It's only possible to register a task once. Use ${this.constructor.name}.hasTask() to check if the task already exists. Use ${this.constructor.name}.registerTask() with a different taskId if you want to register a different task.`);
    }, this.reset = async (e) => {
      var t, n;
      if (!this.theDataSyncService) return ee(`${this.constructor.name}.reset() called on a state that has not been initialized! Use ${this.constructor.name}.initialize() to initialize the context before attempting any reset.`), { success: !1, error: "Context has not been initialized" };
      try {
        return await ((t = this.theDataSyncService) == null ? void 0 : t.resetContextData(e)), await ((n = this.theTasksService) == null ? void 0 : n.resetContextData()), this.theStatus = "syncing", { success: !0 };
      } catch (s) {
        return this.theStatus = "error", { success: !1, error: `${s}` };
      }
    }, this.runTask = async (e, t) => this.theTasksService ? this.theTasksService.runTask(e, t) : (ee(`${this.constructor.name}.runTask() called on a state that has not been initialized! Use ${this.constructor.name}.initialize() to initialize the context before attempting any task execution.`), Promise.resolve({ success: !1, error: "Context has not been initialized with tasks service. An adapter that implements ContextTasksAdapter interface should be provided to the context, and the context should be initialized before running any tasks." })), this.withAdapter = (e) => {
      if (this.theDataAdapter) throw new Error("Adapter already set");
      const t = typeof (e == null ? void 0 : e.build) == "function";
      this.theDataAdapter = t ? e.build() : e;
      const n = ((s) => {
        const o = s;
        return !(!o || typeof o.resetTasks != "function" || typeof o.updateTasks != "function" || typeof o.removeTasks != "function") && o;
      })(this.theDataAdapter);
      return n && (this.theTasksAdapter = n), this;
    }, this.withDataSyncOptions = (e) => {
      if (this.theDataSyncOptions) throw new Error("Data sync options already set");
      return this.theDataSyncOptions = { ...e }, this;
    }, this.unregisterTask = (e) => this.theTasksService ? this.theTasksService.unregisterTask(e) : (ee(`${this.constructor.name}.unregisterTask() called on a state that has not been initialized! Use ${this.constructor.name}.initialize() to initialize the context before attempting any task unregister.`), Promise.resolve({ success: !1, error: "Context has not been initialized" }));
  }
  get contextId() {
    var e;
    return ((e = this.theDataSyncService) == null ? void 0 : e.contextId) ?? null;
  }
  get status() {
    return this.theStatus;
  }
  hasItem(e) {
    var t;
    return ((t = this.theDataSyncService) == null ? void 0 : t.hasItemWithId(e)) ?? !1;
  }
  hasRunnableTask(e) {
    var t;
    return ((t = this.theTasksService) == null ? void 0 : t.canRunTask(e)) ?? !1;
  }
  hasTask(e) {
    var t;
    return ((t = this.theTasksService) == null ? void 0 : t.hasTask(e)) ?? !1;
  }
}
const Ss = () => new Na(), Ua = { "1k": 1e3, "10k": 1e4, "100k": 1e5, "1mb": 1e6, "10mb": 1e7 };
var As = Object.prototype.hasOwnProperty;
function Es(r, e) {
  for (let t of r.keys()) if (Ut(t, e)) return t;
}
function Ut(r, e) {
  var t, n, s;
  if (r === e) return !0;
  if (r && e && (t = r.constructor) === e.constructor) {
    if (t === Date) return r.getTime() === e.getTime();
    if (t === RegExp) return r.toString() === e.toString();
    if (t === Array) {
      if ((n = r.length) === e.length) for (; n-- && Ut(r[n], e[n]); ) ;
      return n === -1;
    }
    if (t === Set) {
      if (r.size !== e.size) return !1;
      for (n of r)
        if ((s = n) && typeof s == "object" && !(s = Es(e, s)) || !e.has(s)) return !1;
      return !0;
    }
    if (t === Map) {
      if (r.size !== e.size) return !1;
      for (n of r)
        if ((s = n[0]) && typeof s == "object" && !(s = Es(e, s)) || !Ut(n[1], e.get(s))) return !1;
      return !0;
    }
    if (t === ArrayBuffer) r = new Uint8Array(r), e = new Uint8Array(e);
    else if (t === DataView) {
      if ((n = r.byteLength) === e.byteLength) for (; n-- && r.getInt8(n) === e.getInt8(n); ) ;
      return n === -1;
    }
    if (ArrayBuffer.isView(r)) {
      if ((n = r.byteLength) === e.byteLength) for (; n-- && r[n] === e[n]; ) ;
      return n === -1;
    }
    if (!t || typeof r == "object") {
      for (t in n = 0, r)
        if (As.call(r, t) && ++n && !As.call(e, t) || !(t in e) || !Ut(r[t], e[t])) return !1;
      return Object.keys(e).length === n;
    }
  }
  return r != r && e != e;
}
const _a = (r) => {
  const e = /* @__PURE__ */ new Set();
  let t = !1, n = null, s = null;
  const o = () => {
    if (t || e.size === 0) return;
    t = !0;
    const a = e.values().next().value;
    e.delete(a), n = (({ message: u }) => {
      const l = document.createElement("div");
      l.classList.add("nlux-comp-exceptionItem");
      const c = document.createElement("span");
      return c.classList.add("nlux-comp-exp_itm_msg"), c.append(document.createTextNode(u)), l.append(c), l;
    })(a), r.append(n), s = setTimeout(i, 3e3);
  }, i = () => {
    n == null || n.classList.add("nlux-comp-exceptionItem--hiding"), s = setTimeout(() => {
      t = !1, n == null || n.remove(), n = null, o();
    }, 500);
  };
  return { displayException: (a) => {
    e.add({ message: a }), t || o();
  }, destroy: () => {
    e.clear(), n == null || n.remove(), s && clearTimeout(s);
  } };
}, tt = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (r) => {
  const e = 16 * Math.random() | 0;
  return (r == "x" ? e : 3 & e | 8).toString(16);
}), Le = (r) => {
  typeof r != "string" ? r && typeof r.toString == "function" ? console.warn(`[nlux] ${r.toString()}`) : console.warn("[nlux]") : console.warn(`[nlux] ${r}`);
}, Ts = [], Zt = (r) => {
  Ts.includes(r) || (Ts.push(r), Le(r));
}, qa = (r) => {
  const e = "nlux-chatSegment";
  return r === "complete" ? `${e} nlux-chatSegment--complete` : r === "error" ? `${e} nlux-chatSegment--error` : `${e} nlux-chatSegment--active`;
}, vr = { received: "nlux_msg_received", sent: "nlux_msg_sent" }, yr = { streaming: "nlux_msg_streaming", complete: "nlux_msg_complete" }, Is = (r) => {
  if (!(r instanceof HTMLButtonElement) || r.dataset.clickListenerSet === "true") return;
  let e = !1;
  const t = r.nextElementSibling;
  r.addEventListener("click", () => {
    if (e || !t) return;
    const n = t.innerText;
    navigator.clipboard.writeText(n ?? ""), e = !0, r.classList.add("clicked"), setTimeout(() => {
      e = !1, r.classList.remove("clicked");
    }, 1e3);
  }), r.dataset.clickListenerSet = "true";
}, qo = (r) => {
  const e = "nlux-comp-copyButton";
  r instanceof HTMLButtonElement && r.classList.contains(e) ? Is(r) : r.querySelectorAll(`.${e}`).forEach(Is);
};
function Ya() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
let mt = { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
function Ps(r) {
  mt = r;
}
var Wa = Object.defineProperty, Yo = (r, e, t) => ((n, s, o) => s in n ? Wa(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class _t {
  constructor(e) {
    Yo(this, "options"), this.options = e || mt;
  }
  postprocess(e) {
    return e;
  }
  preprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
}
Yo(_t, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]));
const Wo = /[&<>"']/, Qa = new RegExp(Wo.source, "g"), Qo = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Za = new RegExp(Qo.source, "g"), Xa = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Rs = (r) => Xa[r];
function Ue(r, e) {
  if (e) {
    if (Wo.test(r)) return r.replace(Qa, Rs);
  } else if (Qo.test(r)) return r.replace(Za, Rs);
  return r;
}
const Ka = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function Ga(r) {
  return r.replace(Ka, (e, t) => (t = t.toLowerCase()) === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "");
}
const Ja = /(^|[^\[])\^/g;
function be(r, e) {
  let t = typeof r == "string" ? r : r.source;
  e = e || "";
  const n = { replace: (s, o) => {
    let i = typeof o == "string" ? o : o.source;
    return i = i.replace(Ja, "$1"), t = t.replace(s, i), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
function Os(r) {
  try {
    r = encodeURI(r).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return r;
}
const qt = { exec: () => null };
function Ds(r, e) {
  const t = r.replace(/\|/g, (s, o, i) => {
    let a = !1, u = o;
    for (; --u >= 0 && i[u] === "\\"; ) a = !a;
    return a ? "|" : " |";
  }).split(/ \|/);
  let n = 0;
  if (t[0].trim() || t.shift(), t.length > 0 && !t[t.length - 1].trim() && t.pop(), e) if (t.length > e) t.splice(e);
  else for (; t.length < e; ) t.push("");
  for (; n < t.length; n++) t[n] = t[n].trim().replace(/\\\|/g, "|");
  return t;
}
function hn(r, e, t) {
  const n = r.length;
  if (n === 0) return "";
  let s = 0;
  for (; s < n; ) {
    const o = r.charAt(n - s - 1);
    if (o !== e || t) {
      if (o === e || !t) break;
      s++;
    } else s++;
  }
  return r.slice(0, n - s);
}
const en = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Zo = /(?:[*+-]|\d{1,9}[.)])/, Xo = be(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Zo).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Nr = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Ur = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Va = be(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Ur).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), ec = be(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Zo).getRegex(), $n = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", _r = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, tc = be("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", _r).replace("tag", $n).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), js = be(Nr).replace("hr", en).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", $n).getRegex(), qr = { blockquote: be(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", js).getRegex(), code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, def: Va, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hr: en, html: tc, lheading: Xo, list: ec, newline: /^(?: *(?:\n|$))+/, paragraph: js, table: qt, text: /^[^\n]+/ }, Bs = be("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", en).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", $n).getRegex(), nc = { ...qr, table: Bs, paragraph: be(Nr).replace("hr", en).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Bs).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", $n).getRegex() }, rc = { ...qr, html: be(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _r).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: qt, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: be(Nr).replace("hr", en).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Xo).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Ko = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Go = /^( {2,}|\\)\n(?!\s*$)/, tn = "\\p{P}\\p{S}", sc = be(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, tn).getRegex(), oc = be(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, tn).getRegex(), ic = be("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, tn).getRegex(), ac = be("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, tn).getRegex(), cc = be(/\\([punct])/, "gu").replace(/punct/g, tn).getRegex(), lc = be(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), uc = be(_r).replace("(?:-->|$)", "-->").getRegex(), dc = be("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", uc).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), In = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, pc = be(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", In).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ms = be(/^!?\[(label)\]\[(ref)\]/).replace("label", In).replace("ref", Ur).getRegex(), Ls = be(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ur).getRegex(), Yr = { _backpedal: qt, anyPunctuation: cc, autolink: lc, blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, br: Go, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, del: qt, emStrongLDelim: oc, emStrongRDelimAst: ic, emStrongRDelimUnd: ac, escape: Ko, link: pc, nolink: Ls, punctuation: sc, reflink: Ms, reflinkSearch: be("reflink|nolink(?!\\()", "g").replace("reflink", Ms).replace("nolink", Ls).getRegex(), tag: dc, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, url: qt }, hc = { ...Yr, link: be(/^!?\[(label)\]\((.*?)\)/).replace("label", In).getRegex(), reflink: be(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", In).getRegex() }, xr = { ...Yr, escape: be(Ko).replace("])", "~|])").getRegex(), url: be(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, mc = { ...xr, br: be(Go).replace("{2,}", "*").getRegex(), text: be(xr.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, mn = { normal: qr, gfm: nc, pedantic: rc }, Lt = { normal: Yr, gfm: xr, breaks: mc, pedantic: hc };
var fc = Object.defineProperty, Wn = (r, e, t) => ((n, s, o) => s in n ? fc(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
function zs(r, e, t, n) {
  const s = e.href, o = e.title ? Ue(e.title) : null, i = r[1].replace(/\\([\[\]])/g, "$1");
  if (r[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const a = { type: "link", raw: t, href: s, title: o, text: i, tokens: n.inlineTokens(i) };
    return n.state.inLink = !1, a;
  }
  return { type: "image", raw: t, href: s, title: o, text: Ue(i) };
}
class Pn {
  constructor(e) {
    Wn(this, "lexer"), Wn(this, "options"), Wn(this, "rules"), this.options = e || mt;
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, s;
      return t[2] === "@" ? (n = Ue(t[1]), s = "mailto:" + n) : (n = Ue(t[1]), s = n), { type: "link", raw: t[0], text: n, href: s, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      n = hn(n.replace(/^ *>[ \t]?/gm, ""), `
`);
      const s = this.lexer.state.top;
      this.lexer.state.top = !0;
      const o = this.lexer.blockTokens(n);
      return this.lexer.state.top = s, { type: "blockquote", raw: t[0], tokens: o, text: n };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const n = t[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : hn(n, `
`) };
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(n), o = /^ /.test(n) && / $/.test(n);
      return s && o && (n = n.substring(1, n.length - 1)), n = Ue(n, !0), { type: "codespan", raw: t[0], text: n };
    }
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const n = t[1].toLowerCase().replace(/\s+/g, " "), s = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", o = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: n, raw: t[0], href: s, title: o };
    }
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t) return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
  }
  emStrong(e, t, n = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (s && !(s[3] && n.match(/[\p{L}\p{N}]/u)) && (!(s[1] || s[2]) || !n || this.rules.inline.punctuation.exec(n))) {
      const o = [...s[0]].length - 1;
      let i, a, u = o, l = 0;
      const c = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, t = t.slice(-1 * e.length + o); (s = c.exec(t)) != null; ) {
        if (i = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !i) continue;
        if (a = [...i].length, s[3] || s[4]) {
          u += a;
          continue;
        }
        if ((s[5] || s[6]) && o % 3 && !((o + a) % 3)) {
          l += a;
          continue;
        }
        if (u -= a, u > 0) continue;
        a = Math.min(a, a + u + l);
        const d = [...s[0]][0].length, p = e.slice(0, o + s.index + d + a);
        if (Math.min(o, a) % 2) {
          const m = p.slice(1, -1);
          return { type: "em", raw: p, text: m, tokens: this.lexer.inlineTokens(m) };
        }
        const h = p.slice(2, -2);
        return { type: "strong", raw: p, text: h, tokens: this.lexer.inlineTokens(h) };
      }
    }
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: Ue(t[1]) };
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const n = t[0], s = function(o, i) {
        const a = o.match(/^(\s+)(?:```)/);
        if (a === null) return i;
        const u = a[1];
        return i.split(`
`).map((l) => {
          const c = l.match(/^\s+/);
          if (c === null) return l;
          const [d] = c;
          return d.length >= u.length ? l.slice(u.length) : l;
        }).join(`
`);
      }(n, t[3] || "");
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: s };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (/#$/.test(n)) {
        const s = hn(n, "#");
        this.options.pedantic ? n = s.trim() : s && !/ $/.test(s) || (n = s.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: t[0] };
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t)
      return { type: "html", block: !0, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] };
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      let n;
      return n = this.lexer.state.inRawBlock ? t[0] : Ue(t[0]), { type: "text", raw: t[0], text: n };
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t) return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const n = t[2].trim();
      if (!this.options.pedantic && /^</.test(n)) {
        if (!/>$/.test(n)) return;
        const i = hn(n.slice(0, -1), "\\");
        if ((n.length - i.length) % 2 == 0) return;
      } else {
        const i = function(a, u) {
          if (a.indexOf(u[1]) === -1) return -1;
          let l = 0;
          for (let c = 0; c < a.length; c++) if (a[c] === "\\") c++;
          else if (a[c] === u[0]) l++;
          else if (a[c] === u[1] && (l--, l < 0)) return c;
          return -1;
        }(t[2], "()");
        if (i > -1) {
          const a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + i;
          t[2] = t[2].substring(0, i), t[0] = t[0].substring(0, a).trim(), t[3] = "";
        }
      }
      let s = t[2], o = "";
      if (this.options.pedantic) {
        const i = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
        i && (s = i[1], o = i[3]);
      } else o = t[3] ? t[3].slice(1, -1) : "";
      return s = s.trim(), /^</.test(s) && (s = this.options.pedantic && !/>$/.test(n) ? s.slice(1) : s.slice(1, -1)), zs(t, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer);
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim();
      const s = n.length > 1, o = { type: "list", raw: "", ordered: s, start: s ? +n.slice(0, -1) : "", loose: !1, items: [] };
      n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = s ? n : "[*+-]");
      const i = new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let a = "", u = "", l = !1;
      for (; e; ) {
        let c = !1;
        if (!(t = i.exec(e)) || this.rules.block.hr.test(e)) break;
        a = t[0], e = e.substring(a.length);
        let d = t[2].split(`
`, 1)[0].replace(/^\t+/, (k) => " ".repeat(3 * k.length)), p = e.split(`
`, 1)[0], h = 0;
        this.options.pedantic ? (h = 2, u = d.trimStart()) : (h = t[2].search(/[^ ]/), h = h > 4 ? 1 : h, u = d.slice(h), h += t[1].length);
        let m = !1;
        if (!d && /^ *$/.test(p) && (a += p + `
`, e = e.substring(p.length + 1), c = !0), !c) {
          const k = new RegExp(`^ {0,${Math.min(3, h - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), y = new RegExp(`^ {0,${Math.min(3, h - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), x = new RegExp(`^ {0,${Math.min(3, h - 1)}}(?:\`\`\`|~~~)`), A = new RegExp(`^ {0,${Math.min(3, h - 1)}}#`);
          for (; e; ) {
            const w = e.split(`
`, 1)[0];
            if (p = w, this.options.pedantic && (p = p.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), x.test(p) || A.test(p) || k.test(p) || y.test(e)) break;
            if (p.search(/[^ ]/) >= h || !p.trim()) u += `
` + p.slice(h);
            else {
              if (m || d.search(/[^ ]/) >= 4 || x.test(d) || A.test(d) || y.test(d)) break;
              u += `
` + p;
            }
            m || p.trim() || (m = !0), a += w + `
`, e = e.substring(w.length + 1), d = p.slice(h);
          }
        }
        o.loose || (l ? o.loose = !0 : /\n *\n *$/.test(a) && (l = !0));
        let g, b = null;
        this.options.gfm && (b = /^\[[ xX]\] /.exec(u), b && (g = b[0] !== "[ ] ", u = u.replace(/^\[[ xX]\] +/, ""))), o.items.push({ type: "list_item", raw: a, task: !!b, checked: g, loose: !1, text: u, tokens: [] }), o.raw += a;
      }
      o.items[o.items.length - 1].raw = a.trimEnd(), o.items[o.items.length - 1].text = u.trimEnd(), o.raw = o.raw.trimEnd();
      for (let c = 0; c < o.items.length; c++) if (this.lexer.state.top = !1, o.items[c].tokens = this.lexer.blockTokens(o.items[c].text, []), !o.loose) {
        const d = o.items[c].tokens.filter((h) => h.type === "space"), p = d.length > 0 && d.some((h) => /\n.*\n/.test(h.raw));
        o.loose = p;
      }
      if (o.loose) for (let c = 0; c < o.items.length; c++) o.items[c].loose = !0;
      return o;
    }
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      const s = t[(n[2] || n[1]).replace(/\s+/g, " ").toLowerCase()];
      if (!s) {
        const o = n[0].charAt(0);
        return { type: "text", raw: o, text: o };
      }
      return zs(n, s, n[0], this.lexer);
    }
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2])) return;
    const n = Ds(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), o = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], i = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === s.length) {
      for (const a of s) /^ *-+: *$/.test(a) ? i.align.push("right") : /^ *:-+: *$/.test(a) ? i.align.push("center") : /^ *:-+ *$/.test(a) ? i.align.push("left") : i.align.push(null);
      for (const a of n) i.header.push({ text: a, tokens: this.lexer.inline(a) });
      for (const a of o) i.rows.push(Ds(a, i.header.length).map((u) => ({ text: u, tokens: this.lexer.inline(u) })));
      return i;
    }
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: t[0] };
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  url(e) {
    var n;
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let s, o;
      if (t[2] === "@") s = Ue(t[0]), o = "mailto:" + s;
      else {
        let i;
        do
          i = t[0], t[0] = ((n = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : n[0]) ?? "";
        while (i !== t[0]);
        s = Ue(t[0]), o = t[1] === "www." ? "http://" + t[0] : t[0];
      }
      return { type: "link", raw: t[0], text: s, href: o, tokens: [{ type: "text", raw: s, text: s }] };
    }
  }
}
var gc = Object.defineProperty, zt = (r, e, t) => ((n, s, o) => s in n ? gc(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class nt {
  constructor(e) {
    zt(this, "options"), zt(this, "state"), zt(this, "tokens"), zt(this, "inlineQueue"), zt(this, "tokenizer"), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || mt, this.options.tokenizer = this.options.tokenizer || new Pn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    const t = { block: mn.normal, inline: Lt.normal };
    this.options.pedantic ? (t.block = mn.pedantic, t.inline = Lt.pedantic) : this.options.gfm && (t.block = mn.gfm, this.options.breaks ? t.inline = Lt.breaks : t.inline = Lt.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: mn, inline: Lt };
  }
  static lex(e, t) {
    return new nt(t).lex(e);
  }
  static lexInline(e, t) {
    return new nt(t).inlineTokens(e);
  }
  blockTokens(e, t = []) {
    let n, s, o, i;
    for (e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, (a, u, l) => u + "    ".repeat(l.length)); e; ) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((a) => !!(n = a.call({ lexer: this }, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0)))) if (n = this.tokenizer.space(e)) e = e.substring(n.raw.length), n.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(n);
    else if (n = this.tokenizer.code(e)) e = e.substring(n.raw.length), s = t[t.length - 1], !s || s.type !== "paragraph" && s.type !== "text" ? t.push(n) : (s.raw += `
` + n.raw, s.text += `
` + n.text, this.inlineQueue[this.inlineQueue.length - 1].src = s.text);
    else if (n = this.tokenizer.fences(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.heading(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.hr(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.blockquote(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.list(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.html(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.def(e)) e = e.substring(n.raw.length), s = t[t.length - 1], !s || s.type !== "paragraph" && s.type !== "text" ? this.tokens.links[n.tag] || (this.tokens.links[n.tag] = { href: n.href, title: n.title }) : (s.raw += `
` + n.raw, s.text += `
` + n.raw, this.inlineQueue[this.inlineQueue.length - 1].src = s.text);
    else if (n = this.tokenizer.table(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.lheading(e)) e = e.substring(n.raw.length), t.push(n);
    else {
      if (o = e, this.options.extensions && this.options.extensions.startBlock) {
        let a = 1 / 0;
        const u = e.slice(1);
        let l;
        this.options.extensions.startBlock.forEach((c) => {
          l = c.call({ lexer: this }, u), typeof l == "number" && l >= 0 && (a = Math.min(a, l));
        }), a < 1 / 0 && a >= 0 && (o = e.substring(0, a + 1));
      }
      if (this.state.top && (n = this.tokenizer.paragraph(o))) s = t[t.length - 1], i && s.type === "paragraph" ? (s.raw += `
` + n.raw, s.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(n), i = o.length !== e.length, e = e.substring(n.raw.length);
      else if (n = this.tokenizer.text(e)) e = e.substring(n.raw.length), s = t[t.length - 1], s && s.type === "text" ? (s.raw += `
` + n.raw, s.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(n);
      else if (e) {
        const a = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(a);
          break;
        }
        throw new Error(a);
      }
    }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let n, s, o, i, a, u, l = e;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0) for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null; ) c.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; ) l = l.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(l)) != null; ) l = l.slice(0, i.index) + "++" + l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; ) if (a || (u = ""), a = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((c) => !!(n = c.call({ lexer: this }, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0)))) if (n = this.tokenizer.escape(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.tag(e)) e = e.substring(n.raw.length), s = t[t.length - 1], s && n.type === "text" && s.type === "text" ? (s.raw += n.raw, s.text += n.text) : t.push(n);
    else if (n = this.tokenizer.link(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(n.raw.length), s = t[t.length - 1], s && n.type === "text" && s.type === "text" ? (s.raw += n.raw, s.text += n.text) : t.push(n);
    else if (n = this.tokenizer.emStrong(e, l, u)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.codespan(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.br(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.del(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.autolink(e)) e = e.substring(n.raw.length), t.push(n);
    else if (this.state.inLink || !(n = this.tokenizer.url(e))) {
      if (o = e, this.options.extensions && this.options.extensions.startInline) {
        let c = 1 / 0;
        const d = e.slice(1);
        let p;
        this.options.extensions.startInline.forEach((h) => {
          p = h.call({ lexer: this }, d), typeof p == "number" && p >= 0 && (c = Math.min(c, p));
        }), c < 1 / 0 && c >= 0 && (o = e.substring(0, c + 1));
      }
      if (n = this.tokenizer.inlineText(o)) e = e.substring(n.raw.length), n.raw.slice(-1) !== "_" && (u = n.raw.slice(-1)), a = !0, s = t[t.length - 1], s && s.type === "text" ? (s.raw += n.raw, s.text += n.text) : t.push(n);
      else if (e) {
        const c = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(c);
          break;
        }
        throw new Error(c);
      }
    } else e = e.substring(n.raw.length), t.push(n);
    return t;
  }
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
}
var vc = Object.defineProperty, yc = (r, e, t) => ((n, s, o) => s in n ? vc(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, e + "", t);
class Rn {
  constructor(e) {
    yc(this, "options"), this.options = e || mt;
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  br() {
    return "<br>";
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  code(e, t, n) {
    var o;
    const s = (o = (t || "").match(/^\S*/)) == null ? void 0 : o[0];
    return e = e.replace(/\n$/, "") + `
`, s ? '<pre><code class="language-' + Ue(s) + '">' + (n ? e : Ue(e, !0)) + `</code></pre>
` : "<pre><code>" + (n ? e : Ue(e, !0)) + `</code></pre>
`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  heading(e, t, n) {
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  html(e, t) {
    return e;
  }
  image(e, t, n) {
    const s = Os(e);
    if (s === null) return n;
    let o = `<img src="${e = s}" alt="${n}"`;
    return t && (o += ` title="${t}"`), o += ">", o;
  }
  link(e, t, n) {
    const s = Os(e);
    if (s === null) return n;
    let o = '<a href="' + (e = s) + '"';
    return t && (o += ' title="' + t + '"'), o += ">" + n + "</a>", o;
  }
  list(e, t, n) {
    const s = t ? "ol" : "ul";
    return "<" + s + (t && n !== 1 ? ' start="' + n + '"' : "") + `>
` + e + "</" + s + `>
`;
  }
  listitem(e, t, n) {
    return `<li>${e}</li>
`;
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  tablecell(e, t) {
    const n = t.header ? "th" : "td";
    return (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e + `</${n}>
`;
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  text(e) {
    return e;
  }
}
class Wr {
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, n) {
    return "" + n;
  }
  image(e, t, n) {
    return "" + n;
  }
  br() {
    return "";
  }
}
var xc = Object.defineProperty, Qn = (r, e, t) => ((n, s, o) => s in n ? xc(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class rt {
  constructor(e) {
    Qn(this, "options"), Qn(this, "renderer"), Qn(this, "textRenderer"), this.options = e || mt, this.options.renderer = this.options.renderer || new Rn(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Wr();
  }
  static parse(e, t) {
    return new rt(t).parse(e);
  }
  static parseInline(e, t) {
    return new rt(t).parseInline(e);
  }
  parse(e, t = !0) {
    let n = "";
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
        const i = o, a = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (a !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(i.type)) {
          n += a || "";
          continue;
        }
      }
      switch (o.type) {
        case "space":
          continue;
        case "hr":
          n += this.renderer.hr();
          continue;
        case "heading": {
          const i = o;
          n += this.renderer.heading(this.parseInline(i.tokens), i.depth, Ga(this.parseInline(i.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const i = o;
          n += this.renderer.code(i.text, i.lang, !!i.escaped);
          continue;
        }
        case "table": {
          const i = o;
          let a = "", u = "";
          for (let c = 0; c < i.header.length; c++) u += this.renderer.tablecell(this.parseInline(i.header[c].tokens), { header: !0, align: i.align[c] });
          a += this.renderer.tablerow(u);
          let l = "";
          for (let c = 0; c < i.rows.length; c++) {
            const d = i.rows[c];
            u = "";
            for (let p = 0; p < d.length; p++) u += this.renderer.tablecell(this.parseInline(d[p].tokens), { header: !1, align: i.align[p] });
            l += this.renderer.tablerow(u);
          }
          n += this.renderer.table(a, l);
          continue;
        }
        case "blockquote": {
          const i = o, a = this.parse(i.tokens);
          n += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          const i = o, a = i.ordered, u = i.start, l = i.loose;
          let c = "";
          for (let d = 0; d < i.items.length; d++) {
            const p = i.items[d], h = p.checked, m = p.task;
            let g = "";
            if (p.task) {
              const b = this.renderer.checkbox(!!h);
              l ? p.tokens.length > 0 && p.tokens[0].type === "paragraph" ? (p.tokens[0].text = b + " " + p.tokens[0].text, p.tokens[0].tokens && p.tokens[0].tokens.length > 0 && p.tokens[0].tokens[0].type === "text" && (p.tokens[0].tokens[0].text = b + " " + p.tokens[0].tokens[0].text)) : p.tokens.unshift({ type: "text", text: b + " " }) : g += b + " ";
            }
            g += this.parse(p.tokens, l), c += this.renderer.listitem(g, m, !!h);
          }
          n += this.renderer.list(c, a, u);
          continue;
        }
        case "html": {
          const i = o;
          n += this.renderer.html(i.text, i.block);
          continue;
        }
        case "paragraph": {
          const i = o;
          n += this.renderer.paragraph(this.parseInline(i.tokens));
          continue;
        }
        case "text": {
          let i = o, a = i.tokens ? this.parseInline(i.tokens) : i.text;
          for (; s + 1 < e.length && e[s + 1].type === "text"; ) i = e[++s], a += `
` + (i.tokens ? this.parseInline(i.tokens) : i.text);
          n += t ? this.renderer.paragraph(a) : a;
          continue;
        }
        default: {
          const i = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return n;
  }
  parseInline(e, t) {
    t = t || this.renderer;
    let n = "";
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
        const i = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (i !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          n += i || "";
          continue;
        }
      }
      switch (o.type) {
        case "escape": {
          const i = o;
          n += t.text(i.text);
          break;
        }
        case "html": {
          const i = o;
          n += t.html(i.text);
          break;
        }
        case "link": {
          const i = o;
          n += t.link(i.href, i.title, this.parseInline(i.tokens, t));
          break;
        }
        case "image": {
          const i = o;
          n += t.image(i.href, i.title, i.text);
          break;
        }
        case "strong": {
          const i = o;
          n += t.strong(this.parseInline(i.tokens, t));
          break;
        }
        case "em": {
          const i = o;
          n += t.em(this.parseInline(i.tokens, t));
          break;
        }
        case "codespan": {
          const i = o;
          n += t.codespan(i.text);
          break;
        }
        case "br":
          n += t.br();
          break;
        case "del": {
          const i = o;
          n += t.del(this.parseInline(i.tokens, t));
          break;
        }
        case "text": {
          const i = o;
          n += t.text(i.text);
          break;
        }
        default: {
          const i = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return n;
  }
}
var Yt, $s, br, bc = Object.defineProperty, Jo = (r) => {
  throw TypeError(r);
}, Ge = (r, e, t) => ((n, s, o) => s in n ? bc(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t), wr = (r, e, t) => (((n, s, o) => {
  s.has(n) || Jo("Cannot " + o);
})(r, e, "access private method"), t);
Yt = /* @__PURE__ */ new WeakSet(), $s = function(r, e) {
  return (t) => {
    if (t.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
      const n = "<p>An error occurred:</p><pre>" + Ue(t.message + "", !0) + "</pre>";
      return e ? Promise.resolve(n) : n;
    }
    if (e) return Promise.reject(t);
    throw t;
  };
}, br = function(r, e) {
  return (t, n) => {
    const s = { ...n }, o = { ...this.defaults, ...s };
    this.defaults.async === !0 && s.async === !1 && (o.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), o.async = !0);
    const i = wr(this, Yt, $s).call(this, !!o.silent, !!o.async);
    if (t == null) return i(new Error("marked(): input parameter is undefined or null"));
    if (typeof t != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
    if (o.hooks && (o.hooks.options = o), o.async) return Promise.resolve(o.hooks ? o.hooks.preprocess(t) : t).then((a) => r(a, o)).then((a) => o.hooks ? o.hooks.processAllTokens(a) : a).then((a) => o.walkTokens ? Promise.all(this.walkTokens(a, o.walkTokens)).then(() => a) : a).then((a) => e(a, o)).then((a) => o.hooks ? o.hooks.postprocess(a) : a).catch(i);
    try {
      o.hooks && (t = o.hooks.preprocess(t));
      let a = r(t, o);
      o.hooks && (a = o.hooks.processAllTokens(a)), o.walkTokens && this.walkTokens(a, o.walkTokens);
      let u = e(a, o);
      return o.hooks && (u = o.hooks.postprocess(u)), u;
    } catch (a) {
      return i(a);
    }
  };
};
const dt = new class {
  constructor(...r) {
    var e, t, n;
    e = this, (t = Yt).has(e) ? Jo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ge(this, "Hooks", _t), Ge(this, "Lexer", nt), Ge(this, "Parser", rt), Ge(this, "Renderer", Rn), Ge(this, "TextRenderer", Wr), Ge(this, "Tokenizer", Pn), Ge(this, "defaults", { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null }), Ge(this, "options", this.setOptions), Ge(this, "parse", wr(this, Yt, br).call(this, nt.lex, rt.parse)), Ge(this, "parseInline", wr(this, Yt, br).call(this, nt.lexInline, rt.parseInline)), this.use(...r);
  }
  lexer(r, e) {
    return nt.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return rt.parse(r, e ?? this.defaults);
  }
  setOptions(r) {
    return this.defaults = { ...this.defaults, ...r }, this;
  }
  use(...r) {
    const e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return r.forEach((t) => {
      const n = { ...t };
      if (n.async = this.defaults.async || n.async || !1, t.extensions && (t.extensions.forEach((s) => {
        if (!s.name) throw new Error("extension name required");
        if ("renderer" in s) {
          const o = e.renderers[s.name];
          e.renderers[s.name] = o ? function(...i) {
            let a = s.renderer.apply(this, i);
            return a === !1 && (a = o.apply(this, i)), a;
          } : s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          const o = e[s.level];
          o ? o.unshift(s.tokenizer) : e[s.level] = [s.tokenizer], s.start && (s.level === "block" ? e.startBlock ? e.startBlock.push(s.start) : e.startBlock = [s.start] : s.level === "inline" && (e.startInline ? e.startInline.push(s.start) : e.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (e.childTokens[s.name] = s.childTokens);
      }), n.extensions = e), t.renderer) {
        const s = this.defaults.renderer || new Rn(this.defaults);
        for (const o in t.renderer) {
          if (!(o in s)) throw new Error(`renderer '${o}' does not exist`);
          if (o === "options") continue;
          const i = o, a = t.renderer[i], u = s[i];
          s[i] = (...l) => {
            let c = a.apply(s, l);
            return c === !1 && (c = u.apply(s, l)), c || "";
          };
        }
        n.renderer = s;
      }
      if (t.tokenizer) {
        const s = this.defaults.tokenizer || new Pn(this.defaults);
        for (const o in t.tokenizer) {
          if (!(o in s)) throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o)) continue;
          const i = o, a = t.tokenizer[i], u = s[i];
          s[i] = (...l) => {
            let c = a.apply(s, l);
            return c === !1 && (c = u.apply(s, l)), c;
          };
        }
        n.tokenizer = s;
      }
      if (t.hooks) {
        const s = this.defaults.hooks || new _t();
        for (const o in t.hooks) {
          if (!(o in s)) throw new Error(`hook '${o}' does not exist`);
          if (o === "options") continue;
          const i = o, a = t.hooks[i], u = s[i];
          _t.passThroughHooks.has(o) ? s[i] = (l) => {
            if (this.defaults.async) return Promise.resolve(a.call(s, l)).then((d) => u.call(s, d));
            const c = a.call(s, l);
            return u.call(s, c);
          } : s[i] = (...l) => {
            let c = a.apply(s, l);
            return c === !1 && (c = u.apply(s, l)), c;
          };
        }
        n.hooks = s;
      }
      if (t.walkTokens) {
        const s = this.defaults.walkTokens, o = t.walkTokens;
        n.walkTokens = function(i) {
          let a = [];
          return a.push(o.call(this, i)), s && (a = a.concat(s.call(this, i))), a;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  walkTokens(r, e) {
    var n, s;
    let t = [];
    for (const o of r) switch (t = t.concat(e.call(this, o)), o.type) {
      case "table": {
        const i = o;
        for (const a of i.header) t = t.concat(this.walkTokens(a.tokens, e));
        for (const a of i.rows) for (const u of a) t = t.concat(this.walkTokens(u.tokens, e));
        break;
      }
      case "list": {
        const i = o;
        t = t.concat(this.walkTokens(i.items, e));
        break;
      }
      default: {
        const i = o;
        (s = (n = this.defaults.extensions) == null ? void 0 : n.childTokens) != null && s[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((a) => {
          const u = i[a].flat(1 / 0);
          t = t.concat(this.walkTokens(u, e));
        }) : i.tokens && (t = t.concat(this.walkTokens(i.tokens, e)));
      }
    }
    return t;
  }
}();
function Te(r, e) {
  return dt.parse(r, e);
}
Te.options = Te.setOptions = function(r) {
  return dt.setOptions(r), Te.defaults = dt.defaults, Ps(Te.defaults), Te;
}, Te.getDefaults = Ya, Te.defaults = mt, Te.use = function(...r) {
  return dt.use(...r), Te.defaults = dt.defaults, Ps(Te.defaults), Te;
}, Te.walkTokens = function(r, e) {
  return dt.walkTokens(r, e);
}, Te.parseInline = dt.parseInline, Te.Parser = rt, Te.parser = rt.parse, Te.Renderer = Rn, Te.TextRenderer = Wr, Te.Lexer = nt, Te.lexer = nt.lex, Te.Tokenizer = Pn, Te.Hooks = _t, Te.parse = Te;
const Vo = (r, e) => {
  const { showCodeBlockCopyButton: t, markdownLinkTarget: n, syntaxHighlighter: s, htmlSanitizer: o } = e || {}, i = Te(r, { async: !1, breaks: !0 });
  if (typeof i != "string") throw new Error("Markdown parsing failed");
  const a = document.createElement("div");
  return a.innerHTML = o ? o(i) : i, a.querySelectorAll("pre").forEach((u) => {
    const l = document.createElement("div");
    l.className = "code-block";
    const c = u.querySelector("code");
    if (!c) {
      const m = u.innerHTML;
      return l.innerHTML = o ? o(m) : m, void u.replaceWith(l);
    }
    let d;
    for (let m = 0; m < c.classList.length; m++) {
      const g = c.classList[m];
      if (g.startsWith("language-")) {
        d = g.slice(9);
        break;
      }
    }
    const p = document.createElement("pre"), h = "<div>" + c.innerHTML + "</div>";
    if (p.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(h) : h, d && (p.setAttribute("data-language", d), s)) {
      const m = "<div>" + s.createHighlighter()(c.textContent || "", d) + "</div>";
      p.innerHTML = o ? o(m) : m, p.className = "highlighter-dark";
    }
    ((m) => {
      m.replaceChildren();
    })(l), l.appendChild(p), u.replaceWith(l);
  }), t !== !1 && a.querySelectorAll(".code-block").forEach((u) => {
    var p;
    if (!u.querySelector("pre") || (p = u.previousElementSibling) != null && p.classList.contains("nlux-comp-copyButton")) return;
    const l = "Copy code block to clipboard", c = document.createElement("button");
    c.classList.add("nlux-comp-copyButton"), c.setAttribute("aria-label", l), c.setAttribute("title", l);
    const d = document.createElement("span");
    d.classList.add("icon-copy"), c.appendChild(d), u.appendChild(c);
  }), n !== "self" && a.querySelectorAll("a").forEach((u) => {
    u.setAttribute("target", "_blank");
  }), a.innerHTML;
}, ei = "nlux-comp-message", Fs = { received: "nlux-comp-chatItem--received", sent: "nlux-comp-chatItem--sent" }, wc = "nlux-comp-chatItem--bubblesLayout", kc = "nlux-comp-chatItem--listLayout", Cc = (r, e) => {
  let t = !1;
  const { onComplete: n } = e || {}, s = [], o = (e != null && e.skipStreamingAnimation ? "timeout" : "animationFrame") == "timeout" ? (d) => setTimeout(d, 0) : (d) => requestAnimationFrame(d), i = document.createElement("div");
  i.classList.add("md-in-progress"), r.append(i);
  const a = () => {
    for (; i.firstChild; ) {
      const d = i.firstChild;
      d instanceof HTMLElement && qo(d), i.before(d);
    }
  }, u = !(e != null && e.skipStreamingAnimation) && (e != null && e.streamingAnimationSpeed) && e.streamingAnimationSpeed >= 0 ? e.streamingAnimationSpeed : e != null && e.skipStreamingAnimation ? 0 : 8, l = { timeSinceLastProcessing: (/* @__PURE__ */ new Date()).getTime(), currentMarkdown: "", previousHtml: void 0 };
  let c = setInterval(() => {
    const d = (/* @__PURE__ */ new Date()).getTime(), p = (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) !== "never";
    if (s.length === 0 && p) {
      const m = typeof (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) == "number" ? e.waitTimeBeforeStreamCompletion : 2e3;
      return void ((t || d - l.timeSinceLastProcessing > m) && (t = !0, c && (clearInterval(c), c = void 0), a(), i.remove(), n == null ? void 0 : n()));
    }
    l.timeSinceLastProcessing = d;
    const h = s.shift();
    h !== void 0 && typeof h == "string" && o(() => {
      const m = l.currentMarkdown + h, g = Vo(m, e).trim();
      if (typeof g != "string") return l.currentMarkdown = l.currentMarkdown.slice(0, -h.length), void Le("Markdown parsing failed");
      if (l.previousHtml && g.length > l.previousHtml.length && g.startsWith(l.previousHtml)) {
        a();
        const b = g.slice(l.previousHtml.length).trim();
        i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(b) : b, l.currentMarkdown = h, l.previousHtml = void 0;
      } else i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(g) : g, l.currentMarkdown = m, l.previousHtml = g;
    });
  }, u);
  return { next: (d) => {
    if (t) Le("Stream is already complete. No more chunks can be added");
    else for (const p of d) s.push(p);
  }, complete: () => {
    s.push(`
`), t = !0;
  }, cancel: () => {
    c && (clearInterval(c), c = void 0), t = !0, i.remove();
  }, error: () => {
    t = !0;
  } };
}, Sc = function(r, e) {
  const { uid: t, status: n, responseRenderer: s, markdownOptions: o, initialMarkdownMessage: i, markdownContainersController: a } = r, [u, l] = ye([]), c = ue(null), d = ue(null), p = ue(null), h = ue(null), [m, g] = ye();
  te(() => {
    c.current !== d.current && (d.current = c.current, g(c.current || void 0));
  }), te(() => {
    if (m) {
      const k = a.getStreamingDomElement(t);
      m.append(k);
    }
  }, [m]), te(() => {
    h.current = (k) => {
      l((y) => [...y, k]);
    };
  }, [l]), te(() => {
    const k = a.getStreamingDomElement(t);
    return p.current = Cc(k, { syntaxHighlighter: o == null ? void 0 : o.syntaxHighlighter, htmlSanitizer: o == null ? void 0 : o.htmlSanitizer, markdownLinkTarget: o == null ? void 0 : o.markdownLinkTarget, showCodeBlockCopyButton: o == null ? void 0 : o.showCodeBlockCopyButton, skipStreamingAnimation: o == null ? void 0 : o.skipStreamingAnimation, streamingAnimationSpeed: o == null ? void 0 : o.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: o == null ? void 0 : o.waitTimeBeforeStreamCompletion, onComplete: o == null ? void 0 : o.onStreamComplete }), i && p.current.next(i), () => {
      a.deleteStreamingDomElement(t);
    };
  }, []), te(() => () => {
    d.current = null, p.current = null, h.current = null, g(void 0);
  }, []), Gt(e, () => ({ streamChunk: (k) => {
    var y, x;
    h.current && ((y = h.current) == null || y.call(h, k)), typeof k == "string" && ((x = p.current) == null || x.next(k));
  }, completeStream: () => {
    var k;
    (k = p.current) == null || k.complete();
  }, cancelStream: () => {
    var k;
    (k = p.current) == null || k.cancel();
  } }), []);
  const b = s || void 0;
  return v.jsxs("div", { className: `${ei} ${yr[n]} ${vr.received}`, children: [b && v.jsx(b, { uid: t, status: n, containerRef: c, content: u, contentType: "text", serverResponse: [], dataTransferMode: "stream" }), !b && v.jsx("div", { className: "nlux-markdownStream-root", ref: c })] });
}, ti = (r, e) => {
  if (!e || e === "Enter") {
    const t = r.key === "Enter" && !r.nativeEvent.isComposing, n = r.altKey || r.ctrlKey || r.metaKey || r.shiftKey;
    return t && !n;
  }
  return !!(e === "CommandEnter" && r.key === "Enter" && (r.getModifierState("Control") || r.getModifierState("Meta")));
}, Ac = (r) => {
  const { markdownOptions: e } = r, t = ue(null), n = G(() => r.content ? Vo(r.content, { syntaxHighlighter: e == null ? void 0 : e.syntaxHighlighter, htmlSanitizer: e == null ? void 0 : e.htmlSanitizer, markdownLinkTarget: e == null ? void 0 : e.markdownLinkTarget, showCodeBlockCopyButton: e == null ? void 0 : e.showCodeBlockCopyButton }) : "", [r.content, e == null ? void 0 : e.markdownLinkTarget, e == null ? void 0 : e.syntaxHighlighter, e == null ? void 0 : e.htmlSanitizer, e == null ? void 0 : e.showCodeBlockCopyButton]);
  te(() => {
    t.current && (e == null ? void 0 : e.showCodeBlockCopyButton) !== !1 && qo(t.current);
  }, [n, t.current, e == null ? void 0 : e.showCodeBlockCopyButton]);
  const s = G(() => e != null && e.htmlSanitizer ? e.htmlSanitizer(n) : n, [n, e == null ? void 0 : e.htmlSanitizer]), o = ve((l) => {
    if (!r.canResubmit) return;
    const c = l.currentTarget.textContent;
    return c ? ti(l, r.submitShortcutKey) ? (l.preventDefault(), void (r.onResubmit && r.onResubmit(c))) : void (l.key === "Escape" && (l.preventDefault(), l.currentTarget.textContent = r.content, l.currentTarget.blur())) : void 0;
  }, [r.canResubmit, r.onResubmit, r.content]), i = ve((l) => {
    r.canResubmit && (l.preventDefault(), l.currentTarget.textContent = r.content, l.currentTarget.blur());
  }, [r.canResubmit, r.content]), a = ve((l) => {
    if (!r.canResubmit) return;
    l.preventDefault();
    const c = document.createRange();
    c.selectNodeContents(l.currentTarget);
    const d = window.getSelection();
    d == null || d.removeAllRanges(), d == null || d.addRange(c);
  }, [r.canResubmit]), u = r.canResubmit ? "editable-markdown-container" : "";
  return v.jsx(ni, { children: v.jsx("div", { className: "nlux-markdownStream-root" + (u ? ` ${u}` : ""), children: v.jsx("div", { className: "nlux-markdown-container", ref: t, dangerouslySetInnerHTML: { __html: s }, contentEditable: r.canResubmit, onKeyDown: o, onBlur: i, onFocus: a }) }) });
};
class ni extends Mi {
  constructor() {
    super(...arguments), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(e) {
    Le("Markdown rendering error occurred. This could be due to a malformed markdown content, or it could be because the page requires an HTML sanitizer. Please check the error message for more details and consider configuring NLUX with a compatible sanitizer."), this.props.onMarkdownRenderingError && this.props.onMarkdownRenderingError(e);
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}
const kr = (r) => v.jsx(ni, { children: v.jsx(Ac, { ...r }) }), ri = (r) => {
  const e = typeof r.avatar == "string", t = !e && Wt(r.avatar);
  return v.jsxs("div", { className: "nlux-comp-avatar", children: [t && r.avatar, !t && e && v.jsx("div", { className: "nlux-comp-avatarContainer", children: r.avatar && v.jsx("div", { className: "nlux-comp-avatarPicture", style: { backgroundImage: `url("${encodeURI(r.avatar)}")` } }) })] });
}, Ec = function(r, e) {
  var k, y, x, A, w, R, M, F;
  const t = ue(null);
  Gt(e, () => ({ streamChunk: (T) => setTimeout(() => {
    var I;
    return (I = t == null ? void 0 : t.current) == null ? void 0 : I.streamChunk(T);
  }), completeStream: () => setTimeout(() => {
    var T;
    return (T = t == null ? void 0 : t.current) == null ? void 0 : T.completeStream();
  }), cancelStream: () => {
    var T;
    return (T = t == null ? void 0 : t.current) == null ? void 0 : T.cancelStream();
  } }), []);
  const n = r.contentType === "server-component", s = r.direction === "received", o = r.direction === "sent", i = r.dataTransferMode === "stream", a = r.isPartOfInitialSegment, u = ve(() => {
    var T;
    return (T = r.onMarkdownStreamRendered) == null ? void 0 : T.call(r, r.uid);
  }, [r.uid]);
  te(() => {
    var T;
    i || n || a || ((T = r.onMarkdownStreamRendered) == null || T.call(r, r.uid));
  }, []);
  const l = function(T) {
    const { uid: I, status: _, dataTransferMode: D, contentType: z, fetchedContent: B, streamedContent: X, streamedServerResponse: re, fetchedServerResponse: oe, direction: le, messageOptions: N } = T;
    if ((N == null ? void 0 : N.responseRenderer) !== void 0) {
      if (D === "stream") {
        const H = { uid: I, status: _, dataTransferMode: D, contentType: z, content: X ?? [], serverResponse: re ?? [] };
        return () => {
          const q = N.responseRenderer;
          return v.jsx(q, { ...H });
        };
      }
      const S = Wt(B), O = { uid: I, status: "complete", dataTransferMode: D, contentType: z, content: B ? S ? [] : [B] : [], serverComponent: S ? B : void 0, serverResponse: oe ? [oe] : [] };
      return () => {
        const H = N.responseRenderer;
        return v.jsx(H, { ...O });
      };
    }
    if (le === "sent") {
      if (typeof B == "string") {
        const S = B;
        return () => v.jsx(v.Fragment, { children: S });
      }
      return () => "";
    }
    if (typeof B == "string") {
      const S = B;
      return () => v.jsx(kr, { messageUid: I, content: S, markdownOptions: { syntaxHighlighter: N == null ? void 0 : N.syntaxHighlighter, htmlSanitizer: N == null ? void 0 : N.htmlSanitizer, markdownLinkTarget: N == null ? void 0 : N.markdownLinkTarget, showCodeBlockCopyButton: N == null ? void 0 : N.showCodeBlockCopyButton, skipStreamingAnimation: N == null ? void 0 : N.skipStreamingAnimation } });
    }
    return Wt(B) ? () => v.jsx(v.Fragment, { children: B }) : () => "";
  }(r), c = function(T) {
    var I;
    return ve(() => {
      var D, z, B;
      if (((D = T.messageOptions) == null ? void 0 : D.promptRenderer) === void 0) return v.jsx(kr, { messageUid: T.uid, content: T.fetchedContent, markdownOptions: { htmlSanitizer: (z = T.messageOptions) == null ? void 0 : z.htmlSanitizer }, canResubmit: (B = T.messageOptions) == null ? void 0 : B.editableUserMessages, submitShortcutKey: T.submitShortcutKey, onResubmit: (X) => {
        T.onPromptResubmit && T.onPromptResubmit(X);
      } });
      const _ = T.messageOptions.promptRenderer;
      return v.jsx(_, { uid: T.uid, prompt: T.fetchedContent, onResubmit: (X) => {
        T.onPromptResubmit && T.onPromptResubmit(X);
      } });
    }, [(I = T.messageOptions) == null ? void 0 : I.promptRenderer, T.fetchedContent, T.uid]);
  }(r), d = G(() => Kt(Sc), []), p = function(T) {
    const I = G(() => v.jsxs("div", { className: "nlux-comp-chatItem-participantInfo", children: [T.avatar !== void 0 && v.jsx(ri, { name: T.name, avatar: T.avatar }), v.jsx("span", { className: "nlux-comp-chatItem-participantName", children: T.name })] }), [T.avatar, T.name]);
    return () => v.jsx(v.Fragment, { children: I });
  }(r), h = `nlux-comp-chatItem ${r.direction ? Fs[r.direction] : Fs.received} ${r.layout === "bubbles" ? wc : kc}`, m = r.status ? yr[r.status] : yr.rendered, g = r.direction ? vr[r.direction] : vr.received, b = `${ei} ${m} ${g}`;
  return v.jsxs("div", { className: h, children: [v.jsx(p, {}), s && i && !n && v.jsx(d, { uid: r.uid, status: r.status, ref: t, direction: r.direction, responseRenderer: (k = r.messageOptions) == null ? void 0 : k.responseRenderer, markdownContainersController: r.markdownContainersController, markdownOptions: { syntaxHighlighter: (y = r.messageOptions) == null ? void 0 : y.syntaxHighlighter, htmlSanitizer: (x = r.messageOptions) == null ? void 0 : x.htmlSanitizer, markdownLinkTarget: (A = r.messageOptions) == null ? void 0 : A.markdownLinkTarget, showCodeBlockCopyButton: (w = r.messageOptions) == null ? void 0 : w.showCodeBlockCopyButton, skipStreamingAnimation: (R = r.messageOptions) == null ? void 0 : R.skipStreamingAnimation, streamingAnimationSpeed: (M = r.messageOptions) == null ? void 0 : M.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: (F = r.messageOptions) == null ? void 0 : F.waitTimeBeforeStreamCompletion, onStreamComplete: u } }, "do-not-change"), s && i && n && v.jsx("div", { className: b, children: r.fetchedContent }), s && !i && v.jsx("div", { className: b, children: v.jsx(l, {}) }), o && v.jsx("div", { className: b, children: v.jsx(c, {}) })] });
}, Hs = (r) => typeof r == "string" || typeof r == "number" || typeof r == "boolean" || r == null, fn = (r, e) => {
  var t, n;
  return r === "assistant" ? ((t = e == null ? void 0 : e.assistant) == null ? void 0 : t.name) ?? "Assistant" : r === "user" ? ((n = e == null ? void 0 : e.user) == null ? void 0 : n.name) ?? "User" : "";
}, gn = (r, e) => {
  var t, n;
  return r === "assistant" ? (t = e == null ? void 0 : e.assistant) == null ? void 0 : t.avatar : r === "user" ? (n = e == null ? void 0 : e.user) == null ? void 0 : n.avatar : void 0;
}, Tc = function(r, e) {
  const { chatSegment: t, containerRef: n } = r, [s, o] = ye(!1), i = G(() => /* @__PURE__ */ new Map(), []), a = G(() => /* @__PURE__ */ new Map(), []), u = ue(/* @__PURE__ */ new Map()), l = ue(/* @__PURE__ */ new Map());
  ((h, m, g, b) => {
    te(() => {
      if (h.length === 0) return b.clear(), m.current.clear(), void g.current.clear();
      const k = new Set(b.keys()), y = new Set(h.map((x) => x.uid));
      k.forEach((x) => {
        y.has(x) || b.delete(x);
      }), new Set(m.current.keys()).forEach((x) => {
        y.has(x) || (m.current.delete(x), g.current.delete(x));
      });
    }, [h]);
  })(t.items, u, l, i), Gt(e, () => ({ streamChunk: (h, m) => {
    const g = i.get(h);
    if (g != null && g.current) {
      const b = g.current.streamChunk;
      (a.get(h) ?? []).forEach((k) => {
        b(k);
      }), a.delete(h), b(m);
    } else {
      const b = a.get(h) ?? [];
      a.set(h, [...b, m]);
    }
  }, completeStream: (h) => {
    const m = i.get(h);
    m != null && m.current ? (m.current.completeStream(), i.delete(h)) : o(!0);
  }, cancelStreams: () => {
    a.clear(), i.forEach((h) => {
      var m;
      (m = h.current) == null || m.cancelStream();
    });
  } }), []), te(() => {
    a.size > 0 && a.forEach((h, m) => {
      const g = i.get(m);
      g != null && g.current && (h.forEach((b) => {
        var k;
        (k = g == null ? void 0 : g.current) == null || k.streamChunk(b);
      }), a.delete(m), s && (g.current.completeStream(), o(!1)));
    });
  });
  const c = G(() => t.status !== "active" ? null : v.jsx("div", { className: "nlux-chatSegment-loader-container", children: r.Loader }), [t.status, r.Loader]), d = G(() => Kt(Ec), []), p = ve((h) => {
    var m;
    (m = r.onMarkdownStreamRendered) == null || m.call(r, t.uid, h);
  }, []);
  return t.items.length === 0 ? null : v.jsxs("div", { ref: n, className: qa(t.status), children: [t.items.map((h) => Ic(r, d, t, h, i, l, u, p)), c] });
}, Ic = function(r, e, t, n, s, o, i, a) {
  var p;
  const u = r.isInitialSegment;
  let l = s.get(n.uid);
  l || (l = sr(), s.set(n.uid, l));
  let c = n.content, d = "text";
  if (typeof c == "function") {
    const h = o.current.get(n.uid), m = i.current.get(n.uid);
    if (h && m) c = m, d = "server-component";
    else {
      i.current.delete(n.uid), o.current.delete(n.uid);
      try {
        const g = c;
        if (c = v.jsx(g, {}), !c || !_e.isValidElement(c)) throw new Error("Invalid React element returned from the AI chat content function.");
        d = "server-component", i.current.set(n.uid, c), o.current.set(n.uid, g);
      } catch {
        return Le(`The type of the AI chat content is an invalid function.
If you're looking to render a React Server Components, please refer to docs.nlkit.com/nlux for more information.
`), null;
      }
    }
  }
  if (n.participantRole === "user") return n.status !== "complete" ? (Zt(`User chat item should be always be in complete state — Current status: ${n.status} — Segment UID: ${t.uid}`), null) : Hs(c) ? v.jsx(e, { ref: l, uid: n.uid, status: "complete", direction: "sent", contentType: d, dataTransferMode: "batch", fetchedContent: n.content, markdownContainersController: r.markdownContainersController, layout: r.layout, messageOptions: r.messageOptions, isPartOfInitialSegment: u, name: fn(n.participantRole, r.personaOptions), avatar: gn(n.participantRole, r.personaOptions), submitShortcutKey: r.submitShortcutKey, onPromptResubmit: (h) => r.onPromptResubmit(r.chatSegment.uid, n.uid, h) }, n.uid) : (Zt(`User chat item should have primitive content (string, number, boolean, null) — Current content: ${JSON.stringify(c)} — Segment UID: ${t.uid}`), null);
  if (n.status === "complete") return n.dataTransferMode === "stream" ? v.jsx(e, { ref: l, uid: n.uid, status: n.status, direction: "received", contentType: d, dataTransferMode: n.dataTransferMode, markdownContainersController: r.markdownContainersController, onMarkdownStreamRendered: a, streamedContent: c, streamedServerResponse: n.serverResponse, layout: r.layout, messageOptions: r.messageOptions, isPartOfInitialSegment: u, name: fn(n.participantRole, r.personaOptions), avatar: gn(n.participantRole, r.personaOptions) }, n.uid) : d !== "text" || Hs(c) || (p = r.messageOptions) != null && p.responseRenderer ? v.jsx(e, { ref: l, uid: n.uid, status: "complete", direction: "received", contentType: d, dataTransferMode: n.dataTransferMode, markdownContainersController: r.markdownContainersController, onMarkdownStreamRendered: a, fetchedContent: c, fetchedServerResponse: n.serverResponse, layout: r.layout, messageOptions: r.messageOptions, isPartOfInitialSegment: u, name: fn(n.participantRole, r.personaOptions), avatar: gn(n.participantRole, r.personaOptions) }, n.uid) : (Le(`When the type of the AI chat content is not primitive (object or array), a custom renderer must be provided — Current content: ${JSON.stringify(c)} — Segment UID: ${t.uid}`), null);
  if (n.status === "streaming") {
    const h = d === "server-component" && Wt(c) ? c : void 0;
    return v.jsx(e, { ref: l, uid: n.uid, status: "streaming", direction: "received", contentType: d, dataTransferMode: n.dataTransferMode, markdownContainersController: r.markdownContainersController, onMarkdownStreamRendered: a, fetchedContent: h, layout: r.layout, messageOptions: r.messageOptions, isPartOfInitialSegment: u, name: fn(n.participantRole, r.personaOptions), avatar: gn(n.participantRole, r.personaOptions) }, n.uid);
  }
}, Pc = function(r, e) {
  const { segments: t, personaOptions: n, conversationOptions: s, onLastActiveSegmentChange: o } = r, i = sr();
  (function(c, d, p) {
    const h = G(() => {
      const g = c.length > 0 ? c[c.length - 1] : void 0;
      return (g == null ? void 0 : g.status) === "active" ? g.uid : void 0;
    }, [c]), m = ue(void 0);
    te(() => {
      if (!p) return;
      const g = m.current;
      if (h === (g == null ? void 0 : g.uid) && d.current === (g == null ? void 0 : g.div)) return;
      const b = h && d.current ? { uid: h, div: d.current } : void 0;
      (b || m.current) && (p(b), m.current = b);
    });
  })(t, i, o);
  const a = function(c) {
    const d = G(() => /* @__PURE__ */ new Map(), []);
    return te(() => {
      if (c.length === 0) return void d.clear();
      const p = new Set(d.keys()), h = new Set(c.map((m) => m.uid));
      p.forEach((m) => {
        h.has(m) || d.delete(m);
      });
    }, [c]), { get: (p) => {
      var h;
      return (h = d.get(p)) == null ? void 0 : h.current;
    }, getRef: (p) => d.get(p), set: (p, h) => {
      d.set(p, h);
    }, remove: (p) => {
      d.delete(p);
    } };
  }(t), u = ((c) => G(() => {
    return d = c == null ? void 0 : c.layout, d ?? "bubbles";
    var d;
  }, [c == null ? void 0 : c.layout]))(s);
  Gt(e, () => ({ streamChunk: (c, d, p) => {
    const h = a.get(c);
    h == null || h.streamChunk(d, p);
  }, completeStream: (c, d) => {
    const p = a.get(c);
    p == null || p.completeStream(d);
  }, cancelSegmentStreams: (c) => {
    const d = a.get(c);
    d == null || d.cancelStreams();
  } }), []);
  const l = G(() => Kt(Tc), []);
  return v.jsx("div", { className: "nlux-chatSegments-container", children: t.map((c, d) => {
    const p = d === t.length - 1, h = c.uid === "initial";
    let m = a.getRef(c.uid);
    return m || (m = sr(), a.set(c.uid, m)), v.jsx(l, { ref: m, containerRef: p ? i : void 0, markdownContainersController: r.markdownContainersController, chatSegment: c, isInitialSegment: h, layout: u, personaOptions: n, messageOptions: r.messageOptions, Loader: r.Loader, submitShortcutKey: r.submitShortcutKey, onPromptResubmit: r.onPromptResubmit, onMarkdownStreamRendered: r.onMarkdownStreamRendered }, c.uid);
  }) });
}, Rc = { typing: "nlux-composer--typing", "submitting-prompt": "nlux-composer--submitting", "submitting-conversation-starter": "nlux-composer--submitting", waiting: "nlux-composer--waiting" }, Oc = () => v.jsx("div", { className: "nlux-comp-cancelIcon", children: v.jsx("div", { className: "nlux-comp-cancelIcon-container" }) }), Dc = () => v.jsx("div", { className: "nlux-comp-sendIcon", children: v.jsx("div", { className: "nlux-comp-sendIcon-container" }) }), Zn = ["submitting-prompt", "submitting-edit", "submitting-conversation-starter", "submitting-external-message"], jc = (r) => {
  const e = `nlux-comp-composer ${Rc[r.status] || ""}`, t = Zn.includes(r.status), n = !r.hasValidInput || r.status === "waiting" || Zn.includes(r.status), s = r.status === "typing" || r.status === "waiting", o = r.hideStopButton !== !0 && (Zn.includes(r.status) || r.status === "waiting"), i = ue(null);
  te(() => {
    r.status === "typing" && r.autoFocus && i.current && i.current.focus();
  }, [r.status, r.autoFocus, i.current]);
  const a = G(() => (c) => {
    var d;
    (d = r.onChange) == null || d.call(r, c.target.value);
  }, [r.onChange]), u = G(() => () => {
    var c;
    (c = r.onSubmit) == null || c.call(r);
  }, [r.onSubmit]), l = G(() => (c) => {
    ti(c, r.submitShortcut) && (c.preventDefault(), u());
  }, [u, r.submitShortcut]);
  return v.jsxs("div", { className: e, children: [v.jsx("textarea", { tabIndex: 0, ref: i, disabled: t, placeholder: r.placeholder, value: r.prompt, onChange: a, onKeyDown: l }), !o && v.jsxs("button", { tabIndex: 0, disabled: n, onClick: () => r.onSubmit(), children: [s && v.jsx(Dc, {}), !s && r.Loader] }), o && v.jsx("button", { tabIndex: 0, onClick: r.onCancel, children: v.jsx(Oc, {}) })] });
}, Cr = (r) => {
  var n;
  const e = {}, t = Object.keys(r);
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    o !== "personaOptions" && o !== "messageOptions" && o !== "adapter" && o !== "events" && Object.assign(e, { [o]: r[o] });
  }
  return r.personaOptions && (e.personaOptions = {}, r.personaOptions.assistant && (e.personaOptions.assistant = { name: r.personaOptions.assistant.name, avatar: typeof r.personaOptions.assistant.avatar == "string" ? r.personaOptions.assistant.avatar : "<REACT ELEMENT />", tagline: r.personaOptions.assistant.tagline }), r.personaOptions.user && (e.personaOptions.user = { name: r.personaOptions.user.name, avatar: typeof r.personaOptions.user.avatar == "string" ? r.personaOptions.user.avatar : "<REACT ELEMENT />" })), r.messageOptions && (e.messageOptions = { ...r.messageOptions, responseRenderer: r.messageOptions.responseRenderer ? () => null : void 0, promptRenderer: r.messageOptions.promptRenderer ? () => null : void 0 }), (n = r.conversationOptions) != null && n.conversationStarters && (e.conversationOptions = { ...r.conversationOptions, conversationStarters: r.conversationOptions.conversationStarters.map((s) => ({ ...s, icon: s.icon ? "<REACT ELEMENT />" : void 0 })) }), e;
};
var Bc = Object.defineProperty, vn = (r, e, t) => ((n, s, o) => s in n ? Bc(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class Mc extends Error {
  constructor(e = {}) {
    super(e.message), vn(this, "exceptionId"), vn(this, "message"), vn(this, "source"), vn(this, "type"), this.message = e.message ?? "", this.source = e.source, this.type = this.constructor.name, this.exceptionId = e.exceptionId;
  }
}
const Lc = (r, e) => {
  let t, n = e, s = r, o = !0;
  const i = ((g, b) => {
    let k = !1;
    if (typeof g != "function") throw new Mc({ source: "x/throttle", message: "Callback must be a function" });
    return (...y) => {
      k || (g.apply(void 0, y), k = !0, setTimeout(function() {
        k = !1;
      }, b));
    };
  })(/* @__PURE__ */ ((g) => {
    let b, k;
    return (y) => {
      const x = y.target;
      if (!(x instanceof HTMLElement)) return;
      const { scrollTop: A, clientHeight: w, scrollHeight: R } = x, M = R - 30, F = Math.ceil(A + w) >= M, T = b === void 0 || k === void 0 ? void 0 : A > b && k === R ? "down" : A < b && k === R ? "up" : void 0;
      k = R, b = A, g({ scrolledToBottom: F, scrollDirection: T });
    };
  })(({ scrolledToBottom: g, scrollDirection: b }) => {
    o ? b === "up" && (o = !1) : b === "down" && g && (o = !0);
  }), 50), a = (g) => {
    g.addEventListener("scroll", i);
  }, u = (g) => {
    g == null || g.removeEventListener("scroll", i);
  }, l = (g) => {
    (t == null ? void 0 : t.uid) === g && (c == null || c.disconnect(), d == null || d.disconnect(), t = void 0, c = void 0, d = void 0);
  };
  let c, d;
  const p = () => {
    s == null || s.scrollTo({ top: 5e4, behavior: "instant" });
  }, h = () => {
    s && n && o && p();
  }, m = () => {
    h();
  };
  return a(s), { updateConversationContainer: (g) => {
    u(s), a(g), s = g;
  }, updateProps: ({ autoScroll: g }) => {
    n = g;
  }, handleNewChatSegmentAdded: (g, b) => {
    t && (c == null || c.disconnect(), d == null || d.disconnect()), t = { uid: g, container: b }, c = new ResizeObserver(h), c.observe(b), d = new MutationObserver(m), d.observe(b, { childList: !0, subtree: !0, characterData: !0 }), n && p();
  }, handleChatSegmentRemoved: (g) => l(g), handleChatSegmentComplete: (g) => l(g), destroy: () => {
    t && (l(t.uid), t = void 0), u(s), s = void 0;
  } };
}, Ns = !0, On = (r) => {
  if (typeof r != "object" || r === null) return !1;
  const e = r;
  return (typeof e.streamText == "function" || typeof e.batchText == "function") && ["stream", "batch"].includes(e.dataTransferMode) && typeof e.id == "string" && typeof e.info == "object" && e.info !== null && typeof e.preProcessAiBatchedMessage == "function" && typeof e.preProcessAiStreamedChunk == "function";
}, Me = (r, e = 1) => {
  setTimeout(() => {
    r();
  }, e);
}, zc = (r, e, t, n, s, o, i, a, u) => new Promise((l) => {
  const c = tt(), d = [], p = [];
  let h = !1, m = !1, g = !1;
  const b = On(t), k = { next: (y) => {
    if (m || g) return;
    let x, A;
    if (b) {
      const w = y, R = t.preProcessAiStreamedChunk(w, n);
      R != null && (x = R, A = w, d.push(x), p.push(A));
    } else x = y, d.push(x);
    x != null ? (h || h || (h = !0, Me(() => {
      s.forEach((w) => {
        w({ uid: c, status: "streaming", time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" });
      });
    })), Me(() => {
      i.forEach((w) => {
        w({ chunk: x, messageId: c, serverResponse: A });
      });
    })) : Le("Adapter returned an undefined or null value from streamText. This chunk will be ignored.");
  }, complete: () => {
    m || g || (g = !0, Me(() => {
      const y = { uid: c, status: "complete", content: d, contentType: "text", serverResponse: void 0, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" };
      o.forEach((x) => {
        x(y);
      }), l();
    }), Me(() => {
      const y = { uid: r, status: "complete", items: [e, { uid: c, status: "complete", contentType: "text", content: d, serverResponse: p, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" }] };
      a.forEach((x) => {
        x(y);
      });
    }));
  }, error: (y) => {
    m || g || (m = !0, Me(() => {
      u.forEach((x) => {
        x("failed-to-stream-content", y);
      }), l();
    }));
  } };
  t.streamText(e.content, k, n);
}), $c = (r, e, t) => {
  if (!r) return (() => {
    const y = /* @__PURE__ */ new Set(), x = tt(), A = { uid: x, status: "complete", items: [] };
    return Me(() => {
      y.forEach((w) => {
        w(A);
      }), y.clear();
    }), { segment: A, observable: { on: (w, R) => {
      w === "complete" && y.add(R);
    }, removeListener: (w, R) => {
      y.delete(R);
    }, destroy: () => {
      y.clear();
    }, get segmentId() {
      return x;
    } }, dataTransferMode: "batch" };
  })();
  const n = e;
  if (n.streamText === void 0 && n.batchText === void 0 && n.streamServerComponent === void 0) return ((y) => {
    const x = /* @__PURE__ */ new Set(), A = tt(), w = { uid: A, status: "error", items: [] };
    return Me(() => {
      x.forEach((R) => R(y)), x.clear();
    }), { segment: w, dataTransferMode: "stream", observable: { on: (R, M) => {
      R === "error" && x.add(M);
    }, removeListener: (R, M) => {
      x.delete(M);
    }, destroy: () => {
      x.clear();
    }, get segmentId() {
      return A;
    } } };
  })("no-data-transfer-mode-supported");
  const s = tt(), o = ((y) => ({ uid: tt(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: y, contentType: "text" }))(r);
  let i, a, u, l, c, d, p = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set();
  Me(() => {
    p != null && p.size && (p.forEach((y) => {
      y(o);
    }), p.clear(), p = void 0);
  });
  const g = ((y) => {
    const x = [], A = y, w = y;
    (A == null ? void 0 : A.streamText) === void 0 && (w == null ? void 0 : w.streamServerComponent) === void 0 || x.push("stream"), (A == null ? void 0 : A.batchText) !== void 0 && x.push("batch");
    const R = On(y) ? y : void 0, M = (R == null ? void 0 : R.dataTransferMode) ?? void 0, F = x.length === 1 ? x[0] : "stream";
    return M ?? F;
  })(e);
  ((y) => "streamServerComponent" in y ? "server-component" : "text")(e) === "server-component" ? (u = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), ((y, x, A, w, R, M, F, T) => new Promise((I, _) => {
    try {
      const D = x.content, z = tt(), B = "assistant", X = "streaming", re = /* @__PURE__ */ new Date(), oe = "stream";
      let le, N;
      const S = () => {
        Me(() => {
          M.forEach((q) => {
            le && N && q({ ...le, content: N, status: "complete" });
          });
        }, 20);
        const H = { uid: y, status: "complete", items: [x, le] };
        Me(() => {
          F.forEach((q) => {
            q(H);
          }), I();
        }, 20);
      }, O = () => {
        T.forEach((H) => {
          H("failed-to-stream-server-component", new Error("Failed to load content"));
        });
      };
      N = A.streamServerComponent(D, w, { onServerComponentReceived: S, onError: O }), le = { uid: z, content: N, contentType: "server-component", participantRole: B, status: X, time: re, dataTransferMode: oe }, Me(() => {
        R.forEach((H) => {
          H(le);
        });
      }, 10);
    } catch (D) {
      Le(D);
      const z = D instanceof Error ? D : typeof D == "string" ? new Error(D) : new Error("Unknown error");
      Me(() => {
        T.forEach((B) => B("failed-to-load-content", z));
      });
    }
  }))(s, o, e, t, a, u, h, m).finally(() => {
    Me(() => k());
  })) : g === "batch" ? (i = /* @__PURE__ */ new Set(), (async (y, x, A, w, R, M, F) => {
    try {
      const T = x.content, I = On(A) ? A : void 0, _ = I !== void 0, D = tt(), z = "assistant", B = "complete", X = /* @__PURE__ */ new Date(), re = "batch";
      let oe;
      if (_) {
        const S = await I.batchText(T, w), O = I.preProcessAiBatchedMessage(S, w);
        O != null && (oe = { uid: D, content: O, contentType: "text", serverResponse: S, participantRole: z, status: B, time: X, dataTransferMode: re });
      } else oe = { uid: D, content: await A.batchText(T, w), contentType: "text", serverResponse: void 0, participantRole: z, status: B, time: X, dataTransferMode: re };
      if (!oe) throw new Error("Response from adapter was undefined or cannot be processed");
      const le = oe;
      Me(() => {
        R.forEach((S) => {
          S(le);
        });
      });
      const N = { uid: y, status: "complete", items: [x, oe] };
      Me(() => {
        M.forEach((S) => {
          S(N);
        });
      });
    } catch (T) {
      Le(T);
      const I = T instanceof Error ? T : typeof T == "string" ? new Error(T) : new Error("Unknown error");
      Me(() => {
        F.forEach((_) => _("failed-to-load-content", I));
      });
    }
  })(s, o, e, t, i, h, m).finally(() => {
    Me(() => k());
  })) : (l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), zc(s, o, e, t, l, c, d, h, m).finally(() => {
    Me(() => k());
  }));
  const k = () => {
    p == null || p.clear(), p = void 0, i == null || i.clear(), i = void 0, a == null || a.clear(), a = void 0, u == null || u.clear(), u = void 0, l == null || l.clear(), l = void 0, c == null || c.clear(), c = void 0, d == null || d.clear(), d = void 0, h == null || h.clear(), h = void 0, m == null || m.clear(), m = void 0;
  };
  return { segment: { status: "active", uid: s, items: [] }, dataTransferMode: g, observable: { get segmentId() {
    return s;
  }, on: (y, x) => {
    y === "userMessageReceived" && p ? p.add(x) : y === "aiMessageReceived" && i ? i.add(x) : y === "aiServerComponentStreamStarted" && a ? a.add(x) : y === "aiServerComponentStreamed" && u ? u.add(x) : y === "aiMessageStreamStarted" && l ? l.add(x) : y === "aiMessageStreamed" && c ? c.add(x) : y === "aiChunkReceived" && d ? d.add(x) : y === "complete" && h ? h.add(x) : y === "error" && m && m.add(x);
  }, removeListener: (y, x) => {
    y !== "userMessageReceived" ? y !== "aiMessageReceived" ? y !== "aiMessageStreamStarted" ? y !== "aiMessageStreamed" ? y !== "aiChunkReceived" ? y !== "complete" ? y !== "error" || (m == null || m.delete(x)) : h == null || h.delete(x) : d == null || d.delete(x) : c == null || c.delete(x) : l == null || l.delete(x) : i == null || i.delete(x) : p == null || p.delete(x);
  }, destroy: () => k() } };
}, Fc = { "data-transfer-mode-not-supported": "Requested data transfer mode is not supported", "no-data-transfer-mode-supported": "Adapter does not support any valid data transfer modes", "connection-error": "Connection error", "invalid-credentials": "Invalid credentials", "invalid-api-key": "Invalid API key", "http-server-side-error": "HTTP server side error", "http-client-side-error": "HTTP client side error", "failed-to-load-content": "Failed to load content", "failed-to-stream-content": "Failed to stream content", "failed-to-stream-server-component": "Failed to stream server component", "failed-to-render-content": "Failed to display content" }, Hc = (r) => {
  var x;
  const { aiChatProps: e, adapterToUse: t, prompt: n, composerOptions: s, showException: o, initialSegment: i, newSegments: a, cancelledSegmentIds: u, cancelledMessageIds: l, setChatSegments: c, setComposerStatus: d, setPrompt: p, conversationRef: h } = r, m = G(() => n.length > 0, [n]), g = ue(n);
  g.current = n;
  const b = ue({ newSegments: a, cancelledSegmentIds: u, cancelledMessageIds: l, setChatSegments: c, setComposerStatus: d, showException: o, setPrompt: p }), k = ue({});
  te(() => {
    b.current = { newSegments: a, cancelledSegmentIds: u, cancelledMessageIds: l, setChatSegments: c, setComposerStatus: d, showException: o, setPrompt: p };
  }, [a, u, l, c, d, o, p]);
  const y = ((A, w, R) => G(() => {
    const M = ((T) => {
      const I = [];
      return T.forEach((_) => {
        _.items.forEach((D) => {
          if (D.status === "complete") {
            if (D.participantRole === "assistant") I.push({ role: "assistant", message: D.content });
            else if (D.participantRole === "user") return I.push({ role: "user", message: D.content });
          }
        });
      }), I;
    })(w), F = R === "max" || R === void 0 ? M : R > 0 ? M.slice(-R) : void 0;
    return { aiChatProps: Cr(A), conversationHistory: F };
  }, [A, w, R]))(e, i ? [i, ...a] : a, (x = e.conversationOptions) == null ? void 0 : x.historyPayloadSize);
  return te(() => {
    k.current = e.events || {};
  }, [e.events]), ve(() => {
    if (!t) return void Le("No valid adapter was provided to AiChat component");
    if (!m || s != null && s.disableSubmitButton) return;
    d("submitting-prompt");
    const A = n, w = /* @__PURE__ */ new Set(), R = On(t) ? t : t.streamServerComponent ? { streamServerComponent: t.streamServerComponent } : { batchText: t.batchText, streamText: t.streamText }, { segment: M, observable: F } = $c(A, R, y);
    if (M.status === "error") return Le("Error occurred while submitting prompt"), o("Error occurred while submitting prompt"), d("typing"), void (g.current === "" && p(A));
    const T = (I) => {
      const _ = b.current.newSegments.map((D) => D.uid !== F.segmentId ? D : { ...D, items: [...D.items, { ...I }] });
      b.current.setChatSegments(_);
    };
    F.on("userMessageReceived", (I) => {
      var _, D;
      (_ = b.current) != null && _.cancelledMessageIds.includes(I.uid) || (T(I), (D = k.current) != null && D.messageSent && k.current.messageSent({ uid: I.uid, message: I.content }));
    }), F.on("aiMessageStreamStarted", (I) => {
      var _, D;
      (_ = b.current) != null && _.cancelledMessageIds.includes(I.uid) || (T(I), b.current.setComposerStatus("waiting"), g.current === A && b.current.setPrompt(""), w.add(I.uid), (D = k.current) != null && D.messageStreamStarted && k.current.messageStreamStarted({ uid: I.uid }));
    }), F.on("aiServerComponentStreamStarted", (I) => {
      var _, D, z;
      (_ = b.current) != null && _.cancelledMessageIds.includes(I.uid) || (T(I), b.current.setComposerStatus("waiting"), g.current === A && b.current.setPrompt(""), w.add(I.uid), (D = k.current) != null && D.serverComponentStreamStarted && ((z = k.current) == null || z.serverComponentStreamStarted({ uid: I.uid })));
    }), F.on("aiServerComponentStreamed", (I) => {
      var _, D, z;
      (_ = b.current) != null && _.cancelledMessageIds.includes(I.uid) || (D = k.current) != null && D.serverComponentRendered && !b.current.cancelledMessageIds.includes(I.uid) && ((z = k.current) == null || z.serverComponentRendered({ uid: I.uid }));
    }), F.on("aiMessageReceived", (I) => {
      var D, z;
      if ((D = b.current) != null && D.cancelledMessageIds.includes(I.uid)) return;
      const _ = b.current.newSegments.map((B) => B.uid !== F.segmentId ? B : { ...B, items: [...B.items, { ...I }] });
      b.current.setChatSegments(_), (z = k.current) != null && z.messageReceived && k.current.messageReceived({ uid: I.uid, message: I.content });
    }), F.on("complete", (I) => {
      var D;
      if ((D = b.current) != null && D.cancelledMessageIds.includes(I.uid)) return;
      b.current.setComposerStatus("typing");
      const _ = b.current.newSegments.map((z) => z.uid !== F.segmentId ? z : { ...I });
      b.current.setChatSegments(_), g.current === A && p(""), w.size > 0 && (w.forEach((z) => {
        requestAnimationFrame(() => {
          var B;
          (B = h.current) == null || B.completeStream(F.segmentId, z);
        });
      }), w.clear());
    }), F.on("aiChunkReceived", ({ messageId: I, chunk: _ }) => {
      var D, z;
      (D = b.current) != null && D.cancelledMessageIds.includes(I) || ((z = h.current) == null || z.streamChunk(M.uid, I, _));
    }), F.on("aiMessageStreamed", (I) => {
      var _, D, z;
      (_ = b.current) != null && _.cancelledMessageIds.includes(I.uid) || (D = k.current) != null && D.messageReceived && ((z = k.current) == null || z.messageReceived({ uid: I.uid, message: I.content }));
    }), F.on("error", (I, _) => {
      var B;
      const D = b.current.newSegments.filter((X) => X.uid !== M.uid), z = Fc[I];
      b.current.setChatSegments(D), b.current.setComposerStatus("typing"), b.current.showException(z), g.current === "" && p(A), (B = k.current) != null && B.error && k.current.error({ errorId: I, message: z, errorObject: _ });
    }), b.current.setChatSegments([...b.current.newSegments, M]);
  }, [n, t, y, o, b, s == null ? void 0 : s.disableSubmitButton]);
}, si = "nlux-comp-welcomeMessage", oi = (r) => v.jsxs("div", { className: si, children: [v.jsx(ri, { avatar: r.avatar, name: r.name }), v.jsx("div", { className: "nlux-comp-welcomeMessage-personaName", children: r.name }), r.message && v.jsx("div", { className: "nlux-comp-welcomeMessage-text", children: r.message })] }), Us = ({ children: r }) => v.jsx("div", { className: si, children: r }), Nc = () => {
  const r = G(() => "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAAewgAAHsIAXgkHaEAABj0SURBVHic7Z13vBxV2ce/Z29ugEQMEAICQUBAkBqqlCiRKqC0gApKE14poh8VUCmihv4SCB2CVAtFQBR9UZpCaMIL0ouAGIIEQgsJya27e/zjmb117+yUc+bM7J7v53Nys3dnzjx3dn9z2nOeR2mt8Xg89Sm5NsDjyTNeIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCKNsVdwzY4Ktqgej+v6RHwpQ8lqr2jFD3q+9UAPrGHDcwN8F6JD3hr1m0LHjgYnAWsAqwGrA8sDKwNLAOGAMsCTQPuDkMtANdAALgUXAPOBtYC4wB5gNvI5m7gBLhxjOiK8VwMAdpQOPrf1eD31PD/5dcJwa8lr+P+D4Ie8pCxtZ249/z3id1gTSoowHNgEmBWUDNGsBYy1eswy8BrwIPAs8BTyBiMeTEi+QdCwFfA6YAmwLbAaMHf7Ytsoo4NNB2XPA758GHgHuB2bBwFbGExUvkPisAOwK7ALsAKyQrR4is3FQjgR6EaH8CfgL8E+HdhUKL5BoLAHsBUwFdkczxq05sWkHdgwKiFhuBm7DtyyheIGEsyFwMHCA0nol18YYZLugnAfcAlwD3OPUopziBVKf3dEcCXzJtSGWGQ0cEJTHgV8A1wI9Dm3KFX4dZDD7A48iffVmF8dQNgdmAv8CTkCmoFseLxDhq8CTaH09Wm+J1rRwmYjWZyBC+TEy/mpZWl0gOwEPorkRzaT+BS1f0ExAcybwKvCtNDe5yLSqQNYAbkZzF5ptc/BlzHOZiGYm0vXcKukNLyqtKJD9gRdB7+v6m1ewsiXoR4CTE931gtJKAvkEcAua69Es4f77VthyKuLOsk3cD6CItIpADgReRjM1B1+wZigbo3kIOCPm51A4mn0dZDRwFVp/w7UhTcoJyETHQYizZNPRzALZXMGNwJquDWlyNgeeAw5DFhmbimYVyBHA5WjXZrQMJcRdZUvgaMe2GKUZBXIZWh/p2ogW5SjEf20v4H23ppiheQSiWBL4E5odXJvS4kxGNm7tiuxJKTTNIpBV0PwNWNu1IR4AVkKmgr8I3OnWlHTYE8iwfdqGGD6uWA/0LGS7qydf/AX4BvAb14YkxZ5AqtZqFkSAWwctR0s71OWcXwPLAhe7NiQJ1gSiKnamkHTf0qaaDDxg5SIe01yErEmd59qQuBR1DLI1WntxFItzkX7F+Y7tiEURXU0mAQ+5NsKTiBnIGlVhKFYLolgDzcPYmwLw2Ody4EPgJsd2RMKeQLThMYji42j+riQWlafY3Ai8hWaWa0MaYVEgButSgOYBJCaVpzn4G7AWmn+7NiSMYnSxNLcBG7k2w2OUEjKWXJ0cR1HJdxdLRho/Q3x7PM3HSsDdwHZ5dSzNexdrd+CnRmry5JXPA+eiOda1IfXIcxdrRTS3uzbCkwk/QMKh5u7zznMX6y7ys07TDTwJvAC8gkxTdiIxb5dGIqtvCHyWfD908sxtwIqA+SQfKcjrh3kG+RiU3wr8DvgrkrimEasAOyN74L9g0a5mpATcgWy6yg1Km16vCOg9bdlkJyq2AB4zakx8LgQuQPFaorPllu4AnIL0sT3ROREJWBeb9pPnm7bFpkCWSXimmovMbrjgLuBYFM+JKQlr0YP+fwzirOeJjP400pWNRfvJHxq3xJ43bzLdzQBnaQaO04pzLXixXKy0noUExF7VdOVNyu+QMZ1z7A2C48daWg/N9xzEeOpGxg3n2roVwDPARmieyUFMqyKUDYDvxD7PAnmZJQL4rYNrfoCkKbvb6lWkUfoQ2AIRi6cRmguBZVybYXFHYQxJK74JrG/Nlvp8BGyGUrMzvGYPmm1Av4qEQvWEcxWaqS4NyMM07yh05tsxe4FtUBmkShZHSyT3BgCLgc+h+Sf5asHzyD7AlmjtbFYzDwuF15O1C7tSnwee6/vijrK4vaQKDN9+/CqyK/JRexduGn4PrOzq4m4H6dL/38+aDfX5X+Dvfa+0li9wnC5hFJSITpUrUvfwTE6PAd81e9GmZCXgOFcXt7YOUj7l41EOewAJNJYVz1JvhV4H/7S3oUeV+lu/NA2LVqieClSrfWIZgUfJ2epxDukAxgHlsINGTVto/MIWW5C6T82BZXM0kzOePtwtdHqwtwrlavqlkJJClatSH6qRTfvlYFo172UMmh81/E5ZwGUXa3rGySm/D/o/oTe3qlFdZekShT/1R6ZNich6ysHdbXgj5qD12TlI3pn3ciKattBbaQFrAlHhZX0F2zU4xlzRvAicH3oTNX0th+pJ2IoooKIpdVZQOrh2NULRnKA0CzO7H8UsYxR8O+wYG7hqQX6eaRMNBygNkYpSqN4qqrsCpRi3XQFKUeqsyKBfqThPNQ0cl4OuTN7LSVRhxGIBFwuFy6MyXfy5AQmkHAvVXUGPLolIosxwlRSqqwK9gbDi94l/Afwcd46aRWAFYE80f8jqgi4WquL72KRrPY6JbaECtKbUUZaWoNF4pKRQZY3qLMvJye09PgdP6byXE8I/DLO4WCj8trVrDmc6Wn2Q7FQFPRXU4l70Um2hhwHQ0SstTRs1YSbhN8DZyMYrT30+i+zgfDmLi2XdguxKdmkKysApqR5XJYVa3CuD9lEj3KpSCdVZ7h+zJBdHjT+mrqH5OSqrC2U9SD86w6b4TDSdqetpK6E6yjJ1O6qEbh9QlmiDSlXeL5VM2X1dDroxeS8Ho1HDfm+BLMP+LIuE8cmCHpShHN4KEUFXBb0UlDrL/X9bSUFZB+MUI1cD+DuapxE3HE99at+lP9m+UJZjkP2wN109lIuArtS1aEQEo0qU3u/qdx3RA94f3UZ13GgRibmcKGcjTpyekTmQDARizRerctyYob/6K9lF+hiPbIZKR5uCKqiPumWMoZT8TiHiCFoXVElEMrpNumIm0HyAPCk99elA7k9f2NK26R3GL5LVIH05shPHLzEljrKm9GGXiGNUqV8c0P+zTZwbSx92oxb3BouLqaZ6ay3UL1L/Dc3NGCRJqFUsBm0Y1DLtYes6wy/M6anO14gYequoBd39r8MIFgbVRz3Sooxtly5musb5YuCHqWpofqZiORpjVi3IbhldZxaal1M9uUvB+seCbqmxLeKwSclYRXWUUYuClqTWFUvGG0gYIs/IHASMtXmBLGaxSsCO1q4zmNNSnd2mpOVY2CNf7ji+WDVGlaBLnBX12HZx8EouknOQiCue+jyI5YmfLGaxtiCbweabpIlO0iZOiiwMxnxJxDGgLrrK4q84ph10NalI7kH+Lr+yPpw7Ucr6GCSLhcLtM1o8ujDxuUoG5OqjQBxRu1VhtJVQnRXZX5J0b4kwIwcLc3krj5DBAB2yGYN8LoNraGBmorMCb93Sop7+1yZQoEsKtbgsriqlxDNbM7HmzF1I3gCmZHUx212sNsS5zDa3AgtinzVQHBUtU7YmCcYxalEP+mPt0F5Kspi4CHFiPNCscYVkIRIMvAcN8gTB6ijEdhdrPTTLZdDkxu+GBDaqjl5xFzHVcgwlqLa0qBd6ddKW5MwcdGtcl/mI+83sure5104ja3sWaxNr9ffzGoqHY59VKqG6yqjuqt24WNDfUnX0Uh07WkQTxHOIyItoHgK2tWVizqkAW1EaIA5N315b1V016eYzCIuRFTVoJtmrP0BxOTrOF1ye4qqnIhucbLUcQwkcG1VHL3rMKLEj3kPvdCTBTCuyA6iX++5XTRwaiR5TrprvHgfYTn9gP4S95ur+PlMEFBK9pKPc/zoralPJXRX0Um2oeE+9PwNzgE/aMS63HKPh/mEPFI3cv4rF7jH2u1jrWqtf+APwfuSjg8AKqm/3X5bqCCgp8e1qU0kG7afSWj5aN6G4pO6nVNVSLM/D2pzFmghMtFY/gFKXRD5WB0+anir0OBIH9LVYqrOMVu3yAVc1kZoyxVVoPR2JMtjsvIlSX6vbOdBBy5HBR2hTf2tYrBs089D67khBx6rBzawEgeEcaaOPUuBG31Vm0JRaoyJ7E9I5YxYBzUJgu4afZwbYnOZdzeq0H1wZ41gg6NpUcC8QkDvfq2UGRsWa+p2BpisH0662ygfApsC/6t63kUMwrTDSG2mwGZt3ouVQlDMjH6tA9VZkHSIkQEnmlIDuqtgWhBqKUMpoPS0HoUBtlPlonUQce6D1LTY+IpuDdJsOdg8iLgeNCWat6DYQlNo0NXtqrUh09/izgROBj1myzAWdwBYoXq/7blWH3ZvrgCVsGGWzizXeYvcqRkYqJb5Q8t/8URu091Ti3IMqmhNz0B0y+ZluS1jLUR3x3IPRLIO2EyfL5iyWrRx8H4G6OdKRqraQpNM+ClZFgpWtDiyP7HlfEom99T4wF3gJeE7si4kCKuIuodtV1FX2i9CcBKwY+3p5Q7ELWj0JBGIZ0lSMHDehDbg0+P9oG6bZzFG4jKV6f43Wjdega12r3sTi2BHYE/FG3pBaLeFdoPlI9+92xIFyfuSrlZBZthLo6AHo/gfLW04z4BDCdk6GBxU5A9mbzoCfRrEW1YTD214C1jFer2JD5EndmLIeeUpwYCyrvp9qLBK175vAZ1JaugC4EjgXrd8C+r/0mvofvAZKSJariCjNw8DW6Ux1g4afopgmr4Z/SCr8u7kcgxeJ53Jlxfi412YXy4ai/4FWjcVRaz3izZcfjdanYK7LMg44FjgamAac1fCMwIlRlXWchcz90Xp2Qhtdcp1Salq/BgaLQdXrag1m6HqQlS6WzUH6khYGchdGOjCeONZDciVegmZFCwPQpYAzkVyEjVulmrgrVSJOjb4O/Mz5IDtemQUcgtaoEYr8bSOePwHNkUN+Z+Vhb3Ml3bSiO9HcEOkDiJ6x9lDgeWq5Em0hdm2JdA2/2vD42nTvyDM3Q8vPySjauQFepVGMtMafxU/q/M7Kd9nmOohpg69hQBS9kOs2RlqWc9CZpxcuATcis2LTGx6tNTH6iLshX748Mx/YhjBH/8af3xJIt3UoVibxXeQHSYbiVGN1aW4H/WVj9cXnHMTT+fCGR0YXyb9A7wnZZV+KySsodgb1LlBfCHqkNwZxJhn6Q7jIMJWE69G8Ham70Zg7AJfiqHEYkadoo3buuZ1sExRF5U0k/NPs8MMafoAfA75vwqCo2BRIxWBd6QLC9fN7JIlPXvgycJnhOi9FotvnhbeBzYAFouOQCYfGhInfyqZ0mwJpPF6IxqPAiwbq+SWy8Jc3jgS+Y7jO75KP9An/RuISzDNUX1jrYfKB3IdNgXQaquenBuo4j3yHzbkQ2MpwnV9HwgW54lFgEtKCmGB3wteoyoauMwibAllsoI5XgDtT1nEsGfdbE3IX5j1SvwFcYLjOKPwKEfxCg3U2mnE01WMZhE2BmMhmcnLK8/chynRqPlga8d8yzfeQblwWaCTt9kGG612dxtEUew1fE7ArkPdSnv8f4Lcpzt8CO184m+yORA40zUyku/OQhbpr3IF4JUSPExCdKDNzprr0g7ApkHdSnv+DFOeuBNyf8vqusNUlehqYDByBhA8yxYPIbNzuiMu/DQ6LcExLCeQ1INqej+G0Aw8DS6W4vksmIW7strgCWBNZpLwvYR2vI+GHvoBsB7CZTHNvoqXPiL8PJwI294P8J8W5ab4g9yF91iJzGeKSYuVDR2Z8rgrK2siXfAuki7QyMh6qBUjtQB52s4EngVnIDJVN77WBRJ0Cf9fGxfMokPuRjLhJuBXx9Sk6bci44YAMrvVKUK4e8Luao6nG0uA3IqsQPfnrXBsG2OxizU54XtL1iiuQWatmYX+yCN1an56guBQHwLdiHFt/P3tKbArkNeLf4FOIGq1kMNOx2293xTWuDXBMY2fOfl6zYYBNgcwnnvv1C5DIY/cMZDGwGdmMfPmOZckUZDwUFSszaLa9eeMYnSTn3HnACQnOKxKXuzbAEXH80+Yhfl/GsS2QZyIety/xu1anUwwXkrR8EvGraiXGIdO7UXmWAnrzAjwV4ZgTib/iPSU4r1U4z7UBGXMg8XYIPm3LENsCeaLB+6cjO8TisAytl2lpBeINWIvOUTGP/4cVK7AvkDcYeXbheJI5I/6V4q6Sp+EM1wZkxKbIgmUcHrNhCGSz5XZogs1XgZ1I5mV7A9kkBs0jE4jmk1R04m4ZnoPFYBVZCOTR4OdLSKuxDnBPgnpmAF8zZVRBMbX1OK+MRhZI4zDLhiE1bLqa1LgJmc1K84eciexraHU+gQxgf+XaEEscSPzuc1K3pEhk0YK8SzpxnAz82JAtzUAzp2BLMm2fpDcSmbyH/TmQZKvrzcyqNJfPWY1JwPoxz3meZK5JkcmzQL6ERCLxDOds1wZYIEmUyz8at2IIeRXIXmTwxxeYtYCdXRthkKVJ5tpvJS/hQPIokKOA21wbUQDOcW2AQY4gfmzdN2i8EJ2avAnkMvpTannC2Qg7AR5ckKR7lSagR2TyIpDtkdQAWYWnaRaaYSyyD8mSFl1n2pB6uBbIpsje63uJP4PhkeBsm7s2IiVJImc+j3jwWieLhcKhrI3sG/8KktPCk44ZSNCFIrIt0lWMy0zThoyEC4HcgOyU85hhMtISW/NotUiSLmIVuNawHSPioot1rYNrNjs2ohnaZiOkBYnL9dgLhzQMFwK5BLNBjT0yFpns2oiYJI0gmenEhAuBaNxEHG92MuuXG2ATGgejrsdjyGxnZriaxZpOdpH5WoX1kImPIpBUzJkH6HAlkIW0brQOm1zs2oAIfBEJcxqXl7Hs2l4Pl+sgJjJHeQYzAZjm2ogGXJnwPCexz1wK5F2KOfuSd36CpH/IIyci8Xbj8hJ2I8iPiOuV9JMcX79ZudG1AXWYQPLNXseYNCQOrgWygNYI/pY1n0cy3eaJPyc8707EFckJrgUCcD7iW+MxywXILr08cDXJvSf2NWlIXPIgEJBsrB7z/J9rAxBv3UMTnns8sMigLbHJi0CeonkjdbhkZdzmSl+d5IlU55CDDMV5EQhIfg8riRhbnAOQHXtZsyTwQIrz9zNlSBryJJBukmeX8oRzOdmnpnsAmJjw3KuwGE40DnkSCEhznHS2wxPOfcCnMrxW0o1cH5CjbGF5EwjIrEW3ayOakHYkDGzSp3oUPg48AmyXoo69yJGfXh4F0kG85Cme6CyPbKxa00LdmyHbYLdKUce5pBu3GCePAgHpZnk3FDtMQBLOTDFY57HA40g2rKQ8T7LoJlbJq0BA3Asy2ZjfgowF/gb8KGU9OyHpLdJOx+qgrtyRZ4EA7Ijk6/bY4SzgIeQ+R2UMkobiXuAuYGsDduwBvGWgHuO4CNoQh3eQ/QOZ7wNoIbYB7gYeRIKxPYBkjF0MLAGMR+JWbYhET9kNSQlnip/hyFM3CkprSxMGh8SNJBnKMcBFJiv0hLIAcfFYElgWez2NWzC5IHit+e9y3rtYNS6mGLvlmoVxyL6N8dj7jjxBTlbLwyiKQEASy//OtREeI8yhIHGFiyQQgKlYzknnsc6HyFpJh2M7IlE0gYCs0j7u2ghPIjqBz5LTGat6FFEgIFOLT7o2whOLbkQcL7s2JA5FFUgZudn/79oQTySqyOdVuIXfogoEoBe56fe7NsTTkMMR95bCUWSBgLgoTAF+79YMTwhzgGtcG5GUogukxt5I+jZP/rCax9w2zSIQgKOBH7o2wjMMp0EX0tJMAgHJ/LoX3sExT6zu2oA0NJtAAP4AbIBESvG4J0mKtdzQjAIBeAXJQXGFa0M8rI6EHyokzSqQGkcgQekWuzakxVnPtQFJaXaBgAROWwfpenncsIFrA5LSCgIBeBMZvB+Gz4/oAi+QgnA18GkkYrgnOz7j2oCktJpAAOYh23gPBd5wbEursC4Sl6twtKJAalwLrI1kZPLdLrssB6zl2ogktLJAQFywT0MCqZ1FwVd9c866rg1IQqsLpMZ7SIrhNZEkmPPcmtOUFHLB0AtkMO8g2Xc/BXwbCSzQClSwvwW2kGshXiD16QAuRSKUb4+MVz5yaZAl7gC+DqwBrIbs1DwBO6kHxlio0zpFiYuVB8YjEQD3BnYBRrs1JzGPALche2heCTlucySC4lTMOBxegu1stRbiYnmBJGMlYGckZOcU7KYUSMsiZNflX5C9GS8lqGNP4CtBSRqNczIS5tQeXiC5pA3Z+jsZCWezKdJdccX7wDNILpCHkODSHxiqe1Xgm4hQ4owp7iVe/N9keIEUhvWBjZF4tusgawCfRCIWmqILeB2YDfwTCYjwNPAC2Thn7oDkP9wLWecYiReALTOxyQuk0IxDumYrBz+XRRLajEeCRI9GVptLyF77XmTjVw8SbO09pCWYB8wF3kZm3VwzDhHJVMTnanlkVuwtxKXneCQKjX0KJRCPpwnw07weTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwj/Ba/47FkhCYEqAAAAAElFTkSuQmCC", []);
  return v.jsx(oi, { avatar: r, name: "" });
}, Uc = (r) => {
  const { onConversationStarterSelected: e } = r;
  return v.jsx("div", { className: "nlux-comp-conversationStarters", children: r.items.map((t, n) => v.jsxs("button", { className: "nlux-comp-conversationStarter", onClick: () => e(t), children: [v.jsx(_c, { icon: t.icon }), v.jsx("span", { className: "nlux-comp-conversationStarter-prompt", children: t.label ?? t.prompt })] }, n)) });
}, _c = ({ icon: r }) => r ? typeof r == "string" ? v.jsx("img", { src: r, width: 16 }) : v.jsx("div", { className: "nlux-comp-conversationStarter-icon-container", children: r }) : null, qc = (r) => {
  const { segments: e, personaOptions: t, conversationOptions: n, userDefinedGreeting: s } = r, o = G(() => e.some((d) => d.items.length > 0), [e]), i = G(() => !s && !o && (t == null ? void 0 : t.assistant) === void 0 && (n == null ? void 0 : n.showWelcomeMessage) !== !1, [o, t == null ? void 0 : t.assistant, n == null ? void 0 : n.showWelcomeMessage, s]), a = G(() => !s && !o && (t == null ? void 0 : t.assistant) !== void 0 && (n == null ? void 0 : n.showWelcomeMessage) !== !1, [s, o, t == null ? void 0 : t.assistant, n == null ? void 0 : n.showWelcomeMessage]), u = G(() => !o && (n == null ? void 0 : n.conversationStarters) && (n == null ? void 0 : n.conversationStarters.length) > 0, [o, n == null ? void 0 : n.conversationStarters]), l = G(() => s !== void 0 && (n == null ? void 0 : n.showWelcomeMessage) !== !1, [s]);
  te(() => {
    s && (n == null ? void 0 : n.showWelcomeMessage) === !1 && Zt("Configuration conflict: The greeting UI override provided via <AiChatUI.Greeting> will not be shown because conversationOptions.showWelcomeMessage is set to false.");
  }, [n == null ? void 0 : n.showWelcomeMessage, s]);
  const c = !(i || a || l || o);
  return v.jsxs(v.Fragment, { children: [i && v.jsx(Nc, {}), a && v.jsx(oi, { name: t.assistant.name, avatar: t.assistant.avatar, message: t.assistant.tagline }), l && v.jsx(Us, { children: s }), c && v.jsx(Us, { children: null }), v.jsx("div", { className: "nlux-conversationStarters-container", children: u && v.jsx(Uc, { items: n.conversationStarters ?? [], onConversationStarterSelected: r.onConversationStarterSelected }) })] });
}, _s = () => v.jsx("div", { className: "nlux-comp-messageLoader", children: v.jsx("div", { className: "nlux-comp-loaderContainer", children: v.jsx("span", { className: "spinning-loader" }) }) }), qs = { Loader: (r) => v.jsx(v.Fragment, { children: r.children }), Greeting: (r) => v.jsx(v.Fragment, { children: r.children }) }, Sr = vo({}), Yc = function(r) {
  var Ae, j, je, qe, He;
  const { adapter: e, className: t, initialConversation: n, conversationOptions: s, composerOptions: o, displayOptions: i } = r, { themeId: a, colorScheme: u } = i ?? {}, l = ue(null), c = ue(null), d = ue(void 0), p = ue(null), h = ((C, L) => {
    const [Q, ce] = ye(), [Ce, Se] = ye(), de = ue(Q), Re = ue(L);
    return te(() => {
      const P = C.current || void 0;
      P !== Ce && Se(P);
    }), te(() => {
      Ce ? de.current ? de.current.updateConversationContainer(Ce) : (de.current = Lc(Ce, Re.current ?? Ns), ce(de.current)) : de.current && (de.current.destroy(), ce(void 0), de.current = void 0);
    }, [Ce]), te(() => {
      Re.current = L, de.current && de.current.updateProps({ autoScroll: L ?? Ns });
    }, [L]), Q;
  })(c, s == null ? void 0 : s.autoScroll), m = G(() => p.current ? _a(p.current) : void 0, [p.current]), g = (() => {
    const C = {}, L = /* @__PURE__ */ new Set();
    return G(() => ({ getStreamingDomElement: (Q) => {
      if (L.has(Q) && L.delete(Q), C[Q] === void 0) {
        const ce = document.createElement("div");
        ce.setAttribute("nlux-message-id", Q), ce.className = "nlux-markdown-container", C[Q] = ce;
      }
      return C[Q];
    }, deleteStreamingDomElement: (Q) => {
      L.add(Q), setTimeout(() => {
        L.forEach((ce) => {
          C[ce] && (C[ce].remove(), delete C[ce]);
        }), L.clear();
      }, 1e3);
    } }), []);
  })(), { PrimitivesContextProvider: b } = function(C) {
    var ce, Ce, Se, de, Re, P, U, he, pe;
    const [L, Q] = ye(C);
    return te(() => {
      Q(C);
    }, [(ce = C == null ? void 0 : C.messageOptions) == null ? void 0 : ce.htmlSanitizer, (Ce = C == null ? void 0 : C.messageOptions) == null ? void 0 : Ce.syntaxHighlighter, (Se = C == null ? void 0 : C.messageOptions) == null ? void 0 : Se.markdownLinkTarget, (de = C == null ? void 0 : C.messageOptions) == null ? void 0 : de.showCodeBlockCopyButton, (Re = C == null ? void 0 : C.messageOptions) == null ? void 0 : Re.skipStreamingAnimation, (P = C == null ? void 0 : C.messageOptions) == null ? void 0 : P.streamingAnimationSpeed, (U = C == null ? void 0 : C.messageOptions) == null ? void 0 : U.waitTimeBeforeStreamCompletion, (he = C == null ? void 0 : C.messageOptions) == null ? void 0 : he.responseRenderer, (pe = C == null ? void 0 : C.messageOptions) == null ? void 0 : pe.promptRenderer]), { PrimitivesContextProvider: G(() => ({ children: De }) => v.jsx(Sr.Provider, { value: L, children: De }), [L]), primitivesContext: Sr };
  }({ messageOptions: r.messageOptions }), [k, y] = ye(""), [x, A] = ye("typing"), [w, R] = ye(), [M, F] = ye([]), [T, I] = ye([]), [_, D] = ye([]), z = G(() => w ? [w, ...M] : M, [w, M]), B = G(() => ((C) => {
    const L = C;
    if (typeof (L == null ? void 0 : L.create) == "function") return L.create();
    if (typeof (L == null ? void 0 : L.batchText) == "function" || typeof (L == null ? void 0 : L.streamText) == "function" || typeof (L == null ? void 0 : L.streamServerComponent) == "function") return C;
    Le("Unable to determine the type of the adapter! Missing batchText or streamText method.");
  })(e), [e]), X = ((C) => G(() => {
    const L = { minWidth: "280px", minHeight: "280px" };
    return C != null && C.width && (L.width = C.width), C != null && C.height && (L.height = C.height), L;
  }, [C == null ? void 0 : C.width, C == null ? void 0 : C.height]))(i), re = G(() => ((C) => {
    const L = ["nlux-AiChat-root"], Q = `nlux-theme-${C.themeId || "nova"}`;
    return L.push(Q), C.className && L.push(C.className), L;
  })({ className: t, themeId: a }).join(" "), [t, a]), oe = G(() => {
    var C;
    return u !== "auto" && u ? u : typeof globalThis !== void 0 && globalThis.matchMedia && ((C = globalThis.matchMedia("(prefers-color-scheme: dark)")) != null && C.matches) ? "dark" : "light";
  }, [u]), le = ve((C) => m == null ? void 0 : m.displayException(C), [m]), N = function(C, L, Q, ce, Ce, Se, de, Re) {
    return ve(() => {
      var U;
      const P = C.length > 0 ? C[C.length - 1] : void 0;
      (P == null ? void 0 : P.status) === "active" && (ce(C.slice(0, -1)), Ce([...L, P.uid]), Se([...Q, ...P.items.map((he) => he.uid)]), (U = de.current) == null || U.cancelSegmentStreams(P.uid)), Re("typing");
    }, [C, L, Q, ce, Ce, Se, de, Re]);
  }(M, T, _, F, I, D, l, A), S = ve((C) => y(C), [y]), O = Hc({ aiChatProps: r, adapterToUse: B, conversationRef: l, initialSegment: w, newSegments: M, cancelledMessageIds: _, cancelledSegmentIds: T, prompt: k, composerOptions: o, showException: le, setChatSegments: F, setComposerStatus: A, setPrompt: y }), H = ((C, L, Q, ce, Ce, Se) => ve((de, Re, P) => {
    if (de === "initial" && C) {
      const pe = [];
      for (const Qe of C.items) {
        if (Qe.uid === Re) break;
        pe.push(Qe);
      }
      const De = { ...C, items: pe };
      return L(De), ce([]), Ce(P), void Se("submitting-edit");
    }
    const U = Q.findIndex((pe) => pe.uid === de), he = Q.slice(0, U);
    ce(he), Ce(P), Se("submitting-edit");
  }, [Q, ce, C, L, Ce, Se]))(w, R, M, F, y, A), q = ve((C, L) => {
    var Q;
    (Q = r.events) != null && Q.messageRendered && r.events.messageRendered({ uid: L });
  }, []), W = ve((C) => {
    y(C.prompt), A("submitting-conversation-starter");
  }, [y, A]), ne = ((C, L) => ve((Q) => {
    C && Q && (L.current = Q.uid, C.handleNewChatSegmentAdded(Q.uid, Q.div));
  }, [C]))(h, d);
  te(() => {
    x !== "submitting-conversation-starter" && x !== "submitting-external-message" && x !== "submitting-edit" || O();
  }, [x, O]), te(() => R(n ? { uid: "initial", status: "complete", items: n.map((C, L) => {
    if (C.role === "assistant" || C.role === "user") return C.role === "user" ? typeof C.message != "string" ? void Le(`Invalid message type for item at index ${L} in initial conversation: When role is "user", message must be a string`) : { uid: tt(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: C.message } : { uid: tt(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "assistant", content: C.message, serverResponse: C.serverResponse, dataTransferMode: "batch" };
    Le(`Invalid role for item at index ${L} in initial conversation: Role must be "assistant" or "user"`);
  }).filter((C) => C !== void 0) } : void 0), [n]), te(() => {
    var C;
    w && ((C = c.current) == null || C.scrollTo({ behavior: "smooth", top: 5e4 }));
  }, [w]);
  const Y = ue(void 0);
  te(() => {
    const C = r.api;
    Y.current = C, typeof (C == null ? void 0 : C.__setHost) == "function" ? C.__setHost({ sendMessage: (L) => {
      y(L), A("submitting-external-message");
    }, resetConversation: () => {
      F([]), R(void 0);
    }, cancelLastMessageRequest: N }) : Zt(`API object passed was is not compatible with AiChat.
Only use API objects created by the useAiChatApi() hook.`);
  }, [r.api, N, y, A, F, R]), te(() => () => {
    var C;
    typeof ((C = Y.current) == null ? void 0 : C.__unsetHost) == "function" && (Y.current.__unsetHost(), Y.current = void 0);
  }, []), ((C) => {
    te(() => {
      var Q;
      const L = (Q = C.events) == null ? void 0 : Q.ready;
      L && L({ aiChatProps: Cr(C) });
    }, []);
  })(r), ((C, L) => {
    var Ce;
    const Q = ue(), ce = ue();
    te(() => {
      Q.current = () => {
        const Se = [];
        return L.forEach((de) => {
          de.items && de.items.length !== 0 && de.items.forEach((Re) => {
            Re.status === "complete" && (Re.participantRole !== "assistant" ? Re.participantRole === "user" && Se.push({ role: "user", message: Re.content }) : Se.push({ role: "assistant", message: Re.content }));
          });
        }), Se;
      };
    }, [L]), te(() => {
      var Se;
      ce.current = (Se = C.events) == null ? void 0 : Se.preDestroy;
    }, [(Ce = C.events) == null ? void 0 : Ce.preDestroy]), te(() => () => {
      var de;
      const Se = ce.current;
      Se && (Se({ aiChatProps: Cr(C), conversationHistory: ((de = Q.current) == null ? void 0 : de.call(Q)) ?? [] }), Q.current = void 0);
    }, []);
  })(r, z);
  const K = G(() => Kt(Pc), []), J = ((C) => {
    const L = G(() => C.children ? Array.isArray(C.children) ? C.children : [C.children] : [], [C.children]);
    return { Loader: G(() => L.length === 0 ? v.jsx(_s, {}) : L.find((Q) => Q.type === qs.Loader) || v.jsx(_s, {}), [L]), Greeting: G(() => {
      if (L.length !== 0) return L.find((Q) => Q.type === qs.Greeting);
    }, [L]) };
  })(r), se = k.length > 0, V = z.length === 0 ? "nlux-chatRoom-starting" : "nlux-chatRoom-active";
  return B ? v.jsx(b, { children: v.jsxs("div", { className: re, style: X, "data-color-scheme": oe, children: [v.jsx("div", { className: "nlux-comp-exceptionBox", ref: p }), v.jsxs("div", { className: `nlux-chatRoom-container ${V}`, children: [v.jsx("div", { className: "nlux-launchPad-container", children: v.jsx(qc, { segments: z, onConversationStarterSelected: W, conversationOptions: s, personaOptions: r.personaOptions, userDefinedGreeting: J.Greeting }) }), v.jsx("div", { className: "nlux-conversation-container", ref: c, children: v.jsx(K, { ref: l, segments: z, conversationOptions: r.conversationOptions, personaOptions: r.personaOptions, messageOptions: r.messageOptions, onLastActiveSegmentChange: ne, Loader: J.Loader, markdownContainersController: g, submitShortcutKey: (Ae = r.composerOptions) == null ? void 0 : Ae.submitShortcut, onPromptResubmit: H, onMarkdownStreamRendered: q }) }), v.jsx("div", { className: "nlux-composer-container", children: v.jsx(jc, { status: x, prompt: k, hasValidInput: se, placeholder: (j = r.composerOptions) == null ? void 0 : j.placeholder, autoFocus: (je = r.composerOptions) == null ? void 0 : je.autoFocus, submitShortcut: (qe = r.composerOptions) == null ? void 0 : qe.submitShortcut, hideStopButton: (He = r.composerOptions) == null ? void 0 : He.hideStopButton, onChange: S, onSubmit: O, onCancel: N, Loader: J.Loader }) })] })] }) }) : (Zt("AiChat: No valid adapter provided. The component will not render."), v.jsx(v.Fragment, {}));
}, qu = () => {
  const r = ue(null), e = ue(/* @__PURE__ */ ((t = () => {
  }) => ({ composer: { send: (n) => {
    throw new Error("AiChatApi is not connected to a host <AiChat /> component.");
  }, cancel: () => {
    throw new Error("AiChatApi is not connected to a host <AiChat /> component.");
  } }, conversation: { reset: () => {
    throw new Error("AiChatApi is not connected to a host <AiChat /> component.");
  } }, __setHost: (n) => {
    t(n);
  }, __unsetHost: () => {
  } }))());
  return e.current.composer.send = (t) => {
    if (!r.current) throw new Error("AiChatApi is not connected to a host <AiChat /> component.");
    r.current.sendMessage(t);
  }, e.current.composer.cancel = () => {
    if (!r.current) throw new Error("AiChatApi is not connected to a host <AiChat /> component.");
    r.current.cancelLastMessageRequest();
  }, e.current.conversation.reset = () => {
    if (!r.current) throw new Error("AiChatApi is not connected to a host <AiChat /> component.");
    r.current.resetConversation();
  }, e.current.__setHost = (t) => {
    r.current = t;
  }, e.current.__unsetHost = () => {
    r.current = null;
  }, e.current;
}, Wc = ({ children: r }) => {
  const e = G(() => Math.random().toString(36).substring(7), []), t = Dr(Sr), n = Array.isArray(r) ? r.join("") : r;
  return v.jsx(kr, { markdownOptions: t.messageOptions, content: n, messageUid: e });
}, Yu = function(r, e) {
  return G(() => ({ batchText: r }), e ?? [{}]);
}, Wu = function(r, e) {
  return G(() => ({ streamText: r }), e ?? [{}]);
}, Qu = function(r, e) {
  return { streamServerComponent: (t, n, s) => () => {
    const [o, i] = ye("idle"), [a, u] = ye(null);
    return te(() => {
      i("loading"), r.then((l) => {
        if (typeof l.default != "function") {
          const c = "The module passed to useAsRscAdapter() as server component does not have a valid default export.";
          return Le(c), i("error"), void s.onError(new Error(c));
        }
        i("success"), u(() => ji(async () => {
          let c, d;
          try {
            d = l.default({ message: t, extras: n }), c = await Promise.resolve(d);
          } catch {
            Le(`An error occurred while rendering the React Server Component (RSC).
Please ensure that no server error has occurred.`), s.onError(new Error("Error while rendering RSC."));
          }
          return s.onServerComponentReceived(), c !== void 0 && Wt(c) ? { default: () => v.jsx(v.Fragment, { children: c }) } : (s.onError(new Error("Unable to render RSC. The RSC adapter should return a valid React element.")), { default: () => v.jsx(v.Fragment, {}) });
        }));
      }).catch((l) => {
        Le(`The module passed to useAsRscAdapter() is not a valid ES module, or did not properly load! The first parameter passed to useAsRscAdapter() should be the result of a dynamic import() call [ without await or .then() ]. The module should also have a default export. Your bundler should be able to handle dynamic imports and ES modules.

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports`), i("error"), s.onError(l);
      });
    }, []), o === "idle" || o === "loading" ? null : o === "error" ? (Le("Error loading RSC"), v.jsx(v.Fragment, { children: "Error loading RSC" })) : v.jsx(Bi, { fallback: e || null, children: a && v.jsx(a, {}) });
  } };
}, Zu = (r, e, t) => {
  const n = Dr(r.ref), [s] = ye(() => {
    let i;
    do
      i = Math.random().toString(36).substring(2, 15);
    while (n.hasItem(i));
    return i;
  }), o = ue();
  te(() => (o.current = n.observeState(s, e, t), () => {
    var i;
    (i = o.current) == null || i.discard(), o.current = void 0;
  }), []), te(() => {
    var i;
    (i = o.current) == null || i.setDescription(e);
  }, [e]), te(() => {
    var i;
    (i = o.current) == null || i.setData(t);
  }, [t]);
}, Xu = (r, e, t, n) => {
  const s = Dr(r.ref), [o] = ye(() => {
    let a;
    do
      a = Math.random().toString(36).substring(2, 15);
    while (s.hasTask(a));
    return a;
  }), i = ue();
  te(() => (i.current = s.registerTask(o, e, t, n), () => {
    var a;
    (a = i.current) == null || a.discard(), i.current = void 0;
  }), []), te(() => {
    var a;
    (a = i.current) == null || a.setDescription(e);
  }, [e]), te(() => {
    var a;
    (a = i.current) == null || a.setCallback(t);
  }, [t]), te(() => {
    var a;
    (a = i.current) == null || a.setParamDescriptions(n ?? []);
  }, [n]);
}, Ku = (r) => {
  const e = Ss(), t = vo(e);
  return { Provider: (n) => {
    const [s, o] = ye(), [i, a] = ye(), [u, l] = ye();
    te(() => {
      let d = !0;
      const p = Ss().withAdapter(r).withDataSyncOptions({ syncStrategy: "auto", contextSize: Ua["100k"] });
      return l(p), p.initialize(n.initialItems || {}).then((h) => {
        d && (h.success ? o(h.contextId) : a(new Error(h.error)));
      }), () => {
        d = !1, p.destroy();
      };
    }, []);
    const { children: c } = n;
    return i ? n.errorComponent ? v.jsx(n.errorComponent, { error: i.message }) : v.jsxs("div", { children: [v.jsx("h1", { children: "Error initializing AI context" }), v.jsx("p", { children: i.message })] }) : s && u ? v.jsx(t.Provider, { value: u, children: c }) : n.loadingComponent ? v.jsx(n.loadingComponent, {}) : null;
  }, ref: t };
}, Gu = function(r, e) {
  return te(r, function(t) {
    const n = ue(t), s = ue(0);
    return Ut(t, n.current) || (n.current = t, s.current += 1), G(() => n.current, [s.current]);
  }(e));
};
var ii = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ys = _e.createContext && /* @__PURE__ */ _e.createContext(ii), Qc = ["attr", "size", "title"];
function Zc(r, e) {
  if (r == null) return {};
  var t = Xc(r, e), n, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (s = 0; s < o.length; s++)
      n = o[s], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function Xc(r, e) {
  if (r == null) return {};
  var t = {};
  for (var n in r)
    if (Object.prototype.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
  return t;
}
function Dn() {
  return Dn = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Dn.apply(this, arguments);
}
function Ws(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function jn(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ws(Object(t), !0).forEach(function(n) {
      Kc(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Ws(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function Kc(r, e, t) {
  return e = Gc(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Gc(r) {
  var e = Jc(r, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Jc(r, e) {
  if (typeof r != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function ai(r) {
  return r && r.map((e, t) => /* @__PURE__ */ _e.createElement(e.tag, jn({
    key: t
  }, e.attr), ai(e.child)));
}
function Vc(r) {
  return (e) => /* @__PURE__ */ _e.createElement(el, Dn({
    attr: jn({}, r.attr)
  }, e), ai(r.child));
}
function el(r) {
  var e = (t) => {
    var {
      attr: n,
      size: s,
      title: o
    } = r, i = Zc(r, Qc), a = s || t.size || "1em", u;
    return t.className && (u = t.className), r.className && (u = (u ? u + " " : "") + r.className), /* @__PURE__ */ _e.createElement("svg", Dn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, n, i, {
      className: u,
      style: jn(jn({
        color: r.color || t.color
      }, t.style), r.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ _e.createElement("title", null, o), r.children);
  };
  return Ys !== void 0 ? /* @__PURE__ */ _e.createElement(Ys.Consumer, null, (t) => e(t)) : e(ii);
}
function tl(r) {
  return Vc({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" }, child: [] }] })(r);
}
var nl = /* @__PURE__ */ ((r) => (r.Text = "Text", r.ImageUrl = "ImageUrl", r))(nl || {}), rl = /* @__PURE__ */ ((r) => (r.SystemMessage = "system", r.AIMessage = "ai", r.HumanMessage = "human", r))(rl || {}), sl = /* @__PURE__ */ ((r) => (r.Auto = "Auto", r.Low = "Low", r.High = "High", r))(sl || {});
async function ol(r) {
  const { files: e, message: t } = r;
  if (!e || !e.length)
    return t;
  {
    let n = await Promise.all(e.map(async (s) => {
      const o = await il(s, r.resizeOptions);
      if (!o)
        throw new Error("resize failed");
      const i = await al(o);
      if (!i)
        throw new Error("base64 failed");
      return [
        "ImageUrl",
        i,
        null
      ];
    }));
    return n.push(
      [
        "Text",
        t,
        null
      ]
    ), n;
  }
}
const il = async (r, e) => {
  const t = (e == null ? void 0 : e.maxSize) || 256, n = document.createElement("canvas"), s = n.getContext("2d");
  if (!s) throw new Error("ctx is not available");
  n.width = t, n.height = t;
  const o = await createImageBitmap(r), { width: i, height: a } = o, u = Math.max(t / i, t / a), l = (t - i * u) / 2, c = (t - a * u) / 2;
  return s.drawImage(o, 0, 0, i, a, l, c, i * u, a * u), new Promise((d) => {
    n.toBlob((p) => {
      d(p);
    });
  });
};
async function al(r) {
  return new Promise((e, t) => {
    const n = new FileReader();
    n.onloadend = () => e(n.result), n.readAsDataURL(r);
  });
}
async function cl(r, e) {
  const t = r.getReader();
  let n;
  for (; !(n = await t.read()).done; )
    e(n.value);
}
function ll(r) {
  let e, t, n, s = !1;
  return function(i) {
    e === void 0 ? (e = i, t = 0, n = -1) : e = dl(e, i);
    const a = e.length;
    let u = 0;
    for (; t < a; ) {
      s && (e[t] === 10 && (u = ++t), s = !1);
      let l = -1;
      for (; t < a && l === -1; ++t)
        switch (e[t]) {
          case 58:
            n === -1 && (n = t - u);
            break;
          case 13:
            s = !0;
          case 10:
            l = t;
            break;
        }
      if (l === -1)
        break;
      r(e.subarray(u, l), n), u = t, n = -1;
    }
    u === a ? e = void 0 : u !== 0 && (e = e.subarray(u), t -= u);
  };
}
function ul(r, e, t) {
  let n = Qs();
  const s = new TextDecoder();
  return function(i, a) {
    if (i.length === 0)
      t == null || t(n), n = Qs();
    else if (a > 0) {
      const u = s.decode(i.subarray(0, a)), l = a + (i[a + 1] === 32 ? 2 : 1), c = s.decode(i.subarray(l));
      switch (u) {
        case "data":
          n.data = n.data ? n.data + (c || `
`) : c || `
`;
          break;
        case "event":
          n.event = c;
          break;
        case "id":
          r(n.id = c);
          break;
        case "retry":
          const d = parseInt(c, 10);
          isNaN(d) || e(n.retry = d);
          break;
      }
    }
  };
}
function dl(r, e) {
  const t = new Uint8Array(r.length + e.length);
  return t.set(r), t.set(e, r.length), t;
}
function Qs() {
  return {
    data: "",
    event: "",
    id: "",
    retry: void 0
  };
}
var pl = function(r, e) {
  var t = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(r); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[s]) && (t[n[s]] = r[n[s]]);
  return t;
};
const Ar = "text/event-stream", hl = 1e3, Zs = "last-event-id";
function ml(r, e) {
  var { signal: t, headers: n, onopen: s, onmessage: o, onclose: i, onerror: a, openWhenHidden: u, fetch: l } = e, c = pl(e, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"]);
  return new Promise((d, p) => {
    const h = Object.assign({}, n);
    h.accept || (h.accept = Ar);
    let m;
    function g() {
      m.abort(), document.hidden || w();
    }
    u || document.addEventListener("visibilitychange", g);
    let b = hl, k = 0;
    function y() {
      document.removeEventListener("visibilitychange", g), window.clearTimeout(k), m.abort();
    }
    t == null || t.addEventListener("abort", () => {
      y(), d();
    });
    const x = l ?? window.fetch, A = s ?? fl;
    async function w() {
      var R;
      m = new AbortController();
      try {
        const M = await x(r, Object.assign(Object.assign({}, c), { headers: h, signal: m.signal }));
        await A(M), await cl(M.body, ll(ul((F) => {
          F ? h[Zs] = F : delete h[Zs];
        }, (F) => {
          b = F;
        }, o))), i == null || i(), y(), d();
      } catch (M) {
        if (!m.signal.aborted)
          try {
            const F = (R = a == null ? void 0 : a(M)) !== null && R !== void 0 ? R : b;
            window.clearTimeout(k), k = window.setTimeout(w, F);
          } catch (F) {
            y(), p(F);
          }
      }
    }
    w();
  });
}
function fl(r) {
  const e = r.headers.get("content-type");
  if (!(e != null && e.startsWith(Ar)))
    throw new Error(`Expected content-type to be ${Ar}, Actual: ${e}`);
}
const ci = "https://api.dev.langdb.ai", li = async (r) => {
  var t;
  const e = { "Content-Type": "application/json" };
  if (r.publicId)
    e["X-PUBLIC-APPLICATION-ID"] = r.publicId;
  else {
    const n = await ((t = r.getAccessToken) == null ? void 0 : t.call(r));
    if (!n)
      throw new Error("Failed to get the user token");
    e.Authorization = `Bearer ${n}`;
  }
  return e;
};
class Xn extends Error {
}
const gl = (r) => {
  const { files: e, fileResizeOptions: t } = r, s = `${r.serverUrl || ci}/stream`, [o, i] = ye(r.threadId), [a, u] = ye(), { modelName: l, agentParams: c } = r;
  return {
    adapter: {
      streamText: async (p, h) => {
        try {
          const m = await li(r), g = await ol({ files: e, message: p, resizeOptions: t }), b = {
            model_name: l,
            parameters: c || {},
            user_id: r.userId || "",
            thread_id: o,
            message: g
          };
          await ml(s, {
            method: "POST",
            body: JSON.stringify(b),
            headers: m,
            credentials: "include",
            async onopen(k) {
              if (k.ok && k.headers.get("content-type") === "text/event-stream") {
                const y = k.headers.get("X-Thread-Id"), x = k.headers.get("X-Message-Id");
                if (u(x), i(y), r.responseCallback) {
                  const A = k == null ? void 0 : k.headers.get("x-trace-id");
                  r.responseCallback({
                    traceId: A,
                    modelName: l,
                    threadId: y,
                    messageId: x
                  });
                }
                if (!k.body)
                  throw new Xn("No body found");
                return;
              } else if (k.status >= 400 && k.status < 500 && k.status !== 429) {
                const y = await k.text();
                throw new Xn(y || `${k.status}: Failed to send message to the server`);
              } else
                return;
            },
            onmessage(k) {
              if (k.event)
                throw new Xn(k.data);
              h.next(k.data);
            },
            onclose() {
            },
            onerror(k) {
              throw k;
            }
          });
        } catch (m) {
          const g = new Error(m.toString());
          r.responseCallback && r.responseCallback({ error: g, modelName: l }), h.error(g);
        }
        h.complete();
      }
    },
    threadId: o,
    messageId: a
  };
};
var Er = { exports: {} }, yn = { exports: {} }, fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xs;
function vl() {
  if (Xs) return fe;
  Xs = 1;
  var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, s = r ? Symbol.for("react.strict_mode") : 60108, o = r ? Symbol.for("react.profiler") : 60114, i = r ? Symbol.for("react.provider") : 60109, a = r ? Symbol.for("react.context") : 60110, u = r ? Symbol.for("react.async_mode") : 60111, l = r ? Symbol.for("react.concurrent_mode") : 60111, c = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, p = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, m = r ? Symbol.for("react.lazy") : 60116, g = r ? Symbol.for("react.block") : 60121, b = r ? Symbol.for("react.fundamental") : 60117, k = r ? Symbol.for("react.responder") : 60118, y = r ? Symbol.for("react.scope") : 60119;
  function x(w) {
    if (typeof w == "object" && w !== null) {
      var R = w.$$typeof;
      switch (R) {
        case e:
          switch (w = w.type, w) {
            case u:
            case l:
            case n:
            case o:
            case s:
            case d:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case a:
                case c:
                case m:
                case h:
                case i:
                  return w;
                default:
                  return R;
              }
          }
        case t:
          return R;
      }
    }
  }
  function A(w) {
    return x(w) === l;
  }
  return fe.AsyncMode = u, fe.ConcurrentMode = l, fe.ContextConsumer = a, fe.ContextProvider = i, fe.Element = e, fe.ForwardRef = c, fe.Fragment = n, fe.Lazy = m, fe.Memo = h, fe.Portal = t, fe.Profiler = o, fe.StrictMode = s, fe.Suspense = d, fe.isAsyncMode = function(w) {
    return A(w) || x(w) === u;
  }, fe.isConcurrentMode = A, fe.isContextConsumer = function(w) {
    return x(w) === a;
  }, fe.isContextProvider = function(w) {
    return x(w) === i;
  }, fe.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, fe.isForwardRef = function(w) {
    return x(w) === c;
  }, fe.isFragment = function(w) {
    return x(w) === n;
  }, fe.isLazy = function(w) {
    return x(w) === m;
  }, fe.isMemo = function(w) {
    return x(w) === h;
  }, fe.isPortal = function(w) {
    return x(w) === t;
  }, fe.isProfiler = function(w) {
    return x(w) === o;
  }, fe.isStrictMode = function(w) {
    return x(w) === s;
  }, fe.isSuspense = function(w) {
    return x(w) === d;
  }, fe.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === l || w === o || w === s || w === d || w === p || typeof w == "object" && w !== null && (w.$$typeof === m || w.$$typeof === h || w.$$typeof === i || w.$$typeof === a || w.$$typeof === c || w.$$typeof === b || w.$$typeof === k || w.$$typeof === y || w.$$typeof === g);
  }, fe.typeOf = x, fe;
}
var ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ks;
function yl() {
  return Ks || (Ks = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, s = r ? Symbol.for("react.strict_mode") : 60108, o = r ? Symbol.for("react.profiler") : 60114, i = r ? Symbol.for("react.provider") : 60109, a = r ? Symbol.for("react.context") : 60110, u = r ? Symbol.for("react.async_mode") : 60111, l = r ? Symbol.for("react.concurrent_mode") : 60111, c = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, p = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, m = r ? Symbol.for("react.lazy") : 60116, g = r ? Symbol.for("react.block") : 60121, b = r ? Symbol.for("react.fundamental") : 60117, k = r ? Symbol.for("react.responder") : 60118, y = r ? Symbol.for("react.scope") : 60119;
    function x(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === n || j === l || j === o || j === s || j === d || j === p || typeof j == "object" && j !== null && (j.$$typeof === m || j.$$typeof === h || j.$$typeof === i || j.$$typeof === a || j.$$typeof === c || j.$$typeof === b || j.$$typeof === k || j.$$typeof === y || j.$$typeof === g);
    }
    function A(j) {
      if (typeof j == "object" && j !== null) {
        var je = j.$$typeof;
        switch (je) {
          case e:
            var qe = j.type;
            switch (qe) {
              case u:
              case l:
              case n:
              case o:
              case s:
              case d:
                return qe;
              default:
                var He = qe && qe.$$typeof;
                switch (He) {
                  case a:
                  case c:
                  case m:
                  case h:
                  case i:
                    return He;
                  default:
                    return je;
                }
            }
          case t:
            return je;
        }
      }
    }
    var w = u, R = l, M = a, F = i, T = e, I = c, _ = n, D = m, z = h, B = t, X = o, re = s, oe = d, le = !1;
    function N(j) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), S(j) || A(j) === u;
    }
    function S(j) {
      return A(j) === l;
    }
    function O(j) {
      return A(j) === a;
    }
    function H(j) {
      return A(j) === i;
    }
    function q(j) {
      return typeof j == "object" && j !== null && j.$$typeof === e;
    }
    function W(j) {
      return A(j) === c;
    }
    function ne(j) {
      return A(j) === n;
    }
    function Y(j) {
      return A(j) === m;
    }
    function K(j) {
      return A(j) === h;
    }
    function J(j) {
      return A(j) === t;
    }
    function se(j) {
      return A(j) === o;
    }
    function V(j) {
      return A(j) === s;
    }
    function Ae(j) {
      return A(j) === d;
    }
    ge.AsyncMode = w, ge.ConcurrentMode = R, ge.ContextConsumer = M, ge.ContextProvider = F, ge.Element = T, ge.ForwardRef = I, ge.Fragment = _, ge.Lazy = D, ge.Memo = z, ge.Portal = B, ge.Profiler = X, ge.StrictMode = re, ge.Suspense = oe, ge.isAsyncMode = N, ge.isConcurrentMode = S, ge.isContextConsumer = O, ge.isContextProvider = H, ge.isElement = q, ge.isForwardRef = W, ge.isFragment = ne, ge.isLazy = Y, ge.isMemo = K, ge.isPortal = J, ge.isProfiler = se, ge.isStrictMode = V, ge.isSuspense = Ae, ge.isValidElementType = x, ge.typeOf = A;
  }()), ge;
}
var Gs;
function ui() {
  return Gs || (Gs = 1, process.env.NODE_ENV === "production" ? yn.exports = vl() : yn.exports = yl()), yn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Kn, Js;
function xl() {
  if (Js) return Kn;
  Js = 1;
  var r = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var i = {}, a = 0; a < 10; a++)
        i["_" + String.fromCharCode(a)] = a;
      var u = Object.getOwnPropertyNames(i).map(function(c) {
        return i[c];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        l[c] = c;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Kn = s() ? Object.assign : function(o, i) {
    for (var a, u = n(o), l, c = 1; c < arguments.length; c++) {
      a = Object(arguments[c]);
      for (var d in a)
        e.call(a, d) && (u[d] = a[d]);
      if (r) {
        l = r(a);
        for (var p = 0; p < l.length; p++)
          t.call(a, l[p]) && (u[l[p]] = a[l[p]]);
      }
    }
    return u;
  }, Kn;
}
var Gn, Vs;
function Qr() {
  if (Vs) return Gn;
  Vs = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Gn = r, Gn;
}
var Jn, eo;
function di() {
  return eo || (eo = 1, Jn = Function.call.bind(Object.prototype.hasOwnProperty)), Jn;
}
var Vn, to;
function bl() {
  if (to) return Vn;
  to = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Qr(), t = {}, n = di();
    r = function(o) {
      var i = "Warning: " + o;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function s(o, i, a, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in o)
        if (n(o, c)) {
          var d;
          try {
            if (typeof o[c] != "function") {
              var p = Error(
                (u || "React class") + ": " + a + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            d = o[c](i, c, u, a, null, e);
          } catch (m) {
            d = m;
          }
          if (d && !(d instanceof Error) && r(
            (u || "React class") + ": type specification of " + a + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in t)) {
            t[d.message] = !0;
            var h = l ? l() : "";
            r(
              "Failed " + a + " type: " + d.message + (h ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Vn = s, Vn;
}
var er, no;
function wl() {
  if (no) return er;
  no = 1;
  var r = ui(), e = xl(), t = Qr(), n = di(), s = bl(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(a) {
    var u = "Warning: " + a;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return er = function(a, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function d(S) {
      var O = S && (l && S[l] || S[c]);
      if (typeof O == "function")
        return O;
    }
    var p = "<<anonymous>>", h = {
      array: k("array"),
      bigint: k("bigint"),
      bool: k("boolean"),
      func: k("function"),
      number: k("number"),
      object: k("object"),
      string: k("string"),
      symbol: k("symbol"),
      any: y(),
      arrayOf: x,
      element: A(),
      elementType: w(),
      instanceOf: R,
      node: I(),
      objectOf: F,
      oneOf: M,
      oneOfType: T,
      shape: D,
      exact: z
    };
    function m(S, O) {
      return S === O ? S !== 0 || 1 / S === 1 / O : S !== S && O !== O;
    }
    function g(S, O) {
      this.message = S, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function b(S) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, H = 0;
      function q(ne, Y, K, J, se, V, Ae) {
        if (J = J || p, V = V || K, Ae !== t) {
          if (u) {
            var j = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw j.name = "Invariant Violation", j;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var je = J + ":" + K;
            !O[je] && // Avoid spamming the console because they are often not actionable except for lib authors
            H < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + J + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[je] = !0, H++);
          }
        }
        return Y[K] == null ? ne ? Y[K] === null ? new g("The " + se + " `" + V + "` is marked as required " + ("in `" + J + "`, but its value is `null`.")) : new g("The " + se + " `" + V + "` is marked as required in " + ("`" + J + "`, but its value is `undefined`.")) : null : S(Y, K, J, se, V);
      }
      var W = q.bind(null, !1);
      return W.isRequired = q.bind(null, !0), W;
    }
    function k(S) {
      function O(H, q, W, ne, Y, K) {
        var J = H[q], se = re(J);
        if (se !== S) {
          var V = oe(J);
          return new g(
            "Invalid " + ne + " `" + Y + "` of type " + ("`" + V + "` supplied to `" + W + "`, expected ") + ("`" + S + "`."),
            { expectedType: S }
          );
        }
        return null;
      }
      return b(O);
    }
    function y() {
      return b(i);
    }
    function x(S) {
      function O(H, q, W, ne, Y) {
        if (typeof S != "function")
          return new g("Property `" + Y + "` of component `" + W + "` has invalid PropType notation inside arrayOf.");
        var K = H[q];
        if (!Array.isArray(K)) {
          var J = re(K);
          return new g("Invalid " + ne + " `" + Y + "` of type " + ("`" + J + "` supplied to `" + W + "`, expected an array."));
        }
        for (var se = 0; se < K.length; se++) {
          var V = S(K, se, W, ne, Y + "[" + se + "]", t);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return b(O);
    }
    function A() {
      function S(O, H, q, W, ne) {
        var Y = O[H];
        if (!a(Y)) {
          var K = re(Y);
          return new g("Invalid " + W + " `" + ne + "` of type " + ("`" + K + "` supplied to `" + q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(S);
    }
    function w() {
      function S(O, H, q, W, ne) {
        var Y = O[H];
        if (!r.isValidElementType(Y)) {
          var K = re(Y);
          return new g("Invalid " + W + " `" + ne + "` of type " + ("`" + K + "` supplied to `" + q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(S);
    }
    function R(S) {
      function O(H, q, W, ne, Y) {
        if (!(H[q] instanceof S)) {
          var K = S.name || p, J = N(H[q]);
          return new g("Invalid " + ne + " `" + Y + "` of type " + ("`" + J + "` supplied to `" + W + "`, expected ") + ("instance of `" + K + "`."));
        }
        return null;
      }
      return b(O);
    }
    function M(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), i;
      function O(H, q, W, ne, Y) {
        for (var K = H[q], J = 0; J < S.length; J++)
          if (m(K, S[J]))
            return null;
        var se = JSON.stringify(S, function(Ae, j) {
          var je = oe(j);
          return je === "symbol" ? String(j) : j;
        });
        return new g("Invalid " + ne + " `" + Y + "` of value `" + String(K) + "` " + ("supplied to `" + W + "`, expected one of " + se + "."));
      }
      return b(O);
    }
    function F(S) {
      function O(H, q, W, ne, Y) {
        if (typeof S != "function")
          return new g("Property `" + Y + "` of component `" + W + "` has invalid PropType notation inside objectOf.");
        var K = H[q], J = re(K);
        if (J !== "object")
          return new g("Invalid " + ne + " `" + Y + "` of type " + ("`" + J + "` supplied to `" + W + "`, expected an object."));
        for (var se in K)
          if (n(K, se)) {
            var V = S(K, se, W, ne, Y + "." + se, t);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return b(O);
    }
    function T(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var O = 0; O < S.length; O++) {
        var H = S[O];
        if (typeof H != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(H) + " at index " + O + "."
          ), i;
      }
      function q(W, ne, Y, K, J) {
        for (var se = [], V = 0; V < S.length; V++) {
          var Ae = S[V], j = Ae(W, ne, Y, K, J, t);
          if (j == null)
            return null;
          j.data && n(j.data, "expectedType") && se.push(j.data.expectedType);
        }
        var je = se.length > 0 ? ", expected one of type [" + se.join(", ") + "]" : "";
        return new g("Invalid " + K + " `" + J + "` supplied to " + ("`" + Y + "`" + je + "."));
      }
      return b(q);
    }
    function I() {
      function S(O, H, q, W, ne) {
        return B(O[H]) ? null : new g("Invalid " + W + " `" + ne + "` supplied to " + ("`" + q + "`, expected a ReactNode."));
      }
      return b(S);
    }
    function _(S, O, H, q, W) {
      return new g(
        (S || "React class") + ": " + O + " type `" + H + "." + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + W + "`."
      );
    }
    function D(S) {
      function O(H, q, W, ne, Y) {
        var K = H[q], J = re(K);
        if (J !== "object")
          return new g("Invalid " + ne + " `" + Y + "` of type `" + J + "` " + ("supplied to `" + W + "`, expected `object`."));
        for (var se in S) {
          var V = S[se];
          if (typeof V != "function")
            return _(W, ne, Y, se, oe(V));
          var Ae = V(K, se, W, ne, Y + "." + se, t);
          if (Ae)
            return Ae;
        }
        return null;
      }
      return b(O);
    }
    function z(S) {
      function O(H, q, W, ne, Y) {
        var K = H[q], J = re(K);
        if (J !== "object")
          return new g("Invalid " + ne + " `" + Y + "` of type `" + J + "` " + ("supplied to `" + W + "`, expected `object`."));
        var se = e({}, H[q], S);
        for (var V in se) {
          var Ae = S[V];
          if (n(S, V) && typeof Ae != "function")
            return _(W, ne, Y, V, oe(Ae));
          if (!Ae)
            return new g(
              "Invalid " + ne + " `" + Y + "` key `" + V + "` supplied to `" + W + "`.\nBad object: " + JSON.stringify(H[q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(S), null, "  ")
            );
          var j = Ae(K, V, W, ne, Y + "." + V, t);
          if (j)
            return j;
        }
        return null;
      }
      return b(O);
    }
    function B(S) {
      switch (typeof S) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !S;
        case "object":
          if (Array.isArray(S))
            return S.every(B);
          if (S === null || a(S))
            return !0;
          var O = d(S);
          if (O) {
            var H = O.call(S), q;
            if (O !== S.entries) {
              for (; !(q = H.next()).done; )
                if (!B(q.value))
                  return !1;
            } else
              for (; !(q = H.next()).done; ) {
                var W = q.value;
                if (W && !B(W[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function X(S, O) {
      return S === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function re(S) {
      var O = typeof S;
      return Array.isArray(S) ? "array" : S instanceof RegExp ? "object" : X(O, S) ? "symbol" : O;
    }
    function oe(S) {
      if (typeof S > "u" || S === null)
        return "" + S;
      var O = re(S);
      if (O === "object") {
        if (S instanceof Date)
          return "date";
        if (S instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function le(S) {
      var O = oe(S);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function N(S) {
      return !S.constructor || !S.constructor.name ? p : S.constructor.name;
    }
    return h.checkPropTypes = s, h.resetWarningCache = s.resetWarningCache, h.PropTypes = h, h;
  }, er;
}
var tr, ro;
function kl() {
  if (ro) return tr;
  ro = 1;
  var r = Qr();
  function e() {
  }
  function t() {
  }
  return t.resetWarningCache = e, tr = function() {
    function n(i, a, u, l, c, d) {
      if (d !== r) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    n.isRequired = n;
    function s() {
      return n;
    }
    var o = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: s,
      element: n,
      elementType: n,
      instanceOf: s,
      node: n,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: t,
      resetWarningCache: e
    };
    return o.PropTypes = o, o;
  }, tr;
}
if (process.env.NODE_ENV !== "production") {
  var Cl = ui(), Sl = !0;
  Er.exports = wl()(Cl.isElement, Sl);
} else
  Er.exports = kl()();
var Al = Er.exports;
const ke = /* @__PURE__ */ $i(Al);
function kt(r, e, t, n) {
  function s(o) {
    return o instanceof t ? o : new t(function(i) {
      i(o);
    });
  }
  return new (t || (t = Promise))(function(o, i) {
    function a(c) {
      try {
        l(n.next(c));
      } catch (d) {
        i(d);
      }
    }
    function u(c) {
      try {
        l(n.throw(c));
      } catch (d) {
        i(d);
      }
    }
    function l(c) {
      c.done ? o(c.value) : s(c.value).then(a, u);
    }
    l((n = n.apply(r, e || [])).next());
  });
}
function Ct(r, e) {
  var t = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, s, o, i;
  return i = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function a(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; i && (i = 0, l[0] && (t = 0)), t; ) try {
      if (n = 1, s && (o = l[0] & 2 ? s.return : l[0] ? s.throw || ((o = s.return) && o.call(s), 0) : s.next) && !(o = o.call(s, l[1])).done) return o;
      switch (s = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
        case 0:
        case 1:
          o = l;
          break;
        case 4:
          return t.label++, { value: l[1], done: !1 };
        case 5:
          t.label++, s = l[1], l = [0];
          continue;
        case 7:
          l = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            t = 0;
            continue;
          }
          if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
            t.label = l[1];
            break;
          }
          if (l[0] === 6 && t.label < o[1]) {
            t.label = o[1], o = l;
            break;
          }
          if (o && t.label < o[2]) {
            t.label = o[2], t.ops.push(l);
            break;
          }
          o[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      l = e.call(r, t);
    } catch (c) {
      l = [6, c], s = 0;
    } finally {
      n = o = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function so(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var n = t.call(r), s, o = [], i;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; ) o.push(s.value);
  } catch (a) {
    i = { error: a };
  } finally {
    try {
      s && !s.done && (t = n.return) && t.call(n);
    } finally {
      if (i) throw i.error;
    }
  }
  return o;
}
function oo(r, e, t) {
  if (t || arguments.length === 2) for (var n = 0, s = e.length, o; n < s; n++)
    (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
  return r.concat(o || Array.prototype.slice.call(e));
}
var El = /* @__PURE__ */ new Map([
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["heic", "image/heic"],
  ["heif", "image/heif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  // Others
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"]
]);
function nn(r, e) {
  var t = Tl(r);
  if (typeof t.path != "string") {
    var n = r.webkitRelativePath;
    Object.defineProperty(t, "path", {
      value: typeof e == "string" ? e : typeof n == "string" && n.length > 0 ? n : r.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return t;
}
function Tl(r) {
  var e = r.name, t = e && e.lastIndexOf(".") !== -1;
  if (t && !r.type) {
    var n = e.split(".").pop().toLowerCase(), s = El.get(n);
    s && Object.defineProperty(r, "type", {
      value: s,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return r;
}
var Il = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function Pl(r) {
  return kt(this, void 0, void 0, function() {
    return Ct(this, function(e) {
      return Bn(r) && Rl(r.dataTransfer) ? [2, Bl(r.dataTransfer, r.type)] : Ol(r) ? [2, Dl(r)] : Array.isArray(r) && r.every(function(t) {
        return "getFile" in t && typeof t.getFile == "function";
      }) ? [2, jl(r)] : [2, []];
    });
  });
}
function Rl(r) {
  return Bn(r);
}
function Ol(r) {
  return Bn(r) && Bn(r.target);
}
function Bn(r) {
  return typeof r == "object" && r !== null;
}
function Dl(r) {
  return Tr(r.target.files).map(function(e) {
    return nn(e);
  });
}
function jl(r) {
  return kt(this, void 0, void 0, function() {
    var e;
    return Ct(this, function(t) {
      switch (t.label) {
        case 0:
          return [4, Promise.all(r.map(function(n) {
            return n.getFile();
          }))];
        case 1:
          return e = t.sent(), [2, e.map(function(n) {
            return nn(n);
          })];
      }
    });
  });
}
function Bl(r, e) {
  return kt(this, void 0, void 0, function() {
    var t, n;
    return Ct(this, function(s) {
      switch (s.label) {
        case 0:
          return r.items ? (t = Tr(r.items).filter(function(o) {
            return o.kind === "file";
          }), e !== "drop" ? [2, t] : [4, Promise.all(t.map(Ml))]) : [3, 2];
        case 1:
          return n = s.sent(), [2, io(pi(n))];
        case 2:
          return [2, io(Tr(r.files).map(function(o) {
            return nn(o);
          }))];
      }
    });
  });
}
function io(r) {
  return r.filter(function(e) {
    return Il.indexOf(e.name) === -1;
  });
}
function Tr(r) {
  if (r === null)
    return [];
  for (var e = [], t = 0; t < r.length; t++) {
    var n = r[t];
    e.push(n);
  }
  return e;
}
function Ml(r) {
  if (typeof r.webkitGetAsEntry != "function")
    return ao(r);
  var e = r.webkitGetAsEntry();
  return e && e.isDirectory ? hi(e) : ao(r);
}
function pi(r) {
  return r.reduce(function(e, t) {
    return oo(oo([], so(e), !1), so(Array.isArray(t) ? pi(t) : [t]), !1);
  }, []);
}
function ao(r) {
  var e = r.getAsFile();
  if (!e)
    return Promise.reject("".concat(r, " is not a File"));
  var t = nn(e);
  return Promise.resolve(t);
}
function Ll(r) {
  return kt(this, void 0, void 0, function() {
    return Ct(this, function(e) {
      return [2, r.isDirectory ? hi(r) : zl(r)];
    });
  });
}
function hi(r) {
  var e = r.createReader();
  return new Promise(function(t, n) {
    var s = [];
    function o() {
      var i = this;
      e.readEntries(function(a) {
        return kt(i, void 0, void 0, function() {
          var u, l, c;
          return Ct(this, function(d) {
            switch (d.label) {
              case 0:
                if (a.length) return [3, 5];
                d.label = 1;
              case 1:
                return d.trys.push([1, 3, , 4]), [4, Promise.all(s)];
              case 2:
                return u = d.sent(), t(u), [3, 4];
              case 3:
                return l = d.sent(), n(l), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                c = Promise.all(a.map(Ll)), s.push(c), o(), d.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(a) {
        n(a);
      });
    }
    o();
  });
}
function zl(r) {
  return kt(this, void 0, void 0, function() {
    return Ct(this, function(e) {
      return [2, new Promise(function(t, n) {
        r.file(function(s) {
          var o = nn(s, r.fullPath);
          t(o);
        }, function(s) {
          n(s);
        });
      })];
    });
  });
}
var $l = function(r, e) {
  if (r && e) {
    var t = Array.isArray(e) ? e : e.split(","), n = r.name || "", s = (r.type || "").toLowerCase(), o = s.replace(/\/.*$/, "");
    return t.some(function(i) {
      var a = i.trim().toLowerCase();
      return a.charAt(0) === "." ? n.toLowerCase().endsWith(a) : a.endsWith("/*") ? o === a.replace(/\/.*$/, "") : s === a;
    });
  }
  return !0;
};
function co(r) {
  return Nl(r) || Hl(r) || fi(r) || Fl();
}
function Fl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hl(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function Nl(r) {
  if (Array.isArray(r)) return Ir(r);
}
function lo(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function uo(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? lo(Object(t), !0).forEach(function(n) {
      mi(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : lo(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function mi(r, e, t) {
  return e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Xt(r, e) {
  return ql(r) || _l(r, e) || fi(r, e) || Ul();
}
function Ul() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fi(r, e) {
  if (r) {
    if (typeof r == "string") return Ir(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ir(r, e);
  }
}
function Ir(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++)
    n[t] = r[t];
  return n;
}
function _l(r, e) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var n = [], s = !0, o = !1, i, a;
    try {
      for (t = t.call(r); !(s = (i = t.next()).done) && (n.push(i.value), !(e && n.length === e)); s = !0)
        ;
    } catch (u) {
      o = !0, a = u;
    } finally {
      try {
        !s && t.return != null && t.return();
      } finally {
        if (o) throw a;
      }
    }
    return n;
  }
}
function ql(r) {
  if (Array.isArray(r)) return r;
}
var Yl = "file-invalid-type", Wl = "file-too-large", Ql = "file-too-small", Zl = "too-many-files", Xl = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: Yl,
    message: "File type must be ".concat(t)
  };
}, po = function(e) {
  return {
    code: Wl,
    message: "File is larger than ".concat(e, " ").concat(e === 1 ? "byte" : "bytes")
  };
}, ho = function(e) {
  return {
    code: Ql,
    message: "File is smaller than ".concat(e, " ").concat(e === 1 ? "byte" : "bytes")
  };
}, Kl = {
  code: Zl,
  message: "Too many files"
};
function gi(r, e) {
  var t = r.type === "application/x-moz-file" || $l(r, e);
  return [t, t ? null : Xl(e)];
}
function vi(r, e, t) {
  if (pt(r.size))
    if (pt(e) && pt(t)) {
      if (r.size > t) return [!1, po(t)];
      if (r.size < e) return [!1, ho(e)];
    } else {
      if (pt(e) && r.size < e) return [!1, ho(e)];
      if (pt(t) && r.size > t) return [!1, po(t)];
    }
  return [!0, null];
}
function pt(r) {
  return r != null;
}
function Gl(r) {
  var e = r.files, t = r.accept, n = r.minSize, s = r.maxSize, o = r.multiple, i = r.maxFiles, a = r.validator;
  return !o && e.length > 1 || o && i >= 1 && e.length > i ? !1 : e.every(function(u) {
    var l = gi(u, t), c = Xt(l, 1), d = c[0], p = vi(u, n, s), h = Xt(p, 1), m = h[0], g = a ? a(u) : null;
    return d && m && !g;
  });
}
function Mn(r) {
  return typeof r.isPropagationStopped == "function" ? r.isPropagationStopped() : typeof r.cancelBubble < "u" ? r.cancelBubble : !1;
}
function xn(r) {
  return r.dataTransfer ? Array.prototype.some.call(r.dataTransfer.types, function(e) {
    return e === "Files" || e === "application/x-moz-file";
  }) : !!r.target && !!r.target.files;
}
function mo(r) {
  r.preventDefault();
}
function Jl(r) {
  return r.indexOf("MSIE") !== -1 || r.indexOf("Trident/") !== -1;
}
function Vl(r) {
  return r.indexOf("Edge/") !== -1;
}
function eu() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Jl(r) || Vl(r);
}
function Je() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return function(n) {
    for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), i = 1; i < s; i++)
      o[i - 1] = arguments[i];
    return e.some(function(a) {
      return !Mn(n) && a && a.apply(void 0, [n].concat(o)), Mn(n);
    });
  };
}
function tu() {
  return "showOpenFilePicker" in window;
}
function nu(r) {
  if (pt(r)) {
    var e = Object.entries(r).filter(function(t) {
      var n = Xt(t, 2), s = n[0], o = n[1], i = !0;
      return yi(s) || (console.warn('Skipped "'.concat(s, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), i = !1), (!Array.isArray(o) || !o.every(xi)) && (console.warn('Skipped "'.concat(s, '" because an invalid file extension was provided.')), i = !1), i;
    }).reduce(function(t, n) {
      var s = Xt(n, 2), o = s[0], i = s[1];
      return uo(uo({}, t), {}, mi({}, o, i));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: e
    }];
  }
  return r;
}
function ru(r) {
  if (pt(r))
    return Object.entries(r).reduce(function(e, t) {
      var n = Xt(t, 2), s = n[0], o = n[1];
      return [].concat(co(e), [s], co(o));
    }, []).filter(function(e) {
      return yi(e) || xi(e);
    }).join(",");
}
function su(r) {
  return r instanceof DOMException && (r.name === "AbortError" || r.code === r.ABORT_ERR);
}
function ou(r) {
  return r instanceof DOMException && (r.name === "SecurityError" || r.code === r.SECURITY_ERR);
}
function yi(r) {
  return r === "audio/*" || r === "video/*" || r === "image/*" || r === "text/*" || /\w+\/[-+.\w]+/g.test(r);
}
function xi(r) {
  return /^.*\.[\w]+$/.test(r);
}
var iu = ["children"], au = ["open"], cu = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], lu = ["refKey", "onChange", "onClick"];
function uu(r) {
  return hu(r) || pu(r) || bi(r) || du();
}
function du() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pu(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function hu(r) {
  if (Array.isArray(r)) return Pr(r);
}
function nr(r, e) {
  return gu(r) || fu(r, e) || bi(r, e) || mu();
}
function mu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bi(r, e) {
  if (r) {
    if (typeof r == "string") return Pr(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Pr(r, e);
  }
}
function Pr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++)
    n[t] = r[t];
  return n;
}
function fu(r, e) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var n = [], s = !0, o = !1, i, a;
    try {
      for (t = t.call(r); !(s = (i = t.next()).done) && (n.push(i.value), !(e && n.length === e)); s = !0)
        ;
    } catch (u) {
      o = !0, a = u;
    } finally {
      try {
        !s && t.return != null && t.return();
      } finally {
        if (o) throw a;
      }
    }
    return n;
  }
}
function gu(r) {
  if (Array.isArray(r)) return r;
}
function fo(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Ie(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? fo(Object(t), !0).forEach(function(n) {
      Rr(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : fo(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function Rr(r, e, t) {
  return e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Ln(r, e) {
  if (r == null) return {};
  var t = vu(r, e), n, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (s = 0; s < o.length; s++)
      n = o[s], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function vu(r, e) {
  if (r == null) return {};
  var t = {}, n = Object.keys(r), s, o;
  for (o = 0; o < n.length; o++)
    s = n[o], !(e.indexOf(s) >= 0) && (t[s] = r[s]);
  return t;
}
var Zr = /* @__PURE__ */ Kt(function(r, e) {
  var t = r.children, n = Ln(r, iu), s = ki(n), o = s.open, i = Ln(s, au);
  return Gt(e, function() {
    return {
      open: o
    };
  }, [o]), /* @__PURE__ */ _e.createElement(zi, null, t(Ie(Ie({}, i), {}, {
    open: o
  })));
});
Zr.displayName = "Dropzone";
var wi = {
  disabled: !1,
  getFilesFromEvent: Pl,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !0,
  autoFocus: !1
};
Zr.defaultProps = wi;
Zr.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: ke.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: ke.objectOf(ke.arrayOf(ke.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: ke.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: ke.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: ke.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: ke.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: ke.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: ke.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: ke.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: ke.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: ke.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: ke.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: ke.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: ke.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: ke.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: ke.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: ke.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: ke.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: ke.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: ke.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: ke.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: ke.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: ke.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: ke.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: ke.func
};
var Or = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function ki() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = Ie(Ie({}, wi), r), t = e.accept, n = e.disabled, s = e.getFilesFromEvent, o = e.maxSize, i = e.minSize, a = e.multiple, u = e.maxFiles, l = e.onDragEnter, c = e.onDragLeave, d = e.onDragOver, p = e.onDrop, h = e.onDropAccepted, m = e.onDropRejected, g = e.onFileDialogCancel, b = e.onFileDialogOpen, k = e.useFsAccessApi, y = e.autoFocus, x = e.preventDropOnDocument, A = e.noClick, w = e.noKeyboard, R = e.noDrag, M = e.noDragEventsBubbling, F = e.onError, T = e.validator, I = G(function() {
    return ru(t);
  }, [t]), _ = G(function() {
    return nu(t);
  }, [t]), D = G(function() {
    return typeof b == "function" ? b : go;
  }, [b]), z = G(function() {
    return typeof g == "function" ? g : go;
  }, [g]), B = ue(null), X = ue(null), re = Li(yu, Or), oe = nr(re, 2), le = oe[0], N = oe[1], S = le.isFocused, O = le.isFileDialogActive, H = ue(typeof window < "u" && window.isSecureContext && k && tu()), q = function() {
    !H.current && O && setTimeout(function() {
      if (X.current) {
        var U = X.current.files;
        U.length || (N({
          type: "closeDialog"
        }), z());
      }
    }, 300);
  };
  te(function() {
    return window.addEventListener("focus", q, !1), function() {
      window.removeEventListener("focus", q, !1);
    };
  }, [X, O, z, H]);
  var W = ue([]), ne = function(U) {
    B.current && B.current.contains(U.target) || (U.preventDefault(), W.current = []);
  };
  te(function() {
    return x && (document.addEventListener("dragover", mo, !1), document.addEventListener("drop", ne, !1)), function() {
      x && (document.removeEventListener("dragover", mo), document.removeEventListener("drop", ne));
    };
  }, [B, x]), te(function() {
    return !n && y && B.current && B.current.focus(), function() {
    };
  }, [B, y, n]);
  var Y = ve(function(P) {
    F ? F(P) : console.error(P);
  }, [F]), K = ve(function(P) {
    P.preventDefault(), P.persist(), Ce(P), W.current = [].concat(uu(W.current), [P.target]), xn(P) && Promise.resolve(s(P)).then(function(U) {
      if (!(Mn(P) && !M)) {
        var he = U.length, pe = he > 0 && Gl({
          files: U,
          accept: I,
          minSize: i,
          maxSize: o,
          multiple: a,
          maxFiles: u,
          validator: T
        }), De = he > 0 && !pe;
        N({
          isDragAccept: pe,
          isDragReject: De,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), l && l(P);
      }
    }).catch(function(U) {
      return Y(U);
    });
  }, [s, l, Y, M, I, i, o, a, u, T]), J = ve(function(P) {
    P.preventDefault(), P.persist(), Ce(P);
    var U = xn(P);
    if (U && P.dataTransfer)
      try {
        P.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return U && d && d(P), !1;
  }, [d, M]), se = ve(function(P) {
    P.preventDefault(), P.persist(), Ce(P);
    var U = W.current.filter(function(pe) {
      return B.current && B.current.contains(pe);
    }), he = U.indexOf(P.target);
    he !== -1 && U.splice(he, 1), W.current = U, !(U.length > 0) && (N({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), xn(P) && c && c(P));
  }, [B, c, M]), V = ve(function(P, U) {
    var he = [], pe = [];
    P.forEach(function(De) {
      var Qe = gi(De, I), et = nr(Qe, 2), it = et[0], St = et[1], At = vi(De, i, o), ft = nr(At, 2), Et = ft[0], Tt = ft[1], It = T ? T(De) : null;
      if (it && Et && !It)
        he.push(De);
      else {
        var Pt = [St, Tt];
        It && (Pt = Pt.concat(It)), pe.push({
          file: De,
          errors: Pt.filter(function(Rt) {
            return Rt;
          })
        });
      }
    }), (!a && he.length > 1 || a && u >= 1 && he.length > u) && (he.forEach(function(De) {
      pe.push({
        file: De,
        errors: [Kl]
      });
    }), he.splice(0)), N({
      acceptedFiles: he,
      fileRejections: pe,
      type: "setFiles"
    }), p && p(he, pe, U), pe.length > 0 && m && m(pe, U), he.length > 0 && h && h(he, U);
  }, [N, a, I, i, o, u, p, h, m, T]), Ae = ve(function(P) {
    P.preventDefault(), P.persist(), Ce(P), W.current = [], xn(P) && Promise.resolve(s(P)).then(function(U) {
      Mn(P) && !M || V(U, P);
    }).catch(function(U) {
      return Y(U);
    }), N({
      type: "reset"
    });
  }, [s, V, Y, M]), j = ve(function() {
    if (H.current) {
      N({
        type: "openDialog"
      }), D();
      var P = {
        multiple: a,
        types: _
      };
      window.showOpenFilePicker(P).then(function(U) {
        return s(U);
      }).then(function(U) {
        V(U, null), N({
          type: "closeDialog"
        });
      }).catch(function(U) {
        su(U) ? (z(U), N({
          type: "closeDialog"
        })) : ou(U) ? (H.current = !1, X.current ? (X.current.value = null, X.current.click()) : Y(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : Y(U);
      });
      return;
    }
    X.current && (N({
      type: "openDialog"
    }), D(), X.current.value = null, X.current.click());
  }, [N, D, z, k, V, Y, _, a]), je = ve(function(P) {
    !B.current || !B.current.isEqualNode(P.target) || (P.key === " " || P.key === "Enter" || P.keyCode === 32 || P.keyCode === 13) && (P.preventDefault(), j());
  }, [B, j]), qe = ve(function() {
    N({
      type: "focus"
    });
  }, []), He = ve(function() {
    N({
      type: "blur"
    });
  }, []), C = ve(function() {
    A || (eu() ? setTimeout(j, 0) : j());
  }, [A, j]), L = function(U) {
    return n ? null : U;
  }, Q = function(U) {
    return w ? null : L(U);
  }, ce = function(U) {
    return R ? null : L(U);
  }, Ce = function(U) {
    M && U.stopPropagation();
  }, Se = G(function() {
    return function() {
      var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, U = P.refKey, he = U === void 0 ? "ref" : U, pe = P.role, De = P.onKeyDown, Qe = P.onFocus, et = P.onBlur, it = P.onClick, St = P.onDragEnter, At = P.onDragOver, ft = P.onDragLeave, Et = P.onDrop, Tt = Ln(P, cu);
      return Ie(Ie(Rr({
        onKeyDown: Q(Je(De, je)),
        onFocus: Q(Je(Qe, qe)),
        onBlur: Q(Je(et, He)),
        onClick: L(Je(it, C)),
        onDragEnter: ce(Je(St, K)),
        onDragOver: ce(Je(At, J)),
        onDragLeave: ce(Je(ft, se)),
        onDrop: ce(Je(Et, Ae)),
        role: typeof pe == "string" && pe !== "" ? pe : "presentation"
      }, he, B), !n && !w ? {
        tabIndex: 0
      } : {}), Tt);
    };
  }, [B, je, qe, He, C, K, J, se, Ae, w, R, n]), de = ve(function(P) {
    P.stopPropagation();
  }, []), Re = G(function() {
    return function() {
      var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, U = P.refKey, he = U === void 0 ? "ref" : U, pe = P.onChange, De = P.onClick, Qe = Ln(P, lu), et = Rr({
        accept: I,
        multiple: a,
        type: "file",
        style: {
          display: "none"
        },
        onChange: L(Je(pe, Ae)),
        onClick: L(Je(De, de)),
        tabIndex: -1
      }, he, X);
      return Ie(Ie({}, et), Qe);
    };
  }, [X, t, a, Ae, n]);
  return Ie(Ie({}, le), {}, {
    isFocused: S && !n,
    getRootProps: Se,
    getInputProps: Re,
    rootRef: B,
    inputRef: X,
    open: L(j)
  });
}
function yu(r, e) {
  switch (e.type) {
    case "focus":
      return Ie(Ie({}, r), {}, {
        isFocused: !0
      });
    case "blur":
      return Ie(Ie({}, r), {}, {
        isFocused: !1
      });
    case "openDialog":
      return Ie(Ie({}, Or), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return Ie(Ie({}, r), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return Ie(Ie({}, r), {}, {
        isDragActive: e.isDragActive,
        isDragAccept: e.isDragAccept,
        isDragReject: e.isDragReject
      });
    case "setFiles":
      return Ie(Ie({}, r), {}, {
        acceptedFiles: e.acceptedFiles,
        fileRejections: e.fileRejections
      });
    case "reset":
      return Ie({}, Or);
    default:
      return r;
  }
}
function go() {
}
const xu = (r) => /* @__PURE__ */ v.jsx("svg", { ...r, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ v.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12h14" }) }), bu = () => /* @__PURE__ */ v.jsxs("svg", { viewBox: "0 0 200 200", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ v.jsx("circle", { cx: "100", cy: "100", r: "99.5", stroke: "#B0488C" }),
  /* @__PURE__ */ v.jsxs("g", { clipPath: "url(#clip0_31_12)", children: [
    /* @__PURE__ */ v.jsx(
      "path",
      {
        d: "M87.6691 75.9199C88.563 75.9163 89.457 75.9128 90.378 75.9091C92.2639 75.9065 94.1498 75.9134 96.0357 75.9291C98.9224 75.9491 101.807 75.9292 104.694 75.9053C106.528 75.9078 108.362 75.9126 110.195 75.9199C111.059 75.9124 111.921 75.9048 112.81 75.897C119.46 75.9944 119.46 75.9944 121.75 78.2731C122.191 78.8959 122.631 79.5187 123.085 80.1604C123.454 80.531 123.454 80.531 123.83 80.9091C123.911 82.1028 123.941 83.3 123.95 84.4965C123.957 85.2614 123.964 86.0262 123.971 86.8143C123.974 87.6478 123.978 88.4815 123.981 89.3403C123.985 90.1927 123.99 91.0451 123.994 91.9233C124.001 93.7328 124.006 95.5423 124.009 97.3517C124.016 100.116 124.039 102.879 124.062 105.643C124.067 107.399 124.071 109.155 124.074 110.911C124.083 111.738 124.093 112.563 124.102 113.415C124.081 120.894 124.081 120.894 121.596 124.332C119.274 125.815 117.439 126.021 114.715 126.035C113.937 126.042 113.159 126.049 112.357 126.056C111.521 126.056 110.685 126.055 109.823 126.054C108.961 126.057 108.098 126.06 107.209 126.064C105.383 126.068 103.559 126.068 101.734 126.065C98.9428 126.062 96.1519 126.08 93.3604 126.099C91.5874 126.101 89.8145 126.101 88.0415 126.101C87.2067 126.107 86.372 126.115 85.5119 126.122C84.7316 126.117 83.9513 126.113 83.1474 126.107C82.4635 126.108 81.7796 126.109 81.075 126.109C78.7215 125.767 77.3408 124.983 75.4255 123.583C73.7766 121.097 73.7375 120.265 73.6961 117.362C73.6818 116.549 73.6676 115.737 73.6528 114.901C73.6465 114.023 73.6401 113.146 73.6337 112.242C73.6251 111.34 73.6166 110.438 73.6079 109.509C73.5938 107.6 73.5841 105.69 73.5783 103.781C73.5639 100.859 73.5177 97.9383 73.4707 95.0167C73.461 93.1626 73.4532 91.3085 73.4475 89.4543C73.4291 88.5801 73.4107 87.7058 73.3917 86.8049C73.4123 83.0474 73.445 80.866 75.6217 77.739C79.2026 75.469 83.5895 75.8841 87.6691 75.9199Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ v.jsx(
      "path",
      {
        d: "M32.2341 37.4866C59.7575 37.4866 87.2809 37.4866 115.638 37.4866C115.638 42.9219 115.638 48.3572 115.638 53.9572C93.0298 53.9572 70.4213 53.9572 47.1277 53.9572C47.1277 64.5807 47.1277 75.2043 47.1277 86.1497C42.2128 86.1497 37.2979 86.1497 32.2341 86.1497C32.2341 70.0909 32.2341 54.0321 32.2341 37.4866Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ v.jsx(
      "path",
      {
        d: "M32.2341 116.845C37.149 116.845 42.0639 116.845 47.1277 116.845C47.1277 127.221 47.1277 137.598 47.1277 148.289C71.7022 148.289 96.2766 148.289 121.596 148.289C121.596 153.23 121.596 158.171 121.596 163.262C92.1064 163.262 62.617 163.262 32.2341 163.262C32.2341 147.944 32.2341 132.627 32.2341 116.845Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ v.jsx(
      "path",
      {
        d: "M161.814 34.6792C165.577 37.5618 167.934 41.1653 169.255 45.7219C170.002 51.7878 170.244 57.7758 166.678 63.0231C166.3 63.4902 165.921 63.9573 165.532 64.4385C164.964 65.1623 164.964 65.1623 164.386 65.9007C160.694 70.0863 156.304 72.2018 150.81 72.9575C144.443 73.235 139.791 71.2772 134.814 67.3864C130.268 63.0898 128.124 57.8507 127.879 51.6177C128.195 45.152 130.717 40.4865 135.049 35.7846C142.84 28.7908 153.315 29.3596 161.814 34.6792Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ v.jsx(
      "path",
      {
        d: "M158.009 137.132C162.749 139.815 166.014 143.005 167.766 148.289C168.291 153.643 168.045 158.108 164.787 162.513C160.978 166.779 156.65 168.925 151.011 169.532C144.592 168.841 140.292 166.139 136.21 161.062C134.084 157.002 134.439 151.969 135 147.54C136.243 144.421 137.612 142.39 140.167 140.241C140.665 139.812 141.163 139.383 141.676 138.942C146.467 135.355 152.423 135.005 158.009 137.132Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ v.jsx(
      "path",
      {
        d: "M149.894 85.4011C154.809 85.4011 159.723 85.4011 164.787 85.4011C164.787 96.0246 164.787 106.648 164.787 117.594C159.872 117.594 154.957 117.594 149.894 117.594C149.894 106.97 149.894 96.3465 149.894 85.4011Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ v.jsx(
      "path",
      {
        d: "M40.3383 94.0136C43.3122 94.7142 44.8713 96.3632 46.6623 98.7366C47.3967 101.321 47.103 103.037 46.383 105.615C44.2412 107.919 42.6152 109.128 39.6343 110.107C36.957 110.107 35.8402 109.471 33.7234 107.861C33.2934 107.567 32.8633 107.274 32.4203 106.972C30.8391 104.667 30.4332 102.35 30.7447 99.6257C32.7702 95.2399 35.5991 93.6206 40.3383 94.0136Z",
        fill: "#B0488C"
      }
    )
  ] }),
  /* @__PURE__ */ v.jsx("defs", { children: /* @__PURE__ */ v.jsx("clipPath", { id: "clip0_31_12", children: /* @__PURE__ */ v.jsx(
    "rect",
    {
      width: "140",
      height: "140",
      fill: "white",
      transform: "translate(30 30)"
    }
  ) }) })
] }), wu = ({ files: r }) => /* @__PURE__ */ v.jsx(v.Fragment, { children: r.map((e, t) => /* @__PURE__ */ v.jsx("div", { className: "thumbnail m-2", children: /* @__PURE__ */ v.jsx("div", { className: "thumbnailInner", children: /* @__PURE__ */ v.jsx("img", { src: e.preview, alt: e.preview, className: "w-[150px]" }) }) }, t)) }), ku = ({ files: r, setFiles: e }) => {
  const t = ve((i) => {
    e((a) => [...a, ...i.map((u) => Object.assign(u, {
      preview: URL.createObjectURL(u)
    }))]);
  }, []), { getRootProps: n, getInputProps: s } = ki({ onDrop: t }), o = (i) => () => {
    const a = r.filter((u) => u !== i);
    e(a);
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col w-[100%] dropzone border", children: [
    /* @__PURE__ */ v.jsxs("div", { ...n(), className: "flex items-center justify-center p-4 rounded-lg cursor-pointer hover:border-gray-500", children: [
      /* @__PURE__ */ v.jsx("input", { ...s() }),
      /* @__PURE__ */ v.jsx("p", { className: "text-gray-500", children: "Drag & drop images, or click to select files" })
    ] }),
    /* @__PURE__ */ v.jsx("aside", { className: "flex flex-wrap mt-4", children: r.map((i) => /* @__PURE__ */ v.jsxs("div", { className: "relative m-2", children: [
      /* @__PURE__ */ v.jsx("button", { onClick: o(i), className: "absolute top-0 right-0 p-1 bg-red-500 rounded-full text-white", children: /* @__PURE__ */ v.jsx(xu, { className: "w-4 h-4" }) }),
      /* @__PURE__ */ v.jsx("div", { className: "border p-1 rounded-lg", children: /* @__PURE__ */ v.jsx("img", { src: i.preview, alt: i.name, className: "w-12 h-12 object-cover rounded-lg" }) })
    ] }, i.name)) })
  ] });
};
function Cu({
  title: r,
  titleId: e,
  ...t
}, n) {
  return /* @__PURE__ */ ze.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": e
  }, t), r ? /* @__PURE__ */ ze.createElement("title", {
    id: e
  }, r) : null, /* @__PURE__ */ ze.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
  }));
}
const Su = /* @__PURE__ */ ze.forwardRef(Cu);
function Au({
  title: r,
  titleId: e,
  ...t
}, n) {
  return /* @__PURE__ */ ze.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": e
  }, t), r ? /* @__PURE__ */ ze.createElement("title", {
    id: e
  }, r) : null, /* @__PURE__ */ ze.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
  }));
}
const Eu = /* @__PURE__ */ ze.forwardRef(Au);
function Tu({
  title: r,
  titleId: e,
  ...t
}, n) {
  return /* @__PURE__ */ ze.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": e
  }, t), r ? /* @__PURE__ */ ze.createElement("title", {
    id: e
  }, r) : null, /* @__PURE__ */ ze.createElement("path", {
    d: "M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z"
  }));
}
const Iu = /* @__PURE__ */ ze.forwardRef(Tu);
function Pu({
  title: r,
  titleId: e,
  ...t
}, n) {
  return /* @__PURE__ */ ze.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": e
  }, t), r ? /* @__PURE__ */ ze.createElement("title", {
    id: e
  }, r) : null, /* @__PURE__ */ ze.createElement("path", {
    d: "M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z"
  }));
}
const Ru = /* @__PURE__ */ ze.forwardRef(Pu), Ju = _e.memo((r) => {
  var w, R;
  const [e] = ye(r.messages), t = r.advancedOptions || {}, n = t.conversationOptions || {
    layout: "bubbles"
  }, [s, o] = ye([]), { adapter: i, threadId: a, messageId: u } = gl({ ...r, files: s }), { controls: l } = r, [c, d] = ye(/* @__PURE__ */ new Map()), p = (M, F) => {
    d((T) => new Map(T.set(M, F)));
  }, h = (M) => {
    const { prompt: F, uid: T } = M, I = c.get(T);
    return /* @__PURE__ */ v.jsxs("div", { className: "rounded-lg shadow-sm", children: [
      /* @__PURE__ */ v.jsx("span", { className: "block", children: F }),
      /* @__PURE__ */ v.jsx("div", { className: "mt-2", children: I && /* @__PURE__ */ v.jsx(wu, { files: I }) })
    ] });
  }, m = _e.memo((M) => {
    const [F, T] = ye(), [I, _] = ye(), D = async (z) => {
      var X;
      let B;
      if (M.dataTransferMode === "stream") {
        if (!a || !u) {
          _("streaming message doesnt have thread and messageIds");
          return;
        }
        B = {
          thread_id: a,
          message_id: u,
          score: z
        };
      } else {
        let re = (X = M.serverResponse) == null ? void 0 : X[0];
        if (re)
          B = {
            thread_id: re.threadId,
            message_id: re.messageId,
            score: z
          };
        else {
          _("message doesnt have thread and messageIds");
          return;
        }
      }
      try {
        const re = await li(r), oe = r.serverUrl || ci;
        if (!(await fetch(`${oe}/threads/score`, {
          method: "POST",
          headers: re,
          body: JSON.stringify(B)
        })).ok)
          throw new Error("Failed to record score");
        T(z);
      } catch (re) {
        _(re.toString()), console.error("Error recording score:", re);
      }
    };
    return /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
      "STATUS: ",
      M.status,
      " ",
      M.dataTransferMode,
      M.dataTransferMode === "batch" && /* @__PURE__ */ v.jsx(Wc, { children: M.content }),
      M.dataTransferMode === "stream" && /* @__PURE__ */ v.jsx("div", { className: "p-2 rounded-lg shadow-md", ref: M.containerRef }),
      /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-start space-x-1", children: [
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            className: "p-2 hover:bg-gray-200 rounded focus:outline-none",
            onClick: () => D(1),
            children: [
              F == null && /* @__PURE__ */ v.jsx(Eu, { className: "h-4 w-4" }),
              F === 1 && /* @__PURE__ */ v.jsx(Ru, { className: "h-4 w-4 animate-fadeIn" })
            ]
          }
        ),
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            className: "p-2 hover:bg-gray-200 rounded focus:outline-none",
            onClick: () => D(-1),
            children: [
              F == null && /* @__PURE__ */ v.jsx(Su, { className: "h-4 w-4" }),
              F === -1 && /* @__PURE__ */ v.jsx(Iu, { className: "h-4 w-4 animate-fadeIn" })
            ]
          }
        )
      ] }),
      I && /* @__PURE__ */ v.jsx("div", { className: "text-red text-xs animate-fadeIn p-2 rounded-md", children: I })
    ] });
  }), g = Object.assign(
    {},
    { colorScheme: "light", themeId: "langdb" },
    t.displayOptions
  ), b = t.composerOptions || {
    placeholder: "How can i help you today ?"
  }, k = Object.assign({}, {
    assistant: Object.assign({}, {
      name: "LangDB",
      tagline: `
              Easily build and deploy AI agents with SQL.
              Customize with our React widget on`,
      avatar: /* @__PURE__ */ v.jsx(bu, {})
    }, (w = r.personaOptions) == null ? void 0 : w.assistant),
    user: Object.assign({}, {
      name: "User",
      avatar: /* @__PURE__ */ v.jsx(tl, {})
    })
  }, (R = r.personaOptions) == null ? void 0 : R.user), y = ve((M) => {
    s && (p(M.uid, [...s]), o([]));
  }, [p]), x = ve(() => {
  }, []), A = r.className || "";
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col w-[100%] h-full", children: [
    (l == null ? void 0 : l.enableFiles) && /* @__PURE__ */ v.jsx(ku, { files: s, setFiles: o }),
    /* @__PURE__ */ v.jsx("div", { className: "flex-1 w-full relative", children: /* @__PURE__ */ v.jsx(
      "main",
      {
        className: `items-center justify-between  ${A} h-full absolute`,
        style: r.style || {},
        children: /* @__PURE__ */ v.jsx(
          Yc,
          {
            adapter: i,
            initialConversation: e,
            events: {
              messageSent: y,
              messageStreamStarted: x
            },
            messageOptions: {
              promptRenderer: h,
              responseRenderer: m
            },
            personaOptions: k,
            conversationOptions: n,
            displayOptions: g,
            composerOptions: b,
            ...t
          }
        )
      }
    ) })
  ] });
});
function rr(...r) {
  return r.filter(Boolean).join(" ");
}
const Vu = (r) => {
  const {
    onMinimize: e,
    onMaximize: t,
    btnClassName: n,
    theme: s,
    children: o,
    title: i,
    maximizedPanelClassName: a,
    maximizedPanelStyle: u,
    showFullScreen: l,
    controls: c
  } = r, [d, p] = ye(!1), [h, m] = ye(l || !1), g = ve(() => {
    p((b) => !b);
  }, []);
  return /* @__PURE__ */ v.jsxs("div", { className: rr(s || "dark"), children: [
    d && /* @__PURE__ */ v.jsxs(
      "div",
      {
        style: h ? u : {},
        className: rr(
          "light:text-slate-900 dark:text-white flex flex-1 bg-white dark:bg-black flex-col absolute p-[10px] pt-[0px]",
          h ? a || "h-full w-full bottom-0 right-0" : "rounded border shadow-md h-[60vh] w-[40vw] min-h-[500px] bottom-16 right-16"
        ),
        children: [
          /* @__PURE__ */ v.jsxs(
            "div",
            {
              className: "border-b py-[5px] flex justify-center items-center",
              style: { zIndex: "99999" },
              children: [
                /* @__PURE__ */ v.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ v.jsx(
                    "button",
                    {
                      onClick: () => {
                        p(!1), e && e();
                      },
                      children: /* @__PURE__ */ v.jsx(Du, {})
                    }
                  ),
                  !(c != null && c.hideMaximise) && /* @__PURE__ */ v.jsx(
                    "button",
                    {
                      onClick: () => {
                        m((b) => !b), t && t();
                      },
                      children: h ? /* @__PURE__ */ v.jsx(Bu, {}) : /* @__PURE__ */ v.jsx(ju, {})
                    }
                  )
                ] }),
                /* @__PURE__ */ v.jsx("div", { className: "flex flex-1 justify-center", children: i })
              ]
            }
          ),
          /* @__PURE__ */ v.jsx("div", { className: "flex flex-1 overflow-scroll ", children: o })
        ]
      }
    ),
    !d && /* @__PURE__ */ v.jsx(
      "button",
      {
        className: rr(
          n || "",
          "fixed text-white bg-primary hover:bg-primary-800 bottom-5 right-5 flex w-[50px] hover:scale-110 scale-100 h-[50px] justify-center items-center p-[10px] rounded-full cursor-pointer shadow-none hover:shadow-xl transition ease-in-out"
        ),
        onClick: g,
        children: /* @__PURE__ */ v.jsx(Ou, {})
      }
    )
  ] });
}, Ou = () => /* @__PURE__ */ v.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "size-6",
    children: /* @__PURE__ */ v.jsx(
      "path",
      {
        strokeLinecap: "round",
        "stroke-linejoin": "round",
        d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      }
    )
  }
), Du = () => /* @__PURE__ */ v.jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ v.jsx("path", { d: "M19 13H5v-2h14v2z" })
  }
), ju = () => /* @__PURE__ */ v.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "size-6",
    children: /* @__PURE__ */ v.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
      }
    )
  }
), Bu = () => /* @__PURE__ */ v.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "size-6",
    children: /* @__PURE__ */ v.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
      }
    )
  }
);
export {
  Yc as AiChat,
  qs as AiChatUI,
  Ou as ChatIcon,
  Vu as FloatingChatWidget,
  sl as ImageDetail,
  Wc as Markdown,
  nl as MessageContentType,
  rl as MessageType,
  Ju as Widget,
  Ku as createAiContext,
  ol as createInnerMessage,
  qu as useAiChatApi,
  Zu as useAiContext,
  Xu as useAiTask,
  Yu as useAsBatchAdapter,
  Qu as useAsRscAdapter,
  Wu as useAsStreamAdapter,
  Gu as useDeepCompareEffect
};
//# sourceMappingURL=index.es.js.map
