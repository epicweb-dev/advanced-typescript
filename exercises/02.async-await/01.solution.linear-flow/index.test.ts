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
	expect(user, '🚨 user should have an id property - make sure you await the async function').toHaveProperty('id')
	expect(user, '🚨 user should have a name property - make sure you await the async function').toHaveProperty('name')
	expect(user, '🚨 user should have an email property - make sure you await the async function').toHaveProperty('email')
	expect(user.id, '🚨 user.id should be "1" - check your async function return value').toBe('1')
	expect(user.name, '🚨 user.name should be "Alice" - check your async function return value').toBe('Alice')
	expect(user.email, '🚨 user.email should be "alice@example.com" - check your async function return value').toBe('alice@example.com')
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
	expect(Array.isArray(orders), '🚨 orders should be an array - make sure you await the async function').toBe(true)
	expect(orders.length, '🚨 orders should have at least one item - check your async function return value').toBeGreaterThan(0)
	expect(orders[0], '🚨 orders[0] should have an id property - check your async function return value').toHaveProperty('id')
	expect(orders[0], '🚨 orders[0] should have a userId property - check your async function return value').toHaveProperty('userId')
	expect(orders[0], '🚨 orders[0] should have an items property - check your async function return value').toHaveProperty('items')
	expect(orders[0], '🚨 orders[0] should have a total property - check your async function return value').toHaveProperty('total')
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
	expect(result.user.id, '🚨 result.user.id should be "1" - use await to get user data sequentially').toBe('1')
	expect(result.orders[0].userId, '🚨 result.orders[0].userId should match result.user.id - await fetchOrders after fetchUser').toBe(result.user.id)
})
