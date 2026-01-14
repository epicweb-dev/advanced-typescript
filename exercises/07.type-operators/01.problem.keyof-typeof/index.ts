// keyof and typeof Operators

type User = {
	id: string
	name: string
	email: string
	age: number
}

// 🐨 Create a type `UserKey` that is the union of User's keys
// 💰 type UserKey = keyof User

// 🐨 Create a function `getUserProperty` that:
// - Takes a user and a key (constrained to UserKey)
// - Returns the value at that key
// 💰 function getUserProperty(user: User, key: UserKey): User[UserKey]

// Using typeof with values
const config = {
	apiUrl: 'https://api.example.com',
	timeout: 5000,
	retries: 3,
}

// 🐨 Create a type `Config` from the config object using typeof
// 💰 type Config = typeof config

// 🐨 Create a type `ConfigKey` from Config's keys
// 💰 type ConfigKey = keyof typeof config

// Using as const for literal types
// 🐨 Add `as const` to preserve literal types
const httpMethods = ['GET', 'POST', 'PUT', 'DELETE']

// 🐨 Create a type `HttpMethod` from the array
// 💰 type HttpMethod = (typeof httpMethods)[number]

// Test
// const user: User = { id: '1', name: 'Alice', email: 'a@b.com', age: 30 }
// console.log(getUserProperty(user, 'name'))

// 🦺 This line ensures TypeScript treats this as a module
export {}
