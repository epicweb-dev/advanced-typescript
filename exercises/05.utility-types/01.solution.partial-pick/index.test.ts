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
	expect(
		updated1.name,
		'🚨 updated1.name should be "Alice Smith" - use Partial<Pick<User, "name" | "email">> for updates',
	).toBe('Alice Smith')
	expect(
		updated1.email,
		'🚨 updated1.email should remain "alice@example.com" - Partial makes properties optional',
	).toBe('alice@example.com')
	expect(
		updated1.id,
		'🚨 updated1.id should remain "1" - only name and email can be updated',
	).toBe('1')

	const updated2 = updateUser(user, { email: 'alice.smith@example.com' })
	expect(
		updated2.email,
		'🚨 updated2.email should be "alice.smith@example.com" - use Partial<Pick<User, "name" | "email">>',
	).toBe('alice.smith@example.com')
	expect(
		updated2.name,
		'🚨 updated2.name should remain "Alice" - Partial makes properties optional',
	).toBe('Alice')

	const updated3 = updateUser(user, {
		name: 'Alice Smith',
		email: 'alice.smith@example.com',
	})
	expect(
		updated3.name,
		'🚨 updated3.name should be "Alice Smith" - Partial allows updating multiple properties',
	).toBe('Alice Smith')
	expect(
		updated3.email,
		'🚨 updated3.email should be "alice.smith@example.com" - Partial allows updating multiple properties',
	).toBe('alice.smith@example.com')
})
