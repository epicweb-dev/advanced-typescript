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
	expect(profile.avatar).toBe('https://example.com/avatar.jpg')
	expect(profile.bio).toBe('Hello!')
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
	expect(post.id).toBe('1')
	expect(post.title).toBe('Hello World')
	expect(post.published).toBe(true)
})

await testStep('index access with union keys extracts union types', () => {
	type ApiResponse = {
		status: number
		error: string | null
	}

	type StatusOrError = ApiResponse['status' | 'error']
	const status: StatusOrError = 200
	const error: StatusOrError = 'Not found'
	expect(status).toBe(200)
	expect(error).toBe('Not found')
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
	expect(id).toBe('1')
	expect(name).toBe('Alice')
	expect(profile).toEqual({ avatar: 'url', bio: 'bio' })
})
