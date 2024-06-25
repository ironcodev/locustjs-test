import {
  equals,
  isString,
  isNumber,
  isDate,
  isBool,
  isBasic,
  isPrimitive,
  isEmpty,
  isSomeString,
  isObject,
  isSomeObject,
  isFunction,
  isNumeric,
  isArray,
  isIterable,
  isSomeArray,
  isSubClassOf,
  isNullOrEmpty,
} from "@locustjs/base";
import { Exception } from "@locustjs/exception";
import fs from "fs";
import path from "path";

class TestException extends Exception {}
class Expect {
  constructor(value) {
    this.value = value;
    this._expected = false;
  }
  get expected() {
    return this._expected;
  }
  toBe(value) {
    this._expected = true;

    if (this.value === value) {
    } else {
      throw new TestException({
        message: `${this.value} is not equal to ${value}`,
        code: 1000,
        status: "not-eq",
      });
    }

    return this;
  }
  notToBe(value) {
    this._expected = true;

    if (this.value === value) {
      throw new TestException({
        message: `${value} is equal to ${this.value}`,
        code: 1005,
        status: "eq",
      });
    }

    return this;
  }
  toBeGt(value) {
    this._expected = true;

    if (this.value <= value) {
      throw new TestException({
        message: `${this.value} is not greater than ${value}`,
        code: 1001,
        status: "lte",
      });
    }

    return this;
  }
  toBeGreaterThan(value) {
    return this.toBeGt(value);
  }
  toBeGte(value) {
    this._expected = true;

    if (this.value < value) {
      throw new TestException({
        message: `${this.value} is not greater than or equal to ${value}`,
        code: 1002,
        status: "lt",
      });
    }

    return this;
  }
  toBeGreaterThanOrEqualTo(value) {
    return this.toBeGte(value);
  }
  toBeLt(value) {
    this._expected = true;

    if (this.value >= value) {
      throw new TestException({
        message: `${this.value} is not less than ${value}`,
        code: 1003,
        status: "gte",
      });
    }

    return this;
  }
  toBeLowerThan(value) {
    return this.toBeLt(value);
  }
  toBeLte(value) {
    this._expected = true;

    if (this.value > value) {
      throw new TestException({
        message: `${this.value} is not less than or equal to ${value}`,
        code: 1004,
        status: "gt",
      });
    }

    return this;
  }
  toBeLowerThanOrEqualTo(value) {
    return this.toBeLte(value);
  }
  toBeBetween(n, m) {
    this._expected = true;

    if (!(this.value >= n && this.value < m)) {
      throw new TestException({
        message: `${this.value} is not between ${n} and ${m}`,
        code: 1024,
        status: "between",
      });
    }

    return this;
  }
  notToBeBetween(n, m) {
    this._expected = true;

    if (this.value >= n && this.value < m) {
      throw new TestException({
        message: `${this.value} is between ${n} and ${m}`,
        code: 1044,
        status: "not-between",
      });
    }

    return this;
  }
  toBeOfType(type) {
    this._expected = true;

    if (typeof this.value !== type) {
      throw new TestException({
        message: `${this.value} is not of type ${type}`,
        code: 1025,
        status: "of-type",
      });
    }

    return this;
  }
  notToBeOfType(type) {
    this._expected = true;

    if (typeof this.value === type) {
      throw new TestException({
        message: `${this.value} is of type ${type}`,
        code: 1045,
        status: "not-oftype",
      });
    }

    return this;
  }
  toBeString() {
    this._expected = true;

    if (!isString(this.value)) {
      throw new TestException({
        message: `${this.value} is not string`,
        code: 1026,
        status: "is-string",
      });
    }

    return this;
  }
  notToBeString() {
    this._expected = true;

    if (isString(this.value)) {
      throw new TestException({
        message: `${this.value} is string`,
        code: 1046,
        status: "not-is-string",
      });
    }

    return this;
  }
  toBeSomeString() {
    this._expected = true;
    if (!isSomeString(this.value)) {
      throw new TestException({
        message: `${this.value} is not some string`,
        code: 1027,
        status: "is-some-string",
      });
    }

    return this;
  }
  notToBeSomeString() {
    this._expected = true;

    if (isSomeString(this.value)) {
      throw new TestException({
        message: `${this.value} is some string`,
        code: 1047,
        status: "not-is-some-string",
      });
    }

    return this;
  }
  toBeNumber() {
    this._expected = true;

    if (!isNumber(this.value)) {
      throw new TestException({
        message: `${this.value} is not number`,
        code: 1028,
        status: "is-number",
      });
    }

    return this;
  }
  notToBeNumber() {
    this._expected = true;

    if (isNumber(this.value)) {
      throw new TestException({
        message: `${this.value} is number`,
        code: 1048,
        status: "not-is-number",
      });
    }

    return this;
  }
  toBeDate() {
    this._expected = true;

    if (!isDate(this.value)) {
      throw new TestException({
        message: `${this.value} is not date`,
        code: 1029,
        status: "is-date",
      });
    }

    return this;
  }
  notToBeDate() {
    this._expected = true;

    if (isDate(this.value)) {
      throw new TestException({
        message: `${this.value} is date`,
        code: 1049,
        status: "not-is-date",
      });
    }

    return this;
  }
  toBeBool() {
    this._expected = true;

    if (!isBool(this.value)) {
      throw new TestException({
        message: `${this.value} is not bool`,
        code: 1030,
        status: "is-bool",
      });
    }

    return this;
  }
  notToBeBool() {
    this._expected = true;

    if (isBool(this.value)) {
      throw new TestException({
        message: `${this.value} is bool`,
        code: 1050,
        status: "not-is-bool",
      });
    }

    return this;
  }
  toBeBasicType() {
    this._expected = true;

    if (!isBasic(this.value)) {
      throw new TestException({
        message: `${this.value} is not basic type`,
        code: 1031,
        status: "is-basic-type",
      });
    }

    return this;
  }
  notToBeBasicType() {
    this._expected = true;

    if (isBasic(this.value)) {
      throw new TestException({
        message: `${this.value} is basic type`,
        code: 1051,
        status: "not-is-basic-type",
      });
    }

    return this;
  }
  toBePrimitive() {
    this._expected = true;

    if (!isPrimitive(this.value)) {
      throw new TestException({
        message: `${this.value} is not primitive type`,
        code: 1032,
        status: "is-primitive",
      });
    }

    return this;
  }
  notToBePrimitive() {
    this._expected = true;

    if (isPrimitive(this.value)) {
      throw new TestException({
        message: `${this.value} is primitive type`,
        code: 1052,
        status: "not-is-primitive",
      });
    }

    return this;
  }
  toBeEmpty() {
    this._expected = true;

    if (!isEmpty(this.value)) {
      throw new TestException({
        message: `${this.value} is not empty`,
        code: 1033,
        status: "is-empty",
      });
    }

    return this;
  }
  notToBeEmpty() {
    this._expected = true;

    if (isEmpty(this.value)) {
      throw new TestException({
        message: `${this.value} is empty`,
        code: 1053,
        status: "not-is-empty",
      });
    }

    return this;
  }
  toBeObject() {
    this._expected = true;

    if (!isObject(this.value)) {
      throw new TestException({
        message: `${this.value} is not object`,
        code: 1034,
        status: "is-object",
      });
    }

    return this;
  }
  notToBeObject() {
    this._expected = true;

    if (isObject(this.value)) {
      throw new TestException({
        message: `${this.value} is object`,
        code: 1054,
        status: "not-is-object",
      });
    }

    return this;
  }
  toBeSomeObject() {
    this._expected = true;

    if (!isSomeObject(this.value)) {
      throw new TestException({
        message: `${this.value} is not some object`,
        code: 1035,
        status: "is-some-object",
      });
    }

    return this;
  }
  notToBeSomeObject() {
    this._expected = true;

    if (isSomeObject(this.value)) {
      throw new TestException({
        message: `${this.value} is some object`,
        code: 1055,
        status: "not-is-some-object",
      });
    }

    return this;
  }
  toBeFunction() {
    this._expected = true;

    if (!isFunction(this.value)) {
      throw new TestException({
        message: `${this.value} is not function`,
        code: 1036,
        status: "is-function",
      });
    }

    return this;
  }
  notToBeFunction() {
    this._expected = true;

    if (isFunction(this.value)) {
      throw new TestException({
        message: `${this.value} is function`,
        code: 1056,
        status: "not-is-function",
      });
    }

    return this;
  }
  toBeNumeric() {
    this._expected = true;

    if (!isNumeric(this.value)) {
      throw new TestException({
        message: `${this.value} is not numeric`,
        code: 1037,
        status: "is-numeric",
      });
    }

    return this;
  }
  notToBeNumeric() {
    this._expected = true;

    if (isNumeric(this.value)) {
      throw new TestException({
        message: `${this.value} is numeric`,
        code: 1057,
        status: "not-is-numeric",
      });
    }

    return this;
  }
  toBeArray() {
    this._expected = true;

    if (!isArray(this.value)) {
      throw new TestException({
        message: `${this.value} is not array`,
        code: 1038,
        status: "is-array",
      });
    }

    return this;
  }
  notToBeArray() {
    this._expected = true;

    if (isArray(this.value)) {
      throw new TestException({
        message: `${this.value} is array`,
        code: 1058,
        status: "not-is-array",
      });
    }

    return this;
  }
  toBeSomeArray() {
    this._expected = true;

    if (!isSomeArray(this.value)) {
      throw new TestException({
        message: `${this.value} is not some array`,
        code: 1039,
        status: "is-some-array",
      });
    }

    return this;
  }
  notToBeSomeArray() {
    this._expected = true;

    if (!isArray(this.value)) {
      throw new TestException({
        message: `${this.value} is not array`,
        code: 1068,
        status: "is-not-array",
      });
    }
    if (this.value.length) {
      throw new TestException({
        message: `${this.value} is array`,
        code: 1069,
        status: "is-some-array",
      });
    }

    return this;
  }
  toBeIterable() {
    this._expected = true;

    if (!isIterable(this.value)) {
      throw new TestException({
        message: `${this.value} is not iterable`,
        code: 1040,
        status: "is-iterable",
      });
    }

    return this;
  }
  notToBeIterable() {
    this._expected = true;

    if (isIterable(this.value)) {
      throw new TestException({
        message: `${this.value} is iterable`,
        code: 1060,
        status: "not-iterable",
      });
    }

    return this;
  }
  toBeSubClassOf(type) {
    this._expected = true;

    if (!isSubClassOf(this.value, type)) {
      throw new TestException({
        message: `${this.value} is not subclass of ${type}`,
        code: 1041,
        status: "is-subclass-of",
      });
    }

    return this;
  }
  notToBeSubClassOf(type) {
    this._expected = true;

    if (isSubClassOf(this.value, type)) {
      throw new TestException({
        message: `${this.value} is subclass of ${type}`,
        code: 1061,
        status: "not-subclassof",
      });
    }

    return this;
  }
  toBeInstanceOf(type) {
    this._expected = true;

    if (!(this.value instanceof type)) {
      throw new TestException({
        message: `${this.value} is not instance of ${type}`,
        code: 1042,
        status: "instanceof",
      });
    }

    return this;
  }
  notToBeInstanceOf(type) {
    this._expected = true;

    if (this.value instanceof type) {
      throw new TestException({
        message: `${this.value} is instance of ${type}`,
        code: 1062,
        status: "not-instanceof",
      });
    }

    return this;
  }
  toMatch(pattern, flags) {
    this._expected = true;

    const r = new RegExp(pattern, flags);

    if (!r.test(this.value)) {
      throw new TestException({
        message: `${this.value} does not match ${pattern}`,
        code: 1043,
        status: "match",
      });
    }

    return this;
  }
  notToMatch(pattern, flags) {
    this._expected = true;

    const r = new RegExp(pattern, flags);

    if (r.test(this.value)) {
      throw new TestException({
        message: `${this.value} matches ${pattern}`,
        code: 1070,
        status: "match",
      });
    }

    return this;
  }
  doesNotMatch(pattern, flags) {
    this._expected = true;

    const r = new RegExp(pattern, flags);

    if (r.test(this.value)) {
      throw new TestException({
        message: `${this.value} matches ${pattern}`,
        code: 1063,
        status: "not-match",
      });
    }

    return this;
  }
  toBeDefined() {
    this._expected = true;

    if (this.value === undefined) {
      throw new TestException({
        message: `value is undefined`,
        code: 1006,
        status: "undefined",
      });
    }

    return this;
  }
  notToBeDefined() {
    this._expected = true;

    if (this.value !== undefined) {
      throw new TestException({
        message: `value is defined`,
        code: 1071,
        status: "defined",
      });
    }

    return this;
  }
  toBeUndefined() {
    this._expected = true;

    if (this.value !== undefined) {
      throw new TestException({
        message: `value is defined`,
        code: 1007,
        status: "defined",
      });
    }

    return this;
  }
  notToBeUndefined() {
    this._expected = true;

    if (this.value === undefined) {
      throw new TestException({
        message: `value is undefined`,
        code: 1072,
        status: "undefined",
      });
    }

    return this;
  }
  toBeNull() {
    this._expected = true;

    if (this.value !== null) {
      throw new TestException({
        message: `value is not null`,
        code: 1008,
        status: "not-null",
      });
    }

    return this;
  }
  notToBeNull() {
    this._expected = true;

    if (this.value === null) {
      throw new TestException({
        message: `value is null`,
        code: 1009,
        status: "null",
      });
    }

    return this;
  }
  toBeNullOrUndefined() {
    this._expected = true;

    if (this.value == null) {
    } else {
      throw new TestException({
        message: `value is not null/undefined`,
        code: 1010,
        status: "not-null-or-undefined",
      });
    }

    return this;
  }
  notToBeNullOrUndefined() {
    this._expected = true;

    if (this.value == null) {
      throw new TestException({
        message: `value is null/undefined`,
        code: 1011,
        status: "null-or-undefined",
      });
    }

    return this;
  }
  toBeEmptyArray() {
    this._expected = true;

    if (isSomeArray(this.value)) {
      throw new TestException({
        message: `${this.value} is some array`,
        code: 1059,
        status: "to-be-empty-array",
      });
    }

    return this;
  }
  toBeValid(fnValidation) {
    this._expected = true;

    if (!isFunction(fnValidation)) {
      throw new TestException({
        message: `fnValidation is not function`,
        code: 1064,
        status: "to-be-valid",
      });
    }
    if (!fnValidation(this.value)) {
      throw new TestException({
        message: `${this.value} is not valid`,
        code: 1065,
        status: "to-be-valid",
      });
    }

    return this;
  }
  notToBeValid(fnValidation) {
    this._expected = true;

    if (!isFunction(fnValidation)) {
      throw new TestException({
        message: `fnValidation is not function`,
        code: 1066,
        status: "not-to-be-valid",
      });
    }
    if (fnValidation(this.value)) {
      throw new TestException({
        message: `${this.value} is valid`,
        code: 1067,
        status: "not-to-be-valid",
      });
    }

    return this;
  }
  toThrow(ex, shape = false, strict = false) {
    this._expected = true;

    if (!isFunction(this.value)) {
      throw new TestException({
        message: `given argument is not a function.`,
        code: 1012,
        status: "not-func",
      });
    }

    let ok = false;

    try {
      this.value();

      ok = true;
    } catch (e) {
      if (ex !== undefined) {
        if (isPrimitive(ex)) {
          if (e !== ex) {
            throw new TestException({
              message: `given function threw incorrect error.`,
              code: 1018,
              status: "incorrect-throw-error",
            });
          }
        } else if (isFunction(ex)) {
          if (!(e instanceof ex)) {
            throw new TestException({
              message: `given function threw incorrect instance.`,
              code: 1019,
              status: "incorrect-throw-instance",
            });
          }
        } else if (isObject(ex)) {
          if (shape) {
            if (!equals(e, ex, strict)) {
              throw new TestException({
                message: `given function threw incorrect object shape.`,
                code: 1020,
                status: "incorrect-throw-shape",
              });
            }
          } else {
            if (e !== ex) {
              throw new TestException({
                message: `given function threw incorrect object.`,
                code: 1021,
                status: "incorrect-throw-object",
              });
            }
          }
        } else {
          if (e !== ex) {
            throw new TestException({
              message: `given function threw incorrect value.`,
              code: 1022,
              status: "incorrect-throw-value",
            });
          }
        }
      }
    }

    if (ok) {
      throw new TestException({
        message: `given function ran without throwing any errors.`,
        code: 1013,
        status: "ran-to-completion",
      });
    }

    return this;
  }
  notToThrow(ex, shape = false, strict = false) {
    this._expected = true;

    if (!isFunction(this.value)) {
      throw new TestException({
        message: `given argument is not a function.`,
        code: 1012,
        status: "not-func",
      });
    }

    let ok = true;
    let error;

    try {
      this.value();

      ok = false;
    } catch (e) {
      error = e;

      if (ex !== undefined) {
        if (isPrimitive(ex)) {
          if (e === ex) {
            throw new TestException({
              message: `given function threw incorrect error.`,
              code: 1018,
              status: "incorrect-throw-error",
            });
          }
        } else if (isFunction(ex)) {
          if (e instanceof ex) {
            throw new TestException({
              message: `given function threw incorrect instance.`,
              code: 1019,
              status: "incorrect-throw-instance",
            });
          }
        } else if (isObject(ex)) {
          if (shape) {
            if (equals(e, ex, strict)) {
              throw new TestException({
                message: `given function threw incorrect object shape.`,
                code: 1020,
                status: "incorrect-throw-shape",
              });
            }
          } else {
            if (e === ex) {
              throw new TestException({
                message: `given function threw incorrect object.`,
                code: 1021,
                status: "incorrect-throw-object",
              });
            }
          }
        } else {
          if (e === ex) {
            throw new TestException({
              message: `given function threw incorrect value.`,
              code: 1022,
              status: "incorrect-throw-value",
            });
          }
        }
      }
    }

    if (ok) {
      throw new TestException({
        message: `given function threw an error.`,
        code: 1014,
        status: "ran-to-error",
        innerException: error,
      });
    }

    return this;
  }
  async toThrowAsync(ex, shape = false, strict = false) {
    this._expected = true;

    if (!isFunction(this.value)) {
      throw new TestException({
        message: `given argument is not a function.`,
        code: 1012,
        status: "not-func",
      });
    }

    let ok = false;

    try {
      await this.value();

      ok = true;
    } catch (e) {
      if (ex !== undefined) {
        if (isPrimitive(ex)) {
          if (e !== ex) {
            throw new TestException({
              message: `given function threw incorrect error.`,
              code: 1018,
              status: "incorrect-throw-error",
            });
          }
        } else if (isFunction(ex)) {
          if (!(e instanceof ex)) {
            throw new TestException({
              message: `given function threw incorrect instance.`,
              code: 1019,
              status: "incorrect-throw-instance",
            });
          }
        } else if (isObject(ex)) {
          if (shape) {
            if (!equals(e, ex, strict)) {
              throw new TestException({
                message: `given function threw incorrect object shape.`,
                code: 1020,
                status: "incorrect-throw-shape",
              });
            }
          } else {
            if (e !== ex) {
              throw new TestException({
                message: `given function threw incorrect object.`,
                code: 1021,
                status: "incorrect-throw-object",
              });
            }
          }
        } else {
          if (e !== ex) {
            throw new TestException({
              message: `given function threw incorrect value.`,
              code: 1022,
              status: "incorrect-throw-value",
            });
          }
        }
      }
    }

    if (ok) {
      throw new TestException({
        message: `given function ran without throwing any errors.`,
        code: 1013,
        status: "ran-to-completion",
      });
    }

    return this;
  }
  async notToThrowAsync(ex, shape = false, strict = false) {
    this._expected = true;

    if (!isFunction(this.value)) {
      throw new TestException({
        message: `given argument is not a function.`,
        code: 1012,
        status: "not-func",
      });
    }

    let ok = true;
    let error;

    try {
      await this.value();

      ok = false;
    } catch (e) {
      error = e;

      if (ex !== undefined) {
        if (isPrimitive(ex)) {
          if (e === ex) {
            throw new TestException({
              message: `given function threw incorrect error.`,
              code: 1018,
              status: "incorrect-throw-error",
            });
          }
        } else if (isFunction(ex)) {
          if (e instanceof ex) {
            throw new TestException({
              message: `given function threw incorrect instance.`,
              code: 1019,
              status: "incorrect-throw-instance",
            });
          }
        } else if (isObject(ex)) {
          if (shape) {
            if (equals(e, ex, strict)) {
              throw new TestException({
                message: `given function threw incorrect object shape.`,
                code: 1020,
                status: "incorrect-throw-shape",
              });
            }
          } else {
            if (e === ex) {
              throw new TestException({
                message: `given function threw incorrect object.`,
                code: 1021,
                status: "incorrect-throw-object",
              });
            }
          }
        } else {
          if (e === ex) {
            throw new TestException({
              message: `given function threw incorrect value.`,
              code: 1022,
              status: "incorrect-throw-value",
            });
          }
        }
      }
    }

    if (ok) {
      throw new TestException({
        message: `given function threw an error.`,
        code: 1014,
        status: "ran-to-error",
        innerException: error,
      });
    }

    return this;
  }
  toBeTruthy() {
    this._expected = true;

    if (this.value) {
    } else {
      throw new TestException({
        message: `${this.value} is not truthy`,
        code: 1015,
        status: "not-truthy",
      });
    }

    return this;
  }
  toBeTrue() {
    return this.toBeTruthy();
  }
  toBeFalsy() {
    this._expected = true;

    if (!this.value) {
    } else {
      throw new TestException({
        message: `${this.value} is not falsy`,
        code: 1016,
        status: "not-falsy",
      });
    }

    return this;
  }
  toBeFalse() {
    return this.toBeFalsy();
  }
  toBeNaN() {
    this._expected = true;

    if (isNaN(this.value)) {
    } else {
      throw new TestException({
        message: `${this.value} is not NaN`,
        code: 1017,
        status: "not-nan",
      });
    }

    return this;
  }
  notToBeNaN() {
    this._expected = true;

    if (!isNaN(this.value)) {
    } else {
      throw new TestException({
        message: `${this.value} is NaN`,
        code: 1023,
        status: "is-nan",
      });
    }

    return this;
  }
}

