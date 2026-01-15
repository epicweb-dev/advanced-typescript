import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'
import { fetchProduct } from './products/index.ts'
import { fetchUser } from './users/index.ts'

await test('loadData is exported', () => {
	assert.ok(
		'loadData' in solution,
		'🚨 Make sure you export "loadData" - add: export { loadData }',
	)
})

await test('fetchUser returns a User object', { timeout: 5000 }, async () => {
	const user = await fetchUser('1')
	assert.ok(
		'id' in user,
		'🚨 user should have an id property - import fetchUser from the users module',
	)
	assert.ok(
		'name' in user,
		'🚨 user should have a name property - check your module exports',
	)
	assert.ok(
		'email' in user,
		'🚨 user should have an email property - organize code with module boundaries',
	)
	assert.strictEqual(
		user.id,
		'1',
		'🚨 user.id should be "1" - use proper import/export statements',
	)
})

await test(
	'fetchProduct returns a Product object',
	{ timeout: 5000 },
	async () => {
		const product = await fetchProduct('p1')
		assert.ok(
			'id' in product,
			'🚨 product should have an id property - import fetchProduct from the products module',
		)
		assert.ok(
			'name' in product,
			'🚨 product should have a name property - check your module exports',
		)
		assert.ok(
			'price' in product,
			'🚨 product should have a price property - organize code with module boundaries',
		)
		assert.strictEqual(
			product.id,
			'p1',
			'🚨 product.id should be "p1" - use proper import/export statements',
		)
	},
)

await test(
	'loadData loads both user and product',
	{ timeout: 5000 },
	async () => {
		const result = await solution.loadData()
		assert.strictEqual(
			result.user.id,
			'1',
			'🚨 result.user.id should be "1" - import from users and products modules correctly',
		)
		assert.strictEqual(
			result.product.id,
			'p1',
			'🚨 result.product.id should be "p1" - organize code with proper module boundaries',
		)
	},
)
