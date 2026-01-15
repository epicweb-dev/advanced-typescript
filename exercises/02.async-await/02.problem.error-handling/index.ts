// Error Handling with Async/Await

type User = {
	id: string
	name: string
	email: string
}

type Order = {
	id: string
	userId: string
	items: string[]
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

function fetchOrders(userId: string): Promise<Order[]> {
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
	// 🐨 Wrap the async operations in a try block
	//    Add a catch block to handle errors
	//    Optionally add a finally block for cleanup
	// 💰 try { ... } catch (error) { ... } finally { ... }

	const user = await fetchUser()
	console.log('User:', user)

	const orders = await fetchOrders(user.id)
	console.log('Orders:', orders)
}

void loadUserData()

// 🐨 When you're done, add something like this:
// const sampleUser: User = {
// 	id: '1',
// 	name: 'Alice',
// 	email: 'alice@example.com',
// }
// const sampleOrders: Array<Order> = [
// 	{
// 		id: 'o1',
// 		userId: '1',
// 		items: ['Laptop', 'Mouse'],
// 		total: 1299.99,
// 	},
// ]
// console.log(
// 	'Results JSON:',
// 	JSON.stringify({
// 		user: sampleUser,
// 		orders: sampleOrders,
// 		errorMessage: 'Failed to fetch user',
// 		operationComplete: 'Operation complete',
// 	}),
// )
