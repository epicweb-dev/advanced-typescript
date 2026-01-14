// Linear Flow with Async/Await

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

// 🐨 Create an async function called `loadUserData`
//    Use await to fetch the user, then fetch their orders
//    Log both the user and orders
// 💰 async function loadUserData() { const user = await fetchUser(); ... }

// 🐨 Call the async function
// 💰 loadUserData()
