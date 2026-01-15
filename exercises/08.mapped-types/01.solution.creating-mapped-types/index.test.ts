import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('partial, nullable, and mutable are exported', () => {
	assert.ok(
		'partial' in solution,
		'🚨 Make sure you export "partial" - add: export { partial, nullable, mutable }',
	)
	assert.ok(
		'nullable' in solution,
		'🚨 Make sure you export "nullable" - add: export { partial, nullable, mutable }',
	)
	assert.ok(
		'mutable' in solution,
		'🚨 Make sure you export "mutable" - add: export { partial, nullable, mutable }',
	)
})

await test('MyPartial makes all properties optional', () => {
	assert.strictEqual(
		solution.partial.name,
		'Alice',
		'🚨 partial.name should be "Alice" - use mapped type [K in keyof T]?: T[K] to make properties optional',
	)
})

await test('Nullable makes all properties nullable', () => {
	assert.strictEqual(
		solution.nullable.id,
		null,
		'🚨 nullable.id should be null - use [K in keyof T]: T[K] | null to make all properties nullable',
	)
	assert.strictEqual(
		solution.nullable.name,
		'Bob',
		'🚨 nullable.name should be "Bob" - mapped types can transform property types',
	)
	assert.strictEqual(
		solution.nullable.email,
		null,
		'🚨 nullable.email should be null - union with null makes properties nullable',
	)
})

await test('Mutable removes readonly modifier', () => {
	solution.mutable.name = 'Updated'
	assert.strictEqual(
		solution.mutable.name,
		'Updated',
		'🚨 mutable.name should be "Updated" - use -readonly modifier to remove readonly',
	)
})
