// Module Boundaries

import { Product, fetchProduct } from './products'
import { User, fetchUser } from './users'

async function loadData() {
	const user = await fetchUser('1')
	const product = await fetchProduct('p1')

	console.log('User:', user)
	console.log('Product:', product)
}

void loadData()

export {}
