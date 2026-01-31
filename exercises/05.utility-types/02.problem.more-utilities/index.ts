// Record, Readonly, Omit, Required, Exclude, Extract, NonNullable

type User = {
	id: string
	name: string
	email: string
	bio?: string
	website?: string
}

// 🐨 Create a type Config with string keys and number values

// 🐨 Create a type ReadonlyUser where all User properties are readonly

// 🐨 Create a type UserWithoutId that removes the id property

// 🐨 Create a type RequiredUser where bio and website are required

// Union type utilities
type Status = 'pending' | 'active' | 'inactive' | 'deleted' | null | undefined

// 🐨 Create a type ActiveStatus that excludes 'deleted' from Status

// 🐨 Create a type ValidStatus that removes null and undefined

// 🐨 Create a type StringStatus that keeps only string variants

// 🐨 Export your test values so we can verify your work

// export { config, readonlyUser, newUser, fullUser, status, activeStatus }
