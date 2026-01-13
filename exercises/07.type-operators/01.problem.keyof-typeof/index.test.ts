import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('getUserProperty returns correct property values', () => {
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
	assert.strictEqual(
		getUserProperty(user, 'name'),
		'Alice',
		'🚨 getUserProperty(user, "name") should be "Alice" - use keyof User to constrain key parameter',
	)
	assert.strictEqual(
		getUserProperty(user, 'age'),
		30,
		'🚨 getUserProperty(user, "age") should be 30 - keyof extracts all property keys',
	)
	assert.strictEqual(
		getUserProperty(user, 'id'),
		'1',
		'🚨 getUserProperty(user, "id") should be "1" - use User[K] for return type',
	)
	assert.strictEqual(
		getUserProperty(user, 'email'),
		'a@b.com',
		'🚨 getUserProperty(user, "email") should be "a@b.com" - keyof ensures type-safe property access',
	)
})

await test('typeof extracts type from value', () => {
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
	assert.strictEqual(
		typedConfig.apiUrl,
		'https://api.example.com',
		'🚨 typedConfig.apiUrl should be "https://api.example.com" - use typeof to extract type from value',
	)
	assert.strictEqual(
		typedConfig.timeout,
		5000,
		'🚨 typedConfig.timeout should be 5000 - typeof preserves the exact value types',
	)
})

await test('as const creates literal union types', () => {
	const httpMethods = ['GET', 'POST', 'PUT', 'DELETE'] as const
	type HttpMethod = (typeof httpMethods)[number]

	function makeRequest(method: HttpMethod, url: string) {
		return `${method} ${url}`
	}

	assert.strictEqual(
		makeRequest('GET', '/api/users'),
		'GET /api/users',
		'🚨 makeRequest("GET", "/api/users") should be "GET /api/users" - use "as const" and typeof to create literal union types',
	)
	assert.strictEqual(
		makeRequest('POST', '/api/users'),
		'POST /api/users',
		'🚨 makeRequest("POST", "/api/users") should be "POST /api/users" - as const creates readonly tuple',
	)
	assert.strictEqual(
		makeRequest('PUT', '/api/users'),
		'PUT /api/users',
		'🚨 makeRequest("PUT", "/api/users") should be "PUT /api/users" - typeof with as const extracts literal types',
	)
	assert.strictEqual(
		makeRequest('DELETE', '/api/users'),
		'DELETE /api/users',
		'🚨 makeRequest("DELETE", "/api/users") should be "DELETE /api/users" - use [number] to get union of array elements',
	)
})
