// Record, Readonly, Omit, Required, Exclude, Extract, NonNullable

type User = {
	id: string
	name: string
	email: string
	bio?: string
	website?: string
}

// 🐨 Create a type Config using Record<string, number>
// 💰 Use Record with string keys and number values

// 🐨 Create a type ReadonlyUser using Readonly<User>
// 💰 Use Readonly to prevent mutation

// 🐨 Create a type UserWithoutId using Omit<User, 'id'>
//    This removes the id property
// 💰 Use Omit to remove the id field

// 🐨 Create a type RequiredUser using Required<User>
//    This makes bio and website required
// 💰 Use Required to make optional fields required

// Union type utilities
type Status = 'pending' | 'active' | 'inactive' | 'deleted' | null | undefined

// 🐨 Create a type ActiveStatus that excludes 'deleted' from Status
// 💰 Use Exclude to remove unwanted union members

// 🐨 Create a type ValidStatus that is NonNullable<Status>
//    This removes null and undefined
// 💰 Use NonNullable to remove null and undefined

// 🐨 Create a type StringStatus using Extract to keep only string types
// 💰 Use Extract to keep only string members

// 🐨 Export your test values so we can verify your work
// 💰 Export the test values you created
