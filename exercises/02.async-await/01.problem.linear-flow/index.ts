// Linear Flow with Async/Await

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

function loadUserData() {
	return fetchUser().then((user) => {
		return fetchOrders(user.id).then((orders) => {
			return { user, orders }
		})
	})
}

// 🐨 Refactor `loadUserData` to use async/await instead of .then() chains

// 🐨 Export your function so we can verify your work

// export { loadUserData }
