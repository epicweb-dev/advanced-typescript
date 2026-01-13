// keyof and typeof Operators

type User = {
	id: string
	name: string
	email: string
	age: number
}

type UserKey = keyof User // 'id' | 'name' | 'email' | 'age'

function getUserProperty<K extends UserKey>(user: User, key: K): User[K] {
	return user[key]
}

// Using typeof with values
const config = {
	apiUrl: 'https://api.example.com',
	timeout: 5000,
	retries: 3,
}

type Config = typeof config
type ConfigKey = keyof typeof config // 'apiUrl' | 'timeout' | 'retries'

// Using as const for literal types
const httpMethods = ['GET', 'POST', 'PUT', 'DELETE'] as const

type HttpMethod = (typeof httpMethods)[number] // 'GET' | 'POST' | 'PUT' | 'DELETE'

// Test
const user: User = { id: '1', name: 'Alice', email: 'a@b.com', age: 30 }
console.log(getUserProperty(user, 'name')) // 'Alice'
console.log(getUserProperty(user, 'age')) // 30

// TypeScript knows the return types!
const name = getUserProperty(user, 'name') // string
const age = getUserProperty(user, 'age') // number

// HttpMethod is a union of literals, not just string
function makeRequest(method: HttpMethod, url: string) {
	console.log(`${method} ${url}`)
}
makeRequest('GET', '/api/users') // ✅
// makeRequest('PATCH', '/api')  // ❌ Error: 'PATCH' not in HttpMethod

export {}