class Test {
  constructor(name, fn) {
    this.name = name;
    this.fn = fn;
  }
  run() {
    return new Promise((res) => {
      const start = new Date();

      if (isFunction(this.fn)) {
        const _expect = new Expect();

        try {
          const _result = this.fn((x) => {
            _expect.value = x;

            return _expect;
          });

          if (_result && isFunction(_result.then)) {
            _result
              .then((result) => {
                res({
                  success: true,
                  test: this.name,
                  result,
                  time: new Date() - start,
                  expected: _expect.expected,
                });
              })
              .catch((ex) => {
                res({
                  success: false,
                  test: this.name,
                  time: new Date() - start,
                  expected: _expect.expected,
                  err: new TestException({
                    message: `test '${this.name}' failed.`,
                    code: 501,
                    status: "failed",
                    innerException: ex,
                  }),
                });
              });
          } else {
            res({
              success: true,
              test: this.name,
              time: new Date() - start,
              result: _result,
              expected: _expect.expected,
            });
          }
        } catch (ex) {
          res({
            success: false,
            test: this.name,
            time: new Date() - start,
            expected: _expect.expected,
            err: new TestException({
              message: `test '${this.name}' failed.`,
              code: 501,
              status: "failed",
              innerException: ex,
            }),
          });
        }
      } else {
        res({
          success: false,
          test: this.name,
          time: new Date() - start,
          err: new TestException({
            message: `test '${this.name}' does not have a function to be called.`,
            code: 500,
            status: "no-func",
          }),
        });
      }
    });
  }
}

