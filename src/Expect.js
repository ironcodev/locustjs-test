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
} from "@locustjs/base";
import TestException from "./TestException";

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
      } else {
        ok = false;
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
      } else {
        ok = true;
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
      } else {
        ok = false;
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
      } else {
        ok = true;
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

export default Expect;
