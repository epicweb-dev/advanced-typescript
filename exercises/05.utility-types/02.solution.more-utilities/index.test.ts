import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('config, readonlyUser, newUser, fullUser, status, and activeStatus are exported', () => {
	assert.ok(
		'config' in solution,
		'🚨 Make sure you export "config" - add: export { config, readonlyUser, newUser, fullUser, status, activeStatus }',
	)
	assert.ok(
		'readonlyUser' in solution,
		'🚨 Make sure you export "readonlyUser" - add: export { config, readonlyUser, newUser, fullUser, status, activeStatus }',
	)
	assert.ok(
		'newUser' in solution,
		'🚨 Make sure you export "newUser" - add: export { config, readonlyUser, newUser, fullUser, status, activeStatus }',
	)
	assert.ok(
		'fullUser' in solution,
		'🚨 Make sure you export "fullUser" - add: export { config, readonlyUser, newUser, fullUser, status, activeStatus }',
	)
	assert.ok(
		'status' in solution,
		'🚨 Make sure you export "status" - add: export { config, readonlyUser, newUser, fullUser, status, activeStatus }',
	)
	assert.ok(
		'activeStatus' in solution,
		'🚨 Make sure you export "activeStatus" - add: export { config, readonlyUser, newUser, fullUser, status, activeStatus }',
	)
})

await test('Record type creates object with string keys', () => {
	assert.strictEqual(
		solution.config.timeout,
		5000,
		'🚨 config.timeout should be 5000 - use Record<string, number> for object with string keys',
	)
	assert.strictEqual(
		solution.config.retries,
		3,
		'🚨 config.retries should be 3 - use Record<string, number> for object with string keys',
	)
})

await test('Readonly type makes properties readonly', () => {
	assert.strictEqual(
		solution.readonlyUser.name,
		'Alice',
		'🚨 readonlyUser.name should be "Alice" - use Readonly<User> to make all properties readonly',
	)
})

await test('Omit type removes specified properties', () => {
	assert.strictEqual(
		solution.newUser.name,
		'Bob',
		'🚨 newUser.name should be "Bob" - use Omit<User, "id"> to remove the id property',
	)
	assert.strictEqual(
		solution.newUser.email,
		'b@b.com',
		'🚨 newUser.email should be "b@b.com" - Omit removes specified properties',
	)
})

await test('Required type makes optional properties required', () => {
	assert.strictEqual(
		solution.fullUser.bio,
		'Hello!',
		'🚨 fullUser.bio should be "Hello!" - use Required<User> to make optional properties required',
	)
	assert.strictEqual(
		solution.fullUser.website,
		'https://alice.dev',
		'🚨 fullUser.website should be "https://alice.dev" - Required makes all properties mandatory',
	)
})

await test('NonNullable removes null and undefined from union types', () => {
	assert.strictEqual(
		solution.status,
		'active',
		'🚨 status should be "active" - use NonNullable<Status> to remove null and undefined',
	)
})

await test('Exclude removes specific types from union', () => {
	assert.strictEqual(
		solution.activeStatus,
		'pending',
		'🚨 activeStatus should be "pending" - use Exclude<Status, "deleted" | null | undefined> to remove specific types',
	)
})
