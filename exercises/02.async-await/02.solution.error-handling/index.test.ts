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
	expect(user).toHaveProperty('id')
	expect(user).toHaveProperty('name')
	expect(user).toHaveProperty('email')
	expect(user.id).toBe('1')
	expect(user.name).toBe('Alice')
	expect(user.email).toBe('alice@example.com')
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

	await expect(fetchUser()).rejects.toThrow('Failed to fetch user')
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
	expect(result).toHaveProperty('error')
	expect((result as { error: string }).error).toBe('Failed to fetch user')
})