const reset = "\x1b[0m";
const bright = "\x1b[1m";
const dim = "\x1b[2m";
const underscore = "\x1b[4m";
const blink = "\x1b[5m";
const reverse = "\x1b[7m";
const hidden = "\x1b[8m";

const fgBlack = "\x1b[30m";
const fgRed = "\x1b[31m";
const fgGreen = "\x1b[32m";
const fgYellow = "\x1b[33m";
const fgBlue = "\x1b[34m";
const fgMagenta = "\x1b[35m";
const fgCyan = "\x1b[36m";
const fgWhite = "\x1b[37m";
const fgGray = "\x1b[90m";

const bgBlack = "\x1b[40m";
const bgRed = "\x1b[41m";
const bgGreen = "\x1b[42m";
const bgYellow = "\x1b[43m";
const bgBlue = "\x1b[44m";
const bgMagenta = "\x1b[45m";
const bgCyan = "\x1b[46m";
const bgWhite = "\x1b[47m";
const bgGray = "\x1b[100m";

class TestRunner {
  constructor() {
    this._passed = 0;
    this._failed = 0;
    this._unknown = 0;
    this._results = [];
    this._errors = [];
  }
  async _runSingle(test, onProgress, i) {
    if (isFunction(onProgress)) {
      try {
        onProgress({ source: this, test, index: i });
      } catch (ex) {
        this._errors.push({
          index: i,
          test: test.name,
          err: new TestException({
            message: `onProgress failed for test '${test.name} at index ${i}'.`,
            code: 1500,
            status: "progress-failed",
            innerException: ex,
          }),
        });
      }
    }

    const tr = await test.run();

    this._results.push(tr);

    if (!tr.expected) {
      this._unknown++;
    } else if (tr.success) {
      this._passed++;
    } else {
      this._failed++;
    }
  }
  get result() {
    return {
      passed: this._passed,
      failed: this._failed,
      results: this._results,
      errors: this._errors,
    };
  }
  run(tests, onProgress) {
    this._passed = 0;
    this._failed = 0;
    this._results = [];
    this._errors = [];

    return new Promise((res) => {
      if (tests) {
        if (tests instanceof Test) {
          tests = [tests];
        }

        if (isArray(tests)) {
          const _tests = tests
            .map((test) => {
              let _test = test;

              if (isArray(test)) {
                if (test.length == 2) {
                  _test = new Test(test[0], test[1]);
                }
              }

              return _test;
            })
            .filter((test) => test instanceof Test)
            .map((test, i) => this._runSingle(test, onProgress, i));

          Promise.all(_tests)
            .then((_) => res(this.result))
            .catch((ex) => {
              this._errors.push({
                err: new TestException({
                  message: `not all tests succeeded. check errors.`,
                  code: 1503,
                  status: "partial-finished",
                  innerException: ex,
                }),
              });

              res(this.result);
            });
        } else {
          this._errors.push({
            err: new TestException({
              message: `invalid tests. expected array or a single test.`,
              code: 1502,
              status: "invalid-tests",
            }),
          });

          res(this.result);
        }
      } else {
        this._errors.push({
          err: new TestException({
            message: `no tests given to be ran.`,
            code: 1501,
            status: "no-tests",
          }),
        });

        res(this.result);
      }
    });
  }
  _getTime(time) {
    return `${time / 1000} sec`;
  }
  report(detailed) {
    let time = 0;

    console.log("Finished.\n");

    for (let i = 0; i < this._results.length; i++) {
      const testResult = this._results[i];
      const t = `(${this._getTime(testResult.time)})`;

      if (detailed) {
        let message = "\n" + (i + 1) + ". ";
        let err = !isNullOrEmpty(testResult.err)
          ? testResult.err.toString().split("\n")
          : [];

        err = err
          .map(
            (msg, i) =>
              `\t${
                i == err.length - 1
                  ? `${fgYellow}`
                  : `${fgGray}error ${testResult.err.code}: `
              }${msg}${reset}`
          )
          .join("\n");

        if (!testResult.expected) {
          message += `${bright}${fgWhite}${testResult.test}: ${fgMagenta}expect not used${reset} ${t}`;

          if (testResult.err) {
            message += "\n";
            message += `${fgGray}${err} ${reset}`;
          }
        } else if (testResult.success) {
          message += `${fgWhite}${testResult.test}: ${fgGreen}passed${reset} ${t}`;
        } else {
          message += `${bright}${fgWhite}${testResult.test}: ${fgRed}failed${reset} ${t}`;
          message += "\n";
          message += `${fgGray}${err} ${reset}`;
        }

        console.log(message);
      }

      time += testResult.time;
    }

    if (detailed && this._errors.length) {
      console.log("Errors:");

      for (let error of this._errors) {
        if (error.index !== undefined) {
          console.log(
            `${error.index}. ${
              error.test
            }: ${error.err.innerException.toString()}`
          );
        } else {
          console.log(`${error.err.toString()}`);
        }
      }
    }

    const text =
      (detailed ? "\n" : "") +
      `${bright}Number of tests: ${reset}${this._passed + this._failed}` +
      "\n" +
      `${bright}Total Time: ${reset}${time / 1000} sec` +
      "\n\n" +
      (this._passed > 0
        ? `${fgGreen} ${this._passed} test(s) passed${reset}`
        : `0 tests passed${reset}`) +
      ", " +
      (this._failed > 0
        ? `${fgRed} ${this._failed} test(s) failed${reset}`
        : `0 tests failed${reset}`) +
      (this._unknown > 0
        ? `, ${fgMagenta} ${this._unknown} test(s) are unknown${reset}`
        : ``) +
      "\n";

    console.log(text);
  }
  log(filename) {
    const content = JSON.stringify(
      {
        results: this._results,
        errors: this._errors,
      },
      null,
      "\t"
    );

    if (filename == null) {
      const d = new Date();

      const year = d.getFullYear().toString().padStart(4, "0");
      const month = (d.getMonth() + 1).toString().padStart(2, "0");
      const day = d.getDate().toString().padStart(2, "0");
      const hours = d.getHours().toString().padStart(2, "0");
      const minutes = d.getMinutes().toString().padStart(2, "0");
      const seconds = d.getSeconds().toString().padStart(2, "0");

      filename = `test-${year}-${month}-${day}-${hours}${minutes}${seconds}.json`;
    }

    const filepath = path.join(process.cwd(), filename);

    try {
      fs.writeFileSync(filepath, content);

      console.log(`tests outcome wrote in ${filename}.`);
    } catch (ex) {
      console.log("writing tests outcome failed.\n" + ex);
    }
  }
  static async start(...tests) {
    const tr = new TestRunner();
    const lastArg = tests[tests.length - 1];
    const detailed = tests.length && isBool(lastArg) ? lastArg : false;
    let _tests = [];

    for (let i = 0; i < tests.length; i++) {
      const t = tests[i];

      if (i != tests.length - 1 || !isBool(t)) {
        if (isIterable(t)) {
          _tests = [..._tests, ...t];
        }
      }
    }

    const result = await tr.run(_tests);

    tr.report(detailed || result.failed > 0);

    return { runner: tr, result };
  }
}

export default TestRunner;
export { Test, Expect, TestException };
