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
	isSubClassOf
} from '@locustjs/base';
import { Exception } from '@locustjs/exception';
import fs from 'fs';
import path from 'path';

class Expect {
	constructor(value) {
		this.value = value
	}
	toBe(value) {
		if (this.value === value) {
		} else {
			throw new Exception({ message: `${this.value} is not equal to ${value}`, code: 1000, status: 'not-eq' })
		}

		return this;
	}
	toBeGt(value) {
		if (this.value <= value) {
			throw new Exception({ message: `${this.value} is not greater than ${value}`, code: 1001, status: 'lte' })
		}

		return this;
	}
	toBeGte(value) {
		if (this.value < value) {
			throw new Exception({ message: `${this.value} is not greater than or equal to ${value}`, code: 1002, status: 'lt' })
		}

		return this;
	}
	toBeLt(value) {
		if (this.value >= value) {
			throw new Exception({ message: `${this.value} is not less than ${value}`, code: 1003, status: 'gte' })
		}

		return this;
	}
	toBeLte(value) {
		if (this.value > value) {
			throw new Exception({ message: `${this.value} is not less than or equal to ${value}`, code: 1004, status: 'gt' })
		}

		return this;
	}
	toBeBetween(n, m) {
		if (!(this.value >= n && this.value < m)) {
			throw new Exception({ message: `${this.value} is not between ${n} and ${m}`, code: 1024, status: 'between' })
		}

		return this;
	}
	toBeOfType(type) {
		if (typeof this.value !== type) {
			throw new Exception({ message: `${this.value} is not of type ${type}`, code: 1025, status: 'of-type' })
		}

		return this;
	}
	toBeString() {
		if (!isString(this.value)) {
			throw new Exception({ message: `${this.value} is not string`, code: 1026, status: 'is-string' })
		}

		return this;
	}
	toBeSomeString() {
		if (!isSomeString(this.value)) {
			throw new Exception({ message: `${this.value} is not some string`, code: 1027, status: 'is-some-string' })
		}

		return this;
	}
	toBeNumber() {
		if (!isNumber(this.value)) {
			throw new Exception({ message: `${this.value} is not number`, code: 1028, status: 'is-number' })
		}

		return this;
	}
	toBeDate() {
		if (!isDate(this.value)) {
			throw new Exception({ message: `${this.value} is not date`, code: 1029, status: 'is-date' })
		}

		return this;
	}
	toBeBool() {
		if (!isBool(this.value)) {
			throw new Exception({ message: `${this.value} is not bool`, code: 1030, status: 'is-bool' })
		}

		return this;
	}
	toBeBasicType() {
		if (!isBasic(this.value)) {
			throw new Exception({ message: `${this.value} is not basic type`, code: 1031, status: 'is-basic-type' })
		}

		return this;
	}
	toBePrimitive() {
		if (!isPrimitive(this.value)) {
			throw new Exception({ message: `${this.value} is not primitive type`, code: 1032, status: 'is-primitive' })
		}

		return this;
	}
	toBeEmpty() {
		if (!isEmpty(this.value)) {
			throw new Exception({ message: `${this.value} is not empty`, code: 1033, status: 'is-empty' })
		}

		return this;
	}
	toBeObject() {
		if (!isObject(this.value)) {
			throw new Exception({ message: `${this.value} is not object`, code: 1034, status: 'is-object' })
		}

		return this;
	}
	toBeSomeObject() {
		if (!isSomeObject(this.value)) {
			throw new Exception({ message: `${this.value} is not some object`, code: 1035, status: 'is-some-object' })
		}

		return this;
	}
	toBeFunction() {
		if (!isFunction(this.value)) {
			throw new Exception({ message: `${this.value} is not function`, code: 1036, status: 'is-function' })
		}

		return this;
	}
	toBeNumeric() {
		if (!isNumeric(this.value)) {
			throw new Exception({ message: `${this.value} is not numeric`, code: 1037, status: 'is-numeric' })
		}

		return this;
	}
	toBeArray() {
		if (!isArray(this.value)) {
			throw new Exception({ message: `${this.value} is not array`, code: 1038, status: 'is-array' })
		}

		return this;
	}
	toBeSomeArray() {
		if (!isSomeArray(this.value)) {
			throw new Exception({ message: `${this.value} is not some array`, code: 1039, status: 'is-some-array' })
		}

		return this;
	}
	toBeIterable() {
		if (!isIterable(this.value)) {
			throw new Exception({ message: `${this.value} is not iterable`, code: 1040, status: 'is-iterable' })
		}

		return this;
	}
	toBeSubClassOf(type) {
		if (!isSubClassOf(this.value, type)) {
			throw new Exception({ message: `${this.value} is not subclass of ${type}`, code: 1041, status: 'is-subclass-of' })
		}

		return this;
	}
	toBeInstanceOf(type) {
		if (!(this.value instanceof type)) {
			throw new Exception({ message: `${this.value} is not instance of ${type}`, code: 1042, status: 'instanceof' })
		}

		return this;
	}
	toMatch(pattern, flags) {
		const r = new RegExp(pattern, flags)

		if (!r.test(this.value)) {
			throw new Exception({ message: `${this.value} does not match ${pattern}`, code: 1043, status: 'match' })
		}

		return this;
	}
	notToBe(value) {
		if (this.value === value) {
			throw new Exception({ message: `${value} is equal to ${this.value}`, code: 1005, status: 'eq' })
		}

		return this;
	}
	toBeDefined() {
		if (this.value === undefined) {
			throw new Exception({ message: `value is undefined`, code: 1006, status: 'undefined' })
		}

		return this;
	}
	toBeUndefined() {
		if (this.value !== undefined) {
			throw new Exception({ message: `value is defined`, code: 1007, status: 'defined' })
		}

		return this;
	}
	toBeNull() {
		if (this.value !== null) {
			throw new Exception({ message: `value is not null`, code: 1008, status: 'not-null' })
		}

		return this;
	}
	notToBeNull() {
		if (this.value === null) {
			throw new Exception({ message: `value is null`, code: 1009, status: 'null' })
		}

		return this;
	}
	toBeNullOrUndefined() {
		if (this.value == null) {
		} else {
			throw new Exception({ message: `value is not null/undefined`, code: 1010, status: 'not-null-or-undefined' })
		}

		return this;
	}
	notToBeNullOrUndefined() {
		if (this.value == null) {
			throw new Exception({ message: `value is null/undefined`, code: 1011, status: 'null-or-undefined' })
		}

		return this;
	}
	notToBeBetween(n, m) {
		if (this.value >= n && this.value < m) {
			throw new Exception({ message: `${this.value} is between ${n} and ${m}`, code: 1044, status: 'not-between' })
		}
		
		return this;
	}
	notToBeOfType(type) {
		if (typeof this.value === type) {
			throw new Exception({ message: `${this.value} is of type ${type}`, code: 1045, status: 'not-oftype' })
		}
		
		return this;
	}
	notToBeString() {
		if (isString(this.value)) {
			throw new Exception({ message: `${this.value} is string`, code: 1046, status: 'not-is-string' })
		}
		
		return this;
	}
	notToBeSomeString() {
		if (isSomeString(this.value)) {
			throw new Exception({ message: `${this.value} is some string`, code: 1047, status: 'not-is-some-string' })
		}
		
		return this;
	}
	notToBeNumber() {
		if (isNumber(this.value)) {
			throw new Exception({ message: `${this.value} is number`, code: 1048, status: 'not-is-number' })
		}
		
		return this;
	}
	notToBeDate() {
		if (isDate(this.value)) {
			throw new Exception({ message: `${this.value} is date`, code: 1049, status: 'not-is-date' })
		}
		
		return this;
	}
	notToBeBool() {
		if (isBool(this.value)) {
			throw new Exception({ message: `${this.value} is bool`, code: 1050, status: 'not-is-bool' })
		}
		
		return this;
	}
	notToBeBasicType() {
		if (isBasic(this.value)) {
			throw new Exception({ message: `${this.value} is basic type`, code: 1051, status: 'not-is-basic-type' })
		}
		
		return this;
	}
	notToBePrimitive() {
		if (isPrimitive(this.value)) {
			throw new Exception({ message: `${this.value} is primitive type`, code: 1052, status: 'not-is-primitive' })
		}
		
		return this;
	}
	notToBeEmpty() {
		if (isEmpty(this.value)) {
			throw new Exception({ message: `${this.value} is empty`, code: 1053, status: 'not-is-empty' })
		}
		
		return this;
	}
	notToBeObject() {
		if (isObject(this.value)) {
			throw new Exception({ message: `${this.value} is object`, code: 1054, status: 'not-is-object' })
		}
		
		return this;
	}
	notToBeSomeObject() {
		if (isSomeObject(this.value)) {
			throw new Exception({ message: `${this.value} is some object`, code: 1055, status: 'not-is-some-object' })
		}
		
		return this;
	}
	notToBeFunction() {
		if (isFunction(this.value)) {
			throw new Exception({ message: `${this.value} is function`, code: 1056, status: 'not-is-function' })
		}
		
		return this;
	}
	notToBeNumeric() {
		if (isNumeric(this.value)) {
			throw new Exception({ message: `${this.value} is numeric`, code: 1057, status: 'not-is-numeric' })
		}
		
		return this;
	}
	notToBeArray() {
		if (isArray(this.value)) {
			throw new Exception({ message: `${this.value} is array`, code: 1058, status: 'not-is-array' })
		}
		
		return this;
	}
	toBeEmptyArray() {
		if (isSomeArray(this.value)) {
			throw new Exception({ message: `${this.value} is some array`, code: 1059, status: 'to-be-empty-array' })
		}
		
		return this;
	}
	notToBeIterable() {
		if (isIterable(this.value)) {
			throw new Exception({ message: `${this.value} is iterable`, code: 1060, status: 'not-iterable' })
		}
		
		return this;
	}
	notToBeSubClassOf(type) {
		if (isSubClassOf(this.value, type)) {
			throw new Exception({ message: `${this.value} is subclass of ${type}`, code: 1061, status: 'not-subclassof' })
		}
		
		return this;
	}
	notToBeInstanceOf(type) {
		if (this.value instanceof type) {
			throw new Exception({ message: `${this.value} is instance of ${type}`, code: 1062, status: 'not-instanceof' })
		}
		
		return this;
	}
	doesNotMatch(pattern, flags) {
		const r = new RegExp(pattern, flags)

		if (r.test(this.value)) {
			throw new Exception({ message: `${this.value} matches ${pattern}`, code: 1063, status: 'not-match' })
		}
		
		return this;
	}
	toBeValid(fnValidation) {
		if (!isFunction(fnValidation)) {
			throw new Exception({ message: `fnValidation is not function`, code: 1064, status: 'to-be-valid' })
		}
		if (!fnValidation(this.value)) {
			throw new Exception({ message: `${this.value} is not valid`, code: 1065, status: 'to-be-valid' })
		}

		return this;
	}
	notToBeValid(fnValidation) {
		if (!isFunction(fnValidation)) {
			throw new Exception({ message: `fnValidation is not function`, code: 1066, status: 'not-to-be-valid' })
		}
		if (fnValidation(this.value)) {
			throw new Exception({ message: `${this.value} is valid`, code: 1067, status: 'not-to-be-valid' })
		}
		
		return this;
	}
	toThrow(ex, shape = false, strict = false) {
		if (!isFunction(this.value)) {
			throw new Exception({ message: `given argument is not a function.`, code: 1012, status: 'not-func' })
		}

		let ok = false;

		try {
			this.value();

			ok = true;
		} catch (e) {
			if (ex !== undefined) {
				if (isPrimitive(ex)) {
					if (e !== ex) {
						throw new Exception({ message: `given function threw incorrect error.`, code: 1018, status: 'incorrect-throw-error' })
					}
				} else if (isFunction(ex)) {
					if (!(e instanceof ex)) {
						throw new Exception({ message: `given function threw incorrect instance.`, code: 1019, status: 'incorrect-throw-instance' })
					}
				} else if (isObject(ex)) {
					if (shape) {
						if (!equals(e, ex, strict)) {
							throw new Exception({ message: `given function threw incorrect object shape.`, code: 1020, status: 'incorrect-throw-shape' })
						}
					} else {
						if (e !== ex) {
							throw new Exception({ message: `given function threw incorrect object.`, code: 1021, status: 'incorrect-throw-object' })
						}
					}
				} else {
					if (e !== ex) {
						throw new Exception({ message: `given function threw incorrect value.`, code: 1022, status: 'incorrect-throw-value' })
					}
				}
			}
		}

		if (ok) {
			throw new Exception({ message: `given function ran without throwing any errors.`, code: 1013, status: 'ran-to-completion' })
		}

		return this;
	}
	async toThrowAsync(ex, shape = false, strict = false) {
		if (!isFunction(this.value)) {
			throw new Exception({ message: `given argument is not a function.`, code: 1012, status: 'not-func' })
		}

		let ok = false;

		try {
			await this.value();

			ok = true;
		} catch (e) {
			if (ex !== undefined) {
				if (isPrimitive(ex)) {
					if (e !== ex) {
						throw new Exception({ message: `given function threw incorrect error.`, code: 1018, status: 'incorrect-throw-error' })
					}
				} else if (isFunction(ex)) {
					if (!(e instanceof ex)) {
						throw new Exception({ message: `given function threw incorrect instance.`, code: 1019, status: 'incorrect-throw-instance' })
					}
				} else if (isObject(ex)) {
					if (shape) {
						if (!equals(e, ex, strict)) {
							throw new Exception({ message: `given function threw incorrect object shape.`, code: 1020, status: 'incorrect-throw-shape' })
						}
					} else {
						if (e !== ex) {
							throw new Exception({ message: `given function threw incorrect object.`, code: 1021, status: 'incorrect-throw-object' })
						}
					}
				} else {
					if (e !== ex) {
						throw new Exception({ message: `given function threw incorrect value.`, code: 1022, status: 'incorrect-throw-value' })
					}
				}
			}
		}

		if (ok) {
			throw new Exception({ message: `given function ran without throwing any errors.`, code: 1013, status: 'ran-to-completion' })
		}

		return this;
	}
	notToThrow(ex, shape = false, strict = false) {
		if (!isFunction(this.value)) {
			throw new Exception({ message: `given argument is not a function.`, code: 1012, status: 'not-func' })
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
						throw new Exception({ message: `given function threw incorrect error.`, code: 1018, status: 'incorrect-throw-error' })
					}
				} else if (isFunction(ex)) {
					if (e instanceof ex) {
						throw new Exception({ message: `given function threw incorrect instance.`, code: 1019, status: 'incorrect-throw-instance' })
					}
				} else if (isObject(ex)) {
					if (shape) {
						if (equals(e, ex, strict)) {
							throw new Exception({ message: `given function threw incorrect object shape.`, code: 1020, status: 'incorrect-throw-shape' })
						}
					} else {
						if (e === ex) {
							throw new Exception({ message: `given function threw incorrect object.`, code: 1021, status: 'incorrect-throw-object' })
						}
					}
				} else {
					if (e === ex) {
						throw new Exception({ message: `given function threw incorrect value.`, code: 1022, status: 'incorrect-throw-value' })
					}
				}
			}
		}

		if (ok) {
			throw new Exception({ message: `given function threw an error.`, code: 1014, status: 'ran-to-error', innerException: error })
		}

		return this;
	}
	async notToThrowAsync(ex, shape = false, strict = false) {
		if (!isFunction(this.value)) {
			throw new Exception({ message: `given argument is not a function.`, code: 1012, status: 'not-func' })
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
						throw new Exception({ message: `given function threw incorrect error.`, code: 1018, status: 'incorrect-throw-error' })
					}
				} else if (isFunction(ex)) {
					if (e instanceof ex) {
						throw new Exception({ message: `given function threw incorrect instance.`, code: 1019, status: 'incorrect-throw-instance' })
					}
				} else if (isObject(ex)) {
					if (shape) {
						if (equals(e, ex, strict)) {
							throw new Exception({ message: `given function threw incorrect object shape.`, code: 1020, status: 'incorrect-throw-shape' })
						}
					} else {
						if (e === ex) {
							throw new Exception({ message: `given function threw incorrect object.`, code: 1021, status: 'incorrect-throw-object' })
						}
					}
				} else {
					if (e === ex) {
						throw new Exception({ message: `given function threw incorrect value.`, code: 1022, status: 'incorrect-throw-value' })
					}
				}
			}
		}

		if (ok) {
			throw new Exception({ message: `given function threw an error.`, code: 1014, status: 'ran-to-error', innerException: error })
		}

		return this;
	}
	toBeTruthy() {
		if (this.value) {
		} else {
			throw new Exception({ message: `${this.value} is not truthy`, code: 1015, status: 'not-truthy' })
		}

		return this;
	}
	toBeFalsy() {
		if (!this.value) {
		} else {
			throw new Exception({ message: `${this.value} is not falsy`, code: 1016, status: 'not-falsy' })
		}

		return this;
	}
	toBeNaN() {
		if (isNaN(this.value)) {
		} else {
			throw new Exception({ message: `${this.value} is not NaN`, code: 1017, status: 'not-nan' })
		}

		return this;
	}
	notToBeNaN() {
		if (!isNaN(this.value)) {
		} else {
			throw new Exception({ message: `${this.value} is NaN`, code: 1023, status: 'is-nan' })
		}

		return this;
	}
}

