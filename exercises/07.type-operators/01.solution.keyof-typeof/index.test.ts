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
	expect(
		getUserProperty(user, 'name'),
		'🚨 getUserProperty(user, "name") should be "Alice" - use keyof User to constrain key parameter',
	).toBe('Alice')
	expect(
		getUserProperty(user, 'age'),
		'🚨 getUserProperty(user, "age") should be 30 - keyof extracts all property keys',
	).toBe(30)
	expect(
		getUserProperty(user, 'id'),
		'🚨 getUserProperty(user, "id") should be "1" - use User[K] for return type',
	).toBe('1')
	expect(
		getUserProperty(user, 'email'),
		'🚨 getUserProperty(user, "email") should be "a@b.com" - keyof ensures type-safe property access',
	).toBe('a@b.com')
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
	expect(
		typedConfig.apiUrl,
		'🚨 typedConfig.apiUrl should be "https://api.example.com" - use typeof to extract type from value',
	).toBe('https://api.example.com')
	expect(
		typedConfig.timeout,
		'🚨 typedConfig.timeout should be 5000 - typeof preserves the exact value types',
	).toBe(5000)
})

await testStep('as const creates literal union types', () => {
	const httpMethods = ['GET', 'POST', 'PUT', 'DELETE'] as const
	type HttpMethod = (typeof httpMethods)[number]

	function makeRequest(method: HttpMethod, url: string) {
		return `${method} ${url}`
	}

	expect(
		makeRequest('GET', '/api/users'),
		'🚨 makeRequest("GET", "/api/users") should be "GET /api/users" - use "as const" and typeof to create literal union types',
	).toBe('GET /api/users')
	expect(
		makeRequest('POST', '/api/users'),
		'🚨 makeRequest("POST", "/api/users") should be "POST /api/users" - as const creates readonly tuple',
	).toBe('POST /api/users')
	expect(
		makeRequest('PUT', '/api/users'),
		'🚨 makeRequest("PUT", "/api/users") should be "PUT /api/users" - typeof with as const extracts literal types',
	).toBe('PUT /api/users')
	expect(
		makeRequest('DELETE', '/api/users'),
		'🚨 makeRequest("DELETE", "/api/users") should be "DELETE /api/users" - use [number] to get union of array elements',
	).toBe('DELETE /api/users')
})
