import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('fetchUser returns a Promise that resolves to a User object', async () => {
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

	const userPromise = fetchUser()
	expect(userPromise, '🚨 fetchUser should return a Promise - use new Promise()').toBeInstanceOf(Promise)

	const user = await userPromise
	expect(user, '🚨 user should have an id property - check your Promise resolve value').toHaveProperty('id')
	expect(user, '🚨 user should have a name property - check your Promise resolve value').toHaveProperty('name')
	expect(user, '🚨 user should have an email property - check your Promise resolve value').toHaveProperty('email')
	expect(user.id, '🚨 user.id should be "1" - check your Promise resolve value').toBe('1')
	expect(user.name, '🚨 user.name should be "Alice" - check your Promise resolve value').toBe('Alice')
	expect(user.email, '🚨 user.email should be "alice@example.com" - check your Promise resolve value').toBe('alice@example.com')
})
