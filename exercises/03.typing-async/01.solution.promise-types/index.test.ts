import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('fetchUser returns a Promise that resolves to a User', async () => {
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
	expect(user).toHaveProperty('id')
	expect(user).toHaveProperty('name')
	expect(user).toHaveProperty('email')
	expect(user.id).toBe('1')
	expect(user.name).toBe('Alice')
	expect(user.email).toBe('alice@example.com')
})

await testStep('fetchProducts returns a Promise that resolves to an array of Products', async () => {
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
	expect(Array.isArray(products)).toBe(true)
	expect(products.length).toBeGreaterThan(0)
	expect(products[0]).toHaveProperty('id')
	expect(products[0]).toHaveProperty('name')
	expect(products[0]).toHaveProperty('price')
})

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
	expect(result.user.id).toBe('1')
	expect(result.products.length).toBeGreaterThan(0)
})
