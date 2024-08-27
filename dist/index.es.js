import * as Ue from "react";
import Ve, { createContext as oo, useRef as Ee, useState as Te, useEffect as he, useMemo as ue, useCallback as Ce, forwardRef as an, useContext as As, lazy as Bc, isValidElement as Lt, Suspense as zc, createRef as es, useImperativeHandle as on, Component as Fc, useReducer as Uc, Fragment as $c } from "react";
function co(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var ts = { exports: {} }, Ft = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ta;
function Hc() {
  if (ta) return Ft;
  ta = 1;
  var n = Ve, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(o, u, l) {
    var c, d = {}, p = null, m = null;
    l !== void 0 && (p = "" + l), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (m = u.ref);
    for (c in u) r.call(u, c) && !a.hasOwnProperty(c) && (d[c] = u[c]);
    if (o && o.defaultProps) for (c in u = o.defaultProps, u) d[c] === void 0 && (d[c] = u[c]);
    return { $$typeof: e, type: o, key: p, ref: m, props: d, _owner: s.current };
  }
  return Ft.Fragment = t, Ft.jsx = i, Ft.jsxs = i, Ft;
}
var Ut = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var na;
function jc() {
  return na || (na = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ve, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, g = "@@iterator";
    function f(v) {
      if (v === null || typeof v != "object")
        return null;
      var F = h && v[h] || v[g];
      return typeof F == "function" ? F : null;
    }
    var E = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(v) {
      {
        for (var F = arguments.length, Z = new Array(F > 1 ? F - 1 : 0), le = 1; le < F; le++)
          Z[le - 1] = arguments[le];
        y("error", v, Z);
      }
    }
    function y(v, F, Z) {
      {
        var le = E.ReactDebugCurrentFrame, ke = le.getStackAddendum();
        ke !== "" && (F += "%s", Z = Z.concat([ke]));
        var Oe = Z.map(function(ye) {
          return String(ye);
        });
        Oe.unshift("Warning: " + F), Function.prototype.apply.call(console[v], console, Oe);
      }
    }
    var S = !1, w = !1, I = !1, z = !1, R = !1, T;
    T = Symbol.for("react.module.reference");
    function A(v) {
      return !!(typeof v == "string" || typeof v == "function" || v === r || v === a || R || v === s || v === l || v === c || z || v === m || S || w || I || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === d || v.$$typeof === i || v.$$typeof === o || v.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      v.$$typeof === T || v.getModuleId !== void 0));
    }
    function $(v, F, Z) {
      var le = v.displayName;
      if (le)
        return le;
      var ke = F.displayName || F.name || "";
      return ke !== "" ? Z + "(" + ke + ")" : Z;
    }
    function D(v) {
      return v.displayName || "Context";
    }
    function H(v) {
      if (v == null)
        return null;
      if (typeof v.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof v == "function")
        return v.displayName || v.name || null;
      if (typeof v == "string")
        return v;
      switch (v) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case a:
          return "Profiler";
        case s:
          return "StrictMode";
        case l:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case o:
            var F = v;
            return D(F) + ".Consumer";
          case i:
            var Z = v;
            return D(Z._context) + ".Provider";
          case u:
            return $(v, v.render, "ForwardRef");
          case d:
            var le = v.displayName || null;
            return le !== null ? le : H(v.type) || "Memo";
          case p: {
            var ke = v, Oe = ke._payload, ye = ke._init;
            try {
              return H(ye(Oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, W = 0, oe, C, L, N, k, O, j;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function ee() {
      {
        if (W === 0) {
          oe = console.log, C = console.info, L = console.warn, N = console.error, k = console.group, O = console.groupCollapsed, j = console.groupEnd;
          var v = {
            configurable: !0,
            enumerable: !0,
            value: X,
            writable: !0
          };
          Object.defineProperties(console, {
            info: v,
            log: v,
            warn: v,
            error: v,
            group: v,
            groupCollapsed: v,
            groupEnd: v
          });
        }
        W++;
      }
    }
    function te() {
      {
        if (W--, W === 0) {
          var v = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, v, {
              value: oe
            }),
            info: P({}, v, {
              value: C
            }),
            warn: P({}, v, {
              value: L
            }),
            error: P({}, v, {
              value: N
            }),
            group: P({}, v, {
              value: k
            }),
            groupCollapsed: P({}, v, {
              value: O
            }),
            groupEnd: P({}, v, {
              value: j
            })
          });
        }
        W < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = E.ReactCurrentDispatcher, V;
    function Q(v, F, Z) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (ke) {
            var le = ke.stack.trim().match(/\n( *(at )?)/);
            V = le && le[1] || "";
          }
        return `
` + V + v;
      }
    }
    var ae = !1, ne;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new fe();
    }
    function U(v, F) {
      if (!v || ae)
        return "";
      {
        var Z = ne.get(v);
        if (Z !== void 0)
          return Z;
      }
      var le;
      ae = !0;
      var ke = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Oe;
      Oe = Y.current, Y.current = null, ee();
      try {
        if (F) {
          var ye = function() {
            throw Error();
          };
          if (Object.defineProperty(ye.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ye, []);
            } catch (We) {
              le = We;
            }
            Reflect.construct(v, [], ye);
          } else {
            try {
              ye.call();
            } catch (We) {
              le = We;
            }
            v.call(ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (We) {
            le = We;
          }
          v();
        }
      } catch (We) {
        if (We && le && typeof We.stack == "string") {
          for (var be = We.stack.split(`
`), Ge = le.stack.split(`
`), Be = be.length - 1, Fe = Ge.length - 1; Be >= 1 && Fe >= 0 && be[Be] !== Ge[Fe]; )
            Fe--;
          for (; Be >= 1 && Fe >= 0; Be--, Fe--)
            if (be[Be] !== Ge[Fe]) {
              if (Be !== 1 || Fe !== 1)
                do
                  if (Be--, Fe--, Fe < 0 || be[Be] !== Ge[Fe]) {
                    var Qe = `
` + be[Be].replace(" at new ", " at ");
                    return v.displayName && Qe.includes("<anonymous>") && (Qe = Qe.replace("<anonymous>", v.displayName)), typeof v == "function" && ne.set(v, Qe), Qe;
                  }
                while (Be >= 1 && Fe >= 0);
              break;
            }
        }
      } finally {
        ae = !1, Y.current = Oe, te(), Error.prepareStackTrace = ke;
      }
      var It = v ? v.displayName || v.name : "", vt = It ? Q(It) : "";
      return typeof v == "function" && ne.set(v, vt), vt;
    }
    function we(v, F, Z) {
      return U(v, !1);
    }
    function ze(v) {
      var F = v.prototype;
      return !!(F && F.isReactComponent);
    }
    function $e(v, F, Z) {
      if (v == null)
        return "";
      if (typeof v == "function")
        return U(v, ze(v));
      if (typeof v == "string")
        return Q(v);
      switch (v) {
        case l:
          return Q("Suspense");
        case c:
          return Q("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case u:
            return we(v.render);
          case d:
            return $e(v.type, F, Z);
          case p: {
            var le = v, ke = le._payload, Oe = le._init;
            try {
              return $e(Oe(ke), F, Z);
            } catch {
            }
          }
        }
      return "";
    }
    var _ = Object.prototype.hasOwnProperty, G = {}, se = E.ReactDebugCurrentFrame;
    function q(v) {
      if (v) {
        var F = v._owner, Z = $e(v.type, v._source, F ? F.type : null);
        se.setExtraStackFrame(Z);
      } else
        se.setExtraStackFrame(null);
    }
    function xe(v, F, Z, le, ke) {
      {
        var Oe = Function.call.bind(_);
        for (var ye in v)
          if (Oe(v, ye)) {
            var be = void 0;
            try {
              if (typeof v[ye] != "function") {
                var Ge = Error((le || "React class") + ": " + Z + " type `" + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ge.name = "Invariant Violation", Ge;
              }
              be = v[ye](F, ye, le, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Be) {
              be = Be;
            }
            be && !(be instanceof Error) && (q(ke), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", Z, ye, typeof be), q(null)), be instanceof Error && !(be.message in G) && (G[be.message] = !0, q(ke), b("Failed %s type: %s", Z, be.message), q(null));
          }
      }
    }
    var ce = Array.isArray;
    function re(v) {
      return ce(v);
    }
    function Re(v) {
      {
        var F = typeof Symbol == "function" && Symbol.toStringTag, Z = F && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return Z;
      }
    }
    function B(v) {
      try {
        return J(v), !1;
      } catch {
        return !0;
      }
    }
    function J(v) {
      return "" + v;
    }
    function me(v) {
      if (B(v))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Re(v)), J(v);
    }
    var M = E.ReactCurrentOwner, K = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ie, pe, Me;
    Me = {};
    function He(v) {
      if (_.call(v, "ref")) {
        var F = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (F && F.isReactWarning)
          return !1;
      }
      return v.ref !== void 0;
    }
    function ot(v) {
      if (_.call(v, "key")) {
        var F = Object.getOwnPropertyDescriptor(v, "key").get;
        if (F && F.isReactWarning)
          return !1;
      }
      return v.key !== void 0;
    }
    function tt(v, F) {
      if (typeof v.ref == "string" && M.current && F && M.current.stateNode !== F) {
        var Z = H(M.current.type);
        Me[Z] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(M.current.type), v.ref), Me[Z] = !0);
      }
    }
    function ft(v, F) {
      {
        var Z = function() {
          ie || (ie = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        Z.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: Z,
          configurable: !0
        });
      }
    }
    function bt(v, F) {
      {
        var Z = function() {
          pe || (pe = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        Z.isReactWarning = !0, Object.defineProperty(v, "ref", {
          get: Z,
          configurable: !0
        });
      }
    }
    var yt = function(v, F, Z, le, ke, Oe, ye) {
      var be = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: v,
        key: F,
        ref: Z,
        props: ye,
        // Record the component responsible for creating this element.
        _owner: Oe
      };
      return be._store = {}, Object.defineProperty(be._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(be, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.defineProperty(be, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ke
      }), Object.freeze && (Object.freeze(be.props), Object.freeze(be)), be;
    };
    function ve(v, F, Z, le, ke) {
      {
        var Oe, ye = {}, be = null, Ge = null;
        Z !== void 0 && (me(Z), be = "" + Z), ot(F) && (me(F.key), be = "" + F.key), He(F) && (Ge = F.ref, tt(F, ke));
        for (Oe in F)
          _.call(F, Oe) && !K.hasOwnProperty(Oe) && (ye[Oe] = F[Oe]);
        if (v && v.defaultProps) {
          var Be = v.defaultProps;
          for (Oe in Be)
            ye[Oe] === void 0 && (ye[Oe] = Be[Oe]);
        }
        if (be || Ge) {
          var Fe = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
          be && ft(ye, Fe), Ge && bt(ye, Fe);
        }
        return yt(v, be, Ge, ke, le, M.current, ye);
      }
    }
    var nt = E.ReactCurrentOwner, dt = E.ReactDebugCurrentFrame;
    function pt(v) {
      if (v) {
        var F = v._owner, Z = $e(v.type, v._source, F ? F.type : null);
        dt.setExtraStackFrame(Z);
      } else
        dt.setExtraStackFrame(null);
    }
    var Vn;
    Vn = !1;
    function Jn(v) {
      return typeof v == "object" && v !== null && v.$$typeof === e;
    }
    function Zs() {
      {
        if (nt.current) {
          var v = H(nt.current.type);
          if (v)
            return `

Check the render method of \`` + v + "`.";
        }
        return "";
      }
    }
    function Tc(v) {
      return "";
    }
    var Qs = {};
    function Ac(v) {
      {
        var F = Zs();
        if (!F) {
          var Z = typeof v == "string" ? v : v.displayName || v.name;
          Z && (F = `

Check the top-level render call using <` + Z + ">.");
        }
        return F;
      }
    }
    function Xs(v, F) {
      {
        if (!v._store || v._store.validated || v.key != null)
          return;
        v._store.validated = !0;
        var Z = Ac(F);
        if (Qs[Z])
          return;
        Qs[Z] = !0;
        var le = "";
        v && v._owner && v._owner !== nt.current && (le = " It was passed a child from " + H(v._owner.type) + "."), pt(v), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, le), pt(null);
      }
    }
    function Vs(v, F) {
      {
        if (typeof v != "object")
          return;
        if (re(v))
          for (var Z = 0; Z < v.length; Z++) {
            var le = v[Z];
            Jn(le) && Xs(le, F);
          }
        else if (Jn(v))
          v._store && (v._store.validated = !0);
        else if (v) {
          var ke = f(v);
          if (typeof ke == "function" && ke !== v.entries)
            for (var Oe = ke.call(v), ye; !(ye = Oe.next()).done; )
              Jn(ye.value) && Xs(ye.value, F);
        }
      }
    }
    function Ic(v) {
      {
        var F = v.type;
        if (F == null || typeof F == "string")
          return;
        var Z;
        if (typeof F == "function")
          Z = F.propTypes;
        else if (typeof F == "object" && (F.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        F.$$typeof === d))
          Z = F.propTypes;
        else
          return;
        if (Z) {
          var le = H(F);
          xe(Z, v.props, "prop", le, v);
        } else if (F.PropTypes !== void 0 && !Vn) {
          Vn = !0;
          var ke = H(F);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ke || "Unknown");
        }
        typeof F.getDefaultProps == "function" && !F.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rc(v) {
      {
        for (var F = Object.keys(v.props), Z = 0; Z < F.length; Z++) {
          var le = F[Z];
          if (le !== "children" && le !== "key") {
            pt(v), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), pt(null);
            break;
          }
        }
        v.ref !== null && (pt(v), b("Invalid attribute `ref` supplied to `React.Fragment`."), pt(null));
      }
    }
    var Js = {};
    function ea(v, F, Z, le, ke, Oe) {
      {
        var ye = A(v);
        if (!ye) {
          var be = "";
          (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (be += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ge = Tc();
          Ge ? be += Ge : be += Zs();
          var Be;
          v === null ? Be = "null" : re(v) ? Be = "array" : v !== void 0 && v.$$typeof === e ? (Be = "<" + (H(v.type) || "Unknown") + " />", be = " Did you accidentally export a JSX literal instead of a component?") : Be = typeof v, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Be, be);
        }
        var Fe = ve(v, F, Z, ke, Oe);
        if (Fe == null)
          return Fe;
        if (ye) {
          var Qe = F.children;
          if (Qe !== void 0)
            if (le)
              if (re(Qe)) {
                for (var It = 0; It < Qe.length; It++)
                  Vs(Qe[It], v);
                Object.freeze && Object.freeze(Qe);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Vs(Qe, v);
        }
        if (_.call(F, "key")) {
          var vt = H(v), We = Object.keys(F).filter(function(Pc) {
            return Pc !== "key";
          }), er = We.length > 0 ? "{key: someKey, " + We.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Js[vt + er]) {
            var Lc = We.length > 0 ? "{" + We.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, er, vt, Lc, vt), Js[vt + er] = !0;
          }
        }
        return v === r ? Rc(Fe) : Ic(Fe), Fe;
      }
    }
    function Oc(v, F, Z) {
      return ea(v, F, Z, !0);
    }
    function Nc(v, F, Z) {
      return ea(v, F, Z, !1);
    }
    var Mc = Nc, Dc = Oc;
    Ut.Fragment = r, Ut.jsx = Mc, Ut.jsxs = Dc;
  }()), Ut;
}
process.env.NODE_ENV === "production" ? ts.exports = Hc() : ts.exports = jc();
var x = ts.exports, qc = Object.defineProperty, mn = (n, e, t) => ((r, s, a) => s in r ? qc(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[s] = a)(n, typeof e != "symbol" ? e + "" : e, t);
class mt extends Error {
  constructor(e = {}) {
    super(e.message), mn(this, "exceptionId"), mn(this, "message"), mn(this, "source"), mn(this, "type"), this.message = e.message ?? "", this.source = e.source, this.type = this.constructor.name, this.exceptionId = e.exceptionId;
  }
}
class Et extends mt {
}
let Dn = class extends mt {
};
const de = (n) => {
  typeof n != "string" ? n && typeof n.toString == "function" ? console.warn(`[nlux] ${n.toString()}`) : console.warn("[nlux]") : console.warn(`[nlux] ${n}`);
}, ra = [], ns = (n) => {
  ra.includes(n) || (ra.push(n), de(n));
}, lo = class On {
  static register(e) {
    const t = e.__compId;
    t ? On.componentDefs.get(t) === void 0 && (e.__renderer && e.__updater ? On.componentDefs.set(t, { id: t, model: e, render: e.__renderer, update: e.__updater }) : de(`Component with id "${t}" missing renderer or updater`)) : de("Component definition missing valid id");
  }
  static retrieve(e) {
    const t = On.componentDefs.get(e);
    if (t) return t;
    de(`Component with id "${e}" not registered`);
  }
};
lo.componentDefs = /* @__PURE__ */ new Map();
let uo = lo;
btoa("sectionsRegistered") + "";
const it = (n) => {
  const e = requestAnimationFrame(() => {
    n();
  });
  return () => {
    cancelAnimationFrame(e);
  };
}, en = (n) => {
  n.replaceChildren();
}, Je = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (n) => {
  const e = 16 * Math.random() | 0;
  return (n == "x" ? e : 3 & e | 8).toString(16);
});
class Xe {
  constructor(e, t) {
    this.subComponentElementIds = /* @__PURE__ */ new Map(), this.subComponents = /* @__PURE__ */ new Map(), this.__context = null, this.__destroyed = !1, this.__status = "unmounted", this.actionsOnDomReady = [], this.compEventGetter = (i) => {
      if (this.destroyed) return () => {
      };
      const o = this.rendererEventListeners.get(i);
      if (!o) throw new mt({ source: this.constructor.name, message: `Unable to call renderer event "${i}" because no matching event listener was found. Make sure that the event listener is registered using @CompEventListener() decorator in the component model class, and use class methods instead of arrow function attributes.` });
      return o;
    };
    const r = Object.getPrototypeOf(this).constructor.__compId;
    if (!r) throw new Et({ source: this.constructor.name, message: "Unable to instantiate component: missing compId in implementation. Component should be annotated using @Model() to set compId before iy can be instantiated." });
    if (this.def = uo.retrieve(r) ?? null, !this.def) throw new Et({ source: this.constructor.name, message: `Unable to instantiate component "${r}" because it's not registered. Component should be registered using CompRegistry.register(ComponentClass) before instantiating a component.` });
    this.__instanceId = Je(), this.__destroyed = !1, this.__context = e, this.renderedDom = null, this.renderingRoot = null, this.props = t;
    const s = t ? Object.entries(t) : [];
    this.elementProps = new Map(s), this.rendererEventListeners = /* @__PURE__ */ new Map();
    const a = this.constructor.__compEventListeners;
    a && a.forEach((i, o) => {
      i.forEach((u) => {
        const l = Object.getPrototypeOf(this)[u];
        typeof l == "function" ? this.addRendererEventListener(o, l.bind(this)) : de(`Unable to set event listener "${o}" because method "${u}" cannot be found on component "${this.constructor.name} at runtime!"`);
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
    if (!this.__context) throw new Et({ source: this.constructor.name, message: "Unable to get context because it's not set" });
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
    if (this.destroyed) return void de(`Unable to render component "${(i = this.def) == null ? void 0 : i.id}" because it is already destroyed`);
    if (this.rendered || this.renderedDom) return void de(`Unable to render component "${this.def.id}" because it is already rendered`);
    const r = document.createDocumentFragment(), s = Object.getPrototypeOf(this).constructor.__compId, a = this.executeRenderer(r);
    if (!a) throw new mt({ source: this.constructor.name, message: `Unable to render component "${s}" because renderer returned null` });
    this.renderedDom = a;
    for (const [, o] of this.subComponents) {
      const u = this.getSubComponentPortal(o.id);
      u && this.mountSubComponentToPortal(o.id, u);
    }
    it(() => {
      this.destroyed || (t ? e.insertBefore(r, t) : e.append(r), this.renderingRoot = e);
    });
  }
  updateSubComponent(e, t, r) {
    this.throwIfDestroyed();
    const s = this.subComponents.get(e);
    s && !s.destroyed && s.setProp(t, r);
  }
  addSubComponent(e, t, r) {
    if (this.throwIfDestroyed(), this.subComponents.has(e)) throw new Et({ source: this.constructor.name, message: `Unable to add sub-component "${e}" because it already exists` });
    if (this.subComponents.set(e, t), r && this.subComponentElementIds.set(e, r), this.renderedDom) {
      const s = this.getSubComponentPortal(e);
      s && this.mountSubComponentToPortal(e, s);
    }
  }
  executeDomAction(e, ...t) {
    if (this.throwIfDestroyed(), !this.renderedDom) return void this.actionsOnDomReady.push(() => this.executeDomAction(e, ...t));
    if (!this.renderingRoot) throw new mt({ source: this.constructor.name, message: "Unable to execute DOM action because renderingRoot is not set" });
    const r = this.renderedDom.actions[e];
    if (!r) throw new mt({ source: this.constructor.name, message: `Unable to execute DOM action "${String(e)}" because it does not exist` });
    return it(() => r(...t));
  }
  executeRenderer(e) {
    var s;
    const t = (s = this.def) == null ? void 0 : s.render;
    if (!t) return null;
    if (this.renderingRoot) throw new mt({ source: this.constructor.name, message: "Unable to render component because renderingRoot is already set" });
    const r = t({ appendToRoot: (a) => {
      e.append(a), this.runDomActionsQueue();
    }, compEvent: this.compEventGetter, props: this.rendererProps, context: this.context });
    return r && (this.renderingRoot = e), r;
  }
  removeSubComponent(e) {
    this.throwIfDestroyed(), it(() => {
      const t = this.subComponents.get(e);
      t && (t.renderingRoot = null, t.destroy(), this.subComponents.delete(e));
    });
  }
  runDomActionsQueue() {
    if (this.actionsOnDomReady.length > 0 && this.rendered) {
      const e = this.actionsOnDomReady;
      this.actionsOnDomReady = [];
      for (const t of e) it(() => t());
    }
  }
  setProp(e, t) {
    this.destroyed ? de(`Unable to set prop "${String(e)}" because component "${this.constructor.name}" is destroyed`) : this.elementProps.has(e) ? (this.schedulePropUpdate(e, this.elementProps.get(e), t), this.props = Object.freeze(Object.fromEntries(this.elementProps)), this.elementProps.set(e, t)) : de(`Unable to set prop "${String(e)}" because it does not exist in the component props`);
  }
  throwIfDestroyed() {
    if (this.__destroyed) throw new Et({ source: this.constructor.name, message: "Unable to call method on destroyed component" });
  }
  addRendererEventListener(e, t) {
    if (this.throwIfDestroyed(), this.rendererEventListeners.has(e)) throw new Et({ source: this.constructor.name, message: `Unable to add event listener to rendererEvents "${e}" because it already exists` });
    this.rendererEventListeners.set(e, t);
  }
  destroyComponent(e = !1) {
    if (this.throwIfDestroyed(), this.subComponents.forEach((t) => {
      t.destroy();
    }), this.renderedDom) {
      this.renderedDom.elements && (this.renderedDom.elements = void 0), this.renderedDom.actions && (this.renderedDom.actions = void 0), this.renderedDom.onDestroy && this.renderedDom.onDestroy();
      const t = this.renderingRoot;
      it(() => {
        var r;
        if (t) if (t instanceof DocumentFragment) for (; t.firstChild; ) t.removeChild(t.firstChild);
        else e ? (r = t.parentElement) == null || r.removeChild(t) : en(t);
      }), this.renderedDom = null, this.renderingRoot = null;
    }
    this.__destroyed = !0, this.__context = null, this.props = void 0, this.elementProps.clear(), this.rendererEventListeners.clear(), this.subComponents.clear();
  }
  getSubComponentPortal(e) {
    var a;
    const t = this.subComponents.get(e), r = this.subComponentElementIds.get(e);
    if (!t || !r) return null;
    const s = ((a = this.renderedDom) == null ? void 0 : a.elements)[r];
    return s instanceof HTMLElement ? s : null;
  }
  mountSubComponentToPortal(e, t) {
    const r = this.subComponents.get(e);
    r == null || r.render(t);
  }
  schedulePropUpdate(e, t, r) {
    var o;
    if (!this.renderedDom || !((o = this.def) != null && o.update)) return;
    const s = this.renderedDom, a = this.renderingRoot, i = this.def.update;
    a && it(() => {
      i({ propName: e, currentValue: t, newValue: r, dom: { root: a, elements: s.elements, actions: s.actions }, updateSubComponent: this.updateSubComponent });
    });
  }
}
Xe.__compEventListeners = null, Xe.__compId = null, Xe.__renderer = null, Xe.__updater = null;
const gt = (n, e, t) => (r) => {
  r.__compId = n, r.__renderer = e, r.__updater = t;
}, et = (n) => (e, t) => {
  const r = e;
  if (typeof r.constructor != "function") throw new Et({ source: "CallbackFor", message: "@CallbackFor can only be used on methods of a class!" });
  r.constructor.hasOwnProperty("__compEventListeners") && r.constructor.__compEventListeners !== null || (r.constructor.__compEventListeners = /* @__PURE__ */ new Map());
  const s = r.constructor.__compEventListeners, a = s.get(n);
  a ? a.push(t) : s.set(n, [t]);
}, po = (n, e) => {
  const t = document.createElement("div");
  if (t.classList.add("nlux-comp-avatarContainer"), n) {
    const r = document.createElement("div");
    r.classList.add("nlux-comp-avatarPicture"), r.style.backgroundImage = `url("${encodeURI(n)}")`, t.append(r);
  }
  return t;
}, Is = "nlux-comp-avatar", Rs = (n) => {
  const e = document.createElement("div");
  return e.classList.add(Is), n.avatar || n.name ? (n.name && (e.title = n.name), n.avatar && n.avatar instanceof HTMLElement ? (e.append(n.avatar.cloneNode(!0)), e) : (e.append(po(n.avatar)), e)) : e;
}, hn = { received: "nlux_msg_received", sent: "nlux_msg_sent" }, mo = (n, e) => {
  Object.keys(hn).forEach((t) => {
    n.classList.remove(hn[t]);
  }), hn[e] && n.classList.add(hn[e]);
}, Gt = { streaming: "nlux_msg_streaming", complete: "nlux_msg_complete" }, ho = (n, e) => {
  Object.keys(Gt).forEach((t) => {
    n.classList.remove(Gt[t]);
  }), Gt[e] && n.classList.add(Gt[e]);
}, sa = (n) => {
  if (!(n instanceof HTMLButtonElement) || n.dataset.clickListenerSet === "true") return;
  let e = !1;
  const t = n.nextElementSibling;
  n.addEventListener("click", () => {
    if (e || !t) return;
    const r = t.innerText;
    navigator.clipboard.writeText(r ?? ""), e = !0, n.classList.add("clicked"), setTimeout(() => {
      e = !1, n.classList.remove("clicked");
    }, 1e3);
  }), n.dataset.clickListenerSet = "true";
}, go = (n) => {
  const e = "nlux-comp-copyButton";
  n instanceof HTMLButtonElement && n.classList.contains(e) ? sa(n) : n.querySelectorAll(`.${e}`).forEach(sa);
};
function Kc() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
let Ct = { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
function aa(n) {
  Ct = n;
}
var Gc = Object.defineProperty, fo = (n, e, t) => ((r, s, a) => s in r ? Gc(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[s] = a)(n, typeof e != "symbol" ? e + "" : e, t);
let Wt = class {
  constructor(e) {
    fo(this, "options"), this.options = e || Ct;
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
fo(Wt, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]));
const bo = /[&<>"']/, Wc = new RegExp(bo.source, "g"), yo = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Yc = new RegExp(yo.source, "g"), Zc = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ia = (n) => Zc[n];
function Ye(n, e) {
  if (e) {
    if (bo.test(n)) return n.replace(Wc, ia);
  } else if (yo.test(n)) return n.replace(Yc, ia);
  return n;
}
const Qc = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function Xc(n) {
  return n.replace(Qc, (e, t) => (t = t.toLowerCase()) === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "");
}
const Vc = /(^|[^\[])\^/g;
function Ae(n, e) {
  let t = typeof n == "string" ? n : n.source;
  e = e || "";
  const r = { replace: (s, a) => {
    let i = typeof a == "string" ? a : a.source;
    return i = i.replace(Vc, "$1"), t = t.replace(s, i), r;
  }, getRegex: () => new RegExp(t, e) };
  return r;
}
function oa(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const Yt = { exec: () => null };
function ca(n, e) {
  const t = n.replace(/\|/g, (s, a, i) => {
    let o = !1, u = a;
    for (; --u >= 0 && i[u] === "\\"; ) o = !o;
    return o ? "|" : " |";
  }).split(/ \|/);
  let r = 0;
  if (t[0].trim() || t.shift(), t.length > 0 && !t[t.length - 1].trim() && t.pop(), e) if (t.length > e) t.splice(e);
  else for (; t.length < e; ) t.push("");
  for (; r < t.length; r++) t[r] = t[r].trim().replace(/\\\|/g, "|");
  return t;
}
function gn(n, e, t) {
  const r = n.length;
  if (r === 0) return "";
  let s = 0;
  for (; s < r; ) {
    const a = n.charAt(r - s - 1);
    if (a !== e || t) {
      if (a === e || !t) break;
      s++;
    } else s++;
  }
  return n.slice(0, r - s);
}
const cn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, vo = /(?:[*+-]|\d{1,9}[.)])/, Eo = Ae(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, vo).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Os = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Ns = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Jc = Ae(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Ns).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), el = Ae(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, vo).getRegex(), Zn = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ms = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, tl = Ae("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Ms).replace("tag", Zn).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), la = Ae(Os).replace("hr", cn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Zn).getRegex(), Ds = { blockquote: Ae(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", la).getRegex(), code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, def: Jc, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hr: cn, html: tl, lheading: Eo, list: el, newline: /^(?: *(?:\n|$))+/, paragraph: la, table: Yt, text: /^[^\n]+/ }, ua = Ae("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", cn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Zn).getRegex(), nl = { ...Ds, table: ua, paragraph: Ae(Os).replace("hr", cn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ua).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Zn).getRegex() }, rl = { ...Ds, html: Ae(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Ms).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Yt, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Ae(Os).replace("hr", cn).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Eo).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, wo = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, xo = /^( {2,}|\\)\n(?!\s*$)/, ln = "\\p{P}\\p{S}", sl = Ae(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, ln).getRegex(), al = Ae(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, ln).getRegex(), il = Ae("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, ln).getRegex(), ol = Ae("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, ln).getRegex(), cl = Ae(/\\([punct])/, "gu").replace(/punct/g, ln).getRegex(), ll = Ae(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), ul = Ae(Ms).replace("(?:-->|$)", "-->").getRegex(), dl = Ae("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", ul).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Ln = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, pl = Ae(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Ln).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), da = Ae(/^!?\[(label)\]\[(ref)\]/).replace("label", Ln).replace("ref", Ns).getRegex(), pa = Ae(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ns).getRegex(), Ls = { _backpedal: Yt, anyPunctuation: cl, autolink: ll, blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, br: xo, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, del: Yt, emStrongLDelim: al, emStrongRDelimAst: il, emStrongRDelimUnd: ol, escape: wo, link: pl, nolink: pa, punctuation: sl, reflink: da, reflinkSearch: Ae("reflink|nolink(?!\\()", "g").replace("reflink", da).replace("nolink", pa).getRegex(), tag: dl, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, url: Yt }, ml = { ...Ls, link: Ae(/^!?\[(label)\]\((.*?)\)/).replace("label", Ln).getRegex(), reflink: Ae(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Ln).getRegex() }, rs = { ...Ls, escape: Ae(wo).replace("])", "~|])").getRegex(), url: Ae(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, hl = { ...rs, br: Ae(xo).replace("{2,}", "*").getRegex(), text: Ae(rs.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, fn = { normal: Ds, gfm: nl, pedantic: rl }, $t = { normal: Ls, gfm: rs, breaks: hl, pedantic: ml };
var gl = Object.defineProperty, tr = (n, e, t) => ((r, s, a) => s in r ? gl(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[s] = a)(n, typeof e != "symbol" ? e + "" : e, t);
function ma(n, e, t, r) {
  const s = e.href, a = e.title ? Ye(e.title) : null, i = n[1].replace(/\\([\[\]])/g, "$1");
  if (n[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const o = { type: "link", raw: t, href: s, title: a, text: i, tokens: r.inlineTokens(i) };
    return r.state.inLink = !1, o;
  }
  return { type: "image", raw: t, href: s, title: a, text: Ye(i) };
}
let Pn = class {
  constructor(e) {
    tr(this, "lexer"), tr(this, "options"), tr(this, "rules"), this.options = e || Ct;
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let r, s;
      return t[2] === "@" ? (r = Ye(t[1]), s = "mailto:" + r) : (r = Ye(t[1]), s = r), { type: "link", raw: t[0], text: r, href: s, tokens: [{ type: "text", raw: r, text: r }] };
    }
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let r = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      r = gn(r.replace(/^ *>[ \t]?/gm, ""), `
`);
      const s = this.lexer.state.top;
      this.lexer.state.top = !0;
      const a = this.lexer.blockTokens(r);
      return this.lexer.state.top = s, { type: "blockquote", raw: t[0], tokens: a, text: r };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const r = t[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? r : gn(r, `
`) };
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let r = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(r), a = /^ /.test(r) && / $/.test(r);
      return s && a && (r = r.substring(1, r.length - 1)), r = Ye(r, !0), { type: "codespan", raw: t[0], text: r };
    }
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const r = t[1].toLowerCase().replace(/\s+/g, " "), s = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", a = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: r, raw: t[0], href: s, title: a };
    }
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t) return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
  }
  emStrong(e, t, r = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (s && !(s[3] && r.match(/[\p{L}\p{N}]/u)) && (!(s[1] || s[2]) || !r || this.rules.inline.punctuation.exec(r))) {
      const a = [...s[0]].length - 1;
      let i, o, u = a, l = 0;
      const c = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, t = t.slice(-1 * e.length + a); (s = c.exec(t)) != null; ) {
        if (i = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !i) continue;
        if (o = [...i].length, s[3] || s[4]) {
          u += o;
          continue;
        }
        if ((s[5] || s[6]) && a % 3 && !((a + o) % 3)) {
          l += o;
          continue;
        }
        if (u -= o, u > 0) continue;
        o = Math.min(o, o + u + l);
        const d = [...s[0]][0].length, p = e.slice(0, a + s.index + d + o);
        if (Math.min(a, o) % 2) {
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
    if (t) return { type: "escape", raw: t[0], text: Ye(t[1]) };
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const r = t[0], s = function(a, i) {
        const o = a.match(/^(\s+)(?:```)/);
        if (o === null) return i;
        const u = o[1];
        return i.split(`
`).map((l) => {
          const c = l.match(/^\s+/);
          if (c === null) return l;
          const [d] = c;
          return d.length >= u.length ? l.slice(u.length) : l;
        }).join(`
`);
      }(r, t[3] || "");
      return { type: "code", raw: r, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: s };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let r = t[2].trim();
      if (/#$/.test(r)) {
        const s = gn(r, "#");
        this.options.pedantic ? r = s.trim() : s && !/ $/.test(s) || (r = s.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: r, tokens: this.lexer.inline(r) };
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
      let r;
      return r = this.lexer.state.inRawBlock ? t[0] : Ye(t[0]), { type: "text", raw: t[0], text: r };
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t) return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const r = t[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r)) return;
        const i = gn(r.slice(0, -1), "\\");
        if ((r.length - i.length) % 2 == 0) return;
      } else {
        const i = function(o, u) {
          if (o.indexOf(u[1]) === -1) return -1;
          let l = 0;
          for (let c = 0; c < o.length; c++) if (o[c] === "\\") c++;
          else if (o[c] === u[0]) l++;
          else if (o[c] === u[1] && (l--, l < 0)) return c;
          return -1;
        }(t[2], "()");
        if (i > -1) {
          const o = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + i;
          t[2] = t[2].substring(0, i), t[0] = t[0].substring(0, o).trim(), t[3] = "";
        }
      }
      let s = t[2], a = "";
      if (this.options.pedantic) {
        const i = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
        i && (s = i[1], a = i[3]);
      } else a = t[3] ? t[3].slice(1, -1) : "";
      return s = s.trim(), /^</.test(s) && (s = this.options.pedantic && !/>$/.test(r) ? s.slice(1) : s.slice(1, -1)), ma(t, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: a && a.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer);
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let r = t[1].trim();
      const s = r.length > 1, a = { type: "list", raw: "", ordered: s, start: s ? +r.slice(0, -1) : "", loose: !1, items: [] };
      r = s ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = s ? r : "[*+-]");
      const i = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let o = "", u = "", l = !1;
      for (; e; ) {
        let c = !1;
        if (!(t = i.exec(e)) || this.rules.block.hr.test(e)) break;
        o = t[0], e = e.substring(o.length);
        let d = t[2].split(`
`, 1)[0].replace(/^\t+/, (E) => " ".repeat(3 * E.length)), p = e.split(`
`, 1)[0], m = 0;
        this.options.pedantic ? (m = 2, u = d.trimStart()) : (m = t[2].search(/[^ ]/), m = m > 4 ? 1 : m, u = d.slice(m), m += t[1].length);
        let h = !1;
        if (!d && /^ *$/.test(p) && (o += p + `
`, e = e.substring(p.length + 1), c = !0), !c) {
          const E = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), b = new RegExp(`^ {0,${Math.min(3, m - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), y = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:\`\`\`|~~~)`), S = new RegExp(`^ {0,${Math.min(3, m - 1)}}#`);
          for (; e; ) {
            const w = e.split(`
`, 1)[0];
            if (p = w, this.options.pedantic && (p = p.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), y.test(p) || S.test(p) || E.test(p) || b.test(e)) break;
            if (p.search(/[^ ]/) >= m || !p.trim()) u += `
` + p.slice(m);
            else {
              if (h || d.search(/[^ ]/) >= 4 || y.test(d) || S.test(d) || b.test(d)) break;
              u += `
` + p;
            }
            h || p.trim() || (h = !0), o += w + `
`, e = e.substring(w.length + 1), d = p.slice(m);
          }
        }
        a.loose || (l ? a.loose = !0 : /\n *\n *$/.test(o) && (l = !0));
        let g, f = null;
        this.options.gfm && (f = /^\[[ xX]\] /.exec(u), f && (g = f[0] !== "[ ] ", u = u.replace(/^\[[ xX]\] +/, ""))), a.items.push({ type: "list_item", raw: o, task: !!f, checked: g, loose: !1, text: u, tokens: [] }), a.raw += o;
      }
      a.items[a.items.length - 1].raw = o.trimEnd(), a.items[a.items.length - 1].text = u.trimEnd(), a.raw = a.raw.trimEnd();
      for (let c = 0; c < a.items.length; c++) if (this.lexer.state.top = !1, a.items[c].tokens = this.lexer.blockTokens(a.items[c].text, []), !a.loose) {
        const d = a.items[c].tokens.filter((m) => m.type === "space"), p = d.length > 0 && d.some((m) => /\n.*\n/.test(m.raw));
        a.loose = p;
      }
      if (a.loose) for (let c = 0; c < a.items.length; c++) a.items[c].loose = !0;
      return a;
    }
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const r = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: r, tokens: this.lexer.inline(r) };
    }
  }
  reflink(e, t) {
    let r;
    if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
      const s = t[(r[2] || r[1]).replace(/\s+/g, " ").toLowerCase()];
      if (!s) {
        const a = r[0].charAt(0);
        return { type: "text", raw: a, text: a };
      }
      return ma(r, s, r[0], this.lexer);
    }
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2])) return;
    const r = ca(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), a = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], i = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (r.length === s.length) {
      for (const o of s) /^ *-+: *$/.test(o) ? i.align.push("right") : /^ *:-+: *$/.test(o) ? i.align.push("center") : /^ *:-+ *$/.test(o) ? i.align.push("left") : i.align.push(null);
      for (const o of r) i.header.push({ text: o, tokens: this.lexer.inline(o) });
      for (const o of a) i.rows.push(ca(o, i.header.length).map((u) => ({ text: u, tokens: this.lexer.inline(u) })));
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
    var r;
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let s, a;
      if (t[2] === "@") s = Ye(t[0]), a = "mailto:" + s;
      else {
        let i;
        do
          i = t[0], t[0] = ((r = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : r[0]) ?? "";
        while (i !== t[0]);
        s = Ye(t[0]), a = t[1] === "www." ? "http://" + t[0] : t[0];
      }
      return { type: "link", raw: t[0], text: s, href: a, tokens: [{ type: "text", raw: s, text: s }] };
    }
  }
};
var fl = Object.defineProperty, Ht = (n, e, t) => ((r, s, a) => s in r ? fl(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[s] = a)(n, typeof e != "symbol" ? e + "" : e, t);
let Nt = class ss {
  constructor(e) {
    Ht(this, "options"), Ht(this, "state"), Ht(this, "tokens"), Ht(this, "inlineQueue"), Ht(this, "tokenizer"), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Ct, this.options.tokenizer = this.options.tokenizer || new Pn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    const t = { block: fn.normal, inline: $t.normal };
    this.options.pedantic ? (t.block = fn.pedantic, t.inline = $t.pedantic) : this.options.gfm && (t.block = fn.gfm, this.options.breaks ? t.inline = $t.breaks : t.inline = $t.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: fn, inline: $t };
  }
  static lex(e, t) {
    return new ss(t).lex(e);
  }
  static lexInline(e, t) {
    return new ss(t).inlineTokens(e);
  }
  blockTokens(e, t = []) {
    let r, s, a, i;
    for (e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, (o, u, l) => u + "    ".repeat(l.length)); e; ) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((o) => !!(r = o.call({ lexer: this }, e, t)) && (e = e.substring(r.raw.length), t.push(r), !0)))) if (r = this.tokenizer.space(e)) e = e.substring(r.raw.length), r.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(r);
    else if (r = this.tokenizer.code(e)) e = e.substring(r.raw.length), s = t[t.length - 1], !s || s.type !== "paragraph" && s.type !== "text" ? t.push(r) : (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = s.text);
    else if (r = this.tokenizer.fences(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.heading(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.hr(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.blockquote(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.list(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.html(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.def(e)) e = e.substring(r.raw.length), s = t[t.length - 1], !s || s.type !== "paragraph" && s.type !== "text" ? this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }) : (s.raw += `
` + r.raw, s.text += `
` + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = s.text);
    else if (r = this.tokenizer.table(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.lheading(e)) e = e.substring(r.raw.length), t.push(r);
    else {
      if (a = e, this.options.extensions && this.options.extensions.startBlock) {
        let o = 1 / 0;
        const u = e.slice(1);
        let l;
        this.options.extensions.startBlock.forEach((c) => {
          l = c.call({ lexer: this }, u), typeof l == "number" && l >= 0 && (o = Math.min(o, l));
        }), o < 1 / 0 && o >= 0 && (a = e.substring(0, o + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(a))) s = t[t.length - 1], i && s.type === "paragraph" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(r), i = a.length !== e.length, e = e.substring(r.raw.length);
      else if (r = this.tokenizer.text(e)) e = e.substring(r.raw.length), s = t[t.length - 1], s && s.type === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(r);
      else if (e) {
        const o = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(o);
          break;
        }
        throw new Error(o);
      }
    }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let r, s, a, i, o, u, l = e;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0) for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null; ) c.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; ) l = l.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(l)) != null; ) l = l.slice(0, i.index) + "++" + l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; ) if (o || (u = ""), o = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((c) => !!(r = c.call({ lexer: this }, e, t)) && (e = e.substring(r.raw.length), t.push(r), !0)))) if (r = this.tokenizer.escape(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.tag(e)) e = e.substring(r.raw.length), s = t[t.length - 1], s && r.type === "text" && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : t.push(r);
    else if (r = this.tokenizer.link(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(r.raw.length), s = t[t.length - 1], s && r.type === "text" && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : t.push(r);
    else if (r = this.tokenizer.emStrong(e, l, u)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.codespan(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.br(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.del(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.autolink(e)) e = e.substring(r.raw.length), t.push(r);
    else if (this.state.inLink || !(r = this.tokenizer.url(e))) {
      if (a = e, this.options.extensions && this.options.extensions.startInline) {
        let c = 1 / 0;
        const d = e.slice(1);
        let p;
        this.options.extensions.startInline.forEach((m) => {
          p = m.call({ lexer: this }, d), typeof p == "number" && p >= 0 && (c = Math.min(c, p));
        }), c < 1 / 0 && c >= 0 && (a = e.substring(0, c + 1));
      }
      if (r = this.tokenizer.inlineText(a)) e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (u = r.raw.slice(-1)), o = !0, s = t[t.length - 1], s && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : t.push(r);
      else if (e) {
        const c = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(c);
          break;
        }
        throw new Error(c);
      }
    } else e = e.substring(r.raw.length), t.push(r);
    return t;
  }
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const r = this.inlineQueue[t];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
};
var bl = Object.defineProperty, yl = (n, e, t) => ((r, s, a) => s in r ? bl(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[s] = a)(n, e + "", t);
let Bn = class {
  constructor(e) {
    yl(this, "options"), this.options = e || Ct;
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
  code(e, t, r) {
    var a;
    const s = (a = (t || "").match(/^\S*/)) == null ? void 0 : a[0];
    return e = e.replace(/\n$/, "") + `
`, s ? '<pre><code class="language-' + Ye(s) + '">' + (r ? e : Ye(e, !0)) + `</code></pre>
` : "<pre><code>" + (r ? e : Ye(e, !0)) + `</code></pre>
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
  heading(e, t, r) {
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
  image(e, t, r) {
    const s = oa(e);
    if (s === null) return r;
    let a = `<img src="${e = s}" alt="${r}"`;
    return t && (a += ` title="${t}"`), a += ">", a;
  }
  link(e, t, r) {
    const s = oa(e);
    if (s === null) return r;
    let a = '<a href="' + (e = s) + '"';
    return t && (a += ' title="' + t + '"'), a += ">" + r + "</a>", a;
  }
  list(e, t, r) {
    const s = t ? "ol" : "ul";
    return "<" + s + (t && r !== 1 ? ' start="' + r + '"' : "") + `>
` + e + "</" + s + `>
`;
  }
  listitem(e, t, r) {
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
    const r = t.header ? "th" : "td";
    return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + e + `</${r}>
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
}, Ps = class {
  br() {
    return "";
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  em(e) {
    return e;
  }
  html(e) {
    return e;
  }
  image(e, t, r) {
    return "" + r;
  }
  link(e, t, r) {
    return "" + r;
  }
  strong(e) {
    return e;
  }
  text(e) {
    return e;
  }
};
var vl = Object.defineProperty, nr = (n, e, t) => ((r, s, a) => s in r ? vl(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[s] = a)(n, typeof e != "symbol" ? e + "" : e, t);
let Mt = class as {
  constructor(e) {
    nr(this, "options"), nr(this, "renderer"), nr(this, "textRenderer"), this.options = e || Ct, this.options.renderer = this.options.renderer || new Bn(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Ps();
  }
  static parse(e, t) {
    return new as(t).parse(e);
  }
  static parseInline(e, t) {
    return new as(t).parseInline(e);
  }
  parse(e, t = !0) {
    let r = "";
    for (let s = 0; s < e.length; s++) {
      const a = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[a.type]) {
        const i = a, o = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (o !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(i.type)) {
          r += o || "";
          continue;
        }
      }
      switch (a.type) {
        case "space":
          continue;
        case "hr":
          r += this.renderer.hr();
          continue;
        case "heading": {
          const i = a;
          r += this.renderer.heading(this.parseInline(i.tokens), i.depth, Xc(this.parseInline(i.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const i = a;
          r += this.renderer.code(i.text, i.lang, !!i.escaped);
          continue;
        }
        case "table": {
          const i = a;
          let o = "", u = "";
          for (let c = 0; c < i.header.length; c++) u += this.renderer.tablecell(this.parseInline(i.header[c].tokens), { header: !0, align: i.align[c] });
          o += this.renderer.tablerow(u);
          let l = "";
          for (let c = 0; c < i.rows.length; c++) {
            const d = i.rows[c];
            u = "";
            for (let p = 0; p < d.length; p++) u += this.renderer.tablecell(this.parseInline(d[p].tokens), { header: !1, align: i.align[p] });
            l += this.renderer.tablerow(u);
          }
          r += this.renderer.table(o, l);
          continue;
        }
        case "blockquote": {
          const i = a, o = this.parse(i.tokens);
          r += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          const i = a, o = i.ordered, u = i.start, l = i.loose;
          let c = "";
          for (let d = 0; d < i.items.length; d++) {
            const p = i.items[d], m = p.checked, h = p.task;
            let g = "";
            if (p.task) {
              const f = this.renderer.checkbox(!!m);
              l ? p.tokens.length > 0 && p.tokens[0].type === "paragraph" ? (p.tokens[0].text = f + " " + p.tokens[0].text, p.tokens[0].tokens && p.tokens[0].tokens.length > 0 && p.tokens[0].tokens[0].type === "text" && (p.tokens[0].tokens[0].text = f + " " + p.tokens[0].tokens[0].text)) : p.tokens.unshift({ type: "text", text: f + " " }) : g += f + " ";
            }
            g += this.parse(p.tokens, l), c += this.renderer.listitem(g, h, !!m);
          }
          r += this.renderer.list(c, o, u);
          continue;
        }
        case "html": {
          const i = a;
          r += this.renderer.html(i.text, i.block);
          continue;
        }
        case "paragraph": {
          const i = a;
          r += this.renderer.paragraph(this.parseInline(i.tokens));
          continue;
        }
        case "text": {
          let i = a, o = i.tokens ? this.parseInline(i.tokens) : i.text;
          for (; s + 1 < e.length && e[s + 1].type === "text"; ) i = e[++s], o += `
` + (i.tokens ? this.parseInline(i.tokens) : i.text);
          r += t ? this.renderer.paragraph(o) : o;
          continue;
        }
        default: {
          const i = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return r;
  }
  parseInline(e, t) {
    t = t || this.renderer;
    let r = "";
    for (let s = 0; s < e.length; s++) {
      const a = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[a.type]) {
        const i = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (i !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)) {
          r += i || "";
          continue;
        }
      }
      switch (a.type) {
        case "escape": {
          const i = a;
          r += t.text(i.text);
          break;
        }
        case "html": {
          const i = a;
          r += t.html(i.text);
          break;
        }
        case "link": {
          const i = a;
          r += t.link(i.href, i.title, this.parseInline(i.tokens, t));
          break;
        }
        case "image": {
          const i = a;
          r += t.image(i.href, i.title, i.text);
          break;
        }
        case "strong": {
          const i = a;
          r += t.strong(this.parseInline(i.tokens, t));
          break;
        }
        case "em": {
          const i = a;
          r += t.em(this.parseInline(i.tokens, t));
          break;
        }
        case "codespan": {
          const i = a;
          r += t.codespan(i.text);
          break;
        }
        case "br":
          r += t.br();
          break;
        case "del": {
          const i = a;
          r += t.del(this.parseInline(i.tokens, t));
          break;
        }
        case "text": {
          const i = a;
          r += t.text(i.text);
          break;
        }
        default: {
          const i = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return r;
  }
};
var Zt, ha, is, El = Object.defineProperty, ko = (n) => {
  throw TypeError(n);
}, rt = (n, e, t) => ((r, s, a) => s in r ? El(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[s] = a)(n, typeof e != "symbol" ? e + "" : e, t), os = (n, e, t) => (((r, s, a) => {
  s.has(r) || ko("Cannot " + a);
})(n, e, "access private method"), t);
Zt = /* @__PURE__ */ new WeakSet(), ha = function(n, e) {
  return (t) => {
    if (t.message += `
Please report this to https://github.com/markedjs/marked.`, n) {
      const r = "<p>An error occurred:</p><pre>" + Ye(t.message + "", !0) + "</pre>";
      return e ? Promise.resolve(r) : r;
    }
    if (e) return Promise.reject(t);
    throw t;
  };
}, is = function(n, e) {
  return (t, r) => {
    const s = { ...r }, a = { ...this.defaults, ...s };
    this.defaults.async === !0 && s.async === !1 && (a.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), a.async = !0);
    const i = os(this, Zt, ha).call(this, !!a.silent, !!a.async);
    if (t == null) return i(new Error("marked(): input parameter is undefined or null"));
    if (typeof t != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
    if (a.hooks && (a.hooks.options = a), a.async) return Promise.resolve(a.hooks ? a.hooks.preprocess(t) : t).then((o) => n(o, a)).then((o) => a.hooks ? a.hooks.processAllTokens(o) : o).then((o) => a.walkTokens ? Promise.all(this.walkTokens(o, a.walkTokens)).then(() => o) : o).then((o) => e(o, a)).then((o) => a.hooks ? a.hooks.postprocess(o) : o).catch(i);
    try {
      a.hooks && (t = a.hooks.preprocess(t));
      let o = n(t, a);
      a.hooks && (o = a.hooks.processAllTokens(o)), a.walkTokens && this.walkTokens(o, a.walkTokens);
      let u = e(o, a);
      return a.hooks && (u = a.hooks.postprocess(u)), u;
    } catch (o) {
      return i(o);
    }
  };
};
const wt = new class {
  constructor(...n) {
    var e, t, r;
    e = this, (t = Zt).has(e) ? ko("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), rt(this, "Hooks", Wt), rt(this, "Lexer", Nt), rt(this, "Parser", Mt), rt(this, "Renderer", Bn), rt(this, "TextRenderer", Ps), rt(this, "Tokenizer", Pn), rt(this, "defaults", { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null }), rt(this, "options", this.setOptions), rt(this, "parse", os(this, Zt, is).call(this, Nt.lex, Mt.parse)), rt(this, "parseInline", os(this, Zt, is).call(this, Nt.lexInline, Mt.parseInline)), this.use(...n);
  }
  lexer(n, e) {
    return Nt.lex(n, e ?? this.defaults);
  }
  parser(n, e) {
    return Mt.parse(n, e ?? this.defaults);
  }
  setOptions(n) {
    return this.defaults = { ...this.defaults, ...n }, this;
  }
  use(...n) {
    const e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return n.forEach((t) => {
      const r = { ...t };
      if (r.async = this.defaults.async || r.async || !1, t.extensions && (t.extensions.forEach((s) => {
        if (!s.name) throw new Error("extension name required");
        if ("renderer" in s) {
          const a = e.renderers[s.name];
          e.renderers[s.name] = a ? function(...i) {
            let o = s.renderer.apply(this, i);
            return o === !1 && (o = a.apply(this, i)), o;
          } : s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          const a = e[s.level];
          a ? a.unshift(s.tokenizer) : e[s.level] = [s.tokenizer], s.start && (s.level === "block" ? e.startBlock ? e.startBlock.push(s.start) : e.startBlock = [s.start] : s.level === "inline" && (e.startInline ? e.startInline.push(s.start) : e.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (e.childTokens[s.name] = s.childTokens);
      }), r.extensions = e), t.renderer) {
        const s = this.defaults.renderer || new Bn(this.defaults);
        for (const a in t.renderer) {
          if (!(a in s)) throw new Error(`renderer '${a}' does not exist`);
          if (a === "options") continue;
          const i = a, o = t.renderer[i], u = s[i];
          s[i] = (...l) => {
            let c = o.apply(s, l);
            return c === !1 && (c = u.apply(s, l)), c || "";
          };
        }
        r.renderer = s;
      }
      if (t.tokenizer) {
        const s = this.defaults.tokenizer || new Pn(this.defaults);
        for (const a in t.tokenizer) {
          if (!(a in s)) throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a)) continue;
          const i = a, o = t.tokenizer[i], u = s[i];
          s[i] = (...l) => {
            let c = o.apply(s, l);
            return c === !1 && (c = u.apply(s, l)), c;
          };
        }
        r.tokenizer = s;
      }
      if (t.hooks) {
        const s = this.defaults.hooks || new Wt();
        for (const a in t.hooks) {
          if (!(a in s)) throw new Error(`hook '${a}' does not exist`);
          if (a === "options") continue;
          const i = a, o = t.hooks[i], u = s[i];
          Wt.passThroughHooks.has(a) ? s[i] = (l) => {
            if (this.defaults.async) return Promise.resolve(o.call(s, l)).then((d) => u.call(s, d));
            const c = o.call(s, l);
            return u.call(s, c);
          } : s[i] = (...l) => {
            let c = o.apply(s, l);
            return c === !1 && (c = u.apply(s, l)), c;
          };
        }
        r.hooks = s;
      }
      if (t.walkTokens) {
        const s = this.defaults.walkTokens, a = t.walkTokens;
        r.walkTokens = function(i) {
          let o = [];
          return o.push(a.call(this, i)), s && (o = o.concat(s.call(this, i))), o;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  walkTokens(n, e) {
    var r, s;
    let t = [];
    for (const a of n) switch (t = t.concat(e.call(this, a)), a.type) {
      case "table": {
        const i = a;
        for (const o of i.header) t = t.concat(this.walkTokens(o.tokens, e));
        for (const o of i.rows) for (const u of o) t = t.concat(this.walkTokens(u.tokens, e));
        break;
      }
      case "list": {
        const i = a;
        t = t.concat(this.walkTokens(i.items, e));
        break;
      }
      default: {
        const i = a;
        (s = (r = this.defaults.extensions) == null ? void 0 : r.childTokens) != null && s[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((o) => {
          const u = i[o].flat(1 / 0);
          t = t.concat(this.walkTokens(u, e));
        }) : i.tokens && (t = t.concat(this.walkTokens(i.tokens, e)));
      }
    }
    return t;
  }
}();
function De(n, e) {
  return wt.parse(n, e);
}
De.options = De.setOptions = function(n) {
  return wt.setOptions(n), De.defaults = wt.defaults, aa(De.defaults), De;
}, De.getDefaults = Kc, De.defaults = Ct, De.use = function(...n) {
  return wt.use(...n), De.defaults = wt.defaults, aa(De.defaults), De;
}, De.walkTokens = function(n, e) {
  return wt.walkTokens(n, e);
}, De.parseInline = wt.parseInline, De.Parser = Mt, De.parser = Mt.parse, De.Renderer = Bn, De.TextRenderer = Ps, De.Lexer = Nt, De.lexer = Nt.lex, De.Tokenizer = Pn, De.Hooks = Wt, De.parse = De;
const So = (n, e) => {
  const { showCodeBlockCopyButton: t, markdownLinkTarget: r, syntaxHighlighter: s, htmlSanitizer: a } = e || {}, i = De(n, { async: !1, breaks: !0 });
  if (typeof i != "string") throw new Error("Markdown parsing failed");
  const o = document.createElement("div");
  return o.innerHTML = a ? a(i) : i, o.querySelectorAll("pre").forEach((u) => {
    const l = document.createElement("div");
    l.className = "code-block";
    const c = u.querySelector("code");
    if (!c) {
      const h = u.innerHTML;
      return l.innerHTML = a ? a(h) : h, void u.replaceWith(l);
    }
    let d;
    for (let h = 0; h < c.classList.length; h++) {
      const g = c.classList[h];
      if (g.startsWith("language-")) {
        d = g.slice(9);
        break;
      }
    }
    const p = document.createElement("pre"), m = "<div>" + c.innerHTML + "</div>";
    if (p.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(m) : m, d && (p.setAttribute("data-language", d), s)) {
      const h = "<div>" + s.createHighlighter()(c.textContent || "", d) + "</div>";
      p.innerHTML = a ? a(h) : h, p.className = "highlighter-dark";
    }
    en(l), l.appendChild(p), u.replaceWith(l);
  }), t !== !1 && o.querySelectorAll(".code-block").forEach((u) => {
    var p;
    if (!u.querySelector("pre") || (p = u.previousElementSibling) != null && p.classList.contains("nlux-comp-copyButton")) return;
    const l = "Copy code block to clipboard", c = document.createElement("button");
    c.classList.add("nlux-comp-copyButton"), c.setAttribute("aria-label", l), c.setAttribute("title", l);
    const d = document.createElement("span");
    d.classList.add("icon-copy"), c.appendChild(d), u.appendChild(c);
  }), r !== "self" && o.querySelectorAll("a").forEach((u) => {
    u.setAttribute("target", "_blank");
  }), o.innerHTML;
}, _o = (n, e = "text", t) => {
  if (e === "markdown") {
    const r = document.createElement("div"), s = So(n, t);
    r.innerHTML = t != null && t.htmlSanitizer ? t.htmlSanitizer(s) : s, go(r);
    const a = document.createDocumentFragment();
    for (; r.firstChild; ) a.appendChild(r.firstChild);
    return a;
  }
  return document.createTextNode(n);
}, Co = "nlux-comp-message", bn = { received: "nlux-comp-chatItem--received", sent: "nlux-comp-chatItem--sent" }, To = (n, e) => {
  Object.keys(bn).forEach((t) => {
    n.classList.remove(bn[t]);
  }), bn[e] && n.classList.add(bn[e]);
}, yn = { bubbles: "nlux-comp-chatItem--bubblesLayout", list: "nlux-comp-chatItem--listLayout" }, Ao = (n, e) => {
  Object.keys(yn).forEach((t) => {
    n.classList.remove(yn[t]);
  }), yn[e] && n.classList.add(yn[e]);
}, Io = "nlux-comp-chatItem-participantInfo", Ro = "nlux-comp-chatItem-participantName", wl = (n) => {
  const e = document.createElement("div");
  e.classList.add("nlux-comp-chatItem");
  const t = { direction: n.direction, status: n.status, message: n.message, htmlSanitizer: n.htmlSanitizer };
  let r;
  if (n.avatar !== void 0) {
    const i = { name: n.name, avatar: n.avatar };
    r = Rs(i);
  }
  const s = document.createElement("span");
  s.classList.add(Ro), s.textContent = n.name;
  {
    const i = document.createElement("div");
    i.classList.add(Io), r !== void 0 && i.append(r), i.append(s), e.append(i);
  }
  To(e, n.direction), Ao(e, n.layout);
  const a = ((i) => {
    const o = document.createElement("div");
    o.classList.add(Co);
    const u = i.status ? i.status : "complete";
    return ho(o, u), mo(o, i.direction), o;
  })(t);
  return e.append(a), e;
}, ga = (n, e, t) => {
  if (e.name !== t.name && typeof t.avatar == "string") {
    const r = t.name && t.name.length > 0 ? t.name[0].toUpperCase() : "", s = n.querySelector("* > .nlux-comp-avatarContainer > .avtr_ltr");
    s == null || s.replaceChildren(r);
  }
}, Oo = (n, e, t) => {
  e.avatar === t.avatar && e.name === t.name || (e.avatar !== t.avatar && ((r, s, a) => {
    if (s.avatar !== a.avatar) if (typeof a.avatar == "string" && typeof s.avatar == "string") {
      const i = r.querySelector("* > .nlux-comp-avatarContainer > .nlux-comp-avatarPicture");
      i !== null && (i.style.backgroundImage = `url("${encodeURI(a.avatar)}")`);
    } else if (typeof a.avatar == "string") {
      const i = po(a.avatar);
      r.replaceChildren(i);
    } else a.avatar ? r.replaceChildren(a.avatar.cloneNode(!0)) : en(r);
  })(n, e, t), t.name ? e.name !== t.name && (n.title = t.name, ga(n, e, t)) : (n.title = "", ga(n, e, t)));
}, xl = (n, e, t) => {
  if (e.message === t.message && e.status === t.status && e.direction === t.direction || !t || !t.hasOwnProperty("message") && !t.hasOwnProperty("status") && !t.hasOwnProperty("direction")) return;
  e.direction !== t.direction && mo(n, t.direction);
  const r = t.status;
  if (e.status !== r) return ho(n, t.status), void ((s, a, i) => {
    const o = i.status;
    if (o !== "streaming" && o === "complete") {
      const u = i.message ? i.message : "", l = document.createTextNode(u);
      s.classList.add(Gt[o]), en(s), s.append(l);
    }
  })(n, 0, t);
  r === "complete" && (e.message === t.message && e.format === t.format || ((s, a, i) => {
    a.message === i.message && a.format === i.format || (en(s), s.append(_o(i.message ?? "", i.format, { htmlSanitizer: i.htmlSanitizer })));
  })(n, e, t));
}, kl = (n, e) => {
  let t = !1;
  const { onComplete: r } = e || {}, s = [], a = (e != null && e.skipStreamingAnimation ? "timeout" : "animationFrame") == "timeout" ? (d) => setTimeout(d, 0) : (d) => requestAnimationFrame(d), i = document.createElement("div");
  i.classList.add("md-in-progress"), n.append(i);
  const o = () => {
    for (; i.firstChild; ) {
      const d = i.firstChild;
      d instanceof HTMLElement && go(d), i.before(d);
    }
  }, u = !(e != null && e.skipStreamingAnimation) && (e != null && e.streamingAnimationSpeed) && e.streamingAnimationSpeed >= 0 ? e.streamingAnimationSpeed : e != null && e.skipStreamingAnimation ? 0 : 8, l = { timeSinceLastProcessing: (/* @__PURE__ */ new Date()).getTime(), currentMarkdown: "", previousHtml: void 0 };
  let c = setInterval(() => {
    const d = (/* @__PURE__ */ new Date()).getTime(), p = (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) !== "never";
    if (s.length === 0 && p) {
      const h = typeof (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) == "number" ? e.waitTimeBeforeStreamCompletion : 2e3;
      return void ((t || d - l.timeSinceLastProcessing > h) && (t = !0, c && (clearInterval(c), c = void 0), o(), i.remove(), r == null ? void 0 : r()));
    }
    l.timeSinceLastProcessing = d;
    const m = s.shift();
    m !== void 0 && typeof m == "string" && a(() => {
      const h = l.currentMarkdown + m, g = So(h, e).trim();
      if (typeof g != "string") return l.currentMarkdown = l.currentMarkdown.slice(0, -m.length), void de("Markdown parsing failed");
      if (l.previousHtml && g.length > l.previousHtml.length && g.startsWith(l.previousHtml)) {
        o();
        const f = g.slice(l.previousHtml.length).trim();
        i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(f) : f, l.currentMarkdown = m, l.previousHtml = void 0;
      } else i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(g) : g, l.currentMarkdown = h, l.previousHtml = g;
    });
  }, u);
  return { next: (d) => {
    if (t) de("Stream is already complete. No more chunks can be added");
    else for (const p of d) s.push(p);
  }, complete: () => {
    s.push(`
`), t = !0;
  }, cancel: () => {
    c && (clearInterval(c), c = void 0), t = !0, i.remove();
  }, error: () => {
    t = !0;
  } };
}, fa = "dom/getElement";
var Sl = Object.defineProperty, _l = Object.getOwnPropertyDescriptor, ba = (n, e, t, r) => {
  for (var s, a = r > 1 ? void 0 : r ? _l(e, t) : e, i = n.length - 1; i >= 0; i--) (s = n[i]) && (a = (r ? s(e, t, a) : s(a)) || a);
  return r && a && Sl(e, t, a), a;
};
let Nn = class extends Xe {
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
    return this.getProp("domProps").direction === "received" ? { uid: this.props.uid, participantRole: "assistant", content: this.getItemContent(), contentType: "text", serverResponse: this.serverResponse, status: "complete", dataTransferMode: "batch", time: /* @__PURE__ */ new Date() } : { uid: this.props.uid, participantRole: "user", content: this.getItemContent(), contentType: "text", status: "complete", time: /* @__PURE__ */ new Date() };
  }
  getItemContent() {
    return this.aiMessageContent ?? this.stringContent;
  }
  updateDomProps(e) {
    const t = this.getProp("domProps"), r = { ...t, ...e };
    this.setProp("domProps", r), this.executeDomAction("updateDomProps", t, r);
  }
  updateMarkdownStreamRenderer(e, t) {
    if (this.setProp(e, t), e === "syntaxHighlighter") {
      const r = t;
      this.executeDomAction("updateMarkdownStreamRenderer", { syntaxHighlighter: r });
    }
    if (e === "htmlSanitizer") {
      const r = t;
      this.executeDomAction("updateMarkdownStreamRenderer", { htmlSanitizer: r });
    }
  }
  onMarkdownStreamComplete(e) {
    this.context.emit("messageRendered", { uid: this.props.uid });
  }
};
ba([et("markdown-stream-complete")], Nn.prototype, "onMarkdownStreamComplete", 1), Nn = ba([gt("chatItem", ({ props: n, appendToRoot: e, compEvent: t }) => {
  const r = wl({ ...n.domProps, htmlSanitizer: n.htmlSanitizer, message: void 0 }), s = ((c, d) => {
    const p = c.querySelector(d);
    if (!p) throw new Dn({ source: fa, message: `Could not find element with query "${d}". Make sure the query provided matches an element that exists in the root element.` });
    if (!(p instanceof HTMLElement)) throw new Dn({ source: fa, message: `Element with query "${d}" is not a valid HTMLElement.` });
    return p;
  })(r, ".nlux-comp-message");
  if (!s) throw new Error("Message container not found");
  const a = document.createElement("div");
  a.classList.add("nlux-markdownStream-root");
  const i = document.createElement("div");
  if (i.classList.add("nlux-markdown-container"), i.setAttribute("nlux-message-id", n.uid), a.append(i), s.append(a), n.domProps.message) {
    const c = _o(n.domProps.message ?? "", "markdown", { markdownLinkTarget: n.markdownLinkTarget, syntaxHighlighter: n.syntaxHighlighter, htmlSanitizer: n.htmlSanitizer });
    i.append(c);
  }
  let o;
  e(r);
  let u = { ...n };
  const l = (c) => ((d, p) => {
    const m = kl(d, { syntaxHighlighter: p == null ? void 0 : p.syntaxHighlighter, htmlSanitizer: p == null ? void 0 : p.htmlSanitizer, markdownLinkTarget: p == null ? void 0 : p.markdownLinkTarget, showCodeBlockCopyButton: p == null ? void 0 : p.showCodeBlockCopyButton, skipStreamingAnimation: p == null ? void 0 : p.skipStreamingAnimation, streamingAnimationSpeed: p == null ? void 0 : p.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: p == null ? void 0 : p.waitTimeBeforeStreamCompletion, onComplete: p == null ? void 0 : p.onComplete });
    return { next(h) {
      m.next(h);
    }, complete() {
      m.complete();
    } };
  })(i, { syntaxHighlighter: c.syntaxHighlighter, htmlSanitizer: c.htmlSanitizer, markdownLinkTarget: c.markdownLinkTarget, showCodeBlockCopyButton: c.showCodeBlockCopyButton, skipStreamingAnimation: c.skipStreamingAnimation, streamingAnimationSpeed: c.streamingAnimationSpeed, onComplete: () => t("markdown-stream-complete") });
  return { elements: { chatItemContainer: r }, actions: { focus: () => {
    r.focus();
  }, processStreamedChunk: (c) => {
    o || (o = l(u)), o.next(c);
  }, commitStreamedChunks: () => {
    o && o.complete();
  }, updateMarkdownStreamRenderer: (c) => {
    u = { ...u, ...c }, l(u);
  }, updateDomProps: (c, d) => {
    ((p, m, h) => {
      if ((m.direction !== h.direction || m.layout !== h.layout || m.status !== h.status || m.message !== h.message || m.name !== h.name || m.avatar !== h.avatar) && h && (h.hasOwnProperty("direction") || h.hasOwnProperty("layout") || h.hasOwnProperty("status") || h.hasOwnProperty("message") || h.hasOwnProperty("loader") || h.hasOwnProperty("name") || h.hasOwnProperty("avatar"))) {
        if (m.direction !== h.direction && To(p, h.direction), m.layout !== h.layout && Ao(p, h.layout), m.direction !== h.direction || m.status !== h.status || m.message !== h.message) {
          const g = p.querySelector(`.${Co}`);
          g && xl(g, { direction: m.direction, status: m.status, message: m.message, htmlSanitizer: m.htmlSanitizer }, { direction: h.direction, status: h.status, message: h.message, htmlSanitizer: m.htmlSanitizer });
        }
        if (m.name !== h.name || m.avatar !== h.avatar) {
          const g = p.querySelector(`.${Is}`);
          if (!h.name && !h.avatar) return void (g == null ? void 0 : g.remove());
          if (g) Oo(g, { name: m.name, avatar: m.avatar }, { name: h.name, avatar: h.avatar });
          else if (h.name !== void 0 || h.avatar !== void 0) {
            const f = { name: h.name, avatar: h.avatar }, E = Rs(f), b = p.querySelector(`.${Io}`);
            b && b.prepend(E);
          }
        }
        if (m.name !== h.name) {
          const g = p.querySelector(`.${Ro}`);
          g && (g.textContent = h.name || "");
        }
      }
    })(r, c, d);
  } }, onDestroy: () => {
    r.remove(), o = void 0;
  } };
}, ({ propName: n, newValue: e, dom: t }) => {
  var r;
  switch (n) {
    case "markdownLinkTarget":
    case "skipStreamingAnimation":
    case "syntaxHighlighter":
    case "htmlSanitizer":
    case "showCodeBlockCopyButton":
    case "streamingAnimationSpeed":
      (r = t.actions) == null || r.updateMarkdownStreamRenderer({ [n]: e });
  }
})], Nn);
const Cl = (n, e) => {
  let t, r = e, s = n, a = !0;
  const i = ((g, f) => {
    let E = !1;
    if (typeof g != "function") throw new mt({ source: "x/throttle", message: "Callback must be a function" });
    return (...b) => {
      E || (g.apply(void 0, b), E = !0, setTimeout(function() {
        E = !1;
      }, f));
    };
  })(/* @__PURE__ */ ((g) => {
    let f, E;
    return (b) => {
      const y = b.target;
      if (!(y instanceof HTMLElement)) return;
      const { scrollTop: S, clientHeight: w, scrollHeight: I } = y, z = I - 30, R = Math.ceil(S + w) >= z, T = f === void 0 || E === void 0 ? void 0 : S > f && E === I ? "down" : S < f && E === I ? "up" : void 0;
      E = I, f = S, g({ scrolledToBottom: R, scrollDirection: T });
    };
  })(({ scrolledToBottom: g, scrollDirection: f }) => {
    a ? f === "up" && (a = !1) : f === "down" && g && (a = !0);
  }), 50), o = (g) => {
    g.addEventListener("scroll", i);
  }, u = (g) => {
    g == null || g.removeEventListener("scroll", i);
  }, l = (g) => {
    (t == null ? void 0 : t.uid) === g && (c == null || c.disconnect(), d == null || d.disconnect(), t = void 0, c = void 0, d = void 0);
  };
  let c, d;
  const p = () => {
    s == null || s.scrollTo({ top: 5e4, behavior: "instant" });
  }, m = () => {
    s && r && a && p();
  }, h = () => {
    m();
  };
  return o(s), { updateConversationContainer: (g) => {
    u(s), o(g), s = g;
  }, updateProps: ({ autoScroll: g }) => {
    r = g;
  }, handleNewChatSegmentAdded: (g, f) => {
    t && (c == null || c.disconnect(), d == null || d.disconnect()), t = { uid: g, container: f }, c = new ResizeObserver(m), c.observe(f), d = new MutationObserver(h), d.observe(f, { childList: !0, subtree: !0, characterData: !0 }), r && p();
  }, handleChatSegmentRemoved: (g) => l(g), handleChatSegmentComplete: (g) => l(g), destroy: () => {
    t && (l(t.uid), t = void 0), u(s), s = void 0;
  } };
}, Dt = (n) => {
  var r;
  const e = typeof n == "function" ? n.__compId : void 0;
  if (!e) throw new Error("Invalid compClass! Component should be registered before using");
  const t = (r = uo.retrieve(e)) == null ? void 0 : r.model;
  if (!t || typeof t != "function") throw new Error(`Component "${e}" is not registered`);
  return { withContext: (s) => ({ create: () => new t(s, {}), withProps: (a) => ({ create: () => new t(s, a) }) }) };
}, Tl = (n) => {
  const e = ["adapter", "events"], t = Object.keys(n).filter((s) => !e.includes(s)), r = {};
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    r[a] = n[a];
  }
  return r;
}, No = () => {
  const n = document.createElement("div");
  n.classList.add("nlux-comp-messageLoader");
  const e = document.createElement("span");
  e.classList.add("spinning-loader");
  const t = document.createElement("div");
  return t.classList.add("nlux-comp-loaderContainer"), t.appendChild(e), n.appendChild(t), n;
}, rr = { typing: "nlux-composer--typing", "submitting-prompt": "nlux-composer--submitting", "submitting-conversation-starter": "nlux-composer--submitting", waiting: "nlux-composer--waiting" }, Mo = (n, e) => {
  Object.keys(rr).forEach((t) => {
    n.classList.remove(rr[t]);
  }), n.classList.add(rr[e]);
}, Al = (n) => {
  const e = document.createElement("div");
  e.classList.add("nlux-comp-composer");
  const t = document.createElement("textarea");
  t.placeholder = n.placeholder ?? "", t.value = n.message ?? "", n.autoFocus && (t.autofocus = !0);
  const r = document.createElement("button");
  return r.append((() => {
    const s = document.createElement("div");
    s.classList.add("nlux-comp-sendIcon");
    const a = document.createElement("div");
    return a.classList.add("nlux-comp-sendIcon-container"), s.appendChild(a), s;
  })()), r.append(No()), e.append(t), e.append(r), Mo(e, n.status), n.status !== "submitting-conversation-starter" && n.status !== "submitting-prompt" || (t.disabled = !0, r.disabled = !0), n.status === "waiting" && (r.disabled = !0), n.status === "typing" && (r.disabled = n.disableSubmitButton ?? t.value === ""), e;
}, zn = (n, e) => {
  let t = !1;
  const r = e ? n.querySelector(e) : n, s = r instanceof HTMLElement ? r : void 0;
  if (!s) throw new Dn({ source: "dom/listenTo", message: `Could not find element with query "${e}". Make sure the query provided matches an element that exists in the root element.` });
  const a = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = () => {
    s && (a.forEach((l, c) => {
      s.removeEventListener(c, l);
    }), a.clear(), i.clear());
  }, u = { on: (l, c) => {
    if (!c || !s) return u;
    if (!a.has(l)) {
      const d = (p) => {
        var m;
        (m = i.get(l)) == null || m.forEach((h) => h(p));
      };
      a.set(l, d), s.addEventListener(l, d);
    }
    return i.has(l) || i.set(l, /* @__PURE__ */ new Set()), i.get(l).add(c), u;
  }, get: () => {
    if (t) throw new Error("listenTo().get() can only be used once!");
    return t = !0, [s, o];
  } };
  return u;
}, ya = (n) => {
  n.style.height = "auto", n.style.height = `${n.scrollHeight}px`;
};
var Il = Object.defineProperty, Rl = Object.getOwnPropertyDescriptor, jt = (n, e, t, r) => {
  for (var s, a = r > 1 ? void 0 : r ? Rl(e, t) : e, i = n.length - 1; i >= 0; i--) (s = n[i]) && (a = (r ? s(e, t, a) : s(a)) || a);
  return r && a && Il(e, t, a), a;
};
let xt = class extends Xe {
  constructor(e, { props: t, eventListeners: r }) {
    super(e, t), this.userEventListeners = r;
  }
  focusTextInput() {
    this.executeDomAction("focusTextInput");
  }
  handleCommandEnterKeyPressed(e) {
    var r;
    ((r = this.getProp("domCompProps")) == null ? void 0 : r.submitShortcut) === "CommandEnter" && (this.handleSendButtonClick(), e == null || e.preventDefault());
  }
  handleEnterKeyPressed(e) {
    var r;
    const t = (r = this.getProp("domCompProps")) == null ? void 0 : r.submitShortcut;
    t && (t !== "Enter" || e != null && e.isComposing) || (this.handleSendButtonClick(), e == null || e.preventDefault());
  }
  handleSendButtonClick() {
    var s;
    const e = this.getProp("domCompProps");
    if (e != null && e.disableSubmitButton || !(e == null ? void 0 : e.message)) return;
    const r = (s = this.userEventListeners) == null ? void 0 : s.onSubmit;
    r && r();
  }
  handleTextChange(e) {
    var s;
    const t = (s = this.userEventListeners) == null ? void 0 : s.onTextUpdated;
    t && t(e);
    const r = this.getProp("domCompProps");
    this.setDomProps({ ...r, message: e });
  }
  handleTextInputUpdated(e) {
    const t = e.target;
    t instanceof HTMLTextAreaElement && this.handleTextChange(t.value);
  }
  setDomProps(e) {
    this.setProp("domCompProps", e);
  }
};
jt([et("command-enter-key-pressed")], xt.prototype, "handleCommandEnterKeyPressed", 1), jt([et("enter-key-pressed")], xt.prototype, "handleEnterKeyPressed", 1), jt([et("send-message-clicked")], xt.prototype, "handleSendButtonClick", 1), jt([et("text-updated")], xt.prototype, "handleTextInputUpdated", 1), xt = jt([gt("composer", ({ appendToRoot: n, props: e, compEvent: t }) => {
  const r = Al(e.domCompProps);
  n(r);
  const [s, a] = zn(r, ":scope > textarea").on("input", t("text-updated")).on("keydown", (c) => {
    const d = c.key === "Enter" && !c.isComposing, p = c.altKey || c.ctrlKey || c.metaKey || c.shiftKey;
    if (d && !p) return void t("enter-key-pressed")(c);
    const m = c.getModifierState("Meta") && c.key === "Enter", h = c.getModifierState("Control") && c.key === "Enter";
    (m || h) && t("command-enter-key-pressed")(c);
  }).get(), [i, o] = zn(r, ":scope > button").on("click", t("send-message-clicked")).get();
  if (!(i instanceof HTMLButtonElement)) throw new Error("Expected a button element");
  if (!(s instanceof HTMLTextAreaElement)) throw new Dn({ source: (u = "composer", l = "render", `#${u}/${l}`), message: "Expected a textarea element" });
  var u, l;
  return { elements: { root: r, textInput: s, sendButton: i }, actions: { focusTextInput: () => it(() => {
    s.focus(), s.setSelectionRange(s.value.length, s.value.length);
  }) }, onDestroy: () => {
    a(), o();
  } };
}, ({ propName: n, currentValue: e, newValue: t, dom: r }) => {
  var s;
  n === "domCompProps" && ((s = r.elements) != null && s.root) && ((a, i, o) => {
    if (i.status === o.status && i.message === o.message && i.placeholder === o.placeholder && i.autoFocus === o.autoFocus && i.disableSubmitButton === o.disableSubmitButton) return;
    const u = a.querySelector("* > textarea");
    if (i.status !== o.status) return Mo(a, o.status), ((l, c, d) => {
      if (c.status === d.status) return;
      const p = l.querySelector("* > textarea");
      d.status !== "typing" && d.status !== "waiting" || !p.disabled ? d.status !== "submitting-prompt" && d.status !== "submitting-conversation-starter" || p.disabled || (p.disabled = !0) : p.disabled = !1;
      const m = l.querySelector("* > button");
      if (d.status === "typing") {
        const h = (c.disableSubmitButton !== d.disableSubmitButton ? d.disableSubmitButton : c.disableSubmitButton) ?? p.value === "";
        m.disabled !== h && (m.disabled = h);
      } else d.status !== "waiting" && d.status !== "submitting-prompt" && d.status !== "submitting-conversation-starter" || m.disabled || (m.disabled = !0);
      c.placeholder !== d.placeholder && (p.placeholder = d.placeholder ?? ""), c.message !== d.message && (p.value = d.message ?? ""), c.autoFocus !== d.autoFocus && (p.autofocus = d.autoFocus ?? !1);
    })(a, i, o), void ya(u);
    if (i.placeholder !== o.placeholder && (u.placeholder = o.placeholder ?? ""), i.autoFocus !== o.autoFocus && (u.autofocus = o.autoFocus ?? !1), i.message !== o.message && (u.value = o.message ?? "", ya(u)), i.status === "typing") {
      const l = a.querySelector("* > button"), c = (i.disableSubmitButton !== o.disableSubmitButton ? o.disableSubmitButton : i.disableSubmitButton) ?? u.value === "";
      l.disabled !== c && (l.disabled = c);
    }
  })(r.elements.root, e, t);
})], xt);
const va = (n) => {
  const e = "nlux-chatSegment";
  return n === "complete" ? `${e} nlux-chatSegment--complete` : n === "error" ? `${e} nlux-chatSegment--error` : `${e} nlux-chatSegment--active`;
}, vn = (n, e) => {
  var t, r;
  return n === "assistant" ? ((t = e == null ? void 0 : e.assistant) == null ? void 0 : t.name) ?? "Assistant" : n === "user" ? ((r = e == null ? void 0 : e.user) == null ? void 0 : r.name) ?? "User" : "";
}, Ol = "bubbles";
var Nl = Object.defineProperty, Ml = Object.getOwnPropertyDescriptor, En = (n, e, t, r) => {
  for (var s, a = r > 1 ? void 0 : r ? Ml(e, t) : e, i = n.length - 1; i >= 0; i--) (s = n[i]) && (a = (r ? s(e, t, a) : s(a)) || a);
  return r && a && Nl(e, t, a), a;
};
let Ot = class extends Xe {
  constructor(e, t) {
    super(e, t), this.chatItemCompIdsByIndex = [], this.chatItemComponentsById = /* @__PURE__ */ new Map();
  }
  addChatItem(e) {
    var s, a;
    if (this.throwIfDestroyed(), this.chatItemComponentsById.has(e.uid)) throw new Error(`CompChatSegment: chat item with id "${e.uid}" already exists`);
    const t = ((i, o, u, l) => {
      const c = o ?? Ol;
      if (i.participantRole === "assistant") {
        const p = i.status === "complete" ? "complete" : "streaming";
        return i.dataTransferMode === "stream" ? { status: p, layout: c, direction: "received", name: vn("assistant", { assistant: l }), avatar: l == null ? void 0 : l.avatar } : i.status === "complete" ? { status: p, layout: c, direction: "received", name: vn("assistant", { assistant: l }), avatar: l == null ? void 0 : l.avatar, message: (d = i.content, typeof d == "string" ? d : typeof d == "object" ? `${d}` : d == null ? "" : typeof d.toString == "function" ? d.toString() : JSON.stringify(d)) } : { status: p, layout: c, direction: "received", name: vn("assistant", { assistant: l }), avatar: l == null ? void 0 : l.avatar };
      }
      var d;
      return { status: "complete", layout: c, direction: "sent", message: i.content, name: vn("user", { user: u }), avatar: u == null ? void 0 : u.avatar };
    })(e, this.getProp("conversationLayout"), this.getProp("userPersona"), this.getProp("assistantPersona"));
    if (!t) throw new Error(`CompChatSegment: chat item with id "${e.uid}" has invalid props`);
    const r = Dt(Nn).withContext(this.context).withProps({ uid: e.uid, domProps: t, markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed") }).create();
    this.chatItemComponentsById.set(e.uid, r), this.chatItemCompIdsByIndex.push(e.uid), this.rendered && ((a = (s = this.renderedDom) == null ? void 0 : s.elements) != null && a.chatSegmentContainer ? r.render(this.renderedDom.elements.chatSegmentContainer, this.renderedDom.elements.loaderContainer) : ns("CompChatSegment: chatSegmentContainer is not available"));
  }
  addChunk(e, t, r) {
    if (this.destroyed) return;
    const s = this.chatItemComponentsById.get(e);
    if (!s) throw new Error(`CompChatSegment: chat item with id "${e}" not found`);
    s.addChunk(t, r);
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
  onLoaderShown(e) {
    var t;
    (t = this.renderedDom) != null && t.elements && (this.renderedDom.elements.loaderContainer = e);
  }
  setAssistantPersona(e) {
    this.setProp("assistantPersona", e);
    const t = { name: e == null ? void 0 : e.name, avatar: e == null ? void 0 : e.avatar };
    this.chatItemComponentsById.forEach((r) => {
      r.getChatSegmentItem().participantRole === "assistant" && r.updateDomProps(t);
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
    this.chatItemComponentsById.forEach((r) => {
      r.getChatSegmentItem().participantRole === "user" && r.updateDomProps(t);
    });
  }
  updateMarkdownStreamRenderer(e, t) {
    this.setProp(e, t);
  }
  setProp(e, t) {
    super.setProp(e, t), e !== "markdownLinkTarget" && e !== "syntaxHighlighter" && e !== "htmlSanitizer" && e !== "skipStreamingAnimation" && e !== "streamingAnimationSpeed" || this.chatItemComponentsById.forEach((r) => {
      r.updateMarkdownStreamRenderer(e, t);
    });
  }
  onChatSegmentReady() {
    it(() => {
      var t, r, s, a;
      if (!((r = (t = this.renderedDom) == null ? void 0 : t.elements) != null && r.chatSegmentContainer)) return;
      const e = (a = (s = this.renderedDom) == null ? void 0 : s.elements) == null ? void 0 : a.chatSegmentContainer;
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
En([et("loader-shown")], Ot.prototype, "onLoaderShown", 1), En([et("chat-segment-ready")], Ot.prototype, "onChatSegmentReady", 1), En([et("loader-hidden")], Ot.prototype, "onLoaderHidden", 1), Ot = En([gt("chatSegment", ({ props: n, compEvent: e, appendToRoot: t }) => {
  let r;
  const s = document.createElement("div");
  s.className = va(n.status);
  const a = () => {
    if (!r) {
      r = document.createElement("div"), r.className = "nlux-chatSegment-loader-container";
      const i = No();
      r.appendChild(i), s.appendChild(r), e("loader-shown")(r);
    }
  };
  return n.status === "active" && a(), t(s), e("chat-segment-ready")(), { elements: { chatSegmentContainer: s, loaderContainer: r }, actions: { showLoader: a, hideLoader: () => {
    r && (r.remove(), r = void 0, e("loader-hidden")());
  } }, onDestroy: () => {
    s.remove();
  } };
}, ({ propName: n, newValue: e, dom: t }) => {
  var r, s, a;
  if (n === "status") {
    const i = (r = t.elements) == null ? void 0 : r.chatSegmentContainer;
    if (!i) return;
    const o = e;
    i.className = va(o), o === "active" ? (s = t.actions) == null || s.showLoader() : (a = t.actions) == null || a.hideLoader();
  }
})], Ot);
let cs = class extends Xe {
  constructor(e, t) {
    super(e, t), this.chatSegmentCompIdsByIndex = [], this.chatSegmentComponentsById = /* @__PURE__ */ new Map(), t.messages && t.messages.length > 0 && this.addChatSegment("complete", t.messages);
  }
  addChatItem(e, t) {
    const r = this.chatSegmentComponentsById.get(e);
    if (!r) throw new Error(`CompConversation: chat segment with id "${e}" not found`);
    r.destroyed ? ns(`CompConversation: chat segment with id "${e}" is destroyed and cannot be used`) : r.addChatItem(t);
  }
  addChatSegment(e = "active", t) {
    this.throwIfDestroyed();
    const r = Je(), s = Dt(Ot).withContext(this.context).withProps({ uid: r, status: e, conversationLayout: this.getProp("conversationLayout"), userPersona: this.getProp("userPersona"), assistantPersona: this.getProp("assistantPersona"), markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed") }).create();
    if (t) for (const i of t) i.role === "assistant" ? s.addChatItem({ uid: Je(), participantRole: "assistant", time: /* @__PURE__ */ new Date(), dataTransferMode: "batch", status: "complete", content: i.message, serverResponse: i.serverResponse, contentType: "text" }) : i.role === "user" && s.addChatItem({ uid: Je(), participantRole: "user", time: /* @__PURE__ */ new Date(), status: "complete", content: i.message, contentType: "text" });
    this.chatSegmentComponentsById.set(r, s), this.chatSegmentCompIdsByIndex.push(r);
    const a = s.id;
    return this.addSubComponent(a, s, "segmentsContainer"), this.notifyAboutSegmentCountChange(this.chatSegmentCompIdsByIndex.length), r;
  }
  addChunk(e, t, r, s) {
    const a = this.chatSegmentComponentsById.get(e);
    if (!a) throw new Error(`CompConversation: chat segment with id "${e}" not found`);
    a.addChunk(t, r, s);
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
    if (typeof e == "number" && e < 0) return void ns(`Invalid value provided for 'historyPayloadSize' : "${e}"! Value must be a positive integer or 'max'.`);
    if (e === 0) return;
    const t = ((r) => {
      const s = [];
      return r.forEach((a) => {
        a.items.forEach((i) => {
          if (i.status === "complete") {
            if (i.participantRole === "assistant") s.push({ role: "assistant", message: i.content });
            else if (i.participantRole === "user") return s.push({ role: "user", message: i.content });
          }
        });
      }), s;
    })(this.chatSegmentCompIdsByIndex.map((r) => this.chatSegmentComponentsById.get(r)).filter((r) => r !== void 0).map((r) => ({ uid: r.id, status: "complete", items: r.getChatItems().map((s) => s.getChatSegmentItem()) })));
    return e === "max" ? t : t.slice(-e);
  }
  removeChatSegment(e) {
    const t = this.chatSegmentComponentsById.get(e);
    if (!t) return;
    const r = t.id;
    this.subComponents.has(r) && this.removeSubComponent(r), this.chatSegmentComponentsById.delete(t.id);
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
      const r = e, s = t;
      this.chatSegmentComponentsById.forEach((a) => {
        a.updateMarkdownStreamRenderer(r, s);
      });
    }
  }
  notifyAboutSegmentCountChange(e) {
    const t = this.getProp("onSegmentCountChange");
    t && t(e);
  }
};
cs = ((n, e, t, r) => {
  for (var s, a = e, i = n.length - 1; i >= 0; i--) (s = n[i]) && (a = s(a) || a);
  return a;
})([gt("conversation", ({ appendToRoot: n }) => {
  const e = document.createElement("div");
  return e.classList.add("nlux-chatSegments-container"), n(e), { elements: { segmentsContainer: e }, actions: {} };
}, () => {
})], cs);
var Dl = Object.defineProperty, Ll = Object.getOwnPropertyDescriptor, Ea = (n, e, t, r) => {
  for (var s, a = r > 1 ? void 0 : r ? Ll(e, t) : e, i = n.length - 1; i >= 0; i--) (s = n[i]) && (a = (r ? s(e, t, a) : s(a)) || a);
  return r && a && Dl(e, t, a), a;
};
let Mn = class extends Xe {
  constructor(e, t) {
    super(e, t), this.updateConversationStarters = (r) => {
    };
  }
  conversationStarterClicked(e) {
    this.getProp("onConversationStarterSelected")(e);
  }
};
Ea([et("conversation-starter-selected")], Mn.prototype, "conversationStarterClicked", 1), Mn = Ea([gt("conversationStarters", ({ appendToRoot: n, props: e, compEvent: t }) => {
  const r = ((a) => {
    const i = document.createElement("div");
    return i.classList.add("nlux-comp-conversationStarters"), a.forEach((o, u) => {
      const l = document.createElement("button");
      l.classList.add("nlux-comp-conversationStarter");
      let c = document.createElement("div");
      o.icon && (typeof o.icon == "string" ? (c = document.createElement("img"), c.setAttribute("src", o.icon), c.setAttribute("width", "16px")) : (c.className = "nlux-comp-conversationStarter-icon-container", c.appendChild(o.icon)));
      const d = document.createElement("span");
      d.classList.add("nlux-comp-conversationStarter-prompt"), d.textContent = o.label ?? o.prompt, l.appendChild(c), l.appendChild(d), i.appendChild(l);
    }), i;
  })(e.conversationStarters);
  n(r);
  let s = [];
  return e.conversationStarters.forEach((a, i) => {
    const [o, u] = zn(r, `:scope > :nth-child(${i + 1})`).on("click", () => {
      t("conversation-starter-selected")(a);
    }).get();
    s.push(u);
  }), { elements: {}, actions: {}, onDestroy: () => {
    s.forEach((a) => a()), s = [], r.remove();
  } };
}, ({}) => {
})], Mn);
const wa = "nlux-comp-welcomeMessage-text", Do = (n, e) => {
  const t = n.querySelector(`.${wa}`);
  if (e !== "" && e !== void 0) if (t) t.textContent = e;
  else {
    const r = document.createElement("div");
    r.classList.add(wa), r.textContent = e, n.appendChild(r);
  }
  else t == null || t.remove();
}, Lo = "nlux-comp-welcomeMessage-personaName", ls = (n) => {
  const e = document.createElement("div");
  e.classList.add("nlux-comp-welcomeMessage");
  const t = Rs({ name: n.name, avatar: n.avatar });
  e.append(t);
  const r = document.createElement("div"), s = document.createTextNode(n.name);
  return r.append(s), r.classList.add(Lo), e.append(r), Do(e, n.message), e;
}, xa = () => ls({ name: "", avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAAewgAAHsIAXgkHaEAABj0SURBVHic7Z13vBxV2ce/Z29ugEQMEAICQUBAkBqqlCiRKqC0gApKE14poh8VUCmihv4SCB2CVAtFQBR9UZpCaMIL0ouAGIIEQgsJya27e/zjmb117+yUc+bM7J7v53Nys3dnzjx3dn9z2nOeR2mt8Xg89Sm5NsDjyTNeIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCKNsVdwzY4Ktqgej+v6RHwpQ8lqr2jFD3q+9UAPrGHDcwN8F6JD3hr1m0LHjgYnAWsAqwGrA8sDKwNLAOGAMsCTQPuDkMtANdAALgUXAPOBtYC4wB5gNvI5m7gBLhxjOiK8VwMAdpQOPrf1eD31PD/5dcJwa8lr+P+D4Ie8pCxtZ249/z3id1gTSoowHNgEmBWUDNGsBYy1eswy8BrwIPAs8BTyBiMeTEi+QdCwFfA6YAmwLbAaMHf7Ytsoo4NNB2XPA758GHgHuB2bBwFbGExUvkPisAOwK7ALsAKyQrR4is3FQjgR6EaH8CfgL8E+HdhUKL5BoLAHsBUwFdkczxq05sWkHdgwKiFhuBm7DtyyheIGEsyFwMHCA0nol18YYZLugnAfcAlwD3OPUopziBVKf3dEcCXzJtSGWGQ0cEJTHgV8A1wI9Dm3KFX4dZDD7A48iffVmF8dQNgdmAv8CTkCmoFseLxDhq8CTaH09Wm+J1rRwmYjWZyBC+TEy/mpZWl0gOwEPorkRzaT+BS1f0ExAcybwKvCtNDe5yLSqQNYAbkZzF5ptc/BlzHOZiGYm0vXcKukNLyqtKJD9gRdB7+v6m1ewsiXoR4CTE931gtJKAvkEcAua69Es4f77VthyKuLOsk3cD6CItIpADgReRjM1B1+wZigbo3kIOCPm51A4mn0dZDRwFVp/w7UhTcoJyETHQYizZNPRzALZXMGNwJquDWlyNgeeAw5DFhmbimYVyBHA5WjXZrQMJcRdZUvgaMe2GKUZBXIZWh/p2ogW5SjEf20v4H23ppiheQSiWBL4E5odXJvS4kxGNm7tiuxJKTTNIpBV0PwNWNu1IR4AVkKmgr8I3OnWlHTYE8iwfdqGGD6uWA/0LGS7qydf/AX4BvAb14YkxZ5AqtZqFkSAWwctR0s71OWcXwPLAhe7NiQJ1gSiKnamkHTf0qaaDDxg5SIe01yErEmd59qQuBR1DLI1WntxFItzkX7F+Y7tiEURXU0mAQ+5NsKTiBnIGlVhKFYLolgDzcPYmwLw2Ody4EPgJsd2RMKeQLThMYji42j+riQWlafY3Ai8hWaWa0MaYVEgButSgOYBJCaVpzn4G7AWmn+7NiSMYnSxNLcBG7k2w2OUEjKWXJ0cR1HJdxdLRho/Q3x7PM3HSsDdwHZ5dSzNexdrd+CnRmry5JXPA+eiOda1IfXIcxdrRTS3uzbCkwk/QMKh5u7zznMX6y7ys07TDTwJvAC8gkxTdiIxb5dGIqtvCHyWfD908sxtwIqA+SQfKcjrh3kG+RiU3wr8DvgrkrimEasAOyN74L9g0a5mpATcgWy6yg1Km16vCOg9bdlkJyq2AB4zakx8LgQuQPFaorPllu4AnIL0sT3ROREJWBeb9pPnm7bFpkCWSXimmovMbrjgLuBYFM+JKQlr0YP+fwzirOeJjP400pWNRfvJHxq3xJ43bzLdzQBnaQaO04pzLXixXKy0noUExF7VdOVNyu+QMZ1z7A2C48daWg/N9xzEeOpGxg3n2roVwDPARmieyUFMqyKUDYDvxD7PAnmZJQL4rYNrfoCkKbvb6lWkUfoQ2AIRi6cRmguBZVybYXFHYQxJK74JrG/Nlvp8BGyGUrMzvGYPmm1Av4qEQvWEcxWaqS4NyMM07yh05tsxe4FtUBmkShZHSyT3BgCLgc+h+Sf5asHzyD7AlmjtbFYzDwuF15O1C7tSnwee6/vijrK4vaQKDN9+/CqyK/JRexduGn4PrOzq4m4H6dL/38+aDfX5X+Dvfa+0li9wnC5hFJSITpUrUvfwTE6PAd81e9GmZCXgOFcXt7YOUj7l41EOewAJNJYVz1JvhV4H/7S3oUeV+lu/NA2LVqieClSrfWIZgUfJ2epxDukAxgHlsINGTVto/MIWW5C6T82BZXM0kzOePtwtdHqwtwrlavqlkJJClatSH6qRTfvlYFo172UMmh81/E5ZwGUXa3rGySm/D/o/oTe3qlFdZekShT/1R6ZNich6ysHdbXgj5qD12TlI3pn3ciKattBbaQFrAlHhZX0F2zU4xlzRvAicH3oTNX0th+pJ2IoooKIpdVZQOrh2NULRnKA0CzO7H8UsYxR8O+wYG7hqQX6eaRMNBygNkYpSqN4qqrsCpRi3XQFKUeqsyKBfqThPNQ0cl4OuTN7LSVRhxGIBFwuFy6MyXfy5AQmkHAvVXUGPLolIosxwlRSqqwK9gbDi94l/Afwcd46aRWAFYE80f8jqgi4WquL72KRrPY6JbaECtKbUUZaWoNF4pKRQZY3qLMvJye09PgdP6byXE8I/DLO4WCj8trVrDmc6Wn2Q7FQFPRXU4l70Um2hhwHQ0SstTRs1YSbhN8DZyMYrT30+i+zgfDmLi2XdguxKdmkKysApqR5XJYVa3CuD9lEj3KpSCdVZ7h+zJBdHjT+mrqH5OSqrC2U9SD86w6b4TDSdqetpK6E6yjJ1O6qEbh9QlmiDSlXeL5VM2X1dDroxeS8Ho1HDfm+BLMP+LIuE8cmCHpShHN4KEUFXBb0UlDrL/X9bSUFZB+MUI1cD+DuapxE3HE99at+lP9m+UJZjkP2wN109lIuArtS1aEQEo0qU3u/qdx3RA94f3UZ13GgRibmcKGcjTpyekTmQDARizRerctyYob/6K9lF+hiPbIZKR5uCKqiPumWMoZT8TiHiCFoXVElEMrpNumIm0HyAPCk99elA7k9f2NK26R3GL5LVIH05shPHLzEljrKm9GGXiGNUqV8c0P+zTZwbSx92oxb3BouLqaZ6ay3UL1L/Dc3NGCRJqFUsBm0Y1DLtYes6wy/M6anO14gYequoBd39r8MIFgbVRz3Sooxtly5musb5YuCHqWpofqZiORpjVi3IbhldZxaal1M9uUvB+seCbqmxLeKwSclYRXWUUYuClqTWFUvGG0gYIs/IHASMtXmBLGaxSsCO1q4zmNNSnd2mpOVY2CNf7ji+WDVGlaBLnBX12HZx8EouknOQiCue+jyI5YmfLGaxtiCbweabpIlO0iZOiiwMxnxJxDGgLrrK4q84ph10NalI7kH+Lr+yPpw7Ucr6GCSLhcLtM1o8ujDxuUoG5OqjQBxRu1VhtJVQnRXZX5J0b4kwIwcLc3krj5DBAB2yGYN8LoNraGBmorMCb93Sop7+1yZQoEsKtbgsriqlxDNbM7HmzF1I3gCmZHUx212sNsS5zDa3AgtinzVQHBUtU7YmCcYxalEP+mPt0F5Kspi4CHFiPNCscYVkIRIMvAcN8gTB6ijEdhdrPTTLZdDkxu+GBDaqjl5xFzHVcgwlqLa0qBd6ddKW5MwcdGtcl/mI+83sure5104ja3sWaxNr9ffzGoqHY59VKqG6yqjuqt24WNDfUnX0Uh07WkQTxHOIyItoHgK2tWVizqkAW1EaIA5N315b1V016eYzCIuRFTVoJtmrP0BxOTrOF1ye4qqnIhucbLUcQwkcG1VHL3rMKLEj3kPvdCTBTCuyA6iX++5XTRwaiR5TrprvHgfYTn9gP4S95ur+PlMEFBK9pKPc/zoralPJXRX0Um2oeE+9PwNzgE/aMS63HKPh/mEPFI3cv4rF7jH2u1jrWqtf+APwfuSjg8AKqm/3X5bqCCgp8e1qU0kG7afSWj5aN6G4pO6nVNVSLM/D2pzFmghMtFY/gFKXRD5WB0+anir0OBIH9LVYqrOMVu3yAVc1kZoyxVVoPR2JMtjsvIlSX6vbOdBBy5HBR2hTf2tYrBs089D67khBx6rBzawEgeEcaaOPUuBG31Vm0JRaoyJ7E9I5YxYBzUJgu4afZwbYnOZdzeq0H1wZ41gg6NpUcC8QkDvfq2UGRsWa+p2BpisH0662ygfApsC/6t63kUMwrTDSG2mwGZt3ouVQlDMjH6tA9VZkHSIkQEnmlIDuqtgWhBqKUMpoPS0HoUBtlPlonUQce6D1LTY+IpuDdJsOdg8iLgeNCWat6DYQlNo0NXtqrUh09/izgROBj1myzAWdwBYoXq/7blWH3ZvrgCVsGGWzizXeYvcqRkYqJb5Q8t/8URu091Ti3IMqmhNz0B0y+ZluS1jLUR3x3IPRLIO2EyfL5iyWrRx8H4G6OdKRqraQpNM+ClZFgpWtDiyP7HlfEom99T4wF3gJeE7si4kCKuIuodtV1FX2i9CcBKwY+3p5Q7ELWj0JBGIZ0lSMHDehDbg0+P9oG6bZzFG4jKV6f43Wjdega12r3sTi2BHYE/FG3pBaLeFdoPlI9+92xIFyfuSrlZBZthLo6AHo/gfLW04z4BDCdk6GBxU5A9mbzoCfRrEW1YTD214C1jFer2JD5EndmLIeeUpwYCyrvp9qLBK175vAZ1JaugC4EjgXrd8C+r/0mvofvAZKSJariCjNw8DW6Ux1g4afopgmr4Z/SCr8u7kcgxeJ53Jlxfi412YXy4ai/4FWjcVRaz3izZcfjdanYK7LMg44FjgamAac1fCMwIlRlXWchcz90Xp2Qhtdcp1Salq/BgaLQdXrag1m6HqQlS6WzUH6khYGchdGOjCeONZDciVegmZFCwPQpYAzkVyEjVulmrgrVSJOjb4O/Mz5IDtemQUcgtaoEYr8bSOePwHNkUN+Z+Vhb3Ml3bSiO9HcEOkDiJ6x9lDgeWq5Em0hdm2JdA2/2vD42nTvyDM3Q8vPySjauQFepVGMtMafxU/q/M7Kd9nmOohpg69hQBS9kOs2RlqWc9CZpxcuATcis2LTGx6tNTH6iLshX748Mx/YhjBH/8af3xJIt3UoVibxXeQHSYbiVGN1aW4H/WVj9cXnHMTT+fCGR0YXyb9A7wnZZV+KySsodgb1LlBfCHqkNwZxJhn6Q7jIMJWE69G8Ham70Zg7AJfiqHEYkadoo3buuZ1sExRF5U0k/NPs8MMafoAfA75vwqCo2BRIxWBd6QLC9fN7JIlPXvgycJnhOi9FotvnhbeBzYAFouOQCYfGhInfyqZ0mwJpPF6IxqPAiwbq+SWy8Jc3jgS+Y7jO75KP9An/RuISzDNUX1jrYfKB3IdNgXQaquenBuo4j3yHzbkQ2MpwnV9HwgW54lFgEtKCmGB3wteoyoauMwibAllsoI5XgDtT1nEsGfdbE3IX5j1SvwFcYLjOKPwKEfxCg3U2mnE01WMZhE2BmMhmcnLK8/chynRqPlga8d8yzfeQblwWaCTt9kGG612dxtEUew1fE7ArkPdSnv8f4Lcpzt8CO184m+yORA40zUyku/OQhbpr3IF4JUSPExCdKDNzprr0g7ApkHdSnv+DFOeuBNyf8vqusNUlehqYDByBhA8yxYPIbNzuiMu/DQ6LcExLCeQ1INqej+G0Aw8DS6W4vksmIW7strgCWBNZpLwvYR2vI+GHvoBsB7CZTHNvoqXPiL8PJwI294P8J8W5ab4g9yF91iJzGeKSYuVDR2Z8rgrK2siXfAuki7QyMh6qBUjtQB52s4EngVnIDJVN77WBRJ0Cf9fGxfMokPuRjLhJuBXx9Sk6bci44YAMrvVKUK4e8Luao6nG0uA3IqsQPfnrXBsG2OxizU54XtL1iiuQWatmYX+yCN1an56guBQHwLdiHFt/P3tKbArkNeLf4FOIGq1kMNOx2293xTWuDXBMY2fOfl6zYYBNgcwnnvv1C5DIY/cMZDGwGdmMfPmOZckUZDwUFSszaLa9eeMYnSTn3HnACQnOKxKXuzbAEXH80+Yhfl/GsS2QZyIety/xu1anUwwXkrR8EvGraiXGIdO7UXmWAnrzAjwV4ZgTib/iPSU4r1U4z7UBGXMg8XYIPm3LENsCeaLB+6cjO8TisAytl2lpBeINWIvOUTGP/4cVK7AvkDcYeXbheJI5I/6V4q6Sp+EM1wZkxKbIgmUcHrNhCGSz5XZogs1XgZ1I5mV7A9kkBs0jE4jmk1R04m4ZnoPFYBVZCOTR4OdLSKuxDnBPgnpmAF8zZVRBMbX1OK+MRhZI4zDLhiE1bLqa1LgJmc1K84eciexraHU+gQxgf+XaEEscSPzuc1K3pEhk0YK8SzpxnAz82JAtzUAzp2BLMm2fpDcSmbyH/TmQZKvrzcyqNJfPWY1JwPoxz3meZK5JkcmzQL6ERCLxDOds1wZYIEmUyz8at2IIeRXIXmTwxxeYtYCdXRthkKVJ5tpvJS/hQPIokKOA21wbUQDOcW2AQY4gfmzdN2i8EJ2avAnkMvpTannC2Qg7AR5ckKR7lSagR2TyIpDtkdQAWYWnaRaaYSyyD8mSFl1n2pB6uBbIpsje63uJP4PhkeBsm7s2IiVJImc+j3jwWieLhcKhrI3sG/8KktPCk44ZSNCFIrIt0lWMy0zThoyEC4HcgOyU85hhMtISW/NotUiSLmIVuNawHSPioot1rYNrNjs2ohnaZiOkBYnL9dgLhzQMFwK5BLNBjT0yFpns2oiYJI0gmenEhAuBaNxEHG92MuuXG2ATGgejrsdjyGxnZriaxZpOdpH5WoX1kImPIpBUzJkH6HAlkIW0brQOm1zs2oAIfBEJcxqXl7Hs2l4Pl+sgJjJHeQYzAZjm2ogGXJnwPCexz1wK5F2KOfuSd36CpH/IIyci8Xbj8hJ2I8iPiOuV9JMcX79ZudG1AXWYQPLNXseYNCQOrgWygNYI/pY1n0cy3eaJPyc8707EFckJrgUCcD7iW+MxywXILr08cDXJvSf2NWlIXPIgEJBsrB7z/J9rAxBv3UMTnns8sMigLbHJi0CeonkjdbhkZdzmSl+d5IlU55CDDMV5EQhIfg8riRhbnAOQHXtZsyTwQIrz9zNlSBryJJBukmeX8oRzOdmnpnsAmJjw3KuwGE40DnkSCEhznHS2wxPOfcCnMrxW0o1cH5CjbGF5EwjIrEW3ayOakHYkDGzSp3oUPg48AmyXoo69yJGfXh4F0kG85Cme6CyPbKxa00LdmyHbYLdKUce5pBu3GCePAgHpZnk3FDtMQBLOTDFY57HA40g2rKQ8T7LoJlbJq0BA3Asy2ZjfgowF/gb8KGU9OyHpLdJOx+qgrtyRZ4EA7Ijk6/bY4SzgIeQ+R2UMkobiXuAuYGsDduwBvGWgHuO4CNoQh3eQ/QOZ7wNoIbYB7gYeRIKxPYBkjF0MLAGMR+JWbYhET9kNSQlnip/hyFM3CkprSxMGh8SNJBnKMcBFJiv0hLIAcfFYElgWez2NWzC5IHit+e9y3rtYNS6mGLvlmoVxyL6N8dj7jjxBTlbLwyiKQEASy//OtREeI8yhIHGFiyQQgKlYzknnsc6HyFpJh2M7IlE0gYCs0j7u2ghPIjqBz5LTGat6FFEgIFOLT7o2whOLbkQcL7s2JA5FFUgZudn/79oQTySqyOdVuIXfogoEoBe56fe7NsTTkMMR95bCUWSBgLgoTAF+79YMTwhzgGtcG5GUogukxt5I+jZP/rCax9w2zSIQgKOBH7o2wjMMp0EX0tJMAgHJ/LoX3sExT6zu2oA0NJtAAP4AbIBESvG4J0mKtdzQjAIBeAXJQXGFa0M8rI6EHyokzSqQGkcgQekWuzakxVnPtQFJaXaBgAROWwfpenncsIFrA5LSCgIBeBMZvB+Gz4/oAi+QgnA18GkkYrgnOz7j2oCktJpAAOYh23gPBd5wbEursC4Sl6twtKJAalwLrI1kZPLdLrssB6zl2ogktLJAQFywT0MCqZ1FwVd9c866rg1IQqsLpMZ7SIrhNZEkmPPcmtOUFHLB0AtkMO8g2Xc/BXwbCSzQClSwvwW2kGshXiD16QAuRSKUb4+MVz5yaZAl7gC+DqwBrIbs1DwBO6kHxlio0zpFiYuVB8YjEQD3BnYBRrs1JzGPALche2heCTlucySC4lTMOBxegu1stRbiYnmBJGMlYGckZOcU7KYUSMsiZNflX5C9GS8lqGNP4CtBSRqNczIS5tQeXiC5pA3Z+jsZCWezKdJdccX7wDNILpCHkODSHxiqe1Xgm4hQ4owp7iVe/N9keIEUhvWBjZF4tusgawCfRCIWmqILeB2YDfwTCYjwNPAC2Thn7oDkP9wLWecYiReALTOxyQuk0IxDumYrBz+XRRLajEeCRI9GVptLyF77XmTjVw8SbO09pCWYB8wF3kZm3VwzDhHJVMTnanlkVuwtxKXneCQKjX0KJRCPpwnw07weTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwj/Ba/47FkhCYEqAAAAAElFTkSuQmCC" });
let us = class extends Xe {
  constructor(e, t) {
    super(e, t), this.setConversationStarters(t.conversationStarters);
  }
  setAssistantPersona(e) {
    this.setProp("assistantPersona", e), this.executeDomAction("updateAssistantPersona", e);
  }
  setConversationStarters(e) {
    var t;
    if (e || this.conversationStartersComp) {
      if (e && !this.conversationStartersComp) {
        const r = this.getProp("onConversationStarterSelected");
        return this.conversationStartersComp = Dt(Mn).withContext(this.context).withProps({ conversationStarters: e, onConversationStarterSelected: r }).create(), void this.addSubComponent(this.conversationStartersComp.id, this.conversationStartersComp, "conversationStartersContainer");
      }
      !e && this.conversationStartersComp ? (this.removeSubComponent(this.conversationStartersComp.id), this.conversationStartersComp = void 0) : (t = this.conversationStartersComp) == null || t.updateConversationStarters(e);
    }
  }
  setShowGreeting(e) {
    this.setProp("showGreeting", e), this.executeDomAction("resetGreeting", e);
  }
  resetConversationStarters() {
    const e = this.getProp("conversationStarters");
    this.setConversationStarters(e);
  }
};
us = ((n, e, t, r) => {
  for (var s, a = e, i = n.length - 1; i >= 0; i--) (s = n[i]) && (a = s(a) || a);
  return a;
})([gt("launchPad", ({ appendToRoot: n, props: e }) => {
  const t = { assistantPersona: e.assistantPersona, conversationStarters: e.conversationStarters, showGreeting: e.showGreeting !== !1 };
  let r;
  if (t.showGreeting) if (e.assistantPersona) {
    const i = e.assistantPersona;
    r = ls({ name: i.name, avatar: i.avatar, message: i.tagline });
  } else r = xa();
  r && (n(r), t.greetingElement = r);
  const s = document.createElement("div");
  s.classList.add("nlux-conversationStarters-container"), n(s);
  const a = (i = !0) => {
    t.showGreeting = i, t.greetingElement && (t.greetingElement.remove(), t.greetingElement = void 0), i && (t.greetingElement = t.assistantPersona ? ls({ name: t.assistantPersona.name, avatar: t.assistantPersona.avatar, message: t.assistantPersona.tagline }) : xa(), t.greetingElement && s.insertAdjacentElement("beforebegin", t.greetingElement));
  };
  return { elements: { conversationStartersContainer: s }, actions: { resetGreeting: (i = !0) => {
    a(i);
  }, updateAssistantPersona: (i) => {
    const o = t.assistantPersona;
    t.assistantPersona = i, (o || i) && t.showGreeting && (i && o ? ((u, l, c) => {
      if (l.message !== c.message || l.name !== c.name || l.avatar !== c.avatar) {
        if (l.message !== c.message && Do(u, c.message), l.name !== c.name) {
          const d = u.querySelector(`.${Lo}`);
          if (d) {
            const p = document.createTextNode(c.name);
            d.replaceChildren(p);
          }
        }
        if (l.avatar !== c.avatar || l.name !== c.name) {
          const d = u.querySelector(`.${Is}`);
          d && Oo(d, { name: l.name, avatar: l.avatar }, { name: c.name, avatar: c.avatar });
        }
      }
    })(t.greetingElement, { name: o == null ? void 0 : o.name, avatar: o == null ? void 0 : o.avatar, message: o == null ? void 0 : o.tagline }, { name: i.name, avatar: i.avatar, message: i.tagline }) : a());
  } }, onDestroy: () => {
    var i;
    (i = t.greetingElement) == null || i.remove(), s.remove();
  } };
}, ({}) => {
})], us);
const ds = (n) => {
  if (typeof n != "object" || n === null) return !1;
  const e = n;
  return (typeof e.streamText == "function" || typeof e.batchText == "function") && ["stream", "batch"].includes(e.dataTransferMode) && typeof e.id == "string" && typeof e.info == "object" && e.info !== null && typeof e.preProcessAiBatchedMessage == "function" && typeof e.preProcessAiStreamedChunk == "function";
};
var ao;
const Pl = typeof navigator < "u" && ((ao = navigator == null ? void 0 : navigator.userAgent) != null && ao.includes("Safari")) ? 100 : 1, je = (n, e = Pl) => {
  setTimeout(() => {
    n();
  }, e);
}, Bl = (n, e, t, r, s, a, i, o, u) => new Promise((l) => {
  const c = Je(), d = [], p = [];
  let m = !1, h = !1, g = !1;
  const f = ds(t), E = { next: (b) => {
    if (h || g) return;
    let y, S;
    if (f) {
      const w = b, I = t.preProcessAiStreamedChunk(w, r);
      I != null && (y = I, S = w, d.push(y), p.push(S));
    } else y = b, d.push(y);
    y != null ? (m || m || (m = !0, je(() => {
      s.forEach((w) => {
        w({ uid: c, status: "streaming", time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" });
      });
    })), je(() => {
      i.forEach((w) => {
        w({ chunk: y, messageId: c, serverResponse: S });
      });
    })) : de("Adapter returned an undefined or null value from streamText. This chunk will be ignored.");
  }, complete: () => {
    h || g || (g = !0, je(() => {
      const b = { uid: c, status: "complete", content: d, contentType: "text", serverResponse: void 0, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" };
      a.forEach((y) => {
        y(b);
      }), l();
    }), je(() => {
      const b = { uid: n, status: "complete", items: [e, { uid: c, status: "complete", contentType: "text", content: d, serverResponse: p, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" }] };
      o.forEach((y) => {
        y(b);
      });
    }));
  }, error: (b) => {
    h || g || (h = !0, je(() => {
      u.forEach((y) => {
        y("failed-to-stream-content", b);
      }), l();
    }));
  } };
  t.streamText(e.content, E, r);
}), zl = (n, e, t) => {
  if (!n) return (() => {
    const b = /* @__PURE__ */ new Set(), y = Je(), S = { uid: y, status: "complete", items: [] };
    return je(() => {
      b.forEach((w) => {
        w(S);
      }), b.clear();
    }), { segment: S, observable: { on: (w, I) => {
      w === "complete" && b.add(I);
    }, removeListener: (w, I) => {
      b.delete(I);
    }, destroy: () => {
      b.clear();
    }, get segmentId() {
      return y;
    } }, dataTransferMode: "batch" };
  })();
  const r = e;
  if (r.streamText === void 0 && r.batchText === void 0 && r.streamServerComponent === void 0) return ((b) => {
    const y = /* @__PURE__ */ new Set(), S = Je(), w = { uid: S, status: "error", items: [] };
    return je(() => {
      y.forEach((I) => I(b)), y.clear();
    }), { segment: w, dataTransferMode: "stream", observable: { on: (I, z) => {
      I === "error" && y.add(z);
    }, removeListener: (I, z) => {
      y.delete(z);
    }, destroy: () => {
      y.clear();
    }, get segmentId() {
      return S;
    } } };
  })("no-data-transfer-mode-supported");
  const s = Je(), a = ((b) => ({ uid: Je(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: b, contentType: "text" }))(n);
  let i, o, u, l, c, d, p = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  je(() => {
    p != null && p.size && (p.forEach((b) => {
      b(a);
    }), p.clear(), p = void 0);
  });
  const g = ((b) => {
    const y = [], S = b, w = b;
    (S == null ? void 0 : S.streamText) === void 0 && (w == null ? void 0 : w.streamServerComponent) === void 0 || y.push("stream"), (S == null ? void 0 : S.batchText) !== void 0 && y.push("batch");
    const I = ds(b) ? b : void 0, z = (I == null ? void 0 : I.dataTransferMode) ?? void 0, R = y.length === 1 ? y[0] : "stream";
    return z ?? R;
  })(e);
  ((b) => "streamServerComponent" in b ? "server-component" : "text")(e) === "server-component" ? (u = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), ((b, y, S, w, I, z, R, T) => new Promise((A, $) => {
    try {
      const D = y.content, H = Je(), P = "assistant", W = "streaming", oe = /* @__PURE__ */ new Date(), C = "stream";
      let L, N;
      const k = () => {
        je(() => {
          z.forEach((X) => {
            L && N && X({ ...L, content: N, status: "complete" });
          });
        }, 20);
        const j = { uid: b, status: "complete", items: [y, L] };
        je(() => {
          R.forEach((X) => {
            X(j);
          }), A();
        }, 20);
      }, O = () => {
        T.forEach((j) => {
          j("failed-to-stream-server-component", new Error("Failed to load content"));
        });
      };
      N = S.streamServerComponent(D, w, { onServerComponentReceived: k, onError: O }), L = { uid: H, content: N, contentType: "server-component", participantRole: P, status: W, time: oe, dataTransferMode: C }, je(() => {
        I.forEach((j) => {
          j(L);
        });
      }, 10);
    } catch (D) {
      de(D);
      const H = D instanceof Error ? D : typeof D == "string" ? new Error(D) : new Error("Unknown error");
      je(() => {
        T.forEach((P) => P("failed-to-load-content", H));
      });
    }
  }))(s, a, e, t, o, u, m, h).finally(() => {
    je(() => E());
  })) : g === "batch" ? (i = /* @__PURE__ */ new Set(), (async (b, y, S, w, I, z, R) => {
    try {
      const T = y.content, A = ds(S) ? S : void 0, $ = A !== void 0, D = Je(), H = "assistant", P = "complete", W = /* @__PURE__ */ new Date(), oe = "batch";
      let C;
      if ($) {
        const k = await A.batchText(T, w), O = A.preProcessAiBatchedMessage(k, w);
        O != null && (C = { uid: D, content: O, contentType: "text", serverResponse: k, participantRole: H, status: P, time: W, dataTransferMode: oe });
      } else C = { uid: D, content: await S.batchText(T, w), contentType: "text", serverResponse: void 0, participantRole: H, status: P, time: W, dataTransferMode: oe };
      if (!C) throw new Error("Response from adapter was undefined or cannot be processed");
      const L = C;
      je(() => {
        I.forEach((k) => {
          k(L);
        });
      });
      const N = { uid: b, status: "complete", items: [y, C] };
      je(() => {
        z.forEach((k) => {
          k(N);
        });
      });
    } catch (T) {
      de(T);
      const A = T instanceof Error ? T : typeof T == "string" ? new Error(T) : new Error("Unknown error");
      je(() => {
        R.forEach(($) => $("failed-to-load-content", A));
      });
    }
  })(s, a, e, t, i, m, h).finally(() => {
    je(() => E());
  })) : (l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), Bl(s, a, e, t, l, c, d, m, h).finally(() => {
    je(() => E());
  }));
  const E = () => {
    p == null || p.clear(), p = void 0, i == null || i.clear(), i = void 0, o == null || o.clear(), o = void 0, u == null || u.clear(), u = void 0, l == null || l.clear(), l = void 0, c == null || c.clear(), c = void 0, d == null || d.clear(), d = void 0, m == null || m.clear(), m = void 0, h == null || h.clear(), h = void 0;
  };
  return { segment: { status: "active", uid: s, items: [] }, dataTransferMode: g, observable: { get segmentId() {
    return s;
  }, on: (b, y) => {
    b === "userMessageReceived" && p ? p.add(y) : b === "aiMessageReceived" && i ? i.add(y) : b === "aiServerComponentStreamStarted" && o ? o.add(y) : b === "aiServerComponentStreamed" && u ? u.add(y) : b === "aiMessageStreamStarted" && l ? l.add(y) : b === "aiMessageStreamed" && c ? c.add(y) : b === "aiChunkReceived" && d ? d.add(y) : b === "complete" && m ? m.add(y) : b === "error" && h && h.add(y);
  }, removeListener: (b, y) => {
    b !== "userMessageReceived" ? b !== "aiMessageReceived" ? b !== "aiMessageStreamStarted" ? b !== "aiMessageStreamed" ? b !== "aiChunkReceived" ? b !== "complete" ? b !== "error" || (h == null || h.delete(y)) : m == null || m.delete(y) : d == null || d.delete(y) : c == null || c.delete(y) : l == null || l.delete(y) : i == null || i.delete(y) : p == null || p.delete(y);
  }, destroy: () => E() } };
}, Fl = { "data-transfer-mode-not-supported": "Requested data transfer mode is not supported", "no-data-transfer-mode-supported": "Adapter does not support any valid data transfer modes", "connection-error": "Connection error", "invalid-credentials": "Invalid credentials", "invalid-api-key": "Invalid API key", "http-server-side-error": "HTTP server side error", "http-client-side-error": "HTTP client side error", "failed-to-load-content": "Failed to load content", "failed-to-stream-content": "Failed to stream content", "failed-to-stream-server-component": "Failed to stream server component", "failed-to-render-content": "Failed to display content" }, ps = (n, e) => n !== void 0 && n.length > 0 || e !== void 0 && e > 0 ? "active" : "starting";
var Ul = Object.defineProperty, $l = Object.getOwnPropertyDescriptor, sr = (n, e, t, r) => {
  for (var s, a = r > 1 ? void 0 : r ? $l(e, t) : e, i = n.length - 1; i >= 0; i--) (s = n[i]) && (a = (r ? s(e, t, a) : s(a)) || a);
  return r && a && Ul(e, t, a), a;
};
let wn = class extends Xe {
  constructor(n, { conversationLayout: e, autoScroll: t, streamingAnimationSpeed: r, visible: s = !0, composer: a, assistantPersona: i, userPersona: o, showGreeting: u, conversationStarters: l, initialConversationContent: c, syntaxHighlighter: d, htmlSanitizer: p, markdownLinkTarget: m, showCodeBlockCopyButton: h, skipStreamingAnimation: g }) {
    if (super(n, { conversationLayout: e, visible: s, autoScroll: t, streamingAnimationSpeed: r, assistantPersona: i, userPersona: o, conversationStarters: l, showGreeting: u, initialConversationContent: c, composer: a, syntaxHighlighter: d, htmlSanitizer: p, markdownLinkTarget: m, showCodeBlockCopyButton: h, skipStreamingAnimation: g }), this.handleConversationStarterClick = (f) => {
      this.composer.setDomProps({ status: "submitting-conversation-starter" }), this.composer.handleTextChange(f.prompt), this.composer.handleSendButtonClick();
    }, this.handleSegmentCountChange = (f) => {
      var b, y;
      if (this.segmentCount === f) return;
      this.segmentCount = f;
      const E = ps(this.getProp("initialConversationContent") || void 0, this.segmentCount);
      this.chatRoomStatus !== E && (this.chatRoomStatus = E, this.executeDomAction("updateChatRoomStatus", this.chatRoomStatus), this.chatRoomStatus === "active" ? (b = this.launchPad) != null && b.id && (this.removeSubComponent((y = this.launchPad) == null ? void 0 : y.id), this.launchPad = void 0) : this.addLaunchPad(this.getProp("showGreeting") ?? !0, this.getProp("assistantPersona"), this.getProp("conversationStarters"), this.handleConversationStarterClick));
    }, this.prompt = "", this.segmentCount = c && c.length > 0 ? 1 : 0, this.chatRoomStatus = ps(c, this.segmentCount), this.chatRoomStatus === "starting" && this.addLaunchPad(u, i, l, this.handleConversationStarterClick), this.addConversation(i, o, c), this.addComposer(a == null ? void 0 : a.placeholder, a == null ? void 0 : a.autoFocus, a == null ? void 0 : a.disableSubmitButton, a == null ? void 0 : a.submitShortcut), !this.conversation || !this.composer) throw new Error("Chat room not initialized — An error occurred while initializing key components.");
  }
  getConversationContentForAdapter(n = "max") {
    return this.conversation.getConversationContentForAdapter(n);
  }
  hide() {
    this.setProp("visible", !1);
  }
  messagesContainerClicked() {
    var n;
    (n = this.composer) == null || n.focusTextInput();
  }
  onChatRoomReady() {
    it(() => {
      var e, t;
      const n = (t = (e = this.renderedDom) == null ? void 0 : e.elements) == null ? void 0 : t.conversationContainer;
      if (n instanceof HTMLElement) {
        this.autoScrollController = Cl(n, this.getProp("autoScroll") ?? !0);
        let r = 0;
        const s = 20, a = () => {
          n.scrollHeight > n.clientHeight && (n.scrollTo({ behavior: "smooth", top: 5e4 }), clearInterval(i));
        }, i = setInterval(() => {
          r >= s ? clearInterval(i) : (a(), r++);
        }, 10);
      }
      this.context.emit("ready", { aiChatProps: Tl(this.context.aiChatProps) });
    });
  }
  setProps(n) {
    var e, t, r, s, a, i, o;
    if (n.hasOwnProperty("autoScroll")) {
      const u = n.autoScroll;
      (e = this.autoScrollController) == null || e.updateProps({ autoScroll: u });
    }
    if (n.hasOwnProperty("conversationLayout") && ((t = this.conversation) == null || t.setConversationLayout(n.conversationLayout)), n.hasOwnProperty("syntaxHighlighter") && this.setProp("syntaxHighlighter", n.syntaxHighlighter), n.hasOwnProperty("htmlSanitizer") && this.setProp("htmlSanitizer", n.htmlSanitizer), n.hasOwnProperty("markdownLinkTarget") && this.setProp("markdownLinkTarget", n.markdownLinkTarget), n.hasOwnProperty("skipStreamingAnimation") && this.setProp("skipStreamingAnimation", n.skipStreamingAnimation), n.hasOwnProperty("streamingAnimationSpeed") && this.setProp("streamingAnimationSpeed", n.streamingAnimationSpeed), n.hasOwnProperty("assistantPersona") && ((r = this.conversation) == null || r.setAssistantPersona(n.assistantPersona ?? void 0), (s = this.launchPad) == null || s.setAssistantPersona(n.assistantPersona ?? void 0)), n.hasOwnProperty("userPersona") && ((a = this.conversation) == null || a.setUserPersona(n.userPersona ?? void 0)), n.hasOwnProperty("showGreeting") && ((i = this.launchPad) == null || i.setShowGreeting(n.showGreeting ?? !0)), n.hasOwnProperty("conversationStarters") && ((o = this.launchPad) == null || o.setConversationStarters(n.conversationStarters)), n.hasOwnProperty("composer") && this.composer) {
      const u = { ...this.composer.getProp("domCompProps"), ...n.composer };
      this.composer.setDomProps(u);
    }
  }
  show() {
    this.setProp("visible", !0);
  }
  setProp(n, e) {
    if (super.setProp(n, e), n === "markdownLinkTarget" || n === "syntaxHighlighter" || n === "htmlSanitizer" || n === "skipStreamingAnimation" || n === "streamingAnimationSpeed") {
      const t = n, r = e;
      this.conversation.updateMarkdownStreamRenderer(t, r);
    }
  }
  addComposer(n, e, t, r) {
    this.composer = Dt(xt).withContext(this.context).withProps({ props: { domCompProps: { status: "typing", placeholder: n, autoFocus: e, disableSubmitButton: t, submitShortcut: r } }, eventListeners: { onTextUpdated: (s) => this.handleComposerTextChange(s), onSubmit: () => this.handleComposerSubmit() } }).create(), this.addSubComponent(this.composer.id, this.composer, "composerContainer");
  }
  addConversation(n, e, t) {
    this.conversation = Dt(cs).withContext(this.context).withProps({ assistantPersona: n, userPersona: e, messages: t, conversationLayout: this.getProp("conversationLayout"), markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), onSegmentCountChange: this.handleSegmentCountChange }).create(), this.addSubComponent(this.conversation.id, this.conversation, "conversationContainer");
  }
  addLaunchPad(n, e, t, r) {
    this.launchPad = Dt(us).withContext(this.context).withProps({ showGreeting: n, assistantPersona: e, conversationStarters: t, onConversationStarterSelected: r }).create(), this.addSubComponent(this.launchPad.id, this.launchPad, "launchPadContainer");
  }
  handleComposerSubmit() {
    const n = this.props.composer;
    (({ context: e, composerInstance: t, conversation: r, autoScrollController: s, messageToSend: a, resetComposer: i, setComposerAsWaiting: o }) => () => {
      var l, c;
      const u = r.addChatSegment();
      try {
        const d = t.getProp("domCompProps");
        t.setDomProps({ ...d, status: "submitting-prompt" });
        const p = { aiChatProps: e.aiChatProps, conversationHistory: r.getConversationContentForAdapter((c = (l = e.aiChatProps) == null ? void 0 : l.conversationOptions) == null ? void 0 : c.historyPayloadSize) }, m = zl(a, e.adapter, p);
        m.observable.on("error", (h, g) => {
          r.removeChatSegment(u), s == null || s.handleChatSegmentRemoved(u), i(!1), e.exception(h), e.emit("error", { errorId: h, message: Fl[h], errorObject: g });
        }), m.observable.on("userMessageReceived", (h) => {
          r.addChatItem(u, h), e.emit("messageSent", { uid: h.uid, message: h.content }), it(() => {
            if (s) {
              const g = r.getChatSegmentContainer(u);
              g && s.handleNewChatSegmentAdded(u, g);
            }
          });
        }), m.dataTransferMode === "batch" ? m.observable.on("aiMessageReceived", (h) => {
          const g = typeof h.content == "string", f = { ...h, content: g ? "" : h.content };
          r.addChatItem(u, f), g && r.addChunk(u, f.uid, h.content, h.serverResponse), r.completeChatSegment(u), e.emit("messageReceived", { uid: h.uid, message: h.content }), i(!0);
        }) : (m.observable.on("aiMessageStreamStarted", (h) => {
          r.addChatItem(u, h), o(), e.emit("messageStreamStarted", { uid: h.uid });
        }), m.observable.on("aiChunkReceived", (h) => {
          const { messageId: g, chunk: f, serverResponse: E } = h;
          r.addChunk(u, g, f, E);
        }), m.observable.on("aiMessageStreamed", (h) => {
          h.status === "complete" && e.emit("messageReceived", { uid: h.uid, message: h.content });
        }), m.observable.on("aiServerComponentStreamStarted", (h) => {
          r.addChatItem(u, h), o(), e.emit("messageStreamStarted", { uid: h.uid });
        }), m.observable.on("aiServerComponentStreamed", (h) => {
          h.status === "complete" && e.emit("messageReceived", { uid: h.uid, message: h.content });
        }), m.observable.on("complete", () => {
          r.completeChatSegment(u), i(!1);
        }));
      } catch (d) {
        de(d), i(!1);
      }
    })({ context: this.context, composerInstance: this.composer, conversation: this.conversation, messageToSend: this.prompt, autoScrollController: this.autoScrollController, resetComposer: (e) => {
      this.destroyed || this.resetComposer(e, n == null ? void 0 : n.autoFocus);
    }, setComposerAsWaiting: () => {
      this.destroyed || this.composer.setDomProps({ status: "waiting" });
    } })();
  }
  handleComposerTextChange(n) {
    this.prompt = n;
  }
  resetComposer(n = !1, e = !1) {
    if (!this.composer) return;
    const t = { ...this.composer.getProp("domCompProps"), status: "typing" };
    n && (t.message = ""), this.composer.setDomProps(t), e && this.composer.focusTextInput();
  }
};
sr([et("conversation-container-clicked")], wn.prototype, "messagesContainerClicked", 1), sr([et("chat-room-ready")], wn.prototype, "onChatRoomReady", 1), wn = sr([gt("chatRoom", ({ appendToRoot: n, compEvent: e, props: t }) => {
  const r = document.createElement("div");
  r.classList.add("nlux-conversation-container");
  const s = document.createElement("div");
  s.classList.add("nlux-composer-container");
  const a = document.createElement("div");
  a.classList.add("nlux-launchPad-container");
  const i = document.createDocumentFragment();
  i.appendChild(a), i.appendChild(r), i.appendChild(s);
  const o = t.visible ?? !0, u = document.createElement("div"), l = (p) => {
    u.classList.remove("nlux-chatRoom-starting"), u.classList.remove("nlux-chatRoom-active"), u.classList.add(`nlux-chatRoom-${p}`);
  };
  u.classList.add("nlux-chatRoom-container"), l(ps(t.initialConversationContent)), u.append(i), u.style.display = o ? "" : "none";
  const [c, d] = zn(u, ":scope > .nlux-conversation-container").on("click", e("conversation-container-clicked")).get();
  return n(u), e("chat-room-ready")(), { elements: { composerContainer: s, conversationContainer: r, launchPadContainer: a }, actions: { updateChatRoomStatus: (p) => {
    l(p);
  } }, onDestroy: () => {
    d();
  } };
}, ({ propName: n, newValue: e, dom: { elements: t } }) => {
})], wn);
const Hl = (n) => {
  const e = /* @__PURE__ */ new Set();
  let t = !1, r = null, s = null;
  const a = () => {
    if (t || e.size === 0) return;
    t = !0;
    const o = e.values().next().value;
    e.delete(o), r = (({ message: u }) => {
      const l = document.createElement("div");
      l.classList.add("nlux-comp-exceptionItem");
      const c = document.createElement("span");
      return c.classList.add("nlux-comp-exp_itm_msg"), c.append(document.createTextNode(u)), l.append(c), l;
    })(o), n.append(r), s = setTimeout(i, 3e3);
  }, i = () => {
    r == null || r.classList.add("nlux-comp-exceptionItem--hiding"), s = setTimeout(() => {
      t = !1, r == null || r.remove(), r = null, a();
    }, 500);
  };
  return { displayException: (o) => {
    e.add({ message: o }), t || a();
  }, destroy: () => {
    e.clear(), r == null || r.remove(), s && clearTimeout(s);
  } };
};
let ka = class extends Xe {
  constructor(n, e) {
    super(n, e);
  }
  destroy() {
    super.destroy();
  }
  showAlert(n, e) {
    this.executeDomAction("displayException", e);
  }
};
ka = ((n, e, t, r) => {
  for (var s, a = e, i = n.length - 1; i >= 0; i--) (s = n[i]) && (a = s(a) || a);
  return a;
})([gt("exceptionsBox", ({ props: n, appendToRoot: e }) => {
  const t = (() => {
    const s = document.createElement("div");
    return s.classList.add("nlux-comp-exceptionBox"), s;
  })();
  e(t);
  let r = Hl(t);
  return { elements: { root: t }, actions: { displayException: (s) => {
    r == null || r.displayException(s);
  } }, onDestroy: () => {
    r == null || r.destroy(), t.remove(), r = void 0;
  } };
}, () => {
})], ka);
class jl {
  constructor(e) {
    this.actionToPerformWhenIdle = "none", this.itemIds = /* @__PURE__ */ new Set(), this.status = "idle", this.theContextId = null, this.updateQueueByItemId = /* @__PURE__ */ new Map(), this.dataAdapter = e;
  }
  get contextId() {
    return this.theContextId;
  }
  async createContext(e) {
    if (this.status === "destroyed") return { success: !1, error: "The context has been destroyed" };
    const t = e ?? null;
    this.itemIds.clear(), t !== null && Object.keys(t).forEach((r) => {
      this.itemIds.add(r);
    }), this.actionToPerformWhenIdle = "none";
    try {
      const r = await this.dataAdapter.create(t ?? {});
      return r.success ? (this.theContextId = r.contextId, { success: !0, contextId: r.contextId }) : { success: !1, error: "Failed to set the context" };
    } catch (r) {
      return { success: !1, error: `${r}` };
    }
  }
  async destroy() {
    return this.status === "destroyed" ? (de("Context.DataSyncService.destroy() called on a state that has already been destroyed"), { success: !0 }) : (this.status !== "updating" || this.contextId || de("Context.DataSyncService.destroy() called with no contextId!"), this.contextId && (this.status = "updating", await this.dataAdapter.discard(this.contextId)), this.status = "destroyed", this.theContextId = null, this.updateQueueByItemId.clear(), this.actionToPerformWhenIdle = "none", { success: !0 });
  }
  async flush() {
    if (!this.contextId) throw new Error("Context not initialized");
    if (this.status === "updating") return void (this.actionToPerformWhenIdle = "flush");
    this.status = "updating";
    const e = this.updateQueueByItemId.keys(), t = [], r = [];
    for (const a of e) {
      const i = this.updateQueueByItemId.get(a);
      i && (i.operation !== "delete" ? ["set", "update"].includes(i.operation) && t.push(a) : r.push(a));
    }
    const s = t.reduce((a, i) => {
      const o = this.updateQueueByItemId.get(i);
      return o && (o.operation === "set" && (a[i] = { value: o.data, description: o.description }), o.operation !== "update" || o.data === void 0 && o.description === void 0 || (a[i] = { value: o.data, description: o.description })), a;
    }, {});
    if (Object.keys(s).length > 0) {
      Object.keys(s).forEach((a) => {
        this.updateQueueByItemId.delete(a);
      });
      try {
        await this.dataAdapter.updateItems(this.contextId, s);
      } catch (a) {
        de(`Failed to update context data: ${a}`), Object.keys(s).forEach((i) => {
          const o = s[i];
          o && this.updateQueueByItemId.set(i, { operation: "update", data: o.value, description: o.description });
        });
      }
    }
    if (r.length > 0) {
      r.forEach((a) => {
        this.itemIds.delete(a), this.updateQueueByItemId.delete(a);
      });
      try {
        await this.dataAdapter.removeItems(this.contextId, r);
      } catch (a) {
        de(`Failed to delete context data: ${a}`), r.forEach((i) => {
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
      if (!t) return de("resetContextData() called with no contextId!"), void await this.backToIdle();
      try {
        this.status = "updating", await this.dataAdapter.resetItems(t, e);
      } catch (r) {
        de(`Failed to reset context data: ${r}`);
      }
      this.updateQueueByItemId.clear(), e ? (this.itemIds.clear(), Object.keys(e).forEach((r) => {
        this.itemIds.add(r);
      })) : this.itemIds.clear(), await this.backToIdle();
    } else this.actionToPerformWhenIdle = "reset";
  }
  setItemData(e, t, r) {
    if (this.status === "destroyed") throw new Error("The context has been destroyed");
    this.updateQueueByItemId.set(e, { operation: "set", description: t, data: r }), this.itemIds.add(e);
  }
  updateItemData(e, t, r) {
    if (this.status === "destroyed") throw new Error("The context has been destroyed");
    if (r === void 0 && t === void 0) return;
    const s = this.updateQueueByItemId.get(e);
    if ((s == null ? void 0 : s.operation) === "delete") throw new Error("Item has been deleted");
    const a = r ?? (s == null ? void 0 : s.data) ?? void 0, i = t ?? (s == null ? void 0 : s.description) ?? void 0;
    this.updateQueueByItemId.set(e, { operation: "update", data: a, description: i });
  }
  async backToIdle() {
    this.status = "idle";
    const e = this.actionToPerformWhenIdle;
    this.actionToPerformWhenIdle = "none", e !== "flush" ? e !== "reset" || await this.resetContextData() : await this.flush();
  }
}
class ql {
  constructor(e, t) {
    this.actionToPerformWhenIdle = "none", this.status = "idle", this.taskCallbacks = /* @__PURE__ */ new Map(), this.tasks = /* @__PURE__ */ new Set(), this.updateQueueByTaskId = /* @__PURE__ */ new Map(), this.contextId = e, this.adapter = t;
  }
  canRunTask(e) {
    return this.taskCallbacks.has(e);
  }
  async destroy() {
    return this.status === "destroyed" ? (de("Context.TasksService.destroy() called on a state that has already been destroyed"), { success: !0 }) : (this.status = "updating", await this.unregisterAllTasks(), this.status = "destroyed", this.updateQueueByTaskId.clear(), this.tasks.clear(), { success: !0 });
  }
  async flush() {
    if (this.status === "updating") return void (this.actionToPerformWhenIdle = "flush");
    const e = this.updateQueueByTaskId.keys(), t = [], r = [], s = [];
    for (const i of e) {
      const o = this.updateQueueByTaskId.get(i);
      o && (o.operation !== "delete" ? o.operation !== "set" ? o.operation === "update" && r.push(i) : t.push(i) : s.push(i));
    }
    if (t.length === 0 && r.length === 0 && s.length === 0) return;
    this.status = "updating";
    const a = { ...this.buildUpdateObject(t), ...this.buildUpdateObject(r) };
    if (Object.keys(a).length > 0) try {
      const i = await this.adapter.updateTasks(this.contextId, a);
      if (i.success) for (const o of Object.keys(a)) {
        const u = this.updateQueueByTaskId.get(o);
        u && u.operation === "set" && (this.taskCallbacks.set(o, u.callback), this.updateQueueByTaskId.delete(o));
      }
      else de(`Context.TasksService.flush() failed to register tasks for context ID ${this.contextId}
Error: ${i.error}`);
    } catch (i) {
      de(`Context.TasksService.flush() failed to register tasks for context ID ${this.contextId}
Error: ${i}`);
    }
    if (s.length > 0) try {
      const i = await this.adapter.removeTasks(this.contextId, s);
      if (i.success) for (const o of s) this.taskCallbacks.delete(o), this.updateQueueByTaskId.delete(o);
      else de(`Context.TasksService.flush() failed to unregister tasks for context ID ${this.contextId}
Error: ${i.error}`);
    } catch (i) {
      de(`Context.TasksService.flush() failed to unregister tasks for context ID ${this.contextId}
Error: ${i}`);
    }
    await this.backToIdle();
  }
  hasTask(e) {
    return this.tasks.has(e);
  }
  async registerTask(e, t, r, s) {
    if (this.status === "destroyed") throw new Error("Context has been destroyed");
    if (this.tasks.has(e)) throw new Error(`A task with ID '${e}' already exists. Task IDs must be unique.`);
    this.updateQueueByTaskId.set(e, { operation: "set", description: t, paramDescriptions: s || [], callback: r }), this.tasks.add(e);
  }
  async resetContextData() {
    const e = this.contextId;
    if (this.tasks.clear(), this.taskCallbacks.clear(), this.updateQueueByTaskId.clear(), this.status !== "updating") {
      if (!e) return de("resetContextData() called with no contextId!"), void await this.backToIdle();
      try {
        this.status = "updating", await this.unregisterAllTasks();
      } catch (t) {
        de(`Failed to reset context data: ${t}`);
      }
      await this.backToIdle();
    } else this.actionToPerformWhenIdle = "reset";
  }
  async runTask(e, t) {
    if (this.status === "destroyed") throw new Error("Context has been destroyed");
    if (!this.tasks.has(e)) return { success: !1, error: `Task with ID ${e} not found` };
    const r = this.taskCallbacks.get(e);
    if (!r) return { success: !1, error: `The task with ID '${e}' has no callback. This is potential due to failed registration.` };
    try {
      return { success: !0, result: r(...t ?? []) };
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
    const r = this.updateQueueByTaskId.get(e);
    if (r) if (r.operation !== "update") {
      const s = { operation: "update", description: t };
      this.updateQueueByTaskId.set(e, s);
    } else r.description = t;
    else this.updateQueueByTaskId.set(e, { operation: "update", description: t });
  }
  async updateTaskParamDescriptions(e, t) {
    if (this.status === "destroyed") throw new Error("The context has been destroyed");
    if (!this.tasks.has(e)) throw new Error(`Task with ID ${e} not found`);
    const r = this.updateQueueByTaskId.get(e);
    if (r) if (r.operation !== "update") {
      const s = { operation: "update", paramDescriptions: t };
      this.updateQueueByTaskId.set(e, s);
    } else r.paramDescriptions = t;
    else this.updateQueueByTaskId.set(e, { operation: "update", paramDescriptions: t });
  }
  async backToIdle() {
    this.status = "idle";
    const e = this.actionToPerformWhenIdle;
    this.actionToPerformWhenIdle = "none", e !== "flush" ? e !== "reset" || await this.unregisterAllTasks() : await this.flush();
  }
  buildUpdateObject(e) {
    return e.reduce((t, r) => {
      const s = this.updateQueueByTaskId.get(r);
      if (!s) return t;
      if (s.operation === "set" && (t[r] = { description: s.description, paramDescriptions: s.paramDescriptions }), s.operation === "update" && (s.description !== void 0 || s.paramDescriptions !== void 0)) {
        const a = {};
        s.description !== void 0 && (a.description = s.description), s.paramDescriptions !== void 0 && (a.paramDescriptions = s.paramDescriptions), t[r] = a;
      }
      return t;
    }, {});
  }
}
class Kl {
  constructor() {
    this.destroy = async () => {
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
      if (this.theStatus === "initializing") return de(`${this.constructor.name}.initialize() called while context is still initializing! You cannot initialize twice at the same time. Use ${this.constructor.name}.status or await ${this.constructor.name}.initialize() to make sure that the context is not initializing before calling this method.`), { success: !1, error: "Context is still initializing! Use AiContext.status to check the context status before calling this method." };
      if (this.theStatus === "syncing") return de(`${this.constructor.name}.initialize() called on an already initialized context! Use ${this.constructor.name}.status to check the context status before calling this method. `), { success: !1, error: "Context already initialized! Use AiContext.status to check the context status before calling this method." };
      if (this.theStatus === "destroyed") return de(`${this.constructor.name}.initialize() called on destroyed context! Use ${this.constructor.name}.status to check the context status before calling this method. When the context is destroyed, it cannot be used anymore and you should create a new context.`), { success: !1, error: "Context has been destroyed" };
      if (this.theStatus === "error") return de(`${this.constructor.name}.initialize() called on a context in error state! Use ${this.constructor.name}.status to check the context status before calling this method. When the context is in error state, it cannot be used anymore and you should create a new context.`), { success: !1, error: "Context is in error state" };
      if (!this.theDataAdapter) return de(`Adapter not set! You must set the adapter before initializing the context. Use ${this.constructor.name}.withAdapter() to set the adapter before calling this method.`), { success: !1, error: "Adapter not set" };
      this.theStatus = "initializing", this.theDataSyncService = new jl(this.theDataAdapter);
      try {
        const r = await this.theDataSyncService.createContext(e);
        return this.status === "destroyed" ? (r.success && await ((t = this.theDataSyncService) == null ? void 0 : t.resetContextData()), { success: !1, error: "Context has been destroyed" }) : r.success ? this.contextId ? (this.theStatus = "syncing", this.theTasksAdapter ? this.theTasksService = new ql(this.contextId, this.theTasksAdapter) : de("Initializing nlux AiContext without tasks adapter. The context will not handle registering and executing tasks by AI. If you want to use tasks triggered by AI, you should provide an adapter that implements ContextAdapter interface [type ContextAdapter = ContextDataAdapter & ContextTasksAdapter]"), { success: !0, contextId: r.contextId }) : (this.theStatus = "error", { success: !1, error: "Failed to obtain context ID" }) : (this.theStatus = "error", { success: !1, error: "Failed to initialize context" });
      } catch (r) {
        return this.theStatus = "error", { success: !1, error: `${r}` };
      }
    }, this.observeState = (e, t, r) => {
      var s;
      if (this.theStatus !== "idle") if (this.theStatus !== "initializing") {
        if (this.theStatus !== "destroyed") return (s = this.theDataSyncService) == null || s.setItemData(e, t, r ?? null), { setData: (a) => {
          var i;
          (i = this.theDataSyncService) == null || i.updateItemData(e, void 0, a);
        }, setDescription: (a) => {
          var i;
          (i = this.theDataSyncService) == null || i.updateItemData(e, a, void 0);
        }, discard: () => {
          var a;
          (a = this.theDataSyncService) == null || a.removeItem(e);
        } };
        de(`${this.constructor.name}.observeState() called on destroyed context! Use ${this.constructor.name}.status to check the context status before calling this method. When the context is destroyed, it cannot be used anymore and you should create a new context.`);
      } else de(`${this.constructor.name}.observeState() called while context is still initializing! You cannot observe state items while the context is initializing. Use ${this.constructor.name}.status or await ${this.constructor.name}.initialize() to make sure that the context is not initializing before calling this method.`);
      else de(`${this.constructor.name}.observeState() called on idle context! Use ${this.constructor.name}.status to check the context status before calling this method. Use ${this.constructor.name}.initialize() to initialize the context when it is not initialized.`);
    }, this.registerTask = (e, t, r, s) => {
      if (this.theStatus === "idle") return void de(`${this.constructor.name}.registerTask() called on idle context! Use ${this.constructor.name}.status to check the context status before calling this method. Use ${this.constructor.name}.initialize() to initialize the context when it is not initialized.`);
      if (!this.theTasksService) return void de(`${this.constructor.name}.registerTask() called on a context that has does not have tasks service! You should use an adapter that implements ContextTasksAdapter interface in order to register tasks. Use ${this.constructor.name}.withAdapter() to set the right adapter before calling this method.`);
      if (this.theStatus === "destroyed") return void de(`${this.constructor.name}.registerTask() called on destroyed context! Use ${this.constructor.name}.status to check the context status before calling this method. When the context is destroyed, it cannot be used anymore and you should create a new context.`);
      let a = "updating";
      if (!this.theTasksService.hasTask(e)) return this.theTasksService.registerTask(e, t, r, s).then(() => {
        a === "updating" && (a = "set");
      }).catch(() => {
        de(`${this.constructor.name}.registerTask() failed to register task '${e}'!
The task will be marked as deleted and will not be updated anymore.`), a === "updating" && (a = "deleted", this.unregisterTask(e));
      }), { discard: () => {
        a = "deleted", this.unregisterTask(e);
      }, setDescription: (i) => {
        var o;
        if (a === "deleted") throw new Error("Task has been deleted");
        a = "updating", (o = this.theTasksService) == null || o.updateTaskDescription(e, i).then(() => {
          a === "updating" && (a = "set");
        }).catch(() => {
          a === "updating" && (a = "set");
        });
      }, setCallback: (i) => {
        var o;
        if (a === "deleted") throw new Error("Task has been deleted");
        a = "updating", (o = this.theTasksService) == null || o.updateTaskCallback(e, i).then(() => {
          a === "updating" && (a = "set");
        }).catch(() => {
          a === "updating" && (a = "set");
        });
      }, setParamDescriptions: (i) => {
        var o;
        if (a === "deleted") throw new Error("Task has been deleted");
        a = "updating", (o = this.theTasksService) == null || o.updateTaskParamDescriptions(e, i).then(() => {
          a === "updating" && (a = "set");
        }).catch(() => {
          a === "updating" && (a = "set");
        });
      } };
      console.warn(`${this.constructor.name}.registerTask() called with existing taskId: ${e}! It's only possible to register a task once. Use ${this.constructor.name}.hasTask() to check if the task already exists. Use ${this.constructor.name}.registerTask() with a different taskId if you want to register a different task.`);
    }, this.reset = async (e) => {
      var t, r;
      if (!this.theDataSyncService) return de(`${this.constructor.name}.reset() called on a state that has not been initialized! Use ${this.constructor.name}.initialize() to initialize the context before attempting any reset.`), { success: !1, error: "Context has not been initialized" };
      try {
        return await ((t = this.theDataSyncService) == null ? void 0 : t.resetContextData(e)), await ((r = this.theTasksService) == null ? void 0 : r.resetContextData()), this.theStatus = "syncing", { success: !0 };
      } catch (s) {
        return this.theStatus = "error", { success: !1, error: `${s}` };
      }
    }, this.runTask = async (e, t) => this.theTasksService ? this.theTasksService.runTask(e, t) : (de(`${this.constructor.name}.runTask() called on a state that has not been initialized! Use ${this.constructor.name}.initialize() to initialize the context before attempting any task execution.`), Promise.resolve({ success: !1, error: "Context has not been initialized with tasks service. An adapter that implements ContextTasksAdapter interface should be provided to the context, and the context should be initialized before running any tasks." })), this.withAdapter = (e) => {
      if (this.theDataAdapter) throw new Error("Adapter already set");
      const t = typeof (e == null ? void 0 : e.build) == "function";
      this.theDataAdapter = t ? e.build() : e;
      const r = ((s) => {
        const a = s;
        return !(!a || typeof a.resetTasks != "function" || typeof a.updateTasks != "function" || typeof a.removeTasks != "function") && a;
      })(this.theDataAdapter);
      return r && (this.theTasksAdapter = r), this;
    }, this.withDataSyncOptions = (e) => {
      if (this.theDataSyncOptions) throw new Error("Data sync options already set");
      return this.theDataSyncOptions = { ...e }, this;
    }, this.theDataAdapter = null, this.theDataSyncOptions = null, this.theDataSyncService = null, this.theStatus = "idle", this.theTasksAdapter = null, this.theTasksService = null, this.unregisterTask = (e) => this.theTasksService ? this.theTasksService.unregisterTask(e) : (de(`${this.constructor.name}.unregisterTask() called on a state that has not been initialized! Use ${this.constructor.name}.initialize() to initialize the context before attempting any task unregister.`), Promise.resolve({ success: !1, error: "Context has not been initialized" }));
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
const Sa = () => new Kl(), Gl = { "1k": 1e3, "10k": 1e4, "100k": 1e5, "1mb": 1e6, "10mb": 1e7 };
var _a = Object.prototype.hasOwnProperty;
function Ca(n, e) {
  for (let t of n.keys()) if (Qt(t, e)) return t;
}
function Qt(n, e) {
  var t, r, s;
  if (n === e) return !0;
  if (n && e && (t = n.constructor) === e.constructor) {
    if (t === Date) return n.getTime() === e.getTime();
    if (t === RegExp) return n.toString() === e.toString();
    if (t === Array) {
      if ((r = n.length) === e.length) for (; r-- && Qt(n[r], e[r]); ) ;
      return r === -1;
    }
    if (t === Set) {
      if (n.size !== e.size) return !1;
      for (r of n)
        if ((s = r) && typeof s == "object" && !(s = Ca(e, s)) || !e.has(s)) return !1;
      return !0;
    }
    if (t === Map) {
      if (n.size !== e.size) return !1;
      for (r of n)
        if ((s = r[0]) && typeof s == "object" && !(s = Ca(e, s)) || !Qt(r[1], e.get(s))) return !1;
      return !0;
    }
    if (t === ArrayBuffer) n = new Uint8Array(n), e = new Uint8Array(e);
    else if (t === DataView) {
      if ((r = n.byteLength) === e.byteLength) for (; r-- && n.getInt8(r) === e.getInt8(r); ) ;
      return r === -1;
    }
    if (ArrayBuffer.isView(n)) {
      if ((r = n.byteLength) === e.byteLength) for (; r-- && n[r] === e[r]; ) ;
      return r === -1;
    }
    if (!t || typeof n == "object") {
      for (t in r = 0, n)
        if (_a.call(n, t) && ++r && !_a.call(e, t) || !(t in e) || !Qt(n[t], e[t])) return !1;
      return Object.keys(e).length === r;
    }
  }
  return n != n && e != e;
}
const Wl = (n) => {
  const e = /* @__PURE__ */ new Set();
  let t = !1, r = null, s = null;
  const a = () => {
    if (t || e.size === 0) return;
    t = !0;
    const o = e.values().next().value;
    e.delete(o), r = (({ message: u }) => {
      const l = document.createElement("div");
      l.classList.add("nlux-comp-exceptionItem");
      const c = document.createElement("span");
      return c.classList.add("nlux-comp-exp_itm_msg"), c.append(document.createTextNode(u)), l.append(c), l;
    })(o), n.append(r), s = setTimeout(i, 3e3);
  }, i = () => {
    r == null || r.classList.add("nlux-comp-exceptionItem--hiding"), s = setTimeout(() => {
      t = !1, r == null || r.remove(), r = null, a();
    }, 500);
  };
  return { displayException: (o) => {
    e.add({ message: o }), t || a();
  }, destroy: () => {
    e.clear(), r == null || r.remove(), s && clearTimeout(s);
  } };
}, ct = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (n) => {
  const e = 16 * Math.random() | 0;
  return (n == "x" ? e : 3 & e | 8).toString(16);
}), Ke = (n) => {
  typeof n != "string" ? n && typeof n.toString == "function" ? console.warn(`[nlux] ${n.toString()}`) : console.warn("[nlux]") : console.warn(`[nlux] ${n}`);
}, Ta = [], tn = (n) => {
  Ta.includes(n) || (Ta.push(n), Ke(n));
}, Yl = { typing: "nlux-composer--typing", "submitting-prompt": "nlux-composer--submitting", "submitting-conversation-starter": "nlux-composer--submitting", waiting: "nlux-composer--waiting" }, Po = (n, e) => {
  if (!e || e === "Enter") {
    const t = n.key === "Enter" && !n.nativeEvent.isComposing, r = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
    return t && !r;
  }
  return !!(e === "CommandEnter" && n.key === "Enter" && (n.getModifierState("Control") || n.getModifierState("Meta")));
}, Zl = () => x.jsx("div", { className: "nlux-comp-cancelIcon", children: x.jsx("div", { className: "nlux-comp-cancelIcon-container" }) }), Ql = () => x.jsx("div", { className: "nlux-comp-sendIcon", children: x.jsx("div", { className: "nlux-comp-sendIcon-container" }) }), ar = ["submitting-prompt", "submitting-edit", "submitting-conversation-starter", "submitting-external-message"], Xl = (n) => {
  const e = `nlux-comp-composer ${Yl[n.status] || ""}`, t = ar.includes(n.status), r = !n.hasValidInput || n.status === "waiting" || ar.includes(n.status), s = n.status === "typing" || n.status === "waiting", a = n.hideStopButton !== !0 && (ar.includes(n.status) || n.status === "waiting"), i = Ee(null);
  he(() => {
    n.status === "typing" && n.autoFocus && i.current && i.current.focus();
  }, [n.status, n.autoFocus, i.current]);
  const o = ue(() => (c) => {
    var d;
    (d = n.onChange) == null || d.call(n, c.target.value);
  }, [n.onChange]), u = ue(() => () => {
    var c;
    (c = n.onSubmit) == null || c.call(n);
  }, [n.onSubmit]), l = ue(() => (c) => {
    Po(c, n.submitShortcut) && (c.preventDefault(), u());
  }, [u, n.submitShortcut]);
  return he(() => {
    if (!i.current) return;
    const c = () => {
      const d = i.current;
      d && (d.style.height = "auto", d.style.height = `${d.scrollHeight}px`);
    };
    return i.current.addEventListener("input", c), () => {
      var d;
      (d = i.current) == null || d.removeEventListener("input", c);
    };
  }, [i.current]), x.jsxs("div", { className: e, children: [x.jsx("textarea", { tabIndex: 0, ref: i, disabled: t, placeholder: n.placeholder, value: n.prompt, onChange: o, onKeyDown: l, "aria-label": n.placeholder }), !a && x.jsxs("button", { tabIndex: 0, disabled: r, onClick: () => n.onSubmit(), "aria-label": "Send", children: [s && x.jsx(Ql, {}), !s && n.Loader] }), a && x.jsx("button", { tabIndex: 0, onClick: n.onCancel, "aria-label": "Cancel", children: x.jsx(Zl, {}) })] });
}, xn = (n, e) => {
  var t, r;
  return n === "assistant" ? ((t = e == null ? void 0 : e.assistant) == null ? void 0 : t.name) ?? "Assistant" : n === "user" ? ((r = e == null ? void 0 : e.user) == null ? void 0 : r.name) ?? "User" : "";
}, Vl = (n) => {
  const e = "nlux-chatSegment";
  return n === "complete" ? `${e} nlux-chatSegment--complete` : n === "error" ? `${e} nlux-chatSegment--error` : `${e} nlux-chatSegment--active`;
}, ms = { received: "nlux_msg_received", sent: "nlux_msg_sent" }, hs = { streaming: "nlux_msg_streaming", complete: "nlux_msg_complete" }, Aa = (n) => {
  if (!(n instanceof HTMLButtonElement) || n.dataset.clickListenerSet === "true") return;
  let e = !1;
  const t = n.nextElementSibling;
  n.addEventListener("click", () => {
    if (e || !t) return;
    const r = t.innerText;
    navigator.clipboard.writeText(r ?? ""), e = !0, n.classList.add("clicked"), setTimeout(() => {
      e = !1, n.classList.remove("clicked");
    }, 1e3);
  }), n.dataset.clickListenerSet = "true";
}, Bo = (n) => {
  const e = "nlux-comp-copyButton";
  n instanceof HTMLButtonElement && n.classList.contains(e) ? Aa(n) : n.querySelectorAll(`.${e}`).forEach(Aa);
};
function Jl() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
let Tt = { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
function Ia(n) {
  Tt = n;
}
var eu = Object.defineProperty, zo = (n, e, t) => ((r, s, a) => s in r ? eu(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[s] = a)(n, typeof e != "symbol" ? e + "" : e, t);
class Xt {
  constructor(e) {
    zo(this, "options"), this.options = e || Tt;
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
zo(Xt, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]));
const Fo = /[&<>"']/, tu = new RegExp(Fo.source, "g"), Uo = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, nu = new RegExp(Uo.source, "g"), ru = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Ra = (n) => ru[n];
function Ze(n, e) {
  if (e) {
    if (Fo.test(n)) return n.replace(tu, Ra);
  } else if (Uo.test(n)) return n.replace(nu, Ra);
  return n;
}
const su = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function au(n) {
  return n.replace(su, (e, t) => (t = t.toLowerCase()) === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "");
}
const iu = /(^|[^\[])\^/g;
function Ie(n, e) {
  let t = typeof n == "string" ? n : n.source;
  e = e || "";
  const r = { replace: (s, a) => {
    let i = typeof a == "string" ? a : a.source;
    return i = i.replace(iu, "$1"), t = t.replace(s, i), r;
  }, getRegex: () => new RegExp(t, e) };
  return r;
}
function Oa(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const Vt = { exec: () => null };
function Na(n, e) {
  const t = n.replace(/\|/g, (s, a, i) => {
    let o = !1, u = a;
    for (; --u >= 0 && i[u] === "\\"; ) o = !o;
    return o ? "|" : " |";
  }).split(/ \|/);
  let r = 0;
  if (t[0].trim() || t.shift(), t.length > 0 && !t[t.length - 1].trim() && t.pop(), e) if (t.length > e) t.splice(e);
  else for (; t.length < e; ) t.push("");
  for (; r < t.length; r++) t[r] = t[r].trim().replace(/\\\|/g, "|");
  return t;
}
function kn(n, e, t) {
  const r = n.length;
  if (r === 0) return "";
  let s = 0;
  for (; s < r; ) {
    const a = n.charAt(r - s - 1);
    if (a !== e || t) {
      if (a === e || !t) break;
      s++;
    } else s++;
  }
  return n.slice(0, r - s);
}
const un = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, $o = /(?:[*+-]|\d{1,9}[.)])/, Ho = Ie(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, $o).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Bs = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, zs = /(?!\s*\])(?:\\.|[^\[\]\\])+/, ou = Ie(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", zs).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), cu = Ie(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, $o).getRegex(), Qn = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Fs = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, lu = Ie("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Fs).replace("tag", Qn).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Ma = Ie(Bs).replace("hr", un).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Qn).getRegex(), Us = { blockquote: Ie(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Ma).getRegex(), code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, def: ou, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hr: un, html: lu, lheading: Ho, list: cu, newline: /^(?: *(?:\n|$))+/, paragraph: Ma, table: Vt, text: /^[^\n]+/ }, Da = Ie("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", un).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Qn).getRegex(), uu = { ...Us, table: Da, paragraph: Ie(Bs).replace("hr", un).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Da).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Qn).getRegex() }, du = { ...Us, html: Ie(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Fs).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Vt, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Ie(Bs).replace("hr", un).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Ho).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, jo = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, qo = /^( {2,}|\\)\n(?!\s*$)/, dn = "\\p{P}\\p{S}", pu = Ie(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, dn).getRegex(), mu = Ie(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, dn).getRegex(), hu = Ie("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, dn).getRegex(), gu = Ie("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, dn).getRegex(), fu = Ie(/\\([punct])/, "gu").replace(/punct/g, dn).getRegex(), bu = Ie(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), yu = Ie(Fs).replace("(?:-->|$)", "-->").getRegex(), vu = Ie("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", yu).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Fn = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Eu = Ie(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Fn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), La = Ie(/^!?\[(label)\]\[(ref)\]/).replace("label", Fn).replace("ref", zs).getRegex(), Pa = Ie(/^!?\[(ref)\](?:\[\])?/).replace("ref", zs).getRegex(), $s = { _backpedal: Vt, anyPunctuation: fu, autolink: bu, blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, br: qo, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, del: Vt, emStrongLDelim: mu, emStrongRDelimAst: hu, emStrongRDelimUnd: gu, escape: jo, link: Eu, nolink: Pa, punctuation: pu, reflink: La, reflinkSearch: Ie("reflink|nolink(?!\\()", "g").replace("reflink", La).replace("nolink", Pa).getRegex(), tag: vu, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, url: Vt }, wu = { ...$s, link: Ie(/^!?\[(label)\]\((.*?)\)/).replace("label", Fn).getRegex(), reflink: Ie(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Fn).getRegex() }, gs = { ...$s, escape: Ie(jo).replace("])", "~|])").getRegex(), url: Ie(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, xu = { ...gs, br: Ie(qo).replace("{2,}", "*").getRegex(), text: Ie(gs.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Sn = { normal: Us, gfm: uu, pedantic: du }, qt = { normal: $s, gfm: gs, breaks: xu, pedantic: wu };
var ku = Object.defineProperty, ir = (n, e, t) => ((r, s, a) => s in r ? ku(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[s] = a)(n, typeof e != "symbol" ? e + "" : e, t);
function Ba(n, e, t, r) {
  const s = e.href, a = e.title ? Ze(e.title) : null, i = n[1].replace(/\\([\[\]])/g, "$1");
  if (n[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const o = { type: "link", raw: t, href: s, title: a, text: i, tokens: r.inlineTokens(i) };
    return r.state.inLink = !1, o;
  }
  return { type: "image", raw: t, href: s, title: a, text: Ze(i) };
}
class Un {
  constructor(e) {
    ir(this, "lexer"), ir(this, "options"), ir(this, "rules"), this.options = e || Tt;
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let r, s;
      return t[2] === "@" ? (r = Ze(t[1]), s = "mailto:" + r) : (r = Ze(t[1]), s = r), { type: "link", raw: t[0], text: r, href: s, tokens: [{ type: "text", raw: r, text: r }] };
    }
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let r = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      r = kn(r.replace(/^ *>[ \t]?/gm, ""), `
`);
      const s = this.lexer.state.top;
      this.lexer.state.top = !0;
      const a = this.lexer.blockTokens(r);
      return this.lexer.state.top = s, { type: "blockquote", raw: t[0], tokens: a, text: r };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const r = t[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? r : kn(r, `
`) };
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let r = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(r), a = /^ /.test(r) && / $/.test(r);
      return s && a && (r = r.substring(1, r.length - 1)), r = Ze(r, !0), { type: "codespan", raw: t[0], text: r };
    }
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const r = t[1].toLowerCase().replace(/\s+/g, " "), s = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", a = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: r, raw: t[0], href: s, title: a };
    }
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t) return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
  }
  emStrong(e, t, r = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (s && !(s[3] && r.match(/[\p{L}\p{N}]/u)) && (!(s[1] || s[2]) || !r || this.rules.inline.punctuation.exec(r))) {
      const a = [...s[0]].length - 1;
      let i, o, u = a, l = 0;
      const c = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, t = t.slice(-1 * e.length + a); (s = c.exec(t)) != null; ) {
        if (i = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !i) continue;
        if (o = [...i].length, s[3] || s[4]) {
          u += o;
          continue;
        }
        if ((s[5] || s[6]) && a % 3 && !((a + o) % 3)) {
          l += o;
          continue;
        }
        if (u -= o, u > 0) continue;
        o = Math.min(o, o + u + l);
        const d = [...s[0]][0].length, p = e.slice(0, a + s.index + d + o);
        if (Math.min(a, o) % 2) {
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
    if (t) return { type: "escape", raw: t[0], text: Ze(t[1]) };
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const r = t[0], s = function(a, i) {
        const o = a.match(/^(\s+)(?:```)/);
        if (o === null) return i;
        const u = o[1];
        return i.split(`
`).map((l) => {
          const c = l.match(/^\s+/);
          if (c === null) return l;
          const [d] = c;
          return d.length >= u.length ? l.slice(u.length) : l;
        }).join(`
`);
      }(r, t[3] || "");
      return { type: "code", raw: r, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: s };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let r = t[2].trim();
      if (/#$/.test(r)) {
        const s = kn(r, "#");
        this.options.pedantic ? r = s.trim() : s && !/ $/.test(s) || (r = s.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: r, tokens: this.lexer.inline(r) };
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
      let r;
      return r = this.lexer.state.inRawBlock ? t[0] : Ze(t[0]), { type: "text", raw: t[0], text: r };
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t) return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const r = t[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r)) return;
        const i = kn(r.slice(0, -1), "\\");
        if ((r.length - i.length) % 2 == 0) return;
      } else {
        const i = function(o, u) {
          if (o.indexOf(u[1]) === -1) return -1;
          let l = 0;
          for (let c = 0; c < o.length; c++) if (o[c] === "\\") c++;
          else if (o[c] === u[0]) l++;
          else if (o[c] === u[1] && (l--, l < 0)) return c;
          return -1;
        }(t[2], "()");
        if (i > -1) {
          const o = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + i;
          t[2] = t[2].substring(0, i), t[0] = t[0].substring(0, o).trim(), t[3] = "";
        }
      }
      let s = t[2], a = "";
      if (this.options.pedantic) {
        const i = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
        i && (s = i[1], a = i[3]);
      } else a = t[3] ? t[3].slice(1, -1) : "";
      return s = s.trim(), /^</.test(s) && (s = this.options.pedantic && !/>$/.test(r) ? s.slice(1) : s.slice(1, -1)), Ba(t, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: a && a.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer);
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let r = t[1].trim();
      const s = r.length > 1, a = { type: "list", raw: "", ordered: s, start: s ? +r.slice(0, -1) : "", loose: !1, items: [] };
      r = s ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = s ? r : "[*+-]");
      const i = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let o = "", u = "", l = !1;
      for (; e; ) {
        let c = !1;
        if (!(t = i.exec(e)) || this.rules.block.hr.test(e)) break;
        o = t[0], e = e.substring(o.length);
        let d = t[2].split(`
`, 1)[0].replace(/^\t+/, (E) => " ".repeat(3 * E.length)), p = e.split(`
`, 1)[0], m = 0;
        this.options.pedantic ? (m = 2, u = d.trimStart()) : (m = t[2].search(/[^ ]/), m = m > 4 ? 1 : m, u = d.slice(m), m += t[1].length);
        let h = !1;
        if (!d && /^ *$/.test(p) && (o += p + `
`, e = e.substring(p.length + 1), c = !0), !c) {
          const E = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), b = new RegExp(`^ {0,${Math.min(3, m - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), y = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:\`\`\`|~~~)`), S = new RegExp(`^ {0,${Math.min(3, m - 1)}}#`);
          for (; e; ) {
            const w = e.split(`
`, 1)[0];
            if (p = w, this.options.pedantic && (p = p.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), y.test(p) || S.test(p) || E.test(p) || b.test(e)) break;
            if (p.search(/[^ ]/) >= m || !p.trim()) u += `
` + p.slice(m);
            else {
              if (h || d.search(/[^ ]/) >= 4 || y.test(d) || S.test(d) || b.test(d)) break;
              u += `
` + p;
            }
            h || p.trim() || (h = !0), o += w + `
`, e = e.substring(w.length + 1), d = p.slice(m);
          }
        }
        a.loose || (l ? a.loose = !0 : /\n *\n *$/.test(o) && (l = !0));
        let g, f = null;
        this.options.gfm && (f = /^\[[ xX]\] /.exec(u), f && (g = f[0] !== "[ ] ", u = u.replace(/^\[[ xX]\] +/, ""))), a.items.push({ type: "list_item", raw: o, task: !!f, checked: g, loose: !1, text: u, tokens: [] }), a.raw += o;
      }
      a.items[a.items.length - 1].raw = o.trimEnd(), a.items[a.items.length - 1].text = u.trimEnd(), a.raw = a.raw.trimEnd();
      for (let c = 0; c < a.items.length; c++) if (this.lexer.state.top = !1, a.items[c].tokens = this.lexer.blockTokens(a.items[c].text, []), !a.loose) {
        const d = a.items[c].tokens.filter((m) => m.type === "space"), p = d.length > 0 && d.some((m) => /\n.*\n/.test(m.raw));
        a.loose = p;
      }
      if (a.loose) for (let c = 0; c < a.items.length; c++) a.items[c].loose = !0;
      return a;
    }
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const r = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: r, tokens: this.lexer.inline(r) };
    }
  }
  reflink(e, t) {
    let r;
    if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
      const s = t[(r[2] || r[1]).replace(/\s+/g, " ").toLowerCase()];
      if (!s) {
        const a = r[0].charAt(0);
        return { type: "text", raw: a, text: a };
      }
      return Ba(r, s, r[0], this.lexer);
    }
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2])) return;
    const r = Na(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), a = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], i = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (r.length === s.length) {
      for (const o of s) /^ *-+: *$/.test(o) ? i.align.push("right") : /^ *:-+: *$/.test(o) ? i.align.push("center") : /^ *:-+ *$/.test(o) ? i.align.push("left") : i.align.push(null);
      for (const o of r) i.header.push({ text: o, tokens: this.lexer.inline(o) });
      for (const o of a) i.rows.push(Na(o, i.header.length).map((u) => ({ text: u, tokens: this.lexer.inline(u) })));
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
    var r;
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let s, a;
      if (t[2] === "@") s = Ze(t[0]), a = "mailto:" + s;
      else {
        let i;
        do
          i = t[0], t[0] = ((r = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : r[0]) ?? "";
        while (i !== t[0]);
        s = Ze(t[0]), a = t[1] === "www." ? "http://" + t[0] : t[0];
      }
      return { type: "link", raw: t[0], text: s, href: a, tokens: [{ type: "text", raw: s, text: s }] };
    }
  }
}
var Su = Object.defineProperty, Kt = (n, e, t) => ((r, s, a) => s in r ? Su(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[s] = a)(n, typeof e != "symbol" ? e + "" : e, t);
class lt {
  constructor(e) {
    Kt(this, "options"), Kt(this, "state"), Kt(this, "tokens"), Kt(this, "inlineQueue"), Kt(this, "tokenizer"), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Tt, this.options.tokenizer = this.options.tokenizer || new Un(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    const t = { block: Sn.normal, inline: qt.normal };
    this.options.pedantic ? (t.block = Sn.pedantic, t.inline = qt.pedantic) : this.options.gfm && (t.block = Sn.gfm, this.options.breaks ? t.inline = qt.breaks : t.inline = qt.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: Sn, inline: qt };
  }
  static lex(e, t) {
    return new lt(t).lex(e);
  }
  static lexInline(e, t) {
    return new lt(t).inlineTokens(e);
  }
  blockTokens(e, t = []) {
    let r, s, a, i;
    for (e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, (o, u, l) => u + "    ".repeat(l.length)); e; ) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((o) => !!(r = o.call({ lexer: this }, e, t)) && (e = e.substring(r.raw.length), t.push(r), !0)))) if (r = this.tokenizer.space(e)) e = e.substring(r.raw.length), r.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(r);
    else if (r = this.tokenizer.code(e)) e = e.substring(r.raw.length), s = t[t.length - 1], !s || s.type !== "paragraph" && s.type !== "text" ? t.push(r) : (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = s.text);
    else if (r = this.tokenizer.fences(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.heading(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.hr(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.blockquote(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.list(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.html(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.def(e)) e = e.substring(r.raw.length), s = t[t.length - 1], !s || s.type !== "paragraph" && s.type !== "text" ? this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }) : (s.raw += `
` + r.raw, s.text += `
` + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = s.text);
    else if (r = this.tokenizer.table(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.lheading(e)) e = e.substring(r.raw.length), t.push(r);
    else {
      if (a = e, this.options.extensions && this.options.extensions.startBlock) {
        let o = 1 / 0;
        const u = e.slice(1);
        let l;
        this.options.extensions.startBlock.forEach((c) => {
          l = c.call({ lexer: this }, u), typeof l == "number" && l >= 0 && (o = Math.min(o, l));
        }), o < 1 / 0 && o >= 0 && (a = e.substring(0, o + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(a))) s = t[t.length - 1], i && s.type === "paragraph" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(r), i = a.length !== e.length, e = e.substring(r.raw.length);
      else if (r = this.tokenizer.text(e)) e = e.substring(r.raw.length), s = t[t.length - 1], s && s.type === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(r);
      else if (e) {
        const o = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(o);
          break;
        }
        throw new Error(o);
      }
    }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let r, s, a, i, o, u, l = e;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0) for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null; ) c.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; ) l = l.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(l)) != null; ) l = l.slice(0, i.index) + "++" + l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; ) if (o || (u = ""), o = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((c) => !!(r = c.call({ lexer: this }, e, t)) && (e = e.substring(r.raw.length), t.push(r), !0)))) if (r = this.tokenizer.escape(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.tag(e)) e = e.substring(r.raw.length), s = t[t.length - 1], s && r.type === "text" && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : t.push(r);
    else if (r = this.tokenizer.link(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(r.raw.length), s = t[t.length - 1], s && r.type === "text" && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : t.push(r);
    else if (r = this.tokenizer.emStrong(e, l, u)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.codespan(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.br(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.del(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.autolink(e)) e = e.substring(r.raw.length), t.push(r);
    else if (this.state.inLink || !(r = this.tokenizer.url(e))) {
      if (a = e, this.options.extensions && this.options.extensions.startInline) {
        let c = 1 / 0;
        const d = e.slice(1);
        let p;
        this.options.extensions.startInline.forEach((m) => {
          p = m.call({ lexer: this }, d), typeof p == "number" && p >= 0 && (c = Math.min(c, p));
        }), c < 1 / 0 && c >= 0 && (a = e.substring(0, c + 1));
      }
      if (r = this.tokenizer.inlineText(a)) e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (u = r.raw.slice(-1)), o = !0, s = t[t.length - 1], s && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : t.push(r);
      else if (e) {
        const c = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(c);
          break;
        }
        throw new Error(c);
      }
    } else e = e.substring(r.raw.length), t.push(r);
    return t;
  }
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const r = this.inlineQueue[t];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
}
var _u = Object.defineProperty, Cu = (n, e, t) => ((r, s, a) => s in r ? _u(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[s] = a)(n, e + "", t);
class $n {
  constructor(e) {
    Cu(this, "options"), this.options = e || Tt;
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
  code(e, t, r) {
    var a;
    const s = (a = (t || "").match(/^\S*/)) == null ? void 0 : a[0];
    return e = e.replace(/\n$/, "") + `
`, s ? '<pre><code class="language-' + Ze(s) + '">' + (r ? e : Ze(e, !0)) + `</code></pre>
` : "<pre><code>" + (r ? e : Ze(e, !0)) + `</code></pre>
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
  heading(e, t, r) {
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
  image(e, t, r) {
    const s = Oa(e);
    if (s === null) return r;
    let a = `<img src="${e = s}" alt="${r}"`;
    return t && (a += ` title="${t}"`), a += ">", a;
  }
  link(e, t, r) {
    const s = Oa(e);
    if (s === null) return r;
    let a = '<a href="' + (e = s) + '"';
    return t && (a += ' title="' + t + '"'), a += ">" + r + "</a>", a;
  }
  list(e, t, r) {
    const s = t ? "ol" : "ul";
    return "<" + s + (t && r !== 1 ? ' start="' + r + '"' : "") + `>
` + e + "</" + s + `>
`;
  }
  listitem(e, t, r) {
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
    const r = t.header ? "th" : "td";
    return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + e + `</${r}>
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
class Hs {
  br() {
    return "";
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  em(e) {
    return e;
  }
  html(e) {
    return e;
  }
  image(e, t, r) {
    return "" + r;
  }
  link(e, t, r) {
    return "" + r;
  }
  strong(e) {
    return e;
  }
  text(e) {
    return e;
  }
}
var Tu = Object.defineProperty, or = (n, e, t) => ((r, s, a) => s in r ? Tu(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[s] = a)(n, typeof e != "symbol" ? e + "" : e, t);
class ut {
  constructor(e) {
    or(this, "options"), or(this, "renderer"), or(this, "textRenderer"), this.options = e || Tt, this.options.renderer = this.options.renderer || new $n(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Hs();
  }
  static parse(e, t) {
    return new ut(t).parse(e);
  }
  static parseInline(e, t) {
    return new ut(t).parseInline(e);
  }
  parse(e, t = !0) {
    let r = "";
    for (let s = 0; s < e.length; s++) {
      const a = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[a.type]) {
        const i = a, o = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (o !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(i.type)) {
          r += o || "";
          continue;
        }
      }
      switch (a.type) {
        case "space":
          continue;
        case "hr":
          r += this.renderer.hr();
          continue;
        case "heading": {
          const i = a;
          r += this.renderer.heading(this.parseInline(i.tokens), i.depth, au(this.parseInline(i.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const i = a;
          r += this.renderer.code(i.text, i.lang, !!i.escaped);
          continue;
        }
        case "table": {
          const i = a;
          let o = "", u = "";
          for (let c = 0; c < i.header.length; c++) u += this.renderer.tablecell(this.parseInline(i.header[c].tokens), { header: !0, align: i.align[c] });
          o += this.renderer.tablerow(u);
          let l = "";
          for (let c = 0; c < i.rows.length; c++) {
            const d = i.rows[c];
            u = "";
            for (let p = 0; p < d.length; p++) u += this.renderer.tablecell(this.parseInline(d[p].tokens), { header: !1, align: i.align[p] });
            l += this.renderer.tablerow(u);
          }
          r += this.renderer.table(o, l);
          continue;
        }
        case "blockquote": {
          const i = a, o = this.parse(i.tokens);
          r += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          const i = a, o = i.ordered, u = i.start, l = i.loose;
          let c = "";
          for (let d = 0; d < i.items.length; d++) {
            const p = i.items[d], m = p.checked, h = p.task;
            let g = "";
            if (p.task) {
              const f = this.renderer.checkbox(!!m);
              l ? p.tokens.length > 0 && p.tokens[0].type === "paragraph" ? (p.tokens[0].text = f + " " + p.tokens[0].text, p.tokens[0].tokens && p.tokens[0].tokens.length > 0 && p.tokens[0].tokens[0].type === "text" && (p.tokens[0].tokens[0].text = f + " " + p.tokens[0].tokens[0].text)) : p.tokens.unshift({ type: "text", text: f + " " }) : g += f + " ";
            }
            g += this.parse(p.tokens, l), c += this.renderer.listitem(g, h, !!m);
          }
          r += this.renderer.list(c, o, u);
          continue;
        }
        case "html": {
          const i = a;
          r += this.renderer.html(i.text, i.block);
          continue;
        }
        case "paragraph": {
          const i = a;
          r += this.renderer.paragraph(this.parseInline(i.tokens));
          continue;
        }
        case "text": {
          let i = a, o = i.tokens ? this.parseInline(i.tokens) : i.text;
          for (; s + 1 < e.length && e[s + 1].type === "text"; ) i = e[++s], o += `
` + (i.tokens ? this.parseInline(i.tokens) : i.text);
          r += t ? this.renderer.paragraph(o) : o;
          continue;
        }
        default: {
          const i = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return r;
  }
  parseInline(e, t) {
    t = t || this.renderer;
    let r = "";
    for (let s = 0; s < e.length; s++) {
      const a = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[a.type]) {
        const i = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (i !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)) {
          r += i || "";
          continue;
        }
      }
      switch (a.type) {
        case "escape": {
          const i = a;
          r += t.text(i.text);
          break;
        }
        case "html": {
          const i = a;
          r += t.html(i.text);
          break;
        }
        case "link": {
          const i = a;
          r += t.link(i.href, i.title, this.parseInline(i.tokens, t));
          break;
        }
        case "image": {
          const i = a;
          r += t.image(i.href, i.title, i.text);
          break;
        }
        case "strong": {
          const i = a;
          r += t.strong(this.parseInline(i.tokens, t));
          break;
        }
        case "em": {
          const i = a;
          r += t.em(this.parseInline(i.tokens, t));
          break;
        }
        case "codespan": {
          const i = a;
          r += t.codespan(i.text);
          break;
        }
        case "br":
          r += t.br();
          break;
        case "del": {
          const i = a;
          r += t.del(this.parseInline(i.tokens, t));
          break;
        }
        case "text": {
          const i = a;
          r += t.text(i.text);
          break;
        }
        default: {
          const i = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return r;
  }
}
var Jt, za, fs, Au = Object.defineProperty, Ko = (n) => {
  throw TypeError(n);
}, st = (n, e, t) => ((r, s, a) => s in r ? Au(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[s] = a)(n, typeof e != "symbol" ? e + "" : e, t), bs = (n, e, t) => (((r, s, a) => {
  s.has(r) || Ko("Cannot " + a);
})(n, e, "access private method"), t);
Jt = /* @__PURE__ */ new WeakSet(), za = function(n, e) {
  return (t) => {
    if (t.message += `
Please report this to https://github.com/markedjs/marked.`, n) {
      const r = "<p>An error occurred:</p><pre>" + Ze(t.message + "", !0) + "</pre>";
      return e ? Promise.resolve(r) : r;
    }
    if (e) return Promise.reject(t);
    throw t;
  };
}, fs = function(n, e) {
  return (t, r) => {
    const s = { ...r }, a = { ...this.defaults, ...s };
    this.defaults.async === !0 && s.async === !1 && (a.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), a.async = !0);
    const i = bs(this, Jt, za).call(this, !!a.silent, !!a.async);
    if (t == null) return i(new Error("marked(): input parameter is undefined or null"));
    if (typeof t != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
    if (a.hooks && (a.hooks.options = a), a.async) return Promise.resolve(a.hooks ? a.hooks.preprocess(t) : t).then((o) => n(o, a)).then((o) => a.hooks ? a.hooks.processAllTokens(o) : o).then((o) => a.walkTokens ? Promise.all(this.walkTokens(o, a.walkTokens)).then(() => o) : o).then((o) => e(o, a)).then((o) => a.hooks ? a.hooks.postprocess(o) : o).catch(i);
    try {
      a.hooks && (t = a.hooks.preprocess(t));
      let o = n(t, a);
      a.hooks && (o = a.hooks.processAllTokens(o)), a.walkTokens && this.walkTokens(o, a.walkTokens);
      let u = e(o, a);
      return a.hooks && (u = a.hooks.postprocess(u)), u;
    } catch (o) {
      return i(o);
    }
  };
};
const kt = new class {
  constructor(...n) {
    var e, t, r;
    e = this, (t = Jt).has(e) ? Ko("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), st(this, "Hooks", Xt), st(this, "Lexer", lt), st(this, "Parser", ut), st(this, "Renderer", $n), st(this, "TextRenderer", Hs), st(this, "Tokenizer", Un), st(this, "defaults", { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null }), st(this, "options", this.setOptions), st(this, "parse", bs(this, Jt, fs).call(this, lt.lex, ut.parse)), st(this, "parseInline", bs(this, Jt, fs).call(this, lt.lexInline, ut.parseInline)), this.use(...n);
  }
  lexer(n, e) {
    return lt.lex(n, e ?? this.defaults);
  }
  parser(n, e) {
    return ut.parse(n, e ?? this.defaults);
  }
  setOptions(n) {
    return this.defaults = { ...this.defaults, ...n }, this;
  }
  use(...n) {
    const e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return n.forEach((t) => {
      const r = { ...t };
      if (r.async = this.defaults.async || r.async || !1, t.extensions && (t.extensions.forEach((s) => {
        if (!s.name) throw new Error("extension name required");
        if ("renderer" in s) {
          const a = e.renderers[s.name];
          e.renderers[s.name] = a ? function(...i) {
            let o = s.renderer.apply(this, i);
            return o === !1 && (o = a.apply(this, i)), o;
          } : s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          const a = e[s.level];
          a ? a.unshift(s.tokenizer) : e[s.level] = [s.tokenizer], s.start && (s.level === "block" ? e.startBlock ? e.startBlock.push(s.start) : e.startBlock = [s.start] : s.level === "inline" && (e.startInline ? e.startInline.push(s.start) : e.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (e.childTokens[s.name] = s.childTokens);
      }), r.extensions = e), t.renderer) {
        const s = this.defaults.renderer || new $n(this.defaults);
        for (const a in t.renderer) {
          if (!(a in s)) throw new Error(`renderer '${a}' does not exist`);
          if (a === "options") continue;
          const i = a, o = t.renderer[i], u = s[i];
          s[i] = (...l) => {
            let c = o.apply(s, l);
            return c === !1 && (c = u.apply(s, l)), c || "";
          };
        }
        r.renderer = s;
      }
      if (t.tokenizer) {
        const s = this.defaults.tokenizer || new Un(this.defaults);
        for (const a in t.tokenizer) {
          if (!(a in s)) throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a)) continue;
          const i = a, o = t.tokenizer[i], u = s[i];
          s[i] = (...l) => {
            let c = o.apply(s, l);
            return c === !1 && (c = u.apply(s, l)), c;
          };
        }
        r.tokenizer = s;
      }
      if (t.hooks) {
        const s = this.defaults.hooks || new Xt();
        for (const a in t.hooks) {
          if (!(a in s)) throw new Error(`hook '${a}' does not exist`);
          if (a === "options") continue;
          const i = a, o = t.hooks[i], u = s[i];
          Xt.passThroughHooks.has(a) ? s[i] = (l) => {
            if (this.defaults.async) return Promise.resolve(o.call(s, l)).then((d) => u.call(s, d));
            const c = o.call(s, l);
            return u.call(s, c);
          } : s[i] = (...l) => {
            let c = o.apply(s, l);
            return c === !1 && (c = u.apply(s, l)), c;
          };
        }
        r.hooks = s;
      }
      if (t.walkTokens) {
        const s = this.defaults.walkTokens, a = t.walkTokens;
        r.walkTokens = function(i) {
          let o = [];
          return o.push(a.call(this, i)), s && (o = o.concat(s.call(this, i))), o;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  walkTokens(n, e) {
    var r, s;
    let t = [];
    for (const a of n) switch (t = t.concat(e.call(this, a)), a.type) {
      case "table": {
        const i = a;
        for (const o of i.header) t = t.concat(this.walkTokens(o.tokens, e));
        for (const o of i.rows) for (const u of o) t = t.concat(this.walkTokens(u.tokens, e));
        break;
      }
      case "list": {
        const i = a;
        t = t.concat(this.walkTokens(i.items, e));
        break;
      }
      default: {
        const i = a;
        (s = (r = this.defaults.extensions) == null ? void 0 : r.childTokens) != null && s[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((o) => {
          const u = i[o].flat(1 / 0);
          t = t.concat(this.walkTokens(u, e));
        }) : i.tokens && (t = t.concat(this.walkTokens(i.tokens, e)));
      }
    }
    return t;
  }
}();
function Le(n, e) {
  return kt.parse(n, e);
}
Le.options = Le.setOptions = function(n) {
  return kt.setOptions(n), Le.defaults = kt.defaults, Ia(Le.defaults), Le;
}, Le.getDefaults = Jl, Le.defaults = Tt, Le.use = function(...n) {
  return kt.use(...n), Le.defaults = kt.defaults, Ia(Le.defaults), Le;
}, Le.walkTokens = function(n, e) {
  return kt.walkTokens(n, e);
}, Le.parseInline = kt.parseInline, Le.Parser = ut, Le.parser = ut.parse, Le.Renderer = $n, Le.TextRenderer = Hs, Le.Lexer = lt, Le.lexer = lt.lex, Le.Tokenizer = Un, Le.Hooks = Xt, Le.parse = Le;
const Go = (n, e) => {
  const { showCodeBlockCopyButton: t, markdownLinkTarget: r, syntaxHighlighter: s, htmlSanitizer: a } = e || {}, i = Le(n, { async: !1, breaks: !0 });
  if (typeof i != "string") throw new Error("Markdown parsing failed");
  const o = document.createElement("div");
  return o.innerHTML = a ? a(i) : i, o.querySelectorAll("pre").forEach((u) => {
    const l = document.createElement("div");
    l.className = "code-block";
    const c = u.querySelector("code");
    if (!c) {
      const h = u.innerHTML;
      return l.innerHTML = a ? a(h) : h, void u.replaceWith(l);
    }
    let d;
    for (let h = 0; h < c.classList.length; h++) {
      const g = c.classList[h];
      if (g.startsWith("language-")) {
        d = g.slice(9);
        break;
      }
    }
    const p = document.createElement("pre"), m = "<div>" + c.innerHTML + "</div>";
    if (p.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(m) : m, d && (p.setAttribute("data-language", d), s)) {
      const h = "<div>" + s.createHighlighter()(c.textContent || "", d) + "</div>";
      p.innerHTML = a ? a(h) : h, p.className = "highlighter-dark";
    }
    ((h) => {
      h.replaceChildren();
    })(l), l.appendChild(p), u.replaceWith(l);
  }), t !== !1 && o.querySelectorAll(".code-block").forEach((u) => {
    var p;
    if (!u.querySelector("pre") || (p = u.previousElementSibling) != null && p.classList.contains("nlux-comp-copyButton")) return;
    const l = "Copy code block to clipboard", c = document.createElement("button");
    c.classList.add("nlux-comp-copyButton"), c.setAttribute("aria-label", l), c.setAttribute("title", l);
    const d = document.createElement("span");
    d.classList.add("icon-copy"), c.appendChild(d), u.appendChild(c);
  }), r !== "self" && o.querySelectorAll("a").forEach((u) => {
    u.setAttribute("target", "_blank");
  }), o.innerHTML;
}, Wo = "nlux-comp-message", Fa = { received: "nlux-comp-chatItem--received", sent: "nlux-comp-chatItem--sent" }, Iu = "nlux-comp-chatItem--bubblesLayout", Ru = "nlux-comp-chatItem--listLayout", Ou = (n, e) => {
  let t = !1;
  const { onComplete: r } = e || {}, s = [], a = (e != null && e.skipStreamingAnimation ? "timeout" : "animationFrame") == "timeout" ? (d) => setTimeout(d, 0) : (d) => requestAnimationFrame(d), i = document.createElement("div");
  i.classList.add("md-in-progress"), n.append(i);
  const o = () => {
    for (; i.firstChild; ) {
      const d = i.firstChild;
      d instanceof HTMLElement && Bo(d), i.before(d);
    }
  }, u = !(e != null && e.skipStreamingAnimation) && (e != null && e.streamingAnimationSpeed) && e.streamingAnimationSpeed >= 0 ? e.streamingAnimationSpeed : e != null && e.skipStreamingAnimation ? 0 : 8, l = { timeSinceLastProcessing: (/* @__PURE__ */ new Date()).getTime(), currentMarkdown: "", previousHtml: void 0 };
  let c = setInterval(() => {
    const d = (/* @__PURE__ */ new Date()).getTime(), p = (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) !== "never";
    if (s.length === 0 && p) {
      const h = typeof (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) == "number" ? e.waitTimeBeforeStreamCompletion : 2e3;
      return void ((t || d - l.timeSinceLastProcessing > h) && (t = !0, c && (clearInterval(c), c = void 0), o(), i.remove(), r == null ? void 0 : r()));
    }
    l.timeSinceLastProcessing = d;
    const m = s.shift();
    m !== void 0 && typeof m == "string" && a(() => {
      const h = l.currentMarkdown + m, g = Go(h, e).trim();
      if (typeof g != "string") return l.currentMarkdown = l.currentMarkdown.slice(0, -m.length), void Ke("Markdown parsing failed");
      if (l.previousHtml && g.length > l.previousHtml.length && g.startsWith(l.previousHtml)) {
        o();
        const f = g.slice(l.previousHtml.length).trim();
        i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(f) : f, l.currentMarkdown = m, l.previousHtml = void 0;
      } else i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(g) : g, l.currentMarkdown = h, l.previousHtml = g;
    });
  }, u);
  return { next: (d) => {
    if (t) Ke("Stream is already complete. No more chunks can be added");
    else for (const p of d) s.push(p);
  }, complete: () => {
    s.push(`
`), t = !0;
  }, cancel: () => {
    c && (clearInterval(c), c = void 0), t = !0, i.remove();
  }, error: () => {
    t = !0;
  } };
}, Nu = function(n, e) {
  const { uid: t, status: r, responseRenderer: s, markdownOptions: a, initialMarkdownMessage: i, markdownContainersController: o } = n, [u, l] = Te([]), c = Ee(null), d = Ee(null), p = Ee(null), m = Ee(null), [h, g] = Te();
  he(() => {
    c.current !== d.current && (d.current = c.current, g(c.current || void 0));
  }), he(() => {
    if (h) {
      const E = o.getStreamingDomElement(t);
      h.append(E);
    }
  }, [h]), he(() => {
    m.current = (E) => {
      l((b) => [...b, E]);
    };
  }, [l]), he(() => {
    const E = o.getStreamingDomElement(t);
    return p.current = Ou(E, { syntaxHighlighter: a == null ? void 0 : a.syntaxHighlighter, htmlSanitizer: a == null ? void 0 : a.htmlSanitizer, markdownLinkTarget: a == null ? void 0 : a.markdownLinkTarget, showCodeBlockCopyButton: a == null ? void 0 : a.showCodeBlockCopyButton, skipStreamingAnimation: a == null ? void 0 : a.skipStreamingAnimation, streamingAnimationSpeed: a == null ? void 0 : a.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: a == null ? void 0 : a.waitTimeBeforeStreamCompletion, onComplete: a == null ? void 0 : a.onStreamComplete }), i && p.current.next(i), () => {
      o.deleteStreamingDomElement(t);
    };
  }, []), he(() => () => {
    d.current = null, p.current = null, m.current = null, g(void 0);
  }, []), on(e, () => ({ streamChunk: (E) => {
    var b, y;
    m.current && ((b = m.current) == null || b.call(m, E)), typeof E == "string" && ((y = p.current) == null || y.next(E));
  }, completeStream: () => {
    var E;
    (E = p.current) == null || E.complete();
  }, cancelStream: () => {
    var E;
    (E = p.current) == null || E.cancel();
  } }), []);
  const f = s || void 0;
  return x.jsxs("div", { className: `${Wo} ${hs[r]} ${ms.received}`, children: [f && x.jsx(f, { uid: t, status: r, containerRef: c, content: u, contentType: "text", serverResponse: [], dataTransferMode: "stream" }), !f && x.jsx("div", { className: "nlux-markdownStream-root", ref: c })] });
}, Mu = (n) => {
  const { markdownOptions: e } = n, t = Ee(null), r = ue(() => n.content ? Go(n.content, { syntaxHighlighter: e == null ? void 0 : e.syntaxHighlighter, htmlSanitizer: e == null ? void 0 : e.htmlSanitizer, markdownLinkTarget: e == null ? void 0 : e.markdownLinkTarget, showCodeBlockCopyButton: e == null ? void 0 : e.showCodeBlockCopyButton }) : "", [n.content, e == null ? void 0 : e.markdownLinkTarget, e == null ? void 0 : e.syntaxHighlighter, e == null ? void 0 : e.htmlSanitizer, e == null ? void 0 : e.showCodeBlockCopyButton]);
  he(() => {
    t.current && (e == null ? void 0 : e.showCodeBlockCopyButton) !== !1 && Bo(t.current);
  }, [r, t.current, e == null ? void 0 : e.showCodeBlockCopyButton]);
  const s = ue(() => e != null && e.htmlSanitizer ? e.htmlSanitizer(r) : r, [r, e == null ? void 0 : e.htmlSanitizer]), a = Ce((l) => {
    if (!n.canResubmit) return;
    const c = l.currentTarget.textContent;
    return c ? Po(l, n.submitShortcutKey) ? (l.preventDefault(), void (n.onResubmit && n.onResubmit(c))) : void (l.key === "Escape" && (l.preventDefault(), l.currentTarget.textContent = n.content, l.currentTarget.blur())) : void 0;
  }, [n.canResubmit, n.onResubmit, n.content]), i = Ce((l) => {
    n.canResubmit && (l.preventDefault(), l.currentTarget.textContent = n.content, l.currentTarget.blur());
  }, [n.canResubmit, n.content]), o = Ce((l) => {
    if (!n.canResubmit) return;
    l.preventDefault();
    const c = document.createRange();
    c.selectNodeContents(l.currentTarget);
    const d = window.getSelection();
    d == null || d.removeAllRanges(), d == null || d.addRange(c);
  }, [n.canResubmit]), u = n.canResubmit ? "editable-markdown-container" : "";
  return x.jsx(Yo, { children: x.jsx("div", { className: "nlux-markdownStream-root" + (u ? ` ${u}` : ""), children: x.jsx("div", { className: "nlux-markdown-container", ref: t, dangerouslySetInnerHTML: { __html: s }, contentEditable: n.canResubmit, onKeyDown: a, onBlur: i, onFocus: o }) }) });
};
class Yo extends Fc {
  constructor() {
    super(...arguments), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(e) {
    Ke("Markdown rendering error occurred. This could be due to a malformed markdown content, or it could be because the page requires an HTML sanitizer. Please check the error message for more details and consider configuring NLUX with a compatible sanitizer."), this.props.onMarkdownRenderingError && this.props.onMarkdownRenderingError(e);
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}
const ys = (n) => x.jsx(Yo, { children: x.jsx(Mu, { ...n }) }), Zo = (n) => {
  const e = typeof n.avatar == "string", t = !e && Lt(n.avatar);
  return x.jsxs("div", { className: "nlux-comp-avatar", children: [t && n.avatar, !t && e && x.jsx("div", { className: "nlux-comp-avatarContainer", children: n.avatar && x.jsx("div", { className: "nlux-comp-avatarPicture", style: { backgroundImage: `url("${encodeURI(n.avatar)}")` } }) })] });
}, Du = function(n, e) {
  var E, b, y, S, w, I, z, R;
  const t = Ee(null);
  on(e, () => ({ streamChunk: (T) => setTimeout(() => {
    var A;
    return (A = t == null ? void 0 : t.current) == null ? void 0 : A.streamChunk(T);
  }), completeStream: () => setTimeout(() => {
    var T;
    return (T = t == null ? void 0 : t.current) == null ? void 0 : T.completeStream();
  }), cancelStream: () => {
    var T;
    return (T = t == null ? void 0 : t.current) == null ? void 0 : T.cancelStream();
  } }), []);
  const r = n.contentType === "server-component", s = n.direction === "received", a = n.direction === "sent", i = n.dataTransferMode === "stream", o = n.isPartOfInitialSegment, u = Ce(() => {
    var T;
    return (T = n.onMarkdownStreamRendered) == null ? void 0 : T.call(n, n.uid);
  }, [n.uid]);
  he(() => {
    var T;
    i || r || o || ((T = n.onMarkdownStreamRendered) == null || T.call(n, n.uid));
  }, []);
  const l = function(T) {
    const { uid: A, status: $, dataTransferMode: D, contentType: H, fetchedContent: P, streamedContent: W, streamedServerResponse: oe, fetchedServerResponse: C, direction: L, messageOptions: N } = T;
    if ((N == null ? void 0 : N.responseRenderer) !== void 0) {
      if (D === "stream") {
        const j = { uid: A, status: $, dataTransferMode: D, contentType: H, content: W ?? [], serverResponse: oe ?? [] };
        return () => {
          const X = N.responseRenderer;
          return x.jsx(X, { ...j });
        };
      }
      const k = Lt(P), O = { uid: A, status: "complete", dataTransferMode: D, contentType: H, content: P ? k ? [] : [P] : [], serverComponent: k ? P : void 0, serverResponse: C ? [C] : [] };
      return () => {
        const j = N.responseRenderer;
        return x.jsx(j, { ...O });
      };
    }
    if (L === "sent") {
      if (typeof P == "string") {
        const k = P;
        return () => x.jsx(x.Fragment, { children: k });
      }
      return () => "";
    }
    if (typeof P == "string") {
      const k = P;
      return () => x.jsx(ys, { messageUid: A, content: k, markdownOptions: { syntaxHighlighter: N == null ? void 0 : N.syntaxHighlighter, htmlSanitizer: N == null ? void 0 : N.htmlSanitizer, markdownLinkTarget: N == null ? void 0 : N.markdownLinkTarget, showCodeBlockCopyButton: N == null ? void 0 : N.showCodeBlockCopyButton, skipStreamingAnimation: N == null ? void 0 : N.skipStreamingAnimation } });
    }
    return Lt(P) ? () => x.jsx(x.Fragment, { children: P }) : () => "";
  }(n), c = function(T) {
    var A;
    return Ce(() => {
      var D, H, P;
      if (((D = T.messageOptions) == null ? void 0 : D.promptRenderer) === void 0) return x.jsx(ys, { messageUid: T.uid, content: T.fetchedContent, markdownOptions: { htmlSanitizer: (H = T.messageOptions) == null ? void 0 : H.htmlSanitizer }, canResubmit: (P = T.messageOptions) == null ? void 0 : P.editableUserMessages, submitShortcutKey: T.submitShortcutKey, onResubmit: (W) => {
        T.onPromptResubmit && T.onPromptResubmit(W);
      } });
      const $ = T.messageOptions.promptRenderer;
      return x.jsx($, { uid: T.uid, prompt: T.fetchedContent, onResubmit: (W) => {
        T.onPromptResubmit && T.onPromptResubmit(W);
      } });
    }, [(A = T.messageOptions) == null ? void 0 : A.promptRenderer, T.fetchedContent, T.uid]);
  }(n), d = ue(() => an(Nu), []), p = function(T) {
    const A = ue(() => x.jsxs("div", { className: "nlux-comp-chatItem-participantInfo", children: [T.avatar !== void 0 && x.jsx(Zo, { name: T.name, avatar: T.avatar }), x.jsx("span", { className: "nlux-comp-chatItem-participantName", children: T.name })] }), [T.avatar, T.name]);
    return () => x.jsx(x.Fragment, { children: A });
  }(n), m = `nlux-comp-chatItem ${n.direction ? Fa[n.direction] : Fa.received} ${n.layout === "bubbles" ? Iu : Ru}`, h = n.status ? hs[n.status] : hs.rendered, g = n.direction ? ms[n.direction] : ms.received, f = `${Wo} ${h} ${g}`;
  return x.jsxs("div", { className: m, children: [x.jsx(p, {}), s && i && !r && x.jsx(d, { uid: n.uid, status: n.status, ref: t, direction: n.direction, responseRenderer: (E = n.messageOptions) == null ? void 0 : E.responseRenderer, markdownContainersController: n.markdownContainersController, markdownOptions: { syntaxHighlighter: (b = n.messageOptions) == null ? void 0 : b.syntaxHighlighter, htmlSanitizer: (y = n.messageOptions) == null ? void 0 : y.htmlSanitizer, markdownLinkTarget: (S = n.messageOptions) == null ? void 0 : S.markdownLinkTarget, showCodeBlockCopyButton: (w = n.messageOptions) == null ? void 0 : w.showCodeBlockCopyButton, skipStreamingAnimation: (I = n.messageOptions) == null ? void 0 : I.skipStreamingAnimation, streamingAnimationSpeed: (z = n.messageOptions) == null ? void 0 : z.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: (R = n.messageOptions) == null ? void 0 : R.waitTimeBeforeStreamCompletion, onStreamComplete: u } }, "do-not-change"), s && i && r && x.jsx("div", { className: f, children: n.fetchedContent }), s && !i && x.jsx("div", { className: f, children: x.jsx(l, {}) }), a && x.jsx("div", { className: f, children: x.jsx(c, {}) })] });
}, _n = (n, e) => {
  var t, r;
  return n === "assistant" ? (t = e == null ? void 0 : e.assistant) == null ? void 0 : t.avatar : n === "user" ? (r = e == null ? void 0 : e.user) == null ? void 0 : r.avatar : void 0;
}, Ua = (n) => typeof n == "string" || typeof n == "number" || typeof n == "boolean" || n == null, Lu = function(n, e) {
  const { chatSegment: t, containerRef: r } = n, [s, a] = Te(!1), i = ue(() => /* @__PURE__ */ new Map(), []), o = ue(() => /* @__PURE__ */ new Map(), []), u = Ee(/* @__PURE__ */ new Map()), l = Ee(/* @__PURE__ */ new Map());
  ((m, h, g, f) => {
    he(() => {
      if (m.length === 0) return f.clear(), h.current.clear(), void g.current.clear();
      const E = new Set(f.keys()), b = new Set(m.map((y) => y.uid));
      E.forEach((y) => {
        b.has(y) || f.delete(y);
      }), new Set(h.current.keys()).forEach((y) => {
        b.has(y) || (h.current.delete(y), g.current.delete(y));
      });
    }, [m]);
  })(t.items, u, l, i), on(e, () => ({ streamChunk: (m, h) => {
    const g = i.get(m);
    if (g != null && g.current) {
      const f = g.current.streamChunk;
      (o.get(m) ?? []).forEach((E) => {
        f(E);
      }), o.delete(m), f(h);
    } else {
      const f = o.get(m) ?? [];
      o.set(m, [...f, h]);
    }
  }, completeStream: (m) => {
    const h = i.get(m);
    h != null && h.current ? (h.current.completeStream(), i.delete(m)) : a(!0);
  }, cancelStreams: () => {
    o.clear(), i.forEach((m) => {
      var h;
      (h = m.current) == null || h.cancelStream();
    });
  } }), []), he(() => {
    o.size > 0 && o.forEach((m, h) => {
      const g = i.get(h);
      g != null && g.current && (m.forEach((f) => {
        var E;
        (E = g == null ? void 0 : g.current) == null || E.streamChunk(f);
      }), o.delete(h), s && (g.current.completeStream(), a(!1)));
    });
  });
  const c = ue(() => t.status !== "active" ? null : x.jsx("div", { className: "nlux-chatSegment-loader-container", children: n.Loader }), [t.status, n.Loader]), d = ue(() => an(Du), []), p = Ce((m) => {
    var h;
    (h = n.onMarkdownStreamRendered) == null || h.call(n, t.uid, m);
  }, []);
  return t.items.length === 0 ? null : x.jsxs("div", { ref: r, className: Vl(t.status), children: [t.items.map((m) => Pu(n, d, t, m, i, l, u, p)), c] });
}, Pu = function(n, e, t, r, s, a, i, o) {
  var p;
  const u = n.isInitialSegment;
  let l = s.get(r.uid);
  l || (l = es(), s.set(r.uid, l));
  let c = r.content, d = "text";
  if (typeof c == "function") {
    const m = a.current.get(r.uid), h = i.current.get(r.uid);
    if (m && h) c = h, d = "server-component";
    else {
      i.current.delete(r.uid), a.current.delete(r.uid);
      try {
        const g = c;
        if (c = x.jsx(g, {}), !c || !Lt(c)) throw new Error("Invalid React element returned from the AI chat content function.");
        d = "server-component", i.current.set(r.uid, c), a.current.set(r.uid, g);
      } catch {
        return Ke(`The type of the AI chat content is an invalid function.
If you're looking to render a React Server Components, please refer to docs.nlkit.com/nlux for more information.
`), null;
      }
    }
  }
  if (r.participantRole === "user") return r.status !== "complete" ? (tn(`User chat item should be always be in complete state — Current status: ${r.status} — Segment UID: ${t.uid}`), null) : Ua(c) ? x.jsx(e, { ref: l, uid: r.uid, status: "complete", direction: "sent", contentType: d, dataTransferMode: "batch", fetchedContent: r.content, markdownContainersController: n.markdownContainersController, layout: n.layout, messageOptions: n.messageOptions, isPartOfInitialSegment: u, name: xn(r.participantRole, n.personaOptions), avatar: _n(r.participantRole, n.personaOptions), submitShortcutKey: n.submitShortcutKey, onPromptResubmit: (m) => n.onPromptResubmit(n.chatSegment.uid, r.uid, m) }, r.uid) : (tn(`User chat item should have primitive content (string, number, boolean, null) — Current content: ${JSON.stringify(c)} — Segment UID: ${t.uid}`), null);
  if (r.status === "complete") {
    if (r.dataTransferMode === "stream") {
      const m = r;
      return x.jsx(e, { ref: l, uid: r.uid, status: r.status, direction: "received", contentType: d, dataTransferMode: r.dataTransferMode, markdownContainersController: n.markdownContainersController, onMarkdownStreamRendered: o, streamedContent: c, streamedServerResponse: m.serverResponse, layout: n.layout, messageOptions: n.messageOptions, isPartOfInitialSegment: u, name: xn(r.participantRole, n.personaOptions), avatar: _n(r.participantRole, n.personaOptions) }, r.uid);
    }
    return d !== "text" || Ua(c) || (p = n.messageOptions) != null && p.responseRenderer ? x.jsx(e, { ref: l, uid: r.uid, status: "complete", direction: "received", contentType: d, dataTransferMode: r.dataTransferMode, markdownContainersController: n.markdownContainersController, onMarkdownStreamRendered: o, fetchedContent: c, fetchedServerResponse: r.serverResponse, layout: n.layout, messageOptions: n.messageOptions, isPartOfInitialSegment: u, name: xn(r.participantRole, n.personaOptions), avatar: _n(r.participantRole, n.personaOptions) }, r.uid) : (Ke(`When the type of the AI chat content is not primitive (object or array), a custom renderer must be provided — Current content: ${JSON.stringify(c)} — Segment UID: ${t.uid}`), null);
  }
  if (r.status === "streaming") {
    const m = d === "server-component" && Lt(c) ? c : void 0;
    return x.jsx(e, { ref: l, uid: r.uid, status: "streaming", direction: "received", contentType: d, dataTransferMode: r.dataTransferMode, markdownContainersController: n.markdownContainersController, onMarkdownStreamRendered: o, fetchedContent: m, layout: n.layout, messageOptions: n.messageOptions, isPartOfInitialSegment: u, name: xn(r.participantRole, n.personaOptions), avatar: _n(r.participantRole, n.personaOptions) }, r.uid);
  }
}, Bu = function(n, e) {
  const { segments: t, personaOptions: r, conversationOptions: s, onLastActiveSegmentChange: a } = n, i = es();
  (function(c, d, p) {
    const m = ue(() => {
      const g = c.length > 0 ? c[c.length - 1] : void 0;
      return (g == null ? void 0 : g.status) === "active" ? g.uid : void 0;
    }, [c]), h = Ee(void 0);
    he(() => {
      if (!p) return;
      const g = h.current;
      if (m === (g == null ? void 0 : g.uid) && d.current === (g == null ? void 0 : g.div)) return;
      const f = m && d.current ? { uid: m, div: d.current } : void 0;
      (f || h.current) && (p(f), h.current = f);
    });
  })(t, i, a);
  const o = function(c) {
    const d = ue(() => /* @__PURE__ */ new Map(), []);
    return he(() => {
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
  }(t), u = ((c) => ue(() => {
    return d = c == null ? void 0 : c.layout, d ?? "bubbles";
    var d;
  }, [c == null ? void 0 : c.layout]))(s);
  on(e, () => ({ streamChunk: (c, d, p) => {
    const m = o.get(c);
    m == null || m.streamChunk(d, p);
  }, completeStream: (c, d) => {
    const p = o.get(c);
    p == null || p.completeStream(d);
  }, cancelSegmentStreams: (c) => {
    const d = o.get(c);
    d == null || d.cancelStreams();
  } }), []);
  const l = ue(() => an(Lu), []);
  return x.jsx("div", { className: "nlux-chatSegments-container", children: t.map((c, d) => {
    const p = d === t.length - 1, m = c.uid === "initial";
    let h = o.getRef(c.uid);
    return h || (h = es(), o.set(c.uid, h)), x.jsx(l, { ref: h, containerRef: p ? i : void 0, markdownContainersController: n.markdownContainersController, chatSegment: c, isInitialSegment: m, layout: u, personaOptions: r, messageOptions: n.messageOptions, Loader: n.Loader, submitShortcutKey: n.submitShortcutKey, onPromptResubmit: n.onPromptResubmit, onMarkdownStreamRendered: n.onMarkdownStreamRendered }, c.uid);
  }) });
}, zu = (n) => {
  const { onConversationStarterSelected: e } = n;
  return x.jsx("div", { className: "nlux-comp-conversationStarters", children: n.items.map((t, r) => x.jsxs("button", { className: "nlux-comp-conversationStarter", onClick: () => e(t), children: [x.jsx(Fu, { icon: t.icon }), x.jsx("span", { className: "nlux-comp-conversationStarter-prompt", children: t.label ?? t.prompt })] }, r)) });
}, Fu = ({ icon: n }) => n ? typeof n == "string" ? x.jsx("img", { src: n, width: 16 }) : x.jsx("div", { className: "nlux-comp-conversationStarter-icon-container", children: n }) : null, Qo = "nlux-comp-welcomeMessage", Xo = (n) => x.jsxs("div", { className: Qo, children: [x.jsx(Zo, { avatar: n.avatar, name: n.name }), x.jsx("div", { className: "nlux-comp-welcomeMessage-personaName", children: n.name }), n.message && x.jsx("div", { className: "nlux-comp-welcomeMessage-text", children: n.message })] }), $a = ({ children: n }) => x.jsx("div", { className: Qo, children: n }), Uu = () => {
  const n = ue(() => "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAAewgAAHsIAXgkHaEAABj0SURBVHic7Z13vBxV2ce/Z29ugEQMEAICQUBAkBqqlCiRKqC0gApKE14poh8VUCmihv4SCB2CVAtFQBR9UZpCaMIL0ouAGIIEQgsJya27e/zjmb117+yUc+bM7J7v53Nys3dnzjx3dn9z2nOeR2mt8Xg89Sm5NsDjyTNeIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCKNsVdwzY4Ktqgej+v6RHwpQ8lqr2jFD3q+9UAPrGHDcwN8F6JD3hr1m0LHjgYnAWsAqwGrA8sDKwNLAOGAMsCTQPuDkMtANdAALgUXAPOBtYC4wB5gNvI5m7gBLhxjOiK8VwMAdpQOPrf1eD31PD/5dcJwa8lr+P+D4Ie8pCxtZ249/z3id1gTSoowHNgEmBWUDNGsBYy1eswy8BrwIPAs8BTyBiMeTEi+QdCwFfA6YAmwLbAaMHf7Ytsoo4NNB2XPA758GHgHuB2bBwFbGExUvkPisAOwK7ALsAKyQrR4is3FQjgR6EaH8CfgL8E+HdhUKL5BoLAHsBUwFdkczxq05sWkHdgwKiFhuBm7DtyyheIGEsyFwMHCA0nol18YYZLugnAfcAlwD3OPUopziBVKf3dEcCXzJtSGWGQ0cEJTHgV8A1wI9Dm3KFX4dZDD7A48iffVmF8dQNgdmAv8CTkCmoFseLxDhq8CTaH09Wm+J1rRwmYjWZyBC+TEy/mpZWl0gOwEPorkRzaT+BS1f0ExAcybwKvCtNDe5yLSqQNYAbkZzF5ptc/BlzHOZiGYm0vXcKukNLyqtKJD9gRdB7+v6m1ewsiXoR4CTE931gtJKAvkEcAua69Es4f77VthyKuLOsk3cD6CItIpADgReRjM1B1+wZigbo3kIOCPm51A4mn0dZDRwFVp/w7UhTcoJyETHQYizZNPRzALZXMGNwJquDWlyNgeeAw5DFhmbimYVyBHA5WjXZrQMJcRdZUvgaMe2GKUZBXIZWh/p2ogW5SjEf20v4H23ppiheQSiWBL4E5odXJvS4kxGNm7tiuxJKTTNIpBV0PwNWNu1IR4AVkKmgr8I3OnWlHTYE8iwfdqGGD6uWA/0LGS7qydf/AX4BvAb14YkxZ5AqtZqFkSAWwctR0s71OWcXwPLAhe7NiQJ1gSiKnamkHTf0qaaDDxg5SIe01yErEmd59qQuBR1DLI1WntxFItzkX7F+Y7tiEURXU0mAQ+5NsKTiBnIGlVhKFYLolgDzcPYmwLw2Ody4EPgJsd2RMKeQLThMYji42j+riQWlafY3Ai8hWaWa0MaYVEgButSgOYBJCaVpzn4G7AWmn+7NiSMYnSxNLcBG7k2w2OUEjKWXJ0cR1HJdxdLRho/Q3x7PM3HSsDdwHZ5dSzNexdrd+CnRmry5JXPA+eiOda1IfXIcxdrRTS3uzbCkwk/QMKh5u7zznMX6y7ys07TDTwJvAC8gkxTdiIxb5dGIqtvCHyWfD908sxtwIqA+SQfKcjrh3kG+RiU3wr8DvgrkrimEasAOyN74L9g0a5mpATcgWy6yg1Km16vCOg9bdlkJyq2AB4zakx8LgQuQPFaorPllu4AnIL0sT3ROREJWBeb9pPnm7bFpkCWSXimmovMbrjgLuBYFM+JKQlr0YP+fwzirOeJjP400pWNRfvJHxq3xJ43bzLdzQBnaQaO04pzLXixXKy0noUExF7VdOVNyu+QMZ1z7A2C48daWg/N9xzEeOpGxg3n2roVwDPARmieyUFMqyKUDYDvxD7PAnmZJQL4rYNrfoCkKbvb6lWkUfoQ2AIRi6cRmguBZVybYXFHYQxJK74JrG/Nlvp8BGyGUrMzvGYPmm1Av4qEQvWEcxWaqS4NyMM07yh05tsxe4FtUBmkShZHSyT3BgCLgc+h+Sf5asHzyD7AlmjtbFYzDwuF15O1C7tSnwee6/vijrK4vaQKDN9+/CqyK/JRexduGn4PrOzq4m4H6dL/38+aDfX5X+Dvfa+0li9wnC5hFJSITpUrUvfwTE6PAd81e9GmZCXgOFcXt7YOUj7l41EOewAJNJYVz1JvhV4H/7S3oUeV+lu/NA2LVqieClSrfWIZgUfJ2epxDukAxgHlsINGTVto/MIWW5C6T82BZXM0kzOePtwtdHqwtwrlavqlkJJClatSH6qRTfvlYFo172UMmh81/E5ZwGUXa3rGySm/D/o/oTe3qlFdZekShT/1R6ZNich6ysHdbXgj5qD12TlI3pn3ciKattBbaQFrAlHhZX0F2zU4xlzRvAicH3oTNX0th+pJ2IoooKIpdVZQOrh2NULRnKA0CzO7H8UsYxR8O+wYG7hqQX6eaRMNBygNkYpSqN4qqrsCpRi3XQFKUeqsyKBfqThPNQ0cl4OuTN7LSVRhxGIBFwuFy6MyXfy5AQmkHAvVXUGPLolIosxwlRSqqwK9gbDi94l/Afwcd46aRWAFYE80f8jqgi4WquL72KRrPY6JbaECtKbUUZaWoNF4pKRQZY3qLMvJye09PgdP6byXE8I/DLO4WCj8trVrDmc6Wn2Q7FQFPRXU4l70Um2hhwHQ0SstTRs1YSbhN8DZyMYrT30+i+zgfDmLi2XdguxKdmkKysApqR5XJYVa3CuD9lEj3KpSCdVZ7h+zJBdHjT+mrqH5OSqrC2U9SD86w6b4TDSdqetpK6E6yjJ1O6qEbh9QlmiDSlXeL5VM2X1dDroxeS8Ho1HDfm+BLMP+LIuE8cmCHpShHN4KEUFXBb0UlDrL/X9bSUFZB+MUI1cD+DuapxE3HE99at+lP9m+UJZjkP2wN109lIuArtS1aEQEo0qU3u/qdx3RA94f3UZ13GgRibmcKGcjTpyekTmQDARizRerctyYob/6K9lF+hiPbIZKR5uCKqiPumWMoZT8TiHiCFoXVElEMrpNumIm0HyAPCk99elA7k9f2NK26R3GL5LVIH05shPHLzEljrKm9GGXiGNUqV8c0P+zTZwbSx92oxb3BouLqaZ6ay3UL1L/Dc3NGCRJqFUsBm0Y1DLtYes6wy/M6anO14gYequoBd39r8MIFgbVRz3Sooxtly5musb5YuCHqWpofqZiORpjVi3IbhldZxaal1M9uUvB+seCbqmxLeKwSclYRXWUUYuClqTWFUvGG0gYIs/IHASMtXmBLGaxSsCO1q4zmNNSnd2mpOVY2CNf7ji+WDVGlaBLnBX12HZx8EouknOQiCue+jyI5YmfLGaxtiCbweabpIlO0iZOiiwMxnxJxDGgLrrK4q84ph10NalI7kH+Lr+yPpw7Ucr6GCSLhcLtM1o8ujDxuUoG5OqjQBxRu1VhtJVQnRXZX5J0b4kwIwcLc3krj5DBAB2yGYN8LoNraGBmorMCb93Sop7+1yZQoEsKtbgsriqlxDNbM7HmzF1I3gCmZHUx212sNsS5zDa3AgtinzVQHBUtU7YmCcYxalEP+mPt0F5Kspi4CHFiPNCscYVkIRIMvAcN8gTB6ijEdhdrPTTLZdDkxu+GBDaqjl5xFzHVcgwlqLa0qBd6ddKW5MwcdGtcl/mI+83sure5104ja3sWaxNr9ffzGoqHY59VKqG6yqjuqt24WNDfUnX0Uh07WkQTxHOIyItoHgK2tWVizqkAW1EaIA5N315b1V016eYzCIuRFTVoJtmrP0BxOTrOF1ye4qqnIhucbLUcQwkcG1VHL3rMKLEj3kPvdCTBTCuyA6iX++5XTRwaiR5TrprvHgfYTn9gP4S95ur+PlMEFBK9pKPc/zoralPJXRX0Um2oeE+9PwNzgE/aMS63HKPh/mEPFI3cv4rF7jH2u1jrWqtf+APwfuSjg8AKqm/3X5bqCCgp8e1qU0kG7afSWj5aN6G4pO6nVNVSLM/D2pzFmghMtFY/gFKXRD5WB0+anir0OBIH9LVYqrOMVu3yAVc1kZoyxVVoPR2JMtjsvIlSX6vbOdBBy5HBR2hTf2tYrBs089D67khBx6rBzawEgeEcaaOPUuBG31Vm0JRaoyJ7E9I5YxYBzUJgu4afZwbYnOZdzeq0H1wZ41gg6NpUcC8QkDvfq2UGRsWa+p2BpisH0662ygfApsC/6t63kUMwrTDSG2mwGZt3ouVQlDMjH6tA9VZkHSIkQEnmlIDuqtgWhBqKUMpoPS0HoUBtlPlonUQce6D1LTY+IpuDdJsOdg8iLgeNCWat6DYQlNo0NXtqrUh09/izgROBj1myzAWdwBYoXq/7blWH3ZvrgCVsGGWzizXeYvcqRkYqJb5Q8t/8URu091Ti3IMqmhNz0B0y+ZluS1jLUR3x3IPRLIO2EyfL5iyWrRx8H4G6OdKRqraQpNM+ClZFgpWtDiyP7HlfEom99T4wF3gJeE7si4kCKuIuodtV1FX2i9CcBKwY+3p5Q7ELWj0JBGIZ0lSMHDehDbg0+P9oG6bZzFG4jKV6f43Wjdega12r3sTi2BHYE/FG3pBaLeFdoPlI9+92xIFyfuSrlZBZthLo6AHo/gfLW04z4BDCdk6GBxU5A9mbzoCfRrEW1YTD214C1jFer2JD5EndmLIeeUpwYCyrvp9qLBK175vAZ1JaugC4EjgXrd8C+r/0mvofvAZKSJariCjNw8DW6Ux1g4afopgmr4Z/SCr8u7kcgxeJ53Jlxfi412YXy4ai/4FWjcVRaz3izZcfjdanYK7LMg44FjgamAac1fCMwIlRlXWchcz90Xp2Qhtdcp1Salq/BgaLQdXrag1m6HqQlS6WzUH6khYGchdGOjCeONZDciVegmZFCwPQpYAzkVyEjVulmrgrVSJOjb4O/Mz5IDtemQUcgtaoEYr8bSOePwHNkUN+Z+Vhb3Ml3bSiO9HcEOkDiJ6x9lDgeWq5Em0hdm2JdA2/2vD42nTvyDM3Q8vPySjauQFepVGMtMafxU/q/M7Kd9nmOohpg69hQBS9kOs2RlqWc9CZpxcuATcis2LTGx6tNTH6iLshX748Mx/YhjBH/8af3xJIt3UoVibxXeQHSYbiVGN1aW4H/WVj9cXnHMTT+fCGR0YXyb9A7wnZZV+KySsodgb1LlBfCHqkNwZxJhn6Q7jIMJWE69G8Ham70Zg7AJfiqHEYkadoo3buuZ1sExRF5U0k/NPs8MMafoAfA75vwqCo2BRIxWBd6QLC9fN7JIlPXvgycJnhOi9FotvnhbeBzYAFouOQCYfGhInfyqZ0mwJpPF6IxqPAiwbq+SWy8Jc3jgS+Y7jO75KP9An/RuISzDNUX1jrYfKB3IdNgXQaquenBuo4j3yHzbkQ2MpwnV9HwgW54lFgEtKCmGB3wteoyoauMwibAllsoI5XgDtT1nEsGfdbE3IX5j1SvwFcYLjOKPwKEfxCg3U2mnE01WMZhE2BmMhmcnLK8/chynRqPlga8d8yzfeQblwWaCTt9kGG612dxtEUew1fE7ArkPdSnv8f4Lcpzt8CO184m+yORA40zUyku/OQhbpr3IF4JUSPExCdKDNzprr0g7ApkHdSnv+DFOeuBNyf8vqusNUlehqYDByBhA8yxYPIbNzuiMu/DQ6LcExLCeQ1INqej+G0Aw8DS6W4vksmIW7strgCWBNZpLwvYR2vI+GHvoBsB7CZTHNvoqXPiL8PJwI294P8J8W5ab4g9yF91iJzGeKSYuVDR2Z8rgrK2siXfAuki7QyMh6qBUjtQB52s4EngVnIDJVN77WBRJ0Cf9fGxfMokPuRjLhJuBXx9Sk6bci44YAMrvVKUK4e8Luao6nG0uA3IqsQPfnrXBsG2OxizU54XtL1iiuQWatmYX+yCN1an56guBQHwLdiHFt/P3tKbArkNeLf4FOIGq1kMNOx2293xTWuDXBMY2fOfl6zYYBNgcwnnvv1C5DIY/cMZDGwGdmMfPmOZckUZDwUFSszaLa9eeMYnSTn3HnACQnOKxKXuzbAEXH80+Yhfl/GsS2QZyIety/xu1anUwwXkrR8EvGraiXGIdO7UXmWAnrzAjwV4ZgTib/iPSU4r1U4z7UBGXMg8XYIPm3LENsCeaLB+6cjO8TisAytl2lpBeINWIvOUTGP/4cVK7AvkDcYeXbheJI5I/6V4q6Sp+EM1wZkxKbIgmUcHrNhCGSz5XZogs1XgZ1I5mV7A9kkBs0jE4jmk1R04m4ZnoPFYBVZCOTR4OdLSKuxDnBPgnpmAF8zZVRBMbX1OK+MRhZI4zDLhiE1bLqa1LgJmc1K84eciexraHU+gQxgf+XaEEscSPzuc1K3pEhk0YK8SzpxnAz82JAtzUAzp2BLMm2fpDcSmbyH/TmQZKvrzcyqNJfPWY1JwPoxz3meZK5JkcmzQL6ERCLxDOds1wZYIEmUyz8at2IIeRXIXmTwxxeYtYCdXRthkKVJ5tpvJS/hQPIokKOA21wbUQDOcW2AQY4gfmzdN2i8EJ2avAnkMvpTannC2Qg7AR5ckKR7lSagR2TyIpDtkdQAWYWnaRaaYSyyD8mSFl1n2pB6uBbIpsje63uJP4PhkeBsm7s2IiVJImc+j3jwWieLhcKhrI3sG/8KktPCk44ZSNCFIrIt0lWMy0zThoyEC4HcgOyU85hhMtISW/NotUiSLmIVuNawHSPioot1rYNrNjs2ohnaZiOkBYnL9dgLhzQMFwK5BLNBjT0yFpns2oiYJI0gmenEhAuBaNxEHG92MuuXG2ATGgejrsdjyGxnZriaxZpOdpH5WoX1kImPIpBUzJkH6HAlkIW0brQOm1zs2oAIfBEJcxqXl7Hs2l4Pl+sgJjJHeQYzAZjm2ogGXJnwPCexz1wK5F2KOfuSd36CpH/IIyci8Xbj8hJ2I8iPiOuV9JMcX79ZudG1AXWYQPLNXseYNCQOrgWygNYI/pY1n0cy3eaJPyc8707EFckJrgUCcD7iW+MxywXILr08cDXJvSf2NWlIXPIgEJBsrB7z/J9rAxBv3UMTnns8sMigLbHJi0CeonkjdbhkZdzmSl+d5IlU55CDDMV5EQhIfg8riRhbnAOQHXtZsyTwQIrz9zNlSBryJJBukmeX8oRzOdmnpnsAmJjw3KuwGE40DnkSCEhznHS2wxPOfcCnMrxW0o1cH5CjbGF5EwjIrEW3ayOakHYkDGzSp3oUPg48AmyXoo69yJGfXh4F0kG85Cme6CyPbKxa00LdmyHbYLdKUce5pBu3GCePAgHpZnk3FDtMQBLOTDFY57HA40g2rKQ8T7LoJlbJq0BA3Asy2ZjfgowF/gb8KGU9OyHpLdJOx+qgrtyRZ4EA7Ijk6/bY4SzgIeQ+R2UMkobiXuAuYGsDduwBvGWgHuO4CNoQh3eQ/QOZ7wNoIbYB7gYeRIKxPYBkjF0MLAGMR+JWbYhET9kNSQlnip/hyFM3CkprSxMGh8SNJBnKMcBFJiv0hLIAcfFYElgWez2NWzC5IHit+e9y3rtYNS6mGLvlmoVxyL6N8dj7jjxBTlbLwyiKQEASy//OtREeI8yhIHGFiyQQgKlYzknnsc6HyFpJh2M7IlE0gYCs0j7u2ghPIjqBz5LTGat6FFEgIFOLT7o2whOLbkQcL7s2JA5FFUgZudn/79oQTySqyOdVuIXfogoEoBe56fe7NsTTkMMR95bCUWSBgLgoTAF+79YMTwhzgGtcG5GUogukxt5I+jZP/rCax9w2zSIQgKOBH7o2wjMMp0EX0tJMAgHJ/LoX3sExT6zu2oA0NJtAAP4AbIBESvG4J0mKtdzQjAIBeAXJQXGFa0M8rI6EHyokzSqQGkcgQekWuzakxVnPtQFJaXaBgAROWwfpenncsIFrA5LSCgIBeBMZvB+Gz4/oAi+QgnA18GkkYrgnOz7j2oCktJpAAOYh23gPBd5wbEursC4Sl6twtKJAalwLrI1kZPLdLrssB6zl2ogktLJAQFywT0MCqZ1FwVd9c866rg1IQqsLpMZ7SIrhNZEkmPPcmtOUFHLB0AtkMO8g2Xc/BXwbCSzQClSwvwW2kGshXiD16QAuRSKUb4+MVz5yaZAl7gC+DqwBrIbs1DwBO6kHxlio0zpFiYuVB8YjEQD3BnYBRrs1JzGPALche2heCTlucySC4lTMOBxegu1stRbiYnmBJGMlYGckZOcU7KYUSMsiZNflX5C9GS8lqGNP4CtBSRqNczIS5tQeXiC5pA3Z+jsZCWezKdJdccX7wDNILpCHkODSHxiqe1Xgm4hQ4owp7iVe/N9keIEUhvWBjZF4tusgawCfRCIWmqILeB2YDfwTCYjwNPAC2Thn7oDkP9wLWecYiReALTOxyQuk0IxDumYrBz+XRRLajEeCRI9GVptLyF77XmTjVw8SbO09pCWYB8wF3kZm3VwzDhHJVMTnanlkVuwtxKXneCQKjX0KJRCPpwnw07weTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwj/Ba/47FkhCYEqAAAAAElFTkSuQmCC", []);
  return x.jsx(Xo, { avatar: n, name: "" });
}, $u = (n) => {
  const { segments: e, personaOptions: t, conversationOptions: r, userDefinedGreeting: s } = n, a = ue(() => e.some((d) => d.items.length > 0), [e]), i = ue(() => !s && !a && (t == null ? void 0 : t.assistant) === void 0 && (r == null ? void 0 : r.showWelcomeMessage) !== !1, [a, t == null ? void 0 : t.assistant, r == null ? void 0 : r.showWelcomeMessage, s]), o = ue(() => !s && !a && (t == null ? void 0 : t.assistant) !== void 0 && (r == null ? void 0 : r.showWelcomeMessage) !== !1, [s, a, t == null ? void 0 : t.assistant, r == null ? void 0 : r.showWelcomeMessage]), u = ue(() => !a && (r == null ? void 0 : r.conversationStarters) && (r == null ? void 0 : r.conversationStarters.length) > 0, [a, r == null ? void 0 : r.conversationStarters]), l = ue(() => s !== void 0 && (r == null ? void 0 : r.showWelcomeMessage) !== !1, [s]);
  he(() => {
    s && (r == null ? void 0 : r.showWelcomeMessage) === !1 && tn("Configuration conflict: The greeting UI override provided via <AiChatUI.Greeting> will not be shown because conversationOptions.showWelcomeMessage is set to false.");
  }, [r == null ? void 0 : r.showWelcomeMessage, s]);
  const c = !(i || o || l || a);
  return x.jsxs(x.Fragment, { children: [i && x.jsx(Uu, {}), o && x.jsx(Xo, { name: t.assistant.name, avatar: t.assistant.avatar, message: t.assistant.tagline }), l && x.jsx($a, { children: s }), c && x.jsx($a, { children: null }), x.jsx("div", { className: "nlux-conversationStarters-container", children: u && x.jsx(zu, { items: r.conversationStarters ?? [], onConversationStarterSelected: n.onConversationStarterSelected }) })] });
}, vs = (n) => {
  var r;
  const e = {}, t = Object.keys(n);
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    a !== "personaOptions" && a !== "messageOptions" && a !== "adapter" && a !== "events" && Object.assign(e, { [a]: n[a] });
  }
  return n.personaOptions && (e.personaOptions = {}, n.personaOptions.assistant && (e.personaOptions.assistant = { name: n.personaOptions.assistant.name, avatar: typeof n.personaOptions.assistant.avatar == "string" ? n.personaOptions.assistant.avatar : "<REACT ELEMENT />", tagline: n.personaOptions.assistant.tagline }), n.personaOptions.user && (e.personaOptions.user = { name: n.personaOptions.user.name, avatar: typeof n.personaOptions.user.avatar == "string" ? n.personaOptions.user.avatar : "<REACT ELEMENT />" })), n.messageOptions && (e.messageOptions = { ...n.messageOptions, responseRenderer: n.messageOptions.responseRenderer ? () => null : void 0, promptRenderer: n.messageOptions.promptRenderer ? () => null : void 0 }), (r = n.conversationOptions) != null && r.conversationStarters && (e.conversationOptions = { ...n.conversationOptions, conversationStarters: n.conversationOptions.conversationStarters.map((s) => ({ ...s, icon: s.icon ? "<REACT ELEMENT />" : void 0 })) }), e;
};
var Hu = Object.defineProperty, Cn = (n, e, t) => ((r, s, a) => s in r ? Hu(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[s] = a)(n, typeof e != "symbol" ? e + "" : e, t);
class ju extends Error {
  constructor(e = {}) {
    super(e.message), Cn(this, "exceptionId"), Cn(this, "message"), Cn(this, "source"), Cn(this, "type"), this.message = e.message ?? "", this.source = e.source, this.type = this.constructor.name, this.exceptionId = e.exceptionId;
  }
}
const qu = (n, e) => {
  let t, r = e, s = n, a = !0;
  const i = ((g, f) => {
    let E = !1;
    if (typeof g != "function") throw new ju({ source: "x/throttle", message: "Callback must be a function" });
    return (...b) => {
      E || (g.apply(void 0, b), E = !0, setTimeout(function() {
        E = !1;
      }, f));
    };
  })(/* @__PURE__ */ ((g) => {
    let f, E;
    return (b) => {
      const y = b.target;
      if (!(y instanceof HTMLElement)) return;
      const { scrollTop: S, clientHeight: w, scrollHeight: I } = y, z = I - 30, R = Math.ceil(S + w) >= z, T = f === void 0 || E === void 0 ? void 0 : S > f && E === I ? "down" : S < f && E === I ? "up" : void 0;
      E = I, f = S, g({ scrolledToBottom: R, scrollDirection: T });
    };
  })(({ scrolledToBottom: g, scrollDirection: f }) => {
    a ? f === "up" && (a = !1) : f === "down" && g && (a = !0);
  }), 50), o = (g) => {
    g.addEventListener("scroll", i);
  }, u = (g) => {
    g == null || g.removeEventListener("scroll", i);
  }, l = (g) => {
    (t == null ? void 0 : t.uid) === g && (c == null || c.disconnect(), d == null || d.disconnect(), t = void 0, c = void 0, d = void 0);
  };
  let c, d;
  const p = () => {
    s == null || s.scrollTo({ top: 5e4, behavior: "instant" });
  }, m = () => {
    s && r && a && p();
  }, h = () => {
    m();
  };
  return o(s), { updateConversationContainer: (g) => {
    u(s), o(g), s = g;
  }, updateProps: ({ autoScroll: g }) => {
    r = g;
  }, handleNewChatSegmentAdded: (g, f) => {
    t && (c == null || c.disconnect(), d == null || d.disconnect()), t = { uid: g, container: f }, c = new ResizeObserver(m), c.observe(f), d = new MutationObserver(h), d.observe(f, { childList: !0, subtree: !0, characterData: !0 }), r && p();
  }, handleChatSegmentRemoved: (g) => l(g), handleChatSegmentComplete: (g) => l(g), destroy: () => {
    t && (l(t.uid), t = void 0), u(s), s = void 0;
  } };
}, Ha = !0, Es = oo({}), Hn = (n) => {
  if (typeof n != "object" || n === null) return !1;
  const e = n;
  return (typeof e.streamText == "function" || typeof e.batchText == "function") && ["stream", "batch"].includes(e.dataTransferMode) && typeof e.id == "string" && typeof e.info == "object" && e.info !== null && typeof e.preProcessAiBatchedMessage == "function" && typeof e.preProcessAiStreamedChunk == "function";
};
var io;
const Ku = typeof navigator < "u" && ((io = navigator == null ? void 0 : navigator.userAgent) != null && io.includes("Safari")) ? 100 : 1, qe = (n, e = Ku) => {
  setTimeout(() => {
    n();
  }, e);
}, Gu = (n, e, t, r, s, a, i, o, u) => new Promise((l) => {
  const c = ct(), d = [], p = [];
  let m = !1, h = !1, g = !1;
  const f = Hn(t), E = { next: (b) => {
    if (h || g) return;
    let y, S;
    if (f) {
      const w = b, I = t.preProcessAiStreamedChunk(w, r);
      I != null && (y = I, S = w, d.push(y), p.push(S));
    } else y = b, d.push(y);
    y != null ? (m || m || (m = !0, qe(() => {
      s.forEach((w) => {
        w({ uid: c, status: "streaming", time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" });
      });
    })), qe(() => {
      i.forEach((w) => {
        w({ chunk: y, messageId: c, serverResponse: S });
      });
    })) : Ke("Adapter returned an undefined or null value from streamText. This chunk will be ignored.");
  }, complete: () => {
    h || g || (g = !0, qe(() => {
      const b = { uid: c, status: "complete", content: d, contentType: "text", serverResponse: void 0, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" };
      a.forEach((y) => {
        y(b);
      }), l();
    }), qe(() => {
      const b = { uid: n, status: "complete", items: [e, { uid: c, status: "complete", contentType: "text", content: d, serverResponse: p, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" }] };
      o.forEach((y) => {
        y(b);
      });
    }));
  }, error: (b) => {
    h || g || (h = !0, qe(() => {
      u.forEach((y) => {
        y("failed-to-stream-content", b);
      }), l();
    }));
  } };
  t.streamText(e.content, E, r);
}), Wu = (n, e, t) => {
  if (!n) return (() => {
    const b = /* @__PURE__ */ new Set(), y = ct(), S = { uid: y, status: "complete", items: [] };
    return qe(() => {
      b.forEach((w) => {
        w(S);
      }), b.clear();
    }), { segment: S, observable: { on: (w, I) => {
      w === "complete" && b.add(I);
    }, removeListener: (w, I) => {
      b.delete(I);
    }, destroy: () => {
      b.clear();
    }, get segmentId() {
      return y;
    } }, dataTransferMode: "batch" };
  })();
  const r = e;
  if (r.streamText === void 0 && r.batchText === void 0 && r.streamServerComponent === void 0) return ((b) => {
    const y = /* @__PURE__ */ new Set(), S = ct(), w = { uid: S, status: "error", items: [] };
    return qe(() => {
      y.forEach((I) => I(b)), y.clear();
    }), { segment: w, dataTransferMode: "stream", observable: { on: (I, z) => {
      I === "error" && y.add(z);
    }, removeListener: (I, z) => {
      y.delete(z);
    }, destroy: () => {
      y.clear();
    }, get segmentId() {
      return S;
    } } };
  })("no-data-transfer-mode-supported");
  const s = ct(), a = ((b) => ({ uid: ct(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: b, contentType: "text" }))(n);
  let i, o, u, l, c, d, p = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  qe(() => {
    p != null && p.size && (p.forEach((b) => {
      b(a);
    }), p.clear(), p = void 0);
  });
  const g = ((b) => {
    const y = [], S = b, w = b;
    (S == null ? void 0 : S.streamText) === void 0 && (w == null ? void 0 : w.streamServerComponent) === void 0 || y.push("stream"), (S == null ? void 0 : S.batchText) !== void 0 && y.push("batch");
    const I = Hn(b) ? b : void 0, z = (I == null ? void 0 : I.dataTransferMode) ?? void 0, R = y.length === 1 ? y[0] : "stream";
    return z ?? R;
  })(e);
  ((b) => "streamServerComponent" in b ? "server-component" : "text")(e) === "server-component" ? (u = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), ((b, y, S, w, I, z, R, T) => new Promise((A, $) => {
    try {
      const D = y.content, H = ct(), P = "assistant", W = "streaming", oe = /* @__PURE__ */ new Date(), C = "stream";
      let L, N;
      const k = () => {
        qe(() => {
          z.forEach((X) => {
            L && N && X({ ...L, content: N, status: "complete" });
          });
        }, 20);
        const j = { uid: b, status: "complete", items: [y, L] };
        qe(() => {
          R.forEach((X) => {
            X(j);
          }), A();
        }, 20);
      }, O = () => {
        T.forEach((j) => {
          j("failed-to-stream-server-component", new Error("Failed to load content"));
        });
      };
      N = S.streamServerComponent(D, w, { onServerComponentReceived: k, onError: O }), L = { uid: H, content: N, contentType: "server-component", participantRole: P, status: W, time: oe, dataTransferMode: C }, qe(() => {
        I.forEach((j) => {
          j(L);
        });
      }, 10);
    } catch (D) {
      Ke(D);
      const H = D instanceof Error ? D : typeof D == "string" ? new Error(D) : new Error("Unknown error");
      qe(() => {
        T.forEach((P) => P("failed-to-load-content", H));
      });
    }
  }))(s, a, e, t, o, u, m, h).finally(() => {
    qe(() => E());
  })) : g === "batch" ? (i = /* @__PURE__ */ new Set(), (async (b, y, S, w, I, z, R) => {
    try {
      const T = y.content, A = Hn(S) ? S : void 0, $ = A !== void 0, D = ct(), H = "assistant", P = "complete", W = /* @__PURE__ */ new Date(), oe = "batch";
      let C;
      if ($) {
        const k = await A.batchText(T, w), O = A.preProcessAiBatchedMessage(k, w);
        O != null && (C = { uid: D, content: O, contentType: "text", serverResponse: k, participantRole: H, status: P, time: W, dataTransferMode: oe });
      } else C = { uid: D, content: await S.batchText(T, w), contentType: "text", serverResponse: void 0, participantRole: H, status: P, time: W, dataTransferMode: oe };
      if (!C) throw new Error("Response from adapter was undefined or cannot be processed");
      const L = C;
      qe(() => {
        I.forEach((k) => {
          k(L);
        });
      });
      const N = { uid: b, status: "complete", items: [y, C] };
      qe(() => {
        z.forEach((k) => {
          k(N);
        });
      });
    } catch (T) {
      Ke(T);
      const A = T instanceof Error ? T : typeof T == "string" ? new Error(T) : new Error("Unknown error");
      qe(() => {
        R.forEach(($) => $("failed-to-load-content", A));
      });
    }
  })(s, a, e, t, i, m, h).finally(() => {
    qe(() => E());
  })) : (l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), Gu(s, a, e, t, l, c, d, m, h).finally(() => {
    qe(() => E());
  }));
  const E = () => {
    p == null || p.clear(), p = void 0, i == null || i.clear(), i = void 0, o == null || o.clear(), o = void 0, u == null || u.clear(), u = void 0, l == null || l.clear(), l = void 0, c == null || c.clear(), c = void 0, d == null || d.clear(), d = void 0, m == null || m.clear(), m = void 0, h == null || h.clear(), h = void 0;
  };
  return { segment: { status: "active", uid: s, items: [] }, dataTransferMode: g, observable: { get segmentId() {
    return s;
  }, on: (b, y) => {
    b === "userMessageReceived" && p ? p.add(y) : b === "aiMessageReceived" && i ? i.add(y) : b === "aiServerComponentStreamStarted" && o ? o.add(y) : b === "aiServerComponentStreamed" && u ? u.add(y) : b === "aiMessageStreamStarted" && l ? l.add(y) : b === "aiMessageStreamed" && c ? c.add(y) : b === "aiChunkReceived" && d ? d.add(y) : b === "complete" && m ? m.add(y) : b === "error" && h && h.add(y);
  }, removeListener: (b, y) => {
    b !== "userMessageReceived" ? b !== "aiMessageReceived" ? b !== "aiMessageStreamStarted" ? b !== "aiMessageStreamed" ? b !== "aiChunkReceived" ? b !== "complete" ? b !== "error" || (h == null || h.delete(y)) : m == null || m.delete(y) : d == null || d.delete(y) : c == null || c.delete(y) : l == null || l.delete(y) : i == null || i.delete(y) : p == null || p.delete(y);
  }, destroy: () => E() } };
}, Yu = { "data-transfer-mode-not-supported": "Requested data transfer mode is not supported", "no-data-transfer-mode-supported": "Adapter does not support any valid data transfer modes", "connection-error": "Connection error", "invalid-credentials": "Invalid credentials", "invalid-api-key": "Invalid API key", "http-server-side-error": "HTTP server side error", "http-client-side-error": "HTTP client side error", "failed-to-load-content": "Failed to load content", "failed-to-stream-content": "Failed to stream content", "failed-to-stream-server-component": "Failed to stream server component", "failed-to-render-content": "Failed to display content" }, Zu = (n) => {
  var y;
  const { aiChatProps: e, adapterToUse: t, prompt: r, composerOptions: s, showException: a, initialSegment: i, newSegments: o, cancelledSegmentIds: u, cancelledMessageIds: l, setChatSegments: c, setComposerStatus: d, setPrompt: p, conversationRef: m } = n, h = ue(() => r.length > 0, [r]), g = Ee(r);
  g.current = r;
  const f = Ee({ newSegments: o, cancelledSegmentIds: u, cancelledMessageIds: l, setChatSegments: c, setComposerStatus: d, showException: a, setPrompt: p }), E = Ee({});
  he(() => {
    f.current = { newSegments: o, cancelledSegmentIds: u, cancelledMessageIds: l, setChatSegments: c, setComposerStatus: d, showException: a, setPrompt: p };
  }, [o, u, l, c, d, a, p]);
  const b = ((S, w, I) => ue(() => {
    const z = ((T) => {
      const A = [];
      return T.forEach(($) => {
        $.items.forEach((D) => {
          if (D.status === "complete") {
            if (D.participantRole === "assistant") A.push({ role: "assistant", message: D.content });
            else if (D.participantRole === "user") return A.push({ role: "user", message: D.content });
          }
        });
      }), A;
    })(w), R = I === "max" || I === void 0 ? z : I > 0 ? z.slice(-I) : void 0;
    return { aiChatProps: vs(S), conversationHistory: R };
  }, [S, w, I]))(e, i ? [i, ...o] : o, (y = e.conversationOptions) == null ? void 0 : y.historyPayloadSize);
  return he(() => {
    E.current = e.events || {};
  }, [e.events]), Ce(() => {
    if (!t) return void Ke("No valid adapter was provided to AiChat component");
    if (!h || s != null && s.disableSubmitButton) return;
    d("submitting-prompt");
    const S = r, w = /* @__PURE__ */ new Set(), I = Hn(t) ? t : t.streamServerComponent ? { streamServerComponent: t.streamServerComponent } : { batchText: t.batchText, streamText: t.streamText }, { segment: z, observable: R } = Wu(S, I, b);
    if (z.status === "error") return Ke("Error occurred while submitting prompt"), a("Error occurred while submitting prompt"), d("typing"), void (g.current === "" && p(S));
    const T = (A) => {
      const $ = f.current.newSegments.map((D) => D.uid !== R.segmentId ? D : { ...D, items: [...D.items, { ...A }] });
      f.current.setChatSegments($);
    };
    R.on("userMessageReceived", (A) => {
      var $, D;
      ($ = f.current) != null && $.cancelledMessageIds.includes(A.uid) || (T(A), (D = E.current) != null && D.messageSent && E.current.messageSent({ uid: A.uid, message: A.content }));
    }), R.on("aiMessageStreamStarted", (A) => {
      var $, D;
      ($ = f.current) != null && $.cancelledMessageIds.includes(A.uid) || (T(A), f.current.setComposerStatus("waiting"), g.current === S && f.current.setPrompt(""), w.add(A.uid), (D = E.current) != null && D.messageStreamStarted && E.current.messageStreamStarted({ uid: A.uid }));
    }), R.on("aiServerComponentStreamStarted", (A) => {
      var $, D, H;
      ($ = f.current) != null && $.cancelledMessageIds.includes(A.uid) || (T(A), f.current.setComposerStatus("waiting"), g.current === S && f.current.setPrompt(""), w.add(A.uid), (D = E.current) != null && D.serverComponentStreamStarted && ((H = E.current) == null || H.serverComponentStreamStarted({ uid: A.uid })));
    }), R.on("aiServerComponentStreamed", (A) => {
      var $, D, H;
      ($ = f.current) != null && $.cancelledMessageIds.includes(A.uid) || (D = E.current) != null && D.serverComponentRendered && !f.current.cancelledMessageIds.includes(A.uid) && ((H = E.current) == null || H.serverComponentRendered({ uid: A.uid }));
    }), R.on("aiMessageReceived", (A) => {
      var D, H;
      if ((D = f.current) != null && D.cancelledMessageIds.includes(A.uid)) return;
      const $ = f.current.newSegments.map((P) => P.uid !== R.segmentId ? P : { ...P, items: [...P.items, { ...A }] });
      f.current.setChatSegments($), (H = E.current) != null && H.messageReceived && E.current.messageReceived({ uid: A.uid, message: A.content });
    }), R.on("complete", (A) => {
      var D;
      if ((D = f.current) != null && D.cancelledMessageIds.includes(A.uid)) return;
      f.current.setComposerStatus("typing");
      const $ = f.current.newSegments.map((H) => H.uid !== R.segmentId ? H : { ...A });
      f.current.setChatSegments($), g.current === S && p(""), w.size > 0 && (w.forEach((H) => {
        requestAnimationFrame(() => {
          var P;
          (P = m.current) == null || P.completeStream(R.segmentId, H);
        });
      }), w.clear());
    }), R.on("aiChunkReceived", ({ messageId: A, chunk: $ }) => {
      var D, H;
      (D = f.current) != null && D.cancelledMessageIds.includes(A) || ((H = m.current) == null || H.streamChunk(z.uid, A, $));
    }), R.on("aiMessageStreamed", (A) => {
      var $, D, H;
      ($ = f.current) != null && $.cancelledMessageIds.includes(A.uid) || (D = E.current) != null && D.messageReceived && ((H = E.current) == null || H.messageReceived({ uid: A.uid, message: A.content }));
    }), R.on("error", (A, $) => {
      var P;
      const D = f.current.newSegments.filter((W) => W.uid !== z.uid), H = Yu[A];
      f.current.setChatSegments(D), f.current.setComposerStatus("typing"), f.current.showException(H), g.current === "" && p(S), (P = E.current) != null && P.error && E.current.error({ errorId: A, message: H, errorObject: $ });
    }), f.current.setChatSegments([...f.current.newSegments, z]);
  }, [r, t, b, a, f, s == null ? void 0 : s.disableSubmitButton]);
}, ja = () => x.jsx("div", { className: "nlux-comp-messageLoader", children: x.jsx("div", { className: "nlux-comp-loaderContainer", children: x.jsx("span", { className: "spinning-loader" }) }) }), qa = { Loader: (n) => x.jsx(x.Fragment, { children: n.children }), Greeting: (n) => x.jsx(x.Fragment, { children: n.children }) }, Qu = function(n) {
  var fe, U, we, ze, $e;
  const { adapter: e, className: t, initialConversation: r, conversationOptions: s, composerOptions: a, displayOptions: i } = n, { themeId: o, colorScheme: u } = i ?? {}, l = Ee(null), c = Ee(null), d = Ee(void 0), p = Ee(null), m = ((_, G) => {
    const [se, q] = Te(), [xe, ce] = Te(), re = Ee(se), Re = Ee(G);
    return he(() => {
      const B = _.current || void 0;
      B !== xe && ce(B);
    }), he(() => {
      xe ? re.current ? re.current.updateConversationContainer(xe) : (re.current = qu(xe, Re.current ?? Ha), q(re.current)) : re.current && (re.current.destroy(), q(void 0), re.current = void 0);
    }, [xe]), he(() => {
      Re.current = G, re.current && re.current.updateProps({ autoScroll: G ?? Ha });
    }, [G]), se;
  })(c, s == null ? void 0 : s.autoScroll), h = ue(() => p.current ? Wl(p.current) : void 0, [p.current]), g = (() => {
    const _ = {}, G = /* @__PURE__ */ new Set();
    return ue(() => ({ getStreamingDomElement: (se) => {
      if (G.has(se) && G.delete(se), _[se] === void 0) {
        const q = document.createElement("div");
        q.setAttribute("nlux-message-id", se), q.className = "nlux-markdown-container", _[se] = q;
      }
      return _[se];
    }, deleteStreamingDomElement: (se) => {
      G.add(se), setTimeout(() => {
        G.forEach((q) => {
          _[q] && (_[q].remove(), delete _[q]);
        }), G.clear();
      }, 1e3);
    } }), []);
  })(), { PrimitivesContextProvider: f } = function(_) {
    var q, xe, ce, re, Re, B, J, me, M;
    const [G, se] = Te(_);
    return he(() => {
      se(_);
    }, [(q = _ == null ? void 0 : _.messageOptions) == null ? void 0 : q.htmlSanitizer, (xe = _ == null ? void 0 : _.messageOptions) == null ? void 0 : xe.syntaxHighlighter, (ce = _ == null ? void 0 : _.messageOptions) == null ? void 0 : ce.markdownLinkTarget, (re = _ == null ? void 0 : _.messageOptions) == null ? void 0 : re.showCodeBlockCopyButton, (Re = _ == null ? void 0 : _.messageOptions) == null ? void 0 : Re.skipStreamingAnimation, (B = _ == null ? void 0 : _.messageOptions) == null ? void 0 : B.streamingAnimationSpeed, (J = _ == null ? void 0 : _.messageOptions) == null ? void 0 : J.waitTimeBeforeStreamCompletion, (me = _ == null ? void 0 : _.messageOptions) == null ? void 0 : me.responseRenderer, (M = _ == null ? void 0 : _.messageOptions) == null ? void 0 : M.promptRenderer]), { PrimitivesContextProvider: ue(() => ({ children: K }) => x.jsx(Es.Provider, { value: G, children: K }), [G]), primitivesContext: Es };
  }({ messageOptions: n.messageOptions }), [E, b] = Te(""), [y, S] = Te("typing"), [w, I] = Te(), [z, R] = Te([]), [T, A] = Te([]), [$, D] = Te([]), H = ue(() => w ? [w, ...z] : z, [w, z]), P = ue(() => ((_) => {
    const G = _;
    if (typeof (G == null ? void 0 : G.create) == "function") return G.create();
    if (typeof (G == null ? void 0 : G.batchText) == "function" || typeof (G == null ? void 0 : G.streamText) == "function" || typeof (G == null ? void 0 : G.streamServerComponent) == "function") return _;
    Ke("Unable to determine the type of the adapter! Missing batchText or streamText method.");
  })(e), [e]), W = ((_) => ue(() => {
    const G = { minWidth: "280px", minHeight: "280px" };
    return _ != null && _.width && (G.width = _.width), _ != null && _.height && (G.height = _.height), G;
  }, [_ == null ? void 0 : _.width, _ == null ? void 0 : _.height]))(i), oe = ue(() => ((_) => {
    const G = ["nlux-AiChat-root"], se = `nlux-theme-${_.themeId || "nova"}`;
    return G.push(se), _.className && G.push(_.className), G;
  })({ className: t, themeId: o }).join(" "), [t, o]), C = ue(() => {
    var _;
    return u !== "auto" && u ? u : typeof globalThis !== void 0 && globalThis.matchMedia && ((_ = globalThis.matchMedia("(prefers-color-scheme: dark)")) != null && _.matches) ? "dark" : "light";
  }, [u]), L = Ce((_) => h == null ? void 0 : h.displayException(_), [h]), N = function(_, G, se, q, xe, ce, re, Re) {
    return Ce(() => {
      var J;
      const B = _.length > 0 ? _[_.length - 1] : void 0;
      (B == null ? void 0 : B.status) === "active" && (q(_.slice(0, -1)), xe([...G, B.uid]), ce([...se, ...B.items.map((me) => me.uid)]), (J = re.current) == null || J.cancelSegmentStreams(B.uid)), Re("typing");
    }, [_, G, se, q, xe, ce, re, Re]);
  }(z, T, $, R, A, D, l, S), k = Ce((_) => b(_), [b]), O = Zu({ aiChatProps: n, adapterToUse: P, conversationRef: l, initialSegment: w, newSegments: z, cancelledMessageIds: $, cancelledSegmentIds: T, prompt: E, composerOptions: a, showException: L, setChatSegments: R, setComposerStatus: S, setPrompt: b }), j = ((_, G, se, q, xe, ce) => Ce((re, Re, B) => {
    if (re === "initial" && _) {
      const M = [];
      for (const ie of _.items) {
        if (ie.uid === Re) break;
        M.push(ie);
      }
      const K = { ..._, items: M };
      return G(K), q([]), xe(B), void ce("submitting-edit");
    }
    const J = se.findIndex((M) => M.uid === re), me = se.slice(0, J);
    q(me), xe(B), ce("submitting-edit");
  }, [se, q, _, G, xe, ce]))(w, I, z, R, b, S), X = Ce((_, G) => {
    var se;
    (se = n.events) != null && se.messageRendered && n.events.messageRendered({ uid: G });
  }, []), ee = Ce((_) => {
    b(_.prompt), S("submitting-conversation-starter");
  }, [b, S]), te = ((_, G) => Ce((se) => {
    _ && se && (G.current = se.uid, _.handleNewChatSegmentAdded(se.uid, se.div));
  }, [_]))(m, d);
  he(() => {
    y !== "submitting-conversation-starter" && y !== "submitting-external-message" && y !== "submitting-edit" || O();
  }, [y, O]), he(() => I(r ? { uid: "initial", status: "complete", items: r.map((_, G) => {
    if (_.role === "assistant" || _.role === "user") return _.role === "user" ? typeof _.message != "string" ? void Ke(`Invalid message type for item at index ${G} in initial conversation: When role is "user", message must be a string`) : { uid: ct(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: _.message, contentType: "text" } : { uid: ct(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "assistant", content: _.message, contentType: "text", serverResponse: _.serverResponse, dataTransferMode: "batch" };
    Ke(`Invalid role for item at index ${G} in initial conversation: Role must be "assistant" or "user"`);
  }).filter((_) => _ !== void 0) } : void 0), [r]), he(() => {
    var _;
    w && ((_ = c.current) == null || _.scrollTo({ behavior: "smooth", top: 5e4 }));
  }, [w]);
  const Y = Ee(void 0);
  he(() => {
    const _ = n.api;
    Y.current = _, typeof (_ == null ? void 0 : _.__setHost) == "function" ? _.__setHost({ sendMessage: (G) => {
      b(G), S("submitting-external-message");
    }, resetConversation: () => {
      R([]), I(void 0);
    }, cancelLastMessageRequest: N }) : tn(`API object passed was is not compatible with AiChat.
Only use API objects created by the useAiChatApi() hook.`);
  }, [n.api, N, b, S, R, I]), he(() => () => {
    var _;
    typeof ((_ = Y.current) == null ? void 0 : _.__unsetHost) == "function" && (Y.current.__unsetHost(), Y.current = void 0);
  }, []), ((_) => {
    he(() => {
      var se;
      const G = (se = _.events) == null ? void 0 : se.ready;
      G && G({ aiChatProps: vs(_) });
    }, []);
  })(n), ((_, G) => {
    var xe;
    const se = Ee(), q = Ee();
    he(() => {
      se.current = () => {
        const ce = [];
        return G.forEach((re) => {
          re.items && re.items.length !== 0 && re.items.forEach((Re) => {
            Re.status === "complete" && (Re.participantRole !== "assistant" ? Re.participantRole === "user" && ce.push({ role: "user", message: Re.content }) : ce.push({ role: "assistant", message: Re.content }));
          });
        }), ce;
      };
    }, [G]), he(() => {
      var ce;
      q.current = (ce = _.events) == null ? void 0 : ce.preDestroy;
    }, [(xe = _.events) == null ? void 0 : xe.preDestroy]), he(() => () => {
      var re;
      const ce = q.current;
      ce && (ce({ aiChatProps: vs(_), conversationHistory: ((re = se.current) == null ? void 0 : re.call(se)) ?? [] }), se.current = void 0);
    }, []);
  })(n, H);
  const V = ue(() => an(Bu), []), Q = ((_) => {
    const G = ue(() => _.children ? Array.isArray(_.children) ? _.children : [_.children] : [], [_.children]);
    return { Loader: ue(() => G.length === 0 ? x.jsx(ja, {}) : G.find((se) => se.type === qa.Loader) || x.jsx(ja, {}), [G]), Greeting: ue(() => {
      if (G.length !== 0) return G.find((se) => se.type === qa.Greeting);
    }, [G]) };
  })(n), ae = E.length > 0, ne = H.length === 0 ? "nlux-chatRoom-starting" : "nlux-chatRoom-active";
  return P ? x.jsx(f, { children: x.jsxs("div", { className: oe, style: W, "data-color-scheme": C, children: [x.jsx("div", { className: "nlux-comp-exceptionBox", ref: p }), x.jsxs("div", { className: `nlux-chatRoom-container ${ne}`, children: [x.jsx("div", { className: "nlux-launchPad-container", children: x.jsx($u, { segments: H, onConversationStarterSelected: ee, conversationOptions: s, personaOptions: n.personaOptions, userDefinedGreeting: Q.Greeting }) }), x.jsx("div", { className: "nlux-conversation-container", ref: c, "aria-label": "Chat conversation", role: "log", children: x.jsx(V, { ref: l, segments: H, conversationOptions: n.conversationOptions, personaOptions: n.personaOptions, messageOptions: n.messageOptions, onLastActiveSegmentChange: te, Loader: Q.Loader, markdownContainersController: g, submitShortcutKey: (fe = n.composerOptions) == null ? void 0 : fe.submitShortcut, onPromptResubmit: j, onMarkdownStreamRendered: X }) }), x.jsx("div", { className: "nlux-composer-container", children: x.jsx(Xl, { status: y, prompt: E, hasValidInput: ae, placeholder: (U = n.composerOptions) == null ? void 0 : U.placeholder, autoFocus: (we = n.composerOptions) == null ? void 0 : we.autoFocus, submitShortcut: (ze = n.composerOptions) == null ? void 0 : ze.submitShortcut, hideStopButton: ($e = n.composerOptions) == null ? void 0 : $e.hideStopButton, onChange: k, onSubmit: O, onCancel: N, Loader: Q.Loader }) })] })] }) }) : (tn("AiChat: No valid adapter provided. The component will not render."), x.jsx(x.Fragment, {}));
}, Nh = () => {
  const n = Ee(null), e = Ee(/* @__PURE__ */ ((t = () => {
  }) => ({ composer: { send: (r) => {
    throw new Error("AiChatApi is not connected to a host <AiChat /> component.");
  }, cancel: () => {
    throw new Error("AiChatApi is not connected to a host <AiChat /> component.");
  } }, conversation: { reset: () => {
    throw new Error("AiChatApi is not connected to a host <AiChat /> component.");
  } }, __setHost: (r) => {
    t(r);
  }, __unsetHost: () => {
  } }))());
  return e.current.composer.send = (t) => {
    if (!n.current) throw new Error("AiChatApi is not connected to a host <AiChat /> component.");
    n.current.sendMessage(t);
  }, e.current.composer.cancel = () => {
    if (!n.current) throw new Error("AiChatApi is not connected to a host <AiChat /> component.");
    n.current.cancelLastMessageRequest();
  }, e.current.conversation.reset = () => {
    if (!n.current) throw new Error("AiChatApi is not connected to a host <AiChat /> component.");
    n.current.resetConversation();
  }, e.current.__setHost = (t) => {
    n.current = t;
  }, e.current.__unsetHost = () => {
    n.current = null;
  }, e.current;
}, Xu = ({ children: n }) => {
  const e = ue(() => Math.random().toString(36).substring(7), []), t = As(Es), r = Array.isArray(n) ? n.join("") : n;
  return x.jsx(ys, { markdownOptions: t.messageOptions, content: r, messageUid: e });
}, Mh = function(n, e) {
  return ue(() => ({ batchText: n }), e ?? [{}]);
}, Dh = function(n, e) {
  return ue(() => ({ streamText: n }), e ?? [{}]);
}, Lh = function(n, e) {
  return { streamServerComponent: (t, r, s) => () => {
    const [a, i] = Te("idle"), [o, u] = Te(null);
    return he(() => {
      i("loading"), n.then((l) => {
        if (typeof l.default != "function") {
          const c = "The module passed to useAsRscAdapter() as server component does not have a valid default export.";
          return Ke(c), i("error"), void s.onError(new Error(c));
        }
        i("success"), u(() => Bc(async () => {
          let c, d;
          try {
            d = l.default({ message: t, extras: r }), c = await Promise.resolve(d);
          } catch {
            Ke(`An error occurred while rendering the React Server Component (RSC).
Please ensure that no server error has occurred.`), s.onError(new Error("Error while rendering RSC."));
          }
          return s.onServerComponentReceived(), c !== void 0 && Lt(c) ? { default: () => x.jsx(x.Fragment, { children: c }) } : (s.onError(new Error("Unable to render RSC. The RSC adapter should return a valid React element.")), { default: () => x.jsx(x.Fragment, {}) });
        }));
      }).catch((l) => {
        Ke(`The module passed to useAsRscAdapter() is not a valid ES module, or did not properly load! The first parameter passed to useAsRscAdapter() should be the result of a dynamic import() call [ without await or .then() ]. The module should also have a default export. Your bundler should be able to handle dynamic imports and ES modules.

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports`), i("error"), s.onError(l);
      });
    }, []), a === "idle" || a === "loading" ? null : a === "error" ? (Ke("Error loading RSC"), x.jsx(x.Fragment, { children: "Error loading RSC" })) : x.jsx(zc, { fallback: e || null, children: o && x.jsx(o, {}) });
  } };
}, Ph = (n, e, t) => {
  const r = As(n.ref), [s] = Te(() => {
    let i;
    do
      i = Math.random().toString(36).substring(2, 15);
    while (r.hasItem(i));
    return i;
  }), a = Ee();
  he(() => (a.current = r.observeState(s, e, t), () => {
    var i;
    (i = a.current) == null || i.discard(), a.current = void 0;
  }), []), he(() => {
    var i;
    (i = a.current) == null || i.setDescription(e);
  }, [e]), he(() => {
    var i;
    (i = a.current) == null || i.setData(t);
  }, [t]);
}, Bh = (n, e, t, r) => {
  const s = As(n.ref), [a] = Te(() => {
    let o;
    do
      o = Math.random().toString(36).substring(2, 15);
    while (s.hasTask(o));
    return o;
  }), i = Ee();
  he(() => (i.current = s.registerTask(a, e, t, r), () => {
    var o;
    (o = i.current) == null || o.discard(), i.current = void 0;
  }), []), he(() => {
    var o;
    (o = i.current) == null || o.setDescription(e);
  }, [e]), he(() => {
    var o;
    (o = i.current) == null || o.setCallback(t);
  }, [t]), he(() => {
    var o;
    (o = i.current) == null || o.setParamDescriptions(r ?? []);
  }, [r]);
}, zh = (n) => {
  const e = Sa(), t = oo(e);
  return { Provider: (r) => {
    const [s, a] = Te(), [i, o] = Te(), [u, l] = Te();
    he(() => {
      let d = !0;
      const p = Sa().withAdapter(n).withDataSyncOptions({ syncStrategy: "auto", contextSize: Gl["100k"] });
      return l(p), p.initialize(r.initialItems || {}).then((m) => {
        d && (m.success ? a(m.contextId) : o(new Error(m.error)));
      }), () => {
        d = !1, p.destroy();
      };
    }, []);
    const { children: c } = r;
    return i ? r.errorComponent ? x.jsx(r.errorComponent, { error: i.message }) : x.jsxs("div", { children: [x.jsx("h1", { children: "Error initializing AI context" }), x.jsx("p", { children: i.message })] }) : s && u ? x.jsx(t.Provider, { value: u, children: c }) : r.loadingComponent ? x.jsx(r.loadingComponent, {}) : null;
  }, ref: t };
}, Fh = function(n, e) {
  return he(n, function(t) {
    const r = Ee(t), s = Ee(0);
    return Qt(t, r.current) || (r.current = t, s.current += 1), ue(() => r.current, [s.current]);
  }(e));
};
var Vo = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ka = Ve.createContext && /* @__PURE__ */ Ve.createContext(Vo), Vu = ["attr", "size", "title"];
function Ju(n, e) {
  if (n == null) return {};
  var t = ed(n, e), r, s;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    for (s = 0; s < a.length; s++)
      r = a[s], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function ed(n, e) {
  if (n == null) return {};
  var t = {};
  for (var r in n)
    if (Object.prototype.hasOwnProperty.call(n, r)) {
      if (e.indexOf(r) >= 0) continue;
      t[r] = n[r];
    }
  return t;
}
function jn() {
  return jn = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, jn.apply(this, arguments);
}
function Ga(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function qn(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ga(Object(t), !0).forEach(function(r) {
      td(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Ga(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function td(n, e, t) {
  return e = nd(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function nd(n) {
  var e = rd(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function rd(n, e) {
  if (typeof n != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function Jo(n) {
  return n && n.map((e, t) => /* @__PURE__ */ Ve.createElement(e.tag, qn({
    key: t
  }, e.attr), Jo(e.child)));
}
function sd(n) {
  return (e) => /* @__PURE__ */ Ve.createElement(ad, jn({
    attr: qn({}, n.attr)
  }, e), Jo(n.child));
}
function ad(n) {
  var e = (t) => {
    var {
      attr: r,
      size: s,
      title: a
    } = n, i = Ju(n, Vu), o = s || t.size || "1em", u;
    return t.className && (u = t.className), n.className && (u = (u ? u + " " : "") + n.className), /* @__PURE__ */ Ve.createElement("svg", jn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, i, {
      className: u,
      style: qn(qn({
        color: n.color || t.color
      }, t.style), n.style),
      height: o,
      width: o,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ Ve.createElement("title", null, a), n.children);
  };
  return Ka !== void 0 ? /* @__PURE__ */ Ve.createElement(Ka.Consumer, null, (t) => e(t)) : e(Vo);
}
function id(n) {
  return sd({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" }, child: [] }] })(n);
}
var od = /* @__PURE__ */ ((n) => (n.Text = "Text", n.ImageUrl = "ImageUrl", n))(od || {}), cd = /* @__PURE__ */ ((n) => (n.SystemMessage = "system", n.AIMessage = "ai", n.HumanMessage = "human", n))(cd || {}), ld = /* @__PURE__ */ ((n) => (n.Auto = "Auto", n.Low = "Low", n.High = "High", n))(ld || {});
async function ud(n) {
  const { files: e, message: t } = n;
  if (!e || !e.length)
    return t;
  {
    let r = await Promise.all(e.map(async (s) => {
      const a = await dd(s, n.resizeOptions);
      if (!a)
        throw new Error("resize failed");
      const i = await pd(a);
      if (!i)
        throw new Error("base64 failed");
      return [
        "ImageUrl",
        i,
        null
      ];
    }));
    return r.push(
      [
        "Text",
        t,
        null
      ]
    ), r;
  }
}
const dd = async (n, e) => {
  const t = (e == null ? void 0 : e.maxSize) || 256, r = document.createElement("canvas"), s = r.getContext("2d");
  if (!s) throw new Error("ctx is not available");
  r.width = t, r.height = t;
  const a = await createImageBitmap(n), { width: i, height: o } = a, u = Math.max(t / i, t / o), l = (t - i * u) / 2, c = (t - o * u) / 2;
  return s.drawImage(a, 0, 0, i, o, l, c, i * u, o * u), new Promise((d) => {
    r.toBlob((p) => {
      d(p);
    });
  });
};
async function pd(n) {
  return new Promise((e, t) => {
    const r = new FileReader();
    r.onloadend = () => e(r.result), r.readAsDataURL(n);
  });
}
async function md(n, e) {
  const t = n.getReader();
  let r;
  for (; !(r = await t.read()).done; )
    e(r.value);
}
function hd(n) {
  let e, t, r, s = !1;
  return function(i) {
    e === void 0 ? (e = i, t = 0, r = -1) : e = fd(e, i);
    const o = e.length;
    let u = 0;
    for (; t < o; ) {
      s && (e[t] === 10 && (u = ++t), s = !1);
      let l = -1;
      for (; t < o && l === -1; ++t)
        switch (e[t]) {
          case 58:
            r === -1 && (r = t - u);
            break;
          case 13:
            s = !0;
          case 10:
            l = t;
            break;
        }
      if (l === -1)
        break;
      n(e.subarray(u, l), r), u = t, r = -1;
    }
    u === o ? e = void 0 : u !== 0 && (e = e.subarray(u), t -= u);
  };
}
function gd(n, e, t) {
  let r = Wa();
  const s = new TextDecoder();
  return function(i, o) {
    if (i.length === 0)
      t == null || t(r), r = Wa();
    else if (o > 0) {
      const u = s.decode(i.subarray(0, o)), l = o + (i[o + 1] === 32 ? 2 : 1), c = s.decode(i.subarray(l));
      switch (u) {
        case "data":
          r.data = r.data ? r.data + (c || `
`) : c || `
`;
          break;
        case "event":
          r.event = c;
          break;
        case "id":
          n(r.id = c);
          break;
        case "retry":
          const d = parseInt(c, 10);
          isNaN(d) || e(r.retry = d);
          break;
      }
    }
  };
}
function fd(n, e) {
  const t = new Uint8Array(n.length + e.length);
  return t.set(n), t.set(e, n.length), t;
}
function Wa() {
  return {
    data: "",
    event: "",
    id: "",
    retry: void 0
  };
}
var bd = function(n, e) {
  var t = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(n); s < r.length; s++)
      e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[s]) && (t[r[s]] = n[r[s]]);
  return t;
};
const ws = "text/event-stream", yd = 1e3, Ya = "last-event-id";
function vd(n, e) {
  var { signal: t, headers: r, onopen: s, onmessage: a, onclose: i, onerror: o, openWhenHidden: u, fetch: l } = e, c = bd(e, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"]);
  return new Promise((d, p) => {
    const m = Object.assign({}, r);
    m.accept || (m.accept = ws);
    let h;
    function g() {
      h.abort(), document.hidden || w();
    }
    u || document.addEventListener("visibilitychange", g);
    let f = yd, E = 0;
    function b() {
      document.removeEventListener("visibilitychange", g), window.clearTimeout(E), h.abort();
    }
    t == null || t.addEventListener("abort", () => {
      b(), d();
    });
    const y = l ?? window.fetch, S = s ?? Ed;
    async function w() {
      var I;
      h = new AbortController();
      try {
        const z = await y(n, Object.assign(Object.assign({}, c), { headers: m, signal: h.signal }));
        await S(z), await md(z.body, hd(gd((R) => {
          R ? m[Ya] = R : delete m[Ya];
        }, (R) => {
          f = R;
        }, a))), i == null || i(), b(), d();
      } catch (z) {
        if (!h.signal.aborted)
          try {
            const R = (I = o == null ? void 0 : o(z)) !== null && I !== void 0 ? I : f;
            window.clearTimeout(E), E = window.setTimeout(w, R);
          } catch (R) {
            b(), p(R);
          }
      }
    }
    w();
  });
}
function Ed(n) {
  const e = n.headers.get("content-type");
  if (!(e != null && e.startsWith(ws)))
    throw new Error(`Expected content-type to be ${ws}, Actual: ${e}`);
}
const ec = "https://api.dev.langdb.ai", tc = async (n) => {
  var t;
  const e = { "Content-Type": "application/json" };
  if (n.publicId)
    e["X-PUBLIC-APPLICATION-ID"] = n.publicId;
  else {
    const r = await ((t = n.getAccessToken) == null ? void 0 : t.call(n));
    if (!r)
      throw new Error("Failed to get the user token");
    e.Authorization = `Bearer ${r}`;
  }
  return e;
};
class cr extends Error {
}
const wd = (n) => {
  const { files: e, fileResizeOptions: t } = n, s = `${n.serverUrl || ec}/stream`, [a, i] = Te(n.threadId), [o, u] = Te(), { modelName: l, agentParams: c } = n;
  return {
    adapter: {
      streamText: async (p, m) => {
        try {
          const h = await tc(n), g = await ud({ files: e, message: p, resizeOptions: t }), f = {
            model_name: l,
            parameters: c || {},
            user_id: n.userId || "",
            thread_id: a,
            message: g
          };
          await vd(s, {
            method: "POST",
            body: JSON.stringify(f),
            headers: h,
            credentials: "include",
            async onopen(E) {
              if (E.ok && E.headers.get("content-type") === "text/event-stream") {
                const b = E.headers.get("X-Thread-Id"), y = E.headers.get("X-Message-Id");
                if (u(y), i(b), n.responseCallback) {
                  const S = E == null ? void 0 : E.headers.get("x-trace-id");
                  n.responseCallback({
                    traceId: S,
                    modelName: l,
                    threadId: b,
                    messageId: y
                  });
                }
                if (!E.body)
                  throw new cr("No body found");
                return;
              } else if (E.status >= 400 && E.status < 500 && E.status !== 429) {
                const b = await E.text();
                throw new cr(b || `${E.status}: Failed to send message to the server`);
              } else
                return;
            },
            onmessage(E) {
              if (E.event)
                throw new cr(E.data);
              m.next(E.data);
            },
            onclose() {
            },
            onerror(E) {
              throw E;
            }
          });
        } catch (h) {
          const g = new Error(h.toString());
          n.responseCallback && n.responseCallback({ error: g, modelName: l }), m.error(g);
        }
        m.complete();
      }
    },
    threadId: a,
    messageId: o
  };
}, xd = (n) => /* @__PURE__ */ x.jsx("svg", { ...n, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ x.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12h14" }) }), kd = () => /* @__PURE__ */ x.jsxs("svg", { viewBox: "0 0 200 200", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ x.jsx("circle", { cx: "100", cy: "100", r: "99.5", stroke: "#B0488C" }),
  /* @__PURE__ */ x.jsxs("g", { clipPath: "url(#clip0_31_12)", children: [
    /* @__PURE__ */ x.jsx(
      "path",
      {
        d: "M87.6691 75.9199C88.563 75.9163 89.457 75.9128 90.378 75.9091C92.2639 75.9065 94.1498 75.9134 96.0357 75.9291C98.9224 75.9491 101.807 75.9292 104.694 75.9053C106.528 75.9078 108.362 75.9126 110.195 75.9199C111.059 75.9124 111.921 75.9048 112.81 75.897C119.46 75.9944 119.46 75.9944 121.75 78.2731C122.191 78.8959 122.631 79.5187 123.085 80.1604C123.454 80.531 123.454 80.531 123.83 80.9091C123.911 82.1028 123.941 83.3 123.95 84.4965C123.957 85.2614 123.964 86.0262 123.971 86.8143C123.974 87.6478 123.978 88.4815 123.981 89.3403C123.985 90.1927 123.99 91.0451 123.994 91.9233C124.001 93.7328 124.006 95.5423 124.009 97.3517C124.016 100.116 124.039 102.879 124.062 105.643C124.067 107.399 124.071 109.155 124.074 110.911C124.083 111.738 124.093 112.563 124.102 113.415C124.081 120.894 124.081 120.894 121.596 124.332C119.274 125.815 117.439 126.021 114.715 126.035C113.937 126.042 113.159 126.049 112.357 126.056C111.521 126.056 110.685 126.055 109.823 126.054C108.961 126.057 108.098 126.06 107.209 126.064C105.383 126.068 103.559 126.068 101.734 126.065C98.9428 126.062 96.1519 126.08 93.3604 126.099C91.5874 126.101 89.8145 126.101 88.0415 126.101C87.2067 126.107 86.372 126.115 85.5119 126.122C84.7316 126.117 83.9513 126.113 83.1474 126.107C82.4635 126.108 81.7796 126.109 81.075 126.109C78.7215 125.767 77.3408 124.983 75.4255 123.583C73.7766 121.097 73.7375 120.265 73.6961 117.362C73.6818 116.549 73.6676 115.737 73.6528 114.901C73.6465 114.023 73.6401 113.146 73.6337 112.242C73.6251 111.34 73.6166 110.438 73.6079 109.509C73.5938 107.6 73.5841 105.69 73.5783 103.781C73.5639 100.859 73.5177 97.9383 73.4707 95.0167C73.461 93.1626 73.4532 91.3085 73.4475 89.4543C73.4291 88.5801 73.4107 87.7058 73.3917 86.8049C73.4123 83.0474 73.445 80.866 75.6217 77.739C79.2026 75.469 83.5895 75.8841 87.6691 75.9199Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ x.jsx(
      "path",
      {
        d: "M32.2341 37.4866C59.7575 37.4866 87.2809 37.4866 115.638 37.4866C115.638 42.9219 115.638 48.3572 115.638 53.9572C93.0298 53.9572 70.4213 53.9572 47.1277 53.9572C47.1277 64.5807 47.1277 75.2043 47.1277 86.1497C42.2128 86.1497 37.2979 86.1497 32.2341 86.1497C32.2341 70.0909 32.2341 54.0321 32.2341 37.4866Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ x.jsx(
      "path",
      {
        d: "M32.2341 116.845C37.149 116.845 42.0639 116.845 47.1277 116.845C47.1277 127.221 47.1277 137.598 47.1277 148.289C71.7022 148.289 96.2766 148.289 121.596 148.289C121.596 153.23 121.596 158.171 121.596 163.262C92.1064 163.262 62.617 163.262 32.2341 163.262C32.2341 147.944 32.2341 132.627 32.2341 116.845Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ x.jsx(
      "path",
      {
        d: "M161.814 34.6792C165.577 37.5618 167.934 41.1653 169.255 45.7219C170.002 51.7878 170.244 57.7758 166.678 63.0231C166.3 63.4902 165.921 63.9573 165.532 64.4385C164.964 65.1623 164.964 65.1623 164.386 65.9007C160.694 70.0863 156.304 72.2018 150.81 72.9575C144.443 73.235 139.791 71.2772 134.814 67.3864C130.268 63.0898 128.124 57.8507 127.879 51.6177C128.195 45.152 130.717 40.4865 135.049 35.7846C142.84 28.7908 153.315 29.3596 161.814 34.6792Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ x.jsx(
      "path",
      {
        d: "M158.009 137.132C162.749 139.815 166.014 143.005 167.766 148.289C168.291 153.643 168.045 158.108 164.787 162.513C160.978 166.779 156.65 168.925 151.011 169.532C144.592 168.841 140.292 166.139 136.21 161.062C134.084 157.002 134.439 151.969 135 147.54C136.243 144.421 137.612 142.39 140.167 140.241C140.665 139.812 141.163 139.383 141.676 138.942C146.467 135.355 152.423 135.005 158.009 137.132Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ x.jsx(
      "path",
      {
        d: "M149.894 85.4011C154.809 85.4011 159.723 85.4011 164.787 85.4011C164.787 96.0246 164.787 106.648 164.787 117.594C159.872 117.594 154.957 117.594 149.894 117.594C149.894 106.97 149.894 96.3465 149.894 85.4011Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ x.jsx(
      "path",
      {
        d: "M40.3383 94.0136C43.3122 94.7142 44.8713 96.3632 46.6623 98.7366C47.3967 101.321 47.103 103.037 46.383 105.615C44.2412 107.919 42.6152 109.128 39.6343 110.107C36.957 110.107 35.8402 109.471 33.7234 107.861C33.2934 107.567 32.8633 107.274 32.4203 106.972C30.8391 104.667 30.4332 102.35 30.7447 99.6257C32.7702 95.2399 35.5991 93.6206 40.3383 94.0136Z",
        fill: "#B0488C"
      }
    )
  ] }),
  /* @__PURE__ */ x.jsx("defs", { children: /* @__PURE__ */ x.jsx("clipPath", { id: "clip0_31_12", children: /* @__PURE__ */ x.jsx(
    "rect",
    {
      width: "140",
      height: "140",
      fill: "white",
      transform: "translate(30 30)"
    }
  ) }) })
] }), Sd = ({ files: n }) => /* @__PURE__ */ x.jsx(x.Fragment, { children: n.map((e, t) => /* @__PURE__ */ x.jsx("div", { className: "thumbnail m-2", children: /* @__PURE__ */ x.jsx("div", { className: "thumbnailInner", children: /* @__PURE__ */ x.jsx("img", { src: e.preview, alt: e.preview, className: "w-[150px]" }) }) }, t)) }), _d = ({ files: n, setFiles: e }) => {
  const t = (r) => () => {
    const s = n.filter((a) => a !== r);
    e(s);
  };
  return /* @__PURE__ */ x.jsx("div", { className: "flex flex-col w-[100%]", children: /* @__PURE__ */ x.jsx("aside", { className: "flex flex-wrap mt-4", children: n.map((r) => /* @__PURE__ */ x.jsxs("div", { className: "relative m-2", children: [
    /* @__PURE__ */ x.jsx("button", { onClick: t(r), className: "absolute top-0 right-0 p-1 bg-red-500 rounded-full text-white", children: /* @__PURE__ */ x.jsx(xd, { className: "w-4 h-4" }) }),
    /* @__PURE__ */ x.jsx("div", { className: "border p-1 rounded-lg", children: /* @__PURE__ */ x.jsx("img", { src: r.preview, alt: r.name, className: "w-12 h-12 object-cover rounded-lg" }) })
  ] }, r.name)) }) });
};
function Cd({
  title: n,
  titleId: e,
  ...t
}, r) {
  return /* @__PURE__ */ Ue.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": e
  }, t), n ? /* @__PURE__ */ Ue.createElement("title", {
    id: e
  }, n) : null, /* @__PURE__ */ Ue.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
  }));
}
const Td = /* @__PURE__ */ Ue.forwardRef(Cd);
function Ad({
  title: n,
  titleId: e,
  ...t
}, r) {
  return /* @__PURE__ */ Ue.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": e
  }, t), n ? /* @__PURE__ */ Ue.createElement("title", {
    id: e
  }, n) : null, /* @__PURE__ */ Ue.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
  }));
}
const Id = /* @__PURE__ */ Ue.forwardRef(Ad);
function Rd({
  title: n,
  titleId: e,
  ...t
}, r) {
  return /* @__PURE__ */ Ue.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": e
  }, t), n ? /* @__PURE__ */ Ue.createElement("title", {
    id: e
  }, n) : null, /* @__PURE__ */ Ue.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
  }));
}
const Od = /* @__PURE__ */ Ue.forwardRef(Rd);
function Nd({
  title: n,
  titleId: e,
  ...t
}, r) {
  return /* @__PURE__ */ Ue.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": e
  }, t), n ? /* @__PURE__ */ Ue.createElement("title", {
    id: e
  }, n) : null, /* @__PURE__ */ Ue.createElement("path", {
    d: "M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z"
  }));
}
const Md = /* @__PURE__ */ Ue.forwardRef(Nd);
function Dd({
  title: n,
  titleId: e,
  ...t
}, r) {
  return /* @__PURE__ */ Ue.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": e
  }, t), n ? /* @__PURE__ */ Ue.createElement("title", {
    id: e
  }, n) : null, /* @__PURE__ */ Ue.createElement("path", {
    d: "M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z"
  }));
}
const Ld = /* @__PURE__ */ Ue.forwardRef(Dd);
function nc(n) {
  return n instanceof Map ? n.clear = n.delete = n.set = function() {
    throw new Error("map is read-only");
  } : n instanceof Set && (n.add = n.clear = n.delete = function() {
    throw new Error("set is read-only");
  }), Object.freeze(n), Object.getOwnPropertyNames(n).forEach((e) => {
    const t = n[e], r = typeof t;
    (r === "object" || r === "function") && !Object.isFrozen(t) && nc(t);
  }), n;
}
class Za {
  /**
   * @param {CompiledMode} mode
   */
  constructor(e) {
    e.data === void 0 && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1;
  }
  ignoreMatch() {
    this.isMatchIgnored = !0;
  }
}
function rc(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function ht(n, ...e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r in n)
    t[r] = n[r];
  return e.forEach(function(r) {
    for (const s in r)
      t[s] = r[s];
  }), /** @type {T} */
  t;
}
const Pd = "</span>", Qa = (n) => !!n.scope, Bd = (n, { prefix: e }) => {
  if (n.startsWith("language:"))
    return n.replace("language:", "language-");
  if (n.includes(".")) {
    const t = n.split(".");
    return [
      `${e}${t.shift()}`,
      ...t.map((r, s) => `${r}${"_".repeat(s + 1)}`)
    ].join(" ");
  }
  return `${e}${n}`;
};
class zd {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(e, t) {
    this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this);
  }
  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(e) {
    this.buffer += rc(e);
  }
  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(e) {
    if (!Qa(e)) return;
    const t = Bd(
      e.scope,
      { prefix: this.classPrefix }
    );
    this.span(t);
  }
  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(e) {
    Qa(e) && (this.buffer += Pd);
  }
  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }
  // helpers
  /**
   * Builds a span element
   *
   * @param {string} className */
  span(e) {
    this.buffer += `<span class="${e}">`;
  }
}
const Xa = (n = {}) => {
  const e = { children: [] };
  return Object.assign(e, n), e;
};
class js {
  constructor() {
    this.rootNode = Xa(), this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  /** @param {Node} node */
  add(e) {
    this.top.children.push(e);
  }
  /** @param {string} scope */
  openNode(e) {
    const t = Xa({ scope: e });
    this.add(t), this.stack.push(t);
  }
  closeNode() {
    if (this.stack.length > 1)
      return this.stack.pop();
  }
  closeAllNodes() {
    for (; this.closeNode(); ) ;
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(e) {
    return this.constructor._walk(e, this.rootNode);
  }
  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(e, t) {
    return typeof t == "string" ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach((r) => this._walk(e, r)), e.closeNode(t)), e;
  }
  /**
   * @param {Node} node
   */
  static _collapse(e) {
    typeof e != "string" && e.children && (e.children.every((t) => typeof t == "string") ? e.children = [e.children.join("")] : e.children.forEach((t) => {
      js._collapse(t);
    }));
  }
}
class Fd extends js {
  /**
   * @param {*} options
   */
  constructor(e) {
    super(), this.options = e;
  }
  /**
   * @param {string} text
   */
  addText(e) {
    e !== "" && this.add(e);
  }
  /** @param {string} scope */
  startScope(e) {
    this.openNode(e);
  }
  endScope() {
    this.closeNode();
  }
  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  __addSublanguage(e, t) {
    const r = e.root;
    t && (r.scope = `language:${t}`), this.add(r);
  }
  toHTML() {
    return new zd(this, this.options).value();
  }
  finalize() {
    return this.closeAllNodes(), !0;
  }
}
function nn(n) {
  return n ? typeof n == "string" ? n : n.source : null;
}
function sc(n) {
  return At("(?=", n, ")");
}
function Ud(n) {
  return At("(?:", n, ")*");
}
function $d(n) {
  return At("(?:", n, ")?");
}
function At(...n) {
  return n.map((t) => nn(t)).join("");
}
function Hd(n) {
  const e = n[n.length - 1];
  return typeof e == "object" && e.constructor === Object ? (n.splice(n.length - 1, 1), e) : {};
}
function qs(...n) {
  return "(" + (Hd(n).capture ? "" : "?:") + n.map((r) => nn(r)).join("|") + ")";
}
function ac(n) {
  return new RegExp(n.toString() + "|").exec("").length - 1;
}
function jd(n, e) {
  const t = n && n.exec(e);
  return t && t.index === 0;
}
const qd = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function Ks(n, { joinWith: e }) {
  let t = 0;
  return n.map((r) => {
    t += 1;
    const s = t;
    let a = nn(r), i = "";
    for (; a.length > 0; ) {
      const o = qd.exec(a);
      if (!o) {
        i += a;
        break;
      }
      i += a.substring(0, o.index), a = a.substring(o.index + o[0].length), o[0][0] === "\\" && o[1] ? i += "\\" + String(Number(o[1]) + s) : (i += o[0], o[0] === "(" && t++);
    }
    return i;
  }).map((r) => `(${r})`).join(e);
}
const Kd = /\b\B/, ic = "[a-zA-Z]\\w*", Gs = "[a-zA-Z_]\\w*", oc = "\\b\\d+(\\.\\d+)?", cc = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", lc = "\\b(0b[01]+)", Gd = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", Wd = (n = {}) => {
  const e = /^#![ ]*\//;
  return n.binary && (n.begin = At(
    e,
    /.*\b/,
    n.binary,
    /\b.*/
  )), ht({
    scope: "meta",
    begin: e,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (t, r) => {
      t.index !== 0 && r.ignoreMatch();
    }
  }, n);
}, rn = {
  begin: "\\\\[\\s\\S]",
  relevance: 0
}, Yd = {
  scope: "string",
  begin: "'",
  end: "'",
  illegal: "\\n",
  contains: [rn]
}, Zd = {
  scope: "string",
  begin: '"',
  end: '"',
  illegal: "\\n",
  contains: [rn]
}, Qd = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
}, Xn = function(n, e, t = {}) {
  const r = ht(
    {
      scope: "comment",
      begin: n,
      end: e,
      contains: []
    },
    t
  );
  r.contains.push({
    scope: "doctag",
    // hack to avoid the space from being included. the space is necessary to
    // match here to prevent the plain text rule below from gobbling up doctags
    begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: !0,
    relevance: 0
  });
  const s = qs(
    // list of common 1 and 2 letter words in English
    "I",
    "a",
    "is",
    "so",
    "us",
    "to",
    "at",
    "if",
    "in",
    "it",
    "on",
    // note: this is not an exhaustive list of contractions, just popular ones
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
    // contractions - can't we'd they're let's, etc
    /[A-Za-z]+[-][a-z]+/,
    // `no-way`, etc.
    /[A-Za-z][a-z]{2,}/
    // allow capitalized words at beginning of sentences
  );
  return r.contains.push(
    {
      // TODO: how to include ", (, ) without breaking grammars that use these for
      // comment delimiters?
      // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
      // ---
      // this tries to find sequences of 3 english words in a row (without any
      // "programming" type syntax) this gives us a strong signal that we've
      // TRULY found a comment - vs perhaps scanning with the wrong language.
      // It's possible to find something that LOOKS like the start of the
      // comment - but then if there is no readable text - good chance it is a
      // false match and not a comment.
      //
      // for a visual example please see:
      // https://github.com/highlightjs/highlight.js/issues/2827
      begin: At(
        /[ ]+/,
        // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
        "(",
        s,
        /[.]?[:]?([.][ ]|[ ])/,
        "){3}"
      )
      // look for 3 words in a row
    }
  ), r;
}, Xd = Xn("//", "$"), Vd = Xn("/\\*", "\\*/"), Jd = Xn("#", "$"), ep = {
  scope: "number",
  begin: oc,
  relevance: 0
}, tp = {
  scope: "number",
  begin: cc,
  relevance: 0
}, np = {
  scope: "number",
  begin: lc,
  relevance: 0
}, rp = {
  scope: "regexp",
  begin: /\/(?=[^/\n]*\/)/,
  end: /\/[gimuy]*/,
  contains: [
    rn,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [rn]
    }
  ]
}, sp = {
  scope: "title",
  begin: ic,
  relevance: 0
}, ap = {
  scope: "title",
  begin: Gs,
  relevance: 0
}, ip = {
  // excludes method names from keyword processing
  begin: "\\.\\s*" + Gs,
  relevance: 0
}, op = function(n) {
  return Object.assign(
    n,
    {
      /** @type {ModeCallback} */
      "on:begin": (e, t) => {
        t.data._beginMatch = e[1];
      },
      /** @type {ModeCallback} */
      "on:end": (e, t) => {
        t.data._beginMatch !== e[1] && t.ignoreMatch();
      }
    }
  );
};
var Tn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: Yd,
  BACKSLASH_ESCAPE: rn,
  BINARY_NUMBER_MODE: np,
  BINARY_NUMBER_RE: lc,
  COMMENT: Xn,
  C_BLOCK_COMMENT_MODE: Vd,
  C_LINE_COMMENT_MODE: Xd,
  C_NUMBER_MODE: tp,
  C_NUMBER_RE: cc,
  END_SAME_AS_BEGIN: op,
  HASH_COMMENT_MODE: Jd,
  IDENT_RE: ic,
  MATCH_NOTHING_RE: Kd,
  METHOD_GUARD: ip,
  NUMBER_MODE: ep,
  NUMBER_RE: oc,
  PHRASAL_WORDS_MODE: Qd,
  QUOTE_STRING_MODE: Zd,
  REGEXP_MODE: rp,
  RE_STARTERS_RE: Gd,
  SHEBANG: Wd,
  TITLE_MODE: sp,
  UNDERSCORE_IDENT_RE: Gs,
  UNDERSCORE_TITLE_MODE: ap
});
function cp(n, e) {
  n.input[n.index - 1] === "." && e.ignoreMatch();
}
function lp(n, e) {
  n.className !== void 0 && (n.scope = n.className, delete n.className);
}
function up(n, e) {
  e && n.beginKeywords && (n.begin = "\\b(" + n.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", n.__beforeBegin = cp, n.keywords = n.keywords || n.beginKeywords, delete n.beginKeywords, n.relevance === void 0 && (n.relevance = 0));
}
function dp(n, e) {
  Array.isArray(n.illegal) && (n.illegal = qs(...n.illegal));
}
function pp(n, e) {
  if (n.match) {
    if (n.begin || n.end) throw new Error("begin & end are not supported with match");
    n.begin = n.match, delete n.match;
  }
}
function mp(n, e) {
  n.relevance === void 0 && (n.relevance = 1);
}
const hp = (n, e) => {
  if (!n.beforeMatch) return;
  if (n.starts) throw new Error("beforeMatch cannot be used with starts");
  const t = Object.assign({}, n);
  Object.keys(n).forEach((r) => {
    delete n[r];
  }), n.keywords = t.keywords, n.begin = At(t.beforeMatch, sc(t.begin)), n.starts = {
    relevance: 0,
    contains: [
      Object.assign(t, { endsParent: !0 })
    ]
  }, n.relevance = 0, delete t.beforeMatch;
}, gp = [
  "of",
  "and",
  "for",
  "in",
  "not",
  "or",
  "if",
  "then",
  "parent",
  // common variable name
  "list",
  // common variable name
  "value"
  // common variable name
], fp = "keyword";
function uc(n, e, t = fp) {
  const r = /* @__PURE__ */ Object.create(null);
  return typeof n == "string" ? s(t, n.split(" ")) : Array.isArray(n) ? s(t, n) : Object.keys(n).forEach(function(a) {
    Object.assign(
      r,
      uc(n[a], e, a)
    );
  }), r;
  function s(a, i) {
    e && (i = i.map((o) => o.toLowerCase())), i.forEach(function(o) {
      const u = o.split("|");
      r[u[0]] = [a, bp(u[0], u[1])];
    });
  }
}
function bp(n, e) {
  return e ? Number(e) : yp(n) ? 0 : 1;
}
function yp(n) {
  return gp.includes(n.toLowerCase());
}
const Va = {}, _t = (n) => {
  console.error(n);
}, Ja = (n, ...e) => {
  console.log(`WARN: ${n}`, ...e);
}, Rt = (n, e) => {
  Va[`${n}/${e}`] || (console.log(`Deprecated as of ${n}. ${e}`), Va[`${n}/${e}`] = !0);
}, Kn = new Error();
function dc(n, e, { key: t }) {
  let r = 0;
  const s = n[t], a = {}, i = {};
  for (let o = 1; o <= e.length; o++)
    i[o + r] = s[o], a[o + r] = !0, r += ac(e[o - 1]);
  n[t] = i, n[t]._emit = a, n[t]._multi = !0;
}
function vp(n) {
  if (Array.isArray(n.begin)) {
    if (n.skip || n.excludeBegin || n.returnBegin)
      throw _t("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Kn;
    if (typeof n.beginScope != "object" || n.beginScope === null)
      throw _t("beginScope must be object"), Kn;
    dc(n, n.begin, { key: "beginScope" }), n.begin = Ks(n.begin, { joinWith: "" });
  }
}
function Ep(n) {
  if (Array.isArray(n.end)) {
    if (n.skip || n.excludeEnd || n.returnEnd)
      throw _t("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Kn;
    if (typeof n.endScope != "object" || n.endScope === null)
      throw _t("endScope must be object"), Kn;
    dc(n, n.end, { key: "endScope" }), n.end = Ks(n.end, { joinWith: "" });
  }
}
function wp(n) {
  n.scope && typeof n.scope == "object" && n.scope !== null && (n.beginScope = n.scope, delete n.scope);
}
function xp(n) {
  wp(n), typeof n.beginScope == "string" && (n.beginScope = { _wrap: n.beginScope }), typeof n.endScope == "string" && (n.endScope = { _wrap: n.endScope }), vp(n), Ep(n);
}
function kp(n) {
  function e(i, o) {
    return new RegExp(
      nn(i),
      "m" + (n.case_insensitive ? "i" : "") + (n.unicodeRegex ? "u" : "") + (o ? "g" : "")
    );
  }
  class t {
    constructor() {
      this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
    }
    // @ts-ignore
    addRule(o, u) {
      u.position = this.position++, this.matchIndexes[this.matchAt] = u, this.regexes.push([u, o]), this.matchAt += ac(o) + 1;
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null);
      const o = this.regexes.map((u) => u[1]);
      this.matcherRe = e(Ks(o, { joinWith: "|" }), !0), this.lastIndex = 0;
    }
    /** @param {string} s */
    exec(o) {
      this.matcherRe.lastIndex = this.lastIndex;
      const u = this.matcherRe.exec(o);
      if (!u)
        return null;
      const l = u.findIndex((d, p) => p > 0 && d !== void 0), c = this.matchIndexes[l];
      return u.splice(0, l), Object.assign(u, c);
    }
  }
  class r {
    constructor() {
      this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
    }
    // @ts-ignore
    getMatcher(o) {
      if (this.multiRegexes[o]) return this.multiRegexes[o];
      const u = new t();
      return this.rules.slice(o).forEach(([l, c]) => u.addRule(l, c)), u.compile(), this.multiRegexes[o] = u, u;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    // @ts-ignore
    addRule(o, u) {
      this.rules.push([o, u]), u.type === "begin" && this.count++;
    }
    /** @param {string} s */
    exec(o) {
      const u = this.getMatcher(this.regexIndex);
      u.lastIndex = this.lastIndex;
      let l = u.exec(o);
      if (this.resumingScanAtSamePosition() && !(l && l.index === this.lastIndex)) {
        const c = this.getMatcher(0);
        c.lastIndex = this.lastIndex + 1, l = c.exec(o);
      }
      return l && (this.regexIndex += l.position + 1, this.regexIndex === this.count && this.considerAll()), l;
    }
  }
  function s(i) {
    const o = new r();
    return i.contains.forEach((u) => o.addRule(u.begin, { rule: u, type: "begin" })), i.terminatorEnd && o.addRule(i.terminatorEnd, { type: "end" }), i.illegal && o.addRule(i.illegal, { type: "illegal" }), o;
  }
  function a(i, o) {
    const u = (
      /** @type CompiledMode */
      i
    );
    if (i.isCompiled) return u;
    [
      lp,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      pp,
      xp,
      hp
    ].forEach((c) => c(i, o)), n.compilerExtensions.forEach((c) => c(i, o)), i.__beforeBegin = null, [
      up,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      dp,
      // default to 1 relevance if not specified
      mp
    ].forEach((c) => c(i, o)), i.isCompiled = !0;
    let l = null;
    return typeof i.keywords == "object" && i.keywords.$pattern && (i.keywords = Object.assign({}, i.keywords), l = i.keywords.$pattern, delete i.keywords.$pattern), l = l || /\w+/, i.keywords && (i.keywords = uc(i.keywords, n.case_insensitive)), u.keywordPatternRe = e(l, !0), o && (i.begin || (i.begin = /\B|\b/), u.beginRe = e(u.begin), !i.end && !i.endsWithParent && (i.end = /\B|\b/), i.end && (u.endRe = e(u.end)), u.terminatorEnd = nn(u.end) || "", i.endsWithParent && o.terminatorEnd && (u.terminatorEnd += (i.end ? "|" : "") + o.terminatorEnd)), i.illegal && (u.illegalRe = e(
      /** @type {RegExp | string} */
      i.illegal
    )), i.contains || (i.contains = []), i.contains = [].concat(...i.contains.map(function(c) {
      return Sp(c === "self" ? i : c);
    })), i.contains.forEach(function(c) {
      a(
        /** @type Mode */
        c,
        u
      );
    }), i.starts && a(i.starts, o), u.matcher = s(u), u;
  }
  if (n.compilerExtensions || (n.compilerExtensions = []), n.contains && n.contains.includes("self"))
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  return n.classNameAliases = ht(n.classNameAliases || {}), a(
    /** @type Mode */
    n
  );
}
function pc(n) {
  return n ? n.endsWithParent || pc(n.starts) : !1;
}
function Sp(n) {
  return n.variants && !n.cachedVariants && (n.cachedVariants = n.variants.map(function(e) {
    return ht(n, { variants: null }, e);
  })), n.cachedVariants ? n.cachedVariants : pc(n) ? ht(n, { starts: n.starts ? ht(n.starts) : null }) : Object.isFrozen(n) ? ht(n) : n;
}
var _p = "11.10.0";
class Cp extends Error {
  constructor(e, t) {
    super(e), this.name = "HTMLInjectionError", this.html = t;
  }
}
const lr = rc, ei = ht, ti = Symbol("nomatch"), Tp = 7, mc = function(n) {
  const e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null), r = [];
  let s = !0;
  const a = "Could not find the language '{}', did you forget to load/include a language module?", i = { disableAutodetect: !0, name: "Plain text", contains: [] };
  let o = {
    ignoreUnescapedHTML: !1,
    throwUnescapedHTML: !1,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: "hljs-",
    cssSelector: "pre code",
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: Fd
  };
  function u(C) {
    return o.noHighlightRe.test(C);
  }
  function l(C) {
    let L = C.className + " ";
    L += C.parentNode ? C.parentNode.className : "";
    const N = o.languageDetectRe.exec(L);
    if (N) {
      const k = T(N[1]);
      return k || (Ja(a.replace("{}", N[1])), Ja("Falling back to no-highlight mode for this block.", C)), k ? N[1] : "no-highlight";
    }
    return L.split(/\s+/).find((k) => u(k) || T(k));
  }
  function c(C, L, N) {
    let k = "", O = "";
    typeof L == "object" ? (k = C, N = L.ignoreIllegals, O = L.language) : (Rt("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Rt("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), O = C, k = L), N === void 0 && (N = !0);
    const j = {
      code: k,
      language: O
    };
    W("before:highlight", j);
    const X = j.result ? j.result : d(j.language, j.code, N);
    return X.code = j.code, W("after:highlight", X), X;
  }
  function d(C, L, N, k) {
    const O = /* @__PURE__ */ Object.create(null);
    function j(M, K) {
      return M.keywords[K];
    }
    function X() {
      if (!q.keywords) {
        ce.addText(re);
        return;
      }
      let M = 0;
      q.keywordPatternRe.lastIndex = 0;
      let K = q.keywordPatternRe.exec(re), ie = "";
      for (; K; ) {
        ie += re.substring(M, K.index);
        const pe = _.case_insensitive ? K[0].toLowerCase() : K[0], Me = j(q, pe);
        if (Me) {
          const [He, ot] = Me;
          if (ce.addText(ie), ie = "", O[pe] = (O[pe] || 0) + 1, O[pe] <= Tp && (Re += ot), He.startsWith("_"))
            ie += K[0];
          else {
            const tt = _.classNameAliases[He] || He;
            Y(K[0], tt);
          }
        } else
          ie += K[0];
        M = q.keywordPatternRe.lastIndex, K = q.keywordPatternRe.exec(re);
      }
      ie += re.substring(M), ce.addText(ie);
    }
    function ee() {
      if (re === "") return;
      let M = null;
      if (typeof q.subLanguage == "string") {
        if (!e[q.subLanguage]) {
          ce.addText(re);
          return;
        }
        M = d(q.subLanguage, re, !0, xe[q.subLanguage]), xe[q.subLanguage] = /** @type {CompiledMode} */
        M._top;
      } else
        M = m(re, q.subLanguage.length ? q.subLanguage : null);
      q.relevance > 0 && (Re += M.relevance), ce.__addSublanguage(M._emitter, M.language);
    }
    function te() {
      q.subLanguage != null ? ee() : X(), re = "";
    }
    function Y(M, K) {
      M !== "" && (ce.startScope(K), ce.addText(M), ce.endScope());
    }
    function V(M, K) {
      let ie = 1;
      const pe = K.length - 1;
      for (; ie <= pe; ) {
        if (!M._emit[ie]) {
          ie++;
          continue;
        }
        const Me = _.classNameAliases[M[ie]] || M[ie], He = K[ie];
        Me ? Y(He, Me) : (re = He, X(), re = ""), ie++;
      }
    }
    function Q(M, K) {
      return M.scope && typeof M.scope == "string" && ce.openNode(_.classNameAliases[M.scope] || M.scope), M.beginScope && (M.beginScope._wrap ? (Y(re, _.classNameAliases[M.beginScope._wrap] || M.beginScope._wrap), re = "") : M.beginScope._multi && (V(M.beginScope, K), re = "")), q = Object.create(M, { parent: { value: q } }), q;
    }
    function ae(M, K, ie) {
      let pe = jd(M.endRe, ie);
      if (pe) {
        if (M["on:end"]) {
          const Me = new Za(M);
          M["on:end"](K, Me), Me.isMatchIgnored && (pe = !1);
        }
        if (pe) {
          for (; M.endsParent && M.parent; )
            M = M.parent;
          return M;
        }
      }
      if (M.endsWithParent)
        return ae(M.parent, K, ie);
    }
    function ne(M) {
      return q.matcher.regexIndex === 0 ? (re += M[0], 1) : (me = !0, 0);
    }
    function fe(M) {
      const K = M[0], ie = M.rule, pe = new Za(ie), Me = [ie.__beforeBegin, ie["on:begin"]];
      for (const He of Me)
        if (He && (He(M, pe), pe.isMatchIgnored))
          return ne(K);
      return ie.skip ? re += K : (ie.excludeBegin && (re += K), te(), !ie.returnBegin && !ie.excludeBegin && (re = K)), Q(ie, M), ie.returnBegin ? 0 : K.length;
    }
    function U(M) {
      const K = M[0], ie = L.substring(M.index), pe = ae(q, M, ie);
      if (!pe)
        return ti;
      const Me = q;
      q.endScope && q.endScope._wrap ? (te(), Y(K, q.endScope._wrap)) : q.endScope && q.endScope._multi ? (te(), V(q.endScope, M)) : Me.skip ? re += K : (Me.returnEnd || Me.excludeEnd || (re += K), te(), Me.excludeEnd && (re = K));
      do
        q.scope && ce.closeNode(), !q.skip && !q.subLanguage && (Re += q.relevance), q = q.parent;
      while (q !== pe.parent);
      return pe.starts && Q(pe.starts, M), Me.returnEnd ? 0 : K.length;
    }
    function we() {
      const M = [];
      for (let K = q; K !== _; K = K.parent)
        K.scope && M.unshift(K.scope);
      M.forEach((K) => ce.openNode(K));
    }
    let ze = {};
    function $e(M, K) {
      const ie = K && K[0];
      if (re += M, ie == null)
        return te(), 0;
      if (ze.type === "begin" && K.type === "end" && ze.index === K.index && ie === "") {
        if (re += L.slice(K.index, K.index + 1), !s) {
          const pe = new Error(`0 width match regex (${C})`);
          throw pe.languageName = C, pe.badRule = ze.rule, pe;
        }
        return 1;
      }
      if (ze = K, K.type === "begin")
        return fe(K);
      if (K.type === "illegal" && !N) {
        const pe = new Error('Illegal lexeme "' + ie + '" for mode "' + (q.scope || "<unnamed>") + '"');
        throw pe.mode = q, pe;
      } else if (K.type === "end") {
        const pe = U(K);
        if (pe !== ti)
          return pe;
      }
      if (K.type === "illegal" && ie === "")
        return 1;
      if (J > 1e5 && J > K.index * 3)
        throw new Error("potential infinite loop, way more iterations than matches");
      return re += ie, ie.length;
    }
    const _ = T(C);
    if (!_)
      throw _t(a.replace("{}", C)), new Error('Unknown language: "' + C + '"');
    const G = kp(_);
    let se = "", q = k || G;
    const xe = {}, ce = new o.__emitter(o);
    we();
    let re = "", Re = 0, B = 0, J = 0, me = !1;
    try {
      if (_.__emitTokens)
        _.__emitTokens(L, ce);
      else {
        for (q.matcher.considerAll(); ; ) {
          J++, me ? me = !1 : q.matcher.considerAll(), q.matcher.lastIndex = B;
          const M = q.matcher.exec(L);
          if (!M) break;
          const K = L.substring(B, M.index), ie = $e(K, M);
          B = M.index + ie;
        }
        $e(L.substring(B));
      }
      return ce.finalize(), se = ce.toHTML(), {
        language: C,
        value: se,
        relevance: Re,
        illegal: !1,
        _emitter: ce,
        _top: q
      };
    } catch (M) {
      if (M.message && M.message.includes("Illegal"))
        return {
          language: C,
          value: lr(L),
          illegal: !0,
          relevance: 0,
          _illegalBy: {
            message: M.message,
            index: B,
            context: L.slice(B - 100, B + 100),
            mode: M.mode,
            resultSoFar: se
          },
          _emitter: ce
        };
      if (s)
        return {
          language: C,
          value: lr(L),
          illegal: !1,
          relevance: 0,
          errorRaised: M,
          _emitter: ce,
          _top: q
        };
      throw M;
    }
  }
  function p(C) {
    const L = {
      value: lr(C),
      illegal: !1,
      relevance: 0,
      _top: i,
      _emitter: new o.__emitter(o)
    };
    return L._emitter.addText(C), L;
  }
  function m(C, L) {
    L = L || o.languages || Object.keys(e);
    const N = p(C), k = L.filter(T).filter($).map(
      (te) => d(te, C, !1)
    );
    k.unshift(N);
    const O = k.sort((te, Y) => {
      if (te.relevance !== Y.relevance) return Y.relevance - te.relevance;
      if (te.language && Y.language) {
        if (T(te.language).supersetOf === Y.language)
          return 1;
        if (T(Y.language).supersetOf === te.language)
          return -1;
      }
      return 0;
    }), [j, X] = O, ee = j;
    return ee.secondBest = X, ee;
  }
  function h(C, L, N) {
    const k = L && t[L] || N;
    C.classList.add("hljs"), C.classList.add(`language-${k}`);
  }
  function g(C) {
    let L = null;
    const N = l(C);
    if (u(N)) return;
    if (W(
      "before:highlightElement",
      { el: C, language: N }
    ), C.dataset.highlighted) {
      console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", C);
      return;
    }
    if (C.children.length > 0 && (o.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(C)), o.throwUnescapedHTML))
      throw new Cp(
        "One of your code blocks includes unescaped HTML.",
        C.innerHTML
      );
    L = C;
    const k = L.textContent, O = N ? c(k, { language: N, ignoreIllegals: !0 }) : m(k);
    C.innerHTML = O.value, C.dataset.highlighted = "yes", h(C, N, O.language), C.result = {
      language: O.language,
      // TODO: remove with version 11.0
      re: O.relevance,
      relevance: O.relevance
    }, O.secondBest && (C.secondBest = {
      language: O.secondBest.language,
      relevance: O.secondBest.relevance
    }), W("after:highlightElement", { el: C, result: O, text: k });
  }
  function f(C) {
    o = ei(o, C);
  }
  const E = () => {
    S(), Rt("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };
  function b() {
    S(), Rt("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }
  let y = !1;
  function S() {
    if (document.readyState === "loading") {
      y = !0;
      return;
    }
    document.querySelectorAll(o.cssSelector).forEach(g);
  }
  function w() {
    y && S();
  }
  typeof window < "u" && window.addEventListener && window.addEventListener("DOMContentLoaded", w, !1);
  function I(C, L) {
    let N = null;
    try {
      N = L(n);
    } catch (k) {
      if (_t("Language definition for '{}' could not be registered.".replace("{}", C)), s)
        _t(k);
      else
        throw k;
      N = i;
    }
    N.name || (N.name = C), e[C] = N, N.rawDefinition = L.bind(null, n), N.aliases && A(N.aliases, { languageName: C });
  }
  function z(C) {
    delete e[C];
    for (const L of Object.keys(t))
      t[L] === C && delete t[L];
  }
  function R() {
    return Object.keys(e);
  }
  function T(C) {
    return C = (C || "").toLowerCase(), e[C] || e[t[C]];
  }
  function A(C, { languageName: L }) {
    typeof C == "string" && (C = [C]), C.forEach((N) => {
      t[N.toLowerCase()] = L;
    });
  }
  function $(C) {
    const L = T(C);
    return L && !L.disableAutodetect;
  }
  function D(C) {
    C["before:highlightBlock"] && !C["before:highlightElement"] && (C["before:highlightElement"] = (L) => {
      C["before:highlightBlock"](
        Object.assign({ block: L.el }, L)
      );
    }), C["after:highlightBlock"] && !C["after:highlightElement"] && (C["after:highlightElement"] = (L) => {
      C["after:highlightBlock"](
        Object.assign({ block: L.el }, L)
      );
    });
  }
  function H(C) {
    D(C), r.push(C);
  }
  function P(C) {
    const L = r.indexOf(C);
    L !== -1 && r.splice(L, 1);
  }
  function W(C, L) {
    const N = C;
    r.forEach(function(k) {
      k[N] && k[N](L);
    });
  }
  function oe(C) {
    return Rt("10.7.0", "highlightBlock will be removed entirely in v12.0"), Rt("10.7.0", "Please use highlightElement now."), g(C);
  }
  Object.assign(n, {
    highlight: c,
    highlightAuto: m,
    highlightAll: S,
    highlightElement: g,
    // TODO: Remove with v12 API
    highlightBlock: oe,
    configure: f,
    initHighlighting: E,
    initHighlightingOnLoad: b,
    registerLanguage: I,
    unregisterLanguage: z,
    listLanguages: R,
    getLanguage: T,
    registerAliases: A,
    autoDetection: $,
    inherit: ei,
    addPlugin: H,
    removePlugin: P
  }), n.debugMode = function() {
    s = !1;
  }, n.safeMode = function() {
    s = !0;
  }, n.versionString = _p, n.regex = {
    concat: At,
    lookahead: sc,
    either: qs,
    optional: $d,
    anyNumberOfTimes: Ud
  };
  for (const C in Tn)
    typeof Tn[C] == "object" && nc(Tn[C]);
  return Object.assign(n, Tn), n;
}, Pt = mc({});
Pt.newInstance = () => mc({});
var Ap = Pt;
Pt.HighlightJS = Pt;
Pt.default = Pt;
var ur, ni;
function Ip() {
  if (ni) return ur;
  ni = 1;
  function n(e) {
    const t = e.regex, r = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), s = /[\p{L}0-9._:-]+/u, a = {
      className: "symbol",
      begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
    }, i = {
      begin: /\s/,
      contains: [
        {
          className: "keyword",
          begin: /#?[a-z_][a-z1-9_-]+/,
          illegal: /\n/
        }
      ]
    }, o = e.inherit(i, {
      begin: /\(/,
      end: /\)/
    }), u = e.inherit(e.APOS_STRING_MODE, { className: "string" }), l = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), c = {
      endsWithParent: !0,
      illegal: /</,
      relevance: 0,
      contains: [
        {
          className: "attr",
          begin: s,
          relevance: 0
        },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: "string",
              endsParent: !0,
              variants: [
                {
                  begin: /"/,
                  end: /"/,
                  contains: [a]
                },
                {
                  begin: /'/,
                  end: /'/,
                  contains: [a]
                },
                { begin: /[^\s"'=<>`]+/ }
              ]
            }
          ]
        }
      ]
    };
    return {
      name: "HTML, XML",
      aliases: [
        "html",
        "xhtml",
        "rss",
        "atom",
        "xjb",
        "xsd",
        "xsl",
        "plist",
        "wsf",
        "svg"
      ],
      case_insensitive: !0,
      unicodeRegex: !0,
      contains: [
        {
          className: "meta",
          begin: /<![a-z]/,
          end: />/,
          relevance: 10,
          contains: [
            i,
            l,
            u,
            o,
            {
              begin: /\[/,
              end: /\]/,
              contains: [
                {
                  className: "meta",
                  begin: /<![a-z]/,
                  end: />/,
                  contains: [
                    i,
                    o,
                    l,
                    u
                  ]
                }
              ]
            }
          ]
        },
        e.COMMENT(
          /<!--/,
          /-->/,
          { relevance: 10 }
        ),
        {
          begin: /<!\[CDATA\[/,
          end: /\]\]>/,
          relevance: 10
        },
        a,
        // xml processing instructions
        {
          className: "meta",
          end: /\?>/,
          variants: [
            {
              begin: /<\?xml/,
              relevance: 10,
              contains: [
                l
              ]
            },
            {
              begin: /<\?[a-z][a-z0-9]+/
            }
          ]
        },
        {
          className: "tag",
          /*
          The lookahead pattern (?=...) ensures that 'begin' only matches
          '<style' as a single word, followed by a whitespace or an
          ending bracket.
          */
          begin: /<style(?=\s|>)/,
          end: />/,
          keywords: { name: "style" },
          contains: [c],
          starts: {
            end: /<\/style>/,
            returnEnd: !0,
            subLanguage: [
              "css",
              "xml"
            ]
          }
        },
        {
          className: "tag",
          // See the comment in the <style tag about the lookahead pattern
          begin: /<script(?=\s|>)/,
          end: />/,
          keywords: { name: "script" },
          contains: [c],
          starts: {
            end: /<\/script>/,
            returnEnd: !0,
            subLanguage: [
              "javascript",
              "handlebars",
              "xml"
            ]
          }
        },
        // we need this for now for jSX
        {
          className: "tag",
          begin: /<>|<\/>/
        },
        // open tag
        {
          className: "tag",
          begin: t.concat(
            /</,
            t.lookahead(t.concat(
              r,
              // <tag/>
              // <tag>
              // <tag ...
              t.either(/\/>/, />/, /\s/)
            ))
          ),
          end: /\/?>/,
          contains: [
            {
              className: "name",
              begin: r,
              relevance: 0,
              starts: c
            }
          ]
        },
        // close tag
        {
          className: "tag",
          begin: t.concat(
            /<\//,
            t.lookahead(t.concat(
              r,
              />/
            ))
          ),
          contains: [
            {
              className: "name",
              begin: r,
              relevance: 0
            },
            {
              begin: />/,
              relevance: 0,
              endsParent: !0
            }
          ]
        }
      ]
    };
  }
  return ur = n, ur;
}
var dr, ri;
function Rp() {
  if (ri) return dr;
  ri = 1;
  function n(e) {
    const t = e.regex, r = {}, s = {
      begin: /\$\{/,
      end: /\}/,
      contains: [
        "self",
        {
          begin: /:-/,
          contains: [r]
        }
        // default values
      ]
    };
    Object.assign(r, {
      className: "variable",
      variants: [
        { begin: t.concat(
          /\$[\w\d#@][\w\d_]*/,
          // negative look-ahead tries to avoid matching patterns that are not
          // Perl at all like $ident$, @ident@, etc.
          "(?![\\w\\d])(?![$])"
        ) },
        s
      ]
    });
    const a = {
      className: "subst",
      begin: /\$\(/,
      end: /\)/,
      contains: [e.BACKSLASH_ESCAPE]
    }, i = e.inherit(
      e.COMMENT(),
      {
        match: [
          /(^|\s)/,
          /#.*$/
        ],
        scope: {
          2: "comment"
        }
      }
    ), o = {
      begin: /<<-?\s*(?=\w+)/,
      starts: { contains: [
        e.END_SAME_AS_BEGIN({
          begin: /(\w+)/,
          end: /(\w+)/,
          className: "string"
        })
      ] }
    }, u = {
      className: "string",
      begin: /"/,
      end: /"/,
      contains: [
        e.BACKSLASH_ESCAPE,
        r,
        a
      ]
    };
    a.contains.push(u);
    const l = {
      match: /\\"/
    }, c = {
      className: "string",
      begin: /'/,
      end: /'/
    }, d = {
      match: /\\'/
    }, p = {
      begin: /\$?\(\(/,
      end: /\)\)/,
      contains: [
        {
          begin: /\d+#[0-9a-f]+/,
          className: "number"
        },
        e.NUMBER_MODE,
        r
      ]
    }, m = [
      "fish",
      "bash",
      "zsh",
      "sh",
      "csh",
      "ksh",
      "tcsh",
      "dash",
      "scsh"
    ], h = e.SHEBANG({
      binary: `(${m.join("|")})`,
      relevance: 10
    }), g = {
      className: "function",
      begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      returnBegin: !0,
      contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
      relevance: 0
    }, f = [
      "if",
      "then",
      "else",
      "elif",
      "fi",
      "for",
      "while",
      "until",
      "in",
      "do",
      "done",
      "case",
      "esac",
      "function",
      "select"
    ], E = [
      "true",
      "false"
    ], b = { match: /(\/[a-z._-]+)+/ }, y = [
      "break",
      "cd",
      "continue",
      "eval",
      "exec",
      "exit",
      "export",
      "getopts",
      "hash",
      "pwd",
      "readonly",
      "return",
      "shift",
      "test",
      "times",
      "trap",
      "umask",
      "unset"
    ], S = [
      "alias",
      "bind",
      "builtin",
      "caller",
      "command",
      "declare",
      "echo",
      "enable",
      "help",
      "let",
      "local",
      "logout",
      "mapfile",
      "printf",
      "read",
      "readarray",
      "source",
      "sudo",
      "type",
      "typeset",
      "ulimit",
      "unalias"
    ], w = [
      "autoload",
      "bg",
      "bindkey",
      "bye",
      "cap",
      "chdir",
      "clone",
      "comparguments",
      "compcall",
      "compctl",
      "compdescribe",
      "compfiles",
      "compgroups",
      "compquote",
      "comptags",
      "comptry",
      "compvalues",
      "dirs",
      "disable",
      "disown",
      "echotc",
      "echoti",
      "emulate",
      "fc",
      "fg",
      "float",
      "functions",
      "getcap",
      "getln",
      "history",
      "integer",
      "jobs",
      "kill",
      "limit",
      "log",
      "noglob",
      "popd",
      "print",
      "pushd",
      "pushln",
      "rehash",
      "sched",
      "setcap",
      "setopt",
      "stat",
      "suspend",
      "ttyctl",
      "unfunction",
      "unhash",
      "unlimit",
      "unsetopt",
      "vared",
      "wait",
      "whence",
      "where",
      "which",
      "zcompile",
      "zformat",
      "zftp",
      "zle",
      "zmodload",
      "zparseopts",
      "zprof",
      "zpty",
      "zregexparse",
      "zsocket",
      "zstyle",
      "ztcp"
    ], I = [
      "chcon",
      "chgrp",
      "chown",
      "chmod",
      "cp",
      "dd",
      "df",
      "dir",
      "dircolors",
      "ln",
      "ls",
      "mkdir",
      "mkfifo",
      "mknod",
      "mktemp",
      "mv",
      "realpath",
      "rm",
      "rmdir",
      "shred",
      "sync",
      "touch",
      "truncate",
      "vdir",
      "b2sum",
      "base32",
      "base64",
      "cat",
      "cksum",
      "comm",
      "csplit",
      "cut",
      "expand",
      "fmt",
      "fold",
      "head",
      "join",
      "md5sum",
      "nl",
      "numfmt",
      "od",
      "paste",
      "ptx",
      "pr",
      "sha1sum",
      "sha224sum",
      "sha256sum",
      "sha384sum",
      "sha512sum",
      "shuf",
      "sort",
      "split",
      "sum",
      "tac",
      "tail",
      "tr",
      "tsort",
      "unexpand",
      "uniq",
      "wc",
      "arch",
      "basename",
      "chroot",
      "date",
      "dirname",
      "du",
      "echo",
      "env",
      "expr",
      "factor",
      // "false", // keyword literal already
      "groups",
      "hostid",
      "id",
      "link",
      "logname",
      "nice",
      "nohup",
      "nproc",
      "pathchk",
      "pinky",
      "printenv",
      "printf",
      "pwd",
      "readlink",
      "runcon",
      "seq",
      "sleep",
      "stat",
      "stdbuf",
      "stty",
      "tee",
      "test",
      "timeout",
      // "true", // keyword literal already
      "tty",
      "uname",
      "unlink",
      "uptime",
      "users",
      "who",
      "whoami",
      "yes"
    ];
    return {
      name: "Bash",
      aliases: [
        "sh",
        "zsh"
      ],
      keywords: {
        $pattern: /\b[a-z][a-z0-9._-]+\b/,
        keyword: f,
        literal: E,
        built_in: [
          ...y,
          ...S,
          // Shell modifiers
          "set",
          "shopt",
          ...w,
          ...I
        ]
      },
      contains: [
        h,
        // to catch known shells and boost relevancy
        e.SHEBANG(),
        // to catch unknown shells but still highlight the shebang
        g,
        p,
        i,
        o,
        b,
        u,
        l,
        c,
        d,
        r
      ]
    };
  }
  return dr = n, dr;
}
var pr, si;
function Op() {
  if (si) return pr;
  si = 1;
  function n(e) {
    const t = e.regex, r = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), s = "decltype\\(auto\\)", a = "[a-zA-Z_]\\w*::", o = "(" + s + "|" + t.optional(a) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", u = {
      className: "type",
      variants: [
        { begin: "\\b[a-z\\d_]*_t\\b" },
        { match: /\batomic_[a-z]{3,6}\b/ }
      ]
    }, c = {
      className: "string",
      variants: [
        {
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [e.BACKSLASH_ESCAPE]
        },
        {
          begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
          end: "'",
          illegal: "."
        },
        e.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })
      ]
    }, d = {
      className: "number",
      variants: [
        { begin: "\\b(0b[01']+)" },
        { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)" },
        { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
      ],
      relevance: 0
    }, p = {
      className: "meta",
      begin: /#\s*[a-z]+\b/,
      end: /$/,
      keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include" },
      contains: [
        {
          begin: /\\\n/,
          relevance: 0
        },
        e.inherit(c, { className: "string" }),
        {
          className: "string",
          begin: /<.*?>/
        },
        r,
        e.C_BLOCK_COMMENT_MODE
      ]
    }, m = {
      className: "title",
      begin: t.optional(a) + e.IDENT_RE,
      relevance: 0
    }, h = t.optional(a) + e.IDENT_RE + "\\s*\\(", E = {
      keyword: [
        "asm",
        "auto",
        "break",
        "case",
        "continue",
        "default",
        "do",
        "else",
        "enum",
        "extern",
        "for",
        "fortran",
        "goto",
        "if",
        "inline",
        "register",
        "restrict",
        "return",
        "sizeof",
        "typeof",
        "typeof_unqual",
        "struct",
        "switch",
        "typedef",
        "union",
        "volatile",
        "while",
        "_Alignas",
        "_Alignof",
        "_Atomic",
        "_Generic",
        "_Noreturn",
        "_Static_assert",
        "_Thread_local",
        // aliases
        "alignas",
        "alignof",
        "noreturn",
        "static_assert",
        "thread_local",
        // not a C keyword but is, for all intents and purposes, treated exactly like one.
        "_Pragma"
      ],
      type: [
        "float",
        "double",
        "signed",
        "unsigned",
        "int",
        "short",
        "long",
        "char",
        "void",
        "_Bool",
        "_BitInt",
        "_Complex",
        "_Imaginary",
        "_Decimal32",
        "_Decimal64",
        "_Decimal96",
        "_Decimal128",
        "_Decimal64x",
        "_Decimal128x",
        "_Float16",
        "_Float32",
        "_Float64",
        "_Float128",
        "_Float32x",
        "_Float64x",
        "_Float128x",
        // modifiers
        "const",
        "static",
        "constexpr",
        // aliases
        "complex",
        "bool",
        "imaginary"
      ],
      literal: "true false NULL",
      // TODO: apply hinting work similar to what was done in cpp.js
      built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
    }, b = [
      p,
      u,
      r,
      e.C_BLOCK_COMMENT_MODE,
      d,
      c
    ], y = {
      // This mode covers expression context where we can't expect a function
      // definition and shouldn't highlight anything that looks like one:
      // `return some()`, `else if()`, `(x*sum(1, 2))`
      variants: [
        {
          begin: /=/,
          end: /;/
        },
        {
          begin: /\(/,
          end: /\)/
        },
        {
          beginKeywords: "new throw return else",
          end: /;/
        }
      ],
      keywords: E,
      contains: b.concat([
        {
          begin: /\(/,
          end: /\)/,
          keywords: E,
          contains: b.concat(["self"]),
          relevance: 0
        }
      ]),
      relevance: 0
    }, S = {
      begin: "(" + o + "[\\*&\\s]+)+" + h,
      returnBegin: !0,
      end: /[{;=]/,
      excludeEnd: !0,
      keywords: E,
      illegal: /[^\w\s\*&:<>.]/,
      contains: [
        {
          // to prevent it from being confused as the function title
          begin: s,
          keywords: E,
          relevance: 0
        },
        {
          begin: h,
          returnBegin: !0,
          contains: [e.inherit(m, { className: "title.function" })],
          relevance: 0
        },
        // allow for multiple declarations, e.g.:
        // extern void f(int), g(char);
        {
          relevance: 0,
          match: /,/
        },
        {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: E,
          relevance: 0,
          contains: [
            r,
            e.C_BLOCK_COMMENT_MODE,
            c,
            d,
            u,
            // Count matching parentheses.
            {
              begin: /\(/,
              end: /\)/,
              keywords: E,
              relevance: 0,
              contains: [
                "self",
                r,
                e.C_BLOCK_COMMENT_MODE,
                c,
                d,
                u
              ]
            }
          ]
        },
        u,
        r,
        e.C_BLOCK_COMMENT_MODE,
        p
      ]
    };
    return {
      name: "C",
      aliases: ["h"],
      keywords: E,
      // Until differentiations are added between `c` and `cpp`, `c` will
      // not be auto-detected to avoid auto-detect conflicts between C and C++
      disableAutodetect: !0,
      illegal: "</",
      contains: [].concat(
        y,
        S,
        b,
        [
          p,
          {
            begin: e.IDENT_RE + "::",
            keywords: E
          },
          {
            className: "class",
            beginKeywords: "enum class struct union",
            end: /[{;:<>=]/,
            contains: [
              { beginKeywords: "final class struct" },
              e.TITLE_MODE
            ]
          }
        ]
      ),
      exports: {
        preprocessor: p,
        strings: c,
        keywords: E
      }
    };
  }
  return pr = n, pr;
}
var mr, ai;
function Np() {
  if (ai) return mr;
  ai = 1;
  function n(e) {
    const t = e.regex, r = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), s = "decltype\\(auto\\)", a = "[a-zA-Z_]\\w*::", o = "(?!struct)(" + s + "|" + t.optional(a) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", u = {
      className: "type",
      begin: "\\b[a-z\\d_]*_t\\b"
    }, c = {
      className: "string",
      variants: [
        {
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [e.BACKSLASH_ESCAPE]
        },
        {
          begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
          end: "'",
          illegal: "."
        },
        e.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })
      ]
    }, d = {
      className: "number",
      variants: [
        // Floating-point literal.
        {
          begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"
        },
        // Integer literal.
        {
          begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"
          // Note: there are user-defined literal suffixes too, but perhaps having the custom suffix not part of the
          // literal highlight actually makes it stand out more.
        }
      ],
      relevance: 0
    }, p = {
      className: "meta",
      begin: /#\s*[a-z]+\b/,
      end: /$/,
      keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
      contains: [
        {
          begin: /\\\n/,
          relevance: 0
        },
        e.inherit(c, { className: "string" }),
        {
          className: "string",
          begin: /<.*?>/
        },
        r,
        e.C_BLOCK_COMMENT_MODE
      ]
    }, m = {
      className: "title",
      begin: t.optional(a) + e.IDENT_RE,
      relevance: 0
    }, h = t.optional(a) + e.IDENT_RE + "\\s*\\(", g = [
      "alignas",
      "alignof",
      "and",
      "and_eq",
      "asm",
      "atomic_cancel",
      "atomic_commit",
      "atomic_noexcept",
      "auto",
      "bitand",
      "bitor",
      "break",
      "case",
      "catch",
      "class",
      "co_await",
      "co_return",
      "co_yield",
      "compl",
      "concept",
      "const_cast|10",
      "consteval",
      "constexpr",
      "constinit",
      "continue",
      "decltype",
      "default",
      "delete",
      "do",
      "dynamic_cast|10",
      "else",
      "enum",
      "explicit",
      "export",
      "extern",
      "false",
      "final",
      "for",
      "friend",
      "goto",
      "if",
      "import",
      "inline",
      "module",
      "mutable",
      "namespace",
      "new",
      "noexcept",
      "not",
      "not_eq",
      "nullptr",
      "operator",
      "or",
      "or_eq",
      "override",
      "private",
      "protected",
      "public",
      "reflexpr",
      "register",
      "reinterpret_cast|10",
      "requires",
      "return",
      "sizeof",
      "static_assert",
      "static_cast|10",
      "struct",
      "switch",
      "synchronized",
      "template",
      "this",
      "thread_local",
      "throw",
      "transaction_safe",
      "transaction_safe_dynamic",
      "true",
      "try",
      "typedef",
      "typeid",
      "typename",
      "union",
      "using",
      "virtual",
      "volatile",
      "while",
      "xor",
      "xor_eq"
    ], f = [
      "bool",
      "char",
      "char16_t",
      "char32_t",
      "char8_t",
      "double",
      "float",
      "int",
      "long",
      "short",
      "void",
      "wchar_t",
      "unsigned",
      "signed",
      "const",
      "static"
    ], E = [
      "any",
      "auto_ptr",
      "barrier",
      "binary_semaphore",
      "bitset",
      "complex",
      "condition_variable",
      "condition_variable_any",
      "counting_semaphore",
      "deque",
      "false_type",
      "future",
      "imaginary",
      "initializer_list",
      "istringstream",
      "jthread",
      "latch",
      "lock_guard",
      "multimap",
      "multiset",
      "mutex",
      "optional",
      "ostringstream",
      "packaged_task",
      "pair",
      "promise",
      "priority_queue",
      "queue",
      "recursive_mutex",
      "recursive_timed_mutex",
      "scoped_lock",
      "set",
      "shared_future",
      "shared_lock",
      "shared_mutex",
      "shared_timed_mutex",
      "shared_ptr",
      "stack",
      "string_view",
      "stringstream",
      "timed_mutex",
      "thread",
      "true_type",
      "tuple",
      "unique_lock",
      "unique_ptr",
      "unordered_map",
      "unordered_multimap",
      "unordered_multiset",
      "unordered_set",
      "variant",
      "vector",
      "weak_ptr",
      "wstring",
      "wstring_view"
    ], b = [
      "abort",
      "abs",
      "acos",
      "apply",
      "as_const",
      "asin",
      "atan",
      "atan2",
      "calloc",
      "ceil",
      "cerr",
      "cin",
      "clog",
      "cos",
      "cosh",
      "cout",
      "declval",
      "endl",
      "exchange",
      "exit",
      "exp",
      "fabs",
      "floor",
      "fmod",
      "forward",
      "fprintf",
      "fputs",
      "free",
      "frexp",
      "fscanf",
      "future",
      "invoke",
      "isalnum",
      "isalpha",
      "iscntrl",
      "isdigit",
      "isgraph",
      "islower",
      "isprint",
      "ispunct",
      "isspace",
      "isupper",
      "isxdigit",
      "labs",
      "launder",
      "ldexp",
      "log",
      "log10",
      "make_pair",
      "make_shared",
      "make_shared_for_overwrite",
      "make_tuple",
      "make_unique",
      "malloc",
      "memchr",
      "memcmp",
      "memcpy",
      "memset",
      "modf",
      "move",
      "pow",
      "printf",
      "putchar",
      "puts",
      "realloc",
      "scanf",
      "sin",
      "sinh",
      "snprintf",
      "sprintf",
      "sqrt",
      "sscanf",
      "std",
      "stderr",
      "stdin",
      "stdout",
      "strcat",
      "strchr",
      "strcmp",
      "strcpy",
      "strcspn",
      "strlen",
      "strncat",
      "strncmp",
      "strncpy",
      "strpbrk",
      "strrchr",
      "strspn",
      "strstr",
      "swap",
      "tan",
      "tanh",
      "terminate",
      "to_underlying",
      "tolower",
      "toupper",
      "vfprintf",
      "visit",
      "vprintf",
      "vsprintf"
    ], w = {
      type: f,
      keyword: g,
      literal: [
        "NULL",
        "false",
        "nullopt",
        "nullptr",
        "true"
      ],
      built_in: ["_Pragma"],
      _type_hints: E
    }, I = {
      className: "function.dispatch",
      relevance: 0,
      keywords: {
        // Only for relevance, not highlighting.
        _hint: b
      },
      begin: t.concat(
        /\b/,
        /(?!decltype)/,
        /(?!if)/,
        /(?!for)/,
        /(?!switch)/,
        /(?!while)/,
        e.IDENT_RE,
        t.lookahead(/(<[^<>]+>|)\s*\(/)
      )
    }, z = [
      I,
      p,
      u,
      r,
      e.C_BLOCK_COMMENT_MODE,
      d,
      c
    ], R = {
      // This mode covers expression context where we can't expect a function
      // definition and shouldn't highlight anything that looks like one:
      // `return some()`, `else if()`, `(x*sum(1, 2))`
      variants: [
        {
          begin: /=/,
          end: /;/
        },
        {
          begin: /\(/,
          end: /\)/
        },
        {
          beginKeywords: "new throw return else",
          end: /;/
        }
      ],
      keywords: w,
      contains: z.concat([
        {
          begin: /\(/,
          end: /\)/,
          keywords: w,
          contains: z.concat(["self"]),
          relevance: 0
        }
      ]),
      relevance: 0
    }, T = {
      className: "function",
      begin: "(" + o + "[\\*&\\s]+)+" + h,
      returnBegin: !0,
      end: /[{;=]/,
      excludeEnd: !0,
      keywords: w,
      illegal: /[^\w\s\*&:<>.]/,
      contains: [
        {
          // to prevent it from being confused as the function title
          begin: s,
          keywords: w,
          relevance: 0
        },
        {
          begin: h,
          returnBegin: !0,
          contains: [m],
          relevance: 0
        },
        // needed because we do not have look-behind on the below rule
        // to prevent it from grabbing the final : in a :: pair
        {
          begin: /::/,
          relevance: 0
        },
        // initializers
        {
          begin: /:/,
          endsWithParent: !0,
          contains: [
            c,
            d
          ]
        },
        // allow for multiple declarations, e.g.:
        // extern void f(int), g(char);
        {
          relevance: 0,
          match: /,/
        },
        {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: w,
          relevance: 0,
          contains: [
            r,
            e.C_BLOCK_COMMENT_MODE,
            c,
            d,
            u,
            // Count matching parentheses.
            {
              begin: /\(/,
              end: /\)/,
              keywords: w,
              relevance: 0,
              contains: [
                "self",
                r,
                e.C_BLOCK_COMMENT_MODE,
                c,
                d,
                u
              ]
            }
          ]
        },
        u,
        r,
        e.C_BLOCK_COMMENT_MODE,
        p
      ]
    };
    return {
      name: "C++",
      aliases: [
        "cc",
        "c++",
        "h++",
        "hpp",
        "hh",
        "hxx",
        "cxx"
      ],
      keywords: w,
      illegal: "</",
      classNameAliases: { "function.dispatch": "built_in" },
      contains: [].concat(
        R,
        T,
        I,
        z,
        [
          p,
          {
            // containers: ie, `vector <int> rooms (9);`
            begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
            end: ">",
            keywords: w,
            contains: [
              "self",
              u
            ]
          },
          {
            begin: e.IDENT_RE + "::",
            keywords: w
          },
          {
            match: [
              // extra complexity to deal with `enum class` and `enum struct`
              /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
              /\s+/,
              /\w+/
            ],
            className: {
              1: "keyword",
              3: "title.class"
            }
          }
        ]
      )
    };
  }
  return mr = n, mr;
}
var hr, ii;
function Mp() {
  if (ii) return hr;
  ii = 1;
  function n(e) {
    const t = [
      "bool",
      "byte",
      "char",
      "decimal",
      "delegate",
      "double",
      "dynamic",
      "enum",
      "float",
      "int",
      "long",
      "nint",
      "nuint",
      "object",
      "sbyte",
      "short",
      "string",
      "ulong",
      "uint",
      "ushort"
    ], r = [
      "public",
      "private",
      "protected",
      "static",
      "internal",
      "protected",
      "abstract",
      "async",
      "extern",
      "override",
      "unsafe",
      "virtual",
      "new",
      "sealed",
      "partial"
    ], s = [
      "default",
      "false",
      "null",
      "true"
    ], a = [
      "abstract",
      "as",
      "base",
      "break",
      "case",
      "catch",
      "class",
      "const",
      "continue",
      "do",
      "else",
      "event",
      "explicit",
      "extern",
      "finally",
      "fixed",
      "for",
      "foreach",
      "goto",
      "if",
      "implicit",
      "in",
      "interface",
      "internal",
      "is",
      "lock",
      "namespace",
      "new",
      "operator",
      "out",
      "override",
      "params",
      "private",
      "protected",
      "public",
      "readonly",
      "record",
      "ref",
      "return",
      "scoped",
      "sealed",
      "sizeof",
      "stackalloc",
      "static",
      "struct",
      "switch",
      "this",
      "throw",
      "try",
      "typeof",
      "unchecked",
      "unsafe",
      "using",
      "virtual",
      "void",
      "volatile",
      "while"
    ], i = [
      "add",
      "alias",
      "and",
      "ascending",
      "async",
      "await",
      "by",
      "descending",
      "equals",
      "from",
      "get",
      "global",
      "group",
      "init",
      "into",
      "join",
      "let",
      "nameof",
      "not",
      "notnull",
      "on",
      "or",
      "orderby",
      "partial",
      "remove",
      "select",
      "set",
      "unmanaged",
      "value|0",
      "var",
      "when",
      "where",
      "with",
      "yield"
    ], o = {
      keyword: a.concat(i),
      built_in: t,
      literal: s
    }, u = e.inherit(e.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }), l = {
      className: "number",
      variants: [
        { begin: "\\b(0b[01']+)" },
        { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
        { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
      ],
      relevance: 0
    }, c = {
      className: "string",
      begin: /"""("*)(?!")(.|\n)*?"""\1/,
      relevance: 1
    }, d = {
      className: "string",
      begin: '@"',
      end: '"',
      contains: [{ begin: '""' }]
    }, p = e.inherit(d, { illegal: /\n/ }), m = {
      className: "subst",
      begin: /\{/,
      end: /\}/,
      keywords: o
    }, h = e.inherit(m, { illegal: /\n/ }), g = {
      className: "string",
      begin: /\$"/,
      end: '"',
      illegal: /\n/,
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        e.BACKSLASH_ESCAPE,
        h
      ]
    }, f = {
      className: "string",
      begin: /\$@"/,
      end: '"',
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        { begin: '""' },
        m
      ]
    }, E = e.inherit(f, {
      illegal: /\n/,
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        { begin: '""' },
        h
      ]
    });
    m.contains = [
      f,
      g,
      d,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      l,
      e.C_BLOCK_COMMENT_MODE
    ], h.contains = [
      E,
      g,
      p,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      l,
      e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
    ];
    const b = { variants: [
      c,
      f,
      g,
      d,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ] }, y = {
      begin: "<",
      end: ">",
      contains: [
        { beginKeywords: "in out" },
        u
      ]
    }, S = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?", w = {
      // prevents expressions like `@class` from incorrect flagging
      // `class` as a keyword
      begin: "@" + e.IDENT_RE,
      relevance: 0
    };
    return {
      name: "C#",
      aliases: [
        "cs",
        "c#"
      ],
      keywords: o,
      illegal: /::/,
      contains: [
        e.COMMENT(
          "///",
          "$",
          {
            returnBegin: !0,
            contains: [
              {
                className: "doctag",
                variants: [
                  {
                    begin: "///",
                    relevance: 0
                  },
                  { begin: "<!--|-->" },
                  {
                    begin: "</?",
                    end: ">"
                  }
                ]
              }
            ]
          }
        ),
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        {
          className: "meta",
          begin: "#",
          end: "$",
          keywords: { keyword: "if else elif endif define undef warning error line region endregion pragma checksum" }
        },
        b,
        l,
        {
          beginKeywords: "class interface",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:,]/,
          contains: [
            { beginKeywords: "where class" },
            u,
            y,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          beginKeywords: "namespace",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [
            u,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          beginKeywords: "record",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [
            u,
            y,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          // [Attributes("")]
          className: "meta",
          begin: "^\\s*\\[(?=[\\w])",
          excludeBegin: !0,
          end: "\\]",
          excludeEnd: !0,
          contains: [
            {
              className: "string",
              begin: /"/,
              end: /"/
            }
          ]
        },
        {
          // Expression keywords prevent 'keyword Name(...)' from being
          // recognized as a function definition
          beginKeywords: "new return throw await else",
          relevance: 0
        },
        {
          className: "function",
          begin: "(" + S + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
          returnBegin: !0,
          end: /\s*[{;=]/,
          excludeEnd: !0,
          keywords: o,
          contains: [
            // prevents these from being highlighted `title`
            {
              beginKeywords: r.join(" "),
              relevance: 0
            },
            {
              begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
              returnBegin: !0,
              contains: [
                e.TITLE_MODE,
                y
              ],
              relevance: 0
            },
            { match: /\(\)/ },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: o,
              relevance: 0,
              contains: [
                b,
                l,
                e.C_BLOCK_COMMENT_MODE
              ]
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        w
      ]
    };
  }
  return hr = n, hr;
}
var gr, oi;
function Dp() {
  if (oi) return gr;
  oi = 1;
  const n = (l) => ({
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: l.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        l.APOS_STRING_MODE,
        l.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: l.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  }), e = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "p",
    "picture",
    "q",
    "quote",
    "samp",
    "section",
    "select",
    "source",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ], t = [
    "defs",
    "g",
    "marker",
    "mask",
    "pattern",
    "svg",
    "switch",
    "symbol",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMorphology",
    "feOffset",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
    "linearGradient",
    "radialGradient",
    "stop",
    "circle",
    "ellipse",
    "image",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "text",
    "use",
    "textPath",
    "tspan",
    "foreignObject",
    "clipPath"
  ], r = [
    ...e,
    ...t
  ], s = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ].sort().reverse(), a = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ].sort().reverse(), i = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ].sort().reverse(), o = [
    "accent-color",
    "align-content",
    "align-items",
    "align-self",
    "alignment-baseline",
    "all",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "appearance",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "cx",
    "cy",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "color-scheme",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "dominant-baseline",
    "empty-cells",
    "enable-background",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flow",
    "flood-color",
    "flood-opacity",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-size",
    "font-size-adjust",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "inline-size",
    "inset",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "kerning",
    "justify-content",
    "justify-items",
    "justify-self",
    "left",
    "letter-spacing",
    "lighting-color",
    "line-break",
    "line-height",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "mask",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pointer-events",
    "position",
    "quotes",
    "r",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "rotate",
    "row-gap",
    "scale",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "tab-size",
    "table-layout",
    "text-anchor",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-transform",
    "text-underline-offset",
    "text-underline-position",
    "top",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "vector-effect",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "x",
    "y",
    "z-index"
  ].sort().reverse();
  function u(l) {
    const c = l.regex, d = n(l), p = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, m = "and or not only", h = /@-?\w[\w]*(-\w+)*/, g = "[a-zA-Z-][a-zA-Z0-9_-]*", f = [
      l.APOS_STRING_MODE,
      l.QUOTE_STRING_MODE
    ];
    return {
      name: "CSS",
      case_insensitive: !0,
      illegal: /[=|'\$]/,
      keywords: { keyframePosition: "from to" },
      classNameAliases: {
        // for visual continuity with `tag {}` and because we
        // don't have a great class for this?
        keyframePosition: "selector-tag"
      },
      contains: [
        d.BLOCK_COMMENT,
        p,
        // to recognize keyframe 40% etc which are outside the scope of our
        // attribute value mode
        d.CSS_NUMBER_MODE,
        {
          className: "selector-id",
          begin: /#[A-Za-z0-9_-]+/,
          relevance: 0
        },
        {
          className: "selector-class",
          begin: "\\." + g,
          relevance: 0
        },
        d.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-pseudo",
          variants: [
            { begin: ":(" + a.join("|") + ")" },
            { begin: ":(:)?(" + i.join("|") + ")" }
          ]
        },
        // we may actually need this (12/2020)
        // { // pseudo-selector params
        //   begin: /\(/,
        //   end: /\)/,
        //   contains: [ hljs.CSS_NUMBER_MODE ]
        // },
        d.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + o.join("|") + ")\\b"
        },
        // attribute values
        {
          begin: /:/,
          end: /[;}{]/,
          contains: [
            d.BLOCK_COMMENT,
            d.HEXCOLOR,
            d.IMPORTANT,
            d.CSS_NUMBER_MODE,
            ...f,
            // needed to highlight these as strings and to avoid issues with
            // illegal characters that might be inside urls that would tigger the
            // languages illegal stack
            {
              begin: /(url|data-uri)\(/,
              end: /\)/,
              relevance: 0,
              // from keywords
              keywords: { built_in: "url data-uri" },
              contains: [
                ...f,
                {
                  className: "string",
                  // any character other than `)` as in `url()` will be the start
                  // of a string, which ends with `)` (from the parent mode)
                  begin: /[^)]/,
                  endsWithParent: !0,
                  excludeEnd: !0
                }
              ]
            },
            d.FUNCTION_DISPATCH
          ]
        },
        {
          begin: c.lookahead(/@/),
          end: "[{;]",
          relevance: 0,
          illegal: /:/,
          // break on Less variables @var: ...
          contains: [
            {
              className: "keyword",
              begin: h
            },
            {
              begin: /\s/,
              endsWithParent: !0,
              excludeEnd: !0,
              relevance: 0,
              keywords: {
                $pattern: /[a-z-]+/,
                keyword: m,
                attribute: s.join(" ")
              },
              contains: [
                {
                  begin: /[a-z-]+(?=:)/,
                  className: "attribute"
                },
                ...f,
                d.CSS_NUMBER_MODE
              ]
            }
          ]
        },
        {
          className: "selector-tag",
          begin: "\\b(" + r.join("|") + ")\\b"
        }
      ]
    };
  }
  return gr = u, gr;
}
var fr, ci;
function Lp() {
  if (ci) return fr;
  ci = 1;
  function n(e) {
    const t = e.regex, r = {
      begin: /<\/?[A-Za-z_]/,
      end: ">",
      subLanguage: "xml",
      relevance: 0
    }, s = {
      begin: "^[-\\*]{3,}",
      end: "$"
    }, a = {
      className: "code",
      variants: [
        // TODO: fix to allow these to work with sublanguage also
        { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
        { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
        // needed to allow markdown as a sublanguage to work
        {
          begin: "```",
          end: "```+[ ]*$"
        },
        {
          begin: "~~~",
          end: "~~~+[ ]*$"
        },
        { begin: "`.+?`" },
        {
          begin: "(?=^( {4}|\\t))",
          // use contains to gobble up multiple lines to allow the block to be whatever size
          // but only have a single open/close tag vs one per line
          contains: [
            {
              begin: "^( {4}|\\t)",
              end: "(\\n)$"
            }
          ],
          relevance: 0
        }
      ]
    }, i = {
      className: "bullet",
      begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
      end: "\\s+",
      excludeEnd: !0
    }, o = {
      begin: /^\[[^\n]+\]:/,
      returnBegin: !0,
      contains: [
        {
          className: "symbol",
          begin: /\[/,
          end: /\]/,
          excludeBegin: !0,
          excludeEnd: !0
        },
        {
          className: "link",
          begin: /:\s*/,
          end: /$/,
          excludeBegin: !0
        }
      ]
    }, u = /[A-Za-z][A-Za-z0-9+.-]*/, l = {
      variants: [
        // too much like nested array access in so many languages
        // to have any real relevance
        {
          begin: /\[.+?\]\[.*?\]/,
          relevance: 0
        },
        // popular internet URLs
        {
          begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
          relevance: 2
        },
        {
          begin: t.concat(/\[.+?\]\(/, u, /:\/\/.*?\)/),
          relevance: 2
        },
        // relative urls
        {
          begin: /\[.+?\]\([./?&#].*?\)/,
          relevance: 1
        },
        // whatever else, lower relevance (might not be a link at all)
        {
          begin: /\[.*?\]\(.*?\)/,
          relevance: 0
        }
      ],
      returnBegin: !0,
      contains: [
        {
          // empty strings for alt or link text
          match: /\[(?=\])/
        },
        {
          className: "string",
          relevance: 0,
          begin: "\\[",
          end: "\\]",
          excludeBegin: !0,
          returnEnd: !0
        },
        {
          className: "link",
          relevance: 0,
          begin: "\\]\\(",
          end: "\\)",
          excludeBegin: !0,
          excludeEnd: !0
        },
        {
          className: "symbol",
          relevance: 0,
          begin: "\\]\\[",
          end: "\\]",
          excludeBegin: !0,
          excludeEnd: !0
        }
      ]
    }, c = {
      className: "strong",
      contains: [],
      // defined later
      variants: [
        {
          begin: /_{2}(?!\s)/,
          end: /_{2}/
        },
        {
          begin: /\*{2}(?!\s)/,
          end: /\*{2}/
        }
      ]
    }, d = {
      className: "emphasis",
      contains: [],
      // defined later
      variants: [
        {
          begin: /\*(?![*\s])/,
          end: /\*/
        },
        {
          begin: /_(?![_\s])/,
          end: /_/,
          relevance: 0
        }
      ]
    }, p = e.inherit(c, { contains: [] }), m = e.inherit(d, { contains: [] });
    c.contains.push(m), d.contains.push(p);
    let h = [
      r,
      l
    ];
    return [
      c,
      d,
      p,
      m
    ].forEach((b) => {
      b.contains = b.contains.concat(h);
    }), h = h.concat(c, d), {
      name: "Markdown",
      aliases: [
        "md",
        "mkdown",
        "mkd"
      ],
      contains: [
        {
          className: "section",
          variants: [
            {
              begin: "^#{1,6}",
              end: "$",
              contains: h
            },
            {
              begin: "(?=^.+?\\n[=-]{2,}$)",
              contains: [
                { begin: "^[=-]*$" },
                {
                  begin: "^",
                  end: "\\n",
                  contains: h
                }
              ]
            }
          ]
        },
        r,
        i,
        c,
        d,
        {
          className: "quote",
          begin: "^>\\s+",
          contains: h,
          end: "$"
        },
        a,
        s,
        l,
        o,
        {
          //https://spec.commonmark.org/0.31.2/#entity-references
          scope: "literal",
          match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
        }
      ]
    };
  }
  return fr = n, fr;
}
var br, li;
function Pp() {
  if (li) return br;
  li = 1;
  function n(e) {
    const t = e.regex;
    return {
      name: "Diff",
      aliases: ["patch"],
      contains: [
        {
          className: "meta",
          relevance: 10,
          match: t.either(
            /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
            /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
            /^--- +\d+,\d+ +----$/
          )
        },
        {
          className: "comment",
          variants: [
            {
              begin: t.either(
                /Index: /,
                /^index/,
                /={3,}/,
                /^-{3}/,
                /^\*{3} /,
                /^\+{3}/,
                /^diff --git/
              ),
              end: /$/
            },
            { match: /^\*{15}$/ }
          ]
        },
        {
          className: "addition",
          begin: /^\+/,
          end: /$/
        },
        {
          className: "deletion",
          begin: /^-/,
          end: /$/
        },
        {
          className: "addition",
          begin: /^!/,
          end: /$/
        }
      ]
    };
  }
  return br = n, br;
}
var yr, ui;
function Bp() {
  if (ui) return yr;
  ui = 1;
  function n(e) {
    const t = e.regex, r = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", s = t.either(
      /\b([A-Z]+[a-z0-9]+)+/,
      // ends in caps
      /\b([A-Z]+[a-z0-9]+)+[A-Z]+/
    ), a = t.concat(s, /(::\w+)*/), o = {
      "variable.constant": [
        "__FILE__",
        "__LINE__",
        "__ENCODING__"
      ],
      "variable.language": [
        "self",
        "super"
      ],
      keyword: [
        "alias",
        "and",
        "begin",
        "BEGIN",
        "break",
        "case",
        "class",
        "defined",
        "do",
        "else",
        "elsif",
        "end",
        "END",
        "ensure",
        "for",
        "if",
        "in",
        "module",
        "next",
        "not",
        "or",
        "redo",
        "require",
        "rescue",
        "retry",
        "return",
        "then",
        "undef",
        "unless",
        "until",
        "when",
        "while",
        "yield",
        ...[
          "include",
          "extend",
          "prepend",
          "public",
          "private",
          "protected",
          "raise",
          "throw"
        ]
      ],
      built_in: [
        "proc",
        "lambda",
        "attr_accessor",
        "attr_reader",
        "attr_writer",
        "define_method",
        "private_constant",
        "module_function"
      ],
      literal: [
        "true",
        "false",
        "nil"
      ]
    }, u = {
      className: "doctag",
      begin: "@[A-Za-z]+"
    }, l = {
      begin: "#<",
      end: ">"
    }, c = [
      e.COMMENT(
        "#",
        "$",
        { contains: [u] }
      ),
      e.COMMENT(
        "^=begin",
        "^=end",
        {
          contains: [u],
          relevance: 10
        }
      ),
      e.COMMENT("^__END__", e.MATCH_NOTHING_RE)
    ], d = {
      className: "subst",
      begin: /#\{/,
      end: /\}/,
      keywords: o
    }, p = {
      className: "string",
      contains: [
        e.BACKSLASH_ESCAPE,
        d
      ],
      variants: [
        {
          begin: /'/,
          end: /'/
        },
        {
          begin: /"/,
          end: /"/
        },
        {
          begin: /`/,
          end: /`/
        },
        {
          begin: /%[qQwWx]?\(/,
          end: /\)/
        },
        {
          begin: /%[qQwWx]?\[/,
          end: /\]/
        },
        {
          begin: /%[qQwWx]?\{/,
          end: /\}/
        },
        {
          begin: /%[qQwWx]?</,
          end: />/
        },
        {
          begin: /%[qQwWx]?\//,
          end: /\//
        },
        {
          begin: /%[qQwWx]?%/,
          end: /%/
        },
        {
          begin: /%[qQwWx]?-/,
          end: /-/
        },
        {
          begin: /%[qQwWx]?\|/,
          end: /\|/
        },
        // in the following expressions, \B in the beginning suppresses recognition of ?-sequences
        // where ? is the last character of a preceding identifier, as in: `func?4`
        { begin: /\B\?(\\\d{1,3})/ },
        { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
        { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
        { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
        { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
        { begin: /\B\?\\?\S/ },
        // heredocs
        {
          // this guard makes sure that we have an entire heredoc and not a false
          // positive (auto-detect, etc.)
          begin: t.concat(
            /<<[-~]?'?/,
            t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)
          ),
          contains: [
            e.END_SAME_AS_BEGIN({
              begin: /(\w+)/,
              end: /(\w+)/,
              contains: [
                e.BACKSLASH_ESCAPE,
                d
              ]
            })
          ]
        }
      ]
    }, m = "[1-9](_?[0-9])*|0", h = "[0-9](_?[0-9])*", g = {
      className: "number",
      relevance: 0,
      variants: [
        // decimal integer/float, optionally exponential or rational, optionally imaginary
        { begin: `\\b(${m})(\\.(${h}))?([eE][+-]?(${h})|r)?i?\\b` },
        // explicit decimal/binary/octal/hexadecimal integer,
        // optionally rational and/or imaginary
        { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
        // 0-prefixed implicit octal integer, optionally rational and/or imaginary
        { begin: "\\b0(_?[0-7])+r?i?\\b" }
      ]
    }, f = {
      variants: [
        {
          match: /\(\)/
        },
        {
          className: "params",
          begin: /\(/,
          end: /(?=\))/,
          excludeBegin: !0,
          endsParent: !0,
          keywords: o
        }
      ]
    }, z = [
      p,
      {
        variants: [
          {
            match: [
              /class\s+/,
              a,
              /\s+<\s+/,
              a
            ]
          },
          {
            match: [
              /\b(class|module)\s+/,
              a
            ]
          }
        ],
        scope: {
          2: "title.class",
          4: "title.class.inherited"
        },
        keywords: o
      },
      {
        match: [
          /(include|extend)\s+/,
          a
        ],
        scope: {
          2: "title.class"
        },
        keywords: o
      },
      {
        relevance: 0,
        match: [
          a,
          /\.new[. (]/
        ],
        scope: {
          1: "title.class"
        }
      },
      {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant"
      },
      {
        relevance: 0,
        match: s,
        scope: "title.class"
      },
      {
        match: [
          /def/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [
          f
        ]
      },
      {
        // swallow namespace qualifiers before symbols
        begin: e.IDENT_RE + "::"
      },
      {
        className: "symbol",
        begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
        relevance: 0
      },
      {
        className: "symbol",
        begin: ":(?!\\s)",
        contains: [
          p,
          { begin: r }
        ],
        relevance: 0
      },
      g,
      {
        // negative-look forward attempts to prevent false matches like:
        // @ident@ or $ident$ that might indicate this is not ruby at all
        className: "variable",
        begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
      },
      {
        className: "params",
        begin: /\|/,
        end: /\|/,
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0,
        // this could be a lot of things (in other languages) other than params
        keywords: o
      },
      {
        // regexp container
        begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
        keywords: "unless",
        contains: [
          {
            className: "regexp",
            contains: [
              e.BACKSLASH_ESCAPE,
              d
            ],
            illegal: /\n/,
            variants: [
              {
                begin: "/",
                end: "/[a-z]*"
              },
              {
                begin: /%r\{/,
                end: /\}[a-z]*/
              },
              {
                begin: "%r\\(",
                end: "\\)[a-z]*"
              },
              {
                begin: "%r!",
                end: "![a-z]*"
              },
              {
                begin: "%r\\[",
                end: "\\][a-z]*"
              }
            ]
          }
        ].concat(l, c),
        relevance: 0
      }
    ].concat(l, c);
    d.contains = z, f.contains = z;
    const $ = [
      {
        begin: /^\s*=>/,
        starts: {
          end: "$",
          contains: z
        }
      },
      {
        className: "meta.prompt",
        begin: "^(" + "[>?]>" + "|" + "[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]" + "|" + "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>" + ")(?=[ ])",
        starts: {
          end: "$",
          keywords: o,
          contains: z
        }
      }
    ];
    return c.unshift(l), {
      name: "Ruby",
      aliases: [
        "rb",
        "gemspec",
        "podspec",
        "thor",
        "irb"
      ],
      keywords: o,
      illegal: /\/\*/,
      contains: [e.SHEBANG({ binary: "ruby" })].concat($).concat(c).concat(z)
    };
  }
  return yr = n, yr;
}
var vr, di;
function zp() {
  if (di) return vr;
  di = 1;
  function n(e) {
    const i = {
      keyword: [
        "break",
        "case",
        "chan",
        "const",
        "continue",
        "default",
        "defer",
        "else",
        "fallthrough",
        "for",
        "func",
        "go",
        "goto",
        "if",
        "import",
        "interface",
        "map",
        "package",
        "range",
        "return",
        "select",
        "struct",
        "switch",
        "type",
        "var"
      ],
      type: [
        "bool",
        "byte",
        "complex64",
        "complex128",
        "error",
        "float32",
        "float64",
        "int8",
        "int16",
        "int32",
        "int64",
        "string",
        "uint8",
        "uint16",
        "uint32",
        "uint64",
        "int",
        "uint",
        "uintptr",
        "rune"
      ],
      literal: [
        "true",
        "false",
        "iota",
        "nil"
      ],
      built_in: [
        "append",
        "cap",
        "close",
        "complex",
        "copy",
        "imag",
        "len",
        "make",
        "new",
        "panic",
        "print",
        "println",
        "real",
        "recover",
        "delete"
      ]
    };
    return {
      name: "Go",
      aliases: ["golang"],
      keywords: i,
      illegal: "</",
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        {
          className: "string",
          variants: [
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            {
              begin: "`",
              end: "`"
            }
          ]
        },
        {
          className: "number",
          variants: [
            {
              match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,
              // hex without a present digit before . (making a digit afterwards required)
              relevance: 0
            },
            {
              match: /-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
              // hex with a present digit before . (making a digit afterwards optional)
              relevance: 0
            },
            {
              match: /-?\b0[oO](_?[0-7])*i?/,
              // leading 0o octal
              relevance: 0
            },
            {
              match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,
              // decimal without a present digit before . (making a digit afterwards required)
              relevance: 0
            },
            {
              match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,
              // decimal with a present digit before . (making a digit afterwards optional)
              relevance: 0
            }
          ]
        },
        {
          begin: /:=/
          // relevance booster
        },
        {
          className: "function",
          beginKeywords: "func",
          end: "\\s*(\\{|$)",
          excludeEnd: !0,
          contains: [
            e.TITLE_MODE,
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              endsParent: !0,
              keywords: i,
              illegal: /["']/
            }
          ]
        }
      ]
    };
  }
  return vr = n, vr;
}
var Er, pi;
function Fp() {
  if (pi) return Er;
  pi = 1;
  function n(e) {
    const t = e.regex, r = /[_A-Za-z][_0-9A-Za-z]*/;
    return {
      name: "GraphQL",
      aliases: ["gql"],
      case_insensitive: !0,
      disableAutodetect: !1,
      keywords: {
        keyword: [
          "query",
          "mutation",
          "subscription",
          "type",
          "input",
          "schema",
          "directive",
          "interface",
          "union",
          "scalar",
          "fragment",
          "enum",
          "on"
        ],
        literal: [
          "true",
          "false",
          "null"
        ]
      },
      contains: [
        e.HASH_COMMENT_MODE,
        e.QUOTE_STRING_MODE,
        e.NUMBER_MODE,
        {
          scope: "punctuation",
          match: /[.]{3}/,
          relevance: 0
        },
        {
          scope: "punctuation",
          begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
          relevance: 0
        },
        {
          scope: "variable",
          begin: /\$/,
          end: /\W/,
          excludeEnd: !0,
          relevance: 0
        },
        {
          scope: "meta",
          match: /@\w+/,
          excludeEnd: !0
        },
        {
          scope: "symbol",
          begin: t.concat(r, t.lookahead(/\s*:/)),
          relevance: 0
        }
      ],
      illegal: [
        /[;<']/,
        /BEGIN/
      ]
    };
  }
  return Er = n, Er;
}
var wr, mi;
function Up() {
  if (mi) return wr;
  mi = 1;
  function n(e) {
    const t = e.regex, r = {
      className: "number",
      relevance: 0,
      variants: [
        { begin: /([+-]+)?[\d]+_[\d_]+/ },
        { begin: e.NUMBER_RE }
      ]
    }, s = e.COMMENT();
    s.variants = [
      {
        begin: /;/,
        end: /$/
      },
      {
        begin: /#/,
        end: /$/
      }
    ];
    const a = {
      className: "variable",
      variants: [
        { begin: /\$[\w\d"][\w\d_]*/ },
        { begin: /\$\{(.*?)\}/ }
      ]
    }, i = {
      className: "literal",
      begin: /\bon|off|true|false|yes|no\b/
    }, o = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE],
      variants: [
        {
          begin: "'''",
          end: "'''",
          relevance: 10
        },
        {
          begin: '"""',
          end: '"""',
          relevance: 10
        },
        {
          begin: '"',
          end: '"'
        },
        {
          begin: "'",
          end: "'"
        }
      ]
    }, u = {
      begin: /\[/,
      end: /\]/,
      contains: [
        s,
        i,
        a,
        o,
        r,
        "self"
      ],
      relevance: 0
    }, l = /[A-Za-z0-9_-]+/, c = /"(\\"|[^"])*"/, d = /'[^']*'/, p = t.either(
      l,
      c,
      d
    ), m = t.concat(
      p,
      "(\\s*\\.\\s*",
      p,
      ")*",
      t.lookahead(/\s*=\s*[^#\s]/)
    );
    return {
      name: "TOML, also INI",
      aliases: ["toml"],
      case_insensitive: !0,
      illegal: /\S/,
      contains: [
        s,
        {
          className: "section",
          begin: /\[+/,
          end: /\]+/
        },
        {
          begin: m,
          className: "attr",
          starts: {
            end: /$/,
            contains: [
              s,
              u,
              i,
              a,
              o,
              r
            ]
          }
        }
      ]
    };
  }
  return wr = n, wr;
}
var xr, hi;
function $p() {
  if (hi) return xr;
  hi = 1;
  var n = "[0-9](_*[0-9])*", e = `\\.(${n})`, t = "[0-9a-fA-F](_*[0-9a-fA-F])*", r = {
    className: "number",
    variants: [
      // DecimalFloatingPointLiteral
      // including ExponentPart
      { begin: `(\\b(${n})((${e})|\\.)?|(${e}))[eE][+-]?(${n})[fFdD]?\\b` },
      // excluding ExponentPart
      { begin: `\\b(${n})((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
      { begin: `(${e})[fFdD]?\\b` },
      { begin: `\\b(${n})[fFdD]\\b` },
      // HexadecimalFloatingPointLiteral
      { begin: `\\b0[xX]((${t})\\.?|(${t})?\\.(${t}))[pP][+-]?(${n})[fFdD]?\\b` },
      // DecimalIntegerLiteral
      { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
      // HexIntegerLiteral
      { begin: `\\b0[xX](${t})[lL]?\\b` },
      // OctalIntegerLiteral
      { begin: "\\b0(_*[0-7])*[lL]?\\b" },
      // BinaryIntegerLiteral
      { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
    ],
    relevance: 0
  };
  function s(i, o, u) {
    return u === -1 ? "" : i.replace(o, (l) => s(i, o, u - 1));
  }
  function a(i) {
    const o = i.regex, u = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", l = u + s("(?:<" + u + "~~~(?:\\s*,\\s*" + u + "~~~)*>)?", /~~~/g, 2), h = {
      keyword: [
        "synchronized",
        "abstract",
        "private",
        "var",
        "static",
        "if",
        "const ",
        "for",
        "while",
        "strictfp",
        "finally",
        "protected",
        "import",
        "native",
        "final",
        "void",
        "enum",
        "else",
        "break",
        "transient",
        "catch",
        "instanceof",
        "volatile",
        "case",
        "assert",
        "package",
        "default",
        "public",
        "try",
        "switch",
        "continue",
        "throws",
        "protected",
        "public",
        "private",
        "module",
        "requires",
        "exports",
        "do",
        "sealed",
        "yield",
        "permits",
        "goto"
      ],
      literal: [
        "false",
        "true",
        "null"
      ],
      type: [
        "char",
        "boolean",
        "long",
        "float",
        "int",
        "byte",
        "short",
        "double"
      ],
      built_in: [
        "super",
        "this"
      ]
    }, g = {
      className: "meta",
      begin: "@" + u,
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          contains: ["self"]
          // allow nested () inside our annotation
        }
      ]
    }, f = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      keywords: h,
      relevance: 0,
      contains: [i.C_BLOCK_COMMENT_MODE],
      endsParent: !0
    };
    return {
      name: "Java",
      aliases: ["jsp"],
      keywords: h,
      illegal: /<\/|#/,
      contains: [
        i.COMMENT(
          "/\\*\\*",
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                // eat up @'s in emails to prevent them to be recognized as doctags
                begin: /\w+@/,
                relevance: 0
              },
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              }
            ]
          }
        ),
        // relevance boost
        {
          begin: /import java\.[a-z]+\./,
          keywords: "import",
          relevance: 2
        },
        i.C_LINE_COMMENT_MODE,
        i.C_BLOCK_COMMENT_MODE,
        {
          begin: /"""/,
          end: /"""/,
          className: "string",
          contains: [i.BACKSLASH_ESCAPE]
        },
        i.APOS_STRING_MODE,
        i.QUOTE_STRING_MODE,
        {
          match: [
            /\b(?:class|interface|enum|extends|implements|new)/,
            /\s+/,
            u
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        },
        {
          // Exceptions for hyphenated keywords
          match: /non-sealed/,
          scope: "keyword"
        },
        {
          begin: [
            o.concat(/(?!else)/, u),
            /\s+/,
            u,
            /\s+/,
            /=(?!=)/
          ],
          className: {
            1: "type",
            3: "variable",
            5: "operator"
          }
        },
        {
          begin: [
            /record/,
            /\s+/,
            u
          ],
          className: {
            1: "keyword",
            3: "title.class"
          },
          contains: [
            f,
            i.C_LINE_COMMENT_MODE,
            i.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          // Expression keywords prevent 'keyword Name(...)' from being
          // recognized as a function definition
          beginKeywords: "new throw return else",
          relevance: 0
        },
        {
          begin: [
            "(?:" + l + "\\s+)",
            i.UNDERSCORE_IDENT_RE,
            /\s*(?=\()/
          ],
          className: { 2: "title.function" },
          keywords: h,
          contains: [
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              keywords: h,
              relevance: 0,
              contains: [
                g,
                i.APOS_STRING_MODE,
                i.QUOTE_STRING_MODE,
                r,
                i.C_BLOCK_COMMENT_MODE
              ]
            },
            i.C_LINE_COMMENT_MODE,
            i.C_BLOCK_COMMENT_MODE
          ]
        },
        r,
        g
      ]
    };
  }
  return xr = a, xr;
}
var kr, gi;
function Hp() {
  if (gi) return kr;
  gi = 1;
  const n = "[A-Za-z$_][0-9A-Za-z$_]*", e = [
    "as",
    // for exports
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends"
  ], t = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ], r = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
  ], s = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ], a = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
  ], i = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global"
    // Node.js
  ], o = [].concat(
    a,
    r,
    s
  );
  function u(l) {
    const c = l.regex, d = (V, { after: Q }) => {
      const ae = "</" + V[0].slice(1);
      return V.input.indexOf(ae, Q) !== -1;
    }, p = n, m = {
      begin: "<>",
      end: "</>"
    }, h = /<[A-Za-z0-9\\._:-]+\s*\/>/, g = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      /**
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */
      isTrulyOpeningTag: (V, Q) => {
        const ae = V[0].length + V.index, ne = V.input[ae];
        if (
          // HTML should not include another raw `<` inside a tag
          // nested type?
          // `<Array<Array<number>>`, etc.
          ne === "<" || // the , gives away that this is not HTML
          // `<T, A extends keyof T, V>`
          ne === ","
        ) {
          Q.ignoreMatch();
          return;
        }
        ne === ">" && (d(V, { after: ae }) || Q.ignoreMatch());
        let fe;
        const U = V.input.substring(ae);
        if (fe = U.match(/^\s*=/)) {
          Q.ignoreMatch();
          return;
        }
        if ((fe = U.match(/^\s+extends\s+/)) && fe.index === 0) {
          Q.ignoreMatch();
          return;
        }
      }
    }, f = {
      $pattern: n,
      keyword: e,
      literal: t,
      built_in: o,
      "variable.language": i
    }, E = "[0-9](_?[0-9])*", b = `\\.(${E})`, y = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", S = {
      className: "number",
      variants: [
        // DecimalLiteral
        { begin: `(\\b(${y})((${b})|\\.)?|(${b}))[eE][+-]?(${E})\\b` },
        { begin: `\\b(${y})\\b((${b})\\b|\\.)?|(${b})\\b` },
        // DecimalBigIntegerLiteral
        { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
        // NonDecimalIntegerLiteral
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        // LegacyOctalIntegerLiteral (does not include underscore separators)
        // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
        { begin: "\\b0[0-7]+n?\\b" }
      ],
      relevance: 0
    }, w = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: f,
      contains: []
      // defined later
    }, I = {
      begin: ".?html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          l.BACKSLASH_ESCAPE,
          w
        ],
        subLanguage: "xml"
      }
    }, z = {
      begin: ".?css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          l.BACKSLASH_ESCAPE,
          w
        ],
        subLanguage: "css"
      }
    }, R = {
      begin: ".?gql`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          l.BACKSLASH_ESCAPE,
          w
        ],
        subLanguage: "graphql"
      }
    }, T = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [
        l.BACKSLASH_ESCAPE,
        w
      ]
    }, $ = {
      className: "comment",
      variants: [
        l.COMMENT(
          /\/\*\*(?!\/)/,
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                  },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: !0,
                    excludeBegin: !0,
                    relevance: 0
                  },
                  {
                    className: "variable",
                    begin: p + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0
                  },
                  // eat spaces (not newlines) so we can find
                  // types or variables
                  {
                    begin: /(?=[^\n])\s/,
                    relevance: 0
                  }
                ]
              }
            ]
          }
        ),
        l.C_BLOCK_COMMENT_MODE,
        l.C_LINE_COMMENT_MODE
      ]
    }, D = [
      l.APOS_STRING_MODE,
      l.QUOTE_STRING_MODE,
      I,
      z,
      R,
      T,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      S
      // This is intentional:
      // See https://github.com/highlightjs/highlight.js/issues/3288
      // hljs.REGEXP_MODE
    ];
    w.contains = D.concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: f,
      contains: [
        "self"
      ].concat(D)
    });
    const H = [].concat($, w.contains), P = H.concat([
      // eat recursive parens in sub expressions
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: f,
        contains: ["self"].concat(H)
      }
    ]), W = {
      className: "params",
      // convert this to negative lookbehind in v12
      begin: /(\s*)\(/,
      // to match the parms with 
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: f,
      contains: P
    }, oe = {
      variants: [
        // class Car extends vehicle
        {
          match: [
            /class/,
            /\s+/,
            p,
            /\s+/,
            /extends/,
            /\s+/,
            c.concat(p, "(", c.concat(/\./, p), ")*")
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited"
          }
        },
        // class Car
        {
          match: [
            /class/,
            /\s+/,
            p
          ],
          scope: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    }, C = {
      relevance: 0,
      match: c.either(
        // Hard coded exceptions
        /\bJSON/,
        // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        // P
        // single letters are not highlighted
        // BLAH
        // this will be flagged as a UPPER_CASE_CONSTANT instead
      ),
      className: "title.class",
      keywords: {
        _: [
          // se we still get relevance credit for JS library classes
          ...r,
          ...s
        ]
      }
    }, L = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    }, N = {
      variants: [
        {
          match: [
            /function/,
            /\s+/,
            p,
            /(?=\s*\()/
          ]
        },
        // anonymous function
        {
          match: [
            /function/,
            /\s*(?=\()/
          ]
        }
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      label: "func.def",
      contains: [W],
      illegal: /%/
    }, k = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    };
    function O(V) {
      return c.concat("(?!", V.join("|"), ")");
    }
    const j = {
      match: c.concat(
        /\b/,
        O([
          ...a,
          "super",
          "import"
        ].map((V) => `${V}\\s*\\(`)),
        p,
        c.lookahead(/\s*\(/)
      ),
      className: "title.function",
      relevance: 0
    }, X = {
      begin: c.concat(/\./, c.lookahead(
        c.concat(p, /(?![0-9A-Za-z$_(])/)
      )),
      end: p,
      excludeBegin: !0,
      keywords: "prototype",
      className: "property",
      relevance: 0
    }, ee = {
      match: [
        /get|set/,
        /\s+/,
        p,
        /(?=\()/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        {
          // eat to avoid empty params
          begin: /\(\)/
        },
        W
      ]
    }, te = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + l.UNDERSCORE_IDENT_RE + ")\\s*=>", Y = {
      match: [
        /const|var|let/,
        /\s+/,
        p,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        // async is optional
        c.lookahead(te)
      ],
      keywords: "async",
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        W
      ]
    };
    return {
      name: "JavaScript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: f,
      // this will be extended by TypeScript
      exports: { PARAMS_CONTAINS: P, CLASS_REFERENCE: C },
      illegal: /#(?![$_A-z])/,
      contains: [
        l.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }),
        L,
        l.APOS_STRING_MODE,
        l.QUOTE_STRING_MODE,
        I,
        z,
        R,
        T,
        $,
        // Skip numbers when they are part of a variable name
        { match: /\$\d+/ },
        S,
        C,
        {
          className: "attr",
          begin: p + c.lookahead(":"),
          relevance: 0
        },
        Y,
        {
          // "value" container
          begin: "(" + l.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            $,
            l.REGEXP_MODE,
            {
              className: "function",
              // we have to count the parens to make sure we actually have the
              // correct bounding ( ) before the =>.  There could be any number of
              // sub-expressions inside also surrounded by parens.
              begin: te,
              returnBegin: !0,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    {
                      begin: l.UNDERSCORE_IDENT_RE,
                      relevance: 0
                    },
                    {
                      className: null,
                      begin: /\(\s*\)/,
                      skip: !0
                    },
                    {
                      begin: /(\s*)\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: f,
                      contains: P
                    }
                  ]
                }
              ]
            },
            {
              // could be a comma delimited list of params to a function call
              begin: /,/,
              relevance: 0
            },
            {
              match: /\s+/,
              relevance: 0
            },
            {
              // JSX
              variants: [
                { begin: m.begin, end: m.end },
                { match: h },
                {
                  begin: g.begin,
                  // we carefully check the opening tag to see if it truly
                  // is a tag and not a false positive
                  "on:begin": g.isTrulyOpeningTag,
                  end: g.end
                }
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: g.begin,
                  end: g.end,
                  skip: !0,
                  contains: ["self"]
                }
              ]
            }
          ]
        },
        N,
        {
          // prevent this from getting swallowed up by function
          // since they appear "function like"
          beginKeywords: "while if switch catch for"
        },
        {
          // we have to count the parens to make sure we actually have the correct
          // bounding ( ).  There could be any number of sub-expressions inside
          // also surrounded by parens.
          begin: "\\b(?!function)" + l.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          // end parens
          returnBegin: !0,
          label: "func.def",
          contains: [
            W,
            l.inherit(l.TITLE_MODE, { begin: p, className: "title.function" })
          ]
        },
        // catch ... so it won't trigger the property rule below
        {
          match: /\.\.\./,
          relevance: 0
        },
        X,
        // hack: prevents detection of keywords in some circumstances
        // .keyword()
        // $keyword = x
        {
          match: "\\$" + p,
          relevance: 0
        },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [W]
        },
        j,
        k,
        oe,
        ee,
        {
          match: /\$[(.]/
          // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        }
      ]
    };
  }
  return kr = u, kr;
}
var Sr, fi;
function jp() {
  if (fi) return Sr;
  fi = 1;
  function n(e) {
    const t = {
      className: "attr",
      begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
      relevance: 1.01
    }, r = {
      match: /[{}[\],:]/,
      className: "punctuation",
      relevance: 0
    }, s = [
      "true",
      "false",
      "null"
    ], a = {
      scope: "literal",
      beginKeywords: s.join(" ")
    };
    return {
      name: "JSON",
      aliases: ["jsonc"],
      keywords: {
        literal: s
      },
      contains: [
        t,
        r,
        e.QUOTE_STRING_MODE,
        a,
        e.C_NUMBER_MODE,
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE
      ],
      illegal: "\\S"
    };
  }
  return Sr = n, Sr;
}
var _r, bi;
function qp() {
  if (bi) return _r;
  bi = 1;
  var n = "[0-9](_*[0-9])*", e = `\\.(${n})`, t = "[0-9a-fA-F](_*[0-9a-fA-F])*", r = {
    className: "number",
    variants: [
      // DecimalFloatingPointLiteral
      // including ExponentPart
      { begin: `(\\b(${n})((${e})|\\.)?|(${e}))[eE][+-]?(${n})[fFdD]?\\b` },
      // excluding ExponentPart
      { begin: `\\b(${n})((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
      { begin: `(${e})[fFdD]?\\b` },
      { begin: `\\b(${n})[fFdD]\\b` },
      // HexadecimalFloatingPointLiteral
      { begin: `\\b0[xX]((${t})\\.?|(${t})?\\.(${t}))[pP][+-]?(${n})[fFdD]?\\b` },
      // DecimalIntegerLiteral
      { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
      // HexIntegerLiteral
      { begin: `\\b0[xX](${t})[lL]?\\b` },
      // OctalIntegerLiteral
      { begin: "\\b0(_*[0-7])*[lL]?\\b" },
      // BinaryIntegerLiteral
      { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
    ],
    relevance: 0
  };
  function s(a) {
    const i = {
      keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
      built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
      literal: "true false null"
    }, o = {
      className: "keyword",
      begin: /\b(break|continue|return|this)\b/,
      starts: { contains: [
        {
          className: "symbol",
          begin: /@\w+/
        }
      ] }
    }, u = {
      className: "symbol",
      begin: a.UNDERSCORE_IDENT_RE + "@"
    }, l = {
      className: "subst",
      begin: /\$\{/,
      end: /\}/,
      contains: [a.C_NUMBER_MODE]
    }, c = {
      className: "variable",
      begin: "\\$" + a.UNDERSCORE_IDENT_RE
    }, d = {
      className: "string",
      variants: [
        {
          begin: '"""',
          end: '"""(?=[^"])',
          contains: [
            c,
            l
          ]
        },
        // Can't use built-in modes easily, as we want to use STRING in the meta
        // context as 'meta-string' and there's no syntax to remove explicitly set
        // classNames in built-in modes.
        {
          begin: "'",
          end: "'",
          illegal: /\n/,
          contains: [a.BACKSLASH_ESCAPE]
        },
        {
          begin: '"',
          end: '"',
          illegal: /\n/,
          contains: [
            a.BACKSLASH_ESCAPE,
            c,
            l
          ]
        }
      ]
    };
    l.contains.push(d);
    const p = {
      className: "meta",
      begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + a.UNDERSCORE_IDENT_RE + ")?"
    }, m = {
      className: "meta",
      begin: "@" + a.UNDERSCORE_IDENT_RE,
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          contains: [
            a.inherit(d, { className: "string" }),
            "self"
          ]
        }
      ]
    }, h = r, g = a.COMMENT(
      "/\\*",
      "\\*/",
      { contains: [a.C_BLOCK_COMMENT_MODE] }
    ), f = { variants: [
      {
        className: "type",
        begin: a.UNDERSCORE_IDENT_RE
      },
      {
        begin: /\(/,
        end: /\)/,
        contains: []
        // defined later
      }
    ] }, E = f;
    return E.variants[1].contains = [f], f.variants[1].contains = [E], {
      name: "Kotlin",
      aliases: [
        "kt",
        "kts"
      ],
      keywords: i,
      contains: [
        a.COMMENT(
          "/\\*\\*",
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              }
            ]
          }
        ),
        a.C_LINE_COMMENT_MODE,
        g,
        o,
        u,
        p,
        m,
        {
          className: "function",
          beginKeywords: "fun",
          end: "[(]|$",
          returnBegin: !0,
          excludeEnd: !0,
          keywords: i,
          relevance: 5,
          contains: [
            {
              begin: a.UNDERSCORE_IDENT_RE + "\\s*\\(",
              returnBegin: !0,
              relevance: 0,
              contains: [a.UNDERSCORE_TITLE_MODE]
            },
            {
              className: "type",
              begin: /</,
              end: />/,
              keywords: "reified",
              relevance: 0
            },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              endsParent: !0,
              keywords: i,
              relevance: 0,
              contains: [
                {
                  begin: /:/,
                  end: /[=,\/]/,
                  endsWithParent: !0,
                  contains: [
                    f,
                    a.C_LINE_COMMENT_MODE,
                    g
                  ],
                  relevance: 0
                },
                a.C_LINE_COMMENT_MODE,
                g,
                p,
                m,
                d,
                a.C_NUMBER_MODE
              ]
            },
            g
          ]
        },
        {
          begin: [
            /class|interface|trait/,
            /\s+/,
            a.UNDERSCORE_IDENT_RE
          ],
          beginScope: {
            3: "title.class"
          },
          keywords: "class interface trait",
          end: /[:\{(]|$/,
          excludeEnd: !0,
          illegal: "extends implements",
          contains: [
            { beginKeywords: "public protected internal private constructor" },
            a.UNDERSCORE_TITLE_MODE,
            {
              className: "type",
              begin: /</,
              end: />/,
              excludeBegin: !0,
              excludeEnd: !0,
              relevance: 0
            },
            {
              className: "type",
              begin: /[,:]\s*/,
              end: /[<\(,){\s]|$/,
              excludeBegin: !0,
              returnEnd: !0
            },
            p,
            m
          ]
        },
        d,
        {
          className: "meta",
          begin: "^#!/usr/bin/env",
          end: "$",
          illegal: `
`
        },
        h
      ]
    };
  }
  return _r = s, _r;
}
var Cr, yi;
function Kp() {
  if (yi) return Cr;
  yi = 1;
  const n = (c) => ({
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: c.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        c.APOS_STRING_MODE,
        c.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: c.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  }), e = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "p",
    "picture",
    "q",
    "quote",
    "samp",
    "section",
    "select",
    "source",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ], t = [
    "defs",
    "g",
    "marker",
    "mask",
    "pattern",
    "svg",
    "switch",
    "symbol",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMorphology",
    "feOffset",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
    "linearGradient",
    "radialGradient",
    "stop",
    "circle",
    "ellipse",
    "image",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "text",
    "use",
    "textPath",
    "tspan",
    "foreignObject",
    "clipPath"
  ], r = [
    ...e,
    ...t
  ], s = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ].sort().reverse(), a = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ].sort().reverse(), i = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ].sort().reverse(), o = [
    "accent-color",
    "align-content",
    "align-items",
    "align-self",
    "alignment-baseline",
    "all",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "appearance",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "cx",
    "cy",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "color-scheme",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "dominant-baseline",
    "empty-cells",
    "enable-background",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flow",
    "flood-color",
    "flood-opacity",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-size",
    "font-size-adjust",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "inline-size",
    "inset",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "kerning",
    "justify-content",
    "justify-items",
    "justify-self",
    "left",
    "letter-spacing",
    "lighting-color",
    "line-break",
    "line-height",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "mask",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pointer-events",
    "position",
    "quotes",
    "r",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "rotate",
    "row-gap",
    "scale",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "tab-size",
    "table-layout",
    "text-anchor",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-transform",
    "text-underline-offset",
    "text-underline-position",
    "top",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "vector-effect",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "x",
    "y",
    "z-index"
  ].sort().reverse(), u = a.concat(i).sort().reverse();
  function l(c) {
    const d = n(c), p = u, m = "and or not only", h = "[\\w-]+", g = "(" + h + "|@\\{" + h + "\\})", f = [], E = [], b = function(H) {
      return {
        // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
        className: "string",
        begin: "~?" + H + ".*?" + H
      };
    }, y = function(H, P, W) {
      return {
        className: H,
        begin: P,
        relevance: W
      };
    }, S = {
      $pattern: /[a-z-]+/,
      keyword: m,
      attribute: s.join(" ")
    }, w = {
      // used only to properly balance nested parens inside mixin call, def. arg list
      begin: "\\(",
      end: "\\)",
      contains: E,
      keywords: S,
      relevance: 0
    };
    E.push(
      c.C_LINE_COMMENT_MODE,
      c.C_BLOCK_COMMENT_MODE,
      b("'"),
      b('"'),
      d.CSS_NUMBER_MODE,
      // fixme: it does not include dot for numbers like .5em :(
      {
        begin: "(url|data-uri)\\(",
        starts: {
          className: "string",
          end: "[\\)\\n]",
          excludeEnd: !0
        }
      },
      d.HEXCOLOR,
      w,
      y("variable", "@@?" + h, 10),
      y("variable", "@\\{" + h + "\\}"),
      y("built_in", "~?`[^`]*?`"),
      // inline javascript (or whatever host language) *multiline* string
      {
        // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
        className: "attribute",
        begin: h + "\\s*:",
        end: ":",
        returnBegin: !0,
        excludeEnd: !0
      },
      d.IMPORTANT,
      { beginKeywords: "and not" },
      d.FUNCTION_DISPATCH
    );
    const I = E.concat({
      begin: /\{/,
      end: /\}/,
      contains: f
    }), z = {
      beginKeywords: "when",
      endsWithParent: !0,
      contains: [{ beginKeywords: "and not" }].concat(E)
      // using this form to override VALUE’s 'function' match
    }, R = {
      begin: g + "\\s*:",
      returnBegin: !0,
      end: /[;}]/,
      relevance: 0,
      contains: [
        { begin: /-(webkit|moz|ms|o)-/ },
        d.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + o.join("|") + ")\\b",
          end: /(?=:)/,
          starts: {
            endsWithParent: !0,
            illegal: "[<=$]",
            relevance: 0,
            contains: E
          }
        }
      ]
    }, T = {
      className: "keyword",
      begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
      starts: {
        end: "[;{}]",
        keywords: S,
        returnEnd: !0,
        contains: E,
        relevance: 0
      }
    }, A = {
      className: "variable",
      variants: [
        // using more strict pattern for higher relevance to increase chances of Less detection.
        // this is *the only* Less specific statement used in most of the sources, so...
        // (we’ll still often loose to the css-parser unless there's '//' comment,
        // simply because 1 variable just can't beat 99 properties :)
        {
          begin: "@" + h + "\\s*:",
          relevance: 15
        },
        { begin: "@" + h }
      ],
      starts: {
        end: "[;}]",
        returnEnd: !0,
        contains: I
      }
    }, $ = {
      // first parse unambiguous selectors (i.e. those not starting with tag)
      // then fall into the scary lookahead-discriminator variant.
      // this mode also handles mixin definitions and calls
      variants: [
        {
          begin: "[\\.#:&\\[>]",
          end: "[;{}]"
          // mixin calls end with ';'
        },
        {
          begin: g,
          end: /\{/
        }
      ],
      returnBegin: !0,
      returnEnd: !0,
      illegal: `[<='$"]`,
      relevance: 0,
      contains: [
        c.C_LINE_COMMENT_MODE,
        c.C_BLOCK_COMMENT_MODE,
        z,
        y("keyword", "all\\b"),
        y("variable", "@\\{" + h + "\\}"),
        // otherwise it’s identified as tag
        {
          begin: "\\b(" + r.join("|") + ")\\b",
          className: "selector-tag"
        },
        d.CSS_NUMBER_MODE,
        y("selector-tag", g, 0),
        y("selector-id", "#" + g),
        y("selector-class", "\\." + g, 0),
        y("selector-tag", "&", 0),
        d.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-pseudo",
          begin: ":(" + a.join("|") + ")"
        },
        {
          className: "selector-pseudo",
          begin: ":(:)?(" + i.join("|") + ")"
        },
        {
          begin: /\(/,
          end: /\)/,
          relevance: 0,
          contains: I
        },
        // argument list of parametric mixins
        { begin: "!important" },
        // eat !important after mixin call or it will be colored as tag
        d.FUNCTION_DISPATCH
      ]
    }, D = {
      begin: h + `:(:)?(${p.join("|")})`,
      returnBegin: !0,
      contains: [$]
    };
    return f.push(
      c.C_LINE_COMMENT_MODE,
      c.C_BLOCK_COMMENT_MODE,
      T,
      A,
      D,
      R,
      $,
      z,
      d.FUNCTION_DISPATCH
    ), {
      name: "Less",
      case_insensitive: !0,
      illegal: `[=>'/<($"]`,
      contains: f
    };
  }
  return Cr = l, Cr;
}
var Tr, vi;
function Gp() {
  if (vi) return Tr;
  vi = 1;
  function n(e) {
    const t = "\\[=*\\[", r = "\\]=*\\]", s = {
      begin: t,
      end: r,
      contains: ["self"]
    }, a = [
      e.COMMENT("--(?!" + t + ")", "$"),
      e.COMMENT(
        "--" + t,
        r,
        {
          contains: [s],
          relevance: 10
        }
      )
    ];
    return {
      name: "Lua",
      keywords: {
        $pattern: e.UNDERSCORE_IDENT_RE,
        literal: "true false nil",
        keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
        built_in: (
          // Metatags and globals:
          "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
        )
      },
      contains: a.concat([
        {
          className: "function",
          beginKeywords: "function",
          end: "\\)",
          contains: [
            e.inherit(e.TITLE_MODE, { begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*" }),
            {
              className: "params",
              begin: "\\(",
              endsWithParent: !0,
              contains: a
            }
          ].concat(a)
        },
        e.C_NUMBER_MODE,
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        {
          className: "string",
          begin: t,
          end: r,
          contains: [s],
          relevance: 5
        }
      ])
    };
  }
  return Tr = n, Tr;
}
var Ar, Ei;
function Wp() {
  if (Ei) return Ar;
  Ei = 1;
  function n(e) {
    const t = {
      className: "variable",
      variants: [
        {
          begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
          contains: [e.BACKSLASH_ESCAPE]
        },
        { begin: /\$[@%<?\^\+\*]/ }
      ]
    }, r = {
      className: "string",
      begin: /"/,
      end: /"/,
      contains: [
        e.BACKSLASH_ESCAPE,
        t
      ]
    }, s = {
      className: "variable",
      begin: /\$\([\w-]+\s/,
      end: /\)/,
      keywords: { built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value" },
      contains: [t]
    }, a = { begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" }, i = {
      className: "meta",
      begin: /^\.PHONY:/,
      end: /$/,
      keywords: {
        $pattern: /[\.\w]+/,
        keyword: ".PHONY"
      }
    }, o = {
      className: "section",
      begin: /^[^\s]+:/,
      end: /$/,
      contains: [t]
    };
    return {
      name: "Makefile",
      aliases: [
        "mk",
        "mak",
        "make"
      ],
      keywords: {
        $pattern: /[\w-]+/,
        keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
      },
      contains: [
        e.HASH_COMMENT_MODE,
        t,
        r,
        s,
        a,
        i,
        o
      ]
    };
  }
  return Ar = n, Ar;
}
var Ir, wi;
function Yp() {
  if (wi) return Ir;
  wi = 1;
  function n(e) {
    const t = e.regex, r = [
      "abs",
      "accept",
      "alarm",
      "and",
      "atan2",
      "bind",
      "binmode",
      "bless",
      "break",
      "caller",
      "chdir",
      "chmod",
      "chomp",
      "chop",
      "chown",
      "chr",
      "chroot",
      "class",
      "close",
      "closedir",
      "connect",
      "continue",
      "cos",
      "crypt",
      "dbmclose",
      "dbmopen",
      "defined",
      "delete",
      "die",
      "do",
      "dump",
      "each",
      "else",
      "elsif",
      "endgrent",
      "endhostent",
      "endnetent",
      "endprotoent",
      "endpwent",
      "endservent",
      "eof",
      "eval",
      "exec",
      "exists",
      "exit",
      "exp",
      "fcntl",
      "field",
      "fileno",
      "flock",
      "for",
      "foreach",
      "fork",
      "format",
      "formline",
      "getc",
      "getgrent",
      "getgrgid",
      "getgrnam",
      "gethostbyaddr",
      "gethostbyname",
      "gethostent",
      "getlogin",
      "getnetbyaddr",
      "getnetbyname",
      "getnetent",
      "getpeername",
      "getpgrp",
      "getpriority",
      "getprotobyname",
      "getprotobynumber",
      "getprotoent",
      "getpwent",
      "getpwnam",
      "getpwuid",
      "getservbyname",
      "getservbyport",
      "getservent",
      "getsockname",
      "getsockopt",
      "given",
      "glob",
      "gmtime",
      "goto",
      "grep",
      "gt",
      "hex",
      "if",
      "index",
      "int",
      "ioctl",
      "join",
      "keys",
      "kill",
      "last",
      "lc",
      "lcfirst",
      "length",
      "link",
      "listen",
      "local",
      "localtime",
      "log",
      "lstat",
      "lt",
      "ma",
      "map",
      "method",
      "mkdir",
      "msgctl",
      "msgget",
      "msgrcv",
      "msgsnd",
      "my",
      "ne",
      "next",
      "no",
      "not",
      "oct",
      "open",
      "opendir",
      "or",
      "ord",
      "our",
      "pack",
      "package",
      "pipe",
      "pop",
      "pos",
      "print",
      "printf",
      "prototype",
      "push",
      "q|0",
      "qq",
      "quotemeta",
      "qw",
      "qx",
      "rand",
      "read",
      "readdir",
      "readline",
      "readlink",
      "readpipe",
      "recv",
      "redo",
      "ref",
      "rename",
      "require",
      "reset",
      "return",
      "reverse",
      "rewinddir",
      "rindex",
      "rmdir",
      "say",
      "scalar",
      "seek",
      "seekdir",
      "select",
      "semctl",
      "semget",
      "semop",
      "send",
      "setgrent",
      "sethostent",
      "setnetent",
      "setpgrp",
      "setpriority",
      "setprotoent",
      "setpwent",
      "setservent",
      "setsockopt",
      "shift",
      "shmctl",
      "shmget",
      "shmread",
      "shmwrite",
      "shutdown",
      "sin",
      "sleep",
      "socket",
      "socketpair",
      "sort",
      "splice",
      "split",
      "sprintf",
      "sqrt",
      "srand",
      "stat",
      "state",
      "study",
      "sub",
      "substr",
      "symlink",
      "syscall",
      "sysopen",
      "sysread",
      "sysseek",
      "system",
      "syswrite",
      "tell",
      "telldir",
      "tie",
      "tied",
      "time",
      "times",
      "tr",
      "truncate",
      "uc",
      "ucfirst",
      "umask",
      "undef",
      "unless",
      "unlink",
      "unpack",
      "unshift",
      "untie",
      "until",
      "use",
      "utime",
      "values",
      "vec",
      "wait",
      "waitpid",
      "wantarray",
      "warn",
      "when",
      "while",
      "write",
      "x|0",
      "xor",
      "y|0"
    ], s = /[dualxmsipngr]{0,12}/, a = {
      $pattern: /[\w.]+/,
      keyword: r.join(" ")
    }, i = {
      className: "subst",
      begin: "[$@]\\{",
      end: "\\}",
      keywords: a
    }, o = {
      begin: /->\{/,
      end: /\}/
      // contains defined later
    }, u = {
      scope: "attr",
      match: /\s+:\s*\w+(\s*\(.*?\))?/
    }, l = {
      scope: "variable",
      variants: [
        { begin: /\$\d/ },
        {
          begin: t.concat(
            /[$%@](?!")(\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
            // negative look-ahead tries to avoid matching patterns that are not
            // Perl at all like $ident$, @ident@, etc.
            "(?![A-Za-z])(?![@$%])"
          )
        },
        {
          // Only $= is a special Perl variable and one can't declare @= or %=.
          begin: /[$%@](?!")[^\s\w{=]|\$=/,
          relevance: 0
        }
      ],
      contains: [u]
    }, c = {
      className: "number",
      variants: [
        // decimal numbers:
        // include the case where a number starts with a dot (eg. .9), and
        // the leading 0? avoids mixing the first and second match on 0.x cases
        { match: /0?\.[0-9][0-9_]+\b/ },
        // include the special versioned number (eg. v5.38)
        { match: /\bv?(0|[1-9][0-9_]*(\.[0-9_]+)?|[1-9][0-9_]*)\b/ },
        // non-decimal numbers:
        { match: /\b0[0-7][0-7_]*\b/ },
        { match: /\b0x[0-9a-fA-F][0-9a-fA-F_]*\b/ },
        { match: /\b0b[0-1][0-1_]*\b/ }
      ],
      relevance: 0
    }, d = [
      e.BACKSLASH_ESCAPE,
      i,
      l
    ], p = [
      /!/,
      /\//,
      /\|/,
      /\?/,
      /'/,
      /"/,
      // valid but infrequent and weird
      /#/
      // valid but infrequent and weird
    ], m = (f, E, b = "\\1") => {
      const y = b === "\\1" ? b : t.concat(b, E);
      return t.concat(
        t.concat("(?:", f, ")"),
        E,
        /(?:\\.|[^\\\/])*?/,
        y,
        /(?:\\.|[^\\\/])*?/,
        b,
        s
      );
    }, h = (f, E, b) => t.concat(
      t.concat("(?:", f, ")"),
      E,
      /(?:\\.|[^\\\/])*?/,
      b,
      s
    ), g = [
      l,
      e.HASH_COMMENT_MODE,
      e.COMMENT(
        /^=\w/,
        /=cut/,
        { endsWithParent: !0 }
      ),
      o,
      {
        className: "string",
        contains: d,
        variants: [
          {
            begin: "q[qwxr]?\\s*\\(",
            end: "\\)",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*\\[",
            end: "\\]",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*\\{",
            end: "\\}",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*\\|",
            end: "\\|",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*<",
            end: ">",
            relevance: 5
          },
          {
            begin: "qw\\s+q",
            end: "q",
            relevance: 5
          },
          {
            begin: "'",
            end: "'",
            contains: [e.BACKSLASH_ESCAPE]
          },
          {
            begin: '"',
            end: '"'
          },
          {
            begin: "`",
            end: "`",
            contains: [e.BACKSLASH_ESCAPE]
          },
          {
            begin: /\{\w+\}/,
            relevance: 0
          },
          {
            begin: "-?\\w+\\s*=>",
            relevance: 0
          }
        ]
      },
      c,
      {
        // regexp container
        begin: "(\\/\\/|" + e.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        keywords: "split return print reverse grep",
        relevance: 0,
        contains: [
          e.HASH_COMMENT_MODE,
          {
            className: "regexp",
            variants: [
              // allow matching common delimiters
              { begin: m("s|tr|y", t.either(...p, { capture: !0 })) },
              // and then paired delmis
              { begin: m("s|tr|y", "\\(", "\\)") },
              { begin: m("s|tr|y", "\\[", "\\]") },
              { begin: m("s|tr|y", "\\{", "\\}") }
            ],
            relevance: 2
          },
          {
            className: "regexp",
            variants: [
              {
                // could be a comment in many languages so do not count
                // as relevant
                begin: /(m|qr)\/\//,
                relevance: 0
              },
              // prefix is optional with /regex/
              { begin: h("(?:m|qr)?", /\//, /\//) },
              // allow matching common delimiters
              { begin: h("m|qr", t.either(...p, { capture: !0 }), /\1/) },
              // allow common paired delmins
              { begin: h("m|qr", /\(/, /\)/) },
              { begin: h("m|qr", /\[/, /\]/) },
              { begin: h("m|qr", /\{/, /\}/) }
            ]
          }
        ]
      },
      {
        className: "function",
        beginKeywords: "sub method",
        end: "(\\s*\\(.*?\\))?[;{]",
        excludeEnd: !0,
        relevance: 5,
        contains: [e.TITLE_MODE, u]
      },
      {
        className: "class",
        beginKeywords: "class",
        end: "[;{]",
        excludeEnd: !0,
        relevance: 5,
        contains: [e.TITLE_MODE, u, c]
      },
      {
        begin: "-\\w\\b",
        relevance: 0
      },
      {
        begin: "^__DATA__$",
        end: "^__END__$",
        subLanguage: "mojolicious",
        contains: [
          {
            begin: "^@@.*",
            end: "$",
            className: "comment"
          }
        ]
      }
    ];
    return i.contains = g, o.contains = g, {
      name: "Perl",
      aliases: [
        "pl",
        "pm"
      ],
      keywords: a,
      contains: g
    };
  }
  return Ir = n, Ir;
}
var Rr, xi;
function Zp() {
  if (xi) return Rr;
  xi = 1;
  function n(e) {
    const t = {
      className: "built_in",
      begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
    }, r = /[a-zA-Z@][a-zA-Z0-9_]*/, u = {
      "variable.language": [
        "this",
        "super"
      ],
      $pattern: r,
      keyword: [
        "while",
        "export",
        "sizeof",
        "typedef",
        "const",
        "struct",
        "for",
        "union",
        "volatile",
        "static",
        "mutable",
        "if",
        "do",
        "return",
        "goto",
        "enum",
        "else",
        "break",
        "extern",
        "asm",
        "case",
        "default",
        "register",
        "explicit",
        "typename",
        "switch",
        "continue",
        "inline",
        "readonly",
        "assign",
        "readwrite",
        "self",
        "@synchronized",
        "id",
        "typeof",
        "nonatomic",
        "IBOutlet",
        "IBAction",
        "strong",
        "weak",
        "copy",
        "in",
        "out",
        "inout",
        "bycopy",
        "byref",
        "oneway",
        "__strong",
        "__weak",
        "__block",
        "__autoreleasing",
        "@private",
        "@protected",
        "@public",
        "@try",
        "@property",
        "@end",
        "@throw",
        "@catch",
        "@finally",
        "@autoreleasepool",
        "@synthesize",
        "@dynamic",
        "@selector",
        "@optional",
        "@required",
        "@encode",
        "@package",
        "@import",
        "@defs",
        "@compatibility_alias",
        "__bridge",
        "__bridge_transfer",
        "__bridge_retained",
        "__bridge_retain",
        "__covariant",
        "__contravariant",
        "__kindof",
        "_Nonnull",
        "_Nullable",
        "_Null_unspecified",
        "__FUNCTION__",
        "__PRETTY_FUNCTION__",
        "__attribute__",
        "getter",
        "setter",
        "retain",
        "unsafe_unretained",
        "nonnull",
        "nullable",
        "null_unspecified",
        "null_resettable",
        "class",
        "instancetype",
        "NS_DESIGNATED_INITIALIZER",
        "NS_UNAVAILABLE",
        "NS_REQUIRES_SUPER",
        "NS_RETURNS_INNER_POINTER",
        "NS_INLINE",
        "NS_AVAILABLE",
        "NS_DEPRECATED",
        "NS_ENUM",
        "NS_OPTIONS",
        "NS_SWIFT_UNAVAILABLE",
        "NS_ASSUME_NONNULL_BEGIN",
        "NS_ASSUME_NONNULL_END",
        "NS_REFINED_FOR_SWIFT",
        "NS_SWIFT_NAME",
        "NS_SWIFT_NOTHROW",
        "NS_DURING",
        "NS_HANDLER",
        "NS_ENDHANDLER",
        "NS_VALUERETURN",
        "NS_VOIDRETURN"
      ],
      literal: [
        "false",
        "true",
        "FALSE",
        "TRUE",
        "nil",
        "YES",
        "NO",
        "NULL"
      ],
      built_in: [
        "dispatch_once_t",
        "dispatch_queue_t",
        "dispatch_sync",
        "dispatch_async",
        "dispatch_once"
      ],
      type: [
        "int",
        "float",
        "char",
        "unsigned",
        "signed",
        "short",
        "long",
        "double",
        "wchar_t",
        "unichar",
        "void",
        "bool",
        "BOOL",
        "id|0",
        "_Bool"
      ]
    }, l = {
      $pattern: r,
      keyword: [
        "@interface",
        "@class",
        "@protocol",
        "@implementation"
      ]
    };
    return {
      name: "Objective-C",
      aliases: [
        "mm",
        "objc",
        "obj-c",
        "obj-c++",
        "objective-c++"
      ],
      keywords: u,
      illegal: "</",
      contains: [
        t,
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        e.C_NUMBER_MODE,
        e.QUOTE_STRING_MODE,
        e.APOS_STRING_MODE,
        {
          className: "string",
          variants: [
            {
              begin: '@"',
              end: '"',
              illegal: "\\n",
              contains: [e.BACKSLASH_ESCAPE]
            }
          ]
        },
        {
          className: "meta",
          begin: /#\s*[a-z]+\b/,
          end: /$/,
          keywords: { keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include" },
          contains: [
            {
              begin: /\\\n/,
              relevance: 0
            },
            e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
            {
              className: "string",
              begin: /<.*?>/,
              end: /$/,
              illegal: "\\n"
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          className: "class",
          begin: "(" + l.keyword.join("|") + ")\\b",
          end: /(\{|$)/,
          excludeEnd: !0,
          keywords: l,
          contains: [e.UNDERSCORE_TITLE_MODE]
        },
        {
          begin: "\\." + e.UNDERSCORE_IDENT_RE,
          relevance: 0
        }
      ]
    };
  }
  return Rr = n, Rr;
}
var Or, ki;
function Qp() {
  if (ki) return Or;
  ki = 1;
  function n(e) {
    const t = e.regex, r = /(?![A-Za-z0-9])(?![$])/, s = t.concat(
      /[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
      r
    ), a = t.concat(
      /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
      r
    ), i = {
      scope: "variable",
      match: "\\$+" + s
    }, o = {
      scope: "meta",
      variants: [
        { begin: /<\?php/, relevance: 10 },
        // boost for obvious PHP
        { begin: /<\?=/ },
        // less relevant per PSR-1 which says not to use short-tags
        { begin: /<\?/, relevance: 0.1 },
        { begin: /\?>/ }
        // end php tag
      ]
    }, u = {
      scope: "subst",
      variants: [
        { begin: /\$\w+/ },
        {
          begin: /\{\$/,
          end: /\}/
        }
      ]
    }, l = e.inherit(e.APOS_STRING_MODE, { illegal: null }), c = e.inherit(e.QUOTE_STRING_MODE, {
      illegal: null,
      contains: e.QUOTE_STRING_MODE.contains.concat(u)
    }), d = {
      begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
      end: /[ \t]*(\w+)\b/,
      contains: e.QUOTE_STRING_MODE.contains.concat(u),
      "on:begin": (P, W) => {
        W.data._beginMatch = P[1] || P[2];
      },
      "on:end": (P, W) => {
        W.data._beginMatch !== P[1] && W.ignoreMatch();
      }
    }, p = e.END_SAME_AS_BEGIN({
      begin: /<<<[ \t]*'(\w+)'\n/,
      end: /[ \t]*(\w+)\b/
    }), m = `[ 	
]`, h = {
      scope: "string",
      variants: [
        c,
        l,
        d,
        p
      ]
    }, g = {
      scope: "number",
      variants: [
        { begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
        // Binary w/ underscore support
        { begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
        // Octals w/ underscore support
        { begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
        // Hex w/ underscore support
        // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
        { begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?" }
      ],
      relevance: 0
    }, f = [
      "false",
      "null",
      "true"
    ], E = [
      // Magic constants:
      // <https://www.php.net/manual/en/language.constants.predefined.php>
      "__CLASS__",
      "__DIR__",
      "__FILE__",
      "__FUNCTION__",
      "__COMPILER_HALT_OFFSET__",
      "__LINE__",
      "__METHOD__",
      "__NAMESPACE__",
      "__TRAIT__",
      // Function that look like language construct or language construct that look like function:
      // List of keywords that may not require parenthesis
      "die",
      "echo",
      "exit",
      "include",
      "include_once",
      "print",
      "require",
      "require_once",
      // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
      // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
      // Other keywords:
      // <https://www.php.net/manual/en/reserved.php>
      // <https://www.php.net/manual/en/language.types.type-juggling.php>
      "array",
      "abstract",
      "and",
      "as",
      "binary",
      "bool",
      "boolean",
      "break",
      "callable",
      "case",
      "catch",
      "class",
      "clone",
      "const",
      "continue",
      "declare",
      "default",
      "do",
      "double",
      "else",
      "elseif",
      "empty",
      "enddeclare",
      "endfor",
      "endforeach",
      "endif",
      "endswitch",
      "endwhile",
      "enum",
      "eval",
      "extends",
      "final",
      "finally",
      "float",
      "for",
      "foreach",
      "from",
      "global",
      "goto",
      "if",
      "implements",
      "instanceof",
      "insteadof",
      "int",
      "integer",
      "interface",
      "isset",
      "iterable",
      "list",
      "match|0",
      "mixed",
      "new",
      "never",
      "object",
      "or",
      "private",
      "protected",
      "public",
      "readonly",
      "real",
      "return",
      "string",
      "switch",
      "throw",
      "trait",
      "try",
      "unset",
      "use",
      "var",
      "void",
      "while",
      "xor",
      "yield"
    ], b = [
      // Standard PHP library:
      // <https://www.php.net/manual/en/book.spl.php>
      "Error|0",
      "AppendIterator",
      "ArgumentCountError",
      "ArithmeticError",
      "ArrayIterator",
      "ArrayObject",
      "AssertionError",
      "BadFunctionCallException",
      "BadMethodCallException",
      "CachingIterator",
      "CallbackFilterIterator",
      "CompileError",
      "Countable",
      "DirectoryIterator",
      "DivisionByZeroError",
      "DomainException",
      "EmptyIterator",
      "ErrorException",
      "Exception",
      "FilesystemIterator",
      "FilterIterator",
      "GlobIterator",
      "InfiniteIterator",
      "InvalidArgumentException",
      "IteratorIterator",
      "LengthException",
      "LimitIterator",
      "LogicException",
      "MultipleIterator",
      "NoRewindIterator",
      "OutOfBoundsException",
      "OutOfRangeException",
      "OuterIterator",
      "OverflowException",
      "ParentIterator",
      "ParseError",
      "RangeException",
      "RecursiveArrayIterator",
      "RecursiveCachingIterator",
      "RecursiveCallbackFilterIterator",
      "RecursiveDirectoryIterator",
      "RecursiveFilterIterator",
      "RecursiveIterator",
      "RecursiveIteratorIterator",
      "RecursiveRegexIterator",
      "RecursiveTreeIterator",
      "RegexIterator",
      "RuntimeException",
      "SeekableIterator",
      "SplDoublyLinkedList",
      "SplFileInfo",
      "SplFileObject",
      "SplFixedArray",
      "SplHeap",
      "SplMaxHeap",
      "SplMinHeap",
      "SplObjectStorage",
      "SplObserver",
      "SplPriorityQueue",
      "SplQueue",
      "SplStack",
      "SplSubject",
      "SplTempFileObject",
      "TypeError",
      "UnderflowException",
      "UnexpectedValueException",
      "UnhandledMatchError",
      // Reserved interfaces:
      // <https://www.php.net/manual/en/reserved.interfaces.php>
      "ArrayAccess",
      "BackedEnum",
      "Closure",
      "Fiber",
      "Generator",
      "Iterator",
      "IteratorAggregate",
      "Serializable",
      "Stringable",
      "Throwable",
      "Traversable",
      "UnitEnum",
      "WeakReference",
      "WeakMap",
      // Reserved classes:
      // <https://www.php.net/manual/en/reserved.classes.php>
      "Directory",
      "__PHP_Incomplete_Class",
      "parent",
      "php_user_filter",
      "self",
      "static",
      "stdClass"
    ], S = {
      keyword: E,
      literal: ((P) => {
        const W = [];
        return P.forEach((oe) => {
          W.push(oe), oe.toLowerCase() === oe ? W.push(oe.toUpperCase()) : W.push(oe.toLowerCase());
        }), W;
      })(f),
      built_in: b
    }, w = (P) => P.map((W) => W.replace(/\|\d+$/, "")), I = { variants: [
      {
        match: [
          /new/,
          t.concat(m, "+"),
          // to prevent built ins from being confused as the class constructor call
          t.concat("(?!", w(b).join("\\b|"), "\\b)"),
          a
        ],
        scope: {
          1: "keyword",
          4: "title.class"
        }
      }
    ] }, z = t.concat(s, "\\b(?!\\()"), R = { variants: [
      {
        match: [
          t.concat(
            /::/,
            t.lookahead(/(?!class\b)/)
          ),
          z
        ],
        scope: { 2: "variable.constant" }
      },
      {
        match: [
          /::/,
          /class/
        ],
        scope: { 2: "variable.language" }
      },
      {
        match: [
          a,
          t.concat(
            /::/,
            t.lookahead(/(?!class\b)/)
          ),
          z
        ],
        scope: {
          1: "title.class",
          3: "variable.constant"
        }
      },
      {
        match: [
          a,
          t.concat(
            "::",
            t.lookahead(/(?!class\b)/)
          )
        ],
        scope: { 1: "title.class" }
      },
      {
        match: [
          a,
          /::/,
          /class/
        ],
        scope: {
          1: "title.class",
          3: "variable.language"
        }
      }
    ] }, T = {
      scope: "attr",
      match: t.concat(s, t.lookahead(":"), t.lookahead(/(?!::)/))
    }, A = {
      relevance: 0,
      begin: /\(/,
      end: /\)/,
      keywords: S,
      contains: [
        T,
        i,
        R,
        e.C_BLOCK_COMMENT_MODE,
        h,
        g,
        I
      ]
    }, $ = {
      relevance: 0,
      match: [
        /\b/,
        // to prevent keywords from being confused as the function title
        t.concat("(?!fn\\b|function\\b|", w(E).join("\\b|"), "|", w(b).join("\\b|"), "\\b)"),
        s,
        t.concat(m, "*"),
        t.lookahead(/(?=\()/)
      ],
      scope: { 3: "title.function.invoke" },
      contains: [A]
    };
    A.contains.push($);
    const D = [
      T,
      R,
      e.C_BLOCK_COMMENT_MODE,
      h,
      g,
      I
    ], H = {
      begin: t.concat(/#\[\s*/, a),
      beginScope: "meta",
      end: /]/,
      endScope: "meta",
      keywords: {
        literal: f,
        keyword: [
          "new",
          "array"
        ]
      },
      contains: [
        {
          begin: /\[/,
          end: /]/,
          keywords: {
            literal: f,
            keyword: [
              "new",
              "array"
            ]
          },
          contains: [
            "self",
            ...D
          ]
        },
        ...D,
        {
          scope: "meta",
          match: a
        }
      ]
    };
    return {
      case_insensitive: !1,
      keywords: S,
      contains: [
        H,
        e.HASH_COMMENT_MODE,
        e.COMMENT("//", "$"),
        e.COMMENT(
          "/\\*",
          "\\*/",
          { contains: [
            {
              scope: "doctag",
              match: "@[A-Za-z]+"
            }
          ] }
        ),
        {
          match: /__halt_compiler\(\);/,
          keywords: "__halt_compiler",
          starts: {
            scope: "comment",
            end: e.MATCH_NOTHING_RE,
            contains: [
              {
                match: /\?>/,
                scope: "meta",
                endsParent: !0
              }
            ]
          }
        },
        o,
        {
          scope: "variable.language",
          match: /\$this\b/
        },
        i,
        $,
        R,
        {
          match: [
            /const/,
            /\s/,
            s
          ],
          scope: {
            1: "keyword",
            3: "variable.constant"
          }
        },
        I,
        {
          scope: "function",
          relevance: 0,
          beginKeywords: "fn function",
          end: /[;{]/,
          excludeEnd: !0,
          illegal: "[$%\\[]",
          contains: [
            { beginKeywords: "use" },
            e.UNDERSCORE_TITLE_MODE,
            {
              begin: "=>",
              // No markup, just a relevance booster
              endsParent: !0
            },
            {
              scope: "params",
              begin: "\\(",
              end: "\\)",
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: S,
              contains: [
                "self",
                i,
                R,
                e.C_BLOCK_COMMENT_MODE,
                h,
                g
              ]
            }
          ]
        },
        {
          scope: "class",
          variants: [
            {
              beginKeywords: "enum",
              illegal: /[($"]/
            },
            {
              beginKeywords: "class interface trait",
              illegal: /[:($"]/
            }
          ],
          relevance: 0,
          end: /\{/,
          excludeEnd: !0,
          contains: [
            { beginKeywords: "extends implements" },
            e.UNDERSCORE_TITLE_MODE
          ]
        },
        // both use and namespace still use "old style" rules (vs multi-match)
        // because the namespace name can include `\` and we still want each
        // element to be treated as its own *individual* title
        {
          beginKeywords: "namespace",
          relevance: 0,
          end: ";",
          illegal: /[.']/,
          contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
        },
        {
          beginKeywords: "use",
          relevance: 0,
          end: ";",
          contains: [
            // TODO: title.function vs title.class
            {
              match: /\b(as|const|function)\b/,
              scope: "keyword"
            },
            // TODO: could be title.class or title.function
            e.UNDERSCORE_TITLE_MODE
          ]
        },
        h,
        g
      ]
    };
  }
  return Or = n, Or;
}
var Nr, Si;
function Xp() {
  if (Si) return Nr;
  Si = 1;
  function n(e) {
    return {
      name: "PHP template",
      subLanguage: "xml",
      contains: [
        {
          begin: /<\?(php|=)?/,
          end: /\?>/,
          subLanguage: "php",
          contains: [
            // We don't want the php closing tag ?> to close the PHP block when
            // inside any of the following blocks:
            {
              begin: "/\\*",
              end: "\\*/",
              skip: !0
            },
            {
              begin: 'b"',
              end: '"',
              skip: !0
            },
            {
              begin: "b'",
              end: "'",
              skip: !0
            },
            e.inherit(e.APOS_STRING_MODE, {
              illegal: null,
              className: null,
              contains: null,
              skip: !0
            }),
            e.inherit(e.QUOTE_STRING_MODE, {
              illegal: null,
              className: null,
              contains: null,
              skip: !0
            })
          ]
        }
      ]
    };
  }
  return Nr = n, Nr;
}
var Mr, _i;
function Vp() {
  if (_i) return Mr;
  _i = 1;
  function n(e) {
    return {
      name: "Plain text",
      aliases: [
        "text",
        "txt"
      ],
      disableAutodetect: !0
    };
  }
  return Mr = n, Mr;
}
var Dr, Ci;
function Jp() {
  if (Ci) return Dr;
  Ci = 1;
  function n(e) {
    const t = e.regex, r = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), s = [
      "and",
      "as",
      "assert",
      "async",
      "await",
      "break",
      "case",
      "class",
      "continue",
      "def",
      "del",
      "elif",
      "else",
      "except",
      "finally",
      "for",
      "from",
      "global",
      "if",
      "import",
      "in",
      "is",
      "lambda",
      "match",
      "nonlocal|10",
      "not",
      "or",
      "pass",
      "raise",
      "return",
      "try",
      "while",
      "with",
      "yield"
    ], u = {
      $pattern: /[A-Za-z]\w+|__\w+__/,
      keyword: s,
      built_in: [
        "__import__",
        "abs",
        "all",
        "any",
        "ascii",
        "bin",
        "bool",
        "breakpoint",
        "bytearray",
        "bytes",
        "callable",
        "chr",
        "classmethod",
        "compile",
        "complex",
        "delattr",
        "dict",
        "dir",
        "divmod",
        "enumerate",
        "eval",
        "exec",
        "filter",
        "float",
        "format",
        "frozenset",
        "getattr",
        "globals",
        "hasattr",
        "hash",
        "help",
        "hex",
        "id",
        "input",
        "int",
        "isinstance",
        "issubclass",
        "iter",
        "len",
        "list",
        "locals",
        "map",
        "max",
        "memoryview",
        "min",
        "next",
        "object",
        "oct",
        "open",
        "ord",
        "pow",
        "print",
        "property",
        "range",
        "repr",
        "reversed",
        "round",
        "set",
        "setattr",
        "slice",
        "sorted",
        "staticmethod",
        "str",
        "sum",
        "super",
        "tuple",
        "type",
        "vars",
        "zip"
      ],
      literal: [
        "__debug__",
        "Ellipsis",
        "False",
        "None",
        "NotImplemented",
        "True"
      ],
      type: [
        "Any",
        "Callable",
        "Coroutine",
        "Dict",
        "List",
        "Literal",
        "Generic",
        "Optional",
        "Sequence",
        "Set",
        "Tuple",
        "Type",
        "Union"
      ]
    }, l = {
      className: "meta",
      begin: /^(>>>|\.\.\.) /
    }, c = {
      className: "subst",
      begin: /\{/,
      end: /\}/,
      keywords: u,
      illegal: /#/
    }, d = {
      begin: /\{\{/,
      relevance: 0
    }, p = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE],
      variants: [
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
          end: /'''/,
          contains: [
            e.BACKSLASH_ESCAPE,
            l
          ],
          relevance: 10
        },
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
          end: /"""/,
          contains: [
            e.BACKSLASH_ESCAPE,
            l
          ],
          relevance: 10
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])'''/,
          end: /'''/,
          contains: [
            e.BACKSLASH_ESCAPE,
            l,
            d,
            c
          ]
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])"""/,
          end: /"""/,
          contains: [
            e.BACKSLASH_ESCAPE,
            l,
            d,
            c
          ]
        },
        {
          begin: /([uU]|[rR])'/,
          end: /'/,
          relevance: 10
        },
        {
          begin: /([uU]|[rR])"/,
          end: /"/,
          relevance: 10
        },
        {
          begin: /([bB]|[bB][rR]|[rR][bB])'/,
          end: /'/
        },
        {
          begin: /([bB]|[bB][rR]|[rR][bB])"/,
          end: /"/
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])'/,
          end: /'/,
          contains: [
            e.BACKSLASH_ESCAPE,
            d,
            c
          ]
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])"/,
          end: /"/,
          contains: [
            e.BACKSLASH_ESCAPE,
            d,
            c
          ]
        },
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE
      ]
    }, m = "[0-9](_?[0-9])*", h = `(\\b(${m}))?\\.(${m})|\\b(${m})\\.`, g = `\\b|${s.join("|")}`, f = {
      className: "number",
      relevance: 0,
      variants: [
        // exponentfloat, pointfloat
        // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
        // optionally imaginary
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        // Note: no leading \b because floats can start with a decimal point
        // and we don't want to mishandle e.g. `fn(.5)`,
        // no trailing \b for pointfloat because it can end with a decimal point
        // and we don't want to mishandle e.g. `0..hex()`; this should be safe
        // because both MUST contain a decimal point and so cannot be confused with
        // the interior part of an identifier
        {
          begin: `(\\b(${m})|(${h}))[eE][+-]?(${m})[jJ]?(?=${g})`
        },
        {
          begin: `(${h})[jJ]?`
        },
        // decinteger, bininteger, octinteger, hexinteger
        // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
        // optionally "long" in Python 2
        // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
        // decinteger is optionally imaginary
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        {
          begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${g})`
        },
        {
          begin: `\\b0[bB](_?[01])+[lL]?(?=${g})`
        },
        {
          begin: `\\b0[oO](_?[0-7])+[lL]?(?=${g})`
        },
        {
          begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${g})`
        },
        // imagnumber (digitpart-based)
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        {
          begin: `\\b(${m})[jJ](?=${g})`
        }
      ]
    }, E = {
      className: "comment",
      begin: t.lookahead(/# type:/),
      end: /$/,
      keywords: u,
      contains: [
        {
          // prevent keywords from coloring `type`
          begin: /# type:/
        },
        // comment within a datatype comment includes no keywords
        {
          begin: /#/,
          end: /\b\B/,
          endsWithParent: !0
        }
      ]
    }, b = {
      className: "params",
      variants: [
        // Exclude params in functions without params
        {
          className: "",
          begin: /\(\s*\)/,
          skip: !0
        },
        {
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: u,
          contains: [
            "self",
            l,
            f,
            p,
            e.HASH_COMMENT_MODE
          ]
        }
      ]
    };
    return c.contains = [
      p,
      f,
      l
    ], {
      name: "Python",
      aliases: [
        "py",
        "gyp",
        "ipython"
      ],
      unicodeRegex: !0,
      keywords: u,
      illegal: /(<\/|\?)|=>/,
      contains: [
        l,
        f,
        {
          // very common convention
          scope: "variable.language",
          match: /\bself\b/
        },
        {
          // eat "if" prior to string so that it won't accidentally be
          // labeled as an f-string
          beginKeywords: "if",
          relevance: 0
        },
        { match: /\bor\b/, scope: "keyword" },
        p,
        E,
        e.HASH_COMMENT_MODE,
        {
          match: [
            /\bdef/,
            /\s+/,
            r
          ],
          scope: {
            1: "keyword",
            3: "title.function"
          },
          contains: [b]
        },
        {
          variants: [
            {
              match: [
                /\bclass/,
                /\s+/,
                r,
                /\s*/,
                /\(\s*/,
                r,
                /\s*\)/
              ]
            },
            {
              match: [
                /\bclass/,
                /\s+/,
                r
              ]
            }
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            6: "title.class.inherited"
          }
        },
        {
          className: "meta",
          begin: /^[\t ]*@/,
          end: /(?=#)|$/,
          contains: [
            f,
            b,
            p
          ]
        }
      ]
    };
  }
  return Dr = n, Dr;
}
var Lr, Ti;
function em() {
  if (Ti) return Lr;
  Ti = 1;
  function n(e) {
    return {
      aliases: ["pycon"],
      contains: [
        {
          className: "meta.prompt",
          starts: {
            // a space separates the REPL prefix from the actual code
            // this is purely for cleaner HTML output
            end: / |$/,
            starts: {
              end: "$",
              subLanguage: "python"
            }
          },
          variants: [
            { begin: /^>>>(?=[ ]|$)/ },
            { begin: /^\.\.\.(?=[ ]|$)/ }
          ]
        }
      ]
    };
  }
  return Lr = n, Lr;
}
var Pr, Ai;
function tm() {
  if (Ai) return Pr;
  Ai = 1;
  function n(e) {
    const t = e.regex, r = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/, s = t.either(
      // Special case: only hexadecimal binary powers can contain fractions
      /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
      // Hexadecimal numbers without fraction and optional binary power
      /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
      // Decimal numbers
      /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
    ), a = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/, i = t.either(
      /[()]/,
      /[{}]/,
      /\[\[/,
      /[[\]]/,
      /\\/,
      /,/
    );
    return {
      name: "R",
      keywords: {
        $pattern: r,
        keyword: "function if in break next repeat else for while",
        literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
        built_in: (
          // Builtin constants
          "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
        )
      },
      contains: [
        // Roxygen comments
        e.COMMENT(
          /#'/,
          /$/,
          { contains: [
            {
              // Handle `@examples` separately to cause all subsequent code
              // until the next `@`-tag on its own line to be kept as-is,
              // preventing highlighting. This code is example R code, so nested
              // doctags shouldn’t be treated as such. See
              // `test/markup/r/roxygen.txt` for an example.
              scope: "doctag",
              match: /@examples/,
              starts: {
                end: t.lookahead(t.either(
                  // end if another doc comment
                  /\n^#'\s*(?=@[a-zA-Z]+)/,
                  // or a line with no comment
                  /\n^(?!#')/
                )),
                endsParent: !0
              }
            },
            {
              // Handle `@param` to highlight the parameter name following
              // after.
              scope: "doctag",
              begin: "@param",
              end: /$/,
              contains: [
                {
                  scope: "variable",
                  variants: [
                    { match: r },
                    { match: /`(?:\\.|[^`\\])+`/ }
                  ],
                  endsParent: !0
                }
              ]
            },
            {
              scope: "doctag",
              match: /@[a-zA-Z]+/
            },
            {
              scope: "keyword",
              match: /\\[a-zA-Z]+/
            }
          ] }
        ),
        e.HASH_COMMENT_MODE,
        {
          scope: "string",
          contains: [e.BACKSLASH_ESCAPE],
          variants: [
            e.END_SAME_AS_BEGIN({
              begin: /[rR]"(-*)\(/,
              end: /\)(-*)"/
            }),
            e.END_SAME_AS_BEGIN({
              begin: /[rR]"(-*)\{/,
              end: /\}(-*)"/
            }),
            e.END_SAME_AS_BEGIN({
              begin: /[rR]"(-*)\[/,
              end: /\](-*)"/
            }),
            e.END_SAME_AS_BEGIN({
              begin: /[rR]'(-*)\(/,
              end: /\)(-*)'/
            }),
            e.END_SAME_AS_BEGIN({
              begin: /[rR]'(-*)\{/,
              end: /\}(-*)'/
            }),
            e.END_SAME_AS_BEGIN({
              begin: /[rR]'(-*)\[/,
              end: /\](-*)'/
            }),
            {
              begin: '"',
              end: '"',
              relevance: 0
            },
            {
              begin: "'",
              end: "'",
              relevance: 0
            }
          ]
        },
        // Matching numbers immediately following punctuation and operators is
        // tricky since we need to look at the character ahead of a number to
        // ensure the number is not part of an identifier, and we cannot use
        // negative look-behind assertions. So instead we explicitly handle all
        // possible combinations of (operator|punctuation), number.
        // TODO: replace with negative look-behind when available
        // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/ },
        // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ },
        // { begin: /(?<![a-zA-Z0-9._])(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/ }
        {
          relevance: 0,
          variants: [
            {
              scope: {
                1: "operator",
                2: "number"
              },
              match: [
                a,
                s
              ]
            },
            {
              scope: {
                1: "operator",
                2: "number"
              },
              match: [
                /%[^%]*%/,
                s
              ]
            },
            {
              scope: {
                1: "punctuation",
                2: "number"
              },
              match: [
                i,
                s
              ]
            },
            {
              scope: { 2: "number" },
              match: [
                /[^a-zA-Z0-9._]|^/,
                // not part of an identifier, or start of document
                s
              ]
            }
          ]
        },
        // Operators/punctuation when they're not directly followed by numbers
        {
          // Relevance boost for the most common assignment form.
          scope: { 3: "operator" },
          match: [
            r,
            /\s+/,
            /<-/,
            /\s+/
          ]
        },
        {
          scope: "operator",
          relevance: 0,
          variants: [
            { match: a },
            { match: /%[^%]*%/ }
          ]
        },
        {
          scope: "punctuation",
          relevance: 0,
          match: i
        },
        {
          // Escaped identifier
          begin: "`",
          end: "`",
          contains: [{ begin: /\\./ }]
        }
      ]
    };
  }
  return Pr = n, Pr;
}
var Br, Ii;
function nm() {
  if (Ii) return Br;
  Ii = 1;
  function n(e) {
    const t = e.regex, r = /(r#)?/, s = t.concat(r, e.UNDERSCORE_IDENT_RE), a = t.concat(r, e.IDENT_RE), i = {
      className: "title.function.invoke",
      relevance: 0,
      begin: t.concat(
        /\b/,
        /(?!let|for|while|if|else|match\b)/,
        a,
        t.lookahead(/\s*\(/)
      )
    }, o = "([ui](8|16|32|64|128|size)|f(32|64))?", u = [
      "abstract",
      "as",
      "async",
      "await",
      "become",
      "box",
      "break",
      "const",
      "continue",
      "crate",
      "do",
      "dyn",
      "else",
      "enum",
      "extern",
      "false",
      "final",
      "fn",
      "for",
      "if",
      "impl",
      "in",
      "let",
      "loop",
      "macro",
      "match",
      "mod",
      "move",
      "mut",
      "override",
      "priv",
      "pub",
      "ref",
      "return",
      "self",
      "Self",
      "static",
      "struct",
      "super",
      "trait",
      "true",
      "try",
      "type",
      "typeof",
      "union",
      "unsafe",
      "unsized",
      "use",
      "virtual",
      "where",
      "while",
      "yield"
    ], l = [
      "true",
      "false",
      "Some",
      "None",
      "Ok",
      "Err"
    ], c = [
      // functions
      "drop ",
      // traits
      "Copy",
      "Send",
      "Sized",
      "Sync",
      "Drop",
      "Fn",
      "FnMut",
      "FnOnce",
      "ToOwned",
      "Clone",
      "Debug",
      "PartialEq",
      "PartialOrd",
      "Eq",
      "Ord",
      "AsRef",
      "AsMut",
      "Into",
      "From",
      "Default",
      "Iterator",
      "Extend",
      "IntoIterator",
      "DoubleEndedIterator",
      "ExactSizeIterator",
      "SliceConcatExt",
      "ToString",
      // macros
      "assert!",
      "assert_eq!",
      "bitflags!",
      "bytes!",
      "cfg!",
      "col!",
      "concat!",
      "concat_idents!",
      "debug_assert!",
      "debug_assert_eq!",
      "env!",
      "eprintln!",
      "panic!",
      "file!",
      "format!",
      "format_args!",
      "include_bytes!",
      "include_str!",
      "line!",
      "local_data_key!",
      "module_path!",
      "option_env!",
      "print!",
      "println!",
      "select!",
      "stringify!",
      "try!",
      "unimplemented!",
      "unreachable!",
      "vec!",
      "write!",
      "writeln!",
      "macro_rules!",
      "assert_ne!",
      "debug_assert_ne!"
    ], d = [
      "i8",
      "i16",
      "i32",
      "i64",
      "i128",
      "isize",
      "u8",
      "u16",
      "u32",
      "u64",
      "u128",
      "usize",
      "f32",
      "f64",
      "str",
      "char",
      "bool",
      "Box",
      "Option",
      "Result",
      "String",
      "Vec"
    ];
    return {
      name: "Rust",
      aliases: ["rs"],
      keywords: {
        $pattern: e.IDENT_RE + "!?",
        type: d,
        keyword: u,
        literal: l,
        built_in: c
      },
      illegal: "</",
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
        e.inherit(e.QUOTE_STRING_MODE, {
          begin: /b?"/,
          illegal: null
        }),
        {
          className: "string",
          variants: [
            { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
            { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ }
          ]
        },
        {
          className: "symbol",
          begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
        },
        {
          className: "number",
          variants: [
            { begin: "\\b0b([01_]+)" + o },
            { begin: "\\b0o([0-7_]+)" + o },
            { begin: "\\b0x([A-Fa-f0-9_]+)" + o },
            { begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + o }
          ],
          relevance: 0
        },
        {
          begin: [
            /fn/,
            /\s+/,
            s
          ],
          className: {
            1: "keyword",
            3: "title.function"
          }
        },
        {
          className: "meta",
          begin: "#!?\\[",
          end: "\\]",
          contains: [
            {
              className: "string",
              begin: /"/,
              end: /"/,
              contains: [
                e.BACKSLASH_ESCAPE
              ]
            }
          ]
        },
        {
          begin: [
            /let/,
            /\s+/,
            /(?:mut\s+)?/,
            s
          ],
          className: {
            1: "keyword",
            3: "keyword",
            4: "variable"
          }
        },
        // must come before impl/for rule later
        {
          begin: [
            /for/,
            /\s+/,
            s,
            /\s+/,
            /in/
          ],
          className: {
            1: "keyword",
            3: "variable",
            5: "keyword"
          }
        },
        {
          begin: [
            /type/,
            /\s+/,
            s
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        },
        {
          begin: [
            /(?:trait|enum|struct|union|impl|for)/,
            /\s+/,
            s
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        },
        {
          begin: e.IDENT_RE + "::",
          keywords: {
            keyword: "Self",
            built_in: c,
            type: d
          }
        },
        {
          className: "punctuation",
          begin: "->"
        },
        i
      ]
    };
  }
  return Br = n, Br;
}
var zr, Ri;
function rm() {
  if (Ri) return zr;
  Ri = 1;
  const n = (l) => ({
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: l.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        l.APOS_STRING_MODE,
        l.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: l.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  }), e = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "p",
    "picture",
    "q",
    "quote",
    "samp",
    "section",
    "select",
    "source",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ], t = [
    "defs",
    "g",
    "marker",
    "mask",
    "pattern",
    "svg",
    "switch",
    "symbol",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMorphology",
    "feOffset",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
    "linearGradient",
    "radialGradient",
    "stop",
    "circle",
    "ellipse",
    "image",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "text",
    "use",
    "textPath",
    "tspan",
    "foreignObject",
    "clipPath"
  ], r = [
    ...e,
    ...t
  ], s = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ].sort().reverse(), a = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ].sort().reverse(), i = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ].sort().reverse(), o = [
    "accent-color",
    "align-content",
    "align-items",
    "align-self",
    "alignment-baseline",
    "all",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "appearance",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "cx",
    "cy",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "color-scheme",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "dominant-baseline",
    "empty-cells",
    "enable-background",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flow",
    "flood-color",
    "flood-opacity",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-size",
    "font-size-adjust",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "inline-size",
    "inset",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "kerning",
    "justify-content",
    "justify-items",
    "justify-self",
    "left",
    "letter-spacing",
    "lighting-color",
    "line-break",
    "line-height",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "mask",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pointer-events",
    "position",
    "quotes",
    "r",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "rotate",
    "row-gap",
    "scale",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "tab-size",
    "table-layout",
    "text-anchor",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-transform",
    "text-underline-offset",
    "text-underline-position",
    "top",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "vector-effect",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "x",
    "y",
    "z-index"
  ].sort().reverse();
  function u(l) {
    const c = n(l), d = i, p = a, m = "@[a-z-]+", h = "and or not only", f = {
      className: "variable",
      begin: "(\\$" + "[a-zA-Z-][a-zA-Z0-9_-]*" + ")\\b",
      relevance: 0
    };
    return {
      name: "SCSS",
      case_insensitive: !0,
      illegal: "[=/|']",
      contains: [
        l.C_LINE_COMMENT_MODE,
        l.C_BLOCK_COMMENT_MODE,
        // to recognize keyframe 40% etc which are outside the scope of our
        // attribute value mode
        c.CSS_NUMBER_MODE,
        {
          className: "selector-id",
          begin: "#[A-Za-z0-9_-]+",
          relevance: 0
        },
        {
          className: "selector-class",
          begin: "\\.[A-Za-z0-9_-]+",
          relevance: 0
        },
        c.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-tag",
          begin: "\\b(" + r.join("|") + ")\\b",
          // was there, before, but why?
          relevance: 0
        },
        {
          className: "selector-pseudo",
          begin: ":(" + p.join("|") + ")"
        },
        {
          className: "selector-pseudo",
          begin: ":(:)?(" + d.join("|") + ")"
        },
        f,
        {
          // pseudo-selector params
          begin: /\(/,
          end: /\)/,
          contains: [c.CSS_NUMBER_MODE]
        },
        c.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + o.join("|") + ")\\b"
        },
        { begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" },
        {
          begin: /:/,
          end: /[;}{]/,
          relevance: 0,
          contains: [
            c.BLOCK_COMMENT,
            f,
            c.HEXCOLOR,
            c.CSS_NUMBER_MODE,
            l.QUOTE_STRING_MODE,
            l.APOS_STRING_MODE,
            c.IMPORTANT,
            c.FUNCTION_DISPATCH
          ]
        },
        // matching these here allows us to treat them more like regular CSS
        // rules so everything between the {} gets regular rule highlighting,
        // which is what we want for page and font-face
        {
          begin: "@(page|font-face)",
          keywords: {
            $pattern: m,
            keyword: "@page @font-face"
          }
        },
        {
          begin: "@",
          end: "[{;]",
          returnBegin: !0,
          keywords: {
            $pattern: /[a-z-]+/,
            keyword: h,
            attribute: s.join(" ")
          },
          contains: [
            {
              begin: m,
              className: "keyword"
            },
            {
              begin: /[a-z-]+(?=:)/,
              className: "attribute"
            },
            f,
            l.QUOTE_STRING_MODE,
            l.APOS_STRING_MODE,
            c.HEXCOLOR,
            c.CSS_NUMBER_MODE
          ]
        },
        c.FUNCTION_DISPATCH
      ]
    };
  }
  return zr = u, zr;
}
var Fr, Oi;
function sm() {
  if (Oi) return Fr;
  Oi = 1;
  function n(e) {
    return {
      name: "Shell Session",
      aliases: [
        "console",
        "shellsession"
      ],
      contains: [
        {
          className: "meta.prompt",
          // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
          // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
          // echo /path/to/home > t.exe
          begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
          starts: {
            end: /[^\\](?=\s*$)/,
            subLanguage: "bash"
          }
        }
      ]
    };
  }
  return Fr = n, Fr;
}
var Ur, Ni;
function am() {
  if (Ni) return Ur;
  Ni = 1;
  function n(e) {
    const t = e.regex, r = e.COMMENT("--", "$"), s = {
      className: "string",
      variants: [
        {
          begin: /'/,
          end: /'/,
          contains: [{ begin: /''/ }]
        }
      ]
    }, a = {
      begin: /"/,
      end: /"/,
      contains: [{ begin: /""/ }]
    }, i = [
      "true",
      "false",
      // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
      // "null",
      "unknown"
    ], o = [
      "double precision",
      "large object",
      "with timezone",
      "without timezone"
    ], u = [
      "bigint",
      "binary",
      "blob",
      "boolean",
      "char",
      "character",
      "clob",
      "date",
      "dec",
      "decfloat",
      "decimal",
      "float",
      "int",
      "integer",
      "interval",
      "nchar",
      "nclob",
      "national",
      "numeric",
      "real",
      "row",
      "smallint",
      "time",
      "timestamp",
      "varchar",
      "varying",
      // modifier (character varying)
      "varbinary"
    ], l = [
      "add",
      "asc",
      "collation",
      "desc",
      "final",
      "first",
      "last",
      "view"
    ], c = [
      "abs",
      "acos",
      "all",
      "allocate",
      "alter",
      "and",
      "any",
      "are",
      "array",
      "array_agg",
      "array_max_cardinality",
      "as",
      "asensitive",
      "asin",
      "asymmetric",
      "at",
      "atan",
      "atomic",
      "authorization",
      "avg",
      "begin",
      "begin_frame",
      "begin_partition",
      "between",
      "bigint",
      "binary",
      "blob",
      "boolean",
      "both",
      "by",
      "call",
      "called",
      "cardinality",
      "cascaded",
      "case",
      "cast",
      "ceil",
      "ceiling",
      "char",
      "char_length",
      "character",
      "character_length",
      "check",
      "classifier",
      "clob",
      "close",
      "coalesce",
      "collate",
      "collect",
      "column",
      "commit",
      "condition",
      "connect",
      "constraint",
      "contains",
      "convert",
      "copy",
      "corr",
      "corresponding",
      "cos",
      "cosh",
      "count",
      "covar_pop",
      "covar_samp",
      "create",
      "cross",
      "cube",
      "cume_dist",
      "current",
      "current_catalog",
      "current_date",
      "current_default_transform_group",
      "current_path",
      "current_role",
      "current_row",
      "current_schema",
      "current_time",
      "current_timestamp",
      "current_path",
      "current_role",
      "current_transform_group_for_type",
      "current_user",
      "cursor",
      "cycle",
      "date",
      "day",
      "deallocate",
      "dec",
      "decimal",
      "decfloat",
      "declare",
      "default",
      "define",
      "delete",
      "dense_rank",
      "deref",
      "describe",
      "deterministic",
      "disconnect",
      "distinct",
      "double",
      "drop",
      "dynamic",
      "each",
      "element",
      "else",
      "empty",
      "end",
      "end_frame",
      "end_partition",
      "end-exec",
      "equals",
      "escape",
      "every",
      "except",
      "exec",
      "execute",
      "exists",
      "exp",
      "external",
      "extract",
      "false",
      "fetch",
      "filter",
      "first_value",
      "float",
      "floor",
      "for",
      "foreign",
      "frame_row",
      "free",
      "from",
      "full",
      "function",
      "fusion",
      "get",
      "global",
      "grant",
      "group",
      "grouping",
      "groups",
      "having",
      "hold",
      "hour",
      "identity",
      "in",
      "indicator",
      "initial",
      "inner",
      "inout",
      "insensitive",
      "insert",
      "int",
      "integer",
      "intersect",
      "intersection",
      "interval",
      "into",
      "is",
      "join",
      "json_array",
      "json_arrayagg",
      "json_exists",
      "json_object",
      "json_objectagg",
      "json_query",
      "json_table",
      "json_table_primitive",
      "json_value",
      "lag",
      "language",
      "large",
      "last_value",
      "lateral",
      "lead",
      "leading",
      "left",
      "like",
      "like_regex",
      "listagg",
      "ln",
      "local",
      "localtime",
      "localtimestamp",
      "log",
      "log10",
      "lower",
      "match",
      "match_number",
      "match_recognize",
      "matches",
      "max",
      "member",
      "merge",
      "method",
      "min",
      "minute",
      "mod",
      "modifies",
      "module",
      "month",
      "multiset",
      "national",
      "natural",
      "nchar",
      "nclob",
      "new",
      "no",
      "none",
      "normalize",
      "not",
      "nth_value",
      "ntile",
      "null",
      "nullif",
      "numeric",
      "octet_length",
      "occurrences_regex",
      "of",
      "offset",
      "old",
      "omit",
      "on",
      "one",
      "only",
      "open",
      "or",
      "order",
      "out",
      "outer",
      "over",
      "overlaps",
      "overlay",
      "parameter",
      "partition",
      "pattern",
      "per",
      "percent",
      "percent_rank",
      "percentile_cont",
      "percentile_disc",
      "period",
      "portion",
      "position",
      "position_regex",
      "power",
      "precedes",
      "precision",
      "prepare",
      "primary",
      "procedure",
      "ptf",
      "range",
      "rank",
      "reads",
      "real",
      "recursive",
      "ref",
      "references",
      "referencing",
      "regr_avgx",
      "regr_avgy",
      "regr_count",
      "regr_intercept",
      "regr_r2",
      "regr_slope",
      "regr_sxx",
      "regr_sxy",
      "regr_syy",
      "release",
      "result",
      "return",
      "returns",
      "revoke",
      "right",
      "rollback",
      "rollup",
      "row",
      "row_number",
      "rows",
      "running",
      "savepoint",
      "scope",
      "scroll",
      "search",
      "second",
      "seek",
      "select",
      "sensitive",
      "session_user",
      "set",
      "show",
      "similar",
      "sin",
      "sinh",
      "skip",
      "smallint",
      "some",
      "specific",
      "specifictype",
      "sql",
      "sqlexception",
      "sqlstate",
      "sqlwarning",
      "sqrt",
      "start",
      "static",
      "stddev_pop",
      "stddev_samp",
      "submultiset",
      "subset",
      "substring",
      "substring_regex",
      "succeeds",
      "sum",
      "symmetric",
      "system",
      "system_time",
      "system_user",
      "table",
      "tablesample",
      "tan",
      "tanh",
      "then",
      "time",
      "timestamp",
      "timezone_hour",
      "timezone_minute",
      "to",
      "trailing",
      "translate",
      "translate_regex",
      "translation",
      "treat",
      "trigger",
      "trim",
      "trim_array",
      "true",
      "truncate",
      "uescape",
      "union",
      "unique",
      "unknown",
      "unnest",
      "update",
      "upper",
      "user",
      "using",
      "value",
      "values",
      "value_of",
      "var_pop",
      "var_samp",
      "varbinary",
      "varchar",
      "varying",
      "versioning",
      "when",
      "whenever",
      "where",
      "width_bucket",
      "window",
      "with",
      "within",
      "without",
      "year"
    ], d = [
      "abs",
      "acos",
      "array_agg",
      "asin",
      "atan",
      "avg",
      "cast",
      "ceil",
      "ceiling",
      "coalesce",
      "corr",
      "cos",
      "cosh",
      "count",
      "covar_pop",
      "covar_samp",
      "cume_dist",
      "dense_rank",
      "deref",
      "element",
      "exp",
      "extract",
      "first_value",
      "floor",
      "json_array",
      "json_arrayagg",
      "json_exists",
      "json_object",
      "json_objectagg",
      "json_query",
      "json_table",
      "json_table_primitive",
      "json_value",
      "lag",
      "last_value",
      "lead",
      "listagg",
      "ln",
      "log",
      "log10",
      "lower",
      "max",
      "min",
      "mod",
      "nth_value",
      "ntile",
      "nullif",
      "percent_rank",
      "percentile_cont",
      "percentile_disc",
      "position",
      "position_regex",
      "power",
      "rank",
      "regr_avgx",
      "regr_avgy",
      "regr_count",
      "regr_intercept",
      "regr_r2",
      "regr_slope",
      "regr_sxx",
      "regr_sxy",
      "regr_syy",
      "row_number",
      "sin",
      "sinh",
      "sqrt",
      "stddev_pop",
      "stddev_samp",
      "substring",
      "substring_regex",
      "sum",
      "tan",
      "tanh",
      "translate",
      "translate_regex",
      "treat",
      "trim",
      "trim_array",
      "unnest",
      "upper",
      "value_of",
      "var_pop",
      "var_samp",
      "width_bucket"
    ], p = [
      "current_catalog",
      "current_date",
      "current_default_transform_group",
      "current_path",
      "current_role",
      "current_schema",
      "current_transform_group_for_type",
      "current_user",
      "session_user",
      "system_time",
      "system_user",
      "current_time",
      "localtime",
      "current_timestamp",
      "localtimestamp"
    ], m = [
      "create table",
      "insert into",
      "primary key",
      "foreign key",
      "not null",
      "alter table",
      "add constraint",
      "grouping sets",
      "on overflow",
      "character set",
      "respect nulls",
      "ignore nulls",
      "nulls first",
      "nulls last",
      "depth first",
      "breadth first"
    ], h = d, g = [
      ...c,
      ...l
    ].filter((S) => !d.includes(S)), f = {
      className: "variable",
      begin: /@[a-z0-9][a-z0-9_]*/
    }, E = {
      className: "operator",
      begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
      relevance: 0
    }, b = {
      begin: t.concat(/\b/, t.either(...h), /\s*\(/),
      relevance: 0,
      keywords: { built_in: h }
    };
    function y(S, {
      exceptions: w,
      when: I
    } = {}) {
      const z = I;
      return w = w || [], S.map((R) => R.match(/\|\d+$/) || w.includes(R) ? R : z(R) ? `${R}|0` : R);
    }
    return {
      name: "SQL",
      case_insensitive: !0,
      // does not include {} or HTML tags `</`
      illegal: /[{}]|<\//,
      keywords: {
        $pattern: /\b[\w\.]+/,
        keyword: y(g, { when: (S) => S.length < 3 }),
        literal: i,
        type: u,
        built_in: p
      },
      contains: [
        {
          begin: t.either(...m),
          relevance: 0,
          keywords: {
            $pattern: /[\w\.]+/,
            keyword: g.concat(m),
            literal: i,
            type: u
          }
        },
        {
          className: "type",
          begin: t.either(...o)
        },
        b,
        f,
        s,
        a,
        e.C_NUMBER_MODE,
        e.C_BLOCK_COMMENT_MODE,
        r,
        E
      ]
    };
  }
  return Ur = n, Ur;
}
var $r, Mi;
function im() {
  if (Mi) return $r;
  Mi = 1;
  function n(R) {
    return R ? typeof R == "string" ? R : R.source : null;
  }
  function e(R) {
    return t("(?=", R, ")");
  }
  function t(...R) {
    return R.map((A) => n(A)).join("");
  }
  function r(R) {
    const T = R[R.length - 1];
    return typeof T == "object" && T.constructor === Object ? (R.splice(R.length - 1, 1), T) : {};
  }
  function s(...R) {
    return "(" + (r(R).capture ? "" : "?:") + R.map(($) => n($)).join("|") + ")";
  }
  const a = (R) => t(
    /\b/,
    R,
    /\w$/.test(R) ? /\b/ : /\B/
  ), i = [
    "Protocol",
    // contextual
    "Type"
    // contextual
  ].map(a), o = [
    "init",
    "self"
  ].map(a), u = [
    "Any",
    "Self"
  ], l = [
    // strings below will be fed into the regular `keywords` engine while regex
    // will result in additional modes being created to scan for those keywords to
    // avoid conflicts with other rules
    "actor",
    "any",
    // contextual
    "associatedtype",
    "async",
    "await",
    /as\?/,
    // operator
    /as!/,
    // operator
    "as",
    // operator
    "borrowing",
    // contextual
    "break",
    "case",
    "catch",
    "class",
    "consume",
    // contextual
    "consuming",
    // contextual
    "continue",
    "convenience",
    // contextual
    "copy",
    // contextual
    "default",
    "defer",
    "deinit",
    "didSet",
    // contextual
    "distributed",
    "do",
    "dynamic",
    // contextual
    "each",
    "else",
    "enum",
    "extension",
    "fallthrough",
    /fileprivate\(set\)/,
    "fileprivate",
    "final",
    // contextual
    "for",
    "func",
    "get",
    // contextual
    "guard",
    "if",
    "import",
    "indirect",
    // contextual
    "infix",
    // contextual
    /init\?/,
    /init!/,
    "inout",
    /internal\(set\)/,
    "internal",
    "in",
    "is",
    // operator
    "isolated",
    // contextual
    "nonisolated",
    // contextual
    "lazy",
    // contextual
    "let",
    "macro",
    "mutating",
    // contextual
    "nonmutating",
    // contextual
    /open\(set\)/,
    // contextual
    "open",
    // contextual
    "operator",
    "optional",
    // contextual
    "override",
    // contextual
    "package",
    "postfix",
    // contextual
    "precedencegroup",
    "prefix",
    // contextual
    /private\(set\)/,
    "private",
    "protocol",
    /public\(set\)/,
    "public",
    "repeat",
    "required",
    // contextual
    "rethrows",
    "return",
    "set",
    // contextual
    "some",
    // contextual
    "static",
    "struct",
    "subscript",
    "super",
    "switch",
    "throws",
    "throw",
    /try\?/,
    // operator
    /try!/,
    // operator
    "try",
    // operator
    "typealias",
    /unowned\(safe\)/,
    // contextual
    /unowned\(unsafe\)/,
    // contextual
    "unowned",
    // contextual
    "var",
    "weak",
    // contextual
    "where",
    "while",
    "willSet"
    // contextual
  ], c = [
    "false",
    "nil",
    "true"
  ], d = [
    "assignment",
    "associativity",
    "higherThan",
    "left",
    "lowerThan",
    "none",
    "right"
  ], p = [
    "#colorLiteral",
    "#column",
    "#dsohandle",
    "#else",
    "#elseif",
    "#endif",
    "#error",
    "#file",
    "#fileID",
    "#fileLiteral",
    "#filePath",
    "#function",
    "#if",
    "#imageLiteral",
    "#keyPath",
    "#line",
    "#selector",
    "#sourceLocation",
    "#warning"
  ], m = [
    "abs",
    "all",
    "any",
    "assert",
    "assertionFailure",
    "debugPrint",
    "dump",
    "fatalError",
    "getVaList",
    "isKnownUniquelyReferenced",
    "max",
    "min",
    "numericCast",
    "pointwiseMax",
    "pointwiseMin",
    "precondition",
    "preconditionFailure",
    "print",
    "readLine",
    "repeatElement",
    "sequence",
    "stride",
    "swap",
    "swift_unboxFromSwiftValueWithType",
    "transcode",
    "type",
    "unsafeBitCast",
    "unsafeDowncast",
    "withExtendedLifetime",
    "withUnsafeMutablePointer",
    "withUnsafePointer",
    "withVaList",
    "withoutActuallyEscaping",
    "zip"
  ], h = s(
    /[/=\-+!*%<>&|^~?]/,
    /[\u00A1-\u00A7]/,
    /[\u00A9\u00AB]/,
    /[\u00AC\u00AE]/,
    /[\u00B0\u00B1]/,
    /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
    /[\u2016-\u2017]/,
    /[\u2020-\u2027]/,
    /[\u2030-\u203E]/,
    /[\u2041-\u2053]/,
    /[\u2055-\u205E]/,
    /[\u2190-\u23FF]/,
    /[\u2500-\u2775]/,
    /[\u2794-\u2BFF]/,
    /[\u2E00-\u2E7F]/,
    /[\u3001-\u3003]/,
    /[\u3008-\u3020]/,
    /[\u3030]/
  ), g = s(
    h,
    /[\u0300-\u036F]/,
    /[\u1DC0-\u1DFF]/,
    /[\u20D0-\u20FF]/,
    /[\uFE00-\uFE0F]/,
    /[\uFE20-\uFE2F]/
    // TODO: The following characters are also allowed, but the regex isn't supported yet.
    // /[\u{E0100}-\u{E01EF}]/u
  ), f = t(h, g, "*"), E = s(
    /[a-zA-Z_]/,
    /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
    /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
    /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
    /[\u1E00-\u1FFF]/,
    /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
    /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
    /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
    /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
    /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
    /[\uFE47-\uFEFE\uFF00-\uFFFD]/
    // Should be /[\uFE47-\uFFFD]/, but we have to exclude FEFF.
    // The following characters are also allowed, but the regexes aren't supported yet.
    // /[\u{10000}-\u{1FFFD}\u{20000-\u{2FFFD}\u{30000}-\u{3FFFD}\u{40000}-\u{4FFFD}]/u,
    // /[\u{50000}-\u{5FFFD}\u{60000-\u{6FFFD}\u{70000}-\u{7FFFD}\u{80000}-\u{8FFFD}]/u,
    // /[\u{90000}-\u{9FFFD}\u{A0000-\u{AFFFD}\u{B0000}-\u{BFFFD}\u{C0000}-\u{CFFFD}]/u,
    // /[\u{D0000}-\u{DFFFD}\u{E0000-\u{EFFFD}]/u
  ), b = s(
    E,
    /\d/,
    /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/
  ), y = t(E, b, "*"), S = t(/[A-Z]/, b, "*"), w = [
    "attached",
    "autoclosure",
    t(/convention\(/, s("swift", "block", "c"), /\)/),
    "discardableResult",
    "dynamicCallable",
    "dynamicMemberLookup",
    "escaping",
    "freestanding",
    "frozen",
    "GKInspectable",
    "IBAction",
    "IBDesignable",
    "IBInspectable",
    "IBOutlet",
    "IBSegueAction",
    "inlinable",
    "main",
    "nonobjc",
    "NSApplicationMain",
    "NSCopying",
    "NSManaged",
    t(/objc\(/, y, /\)/),
    "objc",
    "objcMembers",
    "propertyWrapper",
    "requires_stored_property_inits",
    "resultBuilder",
    "Sendable",
    "testable",
    "UIApplicationMain",
    "unchecked",
    "unknown",
    "usableFromInline",
    "warn_unqualified_access"
  ], I = [
    "iOS",
    "iOSApplicationExtension",
    "macOS",
    "macOSApplicationExtension",
    "macCatalyst",
    "macCatalystApplicationExtension",
    "watchOS",
    "watchOSApplicationExtension",
    "tvOS",
    "tvOSApplicationExtension",
    "swift"
  ];
  function z(R) {
    const T = {
      match: /\s+/,
      relevance: 0
    }, A = R.COMMENT(
      "/\\*",
      "\\*/",
      { contains: ["self"] }
    ), $ = [
      R.C_LINE_COMMENT_MODE,
      A
    ], D = {
      match: [
        /\./,
        s(...i, ...o)
      ],
      className: { 2: "keyword" }
    }, H = {
      // Consume .keyword to prevent highlighting properties and methods as keywords.
      match: t(/\./, s(...l)),
      relevance: 0
    }, P = l.filter((ve) => typeof ve == "string").concat(["_|0"]), W = l.filter((ve) => typeof ve != "string").concat(u).map(a), oe = { variants: [
      {
        className: "keyword",
        match: s(...W, ...o)
      }
    ] }, C = {
      $pattern: s(
        /\b\w+/,
        // regular keywords
        /#\w+/
        // number keywords
      ),
      keyword: P.concat(p),
      literal: c
    }, L = [
      D,
      H,
      oe
    ], N = {
      // Consume .built_in to prevent highlighting properties and methods.
      match: t(/\./, s(...m)),
      relevance: 0
    }, k = {
      className: "built_in",
      match: t(/\b/, s(...m), /(?=\()/)
    }, O = [
      N,
      k
    ], j = {
      // Prevent -> from being highlighting as an operator.
      match: /->/,
      relevance: 0
    }, X = {
      className: "operator",
      relevance: 0,
      variants: [
        { match: f },
        {
          // dot-operator: only operators that start with a dot are allowed to use dots as
          // characters (..., ...<, .*, etc). So there rule here is: a dot followed by one or more
          // characters that may also include dots.
          match: `\\.(\\.|${g})+`
        }
      ]
    }, ee = [
      j,
      X
    ], te = "([0-9]_*)+", Y = "([0-9a-fA-F]_*)+", V = {
      className: "number",
      relevance: 0,
      variants: [
        // decimal floating-point-literal (subsumes decimal-literal)
        { match: `\\b(${te})(\\.(${te}))?([eE][+-]?(${te}))?\\b` },
        // hexadecimal floating-point-literal (subsumes hexadecimal-literal)
        { match: `\\b0x(${Y})(\\.(${Y}))?([pP][+-]?(${te}))?\\b` },
        // octal-literal
        { match: /\b0o([0-7]_*)+\b/ },
        // binary-literal
        { match: /\b0b([01]_*)+\b/ }
      ]
    }, Q = (ve = "") => ({
      className: "subst",
      variants: [
        { match: t(/\\/, ve, /[0\\tnr"']/) },
        { match: t(/\\/, ve, /u\{[0-9a-fA-F]{1,8}\}/) }
      ]
    }), ae = (ve = "") => ({
      className: "subst",
      match: t(/\\/, ve, /[\t ]*(?:[\r\n]|\r\n)/)
    }), ne = (ve = "") => ({
      className: "subst",
      label: "interpol",
      begin: t(/\\/, ve, /\(/),
      end: /\)/
    }), fe = (ve = "") => ({
      begin: t(ve, /"""/),
      end: t(/"""/, ve),
      contains: [
        Q(ve),
        ae(ve),
        ne(ve)
      ]
    }), U = (ve = "") => ({
      begin: t(ve, /"/),
      end: t(/"/, ve),
      contains: [
        Q(ve),
        ne(ve)
      ]
    }), we = {
      className: "string",
      variants: [
        fe(),
        fe("#"),
        fe("##"),
        fe("###"),
        U(),
        U("#"),
        U("##"),
        U("###")
      ]
    }, ze = [
      R.BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [R.BACKSLASH_ESCAPE]
      }
    ], $e = {
      begin: /\/[^\s](?=[^/\n]*\/)/,
      end: /\//,
      contains: ze
    }, _ = (ve) => {
      const nt = t(ve, /\//), dt = t(/\//, ve);
      return {
        begin: nt,
        end: dt,
        contains: [
          ...ze,
          {
            scope: "comment",
            begin: `#(?!.*${dt})`,
            end: /$/
          }
        ]
      };
    }, G = {
      scope: "regexp",
      variants: [
        _("###"),
        _("##"),
        _("#"),
        $e
      ]
    }, se = { match: t(/`/, y, /`/) }, q = {
      className: "variable",
      match: /\$\d+/
    }, xe = {
      className: "variable",
      match: `\\$${b}+`
    }, ce = [
      se,
      q,
      xe
    ], re = {
      match: /(@|#(un)?)available/,
      scope: "keyword",
      starts: { contains: [
        {
          begin: /\(/,
          end: /\)/,
          keywords: I,
          contains: [
            ...ee,
            V,
            we
          ]
        }
      ] }
    }, Re = {
      scope: "keyword",
      match: t(/@/, s(...w), e(s(/\(/, /\s+/)))
    }, B = {
      scope: "meta",
      match: t(/@/, y)
    }, J = [
      re,
      Re,
      B
    ], me = {
      match: e(/\b[A-Z]/),
      relevance: 0,
      contains: [
        {
          // Common Apple frameworks, for relevance boost
          className: "type",
          match: t(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, b, "+")
        },
        {
          // Type identifier
          className: "type",
          match: S,
          relevance: 0
        },
        {
          // Optional type
          match: /[?!]+/,
          relevance: 0
        },
        {
          // Variadic parameter
          match: /\.\.\./,
          relevance: 0
        },
        {
          // Protocol composition
          match: t(/\s+&\s+/, e(S)),
          relevance: 0
        }
      ]
    }, M = {
      begin: /</,
      end: />/,
      keywords: C,
      contains: [
        ...$,
        ...L,
        ...J,
        j,
        me
      ]
    };
    me.contains.push(M);
    const K = {
      match: t(y, /\s*:/),
      keywords: "_|0",
      relevance: 0
    }, ie = {
      begin: /\(/,
      end: /\)/,
      relevance: 0,
      keywords: C,
      contains: [
        "self",
        K,
        ...$,
        G,
        ...L,
        ...O,
        ...ee,
        V,
        we,
        ...ce,
        ...J,
        me
      ]
    }, pe = {
      begin: /</,
      end: />/,
      keywords: "repeat each",
      contains: [
        ...$,
        me
      ]
    }, Me = {
      begin: s(
        e(t(y, /\s*:/)),
        e(t(y, /\s+/, y, /\s*:/))
      ),
      end: /:/,
      relevance: 0,
      contains: [
        {
          className: "keyword",
          match: /\b_\b/
        },
        {
          className: "params",
          match: y
        }
      ]
    }, He = {
      begin: /\(/,
      end: /\)/,
      keywords: C,
      contains: [
        Me,
        ...$,
        ...L,
        ...ee,
        V,
        we,
        ...J,
        me,
        ie
      ],
      endsParent: !0,
      illegal: /["']/
    }, ot = {
      match: [
        /(func|macro)/,
        /\s+/,
        s(se.match, y, f)
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        pe,
        He,
        T
      ],
      illegal: [
        /\[/,
        /%/
      ]
    }, tt = {
      match: [
        /\b(?:subscript|init[?!]?)/,
        /\s*(?=[<(])/
      ],
      className: { 1: "keyword" },
      contains: [
        pe,
        He,
        T
      ],
      illegal: /\[|%/
    }, ft = {
      match: [
        /operator/,
        /\s+/,
        f
      ],
      className: {
        1: "keyword",
        3: "title"
      }
    }, bt = {
      begin: [
        /precedencegroup/,
        /\s+/,
        S
      ],
      className: {
        1: "keyword",
        3: "title"
      },
      contains: [me],
      keywords: [
        ...d,
        ...c
      ],
      end: /}/
    }, yt = {
      begin: [
        /(struct|protocol|class|extension|enum|actor)/,
        /\s+/,
        y,
        /\s*/
      ],
      beginScope: {
        1: "keyword",
        3: "title.class"
      },
      keywords: C,
      contains: [
        pe,
        ...L,
        {
          begin: /:/,
          end: /\{/,
          keywords: C,
          contains: [
            {
              scope: "title.class.inherited",
              match: S
            },
            ...L
          ],
          relevance: 0
        }
      ]
    };
    for (const ve of we.variants) {
      const nt = ve.contains.find((pt) => pt.label === "interpol");
      nt.keywords = C;
      const dt = [
        ...L,
        ...O,
        ...ee,
        V,
        we,
        ...ce
      ];
      nt.contains = [
        ...dt,
        {
          begin: /\(/,
          end: /\)/,
          contains: [
            "self",
            ...dt
          ]
        }
      ];
    }
    return {
      name: "Swift",
      keywords: C,
      contains: [
        ...$,
        ot,
        tt,
        yt,
        ft,
        bt,
        {
          beginKeywords: "import",
          end: /$/,
          contains: [...$],
          relevance: 0
        },
        G,
        ...L,
        ...O,
        ...ee,
        V,
        we,
        ...ce,
        ...J,
        me,
        ie
      ]
    };
  }
  return $r = z, $r;
}
var Hr, Di;
function om() {
  if (Di) return Hr;
  Di = 1;
  function n(e) {
    const t = "true false yes no null", r = "[\\w#;/?:@&=+$,.~*'()[\\]]+", s = {
      className: "attr",
      variants: [
        // added brackets support 
        { begin: /\w[\w :()\./-]*:(?=[ \t]|$)/ },
        {
          // double quoted keys - with brackets
          begin: /"\w[\w :()\./-]*":(?=[ \t]|$)/
        },
        {
          // single quoted keys - with brackets
          begin: /'\w[\w :()\./-]*':(?=[ \t]|$)/
        }
      ]
    }, a = {
      className: "template-variable",
      variants: [
        {
          // jinja templates Ansible
          begin: /\{\{/,
          end: /\}\}/
        },
        {
          // Ruby i18n
          begin: /%\{/,
          end: /\}/
        }
      ]
    }, i = {
      className: "string",
      relevance: 0,
      variants: [
        {
          begin: /'/,
          end: /'/
        },
        {
          begin: /"/,
          end: /"/
        },
        { begin: /\S+/ }
      ],
      contains: [
        e.BACKSLASH_ESCAPE,
        a
      ]
    }, o = e.inherit(i, { variants: [
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /"/,
        end: /"/
      },
      { begin: /[^\s,{}[\]]+/ }
    ] }), p = {
      className: "number",
      begin: "\\b" + "[0-9]{4}(-[0-9][0-9]){0,2}" + "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?" + "(\\.[0-9]*)?" + "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?" + "\\b"
    }, m = {
      end: ",",
      endsWithParent: !0,
      excludeEnd: !0,
      keywords: t,
      relevance: 0
    }, h = {
      begin: /\{/,
      end: /\}/,
      contains: [m],
      illegal: "\\n",
      relevance: 0
    }, g = {
      begin: "\\[",
      end: "\\]",
      contains: [m],
      illegal: "\\n",
      relevance: 0
    }, f = [
      s,
      {
        className: "meta",
        begin: "^---\\s*$",
        relevance: 10
      },
      {
        // multi line string
        // Blocks start with a | or > followed by a newline
        //
        // Indentation of subsequent lines must be the same to
        // be considered part of the block
        className: "string",
        begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
      },
      {
        // Ruby/Rails erb
        begin: "<%[%=-]?",
        end: "[%-]?%>",
        subLanguage: "ruby",
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      },
      {
        // named tags
        className: "type",
        begin: "!\\w+!" + r
      },
      // https://yaml.org/spec/1.2/spec.html#id2784064
      {
        // verbatim tags
        className: "type",
        begin: "!<" + r + ">"
      },
      {
        // primary tags
        className: "type",
        begin: "!" + r
      },
      {
        // secondary tags
        className: "type",
        begin: "!!" + r
      },
      {
        // fragment id &ref
        className: "meta",
        begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
      },
      {
        // fragment reference *ref
        className: "meta",
        begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
      },
      {
        // array listing
        className: "bullet",
        // TODO: remove |$ hack when we have proper look-ahead support
        begin: "-(?=[ ]|$)",
        relevance: 0
      },
      e.HASH_COMMENT_MODE,
      {
        beginKeywords: t,
        keywords: { literal: t }
      },
      p,
      // numbers are any valid C-style number that
      // sit isolated from other words
      {
        className: "number",
        begin: e.C_NUMBER_RE + "\\b",
        relevance: 0
      },
      h,
      g,
      i
    ], E = [...f];
    return E.pop(), E.push(o), m.contains = E, {
      name: "YAML",
      case_insensitive: !0,
      aliases: ["yml"],
      contains: f
    };
  }
  return Hr = n, Hr;
}
var jr, Li;
function cm() {
  if (Li) return jr;
  Li = 1;
  const n = "[A-Za-z$_][0-9A-Za-z$_]*", e = [
    "as",
    // for exports
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends"
  ], t = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ], r = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
  ], s = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ], a = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
  ], i = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global"
    // Node.js
  ], o = [].concat(
    a,
    r,
    s
  );
  function u(c) {
    const d = c.regex, p = (Q, { after: ae }) => {
      const ne = "</" + Q[0].slice(1);
      return Q.input.indexOf(ne, ae) !== -1;
    }, m = n, h = {
      begin: "<>",
      end: "</>"
    }, g = /<[A-Za-z0-9\\._:-]+\s*\/>/, f = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      /**
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */
      isTrulyOpeningTag: (Q, ae) => {
        const ne = Q[0].length + Q.index, fe = Q.input[ne];
        if (
          // HTML should not include another raw `<` inside a tag
          // nested type?
          // `<Array<Array<number>>`, etc.
          fe === "<" || // the , gives away that this is not HTML
          // `<T, A extends keyof T, V>`
          fe === ","
        ) {
          ae.ignoreMatch();
          return;
        }
        fe === ">" && (p(Q, { after: ne }) || ae.ignoreMatch());
        let U;
        const we = Q.input.substring(ne);
        if (U = we.match(/^\s*=/)) {
          ae.ignoreMatch();
          return;
        }
        if ((U = we.match(/^\s+extends\s+/)) && U.index === 0) {
          ae.ignoreMatch();
          return;
        }
      }
    }, E = {
      $pattern: n,
      keyword: e,
      literal: t,
      built_in: o,
      "variable.language": i
    }, b = "[0-9](_?[0-9])*", y = `\\.(${b})`, S = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", w = {
      className: "number",
      variants: [
        // DecimalLiteral
        { begin: `(\\b(${S})((${y})|\\.)?|(${y}))[eE][+-]?(${b})\\b` },
        { begin: `\\b(${S})\\b((${y})\\b|\\.)?|(${y})\\b` },
        // DecimalBigIntegerLiteral
        { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
        // NonDecimalIntegerLiteral
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        // LegacyOctalIntegerLiteral (does not include underscore separators)
        // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
        { begin: "\\b0[0-7]+n?\\b" }
      ],
      relevance: 0
    }, I = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: E,
      contains: []
      // defined later
    }, z = {
      begin: ".?html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          c.BACKSLASH_ESCAPE,
          I
        ],
        subLanguage: "xml"
      }
    }, R = {
      begin: ".?css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          c.BACKSLASH_ESCAPE,
          I
        ],
        subLanguage: "css"
      }
    }, T = {
      begin: ".?gql`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          c.BACKSLASH_ESCAPE,
          I
        ],
        subLanguage: "graphql"
      }
    }, A = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [
        c.BACKSLASH_ESCAPE,
        I
      ]
    }, D = {
      className: "comment",
      variants: [
        c.COMMENT(
          /\/\*\*(?!\/)/,
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                  },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: !0,
                    excludeBegin: !0,
                    relevance: 0
                  },
                  {
                    className: "variable",
                    begin: m + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0
                  },
                  // eat spaces (not newlines) so we can find
                  // types or variables
                  {
                    begin: /(?=[^\n])\s/,
                    relevance: 0
                  }
                ]
              }
            ]
          }
        ),
        c.C_BLOCK_COMMENT_MODE,
        c.C_LINE_COMMENT_MODE
      ]
    }, H = [
      c.APOS_STRING_MODE,
      c.QUOTE_STRING_MODE,
      z,
      R,
      T,
      A,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      w
      // This is intentional:
      // See https://github.com/highlightjs/highlight.js/issues/3288
      // hljs.REGEXP_MODE
    ];
    I.contains = H.concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: E,
      contains: [
        "self"
      ].concat(H)
    });
    const P = [].concat(D, I.contains), W = P.concat([
      // eat recursive parens in sub expressions
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: E,
        contains: ["self"].concat(P)
      }
    ]), oe = {
      className: "params",
      // convert this to negative lookbehind in v12
      begin: /(\s*)\(/,
      // to match the parms with 
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: E,
      contains: W
    }, C = {
      variants: [
        // class Car extends vehicle
        {
          match: [
            /class/,
            /\s+/,
            m,
            /\s+/,
            /extends/,
            /\s+/,
            d.concat(m, "(", d.concat(/\./, m), ")*")
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited"
          }
        },
        // class Car
        {
          match: [
            /class/,
            /\s+/,
            m
          ],
          scope: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    }, L = {
      relevance: 0,
      match: d.either(
        // Hard coded exceptions
        /\bJSON/,
        // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        // P
        // single letters are not highlighted
        // BLAH
        // this will be flagged as a UPPER_CASE_CONSTANT instead
      ),
      className: "title.class",
      keywords: {
        _: [
          // se we still get relevance credit for JS library classes
          ...r,
          ...s
        ]
      }
    }, N = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    }, k = {
      variants: [
        {
          match: [
            /function/,
            /\s+/,
            m,
            /(?=\s*\()/
          ]
        },
        // anonymous function
        {
          match: [
            /function/,
            /\s*(?=\()/
          ]
        }
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      label: "func.def",
      contains: [oe],
      illegal: /%/
    }, O = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    };
    function j(Q) {
      return d.concat("(?!", Q.join("|"), ")");
    }
    const X = {
      match: d.concat(
        /\b/,
        j([
          ...a,
          "super",
          "import"
        ].map((Q) => `${Q}\\s*\\(`)),
        m,
        d.lookahead(/\s*\(/)
      ),
      className: "title.function",
      relevance: 0
    }, ee = {
      begin: d.concat(/\./, d.lookahead(
        d.concat(m, /(?![0-9A-Za-z$_(])/)
      )),
      end: m,
      excludeBegin: !0,
      keywords: "prototype",
      className: "property",
      relevance: 0
    }, te = {
      match: [
        /get|set/,
        /\s+/,
        m,
        /(?=\()/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        {
          // eat to avoid empty params
          begin: /\(\)/
        },
        oe
      ]
    }, Y = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + c.UNDERSCORE_IDENT_RE + ")\\s*=>", V = {
      match: [
        /const|var|let/,
        /\s+/,
        m,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        // async is optional
        d.lookahead(Y)
      ],
      keywords: "async",
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        oe
      ]
    };
    return {
      name: "JavaScript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: E,
      // this will be extended by TypeScript
      exports: { PARAMS_CONTAINS: W, CLASS_REFERENCE: L },
      illegal: /#(?![$_A-z])/,
      contains: [
        c.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }),
        N,
        c.APOS_STRING_MODE,
        c.QUOTE_STRING_MODE,
        z,
        R,
        T,
        A,
        D,
        // Skip numbers when they are part of a variable name
        { match: /\$\d+/ },
        w,
        L,
        {
          className: "attr",
          begin: m + d.lookahead(":"),
          relevance: 0
        },
        V,
        {
          // "value" container
          begin: "(" + c.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            D,
            c.REGEXP_MODE,
            {
              className: "function",
              // we have to count the parens to make sure we actually have the
              // correct bounding ( ) before the =>.  There could be any number of
              // sub-expressions inside also surrounded by parens.
              begin: Y,
              returnBegin: !0,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    {
                      begin: c.UNDERSCORE_IDENT_RE,
                      relevance: 0
                    },
                    {
                      className: null,
                      begin: /\(\s*\)/,
                      skip: !0
                    },
                    {
                      begin: /(\s*)\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: E,
                      contains: W
                    }
                  ]
                }
              ]
            },
            {
              // could be a comma delimited list of params to a function call
              begin: /,/,
              relevance: 0
            },
            {
              match: /\s+/,
              relevance: 0
            },
            {
              // JSX
              variants: [
                { begin: h.begin, end: h.end },
                { match: g },
                {
                  begin: f.begin,
                  // we carefully check the opening tag to see if it truly
                  // is a tag and not a false positive
                  "on:begin": f.isTrulyOpeningTag,
                  end: f.end
                }
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: f.begin,
                  end: f.end,
                  skip: !0,
                  contains: ["self"]
                }
              ]
            }
          ]
        },
        k,
        {
          // prevent this from getting swallowed up by function
          // since they appear "function like"
          beginKeywords: "while if switch catch for"
        },
        {
          // we have to count the parens to make sure we actually have the correct
          // bounding ( ).  There could be any number of sub-expressions inside
          // also surrounded by parens.
          begin: "\\b(?!function)" + c.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          // end parens
          returnBegin: !0,
          label: "func.def",
          contains: [
            oe,
            c.inherit(c.TITLE_MODE, { begin: m, className: "title.function" })
          ]
        },
        // catch ... so it won't trigger the property rule below
        {
          match: /\.\.\./,
          relevance: 0
        },
        ee,
        // hack: prevents detection of keywords in some circumstances
        // .keyword()
        // $keyword = x
        {
          match: "\\$" + m,
          relevance: 0
        },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [oe]
        },
        X,
        O,
        C,
        te,
        {
          match: /\$[(.]/
          // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        }
      ]
    };
  }
  function l(c) {
    const d = u(c), p = n, m = [
      "any",
      "void",
      "number",
      "boolean",
      "string",
      "object",
      "never",
      "symbol",
      "bigint",
      "unknown"
    ], h = {
      begin: [
        /namespace/,
        /\s+/,
        c.IDENT_RE
      ],
      beginScope: {
        1: "keyword",
        3: "title.class"
      }
    }, g = {
      beginKeywords: "interface",
      end: /\{/,
      excludeEnd: !0,
      keywords: {
        keyword: "interface extends",
        built_in: m
      },
      contains: [d.exports.CLASS_REFERENCE]
    }, f = {
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use strict['"]/
    }, E = [
      "type",
      // "namespace",
      "interface",
      "public",
      "private",
      "protected",
      "implements",
      "declare",
      "abstract",
      "readonly",
      "enum",
      "override",
      "satisfies"
    ], b = {
      $pattern: n,
      keyword: e.concat(E),
      literal: t,
      built_in: o.concat(m),
      "variable.language": i
    }, y = {
      className: "meta",
      begin: "@" + p
    }, S = (z, R, T) => {
      const A = z.contains.findIndex(($) => $.label === R);
      if (A === -1)
        throw new Error("can not find mode to replace");
      z.contains.splice(A, 1, T);
    };
    Object.assign(d.keywords, b), d.exports.PARAMS_CONTAINS.push(y);
    const w = d.contains.find((z) => z.className === "attr");
    d.exports.PARAMS_CONTAINS.push([
      d.exports.CLASS_REFERENCE,
      // class reference for highlighting the params types
      w
      // highlight the params key
    ]), d.contains = d.contains.concat([
      y,
      h,
      g
    ]), S(d, "shebang", c.SHEBANG()), S(d, "use_strict", f);
    const I = d.contains.find((z) => z.label === "func.def");
    return I.relevance = 0, Object.assign(d, {
      name: "TypeScript",
      aliases: [
        "ts",
        "tsx",
        "mts",
        "cts"
      ]
    }), d;
  }
  return jr = l, jr;
}
var qr, Pi;
function lm() {
  if (Pi) return qr;
  Pi = 1;
  function n(e) {
    const t = e.regex, r = {
      className: "string",
      begin: /"(""|[^/n])"C\b/
    }, s = {
      className: "string",
      begin: /"/,
      end: /"/,
      illegal: /\n/,
      contains: [
        {
          // double quote escape
          begin: /""/
        }
      ]
    }, a = /\d{1,2}\/\d{1,2}\/\d{4}/, i = /\d{4}-\d{1,2}-\d{1,2}/, o = /(\d|1[012])(:\d+){0,2} *(AM|PM)/, u = /\d{1,2}(:\d{1,2}){1,2}/, l = {
      className: "literal",
      variants: [
        {
          // #YYYY-MM-DD# (ISO-Date) or #M/D/YYYY# (US-Date)
          begin: t.concat(/# */, t.either(i, a), / *#/)
        },
        {
          // #H:mm[:ss]# (24h Time)
          begin: t.concat(/# */, u, / *#/)
        },
        {
          // #h[:mm[:ss]] A# (12h Time)
          begin: t.concat(/# */, o, / *#/)
        },
        {
          // date plus time
          begin: t.concat(
            /# */,
            t.either(i, a),
            / +/,
            t.either(o, u),
            / *#/
          )
        }
      ]
    }, c = {
      className: "number",
      relevance: 0,
      variants: [
        {
          // Float
          begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
        },
        {
          // Integer (base 10)
          begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 16)
          begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 8)
          begin: /&O[0-7_]+((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 2)
          begin: /&B[01_]+((U?[SIL])|[%&])?/
        }
      ]
    }, d = {
      className: "label",
      begin: /^\w+:/
    }, p = e.COMMENT(/'''/, /$/, { contains: [
      {
        className: "doctag",
        begin: /<\/?/,
        end: />/
      }
    ] }), m = e.COMMENT(null, /$/, { variants: [
      { begin: /'/ },
      {
        // TODO: Use multi-class for leading spaces
        begin: /([\t ]|^)REM(?=\s)/
      }
    ] });
    return {
      name: "Visual Basic .NET",
      aliases: ["vb"],
      case_insensitive: !0,
      classNameAliases: { label: "symbol" },
      keywords: {
        keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
        built_in: (
          // Operators https://docs.microsoft.com/dotnet/visual-basic/language-reference/operators
          "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort"
        ),
        type: (
          // Data types https://docs.microsoft.com/dotnet/visual-basic/language-reference/data-types
          "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort"
        ),
        literal: "true false nothing"
      },
      illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
      contains: [
        r,
        s,
        l,
        c,
        d,
        p,
        m,
        {
          className: "meta",
          // TODO: Use multi-class for indentation once available
          begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
          end: /$/,
          keywords: { keyword: "const disable else elseif enable end externalsource if region then" },
          contains: [m]
        }
      ]
    };
  }
  return qr = n, qr;
}
var Kr, Bi;
function um() {
  if (Bi) return Kr;
  Bi = 1;
  function n(e) {
    e.regex;
    const t = e.COMMENT(/\(;/, /;\)/);
    t.contains.push("self");
    const r = e.COMMENT(/;;/, /$/), s = [
      "anyfunc",
      "block",
      "br",
      "br_if",
      "br_table",
      "call",
      "call_indirect",
      "data",
      "drop",
      "elem",
      "else",
      "end",
      "export",
      "func",
      "global.get",
      "global.set",
      "local.get",
      "local.set",
      "local.tee",
      "get_global",
      "get_local",
      "global",
      "if",
      "import",
      "local",
      "loop",
      "memory",
      "memory.grow",
      "memory.size",
      "module",
      "mut",
      "nop",
      "offset",
      "param",
      "result",
      "return",
      "select",
      "set_global",
      "set_local",
      "start",
      "table",
      "tee_local",
      "then",
      "type",
      "unreachable"
    ], a = {
      begin: [
        /(?:func|call|call_indirect)/,
        /\s+/,
        /\$[^\s)]+/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      }
    }, i = {
      className: "variable",
      begin: /\$[\w_]+/
    }, o = {
      match: /(\((?!;)|\))+/,
      className: "punctuation",
      relevance: 0
    }, u = {
      className: "number",
      relevance: 0,
      // borrowed from Prism, TODO: split out into variants
      match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
    }, l = {
      // look-ahead prevents us from gobbling up opcodes
      match: /(i32|i64|f32|f64)(?!\.)/,
      className: "type"
    }, c = {
      className: "keyword",
      // borrowed from Prism, TODO: split out into variants
      match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
    };
    return {
      name: "WebAssembly",
      keywords: {
        $pattern: /[\w.]+/,
        keyword: s
      },
      contains: [
        r,
        t,
        {
          match: [
            /(?:offset|align)/,
            /\s*/,
            /=/
          ],
          className: {
            1: "keyword",
            3: "operator"
          }
        },
        i,
        o,
        a,
        e.QUOTE_STRING_MODE,
        l,
        c,
        u
      ]
    };
  }
  return Kr = n, Kr;
}
var ge = Ap;
ge.registerLanguage("xml", Ip());
ge.registerLanguage("bash", Rp());
ge.registerLanguage("c", Op());
ge.registerLanguage("cpp", Np());
ge.registerLanguage("csharp", Mp());
ge.registerLanguage("css", Dp());
ge.registerLanguage("markdown", Lp());
ge.registerLanguage("diff", Pp());
ge.registerLanguage("ruby", Bp());
ge.registerLanguage("go", zp());
ge.registerLanguage("graphql", Fp());
ge.registerLanguage("ini", Up());
ge.registerLanguage("java", $p());
ge.registerLanguage("javascript", Hp());
ge.registerLanguage("json", jp());
ge.registerLanguage("kotlin", qp());
ge.registerLanguage("less", Kp());
ge.registerLanguage("lua", Gp());
ge.registerLanguage("makefile", Wp());
ge.registerLanguage("perl", Yp());
ge.registerLanguage("objectivec", Zp());
ge.registerLanguage("php", Qp());
ge.registerLanguage("php-template", Xp());
ge.registerLanguage("plaintext", Vp());
ge.registerLanguage("python", Jp());
ge.registerLanguage("python-repl", em());
ge.registerLanguage("r", tm());
ge.registerLanguage("rust", nm());
ge.registerLanguage("scss", rm());
ge.registerLanguage("shell", sm());
ge.registerLanguage("sql", am());
ge.registerLanguage("swift", im());
ge.registerLanguage("yaml", om());
ge.registerLanguage("typescript", cm());
ge.registerLanguage("vbnet", lm());
ge.registerLanguage("wasm", um());
ge.HighlightJS = ge;
ge.default = ge;
var dm = ge;
const An = /* @__PURE__ */ co(dm), pm = { js: "javascript", ts: "typescript", jsx: "javascript", tsx: "typescript", html: "xml", html5: "xml", md: "markdown", yml: "yaml", py: "python", rb: "ruby", kt: "kotlin", rs: "rust" }, mm = (() => {
  const n = "dark";
  let e = n;
  for (const [s, a] of Object.entries(pm)) An.getLanguage(a) ? An.registerAliases(s, { languageName: a }) : typeof (t = `Language "${a}" is not registered to use with highlight.js.`) != "string" ? t && typeof t.toString == "function" ? console.warn(`[nlux] ${t.toString()}`) : console.warn("[nlux]") : console.warn(`[nlux] ${t}`);
  var t;
  const r = (s, a) => {
    const i = An.getLanguage(a) ? a : "plaintext";
    return An.highlight(s, { language: i, ignoreIllegals: !0 }).value;
  };
  return { createHighlighter(s) {
    const { colorMode: a } = s ?? {};
    return ((i) => {
      e = i;
    })(a ?? n), r;
  }, highlightingClass: (s) => e === "light" ? "highlighter-light" : "highlighter-dark" };
})();
var xs = { exports: {} }, In = { exports: {} }, Se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zi;
function hm() {
  if (zi) return Se;
  zi = 1;
  var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, s = n ? Symbol.for("react.strict_mode") : 60108, a = n ? Symbol.for("react.profiler") : 60114, i = n ? Symbol.for("react.provider") : 60109, o = n ? Symbol.for("react.context") : 60110, u = n ? Symbol.for("react.async_mode") : 60111, l = n ? Symbol.for("react.concurrent_mode") : 60111, c = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113, p = n ? Symbol.for("react.suspense_list") : 60120, m = n ? Symbol.for("react.memo") : 60115, h = n ? Symbol.for("react.lazy") : 60116, g = n ? Symbol.for("react.block") : 60121, f = n ? Symbol.for("react.fundamental") : 60117, E = n ? Symbol.for("react.responder") : 60118, b = n ? Symbol.for("react.scope") : 60119;
  function y(w) {
    if (typeof w == "object" && w !== null) {
      var I = w.$$typeof;
      switch (I) {
        case e:
          switch (w = w.type, w) {
            case u:
            case l:
            case r:
            case a:
            case s:
            case d:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case o:
                case c:
                case h:
                case m:
                case i:
                  return w;
                default:
                  return I;
              }
          }
        case t:
          return I;
      }
    }
  }
  function S(w) {
    return y(w) === l;
  }
  return Se.AsyncMode = u, Se.ConcurrentMode = l, Se.ContextConsumer = o, Se.ContextProvider = i, Se.Element = e, Se.ForwardRef = c, Se.Fragment = r, Se.Lazy = h, Se.Memo = m, Se.Portal = t, Se.Profiler = a, Se.StrictMode = s, Se.Suspense = d, Se.isAsyncMode = function(w) {
    return S(w) || y(w) === u;
  }, Se.isConcurrentMode = S, Se.isContextConsumer = function(w) {
    return y(w) === o;
  }, Se.isContextProvider = function(w) {
    return y(w) === i;
  }, Se.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, Se.isForwardRef = function(w) {
    return y(w) === c;
  }, Se.isFragment = function(w) {
    return y(w) === r;
  }, Se.isLazy = function(w) {
    return y(w) === h;
  }, Se.isMemo = function(w) {
    return y(w) === m;
  }, Se.isPortal = function(w) {
    return y(w) === t;
  }, Se.isProfiler = function(w) {
    return y(w) === a;
  }, Se.isStrictMode = function(w) {
    return y(w) === s;
  }, Se.isSuspense = function(w) {
    return y(w) === d;
  }, Se.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === l || w === a || w === s || w === d || w === p || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === m || w.$$typeof === i || w.$$typeof === o || w.$$typeof === c || w.$$typeof === f || w.$$typeof === E || w.$$typeof === b || w.$$typeof === g);
  }, Se.typeOf = y, Se;
}
var _e = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fi;
function gm() {
  return Fi || (Fi = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, s = n ? Symbol.for("react.strict_mode") : 60108, a = n ? Symbol.for("react.profiler") : 60114, i = n ? Symbol.for("react.provider") : 60109, o = n ? Symbol.for("react.context") : 60110, u = n ? Symbol.for("react.async_mode") : 60111, l = n ? Symbol.for("react.concurrent_mode") : 60111, c = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113, p = n ? Symbol.for("react.suspense_list") : 60120, m = n ? Symbol.for("react.memo") : 60115, h = n ? Symbol.for("react.lazy") : 60116, g = n ? Symbol.for("react.block") : 60121, f = n ? Symbol.for("react.fundamental") : 60117, E = n ? Symbol.for("react.responder") : 60118, b = n ? Symbol.for("react.scope") : 60119;
    function y(U) {
      return typeof U == "string" || typeof U == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      U === r || U === l || U === a || U === s || U === d || U === p || typeof U == "object" && U !== null && (U.$$typeof === h || U.$$typeof === m || U.$$typeof === i || U.$$typeof === o || U.$$typeof === c || U.$$typeof === f || U.$$typeof === E || U.$$typeof === b || U.$$typeof === g);
    }
    function S(U) {
      if (typeof U == "object" && U !== null) {
        var we = U.$$typeof;
        switch (we) {
          case e:
            var ze = U.type;
            switch (ze) {
              case u:
              case l:
              case r:
              case a:
              case s:
              case d:
                return ze;
              default:
                var $e = ze && ze.$$typeof;
                switch ($e) {
                  case o:
                  case c:
                  case h:
                  case m:
                  case i:
                    return $e;
                  default:
                    return we;
                }
            }
          case t:
            return we;
        }
      }
    }
    var w = u, I = l, z = o, R = i, T = e, A = c, $ = r, D = h, H = m, P = t, W = a, oe = s, C = d, L = !1;
    function N(U) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(U) || S(U) === u;
    }
    function k(U) {
      return S(U) === l;
    }
    function O(U) {
      return S(U) === o;
    }
    function j(U) {
      return S(U) === i;
    }
    function X(U) {
      return typeof U == "object" && U !== null && U.$$typeof === e;
    }
    function ee(U) {
      return S(U) === c;
    }
    function te(U) {
      return S(U) === r;
    }
    function Y(U) {
      return S(U) === h;
    }
    function V(U) {
      return S(U) === m;
    }
    function Q(U) {
      return S(U) === t;
    }
    function ae(U) {
      return S(U) === a;
    }
    function ne(U) {
      return S(U) === s;
    }
    function fe(U) {
      return S(U) === d;
    }
    _e.AsyncMode = w, _e.ConcurrentMode = I, _e.ContextConsumer = z, _e.ContextProvider = R, _e.Element = T, _e.ForwardRef = A, _e.Fragment = $, _e.Lazy = D, _e.Memo = H, _e.Portal = P, _e.Profiler = W, _e.StrictMode = oe, _e.Suspense = C, _e.isAsyncMode = N, _e.isConcurrentMode = k, _e.isContextConsumer = O, _e.isContextProvider = j, _e.isElement = X, _e.isForwardRef = ee, _e.isFragment = te, _e.isLazy = Y, _e.isMemo = V, _e.isPortal = Q, _e.isProfiler = ae, _e.isStrictMode = ne, _e.isSuspense = fe, _e.isValidElementType = y, _e.typeOf = S;
  }()), _e;
}
var Ui;
function hc() {
  return Ui || (Ui = 1, process.env.NODE_ENV === "production" ? In.exports = hm() : In.exports = gm()), In.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Gr, $i;
function fm() {
  if ($i) return Gr;
  $i = 1;
  var n = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var i = {}, o = 0; o < 10; o++)
        i["_" + String.fromCharCode(o)] = o;
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
  return Gr = s() ? Object.assign : function(a, i) {
    for (var o, u = r(a), l, c = 1; c < arguments.length; c++) {
      o = Object(arguments[c]);
      for (var d in o)
        e.call(o, d) && (u[d] = o[d]);
      if (n) {
        l = n(o);
        for (var p = 0; p < l.length; p++)
          t.call(o, l[p]) && (u[l[p]] = o[l[p]]);
      }
    }
    return u;
  }, Gr;
}
var Wr, Hi;
function Ws() {
  if (Hi) return Wr;
  Hi = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Wr = n, Wr;
}
var Yr, ji;
function gc() {
  return ji || (ji = 1, Yr = Function.call.bind(Object.prototype.hasOwnProperty)), Yr;
}
var Zr, qi;
function bm() {
  if (qi) return Zr;
  qi = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Ws(), t = {}, r = gc();
    n = function(a) {
      var i = "Warning: " + a;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function s(a, i, o, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in a)
        if (r(a, c)) {
          var d;
          try {
            if (typeof a[c] != "function") {
              var p = Error(
                (u || "React class") + ": " + o + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            d = a[c](i, c, u, o, null, e);
          } catch (h) {
            d = h;
          }
          if (d && !(d instanceof Error) && n(
            (u || "React class") + ": type specification of " + o + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in t)) {
            t[d.message] = !0;
            var m = l ? l() : "";
            n(
              "Failed " + o + " type: " + d.message + (m ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Zr = s, Zr;
}
var Qr, Ki;
function ym() {
  if (Ki) return Qr;
  Ki = 1;
  var n = hc(), e = fm(), t = Ws(), r = gc(), s = bm(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(o) {
    var u = "Warning: " + o;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return Qr = function(o, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function d(k) {
      var O = k && (l && k[l] || k[c]);
      if (typeof O == "function")
        return O;
    }
    var p = "<<anonymous>>", m = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: b(),
      arrayOf: y,
      element: S(),
      elementType: w(),
      instanceOf: I,
      node: A(),
      objectOf: R,
      oneOf: z,
      oneOfType: T,
      shape: D,
      exact: H
    };
    function h(k, O) {
      return k === O ? k !== 0 || 1 / k === 1 / O : k !== k && O !== O;
    }
    function g(k, O) {
      this.message = k, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function f(k) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, j = 0;
      function X(te, Y, V, Q, ae, ne, fe) {
        if (Q = Q || p, ne = ne || V, fe !== t) {
          if (u) {
            var U = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw U.name = "Invariant Violation", U;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var we = Q + ":" + V;
            !O[we] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + ne + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[we] = !0, j++);
          }
        }
        return Y[V] == null ? te ? Y[V] === null ? new g("The " + ae + " `" + ne + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new g("The " + ae + " `" + ne + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : k(Y, V, Q, ae, ne);
      }
      var ee = X.bind(null, !1);
      return ee.isRequired = X.bind(null, !0), ee;
    }
    function E(k) {
      function O(j, X, ee, te, Y, V) {
        var Q = j[X], ae = oe(Q);
        if (ae !== k) {
          var ne = C(Q);
          return new g(
            "Invalid " + te + " `" + Y + "` of type " + ("`" + ne + "` supplied to `" + ee + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return f(O);
    }
    function b() {
      return f(i);
    }
    function y(k) {
      function O(j, X, ee, te, Y) {
        if (typeof k != "function")
          return new g("Property `" + Y + "` of component `" + ee + "` has invalid PropType notation inside arrayOf.");
        var V = j[X];
        if (!Array.isArray(V)) {
          var Q = oe(V);
          return new g("Invalid " + te + " `" + Y + "` of type " + ("`" + Q + "` supplied to `" + ee + "`, expected an array."));
        }
        for (var ae = 0; ae < V.length; ae++) {
          var ne = k(V, ae, ee, te, Y + "[" + ae + "]", t);
          if (ne instanceof Error)
            return ne;
        }
        return null;
      }
      return f(O);
    }
    function S() {
      function k(O, j, X, ee, te) {
        var Y = O[j];
        if (!o(Y)) {
          var V = oe(Y);
          return new g("Invalid " + ee + " `" + te + "` of type " + ("`" + V + "` supplied to `" + X + "`, expected a single ReactElement."));
        }
        return null;
      }
      return f(k);
    }
    function w() {
      function k(O, j, X, ee, te) {
        var Y = O[j];
        if (!n.isValidElementType(Y)) {
          var V = oe(Y);
          return new g("Invalid " + ee + " `" + te + "` of type " + ("`" + V + "` supplied to `" + X + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return f(k);
    }
    function I(k) {
      function O(j, X, ee, te, Y) {
        if (!(j[X] instanceof k)) {
          var V = k.name || p, Q = N(j[X]);
          return new g("Invalid " + te + " `" + Y + "` of type " + ("`" + Q + "` supplied to `" + ee + "`, expected ") + ("instance of `" + V + "`."));
        }
        return null;
      }
      return f(O);
    }
    function z(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function O(j, X, ee, te, Y) {
        for (var V = j[X], Q = 0; Q < k.length; Q++)
          if (h(V, k[Q]))
            return null;
        var ae = JSON.stringify(k, function(fe, U) {
          var we = C(U);
          return we === "symbol" ? String(U) : U;
        });
        return new g("Invalid " + te + " `" + Y + "` of value `" + String(V) + "` " + ("supplied to `" + ee + "`, expected one of " + ae + "."));
      }
      return f(O);
    }
    function R(k) {
      function O(j, X, ee, te, Y) {
        if (typeof k != "function")
          return new g("Property `" + Y + "` of component `" + ee + "` has invalid PropType notation inside objectOf.");
        var V = j[X], Q = oe(V);
        if (Q !== "object")
          return new g("Invalid " + te + " `" + Y + "` of type " + ("`" + Q + "` supplied to `" + ee + "`, expected an object."));
        for (var ae in V)
          if (r(V, ae)) {
            var ne = k(V, ae, ee, te, Y + "." + ae, t);
            if (ne instanceof Error)
              return ne;
          }
        return null;
      }
      return f(O);
    }
    function T(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var O = 0; O < k.length; O++) {
        var j = k[O];
        if (typeof j != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + L(j) + " at index " + O + "."
          ), i;
      }
      function X(ee, te, Y, V, Q) {
        for (var ae = [], ne = 0; ne < k.length; ne++) {
          var fe = k[ne], U = fe(ee, te, Y, V, Q, t);
          if (U == null)
            return null;
          U.data && r(U.data, "expectedType") && ae.push(U.data.expectedType);
        }
        var we = ae.length > 0 ? ", expected one of type [" + ae.join(", ") + "]" : "";
        return new g("Invalid " + V + " `" + Q + "` supplied to " + ("`" + Y + "`" + we + "."));
      }
      return f(X);
    }
    function A() {
      function k(O, j, X, ee, te) {
        return P(O[j]) ? null : new g("Invalid " + ee + " `" + te + "` supplied to " + ("`" + X + "`, expected a ReactNode."));
      }
      return f(k);
    }
    function $(k, O, j, X, ee) {
      return new g(
        (k || "React class") + ": " + O + " type `" + j + "." + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ee + "`."
      );
    }
    function D(k) {
      function O(j, X, ee, te, Y) {
        var V = j[X], Q = oe(V);
        if (Q !== "object")
          return new g("Invalid " + te + " `" + Y + "` of type `" + Q + "` " + ("supplied to `" + ee + "`, expected `object`."));
        for (var ae in k) {
          var ne = k[ae];
          if (typeof ne != "function")
            return $(ee, te, Y, ae, C(ne));
          var fe = ne(V, ae, ee, te, Y + "." + ae, t);
          if (fe)
            return fe;
        }
        return null;
      }
      return f(O);
    }
    function H(k) {
      function O(j, X, ee, te, Y) {
        var V = j[X], Q = oe(V);
        if (Q !== "object")
          return new g("Invalid " + te + " `" + Y + "` of type `" + Q + "` " + ("supplied to `" + ee + "`, expected `object`."));
        var ae = e({}, j[X], k);
        for (var ne in ae) {
          var fe = k[ne];
          if (r(k, ne) && typeof fe != "function")
            return $(ee, te, Y, ne, C(fe));
          if (!fe)
            return new g(
              "Invalid " + te + " `" + Y + "` key `" + ne + "` supplied to `" + ee + "`.\nBad object: " + JSON.stringify(j[X], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var U = fe(V, ne, ee, te, Y + "." + ne, t);
          if (U)
            return U;
        }
        return null;
      }
      return f(O);
    }
    function P(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(P);
          if (k === null || o(k))
            return !0;
          var O = d(k);
          if (O) {
            var j = O.call(k), X;
            if (O !== k.entries) {
              for (; !(X = j.next()).done; )
                if (!P(X.value))
                  return !1;
            } else
              for (; !(X = j.next()).done; ) {
                var ee = X.value;
                if (ee && !P(ee[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function W(k, O) {
      return k === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function oe(k) {
      var O = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : W(O, k) ? "symbol" : O;
    }
    function C(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var O = oe(k);
      if (O === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function L(k) {
      var O = C(k);
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
    function N(k) {
      return !k.constructor || !k.constructor.name ? p : k.constructor.name;
    }
    return m.checkPropTypes = s, m.resetWarningCache = s.resetWarningCache, m.PropTypes = m, m;
  }, Qr;
}
var Xr, Gi;
function vm() {
  if (Gi) return Xr;
  Gi = 1;
  var n = Ws();
  function e() {
  }
  function t() {
  }
  return t.resetWarningCache = e, Xr = function() {
    function r(i, o, u, l, c, d) {
      if (d !== n) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function s() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: s,
      element: r,
      elementType: r,
      instanceOf: s,
      node: r,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: t,
      resetWarningCache: e
    };
    return a.PropTypes = a, a;
  }, Xr;
}
if (process.env.NODE_ENV !== "production") {
  var Em = hc(), wm = !0;
  xs.exports = ym()(Em.isElement, wm);
} else
  xs.exports = vm()();
var xm = xs.exports;
const Ne = /* @__PURE__ */ co(xm);
function Bt(n, e, t, r) {
  function s(a) {
    return a instanceof t ? a : new t(function(i) {
      i(a);
    });
  }
  return new (t || (t = Promise))(function(a, i) {
    function o(c) {
      try {
        l(r.next(c));
      } catch (d) {
        i(d);
      }
    }
    function u(c) {
      try {
        l(r.throw(c));
      } catch (d) {
        i(d);
      }
    }
    function l(c) {
      c.done ? a(c.value) : s(c.value).then(o, u);
    }
    l((r = r.apply(n, e || [])).next());
  });
}
function zt(n, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, s, a, i;
  return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function o(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; i && (i = 0, l[0] && (t = 0)), t; ) try {
      if (r = 1, s && (a = l[0] & 2 ? s.return : l[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, l[1])).done) return a;
      switch (s = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
        case 0:
        case 1:
          a = l;
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
          if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            t = 0;
            continue;
          }
          if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
            t.label = l[1];
            break;
          }
          if (l[0] === 6 && t.label < a[1]) {
            t.label = a[1], a = l;
            break;
          }
          if (a && t.label < a[2]) {
            t.label = a[2], t.ops.push(l);
            break;
          }
          a[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      l = e.call(n, t);
    } catch (c) {
      l = [6, c], s = 0;
    } finally {
      r = a = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function Wi(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var r = t.call(n), s, a = [], i;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = r.next()).done; ) a.push(s.value);
  } catch (o) {
    i = { error: o };
  } finally {
    try {
      s && !s.done && (t = r.return) && t.call(r);
    } finally {
      if (i) throw i.error;
    }
  }
  return a;
}
function Yi(n, e, t) {
  if (t || arguments.length === 2) for (var r = 0, s = e.length, a; r < s; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return n.concat(a || Array.prototype.slice.call(e));
}
var km = /* @__PURE__ */ new Map([
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
function pn(n, e) {
  var t = Sm(n);
  if (typeof t.path != "string") {
    var r = n.webkitRelativePath;
    Object.defineProperty(t, "path", {
      value: typeof e == "string" ? e : typeof r == "string" && r.length > 0 ? r : n.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return t;
}
function Sm(n) {
  var e = n.name, t = e && e.lastIndexOf(".") !== -1;
  if (t && !n.type) {
    var r = e.split(".").pop().toLowerCase(), s = km.get(r);
    s && Object.defineProperty(n, "type", {
      value: s,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return n;
}
var _m = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function Cm(n) {
  return Bt(this, void 0, void 0, function() {
    return zt(this, function(e) {
      return Gn(n) && Tm(n.dataTransfer) ? [2, Om(n.dataTransfer, n.type)] : Am(n) ? [2, Im(n)] : Array.isArray(n) && n.every(function(t) {
        return "getFile" in t && typeof t.getFile == "function";
      }) ? [2, Rm(n)] : [2, []];
    });
  });
}
function Tm(n) {
  return Gn(n);
}
function Am(n) {
  return Gn(n) && Gn(n.target);
}
function Gn(n) {
  return typeof n == "object" && n !== null;
}
function Im(n) {
  return ks(n.target.files).map(function(e) {
    return pn(e);
  });
}
function Rm(n) {
  return Bt(this, void 0, void 0, function() {
    var e;
    return zt(this, function(t) {
      switch (t.label) {
        case 0:
          return [4, Promise.all(n.map(function(r) {
            return r.getFile();
          }))];
        case 1:
          return e = t.sent(), [2, e.map(function(r) {
            return pn(r);
          })];
      }
    });
  });
}
function Om(n, e) {
  return Bt(this, void 0, void 0, function() {
    var t, r;
    return zt(this, function(s) {
      switch (s.label) {
        case 0:
          return n.items ? (t = ks(n.items).filter(function(a) {
            return a.kind === "file";
          }), e !== "drop" ? [2, t] : [4, Promise.all(t.map(Nm))]) : [3, 2];
        case 1:
          return r = s.sent(), [2, Zi(fc(r))];
        case 2:
          return [2, Zi(ks(n.files).map(function(a) {
            return pn(a);
          }))];
      }
    });
  });
}
function Zi(n) {
  return n.filter(function(e) {
    return _m.indexOf(e.name) === -1;
  });
}
function ks(n) {
  if (n === null)
    return [];
  for (var e = [], t = 0; t < n.length; t++) {
    var r = n[t];
    e.push(r);
  }
  return e;
}
function Nm(n) {
  if (typeof n.webkitGetAsEntry != "function")
    return Qi(n);
  var e = n.webkitGetAsEntry();
  return e && e.isDirectory ? bc(e) : Qi(n);
}
function fc(n) {
  return n.reduce(function(e, t) {
    return Yi(Yi([], Wi(e), !1), Wi(Array.isArray(t) ? fc(t) : [t]), !1);
  }, []);
}
function Qi(n) {
  var e = n.getAsFile();
  if (!e)
    return Promise.reject("".concat(n, " is not a File"));
  var t = pn(e);
  return Promise.resolve(t);
}
function Mm(n) {
  return Bt(this, void 0, void 0, function() {
    return zt(this, function(e) {
      return [2, n.isDirectory ? bc(n) : Dm(n)];
    });
  });
}
function bc(n) {
  var e = n.createReader();
  return new Promise(function(t, r) {
    var s = [];
    function a() {
      var i = this;
      e.readEntries(function(o) {
        return Bt(i, void 0, void 0, function() {
          var u, l, c;
          return zt(this, function(d) {
            switch (d.label) {
              case 0:
                if (o.length) return [3, 5];
                d.label = 1;
              case 1:
                return d.trys.push([1, 3, , 4]), [4, Promise.all(s)];
              case 2:
                return u = d.sent(), t(u), [3, 4];
              case 3:
                return l = d.sent(), r(l), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                c = Promise.all(o.map(Mm)), s.push(c), a(), d.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(o) {
        r(o);
      });
    }
    a();
  });
}
function Dm(n) {
  return Bt(this, void 0, void 0, function() {
    return zt(this, function(e) {
      return [2, new Promise(function(t, r) {
        n.file(function(s) {
          var a = pn(s, n.fullPath);
          t(a);
        }, function(s) {
          r(s);
        });
      })];
    });
  });
}
var Lm = function(n, e) {
  if (n && e) {
    var t = Array.isArray(e) ? e : e.split(","), r = n.name || "", s = (n.type || "").toLowerCase(), a = s.replace(/\/.*$/, "");
    return t.some(function(i) {
      var o = i.trim().toLowerCase();
      return o.charAt(0) === "." ? r.toLowerCase().endsWith(o) : o.endsWith("/*") ? a === o.replace(/\/.*$/, "") : s === o;
    });
  }
  return !0;
};
function Xi(n) {
  return zm(n) || Bm(n) || vc(n) || Pm();
}
function Pm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bm(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function zm(n) {
  if (Array.isArray(n)) return Ss(n);
}
function Vi(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ji(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Vi(Object(t), !0).forEach(function(r) {
      yc(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Vi(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function yc(n, e, t) {
  return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function sn(n, e) {
  return $m(n) || Um(n, e) || vc(n, e) || Fm();
}
function Fm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vc(n, e) {
  if (n) {
    if (typeof n == "string") return Ss(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set") return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ss(n, e);
  }
}
function Ss(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function Um(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var r = [], s = !0, a = !1, i, o;
    try {
      for (t = t.call(n); !(s = (i = t.next()).done) && (r.push(i.value), !(e && r.length === e)); s = !0)
        ;
    } catch (u) {
      a = !0, o = u;
    } finally {
      try {
        !s && t.return != null && t.return();
      } finally {
        if (a) throw o;
      }
    }
    return r;
  }
}
function $m(n) {
  if (Array.isArray(n)) return n;
}
var Hm = "file-invalid-type", jm = "file-too-large", qm = "file-too-small", Km = "too-many-files", Gm = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: Hm,
    message: "File type must be ".concat(t)
  };
}, eo = function(e) {
  return {
    code: jm,
    message: "File is larger than ".concat(e, " ").concat(e === 1 ? "byte" : "bytes")
  };
}, to = function(e) {
  return {
    code: qm,
    message: "File is smaller than ".concat(e, " ").concat(e === 1 ? "byte" : "bytes")
  };
}, Wm = {
  code: Km,
  message: "Too many files"
};
function Ec(n, e) {
  var t = n.type === "application/x-moz-file" || Lm(n, e);
  return [t, t ? null : Gm(e)];
}
function wc(n, e, t) {
  if (St(n.size))
    if (St(e) && St(t)) {
      if (n.size > t) return [!1, eo(t)];
      if (n.size < e) return [!1, to(e)];
    } else {
      if (St(e) && n.size < e) return [!1, to(e)];
      if (St(t) && n.size > t) return [!1, eo(t)];
    }
  return [!0, null];
}
function St(n) {
  return n != null;
}
function Ym(n) {
  var e = n.files, t = n.accept, r = n.minSize, s = n.maxSize, a = n.multiple, i = n.maxFiles, o = n.validator;
  return !a && e.length > 1 || a && i >= 1 && e.length > i ? !1 : e.every(function(u) {
    var l = Ec(u, t), c = sn(l, 1), d = c[0], p = wc(u, r, s), m = sn(p, 1), h = m[0], g = o ? o(u) : null;
    return d && h && !g;
  });
}
function Wn(n) {
  return typeof n.isPropagationStopped == "function" ? n.isPropagationStopped() : typeof n.cancelBubble < "u" ? n.cancelBubble : !1;
}
function Rn(n) {
  return n.dataTransfer ? Array.prototype.some.call(n.dataTransfer.types, function(e) {
    return e === "Files" || e === "application/x-moz-file";
  }) : !!n.target && !!n.target.files;
}
function no(n) {
  n.preventDefault();
}
function Zm(n) {
  return n.indexOf("MSIE") !== -1 || n.indexOf("Trident/") !== -1;
}
function Qm(n) {
  return n.indexOf("Edge/") !== -1;
}
function Xm() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Zm(n) || Qm(n);
}
function at() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return function(r) {
    for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), i = 1; i < s; i++)
      a[i - 1] = arguments[i];
    return e.some(function(o) {
      return !Wn(r) && o && o.apply(void 0, [r].concat(a)), Wn(r);
    });
  };
}
function Vm() {
  return "showOpenFilePicker" in window;
}
function Jm(n) {
  if (St(n)) {
    var e = Object.entries(n).filter(function(t) {
      var r = sn(t, 2), s = r[0], a = r[1], i = !0;
      return xc(s) || (console.warn('Skipped "'.concat(s, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), i = !1), (!Array.isArray(a) || !a.every(kc)) && (console.warn('Skipped "'.concat(s, '" because an invalid file extension was provided.')), i = !1), i;
    }).reduce(function(t, r) {
      var s = sn(r, 2), a = s[0], i = s[1];
      return Ji(Ji({}, t), {}, yc({}, a, i));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: e
    }];
  }
  return n;
}
function eh(n) {
  if (St(n))
    return Object.entries(n).reduce(function(e, t) {
      var r = sn(t, 2), s = r[0], a = r[1];
      return [].concat(Xi(e), [s], Xi(a));
    }, []).filter(function(e) {
      return xc(e) || kc(e);
    }).join(",");
}
function th(n) {
  return n instanceof DOMException && (n.name === "AbortError" || n.code === n.ABORT_ERR);
}
function nh(n) {
  return n instanceof DOMException && (n.name === "SecurityError" || n.code === n.SECURITY_ERR);
}
function xc(n) {
  return n === "audio/*" || n === "video/*" || n === "image/*" || n === "text/*" || /\w+\/[-+.\w]+/g.test(n);
}
function kc(n) {
  return /^.*\.[\w]+$/.test(n);
}
var rh = ["children"], sh = ["open"], ah = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], ih = ["refKey", "onChange", "onClick"];
function oh(n) {
  return uh(n) || lh(n) || Sc(n) || ch();
}
function ch() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lh(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function uh(n) {
  if (Array.isArray(n)) return _s(n);
}
function Vr(n, e) {
  return mh(n) || ph(n, e) || Sc(n, e) || dh();
}
function dh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sc(n, e) {
  if (n) {
    if (typeof n == "string") return _s(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set") return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return _s(n, e);
  }
}
function _s(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function ph(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var r = [], s = !0, a = !1, i, o;
    try {
      for (t = t.call(n); !(s = (i = t.next()).done) && (r.push(i.value), !(e && r.length === e)); s = !0)
        ;
    } catch (u) {
      a = !0, o = u;
    } finally {
      try {
        !s && t.return != null && t.return();
      } finally {
        if (a) throw o;
      }
    }
    return r;
  }
}
function mh(n) {
  if (Array.isArray(n)) return n;
}
function ro(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Pe(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ro(Object(t), !0).forEach(function(r) {
      Cs(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : ro(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Cs(n, e, t) {
  return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Yn(n, e) {
  if (n == null) return {};
  var t = hh(n, e), r, s;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    for (s = 0; s < a.length; s++)
      r = a[s], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function hh(n, e) {
  if (n == null) return {};
  var t = {}, r = Object.keys(n), s, a;
  for (a = 0; a < r.length; a++)
    s = r[a], !(e.indexOf(s) >= 0) && (t[s] = n[s]);
  return t;
}
var Ys = /* @__PURE__ */ an(function(n, e) {
  var t = n.children, r = Yn(n, rh), s = Cc(r), a = s.open, i = Yn(s, sh);
  return on(e, function() {
    return {
      open: a
    };
  }, [a]), /* @__PURE__ */ Ve.createElement($c, null, t(Pe(Pe({}, i), {}, {
    open: a
  })));
});
Ys.displayName = "Dropzone";
var _c = {
  disabled: !1,
  getFilesFromEvent: Cm,
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
Ys.defaultProps = _c;
Ys.propTypes = {
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
  children: Ne.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: Ne.objectOf(Ne.arrayOf(Ne.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: Ne.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: Ne.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: Ne.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: Ne.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: Ne.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: Ne.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: Ne.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: Ne.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: Ne.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: Ne.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: Ne.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: Ne.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: Ne.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: Ne.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: Ne.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: Ne.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: Ne.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: Ne.func,
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
  onDrop: Ne.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: Ne.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: Ne.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: Ne.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: Ne.func
};
var Ts = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function Cc() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = Pe(Pe({}, _c), n), t = e.accept, r = e.disabled, s = e.getFilesFromEvent, a = e.maxSize, i = e.minSize, o = e.multiple, u = e.maxFiles, l = e.onDragEnter, c = e.onDragLeave, d = e.onDragOver, p = e.onDrop, m = e.onDropAccepted, h = e.onDropRejected, g = e.onFileDialogCancel, f = e.onFileDialogOpen, E = e.useFsAccessApi, b = e.autoFocus, y = e.preventDropOnDocument, S = e.noClick, w = e.noKeyboard, I = e.noDrag, z = e.noDragEventsBubbling, R = e.onError, T = e.validator, A = ue(function() {
    return eh(t);
  }, [t]), $ = ue(function() {
    return Jm(t);
  }, [t]), D = ue(function() {
    return typeof f == "function" ? f : so;
  }, [f]), H = ue(function() {
    return typeof g == "function" ? g : so;
  }, [g]), P = Ee(null), W = Ee(null), oe = Uc(gh, Ts), C = Vr(oe, 2), L = C[0], N = C[1], k = L.isFocused, O = L.isFileDialogActive, j = Ee(typeof window < "u" && window.isSecureContext && E && Vm()), X = function() {
    !j.current && O && setTimeout(function() {
      if (W.current) {
        var J = W.current.files;
        J.length || (N({
          type: "closeDialog"
        }), H());
      }
    }, 300);
  };
  he(function() {
    return window.addEventListener("focus", X, !1), function() {
      window.removeEventListener("focus", X, !1);
    };
  }, [W, O, H, j]);
  var ee = Ee([]), te = function(J) {
    P.current && P.current.contains(J.target) || (J.preventDefault(), ee.current = []);
  };
  he(function() {
    return y && (document.addEventListener("dragover", no, !1), document.addEventListener("drop", te, !1)), function() {
      y && (document.removeEventListener("dragover", no), document.removeEventListener("drop", te));
    };
  }, [P, y]), he(function() {
    return !r && b && P.current && P.current.focus(), function() {
    };
  }, [P, b, r]);
  var Y = Ce(function(B) {
    R ? R(B) : console.error(B);
  }, [R]), V = Ce(function(B) {
    B.preventDefault(), B.persist(), xe(B), ee.current = [].concat(oh(ee.current), [B.target]), Rn(B) && Promise.resolve(s(B)).then(function(J) {
      if (!(Wn(B) && !z)) {
        var me = J.length, M = me > 0 && Ym({
          files: J,
          accept: A,
          minSize: i,
          maxSize: a,
          multiple: o,
          maxFiles: u,
          validator: T
        }), K = me > 0 && !M;
        N({
          isDragAccept: M,
          isDragReject: K,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), l && l(B);
      }
    }).catch(function(J) {
      return Y(J);
    });
  }, [s, l, Y, z, A, i, a, o, u, T]), Q = Ce(function(B) {
    B.preventDefault(), B.persist(), xe(B);
    var J = Rn(B);
    if (J && B.dataTransfer)
      try {
        B.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return J && d && d(B), !1;
  }, [d, z]), ae = Ce(function(B) {
    B.preventDefault(), B.persist(), xe(B);
    var J = ee.current.filter(function(M) {
      return P.current && P.current.contains(M);
    }), me = J.indexOf(B.target);
    me !== -1 && J.splice(me, 1), ee.current = J, !(J.length > 0) && (N({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), Rn(B) && c && c(B));
  }, [P, c, z]), ne = Ce(function(B, J) {
    var me = [], M = [];
    B.forEach(function(K) {
      var ie = Ec(K, A), pe = Vr(ie, 2), Me = pe[0], He = pe[1], ot = wc(K, i, a), tt = Vr(ot, 2), ft = tt[0], bt = tt[1], yt = T ? T(K) : null;
      if (Me && ft && !yt)
        me.push(K);
      else {
        var ve = [He, bt];
        yt && (ve = ve.concat(yt)), M.push({
          file: K,
          errors: ve.filter(function(nt) {
            return nt;
          })
        });
      }
    }), (!o && me.length > 1 || o && u >= 1 && me.length > u) && (me.forEach(function(K) {
      M.push({
        file: K,
        errors: [Wm]
      });
    }), me.splice(0)), N({
      acceptedFiles: me,
      fileRejections: M,
      type: "setFiles"
    }), p && p(me, M, J), M.length > 0 && h && h(M, J), me.length > 0 && m && m(me, J);
  }, [N, o, A, i, a, u, p, m, h, T]), fe = Ce(function(B) {
    B.preventDefault(), B.persist(), xe(B), ee.current = [], Rn(B) && Promise.resolve(s(B)).then(function(J) {
      Wn(B) && !z || ne(J, B);
    }).catch(function(J) {
      return Y(J);
    }), N({
      type: "reset"
    });
  }, [s, ne, Y, z]), U = Ce(function() {
    if (j.current) {
      N({
        type: "openDialog"
      }), D();
      var B = {
        multiple: o,
        types: $
      };
      window.showOpenFilePicker(B).then(function(J) {
        return s(J);
      }).then(function(J) {
        ne(J, null), N({
          type: "closeDialog"
        });
      }).catch(function(J) {
        th(J) ? (H(J), N({
          type: "closeDialog"
        })) : nh(J) ? (j.current = !1, W.current ? (W.current.value = null, W.current.click()) : Y(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : Y(J);
      });
      return;
    }
    W.current && (N({
      type: "openDialog"
    }), D(), W.current.value = null, W.current.click());
  }, [N, D, H, E, ne, Y, $, o]), we = Ce(function(B) {
    !P.current || !P.current.isEqualNode(B.target) || (B.key === " " || B.key === "Enter" || B.keyCode === 32 || B.keyCode === 13) && (B.preventDefault(), U());
  }, [P, U]), ze = Ce(function() {
    N({
      type: "focus"
    });
  }, []), $e = Ce(function() {
    N({
      type: "blur"
    });
  }, []), _ = Ce(function() {
    S || (Xm() ? setTimeout(U, 0) : U());
  }, [S, U]), G = function(J) {
    return r ? null : J;
  }, se = function(J) {
    return w ? null : G(J);
  }, q = function(J) {
    return I ? null : G(J);
  }, xe = function(J) {
    z && J.stopPropagation();
  }, ce = ue(function() {
    return function() {
      var B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, J = B.refKey, me = J === void 0 ? "ref" : J, M = B.role, K = B.onKeyDown, ie = B.onFocus, pe = B.onBlur, Me = B.onClick, He = B.onDragEnter, ot = B.onDragOver, tt = B.onDragLeave, ft = B.onDrop, bt = Yn(B, ah);
      return Pe(Pe(Cs({
        onKeyDown: se(at(K, we)),
        onFocus: se(at(ie, ze)),
        onBlur: se(at(pe, $e)),
        onClick: G(at(Me, _)),
        onDragEnter: q(at(He, V)),
        onDragOver: q(at(ot, Q)),
        onDragLeave: q(at(tt, ae)),
        onDrop: q(at(ft, fe)),
        role: typeof M == "string" && M !== "" ? M : "presentation"
      }, me, P), !r && !w ? {
        tabIndex: 0
      } : {}), bt);
    };
  }, [P, we, ze, $e, _, V, Q, ae, fe, w, I, r]), re = Ce(function(B) {
    B.stopPropagation();
  }, []), Re = ue(function() {
    return function() {
      var B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, J = B.refKey, me = J === void 0 ? "ref" : J, M = B.onChange, K = B.onClick, ie = Yn(B, ih), pe = Cs({
        accept: A,
        multiple: o,
        type: "file",
        style: {
          display: "none"
        },
        onChange: G(at(M, fe)),
        onClick: G(at(K, re)),
        tabIndex: -1
      }, me, W);
      return Pe(Pe({}, pe), ie);
    };
  }, [W, t, o, fe, r]);
  return Pe(Pe({}, L), {}, {
    isFocused: k && !r,
    getRootProps: ce,
    getInputProps: Re,
    rootRef: P,
    inputRef: W,
    open: G(U)
  });
}
function gh(n, e) {
  switch (e.type) {
    case "focus":
      return Pe(Pe({}, n), {}, {
        isFocused: !0
      });
    case "blur":
      return Pe(Pe({}, n), {}, {
        isFocused: !1
      });
    case "openDialog":
      return Pe(Pe({}, Ts), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return Pe(Pe({}, n), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return Pe(Pe({}, n), {}, {
        isDragActive: e.isDragActive,
        isDragAccept: e.isDragAccept,
        isDragReject: e.isDragReject
      });
    case "setFiles":
      return Pe(Pe({}, n), {}, {
        acceptedFiles: e.acceptedFiles,
        fileRejections: e.fileRejections
      });
    case "reset":
      return Pe({}, Ts);
    default:
      return n;
  }
}
function so() {
}
const Uh = Ve.memo((n) => {
  var R, T;
  const [e] = Te(n.messages), t = n.advancedOptions || {}, r = t.conversationOptions || {
    layout: "bubbles"
  }, [s, a] = Te([]), { adapter: i, threadId: o, messageId: u } = wd({ ...n, files: s }), { controls: l } = n, [c, d] = Te(/* @__PURE__ */ new Map()), p = (A, $) => {
    d((D) => new Map(D.set(A, $)));
  }, m = (A) => {
    const { prompt: $, uid: D } = A, H = c.get(D);
    return /* @__PURE__ */ x.jsxs("div", { className: "rounded-lg shadow-sm", children: [
      /* @__PURE__ */ x.jsx("span", { className: "block", children: $ }),
      H && /* @__PURE__ */ x.jsx("div", { className: "mt-2", children: /* @__PURE__ */ x.jsx(Sd, { files: H }) })
    ] });
  }, h = Ve.memo((A) => {
    const [$, D] = Te(), [H, P] = Te(), W = async (oe) => {
      var L;
      let C;
      if (A.dataTransferMode === "stream") {
        if (!o || !u) {
          P("streaming message doesnt have thread and messageIds");
          return;
        }
        C = {
          thread_id: o,
          message_id: u,
          score: oe
        };
      } else {
        let N = (L = A.serverResponse) == null ? void 0 : L[0];
        if (N)
          C = {
            thread_id: N.threadId,
            message_id: N.messageId,
            score: oe
          };
        else {
          P("message doesnt have thread and messageIds");
          return;
        }
      }
      try {
        const N = await tc(n), k = n.serverUrl || ec;
        if (!(await fetch(`${k}/threads/score`, {
          method: "POST",
          headers: N,
          body: JSON.stringify(C)
        })).ok)
          throw new Error("Failed to record score");
        D(oe);
      } catch (N) {
        P(N.toString()), console.error("Error recording score:", N);
      }
    };
    return /* @__PURE__ */ x.jsxs("div", { className: "", children: [
      A.dataTransferMode === "batch" && /* @__PURE__ */ x.jsx(Xu, { children: A.content }),
      A.dataTransferMode === "stream" && /* @__PURE__ */ x.jsx("div", { className: "p-2 rounded-lg", ref: A.containerRef }),
      /* @__PURE__ */ x.jsxs("div", { className: "flex items-center justify-start space-x-1", children: [
        /* @__PURE__ */ x.jsxs(
          "button",
          {
            className: " hover:bg-gray-600 hover:text-white rounded focus:outline-none",
            onClick: () => W(1),
            children: [
              $ == null && /* @__PURE__ */ x.jsx(Od, { className: "h-4 w-4" }),
              $ === 1 && /* @__PURE__ */ x.jsx(Ld, { className: "h-4 w-4 animate-fadeIn" })
            ]
          }
        ),
        /* @__PURE__ */ x.jsxs(
          "button",
          {
            className: "p-2 hover:bg-gray-600 rounded focus:outline-none",
            onClick: () => W(-1),
            children: [
              $ == null && /* @__PURE__ */ x.jsx(Id, { className: "h-4 w-4" }),
              $ === -1 && /* @__PURE__ */ x.jsx(Md, { className: "h-4 w-4 animate-fadeIn" })
            ]
          }
        )
      ] }),
      H && /* @__PURE__ */ x.jsx("div", { className: "text-red text-xs animate-fadeIn p-2 rounded-md", children: H })
    ] });
  }), g = Object.assign(
    {},
    { colorScheme: "light", themeId: "langdb" },
    t.displayOptions
  ), f = t.composerOptions || {
    placeholder: "How can i help you today ?"
  }, E = Object.assign({}, {
    assistant: Object.assign({}, {
      name: "LangDB",
      tagline: `
              Easily build and deploy AI agents with SQL.
              Customize with our React widget on`,
      avatar: /* @__PURE__ */ x.jsx(kd, {})
    }, (R = n.personaOptions) == null ? void 0 : R.assistant),
    user: Object.assign({}, {
      name: "User",
      avatar: /* @__PURE__ */ x.jsx(id, {})
    })
  }, (T = n.personaOptions) == null ? void 0 : T.user), b = Ce((A) => {
    s && (p(A.uid, [...s]), a([]));
  }, [p]), y = Ce(() => {
  }, []), S = Ce((A) => {
    a(($) => [...$, ...A.map((D) => Object.assign(D, {
      preview: URL.createObjectURL(D)
    }))]);
  }, []), { getRootProps: w, isDragActive: I } = Cc({
    onDrop: S,
    noClick: !0,
    noKeyboard: !0
  }), z = n.className || "";
  return /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col w-[100%] h-full dropzone", ...w(), children: [
    (l == null ? void 0 : l.enableFiles) && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
      I && /* @__PURE__ */ x.jsx("div", { className: "absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-white bg-opacity-75 dark:bg-darkContainer dark:bg-opacity-75", children: /* @__PURE__ */ x.jsxs("div", { className: "text-center flex flex-col items-center", children: [
        /* @__PURE__ */ x.jsx(Td, { className: "h-12 w-12 text-primary dark:text-gray-200 mb-4 animate-bounce" }),
        /* @__PURE__ */ x.jsx("p", { className: "text-lg font-semibold text-primary dark:text-gray-200 w-[400px] mx-auto", children: "Drop your images here to enhance your query with visual insights." })
      ] }) }),
      /* @__PURE__ */ x.jsx(_d, { files: s, setFiles: a })
    ] }),
    /* @__PURE__ */ x.jsx("div", { className: `flex-1 w-full relative ${I ? "hidden" : ""}`, children: /* @__PURE__ */ x.jsx(
      "main",
      {
        className: `items-center justify-between  ${z} h-full absolute`,
        style: n.style || {},
        children: /* @__PURE__ */ x.jsx(
          Qu,
          {
            adapter: i,
            initialConversation: e,
            events: {
              messageSent: b,
              messageStreamStarted: y
            },
            messageOptions: {
              promptRenderer: m,
              responseRenderer: h,
              syntaxHighlighter: mm
            },
            personaOptions: E,
            conversationOptions: r,
            displayOptions: g,
            composerOptions: f,
            ...t
          }
        )
      }
    ) })
  ] });
});
function Jr(...n) {
  return n.filter(Boolean).join(" ");
}
const $h = (n) => {
  const {
    onMinimize: e,
    onMaximize: t,
    btnClassName: r,
    theme: s,
    children: a,
    title: i,
    maximizedPanelClassName: o,
    maximizedPanelStyle: u,
    showFullScreen: l,
    controls: c
  } = n, [d, p] = Te(!1), [m, h] = Te(l || !1), g = Ce(() => {
    p((f) => !f);
  }, []);
  return /* @__PURE__ */ x.jsxs("div", { className: Jr(s || "dark"), children: [
    d && /* @__PURE__ */ x.jsxs(
      "div",
      {
        style: m ? u : {},
        className: Jr(
          "light:text-slate-900 dark:text-white flex flex-1 bg-white dark:bg-darkContainer flex-col absolute p-[10px] pt-[0px]",
          m ? o || "h-full w-full bottom-0 right-0" : "rounded border shadow-md h-[60vh] w-[40vw] min-h-[500px] bottom-16 right-16"
        ),
        children: [
          /* @__PURE__ */ x.jsxs(
            "div",
            {
              className: "border-b py-[5px] flex justify-center items-center",
              style: { zIndex: "99999" },
              children: [
                /* @__PURE__ */ x.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ x.jsx(
                    "button",
                    {
                      onClick: () => {
                        p(!1), e && e();
                      },
                      children: /* @__PURE__ */ x.jsx(bh, {})
                    }
                  ),
                  !(c != null && c.hideMaximise) && /* @__PURE__ */ x.jsx(
                    "button",
                    {
                      onClick: () => {
                        h((f) => !f), t && t();
                      },
                      children: m ? /* @__PURE__ */ x.jsx(vh, {}) : /* @__PURE__ */ x.jsx(yh, {})
                    }
                  )
                ] }),
                /* @__PURE__ */ x.jsx("div", { className: "flex flex-1 justify-center", children: i })
              ]
            }
          ),
          /* @__PURE__ */ x.jsx("div", { className: "flex flex-1 overflow-scroll ", children: a })
        ]
      }
    ),
    !d && /* @__PURE__ */ x.jsx(
      "button",
      {
        className: Jr(
          r || "",
          "fixed text-white bg-primary hover:bg-primary-800 bottom-5 right-5 flex w-[50px] hover:scale-110 scale-100 h-[50px] justify-center items-center p-[10px] rounded-full cursor-pointer shadow-none hover:shadow-xl transition ease-in-out"
        ),
        onClick: g,
        children: /* @__PURE__ */ x.jsx(fh, {})
      }
    )
  ] });
}, fh = () => /* @__PURE__ */ x.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "size-6",
    children: /* @__PURE__ */ x.jsx(
      "path",
      {
        strokeLinecap: "round",
        "stroke-linejoin": "round",
        d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      }
    )
  }
), bh = () => /* @__PURE__ */ x.jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ x.jsx("path", { d: "M19 13H5v-2h14v2z" })
  }
), yh = () => /* @__PURE__ */ x.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "size-6",
    children: /* @__PURE__ */ x.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
      }
    )
  }
), vh = () => /* @__PURE__ */ x.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "size-6",
    children: /* @__PURE__ */ x.jsx(
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
  Qu as AiChat,
  qa as AiChatUI,
  fh as ChatIcon,
  $h as FloatingChatWidget,
  ld as ImageDetail,
  Xu as Markdown,
  od as MessageContentType,
  cd as MessageType,
  Uh as Widget,
  zh as createAiContext,
  ud as createInnerMessage,
  Nh as useAiChatApi,
  Ph as useAiContext,
  Bh as useAiTask,
  Mh as useAsBatchAdapter,
  Lh as useAsRscAdapter,
  Dh as useAsStreamAdapter,
  Fh as useDeepCompareEffect
};
//# sourceMappingURL=index.es.js.map
