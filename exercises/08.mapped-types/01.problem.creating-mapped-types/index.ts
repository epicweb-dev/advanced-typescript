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

// 🐨 Create MyPartial<T> - makes all properties optional
// type MyPartial<T> = { [K in keyof T]?: T[K] }

// 🐨 Create MyRequired<T> - makes all properties required (removes ?)
// 💰 Use -? to remove the optional modifier

// 🐨 Create Nullable<T> - makes all properties T[K] | null
// type Nullable<T> = { [K in keyof T]: T[K] | null }

// 🐨 Create Mutable<T> - removes readonly from all properties
// 💰 Use -readonly

// 🐨 Create Stringify<T> - converts all property types to string
// type Stringify<T> = { [K in keyof T]: string }

// Test your types
// type PartialUser = MyPartial<User>
// type RequiredUser = MyRequired<PartialUser>
// type NullableUser = Nullable<User>
// type MutableUser = Mutable<ReadonlyUser>
// type StringUser = Stringify<User>

// const partial: PartialUser = { name: 'Alice' }  // Other props optional
// const nullable: NullableUser = { id: null, name: 'Bob', email: null, age: null }

// 🦺 This line ensures TypeScript treats this as a module
export {}
