// Data for module + type-only import practice

// 🐨 Add `as const` so these stay literal types
export const userRoles = ['admin', 'editor', 'viewer']

// 🐨 Create a `UserRole` type from `userRoles`
type UserRole = any

// 🐨 Add `as const` and use these as the source of truth
export const sampleUsers = [
	{ id: 'user-1', name: 'Ada Lovelace', role: 'admin' },
	{ id: 'user-2', name: 'Grace Hopper', role: 'editor' },
	{ id: 'user-3', name: 'Alan Turing', role: 'viewer' },
]

// 🐨 Create a `SampleUser` type using `typeof sampleUsers[number]`
type SampleUser = any

export const samplePosts = [
	{
		id: 'post-1',
		title: 'Promises in the Wild',
		authorId: 'user-1',
		tags: ['async', 'promises'],
	},
	{
		id: 'post-2',
		title: 'Utility Types Everywhere',
		authorId: 'user-2',
		tags: ['utility', 'types'],
	},
]

// 🐨 Create a `SamplePost` type using `typeof samplePosts[number]`
type SamplePost = any

// 🐨 Export the types so they can be imported from index.ts
export type { UserRole, SampleUser, SamplePost }
