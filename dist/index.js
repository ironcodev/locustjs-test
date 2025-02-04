'use strict';

var base = require('@locustjs/base');
var fs = require('fs');
var path = require('path');
var exception = require('@locustjs/exception');

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (undefined === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(undefined);
    });
  };
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = true,
    u = false;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = true, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (undefined !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: true
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(true);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = false, next;
            return next.value = t, next.done = true, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    undefined === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = false, next;
      }
      return next.done = true, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = true;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (undefined !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : undefined;
  }
}

var TestException = /*#__PURE__*/function (_Exception) {
  function TestException() {
    _classCallCheck(this, TestException);
    return _callSuper(this, TestException, arguments);
  }
  _inherits(TestException, _Exception);
  return _createClass(TestException);
}(exception.Exception);

var Expect = /*#__PURE__*/function () {
  function Expect(value) {
    _classCallCheck(this, Expect);
    this.value = value;
    this._expected = false;
  }
  return _createClass(Expect, [{
    key: "expected",
    get: function get() {
      return this._expected;
    }
  }, {
    key: "toBe",
    value: function toBe(value) {
      this._expected = true;
      if (this.value === value) ; else {
        throw new TestException({
          message: "".concat(this.value, " is not equal to ").concat(value),
          code: 1000,
          status: "not-eq"
        });
      }
      return this;
    }
  }, {
    key: "notToBe",
    value: function notToBe(value) {
      this._expected = true;
      if (this.value === value) {
        throw new TestException({
          message: "".concat(value, " is equal to ").concat(this.value),
          code: 1005,
          status: "eq"
        });
      }
      return this;
    }
  }, {
    key: "toBeGt",
    value: function toBeGt(value) {
      this._expected = true;
      if (this.value <= value) {
        throw new TestException({
          message: "".concat(this.value, " is not greater than ").concat(value),
          code: 1001,
          status: "lte"
        });
      }
      return this;
    }
  }, {
    key: "toBeGreaterThan",
    value: function toBeGreaterThan(value) {
      return this.toBeGt(value);
    }
  }, {
    key: "toBeGte",
    value: function toBeGte(value) {
      this._expected = true;
      if (this.value < value) {
        throw new TestException({
          message: "".concat(this.value, " is not greater than or equal to ").concat(value),
          code: 1002,
          status: "lt"
        });
      }
      return this;
    }
  }, {
    key: "toBeGreaterThanOrEqualTo",
    value: function toBeGreaterThanOrEqualTo(value) {
      return this.toBeGte(value);
    }
  }, {
    key: "toBeLt",
    value: function toBeLt(value) {
      this._expected = true;
      if (this.value >= value) {
        throw new TestException({
          message: "".concat(this.value, " is not less than ").concat(value),
          code: 1003,
          status: "gte"
        });
      }
      return this;
    }
  }, {
    key: "toBeLowerThan",
    value: function toBeLowerThan(value) {
      return this.toBeLt(value);
    }
  }, {
    key: "toBeLte",
    value: function toBeLte(value) {
      this._expected = true;
      if (this.value > value) {
        throw new TestException({
          message: "".concat(this.value, " is not less than or equal to ").concat(value),
          code: 1004,
          status: "gt"
        });
      }
      return this;
    }
  }, {
    key: "toBeLowerThanOrEqualTo",
    value: function toBeLowerThanOrEqualTo(value) {
      return this.toBeLte(value);
    }
  }, {
    key: "toBeBetween",
    value: function toBeBetween(n, m) {
      this._expected = true;
      if (!(this.value >= n && this.value < m)) {
        throw new TestException({
          message: "".concat(this.value, " is not between ").concat(n, " and ").concat(m),
          code: 1024,
          status: "between"
        });
      }
      return this;
    }
  }, {
    key: "notToBeBetween",
    value: function notToBeBetween(n, m) {
      this._expected = true;
      if (this.value >= n && this.value < m) {
        throw new TestException({
          message: "".concat(this.value, " is between ").concat(n, " and ").concat(m),
          code: 1044,
          status: "not-between"
        });
      }
      return this;
    }
  }, {
    key: "toBeOfType",
    value: function toBeOfType(type) {
      this._expected = true;
      if (_typeof(this.value) !== type) {
        throw new TestException({
          message: "".concat(this.value, " is not of type ").concat(type),
          code: 1025,
          status: "of-type"
        });
      }
      return this;
    }
  }, {
    key: "notToBeOfType",
    value: function notToBeOfType(type) {
      this._expected = true;
      if (_typeof(this.value) === type) {
        throw new TestException({
          message: "".concat(this.value, " is of type ").concat(type),
          code: 1045,
          status: "not-oftype"
        });
      }
      return this;
    }
  }, {
    key: "toBeString",
    value: function toBeString() {
      this._expected = true;
      if (!base.isString(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is not string"),
          code: 1026,
          status: "is-string"
        });
      }
      return this;
    }
  }, {
    key: "notToBeString",
    value: function notToBeString() {
      this._expected = true;
      if (base.isString(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is string"),
          code: 1046,
          status: "not-is-string"
        });
      }
      return this;
    }
  }, {
    key: "toBeSomeString",
    value: function toBeSomeString() {
      this._expected = true;
      if (!base.isSomeString(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is not some string"),
          code: 1027,
          status: "is-some-string"
        });
      }
      return this;
    }
  }, {
    key: "notToBeSomeString",
    value: function notToBeSomeString() {
      this._expected = true;
      if (base.isSomeString(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is some string"),
          code: 1047,
          status: "not-is-some-string"
        });
      }
      return this;
    }
  }, {
    key: "toBeNumber",
    value: function toBeNumber() {
      this._expected = true;
      if (!base.isNumber(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is not number"),
          code: 1028,
          status: "is-number"
        });
      }
      return this;
    }
  }, {
    key: "notToBeNumber",
    value: function notToBeNumber() {
      this._expected = true;
      if (base.isNumber(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is number"),
          code: 1048,
          status: "not-is-number"
        });
      }
      return this;
    }
  }, {
    key: "toBeDate",
    value: function toBeDate() {
      this._expected = true;
      if (!base.isDate(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is not date"),
          code: 1029,
          status: "is-date"
        });
      }
      return this;
    }
  }, {
    key: "notToBeDate",
    value: function notToBeDate() {
      this._expected = true;
      if (base.isDate(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is date"),
          code: 1049,
          status: "not-is-date"
        });
      }
      return this;
    }
  }, {
    key: "toBeBool",
    value: function toBeBool() {
      this._expected = true;
      if (!base.isBool(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is not bool"),
          code: 1030,
          status: "is-bool"
        });
      }
      return this;
    }
  }, {
    key: "notToBeBool",
    value: function notToBeBool() {
      this._expected = true;
      if (base.isBool(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is bool"),
          code: 1050,
          status: "not-is-bool"
        });
      }
      return this;
    }
  }, {
    key: "toBeBasicType",
    value: function toBeBasicType() {
      this._expected = true;
      if (!base.isBasic(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is not basic type"),
          code: 1031,
          status: "is-basic-type"
        });
      }
      return this;
    }
  }, {
    key: "notToBeBasicType",
    value: function notToBeBasicType() {
      this._expected = true;
      if (base.isBasic(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is basic type"),
          code: 1051,
          status: "not-is-basic-type"
        });
      }
      return this;
    }
  }, {
    key: "toBePrimitive",
    value: function toBePrimitive() {
      this._expected = true;
      if (!base.isPrimitive(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is not primitive type"),
          code: 1032,
          status: "is-primitive"
        });
      }
      return this;
    }
  }, {
    key: "notToBePrimitive",
    value: function notToBePrimitive() {
      this._expected = true;
      if (base.isPrimitive(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is primitive type"),
          code: 1052,
          status: "not-is-primitive"
        });
      }
      return this;
    }
  }, {
    key: "toBeEmpty",
    value: function toBeEmpty() {
      this._expected = true;
      if (!base.isEmpty(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is not empty"),
          code: 1033,
          status: "is-empty"
        });
      }
      return this;
    }
  }, {
    key: "notToBeEmpty",
    value: function notToBeEmpty() {
      this._expected = true;
      if (base.isEmpty(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is empty"),
          code: 1053,
          status: "not-is-empty"
        });
      }
      return this;
    }
  }, {
    key: "toBeObject",
    value: function toBeObject() {
      this._expected = true;
      if (!base.isObject(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is not object"),
          code: 1034,
          status: "is-object"
        });
      }
      return this;
    }
  }, {
    key: "notToBeObject",
    value: function notToBeObject() {
      this._expected = true;
      if (base.isObject(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is object"),
          code: 1054,
          status: "not-is-object"
        });
      }
      return this;
    }
  }, {
    key: "toBeSomeObject",
    value: function toBeSomeObject() {
      this._expected = true;
      if (!base.isSomeObject(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is not some object"),
          code: 1035,
          status: "is-some-object"
        });
      }
      return this;
    }
  }, {
    key: "notToBeSomeObject",
    value: function notToBeSomeObject() {
      this._expected = true;
      if (base.isSomeObject(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is some object"),
          code: 1055,
          status: "not-is-some-object"
        });
      }
      return this;
    }
  }, {
    key: "toBeFunction",
    value: function toBeFunction() {
      this._expected = true;
      if (!base.isFunction(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is not function"),
          code: 1036,
          status: "is-function"
        });
      }
      return this;
    }
  }, {
    key: "notToBeFunction",
    value: function notToBeFunction() {
      this._expected = true;
      if (base.isFunction(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is function"),
          code: 1056,
          status: "not-is-function"
        });
      }
      return this;
    }
  }, {
    key: "toBeNumeric",
    value: function toBeNumeric() {
      this._expected = true;
      if (!base.isNumeric(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is not numeric"),
          code: 1037,
          status: "is-numeric"
        });
      }
      return this;
    }
  }, {
    key: "notToBeNumeric",
    value: function notToBeNumeric() {
      this._expected = true;
      if (base.isNumeric(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is numeric"),
          code: 1057,
          status: "not-is-numeric"
        });
      }
      return this;
    }
  }, {
    key: "toBeArray",
    value: function toBeArray() {
      this._expected = true;
      if (!base.isArray(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is not array"),
          code: 1038,
          status: "is-array"
        });
      }
      return this;
    }
  }, {
    key: "notToBeArray",
    value: function notToBeArray() {
      this._expected = true;
      if (base.isArray(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is array"),
          code: 1058,
          status: "not-is-array"
        });
      }
      return this;
    }
  }, {
    key: "toBeSomeArray",
    value: function toBeSomeArray() {
      this._expected = true;
      if (!base.isSomeArray(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is not some array"),
          code: 1039,
          status: "is-some-array"
        });
      }
      return this;
    }
  }, {
    key: "notToBeSomeArray",
    value: function notToBeSomeArray() {
      this._expected = true;
      if (!base.isArray(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is not array"),
          code: 1068,
          status: "is-not-array"
        });
      }
      if (this.value.length) {
        throw new TestException({
          message: "".concat(this.value, " is array"),
          code: 1069,
          status: "is-some-array"
        });
      }
      return this;
    }
  }, {
    key: "toBeIterable",
    value: function toBeIterable() {
      this._expected = true;
      if (!base.isIterable(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is not iterable"),
          code: 1040,
          status: "is-iterable"
        });
      }
      return this;
    }
  }, {
    key: "notToBeIterable",
    value: function notToBeIterable() {
      this._expected = true;
      if (base.isIterable(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is iterable"),
          code: 1060,
          status: "not-iterable"
        });
      }
      return this;
    }
  }, {
    key: "toBeSubClassOf",
    value: function toBeSubClassOf(type) {
      this._expected = true;
      if (!base.isSubClassOf(this.value, type)) {
        throw new TestException({
          message: "".concat(this.value, " is not subclass of ").concat(type),
          code: 1041,
          status: "is-subclass-of"
        });
      }
      return this;
    }
  }, {
    key: "notToBeSubClassOf",
    value: function notToBeSubClassOf(type) {
      this._expected = true;
      if (base.isSubClassOf(this.value, type)) {
        throw new TestException({
          message: "".concat(this.value, " is subclass of ").concat(type),
          code: 1061,
          status: "not-subclassof"
        });
      }
      return this;
    }
  }, {
    key: "toBeInstanceOf",
    value: function toBeInstanceOf(type) {
      this._expected = true;
      if (!(this.value instanceof type)) {
        throw new TestException({
          message: "".concat(this.value, " is not instance of ").concat(type),
          code: 1042,
          status: "instanceof"
        });
      }
      return this;
    }
  }, {
    key: "notToBeInstanceOf",
    value: function notToBeInstanceOf(type) {
      this._expected = true;
      if (this.value instanceof type) {
        throw new TestException({
          message: "".concat(this.value, " is instance of ").concat(type),
          code: 1062,
          status: "not-instanceof"
        });
      }
      return this;
    }
  }, {
    key: "toMatch",
    value: function toMatch(pattern, flags) {
      this._expected = true;
      var r = new RegExp(pattern, flags);
      if (!r.test(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " does not match ").concat(pattern),
          code: 1043,
          status: "match"
        });
      }
      return this;
    }
  }, {
    key: "notToMatch",
    value: function notToMatch(pattern, flags) {
      this._expected = true;
      var r = new RegExp(pattern, flags);
      if (r.test(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " matches ").concat(pattern),
          code: 1070,
          status: "match"
        });
      }
      return this;
    }
  }, {
    key: "doesNotMatch",
    value: function doesNotMatch(pattern, flags) {
      this._expected = true;
      var r = new RegExp(pattern, flags);
      if (r.test(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " matches ").concat(pattern),
          code: 1063,
          status: "not-match"
        });
      }
      return this;
    }
  }, {
    key: "toBeDefined",
    value: function toBeDefined() {
      this._expected = true;
      if (this.value === undefined) {
        throw new TestException({
          message: "value is undefined",
          code: 1006,
          status: "undefined"
        });
      }
      return this;
    }
  }, {
    key: "notToBeDefined",
    value: function notToBeDefined() {
      this._expected = true;
      if (this.value !== undefined) {
        throw new TestException({
          message: "value is defined",
          code: 1071,
          status: "defined"
        });
      }
      return this;
    }
  }, {
    key: "toBeUndefined",
    value: function toBeUndefined() {
      this._expected = true;
      if (this.value !== undefined) {
        throw new TestException({
          message: "value is defined",
          code: 1007,
          status: "defined"
        });
      }
      return this;
    }
  }, {
    key: "notToBeUndefined",
    value: function notToBeUndefined() {
      this._expected = true;
      if (this.value === undefined) {
        throw new TestException({
          message: "value is undefined",
          code: 1072,
          status: "undefined"
        });
      }
      return this;
    }
  }, {
    key: "toBeNull",
    value: function toBeNull() {
      this._expected = true;
      if (this.value !== null) {
        throw new TestException({
          message: "value is not null",
          code: 1008,
          status: "not-null"
        });
      }
      return this;
    }
  }, {
    key: "notToBeNull",
    value: function notToBeNull() {
      this._expected = true;
      if (this.value === null) {
        throw new TestException({
          message: "value is null",
          code: 1009,
          status: "null"
        });
      }
      return this;
    }
  }, {
    key: "toBeNullOrUndefined",
    value: function toBeNullOrUndefined() {
      this._expected = true;
      if (this.value == null) ; else {
        throw new TestException({
          message: "value is not null/undefined",
          code: 1010,
          status: "not-null-or-undefined"
        });
      }
      return this;
    }
  }, {
    key: "notToBeNullOrUndefined",
    value: function notToBeNullOrUndefined() {
      this._expected = true;
      if (this.value == null) {
        throw new TestException({
          message: "value is null/undefined",
          code: 1011,
          status: "null-or-undefined"
        });
      }
      return this;
    }
  }, {
    key: "toBeEmptyArray",
    value: function toBeEmptyArray() {
      this._expected = true;
      if (base.isSomeArray(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is some array"),
          code: 1059,
          status: "to-be-empty-array"
        });
      }
      return this;
    }
  }, {
    key: "toBeValid",
    value: function toBeValid(fnValidation) {
      this._expected = true;
      if (!base.isFunction(fnValidation)) {
        throw new TestException({
          message: "fnValidation is not function",
          code: 1064,
          status: "to-be-valid"
        });
      }
      if (!fnValidation(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is not valid"),
          code: 1065,
          status: "to-be-valid"
        });
      }
      return this;
    }
  }, {
    key: "notToBeValid",
    value: function notToBeValid(fnValidation) {
      this._expected = true;
      if (!base.isFunction(fnValidation)) {
        throw new TestException({
          message: "fnValidation is not function",
          code: 1066,
          status: "not-to-be-valid"
        });
      }
      if (fnValidation(this.value)) {
        throw new TestException({
          message: "".concat(this.value, " is valid"),
          code: 1067,
          status: "not-to-be-valid"
        });
      }
      return this;
    }
  }, {
    key: "toThrow",
    value: function toThrow(ex) {
      var shape = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this._expected = true;
      if (!base.isFunction(this.value)) {
        throw new TestException({
          message: "given argument is not a function.",
          code: 1012,
          status: "not-func"
        });
      }
      var ok = false;
      try {
        this.value();
        ok = true;
      } catch (e) {
        if (ex !== undefined) {
          if (base.isPrimitive(ex)) {
            if (e !== ex) {
              throw new TestException({
                message: "given function threw incorrect error.",
                code: 1018,
                status: "incorrect-throw-error"
              });
            }
          } else if (base.isFunction(ex)) {
            if (!(e instanceof ex)) {
              throw new TestException({
                message: "given function threw incorrect instance.",
                code: 1019,
                status: "incorrect-throw-instance"
              });
            }
          } else if (base.isObject(ex)) {
            if (shape) {
              if (!base.equals(e, ex, strict)) {
                throw new TestException({
                  message: "given function threw incorrect object shape.",
                  code: 1020,
                  status: "incorrect-throw-shape"
                });
              }
            } else {
              if (e !== ex) {
                throw new TestException({
                  message: "given function threw incorrect object.",
                  code: 1021,
                  status: "incorrect-throw-object"
                });
              }
            }
          } else {
            if (e !== ex) {
              throw new TestException({
                message: "given function threw incorrect value.",
                code: 1022,
                status: "incorrect-throw-value"
              });
            }
          }
        } else {
          ok = false;
        }
      }
      if (ok) {
        throw new TestException({
          message: "given function ran without throwing any errors.",
          code: 1013,
          status: "ran-to-completion"
        });
      }
      return this;
    }
  }, {
    key: "notToThrow",
    value: function notToThrow(ex) {
      var shape = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this._expected = true;
      if (!base.isFunction(this.value)) {
        throw new TestException({
          message: "given argument is not a function.",
          code: 1012,
          status: "not-func"
        });
      }
      var ok = true;
      var error;
      try {
        this.value();
        ok = false;
      } catch (e) {
        error = e;
        if (ex !== undefined) {
          if (base.isPrimitive(ex)) {
            if (e === ex) {
              throw new TestException({
                message: "given function threw incorrect error.",
                code: 1018,
                status: "incorrect-throw-error"
              });
            }
          } else if (base.isFunction(ex)) {
            if (e instanceof ex) {
              throw new TestException({
                message: "given function threw incorrect instance.",
                code: 1019,
                status: "incorrect-throw-instance"
              });
            }
          } else if (base.isObject(ex)) {
            if (shape) {
              if (base.equals(e, ex, strict)) {
                throw new TestException({
                  message: "given function threw incorrect object shape.",
                  code: 1020,
                  status: "incorrect-throw-shape"
                });
              }
            } else {
              if (e === ex) {
                throw new TestException({
                  message: "given function threw incorrect object.",
                  code: 1021,
                  status: "incorrect-throw-object"
                });
              }
            }
          } else {
            if (e === ex) {
              throw new TestException({
                message: "given function threw incorrect value.",
                code: 1022,
                status: "incorrect-throw-value"
              });
            }
          }
        } else {
          ok = true;
        }
      }
      if (ok) {
        throw new TestException({
          message: "given function threw an error.",
          code: 1014,
          status: "ran-to-error",
          innerException: error
        });
      }
      return this;
    }
  }, {
    key: "toThrowAsync",
    value: function () {
      var _toThrowAsync = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(ex) {
        var shape,
          strict,
          ok,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              shape = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
              strict = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
              this._expected = true;
              if (base.isFunction(this.value)) {
                _context.next = 5;
                break;
              }
              throw new TestException({
                message: "given argument is not a function.",
                code: 1012,
                status: "not-func"
              });
            case 5:
              ok = false;
              _context.prev = 6;
              _context.next = 9;
              return this.value();
            case 9:
              ok = true;
              _context.next = 40;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](6);
              if (!(ex !== undefined)) {
                _context.next = 39;
                break;
              }
              if (!base.isPrimitive(ex)) {
                _context.next = 20;
                break;
              }
              if (!(_context.t0 !== ex)) {
                _context.next = 18;
                break;
              }
              throw new TestException({
                message: "given function threw incorrect error.",
                code: 1018,
                status: "incorrect-throw-error"
              });
            case 18:
              _context.next = 37;
              break;
            case 20:
              if (!base.isFunction(ex)) {
                _context.next = 25;
                break;
              }
              if (_context.t0 instanceof ex) {
                _context.next = 23;
                break;
              }
              throw new TestException({
                message: "given function threw incorrect instance.",
                code: 1019,
                status: "incorrect-throw-instance"
              });
            case 23:
              _context.next = 37;
              break;
            case 25:
              if (!base.isObject(ex)) {
                _context.next = 35;
                break;
              }
              if (!shape) {
                _context.next = 31;
                break;
              }
              if (base.equals(_context.t0, ex, strict)) {
                _context.next = 29;
                break;
              }
              throw new TestException({
                message: "given function threw incorrect object shape.",
                code: 1020,
                status: "incorrect-throw-shape"
              });
            case 29:
              _context.next = 33;
              break;
            case 31:
              if (!(_context.t0 !== ex)) {
                _context.next = 33;
                break;
              }
              throw new TestException({
                message: "given function threw incorrect object.",
                code: 1021,
                status: "incorrect-throw-object"
              });
            case 33:
              _context.next = 37;
              break;
            case 35:
              if (!(_context.t0 !== ex)) {
                _context.next = 37;
                break;
              }
              throw new TestException({
                message: "given function threw incorrect value.",
                code: 1022,
                status: "incorrect-throw-value"
              });
            case 37:
              _context.next = 40;
              break;
            case 39:
              ok = false;
            case 40:
              if (!ok) {
                _context.next = 42;
                break;
              }
              throw new TestException({
                message: "given function ran without throwing any errors.",
                code: 1013,
                status: "ran-to-completion"
              });
            case 42:
              return _context.abrupt("return", this);
            case 43:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[6, 12]]);
      }));
      function toThrowAsync(_x) {
        return _toThrowAsync.apply(this, arguments);
      }
      return toThrowAsync;
    }()
  }, {
    key: "notToThrowAsync",
    value: function () {
      var _notToThrowAsync = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ex) {
        var shape,
          strict,
          ok,
          error,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              shape = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
              strict = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : false;
              this._expected = true;
              if (base.isFunction(this.value)) {
                _context2.next = 5;
                break;
              }
              throw new TestException({
                message: "given argument is not a function.",
                code: 1012,
                status: "not-func"
              });
            case 5:
              ok = true;
              _context2.prev = 6;
              _context2.next = 9;
              return this.value();
            case 9:
              ok = false;
              _context2.next = 41;
              break;
            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](6);
              error = _context2.t0;
              if (!(ex !== undefined)) {
                _context2.next = 40;
                break;
              }
              if (!base.isPrimitive(ex)) {
                _context2.next = 21;
                break;
              }
              if (!(_context2.t0 === ex)) {
                _context2.next = 19;
                break;
              }
              throw new TestException({
                message: "given function threw incorrect error.",
                code: 1018,
                status: "incorrect-throw-error"
              });
            case 19:
              _context2.next = 38;
              break;
            case 21:
              if (!base.isFunction(ex)) {
                _context2.next = 26;
                break;
              }
              if (!(_context2.t0 instanceof ex)) {
                _context2.next = 24;
                break;
              }
              throw new TestException({
                message: "given function threw incorrect instance.",
                code: 1019,
                status: "incorrect-throw-instance"
              });
            case 24:
              _context2.next = 38;
              break;
            case 26:
              if (!base.isObject(ex)) {
                _context2.next = 36;
                break;
              }
              if (!shape) {
                _context2.next = 32;
                break;
              }
              if (!base.equals(_context2.t0, ex, strict)) {
                _context2.next = 30;
                break;
              }
              throw new TestException({
                message: "given function threw incorrect object shape.",
                code: 1020,
                status: "incorrect-throw-shape"
              });
            case 30:
              _context2.next = 34;
              break;
            case 32:
              if (!(_context2.t0 === ex)) {
                _context2.next = 34;
                break;
              }
              throw new TestException({
                message: "given function threw incorrect object.",
                code: 1021,
                status: "incorrect-throw-object"
              });
            case 34:
              _context2.next = 38;
              break;
            case 36:
              if (!(_context2.t0 === ex)) {
                _context2.next = 38;
                break;
              }
              throw new TestException({
                message: "given function threw incorrect value.",
                code: 1022,
                status: "incorrect-throw-value"
              });
            case 38:
              _context2.next = 41;
              break;
            case 40:
              ok = true;
            case 41:
              if (!ok) {
                _context2.next = 43;
                break;
              }
              throw new TestException({
                message: "given function threw an error.",
                code: 1014,
                status: "ran-to-error",
                innerException: error
              });
            case 43:
              return _context2.abrupt("return", this);
            case 44:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[6, 12]]);
      }));
      function notToThrowAsync(_x2) {
        return _notToThrowAsync.apply(this, arguments);
      }
      return notToThrowAsync;
    }()
  }, {
    key: "toBeTruthy",
    value: function toBeTruthy() {
      this._expected = true;
      if (this.value) ; else {
        throw new TestException({
          message: "".concat(this.value, " is not truthy"),
          code: 1015,
          status: "not-truthy"
        });
      }
      return this;
    }
  }, {
    key: "toBeTrue",
    value: function toBeTrue() {
      return this.toBeTruthy();
    }
  }, {
    key: "toBeFalsy",
    value: function toBeFalsy() {
      this._expected = true;
      if (!this.value) ; else {
        throw new TestException({
          message: "".concat(this.value, " is not falsy"),
          code: 1016,
          status: "not-falsy"
        });
      }
      return this;
    }
  }, {
    key: "toBeFalse",
    value: function toBeFalse() {
      return this.toBeFalsy();
    }
  }, {
    key: "toBeNaN",
    value: function toBeNaN() {
      this._expected = true;
      if (isNaN(this.value)) ; else {
        throw new TestException({
          message: "".concat(this.value, " is not NaN"),
          code: 1017,
          status: "not-nan"
        });
      }
      return this;
    }
  }, {
    key: "notToBeNaN",
    value: function notToBeNaN() {
      this._expected = true;
      if (!isNaN(this.value)) ; else {
        throw new TestException({
          message: "".concat(this.value, " is NaN"),
          code: 1023,
          status: "is-nan"
        });
      }
      return this;
    }
  }]);
}();

