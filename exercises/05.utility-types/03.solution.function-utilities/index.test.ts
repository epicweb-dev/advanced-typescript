import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('ReturnType extracts return type from function', () => {
	function createUser(name: string, email: string, age: number) {
		return { id: crypto.randomUUID(), name, email, age, createdAt: new Date() }
	}

	type NewUser = ReturnType<typeof createUser>
	const user: NewUser = createUser('Alice', 'alice@example.com', 30)
	expect(user).toHaveProperty('id')
	expect(user).toHaveProperty('name')
	expect(user).toHaveProperty('email')
	expect(user).toHaveProperty('age')
	expect(user).toHaveProperty('createdAt')
	expect(user.name).toBe('Alice')
})

await testStep('Parameters extracts parameter types from function', () => {
	function createUser(name: string, email: string, age: number) {
		return { id: crypto.randomUUID(), name, email, age, createdAt: new Date() }
	}

	type CreateUserParams = Parameters<typeof createUser>
	const params: CreateUserParams = ['Alice', 'alice@example.com', 30]
	const user = createUser(...params)
	expect(user.name).toBe('Alice')
	expect(user.email).toBe('alice@example.com')
	expect(user.age).toBe(30)
})

await testStep('Awaited extracts resolved type from Promise', async () => {
	async function fetchUser(id: string): Promise<{ id: string; name: string }> {
		return { id, name: 'Alice' }
	}

	type FetchUserResult = Awaited<ReturnType<typeof fetchUser>>
	const result: FetchUserResult = await fetchUser('1')
	expect(result.id).toBe('1')
	expect(result.name).toBe('Alice')
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
	expect(result).toBe(2)
})
