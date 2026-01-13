import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('Flatten extracts element type from arrays', () => {
	type Flatten<T> = T extends Array<infer U> ? U : T

	function process<T>(value: T): Flatten<T> {
		if (Array.isArray(value)) {
			return value[0]
		}
		return value as Flatten<T>
	}

	const arr = process([1, 2, 3])
	expect(
		arr,
		'🚨 arr should be 1 - use conditional type T extends Array<infer U> ? U : T to extract element type',
	).toBe(1)
	expect(
		typeof arr,
		'🚨 typeof arr should be "number" - conditional types check if T extends Array',
	).toBe('number')

	const num = process(42)
	expect(
		num,
		'🚨 num should be 42 - conditional type returns T when it does not extend Array',
	).toBe(42)
	expect(
		typeof num,
		'🚨 typeof num should be "number" - conditional types preserve non-array types',
	).toBe('number')
})

await testStep('MyNonNullable removes null and undefined', () => {
	type MyNonNullable<T> = T extends null | undefined ? never : T

	function filterNonNull<T>(value: T): MyNonNullable<T> {
		if (value === null || value === undefined) {
			throw new Error('Value cannot be null or undefined')
		}
		return value as MyNonNullable<T>
	}

	const result = filterNonNull('hello')
	expect(
		result,
		'🚨 result should be "hello" - use conditional type T extends null | undefined ? never : T to remove null/undefined',
	).toBe('hello')

	const numResult = filterNonNull(42)
	expect(
		numResult,
		'🚨 numResult should be 42 - conditional types exclude null and undefined',
	).toBe(42)
})

await testStep('process function handles arrays and non-arrays', () => {
	type Flatten<T> = T extends Array<infer U> ? U : T

	function process<T>(value: T): Flatten<T> {
		if (Array.isArray(value)) {
			return value[0]
		}
		return value as Flatten<T>
	}

	const stringArray = process(['a', 'b', 'c'])
	expect(
		stringArray,
		'🚨 stringArray should be "a" - conditional type extracts element type from arrays',
	).toBe('a')

	const numberValue = process(100)
	expect(
		numberValue,
		'🚨 numberValue should be 100 - conditional type preserves non-array types',
	).toBe(100)
})
