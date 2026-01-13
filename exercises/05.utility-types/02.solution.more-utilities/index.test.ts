import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('Record type creates object with string keys', () => {
	type Config = Record<string, number>
	const config: Config = { timeout: 5000, retries: 3 }
	expect(config.timeout).toBe(5000)
	expect(config.retries).toBe(3)
})

await testStep('Readonly type makes properties readonly', () => {
	type User = {
		id: string
		name: string
		email: string
	}

	type ReadonlyUser = Readonly<User>
	const readonlyUser: ReadonlyUser = { id: '1', name: 'Alice', email: 'a@b.com' }
	expect(readonlyUser.name).toBe('Alice')
})

await testStep('Omit type removes specified properties', () => {
	type User = {
		id: string
		name: string
		email: string
	}

	type UserWithoutId = Omit<User, 'id'>
	const newUser: UserWithoutId = { name: 'Bob', email: 'b@b.com' }
	expect(newUser.name).toBe('Bob')
	expect(newUser.email).toBe('b@b.com')
})

await testStep('Required type makes optional properties required', () => {
	type User = {
		id: string
		name: string
		email: string
		bio?: string
		website?: string
	}

	type RequiredUser = Required<User>
	const fullUser: RequiredUser = {
		id: '1',
		name: 'Alice',
		email: 'a@b.com',
		bio: 'Hello!',
		website: 'https://alice.dev',
	}
	expect(fullUser.bio).toBe('Hello!')
	expect(fullUser.website).toBe('https://alice.dev')
})

await testStep('NonNullable removes null and undefined from union types', () => {
	type Status = 'pending' | 'active' | 'inactive' | 'deleted' | null | undefined
	type ValidStatus = NonNullable<Status>
	const status: ValidStatus = 'active'
	expect(status).toBe('active')
})

await testStep('Exclude removes specific types from union', () => {
	type Status = 'pending' | 'active' | 'inactive' | 'deleted' | null | undefined
	type ActiveStatus = Exclude<Status, 'deleted' | null | undefined>
	const activeStatus: ActiveStatus = 'pending'
	expect(activeStatus).toBe('pending')
})
