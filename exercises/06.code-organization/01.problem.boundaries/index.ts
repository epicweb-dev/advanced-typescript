// Module Boundaries

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

async function fetchUser(id: string): Promise<User> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				id,
				name: 'Alice',
				email: 'alice@example.com',
			})
		}, 1000)
	})
}

async function fetchProduct(id: string): Promise<Product> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				id,
				name: 'Laptop',
				price: 999.99,
			})
		}, 500)
	})
}

// 🐨 Reorganize this code:
//    1. Create users/types.ts with User type
//    2. Create users/api.ts with fetchUser function
//    3. Create users/index.ts that exports everything from types and api
//    4. Do the same for products
//    5. Import from the new modules here
// 💰 import { User, fetchUser } from './users'
//    import { Product, fetchProduct } from './products'

async function loadData() {
	const user = await fetchUser('1')
	const product = await fetchProduct('p1')
	
	console.log('User:', user)
	console.log('Product:', product)
}

loadData()

export {}
