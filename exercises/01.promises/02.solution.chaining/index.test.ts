import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('fetchUserAndOrders is exported', () => {
	assert.ok(
		'fetchUserAndOrders' in solution,
		'🚨 Make sure you export "fetchUserAndOrders" - add: export { fetchUserAndOrders }',
	)
})

await test('promise chaining works correctly', { timeout: 5000 }, async () => {
	const result = await solution.fetchUserAndOrders()

	assert.ok(
		'user' in result,
		'🚨 fetchUserAndOrders should return a user property',
	)
	assert.ok(
		'orders' in result,
		'🚨 fetchUserAndOrders should return an orders property',
	)
	assert.strictEqual(
		result.user.id,
		'1',
		'🚨 user.id should be "1" - make sure you await fetchUser() first',
	)
	assert.strictEqual(
		result.orders[0].userId,
		result.user.id,
		'🚨 orders[0].userId should match user.id - chain promises correctly using .then() or await',
	)
})
