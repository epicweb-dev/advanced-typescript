// Partial and Pick

type User = {
	id: string
	name: string
	email: string
	role: 'admin' | 'user'
	createdAt: Date
}

type PartialUser = Partial<User>

type UserNameEmail = Pick<User, 'name' | 'email'>

type UserUpdate = Partial<Pick<User, 'name' | 'email'>>

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

export {}
