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

function fetchUser(): Promise<User> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// Simulate random failures
			if (Math.random() > 0.5) {
				resolve({
					id: '1',
					name: 'Alice',
					email: 'alice@example.com',
				})
			} else {
				reject(new Error('Failed to fetch user'))
			}
		}, 1000)
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
		}, 500)
	})
}

async function loadUserData() {
	try {
		const user = await fetchUser()
		console.log('User:', user)

		const orders = await fetchOrders(user.id)
		console.log('Orders:', orders)
	} catch (error) {
		console.error('Failed to load data:', error)
	} finally {
		console.log('Operation complete')
	}
}

const sampleUser: User = {
	id: '1',
	name: 'Alice',
	email: 'alice@example.com',
}
const sampleOrders: Array<Order> = [
	{
		id: 'o1',
		userId: '1',
		items: ['Laptop', 'Mouse'],
		total: 1299.99,
	},
]

console.log(
	'Results JSON:',
	JSON.stringify({
		user: sampleUser,
		orders: sampleOrders,
		errorMessage: 'Failed to fetch user',
		operationComplete: 'Operation complete',
	}),
)
