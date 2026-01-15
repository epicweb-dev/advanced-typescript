// Record, Readonly, Omit, Required, Exclude, Extract, NonNullable

type User = {
	id: string
	name: string
	email: string
	bio?: string
	website?: string
}

// 🐨 Create a type Config using Record<string, number>
// 💰 type Config = Record<string, number>

// 🐨 Create a type ReadonlyUser using Readonly<User>
// 💰 type ReadonlyUser = Readonly<User>

// 🐨 Create a type UserWithoutId using Omit<User, 'id'>
//    This removes the id property
// 💰 type UserWithoutId = Omit<User, 'id'>

// 🐨 Create a type RequiredUser using Required<User>
//    This makes bio and website required
// 💰 type RequiredUser = Required<User>

// Union type utilities
type Status = 'pending' | 'active' | 'inactive' | 'deleted' | null | undefined

// 🐨 Create a type ActiveStatus that excludes 'deleted' from Status
// 💰 type ActiveStatus = Exclude<Status, 'deleted' | null | undefined>

// 🐨 Create a type ValidStatus that is NonNullable<Status>
//    This removes null and undefined
// 💰 type ValidStatus = NonNullable<Status>

// 🐨 Create a type StringStatus using Extract to keep only string types
// 💰 type StringStatus = Extract<Status, string>

// 🐨 Export your test values so we can verify your work
// 💰 export { config, readonlyUser, newUser, fullUser, status, activeStatus }
