// Import and Export

function displayUser(user: { name: string; email: string }) {
	console.log(`User: ${user.name} (${user.email})`)
}

function displayProduct(product: { name: string; price: number }) {
	console.log(`Product: ${product.name} - $${product.price}`)
}

const user = {
	id: '1',
	name: 'Alice',
	email: 'alice@example.com',
}

const product = {
	id: 'p1',
	name: 'Laptop',
	price: 999.99,
}

// 🐨 Move the user and product objects into `data.ts`
//    Export them there and import them back here

displayUser(user)
displayProduct(product)

// 🐨 Export your functions so we can verify your work

// export { displayUser, displayProduct }
