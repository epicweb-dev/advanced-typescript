import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('displayUser function displays user information', () => {
	type User = {
		id: string
		name: string
		email: string
	}

	function displayUser(user: User) {
		return `User: ${user.name} (${user.email})`
	}

	const user = { id: '1', name: 'Test User', email: 'test@example.com' }
	const result = displayUser(user)
	assert.strictEqual(
		result,
		'User: Test User (test@example.com)',
		'🚨 result should be "User: Test User (test@example.com)" - import User type and use it correctly',
	)
})

await test('displayProduct function displays product information', () => {
	type Product = {
		id: string
		name: string
		price: number
	}

	function displayProduct(product: Product) {
		return `Product: ${product.name} - $${product.price}`
	}

	const product = { id: 'p1', name: 'Test Product', price: 99.99 }
	const result = displayProduct(product)
	assert.strictEqual(
		result,
		'Product: Test Product - $99.99',
		'🚨 result should be "Product: Test Product - $99.99" - import Product type and use it correctly',
	)
})
