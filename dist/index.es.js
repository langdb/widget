import je, { createContext as xi, useRef as me, useState as Ie, useEffect as le, useMemo as K, useCallback as be, forwardRef as Ut, createRef as er, useImperativeHandle as Yt, isValidElement as oo, Component as bi, useReducer as wi, Fragment as ki } from "react";
function Ci(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var tr = { exports: {} }, Pt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr;
function Si() {
  if (Xr) return Pt;
  Xr = 1;
  var r = je, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, u, l) {
    var c, d = {}, p = null, m = null;
    l !== void 0 && (p = "" + l), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (m = u.ref);
    for (c in u) n.call(u, c) && !o.hasOwnProperty(c) && (d[c] = u[c]);
    if (a && a.defaultProps) for (c in u = a.defaultProps, u) d[c] === void 0 && (d[c] = u[c]);
    return { $$typeof: e, type: a, key: p, ref: m, props: d, _owner: s.current };
  }
  return Pt.Fragment = t, Pt.jsx = i, Pt.jsxs = i, Pt;
}
var It = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr;
function Ai() {
  return Zr || (Zr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = je, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, f = "@@iterator";
    function k(g) {
      if (g === null || typeof g != "object")
        return null;
      var T = h && g[h] || g[f];
      return typeof T == "function" ? T : null;
    }
    var C = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(g) {
      {
        for (var T = arguments.length, B = new Array(T > 1 ? T - 1 : 0), Y = 1; Y < T; Y++)
          B[Y - 1] = arguments[Y];
        y("error", g, B);
      }
    }
    function y(g, T, B) {
      {
        var Y = C.ReactDebugCurrentFrame, ie = Y.getStackAddendum();
        ie !== "" && (T += "%s", B = B.concat([ie]));
        var pe = B.map(function(ne) {
          return String(ne);
        });
        pe.unshift("Warning: " + T), Function.prototype.apply.call(console[g], console, pe);
      }
    }
    var A = !1, x = !1, I = !1, q = !1, M = !1, O;
    O = Symbol.for("react.module.reference");
    function z(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === n || g === o || M || g === s || g === l || g === c || q || g === m || A || x || I || typeof g == "object" && g !== null && (g.$$typeof === p || g.$$typeof === d || g.$$typeof === i || g.$$typeof === a || g.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === O || g.getModuleId !== void 0));
    }
    function W(g, T, B) {
      var Y = g.displayName;
      if (Y)
        return Y;
      var ie = T.displayName || T.name || "";
      return ie !== "" ? B + "(" + ie + ")" : B;
    }
    function Q(g) {
      return g.displayName || "Context";
    }
    function X(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
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
      if (typeof g == "object")
        switch (g.$$typeof) {
          case a:
            var T = g;
            return Q(T) + ".Consumer";
          case i:
            var B = g;
            return Q(B._context) + ".Provider";
          case u:
            return W(g, g.render, "ForwardRef");
          case d:
            var Y = g.displayName || null;
            return Y !== null ? Y : X(g.type) || "Memo";
          case p: {
            var ie = g, pe = ie._payload, ne = ie._init;
            try {
              return X(ne(pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, V = 0, re, G, oe, J, S, R, L;
    function $() {
    }
    $.__reactDisabledLog = !0;
    function F() {
      {
        if (V === 0) {
          re = console.log, G = console.info, oe = console.warn, J = console.error, S = console.group, R = console.groupCollapsed, L = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: $,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        V++;
      }
    }
    function Z() {
      {
        if (V--, V === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U({}, g, {
              value: re
            }),
            info: U({}, g, {
              value: G
            }),
            warn: U({}, g, {
              value: oe
            }),
            error: U({}, g, {
              value: J
            }),
            group: U({}, g, {
              value: S
            }),
            groupCollapsed: U({}, g, {
              value: R
            }),
            groupEnd: U({}, g, {
              value: L
            })
          });
        }
        V < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = C.ReactCurrentDispatcher, b;
    function E(g, T, B) {
      {
        if (b === void 0)
          try {
            throw Error();
          } catch (ie) {
            var Y = ie.stack.trim().match(/\n( *(at )?)/);
            b = Y && Y[1] || "";
          }
        return `
` + b + g;
      }
    }
    var j = !1, H;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      H = new se();
    }
    function P(g, T) {
      if (!g || j)
        return "";
      {
        var B = H.get(g);
        if (B !== void 0)
          return B;
      }
      var Y;
      j = !0;
      var ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var pe;
      pe = N.current, N.current = null, F();
      try {
        if (T) {
          var ne = function() {
            throw Error();
          };
          if (Object.defineProperty(ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ne, []);
            } catch (Oe) {
              Y = Oe;
            }
            Reflect.construct(g, [], ne);
          } else {
            try {
              ne.call();
            } catch (Oe) {
              Y = Oe;
            }
            g.call(ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Oe) {
            Y = Oe;
          }
          g();
        }
      } catch (Oe) {
        if (Oe && Y && typeof Oe.stack == "string") {
          for (var ee = Oe.stack.split(`
`), Pe = Y.stack.split(`
`), ke = ee.length - 1, Ce = Pe.length - 1; ke >= 1 && Ce >= 0 && ee[ke] !== Pe[Ce]; )
            Ce--;
          for (; ke >= 1 && Ce >= 0; ke--, Ce--)
            if (ee[ke] !== Pe[Ce]) {
              if (ke !== 1 || Ce !== 1)
                do
                  if (ke--, Ce--, Ce < 0 || ee[ke] !== Pe[Ce]) {
                    var ze = `
` + ee[ke].replace(" at new ", " at ");
                    return g.displayName && ze.includes("<anonymous>") && (ze = ze.replace("<anonymous>", g.displayName)), typeof g == "function" && H.set(g, ze), ze;
                  }
                while (ke >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        j = !1, N.current = pe, Z(), Error.prepareStackTrace = ie;
      }
      var ht = g ? g.displayName || g.name : "", nt = ht ? E(ht) : "";
      return typeof g == "function" && H.set(g, nt), nt;
    }
    function te(g, T, B) {
      return P(g, !1);
    }
    function we(g) {
      var T = g.prototype;
      return !!(T && T.isReactComponent);
    }
    function Ee(g, T, B) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return P(g, we(g));
      if (typeof g == "string")
        return E(g);
      switch (g) {
        case l:
          return E("Suspense");
        case c:
          return E("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case u:
            return te(g.render);
          case d:
            return Ee(g.type, T, B);
          case p: {
            var Y = g, ie = Y._payload, pe = Y._init;
            try {
              return Ee(pe(ie), T, B);
            } catch {
            }
          }
        }
      return "";
    }
    var He = Object.prototype.hasOwnProperty, Me = {}, Qe = C.ReactDebugCurrentFrame;
    function $e(g) {
      if (g) {
        var T = g._owner, B = Ee(g.type, g._source, T ? T.type : null);
        Qe.setExtraStackFrame(B);
      } else
        Qe.setExtraStackFrame(null);
    }
    function ut(g, T, B, Y, ie) {
      {
        var pe = Function.call.bind(He);
        for (var ne in g)
          if (pe(g, ne)) {
            var ee = void 0;
            try {
              if (typeof g[ne] != "function") {
                var Pe = Error((Y || "React class") + ": " + B + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pe.name = "Invariant Violation", Pe;
              }
              ee = g[ne](T, ne, Y, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ke) {
              ee = ke;
            }
            ee && !(ee instanceof Error) && ($e(ie), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", B, ne, typeof ee), $e(null)), ee instanceof Error && !(ee.message in Me) && (Me[ee.message] = !0, $e(ie), v("Failed %s type: %s", B, ee.message), $e(null));
          }
      }
    }
    var Bn = Array.isArray;
    function bt(g) {
      return Bn(g);
    }
    function jn(g) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, B = T && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return B;
      }
    }
    function D(g) {
      try {
        return _(g), !1;
      } catch {
        return !0;
      }
    }
    function _(g) {
      return "" + g;
    }
    function ve(g) {
      if (D(g))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jn(g)), _(g);
    }
    var ye = C.ReactCurrentOwner, Te = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Je, Xe, tt;
    tt = {};
    function wt(g) {
      if (He.call(g, "ref")) {
        var T = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function kt(g) {
      if (He.call(g, "key")) {
        var T = Object.getOwnPropertyDescriptor(g, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function dt(g, T) {
      if (typeof g.ref == "string" && ye.current && T && ye.current.stateNode !== T) {
        var B = X(ye.current.type);
        tt[B] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(ye.current.type), g.ref), tt[B] = !0);
      }
    }
    function Ct(g, T) {
      {
        var B = function() {
          Je || (Je = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        B.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: B,
          configurable: !0
        });
      }
    }
    function St(g, T) {
      {
        var B = function() {
          Xe || (Xe = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        B.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: B,
          configurable: !0
        });
      }
    }
    var At = function(g, T, B, Y, ie, pe, ne) {
      var ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: g,
        key: T,
        ref: B,
        props: ne,
        // Record the component responsible for creating this element.
        _owner: pe
      };
      return ee._store = {}, Object.defineProperty(ee._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ee, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.defineProperty(ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.freeze && (Object.freeze(ee.props), Object.freeze(ee)), ee;
    };
    function Et(g, T, B, Y, ie) {
      {
        var pe, ne = {}, ee = null, Pe = null;
        B !== void 0 && (ve(B), ee = "" + B), kt(T) && (ve(T.key), ee = "" + T.key), wt(T) && (Pe = T.ref, dt(T, ie));
        for (pe in T)
          He.call(T, pe) && !Te.hasOwnProperty(pe) && (ne[pe] = T[pe]);
        if (g && g.defaultProps) {
          var ke = g.defaultProps;
          for (pe in ke)
            ne[pe] === void 0 && (ne[pe] = ke[pe]);
        }
        if (ee || Pe) {
          var Ce = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          ee && Ct(ne, Ce), Pe && St(ne, Ce);
        }
        return At(g, ee, Pe, ie, Y, ye.current, ne);
      }
    }
    var Tt = C.ReactCurrentOwner, Nr = C.ReactDebugCurrentFrame;
    function pt(g) {
      if (g) {
        var T = g._owner, B = Ee(g.type, g._source, T ? T.type : null);
        Nr.setExtraStackFrame(B);
      } else
        Nr.setExtraStackFrame(null);
    }
    var Mn;
    Mn = !1;
    function zn(g) {
      return typeof g == "object" && g !== null && g.$$typeof === e;
    }
    function qr() {
      {
        if (Tt.current) {
          var g = X(Tt.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function li(g) {
      return "";
    }
    var _r = {};
    function ui(g) {
      {
        var T = qr();
        if (!T) {
          var B = typeof g == "string" ? g : g.displayName || g.name;
          B && (T = `

Check the top-level render call using <` + B + ">.");
        }
        return T;
      }
    }
    function Ur(g, T) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var B = ui(T);
        if (_r[B])
          return;
        _r[B] = !0;
        var Y = "";
        g && g._owner && g._owner !== Tt.current && (Y = " It was passed a child from " + X(g._owner.type) + "."), pt(g), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, Y), pt(null);
      }
    }
    function Yr(g, T) {
      {
        if (typeof g != "object")
          return;
        if (bt(g))
          for (var B = 0; B < g.length; B++) {
            var Y = g[B];
            zn(Y) && Ur(Y, T);
          }
        else if (zn(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var ie = k(g);
          if (typeof ie == "function" && ie !== g.entries)
            for (var pe = ie.call(g), ne; !(ne = pe.next()).done; )
              zn(ne.value) && Ur(ne.value, T);
        }
      }
    }
    function di(g) {
      {
        var T = g.type;
        if (T == null || typeof T == "string")
          return;
        var B;
        if (typeof T == "function")
          B = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === d))
          B = T.propTypes;
        else
          return;
        if (B) {
          var Y = X(T);
          ut(B, g.props, "prop", Y, g);
        } else if (T.PropTypes !== void 0 && !Mn) {
          Mn = !0;
          var ie = X(T);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ie || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pi(g) {
      {
        for (var T = Object.keys(g.props), B = 0; B < T.length; B++) {
          var Y = T[B];
          if (Y !== "children" && Y !== "key") {
            pt(g), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), pt(null);
            break;
          }
        }
        g.ref !== null && (pt(g), v("Invalid attribute `ref` supplied to `React.Fragment`."), pt(null));
      }
    }
    var Wr = {};
    function Qr(g, T, B, Y, ie, pe) {
      {
        var ne = z(g);
        if (!ne) {
          var ee = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pe = li();
          Pe ? ee += Pe : ee += qr();
          var ke;
          g === null ? ke = "null" : bt(g) ? ke = "array" : g !== void 0 && g.$$typeof === e ? (ke = "<" + (X(g.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : ke = typeof g, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ke, ee);
        }
        var Ce = Et(g, T, B, ie, pe);
        if (Ce == null)
          return Ce;
        if (ne) {
          var ze = T.children;
          if (ze !== void 0)
            if (Y)
              if (bt(ze)) {
                for (var ht = 0; ht < ze.length; ht++)
                  Yr(ze[ht], g);
                Object.freeze && Object.freeze(ze);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yr(ze, g);
        }
        if (He.call(T, "key")) {
          var nt = X(g), Oe = Object.keys(T).filter(function(yi) {
            return yi !== "key";
          }), Fn = Oe.length > 0 ? "{key: someKey, " + Oe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Wr[nt + Fn]) {
            var vi = Oe.length > 0 ? "{" + Oe.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Fn, nt, vi, nt), Wr[nt + Fn] = !0;
          }
        }
        return g === n ? pi(Ce) : di(Ce), Ce;
      }
    }
    function hi(g, T, B) {
      return Qr(g, T, B, !0);
    }
    function mi(g, T, B) {
      return Qr(g, T, B, !1);
    }
    var fi = mi, gi = hi;
    It.Fragment = n, It.jsx = fi, It.jsxs = gi;
  }()), It;
}
process.env.NODE_ENV === "production" ? tr.exports = Si() : tr.exports = Ai();
var w = tr.exports, Ei = Object.defineProperty, Gt = (r, e, t) => ((n, s, o) => s in n ? Ei(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class Ve extends Error {
  constructor(e = {}) {
    super(e.message), Gt(this, "exceptionId"), Gt(this, "message"), Gt(this, "source"), Gt(this, "type"), this.message = e.message ?? "", this.source = e.source, this.type = this.constructor.name, this.exceptionId = e.exceptionId;
  }
}
class rt extends Ve {
}
class vn extends Ve {
}
const Re = (r) => {
  typeof r != "string" ? r && typeof r.toString == "function" ? console.warn(`[nlux] ${r.toString()}`) : console.warn("[nlux]") : console.warn(`[nlux] ${r}`);
}, Kr = [], nr = (r) => {
  Kr.includes(r) || (Kr.push(r), Re(r));
}, io = class mn {
  static register(e) {
    const t = e.__compId;
    t ? mn.componentDefs.get(t) === void 0 && (e.__renderer && e.__updater ? mn.componentDefs.set(t, { id: t, model: e, render: e.__renderer, update: e.__updater }) : Re(`Component with id "${t}" missing renderer or updater`)) : Re("Component definition missing valid id");
  }
  static retrieve(e) {
    const t = mn.componentDefs.get(e);
    if (t) return t;
    Re(`Component with id "${e}" not registered`);
  }
};
io.componentDefs = /* @__PURE__ */ new Map();
let ao = io;
btoa("sectionsRegistered") + "";
const We = (r) => {
  const e = requestAnimationFrame(() => {
    r();
  });
  return () => {
    cancelAnimationFrame(e);
  };
}, qt = (r) => {
  r.replaceChildren();
}, Ne = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (r) => {
  const e = 16 * Math.random() | 0;
  return (r == "x" ? e : 3 & e | 8).toString(16);
});
class Fe {
  constructor(e, t) {
    this.subComponentElementIds = /* @__PURE__ */ new Map(), this.subComponents = /* @__PURE__ */ new Map(), this.__context = null, this.__destroyed = !1, this.__status = "unmounted", this.actionsOnDomReady = [], this.compEventGetter = (i) => {
      if (this.destroyed) return () => {
      };
      const a = this.rendererEventListeners.get(i);
      if (!a) throw new Ve({ source: this.constructor.name, message: `Unable to call renderer event "${i}" because no matching event listener was found. Make sure that the event listener is registered using @CompEventListener() decorator in the component model class, and use class methods instead of arrow function attributes.` });
      return a;
    };
    const n = Object.getPrototypeOf(this).constructor.__compId;
    if (!n) throw new rt({ source: this.constructor.name, message: "Unable to instantiate component: missing compId in implementation. Component should be annotated using @Model() to set compId before iy can be instantiated." });
    if (this.def = ao.retrieve(n) ?? null, !this.def) throw new rt({ source: this.constructor.name, message: `Unable to instantiate component "${n}" because it's not registered. Component should be registered using CompRegistry.register(ComponentClass) before instantiating a component.` });
    this.__instanceId = Ne(), this.__destroyed = !1, this.__context = e, this.renderedDom = null, this.renderingRoot = null, this.props = t;
    const s = t ? Object.entries(t) : [];
    this.elementProps = new Map(s), this.rendererEventListeners = /* @__PURE__ */ new Map();
    const o = this.constructor.__compEventListeners;
    o && o.forEach((i, a) => {
      i.forEach((u) => {
        const l = Object.getPrototypeOf(this)[u];
        typeof l == "function" ? this.addRendererEventListener(a, l.bind(this)) : Re(`Unable to set event listener "${a}" because method "${u}" cannot be found on component "${this.constructor.name} at runtime!"`);
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
    if (!this.__context) throw new rt({ source: this.constructor.name, message: "Unable to get context because it's not set" });
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
    if (this.destroyed) return void Re(`Unable to render component "${(i = this.def) == null ? void 0 : i.id}" because it is already destroyed`);
    if (this.rendered || this.renderedDom) return void Re(`Unable to render component "${this.def.id}" because it is already rendered`);
    const n = document.createDocumentFragment(), s = Object.getPrototypeOf(this).constructor.__compId, o = this.executeRenderer(n);
    if (!o) throw new Ve({ source: this.constructor.name, message: `Unable to render component "${s}" because renderer returned null` });
    this.renderedDom = o;
    for (const [, a] of this.subComponents) {
      const u = this.getSubComponentPortal(a.id);
      u && this.mountSubComponentToPortal(a.id, u);
    }
    We(() => {
      this.destroyed || (t ? e.insertBefore(n, t) : e.append(n), this.renderingRoot = e);
    });
  }
  updateSubComponent(e, t, n) {
    this.throwIfDestroyed();
    const s = this.subComponents.get(e);
    s && !s.destroyed && s.setProp(t, n);
  }
  addSubComponent(e, t, n) {
    if (this.throwIfDestroyed(), this.subComponents.has(e)) throw new rt({ source: this.constructor.name, message: `Unable to add sub-component "${e}" because it already exists` });
    if (this.subComponents.set(e, t), n && this.subComponentElementIds.set(e, n), this.renderedDom) {
      const s = this.getSubComponentPortal(e);
      s && this.mountSubComponentToPortal(e, s);
    }
  }
  executeDomAction(e, ...t) {
    if (this.throwIfDestroyed(), !this.renderedDom) return void this.actionsOnDomReady.push(() => this.executeDomAction(e, ...t));
    if (!this.renderingRoot) throw new Ve({ source: this.constructor.name, message: "Unable to execute DOM action because renderingRoot is not set" });
    const n = this.renderedDom.actions[e];
    if (!n) throw new Ve({ source: this.constructor.name, message: `Unable to execute DOM action "${String(e)}" because it does not exist` });
    return We(() => n(...t));
  }
  executeRenderer(e) {
    var s;
    const t = (s = this.def) == null ? void 0 : s.render;
    if (!t) return null;
    if (this.renderingRoot) throw new Ve({ source: this.constructor.name, message: "Unable to render component because renderingRoot is already set" });
    const n = t({ appendToRoot: (o) => {
      e.append(o), this.runDomActionsQueue();
    }, compEvent: this.compEventGetter, props: this.rendererProps, context: this.context });
    return n && (this.renderingRoot = e), n;
  }
  removeSubComponent(e) {
    this.throwIfDestroyed(), We(() => {
      const t = this.subComponents.get(e);
      t && (t.renderingRoot = null, t.destroy(), this.subComponents.delete(e));
    });
  }
  runDomActionsQueue() {
    if (this.actionsOnDomReady.length > 0 && this.rendered) {
      const e = this.actionsOnDomReady;
      this.actionsOnDomReady = [];
      for (const t of e) We(() => t());
    }
  }
  setProp(e, t) {
    this.destroyed ? Re(`Unable to set prop "${String(e)}" because component "${this.constructor.name}" is destroyed`) : this.elementProps.has(e) ? (this.schedulePropUpdate(e, this.elementProps.get(e), t), this.props = Object.freeze(Object.fromEntries(this.elementProps)), this.elementProps.set(e, t)) : Re(`Unable to set prop "${String(e)}" because it does not exist in the component props`);
  }
  throwIfDestroyed() {
    if (this.__destroyed) throw new rt({ source: this.constructor.name, message: "Unable to call method on destroyed component" });
  }
  addRendererEventListener(e, t) {
    if (this.throwIfDestroyed(), this.rendererEventListeners.has(e)) throw new rt({ source: this.constructor.name, message: `Unable to add event listener to rendererEvents "${e}" because it already exists` });
    this.rendererEventListeners.set(e, t);
  }
  destroyComponent(e = !1) {
    if (this.throwIfDestroyed(), this.subComponents.forEach((t) => {
      t.destroy();
    }), this.renderedDom) {
      this.renderedDom.elements && (this.renderedDom.elements = void 0), this.renderedDom.actions && (this.renderedDom.actions = void 0), this.renderedDom.onDestroy && this.renderedDom.onDestroy();
      const t = this.renderingRoot;
      We(() => {
        var n;
        if (t) if (t instanceof DocumentFragment) for (; t.firstChild; ) t.removeChild(t.firstChild);
        else e ? (n = t.parentElement) == null || n.removeChild(t) : qt(t);
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
    o && We(() => {
      i({ propName: e, currentValue: t, newValue: n, dom: { root: o, elements: s.elements, actions: s.actions }, updateSubComponent: this.updateSubComponent });
    });
  }
}
Fe.__compEventListeners = null, Fe.__compId = null, Fe.__renderer = null, Fe.__updater = null;
const et = (r, e, t) => (n) => {
  n.__compId = r, n.__renderer = e, n.__updater = t;
}, qe = (r) => (e, t) => {
  const n = e;
  if (typeof n.constructor != "function") throw new rt({ source: "CallbackFor", message: "@CallbackFor can only be used on methods of a class!" });
  n.constructor.hasOwnProperty("__compEventListeners") && n.constructor.__compEventListeners !== null || (n.constructor.__compEventListeners = /* @__PURE__ */ new Map());
  const s = n.constructor.__compEventListeners, o = s.get(r);
  o ? o.push(t) : s.set(r, [t]);
};
function Ti() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
let ct = { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
function Gr(r) {
  ct = r;
}
var Pi = Object.defineProperty, co = (r, e, t) => ((n, s, o) => s in n ? Pi(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
let Mt = class {
  constructor(e) {
    co(this, "options"), this.options = e || ct;
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
co(Mt, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]));
const lo = /[&<>"']/, Ii = new RegExp(lo.source, "g"), uo = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Ri = new RegExp(uo.source, "g"), Oi = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Jr = (r) => Oi[r];
function De(r, e) {
  if (e) {
    if (lo.test(r)) return r.replace(Ii, Jr);
  } else if (uo.test(r)) return r.replace(Ri, Jr);
  return r;
}
const Li = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function Di(r) {
  return r.replace(Li, (e, t) => (t = t.toLowerCase()) === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "");
}
const Bi = /(^|[^\[])\^/g;
function ue(r, e) {
  let t = typeof r == "string" ? r : r.source;
  e = e || "";
  const n = { replace: (s, o) => {
    let i = typeof o == "string" ? o : o.source;
    return i = i.replace(Bi, "$1"), t = t.replace(s, i), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
function Vr(r) {
  try {
    r = encodeURI(r).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return r;
}
const zt = { exec: () => null };
function es(r, e) {
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
function Jt(r, e, t) {
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
const Wt = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, po = /(?:[*+-]|\d{1,9}[.)])/, ho = ue(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, po).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Ar = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Er = /(?!\s*\])(?:\\.|[^\[\]\\])+/, ji = ue(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Er).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Mi = ue(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, po).getRegex(), Ln = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Tr = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, zi = ue("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Tr).replace("tag", Ln).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ts = ue(Ar).replace("hr", Wt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ln).getRegex(), Pr = { blockquote: ue(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ts).getRegex(), code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, def: ji, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hr: Wt, html: zi, lheading: ho, list: Mi, newline: /^(?: *(?:\n|$))+/, paragraph: ts, table: zt, text: /^[^\n]+/ }, ns = ue("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Wt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ln).getRegex(), Fi = { ...Pr, table: ns, paragraph: ue(Ar).replace("hr", Wt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ns).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ln).getRegex() }, Hi = { ...Pr, html: ue(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Tr).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: zt, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: ue(Ar).replace("hr", Wt).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ho).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, mo = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, fo = /^( {2,}|\\)\n(?!\s*$)/, Qt = "\\p{P}\\p{S}", $i = ue(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Qt).getRegex(), Ni = ue(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Qt).getRegex(), qi = ue("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Qt).getRegex(), _i = ue("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Qt).getRegex(), Ui = ue(/\\([punct])/, "gu").replace(/punct/g, Qt).getRegex(), Yi = ue(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Wi = ue(Tr).replace("(?:-->|$)", "-->").getRegex(), Qi = ue("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Wi).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), yn = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Xi = ue(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", yn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), rs = ue(/^!?\[(label)\]\[(ref)\]/).replace("label", yn).replace("ref", Er).getRegex(), ss = ue(/^!?\[(ref)\](?:\[\])?/).replace("ref", Er).getRegex(), Ir = { _backpedal: zt, anyPunctuation: Ui, autolink: Yi, blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, br: fo, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, del: zt, emStrongLDelim: Ni, emStrongRDelimAst: qi, emStrongRDelimUnd: _i, escape: mo, link: Xi, nolink: ss, punctuation: $i, reflink: rs, reflinkSearch: ue("reflink|nolink(?!\\()", "g").replace("reflink", rs).replace("nolink", ss).getRegex(), tag: Qi, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, url: zt }, Zi = { ...Ir, link: ue(/^!?\[(label)\]\((.*?)\)/).replace("label", yn).getRegex(), reflink: ue(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", yn).getRegex() }, rr = { ...Ir, escape: ue(mo).replace("])", "~|])").getRegex(), url: ue(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, Ki = { ...rr, br: ue(fo).replace("{2,}", "*").getRegex(), text: ue(rr.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Vt = { normal: Pr, gfm: Fi, pedantic: Hi }, Rt = { normal: Ir, gfm: rr, breaks: Ki, pedantic: Zi };
var Gi = Object.defineProperty, Hn = (r, e, t) => ((n, s, o) => s in n ? Gi(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
function os(r, e, t, n) {
  const s = e.href, o = e.title ? De(e.title) : null, i = r[1].replace(/\\([\[\]])/g, "$1");
  if (r[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const a = { type: "link", raw: t, href: s, title: o, text: i, tokens: n.inlineTokens(i) };
    return n.state.inLink = !1, a;
  }
  return { type: "image", raw: t, href: s, title: o, text: De(i) };
}
let xn = class {
  constructor(e) {
    Hn(this, "lexer"), Hn(this, "options"), Hn(this, "rules"), this.options = e || ct;
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, s;
      return t[2] === "@" ? (n = De(t[1]), s = "mailto:" + n) : (n = De(t[1]), s = n), { type: "link", raw: t[0], text: n, href: s, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      n = Jt(n.replace(/^ *>[ \t]?/gm, ""), `
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
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : Jt(n, `
`) };
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(n), o = /^ /.test(n) && / $/.test(n);
      return s && o && (n = n.substring(1, n.length - 1)), n = De(n, !0), { type: "codespan", raw: t[0], text: n };
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
          const h = p.slice(1, -1);
          return { type: "em", raw: p, text: h, tokens: this.lexer.inlineTokens(h) };
        }
        const m = p.slice(2, -2);
        return { type: "strong", raw: p, text: m, tokens: this.lexer.inlineTokens(m) };
      }
    }
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: De(t[1]) };
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
        const s = Jt(n, "#");
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
      return n = this.lexer.state.inRawBlock ? t[0] : De(t[0]), { type: "text", raw: t[0], text: n };
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
        const i = Jt(n.slice(0, -1), "\\");
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
      return s = s.trim(), /^</.test(s) && (s = this.options.pedantic && !/>$/.test(n) ? s.slice(1) : s.slice(1, -1)), os(t, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer);
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
`, 1)[0].replace(/^\t+/, (C) => " ".repeat(3 * C.length)), p = e.split(`
`, 1)[0], m = 0;
        this.options.pedantic ? (m = 2, u = d.trimStart()) : (m = t[2].search(/[^ ]/), m = m > 4 ? 1 : m, u = d.slice(m), m += t[1].length);
        let h = !1;
        if (!d && /^ *$/.test(p) && (a += p + `
`, e = e.substring(p.length + 1), c = !0), !c) {
          const C = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), v = new RegExp(`^ {0,${Math.min(3, m - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), y = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:\`\`\`|~~~)`), A = new RegExp(`^ {0,${Math.min(3, m - 1)}}#`);
          for (; e; ) {
            const x = e.split(`
`, 1)[0];
            if (p = x, this.options.pedantic && (p = p.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), y.test(p) || A.test(p) || C.test(p) || v.test(e)) break;
            if (p.search(/[^ ]/) >= m || !p.trim()) u += `
` + p.slice(m);
            else {
              if (h || d.search(/[^ ]/) >= 4 || y.test(d) || A.test(d) || v.test(d)) break;
              u += `
` + p;
            }
            h || p.trim() || (h = !0), a += x + `
`, e = e.substring(x.length + 1), d = p.slice(m);
          }
        }
        o.loose || (l ? o.loose = !0 : /\n *\n *$/.test(a) && (l = !0));
        let f, k = null;
        this.options.gfm && (k = /^\[[ xX]\] /.exec(u), k && (f = k[0] !== "[ ] ", u = u.replace(/^\[[ xX]\] +/, ""))), o.items.push({ type: "list_item", raw: a, task: !!k, checked: f, loose: !1, text: u, tokens: [] }), o.raw += a;
      }
      o.items[o.items.length - 1].raw = a.trimEnd(), o.items[o.items.length - 1].text = u.trimEnd(), o.raw = o.raw.trimEnd();
      for (let c = 0; c < o.items.length; c++) if (this.lexer.state.top = !1, o.items[c].tokens = this.lexer.blockTokens(o.items[c].text, []), !o.loose) {
        const d = o.items[c].tokens.filter((m) => m.type === "space"), p = d.length > 0 && d.some((m) => /\n.*\n/.test(m.raw));
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
      return os(n, s, n[0], this.lexer);
    }
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2])) return;
    const n = es(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), o = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], i = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === s.length) {
      for (const a of s) /^ *-+: *$/.test(a) ? i.align.push("right") : /^ *:-+: *$/.test(a) ? i.align.push("center") : /^ *:-+ *$/.test(a) ? i.align.push("left") : i.align.push(null);
      for (const a of n) i.header.push({ text: a, tokens: this.lexer.inline(a) });
      for (const a of o) i.rows.push(es(a, i.header.length).map((u) => ({ text: u, tokens: this.lexer.inline(u) })));
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
      if (t[2] === "@") s = De(t[0]), o = "mailto:" + s;
      else {
        let i;
        do
          i = t[0], t[0] = ((n = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : n[0]) ?? "";
        while (i !== t[0]);
        s = De(t[0]), o = t[1] === "www." ? "http://" + t[0] : t[0];
      }
      return { type: "link", raw: t[0], text: s, href: o, tokens: [{ type: "text", raw: s, text: s }] };
    }
  }
};
var Ji = Object.defineProperty, Ot = (r, e, t) => ((n, s, o) => s in n ? Ji(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
let ft = class sr {
  constructor(e) {
    Ot(this, "options"), Ot(this, "state"), Ot(this, "tokens"), Ot(this, "inlineQueue"), Ot(this, "tokenizer"), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || ct, this.options.tokenizer = this.options.tokenizer || new xn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    const t = { block: Vt.normal, inline: Rt.normal };
    this.options.pedantic ? (t.block = Vt.pedantic, t.inline = Rt.pedantic) : this.options.gfm && (t.block = Vt.gfm, this.options.breaks ? t.inline = Rt.breaks : t.inline = Rt.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: Vt, inline: Rt };
  }
  static lex(e, t) {
    return new sr(t).lex(e);
  }
  static lexInline(e, t) {
    return new sr(t).inlineTokens(e);
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
        this.options.extensions.startInline.forEach((m) => {
          p = m.call({ lexer: this }, d), typeof p == "number" && p >= 0 && (c = Math.min(c, p));
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
var Vi = Object.defineProperty, ea = (r, e, t) => ((n, s, o) => s in n ? Vi(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, e + "", t);
let bn = class {
  constructor(e) {
    ea(this, "options"), this.options = e || ct;
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
`, s ? '<pre><code class="language-' + De(s) + '">' + (n ? e : De(e, !0)) + `</code></pre>
` : "<pre><code>" + (n ? e : De(e, !0)) + `</code></pre>
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
    const s = Vr(e);
    if (s === null) return n;
    let o = `<img src="${e = s}" alt="${n}"`;
    return t && (o += ` title="${t}"`), o += ">", o;
  }
  link(e, t, n) {
    const s = Vr(e);
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
}, Rr = class {
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
var ta = Object.defineProperty, $n = (r, e, t) => ((n, s, o) => s in n ? ta(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
let gt = class or {
  constructor(e) {
    $n(this, "options"), $n(this, "renderer"), $n(this, "textRenderer"), this.options = e || ct, this.options.renderer = this.options.renderer || new bn(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Rr();
  }
  static parse(e, t) {
    return new or(t).parse(e);
  }
  static parseInline(e, t) {
    return new or(t).parseInline(e);
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
          n += this.renderer.heading(this.parseInline(i.tokens), i.depth, Di(this.parseInline(i.tokens, this.textRenderer)));
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
            const p = i.items[d], m = p.checked, h = p.task;
            let f = "";
            if (p.task) {
              const k = this.renderer.checkbox(!!m);
              l ? p.tokens.length > 0 && p.tokens[0].type === "paragraph" ? (p.tokens[0].text = k + " " + p.tokens[0].text, p.tokens[0].tokens && p.tokens[0].tokens.length > 0 && p.tokens[0].tokens[0].type === "text" && (p.tokens[0].tokens[0].text = k + " " + p.tokens[0].tokens[0].text)) : p.tokens.unshift({ type: "text", text: k + " " }) : f += k + " ";
            }
            f += this.parse(p.tokens, l), c += this.renderer.listitem(f, h, !!m);
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
var Ft, is, ir, na = Object.defineProperty, go = (r) => {
  throw TypeError(r);
}, _e = (r, e, t) => ((n, s, o) => s in n ? na(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t), ar = (r, e, t) => (((n, s, o) => {
  s.has(n) || go("Cannot " + o);
})(r, e, "access private method"), t);
Ft = /* @__PURE__ */ new WeakSet(), is = function(r, e) {
  return (t) => {
    if (t.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
      const n = "<p>An error occurred:</p><pre>" + De(t.message + "", !0) + "</pre>";
      return e ? Promise.resolve(n) : n;
    }
    if (e) return Promise.reject(t);
    throw t;
  };
}, ir = function(r, e) {
  return (t, n) => {
    const s = { ...n }, o = { ...this.defaults, ...s };
    this.defaults.async === !0 && s.async === !1 && (o.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), o.async = !0);
    const i = ar(this, Ft, is).call(this, !!o.silent, !!o.async);
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
const st = new class {
  constructor(...r) {
    var e, t, n;
    e = this, (t = Ft).has(e) ? go("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), _e(this, "Hooks", Mt), _e(this, "Lexer", ft), _e(this, "Parser", gt), _e(this, "Renderer", bn), _e(this, "TextRenderer", Rr), _e(this, "Tokenizer", xn), _e(this, "defaults", { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null }), _e(this, "options", this.setOptions), _e(this, "parse", ar(this, Ft, ir).call(this, ft.lex, gt.parse)), _e(this, "parseInline", ar(this, Ft, ir).call(this, ft.lexInline, gt.parseInline)), this.use(...r);
  }
  lexer(r, e) {
    return ft.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return gt.parse(r, e ?? this.defaults);
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
        const s = this.defaults.renderer || new bn(this.defaults);
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
        const s = this.defaults.tokenizer || new xn(this.defaults);
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
        const s = this.defaults.hooks || new Mt();
        for (const o in t.hooks) {
          if (!(o in s)) throw new Error(`hook '${o}' does not exist`);
          if (o === "options") continue;
          const i = o, a = t.hooks[i], u = s[i];
          Mt.passThroughHooks.has(o) ? s[i] = (l) => {
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
function fe(r, e) {
  return st.parse(r, e);
}
fe.options = fe.setOptions = function(r) {
  return st.setOptions(r), fe.defaults = st.defaults, Gr(fe.defaults), fe;
}, fe.getDefaults = Ti, fe.defaults = ct, fe.use = function(...r) {
  return st.use(...r), fe.defaults = st.defaults, Gr(fe.defaults), fe;
}, fe.walkTokens = function(r, e) {
  return st.walkTokens(r, e);
}, fe.parseInline = st.parseInline, fe.Parser = gt, fe.parser = gt.parse, fe.Renderer = bn, fe.TextRenderer = Rr, fe.Lexer = ft, fe.lexer = ft.lex, fe.Tokenizer = xn, fe.Hooks = Mt, fe.parse = fe;
const vo = (r, e) => {
  const { showCodeBlockCopyButton: t, markdownLinkTarget: n, syntaxHighlighter: s, htmlSanitizer: o } = e || {}, i = fe(r, { async: !1, breaks: !0 });
  if (typeof i != "string") throw new Error("Markdown parsing failed");
  const a = document.createElement("div");
  return a.innerHTML = o ? o(i) : i, a.querySelectorAll("pre").forEach((u) => {
    const l = document.createElement("div");
    l.className = "code-block";
    const c = u.querySelector("code");
    if (!c) {
      const h = u.innerHTML;
      return l.innerHTML = o ? o(h) : h, void u.replaceWith(l);
    }
    let d;
    for (let h = 0; h < c.classList.length; h++) {
      const f = c.classList[h];
      if (f.startsWith("language-")) {
        d = f.slice(9);
        break;
      }
    }
    const p = document.createElement("pre"), m = "<div>" + c.innerHTML + "</div>";
    if (p.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(m) : m, d && (p.setAttribute("data-language", d), s)) {
      const h = "<div>" + s.createHighlighter()(c.textContent || "", d) + "</div>";
      p.innerHTML = o ? o(h) : h, p.className = "highlighter-dark";
    }
    qt(l), l.appendChild(p), u.replaceWith(l);
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
}, as = (r) => {
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
}, yo = (r) => {
  const e = "nlux-comp-copyButton";
  r instanceof HTMLButtonElement && r.classList.contains(e) ? as(r) : r.querySelectorAll(`.${e}`).forEach(as);
}, ra = (r, e) => {
  let t = !1;
  const { onComplete: n } = e || {}, s = [], o = (e != null && e.skipStreamingAnimation ? "timeout" : "animationFrame") == "timeout" ? (d) => setTimeout(d, 0) : (d) => requestAnimationFrame(d), i = document.createElement("div");
  i.classList.add("md-in-progress"), r.append(i);
  const a = () => {
    for (; i.firstChild; ) {
      const d = i.firstChild;
      d instanceof HTMLElement && yo(d), i.before(d);
    }
  }, u = !(e != null && e.skipStreamingAnimation) && (e != null && e.streamingAnimationSpeed) && e.streamingAnimationSpeed >= 0 ? e.streamingAnimationSpeed : e != null && e.skipStreamingAnimation ? 0 : 8, l = { timeSinceLastProcessing: (/* @__PURE__ */ new Date()).getTime(), currentMarkdown: "", previousHtml: void 0 };
  let c = setInterval(() => {
    const d = (/* @__PURE__ */ new Date()).getTime(), p = (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) !== "never";
    if (s.length === 0 && p) {
      const h = typeof (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) == "number" ? e.waitTimeBeforeStreamCompletion : 2e3;
      return void ((t || d - l.timeSinceLastProcessing > h) && (t = !0, c && (clearInterval(c), c = void 0), a(), i.remove(), n == null ? void 0 : n()));
    }
    l.timeSinceLastProcessing = d;
    const m = s.shift();
    m !== void 0 && typeof m == "string" && o(() => {
      const h = l.currentMarkdown + m, f = vo(h, e).trim();
      if (typeof f != "string") return l.currentMarkdown = l.currentMarkdown.slice(0, -m.length), void Re("Markdown parsing failed");
      if (l.previousHtml && f.length > l.previousHtml.length && f.startsWith(l.previousHtml)) {
        a();
        const k = f.slice(l.previousHtml.length).trim();
        i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(k) : k, l.currentMarkdown = m, l.previousHtml = void 0;
      } else i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(f) : f, l.currentMarkdown = h, l.previousHtml = f;
    });
  }, u);
  return { next: (d) => {
    if (t) Re("Stream is already complete. No more chunks can be added");
    else for (const p of d) s.push(p);
  }, complete: () => {
    s.push(`
`), t = !0;
  }, error: () => {
    t = !0;
  } };
}, xo = (r, e) => {
  const t = document.createElement("div");
  if (t.classList.add("nlux-comp-avatarContainer"), r) {
    const n = document.createElement("div");
    n.classList.add("nlux-comp-avatarPicture"), n.style.backgroundImage = `url("${encodeURI(r)}")`, t.append(n);
  }
  return t;
}, Or = "nlux-comp-avatar", Lr = (r) => {
  const e = document.createElement("div");
  return e.classList.add(Or), r.avatar || r.name ? (r.name && (e.title = r.name), r.avatar && r.avatar instanceof HTMLElement ? (e.append(r.avatar.cloneNode(!0)), e) : (e.append(xo(r.avatar)), e)) : e;
}, en = { received: "nlux_msg_received", sent: "nlux_msg_sent" }, bo = (r, e) => {
  Object.keys(en).forEach((t) => {
    r.classList.remove(en[t]);
  }), en[e] && r.classList.add(en[e]);
}, jt = { streaming: "nlux_msg_streaming", complete: "nlux_msg_complete" }, wo = (r, e) => {
  Object.keys(jt).forEach((t) => {
    r.classList.remove(jt[t]);
  }), jt[e] && r.classList.add(jt[e]);
}, ko = (r, e = "text", t) => {
  if (e === "markdown") {
    const n = document.createElement("div");
    n.innerHTML = vo(r, t), yo(n);
    const s = document.createDocumentFragment();
    for (; n.firstChild; ) s.appendChild(n.firstChild);
    return s;
  }
  return document.createTextNode(r);
}, Co = "nlux-comp-message", tn = { received: "nlux-comp-chatItem--received", sent: "nlux-comp-chatItem--sent" }, So = (r, e) => {
  Object.keys(tn).forEach((t) => {
    r.classList.remove(tn[t]);
  }), tn[e] && r.classList.add(tn[e]);
}, nn = { bubbles: "nlux-comp-chatItem--bubblesLayout", list: "nlux-comp-chatItem--listLayout" }, Ao = (r, e) => {
  Object.keys(nn).forEach((t) => {
    r.classList.remove(nn[t]);
  }), nn[e] && r.classList.add(nn[e]);
}, Eo = "nlux-comp-chatItem-participantInfo", To = "nlux-comp-chatItem-participantName", sa = (r) => {
  const e = document.createElement("div");
  e.classList.add("nlux-comp-chatItem");
  const t = { direction: r.direction, status: r.status, message: r.message };
  let n;
  if (r.avatar !== void 0) {
    const i = { name: r.name, avatar: r.avatar };
    n = Lr(i);
  }
  const s = document.createElement("span");
  s.classList.add(To), s.textContent = r.name;
  {
    const i = document.createElement("div");
    i.classList.add(Eo), n !== void 0 && i.append(n), i.append(s), e.append(i);
  }
  So(e, r.direction), Ao(e, r.layout);
  const o = ((i) => {
    const a = document.createElement("div");
    a.classList.add(Co);
    const u = i.status ? i.status : "complete";
    return wo(a, u), bo(a, i.direction), a;
  })(t);
  return e.append(o), e;
}, cs = (r, e, t) => {
  if (e.name !== t.name && typeof t.avatar == "string") {
    const n = t.name && t.name.length > 0 ? t.name[0].toUpperCase() : "", s = r.querySelector("* > .nlux-comp-avatarContainer > .avtr_ltr");
    s == null || s.replaceChildren(n);
  }
}, Po = (r, e, t) => {
  e.avatar === t.avatar && e.name === t.name || (e.avatar !== t.avatar && ((n, s, o) => {
    if (s.avatar !== o.avatar) if (typeof o.avatar == "string" && typeof s.avatar == "string") {
      const i = n.querySelector("* > .nlux-comp-avatarContainer > .nlux-comp-avatarPicture");
      i !== null && (i.style.backgroundImage = `url("${encodeURI(o.avatar)}")`);
    } else if (typeof o.avatar == "string") {
      const i = xo(o.avatar);
      n.replaceChildren(i);
    } else o.avatar ? n.replaceChildren(o.avatar.cloneNode(!0)) : qt(n);
  })(r, e, t), t.name ? e.name !== t.name && (r.title = t.name, cs(r, e, t)) : (r.title = "", cs(r, e, t)));
}, oa = (r, e, t) => {
  if (e.message === t.message && e.status === t.status && e.direction === t.direction || !t || !t.hasOwnProperty("message") && !t.hasOwnProperty("status") && !t.hasOwnProperty("direction")) return;
  e.direction !== t.direction && bo(r, t.direction);
  const n = t.status;
  if (e.status !== n) return wo(r, t.status), void ((s, o, i) => {
    const a = i.status;
    if (a !== "streaming" && a === "complete") {
      const u = i.message ? i.message : "", l = document.createTextNode(u);
      s.classList.add(jt[a]), qt(s), s.append(l);
    }
  })(r, 0, t);
  n === "complete" && (e.message === t.message && e.format === t.format || ((s, o, i) => {
    o.message === i.message && o.format === i.format || (qt(s), s.append(ko(i.message ?? "", i.format)));
  })(r, e, t));
}, ls = "dom/getElement";
var ia = Object.defineProperty, aa = Object.getOwnPropertyDescriptor, us = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? aa(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && ia(e, t, o), o;
};
let fn = class extends Fe {
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
    this.context.emit("messageRendered", { uid: this.props.uid, message: e });
  }
};
us([qe("markdown-stream-complete")], fn.prototype, "onMarkdownStreamComplete", 1), fn = us([et("chatItem", ({ props: r, appendToRoot: e, compEvent: t }) => {
  const n = sa({ ...r.domProps, message: void 0 }), s = ((c, d) => {
    const p = c.querySelector(d);
    if (!p) throw new vn({ source: ls, message: `Could not find element with query "${d}". Make sure the query provided matches an element that exists in the root element.` });
    if (!(p instanceof HTMLElement)) throw new vn({ source: ls, message: `Element with query "${d}" is not a valid HTMLElement.` });
    return p;
  })(n, ".nlux-comp-message");
  if (!s) throw new Error("Message container not found");
  const o = document.createElement("div");
  o.classList.add("nlux-markdownStream-root");
  const i = document.createElement("div");
  if (i.classList.add("nlux-markdown-container"), i.setAttribute("nlux-message-id", r.uid), o.append(i), s.append(o), r.domProps.message) {
    const c = ko(r.domProps.message ?? "", "markdown", { markdownLinkTarget: r.markdownLinkTarget, syntaxHighlighter: r.syntaxHighlighter, htmlSanitizer: r.htmlSanitizer });
    i.append(c);
  }
  let a;
  e(n);
  let u = { ...r };
  const l = (c) => ((d, p) => {
    const m = ra(d, { syntaxHighlighter: p == null ? void 0 : p.syntaxHighlighter, htmlSanitizer: p == null ? void 0 : p.htmlSanitizer, markdownLinkTarget: p == null ? void 0 : p.markdownLinkTarget, showCodeBlockCopyButton: p == null ? void 0 : p.showCodeBlockCopyButton, skipStreamingAnimation: p == null ? void 0 : p.skipStreamingAnimation, streamingAnimationSpeed: p == null ? void 0 : p.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: p == null ? void 0 : p.waitTimeBeforeStreamCompletion, onComplete: p == null ? void 0 : p.onComplete });
    return { next(h) {
      m.next(h);
    }, complete() {
      m.complete();
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
    ((p, m, h) => {
      if ((m.direction !== h.direction || m.layout !== h.layout || m.status !== h.status || m.message !== h.message || m.name !== h.name || m.avatar !== h.avatar) && h && (h.hasOwnProperty("direction") || h.hasOwnProperty("layout") || h.hasOwnProperty("status") || h.hasOwnProperty("message") || h.hasOwnProperty("loader") || h.hasOwnProperty("name") || h.hasOwnProperty("avatar"))) {
        if (m.direction !== h.direction && So(p, h.direction), m.layout !== h.layout && Ao(p, h.layout), m.direction !== h.direction || m.status !== h.status || m.message !== h.message) {
          const f = p.querySelector(`.${Co}`);
          f && oa(f, { direction: m.direction, status: m.status, message: m.message }, { direction: h.direction, status: h.status, message: h.message });
        }
        if (m.name !== h.name || m.avatar !== h.avatar) {
          const f = p.querySelector(`.${Or}`);
          if (!h.name && !h.avatar) return void (f == null ? void 0 : f.remove());
          if (f) Po(f, { name: m.name, avatar: m.avatar }, { name: h.name, avatar: h.avatar });
          else if (h.name !== void 0 || h.avatar !== void 0) {
            const k = { name: h.name, avatar: h.avatar }, C = Lr(k), v = p.querySelector(`.${Eo}`);
            v && v.prepend(C);
          }
        }
        if (m.name !== h.name) {
          const f = p.querySelector(`.${To}`);
          f && (f.textContent = h.name || "");
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
})], fn);
const ca = (r, e) => {
  let t, n = e, s = r, o = !0;
  const i = ((f, k) => {
    let C = !1;
    if (typeof f != "function") throw new Ve({ source: "x/throttle", message: "Callback must be a function" });
    return (...v) => {
      C || (f.apply(void 0, v), C = !0, setTimeout(function() {
        C = !1;
      }, k));
    };
  })(/* @__PURE__ */ ((f) => {
    let k, C;
    return (v) => {
      const y = v.target;
      if (!(y instanceof HTMLElement)) return;
      const { scrollTop: A, clientHeight: x, scrollHeight: I } = y, q = I - 30, M = Math.ceil(A + x) >= q, O = k === void 0 || C === void 0 ? void 0 : A > k && C === I ? "down" : A < k && C === I ? "up" : void 0;
      C = I, k = A, f({ scrolledToBottom: M, scrollDirection: O });
    };
  })(({ scrolledToBottom: f, scrollDirection: k }) => {
    o ? k === "up" && (o = !1) : k === "down" && f && (o = !0);
  }), 50), a = (f) => {
    f.addEventListener("scroll", i);
  }, u = (f) => {
    f == null || f.removeEventListener("scroll", i);
  }, l = (f) => {
    (t == null ? void 0 : t.uid) === f && (c == null || c.disconnect(), d == null || d.disconnect(), t = void 0, c = void 0, d = void 0);
  };
  let c, d;
  const p = () => {
    s == null || s.scrollTo({ top: 5e4, behavior: "instant" });
  }, m = () => {
    s && n && o && p();
  }, h = () => {
    m();
  };
  return a(s), { updateConversationContainer: (f) => {
    u(s), a(f), s = f;
  }, updateProps: ({ autoScroll: f }) => {
    n = f;
  }, handleNewChatSegmentAdded: (f, k) => {
    t && (c == null || c.disconnect(), d == null || d.disconnect()), t = { uid: f, container: k }, c = new ResizeObserver(m), c.observe(k), d = new MutationObserver(h), d.observe(k, { childList: !0, subtree: !0, characterData: !0 }), n && p();
  }, handleChatSegmentRemoved: (f) => l(f), handleChatSegmentComplete: (f) => l(f), destroy: () => {
    t && (l(t.uid), t = void 0), u(s), s = void 0;
  } };
}, vt = (r) => {
  var n;
  const e = typeof r == "function" ? r.__compId : void 0;
  if (!e) throw new Error("Invalid compClass! Component should be registered before using");
  const t = (n = ao.retrieve(e)) == null ? void 0 : n.model;
  if (!t || typeof t != "function") throw new Error(`Component "${e}" is not registered`);
  return { withContext: (s) => ({ create: () => new t(s, {}), withProps: (o) => ({ create: () => new t(s, o) }) }) };
}, la = (r) => {
  const e = ["adapter", "events"], t = Object.keys(r).filter((s) => !e.includes(s)), n = {};
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    n[o] = r[o];
  }
  return n;
}, Io = () => {
  const r = document.createElement("div");
  r.classList.add("nlux-comp-messageLoader");
  const e = document.createElement("span");
  e.classList.add("spinning-loader");
  const t = document.createElement("div");
  return t.classList.add("nlux-comp-loaderContainer"), t.appendChild(e), r.appendChild(t), r;
}, ds = (r) => {
  const e = "nlux-chatSegment";
  return r === "complete" ? `${e} nlux-chatSegment--complete` : r === "error" ? `${e} nlux-chatSegment--error` : `${e} nlux-chatSegment--active`;
}, rn = (r, e) => {
  var t, n;
  return r === "assistant" ? ((t = e == null ? void 0 : e.assistant) == null ? void 0 : t.name) ?? "Assistant" : r === "user" ? ((n = e == null ? void 0 : e.user) == null ? void 0 : n.name) ?? "User" : "";
}, ua = "bubbles";
var da = Object.defineProperty, pa = Object.getOwnPropertyDescriptor, sn = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? pa(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && da(e, t, o), o;
};
let mt = class extends Fe {
  constructor(e, t) {
    super(e, t), this.chatItemCompIdsByIndex = [], this.chatItemComponentsById = /* @__PURE__ */ new Map();
  }
  addChatItem(e) {
    var s, o;
    if (this.throwIfDestroyed(), this.chatItemComponentsById.has(e.uid)) throw new Error(`CompChatSegment: chat item with id "${e.uid}" already exists`);
    const t = ((i, a, u, l) => {
      const c = a ?? ua;
      if (i.participantRole === "assistant") {
        const p = i.status === "complete" ? "complete" : "streaming";
        return i.dataTransferMode === "stream" ? { status: p, layout: c, direction: "received", name: rn("assistant", { assistant: l }), avatar: l == null ? void 0 : l.avatar } : i.status === "complete" ? { status: p, layout: c, direction: "received", name: rn("assistant", { assistant: l }), avatar: l == null ? void 0 : l.avatar, message: (d = i.content, typeof d == "string" ? d : typeof d == "object" ? `${d}` : d == null ? "" : typeof d.toString == "function" ? d.toString() : JSON.stringify(d)) } : { status: p, layout: c, direction: "received", name: rn("assistant", { assistant: l }), avatar: l == null ? void 0 : l.avatar };
      }
      var d;
      return { status: "complete", layout: c, direction: "sent", message: i.content, name: rn("user", { user: u }), avatar: u == null ? void 0 : u.avatar };
    })(e, this.getProp("conversationLayout"), this.getProp("userPersona"), this.getProp("assistantPersona"));
    if (!t) throw new Error(`CompChatSegment: chat item with id "${e.uid}" has invalid props`);
    const n = vt(fn).withContext(this.context).withProps({ uid: e.uid, domProps: t, markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed") }).create();
    this.chatItemComponentsById.set(e.uid, n), this.chatItemCompIdsByIndex.push(e.uid), this.rendered && ((o = (s = this.renderedDom) == null ? void 0 : s.elements) != null && o.chatSegmentContainer ? n.render(this.renderedDom.elements.chatSegmentContainer, this.renderedDom.elements.loaderContainer) : nr("CompChatSegment: chatSegmentContainer is not available"));
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
    We(() => {
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
sn([qe("loader-shown")], mt.prototype, "onLoaderShown", 1), sn([qe("chat-segment-ready")], mt.prototype, "onChatSegmentReady", 1), sn([qe("loader-hidden")], mt.prototype, "onLoaderHidden", 1), mt = sn([et("chatSegment", ({ props: r, compEvent: e, appendToRoot: t }) => {
  let n;
  const s = document.createElement("div");
  s.className = ds(r.status);
  const o = () => {
    if (!n) {
      n = document.createElement("div"), n.className = "nlux-chatSegment-loader-container";
      const i = Io();
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
    i.className = ds(a), a === "active" ? (s = t.actions) == null || s.showLoader() : (o = t.actions) == null || o.hideLoader();
  }
})], mt);
let cr = class extends Fe {
  constructor(e, t) {
    super(e, t), this.chatSegmentCompIdsByIndex = [], this.chatSegmentComponentsById = /* @__PURE__ */ new Map(), t.messages && t.messages.length > 0 && this.addChatSegment("complete", t.messages);
  }
  addChatItem(e, t) {
    const n = this.chatSegmentComponentsById.get(e);
    if (!n) throw new Error(`CompConversation: chat segment with id "${e}" not found`);
    n.destroyed ? nr(`CompConversation: chat segment with id "${e}" is destroyed and cannot be used`) : n.addChatItem(t);
  }
  addChatSegment(e = "active", t) {
    this.throwIfDestroyed();
    const n = Ne(), s = vt(mt).withContext(this.context).withProps({ uid: n, status: e, conversationLayout: this.getProp("conversationLayout"), userPersona: this.getProp("userPersona"), assistantPersona: this.getProp("assistantPersona"), markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed") }).create();
    if (t) for (const i of t) i.role === "assistant" ? s.addChatItem({ uid: Ne(), participantRole: "assistant", time: /* @__PURE__ */ new Date(), dataTransferMode: "batch", status: "complete", content: i.message, serverResponse: i.serverResponse }) : i.role === "user" && s.addChatItem({ uid: Ne(), participantRole: "user", time: /* @__PURE__ */ new Date(), status: "complete", content: i.message });
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
    if (typeof e == "number" && e < 0) return void nr(`Invalid value provided for 'historyPayloadSize' : "${e}"! Value must be a positive integer or 'max'.`);
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
cr = ((r, e, t, n) => {
  for (var s, o = e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = s(o) || o);
  return o;
})([et("conversation", ({ appendToRoot: r }) => {
  const e = document.createElement("div");
  return e.classList.add("nlux-chatSegments-container"), r(e), { elements: { segmentsContainer: e }, actions: {} };
}, () => {
})], cr);
const Nn = { typing: "nlux-composer--typing", "submitting-prompt": "nlux-composer--submitting", "submitting-conversation-starter": "nlux-composer--submitting", waiting: "nlux-composer--waiting" }, Ro = (r, e) => {
  Object.keys(Nn).forEach((t) => {
    r.classList.remove(Nn[t]);
  }), r.classList.add(Nn[e]);
}, ha = (r) => {
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
  })()), n.append(Io()), e.append(t), e.append(n), Ro(e, r.status), r.status !== "submitting-conversation-starter" && r.status !== "submitting-prompt" || (t.disabled = !0, n.disabled = !0), r.status === "waiting" && (n.disabled = !0), r.status === "typing" && (n.disabled = r.disableSubmitButton ?? t.value === ""), e;
}, wn = (r, e) => {
  let t = !1;
  const n = e ? r.querySelector(e) : r, s = n instanceof HTMLElement ? n : void 0;
  if (!s) throw new vn({ source: "dom/listenTo", message: `Could not find element with query "${e}". Make sure the query provided matches an element that exists in the root element.` });
  const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = () => {
    s && (o.forEach((l, c) => {
      s.removeEventListener(c, l);
    }), o.clear(), i.clear());
  }, u = { on: (l, c) => {
    if (!c || !s) return u;
    if (!o.has(l)) {
      const d = (p) => {
        var m;
        (m = i.get(l)) == null || m.forEach((h) => h(p));
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
var ma = Object.defineProperty, fa = Object.getOwnPropertyDescriptor, Lt = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? fa(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && ma(e, t, o), o;
};
let ot = class extends Fe {
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
    t && t !== "Enter" || (this.handleSendButtonClick(), e == null || e.preventDefault());
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
Lt([qe("command-enter-key-pressed")], ot.prototype, "handleCommandEnterKeyPressed", 1), Lt([qe("enter-key-pressed")], ot.prototype, "handleEnterKeyPressed", 1), Lt([qe("send-message-clicked")], ot.prototype, "handleSendButtonClick", 1), Lt([qe("text-updated")], ot.prototype, "handleTextInputUpdated", 1), ot = Lt([et("composer", ({ appendToRoot: r, props: e, compEvent: t }) => {
  const n = ha(e.domCompProps);
  r(n);
  const [s, o] = wn(n, ":scope > textarea").on("input", t("text-updated")).on("keydown", (c) => {
    const d = c.key === "Enter", p = c.altKey || c.ctrlKey || c.metaKey || c.shiftKey;
    if (d && !p) return void t("enter-key-pressed")(c);
    const m = c.getModifierState("Meta") && c.key === "Enter", h = c.getModifierState("Control") && c.key === "Enter";
    (m || h) && t("command-enter-key-pressed")(c);
  }).get(), [i, a] = wn(n, ":scope > button").on("click", t("send-message-clicked")).get();
  if (!(i instanceof HTMLButtonElement)) throw new Error("Expected a button element");
  if (!(s instanceof HTMLTextAreaElement)) throw new vn({ source: (u = "composer", l = "render", `#${u}/${l}`), message: "Expected a textarea element" });
  var u, l;
  return { elements: { root: n, textInput: s, sendButton: i }, actions: { focusTextInput: () => We(() => {
    s.focus(), s.setSelectionRange(s.value.length, s.value.length);
  }) }, onDestroy: () => {
    o(), a();
  } };
}, ({ propName: r, currentValue: e, newValue: t, dom: n }) => {
  var s;
  r === "domCompProps" && ((s = n.elements) != null && s.root) && ((o, i, a) => {
    if (i.status === a.status && i.message === a.message && i.placeholder === a.placeholder && i.autoFocus === a.autoFocus && i.disableSubmitButton === a.disableSubmitButton) return;
    if (i.status !== a.status) return Ro(o, a.status), void ((l, c, d) => {
      if (c.status === d.status) return;
      const p = l.querySelector("* > textarea");
      d.status !== "typing" && d.status !== "waiting" || !p.disabled ? d.status !== "submitting-prompt" && d.status !== "submitting-conversation-starter" || p.disabled || (p.disabled = !0) : p.disabled = !1;
      const m = l.querySelector("* > button");
      if (d.status === "typing") {
        const h = (c.disableSubmitButton !== d.disableSubmitButton ? d.disableSubmitButton : c.disableSubmitButton) ?? p.value === "";
        m.disabled !== h && (m.disabled = h);
      } else d.status !== "waiting" && d.status !== "submitting-prompt" && d.status !== "submitting-conversation-starter" || m.disabled || (m.disabled = !0);
      c.placeholder !== d.placeholder && (p.placeholder = d.placeholder ?? ""), c.message !== d.message && (p.value = d.message ?? ""), c.autoFocus !== d.autoFocus && (p.autofocus = d.autoFocus ?? !1);
    })(o, i, a);
    const u = o.querySelector("* > textarea");
    if (i.placeholder !== a.placeholder && (u.placeholder = a.placeholder ?? ""), i.autoFocus !== a.autoFocus && (u.autofocus = a.autoFocus ?? !1), i.message !== a.message && (u.value = a.message ?? ""), i.status === "typing") {
      const l = o.querySelector("* > button"), c = (i.disableSubmitButton !== a.disableSubmitButton ? a.disableSubmitButton : i.disableSubmitButton) ?? u.value === "";
      l.disabled !== c && (l.disabled = c);
    }
  })(n.elements.root, e, t);
})], ot);
const lr = (r) => {
  if (typeof r != "object" || r === null) return !1;
  const e = r;
  return (typeof e.streamText == "function" || typeof e.batchText == "function") && ["stream", "batch"].includes(e.dataTransferMode) && typeof e.id == "string" && typeof e.info == "object" && e.info !== null && typeof e.preProcessAiBatchedMessage == "function" && typeof e.preProcessAiStreamedChunk == "function";
}, Se = (r, e = 1) => {
  setTimeout(() => {
    r();
  }, e);
}, ga = (r, e, t, n, s, o, i, a, u) => new Promise((l) => {
  const c = Ne(), d = [], p = [];
  let m = !1, h = !1, f = !1;
  const k = lr(t), C = { next: (v) => {
    if (h || f) return;
    let y, A;
    if (k) {
      const x = v, I = t.preProcessAiStreamedChunk(x, n);
      I != null && (y = I, A = x, d.push(y), p.push(A));
    } else y = v, d.push(y);
    y != null ? (m || m || (m = !0, Se(() => {
      s.forEach((x) => {
        x({ uid: c, status: "streaming", time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" });
      });
    })), Se(() => {
      i.forEach((x) => {
        x({ chunk: y, messageId: c, serverResponse: A });
      });
    })) : Re("Adapter returned an undefined or null value from streamText. This chunk will be ignored.");
  }, complete: () => {
    h || f || (f = !0, Se(() => {
      const v = { uid: c, status: "complete", content: d, contentType: "text", serverResponse: void 0, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" };
      o.forEach((y) => {
        y(v);
      }), l();
    }), Se(() => {
      const v = { uid: r, status: "complete", items: [e, { uid: c, status: "complete", contentType: "text", content: d, serverResponse: p, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" }] };
      a.forEach((y) => {
        y(v);
      });
    }));
  }, error: (v) => {
    h || f || (h = !0, Se(() => {
      u.forEach((y) => {
        y("failed-to-stream-content", v);
      }), l();
    }));
  } };
  t.streamText(e.content, C, n);
}), va = (r, e, t) => {
  if (!r) return (() => {
    const v = /* @__PURE__ */ new Set(), y = Ne(), A = { uid: y, status: "complete", items: [] };
    return Se(() => {
      v.forEach((x) => {
        x(A);
      }), v.clear();
    }), { segment: A, observable: { on: (x, I) => {
      x === "complete" && v.add(I);
    }, removeListener: (x, I) => {
      v.delete(I);
    }, destroy: () => {
      v.clear();
    }, get segmentId() {
      return y;
    } }, dataTransferMode: "batch" };
  })();
  const n = e;
  if (n.streamText === void 0 && n.batchText === void 0 && n.streamServerComponent === void 0) return ((v) => {
    const y = /* @__PURE__ */ new Set(), A = Ne(), x = { uid: A, status: "error", items: [] };
    return Se(() => {
      y.forEach((I) => I(v)), y.clear();
    }), { segment: x, dataTransferMode: "stream", observable: { on: (I, q) => {
      I === "error" && y.add(q);
    }, removeListener: (I, q) => {
      y.delete(q);
    }, destroy: () => {
      y.clear();
    }, get segmentId() {
      return A;
    } } };
  })("no-data-transfer-mode-supported");
  const s = Ne(), o = ((v) => ({ uid: Ne(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: v, contentType: "text" }))(r);
  let i, a, u, l, c, d, p = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  Se(() => {
    p != null && p.size && (p.forEach((v) => {
      v(o);
    }), p.clear(), p = void 0);
  });
  const f = ((v) => {
    const y = [], A = v, x = v;
    (A == null ? void 0 : A.streamText) === void 0 && (x == null ? void 0 : x.streamServerComponent) === void 0 || y.push("stream"), (A == null ? void 0 : A.batchText) !== void 0 && y.push("batch");
    const I = lr(v) ? v : void 0, q = (I == null ? void 0 : I.dataTransferMode) ?? void 0, M = y.length === 1 ? y[0] : "stream";
    return q ?? M;
  })(e);
  ((v) => "streamServerComponent" in v ? "server-component" : "text")(e) === "server-component" ? (u = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), ((v, y, A, x, I, q, M, O) => new Promise((z, W) => {
    try {
      const Q = y.content, X = Ne(), U = "assistant", V = "streaming", re = /* @__PURE__ */ new Date(), G = "stream";
      let oe, J;
      const S = () => {
        Se(() => {
          q.forEach(($) => {
            oe && J && $({ ...oe, content: J, status: "complete" });
          });
        }, 20);
        const L = { uid: v, status: "complete", items: [y, oe] };
        Se(() => {
          M.forEach(($) => {
            $(L);
          }), z();
        }, 20);
      }, R = () => {
        O.forEach((L) => {
          L("failed-to-stream-server-component", new Error("Failed to load content"));
        });
      };
      J = A.streamServerComponent(Q, x, { onServerComponentReceived: S, onError: R }), oe = { uid: X, content: J, contentType: "server-component", participantRole: U, status: V, time: re, dataTransferMode: G }, Se(() => {
        I.forEach((L) => {
          L(oe);
        });
      }, 10);
    } catch (Q) {
      Re(Q);
      const X = Q instanceof Error ? Q : typeof Q == "string" ? new Error(Q) : new Error("Unknown error");
      Se(() => {
        O.forEach((U) => U("failed-to-load-content", X));
      });
    }
  }))(s, o, e, t, a, u, m, h).finally(() => {
    Se(() => C());
  })) : f === "batch" ? (i = /* @__PURE__ */ new Set(), (async (v, y, A, x, I, q, M) => {
    try {
      const O = y.content, z = lr(A) ? A : void 0, W = z !== void 0, Q = Ne(), X = "assistant", U = "complete", V = /* @__PURE__ */ new Date(), re = "batch";
      let G;
      if (W) {
        const S = await z.batchText(O, x), R = z.preProcessAiBatchedMessage(S, x);
        R != null && (G = { uid: Q, content: R, contentType: "text", serverResponse: S, participantRole: X, status: U, time: V, dataTransferMode: re });
      } else G = { uid: Q, content: await A.batchText(O, x), contentType: "text", serverResponse: void 0, participantRole: X, status: U, time: V, dataTransferMode: re };
      if (!G) throw new Error("Response from adapter was undefined or cannot be processed");
      const oe = G;
      Se(() => {
        I.forEach((S) => {
          S(oe);
        });
      });
      const J = { uid: v, status: "complete", items: [y, G] };
      Se(() => {
        q.forEach((S) => {
          S(J);
        });
      });
    } catch (O) {
      Re(O);
      const z = O instanceof Error ? O : typeof O == "string" ? new Error(O) : new Error("Unknown error");
      Se(() => {
        M.forEach((W) => W("failed-to-load-content", z));
      });
    }
  })(s, o, e, t, i, m, h).finally(() => {
    Se(() => C());
  })) : (l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), ga(s, o, e, t, l, c, d, m, h).finally(() => {
    Se(() => C());
  }));
  const C = () => {
    p == null || p.clear(), p = void 0, i == null || i.clear(), i = void 0, a == null || a.clear(), a = void 0, u == null || u.clear(), u = void 0, l == null || l.clear(), l = void 0, c == null || c.clear(), c = void 0, d == null || d.clear(), d = void 0, m == null || m.clear(), m = void 0, h == null || h.clear(), h = void 0;
  };
  return { segment: { status: "active", uid: s, items: [] }, dataTransferMode: f, observable: { get segmentId() {
    return s;
  }, on: (v, y) => {
    v === "userMessageReceived" && p ? p.add(y) : v === "aiMessageReceived" && i ? i.add(y) : v === "aiServerComponentStreamStarted" && a ? a.add(y) : v === "aiServerComponentStreamed" && u ? u.add(y) : v === "aiMessageStreamStarted" && l ? l.add(y) : v === "aiMessageStreamed" && c ? c.add(y) : v === "aiChunkReceived" && d ? d.add(y) : v === "complete" && m ? m.add(y) : v === "error" && h && h.add(y);
  }, removeListener: (v, y) => {
    v !== "userMessageReceived" ? v !== "aiMessageReceived" ? v !== "aiMessageStreamStarted" ? v !== "aiMessageStreamed" ? v !== "aiChunkReceived" ? v !== "complete" ? v !== "error" || (h == null || h.delete(y)) : m == null || m.delete(y) : d == null || d.delete(y) : c == null || c.delete(y) : l == null || l.delete(y) : i == null || i.delete(y) : p == null || p.delete(y);
  }, destroy: () => C() } };
}, ya = { "data-transfer-mode-not-supported": "Requested data transfer mode is not supported", "no-data-transfer-mode-supported": "Adapter does not support any valid data transfer modes", "connection-error": "Connection error", "invalid-credentials": "Invalid credentials", "invalid-api-key": "Invalid API key", "http-server-side-error": "HTTP server side error", "http-client-side-error": "HTTP client side error", "failed-to-load-content": "Failed to load content", "failed-to-stream-content": "Failed to stream content", "failed-to-stream-server-component": "Failed to stream server component", "failed-to-render-content": "Failed to display content" }, ur = (r, e) => r !== void 0 && r.length > 0 || e !== void 0 && e > 0 ? "active" : "starting", ps = "nlux-comp-welcomeMessage-text", Oo = (r, e) => {
  const t = r.querySelector(`.${ps}`);
  if (e !== "" && e !== void 0) if (t) t.textContent = e;
  else {
    const n = document.createElement("div");
    n.classList.add(ps), n.textContent = e, r.appendChild(n);
  }
  else t == null || t.remove();
}, Lo = "nlux-comp-welcomeMessage-personaName", dr = (r) => {
  const e = document.createElement("div");
  e.classList.add("nlux-comp-welcomeMessage");
  const t = Lr({ name: r.name, avatar: r.avatar });
  e.append(t);
  const n = document.createElement("div"), s = document.createTextNode(r.name);
  return n.append(s), n.classList.add(Lo), e.append(n), Oo(e, r.message), e;
}, hs = () => dr({ name: "", avatar: "data:image/png;base64,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" });
var xa = Object.defineProperty, ba = Object.getOwnPropertyDescriptor, ms = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? ba(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && xa(e, t, o), o;
};
let gn = class extends Fe {
  constructor(r, e) {
    super(r, e), this.updateConversationStarters = (t) => {
    };
  }
  conversationStarterClicked(r) {
    this.getProp("onConversationStarterSelected")(r);
  }
};
ms([qe("conversation-starter-selected")], gn.prototype, "conversationStarterClicked", 1), gn = ms([et("conversationStarters", ({ appendToRoot: r, props: e, compEvent: t }) => {
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
    const [a, u] = wn(n, `:scope > :nth-child(${i + 1})`).on("click", () => {
      t("conversation-starter-selected")(o);
    }).get();
    s.push(u);
  }), { elements: {}, actions: {}, onDestroy: () => {
    s.forEach((o) => o()), s = [], n.remove();
  } };
}, ({}) => {
})], gn);
let pr = class extends Fe {
  constructor(r, e) {
    super(r, e), this.setConversationStarters(e.conversationStarters);
  }
  setConversationStarters(r) {
    var e;
    if (r || this.conversationStartersComp) {
      if (r && !this.conversationStartersComp) {
        const t = this.getProp("onConversationStarterSelected");
        return this.conversationStartersComp = vt(gn).withContext(this.context).withProps({ conversationStarters: r, onConversationStarterSelected: t }).create(), void this.addSubComponent(this.conversationStartersComp.id, this.conversationStartersComp, "conversationStartersContainer");
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
pr = ((r, e, t, n) => {
  for (var s, o = e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = s(o) || o);
  return o;
})([et("launchPad", ({ appendToRoot: r, props: e }) => {
  const t = { assistantPersona: e.assistantPersona, conversationStarters: e.conversationStarters, showGreeting: e.showGreeting !== !1 };
  let n;
  if (t.showGreeting) if (e.assistantPersona) {
    const i = e.assistantPersona;
    n = dr({ name: i.name, avatar: i.avatar, message: i.tagline });
  } else n = hs();
  n && (r(n), t.greetingElement = n);
  const s = document.createElement("div");
  s.classList.add("nlux-conversationStarters-container"), r(s);
  const o = (i = !0) => {
    t.showGreeting = i, t.greetingElement && (t.greetingElement.remove(), t.greetingElement = void 0), i && (t.greetingElement = t.assistantPersona ? dr({ name: t.assistantPersona.name, avatar: t.assistantPersona.avatar, message: t.assistantPersona.tagline }) : hs(), t.greetingElement && s.insertAdjacentElement("beforebegin", t.greetingElement));
  };
  return { elements: { conversationStartersContainer: s }, actions: { resetGreeting: (i = !0) => {
    o(i);
  }, updateAssistantPersona: (i) => {
    const a = t.assistantPersona;
    t.assistantPersona = i, (a || i) && t.showGreeting && (i && a ? ((u, l, c) => {
      if (l.message !== c.message || l.name !== c.name || l.avatar !== c.avatar) {
        if (l.message !== c.message && Oo(u, c.message), l.name !== c.name) {
          const d = u.querySelector(`.${Lo}`);
          if (d) {
            const p = document.createTextNode(c.name);
            d.replaceChildren(p);
          }
        }
        if (l.avatar !== c.avatar || l.name !== c.name) {
          const d = u.querySelector(`.${Or}`);
          d && Po(d, { name: l.name, avatar: l.avatar }, { name: c.name, avatar: c.avatar });
        }
      }
    })(t.greetingElement, { name: a == null ? void 0 : a.name, avatar: a == null ? void 0 : a.avatar, message: a == null ? void 0 : a.tagline }, { name: i.name, avatar: i.avatar, message: i.tagline }) : o());
  } }, onDestroy: () => {
    var i;
    (i = t.greetingElement) == null || i.remove(), s.remove();
  } };
}, ({}) => {
})], pr);
var wa = Object.defineProperty, ka = Object.getOwnPropertyDescriptor, qn = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? ka(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && wa(e, t, o), o;
};
let on = class extends Fe {
  constructor(r, { conversationLayout: e, autoScroll: t, streamingAnimationSpeed: n, visible: s = !0, composer: o, assistantPersona: i, userPersona: a, showGreeting: u, conversationStarters: l, initialConversationContent: c, syntaxHighlighter: d, htmlSanitizer: p, markdownLinkTarget: m, showCodeBlockCopyButton: h, skipStreamingAnimation: f }) {
    if (super(r, { conversationLayout: e, visible: s, autoScroll: t, streamingAnimationSpeed: n, assistantPersona: i, userPersona: a, conversationStarters: l, showGreeting: u, initialConversationContent: c, composer: o, syntaxHighlighter: d, htmlSanitizer: p, markdownLinkTarget: m, showCodeBlockCopyButton: h, skipStreamingAnimation: f }), this.prompt = "", this.handleConversationStarterClick = (k) => {
      this.composer.setDomProps({ status: "submitting-conversation-starter" }), this.composer.handleTextChange(k.prompt), this.composer.handleSendButtonClick();
    }, this.handleSegmentCountChange = (k) => {
      var v, y;
      if (this.segmentCount === k) return;
      this.segmentCount = k;
      const C = ur(this.getProp("initialConversationContent") || void 0, this.segmentCount);
      this.chatRoomStatus !== C && (this.chatRoomStatus = C, this.executeDomAction("updateChatRoomStatus", this.chatRoomStatus), this.chatRoomStatus === "active" ? (v = this.launchPad) != null && v.id && (this.removeSubComponent((y = this.launchPad) == null ? void 0 : y.id), this.launchPad = void 0) : this.addLaunchPad(this.getProp("showGreeting") ?? !0, this.getProp("assistantPersona"), this.getProp("conversationStarters"), this.handleConversationStarterClick));
    }, this.segmentCount = c && c.length > 0 ? 1 : 0, this.chatRoomStatus = ur(c, this.segmentCount), this.chatRoomStatus === "starting" && this.addLaunchPad(u, i, l, this.handleConversationStarterClick), this.addConversation(i, a, c), this.addComposer(o == null ? void 0 : o.placeholder, o == null ? void 0 : o.autoFocus, o == null ? void 0 : o.disableSubmitButton, o == null ? void 0 : o.submitShortcut), !this.conversation || !this.composer) throw new Error("Chat room not initialized — An error occurred while initializing key components.");
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
    We(() => {
      var e, t;
      const r = (t = (e = this.renderedDom) == null ? void 0 : e.elements) == null ? void 0 : t.conversationContainer;
      if (r instanceof HTMLElement) {
        this.autoScrollController = ca(r, this.getProp("autoScroll") ?? !0);
        let n = 0;
        const s = 20, o = () => {
          r.scrollHeight > r.clientHeight && (r.scrollTo({ behavior: "smooth", top: 5e4 }), clearInterval(i));
        }, i = setInterval(() => {
          n >= s ? clearInterval(i) : (o(), n++);
        }, 10);
      }
      this.context.emit("ready", { aiChatProps: la(this.context.aiChatProps) });
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
    this.launchPad = vt(pr).withContext(this.context).withProps({ showGreeting: r, assistantPersona: e, conversationStarters: t, onConversationStarterSelected: n }).create(), this.addSubComponent(this.launchPad.id, this.launchPad, "launchPadContainer");
  }
  addConversation(r, e, t) {
    this.conversation = vt(cr).withContext(this.context).withProps({ assistantPersona: r, userPersona: e, messages: t, conversationLayout: this.getProp("conversationLayout"), markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), onSegmentCountChange: this.handleSegmentCountChange }).create(), this.addSubComponent(this.conversation.id, this.conversation, "conversationContainer");
  }
  addComposer(r, e, t, n) {
    this.composer = vt(ot).withContext(this.context).withProps({ props: { domCompProps: { status: "typing", placeholder: r, autoFocus: e, disableSubmitButton: t, submitShortcut: n } }, eventListeners: { onTextUpdated: (s) => this.handleComposerTextChange(s), onSubmit: () => this.handleComposerSubmit() } }).create(), this.addSubComponent(this.composer.id, this.composer, "composerContainer");
  }
  handleComposerSubmit() {
    const r = this.props.composer;
    (({ context: e, composerInstance: t, conversation: n, autoScrollController: s, messageToSend: o, resetComposer: i, setComposerAsWaiting: a }) => () => {
      var l, c;
      const u = n.addChatSegment();
      try {
        const d = t.getProp("domCompProps");
        t.setDomProps({ ...d, status: "submitting-prompt" });
        const p = { aiChatProps: e.aiChatProps, conversationHistory: n.getConversationContentForAdapter((c = (l = e.aiChatProps) == null ? void 0 : l.conversationOptions) == null ? void 0 : c.historyPayloadSize) }, m = va(o, e.adapter, p);
        m.observable.on("error", (h, f) => {
          n.removeChatSegment(u), s == null || s.handleChatSegmentRemoved(u), i(!1), e.exception(h), e.emit("error", { errorId: h, message: ya[h], errorObject: f });
        }), m.observable.on("userMessageReceived", (h) => {
          n.addChatItem(u, h), e.emit("messageSent", { uid: h.uid, message: h.content }), We(() => {
            if (s) {
              const f = n.getChatSegmentContainer(u);
              f && s.handleNewChatSegmentAdded(u, f);
            }
          });
        }), m.dataTransferMode === "batch" ? m.observable.on("aiMessageReceived", (h) => {
          const f = typeof h.content == "string", k = { ...h, content: f ? "" : h.content };
          n.addChatItem(u, k), f && n.addChunk(u, k.uid, h.content, h.serverResponse), n.completeChatSegment(u), e.emit("messageReceived", { uid: h.uid, message: h.content }), i(!0);
        }) : (m.observable.on("aiMessageStreamStarted", (h) => {
          n.addChatItem(u, h), a(), e.emit("messageStreamStarted", { uid: h.uid });
        }), m.observable.on("aiChunkReceived", (h) => {
          const { messageId: f, chunk: k, serverResponse: C } = h;
          n.addChunk(u, f, k, C);
        }), m.observable.on("aiMessageStreamed", (h) => {
          h.status === "complete" && e.emit("messageReceived", { uid: h.uid, message: h.content });
        }), m.observable.on("aiServerComponentStreamStarted", (h) => {
          n.addChatItem(u, h), a(), e.emit("messageStreamStarted", { uid: h.uid });
        }), m.observable.on("aiServerComponentStreamed", (h) => {
          h.status === "complete" && e.emit("messageReceived", { uid: h.uid, message: h.content });
        }), m.observable.on("complete", () => {
          n.completeChatSegment(u), i(!1);
        }));
      } catch (d) {
        Re(d), i(!1);
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
qn([qe("conversation-container-clicked")], on.prototype, "messagesContainerClicked", 1), qn([qe("chat-room-ready")], on.prototype, "onChatRoomReady", 1), on = qn([et("chatRoom", ({ appendToRoot: r, compEvent: e, props: t }) => {
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
  u.classList.add("nlux-chatRoom-container"), l(ur(t.initialConversationContent)), u.append(i), u.style.display = a ? "" : "none";
  const [c, d] = wn(u, ":scope > .nlux-conversation-container").on("click", e("conversation-container-clicked")).get();
  return r(u), e("chat-room-ready")(), { elements: { composerContainer: s, conversationContainer: n, launchPadContainer: o }, actions: { updateChatRoomStatus: (p) => {
    l(p);
  } }, onDestroy: () => {
    d();
  } };
}, ({ propName: r, newValue: e, dom: { elements: t } }) => {
})], on);
const Ca = (r) => {
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
let fs = class extends Fe {
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
fs = ((r, e, t, n) => {
  for (var s, o = e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = s(o) || o);
  return o;
})([et("exceptionsBox", ({ props: r, appendToRoot: e }) => {
  const t = (() => {
    const s = document.createElement("div");
    return s.classList.add("nlux-comp-exceptionBox"), s;
  })();
  e(t);
  let n = Ca(t);
  return { elements: { root: t }, actions: { displayException: (s) => {
    n == null || n.displayException(s);
  } }, onDestroy: () => {
    n == null || n.destroy(), t.remove(), n = void 0;
  } };
}, () => {
})], fs);
const Sa = (r) => {
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
}, Ze = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (r) => {
  const e = 16 * Math.random() | 0;
  return (r == "x" ? e : 3 & e | 8).toString(16);
}), Le = (r) => {
  typeof r != "string" ? r && typeof r.toString == "function" ? console.warn(`[nlux] ${r.toString()}`) : console.warn("[nlux]") : console.warn(`[nlux] ${r}`);
}, gs = [], kn = (r) => {
  gs.includes(r) || (gs.push(r), Le(r));
}, hr = { received: "nlux_msg_received", sent: "nlux_msg_sent" }, mr = { streaming: "nlux_msg_streaming", complete: "nlux_msg_complete" }, vs = (r) => {
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
}, Do = (r) => {
  const e = "nlux-comp-copyButton";
  r instanceof HTMLButtonElement && r.classList.contains(e) ? vs(r) : r.querySelectorAll(`.${e}`).forEach(vs);
};
function Aa() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
let lt = { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
function ys(r) {
  lt = r;
}
var Ea = Object.defineProperty, Bo = (r, e, t) => ((n, s, o) => s in n ? Ea(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class Ht {
  constructor(e) {
    Bo(this, "options"), this.options = e || lt;
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
Bo(Ht, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]));
const jo = /[&<>"']/, Ta = new RegExp(jo.source, "g"), Mo = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Pa = new RegExp(Mo.source, "g"), Ia = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, xs = (r) => Ia[r];
function Be(r, e) {
  if (e) {
    if (jo.test(r)) return r.replace(Ta, xs);
  } else if (Mo.test(r)) return r.replace(Pa, xs);
  return r;
}
const Ra = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function Oa(r) {
  return r.replace(Ra, (e, t) => (t = t.toLowerCase()) === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "");
}
const La = /(^|[^\[])\^/g;
function de(r, e) {
  let t = typeof r == "string" ? r : r.source;
  e = e || "";
  const n = { replace: (s, o) => {
    let i = typeof o == "string" ? o : o.source;
    return i = i.replace(La, "$1"), t = t.replace(s, i), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
function bs(r) {
  try {
    r = encodeURI(r).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return r;
}
const $t = { exec: () => null };
function ws(r, e) {
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
function an(r, e, t) {
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
const Xt = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, zo = /(?:[*+-]|\d{1,9}[.)])/, Fo = de(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, zo).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Dr = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Br = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Da = de(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Br).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Ba = de(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, zo).getRegex(), Dn = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", jr = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, ja = de("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", jr).replace("tag", Dn).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ks = de(Dr).replace("hr", Xt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Dn).getRegex(), Mr = { blockquote: de(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ks).getRegex(), code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, def: Da, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hr: Xt, html: ja, lheading: Fo, list: Ba, newline: /^(?: *(?:\n|$))+/, paragraph: ks, table: $t, text: /^[^\n]+/ }, Cs = de("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Xt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Dn).getRegex(), Ma = { ...Mr, table: Cs, paragraph: de(Dr).replace("hr", Xt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Cs).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Dn).getRegex() }, za = { ...Mr, html: de(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", jr).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: $t, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: de(Dr).replace("hr", Xt).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Fo).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Ho = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, $o = /^( {2,}|\\)\n(?!\s*$)/, Zt = "\\p{P}\\p{S}", Fa = de(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Zt).getRegex(), Ha = de(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Zt).getRegex(), $a = de("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Zt).getRegex(), Na = de("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Zt).getRegex(), qa = de(/\\([punct])/, "gu").replace(/punct/g, Zt).getRegex(), _a = de(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ua = de(jr).replace("(?:-->|$)", "-->").getRegex(), Ya = de("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ua).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Cn = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Wa = de(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Cn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ss = de(/^!?\[(label)\]\[(ref)\]/).replace("label", Cn).replace("ref", Br).getRegex(), As = de(/^!?\[(ref)\](?:\[\])?/).replace("ref", Br).getRegex(), zr = { _backpedal: $t, anyPunctuation: qa, autolink: _a, blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, br: $o, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, del: $t, emStrongLDelim: Ha, emStrongRDelimAst: $a, emStrongRDelimUnd: Na, escape: Ho, link: Wa, nolink: As, punctuation: Fa, reflink: Ss, reflinkSearch: de("reflink|nolink(?!\\()", "g").replace("reflink", Ss).replace("nolink", As).getRegex(), tag: Ya, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, url: $t }, Qa = { ...zr, link: de(/^!?\[(label)\]\((.*?)\)/).replace("label", Cn).getRegex(), reflink: de(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Cn).getRegex() }, fr = { ...zr, escape: de(Ho).replace("])", "~|])").getRegex(), url: de(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, Xa = { ...fr, br: de($o).replace("{2,}", "*").getRegex(), text: de(fr.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, cn = { normal: Mr, gfm: Ma, pedantic: za }, Dt = { normal: zr, gfm: fr, breaks: Xa, pedantic: Qa };
var Za = Object.defineProperty, _n = (r, e, t) => ((n, s, o) => s in n ? Za(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
function Es(r, e, t, n) {
  const s = e.href, o = e.title ? Be(e.title) : null, i = r[1].replace(/\\([\[\]])/g, "$1");
  if (r[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const a = { type: "link", raw: t, href: s, title: o, text: i, tokens: n.inlineTokens(i) };
    return n.state.inLink = !1, a;
  }
  return { type: "image", raw: t, href: s, title: o, text: Be(i) };
}
class Sn {
  constructor(e) {
    _n(this, "lexer"), _n(this, "options"), _n(this, "rules"), this.options = e || lt;
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, s;
      return t[2] === "@" ? (n = Be(t[1]), s = "mailto:" + n) : (n = Be(t[1]), s = n), { type: "link", raw: t[0], text: n, href: s, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      n = an(n.replace(/^ *>[ \t]?/gm, ""), `
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
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : an(n, `
`) };
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(n), o = /^ /.test(n) && / $/.test(n);
      return s && o && (n = n.substring(1, n.length - 1)), n = Be(n, !0), { type: "codespan", raw: t[0], text: n };
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
          const h = p.slice(1, -1);
          return { type: "em", raw: p, text: h, tokens: this.lexer.inlineTokens(h) };
        }
        const m = p.slice(2, -2);
        return { type: "strong", raw: p, text: m, tokens: this.lexer.inlineTokens(m) };
      }
    }
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: Be(t[1]) };
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
        const s = an(n, "#");
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
      return n = this.lexer.state.inRawBlock ? t[0] : Be(t[0]), { type: "text", raw: t[0], text: n };
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
        const i = an(n.slice(0, -1), "\\");
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
      return s = s.trim(), /^</.test(s) && (s = this.options.pedantic && !/>$/.test(n) ? s.slice(1) : s.slice(1, -1)), Es(t, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer);
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
`, 1)[0].replace(/^\t+/, (C) => " ".repeat(3 * C.length)), p = e.split(`
`, 1)[0], m = 0;
        this.options.pedantic ? (m = 2, u = d.trimStart()) : (m = t[2].search(/[^ ]/), m = m > 4 ? 1 : m, u = d.slice(m), m += t[1].length);
        let h = !1;
        if (!d && /^ *$/.test(p) && (a += p + `
`, e = e.substring(p.length + 1), c = !0), !c) {
          const C = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), v = new RegExp(`^ {0,${Math.min(3, m - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), y = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:\`\`\`|~~~)`), A = new RegExp(`^ {0,${Math.min(3, m - 1)}}#`);
          for (; e; ) {
            const x = e.split(`
`, 1)[0];
            if (p = x, this.options.pedantic && (p = p.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), y.test(p) || A.test(p) || C.test(p) || v.test(e)) break;
            if (p.search(/[^ ]/) >= m || !p.trim()) u += `
` + p.slice(m);
            else {
              if (h || d.search(/[^ ]/) >= 4 || y.test(d) || A.test(d) || v.test(d)) break;
              u += `
` + p;
            }
            h || p.trim() || (h = !0), a += x + `
`, e = e.substring(x.length + 1), d = p.slice(m);
          }
        }
        o.loose || (l ? o.loose = !0 : /\n *\n *$/.test(a) && (l = !0));
        let f, k = null;
        this.options.gfm && (k = /^\[[ xX]\] /.exec(u), k && (f = k[0] !== "[ ] ", u = u.replace(/^\[[ xX]\] +/, ""))), o.items.push({ type: "list_item", raw: a, task: !!k, checked: f, loose: !1, text: u, tokens: [] }), o.raw += a;
      }
      o.items[o.items.length - 1].raw = a.trimEnd(), o.items[o.items.length - 1].text = u.trimEnd(), o.raw = o.raw.trimEnd();
      for (let c = 0; c < o.items.length; c++) if (this.lexer.state.top = !1, o.items[c].tokens = this.lexer.blockTokens(o.items[c].text, []), !o.loose) {
        const d = o.items[c].tokens.filter((m) => m.type === "space"), p = d.length > 0 && d.some((m) => /\n.*\n/.test(m.raw));
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
      return Es(n, s, n[0], this.lexer);
    }
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2])) return;
    const n = ws(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), o = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], i = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === s.length) {
      for (const a of s) /^ *-+: *$/.test(a) ? i.align.push("right") : /^ *:-+: *$/.test(a) ? i.align.push("center") : /^ *:-+ *$/.test(a) ? i.align.push("left") : i.align.push(null);
      for (const a of n) i.header.push({ text: a, tokens: this.lexer.inline(a) });
      for (const a of o) i.rows.push(ws(a, i.header.length).map((u) => ({ text: u, tokens: this.lexer.inline(u) })));
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
      if (t[2] === "@") s = Be(t[0]), o = "mailto:" + s;
      else {
        let i;
        do
          i = t[0], t[0] = ((n = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : n[0]) ?? "";
        while (i !== t[0]);
        s = Be(t[0]), o = t[1] === "www." ? "http://" + t[0] : t[0];
      }
      return { type: "link", raw: t[0], text: s, href: o, tokens: [{ type: "text", raw: s, text: s }] };
    }
  }
}
var Ka = Object.defineProperty, Bt = (r, e, t) => ((n, s, o) => s in n ? Ka(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class Ke {
  constructor(e) {
    Bt(this, "options"), Bt(this, "state"), Bt(this, "tokens"), Bt(this, "inlineQueue"), Bt(this, "tokenizer"), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || lt, this.options.tokenizer = this.options.tokenizer || new Sn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    const t = { block: cn.normal, inline: Dt.normal };
    this.options.pedantic ? (t.block = cn.pedantic, t.inline = Dt.pedantic) : this.options.gfm && (t.block = cn.gfm, this.options.breaks ? t.inline = Dt.breaks : t.inline = Dt.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: cn, inline: Dt };
  }
  static lex(e, t) {
    return new Ke(t).lex(e);
  }
  static lexInline(e, t) {
    return new Ke(t).inlineTokens(e);
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
        this.options.extensions.startInline.forEach((m) => {
          p = m.call({ lexer: this }, d), typeof p == "number" && p >= 0 && (c = Math.min(c, p));
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
var Ga = Object.defineProperty, Ja = (r, e, t) => ((n, s, o) => s in n ? Ga(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, e + "", t);
class An {
  constructor(e) {
    Ja(this, "options"), this.options = e || lt;
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
`, s ? '<pre><code class="language-' + Be(s) + '">' + (n ? e : Be(e, !0)) + `</code></pre>
` : "<pre><code>" + (n ? e : Be(e, !0)) + `</code></pre>
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
    const s = bs(e);
    if (s === null) return n;
    let o = `<img src="${e = s}" alt="${n}"`;
    return t && (o += ` title="${t}"`), o += ">", o;
  }
  link(e, t, n) {
    const s = bs(e);
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
class Fr {
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
var Va = Object.defineProperty, Un = (r, e, t) => ((n, s, o) => s in n ? Va(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class Ge {
  constructor(e) {
    Un(this, "options"), Un(this, "renderer"), Un(this, "textRenderer"), this.options = e || lt, this.options.renderer = this.options.renderer || new An(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Fr();
  }
  static parse(e, t) {
    return new Ge(t).parse(e);
  }
  static parseInline(e, t) {
    return new Ge(t).parseInline(e);
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
          n += this.renderer.heading(this.parseInline(i.tokens), i.depth, Oa(this.parseInline(i.tokens, this.textRenderer)));
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
            const p = i.items[d], m = p.checked, h = p.task;
            let f = "";
            if (p.task) {
              const k = this.renderer.checkbox(!!m);
              l ? p.tokens.length > 0 && p.tokens[0].type === "paragraph" ? (p.tokens[0].text = k + " " + p.tokens[0].text, p.tokens[0].tokens && p.tokens[0].tokens.length > 0 && p.tokens[0].tokens[0].type === "text" && (p.tokens[0].tokens[0].text = k + " " + p.tokens[0].tokens[0].text)) : p.tokens.unshift({ type: "text", text: k + " " }) : f += k + " ";
            }
            f += this.parse(p.tokens, l), c += this.renderer.listitem(f, h, !!m);
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
var Nt, Ts, gr, ec = Object.defineProperty, No = (r) => {
  throw TypeError(r);
}, Ue = (r, e, t) => ((n, s, o) => s in n ? ec(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t), vr = (r, e, t) => (((n, s, o) => {
  s.has(n) || No("Cannot " + o);
})(r, e, "access private method"), t);
Nt = /* @__PURE__ */ new WeakSet(), Ts = function(r, e) {
  return (t) => {
    if (t.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
      const n = "<p>An error occurred:</p><pre>" + Be(t.message + "", !0) + "</pre>";
      return e ? Promise.resolve(n) : n;
    }
    if (e) return Promise.reject(t);
    throw t;
  };
}, gr = function(r, e) {
  return (t, n) => {
    const s = { ...n }, o = { ...this.defaults, ...s };
    this.defaults.async === !0 && s.async === !1 && (o.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), o.async = !0);
    const i = vr(this, Nt, Ts).call(this, !!o.silent, !!o.async);
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
const it = new class {
  constructor(...r) {
    var e, t, n;
    e = this, (t = Nt).has(e) ? No("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ue(this, "Hooks", Ht), Ue(this, "Lexer", Ke), Ue(this, "Parser", Ge), Ue(this, "Renderer", An), Ue(this, "TextRenderer", Fr), Ue(this, "Tokenizer", Sn), Ue(this, "defaults", { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null }), Ue(this, "options", this.setOptions), Ue(this, "parse", vr(this, Nt, gr).call(this, Ke.lex, Ge.parse)), Ue(this, "parseInline", vr(this, Nt, gr).call(this, Ke.lexInline, Ge.parseInline)), this.use(...r);
  }
  lexer(r, e) {
    return Ke.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return Ge.parse(r, e ?? this.defaults);
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
        const s = this.defaults.renderer || new An(this.defaults);
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
        const s = this.defaults.tokenizer || new Sn(this.defaults);
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
        const s = this.defaults.hooks || new Ht();
        for (const o in t.hooks) {
          if (!(o in s)) throw new Error(`hook '${o}' does not exist`);
          if (o === "options") continue;
          const i = o, a = t.hooks[i], u = s[i];
          Ht.passThroughHooks.has(o) ? s[i] = (l) => {
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
function ge(r, e) {
  return it.parse(r, e);
}
ge.options = ge.setOptions = function(r) {
  return it.setOptions(r), ge.defaults = it.defaults, ys(ge.defaults), ge;
}, ge.getDefaults = Aa, ge.defaults = lt, ge.use = function(...r) {
  return it.use(...r), ge.defaults = it.defaults, ys(ge.defaults), ge;
}, ge.walkTokens = function(r, e) {
  return it.walkTokens(r, e);
}, ge.parseInline = it.parseInline, ge.Parser = Ge, ge.parser = Ge.parse, ge.Renderer = An, ge.TextRenderer = Fr, ge.Lexer = Ke, ge.lexer = Ke.lex, ge.Tokenizer = Sn, ge.Hooks = Ht, ge.parse = ge;
const qo = (r, e) => {
  const { showCodeBlockCopyButton: t, markdownLinkTarget: n, syntaxHighlighter: s, htmlSanitizer: o } = e || {}, i = ge(r, { async: !1, breaks: !0 });
  if (typeof i != "string") throw new Error("Markdown parsing failed");
  const a = document.createElement("div");
  return a.innerHTML = o ? o(i) : i, a.querySelectorAll("pre").forEach((u) => {
    const l = document.createElement("div");
    l.className = "code-block";
    const c = u.querySelector("code");
    if (!c) {
      const h = u.innerHTML;
      return l.innerHTML = o ? o(h) : h, void u.replaceWith(l);
    }
    let d;
    for (let h = 0; h < c.classList.length; h++) {
      const f = c.classList[h];
      if (f.startsWith("language-")) {
        d = f.slice(9);
        break;
      }
    }
    const p = document.createElement("pre"), m = "<div>" + c.innerHTML + "</div>";
    if (p.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(m) : m, d && (p.setAttribute("data-language", d), s)) {
      const h = "<div>" + s.createHighlighter()(c.textContent || "", d) + "</div>";
      p.innerHTML = o ? o(h) : h, p.className = "highlighter-dark";
    }
    ((h) => {
      h.replaceChildren();
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
}, _o = "nlux-comp-message", Ps = { received: "nlux-comp-chatItem--received", sent: "nlux-comp-chatItem--sent" }, tc = "nlux-comp-chatItem--bubblesLayout", nc = "nlux-comp-chatItem--listLayout", rc = (r) => {
  const { markdownOptions: e } = r, t = me(null), n = K(() => r.content ? qo(r.content, { syntaxHighlighter: e == null ? void 0 : e.syntaxHighlighter, htmlSanitizer: e == null ? void 0 : e.htmlSanitizer, markdownLinkTarget: e == null ? void 0 : e.markdownLinkTarget, showCodeBlockCopyButton: e == null ? void 0 : e.showCodeBlockCopyButton }) : "", [r.content, e == null ? void 0 : e.markdownLinkTarget, e == null ? void 0 : e.syntaxHighlighter, e == null ? void 0 : e.htmlSanitizer, e == null ? void 0 : e.showCodeBlockCopyButton]);
  le(() => {
    t.current && (e == null ? void 0 : e.showCodeBlockCopyButton) !== !1 && Do(t.current);
  }, [n, t.current, e == null ? void 0 : e.showCodeBlockCopyButton]);
  const s = K(() => e != null && e.htmlSanitizer ? e.htmlSanitizer(n) : n, [n, e == null ? void 0 : e.htmlSanitizer]);
  return w.jsx(Uo, { children: w.jsx("div", { className: "nlux-markdownStream-root", children: w.jsx("div", { className: "nlux-markdown-container", ref: t, dangerouslySetInnerHTML: { __html: s } }) }) });
};
class Uo extends bi {
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
const Is = (r) => w.jsx(Uo, { children: w.jsx(rc, { ...r }) }), sc = (r, e) => {
  let t = !1;
  const { onComplete: n } = e || {}, s = [], o = (e != null && e.skipStreamingAnimation ? "timeout" : "animationFrame") == "timeout" ? (d) => setTimeout(d, 0) : (d) => requestAnimationFrame(d), i = document.createElement("div");
  i.classList.add("md-in-progress"), r.append(i);
  const a = () => {
    for (; i.firstChild; ) {
      const d = i.firstChild;
      d instanceof HTMLElement && Do(d), i.before(d);
    }
  }, u = !(e != null && e.skipStreamingAnimation) && (e != null && e.streamingAnimationSpeed) && e.streamingAnimationSpeed >= 0 ? e.streamingAnimationSpeed : e != null && e.skipStreamingAnimation ? 0 : 8, l = { timeSinceLastProcessing: (/* @__PURE__ */ new Date()).getTime(), currentMarkdown: "", previousHtml: void 0 };
  let c = setInterval(() => {
    const d = (/* @__PURE__ */ new Date()).getTime(), p = (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) !== "never";
    if (s.length === 0 && p) {
      const h = typeof (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) == "number" ? e.waitTimeBeforeStreamCompletion : 2e3;
      return void ((t || d - l.timeSinceLastProcessing > h) && (t = !0, c && (clearInterval(c), c = void 0), a(), i.remove(), n == null ? void 0 : n()));
    }
    l.timeSinceLastProcessing = d;
    const m = s.shift();
    m !== void 0 && typeof m == "string" && o(() => {
      const h = l.currentMarkdown + m, f = qo(h, e).trim();
      if (typeof f != "string") return l.currentMarkdown = l.currentMarkdown.slice(0, -m.length), void Le("Markdown parsing failed");
      if (l.previousHtml && f.length > l.previousHtml.length && f.startsWith(l.previousHtml)) {
        a();
        const k = f.slice(l.previousHtml.length).trim();
        i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(k) : k, l.currentMarkdown = m, l.previousHtml = void 0;
      } else i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(f) : f, l.currentMarkdown = h, l.previousHtml = f;
    });
  }, u);
  return { next: (d) => {
    if (t) Le("Stream is already complete. No more chunks can be added");
    else for (const p of d) s.push(p);
  }, complete: () => {
    s.push(`
`), t = !0;
  }, error: () => {
    t = !0;
  } };
}, oc = function(r, e) {
  const { uid: t, status: n, responseRenderer: s, markdownOptions: o, initialMarkdownMessage: i, markdownContainersController: a } = r, [u, l] = Ie([]), c = me(null), d = me(null), p = me(null), m = me(null), [h, f] = Ie();
  le(() => {
    c.current !== d.current && (d.current = c.current, f(c.current || void 0));
  }), le(() => {
    if (h) {
      const C = a.getStreamingDomElement(t);
      h.append(C);
    }
  }, [h]), le(() => {
    m.current = (C) => {
      l((v) => [...v, C]);
    };
  }, [l]), le(() => {
    const C = a.getStreamingDomElement(t);
    return p.current = sc(C, { syntaxHighlighter: o == null ? void 0 : o.syntaxHighlighter, htmlSanitizer: o == null ? void 0 : o.htmlSanitizer, markdownLinkTarget: o == null ? void 0 : o.markdownLinkTarget, showCodeBlockCopyButton: o == null ? void 0 : o.showCodeBlockCopyButton, skipStreamingAnimation: o == null ? void 0 : o.skipStreamingAnimation, streamingAnimationSpeed: o == null ? void 0 : o.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: o == null ? void 0 : o.waitTimeBeforeStreamCompletion }), i && p.current.next(i), () => {
      a.deleteStreamingDomElement(t);
    };
  }, []), le(() => () => {
    d.current = null, p.current = null, m.current = null, f(void 0);
  }, []), Yt(e, () => ({ streamChunk: (C) => {
    var v, y;
    m.current && ((v = m.current) == null || v.call(m, C)), typeof C == "string" && ((y = p.current) == null || y.next(C));
  }, completeStream: () => {
    var C;
    (C = p.current) == null || C.complete();
  } }), []);
  const k = s || void 0;
  return w.jsxs("div", { className: `${_o} ${mr[n]} ${hr.received}`, children: [k && w.jsx(k, { uid: t, status: n, containerRef: c, content: u, contentType: "text", serverResponse: [], dataTransferMode: "stream" }), !k && w.jsx("div", { className: "nlux-markdownStream-root", ref: c })] });
}, Yo = (r) => {
  const e = typeof r.avatar == "string", t = !e && oo(r.avatar);
  return w.jsxs("div", { className: "nlux-comp-avatar", children: [t && r.avatar, !t && e && w.jsx("div", { className: "nlux-comp-avatarContainer", children: r.avatar && w.jsx("div", { className: "nlux-comp-avatarPicture", style: { backgroundImage: `url("${encodeURI(r.avatar)}")` } }) })] });
}, Yn = function(r) {
  const e = r.status ? mr[r.status] : mr.rendered, t = r.direction ? hr[r.direction] : hr.received, n = `${_o} ${e} ${t}`;
  if (r.status === "streaming" && r.contentType === "text") return w.jsx("div", { className: n });
  const s = typeof r.message == "function" ? w.jsx(r.message, {}) : r.message;
  return w.jsx("div", { className: n, children: s });
}, ic = function(r, e) {
  var h, f, k, C, v, y, A, x, I, q, M, O, z;
  const t = K(() => w.jsxs("div", { className: "nlux-comp-chatItem-participantInfo", children: [r.avatar !== void 0 && w.jsx(Yo, { name: r.name, avatar: r.avatar }), w.jsx("span", { className: "nlux-comp-chatItem-participantName", children: r.name })] }), [r.avatar, r.name]), n = me(null);
  Yt(e, () => ({ streamChunk: (W) => setTimeout(() => {
    var Q;
    return (Q = n == null ? void 0 : n.current) == null ? void 0 : Q.streamChunk(W);
  }), completeStream: () => setTimeout(() => {
    var W;
    return (W = n == null ? void 0 : n.current) == null ? void 0 : W.completeStream();
  }) }), []);
  const s = r.direction ? Ps[r.direction] : Ps.received, o = r.layout === "bubbles" ? tc : nc, i = `nlux-comp-chatItem ${s} ${o} ${o}`, a = K(() => function(W, Q) {
    const { uid: X, status: U, dataTransferMode: V, contentType: re, fetchedContent: G, streamedContent: oe, streamedServerResponse: J, fetchedServerResponse: S, direction: R, messageOptions: L } = W, $ = { current: null };
    if ((L == null ? void 0 : L.responseRenderer) !== void 0) {
      if (V === "stream") {
        const F = { uid: X, status: U, dataTransferMode: V, contentType: re, content: oe ?? [], serverResponse: J ?? [], containerRef: $ };
        return () => {
          const Z = L.responseRenderer;
          return w.jsx(Z, { ...F });
        };
      }
      {
        const F = je.isValidElement(G), Z = { uid: X, status: "complete", dataTransferMode: V, contentType: re, content: G ? F ? G : [G] : [], serverResponse: S ? [S] : [] };
        return () => {
          const N = L.responseRenderer;
          return w.jsx(N, { ...Z });
        };
      }
    }
    if (R === "sent") {
      if (typeof G == "string") {
        const F = G;
        return () => w.jsx(w.Fragment, { children: F });
      }
      return () => "";
    }
    if (typeof G == "string") {
      const F = G;
      return () => w.jsx(Is, { messageUid: X, content: F, markdownOptions: { syntaxHighlighter: L == null ? void 0 : L.syntaxHighlighter, htmlSanitizer: L == null ? void 0 : L.htmlSanitizer, markdownLinkTarget: L == null ? void 0 : L.markdownLinkTarget, showCodeBlockCopyButton: L == null ? void 0 : L.showCodeBlockCopyButton, skipStreamingAnimation: L == null ? void 0 : L.skipStreamingAnimation } });
    }
    return je.isValidElement(G) ? () => w.jsx(w.Fragment, { children: G }) : () => "";
  }(r), [r.uid, r.status, r.dataTransferMode, r.fetchedContent, r.streamedContent, r.direction, (h = r.messageOptions) == null ? void 0 : h.responseRenderer, (f = r.messageOptions) == null ? void 0 : f.syntaxHighlighter, (k = r.messageOptions) == null ? void 0 : k.htmlSanitizer, (C = r.messageOptions) == null ? void 0 : C.markdownLinkTarget]), u = be(() => {
    var Q, X;
    if (((Q = r.messageOptions) == null ? void 0 : Q.promptRenderer) === void 0) return w.jsx(Is, { messageUid: r.uid, content: r.fetchedContent, markdownOptions: { htmlSanitizer: (X = r.messageOptions) == null ? void 0 : X.htmlSanitizer } });
    const W = r.messageOptions.promptRenderer;
    return w.jsx(W, { uid: r.uid, prompt: r.fetchedContent });
  }, [(v = r.messageOptions) == null ? void 0 : v.promptRenderer, r.fetchedContent, r.uid]), l = K(() => Ut(oc), []), c = r.contentType === "server-component", d = r.direction === "received", p = r.direction === "sent", m = r.dataTransferMode === "stream";
  return w.jsxs("div", { className: i, children: [t, d && m && !c && w.jsx(l, { uid: r.uid, status: r.status, ref: n, direction: r.direction, responseRenderer: (y = r.messageOptions) == null ? void 0 : y.responseRenderer, markdownContainersController: r.markdownContainersController, markdownOptions: { syntaxHighlighter: (A = r.messageOptions) == null ? void 0 : A.syntaxHighlighter, htmlSanitizer: (x = r.messageOptions) == null ? void 0 : x.htmlSanitizer, markdownLinkTarget: (I = r.messageOptions) == null ? void 0 : I.markdownLinkTarget, showCodeBlockCopyButton: (q = r.messageOptions) == null ? void 0 : q.showCodeBlockCopyButton, skipStreamingAnimation: (M = r.messageOptions) == null ? void 0 : M.skipStreamingAnimation, streamingAnimationSpeed: (O = r.messageOptions) == null ? void 0 : O.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: (z = r.messageOptions) == null ? void 0 : z.waitTimeBeforeStreamCompletion } }, "do-not-change"), d && m && c && w.jsx(Yn, { uid: r.uid, message: r.fetchedContent, status: r.status, contentType: "server-component", direction: r.direction }), d && !m && w.jsx(Yn, { uid: r.uid, message: a, status: r.status, contentType: "text", direction: r.direction }), p && w.jsx(Yn, { uid: r.uid, message: u, status: r.status, contentType: "text", direction: r.direction })] });
}, Rs = (r) => typeof r == "string" || typeof r == "number" || typeof r == "boolean" || r == null, ln = (r, e) => {
  var t, n;
  return r === "assistant" ? ((t = e == null ? void 0 : e.assistant) == null ? void 0 : t.name) ?? "Assistant" : r === "user" ? ((n = e == null ? void 0 : e.user) == null ? void 0 : n.name) ?? "User" : "";
}, un = (r, e) => {
  var t, n;
  return r === "assistant" ? (t = e == null ? void 0 : e.assistant) == null ? void 0 : t.avatar : r === "user" ? (n = e == null ? void 0 : e.user) == null ? void 0 : n.avatar : void 0;
}, ac = function(r, e) {
  const { chatSegment: t, containerRef: n } = r, [s, o] = Ie(!1), i = K(() => /* @__PURE__ */ new Map(), []), a = me(/* @__PURE__ */ new Map()), u = me(/* @__PURE__ */ new Map()), l = K(() => /* @__PURE__ */ new Map(), []);
  le(() => {
    if (t.items.length === 0) return i.clear(), a.current.clear(), void u.current.clear();
    const h = new Set(i.keys()), f = new Set(t.items.map((k) => k.uid));
    h.forEach((k) => {
      f.has(k) || i.delete(k);
    }), new Set(a.current.keys()).forEach((k) => {
      f.has(k) || (a.current.delete(k), u.current.delete(k));
    });
  }, [t.items]);
  const c = K(() => t.status !== "active" ? null : w.jsx("div", { className: "nlux-chatSegment-loader-container", children: r.Loader }), [t.status, r.Loader]), d = K(() => ((h) => {
    const f = "nlux-chatSegment";
    return h === "complete" ? `${f} nlux-chatSegment--complete` : h === "error" ? `${f} nlux-chatSegment--error` : `${f} nlux-chatSegment--active`;
  })(t.status), [t.status]);
  Yt(e, () => ({ streamChunk: (h, f) => {
    const k = i.get(h);
    if (k != null && k.current) {
      const C = k.current.streamChunk;
      (l.get(h) ?? []).forEach((v) => {
        C(v);
      }), l.delete(h), C(f);
    } else {
      const C = l.get(h) ?? [];
      l.set(h, [...C, f]);
    }
  }, completeStream: (h) => {
    const f = i.get(h);
    f != null && f.current ? (f.current.completeStream(), i.delete(h)) : o(!0);
  } }), []);
  const p = K(() => Ut(ic), []);
  le(() => {
    l.size > 0 && l.forEach((h, f) => {
      const k = i.get(f);
      k != null && k.current && (h.forEach((C) => {
        var v;
        (v = k == null ? void 0 : k.current) == null || v.streamChunk(C);
      }), l.delete(f), s && (k.current.completeStream(), o(!1)));
    });
  });
  const m = t.items;
  return m.length === 0 ? null : w.jsxs("div", { className: d, ref: n, children: [m.map((h, f) => {
    var y;
    let k = i.get(h.uid);
    k || (k = er(), i.set(h.uid, k));
    let C = h.content, v = "text";
    if (typeof C == "function") {
      const A = u.current.get(h.uid), x = a.current.get(h.uid);
      if (A && x) C = x, v = "server-component";
      else {
        a.current.delete(h.uid), u.current.delete(h.uid);
        try {
          const I = C;
          if (C = w.jsx(I, {}), !C || !je.isValidElement(C)) throw new Error("Invalid React element returned from the AI chat content function.");
          v = "server-component", a.current.set(h.uid, C), u.current.set(h.uid, I);
        } catch {
          return Le(`The type of the AI chat content is an invalid function.
If you're looking to render a React Server Components, please refer to docs.nlkit.com/nlux for more information.
`), null;
        }
      }
    }
    if (h.participantRole === "user") return h.status !== "complete" ? (kn(`User chat item should be always be in complete state — Current status: ${h.status} — Segment UID: ${t.uid}`), null) : Rs(C) ? w.jsx(p, { ref: k, uid: h.uid, status: "complete", direction: "sent", contentType: v, layout: r.layout, messageOptions: r.messageOptions, dataTransferMode: "batch", fetchedContent: h.content, name: ln(h.participantRole, r.personaOptions), avatar: un(h.participantRole, r.personaOptions), markdownContainersController: r.markdownContainersController }, h.uid) : (kn(`User chat item should have primitive content (string, number, boolean, null) — Current content: ${JSON.stringify(C)} — Segment UID: ${t.uid}`), null);
    if (h.status === "complete") return h.dataTransferMode === "stream" ? w.jsx(p, { ref: k, uid: h.uid, status: h.status, direction: "received", contentType: v, layout: r.layout, messageOptions: r.messageOptions, dataTransferMode: h.dataTransferMode, streamedContent: C, name: ln(h.participantRole, r.personaOptions), avatar: un(h.participantRole, r.personaOptions), markdownContainersController: r.markdownContainersController }, h.uid) : v !== "text" || Rs(C) || (y = r.messageOptions) != null && y.responseRenderer ? w.jsx(p, { ref: k, uid: h.uid, status: "complete", direction: "received", layout: r.layout, messageOptions: r.messageOptions, dataTransferMode: h.dataTransferMode, fetchedContent: C, contentType: v, fetchedServerResponse: h.serverResponse, name: ln(h.participantRole, r.personaOptions), avatar: un(h.participantRole, r.personaOptions), markdownContainersController: r.markdownContainersController }, h.uid) : (Le(`When the type of the AI chat content is not primitive (object or array), a custom renderer must be provided — Current content: ${JSON.stringify(C)} — Segment UID: ${t.uid}`), null);
    if (h.status === "streaming") {
      const A = v === "server-component" && oo(C) ? C : void 0;
      return w.jsx(p, { ref: k, uid: h.uid, status: "streaming", direction: "received", contentType: v, fetchedContent: A, layout: r.layout, messageOptions: r.messageOptions, dataTransferMode: h.dataTransferMode, name: ln(h.participantRole, r.personaOptions), avatar: un(h.participantRole, r.personaOptions), markdownContainersController: r.markdownContainersController }, h.uid);
    }
    return null;
  }), c] });
}, cc = function(r, e) {
  const { segments: t, personaOptions: n, conversationOptions: s, onLastActiveSegmentChange: o } = r, i = er();
  (function(c, d, p) {
    const m = K(() => {
      const f = c.length > 0 ? c[c.length - 1] : void 0;
      return (f == null ? void 0 : f.status) === "active" ? f.uid : void 0;
    }, [c]), h = me(void 0);
    le(() => {
      if (!p) return;
      const f = h.current;
      if (m === (f == null ? void 0 : f.uid) && d.current === (f == null ? void 0 : f.div)) return;
      const k = m && d.current ? { uid: m, div: d.current } : void 0;
      (k || h.current) && (p(k), h.current = k);
    });
  })(t, i, o);
  const a = function(c) {
    const d = K(() => /* @__PURE__ */ new Map(), []);
    return le(() => {
      if (c.length === 0) return void d.clear();
      const p = new Set(d.keys()), m = new Set(c.map((h) => h.uid));
      p.forEach((h) => {
        m.has(h) || d.delete(h);
      });
    }, [c]), { get: (p) => {
      var m;
      return (m = d.get(p)) == null ? void 0 : m.current;
    }, getRef: (p) => d.get(p), set: (p, m) => {
      d.set(p, m);
    }, remove: (p) => {
      d.delete(p);
    } };
  }(t), u = ((c) => K(() => {
    return d = c == null ? void 0 : c.layout, d ?? "bubbles";
    var d;
  }, [c == null ? void 0 : c.layout]))(s);
  Yt(e, () => ({ streamChunk: (c, d, p) => {
    const m = a.get(c);
    m == null || m.streamChunk(d, p);
  }, completeStream: (c, d) => {
    const p = a.get(c);
    p == null || p.completeStream(d);
  } }), []);
  const l = K(() => Ut(ac), []);
  return w.jsx("div", { className: "nlux-chatSegments-container", children: t.map((c, d) => {
    const p = d === t.length - 1;
    let m = a.getRef(c.uid);
    return m || (m = er(), a.set(c.uid, m)), w.jsx(l, { ref: m, containerRef: p ? i : void 0, markdownContainersController: r.markdownContainersController, chatSegment: c, layout: u, personaOptions: n, messageOptions: r.messageOptions, Loader: r.Loader }, c.uid);
  }) });
}, lc = { typing: "nlux-composer--typing", "submitting-prompt": "nlux-composer--submitting", "submitting-conversation-starter": "nlux-composer--submitting", waiting: "nlux-composer--waiting" }, uc = () => w.jsx("div", { className: "nlux-comp-sendIcon", children: w.jsx("div", { className: "nlux-comp-sendIcon-container" }) }), dc = (r) => {
  const e = `nlux-comp-composer ${lc[r.status] || ""}`, t = r.status === "submitting-conversation-starter" || r.status === "submitting-prompt", n = !r.hasValidInput || r.status === "submitting-conversation-starter" || r.status === "submitting-prompt" || r.status === "waiting", s = r.status === "typing", o = me(null);
  le(() => {
    r.status === "typing" && r.autoFocus && o.current && o.current.focus();
  }, [r.status, r.autoFocus, o.current]);
  const i = K(() => (l) => {
    var c;
    (c = r.onChange) == null || c.call(r, l.target.value);
  }, [r.onChange]), a = K(() => () => {
    var l;
    (l = r.onSubmit) == null || l.call(r);
  }, [r.onSubmit]), u = K(() => (l) => {
    if (r.submitShortcut && r.submitShortcut !== "Enter")
      r.submitShortcut === "CommandEnter" && l.key === "Enter" && (l.getModifierState("Control") || l.getModifierState("Meta")) && (a(), l.preventDefault());
    else {
      const c = l.key === "Enter", d = l.altKey || l.ctrlKey || l.metaKey || l.shiftKey;
      c && !d && (a(), l.preventDefault());
    }
  }, [a, r.submitShortcut]);
  return w.jsxs("div", { className: e, children: [w.jsx("textarea", { tabIndex: 0, ref: o, disabled: t, placeholder: r.placeholder, value: r.prompt, onChange: i, onKeyDown: u }), w.jsxs("button", { tabIndex: 0, disabled: n, onClick: () => {
    var l;
    return (l = r.onSubmit) == null ? void 0 : l.call(r);
  }, children: [s && w.jsx(uc, {}), !s && r.Loader] })] });
}, yr = (r) => {
  var n;
  const e = {}, t = Object.keys(r);
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    o !== "personaOptions" && o !== "messageOptions" && o !== "adapter" && o !== "events" && Object.assign(e, { [o]: r[o] });
  }
  return r.personaOptions && (e.personaOptions = {}, r.personaOptions.assistant && (e.personaOptions.assistant = { name: r.personaOptions.assistant.name, avatar: typeof r.personaOptions.assistant.avatar == "string" ? r.personaOptions.assistant.avatar : "<REACT ELEMENT />", tagline: r.personaOptions.assistant.tagline }), r.personaOptions.user && (e.personaOptions.user = { name: r.personaOptions.user.name, avatar: typeof r.personaOptions.user.avatar == "string" ? r.personaOptions.user.avatar : "<REACT ELEMENT />" })), r.messageOptions && (e.messageOptions = { ...r.messageOptions, responseRenderer: r.messageOptions.responseRenderer ? () => null : void 0, promptRenderer: r.messageOptions.promptRenderer ? () => null : void 0 }), (n = r.conversationOptions) != null && n.conversationStarters && (e.conversationOptions = { ...r.conversationOptions, conversationStarters: r.conversationOptions.conversationStarters.map((s) => ({ ...s, icon: s.icon ? "<REACT ELEMENT />" : void 0 })) }), e;
};
var pc = Object.defineProperty, dn = (r, e, t) => ((n, s, o) => s in n ? pc(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class hc extends Error {
  constructor(e = {}) {
    super(e.message), dn(this, "exceptionId"), dn(this, "message"), dn(this, "source"), dn(this, "type"), this.message = e.message ?? "", this.source = e.source, this.type = this.constructor.name, this.exceptionId = e.exceptionId;
  }
}
const mc = (r, e) => {
  let t, n = e, s = r, o = !0;
  const i = ((f, k) => {
    let C = !1;
    if (typeof f != "function") throw new hc({ source: "x/throttle", message: "Callback must be a function" });
    return (...v) => {
      C || (f.apply(void 0, v), C = !0, setTimeout(function() {
        C = !1;
      }, k));
    };
  })(/* @__PURE__ */ ((f) => {
    let k, C;
    return (v) => {
      const y = v.target;
      if (!(y instanceof HTMLElement)) return;
      const { scrollTop: A, clientHeight: x, scrollHeight: I } = y, q = I - 30, M = Math.ceil(A + x) >= q, O = k === void 0 || C === void 0 ? void 0 : A > k && C === I ? "down" : A < k && C === I ? "up" : void 0;
      C = I, k = A, f({ scrolledToBottom: M, scrollDirection: O });
    };
  })(({ scrolledToBottom: f, scrollDirection: k }) => {
    o ? k === "up" && (o = !1) : k === "down" && f && (o = !0);
  }), 50), a = (f) => {
    f.addEventListener("scroll", i);
  }, u = (f) => {
    f == null || f.removeEventListener("scroll", i);
  }, l = (f) => {
    (t == null ? void 0 : t.uid) === f && (c == null || c.disconnect(), d == null || d.disconnect(), t = void 0, c = void 0, d = void 0);
  };
  let c, d;
  const p = () => {
    s == null || s.scrollTo({ top: 5e4, behavior: "instant" });
  }, m = () => {
    s && n && o && p();
  }, h = () => {
    m();
  };
  return a(s), { updateConversationContainer: (f) => {
    u(s), a(f), s = f;
  }, updateProps: ({ autoScroll: f }) => {
    n = f;
  }, handleNewChatSegmentAdded: (f, k) => {
    t && (c == null || c.disconnect(), d == null || d.disconnect()), t = { uid: f, container: k }, c = new ResizeObserver(m), c.observe(k), d = new MutationObserver(h), d.observe(k, { childList: !0, subtree: !0, characterData: !0 }), n && p();
  }, handleChatSegmentRemoved: (f) => l(f), handleChatSegmentComplete: (f) => l(f), destroy: () => {
    t && (l(t.uid), t = void 0), u(s), s = void 0;
  } };
}, Os = !0, En = (r) => {
  if (typeof r != "object" || r === null) return !1;
  const e = r;
  return (typeof e.streamText == "function" || typeof e.batchText == "function") && ["stream", "batch"].includes(e.dataTransferMode) && typeof e.id == "string" && typeof e.info == "object" && e.info !== null && typeof e.preProcessAiBatchedMessage == "function" && typeof e.preProcessAiStreamedChunk == "function";
}, Ae = (r, e = 1) => {
  setTimeout(() => {
    r();
  }, e);
}, fc = (r, e, t, n, s, o, i, a, u) => new Promise((l) => {
  const c = Ze(), d = [], p = [];
  let m = !1, h = !1, f = !1;
  const k = En(t), C = { next: (v) => {
    if (h || f) return;
    let y, A;
    if (k) {
      const x = v, I = t.preProcessAiStreamedChunk(x, n);
      I != null && (y = I, A = x, d.push(y), p.push(A));
    } else y = v, d.push(y);
    y != null ? (m || m || (m = !0, Ae(() => {
      s.forEach((x) => {
        x({ uid: c, status: "streaming", time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" });
      });
    })), Ae(() => {
      i.forEach((x) => {
        x({ chunk: y, messageId: c, serverResponse: A });
      });
    })) : Le("Adapter returned an undefined or null value from streamText. This chunk will be ignored.");
  }, complete: () => {
    h || f || (f = !0, Ae(() => {
      const v = { uid: c, status: "complete", content: d, contentType: "text", serverResponse: void 0, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" };
      o.forEach((y) => {
        y(v);
      }), l();
    }), Ae(() => {
      const v = { uid: r, status: "complete", items: [e, { uid: c, status: "complete", contentType: "text", content: d, serverResponse: p, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" }] };
      a.forEach((y) => {
        y(v);
      });
    }));
  }, error: (v) => {
    h || f || (h = !0, Ae(() => {
      u.forEach((y) => {
        y("failed-to-stream-content", v);
      }), l();
    }));
  } };
  t.streamText(e.content, C, n);
}), gc = (r, e, t) => {
  if (!r) return (() => {
    const v = /* @__PURE__ */ new Set(), y = Ze(), A = { uid: y, status: "complete", items: [] };
    return Ae(() => {
      v.forEach((x) => {
        x(A);
      }), v.clear();
    }), { segment: A, observable: { on: (x, I) => {
      x === "complete" && v.add(I);
    }, removeListener: (x, I) => {
      v.delete(I);
    }, destroy: () => {
      v.clear();
    }, get segmentId() {
      return y;
    } }, dataTransferMode: "batch" };
  })();
  const n = e;
  if (n.streamText === void 0 && n.batchText === void 0 && n.streamServerComponent === void 0) return ((v) => {
    const y = /* @__PURE__ */ new Set(), A = Ze(), x = { uid: A, status: "error", items: [] };
    return Ae(() => {
      y.forEach((I) => I(v)), y.clear();
    }), { segment: x, dataTransferMode: "stream", observable: { on: (I, q) => {
      I === "error" && y.add(q);
    }, removeListener: (I, q) => {
      y.delete(q);
    }, destroy: () => {
      y.clear();
    }, get segmentId() {
      return A;
    } } };
  })("no-data-transfer-mode-supported");
  const s = Ze(), o = ((v) => ({ uid: Ze(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: v, contentType: "text" }))(r);
  let i, a, u, l, c, d, p = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  Ae(() => {
    p != null && p.size && (p.forEach((v) => {
      v(o);
    }), p.clear(), p = void 0);
  });
  const f = ((v) => {
    const y = [], A = v, x = v;
    (A == null ? void 0 : A.streamText) === void 0 && (x == null ? void 0 : x.streamServerComponent) === void 0 || y.push("stream"), (A == null ? void 0 : A.batchText) !== void 0 && y.push("batch");
    const I = En(v) ? v : void 0, q = (I == null ? void 0 : I.dataTransferMode) ?? void 0, M = y.length === 1 ? y[0] : "stream";
    return q ?? M;
  })(e);
  ((v) => "streamServerComponent" in v ? "server-component" : "text")(e) === "server-component" ? (u = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), ((v, y, A, x, I, q, M, O) => new Promise((z, W) => {
    try {
      const Q = y.content, X = Ze(), U = "assistant", V = "streaming", re = /* @__PURE__ */ new Date(), G = "stream";
      let oe, J;
      const S = () => {
        Ae(() => {
          q.forEach(($) => {
            oe && J && $({ ...oe, content: J, status: "complete" });
          });
        }, 20);
        const L = { uid: v, status: "complete", items: [y, oe] };
        Ae(() => {
          M.forEach(($) => {
            $(L);
          }), z();
        }, 20);
      }, R = () => {
        O.forEach((L) => {
          L("failed-to-stream-server-component", new Error("Failed to load content"));
        });
      };
      J = A.streamServerComponent(Q, x, { onServerComponentReceived: S, onError: R }), oe = { uid: X, content: J, contentType: "server-component", participantRole: U, status: V, time: re, dataTransferMode: G }, Ae(() => {
        I.forEach((L) => {
          L(oe);
        });
      }, 10);
    } catch (Q) {
      Le(Q);
      const X = Q instanceof Error ? Q : typeof Q == "string" ? new Error(Q) : new Error("Unknown error");
      Ae(() => {
        O.forEach((U) => U("failed-to-load-content", X));
      });
    }
  }))(s, o, e, t, a, u, m, h).finally(() => {
    Ae(() => C());
  })) : f === "batch" ? (i = /* @__PURE__ */ new Set(), (async (v, y, A, x, I, q, M) => {
    try {
      const O = y.content, z = En(A) ? A : void 0, W = z !== void 0, Q = Ze(), X = "assistant", U = "complete", V = /* @__PURE__ */ new Date(), re = "batch";
      let G;
      if (W) {
        const S = await z.batchText(O, x), R = z.preProcessAiBatchedMessage(S, x);
        R != null && (G = { uid: Q, content: R, contentType: "text", serverResponse: S, participantRole: X, status: U, time: V, dataTransferMode: re });
      } else G = { uid: Q, content: await A.batchText(O, x), contentType: "text", serverResponse: void 0, participantRole: X, status: U, time: V, dataTransferMode: re };
      if (!G) throw new Error("Response from adapter was undefined or cannot be processed");
      const oe = G;
      Ae(() => {
        I.forEach((S) => {
          S(oe);
        });
      });
      const J = { uid: v, status: "complete", items: [y, G] };
      Ae(() => {
        q.forEach((S) => {
          S(J);
        });
      });
    } catch (O) {
      Le(O);
      const z = O instanceof Error ? O : typeof O == "string" ? new Error(O) : new Error("Unknown error");
      Ae(() => {
        M.forEach((W) => W("failed-to-load-content", z));
      });
    }
  })(s, o, e, t, i, m, h).finally(() => {
    Ae(() => C());
  })) : (l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), fc(s, o, e, t, l, c, d, m, h).finally(() => {
    Ae(() => C());
  }));
  const C = () => {
    p == null || p.clear(), p = void 0, i == null || i.clear(), i = void 0, a == null || a.clear(), a = void 0, u == null || u.clear(), u = void 0, l == null || l.clear(), l = void 0, c == null || c.clear(), c = void 0, d == null || d.clear(), d = void 0, m == null || m.clear(), m = void 0, h == null || h.clear(), h = void 0;
  };
  return { segment: { status: "active", uid: s, items: [] }, dataTransferMode: f, observable: { get segmentId() {
    return s;
  }, on: (v, y) => {
    v === "userMessageReceived" && p ? p.add(y) : v === "aiMessageReceived" && i ? i.add(y) : v === "aiServerComponentStreamStarted" && a ? a.add(y) : v === "aiServerComponentStreamed" && u ? u.add(y) : v === "aiMessageStreamStarted" && l ? l.add(y) : v === "aiMessageStreamed" && c ? c.add(y) : v === "aiChunkReceived" && d ? d.add(y) : v === "complete" && m ? m.add(y) : v === "error" && h && h.add(y);
  }, removeListener: (v, y) => {
    v !== "userMessageReceived" ? v !== "aiMessageReceived" ? v !== "aiMessageStreamStarted" ? v !== "aiMessageStreamed" ? v !== "aiChunkReceived" ? v !== "complete" ? v !== "error" || (h == null || h.delete(y)) : m == null || m.delete(y) : d == null || d.delete(y) : c == null || c.delete(y) : l == null || l.delete(y) : i == null || i.delete(y) : p == null || p.delete(y);
  }, destroy: () => C() } };
}, vc = { "data-transfer-mode-not-supported": "Requested data transfer mode is not supported", "no-data-transfer-mode-supported": "Adapter does not support any valid data transfer modes", "connection-error": "Connection error", "invalid-credentials": "Invalid credentials", "invalid-api-key": "Invalid API key", "http-server-side-error": "HTTP server side error", "http-client-side-error": "HTTP client side error", "failed-to-load-content": "Failed to load content", "failed-to-stream-content": "Failed to stream content", "failed-to-stream-server-component": "Failed to stream server component", "failed-to-render-content": "Failed to display content" }, yc = (r) => {
  var C;
  const { aiChatProps: e, adapterToUse: t, prompt: n, composerOptions: s, showException: o, chatSegments: i, initialSegment: a, setChatSegments: u, setComposerStatus: l, setPrompt: c, conversationRef: d } = r, p = K(() => n.length > 0, [n]), m = me(n);
  m.current = n;
  const h = me({ chatSegments: i, setChatSegments: u, setComposerStatus: l, showException: o, setPrompt: c }), f = me({});
  le(() => {
    h.current = { chatSegments: i, setChatSegments: u, setComposerStatus: l, showException: o, setPrompt: c };
  }, [i, u, l, o, c]);
  const k = ((v, y, A) => K(() => {
    const x = ((q) => {
      const M = [];
      return q.forEach((O) => {
        O.items.forEach((z) => {
          if (z.status === "complete") {
            if (z.participantRole === "assistant") M.push({ role: "assistant", message: z.content });
            else if (z.participantRole === "user") return M.push({ role: "user", message: z.content });
          }
        });
      }), M;
    })(y), I = A === "max" || A === void 0 ? x : A > 0 ? x.slice(-A) : void 0;
    return { aiChatProps: yr(v), conversationHistory: I };
  }, [v, y, A]))(e, a ? [a, ...i] : i, (C = e.conversationOptions) == null ? void 0 : C.historyPayloadSize);
  return le(() => {
    f.current = e.events || {};
  }, [e.events]), be(() => {
    if (!t) return void Le("No valid adapter was provided to AiChat component");
    if (!p || s != null && s.disableSubmitButton) return;
    l("submitting-prompt");
    const v = n, y = /* @__PURE__ */ new Set(), A = En(t) ? t : t.streamServerComponent ? { streamServerComponent: t.streamServerComponent } : { batchText: t.batchText, streamText: t.streamText }, { segment: x, observable: I } = gc(v, A, k);
    if (x.status === "error") return Le("Error occurred while submitting prompt"), o("Error occurred while submitting prompt"), l("typing"), void (m.current === "" && c(v));
    const q = (M) => {
      const O = h.current.chatSegments.map((z) => z.uid !== I.segmentId ? z : { ...z, items: [...z.items, { ...M }] });
      h.current.setChatSegments(O);
    };
    I.on("userMessageReceived", (M) => {
      var O;
      q(M), (O = f.current) != null && O.messageSent && f.current.messageSent({ uid: M.uid, message: M.content });
    }), I.on("aiMessageStreamStarted", (M) => {
      var O;
      q(M), h.current.setComposerStatus("waiting"), m.current === v && h.current.setPrompt(""), y.add(M.uid), (O = f.current) != null && O.messageStreamStarted && f.current.messageStreamStarted({ uid: M.uid });
    }), I.on("aiServerComponentStreamStarted", (M) => {
      var O, z;
      q(M), h.current.setComposerStatus("waiting"), m.current === v && h.current.setPrompt(""), y.add(M.uid), (O = f.current) != null && O.serverComponentStreamStarted && ((z = f.current) == null || z.serverComponentStreamStarted({ uid: M.uid }));
    }), I.on("aiServerComponentStreamed", (M) => {
      var O, z;
      (O = f.current) != null && O.serverComponentRendered && ((z = f.current) == null || z.serverComponentRendered({ uid: M.uid }));
    }), I.on("aiMessageReceived", (M) => {
      var z;
      const O = h.current.chatSegments.map((W) => W.uid !== I.segmentId ? W : { ...W, items: [...W.items, { ...M }] });
      h.current.setChatSegments(O), (z = f.current) != null && z.messageReceived && f.current.messageReceived({ uid: M.uid, message: M.content });
    }), I.on("complete", (M) => {
      h.current.setComposerStatus("typing");
      const O = h.current.chatSegments.map((z) => z.uid !== I.segmentId ? z : { ...M });
      h.current.setChatSegments(O), m.current === v && c(""), y.size > 0 && (y.forEach((z) => {
        requestAnimationFrame(() => {
          var W;
          (W = d.current) == null || W.completeStream(I.segmentId, z);
        });
      }), y.clear());
    }), I.on("aiChunkReceived", ({ messageId: M, chunk: O, serverResponse: z }) => {
      var W;
      (W = d.current) == null || W.streamChunk(x.uid, M, O);
    }), I.on("aiMessageStreamed", (M) => {
      var O, z;
      (O = f.current) != null && O.messageReceived && ((z = f.current) == null || z.messageReceived({ uid: M.uid, message: M.content }));
    }), I.on("error", (M, O) => {
      var Q;
      const z = h.current.chatSegments.filter((X) => X.uid !== x.uid), W = vc[M];
      h.current.setChatSegments(z), h.current.setComposerStatus("typing"), h.current.showException(W), m.current === "" && c(v), (Q = f.current) != null && Q.error && f.current.error({ errorId: M, message: W, errorObject: O });
    }), h.current.setChatSegments([...h.current.chatSegments, x]);
  }, [n, t, k, o, h, s == null ? void 0 : s.disableSubmitButton]);
}, Wo = "nlux-comp-welcomeMessage", Qo = (r) => w.jsxs("div", { className: Wo, children: [w.jsx(Yo, { avatar: r.avatar, name: r.name }), w.jsx("div", { className: "nlux-comp-welcomeMessage-personaName", children: r.name }), r.message && w.jsx("div", { className: "nlux-comp-welcomeMessage-text", children: r.message })] }), Ls = ({ children: r }) => w.jsx("div", { className: Wo, children: r }), xc = () => {
  const r = K(() => "data:image/png;base64,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", []);
  return w.jsx(Qo, { avatar: r, name: "" });
}, bc = (r) => {
  const { onConversationStarterSelected: e } = r;
  return w.jsx("div", { className: "nlux-comp-conversationStarters", children: r.items.map((t, n) => w.jsxs("button", { className: "nlux-comp-conversationStarter", onClick: () => e(t), children: [w.jsx(wc, { icon: t.icon }), w.jsx("span", { className: "nlux-comp-conversationStarter-prompt", children: t.label ?? t.prompt })] }, n)) });
}, wc = ({ icon: r }) => r ? typeof r == "string" ? w.jsx("img", { src: r, width: 16 }) : w.jsx("div", { className: "nlux-comp-conversationStarter-icon-container", children: r }) : null, kc = (r) => {
  const { segments: e, personaOptions: t, conversationOptions: n, userDefinedGreeting: s } = r, o = K(() => e.some((d) => d.items.length > 0), [e]), i = K(() => !s && !o && (t == null ? void 0 : t.assistant) === void 0 && (n == null ? void 0 : n.showWelcomeMessage) !== !1, [o, t == null ? void 0 : t.assistant, n == null ? void 0 : n.showWelcomeMessage, s]), a = K(() => !s && !o && (t == null ? void 0 : t.assistant) !== void 0 && (n == null ? void 0 : n.showWelcomeMessage) !== !1, [s, o, t == null ? void 0 : t.assistant, n == null ? void 0 : n.showWelcomeMessage]), u = K(() => !o && (n == null ? void 0 : n.conversationStarters) && (n == null ? void 0 : n.conversationStarters.length) > 0, [o, n == null ? void 0 : n.conversationStarters]), l = K(() => s !== void 0 && (n == null ? void 0 : n.showWelcomeMessage) !== !1, [s]);
  le(() => {
    s && (n == null ? void 0 : n.showWelcomeMessage) === !1 && kn("Configuration conflict: The greeting UI override provided via <AiChatUI.Greeting> will not be shown because conversationOptions.showWelcomeMessage is set to false.");
  }, [n == null ? void 0 : n.showWelcomeMessage, s]);
  const c = !(i || a || l || o);
  return w.jsxs(w.Fragment, { children: [i && w.jsx(xc, {}), a && w.jsx(Qo, { name: t.assistant.name, avatar: t.assistant.avatar, message: t.assistant.tagline }), l && w.jsx(Ls, { children: s }), c && w.jsx(Ls, { children: null }), w.jsx("div", { className: "nlux-conversationStarters-container", children: u && w.jsx(bc, { items: n.conversationStarters ?? [], onConversationStarterSelected: r.onConversationStarterSelected }) })] });
}, Ds = () => w.jsx("div", { className: "nlux-comp-messageLoader", children: w.jsx("div", { className: "nlux-comp-loaderContainer", children: w.jsx("span", { className: "spinning-loader" }) }) }), Bs = { Loader: (r) => w.jsx(w.Fragment, { children: r.children }), Greeting: (r) => w.jsx(w.Fragment, { children: r.children }) }, js = xi({}), Cc = function(r) {
  var F, Z, N;
  const { adapter: e, className: t, initialConversation: n, conversationOptions: s, composerOptions: o, displayOptions: i } = r, { themeId: a, colorScheme: u } = i ?? {}, l = me(null), c = me(null), d = me(void 0), p = me(null), m = ((b, E) => {
    const [j, H] = Ie(), [se, P] = Ie(), te = me(j), we = me(E);
    return le(() => {
      const Ee = b.current || void 0;
      Ee !== se && P(Ee);
    }), le(() => {
      se ? te.current ? te.current.updateConversationContainer(se) : (te.current = mc(se, we.current ?? Os), H(te.current)) : te.current && (te.current.destroy(), H(void 0), te.current = void 0);
    }, [se]), le(() => {
      we.current = E, te.current && te.current.updateProps({ autoScroll: E ?? Os });
    }, [E]), j;
  })(c, s == null ? void 0 : s.autoScroll), h = K(() => p.current ? Sa(p.current) : void 0, [p.current]), f = (() => {
    const b = {}, E = /* @__PURE__ */ new Set();
    return K(() => ({ getStreamingDomElement: (j) => {
      if (E.has(j) && E.delete(j), b[j] === void 0) {
        const H = document.createElement("div");
        H.setAttribute("nlux-message-id", j), H.className = "nlux-markdown-container", b[j] = H;
      }
      return b[j];
    }, deleteStreamingDomElement: (j) => {
      E.add(j), setTimeout(() => {
        E.forEach((H) => {
          b[H] && (b[H].remove(), delete b[H]);
        }), E.clear();
      }, 1e3);
    } }), []);
  })(), { PrimitivesContextProvider: k } = function(b) {
    var H, se, P, te, we, Ee, He, Me, Qe;
    const [E, j] = Ie(b);
    return le(() => {
      j(b);
    }, [(H = b == null ? void 0 : b.messageOptions) == null ? void 0 : H.htmlSanitizer, (se = b == null ? void 0 : b.messageOptions) == null ? void 0 : se.syntaxHighlighter, (P = b == null ? void 0 : b.messageOptions) == null ? void 0 : P.markdownLinkTarget, (te = b == null ? void 0 : b.messageOptions) == null ? void 0 : te.showCodeBlockCopyButton, (we = b == null ? void 0 : b.messageOptions) == null ? void 0 : we.skipStreamingAnimation, (Ee = b == null ? void 0 : b.messageOptions) == null ? void 0 : Ee.streamingAnimationSpeed, (He = b == null ? void 0 : b.messageOptions) == null ? void 0 : He.waitTimeBeforeStreamCompletion, (Me = b == null ? void 0 : b.messageOptions) == null ? void 0 : Me.responseRenderer, (Qe = b == null ? void 0 : b.messageOptions) == null ? void 0 : Qe.promptRenderer]), { PrimitivesContextProvider: K(() => ({ children: $e }) => w.jsx(js.Provider, { value: E, children: $e }), [E]), primitivesContext: js };
  }({ messageOptions: r.messageOptions }), [C, v] = Ie(""), [y, A] = Ie("typing"), [x, I] = Ie(), [q, M] = Ie([]), O = K(() => x ? [x, ...q] : q, [x, q]), z = K(() => ((b) => {
    const E = b;
    if (typeof (E == null ? void 0 : E.create) == "function") return E.create();
    if (typeof (E == null ? void 0 : E.batchText) == "function" || typeof (E == null ? void 0 : E.streamText) == "function" || typeof (E == null ? void 0 : E.streamServerComponent) == "function") return b;
    Le("Unable to determine the type of the adapter! Missing batchText or streamText method.");
  })(e), [e]), W = ((b) => K(() => {
    const E = { minWidth: "280px", minHeight: "280px" };
    return b != null && b.width && (E.width = b.width), b != null && b.height && (E.height = b.height), E;
  }, [b == null ? void 0 : b.width, b == null ? void 0 : b.height]))(i), Q = K(() => ((b) => {
    const E = ["nlux-AiChat-root"], j = `nlux-theme-${b.themeId || "nova"}`;
    return E.push(j), b.className && E.push(b.className), E;
  })({ className: t, themeId: a }).join(" "), [t, a]), X = K(() => {
    var b;
    return u !== "auto" && u ? u : typeof globalThis !== void 0 && globalThis.matchMedia && ((b = globalThis.matchMedia("(prefers-color-scheme: dark)")) != null && b.matches) ? "dark" : "light";
  }, [u]), U = be((b) => h == null ? void 0 : h.displayException(b), [h]), V = be((b) => v(b), [v]), re = yc({ aiChatProps: r, adapterToUse: z, conversationRef: l, initialSegment: x, chatSegments: q, prompt: C, composerOptions: o, showException: U, setChatSegments: M, setComposerStatus: A, setPrompt: v }), G = be((b) => {
    v(b.prompt), A("submitting-conversation-starter");
  }, [v, A]), oe = ((b, E) => be((j) => {
    b && j && (E.current = j.uid, b.handleNewChatSegmentAdded(j.uid, j.div));
  }, [b]))(m, d);
  le(() => {
    y !== "submitting-conversation-starter" && y !== "submitting-external-message" || re();
  }, [y, re]), le(() => I(n ? { uid: "initial", status: "complete", items: n.map((b, E) => {
    if (b.role === "assistant" || b.role === "user") return b.role === "user" ? typeof b.message != "string" ? void Le(`Invalid message type for item at index ${E} in initial conversation: When role is "user", message must be a string`) : { uid: Ze(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: b.message } : { uid: Ze(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "assistant", content: b.message, serverResponse: b.serverResponse, dataTransferMode: "batch" };
    Le(`Invalid role for item at index ${E} in initial conversation: Role must be "assistant" or "user"`);
  }).filter((b) => b !== void 0) } : void 0), [n]), le(() => {
    var b;
    x && ((b = c.current) == null || b.scrollTo({ behavior: "smooth", top: 5e4 }));
  }, [x]);
  const J = me(void 0);
  le(() => {
    const b = r.api;
    J.current = b, typeof (b == null ? void 0 : b.__setHost) == "function" && b.__setHost({ sendMessage: (E) => {
      v(E), A("submitting-external-message");
    }, resetConversation: () => {
      M([]), I(void 0);
    }, cancelLastMessageRequest: () => {
      const E = O.length > 0 ? O[O.length - 1] : void 0;
      (E == null ? void 0 : E.status) === "active" && M(O.slice(0, -1));
    } });
  }, [r.api, v, re, O, M]), le(() => () => {
    var b;
    typeof ((b = J.current) == null ? void 0 : b.__unsetHost) == "function" && (J.current.__unsetHost(), J.current = void 0);
  }, []), ((b) => {
    le(() => {
      var j;
      const E = (j = b.events) == null ? void 0 : j.ready;
      E && E({ aiChatProps: yr(b) });
    }, []);
  })(r), ((b, E) => {
    var se;
    const j = me(), H = me();
    le(() => {
      j.current = () => {
        const P = [];
        return E.forEach((te) => {
          te.items && te.items.length !== 0 && te.items.forEach((we) => {
            we.status === "complete" && (we.participantRole !== "assistant" ? we.participantRole === "user" && P.push({ role: "user", message: we.content }) : P.push({ role: "assistant", message: we.content }));
          });
        }), P;
      };
    }, [E]), le(() => {
      var P;
      H.current = (P = b.events) == null ? void 0 : P.preDestroy;
    }, [(se = b.events) == null ? void 0 : se.preDestroy]), le(() => () => {
      var te;
      const P = H.current;
      P && (P({ aiChatProps: yr(b), conversationHistory: ((te = j.current) == null ? void 0 : te.call(j)) ?? [] }), j.current = void 0);
    }, []);
  })(r, O);
  const S = K(() => Ut(cc), []), R = ((b) => {
    const E = K(() => b.children ? Array.isArray(b.children) ? b.children : [b.children] : [], [b.children]);
    return { Loader: K(() => E.length === 0 ? w.jsx(Ds, {}) : E.find((j) => j.type === Bs.Loader) || w.jsx(Ds, {}), [E]), Greeting: K(() => {
      if (E.length !== 0) return E.find((j) => j.type === Bs.Greeting);
    }, [E]) };
  })(r), L = C.length > 0, $ = O.length === 0 ? "nlux-chatRoom-starting" : "nlux-chatRoom-active";
  return z ? w.jsx(k, { children: w.jsxs("div", { className: Q, style: W, "data-color-scheme": X, children: [w.jsx("div", { className: "nlux-comp-exceptionBox", ref: p }), w.jsxs("div", { className: `nlux-chatRoom-container ${$}`, children: [w.jsx("div", { className: "nlux-launchPad-container", children: w.jsx(kc, { segments: O, onConversationStarterSelected: G, conversationOptions: s, personaOptions: r.personaOptions, userDefinedGreeting: R.Greeting }) }), w.jsx("div", { className: "nlux-conversation-container", ref: c, children: w.jsx(S, { ref: l, segments: O, conversationOptions: r.conversationOptions, personaOptions: r.personaOptions, messageOptions: r.messageOptions, onLastActiveSegmentChange: oe, Loader: R.Loader, markdownContainersController: f }) }), w.jsx("div", { className: "nlux-composer-container", children: w.jsx(dc, { status: y, prompt: C, hasValidInput: L, placeholder: (F = r.composerOptions) == null ? void 0 : F.placeholder, autoFocus: (Z = r.composerOptions) == null ? void 0 : Z.autoFocus, submitShortcut: (N = r.composerOptions) == null ? void 0 : N.submitShortcut, onChange: V, onSubmit: re, Loader: R.Loader }) })] })] }) }) : (kn("AiChat: No valid adapter provided. The component will not render."), w.jsx(w.Fragment, {}));
};
var Xo = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ms = je.createContext && /* @__PURE__ */ je.createContext(Xo), Sc = ["attr", "size", "title"];
function Ac(r, e) {
  if (r == null) return {};
  var t = Ec(r, e), n, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (s = 0; s < o.length; s++)
      n = o[s], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function Ec(r, e) {
  if (r == null) return {};
  var t = {};
  for (var n in r)
    if (Object.prototype.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
  return t;
}
function Tn() {
  return Tn = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Tn.apply(this, arguments);
}
function zs(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Pn(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? zs(Object(t), !0).forEach(function(n) {
      Tc(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : zs(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function Tc(r, e, t) {
  return e = Pc(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Pc(r) {
  var e = Ic(r, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Ic(r, e) {
  if (typeof r != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function Zo(r) {
  return r && r.map((e, t) => /* @__PURE__ */ je.createElement(e.tag, Pn({
    key: t
  }, e.attr), Zo(e.child)));
}
function Rc(r) {
  return (e) => /* @__PURE__ */ je.createElement(Oc, Tn({
    attr: Pn({}, r.attr)
  }, e), Zo(r.child));
}
function Oc(r) {
  var e = (t) => {
    var {
      attr: n,
      size: s,
      title: o
    } = r, i = Ac(r, Sc), a = s || t.size || "1em", u;
    return t.className && (u = t.className), r.className && (u = (u ? u + " " : "") + r.className), /* @__PURE__ */ je.createElement("svg", Tn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, n, i, {
      className: u,
      style: Pn(Pn({
        color: r.color || t.color
      }, t.style), r.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ je.createElement("title", null, o), r.children);
  };
  return Ms !== void 0 ? /* @__PURE__ */ je.createElement(Ms.Consumer, null, (t) => e(t)) : e(Xo);
}
function Lc(r) {
  return Rc({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" }, child: [] }] })(r);
}
var Dc = /* @__PURE__ */ ((r) => (r.Text = "Text", r.ImageUrl = "ImageUrl", r))(Dc || {}), Bc = /* @__PURE__ */ ((r) => (r.SystemMessage = "system", r.AIMessage = "ai", r.HumanMessage = "human", r))(Bc || {}), jc = /* @__PURE__ */ ((r) => (r.Auto = "Auto", r.Low = "Low", r.High = "High", r))(jc || {});
async function Mc(r) {
  const { files: e, message: t } = r;
  if (!e || !e.length)
    return t;
  {
    let n = await Promise.all(e.map(async (s) => {
      const o = await zc(s, r.resizeOptions);
      if (!o)
        throw new Error("resize failed");
      const i = await Fc(o);
      if (!i)
        throw new Error("base64 failed");
      return console.log(i), [
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
const zc = async (r, e) => {
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
async function Fc(r) {
  return new Promise((e, t) => {
    const n = new FileReader();
    n.onloadend = () => e(n.result), n.readAsDataURL(r);
  });
}
const Hc = "https://api.dev.langdb.ai", $c = (r) => {
  const { files: e, fileResizeOptions: t } = r, s = `${r.serverUrl || Hc}/stream`, [o, i] = Ie(r.threadId), { modelName: a, agentParams: u } = r, l = { "Content-Type": "application/json" };
  return r.publicId && (l["X-PUBLIC-APPLICATION-ID"] = r.publicId), {
    streamText: async (c, d) => {
      var p;
      if (!r.publicId) {
        const m = await ((p = r.getAccessToken) == null ? void 0 : p.call(r));
        if (!m) {
          d.error(new Error("Failed to get the user token"));
          return;
        }
        l.Authorization = `Bearer ${m}`;
      }
      try {
        const m = await Mc({ files: e, message: c, resizeOptions: t }), h = {
          model_name: a,
          parameters: u || {},
          user_id: r.userId || "",
          thread_id: o,
          message: m
        }, f = await fetch(s, {
          method: "POST",
          body: JSON.stringify(h),
          headers: l
        }), k = f.headers.get("X-Thread-Id");
        if (k && i(k), r.responseCallback && r.responseCallback({ response: f, modelName: a }), !f.body)
          throw new Error("No body found");
        if (f.status !== 200) {
          const A = await f.text();
          throw new Error(A || `${f.status}: Failed to send message to the server`);
        }
        const C = f.body.getReader(), v = new TextDecoder();
        let y = "";
        for (; ; ) {
          const { value: A, done: x } = await C.read();
          let I = v.decode(A, { stream: !0 });
          if (I && (y += I, d.next(I)), x)
            break;
        }
        d.complete();
      } catch (m) {
        console.log(m);
        const h = new Error(m.toString());
        r.responseCallback && r.responseCallback({ error: h, modelName: a }), d.error(h);
      }
    }
  };
};
var xr = { exports: {} }, pn = { exports: {} }, ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fs;
function Nc() {
  if (Fs) return ae;
  Fs = 1;
  var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, s = r ? Symbol.for("react.strict_mode") : 60108, o = r ? Symbol.for("react.profiler") : 60114, i = r ? Symbol.for("react.provider") : 60109, a = r ? Symbol.for("react.context") : 60110, u = r ? Symbol.for("react.async_mode") : 60111, l = r ? Symbol.for("react.concurrent_mode") : 60111, c = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, p = r ? Symbol.for("react.suspense_list") : 60120, m = r ? Symbol.for("react.memo") : 60115, h = r ? Symbol.for("react.lazy") : 60116, f = r ? Symbol.for("react.block") : 60121, k = r ? Symbol.for("react.fundamental") : 60117, C = r ? Symbol.for("react.responder") : 60118, v = r ? Symbol.for("react.scope") : 60119;
  function y(x) {
    if (typeof x == "object" && x !== null) {
      var I = x.$$typeof;
      switch (I) {
        case e:
          switch (x = x.type, x) {
            case u:
            case l:
            case n:
            case o:
            case s:
            case d:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case a:
                case c:
                case h:
                case m:
                case i:
                  return x;
                default:
                  return I;
              }
          }
        case t:
          return I;
      }
    }
  }
  function A(x) {
    return y(x) === l;
  }
  return ae.AsyncMode = u, ae.ConcurrentMode = l, ae.ContextConsumer = a, ae.ContextProvider = i, ae.Element = e, ae.ForwardRef = c, ae.Fragment = n, ae.Lazy = h, ae.Memo = m, ae.Portal = t, ae.Profiler = o, ae.StrictMode = s, ae.Suspense = d, ae.isAsyncMode = function(x) {
    return A(x) || y(x) === u;
  }, ae.isConcurrentMode = A, ae.isContextConsumer = function(x) {
    return y(x) === a;
  }, ae.isContextProvider = function(x) {
    return y(x) === i;
  }, ae.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, ae.isForwardRef = function(x) {
    return y(x) === c;
  }, ae.isFragment = function(x) {
    return y(x) === n;
  }, ae.isLazy = function(x) {
    return y(x) === h;
  }, ae.isMemo = function(x) {
    return y(x) === m;
  }, ae.isPortal = function(x) {
    return y(x) === t;
  }, ae.isProfiler = function(x) {
    return y(x) === o;
  }, ae.isStrictMode = function(x) {
    return y(x) === s;
  }, ae.isSuspense = function(x) {
    return y(x) === d;
  }, ae.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === l || x === o || x === s || x === d || x === p || typeof x == "object" && x !== null && (x.$$typeof === h || x.$$typeof === m || x.$$typeof === i || x.$$typeof === a || x.$$typeof === c || x.$$typeof === k || x.$$typeof === C || x.$$typeof === v || x.$$typeof === f);
  }, ae.typeOf = y, ae;
}
var ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hs;
function qc() {
  return Hs || (Hs = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, s = r ? Symbol.for("react.strict_mode") : 60108, o = r ? Symbol.for("react.profiler") : 60114, i = r ? Symbol.for("react.provider") : 60109, a = r ? Symbol.for("react.context") : 60110, u = r ? Symbol.for("react.async_mode") : 60111, l = r ? Symbol.for("react.concurrent_mode") : 60111, c = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, p = r ? Symbol.for("react.suspense_list") : 60120, m = r ? Symbol.for("react.memo") : 60115, h = r ? Symbol.for("react.lazy") : 60116, f = r ? Symbol.for("react.block") : 60121, k = r ? Symbol.for("react.fundamental") : 60117, C = r ? Symbol.for("react.responder") : 60118, v = r ? Symbol.for("react.scope") : 60119;
    function y(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === n || P === l || P === o || P === s || P === d || P === p || typeof P == "object" && P !== null && (P.$$typeof === h || P.$$typeof === m || P.$$typeof === i || P.$$typeof === a || P.$$typeof === c || P.$$typeof === k || P.$$typeof === C || P.$$typeof === v || P.$$typeof === f);
    }
    function A(P) {
      if (typeof P == "object" && P !== null) {
        var te = P.$$typeof;
        switch (te) {
          case e:
            var we = P.type;
            switch (we) {
              case u:
              case l:
              case n:
              case o:
              case s:
              case d:
                return we;
              default:
                var Ee = we && we.$$typeof;
                switch (Ee) {
                  case a:
                  case c:
                  case h:
                  case m:
                  case i:
                    return Ee;
                  default:
                    return te;
                }
            }
          case t:
            return te;
        }
      }
    }
    var x = u, I = l, q = a, M = i, O = e, z = c, W = n, Q = h, X = m, U = t, V = o, re = s, G = d, oe = !1;
    function J(P) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), S(P) || A(P) === u;
    }
    function S(P) {
      return A(P) === l;
    }
    function R(P) {
      return A(P) === a;
    }
    function L(P) {
      return A(P) === i;
    }
    function $(P) {
      return typeof P == "object" && P !== null && P.$$typeof === e;
    }
    function F(P) {
      return A(P) === c;
    }
    function Z(P) {
      return A(P) === n;
    }
    function N(P) {
      return A(P) === h;
    }
    function b(P) {
      return A(P) === m;
    }
    function E(P) {
      return A(P) === t;
    }
    function j(P) {
      return A(P) === o;
    }
    function H(P) {
      return A(P) === s;
    }
    function se(P) {
      return A(P) === d;
    }
    ce.AsyncMode = x, ce.ConcurrentMode = I, ce.ContextConsumer = q, ce.ContextProvider = M, ce.Element = O, ce.ForwardRef = z, ce.Fragment = W, ce.Lazy = Q, ce.Memo = X, ce.Portal = U, ce.Profiler = V, ce.StrictMode = re, ce.Suspense = G, ce.isAsyncMode = J, ce.isConcurrentMode = S, ce.isContextConsumer = R, ce.isContextProvider = L, ce.isElement = $, ce.isForwardRef = F, ce.isFragment = Z, ce.isLazy = N, ce.isMemo = b, ce.isPortal = E, ce.isProfiler = j, ce.isStrictMode = H, ce.isSuspense = se, ce.isValidElementType = y, ce.typeOf = A;
  }()), ce;
}
var $s;
function Ko() {
  return $s || ($s = 1, process.env.NODE_ENV === "production" ? pn.exports = Nc() : pn.exports = qc()), pn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Wn, Ns;
function _c() {
  if (Ns) return Wn;
  Ns = 1;
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
  return Wn = s() ? Object.assign : function(o, i) {
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
  }, Wn;
}
var Qn, qs;
function Hr() {
  if (qs) return Qn;
  qs = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qn = r, Qn;
}
var Xn, _s;
function Go() {
  return _s || (_s = 1, Xn = Function.call.bind(Object.prototype.hasOwnProperty)), Xn;
}
var Zn, Us;
function Uc() {
  if (Us) return Zn;
  Us = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Hr(), t = {}, n = Go();
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
          } catch (h) {
            d = h;
          }
          if (d && !(d instanceof Error) && r(
            (u || "React class") + ": type specification of " + a + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in t)) {
            t[d.message] = !0;
            var m = l ? l() : "";
            r(
              "Failed " + a + " type: " + d.message + (m ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Zn = s, Zn;
}
var Kn, Ys;
function Yc() {
  if (Ys) return Kn;
  Ys = 1;
  var r = Ko(), e = _c(), t = Hr(), n = Go(), s = Uc(), o = function() {
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
  return Kn = function(a, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function d(S) {
      var R = S && (l && S[l] || S[c]);
      if (typeof R == "function")
        return R;
    }
    var p = "<<anonymous>>", m = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: v(),
      arrayOf: y,
      element: A(),
      elementType: x(),
      instanceOf: I,
      node: z(),
      objectOf: M,
      oneOf: q,
      oneOfType: O,
      shape: Q,
      exact: X
    };
    function h(S, R) {
      return S === R ? S !== 0 || 1 / S === 1 / R : S !== S && R !== R;
    }
    function f(S, R) {
      this.message = S, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function k(S) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, L = 0;
      function $(Z, N, b, E, j, H, se) {
        if (E = E || p, H = H || b, se !== t) {
          if (u) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var te = E + ":" + b;
            !R[te] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + H + "` prop on `" + E + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[te] = !0, L++);
          }
        }
        return N[b] == null ? Z ? N[b] === null ? new f("The " + j + " `" + H + "` is marked as required " + ("in `" + E + "`, but its value is `null`.")) : new f("The " + j + " `" + H + "` is marked as required in " + ("`" + E + "`, but its value is `undefined`.")) : null : S(N, b, E, j, H);
      }
      var F = $.bind(null, !1);
      return F.isRequired = $.bind(null, !0), F;
    }
    function C(S) {
      function R(L, $, F, Z, N, b) {
        var E = L[$], j = re(E);
        if (j !== S) {
          var H = G(E);
          return new f(
            "Invalid " + Z + " `" + N + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected ") + ("`" + S + "`."),
            { expectedType: S }
          );
        }
        return null;
      }
      return k(R);
    }
    function v() {
      return k(i);
    }
    function y(S) {
      function R(L, $, F, Z, N) {
        if (typeof S != "function")
          return new f("Property `" + N + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var b = L[$];
        if (!Array.isArray(b)) {
          var E = re(b);
          return new f("Invalid " + Z + " `" + N + "` of type " + ("`" + E + "` supplied to `" + F + "`, expected an array."));
        }
        for (var j = 0; j < b.length; j++) {
          var H = S(b, j, F, Z, N + "[" + j + "]", t);
          if (H instanceof Error)
            return H;
        }
        return null;
      }
      return k(R);
    }
    function A() {
      function S(R, L, $, F, Z) {
        var N = R[L];
        if (!a(N)) {
          var b = re(N);
          return new f("Invalid " + F + " `" + Z + "` of type " + ("`" + b + "` supplied to `" + $ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(S);
    }
    function x() {
      function S(R, L, $, F, Z) {
        var N = R[L];
        if (!r.isValidElementType(N)) {
          var b = re(N);
          return new f("Invalid " + F + " `" + Z + "` of type " + ("`" + b + "` supplied to `" + $ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(S);
    }
    function I(S) {
      function R(L, $, F, Z, N) {
        if (!(L[$] instanceof S)) {
          var b = S.name || p, E = J(L[$]);
          return new f("Invalid " + Z + " `" + N + "` of type " + ("`" + E + "` supplied to `" + F + "`, expected ") + ("instance of `" + b + "`."));
        }
        return null;
      }
      return k(R);
    }
    function q(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), i;
      function R(L, $, F, Z, N) {
        for (var b = L[$], E = 0; E < S.length; E++)
          if (h(b, S[E]))
            return null;
        var j = JSON.stringify(S, function(se, P) {
          var te = G(P);
          return te === "symbol" ? String(P) : P;
        });
        return new f("Invalid " + Z + " `" + N + "` of value `" + String(b) + "` " + ("supplied to `" + F + "`, expected one of " + j + "."));
      }
      return k(R);
    }
    function M(S) {
      function R(L, $, F, Z, N) {
        if (typeof S != "function")
          return new f("Property `" + N + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var b = L[$], E = re(b);
        if (E !== "object")
          return new f("Invalid " + Z + " `" + N + "` of type " + ("`" + E + "` supplied to `" + F + "`, expected an object."));
        for (var j in b)
          if (n(b, j)) {
            var H = S(b, j, F, Z, N + "." + j, t);
            if (H instanceof Error)
              return H;
          }
        return null;
      }
      return k(R);
    }
    function O(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var R = 0; R < S.length; R++) {
        var L = S[R];
        if (typeof L != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(L) + " at index " + R + "."
          ), i;
      }
      function $(F, Z, N, b, E) {
        for (var j = [], H = 0; H < S.length; H++) {
          var se = S[H], P = se(F, Z, N, b, E, t);
          if (P == null)
            return null;
          P.data && n(P.data, "expectedType") && j.push(P.data.expectedType);
        }
        var te = j.length > 0 ? ", expected one of type [" + j.join(", ") + "]" : "";
        return new f("Invalid " + b + " `" + E + "` supplied to " + ("`" + N + "`" + te + "."));
      }
      return k($);
    }
    function z() {
      function S(R, L, $, F, Z) {
        return U(R[L]) ? null : new f("Invalid " + F + " `" + Z + "` supplied to " + ("`" + $ + "`, expected a ReactNode."));
      }
      return k(S);
    }
    function W(S, R, L, $, F) {
      return new f(
        (S || "React class") + ": " + R + " type `" + L + "." + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function Q(S) {
      function R(L, $, F, Z, N) {
        var b = L[$], E = re(b);
        if (E !== "object")
          return new f("Invalid " + Z + " `" + N + "` of type `" + E + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var j in S) {
          var H = S[j];
          if (typeof H != "function")
            return W(F, Z, N, j, G(H));
          var se = H(b, j, F, Z, N + "." + j, t);
          if (se)
            return se;
        }
        return null;
      }
      return k(R);
    }
    function X(S) {
      function R(L, $, F, Z, N) {
        var b = L[$], E = re(b);
        if (E !== "object")
          return new f("Invalid " + Z + " `" + N + "` of type `" + E + "` " + ("supplied to `" + F + "`, expected `object`."));
        var j = e({}, L[$], S);
        for (var H in j) {
          var se = S[H];
          if (n(S, H) && typeof se != "function")
            return W(F, Z, N, H, G(se));
          if (!se)
            return new f(
              "Invalid " + Z + " `" + N + "` key `" + H + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(L[$], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(S), null, "  ")
            );
          var P = se(b, H, F, Z, N + "." + H, t);
          if (P)
            return P;
        }
        return null;
      }
      return k(R);
    }
    function U(S) {
      switch (typeof S) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !S;
        case "object":
          if (Array.isArray(S))
            return S.every(U);
          if (S === null || a(S))
            return !0;
          var R = d(S);
          if (R) {
            var L = R.call(S), $;
            if (R !== S.entries) {
              for (; !($ = L.next()).done; )
                if (!U($.value))
                  return !1;
            } else
              for (; !($ = L.next()).done; ) {
                var F = $.value;
                if (F && !U(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function V(S, R) {
      return S === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function re(S) {
      var R = typeof S;
      return Array.isArray(S) ? "array" : S instanceof RegExp ? "object" : V(R, S) ? "symbol" : R;
    }
    function G(S) {
      if (typeof S > "u" || S === null)
        return "" + S;
      var R = re(S);
      if (R === "object") {
        if (S instanceof Date)
          return "date";
        if (S instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function oe(S) {
      var R = G(S);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function J(S) {
      return !S.constructor || !S.constructor.name ? p : S.constructor.name;
    }
    return m.checkPropTypes = s, m.resetWarningCache = s.resetWarningCache, m.PropTypes = m, m;
  }, Kn;
}
var Gn, Ws;
function Wc() {
  if (Ws) return Gn;
  Ws = 1;
  var r = Hr();
  function e() {
  }
  function t() {
  }
  return t.resetWarningCache = e, Gn = function() {
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
  }, Gn;
}
if (process.env.NODE_ENV !== "production") {
  var Qc = Ko(), Xc = !0;
  xr.exports = Yc()(Qc.isElement, Xc);
} else
  xr.exports = Wc()();
var Zc = xr.exports;
const he = /* @__PURE__ */ Ci(Zc);
function yt(r, e, t, n) {
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
function xt(r, e) {
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
function Qs(r, e) {
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
function Xs(r, e, t) {
  if (t || arguments.length === 2) for (var n = 0, s = e.length, o; n < s; n++)
    (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
  return r.concat(o || Array.prototype.slice.call(e));
}
var Kc = /* @__PURE__ */ new Map([
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
function Kt(r, e) {
  var t = Gc(r);
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
function Gc(r) {
  var e = r.name, t = e && e.lastIndexOf(".") !== -1;
  if (t && !r.type) {
    var n = e.split(".").pop().toLowerCase(), s = Kc.get(n);
    s && Object.defineProperty(r, "type", {
      value: s,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return r;
}
var Jc = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function Vc(r) {
  return yt(this, void 0, void 0, function() {
    return xt(this, function(e) {
      return In(r) && el(r.dataTransfer) ? [2, sl(r.dataTransfer, r.type)] : tl(r) ? [2, nl(r)] : Array.isArray(r) && r.every(function(t) {
        return "getFile" in t && typeof t.getFile == "function";
      }) ? [2, rl(r)] : [2, []];
    });
  });
}
function el(r) {
  return In(r);
}
function tl(r) {
  return In(r) && In(r.target);
}
function In(r) {
  return typeof r == "object" && r !== null;
}
function nl(r) {
  return br(r.target.files).map(function(e) {
    return Kt(e);
  });
}
function rl(r) {
  return yt(this, void 0, void 0, function() {
    var e;
    return xt(this, function(t) {
      switch (t.label) {
        case 0:
          return [4, Promise.all(r.map(function(n) {
            return n.getFile();
          }))];
        case 1:
          return e = t.sent(), [2, e.map(function(n) {
            return Kt(n);
          })];
      }
    });
  });
}
function sl(r, e) {
  return yt(this, void 0, void 0, function() {
    var t, n;
    return xt(this, function(s) {
      switch (s.label) {
        case 0:
          return r.items ? (t = br(r.items).filter(function(o) {
            return o.kind === "file";
          }), e !== "drop" ? [2, t] : [4, Promise.all(t.map(ol))]) : [3, 2];
        case 1:
          return n = s.sent(), [2, Zs(Jo(n))];
        case 2:
          return [2, Zs(br(r.files).map(function(o) {
            return Kt(o);
          }))];
      }
    });
  });
}
function Zs(r) {
  return r.filter(function(e) {
    return Jc.indexOf(e.name) === -1;
  });
}
function br(r) {
  if (r === null)
    return [];
  for (var e = [], t = 0; t < r.length; t++) {
    var n = r[t];
    e.push(n);
  }
  return e;
}
function ol(r) {
  if (typeof r.webkitGetAsEntry != "function")
    return Ks(r);
  var e = r.webkitGetAsEntry();
  return e && e.isDirectory ? Vo(e) : Ks(r);
}
function Jo(r) {
  return r.reduce(function(e, t) {
    return Xs(Xs([], Qs(e), !1), Qs(Array.isArray(t) ? Jo(t) : [t]), !1);
  }, []);
}
function Ks(r) {
  var e = r.getAsFile();
  if (!e)
    return Promise.reject("".concat(r, " is not a File"));
  var t = Kt(e);
  return Promise.resolve(t);
}
function il(r) {
  return yt(this, void 0, void 0, function() {
    return xt(this, function(e) {
      return [2, r.isDirectory ? Vo(r) : al(r)];
    });
  });
}
function Vo(r) {
  var e = r.createReader();
  return new Promise(function(t, n) {
    var s = [];
    function o() {
      var i = this;
      e.readEntries(function(a) {
        return yt(i, void 0, void 0, function() {
          var u, l, c;
          return xt(this, function(d) {
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
                c = Promise.all(a.map(il)), s.push(c), o(), d.label = 6;
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
function al(r) {
  return yt(this, void 0, void 0, function() {
    return xt(this, function(e) {
      return [2, new Promise(function(t, n) {
        r.file(function(s) {
          var o = Kt(s, r.fullPath);
          t(o);
        }, function(s) {
          n(s);
        });
      })];
    });
  });
}
var cl = function(r, e) {
  if (r && e) {
    var t = Array.isArray(e) ? e : e.split(","), n = r.name || "", s = (r.type || "").toLowerCase(), o = s.replace(/\/.*$/, "");
    return t.some(function(i) {
      var a = i.trim().toLowerCase();
      return a.charAt(0) === "." ? n.toLowerCase().endsWith(a) : a.endsWith("/*") ? o === a.replace(/\/.*$/, "") : s === a;
    });
  }
  return !0;
};
function Gs(r) {
  return dl(r) || ul(r) || ti(r) || ll();
}
function ll() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ul(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function dl(r) {
  if (Array.isArray(r)) return wr(r);
}
function Js(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Vs(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Js(Object(t), !0).forEach(function(n) {
      ei(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Js(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function ei(r, e, t) {
  return e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function _t(r, e) {
  return ml(r) || hl(r, e) || ti(r, e) || pl();
}
function pl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ti(r, e) {
  if (r) {
    if (typeof r == "string") return wr(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return wr(r, e);
  }
}
function wr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++)
    n[t] = r[t];
  return n;
}
function hl(r, e) {
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
function ml(r) {
  if (Array.isArray(r)) return r;
}
var fl = "file-invalid-type", gl = "file-too-large", vl = "file-too-small", yl = "too-many-files", xl = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: fl,
    message: "File type must be ".concat(t)
  };
}, eo = function(e) {
  return {
    code: gl,
    message: "File is larger than ".concat(e, " ").concat(e === 1 ? "byte" : "bytes")
  };
}, to = function(e) {
  return {
    code: vl,
    message: "File is smaller than ".concat(e, " ").concat(e === 1 ? "byte" : "bytes")
  };
}, bl = {
  code: yl,
  message: "Too many files"
};
function ni(r, e) {
  var t = r.type === "application/x-moz-file" || cl(r, e);
  return [t, t ? null : xl(e)];
}
function ri(r, e, t) {
  if (at(r.size))
    if (at(e) && at(t)) {
      if (r.size > t) return [!1, eo(t)];
      if (r.size < e) return [!1, to(e)];
    } else {
      if (at(e) && r.size < e) return [!1, to(e)];
      if (at(t) && r.size > t) return [!1, eo(t)];
    }
  return [!0, null];
}
function at(r) {
  return r != null;
}
function wl(r) {
  var e = r.files, t = r.accept, n = r.minSize, s = r.maxSize, o = r.multiple, i = r.maxFiles, a = r.validator;
  return !o && e.length > 1 || o && i >= 1 && e.length > i ? !1 : e.every(function(u) {
    var l = ni(u, t), c = _t(l, 1), d = c[0], p = ri(u, n, s), m = _t(p, 1), h = m[0], f = a ? a(u) : null;
    return d && h && !f;
  });
}
function Rn(r) {
  return typeof r.isPropagationStopped == "function" ? r.isPropagationStopped() : typeof r.cancelBubble < "u" ? r.cancelBubble : !1;
}
function hn(r) {
  return r.dataTransfer ? Array.prototype.some.call(r.dataTransfer.types, function(e) {
    return e === "Files" || e === "application/x-moz-file";
  }) : !!r.target && !!r.target.files;
}
function no(r) {
  r.preventDefault();
}
function kl(r) {
  return r.indexOf("MSIE") !== -1 || r.indexOf("Trident/") !== -1;
}
function Cl(r) {
  return r.indexOf("Edge/") !== -1;
}
function Sl() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return kl(r) || Cl(r);
}
function Ye() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return function(n) {
    for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), i = 1; i < s; i++)
      o[i - 1] = arguments[i];
    return e.some(function(a) {
      return !Rn(n) && a && a.apply(void 0, [n].concat(o)), Rn(n);
    });
  };
}
function Al() {
  return "showOpenFilePicker" in window;
}
function El(r) {
  if (at(r)) {
    var e = Object.entries(r).filter(function(t) {
      var n = _t(t, 2), s = n[0], o = n[1], i = !0;
      return si(s) || (console.warn('Skipped "'.concat(s, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), i = !1), (!Array.isArray(o) || !o.every(oi)) && (console.warn('Skipped "'.concat(s, '" because an invalid file extension was provided.')), i = !1), i;
    }).reduce(function(t, n) {
      var s = _t(n, 2), o = s[0], i = s[1];
      return Vs(Vs({}, t), {}, ei({}, o, i));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: e
    }];
  }
  return r;
}
function Tl(r) {
  if (at(r))
    return Object.entries(r).reduce(function(e, t) {
      var n = _t(t, 2), s = n[0], o = n[1];
      return [].concat(Gs(e), [s], Gs(o));
    }, []).filter(function(e) {
      return si(e) || oi(e);
    }).join(",");
}
function Pl(r) {
  return r instanceof DOMException && (r.name === "AbortError" || r.code === r.ABORT_ERR);
}
function Il(r) {
  return r instanceof DOMException && (r.name === "SecurityError" || r.code === r.SECURITY_ERR);
}
function si(r) {
  return r === "audio/*" || r === "video/*" || r === "image/*" || r === "text/*" || /\w+\/[-+.\w]+/g.test(r);
}
function oi(r) {
  return /^.*\.[\w]+$/.test(r);
}
var Rl = ["children"], Ol = ["open"], Ll = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Dl = ["refKey", "onChange", "onClick"];
function Bl(r) {
  return zl(r) || Ml(r) || ii(r) || jl();
}
function jl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ml(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function zl(r) {
  if (Array.isArray(r)) return kr(r);
}
function Jn(r, e) {
  return $l(r) || Hl(r, e) || ii(r, e) || Fl();
}
function Fl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ii(r, e) {
  if (r) {
    if (typeof r == "string") return kr(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return kr(r, e);
  }
}
function kr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++)
    n[t] = r[t];
  return n;
}
function Hl(r, e) {
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
function $l(r) {
  if (Array.isArray(r)) return r;
}
function ro(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function xe(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ro(Object(t), !0).forEach(function(n) {
      Cr(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ro(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function Cr(r, e, t) {
  return e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function On(r, e) {
  if (r == null) return {};
  var t = Nl(r, e), n, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (s = 0; s < o.length; s++)
      n = o[s], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function Nl(r, e) {
  if (r == null) return {};
  var t = {}, n = Object.keys(r), s, o;
  for (o = 0; o < n.length; o++)
    s = n[o], !(e.indexOf(s) >= 0) && (t[s] = r[s]);
  return t;
}
var $r = /* @__PURE__ */ Ut(function(r, e) {
  var t = r.children, n = On(r, Rl), s = ci(n), o = s.open, i = On(s, Ol);
  return Yt(e, function() {
    return {
      open: o
    };
  }, [o]), /* @__PURE__ */ je.createElement(ki, null, t(xe(xe({}, i), {}, {
    open: o
  })));
});
$r.displayName = "Dropzone";
var ai = {
  disabled: !1,
  getFilesFromEvent: Vc,
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
$r.defaultProps = ai;
$r.propTypes = {
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
  children: he.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: he.objectOf(he.arrayOf(he.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: he.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: he.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: he.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: he.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: he.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: he.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: he.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: he.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: he.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: he.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: he.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: he.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: he.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: he.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: he.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: he.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: he.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: he.func,
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
  onDrop: he.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: he.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: he.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: he.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: he.func
};
var Sr = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function ci() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = xe(xe({}, ai), r), t = e.accept, n = e.disabled, s = e.getFilesFromEvent, o = e.maxSize, i = e.minSize, a = e.multiple, u = e.maxFiles, l = e.onDragEnter, c = e.onDragLeave, d = e.onDragOver, p = e.onDrop, m = e.onDropAccepted, h = e.onDropRejected, f = e.onFileDialogCancel, k = e.onFileDialogOpen, C = e.useFsAccessApi, v = e.autoFocus, y = e.preventDropOnDocument, A = e.noClick, x = e.noKeyboard, I = e.noDrag, q = e.noDragEventsBubbling, M = e.onError, O = e.validator, z = K(function() {
    return Tl(t);
  }, [t]), W = K(function() {
    return El(t);
  }, [t]), Q = K(function() {
    return typeof k == "function" ? k : so;
  }, [k]), X = K(function() {
    return typeof f == "function" ? f : so;
  }, [f]), U = me(null), V = me(null), re = wi(ql, Sr), G = Jn(re, 2), oe = G[0], J = G[1], S = oe.isFocused, R = oe.isFileDialogActive, L = me(typeof window < "u" && window.isSecureContext && C && Al()), $ = function() {
    !L.current && R && setTimeout(function() {
      if (V.current) {
        var _ = V.current.files;
        _.length || (J({
          type: "closeDialog"
        }), X());
      }
    }, 300);
  };
  le(function() {
    return window.addEventListener("focus", $, !1), function() {
      window.removeEventListener("focus", $, !1);
    };
  }, [V, R, X, L]);
  var F = me([]), Z = function(_) {
    U.current && U.current.contains(_.target) || (_.preventDefault(), F.current = []);
  };
  le(function() {
    return y && (document.addEventListener("dragover", no, !1), document.addEventListener("drop", Z, !1)), function() {
      y && (document.removeEventListener("dragover", no), document.removeEventListener("drop", Z));
    };
  }, [U, y]), le(function() {
    return !n && v && U.current && U.current.focus(), function() {
    };
  }, [U, v, n]);
  var N = be(function(D) {
    M ? M(D) : console.error(D);
  }, [M]), b = be(function(D) {
    D.preventDefault(), D.persist(), ut(D), F.current = [].concat(Bl(F.current), [D.target]), hn(D) && Promise.resolve(s(D)).then(function(_) {
      if (!(Rn(D) && !q)) {
        var ve = _.length, ye = ve > 0 && wl({
          files: _,
          accept: z,
          minSize: i,
          maxSize: o,
          multiple: a,
          maxFiles: u,
          validator: O
        }), Te = ve > 0 && !ye;
        J({
          isDragAccept: ye,
          isDragReject: Te,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), l && l(D);
      }
    }).catch(function(_) {
      return N(_);
    });
  }, [s, l, N, q, z, i, o, a, u, O]), E = be(function(D) {
    D.preventDefault(), D.persist(), ut(D);
    var _ = hn(D);
    if (_ && D.dataTransfer)
      try {
        D.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return _ && d && d(D), !1;
  }, [d, q]), j = be(function(D) {
    D.preventDefault(), D.persist(), ut(D);
    var _ = F.current.filter(function(ye) {
      return U.current && U.current.contains(ye);
    }), ve = _.indexOf(D.target);
    ve !== -1 && _.splice(ve, 1), F.current = _, !(_.length > 0) && (J({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), hn(D) && c && c(D));
  }, [U, c, q]), H = be(function(D, _) {
    var ve = [], ye = [];
    D.forEach(function(Te) {
      var Je = ni(Te, z), Xe = Jn(Je, 2), tt = Xe[0], wt = Xe[1], kt = ri(Te, i, o), dt = Jn(kt, 2), Ct = dt[0], St = dt[1], At = O ? O(Te) : null;
      if (tt && Ct && !At)
        ve.push(Te);
      else {
        var Et = [wt, St];
        At && (Et = Et.concat(At)), ye.push({
          file: Te,
          errors: Et.filter(function(Tt) {
            return Tt;
          })
        });
      }
    }), (!a && ve.length > 1 || a && u >= 1 && ve.length > u) && (ve.forEach(function(Te) {
      ye.push({
        file: Te,
        errors: [bl]
      });
    }), ve.splice(0)), J({
      acceptedFiles: ve,
      fileRejections: ye,
      type: "setFiles"
    }), p && p(ve, ye, _), ye.length > 0 && h && h(ye, _), ve.length > 0 && m && m(ve, _);
  }, [J, a, z, i, o, u, p, m, h, O]), se = be(function(D) {
    D.preventDefault(), D.persist(), ut(D), F.current = [], hn(D) && Promise.resolve(s(D)).then(function(_) {
      Rn(D) && !q || H(_, D);
    }).catch(function(_) {
      return N(_);
    }), J({
      type: "reset"
    });
  }, [s, H, N, q]), P = be(function() {
    if (L.current) {
      J({
        type: "openDialog"
      }), Q();
      var D = {
        multiple: a,
        types: W
      };
      window.showOpenFilePicker(D).then(function(_) {
        return s(_);
      }).then(function(_) {
        H(_, null), J({
          type: "closeDialog"
        });
      }).catch(function(_) {
        Pl(_) ? (X(_), J({
          type: "closeDialog"
        })) : Il(_) ? (L.current = !1, V.current ? (V.current.value = null, V.current.click()) : N(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : N(_);
      });
      return;
    }
    V.current && (J({
      type: "openDialog"
    }), Q(), V.current.value = null, V.current.click());
  }, [J, Q, X, C, H, N, W, a]), te = be(function(D) {
    !U.current || !U.current.isEqualNode(D.target) || (D.key === " " || D.key === "Enter" || D.keyCode === 32 || D.keyCode === 13) && (D.preventDefault(), P());
  }, [U, P]), we = be(function() {
    J({
      type: "focus"
    });
  }, []), Ee = be(function() {
    J({
      type: "blur"
    });
  }, []), He = be(function() {
    A || (Sl() ? setTimeout(P, 0) : P());
  }, [A, P]), Me = function(_) {
    return n ? null : _;
  }, Qe = function(_) {
    return x ? null : Me(_);
  }, $e = function(_) {
    return I ? null : Me(_);
  }, ut = function(_) {
    q && _.stopPropagation();
  }, Bn = K(function() {
    return function() {
      var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ = D.refKey, ve = _ === void 0 ? "ref" : _, ye = D.role, Te = D.onKeyDown, Je = D.onFocus, Xe = D.onBlur, tt = D.onClick, wt = D.onDragEnter, kt = D.onDragOver, dt = D.onDragLeave, Ct = D.onDrop, St = On(D, Ll);
      return xe(xe(Cr({
        onKeyDown: Qe(Ye(Te, te)),
        onFocus: Qe(Ye(Je, we)),
        onBlur: Qe(Ye(Xe, Ee)),
        onClick: Me(Ye(tt, He)),
        onDragEnter: $e(Ye(wt, b)),
        onDragOver: $e(Ye(kt, E)),
        onDragLeave: $e(Ye(dt, j)),
        onDrop: $e(Ye(Ct, se)),
        role: typeof ye == "string" && ye !== "" ? ye : "presentation"
      }, ve, U), !n && !x ? {
        tabIndex: 0
      } : {}), St);
    };
  }, [U, te, we, Ee, He, b, E, j, se, x, I, n]), bt = be(function(D) {
    D.stopPropagation();
  }, []), jn = K(function() {
    return function() {
      var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ = D.refKey, ve = _ === void 0 ? "ref" : _, ye = D.onChange, Te = D.onClick, Je = On(D, Dl), Xe = Cr({
        accept: z,
        multiple: a,
        type: "file",
        style: {
          display: "none"
        },
        onChange: Me(Ye(ye, se)),
        onClick: Me(Ye(Te, bt)),
        tabIndex: -1
      }, ve, V);
      return xe(xe({}, Xe), Je);
    };
  }, [V, t, a, se, n]);
  return xe(xe({}, oe), {}, {
    isFocused: S && !n,
    getRootProps: Bn,
    getInputProps: jn,
    rootRef: U,
    inputRef: V,
    open: Me(P)
  });
}
function ql(r, e) {
  switch (e.type) {
    case "focus":
      return xe(xe({}, r), {}, {
        isFocused: !0
      });
    case "blur":
      return xe(xe({}, r), {}, {
        isFocused: !1
      });
    case "openDialog":
      return xe(xe({}, Sr), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return xe(xe({}, r), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return xe(xe({}, r), {}, {
        isDragActive: e.isDragActive,
        isDragAccept: e.isDragAccept,
        isDragReject: e.isDragReject
      });
    case "setFiles":
      return xe(xe({}, r), {}, {
        acceptedFiles: e.acceptedFiles,
        fileRejections: e.fileRejections
      });
    case "reset":
      return xe({}, Sr);
    default:
      return r;
  }
}
function so() {
}
const _l = (r) => /* @__PURE__ */ w.jsx("svg", { ...r, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ w.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12h14" }) }), Ul = () => /* @__PURE__ */ w.jsxs("svg", { viewBox: "0 0 200 200", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ w.jsx("circle", { cx: "100", cy: "100", r: "99.5", stroke: "#B0488C" }),
  /* @__PURE__ */ w.jsxs("g", { clipPath: "url(#clip0_31_12)", children: [
    /* @__PURE__ */ w.jsx(
      "path",
      {
        d: "M87.6691 75.9199C88.563 75.9163 89.457 75.9128 90.378 75.9091C92.2639 75.9065 94.1498 75.9134 96.0357 75.9291C98.9224 75.9491 101.807 75.9292 104.694 75.9053C106.528 75.9078 108.362 75.9126 110.195 75.9199C111.059 75.9124 111.921 75.9048 112.81 75.897C119.46 75.9944 119.46 75.9944 121.75 78.2731C122.191 78.8959 122.631 79.5187 123.085 80.1604C123.454 80.531 123.454 80.531 123.83 80.9091C123.911 82.1028 123.941 83.3 123.95 84.4965C123.957 85.2614 123.964 86.0262 123.971 86.8143C123.974 87.6478 123.978 88.4815 123.981 89.3403C123.985 90.1927 123.99 91.0451 123.994 91.9233C124.001 93.7328 124.006 95.5423 124.009 97.3517C124.016 100.116 124.039 102.879 124.062 105.643C124.067 107.399 124.071 109.155 124.074 110.911C124.083 111.738 124.093 112.563 124.102 113.415C124.081 120.894 124.081 120.894 121.596 124.332C119.274 125.815 117.439 126.021 114.715 126.035C113.937 126.042 113.159 126.049 112.357 126.056C111.521 126.056 110.685 126.055 109.823 126.054C108.961 126.057 108.098 126.06 107.209 126.064C105.383 126.068 103.559 126.068 101.734 126.065C98.9428 126.062 96.1519 126.08 93.3604 126.099C91.5874 126.101 89.8145 126.101 88.0415 126.101C87.2067 126.107 86.372 126.115 85.5119 126.122C84.7316 126.117 83.9513 126.113 83.1474 126.107C82.4635 126.108 81.7796 126.109 81.075 126.109C78.7215 125.767 77.3408 124.983 75.4255 123.583C73.7766 121.097 73.7375 120.265 73.6961 117.362C73.6818 116.549 73.6676 115.737 73.6528 114.901C73.6465 114.023 73.6401 113.146 73.6337 112.242C73.6251 111.34 73.6166 110.438 73.6079 109.509C73.5938 107.6 73.5841 105.69 73.5783 103.781C73.5639 100.859 73.5177 97.9383 73.4707 95.0167C73.461 93.1626 73.4532 91.3085 73.4475 89.4543C73.4291 88.5801 73.4107 87.7058 73.3917 86.8049C73.4123 83.0474 73.445 80.866 75.6217 77.739C79.2026 75.469 83.5895 75.8841 87.6691 75.9199Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ w.jsx(
      "path",
      {
        d: "M32.2341 37.4866C59.7575 37.4866 87.2809 37.4866 115.638 37.4866C115.638 42.9219 115.638 48.3572 115.638 53.9572C93.0298 53.9572 70.4213 53.9572 47.1277 53.9572C47.1277 64.5807 47.1277 75.2043 47.1277 86.1497C42.2128 86.1497 37.2979 86.1497 32.2341 86.1497C32.2341 70.0909 32.2341 54.0321 32.2341 37.4866Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ w.jsx(
      "path",
      {
        d: "M32.2341 116.845C37.149 116.845 42.0639 116.845 47.1277 116.845C47.1277 127.221 47.1277 137.598 47.1277 148.289C71.7022 148.289 96.2766 148.289 121.596 148.289C121.596 153.23 121.596 158.171 121.596 163.262C92.1064 163.262 62.617 163.262 32.2341 163.262C32.2341 147.944 32.2341 132.627 32.2341 116.845Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ w.jsx(
      "path",
      {
        d: "M161.814 34.6792C165.577 37.5618 167.934 41.1653 169.255 45.7219C170.002 51.7878 170.244 57.7758 166.678 63.0231C166.3 63.4902 165.921 63.9573 165.532 64.4385C164.964 65.1623 164.964 65.1623 164.386 65.9007C160.694 70.0863 156.304 72.2018 150.81 72.9575C144.443 73.235 139.791 71.2772 134.814 67.3864C130.268 63.0898 128.124 57.8507 127.879 51.6177C128.195 45.152 130.717 40.4865 135.049 35.7846C142.84 28.7908 153.315 29.3596 161.814 34.6792Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ w.jsx(
      "path",
      {
        d: "M158.009 137.132C162.749 139.815 166.014 143.005 167.766 148.289C168.291 153.643 168.045 158.108 164.787 162.513C160.978 166.779 156.65 168.925 151.011 169.532C144.592 168.841 140.292 166.139 136.21 161.062C134.084 157.002 134.439 151.969 135 147.54C136.243 144.421 137.612 142.39 140.167 140.241C140.665 139.812 141.163 139.383 141.676 138.942C146.467 135.355 152.423 135.005 158.009 137.132Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ w.jsx(
      "path",
      {
        d: "M149.894 85.4011C154.809 85.4011 159.723 85.4011 164.787 85.4011C164.787 96.0246 164.787 106.648 164.787 117.594C159.872 117.594 154.957 117.594 149.894 117.594C149.894 106.97 149.894 96.3465 149.894 85.4011Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ w.jsx(
      "path",
      {
        d: "M40.3383 94.0136C43.3122 94.7142 44.8713 96.3632 46.6623 98.7366C47.3967 101.321 47.103 103.037 46.383 105.615C44.2412 107.919 42.6152 109.128 39.6343 110.107C36.957 110.107 35.8402 109.471 33.7234 107.861C33.2934 107.567 32.8633 107.274 32.4203 106.972C30.8391 104.667 30.4332 102.35 30.7447 99.6257C32.7702 95.2399 35.5991 93.6206 40.3383 94.0136Z",
        fill: "#B0488C"
      }
    )
  ] }),
  /* @__PURE__ */ w.jsx("defs", { children: /* @__PURE__ */ w.jsx("clipPath", { id: "clip0_31_12", children: /* @__PURE__ */ w.jsx(
    "rect",
    {
      width: "140",
      height: "140",
      fill: "white",
      transform: "translate(30 30)"
    }
  ) }) })
] }), Yl = ({ files: r }) => /* @__PURE__ */ w.jsx(w.Fragment, { children: r.map((e) => /* @__PURE__ */ w.jsx("div", { className: "thumbnail m-2", children: /* @__PURE__ */ w.jsx("div", { className: "thumbnailInner", children: /* @__PURE__ */ w.jsx("img", { src: e.preview, alt: e.name, className: "w-[150px]" }) }) }, e.name)) }), Wl = ({ files: r, setFiles: e }) => {
  const t = be((i) => {
    e((a) => [...a, ...i.map((u) => Object.assign(u, {
      preview: URL.createObjectURL(u)
    }))]);
  }, []), { getRootProps: n, getInputProps: s } = ci({ onDrop: t }), o = (i) => () => {
    const a = r.filter((u) => u !== i);
    e(a);
  };
  return /* @__PURE__ */ w.jsxs("div", { className: "flex flex-col w-[100%] dropzone border", children: [
    /* @__PURE__ */ w.jsxs("div", { ...n(), className: "flex items-center justify-center p-4 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-gray-500", children: [
      /* @__PURE__ */ w.jsx("input", { ...s() }),
      /* @__PURE__ */ w.jsx("p", { className: "text-gray-600", children: "Drag & drop images, or click to select files" })
    ] }),
    /* @__PURE__ */ w.jsx("aside", { className: "flex flex-wrap mt-4", children: r.map((i) => /* @__PURE__ */ w.jsxs("div", { className: "relative m-2", children: [
      /* @__PURE__ */ w.jsx("button", { onClick: o(i), className: "absolute top-0 right-0 p-1 bg-red-500 rounded-full text-white", children: /* @__PURE__ */ w.jsx(_l, { className: "w-4 h-4" }) }),
      /* @__PURE__ */ w.jsx("div", { className: "border p-1 rounded-lg", children: /* @__PURE__ */ w.jsx("img", { src: i.preview, alt: i.name, className: "w-32 h-32 object-cover rounded-lg" }) })
    ] }, i.name)) })
  ] });
};
function iu(r) {
  var C, v;
  const e = r.advancedOptions || {}, t = e.conversationOptions || {
    layout: "bubbles"
  }, [n, s] = Ie([]), o = $c({ ...r, files: n }), { controls: i } = r, [a, u] = Ie(/* @__PURE__ */ new Map()), l = (y, A) => {
    u((x) => new Map(x.set(y, A)));
  }, c = ({ prompt: y, uid: A }) => {
    const x = a.get(A);
    return /* @__PURE__ */ w.jsxs("div", { className: "rounded-lg shadow-sm", children: [
      /* @__PURE__ */ w.jsx("span", { className: "block", children: y }),
      /* @__PURE__ */ w.jsx("div", { className: "mt-2", children: x && /* @__PURE__ */ w.jsx(Yl, { files: x }) })
    ] });
  }, d = Object.assign(
    {},
    { colorScheme: "light", themeId: "langdb" },
    e.displayOptions
  ), p = e.composerOptions || {
    placeholder: "How can i help you today ?"
  }, m = Object.assign({}, {
    assistant: Object.assign({}, (C = r.personaOptions) == null ? void 0 : C.assistant, {
      name: "LangDB",
      tagline: `
              Easily build and deploy AI agents with SQL.
              Customize with our React widget on`,
      avatar: /* @__PURE__ */ w.jsx(Ul, {})
    }),
    user: Object.assign({}, (v = r.personaOptions) == null ? void 0 : v.user, {
      name: "User",
      avatar: /* @__PURE__ */ w.jsx(Lc, {})
    })
  }), h = be((y) => {
    n && (l(y.uid, [...n]), s([]));
  }, [l]), f = be(() => {
  }, []), k = r.className || "";
  return /* @__PURE__ */ w.jsxs("div", { className: "flex flex-col w-[100%] h-full", children: [
    (i == null ? void 0 : i.enableFiles) && /* @__PURE__ */ w.jsx(Wl, { files: n, setFiles: s }),
    /* @__PURE__ */ w.jsx("div", { className: "flex-1 w-full relative", children: /* @__PURE__ */ w.jsx(
      "main",
      {
        className: `items-center justify-between  ${k} h-full absolute`,
        style: r.style || {},
        children: /* @__PURE__ */ w.jsx(
          Cc,
          {
            adapter: o,
            initialConversation: r.messages,
            events: {
              messageSent: h,
              messageStreamStarted: f
            },
            messageOptions: {
              promptRenderer: c
            },
            personaOptions: m,
            conversationOptions: t,
            displayOptions: d,
            composerOptions: p,
            ...e
          }
        )
      }
    ) })
  ] });
}
function Vn(...r) {
  return r.filter(Boolean).join(" ");
}
const au = (r) => {
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
  } = r, [d, p] = Ie(!1), [m, h] = Ie(l || !1), f = be(() => {
    p((k) => !k);
  }, []);
  return /* @__PURE__ */ w.jsxs("div", { className: Vn(s || "dark"), children: [
    d && /* @__PURE__ */ w.jsxs(
      "div",
      {
        style: m ? u : {},
        className: Vn(
          "light:text-slate-900 dark:text-white flex flex-1 bg-white dark:bg-black flex-col absolute p-[10px] pt-[0px]",
          m ? a || "h-full w-full bottom-0 right-0" : "rounded border shadow-md h-[60vh] w-[40vw] min-h-[500px] bottom-16 right-16"
        ),
        children: [
          /* @__PURE__ */ w.jsxs(
            "div",
            {
              className: "border-b py-[5px] flex justify-center items-center",
              style: { zIndex: "99999" },
              children: [
                /* @__PURE__ */ w.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ w.jsx(
                    "button",
                    {
                      onClick: () => {
                        p(!1), e && e();
                      },
                      children: /* @__PURE__ */ w.jsx(Xl, {})
                    }
                  ),
                  !(c != null && c.hideMaximise) && /* @__PURE__ */ w.jsx(
                    "button",
                    {
                      onClick: () => {
                        h((k) => !k), t && t();
                      },
                      children: m ? /* @__PURE__ */ w.jsx(Kl, {}) : /* @__PURE__ */ w.jsx(Zl, {})
                    }
                  )
                ] }),
                /* @__PURE__ */ w.jsx("div", { className: "flex flex-1 justify-center", children: i })
              ]
            }
          ),
          /* @__PURE__ */ w.jsx("div", { className: "flex flex-1 overflow-scroll ", children: o })
        ]
      }
    ),
    !d && /* @__PURE__ */ w.jsx(
      "button",
      {
        className: Vn(
          n || "",
          "fixed text-white bg-primary hover:bg-primary-800 bottom-5 right-5 flex w-[50px] hover:scale-110 scale-100 h-[50px] justify-center items-center p-[10px] rounded-full cursor-pointer shadow-none hover:shadow-xl transition ease-in-out"
        ),
        onClick: f,
        children: /* @__PURE__ */ w.jsx(Ql, {})
      }
    )
  ] });
}, Ql = () => /* @__PURE__ */ w.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "size-6",
    children: /* @__PURE__ */ w.jsx(
      "path",
      {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      }
    )
  }
), Xl = () => /* @__PURE__ */ w.jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ w.jsx("path", { d: "M19 13H5v-2h14v2z" })
  }
), Zl = () => /* @__PURE__ */ w.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "size-6",
    children: /* @__PURE__ */ w.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
      }
    )
  }
), Kl = () => /* @__PURE__ */ w.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "size-6",
    children: /* @__PURE__ */ w.jsx(
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
  Ql as ChatIcon,
  au as FloatingChatWidget,
  jc as ImageDetail,
  Dc as MessageContentType,
  Bc as MessageType,
  iu as Widget,
  Mc as createInnerMessage
};
//# sourceMappingURL=index.es.js.map
