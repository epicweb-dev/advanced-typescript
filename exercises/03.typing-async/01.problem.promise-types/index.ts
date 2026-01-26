// Promise Types

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

// 🐨 Add explicit return type annotations to these async functions
//    Use Promise<User> and Promise<Product[]> respectively
// 🦺 async function fetchUser(): Promise<User> { ... }

async function fetchUser() {
	return new Promise<User>((resolve) => {
		setTimeout(() => {
			resolve({
				id: '1',
				name: 'Alice',
				email: 'alice@example.com',
			})
		}, 1000)
	})
}

async function fetchProducts() {
	return new Promise<Product[]>((resolve) => {
		setTimeout(() => {
			resolve([
				{ id: 'p1', name: 'Laptop', price: 999.99 },
				{ id: 'p2', name: 'Mouse', price: 29.99 },
			])
		}, 500)
	})
}

// 🐨 Type the result of await correctly
//    TypeScript should infer the types, but verify they're correct
async function loadData() {
	const user = await fetchUser()
	const products = await fetchProducts()

	console.log('User:', user)
	console.log('Products:', products)

	// 🐨 Export your functions so we can verify your work
	// 💰 Export the functions you created
}

void loadData()
