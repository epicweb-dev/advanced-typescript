import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('MyPartial makes all properties optional', () => {
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
	assert.strictEqual(
		partial.name,
		'Alice',
		'🚨 partial.name should be "Alice" - use mapped type [K in keyof T]?: T[K] to make properties optional',
	)
	assert.strictEqual(
		partial.id,
		undefined,
		'🚨 partial.id should be undefined - the ? modifier makes all properties optional',
	)
})

await test('MyRequired makes all properties required', () => {
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
	assert.strictEqual(
		required.id,
		'1',
		'🚨 required.id should be "1" - use [K in keyof T]-?: T[K] to remove optional modifier',
	)
	assert.strictEqual(
		required.name,
		'Alice',
		'🚨 required.name should be "Alice" - the -? modifier removes optionality',
	)
})

await test('Nullable makes all properties nullable', () => {
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
	assert.strictEqual(
		nullable.id,
		null,
		'🚨 nullable.id should be null - use [K in keyof T]: T[K] | null to make all properties nullable',
	)
	assert.strictEqual(
		nullable.name,
		'Bob',
		'🚨 nullable.name should be "Bob" - mapped types can transform property types',
	)
	assert.strictEqual(
		nullable.email,
		null,
		'🚨 nullable.email should be null - union with null makes properties nullable',
	)
})

await test('Mutable removes readonly modifier', () => {
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
	assert.strictEqual(
		mutable.name,
		'Updated',
		'🚨 mutable.name should be "Updated" - use -readonly modifier to remove readonly',
	)
})

await test('Stringify converts all properties to strings', () => {
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
	assert.strictEqual(
		stringUser.age,
		'30',
		'🚨 stringUser.age should be "30" - use [K in keyof T]: string to convert all properties to string',
	)
	assert.strictEqual(
		typeof stringUser.age,
		'string',
		'🚨 typeof stringUser.age should be "string" - mapped types can transform all property types',
	)
})
