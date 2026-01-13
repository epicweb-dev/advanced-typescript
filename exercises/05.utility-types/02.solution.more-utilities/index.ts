// Record, Readonly, Omit, Required, Exclude, Extract, NonNullable

type User = {
	id: string
	name: string
	email: string
	bio?: string
	website?: string
}

type Config = Record<string, number>

type ReadonlyUser = Readonly<User>

type UserWithoutId = Omit<User, 'id'>

type RequiredUser = Required<User>

// Union type utilities
type Status = 'pending' | 'active' | 'inactive' | 'deleted' | null | undefined

type ActiveStatus = Exclude<Status, 'deleted' | null | undefined>

type ValidStatus = NonNullable<Status>

type StringStatus = Extract<Status, string>

// Test
const config: Config = { timeout: 5000, retries: 3 }
console.log('Config:', config)

const readonlyUser: ReadonlyUser = { id: '1', name: 'Alice', email: 'a@b.com' }
// readonlyUser.name = 'Bob'  // ❌ Error: readonly
console.log('Readonly user:', readonlyUser)

const newUser: UserWithoutId = { name: 'Bob', email: 'b@b.com' }
console.log('New user (no id):', newUser)

const fullUser: RequiredUser = {
	id: '1',
	name: 'Alice',
	email: 'a@b.com',
	bio: 'Hello!', // Required now
	website: 'https://alice.dev', // Required now
}
console.log('Full user:', fullUser)

let status: ValidStatus = 'active'
// status = null  // ❌ Error: NonNullable removes null
console.log('Status:', status)

let activeStatus: ActiveStatus = 'pending'
// activeStatus = 'deleted'  // ❌ Error: Excluded
console.log('Active status:', activeStatus)

export {}
