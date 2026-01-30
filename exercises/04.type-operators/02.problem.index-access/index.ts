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

// 🐨 Extract the type of `user` from data

// 🐨 Extract the type of `profile` from user

// 🐨 Extract the type of a single post

// 🐨 Extract just the string properties from ApiResponse

// 🐨 Create a type that is all possible value types of UserType

// 🐨 Export your test values so we can verify your work

// export { profile, post, user }
