import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { user, orders, errorMessage } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('fetchUser can resolve successfully', async () => {
	assert.ok(
		'id' in user,
		'🚨 user should have an id property - make sure you await the Promise',
	)
	assert.ok(
		'name' in user,
		'🚨 user should have a name property - make sure you await the Promise',
	)
	assert.ok(
		'email' in user,
		'🚨 user should have an email property - make sure you await the Promise',
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

await test('fetchUser can reject with an error', async () => {
	assert.strictEqual(
		errorMessage,
		'Failed to fetch user',
		'🚨 fetchUser should reject with "Failed to fetch user" - use reject() in your Promise',
	)
})

await test('loadUserData handles errors with try-catch', async () => {
	assert.ok(
		orders[0].userId === user.id,
		'🚨 result should have an error property - use try/catch to handle Promise rejection',
	)
	assert.strictEqual(
		errorMessage,
		'Failed to fetch user',
		'🚨 result.error should be "Failed to fetch user" - catch the error and return it',
	)
})
