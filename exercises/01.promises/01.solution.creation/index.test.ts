import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const user = JSON.parse(jsonLine.replace('Results:', '').trim())

await test('fetchUser returns a Promise that resolves to a User object', async () => {
	type User = {
		id: string
		name: string
		email: string
	}

	assert.ok(
		'id' in user,
		'🚨 user should have an id property - check your Promise resolve value',
	)
	assert.ok(
		'name' in user,
		'🚨 user should have a name property - check your Promise resolve value',
	)
	assert.ok(
		'email' in user,
		'🚨 user should have an email property - check your Promise resolve value',
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
