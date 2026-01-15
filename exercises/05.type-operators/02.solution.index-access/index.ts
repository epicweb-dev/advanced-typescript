// Index Access Types

type ApiResponse = {
	data: {
		user: {
			id: string
			name: string
			profile: {
				avatar: string
				bio: string
			}
		}
		posts: Array<{
			id: string
			title: string
			published: boolean
		}>
	}
	status: number
	error: string | null
}

type DataType = ApiResponse['data']

type UserType = ApiResponse['data']['user']

type ProfileType = ApiResponse['data']['user']['profile']

type PostType = ApiResponse['data']['posts'][number]

type StatusOrError = ApiResponse['status' | 'error'] // number | string | null

type UserValues = UserType[keyof UserType] // string | { avatar: string; bio: string }

// Test by creating variables
const profile: ProfileType = {
	avatar: 'https://example.com/avatar.jpg',
	bio: 'Hello!',
}
const post: PostType = { id: '1', title: 'Hello World', published: true }

console.log('Profile:', profile)
console.log('Post:', post)

// The types are exactly what we extracted
const user: UserType = {
	id: '1',
	name: 'Alice',
	profile: { avatar: 'url', bio: 'bio' },
}
console.log('User:', user)

export { profile, post, user }
