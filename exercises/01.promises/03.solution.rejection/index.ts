// Handling Rejections

type User = {
	id: string
	name: string
	email: string
}

type UserProfile =
	| { status: 'success'; user: User }
	| { status: 'error'; message: string }

function fetchUser(id: string): Promise<User> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (id !== '1') {
				reject(new Error('User not found'))
				return
			}

			resolve({
				id: '1',
				name: 'Alice',
				email: 'alice@example.com',
			})
		}, 10)
	})
}

function getUserProfile(id: string): Promise<UserProfile> {
	return fetchUser(id)
		.then((user) => ({ status: 'success', user }) as const)
		.catch(
			(error) =>
				({
					status: 'error',
					message: error instanceof Error ? error.message : 'Unknown error',
				}) as const,
		)
}

export { fetchUser, getUserProfile }
