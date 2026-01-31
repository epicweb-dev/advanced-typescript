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

// 🐨 Open `data.ts` and move the user and product objects there
//    Export them using named exports, then import them here

displayUser(user)
displayProduct(product)

// 🐨 Export your functions so we can verify your work

// export { displayUser, displayProduct }
