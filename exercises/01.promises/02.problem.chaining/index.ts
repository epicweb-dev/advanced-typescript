// Chaining Promises

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

// 🐨 Chain fetchUser() and fetchOrders() together
//    First fetch the user, then fetch their orders using the user's id
//    Log both the user and orders
// 💰 fetchUser().then((user) => { ... return fetchOrders(user.id) }).then(...)

// 🐨 Add error handling with .catch()
// 💰 .catch((error) => console.error('Error:', error))

// 🦺 This line ensures TypeScript treats this as a module
export {}
