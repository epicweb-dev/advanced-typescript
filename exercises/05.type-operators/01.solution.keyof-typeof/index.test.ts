import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('getUserProperty, makeRequest, config, and httpMethods are exported', () => {
	assert.ok(
		'getUserProperty' in solution,
		'🚨 Make sure you export "getUserProperty" - add: export { getUserProperty, makeRequest, config, httpMethods }',
	)
	assert.ok(
		'makeRequest' in solution,
		'🚨 Make sure you export "makeRequest" - add: export { getUserProperty, makeRequest, config, httpMethods }',
	)
	assert.ok(
		'config' in solution,
		'🚨 Make sure you export "config" - add: export { getUserProperty, makeRequest, config, httpMethods }',
	)
	assert.ok(
		'httpMethods' in solution,
		'🚨 Make sure you export "httpMethods" - add: export { getUserProperty, makeRequest, config, httpMethods }',
	)
})

await test('getUserProperty returns correct property values', () => {
	type User = {
		id: string
		name: string
		email: string
		age: number
	}

	const user: User = { id: '1', name: 'Alice', email: 'a@b.com', age: 30 }
	assert.strictEqual(
		solution.getUserProperty(user, 'name'),
		'Alice',
		'🚨 getUserProperty(user, "name") should be "Alice" - use keyof User to constrain key parameter',
	)
	assert.strictEqual(
		solution.getUserProperty(user, 'age'),
		30,
		'🚨 getUserProperty(user, "age") should be 30 - keyof extracts all property keys',
	)
	assert.strictEqual(
		solution.getUserProperty(user, 'id'),
		'1',
		'🚨 getUserProperty(user, "id") should be "1" - use User[K] for return type',
	)
	assert.strictEqual(
		solution.getUserProperty(user, 'email'),
		'a@b.com',
		'🚨 getUserProperty(user, "email") should be "a@b.com" - keyof ensures type-safe property access',
	)
})

await test('typeof extracts type from value', () => {
	assert.strictEqual(
		solution.config.apiUrl,
		'https://api.example.com',
		'🚨 config.apiUrl should be "https://api.example.com" - use typeof to extract type from value',
	)
	assert.strictEqual(
		solution.config.timeout,
		5000,
		'🚨 config.timeout should be 5000 - typeof preserves the exact value types',
	)
})

await test('as const creates literal union types', () => {
	assert.strictEqual(
		solution.makeRequest('GET', '/api/users'),
		'GET /api/users',
		'🚨 makeRequest("GET", "/api/users") should be "GET /api/users" - use "as const" and typeof to create literal union types',
	)
	assert.strictEqual(
		solution.makeRequest('POST', '/api/users'),
		'POST /api/users',
		'🚨 makeRequest("POST", "/api/users") should be "POST /api/users" - as const creates readonly tuple',
	)
	assert.strictEqual(
		solution.makeRequest('PUT', '/api/users'),
		'PUT /api/users',
		'🚨 makeRequest("PUT", "/api/users") should be "PUT /api/users" - typeof with as const extracts literal types',
	)
	assert.strictEqual(
		solution.makeRequest('DELETE', '/api/users'),
		'DELETE /api/users',
		'🚨 makeRequest("DELETE", "/api/users") should be "DELETE /api/users" - use [number] to get union of array elements',
	)
})
