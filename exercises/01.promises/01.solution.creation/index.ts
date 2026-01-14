// Creating Promises

type User = {
	id: string
	name: string
	email: string
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

void fetchUser().then((user) => {
	console.log('User fetched:', user)
})

// 🦺 This line ensures TypeScript treats this as a module
export {}
