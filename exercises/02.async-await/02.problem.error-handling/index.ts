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
	// 🐨 Wrap the async operations in a try block
	//    Add a catch block to handle errors
	//    Optionally add a finally block for cleanup

	const user = await fetchUser(userId)
	// console.log('User:', user)

	const orders = await fetchOrders(user.id)
	// console.log('Orders:', orders)
}

void loadUserData('1')

// 🐨 Export your function so we can verify your work

// export { loadUserData }
