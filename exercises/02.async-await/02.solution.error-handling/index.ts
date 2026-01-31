// Error Handling with Async/Await

type User = {
	id: string
	name: string
	email: string
}

type Order = {
	id: string
	userId: string
	items: Array<string>
	total: number
}

function fetchUser(userId: string): Promise<User> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (userId === '1') {
				resolve({
					id: '1',
					name: 'Alice',
					email: 'alice@example.com',
				})
			} else {
				reject(new Error('Failed to fetch user'))
			}
		}, 100)
	})
}

function fetchOrders(userId: string): Promise<Array<Order>> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{
					id: 'o1',
					userId,
					items: ['Laptop', 'Mouse'],
					total: 1299.99,
				},
			])
		}, 50)
	})
}

async function loadUserData(userId: string) {
	try {
		const user = await fetchUser(userId)
		console.log('User:', user)

		const orders = await fetchOrders(user.id)
		console.log('Orders:', orders)
	} catch (error) {
		console.error('Failed to load data:', error)
	} finally {
		console.log('Operation complete')
	}
}

export { loadUserData }
