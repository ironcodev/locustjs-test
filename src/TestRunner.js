import {
  isBool,
  isObject,
  isFunction,
  isArray,
  isIterable,
} from "@locustjs/base";
import fs from "fs";
import path from "path";
import TestException from "./TestException";
import Test from "./Test";

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
    this._init();
  }
  _init() {
    this._passed = 0;
    this._failed = 0;
    this._faulted = 0;
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
    if (!(test instanceof Test)) {
      this._unknown++;

      this._errors.push({
        index: i,
        err: new TestException({
          message: `Given test is not an instance of '@locustjs/test:Test' class.`,
          code: 1504,
          status: "invalid-test",
        }),
      });
    } else {
      const tr = await test.run();
      this._results.push(tr);

      if (isObject(tr.err)) {
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
    }
  }
  get result() {
    return {
      passed: this._passed,
      failed: this._failed,
      faulted: this._faulted,
      results: this._results,
      errors: this._errors,
    };
  }
  run(tests, onProgress) {
    this._init();

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
        let err = isObject(testResult.err)
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

        if (isObject(testResult.err)) {
          if (!testResult.expected) {
            message += `${bright}${fgWhite}${testResult.test}: ${fgYellow}faulted${reset} ${t}`;
            message += "\n";
            message += `${fgGray}${err} ${reset}`;
          } else {
            message += `${bright}${fgWhite}${testResult.test}: ${fgRed}failed${reset} ${t}`;
            message += "\n";
            message += `${fgGray}${err} ${reset}`;
          }
        } else if (!testResult.expected) {
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
      `${bright}Number of tests: ${reset}${this._results.length}` +
      "\n" +
      `${bright}Total Time: ${reset}${time / 1000} sec` +
      "\n\n" +
      (this._passed > 0
        ? `${fgGreen} ${this._passed} test(s) passed${reset}`
        : `0 tests passed${reset}`) +
      ", " +
      (this._failed > 0
        ? `${fgRed}${this._failed} test(s) failed${reset}`
        : `0 tests failed${reset}`) +
      (this._faulted > 0
        ? `, ${fgYellow}${this._faulted} test(s) faulted${reset}`
        : ``) +
      (this._unknown > 0
        ? `, ${fgMagenta}${this._unknown} test(s) are unknown${reset}`
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
      console.log("writing tests' report failed.\n" + ex);
    }
  }
  async test(...tests) {
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

    const result = await this.run(_tests);

    this.report(detailed || result.failed > 0);

    return { runner: this, result };
  }
  static start(...tests) {
    const tr = new TestRunner();

    return tr.test(...tests);
  }
}

export default TestRunner;
