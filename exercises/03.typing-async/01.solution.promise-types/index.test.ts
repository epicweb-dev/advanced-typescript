import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('fetchUser, fetchProducts, and loadData are exported', () => {
	assert.ok(
		'fetchUser' in solution,
		'🚨 Make sure you export "fetchUser" - add: export { fetchUser, fetchProducts, loadData }',
	)
	assert.ok(
		'fetchProducts' in solution,
		'🚨 Make sure you export "fetchProducts" - add: export { fetchUser, fetchProducts, loadData }',
	)
	assert.ok(
		'loadData' in solution,
		'🚨 Make sure you export "loadData" - add: export { fetchUser, fetchProducts, loadData }',
	)
})

await test(
	'fetchUser returns a Promise that resolves to a User',
	{ timeout: 5000 },
	async () => {
		const user = await solution.fetchUser()

		assert.ok(
			'id' in user,
			'🚨 user should have an id property - make sure your async function returns Promise<User>',
		)
		assert.ok(
			'name' in user,
			'🚨 user should have a name property - make sure your async function returns Promise<User>',
		)
		assert.ok(
			'email' in user,
			'🚨 user should have an email property - make sure your async function returns Promise<User>',
		)
		assert.strictEqual(
			user.id,
			'1',
			'🚨 user.id should be "1" - check your Promise return type',
		)
		assert.strictEqual(
			user.name,
			'Alice',
			'🚨 user.name should be "Alice" - check your Promise return type',
		)
		assert.strictEqual(
			user.email,
			'alice@example.com',
			'🚨 user.email should be "alice@example.com" - check your Promise return type',
		)
	},
)

await test(
	'fetchProducts returns a Promise that resolves to an array of Products',
	{ timeout: 5000 },
	async () => {
		const products = await solution.fetchProducts()

		assert.strictEqual(
			Array.isArray(products),
			true,
			'🚨 products should be an array - make sure your async function returns Promise<Array<Product>>',
		)
		assert.ok(
			products.length > 0,
			'🚨 products should have at least one item - check your Promise return type',
		)
		assert.ok(
			'id' in products[0],
			'🚨 products[0] should have an id property - check your Promise return type',
		)
		assert.ok(
			'name' in products[0],
			'🚨 products[0] should have a name property - check your Promise return type',
		)
		assert.ok(
			'price' in products[0],
			'🚨 products[0] should have a price property - check your Promise return type',
		)
	},
)

await test(
	'loadData function loads both user and products',
	{ timeout: 5000 },
	async () => {
		const result = await solution.loadData()
		const { user, products } = result

		assert.strictEqual(
			user.id,
			'1',
			'🚨 result.user.id should be "1" - make sure loadData returns an object with user and products',
		)
		assert.ok(
			products.length > 0,
			'🚨 result.products should have items - make sure loadData returns an object with user and products',
		)
	},
)
