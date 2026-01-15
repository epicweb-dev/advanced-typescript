import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('updateUser function updates user with partial data', () => {
	type User = {
		id: string
		name: string
		email: string
		role: 'admin' | 'user'
		createdAt: Date
	}

	type UserUpdate = Partial<Pick<User, 'name' | 'email'>>

	function updateUser(user: User, updates: UserUpdate) {
		return { ...user, ...updates }
	}

	const user: User = {
		id: '1',
		name: 'Alice',
		email: 'alice@example.com',
		role: 'user',
		createdAt: new Date(),
	}

	const updated1 = updateUser(user, { name: 'Alice Smith' })
	assert.strictEqual(
		updated1.name,
		'Alice Smith',
		'🚨 updated1.name should be "Alice Smith" - use Partial<Pick<User, "name" | "email">> for updates',
	)
	assert.strictEqual(
		updated1.email,
		'alice@example.com',
		'🚨 updated1.email should remain "alice@example.com" - Partial makes properties optional',
	)
	assert.strictEqual(
		updated1.id,
		'1',
		'🚨 updated1.id should remain "1" - only name and email can be updated',
	)

	const updated2 = updateUser(user, { email: 'alice.smith@example.com' })
	assert.strictEqual(
		updated2.email,
		'alice.smith@example.com',
		'🚨 updated2.email should be "alice.smith@example.com" - use Partial<Pick<User, "name" | "email">>',
	)
	assert.strictEqual(
		updated2.name,
		'Alice',
		'🚨 updated2.name should remain "Alice" - Partial makes properties optional',
	)

	const updated3 = updateUser(user, {
		name: 'Alice Smith',
		email: 'alice.smith@example.com',
	})
	assert.strictEqual(
		updated3.name,
		'Alice Smith',
		'🚨 updated3.name should be "Alice Smith" - Partial allows updating multiple properties',
	)
	assert.strictEqual(
		updated3.email,
		'alice.smith@example.com',
		'🚨 updated3.email should be "alice.smith@example.com" - Partial allows updating multiple properties',
	)
})
