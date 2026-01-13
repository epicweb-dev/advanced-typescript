import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('MyPartial makes all properties optional', () => {
	type User = {
		id: string
		name: string
		email: string
		age: number
	}

	type MyPartial<T> = {
		[K in keyof T]?: T[K]
	}

	type PartialUser = MyPartial<User>
	const partial: PartialUser = { name: 'Alice' }
	expect(partial.name).toBe('Alice')
	expect(partial.id).toBeUndefined()
})

await testStep('MyRequired makes all properties required', () => {
	type User = {
		id?: string
		name?: string
		email?: string
		age?: number
	}

	type MyRequired<T> = {
		[K in keyof T]-?: T[K]
	}

	type RequiredUser = MyRequired<User>
	const required: RequiredUser = {
		id: '1',
		name: 'Alice',
		email: 'a@b.com',
		age: 30,
	}
	expect(required.id).toBe('1')
	expect(required.name).toBe('Alice')
})

await testStep('Nullable makes all properties nullable', () => {
	type User = {
		id: string
		name: string
		email: string
		age: number
	}

	type Nullable<T> = {
		[K in keyof T]: T[K] | null
	}

	type NullableUser = Nullable<User>
	const nullable: NullableUser = {
		id: null,
		name: 'Bob',
		email: null,
		age: 30,
	}
	expect(nullable.id).toBeNull()
	expect(nullable.name).toBe('Bob')
	expect(nullable.email).toBeNull()
})

await testStep('Mutable removes readonly modifier', () => {
	type ReadonlyUser = {
		readonly id: string
		readonly name: string
		readonly email: string
		readonly age: number
	}

	type Mutable<T> = {
		-readonly [K in keyof T]: T[K]
	}

	type MutableUser = Mutable<ReadonlyUser>
	const mutable: MutableUser = {
		id: '1',
		name: 'Charlie',
		email: 'c@c.com',
		age: 25,
	}
	mutable.name = 'Updated'
	expect(mutable.name).toBe('Updated')
})

await testStep('Stringify converts all properties to strings', () => {
	type User = {
		id: string
		name: string
		email: string
		age: number
	}

	type Stringify<T> = {
		[K in keyof T]: string
	}

	type StringUser = Stringify<User>
	const stringUser: StringUser = {
		id: '1',
		name: 'Alice',
		email: 'a@b.com',
		age: '30',
	}
	expect(stringUser.age).toBe('30')
	expect(typeof stringUser.age).toBe('string')
})
