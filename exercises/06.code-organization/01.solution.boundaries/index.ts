// Module Boundaries

import { User, fetchUser } from './users'
import { Product, fetchProduct } from './products'

async function loadData() {
	const user = await fetchUser('1')
	const product = await fetchProduct('p1')
	
	console.log('User:', user)
	console.log('Product:', product)
}

loadData()

export {}
