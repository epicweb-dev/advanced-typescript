import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('displayUser and displayProduct are exported', () => {
	assert.ok(
		'displayUser' in solution,
		'🚨 Make sure you export "displayUser" - add: export { displayUser, displayProduct }',
	)
	assert.ok(
		'displayProduct' in solution,
		'🚨 Make sure you export "displayProduct" - add: export { displayUser, displayProduct }',
	)
})

await test('displayUser function displays user information', () => {
	type User = {
		id: string
		name: string
		email: string
	}

	const user = { id: '1', name: 'Test User', email: 'test@example.com' }
	const result = solution.displayUser(user)
	assert.strictEqual(
		result,
		undefined,
		'🚨 displayUser should be callable - import User type and use it correctly',
	)
})

await test('displayProduct function displays product information', () => {
	type Product = {
		id: string
		name: string
		price: number
	}

	const product = { id: 'p1', name: 'Test Product', price: 99.99 }
	const result = solution.displayProduct(product)
	assert.strictEqual(
		result,
		undefined,
		'🚨 displayProduct should be callable - import Product type and use it correctly',
	)
})
