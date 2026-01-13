import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('Record type creates object with string keys', () => {
	type Config = Record<string, number>
	const config: Config = { timeout: 5000, retries: 3 }
	assert.strictEqual(
		config.timeout,
		5000,
		'🚨 config.timeout should be 5000 - use Record<string, number> for object with string keys',
	)
	assert.strictEqual(
		config.retries,
		3,
		'🚨 config.retries should be 3 - use Record<string, number> for object with string keys',
	)
})

await test('Readonly type makes properties readonly', () => {
	type User = {
		id: string
		name: string
		email: string
	}

	type ReadonlyUser = Readonly<User>
	const readonlyUser: ReadonlyUser = {
		id: '1',
		name: 'Alice',
		email: 'a@b.com',
	}
	assert.strictEqual(
		readonlyUser.name,
		'Alice',
		'🚨 readonlyUser.name should be "Alice" - use Readonly<User> to make all properties readonly',
	)
})

await test('Omit type removes specified properties', () => {
	type User = {
		id: string
		name: string
		email: string
	}

	type UserWithoutId = Omit<User, 'id'>
	const newUser: UserWithoutId = { name: 'Bob', email: 'b@b.com' }
	assert.strictEqual(
		newUser.name,
		'Bob',
		'🚨 newUser.name should be "Bob" - use Omit<User, "id"> to remove the id property',
	)
	assert.strictEqual(
		newUser.email,
		'b@b.com',
		'🚨 newUser.email should be "b@b.com" - Omit removes specified properties',
	)
})

await test('Required type makes optional properties required', () => {
	type User = {
		id: string
		name: string
		email: string
		bio?: string
		website?: string
	}

	type RequiredUser = Required<User>
	const fullUser: RequiredUser = {
		id: '1',
		name: 'Alice',
		email: 'a@b.com',
		bio: 'Hello!',
		website: 'https://alice.dev',
	}
	assert.strictEqual(
		fullUser.bio,
		'Hello!',
		'🚨 fullUser.bio should be "Hello!" - use Required<User> to make optional properties required',
	)
	assert.strictEqual(
		fullUser.website,
		'https://alice.dev',
		'🚨 fullUser.website should be "https://alice.dev" - Required makes all properties mandatory',
	)
})

await test('NonNullable removes null and undefined from union types', () => {
	type Status = 'pending' | 'active' | 'inactive' | 'deleted' | null | undefined
	type ValidStatus = NonNullable<Status>
	const status: ValidStatus = 'active'
	assert.strictEqual(
		status,
		'active',
		'🚨 status should be "active" - use NonNullable<Status> to remove null and undefined',
	)
})

await test('Exclude removes specific types from union', () => {
	type Status = 'pending' | 'active' | 'inactive' | 'deleted' | null | undefined
	type ActiveStatus = Exclude<Status, 'deleted' | null | undefined>
	const activeStatus: ActiveStatus = 'pending'
	assert.strictEqual(
		activeStatus,
		'pending',
		'🚨 activeStatus should be "pending" - use Exclude<Status, "deleted" | null | undefined> to remove specific types',
	)
})
