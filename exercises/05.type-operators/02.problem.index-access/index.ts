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

// 🐨 Extract the type of `data`
// type DataType = ApiResponse['data']

// 🐨 Extract the type of `user` from data
// type UserType = ApiResponse['data']['user']

// 🐨 Extract the type of `profile` from user
// type ProfileType = ...

// 🐨 Extract the type of a single post
// 💰 Use [number] to get array element type
// type PostType = ApiResponse['data']['posts'][number]

// 🐨 Extract just the string properties from ApiResponse
// 💰 type StringProps = ApiResponse['error']
// But what about multiple? Use union: ApiResponse['status' | 'error']

// 🐨 Create a type that is all possible value types of UserType
// 💰 type UserValues = UserType[keyof UserType]

// 🐨 Export your test values so we can verify your work
// 💰 export { profile, post, user }
