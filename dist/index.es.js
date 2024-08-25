import * as Fe from "react";
import it, { createContext as Fa, useRef as he, useState as Ae, useEffect as ie, useMemo as se, useCallback as ye, forwardRef as Tn, useContext as js, lazy as Fc, isValidElement as Sn, Suspense as Uc, createRef as rs, useImperativeHandle as Pn, Component as Vc, useReducer as Gc, Fragment as Wc, createElement as Br } from "react";
var ee = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Yc(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var ss = { exports: {} }, an = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mo;
function Qc() {
  if (mo) return an;
  mo = 1;
  var n = it, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, p, h) {
    var d, f = {}, m = null, y = null;
    h !== void 0 && (m = "" + h), p.key !== void 0 && (m = "" + p.key), p.ref !== void 0 && (y = p.ref);
    for (d in p) r.call(p, d) && !o.hasOwnProperty(d) && (f[d] = p[d]);
    if (c && c.defaultProps) for (d in p = c.defaultProps, p) f[d] === void 0 && (f[d] = p[d]);
    return { $$typeof: e, type: c, key: m, ref: y, props: f, _owner: s.current };
  }
  return an.Fragment = t, an.jsx = a, an.jsxs = a, an;
}
var cn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var go;
function Zc() {
  return go || (go = 1, process.env.NODE_ENV !== "production" && function() {
    var n = it, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), v = Symbol.iterator, S = "@@iterator";
    function T(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var $ = v && _[v] || _[S];
      return typeof $ == "function" ? $ : null;
    }
    var R = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(_) {
      {
        for (var $ = arguments.length, G = new Array($ > 1 ? $ - 1 : 0), re = 1; re < $; re++)
          G[re - 1] = arguments[re];
        A("error", _, G);
      }
    }
    function A(_, $, G) {
      {
        var re = R.ReactDebugCurrentFrame, ge = re.getStackAddendum();
        ge !== "" && ($ += "%s", G = G.concat([ge]));
        var _e = G.map(function(de) {
          return String(de);
        });
        _e.unshift("Warning: " + $), Function.prototype.apply.call(console[_], console, _e);
      }
    }
    var i = !1, u = !1, l = !1, g = !1, k = !1, w;
    w = Symbol.for("react.module.reference");
    function b(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === r || _ === o || k || _ === s || _ === h || _ === d || g || _ === y || i || u || l || typeof _ == "object" && _ !== null && (_.$$typeof === m || _.$$typeof === f || _.$$typeof === a || _.$$typeof === c || _.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === w || _.getModuleId !== void 0));
    }
    function C(_, $, G) {
      var re = _.displayName;
      if (re)
        return re;
      var ge = $.displayName || $.name || "";
      return ge !== "" ? G + "(" + ge + ")" : G;
    }
    function L(_) {
      return _.displayName || "Context";
    }
    function D(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case h:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case c:
            var $ = _;
            return L($) + ".Consumer";
          case a:
            var G = _;
            return L(G._context) + ".Provider";
          case p:
            return C(_, _.render, "ForwardRef");
          case f:
            var re = _.displayName || null;
            return re !== null ? re : D(_.type) || "Memo";
          case m: {
            var ge = _, _e = ge._payload, de = ge._init;
            try {
              return D(de(_e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, j = 0, x, B, N, z, O, M, U;
    function Y() {
    }
    Y.__reactDisabledLog = !0;
    function Q() {
      {
        if (j === 0) {
          x = console.log, B = console.info, N = console.warn, z = console.error, O = console.group, M = console.groupCollapsed, U = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: Y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: _,
            log: _,
            warn: _,
            error: _,
            group: _,
            groupCollapsed: _,
            groupEnd: _
          });
        }
        j++;
      }
    }
    function J() {
      {
        if (j--, j === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, _, {
              value: x
            }),
            info: I({}, _, {
              value: B
            }),
            warn: I({}, _, {
              value: N
            }),
            error: I({}, _, {
              value: z
            }),
            group: I({}, _, {
              value: O
            }),
            groupCollapsed: I({}, _, {
              value: M
            }),
            groupEnd: I({}, _, {
              value: U
            })
          });
        }
        j < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var W = R.ReactCurrentDispatcher, Z;
    function K(_, $, G) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (ge) {
            var re = ge.stack.trim().match(/\n( *(at )?)/);
            Z = re && re[1] || "";
          }
        return `
` + Z + _;
      }
    }
    var ae = !1, ne;
    {
      var Se = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new Se();
    }
    function F(_, $) {
      if (!_ || ae)
        return "";
      {
        var G = ne.get(_);
        if (G !== void 0)
          return G;
      }
      var re;
      ae = !0;
      var ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _e;
      _e = W.current, W.current = null, Q();
      try {
        if ($) {
          var de = function() {
            throw Error();
          };
          if (Object.defineProperty(de.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(de, []);
            } catch (Ge) {
              re = Ge;
            }
            Reflect.construct(_, [], de);
          } else {
            try {
              de.call();
            } catch (Ge) {
              re = Ge;
            }
            _.call(de.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ge) {
            re = Ge;
          }
          _();
        }
      } catch (Ge) {
        if (Ge && re && typeof Ge.stack == "string") {
          for (var ce = Ge.stack.split(`
`), Ue = re.stack.split(`
`), Oe = ce.length - 1, Me = Ue.length - 1; Oe >= 1 && Me >= 0 && ce[Oe] !== Ue[Me]; )
            Me--;
          for (; Oe >= 1 && Me >= 0; Oe--, Me--)
            if (ce[Oe] !== Ue[Me]) {
              if (Oe !== 1 || Me !== 1)
                do
                  if (Oe--, Me--, Me < 0 || ce[Oe] !== Ue[Me]) {
                    var ot = `
` + ce[Oe].replace(" at new ", " at ");
                    return _.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", _.displayName)), typeof _ == "function" && ne.set(_, ot), ot;
                  }
                while (Oe >= 1 && Me >= 0);
              break;
            }
        }
      } finally {
        ae = !1, W.current = _e, J(), Error.prepareStackTrace = ge;
      }
      var Ht = _ ? _.displayName || _.name : "", Et = Ht ? K(Ht) : "";
      return typeof _ == "function" && ne.set(_, Et), Et;
    }
    function Re(_, $, G) {
      return F(_, !1);
    }
    function st(_) {
      var $ = _.prototype;
      return !!($ && $.isReactComponent);
    }
    function Ze(_, $, G) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return F(_, st(_));
      if (typeof _ == "string")
        return K(_);
      switch (_) {
        case h:
          return K("Suspense");
        case d:
          return K("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case p:
            return Re(_.render);
          case f:
            return Ze(_.type, $, G);
          case m: {
            var re = _, ge = re._payload, _e = re._init;
            try {
              return Ze(_e(ge), $, G);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, V = {}, te = R.ReactDebugCurrentFrame;
    function le(_) {
      if (_) {
        var $ = _._owner, G = Ze(_.type, _._source, $ ? $.type : null);
        te.setExtraStackFrame(G);
      } else
        te.setExtraStackFrame(null);
    }
    function Ee(_, $, G, re, ge) {
      {
        var _e = Function.call.bind(q);
        for (var de in _)
          if (_e(_, de)) {
            var ce = void 0;
            try {
              if (typeof _[de] != "function") {
                var Ue = Error((re || "React class") + ": " + G + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ue.name = "Invariant Violation", Ue;
              }
              ce = _[de]($, de, re, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Oe) {
              ce = Oe;
            }
            ce && !(ce instanceof Error) && (le(ge), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", re || "React class", G, de, typeof ce), le(null)), ce instanceof Error && !(ce.message in V) && (V[ce.message] = !0, le(ge), E("Failed %s type: %s", G, ce.message), le(null));
          }
      }
    }
    var Te = Array.isArray;
    function pe(_) {
      return Te(_);
    }
    function je(_) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, G = $ && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return G;
      }
    }
    function H(_) {
      try {
        return X(_), !1;
      } catch {
        return !0;
      }
    }
    function X(_) {
      return "" + _;
    }
    function me(_) {
      if (H(_))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", je(_)), X(_);
    }
    var fe = R.ReactCurrentOwner, Be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ct, bt, At;
    At = {};
    function Jt(_) {
      if (q.call(_, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(_, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function en(_) {
      if (q.call(_, "key")) {
        var $ = Object.getOwnPropertyDescriptor(_, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function Nt(_, $) {
      if (typeof _.ref == "string" && fe.current && $ && fe.current.stateNode !== $) {
        var G = D(fe.current.type);
        At[G] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(fe.current.type), _.ref), At[G] = !0);
      }
    }
    function tn(_, $) {
      {
        var G = function() {
          ct || (ct = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        G.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function nn(_, $) {
      {
        var G = function() {
          bt || (bt = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        G.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var rn = function(_, $, G, re, ge, _e, de) {
      var ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: _,
        key: $,
        ref: G,
        props: de,
        // Record the component responsible for creating this element.
        _owner: _e
      };
      return ce._store = {}, Object.defineProperty(ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.defineProperty(ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ge
      }), Object.freeze && (Object.freeze(ce.props), Object.freeze(ce)), ce;
    };
    function sn(_, $, G, re, ge) {
      {
        var _e, de = {}, ce = null, Ue = null;
        G !== void 0 && (me(G), ce = "" + G), en($) && (me($.key), ce = "" + $.key), Jt($) && (Ue = $.ref, Nt($, ge));
        for (_e in $)
          q.call($, _e) && !Be.hasOwnProperty(_e) && (de[_e] = $[_e]);
        if (_ && _.defaultProps) {
          var Oe = _.defaultProps;
          for (_e in Oe)
            de[_e] === void 0 && (de[_e] = Oe[_e]);
        }
        if (ce || Ue) {
          var Me = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          ce && tn(de, Me), Ue && nn(de, Me);
        }
        return rn(_, ce, Ue, ge, re, fe.current, de);
      }
    }
    var on = R.ReactCurrentOwner, io = R.ReactDebugCurrentFrame;
    function $t(_) {
      if (_) {
        var $ = _._owner, G = Ze(_.type, _._source, $ ? $.type : null);
        io.setExtraStackFrame(G);
      } else
        io.setExtraStackFrame(null);
    }
    var Or;
    Or = !1;
    function jr(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === e;
    }
    function co() {
      {
        if (on.current) {
          var _ = D(on.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function Rc(_) {
      return "";
    }
    var uo = {};
    function Oc(_) {
      {
        var $ = co();
        if (!$) {
          var G = typeof _ == "string" ? _ : _.displayName || _.name;
          G && ($ = `

Check the top-level render call using <` + G + ">.");
        }
        return $;
      }
    }
    function lo(_, $) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var G = Oc($);
        if (uo[G])
          return;
        uo[G] = !0;
        var re = "";
        _ && _._owner && _._owner !== on.current && (re = " It was passed a child from " + D(_._owner.type) + "."), $t(_), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, re), $t(null);
      }
    }
    function ho(_, $) {
      {
        if (typeof _ != "object")
          return;
        if (pe(_))
          for (var G = 0; G < _.length; G++) {
            var re = _[G];
            jr(re) && lo(re, $);
          }
        else if (jr(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var ge = T(_);
          if (typeof ge == "function" && ge !== _.entries)
            for (var _e = ge.call(_), de; !(de = _e.next()).done; )
              jr(de.value) && lo(de.value, $);
        }
      }
    }
    function jc(_) {
      {
        var $ = _.type;
        if ($ == null || typeof $ == "string")
          return;
        var G;
        if (typeof $ == "function")
          G = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === f))
          G = $.propTypes;
        else
          return;
        if (G) {
          var re = D($);
          Ee(G, _.props, "prop", re, _);
        } else if ($.PropTypes !== void 0 && !Or) {
          Or = !0;
          var ge = D($);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ge || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mc(_) {
      {
        for (var $ = Object.keys(_.props), G = 0; G < $.length; G++) {
          var re = $[G];
          if (re !== "children" && re !== "key") {
            $t(_), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", re), $t(null);
            break;
          }
        }
        _.ref !== null && ($t(_), E("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    var po = {};
    function fo(_, $, G, re, ge, _e) {
      {
        var de = b(_);
        if (!de) {
          var ce = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ue = Rc();
          Ue ? ce += Ue : ce += co();
          var Oe;
          _ === null ? Oe = "null" : pe(_) ? Oe = "array" : _ !== void 0 && _.$$typeof === e ? (Oe = "<" + (D(_.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : Oe = typeof _, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Oe, ce);
        }
        var Me = sn(_, $, G, ge, _e);
        if (Me == null)
          return Me;
        if (de) {
          var ot = $.children;
          if (ot !== void 0)
            if (re)
              if (pe(ot)) {
                for (var Ht = 0; Ht < ot.length; Ht++)
                  ho(ot[Ht], _);
                Object.freeze && Object.freeze(ot);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ho(ot, _);
        }
        if (q.call($, "key")) {
          var Et = D(_), Ge = Object.keys($).filter(function(Hc) {
            return Hc !== "key";
          }), Mr = Ge.length > 0 ? "{key: someKey, " + Ge.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!po[Et + Mr]) {
            var $c = Ge.length > 0 ? "{" + Ge.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Mr, Et, $c, Et), po[Et + Mr] = !0;
          }
        }
        return _ === r ? Mc(Me) : jc(Me), Me;
      }
    }
    function Bc(_, $, G) {
      return fo(_, $, G, !0);
    }
    function qc(_, $, G) {
      return fo(_, $, G, !1);
    }
    var zc = qc, Nc = Bc;
    cn.Fragment = r, cn.jsx = zc, cn.jsxs = Nc;
  }()), cn;
}
process.env.NODE_ENV === "production" ? ss.exports = Qc() : ss.exports = Zc();
var P = ss.exports, Xc = Object.defineProperty, qn = (n, e, t) => ((r, s, o) => s in r ? Xc(r, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[s] = o)(n, typeof e != "symbol" ? e + "" : e, t);
class St extends Error {
  constructor(e = {}) {
    super(e.message), qn(this, "exceptionId"), qn(this, "message"), qn(this, "source"), qn(this, "type"), this.message = e.message ?? "", this.source = e.source, this.type = this.constructor.name, this.exceptionId = e.exceptionId;
  }
}
class Tt extends St {
}
class or extends St {
}
const oe = (n) => {
  typeof n != "string" ? n && typeof n.toString == "function" ? console.warn(`[nlux] ${n.toString()}`) : console.warn("[nlux]") : console.warn(`[nlux] ${n}`);
}, bo = [], os = (n) => {
  bo.includes(n) || (bo.push(n), oe(n));
}, Ua = class tr {
  static register(e) {
    const t = e.__compId;
    t ? tr.componentDefs.get(t) === void 0 && (e.__renderer && e.__updater ? tr.componentDefs.set(t, { id: t, model: e, render: e.__renderer, update: e.__updater }) : oe(`Component with id "${t}" missing renderer or updater`)) : oe("Component definition missing valid id");
  }
  static retrieve(e) {
    const t = tr.componentDefs.get(e);
    if (t) return t;
    oe(`Component with id "${e}" not registered`);
  }
};
Ua.componentDefs = /* @__PURE__ */ new Map();
let Va = Ua;
btoa("sectionsRegistered") + "";
const mt = (n) => {
  const e = requestAnimationFrame(() => {
    n();
  });
  return () => {
    cancelAnimationFrame(e);
  };
}, _n = (n) => {
  n.replaceChildren();
}, ut = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (n) => {
  const e = 16 * Math.random() | 0;
  return (n == "x" ? e : 3 & e | 8).toString(16);
});
class at {
  constructor(e, t) {
    this.subComponentElementIds = /* @__PURE__ */ new Map(), this.subComponents = /* @__PURE__ */ new Map(), this.__context = null, this.__destroyed = !1, this.__status = "unmounted", this.actionsOnDomReady = [], this.compEventGetter = (a) => {
      if (this.destroyed) return () => {
      };
      const c = this.rendererEventListeners.get(a);
      if (!c) throw new St({ source: this.constructor.name, message: `Unable to call renderer event "${a}" because no matching event listener was found. Make sure that the event listener is registered using @CompEventListener() decorator in the component model class, and use class methods instead of arrow function attributes.` });
      return c;
    };
    const r = Object.getPrototypeOf(this).constructor.__compId;
    if (!r) throw new Tt({ source: this.constructor.name, message: "Unable to instantiate component: missing compId in implementation. Component should be annotated using @Model() to set compId before iy can be instantiated." });
    if (this.def = Va.retrieve(r) ?? null, !this.def) throw new Tt({ source: this.constructor.name, message: `Unable to instantiate component "${r}" because it's not registered. Component should be registered using CompRegistry.register(ComponentClass) before instantiating a component.` });
    this.__instanceId = ut(), this.__destroyed = !1, this.__context = e, this.renderedDom = null, this.renderingRoot = null, this.props = t;
    const s = t ? Object.entries(t) : [];
    this.elementProps = new Map(s), this.rendererEventListeners = /* @__PURE__ */ new Map();
    const o = this.constructor.__compEventListeners;
    o && o.forEach((a, c) => {
      a.forEach((p) => {
        const h = Object.getPrototypeOf(this)[p];
        typeof h == "function" ? this.addRendererEventListener(c, h.bind(this)) : oe(`Unable to set event listener "${c}" because method "${p}" cannot be found on component "${this.constructor.name} at runtime!"`);
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
    if (!this.__context) throw new Tt({ source: this.constructor.name, message: "Unable to get context because it's not set" });
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
    var a;
    if (!this.def) return;
    if (this.destroyed) return void oe(`Unable to render component "${(a = this.def) == null ? void 0 : a.id}" because it is already destroyed`);
    if (this.rendered || this.renderedDom) return void oe(`Unable to render component "${this.def.id}" because it is already rendered`);
    const r = document.createDocumentFragment(), s = Object.getPrototypeOf(this).constructor.__compId, o = this.executeRenderer(r);
    if (!o) throw new St({ source: this.constructor.name, message: `Unable to render component "${s}" because renderer returned null` });
    this.renderedDom = o;
    for (const [, c] of this.subComponents) {
      const p = this.getSubComponentPortal(c.id);
      p && this.mountSubComponentToPortal(c.id, p);
    }
    mt(() => {
      this.destroyed || (t ? e.insertBefore(r, t) : e.append(r), this.renderingRoot = e);
    });
  }
  updateSubComponent(e, t, r) {
    this.throwIfDestroyed();
    const s = this.subComponents.get(e);
    s && !s.destroyed && s.setProp(t, r);
  }
  addSubComponent(e, t, r) {
    if (this.throwIfDestroyed(), this.subComponents.has(e)) throw new Tt({ source: this.constructor.name, message: `Unable to add sub-component "${e}" because it already exists` });
    if (this.subComponents.set(e, t), r && this.subComponentElementIds.set(e, r), this.renderedDom) {
      const s = this.getSubComponentPortal(e);
      s && this.mountSubComponentToPortal(e, s);
    }
  }
  executeDomAction(e, ...t) {
    if (this.throwIfDestroyed(), !this.renderedDom) return void this.actionsOnDomReady.push(() => this.executeDomAction(e, ...t));
    if (!this.renderingRoot) throw new St({ source: this.constructor.name, message: "Unable to execute DOM action because renderingRoot is not set" });
    const r = this.renderedDom.actions[e];
    if (!r) throw new St({ source: this.constructor.name, message: `Unable to execute DOM action "${String(e)}" because it does not exist` });
    return mt(() => r(...t));
  }
  executeRenderer(e) {
    var s;
    const t = (s = this.def) == null ? void 0 : s.render;
    if (!t) return null;
    if (this.renderingRoot) throw new St({ source: this.constructor.name, message: "Unable to render component because renderingRoot is already set" });
    const r = t({ appendToRoot: (o) => {
      e.append(o), this.runDomActionsQueue();
    }, compEvent: this.compEventGetter, props: this.rendererProps, context: this.context });
    return r && (this.renderingRoot = e), r;
  }
  removeSubComponent(e) {
    this.throwIfDestroyed(), mt(() => {
      const t = this.subComponents.get(e);
      t && (t.renderingRoot = null, t.destroy(), this.subComponents.delete(e));
    });
  }
  runDomActionsQueue() {
    if (this.actionsOnDomReady.length > 0 && this.rendered) {
      const e = this.actionsOnDomReady;
      this.actionsOnDomReady = [];
      for (const t of e) mt(() => t());
    }
  }
  setProp(e, t) {
    this.destroyed ? oe(`Unable to set prop "${String(e)}" because component "${this.constructor.name}" is destroyed`) : this.elementProps.has(e) ? (this.schedulePropUpdate(e, this.elementProps.get(e), t), this.props = Object.freeze(Object.fromEntries(this.elementProps)), this.elementProps.set(e, t)) : oe(`Unable to set prop "${String(e)}" because it does not exist in the component props`);
  }
  throwIfDestroyed() {
    if (this.__destroyed) throw new Tt({ source: this.constructor.name, message: "Unable to call method on destroyed component" });
  }
  addRendererEventListener(e, t) {
    if (this.throwIfDestroyed(), this.rendererEventListeners.has(e)) throw new Tt({ source: this.constructor.name, message: `Unable to add event listener to rendererEvents "${e}" because it already exists` });
    this.rendererEventListeners.set(e, t);
  }
  destroyComponent(e = !1) {
    if (this.throwIfDestroyed(), this.subComponents.forEach((t) => {
      t.destroy();
    }), this.renderedDom) {
      this.renderedDom.elements && (this.renderedDom.elements = void 0), this.renderedDom.actions && (this.renderedDom.actions = void 0), this.renderedDom.onDestroy && this.renderedDom.onDestroy();
      const t = this.renderingRoot;
      mt(() => {
        var r;
        if (t) if (t instanceof DocumentFragment) for (; t.firstChild; ) t.removeChild(t.firstChild);
        else e ? (r = t.parentElement) == null || r.removeChild(t) : _n(t);
      }), this.renderedDom = null, this.renderingRoot = null;
    }
    this.__destroyed = !0, this.__context = null, this.props = void 0, this.elementProps.clear(), this.rendererEventListeners.clear(), this.subComponents.clear();
  }
  getSubComponentPortal(e) {
    var o;
    const t = this.subComponents.get(e), r = this.subComponentElementIds.get(e);
    if (!t || !r) return null;
    const s = ((o = this.renderedDom) == null ? void 0 : o.elements)[r];
    return s instanceof HTMLElement ? s : null;
  }
  mountSubComponentToPortal(e, t) {
    const r = this.subComponents.get(e);
    r == null || r.render(t);
  }
  schedulePropUpdate(e, t, r) {
    var c;
    if (!this.renderedDom || !((c = this.def) != null && c.update)) return;
    const s = this.renderedDom, o = this.renderingRoot, a = this.def.update;
    o && mt(() => {
      a({ propName: e, currentValue: t, newValue: r, dom: { root: o, elements: s.elements, actions: s.actions }, updateSubComponent: this.updateSubComponent });
    });
  }
}
at.__compEventListeners = null, at.__compId = null, at.__renderer = null, at.__updater = null;
const Ct = (n, e, t) => (r) => {
  r.__compId = n, r.__renderer = e, r.__updater = t;
}, dt = (n) => (e, t) => {
  const r = e;
  if (typeof r.constructor != "function") throw new Tt({ source: "CallbackFor", message: "@CallbackFor can only be used on methods of a class!" });
  r.constructor.hasOwnProperty("__compEventListeners") && r.constructor.__compEventListeners !== null || (r.constructor.__compEventListeners = /* @__PURE__ */ new Map());
  const s = r.constructor.__compEventListeners, o = s.get(n);
  o ? o.push(t) : s.set(n, [t]);
};
function Kc() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
let Bt = { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
function vo(n) {
  Bt = n;
}
var Jc = Object.defineProperty, Ga = (n, e, t) => ((r, s, o) => s in r ? Jc(r, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[s] = o)(n, typeof e != "symbol" ? e + "" : e, t);
let mn = class {
  constructor(e) {
    Ga(this, "options"), this.options = e || Bt;
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
Ga(mn, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]));
const Wa = /[&<>"']/, eu = new RegExp(Wa.source, "g"), Ya = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, tu = new RegExp(Ya.source, "g"), nu = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, yo = (n) => nu[n];
function Ke(n, e) {
  if (e) {
    if (Wa.test(n)) return n.replace(eu, yo);
  } else if (Ya.test(n)) return n.replace(tu, yo);
  return n;
}
const ru = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function su(n) {
  return n.replace(ru, (e, t) => (t = t.toLowerCase()) === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "");
}
const ou = /(^|[^\[])\^/g;
function ke(n, e) {
  let t = typeof n == "string" ? n : n.source;
  e = e || "";
  const r = { replace: (s, o) => {
    let a = typeof o == "string" ? o : o.source;
    return a = a.replace(ou, "$1"), t = t.replace(s, a), r;
  }, getRegex: () => new RegExp(t, e) };
  return r;
}
function wo(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const gn = { exec: () => null };
function ko(n, e) {
  const t = n.replace(/\|/g, (s, o, a) => {
    let c = !1, p = o;
    for (; --p >= 0 && a[p] === "\\"; ) c = !c;
    return c ? "|" : " |";
  }).split(/ \|/);
  let r = 0;
  if (t[0].trim() || t.shift(), t.length > 0 && !t[t.length - 1].trim() && t.pop(), e) if (t.length > e) t.splice(e);
  else for (; t.length < e; ) t.push("");
  for (; r < t.length; r++) t[r] = t[r].trim().replace(/\\\|/g, "|");
  return t;
}
function zn(n, e, t) {
  const r = n.length;
  if (r === 0) return "";
  let s = 0;
  for (; s < r; ) {
    const o = n.charAt(r - s - 1);
    if (o !== e || t) {
      if (o === e || !t) break;
      s++;
    } else s++;
  }
  return n.slice(0, r - s);
}
const In = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Qa = /(?:[*+-]|\d{1,9}[.)])/, Za = ke(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Qa).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Ms = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Bs = /(?!\s*\])(?:\\.|[^\[\]\\])+/, au = ke(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Bs).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), iu = ke(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Qa).getRegex(), Sr = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", qs = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, cu = ke("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", qs).replace("tag", Sr).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), xo = ke(Ms).replace("hr", In).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Sr).getRegex(), zs = { blockquote: ke(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", xo).getRegex(), code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, def: au, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hr: In, html: cu, lheading: Za, list: iu, newline: /^(?: *(?:\n|$))+/, paragraph: xo, table: gn, text: /^[^\n]+/ }, So = ke("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", In).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Sr).getRegex(), uu = { ...zs, table: So, paragraph: ke(Ms).replace("hr", In).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", So).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Sr).getRegex() }, du = { ...zs, html: ke(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", qs).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: gn, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: ke(Ms).replace("hr", In).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Za).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Xa = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ka = /^( {2,}|\\)\n(?!\s*$)/, Dn = "\\p{P}\\p{S}", lu = ke(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Dn).getRegex(), hu = ke(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Dn).getRegex(), pu = ke("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Dn).getRegex(), fu = ke("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Dn).getRegex(), mu = ke(/\\([punct])/, "gu").replace(/punct/g, Dn).getRegex(), gu = ke(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), bu = ke(qs).replace("(?:-->|$)", "-->").getRegex(), vu = ke("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", bu).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ar = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, yu = ke(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", ar).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), _o = ke(/^!?\[(label)\]\[(ref)\]/).replace("label", ar).replace("ref", Bs).getRegex(), Co = ke(/^!?\[(ref)\](?:\[\])?/).replace("ref", Bs).getRegex(), Ns = { _backpedal: gn, anyPunctuation: mu, autolink: gu, blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, br: Ka, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, del: gn, emStrongLDelim: hu, emStrongRDelimAst: pu, emStrongRDelimUnd: fu, escape: Xa, link: yu, nolink: Co, punctuation: lu, reflink: _o, reflinkSearch: ke("reflink|nolink(?!\\()", "g").replace("reflink", _o).replace("nolink", Co).getRegex(), tag: vu, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, url: gn }, wu = { ...Ns, link: ke(/^!?\[(label)\]\((.*?)\)/).replace("label", ar).getRegex(), reflink: ke(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ar).getRegex() }, as = { ...Ns, escape: ke(Xa).replace("])", "~|])").getRegex(), url: ke(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, ku = { ...as, br: ke(Ka).replace("{2,}", "*").getRegex(), text: ke(as.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Nn = { normal: zs, gfm: uu, pedantic: du }, un = { normal: Ns, gfm: as, breaks: ku, pedantic: wu };
var xu = Object.defineProperty, qr = (n, e, t) => ((r, s, o) => s in r ? xu(r, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[s] = o)(n, typeof e != "symbol" ? e + "" : e, t);
function Ao(n, e, t, r) {
  const s = e.href, o = e.title ? Ke(e.title) : null, a = n[1].replace(/\\([\[\]])/g, "$1");
  if (n[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const c = { type: "link", raw: t, href: s, title: o, text: a, tokens: r.inlineTokens(a) };
    return r.state.inLink = !1, c;
  }
  return { type: "image", raw: t, href: s, title: o, text: Ke(a) };
}
let ir = class {
  constructor(e) {
    qr(this, "lexer"), qr(this, "options"), qr(this, "rules"), this.options = e || Bt;
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let r, s;
      return t[2] === "@" ? (r = Ke(t[1]), s = "mailto:" + r) : (r = Ke(t[1]), s = r), { type: "link", raw: t[0], text: r, href: s, tokens: [{ type: "text", raw: r, text: r }] };
    }
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let r = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      r = zn(r.replace(/^ *>[ \t]?/gm, ""), `
`);
      const s = this.lexer.state.top;
      this.lexer.state.top = !0;
      const o = this.lexer.blockTokens(r);
      return this.lexer.state.top = s, { type: "blockquote", raw: t[0], tokens: o, text: r };
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
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? r : zn(r, `
`) };
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let r = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(r), o = /^ /.test(r) && / $/.test(r);
      return s && o && (r = r.substring(1, r.length - 1)), r = Ke(r, !0), { type: "codespan", raw: t[0], text: r };
    }
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const r = t[1].toLowerCase().replace(/\s+/g, " "), s = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", o = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: r, raw: t[0], href: s, title: o };
    }
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t) return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
  }
  emStrong(e, t, r = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (s && !(s[3] && r.match(/[\p{L}\p{N}]/u)) && (!(s[1] || s[2]) || !r || this.rules.inline.punctuation.exec(r))) {
      const o = [...s[0]].length - 1;
      let a, c, p = o, h = 0;
      const d = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, t = t.slice(-1 * e.length + o); (s = d.exec(t)) != null; ) {
        if (a = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !a) continue;
        if (c = [...a].length, s[3] || s[4]) {
          p += c;
          continue;
        }
        if ((s[5] || s[6]) && o % 3 && !((o + c) % 3)) {
          h += c;
          continue;
        }
        if (p -= c, p > 0) continue;
        c = Math.min(c, c + p + h);
        const f = [...s[0]][0].length, m = e.slice(0, o + s.index + f + c);
        if (Math.min(o, c) % 2) {
          const v = m.slice(1, -1);
          return { type: "em", raw: m, text: v, tokens: this.lexer.inlineTokens(v) };
        }
        const y = m.slice(2, -2);
        return { type: "strong", raw: m, text: y, tokens: this.lexer.inlineTokens(y) };
      }
    }
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: Ke(t[1]) };
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const r = t[0], s = function(o, a) {
        const c = o.match(/^(\s+)(?:```)/);
        if (c === null) return a;
        const p = c[1];
        return a.split(`
`).map((h) => {
          const d = h.match(/^\s+/);
          if (d === null) return h;
          const [f] = d;
          return f.length >= p.length ? h.slice(p.length) : h;
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
        const s = zn(r, "#");
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
      return r = this.lexer.state.inRawBlock ? t[0] : Ke(t[0]), { type: "text", raw: t[0], text: r };
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
        const a = zn(r.slice(0, -1), "\\");
        if ((r.length - a.length) % 2 == 0) return;
      } else {
        const a = function(c, p) {
          if (c.indexOf(p[1]) === -1) return -1;
          let h = 0;
          for (let d = 0; d < c.length; d++) if (c[d] === "\\") d++;
          else if (c[d] === p[0]) h++;
          else if (c[d] === p[1] && (h--, h < 0)) return d;
          return -1;
        }(t[2], "()");
        if (a > -1) {
          const c = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + a;
          t[2] = t[2].substring(0, a), t[0] = t[0].substring(0, c).trim(), t[3] = "";
        }
      }
      let s = t[2], o = "";
      if (this.options.pedantic) {
        const a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
        a && (s = a[1], o = a[3]);
      } else o = t[3] ? t[3].slice(1, -1) : "";
      return s = s.trim(), /^</.test(s) && (s = this.options.pedantic && !/>$/.test(r) ? s.slice(1) : s.slice(1, -1)), Ao(t, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer);
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let r = t[1].trim();
      const s = r.length > 1, o = { type: "list", raw: "", ordered: s, start: s ? +r.slice(0, -1) : "", loose: !1, items: [] };
      r = s ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = s ? r : "[*+-]");
      const a = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let c = "", p = "", h = !1;
      for (; e; ) {
        let d = !1;
        if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
        c = t[0], e = e.substring(c.length);
        let f = t[2].split(`
`, 1)[0].replace(/^\t+/, (R) => " ".repeat(3 * R.length)), m = e.split(`
`, 1)[0], y = 0;
        this.options.pedantic ? (y = 2, p = f.trimStart()) : (y = t[2].search(/[^ ]/), y = y > 4 ? 1 : y, p = f.slice(y), y += t[1].length);
        let v = !1;
        if (!f && /^ *$/.test(m) && (c += m + `
`, e = e.substring(m.length + 1), d = !0), !d) {
          const R = new RegExp(`^ {0,${Math.min(3, y - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), E = new RegExp(`^ {0,${Math.min(3, y - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), A = new RegExp(`^ {0,${Math.min(3, y - 1)}}(?:\`\`\`|~~~)`), i = new RegExp(`^ {0,${Math.min(3, y - 1)}}#`);
          for (; e; ) {
            const u = e.split(`
`, 1)[0];
            if (m = u, this.options.pedantic && (m = m.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), A.test(m) || i.test(m) || R.test(m) || E.test(e)) break;
            if (m.search(/[^ ]/) >= y || !m.trim()) p += `
` + m.slice(y);
            else {
              if (v || f.search(/[^ ]/) >= 4 || A.test(f) || i.test(f) || E.test(f)) break;
              p += `
` + m;
            }
            v || m.trim() || (v = !0), c += u + `
`, e = e.substring(u.length + 1), f = m.slice(y);
          }
        }
        o.loose || (h ? o.loose = !0 : /\n *\n *$/.test(c) && (h = !0));
        let S, T = null;
        this.options.gfm && (T = /^\[[ xX]\] /.exec(p), T && (S = T[0] !== "[ ] ", p = p.replace(/^\[[ xX]\] +/, ""))), o.items.push({ type: "list_item", raw: c, task: !!T, checked: S, loose: !1, text: p, tokens: [] }), o.raw += c;
      }
      o.items[o.items.length - 1].raw = c.trimEnd(), o.items[o.items.length - 1].text = p.trimEnd(), o.raw = o.raw.trimEnd();
      for (let d = 0; d < o.items.length; d++) if (this.lexer.state.top = !1, o.items[d].tokens = this.lexer.blockTokens(o.items[d].text, []), !o.loose) {
        const f = o.items[d].tokens.filter((y) => y.type === "space"), m = f.length > 0 && f.some((y) => /\n.*\n/.test(y.raw));
        o.loose = m;
      }
      if (o.loose) for (let d = 0; d < o.items.length; d++) o.items[d].loose = !0;
      return o;
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
        const o = r[0].charAt(0);
        return { type: "text", raw: o, text: o };
      }
      return Ao(r, s, r[0], this.lexer);
    }
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2])) return;
    const r = ko(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), o = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (r.length === s.length) {
      for (const c of s) /^ *-+: *$/.test(c) ? a.align.push("right") : /^ *:-+: *$/.test(c) ? a.align.push("center") : /^ *:-+ *$/.test(c) ? a.align.push("left") : a.align.push(null);
      for (const c of r) a.header.push({ text: c, tokens: this.lexer.inline(c) });
      for (const c of o) a.rows.push(ko(c, a.header.length).map((p) => ({ text: p, tokens: this.lexer.inline(p) })));
      return a;
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
      let s, o;
      if (t[2] === "@") s = Ke(t[0]), o = "mailto:" + s;
      else {
        let a;
        do
          a = t[0], t[0] = ((r = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : r[0]) ?? "";
        while (a !== t[0]);
        s = Ke(t[0]), o = t[1] === "www." ? "http://" + t[0] : t[0];
      }
      return { type: "link", raw: t[0], text: s, href: o, tokens: [{ type: "text", raw: s, text: s }] };
    }
  }
};
var Su = Object.defineProperty, dn = (n, e, t) => ((r, s, o) => s in r ? Su(r, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[s] = o)(n, typeof e != "symbol" ? e + "" : e, t);
let Vt = class is {
  constructor(e) {
    dn(this, "options"), dn(this, "state"), dn(this, "tokens"), dn(this, "inlineQueue"), dn(this, "tokenizer"), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Bt, this.options.tokenizer = this.options.tokenizer || new ir(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    const t = { block: Nn.normal, inline: un.normal };
    this.options.pedantic ? (t.block = Nn.pedantic, t.inline = un.pedantic) : this.options.gfm && (t.block = Nn.gfm, this.options.breaks ? t.inline = un.breaks : t.inline = un.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: Nn, inline: un };
  }
  static lex(e, t) {
    return new is(t).lex(e);
  }
  static lexInline(e, t) {
    return new is(t).inlineTokens(e);
  }
  blockTokens(e, t = []) {
    let r, s, o, a;
    for (e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, (c, p, h) => p + "    ".repeat(h.length)); e; ) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((c) => !!(r = c.call({ lexer: this }, e, t)) && (e = e.substring(r.raw.length), t.push(r), !0)))) if (r = this.tokenizer.space(e)) e = e.substring(r.raw.length), r.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
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
      if (o = e, this.options.extensions && this.options.extensions.startBlock) {
        let c = 1 / 0;
        const p = e.slice(1);
        let h;
        this.options.extensions.startBlock.forEach((d) => {
          h = d.call({ lexer: this }, p), typeof h == "number" && h >= 0 && (c = Math.min(c, h));
        }), c < 1 / 0 && c >= 0 && (o = e.substring(0, c + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(o))) s = t[t.length - 1], a && s.type === "paragraph" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(r), a = o.length !== e.length, e = e.substring(r.raw.length);
      else if (r = this.tokenizer.text(e)) e = e.substring(r.raw.length), s = t[t.length - 1], s && s.type === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(r);
      else if (e) {
        const c = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(c);
          break;
        }
        throw new Error(c);
      }
    }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let r, s, o, a, c, p, h = e;
    if (this.tokens.links) {
      const d = Object.keys(this.tokens.links);
      if (d.length > 0) for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(h)) != null; ) d.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (h = h.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + h.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(h)) != null; ) h = h.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + h.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(h)) != null; ) h = h.slice(0, a.index) + "++" + h.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; ) if (c || (p = ""), c = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((d) => !!(r = d.call({ lexer: this }, e, t)) && (e = e.substring(r.raw.length), t.push(r), !0)))) if (r = this.tokenizer.escape(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.tag(e)) e = e.substring(r.raw.length), s = t[t.length - 1], s && r.type === "text" && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : t.push(r);
    else if (r = this.tokenizer.link(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(r.raw.length), s = t[t.length - 1], s && r.type === "text" && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : t.push(r);
    else if (r = this.tokenizer.emStrong(e, h, p)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.codespan(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.br(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.del(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.autolink(e)) e = e.substring(r.raw.length), t.push(r);
    else if (this.state.inLink || !(r = this.tokenizer.url(e))) {
      if (o = e, this.options.extensions && this.options.extensions.startInline) {
        let d = 1 / 0;
        const f = e.slice(1);
        let m;
        this.options.extensions.startInline.forEach((y) => {
          m = y.call({ lexer: this }, f), typeof m == "number" && m >= 0 && (d = Math.min(d, m));
        }), d < 1 / 0 && d >= 0 && (o = e.substring(0, d + 1));
      }
      if (r = this.tokenizer.inlineText(o)) e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (p = r.raw.slice(-1)), c = !0, s = t[t.length - 1], s && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : t.push(r);
      else if (e) {
        const d = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(d);
          break;
        }
        throw new Error(d);
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
var _u = Object.defineProperty, Cu = (n, e, t) => ((r, s, o) => s in r ? _u(r, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[s] = o)(n, e + "", t);
let cr = class {
  constructor(e) {
    Cu(this, "options"), this.options = e || Bt;
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
    var o;
    const s = (o = (t || "").match(/^\S*/)) == null ? void 0 : o[0];
    return e = e.replace(/\n$/, "") + `
`, s ? '<pre><code class="language-' + Ke(s) + '">' + (r ? e : Ke(e, !0)) + `</code></pre>
` : "<pre><code>" + (r ? e : Ke(e, !0)) + `</code></pre>
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
    const s = wo(e);
    if (s === null) return r;
    let o = `<img src="${e = s}" alt="${r}"`;
    return t && (o += ` title="${t}"`), o += ">", o;
  }
  link(e, t, r) {
    const s = wo(e);
    if (s === null) return r;
    let o = '<a href="' + (e = s) + '"';
    return t && (o += ' title="' + t + '"'), o += ">" + r + "</a>", o;
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
}, $s = class {
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
  link(e, t, r) {
    return "" + r;
  }
  image(e, t, r) {
    return "" + r;
  }
  br() {
    return "";
  }
};
var Au = Object.defineProperty, zr = (n, e, t) => ((r, s, o) => s in r ? Au(r, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[s] = o)(n, typeof e != "symbol" ? e + "" : e, t);
let Gt = class cs {
  constructor(e) {
    zr(this, "options"), zr(this, "renderer"), zr(this, "textRenderer"), this.options = e || Bt, this.options.renderer = this.options.renderer || new cr(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new $s();
  }
  static parse(e, t) {
    return new cs(t).parse(e);
  }
  static parseInline(e, t) {
    return new cs(t).parseInline(e);
  }
  parse(e, t = !0) {
    let r = "";
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
        const a = o, c = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type)) {
          r += c || "";
          continue;
        }
      }
      switch (o.type) {
        case "space":
          continue;
        case "hr":
          r += this.renderer.hr();
          continue;
        case "heading": {
          const a = o;
          r += this.renderer.heading(this.parseInline(a.tokens), a.depth, su(this.parseInline(a.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const a = o;
          r += this.renderer.code(a.text, a.lang, !!a.escaped);
          continue;
        }
        case "table": {
          const a = o;
          let c = "", p = "";
          for (let d = 0; d < a.header.length; d++) p += this.renderer.tablecell(this.parseInline(a.header[d].tokens), { header: !0, align: a.align[d] });
          c += this.renderer.tablerow(p);
          let h = "";
          for (let d = 0; d < a.rows.length; d++) {
            const f = a.rows[d];
            p = "";
            for (let m = 0; m < f.length; m++) p += this.renderer.tablecell(this.parseInline(f[m].tokens), { header: !1, align: a.align[m] });
            h += this.renderer.tablerow(p);
          }
          r += this.renderer.table(c, h);
          continue;
        }
        case "blockquote": {
          const a = o, c = this.parse(a.tokens);
          r += this.renderer.blockquote(c);
          continue;
        }
        case "list": {
          const a = o, c = a.ordered, p = a.start, h = a.loose;
          let d = "";
          for (let f = 0; f < a.items.length; f++) {
            const m = a.items[f], y = m.checked, v = m.task;
            let S = "";
            if (m.task) {
              const T = this.renderer.checkbox(!!y);
              h ? m.tokens.length > 0 && m.tokens[0].type === "paragraph" ? (m.tokens[0].text = T + " " + m.tokens[0].text, m.tokens[0].tokens && m.tokens[0].tokens.length > 0 && m.tokens[0].tokens[0].type === "text" && (m.tokens[0].tokens[0].text = T + " " + m.tokens[0].tokens[0].text)) : m.tokens.unshift({ type: "text", text: T + " " }) : S += T + " ";
            }
            S += this.parse(m.tokens, h), d += this.renderer.listitem(S, v, !!y);
          }
          r += this.renderer.list(d, c, p);
          continue;
        }
        case "html": {
          const a = o;
          r += this.renderer.html(a.text, a.block);
          continue;
        }
        case "paragraph": {
          const a = o;
          r += this.renderer.paragraph(this.parseInline(a.tokens));
          continue;
        }
        case "text": {
          let a = o, c = a.tokens ? this.parseInline(a.tokens) : a.text;
          for (; s + 1 < e.length && e[s + 1].type === "text"; ) a = e[++s], c += `
` + (a.tokens ? this.parseInline(a.tokens) : a.text);
          r += t ? this.renderer.paragraph(c) : c;
          continue;
        }
        default: {
          const a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return r;
  }
  parseInline(e, t) {
    t = t || this.renderer;
    let r = "";
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
        const a = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          r += a || "";
          continue;
        }
      }
      switch (o.type) {
        case "escape": {
          const a = o;
          r += t.text(a.text);
          break;
        }
        case "html": {
          const a = o;
          r += t.html(a.text);
          break;
        }
        case "link": {
          const a = o;
          r += t.link(a.href, a.title, this.parseInline(a.tokens, t));
          break;
        }
        case "image": {
          const a = o;
          r += t.image(a.href, a.title, a.text);
          break;
        }
        case "strong": {
          const a = o;
          r += t.strong(this.parseInline(a.tokens, t));
          break;
        }
        case "em": {
          const a = o;
          r += t.em(this.parseInline(a.tokens, t));
          break;
        }
        case "codespan": {
          const a = o;
          r += t.codespan(a.text);
          break;
        }
        case "br":
          r += t.br();
          break;
        case "del": {
          const a = o;
          r += t.del(this.parseInline(a.tokens, t));
          break;
        }
        case "text": {
          const a = o;
          r += t.text(a.text);
          break;
        }
        default: {
          const a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return r;
  }
};
var bn, Eo, us, Eu = Object.defineProperty, Ja = (n) => {
  throw TypeError(n);
}, ht = (n, e, t) => ((r, s, o) => s in r ? Eu(r, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[s] = o)(n, typeof e != "symbol" ? e + "" : e, t), ds = (n, e, t) => (((r, s, o) => {
  s.has(r) || Ja("Cannot " + o);
})(n, e, "access private method"), t);
bn = /* @__PURE__ */ new WeakSet(), Eo = function(n, e) {
  return (t) => {
    if (t.message += `
Please report this to https://github.com/markedjs/marked.`, n) {
      const r = "<p>An error occurred:</p><pre>" + Ke(t.message + "", !0) + "</pre>";
      return e ? Promise.resolve(r) : r;
    }
    if (e) return Promise.reject(t);
    throw t;
  };
}, us = function(n, e) {
  return (t, r) => {
    const s = { ...r }, o = { ...this.defaults, ...s };
    this.defaults.async === !0 && s.async === !1 && (o.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), o.async = !0);
    const a = ds(this, bn, Eo).call(this, !!o.silent, !!o.async);
    if (t == null) return a(new Error("marked(): input parameter is undefined or null"));
    if (typeof t != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
    if (o.hooks && (o.hooks.options = o), o.async) return Promise.resolve(o.hooks ? o.hooks.preprocess(t) : t).then((c) => n(c, o)).then((c) => o.hooks ? o.hooks.processAllTokens(c) : c).then((c) => o.walkTokens ? Promise.all(this.walkTokens(c, o.walkTokens)).then(() => c) : c).then((c) => e(c, o)).then((c) => o.hooks ? o.hooks.postprocess(c) : c).catch(a);
    try {
      o.hooks && (t = o.hooks.preprocess(t));
      let c = n(t, o);
      o.hooks && (c = o.hooks.processAllTokens(c)), o.walkTokens && this.walkTokens(c, o.walkTokens);
      let p = e(c, o);
      return o.hooks && (p = o.hooks.postprocess(p)), p;
    } catch (c) {
      return a(c);
    }
  };
};
const Pt = new class {
  constructor(...n) {
    var e, t, r;
    e = this, (t = bn).has(e) ? Ja("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), ht(this, "Hooks", mn), ht(this, "Lexer", Vt), ht(this, "Parser", Gt), ht(this, "Renderer", cr), ht(this, "TextRenderer", $s), ht(this, "Tokenizer", ir), ht(this, "defaults", { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null }), ht(this, "options", this.setOptions), ht(this, "parse", ds(this, bn, us).call(this, Vt.lex, Gt.parse)), ht(this, "parseInline", ds(this, bn, us).call(this, Vt.lexInline, Gt.parseInline)), this.use(...n);
  }
  lexer(n, e) {
    return Vt.lex(n, e ?? this.defaults);
  }
  parser(n, e) {
    return Gt.parse(n, e ?? this.defaults);
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
          const o = e.renderers[s.name];
          e.renderers[s.name] = o ? function(...a) {
            let c = s.renderer.apply(this, a);
            return c === !1 && (c = o.apply(this, a)), c;
          } : s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          const o = e[s.level];
          o ? o.unshift(s.tokenizer) : e[s.level] = [s.tokenizer], s.start && (s.level === "block" ? e.startBlock ? e.startBlock.push(s.start) : e.startBlock = [s.start] : s.level === "inline" && (e.startInline ? e.startInline.push(s.start) : e.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (e.childTokens[s.name] = s.childTokens);
      }), r.extensions = e), t.renderer) {
        const s = this.defaults.renderer || new cr(this.defaults);
        for (const o in t.renderer) {
          if (!(o in s)) throw new Error(`renderer '${o}' does not exist`);
          if (o === "options") continue;
          const a = o, c = t.renderer[a], p = s[a];
          s[a] = (...h) => {
            let d = c.apply(s, h);
            return d === !1 && (d = p.apply(s, h)), d || "";
          };
        }
        r.renderer = s;
      }
      if (t.tokenizer) {
        const s = this.defaults.tokenizer || new ir(this.defaults);
        for (const o in t.tokenizer) {
          if (!(o in s)) throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o)) continue;
          const a = o, c = t.tokenizer[a], p = s[a];
          s[a] = (...h) => {
            let d = c.apply(s, h);
            return d === !1 && (d = p.apply(s, h)), d;
          };
        }
        r.tokenizer = s;
      }
      if (t.hooks) {
        const s = this.defaults.hooks || new mn();
        for (const o in t.hooks) {
          if (!(o in s)) throw new Error(`hook '${o}' does not exist`);
          if (o === "options") continue;
          const a = o, c = t.hooks[a], p = s[a];
          mn.passThroughHooks.has(o) ? s[a] = (h) => {
            if (this.defaults.async) return Promise.resolve(c.call(s, h)).then((f) => p.call(s, f));
            const d = c.call(s, h);
            return p.call(s, d);
          } : s[a] = (...h) => {
            let d = c.apply(s, h);
            return d === !1 && (d = p.apply(s, h)), d;
          };
        }
        r.hooks = s;
      }
      if (t.walkTokens) {
        const s = this.defaults.walkTokens, o = t.walkTokens;
        r.walkTokens = function(a) {
          let c = [];
          return c.push(o.call(this, a)), s && (c = c.concat(s.call(this, a))), c;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  walkTokens(n, e) {
    var r, s;
    let t = [];
    for (const o of n) switch (t = t.concat(e.call(this, o)), o.type) {
      case "table": {
        const a = o;
        for (const c of a.header) t = t.concat(this.walkTokens(c.tokens, e));
        for (const c of a.rows) for (const p of c) t = t.concat(this.walkTokens(p.tokens, e));
        break;
      }
      case "list": {
        const a = o;
        t = t.concat(this.walkTokens(a.items, e));
        break;
      }
      default: {
        const a = o;
        (s = (r = this.defaults.extensions) == null ? void 0 : r.childTokens) != null && s[a.type] ? this.defaults.extensions.childTokens[a.type].forEach((c) => {
          const p = a[c].flat(1 / 0);
          t = t.concat(this.walkTokens(p, e));
        }) : a.tokens && (t = t.concat(this.walkTokens(a.tokens, e)));
      }
    }
    return t;
  }
}();
function Pe(n, e) {
  return Pt.parse(n, e);
}
Pe.options = Pe.setOptions = function(n) {
  return Pt.setOptions(n), Pe.defaults = Pt.defaults, vo(Pe.defaults), Pe;
}, Pe.getDefaults = Kc, Pe.defaults = Bt, Pe.use = function(...n) {
  return Pt.use(...n), Pe.defaults = Pt.defaults, vo(Pe.defaults), Pe;
}, Pe.walkTokens = function(n, e) {
  return Pt.walkTokens(n, e);
}, Pe.parseInline = Pt.parseInline, Pe.Parser = Gt, Pe.parser = Gt.parse, Pe.Renderer = cr, Pe.TextRenderer = $s, Pe.Lexer = Vt, Pe.lexer = Vt.lex, Pe.Tokenizer = ir, Pe.Hooks = mn, Pe.parse = Pe;
const ei = (n, e) => {
  const { showCodeBlockCopyButton: t, markdownLinkTarget: r, syntaxHighlighter: s, htmlSanitizer: o } = e || {}, a = Pe(n, { async: !1, breaks: !0 });
  if (typeof a != "string") throw new Error("Markdown parsing failed");
  const c = document.createElement("div");
  return c.innerHTML = o ? o(a) : a, c.querySelectorAll("pre").forEach((p) => {
    const h = document.createElement("div");
    h.className = "code-block";
    const d = p.querySelector("code");
    if (!d) {
      const v = p.innerHTML;
      return h.innerHTML = o ? o(v) : v, void p.replaceWith(h);
    }
    let f;
    for (let v = 0; v < d.classList.length; v++) {
      const S = d.classList[v];
      if (S.startsWith("language-")) {
        f = S.slice(9);
        break;
      }
    }
    const m = document.createElement("pre"), y = "<div>" + d.innerHTML + "</div>";
    if (m.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(y) : y, f && (m.setAttribute("data-language", f), s)) {
      const v = "<div>" + s.createHighlighter()(d.textContent || "", f) + "</div>";
      m.innerHTML = o ? o(v) : v, m.className = "highlighter-dark";
    }
    _n(h), h.appendChild(m), p.replaceWith(h);
  }), t !== !1 && c.querySelectorAll(".code-block").forEach((p) => {
    var m;
    if (!p.querySelector("pre") || (m = p.previousElementSibling) != null && m.classList.contains("nlux-comp-copyButton")) return;
    const h = "Copy code block to clipboard", d = document.createElement("button");
    d.classList.add("nlux-comp-copyButton"), d.setAttribute("aria-label", h), d.setAttribute("title", h);
    const f = document.createElement("span");
    f.classList.add("icon-copy"), d.appendChild(f), p.appendChild(d);
  }), r !== "self" && c.querySelectorAll("a").forEach((p) => {
    p.setAttribute("target", "_blank");
  }), c.innerHTML;
}, To = (n) => {
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
}, ti = (n) => {
  const e = "nlux-comp-copyButton";
  n instanceof HTMLButtonElement && n.classList.contains(e) ? To(n) : n.querySelectorAll(`.${e}`).forEach(To);
}, Tu = (n, e) => {
  let t = !1;
  const { onComplete: r } = e || {}, s = [], o = (e != null && e.skipStreamingAnimation ? "timeout" : "animationFrame") == "timeout" ? (f) => setTimeout(f, 0) : (f) => requestAnimationFrame(f), a = document.createElement("div");
  a.classList.add("md-in-progress"), n.append(a);
  const c = () => {
    for (; a.firstChild; ) {
      const f = a.firstChild;
      f instanceof HTMLElement && ti(f), a.before(f);
    }
  }, p = !(e != null && e.skipStreamingAnimation) && (e != null && e.streamingAnimationSpeed) && e.streamingAnimationSpeed >= 0 ? e.streamingAnimationSpeed : e != null && e.skipStreamingAnimation ? 0 : 8, h = { timeSinceLastProcessing: (/* @__PURE__ */ new Date()).getTime(), currentMarkdown: "", previousHtml: void 0 };
  let d = setInterval(() => {
    const f = (/* @__PURE__ */ new Date()).getTime(), m = (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) !== "never";
    if (s.length === 0 && m) {
      const v = typeof (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) == "number" ? e.waitTimeBeforeStreamCompletion : 2e3;
      return void ((t || f - h.timeSinceLastProcessing > v) && (t = !0, d && (clearInterval(d), d = void 0), c(), a.remove(), r == null ? void 0 : r()));
    }
    h.timeSinceLastProcessing = f;
    const y = s.shift();
    y !== void 0 && typeof y == "string" && o(() => {
      const v = h.currentMarkdown + y, S = ei(v, e).trim();
      if (typeof S != "string") return h.currentMarkdown = h.currentMarkdown.slice(0, -y.length), void oe("Markdown parsing failed");
      if (h.previousHtml && S.length > h.previousHtml.length && S.startsWith(h.previousHtml)) {
        c();
        const T = S.slice(h.previousHtml.length).trim();
        a.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(T) : T, h.currentMarkdown = y, h.previousHtml = void 0;
      } else a.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(S) : S, h.currentMarkdown = v, h.previousHtml = S;
    });
  }, p);
  return { next: (f) => {
    if (t) oe("Stream is already complete. No more chunks can be added");
    else for (const m of f) s.push(m);
  }, complete: () => {
    s.push(`
`), t = !0;
  }, cancel: () => {
    d && (clearInterval(d), d = void 0), t = !0, a.remove();
  }, error: () => {
    t = !0;
  } };
}, ni = (n, e) => {
  const t = document.createElement("div");
  if (t.classList.add("nlux-comp-avatarContainer"), n) {
    const r = document.createElement("div");
    r.classList.add("nlux-comp-avatarPicture"), r.style.backgroundImage = `url("${encodeURI(n)}")`, t.append(r);
  }
  return t;
}, Hs = "nlux-comp-avatar", Fs = (n) => {
  const e = document.createElement("div");
  return e.classList.add(Hs), n.avatar || n.name ? (n.name && (e.title = n.name), n.avatar && n.avatar instanceof HTMLElement ? (e.append(n.avatar.cloneNode(!0)), e) : (e.append(ni(n.avatar)), e)) : e;
}, $n = { received: "nlux_msg_received", sent: "nlux_msg_sent" }, ri = (n, e) => {
  Object.keys($n).forEach((t) => {
    n.classList.remove($n[t]);
  }), $n[e] && n.classList.add($n[e]);
}, fn = { streaming: "nlux_msg_streaming", complete: "nlux_msg_complete" }, si = (n, e) => {
  Object.keys(fn).forEach((t) => {
    n.classList.remove(fn[t]);
  }), fn[e] && n.classList.add(fn[e]);
}, oi = (n, e = "text", t) => {
  if (e === "markdown") {
    const r = document.createElement("div"), s = ei(n, t);
    r.innerHTML = t != null && t.htmlSanitizer ? t.htmlSanitizer(s) : s, ti(r);
    const o = document.createDocumentFragment();
    for (; r.firstChild; ) o.appendChild(r.firstChild);
    return o;
  }
  return document.createTextNode(n);
}, ai = "nlux-comp-message", Hn = { received: "nlux-comp-chatItem--received", sent: "nlux-comp-chatItem--sent" }, ii = (n, e) => {
  Object.keys(Hn).forEach((t) => {
    n.classList.remove(Hn[t]);
  }), Hn[e] && n.classList.add(Hn[e]);
}, Fn = { bubbles: "nlux-comp-chatItem--bubblesLayout", list: "nlux-comp-chatItem--listLayout" }, ci = (n, e) => {
  Object.keys(Fn).forEach((t) => {
    n.classList.remove(Fn[t]);
  }), Fn[e] && n.classList.add(Fn[e]);
}, ui = "nlux-comp-chatItem-participantInfo", di = "nlux-comp-chatItem-participantName", Pu = (n) => {
  const e = document.createElement("div");
  e.classList.add("nlux-comp-chatItem");
  const t = { direction: n.direction, status: n.status, message: n.message, htmlSanitizer: n.htmlSanitizer };
  let r;
  if (n.avatar !== void 0) {
    const a = { name: n.name, avatar: n.avatar };
    r = Fs(a);
  }
  const s = document.createElement("span");
  s.classList.add(di), s.textContent = n.name;
  {
    const a = document.createElement("div");
    a.classList.add(ui), r !== void 0 && a.append(r), a.append(s), e.append(a);
  }
  ii(e, n.direction), ci(e, n.layout);
  const o = ((a) => {
    const c = document.createElement("div");
    c.classList.add(ai);
    const p = a.status ? a.status : "complete";
    return si(c, p), ri(c, a.direction), c;
  })(t);
  return e.append(o), e;
}, Po = (n, e, t) => {
  if (e.name !== t.name && typeof t.avatar == "string") {
    const r = t.name && t.name.length > 0 ? t.name[0].toUpperCase() : "", s = n.querySelector("* > .nlux-comp-avatarContainer > .avtr_ltr");
    s == null || s.replaceChildren(r);
  }
}, li = (n, e, t) => {
  e.avatar === t.avatar && e.name === t.name || (e.avatar !== t.avatar && ((r, s, o) => {
    if (s.avatar !== o.avatar) if (typeof o.avatar == "string" && typeof s.avatar == "string") {
      const a = r.querySelector("* > .nlux-comp-avatarContainer > .nlux-comp-avatarPicture");
      a !== null && (a.style.backgroundImage = `url("${encodeURI(o.avatar)}")`);
    } else if (typeof o.avatar == "string") {
      const a = ni(o.avatar);
      r.replaceChildren(a);
    } else o.avatar ? r.replaceChildren(o.avatar.cloneNode(!0)) : _n(r);
  })(n, e, t), t.name ? e.name !== t.name && (n.title = t.name, Po(n, e, t)) : (n.title = "", Po(n, e, t)));
}, Iu = (n, e, t) => {
  if (e.message === t.message && e.status === t.status && e.direction === t.direction || !t || !t.hasOwnProperty("message") && !t.hasOwnProperty("status") && !t.hasOwnProperty("direction")) return;
  e.direction !== t.direction && ri(n, t.direction);
  const r = t.status;
  if (e.status !== r) return si(n, t.status), void ((s, o, a) => {
    const c = a.status;
    if (c !== "streaming" && c === "complete") {
      const p = a.message ? a.message : "", h = document.createTextNode(p);
      s.classList.add(fn[c]), _n(s), s.append(h);
    }
  })(n, 0, t);
  r === "complete" && (e.message === t.message && e.format === t.format || ((s, o, a) => {
    o.message === a.message && o.format === a.format || (_n(s), s.append(oi(a.message ?? "", a.format, { htmlSanitizer: a.htmlSanitizer })));
  })(n, e, t));
}, Io = "dom/getElement";
var Du = Object.defineProperty, Lu = Object.getOwnPropertyDescriptor, Do = (n, e, t, r) => {
  for (var s, o = r > 1 ? void 0 : r ? Lu(e, t) : e, a = n.length - 1; a >= 0; a--) (s = n[a]) && (o = (r ? s(e, t, o) : s(o)) || o);
  return r && o && Du(e, t, o), o;
};
let nr = class extends at {
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
Do([dt("markdown-stream-complete")], nr.prototype, "onMarkdownStreamComplete", 1), nr = Do([Ct("chatItem", ({ props: n, appendToRoot: e, compEvent: t }) => {
  const r = Pu({ ...n.domProps, htmlSanitizer: n.htmlSanitizer, message: void 0 }), s = ((d, f) => {
    const m = d.querySelector(f);
    if (!m) throw new or({ source: Io, message: `Could not find element with query "${f}". Make sure the query provided matches an element that exists in the root element.` });
    if (!(m instanceof HTMLElement)) throw new or({ source: Io, message: `Element with query "${f}" is not a valid HTMLElement.` });
    return m;
  })(r, ".nlux-comp-message");
  if (!s) throw new Error("Message container not found");
  const o = document.createElement("div");
  o.classList.add("nlux-markdownStream-root");
  const a = document.createElement("div");
  if (a.classList.add("nlux-markdown-container"), a.setAttribute("nlux-message-id", n.uid), o.append(a), s.append(o), n.domProps.message) {
    const d = oi(n.domProps.message ?? "", "markdown", { markdownLinkTarget: n.markdownLinkTarget, syntaxHighlighter: n.syntaxHighlighter, htmlSanitizer: n.htmlSanitizer });
    a.append(d);
  }
  let c;
  e(r);
  let p = { ...n };
  const h = (d) => ((f, m) => {
    const y = Tu(f, { syntaxHighlighter: m == null ? void 0 : m.syntaxHighlighter, htmlSanitizer: m == null ? void 0 : m.htmlSanitizer, markdownLinkTarget: m == null ? void 0 : m.markdownLinkTarget, showCodeBlockCopyButton: m == null ? void 0 : m.showCodeBlockCopyButton, skipStreamingAnimation: m == null ? void 0 : m.skipStreamingAnimation, streamingAnimationSpeed: m == null ? void 0 : m.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: m == null ? void 0 : m.waitTimeBeforeStreamCompletion, onComplete: m == null ? void 0 : m.onComplete });
    return { next(v) {
      y.next(v);
    }, complete() {
      y.complete();
    } };
  })(a, { syntaxHighlighter: d.syntaxHighlighter, htmlSanitizer: d.htmlSanitizer, markdownLinkTarget: d.markdownLinkTarget, showCodeBlockCopyButton: d.showCodeBlockCopyButton, skipStreamingAnimation: d.skipStreamingAnimation, streamingAnimationSpeed: d.streamingAnimationSpeed, onComplete: () => t("markdown-stream-complete") });
  return { elements: { chatItemContainer: r }, actions: { focus: () => {
    r.focus();
  }, processStreamedChunk: (d) => {
    c || (c = h(p)), c.next(d);
  }, commitStreamedChunks: () => {
    c && c.complete();
  }, updateMarkdownStreamRenderer: (d) => {
    p = { ...p, ...d }, h(p);
  }, updateDomProps: (d, f) => {
    ((m, y, v) => {
      if ((y.direction !== v.direction || y.layout !== v.layout || y.status !== v.status || y.message !== v.message || y.name !== v.name || y.avatar !== v.avatar) && v && (v.hasOwnProperty("direction") || v.hasOwnProperty("layout") || v.hasOwnProperty("status") || v.hasOwnProperty("message") || v.hasOwnProperty("loader") || v.hasOwnProperty("name") || v.hasOwnProperty("avatar"))) {
        if (y.direction !== v.direction && ii(m, v.direction), y.layout !== v.layout && ci(m, v.layout), y.direction !== v.direction || y.status !== v.status || y.message !== v.message) {
          const S = m.querySelector(`.${ai}`);
          S && Iu(S, { direction: y.direction, status: y.status, message: y.message, htmlSanitizer: y.htmlSanitizer }, { direction: v.direction, status: v.status, message: v.message, htmlSanitizer: y.htmlSanitizer });
        }
        if (y.name !== v.name || y.avatar !== v.avatar) {
          const S = m.querySelector(`.${Hs}`);
          if (!v.name && !v.avatar) return void (S == null ? void 0 : S.remove());
          if (S) li(S, { name: y.name, avatar: y.avatar }, { name: v.name, avatar: v.avatar });
          else if (v.name !== void 0 || v.avatar !== void 0) {
            const T = { name: v.name, avatar: v.avatar }, R = Fs(T), E = m.querySelector(`.${ui}`);
            E && E.prepend(R);
          }
        }
        if (y.name !== v.name) {
          const S = m.querySelector(`.${di}`);
          S && (S.textContent = v.name || "");
        }
      }
    })(r, d, f);
  } }, onDestroy: () => {
    r.remove(), c = void 0;
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
})], nr);
const Ru = (n, e) => {
  let t, r = e, s = n, o = !0;
  const a = ((S, T) => {
    let R = !1;
    if (typeof S != "function") throw new St({ source: "x/throttle", message: "Callback must be a function" });
    return (...E) => {
      R || (S.apply(void 0, E), R = !0, setTimeout(function() {
        R = !1;
      }, T));
    };
  })(/* @__PURE__ */ ((S) => {
    let T, R;
    return (E) => {
      const A = E.target;
      if (!(A instanceof HTMLElement)) return;
      const { scrollTop: i, clientHeight: u, scrollHeight: l } = A, g = l - 30, k = Math.ceil(i + u) >= g, w = T === void 0 || R === void 0 ? void 0 : i > T && R === l ? "down" : i < T && R === l ? "up" : void 0;
      R = l, T = i, S({ scrolledToBottom: k, scrollDirection: w });
    };
  })(({ scrolledToBottom: S, scrollDirection: T }) => {
    o ? T === "up" && (o = !1) : T === "down" && S && (o = !0);
  }), 50), c = (S) => {
    S.addEventListener("scroll", a);
  }, p = (S) => {
    S == null || S.removeEventListener("scroll", a);
  }, h = (S) => {
    (t == null ? void 0 : t.uid) === S && (d == null || d.disconnect(), f == null || f.disconnect(), t = void 0, d = void 0, f = void 0);
  };
  let d, f;
  const m = () => {
    s == null || s.scrollTo({ top: 5e4, behavior: "instant" });
  }, y = () => {
    s && r && o && m();
  }, v = () => {
    y();
  };
  return c(s), { updateConversationContainer: (S) => {
    p(s), c(S), s = S;
  }, updateProps: ({ autoScroll: S }) => {
    r = S;
  }, handleNewChatSegmentAdded: (S, T) => {
    t && (d == null || d.disconnect(), f == null || f.disconnect()), t = { uid: S, container: T }, d = new ResizeObserver(y), d.observe(T), f = new MutationObserver(v), f.observe(T, { childList: !0, subtree: !0, characterData: !0 }), r && m();
  }, handleChatSegmentRemoved: (S) => h(S), handleChatSegmentComplete: (S) => h(S), destroy: () => {
    t && (h(t.uid), t = void 0), p(s), s = void 0;
  } };
}, Yt = (n) => {
  var r;
  const e = typeof n == "function" ? n.__compId : void 0;
  if (!e) throw new Error("Invalid compClass! Component should be registered before using");
  const t = (r = Va.retrieve(e)) == null ? void 0 : r.model;
  if (!t || typeof t != "function") throw new Error(`Component "${e}" is not registered`);
  return { withContext: (s) => ({ create: () => new t(s, {}), withProps: (o) => ({ create: () => new t(s, o) }) }) };
}, Ou = (n) => {
  const e = ["adapter", "events"], t = Object.keys(n).filter((s) => !e.includes(s)), r = {};
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    r[o] = n[o];
  }
  return r;
}, hi = () => {
  const n = document.createElement("div");
  n.classList.add("nlux-comp-messageLoader");
  const e = document.createElement("span");
  e.classList.add("spinning-loader");
  const t = document.createElement("div");
  return t.classList.add("nlux-comp-loaderContainer"), t.appendChild(e), n.appendChild(t), n;
}, Lo = (n) => {
  const e = "nlux-chatSegment";
  return n === "complete" ? `${e} nlux-chatSegment--complete` : n === "error" ? `${e} nlux-chatSegment--error` : `${e} nlux-chatSegment--active`;
}, Un = (n, e) => {
  var t, r;
  return n === "assistant" ? ((t = e == null ? void 0 : e.assistant) == null ? void 0 : t.name) ?? "Assistant" : n === "user" ? ((r = e == null ? void 0 : e.user) == null ? void 0 : r.name) ?? "User" : "";
}, ju = "bubbles";
var Mu = Object.defineProperty, Bu = Object.getOwnPropertyDescriptor, Vn = (n, e, t, r) => {
  for (var s, o = r > 1 ? void 0 : r ? Bu(e, t) : e, a = n.length - 1; a >= 0; a--) (s = n[a]) && (o = (r ? s(e, t, o) : s(o)) || o);
  return r && o && Mu(e, t, o), o;
};
let Ut = class extends at {
  constructor(e, t) {
    super(e, t), this.chatItemCompIdsByIndex = [], this.chatItemComponentsById = /* @__PURE__ */ new Map();
  }
  addChatItem(e) {
    var s, o;
    if (this.throwIfDestroyed(), this.chatItemComponentsById.has(e.uid)) throw new Error(`CompChatSegment: chat item with id "${e.uid}" already exists`);
    const t = ((a, c, p, h) => {
      const d = c ?? ju;
      if (a.participantRole === "assistant") {
        const m = a.status === "complete" ? "complete" : "streaming";
        return a.dataTransferMode === "stream" ? { status: m, layout: d, direction: "received", name: Un("assistant", { assistant: h }), avatar: h == null ? void 0 : h.avatar } : a.status === "complete" ? { status: m, layout: d, direction: "received", name: Un("assistant", { assistant: h }), avatar: h == null ? void 0 : h.avatar, message: (f = a.content, typeof f == "string" ? f : typeof f == "object" ? `${f}` : f == null ? "" : typeof f.toString == "function" ? f.toString() : JSON.stringify(f)) } : { status: m, layout: d, direction: "received", name: Un("assistant", { assistant: h }), avatar: h == null ? void 0 : h.avatar };
      }
      var f;
      return { status: "complete", layout: d, direction: "sent", message: a.content, name: Un("user", { user: p }), avatar: p == null ? void 0 : p.avatar };
    })(e, this.getProp("conversationLayout"), this.getProp("userPersona"), this.getProp("assistantPersona"));
    if (!t) throw new Error(`CompChatSegment: chat item with id "${e.uid}" has invalid props`);
    const r = Yt(nr).withContext(this.context).withProps({ uid: e.uid, domProps: t, markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed") }).create();
    this.chatItemComponentsById.set(e.uid, r), this.chatItemCompIdsByIndex.push(e.uid), this.rendered && ((o = (s = this.renderedDom) == null ? void 0 : s.elements) != null && o.chatSegmentContainer ? r.render(this.renderedDom.elements.chatSegmentContainer, this.renderedDom.elements.loaderContainer) : os("CompChatSegment: chatSegmentContainer is not available"));
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
  onLoaderShown(e) {
    var t;
    (t = this.renderedDom) != null && t.elements && (this.renderedDom.elements.loaderContainer = e);
  }
  setProp(e, t) {
    super.setProp(e, t), e !== "markdownLinkTarget" && e !== "syntaxHighlighter" && e !== "htmlSanitizer" && e !== "skipStreamingAnimation" && e !== "streamingAnimationSpeed" || this.chatItemComponentsById.forEach((r) => {
      r.updateMarkdownStreamRenderer(e, t);
    });
  }
  onChatSegmentReady() {
    mt(() => {
      var t, r, s, o;
      if (!((r = (t = this.renderedDom) == null ? void 0 : t.elements) != null && r.chatSegmentContainer)) return;
      const e = (o = (s = this.renderedDom) == null ? void 0 : s.elements) == null ? void 0 : o.chatSegmentContainer;
      this.chatItemComponentsById.forEach((a) => {
        a.rendered || a.render(e);
      });
    });
  }
  onLoaderHidden() {
    var e;
    (e = this.renderedDom) != null && e.elements && (this.renderedDom.elements.loaderContainer = void 0);
  }
};
Vn([dt("loader-shown")], Ut.prototype, "onLoaderShown", 1), Vn([dt("chat-segment-ready")], Ut.prototype, "onChatSegmentReady", 1), Vn([dt("loader-hidden")], Ut.prototype, "onLoaderHidden", 1), Ut = Vn([Ct("chatSegment", ({ props: n, compEvent: e, appendToRoot: t }) => {
  let r;
  const s = document.createElement("div");
  s.className = Lo(n.status);
  const o = () => {
    if (!r) {
      r = document.createElement("div"), r.className = "nlux-chatSegment-loader-container";
      const a = hi();
      r.appendChild(a), s.appendChild(r), e("loader-shown")(r);
    }
  };
  return n.status === "active" && o(), t(s), e("chat-segment-ready")(), { elements: { chatSegmentContainer: s, loaderContainer: r }, actions: { showLoader: o, hideLoader: () => {
    r && (r.remove(), r = void 0, e("loader-hidden")());
  } }, onDestroy: () => {
    s.remove();
  } };
}, ({ propName: n, newValue: e, dom: t }) => {
  var r, s, o;
  if (n === "status") {
    const a = (r = t.elements) == null ? void 0 : r.chatSegmentContainer;
    if (!a) return;
    const c = e;
    a.className = Lo(c), c === "active" ? (s = t.actions) == null || s.showLoader() : (o = t.actions) == null || o.hideLoader();
  }
})], Ut);
let ls = class extends at {
  constructor(e, t) {
    super(e, t), this.chatSegmentCompIdsByIndex = [], this.chatSegmentComponentsById = /* @__PURE__ */ new Map(), t.messages && t.messages.length > 0 && this.addChatSegment("complete", t.messages);
  }
  addChatItem(e, t) {
    const r = this.chatSegmentComponentsById.get(e);
    if (!r) throw new Error(`CompConversation: chat segment with id "${e}" not found`);
    r.destroyed ? os(`CompConversation: chat segment with id "${e}" is destroyed and cannot be used`) : r.addChatItem(t);
  }
  addChatSegment(e = "active", t) {
    this.throwIfDestroyed();
    const r = ut(), s = Yt(Ut).withContext(this.context).withProps({ uid: r, status: e, conversationLayout: this.getProp("conversationLayout"), userPersona: this.getProp("userPersona"), assistantPersona: this.getProp("assistantPersona"), markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed") }).create();
    if (t) for (const a of t) a.role === "assistant" ? s.addChatItem({ uid: ut(), participantRole: "assistant", time: /* @__PURE__ */ new Date(), dataTransferMode: "batch", status: "complete", content: a.message, serverResponse: a.serverResponse, contentType: "text" }) : a.role === "user" && s.addChatItem({ uid: ut(), participantRole: "user", time: /* @__PURE__ */ new Date(), status: "complete", content: a.message, contentType: "text" });
    this.chatSegmentComponentsById.set(r, s), this.chatSegmentCompIdsByIndex.push(r);
    const o = s.id;
    return this.addSubComponent(o, s, "segmentsContainer"), this.notifyAboutSegmentCountChange(this.chatSegmentCompIdsByIndex.length), r;
  }
  addChunk(e, t, r, s) {
    const o = this.chatSegmentComponentsById.get(e);
    if (!o) throw new Error(`CompConversation: chat segment with id "${e}" not found`);
    o.addChunk(t, r, s);
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
    if (typeof e == "number" && e < 0) return void os(`Invalid value provided for 'historyPayloadSize' : "${e}"! Value must be a positive integer or 'max'.`);
    if (e === 0) return;
    const t = ((r) => {
      const s = [];
      return r.forEach((o) => {
        o.items.forEach((a) => {
          if (a.status === "complete") {
            if (a.participantRole === "assistant") s.push({ role: "assistant", message: a.content });
            else if (a.participantRole === "user") return s.push({ role: "user", message: a.content });
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
      this.chatSegmentComponentsById.forEach((o) => {
        o.updateMarkdownStreamRenderer(r, s);
      });
    }
  }
  notifyAboutSegmentCountChange(e) {
    const t = this.getProp("onSegmentCountChange");
    t && t(e);
  }
};
ls = ((n, e, t, r) => {
  for (var s, o = e, a = n.length - 1; a >= 0; a--) (s = n[a]) && (o = s(o) || o);
  return o;
})([Ct("conversation", ({ appendToRoot: n }) => {
  const e = document.createElement("div");
  return e.classList.add("nlux-chatSegments-container"), n(e), { elements: { segmentsContainer: e }, actions: {} };
}, () => {
})], ls);
const Nr = { typing: "nlux-composer--typing", "submitting-prompt": "nlux-composer--submitting", "submitting-conversation-starter": "nlux-composer--submitting", waiting: "nlux-composer--waiting" }, pi = (n, e) => {
  Object.keys(Nr).forEach((t) => {
    n.classList.remove(Nr[t]);
  }), n.classList.add(Nr[e]);
}, qu = (n) => {
  const e = document.createElement("div");
  e.classList.add("nlux-comp-composer");
  const t = document.createElement("textarea");
  t.placeholder = n.placeholder ?? "", t.value = n.message ?? "", n.autoFocus && (t.autofocus = !0);
  const r = document.createElement("button");
  return r.append((() => {
    const s = document.createElement("div");
    s.classList.add("nlux-comp-sendIcon");
    const o = document.createElement("div");
    return o.classList.add("nlux-comp-sendIcon-container"), s.appendChild(o), s;
  })()), r.append(hi()), e.append(t), e.append(r), pi(e, n.status), n.status !== "submitting-conversation-starter" && n.status !== "submitting-prompt" || (t.disabled = !0, r.disabled = !0), n.status === "waiting" && (r.disabled = !0), n.status === "typing" && (r.disabled = n.disableSubmitButton ?? t.value === ""), e;
}, ur = (n, e) => {
  let t = !1;
  const r = e ? n.querySelector(e) : n, s = r instanceof HTMLElement ? r : void 0;
  if (!s) throw new or({ source: "dom/listenTo", message: `Could not find element with query "${e}". Make sure the query provided matches an element that exists in the root element.` });
  const o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = () => {
    s && (o.forEach((h, d) => {
      s.removeEventListener(d, h);
    }), o.clear(), a.clear());
  }, p = { on: (h, d) => {
    if (!d || !s) return p;
    if (!o.has(h)) {
      const f = (m) => {
        var y;
        (y = a.get(h)) == null || y.forEach((v) => v(m));
      };
      o.set(h, f), s.addEventListener(h, f);
    }
    return a.has(h) || a.set(h, /* @__PURE__ */ new Set()), a.get(h).add(d), p;
  }, get: () => {
    if (t) throw new Error("listenTo().get() can only be used once!");
    return t = !0, [s, c];
  } };
  return p;
};
var zu = Object.defineProperty, Nu = Object.getOwnPropertyDescriptor, ln = (n, e, t, r) => {
  for (var s, o = r > 1 ? void 0 : r ? Nu(e, t) : e, a = n.length - 1; a >= 0; a--) (s = n[a]) && (o = (r ? s(e, t, o) : s(o)) || o);
  return r && o && zu(e, t, o), o;
};
let It = class extends at {
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
ln([dt("command-enter-key-pressed")], It.prototype, "handleCommandEnterKeyPressed", 1), ln([dt("enter-key-pressed")], It.prototype, "handleEnterKeyPressed", 1), ln([dt("send-message-clicked")], It.prototype, "handleSendButtonClick", 1), ln([dt("text-updated")], It.prototype, "handleTextInputUpdated", 1), It = ln([Ct("composer", ({ appendToRoot: n, props: e, compEvent: t }) => {
  const r = qu(e.domCompProps);
  n(r);
  const [s, o] = ur(r, ":scope > textarea").on("input", t("text-updated")).on("keydown", (d) => {
    const f = d.key === "Enter" && !d.isComposing, m = d.altKey || d.ctrlKey || d.metaKey || d.shiftKey;
    if (f && !m) return void t("enter-key-pressed")(d);
    const y = d.getModifierState("Meta") && d.key === "Enter", v = d.getModifierState("Control") && d.key === "Enter";
    (y || v) && t("command-enter-key-pressed")(d);
  }).get(), [a, c] = ur(r, ":scope > button").on("click", t("send-message-clicked")).get();
  if (!(a instanceof HTMLButtonElement)) throw new Error("Expected a button element");
  if (!(s instanceof HTMLTextAreaElement)) throw new or({ source: (p = "composer", h = "render", `#${p}/${h}`), message: "Expected a textarea element" });
  var p, h;
  return { elements: { root: r, textInput: s, sendButton: a }, actions: { focusTextInput: () => mt(() => {
    s.focus(), s.setSelectionRange(s.value.length, s.value.length);
  }) }, onDestroy: () => {
    o(), c();
  } };
}, ({ propName: n, currentValue: e, newValue: t, dom: r }) => {
  var s;
  n === "domCompProps" && ((s = r.elements) != null && s.root) && ((o, a, c) => {
    if (a.status === c.status && a.message === c.message && a.placeholder === c.placeholder && a.autoFocus === c.autoFocus && a.disableSubmitButton === c.disableSubmitButton) return;
    if (a.status !== c.status) return pi(o, c.status), void ((h, d, f) => {
      if (d.status === f.status) return;
      const m = h.querySelector("* > textarea");
      f.status !== "typing" && f.status !== "waiting" || !m.disabled ? f.status !== "submitting-prompt" && f.status !== "submitting-conversation-starter" || m.disabled || (m.disabled = !0) : m.disabled = !1;
      const y = h.querySelector("* > button");
      if (f.status === "typing") {
        const v = (d.disableSubmitButton !== f.disableSubmitButton ? f.disableSubmitButton : d.disableSubmitButton) ?? m.value === "";
        y.disabled !== v && (y.disabled = v);
      } else f.status !== "waiting" && f.status !== "submitting-prompt" && f.status !== "submitting-conversation-starter" || y.disabled || (y.disabled = !0);
      d.placeholder !== f.placeholder && (m.placeholder = f.placeholder ?? ""), d.message !== f.message && (m.value = f.message ?? ""), d.autoFocus !== f.autoFocus && (m.autofocus = f.autoFocus ?? !1);
    })(o, a, c);
    const p = o.querySelector("* > textarea");
    if (a.placeholder !== c.placeholder && (p.placeholder = c.placeholder ?? ""), a.autoFocus !== c.autoFocus && (p.autofocus = c.autoFocus ?? !1), a.message !== c.message && (p.value = c.message ?? ""), a.status === "typing") {
      const h = o.querySelector("* > button"), d = (a.disableSubmitButton !== c.disableSubmitButton ? c.disableSubmitButton : a.disableSubmitButton) ?? p.value === "";
      h.disabled !== d && (h.disabled = d);
    }
  })(r.elements.root, e, t);
})], It);
const hs = (n) => {
  if (typeof n != "object" || n === null) return !1;
  const e = n;
  return (typeof e.streamText == "function" || typeof e.batchText == "function") && ["stream", "batch"].includes(e.dataTransferMode) && typeof e.id == "string" && typeof e.info == "object" && e.info !== null && typeof e.preProcessAiBatchedMessage == "function" && typeof e.preProcessAiStreamedChunk == "function";
}, qe = (n, e = 1) => {
  setTimeout(() => {
    n();
  }, e);
}, $u = (n, e, t, r, s, o, a, c, p) => new Promise((h) => {
  const d = ut(), f = [], m = [];
  let y = !1, v = !1, S = !1;
  const T = hs(t), R = { next: (E) => {
    if (v || S) return;
    let A, i;
    if (T) {
      const u = E, l = t.preProcessAiStreamedChunk(u, r);
      l != null && (A = l, i = u, f.push(A), m.push(i));
    } else A = E, f.push(A);
    A != null ? (y || y || (y = !0, qe(() => {
      s.forEach((u) => {
        u({ uid: d, status: "streaming", time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" });
      });
    })), qe(() => {
      a.forEach((u) => {
        u({ chunk: A, messageId: d, serverResponse: i });
      });
    })) : oe("Adapter returned an undefined or null value from streamText. This chunk will be ignored.");
  }, complete: () => {
    v || S || (S = !0, qe(() => {
      const E = { uid: d, status: "complete", content: f, contentType: "text", serverResponse: void 0, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" };
      o.forEach((A) => {
        A(E);
      }), h();
    }), qe(() => {
      const E = { uid: n, status: "complete", items: [e, { uid: d, status: "complete", contentType: "text", content: f, serverResponse: m, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" }] };
      c.forEach((A) => {
        A(E);
      });
    }));
  }, error: (E) => {
    v || S || (v = !0, qe(() => {
      p.forEach((A) => {
        A("failed-to-stream-content", E);
      }), h();
    }));
  } };
  t.streamText(e.content, R, r);
}), Hu = (n, e, t) => {
  if (!n) return (() => {
    const E = /* @__PURE__ */ new Set(), A = ut(), i = { uid: A, status: "complete", items: [] };
    return qe(() => {
      E.forEach((u) => {
        u(i);
      }), E.clear();
    }), { segment: i, observable: { on: (u, l) => {
      u === "complete" && E.add(l);
    }, removeListener: (u, l) => {
      E.delete(l);
    }, destroy: () => {
      E.clear();
    }, get segmentId() {
      return A;
    } }, dataTransferMode: "batch" };
  })();
  const r = e;
  if (r.streamText === void 0 && r.batchText === void 0 && r.streamServerComponent === void 0) return ((E) => {
    const A = /* @__PURE__ */ new Set(), i = ut(), u = { uid: i, status: "error", items: [] };
    return qe(() => {
      A.forEach((l) => l(E)), A.clear();
    }), { segment: u, dataTransferMode: "stream", observable: { on: (l, g) => {
      l === "error" && A.add(g);
    }, removeListener: (l, g) => {
      A.delete(g);
    }, destroy: () => {
      A.clear();
    }, get segmentId() {
      return i;
    } } };
  })("no-data-transfer-mode-supported");
  const s = ut(), o = ((E) => ({ uid: ut(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: E, contentType: "text" }))(n);
  let a, c, p, h, d, f, m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set();
  qe(() => {
    m != null && m.size && (m.forEach((E) => {
      E(o);
    }), m.clear(), m = void 0);
  });
  const S = ((E) => {
    const A = [], i = E, u = E;
    (i == null ? void 0 : i.streamText) === void 0 && (u == null ? void 0 : u.streamServerComponent) === void 0 || A.push("stream"), (i == null ? void 0 : i.batchText) !== void 0 && A.push("batch");
    const l = hs(E) ? E : void 0, g = (l == null ? void 0 : l.dataTransferMode) ?? void 0, k = A.length === 1 ? A[0] : "stream";
    return g ?? k;
  })(e);
  ((E) => "streamServerComponent" in E ? "server-component" : "text")(e) === "server-component" ? (p = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), ((E, A, i, u, l, g, k, w) => new Promise((b, C) => {
    try {
      const L = A.content, D = ut(), I = "assistant", j = "streaming", x = /* @__PURE__ */ new Date(), B = "stream";
      let N, z;
      const O = () => {
        qe(() => {
          g.forEach((Y) => {
            N && z && Y({ ...N, content: z, status: "complete" });
          });
        }, 20);
        const U = { uid: E, status: "complete", items: [A, N] };
        qe(() => {
          k.forEach((Y) => {
            Y(U);
          }), b();
        }, 20);
      }, M = () => {
        w.forEach((U) => {
          U("failed-to-stream-server-component", new Error("Failed to load content"));
        });
      };
      z = i.streamServerComponent(L, u, { onServerComponentReceived: O, onError: M }), N = { uid: D, content: z, contentType: "server-component", participantRole: I, status: j, time: x, dataTransferMode: B }, qe(() => {
        l.forEach((U) => {
          U(N);
        });
      }, 10);
    } catch (L) {
      oe(L);
      const D = L instanceof Error ? L : typeof L == "string" ? new Error(L) : new Error("Unknown error");
      qe(() => {
        w.forEach((I) => I("failed-to-load-content", D));
      });
    }
  }))(s, o, e, t, c, p, y, v).finally(() => {
    qe(() => R());
  })) : S === "batch" ? (a = /* @__PURE__ */ new Set(), (async (E, A, i, u, l, g, k) => {
    try {
      const w = A.content, b = hs(i) ? i : void 0, C = b !== void 0, L = ut(), D = "assistant", I = "complete", j = /* @__PURE__ */ new Date(), x = "batch";
      let B;
      if (C) {
        const O = await b.batchText(w, u), M = b.preProcessAiBatchedMessage(O, u);
        M != null && (B = { uid: L, content: M, contentType: "text", serverResponse: O, participantRole: D, status: I, time: j, dataTransferMode: x });
      } else B = { uid: L, content: await i.batchText(w, u), contentType: "text", serverResponse: void 0, participantRole: D, status: I, time: j, dataTransferMode: x };
      if (!B) throw new Error("Response from adapter was undefined or cannot be processed");
      const N = B;
      qe(() => {
        l.forEach((O) => {
          O(N);
        });
      });
      const z = { uid: E, status: "complete", items: [A, B] };
      qe(() => {
        g.forEach((O) => {
          O(z);
        });
      });
    } catch (w) {
      oe(w);
      const b = w instanceof Error ? w : typeof w == "string" ? new Error(w) : new Error("Unknown error");
      qe(() => {
        k.forEach((C) => C("failed-to-load-content", b));
      });
    }
  })(s, o, e, t, a, y, v).finally(() => {
    qe(() => R());
  })) : (h = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), $u(s, o, e, t, h, d, f, y, v).finally(() => {
    qe(() => R());
  }));
  const R = () => {
    m == null || m.clear(), m = void 0, a == null || a.clear(), a = void 0, c == null || c.clear(), c = void 0, p == null || p.clear(), p = void 0, h == null || h.clear(), h = void 0, d == null || d.clear(), d = void 0, f == null || f.clear(), f = void 0, y == null || y.clear(), y = void 0, v == null || v.clear(), v = void 0;
  };
  return { segment: { status: "active", uid: s, items: [] }, dataTransferMode: S, observable: { get segmentId() {
    return s;
  }, on: (E, A) => {
    E === "userMessageReceived" && m ? m.add(A) : E === "aiMessageReceived" && a ? a.add(A) : E === "aiServerComponentStreamStarted" && c ? c.add(A) : E === "aiServerComponentStreamed" && p ? p.add(A) : E === "aiMessageStreamStarted" && h ? h.add(A) : E === "aiMessageStreamed" && d ? d.add(A) : E === "aiChunkReceived" && f ? f.add(A) : E === "complete" && y ? y.add(A) : E === "error" && v && v.add(A);
  }, removeListener: (E, A) => {
    E !== "userMessageReceived" ? E !== "aiMessageReceived" ? E !== "aiMessageStreamStarted" ? E !== "aiMessageStreamed" ? E !== "aiChunkReceived" ? E !== "complete" ? E !== "error" || (v == null || v.delete(A)) : y == null || y.delete(A) : f == null || f.delete(A) : d == null || d.delete(A) : h == null || h.delete(A) : a == null || a.delete(A) : m == null || m.delete(A);
  }, destroy: () => R() } };
}, Fu = { "data-transfer-mode-not-supported": "Requested data transfer mode is not supported", "no-data-transfer-mode-supported": "Adapter does not support any valid data transfer modes", "connection-error": "Connection error", "invalid-credentials": "Invalid credentials", "invalid-api-key": "Invalid API key", "http-server-side-error": "HTTP server side error", "http-client-side-error": "HTTP client side error", "failed-to-load-content": "Failed to load content", "failed-to-stream-content": "Failed to stream content", "failed-to-stream-server-component": "Failed to stream server component", "failed-to-render-content": "Failed to display content" }, ps = (n, e) => n !== void 0 && n.length > 0 || e !== void 0 && e > 0 ? "active" : "starting", Ro = "nlux-comp-welcomeMessage-text", fi = (n, e) => {
  const t = n.querySelector(`.${Ro}`);
  if (e !== "" && e !== void 0) if (t) t.textContent = e;
  else {
    const r = document.createElement("div");
    r.classList.add(Ro), r.textContent = e, n.appendChild(r);
  }
  else t == null || t.remove();
}, mi = "nlux-comp-welcomeMessage-personaName", fs = (n) => {
  const e = document.createElement("div");
  e.classList.add("nlux-comp-welcomeMessage");
  const t = Fs({ name: n.name, avatar: n.avatar });
  e.append(t);
  const r = document.createElement("div"), s = document.createTextNode(n.name);
  return r.append(s), r.classList.add(mi), e.append(r), fi(e, n.message), e;
}, Oo = () => fs({ name: "", avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAAewgAAHsIAXgkHaEAABj0SURBVHic7Z13vBxV2ce/Z29ugEQMEAICQUBAkBqqlCiRKqC0gApKE14poh8VUCmihv4SCB2CVAtFQBR9UZpCaMIL0ouAGIIEQgsJya27e/zjmb117+yUc+bM7J7v53Nys3dnzjx3dn9z2nOeR2mt8Xg89Sm5NsDjyTNeIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCKNsVdwzY4Ktqgej+v6RHwpQ8lqr2jFD3q+9UAPrGHDcwN8F6JD3hr1m0LHjgYnAWsAqwGrA8sDKwNLAOGAMsCTQPuDkMtANdAALgUXAPOBtYC4wB5gNvI5m7gBLhxjOiK8VwMAdpQOPrf1eD31PD/5dcJwa8lr+P+D4Ie8pCxtZ249/z3id1gTSoowHNgEmBWUDNGsBYy1eswy8BrwIPAs8BTyBiMeTEi+QdCwFfA6YAmwLbAaMHf7Ytsoo4NNB2XPA758GHgHuB2bBwFbGExUvkPisAOwK7ALsAKyQrR4is3FQjgR6EaH8CfgL8E+HdhUKL5BoLAHsBUwFdkczxq05sWkHdgwKiFhuBm7DtyyheIGEsyFwMHCA0nol18YYZLugnAfcAlwD3OPUopziBVKf3dEcCXzJtSGWGQ0cEJTHgV8A1wI9Dm3KFX4dZDD7A48iffVmF8dQNgdmAv8CTkCmoFseLxDhq8CTaH09Wm+J1rRwmYjWZyBC+TEy/mpZWl0gOwEPorkRzaT+BS1f0ExAcybwKvCtNDe5yLSqQNYAbkZzF5ptc/BlzHOZiGYm0vXcKukNLyqtKJD9gRdB7+v6m1ewsiXoR4CTE931gtJKAvkEcAua69Es4f77VthyKuLOsk3cD6CItIpADgReRjM1B1+wZigbo3kIOCPm51A4mn0dZDRwFVp/w7UhTcoJyETHQYizZNPRzALZXMGNwJquDWlyNgeeAw5DFhmbimYVyBHA5WjXZrQMJcRdZUvgaMe2GKUZBXIZWh/p2ogW5SjEf20v4H23ppiheQSiWBL4E5odXJvS4kxGNm7tiuxJKTTNIpBV0PwNWNu1IR4AVkKmgr8I3OnWlHTYE8iwfdqGGD6uWA/0LGS7qydf/AX4BvAb14YkxZ5AqtZqFkSAWwctR0s71OWcXwPLAhe7NiQJ1gSiKnamkHTf0qaaDDxg5SIe01yErEmd59qQuBR1DLI1WntxFItzkX7F+Y7tiEURXU0mAQ+5NsKTiBnIGlVhKFYLolgDzcPYmwLw2Ody4EPgJsd2RMKeQLThMYji42j+riQWlafY3Ai8hWaWa0MaYVEgButSgOYBJCaVpzn4G7AWmn+7NiSMYnSxNLcBG7k2w2OUEjKWXJ0cR1HJdxdLRho/Q3x7PM3HSsDdwHZ5dSzNexdrd+CnRmry5JXPA+eiOda1IfXIcxdrRTS3uzbCkwk/QMKh5u7zznMX6y7ys07TDTwJvAC8gkxTdiIxb5dGIqtvCHyWfD908sxtwIqA+SQfKcjrh3kG+RiU3wr8DvgrkrimEasAOyN74L9g0a5mpATcgWy6yg1Km16vCOg9bdlkJyq2AB4zakx8LgQuQPFaorPllu4AnIL0sT3ROREJWBeb9pPnm7bFpkCWSXimmovMbrjgLuBYFM+JKQlr0YP+fwzirOeJjP400pWNRfvJHxq3xJ43bzLdzQBnaQaO04pzLXixXKy0noUExF7VdOVNyu+QMZ1z7A2C48daWg/N9xzEeOpGxg3n2roVwDPARmieyUFMqyKUDYDvxD7PAnmZJQL4rYNrfoCkKbvb6lWkUfoQ2AIRi6cRmguBZVybYXFHYQxJK74JrG/Nlvp8BGyGUrMzvGYPmm1Av4qEQvWEcxWaqS4NyMM07yh05tsxe4FtUBmkShZHSyT3BgCLgc+h+Sf5asHzyD7AlmjtbFYzDwuF15O1C7tSnwee6/vijrK4vaQKDN9+/CqyK/JRexduGn4PrOzq4m4H6dL/38+aDfX5X+Dvfa+0li9wnC5hFJSITpUrUvfwTE6PAd81e9GmZCXgOFcXt7YOUj7l41EOewAJNJYVz1JvhV4H/7S3oUeV+lu/NA2LVqieClSrfWIZgUfJ2epxDukAxgHlsINGTVto/MIWW5C6T82BZXM0kzOePtwtdHqwtwrlavqlkJJClatSH6qRTfvlYFo172UMmh81/E5ZwGUXa3rGySm/D/o/oTe3qlFdZekShT/1R6ZNich6ysHdbXgj5qD12TlI3pn3ciKattBbaQFrAlHhZX0F2zU4xlzRvAicH3oTNX0th+pJ2IoooKIpdVZQOrh2NULRnKA0CzO7H8UsYxR8O+wYG7hqQX6eaRMNBygNkYpSqN4qqrsCpRi3XQFKUeqsyKBfqThPNQ0cl4OuTN7LSVRhxGIBFwuFy6MyXfy5AQmkHAvVXUGPLolIosxwlRSqqwK9gbDi94l/Afwcd46aRWAFYE80f8jqgi4WquL72KRrPY6JbaECtKbUUZaWoNF4pKRQZY3qLMvJye09PgdP6byXE8I/DLO4WCj8trVrDmc6Wn2Q7FQFPRXU4l70Um2hhwHQ0SstTRs1YSbhN8DZyMYrT30+i+zgfDmLi2XdguxKdmkKysApqR5XJYVa3CuD9lEj3KpSCdVZ7h+zJBdHjT+mrqH5OSqrC2U9SD86w6b4TDSdqetpK6E6yjJ1O6qEbh9QlmiDSlXeL5VM2X1dDroxeS8Ho1HDfm+BLMP+LIuE8cmCHpShHN4KEUFXBb0UlDrL/X9bSUFZB+MUI1cD+DuapxE3HE99at+lP9m+UJZjkP2wN109lIuArtS1aEQEo0qU3u/qdx3RA94f3UZ13GgRibmcKGcjTpyekTmQDARizRerctyYob/6K9lF+hiPbIZKR5uCKqiPumWMoZT8TiHiCFoXVElEMrpNumIm0HyAPCk99elA7k9f2NK26R3GL5LVIH05shPHLzEljrKm9GGXiGNUqV8c0P+zTZwbSx92oxb3BouLqaZ6ay3UL1L/Dc3NGCRJqFUsBm0Y1DLtYes6wy/M6anO14gYequoBd39r8MIFgbVRz3Sooxtly5musb5YuCHqWpofqZiORpjVi3IbhldZxaal1M9uUvB+seCbqmxLeKwSclYRXWUUYuClqTWFUvGG0gYIs/IHASMtXmBLGaxSsCO1q4zmNNSnd2mpOVY2CNf7ji+WDVGlaBLnBX12HZx8EouknOQiCue+jyI5YmfLGaxtiCbweabpIlO0iZOiiwMxnxJxDGgLrrK4q84ph10NalI7kH+Lr+yPpw7Ucr6GCSLhcLtM1o8ujDxuUoG5OqjQBxRu1VhtJVQnRXZX5J0b4kwIwcLc3krj5DBAB2yGYN8LoNraGBmorMCb93Sop7+1yZQoEsKtbgsriqlxDNbM7HmzF1I3gCmZHUx212sNsS5zDa3AgtinzVQHBUtU7YmCcYxalEP+mPt0F5Kspi4CHFiPNCscYVkIRIMvAcN8gTB6ijEdhdrPTTLZdDkxu+GBDaqjl5xFzHVcgwlqLa0qBd6ddKW5MwcdGtcl/mI+83sure5104ja3sWaxNr9ffzGoqHY59VKqG6yqjuqt24WNDfUnX0Uh07WkQTxHOIyItoHgK2tWVizqkAW1EaIA5N315b1V016eYzCIuRFTVoJtmrP0BxOTrOF1ye4qqnIhucbLUcQwkcG1VHL3rMKLEj3kPvdCTBTCuyA6iX++5XTRwaiR5TrprvHgfYTn9gP4S95ur+PlMEFBK9pKPc/zoralPJXRX0Um2oeE+9PwNzgE/aMS63HKPh/mEPFI3cv4rF7jH2u1jrWqtf+APwfuSjg8AKqm/3X5bqCCgp8e1qU0kG7afSWj5aN6G4pO6nVNVSLM/D2pzFmghMtFY/gFKXRD5WB0+anir0OBIH9LVYqrOMVu3yAVc1kZoyxVVoPR2JMtjsvIlSX6vbOdBBy5HBR2hTf2tYrBs089D67khBx6rBzawEgeEcaaOPUuBG31Vm0JRaoyJ7E9I5YxYBzUJgu4afZwbYnOZdzeq0H1wZ41gg6NpUcC8QkDvfq2UGRsWa+p2BpisH0662ygfApsC/6t63kUMwrTDSG2mwGZt3ouVQlDMjH6tA9VZkHSIkQEnmlIDuqtgWhBqKUMpoPS0HoUBtlPlonUQce6D1LTY+IpuDdJsOdg8iLgeNCWat6DYQlNo0NXtqrUh09/izgROBj1myzAWdwBYoXq/7blWH3ZvrgCVsGGWzizXeYvcqRkYqJb5Q8t/8URu091Ti3IMqmhNz0B0y+ZluS1jLUR3x3IPRLIO2EyfL5iyWrRx8H4G6OdKRqraQpNM+ClZFgpWtDiyP7HlfEom99T4wF3gJeE7si4kCKuIuodtV1FX2i9CcBKwY+3p5Q7ELWj0JBGIZ0lSMHDehDbg0+P9oG6bZzFG4jKV6f43Wjdega12r3sTi2BHYE/FG3pBaLeFdoPlI9+92xIFyfuSrlZBZthLo6AHo/gfLW04z4BDCdk6GBxU5A9mbzoCfRrEW1YTD214C1jFer2JD5EndmLIeeUpwYCyrvp9qLBK175vAZ1JaugC4EjgXrd8C+r/0mvofvAZKSJariCjNw8DW6Ux1g4afopgmr4Z/SCr8u7kcgxeJ53Jlxfi412YXy4ai/4FWjcVRaz3izZcfjdanYK7LMg44FjgamAac1fCMwIlRlXWchcz90Xp2Qhtdcp1Salq/BgaLQdXrag1m6HqQlS6WzUH6khYGchdGOjCeONZDciVegmZFCwPQpYAzkVyEjVulmrgrVSJOjb4O/Mz5IDtemQUcgtaoEYr8bSOePwHNkUN+Z+Vhb3Ml3bSiO9HcEOkDiJ6x9lDgeWq5Em0hdm2JdA2/2vD42nTvyDM3Q8vPySjauQFepVGMtMafxU/q/M7Kd9nmOohpg69hQBS9kOs2RlqWc9CZpxcuATcis2LTGx6tNTH6iLshX748Mx/YhjBH/8af3xJIt3UoVibxXeQHSYbiVGN1aW4H/WVj9cXnHMTT+fCGR0YXyb9A7wnZZV+KySsodgb1LlBfCHqkNwZxJhn6Q7jIMJWE69G8Ham70Zg7AJfiqHEYkadoo3buuZ1sExRF5U0k/NPs8MMafoAfA75vwqCo2BRIxWBd6QLC9fN7JIlPXvgycJnhOi9FotvnhbeBzYAFouOQCYfGhInfyqZ0mwJpPF6IxqPAiwbq+SWy8Jc3jgS+Y7jO75KP9An/RuISzDNUX1jrYfKB3IdNgXQaquenBuo4j3yHzbkQ2MpwnV9HwgW54lFgEtKCmGB3wteoyoauMwibAllsoI5XgDtT1nEsGfdbE3IX5j1SvwFcYLjOKPwKEfxCg3U2mnE01WMZhE2BmMhmcnLK8/chynRqPlga8d8yzfeQblwWaCTt9kGG612dxtEUew1fE7ArkPdSnv8f4Lcpzt8CO184m+yORA40zUyku/OQhbpr3IF4JUSPExCdKDNzprr0g7ApkHdSnv+DFOeuBNyf8vqusNUlehqYDByBhA8yxYPIbNzuiMu/DQ6LcExLCeQ1INqej+G0Aw8DS6W4vksmIW7strgCWBNZpLwvYR2vI+GHvoBsB7CZTHNvoqXPiL8PJwI294P8J8W5ab4g9yF91iJzGeKSYuVDR2Z8rgrK2siXfAuki7QyMh6qBUjtQB52s4EngVnIDJVN77WBRJ0Cf9fGxfMokPuRjLhJuBXx9Sk6bci44YAMrvVKUK4e8Luao6nG0uA3IqsQPfnrXBsG2OxizU54XtL1iiuQWatmYX+yCN1an56guBQHwLdiHFt/P3tKbArkNeLf4FOIGq1kMNOx2293xTWuDXBMY2fOfl6zYYBNgcwnnvv1C5DIY/cMZDGwGdmMfPmOZckUZDwUFSszaLa9eeMYnSTn3HnACQnOKxKXuzbAEXH80+Yhfl/GsS2QZyIety/xu1anUwwXkrR8EvGraiXGIdO7UXmWAnrzAjwV4ZgTib/iPSU4r1U4z7UBGXMg8XYIPm3LENsCeaLB+6cjO8TisAytl2lpBeINWIvOUTGP/4cVK7AvkDcYeXbheJI5I/6V4q6Sp+EM1wZkxKbIgmUcHrNhCGSz5XZogs1XgZ1I5mV7A9kkBs0jE4jmk1R04m4ZnoPFYBVZCOTR4OdLSKuxDnBPgnpmAF8zZVRBMbX1OK+MRhZI4zDLhiE1bLqa1LgJmc1K84eciexraHU+gQxgf+XaEEscSPzuc1K3pEhk0YK8SzpxnAz82JAtzUAzp2BLMm2fpDcSmbyH/TmQZKvrzcyqNJfPWY1JwPoxz3meZK5JkcmzQL6ERCLxDOds1wZYIEmUyz8at2IIeRXIXmTwxxeYtYCdXRthkKVJ5tpvJS/hQPIokKOA21wbUQDOcW2AQY4gfmzdN2i8EJ2avAnkMvpTannC2Qg7AR5ckKR7lSagR2TyIpDtkdQAWYWnaRaaYSyyD8mSFl1n2pB6uBbIpsje63uJP4PhkeBsm7s2IiVJImc+j3jwWieLhcKhrI3sG/8KktPCk44ZSNCFIrIt0lWMy0zThoyEC4HcgOyU85hhMtISW/NotUiSLmIVuNawHSPioot1rYNrNjs2ohnaZiOkBYnL9dgLhzQMFwK5BLNBjT0yFpns2oiYJI0gmenEhAuBaNxEHG92MuuXG2ATGgejrsdjyGxnZriaxZpOdpH5WoX1kImPIpBUzJkH6HAlkIW0brQOm1zs2oAIfBEJcxqXl7Hs2l4Pl+sgJjJHeQYzAZjm2ogGXJnwPCexz1wK5F2KOfuSd36CpH/IIyci8Xbj8hJ2I8iPiOuV9JMcX79ZudG1AXWYQPLNXseYNCQOrgWygNYI/pY1n0cy3eaJPyc8707EFckJrgUCcD7iW+MxywXILr08cDXJvSf2NWlIXPIgEJBsrB7z/J9rAxBv3UMTnns8sMigLbHJi0CeonkjdbhkZdzmSl+d5IlU55CDDMV5EQhIfg8riRhbnAOQHXtZsyTwQIrz9zNlSBryJJBukmeX8oRzOdmnpnsAmJjw3KuwGE40DnkSCEhznHS2wxPOfcCnMrxW0o1cH5CjbGF5EwjIrEW3ayOakHYkDGzSp3oUPg48AmyXoo69yJGfXh4F0kG85Cme6CyPbKxa00LdmyHbYLdKUce5pBu3GCePAgHpZnk3FDtMQBLOTDFY57HA40g2rKQ8T7LoJlbJq0BA3Asy2ZjfgowF/gb8KGU9OyHpLdJOx+qgrtyRZ4EA7Ijk6/bY4SzgIeQ+R2UMkobiXuAuYGsDduwBvGWgHuO4CNoQh3eQ/QOZ7wNoIbYB7gYeRIKxPYBkjF0MLAGMR+JWbYhET9kNSQlnip/hyFM3CkprSxMGh8SNJBnKMcBFJiv0hLIAcfFYElgWez2NWzC5IHit+e9y3rtYNS6mGLvlmoVxyL6N8dj7jjxBTlbLwyiKQEASy//OtREeI8yhIHGFiyQQgKlYzknnsc6HyFpJh2M7IlE0gYCs0j7u2ghPIjqBz5LTGat6FFEgIFOLT7o2whOLbkQcL7s2JA5FFUgZudn/79oQTySqyOdVuIXfogoEoBe56fe7NsTTkMMR95bCUWSBgLgoTAF+79YMTwhzgGtcG5GUogukxt5I+jZP/rCax9w2zSIQgKOBH7o2wjMMp0EX0tJMAgHJ/LoX3sExT6zu2oA0NJtAAP4AbIBESvG4J0mKtdzQjAIBeAXJQXGFa0M8rI6EHyokzSqQGkcgQekWuzakxVnPtQFJaXaBgAROWwfpenncsIFrA5LSCgIBeBMZvB+Gz4/oAi+QgnA18GkkYrgnOz7j2oCktJpAAOYh23gPBd5wbEursC4Sl6twtKJAalwLrI1kZPLdLrssB6zl2ogktLJAQFywT0MCqZ1FwVd9c866rg1IQqsLpMZ7SIrhNZEkmPPcmtOUFHLB0AtkMO8g2Xc/BXwbCSzQClSwvwW2kGshXiD16QAuRSKUb4+MVz5yaZAl7gC+DqwBrIbs1DwBO6kHxlio0zpFiYuVB8YjEQD3BnYBRrs1JzGPALche2heCTlucySC4lTMOBxegu1stRbiYnmBJGMlYGckZOcU7KYUSMsiZNflX5C9GS8lqGNP4CtBSRqNczIS5tQeXiC5pA3Z+jsZCWezKdJdccX7wDNILpCHkODSHxiqe1Xgm4hQ4owp7iVe/N9keIEUhvWBjZF4tusgawCfRCIWmqILeB2YDfwTCYjwNPAC2Thn7oDkP9wLWecYiReALTOxyQuk0IxDumYrBz+XRRLajEeCRI9GVptLyF77XmTjVw8SbO09pCWYB8wF3kZm3VwzDhHJVMTnanlkVuwtxKXneCQKjX0KJRCPpwnw07weTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwj/Ba/47FkhCYEqAAAAAElFTkSuQmCC" });
var Uu = Object.defineProperty, Vu = Object.getOwnPropertyDescriptor, jo = (n, e, t, r) => {
  for (var s, o = r > 1 ? void 0 : r ? Vu(e, t) : e, a = n.length - 1; a >= 0; a--) (s = n[a]) && (o = (r ? s(e, t, o) : s(o)) || o);
  return r && o && Uu(e, t, o), o;
};
let rr = class extends at {
  constructor(n, e) {
    super(n, e), this.updateConversationStarters = (t) => {
    };
  }
  conversationStarterClicked(n) {
    this.getProp("onConversationStarterSelected")(n);
  }
};
jo([dt("conversation-starter-selected")], rr.prototype, "conversationStarterClicked", 1), rr = jo([Ct("conversationStarters", ({ appendToRoot: n, props: e, compEvent: t }) => {
  const r = ((o) => {
    const a = document.createElement("div");
    return a.classList.add("nlux-comp-conversationStarters"), o.forEach((c, p) => {
      const h = document.createElement("button");
      h.classList.add("nlux-comp-conversationStarter");
      let d = document.createElement("div");
      c.icon && (typeof c.icon == "string" ? (d = document.createElement("img"), d.setAttribute("src", c.icon), d.setAttribute("width", "16px")) : (d.className = "nlux-comp-conversationStarter-icon-container", d.appendChild(c.icon)));
      const f = document.createElement("span");
      f.classList.add("nlux-comp-conversationStarter-prompt"), f.textContent = c.label ?? c.prompt, h.appendChild(d), h.appendChild(f), a.appendChild(h);
    }), a;
  })(e.conversationStarters);
  n(r);
  let s = [];
  return e.conversationStarters.forEach((o, a) => {
    const [c, p] = ur(r, `:scope > :nth-child(${a + 1})`).on("click", () => {
      t("conversation-starter-selected")(o);
    }).get();
    s.push(p);
  }), { elements: {}, actions: {}, onDestroy: () => {
    s.forEach((o) => o()), s = [], r.remove();
  } };
}, ({}) => {
})], rr);
let ms = class extends at {
  constructor(n, e) {
    super(n, e), this.setConversationStarters(e.conversationStarters);
  }
  setConversationStarters(n) {
    var e;
    if (n || this.conversationStartersComp) {
      if (n && !this.conversationStartersComp) {
        const t = this.getProp("onConversationStarterSelected");
        return this.conversationStartersComp = Yt(rr).withContext(this.context).withProps({ conversationStarters: n, onConversationStarterSelected: t }).create(), void this.addSubComponent(this.conversationStartersComp.id, this.conversationStartersComp, "conversationStartersContainer");
      }
      !n && this.conversationStartersComp ? (this.removeSubComponent(this.conversationStartersComp.id), this.conversationStartersComp = void 0) : (e = this.conversationStartersComp) == null || e.updateConversationStarters(n);
    }
  }
  setShowGreeting(n) {
    this.setProp("showGreeting", n), this.executeDomAction("resetGreeting", n);
  }
  setAssistantPersona(n) {
    this.setProp("assistantPersona", n), this.executeDomAction("updateAssistantPersona", n);
  }
  resetConversationStarters() {
    const n = this.getProp("conversationStarters");
    this.setConversationStarters(n);
  }
};
ms = ((n, e, t, r) => {
  for (var s, o = e, a = n.length - 1; a >= 0; a--) (s = n[a]) && (o = s(o) || o);
  return o;
})([Ct("launchPad", ({ appendToRoot: n, props: e }) => {
  const t = { assistantPersona: e.assistantPersona, conversationStarters: e.conversationStarters, showGreeting: e.showGreeting !== !1 };
  let r;
  if (t.showGreeting) if (e.assistantPersona) {
    const a = e.assistantPersona;
    r = fs({ name: a.name, avatar: a.avatar, message: a.tagline });
  } else r = Oo();
  r && (n(r), t.greetingElement = r);
  const s = document.createElement("div");
  s.classList.add("nlux-conversationStarters-container"), n(s);
  const o = (a = !0) => {
    t.showGreeting = a, t.greetingElement && (t.greetingElement.remove(), t.greetingElement = void 0), a && (t.greetingElement = t.assistantPersona ? fs({ name: t.assistantPersona.name, avatar: t.assistantPersona.avatar, message: t.assistantPersona.tagline }) : Oo(), t.greetingElement && s.insertAdjacentElement("beforebegin", t.greetingElement));
  };
  return { elements: { conversationStartersContainer: s }, actions: { resetGreeting: (a = !0) => {
    o(a);
  }, updateAssistantPersona: (a) => {
    const c = t.assistantPersona;
    t.assistantPersona = a, (c || a) && t.showGreeting && (a && c ? ((p, h, d) => {
      if (h.message !== d.message || h.name !== d.name || h.avatar !== d.avatar) {
        if (h.message !== d.message && fi(p, d.message), h.name !== d.name) {
          const f = p.querySelector(`.${mi}`);
          if (f) {
            const m = document.createTextNode(d.name);
            f.replaceChildren(m);
          }
        }
        if (h.avatar !== d.avatar || h.name !== d.name) {
          const f = p.querySelector(`.${Hs}`);
          f && li(f, { name: h.name, avatar: h.avatar }, { name: d.name, avatar: d.avatar });
        }
      }
    })(t.greetingElement, { name: c == null ? void 0 : c.name, avatar: c == null ? void 0 : c.avatar, message: c == null ? void 0 : c.tagline }, { name: a.name, avatar: a.avatar, message: a.tagline }) : o());
  } }, onDestroy: () => {
    var a;
    (a = t.greetingElement) == null || a.remove(), s.remove();
  } };
}, ({}) => {
})], ms);
var Gu = Object.defineProperty, Wu = Object.getOwnPropertyDescriptor, $r = (n, e, t, r) => {
  for (var s, o = r > 1 ? void 0 : r ? Wu(e, t) : e, a = n.length - 1; a >= 0; a--) (s = n[a]) && (o = (r ? s(e, t, o) : s(o)) || o);
  return r && o && Gu(e, t, o), o;
};
let Gn = class extends at {
  constructor(n, { conversationLayout: e, autoScroll: t, streamingAnimationSpeed: r, visible: s = !0, composer: o, assistantPersona: a, userPersona: c, showGreeting: p, conversationStarters: h, initialConversationContent: d, syntaxHighlighter: f, htmlSanitizer: m, markdownLinkTarget: y, showCodeBlockCopyButton: v, skipStreamingAnimation: S }) {
    if (super(n, { conversationLayout: e, visible: s, autoScroll: t, streamingAnimationSpeed: r, assistantPersona: a, userPersona: c, conversationStarters: h, showGreeting: p, initialConversationContent: d, composer: o, syntaxHighlighter: f, htmlSanitizer: m, markdownLinkTarget: y, showCodeBlockCopyButton: v, skipStreamingAnimation: S }), this.prompt = "", this.handleConversationStarterClick = (T) => {
      this.composer.setDomProps({ status: "submitting-conversation-starter" }), this.composer.handleTextChange(T.prompt), this.composer.handleSendButtonClick();
    }, this.handleSegmentCountChange = (T) => {
      var E, A;
      if (this.segmentCount === T) return;
      this.segmentCount = T;
      const R = ps(this.getProp("initialConversationContent") || void 0, this.segmentCount);
      this.chatRoomStatus !== R && (this.chatRoomStatus = R, this.executeDomAction("updateChatRoomStatus", this.chatRoomStatus), this.chatRoomStatus === "active" ? (E = this.launchPad) != null && E.id && (this.removeSubComponent((A = this.launchPad) == null ? void 0 : A.id), this.launchPad = void 0) : this.addLaunchPad(this.getProp("showGreeting") ?? !0, this.getProp("assistantPersona"), this.getProp("conversationStarters"), this.handleConversationStarterClick));
    }, this.segmentCount = d && d.length > 0 ? 1 : 0, this.chatRoomStatus = ps(d, this.segmentCount), this.chatRoomStatus === "starting" && this.addLaunchPad(p, a, h, this.handleConversationStarterClick), this.addConversation(a, c, d), this.addComposer(o == null ? void 0 : o.placeholder, o == null ? void 0 : o.autoFocus, o == null ? void 0 : o.disableSubmitButton, o == null ? void 0 : o.submitShortcut), !this.conversation || !this.composer) throw new Error("Chat room not initialized — An error occurred while initializing key components.");
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
    mt(() => {
      var e, t;
      const n = (t = (e = this.renderedDom) == null ? void 0 : e.elements) == null ? void 0 : t.conversationContainer;
      if (n instanceof HTMLElement) {
        this.autoScrollController = Ru(n, this.getProp("autoScroll") ?? !0);
        let r = 0;
        const s = 20, o = () => {
          n.scrollHeight > n.clientHeight && (n.scrollTo({ behavior: "smooth", top: 5e4 }), clearInterval(a));
        }, a = setInterval(() => {
          r >= s ? clearInterval(a) : (o(), r++);
        }, 10);
      }
      this.context.emit("ready", { aiChatProps: Ou(this.context.aiChatProps) });
    });
  }
  setProps(n) {
    var e, t, r, s, o, a, c;
    if (n.hasOwnProperty("autoScroll")) {
      const p = n.autoScroll;
      (e = this.autoScrollController) == null || e.updateProps({ autoScroll: p });
    }
    if (n.hasOwnProperty("conversationLayout") && ((t = this.conversation) == null || t.setConversationLayout(n.conversationLayout)), n.hasOwnProperty("syntaxHighlighter") && this.setProp("syntaxHighlighter", n.syntaxHighlighter), n.hasOwnProperty("htmlSanitizer") && this.setProp("htmlSanitizer", n.htmlSanitizer), n.hasOwnProperty("markdownLinkTarget") && this.setProp("markdownLinkTarget", n.markdownLinkTarget), n.hasOwnProperty("skipStreamingAnimation") && this.setProp("skipStreamingAnimation", n.skipStreamingAnimation), n.hasOwnProperty("streamingAnimationSpeed") && this.setProp("streamingAnimationSpeed", n.streamingAnimationSpeed), n.hasOwnProperty("assistantPersona") && ((r = this.conversation) == null || r.setAssistantPersona(n.assistantPersona ?? void 0), (s = this.launchPad) == null || s.setAssistantPersona(n.assistantPersona ?? void 0)), n.hasOwnProperty("userPersona") && ((o = this.conversation) == null || o.setUserPersona(n.userPersona ?? void 0)), n.hasOwnProperty("showGreeting") && ((a = this.launchPad) == null || a.setShowGreeting(n.showGreeting ?? !0)), n.hasOwnProperty("conversationStarters") && ((c = this.launchPad) == null || c.setConversationStarters(n.conversationStarters)), n.hasOwnProperty("composer") && this.composer) {
      const p = { ...this.composer.getProp("domCompProps"), ...n.composer };
      this.composer.setDomProps(p);
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
  addLaunchPad(n, e, t, r) {
    this.launchPad = Yt(ms).withContext(this.context).withProps({ showGreeting: n, assistantPersona: e, conversationStarters: t, onConversationStarterSelected: r }).create(), this.addSubComponent(this.launchPad.id, this.launchPad, "launchPadContainer");
  }
  addConversation(n, e, t) {
    this.conversation = Yt(ls).withContext(this.context).withProps({ assistantPersona: n, userPersona: e, messages: t, conversationLayout: this.getProp("conversationLayout"), markdownLinkTarget: this.getProp("markdownLinkTarget"), showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"), skipStreamingAnimation: this.getProp("skipStreamingAnimation"), streamingAnimationSpeed: this.getProp("streamingAnimationSpeed"), syntaxHighlighter: this.getProp("syntaxHighlighter"), htmlSanitizer: this.getProp("htmlSanitizer"), onSegmentCountChange: this.handleSegmentCountChange }).create(), this.addSubComponent(this.conversation.id, this.conversation, "conversationContainer");
  }
  addComposer(n, e, t, r) {
    this.composer = Yt(It).withContext(this.context).withProps({ props: { domCompProps: { status: "typing", placeholder: n, autoFocus: e, disableSubmitButton: t, submitShortcut: r } }, eventListeners: { onTextUpdated: (s) => this.handleComposerTextChange(s), onSubmit: () => this.handleComposerSubmit() } }).create(), this.addSubComponent(this.composer.id, this.composer, "composerContainer");
  }
  handleComposerSubmit() {
    const n = this.props.composer;
    (({ context: e, composerInstance: t, conversation: r, autoScrollController: s, messageToSend: o, resetComposer: a, setComposerAsWaiting: c }) => () => {
      var h, d;
      const p = r.addChatSegment();
      try {
        const f = t.getProp("domCompProps");
        t.setDomProps({ ...f, status: "submitting-prompt" });
        const m = { aiChatProps: e.aiChatProps, conversationHistory: r.getConversationContentForAdapter((d = (h = e.aiChatProps) == null ? void 0 : h.conversationOptions) == null ? void 0 : d.historyPayloadSize) }, y = Hu(o, e.adapter, m);
        y.observable.on("error", (v, S) => {
          r.removeChatSegment(p), s == null || s.handleChatSegmentRemoved(p), a(!1), e.exception(v), e.emit("error", { errorId: v, message: Fu[v], errorObject: S });
        }), y.observable.on("userMessageReceived", (v) => {
          r.addChatItem(p, v), e.emit("messageSent", { uid: v.uid, message: v.content }), mt(() => {
            if (s) {
              const S = r.getChatSegmentContainer(p);
              S && s.handleNewChatSegmentAdded(p, S);
            }
          });
        }), y.dataTransferMode === "batch" ? y.observable.on("aiMessageReceived", (v) => {
          const S = typeof v.content == "string", T = { ...v, content: S ? "" : v.content };
          r.addChatItem(p, T), S && r.addChunk(p, T.uid, v.content, v.serverResponse), r.completeChatSegment(p), e.emit("messageReceived", { uid: v.uid, message: v.content }), a(!0);
        }) : (y.observable.on("aiMessageStreamStarted", (v) => {
          r.addChatItem(p, v), c(), e.emit("messageStreamStarted", { uid: v.uid });
        }), y.observable.on("aiChunkReceived", (v) => {
          const { messageId: S, chunk: T, serverResponse: R } = v;
          r.addChunk(p, S, T, R);
        }), y.observable.on("aiMessageStreamed", (v) => {
          v.status === "complete" && e.emit("messageReceived", { uid: v.uid, message: v.content });
        }), y.observable.on("aiServerComponentStreamStarted", (v) => {
          r.addChatItem(p, v), c(), e.emit("messageStreamStarted", { uid: v.uid });
        }), y.observable.on("aiServerComponentStreamed", (v) => {
          v.status === "complete" && e.emit("messageReceived", { uid: v.uid, message: v.content });
        }), y.observable.on("complete", () => {
          r.completeChatSegment(p), a(!1);
        }));
      } catch (f) {
        oe(f), a(!1);
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
$r([dt("conversation-container-clicked")], Gn.prototype, "messagesContainerClicked", 1), $r([dt("chat-room-ready")], Gn.prototype, "onChatRoomReady", 1), Gn = $r([Ct("chatRoom", ({ appendToRoot: n, compEvent: e, props: t }) => {
  const r = document.createElement("div");
  r.classList.add("nlux-conversation-container");
  const s = document.createElement("div");
  s.classList.add("nlux-composer-container");
  const o = document.createElement("div");
  o.classList.add("nlux-launchPad-container");
  const a = document.createDocumentFragment();
  a.appendChild(o), a.appendChild(r), a.appendChild(s);
  const c = t.visible ?? !0, p = document.createElement("div"), h = (m) => {
    p.classList.remove("nlux-chatRoom-starting"), p.classList.remove("nlux-chatRoom-active"), p.classList.add(`nlux-chatRoom-${m}`);
  };
  p.classList.add("nlux-chatRoom-container"), h(ps(t.initialConversationContent)), p.append(a), p.style.display = c ? "" : "none";
  const [d, f] = ur(p, ":scope > .nlux-conversation-container").on("click", e("conversation-container-clicked")).get();
  return n(p), e("chat-room-ready")(), { elements: { composerContainer: s, conversationContainer: r, launchPadContainer: o }, actions: { updateChatRoomStatus: (m) => {
    h(m);
  } }, onDestroy: () => {
    f();
  } };
}, ({ propName: n, newValue: e, dom: { elements: t } }) => {
})], Gn);
const Yu = (n) => {
  const e = /* @__PURE__ */ new Set();
  let t = !1, r = null, s = null;
  const o = () => {
    if (t || e.size === 0) return;
    t = !0;
    const c = e.values().next().value;
    e.delete(c), r = (({ message: p }) => {
      const h = document.createElement("div");
      h.classList.add("nlux-comp-exceptionItem");
      const d = document.createElement("span");
      return d.classList.add("nlux-comp-exp_itm_msg"), d.append(document.createTextNode(p)), h.append(d), h;
    })(c), n.append(r), s = setTimeout(a, 3e3);
  }, a = () => {
    r == null || r.classList.add("nlux-comp-exceptionItem--hiding"), s = setTimeout(() => {
      t = !1, r == null || r.remove(), r = null, o();
    }, 500);
  };
  return { displayException: (c) => {
    e.add({ message: c }), t || o();
  }, destroy: () => {
    e.clear(), r == null || r.remove(), s && clearTimeout(s);
  } };
};
let Mo = class extends at {
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
Mo = ((n, e, t, r) => {
  for (var s, o = e, a = n.length - 1; a >= 0; a--) (s = n[a]) && (o = s(o) || o);
  return o;
})([Ct("exceptionsBox", ({ props: n, appendToRoot: e }) => {
  const t = (() => {
    const s = document.createElement("div");
    return s.classList.add("nlux-comp-exceptionBox"), s;
  })();
  e(t);
  let r = Yu(t);
  return { elements: { root: t }, actions: { displayException: (s) => {
    r == null || r.displayException(s);
  } }, onDestroy: () => {
    r == null || r.destroy(), t.remove(), r = void 0;
  } };
}, () => {
})], Mo);
class Qu {
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
    return this.status === "destroyed" ? (oe("Context.DataSyncService.destroy() called on a state that has already been destroyed"), { success: !0 }) : (this.status !== "updating" || this.contextId || oe("Context.DataSyncService.destroy() called with no contextId!"), this.contextId && (this.status = "updating", await this.dataAdapter.discard(this.contextId)), this.status = "destroyed", this.theContextId = null, this.updateQueueByItemId.clear(), this.actionToPerformWhenIdle = "none", { success: !0 });
  }
  async flush() {
    if (!this.contextId) throw new Error("Context not initialized");
    if (this.status === "updating") return void (this.actionToPerformWhenIdle = "flush");
    this.status = "updating";
    const e = this.updateQueueByItemId.keys(), t = [], r = [];
    for (const o of e) {
      const a = this.updateQueueByItemId.get(o);
      a && (a.operation !== "delete" ? ["set", "update"].includes(a.operation) && t.push(o) : r.push(o));
    }
    const s = t.reduce((o, a) => {
      const c = this.updateQueueByItemId.get(a);
      return c && (c.operation === "set" && (o[a] = { value: c.data, description: c.description }), c.operation !== "update" || c.data === void 0 && c.description === void 0 || (o[a] = { value: c.data, description: c.description })), o;
    }, {});
    if (Object.keys(s).length > 0) {
      Object.keys(s).forEach((o) => {
        this.updateQueueByItemId.delete(o);
      });
      try {
        await this.dataAdapter.updateItems(this.contextId, s);
      } catch (o) {
        oe(`Failed to update context data: ${o}`), Object.keys(s).forEach((a) => {
          const c = s[a];
          c && this.updateQueueByItemId.set(a, { operation: "update", data: c.value, description: c.description });
        });
      }
    }
    if (r.length > 0) {
      r.forEach((o) => {
        this.itemIds.delete(o), this.updateQueueByItemId.delete(o);
      });
      try {
        await this.dataAdapter.removeItems(this.contextId, r);
      } catch (o) {
        oe(`Failed to delete context data: ${o}`), r.forEach((a) => {
          this.itemIds.add(a), this.updateQueueByItemId.set(a, { operation: "delete" });
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
      if (!t) return oe("resetContextData() called with no contextId!"), void await this.backToIdle();
      try {
        this.status = "updating", await this.dataAdapter.resetItems(t, e);
      } catch (r) {
        oe(`Failed to reset context data: ${r}`);
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
    const o = r ?? (s == null ? void 0 : s.data) ?? void 0, a = t ?? (s == null ? void 0 : s.description) ?? void 0;
    this.updateQueueByItemId.set(e, { operation: "update", data: o, description: a });
  }
  async backToIdle() {
    this.status = "idle";
    const e = this.actionToPerformWhenIdle;
    this.actionToPerformWhenIdle = "none", e !== "flush" ? e !== "reset" || await this.resetContextData() : await this.flush();
  }
}
class Zu {
  constructor(e, t) {
    this.actionToPerformWhenIdle = "none", this.status = "idle", this.taskCallbacks = /* @__PURE__ */ new Map(), this.tasks = /* @__PURE__ */ new Set(), this.updateQueueByTaskId = /* @__PURE__ */ new Map(), this.contextId = e, this.adapter = t;
  }
  canRunTask(e) {
    return this.taskCallbacks.has(e);
  }
  async destroy() {
    return this.status === "destroyed" ? (oe("Context.TasksService.destroy() called on a state that has already been destroyed"), { success: !0 }) : (this.status = "updating", await this.unregisterAllTasks(), this.status = "destroyed", this.updateQueueByTaskId.clear(), this.tasks.clear(), { success: !0 });
  }
  async flush() {
    if (this.status === "updating") return void (this.actionToPerformWhenIdle = "flush");
    const e = this.updateQueueByTaskId.keys(), t = [], r = [], s = [];
    for (const a of e) {
      const c = this.updateQueueByTaskId.get(a);
      c && (c.operation !== "delete" ? c.operation !== "set" ? c.operation === "update" && r.push(a) : t.push(a) : s.push(a));
    }
    if (t.length === 0 && r.length === 0 && s.length === 0) return;
    this.status = "updating";
    const o = { ...this.buildUpdateObject(t), ...this.buildUpdateObject(r) };
    if (Object.keys(o).length > 0) try {
      const a = await this.adapter.updateTasks(this.contextId, o);
      if (a.success) for (const c of Object.keys(o)) {
        const p = this.updateQueueByTaskId.get(c);
        p && p.operation === "set" && (this.taskCallbacks.set(c, p.callback), this.updateQueueByTaskId.delete(c));
      }
      else oe(`Context.TasksService.flush() failed to register tasks for context ID ${this.contextId}
Error: ${a.error}`);
    } catch (a) {
      oe(`Context.TasksService.flush() failed to register tasks for context ID ${this.contextId}
Error: ${a}`);
    }
    if (s.length > 0) try {
      const a = await this.adapter.removeTasks(this.contextId, s);
      if (a.success) for (const c of s) this.taskCallbacks.delete(c), this.updateQueueByTaskId.delete(c);
      else oe(`Context.TasksService.flush() failed to unregister tasks for context ID ${this.contextId}
Error: ${a.error}`);
    } catch (a) {
      oe(`Context.TasksService.flush() failed to unregister tasks for context ID ${this.contextId}
Error: ${a}`);
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
      if (!e) return oe("resetContextData() called with no contextId!"), void await this.backToIdle();
      try {
        this.status = "updating", await this.unregisterAllTasks();
      } catch (t) {
        oe(`Failed to reset context data: ${t}`);
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
        const o = {};
        s.description !== void 0 && (o.description = s.description), s.paramDescriptions !== void 0 && (o.paramDescriptions = s.paramDescriptions), t[r] = o;
      }
      return t;
    }, {});
  }
}
class Xu {
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
      if (this.theStatus === "initializing") return oe(`${this.constructor.name}.initialize() called while context is still initializing! You cannot initialize twice at the same time. Use ${this.constructor.name}.status or await ${this.constructor.name}.initialize() to make sure that the context is not initializing before calling this method.`), { success: !1, error: "Context is still initializing! Use AiContext.status to check the context status before calling this method." };
      if (this.theStatus === "syncing") return oe(`${this.constructor.name}.initialize() called on an already initialized context! Use ${this.constructor.name}.status to check the context status before calling this method. `), { success: !1, error: "Context already initialized! Use AiContext.status to check the context status before calling this method." };
      if (this.theStatus === "destroyed") return oe(`${this.constructor.name}.initialize() called on destroyed context! Use ${this.constructor.name}.status to check the context status before calling this method. When the context is destroyed, it cannot be used anymore and you should create a new context.`), { success: !1, error: "Context has been destroyed" };
      if (this.theStatus === "error") return oe(`${this.constructor.name}.initialize() called on a context in error state! Use ${this.constructor.name}.status to check the context status before calling this method. When the context is in error state, it cannot be used anymore and you should create a new context.`), { success: !1, error: "Context is in error state" };
      if (!this.theDataAdapter) return oe(`Adapter not set! You must set the adapter before initializing the context. Use ${this.constructor.name}.withAdapter() to set the adapter before calling this method.`), { success: !1, error: "Adapter not set" };
      this.theStatus = "initializing", this.theDataSyncService = new Qu(this.theDataAdapter);
      try {
        const r = await this.theDataSyncService.createContext(e);
        return this.status === "destroyed" ? (r.success && await ((t = this.theDataSyncService) == null ? void 0 : t.resetContextData()), { success: !1, error: "Context has been destroyed" }) : r.success ? this.contextId ? (this.theStatus = "syncing", this.theTasksAdapter ? this.theTasksService = new Zu(this.contextId, this.theTasksAdapter) : oe("Initializing nlux AiContext without tasks adapter. The context will not handle registering and executing tasks by AI. If you want to use tasks triggered by AI, you should provide an adapter that implements ContextAdapter interface [type ContextAdapter = ContextDataAdapter & ContextTasksAdapter]"), { success: !0, contextId: r.contextId }) : (this.theStatus = "error", { success: !1, error: "Failed to obtain context ID" }) : (this.theStatus = "error", { success: !1, error: "Failed to initialize context" });
      } catch (r) {
        return this.theStatus = "error", { success: !1, error: `${r}` };
      }
    }, this.observeState = (e, t, r) => {
      var s;
      if (this.theStatus !== "idle") if (this.theStatus !== "initializing") {
        if (this.theStatus !== "destroyed") return (s = this.theDataSyncService) == null || s.setItemData(e, t, r ?? null), { setData: (o) => {
          var a;
          (a = this.theDataSyncService) == null || a.updateItemData(e, void 0, o);
        }, setDescription: (o) => {
          var a;
          (a = this.theDataSyncService) == null || a.updateItemData(e, o, void 0);
        }, discard: () => {
          var o;
          (o = this.theDataSyncService) == null || o.removeItem(e);
        } };
        oe(`${this.constructor.name}.observeState() called on destroyed context! Use ${this.constructor.name}.status to check the context status before calling this method. When the context is destroyed, it cannot be used anymore and you should create a new context.`);
      } else oe(`${this.constructor.name}.observeState() called while context is still initializing! You cannot observe state items while the context is initializing. Use ${this.constructor.name}.status or await ${this.constructor.name}.initialize() to make sure that the context is not initializing before calling this method.`);
      else oe(`${this.constructor.name}.observeState() called on idle context! Use ${this.constructor.name}.status to check the context status before calling this method. Use ${this.constructor.name}.initialize() to initialize the context when it is not initialized.`);
    }, this.registerTask = (e, t, r, s) => {
      if (this.theStatus === "idle") return void oe(`${this.constructor.name}.registerTask() called on idle context! Use ${this.constructor.name}.status to check the context status before calling this method. Use ${this.constructor.name}.initialize() to initialize the context when it is not initialized.`);
      if (!this.theTasksService) return void oe(`${this.constructor.name}.registerTask() called on a context that has does not have tasks service! You should use an adapter that implements ContextTasksAdapter interface in order to register tasks. Use ${this.constructor.name}.withAdapter() to set the right adapter before calling this method.`);
      if (this.theStatus === "destroyed") return void oe(`${this.constructor.name}.registerTask() called on destroyed context! Use ${this.constructor.name}.status to check the context status before calling this method. When the context is destroyed, it cannot be used anymore and you should create a new context.`);
      let o = "updating";
      if (!this.theTasksService.hasTask(e)) return this.theTasksService.registerTask(e, t, r, s).then(() => {
        o === "updating" && (o = "set");
      }).catch(() => {
        oe(`${this.constructor.name}.registerTask() failed to register task '${e}'!
The task will be marked as deleted and will not be updated anymore.`), o === "updating" && (o = "deleted", this.unregisterTask(e));
      }), { discard: () => {
        o = "deleted", this.unregisterTask(e);
      }, setDescription: (a) => {
        var c;
        if (o === "deleted") throw new Error("Task has been deleted");
        o = "updating", (c = this.theTasksService) == null || c.updateTaskDescription(e, a).then(() => {
          o === "updating" && (o = "set");
        }).catch(() => {
          o === "updating" && (o = "set");
        });
      }, setCallback: (a) => {
        var c;
        if (o === "deleted") throw new Error("Task has been deleted");
        o = "updating", (c = this.theTasksService) == null || c.updateTaskCallback(e, a).then(() => {
          o === "updating" && (o = "set");
        }).catch(() => {
          o === "updating" && (o = "set");
        });
      }, setParamDescriptions: (a) => {
        var c;
        if (o === "deleted") throw new Error("Task has been deleted");
        o = "updating", (c = this.theTasksService) == null || c.updateTaskParamDescriptions(e, a).then(() => {
          o === "updating" && (o = "set");
        }).catch(() => {
          o === "updating" && (o = "set");
        });
      } };
      console.warn(`${this.constructor.name}.registerTask() called with existing taskId: ${e}! It's only possible to register a task once. Use ${this.constructor.name}.hasTask() to check if the task already exists. Use ${this.constructor.name}.registerTask() with a different taskId if you want to register a different task.`);
    }, this.reset = async (e) => {
      var t, r;
      if (!this.theDataSyncService) return oe(`${this.constructor.name}.reset() called on a state that has not been initialized! Use ${this.constructor.name}.initialize() to initialize the context before attempting any reset.`), { success: !1, error: "Context has not been initialized" };
      try {
        return await ((t = this.theDataSyncService) == null ? void 0 : t.resetContextData(e)), await ((r = this.theTasksService) == null ? void 0 : r.resetContextData()), this.theStatus = "syncing", { success: !0 };
      } catch (s) {
        return this.theStatus = "error", { success: !1, error: `${s}` };
      }
    }, this.runTask = async (e, t) => this.theTasksService ? this.theTasksService.runTask(e, t) : (oe(`${this.constructor.name}.runTask() called on a state that has not been initialized! Use ${this.constructor.name}.initialize() to initialize the context before attempting any task execution.`), Promise.resolve({ success: !1, error: "Context has not been initialized with tasks service. An adapter that implements ContextTasksAdapter interface should be provided to the context, and the context should be initialized before running any tasks." })), this.withAdapter = (e) => {
      if (this.theDataAdapter) throw new Error("Adapter already set");
      const t = typeof (e == null ? void 0 : e.build) == "function";
      this.theDataAdapter = t ? e.build() : e;
      const r = ((s) => {
        const o = s;
        return !(!o || typeof o.resetTasks != "function" || typeof o.updateTasks != "function" || typeof o.removeTasks != "function") && o;
      })(this.theDataAdapter);
      return r && (this.theTasksAdapter = r), this;
    }, this.withDataSyncOptions = (e) => {
      if (this.theDataSyncOptions) throw new Error("Data sync options already set");
      return this.theDataSyncOptions = { ...e }, this;
    }, this.unregisterTask = (e) => this.theTasksService ? this.theTasksService.unregisterTask(e) : (oe(`${this.constructor.name}.unregisterTask() called on a state that has not been initialized! Use ${this.constructor.name}.initialize() to initialize the context before attempting any task unregister.`), Promise.resolve({ success: !1, error: "Context has not been initialized" }));
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
const Bo = () => new Xu(), Ku = { "1k": 1e3, "10k": 1e4, "100k": 1e5, "1mb": 1e6, "10mb": 1e7 };
var qo = Object.prototype.hasOwnProperty;
function zo(n, e) {
  for (let t of n.keys()) if (vn(t, e)) return t;
}
function vn(n, e) {
  var t, r, s;
  if (n === e) return !0;
  if (n && e && (t = n.constructor) === e.constructor) {
    if (t === Date) return n.getTime() === e.getTime();
    if (t === RegExp) return n.toString() === e.toString();
    if (t === Array) {
      if ((r = n.length) === e.length) for (; r-- && vn(n[r], e[r]); ) ;
      return r === -1;
    }
    if (t === Set) {
      if (n.size !== e.size) return !1;
      for (r of n)
        if ((s = r) && typeof s == "object" && !(s = zo(e, s)) || !e.has(s)) return !1;
      return !0;
    }
    if (t === Map) {
      if (n.size !== e.size) return !1;
      for (r of n)
        if ((s = r[0]) && typeof s == "object" && !(s = zo(e, s)) || !vn(r[1], e.get(s))) return !1;
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
        if (qo.call(n, t) && ++r && !qo.call(e, t) || !(t in e) || !vn(n[t], e[t])) return !1;
      return Object.keys(e).length === r;
    }
  }
  return n != n && e != e;
}
const Ju = (n) => {
  const e = /* @__PURE__ */ new Set();
  let t = !1, r = null, s = null;
  const o = () => {
    if (t || e.size === 0) return;
    t = !0;
    const c = e.values().next().value;
    e.delete(c), r = (({ message: p }) => {
      const h = document.createElement("div");
      h.classList.add("nlux-comp-exceptionItem");
      const d = document.createElement("span");
      return d.classList.add("nlux-comp-exp_itm_msg"), d.append(document.createTextNode(p)), h.append(d), h;
    })(c), n.append(r), s = setTimeout(a, 3e3);
  }, a = () => {
    r == null || r.classList.add("nlux-comp-exceptionItem--hiding"), s = setTimeout(() => {
      t = !1, r == null || r.remove(), r = null, o();
    }, 500);
  };
  return { displayException: (c) => {
    e.add({ message: c }), t || o();
  }, destroy: () => {
    e.clear(), r == null || r.remove(), s && clearTimeout(s);
  } };
}, yt = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (n) => {
  const e = 16 * Math.random() | 0;
  return (n == "x" ? e : 3 & e | 8).toString(16);
}), $e = (n) => {
  typeof n != "string" ? n && typeof n.toString == "function" ? console.warn(`[nlux] ${n.toString()}`) : console.warn("[nlux]") : console.warn(`[nlux] ${n}`);
}, No = [], Cn = (n) => {
  No.includes(n) || (No.push(n), $e(n));
}, ed = (n) => {
  const e = "nlux-chatSegment";
  return n === "complete" ? `${e} nlux-chatSegment--complete` : n === "error" ? `${e} nlux-chatSegment--error` : `${e} nlux-chatSegment--active`;
}, gs = { received: "nlux_msg_received", sent: "nlux_msg_sent" }, bs = { streaming: "nlux_msg_streaming", complete: "nlux_msg_complete" }, $o = (n) => {
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
}, gi = (n) => {
  const e = "nlux-comp-copyButton";
  n instanceof HTMLButtonElement && n.classList.contains(e) ? $o(n) : n.querySelectorAll(`.${e}`).forEach($o);
};
function td() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
let qt = { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
function Ho(n) {
  qt = n;
}
var nd = Object.defineProperty, bi = (n, e, t) => ((r, s, o) => s in r ? nd(r, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[s] = o)(n, typeof e != "symbol" ? e + "" : e, t);
class yn {
  constructor(e) {
    bi(this, "options"), this.options = e || qt;
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
bi(yn, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]));
const vi = /[&<>"']/, rd = new RegExp(vi.source, "g"), yi = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, sd = new RegExp(yi.source, "g"), od = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Fo = (n) => od[n];
function Je(n, e) {
  if (e) {
    if (vi.test(n)) return n.replace(rd, Fo);
  } else if (yi.test(n)) return n.replace(sd, Fo);
  return n;
}
const ad = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function id(n) {
  return n.replace(ad, (e, t) => (t = t.toLowerCase()) === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "");
}
const cd = /(^|[^\[])\^/g;
function xe(n, e) {
  let t = typeof n == "string" ? n : n.source;
  e = e || "";
  const r = { replace: (s, o) => {
    let a = typeof o == "string" ? o : o.source;
    return a = a.replace(cd, "$1"), t = t.replace(s, a), r;
  }, getRegex: () => new RegExp(t, e) };
  return r;
}
function Uo(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const wn = { exec: () => null };
function Vo(n, e) {
  const t = n.replace(/\|/g, (s, o, a) => {
    let c = !1, p = o;
    for (; --p >= 0 && a[p] === "\\"; ) c = !c;
    return c ? "|" : " |";
  }).split(/ \|/);
  let r = 0;
  if (t[0].trim() || t.shift(), t.length > 0 && !t[t.length - 1].trim() && t.pop(), e) if (t.length > e) t.splice(e);
  else for (; t.length < e; ) t.push("");
  for (; r < t.length; r++) t[r] = t[r].trim().replace(/\\\|/g, "|");
  return t;
}
function Wn(n, e, t) {
  const r = n.length;
  if (r === 0) return "";
  let s = 0;
  for (; s < r; ) {
    const o = n.charAt(r - s - 1);
    if (o !== e || t) {
      if (o === e || !t) break;
      s++;
    } else s++;
  }
  return n.slice(0, r - s);
}
const Ln = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, wi = /(?:[*+-]|\d{1,9}[.)])/, ki = xe(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, wi).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Us = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Vs = /(?!\s*\])(?:\\.|[^\[\]\\])+/, ud = xe(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Vs).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), dd = xe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, wi).getRegex(), _r = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Gs = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, ld = xe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Gs).replace("tag", _r).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Go = xe(Us).replace("hr", Ln).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _r).getRegex(), Ws = { blockquote: xe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Go).getRegex(), code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, def: ud, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hr: Ln, html: ld, lheading: ki, list: dd, newline: /^(?: *(?:\n|$))+/, paragraph: Go, table: wn, text: /^[^\n]+/ }, Wo = xe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Ln).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _r).getRegex(), hd = { ...Ws, table: Wo, paragraph: xe(Us).replace("hr", Ln).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Wo).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _r).getRegex() }, pd = { ...Ws, html: xe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Gs).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: wn, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: xe(Us).replace("hr", Ln).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ki).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, xi = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Si = /^( {2,}|\\)\n(?!\s*$)/, Rn = "\\p{P}\\p{S}", fd = xe(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Rn).getRegex(), md = xe(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Rn).getRegex(), gd = xe("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Rn).getRegex(), bd = xe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Rn).getRegex(), vd = xe(/\\([punct])/, "gu").replace(/punct/g, Rn).getRegex(), yd = xe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), wd = xe(Gs).replace("(?:-->|$)", "-->").getRegex(), kd = xe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", wd).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), dr = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, xd = xe(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", dr).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Yo = xe(/^!?\[(label)\]\[(ref)\]/).replace("label", dr).replace("ref", Vs).getRegex(), Qo = xe(/^!?\[(ref)\](?:\[\])?/).replace("ref", Vs).getRegex(), Ys = { _backpedal: wn, anyPunctuation: vd, autolink: yd, blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, br: Si, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, del: wn, emStrongLDelim: md, emStrongRDelimAst: gd, emStrongRDelimUnd: bd, escape: xi, link: xd, nolink: Qo, punctuation: fd, reflink: Yo, reflinkSearch: xe("reflink|nolink(?!\\()", "g").replace("reflink", Yo).replace("nolink", Qo).getRegex(), tag: kd, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, url: wn }, Sd = { ...Ys, link: xe(/^!?\[(label)\]\((.*?)\)/).replace("label", dr).getRegex(), reflink: xe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", dr).getRegex() }, vs = { ...Ys, escape: xe(xi).replace("])", "~|])").getRegex(), url: xe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, _d = { ...vs, br: xe(Si).replace("{2,}", "*").getRegex(), text: xe(vs.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Yn = { normal: Ws, gfm: hd, pedantic: pd }, hn = { normal: Ys, gfm: vs, breaks: _d, pedantic: Sd };
var Cd = Object.defineProperty, Hr = (n, e, t) => ((r, s, o) => s in r ? Cd(r, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[s] = o)(n, typeof e != "symbol" ? e + "" : e, t);
function Zo(n, e, t, r) {
  const s = e.href, o = e.title ? Je(e.title) : null, a = n[1].replace(/\\([\[\]])/g, "$1");
  if (n[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const c = { type: "link", raw: t, href: s, title: o, text: a, tokens: r.inlineTokens(a) };
    return r.state.inLink = !1, c;
  }
  return { type: "image", raw: t, href: s, title: o, text: Je(a) };
}
class lr {
  constructor(e) {
    Hr(this, "lexer"), Hr(this, "options"), Hr(this, "rules"), this.options = e || qt;
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let r, s;
      return t[2] === "@" ? (r = Je(t[1]), s = "mailto:" + r) : (r = Je(t[1]), s = r), { type: "link", raw: t[0], text: r, href: s, tokens: [{ type: "text", raw: r, text: r }] };
    }
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let r = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      r = Wn(r.replace(/^ *>[ \t]?/gm, ""), `
`);
      const s = this.lexer.state.top;
      this.lexer.state.top = !0;
      const o = this.lexer.blockTokens(r);
      return this.lexer.state.top = s, { type: "blockquote", raw: t[0], tokens: o, text: r };
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
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? r : Wn(r, `
`) };
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let r = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(r), o = /^ /.test(r) && / $/.test(r);
      return s && o && (r = r.substring(1, r.length - 1)), r = Je(r, !0), { type: "codespan", raw: t[0], text: r };
    }
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const r = t[1].toLowerCase().replace(/\s+/g, " "), s = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", o = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: r, raw: t[0], href: s, title: o };
    }
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t) return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
  }
  emStrong(e, t, r = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (s && !(s[3] && r.match(/[\p{L}\p{N}]/u)) && (!(s[1] || s[2]) || !r || this.rules.inline.punctuation.exec(r))) {
      const o = [...s[0]].length - 1;
      let a, c, p = o, h = 0;
      const d = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, t = t.slice(-1 * e.length + o); (s = d.exec(t)) != null; ) {
        if (a = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !a) continue;
        if (c = [...a].length, s[3] || s[4]) {
          p += c;
          continue;
        }
        if ((s[5] || s[6]) && o % 3 && !((o + c) % 3)) {
          h += c;
          continue;
        }
        if (p -= c, p > 0) continue;
        c = Math.min(c, c + p + h);
        const f = [...s[0]][0].length, m = e.slice(0, o + s.index + f + c);
        if (Math.min(o, c) % 2) {
          const v = m.slice(1, -1);
          return { type: "em", raw: m, text: v, tokens: this.lexer.inlineTokens(v) };
        }
        const y = m.slice(2, -2);
        return { type: "strong", raw: m, text: y, tokens: this.lexer.inlineTokens(y) };
      }
    }
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: Je(t[1]) };
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const r = t[0], s = function(o, a) {
        const c = o.match(/^(\s+)(?:```)/);
        if (c === null) return a;
        const p = c[1];
        return a.split(`
`).map((h) => {
          const d = h.match(/^\s+/);
          if (d === null) return h;
          const [f] = d;
          return f.length >= p.length ? h.slice(p.length) : h;
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
        const s = Wn(r, "#");
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
      return r = this.lexer.state.inRawBlock ? t[0] : Je(t[0]), { type: "text", raw: t[0], text: r };
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
        const a = Wn(r.slice(0, -1), "\\");
        if ((r.length - a.length) % 2 == 0) return;
      } else {
        const a = function(c, p) {
          if (c.indexOf(p[1]) === -1) return -1;
          let h = 0;
          for (let d = 0; d < c.length; d++) if (c[d] === "\\") d++;
          else if (c[d] === p[0]) h++;
          else if (c[d] === p[1] && (h--, h < 0)) return d;
          return -1;
        }(t[2], "()");
        if (a > -1) {
          const c = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + a;
          t[2] = t[2].substring(0, a), t[0] = t[0].substring(0, c).trim(), t[3] = "";
        }
      }
      let s = t[2], o = "";
      if (this.options.pedantic) {
        const a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
        a && (s = a[1], o = a[3]);
      } else o = t[3] ? t[3].slice(1, -1) : "";
      return s = s.trim(), /^</.test(s) && (s = this.options.pedantic && !/>$/.test(r) ? s.slice(1) : s.slice(1, -1)), Zo(t, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer);
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let r = t[1].trim();
      const s = r.length > 1, o = { type: "list", raw: "", ordered: s, start: s ? +r.slice(0, -1) : "", loose: !1, items: [] };
      r = s ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = s ? r : "[*+-]");
      const a = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let c = "", p = "", h = !1;
      for (; e; ) {
        let d = !1;
        if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
        c = t[0], e = e.substring(c.length);
        let f = t[2].split(`
`, 1)[0].replace(/^\t+/, (R) => " ".repeat(3 * R.length)), m = e.split(`
`, 1)[0], y = 0;
        this.options.pedantic ? (y = 2, p = f.trimStart()) : (y = t[2].search(/[^ ]/), y = y > 4 ? 1 : y, p = f.slice(y), y += t[1].length);
        let v = !1;
        if (!f && /^ *$/.test(m) && (c += m + `
`, e = e.substring(m.length + 1), d = !0), !d) {
          const R = new RegExp(`^ {0,${Math.min(3, y - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), E = new RegExp(`^ {0,${Math.min(3, y - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), A = new RegExp(`^ {0,${Math.min(3, y - 1)}}(?:\`\`\`|~~~)`), i = new RegExp(`^ {0,${Math.min(3, y - 1)}}#`);
          for (; e; ) {
            const u = e.split(`
`, 1)[0];
            if (m = u, this.options.pedantic && (m = m.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), A.test(m) || i.test(m) || R.test(m) || E.test(e)) break;
            if (m.search(/[^ ]/) >= y || !m.trim()) p += `
` + m.slice(y);
            else {
              if (v || f.search(/[^ ]/) >= 4 || A.test(f) || i.test(f) || E.test(f)) break;
              p += `
` + m;
            }
            v || m.trim() || (v = !0), c += u + `
`, e = e.substring(u.length + 1), f = m.slice(y);
          }
        }
        o.loose || (h ? o.loose = !0 : /\n *\n *$/.test(c) && (h = !0));
        let S, T = null;
        this.options.gfm && (T = /^\[[ xX]\] /.exec(p), T && (S = T[0] !== "[ ] ", p = p.replace(/^\[[ xX]\] +/, ""))), o.items.push({ type: "list_item", raw: c, task: !!T, checked: S, loose: !1, text: p, tokens: [] }), o.raw += c;
      }
      o.items[o.items.length - 1].raw = c.trimEnd(), o.items[o.items.length - 1].text = p.trimEnd(), o.raw = o.raw.trimEnd();
      for (let d = 0; d < o.items.length; d++) if (this.lexer.state.top = !1, o.items[d].tokens = this.lexer.blockTokens(o.items[d].text, []), !o.loose) {
        const f = o.items[d].tokens.filter((y) => y.type === "space"), m = f.length > 0 && f.some((y) => /\n.*\n/.test(y.raw));
        o.loose = m;
      }
      if (o.loose) for (let d = 0; d < o.items.length; d++) o.items[d].loose = !0;
      return o;
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
        const o = r[0].charAt(0);
        return { type: "text", raw: o, text: o };
      }
      return Zo(r, s, r[0], this.lexer);
    }
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2])) return;
    const r = Vo(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), o = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (r.length === s.length) {
      for (const c of s) /^ *-+: *$/.test(c) ? a.align.push("right") : /^ *:-+: *$/.test(c) ? a.align.push("center") : /^ *:-+ *$/.test(c) ? a.align.push("left") : a.align.push(null);
      for (const c of r) a.header.push({ text: c, tokens: this.lexer.inline(c) });
      for (const c of o) a.rows.push(Vo(c, a.header.length).map((p) => ({ text: p, tokens: this.lexer.inline(p) })));
      return a;
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
      let s, o;
      if (t[2] === "@") s = Je(t[0]), o = "mailto:" + s;
      else {
        let a;
        do
          a = t[0], t[0] = ((r = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : r[0]) ?? "";
        while (a !== t[0]);
        s = Je(t[0]), o = t[1] === "www." ? "http://" + t[0] : t[0];
      }
      return { type: "link", raw: t[0], text: s, href: o, tokens: [{ type: "text", raw: s, text: s }] };
    }
  }
}
var Ad = Object.defineProperty, pn = (n, e, t) => ((r, s, o) => s in r ? Ad(r, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[s] = o)(n, typeof e != "symbol" ? e + "" : e, t);
class wt {
  constructor(e) {
    pn(this, "options"), pn(this, "state"), pn(this, "tokens"), pn(this, "inlineQueue"), pn(this, "tokenizer"), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || qt, this.options.tokenizer = this.options.tokenizer || new lr(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    const t = { block: Yn.normal, inline: hn.normal };
    this.options.pedantic ? (t.block = Yn.pedantic, t.inline = hn.pedantic) : this.options.gfm && (t.block = Yn.gfm, this.options.breaks ? t.inline = hn.breaks : t.inline = hn.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: Yn, inline: hn };
  }
  static lex(e, t) {
    return new wt(t).lex(e);
  }
  static lexInline(e, t) {
    return new wt(t).inlineTokens(e);
  }
  blockTokens(e, t = []) {
    let r, s, o, a;
    for (e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, (c, p, h) => p + "    ".repeat(h.length)); e; ) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((c) => !!(r = c.call({ lexer: this }, e, t)) && (e = e.substring(r.raw.length), t.push(r), !0)))) if (r = this.tokenizer.space(e)) e = e.substring(r.raw.length), r.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
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
      if (o = e, this.options.extensions && this.options.extensions.startBlock) {
        let c = 1 / 0;
        const p = e.slice(1);
        let h;
        this.options.extensions.startBlock.forEach((d) => {
          h = d.call({ lexer: this }, p), typeof h == "number" && h >= 0 && (c = Math.min(c, h));
        }), c < 1 / 0 && c >= 0 && (o = e.substring(0, c + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(o))) s = t[t.length - 1], a && s.type === "paragraph" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(r), a = o.length !== e.length, e = e.substring(r.raw.length);
      else if (r = this.tokenizer.text(e)) e = e.substring(r.raw.length), s = t[t.length - 1], s && s.type === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(r);
      else if (e) {
        const c = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(c);
          break;
        }
        throw new Error(c);
      }
    }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let r, s, o, a, c, p, h = e;
    if (this.tokens.links) {
      const d = Object.keys(this.tokens.links);
      if (d.length > 0) for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(h)) != null; ) d.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (h = h.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + h.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(h)) != null; ) h = h.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + h.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(h)) != null; ) h = h.slice(0, a.index) + "++" + h.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; ) if (c || (p = ""), c = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((d) => !!(r = d.call({ lexer: this }, e, t)) && (e = e.substring(r.raw.length), t.push(r), !0)))) if (r = this.tokenizer.escape(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.tag(e)) e = e.substring(r.raw.length), s = t[t.length - 1], s && r.type === "text" && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : t.push(r);
    else if (r = this.tokenizer.link(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(r.raw.length), s = t[t.length - 1], s && r.type === "text" && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : t.push(r);
    else if (r = this.tokenizer.emStrong(e, h, p)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.codespan(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.br(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.del(e)) e = e.substring(r.raw.length), t.push(r);
    else if (r = this.tokenizer.autolink(e)) e = e.substring(r.raw.length), t.push(r);
    else if (this.state.inLink || !(r = this.tokenizer.url(e))) {
      if (o = e, this.options.extensions && this.options.extensions.startInline) {
        let d = 1 / 0;
        const f = e.slice(1);
        let m;
        this.options.extensions.startInline.forEach((y) => {
          m = y.call({ lexer: this }, f), typeof m == "number" && m >= 0 && (d = Math.min(d, m));
        }), d < 1 / 0 && d >= 0 && (o = e.substring(0, d + 1));
      }
      if (r = this.tokenizer.inlineText(o)) e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (p = r.raw.slice(-1)), c = !0, s = t[t.length - 1], s && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : t.push(r);
      else if (e) {
        const d = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(d);
          break;
        }
        throw new Error(d);
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
var Ed = Object.defineProperty, Td = (n, e, t) => ((r, s, o) => s in r ? Ed(r, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[s] = o)(n, e + "", t);
class hr {
  constructor(e) {
    Td(this, "options"), this.options = e || qt;
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
    var o;
    const s = (o = (t || "").match(/^\S*/)) == null ? void 0 : o[0];
    return e = e.replace(/\n$/, "") + `
`, s ? '<pre><code class="language-' + Je(s) + '">' + (r ? e : Je(e, !0)) + `</code></pre>
` : "<pre><code>" + (r ? e : Je(e, !0)) + `</code></pre>
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
    const s = Uo(e);
    if (s === null) return r;
    let o = `<img src="${e = s}" alt="${r}"`;
    return t && (o += ` title="${t}"`), o += ">", o;
  }
  link(e, t, r) {
    const s = Uo(e);
    if (s === null) return r;
    let o = '<a href="' + (e = s) + '"';
    return t && (o += ' title="' + t + '"'), o += ">" + r + "</a>", o;
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
class Qs {
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
  link(e, t, r) {
    return "" + r;
  }
  image(e, t, r) {
    return "" + r;
  }
  br() {
    return "";
  }
}
var Pd = Object.defineProperty, Fr = (n, e, t) => ((r, s, o) => s in r ? Pd(r, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[s] = o)(n, typeof e != "symbol" ? e + "" : e, t);
class kt {
  constructor(e) {
    Fr(this, "options"), Fr(this, "renderer"), Fr(this, "textRenderer"), this.options = e || qt, this.options.renderer = this.options.renderer || new hr(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Qs();
  }
  static parse(e, t) {
    return new kt(t).parse(e);
  }
  static parseInline(e, t) {
    return new kt(t).parseInline(e);
  }
  parse(e, t = !0) {
    let r = "";
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
        const a = o, c = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type)) {
          r += c || "";
          continue;
        }
      }
      switch (o.type) {
        case "space":
          continue;
        case "hr":
          r += this.renderer.hr();
          continue;
        case "heading": {
          const a = o;
          r += this.renderer.heading(this.parseInline(a.tokens), a.depth, id(this.parseInline(a.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const a = o;
          r += this.renderer.code(a.text, a.lang, !!a.escaped);
          continue;
        }
        case "table": {
          const a = o;
          let c = "", p = "";
          for (let d = 0; d < a.header.length; d++) p += this.renderer.tablecell(this.parseInline(a.header[d].tokens), { header: !0, align: a.align[d] });
          c += this.renderer.tablerow(p);
          let h = "";
          for (let d = 0; d < a.rows.length; d++) {
            const f = a.rows[d];
            p = "";
            for (let m = 0; m < f.length; m++) p += this.renderer.tablecell(this.parseInline(f[m].tokens), { header: !1, align: a.align[m] });
            h += this.renderer.tablerow(p);
          }
          r += this.renderer.table(c, h);
          continue;
        }
        case "blockquote": {
          const a = o, c = this.parse(a.tokens);
          r += this.renderer.blockquote(c);
          continue;
        }
        case "list": {
          const a = o, c = a.ordered, p = a.start, h = a.loose;
          let d = "";
          for (let f = 0; f < a.items.length; f++) {
            const m = a.items[f], y = m.checked, v = m.task;
            let S = "";
            if (m.task) {
              const T = this.renderer.checkbox(!!y);
              h ? m.tokens.length > 0 && m.tokens[0].type === "paragraph" ? (m.tokens[0].text = T + " " + m.tokens[0].text, m.tokens[0].tokens && m.tokens[0].tokens.length > 0 && m.tokens[0].tokens[0].type === "text" && (m.tokens[0].tokens[0].text = T + " " + m.tokens[0].tokens[0].text)) : m.tokens.unshift({ type: "text", text: T + " " }) : S += T + " ";
            }
            S += this.parse(m.tokens, h), d += this.renderer.listitem(S, v, !!y);
          }
          r += this.renderer.list(d, c, p);
          continue;
        }
        case "html": {
          const a = o;
          r += this.renderer.html(a.text, a.block);
          continue;
        }
        case "paragraph": {
          const a = o;
          r += this.renderer.paragraph(this.parseInline(a.tokens));
          continue;
        }
        case "text": {
          let a = o, c = a.tokens ? this.parseInline(a.tokens) : a.text;
          for (; s + 1 < e.length && e[s + 1].type === "text"; ) a = e[++s], c += `
` + (a.tokens ? this.parseInline(a.tokens) : a.text);
          r += t ? this.renderer.paragraph(c) : c;
          continue;
        }
        default: {
          const a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return r;
  }
  parseInline(e, t) {
    t = t || this.renderer;
    let r = "";
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
        const a = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          r += a || "";
          continue;
        }
      }
      switch (o.type) {
        case "escape": {
          const a = o;
          r += t.text(a.text);
          break;
        }
        case "html": {
          const a = o;
          r += t.html(a.text);
          break;
        }
        case "link": {
          const a = o;
          r += t.link(a.href, a.title, this.parseInline(a.tokens, t));
          break;
        }
        case "image": {
          const a = o;
          r += t.image(a.href, a.title, a.text);
          break;
        }
        case "strong": {
          const a = o;
          r += t.strong(this.parseInline(a.tokens, t));
          break;
        }
        case "em": {
          const a = o;
          r += t.em(this.parseInline(a.tokens, t));
          break;
        }
        case "codespan": {
          const a = o;
          r += t.codespan(a.text);
          break;
        }
        case "br":
          r += t.br();
          break;
        case "del": {
          const a = o;
          r += t.del(this.parseInline(a.tokens, t));
          break;
        }
        case "text": {
          const a = o;
          r += t.text(a.text);
          break;
        }
        default: {
          const a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return r;
  }
}
var kn, Xo, ys, Id = Object.defineProperty, _i = (n) => {
  throw TypeError(n);
}, pt = (n, e, t) => ((r, s, o) => s in r ? Id(r, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[s] = o)(n, typeof e != "symbol" ? e + "" : e, t), ws = (n, e, t) => (((r, s, o) => {
  s.has(r) || _i("Cannot " + o);
})(n, e, "access private method"), t);
kn = /* @__PURE__ */ new WeakSet(), Xo = function(n, e) {
  return (t) => {
    if (t.message += `
Please report this to https://github.com/markedjs/marked.`, n) {
      const r = "<p>An error occurred:</p><pre>" + Je(t.message + "", !0) + "</pre>";
      return e ? Promise.resolve(r) : r;
    }
    if (e) return Promise.reject(t);
    throw t;
  };
}, ys = function(n, e) {
  return (t, r) => {
    const s = { ...r }, o = { ...this.defaults, ...s };
    this.defaults.async === !0 && s.async === !1 && (o.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), o.async = !0);
    const a = ws(this, kn, Xo).call(this, !!o.silent, !!o.async);
    if (t == null) return a(new Error("marked(): input parameter is undefined or null"));
    if (typeof t != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
    if (o.hooks && (o.hooks.options = o), o.async) return Promise.resolve(o.hooks ? o.hooks.preprocess(t) : t).then((c) => n(c, o)).then((c) => o.hooks ? o.hooks.processAllTokens(c) : c).then((c) => o.walkTokens ? Promise.all(this.walkTokens(c, o.walkTokens)).then(() => c) : c).then((c) => e(c, o)).then((c) => o.hooks ? o.hooks.postprocess(c) : c).catch(a);
    try {
      o.hooks && (t = o.hooks.preprocess(t));
      let c = n(t, o);
      o.hooks && (c = o.hooks.processAllTokens(c)), o.walkTokens && this.walkTokens(c, o.walkTokens);
      let p = e(c, o);
      return o.hooks && (p = o.hooks.postprocess(p)), p;
    } catch (c) {
      return a(c);
    }
  };
};
const Dt = new class {
  constructor(...n) {
    var e, t, r;
    e = this, (t = kn).has(e) ? _i("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), pt(this, "Hooks", yn), pt(this, "Lexer", wt), pt(this, "Parser", kt), pt(this, "Renderer", hr), pt(this, "TextRenderer", Qs), pt(this, "Tokenizer", lr), pt(this, "defaults", { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null }), pt(this, "options", this.setOptions), pt(this, "parse", ws(this, kn, ys).call(this, wt.lex, kt.parse)), pt(this, "parseInline", ws(this, kn, ys).call(this, wt.lexInline, kt.parseInline)), this.use(...n);
  }
  lexer(n, e) {
    return wt.lex(n, e ?? this.defaults);
  }
  parser(n, e) {
    return kt.parse(n, e ?? this.defaults);
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
          const o = e.renderers[s.name];
          e.renderers[s.name] = o ? function(...a) {
            let c = s.renderer.apply(this, a);
            return c === !1 && (c = o.apply(this, a)), c;
          } : s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          const o = e[s.level];
          o ? o.unshift(s.tokenizer) : e[s.level] = [s.tokenizer], s.start && (s.level === "block" ? e.startBlock ? e.startBlock.push(s.start) : e.startBlock = [s.start] : s.level === "inline" && (e.startInline ? e.startInline.push(s.start) : e.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (e.childTokens[s.name] = s.childTokens);
      }), r.extensions = e), t.renderer) {
        const s = this.defaults.renderer || new hr(this.defaults);
        for (const o in t.renderer) {
          if (!(o in s)) throw new Error(`renderer '${o}' does not exist`);
          if (o === "options") continue;
          const a = o, c = t.renderer[a], p = s[a];
          s[a] = (...h) => {
            let d = c.apply(s, h);
            return d === !1 && (d = p.apply(s, h)), d || "";
          };
        }
        r.renderer = s;
      }
      if (t.tokenizer) {
        const s = this.defaults.tokenizer || new lr(this.defaults);
        for (const o in t.tokenizer) {
          if (!(o in s)) throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o)) continue;
          const a = o, c = t.tokenizer[a], p = s[a];
          s[a] = (...h) => {
            let d = c.apply(s, h);
            return d === !1 && (d = p.apply(s, h)), d;
          };
        }
        r.tokenizer = s;
      }
      if (t.hooks) {
        const s = this.defaults.hooks || new yn();
        for (const o in t.hooks) {
          if (!(o in s)) throw new Error(`hook '${o}' does not exist`);
          if (o === "options") continue;
          const a = o, c = t.hooks[a], p = s[a];
          yn.passThroughHooks.has(o) ? s[a] = (h) => {
            if (this.defaults.async) return Promise.resolve(c.call(s, h)).then((f) => p.call(s, f));
            const d = c.call(s, h);
            return p.call(s, d);
          } : s[a] = (...h) => {
            let d = c.apply(s, h);
            return d === !1 && (d = p.apply(s, h)), d;
          };
        }
        r.hooks = s;
      }
      if (t.walkTokens) {
        const s = this.defaults.walkTokens, o = t.walkTokens;
        r.walkTokens = function(a) {
          let c = [];
          return c.push(o.call(this, a)), s && (c = c.concat(s.call(this, a))), c;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  walkTokens(n, e) {
    var r, s;
    let t = [];
    for (const o of n) switch (t = t.concat(e.call(this, o)), o.type) {
      case "table": {
        const a = o;
        for (const c of a.header) t = t.concat(this.walkTokens(c.tokens, e));
        for (const c of a.rows) for (const p of c) t = t.concat(this.walkTokens(p.tokens, e));
        break;
      }
      case "list": {
        const a = o;
        t = t.concat(this.walkTokens(a.items, e));
        break;
      }
      default: {
        const a = o;
        (s = (r = this.defaults.extensions) == null ? void 0 : r.childTokens) != null && s[a.type] ? this.defaults.extensions.childTokens[a.type].forEach((c) => {
          const p = a[c].flat(1 / 0);
          t = t.concat(this.walkTokens(p, e));
        }) : a.tokens && (t = t.concat(this.walkTokens(a.tokens, e)));
      }
    }
    return t;
  }
}();
function Ie(n, e) {
  return Dt.parse(n, e);
}
Ie.options = Ie.setOptions = function(n) {
  return Dt.setOptions(n), Ie.defaults = Dt.defaults, Ho(Ie.defaults), Ie;
}, Ie.getDefaults = td, Ie.defaults = qt, Ie.use = function(...n) {
  return Dt.use(...n), Ie.defaults = Dt.defaults, Ho(Ie.defaults), Ie;
}, Ie.walkTokens = function(n, e) {
  return Dt.walkTokens(n, e);
}, Ie.parseInline = Dt.parseInline, Ie.Parser = kt, Ie.parser = kt.parse, Ie.Renderer = hr, Ie.TextRenderer = Qs, Ie.Lexer = wt, Ie.lexer = wt.lex, Ie.Tokenizer = lr, Ie.Hooks = yn, Ie.parse = Ie;
const Ci = (n, e) => {
  const { showCodeBlockCopyButton: t, markdownLinkTarget: r, syntaxHighlighter: s, htmlSanitizer: o } = e || {}, a = Ie(n, { async: !1, breaks: !0 });
  if (typeof a != "string") throw new Error("Markdown parsing failed");
  const c = document.createElement("div");
  return c.innerHTML = o ? o(a) : a, c.querySelectorAll("pre").forEach((p) => {
    const h = document.createElement("div");
    h.className = "code-block";
    const d = p.querySelector("code");
    if (!d) {
      const v = p.innerHTML;
      return h.innerHTML = o ? o(v) : v, void p.replaceWith(h);
    }
    let f;
    for (let v = 0; v < d.classList.length; v++) {
      const S = d.classList[v];
      if (S.startsWith("language-")) {
        f = S.slice(9);
        break;
      }
    }
    const m = document.createElement("pre"), y = "<div>" + d.innerHTML + "</div>";
    if (m.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(y) : y, f && (m.setAttribute("data-language", f), s)) {
      const v = "<div>" + s.createHighlighter()(d.textContent || "", f) + "</div>";
      m.innerHTML = o ? o(v) : v, m.className = "highlighter-dark";
    }
    ((v) => {
      v.replaceChildren();
    })(h), h.appendChild(m), p.replaceWith(h);
  }), t !== !1 && c.querySelectorAll(".code-block").forEach((p) => {
    var m;
    if (!p.querySelector("pre") || (m = p.previousElementSibling) != null && m.classList.contains("nlux-comp-copyButton")) return;
    const h = "Copy code block to clipboard", d = document.createElement("button");
    d.classList.add("nlux-comp-copyButton"), d.setAttribute("aria-label", h), d.setAttribute("title", h);
    const f = document.createElement("span");
    f.classList.add("icon-copy"), d.appendChild(f), p.appendChild(d);
  }), r !== "self" && c.querySelectorAll("a").forEach((p) => {
    p.setAttribute("target", "_blank");
  }), c.innerHTML;
}, Ai = "nlux-comp-message", Ko = { received: "nlux-comp-chatItem--received", sent: "nlux-comp-chatItem--sent" }, Dd = "nlux-comp-chatItem--bubblesLayout", Ld = "nlux-comp-chatItem--listLayout", Rd = (n, e) => {
  let t = !1;
  const { onComplete: r } = e || {}, s = [], o = (e != null && e.skipStreamingAnimation ? "timeout" : "animationFrame") == "timeout" ? (f) => setTimeout(f, 0) : (f) => requestAnimationFrame(f), a = document.createElement("div");
  a.classList.add("md-in-progress"), n.append(a);
  const c = () => {
    for (; a.firstChild; ) {
      const f = a.firstChild;
      f instanceof HTMLElement && gi(f), a.before(f);
    }
  }, p = !(e != null && e.skipStreamingAnimation) && (e != null && e.streamingAnimationSpeed) && e.streamingAnimationSpeed >= 0 ? e.streamingAnimationSpeed : e != null && e.skipStreamingAnimation ? 0 : 8, h = { timeSinceLastProcessing: (/* @__PURE__ */ new Date()).getTime(), currentMarkdown: "", previousHtml: void 0 };
  let d = setInterval(() => {
    const f = (/* @__PURE__ */ new Date()).getTime(), m = (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) !== "never";
    if (s.length === 0 && m) {
      const v = typeof (e == null ? void 0 : e.waitTimeBeforeStreamCompletion) == "number" ? e.waitTimeBeforeStreamCompletion : 2e3;
      return void ((t || f - h.timeSinceLastProcessing > v) && (t = !0, d && (clearInterval(d), d = void 0), c(), a.remove(), r == null ? void 0 : r()));
    }
    h.timeSinceLastProcessing = f;
    const y = s.shift();
    y !== void 0 && typeof y == "string" && o(() => {
      const v = h.currentMarkdown + y, S = Ci(v, e).trim();
      if (typeof S != "string") return h.currentMarkdown = h.currentMarkdown.slice(0, -y.length), void $e("Markdown parsing failed");
      if (h.previousHtml && S.length > h.previousHtml.length && S.startsWith(h.previousHtml)) {
        c();
        const T = S.slice(h.previousHtml.length).trim();
        a.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(T) : T, h.currentMarkdown = y, h.previousHtml = void 0;
      } else a.innerHTML = e != null && e.htmlSanitizer ? e.htmlSanitizer(S) : S, h.currentMarkdown = v, h.previousHtml = S;
    });
  }, p);
  return { next: (f) => {
    if (t) $e("Stream is already complete. No more chunks can be added");
    else for (const m of f) s.push(m);
  }, complete: () => {
    s.push(`
`), t = !0;
  }, cancel: () => {
    d && (clearInterval(d), d = void 0), t = !0, a.remove();
  }, error: () => {
    t = !0;
  } };
}, Od = function(n, e) {
  const { uid: t, status: r, responseRenderer: s, markdownOptions: o, initialMarkdownMessage: a, markdownContainersController: c } = n, [p, h] = Ae([]), d = he(null), f = he(null), m = he(null), y = he(null), [v, S] = Ae();
  ie(() => {
    d.current !== f.current && (f.current = d.current, S(d.current || void 0));
  }), ie(() => {
    if (v) {
      const R = c.getStreamingDomElement(t);
      v.append(R);
    }
  }, [v]), ie(() => {
    y.current = (R) => {
      h((E) => [...E, R]);
    };
  }, [h]), ie(() => {
    const R = c.getStreamingDomElement(t);
    return m.current = Rd(R, { syntaxHighlighter: o == null ? void 0 : o.syntaxHighlighter, htmlSanitizer: o == null ? void 0 : o.htmlSanitizer, markdownLinkTarget: o == null ? void 0 : o.markdownLinkTarget, showCodeBlockCopyButton: o == null ? void 0 : o.showCodeBlockCopyButton, skipStreamingAnimation: o == null ? void 0 : o.skipStreamingAnimation, streamingAnimationSpeed: o == null ? void 0 : o.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: o == null ? void 0 : o.waitTimeBeforeStreamCompletion, onComplete: o == null ? void 0 : o.onStreamComplete }), a && m.current.next(a), () => {
      c.deleteStreamingDomElement(t);
    };
  }, []), ie(() => () => {
    f.current = null, m.current = null, y.current = null, S(void 0);
  }, []), Pn(e, () => ({ streamChunk: (R) => {
    var E, A;
    y.current && ((E = y.current) == null || E.call(y, R)), typeof R == "string" && ((A = m.current) == null || A.next(R));
  }, completeStream: () => {
    var R;
    (R = m.current) == null || R.complete();
  }, cancelStream: () => {
    var R;
    (R = m.current) == null || R.cancel();
  } }), []);
  const T = s || void 0;
  return P.jsxs("div", { className: `${Ai} ${bs[r]} ${gs.received}`, children: [T && P.jsx(T, { uid: t, status: r, containerRef: d, content: p, contentType: "text", serverResponse: [], dataTransferMode: "stream" }), !T && P.jsx("div", { className: "nlux-markdownStream-root", ref: d })] });
}, Ei = (n, e) => {
  if (!e || e === "Enter") {
    const t = n.key === "Enter" && !n.nativeEvent.isComposing, r = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
    return t && !r;
  }
  return !!(e === "CommandEnter" && n.key === "Enter" && (n.getModifierState("Control") || n.getModifierState("Meta")));
}, jd = (n) => {
  const { markdownOptions: e } = n, t = he(null), r = se(() => n.content ? Ci(n.content, { syntaxHighlighter: e == null ? void 0 : e.syntaxHighlighter, htmlSanitizer: e == null ? void 0 : e.htmlSanitizer, markdownLinkTarget: e == null ? void 0 : e.markdownLinkTarget, showCodeBlockCopyButton: e == null ? void 0 : e.showCodeBlockCopyButton }) : "", [n.content, e == null ? void 0 : e.markdownLinkTarget, e == null ? void 0 : e.syntaxHighlighter, e == null ? void 0 : e.htmlSanitizer, e == null ? void 0 : e.showCodeBlockCopyButton]);
  ie(() => {
    t.current && (e == null ? void 0 : e.showCodeBlockCopyButton) !== !1 && gi(t.current);
  }, [r, t.current, e == null ? void 0 : e.showCodeBlockCopyButton]);
  const s = se(() => e != null && e.htmlSanitizer ? e.htmlSanitizer(r) : r, [r, e == null ? void 0 : e.htmlSanitizer]), o = ye((h) => {
    if (!n.canResubmit) return;
    const d = h.currentTarget.textContent;
    return d ? Ei(h, n.submitShortcutKey) ? (h.preventDefault(), void (n.onResubmit && n.onResubmit(d))) : void (h.key === "Escape" && (h.preventDefault(), h.currentTarget.textContent = n.content, h.currentTarget.blur())) : void 0;
  }, [n.canResubmit, n.onResubmit, n.content]), a = ye((h) => {
    n.canResubmit && (h.preventDefault(), h.currentTarget.textContent = n.content, h.currentTarget.blur());
  }, [n.canResubmit, n.content]), c = ye((h) => {
    if (!n.canResubmit) return;
    h.preventDefault();
    const d = document.createRange();
    d.selectNodeContents(h.currentTarget);
    const f = window.getSelection();
    f == null || f.removeAllRanges(), f == null || f.addRange(d);
  }, [n.canResubmit]), p = n.canResubmit ? "editable-markdown-container" : "";
  return P.jsx(Ti, { children: P.jsx("div", { className: "nlux-markdownStream-root" + (p ? ` ${p}` : ""), children: P.jsx("div", { className: "nlux-markdown-container", ref: t, dangerouslySetInnerHTML: { __html: s }, contentEditable: n.canResubmit, onKeyDown: o, onBlur: a, onFocus: c }) }) });
};
class Ti extends Vc {
  constructor() {
    super(...arguments), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(e) {
    $e("Markdown rendering error occurred. This could be due to a malformed markdown content, or it could be because the page requires an HTML sanitizer. Please check the error message for more details and consider configuring NLUX with a compatible sanitizer."), this.props.onMarkdownRenderingError && this.props.onMarkdownRenderingError(e);
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}
const ks = (n) => P.jsx(Ti, { children: P.jsx(jd, { ...n }) }), Pi = (n) => {
  const e = typeof n.avatar == "string", t = !e && Sn(n.avatar);
  return P.jsxs("div", { className: "nlux-comp-avatar", children: [t && n.avatar, !t && e && P.jsx("div", { className: "nlux-comp-avatarContainer", children: n.avatar && P.jsx("div", { className: "nlux-comp-avatarPicture", style: { backgroundImage: `url("${encodeURI(n.avatar)}")` } }) })] });
}, Md = function(n, e) {
  var R, E, A, i, u, l, g, k;
  const t = he(null);
  Pn(e, () => ({ streamChunk: (w) => setTimeout(() => {
    var b;
    return (b = t == null ? void 0 : t.current) == null ? void 0 : b.streamChunk(w);
  }), completeStream: () => setTimeout(() => {
    var w;
    return (w = t == null ? void 0 : t.current) == null ? void 0 : w.completeStream();
  }), cancelStream: () => {
    var w;
    return (w = t == null ? void 0 : t.current) == null ? void 0 : w.cancelStream();
  } }), []);
  const r = n.contentType === "server-component", s = n.direction === "received", o = n.direction === "sent", a = n.dataTransferMode === "stream", c = n.isPartOfInitialSegment, p = ye(() => {
    var w;
    return (w = n.onMarkdownStreamRendered) == null ? void 0 : w.call(n, n.uid);
  }, [n.uid]);
  ie(() => {
    var w;
    a || r || c || ((w = n.onMarkdownStreamRendered) == null || w.call(n, n.uid));
  }, []);
  const h = function(w) {
    const { uid: b, status: C, dataTransferMode: L, contentType: D, fetchedContent: I, streamedContent: j, streamedServerResponse: x, fetchedServerResponse: B, direction: N, messageOptions: z } = w;
    if ((z == null ? void 0 : z.responseRenderer) !== void 0) {
      if (L === "stream") {
        const U = { uid: b, status: C, dataTransferMode: L, contentType: D, content: j ?? [], serverResponse: x ?? [] };
        return () => {
          const Y = z.responseRenderer;
          return P.jsx(Y, { ...U });
        };
      }
      const O = Sn(I), M = { uid: b, status: "complete", dataTransferMode: L, contentType: D, content: I ? O ? [] : [I] : [], serverComponent: O ? I : void 0, serverResponse: B ? [B] : [] };
      return () => {
        const U = z.responseRenderer;
        return P.jsx(U, { ...M });
      };
    }
    if (N === "sent") {
      if (typeof I == "string") {
        const O = I;
        return () => P.jsx(P.Fragment, { children: O });
      }
      return () => "";
    }
    if (typeof I == "string") {
      const O = I;
      return () => P.jsx(ks, { messageUid: b, content: O, markdownOptions: { syntaxHighlighter: z == null ? void 0 : z.syntaxHighlighter, htmlSanitizer: z == null ? void 0 : z.htmlSanitizer, markdownLinkTarget: z == null ? void 0 : z.markdownLinkTarget, showCodeBlockCopyButton: z == null ? void 0 : z.showCodeBlockCopyButton, skipStreamingAnimation: z == null ? void 0 : z.skipStreamingAnimation } });
    }
    return Sn(I) ? () => P.jsx(P.Fragment, { children: I }) : () => "";
  }(n), d = function(w) {
    var b;
    return ye(() => {
      var L, D, I;
      if (((L = w.messageOptions) == null ? void 0 : L.promptRenderer) === void 0) return P.jsx(ks, { messageUid: w.uid, content: w.fetchedContent, markdownOptions: { htmlSanitizer: (D = w.messageOptions) == null ? void 0 : D.htmlSanitizer }, canResubmit: (I = w.messageOptions) == null ? void 0 : I.editableUserMessages, submitShortcutKey: w.submitShortcutKey, onResubmit: (j) => {
        w.onPromptResubmit && w.onPromptResubmit(j);
      } });
      const C = w.messageOptions.promptRenderer;
      return P.jsx(C, { uid: w.uid, prompt: w.fetchedContent, onResubmit: (j) => {
        w.onPromptResubmit && w.onPromptResubmit(j);
      } });
    }, [(b = w.messageOptions) == null ? void 0 : b.promptRenderer, w.fetchedContent, w.uid]);
  }(n), f = se(() => Tn(Od), []), m = function(w) {
    const b = se(() => P.jsxs("div", { className: "nlux-comp-chatItem-participantInfo", children: [w.avatar !== void 0 && P.jsx(Pi, { name: w.name, avatar: w.avatar }), P.jsx("span", { className: "nlux-comp-chatItem-participantName", children: w.name })] }), [w.avatar, w.name]);
    return () => P.jsx(P.Fragment, { children: b });
  }(n), y = `nlux-comp-chatItem ${n.direction ? Ko[n.direction] : Ko.received} ${n.layout === "bubbles" ? Dd : Ld}`, v = n.status ? bs[n.status] : bs.rendered, S = n.direction ? gs[n.direction] : gs.received, T = `${Ai} ${v} ${S}`;
  return P.jsxs("div", { className: y, children: [P.jsx(m, {}), s && a && !r && P.jsx(f, { uid: n.uid, status: n.status, ref: t, direction: n.direction, responseRenderer: (R = n.messageOptions) == null ? void 0 : R.responseRenderer, markdownContainersController: n.markdownContainersController, markdownOptions: { syntaxHighlighter: (E = n.messageOptions) == null ? void 0 : E.syntaxHighlighter, htmlSanitizer: (A = n.messageOptions) == null ? void 0 : A.htmlSanitizer, markdownLinkTarget: (i = n.messageOptions) == null ? void 0 : i.markdownLinkTarget, showCodeBlockCopyButton: (u = n.messageOptions) == null ? void 0 : u.showCodeBlockCopyButton, skipStreamingAnimation: (l = n.messageOptions) == null ? void 0 : l.skipStreamingAnimation, streamingAnimationSpeed: (g = n.messageOptions) == null ? void 0 : g.streamingAnimationSpeed, waitTimeBeforeStreamCompletion: (k = n.messageOptions) == null ? void 0 : k.waitTimeBeforeStreamCompletion, onStreamComplete: p } }, "do-not-change"), s && a && r && P.jsx("div", { className: T, children: n.fetchedContent }), s && !a && P.jsx("div", { className: T, children: P.jsx(h, {}) }), o && P.jsx("div", { className: T, children: P.jsx(d, {}) })] });
}, Jo = (n) => typeof n == "string" || typeof n == "number" || typeof n == "boolean" || n == null, Qn = (n, e) => {
  var t, r;
  return n === "assistant" ? ((t = e == null ? void 0 : e.assistant) == null ? void 0 : t.name) ?? "Assistant" : n === "user" ? ((r = e == null ? void 0 : e.user) == null ? void 0 : r.name) ?? "User" : "";
}, Zn = (n, e) => {
  var t, r;
  return n === "assistant" ? (t = e == null ? void 0 : e.assistant) == null ? void 0 : t.avatar : n === "user" ? (r = e == null ? void 0 : e.user) == null ? void 0 : r.avatar : void 0;
}, Bd = function(n, e) {
  const { chatSegment: t, containerRef: r } = n, [s, o] = Ae(!1), a = se(() => /* @__PURE__ */ new Map(), []), c = se(() => /* @__PURE__ */ new Map(), []), p = he(/* @__PURE__ */ new Map()), h = he(/* @__PURE__ */ new Map());
  ((y, v, S, T) => {
    ie(() => {
      if (y.length === 0) return T.clear(), v.current.clear(), void S.current.clear();
      const R = new Set(T.keys()), E = new Set(y.map((A) => A.uid));
      R.forEach((A) => {
        E.has(A) || T.delete(A);
      }), new Set(v.current.keys()).forEach((A) => {
        E.has(A) || (v.current.delete(A), S.current.delete(A));
      });
    }, [y]);
  })(t.items, p, h, a), Pn(e, () => ({ streamChunk: (y, v) => {
    const S = a.get(y);
    if (S != null && S.current) {
      const T = S.current.streamChunk;
      (c.get(y) ?? []).forEach((R) => {
        T(R);
      }), c.delete(y), T(v);
    } else {
      const T = c.get(y) ?? [];
      c.set(y, [...T, v]);
    }
  }, completeStream: (y) => {
    const v = a.get(y);
    v != null && v.current ? (v.current.completeStream(), a.delete(y)) : o(!0);
  }, cancelStreams: () => {
    c.clear(), a.forEach((y) => {
      var v;
      (v = y.current) == null || v.cancelStream();
    });
  } }), []), ie(() => {
    c.size > 0 && c.forEach((y, v) => {
      const S = a.get(v);
      S != null && S.current && (y.forEach((T) => {
        var R;
        (R = S == null ? void 0 : S.current) == null || R.streamChunk(T);
      }), c.delete(v), s && (S.current.completeStream(), o(!1)));
    });
  });
  const d = se(() => t.status !== "active" ? null : P.jsx("div", { className: "nlux-chatSegment-loader-container", children: n.Loader }), [t.status, n.Loader]), f = se(() => Tn(Md), []), m = ye((y) => {
    var v;
    (v = n.onMarkdownStreamRendered) == null || v.call(n, t.uid, y);
  }, []);
  return t.items.length === 0 ? null : P.jsxs("div", { ref: r, className: ed(t.status), children: [t.items.map((y) => qd(n, f, t, y, a, h, p, m)), d] });
}, qd = function(n, e, t, r, s, o, a, c) {
  var m;
  const p = n.isInitialSegment;
  let h = s.get(r.uid);
  h || (h = rs(), s.set(r.uid, h));
  let d = r.content, f = "text";
  if (typeof d == "function") {
    const y = o.current.get(r.uid), v = a.current.get(r.uid);
    if (y && v) d = v, f = "server-component";
    else {
      a.current.delete(r.uid), o.current.delete(r.uid);
      try {
        const S = d;
        if (d = P.jsx(S, {}), !d || !it.isValidElement(d)) throw new Error("Invalid React element returned from the AI chat content function.");
        f = "server-component", a.current.set(r.uid, d), o.current.set(r.uid, S);
      } catch {
        return $e(`The type of the AI chat content is an invalid function.
If you're looking to render a React Server Components, please refer to docs.nlkit.com/nlux for more information.
`), null;
      }
    }
  }
  if (r.participantRole === "user") return r.status !== "complete" ? (Cn(`User chat item should be always be in complete state — Current status: ${r.status} — Segment UID: ${t.uid}`), null) : Jo(d) ? P.jsx(e, { ref: h, uid: r.uid, status: "complete", direction: "sent", contentType: f, dataTransferMode: "batch", fetchedContent: r.content, markdownContainersController: n.markdownContainersController, layout: n.layout, messageOptions: n.messageOptions, isPartOfInitialSegment: p, name: Qn(r.participantRole, n.personaOptions), avatar: Zn(r.participantRole, n.personaOptions), submitShortcutKey: n.submitShortcutKey, onPromptResubmit: (y) => n.onPromptResubmit(n.chatSegment.uid, r.uid, y) }, r.uid) : (Cn(`User chat item should have primitive content (string, number, boolean, null) — Current content: ${JSON.stringify(d)} — Segment UID: ${t.uid}`), null);
  if (r.status === "complete") return r.dataTransferMode === "stream" ? P.jsx(e, { ref: h, uid: r.uid, status: r.status, direction: "received", contentType: f, dataTransferMode: r.dataTransferMode, markdownContainersController: n.markdownContainersController, onMarkdownStreamRendered: c, streamedContent: d, streamedServerResponse: r.serverResponse, layout: n.layout, messageOptions: n.messageOptions, isPartOfInitialSegment: p, name: Qn(r.participantRole, n.personaOptions), avatar: Zn(r.participantRole, n.personaOptions) }, r.uid) : f !== "text" || Jo(d) || (m = n.messageOptions) != null && m.responseRenderer ? P.jsx(e, { ref: h, uid: r.uid, status: "complete", direction: "received", contentType: f, dataTransferMode: r.dataTransferMode, markdownContainersController: n.markdownContainersController, onMarkdownStreamRendered: c, fetchedContent: d, fetchedServerResponse: r.serverResponse, layout: n.layout, messageOptions: n.messageOptions, isPartOfInitialSegment: p, name: Qn(r.participantRole, n.personaOptions), avatar: Zn(r.participantRole, n.personaOptions) }, r.uid) : ($e(`When the type of the AI chat content is not primitive (object or array), a custom renderer must be provided — Current content: ${JSON.stringify(d)} — Segment UID: ${t.uid}`), null);
  if (r.status === "streaming") {
    const y = f === "server-component" && Sn(d) ? d : void 0;
    return P.jsx(e, { ref: h, uid: r.uid, status: "streaming", direction: "received", contentType: f, dataTransferMode: r.dataTransferMode, markdownContainersController: n.markdownContainersController, onMarkdownStreamRendered: c, fetchedContent: y, layout: n.layout, messageOptions: n.messageOptions, isPartOfInitialSegment: p, name: Qn(r.participantRole, n.personaOptions), avatar: Zn(r.participantRole, n.personaOptions) }, r.uid);
  }
}, zd = function(n, e) {
  const { segments: t, personaOptions: r, conversationOptions: s, onLastActiveSegmentChange: o } = n, a = rs();
  (function(d, f, m) {
    const y = se(() => {
      const S = d.length > 0 ? d[d.length - 1] : void 0;
      return (S == null ? void 0 : S.status) === "active" ? S.uid : void 0;
    }, [d]), v = he(void 0);
    ie(() => {
      if (!m) return;
      const S = v.current;
      if (y === (S == null ? void 0 : S.uid) && f.current === (S == null ? void 0 : S.div)) return;
      const T = y && f.current ? { uid: y, div: f.current } : void 0;
      (T || v.current) && (m(T), v.current = T);
    });
  })(t, a, o);
  const c = function(d) {
    const f = se(() => /* @__PURE__ */ new Map(), []);
    return ie(() => {
      if (d.length === 0) return void f.clear();
      const m = new Set(f.keys()), y = new Set(d.map((v) => v.uid));
      m.forEach((v) => {
        y.has(v) || f.delete(v);
      });
    }, [d]), { get: (m) => {
      var y;
      return (y = f.get(m)) == null ? void 0 : y.current;
    }, getRef: (m) => f.get(m), set: (m, y) => {
      f.set(m, y);
    }, remove: (m) => {
      f.delete(m);
    } };
  }(t), p = ((d) => se(() => {
    return f = d == null ? void 0 : d.layout, f ?? "bubbles";
    var f;
  }, [d == null ? void 0 : d.layout]))(s);
  Pn(e, () => ({ streamChunk: (d, f, m) => {
    const y = c.get(d);
    y == null || y.streamChunk(f, m);
  }, completeStream: (d, f) => {
    const m = c.get(d);
    m == null || m.completeStream(f);
  }, cancelSegmentStreams: (d) => {
    const f = c.get(d);
    f == null || f.cancelStreams();
  } }), []);
  const h = se(() => Tn(Bd), []);
  return P.jsx("div", { className: "nlux-chatSegments-container", children: t.map((d, f) => {
    const m = f === t.length - 1, y = d.uid === "initial";
    let v = c.getRef(d.uid);
    return v || (v = rs(), c.set(d.uid, v)), P.jsx(h, { ref: v, containerRef: m ? a : void 0, markdownContainersController: n.markdownContainersController, chatSegment: d, isInitialSegment: y, layout: p, personaOptions: r, messageOptions: n.messageOptions, Loader: n.Loader, submitShortcutKey: n.submitShortcutKey, onPromptResubmit: n.onPromptResubmit, onMarkdownStreamRendered: n.onMarkdownStreamRendered }, d.uid);
  }) });
}, Nd = { typing: "nlux-composer--typing", "submitting-prompt": "nlux-composer--submitting", "submitting-conversation-starter": "nlux-composer--submitting", waiting: "nlux-composer--waiting" }, $d = () => P.jsx("div", { className: "nlux-comp-cancelIcon", children: P.jsx("div", { className: "nlux-comp-cancelIcon-container" }) }), Hd = () => P.jsx("div", { className: "nlux-comp-sendIcon", children: P.jsx("div", { className: "nlux-comp-sendIcon-container" }) }), Ur = ["submitting-prompt", "submitting-edit", "submitting-conversation-starter", "submitting-external-message"], Fd = (n) => {
  const e = `nlux-comp-composer ${Nd[n.status] || ""}`, t = Ur.includes(n.status), r = !n.hasValidInput || n.status === "waiting" || Ur.includes(n.status), s = n.status === "typing" || n.status === "waiting", o = n.hideStopButton !== !0 && (Ur.includes(n.status) || n.status === "waiting"), a = he(null);
  ie(() => {
    n.status === "typing" && n.autoFocus && a.current && a.current.focus();
  }, [n.status, n.autoFocus, a.current]);
  const c = se(() => (d) => {
    var f;
    (f = n.onChange) == null || f.call(n, d.target.value);
  }, [n.onChange]), p = se(() => () => {
    var d;
    (d = n.onSubmit) == null || d.call(n);
  }, [n.onSubmit]), h = se(() => (d) => {
    Ei(d, n.submitShortcut) && (d.preventDefault(), p());
  }, [p, n.submitShortcut]);
  return P.jsxs("div", { className: e, children: [P.jsx("textarea", { tabIndex: 0, ref: a, disabled: t, placeholder: n.placeholder, value: n.prompt, onChange: c, onKeyDown: h }), !o && P.jsxs("button", { tabIndex: 0, disabled: r, onClick: () => n.onSubmit(), children: [s && P.jsx(Hd, {}), !s && n.Loader] }), o && P.jsx("button", { tabIndex: 0, onClick: n.onCancel, children: P.jsx($d, {}) })] });
}, xs = (n) => {
  var r;
  const e = {}, t = Object.keys(n);
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    o !== "personaOptions" && o !== "messageOptions" && o !== "adapter" && o !== "events" && Object.assign(e, { [o]: n[o] });
  }
  return n.personaOptions && (e.personaOptions = {}, n.personaOptions.assistant && (e.personaOptions.assistant = { name: n.personaOptions.assistant.name, avatar: typeof n.personaOptions.assistant.avatar == "string" ? n.personaOptions.assistant.avatar : "<REACT ELEMENT />", tagline: n.personaOptions.assistant.tagline }), n.personaOptions.user && (e.personaOptions.user = { name: n.personaOptions.user.name, avatar: typeof n.personaOptions.user.avatar == "string" ? n.personaOptions.user.avatar : "<REACT ELEMENT />" })), n.messageOptions && (e.messageOptions = { ...n.messageOptions, responseRenderer: n.messageOptions.responseRenderer ? () => null : void 0, promptRenderer: n.messageOptions.promptRenderer ? () => null : void 0 }), (r = n.conversationOptions) != null && r.conversationStarters && (e.conversationOptions = { ...n.conversationOptions, conversationStarters: n.conversationOptions.conversationStarters.map((s) => ({ ...s, icon: s.icon ? "<REACT ELEMENT />" : void 0 })) }), e;
};
var Ud = Object.defineProperty, Xn = (n, e, t) => ((r, s, o) => s in r ? Ud(r, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[s] = o)(n, typeof e != "symbol" ? e + "" : e, t);
class Vd extends Error {
  constructor(e = {}) {
    super(e.message), Xn(this, "exceptionId"), Xn(this, "message"), Xn(this, "source"), Xn(this, "type"), this.message = e.message ?? "", this.source = e.source, this.type = this.constructor.name, this.exceptionId = e.exceptionId;
  }
}
const Gd = (n, e) => {
  let t, r = e, s = n, o = !0;
  const a = ((S, T) => {
    let R = !1;
    if (typeof S != "function") throw new Vd({ source: "x/throttle", message: "Callback must be a function" });
    return (...E) => {
      R || (S.apply(void 0, E), R = !0, setTimeout(function() {
        R = !1;
      }, T));
    };
  })(/* @__PURE__ */ ((S) => {
    let T, R;
    return (E) => {
      const A = E.target;
      if (!(A instanceof HTMLElement)) return;
      const { scrollTop: i, clientHeight: u, scrollHeight: l } = A, g = l - 30, k = Math.ceil(i + u) >= g, w = T === void 0 || R === void 0 ? void 0 : i > T && R === l ? "down" : i < T && R === l ? "up" : void 0;
      R = l, T = i, S({ scrolledToBottom: k, scrollDirection: w });
    };
  })(({ scrolledToBottom: S, scrollDirection: T }) => {
    o ? T === "up" && (o = !1) : T === "down" && S && (o = !0);
  }), 50), c = (S) => {
    S.addEventListener("scroll", a);
  }, p = (S) => {
    S == null || S.removeEventListener("scroll", a);
  }, h = (S) => {
    (t == null ? void 0 : t.uid) === S && (d == null || d.disconnect(), f == null || f.disconnect(), t = void 0, d = void 0, f = void 0);
  };
  let d, f;
  const m = () => {
    s == null || s.scrollTo({ top: 5e4, behavior: "instant" });
  }, y = () => {
    s && r && o && m();
  }, v = () => {
    y();
  };
  return c(s), { updateConversationContainer: (S) => {
    p(s), c(S), s = S;
  }, updateProps: ({ autoScroll: S }) => {
    r = S;
  }, handleNewChatSegmentAdded: (S, T) => {
    t && (d == null || d.disconnect(), f == null || f.disconnect()), t = { uid: S, container: T }, d = new ResizeObserver(y), d.observe(T), f = new MutationObserver(v), f.observe(T, { childList: !0, subtree: !0, characterData: !0 }), r && m();
  }, handleChatSegmentRemoved: (S) => h(S), handleChatSegmentComplete: (S) => h(S), destroy: () => {
    t && (h(t.uid), t = void 0), p(s), s = void 0;
  } };
}, ea = !0, pr = (n) => {
  if (typeof n != "object" || n === null) return !1;
  const e = n;
  return (typeof e.streamText == "function" || typeof e.batchText == "function") && ["stream", "batch"].includes(e.dataTransferMode) && typeof e.id == "string" && typeof e.info == "object" && e.info !== null && typeof e.preProcessAiBatchedMessage == "function" && typeof e.preProcessAiStreamedChunk == "function";
}, ze = (n, e = 1) => {
  setTimeout(() => {
    n();
  }, e);
}, Wd = (n, e, t, r, s, o, a, c, p) => new Promise((h) => {
  const d = yt(), f = [], m = [];
  let y = !1, v = !1, S = !1;
  const T = pr(t), R = { next: (E) => {
    if (v || S) return;
    let A, i;
    if (T) {
      const u = E, l = t.preProcessAiStreamedChunk(u, r);
      l != null && (A = l, i = u, f.push(A), m.push(i));
    } else A = E, f.push(A);
    A != null ? (y || y || (y = !0, ze(() => {
      s.forEach((u) => {
        u({ uid: d, status: "streaming", time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" });
      });
    })), ze(() => {
      a.forEach((u) => {
        u({ chunk: A, messageId: d, serverResponse: i });
      });
    })) : $e("Adapter returned an undefined or null value from streamText. This chunk will be ignored.");
  }, complete: () => {
    v || S || (S = !0, ze(() => {
      const E = { uid: d, status: "complete", content: f, contentType: "text", serverResponse: void 0, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" };
      o.forEach((A) => {
        A(E);
      }), h();
    }), ze(() => {
      const E = { uid: n, status: "complete", items: [e, { uid: d, status: "complete", contentType: "text", content: f, serverResponse: m, time: /* @__PURE__ */ new Date(), participantRole: "assistant", dataTransferMode: "stream" }] };
      c.forEach((A) => {
        A(E);
      });
    }));
  }, error: (E) => {
    v || S || (v = !0, ze(() => {
      p.forEach((A) => {
        A("failed-to-stream-content", E);
      }), h();
    }));
  } };
  t.streamText(e.content, R, r);
}), Yd = (n, e, t) => {
  if (!n) return (() => {
    const E = /* @__PURE__ */ new Set(), A = yt(), i = { uid: A, status: "complete", items: [] };
    return ze(() => {
      E.forEach((u) => {
        u(i);
      }), E.clear();
    }), { segment: i, observable: { on: (u, l) => {
      u === "complete" && E.add(l);
    }, removeListener: (u, l) => {
      E.delete(l);
    }, destroy: () => {
      E.clear();
    }, get segmentId() {
      return A;
    } }, dataTransferMode: "batch" };
  })();
  const r = e;
  if (r.streamText === void 0 && r.batchText === void 0 && r.streamServerComponent === void 0) return ((E) => {
    const A = /* @__PURE__ */ new Set(), i = yt(), u = { uid: i, status: "error", items: [] };
    return ze(() => {
      A.forEach((l) => l(E)), A.clear();
    }), { segment: u, dataTransferMode: "stream", observable: { on: (l, g) => {
      l === "error" && A.add(g);
    }, removeListener: (l, g) => {
      A.delete(g);
    }, destroy: () => {
      A.clear();
    }, get segmentId() {
      return i;
    } } };
  })("no-data-transfer-mode-supported");
  const s = yt(), o = ((E) => ({ uid: yt(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: E, contentType: "text" }))(n);
  let a, c, p, h, d, f, m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set();
  ze(() => {
    m != null && m.size && (m.forEach((E) => {
      E(o);
    }), m.clear(), m = void 0);
  });
  const S = ((E) => {
    const A = [], i = E, u = E;
    (i == null ? void 0 : i.streamText) === void 0 && (u == null ? void 0 : u.streamServerComponent) === void 0 || A.push("stream"), (i == null ? void 0 : i.batchText) !== void 0 && A.push("batch");
    const l = pr(E) ? E : void 0, g = (l == null ? void 0 : l.dataTransferMode) ?? void 0, k = A.length === 1 ? A[0] : "stream";
    return g ?? k;
  })(e);
  ((E) => "streamServerComponent" in E ? "server-component" : "text")(e) === "server-component" ? (p = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), ((E, A, i, u, l, g, k, w) => new Promise((b, C) => {
    try {
      const L = A.content, D = yt(), I = "assistant", j = "streaming", x = /* @__PURE__ */ new Date(), B = "stream";
      let N, z;
      const O = () => {
        ze(() => {
          g.forEach((Y) => {
            N && z && Y({ ...N, content: z, status: "complete" });
          });
        }, 20);
        const U = { uid: E, status: "complete", items: [A, N] };
        ze(() => {
          k.forEach((Y) => {
            Y(U);
          }), b();
        }, 20);
      }, M = () => {
        w.forEach((U) => {
          U("failed-to-stream-server-component", new Error("Failed to load content"));
        });
      };
      z = i.streamServerComponent(L, u, { onServerComponentReceived: O, onError: M }), N = { uid: D, content: z, contentType: "server-component", participantRole: I, status: j, time: x, dataTransferMode: B }, ze(() => {
        l.forEach((U) => {
          U(N);
        });
      }, 10);
    } catch (L) {
      $e(L);
      const D = L instanceof Error ? L : typeof L == "string" ? new Error(L) : new Error("Unknown error");
      ze(() => {
        w.forEach((I) => I("failed-to-load-content", D));
      });
    }
  }))(s, o, e, t, c, p, y, v).finally(() => {
    ze(() => R());
  })) : S === "batch" ? (a = /* @__PURE__ */ new Set(), (async (E, A, i, u, l, g, k) => {
    try {
      const w = A.content, b = pr(i) ? i : void 0, C = b !== void 0, L = yt(), D = "assistant", I = "complete", j = /* @__PURE__ */ new Date(), x = "batch";
      let B;
      if (C) {
        const O = await b.batchText(w, u), M = b.preProcessAiBatchedMessage(O, u);
        M != null && (B = { uid: L, content: M, contentType: "text", serverResponse: O, participantRole: D, status: I, time: j, dataTransferMode: x });
      } else B = { uid: L, content: await i.batchText(w, u), contentType: "text", serverResponse: void 0, participantRole: D, status: I, time: j, dataTransferMode: x };
      if (!B) throw new Error("Response from adapter was undefined or cannot be processed");
      const N = B;
      ze(() => {
        l.forEach((O) => {
          O(N);
        });
      });
      const z = { uid: E, status: "complete", items: [A, B] };
      ze(() => {
        g.forEach((O) => {
          O(z);
        });
      });
    } catch (w) {
      $e(w);
      const b = w instanceof Error ? w : typeof w == "string" ? new Error(w) : new Error("Unknown error");
      ze(() => {
        k.forEach((C) => C("failed-to-load-content", b));
      });
    }
  })(s, o, e, t, a, y, v).finally(() => {
    ze(() => R());
  })) : (h = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), Wd(s, o, e, t, h, d, f, y, v).finally(() => {
    ze(() => R());
  }));
  const R = () => {
    m == null || m.clear(), m = void 0, a == null || a.clear(), a = void 0, c == null || c.clear(), c = void 0, p == null || p.clear(), p = void 0, h == null || h.clear(), h = void 0, d == null || d.clear(), d = void 0, f == null || f.clear(), f = void 0, y == null || y.clear(), y = void 0, v == null || v.clear(), v = void 0;
  };
  return { segment: { status: "active", uid: s, items: [] }, dataTransferMode: S, observable: { get segmentId() {
    return s;
  }, on: (E, A) => {
    E === "userMessageReceived" && m ? m.add(A) : E === "aiMessageReceived" && a ? a.add(A) : E === "aiServerComponentStreamStarted" && c ? c.add(A) : E === "aiServerComponentStreamed" && p ? p.add(A) : E === "aiMessageStreamStarted" && h ? h.add(A) : E === "aiMessageStreamed" && d ? d.add(A) : E === "aiChunkReceived" && f ? f.add(A) : E === "complete" && y ? y.add(A) : E === "error" && v && v.add(A);
  }, removeListener: (E, A) => {
    E !== "userMessageReceived" ? E !== "aiMessageReceived" ? E !== "aiMessageStreamStarted" ? E !== "aiMessageStreamed" ? E !== "aiChunkReceived" ? E !== "complete" ? E !== "error" || (v == null || v.delete(A)) : y == null || y.delete(A) : f == null || f.delete(A) : d == null || d.delete(A) : h == null || h.delete(A) : a == null || a.delete(A) : m == null || m.delete(A);
  }, destroy: () => R() } };
}, Qd = { "data-transfer-mode-not-supported": "Requested data transfer mode is not supported", "no-data-transfer-mode-supported": "Adapter does not support any valid data transfer modes", "connection-error": "Connection error", "invalid-credentials": "Invalid credentials", "invalid-api-key": "Invalid API key", "http-server-side-error": "HTTP server side error", "http-client-side-error": "HTTP client side error", "failed-to-load-content": "Failed to load content", "failed-to-stream-content": "Failed to stream content", "failed-to-stream-server-component": "Failed to stream server component", "failed-to-render-content": "Failed to display content" }, Zd = (n) => {
  var A;
  const { aiChatProps: e, adapterToUse: t, prompt: r, composerOptions: s, showException: o, initialSegment: a, newSegments: c, cancelledSegmentIds: p, cancelledMessageIds: h, setChatSegments: d, setComposerStatus: f, setPrompt: m, conversationRef: y } = n, v = se(() => r.length > 0, [r]), S = he(r);
  S.current = r;
  const T = he({ newSegments: c, cancelledSegmentIds: p, cancelledMessageIds: h, setChatSegments: d, setComposerStatus: f, showException: o, setPrompt: m }), R = he({});
  ie(() => {
    T.current = { newSegments: c, cancelledSegmentIds: p, cancelledMessageIds: h, setChatSegments: d, setComposerStatus: f, showException: o, setPrompt: m };
  }, [c, p, h, d, f, o, m]);
  const E = ((i, u, l) => se(() => {
    const g = ((w) => {
      const b = [];
      return w.forEach((C) => {
        C.items.forEach((L) => {
          if (L.status === "complete") {
            if (L.participantRole === "assistant") b.push({ role: "assistant", message: L.content });
            else if (L.participantRole === "user") return b.push({ role: "user", message: L.content });
          }
        });
      }), b;
    })(u), k = l === "max" || l === void 0 ? g : l > 0 ? g.slice(-l) : void 0;
    return { aiChatProps: xs(i), conversationHistory: k };
  }, [i, u, l]))(e, a ? [a, ...c] : c, (A = e.conversationOptions) == null ? void 0 : A.historyPayloadSize);
  return ie(() => {
    R.current = e.events || {};
  }, [e.events]), ye(() => {
    if (!t) return void $e("No valid adapter was provided to AiChat component");
    if (!v || s != null && s.disableSubmitButton) return;
    f("submitting-prompt");
    const i = r, u = /* @__PURE__ */ new Set(), l = pr(t) ? t : t.streamServerComponent ? { streamServerComponent: t.streamServerComponent } : { batchText: t.batchText, streamText: t.streamText }, { segment: g, observable: k } = Yd(i, l, E);
    if (g.status === "error") return $e("Error occurred while submitting prompt"), o("Error occurred while submitting prompt"), f("typing"), void (S.current === "" && m(i));
    const w = (b) => {
      const C = T.current.newSegments.map((L) => L.uid !== k.segmentId ? L : { ...L, items: [...L.items, { ...b }] });
      T.current.setChatSegments(C);
    };
    k.on("userMessageReceived", (b) => {
      var C, L;
      (C = T.current) != null && C.cancelledMessageIds.includes(b.uid) || (w(b), (L = R.current) != null && L.messageSent && R.current.messageSent({ uid: b.uid, message: b.content }));
    }), k.on("aiMessageStreamStarted", (b) => {
      var C, L;
      (C = T.current) != null && C.cancelledMessageIds.includes(b.uid) || (w(b), T.current.setComposerStatus("waiting"), S.current === i && T.current.setPrompt(""), u.add(b.uid), (L = R.current) != null && L.messageStreamStarted && R.current.messageStreamStarted({ uid: b.uid }));
    }), k.on("aiServerComponentStreamStarted", (b) => {
      var C, L, D;
      (C = T.current) != null && C.cancelledMessageIds.includes(b.uid) || (w(b), T.current.setComposerStatus("waiting"), S.current === i && T.current.setPrompt(""), u.add(b.uid), (L = R.current) != null && L.serverComponentStreamStarted && ((D = R.current) == null || D.serverComponentStreamStarted({ uid: b.uid })));
    }), k.on("aiServerComponentStreamed", (b) => {
      var C, L, D;
      (C = T.current) != null && C.cancelledMessageIds.includes(b.uid) || (L = R.current) != null && L.serverComponentRendered && !T.current.cancelledMessageIds.includes(b.uid) && ((D = R.current) == null || D.serverComponentRendered({ uid: b.uid }));
    }), k.on("aiMessageReceived", (b) => {
      var L, D;
      if ((L = T.current) != null && L.cancelledMessageIds.includes(b.uid)) return;
      const C = T.current.newSegments.map((I) => I.uid !== k.segmentId ? I : { ...I, items: [...I.items, { ...b }] });
      T.current.setChatSegments(C), (D = R.current) != null && D.messageReceived && R.current.messageReceived({ uid: b.uid, message: b.content });
    }), k.on("complete", (b) => {
      var L;
      if ((L = T.current) != null && L.cancelledMessageIds.includes(b.uid)) return;
      T.current.setComposerStatus("typing");
      const C = T.current.newSegments.map((D) => D.uid !== k.segmentId ? D : { ...b });
      T.current.setChatSegments(C), S.current === i && m(""), u.size > 0 && (u.forEach((D) => {
        requestAnimationFrame(() => {
          var I;
          (I = y.current) == null || I.completeStream(k.segmentId, D);
        });
      }), u.clear());
    }), k.on("aiChunkReceived", ({ messageId: b, chunk: C }) => {
      var L, D;
      (L = T.current) != null && L.cancelledMessageIds.includes(b) || ((D = y.current) == null || D.streamChunk(g.uid, b, C));
    }), k.on("aiMessageStreamed", (b) => {
      var C, L, D;
      (C = T.current) != null && C.cancelledMessageIds.includes(b.uid) || (L = R.current) != null && L.messageReceived && ((D = R.current) == null || D.messageReceived({ uid: b.uid, message: b.content }));
    }), k.on("error", (b, C) => {
      var I;
      const L = T.current.newSegments.filter((j) => j.uid !== g.uid), D = Qd[b];
      T.current.setChatSegments(L), T.current.setComposerStatus("typing"), T.current.showException(D), S.current === "" && m(i), (I = R.current) != null && I.error && R.current.error({ errorId: b, message: D, errorObject: C });
    }), T.current.setChatSegments([...T.current.newSegments, g]);
  }, [r, t, E, o, T, s == null ? void 0 : s.disableSubmitButton]);
}, Ii = "nlux-comp-welcomeMessage", Di = (n) => P.jsxs("div", { className: Ii, children: [P.jsx(Pi, { avatar: n.avatar, name: n.name }), P.jsx("div", { className: "nlux-comp-welcomeMessage-personaName", children: n.name }), n.message && P.jsx("div", { className: "nlux-comp-welcomeMessage-text", children: n.message })] }), ta = ({ children: n }) => P.jsx("div", { className: Ii, children: n }), Xd = () => {
  const n = se(() => "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAAewgAAHsIAXgkHaEAABj0SURBVHic7Z13vBxV2ce/Z29ugEQMEAICQUBAkBqqlCiRKqC0gApKE14poh8VUCmihv4SCB2CVAtFQBR9UZpCaMIL0ouAGIIEQgsJya27e/zjmb117+yUc+bM7J7v53Nys3dnzjx3dn9z2nOeR2mt8Xg89Sm5NsDjyTNeIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCKNsVdwzY4Ktqgej+v6RHwpQ8lqr2jFD3q+9UAPrGHDcwN8F6JD3hr1m0LHjgYnAWsAqwGrA8sDKwNLAOGAMsCTQPuDkMtANdAALgUXAPOBtYC4wB5gNvI5m7gBLhxjOiK8VwMAdpQOPrf1eD31PD/5dcJwa8lr+P+D4Ie8pCxtZ249/z3id1gTSoowHNgEmBWUDNGsBYy1eswy8BrwIPAs8BTyBiMeTEi+QdCwFfA6YAmwLbAaMHf7Ytsoo4NNB2XPA758GHgHuB2bBwFbGExUvkPisAOwK7ALsAKyQrR4is3FQjgR6EaH8CfgL8E+HdhUKL5BoLAHsBUwFdkczxq05sWkHdgwKiFhuBm7DtyyheIGEsyFwMHCA0nol18YYZLugnAfcAlwD3OPUopziBVKf3dEcCXzJtSGWGQ0cEJTHgV8A1wI9Dm3KFX4dZDD7A48iffVmF8dQNgdmAv8CTkCmoFseLxDhq8CTaH09Wm+J1rRwmYjWZyBC+TEy/mpZWl0gOwEPorkRzaT+BS1f0ExAcybwKvCtNDe5yLSqQNYAbkZzF5ptc/BlzHOZiGYm0vXcKukNLyqtKJD9gRdB7+v6m1ewsiXoR4CTE931gtJKAvkEcAua69Es4f77VthyKuLOsk3cD6CItIpADgReRjM1B1+wZigbo3kIOCPm51A4mn0dZDRwFVp/w7UhTcoJyETHQYizZNPRzALZXMGNwJquDWlyNgeeAw5DFhmbimYVyBHA5WjXZrQMJcRdZUvgaMe2GKUZBXIZWh/p2ogW5SjEf20v4H23ppiheQSiWBL4E5odXJvS4kxGNm7tiuxJKTTNIpBV0PwNWNu1IR4AVkKmgr8I3OnWlHTYE8iwfdqGGD6uWA/0LGS7qydf/AX4BvAb14YkxZ5AqtZqFkSAWwctR0s71OWcXwPLAhe7NiQJ1gSiKnamkHTf0qaaDDxg5SIe01yErEmd59qQuBR1DLI1WntxFItzkX7F+Y7tiEURXU0mAQ+5NsKTiBnIGlVhKFYLolgDzcPYmwLw2Ody4EPgJsd2RMKeQLThMYji42j+riQWlafY3Ai8hWaWa0MaYVEgButSgOYBJCaVpzn4G7AWmn+7NiSMYnSxNLcBG7k2w2OUEjKWXJ0cR1HJdxdLRho/Q3x7PM3HSsDdwHZ5dSzNexdrd+CnRmry5JXPA+eiOda1IfXIcxdrRTS3uzbCkwk/QMKh5u7zznMX6y7ys07TDTwJvAC8gkxTdiIxb5dGIqtvCHyWfD908sxtwIqA+SQfKcjrh3kG+RiU3wr8DvgrkrimEasAOyN74L9g0a5mpATcgWy6yg1Km16vCOg9bdlkJyq2AB4zakx8LgQuQPFaorPllu4AnIL0sT3ROREJWBeb9pPnm7bFpkCWSXimmovMbrjgLuBYFM+JKQlr0YP+fwzirOeJjP400pWNRfvJHxq3xJ43bzLdzQBnaQaO04pzLXixXKy0noUExF7VdOVNyu+QMZ1z7A2C48daWg/N9xzEeOpGxg3n2roVwDPARmieyUFMqyKUDYDvxD7PAnmZJQL4rYNrfoCkKbvb6lWkUfoQ2AIRi6cRmguBZVybYXFHYQxJK74JrG/Nlvp8BGyGUrMzvGYPmm1Av4qEQvWEcxWaqS4NyMM07yh05tsxe4FtUBmkShZHSyT3BgCLgc+h+Sf5asHzyD7AlmjtbFYzDwuF15O1C7tSnwee6/vijrK4vaQKDN9+/CqyK/JRexduGn4PrOzq4m4H6dL/38+aDfX5X+Dvfa+0li9wnC5hFJSITpUrUvfwTE6PAd81e9GmZCXgOFcXt7YOUj7l41EOewAJNJYVz1JvhV4H/7S3oUeV+lu/NA2LVqieClSrfWIZgUfJ2epxDukAxgHlsINGTVto/MIWW5C6T82BZXM0kzOePtwtdHqwtwrlavqlkJJClatSH6qRTfvlYFo172UMmh81/E5ZwGUXa3rGySm/D/o/oTe3qlFdZekShT/1R6ZNich6ysHdbXgj5qD12TlI3pn3ciKattBbaQFrAlHhZX0F2zU4xlzRvAicH3oTNX0th+pJ2IoooKIpdVZQOrh2NULRnKA0CzO7H8UsYxR8O+wYG7hqQX6eaRMNBygNkYpSqN4qqrsCpRi3XQFKUeqsyKBfqThPNQ0cl4OuTN7LSVRhxGIBFwuFy6MyXfy5AQmkHAvVXUGPLolIosxwlRSqqwK9gbDi94l/Afwcd46aRWAFYE80f8jqgi4WquL72KRrPY6JbaECtKbUUZaWoNF4pKRQZY3qLMvJye09PgdP6byXE8I/DLO4WCj8trVrDmc6Wn2Q7FQFPRXU4l70Um2hhwHQ0SstTRs1YSbhN8DZyMYrT30+i+zgfDmLi2XdguxKdmkKysApqR5XJYVa3CuD9lEj3KpSCdVZ7h+zJBdHjT+mrqH5OSqrC2U9SD86w6b4TDSdqetpK6E6yjJ1O6qEbh9QlmiDSlXeL5VM2X1dDroxeS8Ho1HDfm+BLMP+LIuE8cmCHpShHN4KEUFXBb0UlDrL/X9bSUFZB+MUI1cD+DuapxE3HE99at+lP9m+UJZjkP2wN109lIuArtS1aEQEo0qU3u/qdx3RA94f3UZ13GgRibmcKGcjTpyekTmQDARizRerctyYob/6K9lF+hiPbIZKR5uCKqiPumWMoZT8TiHiCFoXVElEMrpNumIm0HyAPCk99elA7k9f2NK26R3GL5LVIH05shPHLzEljrKm9GGXiGNUqV8c0P+zTZwbSx92oxb3BouLqaZ6ay3UL1L/Dc3NGCRJqFUsBm0Y1DLtYes6wy/M6anO14gYequoBd39r8MIFgbVRz3Sooxtly5musb5YuCHqWpofqZiORpjVi3IbhldZxaal1M9uUvB+seCbqmxLeKwSclYRXWUUYuClqTWFUvGG0gYIs/IHASMtXmBLGaxSsCO1q4zmNNSnd2mpOVY2CNf7ji+WDVGlaBLnBX12HZx8EouknOQiCue+jyI5YmfLGaxtiCbweabpIlO0iZOiiwMxnxJxDGgLrrK4q84ph10NalI7kH+Lr+yPpw7Ucr6GCSLhcLtM1o8ujDxuUoG5OqjQBxRu1VhtJVQnRXZX5J0b4kwIwcLc3krj5DBAB2yGYN8LoNraGBmorMCb93Sop7+1yZQoEsKtbgsriqlxDNbM7HmzF1I3gCmZHUx212sNsS5zDa3AgtinzVQHBUtU7YmCcYxalEP+mPt0F5Kspi4CHFiPNCscYVkIRIMvAcN8gTB6ijEdhdrPTTLZdDkxu+GBDaqjl5xFzHVcgwlqLa0qBd6ddKW5MwcdGtcl/mI+83sure5104ja3sWaxNr9ffzGoqHY59VKqG6yqjuqt24WNDfUnX0Uh07WkQTxHOIyItoHgK2tWVizqkAW1EaIA5N315b1V016eYzCIuRFTVoJtmrP0BxOTrOF1ye4qqnIhucbLUcQwkcG1VHL3rMKLEj3kPvdCTBTCuyA6iX++5XTRwaiR5TrprvHgfYTn9gP4S95ur+PlMEFBK9pKPc/zoralPJXRX0Um2oeE+9PwNzgE/aMS63HKPh/mEPFI3cv4rF7jH2u1jrWqtf+APwfuSjg8AKqm/3X5bqCCgp8e1qU0kG7afSWj5aN6G4pO6nVNVSLM/D2pzFmghMtFY/gFKXRD5WB0+anir0OBIH9LVYqrOMVu3yAVc1kZoyxVVoPR2JMtjsvIlSX6vbOdBBy5HBR2hTf2tYrBs089D67khBx6rBzawEgeEcaaOPUuBG31Vm0JRaoyJ7E9I5YxYBzUJgu4afZwbYnOZdzeq0H1wZ41gg6NpUcC8QkDvfq2UGRsWa+p2BpisH0662ygfApsC/6t63kUMwrTDSG2mwGZt3ouVQlDMjH6tA9VZkHSIkQEnmlIDuqtgWhBqKUMpoPS0HoUBtlPlonUQce6D1LTY+IpuDdJsOdg8iLgeNCWat6DYQlNo0NXtqrUh09/izgROBj1myzAWdwBYoXq/7blWH3ZvrgCVsGGWzizXeYvcqRkYqJb5Q8t/8URu091Ti3IMqmhNz0B0y+ZluS1jLUR3x3IPRLIO2EyfL5iyWrRx8H4G6OdKRqraQpNM+ClZFgpWtDiyP7HlfEom99T4wF3gJeE7si4kCKuIuodtV1FX2i9CcBKwY+3p5Q7ELWj0JBGIZ0lSMHDehDbg0+P9oG6bZzFG4jKV6f43Wjdega12r3sTi2BHYE/FG3pBaLeFdoPlI9+92xIFyfuSrlZBZthLo6AHo/gfLW04z4BDCdk6GBxU5A9mbzoCfRrEW1YTD214C1jFer2JD5EndmLIeeUpwYCyrvp9qLBK175vAZ1JaugC4EjgXrd8C+r/0mvofvAZKSJariCjNw8DW6Ux1g4afopgmr4Z/SCr8u7kcgxeJ53Jlxfi412YXy4ai/4FWjcVRaz3izZcfjdanYK7LMg44FjgamAac1fCMwIlRlXWchcz90Xp2Qhtdcp1Salq/BgaLQdXrag1m6HqQlS6WzUH6khYGchdGOjCeONZDciVegmZFCwPQpYAzkVyEjVulmrgrVSJOjb4O/Mz5IDtemQUcgtaoEYr8bSOePwHNkUN+Z+Vhb3Ml3bSiO9HcEOkDiJ6x9lDgeWq5Em0hdm2JdA2/2vD42nTvyDM3Q8vPySjauQFepVGMtMafxU/q/M7Kd9nmOohpg69hQBS9kOs2RlqWc9CZpxcuATcis2LTGx6tNTH6iLshX748Mx/YhjBH/8af3xJIt3UoVibxXeQHSYbiVGN1aW4H/WVj9cXnHMTT+fCGR0YXyb9A7wnZZV+KySsodgb1LlBfCHqkNwZxJhn6Q7jIMJWE69G8Ham70Zg7AJfiqHEYkadoo3buuZ1sExRF5U0k/NPs8MMafoAfA75vwqCo2BRIxWBd6QLC9fN7JIlPXvgycJnhOi9FotvnhbeBzYAFouOQCYfGhInfyqZ0mwJpPF6IxqPAiwbq+SWy8Jc3jgS+Y7jO75KP9An/RuISzDNUX1jrYfKB3IdNgXQaquenBuo4j3yHzbkQ2MpwnV9HwgW54lFgEtKCmGB3wteoyoauMwibAllsoI5XgDtT1nEsGfdbE3IX5j1SvwFcYLjOKPwKEfxCg3U2mnE01WMZhE2BmMhmcnLK8/chynRqPlga8d8yzfeQblwWaCTt9kGG612dxtEUew1fE7ArkPdSnv8f4Lcpzt8CO184m+yORA40zUyku/OQhbpr3IF4JUSPExCdKDNzprr0g7ApkHdSnv+DFOeuBNyf8vqusNUlehqYDByBhA8yxYPIbNzuiMu/DQ6LcExLCeQ1INqej+G0Aw8DS6W4vksmIW7strgCWBNZpLwvYR2vI+GHvoBsB7CZTHNvoqXPiL8PJwI294P8J8W5ab4g9yF91iJzGeKSYuVDR2Z8rgrK2siXfAuki7QyMh6qBUjtQB52s4EngVnIDJVN77WBRJ0Cf9fGxfMokPuRjLhJuBXx9Sk6bci44YAMrvVKUK4e8Luao6nG0uA3IqsQPfnrXBsG2OxizU54XtL1iiuQWatmYX+yCN1an56guBQHwLdiHFt/P3tKbArkNeLf4FOIGq1kMNOx2293xTWuDXBMY2fOfl6zYYBNgcwnnvv1C5DIY/cMZDGwGdmMfPmOZckUZDwUFSszaLa9eeMYnSTn3HnACQnOKxKXuzbAEXH80+Yhfl/GsS2QZyIety/xu1anUwwXkrR8EvGraiXGIdO7UXmWAnrzAjwV4ZgTib/iPSU4r1U4z7UBGXMg8XYIPm3LENsCeaLB+6cjO8TisAytl2lpBeINWIvOUTGP/4cVK7AvkDcYeXbheJI5I/6V4q6Sp+EM1wZkxKbIgmUcHrNhCGSz5XZogs1XgZ1I5mV7A9kkBs0jE4jmk1R04m4ZnoPFYBVZCOTR4OdLSKuxDnBPgnpmAF8zZVRBMbX1OK+MRhZI4zDLhiE1bLqa1LgJmc1K84eciexraHU+gQxgf+XaEEscSPzuc1K3pEhk0YK8SzpxnAz82JAtzUAzp2BLMm2fpDcSmbyH/TmQZKvrzcyqNJfPWY1JwPoxz3meZK5JkcmzQL6ERCLxDOds1wZYIEmUyz8at2IIeRXIXmTwxxeYtYCdXRthkKVJ5tpvJS/hQPIokKOA21wbUQDOcW2AQY4gfmzdN2i8EJ2avAnkMvpTannC2Qg7AR5ckKR7lSagR2TyIpDtkdQAWYWnaRaaYSyyD8mSFl1n2pB6uBbIpsje63uJP4PhkeBsm7s2IiVJImc+j3jwWieLhcKhrI3sG/8KktPCk44ZSNCFIrIt0lWMy0zThoyEC4HcgOyU85hhMtISW/NotUiSLmIVuNawHSPioot1rYNrNjs2ohnaZiOkBYnL9dgLhzQMFwK5BLNBjT0yFpns2oiYJI0gmenEhAuBaNxEHG92MuuXG2ATGgejrsdjyGxnZriaxZpOdpH5WoX1kImPIpBUzJkH6HAlkIW0brQOm1zs2oAIfBEJcxqXl7Hs2l4Pl+sgJjJHeQYzAZjm2ogGXJnwPCexz1wK5F2KOfuSd36CpH/IIyci8Xbj8hJ2I8iPiOuV9JMcX79ZudG1AXWYQPLNXseYNCQOrgWygNYI/pY1n0cy3eaJPyc8707EFckJrgUCcD7iW+MxywXILr08cDXJvSf2NWlIXPIgEJBsrB7z/J9rAxBv3UMTnns8sMigLbHJi0CeonkjdbhkZdzmSl+d5IlU55CDDMV5EQhIfg8riRhbnAOQHXtZsyTwQIrz9zNlSBryJJBukmeX8oRzOdmnpnsAmJjw3KuwGE40DnkSCEhznHS2wxPOfcCnMrxW0o1cH5CjbGF5EwjIrEW3ayOakHYkDGzSp3oUPg48AmyXoo69yJGfXh4F0kG85Cme6CyPbKxa00LdmyHbYLdKUce5pBu3GCePAgHpZnk3FDtMQBLOTDFY57HA40g2rKQ8T7LoJlbJq0BA3Asy2ZjfgowF/gb8KGU9OyHpLdJOx+qgrtyRZ4EA7Ijk6/bY4SzgIeQ+R2UMkobiXuAuYGsDduwBvGWgHuO4CNoQh3eQ/QOZ7wNoIbYB7gYeRIKxPYBkjF0MLAGMR+JWbYhET9kNSQlnip/hyFM3CkprSxMGh8SNJBnKMcBFJiv0hLIAcfFYElgWez2NWzC5IHit+e9y3rtYNS6mGLvlmoVxyL6N8dj7jjxBTlbLwyiKQEASy//OtREeI8yhIHGFiyQQgKlYzknnsc6HyFpJh2M7IlE0gYCs0j7u2ghPIjqBz5LTGat6FFEgIFOLT7o2whOLbkQcL7s2JA5FFUgZudn/79oQTySqyOdVuIXfogoEoBe56fe7NsTTkMMR95bCUWSBgLgoTAF+79YMTwhzgGtcG5GUogukxt5I+jZP/rCax9w2zSIQgKOBH7o2wjMMp0EX0tJMAgHJ/LoX3sExT6zu2oA0NJtAAP4AbIBESvG4J0mKtdzQjAIBeAXJQXGFa0M8rI6EHyokzSqQGkcgQekWuzakxVnPtQFJaXaBgAROWwfpenncsIFrA5LSCgIBeBMZvB+Gz4/oAi+QgnA18GkkYrgnOz7j2oCktJpAAOYh23gPBd5wbEursC4Sl6twtKJAalwLrI1kZPLdLrssB6zl2ogktLJAQFywT0MCqZ1FwVd9c866rg1IQqsLpMZ7SIrhNZEkmPPcmtOUFHLB0AtkMO8g2Xc/BXwbCSzQClSwvwW2kGshXiD16QAuRSKUb4+MVz5yaZAl7gC+DqwBrIbs1DwBO6kHxlio0zpFiYuVB8YjEQD3BnYBRrs1JzGPALche2heCTlucySC4lTMOBxegu1stRbiYnmBJGMlYGckZOcU7KYUSMsiZNflX5C9GS8lqGNP4CtBSRqNczIS5tQeXiC5pA3Z+jsZCWezKdJdccX7wDNILpCHkODSHxiqe1Xgm4hQ4owp7iVe/N9keIEUhvWBjZF4tusgawCfRCIWmqILeB2YDfwTCYjwNPAC2Thn7oDkP9wLWecYiReALTOxyQuk0IxDumYrBz+XRRLajEeCRI9GVptLyF77XmTjVw8SbO09pCWYB8wF3kZm3VwzDhHJVMTnanlkVuwtxKXneCQKjX0KJRCPpwnw07weTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwj/Ba/47FkhCYEqAAAAAElFTkSuQmCC", []);
  return P.jsx(Di, { avatar: n, name: "" });
}, Kd = (n) => {
  const { onConversationStarterSelected: e } = n;
  return P.jsx("div", { className: "nlux-comp-conversationStarters", children: n.items.map((t, r) => P.jsxs("button", { className: "nlux-comp-conversationStarter", onClick: () => e(t), children: [P.jsx(Jd, { icon: t.icon }), P.jsx("span", { className: "nlux-comp-conversationStarter-prompt", children: t.label ?? t.prompt })] }, r)) });
}, Jd = ({ icon: n }) => n ? typeof n == "string" ? P.jsx("img", { src: n, width: 16 }) : P.jsx("div", { className: "nlux-comp-conversationStarter-icon-container", children: n }) : null, el = (n) => {
  const { segments: e, personaOptions: t, conversationOptions: r, userDefinedGreeting: s } = n, o = se(() => e.some((f) => f.items.length > 0), [e]), a = se(() => !s && !o && (t == null ? void 0 : t.assistant) === void 0 && (r == null ? void 0 : r.showWelcomeMessage) !== !1, [o, t == null ? void 0 : t.assistant, r == null ? void 0 : r.showWelcomeMessage, s]), c = se(() => !s && !o && (t == null ? void 0 : t.assistant) !== void 0 && (r == null ? void 0 : r.showWelcomeMessage) !== !1, [s, o, t == null ? void 0 : t.assistant, r == null ? void 0 : r.showWelcomeMessage]), p = se(() => !o && (r == null ? void 0 : r.conversationStarters) && (r == null ? void 0 : r.conversationStarters.length) > 0, [o, r == null ? void 0 : r.conversationStarters]), h = se(() => s !== void 0 && (r == null ? void 0 : r.showWelcomeMessage) !== !1, [s]);
  ie(() => {
    s && (r == null ? void 0 : r.showWelcomeMessage) === !1 && Cn("Configuration conflict: The greeting UI override provided via <AiChatUI.Greeting> will not be shown because conversationOptions.showWelcomeMessage is set to false.");
  }, [r == null ? void 0 : r.showWelcomeMessage, s]);
  const d = !(a || c || h || o);
  return P.jsxs(P.Fragment, { children: [a && P.jsx(Xd, {}), c && P.jsx(Di, { name: t.assistant.name, avatar: t.assistant.avatar, message: t.assistant.tagline }), h && P.jsx(ta, { children: s }), d && P.jsx(ta, { children: null }), P.jsx("div", { className: "nlux-conversationStarters-container", children: p && P.jsx(Kd, { items: r.conversationStarters ?? [], onConversationStarterSelected: n.onConversationStarterSelected }) })] });
}, na = () => P.jsx("div", { className: "nlux-comp-messageLoader", children: P.jsx("div", { className: "nlux-comp-loaderContainer", children: P.jsx("span", { className: "spinning-loader" }) }) }), ra = { Loader: (n) => P.jsx(P.Fragment, { children: n.children }), Greeting: (n) => P.jsx(P.Fragment, { children: n.children }) }, Ss = Fa({}), tl = function(n) {
  var Se, F, Re, st, Ze;
  const { adapter: e, className: t, initialConversation: r, conversationOptions: s, composerOptions: o, displayOptions: a } = n, { themeId: c, colorScheme: p } = a ?? {}, h = he(null), d = he(null), f = he(void 0), m = he(null), y = ((q, V) => {
    const [te, le] = Ae(), [Ee, Te] = Ae(), pe = he(te), je = he(V);
    return ie(() => {
      const H = q.current || void 0;
      H !== Ee && Te(H);
    }), ie(() => {
      Ee ? pe.current ? pe.current.updateConversationContainer(Ee) : (pe.current = Gd(Ee, je.current ?? ea), le(pe.current)) : pe.current && (pe.current.destroy(), le(void 0), pe.current = void 0);
    }, [Ee]), ie(() => {
      je.current = V, pe.current && pe.current.updateProps({ autoScroll: V ?? ea });
    }, [V]), te;
  })(d, s == null ? void 0 : s.autoScroll), v = se(() => m.current ? Ju(m.current) : void 0, [m.current]), S = (() => {
    const q = {}, V = /* @__PURE__ */ new Set();
    return se(() => ({ getStreamingDomElement: (te) => {
      if (V.has(te) && V.delete(te), q[te] === void 0) {
        const le = document.createElement("div");
        le.setAttribute("nlux-message-id", te), le.className = "nlux-markdown-container", q[te] = le;
      }
      return q[te];
    }, deleteStreamingDomElement: (te) => {
      V.add(te), setTimeout(() => {
        V.forEach((le) => {
          q[le] && (q[le].remove(), delete q[le]);
        }), V.clear();
      }, 1e3);
    } }), []);
  })(), { PrimitivesContextProvider: T } = function(q) {
    var le, Ee, Te, pe, je, H, X, me, fe;
    const [V, te] = Ae(q);
    return ie(() => {
      te(q);
    }, [(le = q == null ? void 0 : q.messageOptions) == null ? void 0 : le.htmlSanitizer, (Ee = q == null ? void 0 : q.messageOptions) == null ? void 0 : Ee.syntaxHighlighter, (Te = q == null ? void 0 : q.messageOptions) == null ? void 0 : Te.markdownLinkTarget, (pe = q == null ? void 0 : q.messageOptions) == null ? void 0 : pe.showCodeBlockCopyButton, (je = q == null ? void 0 : q.messageOptions) == null ? void 0 : je.skipStreamingAnimation, (H = q == null ? void 0 : q.messageOptions) == null ? void 0 : H.streamingAnimationSpeed, (X = q == null ? void 0 : q.messageOptions) == null ? void 0 : X.waitTimeBeforeStreamCompletion, (me = q == null ? void 0 : q.messageOptions) == null ? void 0 : me.responseRenderer, (fe = q == null ? void 0 : q.messageOptions) == null ? void 0 : fe.promptRenderer]), { PrimitivesContextProvider: se(() => ({ children: Be }) => P.jsx(Ss.Provider, { value: V, children: Be }), [V]), primitivesContext: Ss };
  }({ messageOptions: n.messageOptions }), [R, E] = Ae(""), [A, i] = Ae("typing"), [u, l] = Ae(), [g, k] = Ae([]), [w, b] = Ae([]), [C, L] = Ae([]), D = se(() => u ? [u, ...g] : g, [u, g]), I = se(() => ((q) => {
    const V = q;
    if (typeof (V == null ? void 0 : V.create) == "function") return V.create();
    if (typeof (V == null ? void 0 : V.batchText) == "function" || typeof (V == null ? void 0 : V.streamText) == "function" || typeof (V == null ? void 0 : V.streamServerComponent) == "function") return q;
    $e("Unable to determine the type of the adapter! Missing batchText or streamText method.");
  })(e), [e]), j = ((q) => se(() => {
    const V = { minWidth: "280px", minHeight: "280px" };
    return q != null && q.width && (V.width = q.width), q != null && q.height && (V.height = q.height), V;
  }, [q == null ? void 0 : q.width, q == null ? void 0 : q.height]))(a), x = se(() => ((q) => {
    const V = ["nlux-AiChat-root"], te = `nlux-theme-${q.themeId || "nova"}`;
    return V.push(te), q.className && V.push(q.className), V;
  })({ className: t, themeId: c }).join(" "), [t, c]), B = se(() => {
    var q;
    return p !== "auto" && p ? p : typeof globalThis !== void 0 && globalThis.matchMedia && ((q = globalThis.matchMedia("(prefers-color-scheme: dark)")) != null && q.matches) ? "dark" : "light";
  }, [p]), N = ye((q) => v == null ? void 0 : v.displayException(q), [v]), z = function(q, V, te, le, Ee, Te, pe, je) {
    return ye(() => {
      var X;
      const H = q.length > 0 ? q[q.length - 1] : void 0;
      (H == null ? void 0 : H.status) === "active" && (le(q.slice(0, -1)), Ee([...V, H.uid]), Te([...te, ...H.items.map((me) => me.uid)]), (X = pe.current) == null || X.cancelSegmentStreams(H.uid)), je("typing");
    }, [q, V, te, le, Ee, Te, pe, je]);
  }(g, w, C, k, b, L, h, i), O = ye((q) => E(q), [E]), M = Zd({ aiChatProps: n, adapterToUse: I, conversationRef: h, initialSegment: u, newSegments: g, cancelledMessageIds: C, cancelledSegmentIds: w, prompt: R, composerOptions: o, showException: N, setChatSegments: k, setComposerStatus: i, setPrompt: E }), U = ((q, V, te, le, Ee, Te) => ye((pe, je, H) => {
    if (pe === "initial" && q) {
      const fe = [];
      for (const ct of q.items) {
        if (ct.uid === je) break;
        fe.push(ct);
      }
      const Be = { ...q, items: fe };
      return V(Be), le([]), Ee(H), void Te("submitting-edit");
    }
    const X = te.findIndex((fe) => fe.uid === pe), me = te.slice(0, X);
    le(me), Ee(H), Te("submitting-edit");
  }, [te, le, q, V, Ee, Te]))(u, l, g, k, E, i), Y = ye((q, V) => {
    var te;
    (te = n.events) != null && te.messageRendered && n.events.messageRendered({ uid: V });
  }, []), Q = ye((q) => {
    E(q.prompt), i("submitting-conversation-starter");
  }, [E, i]), J = ((q, V) => ye((te) => {
    q && te && (V.current = te.uid, q.handleNewChatSegmentAdded(te.uid, te.div));
  }, [q]))(y, f);
  ie(() => {
    A !== "submitting-conversation-starter" && A !== "submitting-external-message" && A !== "submitting-edit" || M();
  }, [A, M]), ie(() => l(r ? { uid: "initial", status: "complete", items: r.map((q, V) => {
    if (q.role === "assistant" || q.role === "user") return q.role === "user" ? typeof q.message != "string" ? void $e(`Invalid message type for item at index ${V} in initial conversation: When role is "user", message must be a string`) : { uid: yt(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "user", content: q.message } : { uid: yt(), time: /* @__PURE__ */ new Date(), status: "complete", participantRole: "assistant", content: q.message, serverResponse: q.serverResponse, dataTransferMode: "batch" };
    $e(`Invalid role for item at index ${V} in initial conversation: Role must be "assistant" or "user"`);
  }).filter((q) => q !== void 0) } : void 0), [r]), ie(() => {
    var q;
    u && ((q = d.current) == null || q.scrollTo({ behavior: "smooth", top: 5e4 }));
  }, [u]);
  const W = he(void 0);
  ie(() => {
    const q = n.api;
    W.current = q, typeof (q == null ? void 0 : q.__setHost) == "function" ? q.__setHost({ sendMessage: (V) => {
      E(V), i("submitting-external-message");
    }, resetConversation: () => {
      k([]), l(void 0);
    }, cancelLastMessageRequest: z }) : Cn(`API object passed was is not compatible with AiChat.
Only use API objects created by the useAiChatApi() hook.`);
  }, [n.api, z, E, i, k, l]), ie(() => () => {
    var q;
    typeof ((q = W.current) == null ? void 0 : q.__unsetHost) == "function" && (W.current.__unsetHost(), W.current = void 0);
  }, []), ((q) => {
    ie(() => {
      var te;
      const V = (te = q.events) == null ? void 0 : te.ready;
      V && V({ aiChatProps: xs(q) });
    }, []);
  })(n), ((q, V) => {
    var Ee;
    const te = he(), le = he();
    ie(() => {
      te.current = () => {
        const Te = [];
        return V.forEach((pe) => {
          pe.items && pe.items.length !== 0 && pe.items.forEach((je) => {
            je.status === "complete" && (je.participantRole !== "assistant" ? je.participantRole === "user" && Te.push({ role: "user", message: je.content }) : Te.push({ role: "assistant", message: je.content }));
          });
        }), Te;
      };
    }, [V]), ie(() => {
      var Te;
      le.current = (Te = q.events) == null ? void 0 : Te.preDestroy;
    }, [(Ee = q.events) == null ? void 0 : Ee.preDestroy]), ie(() => () => {
      var pe;
      const Te = le.current;
      Te && (Te({ aiChatProps: xs(q), conversationHistory: ((pe = te.current) == null ? void 0 : pe.call(te)) ?? [] }), te.current = void 0);
    }, []);
  })(n, D);
  const Z = se(() => Tn(zd), []), K = ((q) => {
    const V = se(() => q.children ? Array.isArray(q.children) ? q.children : [q.children] : [], [q.children]);
    return { Loader: se(() => V.length === 0 ? P.jsx(na, {}) : V.find((te) => te.type === ra.Loader) || P.jsx(na, {}), [V]), Greeting: se(() => {
      if (V.length !== 0) return V.find((te) => te.type === ra.Greeting);
    }, [V]) };
  })(n), ae = R.length > 0, ne = D.length === 0 ? "nlux-chatRoom-starting" : "nlux-chatRoom-active";
  return I ? P.jsx(T, { children: P.jsxs("div", { className: x, style: j, "data-color-scheme": B, children: [P.jsx("div", { className: "nlux-comp-exceptionBox", ref: m }), P.jsxs("div", { className: `nlux-chatRoom-container ${ne}`, children: [P.jsx("div", { className: "nlux-launchPad-container", children: P.jsx(el, { segments: D, onConversationStarterSelected: Q, conversationOptions: s, personaOptions: n.personaOptions, userDefinedGreeting: K.Greeting }) }), P.jsx("div", { className: "nlux-conversation-container", ref: d, children: P.jsx(Z, { ref: h, segments: D, conversationOptions: n.conversationOptions, personaOptions: n.personaOptions, messageOptions: n.messageOptions, onLastActiveSegmentChange: J, Loader: K.Loader, markdownContainersController: S, submitShortcutKey: (Se = n.composerOptions) == null ? void 0 : Se.submitShortcut, onPromptResubmit: U, onMarkdownStreamRendered: Y }) }), P.jsx("div", { className: "nlux-composer-container", children: P.jsx(Fd, { status: A, prompt: R, hasValidInput: ae, placeholder: (F = n.composerOptions) == null ? void 0 : F.placeholder, autoFocus: (Re = n.composerOptions) == null ? void 0 : Re.autoFocus, submitShortcut: (st = n.composerOptions) == null ? void 0 : st.submitShortcut, hideStopButton: (Ze = n.composerOptions) == null ? void 0 : Ze.hideStopButton, onChange: O, onSubmit: M, onCancel: z, Loader: K.Loader }) })] })] }) }) : (Cn("AiChat: No valid adapter provided. The component will not render."), P.jsx(P.Fragment, {}));
}, PG = () => {
  const n = he(null), e = he(/* @__PURE__ */ ((t = () => {
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
}, IG = ({ children: n }) => {
  const e = se(() => Math.random().toString(36).substring(7), []), t = js(Ss), r = Array.isArray(n) ? n.join("") : n;
  return P.jsx(ks, { markdownOptions: t.messageOptions, content: r, messageUid: e });
}, DG = function(n, e) {
  return se(() => ({ batchText: n }), e ?? [{}]);
}, LG = function(n, e) {
  return se(() => ({ streamText: n }), e ?? [{}]);
}, RG = function(n, e) {
  return { streamServerComponent: (t, r, s) => () => {
    const [o, a] = Ae("idle"), [c, p] = Ae(null);
    return ie(() => {
      a("loading"), n.then((h) => {
        if (typeof h.default != "function") {
          const d = "The module passed to useAsRscAdapter() as server component does not have a valid default export.";
          return $e(d), a("error"), void s.onError(new Error(d));
        }
        a("success"), p(() => Fc(async () => {
          let d, f;
          try {
            f = h.default({ message: t, extras: r }), d = await Promise.resolve(f);
          } catch {
            $e(`An error occurred while rendering the React Server Component (RSC).
Please ensure that no server error has occurred.`), s.onError(new Error("Error while rendering RSC."));
          }
          return s.onServerComponentReceived(), d !== void 0 && Sn(d) ? { default: () => P.jsx(P.Fragment, { children: d }) } : (s.onError(new Error("Unable to render RSC. The RSC adapter should return a valid React element.")), { default: () => P.jsx(P.Fragment, {}) });
        }));
      }).catch((h) => {
        $e(`The module passed to useAsRscAdapter() is not a valid ES module, or did not properly load! The first parameter passed to useAsRscAdapter() should be the result of a dynamic import() call [ without await or .then() ]. The module should also have a default export. Your bundler should be able to handle dynamic imports and ES modules.

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports`), a("error"), s.onError(h);
      });
    }, []), o === "idle" || o === "loading" ? null : o === "error" ? ($e("Error loading RSC"), P.jsx(P.Fragment, { children: "Error loading RSC" })) : P.jsx(Uc, { fallback: e || null, children: c && P.jsx(c, {}) });
  } };
}, OG = (n, e, t) => {
  const r = js(n.ref), [s] = Ae(() => {
    let a;
    do
      a = Math.random().toString(36).substring(2, 15);
    while (r.hasItem(a));
    return a;
  }), o = he();
  ie(() => (o.current = r.observeState(s, e, t), () => {
    var a;
    (a = o.current) == null || a.discard(), o.current = void 0;
  }), []), ie(() => {
    var a;
    (a = o.current) == null || a.setDescription(e);
  }, [e]), ie(() => {
    var a;
    (a = o.current) == null || a.setData(t);
  }, [t]);
}, jG = (n, e, t, r) => {
  const s = js(n.ref), [o] = Ae(() => {
    let c;
    do
      c = Math.random().toString(36).substring(2, 15);
    while (s.hasTask(c));
    return c;
  }), a = he();
  ie(() => (a.current = s.registerTask(o, e, t, r), () => {
    var c;
    (c = a.current) == null || c.discard(), a.current = void 0;
  }), []), ie(() => {
    var c;
    (c = a.current) == null || c.setDescription(e);
  }, [e]), ie(() => {
    var c;
    (c = a.current) == null || c.setCallback(t);
  }, [t]), ie(() => {
    var c;
    (c = a.current) == null || c.setParamDescriptions(r ?? []);
  }, [r]);
}, MG = (n) => {
  const e = Bo(), t = Fa(e);
  return { Provider: (r) => {
    const [s, o] = Ae(), [a, c] = Ae(), [p, h] = Ae();
    ie(() => {
      let f = !0;
      const m = Bo().withAdapter(n).withDataSyncOptions({ syncStrategy: "auto", contextSize: Ku["100k"] });
      return h(m), m.initialize(r.initialItems || {}).then((y) => {
        f && (y.success ? o(y.contextId) : c(new Error(y.error)));
      }), () => {
        f = !1, m.destroy();
      };
    }, []);
    const { children: d } = r;
    return a ? r.errorComponent ? P.jsx(r.errorComponent, { error: a.message }) : P.jsxs("div", { children: [P.jsx("h1", { children: "Error initializing AI context" }), P.jsx("p", { children: a.message })] }) : s && p ? P.jsx(t.Provider, { value: p, children: d }) : r.loadingComponent ? P.jsx(r.loadingComponent, {}) : null;
  }, ref: t };
}, BG = function(n, e) {
  return ie(n, function(t) {
    const r = he(t), s = he(0);
    return vn(t, r.current) || (r.current = t, s.current += 1), se(() => r.current, [s.current]);
  }(e));
};
var Li = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, sa = it.createContext && /* @__PURE__ */ it.createContext(Li), nl = ["attr", "size", "title"];
function rl(n, e) {
  if (n == null) return {};
  var t = sl(n, e), r, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    for (s = 0; s < o.length; s++)
      r = o[s], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function sl(n, e) {
  if (n == null) return {};
  var t = {};
  for (var r in n)
    if (Object.prototype.hasOwnProperty.call(n, r)) {
      if (e.indexOf(r) >= 0) continue;
      t[r] = n[r];
    }
  return t;
}
function fr() {
  return fr = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, fr.apply(this, arguments);
}
function oa(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function mr(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? oa(Object(t), !0).forEach(function(r) {
      ol(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : oa(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function ol(n, e, t) {
  return e = al(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function al(n) {
  var e = il(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function il(n, e) {
  if (typeof n != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function Ri(n) {
  return n && n.map((e, t) => /* @__PURE__ */ it.createElement(e.tag, mr({
    key: t
  }, e.attr), Ri(e.child)));
}
function cl(n) {
  return (e) => /* @__PURE__ */ it.createElement(ul, fr({
    attr: mr({}, n.attr)
  }, e), Ri(n.child));
}
function ul(n) {
  var e = (t) => {
    var {
      attr: r,
      size: s,
      title: o
    } = n, a = rl(n, nl), c = s || t.size || "1em", p;
    return t.className && (p = t.className), n.className && (p = (p ? p + " " : "") + n.className), /* @__PURE__ */ it.createElement("svg", fr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, a, {
      className: p,
      style: mr(mr({
        color: n.color || t.color
      }, t.style), n.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ it.createElement("title", null, o), n.children);
  };
  return sa !== void 0 ? /* @__PURE__ */ it.createElement(sa.Consumer, null, (t) => e(t)) : e(Li);
}
function dl(n) {
  return cl({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" }, child: [] }] })(n);
}
var ll = /* @__PURE__ */ ((n) => (n.Text = "Text", n.ImageUrl = "ImageUrl", n))(ll || {}), hl = /* @__PURE__ */ ((n) => (n.SystemMessage = "system", n.AIMessage = "ai", n.HumanMessage = "human", n))(hl || {}), pl = /* @__PURE__ */ ((n) => (n.Auto = "Auto", n.Low = "Low", n.High = "High", n))(pl || {});
async function fl(n) {
  const { files: e, message: t } = n;
  if (!e || !e.length)
    return t;
  {
    let r = await Promise.all(e.map(async (s) => {
      const o = await ml(s, n.resizeOptions);
      if (!o)
        throw new Error("resize failed");
      const a = await gl(o);
      if (!a)
        throw new Error("base64 failed");
      return [
        "ImageUrl",
        a,
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
const ml = async (n, e) => {
  const t = (e == null ? void 0 : e.maxSize) || 256, r = document.createElement("canvas"), s = r.getContext("2d");
  if (!s) throw new Error("ctx is not available");
  r.width = t, r.height = t;
  const o = await createImageBitmap(n), { width: a, height: c } = o, p = Math.max(t / a, t / c), h = (t - a * p) / 2, d = (t - c * p) / 2;
  return s.drawImage(o, 0, 0, a, c, h, d, a * p, c * p), new Promise((f) => {
    r.toBlob((m) => {
      f(m);
    });
  });
};
async function gl(n) {
  return new Promise((e, t) => {
    const r = new FileReader();
    r.onloadend = () => e(r.result), r.readAsDataURL(n);
  });
}
async function bl(n, e) {
  const t = n.getReader();
  let r;
  for (; !(r = await t.read()).done; )
    e(r.value);
}
function vl(n) {
  let e, t, r, s = !1;
  return function(a) {
    e === void 0 ? (e = a, t = 0, r = -1) : e = wl(e, a);
    const c = e.length;
    let p = 0;
    for (; t < c; ) {
      s && (e[t] === 10 && (p = ++t), s = !1);
      let h = -1;
      for (; t < c && h === -1; ++t)
        switch (e[t]) {
          case 58:
            r === -1 && (r = t - p);
            break;
          case 13:
            s = !0;
          case 10:
            h = t;
            break;
        }
      if (h === -1)
        break;
      n(e.subarray(p, h), r), p = t, r = -1;
    }
    p === c ? e = void 0 : p !== 0 && (e = e.subarray(p), t -= p);
  };
}
function yl(n, e, t) {
  let r = aa();
  const s = new TextDecoder();
  return function(a, c) {
    if (a.length === 0)
      t == null || t(r), r = aa();
    else if (c > 0) {
      const p = s.decode(a.subarray(0, c)), h = c + (a[c + 1] === 32 ? 2 : 1), d = s.decode(a.subarray(h));
      switch (p) {
        case "data":
          r.data = r.data ? r.data + (d || `
`) : d || `
`;
          break;
        case "event":
          r.event = d;
          break;
        case "id":
          n(r.id = d);
          break;
        case "retry":
          const f = parseInt(d, 10);
          isNaN(f) || e(r.retry = f);
          break;
      }
    }
  };
}
function wl(n, e) {
  const t = new Uint8Array(n.length + e.length);
  return t.set(n), t.set(e, n.length), t;
}
function aa() {
  return {
    data: "",
    event: "",
    id: "",
    retry: void 0
  };
}
var kl = function(n, e) {
  var t = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(n); s < r.length; s++)
      e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[s]) && (t[r[s]] = n[r[s]]);
  return t;
};
const _s = "text/event-stream", xl = 1e3, ia = "last-event-id";
function Sl(n, e) {
  var { signal: t, headers: r, onopen: s, onmessage: o, onclose: a, onerror: c, openWhenHidden: p, fetch: h } = e, d = kl(e, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"]);
  return new Promise((f, m) => {
    const y = Object.assign({}, r);
    y.accept || (y.accept = _s);
    let v;
    function S() {
      v.abort(), document.hidden || u();
    }
    p || document.addEventListener("visibilitychange", S);
    let T = xl, R = 0;
    function E() {
      document.removeEventListener("visibilitychange", S), window.clearTimeout(R), v.abort();
    }
    t == null || t.addEventListener("abort", () => {
      E(), f();
    });
    const A = h ?? window.fetch, i = s ?? _l;
    async function u() {
      var l;
      v = new AbortController();
      try {
        const g = await A(n, Object.assign(Object.assign({}, d), { headers: y, signal: v.signal }));
        await i(g), await bl(g.body, vl(yl((k) => {
          k ? y[ia] = k : delete y[ia];
        }, (k) => {
          T = k;
        }, o))), a == null || a(), E(), f();
      } catch (g) {
        if (!v.signal.aborted)
          try {
            const k = (l = c == null ? void 0 : c(g)) !== null && l !== void 0 ? l : T;
            window.clearTimeout(R), R = window.setTimeout(u, k);
          } catch (k) {
            E(), m(k);
          }
      }
    }
    u();
  });
}
function _l(n) {
  const e = n.headers.get("content-type");
  if (!(e != null && e.startsWith(_s)))
    throw new Error(`Expected content-type to be ${_s}, Actual: ${e}`);
}
const Oi = "https://api.dev.langdb.ai", ji = async (n) => {
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
class Vr extends Error {
}
const Cl = (n) => {
  const { files: e, fileResizeOptions: t } = n, s = `${n.serverUrl || Oi}/stream`, [o, a] = Ae(n.threadId), [c, p] = Ae(), { modelName: h, agentParams: d } = n;
  return {
    adapter: {
      streamText: async (m, y) => {
        try {
          const v = await ji(n), S = await fl({ files: e, message: m, resizeOptions: t }), T = {
            model_name: h,
            parameters: d || {},
            user_id: n.userId || "",
            thread_id: o,
            message: S
          };
          await Sl(s, {
            method: "POST",
            body: JSON.stringify(T),
            headers: v,
            credentials: "include",
            async onopen(R) {
              if (R.ok && R.headers.get("content-type") === "text/event-stream") {
                const E = R.headers.get("X-Thread-Id"), A = R.headers.get("X-Message-Id");
                if (p(A), a(E), n.responseCallback) {
                  const i = R == null ? void 0 : R.headers.get("x-trace-id");
                  n.responseCallback({
                    traceId: i,
                    modelName: h,
                    threadId: E,
                    messageId: A
                  });
                }
                if (!R.body)
                  throw new Vr("No body found");
                return;
              } else if (R.status >= 400 && R.status < 500 && R.status !== 429) {
                const E = await R.text();
                throw new Vr(E || `${R.status}: Failed to send message to the server`);
              } else
                return;
            },
            onmessage(R) {
              if (R.event)
                throw new Vr(R.data);
              y.next(R.data);
            },
            onclose() {
            },
            onerror(R) {
              throw R;
            }
          });
        } catch (v) {
          const S = new Error(v.toString());
          n.responseCallback && n.responseCallback({ error: S, modelName: h }), y.error(S);
        }
        y.complete();
      }
    },
    threadId: o,
    messageId: c
  };
};
var Cs = { exports: {} }, Kn = { exports: {} }, be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ca;
function Al() {
  if (ca) return be;
  ca = 1;
  var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, s = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, a = n ? Symbol.for("react.provider") : 60109, c = n ? Symbol.for("react.context") : 60110, p = n ? Symbol.for("react.async_mode") : 60111, h = n ? Symbol.for("react.concurrent_mode") : 60111, d = n ? Symbol.for("react.forward_ref") : 60112, f = n ? Symbol.for("react.suspense") : 60113, m = n ? Symbol.for("react.suspense_list") : 60120, y = n ? Symbol.for("react.memo") : 60115, v = n ? Symbol.for("react.lazy") : 60116, S = n ? Symbol.for("react.block") : 60121, T = n ? Symbol.for("react.fundamental") : 60117, R = n ? Symbol.for("react.responder") : 60118, E = n ? Symbol.for("react.scope") : 60119;
  function A(u) {
    if (typeof u == "object" && u !== null) {
      var l = u.$$typeof;
      switch (l) {
        case e:
          switch (u = u.type, u) {
            case p:
            case h:
            case r:
            case o:
            case s:
            case f:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case c:
                case d:
                case v:
                case y:
                case a:
                  return u;
                default:
                  return l;
              }
          }
        case t:
          return l;
      }
    }
  }
  function i(u) {
    return A(u) === h;
  }
  return be.AsyncMode = p, be.ConcurrentMode = h, be.ContextConsumer = c, be.ContextProvider = a, be.Element = e, be.ForwardRef = d, be.Fragment = r, be.Lazy = v, be.Memo = y, be.Portal = t, be.Profiler = o, be.StrictMode = s, be.Suspense = f, be.isAsyncMode = function(u) {
    return i(u) || A(u) === p;
  }, be.isConcurrentMode = i, be.isContextConsumer = function(u) {
    return A(u) === c;
  }, be.isContextProvider = function(u) {
    return A(u) === a;
  }, be.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, be.isForwardRef = function(u) {
    return A(u) === d;
  }, be.isFragment = function(u) {
    return A(u) === r;
  }, be.isLazy = function(u) {
    return A(u) === v;
  }, be.isMemo = function(u) {
    return A(u) === y;
  }, be.isPortal = function(u) {
    return A(u) === t;
  }, be.isProfiler = function(u) {
    return A(u) === o;
  }, be.isStrictMode = function(u) {
    return A(u) === s;
  }, be.isSuspense = function(u) {
    return A(u) === f;
  }, be.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === h || u === o || u === s || u === f || u === m || typeof u == "object" && u !== null && (u.$$typeof === v || u.$$typeof === y || u.$$typeof === a || u.$$typeof === c || u.$$typeof === d || u.$$typeof === T || u.$$typeof === R || u.$$typeof === E || u.$$typeof === S);
  }, be.typeOf = A, be;
}
var ve = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ua;
function El() {
  return ua || (ua = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, s = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, a = n ? Symbol.for("react.provider") : 60109, c = n ? Symbol.for("react.context") : 60110, p = n ? Symbol.for("react.async_mode") : 60111, h = n ? Symbol.for("react.concurrent_mode") : 60111, d = n ? Symbol.for("react.forward_ref") : 60112, f = n ? Symbol.for("react.suspense") : 60113, m = n ? Symbol.for("react.suspense_list") : 60120, y = n ? Symbol.for("react.memo") : 60115, v = n ? Symbol.for("react.lazy") : 60116, S = n ? Symbol.for("react.block") : 60121, T = n ? Symbol.for("react.fundamental") : 60117, R = n ? Symbol.for("react.responder") : 60118, E = n ? Symbol.for("react.scope") : 60119;
    function A(F) {
      return typeof F == "string" || typeof F == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      F === r || F === h || F === o || F === s || F === f || F === m || typeof F == "object" && F !== null && (F.$$typeof === v || F.$$typeof === y || F.$$typeof === a || F.$$typeof === c || F.$$typeof === d || F.$$typeof === T || F.$$typeof === R || F.$$typeof === E || F.$$typeof === S);
    }
    function i(F) {
      if (typeof F == "object" && F !== null) {
        var Re = F.$$typeof;
        switch (Re) {
          case e:
            var st = F.type;
            switch (st) {
              case p:
              case h:
              case r:
              case o:
              case s:
              case f:
                return st;
              default:
                var Ze = st && st.$$typeof;
                switch (Ze) {
                  case c:
                  case d:
                  case v:
                  case y:
                  case a:
                    return Ze;
                  default:
                    return Re;
                }
            }
          case t:
            return Re;
        }
      }
    }
    var u = p, l = h, g = c, k = a, w = e, b = d, C = r, L = v, D = y, I = t, j = o, x = s, B = f, N = !1;
    function z(F) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(F) || i(F) === p;
    }
    function O(F) {
      return i(F) === h;
    }
    function M(F) {
      return i(F) === c;
    }
    function U(F) {
      return i(F) === a;
    }
    function Y(F) {
      return typeof F == "object" && F !== null && F.$$typeof === e;
    }
    function Q(F) {
      return i(F) === d;
    }
    function J(F) {
      return i(F) === r;
    }
    function W(F) {
      return i(F) === v;
    }
    function Z(F) {
      return i(F) === y;
    }
    function K(F) {
      return i(F) === t;
    }
    function ae(F) {
      return i(F) === o;
    }
    function ne(F) {
      return i(F) === s;
    }
    function Se(F) {
      return i(F) === f;
    }
    ve.AsyncMode = u, ve.ConcurrentMode = l, ve.ContextConsumer = g, ve.ContextProvider = k, ve.Element = w, ve.ForwardRef = b, ve.Fragment = C, ve.Lazy = L, ve.Memo = D, ve.Portal = I, ve.Profiler = j, ve.StrictMode = x, ve.Suspense = B, ve.isAsyncMode = z, ve.isConcurrentMode = O, ve.isContextConsumer = M, ve.isContextProvider = U, ve.isElement = Y, ve.isForwardRef = Q, ve.isFragment = J, ve.isLazy = W, ve.isMemo = Z, ve.isPortal = K, ve.isProfiler = ae, ve.isStrictMode = ne, ve.isSuspense = Se, ve.isValidElementType = A, ve.typeOf = i;
  }()), ve;
}
var da;
function Mi() {
  return da || (da = 1, process.env.NODE_ENV === "production" ? Kn.exports = Al() : Kn.exports = El()), Kn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Gr, la;
function Tl() {
  if (la) return Gr;
  la = 1;
  var n = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function r(o) {
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
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var p = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (p.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        h[d] = d;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Gr = s() ? Object.assign : function(o, a) {
    for (var c, p = r(o), h, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var f in c)
        e.call(c, f) && (p[f] = c[f]);
      if (n) {
        h = n(c);
        for (var m = 0; m < h.length; m++)
          t.call(c, h[m]) && (p[h[m]] = c[h[m]]);
      }
    }
    return p;
  }, Gr;
}
var Wr, ha;
function Zs() {
  if (ha) return Wr;
  ha = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Wr = n, Wr;
}
var Yr, pa;
function Bi() {
  return pa || (pa = 1, Yr = Function.call.bind(Object.prototype.hasOwnProperty)), Yr;
}
var Qr, fa;
function Pl() {
  if (fa) return Qr;
  fa = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Zs(), t = {}, r = Bi();
    n = function(o) {
      var a = "Warning: " + o;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function s(o, a, c, p, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in o)
        if (r(o, d)) {
          var f;
          try {
            if (typeof o[d] != "function") {
              var m = Error(
                (p || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            f = o[d](a, d, p, c, null, e);
          } catch (v) {
            f = v;
          }
          if (f && !(f instanceof Error) && n(
            (p || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in t)) {
            t[f.message] = !0;
            var y = h ? h() : "";
            n(
              "Failed " + c + " type: " + f.message + (y ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Qr = s, Qr;
}
var Zr, ma;
function Il() {
  if (ma) return Zr;
  ma = 1;
  var n = Mi(), e = Tl(), t = Zs(), r = Bi(), s = Pl(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(c) {
    var p = "Warning: " + c;
    typeof console < "u" && console.error(p);
    try {
      throw new Error(p);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Zr = function(c, p) {
    var h = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(O) {
      var M = O && (h && O[h] || O[d]);
      if (typeof M == "function")
        return M;
    }
    var m = "<<anonymous>>", y = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: E(),
      arrayOf: A,
      element: i(),
      elementType: u(),
      instanceOf: l,
      node: b(),
      objectOf: k,
      oneOf: g,
      oneOfType: w,
      shape: L,
      exact: D
    };
    function v(O, M) {
      return O === M ? O !== 0 || 1 / O === 1 / M : O !== O && M !== M;
    }
    function S(O, M) {
      this.message = O, this.data = M && typeof M == "object" ? M : {}, this.stack = "";
    }
    S.prototype = Error.prototype;
    function T(O) {
      if (process.env.NODE_ENV !== "production")
        var M = {}, U = 0;
      function Y(J, W, Z, K, ae, ne, Se) {
        if (K = K || m, ne = ne || Z, Se !== t) {
          if (p) {
            var F = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw F.name = "Invariant Violation", F;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Re = K + ":" + Z;
            !M[Re] && // Avoid spamming the console because they are often not actionable except for lib authors
            U < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + ne + "` prop on `" + K + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), M[Re] = !0, U++);
          }
        }
        return W[Z] == null ? J ? W[Z] === null ? new S("The " + ae + " `" + ne + "` is marked as required " + ("in `" + K + "`, but its value is `null`.")) : new S("The " + ae + " `" + ne + "` is marked as required in " + ("`" + K + "`, but its value is `undefined`.")) : null : O(W, Z, K, ae, ne);
      }
      var Q = Y.bind(null, !1);
      return Q.isRequired = Y.bind(null, !0), Q;
    }
    function R(O) {
      function M(U, Y, Q, J, W, Z) {
        var K = U[Y], ae = x(K);
        if (ae !== O) {
          var ne = B(K);
          return new S(
            "Invalid " + J + " `" + W + "` of type " + ("`" + ne + "` supplied to `" + Q + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return T(M);
    }
    function E() {
      return T(a);
    }
    function A(O) {
      function M(U, Y, Q, J, W) {
        if (typeof O != "function")
          return new S("Property `" + W + "` of component `" + Q + "` has invalid PropType notation inside arrayOf.");
        var Z = U[Y];
        if (!Array.isArray(Z)) {
          var K = x(Z);
          return new S("Invalid " + J + " `" + W + "` of type " + ("`" + K + "` supplied to `" + Q + "`, expected an array."));
        }
        for (var ae = 0; ae < Z.length; ae++) {
          var ne = O(Z, ae, Q, J, W + "[" + ae + "]", t);
          if (ne instanceof Error)
            return ne;
        }
        return null;
      }
      return T(M);
    }
    function i() {
      function O(M, U, Y, Q, J) {
        var W = M[U];
        if (!c(W)) {
          var Z = x(W);
          return new S("Invalid " + Q + " `" + J + "` of type " + ("`" + Z + "` supplied to `" + Y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(O);
    }
    function u() {
      function O(M, U, Y, Q, J) {
        var W = M[U];
        if (!n.isValidElementType(W)) {
          var Z = x(W);
          return new S("Invalid " + Q + " `" + J + "` of type " + ("`" + Z + "` supplied to `" + Y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(O);
    }
    function l(O) {
      function M(U, Y, Q, J, W) {
        if (!(U[Y] instanceof O)) {
          var Z = O.name || m, K = z(U[Y]);
          return new S("Invalid " + J + " `" + W + "` of type " + ("`" + K + "` supplied to `" + Q + "`, expected ") + ("instance of `" + Z + "`."));
        }
        return null;
      }
      return T(M);
    }
    function g(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function M(U, Y, Q, J, W) {
        for (var Z = U[Y], K = 0; K < O.length; K++)
          if (v(Z, O[K]))
            return null;
        var ae = JSON.stringify(O, function(Se, F) {
          var Re = B(F);
          return Re === "symbol" ? String(F) : F;
        });
        return new S("Invalid " + J + " `" + W + "` of value `" + String(Z) + "` " + ("supplied to `" + Q + "`, expected one of " + ae + "."));
      }
      return T(M);
    }
    function k(O) {
      function M(U, Y, Q, J, W) {
        if (typeof O != "function")
          return new S("Property `" + W + "` of component `" + Q + "` has invalid PropType notation inside objectOf.");
        var Z = U[Y], K = x(Z);
        if (K !== "object")
          return new S("Invalid " + J + " `" + W + "` of type " + ("`" + K + "` supplied to `" + Q + "`, expected an object."));
        for (var ae in Z)
          if (r(Z, ae)) {
            var ne = O(Z, ae, Q, J, W + "." + ae, t);
            if (ne instanceof Error)
              return ne;
          }
        return null;
      }
      return T(M);
    }
    function w(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var M = 0; M < O.length; M++) {
        var U = O[M];
        if (typeof U != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + N(U) + " at index " + M + "."
          ), a;
      }
      function Y(Q, J, W, Z, K) {
        for (var ae = [], ne = 0; ne < O.length; ne++) {
          var Se = O[ne], F = Se(Q, J, W, Z, K, t);
          if (F == null)
            return null;
          F.data && r(F.data, "expectedType") && ae.push(F.data.expectedType);
        }
        var Re = ae.length > 0 ? ", expected one of type [" + ae.join(", ") + "]" : "";
        return new S("Invalid " + Z + " `" + K + "` supplied to " + ("`" + W + "`" + Re + "."));
      }
      return T(Y);
    }
    function b() {
      function O(M, U, Y, Q, J) {
        return I(M[U]) ? null : new S("Invalid " + Q + " `" + J + "` supplied to " + ("`" + Y + "`, expected a ReactNode."));
      }
      return T(O);
    }
    function C(O, M, U, Y, Q) {
      return new S(
        (O || "React class") + ": " + M + " type `" + U + "." + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Q + "`."
      );
    }
    function L(O) {
      function M(U, Y, Q, J, W) {
        var Z = U[Y], K = x(Z);
        if (K !== "object")
          return new S("Invalid " + J + " `" + W + "` of type `" + K + "` " + ("supplied to `" + Q + "`, expected `object`."));
        for (var ae in O) {
          var ne = O[ae];
          if (typeof ne != "function")
            return C(Q, J, W, ae, B(ne));
          var Se = ne(Z, ae, Q, J, W + "." + ae, t);
          if (Se)
            return Se;
        }
        return null;
      }
      return T(M);
    }
    function D(O) {
      function M(U, Y, Q, J, W) {
        var Z = U[Y], K = x(Z);
        if (K !== "object")
          return new S("Invalid " + J + " `" + W + "` of type `" + K + "` " + ("supplied to `" + Q + "`, expected `object`."));
        var ae = e({}, U[Y], O);
        for (var ne in ae) {
          var Se = O[ne];
          if (r(O, ne) && typeof Se != "function")
            return C(Q, J, W, ne, B(Se));
          if (!Se)
            return new S(
              "Invalid " + J + " `" + W + "` key `" + ne + "` supplied to `" + Q + "`.\nBad object: " + JSON.stringify(U[Y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var F = Se(Z, ne, Q, J, W + "." + ne, t);
          if (F)
            return F;
        }
        return null;
      }
      return T(M);
    }
    function I(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(I);
          if (O === null || c(O))
            return !0;
          var M = f(O);
          if (M) {
            var U = M.call(O), Y;
            if (M !== O.entries) {
              for (; !(Y = U.next()).done; )
                if (!I(Y.value))
                  return !1;
            } else
              for (; !(Y = U.next()).done; ) {
                var Q = Y.value;
                if (Q && !I(Q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function j(O, M) {
      return O === "symbol" ? !0 : M ? M["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && M instanceof Symbol : !1;
    }
    function x(O) {
      var M = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : j(M, O) ? "symbol" : M;
    }
    function B(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var M = x(O);
      if (M === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return M;
    }
    function N(O) {
      var M = B(O);
      switch (M) {
        case "array":
        case "object":
          return "an " + M;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + M;
        default:
          return M;
      }
    }
    function z(O) {
      return !O.constructor || !O.constructor.name ? m : O.constructor.name;
    }
    return y.checkPropTypes = s, y.resetWarningCache = s.resetWarningCache, y.PropTypes = y, y;
  }, Zr;
}
var Xr, ga;
function Dl() {
  if (ga) return Xr;
  ga = 1;
  var n = Zs();
  function e() {
  }
  function t() {
  }
  return t.resetWarningCache = e, Xr = function() {
    function r(a, c, p, h, d, f) {
      if (f !== n) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    r.isRequired = r;
    function s() {
      return r;
    }
    var o = {
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
    return o.PropTypes = o, o;
  }, Xr;
}
if (process.env.NODE_ENV !== "production") {
  var Ll = Mi(), Rl = !0;
  Cs.exports = Il()(Ll.isElement, Rl);
} else
  Cs.exports = Dl()();
var Ol = Cs.exports;
const Ce = /* @__PURE__ */ Yc(Ol);
function Zt(n, e, t, r) {
  function s(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function c(d) {
      try {
        h(r.next(d));
      } catch (f) {
        a(f);
      }
    }
    function p(d) {
      try {
        h(r.throw(d));
      } catch (f) {
        a(f);
      }
    }
    function h(d) {
      d.done ? o(d.value) : s(d.value).then(c, p);
    }
    h((r = r.apply(n, e || [])).next());
  });
}
function Xt(n, e) {
  var t = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, s, o, a;
  return a = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function c(h) {
    return function(d) {
      return p([h, d]);
    };
  }
  function p(h) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, h[0] && (t = 0)), t; ) try {
      if (r = 1, s && (o = h[0] & 2 ? s.return : h[0] ? s.throw || ((o = s.return) && o.call(s), 0) : s.next) && !(o = o.call(s, h[1])).done) return o;
      switch (s = 0, o && (h = [h[0] & 2, o.value]), h[0]) {
        case 0:
        case 1:
          o = h;
          break;
        case 4:
          return t.label++, { value: h[1], done: !1 };
        case 5:
          t.label++, s = h[1], h = [0];
          continue;
        case 7:
          h = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (h[0] === 6 || h[0] === 2)) {
            t = 0;
            continue;
          }
          if (h[0] === 3 && (!o || h[1] > o[0] && h[1] < o[3])) {
            t.label = h[1];
            break;
          }
          if (h[0] === 6 && t.label < o[1]) {
            t.label = o[1], o = h;
            break;
          }
          if (o && t.label < o[2]) {
            t.label = o[2], t.ops.push(h);
            break;
          }
          o[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      h = e.call(n, t);
    } catch (d) {
      h = [6, d], s = 0;
    } finally {
      r = o = 0;
    }
    if (h[0] & 5) throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function ba(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var r = t.call(n), s, o = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = r.next()).done; ) o.push(s.value);
  } catch (c) {
    a = { error: c };
  } finally {
    try {
      s && !s.done && (t = r.return) && t.call(r);
    } finally {
      if (a) throw a.error;
    }
  }
  return o;
}
function va(n, e, t) {
  if (t || arguments.length === 2) for (var r = 0, s = e.length, o; r < s; r++)
    (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
  return n.concat(o || Array.prototype.slice.call(e));
}
var jl = /* @__PURE__ */ new Map([
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
function On(n, e) {
  var t = Ml(n);
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
function Ml(n) {
  var e = n.name, t = e && e.lastIndexOf(".") !== -1;
  if (t && !n.type) {
    var r = e.split(".").pop().toLowerCase(), s = jl.get(r);
    s && Object.defineProperty(n, "type", {
      value: s,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return n;
}
var Bl = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function ql(n) {
  return Zt(this, void 0, void 0, function() {
    return Xt(this, function(e) {
      return gr(n) && zl(n.dataTransfer) ? [2, Fl(n.dataTransfer, n.type)] : Nl(n) ? [2, $l(n)] : Array.isArray(n) && n.every(function(t) {
        return "getFile" in t && typeof t.getFile == "function";
      }) ? [2, Hl(n)] : [2, []];
    });
  });
}
function zl(n) {
  return gr(n);
}
function Nl(n) {
  return gr(n) && gr(n.target);
}
function gr(n) {
  return typeof n == "object" && n !== null;
}
function $l(n) {
  return As(n.target.files).map(function(e) {
    return On(e);
  });
}
function Hl(n) {
  return Zt(this, void 0, void 0, function() {
    var e;
    return Xt(this, function(t) {
      switch (t.label) {
        case 0:
          return [4, Promise.all(n.map(function(r) {
            return r.getFile();
          }))];
        case 1:
          return e = t.sent(), [2, e.map(function(r) {
            return On(r);
          })];
      }
    });
  });
}
function Fl(n, e) {
  return Zt(this, void 0, void 0, function() {
    var t, r;
    return Xt(this, function(s) {
      switch (s.label) {
        case 0:
          return n.items ? (t = As(n.items).filter(function(o) {
            return o.kind === "file";
          }), e !== "drop" ? [2, t] : [4, Promise.all(t.map(Ul))]) : [3, 2];
        case 1:
          return r = s.sent(), [2, ya(qi(r))];
        case 2:
          return [2, ya(As(n.files).map(function(o) {
            return On(o);
          }))];
      }
    });
  });
}
function ya(n) {
  return n.filter(function(e) {
    return Bl.indexOf(e.name) === -1;
  });
}
function As(n) {
  if (n === null)
    return [];
  for (var e = [], t = 0; t < n.length; t++) {
    var r = n[t];
    e.push(r);
  }
  return e;
}
function Ul(n) {
  if (typeof n.webkitGetAsEntry != "function")
    return wa(n);
  var e = n.webkitGetAsEntry();
  return e && e.isDirectory ? zi(e) : wa(n);
}
function qi(n) {
  return n.reduce(function(e, t) {
    return va(va([], ba(e), !1), ba(Array.isArray(t) ? qi(t) : [t]), !1);
  }, []);
}
function wa(n) {
  var e = n.getAsFile();
  if (!e)
    return Promise.reject("".concat(n, " is not a File"));
  var t = On(e);
  return Promise.resolve(t);
}
function Vl(n) {
  return Zt(this, void 0, void 0, function() {
    return Xt(this, function(e) {
      return [2, n.isDirectory ? zi(n) : Gl(n)];
    });
  });
}
function zi(n) {
  var e = n.createReader();
  return new Promise(function(t, r) {
    var s = [];
    function o() {
      var a = this;
      e.readEntries(function(c) {
        return Zt(a, void 0, void 0, function() {
          var p, h, d;
          return Xt(this, function(f) {
            switch (f.label) {
              case 0:
                if (c.length) return [3, 5];
                f.label = 1;
              case 1:
                return f.trys.push([1, 3, , 4]), [4, Promise.all(s)];
              case 2:
                return p = f.sent(), t(p), [3, 4];
              case 3:
                return h = f.sent(), r(h), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                d = Promise.all(c.map(Vl)), s.push(d), o(), f.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(c) {
        r(c);
      });
    }
    o();
  });
}
function Gl(n) {
  return Zt(this, void 0, void 0, function() {
    return Xt(this, function(e) {
      return [2, new Promise(function(t, r) {
        n.file(function(s) {
          var o = On(s, n.fullPath);
          t(o);
        }, function(s) {
          r(s);
        });
      })];
    });
  });
}
var Wl = function(n, e) {
  if (n && e) {
    var t = Array.isArray(e) ? e : e.split(","), r = n.name || "", s = (n.type || "").toLowerCase(), o = s.replace(/\/.*$/, "");
    return t.some(function(a) {
      var c = a.trim().toLowerCase();
      return c.charAt(0) === "." ? r.toLowerCase().endsWith(c) : c.endsWith("/*") ? o === c.replace(/\/.*$/, "") : s === c;
    });
  }
  return !0;
};
function ka(n) {
  return Zl(n) || Ql(n) || $i(n) || Yl();
}
function Yl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ql(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Zl(n) {
  if (Array.isArray(n)) return Es(n);
}
function xa(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Sa(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? xa(Object(t), !0).forEach(function(r) {
      Ni(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : xa(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Ni(n, e, t) {
  return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function An(n, e) {
  return Jl(n) || Kl(n, e) || $i(n, e) || Xl();
}
function Xl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $i(n, e) {
  if (n) {
    if (typeof n == "string") return Es(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set") return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Es(n, e);
  }
}
function Es(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function Kl(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var r = [], s = !0, o = !1, a, c;
    try {
      for (t = t.call(n); !(s = (a = t.next()).done) && (r.push(a.value), !(e && r.length === e)); s = !0)
        ;
    } catch (p) {
      o = !0, c = p;
    } finally {
      try {
        !s && t.return != null && t.return();
      } finally {
        if (o) throw c;
      }
    }
    return r;
  }
}
function Jl(n) {
  if (Array.isArray(n)) return n;
}
var eh = "file-invalid-type", th = "file-too-large", nh = "file-too-small", rh = "too-many-files", sh = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: eh,
    message: "File type must be ".concat(t)
  };
}, _a = function(e) {
  return {
    code: th,
    message: "File is larger than ".concat(e, " ").concat(e === 1 ? "byte" : "bytes")
  };
}, Ca = function(e) {
  return {
    code: nh,
    message: "File is smaller than ".concat(e, " ").concat(e === 1 ? "byte" : "bytes")
  };
}, oh = {
  code: rh,
  message: "Too many files"
};
function Hi(n, e) {
  var t = n.type === "application/x-moz-file" || Wl(n, e);
  return [t, t ? null : sh(e)];
}
function Fi(n, e, t) {
  if (Rt(n.size))
    if (Rt(e) && Rt(t)) {
      if (n.size > t) return [!1, _a(t)];
      if (n.size < e) return [!1, Ca(e)];
    } else {
      if (Rt(e) && n.size < e) return [!1, Ca(e)];
      if (Rt(t) && n.size > t) return [!1, _a(t)];
    }
  return [!0, null];
}
function Rt(n) {
  return n != null;
}
function ah(n) {
  var e = n.files, t = n.accept, r = n.minSize, s = n.maxSize, o = n.multiple, a = n.maxFiles, c = n.validator;
  return !o && e.length > 1 || o && a >= 1 && e.length > a ? !1 : e.every(function(p) {
    var h = Hi(p, t), d = An(h, 1), f = d[0], m = Fi(p, r, s), y = An(m, 1), v = y[0], S = c ? c(p) : null;
    return f && v && !S;
  });
}
function br(n) {
  return typeof n.isPropagationStopped == "function" ? n.isPropagationStopped() : typeof n.cancelBubble < "u" ? n.cancelBubble : !1;
}
function Jn(n) {
  return n.dataTransfer ? Array.prototype.some.call(n.dataTransfer.types, function(e) {
    return e === "Files" || e === "application/x-moz-file";
  }) : !!n.target && !!n.target.files;
}
function Aa(n) {
  n.preventDefault();
}
function ih(n) {
  return n.indexOf("MSIE") !== -1 || n.indexOf("Trident/") !== -1;
}
function ch(n) {
  return n.indexOf("Edge/") !== -1;
}
function uh() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return ih(n) || ch(n);
}
function ft() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return function(r) {
    for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++)
      o[a - 1] = arguments[a];
    return e.some(function(c) {
      return !br(r) && c && c.apply(void 0, [r].concat(o)), br(r);
    });
  };
}
function dh() {
  return "showOpenFilePicker" in window;
}
function lh(n) {
  if (Rt(n)) {
    var e = Object.entries(n).filter(function(t) {
      var r = An(t, 2), s = r[0], o = r[1], a = !0;
      return Ui(s) || (console.warn('Skipped "'.concat(s, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = !1), (!Array.isArray(o) || !o.every(Vi)) && (console.warn('Skipped "'.concat(s, '" because an invalid file extension was provided.')), a = !1), a;
    }).reduce(function(t, r) {
      var s = An(r, 2), o = s[0], a = s[1];
      return Sa(Sa({}, t), {}, Ni({}, o, a));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: e
    }];
  }
  return n;
}
function hh(n) {
  if (Rt(n))
    return Object.entries(n).reduce(function(e, t) {
      var r = An(t, 2), s = r[0], o = r[1];
      return [].concat(ka(e), [s], ka(o));
    }, []).filter(function(e) {
      return Ui(e) || Vi(e);
    }).join(",");
}
function ph(n) {
  return n instanceof DOMException && (n.name === "AbortError" || n.code === n.ABORT_ERR);
}
function fh(n) {
  return n instanceof DOMException && (n.name === "SecurityError" || n.code === n.SECURITY_ERR);
}
function Ui(n) {
  return n === "audio/*" || n === "video/*" || n === "image/*" || n === "text/*" || /\w+\/[-+.\w]+/g.test(n);
}
function Vi(n) {
  return /^.*\.[\w]+$/.test(n);
}
var mh = ["children"], gh = ["open"], bh = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], vh = ["refKey", "onChange", "onClick"];
function yh(n) {
  return xh(n) || kh(n) || Gi(n) || wh();
}
function wh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kh(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function xh(n) {
  if (Array.isArray(n)) return Ts(n);
}
function Kr(n, e) {
  return Ch(n) || _h(n, e) || Gi(n, e) || Sh();
}
function Sh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gi(n, e) {
  if (n) {
    if (typeof n == "string") return Ts(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set") return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ts(n, e);
  }
}
function Ts(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function _h(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var r = [], s = !0, o = !1, a, c;
    try {
      for (t = t.call(n); !(s = (a = t.next()).done) && (r.push(a.value), !(e && r.length === e)); s = !0)
        ;
    } catch (p) {
      o = !0, c = p;
    } finally {
      try {
        !s && t.return != null && t.return();
      } finally {
        if (o) throw c;
      }
    }
    return r;
  }
}
function Ch(n) {
  if (Array.isArray(n)) return n;
}
function Ea(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function De(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ea(Object(t), !0).forEach(function(r) {
      Ps(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Ea(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Ps(n, e, t) {
  return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function vr(n, e) {
  if (n == null) return {};
  var t = Ah(n, e), r, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    for (s = 0; s < o.length; s++)
      r = o[s], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function Ah(n, e) {
  if (n == null) return {};
  var t = {}, r = Object.keys(n), s, o;
  for (o = 0; o < r.length; o++)
    s = r[o], !(e.indexOf(s) >= 0) && (t[s] = n[s]);
  return t;
}
var Xs = /* @__PURE__ */ Tn(function(n, e) {
  var t = n.children, r = vr(n, mh), s = Yi(r), o = s.open, a = vr(s, gh);
  return Pn(e, function() {
    return {
      open: o
    };
  }, [o]), /* @__PURE__ */ it.createElement(Wc, null, t(De(De({}, a), {}, {
    open: o
  })));
});
Xs.displayName = "Dropzone";
var Wi = {
  disabled: !1,
  getFilesFromEvent: ql,
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
Xs.defaultProps = Wi;
Xs.propTypes = {
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
  children: Ce.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: Ce.objectOf(Ce.arrayOf(Ce.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: Ce.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: Ce.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: Ce.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: Ce.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: Ce.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: Ce.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: Ce.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: Ce.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: Ce.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: Ce.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: Ce.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: Ce.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: Ce.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: Ce.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: Ce.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: Ce.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: Ce.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: Ce.func,
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
  onDrop: Ce.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: Ce.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: Ce.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: Ce.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: Ce.func
};
var Is = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function Yi() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = De(De({}, Wi), n), t = e.accept, r = e.disabled, s = e.getFilesFromEvent, o = e.maxSize, a = e.minSize, c = e.multiple, p = e.maxFiles, h = e.onDragEnter, d = e.onDragLeave, f = e.onDragOver, m = e.onDrop, y = e.onDropAccepted, v = e.onDropRejected, S = e.onFileDialogCancel, T = e.onFileDialogOpen, R = e.useFsAccessApi, E = e.autoFocus, A = e.preventDropOnDocument, i = e.noClick, u = e.noKeyboard, l = e.noDrag, g = e.noDragEventsBubbling, k = e.onError, w = e.validator, b = se(function() {
    return hh(t);
  }, [t]), C = se(function() {
    return lh(t);
  }, [t]), L = se(function() {
    return typeof T == "function" ? T : Ta;
  }, [T]), D = se(function() {
    return typeof S == "function" ? S : Ta;
  }, [S]), I = he(null), j = he(null), x = Gc(Eh, Is), B = Kr(x, 2), N = B[0], z = B[1], O = N.isFocused, M = N.isFileDialogActive, U = he(typeof window < "u" && window.isSecureContext && R && dh()), Y = function() {
    !U.current && M && setTimeout(function() {
      if (j.current) {
        var X = j.current.files;
        X.length || (z({
          type: "closeDialog"
        }), D());
      }
    }, 300);
  };
  ie(function() {
    return window.addEventListener("focus", Y, !1), function() {
      window.removeEventListener("focus", Y, !1);
    };
  }, [j, M, D, U]);
  var Q = he([]), J = function(X) {
    I.current && I.current.contains(X.target) || (X.preventDefault(), Q.current = []);
  };
  ie(function() {
    return A && (document.addEventListener("dragover", Aa, !1), document.addEventListener("drop", J, !1)), function() {
      A && (document.removeEventListener("dragover", Aa), document.removeEventListener("drop", J));
    };
  }, [I, A]), ie(function() {
    return !r && E && I.current && I.current.focus(), function() {
    };
  }, [I, E, r]);
  var W = ye(function(H) {
    k ? k(H) : console.error(H);
  }, [k]), Z = ye(function(H) {
    H.preventDefault(), H.persist(), Ee(H), Q.current = [].concat(yh(Q.current), [H.target]), Jn(H) && Promise.resolve(s(H)).then(function(X) {
      if (!(br(H) && !g)) {
        var me = X.length, fe = me > 0 && ah({
          files: X,
          accept: b,
          minSize: a,
          maxSize: o,
          multiple: c,
          maxFiles: p,
          validator: w
        }), Be = me > 0 && !fe;
        z({
          isDragAccept: fe,
          isDragReject: Be,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), h && h(H);
      }
    }).catch(function(X) {
      return W(X);
    });
  }, [s, h, W, g, b, a, o, c, p, w]), K = ye(function(H) {
    H.preventDefault(), H.persist(), Ee(H);
    var X = Jn(H);
    if (X && H.dataTransfer)
      try {
        H.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return X && f && f(H), !1;
  }, [f, g]), ae = ye(function(H) {
    H.preventDefault(), H.persist(), Ee(H);
    var X = Q.current.filter(function(fe) {
      return I.current && I.current.contains(fe);
    }), me = X.indexOf(H.target);
    me !== -1 && X.splice(me, 1), Q.current = X, !(X.length > 0) && (z({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), Jn(H) && d && d(H));
  }, [I, d, g]), ne = ye(function(H, X) {
    var me = [], fe = [];
    H.forEach(function(Be) {
      var ct = Hi(Be, b), bt = Kr(ct, 2), At = bt[0], Jt = bt[1], en = Fi(Be, a, o), Nt = Kr(en, 2), tn = Nt[0], nn = Nt[1], rn = w ? w(Be) : null;
      if (At && tn && !rn)
        me.push(Be);
      else {
        var sn = [Jt, nn];
        rn && (sn = sn.concat(rn)), fe.push({
          file: Be,
          errors: sn.filter(function(on) {
            return on;
          })
        });
      }
    }), (!c && me.length > 1 || c && p >= 1 && me.length > p) && (me.forEach(function(Be) {
      fe.push({
        file: Be,
        errors: [oh]
      });
    }), me.splice(0)), z({
      acceptedFiles: me,
      fileRejections: fe,
      type: "setFiles"
    }), m && m(me, fe, X), fe.length > 0 && v && v(fe, X), me.length > 0 && y && y(me, X);
  }, [z, c, b, a, o, p, m, y, v, w]), Se = ye(function(H) {
    H.preventDefault(), H.persist(), Ee(H), Q.current = [], Jn(H) && Promise.resolve(s(H)).then(function(X) {
      br(H) && !g || ne(X, H);
    }).catch(function(X) {
      return W(X);
    }), z({
      type: "reset"
    });
  }, [s, ne, W, g]), F = ye(function() {
    if (U.current) {
      z({
        type: "openDialog"
      }), L();
      var H = {
        multiple: c,
        types: C
      };
      window.showOpenFilePicker(H).then(function(X) {
        return s(X);
      }).then(function(X) {
        ne(X, null), z({
          type: "closeDialog"
        });
      }).catch(function(X) {
        ph(X) ? (D(X), z({
          type: "closeDialog"
        })) : fh(X) ? (U.current = !1, j.current ? (j.current.value = null, j.current.click()) : W(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : W(X);
      });
      return;
    }
    j.current && (z({
      type: "openDialog"
    }), L(), j.current.value = null, j.current.click());
  }, [z, L, D, R, ne, W, C, c]), Re = ye(function(H) {
    !I.current || !I.current.isEqualNode(H.target) || (H.key === " " || H.key === "Enter" || H.keyCode === 32 || H.keyCode === 13) && (H.preventDefault(), F());
  }, [I, F]), st = ye(function() {
    z({
      type: "focus"
    });
  }, []), Ze = ye(function() {
    z({
      type: "blur"
    });
  }, []), q = ye(function() {
    i || (uh() ? setTimeout(F, 0) : F());
  }, [i, F]), V = function(X) {
    return r ? null : X;
  }, te = function(X) {
    return u ? null : V(X);
  }, le = function(X) {
    return l ? null : V(X);
  }, Ee = function(X) {
    g && X.stopPropagation();
  }, Te = se(function() {
    return function() {
      var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, X = H.refKey, me = X === void 0 ? "ref" : X, fe = H.role, Be = H.onKeyDown, ct = H.onFocus, bt = H.onBlur, At = H.onClick, Jt = H.onDragEnter, en = H.onDragOver, Nt = H.onDragLeave, tn = H.onDrop, nn = vr(H, bh);
      return De(De(Ps({
        onKeyDown: te(ft(Be, Re)),
        onFocus: te(ft(ct, st)),
        onBlur: te(ft(bt, Ze)),
        onClick: V(ft(At, q)),
        onDragEnter: le(ft(Jt, Z)),
        onDragOver: le(ft(en, K)),
        onDragLeave: le(ft(Nt, ae)),
        onDrop: le(ft(tn, Se)),
        role: typeof fe == "string" && fe !== "" ? fe : "presentation"
      }, me, I), !r && !u ? {
        tabIndex: 0
      } : {}), nn);
    };
  }, [I, Re, st, Ze, q, Z, K, ae, Se, u, l, r]), pe = ye(function(H) {
    H.stopPropagation();
  }, []), je = se(function() {
    return function() {
      var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, X = H.refKey, me = X === void 0 ? "ref" : X, fe = H.onChange, Be = H.onClick, ct = vr(H, vh), bt = Ps({
        accept: b,
        multiple: c,
        type: "file",
        style: {
          display: "none"
        },
        onChange: V(ft(fe, Se)),
        onClick: V(ft(Be, pe)),
        tabIndex: -1
      }, me, j);
      return De(De({}, bt), ct);
    };
  }, [j, t, c, Se, r]);
  return De(De({}, N), {}, {
    isFocused: O && !r,
    getRootProps: Te,
    getInputProps: je,
    rootRef: I,
    inputRef: j,
    open: V(F)
  });
}
function Eh(n, e) {
  switch (e.type) {
    case "focus":
      return De(De({}, n), {}, {
        isFocused: !0
      });
    case "blur":
      return De(De({}, n), {}, {
        isFocused: !1
      });
    case "openDialog":
      return De(De({}, Is), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return De(De({}, n), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return De(De({}, n), {}, {
        isDragActive: e.isDragActive,
        isDragAccept: e.isDragAccept,
        isDragReject: e.isDragReject
      });
    case "setFiles":
      return De(De({}, n), {}, {
        acceptedFiles: e.acceptedFiles,
        fileRejections: e.fileRejections
      });
    case "reset":
      return De({}, Is);
    default:
      return n;
  }
}
function Ta() {
}
const Th = (n) => /* @__PURE__ */ P.jsx("svg", { ...n, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ P.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12h14" }) }), Ph = () => /* @__PURE__ */ P.jsxs("svg", { viewBox: "0 0 200 200", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ P.jsx("circle", { cx: "100", cy: "100", r: "99.5", stroke: "#B0488C" }),
  /* @__PURE__ */ P.jsxs("g", { clipPath: "url(#clip0_31_12)", children: [
    /* @__PURE__ */ P.jsx(
      "path",
      {
        d: "M87.6691 75.9199C88.563 75.9163 89.457 75.9128 90.378 75.9091C92.2639 75.9065 94.1498 75.9134 96.0357 75.9291C98.9224 75.9491 101.807 75.9292 104.694 75.9053C106.528 75.9078 108.362 75.9126 110.195 75.9199C111.059 75.9124 111.921 75.9048 112.81 75.897C119.46 75.9944 119.46 75.9944 121.75 78.2731C122.191 78.8959 122.631 79.5187 123.085 80.1604C123.454 80.531 123.454 80.531 123.83 80.9091C123.911 82.1028 123.941 83.3 123.95 84.4965C123.957 85.2614 123.964 86.0262 123.971 86.8143C123.974 87.6478 123.978 88.4815 123.981 89.3403C123.985 90.1927 123.99 91.0451 123.994 91.9233C124.001 93.7328 124.006 95.5423 124.009 97.3517C124.016 100.116 124.039 102.879 124.062 105.643C124.067 107.399 124.071 109.155 124.074 110.911C124.083 111.738 124.093 112.563 124.102 113.415C124.081 120.894 124.081 120.894 121.596 124.332C119.274 125.815 117.439 126.021 114.715 126.035C113.937 126.042 113.159 126.049 112.357 126.056C111.521 126.056 110.685 126.055 109.823 126.054C108.961 126.057 108.098 126.06 107.209 126.064C105.383 126.068 103.559 126.068 101.734 126.065C98.9428 126.062 96.1519 126.08 93.3604 126.099C91.5874 126.101 89.8145 126.101 88.0415 126.101C87.2067 126.107 86.372 126.115 85.5119 126.122C84.7316 126.117 83.9513 126.113 83.1474 126.107C82.4635 126.108 81.7796 126.109 81.075 126.109C78.7215 125.767 77.3408 124.983 75.4255 123.583C73.7766 121.097 73.7375 120.265 73.6961 117.362C73.6818 116.549 73.6676 115.737 73.6528 114.901C73.6465 114.023 73.6401 113.146 73.6337 112.242C73.6251 111.34 73.6166 110.438 73.6079 109.509C73.5938 107.6 73.5841 105.69 73.5783 103.781C73.5639 100.859 73.5177 97.9383 73.4707 95.0167C73.461 93.1626 73.4532 91.3085 73.4475 89.4543C73.4291 88.5801 73.4107 87.7058 73.3917 86.8049C73.4123 83.0474 73.445 80.866 75.6217 77.739C79.2026 75.469 83.5895 75.8841 87.6691 75.9199Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ P.jsx(
      "path",
      {
        d: "M32.2341 37.4866C59.7575 37.4866 87.2809 37.4866 115.638 37.4866C115.638 42.9219 115.638 48.3572 115.638 53.9572C93.0298 53.9572 70.4213 53.9572 47.1277 53.9572C47.1277 64.5807 47.1277 75.2043 47.1277 86.1497C42.2128 86.1497 37.2979 86.1497 32.2341 86.1497C32.2341 70.0909 32.2341 54.0321 32.2341 37.4866Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ P.jsx(
      "path",
      {
        d: "M32.2341 116.845C37.149 116.845 42.0639 116.845 47.1277 116.845C47.1277 127.221 47.1277 137.598 47.1277 148.289C71.7022 148.289 96.2766 148.289 121.596 148.289C121.596 153.23 121.596 158.171 121.596 163.262C92.1064 163.262 62.617 163.262 32.2341 163.262C32.2341 147.944 32.2341 132.627 32.2341 116.845Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ P.jsx(
      "path",
      {
        d: "M161.814 34.6792C165.577 37.5618 167.934 41.1653 169.255 45.7219C170.002 51.7878 170.244 57.7758 166.678 63.0231C166.3 63.4902 165.921 63.9573 165.532 64.4385C164.964 65.1623 164.964 65.1623 164.386 65.9007C160.694 70.0863 156.304 72.2018 150.81 72.9575C144.443 73.235 139.791 71.2772 134.814 67.3864C130.268 63.0898 128.124 57.8507 127.879 51.6177C128.195 45.152 130.717 40.4865 135.049 35.7846C142.84 28.7908 153.315 29.3596 161.814 34.6792Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ P.jsx(
      "path",
      {
        d: "M158.009 137.132C162.749 139.815 166.014 143.005 167.766 148.289C168.291 153.643 168.045 158.108 164.787 162.513C160.978 166.779 156.65 168.925 151.011 169.532C144.592 168.841 140.292 166.139 136.21 161.062C134.084 157.002 134.439 151.969 135 147.54C136.243 144.421 137.612 142.39 140.167 140.241C140.665 139.812 141.163 139.383 141.676 138.942C146.467 135.355 152.423 135.005 158.009 137.132Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ P.jsx(
      "path",
      {
        d: "M149.894 85.4011C154.809 85.4011 159.723 85.4011 164.787 85.4011C164.787 96.0246 164.787 106.648 164.787 117.594C159.872 117.594 154.957 117.594 149.894 117.594C149.894 106.97 149.894 96.3465 149.894 85.4011Z",
        fill: "#B0488C"
      }
    ),
    /* @__PURE__ */ P.jsx(
      "path",
      {
        d: "M40.3383 94.0136C43.3122 94.7142 44.8713 96.3632 46.6623 98.7366C47.3967 101.321 47.103 103.037 46.383 105.615C44.2412 107.919 42.6152 109.128 39.6343 110.107C36.957 110.107 35.8402 109.471 33.7234 107.861C33.2934 107.567 32.8633 107.274 32.4203 106.972C30.8391 104.667 30.4332 102.35 30.7447 99.6257C32.7702 95.2399 35.5991 93.6206 40.3383 94.0136Z",
        fill: "#B0488C"
      }
    )
  ] }),
  /* @__PURE__ */ P.jsx("defs", { children: /* @__PURE__ */ P.jsx("clipPath", { id: "clip0_31_12", children: /* @__PURE__ */ P.jsx(
    "rect",
    {
      width: "140",
      height: "140",
      fill: "white",
      transform: "translate(30 30)"
    }
  ) }) })
] }), Ih = ({ files: n }) => /* @__PURE__ */ P.jsx(P.Fragment, { children: n.map((e, t) => /* @__PURE__ */ P.jsx("div", { className: "thumbnail m-2", children: /* @__PURE__ */ P.jsx("div", { className: "thumbnailInner", children: /* @__PURE__ */ P.jsx("img", { src: e.preview, alt: e.preview, className: "w-[150px]" }) }) }, t)) }), Dh = ({ files: n, setFiles: e }) => {
  const t = ye((a) => {
    e((c) => [...c, ...a.map((p) => Object.assign(p, {
      preview: URL.createObjectURL(p)
    }))]);
  }, []), { getRootProps: r, getInputProps: s } = Yi({ onDrop: t }), o = (a) => () => {
    const c = n.filter((p) => p !== a);
    e(c);
  };
  return /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col w-[100%] dropzone border", children: [
    /* @__PURE__ */ P.jsxs("div", { ...r(), className: "flex items-center justify-center p-4 rounded-lg cursor-pointer hover:border-gray-500", children: [
      /* @__PURE__ */ P.jsx("input", { ...s() }),
      /* @__PURE__ */ P.jsx("p", { className: "text-gray-500", children: "Drag & drop images, or click to select files" })
    ] }),
    /* @__PURE__ */ P.jsx("aside", { className: "flex flex-wrap mt-4", children: n.map((a) => /* @__PURE__ */ P.jsxs("div", { className: "relative m-2", children: [
      /* @__PURE__ */ P.jsx("button", { onClick: o(a), className: "absolute top-0 right-0 p-1 bg-red-500 rounded-full text-white", children: /* @__PURE__ */ P.jsx(Th, { className: "w-4 h-4" }) }),
      /* @__PURE__ */ P.jsx("div", { className: "border p-1 rounded-lg", children: /* @__PURE__ */ P.jsx("img", { src: a.preview, alt: a.name, className: "w-12 h-12 object-cover rounded-lg" }) })
    ] }, a.name)) })
  ] });
};
function Lh({
  title: n,
  titleId: e,
  ...t
}, r) {
  return /* @__PURE__ */ Fe.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": e
  }, t), n ? /* @__PURE__ */ Fe.createElement("title", {
    id: e
  }, n) : null, /* @__PURE__ */ Fe.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
  }));
}
const Rh = /* @__PURE__ */ Fe.forwardRef(Lh);
function Oh({
  title: n,
  titleId: e,
  ...t
}, r) {
  return /* @__PURE__ */ Fe.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": e
  }, t), n ? /* @__PURE__ */ Fe.createElement("title", {
    id: e
  }, n) : null, /* @__PURE__ */ Fe.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
  }));
}
const jh = /* @__PURE__ */ Fe.forwardRef(Oh);
function Mh({
  title: n,
  titleId: e,
  ...t
}, r) {
  return /* @__PURE__ */ Fe.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": e
  }, t), n ? /* @__PURE__ */ Fe.createElement("title", {
    id: e
  }, n) : null, /* @__PURE__ */ Fe.createElement("path", {
    d: "M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z"
  }));
}
const Bh = /* @__PURE__ */ Fe.forwardRef(Mh);
function qh({
  title: n,
  titleId: e,
  ...t
}, r) {
  return /* @__PURE__ */ Fe.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": e
  }, t), n ? /* @__PURE__ */ Fe.createElement("title", {
    id: e
  }, n) : null, /* @__PURE__ */ Fe.createElement("path", {
    d: "M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z"
  }));
}
const zh = /* @__PURE__ */ Fe.forwardRef(qh);
var Qi = { exports: {} };
(function(n) {
  (function() {
    function e(i) {
      var u = {
        omitExtraWLInCodeBlocks: {
          defaultValue: !1,
          describe: "Omit the default extra whiteline added to code blocks",
          type: "boolean"
        },
        noHeaderId: {
          defaultValue: !1,
          describe: "Turn on/off generated header id",
          type: "boolean"
        },
        prefixHeaderId: {
          defaultValue: !1,
          describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
          type: "string"
        },
        rawPrefixHeaderId: {
          defaultValue: !1,
          describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
          type: "boolean"
        },
        ghCompatibleHeaderId: {
          defaultValue: !1,
          describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
          type: "boolean"
        },
        rawHeaderId: {
          defaultValue: !1,
          describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
          type: "boolean"
        },
        headerLevelStart: {
          defaultValue: !1,
          describe: "The header blocks level start",
          type: "integer"
        },
        parseImgDimensions: {
          defaultValue: !1,
          describe: "Turn on/off image dimension parsing",
          type: "boolean"
        },
        simplifiedAutoLink: {
          defaultValue: !1,
          describe: "Turn on/off GFM autolink style",
          type: "boolean"
        },
        excludeTrailingPunctuationFromURLs: {
          defaultValue: !1,
          describe: "Excludes trailing punctuation from links generated with autoLinking",
          type: "boolean"
        },
        literalMidWordUnderscores: {
          defaultValue: !1,
          describe: "Parse midword underscores as literal underscores",
          type: "boolean"
        },
        literalMidWordAsterisks: {
          defaultValue: !1,
          describe: "Parse midword asterisks as literal asterisks",
          type: "boolean"
        },
        strikethrough: {
          defaultValue: !1,
          describe: "Turn on/off strikethrough support",
          type: "boolean"
        },
        tables: {
          defaultValue: !1,
          describe: "Turn on/off tables support",
          type: "boolean"
        },
        tablesHeaderId: {
          defaultValue: !1,
          describe: "Add an id to table headers",
          type: "boolean"
        },
        ghCodeBlocks: {
          defaultValue: !0,
          describe: "Turn on/off GFM fenced code blocks support",
          type: "boolean"
        },
        tasklists: {
          defaultValue: !1,
          describe: "Turn on/off GFM tasklist support",
          type: "boolean"
        },
        smoothLivePreview: {
          defaultValue: !1,
          describe: "Prevents weird effects in live previews due to incomplete input",
          type: "boolean"
        },
        smartIndentationFix: {
          defaultValue: !1,
          description: "Tries to smartly fix indentation in es6 strings",
          type: "boolean"
        },
        disableForced4SpacesIndentedSublists: {
          defaultValue: !1,
          description: "Disables the requirement of indenting nested sublists by 4 spaces",
          type: "boolean"
        },
        simpleLineBreaks: {
          defaultValue: !1,
          description: "Parses simple line breaks as <br> (GFM Style)",
          type: "boolean"
        },
        requireSpaceBeforeHeadingText: {
          defaultValue: !1,
          description: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
          type: "boolean"
        },
        ghMentions: {
          defaultValue: !1,
          description: "Enables github @mentions",
          type: "boolean"
        },
        ghMentionsLink: {
          defaultValue: "https://github.com/{u}",
          description: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
          type: "string"
        },
        encodeEmails: {
          defaultValue: !0,
          description: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
          type: "boolean"
        },
        openLinksInNewWindow: {
          defaultValue: !1,
          description: "Open all links in new windows",
          type: "boolean"
        },
        backslashEscapesHTMLTags: {
          defaultValue: !1,
          description: "Support for HTML Tag escaping. ex: <div>foo</div>",
          type: "boolean"
        },
        emoji: {
          defaultValue: !1,
          description: "Enable emoji support. Ex: `this is a :smile: emoji`",
          type: "boolean"
        },
        underline: {
          defaultValue: !1,
          description: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
          type: "boolean"
        },
        completeHTMLDocument: {
          defaultValue: !1,
          description: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
          type: "boolean"
        },
        metadata: {
          defaultValue: !1,
          description: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
          type: "boolean"
        },
        splitAdjacentBlockquotes: {
          defaultValue: !1,
          description: "Split adjacent blockquote blocks",
          type: "boolean"
        }
      };
      if (i === !1)
        return JSON.parse(JSON.stringify(u));
      var l = {};
      for (var g in u)
        u.hasOwnProperty(g) && (l[g] = u[g].defaultValue);
      return l;
    }
    function t() {
      var i = e(!0), u = {};
      for (var l in i)
        i.hasOwnProperty(l) && (u[l] = !0);
      return u;
    }
    var r = {}, s = {}, o = {}, a = e(!0), c = "vanilla", p = {
      github: {
        omitExtraWLInCodeBlocks: !0,
        simplifiedAutoLink: !0,
        excludeTrailingPunctuationFromURLs: !0,
        literalMidWordUnderscores: !0,
        strikethrough: !0,
        tables: !0,
        tablesHeaderId: !0,
        ghCodeBlocks: !0,
        tasklists: !0,
        disableForced4SpacesIndentedSublists: !0,
        simpleLineBreaks: !0,
        requireSpaceBeforeHeadingText: !0,
        ghCompatibleHeaderId: !0,
        ghMentions: !0,
        backslashEscapesHTMLTags: !0,
        emoji: !0,
        splitAdjacentBlockquotes: !0
      },
      original: {
        noHeaderId: !0,
        ghCodeBlocks: !1
      },
      ghost: {
        omitExtraWLInCodeBlocks: !0,
        parseImgDimensions: !0,
        simplifiedAutoLink: !0,
        excludeTrailingPunctuationFromURLs: !0,
        literalMidWordUnderscores: !0,
        strikethrough: !0,
        tables: !0,
        tablesHeaderId: !0,
        ghCodeBlocks: !0,
        tasklists: !0,
        smoothLivePreview: !0,
        simpleLineBreaks: !0,
        requireSpaceBeforeHeadingText: !0,
        ghMentions: !1,
        encodeEmails: !0
      },
      vanilla: e(!0),
      allOn: t()
    };
    r.helper = {}, r.extensions = {}, r.setOption = function(i, u) {
      return a[i] = u, this;
    }, r.getOption = function(i) {
      return a[i];
    }, r.getOptions = function() {
      return a;
    }, r.resetOptions = function() {
      a = e(!0);
    }, r.setFlavor = function(i) {
      if (!p.hasOwnProperty(i))
        throw Error(i + " flavor was not found");
      r.resetOptions();
      var u = p[i];
      c = i;
      for (var l in u)
        u.hasOwnProperty(l) && (a[l] = u[l]);
    }, r.getFlavor = function() {
      return c;
    }, r.getFlavorOptions = function(i) {
      if (p.hasOwnProperty(i))
        return p[i];
    }, r.getDefaultOptions = function(i) {
      return e(i);
    }, r.subParser = function(i, u) {
      if (r.helper.isString(i))
        if (typeof u < "u")
          s[i] = u;
        else {
          if (s.hasOwnProperty(i))
            return s[i];
          throw Error("SubParser named " + i + " not registered!");
        }
    }, r.extension = function(i, u) {
      if (!r.helper.isString(i))
        throw Error("Extension 'name' must be a string");
      if (i = r.helper.stdExtName(i), r.helper.isUndefined(u)) {
        if (!o.hasOwnProperty(i))
          throw Error("Extension named " + i + " is not registered!");
        return o[i];
      } else {
        typeof u == "function" && (u = u()), r.helper.isArray(u) || (u = [u]);
        var l = h(u, i);
        if (l.valid)
          o[i] = u;
        else
          throw Error(l.error);
      }
    }, r.getAllExtensions = function() {
      return o;
    }, r.removeExtension = function(i) {
      delete o[i];
    }, r.resetExtensions = function() {
      o = {};
    };
    function h(i, u) {
      var l = u ? "Error in " + u + " extension->" : "Error in unnamed extension", g = {
        valid: !0,
        error: ""
      };
      r.helper.isArray(i) || (i = [i]);
      for (var k = 0; k < i.length; ++k) {
        var w = l + " sub-extension " + k + ": ", b = i[k];
        if (typeof b != "object")
          return g.valid = !1, g.error = w + "must be an object, but " + typeof b + " given", g;
        if (!r.helper.isString(b.type))
          return g.valid = !1, g.error = w + 'property "type" must be a string, but ' + typeof b.type + " given", g;
        var C = b.type = b.type.toLowerCase();
        if (C === "language" && (C = b.type = "lang"), C === "html" && (C = b.type = "output"), C !== "lang" && C !== "output" && C !== "listener")
          return g.valid = !1, g.error = w + "type " + C + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', g;
        if (C === "listener") {
          if (r.helper.isUndefined(b.listeners))
            return g.valid = !1, g.error = w + '. Extensions of type "listener" must have a property called "listeners"', g;
        } else if (r.helper.isUndefined(b.filter) && r.helper.isUndefined(b.regex))
          return g.valid = !1, g.error = w + C + ' extensions must define either a "regex" property or a "filter" method', g;
        if (b.listeners) {
          if (typeof b.listeners != "object")
            return g.valid = !1, g.error = w + '"listeners" property must be an object but ' + typeof b.listeners + " given", g;
          for (var L in b.listeners)
            if (b.listeners.hasOwnProperty(L) && typeof b.listeners[L] != "function")
              return g.valid = !1, g.error = w + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + L + " must be a function but " + typeof b.listeners[L] + " given", g;
        }
        if (b.filter) {
          if (typeof b.filter != "function")
            return g.valid = !1, g.error = w + '"filter" must be a function, but ' + typeof b.filter + " given", g;
        } else if (b.regex) {
          if (r.helper.isString(b.regex) && (b.regex = new RegExp(b.regex, "g")), !(b.regex instanceof RegExp))
            return g.valid = !1, g.error = w + '"regex" property must either be a string or a RegExp object, but ' + typeof b.regex + " given", g;
          if (r.helper.isUndefined(b.replace))
            return g.valid = !1, g.error = w + '"regex" extensions must implement a replace string or function', g;
        }
      }
      return g;
    }
    r.validateExtension = function(i) {
      var u = h(i, null);
      return u.valid ? !0 : (console.warn(u.error), !1);
    }, r.hasOwnProperty("helper") || (r.helper = {}), r.helper.isString = function(i) {
      return typeof i == "string" || i instanceof String;
    }, r.helper.isFunction = function(i) {
      var u = {};
      return i && u.toString.call(i) === "[object Function]";
    }, r.helper.isArray = function(i) {
      return Array.isArray(i);
    }, r.helper.isUndefined = function(i) {
      return typeof i > "u";
    }, r.helper.forEach = function(i, u) {
      if (r.helper.isUndefined(i))
        throw new Error("obj param is required");
      if (r.helper.isUndefined(u))
        throw new Error("callback param is required");
      if (!r.helper.isFunction(u))
        throw new Error("callback param must be a function/closure");
      if (typeof i.forEach == "function")
        i.forEach(u);
      else if (r.helper.isArray(i))
        for (var l = 0; l < i.length; l++)
          u(i[l], l, i);
      else if (typeof i == "object")
        for (var g in i)
          i.hasOwnProperty(g) && u(i[g], g, i);
      else
        throw new Error("obj does not seem to be an array or an iterable object");
    }, r.helper.stdExtName = function(i) {
      return i.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
    };
    function d(i, u) {
      var l = u.charCodeAt(0);
      return "¨E" + l + "E";
    }
    r.helper.escapeCharactersCallback = d, r.helper.escapeCharacters = function(i, u, l) {
      var g = "([" + u.replace(/([\[\]\\])/g, "\\$1") + "])";
      l && (g = "\\\\" + g);
      var k = new RegExp(g, "g");
      return i = i.replace(k, d), i;
    }, r.helper.unescapeHTMLEntities = function(i) {
      return i.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
    };
    var f = function(i, u, l, g) {
      var k = g || "", w = k.indexOf("g") > -1, b = new RegExp(u + "|" + l, "g" + k.replace(/g/g, "")), C = new RegExp(u, k.replace(/g/g, "")), L = [], D, I, j, x, B;
      do
        for (D = 0; j = b.exec(i); )
          if (C.test(j[0]))
            D++ || (I = b.lastIndex, x = I - j[0].length);
          else if (D && !--D) {
            B = j.index + j[0].length;
            var N = {
              left: { start: x, end: I },
              match: { start: I, end: j.index },
              right: { start: j.index, end: B },
              wholeMatch: { start: x, end: B }
            };
            if (L.push(N), !w)
              return L;
          }
      while (D && (b.lastIndex = I));
      return L;
    };
    r.helper.matchRecursiveRegExp = function(i, u, l, g) {
      for (var k = f(i, u, l, g), w = [], b = 0; b < k.length; ++b)
        w.push([
          i.slice(k[b].wholeMatch.start, k[b].wholeMatch.end),
          i.slice(k[b].match.start, k[b].match.end),
          i.slice(k[b].left.start, k[b].left.end),
          i.slice(k[b].right.start, k[b].right.end)
        ]);
      return w;
    }, r.helper.replaceRecursiveRegExp = function(i, u, l, g, k) {
      if (!r.helper.isFunction(u)) {
        var w = u;
        u = function() {
          return w;
        };
      }
      var b = f(i, l, g, k), C = i, L = b.length;
      if (L > 0) {
        var D = [];
        b[0].wholeMatch.start !== 0 && D.push(i.slice(0, b[0].wholeMatch.start));
        for (var I = 0; I < L; ++I)
          D.push(
            u(
              i.slice(b[I].wholeMatch.start, b[I].wholeMatch.end),
              i.slice(b[I].match.start, b[I].match.end),
              i.slice(b[I].left.start, b[I].left.end),
              i.slice(b[I].right.start, b[I].right.end)
            )
          ), I < L - 1 && D.push(i.slice(b[I].wholeMatch.end, b[I + 1].wholeMatch.start));
        b[L - 1].wholeMatch.end < i.length && D.push(i.slice(b[L - 1].wholeMatch.end)), C = D.join("");
      }
      return C;
    }, r.helper.regexIndexOf = function(i, u, l) {
      if (!r.helper.isString(i))
        throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
      if (!(u instanceof RegExp))
        throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
      var g = i.substring(l || 0).search(u);
      return g >= 0 ? g + (l || 0) : g;
    }, r.helper.splitAtIndex = function(i, u) {
      if (!r.helper.isString(i))
        throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
      return [i.substring(0, u), i.substring(u)];
    }, r.helper.encodeEmailAddress = function(i) {
      var u = [
        function(l) {
          return "&#" + l.charCodeAt(0) + ";";
        },
        function(l) {
          return "&#x" + l.charCodeAt(0).toString(16) + ";";
        },
        function(l) {
          return l;
        }
      ];
      return i = i.replace(/./g, function(l) {
        if (l === "@")
          l = u[Math.floor(Math.random() * 2)](l);
        else {
          var g = Math.random();
          l = g > 0.9 ? u[2](l) : g > 0.45 ? u[1](l) : u[0](l);
        }
        return l;
      }), i;
    }, r.helper.padEnd = function(u, l, g) {
      return l = l >> 0, g = String(g || " "), u.length > l ? String(u) : (l = l - u.length, l > g.length && (g += g.repeat(l / g.length)), String(u) + g.slice(0, l));
    }, typeof console > "u" && (console = {
      warn: function(i) {
        alert(i);
      },
      log: function(i) {
        alert(i);
      },
      error: function(i) {
        throw i;
      }
    }), r.helper.regexes = {
      asteriskDashAndColon: /([*_:~])/g
    }, r.helper.emojis = {
      "+1": "👍",
      "-1": "👎",
      100: "💯",
      1234: "🔢",
      "1st_place_medal": "🥇",
      "2nd_place_medal": "🥈",
      "3rd_place_medal": "🥉",
      "8ball": "🎱",
      a: "🅰️",
      ab: "🆎",
      abc: "🔤",
      abcd: "🔡",
      accept: "🉑",
      aerial_tramway: "🚡",
      airplane: "✈️",
      alarm_clock: "⏰",
      alembic: "⚗️",
      alien: "👽",
      ambulance: "🚑",
      amphora: "🏺",
      anchor: "⚓️",
      angel: "👼",
      anger: "💢",
      angry: "😠",
      anguished: "😧",
      ant: "🐜",
      apple: "🍎",
      aquarius: "♒️",
      aries: "♈️",
      arrow_backward: "◀️",
      arrow_double_down: "⏬",
      arrow_double_up: "⏫",
      arrow_down: "⬇️",
      arrow_down_small: "🔽",
      arrow_forward: "▶️",
      arrow_heading_down: "⤵️",
      arrow_heading_up: "⤴️",
      arrow_left: "⬅️",
      arrow_lower_left: "↙️",
      arrow_lower_right: "↘️",
      arrow_right: "➡️",
      arrow_right_hook: "↪️",
      arrow_up: "⬆️",
      arrow_up_down: "↕️",
      arrow_up_small: "🔼",
      arrow_upper_left: "↖️",
      arrow_upper_right: "↗️",
      arrows_clockwise: "🔃",
      arrows_counterclockwise: "🔄",
      art: "🎨",
      articulated_lorry: "🚛",
      artificial_satellite: "🛰",
      astonished: "😲",
      athletic_shoe: "👟",
      atm: "🏧",
      atom_symbol: "⚛️",
      avocado: "🥑",
      b: "🅱️",
      baby: "👶",
      baby_bottle: "🍼",
      baby_chick: "🐤",
      baby_symbol: "🚼",
      back: "🔙",
      bacon: "🥓",
      badminton: "🏸",
      baggage_claim: "🛄",
      baguette_bread: "🥖",
      balance_scale: "⚖️",
      balloon: "🎈",
      ballot_box: "🗳",
      ballot_box_with_check: "☑️",
      bamboo: "🎍",
      banana: "🍌",
      bangbang: "‼️",
      bank: "🏦",
      bar_chart: "📊",
      barber: "💈",
      baseball: "⚾️",
      basketball: "🏀",
      basketball_man: "⛹️",
      basketball_woman: "⛹️&zwj;♀️",
      bat: "🦇",
      bath: "🛀",
      bathtub: "🛁",
      battery: "🔋",
      beach_umbrella: "🏖",
      bear: "🐻",
      bed: "🛏",
      bee: "🐝",
      beer: "🍺",
      beers: "🍻",
      beetle: "🐞",
      beginner: "🔰",
      bell: "🔔",
      bellhop_bell: "🛎",
      bento: "🍱",
      biking_man: "🚴",
      bike: "🚲",
      biking_woman: "🚴&zwj;♀️",
      bikini: "👙",
      biohazard: "☣️",
      bird: "🐦",
      birthday: "🎂",
      black_circle: "⚫️",
      black_flag: "🏴",
      black_heart: "🖤",
      black_joker: "🃏",
      black_large_square: "⬛️",
      black_medium_small_square: "◾️",
      black_medium_square: "◼️",
      black_nib: "✒️",
      black_small_square: "▪️",
      black_square_button: "🔲",
      blonde_man: "👱",
      blonde_woman: "👱&zwj;♀️",
      blossom: "🌼",
      blowfish: "🐡",
      blue_book: "📘",
      blue_car: "🚙",
      blue_heart: "💙",
      blush: "😊",
      boar: "🐗",
      boat: "⛵️",
      bomb: "💣",
      book: "📖",
      bookmark: "🔖",
      bookmark_tabs: "📑",
      books: "📚",
      boom: "💥",
      boot: "👢",
      bouquet: "💐",
      bowing_man: "🙇",
      bow_and_arrow: "🏹",
      bowing_woman: "🙇&zwj;♀️",
      bowling: "🎳",
      boxing_glove: "🥊",
      boy: "👦",
      bread: "🍞",
      bride_with_veil: "👰",
      bridge_at_night: "🌉",
      briefcase: "💼",
      broken_heart: "💔",
      bug: "🐛",
      building_construction: "🏗",
      bulb: "💡",
      bullettrain_front: "🚅",
      bullettrain_side: "🚄",
      burrito: "🌯",
      bus: "🚌",
      business_suit_levitating: "🕴",
      busstop: "🚏",
      bust_in_silhouette: "👤",
      busts_in_silhouette: "👥",
      butterfly: "🦋",
      cactus: "🌵",
      cake: "🍰",
      calendar: "📆",
      call_me_hand: "🤙",
      calling: "📲",
      camel: "🐫",
      camera: "📷",
      camera_flash: "📸",
      camping: "🏕",
      cancer: "♋️",
      candle: "🕯",
      candy: "🍬",
      canoe: "🛶",
      capital_abcd: "🔠",
      capricorn: "♑️",
      car: "🚗",
      card_file_box: "🗃",
      card_index: "📇",
      card_index_dividers: "🗂",
      carousel_horse: "🎠",
      carrot: "🥕",
      cat: "🐱",
      cat2: "🐈",
      cd: "💿",
      chains: "⛓",
      champagne: "🍾",
      chart: "💹",
      chart_with_downwards_trend: "📉",
      chart_with_upwards_trend: "📈",
      checkered_flag: "🏁",
      cheese: "🧀",
      cherries: "🍒",
      cherry_blossom: "🌸",
      chestnut: "🌰",
      chicken: "🐔",
      children_crossing: "🚸",
      chipmunk: "🐿",
      chocolate_bar: "🍫",
      christmas_tree: "🎄",
      church: "⛪️",
      cinema: "🎦",
      circus_tent: "🎪",
      city_sunrise: "🌇",
      city_sunset: "🌆",
      cityscape: "🏙",
      cl: "🆑",
      clamp: "🗜",
      clap: "👏",
      clapper: "🎬",
      classical_building: "🏛",
      clinking_glasses: "🥂",
      clipboard: "📋",
      clock1: "🕐",
      clock10: "🕙",
      clock1030: "🕥",
      clock11: "🕚",
      clock1130: "🕦",
      clock12: "🕛",
      clock1230: "🕧",
      clock130: "🕜",
      clock2: "🕑",
      clock230: "🕝",
      clock3: "🕒",
      clock330: "🕞",
      clock4: "🕓",
      clock430: "🕟",
      clock5: "🕔",
      clock530: "🕠",
      clock6: "🕕",
      clock630: "🕡",
      clock7: "🕖",
      clock730: "🕢",
      clock8: "🕗",
      clock830: "🕣",
      clock9: "🕘",
      clock930: "🕤",
      closed_book: "📕",
      closed_lock_with_key: "🔐",
      closed_umbrella: "🌂",
      cloud: "☁️",
      cloud_with_lightning: "🌩",
      cloud_with_lightning_and_rain: "⛈",
      cloud_with_rain: "🌧",
      cloud_with_snow: "🌨",
      clown_face: "🤡",
      clubs: "♣️",
      cocktail: "🍸",
      coffee: "☕️",
      coffin: "⚰️",
      cold_sweat: "😰",
      comet: "☄️",
      computer: "💻",
      computer_mouse: "🖱",
      confetti_ball: "🎊",
      confounded: "😖",
      confused: "😕",
      congratulations: "㊗️",
      construction: "🚧",
      construction_worker_man: "👷",
      construction_worker_woman: "👷&zwj;♀️",
      control_knobs: "🎛",
      convenience_store: "🏪",
      cookie: "🍪",
      cool: "🆒",
      policeman: "👮",
      copyright: "©️",
      corn: "🌽",
      couch_and_lamp: "🛋",
      couple: "👫",
      couple_with_heart_woman_man: "💑",
      couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
      couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
      couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
      couplekiss_man_woman: "💏",
      couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
      cow: "🐮",
      cow2: "🐄",
      cowboy_hat_face: "🤠",
      crab: "🦀",
      crayon: "🖍",
      credit_card: "💳",
      crescent_moon: "🌙",
      cricket: "🏏",
      crocodile: "🐊",
      croissant: "🥐",
      crossed_fingers: "🤞",
      crossed_flags: "🎌",
      crossed_swords: "⚔️",
      crown: "👑",
      cry: "😢",
      crying_cat_face: "😿",
      crystal_ball: "🔮",
      cucumber: "🥒",
      cupid: "💘",
      curly_loop: "➰",
      currency_exchange: "💱",
      curry: "🍛",
      custard: "🍮",
      customs: "🛃",
      cyclone: "🌀",
      dagger: "🗡",
      dancer: "💃",
      dancing_women: "👯",
      dancing_men: "👯&zwj;♂️",
      dango: "🍡",
      dark_sunglasses: "🕶",
      dart: "🎯",
      dash: "💨",
      date: "📅",
      deciduous_tree: "🌳",
      deer: "🦌",
      department_store: "🏬",
      derelict_house: "🏚",
      desert: "🏜",
      desert_island: "🏝",
      desktop_computer: "🖥",
      male_detective: "🕵️",
      diamond_shape_with_a_dot_inside: "💠",
      diamonds: "♦️",
      disappointed: "😞",
      disappointed_relieved: "😥",
      dizzy: "💫",
      dizzy_face: "😵",
      do_not_litter: "🚯",
      dog: "🐶",
      dog2: "🐕",
      dollar: "💵",
      dolls: "🎎",
      dolphin: "🐬",
      door: "🚪",
      doughnut: "🍩",
      dove: "🕊",
      dragon: "🐉",
      dragon_face: "🐲",
      dress: "👗",
      dromedary_camel: "🐪",
      drooling_face: "🤤",
      droplet: "💧",
      drum: "🥁",
      duck: "🦆",
      dvd: "📀",
      "e-mail": "📧",
      eagle: "🦅",
      ear: "👂",
      ear_of_rice: "🌾",
      earth_africa: "🌍",
      earth_americas: "🌎",
      earth_asia: "🌏",
      egg: "🥚",
      eggplant: "🍆",
      eight_pointed_black_star: "✴️",
      eight_spoked_asterisk: "✳️",
      electric_plug: "🔌",
      elephant: "🐘",
      email: "✉️",
      end: "🔚",
      envelope_with_arrow: "📩",
      euro: "💶",
      european_castle: "🏰",
      european_post_office: "🏤",
      evergreen_tree: "🌲",
      exclamation: "❗️",
      expressionless: "😑",
      eye: "👁",
      eye_speech_bubble: "👁&zwj;🗨",
      eyeglasses: "👓",
      eyes: "👀",
      face_with_head_bandage: "🤕",
      face_with_thermometer: "🤒",
      fist_oncoming: "👊",
      factory: "🏭",
      fallen_leaf: "🍂",
      family_man_woman_boy: "👪",
      family_man_boy: "👨&zwj;👦",
      family_man_boy_boy: "👨&zwj;👦&zwj;👦",
      family_man_girl: "👨&zwj;👧",
      family_man_girl_boy: "👨&zwj;👧&zwj;👦",
      family_man_girl_girl: "👨&zwj;👧&zwj;👧",
      family_man_man_boy: "👨&zwj;👨&zwj;👦",
      family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
      family_man_man_girl: "👨&zwj;👨&zwj;👧",
      family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
      family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
      family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
      family_man_woman_girl: "👨&zwj;👩&zwj;👧",
      family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
      family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
      family_woman_boy: "👩&zwj;👦",
      family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
      family_woman_girl: "👩&zwj;👧",
      family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
      family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
      family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
      family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
      family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
      family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
      family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
      fast_forward: "⏩",
      fax: "📠",
      fearful: "😨",
      feet: "🐾",
      female_detective: "🕵️&zwj;♀️",
      ferris_wheel: "🎡",
      ferry: "⛴",
      field_hockey: "🏑",
      file_cabinet: "🗄",
      file_folder: "📁",
      film_projector: "📽",
      film_strip: "🎞",
      fire: "🔥",
      fire_engine: "🚒",
      fireworks: "🎆",
      first_quarter_moon: "🌓",
      first_quarter_moon_with_face: "🌛",
      fish: "🐟",
      fish_cake: "🍥",
      fishing_pole_and_fish: "🎣",
      fist_raised: "✊",
      fist_left: "🤛",
      fist_right: "🤜",
      flags: "🎏",
      flashlight: "🔦",
      fleur_de_lis: "⚜️",
      flight_arrival: "🛬",
      flight_departure: "🛫",
      floppy_disk: "💾",
      flower_playing_cards: "🎴",
      flushed: "😳",
      fog: "🌫",
      foggy: "🌁",
      football: "🏈",
      footprints: "👣",
      fork_and_knife: "🍴",
      fountain: "⛲️",
      fountain_pen: "🖋",
      four_leaf_clover: "🍀",
      fox_face: "🦊",
      framed_picture: "🖼",
      free: "🆓",
      fried_egg: "🍳",
      fried_shrimp: "🍤",
      fries: "🍟",
      frog: "🐸",
      frowning: "😦",
      frowning_face: "☹️",
      frowning_man: "🙍&zwj;♂️",
      frowning_woman: "🙍",
      middle_finger: "🖕",
      fuelpump: "⛽️",
      full_moon: "🌕",
      full_moon_with_face: "🌝",
      funeral_urn: "⚱️",
      game_die: "🎲",
      gear: "⚙️",
      gem: "💎",
      gemini: "♊️",
      ghost: "👻",
      gift: "🎁",
      gift_heart: "💝",
      girl: "👧",
      globe_with_meridians: "🌐",
      goal_net: "🥅",
      goat: "🐐",
      golf: "⛳️",
      golfing_man: "🏌️",
      golfing_woman: "🏌️&zwj;♀️",
      gorilla: "🦍",
      grapes: "🍇",
      green_apple: "🍏",
      green_book: "📗",
      green_heart: "💚",
      green_salad: "🥗",
      grey_exclamation: "❕",
      grey_question: "❔",
      grimacing: "😬",
      grin: "😁",
      grinning: "😀",
      guardsman: "💂",
      guardswoman: "💂&zwj;♀️",
      guitar: "🎸",
      gun: "🔫",
      haircut_woman: "💇",
      haircut_man: "💇&zwj;♂️",
      hamburger: "🍔",
      hammer: "🔨",
      hammer_and_pick: "⚒",
      hammer_and_wrench: "🛠",
      hamster: "🐹",
      hand: "✋",
      handbag: "👜",
      handshake: "🤝",
      hankey: "💩",
      hatched_chick: "🐥",
      hatching_chick: "🐣",
      headphones: "🎧",
      hear_no_evil: "🙉",
      heart: "❤️",
      heart_decoration: "💟",
      heart_eyes: "😍",
      heart_eyes_cat: "😻",
      heartbeat: "💓",
      heartpulse: "💗",
      hearts: "♥️",
      heavy_check_mark: "✔️",
      heavy_division_sign: "➗",
      heavy_dollar_sign: "💲",
      heavy_heart_exclamation: "❣️",
      heavy_minus_sign: "➖",
      heavy_multiplication_x: "✖️",
      heavy_plus_sign: "➕",
      helicopter: "🚁",
      herb: "🌿",
      hibiscus: "🌺",
      high_brightness: "🔆",
      high_heel: "👠",
      hocho: "🔪",
      hole: "🕳",
      honey_pot: "🍯",
      horse: "🐴",
      horse_racing: "🏇",
      hospital: "🏥",
      hot_pepper: "🌶",
      hotdog: "🌭",
      hotel: "🏨",
      hotsprings: "♨️",
      hourglass: "⌛️",
      hourglass_flowing_sand: "⏳",
      house: "🏠",
      house_with_garden: "🏡",
      houses: "🏘",
      hugs: "🤗",
      hushed: "😯",
      ice_cream: "🍨",
      ice_hockey: "🏒",
      ice_skate: "⛸",
      icecream: "🍦",
      id: "🆔",
      ideograph_advantage: "🉐",
      imp: "👿",
      inbox_tray: "📥",
      incoming_envelope: "📨",
      tipping_hand_woman: "💁",
      information_source: "ℹ️",
      innocent: "😇",
      interrobang: "⁉️",
      iphone: "📱",
      izakaya_lantern: "🏮",
      jack_o_lantern: "🎃",
      japan: "🗾",
      japanese_castle: "🏯",
      japanese_goblin: "👺",
      japanese_ogre: "👹",
      jeans: "👖",
      joy: "😂",
      joy_cat: "😹",
      joystick: "🕹",
      kaaba: "🕋",
      key: "🔑",
      keyboard: "⌨️",
      keycap_ten: "🔟",
      kick_scooter: "🛴",
      kimono: "👘",
      kiss: "💋",
      kissing: "😗",
      kissing_cat: "😽",
      kissing_closed_eyes: "😚",
      kissing_heart: "😘",
      kissing_smiling_eyes: "😙",
      kiwi_fruit: "🥝",
      koala: "🐨",
      koko: "🈁",
      label: "🏷",
      large_blue_circle: "🔵",
      large_blue_diamond: "🔷",
      large_orange_diamond: "🔶",
      last_quarter_moon: "🌗",
      last_quarter_moon_with_face: "🌜",
      latin_cross: "✝️",
      laughing: "😆",
      leaves: "🍃",
      ledger: "📒",
      left_luggage: "🛅",
      left_right_arrow: "↔️",
      leftwards_arrow_with_hook: "↩️",
      lemon: "🍋",
      leo: "♌️",
      leopard: "🐆",
      level_slider: "🎚",
      libra: "♎️",
      light_rail: "🚈",
      link: "🔗",
      lion: "🦁",
      lips: "👄",
      lipstick: "💄",
      lizard: "🦎",
      lock: "🔒",
      lock_with_ink_pen: "🔏",
      lollipop: "🍭",
      loop: "➿",
      loud_sound: "🔊",
      loudspeaker: "📢",
      love_hotel: "🏩",
      love_letter: "💌",
      low_brightness: "🔅",
      lying_face: "🤥",
      m: "Ⓜ️",
      mag: "🔍",
      mag_right: "🔎",
      mahjong: "🀄️",
      mailbox: "📫",
      mailbox_closed: "📪",
      mailbox_with_mail: "📬",
      mailbox_with_no_mail: "📭",
      man: "👨",
      man_artist: "👨&zwj;🎨",
      man_astronaut: "👨&zwj;🚀",
      man_cartwheeling: "🤸&zwj;♂️",
      man_cook: "👨&zwj;🍳",
      man_dancing: "🕺",
      man_facepalming: "🤦&zwj;♂️",
      man_factory_worker: "👨&zwj;🏭",
      man_farmer: "👨&zwj;🌾",
      man_firefighter: "👨&zwj;🚒",
      man_health_worker: "👨&zwj;⚕️",
      man_in_tuxedo: "🤵",
      man_judge: "👨&zwj;⚖️",
      man_juggling: "🤹&zwj;♂️",
      man_mechanic: "👨&zwj;🔧",
      man_office_worker: "👨&zwj;💼",
      man_pilot: "👨&zwj;✈️",
      man_playing_handball: "🤾&zwj;♂️",
      man_playing_water_polo: "🤽&zwj;♂️",
      man_scientist: "👨&zwj;🔬",
      man_shrugging: "🤷&zwj;♂️",
      man_singer: "👨&zwj;🎤",
      man_student: "👨&zwj;🎓",
      man_teacher: "👨&zwj;🏫",
      man_technologist: "👨&zwj;💻",
      man_with_gua_pi_mao: "👲",
      man_with_turban: "👳",
      tangerine: "🍊",
      mans_shoe: "👞",
      mantelpiece_clock: "🕰",
      maple_leaf: "🍁",
      martial_arts_uniform: "🥋",
      mask: "😷",
      massage_woman: "💆",
      massage_man: "💆&zwj;♂️",
      meat_on_bone: "🍖",
      medal_military: "🎖",
      medal_sports: "🏅",
      mega: "📣",
      melon: "🍈",
      memo: "📝",
      men_wrestling: "🤼&zwj;♂️",
      menorah: "🕎",
      mens: "🚹",
      metal: "🤘",
      metro: "🚇",
      microphone: "🎤",
      microscope: "🔬",
      milk_glass: "🥛",
      milky_way: "🌌",
      minibus: "🚐",
      minidisc: "💽",
      mobile_phone_off: "📴",
      money_mouth_face: "🤑",
      money_with_wings: "💸",
      moneybag: "💰",
      monkey: "🐒",
      monkey_face: "🐵",
      monorail: "🚝",
      moon: "🌔",
      mortar_board: "🎓",
      mosque: "🕌",
      motor_boat: "🛥",
      motor_scooter: "🛵",
      motorcycle: "🏍",
      motorway: "🛣",
      mount_fuji: "🗻",
      mountain: "⛰",
      mountain_biking_man: "🚵",
      mountain_biking_woman: "🚵&zwj;♀️",
      mountain_cableway: "🚠",
      mountain_railway: "🚞",
      mountain_snow: "🏔",
      mouse: "🐭",
      mouse2: "🐁",
      movie_camera: "🎥",
      moyai: "🗿",
      mrs_claus: "🤶",
      muscle: "💪",
      mushroom: "🍄",
      musical_keyboard: "🎹",
      musical_note: "🎵",
      musical_score: "🎼",
      mute: "🔇",
      nail_care: "💅",
      name_badge: "📛",
      national_park: "🏞",
      nauseated_face: "🤢",
      necktie: "👔",
      negative_squared_cross_mark: "❎",
      nerd_face: "🤓",
      neutral_face: "😐",
      new: "🆕",
      new_moon: "🌑",
      new_moon_with_face: "🌚",
      newspaper: "📰",
      newspaper_roll: "🗞",
      next_track_button: "⏭",
      ng: "🆖",
      no_good_man: "🙅&zwj;♂️",
      no_good_woman: "🙅",
      night_with_stars: "🌃",
      no_bell: "🔕",
      no_bicycles: "🚳",
      no_entry: "⛔️",
      no_entry_sign: "🚫",
      no_mobile_phones: "📵",
      no_mouth: "😶",
      no_pedestrians: "🚷",
      no_smoking: "🚭",
      "non-potable_water": "🚱",
      nose: "👃",
      notebook: "📓",
      notebook_with_decorative_cover: "📔",
      notes: "🎶",
      nut_and_bolt: "🔩",
      o: "⭕️",
      o2: "🅾️",
      ocean: "🌊",
      octopus: "🐙",
      oden: "🍢",
      office: "🏢",
      oil_drum: "🛢",
      ok: "🆗",
      ok_hand: "👌",
      ok_man: "🙆&zwj;♂️",
      ok_woman: "🙆",
      old_key: "🗝",
      older_man: "👴",
      older_woman: "👵",
      om: "🕉",
      on: "🔛",
      oncoming_automobile: "🚘",
      oncoming_bus: "🚍",
      oncoming_police_car: "🚔",
      oncoming_taxi: "🚖",
      open_file_folder: "📂",
      open_hands: "👐",
      open_mouth: "😮",
      open_umbrella: "☂️",
      ophiuchus: "⛎",
      orange_book: "📙",
      orthodox_cross: "☦️",
      outbox_tray: "📤",
      owl: "🦉",
      ox: "🐂",
      package: "📦",
      page_facing_up: "📄",
      page_with_curl: "📃",
      pager: "📟",
      paintbrush: "🖌",
      palm_tree: "🌴",
      pancakes: "🥞",
      panda_face: "🐼",
      paperclip: "📎",
      paperclips: "🖇",
      parasol_on_ground: "⛱",
      parking: "🅿️",
      part_alternation_mark: "〽️",
      partly_sunny: "⛅️",
      passenger_ship: "🛳",
      passport_control: "🛂",
      pause_button: "⏸",
      peace_symbol: "☮️",
      peach: "🍑",
      peanuts: "🥜",
      pear: "🍐",
      pen: "🖊",
      pencil2: "✏️",
      penguin: "🐧",
      pensive: "😔",
      performing_arts: "🎭",
      persevere: "😣",
      person_fencing: "🤺",
      pouting_woman: "🙎",
      phone: "☎️",
      pick: "⛏",
      pig: "🐷",
      pig2: "🐖",
      pig_nose: "🐽",
      pill: "💊",
      pineapple: "🍍",
      ping_pong: "🏓",
      pisces: "♓️",
      pizza: "🍕",
      place_of_worship: "🛐",
      plate_with_cutlery: "🍽",
      play_or_pause_button: "⏯",
      point_down: "👇",
      point_left: "👈",
      point_right: "👉",
      point_up: "☝️",
      point_up_2: "👆",
      police_car: "🚓",
      policewoman: "👮&zwj;♀️",
      poodle: "🐩",
      popcorn: "🍿",
      post_office: "🏣",
      postal_horn: "📯",
      postbox: "📮",
      potable_water: "🚰",
      potato: "🥔",
      pouch: "👝",
      poultry_leg: "🍗",
      pound: "💷",
      rage: "😡",
      pouting_cat: "😾",
      pouting_man: "🙎&zwj;♂️",
      pray: "🙏",
      prayer_beads: "📿",
      pregnant_woman: "🤰",
      previous_track_button: "⏮",
      prince: "🤴",
      princess: "👸",
      printer: "🖨",
      purple_heart: "💜",
      purse: "👛",
      pushpin: "📌",
      put_litter_in_its_place: "🚮",
      question: "❓",
      rabbit: "🐰",
      rabbit2: "🐇",
      racehorse: "🐎",
      racing_car: "🏎",
      radio: "📻",
      radio_button: "🔘",
      radioactive: "☢️",
      railway_car: "🚃",
      railway_track: "🛤",
      rainbow: "🌈",
      rainbow_flag: "🏳️&zwj;🌈",
      raised_back_of_hand: "🤚",
      raised_hand_with_fingers_splayed: "🖐",
      raised_hands: "🙌",
      raising_hand_woman: "🙋",
      raising_hand_man: "🙋&zwj;♂️",
      ram: "🐏",
      ramen: "🍜",
      rat: "🐀",
      record_button: "⏺",
      recycle: "♻️",
      red_circle: "🔴",
      registered: "®️",
      relaxed: "☺️",
      relieved: "😌",
      reminder_ribbon: "🎗",
      repeat: "🔁",
      repeat_one: "🔂",
      rescue_worker_helmet: "⛑",
      restroom: "🚻",
      revolving_hearts: "💞",
      rewind: "⏪",
      rhinoceros: "🦏",
      ribbon: "🎀",
      rice: "🍚",
      rice_ball: "🍙",
      rice_cracker: "🍘",
      rice_scene: "🎑",
      right_anger_bubble: "🗯",
      ring: "💍",
      robot: "🤖",
      rocket: "🚀",
      rofl: "🤣",
      roll_eyes: "🙄",
      roller_coaster: "🎢",
      rooster: "🐓",
      rose: "🌹",
      rosette: "🏵",
      rotating_light: "🚨",
      round_pushpin: "📍",
      rowing_man: "🚣",
      rowing_woman: "🚣&zwj;♀️",
      rugby_football: "🏉",
      running_man: "🏃",
      running_shirt_with_sash: "🎽",
      running_woman: "🏃&zwj;♀️",
      sa: "🈂️",
      sagittarius: "♐️",
      sake: "🍶",
      sandal: "👡",
      santa: "🎅",
      satellite: "📡",
      saxophone: "🎷",
      school: "🏫",
      school_satchel: "🎒",
      scissors: "✂️",
      scorpion: "🦂",
      scorpius: "♏️",
      scream: "😱",
      scream_cat: "🙀",
      scroll: "📜",
      seat: "💺",
      secret: "㊙️",
      see_no_evil: "🙈",
      seedling: "🌱",
      selfie: "🤳",
      shallow_pan_of_food: "🥘",
      shamrock: "☘️",
      shark: "🦈",
      shaved_ice: "🍧",
      sheep: "🐑",
      shell: "🐚",
      shield: "🛡",
      shinto_shrine: "⛩",
      ship: "🚢",
      shirt: "👕",
      shopping: "🛍",
      shopping_cart: "🛒",
      shower: "🚿",
      shrimp: "🦐",
      signal_strength: "📶",
      six_pointed_star: "🔯",
      ski: "🎿",
      skier: "⛷",
      skull: "💀",
      skull_and_crossbones: "☠️",
      sleeping: "😴",
      sleeping_bed: "🛌",
      sleepy: "😪",
      slightly_frowning_face: "🙁",
      slightly_smiling_face: "🙂",
      slot_machine: "🎰",
      small_airplane: "🛩",
      small_blue_diamond: "🔹",
      small_orange_diamond: "🔸",
      small_red_triangle: "🔺",
      small_red_triangle_down: "🔻",
      smile: "😄",
      smile_cat: "😸",
      smiley: "😃",
      smiley_cat: "😺",
      smiling_imp: "😈",
      smirk: "😏",
      smirk_cat: "😼",
      smoking: "🚬",
      snail: "🐌",
      snake: "🐍",
      sneezing_face: "🤧",
      snowboarder: "🏂",
      snowflake: "❄️",
      snowman: "⛄️",
      snowman_with_snow: "☃️",
      sob: "😭",
      soccer: "⚽️",
      soon: "🔜",
      sos: "🆘",
      sound: "🔉",
      space_invader: "👾",
      spades: "♠️",
      spaghetti: "🍝",
      sparkle: "❇️",
      sparkler: "🎇",
      sparkles: "✨",
      sparkling_heart: "💖",
      speak_no_evil: "🙊",
      speaker: "🔈",
      speaking_head: "🗣",
      speech_balloon: "💬",
      speedboat: "🚤",
      spider: "🕷",
      spider_web: "🕸",
      spiral_calendar: "🗓",
      spiral_notepad: "🗒",
      spoon: "🥄",
      squid: "🦑",
      stadium: "🏟",
      star: "⭐️",
      star2: "🌟",
      star_and_crescent: "☪️",
      star_of_david: "✡️",
      stars: "🌠",
      station: "🚉",
      statue_of_liberty: "🗽",
      steam_locomotive: "🚂",
      stew: "🍲",
      stop_button: "⏹",
      stop_sign: "🛑",
      stopwatch: "⏱",
      straight_ruler: "📏",
      strawberry: "🍓",
      stuck_out_tongue: "😛",
      stuck_out_tongue_closed_eyes: "😝",
      stuck_out_tongue_winking_eye: "😜",
      studio_microphone: "🎙",
      stuffed_flatbread: "🥙",
      sun_behind_large_cloud: "🌥",
      sun_behind_rain_cloud: "🌦",
      sun_behind_small_cloud: "🌤",
      sun_with_face: "🌞",
      sunflower: "🌻",
      sunglasses: "😎",
      sunny: "☀️",
      sunrise: "🌅",
      sunrise_over_mountains: "🌄",
      surfing_man: "🏄",
      surfing_woman: "🏄&zwj;♀️",
      sushi: "🍣",
      suspension_railway: "🚟",
      sweat: "😓",
      sweat_drops: "💦",
      sweat_smile: "😅",
      sweet_potato: "🍠",
      swimming_man: "🏊",
      swimming_woman: "🏊&zwj;♀️",
      symbols: "🔣",
      synagogue: "🕍",
      syringe: "💉",
      taco: "🌮",
      tada: "🎉",
      tanabata_tree: "🎋",
      taurus: "♉️",
      taxi: "🚕",
      tea: "🍵",
      telephone_receiver: "📞",
      telescope: "🔭",
      tennis: "🎾",
      tent: "⛺️",
      thermometer: "🌡",
      thinking: "🤔",
      thought_balloon: "💭",
      ticket: "🎫",
      tickets: "🎟",
      tiger: "🐯",
      tiger2: "🐅",
      timer_clock: "⏲",
      tipping_hand_man: "💁&zwj;♂️",
      tired_face: "😫",
      tm: "™️",
      toilet: "🚽",
      tokyo_tower: "🗼",
      tomato: "🍅",
      tongue: "👅",
      top: "🔝",
      tophat: "🎩",
      tornado: "🌪",
      trackball: "🖲",
      tractor: "🚜",
      traffic_light: "🚥",
      train: "🚋",
      train2: "🚆",
      tram: "🚊",
      triangular_flag_on_post: "🚩",
      triangular_ruler: "📐",
      trident: "🔱",
      triumph: "😤",
      trolleybus: "🚎",
      trophy: "🏆",
      tropical_drink: "🍹",
      tropical_fish: "🐠",
      truck: "🚚",
      trumpet: "🎺",
      tulip: "🌷",
      tumbler_glass: "🥃",
      turkey: "🦃",
      turtle: "🐢",
      tv: "📺",
      twisted_rightwards_arrows: "🔀",
      two_hearts: "💕",
      two_men_holding_hands: "👬",
      two_women_holding_hands: "👭",
      u5272: "🈹",
      u5408: "🈴",
      u55b6: "🈺",
      u6307: "🈯️",
      u6708: "🈷️",
      u6709: "🈶",
      u6e80: "🈵",
      u7121: "🈚️",
      u7533: "🈸",
      u7981: "🈲",
      u7a7a: "🈳",
      umbrella: "☔️",
      unamused: "😒",
      underage: "🔞",
      unicorn: "🦄",
      unlock: "🔓",
      up: "🆙",
      upside_down_face: "🙃",
      v: "✌️",
      vertical_traffic_light: "🚦",
      vhs: "📼",
      vibration_mode: "📳",
      video_camera: "📹",
      video_game: "🎮",
      violin: "🎻",
      virgo: "♍️",
      volcano: "🌋",
      volleyball: "🏐",
      vs: "🆚",
      vulcan_salute: "🖖",
      walking_man: "🚶",
      walking_woman: "🚶&zwj;♀️",
      waning_crescent_moon: "🌘",
      waning_gibbous_moon: "🌖",
      warning: "⚠️",
      wastebasket: "🗑",
      watch: "⌚️",
      water_buffalo: "🐃",
      watermelon: "🍉",
      wave: "👋",
      wavy_dash: "〰️",
      waxing_crescent_moon: "🌒",
      wc: "🚾",
      weary: "😩",
      wedding: "💒",
      weight_lifting_man: "🏋️",
      weight_lifting_woman: "🏋️&zwj;♀️",
      whale: "🐳",
      whale2: "🐋",
      wheel_of_dharma: "☸️",
      wheelchair: "♿️",
      white_check_mark: "✅",
      white_circle: "⚪️",
      white_flag: "🏳️",
      white_flower: "💮",
      white_large_square: "⬜️",
      white_medium_small_square: "◽️",
      white_medium_square: "◻️",
      white_small_square: "▫️",
      white_square_button: "🔳",
      wilted_flower: "🥀",
      wind_chime: "🎐",
      wind_face: "🌬",
      wine_glass: "🍷",
      wink: "😉",
      wolf: "🐺",
      woman: "👩",
      woman_artist: "👩&zwj;🎨",
      woman_astronaut: "👩&zwj;🚀",
      woman_cartwheeling: "🤸&zwj;♀️",
      woman_cook: "👩&zwj;🍳",
      woman_facepalming: "🤦&zwj;♀️",
      woman_factory_worker: "👩&zwj;🏭",
      woman_farmer: "👩&zwj;🌾",
      woman_firefighter: "👩&zwj;🚒",
      woman_health_worker: "👩&zwj;⚕️",
      woman_judge: "👩&zwj;⚖️",
      woman_juggling: "🤹&zwj;♀️",
      woman_mechanic: "👩&zwj;🔧",
      woman_office_worker: "👩&zwj;💼",
      woman_pilot: "👩&zwj;✈️",
      woman_playing_handball: "🤾&zwj;♀️",
      woman_playing_water_polo: "🤽&zwj;♀️",
      woman_scientist: "👩&zwj;🔬",
      woman_shrugging: "🤷&zwj;♀️",
      woman_singer: "👩&zwj;🎤",
      woman_student: "👩&zwj;🎓",
      woman_teacher: "👩&zwj;🏫",
      woman_technologist: "👩&zwj;💻",
      woman_with_turban: "👳&zwj;♀️",
      womans_clothes: "👚",
      womans_hat: "👒",
      women_wrestling: "🤼&zwj;♀️",
      womens: "🚺",
      world_map: "🗺",
      worried: "😟",
      wrench: "🔧",
      writing_hand: "✍️",
      x: "❌",
      yellow_heart: "💛",
      yen: "💴",
      yin_yang: "☯️",
      yum: "😋",
      zap: "⚡️",
      zipper_mouth_face: "🤐",
      zzz: "💤",
      /* special emojis :P */
      octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
      showdown: `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`
    }, r.Converter = function(i) {
      var u = {}, l = [], g = [], k = {}, w = c, b = {
        parsed: {},
        raw: "",
        format: ""
      };
      C();
      function C() {
        i = i || {};
        for (var x in a)
          a.hasOwnProperty(x) && (u[x] = a[x]);
        if (typeof i == "object")
          for (var B in i)
            i.hasOwnProperty(B) && (u[B] = i[B]);
        else
          throw Error("Converter expects the passed parameter to be an object, but " + typeof i + " was passed instead.");
        u.extensions && r.helper.forEach(u.extensions, L);
      }
      function L(x, B) {
        if (B = B || null, r.helper.isString(x))
          if (x = r.helper.stdExtName(x), B = x, r.extensions[x]) {
            console.warn("DEPRECATION WARNING: " + x + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), D(r.extensions[x], x);
            return;
          } else if (!r.helper.isUndefined(o[x]))
            x = o[x];
          else
            throw Error('Extension "' + x + '" could not be loaded. It was either not found or is not a valid extension.');
        typeof x == "function" && (x = x()), r.helper.isArray(x) || (x = [x]);
        var N = h(x, B);
        if (!N.valid)
          throw Error(N.error);
        for (var z = 0; z < x.length; ++z) {
          switch (x[z].type) {
            case "lang":
              l.push(x[z]);
              break;
            case "output":
              g.push(x[z]);
              break;
          }
          if (x[z].hasOwnProperty("listeners"))
            for (var O in x[z].listeners)
              x[z].listeners.hasOwnProperty(O) && I(O, x[z].listeners[O]);
        }
      }
      function D(x, B) {
        typeof x == "function" && (x = x(new r.Converter())), r.helper.isArray(x) || (x = [x]);
        var N = h(x, B);
        if (!N.valid)
          throw Error(N.error);
        for (var z = 0; z < x.length; ++z)
          switch (x[z].type) {
            case "lang":
              l.push(x[z]);
              break;
            case "output":
              g.push(x[z]);
              break;
            default:
              throw Error("Extension loader error: Type unrecognized!!!");
          }
      }
      function I(x, B) {
        if (!r.helper.isString(x))
          throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof x + " given");
        if (typeof B != "function")
          throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof B + " given");
        k.hasOwnProperty(x) || (k[x] = []), k[x].push(B);
      }
      function j(x) {
        var B = x.match(/^\s*/)[0].length, N = new RegExp("^\\s{0," + B + "}", "gm");
        return x.replace(N, "");
      }
      this._dispatch = function(B, N, z, O) {
        if (k.hasOwnProperty(B))
          for (var M = 0; M < k[B].length; ++M) {
            var U = k[B][M](B, N, this, z, O);
            U && typeof U < "u" && (N = U);
          }
        return N;
      }, this.listen = function(x, B) {
        return I(x, B), this;
      }, this.makeHtml = function(x) {
        if (!x)
          return x;
        var B = {
          gHtmlBlocks: [],
          gHtmlMdBlocks: [],
          gHtmlSpans: [],
          gUrls: {},
          gTitles: {},
          gDimensions: {},
          gListLevel: 0,
          hashLinkCounts: {},
          langExtensions: l,
          outputModifiers: g,
          converter: this,
          ghCodeBlocks: [],
          metadata: {
            parsed: {},
            raw: "",
            format: ""
          }
        };
        return x = x.replace(/¨/g, "¨T"), x = x.replace(/\$/g, "¨D"), x = x.replace(/\r\n/g, `
`), x = x.replace(/\r/g, `
`), x = x.replace(/\u00A0/g, "&nbsp;"), u.smartIndentationFix && (x = j(x)), x = `

` + x + `

`, x = r.subParser("detab")(x, u, B), x = x.replace(/^[ \t]+$/mg, ""), r.helper.forEach(l, function(N) {
          x = r.subParser("runExtension")(N, x, u, B);
        }), x = r.subParser("metadata")(x, u, B), x = r.subParser("hashPreCodeTags")(x, u, B), x = r.subParser("githubCodeBlocks")(x, u, B), x = r.subParser("hashHTMLBlocks")(x, u, B), x = r.subParser("hashCodeTags")(x, u, B), x = r.subParser("stripLinkDefinitions")(x, u, B), x = r.subParser("blockGamut")(x, u, B), x = r.subParser("unhashHTMLSpans")(x, u, B), x = r.subParser("unescapeSpecialChars")(x, u, B), x = x.replace(/¨D/g, "$$"), x = x.replace(/¨T/g, "¨"), x = r.subParser("completeHTMLDocument")(x, u, B), r.helper.forEach(g, function(N) {
          x = r.subParser("runExtension")(N, x, u, B);
        }), b = B.metadata, x;
      }, this.makeMarkdown = this.makeMd = function(x, B) {
        if (x = x.replace(/\r\n/g, `
`), x = x.replace(/\r/g, `
`), x = x.replace(/>[ \t]+</, ">¨NBSP;<"), !B)
          if (window && window.document)
            B = window.document;
          else
            throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
        var N = B.createElement("div");
        N.innerHTML = x;
        var z = {
          preList: Q(N)
        };
        Y(N);
        for (var O = N.childNodes, M = "", U = 0; U < O.length; U++)
          M += r.subParser("makeMarkdown.node")(O[U], z);
        function Y(J) {
          for (var W = 0; W < J.childNodes.length; ++W) {
            var Z = J.childNodes[W];
            Z.nodeType === 3 ? /\S/.test(Z.nodeValue) ? (Z.nodeValue = Z.nodeValue.split(`
`).join(" "), Z.nodeValue = Z.nodeValue.replace(/(\s)+/g, "$1")) : (J.removeChild(Z), --W) : Z.nodeType === 1 && Y(Z);
          }
        }
        function Q(J) {
          for (var W = J.querySelectorAll("pre"), Z = [], K = 0; K < W.length; ++K)
            if (W[K].childElementCount === 1 && W[K].firstChild.tagName.toLowerCase() === "code") {
              var ae = W[K].firstChild.innerHTML.trim(), ne = W[K].firstChild.getAttribute("data-language") || "";
              if (ne === "")
                for (var Se = W[K].firstChild.className.split(" "), F = 0; F < Se.length; ++F) {
                  var Re = Se[F].match(/^language-(.+)$/);
                  if (Re !== null) {
                    ne = Re[1];
                    break;
                  }
                }
              ae = r.helper.unescapeHTMLEntities(ae), Z.push(ae), W[K].outerHTML = '<precode language="' + ne + '" precodenum="' + K.toString() + '"></precode>';
            } else
              Z.push(W[K].innerHTML), W[K].innerHTML = "", W[K].setAttribute("prenum", K.toString());
          return Z;
        }
        return M;
      }, this.setOption = function(x, B) {
        u[x] = B;
      }, this.getOption = function(x) {
        return u[x];
      }, this.getOptions = function() {
        return u;
      }, this.addExtension = function(x, B) {
        B = B || null, L(x, B);
      }, this.useExtension = function(x) {
        L(x);
      }, this.setFlavor = function(x) {
        if (!p.hasOwnProperty(x))
          throw Error(x + " flavor was not found");
        var B = p[x];
        w = x;
        for (var N in B)
          B.hasOwnProperty(N) && (u[N] = B[N]);
      }, this.getFlavor = function() {
        return w;
      }, this.removeExtension = function(x) {
        r.helper.isArray(x) || (x = [x]);
        for (var B = 0; B < x.length; ++B) {
          for (var N = x[B], z = 0; z < l.length; ++z)
            l[z] === N && l[z].splice(z, 1);
          for (var O = 0; O < g.length; ++z)
            g[O] === N && g[O].splice(z, 1);
        }
      }, this.getAllExtensions = function() {
        return {
          language: l,
          output: g
        };
      }, this.getMetadata = function(x) {
        return x ? b.raw : b.parsed;
      }, this.getMetadataFormat = function() {
        return b.format;
      }, this._setMetadataPair = function(x, B) {
        b.parsed[x] = B;
      }, this._setMetadataFormat = function(x) {
        b.format = x;
      }, this._setMetadataRaw = function(x) {
        b.raw = x;
      };
    }, r.subParser("anchors", function(i, u, l) {
      i = l.converter._dispatch("anchors.before", i, u, l);
      var g = function(k, w, b, C, L, D, I) {
        if (r.helper.isUndefined(I) && (I = ""), b = b.toLowerCase(), k.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          C = "";
        else if (!C)
          if (b || (b = w.toLowerCase().replace(/ ?\n/g, " ")), C = "#" + b, !r.helper.isUndefined(l.gUrls[b]))
            C = l.gUrls[b], r.helper.isUndefined(l.gTitles[b]) || (I = l.gTitles[b]);
          else
            return k;
        C = C.replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback);
        var j = '<a href="' + C + '"';
        return I !== "" && I !== null && (I = I.replace(/"/g, "&quot;"), I = I.replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback), j += ' title="' + I + '"'), u.openLinksInNewWindow && !/^#/.test(C) && (j += ' rel="noopener noreferrer" target="¨E95Eblank"'), j += ">" + w + "</a>", j;
      };
      return i = i.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, g), i = i.replace(
        /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
        g
      ), i = i.replace(
        /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
        g
      ), i = i.replace(/\[([^\[\]]+)]()()()()()/g, g), u.ghMentions && (i = i.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(k, w, b, C, L) {
        if (b === "\\")
          return w + C;
        if (!r.helper.isString(u.ghMentionsLink))
          throw new Error("ghMentionsLink option must be a string");
        var D = u.ghMentionsLink.replace(/\{u}/g, L), I = "";
        return u.openLinksInNewWindow && (I = ' rel="noopener noreferrer" target="¨E95Eblank"'), w + '<a href="' + D + '"' + I + ">" + C + "</a>";
      })), i = l.converter._dispatch("anchors.after", i, u, l), i;
    });
    var m = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, y = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, v = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, S = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, T = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, R = function(i) {
      return function(u, l, g, k, w, b, C) {
        g = g.replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback);
        var L = g, D = "", I = "", j = l || "", x = C || "";
        return /^www\./i.test(g) && (g = g.replace(/^www\./i, "http://www.")), i.excludeTrailingPunctuationFromURLs && b && (D = b), i.openLinksInNewWindow && (I = ' rel="noopener noreferrer" target="¨E95Eblank"'), j + '<a href="' + g + '"' + I + ">" + L + "</a>" + D + x;
      };
    }, E = function(i, u) {
      return function(l, g, k) {
        var w = "mailto:";
        return g = g || "", k = r.subParser("unescapeSpecialChars")(k, i, u), i.encodeEmails ? (w = r.helper.encodeEmailAddress(w + k), k = r.helper.encodeEmailAddress(k)) : w = w + k, g + '<a href="' + w + '">' + k + "</a>";
      };
    };
    r.subParser("autoLinks", function(i, u, l) {
      return i = l.converter._dispatch("autoLinks.before", i, u, l), i = i.replace(v, R(u)), i = i.replace(T, E(u, l)), i = l.converter._dispatch("autoLinks.after", i, u, l), i;
    }), r.subParser("simplifiedAutoLinks", function(i, u, l) {
      return u.simplifiedAutoLink && (i = l.converter._dispatch("simplifiedAutoLinks.before", i, u, l), u.excludeTrailingPunctuationFromURLs ? i = i.replace(y, R(u)) : i = i.replace(m, R(u)), i = i.replace(S, E(u, l)), i = l.converter._dispatch("simplifiedAutoLinks.after", i, u, l)), i;
    }), r.subParser("blockGamut", function(i, u, l) {
      return i = l.converter._dispatch("blockGamut.before", i, u, l), i = r.subParser("blockQuotes")(i, u, l), i = r.subParser("headers")(i, u, l), i = r.subParser("horizontalRule")(i, u, l), i = r.subParser("lists")(i, u, l), i = r.subParser("codeBlocks")(i, u, l), i = r.subParser("tables")(i, u, l), i = r.subParser("hashHTMLBlocks")(i, u, l), i = r.subParser("paragraphs")(i, u, l), i = l.converter._dispatch("blockGamut.after", i, u, l), i;
    }), r.subParser("blockQuotes", function(i, u, l) {
      i = l.converter._dispatch("blockQuotes.before", i, u, l), i = i + `

`;
      var g = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
      return u.splitAdjacentBlockquotes && (g = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), i = i.replace(g, function(k) {
        return k = k.replace(/^[ \t]*>[ \t]?/gm, ""), k = k.replace(/¨0/g, ""), k = k.replace(/^[ \t]+$/gm, ""), k = r.subParser("githubCodeBlocks")(k, u, l), k = r.subParser("blockGamut")(k, u, l), k = k.replace(/(^|\n)/g, "$1  "), k = k.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(w, b) {
          var C = b;
          return C = C.replace(/^  /mg, "¨0"), C = C.replace(/¨0/g, ""), C;
        }), r.subParser("hashBlock")(`<blockquote>
` + k + `
</blockquote>`, u, l);
      }), i = l.converter._dispatch("blockQuotes.after", i, u, l), i;
    }), r.subParser("codeBlocks", function(i, u, l) {
      i = l.converter._dispatch("codeBlocks.before", i, u, l), i += "¨0";
      var g = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
      return i = i.replace(g, function(k, w, b) {
        var C = w, L = b, D = `
`;
        return C = r.subParser("outdent")(C, u, l), C = r.subParser("encodeCode")(C, u, l), C = r.subParser("detab")(C, u, l), C = C.replace(/^\n+/g, ""), C = C.replace(/\n+$/g, ""), u.omitExtraWLInCodeBlocks && (D = ""), C = "<pre><code>" + C + D + "</code></pre>", r.subParser("hashBlock")(C, u, l) + L;
      }), i = i.replace(/¨0/, ""), i = l.converter._dispatch("codeBlocks.after", i, u, l), i;
    }), r.subParser("codeSpans", function(i, u, l) {
      return i = l.converter._dispatch("codeSpans.before", i, u, l), typeof i > "u" && (i = ""), i = i.replace(
        /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
        function(g, k, w, b) {
          var C = b;
          return C = C.replace(/^([ \t]*)/g, ""), C = C.replace(/[ \t]*$/g, ""), C = r.subParser("encodeCode")(C, u, l), C = k + "<code>" + C + "</code>", C = r.subParser("hashHTMLSpans")(C, u, l), C;
        }
      ), i = l.converter._dispatch("codeSpans.after", i, u, l), i;
    }), r.subParser("completeHTMLDocument", function(i, u, l) {
      if (!u.completeHTMLDocument)
        return i;
      i = l.converter._dispatch("completeHTMLDocument.before", i, u, l);
      var g = "html", k = `<!DOCTYPE HTML>
`, w = "", b = `<meta charset="utf-8">
`, C = "", L = "";
      typeof l.metadata.parsed.doctype < "u" && (k = "<!DOCTYPE " + l.metadata.parsed.doctype + `>
`, g = l.metadata.parsed.doctype.toString().toLowerCase(), (g === "html" || g === "html5") && (b = '<meta charset="utf-8">'));
      for (var D in l.metadata.parsed)
        if (l.metadata.parsed.hasOwnProperty(D))
          switch (D.toLowerCase()) {
            case "doctype":
              break;
            case "title":
              w = "<title>" + l.metadata.parsed.title + `</title>
`;
              break;
            case "charset":
              g === "html" || g === "html5" ? b = '<meta charset="' + l.metadata.parsed.charset + `">
` : b = '<meta name="charset" content="' + l.metadata.parsed.charset + `">
`;
              break;
            case "language":
            case "lang":
              C = ' lang="' + l.metadata.parsed[D] + '"', L += '<meta name="' + D + '" content="' + l.metadata.parsed[D] + `">
`;
              break;
            default:
              L += '<meta name="' + D + '" content="' + l.metadata.parsed[D] + `">
`;
          }
      return i = k + "<html" + C + `>
<head>
` + w + b + L + `</head>
<body>
` + i.trim() + `
</body>
</html>`, i = l.converter._dispatch("completeHTMLDocument.after", i, u, l), i;
    }), r.subParser("detab", function(i, u, l) {
      return i = l.converter._dispatch("detab.before", i, u, l), i = i.replace(/\t(?=\t)/g, "    "), i = i.replace(/\t/g, "¨A¨B"), i = i.replace(/¨B(.+?)¨A/g, function(g, k) {
        for (var w = k, b = 4 - w.length % 4, C = 0; C < b; C++)
          w += " ";
        return w;
      }), i = i.replace(/¨A/g, "    "), i = i.replace(/¨B/g, ""), i = l.converter._dispatch("detab.after", i, u, l), i;
    }), r.subParser("ellipsis", function(i, u, l) {
      return i = l.converter._dispatch("ellipsis.before", i, u, l), i = i.replace(/\.\.\./g, "…"), i = l.converter._dispatch("ellipsis.after", i, u, l), i;
    }), r.subParser("emoji", function(i, u, l) {
      if (!u.emoji)
        return i;
      i = l.converter._dispatch("emoji.before", i, u, l);
      var g = /:([\S]+?):/g;
      return i = i.replace(g, function(k, w) {
        return r.helper.emojis.hasOwnProperty(w) ? r.helper.emojis[w] : k;
      }), i = l.converter._dispatch("emoji.after", i, u, l), i;
    }), r.subParser("encodeAmpsAndAngles", function(i, u, l) {
      return i = l.converter._dispatch("encodeAmpsAndAngles.before", i, u, l), i = i.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), i = i.replace(/<(?![a-z\/?$!])/gi, "&lt;"), i = i.replace(/</g, "&lt;"), i = i.replace(/>/g, "&gt;"), i = l.converter._dispatch("encodeAmpsAndAngles.after", i, u, l), i;
    }), r.subParser("encodeBackslashEscapes", function(i, u, l) {
      return i = l.converter._dispatch("encodeBackslashEscapes.before", i, u, l), i = i.replace(/\\(\\)/g, r.helper.escapeCharactersCallback), i = i.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, r.helper.escapeCharactersCallback), i = l.converter._dispatch("encodeBackslashEscapes.after", i, u, l), i;
    }), r.subParser("encodeCode", function(i, u, l) {
      return i = l.converter._dispatch("encodeCode.before", i, u, l), i = i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, r.helper.escapeCharactersCallback), i = l.converter._dispatch("encodeCode.after", i, u, l), i;
    }), r.subParser("escapeSpecialCharsWithinTagAttributes", function(i, u, l) {
      i = l.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", i, u, l);
      var g = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, k = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
      return i = i.replace(g, function(w) {
        return w.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, r.helper.escapeCharactersCallback);
      }), i = i.replace(k, function(w) {
        return w.replace(/([\\`*_~=|])/g, r.helper.escapeCharactersCallback);
      }), i = l.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", i, u, l), i;
    }), r.subParser("githubCodeBlocks", function(i, u, l) {
      return u.ghCodeBlocks ? (i = l.converter._dispatch("githubCodeBlocks.before", i, u, l), i += "¨0", i = i.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(g, k, w, b) {
        var C = u.omitExtraWLInCodeBlocks ? "" : `
`;
        return b = r.subParser("encodeCode")(b, u, l), b = r.subParser("detab")(b, u, l), b = b.replace(/^\n+/g, ""), b = b.replace(/\n+$/g, ""), b = "<pre><code" + (w ? ' class="' + w + " language-" + w + '"' : "") + ">" + b + C + "</code></pre>", b = r.subParser("hashBlock")(b, u, l), `

¨G` + (l.ghCodeBlocks.push({ text: g, codeblock: b }) - 1) + `G

`;
      }), i = i.replace(/¨0/, ""), l.converter._dispatch("githubCodeBlocks.after", i, u, l)) : i;
    }), r.subParser("hashBlock", function(i, u, l) {
      return i = l.converter._dispatch("hashBlock.before", i, u, l), i = i.replace(/(^\n+|\n+$)/g, ""), i = `

¨K` + (l.gHtmlBlocks.push(i) - 1) + `K

`, i = l.converter._dispatch("hashBlock.after", i, u, l), i;
    }), r.subParser("hashCodeTags", function(i, u, l) {
      i = l.converter._dispatch("hashCodeTags.before", i, u, l);
      var g = function(k, w, b, C) {
        var L = b + r.subParser("encodeCode")(w, u, l) + C;
        return "¨C" + (l.gHtmlSpans.push(L) - 1) + "C";
      };
      return i = r.helper.replaceRecursiveRegExp(i, g, "<code\\b[^>]*>", "</code>", "gim"), i = l.converter._dispatch("hashCodeTags.after", i, u, l), i;
    }), r.subParser("hashElement", function(i, u, l) {
      return function(g, k) {
        var w = k;
        return w = w.replace(/\n\n/g, `
`), w = w.replace(/^\n/, ""), w = w.replace(/\n+$/g, ""), w = `

¨K` + (l.gHtmlBlocks.push(w) - 1) + `K

`, w;
      };
    }), r.subParser("hashHTMLBlocks", function(i, u, l) {
      i = l.converter._dispatch("hashHTMLBlocks.before", i, u, l);
      var g = [
        "pre",
        "div",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "blockquote",
        "table",
        "dl",
        "ol",
        "ul",
        "script",
        "noscript",
        "form",
        "fieldset",
        "iframe",
        "math",
        "style",
        "section",
        "header",
        "footer",
        "nav",
        "article",
        "aside",
        "address",
        "audio",
        "canvas",
        "figure",
        "hgroup",
        "output",
        "video",
        "p"
      ], k = function(x, B, N, z) {
        var O = x;
        return N.search(/\bmarkdown\b/) !== -1 && (O = N + l.converter.makeHtml(B) + z), `

¨K` + (l.gHtmlBlocks.push(O) - 1) + `K

`;
      };
      u.backslashEscapesHTMLTags && (i = i.replace(/\\<(\/?[^>]+?)>/g, function(x, B) {
        return "&lt;" + B + "&gt;";
      }));
      for (var w = 0; w < g.length; ++w)
        for (var b, C = new RegExp("^ {0,3}(<" + g[w] + "\\b[^>]*>)", "im"), L = "<" + g[w] + "\\b[^>]*>", D = "</" + g[w] + ">"; (b = r.helper.regexIndexOf(i, C)) !== -1; ) {
          var I = r.helper.splitAtIndex(i, b), j = r.helper.replaceRecursiveRegExp(I[1], k, L, D, "im");
          if (j === I[1])
            break;
          i = I[0].concat(j);
        }
      return i = i.replace(
        /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
        r.subParser("hashElement")(i, u, l)
      ), i = r.helper.replaceRecursiveRegExp(i, function(x) {
        return `

¨K` + (l.gHtmlBlocks.push(x) - 1) + `K

`;
      }, "^ {0,3}<!--", "-->", "gm"), i = i.replace(
        /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
        r.subParser("hashElement")(i, u, l)
      ), i = l.converter._dispatch("hashHTMLBlocks.after", i, u, l), i;
    }), r.subParser("hashHTMLSpans", function(i, u, l) {
      i = l.converter._dispatch("hashHTMLSpans.before", i, u, l);
      function g(k) {
        return "¨C" + (l.gHtmlSpans.push(k) - 1) + "C";
      }
      return i = i.replace(/<[^>]+?\/>/gi, function(k) {
        return g(k);
      }), i = i.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(k) {
        return g(k);
      }), i = i.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(k) {
        return g(k);
      }), i = i.replace(/<[^>]+?>/gi, function(k) {
        return g(k);
      }), i = l.converter._dispatch("hashHTMLSpans.after", i, u, l), i;
    }), r.subParser("unhashHTMLSpans", function(i, u, l) {
      i = l.converter._dispatch("unhashHTMLSpans.before", i, u, l);
      for (var g = 0; g < l.gHtmlSpans.length; ++g) {
        for (var k = l.gHtmlSpans[g], w = 0; /¨C(\d+)C/.test(k); ) {
          var b = RegExp.$1;
          if (k = k.replace("¨C" + b + "C", l.gHtmlSpans[b]), w === 10) {
            console.error("maximum nesting of 10 spans reached!!!");
            break;
          }
          ++w;
        }
        i = i.replace("¨C" + g + "C", k);
      }
      return i = l.converter._dispatch("unhashHTMLSpans.after", i, u, l), i;
    }), r.subParser("hashPreCodeTags", function(i, u, l) {
      i = l.converter._dispatch("hashPreCodeTags.before", i, u, l);
      var g = function(k, w, b, C) {
        var L = b + r.subParser("encodeCode")(w, u, l) + C;
        return `

¨G` + (l.ghCodeBlocks.push({ text: k, codeblock: L }) - 1) + `G

`;
      };
      return i = r.helper.replaceRecursiveRegExp(i, g, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), i = l.converter._dispatch("hashPreCodeTags.after", i, u, l), i;
    }), r.subParser("headers", function(i, u, l) {
      i = l.converter._dispatch("headers.before", i, u, l);
      var g = isNaN(parseInt(u.headerLevelStart)) ? 1 : parseInt(u.headerLevelStart), k = u.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, w = u.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
      i = i.replace(k, function(L, D) {
        var I = r.subParser("spanGamut")(D, u, l), j = u.noHeaderId ? "" : ' id="' + C(D) + '"', x = g, B = "<h" + x + j + ">" + I + "</h" + x + ">";
        return r.subParser("hashBlock")(B, u, l);
      }), i = i.replace(w, function(L, D) {
        var I = r.subParser("spanGamut")(D, u, l), j = u.noHeaderId ? "" : ' id="' + C(D) + '"', x = g + 1, B = "<h" + x + j + ">" + I + "</h" + x + ">";
        return r.subParser("hashBlock")(B, u, l);
      });
      var b = u.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
      i = i.replace(b, function(L, D, I) {
        var j = I;
        u.customizedHeaderId && (j = I.replace(/\s?\{([^{]+?)}\s*$/, ""));
        var x = r.subParser("spanGamut")(j, u, l), B = u.noHeaderId ? "" : ' id="' + C(I) + '"', N = g - 1 + D.length, z = "<h" + N + B + ">" + x + "</h" + N + ">";
        return r.subParser("hashBlock")(z, u, l);
      });
      function C(L) {
        var D, I;
        if (u.customizedHeaderId) {
          var j = L.match(/\{([^{]+?)}\s*$/);
          j && j[1] && (L = j[1]);
        }
        return D = L, r.helper.isString(u.prefixHeaderId) ? I = u.prefixHeaderId : u.prefixHeaderId === !0 ? I = "section-" : I = "", u.rawPrefixHeaderId || (D = I + D), u.ghCompatibleHeaderId ? D = D.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : u.rawHeaderId ? D = D.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : D = D.replace(/[^\w]/g, "").toLowerCase(), u.rawPrefixHeaderId && (D = I + D), l.hashLinkCounts[D] ? D = D + "-" + l.hashLinkCounts[D]++ : l.hashLinkCounts[D] = 1, D;
      }
      return i = l.converter._dispatch("headers.after", i, u, l), i;
    }), r.subParser("horizontalRule", function(i, u, l) {
      i = l.converter._dispatch("horizontalRule.before", i, u, l);
      var g = r.subParser("hashBlock")("<hr />", u, l);
      return i = i.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, g), i = i.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, g), i = i.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, g), i = l.converter._dispatch("horizontalRule.after", i, u, l), i;
    }), r.subParser("images", function(i, u, l) {
      i = l.converter._dispatch("images.before", i, u, l);
      var g = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, k = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, w = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, b = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, C = /!\[([^\[\]]+)]()()()()()/g;
      function L(I, j, x, B, N, z, O, M) {
        return B = B.replace(/\s/g, ""), D(I, j, x, B, N, z, O, M);
      }
      function D(I, j, x, B, N, z, O, M) {
        var U = l.gUrls, Y = l.gTitles, Q = l.gDimensions;
        if (x = x.toLowerCase(), M || (M = ""), I.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          B = "";
        else if (B === "" || B === null)
          if ((x === "" || x === null) && (x = j.toLowerCase().replace(/ ?\n/g, " ")), B = "#" + x, !r.helper.isUndefined(U[x]))
            B = U[x], r.helper.isUndefined(Y[x]) || (M = Y[x]), r.helper.isUndefined(Q[x]) || (N = Q[x].width, z = Q[x].height);
          else
            return I;
        j = j.replace(/"/g, "&quot;").replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback), B = B.replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback);
        var J = '<img src="' + B + '" alt="' + j + '"';
        return M && r.helper.isString(M) && (M = M.replace(/"/g, "&quot;").replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback), J += ' title="' + M + '"'), N && z && (N = N === "*" ? "auto" : N, z = z === "*" ? "auto" : z, J += ' width="' + N + '"', J += ' height="' + z + '"'), J += " />", J;
      }
      return i = i.replace(b, D), i = i.replace(w, L), i = i.replace(k, D), i = i.replace(g, D), i = i.replace(C, D), i = l.converter._dispatch("images.after", i, u, l), i;
    }), r.subParser("italicsAndBold", function(i, u, l) {
      i = l.converter._dispatch("italicsAndBold.before", i, u, l);
      function g(k, w, b) {
        return w + k + b;
      }
      return u.literalMidWordUnderscores ? (i = i.replace(/\b___(\S[\s\S]*?)___\b/g, function(k, w) {
        return g(w, "<strong><em>", "</em></strong>");
      }), i = i.replace(/\b__(\S[\s\S]*?)__\b/g, function(k, w) {
        return g(w, "<strong>", "</strong>");
      }), i = i.replace(/\b_(\S[\s\S]*?)_\b/g, function(k, w) {
        return g(w, "<em>", "</em>");
      })) : (i = i.replace(/___(\S[\s\S]*?)___/g, function(k, w) {
        return /\S$/.test(w) ? g(w, "<strong><em>", "</em></strong>") : k;
      }), i = i.replace(/__(\S[\s\S]*?)__/g, function(k, w) {
        return /\S$/.test(w) ? g(w, "<strong>", "</strong>") : k;
      }), i = i.replace(/_([^\s_][\s\S]*?)_/g, function(k, w) {
        return /\S$/.test(w) ? g(w, "<em>", "</em>") : k;
      })), u.literalMidWordAsterisks ? (i = i.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(k, w, b) {
        return g(b, w + "<strong><em>", "</em></strong>");
      }), i = i.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(k, w, b) {
        return g(b, w + "<strong>", "</strong>");
      }), i = i.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(k, w, b) {
        return g(b, w + "<em>", "</em>");
      })) : (i = i.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(k, w) {
        return /\S$/.test(w) ? g(w, "<strong><em>", "</em></strong>") : k;
      }), i = i.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(k, w) {
        return /\S$/.test(w) ? g(w, "<strong>", "</strong>") : k;
      }), i = i.replace(/\*([^\s*][\s\S]*?)\*/g, function(k, w) {
        return /\S$/.test(w) ? g(w, "<em>", "</em>") : k;
      })), i = l.converter._dispatch("italicsAndBold.after", i, u, l), i;
    }), r.subParser("lists", function(i, u, l) {
      function g(b, C) {
        l.gListLevel++, b = b.replace(/\n{2,}$/, `
`), b += "¨0";
        var L = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, D = /\n[ \t]*\n(?!¨0)/.test(b);
        return u.disableForced4SpacesIndentedSublists && (L = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), b = b.replace(L, function(I, j, x, B, N, z, O) {
          O = O && O.trim() !== "";
          var M = r.subParser("outdent")(N, u, l), U = "";
          return z && u.tasklists && (U = ' class="task-list-item" style="list-style-type: none;"', M = M.replace(/^[ \t]*\[(x|X| )?]/m, function() {
            var Y = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
            return O && (Y += " checked"), Y += ">", Y;
          })), M = M.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(Y) {
            return "¨A" + Y;
          }), j || M.search(/\n{2,}/) > -1 ? (M = r.subParser("githubCodeBlocks")(M, u, l), M = r.subParser("blockGamut")(M, u, l)) : (M = r.subParser("lists")(M, u, l), M = M.replace(/\n$/, ""), M = r.subParser("hashHTMLBlocks")(M, u, l), M = M.replace(/\n\n+/g, `

`), D ? M = r.subParser("paragraphs")(M, u, l) : M = r.subParser("spanGamut")(M, u, l)), M = M.replace("¨A", ""), M = "<li" + U + ">" + M + `</li>
`, M;
        }), b = b.replace(/¨0/g, ""), l.gListLevel--, C && (b = b.replace(/\s+$/, "")), b;
      }
      function k(b, C) {
        if (C === "ol") {
          var L = b.match(/^ *(\d+)\./);
          if (L && L[1] !== "1")
            return ' start="' + L[1] + '"';
        }
        return "";
      }
      function w(b, C, L) {
        var D = u.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, I = u.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, j = C === "ul" ? D : I, x = "";
        if (b.search(j) !== -1)
          (function N(z) {
            var O = z.search(j), M = k(b, C);
            O !== -1 ? (x += `

<` + C + M + `>
` + g(z.slice(0, O), !!L) + "</" + C + `>
`, C = C === "ul" ? "ol" : "ul", j = C === "ul" ? D : I, N(z.slice(O))) : x += `

<` + C + M + `>
` + g(z, !!L) + "</" + C + `>
`;
          })(b);
        else {
          var B = k(b, C);
          x = `

<` + C + B + `>
` + g(b, !!L) + "</" + C + `>
`;
        }
        return x;
      }
      return i = l.converter._dispatch("lists.before", i, u, l), i += "¨0", l.gListLevel ? i = i.replace(
        /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
        function(b, C, L) {
          var D = L.search(/[*+-]/g) > -1 ? "ul" : "ol";
          return w(C, D, !0);
        }
      ) : i = i.replace(
        /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
        function(b, C, L, D) {
          var I = D.search(/[*+-]/g) > -1 ? "ul" : "ol";
          return w(L, I, !1);
        }
      ), i = i.replace(/¨0/, ""), i = l.converter._dispatch("lists.after", i, u, l), i;
    }), r.subParser("metadata", function(i, u, l) {
      if (!u.metadata)
        return i;
      i = l.converter._dispatch("metadata.before", i, u, l);
      function g(k) {
        l.metadata.raw = k, k = k.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), k = k.replace(/\n {4}/g, " "), k.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(w, b, C) {
          return l.metadata.parsed[b] = C, "";
        });
      }
      return i = i.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(k, w, b) {
        return g(b), "¨M";
      }), i = i.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(k, w, b) {
        return w && (l.metadata.format = w), g(b), "¨M";
      }), i = i.replace(/¨M/g, ""), i = l.converter._dispatch("metadata.after", i, u, l), i;
    }), r.subParser("outdent", function(i, u, l) {
      return i = l.converter._dispatch("outdent.before", i, u, l), i = i.replace(/^(\t|[ ]{1,4})/gm, "¨0"), i = i.replace(/¨0/g, ""), i = l.converter._dispatch("outdent.after", i, u, l), i;
    }), r.subParser("paragraphs", function(i, u, l) {
      i = l.converter._dispatch("paragraphs.before", i, u, l), i = i.replace(/^\n+/g, ""), i = i.replace(/\n+$/g, "");
      for (var g = i.split(/\n{2,}/g), k = [], w = g.length, b = 0; b < w; b++) {
        var C = g[b];
        C.search(/¨(K|G)(\d+)\1/g) >= 0 ? k.push(C) : C.search(/\S/) >= 0 && (C = r.subParser("spanGamut")(C, u, l), C = C.replace(/^([ \t]*)/g, "<p>"), C += "</p>", k.push(C));
      }
      for (w = k.length, b = 0; b < w; b++) {
        for (var L = "", D = k[b], I = !1; /¨(K|G)(\d+)\1/.test(D); ) {
          var j = RegExp.$1, x = RegExp.$2;
          j === "K" ? L = l.gHtmlBlocks[x] : I ? L = r.subParser("encodeCode")(l.ghCodeBlocks[x].text, u, l) : L = l.ghCodeBlocks[x].codeblock, L = L.replace(/\$/g, "$$$$"), D = D.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, L), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(D) && (I = !0);
        }
        k[b] = D;
      }
      return i = k.join(`
`), i = i.replace(/^\n+/g, ""), i = i.replace(/\n+$/g, ""), l.converter._dispatch("paragraphs.after", i, u, l);
    }), r.subParser("runExtension", function(i, u, l, g) {
      if (i.filter)
        u = i.filter(u, g.converter, l);
      else if (i.regex) {
        var k = i.regex;
        k instanceof RegExp || (k = new RegExp(k, "g")), u = u.replace(k, i.replace);
      }
      return u;
    }), r.subParser("spanGamut", function(i, u, l) {
      return i = l.converter._dispatch("spanGamut.before", i, u, l), i = r.subParser("codeSpans")(i, u, l), i = r.subParser("escapeSpecialCharsWithinTagAttributes")(i, u, l), i = r.subParser("encodeBackslashEscapes")(i, u, l), i = r.subParser("images")(i, u, l), i = r.subParser("anchors")(i, u, l), i = r.subParser("autoLinks")(i, u, l), i = r.subParser("simplifiedAutoLinks")(i, u, l), i = r.subParser("emoji")(i, u, l), i = r.subParser("underline")(i, u, l), i = r.subParser("italicsAndBold")(i, u, l), i = r.subParser("strikethrough")(i, u, l), i = r.subParser("ellipsis")(i, u, l), i = r.subParser("hashHTMLSpans")(i, u, l), i = r.subParser("encodeAmpsAndAngles")(i, u, l), u.simpleLineBreaks ? /\n\n¨K/.test(i) || (i = i.replace(/\n+/g, `<br />
`)) : i = i.replace(/  +\n/g, `<br />
`), i = l.converter._dispatch("spanGamut.after", i, u, l), i;
    }), r.subParser("strikethrough", function(i, u, l) {
      function g(k) {
        return u.simplifiedAutoLink && (k = r.subParser("simplifiedAutoLinks")(k, u, l)), "<del>" + k + "</del>";
      }
      return u.strikethrough && (i = l.converter._dispatch("strikethrough.before", i, u, l), i = i.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(k, w) {
        return g(w);
      }), i = l.converter._dispatch("strikethrough.after", i, u, l)), i;
    }), r.subParser("stripLinkDefinitions", function(i, u, l) {
      var g = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, k = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
      i += "¨0";
      var w = function(b, C, L, D, I, j, x) {
        return C = C.toLowerCase(), L.match(/^data:.+?\/.+?;base64,/) ? l.gUrls[C] = L.replace(/\s/g, "") : l.gUrls[C] = r.subParser("encodeAmpsAndAngles")(L, u, l), j ? j + x : (x && (l.gTitles[C] = x.replace(/"|'/g, "&quot;")), u.parseImgDimensions && D && I && (l.gDimensions[C] = {
          width: D,
          height: I
        }), "");
      };
      return i = i.replace(k, w), i = i.replace(g, w), i = i.replace(/¨0/, ""), i;
    }), r.subParser("tables", function(i, u, l) {
      if (!u.tables)
        return i;
      var g = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, k = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
      function w(I) {
        return /^:[ \t]*--*$/.test(I) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(I) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(I) ? ' style="text-align:center;"' : "";
      }
      function b(I, j) {
        var x = "";
        return I = I.trim(), (u.tablesHeaderId || u.tableHeaderId) && (x = ' id="' + I.replace(/ /g, "_").toLowerCase() + '"'), I = r.subParser("spanGamut")(I, u, l), "<th" + x + j + ">" + I + `</th>
`;
      }
      function C(I, j) {
        var x = r.subParser("spanGamut")(I, u, l);
        return "<td" + j + ">" + x + `</td>
`;
      }
      function L(I, j) {
        for (var x = `<table>
<thead>
<tr>
`, B = I.length, N = 0; N < B; ++N)
          x += I[N];
        for (x += `</tr>
</thead>
<tbody>
`, N = 0; N < j.length; ++N) {
          x += `<tr>
`;
          for (var z = 0; z < B; ++z)
            x += j[N][z];
          x += `</tr>
`;
        }
        return x += `</tbody>
</table>
`, x;
      }
      function D(I) {
        var j, x = I.split(`
`);
        for (j = 0; j < x.length; ++j)
          /^ {0,3}\|/.test(x[j]) && (x[j] = x[j].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(x[j]) && (x[j] = x[j].replace(/\|[ \t]*$/, "")), x[j] = r.subParser("codeSpans")(x[j], u, l);
        var B = x[0].split("|").map(function(J) {
          return J.trim();
        }), N = x[1].split("|").map(function(J) {
          return J.trim();
        }), z = [], O = [], M = [], U = [];
        for (x.shift(), x.shift(), j = 0; j < x.length; ++j)
          x[j].trim() !== "" && z.push(
            x[j].split("|").map(function(J) {
              return J.trim();
            })
          );
        if (B.length < N.length)
          return I;
        for (j = 0; j < N.length; ++j)
          M.push(w(N[j]));
        for (j = 0; j < B.length; ++j)
          r.helper.isUndefined(M[j]) && (M[j] = ""), O.push(b(B[j], M[j]));
        for (j = 0; j < z.length; ++j) {
          for (var Y = [], Q = 0; Q < O.length; ++Q)
            r.helper.isUndefined(z[j][Q]), Y.push(C(z[j][Q], M[Q]));
          U.push(Y);
        }
        return L(O, U);
      }
      return i = l.converter._dispatch("tables.before", i, u, l), i = i.replace(/\\(\|)/g, r.helper.escapeCharactersCallback), i = i.replace(g, D), i = i.replace(k, D), i = l.converter._dispatch("tables.after", i, u, l), i;
    }), r.subParser("underline", function(i, u, l) {
      return u.underline && (i = l.converter._dispatch("underline.before", i, u, l), u.literalMidWordUnderscores ? (i = i.replace(/\b___(\S[\s\S]*?)___\b/g, function(g, k) {
        return "<u>" + k + "</u>";
      }), i = i.replace(/\b__(\S[\s\S]*?)__\b/g, function(g, k) {
        return "<u>" + k + "</u>";
      })) : (i = i.replace(/___(\S[\s\S]*?)___/g, function(g, k) {
        return /\S$/.test(k) ? "<u>" + k + "</u>" : g;
      }), i = i.replace(/__(\S[\s\S]*?)__/g, function(g, k) {
        return /\S$/.test(k) ? "<u>" + k + "</u>" : g;
      })), i = i.replace(/(_)/g, r.helper.escapeCharactersCallback), i = l.converter._dispatch("underline.after", i, u, l)), i;
    }), r.subParser("unescapeSpecialChars", function(i, u, l) {
      return i = l.converter._dispatch("unescapeSpecialChars.before", i, u, l), i = i.replace(/¨E(\d+)E/g, function(g, k) {
        var w = parseInt(k);
        return String.fromCharCode(w);
      }), i = l.converter._dispatch("unescapeSpecialChars.after", i, u, l), i;
    }), r.subParser("makeMarkdown.blockquote", function(i, u) {
      var l = "";
      if (i.hasChildNodes())
        for (var g = i.childNodes, k = g.length, w = 0; w < k; ++w) {
          var b = r.subParser("makeMarkdown.node")(g[w], u);
          b !== "" && (l += b);
        }
      return l = l.trim(), l = "> " + l.split(`
`).join(`
> `), l;
    }), r.subParser("makeMarkdown.codeBlock", function(i, u) {
      var l = i.getAttribute("language"), g = i.getAttribute("precodenum");
      return "```" + l + `
` + u.preList[g] + "\n```";
    }), r.subParser("makeMarkdown.codeSpan", function(i) {
      return "`" + i.innerHTML + "`";
    }), r.subParser("makeMarkdown.emphasis", function(i, u) {
      var l = "";
      if (i.hasChildNodes()) {
        l += "*";
        for (var g = i.childNodes, k = g.length, w = 0; w < k; ++w)
          l += r.subParser("makeMarkdown.node")(g[w], u);
        l += "*";
      }
      return l;
    }), r.subParser("makeMarkdown.header", function(i, u, l) {
      var g = new Array(l + 1).join("#"), k = "";
      if (i.hasChildNodes()) {
        k = g + " ";
        for (var w = i.childNodes, b = w.length, C = 0; C < b; ++C)
          k += r.subParser("makeMarkdown.node")(w[C], u);
      }
      return k;
    }), r.subParser("makeMarkdown.hr", function() {
      return "---";
    }), r.subParser("makeMarkdown.image", function(i) {
      var u = "";
      return i.hasAttribute("src") && (u += "![" + i.getAttribute("alt") + "](", u += "<" + i.getAttribute("src") + ">", i.hasAttribute("width") && i.hasAttribute("height") && (u += " =" + i.getAttribute("width") + "x" + i.getAttribute("height")), i.hasAttribute("title") && (u += ' "' + i.getAttribute("title") + '"'), u += ")"), u;
    }), r.subParser("makeMarkdown.links", function(i, u) {
      var l = "";
      if (i.hasChildNodes() && i.hasAttribute("href")) {
        var g = i.childNodes, k = g.length;
        l = "[";
        for (var w = 0; w < k; ++w)
          l += r.subParser("makeMarkdown.node")(g[w], u);
        l += "](", l += "<" + i.getAttribute("href") + ">", i.hasAttribute("title") && (l += ' "' + i.getAttribute("title") + '"'), l += ")";
      }
      return l;
    }), r.subParser("makeMarkdown.list", function(i, u, l) {
      var g = "";
      if (!i.hasChildNodes())
        return "";
      for (var k = i.childNodes, w = k.length, b = i.getAttribute("start") || 1, C = 0; C < w; ++C)
        if (!(typeof k[C].tagName > "u" || k[C].tagName.toLowerCase() !== "li")) {
          var L = "";
          l === "ol" ? L = b.toString() + ". " : L = "- ", g += L + r.subParser("makeMarkdown.listItem")(k[C], u), ++b;
        }
      return g += `
<!-- -->
`, g.trim();
    }), r.subParser("makeMarkdown.listItem", function(i, u) {
      for (var l = "", g = i.childNodes, k = g.length, w = 0; w < k; ++w)
        l += r.subParser("makeMarkdown.node")(g[w], u);
      return /\n$/.test(l) ? l = l.split(`
`).join(`
    `).replace(/^ {4}$/gm, "").replace(/\n\n+/g, `

`) : l += `
`, l;
    }), r.subParser("makeMarkdown.node", function(i, u, l) {
      l = l || !1;
      var g = "";
      if (i.nodeType === 3)
        return r.subParser("makeMarkdown.txt")(i, u);
      if (i.nodeType === 8)
        return "<!--" + i.data + `-->

`;
      if (i.nodeType !== 1)
        return "";
      var k = i.tagName.toLowerCase();
      switch (k) {
        case "h1":
          l || (g = r.subParser("makeMarkdown.header")(i, u, 1) + `

`);
          break;
        case "h2":
          l || (g = r.subParser("makeMarkdown.header")(i, u, 2) + `

`);
          break;
        case "h3":
          l || (g = r.subParser("makeMarkdown.header")(i, u, 3) + `

`);
          break;
        case "h4":
          l || (g = r.subParser("makeMarkdown.header")(i, u, 4) + `

`);
          break;
        case "h5":
          l || (g = r.subParser("makeMarkdown.header")(i, u, 5) + `

`);
          break;
        case "h6":
          l || (g = r.subParser("makeMarkdown.header")(i, u, 6) + `

`);
          break;
        case "p":
          l || (g = r.subParser("makeMarkdown.paragraph")(i, u) + `

`);
          break;
        case "blockquote":
          l || (g = r.subParser("makeMarkdown.blockquote")(i, u) + `

`);
          break;
        case "hr":
          l || (g = r.subParser("makeMarkdown.hr")(i, u) + `

`);
          break;
        case "ol":
          l || (g = r.subParser("makeMarkdown.list")(i, u, "ol") + `

`);
          break;
        case "ul":
          l || (g = r.subParser("makeMarkdown.list")(i, u, "ul") + `

`);
          break;
        case "precode":
          l || (g = r.subParser("makeMarkdown.codeBlock")(i, u) + `

`);
          break;
        case "pre":
          l || (g = r.subParser("makeMarkdown.pre")(i, u) + `

`);
          break;
        case "table":
          l || (g = r.subParser("makeMarkdown.table")(i, u) + `

`);
          break;
        case "code":
          g = r.subParser("makeMarkdown.codeSpan")(i, u);
          break;
        case "em":
        case "i":
          g = r.subParser("makeMarkdown.emphasis")(i, u);
          break;
        case "strong":
        case "b":
          g = r.subParser("makeMarkdown.strong")(i, u);
          break;
        case "del":
          g = r.subParser("makeMarkdown.strikethrough")(i, u);
          break;
        case "a":
          g = r.subParser("makeMarkdown.links")(i, u);
          break;
        case "img":
          g = r.subParser("makeMarkdown.image")(i, u);
          break;
        default:
          g = i.outerHTML + `

`;
      }
      return g;
    }), r.subParser("makeMarkdown.paragraph", function(i, u) {
      var l = "";
      if (i.hasChildNodes())
        for (var g = i.childNodes, k = g.length, w = 0; w < k; ++w)
          l += r.subParser("makeMarkdown.node")(g[w], u);
      return l = l.trim(), l;
    }), r.subParser("makeMarkdown.pre", function(i, u) {
      var l = i.getAttribute("prenum");
      return "<pre>" + u.preList[l] + "</pre>";
    }), r.subParser("makeMarkdown.strikethrough", function(i, u) {
      var l = "";
      if (i.hasChildNodes()) {
        l += "~~";
        for (var g = i.childNodes, k = g.length, w = 0; w < k; ++w)
          l += r.subParser("makeMarkdown.node")(g[w], u);
        l += "~~";
      }
      return l;
    }), r.subParser("makeMarkdown.strong", function(i, u) {
      var l = "";
      if (i.hasChildNodes()) {
        l += "**";
        for (var g = i.childNodes, k = g.length, w = 0; w < k; ++w)
          l += r.subParser("makeMarkdown.node")(g[w], u);
        l += "**";
      }
      return l;
    }), r.subParser("makeMarkdown.table", function(i, u) {
      var l = "", g = [[], []], k = i.querySelectorAll("thead>tr>th"), w = i.querySelectorAll("tbody>tr"), b, C;
      for (b = 0; b < k.length; ++b) {
        var L = r.subParser("makeMarkdown.tableCell")(k[b], u), D = "---";
        if (k[b].hasAttribute("style")) {
          var I = k[b].getAttribute("style").toLowerCase().replace(/\s/g, "");
          switch (I) {
            case "text-align:left;":
              D = ":---";
              break;
            case "text-align:right;":
              D = "---:";
              break;
            case "text-align:center;":
              D = ":---:";
              break;
          }
        }
        g[0][b] = L.trim(), g[1][b] = D;
      }
      for (b = 0; b < w.length; ++b) {
        var j = g.push([]) - 1, x = w[b].getElementsByTagName("td");
        for (C = 0; C < k.length; ++C) {
          var B = " ";
          typeof x[C] < "u" && (B = r.subParser("makeMarkdown.tableCell")(x[C], u)), g[j].push(B);
        }
      }
      var N = 3;
      for (b = 0; b < g.length; ++b)
        for (C = 0; C < g[b].length; ++C) {
          var z = g[b][C].length;
          z > N && (N = z);
        }
      for (b = 0; b < g.length; ++b) {
        for (C = 0; C < g[b].length; ++C)
          b === 1 ? g[b][C].slice(-1) === ":" ? g[b][C] = r.helper.padEnd(g[b][C].slice(-1), N - 1, "-") + ":" : g[b][C] = r.helper.padEnd(g[b][C], N, "-") : g[b][C] = r.helper.padEnd(g[b][C], N);
        l += "| " + g[b].join(" | ") + ` |
`;
      }
      return l.trim();
    }), r.subParser("makeMarkdown.tableCell", function(i, u) {
      var l = "";
      if (!i.hasChildNodes())
        return "";
      for (var g = i.childNodes, k = g.length, w = 0; w < k; ++w)
        l += r.subParser("makeMarkdown.node")(g[w], u, !0);
      return l.trim();
    }), r.subParser("makeMarkdown.txt", function(i) {
      var u = i.nodeValue;
      return u = u.replace(/ +/g, " "), u = u.replace(/¨NBSP;/g, " "), u = r.helper.unescapeHTMLEntities(u), u = u.replace(/([*_~|`])/g, "\\$1"), u = u.replace(/^(\s*)>/g, "\\$1>"), u = u.replace(/^#/gm, "\\#"), u = u.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), u = u.replace(/^( {0,3}\d+)\./gm, "$1\\."), u = u.replace(/^( {0,3})([+-])/gm, "$1\\$2"), u = u.replace(/]([\s]*)\(/g, "\\]$1\\("), u = u.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:"), u;
    });
    var A = this;
    n.exports ? n.exports = r : A.showdown = r;
  }).call(ee);
})(Qi);
var Nh = Qi.exports, Zi = {}, jn = {}, Cr = {}, Ar = {};
const $h = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376
};
var Hh = ee && ee.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(Ar, "__esModule", { value: !0 });
var Pa = Hh($h), Fh = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.fromCodePoint || function(n) {
    var e = "";
    return n > 65535 && (n -= 65536, e += String.fromCharCode(n >>> 10 & 1023 | 55296), n = 56320 | n & 1023), e += String.fromCharCode(n), e;
  }
);
function Uh(n) {
  return n >= 55296 && n <= 57343 || n > 1114111 ? "�" : (n in Pa.default && (n = Pa.default[n]), Fh(n));
}
Ar.default = Uh;
const Vh = "Á", Gh = "á", Wh = "Ă", Yh = "ă", Qh = "∾", Zh = "∿", Xh = "∾̳", Kh = "Â", Jh = "â", ep = "´", tp = "А", np = "а", rp = "Æ", sp = "æ", op = "⁡", ap = "𝔄", ip = "𝔞", cp = "À", up = "à", dp = "ℵ", lp = "ℵ", hp = "Α", pp = "α", fp = "Ā", mp = "ā", gp = "⨿", bp = "&", vp = "&", yp = "⩕", wp = "⩓", kp = "∧", xp = "⩜", Sp = "⩘", _p = "⩚", Cp = "∠", Ap = "⦤", Ep = "∠", Tp = "⦨", Pp = "⦩", Ip = "⦪", Dp = "⦫", Lp = "⦬", Rp = "⦭", Op = "⦮", jp = "⦯", Mp = "∡", Bp = "∟", qp = "⊾", zp = "⦝", Np = "∢", $p = "Å", Hp = "⍼", Fp = "Ą", Up = "ą", Vp = "𝔸", Gp = "𝕒", Wp = "⩯", Yp = "≈", Qp = "⩰", Zp = "≊", Xp = "≋", Kp = "'", Jp = "⁡", ef = "≈", tf = "≊", nf = "Å", rf = "å", sf = "𝒜", of = "𝒶", af = "≔", cf = "*", uf = "≈", df = "≍", lf = "Ã", hf = "ã", pf = "Ä", ff = "ä", mf = "∳", gf = "⨑", bf = "≌", vf = "϶", yf = "‵", wf = "∽", kf = "⋍", xf = "∖", Sf = "⫧", _f = "⊽", Cf = "⌅", Af = "⌆", Ef = "⌅", Tf = "⎵", Pf = "⎶", If = "≌", Df = "Б", Lf = "б", Rf = "„", Of = "∵", jf = "∵", Mf = "∵", Bf = "⦰", qf = "϶", zf = "ℬ", Nf = "ℬ", $f = "Β", Hf = "β", Ff = "ℶ", Uf = "≬", Vf = "𝔅", Gf = "𝔟", Wf = "⋂", Yf = "◯", Qf = "⋃", Zf = "⨀", Xf = "⨁", Kf = "⨂", Jf = "⨆", em = "★", tm = "▽", nm = "△", rm = "⨄", sm = "⋁", om = "⋀", am = "⤍", im = "⧫", cm = "▪", um = "▴", dm = "▾", lm = "◂", hm = "▸", pm = "␣", fm = "▒", mm = "░", gm = "▓", bm = "█", vm = "=⃥", ym = "≡⃥", wm = "⫭", km = "⌐", xm = "𝔹", Sm = "𝕓", _m = "⊥", Cm = "⊥", Am = "⋈", Em = "⧉", Tm = "┐", Pm = "╕", Im = "╖", Dm = "╗", Lm = "┌", Rm = "╒", Om = "╓", jm = "╔", Mm = "─", Bm = "═", qm = "┬", zm = "╤", Nm = "╥", $m = "╦", Hm = "┴", Fm = "╧", Um = "╨", Vm = "╩", Gm = "⊟", Wm = "⊞", Ym = "⊠", Qm = "┘", Zm = "╛", Xm = "╜", Km = "╝", Jm = "└", eg = "╘", tg = "╙", ng = "╚", rg = "│", sg = "║", og = "┼", ag = "╪", ig = "╫", cg = "╬", ug = "┤", dg = "╡", lg = "╢", hg = "╣", pg = "├", fg = "╞", mg = "╟", gg = "╠", bg = "‵", vg = "˘", yg = "˘", wg = "¦", kg = "𝒷", xg = "ℬ", Sg = "⁏", _g = "∽", Cg = "⋍", Ag = "⧅", Eg = "\\", Tg = "⟈", Pg = "•", Ig = "•", Dg = "≎", Lg = "⪮", Rg = "≏", Og = "≎", jg = "≏", Mg = "Ć", Bg = "ć", qg = "⩄", zg = "⩉", Ng = "⩋", $g = "∩", Hg = "⋒", Fg = "⩇", Ug = "⩀", Vg = "ⅅ", Gg = "∩︀", Wg = "⁁", Yg = "ˇ", Qg = "ℭ", Zg = "⩍", Xg = "Č", Kg = "č", Jg = "Ç", eb = "ç", tb = "Ĉ", nb = "ĉ", rb = "∰", sb = "⩌", ob = "⩐", ab = "Ċ", ib = "ċ", cb = "¸", ub = "¸", db = "⦲", lb = "¢", hb = "·", pb = "·", fb = "𝔠", mb = "ℭ", gb = "Ч", bb = "ч", vb = "✓", yb = "✓", wb = "Χ", kb = "χ", xb = "ˆ", Sb = "≗", _b = "↺", Cb = "↻", Ab = "⊛", Eb = "⊚", Tb = "⊝", Pb = "⊙", Ib = "®", Db = "Ⓢ", Lb = "⊖", Rb = "⊕", Ob = "⊗", jb = "○", Mb = "⧃", Bb = "≗", qb = "⨐", zb = "⫯", Nb = "⧂", $b = "∲", Hb = "”", Fb = "’", Ub = "♣", Vb = "♣", Gb = ":", Wb = "∷", Yb = "⩴", Qb = "≔", Zb = "≔", Xb = ",", Kb = "@", Jb = "∁", ev = "∘", tv = "∁", nv = "ℂ", rv = "≅", sv = "⩭", ov = "≡", av = "∮", iv = "∯", cv = "∮", uv = "𝕔", dv = "ℂ", lv = "∐", hv = "∐", pv = "©", fv = "©", mv = "℗", gv = "∳", bv = "↵", vv = "✗", yv = "⨯", wv = "𝒞", kv = "𝒸", xv = "⫏", Sv = "⫑", _v = "⫐", Cv = "⫒", Av = "⋯", Ev = "⤸", Tv = "⤵", Pv = "⋞", Iv = "⋟", Dv = "↶", Lv = "⤽", Rv = "⩈", Ov = "⩆", jv = "≍", Mv = "∪", Bv = "⋓", qv = "⩊", zv = "⊍", Nv = "⩅", $v = "∪︀", Hv = "↷", Fv = "⤼", Uv = "⋞", Vv = "⋟", Gv = "⋎", Wv = "⋏", Yv = "¤", Qv = "↶", Zv = "↷", Xv = "⋎", Kv = "⋏", Jv = "∲", ey = "∱", ty = "⌭", ny = "†", ry = "‡", sy = "ℸ", oy = "↓", ay = "↡", iy = "⇓", cy = "‐", uy = "⫤", dy = "⊣", ly = "⤏", hy = "˝", py = "Ď", fy = "ď", my = "Д", gy = "д", by = "‡", vy = "⇊", yy = "ⅅ", wy = "ⅆ", ky = "⤑", xy = "⩷", Sy = "°", _y = "∇", Cy = "Δ", Ay = "δ", Ey = "⦱", Ty = "⥿", Py = "𝔇", Iy = "𝔡", Dy = "⥥", Ly = "⇃", Ry = "⇂", Oy = "´", jy = "˙", My = "˝", By = "`", qy = "˜", zy = "⋄", Ny = "⋄", $y = "⋄", Hy = "♦", Fy = "♦", Uy = "¨", Vy = "ⅆ", Gy = "ϝ", Wy = "⋲", Yy = "÷", Qy = "÷", Zy = "⋇", Xy = "⋇", Ky = "Ђ", Jy = "ђ", ew = "⌞", tw = "⌍", nw = "$", rw = "𝔻", sw = "𝕕", ow = "¨", aw = "˙", iw = "⃜", cw = "≐", uw = "≑", dw = "≐", lw = "∸", hw = "∔", pw = "⊡", fw = "⌆", mw = "∯", gw = "¨", bw = "⇓", vw = "⇐", yw = "⇔", ww = "⫤", kw = "⟸", xw = "⟺", Sw = "⟹", _w = "⇒", Cw = "⊨", Aw = "⇑", Ew = "⇕", Tw = "∥", Pw = "⤓", Iw = "↓", Dw = "↓", Lw = "⇓", Rw = "⇵", Ow = "̑", jw = "⇊", Mw = "⇃", Bw = "⇂", qw = "⥐", zw = "⥞", Nw = "⥖", $w = "↽", Hw = "⥟", Fw = "⥗", Uw = "⇁", Vw = "↧", Gw = "⊤", Ww = "⤐", Yw = "⌟", Qw = "⌌", Zw = "𝒟", Xw = "𝒹", Kw = "Ѕ", Jw = "ѕ", e0 = "⧶", t0 = "Đ", n0 = "đ", r0 = "⋱", s0 = "▿", o0 = "▾", a0 = "⇵", i0 = "⥯", c0 = "⦦", u0 = "Џ", d0 = "џ", l0 = "⟿", h0 = "É", p0 = "é", f0 = "⩮", m0 = "Ě", g0 = "ě", b0 = "Ê", v0 = "ê", y0 = "≖", w0 = "≕", k0 = "Э", x0 = "э", S0 = "⩷", _0 = "Ė", C0 = "ė", A0 = "≑", E0 = "ⅇ", T0 = "≒", P0 = "𝔈", I0 = "𝔢", D0 = "⪚", L0 = "È", R0 = "è", O0 = "⪖", j0 = "⪘", M0 = "⪙", B0 = "∈", q0 = "⏧", z0 = "ℓ", N0 = "⪕", $0 = "⪗", H0 = "Ē", F0 = "ē", U0 = "∅", V0 = "∅", G0 = "◻", W0 = "∅", Y0 = "▫", Q0 = " ", Z0 = " ", X0 = " ", K0 = "Ŋ", J0 = "ŋ", e1 = " ", t1 = "Ę", n1 = "ę", r1 = "𝔼", s1 = "𝕖", o1 = "⋕", a1 = "⧣", i1 = "⩱", c1 = "ε", u1 = "Ε", d1 = "ε", l1 = "ϵ", h1 = "≖", p1 = "≕", f1 = "≂", m1 = "⪖", g1 = "⪕", b1 = "⩵", v1 = "=", y1 = "≂", w1 = "≟", k1 = "⇌", x1 = "≡", S1 = "⩸", _1 = "⧥", C1 = "⥱", A1 = "≓", E1 = "ℯ", T1 = "ℰ", P1 = "≐", I1 = "⩳", D1 = "≂", L1 = "Η", R1 = "η", O1 = "Ð", j1 = "ð", M1 = "Ë", B1 = "ë", q1 = "€", z1 = "!", N1 = "∃", $1 = "∃", H1 = "ℰ", F1 = "ⅇ", U1 = "ⅇ", V1 = "≒", G1 = "Ф", W1 = "ф", Y1 = "♀", Q1 = "ﬃ", Z1 = "ﬀ", X1 = "ﬄ", K1 = "𝔉", J1 = "𝔣", ek = "ﬁ", tk = "◼", nk = "▪", rk = "fj", sk = "♭", ok = "ﬂ", ak = "▱", ik = "ƒ", ck = "𝔽", uk = "𝕗", dk = "∀", lk = "∀", hk = "⋔", pk = "⫙", fk = "ℱ", mk = "⨍", gk = "½", bk = "⅓", vk = "¼", yk = "⅕", wk = "⅙", kk = "⅛", xk = "⅔", Sk = "⅖", _k = "¾", Ck = "⅗", Ak = "⅜", Ek = "⅘", Tk = "⅚", Pk = "⅝", Ik = "⅞", Dk = "⁄", Lk = "⌢", Rk = "𝒻", Ok = "ℱ", jk = "ǵ", Mk = "Γ", Bk = "γ", qk = "Ϝ", zk = "ϝ", Nk = "⪆", $k = "Ğ", Hk = "ğ", Fk = "Ģ", Uk = "Ĝ", Vk = "ĝ", Gk = "Г", Wk = "г", Yk = "Ġ", Qk = "ġ", Zk = "≥", Xk = "≧", Kk = "⪌", Jk = "⋛", e3 = "≥", t3 = "≧", n3 = "⩾", r3 = "⪩", s3 = "⩾", o3 = "⪀", a3 = "⪂", i3 = "⪄", c3 = "⋛︀", u3 = "⪔", d3 = "𝔊", l3 = "𝔤", h3 = "≫", p3 = "⋙", f3 = "⋙", m3 = "ℷ", g3 = "Ѓ", b3 = "ѓ", v3 = "⪥", y3 = "≷", w3 = "⪒", k3 = "⪤", x3 = "⪊", S3 = "⪊", _3 = "⪈", C3 = "≩", A3 = "⪈", E3 = "≩", T3 = "⋧", P3 = "𝔾", I3 = "𝕘", D3 = "`", L3 = "≥", R3 = "⋛", O3 = "≧", j3 = "⪢", M3 = "≷", B3 = "⩾", q3 = "≳", z3 = "𝒢", N3 = "ℊ", $3 = "≳", H3 = "⪎", F3 = "⪐", U3 = "⪧", V3 = "⩺", G3 = ">", W3 = ">", Y3 = "≫", Q3 = "⋗", Z3 = "⦕", X3 = "⩼", K3 = "⪆", J3 = "⥸", e8 = "⋗", t8 = "⋛", n8 = "⪌", r8 = "≷", s8 = "≳", o8 = "≩︀", a8 = "≩︀", i8 = "ˇ", c8 = " ", u8 = "½", d8 = "ℋ", l8 = "Ъ", h8 = "ъ", p8 = "⥈", f8 = "↔", m8 = "⇔", g8 = "↭", b8 = "^", v8 = "ℏ", y8 = "Ĥ", w8 = "ĥ", k8 = "♥", x8 = "♥", S8 = "…", _8 = "⊹", C8 = "𝔥", A8 = "ℌ", E8 = "ℋ", T8 = "⤥", P8 = "⤦", I8 = "⇿", D8 = "∻", L8 = "↩", R8 = "↪", O8 = "𝕙", j8 = "ℍ", M8 = "―", B8 = "─", q8 = "𝒽", z8 = "ℋ", N8 = "ℏ", $8 = "Ħ", H8 = "ħ", F8 = "≎", U8 = "≏", V8 = "⁃", G8 = "‐", W8 = "Í", Y8 = "í", Q8 = "⁣", Z8 = "Î", X8 = "î", K8 = "И", J8 = "и", ex = "İ", tx = "Е", nx = "е", rx = "¡", sx = "⇔", ox = "𝔦", ax = "ℑ", ix = "Ì", cx = "ì", ux = "ⅈ", dx = "⨌", lx = "∭", hx = "⧜", px = "℩", fx = "Ĳ", mx = "ĳ", gx = "Ī", bx = "ī", vx = "ℑ", yx = "ⅈ", wx = "ℐ", kx = "ℑ", xx = "ı", Sx = "ℑ", _x = "⊷", Cx = "Ƶ", Ax = "⇒", Ex = "℅", Tx = "∞", Px = "⧝", Ix = "ı", Dx = "⊺", Lx = "∫", Rx = "∬", Ox = "ℤ", jx = "∫", Mx = "⊺", Bx = "⋂", qx = "⨗", zx = "⨼", Nx = "⁣", $x = "⁢", Hx = "Ё", Fx = "ё", Ux = "Į", Vx = "į", Gx = "𝕀", Wx = "𝕚", Yx = "Ι", Qx = "ι", Zx = "⨼", Xx = "¿", Kx = "𝒾", Jx = "ℐ", eS = "∈", tS = "⋵", nS = "⋹", rS = "⋴", sS = "⋳", oS = "∈", aS = "⁢", iS = "Ĩ", cS = "ĩ", uS = "І", dS = "і", lS = "Ï", hS = "ï", pS = "Ĵ", fS = "ĵ", mS = "Й", gS = "й", bS = "𝔍", vS = "𝔧", yS = "ȷ", wS = "𝕁", kS = "𝕛", xS = "𝒥", SS = "𝒿", _S = "Ј", CS = "ј", AS = "Є", ES = "є", TS = "Κ", PS = "κ", IS = "ϰ", DS = "Ķ", LS = "ķ", RS = "К", OS = "к", jS = "𝔎", MS = "𝔨", BS = "ĸ", qS = "Х", zS = "х", NS = "Ќ", $S = "ќ", HS = "𝕂", FS = "𝕜", US = "𝒦", VS = "𝓀", GS = "⇚", WS = "Ĺ", YS = "ĺ", QS = "⦴", ZS = "ℒ", XS = "Λ", KS = "λ", JS = "⟨", e_ = "⟪", t_ = "⦑", n_ = "⟨", r_ = "⪅", s_ = "ℒ", o_ = "«", a_ = "⇤", i_ = "⤟", c_ = "←", u_ = "↞", d_ = "⇐", l_ = "⤝", h_ = "↩", p_ = "↫", f_ = "⤹", m_ = "⥳", g_ = "↢", b_ = "⤙", v_ = "⤛", y_ = "⪫", w_ = "⪭", k_ = "⪭︀", x_ = "⤌", S_ = "⤎", __ = "❲", C_ = "{", A_ = "[", E_ = "⦋", T_ = "⦏", P_ = "⦍", I_ = "Ľ", D_ = "ľ", L_ = "Ļ", R_ = "ļ", O_ = "⌈", j_ = "{", M_ = "Л", B_ = "л", q_ = "⤶", z_ = "“", N_ = "„", $_ = "⥧", H_ = "⥋", F_ = "↲", U_ = "≤", V_ = "≦", G_ = "⟨", W_ = "⇤", Y_ = "←", Q_ = "←", Z_ = "⇐", X_ = "⇆", K_ = "↢", J_ = "⌈", eC = "⟦", tC = "⥡", nC = "⥙", rC = "⇃", sC = "⌊", oC = "↽", aC = "↼", iC = "⇇", cC = "↔", uC = "↔", dC = "⇔", lC = "⇆", hC = "⇋", pC = "↭", fC = "⥎", mC = "↤", gC = "⊣", bC = "⥚", vC = "⋋", yC = "⧏", wC = "⊲", kC = "⊴", xC = "⥑", SC = "⥠", _C = "⥘", CC = "↿", AC = "⥒", EC = "↼", TC = "⪋", PC = "⋚", IC = "≤", DC = "≦", LC = "⩽", RC = "⪨", OC = "⩽", jC = "⩿", MC = "⪁", BC = "⪃", qC = "⋚︀", zC = "⪓", NC = "⪅", $C = "⋖", HC = "⋚", FC = "⪋", UC = "⋚", VC = "≦", GC = "≶", WC = "≶", YC = "⪡", QC = "≲", ZC = "⩽", XC = "≲", KC = "⥼", JC = "⌊", e2 = "𝔏", t2 = "𝔩", n2 = "≶", r2 = "⪑", s2 = "⥢", o2 = "↽", a2 = "↼", i2 = "⥪", c2 = "▄", u2 = "Љ", d2 = "љ", l2 = "⇇", h2 = "≪", p2 = "⋘", f2 = "⌞", m2 = "⇚", g2 = "⥫", b2 = "◺", v2 = "Ŀ", y2 = "ŀ", w2 = "⎰", k2 = "⎰", x2 = "⪉", S2 = "⪉", _2 = "⪇", C2 = "≨", A2 = "⪇", E2 = "≨", T2 = "⋦", P2 = "⟬", I2 = "⇽", D2 = "⟦", L2 = "⟵", R2 = "⟵", O2 = "⟸", j2 = "⟷", M2 = "⟷", B2 = "⟺", q2 = "⟼", z2 = "⟶", N2 = "⟶", $2 = "⟹", H2 = "↫", F2 = "↬", U2 = "⦅", V2 = "𝕃", G2 = "𝕝", W2 = "⨭", Y2 = "⨴", Q2 = "∗", Z2 = "_", X2 = "↙", K2 = "↘", J2 = "◊", eA = "◊", tA = "⧫", nA = "(", rA = "⦓", sA = "⇆", oA = "⌟", aA = "⇋", iA = "⥭", cA = "‎", uA = "⊿", dA = "‹", lA = "𝓁", hA = "ℒ", pA = "↰", fA = "↰", mA = "≲", gA = "⪍", bA = "⪏", vA = "[", yA = "‘", wA = "‚", kA = "Ł", xA = "ł", SA = "⪦", _A = "⩹", CA = "<", AA = "<", EA = "≪", TA = "⋖", PA = "⋋", IA = "⋉", DA = "⥶", LA = "⩻", RA = "◃", OA = "⊴", jA = "◂", MA = "⦖", BA = "⥊", qA = "⥦", zA = "≨︀", NA = "≨︀", $A = "¯", HA = "♂", FA = "✠", UA = "✠", VA = "↦", GA = "↦", WA = "↧", YA = "↤", QA = "↥", ZA = "▮", XA = "⨩", KA = "М", JA = "м", eE = "—", tE = "∺", nE = "∡", rE = " ", sE = "ℳ", oE = "𝔐", aE = "𝔪", iE = "℧", cE = "µ", uE = "*", dE = "⫰", lE = "∣", hE = "·", pE = "⊟", fE = "−", mE = "∸", gE = "⨪", bE = "∓", vE = "⫛", yE = "…", wE = "∓", kE = "⊧", xE = "𝕄", SE = "𝕞", _E = "∓", CE = "𝓂", AE = "ℳ", EE = "∾", TE = "Μ", PE = "μ", IE = "⊸", DE = "⊸", LE = "∇", RE = "Ń", OE = "ń", jE = "∠⃒", ME = "≉", BE = "⩰̸", qE = "≋̸", zE = "ŉ", NE = "≉", $E = "♮", HE = "ℕ", FE = "♮", UE = " ", VE = "≎̸", GE = "≏̸", WE = "⩃", YE = "Ň", QE = "ň", ZE = "Ņ", XE = "ņ", KE = "≇", JE = "⩭̸", eT = "⩂", tT = "Н", nT = "н", rT = "–", sT = "⤤", oT = "↗", aT = "⇗", iT = "↗", cT = "≠", uT = "≐̸", dT = "​", lT = "​", hT = "​", pT = "​", fT = "≢", mT = "⤨", gT = "≂̸", bT = "≫", vT = "≪", yT = `
`, wT = "∄", kT = "∄", xT = "𝔑", ST = "𝔫", _T = "≧̸", CT = "≱", AT = "≱", ET = "≧̸", TT = "⩾̸", PT = "⩾̸", IT = "⋙̸", DT = "≵", LT = "≫⃒", RT = "≯", OT = "≯", jT = "≫̸", MT = "↮", BT = "⇎", qT = "⫲", zT = "∋", NT = "⋼", $T = "⋺", HT = "∋", FT = "Њ", UT = "њ", VT = "↚", GT = "⇍", WT = "‥", YT = "≦̸", QT = "≰", ZT = "↚", XT = "⇍", KT = "↮", JT = "⇎", eP = "≰", tP = "≦̸", nP = "⩽̸", rP = "⩽̸", sP = "≮", oP = "⋘̸", aP = "≴", iP = "≪⃒", cP = "≮", uP = "⋪", dP = "⋬", lP = "≪̸", hP = "∤", pP = "⁠", fP = " ", mP = "𝕟", gP = "ℕ", bP = "⫬", vP = "¬", yP = "≢", wP = "≭", kP = "∦", xP = "∉", SP = "≠", _P = "≂̸", CP = "∄", AP = "≯", EP = "≱", TP = "≧̸", PP = "≫̸", IP = "≹", DP = "⩾̸", LP = "≵", RP = "≎̸", OP = "≏̸", jP = "∉", MP = "⋵̸", BP = "⋹̸", qP = "∉", zP = "⋷", NP = "⋶", $P = "⧏̸", HP = "⋪", FP = "⋬", UP = "≮", VP = "≰", GP = "≸", WP = "≪̸", YP = "⩽̸", QP = "≴", ZP = "⪢̸", XP = "⪡̸", KP = "∌", JP = "∌", eI = "⋾", tI = "⋽", nI = "⊀", rI = "⪯̸", sI = "⋠", oI = "∌", aI = "⧐̸", iI = "⋫", cI = "⋭", uI = "⊏̸", dI = "⋢", lI = "⊐̸", hI = "⋣", pI = "⊂⃒", fI = "⊈", mI = "⊁", gI = "⪰̸", bI = "⋡", vI = "≿̸", yI = "⊃⃒", wI = "⊉", kI = "≁", xI = "≄", SI = "≇", _I = "≉", CI = "∤", AI = "∦", EI = "∦", TI = "⫽⃥", PI = "∂̸", II = "⨔", DI = "⊀", LI = "⋠", RI = "⊀", OI = "⪯̸", jI = "⪯̸", MI = "⤳̸", BI = "↛", qI = "⇏", zI = "↝̸", NI = "↛", $I = "⇏", HI = "⋫", FI = "⋭", UI = "⊁", VI = "⋡", GI = "⪰̸", WI = "𝒩", YI = "𝓃", QI = "∤", ZI = "∦", XI = "≁", KI = "≄", JI = "≄", e4 = "∤", t4 = "∦", n4 = "⋢", r4 = "⋣", s4 = "⊄", o4 = "⫅̸", a4 = "⊈", i4 = "⊂⃒", c4 = "⊈", u4 = "⫅̸", d4 = "⊁", l4 = "⪰̸", h4 = "⊅", p4 = "⫆̸", f4 = "⊉", m4 = "⊃⃒", g4 = "⊉", b4 = "⫆̸", v4 = "≹", y4 = "Ñ", w4 = "ñ", k4 = "≸", x4 = "⋪", S4 = "⋬", _4 = "⋫", C4 = "⋭", A4 = "Ν", E4 = "ν", T4 = "#", P4 = "№", I4 = " ", D4 = "≍⃒", L4 = "⊬", R4 = "⊭", O4 = "⊮", j4 = "⊯", M4 = "≥⃒", B4 = ">⃒", q4 = "⤄", z4 = "⧞", N4 = "⤂", $4 = "≤⃒", H4 = "<⃒", F4 = "⊴⃒", U4 = "⤃", V4 = "⊵⃒", G4 = "∼⃒", W4 = "⤣", Y4 = "↖", Q4 = "⇖", Z4 = "↖", X4 = "⤧", K4 = "Ó", J4 = "ó", e6 = "⊛", t6 = "Ô", n6 = "ô", r6 = "⊚", s6 = "О", o6 = "о", a6 = "⊝", i6 = "Ő", c6 = "ő", u6 = "⨸", d6 = "⊙", l6 = "⦼", h6 = "Œ", p6 = "œ", f6 = "⦿", m6 = "𝔒", g6 = "𝔬", b6 = "˛", v6 = "Ò", y6 = "ò", w6 = "⧁", k6 = "⦵", x6 = "Ω", S6 = "∮", _6 = "↺", C6 = "⦾", A6 = "⦻", E6 = "‾", T6 = "⧀", P6 = "Ō", I6 = "ō", D6 = "Ω", L6 = "ω", R6 = "Ο", O6 = "ο", j6 = "⦶", M6 = "⊖", B6 = "𝕆", q6 = "𝕠", z6 = "⦷", N6 = "“", $6 = "‘", H6 = "⦹", F6 = "⊕", U6 = "↻", V6 = "⩔", G6 = "∨", W6 = "⩝", Y6 = "ℴ", Q6 = "ℴ", Z6 = "ª", X6 = "º", K6 = "⊶", J6 = "⩖", e5 = "⩗", t5 = "⩛", n5 = "Ⓢ", r5 = "𝒪", s5 = "ℴ", o5 = "Ø", a5 = "ø", i5 = "⊘", c5 = "Õ", u5 = "õ", d5 = "⨶", l5 = "⨷", h5 = "⊗", p5 = "Ö", f5 = "ö", m5 = "⌽", g5 = "‾", b5 = "⏞", v5 = "⎴", y5 = "⏜", w5 = "¶", k5 = "∥", x5 = "∥", S5 = "⫳", _5 = "⫽", C5 = "∂", A5 = "∂", E5 = "П", T5 = "п", P5 = "%", I5 = ".", D5 = "‰", L5 = "⊥", R5 = "‱", O5 = "𝔓", j5 = "𝔭", M5 = "Φ", B5 = "φ", q5 = "ϕ", z5 = "ℳ", N5 = "☎", $5 = "Π", H5 = "π", F5 = "⋔", U5 = "ϖ", V5 = "ℏ", G5 = "ℎ", W5 = "ℏ", Y5 = "⨣", Q5 = "⊞", Z5 = "⨢", X5 = "+", K5 = "∔", J5 = "⨥", eD = "⩲", tD = "±", nD = "±", rD = "⨦", sD = "⨧", oD = "±", aD = "ℌ", iD = "⨕", cD = "𝕡", uD = "ℙ", dD = "£", lD = "⪷", hD = "⪻", pD = "≺", fD = "≼", mD = "⪷", gD = "≺", bD = "≼", vD = "≺", yD = "⪯", wD = "≼", kD = "≾", xD = "⪯", SD = "⪹", _D = "⪵", CD = "⋨", AD = "⪯", ED = "⪳", TD = "≾", PD = "′", ID = "″", DD = "ℙ", LD = "⪹", RD = "⪵", OD = "⋨", jD = "∏", MD = "∏", BD = "⌮", qD = "⌒", zD = "⌓", ND = "∝", $D = "∝", HD = "∷", FD = "∝", UD = "≾", VD = "⊰", GD = "𝒫", WD = "𝓅", YD = "Ψ", QD = "ψ", ZD = " ", XD = "𝔔", KD = "𝔮", JD = "⨌", eL = "𝕢", tL = "ℚ", nL = "⁗", rL = "𝒬", sL = "𝓆", oL = "ℍ", aL = "⨖", iL = "?", cL = "≟", uL = '"', dL = '"', lL = "⇛", hL = "∽̱", pL = "Ŕ", fL = "ŕ", mL = "√", gL = "⦳", bL = "⟩", vL = "⟫", yL = "⦒", wL = "⦥", kL = "⟩", xL = "»", SL = "⥵", _L = "⇥", CL = "⤠", AL = "⤳", EL = "→", TL = "↠", PL = "⇒", IL = "⤞", DL = "↪", LL = "↬", RL = "⥅", OL = "⥴", jL = "⤖", ML = "↣", BL = "↝", qL = "⤚", zL = "⤜", NL = "∶", $L = "ℚ", HL = "⤍", FL = "⤏", UL = "⤐", VL = "❳", GL = "}", WL = "]", YL = "⦌", QL = "⦎", ZL = "⦐", XL = "Ř", KL = "ř", JL = "Ŗ", eR = "ŗ", tR = "⌉", nR = "}", rR = "Р", sR = "р", oR = "⤷", aR = "⥩", iR = "”", cR = "”", uR = "↳", dR = "ℜ", lR = "ℛ", hR = "ℜ", pR = "ℝ", fR = "ℜ", mR = "▭", gR = "®", bR = "®", vR = "∋", yR = "⇋", wR = "⥯", kR = "⥽", xR = "⌋", SR = "𝔯", _R = "ℜ", CR = "⥤", AR = "⇁", ER = "⇀", TR = "⥬", PR = "Ρ", IR = "ρ", DR = "ϱ", LR = "⟩", RR = "⇥", OR = "→", jR = "→", MR = "⇒", BR = "⇄", qR = "↣", zR = "⌉", NR = "⟧", $R = "⥝", HR = "⥕", FR = "⇂", UR = "⌋", VR = "⇁", GR = "⇀", WR = "⇄", YR = "⇌", QR = "⇉", ZR = "↝", XR = "↦", KR = "⊢", JR = "⥛", eO = "⋌", tO = "⧐", nO = "⊳", rO = "⊵", sO = "⥏", oO = "⥜", aO = "⥔", iO = "↾", cO = "⥓", uO = "⇀", dO = "˚", lO = "≓", hO = "⇄", pO = "⇌", fO = "‏", mO = "⎱", gO = "⎱", bO = "⫮", vO = "⟭", yO = "⇾", wO = "⟧", kO = "⦆", xO = "𝕣", SO = "ℝ", _O = "⨮", CO = "⨵", AO = "⥰", EO = ")", TO = "⦔", PO = "⨒", IO = "⇉", DO = "⇛", LO = "›", RO = "𝓇", OO = "ℛ", jO = "↱", MO = "↱", BO = "]", qO = "’", zO = "’", NO = "⋌", $O = "⋊", HO = "▹", FO = "⊵", UO = "▸", VO = "⧎", GO = "⧴", WO = "⥨", YO = "℞", QO = "Ś", ZO = "ś", XO = "‚", KO = "⪸", JO = "Š", ej = "š", tj = "⪼", nj = "≻", rj = "≽", sj = "⪰", oj = "⪴", aj = "Ş", ij = "ş", cj = "Ŝ", uj = "ŝ", dj = "⪺", lj = "⪶", hj = "⋩", pj = "⨓", fj = "≿", mj = "С", gj = "с", bj = "⊡", vj = "⋅", yj = "⩦", wj = "⤥", kj = "↘", xj = "⇘", Sj = "↘", _j = "§", Cj = ";", Aj = "⤩", Ej = "∖", Tj = "∖", Pj = "✶", Ij = "𝔖", Dj = "𝔰", Lj = "⌢", Rj = "♯", Oj = "Щ", jj = "щ", Mj = "Ш", Bj = "ш", qj = "↓", zj = "←", Nj = "∣", $j = "∥", Hj = "→", Fj = "↑", Uj = "­", Vj = "Σ", Gj = "σ", Wj = "ς", Yj = "ς", Qj = "∼", Zj = "⩪", Xj = "≃", Kj = "≃", Jj = "⪞", eM = "⪠", tM = "⪝", nM = "⪟", rM = "≆", sM = "⨤", oM = "⥲", aM = "←", iM = "∘", cM = "∖", uM = "⨳", dM = "⧤", lM = "∣", hM = "⌣", pM = "⪪", fM = "⪬", mM = "⪬︀", gM = "Ь", bM = "ь", vM = "⌿", yM = "⧄", wM = "/", kM = "𝕊", xM = "𝕤", SM = "♠", _M = "♠", CM = "∥", AM = "⊓", EM = "⊓︀", TM = "⊔", PM = "⊔︀", IM = "√", DM = "⊏", LM = "⊑", RM = "⊏", OM = "⊑", jM = "⊐", MM = "⊒", BM = "⊐", qM = "⊒", zM = "□", NM = "□", $M = "⊓", HM = "⊏", FM = "⊑", UM = "⊐", VM = "⊒", GM = "⊔", WM = "▪", YM = "□", QM = "▪", ZM = "→", XM = "𝒮", KM = "𝓈", JM = "∖", e9 = "⌣", t9 = "⋆", n9 = "⋆", r9 = "☆", s9 = "★", o9 = "ϵ", a9 = "ϕ", i9 = "¯", c9 = "⊂", u9 = "⋐", d9 = "⪽", l9 = "⫅", h9 = "⊆", p9 = "⫃", f9 = "⫁", m9 = "⫋", g9 = "⊊", b9 = "⪿", v9 = "⥹", y9 = "⊂", w9 = "⋐", k9 = "⊆", x9 = "⫅", S9 = "⊆", _9 = "⊊", C9 = "⫋", A9 = "⫇", E9 = "⫕", T9 = "⫓", P9 = "⪸", I9 = "≻", D9 = "≽", L9 = "≻", R9 = "⪰", O9 = "≽", j9 = "≿", M9 = "⪰", B9 = "⪺", q9 = "⪶", z9 = "⋩", N9 = "≿", $9 = "∋", H9 = "∑", F9 = "∑", U9 = "♪", V9 = "¹", G9 = "²", W9 = "³", Y9 = "⊃", Q9 = "⋑", Z9 = "⪾", X9 = "⫘", K9 = "⫆", J9 = "⊇", eB = "⫄", tB = "⊃", nB = "⊇", rB = "⟉", sB = "⫗", oB = "⥻", aB = "⫂", iB = "⫌", cB = "⊋", uB = "⫀", dB = "⊃", lB = "⋑", hB = "⊇", pB = "⫆", fB = "⊋", mB = "⫌", gB = "⫈", bB = "⫔", vB = "⫖", yB = "⤦", wB = "↙", kB = "⇙", xB = "↙", SB = "⤪", _B = "ß", CB = "	", AB = "⌖", EB = "Τ", TB = "τ", PB = "⎴", IB = "Ť", DB = "ť", LB = "Ţ", RB = "ţ", OB = "Т", jB = "т", MB = "⃛", BB = "⌕", qB = "𝔗", zB = "𝔱", NB = "∴", $B = "∴", HB = "∴", FB = "Θ", UB = "θ", VB = "ϑ", GB = "ϑ", WB = "≈", YB = "∼", QB = "  ", ZB = " ", XB = " ", KB = "≈", JB = "∼", e7 = "Þ", t7 = "þ", n7 = "˜", r7 = "∼", s7 = "≃", o7 = "≅", a7 = "≈", i7 = "⨱", c7 = "⊠", u7 = "×", d7 = "⨰", l7 = "∭", h7 = "⤨", p7 = "⌶", f7 = "⫱", m7 = "⊤", g7 = "𝕋", b7 = "𝕥", v7 = "⫚", y7 = "⤩", w7 = "‴", k7 = "™", x7 = "™", S7 = "▵", _7 = "▿", C7 = "◃", A7 = "⊴", E7 = "≜", T7 = "▹", P7 = "⊵", I7 = "◬", D7 = "≜", L7 = "⨺", R7 = "⃛", O7 = "⨹", j7 = "⧍", M7 = "⨻", B7 = "⏢", q7 = "𝒯", z7 = "𝓉", N7 = "Ц", $7 = "ц", H7 = "Ћ", F7 = "ћ", U7 = "Ŧ", V7 = "ŧ", G7 = "≬", W7 = "↞", Y7 = "↠", Q7 = "Ú", Z7 = "ú", X7 = "↑", K7 = "↟", J7 = "⇑", eq = "⥉", tq = "Ў", nq = "ў", rq = "Ŭ", sq = "ŭ", oq = "Û", aq = "û", iq = "У", cq = "у", uq = "⇅", dq = "Ű", lq = "ű", hq = "⥮", pq = "⥾", fq = "𝔘", mq = "𝔲", gq = "Ù", bq = "ù", vq = "⥣", yq = "↿", wq = "↾", kq = "▀", xq = "⌜", Sq = "⌜", _q = "⌏", Cq = "◸", Aq = "Ū", Eq = "ū", Tq = "¨", Pq = "_", Iq = "⏟", Dq = "⎵", Lq = "⏝", Rq = "⋃", Oq = "⊎", jq = "Ų", Mq = "ų", Bq = "𝕌", qq = "𝕦", zq = "⤒", Nq = "↑", $q = "↑", Hq = "⇑", Fq = "⇅", Uq = "↕", Vq = "↕", Gq = "⇕", Wq = "⥮", Yq = "↿", Qq = "↾", Zq = "⊎", Xq = "↖", Kq = "↗", Jq = "υ", ez = "ϒ", tz = "ϒ", nz = "Υ", rz = "υ", sz = "↥", oz = "⊥", az = "⇈", iz = "⌝", cz = "⌝", uz = "⌎", dz = "Ů", lz = "ů", hz = "◹", pz = "𝒰", fz = "𝓊", mz = "⋰", gz = "Ũ", bz = "ũ", vz = "▵", yz = "▴", wz = "⇈", kz = "Ü", xz = "ü", Sz = "⦧", _z = "⦜", Cz = "ϵ", Az = "ϰ", Ez = "∅", Tz = "ϕ", Pz = "ϖ", Iz = "∝", Dz = "↕", Lz = "⇕", Rz = "ϱ", Oz = "ς", jz = "⊊︀", Mz = "⫋︀", Bz = "⊋︀", qz = "⫌︀", zz = "ϑ", Nz = "⊲", $z = "⊳", Hz = "⫨", Fz = "⫫", Uz = "⫩", Vz = "В", Gz = "в", Wz = "⊢", Yz = "⊨", Qz = "⊩", Zz = "⊫", Xz = "⫦", Kz = "⊻", Jz = "∨", eN = "⋁", tN = "≚", nN = "⋮", rN = "|", sN = "‖", oN = "|", aN = "‖", iN = "∣", cN = "|", uN = "❘", dN = "≀", lN = " ", hN = "𝔙", pN = "𝔳", fN = "⊲", mN = "⊂⃒", gN = "⊃⃒", bN = "𝕍", vN = "𝕧", yN = "∝", wN = "⊳", kN = "𝒱", xN = "𝓋", SN = "⫋︀", _N = "⊊︀", CN = "⫌︀", AN = "⊋︀", EN = "⊪", TN = "⦚", PN = "Ŵ", IN = "ŵ", DN = "⩟", LN = "∧", RN = "⋀", ON = "≙", jN = "℘", MN = "𝔚", BN = "𝔴", qN = "𝕎", zN = "𝕨", NN = "℘", $N = "≀", HN = "≀", FN = "𝒲", UN = "𝓌", VN = "⋂", GN = "◯", WN = "⋃", YN = "▽", QN = "𝔛", ZN = "𝔵", XN = "⟷", KN = "⟺", JN = "Ξ", e$ = "ξ", t$ = "⟵", n$ = "⟸", r$ = "⟼", s$ = "⋻", o$ = "⨀", a$ = "𝕏", i$ = "𝕩", c$ = "⨁", u$ = "⨂", d$ = "⟶", l$ = "⟹", h$ = "𝒳", p$ = "𝓍", f$ = "⨆", m$ = "⨄", g$ = "△", b$ = "⋁", v$ = "⋀", y$ = "Ý", w$ = "ý", k$ = "Я", x$ = "я", S$ = "Ŷ", _$ = "ŷ", C$ = "Ы", A$ = "ы", E$ = "¥", T$ = "𝔜", P$ = "𝔶", I$ = "Ї", D$ = "ї", L$ = "𝕐", R$ = "𝕪", O$ = "𝒴", j$ = "𝓎", M$ = "Ю", B$ = "ю", q$ = "ÿ", z$ = "Ÿ", N$ = "Ź", $$ = "ź", H$ = "Ž", F$ = "ž", U$ = "З", V$ = "з", G$ = "Ż", W$ = "ż", Y$ = "ℨ", Q$ = "​", Z$ = "Ζ", X$ = "ζ", K$ = "𝔷", J$ = "ℨ", eH = "Ж", tH = "ж", nH = "⇝", rH = "𝕫", sH = "ℤ", oH = "𝒵", aH = "𝓏", iH = "‍", cH = "‌", Ks = {
  Aacute: Vh,
  aacute: Gh,
  Abreve: Wh,
  abreve: Yh,
  ac: Qh,
  acd: Zh,
  acE: Xh,
  Acirc: Kh,
  acirc: Jh,
  acute: ep,
  Acy: tp,
  acy: np,
  AElig: rp,
  aelig: sp,
  af: op,
  Afr: ap,
  afr: ip,
  Agrave: cp,
  agrave: up,
  alefsym: dp,
  aleph: lp,
  Alpha: hp,
  alpha: pp,
  Amacr: fp,
  amacr: mp,
  amalg: gp,
  amp: bp,
  AMP: vp,
  andand: yp,
  And: wp,
  and: kp,
  andd: xp,
  andslope: Sp,
  andv: _p,
  ang: Cp,
  ange: Ap,
  angle: Ep,
  angmsdaa: Tp,
  angmsdab: Pp,
  angmsdac: Ip,
  angmsdad: Dp,
  angmsdae: Lp,
  angmsdaf: Rp,
  angmsdag: Op,
  angmsdah: jp,
  angmsd: Mp,
  angrt: Bp,
  angrtvb: qp,
  angrtvbd: zp,
  angsph: Np,
  angst: $p,
  angzarr: Hp,
  Aogon: Fp,
  aogon: Up,
  Aopf: Vp,
  aopf: Gp,
  apacir: Wp,
  ap: Yp,
  apE: Qp,
  ape: Zp,
  apid: Xp,
  apos: Kp,
  ApplyFunction: Jp,
  approx: ef,
  approxeq: tf,
  Aring: nf,
  aring: rf,
  Ascr: sf,
  ascr: of,
  Assign: af,
  ast: cf,
  asymp: uf,
  asympeq: df,
  Atilde: lf,
  atilde: hf,
  Auml: pf,
  auml: ff,
  awconint: mf,
  awint: gf,
  backcong: bf,
  backepsilon: vf,
  backprime: yf,
  backsim: wf,
  backsimeq: kf,
  Backslash: xf,
  Barv: Sf,
  barvee: _f,
  barwed: Cf,
  Barwed: Af,
  barwedge: Ef,
  bbrk: Tf,
  bbrktbrk: Pf,
  bcong: If,
  Bcy: Df,
  bcy: Lf,
  bdquo: Rf,
  becaus: Of,
  because: jf,
  Because: Mf,
  bemptyv: Bf,
  bepsi: qf,
  bernou: zf,
  Bernoullis: Nf,
  Beta: $f,
  beta: Hf,
  beth: Ff,
  between: Uf,
  Bfr: Vf,
  bfr: Gf,
  bigcap: Wf,
  bigcirc: Yf,
  bigcup: Qf,
  bigodot: Zf,
  bigoplus: Xf,
  bigotimes: Kf,
  bigsqcup: Jf,
  bigstar: em,
  bigtriangledown: tm,
  bigtriangleup: nm,
  biguplus: rm,
  bigvee: sm,
  bigwedge: om,
  bkarow: am,
  blacklozenge: im,
  blacksquare: cm,
  blacktriangle: um,
  blacktriangledown: dm,
  blacktriangleleft: lm,
  blacktriangleright: hm,
  blank: pm,
  blk12: fm,
  blk14: mm,
  blk34: gm,
  block: bm,
  bne: vm,
  bnequiv: ym,
  bNot: wm,
  bnot: km,
  Bopf: xm,
  bopf: Sm,
  bot: _m,
  bottom: Cm,
  bowtie: Am,
  boxbox: Em,
  boxdl: Tm,
  boxdL: Pm,
  boxDl: Im,
  boxDL: Dm,
  boxdr: Lm,
  boxdR: Rm,
  boxDr: Om,
  boxDR: jm,
  boxh: Mm,
  boxH: Bm,
  boxhd: qm,
  boxHd: zm,
  boxhD: Nm,
  boxHD: $m,
  boxhu: Hm,
  boxHu: Fm,
  boxhU: Um,
  boxHU: Vm,
  boxminus: Gm,
  boxplus: Wm,
  boxtimes: Ym,
  boxul: Qm,
  boxuL: Zm,
  boxUl: Xm,
  boxUL: Km,
  boxur: Jm,
  boxuR: eg,
  boxUr: tg,
  boxUR: ng,
  boxv: rg,
  boxV: sg,
  boxvh: og,
  boxvH: ag,
  boxVh: ig,
  boxVH: cg,
  boxvl: ug,
  boxvL: dg,
  boxVl: lg,
  boxVL: hg,
  boxvr: pg,
  boxvR: fg,
  boxVr: mg,
  boxVR: gg,
  bprime: bg,
  breve: vg,
  Breve: yg,
  brvbar: wg,
  bscr: kg,
  Bscr: xg,
  bsemi: Sg,
  bsim: _g,
  bsime: Cg,
  bsolb: Ag,
  bsol: Eg,
  bsolhsub: Tg,
  bull: Pg,
  bullet: Ig,
  bump: Dg,
  bumpE: Lg,
  bumpe: Rg,
  Bumpeq: Og,
  bumpeq: jg,
  Cacute: Mg,
  cacute: Bg,
  capand: qg,
  capbrcup: zg,
  capcap: Ng,
  cap: $g,
  Cap: Hg,
  capcup: Fg,
  capdot: Ug,
  CapitalDifferentialD: Vg,
  caps: Gg,
  caret: Wg,
  caron: Yg,
  Cayleys: Qg,
  ccaps: Zg,
  Ccaron: Xg,
  ccaron: Kg,
  Ccedil: Jg,
  ccedil: eb,
  Ccirc: tb,
  ccirc: nb,
  Cconint: rb,
  ccups: sb,
  ccupssm: ob,
  Cdot: ab,
  cdot: ib,
  cedil: cb,
  Cedilla: ub,
  cemptyv: db,
  cent: lb,
  centerdot: hb,
  CenterDot: pb,
  cfr: fb,
  Cfr: mb,
  CHcy: gb,
  chcy: bb,
  check: vb,
  checkmark: yb,
  Chi: wb,
  chi: kb,
  circ: xb,
  circeq: Sb,
  circlearrowleft: _b,
  circlearrowright: Cb,
  circledast: Ab,
  circledcirc: Eb,
  circleddash: Tb,
  CircleDot: Pb,
  circledR: Ib,
  circledS: Db,
  CircleMinus: Lb,
  CirclePlus: Rb,
  CircleTimes: Ob,
  cir: jb,
  cirE: Mb,
  cire: Bb,
  cirfnint: qb,
  cirmid: zb,
  cirscir: Nb,
  ClockwiseContourIntegral: $b,
  CloseCurlyDoubleQuote: Hb,
  CloseCurlyQuote: Fb,
  clubs: Ub,
  clubsuit: Vb,
  colon: Gb,
  Colon: Wb,
  Colone: Yb,
  colone: Qb,
  coloneq: Zb,
  comma: Xb,
  commat: Kb,
  comp: Jb,
  compfn: ev,
  complement: tv,
  complexes: nv,
  cong: rv,
  congdot: sv,
  Congruent: ov,
  conint: av,
  Conint: iv,
  ContourIntegral: cv,
  copf: uv,
  Copf: dv,
  coprod: lv,
  Coproduct: hv,
  copy: pv,
  COPY: fv,
  copysr: mv,
  CounterClockwiseContourIntegral: gv,
  crarr: bv,
  cross: vv,
  Cross: yv,
  Cscr: wv,
  cscr: kv,
  csub: xv,
  csube: Sv,
  csup: _v,
  csupe: Cv,
  ctdot: Av,
  cudarrl: Ev,
  cudarrr: Tv,
  cuepr: Pv,
  cuesc: Iv,
  cularr: Dv,
  cularrp: Lv,
  cupbrcap: Rv,
  cupcap: Ov,
  CupCap: jv,
  cup: Mv,
  Cup: Bv,
  cupcup: qv,
  cupdot: zv,
  cupor: Nv,
  cups: $v,
  curarr: Hv,
  curarrm: Fv,
  curlyeqprec: Uv,
  curlyeqsucc: Vv,
  curlyvee: Gv,
  curlywedge: Wv,
  curren: Yv,
  curvearrowleft: Qv,
  curvearrowright: Zv,
  cuvee: Xv,
  cuwed: Kv,
  cwconint: Jv,
  cwint: ey,
  cylcty: ty,
  dagger: ny,
  Dagger: ry,
  daleth: sy,
  darr: oy,
  Darr: ay,
  dArr: iy,
  dash: cy,
  Dashv: uy,
  dashv: dy,
  dbkarow: ly,
  dblac: hy,
  Dcaron: py,
  dcaron: fy,
  Dcy: my,
  dcy: gy,
  ddagger: by,
  ddarr: vy,
  DD: yy,
  dd: wy,
  DDotrahd: ky,
  ddotseq: xy,
  deg: Sy,
  Del: _y,
  Delta: Cy,
  delta: Ay,
  demptyv: Ey,
  dfisht: Ty,
  Dfr: Py,
  dfr: Iy,
  dHar: Dy,
  dharl: Ly,
  dharr: Ry,
  DiacriticalAcute: Oy,
  DiacriticalDot: jy,
  DiacriticalDoubleAcute: My,
  DiacriticalGrave: By,
  DiacriticalTilde: qy,
  diam: zy,
  diamond: Ny,
  Diamond: $y,
  diamondsuit: Hy,
  diams: Fy,
  die: Uy,
  DifferentialD: Vy,
  digamma: Gy,
  disin: Wy,
  div: Yy,
  divide: Qy,
  divideontimes: Zy,
  divonx: Xy,
  DJcy: Ky,
  djcy: Jy,
  dlcorn: ew,
  dlcrop: tw,
  dollar: nw,
  Dopf: rw,
  dopf: sw,
  Dot: ow,
  dot: aw,
  DotDot: iw,
  doteq: cw,
  doteqdot: uw,
  DotEqual: dw,
  dotminus: lw,
  dotplus: hw,
  dotsquare: pw,
  doublebarwedge: fw,
  DoubleContourIntegral: mw,
  DoubleDot: gw,
  DoubleDownArrow: bw,
  DoubleLeftArrow: vw,
  DoubleLeftRightArrow: yw,
  DoubleLeftTee: ww,
  DoubleLongLeftArrow: kw,
  DoubleLongLeftRightArrow: xw,
  DoubleLongRightArrow: Sw,
  DoubleRightArrow: _w,
  DoubleRightTee: Cw,
  DoubleUpArrow: Aw,
  DoubleUpDownArrow: Ew,
  DoubleVerticalBar: Tw,
  DownArrowBar: Pw,
  downarrow: Iw,
  DownArrow: Dw,
  Downarrow: Lw,
  DownArrowUpArrow: Rw,
  DownBreve: Ow,
  downdownarrows: jw,
  downharpoonleft: Mw,
  downharpoonright: Bw,
  DownLeftRightVector: qw,
  DownLeftTeeVector: zw,
  DownLeftVectorBar: Nw,
  DownLeftVector: $w,
  DownRightTeeVector: Hw,
  DownRightVectorBar: Fw,
  DownRightVector: Uw,
  DownTeeArrow: Vw,
  DownTee: Gw,
  drbkarow: Ww,
  drcorn: Yw,
  drcrop: Qw,
  Dscr: Zw,
  dscr: Xw,
  DScy: Kw,
  dscy: Jw,
  dsol: e0,
  Dstrok: t0,
  dstrok: n0,
  dtdot: r0,
  dtri: s0,
  dtrif: o0,
  duarr: a0,
  duhar: i0,
  dwangle: c0,
  DZcy: u0,
  dzcy: d0,
  dzigrarr: l0,
  Eacute: h0,
  eacute: p0,
  easter: f0,
  Ecaron: m0,
  ecaron: g0,
  Ecirc: b0,
  ecirc: v0,
  ecir: y0,
  ecolon: w0,
  Ecy: k0,
  ecy: x0,
  eDDot: S0,
  Edot: _0,
  edot: C0,
  eDot: A0,
  ee: E0,
  efDot: T0,
  Efr: P0,
  efr: I0,
  eg: D0,
  Egrave: L0,
  egrave: R0,
  egs: O0,
  egsdot: j0,
  el: M0,
  Element: B0,
  elinters: q0,
  ell: z0,
  els: N0,
  elsdot: $0,
  Emacr: H0,
  emacr: F0,
  empty: U0,
  emptyset: V0,
  EmptySmallSquare: G0,
  emptyv: W0,
  EmptyVerySmallSquare: Y0,
  emsp13: Q0,
  emsp14: Z0,
  emsp: X0,
  ENG: K0,
  eng: J0,
  ensp: e1,
  Eogon: t1,
  eogon: n1,
  Eopf: r1,
  eopf: s1,
  epar: o1,
  eparsl: a1,
  eplus: i1,
  epsi: c1,
  Epsilon: u1,
  epsilon: d1,
  epsiv: l1,
  eqcirc: h1,
  eqcolon: p1,
  eqsim: f1,
  eqslantgtr: m1,
  eqslantless: g1,
  Equal: b1,
  equals: v1,
  EqualTilde: y1,
  equest: w1,
  Equilibrium: k1,
  equiv: x1,
  equivDD: S1,
  eqvparsl: _1,
  erarr: C1,
  erDot: A1,
  escr: E1,
  Escr: T1,
  esdot: P1,
  Esim: I1,
  esim: D1,
  Eta: L1,
  eta: R1,
  ETH: O1,
  eth: j1,
  Euml: M1,
  euml: B1,
  euro: q1,
  excl: z1,
  exist: N1,
  Exists: $1,
  expectation: H1,
  exponentiale: F1,
  ExponentialE: U1,
  fallingdotseq: V1,
  Fcy: G1,
  fcy: W1,
  female: Y1,
  ffilig: Q1,
  fflig: Z1,
  ffllig: X1,
  Ffr: K1,
  ffr: J1,
  filig: ek,
  FilledSmallSquare: tk,
  FilledVerySmallSquare: nk,
  fjlig: rk,
  flat: sk,
  fllig: ok,
  fltns: ak,
  fnof: ik,
  Fopf: ck,
  fopf: uk,
  forall: dk,
  ForAll: lk,
  fork: hk,
  forkv: pk,
  Fouriertrf: fk,
  fpartint: mk,
  frac12: gk,
  frac13: bk,
  frac14: vk,
  frac15: yk,
  frac16: wk,
  frac18: kk,
  frac23: xk,
  frac25: Sk,
  frac34: _k,
  frac35: Ck,
  frac38: Ak,
  frac45: Ek,
  frac56: Tk,
  frac58: Pk,
  frac78: Ik,
  frasl: Dk,
  frown: Lk,
  fscr: Rk,
  Fscr: Ok,
  gacute: jk,
  Gamma: Mk,
  gamma: Bk,
  Gammad: qk,
  gammad: zk,
  gap: Nk,
  Gbreve: $k,
  gbreve: Hk,
  Gcedil: Fk,
  Gcirc: Uk,
  gcirc: Vk,
  Gcy: Gk,
  gcy: Wk,
  Gdot: Yk,
  gdot: Qk,
  ge: Zk,
  gE: Xk,
  gEl: Kk,
  gel: Jk,
  geq: e3,
  geqq: t3,
  geqslant: n3,
  gescc: r3,
  ges: s3,
  gesdot: o3,
  gesdoto: a3,
  gesdotol: i3,
  gesl: c3,
  gesles: u3,
  Gfr: d3,
  gfr: l3,
  gg: h3,
  Gg: p3,
  ggg: f3,
  gimel: m3,
  GJcy: g3,
  gjcy: b3,
  gla: v3,
  gl: y3,
  glE: w3,
  glj: k3,
  gnap: x3,
  gnapprox: S3,
  gne: _3,
  gnE: C3,
  gneq: A3,
  gneqq: E3,
  gnsim: T3,
  Gopf: P3,
  gopf: I3,
  grave: D3,
  GreaterEqual: L3,
  GreaterEqualLess: R3,
  GreaterFullEqual: O3,
  GreaterGreater: j3,
  GreaterLess: M3,
  GreaterSlantEqual: B3,
  GreaterTilde: q3,
  Gscr: z3,
  gscr: N3,
  gsim: $3,
  gsime: H3,
  gsiml: F3,
  gtcc: U3,
  gtcir: V3,
  gt: G3,
  GT: W3,
  Gt: Y3,
  gtdot: Q3,
  gtlPar: Z3,
  gtquest: X3,
  gtrapprox: K3,
  gtrarr: J3,
  gtrdot: e8,
  gtreqless: t8,
  gtreqqless: n8,
  gtrless: r8,
  gtrsim: s8,
  gvertneqq: o8,
  gvnE: a8,
  Hacek: i8,
  hairsp: c8,
  half: u8,
  hamilt: d8,
  HARDcy: l8,
  hardcy: h8,
  harrcir: p8,
  harr: f8,
  hArr: m8,
  harrw: g8,
  Hat: b8,
  hbar: v8,
  Hcirc: y8,
  hcirc: w8,
  hearts: k8,
  heartsuit: x8,
  hellip: S8,
  hercon: _8,
  hfr: C8,
  Hfr: A8,
  HilbertSpace: E8,
  hksearow: T8,
  hkswarow: P8,
  hoarr: I8,
  homtht: D8,
  hookleftarrow: L8,
  hookrightarrow: R8,
  hopf: O8,
  Hopf: j8,
  horbar: M8,
  HorizontalLine: B8,
  hscr: q8,
  Hscr: z8,
  hslash: N8,
  Hstrok: $8,
  hstrok: H8,
  HumpDownHump: F8,
  HumpEqual: U8,
  hybull: V8,
  hyphen: G8,
  Iacute: W8,
  iacute: Y8,
  ic: Q8,
  Icirc: Z8,
  icirc: X8,
  Icy: K8,
  icy: J8,
  Idot: ex,
  IEcy: tx,
  iecy: nx,
  iexcl: rx,
  iff: sx,
  ifr: ox,
  Ifr: ax,
  Igrave: ix,
  igrave: cx,
  ii: ux,
  iiiint: dx,
  iiint: lx,
  iinfin: hx,
  iiota: px,
  IJlig: fx,
  ijlig: mx,
  Imacr: gx,
  imacr: bx,
  image: vx,
  ImaginaryI: yx,
  imagline: wx,
  imagpart: kx,
  imath: xx,
  Im: Sx,
  imof: _x,
  imped: Cx,
  Implies: Ax,
  incare: Ex,
  in: "∈",
  infin: Tx,
  infintie: Px,
  inodot: Ix,
  intcal: Dx,
  int: Lx,
  Int: Rx,
  integers: Ox,
  Integral: jx,
  intercal: Mx,
  Intersection: Bx,
  intlarhk: qx,
  intprod: zx,
  InvisibleComma: Nx,
  InvisibleTimes: $x,
  IOcy: Hx,
  iocy: Fx,
  Iogon: Ux,
  iogon: Vx,
  Iopf: Gx,
  iopf: Wx,
  Iota: Yx,
  iota: Qx,
  iprod: Zx,
  iquest: Xx,
  iscr: Kx,
  Iscr: Jx,
  isin: eS,
  isindot: tS,
  isinE: nS,
  isins: rS,
  isinsv: sS,
  isinv: oS,
  it: aS,
  Itilde: iS,
  itilde: cS,
  Iukcy: uS,
  iukcy: dS,
  Iuml: lS,
  iuml: hS,
  Jcirc: pS,
  jcirc: fS,
  Jcy: mS,
  jcy: gS,
  Jfr: bS,
  jfr: vS,
  jmath: yS,
  Jopf: wS,
  jopf: kS,
  Jscr: xS,
  jscr: SS,
  Jsercy: _S,
  jsercy: CS,
  Jukcy: AS,
  jukcy: ES,
  Kappa: TS,
  kappa: PS,
  kappav: IS,
  Kcedil: DS,
  kcedil: LS,
  Kcy: RS,
  kcy: OS,
  Kfr: jS,
  kfr: MS,
  kgreen: BS,
  KHcy: qS,
  khcy: zS,
  KJcy: NS,
  kjcy: $S,
  Kopf: HS,
  kopf: FS,
  Kscr: US,
  kscr: VS,
  lAarr: GS,
  Lacute: WS,
  lacute: YS,
  laemptyv: QS,
  lagran: ZS,
  Lambda: XS,
  lambda: KS,
  lang: JS,
  Lang: e_,
  langd: t_,
  langle: n_,
  lap: r_,
  Laplacetrf: s_,
  laquo: o_,
  larrb: a_,
  larrbfs: i_,
  larr: c_,
  Larr: u_,
  lArr: d_,
  larrfs: l_,
  larrhk: h_,
  larrlp: p_,
  larrpl: f_,
  larrsim: m_,
  larrtl: g_,
  latail: b_,
  lAtail: v_,
  lat: y_,
  late: w_,
  lates: k_,
  lbarr: x_,
  lBarr: S_,
  lbbrk: __,
  lbrace: C_,
  lbrack: A_,
  lbrke: E_,
  lbrksld: T_,
  lbrkslu: P_,
  Lcaron: I_,
  lcaron: D_,
  Lcedil: L_,
  lcedil: R_,
  lceil: O_,
  lcub: j_,
  Lcy: M_,
  lcy: B_,
  ldca: q_,
  ldquo: z_,
  ldquor: N_,
  ldrdhar: $_,
  ldrushar: H_,
  ldsh: F_,
  le: U_,
  lE: V_,
  LeftAngleBracket: G_,
  LeftArrowBar: W_,
  leftarrow: Y_,
  LeftArrow: Q_,
  Leftarrow: Z_,
  LeftArrowRightArrow: X_,
  leftarrowtail: K_,
  LeftCeiling: J_,
  LeftDoubleBracket: eC,
  LeftDownTeeVector: tC,
  LeftDownVectorBar: nC,
  LeftDownVector: rC,
  LeftFloor: sC,
  leftharpoondown: oC,
  leftharpoonup: aC,
  leftleftarrows: iC,
  leftrightarrow: cC,
  LeftRightArrow: uC,
  Leftrightarrow: dC,
  leftrightarrows: lC,
  leftrightharpoons: hC,
  leftrightsquigarrow: pC,
  LeftRightVector: fC,
  LeftTeeArrow: mC,
  LeftTee: gC,
  LeftTeeVector: bC,
  leftthreetimes: vC,
  LeftTriangleBar: yC,
  LeftTriangle: wC,
  LeftTriangleEqual: kC,
  LeftUpDownVector: xC,
  LeftUpTeeVector: SC,
  LeftUpVectorBar: _C,
  LeftUpVector: CC,
  LeftVectorBar: AC,
  LeftVector: EC,
  lEg: TC,
  leg: PC,
  leq: IC,
  leqq: DC,
  leqslant: LC,
  lescc: RC,
  les: OC,
  lesdot: jC,
  lesdoto: MC,
  lesdotor: BC,
  lesg: qC,
  lesges: zC,
  lessapprox: NC,
  lessdot: $C,
  lesseqgtr: HC,
  lesseqqgtr: FC,
  LessEqualGreater: UC,
  LessFullEqual: VC,
  LessGreater: GC,
  lessgtr: WC,
  LessLess: YC,
  lesssim: QC,
  LessSlantEqual: ZC,
  LessTilde: XC,
  lfisht: KC,
  lfloor: JC,
  Lfr: e2,
  lfr: t2,
  lg: n2,
  lgE: r2,
  lHar: s2,
  lhard: o2,
  lharu: a2,
  lharul: i2,
  lhblk: c2,
  LJcy: u2,
  ljcy: d2,
  llarr: l2,
  ll: h2,
  Ll: p2,
  llcorner: f2,
  Lleftarrow: m2,
  llhard: g2,
  lltri: b2,
  Lmidot: v2,
  lmidot: y2,
  lmoustache: w2,
  lmoust: k2,
  lnap: x2,
  lnapprox: S2,
  lne: _2,
  lnE: C2,
  lneq: A2,
  lneqq: E2,
  lnsim: T2,
  loang: P2,
  loarr: I2,
  lobrk: D2,
  longleftarrow: L2,
  LongLeftArrow: R2,
  Longleftarrow: O2,
  longleftrightarrow: j2,
  LongLeftRightArrow: M2,
  Longleftrightarrow: B2,
  longmapsto: q2,
  longrightarrow: z2,
  LongRightArrow: N2,
  Longrightarrow: $2,
  looparrowleft: H2,
  looparrowright: F2,
  lopar: U2,
  Lopf: V2,
  lopf: G2,
  loplus: W2,
  lotimes: Y2,
  lowast: Q2,
  lowbar: Z2,
  LowerLeftArrow: X2,
  LowerRightArrow: K2,
  loz: J2,
  lozenge: eA,
  lozf: tA,
  lpar: nA,
  lparlt: rA,
  lrarr: sA,
  lrcorner: oA,
  lrhar: aA,
  lrhard: iA,
  lrm: cA,
  lrtri: uA,
  lsaquo: dA,
  lscr: lA,
  Lscr: hA,
  lsh: pA,
  Lsh: fA,
  lsim: mA,
  lsime: gA,
  lsimg: bA,
  lsqb: vA,
  lsquo: yA,
  lsquor: wA,
  Lstrok: kA,
  lstrok: xA,
  ltcc: SA,
  ltcir: _A,
  lt: CA,
  LT: AA,
  Lt: EA,
  ltdot: TA,
  lthree: PA,
  ltimes: IA,
  ltlarr: DA,
  ltquest: LA,
  ltri: RA,
  ltrie: OA,
  ltrif: jA,
  ltrPar: MA,
  lurdshar: BA,
  luruhar: qA,
  lvertneqq: zA,
  lvnE: NA,
  macr: $A,
  male: HA,
  malt: FA,
  maltese: UA,
  Map: "⤅",
  map: VA,
  mapsto: GA,
  mapstodown: WA,
  mapstoleft: YA,
  mapstoup: QA,
  marker: ZA,
  mcomma: XA,
  Mcy: KA,
  mcy: JA,
  mdash: eE,
  mDDot: tE,
  measuredangle: nE,
  MediumSpace: rE,
  Mellintrf: sE,
  Mfr: oE,
  mfr: aE,
  mho: iE,
  micro: cE,
  midast: uE,
  midcir: dE,
  mid: lE,
  middot: hE,
  minusb: pE,
  minus: fE,
  minusd: mE,
  minusdu: gE,
  MinusPlus: bE,
  mlcp: vE,
  mldr: yE,
  mnplus: wE,
  models: kE,
  Mopf: xE,
  mopf: SE,
  mp: _E,
  mscr: CE,
  Mscr: AE,
  mstpos: EE,
  Mu: TE,
  mu: PE,
  multimap: IE,
  mumap: DE,
  nabla: LE,
  Nacute: RE,
  nacute: OE,
  nang: jE,
  nap: ME,
  napE: BE,
  napid: qE,
  napos: zE,
  napprox: NE,
  natural: $E,
  naturals: HE,
  natur: FE,
  nbsp: UE,
  nbump: VE,
  nbumpe: GE,
  ncap: WE,
  Ncaron: YE,
  ncaron: QE,
  Ncedil: ZE,
  ncedil: XE,
  ncong: KE,
  ncongdot: JE,
  ncup: eT,
  Ncy: tT,
  ncy: nT,
  ndash: rT,
  nearhk: sT,
  nearr: oT,
  neArr: aT,
  nearrow: iT,
  ne: cT,
  nedot: uT,
  NegativeMediumSpace: dT,
  NegativeThickSpace: lT,
  NegativeThinSpace: hT,
  NegativeVeryThinSpace: pT,
  nequiv: fT,
  nesear: mT,
  nesim: gT,
  NestedGreaterGreater: bT,
  NestedLessLess: vT,
  NewLine: yT,
  nexist: wT,
  nexists: kT,
  Nfr: xT,
  nfr: ST,
  ngE: _T,
  nge: CT,
  ngeq: AT,
  ngeqq: ET,
  ngeqslant: TT,
  nges: PT,
  nGg: IT,
  ngsim: DT,
  nGt: LT,
  ngt: RT,
  ngtr: OT,
  nGtv: jT,
  nharr: MT,
  nhArr: BT,
  nhpar: qT,
  ni: zT,
  nis: NT,
  nisd: $T,
  niv: HT,
  NJcy: FT,
  njcy: UT,
  nlarr: VT,
  nlArr: GT,
  nldr: WT,
  nlE: YT,
  nle: QT,
  nleftarrow: ZT,
  nLeftarrow: XT,
  nleftrightarrow: KT,
  nLeftrightarrow: JT,
  nleq: eP,
  nleqq: tP,
  nleqslant: nP,
  nles: rP,
  nless: sP,
  nLl: oP,
  nlsim: aP,
  nLt: iP,
  nlt: cP,
  nltri: uP,
  nltrie: dP,
  nLtv: lP,
  nmid: hP,
  NoBreak: pP,
  NonBreakingSpace: fP,
  nopf: mP,
  Nopf: gP,
  Not: bP,
  not: vP,
  NotCongruent: yP,
  NotCupCap: wP,
  NotDoubleVerticalBar: kP,
  NotElement: xP,
  NotEqual: SP,
  NotEqualTilde: _P,
  NotExists: CP,
  NotGreater: AP,
  NotGreaterEqual: EP,
  NotGreaterFullEqual: TP,
  NotGreaterGreater: PP,
  NotGreaterLess: IP,
  NotGreaterSlantEqual: DP,
  NotGreaterTilde: LP,
  NotHumpDownHump: RP,
  NotHumpEqual: OP,
  notin: jP,
  notindot: MP,
  notinE: BP,
  notinva: qP,
  notinvb: zP,
  notinvc: NP,
  NotLeftTriangleBar: $P,
  NotLeftTriangle: HP,
  NotLeftTriangleEqual: FP,
  NotLess: UP,
  NotLessEqual: VP,
  NotLessGreater: GP,
  NotLessLess: WP,
  NotLessSlantEqual: YP,
  NotLessTilde: QP,
  NotNestedGreaterGreater: ZP,
  NotNestedLessLess: XP,
  notni: KP,
  notniva: JP,
  notnivb: eI,
  notnivc: tI,
  NotPrecedes: nI,
  NotPrecedesEqual: rI,
  NotPrecedesSlantEqual: sI,
  NotReverseElement: oI,
  NotRightTriangleBar: aI,
  NotRightTriangle: iI,
  NotRightTriangleEqual: cI,
  NotSquareSubset: uI,
  NotSquareSubsetEqual: dI,
  NotSquareSuperset: lI,
  NotSquareSupersetEqual: hI,
  NotSubset: pI,
  NotSubsetEqual: fI,
  NotSucceeds: mI,
  NotSucceedsEqual: gI,
  NotSucceedsSlantEqual: bI,
  NotSucceedsTilde: vI,
  NotSuperset: yI,
  NotSupersetEqual: wI,
  NotTilde: kI,
  NotTildeEqual: xI,
  NotTildeFullEqual: SI,
  NotTildeTilde: _I,
  NotVerticalBar: CI,
  nparallel: AI,
  npar: EI,
  nparsl: TI,
  npart: PI,
  npolint: II,
  npr: DI,
  nprcue: LI,
  nprec: RI,
  npreceq: OI,
  npre: jI,
  nrarrc: MI,
  nrarr: BI,
  nrArr: qI,
  nrarrw: zI,
  nrightarrow: NI,
  nRightarrow: $I,
  nrtri: HI,
  nrtrie: FI,
  nsc: UI,
  nsccue: VI,
  nsce: GI,
  Nscr: WI,
  nscr: YI,
  nshortmid: QI,
  nshortparallel: ZI,
  nsim: XI,
  nsime: KI,
  nsimeq: JI,
  nsmid: e4,
  nspar: t4,
  nsqsube: n4,
  nsqsupe: r4,
  nsub: s4,
  nsubE: o4,
  nsube: a4,
  nsubset: i4,
  nsubseteq: c4,
  nsubseteqq: u4,
  nsucc: d4,
  nsucceq: l4,
  nsup: h4,
  nsupE: p4,
  nsupe: f4,
  nsupset: m4,
  nsupseteq: g4,
  nsupseteqq: b4,
  ntgl: v4,
  Ntilde: y4,
  ntilde: w4,
  ntlg: k4,
  ntriangleleft: x4,
  ntrianglelefteq: S4,
  ntriangleright: _4,
  ntrianglerighteq: C4,
  Nu: A4,
  nu: E4,
  num: T4,
  numero: P4,
  numsp: I4,
  nvap: D4,
  nvdash: L4,
  nvDash: R4,
  nVdash: O4,
  nVDash: j4,
  nvge: M4,
  nvgt: B4,
  nvHarr: q4,
  nvinfin: z4,
  nvlArr: N4,
  nvle: $4,
  nvlt: H4,
  nvltrie: F4,
  nvrArr: U4,
  nvrtrie: V4,
  nvsim: G4,
  nwarhk: W4,
  nwarr: Y4,
  nwArr: Q4,
  nwarrow: Z4,
  nwnear: X4,
  Oacute: K4,
  oacute: J4,
  oast: e6,
  Ocirc: t6,
  ocirc: n6,
  ocir: r6,
  Ocy: s6,
  ocy: o6,
  odash: a6,
  Odblac: i6,
  odblac: c6,
  odiv: u6,
  odot: d6,
  odsold: l6,
  OElig: h6,
  oelig: p6,
  ofcir: f6,
  Ofr: m6,
  ofr: g6,
  ogon: b6,
  Ograve: v6,
  ograve: y6,
  ogt: w6,
  ohbar: k6,
  ohm: x6,
  oint: S6,
  olarr: _6,
  olcir: C6,
  olcross: A6,
  oline: E6,
  olt: T6,
  Omacr: P6,
  omacr: I6,
  Omega: D6,
  omega: L6,
  Omicron: R6,
  omicron: O6,
  omid: j6,
  ominus: M6,
  Oopf: B6,
  oopf: q6,
  opar: z6,
  OpenCurlyDoubleQuote: N6,
  OpenCurlyQuote: $6,
  operp: H6,
  oplus: F6,
  orarr: U6,
  Or: V6,
  or: G6,
  ord: W6,
  order: Y6,
  orderof: Q6,
  ordf: Z6,
  ordm: X6,
  origof: K6,
  oror: J6,
  orslope: e5,
  orv: t5,
  oS: n5,
  Oscr: r5,
  oscr: s5,
  Oslash: o5,
  oslash: a5,
  osol: i5,
  Otilde: c5,
  otilde: u5,
  otimesas: d5,
  Otimes: l5,
  otimes: h5,
  Ouml: p5,
  ouml: f5,
  ovbar: m5,
  OverBar: g5,
  OverBrace: b5,
  OverBracket: v5,
  OverParenthesis: y5,
  para: w5,
  parallel: k5,
  par: x5,
  parsim: S5,
  parsl: _5,
  part: C5,
  PartialD: A5,
  Pcy: E5,
  pcy: T5,
  percnt: P5,
  period: I5,
  permil: D5,
  perp: L5,
  pertenk: R5,
  Pfr: O5,
  pfr: j5,
  Phi: M5,
  phi: B5,
  phiv: q5,
  phmmat: z5,
  phone: N5,
  Pi: $5,
  pi: H5,
  pitchfork: F5,
  piv: U5,
  planck: V5,
  planckh: G5,
  plankv: W5,
  plusacir: Y5,
  plusb: Q5,
  pluscir: Z5,
  plus: X5,
  plusdo: K5,
  plusdu: J5,
  pluse: eD,
  PlusMinus: tD,
  plusmn: nD,
  plussim: rD,
  plustwo: sD,
  pm: oD,
  Poincareplane: aD,
  pointint: iD,
  popf: cD,
  Popf: uD,
  pound: dD,
  prap: lD,
  Pr: hD,
  pr: pD,
  prcue: fD,
  precapprox: mD,
  prec: gD,
  preccurlyeq: bD,
  Precedes: vD,
  PrecedesEqual: yD,
  PrecedesSlantEqual: wD,
  PrecedesTilde: kD,
  preceq: xD,
  precnapprox: SD,
  precneqq: _D,
  precnsim: CD,
  pre: AD,
  prE: ED,
  precsim: TD,
  prime: PD,
  Prime: ID,
  primes: DD,
  prnap: LD,
  prnE: RD,
  prnsim: OD,
  prod: jD,
  Product: MD,
  profalar: BD,
  profline: qD,
  profsurf: zD,
  prop: ND,
  Proportional: $D,
  Proportion: HD,
  propto: FD,
  prsim: UD,
  prurel: VD,
  Pscr: GD,
  pscr: WD,
  Psi: YD,
  psi: QD,
  puncsp: ZD,
  Qfr: XD,
  qfr: KD,
  qint: JD,
  qopf: eL,
  Qopf: tL,
  qprime: nL,
  Qscr: rL,
  qscr: sL,
  quaternions: oL,
  quatint: aL,
  quest: iL,
  questeq: cL,
  quot: uL,
  QUOT: dL,
  rAarr: lL,
  race: hL,
  Racute: pL,
  racute: fL,
  radic: mL,
  raemptyv: gL,
  rang: bL,
  Rang: vL,
  rangd: yL,
  range: wL,
  rangle: kL,
  raquo: xL,
  rarrap: SL,
  rarrb: _L,
  rarrbfs: CL,
  rarrc: AL,
  rarr: EL,
  Rarr: TL,
  rArr: PL,
  rarrfs: IL,
  rarrhk: DL,
  rarrlp: LL,
  rarrpl: RL,
  rarrsim: OL,
  Rarrtl: jL,
  rarrtl: ML,
  rarrw: BL,
  ratail: qL,
  rAtail: zL,
  ratio: NL,
  rationals: $L,
  rbarr: HL,
  rBarr: FL,
  RBarr: UL,
  rbbrk: VL,
  rbrace: GL,
  rbrack: WL,
  rbrke: YL,
  rbrksld: QL,
  rbrkslu: ZL,
  Rcaron: XL,
  rcaron: KL,
  Rcedil: JL,
  rcedil: eR,
  rceil: tR,
  rcub: nR,
  Rcy: rR,
  rcy: sR,
  rdca: oR,
  rdldhar: aR,
  rdquo: iR,
  rdquor: cR,
  rdsh: uR,
  real: dR,
  realine: lR,
  realpart: hR,
  reals: pR,
  Re: fR,
  rect: mR,
  reg: gR,
  REG: bR,
  ReverseElement: vR,
  ReverseEquilibrium: yR,
  ReverseUpEquilibrium: wR,
  rfisht: kR,
  rfloor: xR,
  rfr: SR,
  Rfr: _R,
  rHar: CR,
  rhard: AR,
  rharu: ER,
  rharul: TR,
  Rho: PR,
  rho: IR,
  rhov: DR,
  RightAngleBracket: LR,
  RightArrowBar: RR,
  rightarrow: OR,
  RightArrow: jR,
  Rightarrow: MR,
  RightArrowLeftArrow: BR,
  rightarrowtail: qR,
  RightCeiling: zR,
  RightDoubleBracket: NR,
  RightDownTeeVector: $R,
  RightDownVectorBar: HR,
  RightDownVector: FR,
  RightFloor: UR,
  rightharpoondown: VR,
  rightharpoonup: GR,
  rightleftarrows: WR,
  rightleftharpoons: YR,
  rightrightarrows: QR,
  rightsquigarrow: ZR,
  RightTeeArrow: XR,
  RightTee: KR,
  RightTeeVector: JR,
  rightthreetimes: eO,
  RightTriangleBar: tO,
  RightTriangle: nO,
  RightTriangleEqual: rO,
  RightUpDownVector: sO,
  RightUpTeeVector: oO,
  RightUpVectorBar: aO,
  RightUpVector: iO,
  RightVectorBar: cO,
  RightVector: uO,
  ring: dO,
  risingdotseq: lO,
  rlarr: hO,
  rlhar: pO,
  rlm: fO,
  rmoustache: mO,
  rmoust: gO,
  rnmid: bO,
  roang: vO,
  roarr: yO,
  robrk: wO,
  ropar: kO,
  ropf: xO,
  Ropf: SO,
  roplus: _O,
  rotimes: CO,
  RoundImplies: AO,
  rpar: EO,
  rpargt: TO,
  rppolint: PO,
  rrarr: IO,
  Rrightarrow: DO,
  rsaquo: LO,
  rscr: RO,
  Rscr: OO,
  rsh: jO,
  Rsh: MO,
  rsqb: BO,
  rsquo: qO,
  rsquor: zO,
  rthree: NO,
  rtimes: $O,
  rtri: HO,
  rtrie: FO,
  rtrif: UO,
  rtriltri: VO,
  RuleDelayed: GO,
  ruluhar: WO,
  rx: YO,
  Sacute: QO,
  sacute: ZO,
  sbquo: XO,
  scap: KO,
  Scaron: JO,
  scaron: ej,
  Sc: tj,
  sc: nj,
  sccue: rj,
  sce: sj,
  scE: oj,
  Scedil: aj,
  scedil: ij,
  Scirc: cj,
  scirc: uj,
  scnap: dj,
  scnE: lj,
  scnsim: hj,
  scpolint: pj,
  scsim: fj,
  Scy: mj,
  scy: gj,
  sdotb: bj,
  sdot: vj,
  sdote: yj,
  searhk: wj,
  searr: kj,
  seArr: xj,
  searrow: Sj,
  sect: _j,
  semi: Cj,
  seswar: Aj,
  setminus: Ej,
  setmn: Tj,
  sext: Pj,
  Sfr: Ij,
  sfr: Dj,
  sfrown: Lj,
  sharp: Rj,
  SHCHcy: Oj,
  shchcy: jj,
  SHcy: Mj,
  shcy: Bj,
  ShortDownArrow: qj,
  ShortLeftArrow: zj,
  shortmid: Nj,
  shortparallel: $j,
  ShortRightArrow: Hj,
  ShortUpArrow: Fj,
  shy: Uj,
  Sigma: Vj,
  sigma: Gj,
  sigmaf: Wj,
  sigmav: Yj,
  sim: Qj,
  simdot: Zj,
  sime: Xj,
  simeq: Kj,
  simg: Jj,
  simgE: eM,
  siml: tM,
  simlE: nM,
  simne: rM,
  simplus: sM,
  simrarr: oM,
  slarr: aM,
  SmallCircle: iM,
  smallsetminus: cM,
  smashp: uM,
  smeparsl: dM,
  smid: lM,
  smile: hM,
  smt: pM,
  smte: fM,
  smtes: mM,
  SOFTcy: gM,
  softcy: bM,
  solbar: vM,
  solb: yM,
  sol: wM,
  Sopf: kM,
  sopf: xM,
  spades: SM,
  spadesuit: _M,
  spar: CM,
  sqcap: AM,
  sqcaps: EM,
  sqcup: TM,
  sqcups: PM,
  Sqrt: IM,
  sqsub: DM,
  sqsube: LM,
  sqsubset: RM,
  sqsubseteq: OM,
  sqsup: jM,
  sqsupe: MM,
  sqsupset: BM,
  sqsupseteq: qM,
  square: zM,
  Square: NM,
  SquareIntersection: $M,
  SquareSubset: HM,
  SquareSubsetEqual: FM,
  SquareSuperset: UM,
  SquareSupersetEqual: VM,
  SquareUnion: GM,
  squarf: WM,
  squ: YM,
  squf: QM,
  srarr: ZM,
  Sscr: XM,
  sscr: KM,
  ssetmn: JM,
  ssmile: e9,
  sstarf: t9,
  Star: n9,
  star: r9,
  starf: s9,
  straightepsilon: o9,
  straightphi: a9,
  strns: i9,
  sub: c9,
  Sub: u9,
  subdot: d9,
  subE: l9,
  sube: h9,
  subedot: p9,
  submult: f9,
  subnE: m9,
  subne: g9,
  subplus: b9,
  subrarr: v9,
  subset: y9,
  Subset: w9,
  subseteq: k9,
  subseteqq: x9,
  SubsetEqual: S9,
  subsetneq: _9,
  subsetneqq: C9,
  subsim: A9,
  subsub: E9,
  subsup: T9,
  succapprox: P9,
  succ: I9,
  succcurlyeq: D9,
  Succeeds: L9,
  SucceedsEqual: R9,
  SucceedsSlantEqual: O9,
  SucceedsTilde: j9,
  succeq: M9,
  succnapprox: B9,
  succneqq: q9,
  succnsim: z9,
  succsim: N9,
  SuchThat: $9,
  sum: H9,
  Sum: F9,
  sung: U9,
  sup1: V9,
  sup2: G9,
  sup3: W9,
  sup: Y9,
  Sup: Q9,
  supdot: Z9,
  supdsub: X9,
  supE: K9,
  supe: J9,
  supedot: eB,
  Superset: tB,
  SupersetEqual: nB,
  suphsol: rB,
  suphsub: sB,
  suplarr: oB,
  supmult: aB,
  supnE: iB,
  supne: cB,
  supplus: uB,
  supset: dB,
  Supset: lB,
  supseteq: hB,
  supseteqq: pB,
  supsetneq: fB,
  supsetneqq: mB,
  supsim: gB,
  supsub: bB,
  supsup: vB,
  swarhk: yB,
  swarr: wB,
  swArr: kB,
  swarrow: xB,
  swnwar: SB,
  szlig: _B,
  Tab: CB,
  target: AB,
  Tau: EB,
  tau: TB,
  tbrk: PB,
  Tcaron: IB,
  tcaron: DB,
  Tcedil: LB,
  tcedil: RB,
  Tcy: OB,
  tcy: jB,
  tdot: MB,
  telrec: BB,
  Tfr: qB,
  tfr: zB,
  there4: NB,
  therefore: $B,
  Therefore: HB,
  Theta: FB,
  theta: UB,
  thetasym: VB,
  thetav: GB,
  thickapprox: WB,
  thicksim: YB,
  ThickSpace: QB,
  ThinSpace: ZB,
  thinsp: XB,
  thkap: KB,
  thksim: JB,
  THORN: e7,
  thorn: t7,
  tilde: n7,
  Tilde: r7,
  TildeEqual: s7,
  TildeFullEqual: o7,
  TildeTilde: a7,
  timesbar: i7,
  timesb: c7,
  times: u7,
  timesd: d7,
  tint: l7,
  toea: h7,
  topbot: p7,
  topcir: f7,
  top: m7,
  Topf: g7,
  topf: b7,
  topfork: v7,
  tosa: y7,
  tprime: w7,
  trade: k7,
  TRADE: x7,
  triangle: S7,
  triangledown: _7,
  triangleleft: C7,
  trianglelefteq: A7,
  triangleq: E7,
  triangleright: T7,
  trianglerighteq: P7,
  tridot: I7,
  trie: D7,
  triminus: L7,
  TripleDot: R7,
  triplus: O7,
  trisb: j7,
  tritime: M7,
  trpezium: B7,
  Tscr: q7,
  tscr: z7,
  TScy: N7,
  tscy: $7,
  TSHcy: H7,
  tshcy: F7,
  Tstrok: U7,
  tstrok: V7,
  twixt: G7,
  twoheadleftarrow: W7,
  twoheadrightarrow: Y7,
  Uacute: Q7,
  uacute: Z7,
  uarr: X7,
  Uarr: K7,
  uArr: J7,
  Uarrocir: eq,
  Ubrcy: tq,
  ubrcy: nq,
  Ubreve: rq,
  ubreve: sq,
  Ucirc: oq,
  ucirc: aq,
  Ucy: iq,
  ucy: cq,
  udarr: uq,
  Udblac: dq,
  udblac: lq,
  udhar: hq,
  ufisht: pq,
  Ufr: fq,
  ufr: mq,
  Ugrave: gq,
  ugrave: bq,
  uHar: vq,
  uharl: yq,
  uharr: wq,
  uhblk: kq,
  ulcorn: xq,
  ulcorner: Sq,
  ulcrop: _q,
  ultri: Cq,
  Umacr: Aq,
  umacr: Eq,
  uml: Tq,
  UnderBar: Pq,
  UnderBrace: Iq,
  UnderBracket: Dq,
  UnderParenthesis: Lq,
  Union: Rq,
  UnionPlus: Oq,
  Uogon: jq,
  uogon: Mq,
  Uopf: Bq,
  uopf: qq,
  UpArrowBar: zq,
  uparrow: Nq,
  UpArrow: $q,
  Uparrow: Hq,
  UpArrowDownArrow: Fq,
  updownarrow: Uq,
  UpDownArrow: Vq,
  Updownarrow: Gq,
  UpEquilibrium: Wq,
  upharpoonleft: Yq,
  upharpoonright: Qq,
  uplus: Zq,
  UpperLeftArrow: Xq,
  UpperRightArrow: Kq,
  upsi: Jq,
  Upsi: ez,
  upsih: tz,
  Upsilon: nz,
  upsilon: rz,
  UpTeeArrow: sz,
  UpTee: oz,
  upuparrows: az,
  urcorn: iz,
  urcorner: cz,
  urcrop: uz,
  Uring: dz,
  uring: lz,
  urtri: hz,
  Uscr: pz,
  uscr: fz,
  utdot: mz,
  Utilde: gz,
  utilde: bz,
  utri: vz,
  utrif: yz,
  uuarr: wz,
  Uuml: kz,
  uuml: xz,
  uwangle: Sz,
  vangrt: _z,
  varepsilon: Cz,
  varkappa: Az,
  varnothing: Ez,
  varphi: Tz,
  varpi: Pz,
  varpropto: Iz,
  varr: Dz,
  vArr: Lz,
  varrho: Rz,
  varsigma: Oz,
  varsubsetneq: jz,
  varsubsetneqq: Mz,
  varsupsetneq: Bz,
  varsupsetneqq: qz,
  vartheta: zz,
  vartriangleleft: Nz,
  vartriangleright: $z,
  vBar: Hz,
  Vbar: Fz,
  vBarv: Uz,
  Vcy: Vz,
  vcy: Gz,
  vdash: Wz,
  vDash: Yz,
  Vdash: Qz,
  VDash: Zz,
  Vdashl: Xz,
  veebar: Kz,
  vee: Jz,
  Vee: eN,
  veeeq: tN,
  vellip: nN,
  verbar: rN,
  Verbar: sN,
  vert: oN,
  Vert: aN,
  VerticalBar: iN,
  VerticalLine: cN,
  VerticalSeparator: uN,
  VerticalTilde: dN,
  VeryThinSpace: lN,
  Vfr: hN,
  vfr: pN,
  vltri: fN,
  vnsub: mN,
  vnsup: gN,
  Vopf: bN,
  vopf: vN,
  vprop: yN,
  vrtri: wN,
  Vscr: kN,
  vscr: xN,
  vsubnE: SN,
  vsubne: _N,
  vsupnE: CN,
  vsupne: AN,
  Vvdash: EN,
  vzigzag: TN,
  Wcirc: PN,
  wcirc: IN,
  wedbar: DN,
  wedge: LN,
  Wedge: RN,
  wedgeq: ON,
  weierp: jN,
  Wfr: MN,
  wfr: BN,
  Wopf: qN,
  wopf: zN,
  wp: NN,
  wr: $N,
  wreath: HN,
  Wscr: FN,
  wscr: UN,
  xcap: VN,
  xcirc: GN,
  xcup: WN,
  xdtri: YN,
  Xfr: QN,
  xfr: ZN,
  xharr: XN,
  xhArr: KN,
  Xi: JN,
  xi: e$,
  xlarr: t$,
  xlArr: n$,
  xmap: r$,
  xnis: s$,
  xodot: o$,
  Xopf: a$,
  xopf: i$,
  xoplus: c$,
  xotime: u$,
  xrarr: d$,
  xrArr: l$,
  Xscr: h$,
  xscr: p$,
  xsqcup: f$,
  xuplus: m$,
  xutri: g$,
  xvee: b$,
  xwedge: v$,
  Yacute: y$,
  yacute: w$,
  YAcy: k$,
  yacy: x$,
  Ycirc: S$,
  ycirc: _$,
  Ycy: C$,
  ycy: A$,
  yen: E$,
  Yfr: T$,
  yfr: P$,
  YIcy: I$,
  yicy: D$,
  Yopf: L$,
  yopf: R$,
  Yscr: O$,
  yscr: j$,
  YUcy: M$,
  yucy: B$,
  yuml: q$,
  Yuml: z$,
  Zacute: N$,
  zacute: $$,
  Zcaron: H$,
  zcaron: F$,
  Zcy: U$,
  zcy: V$,
  Zdot: G$,
  zdot: W$,
  zeetrf: Y$,
  ZeroWidthSpace: Q$,
  Zeta: Z$,
  zeta: X$,
  zfr: K$,
  Zfr: J$,
  ZHcy: eH,
  zhcy: tH,
  zigrarr: nH,
  zopf: rH,
  Zopf: sH,
  Zscr: oH,
  zscr: aH,
  zwj: iH,
  zwnj: cH
}, uH = "Á", dH = "á", lH = "Â", hH = "â", pH = "´", fH = "Æ", mH = "æ", gH = "À", bH = "à", vH = "&", yH = "&", wH = "Å", kH = "å", xH = "Ã", SH = "ã", _H = "Ä", CH = "ä", AH = "¦", EH = "Ç", TH = "ç", PH = "¸", IH = "¢", DH = "©", LH = "©", RH = "¤", OH = "°", jH = "÷", MH = "É", BH = "é", qH = "Ê", zH = "ê", NH = "È", $H = "è", HH = "Ð", FH = "ð", UH = "Ë", VH = "ë", GH = "½", WH = "¼", YH = "¾", QH = ">", ZH = ">", XH = "Í", KH = "í", JH = "Î", eF = "î", tF = "¡", nF = "Ì", rF = "ì", sF = "¿", oF = "Ï", aF = "ï", iF = "«", cF = "<", uF = "<", dF = "¯", lF = "µ", hF = "·", pF = " ", fF = "¬", mF = "Ñ", gF = "ñ", bF = "Ó", vF = "ó", yF = "Ô", wF = "ô", kF = "Ò", xF = "ò", SF = "ª", _F = "º", CF = "Ø", AF = "ø", EF = "Õ", TF = "õ", PF = "Ö", IF = "ö", DF = "¶", LF = "±", RF = "£", OF = '"', jF = '"', MF = "»", BF = "®", qF = "®", zF = "§", NF = "­", $F = "¹", HF = "²", FF = "³", UF = "ß", VF = "Þ", GF = "þ", WF = "×", YF = "Ú", QF = "ú", ZF = "Û", XF = "û", KF = "Ù", JF = "ù", eU = "¨", tU = "Ü", nU = "ü", rU = "Ý", sU = "ý", oU = "¥", aU = "ÿ", Xi = {
  Aacute: uH,
  aacute: dH,
  Acirc: lH,
  acirc: hH,
  acute: pH,
  AElig: fH,
  aelig: mH,
  Agrave: gH,
  agrave: bH,
  amp: vH,
  AMP: yH,
  Aring: wH,
  aring: kH,
  Atilde: xH,
  atilde: SH,
  Auml: _H,
  auml: CH,
  brvbar: AH,
  Ccedil: EH,
  ccedil: TH,
  cedil: PH,
  cent: IH,
  copy: DH,
  COPY: LH,
  curren: RH,
  deg: OH,
  divide: jH,
  Eacute: MH,
  eacute: BH,
  Ecirc: qH,
  ecirc: zH,
  Egrave: NH,
  egrave: $H,
  ETH: HH,
  eth: FH,
  Euml: UH,
  euml: VH,
  frac12: GH,
  frac14: WH,
  frac34: YH,
  gt: QH,
  GT: ZH,
  Iacute: XH,
  iacute: KH,
  Icirc: JH,
  icirc: eF,
  iexcl: tF,
  Igrave: nF,
  igrave: rF,
  iquest: sF,
  Iuml: oF,
  iuml: aF,
  laquo: iF,
  lt: cF,
  LT: uF,
  macr: dF,
  micro: lF,
  middot: hF,
  nbsp: pF,
  not: fF,
  Ntilde: mF,
  ntilde: gF,
  Oacute: bF,
  oacute: vF,
  Ocirc: yF,
  ocirc: wF,
  Ograve: kF,
  ograve: xF,
  ordf: SF,
  ordm: _F,
  Oslash: CF,
  oslash: AF,
  Otilde: EF,
  otilde: TF,
  Ouml: PF,
  ouml: IF,
  para: DF,
  plusmn: LF,
  pound: RF,
  quot: OF,
  QUOT: jF,
  raquo: MF,
  reg: BF,
  REG: qF,
  sect: zF,
  shy: NF,
  sup1: $F,
  sup2: HF,
  sup3: FF,
  szlig: UF,
  THORN: VF,
  thorn: GF,
  times: WF,
  Uacute: YF,
  uacute: QF,
  Ucirc: ZF,
  ucirc: XF,
  Ugrave: KF,
  ugrave: JF,
  uml: eU,
  Uuml: tU,
  uuml: nU,
  Yacute: rU,
  yacute: sU,
  yen: oU,
  yuml: aU
}, iU = "&", cU = "'", uU = ">", dU = "<", lU = '"', Js = {
  amp: iU,
  apos: cU,
  gt: uU,
  lt: dU,
  quot: lU
};
var Er = ee && ee.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(Cr, "__esModule", { value: !0 });
var hU = Er(Ar), pU = Er(Ks), Jr = Er(Xi), fU = Er(Js);
function Xe(n) {
  return n === " " || n === `
` || n === "	" || n === "\f" || n === "\r";
}
function Ia(n) {
  return n >= "a" && n <= "z" || n >= "A" && n <= "Z";
}
function He(n, e, t) {
  var r = n.toLowerCase();
  return n === r ? function(s, o) {
    o === r ? s._state = e : (s._state = t, s._index--);
  } : function(s, o) {
    o === r || o === n ? s._state = e : (s._state = t, s._index--);
  };
}
function lt(n, e) {
  var t = n.toLowerCase();
  return function(r, s) {
    s === t || s === n ? r._state = e : (r._state = 3, r._index--);
  };
}
var mU = He(
  "C",
  24,
  16
  /* InDeclaration */
), gU = He(
  "D",
  25,
  16
  /* InDeclaration */
), bU = He(
  "A",
  26,
  16
  /* InDeclaration */
), vU = He(
  "T",
  27,
  16
  /* InDeclaration */
), yU = He(
  "A",
  28,
  16
  /* InDeclaration */
), wU = lt(
  "R",
  35
  /* BeforeScript2 */
), kU = lt(
  "I",
  36
  /* BeforeScript3 */
), xU = lt(
  "P",
  37
  /* BeforeScript4 */
), SU = lt(
  "T",
  38
  /* BeforeScript5 */
), _U = He(
  "R",
  40,
  1
  /* Text */
), CU = He(
  "I",
  41,
  1
  /* Text */
), AU = He(
  "P",
  42,
  1
  /* Text */
), EU = He(
  "T",
  43,
  1
  /* Text */
), TU = lt(
  "Y",
  45
  /* BeforeStyle2 */
), PU = lt(
  "L",
  46
  /* BeforeStyle3 */
), IU = lt(
  "E",
  47
  /* BeforeStyle4 */
), DU = He(
  "Y",
  49,
  1
  /* Text */
), LU = He(
  "L",
  50,
  1
  /* Text */
), RU = He(
  "E",
  51,
  1
  /* Text */
), OU = lt(
  "I",
  54
  /* BeforeTitle1 */
), jU = lt(
  "T",
  55
  /* BeforeTitle2 */
), MU = lt(
  "L",
  56
  /* BeforeTitle3 */
), BU = lt(
  "E",
  57
  /* BeforeTitle4 */
), qU = He(
  "I",
  58,
  1
  /* Text */
), zU = He(
  "T",
  59,
  1
  /* Text */
), NU = He(
  "L",
  60,
  1
  /* Text */
), $U = He(
  "E",
  61,
  1
  /* Text */
), HU = He(
  "#",
  63,
  64
  /* InNamedEntity */
), FU = He(
  "X",
  66,
  65
  /* InNumericEntity */
), UU = (
  /** @class */
  function() {
    function n(e, t) {
      var r;
      this._state = 1, this.buffer = "", this.sectionStart = 0, this._index = 0, this.bufferOffset = 0, this.baseState = 1, this.special = 1, this.running = !0, this.ended = !1, this.cbs = t, this.xmlMode = !!(e != null && e.xmlMode), this.decodeEntities = (r = e == null ? void 0 : e.decodeEntities) !== null && r !== void 0 ? r : !0;
    }
    return n.prototype.reset = function() {
      this._state = 1, this.buffer = "", this.sectionStart = 0, this._index = 0, this.bufferOffset = 0, this.baseState = 1, this.special = 1, this.running = !0, this.ended = !1;
    }, n.prototype.write = function(e) {
      this.ended && this.cbs.onerror(Error(".write() after done!")), this.buffer += e, this.parse();
    }, n.prototype.end = function(e) {
      this.ended && this.cbs.onerror(Error(".end() after done!")), e && this.write(e), this.ended = !0, this.running && this.finish();
    }, n.prototype.pause = function() {
      this.running = !1;
    }, n.prototype.resume = function() {
      this.running = !0, this._index < this.buffer.length && this.parse(), this.ended && this.finish();
    }, n.prototype.getAbsoluteIndex = function() {
      return this.bufferOffset + this._index;
    }, n.prototype.stateText = function(e) {
      e === "<" ? (this._index > this.sectionStart && this.cbs.ontext(this.getSection()), this._state = 2, this.sectionStart = this._index) : this.decodeEntities && e === "&" && (this.special === 1 || this.special === 4) && (this._index > this.sectionStart && this.cbs.ontext(this.getSection()), this.baseState = 1, this._state = 62, this.sectionStart = this._index);
    }, n.prototype.isTagStartChar = function(e) {
      return Ia(e) || this.xmlMode && !Xe(e) && e !== "/" && e !== ">";
    }, n.prototype.stateBeforeTagName = function(e) {
      e === "/" ? this._state = 5 : e === "<" ? (this.cbs.ontext(this.getSection()), this.sectionStart = this._index) : e === ">" || this.special !== 1 || Xe(e) ? this._state = 1 : e === "!" ? (this._state = 15, this.sectionStart = this._index + 1) : e === "?" ? (this._state = 17, this.sectionStart = this._index + 1) : this.isTagStartChar(e) ? (this._state = !this.xmlMode && (e === "s" || e === "S") ? 32 : !this.xmlMode && (e === "t" || e === "T") ? 52 : 3, this.sectionStart = this._index) : this._state = 1;
    }, n.prototype.stateInTagName = function(e) {
      (e === "/" || e === ">" || Xe(e)) && (this.emitToken("onopentagname"), this._state = 8, this._index--);
    }, n.prototype.stateBeforeClosingTagName = function(e) {
      Xe(e) || (e === ">" ? this._state = 1 : this.special !== 1 ? this.special !== 4 && (e === "s" || e === "S") ? this._state = 33 : this.special === 4 && (e === "t" || e === "T") ? this._state = 53 : (this._state = 1, this._index--) : this.isTagStartChar(e) ? (this._state = 6, this.sectionStart = this._index) : (this._state = 20, this.sectionStart = this._index));
    }, n.prototype.stateInClosingTagName = function(e) {
      (e === ">" || Xe(e)) && (this.emitToken("onclosetag"), this._state = 7, this._index--);
    }, n.prototype.stateAfterClosingTagName = function(e) {
      e === ">" && (this._state = 1, this.sectionStart = this._index + 1);
    }, n.prototype.stateBeforeAttributeName = function(e) {
      e === ">" ? (this.cbs.onopentagend(), this._state = 1, this.sectionStart = this._index + 1) : e === "/" ? this._state = 4 : Xe(e) || (this._state = 9, this.sectionStart = this._index);
    }, n.prototype.stateInSelfClosingTag = function(e) {
      e === ">" ? (this.cbs.onselfclosingtag(), this._state = 1, this.sectionStart = this._index + 1, this.special = 1) : Xe(e) || (this._state = 8, this._index--);
    }, n.prototype.stateInAttributeName = function(e) {
      (e === "=" || e === "/" || e === ">" || Xe(e)) && (this.cbs.onattribname(this.getSection()), this.sectionStart = -1, this._state = 10, this._index--);
    }, n.prototype.stateAfterAttributeName = function(e) {
      e === "=" ? this._state = 11 : e === "/" || e === ">" ? (this.cbs.onattribend(void 0), this._state = 8, this._index--) : Xe(e) || (this.cbs.onattribend(void 0), this._state = 9, this.sectionStart = this._index);
    }, n.prototype.stateBeforeAttributeValue = function(e) {
      e === '"' ? (this._state = 12, this.sectionStart = this._index + 1) : e === "'" ? (this._state = 13, this.sectionStart = this._index + 1) : Xe(e) || (this._state = 14, this.sectionStart = this._index, this._index--);
    }, n.prototype.handleInAttributeValue = function(e, t) {
      e === t ? (this.emitToken("onattribdata"), this.cbs.onattribend(t), this._state = 8) : this.decodeEntities && e === "&" && (this.emitToken("onattribdata"), this.baseState = this._state, this._state = 62, this.sectionStart = this._index);
    }, n.prototype.stateInAttributeValueDoubleQuotes = function(e) {
      this.handleInAttributeValue(e, '"');
    }, n.prototype.stateInAttributeValueSingleQuotes = function(e) {
      this.handleInAttributeValue(e, "'");
    }, n.prototype.stateInAttributeValueNoQuotes = function(e) {
      Xe(e) || e === ">" ? (this.emitToken("onattribdata"), this.cbs.onattribend(null), this._state = 8, this._index--) : this.decodeEntities && e === "&" && (this.emitToken("onattribdata"), this.baseState = this._state, this._state = 62, this.sectionStart = this._index);
    }, n.prototype.stateBeforeDeclaration = function(e) {
      this._state = e === "[" ? 23 : e === "-" ? 18 : 16;
    }, n.prototype.stateInDeclaration = function(e) {
      e === ">" && (this.cbs.ondeclaration(this.getSection()), this._state = 1, this.sectionStart = this._index + 1);
    }, n.prototype.stateInProcessingInstruction = function(e) {
      e === ">" && (this.cbs.onprocessinginstruction(this.getSection()), this._state = 1, this.sectionStart = this._index + 1);
    }, n.prototype.stateBeforeComment = function(e) {
      e === "-" ? (this._state = 19, this.sectionStart = this._index + 1) : this._state = 16;
    }, n.prototype.stateInComment = function(e) {
      e === "-" && (this._state = 21);
    }, n.prototype.stateInSpecialComment = function(e) {
      e === ">" && (this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index)), this._state = 1, this.sectionStart = this._index + 1);
    }, n.prototype.stateAfterComment1 = function(e) {
      e === "-" ? this._state = 22 : this._state = 19;
    }, n.prototype.stateAfterComment2 = function(e) {
      e === ">" ? (this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index - 2)), this._state = 1, this.sectionStart = this._index + 1) : e !== "-" && (this._state = 19);
    }, n.prototype.stateBeforeCdata6 = function(e) {
      e === "[" ? (this._state = 29, this.sectionStart = this._index + 1) : (this._state = 16, this._index--);
    }, n.prototype.stateInCdata = function(e) {
      e === "]" && (this._state = 30);
    }, n.prototype.stateAfterCdata1 = function(e) {
      e === "]" ? this._state = 31 : this._state = 29;
    }, n.prototype.stateAfterCdata2 = function(e) {
      e === ">" ? (this.cbs.oncdata(this.buffer.substring(this.sectionStart, this._index - 2)), this._state = 1, this.sectionStart = this._index + 1) : e !== "]" && (this._state = 29);
    }, n.prototype.stateBeforeSpecialS = function(e) {
      e === "c" || e === "C" ? this._state = 34 : e === "t" || e === "T" ? this._state = 44 : (this._state = 3, this._index--);
    }, n.prototype.stateBeforeSpecialSEnd = function(e) {
      this.special === 2 && (e === "c" || e === "C") ? this._state = 39 : this.special === 3 && (e === "t" || e === "T") ? this._state = 48 : this._state = 1;
    }, n.prototype.stateBeforeSpecialLast = function(e, t) {
      (e === "/" || e === ">" || Xe(e)) && (this.special = t), this._state = 3, this._index--;
    }, n.prototype.stateAfterSpecialLast = function(e, t) {
      e === ">" || Xe(e) ? (this.special = 1, this._state = 6, this.sectionStart = this._index - t, this._index--) : this._state = 1;
    }, n.prototype.parseFixedEntity = function(e) {
      if (e === void 0 && (e = this.xmlMode ? fU.default : pU.default), this.sectionStart + 1 < this._index) {
        var t = this.buffer.substring(this.sectionStart + 1, this._index);
        Object.prototype.hasOwnProperty.call(e, t) && (this.emitPartial(e[t]), this.sectionStart = this._index + 1);
      }
    }, n.prototype.parseLegacyEntity = function() {
      for (var e = this.sectionStart + 1, t = Math.min(this._index - e, 6); t >= 2; ) {
        var r = this.buffer.substr(e, t);
        if (Object.prototype.hasOwnProperty.call(Jr.default, r)) {
          this.emitPartial(Jr.default[r]), this.sectionStart += t + 1;
          return;
        }
        t--;
      }
    }, n.prototype.stateInNamedEntity = function(e) {
      e === ";" ? (this.parseFixedEntity(), this.baseState === 1 && this.sectionStart + 1 < this._index && !this.xmlMode && this.parseLegacyEntity(), this._state = this.baseState) : (e < "0" || e > "9") && !Ia(e) && (this.xmlMode || this.sectionStart + 1 === this._index || (this.baseState !== 1 ? e !== "=" && this.parseFixedEntity(Jr.default) : this.parseLegacyEntity()), this._state = this.baseState, this._index--);
    }, n.prototype.decodeNumericEntity = function(e, t, r) {
      var s = this.sectionStart + e;
      if (s !== this._index) {
        var o = this.buffer.substring(s, this._index), a = parseInt(o, t);
        this.emitPartial(hU.default(a)), this.sectionStart = r ? this._index + 1 : this._index;
      }
      this._state = this.baseState;
    }, n.prototype.stateInNumericEntity = function(e) {
      e === ";" ? this.decodeNumericEntity(2, 10, !0) : (e < "0" || e > "9") && (this.xmlMode ? this._state = this.baseState : this.decodeNumericEntity(2, 10, !1), this._index--);
    }, n.prototype.stateInHexEntity = function(e) {
      e === ";" ? this.decodeNumericEntity(3, 16, !0) : (e < "a" || e > "f") && (e < "A" || e > "F") && (e < "0" || e > "9") && (this.xmlMode ? this._state = this.baseState : this.decodeNumericEntity(3, 16, !1), this._index--);
    }, n.prototype.cleanup = function() {
      this.sectionStart < 0 ? (this.buffer = "", this.bufferOffset += this._index, this._index = 0) : this.running && (this._state === 1 ? (this.sectionStart !== this._index && this.cbs.ontext(this.buffer.substr(this.sectionStart)), this.buffer = "", this.bufferOffset += this._index, this._index = 0) : this.sectionStart === this._index ? (this.buffer = "", this.bufferOffset += this._index, this._index = 0) : (this.buffer = this.buffer.substr(this.sectionStart), this._index -= this.sectionStart, this.bufferOffset += this.sectionStart), this.sectionStart = 0);
    }, n.prototype.parse = function() {
      for (; this._index < this.buffer.length && this.running; ) {
        var e = this.buffer.charAt(this._index);
        this._state === 1 ? this.stateText(e) : this._state === 12 ? this.stateInAttributeValueDoubleQuotes(e) : this._state === 9 ? this.stateInAttributeName(e) : this._state === 19 ? this.stateInComment(e) : this._state === 20 ? this.stateInSpecialComment(e) : this._state === 8 ? this.stateBeforeAttributeName(e) : this._state === 3 ? this.stateInTagName(e) : this._state === 6 ? this.stateInClosingTagName(e) : this._state === 2 ? this.stateBeforeTagName(e) : this._state === 10 ? this.stateAfterAttributeName(e) : this._state === 13 ? this.stateInAttributeValueSingleQuotes(e) : this._state === 11 ? this.stateBeforeAttributeValue(e) : this._state === 5 ? this.stateBeforeClosingTagName(e) : this._state === 7 ? this.stateAfterClosingTagName(e) : this._state === 32 ? this.stateBeforeSpecialS(e) : this._state === 21 ? this.stateAfterComment1(e) : this._state === 14 ? this.stateInAttributeValueNoQuotes(e) : this._state === 4 ? this.stateInSelfClosingTag(e) : this._state === 16 ? this.stateInDeclaration(e) : this._state === 15 ? this.stateBeforeDeclaration(e) : this._state === 22 ? this.stateAfterComment2(e) : this._state === 18 ? this.stateBeforeComment(e) : this._state === 33 ? this.stateBeforeSpecialSEnd(e) : this._state === 53 ? qU(this, e) : this._state === 39 ? _U(this, e) : this._state === 40 ? CU(this, e) : this._state === 41 ? AU(this, e) : this._state === 34 ? wU(this, e) : this._state === 35 ? kU(this, e) : this._state === 36 ? xU(this, e) : this._state === 37 ? SU(this, e) : this._state === 38 ? this.stateBeforeSpecialLast(
          e,
          2
          /* Script */
        ) : this._state === 42 ? EU(this, e) : this._state === 43 ? this.stateAfterSpecialLast(e, 6) : this._state === 44 ? TU(this, e) : this._state === 29 ? this.stateInCdata(e) : this._state === 45 ? PU(this, e) : this._state === 46 ? IU(this, e) : this._state === 47 ? this.stateBeforeSpecialLast(
          e,
          3
          /* Style */
        ) : this._state === 48 ? DU(this, e) : this._state === 49 ? LU(this, e) : this._state === 50 ? RU(this, e) : this._state === 51 ? this.stateAfterSpecialLast(e, 5) : this._state === 52 ? OU(this, e) : this._state === 54 ? jU(this, e) : this._state === 55 ? MU(this, e) : this._state === 56 ? BU(this, e) : this._state === 57 ? this.stateBeforeSpecialLast(
          e,
          4
          /* Title */
        ) : this._state === 58 ? zU(this, e) : this._state === 59 ? NU(this, e) : this._state === 60 ? $U(this, e) : this._state === 61 ? this.stateAfterSpecialLast(e, 5) : this._state === 17 ? this.stateInProcessingInstruction(e) : this._state === 64 ? this.stateInNamedEntity(e) : this._state === 23 ? mU(this, e) : this._state === 62 ? HU(this, e) : this._state === 24 ? gU(this, e) : this._state === 25 ? bU(this, e) : this._state === 30 ? this.stateAfterCdata1(e) : this._state === 31 ? this.stateAfterCdata2(e) : this._state === 26 ? vU(this, e) : this._state === 27 ? yU(this, e) : this._state === 28 ? this.stateBeforeCdata6(e) : this._state === 66 ? this.stateInHexEntity(e) : this._state === 65 ? this.stateInNumericEntity(e) : this._state === 63 ? FU(this, e) : this.cbs.onerror(Error("unknown _state"), this._state), this._index++;
      }
      this.cleanup();
    }, n.prototype.finish = function() {
      this.sectionStart < this._index && this.handleTrailingData(), this.cbs.onend();
    }, n.prototype.handleTrailingData = function() {
      var e = this.buffer.substr(this.sectionStart);
      this._state === 29 || this._state === 30 || this._state === 31 ? this.cbs.oncdata(e) : this._state === 19 || this._state === 21 || this._state === 22 ? this.cbs.oncomment(e) : this._state === 64 && !this.xmlMode ? (this.parseLegacyEntity(), this.sectionStart < this._index && (this._state = this.baseState, this.handleTrailingData())) : this._state === 65 && !this.xmlMode ? (this.decodeNumericEntity(2, 10, !1), this.sectionStart < this._index && (this._state = this.baseState, this.handleTrailingData())) : this._state === 66 && !this.xmlMode ? (this.decodeNumericEntity(3, 16, !1), this.sectionStart < this._index && (this._state = this.baseState, this.handleTrailingData())) : this._state !== 3 && this._state !== 8 && this._state !== 11 && this._state !== 10 && this._state !== 9 && this._state !== 13 && this._state !== 12 && this._state !== 14 && this._state !== 6 && this.cbs.ontext(e);
    }, n.prototype.getSection = function() {
      return this.buffer.substring(this.sectionStart, this._index);
    }, n.prototype.emitToken = function(e) {
      this.cbs[e](this.getSection()), this.sectionStart = -1;
    }, n.prototype.emitPartial = function(e) {
      this.baseState !== 1 ? this.cbs.onattribdata(e) : this.cbs.ontext(e);
    }, n;
  }()
);
Cr.default = UU;
var VU = ee && ee.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(jn, "__esModule", { value: !0 });
jn.Parser = void 0;
var GU = VU(Cr), Ft = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]), we = /* @__PURE__ */ new Set(["p"]), Da = {
  tr: /* @__PURE__ */ new Set(["tr", "th", "td"]),
  th: /* @__PURE__ */ new Set(["th"]),
  td: /* @__PURE__ */ new Set(["thead", "th", "td"]),
  body: /* @__PURE__ */ new Set(["head", "link", "script"]),
  li: /* @__PURE__ */ new Set(["li"]),
  p: we,
  h1: we,
  h2: we,
  h3: we,
  h4: we,
  h5: we,
  h6: we,
  select: Ft,
  input: Ft,
  output: Ft,
  button: Ft,
  datalist: Ft,
  textarea: Ft,
  option: /* @__PURE__ */ new Set(["option"]),
  optgroup: /* @__PURE__ */ new Set(["optgroup", "option"]),
  dd: /* @__PURE__ */ new Set(["dt", "dd"]),
  dt: /* @__PURE__ */ new Set(["dt", "dd"]),
  address: we,
  article: we,
  aside: we,
  blockquote: we,
  details: we,
  div: we,
  dl: we,
  fieldset: we,
  figcaption: we,
  figure: we,
  footer: we,
  form: we,
  header: we,
  hr: we,
  main: we,
  nav: we,
  ol: we,
  pre: we,
  section: we,
  table: we,
  ul: we,
  rt: /* @__PURE__ */ new Set(["rt", "rp"]),
  rp: /* @__PURE__ */ new Set(["rt", "rp"]),
  tbody: /* @__PURE__ */ new Set(["thead", "tbody"]),
  tfoot: /* @__PURE__ */ new Set(["thead", "tbody"])
}, es = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]), La = /* @__PURE__ */ new Set(["math", "svg"]), Ra = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), WU = /\s|\//, YU = (
  /** @class */
  function() {
    function n(e, t) {
      t === void 0 && (t = {});
      var r, s, o, a, c;
      this.startIndex = 0, this.endIndex = null, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.options = t, this.cbs = e ?? {}, this.lowerCaseTagNames = (r = t.lowerCaseTags) !== null && r !== void 0 ? r : !t.xmlMode, this.lowerCaseAttributeNames = (s = t.lowerCaseAttributeNames) !== null && s !== void 0 ? s : !t.xmlMode, this.tokenizer = new ((o = t.Tokenizer) !== null && o !== void 0 ? o : GU.default)(this.options, this), (c = (a = this.cbs).onparserinit) === null || c === void 0 || c.call(a, this);
    }
    return n.prototype.updatePosition = function(e) {
      this.endIndex === null ? this.tokenizer.sectionStart <= e ? this.startIndex = 0 : this.startIndex = this.tokenizer.sectionStart - e : this.startIndex = this.endIndex + 1, this.endIndex = this.tokenizer.getAbsoluteIndex();
    }, n.prototype.ontext = function(e) {
      var t, r;
      this.updatePosition(1), this.endIndex--, (r = (t = this.cbs).ontext) === null || r === void 0 || r.call(t, e);
    }, n.prototype.onopentagname = function(e) {
      var t, r;
      if (this.lowerCaseTagNames && (e = e.toLowerCase()), this.tagname = e, !this.options.xmlMode && Object.prototype.hasOwnProperty.call(Da, e))
        for (var s = void 0; this.stack.length > 0 && Da[e].has(s = this.stack[this.stack.length - 1]); )
          this.onclosetag(s);
      (this.options.xmlMode || !es.has(e)) && (this.stack.push(e), La.has(e) ? this.foreignContext.push(!0) : Ra.has(e) && this.foreignContext.push(!1)), (r = (t = this.cbs).onopentagname) === null || r === void 0 || r.call(t, e), this.cbs.onopentag && (this.attribs = {});
    }, n.prototype.onopentagend = function() {
      var e, t;
      this.updatePosition(1), this.attribs && ((t = (e = this.cbs).onopentag) === null || t === void 0 || t.call(e, this.tagname, this.attribs), this.attribs = null), !this.options.xmlMode && this.cbs.onclosetag && es.has(this.tagname) && this.cbs.onclosetag(this.tagname), this.tagname = "";
    }, n.prototype.onclosetag = function(e) {
      if (this.updatePosition(1), this.lowerCaseTagNames && (e = e.toLowerCase()), (La.has(e) || Ra.has(e)) && this.foreignContext.pop(), this.stack.length && (this.options.xmlMode || !es.has(e))) {
        var t = this.stack.lastIndexOf(e);
        if (t !== -1)
          if (this.cbs.onclosetag)
            for (t = this.stack.length - t; t--; )
              this.cbs.onclosetag(this.stack.pop());
          else
            this.stack.length = t;
        else e === "p" && !this.options.xmlMode && (this.onopentagname(e), this.closeCurrentTag());
      } else !this.options.xmlMode && (e === "br" || e === "p") && (this.onopentagname(e), this.closeCurrentTag());
    }, n.prototype.onselfclosingtag = function() {
      this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1] ? this.closeCurrentTag() : this.onopentagend();
    }, n.prototype.closeCurrentTag = function() {
      var e, t, r = this.tagname;
      this.onopentagend(), this.stack[this.stack.length - 1] === r && ((t = (e = this.cbs).onclosetag) === null || t === void 0 || t.call(e, r), this.stack.pop());
    }, n.prototype.onattribname = function(e) {
      this.lowerCaseAttributeNames && (e = e.toLowerCase()), this.attribname = e;
    }, n.prototype.onattribdata = function(e) {
      this.attribvalue += e;
    }, n.prototype.onattribend = function(e) {
      var t, r;
      (r = (t = this.cbs).onattribute) === null || r === void 0 || r.call(t, this.attribname, this.attribvalue, e), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribname = "", this.attribvalue = "";
    }, n.prototype.getInstructionName = function(e) {
      var t = e.search(WU), r = t < 0 ? e : e.substr(0, t);
      return this.lowerCaseTagNames && (r = r.toLowerCase()), r;
    }, n.prototype.ondeclaration = function(e) {
      if (this.cbs.onprocessinginstruction) {
        var t = this.getInstructionName(e);
        this.cbs.onprocessinginstruction("!" + t, "!" + e);
      }
    }, n.prototype.onprocessinginstruction = function(e) {
      if (this.cbs.onprocessinginstruction) {
        var t = this.getInstructionName(e);
        this.cbs.onprocessinginstruction("?" + t, "?" + e);
      }
    }, n.prototype.oncomment = function(e) {
      var t, r, s, o;
      this.updatePosition(4), (r = (t = this.cbs).oncomment) === null || r === void 0 || r.call(t, e), (o = (s = this.cbs).oncommentend) === null || o === void 0 || o.call(s);
    }, n.prototype.oncdata = function(e) {
      var t, r, s, o, a, c;
      this.updatePosition(1), this.options.xmlMode || this.options.recognizeCDATA ? ((r = (t = this.cbs).oncdatastart) === null || r === void 0 || r.call(t), (o = (s = this.cbs).ontext) === null || o === void 0 || o.call(s, e), (c = (a = this.cbs).oncdataend) === null || c === void 0 || c.call(a)) : this.oncomment("[CDATA[" + e + "]]");
    }, n.prototype.onerror = function(e) {
      var t, r;
      (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, e);
    }, n.prototype.onend = function() {
      var e, t;
      if (this.cbs.onclosetag)
        for (var r = this.stack.length; r > 0; this.cbs.onclosetag(this.stack[--r]))
          ;
      (t = (e = this.cbs).onend) === null || t === void 0 || t.call(e);
    }, n.prototype.reset = function() {
      var e, t, r, s;
      (t = (e = this.cbs).onreset) === null || t === void 0 || t.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack = [], (s = (r = this.cbs).onparserinit) === null || s === void 0 || s.call(r, this);
    }, n.prototype.parseComplete = function(e) {
      this.reset(), this.end(e);
    }, n.prototype.write = function(e) {
      this.tokenizer.write(e);
    }, n.prototype.end = function(e) {
      this.tokenizer.end(e);
    }, n.prototype.pause = function() {
      this.tokenizer.pause();
    }, n.prototype.resume = function() {
      this.tokenizer.resume();
    }, n.prototype.parseChunk = function(e) {
      this.write(e);
    }, n.prototype.done = function(e) {
      this.end(e);
    }, n;
  }()
);
jn.Parser = YU;
var rt = {}, Kt = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.Doctype = n.CDATA = n.Tag = n.Style = n.Script = n.Comment = n.Directive = n.Text = n.Root = n.isTag = n.ElementType = void 0;
  var e;
  (function(r) {
    r.Root = "root", r.Text = "text", r.Directive = "directive", r.Comment = "comment", r.Script = "script", r.Style = "style", r.Tag = "tag", r.CDATA = "cdata", r.Doctype = "doctype";
  })(e = n.ElementType || (n.ElementType = {}));
  function t(r) {
    return r.type === e.Tag || r.type === e.Script || r.type === e.Style;
  }
  n.isTag = t, n.Root = e.Root, n.Text = e.Text, n.Directive = e.Directive, n.Comment = e.Comment, n.Script = e.Script, n.Style = e.Style, n.Tag = e.Tag, n.CDATA = e.CDATA, n.Doctype = e.Doctype;
})(Kt);
var ue = {}, zt = ee && ee.__extends || /* @__PURE__ */ function() {
  var n = function(e, t) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, s) {
      r.__proto__ = s;
    } || function(r, s) {
      for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (r[o] = s[o]);
    }, n(e, t);
  };
  return function(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    n(e, t);
    function r() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
}(), xn = ee && ee.__assign || function() {
  return xn = Object.assign || function(n) {
    for (var e, t = 1, r = arguments.length; t < r; t++) {
      e = arguments[t];
      for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (n[s] = e[s]);
    }
    return n;
  }, xn.apply(this, arguments);
};
Object.defineProperty(ue, "__esModule", { value: !0 });
ue.cloneNode = ue.hasChildren = ue.isDocument = ue.isDirective = ue.isComment = ue.isText = ue.isCDATA = ue.isTag = ue.Element = ue.Document = ue.NodeWithChildren = ue.ProcessingInstruction = ue.Comment = ue.Text = ue.DataNode = ue.Node = void 0;
var Le = Kt, QU = /* @__PURE__ */ new Map([
  [Le.ElementType.Tag, 1],
  [Le.ElementType.Script, 1],
  [Le.ElementType.Style, 1],
  [Le.ElementType.Directive, 1],
  [Le.ElementType.Text, 3],
  [Le.ElementType.CDATA, 4],
  [Le.ElementType.Comment, 8],
  [Le.ElementType.Root, 9]
]), eo = (
  /** @class */
  function() {
    function n(e) {
      this.type = e, this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(n.prototype, "nodeType", {
      // Read-only aliases
      /**
       * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible
       * node {@link type}.
       */
      get: function() {
        var e;
        return (e = QU.get(this.type)) !== null && e !== void 0 ? e : 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(e) {
        this.parent = e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(e) {
        this.prev = e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(e) {
        this.next = e;
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.cloneNode = function(e) {
      return e === void 0 && (e = !1), to(this, e);
    }, n;
  }()
);
ue.Node = eo;
var Tr = (
  /** @class */
  function(n) {
    zt(e, n);
    function e(t, r) {
      var s = n.call(this, t) || this;
      return s.data = r, s;
    }
    return Object.defineProperty(e.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(t) {
        this.data = t;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(eo)
);
ue.DataNode = Tr;
var Ki = (
  /** @class */
  function(n) {
    zt(e, n);
    function e(t) {
      return n.call(this, Le.ElementType.Text, t) || this;
    }
    return e;
  }(Tr)
);
ue.Text = Ki;
var Ji = (
  /** @class */
  function(n) {
    zt(e, n);
    function e(t) {
      return n.call(this, Le.ElementType.Comment, t) || this;
    }
    return e;
  }(Tr)
);
ue.Comment = Ji;
var ec = (
  /** @class */
  function(n) {
    zt(e, n);
    function e(t, r) {
      var s = n.call(this, Le.ElementType.Directive, r) || this;
      return s.name = t, s;
    }
    return e;
  }(Tr)
);
ue.ProcessingInstruction = ec;
var Pr = (
  /** @class */
  function(n) {
    zt(e, n);
    function e(t, r) {
      var s = n.call(this, t) || this;
      return s.children = r, s;
    }
    return Object.defineProperty(e.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var t;
        return (t = this.children[0]) !== null && t !== void 0 ? t : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(t) {
        this.children = t;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(eo)
);
ue.NodeWithChildren = Pr;
var tc = (
  /** @class */
  function(n) {
    zt(e, n);
    function e(t) {
      return n.call(this, Le.ElementType.Root, t) || this;
    }
    return e;
  }(Pr)
);
ue.Document = tc;
var nc = (
  /** @class */
  function(n) {
    zt(e, n);
    function e(t, r, s, o) {
      s === void 0 && (s = []), o === void 0 && (o = t === "script" ? Le.ElementType.Script : t === "style" ? Le.ElementType.Style : Le.ElementType.Tag);
      var a = n.call(this, o, s) || this;
      return a.name = t, a.attribs = r, a;
    }
    return Object.defineProperty(e.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(t) {
        this.name = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "attributes", {
      get: function() {
        var t = this;
        return Object.keys(this.attribs).map(function(r) {
          var s, o;
          return {
            name: r,
            value: t.attribs[r],
            namespace: (s = t["x-attribsNamespace"]) === null || s === void 0 ? void 0 : s[r],
            prefix: (o = t["x-attribsPrefix"]) === null || o === void 0 ? void 0 : o[r]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Pr)
);
ue.Element = nc;
function rc(n) {
  return (0, Le.isTag)(n);
}
ue.isTag = rc;
function sc(n) {
  return n.type === Le.ElementType.CDATA;
}
ue.isCDATA = sc;
function oc(n) {
  return n.type === Le.ElementType.Text;
}
ue.isText = oc;
function ac(n) {
  return n.type === Le.ElementType.Comment;
}
ue.isComment = ac;
function ic(n) {
  return n.type === Le.ElementType.Directive;
}
ue.isDirective = ic;
function cc(n) {
  return n.type === Le.ElementType.Root;
}
ue.isDocument = cc;
function ZU(n) {
  return Object.prototype.hasOwnProperty.call(n, "children");
}
ue.hasChildren = ZU;
function to(n, e) {
  e === void 0 && (e = !1);
  var t;
  if (oc(n))
    t = new Ki(n.data);
  else if (ac(n))
    t = new Ji(n.data);
  else if (rc(n)) {
    var r = e ? ts(n.children) : [], s = new nc(n.name, xn({}, n.attribs), r);
    r.forEach(function(p) {
      return p.parent = s;
    }), n.namespace != null && (s.namespace = n.namespace), n["x-attribsNamespace"] && (s["x-attribsNamespace"] = xn({}, n["x-attribsNamespace"])), n["x-attribsPrefix"] && (s["x-attribsPrefix"] = xn({}, n["x-attribsPrefix"])), t = s;
  } else if (sc(n)) {
    var r = e ? ts(n.children) : [], o = new Pr(Le.ElementType.CDATA, r);
    r.forEach(function(h) {
      return h.parent = o;
    }), t = o;
  } else if (cc(n)) {
    var r = e ? ts(n.children) : [], a = new tc(r);
    r.forEach(function(h) {
      return h.parent = a;
    }), n["x-mode"] && (a["x-mode"] = n["x-mode"]), t = a;
  } else if (ic(n)) {
    var c = new ec(n.name, n.data);
    n["x-name"] != null && (c["x-name"] = n["x-name"], c["x-publicId"] = n["x-publicId"], c["x-systemId"] = n["x-systemId"]), t = c;
  } else
    throw new Error("Not implemented yet: ".concat(n.type));
  return t.startIndex = n.startIndex, t.endIndex = n.endIndex, n.sourceCodeLocation != null && (t.sourceCodeLocation = n.sourceCodeLocation), t;
}
ue.cloneNode = to;
function ts(n) {
  for (var e = n.map(function(r) {
    return to(r, !0);
  }), t = 1; t < e.length; t++)
    e[t].prev = e[t - 1], e[t - 1].next = e[t];
  return e;
}
(function(n) {
  var e = ee && ee.__createBinding || (Object.create ? function(p, h, d, f) {
    f === void 0 && (f = d);
    var m = Object.getOwnPropertyDescriptor(h, d);
    (!m || ("get" in m ? !h.__esModule : m.writable || m.configurable)) && (m = { enumerable: !0, get: function() {
      return h[d];
    } }), Object.defineProperty(p, f, m);
  } : function(p, h, d, f) {
    f === void 0 && (f = d), p[f] = h[d];
  }), t = ee && ee.__exportStar || function(p, h) {
    for (var d in p) d !== "default" && !Object.prototype.hasOwnProperty.call(h, d) && e(h, p, d);
  };
  Object.defineProperty(n, "__esModule", { value: !0 }), n.DomHandler = void 0;
  var r = Kt, s = ue;
  t(ue, n);
  var o = /\s+/g, a = {
    normalizeWhitespace: !1,
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, c = (
    /** @class */
    function() {
      function p(h, d, f) {
        this.dom = [], this.root = new s.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof d == "function" && (f = d, d = a), typeof h == "object" && (d = h, h = void 0), this.callback = h ?? null, this.options = d ?? a, this.elementCB = f ?? null;
      }
      return p.prototype.onparserinit = function(h) {
        this.parser = h;
      }, p.prototype.onreset = function() {
        this.dom = [], this.root = new s.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, p.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, p.prototype.onerror = function(h) {
        this.handleCallback(h);
      }, p.prototype.onclosetag = function() {
        this.lastNode = null;
        var h = this.tagStack.pop();
        this.options.withEndIndices && (h.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(h);
      }, p.prototype.onopentag = function(h, d) {
        var f = this.options.xmlMode ? r.ElementType.Tag : void 0, m = new s.Element(h, d, void 0, f);
        this.addNode(m), this.tagStack.push(m);
      }, p.prototype.ontext = function(h) {
        var d = this.options.normalizeWhitespace, f = this.lastNode;
        if (f && f.type === r.ElementType.Text)
          d ? f.data = (f.data + h).replace(o, " ") : f.data += h, this.options.withEndIndices && (f.endIndex = this.parser.endIndex);
        else {
          d && (h = h.replace(o, " "));
          var m = new s.Text(h);
          this.addNode(m), this.lastNode = m;
        }
      }, p.prototype.oncomment = function(h) {
        if (this.lastNode && this.lastNode.type === r.ElementType.Comment) {
          this.lastNode.data += h;
          return;
        }
        var d = new s.Comment(h);
        this.addNode(d), this.lastNode = d;
      }, p.prototype.oncommentend = function() {
        this.lastNode = null;
      }, p.prototype.oncdatastart = function() {
        var h = new s.Text(""), d = new s.NodeWithChildren(r.ElementType.CDATA, [h]);
        this.addNode(d), h.parent = d, this.lastNode = h;
      }, p.prototype.oncdataend = function() {
        this.lastNode = null;
      }, p.prototype.onprocessinginstruction = function(h, d) {
        var f = new s.ProcessingInstruction(h, d);
        this.addNode(f);
      }, p.prototype.handleCallback = function(h) {
        if (typeof this.callback == "function")
          this.callback(h, this.dom);
        else if (h)
          throw h;
      }, p.prototype.addNode = function(h) {
        var d = this.tagStack[this.tagStack.length - 1], f = d.children[d.children.length - 1];
        this.options.withStartIndices && (h.startIndex = this.parser.startIndex), this.options.withEndIndices && (h.endIndex = this.parser.endIndex), d.children.push(h), f && (h.prev = f, f.next = h), h.parent = d, this.lastNode = null;
      }, p;
    }()
  );
  n.DomHandler = c, n.default = c;
})(rt);
var Mt = {}, no = {}, et = {}, ro = {}, uc = {}, xt = {}, Ir = ee && ee.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(xt, "__esModule", { value: !0 });
xt.decodeHTML = xt.decodeHTMLStrict = xt.decodeXML = void 0;
var Ds = Ir(Ks), XU = Ir(Xi), KU = Ir(Js), Oa = Ir(Ar), JU = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
xt.decodeXML = dc(KU.default);
xt.decodeHTMLStrict = dc(Ds.default);
function dc(n) {
  var e = lc(n);
  return function(t) {
    return String(t).replace(JU, e);
  };
}
var ja = function(n, e) {
  return n < e ? 1 : -1;
};
xt.decodeHTML = function() {
  for (var n = Object.keys(XU.default).sort(ja), e = Object.keys(Ds.default).sort(ja), t = 0, r = 0; t < e.length; t++)
    n[r] === e[t] ? (e[t] += ";?", r++) : e[t] += ";";
  var s = new RegExp("&(?:" + e.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), o = lc(Ds.default);
  function a(c) {
    return c.substr(-1) !== ";" && (c += ";"), o(c);
  }
  return function(c) {
    return String(c).replace(s, a);
  };
}();
function lc(n) {
  return function(t) {
    if (t.charAt(1) === "#") {
      var r = t.charAt(2);
      return r === "X" || r === "x" ? Oa.default(parseInt(t.substr(3), 16)) : Oa.default(parseInt(t.substr(2), 10));
    }
    return n[t.slice(1, -1)] || t;
  };
}
var tt = {}, hc = ee && ee.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.escapeUTF8 = tt.escape = tt.encodeNonAsciiHTML = tt.encodeHTML = tt.encodeXML = void 0;
var eV = hc(Js), pc = mc(eV.default), fc = gc(pc);
tt.encodeXML = yc(pc);
var tV = hc(Ks), so = mc(tV.default), nV = gc(so);
tt.encodeHTML = sV(so, nV);
tt.encodeNonAsciiHTML = yc(so);
function mc(n) {
  return Object.keys(n).sort().reduce(function(e, t) {
    return e[n[t]] = "&" + t + ";", e;
  }, {});
}
function gc(n) {
  for (var e = [], t = [], r = 0, s = Object.keys(n); r < s.length; r++) {
    var o = s[r];
    o.length === 1 ? e.push("\\" + o) : t.push(o);
  }
  e.sort();
  for (var a = 0; a < e.length - 1; a++) {
    for (var c = a; c < e.length - 1 && e[c].charCodeAt(1) + 1 === e[c + 1].charCodeAt(1); )
      c += 1;
    var p = 1 + c - a;
    p < 3 || e.splice(a, p, e[a] + "-" + e[c]);
  }
  return t.unshift("[" + e.join("") + "]"), new RegExp(t.join("|"), "g");
}
var bc = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, rV = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    function(n) {
      return n.codePointAt(0);
    }
  ) : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    function(n) {
      return (n.charCodeAt(0) - 55296) * 1024 + n.charCodeAt(1) - 56320 + 65536;
    }
  )
);
function Dr(n) {
  return "&#x" + (n.length > 1 ? rV(n) : n.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function sV(n, e) {
  return function(t) {
    return t.replace(e, function(r) {
      return n[r];
    }).replace(bc, Dr);
  };
}
var vc = new RegExp(fc.source + "|" + bc.source, "g");
function oV(n) {
  return n.replace(vc, Dr);
}
tt.escape = oV;
function aV(n) {
  return n.replace(fc, Dr);
}
tt.escapeUTF8 = aV;
function yc(n) {
  return function(e) {
    return e.replace(vc, function(t) {
      return n[t] || Dr(t);
    });
  };
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.decodeXMLStrict = n.decodeHTML5Strict = n.decodeHTML4Strict = n.decodeHTML5 = n.decodeHTML4 = n.decodeHTMLStrict = n.decodeHTML = n.decodeXML = n.encodeHTML5 = n.encodeHTML4 = n.escapeUTF8 = n.escape = n.encodeNonAsciiHTML = n.encodeHTML = n.encodeXML = n.encode = n.decodeStrict = n.decode = void 0;
  var e = xt, t = tt;
  function r(p, h) {
    return (!h || h <= 0 ? e.decodeXML : e.decodeHTML)(p);
  }
  n.decode = r;
  function s(p, h) {
    return (!h || h <= 0 ? e.decodeXML : e.decodeHTMLStrict)(p);
  }
  n.decodeStrict = s;
  function o(p, h) {
    return (!h || h <= 0 ? t.encodeXML : t.encodeHTML)(p);
  }
  n.encode = o;
  var a = tt;
  Object.defineProperty(n, "encodeXML", { enumerable: !0, get: function() {
    return a.encodeXML;
  } }), Object.defineProperty(n, "encodeHTML", { enumerable: !0, get: function() {
    return a.encodeHTML;
  } }), Object.defineProperty(n, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
    return a.encodeNonAsciiHTML;
  } }), Object.defineProperty(n, "escape", { enumerable: !0, get: function() {
    return a.escape;
  } }), Object.defineProperty(n, "escapeUTF8", { enumerable: !0, get: function() {
    return a.escapeUTF8;
  } }), Object.defineProperty(n, "encodeHTML4", { enumerable: !0, get: function() {
    return a.encodeHTML;
  } }), Object.defineProperty(n, "encodeHTML5", { enumerable: !0, get: function() {
    return a.encodeHTML;
  } });
  var c = xt;
  Object.defineProperty(n, "decodeXML", { enumerable: !0, get: function() {
    return c.decodeXML;
  } }), Object.defineProperty(n, "decodeHTML", { enumerable: !0, get: function() {
    return c.decodeHTML;
  } }), Object.defineProperty(n, "decodeHTMLStrict", { enumerable: !0, get: function() {
    return c.decodeHTMLStrict;
  } }), Object.defineProperty(n, "decodeHTML4", { enumerable: !0, get: function() {
    return c.decodeHTML;
  } }), Object.defineProperty(n, "decodeHTML5", { enumerable: !0, get: function() {
    return c.decodeHTML;
  } }), Object.defineProperty(n, "decodeHTML4Strict", { enumerable: !0, get: function() {
    return c.decodeHTMLStrict;
  } }), Object.defineProperty(n, "decodeHTML5Strict", { enumerable: !0, get: function() {
    return c.decodeHTMLStrict;
  } }), Object.defineProperty(n, "decodeXMLStrict", { enumerable: !0, get: function() {
    return c.decodeXML;
  } });
})(uc);
var Qt = {};
Object.defineProperty(Qt, "__esModule", { value: !0 });
Qt.attributeNames = Qt.elementNames = void 0;
Qt.elementNames = /* @__PURE__ */ new Map([
  ["altglyph", "altGlyph"],
  ["altglyphdef", "altGlyphDef"],
  ["altglyphitem", "altGlyphItem"],
  ["animatecolor", "animateColor"],
  ["animatemotion", "animateMotion"],
  ["animatetransform", "animateTransform"],
  ["clippath", "clipPath"],
  ["feblend", "feBlend"],
  ["fecolormatrix", "feColorMatrix"],
  ["fecomponenttransfer", "feComponentTransfer"],
  ["fecomposite", "feComposite"],
  ["feconvolvematrix", "feConvolveMatrix"],
  ["fediffuselighting", "feDiffuseLighting"],
  ["fedisplacementmap", "feDisplacementMap"],
  ["fedistantlight", "feDistantLight"],
  ["fedropshadow", "feDropShadow"],
  ["feflood", "feFlood"],
  ["fefunca", "feFuncA"],
  ["fefuncb", "feFuncB"],
  ["fefuncg", "feFuncG"],
  ["fefuncr", "feFuncR"],
  ["fegaussianblur", "feGaussianBlur"],
  ["feimage", "feImage"],
  ["femerge", "feMerge"],
  ["femergenode", "feMergeNode"],
  ["femorphology", "feMorphology"],
  ["feoffset", "feOffset"],
  ["fepointlight", "fePointLight"],
  ["fespecularlighting", "feSpecularLighting"],
  ["fespotlight", "feSpotLight"],
  ["fetile", "feTile"],
  ["feturbulence", "feTurbulence"],
  ["foreignobject", "foreignObject"],
  ["glyphref", "glyphRef"],
  ["lineargradient", "linearGradient"],
  ["radialgradient", "radialGradient"],
  ["textpath", "textPath"]
]);
Qt.attributeNames = /* @__PURE__ */ new Map([
  ["definitionurl", "definitionURL"],
  ["attributename", "attributeName"],
  ["attributetype", "attributeType"],
  ["basefrequency", "baseFrequency"],
  ["baseprofile", "baseProfile"],
  ["calcmode", "calcMode"],
  ["clippathunits", "clipPathUnits"],
  ["diffuseconstant", "diffuseConstant"],
  ["edgemode", "edgeMode"],
  ["filterunits", "filterUnits"],
  ["glyphref", "glyphRef"],
  ["gradienttransform", "gradientTransform"],
  ["gradientunits", "gradientUnits"],
  ["kernelmatrix", "kernelMatrix"],
  ["kernelunitlength", "kernelUnitLength"],
  ["keypoints", "keyPoints"],
  ["keysplines", "keySplines"],
  ["keytimes", "keyTimes"],
  ["lengthadjust", "lengthAdjust"],
  ["limitingconeangle", "limitingConeAngle"],
  ["markerheight", "markerHeight"],
  ["markerunits", "markerUnits"],
  ["markerwidth", "markerWidth"],
  ["maskcontentunits", "maskContentUnits"],
  ["maskunits", "maskUnits"],
  ["numoctaves", "numOctaves"],
  ["pathlength", "pathLength"],
  ["patterncontentunits", "patternContentUnits"],
  ["patterntransform", "patternTransform"],
  ["patternunits", "patternUnits"],
  ["pointsatx", "pointsAtX"],
  ["pointsaty", "pointsAtY"],
  ["pointsatz", "pointsAtZ"],
  ["preservealpha", "preserveAlpha"],
  ["preserveaspectratio", "preserveAspectRatio"],
  ["primitiveunits", "primitiveUnits"],
  ["refx", "refX"],
  ["refy", "refY"],
  ["repeatcount", "repeatCount"],
  ["repeatdur", "repeatDur"],
  ["requiredextensions", "requiredExtensions"],
  ["requiredfeatures", "requiredFeatures"],
  ["specularconstant", "specularConstant"],
  ["specularexponent", "specularExponent"],
  ["spreadmethod", "spreadMethod"],
  ["startoffset", "startOffset"],
  ["stddeviation", "stdDeviation"],
  ["stitchtiles", "stitchTiles"],
  ["surfacescale", "surfaceScale"],
  ["systemlanguage", "systemLanguage"],
  ["tablevalues", "tableValues"],
  ["targetx", "targetX"],
  ["targety", "targetY"],
  ["textlength", "textLength"],
  ["viewbox", "viewBox"],
  ["viewtarget", "viewTarget"],
  ["xchannelselector", "xChannelSelector"],
  ["ychannelselector", "yChannelSelector"],
  ["zoomandpan", "zoomAndPan"]
]);
var Wt = ee && ee.__assign || function() {
  return Wt = Object.assign || function(n) {
    for (var e, t = 1, r = arguments.length; t < r; t++) {
      e = arguments[t];
      for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (n[s] = e[s]);
    }
    return n;
  }, Wt.apply(this, arguments);
}, iV = ee && ee.__createBinding || (Object.create ? function(n, e, t, r) {
  r === void 0 && (r = t), Object.defineProperty(n, r, { enumerable: !0, get: function() {
    return e[t];
  } });
} : function(n, e, t, r) {
  r === void 0 && (r = t), n[r] = e[t];
}), cV = ee && ee.__setModuleDefault || (Object.create ? function(n, e) {
  Object.defineProperty(n, "default", { enumerable: !0, value: e });
} : function(n, e) {
  n.default = e;
}), uV = ee && ee.__importStar || function(n) {
  if (n && n.__esModule) return n;
  var e = {};
  if (n != null) for (var t in n) t !== "default" && Object.prototype.hasOwnProperty.call(n, t) && iV(e, n, t);
  return cV(e, n), e;
};
Object.defineProperty(ro, "__esModule", { value: !0 });
var vt = uV(Kt), wc = uc, kc = Qt, dV = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function lV(n, e) {
  if (n)
    return Object.keys(n).map(function(t) {
      var r, s, o = (r = n[t]) !== null && r !== void 0 ? r : "";
      return e.xmlMode === "foreign" && (t = (s = kc.attributeNames.get(t)) !== null && s !== void 0 ? s : t), !e.emptyAttrs && !e.xmlMode && o === "" ? t : t + '="' + (e.decodeEntities !== !1 ? wc.encodeXML(o) : o.replace(/"/g, "&quot;")) + '"';
    }).join(" ");
}
var Ma = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function oo(n, e) {
  e === void 0 && (e = {});
  for (var t = ("length" in n) ? n : [n], r = "", s = 0; s < t.length; s++)
    r += hV(t[s], e);
  return r;
}
ro.default = oo;
function hV(n, e) {
  switch (n.type) {
    case vt.Root:
      return oo(n.children, e);
    case vt.Directive:
    case vt.Doctype:
      return gV(n);
    case vt.Comment:
      return yV(n);
    case vt.CDATA:
      return vV(n);
    case vt.Script:
    case vt.Style:
    case vt.Tag:
      return mV(n, e);
    case vt.Text:
      return bV(n, e);
  }
}
var pV = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), fV = /* @__PURE__ */ new Set(["svg", "math"]);
function mV(n, e) {
  var t;
  e.xmlMode === "foreign" && (n.name = (t = kc.elementNames.get(n.name)) !== null && t !== void 0 ? t : n.name, n.parent && pV.has(n.parent.name) && (e = Wt(Wt({}, e), { xmlMode: !1 }))), !e.xmlMode && fV.has(n.name) && (e = Wt(Wt({}, e), { xmlMode: "foreign" }));
  var r = "<" + n.name, s = lV(n.attribs, e);
  return s && (r += " " + s), n.children.length === 0 && (e.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    e.selfClosingTags !== !1
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    e.selfClosingTags && Ma.has(n.name)
  )) ? (e.xmlMode || (r += " "), r += "/>") : (r += ">", n.children.length > 0 && (r += oo(n.children, e)), (e.xmlMode || !Ma.has(n.name)) && (r += "</" + n.name + ">")), r;
}
function gV(n) {
  return "<" + n.data + ">";
}
function bV(n, e) {
  var t = n.data || "";
  return e.decodeEntities !== !1 && !(!e.xmlMode && n.parent && dV.has(n.parent.name)) && (t = wc.encodeXML(t)), t;
}
function vV(n) {
  return "<![CDATA[" + n.children[0].data + "]]>";
}
function yV(n) {
  return "<!--" + n.data + "-->";
}
var wV = ee && ee.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(et, "__esModule", { value: !0 });
et.innerText = et.textContent = et.getText = et.getInnerHTML = et.getOuterHTML = void 0;
var gt = rt, kV = wV(ro), xV = Kt;
function xc(n, e) {
  return (0, kV.default)(n, e);
}
et.getOuterHTML = xc;
function SV(n, e) {
  return (0, gt.hasChildren)(n) ? n.children.map(function(t) {
    return xc(t, e);
  }).join("") : "";
}
et.getInnerHTML = SV;
function sr(n) {
  return Array.isArray(n) ? n.map(sr).join("") : (0, gt.isTag)(n) ? n.name === "br" ? `
` : sr(n.children) : (0, gt.isCDATA)(n) ? sr(n.children) : (0, gt.isText)(n) ? n.data : "";
}
et.getText = sr;
function Ls(n) {
  return Array.isArray(n) ? n.map(Ls).join("") : (0, gt.hasChildren)(n) && !(0, gt.isComment)(n) ? Ls(n.children) : (0, gt.isText)(n) ? n.data : "";
}
et.textContent = Ls;
function Rs(n) {
  return Array.isArray(n) ? n.map(Rs).join("") : (0, gt.hasChildren)(n) && (n.type === xV.ElementType.Tag || (0, gt.isCDATA)(n)) ? Rs(n.children) : (0, gt.isText)(n) ? n.data : "";
}
et.innerText = Rs;
var Ne = {};
Object.defineProperty(Ne, "__esModule", { value: !0 });
Ne.prevElementSibling = Ne.nextElementSibling = Ne.getName = Ne.hasAttrib = Ne.getAttributeValue = Ne.getSiblings = Ne.getParent = Ne.getChildren = void 0;
var Sc = rt, _V = [];
function _c(n) {
  var e;
  return (e = n.children) !== null && e !== void 0 ? e : _V;
}
Ne.getChildren = _c;
function Cc(n) {
  return n.parent || null;
}
Ne.getParent = Cc;
function CV(n) {
  var e, t, r = Cc(n);
  if (r != null)
    return _c(r);
  for (var s = [n], o = n.prev, a = n.next; o != null; )
    s.unshift(o), e = o, o = e.prev;
  for (; a != null; )
    s.push(a), t = a, a = t.next;
  return s;
}
Ne.getSiblings = CV;
function AV(n, e) {
  var t;
  return (t = n.attribs) === null || t === void 0 ? void 0 : t[e];
}
Ne.getAttributeValue = AV;
function EV(n, e) {
  return n.attribs != null && Object.prototype.hasOwnProperty.call(n.attribs, e) && n.attribs[e] != null;
}
Ne.hasAttrib = EV;
function TV(n) {
  return n.name;
}
Ne.getName = TV;
function PV(n) {
  for (var e, t = n.next; t !== null && !(0, Sc.isTag)(t); )
    e = t, t = e.next;
  return t;
}
Ne.nextElementSibling = PV;
function IV(n) {
  for (var e, t = n.prev; t !== null && !(0, Sc.isTag)(t); )
    e = t, t = e.prev;
  return t;
}
Ne.prevElementSibling = IV;
var Qe = {};
Object.defineProperty(Qe, "__esModule", { value: !0 });
Qe.prepend = Qe.prependChild = Qe.append = Qe.appendChild = Qe.replaceElement = Qe.removeElement = void 0;
function Mn(n) {
  if (n.prev && (n.prev.next = n.next), n.next && (n.next.prev = n.prev), n.parent) {
    var e = n.parent.children;
    e.splice(e.lastIndexOf(n), 1);
  }
}
Qe.removeElement = Mn;
function DV(n, e) {
  var t = e.prev = n.prev;
  t && (t.next = e);
  var r = e.next = n.next;
  r && (r.prev = e);
  var s = e.parent = n.parent;
  if (s) {
    var o = s.children;
    o[o.lastIndexOf(n)] = e;
  }
}
Qe.replaceElement = DV;
function LV(n, e) {
  if (Mn(e), e.next = null, e.parent = n, n.children.push(e) > 1) {
    var t = n.children[n.children.length - 2];
    t.next = e, e.prev = t;
  } else
    e.prev = null;
}
Qe.appendChild = LV;
function RV(n, e) {
  Mn(e);
  var t = n.parent, r = n.next;
  if (e.next = r, e.prev = n, n.next = e, e.parent = t, r) {
    if (r.prev = e, t) {
      var s = t.children;
      s.splice(s.lastIndexOf(r), 0, e);
    }
  } else t && t.children.push(e);
}
Qe.append = RV;
function OV(n, e) {
  if (Mn(e), e.parent = n, e.prev = null, n.children.unshift(e) !== 1) {
    var t = n.children[1];
    t.prev = e, e.next = t;
  } else
    e.next = null;
}
Qe.prependChild = OV;
function jV(n, e) {
  Mn(e);
  var t = n.parent;
  if (t) {
    var r = t.children;
    r.splice(r.indexOf(n), 0, e);
  }
  n.prev && (n.prev.next = e), e.parent = t, e.prev = n.prev, e.next = n, n.prev = e;
}
Qe.prepend = jV;
var Ve = {};
Object.defineProperty(Ve, "__esModule", { value: !0 });
Ve.findAll = Ve.existsOne = Ve.findOne = Ve.findOneChild = Ve.find = Ve.filter = void 0;
var En = rt;
function MV(n, e, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), Array.isArray(e) || (e = [e]), ao(n, e, t, r);
}
Ve.filter = MV;
function ao(n, e, t, r) {
  for (var s = [], o = 0, a = e; o < a.length; o++) {
    var c = a[o];
    if (n(c) && (s.push(c), --r <= 0))
      break;
    if (t && (0, En.hasChildren)(c) && c.children.length > 0) {
      var p = ao(n, c.children, t, r);
      if (s.push.apply(s, p), r -= p.length, r <= 0)
        break;
    }
  }
  return s;
}
Ve.find = ao;
function BV(n, e) {
  return e.find(n);
}
Ve.findOneChild = BV;
function Ac(n, e, t) {
  t === void 0 && (t = !0);
  for (var r = null, s = 0; s < e.length && !r; s++) {
    var o = e[s];
    if ((0, En.isTag)(o))
      n(o) ? r = o : t && o.children.length > 0 && (r = Ac(n, o.children));
    else continue;
  }
  return r;
}
Ve.findOne = Ac;
function Ec(n, e) {
  return e.some(function(t) {
    return (0, En.isTag)(t) && (n(t) || t.children.length > 0 && Ec(n, t.children));
  });
}
Ve.existsOne = Ec;
function qV(n, e) {
  for (var t, r = [], s = e.filter(En.isTag), o; o = s.shift(); ) {
    var a = (t = o.children) === null || t === void 0 ? void 0 : t.filter(En.isTag);
    a && a.length > 0 && s.unshift.apply(s, a), n(o) && r.push(o);
  }
  return r;
}
Ve.findAll = qV;
var nt = {};
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.getElementsByTagType = nt.getElementsByTagName = nt.getElementById = nt.getElements = nt.testElement = void 0;
var Ot = rt, Lr = Ve, yr = {
  tag_name: function(n) {
    return typeof n == "function" ? function(e) {
      return (0, Ot.isTag)(e) && n(e.name);
    } : n === "*" ? Ot.isTag : function(e) {
      return (0, Ot.isTag)(e) && e.name === n;
    };
  },
  tag_type: function(n) {
    return typeof n == "function" ? function(e) {
      return n(e.type);
    } : function(e) {
      return e.type === n;
    };
  },
  tag_contains: function(n) {
    return typeof n == "function" ? function(e) {
      return (0, Ot.isText)(e) && n(e.data);
    } : function(e) {
      return (0, Ot.isText)(e) && e.data === n;
    };
  }
};
function Tc(n, e) {
  return typeof e == "function" ? function(t) {
    return (0, Ot.isTag)(t) && e(t.attribs[n]);
  } : function(t) {
    return (0, Ot.isTag)(t) && t.attribs[n] === e;
  };
}
function zV(n, e) {
  return function(t) {
    return n(t) || e(t);
  };
}
function Pc(n) {
  var e = Object.keys(n).map(function(t) {
    var r = n[t];
    return Object.prototype.hasOwnProperty.call(yr, t) ? yr[t](r) : Tc(t, r);
  });
  return e.length === 0 ? null : e.reduce(zV);
}
function NV(n, e) {
  var t = Pc(n);
  return t ? t(e) : !0;
}
nt.testElement = NV;
function $V(n, e, t, r) {
  r === void 0 && (r = 1 / 0);
  var s = Pc(n);
  return s ? (0, Lr.filter)(s, e, t, r) : [];
}
nt.getElements = $V;
function HV(n, e, t) {
  return t === void 0 && (t = !0), Array.isArray(e) || (e = [e]), (0, Lr.findOne)(Tc("id", n), e, t);
}
nt.getElementById = HV;
function FV(n, e, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), (0, Lr.filter)(yr.tag_name(n), e, t, r);
}
nt.getElementsByTagName = FV;
function UV(n, e, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), (0, Lr.filter)(yr.tag_type(n), e, t, r);
}
nt.getElementsByTagType = UV;
var _t = {};
Object.defineProperty(_t, "__esModule", { value: !0 });
_t.uniqueSort = _t.compareDocumentPosition = _t.removeSubsets = void 0;
var Ba = rt;
function VV(n) {
  for (var e = n.length; --e >= 0; ) {
    var t = n[e];
    if (e > 0 && n.lastIndexOf(t, e - 1) >= 0) {
      n.splice(e, 1);
      continue;
    }
    for (var r = t.parent; r; r = r.parent)
      if (n.includes(r)) {
        n.splice(e, 1);
        break;
      }
  }
  return n;
}
_t.removeSubsets = VV;
function Ic(n, e) {
  var t = [], r = [];
  if (n === e)
    return 0;
  for (var s = (0, Ba.hasChildren)(n) ? n : n.parent; s; )
    t.unshift(s), s = s.parent;
  for (s = (0, Ba.hasChildren)(e) ? e : e.parent; s; )
    r.unshift(s), s = s.parent;
  for (var o = Math.min(t.length, r.length), a = 0; a < o && t[a] === r[a]; )
    a++;
  if (a === 0)
    return 1;
  var c = t[a - 1], p = c.children, h = t[a], d = r[a];
  return p.indexOf(h) > p.indexOf(d) ? c === e ? 20 : 4 : c === n ? 10 : 2;
}
_t.compareDocumentPosition = Ic;
function GV(n) {
  return n = n.filter(function(e, t, r) {
    return !r.includes(e, t + 1);
  }), n.sort(function(e, t) {
    var r = Ic(e, t);
    return r & 2 ? -1 : r & 4 ? 1 : 0;
  }), n;
}
_t.uniqueSort = GV;
var Rr = {};
Object.defineProperty(Rr, "__esModule", { value: !0 });
Rr.getFeed = void 0;
var WV = et, Bn = nt;
function YV(n) {
  var e = wr(JV, n);
  return e ? e.name === "feed" ? QV(e) : ZV(e) : null;
}
Rr.getFeed = YV;
function QV(n) {
  var e, t = n.children, r = {
    type: "atom",
    items: (0, Bn.getElementsByTagName)("entry", t).map(function(a) {
      var c, p = a.children, h = { media: Dc(p) };
      Ye(h, "id", "id", p), Ye(h, "title", "title", p);
      var d = (c = wr("link", p)) === null || c === void 0 ? void 0 : c.attribs.href;
      d && (h.link = d);
      var f = jt("summary", p) || jt("content", p);
      f && (h.description = f);
      var m = jt("updated", p);
      return m && (h.pubDate = new Date(m)), h;
    })
  };
  Ye(r, "id", "id", t), Ye(r, "title", "title", t);
  var s = (e = wr("link", t)) === null || e === void 0 ? void 0 : e.attribs.href;
  s && (r.link = s), Ye(r, "description", "subtitle", t);
  var o = jt("updated", t);
  return o && (r.updated = new Date(o)), Ye(r, "author", "email", t, !0), r;
}
function ZV(n) {
  var e, t, r = (t = (e = wr("channel", n.children)) === null || e === void 0 ? void 0 : e.children) !== null && t !== void 0 ? t : [], s = {
    type: n.name.substr(0, 3),
    id: "",
    items: (0, Bn.getElementsByTagName)("item", n.children).map(function(a) {
      var c = a.children, p = { media: Dc(c) };
      Ye(p, "id", "guid", c), Ye(p, "title", "title", c), Ye(p, "link", "link", c), Ye(p, "description", "description", c);
      var h = jt("pubDate", c);
      return h && (p.pubDate = new Date(h)), p;
    })
  };
  Ye(s, "title", "title", r), Ye(s, "link", "link", r), Ye(s, "description", "description", r);
  var o = jt("lastBuildDate", r);
  return o && (s.updated = new Date(o)), Ye(s, "author", "managingEditor", r, !0), s;
}
var XV = ["url", "type", "lang"], KV = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function Dc(n) {
  return (0, Bn.getElementsByTagName)("media:content", n).map(function(e) {
    for (var t = e.attribs, r = {
      medium: t.medium,
      isDefault: !!t.isDefault
    }, s = 0, o = XV; s < o.length; s++) {
      var a = o[s];
      t[a] && (r[a] = t[a]);
    }
    for (var c = 0, p = KV; c < p.length; c++) {
      var a = p[c];
      t[a] && (r[a] = parseInt(t[a], 10));
    }
    return t.expression && (r.expression = t.expression), r;
  });
}
function wr(n, e) {
  return (0, Bn.getElementsByTagName)(n, e, !0, 1)[0];
}
function jt(n, e, t) {
  return t === void 0 && (t = !1), (0, WV.textContent)((0, Bn.getElementsByTagName)(n, e, t, 1)).trim();
}
function Ye(n, e, t, r, s) {
  s === void 0 && (s = !1);
  var o = jt(t, r, s);
  o && (n[e] = o);
}
function JV(n) {
  return n === "rss" || n === "feed" || n === "rdf:RDF";
}
(function(n) {
  var e = ee && ee.__createBinding || (Object.create ? function(s, o, a, c) {
    c === void 0 && (c = a), Object.defineProperty(s, c, { enumerable: !0, get: function() {
      return o[a];
    } });
  } : function(s, o, a, c) {
    c === void 0 && (c = a), s[c] = o[a];
  }), t = ee && ee.__exportStar || function(s, o) {
    for (var a in s) a !== "default" && !Object.prototype.hasOwnProperty.call(o, a) && e(o, s, a);
  };
  Object.defineProperty(n, "__esModule", { value: !0 }), n.hasChildren = n.isDocument = n.isComment = n.isText = n.isCDATA = n.isTag = void 0, t(et, n), t(Ne, n), t(Qe, n), t(Ve, n), t(nt, n), t(_t, n), t(Rr, n);
  var r = rt;
  Object.defineProperty(n, "isTag", { enumerable: !0, get: function() {
    return r.isTag;
  } }), Object.defineProperty(n, "isCDATA", { enumerable: !0, get: function() {
    return r.isCDATA;
  } }), Object.defineProperty(n, "isText", { enumerable: !0, get: function() {
    return r.isText;
  } }), Object.defineProperty(n, "isComment", { enumerable: !0, get: function() {
    return r.isComment;
  } }), Object.defineProperty(n, "isDocument", { enumerable: !0, get: function() {
    return r.isDocument;
  } }), Object.defineProperty(n, "hasChildren", { enumerable: !0, get: function() {
    return r.hasChildren;
  } });
})(no);
var eG = ee && ee.__extends || /* @__PURE__ */ function() {
  var n = function(e, t) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, s) {
      r.__proto__ = s;
    } || function(r, s) {
      for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (r[o] = s[o]);
    }, n(e, t);
  };
  return function(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    n(e, t);
    function r() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
}(), tG = ee && ee.__createBinding || (Object.create ? function(n, e, t, r) {
  r === void 0 && (r = t), Object.defineProperty(n, r, { enumerable: !0, get: function() {
    return e[t];
  } });
} : function(n, e, t, r) {
  r === void 0 && (r = t), n[r] = e[t];
}), nG = ee && ee.__setModuleDefault || (Object.create ? function(n, e) {
  Object.defineProperty(n, "default", { enumerable: !0, value: e });
} : function(n, e) {
  n.default = e;
}), rG = ee && ee.__importStar || function(n) {
  if (n && n.__esModule) return n;
  var e = {};
  if (n != null) for (var t in n) t !== "default" && Object.prototype.hasOwnProperty.call(n, t) && tG(e, n, t);
  return nG(e, n), e;
}, sG = ee && ee.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(Mt, "__esModule", { value: !0 });
Mt.parseFeed = Mt.FeedHandler = void 0;
var oG = sG(rt), kr = rG(no), aG = jn, qa;
(function(n) {
  n[n.image = 0] = "image", n[n.audio = 1] = "audio", n[n.video = 2] = "video", n[n.document = 3] = "document", n[n.executable = 4] = "executable";
})(qa || (qa = {}));
var za;
(function(n) {
  n[n.sample = 0] = "sample", n[n.full = 1] = "full", n[n.nonstop = 2] = "nonstop";
})(za || (za = {}));
var Lc = (
  /** @class */
  function(n) {
    eG(e, n);
    function e(t, r) {
      var s = this;
      return typeof t == "object" && (t = void 0, r = t), s = n.call(this, t, r) || this, s;
    }
    return e.prototype.onend = function() {
      var t, r, s = er(iG, this.dom);
      if (!s) {
        this.handleCallback(new Error("couldn't find root of feed"));
        return;
      }
      var o = {};
      if (s.name === "feed") {
        var a = s.children;
        o.type = "atom", We(o, "id", "id", a), We(o, "title", "title", a);
        var c = $a("href", er("link", a));
        c && (o.link = c), We(o, "description", "subtitle", a);
        var p = Lt("updated", a);
        p && (o.updated = new Date(p)), We(o, "author", "email", a, !0), o.items = Os("entry", a).map(function(h) {
          var d = {}, f = h.children;
          We(d, "id", "id", f), We(d, "title", "title", f);
          var m = $a("href", er("link", f));
          m && (d.link = m);
          var y = Lt("summary", f) || Lt("content", f);
          y && (d.description = y);
          var v = Lt("updated", f);
          return v && (d.pubDate = new Date(v)), d.media = Na(f), d;
        });
      } else {
        var a = (r = (t = er("channel", s.children)) === null || t === void 0 ? void 0 : t.children) !== null && r !== void 0 ? r : [];
        o.type = s.name.substr(0, 3), o.id = "", We(o, "title", "title", a), We(o, "link", "link", a), We(o, "description", "description", a);
        var p = Lt("lastBuildDate", a);
        p && (o.updated = new Date(p)), We(o, "author", "managingEditor", a, !0), o.items = Os("item", s.children).map(function(f) {
          var m = {}, y = f.children;
          We(m, "id", "guid", y), We(m, "title", "title", y), We(m, "link", "link", y), We(m, "description", "description", y);
          var v = Lt("pubDate", y);
          return v && (m.pubDate = new Date(v)), m.media = Na(y), m;
        });
      }
      this.feed = o, this.handleCallback(null);
    }, e;
  }(oG.default)
);
Mt.FeedHandler = Lc;
function Na(n) {
  return Os("media:content", n).map(function(e) {
    var t = {
      medium: e.attribs.medium,
      isDefault: !!e.attribs.isDefault
    };
    return e.attribs.url && (t.url = e.attribs.url), e.attribs.fileSize && (t.fileSize = parseInt(e.attribs.fileSize, 10)), e.attribs.type && (t.type = e.attribs.type), e.attribs.expression && (t.expression = e.attribs.expression), e.attribs.bitrate && (t.bitrate = parseInt(e.attribs.bitrate, 10)), e.attribs.framerate && (t.framerate = parseInt(e.attribs.framerate, 10)), e.attribs.samplingrate && (t.samplingrate = parseInt(e.attribs.samplingrate, 10)), e.attribs.channels && (t.channels = parseInt(e.attribs.channels, 10)), e.attribs.duration && (t.duration = parseInt(e.attribs.duration, 10)), e.attribs.height && (t.height = parseInt(e.attribs.height, 10)), e.attribs.width && (t.width = parseInt(e.attribs.width, 10)), e.attribs.lang && (t.lang = e.attribs.lang), t;
  });
}
function Os(n, e) {
  return kr.getElementsByTagName(n, e, !0);
}
function er(n, e) {
  return kr.getElementsByTagName(n, e, !0, 1)[0];
}
function Lt(n, e, t) {
  return t === void 0 && (t = !1), kr.getText(kr.getElementsByTagName(n, e, t, 1)).trim();
}
function $a(n, e) {
  if (!e)
    return null;
  var t = e.attribs;
  return t[n];
}
function We(n, e, t, r, s) {
  s === void 0 && (s = !1);
  var o = Lt(t, r, s);
  o && (n[e] = o);
}
function iG(n) {
  return n === "rss" || n === "feed" || n === "rdf:RDF";
}
function cG(n, e) {
  e === void 0 && (e = { xmlMode: !0 });
  var t = new Lc(e);
  return new aG.Parser(t, e).end(n), t.feed;
}
Mt.parseFeed = cG;
(function(n) {
  var e = ee && ee.__createBinding || (Object.create ? function(v, S, T, R) {
    R === void 0 && (R = T), Object.defineProperty(v, R, { enumerable: !0, get: function() {
      return S[T];
    } });
  } : function(v, S, T, R) {
    R === void 0 && (R = T), v[R] = S[T];
  }), t = ee && ee.__setModuleDefault || (Object.create ? function(v, S) {
    Object.defineProperty(v, "default", { enumerable: !0, value: S });
  } : function(v, S) {
    v.default = S;
  }), r = ee && ee.__importStar || function(v) {
    if (v && v.__esModule) return v;
    var S = {};
    if (v != null) for (var T in v) T !== "default" && Object.prototype.hasOwnProperty.call(v, T) && e(S, v, T);
    return t(S, v), S;
  }, s = ee && ee.__exportStar || function(v, S) {
    for (var T in v) T !== "default" && !Object.prototype.hasOwnProperty.call(S, T) && e(S, v, T);
  }, o = ee && ee.__importDefault || function(v) {
    return v && v.__esModule ? v : { default: v };
  };
  Object.defineProperty(n, "__esModule", { value: !0 }), n.RssHandler = n.DefaultHandler = n.DomUtils = n.ElementType = n.Tokenizer = n.createDomStream = n.parseDOM = n.parseDocument = n.DomHandler = n.Parser = void 0;
  var a = jn;
  Object.defineProperty(n, "Parser", { enumerable: !0, get: function() {
    return a.Parser;
  } });
  var c = rt;
  Object.defineProperty(n, "DomHandler", { enumerable: !0, get: function() {
    return c.DomHandler;
  } }), Object.defineProperty(n, "DefaultHandler", { enumerable: !0, get: function() {
    return c.DomHandler;
  } });
  function p(v, S) {
    var T = new c.DomHandler(void 0, S);
    return new a.Parser(T, S).end(v), T.root;
  }
  n.parseDocument = p;
  function h(v, S) {
    return p(v, S).children;
  }
  n.parseDOM = h;
  function d(v, S, T) {
    var R = new c.DomHandler(v, S, T);
    return new a.Parser(R, S);
  }
  n.createDomStream = d;
  var f = Cr;
  Object.defineProperty(n, "Tokenizer", { enumerable: !0, get: function() {
    return o(f).default;
  } });
  var m = r(Kt);
  n.ElementType = m, s(Mt, n), n.DomUtils = r(no);
  var y = Mt;
  Object.defineProperty(n, "RssHandler", { enumerable: !0, get: function() {
    return y.FeedHandler;
  } });
})(Zi);
function xr() {
  return xr = Object.assign || function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, xr.apply(this, arguments);
}
function uG(n, e) {
  if (n == null) return {};
  var t = {}, r = Object.keys(n), s, o;
  for (o = 0; o < r.length; o++)
    s = r[o], !(e.indexOf(s) >= 0) && (t[s] = n[s]);
  return t;
}
function dG(n, e) {
  if (n) {
    if (typeof n == "string") return Ha(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set") return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ha(n, e);
  }
}
function Ha(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
  return r;
}
function lG(n, e) {
  var t;
  if (typeof Symbol > "u" || n[Symbol.iterator] == null) {
    if (Array.isArray(n) || (t = dG(n)) || e) {
      t && (n = t);
      var r = 0;
      return function() {
        return r >= n.length ? {
          done: !0
        } : {
          done: !1,
          value: n[r++]
        };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  return t = n[Symbol.iterator](), t.next.bind(t);
}
function hG(n) {
  var e = n.dangerouslySetInnerHTML, t = n.flavor, r = n.markdown, s = n.markup, o = n.options, a = n.extensions, c = n.components, p = n.sanitizeHtml, h = uG(n, ["dangerouslySetInnerHTML", "flavor", "markdown", "markup", "options", "extensions", "components", "sanitizeHtml"]), d = se(function() {
    return function E(A, i) {
      if (A.type === "tag" && A instanceof rt.Element) {
        var u = (c == null ? void 0 : c[A.name]) || A.name, l = xr({
          key: i
        }, A.attribs);
        if (l.class && !l.className && (l.className = l.class, delete l.class), typeof l.style == "string") {
          var g = {};
          l.style.split(";").forEach(function(C) {
            if (C.indexOf(":") !== -1) {
              var L = C.split(":"), D = L[0], I = L[1];
              D = D.trim().replace(/-([a-z])/g, function(j) {
                return j[1].toUpperCase();
              }), I = I.trim(), g[D] = I;
            }
          }), l.style = g;
        }
        var k = pG.includes(A.name) ? null : fG.includes(A.name) ? A.children.filter(mG).map(E) : A.children.map(E);
        return Br(u, l, k);
      } else {
        if (A.type === "text" && A instanceof rt.DataNode)
          return A.data;
        if (A.type === "comment")
          return null;
        if (A.type === "style" && A instanceof rt.Element) {
          var w = xr({
            key: i
          }, A.attribs), b = A.children.map(E);
          return Br("style", w, b);
        } else
          return console.warn('Warning: Could not map element with type "' + A.type + '".', A), null;
      }
    };
  }, [c]);
  e && c && console.warn("MarkdownView could not render custom components when dangerouslySetInnerHTML is enabled.");
  var f = new Nh.Converter();
  if (t && f.setFlavor(t), o)
    for (var m in o) {
      if (m === "extensions" && o.extensions)
        for (var y = lG(o.extensions), v; !(v = y()).done; ) {
          var S = v.value;
          typeof S == "string" ? f.useExtension(S) : f.addExtension(S);
        }
      f.setOption(m, o[m]);
    }
  a && f.addExtension(a);
  var T = f.makeHtml(r ?? s);
  if (p && (T = p(T)), e)
    return it.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: T
      }
    });
  var R = Zi.parseDOM(T, {
    // Don't change the case of parsed html tags to match inline components.
    lowerCaseTags: !1,
    // Don't change the attribute names so that stuff like `className` works correctly.
    lowerCaseAttributeNames: !1,
    // Encode entities automatically, so that &copy; and &uuml; works correctly.
    decodeEntities: !0,
    // Fix issue with content after a self closing tag.
    recognizeSelfClosing: !0
  });
  return Br("div", h, R.map(d));
}
var pG = ["area", "br", "col", "embed", "hr", "img", "input", "keygen", "param", "source", "track", "wbr"], fG = ["table", "thead", "tbody", "tr"];
function mG(n) {
  return n.type === "text" && n instanceof rt.DataNode ? n.data.trim().length > 0 : !0;
}
function qG(n) {
  var i, u;
  const e = n.advancedOptions || {}, t = e.conversationOptions || {
    layout: "bubbles"
  }, [r, s] = Ae([]), { adapter: o, threadId: a, messageId: c } = Cl({ ...n, files: r }), { controls: p } = n, [h, d] = Ae(/* @__PURE__ */ new Map()), f = (l, g) => {
    d((k) => new Map(k.set(l, g)));
  }, m = (l) => {
    const { prompt: g, uid: k } = l, w = h.get(k);
    return /* @__PURE__ */ P.jsxs("div", { className: "rounded-lg shadow-sm", children: [
      /* @__PURE__ */ P.jsx("span", { className: "block", children: g }),
      /* @__PURE__ */ P.jsx("div", { className: "mt-2", children: w && /* @__PURE__ */ P.jsx(Ih, { files: w }) })
    ] });
  }, y = (l) => {
    const [g, k] = Ae(), [w, b] = Ae(), C = async (L) => {
      var I;
      let D;
      if (l.dataTransferMode === "stream") {
        if (!a || !c) {
          b("streaming message doesnt have thread and messageIds");
          return;
        }
        D = {
          thread_id: a,
          message_id: c,
          score: L
        };
      } else {
        let j = (I = l.serverResponse) == null ? void 0 : I[0];
        if (j)
          D = {
            thread_id: j.threadId,
            message_id: j.messageId,
            score: L
          };
        else {
          b("message doesnt have thread and messageIds");
          return;
        }
      }
      try {
        const j = await ji(n), x = n.serverUrl || Oi;
        if (!(await fetch(`${x}/threads/score`, {
          method: "POST",
          headers: j,
          body: JSON.stringify(D)
        })).ok)
          throw new Error("Failed to record score");
        k(L);
      } catch (j) {
        b(j.toString()), console.error("Error recording score:", j);
      }
    };
    return /* @__PURE__ */ P.jsxs("div", { className: "space-y-2", children: [
      l.status === "complete" && /* @__PURE__ */ P.jsx(
        hG,
        {
          markdown: l.content.join(""),
          options: { tables: !0, emoji: !0 }
        }
      ),
      l.status !== "complete" && /* @__PURE__ */ P.jsx("div", { className: "p-2 bg-gray-100 rounded-lg shadow-md", ref: l.containerRef }),
      /* @__PURE__ */ P.jsxs("div", { className: "flex items-center justify-start space-x-1", children: [
        /* @__PURE__ */ P.jsxs(
          "button",
          {
            className: "p-2 hover:bg-gray-200 rounded focus:outline-none",
            onClick: () => C(1),
            children: [
              g == null && /* @__PURE__ */ P.jsx(jh, { className: "h-4 w-4 text-gray-600" }),
              g === 1 && /* @__PURE__ */ P.jsx(zh, { className: "h-4 w-4 text-gray-600 animate-fadeIn" })
            ]
          }
        ),
        /* @__PURE__ */ P.jsxs(
          "button",
          {
            className: "p-2 hover:bg-gray-200 rounded focus:outline-none",
            onClick: () => C(-1),
            children: [
              g == null && /* @__PURE__ */ P.jsx(Rh, { className: "h-4 w-4 text-gray-600" }),
              g === -1 && /* @__PURE__ */ P.jsx(Bh, { className: "h-4 w-4 text-gray-600  animate-fadeIn" })
            ]
          }
        )
      ] }),
      w && /* @__PURE__ */ P.jsx("div", { className: "text-red text-xs animate-fadeIn p-2 rounded-md", children: w })
    ] });
  }, v = Object.assign(
    {},
    { colorScheme: "light", themeId: "langdb" },
    e.displayOptions
  ), S = e.composerOptions || {
    placeholder: "How can i help you today ?"
  }, T = Object.assign({}, {
    assistant: Object.assign({}, {
      name: "LangDB",
      tagline: `
              Easily build and deploy AI agents with SQL.
              Customize with our React widget on`,
      avatar: /* @__PURE__ */ P.jsx(Ph, {})
    }, (i = n.personaOptions) == null ? void 0 : i.assistant),
    user: Object.assign({}, {
      name: "User",
      avatar: /* @__PURE__ */ P.jsx(dl, {})
    })
  }, (u = n.personaOptions) == null ? void 0 : u.user), R = ye((l) => {
    r && (f(l.uid, [...r]), s([]));
  }, [f]), E = ye(() => {
  }, []), A = n.className || "";
  return /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col w-[100%] h-full", children: [
    (p == null ? void 0 : p.enableFiles) && /* @__PURE__ */ P.jsx(Dh, { files: r, setFiles: s }),
    /* @__PURE__ */ P.jsx("div", { className: "flex-1 w-full relative", children: /* @__PURE__ */ P.jsx(
      "main",
      {
        className: `items-center justify-between  ${A} h-full absolute`,
        style: n.style || {},
        children: /* @__PURE__ */ P.jsx(
          tl,
          {
            adapter: o,
            initialConversation: n.messages,
            events: {
              messageSent: R,
              messageStreamStarted: E
            },
            messageOptions: {
              promptRenderer: m,
              responseRenderer: y
            },
            personaOptions: T,
            conversationOptions: t,
            displayOptions: v,
            composerOptions: S,
            ...e
          }
        )
      }
    ) })
  ] });
}
function ns(...n) {
  return n.filter(Boolean).join(" ");
}
const zG = (n) => {
  const {
    onMinimize: e,
    onMaximize: t,
    btnClassName: r,
    theme: s,
    children: o,
    title: a,
    maximizedPanelClassName: c,
    maximizedPanelStyle: p,
    showFullScreen: h,
    controls: d
  } = n, [f, m] = Ae(!1), [y, v] = Ae(h || !1), S = ye(() => {
    m((T) => !T);
  }, []);
  return /* @__PURE__ */ P.jsxs("div", { className: ns(s || "dark"), children: [
    f && /* @__PURE__ */ P.jsxs(
      "div",
      {
        style: y ? p : {},
        className: ns(
          "light:text-slate-900 dark:text-white flex flex-1 bg-white dark:bg-black flex-col absolute p-[10px] pt-[0px]",
          y ? c || "h-full w-full bottom-0 right-0" : "rounded border shadow-md h-[60vh] w-[40vw] min-h-[500px] bottom-16 right-16"
        ),
        children: [
          /* @__PURE__ */ P.jsxs(
            "div",
            {
              className: "border-b py-[5px] flex justify-center items-center",
              style: { zIndex: "99999" },
              children: [
                /* @__PURE__ */ P.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ P.jsx(
                    "button",
                    {
                      onClick: () => {
                        m(!1), e && e();
                      },
                      children: /* @__PURE__ */ P.jsx(bG, {})
                    }
                  ),
                  !(d != null && d.hideMaximise) && /* @__PURE__ */ P.jsx(
                    "button",
                    {
                      onClick: () => {
                        v((T) => !T), t && t();
                      },
                      children: y ? /* @__PURE__ */ P.jsx(yG, {}) : /* @__PURE__ */ P.jsx(vG, {})
                    }
                  )
                ] }),
                /* @__PURE__ */ P.jsx("div", { className: "flex flex-1 justify-center", children: a })
              ]
            }
          ),
          /* @__PURE__ */ P.jsx("div", { className: "flex flex-1 overflow-scroll ", children: o })
        ]
      }
    ),
    !f && /* @__PURE__ */ P.jsx(
      "button",
      {
        className: ns(
          r || "",
          "fixed text-white bg-primary hover:bg-primary-800 bottom-5 right-5 flex w-[50px] hover:scale-110 scale-100 h-[50px] justify-center items-center p-[10px] rounded-full cursor-pointer shadow-none hover:shadow-xl transition ease-in-out"
        ),
        onClick: S,
        children: /* @__PURE__ */ P.jsx(gG, {})
      }
    )
  ] });
}, gG = () => /* @__PURE__ */ P.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "size-6",
    children: /* @__PURE__ */ P.jsx(
      "path",
      {
        strokeLinecap: "round",
        "stroke-linejoin": "round",
        d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      }
    )
  }
), bG = () => /* @__PURE__ */ P.jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ P.jsx("path", { d: "M19 13H5v-2h14v2z" })
  }
), vG = () => /* @__PURE__ */ P.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "size-6",
    children: /* @__PURE__ */ P.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
      }
    )
  }
), yG = () => /* @__PURE__ */ P.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "size-6",
    children: /* @__PURE__ */ P.jsx(
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
  tl as AiChat,
  ra as AiChatUI,
  gG as ChatIcon,
  zG as FloatingChatWidget,
  pl as ImageDetail,
  IG as Markdown,
  ll as MessageContentType,
  hl as MessageType,
  qG as Widget,
  MG as createAiContext,
  fl as createInnerMessage,
  PG as useAiChatApi,
  OG as useAiContext,
  jG as useAiTask,
  DG as useAsBatchAdapter,
  RG as useAsRscAdapter,
  LG as useAsStreamAdapter,
  BG as useDeepCompareEffect
};
//# sourceMappingURL=index.es.js.map
