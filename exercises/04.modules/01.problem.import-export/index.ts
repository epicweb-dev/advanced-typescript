// Import and Export

type User = {
	id: string
	name: string
	email: string
}

type Product = {
	id: string
	name: string
	price: number
}

// 🐨 Create a new file `types.ts` and move the User and Product types there
//    Export them using named exports: export type User = { ... }
//    Then import them here: import { User, Product } from './types.ts'
// 💰 import { User, Product } from './types.ts'

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
