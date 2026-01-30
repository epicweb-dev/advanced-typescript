import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('fetchUser is exported', () => {
	assert.ok(
		'fetchUser' in solution,
		'🚨 Make sure you export "fetchUser" - add: export { fetchUser }',
	)
})

await test('fetchUser returns correct result', async () => {
	const result = await solution.fetchUser()
	assert.ok(
		'id' in result,
		'🚨 result should have an id property - use PromiseResult to extract Promise resolved type',
	)
	assert.ok(
		'name' in result,
		'🚨 result should have a name property - infer keyword extracts types from Promise',
	)
	assert.strictEqual(
		result.id,
		'1',
		'🚨 result.id should be "1" - PromiseResult extracts the resolved type',
	)
	assert.strictEqual(
		result.name,
		'Alice',
		'🚨 result.name should be "Alice" - infer U captures the Promise type parameter',
	)
})
