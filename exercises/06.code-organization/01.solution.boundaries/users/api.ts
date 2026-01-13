import type { User } from './types'

export async function fetchUser(id: string): Promise<User> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				id,
				name: 'Alice',
				email: 'alice@example.com',
			})
		}, 1000)
	})
}
