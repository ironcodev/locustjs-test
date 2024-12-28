"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TestException = exports.Test = exports.Expect = void 0;
var _base = require("@locustjs/base");
var _exception = require("@locustjs/exception");
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = _getPrototypeOf(derived);
  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
}
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var TestException = exports.TestException = /*#__PURE__*/function (_Exception) {
  function TestException() {
    _classCallCheck(this, TestException);
    return _callSuper(this, TestException, arguments);
  }
  _inherits(TestException, _Exception);
  return _createClass(TestException);
}(_exception.Exception);
var Expect = exports.Expect = /*#__PURE__*/function () {
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
      if (this.value === value) {} else {
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
      if (!(0, _base.isString)(this.value)) {
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
      if ((0, _base.isString)(this.value)) {
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
      if (!(0, _base.isSomeString)(this.value)) {
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
      if ((0, _base.isSomeString)(this.value)) {
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
      if (!(0, _base.isNumber)(this.value)) {
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
      if ((0, _base.isNumber)(this.value)) {
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
      if (!(0, _base.isDate)(this.value)) {
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
      if ((0, _base.isDate)(this.value)) {
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
      if (!(0, _base.isBool)(this.value)) {
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
      if ((0, _base.isBool)(this.value)) {
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
      if (!(0, _base.isBasic)(this.value)) {
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
      if ((0, _base.isBasic)(this.value)) {
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
      if (!(0, _base.isPrimitive)(this.value)) {
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
      if ((0, _base.isPrimitive)(this.value)) {
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
      if (!(0, _base.isEmpty)(this.value)) {
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
      if ((0, _base.isEmpty)(this.value)) {
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
      if (!(0, _base.isObject)(this.value)) {
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
      if ((0, _base.isObject)(this.value)) {
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
      if (!(0, _base.isSomeObject)(this.value)) {
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
      if ((0, _base.isSomeObject)(this.value)) {
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
      if (!(0, _base.isFunction)(this.value)) {
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
      if ((0, _base.isFunction)(this.value)) {
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
      if (!(0, _base.isNumeric)(this.value)) {
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
      if ((0, _base.isNumeric)(this.value)) {
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
      if (!(0, _base.isArray)(this.value)) {
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
      if ((0, _base.isArray)(this.value)) {
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
      if (!(0, _base.isSomeArray)(this.value)) {
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
      if (!(0, _base.isArray)(this.value)) {
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
      if (!(0, _base.isIterable)(this.value)) {
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
      if ((0, _base.isIterable)(this.value)) {
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
      if (!(0, _base.isSubClassOf)(this.value, type)) {
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
      if ((0, _base.isSubClassOf)(this.value, type)) {
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
      if (this.value == null) {} else {
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
      if ((0, _base.isSomeArray)(this.value)) {
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
      if (!(0, _base.isFunction)(fnValidation)) {
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
      if (!(0, _base.isFunction)(fnValidation)) {
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
      if (!(0, _base.isFunction)(this.value)) {
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
          if ((0, _base.isPrimitive)(ex)) {
            if (e !== ex) {
              throw new TestException({
                message: "given function threw incorrect error.",
                code: 1018,
                status: "incorrect-throw-error"
              });
            }
          } else if ((0, _base.isFunction)(ex)) {
            if (!(e instanceof ex)) {
              throw new TestException({
                message: "given function threw incorrect instance.",
                code: 1019,
                status: "incorrect-throw-instance"
              });
            }
          } else if ((0, _base.isObject)(ex)) {
            if (shape) {
              if (!(0, _base.equals)(e, ex, strict)) {
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
      if (!(0, _base.isFunction)(this.value)) {
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
          if ((0, _base.isPrimitive)(ex)) {
            if (e === ex) {
              throw new TestException({
                message: "given function threw incorrect error.",
                code: 1018,
                status: "incorrect-throw-error"
              });
            }
          } else if ((0, _base.isFunction)(ex)) {
            if (e instanceof ex) {
              throw new TestException({
                message: "given function threw incorrect instance.",
                code: 1019,
                status: "incorrect-throw-instance"
              });
            }
          } else if ((0, _base.isObject)(ex)) {
            if (shape) {
              if ((0, _base.equals)(e, ex, strict)) {
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
      var _toThrowAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ex) {
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
              if ((0, _base.isFunction)(this.value)) {
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
              if (!(0, _base.isPrimitive)(ex)) {
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
              if (!(0, _base.isFunction)(ex)) {
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
              if (!(0, _base.isObject)(ex)) {
                _context.next = 35;
                break;
              }
              if (!shape) {
                _context.next = 31;
                break;
              }
              if ((0, _base.equals)(_context.t0, ex, strict)) {
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
      var _notToThrowAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ex) {
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
              if ((0, _base.isFunction)(this.value)) {
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
              if (!(0, _base.isPrimitive)(ex)) {
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
              if (!(0, _base.isFunction)(ex)) {
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
              if (!(0, _base.isObject)(ex)) {
                _context2.next = 36;
                break;
              }
              if (!shape) {
                _context2.next = 32;
                break;
              }
              if (!(0, _base.equals)(_context2.t0, ex, strict)) {
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
      if (this.value) {} else {
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
      if (!this.value) {} else {
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
      if (isNaN(this.value)) {} else {
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
      if (!isNaN(this.value)) {} else {
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
var Test = exports.Test = /*#__PURE__*/function () {
  function Test(name, fn) {
    _classCallCheck(this, Test);
    this.name = name;
    this.fn = fn;
  }
  return _createClass(Test, [{
    key: "run",
    value: function run() {
      var _this2 = this;
      return new Promise(function (res) {
        var start = new Date();
        if ((0, _base.isFunction)(_this2.fn)) {
          var _expect = new Expect();
          try {
            var _result = _this2.fn(function (x) {
              _expect.value = x;
              return _expect;
            });
            if (_result && (0, _base.isFunction)(_result.then)) {
              _result.then(function (result) {
                res({
                  success: true,
                  test: _this2.name,
                  result: result,
                  time: new Date() - start,
                  expected: _expect.expected
                });
              })["catch"](function (ex) {
                res({
                  success: false,
                  test: _this2.name,
                  time: new Date() - start,
                  expected: _expect.expected,
                  err: new TestException({
                    message: "test '".concat(_this2.name, "' failed."),
                    code: 501,
                    status: "failed",
                    innerException: ex
                  })
                });
              });
            } else {
              res({
                success: true,
                test: _this2.name,
                time: new Date() - start,
                result: _result,
                expected: _expect.expected
              });
            }
          } catch (ex) {
            res({
              success: false,
              test: _this2.name,
              time: new Date() - start,
              expected: _expect.expected,
              err: new TestException({
                message: "test '".concat(_this2.name, "' failed."),
                code: 501,
                status: "failed",
                innerException: ex
              })
            });
          }
        } else {
          res({
            success: false,
            test: _this2.name,
            time: new Date() - start,
            err: new TestException({
              message: "test '".concat(_this2.name, "' does not have a function to be called."),
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
var dim = "\x1b[2m";
var underscore = "\x1b[4m";
var blink = "\x1b[5m";
var reverse = "\x1b[7m";
var hidden = "\x1b[8m";
var fgBlack = "\x1b[30m";
var fgRed = "\x1b[31m";
var fgGreen = "\x1b[32m";
var fgYellow = "\x1b[33m";
var fgBlue = "\x1b[34m";
var fgMagenta = "\x1b[35m";
var fgCyan = "\x1b[36m";
var fgWhite = "\x1b[37m";
var fgGray = "\x1b[90m";
var bgBlack = "\x1b[40m";
var bgRed = "\x1b[41m";
var bgGreen = "\x1b[42m";
var bgYellow = "\x1b[43m";
var bgBlue = "\x1b[44m";
var bgMagenta = "\x1b[45m";
var bgCyan = "\x1b[46m";
var bgWhite = "\x1b[47m";
var bgGray = "\x1b[100m";
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
      var _runSingle2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(test, onProgress, i) {
        var tr;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if ((0, _base.isFunction)(onProgress)) {
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
              _context3.next = 3;
              return test.run();
            case 3:
              tr = _context3.sent;
              this._results.push(tr);
              if ((0, _base.isObject)(tr.err)) {
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
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function _runSingle(_x3, _x4, _x5) {
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
      var _this3 = this;
      this._init();
      return new Promise(function (res) {
        if (tests) {
          if (tests instanceof Test) {
            tests = [tests];
          }
          if ((0, _base.isArray)(tests)) {
            var _tests = tests.map(function (test) {
              var _test = test;
              if ((0, _base.isArray)(test)) {
                if (test.length == 2) {
                  _test = new Test(test[0], test[1]);
                }
              }
              return _test;
            }).filter(function (test) {
              return test instanceof Test;
            }).map(function (test, i) {
              return _this3._runSingle(test, onProgress, i);
            });
            Promise.all(_tests).then(function (_) {
              return res(_this3.result);
            })["catch"](function (ex) {
              _this3._errors.push({
                err: new TestException({
                  message: "not all tests succeeded. check errors.",
                  code: 1503,
                  status: "partial-finished",
                  innerException: ex
                })
              });
              res(_this3.result);
            });
          } else {
            _this3._errors.push({
              err: new TestException({
                message: "invalid tests. expected array or a single test.",
                code: 1502,
                status: "invalid-tests"
              })
            });
            res(_this3.result);
          }
        } else {
          _this3._errors.push({
            err: new TestException({
              message: "no tests given to be ran.",
              code: 1501,
              status: "no-tests"
            })
          });
          res(_this3.result);
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
      var _this4 = this;
      var time = 0;
      console.log("Finished.\n");
      var _loop = function _loop() {
        var testResult = _this4._results[i];
        var t = "(".concat(_this4._getTime(testResult.time), ")");
        if (detailed) {
          var message = "\n" + (i + 1) + ". ";
          var err = (0, _base.isObject)(testResult.err) ? testResult.err.toString().split("\n") : [];
          err = err.map(function (msg, i) {
            return "\t".concat(i == err.length - 1 ? "".concat(fgYellow) : "".concat(fgGray, "error ").concat(testResult.err.code, ": ")).concat(msg).concat(reset);
          }).join("\n");
          if ((0, _base.isObject)(testResult.err)) {
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
      var filepath = _path["default"].join(process.cwd(), filename);
      try {
        _fs["default"].writeFileSync(filepath, content);
        console.log("tests outcome wrote in ".concat(filename, "."));
      } catch (ex) {
        console.log("writing tests outcome failed.\n" + ex);
      }
    }
  }], [{
    key: "start",
    value: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _ref;
        var tr,
          lastArg,
          detailed,
          _tests,
          i,
          t,
          result,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              tr = new TestRunner();
              lastArg = (_ref = _args4.length - 1, _ref < 0 || _args4.length <= _ref ? undefined : _args4[_ref]);
              detailed = _args4.length && (0, _base.isBool)(lastArg) ? lastArg : false;
              _tests = [];
              for (i = 0; i < _args4.length; i++) {
                t = i < 0 || _args4.length <= i ? undefined : _args4[i];
                if (i != _args4.length - 1 || !(0, _base.isBool)(t)) {
                  if ((0, _base.isIterable)(t)) {
                    _tests = [].concat(_toConsumableArray(_tests), _toConsumableArray(t));
                  }
                }
              }
              _context4.next = 7;
              return tr.run(_tests);
            case 7:
              result = _context4.sent;
              tr.report(detailed || result.failed > 0);
              return _context4.abrupt("return", {
                runner: tr,
                result: result
              });
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function start() {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }]);
}();
var _default = exports["default"] = TestRunner;
