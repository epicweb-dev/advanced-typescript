// Type-Only Imports

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

// 🐨 Move the User and Product types into `types.ts`
//    Export them there and import them back here without runtime imports

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

// 🐨 Export your functions so we can verify your work

// export { displayUser, displayProduct }
