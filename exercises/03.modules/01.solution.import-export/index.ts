// Import and Export

import { product, user } from './data.ts'

function displayUser(user: { name: string; email: string }) {
	console.log(`User: ${user.name} (${user.email})`)
}

function displayProduct(product: { name: string; price: number }) {
	console.log(`Product: ${product.name} - $${product.price}`)
}

displayUser(user)
displayProduct(product)

export { displayUser, displayProduct }
