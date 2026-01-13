import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('fetchUser resolves to a User object', async () => {
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
	assert.ok(
		'id' in user,
		'🚨 user should have an id property - make sure you await the async function',
	)
	assert.ok(
		'name' in user,
		'🚨 user should have a name property - make sure you await the async function',
	)
	assert.ok(
		'email' in user,
		'🚨 user should have an email property - make sure you await the async function',
	)
	assert.strictEqual(
		user.id,
		'1',
		'🚨 user.id should be "1" - check your async function return value',
	)
	assert.strictEqual(
		user.name,
		'Alice',
		'🚨 user.name should be "Alice" - check your async function return value',
	)
	assert.strictEqual(
		user.email,
		'alice@example.com',
		'🚨 user.email should be "alice@example.com" - check your async function return value',
	)
})

await test('fetchOrders resolves to an array of Order objects', async () => {
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
	assert.strictEqual(
		Array.isArray(orders),
		true,
		'🚨 orders should be an array - make sure you await the async function',
	)
	assert.ok(
		orders.length > 0,
		'🚨 orders should have at least one item - check your async function return value',
	)
	assert.ok(
		'id' in orders[0],
		'🚨 orders[0] should have an id property - check your async function return value',
	)
	assert.ok(
		'userId' in orders[0],
		'🚨 orders[0] should have a userId property - check your async function return value',
	)
	assert.ok(
		'items' in orders[0],
		'🚨 orders[0] should have an items property - check your async function return value',
	)
	assert.ok(
		'total' in orders[0],
		'🚨 orders[0] should have a total property - check your async function return value',
	)
})

await test('loadUserData function loads user and orders sequentially', async () => {
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
	assert.strictEqual(
		result.user.id,
		'1',
		'🚨 result.user.id should be "1" - use await to get user data sequentially',
	)
	assert.strictEqual(
		result.orders[0].userId,
		result.user.id,
		'🚨 result.orders[0].userId should match result.user.id - await fetchOrders after fetchUser',
	)
})
