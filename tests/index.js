import TestRunner from "../index.esm.js";

class Foo {}
class Bar extends Foo {}
class Buz {}

const tests = [
  [
    "Test 1: number",
    function (expect) {
      const n = 10;

      expect(n)
        .toBeDefined()
        .toBeBasicType()
        .toBePrimitive()
        .toBeNumber()
        .toBeNumeric()
        .toBeGt(8)
        .toBeGte(10)
        .toBeLt(12)
        .toBeLte(10)
        .toBeBetween(5, 15)
        .notToBeBetween(12, 20)
        .toBeOfType("number");
    },
  ],
  [
    "Test 2: string",
    function (expect) {
      const n = "10";

      expect(n)
        .toBeDefined()
        .notToBeNumber()
        .toBeNumeric()
        .toBeOfType("string")
        .toBeString()
        .toBeSomeString();
    },
  ],
  [
    "Test 3: empty array",
    function (expect) {
      const n = [];

      expect(n)
        .toBeDefined()
        .toBeArray()
        .toBeEmptyArray();
    },
  ],
  [
    "Test 4: array",
    function (expect) {
      const n = [10];

      expect(n)
        .toBeDefined()
        .toBeArray()
        .toBeSomeArray();
    },
  ],
  [
    "Test 3: empty object",
    function (expect) {
      const n = {};

      expect(n)
        .toBeDefined()
        .notToBeBasicType()
        .notToBePrimitive()
        .notToBeNull()
        .toBeObject()
        .notToBeSomeObject();
    },
  ],
  [
    "Test 4: object",
    function (expect) {
      const n = {a:10};

      expect(n)
        .toBeDefined()
        .notToBeBasicType()
        .notToBePrimitive()
        .notToBeNull()
        .toBeObject()
        .toBeSomeObject();
    },
  ],
  [
    "Test 4: class",
    function (expect) {
      const x = new Bar();

      expect(x)
        .toBeDefined()
        .toBeObject()
        .notToBeSomeObject()
        .toBeInstanceOf(Bar)
        .toBeInstanceOf(Foo)
        .notToBeInstanceOf(Buz);
    },
  ]
];

const runner = new TestRunner();

runner.run(tests).then((result) => {
  runner.report(result.failed > 0);
});
