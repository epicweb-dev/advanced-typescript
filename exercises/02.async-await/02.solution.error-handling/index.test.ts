import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('loadUserData is exported', () => {
	assert.ok(
		'loadUserData' in solution,
		'🚨 Make sure you export "loadUserData" - add: export { loadUserData }',
	)
})

await test(
	'loadUserData handles successful fetch',
	{ timeout: 5000 },
	async () => {
		// Since fetchUser has random failures, we'll test multiple times
		// to ensure it can succeed
		let success = false
		for (let i = 0; i < 10; i++) {
			try {
				await solution.loadUserData()
				success = true
				break
			} catch {
				// Continue trying
			}
		}
		assert.ok(
			success,
			'🚨 loadUserData should succeed sometimes - make sure you await the Promise',
		)
	},
)

await test(
	'loadUserData handles errors with try-catch',
	{ timeout: 5000 },
	async () => {
		// Test that the function doesn't throw unhandled errors
		// Since fetchUser has random failures, the function should handle them internally
		// and never propagate errors to the caller
		let errorPropagated = false
		for (let i = 0; i < 10; i++) {
			try {
				await solution.loadUserData()
			} catch {
				errorPropagated = true
				break
			}
		}
		// The function should handle all errors internally, never throwing
		assert.ok(
			!errorPropagated,
			'🚨 loadUserData should catch errors internally with try/catch - errors should not propagate',
		)
	},
)
