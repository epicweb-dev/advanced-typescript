import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('fetchUser can resolve successfully', async () => {
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
	assert.ok(
		'id' in user,
		'🚨 user should have an id property - make sure you await the Promise',
	)
	assert.ok(
		'name' in user,
		'🚨 user should have a name property - make sure you await the Promise',
	)
	assert.ok(
		'email' in user,
		'🚨 user should have an email property - make sure you await the Promise',
	)
	assert.strictEqual(
		user.id,
		'1',
		'🚨 user.id should be "1" - check your Promise resolve value',
	)
	assert.strictEqual(
		user.name,
		'Alice',
		'🚨 user.name should be "Alice" - check your Promise resolve value',
	)
	assert.strictEqual(
		user.email,
		'alice@example.com',
		'🚨 user.email should be "alice@example.com" - check your Promise resolve value',
	)
})

await test('fetchUser can reject with an error', async () => {
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

	await assert.rejects(
		fetchUser(),
		{ message: 'Failed to fetch user' },
		'🚨 fetchUser should reject with "Failed to fetch user" - use reject() in your Promise',
	)
})

await test('loadUserData handles errors with try-catch', async () => {
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
	assert.ok(
		'error' in result,
		'🚨 result should have an error property - use try/catch to handle Promise rejection',
	)
	assert.strictEqual(
		(result as { error: string }).error,
		'Failed to fetch user',
		'🚨 result.error should be "Failed to fetch user" - catch the error and return it',
	)
})
