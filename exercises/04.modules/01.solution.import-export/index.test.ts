import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('displayUser function displays user information', () => {
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
	expect(
		result,
		'🚨 result should be "User: Test User (test@example.com)" - import User type and use it correctly',
	).toBe('User: Test User (test@example.com)')
})

await testStep('displayProduct function displays product information', () => {
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
	expect(
		result,
		'🚨 result should be "Product: Test Product - $99.99" - import Product type and use it correctly',
	).toBe('Product: Test Product - $99.99')
})
