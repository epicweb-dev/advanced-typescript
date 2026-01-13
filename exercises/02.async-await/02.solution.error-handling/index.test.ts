import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('fetchUser can resolve successfully', async () => {
	type User = {
		id: string
		name: string
		email: string
	}

	function fetchUser(): Promise<User> {
		return new Promise((resolve, reject) => {
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
		'🚨 user should have an id property - make sure you await the Promise',
	).toHaveProperty('id')
	expect(
		user,
		'🚨 user should have a name property - make sure you await the Promise',
	).toHaveProperty('name')
	expect(
		user,
		'🚨 user should have an email property - make sure you await the Promise',
	).toHaveProperty('email')
	expect(
		user.id,
		'🚨 user.id should be "1" - check your Promise resolve value',
	).toBe('1')
	expect(
		user.name,
		'🚨 user.name should be "Alice" - check your Promise resolve value',
	).toBe('Alice')
	expect(
		user.email,
		'🚨 user.email should be "alice@example.com" - check your Promise resolve value',
	).toBe('alice@example.com')
})

await testStep('fetchUser can reject with an error', async () => {
	type User = {
		id: string
		name: string
		email: string
	}

	function fetchUser(): Promise<User> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				reject(new Error('Failed to fetch user'))
			}, 1000)
		})
	}

	await expect(
		fetchUser(),
		'🚨 fetchUser should reject with "Failed to fetch user" - use reject() in your Promise',
	).rejects.toThrow('Failed to fetch user')
})

await testStep('loadUserData handles errors with try-catch', async () => {
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
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				reject(new Error('Failed to fetch user'))
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
		try {
			const user = await fetchUser()
			const orders = await fetchOrders(user.id)
			return { user, orders }
		} catch (error) {
			return { error: (error as Error).message }
		}
	}

	const result = await loadUserData()
	expect(
		result,
		'🚨 result should have an error property - use try/catch to handle Promise rejection',
	).toHaveProperty('error')
	expect(
		(result as { error: string }).error,
		'🚨 result.error should be "Failed to fetch user" - catch the error and return it',
	).toBe('Failed to fetch user')
})
