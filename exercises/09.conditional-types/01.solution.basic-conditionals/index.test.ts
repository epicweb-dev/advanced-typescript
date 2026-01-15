import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('process is exported', () => {
	assert.ok(
		'process' in solution,
		'🚨 Make sure you export "process" - add: export { process }',
	)
})

await test('Flatten extracts element type from arrays', () => {
	const arr = solution.process([1, 2, 3])
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

	const num = solution.process(42)
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

await test('process function handles arrays and non-arrays', () => {
	const stringArray = solution.process(['a', 'b', 'c'])
	assert.strictEqual(
		stringArray,
		'a',
		'🚨 stringArray should be "a" - conditional type extracts element type from arrays',
	)

	const numberValue = solution.process(100)
	assert.strictEqual(
		numberValue,
		100,
		'🚨 numberValue should be 100 - conditional type preserves non-array types',
	)
})
