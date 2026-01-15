import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('ReturnType extracts return type from function', () => {
	function createUser(name: string, email: string, age: number) {
		return { id: crypto.randomUUID(), name, email, age, createdAt: new Date() }
	}

	type NewUser = ReturnType<typeof createUser>
	const user: NewUser = createUser('Alice', 'alice@example.com', 30)
	assert.ok(
		'id' in user,
		'🚨 user should have an id property - use ReturnType<typeof createUser> to extract return type',
	)
	assert.ok(
		'name' in user,
		'🚨 user should have a name property - ReturnType extracts the function return type',
	)
	assert.ok(
		'email' in user,
		'🚨 user should have an email property - ReturnType works with typeof',
	)
	assert.ok(
		'age' in user,
		'🚨 user should have an age property - ReturnType extracts all return properties',
	)
	assert.ok(
		'createdAt' in user,
		'🚨 user should have a createdAt property - ReturnType preserves the full return type',
	)
	assert.strictEqual(
		user.name,
		'Alice',
		'🚨 user.name should be "Alice" - ReturnType extracts the exact return type',
	)
})

await test('Parameters extracts parameter types from function', () => {
	function createUser(name: string, email: string, age: number) {
		return { id: crypto.randomUUID(), name, email, age, createdAt: new Date() }
	}

	type CreateUserParams = Parameters<typeof createUser>
	const params: CreateUserParams = ['Alice', 'alice@example.com', 30]
	const user = createUser(...params)
	assert.strictEqual(
		user.name,
		'Alice',
		'🚨 user.name should be "Alice" - use Parameters<typeof createUser> to extract parameter types',
	)
	assert.strictEqual(
		user.email,
		'alice@example.com',
		'🚨 user.email should be "alice@example.com" - Parameters extracts function parameter types as tuple',
	)
	assert.strictEqual(
		user.age,
		30,
		'🚨 user.age should be 30 - Parameters preserves parameter order and types',
	)
})

await test('Awaited extracts resolved type from Promise', async () => {
	async function fetchUser(id: string): Promise<{ id: string; name: string }> {
		return { id, name: 'Alice' }
	}

	type FetchUserResult = Awaited<ReturnType<typeof fetchUser>>
	const result: FetchUserResult = await fetchUser('1')
	assert.strictEqual(
		result.id,
		'1',
		'🚨 result.id should be "1" - use Awaited<ReturnType<typeof fetchUser>> to extract Promise resolved type',
	)
	assert.strictEqual(
		result.name,
		'Alice',
		'🚨 result.name should be "Alice" - Awaited unwraps Promise types',
	)
})

await test('withLogging wrapper preserves function types', () => {
	function processData(data: string[], options: { limit: number }): number {
		return Math.min(data.length, options.limit)
	}

	function withLogging<T extends (...args: any[]) => any>(
		fn: T,
	): (...args: Parameters<T>) => ReturnType<T> {
		return (...args) => {
			return fn(...args)
		}
	}

	const loggedProcess = withLogging(processData)
	const result = loggedProcess(['a', 'b', 'c', 'd'], { limit: 2 })
	assert.strictEqual(
		result,
		2,
		'🚨 result should be 2 - use Parameters<T> and ReturnType<T> to preserve function types in wrapper',
	)
})
