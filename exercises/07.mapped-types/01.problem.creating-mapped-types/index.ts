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

// 🐨 Create MyRequired<T> - makes all properties required (removes ?)

// 🐨 Create Nullable<T> - makes all properties T[K] | null

// 🐨 Create Mutable<T> - removes readonly from all properties

// 🐨 Create Stringify<T> - converts all property types to string

// Test your types
// type PartialUser = MyPartial<User>
// type RequiredUser = MyRequired<PartialUser>
// type NullableUser = Nullable<User>
// type MutableUser = Mutable<ReadonlyUser>
// type StringUser = Stringify<User>

// 🐨 Export your test values so we can verify your work

// export { partial, nullable, mutable }
