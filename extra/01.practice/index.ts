// Advanced TypeScript Practice
// Work through each section in order.

import { samplePosts, sampleUsers, userRoles } from './index.data.ts'
import {
	type SamplePost,
	type SampleUser,
	type UserRole,
} from './index.data.ts'

// 🐨 Ensure types are imported with type-only imports

// ============================================================================
// SECTION 1: Promises + Async/Await
// ============================================================================

// 🐨 Create ApiSuccess and ApiError types, then combine them into ApiResult<T>
// ApiSuccess<T> = { status: 'success'; data: T }
// ApiError = { status: 'error'; error: string }
// ApiResult<T> = ApiSuccess<T> | ApiError
type ApiSuccess<T> = any
type ApiError = any
type ApiResult<T> = any

// 🐨 Create a createDelay function that returns a Promise<number>
// It should resolve with the same number after the delay
export function createDelay(ms: number): Promise<number> {
	return Promise.resolve(ms)
}

// 🐨 Create fetchUser that returns ApiResult<SampleUser>
// Return an error result if the user is not found
export function fetchUser(id: string): Promise<ApiResult<SampleUser>> {
	const user = sampleUsers.find((candidate) => candidate.id === id)
	if (!user) {
		return Promise.resolve({
			status: 'error',
			error: 'User not found',
		} as ApiResult<SampleUser>)
	}
	return Promise.resolve({
		status: 'success',
		data: user,
	} as ApiResult<SampleUser>)
}

// 🐨 Create fetchPostsByAuthor that returns ApiResult<Array<SamplePost>>
export function fetchPostsByAuthor(
	authorId: string,
): Promise<ApiResult<Array<SamplePost>>> {
	const posts = samplePosts.filter((post) => post.authorId === authorId)
	return Promise.resolve({ status: 'success', data: posts } as ApiResult<
		Array<SamplePost>
	>)
}

// 🐨 Use Promise chaining to fetch a user and then their posts
export function getUserWithPosts(
	id: string,
): Promise<ApiResult<{ user: SampleUser; posts: Array<SamplePost> }>> {
	return fetchUser(id).then((result) => {
		if (result.status === 'error') return result
		return fetchPostsByAuthor(result.data.id).then((postsResult) => {
			if (postsResult.status === 'error') return postsResult
			return {
				status: 'success',
				data: { user: result.data, posts: postsResult.data },
			} as ApiResult<{ user: SampleUser; posts: Array<SamplePost> }>
		})
	})
}

// 🐨 Re-implement getUserWithPosts using async/await and try/catch
export async function getUserWithPostsAsync(
	id: string,
): Promise<ApiResult<{ user: SampleUser; posts: Array<SamplePost> }>> {
	return getUserWithPosts(id)
}

// ============================================================================
// SECTION 2: Type Operators + Index Access
// ============================================================================

// 🐨 Create UserRoleFromData using typeof userRoles[number]
type UserRoleFromData = any

// 🐨 Create PostId and UserId using index access types
type PostId = any
type UserId = any

// 🐨 Create RoleLabelMap using Record<UserRole, string>
type RoleLabelMap = any

export const roleLabels: RoleLabelMap = {
	admin: 'Administrator',
	editor: 'Editor',
	viewer: 'Viewer',
} as RoleLabelMap

// ============================================================================
// SECTION 3: Utility Types
// ============================================================================

// 🐨 Create a UserUpdate type using Partial + Pick (name, role only)
type UserUpdate = any

// 🐨 Create a PostWithoutTags type using Omit<SamplePost, 'tags'>
type PostWithoutTags = any

// 🐨 Create a RoleCounts type using Record<UserRole, number>
type RoleCounts = any

// 🐨 Implement countUsersByRole using RoleCounts
export function countUsersByRole(users: Array<SampleUser>): RoleCounts {
	const counts: RoleCounts = { admin: 0, editor: 0, viewer: 0 } as RoleCounts
	for (const user of users) {
		counts[user.role] += 1
	}
	return counts as RoleCounts
}

// 🐨 Create Slug type using ReturnType of buildSlug
export function buildSlug(title: string, id: string) {
	return `${title.toLowerCase().replace(/\s+/g, '-')}-${id}`
}
type Slug = any

// 🐨 Create BuildSlugArgs using Parameters of buildSlug
type BuildSlugArgs = any

// 🐨 Create PostsResult using Awaited + ReturnType on fetchPostsByAuthor
type PostsResult = any

// ============================================================================
// SECTION 4: Mapped Types
// ============================================================================

// 🐨 Create Nullable<T> where every field can also be null
type Nullable<T> = any

// 🐨 Create Mutable<T> that removes readonly from fields
type Mutable<T> = any

// ============================================================================
// SECTION 5: Conditional Types + infer
// ============================================================================

// 🐨 Create UnwrapPromise<T> using infer
type UnwrapPromise<T> = any

// 🐨 Create AuthorIdFrom<T> that extracts `authorId` using infer
type AuthorIdFrom<T> = any

// 🐨 Create Flatten<T> that extracts array element types
type Flatten<T> = any

// ============================================================================
// SECTION 6: Complex Combinations
// ============================================================================

// 🐨 Create updateUser that uses keyof + index access types
export function updateUser<K extends keyof SampleUser>(
	user: SampleUser,
	key: K,
	value: SampleUser[K],
): SampleUser {
	return { ...user, [key]: value }
}

// 🐨 Create applyUserUpdate using UserUpdate + Partial
export function applyUserUpdate(
	user: SampleUser,
	update: UserUpdate,
): SampleUser {
	return { ...user, ...update }
}

// 🐨 Create a function mapPostsToAuthors that:
// - Returns Record<UserId, Array<PostId>>
// - Uses roleLabels, sampleUsers, and samplePosts
export function mapPostsToAuthors(): Record<UserId, Array<PostId>> {
	void roleLabels
	const authorMap: Record<string, Array<string>> = {}
	for (const user of sampleUsers) {
		authorMap[user.id] = samplePosts
			.filter((post) => post.authorId === user.id)
			.map((post) => post.id)
	}
	return authorMap as Record<UserId, Array<PostId>>
}

// ============================================================================
// OPTIONAL CHECKS (uncomment to verify)
// ============================================================================

// createDelay(200).then((value) => console.log('Delay:', value))
// getUserWithPostsAsync('user-1').then((result) => console.log('User with posts:', result))
// console.log('Role counts:', countUsersByRole(sampleUsers))
