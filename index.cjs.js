import { isArray, isFunction } from '@locustjs/base';
import { Exception } from '@locustjs/exception';
class Expect {
  constructor(value) {
    this.value = value;
  }
  toBe(value) {
    if (this.value === value) {} else {
      throw new Exception({
        message: `${this.value} is not equal to ${value}`,
        code: 1000,
        status: 'not-eq'
      });
    }
  }
  toBeGt(value) {
    if (this.value <= value) {
      throw new Exception({
        message: `${this.value} is lower than or equal to ${value}`,
        code: 1001,
        status: 'lte'
      });
    }
  }
  toBeGte(value) {
    if (this.value < value) {
      throw new Exception({
        message: `${this.value} is lower than to ${value}`,
        code: 1002,
        status: 'lt'
      });
    }
  }
  toBeLt(value) {
    if (this.value >= value) {
      throw new Exception({
        message: `${this.value} is greater than or equal to ${value}`,
        code: 1003,
        status: 'gte'
      });
    }
  }
  toBeLte(value) {
    if (this.value > value) {
      throw new Exception({
        message: `${this.value} is greater than ${value}`,
        code: 1004,
        status: 'gt'
      });
    }
  }
  notToBe(value) {
    if (this.value === value) {
      throw new Exception({
        message: `${value} is equal to ${this.value}`,
        code: 1005,
        status: 'eq'
      });
    }
  }
  toBeDefined() {
    if (this.value === undefined) {
      throw new Exception({
        message: `value is undefined`,
        code: 1006,
        status: 'undefined'
      });
    }
  }
  toBeUndefined() {
    if (this.value !== undefined) {
      throw new Exception({
        message: `value is defined`,
        code: 1007,
        status: 'defined'
      });
    }
  }
  toBeNull() {
    if (this.value !== null) {
      throw new Exception({
        message: `value is not null`,
        code: 1008,
        status: 'not-null'
      });
    }
  }
  notToBeNull() {
    if (this.value === null) {
      throw new Exception({
        message: `value is null`,
        code: 1009,
        status: 'null'
      });
    }
  }
  toBeNullOrUndefined() {
    if (this.value == null) {} else {
      throw new Exception({
        message: `value is not null/undefined`,
        code: 1010,
        status: 'not-null-or-undefined'
      });
    }
  }
  notToBeNullOrUndefined() {
    if (this.value == null) {
      throw new Exception({
        message: `value is null/undefined`,
        code: 1011,
        status: 'null-or-undefined'
      });
    }
  }
  toThrow(fn) {
    if (!isFunction(fn)) {
      throw new Exception({
        message: `given argument is not a function.`,
        code: 1012,
        status: 'no-func'
      });
    }
    let ok = false;
    try {
      fn();
      ok = true;
    } catch (e) {}
    if (ok) {
      throw new Exception({
        message: `given function ran without throwing any errors.`,
        code: 1013,
        status: 'ran-to-completion'
      });
    }
  }
  async toThrowAsync(fn) {
    if (!isFunction(fn)) {
      throw new Exception({
        message: `given argument is not a function.`,
        code: 1012,
        status: 'no-func'
      });
    }
    let ok = false;
    try {
      await fn();
      ok = true;
    } catch (e) {}
    if (ok) {
      throw new Exception({
        message: `given function ran without throwing any errors.`,
        code: 1013,
        status: 'ran-to-completion'
      });
    }
  }
  notToThrow(fn) {
    if (!isFunction(fn)) {
      throw new Exception({
        message: `given argument is not a function.`,
        code: 1012,
        status: 'no-func'
      });
    }
    let ok = true;
    let error;
    try {
      fn();
      ok = false;
    } catch (e) {
      error = e;
    }
    if (ok) {
      throw new Exception({
        message: `given function threw an error.`,
        code: 1014,
        status: 'ran-to-error',
        innerException: error
      });
    }
  }
  async notToThrowAsync(fn) {
    if (!isFunction(fn)) {
      throw new Exception({
        message: `given argument is not a function.`,
        code: 1012,
        status: 'no-func'
      });
    }
    let ok = true;
    let error;
    try {
      await fn();
      ok = false;
    } catch (e) {
      error = e;
    }
    if (ok) {
      throw new Exception({
        message: `given function threw an error.`,
        code: 1014,
        status: 'ran-to-error',
        innerException: error
      });
    }
  }
}
const expect = x => new Expect(x);
class Test {
  constructor(name, fn) {
    this.name = name;
    this.fn = fn;
  }
  run() {
    return new Promise(res => {
      if (isFunction(this.fn)) {
        try {
          const start = new Date();
          const _result = this.fn(expect);
          if (_result && isFunction(_result.then)) {
            _result.then(result => {
              res({
                success: true,
                test: this.name,
                result,
                time: new Date() - start
              });
            }).catch(ex => {
              res({
                success: false,
                test: this.name,
                time: new Date() - start,
                err: new Exception({
                  message: `test '${this.name}' failed.`,
                  code: 501,
                  status: 'failed',
                  innerException: ex
                })
              });
            });
          } else {
            res({
              success: true,
              test: this.name,
              time: new Date() - start,
              result: _result
            });
          }
        } catch (ex) {
          res({
            success: false,
            test: this.name,
            time: new Date() - start,
            err: new Exception({
              message: `test '${this.name}' failed.`,
              code: 501,
              status: 'failed',
              innerException: ex
            })
          });
        }
      } else {
        res({
          success: false,
          test: this.name,
          time: new Date() - start,
          err: new Exception({
            message: `test '${this.name}' does not have a function to be called.`,
            code: 500,
            status: 'no-func'
          })
        });
      }
    });
  }
}
const ConsoleColors = {
  BackColor: {
    Black: 40
  },
  ForeColor: {
    Red: 31,
    Green: 32,
    White: 37,
    Gray: 90
  },
  Modifier: {
    Reset: "\x1b[0m"
  }
};
class TestRunner {
  constructor() {
    this.passed = 0;
    this.failed = 0;
    this.results = [];
    this.errors = [];
  }
  async _runSingle(test, onProgress, i) {
    if (isFunction(onProgress)) {
      try {
        onProgress(i, test);
      } catch (ex) {
        this.errors.push({
          err: new Exception({
            message: `onProgress failed for test '${test.name} at index ${i}'.`,
            code: 1500,
            status: 'progress-failed'
          })
        });
      }
    }
    const tr = await test.run();
    this.results.push(tr);
    if (tr.success) {
      this.passed++;
    } else {
      this.failed++;
    }
  }
  get result() {
    return {
      passed: this.passed,
      failed: this.failed,
      results: this.results,
      errors: this.errors
    };
  }
  run(tests, onProgress) {
    this.passed = 0;
    this.failed = 0;
    this.results = [];
    this.errors = [];
    return new Promise(res => {
      if (tests) {
        if (tests instanceof Test) {
          tests = [tests];
        }
        if (isArray(tests)) {
          const _tests = tests.map(test => {
            let _test = test;
            if (isArray(test)) {
              if (test.length == 2) {
                _test = new Test(test[0], test[1]);
              }
            }
            return _test;
          }).filter(test => test instanceof Test).map((test, i) => this._runSingle(test, onProgress, i));
          Promise.all(_tests).then(_ => res()).catch(ex => {
            this.errors.push({
              err: new Exception({
                message: `not all tests succeeded. check errors.`,
                code: 1503,
                status: 'partial-finished',
                innerException: ex
              })
            });
            res();
          });
        } else {
          this.errors.push({
            err: new Exception({
              message: `invalid tests. expected array or a single test.`,
              code: 1502,
              status: 'invalid-tests'
            })
          });
          res();
        }
      } else {
        this.errors.push({
          err: new Exception({
            message: `no tests given to be ran.`,
            code: 1501,
            status: 'no-tests'
          })
        });
        res();
      }
    });
  }
  report() {
    let time = 0;
    for (let r of this.results) {
      time += r.time;
    }
    const text = 'Finished.' + '\n' + (this.failed > 0 ? `\x1b[${ConsoleColors.ForeColor.Red}m ${this.failed} tests failed` : '0 tests failed' + ConsoleColors.Modifier.Reset) + ', ' + (this.passed > 0 ? `\x1b[${ConsoleColors.ForeColor.Green}m ${this.passed} tests passed` : '0 tests passed' + ConsoleColors.Modifier.Reset) + '\n' + `Tests: ${this.passed + this.failed}` + '\n' + `Time: ${time / 1000} sec` + '\n';
    console.log(text);
  }
}
export default TestRunner;
export { Test, Expect, expect };
