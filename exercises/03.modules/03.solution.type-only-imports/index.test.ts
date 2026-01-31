import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('displayUser and displayProduct are exported', () => {
	assert.ok(
		'displayUser' in solution,
		'🚨 Make sure you export "displayUser" - add: export { displayUser, displayProduct }',
	)
	assert.ok(
		'displayProduct' in solution,
		'🚨 Make sure you export "displayProduct" - add: export { displayUser, displayProduct }',
	)
})
