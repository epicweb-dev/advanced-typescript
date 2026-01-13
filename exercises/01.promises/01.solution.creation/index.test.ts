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
	expect(userPromise).toBeInstanceOf(Promise)

	const user = await userPromise
	expect(user).toHaveProperty('id')
	expect(user).toHaveProperty('name')
	expect(user).toHaveProperty('email')
	expect(user.id).toBe('1')
	expect(user.name).toBe('Alice')
	expect(user.email).toBe('alice@example.com')
})