var Test = /*#__PURE__*/function () {
  function Test(name, fn) {
    _classCallCheck(this, Test);
    this.name = name;
    this.fn = fn;
  }
  return _createClass(Test, [{
    key: "run",
    value: function run() {
      var _this = this;
      return new Promise(function (res) {
        var start = new Date();
        if (base.isFunction(_this.fn)) {
          var _expect = new Expect();
          try {
            var _result = _this.fn(function (x) {
              _expect.value = x;
              return _expect;
            });
            if (_result && base.isFunction(_result.then)) {
              _result.then(function (result) {
                res({
                  success: true,
                  test: _this.name,
                  result: result,
                  time: new Date() - start,
                  expected: _expect.expected
                });
              })["catch"](function (ex) {
                res({
                  success: false,
                  test: _this.name,
                  time: new Date() - start,
                  expected: _expect.expected,
                  err: new TestException({
                    message: "test '".concat(_this.name, "' failed."),
                    code: 501,
                    status: "failed",
                    innerException: ex
                  })
                });
              });
            } else {
              res({
                success: true,
                test: _this.name,
                time: new Date() - start,
                result: _result,
                expected: _expect.expected
              });
            }
          } catch (ex) {
            res({
              success: false,
              test: _this.name,
              time: new Date() - start,
              expected: _expect.expected,
              err: new TestException({
                message: "test '".concat(_this.name, "' failed."),
                code: 501,
                status: "failed",
                innerException: ex
              })
            });
          }
        } else {
          res({
            success: false,
            test: _this.name,
            time: new Date() - start,
            err: new TestException({
              message: "test '".concat(_this.name, "' does not have a function to be called."),
              code: 500,
              status: "no-func"
            })
          });
        }
      });
    }
  }]);
}();

