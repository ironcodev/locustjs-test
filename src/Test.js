import { isFunction } from "@locustjs/base";
import TestException from "./TestException";
import Expect from "./Expect";

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

export default Test;
