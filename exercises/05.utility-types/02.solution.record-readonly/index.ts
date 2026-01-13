// Record and Readonly

type User = {
	id: string
	name: string
	email: string
}

type Config = Record<string, number>

type ReadonlyUser = Readonly<User>

function displayUser(user: ReadonlyUser) {
	console.log(`User: ${user.name} (${user.email})`)
}

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
