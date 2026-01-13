// Record and Readonly

type User = {
	id: string
	name: string
	email: string
}

// 🐨 Create a type Config using Record<string, number>
//    This creates an object type with string keys and number values
// 💰 type Config = Record<string, number>

// 🐨 Create a type ReadonlyUser using Readonly<User>
//    This makes all properties readonly
// 💰 type ReadonlyUser = Readonly<User>

// 🐨 Create a function that accepts a ReadonlyUser
//    The function should log the user's name
// 💰 function displayUser(user: ReadonlyUser) { ... }

const config: Config = {
	timeout: 5000,
	retries: 3,
	maxConnections: 10,
}

const user: ReadonlyUser = {
	id: '1',
	name: 'Alice',
	email: 'alice@example.com',
}

// This should NOT work - user is readonly
// user.name = 'Bob'

displayUser(user)

console.log('Config:', config)

export {}
