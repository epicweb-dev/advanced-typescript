import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('Flatten extracts element type from arrays', () => {
	type Flatten<T> = T extends Array<infer U> ? U : T

	function process<T>(value: T): Flatten<T> {
		if (Array.isArray(value)) {
			return value[0]
		}
		return value as Flatten<T>
	}

	const arr = process([1, 2, 3])
	assert.strictEqual(
		arr,
		1,
		'🚨 arr should be 1 - use conditional type T extends Array<infer U> ? U : T to extract element type',
	)
	assert.strictEqual(
		typeof arr,
		'number',
		'🚨 typeof arr should be "number" - conditional types check if T extends Array',
	)

	const num = process(42)
	assert.strictEqual(
		num,
		42,
		'🚨 num should be 42 - conditional type returns T when it does not extend Array',
	)
	assert.strictEqual(
		typeof num,
		'number',
		'🚨 typeof num should be "number" - conditional types preserve non-array types',
	)
})

await test('MyNonNullable removes null and undefined', () => {
	type MyNonNullable<T> = T extends null | undefined ? never : T

	function filterNonNull<T>(value: T): MyNonNullable<T> {
		if (value === null || value === undefined) {
			throw new Error('Value cannot be null or undefined')
		}
		return value as MyNonNullable<T>
	}

	const result = filterNonNull('hello')
	assert.strictEqual(
		result,
		'hello',
		'🚨 result should be "hello" - use conditional type T extends null | undefined ? never : T to remove null/undefined',
	)

	const numResult = filterNonNull(42)
	assert.strictEqual(
		numResult,
		42,
		'🚨 numResult should be 42 - conditional types exclude null and undefined',
	)
})

await test('process function handles arrays and non-arrays', () => {
	type Flatten<T> = T extends Array<infer U> ? U : T

	function process<T>(value: T): Flatten<T> {
		if (Array.isArray(value)) {
			return value[0]
		}
		return value as Flatten<T>
	}

	const stringArray = process(['a', 'b', 'c'])
	assert.strictEqual(
		stringArray,
		'a',
		'🚨 stringArray should be "a" - conditional type extracts element type from arrays',
	)

	const numberValue = process(100)
	assert.strictEqual(
		numberValue,
		100,
		'🚨 numberValue should be 100 - conditional type preserves non-array types',
	)
})
