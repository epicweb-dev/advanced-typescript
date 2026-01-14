// Creating Mapped Types

type User = {
	id: string
	name: string
	email: string
	age: number
}

type ReadonlyUser = {
	readonly id: string
	readonly name: string
	readonly email: string
	readonly age: number
}

type MyPartial<T> = {
	[K in keyof T]?: T[K]
}

type MyRequired<T> = {
	[K in keyof T]-?: T[K]
}

type Nullable<T> = {
	[K in keyof T]: T[K] | null
}

type Mutable<T> = {
	-readonly [K in keyof T]: T[K]
}

type Stringify<T> = {
	[K in keyof T]: string
}

// Test the types
type PartialUser = MyPartial<User>
type RequiredPartialUser = MyRequired<PartialUser>
type NullableUser = Nullable<User>
type MutableUser = Mutable<ReadonlyUser>
type StringUser = Stringify<User>

// Usage examples
const partial: PartialUser = { name: 'Alice' }
const nullable: NullableUser = { id: null, name: 'Bob', email: null, age: 30 }
const mutable: MutableUser = {
	id: '1',
	name: 'Charlie',
	email: 'c@c.com',
	age: 25,
}

console.log('Partial:', partial)
console.log('Nullable:', nullable)
console.log('Mutable:', mutable)

// MutableUser allows reassignment (no readonly)
mutable.name = 'Updated'
console.log('After mutation:', mutable)

// 🦺 This line ensures TypeScript treats this as a module
export {}
