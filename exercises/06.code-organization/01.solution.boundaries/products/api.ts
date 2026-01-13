import type { Product } from './types'

export async function fetchProduct(id: string): Promise<Product> {
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
