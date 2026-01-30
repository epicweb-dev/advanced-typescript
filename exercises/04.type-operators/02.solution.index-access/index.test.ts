import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('profile, post, and user are exported', () => {
	assert.ok(
		'profile' in solution,
		'🚨 Make sure you export "profile" - add: export { profile, post, user }',
	)
	assert.ok(
		'post' in solution,
		'🚨 Make sure you export "post" - add: export { profile, post, user }',
	)
	assert.ok(
		'user' in solution,
		'🚨 Make sure you export "user" - add: export { profile, post, user }',
	)
})

await test('index access types extract nested types correctly', () => {
	assert.strictEqual(
		solution.profile.avatar,
		'https://example.com/avatar.jpg',
		'🚨 profile.avatar should be "https://example.com/avatar.jpg" - use index access types ApiResponse["data"]["user"]["profile"]',
	)
	assert.strictEqual(
		solution.profile.bio,
		'Hello!',
		'🚨 profile.bio should be "Hello!" - index access extracts nested types',
	)
})

await test('index access extracts array element types', () => {
	assert.strictEqual(
		solution.post.id,
		'1',
		'🚨 post.id should be "1" - use [number] to extract array element type',
	)
	assert.strictEqual(
		solution.post.title,
		'Hello World',
		'🚨 post.title should be "Hello World" - index access with [number] gets element type',
	)
	assert.strictEqual(
		solution.post.published,
		true,
		'🚨 post.published should be true - [number] works with Array types',
	)
})

await test('index access with union keys extracts union types', () => {
	type ApiResponse = {
		status: number
		error: string | null
	}

	type StatusOrError = ApiResponse['status' | 'error']
	const status: StatusOrError = 200
	const error: StatusOrError = 'Not found'
	assert.strictEqual(
		status,
		200,
		'🚨 status should be 200 - use union keys in index access to get union of value types',
	)
	assert.strictEqual(
		error,
		'Not found',
		'🚨 error should be "Not found" - union keys extract union of corresponding value types',
	)
})

await test('keyof with index access extracts value types', () => {
	type UserType = {
		id: string
		name: string
		profile: {
			avatar: string
			bio: string
		}
	}

	type UserValues = UserType[keyof UserType]
	const id: UserValues = '1'
	const name: UserValues = 'Alice'
	const profile: UserValues = { avatar: 'url', bio: 'bio' }
	assert.strictEqual(
		id,
		'1',
		'🚨 id should be "1" - use keyof with index access to get union of all value types',
	)
	assert.strictEqual(
		name,
		'Alice',
		'🚨 name should be "Alice" - UserType[keyof UserType] extracts all property value types',
	)
	assert.deepStrictEqual(
		profile,
		{ avatar: 'url', bio: 'bio' },
		'🚨 profile should equal { avatar: "url", bio: "bio" } - keyof with index access creates union of values',
	)
})
