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
	expect(
		partial.name,
		'🚨 partial.name should be "Alice" - use mapped type [K in keyof T]?: T[K] to make properties optional',
	).toBe('Alice')
	expect(
		partial.id,
		'🚨 partial.id should be undefined - the ? modifier makes all properties optional',
	).toBeUndefined()
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
	expect(
		required.id,
		'🚨 required.id should be "1" - use [K in keyof T]-?: T[K] to remove optional modifier',
	).toBe('1')
	expect(
		required.name,
		'🚨 required.name should be "Alice" - the -? modifier removes optionality',
	).toBe('Alice')
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
	expect(
		nullable.id,
		'🚨 nullable.id should be null - use [K in keyof T]: T[K] | null to make all properties nullable',
	).toBeNull()
	expect(
		nullable.name,
		'🚨 nullable.name should be "Bob" - mapped types can transform property types',
	).toBe('Bob')
	expect(
		nullable.email,
		'🚨 nullable.email should be null - union with null makes properties nullable',
	).toBeNull()
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
	expect(
		mutable.name,
		'🚨 mutable.name should be "Updated" - use -readonly modifier to remove readonly',
	).toBe('Updated')
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
	expect(
		stringUser.age,
		'🚨 stringUser.age should be "30" - use [K in keyof T]: string to convert all properties to string',
	).toBe('30')
	expect(
		typeof stringUser.age,
		'🚨 typeof stringUser.age should be "string" - mapped types can transform all property types',
	).toBe('string')
})
