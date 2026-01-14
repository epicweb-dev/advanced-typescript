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

async function fetchUser(): Promise<User> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				id: '1',
				name: 'Alice',
				email: 'alice@example.com',
			})
		}, 1000)
	})
}

async function fetchProducts(): Promise<Array<Product>> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{ id: 'p1', name: 'Laptop', price: 999.99 },
				{ id: 'p2', name: 'Mouse', price: 29.99 },
			])
		}, 500)
	})
}

async function loadData() {
	const user = await fetchUser()
	const products = await fetchProducts()

	console.log('User:', user)
	console.log('Products:', products)
}

void loadData()

// 🦺 This line ensures TypeScript treats this as a module
export {}