var reset = "\x1b[0m";
var bright = "\x1b[1m";
var fgRed = "\x1b[31m";
var fgGreen = "\x1b[32m";
var fgYellow = "\x1b[33m";
var fgMagenta = "\x1b[35m";
var fgWhite = "\x1b[37m";
var fgGray = "\x1b[90m";
var TestRunner = /*#__PURE__*/function () {
  function TestRunner() {
    _classCallCheck(this, TestRunner);
    this._init();
  }
  return _createClass(TestRunner, [{
    key: "_init",
    value: function _init() {
      this._passed = 0;
      this._failed = 0;
      this._faulted = 0;
      this._unknown = 0;
      this._results = [];
      this._errors = [];
    }
  }, {
    key: "_runSingle",
    value: function () {
      var _runSingle2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(test, onProgress, i) {
        var tr;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (base.isFunction(onProgress)) {
                try {
                  onProgress({
                    source: this,
                    test: test,
                    index: i
                  });
                } catch (ex) {
                  this._errors.push({
                    index: i,
                    test: test.name,
                    err: new TestException({
                      message: "onProgress failed for test '".concat(test.name, " at index ").concat(i, "'."),
                      code: 1500,
                      status: "progress-failed",
                      innerException: ex
                    })
                  });
                }
              }
              if (test instanceof Test) {
                _context.next = 6;
                break;
              }
              this._unknown++;
              this._errors.push({
                index: i,
                err: new TestException({
                  message: "Given test is not an instance of '@locustjs/test:Test' class.",
                  code: 1504,
                  status: "invalid-test"
                })
              });
              _context.next = 11;
              break;
            case 6:
              _context.next = 8;
              return test.run();
            case 8:
              tr = _context.sent;
              this._results.push(tr);
              if (base.isObject(tr.err)) {
                if (!tr.expected) {
                  this._faulted++;
                } else {
                  this._failed++;
                }
              } else if (!tr.expected) {
                this._unknown++;
              } else if (tr.success) {
                this._passed++;
              } else {
                this._failed++;
              }
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function _runSingle(_x, _x2, _x3) {
        return _runSingle2.apply(this, arguments);
      }
      return _runSingle;
    }()
  }, {
    key: "result",
    get: function get() {
      return {
        passed: this._passed,
        failed: this._failed,
        faulted: this._faulted,
        results: this._results,
        errors: this._errors
      };
    }
  }, {
    key: "run",
    value: function run(tests, onProgress) {
      var _this = this;
      this._init();
      return new Promise(function (res) {
        if (tests) {
          if (tests instanceof Test) {
            tests = [tests];
          }
          if (base.isArray(tests)) {
            var _tests = tests.map(function (test) {
              var _test = test;
              if (base.isArray(test)) {
                if (test.length == 2) {
                  _test = new Test(test[0], test[1]);
                }
              }
              return _test;
            }).map(function (test, i) {
              return _this._runSingle(test, onProgress, i);
            });
            Promise.all(_tests).then(function (_) {
              return res(_this.result);
            })["catch"](function (ex) {
              _this._errors.push({
                err: new TestException({
                  message: "not all tests succeeded. check errors.",
                  code: 1503,
                  status: "partial-finished",
                  innerException: ex
                })
              });
              res(_this.result);
            });
          } else {
            _this._errors.push({
              err: new TestException({
                message: "invalid tests. expected array or a single test.",
                code: 1502,
                status: "invalid-tests"
              })
            });
            res(_this.result);
          }
        } else {
          _this._errors.push({
            err: new TestException({
              message: "no tests given to be ran.",
              code: 1501,
              status: "no-tests"
            })
          });
          res(_this.result);
        }
      });
    }
  }, {
    key: "_getTime",
    value: function _getTime(time) {
      return "".concat(time / 1000, " sec");
    }
  }, {
    key: "report",
    value: function report(detailed) {
      var _this2 = this;
      var time = 0;
      console.log("Finished.\n");
      var _loop = function _loop() {
        var testResult = _this2._results[i];
        var t = "(".concat(_this2._getTime(testResult.time), ")");
        if (detailed) {
          var message = "\n" + (i + 1) + ". ";
          var err = base.isObject(testResult.err) ? testResult.err.toString().split("\n") : [];
          err = err.map(function (msg, i) {
            return "\t".concat(i == err.length - 1 ? "".concat(fgYellow) : "".concat(fgGray, "error ").concat(testResult.err.code, ": ")).concat(msg).concat(reset);
          }).join("\n");
          if (base.isObject(testResult.err)) {
            if (!testResult.expected) {
              message += "".concat(bright).concat(fgWhite).concat(testResult.test, ": ").concat(fgYellow, "faulted").concat(reset, " ").concat(t);
              message += "\n";
              message += "".concat(fgGray).concat(err, " ").concat(reset);
            } else {
              message += "".concat(bright).concat(fgWhite).concat(testResult.test, ": ").concat(fgRed, "failed").concat(reset, " ").concat(t);
              message += "\n";
              message += "".concat(fgGray).concat(err, " ").concat(reset);
            }
          } else if (!testResult.expected) {
            message += "".concat(bright).concat(fgWhite).concat(testResult.test, ": ").concat(fgMagenta, "expect not used").concat(reset, " ").concat(t);
            if (testResult.err) {
              message += "\n";
              message += "".concat(fgGray).concat(err, " ").concat(reset);
            }
          } else if (testResult.success) {
            message += "".concat(fgWhite).concat(testResult.test, ": ").concat(fgGreen, "passed").concat(reset, " ").concat(t);
          } else {
            message += "".concat(bright).concat(fgWhite).concat(testResult.test, ": ").concat(fgRed, "failed").concat(reset, " ").concat(t);
            message += "\n";
            message += "".concat(fgGray).concat(err, " ").concat(reset);
          }
          console.log(message);
        }
        time += testResult.time;
      };
      for (var i = 0; i < this._results.length; i++) {
        _loop();
      }
      if (detailed && this._errors.length) {
        console.log("Errors:");
        var _iterator = _createForOfIteratorHelper(this._errors),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var error = _step.value;
            if (error.index !== undefined) {
              console.log("".concat(error.index, ". ").concat(error.test, ": ").concat(error.err.innerException.toString()));
            } else {
              console.log("".concat(error.err.toString()));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      var text = (detailed ? "\n" : "") + "".concat(bright, "Number of tests: ").concat(reset).concat(this._results.length) + "\n" + "".concat(bright, "Total Time: ").concat(reset).concat(time / 1000, " sec") + "\n\n" + (this._passed > 0 ? "".concat(fgGreen, " ").concat(this._passed, " test(s) passed").concat(reset) : "0 tests passed".concat(reset)) + ", " + (this._failed > 0 ? "".concat(fgRed).concat(this._failed, " test(s) failed").concat(reset) : "0 tests failed".concat(reset)) + (this._faulted > 0 ? ", ".concat(fgYellow).concat(this._faulted, " test(s) faulted").concat(reset) : "") + (this._unknown > 0 ? ", ".concat(fgMagenta).concat(this._unknown, " test(s) are unknown").concat(reset) : "") + "\n";
      console.log(text);
    }
  }, {
    key: "log",
    value: function log(filename) {
      var content = JSON.stringify({
        results: this._results,
        errors: this._errors
      }, null, "\t");
      if (filename == null) {
        var d = new Date();
        var year = d.getFullYear().toString().padStart(4, "0");
        var month = (d.getMonth() + 1).toString().padStart(2, "0");
        var day = d.getDate().toString().padStart(2, "0");
        var hours = d.getHours().toString().padStart(2, "0");
        var minutes = d.getMinutes().toString().padStart(2, "0");
        var seconds = d.getSeconds().toString().padStart(2, "0");
        filename = "test-".concat(year, "-").concat(month, "-").concat(day, "-").concat(hours).concat(minutes).concat(seconds, ".json");
      }
      var filepath = path.join(process.cwd(), filename);
      try {
        fs.writeFileSync(filepath, content);
        console.log("tests outcome wrote in ".concat(filename, "."));
      } catch (ex) {
        console.log("writing tests' report failed.\n" + ex);
      }
    }
  }, {
    key: "test",
    value: function () {
      var _test2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _ref;
        var lastArg,
          detailed,
          _tests,
          i,
          t,
          result,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              lastArg = (_ref = _args2.length - 1, _ref < 0 || _args2.length <= _ref ? undefined : _args2[_ref]);
              detailed = _args2.length && base.isBool(lastArg) ? lastArg : false;
              _tests = [];
              for (i = 0; i < _args2.length; i++) {
                t = i < 0 || _args2.length <= i ? undefined : _args2[i];
                if (i != _args2.length - 1 || !base.isBool(t)) {
                  if (base.isIterable(t)) {
                    _tests = [].concat(_toConsumableArray(_tests), _toConsumableArray(t));
                  }
                }
              }
              _context2.next = 6;
              return this.run(_tests);
            case 6:
              result = _context2.sent;
              this.report(detailed || result.failed > 0);
              return _context2.abrupt("return", {
                runner: this,
                result: result
              });
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function test() {
        return _test2.apply(this, arguments);
      }
      return test;
    }()
  }], [{
    key: "start",
    value: function start() {
      var tr = new TestRunner();
      return tr.test.apply(tr, arguments);
    }
  }]);
}();

exports.Expect = Expect;
exports.Test = Test;
exports.TestException = TestException;
exports.TestRunner = TestRunner;
