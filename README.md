# About
This library provides a simple test runner.

# Install
```
npm i @locustjs/test
```

# Matchers
- `toBe()`
- `notToBe()`
- `toBeGt()`
- `toBeGte()`
- `toBeLt()`
- `toBeLte()`
- `toBeDefined()`
- `toBeUndefined()`
- `toBeNull()`
- `notToBeNull()`
- `toBeNullOrUndefined()`
- `notToBeNullOrUndefined()`
- `toThrow()`
- `toThrowAsync()`
- `notToThrow()`
- `notToThrowAsync()`
- `toBeTruthy()`
- `toBeFalsy()`
- `toBeNaN()`
- `notToBeNaN()`

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
