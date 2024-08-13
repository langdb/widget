import Xe, { createContext as Si, useRef as xe, useState as je, useEffect as le, useMemo as V, useCallback as he, forwardRef as Qt, createRef as nr, useImperativeHandle as Xt, isValidElement as xn, Component as Ai, useReducer as Ei, Fragment as Ti } from "react";
function Pi(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var rr = { exports: {} }, Rt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr;
function Ii() {
  if (Gr) return Rt;
  Gr = 1;
  var r = Xe, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, u, l) {
    var c, d = {}, p = null, m = null;
    l !== void 0 && (p = "" + l), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (m = u.ref);
    for (c in u) n.call(u, c) && !o.hasOwnProperty(c) && (d[c] = u[c]);
    if (a && a.defaultProps) for (c in u = a.defaultProps, u) d[c] === void 0 && (d[c] = u[c]);
    return { $$typeof: e, type: a, key: p, ref: m, props: d, _owner: s.current };
  }
  return Rt.Fragment = t, Rt.jsx = i, Rt.jsxs = i, Rt;
}
var Ot = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr;
function Ri() {
  return Jr || (Jr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Xe, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, f = "@@iterator";
    function b(g) {
      if (g === null || typeof g != "object")
        return null;
      var E = h && g[h] || g[f];
      return typeof E == "function" ? E : null;
    }
    var C = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(g) {
      {
        for (var E = arguments.length, D = new Array(E > 1 ? E - 1 : 0), X = 1; X < E; X++)
          D[X - 1] = arguments[X];
        y("error", g, D);
      }
    }
    function y(g, E, D) {
      {
        var X = C.ReactDebugCurrentFrame, de = X.getStackAddendum();
        de !== "" && (E += "%s", D = D.concat([de]));
        var ye = D.map(function(se) {
          return String(se);
        });
        ye.unshift("Warning: " + E), Function.prototype.apply.call(console[g], console, ye);
      }
    }
    var A = !1, x = !1, O = !1, H = !1, $ = !1, T;
    T = Symbol.for("react.module.reference");
    function I(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === n || g === o || $ || g === s || g === l || g === c || H || g === m || A || x || O || typeof g == "object" && g !== null && (g.$$typeof === p || g.$$typeof === d || g.$$typeof === i || g.$$typeof === a || g.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === T || g.getModuleId !== void 0));
    }
    function Y(g, E, D) {
      var X = g.displayName;
      if (X)
        return X;
      var de = E.displayName || E.name || "";
      return de !== "" ? D + "(" + de + ")" : D;
    }
    function M(g) {
      return g.displayName || "Context";
    }
    function z(g) {
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
            var E = g;
            return M(E) + ".Consumer";
          case i:
            var D = g;
            return M(D._context) + ".Provider";
          case u:
            return Y(g, g.render, "ForwardRef");
          case d:
            var X = g.displayName || null;
            return X !== null ? X : z(g.type) || "Memo";
          case p: {
            var de = g, ye = de._payload, se = de._init;
            try {
              return z(se(ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, J = 0, fe, re, ie, N, S, R, F;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function W() {
      {
        if (J === 0) {
          fe = console.log, re = console.info, ie = console.warn, N = console.error, S = console.group, R = console.groupCollapsed, F = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: q,
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
        J++;
      }
    }
    function ee() {
      {
        if (J--, J === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, g, {
              value: fe
            }),
            info: B({}, g, {
              value: re
            }),
            warn: B({}, g, {
              value: ie
            }),
            error: B({}, g, {
              value: N
            }),
            group: B({}, g, {
              value: S
            }),
            groupCollapsed: B({}, g, {
              value: R
            }),
            groupEnd: B({}, g, {
              value: F
            })
          });
        }
        J < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = C.ReactCurrentDispatcher, Z;
    function K(g, E, D) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (de) {
            var X = de.stack.trim().match(/\n( *(at )?)/);
            Z = X && X[1] || "";
          }
        return `
` + Z + g;
      }
    }
    var te = !1, G;
    {
      var Ce = typeof WeakMap == "function" ? WeakMap : Map;
      G = new Ce();
    }
    function L(g, E) {
      if (!g || te)
        return "";
      {
        var D = G.get(g);
        if (D !== void 0)
          return D;
      }
      var X;
      te = !0;
      var de = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ye;
      ye = U.current, U.current = null, W();
      try {
        if (E) {
          var se = function() {
            throw Error();
          };
          if (Object.defineProperty(se.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(se, []);
            } catch (ze) {
              X = ze;
            }
            Reflect.construct(g, [], se);
          } else {
            try {
              se.call();
            } catch (ze) {
              X = ze;
            }
            g.call(se.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ze) {
            X = ze;
          }
          g();
        }
      } catch (ze) {
        if (ze && X && typeof ze.stack == "string") {
          for (var ne = ze.stack.split(`
`), Be = X.stack.split(`
`), Te = ne.length - 1, Ie = Be.length - 1; Te >= 1 && Ie >= 0 && ne[Te] !== Be[Ie]; )
            Ie--;
          for (; Te >= 1 && Ie >= 0; Te--, Ie--)
            if (ne[Te] !== Be[Ie]) {
              if (Te !== 1 || Ie !== 1)
                do
                  if (Te--, Ie--, Ie < 0 || ne[Te] !== Be[Ie]) {
                    var qe = `
` + ne[Te].replace(" at new ", " at ");
                    return g.displayName && qe.includes("<anonymous>") && (qe = qe.replace("<anonymous>", g.displayName)), typeof g == "function" && G.set(g, qe), qe;
                  }
                while (Te >= 1 && Ie >= 0);
              break;
            }
        }
      } finally {
        te = !1, U.current = ye, ee(), Error.prepareStackTrace = de;
      }
      var gt = g ? g.displayName || g.name : "", it = gt ? K(gt) : "";
      return typeof g == "function" && G.set(g, it), it;
    }
    function Oe(g, E, D) {
      return L(g, !1);
    }
    function _e(g) {
      var E = g.prototype;
      return !!(E && E.isReactComponent);
    }
    function He(g, E, D) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return L(g, _e(g));
      if (typeof g == "string")
        return K(g);
      switch (g) {
        case l:
          return K("Suspense");
        case c:
          return K("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case u:
            return Oe(g.render);
          case d:
            return He(g.type, E, D);
          case p: {
            var X = g, de = X._payload, ye = X._init;
            try {
              return He(ye(de), E, D);
            } catch {
            }
          }
        }
      return "";
    }
    var k = Object.prototype.hasOwnProperty, j = {}, Q = C.ReactDebugCurrentFrame;
    function oe(g) {
      if (g) {
        var E = g._owner, D = He(g.type, g._source, E ? E.type : null);
        Q.setExtraStackFrame(D);
      } else
        Q.setExtraStackFrame(null);
    }
    function we(g, E, D, X, de) {
      {
        var ye = Function.call.bind(k);
        for (var se in g)
          if (ye(g, se)) {
            var ne = void 0;
            try {
              if (typeof g[se] != "function") {
                var Be = Error((X || "React class") + ": " + D + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Be.name = "Invariant Violation", Be;
              }
              ne = g[se](E, se, X, D, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Te) {
              ne = Te;
            }
            ne && !(ne instanceof Error) && (oe(de), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", D, se, typeof ne), oe(null)), ne instanceof Error && !(ne.message in j) && (j[ne.message] = !0, oe(de), v("Failed %s type: %s", D, ne.message), oe(null));
          }
      }
    }
    var ke = Array.isArray;
    function ae(g) {
      return ke(g);
    }
    function Pe(g) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, D = E && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return D;
      }
    }
    function P(g) {
      try {
        return _(g), !1;
      } catch {
        return !0;
      }
    }
    function _(g) {
      return "" + g;
    }
    function ue(g) {
      if (P(g))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pe(g)), _(g);
    }
    var ce = C.ReactCurrentOwner, Re = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ye, Ve, ot;
    ot = {};
    function Ct(g) {
      if (k.call(g, "ref")) {
        var E = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function St(g) {
      if (k.call(g, "key")) {
        var E = Object.getOwnPropertyDescriptor(g, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function ht(g, E) {
      if (typeof g.ref == "string" && ce.current && E && ce.current.stateNode !== E) {
        var D = z(ce.current.type);
        ot[D] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(ce.current.type), g.ref), ot[D] = !0);
      }
    }
    function At(g, E) {
      {
        var D = function() {
          Ye || (Ye = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        D.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: D,
          configurable: !0
        });
      }
    }
    function Et(g, E) {
      {
        var D = function() {
          Ve || (Ve = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        D.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: D,
          configurable: !0
        });
      }
    }
    var Tt = function(g, E, D, X, de, ye, se) {
      var ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: g,
        key: E,
        ref: D,
        props: se,
        // Record the component responsible for creating this element.
        _owner: ye
      };
      return ne._store = {}, Object.defineProperty(ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.defineProperty(ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
    };
    function Pt(g, E, D, X, de) {
      {
        var ye, se = {}, ne = null, Be = null;
        D !== void 0 && (ue(D), ne = "" + D), St(E) && (ue(E.key), ne = "" + E.key), Ct(E) && (Be = E.ref, ht(E, de));
        for (ye in E)
          k.call(E, ye) && !Re.hasOwnProperty(ye) && (se[ye] = E[ye]);
        if (g && g.defaultProps) {
          var Te = g.defaultProps;
          for (ye in Te)
            se[ye] === void 0 && (se[ye] = Te[ye]);
        }
        if (ne || Be) {
          var Ie = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          ne && At(se, Ie), Be && Et(se, Ie);
        }
        return Tt(g, ne, Be, de, X, ce.current, se);
      }
    }
    var It = C.ReactCurrentOwner, Ur = C.ReactDebugCurrentFrame;
    function ft(g) {
      if (g) {
        var E = g._owner, D = He(g.type, g._source, E ? E.type : null);
        Ur.setExtraStackFrame(D);
      } else
        Ur.setExtraStackFrame(null);
    }
    var zn;
    zn = !1;
    function Fn(g) {
      return typeof g == "object" && g !== null && g.$$typeof === e;
    }
    function Yr() {
      {
        if (It.current) {
          var g = z(It.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function hi(g) {
      return "";
    }
    var Wr = {};
    function fi(g) {
      {
        var E = Yr();
        if (!E) {
          var D = typeof g == "string" ? g : g.displayName || g.name;
          D && (E = `

Check the top-level render call using <` + D + ">.");
        }
        return E;
      }
    }
    function Qr(g, E) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var D = fi(E);
        if (Wr[D])
          return;
        Wr[D] = !0;
        var X = "";
        g && g._owner && g._owner !== It.current && (X = " It was passed a child from " + z(g._owner.type) + "."), ft(g), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, X), ft(null);
      }
    }
    function Xr(g, E) {
      {
        if (typeof g != "object")
          return;
        if (ae(g))
          for (var D = 0; D < g.length; D++) {
            var X = g[D];
            Fn(X) && Qr(X, E);
          }
        else if (Fn(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var de = b(g);
          if (typeof de == "function" && de !== g.entries)
            for (var ye = de.call(g), se; !(se = ye.next()).done; )
              Fn(se.value) && Qr(se.value, E);
        }
      }
    }
    function gi(g) {
      {
        var E = g.type;
        if (E == null || typeof E == "string")
          return;
        var D;
        if (typeof E == "function")
          D = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === d))
          D = E.propTypes;
        else
          return;
        if (D) {
          var X = z(E);
          we(D, g.props, "prop", X, g);
        } else if (E.PropTypes !== void 0 && !zn) {
          zn = !0;
          var de = z(E);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vi(g) {
      {
        for (var E = Object.keys(g.props), D = 0; D < E.length; D++) {
          var X = E[D];
          if (X !== "children" && X !== "key") {
            ft(g), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), ft(null);
            break;
          }
        }
        g.ref !== null && (ft(g), v("Invalid attribute `ref` supplied to `React.Fragment`."), ft(null));
      }
    }
    var Zr = {};
    function Kr(g, E, D, X, de, ye) {
      {
        var se = I(g);
        if (!se) {
          var ne = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Be = hi();
          Be ? ne += Be : ne += Yr();
          var Te;
          g === null ? Te = "null" : ae(g) ? Te = "array" : g !== void 0 && g.$$typeof === e ? (Te = "<" + (z(g.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof g, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, ne);
        }
        var Ie = Pt(g, E, D, de, ye);
        if (Ie == null)
          return Ie;
        if (se) {
          var qe = E.children;
          if (qe !== void 0)
            if (X)
              if (ae(qe)) {
                for (var gt = 0; gt < qe.length; gt++)
                  Xr(qe[gt], g);
                Object.freeze && Object.freeze(qe);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xr(qe, g);
        }
        if (k.call(E, "key")) {
          var it = z(g), ze = Object.keys(E).filter(function(Ci) {
            return Ci !== "key";
          }), Hn = ze.length > 0 ? "{key: someKey, " + ze.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Zr[it + Hn]) {
            var ki = ze.length > 0 ? "{" + ze.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Hn, it, ki, it), Zr[it + Hn] = !0;
          }
        }
        return g === n ? vi(Ie) : gi(Ie), Ie;
      }
    }
    function yi(g, E, D) {
      return Kr(g, E, D, !0);
    }
    function bi(g, E, D) {
      return Kr(g, E, D, !1);
    }
    var xi = bi, wi = yi;
    Ot.Fragment = n, Ot.jsx = xi, Ot.jsxs = wi;
  }()), Ot;
}
process.env.NODE_ENV === "production" ? rr.exports = Ii() : rr.exports = Ri();
var w = rr.exports, Oi = Object.defineProperty, en = (r, e, t) => ((n, s, o) => s in n ? Oi(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class rt extends Error {
  constructor(e = {}) {
    super(e.message), en(this, "exceptionId"), en(this, "message"), en(this, "source"), en(this, "type"), this.message = e.message ?? "", this.source = e.source, this.type = this.constructor.name, this.exceptionId = e.exceptionId;
  }
}
class at extends rt {
}
class wn extends rt {
}
const De = (r) => {
  typeof r != "string" ? r && typeof r.toString == "function" ? console.warn(`[nlux] ${r.toString()}`) : console.warn("[nlux]") : console.warn(`[nlux] ${r}`);
}, Vr = [], sr = (r) => {
  Vr.includes(r) || (Vr.push(r), De(r));
}, uo = class vn {
  static register(e) {
    const t = e.__compId;
    t ? vn.componentDefs.get(t) === void 0 && (e.__renderer && e.__updater ? vn.componentDefs.set(t, { id: t, model: e, render: e.__renderer, update: e.__updater }) : De(`Component with id "${t}" missing renderer or updater`)) : De("Component definition missing valid id");
  }
  static retrieve(e) {
    const t = vn.componentDefs.get(e);
    if (t) return t;
    De(`Component with id "${e}" not registered`);
  }
};
uo.componentDefs = /* @__PURE__ */ new Map();
let po = uo;
btoa("sectionsRegistered") + "";
const Je = (r) => {
  const e = requestAnimationFrame(() => {
    r();
  });
  return () => {
    cancelAnimationFrame(e);
  };
}, Ut = (r) => {
  r.replaceChildren();
}, We = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (r) => {
  const e = 16 * Math.random() | 0;
  return (r == "x" ? e : 3 & e | 8).toString(16);
});
class Ue {
  constructor(e, t) {
    this.subComponentElementIds = /* @__PURE__ */ new Map(), this.subComponents = /* @__PURE__ */ new Map(), this.__context = null, this.__destroyed = !1, this.__status = "unmounted", this.actionsOnDomReady = [], this.compEventGetter = (i) => {
      if (this.destroyed) return () => {
      };
      const a = this.rendererEventListeners.get(i);
      if (!a) throw new rt({ source: this.constructor.name, message: `Unable to call renderer event "${i}" because no matching event listener was found. Make sure that the event listener is registered using @CompEventListener() decorator in the component model class, and use class methods instead of arrow function attributes.` });
      return a;
    };
    const n = Object.getPrototypeOf(this).constructor.__compId;
    if (!n) throw new at({ source: this.constructor.name, message: "Unable to instantiate component: missing compId in implementation. Component should be annotated using @Model() to set compId before iy can be instantiated." });
    if (this.def = po.retrieve(n) ?? null, !this.def) throw new at({ source: this.constructor.name, message: `Unable to instantiate component "${n}" because it's not registered. Component should be registered using CompRegistry.register(ComponentClass) before instantiating a component.` });
    this.__instanceId = We(), this.__destroyed = !1, this.__context = e, this.renderedDom = null, this.renderingRoot = null, this.props = t;
    const s = t ? Object.entries(t) : [];
    this.elementProps = new Map(s), this.rendererEventListeners = /* @__PURE__ */ new Map();
    const o = this.constructor.__compEventListeners;
    o && o.forEach((i, a) => {
      i.forEach((u) => {
        const l = Object.getPrototypeOf(this)[u];
        typeof l == "function" ? this.addRendererEventListener(a, l.bind(this)) : De(`Unable to set event listener "${a}" because method "${u}" cannot be found on component "${this.constructor.name} at runtime!"`);
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
    if (!this.__context) throw new at({ source: this.constructor.name, message: "Unable to get context because it's not set" });
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
    if (this.destroyed) return void De(`Unable to render component "${(i = this.def) == null ? void 0 : i.id}" because it is already destroyed`);
    if (this.rendered || this.renderedDom) return void De(`Unable to render component "${this.def.id}" because it is already rendered`);
    const n = document.createDocumentFragment(), s = Object.getPrototypeOf(this).constructor.__compId, o = this.executeRenderer(n);
    if (!o) throw new rt({ source: this.constructor.name, message: `Unable to render component "${s}" because renderer returned null` });
    this.renderedDom = o;
    for (const [, a] of this.subComponents) {
      const u = this.getSubComponentPortal(a.id);
      u && this.mountSubComponentToPortal(a.id, u);
    }
    Je(() => {
      this.destroyed || (t ? e.insertBefore(n, t) : e.append(n), this.renderingRoot = e);
    });
  }
  updateSubComponent(e, t, n) {
    this.throwIfDestroyed();
    const s = this.subComponents.get(e);
    s && !s.destroyed && s.setProp(t, n);
  }
  addSubComponent(e, t, n) {
    if (this.throwIfDestroyed(), this.subComponents.has(e)) throw new at({ source: this.constructor.name, message: `Unable to add sub-component "${e}" because it already exists` });
    if (this.subComponents.set(e, t), n && this.subComponentElementIds.set(e, n), this.renderedDom) {
      const s = this.getSubComponentPortal(e);
      s && this.mountSubComponentToPortal(e, s);
    }
  }
  executeDomAction(e, ...t) {
    if (this.throwIfDestroyed(), !this.renderedDom) return void this.actionsOnDomReady.push(() => this.executeDomAction(e, ...t));
    if (!this.renderingRoot) throw new rt({ source: this.constructor.name, message: "Unable to execute DOM action because renderingRoot is not set" });
    const n = this.renderedDom.actions[e];
    if (!n) throw new rt({ source: this.constructor.name, message: `Unable to execute DOM action "${String(e)}" because it does not exist` });
    return Je(() => n(...t));
  }
  executeRenderer(e) {
    var s;
    const t = (s = this.def) == null ? void 0 : s.render;
    if (!t) return null;
    if (this.renderingRoot) throw new rt({ source: this.constructor.name, message: "Unable to render component because renderingRoot is already set" });
    const n = t({ appendToRoot: (o) => {
      e.append(o), this.runDomActionsQueue();
    }, compEvent: this.compEventGetter, props: this.rendererProps, context: this.context });
    return n && (this.renderingRoot = e), n;
  }
  removeSubComponent(e) {
    this.throwIfDestroyed(), Je(() => {
      const t = this.subComponents.get(e);
      t && (t.renderingRoot = null, t.destroy(), this.subComponents.delete(e));
    });
  }
  runDomActionsQueue() {
    if (this.actionsOnDomReady.length > 0 && this.rendered) {
      const e = this.actionsOnDomReady;
      this.actionsOnDomReady = [];
      for (const t of e) Je(() => t());
    }
  }
  setProp(e, t) {
    this.destroyed ? De(`Unable to set prop "${String(e)}" because component "${this.constructor.name}" is destroyed`) : this.elementProps.has(e) ? (this.schedulePropUpdate(e, this.elementProps.get(e), t), this.props = Object.freeze(Object.fromEntries(this.elementProps)), this.elementProps.set(e, t)) : De(`Unable to set prop "${String(e)}" because it does not exist in the component props`);
  }
  throwIfDestroyed() {
    if (this.__destroyed) throw new at({ source: this.constructor.name, message: "Unable to call method on destroyed component" });
  }
  addRendererEventListener(e, t) {
    if (this.throwIfDestroyed(), this.rendererEventListeners.has(e)) throw new at({ source: this.constructor.name, message: `Unable to add event listener to rendererEvents "${e}" because it already exists` });
    this.rendererEventListeners.set(e, t);
  }
  destroyComponent(e = !1) {
    if (this.throwIfDestroyed(), this.subComponents.forEach((t) => {
      t.destroy();
    }), this.renderedDom) {
      this.renderedDom.elements && (this.renderedDom.elements = void 0), this.renderedDom.actions && (this.renderedDom.actions = void 0), this.renderedDom.onDestroy && this.renderedDom.onDestroy();
      const t = this.renderingRoot;
      Je(() => {
        var n;
        if (t) if (t instanceof DocumentFragment) for (; t.firstChild; ) t.removeChild(t.firstChild);
        else e ? (n = t.parentElement) == null || n.removeChild(t) : Ut(t);
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
    o && Je(() => {
      i({ propName: e, currentValue: t, newValue: n, dom: { root: o, elements: s.elements, actions: s.actions }, updateSubComponent: this.updateSubComponent });
    });
  }
}
Ue.__compEventListeners = null, Ue.__compId = null, Ue.__renderer = null, Ue.__updater = null;
const st = (r, e, t) => (n) => {
  n.__compId = r, n.__renderer = e, n.__updater = t;
}, Qe = (r) => (e, t) => {
  const n = e;
  if (typeof n.constructor != "function") throw new at({ source: "CallbackFor", message: "@CallbackFor can only be used on methods of a class!" });
  n.constructor.hasOwnProperty("__compEventListeners") && n.constructor.__compEventListeners !== null || (n.constructor.__compEventListeners = /* @__PURE__ */ new Map());
  const s = n.constructor.__compEventListeners, o = s.get(r);
  o ? o.push(t) : s.set(r, [t]);
};
function Li() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
let pt = { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
function es(r) {
  pt = r;
}
var Mi = Object.defineProperty, mo = (r, e, t) => ((n, s, o) => s in n ? Mi(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
let Ft = class {
  constructor(e) {
    mo(this, "options"), this.options = e || pt;
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
mo(Ft, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]));
const ho = /[&<>"']/, ji = new RegExp(ho.source, "g"), fo = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Bi = new RegExp(fo.source, "g"), Di = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ts = (r) => Di[r];
function $e(r, e) {
  if (e) {
    if (ho.test(r)) return r.replace(ji, ts);
  } else if (fo.test(r)) return r.replace(Bi, ts);
  return r;
}
const zi = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function Fi(r) {
  return r.replace(zi, (e, t) => (t = t.toLowerCase()) === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "");
}
const Hi = /(^|[^\[])\^/g;
function ge(r, e) {
  let t = typeof r == "string" ? r : r.source;
  e = e || "";
  const n = { replace: (s, o) => {
    let i = typeof o == "string" ? o : o.source;
    return i = i.replace(Hi, "$1"), t = t.replace(s, i), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
function ns(r) {
  try {
    r = encodeURI(r).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return r;
}
const Ht = { exec: () => null };
function rs(r, e) {
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
function tn(r, e, t) {
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
const Zt = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, go = /(?:[*+-]|\d{1,9}[.)])/, vo = ge(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, go).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Pr = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Ir = /(?!\s*\])(?:\\.|[^\[\]\\])+/, $i = ge(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Ir).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Ni = ge(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, go).getRegex(), Bn = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Rr = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, _i = ge("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Rr).replace("tag", Bn).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ss = ge(Pr).replace("hr", Zt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Bn).getRegex(), Or = { blockquote: ge(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ss).getRegex(), code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, def: $i, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hr: Zt, html: _i, lheading: vo, list: Ni, newline: /^(?: *(?:\n|$))+/, paragraph: ss, table: Ht, text: /^[^\n]+/ }, os = ge("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Zt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Bn).getRegex(), qi = { ...Or, table: os, paragraph: ge(Pr).replace("hr", Zt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", os).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Bn).getRegex() }, Ui = { ...Or, html: ge(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Rr).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Ht, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: ge(Pr).replace("hr", Zt).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", vo).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, yo = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, bo = /^( {2,}|\\)\n(?!\s*$)/, Kt = "\\p{P}\\p{S}", Yi = ge(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Kt).getRegex(), Wi = ge(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Kt).getRegex(), Qi = ge("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Kt).getRegex(), Xi = ge("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Kt).getRegex(), Zi = ge(/\\([punct])/, "gu").replace(/punct/g, Kt).getRegex(), Ki = ge(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Gi = ge(Rr).replace("(?:-->|$)", "-->").getRegex(), Ji = ge("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Gi).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), kn = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Vi = ge(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", kn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), is = ge(/^!?\[(label)\]\[(ref)\]/).replace("label", kn).replace("ref", Ir).getRegex(), as = ge(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ir).getRegex(), Lr = { _backpedal: Ht, anyPunctuation: Zi, autolink: Ki, blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, br: bo, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, del: Ht, emStrongLDelim: Wi, emStrongRDelimAst: Qi, emStrongRDelimUnd: Xi, escape: yo, link: Vi, nolink: as, punctuation: Yi, reflink: is, reflinkSearch: ge("reflink|nolink(?!\\()", "g").replace("reflink", is).replace("nolink", as).getRegex(), tag: Ji, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, url: Ht }, ea = { ...Lr, link: ge(/^!?\[(label)\]\((.*?)\)/).replace("label", kn).getRegex(), reflink: ge(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", kn).getRegex() }, or = { ...Lr, escape: ge(yo).replace("])", "~|])").getRegex(), url: ge(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, ta = { ...or, br: ge(bo).replace("{2,}", "*").getRegex(), text: ge(or.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, nn = { normal: Or, gfm: qi, pedantic: Ui }, Lt = { normal: Lr, gfm: or, breaks: ta, pedantic: ea };
var na = Object.defineProperty, $n = (r, e, t) => ((n, s, o) => s in n ? na(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
function cs(r, e, t, n) {
  const s = e.href, o = e.title ? $e(e.title) : null, i = r[1].replace(/\\([\[\]])/g, "$1");
  if (r[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const a = { type: "link", raw: t, href: s, title: o, text: i, tokens: n.inlineTokens(i) };
    return n.state.inLink = !1, a;
  }
  return { type: "image", raw: t, href: s, title: o, text: $e(i) };
}
let Cn = class {
  constructor(e) {
    $n(this, "lexer"), $n(this, "options"), $n(this, "rules"), this.options = e || pt;
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, s;
      return t[2] === "@" ? (n = $e(t[1]), s = "mailto:" + n) : (n = $e(t[1]), s = n), { type: "link", raw: t[0], text: n, href: s, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      n = tn(n.replace(/^ *>[ \t]?/gm, ""), `
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
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : tn(n, `
`) };
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(n), o = /^ /.test(n) && / $/.test(n);
      return s && o && (n = n.substring(1, n.length - 1)), n = $e(n, !0), { type: "codespan", raw: t[0], text: n };
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
    if (t) return { type: "escape", raw: t[0], text: $e(t[1]) };
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
        const s = tn(n, "#");
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
      return n = this.lexer.state.inRawBlock ? t[0] : $e(t[0]), { type: "text", raw: t[0], text: n };
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
        const i = tn(n.slice(0, -1), "\\");
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
      return s = s.trim(), /^</.test(s) && (s = this.options.pedantic && !/>$/.test(n) ? s.slice(1) : s.slice(1, -1)), cs(t, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer);
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
        let f, b = null;
        this.options.gfm && (b = /^\[[ xX]\] /.exec(u), b && (f = b[0] !== "[ ] ", u = u.replace(/^\[[ xX]\] +/, ""))), o.items.push({ type: "list_item", raw: a, task: !!b, checked: f, loose: !1, text: u, tokens: [] }), o.raw += a;
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
      return cs(n, s, n[0], this.lexer);
    }
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2])) return;
    const n = rs(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), o = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], i = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === s.length) {
      for (const a of s) /^ *-+: *$/.test(a) ? i.align.push("right") : /^ *:-+: *$/.test(a) ? i.align.push("center") : /^ *:-+ *$/.test(a) ? i.align.push("left") : i.align.push(null);
      for (const a of n) i.header.push({ text: a, tokens: this.lexer.inline(a) });
      for (const a of o) i.rows.push(rs(a, i.header.length).map((u) => ({ text: u, tokens: this.lexer.inline(u) })));
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
      if (t[2] === "@") s = $e(t[0]), o = "mailto:" + s;
      else {
        let i;
        do
          i = t[0], t[0] = ((n = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : n[0]) ?? "";
        while (i !== t[0]);
        s = $e(t[0]), o = t[1] === "www." ? "http://" + t[0] : t[0];
      }
      return { type: "link", raw: t[0], text: s, href: o, tokens: [{ type: "text", raw: s, text: s }] };
    }
  }
};
var ra = Object.defineProperty, Mt = (r, e, t) => ((n, s, o) => s in n ? ra(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
let yt = class ir {
  constructor(e) {
    Mt(this, "options"), Mt(this, "state"), Mt(this, "tokens"), Mt(this, "inlineQueue"), Mt(this, "tokenizer"), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || pt, this.options.tokenizer = this.options.tokenizer || new Cn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    const t = { block: nn.normal, inline: Lt.normal };
    this.options.pedantic ? (t.block = nn.pedantic, t.inline = Lt.pedantic) : this.options.gfm && (t.block = nn.gfm, this.options.breaks ? t.inline = Lt.breaks : t.inline = Lt.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: nn, inline: Lt };
  }
  static lex(e, t) {
    return new ir(t).lex(e);
  }
  static lexInline(e, t) {
    return new ir(t).inlineTokens(e);
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
var sa = Object.defineProperty, oa = (r, e, t) => ((n, s, o) => s in n ? sa(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, e + "", t);
let Sn = class {
  constructor(e) {
    oa(this, "options"), this.options = e || pt;
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
`, s ? '<pre><code class="language-' + $e(s) + '">' + (n ? e : $e(e, !0)) + `</code></pre>
` : "<pre><code>" + (n ? e : $e(e, !0)) + `</code></pre>
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
    const s = ns(e);
    if (s === null) return n;
    let o = `<img src="${e = s}" alt="${n}"`;
    return t && (o += ` title="${t}"`), o += ">", o;
  }
  link(e, t, n) {
    const s = ns(e);
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
}, Mr = class {
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
var ia = Object.defineProperty, Nn = (r, e, t) => ((n, s, o) => s in n ? ia(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
let bt = class ar {
  constructor(e) {
    Nn(this, "options"), Nn(this, "renderer"), Nn(this, "textRenderer"), this.options = e || pt, this.options.renderer = this.options.renderer || new Sn(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Mr();
  }
  static parse(e, t) {
    return new ar(t).parse(e);
  }
  static parseInline(e, t) {
    return new ar(t).parseInline(e);
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
          n += this.renderer.heading(this.parseInline(i.tokens), i.depth, Fi(this.parseInline(i.tokens, this.textRenderer)));
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
              const b = this.renderer.checkbox(!!m);
              l ? p.tokens.length > 0 && p.tokens[0].type === "paragraph" ? (p.tokens[0].text = b + " " + p.tokens[0].text, p.tokens[0].tokens && p.tokens[0].tokens.length > 0 && p.tokens[0].tokens[0].type === "text" && (p.tokens[0].tokens[0].text = b + " " + p.tokens[0].tokens[0].text)) : p.tokens.unshift({ type: "text", text: b + " " }) : f += b + " ";
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
var $t, ls, cr, aa = Object.defineProperty, xo = (r) => {
  throw TypeError(r);
}, Ze = (r, e, t) => ((n, s, o) => s in n ? aa(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t), lr = (r, e, t) => (((n, s, o) => {
  s.has(n) || xo("Cannot " + o);
})(r, e, "access private method"), t);
$t = /* @__PURE__ */ new WeakSet(), ls = function(r, e) {
  return (t) => {
    if (t.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
      const n = "<p>An error occurred:</p><pre>" + $e(t.message + "", !0) + "</pre>";
      return e ? Promise.resolve(n) : n;
    }
    if (e) return Promise.reject(t);
    throw t;
  };
}, cr = function(r, e) {
  return (t, n) => {
    const s = { ...n }, o = { ...this.defaults, ...s };
    this.defaults.async === !0 && s.async === !1 && (o.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), o.async = !0);
    const i = lr(this, $t, ls).call(this, !!o.silent, !!o.async);
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
const ct = new class {
  constructor(...r) {
    var e, t, n;
    e = this, (t = $t).has(e) ? xo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ze(this, "Hooks", Ft), Ze(this, "Lexer", yt), Ze(this, "Parser", bt), Ze(this, "Renderer", Sn), Ze(this, "TextRenderer", Mr), Ze(this, "Tokenizer", Cn), Ze(this, "defaults", { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null }), Ze(this, "options", this.setOptions), Ze(this, "parse", lr(this, $t, cr).call(this, yt.lex, bt.parse)), Ze(this, "parseInline", lr(this, $t, cr).call(this, yt.lexInline, bt.parseInline)), this.use(...r);
  }
  lexer(r, e) {
    return yt.lex(r, e ?? this.defaults);
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
        const s = this.defaults.renderer || new Sn(this.defaults);
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
        const s = this.defaults.tokenizer || new Cn(this.defaults);
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
function Se(r, e) {
  return ct.parse(r, e);
}
Se.options = Se.setOptions = function(r) {
  return ct.setOptions(r), Se.defaults = ct.defaults, es(Se.defaults), Se;
}, Se.getDefaults = Li, Se.defaults = pt, Se.use = function(...r) {
  return ct.use(...r), Se.defaults = ct.defaults, es(Se.defaults), Se;
}, Se.walkTokens = function(r, e) {
  return ct.walkTokens(r, e);
}, Se.parseInline = ct.parseInline, Se.Parser = bt, Se.parser = bt.parse, Se.Renderer = Sn, Se.TextRenderer = Mr, Se.Lexer = yt, Se.lexer = yt.lex, Se.Tokenizer = Cn, Se.Hooks = Ft, Se.parse = Se;
const wo = (r, e) => {
  const { showCodeBlockCopyButton: t, markdownLinkTarget: n, syntaxHighlighter: s, htmlSanitizer: o } = e || {}, i = Se(r, { async: !1, breaks: !0 });
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
    Ut(l), l.appendChild(p), u.replaceWith(l);
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
}, us = (r) => {
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
}, ko = (r) => {
  const e = "nlux-comp-copyButton";
  r instanceof HTMLButtonElement && r.classList.contains(e) ? us(r) : r.querySelectorAll(`.${e}`).forEach(us);
}, ca = (r, e) => {
  let t = !1;
  const { onComplete: n } = e || {}, s = [], o = (e != null && e.skipStreamingAnimation ? "timeout" : "animationFrame") == "timeout" ? (d) => setTimeout(d, 0) : (d) => requestAnimationFrame(d), i = document.createElement("div");
  i.classList.add("md-in-progress"), r.append(i);
  const a = () => {
    for (; i.firstChild; ) {
      const d = i.firstChild;
      d instanceof HTMLElement && ko(d), i.before(d);
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
      const h = l.currentMarkdown + m, f = wo(h, e).trim();
      if (typeof f != "string") return l.currentMarkdown = l.currentMarkdown.slice(0, -m.length), void De("Markdown parsing failed");
      if (l.previousHtml && f.length > l.previousHtml.length && f.startsWith(l.previousHtml)) {
        a();
        const b = f.slice(l.previousHtml.length).trim();
        i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(b) : b, l.currentMarkdown = m, l.previousHtml = void 0;
      } else i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(f) : f, l.currentMarkdown = h, l.previousHtml = f;
    });
  }, u);
  return { next: (d) => {
    if (t) De("Stream is already complete. No more chunks can be added");
    else for (const p of d) s.push(p);
  }, complete: () => {
    s.push(`
`), t = !0;
  }, cancel: () => {
    c && (clearInterval(c), c = void 0), t = !0, i.remove();
  }, error: () => {
    t = !0;
  } };
}, Co = (r, e) => {
  const t = document.createElement("div");
  if (t.classList.add("nlux-comp-avatarContainer"), r) {
    const n = document.createElement("div");
    n.classList.add("nlux-comp-avatarPicture"), n.style.backgroundImage = `url("${encodeURI(r)}")`, t.append(n);
  }
  return t;
}, jr = "nlux-comp-avatar", Br = (r) => {
  const e = document.createElement("div");
  return e.classList.add(jr), r.avatar || r.name ? (r.name && (e.title = r.name), r.avatar && r.avatar instanceof HTMLElement ? (e.append(r.avatar.cloneNode(!0)), e) : (e.append(Co(r.avatar)), e)) : e;
}, rn = { received: "nlux_msg_received", sent: "nlux_msg_sent" }, So = (r, e) => {
  Object.keys(rn).forEach((t) => {
    r.classList.remove(rn[t]);
  }), rn[e] && r.classList.add(rn[e]);
}, zt = { streaming: "nlux_msg_streaming", complete: "nlux_msg_complete" }, Ao = (r, e) => {
  Object.keys(zt).forEach((t) => {
    r.classList.remove(zt[t]);
  }), zt[e] && r.classList.add(zt[e]);
}, Eo = (r, e = "text", t) => {
  if (e === "markdown") {
    const n = document.createElement("div"), s = wo(r, t);
    n.innerHTML = t != null && t.htmlSanitizer ? t.htmlSanitizer(s) : s, ko(n);
    const o = document.createDocumentFragment();
    for (; n.firstChild; ) o.appendChild(n.firstChild);
    return o;
  }
  return document.createTextNode(r);
}, To = "nlux-comp-message", sn = { received: "nlux-comp-chatItem--received", sent: "nlux-comp-chatItem--sent" }, Po = (r, e) => {
  Object.keys(sn).forEach((t) => {
    r.classList.remove(sn[t]);
  }), sn[e] && r.classList.add(sn[e]);
}, on = { bubbles: "nlux-comp-chatItem--bubblesLayout", list: "nlux-comp-chatItem--listLayout" }, Io = (r, e) => {
  Object.keys(on).forEach((t) => {
    r.classList.remove(on[t]);
  }), on[e] && r.classList.add(on[e]);
}, Ro = "nlux-comp-chatItem-participantInfo", Oo = "nlux-comp-chatItem-participantName", la = (r) => {
  const e = document.createElement("div");
  e.classList.add("nlux-comp-chatItem");
  const t = { direction: r.direction, status: r.status, message: r.message, htmlSanitizer: r.htmlSanitizer };
  let n;
  if (r.avatar !== void 0) {
    const i = { name: r.name, avatar: r.avatar };
    n = Br(i);
  }
  const s = document.createElement("span");
  s.classList.add(Oo), s.textContent = r.name;
  {
    const i = document.createElement("div");
    i.classList.add(Ro), n !== void 0 && i.append(n), i.append(s), e.append(i);
  }
  Po(e, r.direction), Io(e, r.layout);
  const o = ((i) => {
    const a = document.createElement("div");
    a.classList.add(To);
    const u = i.status ? i.status : "complete";
    return Ao(a, u), So(a, i.direction), a;
  })(t);
  return e.append(o), e;
}, ds = (r, e, t) => {
  if (e.name !== t.name && typeof t.avatar == "string") {
    const n = t.name && t.name.length > 0 ? t.name[0].toUpperCase() : "", s = r.querySelector("* > .nlux-comp-avatarContainer > .avtr_ltr");
    s == null || s.replaceChildren(n);
  }
}, Lo = (r, e, t) => {
  e.avatar === t.avatar && e.name === t.name || (e.avatar !== t.avatar && ((n, s, o) => {
    if (s.avatar !== o.avatar) if (typeof o.avatar == "string" && typeof s.avatar == "string") {
      const i = n.querySelector("* > .nlux-comp-avatarContainer > .nlux-comp-avatarPicture");
      i !== null && (i.style.backgroundImage = `url("${encodeURI(o.avatar)}")`);
    } else if (typeof o.avatar == "string") {
      const i = Co(o.avatar);
      n.replaceChildren(i);
    } else o.avatar ? n.replaceChildren(o.avatar.cloneNode(!0)) : Ut(n);
  })(r, e, t), t.name ? e.name !== t.name && (r.title = t.name, ds(r, e, t)) : (r.title = "", ds(r, e, t)));
}, ua = (r, e, t) => {
  if (e.message === t.message && e.status === t.status && e.direction === t.direction || !t || !t.hasOwnProperty("message") && !t.hasOwnProperty("status") && !t.hasOwnProperty("direction")) return;
  e.direction !== t.direction && So(r, t.direction);
  const n = t.status;
  if (e.status !== n) return Ao(r, t.status), void ((s, o, i) => {
    const a = i.status;
    if (a !== "streaming" && a === "complete") {
      const u = i.message ? i.message : "", l = document.createTextNode(u);
      s.classList.add(zt[a]), Ut(s), s.append(l);
    }
  })(r, 0, t);
  n === "complete" && (e.message === t.message && e.format === t.format || ((s, o, i) => {
    o.message === i.message && o.format === i.format || (Ut(s), s.append(Eo(i.message ?? "", i.format, { htmlSanitizer: i.htmlSanitizer })));
  })(r, e, t));
}, ps = "dom/getElement";
var da = Object.defineProperty, pa = Object.getOwnPropertyDescriptor, ms = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? pa(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && da(e, t, o), o;
};
let yn = class extends Ue {
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
ms([Qe("markdown-stream-complete")], yn.prototype, "onMarkdownStreamComplete", 1), yn = ms([st("chatItem", ({ props: r, appendToRoot: e, compEvent: t }) => {
  const n = la({ ...r.domProps, htmlSanitizer: r.htmlSanitizer, message: void 0 }), s = ((c, d) => {
    const p = c.querySelector(d);
    if (!p) throw new wn({ source: ps, message: `Could not find element with query "${d}". Make sure the query provided matches an element that exists in the root element.` });
    if (!(p instanceof HTMLElement)) throw new wn({ source: ps, message: `Element with query "${d}" is not a valid HTMLElement.` });
    return p;
  })(n, ".nlux-comp-message");
  if (!s) throw new Error("Message container not found");
  const o = document.createElement("div");
  o.classList.add("nlux-markdownStream-root");
  const i = document.createElement("div");
  if (i.classList.add("nlux-markdown-container"), i.setAttribute("nlux-message-id", r.uid), o.append(i), s.append(o), r.domProps.message) {
    const c = Eo(r.domProps.message ?? "", "markdown", { markdownLinkTarget: r.markdownLinkTarget, syntaxHighlighter: r.syntaxHighlighter, htmlSanitizer: r.htmlSanitizer });
    i.append(c);
  }
  let a;
  e(n);
  let u = { ...r };
  const l = (c) => ((d, p) => {
    const m = ca(d, { syntaxHighlighter: p == null ? void 0 : p.syntaxHighlighter, htmlSanitizer: p == null ? void 0 : p.htmlSanitizer, markdownLinkTarget: p == null ? void 0 : p.markdownLinkTarget, showCodeBlockCopyButton: p == null ? void 0 : p.showCodeBlockCopyButton, skipStreamingAnimation: p == null ? void 0 : p.skipStreamingAnimation, streamingAnimationSpeed: p == null ? void 0 : p.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: p == null ? void 0 : p.waitTimeBeforeStreamCompletion, onComplete: p == null ? void 0 : p.onComplete });
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
        if (m.direction !== h.direction && Po(p, h.direction), m.layout !== h.layout && Io(p, h.layout), m.direction !== h.direction || m.status !== h.status || m.message !== h.message) {
          const f = p.querySelector(`.${To}`);
          f && ua(f, { direction: m.direction, status: m.status, message: m.message, htmlSanitizer: m.htmlSanitizer }, { direction: h.direction, status: h.status, message: h.message, htmlSanitizer: m.htmlSanitizer });
        }
        if (m.name !== h.name || m.avatar !== h.avatar) {
          const f = p.querySelector(`.${jr}`);
          if (!h.name && !h.avatar) return void (f == null ? void 0 : f.remove());
          if (f) Lo(f, { name: m.name, avatar: m.avatar }, { name: h.name, avatar: h.avatar });
          else if (h.name !== void 0 || h.avatar !== void 0) {
            const b = { name: h.name, avatar: h.avatar }, C = Br(b), v = p.querySelector(`.${Ro}`);
            v && v.prepend(C);
          }
        }
        if (m.name !== h.name) {
          const f = p.querySelector(`.${Oo}`);
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
})], yn);
const ma = (r, e) => {
  let t, n = e, s = r, o = !0;
  const i = ((f, b) => {
    let C = !1;
    if (typeof f != "function") throw new rt({ source: "x/throttle", message: "Callback must be a function" });
    return (...v) => {
      C || (f.apply(void 0, v), C = !0, setTimeout(function() {
        C = !1;
      }, b));
    };
  })(/* @__PURE__ */ ((f) => {
    let b, C;
    return (v) => {
      const y = v.target;
      if (!(y instanceof HTMLElement)) return;
      const { scrollTop: A, clientHeight: x, scrollHeight: O } = y, H = O - 30, $ = Math.ceil(A + x) >= H, T = b === void 0 || C === void 0 ? void 0 : A > b && C === O ? "down" : A < b && C === O ? "up" : void 0;
      C = O, b = A, f({ scrolledToBottom: $, scrollDirection: T });
    };
  })(({ scrolledToBottom: f, scrollDirection: b }) => {
    o ? b === "up" && (o = !1) : b === "down" && f && (o = !0);
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
  }, handleNewChatSegmentAdded: (f, b) => {
    t && (c == null || c.disconnect(), d == null || d.disconnect()), t = { uid: f, container: b }, c = new ResizeObserver(m), c.observe(b), d = new MutationObserver(h), d.observe(b, { childList: !0, subtree: !0, characterData: !0 }), n && p();
  }, handleChatSegmentRemoved: (f) => l(f), handleChatSegmentComplete: (f) => l(f), destroy: () => {
    t && (l(t.uid), t = void 0), u(s), s = void 0;
  } };
}, xt = (r) => {
  var n;
  const e = typeof r == "function" ? r.__compId : void 0;
  if (!e) throw new Error("Invalid compClass! Component should be registered before using");
  const t = (n = po.retrieve(e)) == null ? void 0 : n.model;
  if (!t || typeof t != "function") throw new Error(`Component "${e}" is not registered`);
  return { withContext: (s) => ({ create: () => new t(s, {}), withProps: (o) => ({ create: () => new t(s, o) }) }) };
}, ha = (r) => {
  const e = ["adapter", "events"], t = Object.keys(r).filter((s) => !e.includes(s)), n = {};
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    n[o] = r[o];
  }
  return n;
}, Mo = () => {
  const r = document.createElement("div");
  r.classList.add("nlux-comp-messageLoader");
  const e = document.createElement("span");
  e.classList.add("spinning-loader");
  const t = document.createElement("div");
  return t.classList.add("nlux-comp-loaderContainer"), t.appendChild(e), r.appendChild(t), r;
}, hs = (r) => {
  const e = "nlux-chatSegment";
  return r === "complete" ? `${e} nlux-chatSegment--complete` : r === "error" ? `${e} nlux-chatSegment--error` : `${e} nlux-chatSegment--active`;
}, an = (r, e) => {
  var t, n;
  return r === "assistant" ? ((t = e == null ? void 0 : e.assistant) == null ? void 0 : t.name) ?? "Assistant" : r === "user" ? ((n = e == null ? void 0 : e.user) == null ? void 0 : n.name) ?? "User" : "";
}, fa = "bubbles";
var ga = Object.defineProperty, va = Object.getOwnPropertyDescriptor, cn = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? va(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && ga(e, t, o), o;
};
let vt = class extends Ue {
  constructor(e, t) {
    super(e, t), this.chatItemCompIdsByIndex = [], this.chatItemComponentsById = /* @__PURE__ */ new Map();
  }
  addChatItem(e) {
    var s, o;
    if (this.throwIfDestroyed(), this.chatItemComponentsById.has(e.uid)) throw new Error(`CompChatSegment: chat item with id "${e.uid}" already exists`);
    const t = ((i, a, u, l) => {
      const c = a ?? fa;
      if (i.participantRole === "assistant") {
        const p = i.status === "complete" ? "complete" : "streaming";
        return i.dataTransferMode === "stream" ? { status: p, layout: c, direction: "received", name: an("assistant", { assistant: l }), avatar: l == null ? void 0 : l.avatar } : i.status === "complete" ? { status: p, layout: c, direction: "received", name: an("assistant", { assistant: l }), avatar: l == null ? void 0 : l.avatar, message: (d = i.content, typeof d == "string" ? d : typeof d == "object" ? `${d}` : d == null ? "" : typeof d.toString == "function" ? d.toString() : JSON.stringify(d)) } : { status: p, layout: c, direction: "received", name: an("assistant", { assistant: l }), avatar: l == null ? void 0 : l.avatar };
      }
      var d;
      return { status: "complete", layout: c, direction: "sent", message: i.content, name: an("user", { user: u }), avatar: u == null ? void 0 : u.avatar };
    })(e, this.getProp("conversationLayout"), this.getProp("userPersona"), this.getProp("assistantPersona"));
    if (!t) throw new Error(`CompChatSegment: chat item with id "${e.uid}" has invalid props`);
    const n = xt(yn).withContext(this.context).withProps({ uid: e.uid, domProps: t, markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed") }).create();
    this.chatItemComponentsById.set(e.uid, n), this.chatItemCompIdsByIndex.push(e.uid), this.rendered && ((o = (s = this.renderedDom) == null ? void 0 : s.elements) != null && o.chatSegmentContainer ? n.render(this.renderedDom.elements.chatSegmentContainer, this.renderedDom.elements.loaderContainer) : sr("CompChatSegment: chatSegmentContainer is not available"));
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
    Je(() => {
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
cn([Qe("loader-shown")], vt.prototype, "onLoaderShown", 1), cn([Qe("chat-segment-ready")], vt.prototype, "onChatSegmentReady", 1), cn([Qe("loader-hidden")], vt.prototype, "onLoaderHidden", 1), vt = cn([st("chatSegment", ({ props: r, compEvent: e, appendToRoot: t }) => {
  let n;
  const s = document.createElement("div");
  s.className = hs(r.status);
  const o = () => {
    if (!n) {
      n = document.createElement("div"), n.className = "nlux-chatSegment-loader-container";
      const i = Mo();
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
    i.className = hs(a), a === "active" ? (s = t.actions) == null || s.showLoader() : (o = t.actions) == null || o.hideLoader();
  }
})], vt);
let ur = class extends Ue {
  constructor(e, t) {
    super(e, t), this.chatSegmentCompIdsByIndex = [], this.chatSegmentComponentsById = /* @__PURE__ */ new Map(), t.messages && t.messages.length > 0 && this.addChatSegment("complete", t.messages);
  }
  addChatItem(e, t) {
    const n = this.chatSegmentComponentsById.get(e);
    if (!n) throw new Error(`CompConversation: chat segment with id "${e}" not found`);
    n.destroyed ? sr(`CompConversation: chat segment with id "${e}" is destroyed and cannot be used`) : n.addChatItem(t);
  }
  addChatSegment(e = "active", t) {
    this.throwIfDestroyed();
    const n = We(), s = xt(vt).withContext(this.context).withProps({ uid: n, status: e, conversationLayout: this.getProp("conversationLayout"), userPersona: this.getProp("userPersona"), assistantPersona: this.getProp("assistantPersona"), markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed") }).create();
    if (t) for (const i of t) i.role === "assistant" ? s.addChatItem({ uid: We(), participantRole: "assistant", time: /* @__PURE__ */ new Date(), dataTransferMode: "batch", status: "complete", content: i.message, serverResponse: i.serverResponse, contentType: "text" }) : i.role === "user" && s.addChatItem({ uid: We(), participantRole: "user", time: /* @__PURE__ */ new Date(), status: "complete", content: i.message, contentType: "text" });
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
    if (typeof e == "number" && e < 0) return void sr(`Invalid value provided for 'historyPayloadSize' : "${e}"! Value must be a positive integer or 'max'.`);
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
ur = ((r, e, t, n) => {
  for (var s, o = e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = s(o) || o);
  return o;
})([st("conversation", ({ appendToRoot: r }) => {
  const e = document.createElement("div");
  return e.classList.add("nlux-chatSegments-container"), r(e), { elements: { segmentsContainer: e }, actions: {} };
}, () => {
})], ur);
const _n = { typing: "nlux-composer--typing", "submitting-prompt": "nlux-composer--submitting", "submitting-conversation-starter": "nlux-composer--submitting", waiting: "nlux-composer--waiting" }, jo = (r, e) => {
  Object.keys(_n).forEach((t) => {
    r.classList.remove(_n[t]);
  }), r.classList.add(_n[e]);
}, ya = (r) => {
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
  })()), n.append(Mo()), e.append(t), e.append(n), jo(e, r.status), r.status !== "submitting-conversation-starter" && r.status !== "submitting-prompt" || (t.disabled = !0, n.disabled = !0), r.status === "waiting" && (n.disabled = !0), r.status === "typing" && (n.disabled = r.disableSubmitButton ?? t.value === ""), e;
}, An = (r, e) => {
  let t = !1;
  const n = e ? r.querySelector(e) : r, s = n instanceof HTMLElement ? n : void 0;
  if (!s) throw new wn({ source: "dom/listenTo", message: `Could not find element with query "${e}". Make sure the query provided matches an element that exists in the root element.` });
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
var ba = Object.defineProperty, xa = Object.getOwnPropertyDescriptor, jt = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? xa(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && ba(e, t, o), o;
};
let lt = class extends Ue {
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
jt([Qe("command-enter-key-pressed")], lt.prototype, "handleCommandEnterKeyPressed", 1), jt([Qe("enter-key-pressed")], lt.prototype, "handleEnterKeyPressed", 1), jt([Qe("send-message-clicked")], lt.prototype, "handleSendButtonClick", 1), jt([Qe("text-updated")], lt.prototype, "handleTextInputUpdated", 1), lt = jt([st("composer", ({ appendToRoot: r, props: e, compEvent: t }) => {
  const n = ya(e.domCompProps);
  r(n);
  const [s, o] = An(n, ":scope > textarea").on("input", t("text-updated")).on("keydown", (c) => {
    const d = c.key === "Enter" && !c.isComposing, p = c.altKey || c.ctrlKey || c.metaKey || c.shiftKey;
    if (d && !p) return void t("enter-key-pressed")(c);
    const m = c.getModifierState("Meta") && c.key === "Enter", h = c.getModifierState("Control") && c.key === "Enter";
    (m || h) && t("command-enter-key-pressed")(c);
  }).get(), [i, a] = An(n, ":scope > button").on("click", t("send-message-clicked")).get();
  if (!(i instanceof HTMLButtonElement)) throw new Error("Expected a button element");
  if (!(s instanceof HTMLTextAreaElement)) throw new wn({ source: (u = "composer", l = "render", `#${u}/${l}`), message: "Expected a textarea element" });
  var u, l;
  return { elements: { root: n, textInput: s, sendButton: i }, actions: { focusTextInput: () => Je(() => {
    s.focus(), s.setSelectionRange(s.value.length, s.value.length);
  }) }, onDestroy: () => {
    o(), a();
  } };
}, ({ propName: r, currentValue: e, newValue: t, dom: n }) => {
  var s;
  r === "domCompProps" && ((s = n.elements) != null && s.root) && ((o, i, a) => {
    if (i.status === a.status && i.message === a.message && i.placeholder === a.placeholder && i.autoFocus === a.autoFocus && i.disableSubmitButton === a.disableSubmitButton) return;
    if (i.status !== a.status) return jo(o, a.status), void ((l, c, d) => {
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
})], lt);
const dr = (r) => {
  if (typeof r != "object" || r === null) return !1;
  const e = r;
  return (typeof e.streamText == "function" || typeof e.batchText == "function") && ["stream", "batch"].includes(e.dataTransferMode) && typeof e.id == "string" && typeof e.info == "object" && e.info !== null && typeof e.preProcessAiBatchedMessage == "function" && typeof e.preProcessAiStreamedChunk == "function";
}, Le = (r, e = 1) => {
  setTimeout(() => {
    r();
  }, e);
}, wa = (r, e, t, n, s, o, i, a, u) => new Promise((l) => {
  const c = We(), d = [], p = [];
  let m = !1, h = !1, f = !1;
  const b = dr(t), C = { next: (v) => {
    if (h || f) return;
    let y, A;
    if (b) {
      const x = v, O = t.preProcessAiStreamedChunk(x, n);
      O != null && (y = O, A = x, d.push(y), p.push(A));
    } else y = v, d.push(y);
    y != null ? (m || m || (m = !0, Le(() => {
      s.forEach((x) => {
        x({ uid: c, status: "streaming", time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" });
      });
    })), Le(() => {
      i.forEach((x) => {
        x({ chunk: y, messageId: c, serverResponse: A });
      });
    })) : De("Adapter returned an undefined or null value from streamText. This chunk will be ignored.");
  }, complete: () => {
    h || f || (f = !0, Le(() => {
      const v = { uid: c, status: "complete", content: d, contentType: "text", serverResponse: void 0, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" };
      o.forEach((y) => {
        y(v);
      }), l();
    }), Le(() => {
      const v = { uid: r, status: "complete", items: [e, { uid: c, status: "complete", contentType: "text", content: d, serverResponse: p, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" }] };
      a.forEach((y) => {
        y(v);
      });
    }));
  }, error: (v) => {
    h || f || (h = !0, Le(() => {
      u.forEach((y) => {
        y("failed-to-stream-content", v);
      }), l();
    }));
  } };
  t.streamText(e.content, C, n);
}), ka = (r, e, t) => {
  if (!r) return (() => {
    const v = /* @__PURE__ */ new Set(), y = We(), A = { uid: y, status: "complete", items: [] };
    return Le(() => {
      v.forEach((x) => {
        x(A);
      }), v.clear();
    }), { segment: A, observable: { on: (x, O) => {
      x === "complete" && v.add(O);
    }, removeListener: (x, O) => {
      v.delete(O);
    }, destroy: () => {
      v.clear();
    }, get segmentId() {
      return y;
    } }, dataTransferMode: "batch" };
  })();
  const n = e;
  if (n.streamText === void 0 && n.batchText === void 0 && n.streamServerComponent === void 0) return ((v) => {
    const y = /* @__PURE__ */ new Set(), A = We(), x = { uid: A, status: "error", items: [] };
    return Le(() => {
      y.forEach((O) => O(v)), y.clear();
    }), { segment: x, dataTransferMode: "stream", observable: { on: (O, H) => {
      O === "error" && y.add(H);
    }, removeListener: (O, H) => {
      y.delete(H);
    }, destroy: () => {
      y.clear();
    }, get segmentId() {
      return A;
    } } };
  })("no-data-transfer-mode-supported");
  const s = We(), o = ((v) => ({ uid: We(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: v, contentType: "text" }))(r);
  let i, a, u, l, c, d, p = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  Le(() => {
    p != null && p.size && (p.forEach((v) => {
      v(o);
    }), p.clear(), p = void 0);
  });
  const f = ((v) => {
    const y = [], A = v, x = v;
    (A == null ? void 0 : A.streamText) === void 0 && (x == null ? void 0 : x.streamServerComponent) === void 0 || y.push("stream"), (A == null ? void 0 : A.batchText) !== void 0 && y.push("batch");
    const O = dr(v) ? v : void 0, H = (O == null ? void 0 : O.dataTransferMode) ?? void 0, $ = y.length === 1 ? y[0] : "stream";
    return H ?? $;
  })(e);
  ((v) => "streamServerComponent" in v ? "server-component" : "text")(e) === "server-component" ? (u = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), ((v, y, A, x, O, H, $, T) => new Promise((I, Y) => {
    try {
      const M = y.content, z = We(), B = "assistant", J = "streaming", fe = /* @__PURE__ */ new Date(), re = "stream";
      let ie, N;
      const S = () => {
        Le(() => {
          H.forEach((q) => {
            ie && N && q({ ...ie, content: N, status: "complete" });
          });
        }, 20);
        const F = { uid: v, status: "complete", items: [y, ie] };
        Le(() => {
          $.forEach((q) => {
            q(F);
          }), I();
        }, 20);
      }, R = () => {
        T.forEach((F) => {
          F("failed-to-stream-server-component", new Error("Failed to load content"));
        });
      };
      N = A.streamServerComponent(M, x, { onServerComponentReceived: S, onError: R }), ie = { uid: z, content: N, contentType: "server-component", participantRole: B, status: J, time: fe, dataTransferMode: re }, Le(() => {
        O.forEach((F) => {
          F(ie);
        });
      }, 10);
    } catch (M) {
      De(M);
      const z = M instanceof Error ? M : typeof M == "string" ? new Error(M) : new Error("Unknown error");
      Le(() => {
        T.forEach((B) => B("failed-to-load-content", z));
      });
    }
  }))(s, o, e, t, a, u, m, h).finally(() => {
    Le(() => C());
  })) : f === "batch" ? (i = /* @__PURE__ */ new Set(), (async (v, y, A, x, O, H, $) => {
    try {
      const T = y.content, I = dr(A) ? A : void 0, Y = I !== void 0, M = We(), z = "assistant", B = "complete", J = /* @__PURE__ */ new Date(), fe = "batch";
      let re;
      if (Y) {
        const S = await I.batchText(T, x), R = I.preProcessAiBatchedMessage(S, x);
        R != null && (re = { uid: M, content: R, contentType: "text", serverResponse: S, participantRole: z, status: B, time: J, dataTransferMode: fe });
      } else re = { uid: M, content: await A.batchText(T, x), contentType: "text", serverResponse: void 0, participantRole: z, status: B, time: J, dataTransferMode: fe };
      if (!re) throw new Error("Response from adapter was undefined or cannot be processed");
      const ie = re;
      Le(() => {
        O.forEach((S) => {
          S(ie);
        });
      });
      const N = { uid: v, status: "complete", items: [y, re] };
      Le(() => {
        H.forEach((S) => {
          S(N);
        });
      });
    } catch (T) {
      De(T);
      const I = T instanceof Error ? T : typeof T == "string" ? new Error(T) : new Error("Unknown error");
      Le(() => {
        $.forEach((Y) => Y("failed-to-load-content", I));
      });
    }
  })(s, o, e, t, i, m, h).finally(() => {
    Le(() => C());
  })) : (l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), wa(s, o, e, t, l, c, d, m, h).finally(() => {
    Le(() => C());
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
}, Ca = { "data-transfer-mode-not-supported": "Requested data transfer mode is not supported", "no-data-transfer-mode-supported": "Adapter does not support any valid data transfer modes", "connection-error": "Connection error", "invalid-credentials": "Invalid credentials", "invalid-api-key": "Invalid API key", "http-server-side-error": "HTTP server side error", "http-client-side-error": "HTTP client side error", "failed-to-load-content": "Failed to load content", "failed-to-stream-content": "Failed to stream content", "failed-to-stream-server-component": "Failed to stream server component", "failed-to-render-content": "Failed to display content" }, pr = (r, e) => r !== void 0 && r.length > 0 || e !== void 0 && e > 0 ? "active" : "starting", fs = "nlux-comp-welcomeMessage-text", Bo = (r, e) => {
  const t = r.querySelector(`.${fs}`);
  if (e !== "" && e !== void 0) if (t) t.textContent = e;
  else {
    const n = document.createElement("div");
    n.classList.add(fs), n.textContent = e, r.appendChild(n);
  }
  else t == null || t.remove();
}, Do = "nlux-comp-welcomeMessage-personaName", mr = (r) => {
  const e = document.createElement("div");
  e.classList.add("nlux-comp-welcomeMessage");
  const t = Br({ name: r.name, avatar: r.avatar });
  e.append(t);
  const n = document.createElement("div"), s = document.createTextNode(r.name);
  return n.append(s), n.classList.add(Do), e.append(n), Bo(e, r.message), e;
}, gs = () => mr({ name: "", avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAAewgAAHsIAXgkHaEAABj0SURBVHic7Z13vBxV2ce/Z29ugEQMEAICQUBAkBqqlCiRKqC0gApKE14poh8VUCmihv4SCB2CVAtFQBR9UZpCaMIL0ouAGIIEQgsJya27e/zjmb117+yUc+bM7J7v53Nys3dnzjx3dn9z2nOeR2mt8Xg89Sm5NsDjyTNeIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCKNsVdwzY4Ktqgej+v6RHwpQ8lqr2jFD3q+9UAPrGHDcwN8F6JD3hr1m0LHjgYnAWsAqwGrA8sDKwNLAOGAMsCTQPuDkMtANdAALgUXAPOBtYC4wB5gNvI5m7gBLhxjOiK8VwMAdpQOPrf1eD31PD/5dcJwa8lr+P+D4Ie8pCxtZ249/z3id1gTSoowHNgEmBWUDNGsBYy1eswy8BrwIPAs8BTyBiMeTEi+QdCwFfA6YAmwLbAaMHf7Ytsoo4NNB2XPA758GHgHuB2bBwFbGExUvkPisAOwK7ALsAKyQrR4is3FQjgR6EaH8CfgL8E+HdhUKL5BoLAHsBUwFdkczxq05sWkHdgwKiFhuBm7DtyyheIGEsyFwMHCA0nol18YYZLugnAfcAlwD3OPUopziBVKf3dEcCXzJtSGWGQ0cEJTHgV8A1wI9Dm3KFX4dZDD7A48iffVmF8dQNgdmAv8CTkCmoFseLxDhq8CTaH09Wm+J1rRwmYjWZyBC+TEy/mpZWl0gOwEPorkRzaT+BS1f0ExAcybwKvCtNDe5yLSqQNYAbkZzF5ptc/BlzHOZiGYm0vXcKukNLyqtKJD9gRdB7+v6m1ewsiXoR4CTE931gtJKAvkEcAua69Es4f77VthyKuLOsk3cD6CItIpADgReRjM1B1+wZigbo3kIOCPm51A4mn0dZDRwFVp/w7UhTcoJyETHQYizZNPRzALZXMGNwJquDWlyNgeeAw5DFhmbimYVyBHA5WjXZrQMJcRdZUvgaMe2GKUZBXIZWh/p2ogW5SjEf20v4H23ppiheQSiWBL4E5odXJvS4kxGNm7tiuxJKTTNIpBV0PwNWNu1IR4AVkKmgr8I3OnWlHTYE8iwfdqGGD6uWA/0LGS7qydf/AX4BvAb14YkxZ5AqtZqFkSAWwctR0s71OWcXwPLAhe7NiQJ1gSiKnamkHTf0qaaDDxg5SIe01yErEmd59qQuBR1DLI1WntxFItzkX7F+Y7tiEURXU0mAQ+5NsKTiBnIGlVhKFYLolgDzcPYmwLw2Ody4EPgJsd2RMKeQLThMYji42j+riQWlafY3Ai8hWaWa0MaYVEgButSgOYBJCaVpzn4G7AWmn+7NiSMYnSxNLcBG7k2w2OUEjKWXJ0cR1HJdxdLRho/Q3x7PM3HSsDdwHZ5dSzNexdrd+CnRmry5JXPA+eiOda1IfXIcxdrRTS3uzbCkwk/QMKh5u7zznMX6y7ys07TDTwJvAC8gkxTdiIxb5dGIqtvCHyWfD908sxtwIqA+SQfKcjrh3kG+RiU3wr8DvgrkrimEasAOyN74L9g0a5mpATcgWy6yg1Km16vCOg9bdlkJyq2AB4zakx8LgQuQPFaorPllu4AnIL0sT3ROREJWBeb9pPnm7bFpkCWSXimmovMbrjgLuBYFM+JKQlr0YP+fwzirOeJjP400pWNRfvJHxq3xJ43bzLdzQBnaQaO04pzLXixXKy0noUExF7VdOVNyu+QMZ1z7A2C48daWg/N9xzEeOpGxg3n2roVwDPARmieyUFMqyKUDYDvxD7PAnmZJQL4rYNrfoCkKbvb6lWkUfoQ2AIRi6cRmguBZVybYXFHYQxJK74JrG/Nlvp8BGyGUrMzvGYPmm1Av4qEQvWEcxWaqS4NyMM07yh05tsxe4FtUBmkShZHSyT3BgCLgc+h+Sf5asHzyD7AlmjtbFYzDwuF15O1C7tSnwee6/vijrK4vaQKDN9+/CqyK/JRexduGn4PrOzq4m4H6dL/38+aDfX5X+Dvfa+0li9wnC5hFJSITpUrUvfwTE6PAd81e9GmZCXgOFcXt7YOUj7l41EOewAJNJYVz1JvhV4H/7S3oUeV+lu/NA2LVqieClSrfWIZgUfJ2epxDukAxgHlsINGTVto/MIWW5C6T82BZXM0kzOePtwtdHqwtwrlavqlkJJClatSH6qRTfvlYFo172UMmh81/E5ZwGUXa3rGySm/D/o/oTe3qlFdZekShT/1R6ZNich6ysHdbXgj5qD12TlI3pn3ciKattBbaQFrAlHhZX0F2zU4xlzRvAicH3oTNX0th+pJ2IoooKIpdVZQOrh2NULRnKA0CzO7H8UsYxR8O+wYG7hqQX6eaRMNBygNkYpSqN4qqrsCpRi3XQFKUeqsyKBfqThPNQ0cl4OuTN7LSVRhxGIBFwuFy6MyXfy5AQmkHAvVXUGPLolIosxwlRSqqwK9gbDi94l/Afwcd46aRWAFYE80f8jqgi4WquL72KRrPY6JbaECtKbUUZaWoNF4pKRQZY3qLMvJye09PgdP6byXE8I/DLO4WCj8trVrDmc6Wn2Q7FQFPRXU4l70Um2hhwHQ0SstTRs1YSbhN8DZyMYrT30+i+zgfDmLi2XdguxKdmkKysApqR5XJYVa3CuD9lEj3KpSCdVZ7h+zJBdHjT+mrqH5OSqrC2U9SD86w6b4TDSdqetpK6E6yjJ1O6qEbh9QlmiDSlXeL5VM2X1dDroxeS8Ho1HDfm+BLMP+LIuE8cmCHpShHN4KEUFXBb0UlDrL/X9bSUFZB+MUI1cD+DuapxE3HE99at+lP9m+UJZjkP2wN109lIuArtS1aEQEo0qU3u/qdx3RA94f3UZ13GgRibmcKGcjTpyekTmQDARizRerctyYob/6K9lF+hiPbIZKR5uCKqiPumWMoZT8TiHiCFoXVElEMrpNumIm0HyAPCk99elA7k9f2NK26R3GL5LVIH05shPHLzEljrKm9GGXiGNUqV8c0P+zTZwbSx92oxb3BouLqaZ6ay3UL1L/Dc3NGCRJqFUsBm0Y1DLtYes6wy/M6anO14gYequoBd39r8MIFgbVRz3Sooxtly5musb5YuCHqWpofqZiORpjVi3IbhldZxaal1M9uUvB+seCbqmxLeKwSclYRXWUUYuClqTWFUvGG0gYIs/IHASMtXmBLGaxSsCO1q4zmNNSnd2mpOVY2CNf7ji+WDVGlaBLnBX12HZx8EouknOQiCue+jyI5YmfLGaxtiCbweabpIlO0iZOiiwMxnxJxDGgLrrK4q84ph10NalI7kH+Lr+yPpw7Ucr6GCSLhcLtM1o8ujDxuUoG5OqjQBxRu1VhtJVQnRXZX5J0b4kwIwcLc3krj5DBAB2yGYN8LoNraGBmorMCb93Sop7+1yZQoEsKtbgsriqlxDNbM7HmzF1I3gCmZHUx212sNsS5zDa3AgtinzVQHBUtU7YmCcYxalEP+mPt0F5Kspi4CHFiPNCscYVkIRIMvAcN8gTB6ijEdhdrPTTLZdDkxu+GBDaqjl5xFzHVcgwlqLa0qBd6ddKW5MwcdGtcl/mI+83sure5104ja3sWaxNr9ffzGoqHY59VKqG6yqjuqt24WNDfUnX0Uh07WkQTxHOIyItoHgK2tWVizqkAW1EaIA5N315b1V016eYzCIuRFTVoJtmrP0BxOTrOF1ye4qqnIhucbLUcQwkcG1VHL3rMKLEj3kPvdCTBTCuyA6iX++5XTRwaiR5TrprvHgfYTn9gP4S95ur+PlMEFBK9pKPc/zoralPJXRX0Um2oeE+9PwNzgE/aMS63HKPh/mEPFI3cv4rF7jH2u1jrWqtf+APwfuSjg8AKqm/3X5bqCCgp8e1qU0kG7afSWj5aN6G4pO6nVNVSLM/D2pzFmghMtFY/gFKXRD5WB0+anir0OBIH9LVYqrOMVu3yAVc1kZoyxVVoPR2JMtjsvIlSX6vbOdBBy5HBR2hTf2tYrBs089D67khBx6rBzawEgeEcaaOPUuBG31Vm0JRaoyJ7E9I5YxYBzUJgu4afZwbYnOZdzeq0H1wZ41gg6NpUcC8QkDvfq2UGRsWa+p2BpisH0662ygfApsC/6t63kUMwrTDSG2mwGZt3ouVQlDMjH6tA9VZkHSIkQEnmlIDuqtgWhBqKUMpoPS0HoUBtlPlonUQce6D1LTY+IpuDdJsOdg8iLgeNCWat6DYQlNo0NXtqrUh09/izgROBj1myzAWdwBYoXq/7blWH3ZvrgCVsGGWzizXeYvcqRkYqJb5Q8t/8URu091Ti3IMqmhNz0B0y+ZluS1jLUR3x3IPRLIO2EyfL5iyWrRx8H4G6OdKRqraQpNM+ClZFgpWtDiyP7HlfEom99T4wF3gJeE7si4kCKuIuodtV1FX2i9CcBKwY+3p5Q7ELWj0JBGIZ0lSMHDehDbg0+P9oG6bZzFG4jKV6f43Wjdega12r3sTi2BHYE/FG3pBaLeFdoPlI9+92xIFyfuSrlZBZthLo6AHo/gfLW04z4BDCdk6GBxU5A9mbzoCfRrEW1YTD214C1jFer2JD5EndmLIeeUpwYCyrvp9qLBK175vAZ1JaugC4EjgXrd8C+r/0mvofvAZKSJariCjNw8DW6Ux1g4afopgmr4Z/SCr8u7kcgxeJ53Jlxfi412YXy4ai/4FWjcVRaz3izZcfjdanYK7LMg44FjgamAac1fCMwIlRlXWchcz90Xp2Qhtdcp1Salq/BgaLQdXrag1m6HqQlS6WzUH6khYGchdGOjCeONZDciVegmZFCwPQpYAzkVyEjVulmrgrVSJOjb4O/Mz5IDtemQUcgtaoEYr8bSOePwHNkUN+Z+Vhb3Ml3bSiO9HcEOkDiJ6x9lDgeWq5Em0hdm2JdA2/2vD42nTvyDM3Q8vPySjauQFepVGMtMafxU/q/M7Kd9nmOohpg69hQBS9kOs2RlqWc9CZpxcuATcis2LTGx6tNTH6iLshX748Mx/YhjBH/8af3xJIt3UoVibxXeQHSYbiVGN1aW4H/WVj9cXnHMTT+fCGR0YXyb9A7wnZZV+KySsodgb1LlBfCHqkNwZxJhn6Q7jIMJWE69G8Ham70Zg7AJfiqHEYkadoo3buuZ1sExRF5U0k/NPs8MMafoAfA75vwqCo2BRIxWBd6QLC9fN7JIlPXvgycJnhOi9FotvnhbeBzYAFouOQCYfGhInfyqZ0mwJpPF6IxqPAiwbq+SWy8Jc3jgS+Y7jO75KP9An/RuISzDNUX1jrYfKB3IdNgXQaquenBuo4j3yHzbkQ2MpwnV9HwgW54lFgEtKCmGB3wteoyoauMwibAllsoI5XgDtT1nEsGfdbE3IX5j1SvwFcYLjOKPwKEfxCg3U2mnE01WMZhE2BmMhmcnLK8/chynRqPlga8d8yzfeQblwWaCTt9kGG612dxtEUew1fE7ArkPdSnv8f4Lcpzt8CO184m+yORA40zUyku/OQhbpr3IF4JUSPExCdKDNzprr0g7ApkHdSnv+DFOeuBNyf8vqusNUlehqYDByBhA8yxYPIbNzuiMu/DQ6LcExLCeQ1INqej+G0Aw8DS6W4vksmIW7strgCWBNZpLwvYR2vI+GHvoBsB7CZTHNvoqXPiL8PJwI294P8J8W5ab4g9yF91iJzGeKSYuVDR2Z8rgrK2siXfAuki7QyMh6qBUjtQB52s4EngVnIDJVN77WBRJ0Cf9fGxfMokPuRjLhJuBXx9Sk6bci44YAMrvVKUK4e8Luao6nG0uA3IqsQPfnrXBsG2OxizU54XtL1iiuQWatmYX+yCN1an56guBQHwLdiHFt/P3tKbArkNeLf4FOIGq1kMNOx2293xTWuDXBMY2fOfl6zYYBNgcwnnvv1C5DIY/cMZDGwGdmMfPmOZckUZDwUFSszaLa9eeMYnSTn3HnACQnOKxKXuzbAEXH80+Yhfl/GsS2QZyIety/xu1anUwwXkrR8EvGraiXGIdO7UXmWAnrzAjwV4ZgTib/iPSU4r1U4z7UBGXMg8XYIPm3LENsCeaLB+6cjO8TisAytl2lpBeINWIvOUTGP/4cVK7AvkDcYeXbheJI5I/6V4q6Sp+EM1wZkxKbIgmUcHrNhCGSz5XZogs1XgZ1I5mV7A9kkBs0jE4jmk1R04m4ZnoPFYBVZCOTR4OdLSKuxDnBPgnpmAF8zZVRBMbX1OK+MRhZI4zDLhiE1bLqa1LgJmc1K84eciexraHU+gQxgf+XaEEscSPzuc1K3pEhk0YK8SzpxnAz82JAtzUAzp2BLMm2fpDcSmbyH/TmQZKvrzcyqNJfPWY1JwPoxz3meZK5JkcmzQL6ERCLxDOds1wZYIEmUyz8at2IIeRXIXmTwxxeYtYCdXRthkKVJ5tpvJS/hQPIokKOA21wbUQDOcW2AQY4gfmzdN2i8EJ2avAnkMvpTannC2Qg7AR5ckKR7lSagR2TyIpDtkdQAWYWnaRaaYSyyD8mSFl1n2pB6uBbIpsje63uJP4PhkeBsm7s2IiVJImc+j3jwWieLhcKhrI3sG/8KktPCk44ZSNCFIrIt0lWMy0zThoyEC4HcgOyU85hhMtISW/NotUiSLmIVuNawHSPioot1rYNrNjs2ohnaZiOkBYnL9dgLhzQMFwK5BLNBjT0yFpns2oiYJI0gmenEhAuBaNxEHG92MuuXG2ATGgejrsdjyGxnZriaxZpOdpH5WoX1kImPIpBUzJkH6HAlkIW0brQOm1zs2oAIfBEJcxqXl7Hs2l4Pl+sgJjJHeQYzAZjm2ogGXJnwPCexz1wK5F2KOfuSd36CpH/IIyci8Xbj8hJ2I8iPiOuV9JMcX79ZudG1AXWYQPLNXseYNCQOrgWygNYI/pY1n0cy3eaJPyc8707EFckJrgUCcD7iW+MxywXILr08cDXJvSf2NWlIXPIgEJBsrB7z/J9rAxBv3UMTnns8sMigLbHJi0CeonkjdbhkZdzmSl+d5IlU55CDDMV5EQhIfg8riRhbnAOQHXtZsyTwQIrz9zNlSBryJJBukmeX8oRzOdmnpnsAmJjw3KuwGE40DnkSCEhznHS2wxPOfcCnMrxW0o1cH5CjbGF5EwjIrEW3ayOakHYkDGzSp3oUPg48AmyXoo69yJGfXh4F0kG85Cme6CyPbKxa00LdmyHbYLdKUce5pBu3GCePAgHpZnk3FDtMQBLOTDFY57HA40g2rKQ8T7LoJlbJq0BA3Asy2ZjfgowF/gb8KGU9OyHpLdJOx+qgrtyRZ4EA7Ijk6/bY4SzgIeQ+R2UMkobiXuAuYGsDduwBvGWgHuO4CNoQh3eQ/QOZ7wNoIbYB7gYeRIKxPYBkjF0MLAGMR+JWbYhET9kNSQlnip/hyFM3CkprSxMGh8SNJBnKMcBFJiv0hLIAcfFYElgWez2NWzC5IHit+e9y3rtYNS6mGLvlmoVxyL6N8dj7jjxBTlbLwyiKQEASy//OtREeI8yhIHGFiyQQgKlYzknnsc6HyFpJh2M7IlE0gYCs0j7u2ghPIjqBz5LTGat6FFEgIFOLT7o2whOLbkQcL7s2JA5FFUgZudn/79oQTySqyOdVuIXfogoEoBe56fe7NsTTkMMR95bCUWSBgLgoTAF+79YMTwhzgGtcG5GUogukxt5I+jZP/rCax9w2zSIQgKOBH7o2wjMMp0EX0tJMAgHJ/LoX3sExT6zu2oA0NJtAAP4AbIBESvG4J0mKtdzQjAIBeAXJQXGFa0M8rI6EHyokzSqQGkcgQekWuzakxVnPtQFJaXaBgAROWwfpenncsIFrA5LSCgIBeBMZvB+Gz4/oAi+QgnA18GkkYrgnOz7j2oCktJpAAOYh23gPBd5wbEursC4Sl6twtKJAalwLrI1kZPLdLrssB6zl2ogktLJAQFywT0MCqZ1FwVd9c866rg1IQqsLpMZ7SIrhNZEkmPPcmtOUFHLB0AtkMO8g2Xc/BXwbCSzQClSwvwW2kGshXiD16QAuRSKUb4+MVz5yaZAl7gC+DqwBrIbs1DwBO6kHxlio0zpFiYuVB8YjEQD3BnYBRrs1JzGPALche2heCTlucySC4lTMOBxegu1stRbiYnmBJGMlYGckZOcU7KYUSMsiZNflX5C9GS8lqGNP4CtBSRqNczIS5tQeXiC5pA3Z+jsZCWezKdJdccX7wDNILpCHkODSHxiqe1Xgm4hQ4owp7iVe/N9keIEUhvWBjZF4tusgawCfRCIWmqILeB2YDfwTCYjwNPAC2Thn7oDkP9wLWecYiReALTOxyQuk0IxDumYrBz+XRRLajEeCRI9GVptLyF77XmTjVw8SbO09pCWYB8wF3kZm3VwzDhHJVMTnanlkVuwtxKXneCQKjX0KJRCPpwnw07weTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwj/Ba/47FkhCYEqAAAAAElFTkSuQmCC" });
var Sa = Object.defineProperty, Aa = Object.getOwnPropertyDescriptor, vs = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? Aa(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && Sa(e, t, o), o;
};
let bn = class extends Ue {
  constructor(r, e) {
    super(r, e), this.updateConversationStarters = (t) => {
    };
  }
  conversationStarterClicked(r) {
    this.getProp("onConversationStarterSelected")(r);
  }
};
vs([Qe("conversation-starter-selected")], bn.prototype, "conversationStarterClicked", 1), bn = vs([st("conversationStarters", ({ appendToRoot: r, props: e, compEvent: t }) => {
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
    const [a, u] = An(n, `:scope > :nth-child(${i + 1})`).on("click", () => {
      t("conversation-starter-selected")(o);
    }).get();
    s.push(u);
  }), { elements: {}, actions: {}, onDestroy: () => {
    s.forEach((o) => o()), s = [], n.remove();
  } };
}, ({}) => {
})], bn);
let hr = class extends Ue {
  constructor(r, e) {
    super(r, e), this.setConversationStarters(e.conversationStarters);
  }
  setConversationStarters(r) {
    var e;
    if (r || this.conversationStartersComp) {
      if (r && !this.conversationStartersComp) {
        const t = this.getProp("onConversationStarterSelected");
        return this.conversationStartersComp = xt(bn).withContext(this.context).withProps({ conversationStarters: r, onConversationStarterSelected: t }).create(), void this.addSubComponent(this.conversationStartersComp.id, this.conversationStartersComp, "conversationStartersContainer");
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
hr = ((r, e, t, n) => {
  for (var s, o = e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = s(o) || o);
  return o;
})([st("launchPad", ({ appendToRoot: r, props: e }) => {
  const t = { assistantPersona: e.assistantPersona, conversationStarters: e.conversationStarters, showGreeting: e.showGreeting !== !1 };
  let n;
  if (t.showGreeting) if (e.assistantPersona) {
    const i = e.assistantPersona;
    n = mr({ name: i.name, avatar: i.avatar, message: i.tagline });
  } else n = gs();
  n && (r(n), t.greetingElement = n);
  const s = document.createElement("div");
  s.classList.add("nlux-conversationStarters-container"), r(s);
  const o = (i = !0) => {
    t.showGreeting = i, t.greetingElement && (t.greetingElement.remove(), t.greetingElement = void 0), i && (t.greetingElement = t.assistantPersona ? mr({ name: t.assistantPersona.name, avatar: t.assistantPersona.avatar, message: t.assistantPersona.tagline }) : gs(), t.greetingElement && s.insertAdjacentElement("beforebegin", t.greetingElement));
  };
  return { elements: { conversationStartersContainer: s }, actions: { resetGreeting: (i = !0) => {
    o(i);
  }, updateAssistantPersona: (i) => {
    const a = t.assistantPersona;
    t.assistantPersona = i, (a || i) && t.showGreeting && (i && a ? ((u, l, c) => {
      if (l.message !== c.message || l.name !== c.name || l.avatar !== c.avatar) {
        if (l.message !== c.message && Bo(u, c.message), l.name !== c.name) {
          const d = u.querySelector(`.${Do}`);
          if (d) {
            const p = document.createTextNode(c.name);
            d.replaceChildren(p);
          }
        }
        if (l.avatar !== c.avatar || l.name !== c.name) {
          const d = u.querySelector(`.${jr}`);
          d && Lo(d, { name: l.name, avatar: l.avatar }, { name: c.name, avatar: c.avatar });
        }
      }
    })(t.greetingElement, { name: a == null ? void 0 : a.name, avatar: a == null ? void 0 : a.avatar, message: a == null ? void 0 : a.tagline }, { name: i.name, avatar: i.avatar, message: i.tagline }) : o());
  } }, onDestroy: () => {
    var i;
    (i = t.greetingElement) == null || i.remove(), s.remove();
  } };
}, ({}) => {
})], hr);
var Ea = Object.defineProperty, Ta = Object.getOwnPropertyDescriptor, qn = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? Ta(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && Ea(e, t, o), o;
};
let ln = class extends Ue {
  constructor(r, { conversationLayout: e, autoScroll: t, streamingAnimationSpeed: n, visible: s = !0, composer: o, assistantPersona: i, userPersona: a, showGreeting: u, conversationStarters: l, initialConversationContent: c, syntaxHighlighter: d, htmlSanitizer: p, markdownLinkTarget: m, showCodeBlockCopyButton: h, skipStreamingAnimation: f }) {
    if (super(r, { conversationLayout: e, visible: s, autoScroll: t, streamingAnimationSpeed: n, assistantPersona: i, userPersona: a, conversationStarters: l, showGreeting: u, initialConversationContent: c, composer: o, syntaxHighlighter: d, htmlSanitizer: p, markdownLinkTarget: m, showCodeBlockCopyButton: h, skipStreamingAnimation: f }), this.prompt = "", this.handleConversationStarterClick = (b) => {
      this.composer.setDomProps({ status: "submitting-conversation-starter" }), this.composer.handleTextChange(b.prompt), this.composer.handleSendButtonClick();
    }, this.handleSegmentCountChange = (b) => {
      var v, y;
      if (this.segmentCount === b) return;
      this.segmentCount = b;
      const C = pr(this.getProp("initialConversationContent") || void 0, this.segmentCount);
      this.chatRoomStatus !== C && (this.chatRoomStatus = C, this.executeDomAction("updateChatRoomStatus", this.chatRoomStatus), this.chatRoomStatus === "active" ? (v = this.launchPad) != null && v.id && (this.removeSubComponent((y = this.launchPad) == null ? void 0 : y.id), this.launchPad = void 0) : this.addLaunchPad(this.getProp("showGreeting") ?? !0, this.getProp("assistantPersona"), this.getProp("conversationStarters"), this.handleConversationStarterClick));
    }, this.segmentCount = c && c.length > 0 ? 1 : 0, this.chatRoomStatus = pr(c, this.segmentCount), this.chatRoomStatus === "starting" && this.addLaunchPad(u, i, l, this.handleConversationStarterClick), this.addConversation(i, a, c), this.addComposer(o == null ? void 0 : o.placeholder, o == null ? void 0 : o.autoFocus, o == null ? void 0 : o.disableSubmitButton, o == null ? void 0 : o.submitShortcut), !this.conversation || !this.composer) throw new Error("Chat room not initialized — An error occurred while initializing key components.");
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
    Je(() => {
      var e, t;
      const r = (t = (e = this.renderedDom) == null ? void 0 : e.elements) == null ? void 0 : t.conversationContainer;
      if (r instanceof HTMLElement) {
        this.autoScrollController = ma(r, this.getProp("autoScroll") ?? !0);
        let n = 0;
        const s = 20, o = () => {
          r.scrollHeight > r.clientHeight && (r.scrollTo({ behavior: "smooth", top: 5e4 }), clearInterval(i));
        }, i = setInterval(() => {
          n >= s ? clearInterval(i) : (o(), n++);
        }, 10);
      }
      this.context.emit("ready", { aiChatProps: ha(this.context.aiChatProps) });
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
    this.launchPad = xt(hr).withContext(this.context).withProps({ showGreeting: r, assistantPersona: e, conversationStarters: t, onConversationStarterSelected: n }).create(), this.addSubComponent(this.launchPad.id, this.launchPad, "launchPadContainer");
  }
  addConversation(r, e, t) {
    this.conversation = xt(ur).withContext(this.context).withProps({ assistantPersona: r, userPersona: e, messages: t, conversationLayout: this.getProp("conversationLayout"), markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), onSegmentCountChange: this.handleSegmentCountChange }).create(), this.addSubComponent(this.conversation.id, this.conversation, "conversationContainer");
  }
  addComposer(r, e, t, n) {
    this.composer = xt(lt).withContext(this.context).withProps({ props: { domCompProps: { status: "typing", placeholder: r, autoFocus: e, disableSubmitButton: t, submitShortcut: n } }, eventListeners: { onTextUpdated: (s) => this.handleComposerTextChange(s), onSubmit: () => this.handleComposerSubmit() } }).create(), this.addSubComponent(this.composer.id, this.composer, "composerContainer");
  }
  handleComposerSubmit() {
    const r = this.props.composer;
    (({ context: e, composerInstance: t, conversation: n, autoScrollController: s, messageToSend: o, resetComposer: i, setComposerAsWaiting: a }) => () => {
      var l, c;
      const u = n.addChatSegment();
      try {
        const d = t.getProp("domCompProps");
        t.setDomProps({ ...d, status: "submitting-prompt" });
        const p = { aiChatProps: e.aiChatProps, conversationHistory: n.getConversationContentForAdapter((c = (l = e.aiChatProps) == null ? void 0 : l.conversationOptions) == null ? void 0 : c.historyPayloadSize) }, m = ka(o, e.adapter, p);
        m.observable.on("error", (h, f) => {
          n.removeChatSegment(u), s == null || s.handleChatSegmentRemoved(u), i(!1), e.exception(h), e.emit("error", { errorId: h, message: Ca[h], errorObject: f });
        }), m.observable.on("userMessageReceived", (h) => {
          n.addChatItem(u, h), e.emit("messageSent", { uid: h.uid, message: h.content }), Je(() => {
            if (s) {
              const f = n.getChatSegmentContainer(u);
              f && s.handleNewChatSegmentAdded(u, f);
            }
          });
        }), m.dataTransferMode === "batch" ? m.observable.on("aiMessageReceived", (h) => {
          const f = typeof h.content == "string", b = { ...h, content: f ? "" : h.content };
          n.addChatItem(u, b), f && n.addChunk(u, b.uid, h.content, h.serverResponse), n.completeChatSegment(u), e.emit("messageReceived", { uid: h.uid, message: h.content }), i(!0);
        }) : (m.observable.on("aiMessageStreamStarted", (h) => {
          n.addChatItem(u, h), a(), e.emit("messageStreamStarted", { uid: h.uid });
        }), m.observable.on("aiChunkReceived", (h) => {
          const { messageId: f, chunk: b, serverResponse: C } = h;
          n.addChunk(u, f, b, C);
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
        De(d), i(!1);
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
qn([Qe("conversation-container-clicked")], ln.prototype, "messagesContainerClicked", 1), qn([Qe("chat-room-ready")], ln.prototype, "onChatRoomReady", 1), ln = qn([st("chatRoom", ({ appendToRoot: r, compEvent: e, props: t }) => {
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
  u.classList.add("nlux-chatRoom-container"), l(pr(t.initialConversationContent)), u.append(i), u.style.display = a ? "" : "none";
  const [c, d] = An(u, ":scope > .nlux-conversation-container").on("click", e("conversation-container-clicked")).get();
  return r(u), e("chat-room-ready")(), { elements: { composerContainer: s, conversationContainer: n, launchPadContainer: o }, actions: { updateChatRoomStatus: (p) => {
    l(p);
  } }, onDestroy: () => {
    d();
  } };
}, ({ propName: r, newValue: e, dom: { elements: t } }) => {
})], ln);
const Pa = (r) => {
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
let ys = class extends Ue {
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
ys = ((r, e, t, n) => {
  for (var s, o = e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = s(o) || o);
  return o;
})([st("exceptionsBox", ({ props: r, appendToRoot: e }) => {
  const t = (() => {
    const s = document.createElement("div");
    return s.classList.add("nlux-comp-exceptionBox"), s;
  })();
  e(t);
  let n = Pa(t);
  return { elements: { root: t }, actions: { displayException: (s) => {
    n == null || n.displayException(s);
  } }, onDestroy: () => {
    n == null || n.destroy(), t.remove(), n = void 0;
  } };
}, () => {
})], ys);
const Ia = (r) => {
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
}, et = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (r) => {
  const e = 16 * Math.random() | 0;
  return (r == "x" ? e : 3 & e | 8).toString(16);
}), Fe = (r) => {
  typeof r != "string" ? r && typeof r.toString == "function" ? console.warn(`[nlux] ${r.toString()}`) : console.warn("[nlux]") : console.warn(`[nlux] ${r}`);
}, bs = [], Yt = (r) => {
  bs.includes(r) || (bs.push(r), Fe(r));
}, Ra = (r) => {
  const e = "nlux-chatSegment";
  return r === "complete" ? `${e} nlux-chatSegment--complete` : r === "error" ? `${e} nlux-chatSegment--error` : `${e} nlux-chatSegment--active`;
}, fr = { received: "nlux_msg_received", sent: "nlux_msg_sent" }, gr = { streaming: "nlux_msg_streaming", complete: "nlux_msg_complete" }, xs = (r) => {
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
}, zo = (r) => {
  const e = "nlux-comp-copyButton";
  r instanceof HTMLButtonElement && r.classList.contains(e) ? xs(r) : r.querySelectorAll(`.${e}`).forEach(xs);
};
function Oa() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
let mt = { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
function ws(r) {
  mt = r;
}
var La = Object.defineProperty, Fo = (r, e, t) => ((n, s, o) => s in n ? La(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class Nt {
  constructor(e) {
    Fo(this, "options"), this.options = e || mt;
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
Fo(Nt, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]));
const Ho = /[&<>"']/, Ma = new RegExp(Ho.source, "g"), $o = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, ja = new RegExp($o.source, "g"), Ba = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ks = (r) => Ba[r];
function Ne(r, e) {
  if (e) {
    if (Ho.test(r)) return r.replace(Ma, ks);
  } else if ($o.test(r)) return r.replace(ja, ks);
  return r;
}
const Da = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function za(r) {
  return r.replace(Da, (e, t) => (t = t.toLowerCase()) === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "");
}
const Fa = /(^|[^\[])\^/g;
function ve(r, e) {
  let t = typeof r == "string" ? r : r.source;
  e = e || "";
  const n = { replace: (s, o) => {
    let i = typeof o == "string" ? o : o.source;
    return i = i.replace(Fa, "$1"), t = t.replace(s, i), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
function Cs(r) {
  try {
    r = encodeURI(r).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return r;
}
const _t = { exec: () => null };
function Ss(r, e) {
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
function un(r, e, t) {
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
const Gt = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, No = /(?:[*+-]|\d{1,9}[.)])/, _o = ve(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, No).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Dr = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, zr = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Ha = ve(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", zr).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), $a = ve(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, No).getRegex(), Dn = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Fr = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Na = ve("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Fr).replace("tag", Dn).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), As = ve(Dr).replace("hr", Gt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Dn).getRegex(), Hr = { blockquote: ve(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", As).getRegex(), code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, def: Ha, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hr: Gt, html: Na, lheading: _o, list: $a, newline: /^(?: *(?:\n|$))+/, paragraph: As, table: _t, text: /^[^\n]+/ }, Es = ve("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Gt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Dn).getRegex(), _a = { ...Hr, table: Es, paragraph: ve(Dr).replace("hr", Gt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Es).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Dn).getRegex() }, qa = { ...Hr, html: ve(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Fr).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: _t, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: ve(Dr).replace("hr", Gt).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", _o).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, qo = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Uo = /^( {2,}|\\)\n(?!\s*$)/, Jt = "\\p{P}\\p{S}", Ua = ve(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Jt).getRegex(), Ya = ve(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Jt).getRegex(), Wa = ve("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Jt).getRegex(), Qa = ve("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Jt).getRegex(), Xa = ve(/\\([punct])/, "gu").replace(/punct/g, Jt).getRegex(), Za = ve(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ka = ve(Fr).replace("(?:-->|$)", "-->").getRegex(), Ga = ve("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ka).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), En = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Ja = ve(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", En).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ts = ve(/^!?\[(label)\]\[(ref)\]/).replace("label", En).replace("ref", zr).getRegex(), Ps = ve(/^!?\[(ref)\](?:\[\])?/).replace("ref", zr).getRegex(), $r = { _backpedal: _t, anyPunctuation: Xa, autolink: Za, blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, br: Uo, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, del: _t, emStrongLDelim: Ya, emStrongRDelimAst: Wa, emStrongRDelimUnd: Qa, escape: qo, link: Ja, nolink: Ps, punctuation: Ua, reflink: Ts, reflinkSearch: ve("reflink|nolink(?!\\()", "g").replace("reflink", Ts).replace("nolink", Ps).getRegex(), tag: Ga, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, url: _t }, Va = { ...$r, link: ve(/^!?\[(label)\]\((.*?)\)/).replace("label", En).getRegex(), reflink: ve(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", En).getRegex() }, vr = { ...$r, escape: ve(qo).replace("])", "~|])").getRegex(), url: ve(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, ec = { ...vr, br: ve(Uo).replace("{2,}", "*").getRegex(), text: ve(vr.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, dn = { normal: Hr, gfm: _a, pedantic: qa }, Bt = { normal: $r, gfm: vr, breaks: ec, pedantic: Va };
var tc = Object.defineProperty, Un = (r, e, t) => ((n, s, o) => s in n ? tc(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
function Is(r, e, t, n) {
  const s = e.href, o = e.title ? Ne(e.title) : null, i = r[1].replace(/\\([\[\]])/g, "$1");
  if (r[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const a = { type: "link", raw: t, href: s, title: o, text: i, tokens: n.inlineTokens(i) };
    return n.state.inLink = !1, a;
  }
  return { type: "image", raw: t, href: s, title: o, text: Ne(i) };
}
class Tn {
  constructor(e) {
    Un(this, "lexer"), Un(this, "options"), Un(this, "rules"), this.options = e || mt;
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
      n = un(n.replace(/^ *>[ \t]?/gm, ""), `
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
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : un(n, `
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
        const s = un(n, "#");
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
        const i = un(n.slice(0, -1), "\\");
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
      return s = s.trim(), /^</.test(s) && (s = this.options.pedantic && !/>$/.test(n) ? s.slice(1) : s.slice(1, -1)), Is(t, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer);
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
        let f, b = null;
        this.options.gfm && (b = /^\[[ xX]\] /.exec(u), b && (f = b[0] !== "[ ] ", u = u.replace(/^\[[ xX]\] +/, ""))), o.items.push({ type: "list_item", raw: a, task: !!b, checked: f, loose: !1, text: u, tokens: [] }), o.raw += a;
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
      return Is(n, s, n[0], this.lexer);
    }
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2])) return;
    const n = Ss(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), o = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], i = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === s.length) {
      for (const a of s) /^ *-+: *$/.test(a) ? i.align.push("right") : /^ *:-+: *$/.test(a) ? i.align.push("center") : /^ *:-+ *$/.test(a) ? i.align.push("left") : i.align.push(null);
      for (const a of n) i.header.push({ text: a, tokens: this.lexer.inline(a) });
      for (const a of o) i.rows.push(Ss(a, i.header.length).map((u) => ({ text: u, tokens: this.lexer.inline(u) })));
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
}
var nc = Object.defineProperty, Dt = (r, e, t) => ((n, s, o) => s in n ? nc(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class tt {
  constructor(e) {
    Dt(this, "options"), Dt(this, "state"), Dt(this, "tokens"), Dt(this, "inlineQueue"), Dt(this, "tokenizer"), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || mt, this.options.tokenizer = this.options.tokenizer || new Tn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    const t = { block: dn.normal, inline: Bt.normal };
    this.options.pedantic ? (t.block = dn.pedantic, t.inline = Bt.pedantic) : this.options.gfm && (t.block = dn.gfm, this.options.breaks ? t.inline = Bt.breaks : t.inline = Bt.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: dn, inline: Bt };
  }
  static lex(e, t) {
    return new tt(t).lex(e);
  }
  static lexInline(e, t) {
    return new tt(t).inlineTokens(e);
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
var rc = Object.defineProperty, sc = (r, e, t) => ((n, s, o) => s in n ? rc(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, e + "", t);
class Pn {
  constructor(e) {
    sc(this, "options"), this.options = e || mt;
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
    const s = Cs(e);
    if (s === null) return n;
    let o = `<img src="${e = s}" alt="${n}"`;
    return t && (o += ` title="${t}"`), o += ">", o;
  }
  link(e, t, n) {
    const s = Cs(e);
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
class Nr {
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
var oc = Object.defineProperty, Yn = (r, e, t) => ((n, s, o) => s in n ? oc(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class nt {
  constructor(e) {
    Yn(this, "options"), Yn(this, "renderer"), Yn(this, "textRenderer"), this.options = e || mt, this.options.renderer = this.options.renderer || new Pn(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Nr();
  }
  static parse(e, t) {
    return new nt(t).parse(e);
  }
  static parseInline(e, t) {
    return new nt(t).parseInline(e);
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
          n += this.renderer.heading(this.parseInline(i.tokens), i.depth, za(this.parseInline(i.tokens, this.textRenderer)));
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
              const b = this.renderer.checkbox(!!m);
              l ? p.tokens.length > 0 && p.tokens[0].type === "paragraph" ? (p.tokens[0].text = b + " " + p.tokens[0].text, p.tokens[0].tokens && p.tokens[0].tokens.length > 0 && p.tokens[0].tokens[0].type === "text" && (p.tokens[0].tokens[0].text = b + " " + p.tokens[0].tokens[0].text)) : p.tokens.unshift({ type: "text", text: b + " " }) : f += b + " ";
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
var qt, Rs, yr, ic = Object.defineProperty, Yo = (r) => {
  throw TypeError(r);
}, Ke = (r, e, t) => ((n, s, o) => s in n ? ic(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t), br = (r, e, t) => (((n, s, o) => {
  s.has(n) || Yo("Cannot " + o);
})(r, e, "access private method"), t);
qt = /* @__PURE__ */ new WeakSet(), Rs = function(r, e) {
  return (t) => {
    if (t.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
      const n = "<p>An error occurred:</p><pre>" + Ne(t.message + "", !0) + "</pre>";
      return e ? Promise.resolve(n) : n;
    }
    if (e) return Promise.reject(t);
    throw t;
  };
}, yr = function(r, e) {
  return (t, n) => {
    const s = { ...n }, o = { ...this.defaults, ...s };
    this.defaults.async === !0 && s.async === !1 && (o.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), o.async = !0);
    const i = br(this, qt, Rs).call(this, !!o.silent, !!o.async);
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
const ut = new class {
  constructor(...r) {
    var e, t, n;
    e = this, (t = qt).has(e) ? Yo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ke(this, "Hooks", Nt), Ke(this, "Lexer", tt), Ke(this, "Parser", nt), Ke(this, "Renderer", Pn), Ke(this, "TextRenderer", Nr), Ke(this, "Tokenizer", Tn), Ke(this, "defaults", { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null }), Ke(this, "options", this.setOptions), Ke(this, "parse", br(this, qt, yr).call(this, tt.lex, nt.parse)), Ke(this, "parseInline", br(this, qt, yr).call(this, tt.lexInline, nt.parseInline)), this.use(...r);
  }
  lexer(r, e) {
    return tt.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return nt.parse(r, e ?? this.defaults);
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
        const s = this.defaults.renderer || new Pn(this.defaults);
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
        const s = this.defaults.tokenizer || new Tn(this.defaults);
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
        const s = this.defaults.hooks || new Nt();
        for (const o in t.hooks) {
          if (!(o in s)) throw new Error(`hook '${o}' does not exist`);
          if (o === "options") continue;
          const i = o, a = t.hooks[i], u = s[i];
          Nt.passThroughHooks.has(o) ? s[i] = (l) => {
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
function Ae(r, e) {
  return ut.parse(r, e);
}
Ae.options = Ae.setOptions = function(r) {
  return ut.setOptions(r), Ae.defaults = ut.defaults, ws(Ae.defaults), Ae;
}, Ae.getDefaults = Oa, Ae.defaults = mt, Ae.use = function(...r) {
  return ut.use(...r), Ae.defaults = ut.defaults, ws(Ae.defaults), Ae;
}, Ae.walkTokens = function(r, e) {
  return ut.walkTokens(r, e);
}, Ae.parseInline = ut.parseInline, Ae.Parser = nt, Ae.parser = nt.parse, Ae.Renderer = Pn, Ae.TextRenderer = Nr, Ae.Lexer = tt, Ae.lexer = tt.lex, Ae.Tokenizer = Tn, Ae.Hooks = Nt, Ae.parse = Ae;
const Wo = (r, e) => {
  const { showCodeBlockCopyButton: t, markdownLinkTarget: n, syntaxHighlighter: s, htmlSanitizer: o } = e || {}, i = Ae(r, { async: !1, breaks: !0 });
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
}, Qo = "nlux-comp-message", Os = { received: "nlux-comp-chatItem--received", sent: "nlux-comp-chatItem--sent" }, ac = "nlux-comp-chatItem--bubblesLayout", cc = "nlux-comp-chatItem--listLayout", lc = (r, e) => {
  let t = !1;
  const { onComplete: n } = e || {}, s = [], o = (e != null && e.skipStreamingAnimation ? "timeout" : "animationFrame") == "timeout" ? (d) => setTimeout(d, 0) : (d) => requestAnimationFrame(d), i = document.createElement("div");
  i.classList.add("md-in-progress"), r.append(i);
  const a = () => {
    for (; i.firstChild; ) {
      const d = i.firstChild;
      d instanceof HTMLElement && zo(d), i.before(d);
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
      const h = l.currentMarkdown + m, f = Wo(h, e).trim();
      if (typeof f != "string") return l.currentMarkdown = l.currentMarkdown.slice(0, -m.length), void Fe("Markdown parsing failed");
      if (l.previousHtml && f.length > l.previousHtml.length && f.startsWith(l.previousHtml)) {
        a();
        const b = f.slice(l.previousHtml.length).trim();
        i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(b) : b, l.currentMarkdown = m, l.previousHtml = void 0;
      } else i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(f) : f, l.currentMarkdown = h, l.previousHtml = f;
    });
  }, u);
  return { next: (d) => {
    if (t) Fe("Stream is already complete. No more chunks can be added");
    else for (const p of d) s.push(p);
  }, complete: () => {
    s.push(`
`), t = !0;
  }, cancel: () => {
    c && (clearInterval(c), c = void 0), t = !0, i.remove();
  }, error: () => {
    t = !0;
  } };
}, uc = function(r, e) {
  const { uid: t, status: n, responseRenderer: s, markdownOptions: o, initialMarkdownMessage: i, markdownContainersController: a } = r, [u, l] = je([]), c = xe(null), d = xe(null), p = xe(null), m = xe(null), [h, f] = je();
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
    return p.current = lc(C, { syntaxHighlighter: o == null ? void 0 : o.syntaxHighlighter, htmlSanitizer: o == null ? void 0 : o.htmlSanitizer, markdownLinkTarget: o == null ? void 0 : o.markdownLinkTarget, showCodeBlockCopyButton: o == null ? void 0 : o.showCodeBlockCopyButton, skipStreamingAnimation: o == null ? void 0 : o.skipStreamingAnimation, streamingAnimationSpeed: o == null ? void 0 : o.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: o == null ? void 0 : o.waitTimeBeforeStreamCompletion, onComplete: o == null ? void 0 : o.onStreamComplete }), i && p.current.next(i), () => {
      a.deleteStreamingDomElement(t);
    };
  }, []), le(() => () => {
    d.current = null, p.current = null, m.current = null, f(void 0);
  }, []), Xt(e, () => ({ streamChunk: (C) => {
    var v, y;
    m.current && ((v = m.current) == null || v.call(m, C)), typeof C == "string" && ((y = p.current) == null || y.next(C));
  }, completeStream: () => {
    var C;
    (C = p.current) == null || C.complete();
  }, cancelStream: () => {
    var C;
    (C = p.current) == null || C.cancel();
  } }), []);
  const b = s || void 0;
  return w.jsxs("div", { className: `${Qo} ${gr[n]} ${fr.received}`, children: [b && w.jsx(b, { uid: t, status: n, containerRef: c, content: u, contentType: "text", serverResponse: [], dataTransferMode: "stream" }), !b && w.jsx("div", { className: "nlux-markdownStream-root", ref: c })] });
}, Xo = (r, e) => {
  if (!e || e === "Enter") {
    const t = r.key === "Enter" && !r.nativeEvent.isComposing, n = r.altKey || r.ctrlKey || r.metaKey || r.shiftKey;
    return t && !n;
  }
  return !!(e === "CommandEnter" && r.key === "Enter" && (r.getModifierState("Control") || r.getModifierState("Meta")));
}, dc = (r) => {
  const { markdownOptions: e } = r, t = xe(null), n = V(() => r.content ? Wo(r.content, { syntaxHighlighter: e == null ? void 0 : e.syntaxHighlighter, htmlSanitizer: e == null ? void 0 : e.htmlSanitizer, markdownLinkTarget: e == null ? void 0 : e.markdownLinkTarget, showCodeBlockCopyButton: e == null ? void 0 : e.showCodeBlockCopyButton }) : "", [r.content, e == null ? void 0 : e.markdownLinkTarget, e == null ? void 0 : e.syntaxHighlighter, e == null ? void 0 : e.htmlSanitizer, e == null ? void 0 : e.showCodeBlockCopyButton]);
  le(() => {
    t.current && (e == null ? void 0 : e.showCodeBlockCopyButton) !== !1 && zo(t.current);
  }, [n, t.current, e == null ? void 0 : e.showCodeBlockCopyButton]);
  const s = V(() => e != null && e.htmlSanitizer ? e.htmlSanitizer(n) : n, [n, e == null ? void 0 : e.htmlSanitizer]), o = he((l) => {
    if (!r.canResubmit) return;
    const c = l.currentTarget.textContent;
    return c ? Xo(l, r.submitShortcutKey) ? (l.preventDefault(), void (r.onResubmit && r.onResubmit(c))) : void (l.key === "Escape" && (l.preventDefault(), l.currentTarget.textContent = r.content, l.currentTarget.blur())) : void 0;
  }, [r.canResubmit, r.onResubmit, r.content]), i = he((l) => {
    r.canResubmit && (l.preventDefault(), l.currentTarget.textContent = r.content, l.currentTarget.blur());
  }, [r.canResubmit, r.content]), a = he((l) => {
    if (!r.canResubmit) return;
    l.preventDefault();
    const c = document.createRange();
    c.selectNodeContents(l.currentTarget);
    const d = window.getSelection();
    d == null || d.removeAllRanges(), d == null || d.addRange(c);
  }, [r.canResubmit]), u = r.canResubmit ? "editable-markdown-container" : "";
  return w.jsx(Zo, { children: w.jsx("div", { className: "nlux-markdownStream-root" + (u ? ` ${u}` : ""), children: w.jsx("div", { className: "nlux-markdown-container", ref: t, dangerouslySetInnerHTML: { __html: s }, contentEditable: r.canResubmit, onKeyDown: o, onBlur: i, onFocus: a }) }) });
};
class Zo extends Ai {
  constructor() {
    super(...arguments), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(e) {
    Fe("Markdown rendering error occurred. This could be due to a malformed markdown content, or it could be because the page requires an HTML sanitizer. Please check the error message for more details and consider configuring NLUX with a compatible sanitizer."), this.props.onMarkdownRenderingError && this.props.onMarkdownRenderingError(e);
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}
const Ls = (r) => w.jsx(Zo, { children: w.jsx(dc, { ...r }) }), Ko = (r) => {
  const e = typeof r.avatar == "string", t = !e && xn(r.avatar);
  return w.jsxs("div", { className: "nlux-comp-avatar", children: [t && r.avatar, !t && e && w.jsx("div", { className: "nlux-comp-avatarContainer", children: r.avatar && w.jsx("div", { className: "nlux-comp-avatarPicture", style: { backgroundImage: `url("${encodeURI(r.avatar)}")` } }) })] });
}, pc = function(r, e) {
  var C, v, y, A, x, O, H, $;
  const t = xe(null);
  Xt(e, () => ({ streamChunk: (T) => setTimeout(() => {
    var I;
    return (I = t == null ? void 0 : t.current) == null ? void 0 : I.streamChunk(T);
  }), completeStream: () => setTimeout(() => {
    var T;
    return (T = t == null ? void 0 : t.current) == null ? void 0 : T.completeStream();
  }), cancelStream: () => {
    var T;
    return (T = t == null ? void 0 : t.current) == null ? void 0 : T.cancelStream();
  } }), []);
  const n = r.contentType === "server-component", s = r.direction === "received", o = r.direction === "sent", i = r.dataTransferMode === "stream", a = r.isPartOfInitialSegment, u = he(() => {
    var T;
    return (T = r.onMarkdownStreamRendered) == null ? void 0 : T.call(r, r.uid);
  }, [r.uid]);
  le(() => {
    var T;
    i || n || a || ((T = r.onMarkdownStreamRendered) == null || T.call(r, r.uid));
  }, []);
  const l = function(T) {
    const { uid: I, status: Y, dataTransferMode: M, contentType: z, fetchedContent: B, streamedContent: J, streamedServerResponse: fe, fetchedServerResponse: re, direction: ie, messageOptions: N } = T;
    if ((N == null ? void 0 : N.responseRenderer) !== void 0) {
      if (M === "stream") {
        const F = { uid: I, status: Y, dataTransferMode: M, contentType: z, content: J ?? [], serverResponse: fe ?? [] };
        return () => {
          const q = N.responseRenderer;
          return w.jsx(q, { ...F });
        };
      }
      const S = xn(B), R = { uid: I, status: "complete", dataTransferMode: M, contentType: z, content: B ? S ? [] : [B] : [], serverComponent: S ? B : void 0, serverResponse: re ? [re] : [] };
      return () => {
        const F = N.responseRenderer;
        return w.jsx(F, { ...R });
      };
    }
    if (ie === "sent") {
      if (typeof B == "string") {
        const S = B;
        return () => w.jsx(w.Fragment, { children: S });
      }
      return () => "";
    }
    if (typeof B == "string") {
      const S = B;
      return () => w.jsx(Ls, { messageUid: I, content: S, markdownOptions: { syntaxHighlighter: N == null ? void 0 : N.syntaxHighlighter, htmlSanitizer: N == null ? void 0 : N.htmlSanitizer, markdownLinkTarget: N == null ? void 0 : N.markdownLinkTarget, showCodeBlockCopyButton: N == null ? void 0 : N.showCodeBlockCopyButton, skipStreamingAnimation: N == null ? void 0 : N.skipStreamingAnimation } });
    }
    return xn(B) ? () => w.jsx(w.Fragment, { children: B }) : () => "";
  }(r), c = function(T) {
    var I;
    return he(() => {
      var M, z, B;
      if (((M = T.messageOptions) == null ? void 0 : M.promptRenderer) === void 0) return w.jsx(Ls, { messageUid: T.uid, content: T.fetchedContent, markdownOptions: { htmlSanitizer: (z = T.messageOptions) == null ? void 0 : z.htmlSanitizer }, canResubmit: (B = T.messageOptions) == null ? void 0 : B.editableUserMessages, submitShortcutKey: T.submitShortcutKey, onResubmit: (J) => {
        T.onPromptResubmit && T.onPromptResubmit(J);
      } });
      const Y = T.messageOptions.promptRenderer;
      return w.jsx(Y, { uid: T.uid, prompt: T.fetchedContent, onResubmit: (J) => {
        T.onPromptResubmit && T.onPromptResubmit(J);
      } });
    }, [(I = T.messageOptions) == null ? void 0 : I.promptRenderer, T.fetchedContent, T.uid]);
  }(r), d = V(() => Qt(uc), []), p = function(T) {
    const I = V(() => w.jsxs("div", { className: "nlux-comp-chatItem-participantInfo", children: [T.avatar !== void 0 && w.jsx(Ko, { name: T.name, avatar: T.avatar }), w.jsx("span", { className: "nlux-comp-chatItem-participantName", children: T.name })] }), [T.avatar, T.name]);
    return () => w.jsx(w.Fragment, { children: I });
  }(r), m = `nlux-comp-chatItem ${r.direction ? Os[r.direction] : Os.received} ${r.layout === "bubbles" ? ac : cc}`, h = r.status ? gr[r.status] : gr.rendered, f = r.direction ? fr[r.direction] : fr.received, b = `${Qo} ${h} ${f}`;
  return w.jsxs("div", { className: m, children: [w.jsx(p, {}), s && i && !n && w.jsx(d, { uid: r.uid, status: r.status, ref: t, direction: r.direction, responseRenderer: (C = r.messageOptions) == null ? void 0 : C.responseRenderer, markdownContainersController: r.markdownContainersController, markdownOptions: { syntaxHighlighter: (v = r.messageOptions) == null ? void 0 : v.syntaxHighlighter, htmlSanitizer: (y = r.messageOptions) == null ? void 0 : y.htmlSanitizer, markdownLinkTarget: (A = r.messageOptions) == null ? void 0 : A.markdownLinkTarget, showCodeBlockCopyButton: (x = r.messageOptions) == null ? void 0 : x.showCodeBlockCopyButton, skipStreamingAnimation: (O = r.messageOptions) == null ? void 0 : O.skipStreamingAnimation, streamingAnimationSpeed: (H = r.messageOptions) == null ? void 0 : H.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: ($ = r.messageOptions) == null ? void 0 : $.waitTimeBeforeStreamCompletion, onStreamComplete: u } }, "do-not-change"), s && i && n && w.jsx("div", { className: b, children: r.fetchedContent }), s && !i && w.jsx("div", { className: b, children: w.jsx(l, {}) }), o && w.jsx("div", { className: b, children: w.jsx(c, {}) })] });
}, Ms = (r) => typeof r == "string" || typeof r == "number" || typeof r == "boolean" || r == null, pn = (r, e) => {
  var t, n;
  return r === "assistant" ? ((t = e == null ? void 0 : e.assistant) == null ? void 0 : t.name) ?? "Assistant" : r === "user" ? ((n = e == null ? void 0 : e.user) == null ? void 0 : n.name) ?? "User" : "";
}, mn = (r, e) => {
  var t, n;
  return r === "assistant" ? (t = e == null ? void 0 : e.assistant) == null ? void 0 : t.avatar : r === "user" ? (n = e == null ? void 0 : e.user) == null ? void 0 : n.avatar : void 0;
}, mc = function(r, e) {
  const { chatSegment: t, containerRef: n } = r, [s, o] = je(!1), i = V(() => /* @__PURE__ */ new Map(), []), a = V(() => /* @__PURE__ */ new Map(), []), u = xe(/* @__PURE__ */ new Map()), l = xe(/* @__PURE__ */ new Map());
  ((m, h, f, b) => {
    le(() => {
      if (m.length === 0) return b.clear(), h.current.clear(), void f.current.clear();
      const C = new Set(b.keys()), v = new Set(m.map((y) => y.uid));
      C.forEach((y) => {
        v.has(y) || b.delete(y);
      }), new Set(h.current.keys()).forEach((y) => {
        v.has(y) || (h.current.delete(y), f.current.delete(y));
      });
    }, [m]);
  })(t.items, u, l, i), Xt(e, () => ({ streamChunk: (m, h) => {
    const f = i.get(m);
    if (f != null && f.current) {
      const b = f.current.streamChunk;
      (a.get(m) ?? []).forEach((C) => {
        b(C);
      }), a.delete(m), b(h);
    } else {
      const b = a.get(m) ?? [];
      a.set(m, [...b, h]);
    }
  }, completeStream: (m) => {
    const h = i.get(m);
    h != null && h.current ? (h.current.completeStream(), i.delete(m)) : o(!0);
  }, cancelStreams: () => {
    a.clear(), i.forEach((m) => {
      var h;
      (h = m.current) == null || h.cancelStream();
    });
  } }), []), le(() => {
    a.size > 0 && a.forEach((m, h) => {
      const f = i.get(h);
      f != null && f.current && (m.forEach((b) => {
        var C;
        (C = f == null ? void 0 : f.current) == null || C.streamChunk(b);
      }), a.delete(h), s && (f.current.completeStream(), o(!1)));
    });
  });
  const c = V(() => t.status !== "active" ? null : w.jsx("div", { className: "nlux-chatSegment-loader-container", children: r.Loader }), [t.status, r.Loader]), d = V(() => Qt(pc), []), p = he((m) => {
    var h;
    (h = r.onMarkdownStreamRendered) == null || h.call(r, t.uid, m);
  }, []);
  return t.items.length === 0 ? null : w.jsxs("div", { ref: n, className: Ra(t.status), children: [t.items.map((m) => hc(r, d, t, m, i, l, u, p)), c] });
}, hc = function(r, e, t, n, s, o, i, a) {
  var p;
  const u = r.isInitialSegment;
  let l = s.get(n.uid);
  l || (l = nr(), s.set(n.uid, l));
  let c = n.content, d = "text";
  if (typeof c == "function") {
    const m = o.current.get(n.uid), h = i.current.get(n.uid);
    if (m && h) c = h, d = "server-component";
    else {
      i.current.delete(n.uid), o.current.delete(n.uid);
      try {
        const f = c;
        if (c = w.jsx(f, {}), !c || !Xe.isValidElement(c)) throw new Error("Invalid React element returned from the AI chat content function.");
        d = "server-component", i.current.set(n.uid, c), o.current.set(n.uid, f);
      } catch {
        return Fe(`The type of the AI chat content is an invalid function.
If you're looking to render a React Server Components, please refer to docs.nlkit.com/nlux for more information.
`), null;
      }
    }
  }
  if (n.participantRole === "user") return n.status !== "complete" ? (Yt(`User chat item should be always be in complete state — Current status: ${n.status} — Segment UID: ${t.uid}`), null) : Ms(c) ? w.jsx(e, { ref: l, uid: n.uid, status: "complete", direction: "sent", contentType: d, dataTransferMode: "batch", fetchedContent: n.content, markdownContainersController: r.markdownContainersController, layout: r.layout, messageOptions: r.messageOptions, isPartOfInitialSegment: u, name: pn(n.participantRole, r.personaOptions), avatar: mn(n.participantRole, r.personaOptions), submitShortcutKey: r.submitShortcutKey, onPromptResubmit: (m) => r.onPromptResubmit(r.chatSegment.uid, n.uid, m) }, n.uid) : (Yt(`User chat item should have primitive content (string, number, boolean, null) — Current content: ${JSON.stringify(c)} — Segment UID: ${t.uid}`), null);
  if (n.status === "complete") return n.dataTransferMode === "stream" ? w.jsx(e, { ref: l, uid: n.uid, status: n.status, direction: "received", contentType: d, dataTransferMode: n.dataTransferMode, markdownContainersController: r.markdownContainersController, onMarkdownStreamRendered: a, streamedContent: c, streamedServerResponse: n.serverResponse, layout: r.layout, messageOptions: r.messageOptions, isPartOfInitialSegment: u, name: pn(n.participantRole, r.personaOptions), avatar: mn(n.participantRole, r.personaOptions) }, n.uid) : d !== "text" || Ms(c) || (p = r.messageOptions) != null && p.responseRenderer ? w.jsx(e, { ref: l, uid: n.uid, status: "complete", direction: "received", contentType: d, dataTransferMode: n.dataTransferMode, markdownContainersController: r.markdownContainersController, onMarkdownStreamRendered: a, fetchedContent: c, fetchedServerResponse: n.serverResponse, layout: r.layout, messageOptions: r.messageOptions, isPartOfInitialSegment: u, name: pn(n.participantRole, r.personaOptions), avatar: mn(n.participantRole, r.personaOptions) }, n.uid) : (Fe(`When the type of the AI chat content is not primitive (object or array), a custom renderer must be provided — Current content: ${JSON.stringify(c)} — Segment UID: ${t.uid}`), null);
  if (n.status === "streaming") {
    const m = d === "server-component" && xn(c) ? c : void 0;
    return w.jsx(e, { ref: l, uid: n.uid, status: "streaming", direction: "received", contentType: d, dataTransferMode: n.dataTransferMode, markdownContainersController: r.markdownContainersController, onMarkdownStreamRendered: a, fetchedContent: m, layout: r.layout, messageOptions: r.messageOptions, isPartOfInitialSegment: u, name: pn(n.participantRole, r.personaOptions), avatar: mn(n.participantRole, r.personaOptions) }, n.uid);
  }
}, fc = function(r, e) {
  const { segments: t, personaOptions: n, conversationOptions: s, onLastActiveSegmentChange: o } = r, i = nr();
  (function(c, d, p) {
    const m = V(() => {
      const f = c.length > 0 ? c[c.length - 1] : void 0;
      return (f == null ? void 0 : f.status) === "active" ? f.uid : void 0;
    }, [c]), h = xe(void 0);
    le(() => {
      if (!p) return;
      const f = h.current;
      if (m === (f == null ? void 0 : f.uid) && d.current === (f == null ? void 0 : f.div)) return;
      const b = m && d.current ? { uid: m, div: d.current } : void 0;
      (b || h.current) && (p(b), h.current = b);
    });
  })(t, i, o);
  const a = function(c) {
    const d = V(() => /* @__PURE__ */ new Map(), []);
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
  }(t), u = ((c) => V(() => {
    return d = c == null ? void 0 : c.layout, d ?? "bubbles";
    var d;
  }, [c == null ? void 0 : c.layout]))(s);
  Xt(e, () => ({ streamChunk: (c, d, p) => {
    const m = a.get(c);
    m == null || m.streamChunk(d, p);
  }, completeStream: (c, d) => {
    const p = a.get(c);
    p == null || p.completeStream(d);
  }, cancelSegmentStreams: (c) => {
    const d = a.get(c);
    d == null || d.cancelStreams();
  } }), []);
  const l = V(() => Qt(mc), []);
  return w.jsx("div", { className: "nlux-chatSegments-container", children: t.map((c, d) => {
    const p = d === t.length - 1, m = c.uid === "initial";
    let h = a.getRef(c.uid);
    return h || (h = nr(), a.set(c.uid, h)), w.jsx(l, { ref: h, containerRef: p ? i : void 0, markdownContainersController: r.markdownContainersController, chatSegment: c, isInitialSegment: m, layout: u, personaOptions: n, messageOptions: r.messageOptions, Loader: r.Loader, submitShortcutKey: r.submitShortcutKey, onPromptResubmit: r.onPromptResubmit, onMarkdownStreamRendered: r.onMarkdownStreamRendered }, c.uid);
  }) });
}, gc = { typing: "nlux-composer--typing", "submitting-prompt": "nlux-composer--submitting", "submitting-conversation-starter": "nlux-composer--submitting", waiting: "nlux-composer--waiting" }, vc = () => w.jsx("div", { className: "nlux-comp-cancelIcon", children: w.jsx("div", { className: "nlux-comp-cancelIcon-container" }) }), yc = () => w.jsx("div", { className: "nlux-comp-sendIcon", children: w.jsx("div", { className: "nlux-comp-sendIcon-container" }) }), Wn = ["submitting-prompt", "submitting-edit", "submitting-conversation-starter", "submitting-external-message"], bc = (r) => {
  const e = `nlux-comp-composer ${gc[r.status] || ""}`, t = Wn.includes(r.status), n = !r.hasValidInput || r.status === "waiting" || Wn.includes(r.status), s = r.status === "typing" || r.status === "waiting", o = r.hideStopButton !== !0 && (Wn.includes(r.status) || r.status === "waiting"), i = xe(null);
  le(() => {
    r.status === "typing" && r.autoFocus && i.current && i.current.focus();
  }, [r.status, r.autoFocus, i.current]);
  const a = V(() => (c) => {
    var d;
    (d = r.onChange) == null || d.call(r, c.target.value);
  }, [r.onChange]), u = V(() => () => {
    var c;
    (c = r.onSubmit) == null || c.call(r);
  }, [r.onSubmit]), l = V(() => (c) => {
    Xo(c, r.submitShortcut) && (c.preventDefault(), u());
  }, [u, r.submitShortcut]);
  return w.jsxs("div", { className: e, children: [w.jsx("textarea", { tabIndex: 0, ref: i, disabled: t, placeholder: r.placeholder, value: r.prompt, onChange: a, onKeyDown: l }), !o && w.jsxs("button", { tabIndex: 0, disabled: n, onClick: () => r.onSubmit(), children: [s && w.jsx(yc, {}), !s && r.Loader] }), o && w.jsx("button", { tabIndex: 0, onClick: r.onCancel, children: w.jsx(vc, {}) })] });
}, xr = (r) => {
  var n;
  const e = {}, t = Object.keys(r);
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    o !== "personaOptions" && o !== "messageOptions" && o !== "adapter" && o !== "events" && Object.assign(e, { [o]: r[o] });
  }
  return r.personaOptions && (e.personaOptions = {}, r.personaOptions.assistant && (e.personaOptions.assistant = { name: r.personaOptions.assistant.name, avatar: typeof r.personaOptions.assistant.avatar == "string" ? r.personaOptions.assistant.avatar : "<REACT ELEMENT />", tagline: r.personaOptions.assistant.tagline }), r.personaOptions.user && (e.personaOptions.user = { name: r.personaOptions.user.name, avatar: typeof r.personaOptions.user.avatar == "string" ? r.personaOptions.user.avatar : "<REACT ELEMENT />" })), r.messageOptions && (e.messageOptions = { ...r.messageOptions, responseRenderer: r.messageOptions.responseRenderer ? () => null : void 0, promptRenderer: r.messageOptions.promptRenderer ? () => null : void 0 }), (n = r.conversationOptions) != null && n.conversationStarters && (e.conversationOptions = { ...r.conversationOptions, conversationStarters: r.conversationOptions.conversationStarters.map((s) => ({ ...s, icon: s.icon ? "<REACT ELEMENT />" : void 0 })) }), e;
};
var xc = Object.defineProperty, hn = (r, e, t) => ((n, s, o) => s in n ? xc(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class wc extends Error {
  constructor(e = {}) {
    super(e.message), hn(this, "exceptionId"), hn(this, "message"), hn(this, "source"), hn(this, "type"), this.message = e.message ?? "", this.source = e.source, this.type = this.constructor.name, this.exceptionId = e.exceptionId;
  }
}
const kc = (r, e) => {
  let t, n = e, s = r, o = !0;
  const i = ((f, b) => {
    let C = !1;
    if (typeof f != "function") throw new wc({ source: "x/throttle", message: "Callback must be a function" });
    return (...v) => {
      C || (f.apply(void 0, v), C = !0, setTimeout(function() {
        C = !1;
      }, b));
    };
  })(/* @__PURE__ */ ((f) => {
    let b, C;
    return (v) => {
      const y = v.target;
      if (!(y instanceof HTMLElement)) return;
      const { scrollTop: A, clientHeight: x, scrollHeight: O } = y, H = O - 30, $ = Math.ceil(A + x) >= H, T = b === void 0 || C === void 0 ? void 0 : A > b && C === O ? "down" : A < b && C === O ? "up" : void 0;
      C = O, b = A, f({ scrolledToBottom: $, scrollDirection: T });
    };
  })(({ scrolledToBottom: f, scrollDirection: b }) => {
    o ? b === "up" && (o = !1) : b === "down" && f && (o = !0);
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
  }, handleNewChatSegmentAdded: (f, b) => {
    t && (c == null || c.disconnect(), d == null || d.disconnect()), t = { uid: f, container: b }, c = new ResizeObserver(m), c.observe(b), d = new MutationObserver(h), d.observe(b, { childList: !0, subtree: !0, characterData: !0 }), n && p();
  }, handleChatSegmentRemoved: (f) => l(f), handleChatSegmentComplete: (f) => l(f), destroy: () => {
    t && (l(t.uid), t = void 0), u(s), s = void 0;
  } };
}, js = !0, In = (r) => {
  if (typeof r != "object" || r === null) return !1;
  const e = r;
  return (typeof e.streamText == "function" || typeof e.batchText == "function") && ["stream", "batch"].includes(e.dataTransferMode) && typeof e.id == "string" && typeof e.info == "object" && e.info !== null && typeof e.preProcessAiBatchedMessage == "function" && typeof e.preProcessAiStreamedChunk == "function";
}, Me = (r, e = 1) => {
  setTimeout(() => {
    r();
  }, e);
}, Cc = (r, e, t, n, s, o, i, a, u) => new Promise((l) => {
  const c = et(), d = [], p = [];
  let m = !1, h = !1, f = !1;
  const b = In(t), C = { next: (v) => {
    if (h || f) return;
    let y, A;
    if (b) {
      const x = v, O = t.preProcessAiStreamedChunk(x, n);
      O != null && (y = O, A = x, d.push(y), p.push(A));
    } else y = v, d.push(y);
    y != null ? (m || m || (m = !0, Me(() => {
      s.forEach((x) => {
        x({ uid: c, status: "streaming", time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" });
      });
    })), Me(() => {
      i.forEach((x) => {
        x({ chunk: y, messageId: c, serverResponse: A });
      });
    })) : Fe("Adapter returned an undefined or null value from streamText. This chunk will be ignored.");
  }, complete: () => {
    h || f || (f = !0, Me(() => {
      const v = { uid: c, status: "complete", content: d, contentType: "text", serverResponse: void 0, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" };
      o.forEach((y) => {
        y(v);
      }), l();
    }), Me(() => {
      const v = { uid: r, status: "complete", items: [e, { uid: c, status: "complete", contentType: "text", content: d, serverResponse: p, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" }] };
      a.forEach((y) => {
        y(v);
      });
    }));
  }, error: (v) => {
    h || f || (h = !0, Me(() => {
      u.forEach((y) => {
        y("failed-to-stream-content", v);
      }), l();
    }));
  } };
  t.streamText(e.content, C, n);
}), Sc = (r, e, t) => {
  if (!r) return (() => {
    const v = /* @__PURE__ */ new Set(), y = et(), A = { uid: y, status: "complete", items: [] };
    return Me(() => {
      v.forEach((x) => {
        x(A);
      }), v.clear();
    }), { segment: A, observable: { on: (x, O) => {
      x === "complete" && v.add(O);
    }, removeListener: (x, O) => {
      v.delete(O);
    }, destroy: () => {
      v.clear();
    }, get segmentId() {
      return y;
    } }, dataTransferMode: "batch" };
  })();
  const n = e;
  if (n.streamText === void 0 && n.batchText === void 0 && n.streamServerComponent === void 0) return ((v) => {
    const y = /* @__PURE__ */ new Set(), A = et(), x = { uid: A, status: "error", items: [] };
    return Me(() => {
      y.forEach((O) => O(v)), y.clear();
    }), { segment: x, dataTransferMode: "stream", observable: { on: (O, H) => {
      O === "error" && y.add(H);
    }, removeListener: (O, H) => {
      y.delete(H);
    }, destroy: () => {
      y.clear();
    }, get segmentId() {
      return A;
    } } };
  })("no-data-transfer-mode-supported");
  const s = et(), o = ((v) => ({ uid: et(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: v, contentType: "text" }))(r);
  let i, a, u, l, c, d, p = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  Me(() => {
    p != null && p.size && (p.forEach((v) => {
      v(o);
    }), p.clear(), p = void 0);
  });
  const f = ((v) => {
    const y = [], A = v, x = v;
    (A == null ? void 0 : A.streamText) === void 0 && (x == null ? void 0 : x.streamServerComponent) === void 0 || y.push("stream"), (A == null ? void 0 : A.batchText) !== void 0 && y.push("batch");
    const O = In(v) ? v : void 0, H = (O == null ? void 0 : O.dataTransferMode) ?? void 0, $ = y.length === 1 ? y[0] : "stream";
    return H ?? $;
  })(e);
  ((v) => "streamServerComponent" in v ? "server-component" : "text")(e) === "server-component" ? (u = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), ((v, y, A, x, O, H, $, T) => new Promise((I, Y) => {
    try {
      const M = y.content, z = et(), B = "assistant", J = "streaming", fe = /* @__PURE__ */ new Date(), re = "stream";
      let ie, N;
      const S = () => {
        Me(() => {
          H.forEach((q) => {
            ie && N && q({ ...ie, content: N, status: "complete" });
          });
        }, 20);
        const F = { uid: v, status: "complete", items: [y, ie] };
        Me(() => {
          $.forEach((q) => {
            q(F);
          }), I();
        }, 20);
      }, R = () => {
        T.forEach((F) => {
          F("failed-to-stream-server-component", new Error("Failed to load content"));
        });
      };
      N = A.streamServerComponent(M, x, { onServerComponentReceived: S, onError: R }), ie = { uid: z, content: N, contentType: "server-component", participantRole: B, status: J, time: fe, dataTransferMode: re }, Me(() => {
        O.forEach((F) => {
          F(ie);
        });
      }, 10);
    } catch (M) {
      Fe(M);
      const z = M instanceof Error ? M : typeof M == "string" ? new Error(M) : new Error("Unknown error");
      Me(() => {
        T.forEach((B) => B("failed-to-load-content", z));
      });
    }
  }))(s, o, e, t, a, u, m, h).finally(() => {
    Me(() => C());
  })) : f === "batch" ? (i = /* @__PURE__ */ new Set(), (async (v, y, A, x, O, H, $) => {
    try {
      const T = y.content, I = In(A) ? A : void 0, Y = I !== void 0, M = et(), z = "assistant", B = "complete", J = /* @__PURE__ */ new Date(), fe = "batch";
      let re;
      if (Y) {
        const S = await I.batchText(T, x), R = I.preProcessAiBatchedMessage(S, x);
        R != null && (re = { uid: M, content: R, contentType: "text", serverResponse: S, participantRole: z, status: B, time: J, dataTransferMode: fe });
      } else re = { uid: M, content: await A.batchText(T, x), contentType: "text", serverResponse: void 0, participantRole: z, status: B, time: J, dataTransferMode: fe };
      if (!re) throw new Error("Response from adapter was undefined or cannot be processed");
      const ie = re;
      Me(() => {
        O.forEach((S) => {
          S(ie);
        });
      });
      const N = { uid: v, status: "complete", items: [y, re] };
      Me(() => {
        H.forEach((S) => {
          S(N);
        });
      });
    } catch (T) {
      Fe(T);
      const I = T instanceof Error ? T : typeof T == "string" ? new Error(T) : new Error("Unknown error");
      Me(() => {
        $.forEach((Y) => Y("failed-to-load-content", I));
      });
    }
  })(s, o, e, t, i, m, h).finally(() => {
    Me(() => C());
  })) : (l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), Cc(s, o, e, t, l, c, d, m, h).finally(() => {
    Me(() => C());
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
}, Ac = { "data-transfer-mode-not-supported": "Requested data transfer mode is not supported", "no-data-transfer-mode-supported": "Adapter does not support any valid data transfer modes", "connection-error": "Connection error", "invalid-credentials": "Invalid credentials", "invalid-api-key": "Invalid API key", "http-server-side-error": "HTTP server side error", "http-client-side-error": "HTTP client side error", "failed-to-load-content": "Failed to load content", "failed-to-stream-content": "Failed to stream content", "failed-to-stream-server-component": "Failed to stream server component", "failed-to-render-content": "Failed to display content" }, Ec = (r) => {
  var y;
  const { aiChatProps: e, adapterToUse: t, prompt: n, composerOptions: s, showException: o, initialSegment: i, newSegments: a, cancelledSegmentIds: u, cancelledMessageIds: l, setChatSegments: c, setComposerStatus: d, setPrompt: p, conversationRef: m } = r, h = V(() => n.length > 0, [n]), f = xe(n);
  f.current = n;
  const b = xe({ newSegments: a, cancelledSegmentIds: u, cancelledMessageIds: l, setChatSegments: c, setComposerStatus: d, showException: o, setPrompt: p }), C = xe({});
  le(() => {
    b.current = { newSegments: a, cancelledSegmentIds: u, cancelledMessageIds: l, setChatSegments: c, setComposerStatus: d, showException: o, setPrompt: p };
  }, [a, u, l, c, d, o, p]);
  const v = ((A, x, O) => V(() => {
    const H = ((T) => {
      const I = [];
      return T.forEach((Y) => {
        Y.items.forEach((M) => {
          if (M.status === "complete") {
            if (M.participantRole === "assistant") I.push({ role: "assistant", message: M.content });
            else if (M.participantRole === "user") return I.push({ role: "user", message: M.content });
          }
        });
      }), I;
    })(x), $ = O === "max" || O === void 0 ? H : O > 0 ? H.slice(-O) : void 0;
    return { aiChatProps: xr(A), conversationHistory: $ };
  }, [A, x, O]))(e, i ? [i, ...a] : a, (y = e.conversationOptions) == null ? void 0 : y.historyPayloadSize);
  return le(() => {
    C.current = e.events || {};
  }, [e.events]), he(() => {
    if (!t) return void Fe("No valid adapter was provided to AiChat component");
    if (!h || s != null && s.disableSubmitButton) return;
    d("submitting-prompt");
    const A = n, x = /* @__PURE__ */ new Set(), O = In(t) ? t : t.streamServerComponent ? { streamServerComponent: t.streamServerComponent } : { batchText: t.batchText, streamText: t.streamText }, { segment: H, observable: $ } = Sc(A, O, v);
    if (H.status === "error") return Fe("Error occurred while submitting prompt"), o("Error occurred while submitting prompt"), d("typing"), void (f.current === "" && p(A));
    const T = (I) => {
      const Y = b.current.newSegments.map((M) => M.uid !== $.segmentId ? M : { ...M, items: [...M.items, { ...I }] });
      b.current.setChatSegments(Y);
    };
    $.on("userMessageReceived", (I) => {
      var Y, M;
      (Y = b.current) != null && Y.cancelledMessageIds.includes(I.uid) || (T(I), (M = C.current) != null && M.messageSent && C.current.messageSent({ uid: I.uid, message: I.content }));
    }), $.on("aiMessageStreamStarted", (I) => {
      var Y, M;
      (Y = b.current) != null && Y.cancelledMessageIds.includes(I.uid) || (T(I), b.current.setComposerStatus("waiting"), f.current === A && b.current.setPrompt(""), x.add(I.uid), (M = C.current) != null && M.messageStreamStarted && C.current.messageStreamStarted({ uid: I.uid }));
    }), $.on("aiServerComponentStreamStarted", (I) => {
      var Y, M, z;
      (Y = b.current) != null && Y.cancelledMessageIds.includes(I.uid) || (T(I), b.current.setComposerStatus("waiting"), f.current === A && b.current.setPrompt(""), x.add(I.uid), (M = C.current) != null && M.serverComponentStreamStarted && ((z = C.current) == null || z.serverComponentStreamStarted({ uid: I.uid })));
    }), $.on("aiServerComponentStreamed", (I) => {
      var Y, M, z;
      (Y = b.current) != null && Y.cancelledMessageIds.includes(I.uid) || (M = C.current) != null && M.serverComponentRendered && !b.current.cancelledMessageIds.includes(I.uid) && ((z = C.current) == null || z.serverComponentRendered({ uid: I.uid }));
    }), $.on("aiMessageReceived", (I) => {
      var M, z;
      if ((M = b.current) != null && M.cancelledMessageIds.includes(I.uid)) return;
      const Y = b.current.newSegments.map((B) => B.uid !== $.segmentId ? B : { ...B, items: [...B.items, { ...I }] });
      b.current.setChatSegments(Y), (z = C.current) != null && z.messageReceived && C.current.messageReceived({ uid: I.uid, message: I.content });
    }), $.on("complete", (I) => {
      var M;
      if ((M = b.current) != null && M.cancelledMessageIds.includes(I.uid)) return;
      b.current.setComposerStatus("typing");
      const Y = b.current.newSegments.map((z) => z.uid !== $.segmentId ? z : { ...I });
      b.current.setChatSegments(Y), f.current === A && p(""), x.size > 0 && (x.forEach((z) => {
        requestAnimationFrame(() => {
          var B;
          (B = m.current) == null || B.completeStream($.segmentId, z);
        });
      }), x.clear());
    }), $.on("aiChunkReceived", ({ messageId: I, chunk: Y }) => {
      var M, z;
      (M = b.current) != null && M.cancelledMessageIds.includes(I) || ((z = m.current) == null || z.streamChunk(H.uid, I, Y));
    }), $.on("aiMessageStreamed", (I) => {
      var Y, M, z;
      (Y = b.current) != null && Y.cancelledMessageIds.includes(I.uid) || (M = C.current) != null && M.messageReceived && ((z = C.current) == null || z.messageReceived({ uid: I.uid, message: I.content }));
    }), $.on("error", (I, Y) => {
      var B;
      const M = b.current.newSegments.filter((J) => J.uid !== H.uid), z = Ac[I];
      b.current.setChatSegments(M), b.current.setComposerStatus("typing"), b.current.showException(z), f.current === "" && p(A), (B = C.current) != null && B.error && C.current.error({ errorId: I, message: z, errorObject: Y });
    }), b.current.setChatSegments([...b.current.newSegments, H]);
  }, [n, t, v, o, b, s == null ? void 0 : s.disableSubmitButton]);
}, Go = "nlux-comp-welcomeMessage", Jo = (r) => w.jsxs("div", { className: Go, children: [w.jsx(Ko, { avatar: r.avatar, name: r.name }), w.jsx("div", { className: "nlux-comp-welcomeMessage-personaName", children: r.name }), r.message && w.jsx("div", { className: "nlux-comp-welcomeMessage-text", children: r.message })] }), Bs = ({ children: r }) => w.jsx("div", { className: Go, children: r }), Tc = () => {
  const r = V(() => "data:image/png;base64,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", []);
  return w.jsx(Jo, { avatar: r, name: "" });
}, Pc = (r) => {
  const { onConversationStarterSelected: e } = r;
  return w.jsx("div", { className: "nlux-comp-conversationStarters", children: r.items.map((t, n) => w.jsxs("button", { className: "nlux-comp-conversationStarter", onClick: () => e(t), children: [w.jsx(Ic, { icon: t.icon }), w.jsx("span", { className: "nlux-comp-conversationStarter-prompt", children: t.label ?? t.prompt })] }, n)) });
}, Ic = ({ icon: r }) => r ? typeof r == "string" ? w.jsx("img", { src: r, width: 16 }) : w.jsx("div", { className: "nlux-comp-conversationStarter-icon-container", children: r }) : null, Rc = (r) => {
  const { segments: e, personaOptions: t, conversationOptions: n, userDefinedGreeting: s } = r, o = V(() => e.some((d) => d.items.length > 0), [e]), i = V(() => !s && !o && (t == null ? void 0 : t.assistant) === void 0 && (n == null ? void 0 : n.showWelcomeMessage) !== !1, [o, t == null ? void 0 : t.assistant, n == null ? void 0 : n.showWelcomeMessage, s]), a = V(() => !s && !o && (t == null ? void 0 : t.assistant) !== void 0 && (n == null ? void 0 : n.showWelcomeMessage) !== !1, [s, o, t == null ? void 0 : t.assistant, n == null ? void 0 : n.showWelcomeMessage]), u = V(() => !o && (n == null ? void 0 : n.conversationStarters) && (n == null ? void 0 : n.conversationStarters.length) > 0, [o, n == null ? void 0 : n.conversationStarters]), l = V(() => s !== void 0 && (n == null ? void 0 : n.showWelcomeMessage) !== !1, [s]);
  le(() => {
    s && (n == null ? void 0 : n.showWelcomeMessage) === !1 && Yt("Configuration conflict: The greeting UI override provided via <AiChatUI.Greeting> will not be shown because conversationOptions.showWelcomeMessage is set to false.");
  }, [n == null ? void 0 : n.showWelcomeMessage, s]);
  const c = !(i || a || l || o);
  return w.jsxs(w.Fragment, { children: [i && w.jsx(Tc, {}), a && w.jsx(Jo, { name: t.assistant.name, avatar: t.assistant.avatar, message: t.assistant.tagline }), l && w.jsx(Bs, { children: s }), c && w.jsx(Bs, { children: null }), w.jsx("div", { className: "nlux-conversationStarters-container", children: u && w.jsx(Pc, { items: n.conversationStarters ?? [], onConversationStarterSelected: r.onConversationStarterSelected }) })] });
}, Ds = () => w.jsx("div", { className: "nlux-comp-messageLoader", children: w.jsx("div", { className: "nlux-comp-loaderContainer", children: w.jsx("span", { className: "spinning-loader" }) }) }), zs = { Loader: (r) => w.jsx(w.Fragment, { children: r.children }), Greeting: (r) => w.jsx(w.Fragment, { children: r.children }) }, Fs = Si({}), Oc = function(r) {
  var Ce, L, Oe, _e, He;
  const { adapter: e, className: t, initialConversation: n, conversationOptions: s, composerOptions: o, displayOptions: i } = r, { themeId: a, colorScheme: u } = i ?? {}, l = xe(null), c = xe(null), d = xe(void 0), p = xe(null), m = ((k, j) => {
    const [Q, oe] = je(), [we, ke] = je(), ae = xe(Q), Pe = xe(j);
    return le(() => {
      const P = k.current || void 0;
      P !== we && ke(P);
    }), le(() => {
      we ? ae.current ? ae.current.updateConversationContainer(we) : (ae.current = kc(we, Pe.current ?? js), oe(ae.current)) : ae.current && (ae.current.destroy(), oe(void 0), ae.current = void 0);
    }, [we]), le(() => {
      Pe.current = j, ae.current && ae.current.updateProps({ autoScroll: j ?? js });
    }, [j]), Q;
  })(c, s == null ? void 0 : s.autoScroll), h = V(() => p.current ? Ia(p.current) : void 0, [p.current]), f = (() => {
    const k = {}, j = /* @__PURE__ */ new Set();
    return V(() => ({ getStreamingDomElement: (Q) => {
      if (j.has(Q) && j.delete(Q), k[Q] === void 0) {
        const oe = document.createElement("div");
        oe.setAttribute("nlux-message-id", Q), oe.className = "nlux-markdown-container", k[Q] = oe;
      }
      return k[Q];
    }, deleteStreamingDomElement: (Q) => {
      j.add(Q), setTimeout(() => {
        j.forEach((oe) => {
          k[oe] && (k[oe].remove(), delete k[oe]);
        }), j.clear();
      }, 1e3);
    } }), []);
  })(), { PrimitivesContextProvider: b } = function(k) {
    var oe, we, ke, ae, Pe, P, _, ue, ce;
    const [j, Q] = je(k);
    return le(() => {
      Q(k);
    }, [(oe = k == null ? void 0 : k.messageOptions) == null ? void 0 : oe.htmlSanitizer, (we = k == null ? void 0 : k.messageOptions) == null ? void 0 : we.syntaxHighlighter, (ke = k == null ? void 0 : k.messageOptions) == null ? void 0 : ke.markdownLinkTarget, (ae = k == null ? void 0 : k.messageOptions) == null ? void 0 : ae.showCodeBlockCopyButton, (Pe = k == null ? void 0 : k.messageOptions) == null ? void 0 : Pe.skipStreamingAnimation, (P = k == null ? void 0 : k.messageOptions) == null ? void 0 : P.streamingAnimationSpeed, (_ = k == null ? void 0 : k.messageOptions) == null ? void 0 : _.waitTimeBeforeStreamCompletion, (ue = k == null ? void 0 : k.messageOptions) == null ? void 0 : ue.responseRenderer, (ce = k == null ? void 0 : k.messageOptions) == null ? void 0 : ce.promptRenderer]), { PrimitivesContextProvider: V(() => ({ children: Re }) => w.jsx(Fs.Provider, { value: j, children: Re }), [j]), primitivesContext: Fs };
  }({ messageOptions: r.messageOptions }), [C, v] = je(""), [y, A] = je("typing"), [x, O] = je(), [H, $] = je([]), [T, I] = je([]), [Y, M] = je([]), z = V(() => x ? [x, ...H] : H, [x, H]), B = V(() => ((k) => {
    const j = k;
    if (typeof (j == null ? void 0 : j.create) == "function") return j.create();
    if (typeof (j == null ? void 0 : j.batchText) == "function" || typeof (j == null ? void 0 : j.streamText) == "function" || typeof (j == null ? void 0 : j.streamServerComponent) == "function") return k;
    Fe("Unable to determine the type of the adapter! Missing batchText or streamText method.");
  })(e), [e]), J = ((k) => V(() => {
    const j = { minWidth: "280px", minHeight: "280px" };
    return k != null && k.width && (j.width = k.width), k != null && k.height && (j.height = k.height), j;
  }, [k == null ? void 0 : k.width, k == null ? void 0 : k.height]))(i), fe = V(() => ((k) => {
    const j = ["nlux-AiChat-root"], Q = `nlux-theme-${k.themeId || "nova"}`;
    return j.push(Q), k.className && j.push(k.className), j;
  })({ className: t, themeId: a }).join(" "), [t, a]), re = V(() => {
    var k;
    return u !== "auto" && u ? u : typeof globalThis !== void 0 && globalThis.matchMedia && ((k = globalThis.matchMedia("(prefers-color-scheme: dark)")) != null && k.matches) ? "dark" : "light";
  }, [u]), ie = he((k) => h == null ? void 0 : h.displayException(k), [h]), N = function(k, j, Q, oe, we, ke, ae, Pe) {
    return he(() => {
      var _;
      const P = k.length > 0 ? k[k.length - 1] : void 0;
      (P == null ? void 0 : P.status) === "active" && (oe(k.slice(0, -1)), we([...j, P.uid]), ke([...Q, ...P.items.map((ue) => ue.uid)]), (_ = ae.current) == null || _.cancelSegmentStreams(P.uid)), Pe("typing");
    }, [k, j, Q, oe, we, ke, ae, Pe]);
  }(H, T, Y, $, I, M, l, A), S = he((k) => v(k), [v]), R = Ec({ aiChatProps: r, adapterToUse: B, conversationRef: l, initialSegment: x, newSegments: H, cancelledMessageIds: Y, cancelledSegmentIds: T, prompt: C, composerOptions: o, showException: ie, setChatSegments: $, setComposerStatus: A, setPrompt: v }), F = ((k, j, Q, oe, we, ke) => he((ae, Pe, P) => {
    if (ae === "initial" && k) {
      const ce = [];
      for (const Ye of k.items) {
        if (Ye.uid === Pe) break;
        ce.push(Ye);
      }
      const Re = { ...k, items: ce };
      return j(Re), oe([]), we(P), void ke("submitting-edit");
    }
    const _ = Q.findIndex((ce) => ce.uid === ae), ue = Q.slice(0, _);
    oe(ue), we(P), ke("submitting-edit");
  }, [Q, oe, k, j, we, ke]))(x, O, H, $, v, A), q = he((k, j) => {
    var Q;
    (Q = r.events) != null && Q.messageRendered && r.events.messageRendered({ uid: j });
  }, []), W = he((k) => {
    v(k.prompt), A("submitting-conversation-starter");
  }, [v, A]), ee = ((k, j) => he((Q) => {
    k && Q && (j.current = Q.uid, k.handleNewChatSegmentAdded(Q.uid, Q.div));
  }, [k]))(m, d);
  le(() => {
    y !== "submitting-conversation-starter" && y !== "submitting-external-message" && y !== "submitting-edit" || R();
  }, [y, R]), le(() => O(n ? { uid: "initial", status: "complete", items: n.map((k, j) => {
    if (k.role === "assistant" || k.role === "user") return k.role === "user" ? typeof k.message != "string" ? void Fe(`Invalid message type for item at index ${j} in initial conversation: When role is "user", message must be a string`) : { uid: et(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: k.message } : { uid: et(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "assistant", content: k.message, serverResponse: k.serverResponse, dataTransferMode: "batch" };
    Fe(`Invalid role for item at index ${j} in initial conversation: Role must be "assistant" or "user"`);
  }).filter((k) => k !== void 0) } : void 0), [n]), le(() => {
    var k;
    x && ((k = c.current) == null || k.scrollTo({ behavior: "smooth", top: 5e4 }));
  }, [x]);
  const U = xe(void 0);
  le(() => {
    const k = r.api;
    U.current = k, typeof (k == null ? void 0 : k.__setHost) == "function" ? k.__setHost({ sendMessage: (j) => {
      v(j), A("submitting-external-message");
    }, resetConversation: () => {
      $([]), O(void 0);
    }, cancelLastMessageRequest: N }) : Yt(`API object passed was is not compatible with AiChat.
Only use API objects created by the useAiChatApi() hook.`);
  }, [r.api, N, v, A, $, O]), le(() => () => {
    var k;
    typeof ((k = U.current) == null ? void 0 : k.__unsetHost) == "function" && (U.current.__unsetHost(), U.current = void 0);
  }, []), ((k) => {
    le(() => {
      var Q;
      const j = (Q = k.events) == null ? void 0 : Q.ready;
      j && j({ aiChatProps: xr(k) });
    }, []);
  })(r), ((k, j) => {
    var we;
    const Q = xe(), oe = xe();
    le(() => {
      Q.current = () => {
        const ke = [];
        return j.forEach((ae) => {
          ae.items && ae.items.length !== 0 && ae.items.forEach((Pe) => {
            Pe.status === "complete" && (Pe.participantRole !== "assistant" ? Pe.participantRole === "user" && ke.push({ role: "user", message: Pe.content }) : ke.push({ role: "assistant", message: Pe.content }));
          });
        }), ke;
      };
    }, [j]), le(() => {
      var ke;
      oe.current = (ke = k.events) == null ? void 0 : ke.preDestroy;
    }, [(we = k.events) == null ? void 0 : we.preDestroy]), le(() => () => {
      var ae;
      const ke = oe.current;
      ke && (ke({ aiChatProps: xr(k), conversationHistory: ((ae = Q.current) == null ? void 0 : ae.call(Q)) ?? [] }), Q.current = void 0);
    }, []);
  })(r, z);
  const Z = V(() => Qt(fc), []), K = ((k) => {
    const j = V(() => k.children ? Array.isArray(k.children) ? k.children : [k.children] : [], [k.children]);
    return { Loader: V(() => j.length === 0 ? w.jsx(Ds, {}) : j.find((Q) => Q.type === zs.Loader) || w.jsx(Ds, {}), [j]), Greeting: V(() => {
      if (j.length !== 0) return j.find((Q) => Q.type === zs.Greeting);
    }, [j]) };
  })(r), te = C.length > 0, G = z.length === 0 ? "nlux-chatRoom-starting" : "nlux-chatRoom-active";
  return B ? w.jsx(b, { children: w.jsxs("div", { className: fe, style: J, "data-color-scheme": re, children: [w.jsx("div", { className: "nlux-comp-exceptionBox", ref: p }), w.jsxs("div", { className: `nlux-chatRoom-container ${G}`, children: [w.jsx("div", { className: "nlux-launchPad-container", children: w.jsx(Rc, { segments: z, onConversationStarterSelected: W, conversationOptions: s, personaOptions: r.personaOptions, userDefinedGreeting: K.Greeting }) }), w.jsx("div", { className: "nlux-conversation-container", ref: c, children: w.jsx(Z, { ref: l, segments: z, conversationOptions: r.conversationOptions, personaOptions: r.personaOptions, messageOptions: r.messageOptions, onLastActiveSegmentChange: ee, Loader: K.Loader, markdownContainersController: f, submitShortcutKey: (Ce = r.composerOptions) == null ? void 0 : Ce.submitShortcut, onPromptResubmit: F, onMarkdownStreamRendered: q }) }), w.jsx("div", { className: "nlux-composer-container", children: w.jsx(bc, { status: y, prompt: C, hasValidInput: te, placeholder: (L = r.composerOptions) == null ? void 0 : L.placeholder, autoFocus: (Oe = r.composerOptions) == null ? void 0 : Oe.autoFocus, submitShortcut: (_e = r.composerOptions) == null ? void 0 : _e.submitShortcut, hideStopButton: (He = r.composerOptions) == null ? void 0 : He.hideStopButton, onChange: S, onSubmit: R, onCancel: N, Loader: K.Loader }) })] })] }) }) : (Yt("AiChat: No valid adapter provided. The component will not render."), w.jsx(w.Fragment, {}));
};
var Vo = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Hs = Xe.createContext && /* @__PURE__ */ Xe.createContext(Vo), Lc = ["attr", "size", "title"];
function Mc(r, e) {
  if (r == null) return {};
  var t = jc(r, e), n, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (s = 0; s < o.length; s++)
      n = o[s], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function jc(r, e) {
  if (r == null) return {};
  var t = {};
  for (var n in r)
    if (Object.prototype.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
  return t;
}
function Rn() {
  return Rn = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Rn.apply(this, arguments);
}
function $s(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function On(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? $s(Object(t), !0).forEach(function(n) {
      Bc(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : $s(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function Bc(r, e, t) {
  return e = Dc(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Dc(r) {
  var e = zc(r, "string");
  return typeof e == "symbol" ? e : e + "";
}
function zc(r, e) {
  if (typeof r != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function ei(r) {
  return r && r.map((e, t) => /* @__PURE__ */ Xe.createElement(e.tag, On({
    key: t
  }, e.attr), ei(e.child)));
}
function Fc(r) {
  return (e) => /* @__PURE__ */ Xe.createElement(Hc, Rn({
    attr: On({}, r.attr)
  }, e), ei(r.child));
}
function Hc(r) {
  var e = (t) => {
    var {
      attr: n,
      size: s,
      title: o
    } = r, i = Mc(r, Lc), a = s || t.size || "1em", u;
    return t.className && (u = t.className), r.className && (u = (u ? u + " " : "") + r.className), /* @__PURE__ */ Xe.createElement("svg", Rn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, n, i, {
      className: u,
      style: On(On({
        color: r.color || t.color
      }, t.style), r.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ Xe.createElement("title", null, o), r.children);
  };
  return Hs !== void 0 ? /* @__PURE__ */ Xe.createElement(Hs.Consumer, null, (t) => e(t)) : e(Vo);
}
function $c(r) {
  return Fc({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" }, child: [] }] })(r);
}
var Nc = /* @__PURE__ */ ((r) => (r.Text = "Text", r.ImageUrl = "ImageUrl", r))(Nc || {}), _c = /* @__PURE__ */ ((r) => (r.SystemMessage = "system", r.AIMessage = "ai", r.HumanMessage = "human", r))(_c || {}), qc = /* @__PURE__ */ ((r) => (r.Auto = "Auto", r.Low = "Low", r.High = "High", r))(qc || {});
async function Uc(r) {
  const { files: e, message: t } = r;
  if (!e || !e.length)
    return t;
  {
    let n = await Promise.all(e.map(async (s) => {
      const o = await Yc(s, r.resizeOptions);
      if (!o)
        throw new Error("resize failed");
      const i = await Wc(o);
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
const Yc = async (r, e) => {
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
async function Wc(r) {
  return new Promise((e, t) => {
    const n = new FileReader();
    n.onloadend = () => e(n.result), n.readAsDataURL(r);
  });
}
async function Qc(r, e) {
  const t = r.getReader();
  let n;
  for (; !(n = await t.read()).done; )
    e(n.value);
}
function Xc(r) {
  let e, t, n, s = !1;
  return function(i) {
    e === void 0 ? (e = i, t = 0, n = -1) : e = Kc(e, i);
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
function Zc(r, e, t) {
  let n = Ns();
  const s = new TextDecoder();
  return function(i, a) {
    if (i.length === 0)
      t == null || t(n), n = Ns();
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
function Kc(r, e) {
  const t = new Uint8Array(r.length + e.length);
  return t.set(r), t.set(e, r.length), t;
}
function Ns() {
  return {
    data: "",
    event: "",
    id: "",
    retry: void 0
  };
}
var Gc = function(r, e) {
  var t = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(r); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[s]) && (t[n[s]] = r[n[s]]);
  return t;
};
const wr = "text/event-stream", Jc = 1e3, _s = "last-event-id";
function Vc(r, e) {
  var { signal: t, headers: n, onopen: s, onmessage: o, onclose: i, onerror: a, openWhenHidden: u, fetch: l } = e, c = Gc(e, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"]);
  return new Promise((d, p) => {
    const m = Object.assign({}, n);
    m.accept || (m.accept = wr);
    let h;
    function f() {
      h.abort(), document.hidden || x();
    }
    u || document.addEventListener("visibilitychange", f);
    let b = Jc, C = 0;
    function v() {
      document.removeEventListener("visibilitychange", f), window.clearTimeout(C), h.abort();
    }
    t == null || t.addEventListener("abort", () => {
      v(), d();
    });
    const y = l ?? window.fetch, A = s ?? el;
    async function x() {
      var O;
      h = new AbortController();
      try {
        const H = await y(r, Object.assign(Object.assign({}, c), { headers: m, signal: h.signal }));
        await A(H), await Qc(H.body, Xc(Zc(($) => {
          $ ? m[_s] = $ : delete m[_s];
        }, ($) => {
          b = $;
        }, o))), i == null || i(), v(), d();
      } catch (H) {
        if (!h.signal.aborted)
          try {
            const $ = (O = a == null ? void 0 : a(H)) !== null && O !== void 0 ? O : b;
            window.clearTimeout(C), C = window.setTimeout(x, $);
          } catch ($) {
            v(), p($);
          }
      }
    }
    x();
  });
}
function el(r) {
  const e = r.headers.get("content-type");
  if (!(e != null && e.startsWith(wr)))
    throw new Error(`Expected content-type to be ${wr}, Actual: ${e}`);
}
const tl = "https://api.dev.langdb.ai";
class Qn extends Error {
}
const nl = (r) => {
  const { files: e, fileResizeOptions: t } = r, s = `${r.serverUrl || tl}/stream`, [o, i] = je(r.threadId), { modelName: a, agentParams: u } = r, l = { "Content-Type": "application/json" };
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
        const m = await Uc({ files: e, message: c, resizeOptions: t }), h = {
          model_name: a,
          parameters: u || {},
          user_id: r.userId || "",
          thread_id: o,
          message: m
        };
        await Vc(s, {
          method: "POST",
          body: JSON.stringify(h),
          headers: l,
          credentials: "include",
          async onopen(f) {
            if (f.ok && f.headers.get("content-type") === "text/event-stream") {
              const b = f.headers.get("X-Thread-Id");
              if (b && i(b), r.responseCallback) {
                const C = f == null ? void 0 : f.headers.get("x-trace-id");
                r.responseCallback({ traceId: C, modelName: a });
              }
              if (!f.body)
                throw new Qn("No body found");
              return;
            } else if (f.status >= 400 && f.status < 500 && f.status !== 429) {
              const b = await f.text();
              throw new Qn(b || `${f.status}: Failed to send message to the server`);
            } else
              return;
          },
          onmessage(f) {
            if (f.event)
              throw new Qn(f.data);
            d.next(f.data);
          },
          onclose() {
          },
          onerror(f) {
            throw f;
          }
        });
      } catch (m) {
        const h = new Error(m.toString());
        r.responseCallback && r.responseCallback({ error: h, modelName: a }), d.error(h);
      }
      d.complete();
    }
  };
};
var kr = { exports: {} }, fn = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qs;
function rl() {
  if (qs) return pe;
  qs = 1;
  var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, s = r ? Symbol.for("react.strict_mode") : 60108, o = r ? Symbol.for("react.profiler") : 60114, i = r ? Symbol.for("react.provider") : 60109, a = r ? Symbol.for("react.context") : 60110, u = r ? Symbol.for("react.async_mode") : 60111, l = r ? Symbol.for("react.concurrent_mode") : 60111, c = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, p = r ? Symbol.for("react.suspense_list") : 60120, m = r ? Symbol.for("react.memo") : 60115, h = r ? Symbol.for("react.lazy") : 60116, f = r ? Symbol.for("react.block") : 60121, b = r ? Symbol.for("react.fundamental") : 60117, C = r ? Symbol.for("react.responder") : 60118, v = r ? Symbol.for("react.scope") : 60119;
  function y(x) {
    if (typeof x == "object" && x !== null) {
      var O = x.$$typeof;
      switch (O) {
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
                  return O;
              }
          }
        case t:
          return O;
      }
    }
  }
  function A(x) {
    return y(x) === l;
  }
  return pe.AsyncMode = u, pe.ConcurrentMode = l, pe.ContextConsumer = a, pe.ContextProvider = i, pe.Element = e, pe.ForwardRef = c, pe.Fragment = n, pe.Lazy = h, pe.Memo = m, pe.Portal = t, pe.Profiler = o, pe.StrictMode = s, pe.Suspense = d, pe.isAsyncMode = function(x) {
    return A(x) || y(x) === u;
  }, pe.isConcurrentMode = A, pe.isContextConsumer = function(x) {
    return y(x) === a;
  }, pe.isContextProvider = function(x) {
    return y(x) === i;
  }, pe.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, pe.isForwardRef = function(x) {
    return y(x) === c;
  }, pe.isFragment = function(x) {
    return y(x) === n;
  }, pe.isLazy = function(x) {
    return y(x) === h;
  }, pe.isMemo = function(x) {
    return y(x) === m;
  }, pe.isPortal = function(x) {
    return y(x) === t;
  }, pe.isProfiler = function(x) {
    return y(x) === o;
  }, pe.isStrictMode = function(x) {
    return y(x) === s;
  }, pe.isSuspense = function(x) {
    return y(x) === d;
  }, pe.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === l || x === o || x === s || x === d || x === p || typeof x == "object" && x !== null && (x.$$typeof === h || x.$$typeof === m || x.$$typeof === i || x.$$typeof === a || x.$$typeof === c || x.$$typeof === b || x.$$typeof === C || x.$$typeof === v || x.$$typeof === f);
  }, pe.typeOf = y, pe;
}
var me = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Us;
function sl() {
  return Us || (Us = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, s = r ? Symbol.for("react.strict_mode") : 60108, o = r ? Symbol.for("react.profiler") : 60114, i = r ? Symbol.for("react.provider") : 60109, a = r ? Symbol.for("react.context") : 60110, u = r ? Symbol.for("react.async_mode") : 60111, l = r ? Symbol.for("react.concurrent_mode") : 60111, c = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, p = r ? Symbol.for("react.suspense_list") : 60120, m = r ? Symbol.for("react.memo") : 60115, h = r ? Symbol.for("react.lazy") : 60116, f = r ? Symbol.for("react.block") : 60121, b = r ? Symbol.for("react.fundamental") : 60117, C = r ? Symbol.for("react.responder") : 60118, v = r ? Symbol.for("react.scope") : 60119;
    function y(L) {
      return typeof L == "string" || typeof L == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      L === n || L === l || L === o || L === s || L === d || L === p || typeof L == "object" && L !== null && (L.$$typeof === h || L.$$typeof === m || L.$$typeof === i || L.$$typeof === a || L.$$typeof === c || L.$$typeof === b || L.$$typeof === C || L.$$typeof === v || L.$$typeof === f);
    }
    function A(L) {
      if (typeof L == "object" && L !== null) {
        var Oe = L.$$typeof;
        switch (Oe) {
          case e:
            var _e = L.type;
            switch (_e) {
              case u:
              case l:
              case n:
              case o:
              case s:
              case d:
                return _e;
              default:
                var He = _e && _e.$$typeof;
                switch (He) {
                  case a:
                  case c:
                  case h:
                  case m:
                  case i:
                    return He;
                  default:
                    return Oe;
                }
            }
          case t:
            return Oe;
        }
      }
    }
    var x = u, O = l, H = a, $ = i, T = e, I = c, Y = n, M = h, z = m, B = t, J = o, fe = s, re = d, ie = !1;
    function N(L) {
      return ie || (ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), S(L) || A(L) === u;
    }
    function S(L) {
      return A(L) === l;
    }
    function R(L) {
      return A(L) === a;
    }
    function F(L) {
      return A(L) === i;
    }
    function q(L) {
      return typeof L == "object" && L !== null && L.$$typeof === e;
    }
    function W(L) {
      return A(L) === c;
    }
    function ee(L) {
      return A(L) === n;
    }
    function U(L) {
      return A(L) === h;
    }
    function Z(L) {
      return A(L) === m;
    }
    function K(L) {
      return A(L) === t;
    }
    function te(L) {
      return A(L) === o;
    }
    function G(L) {
      return A(L) === s;
    }
    function Ce(L) {
      return A(L) === d;
    }
    me.AsyncMode = x, me.ConcurrentMode = O, me.ContextConsumer = H, me.ContextProvider = $, me.Element = T, me.ForwardRef = I, me.Fragment = Y, me.Lazy = M, me.Memo = z, me.Portal = B, me.Profiler = J, me.StrictMode = fe, me.Suspense = re, me.isAsyncMode = N, me.isConcurrentMode = S, me.isContextConsumer = R, me.isContextProvider = F, me.isElement = q, me.isForwardRef = W, me.isFragment = ee, me.isLazy = U, me.isMemo = Z, me.isPortal = K, me.isProfiler = te, me.isStrictMode = G, me.isSuspense = Ce, me.isValidElementType = y, me.typeOf = A;
  }()), me;
}
var Ys;
function ti() {
  return Ys || (Ys = 1, process.env.NODE_ENV === "production" ? fn.exports = rl() : fn.exports = sl()), fn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Xn, Ws;
function ol() {
  if (Ws) return Xn;
  Ws = 1;
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
  return Xn = s() ? Object.assign : function(o, i) {
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
  }, Xn;
}
var Zn, Qs;
function _r() {
  if (Qs) return Zn;
  Qs = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Zn = r, Zn;
}
var Kn, Xs;
function ni() {
  return Xs || (Xs = 1, Kn = Function.call.bind(Object.prototype.hasOwnProperty)), Kn;
}
var Gn, Zs;
function il() {
  if (Zs) return Gn;
  Zs = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = _r(), t = {}, n = ni();
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
  }, Gn = s, Gn;
}
var Jn, Ks;
function al() {
  if (Ks) return Jn;
  Ks = 1;
  var r = ti(), e = ol(), t = _r(), n = ni(), s = il(), o = function() {
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
  return Jn = function(a, u) {
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
      instanceOf: O,
      node: I(),
      objectOf: $,
      oneOf: H,
      oneOfType: T,
      shape: M,
      exact: z
    };
    function h(S, R) {
      return S === R ? S !== 0 || 1 / S === 1 / R : S !== S && R !== R;
    }
    function f(S, R) {
      this.message = S, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function b(S) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, F = 0;
      function q(ee, U, Z, K, te, G, Ce) {
        if (K = K || p, G = G || Z, Ce !== t) {
          if (u) {
            var L = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw L.name = "Invariant Violation", L;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Oe = K + ":" + Z;
            !R[Oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + K + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[Oe] = !0, F++);
          }
        }
        return U[Z] == null ? ee ? U[Z] === null ? new f("The " + te + " `" + G + "` is marked as required " + ("in `" + K + "`, but its value is `null`.")) : new f("The " + te + " `" + G + "` is marked as required in " + ("`" + K + "`, but its value is `undefined`.")) : null : S(U, Z, K, te, G);
      }
      var W = q.bind(null, !1);
      return W.isRequired = q.bind(null, !0), W;
    }
    function C(S) {
      function R(F, q, W, ee, U, Z) {
        var K = F[q], te = fe(K);
        if (te !== S) {
          var G = re(K);
          return new f(
            "Invalid " + ee + " `" + U + "` of type " + ("`" + G + "` supplied to `" + W + "`, expected ") + ("`" + S + "`."),
            { expectedType: S }
          );
        }
        return null;
      }
      return b(R);
    }
    function v() {
      return b(i);
    }
    function y(S) {
      function R(F, q, W, ee, U) {
        if (typeof S != "function")
          return new f("Property `" + U + "` of component `" + W + "` has invalid PropType notation inside arrayOf.");
        var Z = F[q];
        if (!Array.isArray(Z)) {
          var K = fe(Z);
          return new f("Invalid " + ee + " `" + U + "` of type " + ("`" + K + "` supplied to `" + W + "`, expected an array."));
        }
        for (var te = 0; te < Z.length; te++) {
          var G = S(Z, te, W, ee, U + "[" + te + "]", t);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return b(R);
    }
    function A() {
      function S(R, F, q, W, ee) {
        var U = R[F];
        if (!a(U)) {
          var Z = fe(U);
          return new f("Invalid " + W + " `" + ee + "` of type " + ("`" + Z + "` supplied to `" + q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(S);
    }
    function x() {
      function S(R, F, q, W, ee) {
        var U = R[F];
        if (!r.isValidElementType(U)) {
          var Z = fe(U);
          return new f("Invalid " + W + " `" + ee + "` of type " + ("`" + Z + "` supplied to `" + q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(S);
    }
    function O(S) {
      function R(F, q, W, ee, U) {
        if (!(F[q] instanceof S)) {
          var Z = S.name || p, K = N(F[q]);
          return new f("Invalid " + ee + " `" + U + "` of type " + ("`" + K + "` supplied to `" + W + "`, expected ") + ("instance of `" + Z + "`."));
        }
        return null;
      }
      return b(R);
    }
    function H(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), i;
      function R(F, q, W, ee, U) {
        for (var Z = F[q], K = 0; K < S.length; K++)
          if (h(Z, S[K]))
            return null;
        var te = JSON.stringify(S, function(Ce, L) {
          var Oe = re(L);
          return Oe === "symbol" ? String(L) : L;
        });
        return new f("Invalid " + ee + " `" + U + "` of value `" + String(Z) + "` " + ("supplied to `" + W + "`, expected one of " + te + "."));
      }
      return b(R);
    }
    function $(S) {
      function R(F, q, W, ee, U) {
        if (typeof S != "function")
          return new f("Property `" + U + "` of component `" + W + "` has invalid PropType notation inside objectOf.");
        var Z = F[q], K = fe(Z);
        if (K !== "object")
          return new f("Invalid " + ee + " `" + U + "` of type " + ("`" + K + "` supplied to `" + W + "`, expected an object."));
        for (var te in Z)
          if (n(Z, te)) {
            var G = S(Z, te, W, ee, U + "." + te, t);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return b(R);
    }
    function T(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var R = 0; R < S.length; R++) {
        var F = S[R];
        if (typeof F != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ie(F) + " at index " + R + "."
          ), i;
      }
      function q(W, ee, U, Z, K) {
        for (var te = [], G = 0; G < S.length; G++) {
          var Ce = S[G], L = Ce(W, ee, U, Z, K, t);
          if (L == null)
            return null;
          L.data && n(L.data, "expectedType") && te.push(L.data.expectedType);
        }
        var Oe = te.length > 0 ? ", expected one of type [" + te.join(", ") + "]" : "";
        return new f("Invalid " + Z + " `" + K + "` supplied to " + ("`" + U + "`" + Oe + "."));
      }
      return b(q);
    }
    function I() {
      function S(R, F, q, W, ee) {
        return B(R[F]) ? null : new f("Invalid " + W + " `" + ee + "` supplied to " + ("`" + q + "`, expected a ReactNode."));
      }
      return b(S);
    }
    function Y(S, R, F, q, W) {
      return new f(
        (S || "React class") + ": " + R + " type `" + F + "." + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + W + "`."
      );
    }
    function M(S) {
      function R(F, q, W, ee, U) {
        var Z = F[q], K = fe(Z);
        if (K !== "object")
          return new f("Invalid " + ee + " `" + U + "` of type `" + K + "` " + ("supplied to `" + W + "`, expected `object`."));
        for (var te in S) {
          var G = S[te];
          if (typeof G != "function")
            return Y(W, ee, U, te, re(G));
          var Ce = G(Z, te, W, ee, U + "." + te, t);
          if (Ce)
            return Ce;
        }
        return null;
      }
      return b(R);
    }
    function z(S) {
      function R(F, q, W, ee, U) {
        var Z = F[q], K = fe(Z);
        if (K !== "object")
          return new f("Invalid " + ee + " `" + U + "` of type `" + K + "` " + ("supplied to `" + W + "`, expected `object`."));
        var te = e({}, F[q], S);
        for (var G in te) {
          var Ce = S[G];
          if (n(S, G) && typeof Ce != "function")
            return Y(W, ee, U, G, re(Ce));
          if (!Ce)
            return new f(
              "Invalid " + ee + " `" + U + "` key `" + G + "` supplied to `" + W + "`.\nBad object: " + JSON.stringify(F[q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(S), null, "  ")
            );
          var L = Ce(Z, G, W, ee, U + "." + G, t);
          if (L)
            return L;
        }
        return null;
      }
      return b(R);
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
          var R = d(S);
          if (R) {
            var F = R.call(S), q;
            if (R !== S.entries) {
              for (; !(q = F.next()).done; )
                if (!B(q.value))
                  return !1;
            } else
              for (; !(q = F.next()).done; ) {
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
    function J(S, R) {
      return S === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function fe(S) {
      var R = typeof S;
      return Array.isArray(S) ? "array" : S instanceof RegExp ? "object" : J(R, S) ? "symbol" : R;
    }
    function re(S) {
      if (typeof S > "u" || S === null)
        return "" + S;
      var R = fe(S);
      if (R === "object") {
        if (S instanceof Date)
          return "date";
        if (S instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function ie(S) {
      var R = re(S);
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
    function N(S) {
      return !S.constructor || !S.constructor.name ? p : S.constructor.name;
    }
    return m.checkPropTypes = s, m.resetWarningCache = s.resetWarningCache, m.PropTypes = m, m;
  }, Jn;
}
var Vn, Gs;
function cl() {
  if (Gs) return Vn;
  Gs = 1;
  var r = _r();
  function e() {
  }
  function t() {
  }
  return t.resetWarningCache = e, Vn = function() {
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
  }, Vn;
}
if (process.env.NODE_ENV !== "production") {
  var ll = ti(), ul = !0;
  kr.exports = al()(ll.isElement, ul);
} else
  kr.exports = cl()();
var dl = kr.exports;
const be = /* @__PURE__ */ Pi(dl);
function wt(r, e, t, n) {
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
function kt(r, e) {
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
function Js(r, e) {
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
function Vs(r, e, t) {
  if (t || arguments.length === 2) for (var n = 0, s = e.length, o; n < s; n++)
    (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
  return r.concat(o || Array.prototype.slice.call(e));
}
var pl = /* @__PURE__ */ new Map([
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
function Vt(r, e) {
  var t = ml(r);
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
function ml(r) {
  var e = r.name, t = e && e.lastIndexOf(".") !== -1;
  if (t && !r.type) {
    var n = e.split(".").pop().toLowerCase(), s = pl.get(n);
    s && Object.defineProperty(r, "type", {
      value: s,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return r;
}
var hl = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function fl(r) {
  return wt(this, void 0, void 0, function() {
    return kt(this, function(e) {
      return Ln(r) && gl(r.dataTransfer) ? [2, xl(r.dataTransfer, r.type)] : vl(r) ? [2, yl(r)] : Array.isArray(r) && r.every(function(t) {
        return "getFile" in t && typeof t.getFile == "function";
      }) ? [2, bl(r)] : [2, []];
    });
  });
}
function gl(r) {
  return Ln(r);
}
function vl(r) {
  return Ln(r) && Ln(r.target);
}
function Ln(r) {
  return typeof r == "object" && r !== null;
}
function yl(r) {
  return Cr(r.target.files).map(function(e) {
    return Vt(e);
  });
}
function bl(r) {
  return wt(this, void 0, void 0, function() {
    var e;
    return kt(this, function(t) {
      switch (t.label) {
        case 0:
          return [4, Promise.all(r.map(function(n) {
            return n.getFile();
          }))];
        case 1:
          return e = t.sent(), [2, e.map(function(n) {
            return Vt(n);
          })];
      }
    });
  });
}
function xl(r, e) {
  return wt(this, void 0, void 0, function() {
    var t, n;
    return kt(this, function(s) {
      switch (s.label) {
        case 0:
          return r.items ? (t = Cr(r.items).filter(function(o) {
            return o.kind === "file";
          }), e !== "drop" ? [2, t] : [4, Promise.all(t.map(wl))]) : [3, 2];
        case 1:
          return n = s.sent(), [2, eo(ri(n))];
        case 2:
          return [2, eo(Cr(r.files).map(function(o) {
            return Vt(o);
          }))];
      }
    });
  });
}
function eo(r) {
  return r.filter(function(e) {
    return hl.indexOf(e.name) === -1;
  });
}
function Cr(r) {
  if (r === null)
    return [];
  for (var e = [], t = 0; t < r.length; t++) {
    var n = r[t];
    e.push(n);
  }
  return e;
}
function wl(r) {
  if (typeof r.webkitGetAsEntry != "function")
    return to(r);
  var e = r.webkitGetAsEntry();
  return e && e.isDirectory ? si(e) : to(r);
}
function ri(r) {
  return r.reduce(function(e, t) {
    return Vs(Vs([], Js(e), !1), Js(Array.isArray(t) ? ri(t) : [t]), !1);
  }, []);
}
function to(r) {
  var e = r.getAsFile();
  if (!e)
    return Promise.reject("".concat(r, " is not a File"));
  var t = Vt(e);
  return Promise.resolve(t);
}
function kl(r) {
  return wt(this, void 0, void 0, function() {
    return kt(this, function(e) {
      return [2, r.isDirectory ? si(r) : Cl(r)];
    });
  });
}
function si(r) {
  var e = r.createReader();
  return new Promise(function(t, n) {
    var s = [];
    function o() {
      var i = this;
      e.readEntries(function(a) {
        return wt(i, void 0, void 0, function() {
          var u, l, c;
          return kt(this, function(d) {
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
                c = Promise.all(a.map(kl)), s.push(c), o(), d.label = 6;
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
function Cl(r) {
  return wt(this, void 0, void 0, function() {
    return kt(this, function(e) {
      return [2, new Promise(function(t, n) {
        r.file(function(s) {
          var o = Vt(s, r.fullPath);
          t(o);
        }, function(s) {
          n(s);
        });
      })];
    });
  });
}
var Sl = function(r, e) {
  if (r && e) {
    var t = Array.isArray(e) ? e : e.split(","), n = r.name || "", s = (r.type || "").toLowerCase(), o = s.replace(/\/.*$/, "");
    return t.some(function(i) {
      var a = i.trim().toLowerCase();
      return a.charAt(0) === "." ? n.toLowerCase().endsWith(a) : a.endsWith("/*") ? o === a.replace(/\/.*$/, "") : s === a;
    });
  }
  return !0;
};
function no(r) {
  return Tl(r) || El(r) || ii(r) || Al();
}
function Al() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function El(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function Tl(r) {
  if (Array.isArray(r)) return Sr(r);
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
function so(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ro(Object(t), !0).forEach(function(n) {
      oi(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ro(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function oi(r, e, t) {
  return e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Wt(r, e) {
  return Rl(r) || Il(r, e) || ii(r, e) || Pl();
}
function Pl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ii(r, e) {
  if (r) {
    if (typeof r == "string") return Sr(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Sr(r, e);
  }
}
function Sr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++)
    n[t] = r[t];
  return n;
}
function Il(r, e) {
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
function Rl(r) {
  if (Array.isArray(r)) return r;
}
var Ol = "file-invalid-type", Ll = "file-too-large", Ml = "file-too-small", jl = "too-many-files", Bl = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: Ol,
    message: "File type must be ".concat(t)
  };
}, oo = function(e) {
  return {
    code: Ll,
    message: "File is larger than ".concat(e, " ").concat(e === 1 ? "byte" : "bytes")
  };
}, io = function(e) {
  return {
    code: Ml,
    message: "File is smaller than ".concat(e, " ").concat(e === 1 ? "byte" : "bytes")
  };
}, Dl = {
  code: jl,
  message: "Too many files"
};
function ai(r, e) {
  var t = r.type === "application/x-moz-file" || Sl(r, e);
  return [t, t ? null : Bl(e)];
}
function ci(r, e, t) {
  if (dt(r.size))
    if (dt(e) && dt(t)) {
      if (r.size > t) return [!1, oo(t)];
      if (r.size < e) return [!1, io(e)];
    } else {
      if (dt(e) && r.size < e) return [!1, io(e)];
      if (dt(t) && r.size > t) return [!1, oo(t)];
    }
  return [!0, null];
}
function dt(r) {
  return r != null;
}
function zl(r) {
  var e = r.files, t = r.accept, n = r.minSize, s = r.maxSize, o = r.multiple, i = r.maxFiles, a = r.validator;
  return !o && e.length > 1 || o && i >= 1 && e.length > i ? !1 : e.every(function(u) {
    var l = ai(u, t), c = Wt(l, 1), d = c[0], p = ci(u, n, s), m = Wt(p, 1), h = m[0], f = a ? a(u) : null;
    return d && h && !f;
  });
}
function Mn(r) {
  return typeof r.isPropagationStopped == "function" ? r.isPropagationStopped() : typeof r.cancelBubble < "u" ? r.cancelBubble : !1;
}
function gn(r) {
  return r.dataTransfer ? Array.prototype.some.call(r.dataTransfer.types, function(e) {
    return e === "Files" || e === "application/x-moz-file";
  }) : !!r.target && !!r.target.files;
}
function ao(r) {
  r.preventDefault();
}
function Fl(r) {
  return r.indexOf("MSIE") !== -1 || r.indexOf("Trident/") !== -1;
}
function Hl(r) {
  return r.indexOf("Edge/") !== -1;
}
function $l() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Fl(r) || Hl(r);
}
function Ge() {
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
function Nl() {
  return "showOpenFilePicker" in window;
}
function _l(r) {
  if (dt(r)) {
    var e = Object.entries(r).filter(function(t) {
      var n = Wt(t, 2), s = n[0], o = n[1], i = !0;
      return li(s) || (console.warn('Skipped "'.concat(s, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), i = !1), (!Array.isArray(o) || !o.every(ui)) && (console.warn('Skipped "'.concat(s, '" because an invalid file extension was provided.')), i = !1), i;
    }).reduce(function(t, n) {
      var s = Wt(n, 2), o = s[0], i = s[1];
      return so(so({}, t), {}, oi({}, o, i));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: e
    }];
  }
  return r;
}
function ql(r) {
  if (dt(r))
    return Object.entries(r).reduce(function(e, t) {
      var n = Wt(t, 2), s = n[0], o = n[1];
      return [].concat(no(e), [s], no(o));
    }, []).filter(function(e) {
      return li(e) || ui(e);
    }).join(",");
}
function Ul(r) {
  return r instanceof DOMException && (r.name === "AbortError" || r.code === r.ABORT_ERR);
}
function Yl(r) {
  return r instanceof DOMException && (r.name === "SecurityError" || r.code === r.SECURITY_ERR);
}
function li(r) {
  return r === "audio/*" || r === "video/*" || r === "image/*" || r === "text/*" || /\w+\/[-+.\w]+/g.test(r);
}
function ui(r) {
  return /^.*\.[\w]+$/.test(r);
}
var Wl = ["children"], Ql = ["open"], Xl = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Zl = ["refKey", "onChange", "onClick"];
function Kl(r) {
  return Vl(r) || Jl(r) || di(r) || Gl();
}
function Gl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jl(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function Vl(r) {
  if (Array.isArray(r)) return Ar(r);
}
function er(r, e) {
  return nu(r) || tu(r, e) || di(r, e) || eu();
}
function eu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function di(r, e) {
  if (r) {
    if (typeof r == "string") return Ar(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ar(r, e);
  }
}
function Ar(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++)
    n[t] = r[t];
  return n;
}
function tu(r, e) {
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
function nu(r) {
  if (Array.isArray(r)) return r;
}
function co(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Ee(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? co(Object(t), !0).forEach(function(n) {
      Er(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : co(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function Er(r, e, t) {
  return e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function jn(r, e) {
  if (r == null) return {};
  var t = ru(r, e), n, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (s = 0; s < o.length; s++)
      n = o[s], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function ru(r, e) {
  if (r == null) return {};
  var t = {}, n = Object.keys(r), s, o;
  for (o = 0; o < n.length; o++)
    s = n[o], !(e.indexOf(s) >= 0) && (t[s] = r[s]);
  return t;
}
var qr = /* @__PURE__ */ Qt(function(r, e) {
  var t = r.children, n = jn(r, Wl), s = mi(n), o = s.open, i = jn(s, Ql);
  return Xt(e, function() {
    return {
      open: o
    };
  }, [o]), /* @__PURE__ */ Xe.createElement(Ti, null, t(Ee(Ee({}, i), {}, {
    open: o
  })));
});
qr.displayName = "Dropzone";
var pi = {
  disabled: !1,
  getFilesFromEvent: fl,
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
qr.defaultProps = pi;
qr.propTypes = {
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
  children: be.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: be.objectOf(be.arrayOf(be.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: be.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: be.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: be.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: be.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: be.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: be.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: be.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: be.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: be.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: be.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: be.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: be.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: be.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: be.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: be.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: be.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: be.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: be.func,
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
  onDrop: be.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: be.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: be.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: be.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: be.func
};
var Tr = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function mi() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = Ee(Ee({}, pi), r), t = e.accept, n = e.disabled, s = e.getFilesFromEvent, o = e.maxSize, i = e.minSize, a = e.multiple, u = e.maxFiles, l = e.onDragEnter, c = e.onDragLeave, d = e.onDragOver, p = e.onDrop, m = e.onDropAccepted, h = e.onDropRejected, f = e.onFileDialogCancel, b = e.onFileDialogOpen, C = e.useFsAccessApi, v = e.autoFocus, y = e.preventDropOnDocument, A = e.noClick, x = e.noKeyboard, O = e.noDrag, H = e.noDragEventsBubbling, $ = e.onError, T = e.validator, I = V(function() {
    return ql(t);
  }, [t]), Y = V(function() {
    return _l(t);
  }, [t]), M = V(function() {
    return typeof b == "function" ? b : lo;
  }, [b]), z = V(function() {
    return typeof f == "function" ? f : lo;
  }, [f]), B = xe(null), J = xe(null), fe = Ei(su, Tr), re = er(fe, 2), ie = re[0], N = re[1], S = ie.isFocused, R = ie.isFileDialogActive, F = xe(typeof window < "u" && window.isSecureContext && C && Nl()), q = function() {
    !F.current && R && setTimeout(function() {
      if (J.current) {
        var _ = J.current.files;
        _.length || (N({
          type: "closeDialog"
        }), z());
      }
    }, 300);
  };
  le(function() {
    return window.addEventListener("focus", q, !1), function() {
      window.removeEventListener("focus", q, !1);
    };
  }, [J, R, z, F]);
  var W = xe([]), ee = function(_) {
    B.current && B.current.contains(_.target) || (_.preventDefault(), W.current = []);
  };
  le(function() {
    return y && (document.addEventListener("dragover", ao, !1), document.addEventListener("drop", ee, !1)), function() {
      y && (document.removeEventListener("dragover", ao), document.removeEventListener("drop", ee));
    };
  }, [B, y]), le(function() {
    return !n && v && B.current && B.current.focus(), function() {
    };
  }, [B, v, n]);
  var U = he(function(P) {
    $ ? $(P) : console.error(P);
  }, [$]), Z = he(function(P) {
    P.preventDefault(), P.persist(), we(P), W.current = [].concat(Kl(W.current), [P.target]), gn(P) && Promise.resolve(s(P)).then(function(_) {
      if (!(Mn(P) && !H)) {
        var ue = _.length, ce = ue > 0 && zl({
          files: _,
          accept: I,
          minSize: i,
          maxSize: o,
          multiple: a,
          maxFiles: u,
          validator: T
        }), Re = ue > 0 && !ce;
        N({
          isDragAccept: ce,
          isDragReject: Re,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), l && l(P);
      }
    }).catch(function(_) {
      return U(_);
    });
  }, [s, l, U, H, I, i, o, a, u, T]), K = he(function(P) {
    P.preventDefault(), P.persist(), we(P);
    var _ = gn(P);
    if (_ && P.dataTransfer)
      try {
        P.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return _ && d && d(P), !1;
  }, [d, H]), te = he(function(P) {
    P.preventDefault(), P.persist(), we(P);
    var _ = W.current.filter(function(ce) {
      return B.current && B.current.contains(ce);
    }), ue = _.indexOf(P.target);
    ue !== -1 && _.splice(ue, 1), W.current = _, !(_.length > 0) && (N({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), gn(P) && c && c(P));
  }, [B, c, H]), G = he(function(P, _) {
    var ue = [], ce = [];
    P.forEach(function(Re) {
      var Ye = ai(Re, I), Ve = er(Ye, 2), ot = Ve[0], Ct = Ve[1], St = ci(Re, i, o), ht = er(St, 2), At = ht[0], Et = ht[1], Tt = T ? T(Re) : null;
      if (ot && At && !Tt)
        ue.push(Re);
      else {
        var Pt = [Ct, Et];
        Tt && (Pt = Pt.concat(Tt)), ce.push({
          file: Re,
          errors: Pt.filter(function(It) {
            return It;
          })
        });
      }
    }), (!a && ue.length > 1 || a && u >= 1 && ue.length > u) && (ue.forEach(function(Re) {
      ce.push({
        file: Re,
        errors: [Dl]
      });
    }), ue.splice(0)), N({
      acceptedFiles: ue,
      fileRejections: ce,
      type: "setFiles"
    }), p && p(ue, ce, _), ce.length > 0 && h && h(ce, _), ue.length > 0 && m && m(ue, _);
  }, [N, a, I, i, o, u, p, m, h, T]), Ce = he(function(P) {
    P.preventDefault(), P.persist(), we(P), W.current = [], gn(P) && Promise.resolve(s(P)).then(function(_) {
      Mn(P) && !H || G(_, P);
    }).catch(function(_) {
      return U(_);
    }), N({
      type: "reset"
    });
  }, [s, G, U, H]), L = he(function() {
    if (F.current) {
      N({
        type: "openDialog"
      }), M();
      var P = {
        multiple: a,
        types: Y
      };
      window.showOpenFilePicker(P).then(function(_) {
        return s(_);
      }).then(function(_) {
        G(_, null), N({
          type: "closeDialog"
        });
      }).catch(function(_) {
        Ul(_) ? (z(_), N({
          type: "closeDialog"
        })) : Yl(_) ? (F.current = !1, J.current ? (J.current.value = null, J.current.click()) : U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : U(_);
      });
      return;
    }
    J.current && (N({
      type: "openDialog"
    }), M(), J.current.value = null, J.current.click());
  }, [N, M, z, C, G, U, Y, a]), Oe = he(function(P) {
    !B.current || !B.current.isEqualNode(P.target) || (P.key === " " || P.key === "Enter" || P.keyCode === 32 || P.keyCode === 13) && (P.preventDefault(), L());
  }, [B, L]), _e = he(function() {
    N({
      type: "focus"
    });
  }, []), He = he(function() {
    N({
      type: "blur"
    });
  }, []), k = he(function() {
    A || ($l() ? setTimeout(L, 0) : L());
  }, [A, L]), j = function(_) {
    return n ? null : _;
  }, Q = function(_) {
    return x ? null : j(_);
  }, oe = function(_) {
    return O ? null : j(_);
  }, we = function(_) {
    H && _.stopPropagation();
  }, ke = V(function() {
    return function() {
      var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ = P.refKey, ue = _ === void 0 ? "ref" : _, ce = P.role, Re = P.onKeyDown, Ye = P.onFocus, Ve = P.onBlur, ot = P.onClick, Ct = P.onDragEnter, St = P.onDragOver, ht = P.onDragLeave, At = P.onDrop, Et = jn(P, Xl);
      return Ee(Ee(Er({
        onKeyDown: Q(Ge(Re, Oe)),
        onFocus: Q(Ge(Ye, _e)),
        onBlur: Q(Ge(Ve, He)),
        onClick: j(Ge(ot, k)),
        onDragEnter: oe(Ge(Ct, Z)),
        onDragOver: oe(Ge(St, K)),
        onDragLeave: oe(Ge(ht, te)),
        onDrop: oe(Ge(At, Ce)),
        role: typeof ce == "string" && ce !== "" ? ce : "presentation"
      }, ue, B), !n && !x ? {
        tabIndex: 0
      } : {}), Et);
    };
  }, [B, Oe, _e, He, k, Z, K, te, Ce, x, O, n]), ae = he(function(P) {
    P.stopPropagation();
  }, []), Pe = V(function() {
    return function() {
      var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ = P.refKey, ue = _ === void 0 ? "ref" : _, ce = P.onChange, Re = P.onClick, Ye = jn(P, Zl), Ve = Er({
        accept: I,
        multiple: a,
        type: "file",
        style: {
          display: "none"
        },
        onChange: j(Ge(ce, Ce)),
        onClick: j(Ge(Re, ae)),
        tabIndex: -1
      }, ue, J);
      return Ee(Ee({}, Ve), Ye);
    };
  }, [J, t, a, Ce, n]);
  return Ee(Ee({}, ie), {}, {
    isFocused: S && !n,
    getRootProps: ke,
    getInputProps: Pe,
    rootRef: B,
    inputRef: J,
    open: j(L)
  });
}
function su(r, e) {
  switch (e.type) {
    case "focus":
      return Ee(Ee({}, r), {}, {
        isFocused: !0
      });
    case "blur":
      return Ee(Ee({}, r), {}, {
        isFocused: !1
      });
    case "openDialog":
      return Ee(Ee({}, Tr), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return Ee(Ee({}, r), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return Ee(Ee({}, r), {}, {
        isDragActive: e.isDragActive,
        isDragAccept: e.isDragAccept,
        isDragReject: e.isDragReject
      });
    case "setFiles":
      return Ee(Ee({}, r), {}, {
        acceptedFiles: e.acceptedFiles,
        fileRejections: e.fileRejections
      });
    case "reset":
      return Ee({}, Tr);
    default:
      return r;
  }
}
function lo() {
}
const ou = (r) => /* @__PURE__ */ w.jsx("svg", { ...r, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ w.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12h14" }) }), iu = () => /* @__PURE__ */ w.jsxs("svg", { viewBox: "0 0 200 200", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), au = ({ files: r }) => /* @__PURE__ */ w.jsx(w.Fragment, { children: r.map((e) => /* @__PURE__ */ w.jsx("div", { className: "thumbnail m-2", children: /* @__PURE__ */ w.jsx("div", { className: "thumbnailInner", children: /* @__PURE__ */ w.jsx("img", { src: e.preview, alt: e.name, className: "w-[150px]" }) }) }, e.name)) }), cu = ({ files: r, setFiles: e }) => {
  const t = he((i) => {
    e((a) => [...a, ...i.map((u) => Object.assign(u, {
      preview: URL.createObjectURL(u)
    }))]);
  }, []), { getRootProps: n, getInputProps: s } = mi({ onDrop: t }), o = (i) => () => {
    const a = r.filter((u) => u !== i);
    e(a);
  };
  return /* @__PURE__ */ w.jsxs("div", { className: "flex flex-col w-[100%] dropzone border", children: [
    /* @__PURE__ */ w.jsxs("div", { ...n(), className: "flex items-center justify-center p-4 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-gray-500", children: [
      /* @__PURE__ */ w.jsx("input", { ...s() }),
      /* @__PURE__ */ w.jsx("p", { className: "text-gray-600", children: "Drag & drop images, or click to select files" })
    ] }),
    /* @__PURE__ */ w.jsx("aside", { className: "flex flex-wrap mt-4", children: r.map((i) => /* @__PURE__ */ w.jsxs("div", { className: "relative m-2", children: [
      /* @__PURE__ */ w.jsx("button", { onClick: o(i), className: "absolute top-0 right-0 p-1 bg-red-500 rounded-full text-white", children: /* @__PURE__ */ w.jsx(ou, { className: "w-4 h-4" }) }),
      /* @__PURE__ */ w.jsx("div", { className: "border p-1 rounded-lg", children: /* @__PURE__ */ w.jsx("img", { src: i.preview, alt: i.name, className: "w-12 h-12 object-cover rounded-lg" }) })
    ] }, i.name)) })
  ] });
};
function ku(r) {
  var C, v;
  const e = r.advancedOptions || {}, t = e.conversationOptions || {
    layout: "bubbles"
  }, [n, s] = je([]), o = nl({ ...r, files: n }), { controls: i } = r, [a, u] = je(/* @__PURE__ */ new Map()), l = (y, A) => {
    u((x) => new Map(x.set(y, A)));
  }, c = ({ prompt: y, uid: A }) => {
    const x = a.get(A);
    return /* @__PURE__ */ w.jsxs("div", { className: "rounded-lg shadow-sm", children: [
      /* @__PURE__ */ w.jsx("span", { className: "block", children: y }),
      /* @__PURE__ */ w.jsx("div", { className: "mt-2", children: x && /* @__PURE__ */ w.jsx(au, { files: x }) })
    ] });
  }, d = Object.assign(
    {},
    { colorScheme: "light", themeId: "langdb" },
    e.displayOptions
  ), p = e.composerOptions || {
    placeholder: "How can i help you today ?"
  }, m = Object.assign({}, {
    assistant: Object.assign({}, {
      name: "LangDB",
      tagline: `
              Easily build and deploy AI agents with SQL.
              Customize with our React widget on`,
      avatar: /* @__PURE__ */ w.jsx(iu, {})
    }, (C = r.personaOptions) == null ? void 0 : C.assistant),
    user: Object.assign({}, {
      name: "User",
      avatar: /* @__PURE__ */ w.jsx($c, {})
    })
  }, (v = r.personaOptions) == null ? void 0 : v.user), h = he((y) => {
    n && (l(y.uid, [...n]), s([]));
  }, [l]), f = he(() => {
  }, []), b = r.className || "";
  return /* @__PURE__ */ w.jsxs("div", { className: "flex flex-col w-[100%] h-full", children: [
    (i == null ? void 0 : i.enableFiles) && /* @__PURE__ */ w.jsx(cu, { files: n, setFiles: s }),
    /* @__PURE__ */ w.jsx("div", { className: "flex-1 w-full relative", children: /* @__PURE__ */ w.jsx(
      "main",
      {
        className: `items-center justify-between  ${b} h-full absolute`,
        style: r.style || {},
        children: /* @__PURE__ */ w.jsx(
          Oc,
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
function tr(...r) {
  return r.filter(Boolean).join(" ");
}
const Cu = (r) => {
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
  } = r, [d, p] = je(!1), [m, h] = je(l || !1), f = he(() => {
    p((b) => !b);
  }, []);
  return /* @__PURE__ */ w.jsxs("div", { className: tr(s || "dark"), children: [
    d && /* @__PURE__ */ w.jsxs(
      "div",
      {
        style: m ? u : {},
        className: tr(
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
                      children: /* @__PURE__ */ w.jsx(uu, {})
                    }
                  ),
                  !(c != null && c.hideMaximise) && /* @__PURE__ */ w.jsx(
                    "button",
                    {
                      onClick: () => {
                        h((b) => !b), t && t();
                      },
                      children: m ? /* @__PURE__ */ w.jsx(pu, {}) : /* @__PURE__ */ w.jsx(du, {})
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
        className: tr(
          n || "",
          "fixed text-white bg-primary hover:bg-primary-800 bottom-5 right-5 flex w-[50px] hover:scale-110 scale-100 h-[50px] justify-center items-center p-[10px] rounded-full cursor-pointer shadow-none hover:shadow-xl transition ease-in-out"
        ),
        onClick: f,
        children: /* @__PURE__ */ w.jsx(lu, {})
      }
    )
  ] });
}, lu = () => /* @__PURE__ */ w.jsx(
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
        "stroke-linejoin": "round",
        d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      }
    )
  }
), uu = () => /* @__PURE__ */ w.jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ w.jsx("path", { d: "M19 13H5v-2h14v2z" })
  }
), du = () => /* @__PURE__ */ w.jsx(
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
), pu = () => /* @__PURE__ */ w.jsx(
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
  lu as ChatIcon,
  Cu as FloatingChatWidget,
  qc as ImageDetail,
  Nc as MessageContentType,
  _c as MessageType,
  ku as Widget,
  Uc as createInnerMessage
};
//# sourceMappingURL=index.es.js.map
