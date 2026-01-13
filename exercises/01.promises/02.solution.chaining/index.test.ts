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
	expect(user, '🚨 user should have an id property - make sure fetchUser resolves correctly').toHaveProperty('id')
	expect(user, '🚨 user should have a name property - make sure fetchUser resolves correctly').toHaveProperty('name')
	expect(user, '🚨 user should have an email property - make sure fetchUser resolves correctly').toHaveProperty('email')
	expect(user.id, '🚨 user.id should be "1" - check your Promise resolve value').toBe('1')
	expect(user.name, '🚨 user.name should be "Alice" - check your Promise resolve value').toBe('Alice')
	expect(user.email, '🚨 user.email should be "alice@example.com" - check your Promise resolve value').toBe('alice@example.com')
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
	expect(Array.isArray(orders), '🚨 orders should be an array - make sure fetchOrders returns an array').toBe(true)
	expect(orders.length, '🚨 orders should have at least one item - check your Promise resolve value').toBeGreaterThan(0)
	expect(orders[0], '🚨 orders[0] should have an id property - check your Promise resolve value').toHaveProperty('id')
	expect(orders[0], '🚨 orders[0] should have a userId property - check your Promise resolve value').toHaveProperty('userId')
	expect(orders[0], '🚨 orders[0] should have an items property - check your Promise resolve value').toHaveProperty('items')
	expect(orders[0], '🚨 orders[0] should have a total property - check your Promise resolve value').toHaveProperty('total')
	expect(orders[0].userId, '🚨 orders[0].userId should be "1" - make sure you use the userId parameter').toBe('1')
})

await testStep('promise chaining works correctly', async () => {
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

	const user = await fetchUser()
	const orders = await fetchOrders(user.id)

	expect(user.id, '🚨 user.id should be "1" - make sure you await fetchUser() first').toBe('1')
	expect(orders[0].userId, '🚨 orders[0].userId should match user.id - chain promises correctly using .then() or await').toBe(user.id)
})
