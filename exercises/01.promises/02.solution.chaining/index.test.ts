import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const { user, orders } = JSON.parse(
	jsonLine.replace('Results JSON:', '').trim(),
)

await test('fetchUser resolves to a User object', async () => {
	assert.ok(
		'id' in user,
		'🚨 user should have an id property - make sure fetchUser resolves correctly',
	)
	assert.ok(
		'name' in user,
		'🚨 user should have a name property - make sure fetchUser resolves correctly',
	)
	assert.ok(
		'email' in user,
		'🚨 user should have an email property - make sure fetchUser resolves correctly',
	)
	assert.strictEqual(
		user.id,
		'1',
		'🚨 user.id should be "1" - check your Promise resolve value',
	)
	assert.strictEqual(
		user.name,
		'Alice',
		'🚨 user.name should be "Alice" - check your Promise resolve value',
	)
	assert.strictEqual(
		user.email,
		'alice@example.com',
		'🚨 user.email should be "alice@example.com" - check your Promise resolve value',
	)
})

await test('fetchOrders resolves to an array of Order objects', async () => {
	assert.strictEqual(
		Array.isArray(orders),
		true,
		'🚨 orders should be an array - make sure fetchOrders returns an array',
	)
	assert.ok(
		orders.length > 0,
		'🚨 orders should have at least one item - check your Promise resolve value',
	)
	assert.ok(
		'id' in orders[0],
		'🚨 orders[0] should have an id property - check your Promise resolve value',
	)
	assert.ok(
		'userId' in orders[0],
		'🚨 orders[0] should have a userId property - check your Promise resolve value',
	)
	assert.ok(
		'items' in orders[0],
		'🚨 orders[0] should have an items property - check your Promise resolve value',
	)
	assert.ok(
		'total' in orders[0],
		'🚨 orders[0] should have a total property - check your Promise resolve value',
	)
	assert.strictEqual(
		orders[0].userId,
		'1',
		'🚨 orders[0].userId should be "1" - make sure you use the userId parameter',
	)
})

await test('promise chaining works correctly', async () => {
	assert.strictEqual(
		user.id,
		'1',
		'🚨 user.id should be "1" - make sure you await fetchUser() first',
	)
	assert.strictEqual(
		orders[0].userId,
		user.id,
		'🚨 orders[0].userId should match user.id - chain promises correctly using .then() or await',
	)
})
