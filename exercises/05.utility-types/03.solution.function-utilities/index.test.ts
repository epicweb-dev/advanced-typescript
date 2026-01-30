import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('loggedCreateUser is exported', () => {
	assert.ok(
		'loggedCreateUser' in solution,
		'🚨 Make sure you export "loggedCreateUser" - add: export { loggedCreateUser }',
	)
})

await test('ReturnType extracts return type from function', () => {
	const user = solution.loggedCreateUser('Alice', 'alice@example.com', 30)
	assert.ok(
		'id' in user,
		'🚨 user should have an id property - use ReturnType<typeof createUser> to extract return type',
	)
	assert.ok(
		'name' in user,
		'🚨 user should have a name property - ReturnType extracts the function return type',
	)
	assert.ok(
		'email' in user,
		'🚨 user should have an email property - ReturnType works with typeof',
	)
	assert.ok(
		'age' in user,
		'🚨 user should have an age property - ReturnType extracts all return properties',
	)
	assert.ok(
		'createdAt' in user,
		'🚨 user should have a createdAt property - ReturnType preserves the full return type',
	)
	assert.strictEqual(
		user.name,
		'Alice',
		'🚨 user.name should be "Alice" - ReturnType extracts the exact return type',
	)
})

await test('Parameters extracts parameter types from function', () => {
	const user = solution.loggedCreateUser('Alice', 'alice@example.com', 30)
	assert.strictEqual(
		user.name,
		'Alice',
		'🚨 user.name should be "Alice" - use Parameters<typeof createUser> to extract parameter types',
	)
	assert.strictEqual(
		user.email,
		'alice@example.com',
		'🚨 user.email should be "alice@example.com" - Parameters extracts function parameter types as tuple',
	)
	assert.strictEqual(
		user.age,
		30,
		'🚨 user.age should be 30 - Parameters preserves parameter order and types',
	)
})
