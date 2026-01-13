import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('getUserProperty returns correct property values', () => {
	type User = {
		id: string
		name: string
		email: string
		age: number
	}

	function getUserProperty<K extends keyof User>(user: User, key: K): User[K] {
		return user[key]
	}

	const user: User = { id: '1', name: 'Alice', email: 'a@b.com', age: 30 }
	expect(getUserProperty(user, 'name')).toBe('Alice')
	expect(getUserProperty(user, 'age')).toBe(30)
	expect(getUserProperty(user, 'id')).toBe('1')
	expect(getUserProperty(user, 'email')).toBe('a@b.com')
})

await testStep('typeof extracts type from value', () => {
	const config = {
		apiUrl: 'https://api.example.com',
		timeout: 5000,
		retries: 3,
	}

	type Config = typeof config
	const typedConfig: Config = {
		apiUrl: 'https://api.example.com',
		timeout: 5000,
		retries: 3,
	}
	expect(typedConfig.apiUrl).toBe('https://api.example.com')
	expect(typedConfig.timeout).toBe(5000)
})

await testStep('as const creates literal union types', () => {
	const httpMethods = ['GET', 'POST', 'PUT', 'DELETE'] as const
	type HttpMethod = (typeof httpMethods)[number]

	function makeRequest(method: HttpMethod, url: string) {
		return `${method} ${url}`
	}

	expect(makeRequest('GET', '/api/users')).toBe('GET /api/users')
	expect(makeRequest('POST', '/api/users')).toBe('POST /api/users')
	expect(makeRequest('PUT', '/api/users')).toBe('PUT /api/users')
	expect(makeRequest('DELETE', '/api/users')).toBe('DELETE /api/users')
})
