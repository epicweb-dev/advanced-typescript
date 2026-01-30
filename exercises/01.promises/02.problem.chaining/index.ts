// Chaining Promises

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

// 🐨 Implement fetchUser() and fetchOrders() so they resolve with data

// 🦉 Once both functions work, try chaining them in the playground:
// fetchUser()
// 	.then((user) => fetchOrders(user.id))
// 	.then((orders) => console.log(orders))
// 	.catch((error) => console.error('Error:', error))

// 🐨 Export your functions so we can verify your work

// export { fetchUser, fetchOrders }
