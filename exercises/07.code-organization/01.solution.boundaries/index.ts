// Module Boundaries

import { type Product, fetchProduct } from './products/index.ts'
import { type User, fetchUser } from './users/index.ts'

async function loadData() {
	const user = await fetchUser('1')
	const product = await fetchProduct('p1')

	console.log('User:', user)
	console.log('Product:', product)
}

void loadData()
