import { isArray, isFunction, isObject, isPrimitive, equals } from '@locustjs/base';
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
	}
	toBeGt(value) {
		if (this.value <= value) {
			throw new Exception({ message: `${this.value} is lower than or equal to ${value}`, code: 1001, status: 'lte' })
		}
	}
	toBeGte(value) {
		if (this.value < value) {
			throw new Exception({ message: `${this.value} is lower than to ${value}`, code: 1002, status: 'lt' })
		}
	}
	toBeLt(value) {
		if (this.value >= value) {
			throw new Exception({ message: `${this.value} is greater than or equal to ${value}`, code: 1003, status: 'gte' })
		}
	}
	toBeLte(value) {
		if (this.value > value) {
			throw new Exception({ message: `${this.value} is greater than ${value}`, code: 1004, status: 'gt' })
		}
	}
	notToBe(value) {
		if (this.value === value) {
			throw new Exception({ message: `${value} is equal to ${this.value}`, code: 1005, status: 'eq' })
		}
	}
	toBeDefined() {
		if (this.value === undefined) {
			throw new Exception({ message: `value is undefined`, code: 1006, status: 'undefined' })
		}
	}
	toBeUndefined() {
		if (this.value !== undefined) {
			throw new Exception({ message: `value is defined`, code: 1007, status: 'defined' })
		}
	}
	toBeNull() {
		if (this.value !== null) {
			throw new Exception({ message: `value is not null`, code: 1008, status: 'not-null' })
		}
	}
	notToBeNull() {
		if (this.value === null) {
			throw new Exception({ message: `value is null`, code: 1009, status: 'null' })
		}
	}
	toBeNullOrUndefined() {
		if (this.value == null) {
		} else {
			throw new Exception({ message: `value is not null/undefined`, code: 1010, status: 'not-null-or-undefined' })
		}
	}
	notToBeNullOrUndefined() {
		if (this.value == null) {
			throw new Exception({ message: `value is null/undefined`, code: 1011, status: 'null-or-undefined' })
		}
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
	}
	toBeTruthy() {
		if (this.value) {
		} else {
			throw new Exception({ message: `${this.value} is not truthy`, code: 1015, status: 'not-truthy' })
		}
	}
	toBeFalsy() {
		if (!this.value) {
		} else {
			throw new Exception({ message: `${this.value} is not falsy`, code: 1016, status: 'not-falsy' })
		}
	}
	toBeNaN() {
		if (isNaN(this.value)) {
		} else {
			throw new Exception({ message: `${this.value} is not NaN`, code: 1017, status: 'not-nan' })
		}
	}
	notToBeNaN() {
		if (!isNaN(this.value)) {
		} else {
			throw new Exception({ message: `${this.value} is NaN`, code: 1023, status: 'is-nan' })
		}
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
