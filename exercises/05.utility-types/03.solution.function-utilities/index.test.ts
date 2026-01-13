import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('ReturnType extracts return type from function', () => {
	function createUser(name: string, email: string, age: number) {
		return { id: crypto.randomUUID(), name, email, age, createdAt: new Date() }
	}

	type NewUser = ReturnType<typeof createUser>
	const user: NewUser = createUser('Alice', 'alice@example.com', 30)
	expect(
		user,
		'🚨 user should have an id property - use ReturnType<typeof createUser> to extract return type',
	).toHaveProperty('id')
	expect(
		user,
		'🚨 user should have a name property - ReturnType extracts the function return type',
	).toHaveProperty('name')
	expect(
		user,
		'🚨 user should have an email property - ReturnType works with typeof',
	).toHaveProperty('email')
	expect(
		user,
		'🚨 user should have an age property - ReturnType extracts all return properties',
	).toHaveProperty('age')
	expect(
		user,
		'🚨 user should have a createdAt property - ReturnType preserves the full return type',
	).toHaveProperty('createdAt')
	expect(
		user.name,
		'🚨 user.name should be "Alice" - ReturnType extracts the exact return type',
	).toBe('Alice')
})

await testStep('Parameters extracts parameter types from function', () => {
	function createUser(name: string, email: string, age: number) {
		return { id: crypto.randomUUID(), name, email, age, createdAt: new Date() }
	}

	type CreateUserParams = Parameters<typeof createUser>
	const params: CreateUserParams = ['Alice', 'alice@example.com', 30]
	const user = createUser(...params)
	expect(
		user.name,
		'🚨 user.name should be "Alice" - use Parameters<typeof createUser> to extract parameter types',
	).toBe('Alice')
	expect(
		user.email,
		'🚨 user.email should be "alice@example.com" - Parameters extracts function parameter types as tuple',
	).toBe('alice@example.com')
	expect(
		user.age,
		'🚨 user.age should be 30 - Parameters preserves parameter order and types',
	).toBe(30)
})

await testStep('Awaited extracts resolved type from Promise', async () => {
	async function fetchUser(id: string): Promise<{ id: string; name: string }> {
		return { id, name: 'Alice' }
	}

	type FetchUserResult = Awaited<ReturnType<typeof fetchUser>>
	const result: FetchUserResult = await fetchUser('1')
	expect(
		result.id,
		'🚨 result.id should be "1" - use Awaited<ReturnType<typeof fetchUser>> to extract Promise resolved type',
	).toBe('1')
	expect(
		result.name,
		'🚨 result.name should be "Alice" - Awaited unwraps Promise types',
	).toBe('Alice')
})

await testStep('withLogging wrapper preserves function types', () => {
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
	expect(
		result,
		'🚨 result should be 2 - use Parameters<T> and ReturnType<T> to preserve function types in wrapper',
	).toBe(2)
})
