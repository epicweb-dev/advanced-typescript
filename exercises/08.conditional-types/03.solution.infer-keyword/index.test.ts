import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('logResult is exported', () => {
	assert.ok(
		'logResult' in solution,
		'🚨 Make sure you export "logResult" - add: export { logResult }',
	)
})

await test('logResult wrapper preserves function types', () => {
	function add(a: number, b: number): number {
		return a + b
	}

	const result = solution.logResult(add, 5, 3)
	assert.strictEqual(
		result,
		8,
		'🚨 result should be 8 - combine MyParameters<T> and MyReturnType<T> to preserve function types',
	)
	assert.strictEqual(
		typeof result,
		'number',
		'🚨 typeof result should be "number" - infer keyword extracts types from function signatures',
	)
})
