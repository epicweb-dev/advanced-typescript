import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('updateUser function updates user with partial data', () => {
	type User = {
		id: string
		name: string
		email: string
		role: 'admin' | 'user'
		createdAt: Date
	}

	type UserUpdate = Partial<Pick<User, 'name' | 'email'>>

	function updateUser(user: User, updates: UserUpdate) {
		return { ...user, ...updates }
	}

	const user: User = {
		id: '1',
		name: 'Alice',
		email: 'alice@example.com',
		role: 'user',
		createdAt: new Date(),
	}

	const updated1 = updateUser(user, { name: 'Alice Smith' })
	expect(updated1.name).toBe('Alice Smith')
	expect(updated1.email).toBe('alice@example.com')
	expect(updated1.id).toBe('1')

	const updated2 = updateUser(user, { email: 'alice.smith@example.com' })
	expect(updated2.email).toBe('alice.smith@example.com')
	expect(updated2.name).toBe('Alice')

	const updated3 = updateUser(user, {
		name: 'Alice Smith',
		email: 'alice.smith@example.com',
	})
	expect(updated3.name).toBe('Alice Smith')
	expect(updated3.email).toBe('alice.smith@example.com')
})
