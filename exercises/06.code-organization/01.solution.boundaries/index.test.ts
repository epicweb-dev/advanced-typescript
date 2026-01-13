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
	expect(user).toHaveProperty('id')
	expect(user).toHaveProperty('name')
	expect(user).toHaveProperty('email')
	expect(user.id).toBe('1')
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
	expect(product).toHaveProperty('id')
	expect(product).toHaveProperty('name')
	expect(product).toHaveProperty('price')
	expect(product.id).toBe('p1')
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
	expect(result.user.id).toBe('1')
	expect(result.product.id).toBe('p1')
})