const expect = (x) => new Expect(x);

class Test {
	constructor(name, fn) {
		this.name = name;
		this.fn = fn;
	}
	run() {
		return new Promise(res => {
			const start = new Date();

			if (isFunction(this.fn)) {
				try {
					const _result = this.fn(expect);

					if (_result && isFunction(_result.then)) {
						_result.then(result => {
							res({ success: true, test: this.name, result, time: new Date() - start });
						}).catch(ex => {
							res({ success: false, test: this.name, time: new Date() - start, err: new Exception({ message: `test '${this.name}' failed.`, code: 501, status: 'failed', innerException: ex }) })
						});
					} else {
						res({ success: true, test: this.name, time: new Date() - start, result: _result });
					}
				} catch (ex) {
					res({ success: false, test: this.name, time: new Date() - start, err: new Exception({ message: `test '${this.name}' failed.`, code: 501, status: 'failed', innerException: ex }) })
				}
			} else {
				res({ success: false, test: this.name, time: new Date() - start, err: new Exception({ message: `test '${this.name}' does not have a function to be called.`, code: 500, status: 'no-func' }) })
			}
		});
	}
}

const ConsoleColors = {
	BackColor: {
		Black: 40,
	},
	ForeColor: {
		Red: 31,
		Green: 32,
		White: 37,
		Gray: 90,
	},
	Modifier: {
		Reset: "\x1b[0m",
	},
};

