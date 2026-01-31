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
		}, 1000)
	})
}

function getUserProfile(id: string): Promise<UserProfile> {
	return fetchUser(id).then((user) => ({ status: 'success', user }) as const)
}

// 🐨 Update getUserProfile to handle rejections and return an error status
// 💰 return { status: 'error', message: error.message }
// 💰 if error isn't an Error, use 'Unknown error'

// 🐨 Export fetchUser and getUserProfile so we can verify your work
// export { fetchUser, getUserProfile }
