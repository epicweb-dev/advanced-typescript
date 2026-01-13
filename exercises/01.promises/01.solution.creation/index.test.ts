import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('fetchUser returns a Promise that resolves to a User object', async () => {
	type User = {
		id: string
		name: string
		email: string
	}

	function fetchUser(): Promise<User> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({
					id: '1',
					name: 'Alice',
					email: 'alice@example.com',
				})
			}, 10)
		})
	}

	const userPromise = fetchUser()
	assert.ok(
		userPromise instanceof Promise,
		'🚨 fetchUser should return a Promise - use new Promise()',
	)

	const user = await userPromise
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
