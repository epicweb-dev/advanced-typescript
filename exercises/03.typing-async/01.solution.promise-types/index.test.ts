import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep(
	'fetchUser returns a Promise that resolves to a User',
	async () => {
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
				}, 1000)
			})
		}

		const user = await fetchUser()
		expect(
			user,
			'🚨 user should have an id property - make sure your async function returns Promise<User>',
		).toHaveProperty('id')
		expect(
			user,
			'🚨 user should have a name property - make sure your async function returns Promise<User>',
		).toHaveProperty('name')
		expect(
			user,
			'🚨 user should have an email property - make sure your async function returns Promise<User>',
		).toHaveProperty('email')
		expect(
			user.id,
			'🚨 user.id should be "1" - check your Promise return type',
		).toBe('1')
		expect(
			user.name,
			'🚨 user.name should be "Alice" - check your Promise return type',
		).toBe('Alice')
		expect(
			user.email,
			'🚨 user.email should be "alice@example.com" - check your Promise return type',
		).toBe('alice@example.com')
	},
)

await testStep(
	'fetchProducts returns a Promise that resolves to an array of Products',
	async () => {
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
				}, 500)
			})
		}

		const products = await fetchProducts()
		expect(
			Array.isArray(products),
			'🚨 products should be an array - make sure your async function returns Promise<Product[]>',
		).toBe(true)
		expect(
			products.length,
			'🚨 products should have at least one item - check your Promise return type',
		).toBeGreaterThan(0)
		expect(
			products[0],
			'🚨 products[0] should have an id property - check your Promise return type',
		).toHaveProperty('id')
		expect(
			products[0],
			'🚨 products[0] should have a name property - check your Promise return type',
		).toHaveProperty('name')
		expect(
			products[0],
			'🚨 products[0] should have a price property - check your Promise return type',
		).toHaveProperty('price')
	},
)

await testStep('loadData function loads both user and products', async () => {
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
			}, 1000)
		})
	}

	async function fetchProducts(): Promise<Product[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve([
					{ id: 'p1', name: 'Laptop', price: 999.99 },
					{ id: 'p2', name: 'Mouse', price: 29.99 },
				])
			}, 500)
		})
	}

	async function loadData() {
		const user = await fetchUser()
		const products = await fetchProducts()
		return { user, products }
	}

	const result = await loadData()
	expect(
		result.user.id,
		'🚨 result.user.id should be "1" - make sure loadData returns an object with user and products',
	).toBe('1')
	expect(
		result.products.length,
		'🚨 result.products should have items - make sure loadData returns an object with user and products',
	).toBeGreaterThan(0)
})
