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
		}, 10)
	})
}

export { fetchUser }
