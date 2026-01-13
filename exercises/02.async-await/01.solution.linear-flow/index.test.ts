import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('fetchUser resolves to a User object', async () => {
	type User = {
		id: string
		name: string
		email: string
	}

	function fetchUser(): Promise<User> {
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

await testStep('fetchOrders resolves to an array of Order objects', async () => {
	type Order = {
		id: string
		userId: string
		items: string[]
		total: number
	}

	function fetchOrders(userId: string): Promise<Order[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve([
					{
						id: 'o1',
						userId,
						items: ['Laptop', 'Mouse'],
						total: 1299.99,
					},
				])
			}, 500)
		})
	}

	const orders = await fetchOrders('1')
	expect(Array.isArray(orders)).toBe(true)
	expect(orders.length).toBeGreaterThan(0)
	expect(orders[0]).toHaveProperty('id')
	expect(orders[0]).toHaveProperty('userId')
	expect(orders[0]).toHaveProperty('items')
	expect(orders[0]).toHaveProperty('total')
})

await testStep('loadUserData function loads user and orders sequentially', async () => {
	type User = {
		id: string
		name: string
		email: string
	}

	type Order = {
		id: string
		userId: string
		items: string[]
		total: number
	}

	function fetchUser(): Promise<User> {
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

	function fetchOrders(userId: string): Promise<Order[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve([
					{
						id: 'o1',
						userId,
						items: ['Laptop', 'Mouse'],
						total: 1299.99,
					},
				])
			}, 500)
		})
	}

	async function loadUserData() {
		const user = await fetchUser()
		const orders = await fetchOrders(user.id)
		return { user, orders }
	}

	const result = await loadUserData()
	expect(result.user.id).toBe('1')
	expect(result.orders[0].userId).toBe(result.user.id)
})
