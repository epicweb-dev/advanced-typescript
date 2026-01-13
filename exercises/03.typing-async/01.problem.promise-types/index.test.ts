import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('fetchUser returns a Promise that resolves to a User', async () => {
	type User = {
		id: string
		name: string
		email: string
	}

	async function fetchUser(): Promise<User> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({
					id: '1',
					name: 'Alice',
					email: 'alice@example.com',
				})
			}, 10)
		})
	}

	const user = await fetchUser()
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
})

await test('fetchProducts returns a Promise that resolves to an array of Products', async () => {
	type Product = {
		id: string
		name: string
		price: number
	}

	async function fetchProducts(): Promise<Product[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve([
					{ id: 'p1', name: 'Laptop', price: 999.99 },
					{ id: 'p2', name: 'Mouse', price: 29.99 },
				])
			}, 10)
		})
	}

	const products = await fetchProducts()
	assert.strictEqual(
		Array.isArray(products),
		true,
		'🚨 products should be an array - make sure your async function returns Promise<Product[]>',
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
})

await test('loadData function loads both user and products', async () => {
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

	async function fetchUser(): Promise<User> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({
					id: '1',
					name: 'Alice',
					email: 'alice@example.com',
				})
			}, 10)
		})
	}

	async function fetchProducts(): Promise<Product[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve([
					{ id: 'p1', name: 'Laptop', price: 999.99 },
					{ id: 'p2', name: 'Mouse', price: 29.99 },
				])
			}, 10)
		})
	}

	async function loadData() {
		const user = await fetchUser()
		const products = await fetchProducts()
		return { user, products }
	}

	const result = await loadData()
	assert.strictEqual(
		result.user.id,
		'1',
		'🚨 result.user.id should be "1" - make sure loadData returns an object with user and products',
	)
	assert.ok(
		result.products.length > 0,
		'🚨 result.products should have items - make sure loadData returns an object with user and products',
	)
})
