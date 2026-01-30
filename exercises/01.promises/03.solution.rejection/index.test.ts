import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('fetchUser and getUserProfile are exported', () => {
	assert.ok(
		'fetchUser' in solution,
		'🚨 Make sure you export "fetchUser" - add: export { fetchUser, getUserProfile }',
	)
	assert.ok(
		'getUserProfile' in solution,
		'🚨 Make sure you export "getUserProfile" - add: export { fetchUser, getUserProfile }',
	)
})

await test(
	'fetchUser resolves to a User object',
	{ timeout: 5000 },
	async () => {
		const user = await solution.fetchUser('1')

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
	},
)

await test(
	'fetchUser rejects when id is unknown',
	{ timeout: 5000 },
	async () => {
		await assert.rejects(
			solution.fetchUser('missing'),
			{ message: 'User not found' },
			'🚨 fetchUser("missing") should reject with "User not found"',
		)
	},
)

await test(
	'getUserProfile returns success when fetchUser resolves',
	{ timeout: 5000 },
	async () => {
		const result = await solution.getUserProfile('1')

		assert.strictEqual(
			result.status,
			'success',
			'🚨 getUserProfile() should return status "success" when fetchUser resolves',
		)
		if (result.status === 'success') {
			assert.strictEqual(
				result.user.id,
				'1',
				'🚨 success result should include the user from fetchUser()',
			)
		}
	},
)

await test(
	'getUserProfile returns error when fetchUser rejects',
	{ timeout: 5000 },
	async () => {
		const result = await solution.getUserProfile('missing')

		assert.strictEqual(
			result.status,
			'error',
			'🚨 getUserProfile("missing") should return status "error" when fetchUser rejects',
		)
		if (result.status === 'error') {
			assert.strictEqual(
				result.message,
				'User not found',
				'🚨 error result should include the rejection message',
			)
		}
	},
)
