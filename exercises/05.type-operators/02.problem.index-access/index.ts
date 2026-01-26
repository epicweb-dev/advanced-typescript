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
// 💰 Use indexed access to get the array element type

// 🐨 Extract just the string properties from ApiResponse
// 💰 Use union index access for multiple properties

// 🐨 Create a type that is all possible value types of UserType
// 💰 Use `keyof` with index access

// 🐨 Export your test values so we can verify your work
// 💰 Export the test values you created
