// Partial and Pick

type User = {
	id: string
	name: string
	email: string
	role: 'admin' | 'user'
	createdAt: Date
}

// 🐨 Create a type PartialUser using Partial<User>
//    This makes all properties optional
// 💰 type PartialUser = Partial<User>

// 🐨 Create a type UserNameEmail using Pick<User, 'name' | 'email'>
//    This selects only name and email properties
// 💰 type UserNameEmail = Pick<User, 'name' | 'email'>

// 🐨 Create a type UserUpdate that combines Partial and Pick
//    It should allow updating only name and email, and both should be optional
// 💰 type UserUpdate = Partial<Pick<User, 'name' | 'email'>>

// @ts-expect-error - 💣 remove this comment
function updateUser(user: User, updates: UserUpdate) {
	return { ...user, ...updates }
}

const user: User = {
	id: '1',
	name: 'Alice',
	email: 'alice@example.com',
	role: 'user',
	createdAt: new Date(),
}

// This should work - updating name
const updated1 = updateUser(user, { name: 'Alice Smith' })

// This should work - updating email
const updated2 = updateUser(user, { email: 'alice.smith@example.com' })

// This should work - updating both
const updated3 = updateUser(user, {
	name: 'Alice Smith',
	email: 'alice.smith@example.com',
})

// This should NOT work - id is not in UserUpdate
// const updated4 = updateUser(user, { id: '2' })

console.log(updated1, updated2, updated3)

// 🦺 This line ensures TypeScript treats this as a module
export {}
