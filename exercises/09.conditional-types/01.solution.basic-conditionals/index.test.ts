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
	expect(arr).toBe(1)
	expect(typeof arr).toBe('number')

	const num = process(42)
	expect(num).toBe(42)
	expect(typeof num).toBe('number')
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
	expect(result).toBe('hello')

	const numResult = filterNonNull(42)
	expect(numResult).toBe(42)
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
	expect(stringArray).toBe('a')

	const numberValue = process(100)
	expect(numberValue).toBe(100)
})
