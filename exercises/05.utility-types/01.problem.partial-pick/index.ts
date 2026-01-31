// Partial and Pick

type User = {
	id: string
	name: string
	email: string
	role: 'admin' | 'user'
	createdAt: Date
}

// 🐨 Create a type PartialUser where all User properties are optional

// 🐨 Create a type UserNameEmail that includes only name and email

// 🐨 Create a type UserUpdate that allows optional updates to name and email only

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
// console.log(updated1)

// This should work - updating email
const updated2 = updateUser(user, { email: 'alice.smith@example.com' })
// console.log(updated2)

// This should work - updating both
const updated3 = updateUser(user, {
	name: 'Alice Smith',
	email: 'alice.smith@example.com',
})
// console.log(updated3)

// This should NOT work - id is not in UserUpdate
// const updated4 = updateUser(user, { id: '2' })

// 🐨 Export your function so we can verify your work

// export { updateUser }
