// Function Utility Types

// Example functions
function createUser(name: string, email: string, age: number) {
	return { id: crypto.randomUUID(), name, email, age, createdAt: new Date() }
}

async function fetchUser(id: string): Promise<{ id: string; name: string }> {
	return { id, name: 'Alice' }
}

function processData(data: Array<string>, options: { limit: number }): number {
	return Math.min(data.length, options.limit)
}

// 🐨 Create a type `NewUser` using ReturnType<typeof createUser>

// 🐨 Create a type `CreateUserParams` using Parameters<typeof createUser>

// 🐨 Create a type `FetchUserResult` using ReturnType and Awaited

// 🐨 Create a type `ProcessDataArgs` using Parameters

// 🐨 Create a wrapper function that logs calls to createUser
// It should have the same parameters and return type as createUser

// 🐨 Export your function so we can verify your work

// export { loggedCreateUser }
