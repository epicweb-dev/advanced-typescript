import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('index access types extract nested types correctly', () => {
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

	type ProfileType = ApiResponse['data']['user']['profile']
	const profile: ProfileType = {
		avatar: 'https://example.com/avatar.jpg',
		bio: 'Hello!',
	}
	expect(profile.avatar, '🚨 profile.avatar should be "https://example.com/avatar.jpg" - use index access types ApiResponse["data"]["user"]["profile"]').toBe('https://example.com/avatar.jpg')
	expect(profile.bio, '🚨 profile.bio should be "Hello!" - index access extracts nested types').toBe('Hello!')
})

await testStep('index access extracts array element types', () => {
	type ApiResponse = {
		data: {
			posts: Array<{
				id: string
				title: string
				published: boolean
			}>
		}
	}

	type PostType = ApiResponse['data']['posts'][number]
	const post: PostType = { id: '1', title: 'Hello World', published: true }
	expect(post.id, '🚨 post.id should be "1" - use [number] to extract array element type').toBe('1')
	expect(post.title, '🚨 post.title should be "Hello World" - index access with [number] gets element type').toBe('Hello World')
	expect(post.published, '🚨 post.published should be true - [number] works with Array types').toBe(true)
})

await testStep('index access with union keys extracts union types', () => {
	type ApiResponse = {
		status: number
		error: string | null
	}

	type StatusOrError = ApiResponse['status' | 'error']
	const status: StatusOrError = 200
	const error: StatusOrError = 'Not found'
	expect(status, '🚨 status should be 200 - use union keys in index access to get union of value types').toBe(200)
	expect(error, '🚨 error should be "Not found" - union keys extract union of corresponding value types').toBe('Not found')
})

await testStep('keyof with index access extracts value types', () => {
	type UserType = {
		id: string
		name: string
		profile: {
			avatar: string
			bio: string
		}
	}

	type UserValues = UserType[keyof UserType]
	const id: UserValues = '1'
	const name: UserValues = 'Alice'
	const profile: UserValues = { avatar: 'url', bio: 'bio' }
	expect(id, '🚨 id should be "1" - use keyof with index access to get union of all value types').toBe('1')
	expect(name, '🚨 name should be "Alice" - UserType[keyof UserType] extracts all property value types').toBe('Alice')
	expect(profile, '🚨 profile should equal { avatar: "url", bio: "bio" } - keyof with index access creates union of values').toEqual({ avatar: 'url', bio: 'bio' })
})
