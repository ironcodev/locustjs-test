# @locustjs/test
This library provides a simple test runner for unit-testing.

# Install
```
npm i @locustjs/test
```

Example:
```javascript
import TestRunner from '@locustjs/test';

const tests = [
  ['test 1', expect => expect(2 + 2).toBe(4)],
  ['test 2', expect => expect(undefined).toBeUndefined()],
  ['test 3', expect => expect(5).toBeGt(10)],  // this test fails
];

const runner = new TestRunner();

await runner.run(tests);

runner.report();
runner.log();
```

Sample output:

1. Test 1: number: <span style="color:green">passed</span> (0 sec)

2. Test 2: string: <span style="color:green">passed</span> (0 sec)

3. Test 3: empty array: <span style="color:green">passed</span> (0 sec)

4. Test 4: array: <span style="color:green">passed</span> (0 sec)

5. Test 5: empty object: <span style="color:green">passed</span> (0 sec)

6. Test 6: object: <span style="color:green">passed</span> (0 sec)

7. <b>Test 7: error:</b> <span style="color:red">failed</span> (0.001 sec)
<div style="color:gray; margin-left: 50px">error 501: test 'Test 7: error' failed.</div>
<div style="color:yellow; margin-left: 50px">10 is not greater than 20</div>

8. <b>Test 8: not expected:</b> <span style="color:magenta">expect not used</span> (0 sec)

9. <b>Test 9: error without expect:</b> <span style="color:magenta">expect not used</span> (0 sec)
<div style="color:gray; margin-left: 50px">error 501: test 'Test 9: error without expect' failed.</div>
<div style="color:yellow; margin-left: 50px">some err</div>

10. Test 10: class: <span style="color:green">passed</span> (0 sec)

<div><b>Number of tests: 8</b></div>
<div><b>Total Time: 0.001</b> sec</div>
<br/>
 <span style="color:green">7 test(s) passed</span>,  <span style="color:red">1 test(s) failed</span>,  <span style="color:magenta">2 test(s) are unknown</span>

# expect
Positive
- `toBe(value)`
- `toBeGt(value)`
- `toBeGreaterThan(value)`
- `toBeGte(value)`
- `toBeGreaterThanOrEqualTo(value)`
- `toBeLt(value)`
- `toBeLowerThan(value)`
- `toBeLte(value)`
- `toBeLowerThanOrEqualTo(value)`
- `toBeBetween(n, m)`
- `toBeOfType(type)`
- `toBeString()`
- `toBeSomeString()`
- `toBeNumber()`
- `toBeNumeric()`
- `toBeDate()`
- `toBeBool()`
- `toBeBasicType()`
- `toBePrimitive()`
- `toBeEmpty()`
- `toBeObject()`
- `toBeSomeObject()`
- `toBeFunction()`
- `toBeArray()`
- `toBeEmptyArray()`
- `toBeSomeArray()`
- `toBeIterable()`
- `toBeSubClassOf(type)`
- `toBeInstanceOf(type)`
- `toMatch(pattern, flags)`
- `toBeDefined()`
- `toBeUndefined()`
- `toBeNull()`
- `toBeNullOrUndefined()`
- `toBeValid(fnValidation)`
- `toThrow(ex, shape = false, strict = false)`
- `async toThrowAsync(ex, shape = false, strict = false)`
- `toBeTruthy()`
- `toBeTrue()`
- `toBeFalsy()`
- `toBeFalse()`
- `toBeNaN()`

Negative
- `notToBe(value)`
- `notToBeBetween(n, m)`
- `notToBeOfType(type)`
- `notToBeString()`
- `notToBeSomeString()`
- `notToBeNumber()`
- `notToBeDate()`
- `notToBeBool()`
- `notToBeBasicType()`
- `notToBePrimitive()`
- `notToBeEmpty()`
- `notToBeObject()`
- `notToBeSomeObject()`
- `notToBeFunction()`
- `notToBeNumeric()`
- `notToBeArray()`
- `notToBeSomeArray()`
- `notToBeIterable()`
- `notToBeSubClassOf(type)`
- `notToBeInstanceOf(type)`
- `notToMatch(pattern, flags)`
- `doesNotMatch(pattern, flags)`
- `notToBeDefined()`
- `notToBeUndefined()`
- `notToBeNull()`
- `notToBeNullOrUndefined()`
- `notToBeValid(fnValidation)`
- `notToThrow(ex, shape = false, strict = false)`
- `async notToThrowAsync(ex, shape = false, strict = false)`
- `notToBeNaN()`

`TestRunner` has a static method `start()` that simplifies running tests.

```javascript
const tests = [
  ...
];

TestRunner.start(tests);
```

It is possible to pass multiple tests to `start()` method.

```javascript
import tests1 from './test1.js'
import tests2 from './test2.js'
import tests3 from './test3.js'

TestRunner.start(tests1, tests2, tests3);
```

The above example is equal to merging all tests arrays and pass one array to `start()`.

```javascript
TestRunner.start([...tests1, ...tests2, ...tests3])
```

By default, test runner shows detailed output only when there is at least one error. However, by passing `true` as the last argument of `start()` method, we can ask the detailed output is always shows.

```javascript
TestRunner.start(tests, true);
TestRunner.start(tests1, tests2, tests3, true);
```
