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
	console.log('Results:', JSON.stringify(user))
})
