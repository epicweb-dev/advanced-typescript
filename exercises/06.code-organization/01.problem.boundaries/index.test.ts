import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('fetchUser returns a User object', async () => {
	type User = {
		id: string
		name: string
		email: string
	}

	async function fetchUser(id: string): Promise<User> {
		return {
			id,
			name: 'Alice',
			email: 'alice@example.com',
		}
	}

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

await test('fetchProduct returns a Product object', async () => {
	type Product = {
		id: string
		name: string
		price: number
	}

	async function fetchProduct(id: string): Promise<Product> {
		return {
			id,
			name: 'Laptop',
			price: 999.99,
		}
	}

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
})

await test('loadData loads both user and product', async () => {
	type User = {
		id: string
		name: string
		email: string
	}

	type Product = {
		id: string
		name: string
		price: number
	}

	async function fetchUser(id: string): Promise<User> {
		return {
			id,
			name: 'Alice',
			email: 'alice@example.com',
		}
	}

	async function fetchProduct(id: string): Promise<Product> {
		return {
			id,
			name: 'Laptop',
			price: 999.99,
		}
	}

	async function loadData() {
		const user = await fetchUser('1')
		const product = await fetchProduct('p1')
		return { user, product }
	}

	const result = await loadData()
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
})
