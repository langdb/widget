import Se, { createContext as lo, useRef as ee, useState as ke, useEffect as Z, useMemo as z, useCallback as Ye, forwardRef as Kt, createRef as fn, useImperativeHandle as Vt, isValidElement as Jr, Component as co } from "react";
var xn = { exports: {} }, rt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function uo() {
  if (ir) return rt;
  ir = 1;
  var r = Se, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, u, c) {
    var l, h = {}, d = null, g = null;
    c !== void 0 && (d = "" + c), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (g = u.ref);
    for (l in u) n.call(u, l) && !o.hasOwnProperty(l) && (h[l] = u[l]);
    if (a && a.defaultProps) for (l in u = a.defaultProps, u) h[l] === void 0 && (h[l] = u[l]);
    return { $$typeof: e, type: a, key: d, ref: g, props: h, _owner: s.current };
  }
  return rt.Fragment = t, rt.jsx = i, rt.jsxs = i, rt;
}
var st = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar;
function po() {
  return ar || (ar = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Se, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), p = Symbol.iterator, f = "@@iterator";
    function w(m) {
      if (m === null || typeof m != "object")
        return null;
      var C = p && m[p] || m[f];
      return typeof C == "function" ? C : null;
    }
    var y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(m) {
      {
        for (var C = arguments.length, P = new Array(C > 1 ? C - 1 : 0), O = 1; O < C; O++)
          P[O - 1] = arguments[O];
        k("error", m, P);
      }
    }
    function k(m, C, P) {
      {
        var O = y.ReactDebugCurrentFrame, U = O.getStackAddendum();
        U !== "" && (C += "%s", P = P.concat([U]));
        var X = P.map(function(F) {
          return String(F);
        });
        X.unshift("Warning: " + C), Function.prototype.apply.call(console[m], console, X);
      }
    }
    var S = !1, A = !1, E = !1, L = !1, R = !1, I;
    I = Symbol.for("react.module.reference");
    function B(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === n || m === o || R || m === s || m === c || m === l || L || m === g || S || A || E || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === h || m.$$typeof === i || m.$$typeof === a || m.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === I || m.getModuleId !== void 0));
    }
    function D(m, C, P) {
      var O = m.displayName;
      if (O)
        return O;
      var U = C.displayName || C.name || "";
      return U !== "" ? P + "(" + U + ")" : P;
    }
    function H(m) {
      return m.displayName || "Context";
    }
    function q(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case c:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case a:
            var C = m;
            return H(C) + ".Consumer";
          case i:
            var P = m;
            return H(P._context) + ".Provider";
          case u:
            return D(m, m.render, "ForwardRef");
          case h:
            var O = m.displayName || null;
            return O !== null ? O : q(m.type) || "Memo";
          case d: {
            var U = m, X = U._payload, F = U._init;
            try {
              return q(F(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, te = 0, oe, $, _, V, G, ae, M;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function be() {
      {
        if (te === 0) {
          oe = console.log, $ = console.info, _ = console.warn, V = console.error, G = console.group, ae = console.groupCollapsed, M = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: he,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        te++;
      }
    }
    function Me() {
      {
        if (te--, te === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, m, {
              value: oe
            }),
            info: W({}, m, {
              value: $
            }),
            warn: W({}, m, {
              value: _
            }),
            error: W({}, m, {
              value: V
            }),
            group: W({}, m, {
              value: G
            }),
            groupCollapsed: W({}, m, {
              value: ae
            }),
            groupEnd: W({}, m, {
              value: M
            })
          });
        }
        te < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var je = y.ReactCurrentDispatcher, b;
    function T(m, C, P) {
      {
        if (b === void 0)
          try {
            throw Error();
          } catch (U) {
            var O = U.stack.trim().match(/\n( *(at )?)/);
            b = O && O[1] || "";
          }
        return `
` + b + m;
      }
    }
    var j = !1, ne;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new fe();
    }
    function ue(m, C) {
      if (!m || j)
        return "";
      {
        var P = ne.get(m);
        if (P !== void 0)
          return P;
      }
      var O;
      j = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = je.current, je.current = null, be();
      try {
        if (C) {
          var F = function() {
            throw Error();
          };
          if (Object.defineProperty(F.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(F, []);
            } catch (me) {
              O = me;
            }
            Reflect.construct(m, [], F);
          } else {
            try {
              F.call();
            } catch (me) {
              O = me;
            }
            m.call(F.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (me) {
            O = me;
          }
          m();
        }
      } catch (me) {
        if (me && O && typeof me.stack == "string") {
          for (var N = me.stack.split(`
`), de = O.stack.split(`
`), se = N.length - 1, ie = de.length - 1; se >= 1 && ie >= 0 && N[se] !== de[ie]; )
            ie--;
          for (; se >= 1 && ie >= 0; se--, ie--)
            if (N[se] !== de[ie]) {
              if (se !== 1 || ie !== 1)
                do
                  if (se--, ie--, ie < 0 || N[se] !== de[ie]) {
                    var ye = `
` + N[se].replace(" at new ", " at ");
                    return m.displayName && ye.includes("<anonymous>") && (ye = ye.replace("<anonymous>", m.displayName)), typeof m == "function" && ne.set(m, ye), ye;
                  }
                while (se >= 1 && ie >= 0);
              break;
            }
        }
      } finally {
        j = !1, je.current = X, Me(), Error.prepareStackTrace = U;
      }
      var Ge = m ? m.displayName || m.name : "", Ne = Ge ? T(Ge) : "";
      return typeof m == "function" && ne.set(m, Ne), Ne;
    }
    function re(m, C, P) {
      return ue(m, !1);
    }
    function xe(m) {
      var C = m.prototype;
      return !!(C && C.isReactComponent);
    }
    function Pe(m, C, P) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return ue(m, xe(m));
      if (typeof m == "string")
        return T(m);
      switch (m) {
        case c:
          return T("Suspense");
        case l:
          return T("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case u:
            return re(m.render);
          case h:
            return Pe(m.type, C, P);
          case d: {
            var O = m, U = O._payload, X = O._init;
            try {
              return Pe(X(U), C, P);
            } catch {
            }
          }
        }
      return "";
    }
    var ze = Object.prototype.hasOwnProperty, et = {}, tt = y.ReactDebugCurrentFrame;
    function Ze(m) {
      if (m) {
        var C = m._owner, P = Pe(m.type, m._source, C ? C.type : null);
        tt.setExtraStackFrame(P);
      } else
        tt.setExtraStackFrame(null);
    }
    function qs(m, C, P, O, U) {
      {
        var X = Function.call.bind(ze);
        for (var F in m)
          if (X(m, F)) {
            var N = void 0;
            try {
              if (typeof m[F] != "function") {
                var de = Error((O || "React class") + ": " + P + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              N = m[F](C, F, O, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (se) {
              N = se;
            }
            N && !(N instanceof Error) && (Ze(U), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", P, F, typeof N), Ze(null)), N instanceof Error && !(N.message in et) && (et[N.message] = !0, Ze(U), x("Failed %s type: %s", P, N.message), Ze(null));
          }
      }
    }
    var Fs = Array.isArray;
    function tn(m) {
      return Fs(m);
    }
    function $s(m) {
      {
        var C = typeof Symbol == "function" && Symbol.toStringTag, P = C && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return P;
      }
    }
    function Us(m) {
      try {
        return Gn(m), !1;
      } catch {
        return !0;
      }
    }
    function Gn(m) {
      return "" + m;
    }
    function Jn(m) {
      if (Us(m))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $s(m)), Gn(m);
    }
    var nt = y.ReactCurrentOwner, Ys = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Kn, Vn, nn;
    nn = {};
    function Qs(m) {
      if (ze.call(m, "ref")) {
        var C = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function Xs(m) {
      if (ze.call(m, "key")) {
        var C = Object.getOwnPropertyDescriptor(m, "key").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function Zs(m, C) {
      if (typeof m.ref == "string" && nt.current && C && nt.current.stateNode !== C) {
        var P = q(nt.current.type);
        nn[P] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(nt.current.type), m.ref), nn[P] = !0);
      }
    }
    function Ws(m, C) {
      {
        var P = function() {
          Kn || (Kn = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        P.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function Gs(m, C) {
      {
        var P = function() {
          Vn || (Vn = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        P.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var Js = function(m, C, P, O, U, X, F) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: m,
        key: C,
        ref: P,
        props: F,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(N, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function Ks(m, C, P, O, U) {
      {
        var X, F = {}, N = null, de = null;
        P !== void 0 && (Jn(P), N = "" + P), Xs(C) && (Jn(C.key), N = "" + C.key), Qs(C) && (de = C.ref, Zs(C, U));
        for (X in C)
          ze.call(C, X) && !Ys.hasOwnProperty(X) && (F[X] = C[X]);
        if (m && m.defaultProps) {
          var se = m.defaultProps;
          for (X in se)
            F[X] === void 0 && (F[X] = se[X]);
        }
        if (N || de) {
          var ie = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          N && Ws(F, ie), de && Gs(F, ie);
        }
        return Js(m, N, de, U, O, nt.current, F);
      }
    }
    var rn = y.ReactCurrentOwner, _n = y.ReactDebugCurrentFrame;
    function We(m) {
      if (m) {
        var C = m._owner, P = Pe(m.type, m._source, C ? C.type : null);
        _n.setExtraStackFrame(P);
      } else
        _n.setExtraStackFrame(null);
    }
    var sn;
    sn = !1;
    function on(m) {
      return typeof m == "object" && m !== null && m.$$typeof === e;
    }
    function er() {
      {
        if (rn.current) {
          var m = q(rn.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function Vs(m) {
      return "";
    }
    var tr = {};
    function _s(m) {
      {
        var C = er();
        if (!C) {
          var P = typeof m == "string" ? m : m.displayName || m.name;
          P && (C = `

Check the top-level render call using <` + P + ">.");
        }
        return C;
      }
    }
    function nr(m, C) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var P = _s(C);
        if (tr[P])
          return;
        tr[P] = !0;
        var O = "";
        m && m._owner && m._owner !== rn.current && (O = " It was passed a child from " + q(m._owner.type) + "."), We(m), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, O), We(null);
      }
    }
    function rr(m, C) {
      {
        if (typeof m != "object")
          return;
        if (tn(m))
          for (var P = 0; P < m.length; P++) {
            var O = m[P];
            on(O) && nr(O, C);
          }
        else if (on(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var U = w(m);
          if (typeof U == "function" && U !== m.entries)
            for (var X = U.call(m), F; !(F = X.next()).done; )
              on(F.value) && nr(F.value, C);
        }
      }
    }
    function eo(m) {
      {
        var C = m.type;
        if (C == null || typeof C == "string")
          return;
        var P;
        if (typeof C == "function")
          P = C.propTypes;
        else if (typeof C == "object" && (C.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        C.$$typeof === h))
          P = C.propTypes;
        else
          return;
        if (P) {
          var O = q(C);
          qs(P, m.props, "prop", O, m);
        } else if (C.PropTypes !== void 0 && !sn) {
          sn = !0;
          var U = q(C);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function to(m) {
      {
        for (var C = Object.keys(m.props), P = 0; P < C.length; P++) {
          var O = C[P];
          if (O !== "children" && O !== "key") {
            We(m), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", O), We(null);
            break;
          }
        }
        m.ref !== null && (We(m), x("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
      }
    }
    var sr = {};
    function or(m, C, P, O, U, X) {
      {
        var F = B(m);
        if (!F) {
          var N = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = Vs();
          de ? N += de : N += er();
          var se;
          m === null ? se = "null" : tn(m) ? se = "array" : m !== void 0 && m.$$typeof === e ? (se = "<" + (q(m.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : se = typeof m, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", se, N);
        }
        var ie = Ks(m, C, P, U, X);
        if (ie == null)
          return ie;
        if (F) {
          var ye = C.children;
          if (ye !== void 0)
            if (O)
              if (tn(ye)) {
                for (var Ge = 0; Ge < ye.length; Ge++)
                  rr(ye[Ge], m);
                Object.freeze && Object.freeze(ye);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              rr(ye, m);
        }
        if (ze.call(C, "key")) {
          var Ne = q(m), me = Object.keys(C).filter(function(ao) {
            return ao !== "key";
          }), an = me.length > 0 ? "{key: someKey, " + me.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!sr[Ne + an]) {
            var io = me.length > 0 ? "{" + me.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, an, Ne, io, Ne), sr[Ne + an] = !0;
          }
        }
        return m === n ? to(ie) : eo(ie), ie;
      }
    }
    function no(m, C, P) {
      return or(m, C, P, !0);
    }
    function ro(m, C, P) {
      return or(m, C, P, !1);
    }
    var so = ro, oo = no;
    st.Fragment = n, st.jsx = so, st.jsxs = oo;
  }()), st;
}
process.env.NODE_ENV === "production" ? xn.exports = uo() : xn.exports = po();
var v = xn.exports, ho = Object.defineProperty, yt = (r, e, t) => ((n, s, o) => s in n ? ho(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class De extends Error {
  constructor(e = {}) {
    super(e.message), yt(this, "exceptionId"), yt(this, "message"), yt(this, "source"), yt(this, "type"), this.message = e.message ?? "", this.source = e.source, this.type = this.constructor.name, this.exceptionId = e.exceptionId;
  }
}
class qe extends De {
}
class Nt extends De {
}
const pe = (r) => {
  typeof r != "string" ? r && typeof r.toString == "function" ? console.warn(`[nlux] ${r.toString()}`) : console.warn("[nlux]") : console.warn(`[nlux] ${r}`);
}, lr = [], kn = (r) => {
  lr.includes(r) || (lr.push(r), pe(r));
}, Kr = class zt {
  static register(e) {
    const t = e.__compId;
    t ? zt.componentDefs.get(t) === void 0 && (e.__renderer && e.__updater ? zt.componentDefs.set(t, { id: t, model: e, render: e.__renderer, update: e.__updater }) : pe(`Component with id "${t}" missing renderer or updater`)) : pe("Component definition missing valid id");
  }
  static retrieve(e) {
    const t = zt.componentDefs.get(e);
    if (t) return t;
    pe(`Component with id "${e}" not registered`);
  }
};
Kr.componentDefs = /* @__PURE__ */ new Map();
let Vr = Kr;
btoa("sectionsRegistered") + "";
const Re = (r) => {
  const e = requestAnimationFrame(() => {
    r();
  });
  return () => {
    cancelAnimationFrame(e);
  };
}, xt = (r) => {
  r.replaceChildren();
}, Ae = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (r) => {
  const e = 16 * Math.random() | 0;
  return (r == "x" ? e : 3 & e | 8).toString(16);
});
class Ce {
  constructor(e, t) {
    this.subComponentElementIds = /* @__PURE__ */ new Map(), this.subComponents = /* @__PURE__ */ new Map(), this.__context = null, this.__destroyed = !1, this.__status = "unmounted", this.actionsOnDomReady = [], this.compEventGetter = (i) => {
      if (this.destroyed) return () => {
      };
      const a = this.rendererEventListeners.get(i);
      if (!a) throw new De({ source: this.constructor.name, message: `Unable to call renderer event "${i}" because no matching event listener was found. Make sure that the event listener is registered using @CompEventListener() decorator in the component model class, and use class methods instead of arrow function attributes.` });
      return a;
    };
    const n = Object.getPrototypeOf(this).constructor.__compId;
    if (!n) throw new qe({ source: this.constructor.name, message: "Unable to instantiate component: missing compId in implementation. Component should be annotated using @Model() to set compId before iy can be instantiated." });
    if (this.def = Vr.retrieve(n) ?? null, !this.def) throw new qe({ source: this.constructor.name, message: `Unable to instantiate component "${n}" because it's not registered. Component should be registered using CompRegistry.register(ComponentClass) before instantiating a component.` });
    this.__instanceId = Ae(), this.__destroyed = !1, this.__context = e, this.renderedDom = null, this.renderingRoot = null, this.props = t;
    const s = t ? Object.entries(t) : [];
    this.elementProps = new Map(s), this.rendererEventListeners = /* @__PURE__ */ new Map();
    const o = this.constructor.__compEventListeners;
    o && o.forEach((i, a) => {
      i.forEach((u) => {
        const c = Object.getPrototypeOf(this)[u];
        typeof c == "function" ? this.addRendererEventListener(a, c.bind(this)) : pe(`Unable to set event listener "${a}" because method "${u}" cannot be found on component "${this.constructor.name} at runtime!"`);
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
    if (!this.__context) throw new qe({ source: this.constructor.name, message: "Unable to get context because it's not set" });
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
    if (this.destroyed) return void pe(`Unable to render component "${(i = this.def) == null ? void 0 : i.id}" because it is already destroyed`);
    if (this.rendered || this.renderedDom) return void pe(`Unable to render component "${this.def.id}" because it is already rendered`);
    const n = document.createDocumentFragment(), s = Object.getPrototypeOf(this).constructor.__compId, o = this.executeRenderer(n);
    if (!o) throw new De({ source: this.constructor.name, message: `Unable to render component "${s}" because renderer returned null` });
    this.renderedDom = o;
    for (const [, a] of this.subComponents) {
      const u = this.getSubComponentPortal(a.id);
      u && this.mountSubComponentToPortal(a.id, u);
    }
    Re(() => {
      this.destroyed || (t ? e.insertBefore(n, t) : e.append(n), this.renderingRoot = e);
    });
  }
  updateSubComponent(e, t, n) {
    this.throwIfDestroyed();
    const s = this.subComponents.get(e);
    s && !s.destroyed && s.setProp(t, n);
  }
  addSubComponent(e, t, n) {
    if (this.throwIfDestroyed(), this.subComponents.has(e)) throw new qe({ source: this.constructor.name, message: `Unable to add sub-component "${e}" because it already exists` });
    if (this.subComponents.set(e, t), n && this.subComponentElementIds.set(e, n), this.renderedDom) {
      const s = this.getSubComponentPortal(e);
      s && this.mountSubComponentToPortal(e, s);
    }
  }
  executeDomAction(e, ...t) {
    if (this.throwIfDestroyed(), !this.renderedDom) return void this.actionsOnDomReady.push(() => this.executeDomAction(e, ...t));
    if (!this.renderingRoot) throw new De({ source: this.constructor.name, message: "Unable to execute DOM action because renderingRoot is not set" });
    const n = this.renderedDom.actions[e];
    if (!n) throw new De({ source: this.constructor.name, message: `Unable to execute DOM action "${String(e)}" because it does not exist` });
    return Re(() => n(...t));
  }
  executeRenderer(e) {
    var s;
    const t = (s = this.def) == null ? void 0 : s.render;
    if (!t) return null;
    if (this.renderingRoot) throw new De({ source: this.constructor.name, message: "Unable to render component because renderingRoot is already set" });
    const n = t({ appendToRoot: (o) => {
      e.append(o), this.runDomActionsQueue();
    }, compEvent: this.compEventGetter, props: this.rendererProps, context: this.context });
    return n && (this.renderingRoot = e), n;
  }
  removeSubComponent(e) {
    this.throwIfDestroyed(), Re(() => {
      const t = this.subComponents.get(e);
      t && (t.renderingRoot = null, t.destroy(), this.subComponents.delete(e));
    });
  }
  runDomActionsQueue() {
    if (this.actionsOnDomReady.length > 0 && this.rendered) {
      const e = this.actionsOnDomReady;
      this.actionsOnDomReady = [];
      for (const t of e) Re(() => t());
    }
  }
  setProp(e, t) {
    this.destroyed ? pe(`Unable to set prop "${String(e)}" because component "${this.constructor.name}" is destroyed`) : this.elementProps.has(e) ? (this.schedulePropUpdate(e, this.elementProps.get(e), t), this.props = Object.freeze(Object.fromEntries(this.elementProps)), this.elementProps.set(e, t)) : pe(`Unable to set prop "${String(e)}" because it does not exist in the component props`);
  }
  throwIfDestroyed() {
    if (this.__destroyed) throw new qe({ source: this.constructor.name, message: "Unable to call method on destroyed component" });
  }
  addRendererEventListener(e, t) {
    if (this.throwIfDestroyed(), this.rendererEventListeners.has(e)) throw new qe({ source: this.constructor.name, message: `Unable to add event listener to rendererEvents "${e}" because it already exists` });
    this.rendererEventListeners.set(e, t);
  }
  destroyComponent(e = !1) {
    if (this.throwIfDestroyed(), this.subComponents.forEach((t) => {
      t.destroy();
    }), this.renderedDom) {
      this.renderedDom.elements && (this.renderedDom.elements = void 0), this.renderedDom.actions && (this.renderedDom.actions = void 0), this.renderedDom.onDestroy && this.renderedDom.onDestroy();
      const t = this.renderingRoot;
      Re(() => {
        var n;
        if (t) if (t instanceof DocumentFragment) for (; t.firstChild; ) t.removeChild(t.firstChild);
        else e ? (n = t.parentElement) == null || n.removeChild(t) : xt(t);
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
    o && Re(() => {
      i({ propName: e, currentValue: t, newValue: n, dom: { root: o, elements: s.elements, actions: s.actions }, updateSubComponent: this.updateSubComponent });
    });
  }
}
Ce.__compEventListeners = null, Ce.__compId = null, Ce.__renderer = null, Ce.__updater = null;
const He = (r, e, t) => (n) => {
  n.__compId = r, n.__renderer = e, n.__updater = t;
}, Ee = (r) => (e, t) => {
  const n = e;
  if (typeof n.constructor != "function") throw new qe({ source: "CallbackFor", message: "@CallbackFor can only be used on methods of a class!" });
  n.constructor.hasOwnProperty("__compEventListeners") && n.constructor.__compEventListeners !== null || (n.constructor.__compEventListeners = /* @__PURE__ */ new Map());
  const s = n.constructor.__compEventListeners, o = s.get(r);
  o ? o.push(t) : s.set(r, [t]);
};
function mo() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
let Qe = { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
function cr(r) {
  Qe = r;
}
var go = Object.defineProperty, _r = (r, e, t) => ((n, s, o) => s in n ? go(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
let dt = class {
  constructor(e) {
    _r(this, "options"), this.options = e || Qe;
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
_r(dt, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]));
const es = /[&<>"']/, fo = new RegExp(es.source, "g"), ts = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, xo = new RegExp(ts.source, "g"), ko = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ur = (r) => ko[r];
function ve(r, e) {
  if (e) {
    if (es.test(r)) return r.replace(fo, ur);
  } else if (ts.test(r)) return r.replace(xo, ur);
  return r;
}
const vo = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function wo(r) {
  return r.replace(vo, (e, t) => (t = t.toLowerCase()) === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "");
}
const bo = /(^|[^\[])\^/g;
function Y(r, e) {
  let t = typeof r == "string" ? r : r.source;
  e = e || "";
  const n = { replace: (s, o) => {
    let i = typeof o == "string" ? o : o.source;
    return i = i.replace(bo, "$1"), t = t.replace(s, i), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
function dr(r) {
  try {
    r = encodeURI(r).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return r;
}
const pt = { exec: () => null };
function pr(r, e) {
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
function Ct(r, e, t) {
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
const kt = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ns = /(?:[*+-]|\d{1,9}[.)])/, rs = Y(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, ns).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), jn = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, zn = /(?!\s*\])(?:\\.|[^\[\]\\])+/, yo = Y(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", zn).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Co = Y(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ns).getRegex(), _t = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Dn = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, So = Y("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Dn).replace("tag", _t).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), hr = Y(jn).replace("hr", kt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _t).getRegex(), Hn = { blockquote: Y(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", hr).getRegex(), code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, def: yo, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hr: kt, html: So, lheading: rs, list: Co, newline: /^(?: *(?:\n|$))+/, paragraph: hr, table: pt, text: /^[^\n]+/ }, mr = Y("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", kt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _t).getRegex(), Ao = { ...Hn, table: mr, paragraph: Y(jn).replace("hr", kt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", mr).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _t).getRegex() }, Eo = { ...Hn, html: Y(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Dn).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: pt, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Y(jn).replace("hr", kt).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", rs).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, ss = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, os = /^( {2,}|\\)\n(?!\s*$)/, vt = "\\p{P}\\p{S}", Po = Y(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, vt).getRegex(), Io = Y(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, vt).getRegex(), To = Y("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, vt).getRegex(), Ro = Y("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, vt).getRegex(), Bo = Y(/\\([punct])/, "gu").replace(/punct/g, vt).getRegex(), Lo = Y(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Oo = Y(Dn).replace("(?:-->|$)", "-->").getRegex(), Mo = Y("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Oo).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), qt = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, jo = Y(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", qt).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), gr = Y(/^!?\[(label)\]\[(ref)\]/).replace("label", qt).replace("ref", zn).getRegex(), fr = Y(/^!?\[(ref)\](?:\[\])?/).replace("ref", zn).getRegex(), Nn = { _backpedal: pt, anyPunctuation: Bo, autolink: Lo, blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, br: os, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, del: pt, emStrongLDelim: Io, emStrongRDelimAst: To, emStrongRDelimUnd: Ro, escape: ss, link: jo, nolink: fr, punctuation: Po, reflink: gr, reflinkSearch: Y("reflink|nolink(?!\\()", "g").replace("reflink", gr).replace("nolink", fr).getRegex(), tag: Mo, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, url: pt }, zo = { ...Nn, link: Y(/^!?\[(label)\]\((.*?)\)/).replace("label", qt).getRegex(), reflink: Y(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", qt).getRegex() }, vn = { ...Nn, escape: Y(ss).replace("])", "~|])").getRegex(), url: Y(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, Do = { ...vn, br: Y(os).replace("{2,}", "*").getRegex(), text: Y(vn.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, St = { normal: Hn, gfm: Ao, pedantic: Eo }, ot = { normal: Nn, gfm: vn, breaks: Do, pedantic: zo };
var Ho = Object.defineProperty, ln = (r, e, t) => ((n, s, o) => s in n ? Ho(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
function xr(r, e, t, n) {
  const s = e.href, o = e.title ? ve(e.title) : null, i = r[1].replace(/\\([\[\]])/g, "$1");
  if (r[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const a = { type: "link", raw: t, href: s, title: o, text: i, tokens: n.inlineTokens(i) };
    return n.state.inLink = !1, a;
  }
  return { type: "image", raw: t, href: s, title: o, text: ve(i) };
}
let Ft = class {
  constructor(e) {
    ln(this, "lexer"), ln(this, "options"), ln(this, "rules"), this.options = e || Qe;
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, s;
      return t[2] === "@" ? (n = ve(t[1]), s = "mailto:" + n) : (n = ve(t[1]), s = n), { type: "link", raw: t[0], text: n, href: s, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      n = Ct(n.replace(/^ *>[ \t]?/gm, ""), `
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
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : Ct(n, `
`) };
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(n), o = /^ /.test(n) && / $/.test(n);
      return s && o && (n = n.substring(1, n.length - 1)), n = ve(n, !0), { type: "codespan", raw: t[0], text: n };
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
      let i, a, u = o, c = 0;
      const l = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (l.lastIndex = 0, t = t.slice(-1 * e.length + o); (s = l.exec(t)) != null; ) {
        if (i = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !i) continue;
        if (a = [...i].length, s[3] || s[4]) {
          u += a;
          continue;
        }
        if ((s[5] || s[6]) && o % 3 && !((o + a) % 3)) {
          c += a;
          continue;
        }
        if (u -= a, u > 0) continue;
        a = Math.min(a, a + u + c);
        const h = [...s[0]][0].length, d = e.slice(0, o + s.index + h + a);
        if (Math.min(o, a) % 2) {
          const p = d.slice(1, -1);
          return { type: "em", raw: d, text: p, tokens: this.lexer.inlineTokens(p) };
        }
        const g = d.slice(2, -2);
        return { type: "strong", raw: d, text: g, tokens: this.lexer.inlineTokens(g) };
      }
    }
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: ve(t[1]) };
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const n = t[0], s = function(o, i) {
        const a = o.match(/^(\s+)(?:```)/);
        if (a === null) return i;
        const u = a[1];
        return i.split(`
`).map((c) => {
          const l = c.match(/^\s+/);
          if (l === null) return c;
          const [h] = l;
          return h.length >= u.length ? c.slice(u.length) : c;
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
        const s = Ct(n, "#");
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
      return n = this.lexer.state.inRawBlock ? t[0] : ve(t[0]), { type: "text", raw: t[0], text: n };
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
        const i = Ct(n.slice(0, -1), "\\");
        if ((n.length - i.length) % 2 == 0) return;
      } else {
        const i = function(a, u) {
          if (a.indexOf(u[1]) === -1) return -1;
          let c = 0;
          for (let l = 0; l < a.length; l++) if (a[l] === "\\") l++;
          else if (a[l] === u[0]) c++;
          else if (a[l] === u[1] && (c--, c < 0)) return l;
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
      return s = s.trim(), /^</.test(s) && (s = this.options.pedantic && !/>$/.test(n) ? s.slice(1) : s.slice(1, -1)), xr(t, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer);
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim();
      const s = n.length > 1, o = { type: "list", raw: "", ordered: s, start: s ? +n.slice(0, -1) : "", loose: !1, items: [] };
      n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = s ? n : "[*+-]");
      const i = new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let a = "", u = "", c = !1;
      for (; e; ) {
        let l = !1;
        if (!(t = i.exec(e)) || this.rules.block.hr.test(e)) break;
        a = t[0], e = e.substring(a.length);
        let h = t[2].split(`
`, 1)[0].replace(/^\t+/, (y) => " ".repeat(3 * y.length)), d = e.split(`
`, 1)[0], g = 0;
        this.options.pedantic ? (g = 2, u = h.trimStart()) : (g = t[2].search(/[^ ]/), g = g > 4 ? 1 : g, u = h.slice(g), g += t[1].length);
        let p = !1;
        if (!h && /^ *$/.test(d) && (a += d + `
`, e = e.substring(d.length + 1), l = !0), !l) {
          const y = new RegExp(`^ {0,${Math.min(3, g - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), x = new RegExp(`^ {0,${Math.min(3, g - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), k = new RegExp(`^ {0,${Math.min(3, g - 1)}}(?:\`\`\`|~~~)`), S = new RegExp(`^ {0,${Math.min(3, g - 1)}}#`);
          for (; e; ) {
            const A = e.split(`
`, 1)[0];
            if (d = A, this.options.pedantic && (d = d.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), k.test(d) || S.test(d) || y.test(d) || x.test(e)) break;
            if (d.search(/[^ ]/) >= g || !d.trim()) u += `
` + d.slice(g);
            else {
              if (p || h.search(/[^ ]/) >= 4 || k.test(h) || S.test(h) || x.test(h)) break;
              u += `
` + d;
            }
            p || d.trim() || (p = !0), a += A + `
`, e = e.substring(A.length + 1), h = d.slice(g);
          }
        }
        o.loose || (c ? o.loose = !0 : /\n *\n *$/.test(a) && (c = !0));
        let f, w = null;
        this.options.gfm && (w = /^\[[ xX]\] /.exec(u), w && (f = w[0] !== "[ ] ", u = u.replace(/^\[[ xX]\] +/, ""))), o.items.push({ type: "list_item", raw: a, task: !!w, checked: f, loose: !1, text: u, tokens: [] }), o.raw += a;
      }
      o.items[o.items.length - 1].raw = a.trimEnd(), o.items[o.items.length - 1].text = u.trimEnd(), o.raw = o.raw.trimEnd();
      for (let l = 0; l < o.items.length; l++) if (this.lexer.state.top = !1, o.items[l].tokens = this.lexer.blockTokens(o.items[l].text, []), !o.loose) {
        const h = o.items[l].tokens.filter((g) => g.type === "space"), d = h.length > 0 && h.some((g) => /\n.*\n/.test(g.raw));
        o.loose = d;
      }
      if (o.loose) for (let l = 0; l < o.items.length; l++) o.items[l].loose = !0;
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
      return xr(n, s, n[0], this.lexer);
    }
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2])) return;
    const n = pr(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), o = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], i = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === s.length) {
      for (const a of s) /^ *-+: *$/.test(a) ? i.align.push("right") : /^ *:-+: *$/.test(a) ? i.align.push("center") : /^ *:-+ *$/.test(a) ? i.align.push("left") : i.align.push(null);
      for (const a of n) i.header.push({ text: a, tokens: this.lexer.inline(a) });
      for (const a of o) i.rows.push(pr(a, i.header.length).map((u) => ({ text: u, tokens: this.lexer.inline(u) })));
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
      if (t[2] === "@") s = ve(t[0]), o = "mailto:" + s;
      else {
        let i;
        do
          i = t[0], t[0] = ((n = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : n[0]) ?? "";
        while (i !== t[0]);
        s = ve(t[0]), o = t[1] === "www." ? "http://" + t[0] : t[0];
      }
      return { type: "link", raw: t[0], text: s, href: o, tokens: [{ type: "text", raw: s, text: s }] };
    }
  }
};
var No = Object.defineProperty, it = (r, e, t) => ((n, s, o) => s in n ? No(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
let Ke = class wn {
  constructor(e) {
    it(this, "options"), it(this, "state"), it(this, "tokens"), it(this, "inlineQueue"), it(this, "tokenizer"), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Qe, this.options.tokenizer = this.options.tokenizer || new Ft(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    const t = { block: St.normal, inline: ot.normal };
    this.options.pedantic ? (t.block = St.pedantic, t.inline = ot.pedantic) : this.options.gfm && (t.block = St.gfm, this.options.breaks ? t.inline = ot.breaks : t.inline = ot.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: St, inline: ot };
  }
  static lex(e, t) {
    return new wn(t).lex(e);
  }
  static lexInline(e, t) {
    return new wn(t).inlineTokens(e);
  }
  blockTokens(e, t = []) {
    let n, s, o, i;
    for (e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, (a, u, c) => u + "    ".repeat(c.length)); e; ) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((a) => !!(n = a.call({ lexer: this }, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0)))) if (n = this.tokenizer.space(e)) e = e.substring(n.raw.length), n.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
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
        let c;
        this.options.extensions.startBlock.forEach((l) => {
          c = l.call({ lexer: this }, u), typeof c == "number" && c >= 0 && (a = Math.min(a, c));
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
    let n, s, o, i, a, u, c = e;
    if (this.tokens.links) {
      const l = Object.keys(this.tokens.links);
      if (l.length > 0) for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(c)) != null; ) l.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (c = c.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(c)) != null; ) c = c.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(c)) != null; ) c = c.slice(0, i.index) + "++" + c.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; ) if (a || (u = ""), a = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((l) => !!(n = l.call({ lexer: this }, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0)))) if (n = this.tokenizer.escape(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.tag(e)) e = e.substring(n.raw.length), s = t[t.length - 1], s && n.type === "text" && s.type === "text" ? (s.raw += n.raw, s.text += n.text) : t.push(n);
    else if (n = this.tokenizer.link(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(n.raw.length), s = t[t.length - 1], s && n.type === "text" && s.type === "text" ? (s.raw += n.raw, s.text += n.text) : t.push(n);
    else if (n = this.tokenizer.emStrong(e, c, u)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.codespan(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.br(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.del(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.autolink(e)) e = e.substring(n.raw.length), t.push(n);
    else if (this.state.inLink || !(n = this.tokenizer.url(e))) {
      if (o = e, this.options.extensions && this.options.extensions.startInline) {
        let l = 1 / 0;
        const h = e.slice(1);
        let d;
        this.options.extensions.startInline.forEach((g) => {
          d = g.call({ lexer: this }, h), typeof d == "number" && d >= 0 && (l = Math.min(l, d));
        }), l < 1 / 0 && l >= 0 && (o = e.substring(0, l + 1));
      }
      if (n = this.tokenizer.inlineText(o)) e = e.substring(n.raw.length), n.raw.slice(-1) !== "_" && (u = n.raw.slice(-1)), a = !0, s = t[t.length - 1], s && s.type === "text" ? (s.raw += n.raw, s.text += n.text) : t.push(n);
      else if (e) {
        const l = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(l);
          break;
        }
        throw new Error(l);
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
var qo = Object.defineProperty, Fo = (r, e, t) => ((n, s, o) => s in n ? qo(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, e + "", t);
let $t = class {
  constructor(e) {
    Fo(this, "options"), this.options = e || Qe;
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
`, s ? '<pre><code class="language-' + ve(s) + '">' + (n ? e : ve(e, !0)) + `</code></pre>
` : "<pre><code>" + (n ? e : ve(e, !0)) + `</code></pre>
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
    const s = dr(e);
    if (s === null) return n;
    let o = `<img src="${e = s}" alt="${n}"`;
    return t && (o += ` title="${t}"`), o += ">", o;
  }
  link(e, t, n) {
    const s = dr(e);
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
}, qn = class {
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
var $o = Object.defineProperty, cn = (r, e, t) => ((n, s, o) => s in n ? $o(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
let Ve = class bn {
  constructor(e) {
    cn(this, "options"), cn(this, "renderer"), cn(this, "textRenderer"), this.options = e || Qe, this.options.renderer = this.options.renderer || new $t(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new qn();
  }
  static parse(e, t) {
    return new bn(t).parse(e);
  }
  static parseInline(e, t) {
    return new bn(t).parseInline(e);
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
          n += this.renderer.heading(this.parseInline(i.tokens), i.depth, wo(this.parseInline(i.tokens, this.textRenderer)));
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
          for (let l = 0; l < i.header.length; l++) u += this.renderer.tablecell(this.parseInline(i.header[l].tokens), { header: !0, align: i.align[l] });
          a += this.renderer.tablerow(u);
          let c = "";
          for (let l = 0; l < i.rows.length; l++) {
            const h = i.rows[l];
            u = "";
            for (let d = 0; d < h.length; d++) u += this.renderer.tablecell(this.parseInline(h[d].tokens), { header: !1, align: i.align[d] });
            c += this.renderer.tablerow(u);
          }
          n += this.renderer.table(a, c);
          continue;
        }
        case "blockquote": {
          const i = o, a = this.parse(i.tokens);
          n += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          const i = o, a = i.ordered, u = i.start, c = i.loose;
          let l = "";
          for (let h = 0; h < i.items.length; h++) {
            const d = i.items[h], g = d.checked, p = d.task;
            let f = "";
            if (d.task) {
              const w = this.renderer.checkbox(!!g);
              c ? d.tokens.length > 0 && d.tokens[0].type === "paragraph" ? (d.tokens[0].text = w + " " + d.tokens[0].text, d.tokens[0].tokens && d.tokens[0].tokens.length > 0 && d.tokens[0].tokens[0].type === "text" && (d.tokens[0].tokens[0].text = w + " " + d.tokens[0].tokens[0].text)) : d.tokens.unshift({ type: "text", text: w + " " }) : f += w + " ";
            }
            f += this.parse(d.tokens, c), l += this.renderer.listitem(f, p, !!g);
          }
          n += this.renderer.list(l, a, u);
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
var ht, kr, yn, Uo = Object.defineProperty, is = (r) => {
  throw TypeError(r);
}, Ie = (r, e, t) => ((n, s, o) => s in n ? Uo(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t), Cn = (r, e, t) => (((n, s, o) => {
  s.has(n) || is("Cannot " + o);
})(r, e, "access private method"), t);
ht = /* @__PURE__ */ new WeakSet(), kr = function(r, e) {
  return (t) => {
    if (t.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
      const n = "<p>An error occurred:</p><pre>" + ve(t.message + "", !0) + "</pre>";
      return e ? Promise.resolve(n) : n;
    }
    if (e) return Promise.reject(t);
    throw t;
  };
}, yn = function(r, e) {
  return (t, n) => {
    const s = { ...n }, o = { ...this.defaults, ...s };
    this.defaults.async === !0 && s.async === !1 && (o.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), o.async = !0);
    const i = Cn(this, ht, kr).call(this, !!o.silent, !!o.async);
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
const Fe = new class {
  constructor(...r) {
    var e, t, n;
    e = this, (t = ht).has(e) ? is("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ie(this, "Hooks", dt), Ie(this, "Lexer", Ke), Ie(this, "Parser", Ve), Ie(this, "Renderer", $t), Ie(this, "TextRenderer", qn), Ie(this, "Tokenizer", Ft), Ie(this, "defaults", { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null }), Ie(this, "options", this.setOptions), Ie(this, "parse", Cn(this, ht, yn).call(this, Ke.lex, Ve.parse)), Ie(this, "parseInline", Cn(this, ht, yn).call(this, Ke.lexInline, Ve.parseInline)), this.use(...r);
  }
  lexer(r, e) {
    return Ke.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return Ve.parse(r, e ?? this.defaults);
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
        const s = this.defaults.renderer || new $t(this.defaults);
        for (const o in t.renderer) {
          if (!(o in s)) throw new Error(`renderer '${o}' does not exist`);
          if (o === "options") continue;
          const i = o, a = t.renderer[i], u = s[i];
          s[i] = (...c) => {
            let l = a.apply(s, c);
            return l === !1 && (l = u.apply(s, c)), l || "";
          };
        }
        n.renderer = s;
      }
      if (t.tokenizer) {
        const s = this.defaults.tokenizer || new Ft(this.defaults);
        for (const o in t.tokenizer) {
          if (!(o in s)) throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o)) continue;
          const i = o, a = t.tokenizer[i], u = s[i];
          s[i] = (...c) => {
            let l = a.apply(s, c);
            return l === !1 && (l = u.apply(s, c)), l;
          };
        }
        n.tokenizer = s;
      }
      if (t.hooks) {
        const s = this.defaults.hooks || new dt();
        for (const o in t.hooks) {
          if (!(o in s)) throw new Error(`hook '${o}' does not exist`);
          if (o === "options") continue;
          const i = o, a = t.hooks[i], u = s[i];
          dt.passThroughHooks.has(o) ? s[i] = (c) => {
            if (this.defaults.async) return Promise.resolve(a.call(s, c)).then((h) => u.call(s, h));
            const l = a.call(s, c);
            return u.call(s, l);
          } : s[i] = (...c) => {
            let l = a.apply(s, c);
            return l === !1 && (l = u.apply(s, c)), l;
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
function J(r, e) {
  return Fe.parse(r, e);
}
J.options = J.setOptions = function(r) {
  return Fe.setOptions(r), J.defaults = Fe.defaults, cr(J.defaults), J;
}, J.getDefaults = mo, J.defaults = Qe, J.use = function(...r) {
  return Fe.use(...r), J.defaults = Fe.defaults, cr(J.defaults), J;
}, J.walkTokens = function(r, e) {
  return Fe.walkTokens(r, e);
}, J.parseInline = Fe.parseInline, J.Parser = Ve, J.parser = Ve.parse, J.Renderer = $t, J.TextRenderer = qn, J.Lexer = Ke, J.lexer = Ke.lex, J.Tokenizer = Ft, J.Hooks = dt, J.parse = J;
const as = (r, e) => {
  const { showCodeBlockCopyButton: t, markdownLinkTarget: n, syntaxHighlighter: s, htmlSanitizer: o } = e || {}, i = J(r, { async: !1, breaks: !0 });
  if (typeof i != "string") throw new Error("Markdown parsing failed");
  const a = document.createElement("div");
  return a.innerHTML = o ? o(i) : i, a.querySelectorAll("pre").forEach((u) => {
    const c = document.createElement("div");
    c.className = "code-block";
    const l = u.querySelector("code");
    if (!l) {
      const p = u.innerHTML;
      return c.innerHTML = o ? o(p) : p, void u.replaceWith(c);
    }
    let h;
    for (let p = 0; p < l.classList.length; p++) {
      const f = l.classList[p];
      if (f.startsWith("language-")) {
        h = f.slice(9);
        break;
      }
    }
    const d = document.createElement("pre"), g = "<div>" + l.innerHTML + "</div>";
    if (d.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(g) : g, h && (d.setAttribute("data-language", h), s)) {
      const p = "<div>" + s.createHighlighter()(l.textContent || "", h) + "</div>";
      d.innerHTML = o ? o(p) : p, d.className = "highlighter-dark";
    }
    xt(c), c.appendChild(d), u.replaceWith(c);
  }), t !== !1 && a.querySelectorAll(".code-block").forEach((u) => {
    var d;
    if (!u.querySelector("pre") || (d = u.previousElementSibling) != null && d.classList.contains("nlux-comp-copyButton")) return;
    const c = "Copy code block to clipboard", l = document.createElement("button");
    l.classList.add("nlux-comp-copyButton"), l.setAttribute("aria-label", c), l.setAttribute("title", c);
    const h = document.createElement("span");
    h.classList.add("icon-copy"), l.appendChild(h), u.insertAdjacentElement("beforebegin", l);
  }), n !== "self" && a.querySelectorAll("a").forEach((u) => {
    u.setAttribute("target", "_blank");
  }), a.innerHTML;
}, vr = (r) => {
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
}, ls = (r) => {
  const e = "nlux-comp-copyButton";
  r instanceof HTMLButtonElement && r.classList.contains(e) ? vr(r) : r.querySelectorAll(`.${e}`).forEach(vr);
}, Yo = (r, e) => {
  let t = !1;
  const { onComplete: n } = e || {}, s = [], o = (e != null && e.skipStreamingAnimation ? "timeout" : "animationFrame") == "timeout" ? (h) => setTimeout(h, 0) : (h) => requestAnimationFrame(h), i = document.createElement("div");
  i.classList.add("md-in-progress"), r.append(i);
  const a = () => {
    for (; i.firstChild; ) {
      const h = i.firstChild;
      h instanceof HTMLElement && ls(h), i.before(h);
    }
  }, u = !(e != null && e.skipStreamingAnimation) && (e != null && e.streamingAnimationSpeed) && e.streamingAnimationSpeed >= 0 ? e.streamingAnimationSpeed : e != null && e.skipStreamingAnimation ? 0 : 8, c = { timeSinceLastProcessing: (/* @__PURE__ */ new Date()).getTime(), currentMarkdown: "", previousHtml: void 0 };
  let l = setInterval(() => {
    const h = (/* @__PURE__ */ new Date()).getTime(), d = (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) !== "never";
    if (s.length === 0 && d) {
      const p = typeof (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) == "number" ? e.waitTimeBeforeStreamCompletion : 2e3;
      return void ((t || h - c.timeSinceLastProcessing > p) && (t = !0, l && (clearInterval(l), l = void 0), a(), i.remove(), n == null ? void 0 : n()));
    }
    c.timeSinceLastProcessing = h;
    const g = s.shift();
    g !== void 0 && typeof g == "string" && o(() => {
      const p = c.currentMarkdown + g, f = as(p, e).trim();
      if (typeof f != "string") return c.currentMarkdown = c.currentMarkdown.slice(0, -g.length), void pe("Markdown parsing failed");
      if (c.previousHtml && f.length > c.previousHtml.length && f.startsWith(c.previousHtml)) {
        a();
        const w = f.slice(c.previousHtml.length).trim();
        i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(w) : w, c.currentMarkdown = g, c.previousHtml = void 0;
      } else i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(f) : f, c.currentMarkdown = p, c.previousHtml = f;
    });
  }, u);
  return { next: (h) => {
    if (t) pe("Stream is already complete. No more chunks can be added");
    else for (const d of h) s.push(d);
  }, complete: () => {
    s.push(`
`), t = !0;
  }, error: () => {
    t = !0;
  } };
}, cs = (r, e) => {
  const t = document.createElement("div");
  if (t.classList.add("nlux-comp-avatarContainer"), r) {
    const n = document.createElement("div");
    n.classList.add("nlux-comp-avatarPicture"), n.style.backgroundImage = `url("${encodeURI(r)}")`, t.append(n);
  }
  return t;
}, Fn = "nlux-comp-avatar", $n = (r) => {
  const e = document.createElement("div");
  return e.classList.add(Fn), r.avatar || r.name ? (r.name && (e.title = r.name), r.avatar && r.avatar instanceof HTMLElement ? (e.append(r.avatar.cloneNode(!0)), e) : (e.append(cs(r.avatar)), e)) : e;
}, At = { received: "nlux_msg_received", sent: "nlux_msg_sent" }, us = (r, e) => {
  Object.keys(At).forEach((t) => {
    r.classList.remove(At[t]);
  }), At[e] && r.classList.add(At[e]);
}, ut = { streaming: "nlux_msg_streaming", complete: "nlux_msg_complete" }, ds = (r, e) => {
  Object.keys(ut).forEach((t) => {
    r.classList.remove(ut[t]);
  }), ut[e] && r.classList.add(ut[e]);
}, ps = (r, e = "text", t) => {
  if (e === "markdown") {
    const n = document.createElement("div");
    n.innerHTML = as(r, t), ls(n);
    const s = document.createDocumentFragment();
    for (; n.firstChild; ) s.appendChild(n.firstChild);
    return s;
  }
  return document.createTextNode(r);
}, hs = "nlux-comp-message", Et = { received: "nlux-comp-chatItem--received", sent: "nlux-comp-chatItem--sent" }, ms = (r, e) => {
  Object.keys(Et).forEach((t) => {
    r.classList.remove(Et[t]);
  }), Et[e] && r.classList.add(Et[e]);
}, Pt = { bubbles: "nlux-comp-chatItem--bubblesLayout", list: "nlux-comp-chatItem--listLayout" }, gs = (r, e) => {
  Object.keys(Pt).forEach((t) => {
    r.classList.remove(Pt[t]);
  }), Pt[e] && r.classList.add(Pt[e]);
}, fs = "nlux-comp-chatItem-participantInfo", xs = "nlux-comp-chatItem-participantName", Qo = (r) => {
  const e = document.createElement("div");
  e.classList.add("nlux-comp-chatItem");
  const t = { direction: r.direction, status: r.status, message: r.message };
  let n;
  if (r.avatar !== void 0) {
    const i = { name: r.name, avatar: r.avatar };
    n = $n(i);
  }
  const s = document.createElement("span");
  s.classList.add(xs), s.textContent = r.name;
  {
    const i = document.createElement("div");
    i.classList.add(fs), n !== void 0 && i.append(n), i.append(s), e.append(i);
  }
  ms(e, r.direction), gs(e, r.layout);
  const o = ((i) => {
    const a = document.createElement("div");
    a.classList.add(hs);
    const u = i.status ? i.status : "complete";
    return ds(a, u), us(a, i.direction), a;
  })(t);
  return e.append(o), e;
}, wr = (r, e, t) => {
  if (e.name !== t.name && typeof t.avatar == "string") {
    const n = t.name && t.name.length > 0 ? t.name[0].toUpperCase() : "", s = r.querySelector("* > .nlux-comp-avatarContainer > .avtr_ltr");
    s == null || s.replaceChildren(n);
  }
}, ks = (r, e, t) => {
  e.avatar === t.avatar && e.name === t.name || (e.avatar !== t.avatar && ((n, s, o) => {
    if (s.avatar !== o.avatar) if (typeof o.avatar == "string" && typeof s.avatar == "string") {
      const i = n.querySelector("* > .nlux-comp-avatarContainer > .nlux-comp-avatarPicture");
      i !== null && (i.style.backgroundImage = `url("${encodeURI(o.avatar)}")`);
    } else if (typeof o.avatar == "string") {
      const i = cs(o.avatar);
      n.replaceChildren(i);
    } else o.avatar ? n.replaceChildren(o.avatar.cloneNode(!0)) : xt(n);
  })(r, e, t), t.name ? e.name !== t.name && (r.title = t.name, wr(r, e, t)) : (r.title = "", wr(r, e, t)));
}, Xo = (r, e, t) => {
  if (e.message === t.message && e.status === t.status && e.direction === t.direction || !t || !t.hasOwnProperty("message") && !t.hasOwnProperty("status") && !t.hasOwnProperty("direction")) return;
  e.direction !== t.direction && us(r, t.direction);
  const n = t.status;
  if (e.status !== n) return ds(r, t.status), void ((s, o, i) => {
    const a = i.status;
    if (a !== "streaming" && a === "complete") {
      const u = i.message ? i.message : "", c = document.createTextNode(u);
      s.classList.add(ut[a]), xt(s), s.append(c);
    }
  })(r, 0, t);
  n === "complete" && (e.message === t.message && e.format === t.format || ((s, o, i) => {
    o.message === i.message && o.format === i.format || (xt(s), s.append(ps(i.message ?? "", i.format)));
  })(r, e, t));
}, br = "dom/getElement";
var Zo = Object.defineProperty, Wo = Object.getOwnPropertyDescriptor, yr = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? Wo(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && Zo(e, t, o), o;
};
let Dt = class extends Ce {
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
yr([Ee("markdown-stream-complete")], Dt.prototype, "onMarkdownStreamComplete", 1), Dt = yr([He("chatItem", ({ props: r, appendToRoot: e, compEvent: t }) => {
  const n = Qo({ ...r.domProps, message: void 0 }), s = ((l, h) => {
    const d = l.querySelector(h);
    if (!d) throw new Nt({ source: br, message: `Could not find element with query "${h}". Make sure the query provided matches an element that exists in the root element.` });
    if (!(d instanceof HTMLElement)) throw new Nt({ source: br, message: `Element with query "${h}" is not a valid HTMLElement.` });
    return d;
  })(n, ".nlux-comp-message");
  if (!s) throw new Error("Message container not found");
  const o = document.createElement("div");
  o.classList.add("nlux-markdownStream-root");
  const i = document.createElement("div");
  if (i.classList.add("nlux-markdown-container"), i.setAttribute("nlux-message-id", r.uid), o.append(i), s.append(o), r.domProps.message) {
    const l = ps(r.domProps.message ?? "", "markdown", { markdownLinkTarget: r.markdownLinkTarget, syntaxHighlighter: r.syntaxHighlighter, htmlSanitizer: r.htmlSanitizer });
    i.append(l);
  }
  let a;
  e(n);
  let u = { ...r };
  const c = (l) => ((h, d) => {
    const g = Yo(h, { syntaxHighlighter: d == null ? void 0 : d.syntaxHighlighter, htmlSanitizer: d == null ? void 0 : d.htmlSanitizer, markdownLinkTarget: d == null ? void 0 : d.markdownLinkTarget, showCodeBlockCopyButton: d == null ? void 0 : d.showCodeBlockCopyButton, skipStreamingAnimation: d == null ? void 0 : d.skipStreamingAnimation, streamingAnimationSpeed: d == null ? void 0 : d.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: d == null ? void 0 : d.waitTimeBeforeStreamCompletion, onComplete: d == null ? void 0 : d.onComplete });
    return { next(p) {
      g.next(p);
    }, complete() {
      g.complete();
    } };
  })(i, { syntaxHighlighter: l.syntaxHighlighter, htmlSanitizer: l.htmlSanitizer, markdownLinkTarget: l.markdownLinkTarget, showCodeBlockCopyButton: l.showCodeBlockCopyButton, skipStreamingAnimation: l.skipStreamingAnimation, streamingAnimationSpeed: l.streamingAnimationSpeed, onComplete: () => t("markdown-stream-complete") });
  return { elements: { chatItemContainer: n }, actions: { focus: () => {
    n.focus();
  }, processStreamedChunk: (l) => {
    a || (a = c(u)), a.next(l);
  }, commitStreamedChunks: () => {
    a && a.complete();
  }, updateMarkdownStreamRenderer: (l) => {
    u = { ...u, ...l }, c(u);
  }, updateDomProps: (l, h) => {
    ((d, g, p) => {
      if ((g.direction !== p.direction || g.layout !== p.layout || g.status !== p.status || g.message !== p.message || g.name !== p.name || g.avatar !== p.avatar) && p && (p.hasOwnProperty("direction") || p.hasOwnProperty("layout") || p.hasOwnProperty("status") || p.hasOwnProperty("message") || p.hasOwnProperty("loader") || p.hasOwnProperty("name") || p.hasOwnProperty("avatar"))) {
        if (g.direction !== p.direction && ms(d, p.direction), g.layout !== p.layout && gs(d, p.layout), g.direction !== p.direction || g.status !== p.status || g.message !== p.message) {
          const f = d.querySelector(`.${hs}`);
          f && Xo(f, { direction: g.direction, status: g.status, message: g.message }, { direction: p.direction, status: p.status, message: p.message });
        }
        if (g.name !== p.name || g.avatar !== p.avatar) {
          const f = d.querySelector(`.${Fn}`);
          if (!p.name && !p.avatar) return void (f == null ? void 0 : f.remove());
          if (f) ks(f, { name: g.name, avatar: g.avatar }, { name: p.name, avatar: p.avatar });
          else if (p.name !== void 0 || p.avatar !== void 0) {
            const w = { name: p.name, avatar: p.avatar }, y = $n(w), x = d.querySelector(`.${fs}`);
            x && x.prepend(y);
          }
        }
        if (g.name !== p.name) {
          const f = d.querySelector(`.${xs}`);
          f && (f.textContent = p.name || "");
        }
      }
    })(n, l, h);
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
})], Dt);
const Go = (r, e) => {
  let t, n = e, s = r, o = !0;
  const i = ((f, w) => {
    let y = !1;
    if (typeof f != "function") throw new De({ source: "x/throttle", message: "Callback must be a function" });
    return (...x) => {
      y || (f.apply(void 0, x), y = !0, setTimeout(function() {
        y = !1;
      }, w));
    };
  })(/* @__PURE__ */ ((f) => {
    let w, y;
    return (x) => {
      const k = x.target;
      if (!(k instanceof HTMLElement)) return;
      const { scrollTop: S, clientHeight: A, scrollHeight: E } = k, L = E - 30, R = Math.ceil(S + A) >= L, I = w === void 0 || y === void 0 ? void 0 : S > w && y === E ? "down" : S < w && y === E ? "up" : void 0;
      y = E, w = S, f({ scrolledToBottom: R, scrollDirection: I });
    };
  })(({ scrolledToBottom: f, scrollDirection: w }) => {
    o ? w === "up" && (o = !1) : w === "down" && f && (o = !0);
  }), 50), a = (f) => {
    f.addEventListener("scroll", i);
  }, u = (f) => {
    f == null || f.removeEventListener("scroll", i);
  }, c = (f) => {
    (t == null ? void 0 : t.uid) === f && (l == null || l.disconnect(), h == null || h.disconnect(), t = void 0, l = void 0, h = void 0);
  };
  let l, h;
  const d = () => {
    s == null || s.scrollTo({ top: 5e4, behavior: "instant" });
  }, g = () => {
    s && n && o && d();
  }, p = () => {
    g();
  };
  return a(s), { updateConversationContainer: (f) => {
    u(s), a(f), s = f;
  }, updateProps: ({ autoScroll: f }) => {
    n = f;
  }, handleNewChatSegmentAdded: (f, w) => {
    t && (l == null || l.disconnect(), h == null || h.disconnect()), t = { uid: f, container: w }, l = new ResizeObserver(g), l.observe(w), h = new MutationObserver(p), h.observe(w, { childList: !0, subtree: !0, characterData: !0 }), n && d();
  }, handleChatSegmentRemoved: (f) => c(f), handleChatSegmentComplete: (f) => c(f), destroy: () => {
    t && (c(t.uid), t = void 0), u(s), s = void 0;
  } };
}, _e = (r) => {
  var n;
  const e = typeof r == "function" ? r.__compId : void 0;
  if (!e) throw new Error("Invalid compClass! Component should be registered before using");
  const t = (n = Vr.retrieve(e)) == null ? void 0 : n.model;
  if (!t || typeof t != "function") throw new Error(`Component "${e}" is not registered`);
  return { withContext: (s) => ({ create: () => new t(s, {}), withProps: (o) => ({ create: () => new t(s, o) }) }) };
}, Jo = (r) => {
  const e = ["adapter", "events"], t = Object.keys(r).filter((s) => !e.includes(s)), n = {};
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    n[o] = r[o];
  }
  return n;
}, vs = () => {
  const r = document.createElement("div");
  r.classList.add("nlux-comp-messageLoader");
  const e = document.createElement("span");
  e.classList.add("spinning-loader");
  const t = document.createElement("div");
  return t.classList.add("nlux-comp-loaderContainer"), t.appendChild(e), r.appendChild(t), r;
}, Cr = (r) => {
  const e = "nlux-chatSegment";
  return r === "complete" ? `${e} nlux-chatSegment--complete` : r === "error" ? `${e} nlux-chatSegment--error` : `${e} nlux-chatSegment--active`;
}, It = (r, e) => {
  var t, n;
  return r === "assistant" ? ((t = e == null ? void 0 : e.assistant) == null ? void 0 : t.name) ?? "Assistant" : r === "user" ? ((n = e == null ? void 0 : e.user) == null ? void 0 : n.name) ?? "User" : "";
}, Ko = "bubbles";
var Vo = Object.defineProperty, _o = Object.getOwnPropertyDescriptor, Tt = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? _o(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && Vo(e, t, o), o;
};
let Je = class extends Ce {
  constructor(e, t) {
    super(e, t), this.chatItemCompIdsByIndex = [], this.chatItemComponentsById = /* @__PURE__ */ new Map();
  }
  addChatItem(e) {
    var s, o;
    if (this.throwIfDestroyed(), this.chatItemComponentsById.has(e.uid)) throw new Error(`CompChatSegment: chat item with id "${e.uid}" already exists`);
    const t = ((i, a, u, c) => {
      const l = a ?? Ko;
      if (i.participantRole === "assistant") {
        const d = i.status === "complete" ? "complete" : "streaming";
        return i.dataTransferMode === "stream" ? { status: d, layout: l, direction: "received", name: It("assistant", { assistant: c }), avatar: c == null ? void 0 : c.avatar } : i.status === "complete" ? { status: d, layout: l, direction: "received", name: It("assistant", { assistant: c }), avatar: c == null ? void 0 : c.avatar, message: (h = i.content, typeof h == "string" ? h : typeof h == "object" ? `${h}` : h == null ? "" : typeof h.toString == "function" ? h.toString() : JSON.stringify(h)) } : { status: d, layout: l, direction: "received", name: It("assistant", { assistant: c }), avatar: c == null ? void 0 : c.avatar };
      }
      var h;
      return { status: "complete", layout: l, direction: "sent", message: i.content, name: It("user", { user: u }), avatar: u == null ? void 0 : u.avatar };
    })(e, this.getProp("conversationLayout"), this.getProp("userPersona"), this.getProp("assistantPersona"));
    if (!t) throw new Error(`CompChatSegment: chat item with id "${e.uid}" has invalid props`);
    const n = _e(Dt).withContext(this.context).withProps({ uid: e.uid, domProps: t, markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed") }).create();
    this.chatItemComponentsById.set(e.uid, n), this.chatItemCompIdsByIndex.push(e.uid), this.rendered && ((o = (s = this.renderedDom) == null ? void 0 : s.elements) != null && o.chatSegmentContainer ? n.render(this.renderedDom.elements.chatSegmentContainer, this.renderedDom.elements.loaderContainer) : kn("CompChatSegment: chatSegmentContainer is not available"));
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
    Re(() => {
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
Tt([Ee("loader-shown")], Je.prototype, "onLoaderShown", 1), Tt([Ee("chat-segment-ready")], Je.prototype, "onChatSegmentReady", 1), Tt([Ee("loader-hidden")], Je.prototype, "onLoaderHidden", 1), Je = Tt([He("chatSegment", ({ props: r, compEvent: e, appendToRoot: t }) => {
  let n;
  const s = document.createElement("div");
  s.className = Cr(r.status);
  const o = () => {
    if (!n) {
      n = document.createElement("div"), n.className = "nlux-chatSegment-loader-container";
      const i = vs();
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
    i.className = Cr(a), a === "active" ? (s = t.actions) == null || s.showLoader() : (o = t.actions) == null || o.hideLoader();
  }
})], Je);
let Sn = class extends Ce {
  constructor(e, t) {
    super(e, t), this.chatSegmentCompIdsByIndex = [], this.chatSegmentComponentsById = /* @__PURE__ */ new Map(), t.messages && t.messages.length > 0 && this.addChatSegment("complete", t.messages);
  }
  addChatItem(e, t) {
    const n = this.chatSegmentComponentsById.get(e);
    if (!n) throw new Error(`CompConversation: chat segment with id "${e}" not found`);
    n.destroyed ? kn(`CompConversation: chat segment with id "${e}" is destroyed and cannot be used`) : n.addChatItem(t);
  }
  addChatSegment(e = "active", t) {
    this.throwIfDestroyed();
    const n = Ae(), s = _e(Je).withContext(this.context).withProps({ uid: n, status: e, conversationLayout: this.getProp("conversationLayout"), userPersona: this.getProp("userPersona"), assistantPersona: this.getProp("assistantPersona"), markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed") }).create();
    if (t) for (const i of t) i.role === "assistant" ? s.addChatItem({ uid: Ae(), participantRole: "assistant", time: /* @__PURE__ */ new Date(), dataTransferMode: "batch", status: "complete", content: i.message, serverResponse: i.serverResponse }) : i.role === "user" && s.addChatItem({ uid: Ae(), participantRole: "user", time: /* @__PURE__ */ new Date(), status: "complete", content: i.message });
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
    if (typeof e == "number" && e < 0) return void kn(`Invalid value provided for 'historyPayloadSize' : "${e}"! Value must be a positive integer or 'max'.`);
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
Sn = ((r, e, t, n) => {
  for (var s, o = e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = s(o) || o);
  return o;
})([He("conversation", ({ appendToRoot: r }) => {
  const e = document.createElement("div");
  return e.classList.add("nlux-chatSegments-container"), r(e), { elements: { segmentsContainer: e }, actions: {} };
}, () => {
})], Sn);
const un = { typing: "nlux-composer--typing", "submitting-prompt": "nlux-composer--submitting", "submitting-conversation-starter": "nlux-composer--submitting", waiting: "nlux-composer--waiting" }, ws = (r, e) => {
  Object.keys(un).forEach((t) => {
    r.classList.remove(un[t]);
  }), r.classList.add(un[e]);
}, ei = (r) => {
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
  })()), n.append(vs()), e.append(t), e.append(n), ws(e, r.status), r.status !== "submitting-conversation-starter" && r.status !== "submitting-prompt" || (t.disabled = !0, n.disabled = !0), r.status === "waiting" && (n.disabled = !0), r.status === "typing" && (n.disabled = r.disableSubmitButton ?? t.value === ""), e;
}, Ut = (r, e) => {
  let t = !1;
  const n = e ? r.querySelector(e) : r, s = n instanceof HTMLElement ? n : void 0;
  if (!s) throw new Nt({ source: "dom/listenTo", message: `Could not find element with query "${e}". Make sure the query provided matches an element that exists in the root element.` });
  const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = () => {
    s && (o.forEach((c, l) => {
      s.removeEventListener(l, c);
    }), o.clear(), i.clear());
  }, u = { on: (c, l) => {
    if (!l || !s) return u;
    if (!o.has(c)) {
      const h = (d) => {
        var g;
        (g = i.get(c)) == null || g.forEach((p) => p(d));
      };
      o.set(c, h), s.addEventListener(c, h);
    }
    return i.has(c) || i.set(c, /* @__PURE__ */ new Set()), i.get(c).add(l), u;
  }, get: () => {
    if (t) throw new Error("listenTo().get() can only be used once!");
    return t = !0, [s, a];
  } };
  return u;
};
var ti = Object.defineProperty, ni = Object.getOwnPropertyDescriptor, at = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? ni(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && ti(e, t, o), o;
};
let $e = class extends Ce {
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
at([Ee("command-enter-key-pressed")], $e.prototype, "handleCommandEnterKeyPressed", 1), at([Ee("enter-key-pressed")], $e.prototype, "handleEnterKeyPressed", 1), at([Ee("send-message-clicked")], $e.prototype, "handleSendButtonClick", 1), at([Ee("text-updated")], $e.prototype, "handleTextInputUpdated", 1), $e = at([He("composer", ({ appendToRoot: r, props: e, compEvent: t }) => {
  const n = ei(e.domCompProps);
  r(n);
  const [s, o] = Ut(n, ":scope > textarea").on("input", t("text-updated")).on("keydown", (l) => {
    const h = l.key === "Enter", d = l.altKey || l.ctrlKey || l.metaKey || l.shiftKey;
    if (h && !d) return void t("enter-key-pressed")(l);
    const g = l.getModifierState("Meta") && l.key === "Enter", p = l.getModifierState("Control") && l.key === "Enter";
    (g || p) && t("command-enter-key-pressed")(l);
  }).get(), [i, a] = Ut(n, ":scope > button").on("click", t("send-message-clicked")).get();
  if (!(i instanceof HTMLButtonElement)) throw new Error("Expected a button element");
  if (!(s instanceof HTMLTextAreaElement)) throw new Nt({ source: (u = "composer", c = "render", `#${u}/${c}`), message: "Expected a textarea element" });
  var u, c;
  return { elements: { root: n, textInput: s, sendButton: i }, actions: { focusTextInput: () => Re(() => {
    s.focus(), s.setSelectionRange(s.value.length, s.value.length);
  }) }, onDestroy: () => {
    o(), a();
  } };
}, ({ propName: r, currentValue: e, newValue: t, dom: n }) => {
  var s;
  r === "domCompProps" && ((s = n.elements) != null && s.root) && ((o, i, a) => {
    if (i.status === a.status && i.message === a.message && i.placeholder === a.placeholder && i.autoFocus === a.autoFocus && i.disableSubmitButton === a.disableSubmitButton) return;
    if (i.status !== a.status) return ws(o, a.status), void ((c, l, h) => {
      if (l.status === h.status) return;
      const d = c.querySelector("* > textarea");
      h.status !== "typing" && h.status !== "waiting" || !d.disabled ? h.status !== "submitting-prompt" && h.status !== "submitting-conversation-starter" || d.disabled || (d.disabled = !0) : d.disabled = !1;
      const g = c.querySelector("* > button");
      if (h.status === "typing") {
        const p = (l.disableSubmitButton !== h.disableSubmitButton ? h.disableSubmitButton : l.disableSubmitButton) ?? d.value === "";
        g.disabled !== p && (g.disabled = p);
      } else h.status !== "waiting" && h.status !== "submitting-prompt" && h.status !== "submitting-conversation-starter" || g.disabled || (g.disabled = !0);
      l.placeholder !== h.placeholder && (d.placeholder = h.placeholder ?? ""), l.message !== h.message && (d.value = h.message ?? ""), l.autoFocus !== h.autoFocus && (d.autofocus = h.autoFocus ?? !1);
    })(o, i, a);
    const u = o.querySelector("* > textarea");
    if (i.placeholder !== a.placeholder && (u.placeholder = a.placeholder ?? ""), i.autoFocus !== a.autoFocus && (u.autofocus = a.autoFocus ?? !1), i.message !== a.message && (u.value = a.message ?? ""), i.status === "typing") {
      const c = o.querySelector("* > button"), l = (i.disableSubmitButton !== a.disableSubmitButton ? a.disableSubmitButton : i.disableSubmitButton) ?? u.value === "";
      c.disabled !== l && (c.disabled = l);
    }
  })(n.elements.root, e, t);
})], $e);
const An = (r) => {
  if (typeof r != "object" || r === null) return !1;
  const e = r;
  return (typeof e.streamText == "function" || typeof e.batchText == "function") && ["stream", "batch"].includes(e.dataTransferMode) && typeof e.id == "string" && typeof e.info == "object" && e.info !== null && typeof e.preProcessAiBatchedMessage == "function" && typeof e.preProcessAiStreamedChunk == "function";
}, le = (r, e = 1) => {
  setTimeout(() => {
    r();
  }, e);
}, ri = (r, e, t, n, s, o, i, a, u) => new Promise((c) => {
  const l = Ae(), h = [], d = [];
  let g = !1, p = !1, f = !1;
  const w = An(t), y = { next: (x) => {
    if (p || f) return;
    let k, S;
    if (w) {
      const A = x, E = t.preProcessAiStreamedChunk(A, n);
      E != null && (k = E, S = A, h.push(k), d.push(S));
    } else k = x, h.push(k);
    k != null ? (g || g || (g = !0, le(() => {
      s.forEach((A) => {
        A({ uid: l, status: "streaming", time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" });
      });
    })), le(() => {
      i.forEach((A) => {
        A({ chunk: k, messageId: l, serverResponse: S });
      });
    })) : pe("Adapter returned an undefined or null value from streamText. This chunk will be ignored.");
  }, complete: () => {
    p || f || (f = !0, le(() => {
      const x = { uid: l, status: "complete", content: h, contentType: "text", serverResponse: void 0, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" };
      o.forEach((k) => {
        k(x);
      }), c();
    }), le(() => {
      const x = { uid: r, status: "complete", items: [e, { uid: l, status: "complete", contentType: "text", content: h, serverResponse: d, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" }] };
      a.forEach((k) => {
        k(x);
      });
    }));
  }, error: (x) => {
    p || f || (p = !0, le(() => {
      u.forEach((k) => {
        k("failed-to-stream-content", x);
      }), c();
    }));
  } };
  t.streamText(e.content, y, n);
}), si = (r, e, t) => {
  if (!r) return (() => {
    const x = /* @__PURE__ */ new Set(), k = Ae(), S = { uid: k, status: "complete", items: [] };
    return le(() => {
      x.forEach((A) => {
        A(S);
      }), x.clear();
    }), { segment: S, observable: { on: (A, E) => {
      A === "complete" && x.add(E);
    }, removeListener: (A, E) => {
      x.delete(E);
    }, destroy: () => {
      x.clear();
    }, get segmentId() {
      return k;
    } }, dataTransferMode: "batch" };
  })();
  const n = e;
  if (n.streamText === void 0 && n.batchText === void 0 && n.streamServerComponent === void 0) return ((x) => {
    const k = /* @__PURE__ */ new Set(), S = Ae(), A = { uid: S, status: "error", items: [] };
    return le(() => {
      k.forEach((E) => E(x)), k.clear();
    }), { segment: A, dataTransferMode: "stream", observable: { on: (E, L) => {
      E === "error" && k.add(L);
    }, removeListener: (E, L) => {
      k.delete(L);
    }, destroy: () => {
      k.clear();
    }, get segmentId() {
      return S;
    } } };
  })("no-data-transfer-mode-supported");
  const s = Ae(), o = ((x) => ({ uid: Ae(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: x, contentType: "text" }))(r);
  let i, a, u, c, l, h, d = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set();
  le(() => {
    d != null && d.size && (d.forEach((x) => {
      x(o);
    }), d.clear(), d = void 0);
  });
  const f = ((x) => {
    const k = [], S = x, A = x;
    (S == null ? void 0 : S.streamText) === void 0 && (A == null ? void 0 : A.streamServerComponent) === void 0 || k.push("stream"), (S == null ? void 0 : S.batchText) !== void 0 && k.push("batch");
    const E = An(x) ? x : void 0, L = (E == null ? void 0 : E.dataTransferMode) ?? void 0, R = k.length === 1 ? k[0] : "stream";
    return L ?? R;
  })(e);
  ((x) => "streamServerComponent" in x ? "server-component" : "text")(e) === "server-component" ? (u = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), ((x, k, S, A, E, L, R, I) => new Promise((B, D) => {
    try {
      const H = k.content, q = Ae(), W = "assistant", te = "streaming", oe = /* @__PURE__ */ new Date(), $ = "stream";
      let _, V;
      const G = () => {
        le(() => {
          L.forEach((he) => {
            _ && V && he({ ..._, content: V, status: "complete" });
          });
        }, 20);
        const M = { uid: x, status: "complete", items: [k, _] };
        le(() => {
          R.forEach((he) => {
            he(M);
          }), B();
        }, 20);
      }, ae = () => {
        I.forEach((M) => {
          M("failed-to-stream-server-component", new Error("Failed to load content"));
        });
      };
      V = S.streamServerComponent(H, A, { onServerComponentReceived: G, onError: ae }), _ = { uid: q, content: V, contentType: "server-component", participantRole: W, status: te, time: oe, dataTransferMode: $ }, le(() => {
        E.forEach((M) => {
          M(_);
        });
      }, 10);
    } catch (H) {
      pe(H);
      const q = H instanceof Error ? H : typeof H == "string" ? new Error(H) : new Error("Unknown error");
      le(() => {
        I.forEach((W) => W("failed-to-load-content", q));
      });
    }
  }))(s, o, e, t, a, u, g, p).finally(() => {
    le(() => y());
  })) : f === "batch" ? (i = /* @__PURE__ */ new Set(), (async (x, k, S, A, E, L, R) => {
    try {
      const I = k.content, B = An(S) ? S : void 0, D = B !== void 0, H = Ae(), q = "assistant", W = "complete", te = /* @__PURE__ */ new Date(), oe = "batch";
      let $;
      if (D) {
        const G = await B.batchText(I, A), ae = B.preProcessAiBatchedMessage(G, A);
        ae != null && ($ = { uid: H, content: ae, contentType: "text", serverResponse: G, participantRole: q, status: W, time: te, dataTransferMode: oe });
      } else $ = { uid: H, content: await S.batchText(I, A), contentType: "text", serverResponse: void 0, participantRole: q, status: W, time: te, dataTransferMode: oe };
      if (!$) throw new Error("Response from adapter was undefined or cannot be processed");
      const _ = $;
      le(() => {
        E.forEach((G) => {
          G(_);
        });
      });
      const V = { uid: x, status: "complete", items: [k, $] };
      le(() => {
        L.forEach((G) => {
          G(V);
        });
      });
    } catch (I) {
      pe(I);
      const B = I instanceof Error ? I : typeof I == "string" ? new Error(I) : new Error("Unknown error");
      le(() => {
        R.forEach((D) => D("failed-to-load-content", B));
      });
    }
  })(s, o, e, t, i, g, p).finally(() => {
    le(() => y());
  })) : (c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), ri(s, o, e, t, c, l, h, g, p).finally(() => {
    le(() => y());
  }));
  const y = () => {
    d == null || d.clear(), d = void 0, i == null || i.clear(), i = void 0, a == null || a.clear(), a = void 0, u == null || u.clear(), u = void 0, c == null || c.clear(), c = void 0, l == null || l.clear(), l = void 0, h == null || h.clear(), h = void 0, g == null || g.clear(), g = void 0, p == null || p.clear(), p = void 0;
  };
  return { segment: { status: "active", uid: s, items: [] }, dataTransferMode: f, observable: { get segmentId() {
    return s;
  }, on: (x, k) => {
    x === "userMessageReceived" && d ? d.add(k) : x === "aiMessageReceived" && i ? i.add(k) : x === "aiServerComponentStreamStarted" && a ? a.add(k) : x === "aiServerComponentStreamed" && u ? u.add(k) : x === "aiMessageStreamStarted" && c ? c.add(k) : x === "aiMessageStreamed" && l ? l.add(k) : x === "aiChunkReceived" && h ? h.add(k) : x === "complete" && g ? g.add(k) : x === "error" && p && p.add(k);
  }, removeListener: (x, k) => {
    x !== "userMessageReceived" ? x !== "aiMessageReceived" ? x !== "aiMessageStreamStarted" ? x !== "aiMessageStreamed" ? x !== "aiChunkReceived" ? x !== "complete" ? x !== "error" || (p == null || p.delete(k)) : g == null || g.delete(k) : h == null || h.delete(k) : l == null || l.delete(k) : c == null || c.delete(k) : i == null || i.delete(k) : d == null || d.delete(k);
  }, destroy: () => y() } };
}, oi = { "data-transfer-mode-not-supported": "Requested data transfer mode is not supported", "no-data-transfer-mode-supported": "Adapter does not support any valid data transfer modes", "connection-error": "Connection error", "invalid-credentials": "Invalid credentials", "invalid-api-key": "Invalid API key", "http-server-side-error": "HTTP server side error", "http-client-side-error": "HTTP client side error", "failed-to-load-content": "Failed to load content", "failed-to-stream-content": "Failed to stream content", "failed-to-stream-server-component": "Failed to stream server component", "failed-to-render-content": "Failed to display content" }, En = (r, e) => r !== void 0 && r.length > 0 || e !== void 0 && e > 0 ? "active" : "starting", Sr = "nlux-comp-welcomeMessage-text", bs = (r, e) => {
  const t = r.querySelector(`.${Sr}`);
  if (e !== "" && e !== void 0) if (t) t.textContent = e;
  else {
    const n = document.createElement("div");
    n.classList.add(Sr), n.textContent = e, r.appendChild(n);
  }
  else t == null || t.remove();
}, ys = "nlux-comp-welcomeMessage-personaName", Pn = (r) => {
  const e = document.createElement("div");
  e.classList.add("nlux-comp-welcomeMessage");
  const t = $n({ name: r.name, avatar: r.avatar });
  e.append(t);
  const n = document.createElement("div"), s = document.createTextNode(r.name);
  return n.append(s), n.classList.add(ys), e.append(n), bs(e, r.message), e;
}, Ar = () => Pn({ name: "", avatar: "data:image/png;base64,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" });
var ii = Object.defineProperty, ai = Object.getOwnPropertyDescriptor, Er = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? ai(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && ii(e, t, o), o;
};
let Ht = class extends Ce {
  constructor(r, e) {
    super(r, e), this.updateConversationStarters = (t) => {
    };
  }
  conversationStarterClicked(r) {
    this.getProp("onConversationStarterSelected")(r);
  }
};
Er([Ee("conversation-starter-selected")], Ht.prototype, "conversationStarterClicked", 1), Ht = Er([He("conversationStarters", ({ appendToRoot: r, props: e, compEvent: t }) => {
  const n = ((o) => {
    const i = document.createElement("div");
    return i.classList.add("nlux-comp-conversationStarters"), o.forEach((a, u) => {
      const c = document.createElement("button");
      c.classList.add("nlux-comp-conversationStarter");
      let l = document.createElement("div");
      a.icon && (typeof a.icon == "string" ? (l = document.createElement("img"), l.setAttribute("src", a.icon), l.setAttribute("width", "16px")) : (l.className = "nlux-comp-conversationStarter-icon-container", l.appendChild(a.icon)));
      const h = document.createElement("span");
      h.classList.add("nlux-comp-conversationStarter-prompt"), h.textContent = a.label ?? a.prompt, c.appendChild(l), c.appendChild(h), i.appendChild(c);
    }), i;
  })(e.conversationStarters);
  r(n);
  let s = [];
  return e.conversationStarters.forEach((o, i) => {
    const [a, u] = Ut(n, `:scope > :nth-child(${i + 1})`).on("click", () => {
      t("conversation-starter-selected")(o);
    }).get();
    s.push(u);
  }), { elements: {}, actions: {}, onDestroy: () => {
    s.forEach((o) => o()), s = [], n.remove();
  } };
}, ({}) => {
})], Ht);
let In = class extends Ce {
  constructor(r, e) {
    super(r, e), this.setConversationStarters(e.conversationStarters);
  }
  setConversationStarters(r) {
    var e;
    if (r || this.conversationStartersComp) {
      if (r && !this.conversationStartersComp) {
        const t = this.getProp("onConversationStarterSelected");
        return this.conversationStartersComp = _e(Ht).withContext(this.context).withProps({ conversationStarters: r, onConversationStarterSelected: t }).create(), void this.addSubComponent(this.conversationStartersComp.id, this.conversationStartersComp, "conversationStartersContainer");
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
In = ((r, e, t, n) => {
  for (var s, o = e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = s(o) || o);
  return o;
})([He("launchPad", ({ appendToRoot: r, props: e }) => {
  const t = { assistantPersona: e.assistantPersona, conversationStarters: e.conversationStarters, showGreeting: e.showGreeting !== !1 };
  let n;
  if (t.showGreeting) if (e.assistantPersona) {
    const i = e.assistantPersona;
    n = Pn({ name: i.name, avatar: i.avatar, message: i.tagline });
  } else n = Ar();
  n && (r(n), t.greetingElement = n);
  const s = document.createElement("div");
  s.classList.add("nlux-conversationStarters-container"), r(s);
  const o = (i = !0) => {
    t.showGreeting = i, t.greetingElement && (t.greetingElement.remove(), t.greetingElement = void 0), i && (t.greetingElement = t.assistantPersona ? Pn({ name: t.assistantPersona.name, avatar: t.assistantPersona.avatar, message: t.assistantPersona.tagline }) : Ar(), t.greetingElement && s.insertAdjacentElement("beforebegin", t.greetingElement));
  };
  return { elements: { conversationStartersContainer: s }, actions: { resetGreeting: (i = !0) => {
    o(i);
  }, updateAssistantPersona: (i) => {
    const a = t.assistantPersona;
    t.assistantPersona = i, (a || i) && t.showGreeting && (i && a ? ((u, c, l) => {
      if (c.message !== l.message || c.name !== l.name || c.avatar !== l.avatar) {
        if (c.message !== l.message && bs(u, l.message), c.name !== l.name) {
          const h = u.querySelector(`.${ys}`);
          if (h) {
            const d = document.createTextNode(l.name);
            h.replaceChildren(d);
          }
        }
        if (c.avatar !== l.avatar || c.name !== l.name) {
          const h = u.querySelector(`.${Fn}`);
          h && ks(h, { name: c.name, avatar: c.avatar }, { name: l.name, avatar: l.avatar });
        }
      }
    })(t.greetingElement, { name: a == null ? void 0 : a.name, avatar: a == null ? void 0 : a.avatar, message: a == null ? void 0 : a.tagline }, { name: i.name, avatar: i.avatar, message: i.tagline }) : o());
  } }, onDestroy: () => {
    var i;
    (i = t.greetingElement) == null || i.remove(), s.remove();
  } };
}, ({}) => {
})], In);
var li = Object.defineProperty, ci = Object.getOwnPropertyDescriptor, dn = (r, e, t, n) => {
  for (var s, o = n > 1 ? void 0 : n ? ci(e, t) : e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = (n ? s(e, t, o) : s(o)) || o);
  return n && o && li(e, t, o), o;
};
let Rt = class extends Ce {
  constructor(r, { conversationLayout: e, autoScroll: t, streamingAnimationSpeed: n, visible: s = !0, composer: o, assistantPersona: i, userPersona: a, showGreeting: u, conversationStarters: c, initialConversationContent: l, syntaxHighlighter: h, htmlSanitizer: d, markdownLinkTarget: g, showCodeBlockCopyButton: p, skipStreamingAnimation: f }) {
    if (super(r, { conversationLayout: e, visible: s, autoScroll: t, streamingAnimationSpeed: n, assistantPersona: i, userPersona: a, conversationStarters: c, showGreeting: u, initialConversationContent: l, composer: o, syntaxHighlighter: h, htmlSanitizer: d, markdownLinkTarget: g, showCodeBlockCopyButton: p, skipStreamingAnimation: f }), this.prompt = "", this.handleConversationStarterClick = (w) => {
      this.composer.setDomProps({ status: "submitting-conversation-starter" }), this.composer.handleTextChange(w.prompt), this.composer.handleSendButtonClick();
    }, this.handleSegmentCountChange = (w) => {
      var x, k;
      if (this.segmentCount === w) return;
      this.segmentCount = w;
      const y = En(this.getProp("initialConversationContent") || void 0, this.segmentCount);
      this.chatRoomStatus !== y && (this.chatRoomStatus = y, this.executeDomAction("updateChatRoomStatus", this.chatRoomStatus), this.chatRoomStatus === "active" ? (x = this.launchPad) != null && x.id && (this.removeSubComponent((k = this.launchPad) == null ? void 0 : k.id), this.launchPad = void 0) : this.addLaunchPad(this.getProp("showGreeting") ?? !0, this.getProp("assistantPersona"), this.getProp("conversationStarters"), this.handleConversationStarterClick));
    }, this.segmentCount = l && l.length > 0 ? 1 : 0, this.chatRoomStatus = En(l, this.segmentCount), this.chatRoomStatus === "starting" && this.addLaunchPad(u, i, c, this.handleConversationStarterClick), this.addConversation(i, a, l), this.addComposer(o == null ? void 0 : o.placeholder, o == null ? void 0 : o.autoFocus, o == null ? void 0 : o.disableSubmitButton, o == null ? void 0 : o.submitShortcut), !this.conversation || !this.composer) throw new Error("Chat room not initialized — An error occurred while initializing key components.");
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
    Re(() => {
      var e, t;
      const r = (t = (e = this.renderedDom) == null ? void 0 : e.elements) == null ? void 0 : t.conversationContainer;
      if (r instanceof HTMLElement) {
        this.autoScrollController = Go(r, this.getProp("autoScroll") ?? !0);
        let n = 0;
        const s = 20, o = () => {
          r.scrollHeight > r.clientHeight && (r.scrollTo({ behavior: "smooth", top: 5e4 }), clearInterval(i));
        }, i = setInterval(() => {
          n >= s ? clearInterval(i) : (o(), n++);
        }, 10);
      }
      this.context.emit("ready", { aiChatProps: Jo(this.context.aiChatProps) });
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
    this.launchPad = _e(In).withContext(this.context).withProps({ showGreeting: r, assistantPersona: e, conversationStarters: t, onConversationStarterSelected: n }).create(), this.addSubComponent(this.launchPad.id, this.launchPad, "launchPadContainer");
  }
  addConversation(r, e, t) {
    this.conversation = _e(Sn).withContext(this.context).withProps({ assistantPersona: r, userPersona: e, messages: t, conversationLayout: this.getProp("conversationLayout"), markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), onSegmentCountChange: this.handleSegmentCountChange }).create(), this.addSubComponent(this.conversation.id, this.conversation, "conversationContainer");
  }
  addComposer(r, e, t, n) {
    this.composer = _e($e).withContext(this.context).withProps({ props: { domCompProps: { status: "typing", placeholder: r, autoFocus: e, disableSubmitButton: t, submitShortcut: n } }, eventListeners: { onTextUpdated: (s) => this.handleComposerTextChange(s), onSubmit: () => this.handleComposerSubmit() } }).create(), this.addSubComponent(this.composer.id, this.composer, "composerContainer");
  }
  handleComposerSubmit() {
    const r = this.props.composer;
    (({ context: e, composerInstance: t, conversation: n, autoScrollController: s, messageToSend: o, resetComposer: i, setComposerAsWaiting: a }) => () => {
      var c, l;
      const u = n.addChatSegment();
      try {
        const h = t.getProp("domCompProps");
        t.setDomProps({ ...h, status: "submitting-prompt" });
        const d = { aiChatProps: e.aiChatProps, conversationHistory: n.getConversationContentForAdapter((l = (c = e.aiChatProps) == null ? void 0 : c.conversationOptions) == null ? void 0 : l.historyPayloadSize) }, g = si(o, e.adapter, d);
        g.observable.on("error", (p, f) => {
          n.removeChatSegment(u), s == null || s.handleChatSegmentRemoved(u), i(!1), e.exception(p), e.emit("error", { errorId: p, message: oi[p], errorObject: f });
        }), g.observable.on("userMessageReceived", (p) => {
          n.addChatItem(u, p), e.emit("messageSent", { uid: p.uid, message: p.content }), Re(() => {
            if (s) {
              const f = n.getChatSegmentContainer(u);
              f && s.handleNewChatSegmentAdded(u, f);
            }
          });
        }), g.dataTransferMode === "batch" ? g.observable.on("aiMessageReceived", (p) => {
          const f = typeof p.content == "string", w = { ...p, content: f ? "" : p.content };
          n.addChatItem(u, w), f && n.addChunk(u, w.uid, p.content, p.serverResponse), n.completeChatSegment(u), e.emit("messageReceived", { uid: p.uid, message: p.content }), i(!0);
        }) : (g.observable.on("aiMessageStreamStarted", (p) => {
          n.addChatItem(u, p), a(), e.emit("messageStreamStarted", { uid: p.uid });
        }), g.observable.on("aiChunkReceived", (p) => {
          const { messageId: f, chunk: w, serverResponse: y } = p;
          n.addChunk(u, f, w, y);
        }), g.observable.on("aiMessageStreamed", (p) => {
          p.status === "complete" && e.emit("messageReceived", { uid: p.uid, message: p.content });
        }), g.observable.on("aiServerComponentStreamStarted", (p) => {
          n.addChatItem(u, p), a(), e.emit("messageStreamStarted", { uid: p.uid });
        }), g.observable.on("aiServerComponentStreamed", (p) => {
          p.status === "complete" && e.emit("messageReceived", { uid: p.uid, message: p.content });
        }), g.observable.on("complete", () => {
          n.completeChatSegment(u), i(!1);
        }));
      } catch (h) {
        pe(h), i(!1);
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
dn([Ee("conversation-container-clicked")], Rt.prototype, "messagesContainerClicked", 1), dn([Ee("chat-room-ready")], Rt.prototype, "onChatRoomReady", 1), Rt = dn([He("chatRoom", ({ appendToRoot: r, compEvent: e, props: t }) => {
  const n = document.createElement("div");
  n.classList.add("nlux-conversation-container");
  const s = document.createElement("div");
  s.classList.add("nlux-composer-container");
  const o = document.createElement("div");
  o.classList.add("nlux-launchPad-container");
  const i = document.createDocumentFragment();
  i.appendChild(o), i.appendChild(n), i.appendChild(s);
  const a = t.visible ?? !0, u = document.createElement("div"), c = (d) => {
    u.classList.remove("nlux-chatRoom-starting"), u.classList.remove("nlux-chatRoom-active"), u.classList.add(`nlux-chatRoom-${d}`);
  };
  u.classList.add("nlux-chatRoom-container"), c(En(t.initialConversationContent)), u.append(i), u.style.display = a ? "" : "none";
  const [l, h] = Ut(u, ":scope > .nlux-conversation-container").on("click", e("conversation-container-clicked")).get();
  return r(u), e("chat-room-ready")(), { elements: { composerContainer: s, conversationContainer: n, launchPadContainer: o }, actions: { updateChatRoomStatus: (d) => {
    c(d);
  } }, onDestroy: () => {
    h();
  } };
}, ({ propName: r, newValue: e, dom: { elements: t } }) => {
})], Rt);
const ui = (r) => {
  const e = /* @__PURE__ */ new Set();
  let t = !1, n = null, s = null;
  const o = () => {
    if (t || e.size === 0) return;
    t = !0;
    const a = e.values().next().value;
    e.delete(a), n = (({ message: u }) => {
      const c = document.createElement("div");
      c.classList.add("nlux-comp-exceptionItem");
      const l = document.createElement("span");
      return l.classList.add("nlux-comp-exp_itm_msg"), l.append(document.createTextNode(u)), c.append(l), c;
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
let Pr = class extends Ce {
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
Pr = ((r, e, t, n) => {
  for (var s, o = e, i = r.length - 1; i >= 0; i--) (s = r[i]) && (o = s(o) || o);
  return o;
})([He("exceptionsBox", ({ props: r, appendToRoot: e }) => {
  const t = (() => {
    const s = document.createElement("div");
    return s.classList.add("nlux-comp-exceptionBox"), s;
  })();
  e(t);
  let n = ui(t);
  return { elements: { root: t }, actions: { displayException: (s) => {
    n == null || n.displayException(s);
  } }, onDestroy: () => {
    n == null || n.destroy(), t.remove(), n = void 0;
  } };
}, () => {
})], Pr);
const di = (r) => {
  const e = /* @__PURE__ */ new Set();
  let t = !1, n = null, s = null;
  const o = () => {
    if (t || e.size === 0) return;
    t = !0;
    const a = e.values().next().value;
    e.delete(a), n = (({ message: u }) => {
      const c = document.createElement("div");
      c.classList.add("nlux-comp-exceptionItem");
      const l = document.createElement("span");
      return l.classList.add("nlux-comp-exp_itm_msg"), l.append(document.createTextNode(u)), c.append(l), c;
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
}, Be = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (r) => {
  const e = 16 * Math.random() | 0;
  return (r == "x" ? e : 3 & e | 8).toString(16);
}), ge = (r) => {
  typeof r != "string" ? r && typeof r.toString == "function" ? console.warn(`[nlux] ${r.toString()}`) : console.warn("[nlux]") : console.warn(`[nlux] ${r}`);
}, Ir = [], Yt = (r) => {
  Ir.includes(r) || (Ir.push(r), ge(r));
}, Tn = { received: "nlux_msg_received", sent: "nlux_msg_sent" }, Rn = { streaming: "nlux_msg_streaming", complete: "nlux_msg_complete" }, Tr = (r) => {
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
}, Cs = (r) => {
  const e = "nlux-comp-copyButton";
  r instanceof HTMLButtonElement && r.classList.contains(e) ? Tr(r) : r.querySelectorAll(`.${e}`).forEach(Tr);
};
function pi() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
let Xe = { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
function Rr(r) {
  Xe = r;
}
var hi = Object.defineProperty, Ss = (r, e, t) => ((n, s, o) => s in n ? hi(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class mt {
  constructor(e) {
    Ss(this, "options"), this.options = e || Xe;
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
Ss(mt, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]));
const As = /[&<>"']/, mi = new RegExp(As.source, "g"), Es = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, gi = new RegExp(Es.source, "g"), fi = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Br = (r) => fi[r];
function we(r, e) {
  if (e) {
    if (As.test(r)) return r.replace(mi, Br);
  } else if (Es.test(r)) return r.replace(gi, Br);
  return r;
}
const xi = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function ki(r) {
  return r.replace(xi, (e, t) => (t = t.toLowerCase()) === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "");
}
const vi = /(^|[^\[])\^/g;
function Q(r, e) {
  let t = typeof r == "string" ? r : r.source;
  e = e || "";
  const n = { replace: (s, o) => {
    let i = typeof o == "string" ? o : o.source;
    return i = i.replace(vi, "$1"), t = t.replace(s, i), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
function Lr(r) {
  try {
    r = encodeURI(r).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return r;
}
const gt = { exec: () => null };
function Or(r, e) {
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
function Bt(r, e, t) {
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
const wt = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Ps = /(?:[*+-]|\d{1,9}[.)])/, Is = Q(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Ps).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Un = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Yn = /(?!\s*\])(?:\\.|[^\[\]\\])+/, wi = Q(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Yn).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), bi = Q(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Ps).getRegex(), en = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Qn = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, yi = Q("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Qn).replace("tag", en).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Mr = Q(Un).replace("hr", wt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", en).getRegex(), Xn = { blockquote: Q(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Mr).getRegex(), code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, def: wi, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hr: wt, html: yi, lheading: Is, list: bi, newline: /^(?: *(?:\n|$))+/, paragraph: Mr, table: gt, text: /^[^\n]+/ }, jr = Q("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", wt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", en).getRegex(), Ci = { ...Xn, table: jr, paragraph: Q(Un).replace("hr", wt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", jr).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", en).getRegex() }, Si = { ...Xn, html: Q(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Qn).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: gt, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Q(Un).replace("hr", wt).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Is).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Ts = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Rs = /^( {2,}|\\)\n(?!\s*$)/, bt = "\\p{P}\\p{S}", Ai = Q(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, bt).getRegex(), Ei = Q(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, bt).getRegex(), Pi = Q("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, bt).getRegex(), Ii = Q("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, bt).getRegex(), Ti = Q(/\\([punct])/, "gu").replace(/punct/g, bt).getRegex(), Ri = Q(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Bi = Q(Qn).replace("(?:-->|$)", "-->").getRegex(), Li = Q("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Bi).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Qt = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Oi = Q(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Qt).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), zr = Q(/^!?\[(label)\]\[(ref)\]/).replace("label", Qt).replace("ref", Yn).getRegex(), Dr = Q(/^!?\[(ref)\](?:\[\])?/).replace("ref", Yn).getRegex(), Zn = { _backpedal: gt, anyPunctuation: Ti, autolink: Ri, blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, br: Rs, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, del: gt, emStrongLDelim: Ei, emStrongRDelimAst: Pi, emStrongRDelimUnd: Ii, escape: Ts, link: Oi, nolink: Dr, punctuation: Ai, reflink: zr, reflinkSearch: Q("reflink|nolink(?!\\()", "g").replace("reflink", zr).replace("nolink", Dr).getRegex(), tag: Li, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, url: gt }, Mi = { ...Zn, link: Q(/^!?\[(label)\]\((.*?)\)/).replace("label", Qt).getRegex(), reflink: Q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Qt).getRegex() }, Bn = { ...Zn, escape: Q(Ts).replace("])", "~|])").getRegex(), url: Q(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, ji = { ...Bn, br: Q(Rs).replace("{2,}", "*").getRegex(), text: Q(Bn.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Lt = { normal: Xn, gfm: Ci, pedantic: Si }, lt = { normal: Zn, gfm: Bn, breaks: ji, pedantic: Mi };
var zi = Object.defineProperty, pn = (r, e, t) => ((n, s, o) => s in n ? zi(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
function Hr(r, e, t, n) {
  const s = e.href, o = e.title ? we(e.title) : null, i = r[1].replace(/\\([\[\]])/g, "$1");
  if (r[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const a = { type: "link", raw: t, href: s, title: o, text: i, tokens: n.inlineTokens(i) };
    return n.state.inLink = !1, a;
  }
  return { type: "image", raw: t, href: s, title: o, text: we(i) };
}
class Xt {
  constructor(e) {
    pn(this, "lexer"), pn(this, "options"), pn(this, "rules"), this.options = e || Xe;
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, s;
      return t[2] === "@" ? (n = we(t[1]), s = "mailto:" + n) : (n = we(t[1]), s = n), { type: "link", raw: t[0], text: n, href: s, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      n = Bt(n.replace(/^ *>[ \t]?/gm, ""), `
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
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : Bt(n, `
`) };
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(n), o = /^ /.test(n) && / $/.test(n);
      return s && o && (n = n.substring(1, n.length - 1)), n = we(n, !0), { type: "codespan", raw: t[0], text: n };
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
      let i, a, u = o, c = 0;
      const l = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (l.lastIndex = 0, t = t.slice(-1 * e.length + o); (s = l.exec(t)) != null; ) {
        if (i = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !i) continue;
        if (a = [...i].length, s[3] || s[4]) {
          u += a;
          continue;
        }
        if ((s[5] || s[6]) && o % 3 && !((o + a) % 3)) {
          c += a;
          continue;
        }
        if (u -= a, u > 0) continue;
        a = Math.min(a, a + u + c);
        const h = [...s[0]][0].length, d = e.slice(0, o + s.index + h + a);
        if (Math.min(o, a) % 2) {
          const p = d.slice(1, -1);
          return { type: "em", raw: d, text: p, tokens: this.lexer.inlineTokens(p) };
        }
        const g = d.slice(2, -2);
        return { type: "strong", raw: d, text: g, tokens: this.lexer.inlineTokens(g) };
      }
    }
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: we(t[1]) };
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const n = t[0], s = function(o, i) {
        const a = o.match(/^(\s+)(?:```)/);
        if (a === null) return i;
        const u = a[1];
        return i.split(`
`).map((c) => {
          const l = c.match(/^\s+/);
          if (l === null) return c;
          const [h] = l;
          return h.length >= u.length ? c.slice(u.length) : c;
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
        const s = Bt(n, "#");
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
      return n = this.lexer.state.inRawBlock ? t[0] : we(t[0]), { type: "text", raw: t[0], text: n };
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
        const i = Bt(n.slice(0, -1), "\\");
        if ((n.length - i.length) % 2 == 0) return;
      } else {
        const i = function(a, u) {
          if (a.indexOf(u[1]) === -1) return -1;
          let c = 0;
          for (let l = 0; l < a.length; l++) if (a[l] === "\\") l++;
          else if (a[l] === u[0]) c++;
          else if (a[l] === u[1] && (c--, c < 0)) return l;
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
      return s = s.trim(), /^</.test(s) && (s = this.options.pedantic && !/>$/.test(n) ? s.slice(1) : s.slice(1, -1)), Hr(t, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer);
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim();
      const s = n.length > 1, o = { type: "list", raw: "", ordered: s, start: s ? +n.slice(0, -1) : "", loose: !1, items: [] };
      n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = s ? n : "[*+-]");
      const i = new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let a = "", u = "", c = !1;
      for (; e; ) {
        let l = !1;
        if (!(t = i.exec(e)) || this.rules.block.hr.test(e)) break;
        a = t[0], e = e.substring(a.length);
        let h = t[2].split(`
`, 1)[0].replace(/^\t+/, (y) => " ".repeat(3 * y.length)), d = e.split(`
`, 1)[0], g = 0;
        this.options.pedantic ? (g = 2, u = h.trimStart()) : (g = t[2].search(/[^ ]/), g = g > 4 ? 1 : g, u = h.slice(g), g += t[1].length);
        let p = !1;
        if (!h && /^ *$/.test(d) && (a += d + `
`, e = e.substring(d.length + 1), l = !0), !l) {
          const y = new RegExp(`^ {0,${Math.min(3, g - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), x = new RegExp(`^ {0,${Math.min(3, g - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), k = new RegExp(`^ {0,${Math.min(3, g - 1)}}(?:\`\`\`|~~~)`), S = new RegExp(`^ {0,${Math.min(3, g - 1)}}#`);
          for (; e; ) {
            const A = e.split(`
`, 1)[0];
            if (d = A, this.options.pedantic && (d = d.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), k.test(d) || S.test(d) || y.test(d) || x.test(e)) break;
            if (d.search(/[^ ]/) >= g || !d.trim()) u += `
` + d.slice(g);
            else {
              if (p || h.search(/[^ ]/) >= 4 || k.test(h) || S.test(h) || x.test(h)) break;
              u += `
` + d;
            }
            p || d.trim() || (p = !0), a += A + `
`, e = e.substring(A.length + 1), h = d.slice(g);
          }
        }
        o.loose || (c ? o.loose = !0 : /\n *\n *$/.test(a) && (c = !0));
        let f, w = null;
        this.options.gfm && (w = /^\[[ xX]\] /.exec(u), w && (f = w[0] !== "[ ] ", u = u.replace(/^\[[ xX]\] +/, ""))), o.items.push({ type: "list_item", raw: a, task: !!w, checked: f, loose: !1, text: u, tokens: [] }), o.raw += a;
      }
      o.items[o.items.length - 1].raw = a.trimEnd(), o.items[o.items.length - 1].text = u.trimEnd(), o.raw = o.raw.trimEnd();
      for (let l = 0; l < o.items.length; l++) if (this.lexer.state.top = !1, o.items[l].tokens = this.lexer.blockTokens(o.items[l].text, []), !o.loose) {
        const h = o.items[l].tokens.filter((g) => g.type === "space"), d = h.length > 0 && h.some((g) => /\n.*\n/.test(g.raw));
        o.loose = d;
      }
      if (o.loose) for (let l = 0; l < o.items.length; l++) o.items[l].loose = !0;
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
      return Hr(n, s, n[0], this.lexer);
    }
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2])) return;
    const n = Or(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), o = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], i = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === s.length) {
      for (const a of s) /^ *-+: *$/.test(a) ? i.align.push("right") : /^ *:-+: *$/.test(a) ? i.align.push("center") : /^ *:-+ *$/.test(a) ? i.align.push("left") : i.align.push(null);
      for (const a of n) i.header.push({ text: a, tokens: this.lexer.inline(a) });
      for (const a of o) i.rows.push(Or(a, i.header.length).map((u) => ({ text: u, tokens: this.lexer.inline(u) })));
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
      if (t[2] === "@") s = we(t[0]), o = "mailto:" + s;
      else {
        let i;
        do
          i = t[0], t[0] = ((n = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : n[0]) ?? "";
        while (i !== t[0]);
        s = we(t[0]), o = t[1] === "www." ? "http://" + t[0] : t[0];
      }
      return { type: "link", raw: t[0], text: s, href: o, tokens: [{ type: "text", raw: s, text: s }] };
    }
  }
}
var Di = Object.defineProperty, ct = (r, e, t) => ((n, s, o) => s in n ? Di(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class Le {
  constructor(e) {
    ct(this, "options"), ct(this, "state"), ct(this, "tokens"), ct(this, "inlineQueue"), ct(this, "tokenizer"), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Xe, this.options.tokenizer = this.options.tokenizer || new Xt(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    const t = { block: Lt.normal, inline: lt.normal };
    this.options.pedantic ? (t.block = Lt.pedantic, t.inline = lt.pedantic) : this.options.gfm && (t.block = Lt.gfm, this.options.breaks ? t.inline = lt.breaks : t.inline = lt.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: Lt, inline: lt };
  }
  static lex(e, t) {
    return new Le(t).lex(e);
  }
  static lexInline(e, t) {
    return new Le(t).inlineTokens(e);
  }
  blockTokens(e, t = []) {
    let n, s, o, i;
    for (e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, (a, u, c) => u + "    ".repeat(c.length)); e; ) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((a) => !!(n = a.call({ lexer: this }, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0)))) if (n = this.tokenizer.space(e)) e = e.substring(n.raw.length), n.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
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
        let c;
        this.options.extensions.startBlock.forEach((l) => {
          c = l.call({ lexer: this }, u), typeof c == "number" && c >= 0 && (a = Math.min(a, c));
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
    let n, s, o, i, a, u, c = e;
    if (this.tokens.links) {
      const l = Object.keys(this.tokens.links);
      if (l.length > 0) for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(c)) != null; ) l.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (c = c.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(c)) != null; ) c = c.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(c)) != null; ) c = c.slice(0, i.index) + "++" + c.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; ) if (a || (u = ""), a = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((l) => !!(n = l.call({ lexer: this }, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0)))) if (n = this.tokenizer.escape(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.tag(e)) e = e.substring(n.raw.length), s = t[t.length - 1], s && n.type === "text" && s.type === "text" ? (s.raw += n.raw, s.text += n.text) : t.push(n);
    else if (n = this.tokenizer.link(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(n.raw.length), s = t[t.length - 1], s && n.type === "text" && s.type === "text" ? (s.raw += n.raw, s.text += n.text) : t.push(n);
    else if (n = this.tokenizer.emStrong(e, c, u)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.codespan(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.br(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.del(e)) e = e.substring(n.raw.length), t.push(n);
    else if (n = this.tokenizer.autolink(e)) e = e.substring(n.raw.length), t.push(n);
    else if (this.state.inLink || !(n = this.tokenizer.url(e))) {
      if (o = e, this.options.extensions && this.options.extensions.startInline) {
        let l = 1 / 0;
        const h = e.slice(1);
        let d;
        this.options.extensions.startInline.forEach((g) => {
          d = g.call({ lexer: this }, h), typeof d == "number" && d >= 0 && (l = Math.min(l, d));
        }), l < 1 / 0 && l >= 0 && (o = e.substring(0, l + 1));
      }
      if (n = this.tokenizer.inlineText(o)) e = e.substring(n.raw.length), n.raw.slice(-1) !== "_" && (u = n.raw.slice(-1)), a = !0, s = t[t.length - 1], s && s.type === "text" ? (s.raw += n.raw, s.text += n.text) : t.push(n);
      else if (e) {
        const l = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(l);
          break;
        }
        throw new Error(l);
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
var Hi = Object.defineProperty, Ni = (r, e, t) => ((n, s, o) => s in n ? Hi(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, e + "", t);
class Zt {
  constructor(e) {
    Ni(this, "options"), this.options = e || Xe;
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
`, s ? '<pre><code class="language-' + we(s) + '">' + (n ? e : we(e, !0)) + `</code></pre>
` : "<pre><code>" + (n ? e : we(e, !0)) + `</code></pre>
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
    const s = Lr(e);
    if (s === null) return n;
    let o = `<img src="${e = s}" alt="${n}"`;
    return t && (o += ` title="${t}"`), o += ">", o;
  }
  link(e, t, n) {
    const s = Lr(e);
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
class Wn {
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
var qi = Object.defineProperty, hn = (r, e, t) => ((n, s, o) => s in n ? qi(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class Oe {
  constructor(e) {
    hn(this, "options"), hn(this, "renderer"), hn(this, "textRenderer"), this.options = e || Xe, this.options.renderer = this.options.renderer || new Zt(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Wn();
  }
  static parse(e, t) {
    return new Oe(t).parse(e);
  }
  static parseInline(e, t) {
    return new Oe(t).parseInline(e);
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
          n += this.renderer.heading(this.parseInline(i.tokens), i.depth, ki(this.parseInline(i.tokens, this.textRenderer)));
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
          for (let l = 0; l < i.header.length; l++) u += this.renderer.tablecell(this.parseInline(i.header[l].tokens), { header: !0, align: i.align[l] });
          a += this.renderer.tablerow(u);
          let c = "";
          for (let l = 0; l < i.rows.length; l++) {
            const h = i.rows[l];
            u = "";
            for (let d = 0; d < h.length; d++) u += this.renderer.tablecell(this.parseInline(h[d].tokens), { header: !1, align: i.align[d] });
            c += this.renderer.tablerow(u);
          }
          n += this.renderer.table(a, c);
          continue;
        }
        case "blockquote": {
          const i = o, a = this.parse(i.tokens);
          n += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          const i = o, a = i.ordered, u = i.start, c = i.loose;
          let l = "";
          for (let h = 0; h < i.items.length; h++) {
            const d = i.items[h], g = d.checked, p = d.task;
            let f = "";
            if (d.task) {
              const w = this.renderer.checkbox(!!g);
              c ? d.tokens.length > 0 && d.tokens[0].type === "paragraph" ? (d.tokens[0].text = w + " " + d.tokens[0].text, d.tokens[0].tokens && d.tokens[0].tokens.length > 0 && d.tokens[0].tokens[0].type === "text" && (d.tokens[0].tokens[0].text = w + " " + d.tokens[0].tokens[0].text)) : d.tokens.unshift({ type: "text", text: w + " " }) : f += w + " ";
            }
            f += this.parse(d.tokens, c), l += this.renderer.listitem(f, p, !!g);
          }
          n += this.renderer.list(l, a, u);
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
var ft, Nr, Ln, Fi = Object.defineProperty, Bs = (r) => {
  throw TypeError(r);
}, Te = (r, e, t) => ((n, s, o) => s in n ? Fi(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t), On = (r, e, t) => (((n, s, o) => {
  s.has(n) || Bs("Cannot " + o);
})(r, e, "access private method"), t);
ft = /* @__PURE__ */ new WeakSet(), Nr = function(r, e) {
  return (t) => {
    if (t.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
      const n = "<p>An error occurred:</p><pre>" + we(t.message + "", !0) + "</pre>";
      return e ? Promise.resolve(n) : n;
    }
    if (e) return Promise.reject(t);
    throw t;
  };
}, Ln = function(r, e) {
  return (t, n) => {
    const s = { ...n }, o = { ...this.defaults, ...s };
    this.defaults.async === !0 && s.async === !1 && (o.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), o.async = !0);
    const i = On(this, ft, Nr).call(this, !!o.silent, !!o.async);
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
const Ue = new class {
  constructor(...r) {
    var e, t, n;
    e = this, (t = ft).has(e) ? Bs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Te(this, "Hooks", mt), Te(this, "Lexer", Le), Te(this, "Parser", Oe), Te(this, "Renderer", Zt), Te(this, "TextRenderer", Wn), Te(this, "Tokenizer", Xt), Te(this, "defaults", { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null }), Te(this, "options", this.setOptions), Te(this, "parse", On(this, ft, Ln).call(this, Le.lex, Oe.parse)), Te(this, "parseInline", On(this, ft, Ln).call(this, Le.lexInline, Oe.parseInline)), this.use(...r);
  }
  lexer(r, e) {
    return Le.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return Oe.parse(r, e ?? this.defaults);
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
        const s = this.defaults.renderer || new Zt(this.defaults);
        for (const o in t.renderer) {
          if (!(o in s)) throw new Error(`renderer '${o}' does not exist`);
          if (o === "options") continue;
          const i = o, a = t.renderer[i], u = s[i];
          s[i] = (...c) => {
            let l = a.apply(s, c);
            return l === !1 && (l = u.apply(s, c)), l || "";
          };
        }
        n.renderer = s;
      }
      if (t.tokenizer) {
        const s = this.defaults.tokenizer || new Xt(this.defaults);
        for (const o in t.tokenizer) {
          if (!(o in s)) throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o)) continue;
          const i = o, a = t.tokenizer[i], u = s[i];
          s[i] = (...c) => {
            let l = a.apply(s, c);
            return l === !1 && (l = u.apply(s, c)), l;
          };
        }
        n.tokenizer = s;
      }
      if (t.hooks) {
        const s = this.defaults.hooks || new mt();
        for (const o in t.hooks) {
          if (!(o in s)) throw new Error(`hook '${o}' does not exist`);
          if (o === "options") continue;
          const i = o, a = t.hooks[i], u = s[i];
          mt.passThroughHooks.has(o) ? s[i] = (c) => {
            if (this.defaults.async) return Promise.resolve(a.call(s, c)).then((h) => u.call(s, h));
            const l = a.call(s, c);
            return u.call(s, l);
          } : s[i] = (...c) => {
            let l = a.apply(s, c);
            return l === !1 && (l = u.apply(s, c)), l;
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
function K(r, e) {
  return Ue.parse(r, e);
}
K.options = K.setOptions = function(r) {
  return Ue.setOptions(r), K.defaults = Ue.defaults, Rr(K.defaults), K;
}, K.getDefaults = pi, K.defaults = Xe, K.use = function(...r) {
  return Ue.use(...r), K.defaults = Ue.defaults, Rr(K.defaults), K;
}, K.walkTokens = function(r, e) {
  return Ue.walkTokens(r, e);
}, K.parseInline = Ue.parseInline, K.Parser = Oe, K.parser = Oe.parse, K.Renderer = Zt, K.TextRenderer = Wn, K.Lexer = Le, K.lexer = Le.lex, K.Tokenizer = Xt, K.Hooks = mt, K.parse = K;
const Ls = (r, e) => {
  const { showCodeBlockCopyButton: t, markdownLinkTarget: n, syntaxHighlighter: s, htmlSanitizer: o } = e || {}, i = K(r, { async: !1, breaks: !0 });
  if (typeof i != "string") throw new Error("Markdown parsing failed");
  const a = document.createElement("div");
  return a.innerHTML = o ? o(i) : i, a.querySelectorAll("pre").forEach((u) => {
    const c = document.createElement("div");
    c.className = "code-block";
    const l = u.querySelector("code");
    if (!l) {
      const p = u.innerHTML;
      return c.innerHTML = o ? o(p) : p, void u.replaceWith(c);
    }
    let h;
    for (let p = 0; p < l.classList.length; p++) {
      const f = l.classList[p];
      if (f.startsWith("language-")) {
        h = f.slice(9);
        break;
      }
    }
    const d = document.createElement("pre"), g = "<div>" + l.innerHTML + "</div>";
    if (d.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(g) : g, h && (d.setAttribute("data-language", h), s)) {
      const p = "<div>" + s.createHighlighter()(l.textContent || "", h) + "</div>";
      d.innerHTML = o ? o(p) : p, d.className = "highlighter-dark";
    }
    ((p) => {
      p.replaceChildren();
    })(c), c.appendChild(d), u.replaceWith(c);
  }), t !== !1 && a.querySelectorAll(".code-block").forEach((u) => {
    var d;
    if (!u.querySelector("pre") || (d = u.previousElementSibling) != null && d.classList.contains("nlux-comp-copyButton")) return;
    const c = "Copy code block to clipboard", l = document.createElement("button");
    l.classList.add("nlux-comp-copyButton"), l.setAttribute("aria-label", c), l.setAttribute("title", c);
    const h = document.createElement("span");
    h.classList.add("icon-copy"), l.appendChild(h), u.insertAdjacentElement("beforebegin", l);
  }), n !== "self" && a.querySelectorAll("a").forEach((u) => {
    u.setAttribute("target", "_blank");
  }), a.innerHTML;
}, Os = "nlux-comp-message", qr = { received: "nlux-comp-chatItem--received", sent: "nlux-comp-chatItem--sent" }, $i = "nlux-comp-chatItem--bubblesLayout", Ui = "nlux-comp-chatItem--listLayout", Yi = (r) => {
  const { markdownOptions: e } = r, t = ee(null), n = z(() => r.content ? Ls(r.content, { syntaxHighlighter: e == null ? void 0 : e.syntaxHighlighter, htmlSanitizer: e == null ? void 0 : e.htmlSanitizer, markdownLinkTarget: e == null ? void 0 : e.markdownLinkTarget, showCodeBlockCopyButton: e == null ? void 0 : e.showCodeBlockCopyButton }) : "", [r.content, e == null ? void 0 : e.markdownLinkTarget, e == null ? void 0 : e.syntaxHighlighter, e == null ? void 0 : e.htmlSanitizer, e == null ? void 0 : e.showCodeBlockCopyButton]);
  Z(() => {
    t.current && (e == null ? void 0 : e.showCodeBlockCopyButton) !== !1 && Cs(t.current);
  }, [n, t.current, e == null ? void 0 : e.showCodeBlockCopyButton]);
  const s = z(() => e != null && e.htmlSanitizer ? e.htmlSanitizer(n) : n, [n, e == null ? void 0 : e.htmlSanitizer]);
  return v.jsx(Ms, { children: v.jsx("div", { className: "nlux-markdownStream-root", children: v.jsx("div", { className: "nlux-markdown-container", ref: t, dangerouslySetInnerHTML: { __html: s } }) }) });
};
class Ms extends co {
  constructor() {
    super(...arguments), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(e) {
    ge("Markdown rendering error occurred. This could be due to a malformed markdown content, or it could be because the page requires an HTML sanitizer. Please check the error message for more details and consider configuring NLUX with a compatible sanitizer."), this.props.onMarkdownRenderingError && this.props.onMarkdownRenderingError(e);
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}
const Fr = (r) => v.jsx(Ms, { children: v.jsx(Yi, { ...r }) }), Qi = (r, e) => {
  let t = !1;
  const { onComplete: n } = e || {}, s = [], o = (e != null && e.skipStreamingAnimation ? "timeout" : "animationFrame") == "timeout" ? (h) => setTimeout(h, 0) : (h) => requestAnimationFrame(h), i = document.createElement("div");
  i.classList.add("md-in-progress"), r.append(i);
  const a = () => {
    for (; i.firstChild; ) {
      const h = i.firstChild;
      h instanceof HTMLElement && Cs(h), i.before(h);
    }
  }, u = !(e != null && e.skipStreamingAnimation) && (e != null && e.streamingAnimationSpeed) && e.streamingAnimationSpeed >= 0 ? e.streamingAnimationSpeed : e != null && e.skipStreamingAnimation ? 0 : 8, c = { timeSinceLastProcessing: (/* @__PURE__ */ new Date()).getTime(), currentMarkdown: "", previousHtml: void 0 };
  let l = setInterval(() => {
    const h = (/* @__PURE__ */ new Date()).getTime(), d = (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) !== "never";
    if (s.length === 0 && d) {
      const p = typeof (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) == "number" ? e.waitTimeBeforeStreamCompletion : 2e3;
      return void ((t || h - c.timeSinceLastProcessing > p) && (t = !0, l && (clearInterval(l), l = void 0), a(), i.remove(), n == null ? void 0 : n()));
    }
    c.timeSinceLastProcessing = h;
    const g = s.shift();
    g !== void 0 && typeof g == "string" && o(() => {
      const p = c.currentMarkdown + g, f = Ls(p, e).trim();
      if (typeof f != "string") return c.currentMarkdown = c.currentMarkdown.slice(0, -g.length), void ge("Markdown parsing failed");
      if (c.previousHtml && f.length > c.previousHtml.length && f.startsWith(c.previousHtml)) {
        a();
        const w = f.slice(c.previousHtml.length).trim();
        i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(w) : w, c.currentMarkdown = g, c.previousHtml = void 0;
      } else i.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(f) : f, c.currentMarkdown = p, c.previousHtml = f;
    });
  }, u);
  return { next: (h) => {
    if (t) ge("Stream is already complete. No more chunks can be added");
    else for (const d of h) s.push(d);
  }, complete: () => {
    s.push(`
`), t = !0;
  }, error: () => {
    t = !0;
  } };
}, Xi = function(r, e) {
  const { uid: t, status: n, responseRenderer: s, markdownOptions: o, initialMarkdownMessage: i, markdownContainersController: a } = r, [u, c] = ke([]), l = ee(null), h = ee(null), d = ee(null), g = ee(null), [p, f] = ke();
  Z(() => {
    l.current !== h.current && (h.current = l.current, f(l.current || void 0));
  }), Z(() => {
    if (p) {
      const y = a.getStreamingDomElement(t);
      p.append(y);
    }
  }, [p]), Z(() => {
    g.current = (y) => {
      c((x) => [...x, y]);
    };
  }, [c]), Z(() => {
    const y = a.getStreamingDomElement(t);
    return d.current = Qi(y, { syntaxHighlighter: o == null ? void 0 : o.syntaxHighlighter, htmlSanitizer: o == null ? void 0 : o.htmlSanitizer, markdownLinkTarget: o == null ? void 0 : o.markdownLinkTarget, showCodeBlockCopyButton: o == null ? void 0 : o.showCodeBlockCopyButton, skipStreamingAnimation: o == null ? void 0 : o.skipStreamingAnimation, streamingAnimationSpeed: o == null ? void 0 : o.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: o == null ? void 0 : o.waitTimeBeforeStreamCompletion }), i && d.current.next(i), () => {
      a.deleteStreamingDomElement(t);
    };
  }, []), Z(() => () => {
    h.current = null, d.current = null, g.current = null, f(void 0);
  }, []), Vt(e, () => ({ streamChunk: (y) => {
    var x, k;
    g.current && ((x = g.current) == null || x.call(g, y)), typeof y == "string" && ((k = d.current) == null || k.next(y));
  }, completeStream: () => {
    var y;
    (y = d.current) == null || y.complete();
  } }), []);
  const w = s || void 0;
  return v.jsxs("div", { className: `${Os} ${Rn[n]} ${Tn.received}`, children: [w && v.jsx(w, { uid: t, status: n, containerRef: l, content: u, contentType: "text", serverResponse: [], dataTransferMode: "stream" }), !w && v.jsx("div", { className: "nlux-markdownStream-root", ref: l })] });
}, js = (r) => {
  const e = typeof r.avatar == "string", t = !e && Jr(r.avatar);
  return v.jsxs("div", { className: "nlux-comp-avatar", children: [t && r.avatar, !t && e && v.jsx("div", { className: "nlux-comp-avatarContainer", children: r.avatar && v.jsx("div", { className: "nlux-comp-avatarPicture", style: { backgroundImage: `url("${encodeURI(r.avatar)}")` } }) })] });
}, mn = function(r) {
  const e = r.status ? Rn[r.status] : Rn.rendered, t = r.direction ? Tn[r.direction] : Tn.received, n = `${Os} ${e} ${t}`;
  if (r.status === "streaming" && r.contentType === "text") return v.jsx("div", { className: n });
  const s = typeof r.message == "function" ? v.jsx(r.message, {}) : r.message;
  return v.jsx("div", { className: n, children: s });
}, Zi = function(r, e) {
  var p, f, w, y, x, k, S, A, E, L, R, I, B;
  const t = z(() => v.jsxs("div", { className: "nlux-comp-chatItem-participantInfo", children: [r.avatar !== void 0 && v.jsx(js, { name: r.name, avatar: r.avatar }), v.jsx("span", { className: "nlux-comp-chatItem-participantName", children: r.name })] }), [r.avatar, r.name]), n = ee(null);
  Vt(e, () => ({ streamChunk: (D) => setTimeout(() => {
    var H;
    return (H = n == null ? void 0 : n.current) == null ? void 0 : H.streamChunk(D);
  }), completeStream: () => setTimeout(() => {
    var D;
    return (D = n == null ? void 0 : n.current) == null ? void 0 : D.completeStream();
  }) }), []);
  const s = r.direction ? qr[r.direction] : qr.received, o = r.layout === "bubbles" ? $i : Ui, i = `nlux-comp-chatItem ${s} ${o} ${o}`, a = z(() => function(D, H) {
    const { uid: q, status: W, dataTransferMode: te, contentType: oe, fetchedContent: $, streamedContent: _, streamedServerResponse: V, fetchedServerResponse: G, direction: ae, messageOptions: M } = D, he = { current: null };
    if ((M == null ? void 0 : M.responseRenderer) !== void 0) {
      if (te === "stream") {
        const be = { uid: q, status: W, dataTransferMode: te, contentType: oe, content: _ ?? [], serverResponse: V ?? [], containerRef: he };
        return () => {
          const Me = M.responseRenderer;
          return v.jsx(Me, { ...be });
        };
      }
      {
        const be = Se.isValidElement($), Me = { uid: q, status: "complete", dataTransferMode: te, contentType: oe, content: $ ? be ? $ : [$] : [], serverResponse: G ? [G] : [] };
        return () => {
          const je = M.responseRenderer;
          return v.jsx(je, { ...Me });
        };
      }
    }
    if (ae === "sent") {
      if (typeof $ == "string") {
        const be = $;
        return () => v.jsx(v.Fragment, { children: be });
      }
      return () => "";
    }
    if (typeof $ == "string") {
      const be = $;
      return () => v.jsx(Fr, { messageUid: q, content: be, markdownOptions: { syntaxHighlighter: M == null ? void 0 : M.syntaxHighlighter, htmlSanitizer: M == null ? void 0 : M.htmlSanitizer, markdownLinkTarget: M == null ? void 0 : M.markdownLinkTarget, showCodeBlockCopyButton: M == null ? void 0 : M.showCodeBlockCopyButton, skipStreamingAnimation: M == null ? void 0 : M.skipStreamingAnimation } });
    }
    return Se.isValidElement($) ? () => v.jsx(v.Fragment, { children: $ }) : () => "";
  }(r), [r.uid, r.status, r.dataTransferMode, r.fetchedContent, r.streamedContent, r.direction, (p = r.messageOptions) == null ? void 0 : p.responseRenderer, (f = r.messageOptions) == null ? void 0 : f.syntaxHighlighter, (w = r.messageOptions) == null ? void 0 : w.htmlSanitizer, (y = r.messageOptions) == null ? void 0 : y.markdownLinkTarget]), u = Ye(() => {
    var H, q;
    if (((H = r.messageOptions) == null ? void 0 : H.promptRenderer) === void 0) return v.jsx(Fr, { messageUid: r.uid, content: r.fetchedContent, markdownOptions: { htmlSanitizer: (q = r.messageOptions) == null ? void 0 : q.htmlSanitizer } });
    const D = r.messageOptions.promptRenderer;
    return v.jsx(D, { uid: r.uid, prompt: r.fetchedContent });
  }, [(x = r.messageOptions) == null ? void 0 : x.promptRenderer, r.fetchedContent, r.uid]), c = z(() => Kt(Xi), []), l = r.contentType === "server-component", h = r.direction === "received", d = r.direction === "sent", g = r.dataTransferMode === "stream";
  return v.jsxs("div", { className: i, children: [t, h && g && !l && v.jsx(c, { uid: r.uid, status: r.status, ref: n, direction: r.direction, responseRenderer: (k = r.messageOptions) == null ? void 0 : k.responseRenderer, markdownContainersController: r.markdownContainersController, markdownOptions: { syntaxHighlighter: (S = r.messageOptions) == null ? void 0 : S.syntaxHighlighter, htmlSanitizer: (A = r.messageOptions) == null ? void 0 : A.htmlSanitizer, markdownLinkTarget: (E = r.messageOptions) == null ? void 0 : E.markdownLinkTarget, showCodeBlockCopyButton: (L = r.messageOptions) == null ? void 0 : L.showCodeBlockCopyButton, skipStreamingAnimation: (R = r.messageOptions) == null ? void 0 : R.skipStreamingAnimation, streamingAnimationSpeed: (I = r.messageOptions) == null ? void 0 : I.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: (B = r.messageOptions) == null ? void 0 : B.waitTimeBeforeStreamCompletion } }, "do-not-change"), h && g && l && v.jsx(mn, { uid: r.uid, message: r.fetchedContent, status: r.status, contentType: "server-component", direction: r.direction }), h && !g && v.jsx(mn, { uid: r.uid, message: a, status: r.status, contentType: "text", direction: r.direction }), d && v.jsx(mn, { uid: r.uid, message: u, status: r.status, contentType: "text", direction: r.direction })] });
}, $r = (r) => typeof r == "string" || typeof r == "number" || typeof r == "boolean" || r == null, Ot = (r, e) => {
  var t, n;
  return r === "assistant" ? ((t = e == null ? void 0 : e.assistant) == null ? void 0 : t.name) ?? "Assistant" : r === "user" ? ((n = e == null ? void 0 : e.user) == null ? void 0 : n.name) ?? "User" : "";
}, Mt = (r, e) => {
  var t, n;
  return r === "assistant" ? (t = e == null ? void 0 : e.assistant) == null ? void 0 : t.avatar : r === "user" ? (n = e == null ? void 0 : e.user) == null ? void 0 : n.avatar : void 0;
}, Wi = function(r, e) {
  const { chatSegment: t, containerRef: n } = r, [s, o] = ke(!1), i = z(() => /* @__PURE__ */ new Map(), []), a = ee(/* @__PURE__ */ new Map()), u = ee(/* @__PURE__ */ new Map()), c = z(() => /* @__PURE__ */ new Map(), []);
  Z(() => {
    if (t.items.length === 0) return i.clear(), a.current.clear(), void u.current.clear();
    const p = new Set(i.keys()), f = new Set(t.items.map((w) => w.uid));
    p.forEach((w) => {
      f.has(w) || i.delete(w);
    }), new Set(a.current.keys()).forEach((w) => {
      f.has(w) || (a.current.delete(w), u.current.delete(w));
    });
  }, [t.items]);
  const l = z(() => t.status !== "active" ? null : v.jsx("div", { className: "nlux-chatSegment-loader-container", children: r.Loader }), [t.status, r.Loader]), h = z(() => ((p) => {
    const f = "nlux-chatSegment";
    return p === "complete" ? `${f} nlux-chatSegment--complete` : p === "error" ? `${f} nlux-chatSegment--error` : `${f} nlux-chatSegment--active`;
  })(t.status), [t.status]);
  Vt(e, () => ({ streamChunk: (p, f) => {
    const w = i.get(p);
    if (w != null && w.current) {
      const y = w.current.streamChunk;
      (c.get(p) ?? []).forEach((x) => {
        y(x);
      }), c.delete(p), y(f);
    } else {
      const y = c.get(p) ?? [];
      c.set(p, [...y, f]);
    }
  }, completeStream: (p) => {
    const f = i.get(p);
    f != null && f.current ? (f.current.completeStream(), i.delete(p)) : o(!0);
  } }), []);
  const d = z(() => Kt(Zi), []);
  Z(() => {
    c.size > 0 && c.forEach((p, f) => {
      const w = i.get(f);
      w != null && w.current && (p.forEach((y) => {
        var x;
        (x = w == null ? void 0 : w.current) == null || x.streamChunk(y);
      }), c.delete(f), s && (w.current.completeStream(), o(!1)));
    });
  });
  const g = t.items;
  return g.length === 0 ? null : v.jsxs("div", { className: h, ref: n, children: [g.map((p, f) => {
    var k;
    let w = i.get(p.uid);
    w || (w = fn(), i.set(p.uid, w));
    let y = p.content, x = "text";
    if (typeof y == "function") {
      const S = u.current.get(p.uid), A = a.current.get(p.uid);
      if (S && A) y = A, x = "server-component";
      else {
        a.current.delete(p.uid), u.current.delete(p.uid);
        try {
          const E = y;
          if (y = v.jsx(E, {}), !y || !Se.isValidElement(y)) throw new Error("Invalid React element returned from the AI chat content function.");
          x = "server-component", a.current.set(p.uid, y), u.current.set(p.uid, E);
        } catch {
          return ge(`The type of the AI chat content is an invalid function.
If you're looking to render a React Server Components, please refer to docs.nlkit.com/nlux for more information.
`), null;
        }
      }
    }
    if (p.participantRole === "user") return p.status !== "complete" ? (Yt(`User chat item should be always be in complete state — Current status: ${p.status} — Segment UID: ${t.uid}`), null) : $r(y) ? v.jsx(d, { ref: w, uid: p.uid, status: "complete", direction: "sent", contentType: x, layout: r.layout, messageOptions: r.messageOptions, dataTransferMode: "batch", fetchedContent: p.content, name: Ot(p.participantRole, r.personaOptions), avatar: Mt(p.participantRole, r.personaOptions), markdownContainersController: r.markdownContainersController }, p.uid) : (Yt(`User chat item should have primitive content (string, number, boolean, null) — Current content: ${JSON.stringify(y)} — Segment UID: ${t.uid}`), null);
    if (p.status === "complete") return p.dataTransferMode === "stream" ? v.jsx(d, { ref: w, uid: p.uid, status: p.status, direction: "received", contentType: x, layout: r.layout, messageOptions: r.messageOptions, dataTransferMode: p.dataTransferMode, streamedContent: y, name: Ot(p.participantRole, r.personaOptions), avatar: Mt(p.participantRole, r.personaOptions), markdownContainersController: r.markdownContainersController }, p.uid) : x !== "text" || $r(y) || (k = r.messageOptions) != null && k.responseRenderer ? v.jsx(d, { ref: w, uid: p.uid, status: "complete", direction: "received", layout: r.layout, messageOptions: r.messageOptions, dataTransferMode: p.dataTransferMode, fetchedContent: y, contentType: x, fetchedServerResponse: p.serverResponse, name: Ot(p.participantRole, r.personaOptions), avatar: Mt(p.participantRole, r.personaOptions), markdownContainersController: r.markdownContainersController }, p.uid) : (ge(`When the type of the AI chat content is not primitive (object or array), a custom renderer must be provided — Current content: ${JSON.stringify(y)} — Segment UID: ${t.uid}`), null);
    if (p.status === "streaming") {
      const S = x === "server-component" && Jr(y) ? y : void 0;
      return v.jsx(d, { ref: w, uid: p.uid, status: "streaming", direction: "received", contentType: x, fetchedContent: S, layout: r.layout, messageOptions: r.messageOptions, dataTransferMode: p.dataTransferMode, name: Ot(p.participantRole, r.personaOptions), avatar: Mt(p.participantRole, r.personaOptions), markdownContainersController: r.markdownContainersController }, p.uid);
    }
    return null;
  }), l] });
}, Gi = function(r, e) {
  const { segments: t, personaOptions: n, conversationOptions: s, onLastActiveSegmentChange: o } = r, i = fn();
  (function(l, h, d) {
    const g = z(() => {
      const f = l.length > 0 ? l[l.length - 1] : void 0;
      return (f == null ? void 0 : f.status) === "active" ? f.uid : void 0;
    }, [l]), p = ee(void 0);
    Z(() => {
      if (!d) return;
      const f = p.current;
      if (g === (f == null ? void 0 : f.uid) && h.current === (f == null ? void 0 : f.div)) return;
      const w = g && h.current ? { uid: g, div: h.current } : void 0;
      (w || p.current) && (d(w), p.current = w);
    });
  })(t, i, o);
  const a = function(l) {
    const h = z(() => /* @__PURE__ */ new Map(), []);
    return Z(() => {
      if (l.length === 0) return void h.clear();
      const d = new Set(h.keys()), g = new Set(l.map((p) => p.uid));
      d.forEach((p) => {
        g.has(p) || h.delete(p);
      });
    }, [l]), { get: (d) => {
      var g;
      return (g = h.get(d)) == null ? void 0 : g.current;
    }, getRef: (d) => h.get(d), set: (d, g) => {
      h.set(d, g);
    }, remove: (d) => {
      h.delete(d);
    } };
  }(t), u = ((l) => z(() => {
    return h = l == null ? void 0 : l.layout, h ?? "bubbles";
    var h;
  }, [l == null ? void 0 : l.layout]))(s);
  Vt(e, () => ({ streamChunk: (l, h, d) => {
    const g = a.get(l);
    g == null || g.streamChunk(h, d);
  }, completeStream: (l, h) => {
    const d = a.get(l);
    d == null || d.completeStream(h);
  } }), []);
  const c = z(() => Kt(Wi), []);
  return v.jsx("div", { className: "nlux-chatSegments-container", children: t.map((l, h) => {
    const d = h === t.length - 1;
    let g = a.getRef(l.uid);
    return g || (g = fn(), a.set(l.uid, g)), v.jsx(c, { ref: g, containerRef: d ? i : void 0, markdownContainersController: r.markdownContainersController, chatSegment: l, layout: u, personaOptions: n, messageOptions: r.messageOptions, Loader: r.Loader }, l.uid);
  }) });
}, Ji = { typing: "nlux-composer--typing", "submitting-prompt": "nlux-composer--submitting", "submitting-conversation-starter": "nlux-composer--submitting", waiting: "nlux-composer--waiting" }, Ki = () => v.jsx("div", { className: "nlux-comp-sendIcon", children: v.jsx("div", { className: "nlux-comp-sendIcon-container" }) }), Vi = (r) => {
  const e = `nlux-comp-composer ${Ji[r.status] || ""}`, t = r.status === "submitting-conversation-starter" || r.status === "submitting-prompt", n = !r.hasValidInput || r.status === "submitting-conversation-starter" || r.status === "submitting-prompt" || r.status === "waiting", s = r.status === "typing", o = ee(null);
  Z(() => {
    r.status === "typing" && r.autoFocus && o.current && o.current.focus();
  }, [r.status, r.autoFocus, o.current]);
  const i = z(() => (c) => {
    var l;
    (l = r.onChange) == null || l.call(r, c.target.value);
  }, [r.onChange]), a = z(() => () => {
    var c;
    (c = r.onSubmit) == null || c.call(r);
  }, [r.onSubmit]), u = z(() => (c) => {
    if (r.submitShortcut && r.submitShortcut !== "Enter")
      r.submitShortcut === "CommandEnter" && c.key === "Enter" && (c.getModifierState("Control") || c.getModifierState("Meta")) && (a(), c.preventDefault());
    else {
      const l = c.key === "Enter", h = c.altKey || c.ctrlKey || c.metaKey || c.shiftKey;
      l && !h && (a(), c.preventDefault());
    }
  }, [a, r.submitShortcut]);
  return v.jsxs("div", { className: e, children: [v.jsx("textarea", { tabIndex: 0, ref: o, disabled: t, placeholder: r.placeholder, value: r.prompt, onChange: i, onKeyDown: u }), v.jsxs("button", { tabIndex: 0, disabled: n, onClick: () => {
    var c;
    return (c = r.onSubmit) == null ? void 0 : c.call(r);
  }, children: [s && v.jsx(Ki, {}), !s && r.Loader] })] });
}, Mn = (r) => {
  var n;
  const e = {}, t = Object.keys(r);
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    o !== "personaOptions" && o !== "messageOptions" && o !== "adapter" && o !== "events" && Object.assign(e, { [o]: r[o] });
  }
  return r.personaOptions && (e.personaOptions = {}, r.personaOptions.assistant && (e.personaOptions.assistant = { name: r.personaOptions.assistant.name, avatar: typeof r.personaOptions.assistant.avatar == "string" ? r.personaOptions.assistant.avatar : "<REACT ELEMENT />", tagline: r.personaOptions.assistant.tagline }), r.personaOptions.user && (e.personaOptions.user = { name: r.personaOptions.user.name, avatar: typeof r.personaOptions.user.avatar == "string" ? r.personaOptions.user.avatar : "<REACT ELEMENT />" })), r.messageOptions && (e.messageOptions = { ...r.messageOptions, responseRenderer: r.messageOptions.responseRenderer ? () => null : void 0, promptRenderer: r.messageOptions.promptRenderer ? () => null : void 0 }), (n = r.conversationOptions) != null && n.conversationStarters && (e.conversationOptions = { ...r.conversationOptions, conversationStarters: r.conversationOptions.conversationStarters.map((s) => ({ ...s, icon: s.icon ? "<REACT ELEMENT />" : void 0 })) }), e;
};
var _i = Object.defineProperty, jt = (r, e, t) => ((n, s, o) => s in n ? _i(n, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[s] = o)(r, typeof e != "symbol" ? e + "" : e, t);
class ea extends Error {
  constructor(e = {}) {
    super(e.message), jt(this, "exceptionId"), jt(this, "message"), jt(this, "source"), jt(this, "type"), this.message = e.message ?? "", this.source = e.source, this.type = this.constructor.name, this.exceptionId = e.exceptionId;
  }
}
const ta = (r, e) => {
  let t, n = e, s = r, o = !0;
  const i = ((f, w) => {
    let y = !1;
    if (typeof f != "function") throw new ea({ source: "x/throttle", message: "Callback must be a function" });
    return (...x) => {
      y || (f.apply(void 0, x), y = !0, setTimeout(function() {
        y = !1;
      }, w));
    };
  })(/* @__PURE__ */ ((f) => {
    let w, y;
    return (x) => {
      const k = x.target;
      if (!(k instanceof HTMLElement)) return;
      const { scrollTop: S, clientHeight: A, scrollHeight: E } = k, L = E - 30, R = Math.ceil(S + A) >= L, I = w === void 0 || y === void 0 ? void 0 : S > w && y === E ? "down" : S < w && y === E ? "up" : void 0;
      y = E, w = S, f({ scrolledToBottom: R, scrollDirection: I });
    };
  })(({ scrolledToBottom: f, scrollDirection: w }) => {
    o ? w === "up" && (o = !1) : w === "down" && f && (o = !0);
  }), 50), a = (f) => {
    f.addEventListener("scroll", i);
  }, u = (f) => {
    f == null || f.removeEventListener("scroll", i);
  }, c = (f) => {
    (t == null ? void 0 : t.uid) === f && (l == null || l.disconnect(), h == null || h.disconnect(), t = void 0, l = void 0, h = void 0);
  };
  let l, h;
  const d = () => {
    s == null || s.scrollTo({ top: 5e4, behavior: "instant" });
  }, g = () => {
    s && n && o && d();
  }, p = () => {
    g();
  };
  return a(s), { updateConversationContainer: (f) => {
    u(s), a(f), s = f;
  }, updateProps: ({ autoScroll: f }) => {
    n = f;
  }, handleNewChatSegmentAdded: (f, w) => {
    t && (l == null || l.disconnect(), h == null || h.disconnect()), t = { uid: f, container: w }, l = new ResizeObserver(g), l.observe(w), h = new MutationObserver(p), h.observe(w, { childList: !0, subtree: !0, characterData: !0 }), n && d();
  }, handleChatSegmentRemoved: (f) => c(f), handleChatSegmentComplete: (f) => c(f), destroy: () => {
    t && (c(t.uid), t = void 0), u(s), s = void 0;
  } };
}, Ur = !0, Wt = (r) => {
  if (typeof r != "object" || r === null) return !1;
  const e = r;
  return (typeof e.streamText == "function" || typeof e.batchText == "function") && ["stream", "batch"].includes(e.dataTransferMode) && typeof e.id == "string" && typeof e.info == "object" && e.info !== null && typeof e.preProcessAiBatchedMessage == "function" && typeof e.preProcessAiStreamedChunk == "function";
}, ce = (r, e = 1) => {
  setTimeout(() => {
    r();
  }, e);
}, na = (r, e, t, n, s, o, i, a, u) => new Promise((c) => {
  const l = Be(), h = [], d = [];
  let g = !1, p = !1, f = !1;
  const w = Wt(t), y = { next: (x) => {
    if (p || f) return;
    let k, S;
    if (w) {
      const A = x, E = t.preProcessAiStreamedChunk(A, n);
      E != null && (k = E, S = A, h.push(k), d.push(S));
    } else k = x, h.push(k);
    k != null ? (g || g || (g = !0, ce(() => {
      s.forEach((A) => {
        A({ uid: l, status: "streaming", time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" });
      });
    })), ce(() => {
      i.forEach((A) => {
        A({ chunk: k, messageId: l, serverResponse: S });
      });
    })) : ge("Adapter returned an undefined or null value from streamText. This chunk will be ignored.");
  }, complete: () => {
    p || f || (f = !0, ce(() => {
      const x = { uid: l, status: "complete", content: h, contentType: "text", serverResponse: void 0, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" };
      o.forEach((k) => {
        k(x);
      }), c();
    }), ce(() => {
      const x = { uid: r, status: "complete", items: [e, { uid: l, status: "complete", contentType: "text", content: h, serverResponse: d, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" }] };
      a.forEach((k) => {
        k(x);
      });
    }));
  }, error: (x) => {
    p || f || (p = !0, ce(() => {
      u.forEach((k) => {
        k("failed-to-stream-content", x);
      }), c();
    }));
  } };
  t.streamText(e.content, y, n);
}), ra = (r, e, t) => {
  if (!r) return (() => {
    const x = /* @__PURE__ */ new Set(), k = Be(), S = { uid: k, status: "complete", items: [] };
    return ce(() => {
      x.forEach((A) => {
        A(S);
      }), x.clear();
    }), { segment: S, observable: { on: (A, E) => {
      A === "complete" && x.add(E);
    }, removeListener: (A, E) => {
      x.delete(E);
    }, destroy: () => {
      x.clear();
    }, get segmentId() {
      return k;
    } }, dataTransferMode: "batch" };
  })();
  const n = e;
  if (n.streamText === void 0 && n.batchText === void 0 && n.streamServerComponent === void 0) return ((x) => {
    const k = /* @__PURE__ */ new Set(), S = Be(), A = { uid: S, status: "error", items: [] };
    return ce(() => {
      k.forEach((E) => E(x)), k.clear();
    }), { segment: A, dataTransferMode: "stream", observable: { on: (E, L) => {
      E === "error" && k.add(L);
    }, removeListener: (E, L) => {
      k.delete(L);
    }, destroy: () => {
      k.clear();
    }, get segmentId() {
      return S;
    } } };
  })("no-data-transfer-mode-supported");
  const s = Be(), o = ((x) => ({ uid: Be(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: x, contentType: "text" }))(r);
  let i, a, u, c, l, h, d = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set();
  ce(() => {
    d != null && d.size && (d.forEach((x) => {
      x(o);
    }), d.clear(), d = void 0);
  });
  const f = ((x) => {
    const k = [], S = x, A = x;
    (S == null ? void 0 : S.streamText) === void 0 && (A == null ? void 0 : A.streamServerComponent) === void 0 || k.push("stream"), (S == null ? void 0 : S.batchText) !== void 0 && k.push("batch");
    const E = Wt(x) ? x : void 0, L = (E == null ? void 0 : E.dataTransferMode) ?? void 0, R = k.length === 1 ? k[0] : "stream";
    return L ?? R;
  })(e);
  ((x) => "streamServerComponent" in x ? "server-component" : "text")(e) === "server-component" ? (u = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), ((x, k, S, A, E, L, R, I) => new Promise((B, D) => {
    try {
      const H = k.content, q = Be(), W = "assistant", te = "streaming", oe = /* @__PURE__ */ new Date(), $ = "stream";
      let _, V;
      const G = () => {
        ce(() => {
          L.forEach((he) => {
            _ && V && he({ ..._, content: V, status: "complete" });
          });
        }, 20);
        const M = { uid: x, status: "complete", items: [k, _] };
        ce(() => {
          R.forEach((he) => {
            he(M);
          }), B();
        }, 20);
      }, ae = () => {
        I.forEach((M) => {
          M("failed-to-stream-server-component", new Error("Failed to load content"));
        });
      };
      V = S.streamServerComponent(H, A, { onServerComponentReceived: G, onError: ae }), _ = { uid: q, content: V, contentType: "server-component", participantRole: W, status: te, time: oe, dataTransferMode: $ }, ce(() => {
        E.forEach((M) => {
          M(_);
        });
      }, 10);
    } catch (H) {
      ge(H);
      const q = H instanceof Error ? H : typeof H == "string" ? new Error(H) : new Error("Unknown error");
      ce(() => {
        I.forEach((W) => W("failed-to-load-content", q));
      });
    }
  }))(s, o, e, t, a, u, g, p).finally(() => {
    ce(() => y());
  })) : f === "batch" ? (i = /* @__PURE__ */ new Set(), (async (x, k, S, A, E, L, R) => {
    try {
      const I = k.content, B = Wt(S) ? S : void 0, D = B !== void 0, H = Be(), q = "assistant", W = "complete", te = /* @__PURE__ */ new Date(), oe = "batch";
      let $;
      if (D) {
        const G = await B.batchText(I, A), ae = B.preProcessAiBatchedMessage(G, A);
        ae != null && ($ = { uid: H, content: ae, contentType: "text", serverResponse: G, participantRole: q, status: W, time: te, dataTransferMode: oe });
      } else $ = { uid: H, content: await S.batchText(I, A), contentType: "text", serverResponse: void 0, participantRole: q, status: W, time: te, dataTransferMode: oe };
      if (!$) throw new Error("Response from adapter was undefined or cannot be processed");
      const _ = $;
      ce(() => {
        E.forEach((G) => {
          G(_);
        });
      });
      const V = { uid: x, status: "complete", items: [k, $] };
      ce(() => {
        L.forEach((G) => {
          G(V);
        });
      });
    } catch (I) {
      ge(I);
      const B = I instanceof Error ? I : typeof I == "string" ? new Error(I) : new Error("Unknown error");
      ce(() => {
        R.forEach((D) => D("failed-to-load-content", B));
      });
    }
  })(s, o, e, t, i, g, p).finally(() => {
    ce(() => y());
  })) : (c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), na(s, o, e, t, c, l, h, g, p).finally(() => {
    ce(() => y());
  }));
  const y = () => {
    d == null || d.clear(), d = void 0, i == null || i.clear(), i = void 0, a == null || a.clear(), a = void 0, u == null || u.clear(), u = void 0, c == null || c.clear(), c = void 0, l == null || l.clear(), l = void 0, h == null || h.clear(), h = void 0, g == null || g.clear(), g = void 0, p == null || p.clear(), p = void 0;
  };
  return { segment: { status: "active", uid: s, items: [] }, dataTransferMode: f, observable: { get segmentId() {
    return s;
  }, on: (x, k) => {
    x === "userMessageReceived" && d ? d.add(k) : x === "aiMessageReceived" && i ? i.add(k) : x === "aiServerComponentStreamStarted" && a ? a.add(k) : x === "aiServerComponentStreamed" && u ? u.add(k) : x === "aiMessageStreamStarted" && c ? c.add(k) : x === "aiMessageStreamed" && l ? l.add(k) : x === "aiChunkReceived" && h ? h.add(k) : x === "complete" && g ? g.add(k) : x === "error" && p && p.add(k);
  }, removeListener: (x, k) => {
    x !== "userMessageReceived" ? x !== "aiMessageReceived" ? x !== "aiMessageStreamStarted" ? x !== "aiMessageStreamed" ? x !== "aiChunkReceived" ? x !== "complete" ? x !== "error" || (p == null || p.delete(k)) : g == null || g.delete(k) : h == null || h.delete(k) : l == null || l.delete(k) : c == null || c.delete(k) : i == null || i.delete(k) : d == null || d.delete(k);
  }, destroy: () => y() } };
}, sa = { "data-transfer-mode-not-supported": "Requested data transfer mode is not supported", "no-data-transfer-mode-supported": "Adapter does not support any valid data transfer modes", "connection-error": "Connection error", "invalid-credentials": "Invalid credentials", "invalid-api-key": "Invalid API key", "http-server-side-error": "HTTP server side error", "http-client-side-error": "HTTP client side error", "failed-to-load-content": "Failed to load content", "failed-to-stream-content": "Failed to stream content", "failed-to-stream-server-component": "Failed to stream server component", "failed-to-render-content": "Failed to display content" }, oa = (r) => {
  var y;
  const { aiChatProps: e, adapterToUse: t, prompt: n, composerOptions: s, showException: o, chatSegments: i, initialSegment: a, setChatSegments: u, setComposerStatus: c, setPrompt: l, conversationRef: h } = r, d = z(() => n.length > 0, [n]), g = ee(n);
  g.current = n;
  const p = ee({ chatSegments: i, setChatSegments: u, setComposerStatus: c, showException: o, setPrompt: l }), f = ee({});
  Z(() => {
    p.current = { chatSegments: i, setChatSegments: u, setComposerStatus: c, showException: o, setPrompt: l };
  }, [i, u, c, o, l]);
  const w = ((x, k, S) => z(() => {
    const A = ((L) => {
      const R = [];
      return L.forEach((I) => {
        I.items.forEach((B) => {
          if (B.status === "complete") {
            if (B.participantRole === "assistant") R.push({ role: "assistant", message: B.content });
            else if (B.participantRole === "user") return R.push({ role: "user", message: B.content });
          }
        });
      }), R;
    })(k), E = S === "max" || S === void 0 ? A : S > 0 ? A.slice(-S) : void 0;
    return { aiChatProps: Mn(x), conversationHistory: E };
  }, [x, k, S]))(e, a ? [a, ...i] : i, (y = e.conversationOptions) == null ? void 0 : y.historyPayloadSize);
  return Z(() => {
    f.current = e.events || {};
  }, [e.events]), Ye(() => {
    if (!t) return void ge("No valid adapter was provided to AiChat component");
    if (!d || s != null && s.disableSubmitButton) return;
    c("submitting-prompt");
    const x = n, k = /* @__PURE__ */ new Set(), S = Wt(t) ? t : t.streamServerComponent ? { streamServerComponent: t.streamServerComponent } : { batchText: t.batchText, streamText: t.streamText }, { segment: A, observable: E } = ra(x, S, w);
    if (A.status === "error") return ge("Error occurred while submitting prompt"), o("Error occurred while submitting prompt"), c("typing"), void (g.current === "" && l(x));
    const L = (R) => {
      const I = p.current.chatSegments.map((B) => B.uid !== E.segmentId ? B : { ...B, items: [...B.items, { ...R }] });
      p.current.setChatSegments(I);
    };
    E.on("userMessageReceived", (R) => {
      var I;
      L(R), (I = f.current) != null && I.messageSent && f.current.messageSent({ uid: R.uid, message: R.content });
    }), E.on("aiMessageStreamStarted", (R) => {
      var I;
      L(R), p.current.setComposerStatus("waiting"), g.current === x && p.current.setPrompt(""), k.add(R.uid), (I = f.current) != null && I.messageStreamStarted && f.current.messageStreamStarted({ uid: R.uid });
    }), E.on("aiServerComponentStreamStarted", (R) => {
      var I, B;
      L(R), p.current.setComposerStatus("waiting"), g.current === x && p.current.setPrompt(""), k.add(R.uid), (I = f.current) != null && I.serverComponentStreamStarted && ((B = f.current) == null || B.serverComponentStreamStarted({ uid: R.uid }));
    }), E.on("aiServerComponentStreamed", (R) => {
      var I, B;
      (I = f.current) != null && I.serverComponentRendered && ((B = f.current) == null || B.serverComponentRendered({ uid: R.uid }));
    }), E.on("aiMessageReceived", (R) => {
      var B;
      const I = p.current.chatSegments.map((D) => D.uid !== E.segmentId ? D : { ...D, items: [...D.items, { ...R }] });
      p.current.setChatSegments(I), (B = f.current) != null && B.messageReceived && f.current.messageReceived({ uid: R.uid, message: R.content });
    }), E.on("complete", (R) => {
      p.current.setComposerStatus("typing");
      const I = p.current.chatSegments.map((B) => B.uid !== E.segmentId ? B : { ...R });
      p.current.setChatSegments(I), g.current === x && l(""), k.size > 0 && (k.forEach((B) => {
        requestAnimationFrame(() => {
          var D;
          (D = h.current) == null || D.completeStream(E.segmentId, B);
        });
      }), k.clear());
    }), E.on("aiChunkReceived", ({ messageId: R, chunk: I, serverResponse: B }) => {
      var D;
      (D = h.current) == null || D.streamChunk(A.uid, R, I);
    }), E.on("aiMessageStreamed", (R) => {
      var I, B;
      (I = f.current) != null && I.messageReceived && ((B = f.current) == null || B.messageReceived({ uid: R.uid, message: R.content }));
    }), E.on("error", (R, I) => {
      var H;
      const B = p.current.chatSegments.filter((q) => q.uid !== A.uid), D = sa[R];
      p.current.setChatSegments(B), p.current.setComposerStatus("typing"), p.current.showException(D), g.current === "" && l(x), (H = f.current) != null && H.error && f.current.error({ errorId: R, message: D, errorObject: I });
    }), p.current.setChatSegments([...p.current.chatSegments, A]);
  }, [n, t, w, o, p, s == null ? void 0 : s.disableSubmitButton]);
}, zs = "nlux-comp-welcomeMessage", Ds = (r) => v.jsxs("div", { className: zs, children: [v.jsx(js, { avatar: r.avatar, name: r.name }), v.jsx("div", { className: "nlux-comp-welcomeMessage-personaName", children: r.name }), r.message && v.jsx("div", { className: "nlux-comp-welcomeMessage-text", children: r.message })] }), Yr = ({ children: r }) => v.jsx("div", { className: zs, children: r }), ia = () => {
  const r = z(() => "data:image/png;base64,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", []);
  return v.jsx(Ds, { avatar: r, name: "" });
}, aa = (r) => {
  const { onConversationStarterSelected: e } = r;
  return v.jsx("div", { className: "nlux-comp-conversationStarters", children: r.items.map((t, n) => v.jsxs("button", { className: "nlux-comp-conversationStarter", onClick: () => e(t), children: [v.jsx(la, { icon: t.icon }), v.jsx("span", { className: "nlux-comp-conversationStarter-prompt", children: t.label ?? t.prompt })] }, n)) });
}, la = ({ icon: r }) => r ? typeof r == "string" ? v.jsx("img", { src: r, width: 16 }) : v.jsx("div", { className: "nlux-comp-conversationStarter-icon-container", children: r }) : null, ca = (r) => {
  const { segments: e, personaOptions: t, conversationOptions: n, userDefinedGreeting: s } = r, o = z(() => e.some((l) => l.items.length > 0), [e]), i = z(() => !s && !o && (t == null ? void 0 : t.assistant) === void 0 && (n == null ? void 0 : n.showWelcomeMessage) !== !1, [o, t == null ? void 0 : t.assistant, n == null ? void 0 : n.showWelcomeMessage, s]), a = z(() => !s && !o && (t == null ? void 0 : t.assistant) !== void 0 && (n == null ? void 0 : n.showWelcomeMessage) !== !1, [s, o, t == null ? void 0 : t.assistant, n == null ? void 0 : n.showWelcomeMessage]), u = z(() => !o && (n == null ? void 0 : n.conversationStarters) && (n == null ? void 0 : n.conversationStarters.length) > 0, [o, n == null ? void 0 : n.conversationStarters]), c = z(() => s !== void 0 && (n == null ? void 0 : n.showWelcomeMessage) !== !1, [s]);
  return Z(() => {
    s && (n == null ? void 0 : n.showWelcomeMessage) === !1 && Yt("Configuration conflict: The greeting UI override provided via <AiChatUI.Greeting> will not be shown because conversationOptions.showWelcomeMessage is set to false.");
  }, [n == null ? void 0 : n.showWelcomeMessage, s]), v.jsxs(v.Fragment, { children: [i && v.jsx(ia, {}), a && v.jsx(Ds, { name: t.assistant.name, avatar: t.assistant.avatar, message: t.assistant.tagline }), c && v.jsx(Yr, { children: s }), !i && !a && !c && v.jsx(Yr, { children: null }), v.jsx("div", { className: "nlux-conversationStarters-container", children: u && v.jsx(aa, { items: n.conversationStarters ?? [], onConversationStarterSelected: r.onConversationStarterSelected }) })] });
}, Qr = () => v.jsx("div", { className: "nlux-comp-messageLoader", children: v.jsx("div", { className: "nlux-comp-loaderContainer", children: v.jsx("span", { className: "spinning-loader" }) }) }), Xr = { Loader: (r) => v.jsx(v.Fragment, { children: r.children }), Greeting: (r) => v.jsx(v.Fragment, { children: r.children }) }, Zr = lo({}), ua = function(r) {
  var be, Me, je;
  const { adapter: e, className: t, initialConversation: n, conversationOptions: s, composerOptions: o, displayOptions: i } = r, { themeId: a, colorScheme: u } = i ?? {}, c = ee(null), l = ee(null), h = ee(void 0), d = ee(null), g = ((b, T) => {
    const [j, ne] = ke(), [fe, ue] = ke(), re = ee(j), xe = ee(T);
    return Z(() => {
      const Pe = b.current || void 0;
      Pe !== fe && ue(Pe);
    }), Z(() => {
      fe ? re.current ? re.current.updateConversationContainer(fe) : (re.current = ta(fe, xe.current ?? Ur), ne(re.current)) : re.current && (re.current.destroy(), ne(void 0), re.current = void 0);
    }, [fe]), Z(() => {
      xe.current = T, re.current && re.current.updateProps({ autoScroll: T ?? Ur });
    }, [T]), j;
  })(l, s == null ? void 0 : s.autoScroll), p = z(() => d.current ? di(d.current) : void 0, [d.current]), f = (() => {
    const b = {}, T = /* @__PURE__ */ new Set();
    return z(() => ({ getStreamingDomElement: (j) => {
      if (T.has(j) && T.delete(j), b[j] === void 0) {
        const ne = document.createElement("div");
        ne.setAttribute("nlux-message-id", j), ne.className = "nlux-markdown-container", b[j] = ne;
      }
      return b[j];
    }, deleteStreamingDomElement: (j) => {
      T.add(j), setTimeout(() => {
        T.forEach((ne) => {
          b[ne] && (b[ne].remove(), delete b[ne]);
        }), T.clear();
      }, 1e3);
    } }), []);
  })(), { PrimitivesContextProvider: w } = function(b) {
    var ne, fe, ue, re, xe, Pe, ze, et, tt;
    const [T, j] = ke(b);
    return Z(() => {
      j(b);
    }, [(ne = b == null ? void 0 : b.messageOptions) == null ? void 0 : ne.htmlSanitizer, (fe = b == null ? void 0 : b.messageOptions) == null ? void 0 : fe.syntaxHighlighter, (ue = b == null ? void 0 : b.messageOptions) == null ? void 0 : ue.markdownLinkTarget, (re = b == null ? void 0 : b.messageOptions) == null ? void 0 : re.showCodeBlockCopyButton, (xe = b == null ? void 0 : b.messageOptions) == null ? void 0 : xe.skipStreamingAnimation, (Pe = b == null ? void 0 : b.messageOptions) == null ? void 0 : Pe.streamingAnimationSpeed, (ze = b == null ? void 0 : b.messageOptions) == null ? void 0 : ze.waitTimeBeforeStreamCompletion, (et = b == null ? void 0 : b.messageOptions) == null ? void 0 : et.responseRenderer, (tt = b == null ? void 0 : b.messageOptions) == null ? void 0 : tt.promptRenderer]), { PrimitivesContextProvider: z(() => ({ children: Ze }) => v.jsx(Zr.Provider, { value: T, children: Ze }), [T]), primitivesContext: Zr };
  }({ messageOptions: r.messageOptions }), [y, x] = ke(""), [k, S] = ke("typing"), [A, E] = ke(), [L, R] = ke([]), I = z(() => A ? [A, ...L] : L, [A, L]), B = z(() => ((b) => {
    const T = b;
    if (typeof (T == null ? void 0 : T.create) == "function") return T.create();
    if (typeof (T == null ? void 0 : T.batchText) == "function" || typeof (T == null ? void 0 : T.streamText) == "function" || typeof (T == null ? void 0 : T.streamServerComponent) == "function") return b;
    ge("Unable to determine the type of the adapter! Missing batchText or streamText method.");
  })(e), [e]), D = ((b) => z(() => {
    const T = { minWidth: "280px", minHeight: "280px" };
    return b != null && b.width && (T.width = b.width), b != null && b.height && (T.height = b.height), T;
  }, [b == null ? void 0 : b.width, b == null ? void 0 : b.height]))(i), H = z(() => ((b) => {
    const T = ["nlux-AiChat-root"], j = `nlux-theme-${b.themeId || "nova"}`;
    return T.push(j), b.className && T.push(b.className), T;
  })({ className: t, themeId: a }).join(" "), [t, a]), q = z(() => {
    var b;
    return u !== "auto" && u ? u : typeof globalThis !== void 0 && globalThis.matchMedia && ((b = globalThis.matchMedia("(prefers-color-scheme: dark)")) != null && b.matches) ? "dark" : "light";
  }, [u]), W = Ye((b) => p == null ? void 0 : p.displayException(b), [p]), te = Ye((b) => x(b), [x]), oe = oa({ aiChatProps: r, adapterToUse: B, conversationRef: c, initialSegment: A, chatSegments: L, prompt: y, composerOptions: o, showException: W, setChatSegments: R, setComposerStatus: S, setPrompt: x }), $ = Ye((b) => {
    x(b.prompt), S("submitting-conversation-starter");
  }, [x, S]), _ = ((b, T) => Ye((j) => {
    b && j && (T.current = j.uid, b.handleNewChatSegmentAdded(j.uid, j.div));
  }, [b]))(g, h);
  Z(() => {
    k !== "submitting-conversation-starter" && k !== "submitting-external-message" || oe();
  }, [k, oe]), Z(() => E(n ? { uid: "initial", status: "complete", items: n.map((b, T) => {
    if (b.role === "assistant" || b.role === "user") return b.role === "user" ? typeof b.message != "string" ? void ge(`Invalid message type for item at index ${T} in initial conversation: When role is "user", message must be a string`) : { uid: Be(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: b.message } : { uid: Be(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "assistant", content: b.message, serverResponse: b.serverResponse, dataTransferMode: "batch" };
    ge(`Invalid role for item at index ${T} in initial conversation: Role must be "assistant" or "user"`);
  }).filter((b) => b !== void 0) } : void 0), [n]), Z(() => {
    var b;
    A && ((b = l.current) == null || b.scrollTo({ behavior: "smooth", top: 5e4 }));
  }, [A]);
  const V = ee(void 0);
  Z(() => {
    const b = r.api;
    b !== V.current && (V.current = b, typeof (b == null ? void 0 : b.__setHost) == "function" && b.__setHost({ sendMessage: (T) => {
      x(T), S("submitting-external-message");
    }, resetConversation: () => {
      R([]), E(void 0);
    } }));
  }, [r.api, x, oe]), Z(() => () => {
    var b;
    typeof ((b = V.current) == null ? void 0 : b.__unsetHost) == "function" && V.current.__unsetHost();
  }, []), ((b) => {
    Z(() => {
      var j;
      const T = (j = b.events) == null ? void 0 : j.ready;
      T && T({ aiChatProps: Mn(b) });
    }, []);
  })(r), ((b, T) => {
    var fe;
    const j = ee(), ne = ee();
    Z(() => {
      j.current = () => {
        const ue = [];
        return T.forEach((re) => {
          re.items && re.items.length !== 0 && re.items.forEach((xe) => {
            xe.status === "complete" && (xe.participantRole !== "assistant" ? xe.participantRole === "user" && ue.push({ role: "user", message: xe.content }) : ue.push({ role: "assistant", message: xe.content }));
          });
        }), ue;
      };
    }, [T]), Z(() => {
      var ue;
      ne.current = (ue = b.events) == null ? void 0 : ue.preDestroy;
    }, [(fe = b.events) == null ? void 0 : fe.preDestroy]), Z(() => () => {
      var re;
      const ue = ne.current;
      ue && (ue({ aiChatProps: Mn(b), conversationHistory: ((re = j.current) == null ? void 0 : re.call(j)) ?? [] }), j.current = void 0);
    }, []);
  })(r, I);
  const G = z(() => Kt(Gi), []), ae = ((b) => {
    const T = z(() => b.children ? Array.isArray(b.children) ? b.children : [b.children] : [], [b.children]);
    return { Loader: z(() => T.length === 0 ? v.jsx(Qr, {}) : T.find((j) => j.type === Xr.Loader) || v.jsx(Qr, {}), [T]), Greeting: z(() => {
      if (T.length !== 0) return T.find((j) => j.type === Xr.Greeting);
    }, [T]) };
  })(r), M = y.length > 0, he = I.length === 0 ? "nlux-chatRoom-starting" : "nlux-chatRoom-active";
  return B ? v.jsx(w, { children: v.jsxs("div", { className: H, style: D, "data-color-scheme": q, children: [v.jsx("div", { className: "nlux-comp-exceptionBox", ref: d }), v.jsxs("div", { className: `nlux-chatRoom-container ${he}`, children: [v.jsx("div", { className: "nlux-launchPad-container", children: v.jsx(ca, { segments: I, onConversationStarterSelected: $, conversationOptions: s, personaOptions: r.personaOptions, userDefinedGreeting: ae.Greeting }) }), v.jsx("div", { className: "nlux-conversation-container", ref: l, children: v.jsx(G, { ref: c, segments: I, conversationOptions: r.conversationOptions, personaOptions: r.personaOptions, messageOptions: r.messageOptions, onLastActiveSegmentChange: _, Loader: ae.Loader, markdownContainersController: f }) }), v.jsx("div", { className: "nlux-composer-container", children: v.jsx(Vi, { status: k, prompt: y, hasValidInput: M, placeholder: (be = r.composerOptions) == null ? void 0 : be.placeholder, autoFocus: (Me = r.composerOptions) == null ? void 0 : Me.autoFocus, submitShortcut: (je = r.composerOptions) == null ? void 0 : je.submitShortcut, onChange: te, onSubmit: oe, Loader: ae.Loader }) })] })] }) }) : (Yt("AiChat: No valid adapter provided. The component will not render."), v.jsx(v.Fragment, {}));
};
var Hs = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Wr = Se.createContext && /* @__PURE__ */ Se.createContext(Hs), da = ["attr", "size", "title"];
function pa(r, e) {
  if (r == null) return {};
  var t = ha(r, e), n, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (s = 0; s < o.length; s++)
      n = o[s], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function ha(r, e) {
  if (r == null) return {};
  var t = {};
  for (var n in r)
    if (Object.prototype.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
  return t;
}
function Gt() {
  return Gt = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Gt.apply(this, arguments);
}
function Gr(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Jt(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Gr(Object(t), !0).forEach(function(n) {
      ma(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Gr(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function ma(r, e, t) {
  return e = ga(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function ga(r) {
  var e = fa(r, "string");
  return typeof e == "symbol" ? e : e + "";
}
function fa(r, e) {
  if (typeof r != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function Ns(r) {
  return r && r.map((e, t) => /* @__PURE__ */ Se.createElement(e.tag, Jt({
    key: t
  }, e.attr), Ns(e.child)));
}
function xa(r) {
  return (e) => /* @__PURE__ */ Se.createElement(ka, Gt({
    attr: Jt({}, r.attr)
  }, e), Ns(r.child));
}
function ka(r) {
  var e = (t) => {
    var {
      attr: n,
      size: s,
      title: o
    } = r, i = pa(r, da), a = s || t.size || "1em", u;
    return t.className && (u = t.className), r.className && (u = (u ? u + " " : "") + r.className), /* @__PURE__ */ Se.createElement("svg", Gt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, n, i, {
      className: u,
      style: Jt(Jt({
        color: r.color || t.color
      }, t.style), r.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ Se.createElement("title", null, o), r.children);
  };
  return Wr !== void 0 ? /* @__PURE__ */ Se.createElement(Wr.Consumer, null, (t) => e(t)) : e(Hs);
}
function va(r) {
  return xa({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" }, child: [] }] })(r);
}
const wa = "https://api.dev.langdb.ai";
function ja(r) {
  const t = `${r.serverUrl || wa}/stream`, { agentName: n, agentParams: s } = r, [o, i] = ke(r.messages || []), a = { "Content-Type": "application/json" };
  r.publicId && (a["X-PUBLIC-APPLICATION-ID"] = r.publicId);
  const u = {
    streamText: async (g, p) => {
      var E;
      const f = [
        ...o,
        {
          role: "user",
          message: g
        }
      ];
      if (i(f), !r.publicId) {
        const L = await ((E = r.getAccessToken) == null ? void 0 : E.call(r));
        if (!L) {
          p.error(new Error("Failed to get the user token"));
          return;
        }
        a.Authorization = `Bearer ${L}`;
      }
      const w = f.filter((L) => L.role === "user").map((L) => L.message).pop();
      let y = { input: w };
      if (s && Object.keys(s).length > 0) {
        let L = Object.keys(s);
        L.length === 1 ? y = {
          ...s,
          [L[0]]: w
        } : y = {
          ...s,
          input: w
        };
      }
      const x = await fetch(t, {
        method: "POST",
        body: JSON.stringify({
          agent: n,
          parameters: y,
          messages: f
        }),
        headers: a
      });
      if (x.status !== 200) {
        p.error(new Error("Failed to connect to the server"));
        return;
      }
      if (!x.body)
        return;
      const k = x.body.getReader(), S = new TextDecoder();
      let A = "";
      for (; ; ) {
        const { value: L, done: R } = await k.read();
        if (R)
          break;
        let I = S.decode(L);
        A += I, I && p.next(I);
      }
      i((L) => [
        ...L,
        {
          role: "assistant",
          message: A
        }
      ]), p.complete();
    }
  }, c = r.advancedOptions || {}, l = c.conversationOptions || {
    layout: "bubbles"
  }, h = Object.assign(
    {},
    { colorScheme: "light", themeId: "langdb" },
    c.displayOptions
  );
  console.log(h);
  const d = c.composerOptions || {
    placeholder: "How can i help you today ?"
  };
  return /* @__PURE__ */ v.jsx(
    "main",
    {
      className: "flex flex-1 items-center justify-between",
      style: r.style || {},
      children: /* @__PURE__ */ v.jsx(
        ua,
        {
          adapter: u,
          initialConversation: r.messages,
          personaOptions: r.personaOptions || {
            assistant: {
              name: "LangDB",
              tagline: "Build and Publish AI Agents using SQL",
              avatar: /* @__PURE__ */ v.jsx(ba, {})
            },
            user: {
              name: "User",
              avatar: /* @__PURE__ */ v.jsx(va, {})
            }
          },
          conversationOptions: l,
          displayOptions: h,
          composerOptions: d,
          ...c
        }
      )
    }
  );
}
const ba = () => /* @__PURE__ */ v.jsxs("svg", { viewBox: "0 0 200 200", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
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
] });
function gn(...r) {
  return r.filter(Boolean).join(" ");
}
const za = (r) => {
  const {
    onMinimize: e,
    onMaximize: t,
    btnClassName: n,
    theme: s,
    children: o,
    title: i,
    maximizedPanelClassName: a,
    maximizedPanelStyle: u
  } = r, [c, l] = ke(!1), [h, d] = ke(!1), g = Ye(() => {
    l((p) => !p);
  }, []);
  return /* @__PURE__ */ v.jsxs("div", { className: gn(s || "dark"), children: [
    c && /* @__PURE__ */ v.jsxs(
      "div",
      {
        style: h ? u : {},
        className: gn(
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
                        l(!1), e && e();
                      },
                      children: /* @__PURE__ */ v.jsx(Ca, {})
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    "button",
                    {
                      onClick: () => {
                        d((p) => !p), t && t();
                      },
                      children: h ? /* @__PURE__ */ v.jsx(Aa, {}) : /* @__PURE__ */ v.jsx(Sa, {})
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
    !c && /* @__PURE__ */ v.jsx(
      "button",
      {
        className: gn(
          n || "",
          "fixed text-white bg-primary hover:bg-primary-800 bottom-5 right-5 flex w-[50px] hover:scale-110 scale-100 h-[50px] justify-center items-center p-[10px] rounded-full cursor-pointer shadow-none hover:shadow-xl transition ease-in-out"
        ),
        onClick: g,
        children: /* @__PURE__ */ v.jsx(ya, {})
      }
    )
  ] });
}, ya = () => /* @__PURE__ */ v.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    className: "size-6",
    children: /* @__PURE__ */ v.jsx(
      "path",
      {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      }
    )
  }
), Ca = () => /* @__PURE__ */ v.jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ v.jsx("path", { d: "M19 13H5v-2h14v2z" })
  }
), Sa = () => /* @__PURE__ */ v.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    className: "size-6",
    children: /* @__PURE__ */ v.jsx(
      "path",
      {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
      }
    )
  }
), Aa = () => /* @__PURE__ */ v.jsx(
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
  ya as ChatIcon,
  za as FloatingChatWidget,
  ja as Widget
};
//# sourceMappingURL=index.es.js.map