class TestRunner {
	constructor() {
		this._passed = 0;
		this._failed = 0;
		this._results = []
		this._errors = []
	}
	async _runSingle(test, onProgress, i) {
		if (isFunction(onProgress)) {
			try {
				onProgress(i, test);
			} catch (ex) {
				this._errors.push({ index: i, test: test.name, err: new Exception({ message: `onProgress failed for test '${test.name} at index ${i}'.`, code: 1500, status: 'progress-failed', innerException: ex }) })
			}
		}

		const tr = await test.run();

		this._results.push(tr);

		if (tr.success) {
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
			errors: this._errors
		}
	}
	run(tests, onProgress) {
		this._passed = 0;
		this._failed = 0;
		this._results = [];
		this._errors = [];

		return new Promise(res => {
			if (tests) {
				if (tests instanceof Test) {
					tests = [tests]
				}

				if (isArray(tests)) {
					const _tests = tests
						.map(test => {
							let _test = test;

							if (isArray(test)) {
								if (test.length == 2) {
									_test = new Test(test[0], test[1]);
								}
							}

							return _test;
						})
						.filter(test => (test instanceof Test))
						.map((test, i) => this._runSingle(test, onProgress, i));

					Promise.all(_tests).then(_ => res(this.result)).catch(ex => {
						this._errors.push({ err: new Exception({ message: `not all tests succeeded. check errors.`, code: 1503, status: 'partial-finished', innerException: ex }) });

						res(this.result);
					});
				} else {
					this._errors.push({ err: new Exception({ message: `invalid tests. expected array or a single test.`, code: 1502, status: 'invalid-tests' }) });

					res(this.result);
				}
			} else {
				this._errors.push({ err: new Exception({ message: `no tests given to be ran.`, code: 1501, status: 'no-tests' }) });

				res(this.result);
			}
		})
	}
	_getTime(time) {
		return `${time / 1000} sec`
	}
	report(detailed) {
		let time = 0;

		console.log('Finished.\n');

		for (let i = 0; i < this._results.length; i++) {
			const result = this._results[i];

			if (detailed) {
				let message = '\n';

				if (result.success) {
					message += `${i + 1}. \x1b[${ConsoleColors.ForeColor.White}m${result.test}: \x1b[${ConsoleColors.ForeColor.Green}m passed ${ConsoleColors.Modifier.Reset} (${this._getTime(result.time)})`
				} else {
					message += `${i + 1}. \x1b[${ConsoleColors.ForeColor.White}m${result.test}: \x1b[${ConsoleColors.ForeColor.Red}m failed ${ConsoleColors.Modifier.Reset} (${this._getTime(result.time)})`;
					message += '\n';
					message += `\x1b[${ConsoleColors.ForeColor.White}m${result.err.code}: ${result.err.toString()} ${ConsoleColors.Modifier.Reset}`;
				}

				console.log(message);
			}

			time += result.time;
		}

		if (detailed && this._errors.length) {
			console.log('Errors:');

			for (let error of this._errors) {
				if (error.index !== undefined) {
					console.log(`${error.index}. ${error.test}: ${error.err.innerException.toString()}`);
				} else {
					console.log(`${error.err.toString()}`);
				}
			}
		}

		const text = (detailed ? '\n': '') +
			`Tests: ${this._passed + this._failed}` +
			'\n' +
			`Time: ${time / 1000} sec` +
			'\n\n' +
			(this._passed > 0 ? `\x1b[${ConsoleColors.ForeColor.Green}m ${this._passed} tests passed${ConsoleColors.Modifier.Reset}` : '0 tests passed') +
			', ' +
			(this._failed > 0 ? `\x1b[${ConsoleColors.ForeColor.Red}m ${this._failed} tests failed${ConsoleColors.Modifier.Reset}` : '0 tests failed') +
			'\n';

		console.log(text);
	}
	log(filename) {
		const content = JSON.stringify({
			results: this._results,
			errors: this._errors
		}, null, '\t');

		if (filename == null) {
			const d = new Date();

			const year = d.getFullYear().toString().padStart(4, '0');
			const month = (d.getMonth() + 1).toString().padStart(2, '0');
			const day = d.getDate().toString().padStart(2, '0');
			const hours = d.getHours().toString().padStart(2, '0');
			const minutes = d.getMinutes().toString().padStart(2, '0');
			const seconds = d.getSeconds().toString().padStart(2, '0');

			filename = `test-${year}-${month}-${day}-${hours}${minutes}${seconds}.json`;
		}

		const filepath = path.join(process.cwd(), filename);

		try	{
			fs.writeFileSync(filepath, content);

			console.log(`tests outcome wrote in ${filename}.`);
		} catch (ex) {
			console.log('writing tests outcome failed.\n' + ex);
		}
	}
}

export default TestRunner;
export {
	Test,
	Expect,
	expect
}
