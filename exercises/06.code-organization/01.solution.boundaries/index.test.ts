import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('fetchUser returns a User object', async () => {
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
	expect(user, '🚨 user should have an id property - import fetchUser from the users module').toHaveProperty('id')
	expect(user, '🚨 user should have a name property - check your module exports').toHaveProperty('name')
	expect(user, '🚨 user should have an email property - organize code with module boundaries').toHaveProperty('email')
	expect(user.id, '🚨 user.id should be "1" - use proper import/export statements').toBe('1')
})

await testStep('fetchProduct returns a Product object', async () => {
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
	expect(product, '🚨 product should have an id property - import fetchProduct from the products module').toHaveProperty('id')
	expect(product, '🚨 product should have a name property - check your module exports').toHaveProperty('name')
	expect(product, '🚨 product should have a price property - organize code with module boundaries').toHaveProperty('price')
	expect(product.id, '🚨 product.id should be "p1" - use proper import/export statements').toBe('p1')
})

await testStep('loadData loads both user and product', async () => {
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
	expect(result.user.id, '🚨 result.user.id should be "1" - import from users and products modules correctly').toBe('1')
	expect(result.product.id, '🚨 result.product.id should be "p1" - organize code with proper module boundaries').toBe('p1')
})
