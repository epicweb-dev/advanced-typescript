// Import and Export

import { type User, type Product } from './types.ts'

function displayUser(user: User) {
	console.log(`User: ${user.name} (${user.email})`)
}

function displayProduct(product: Product) {
	console.log(`Product: ${product.name} - $${product.price}`)
}

const user: User = {
	id: '1',
	name: 'Alice',
	email: 'alice@example.com',
}

const product: Product = {
	id: 'p1',
	name: 'Laptop',
	price: 999.99,
}

displayUser(user)
displayProduct(product)

export { displayUser, displayProduct }
