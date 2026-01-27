// Record, Readonly, Omit, Required, Exclude, Extract, NonNullable

type User = {
	id: string
	name: string
	email: string
	bio?: string
	website?: string
}

// 🐨 Create a type Config using Record<string, number>

// 🐨 Create a type ReadonlyUser using Readonly<User>

// 🐨 Create a type UserWithoutId using Omit<User, 'id'>
//    This removes the id property

// 🐨 Create a type RequiredUser using Required<User>
//    This makes bio and website required

// Union type utilities
type Status = 'pending' | 'active' | 'inactive' | 'deleted' | null | undefined

// 🐨 Create a type ActiveStatus that excludes 'deleted' from Status

// 🐨 Create a type ValidStatus that is NonNullable<Status>
//    This removes null and undefined

// 🐨 Create a type StringStatus using Extract to keep only string types

// 🐨 Export your test values so we can verify your work
