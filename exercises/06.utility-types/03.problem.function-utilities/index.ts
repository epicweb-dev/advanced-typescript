// Function Utility Types

// Example functions
function createUser(name: string, email: string, age: number) {
	return { id: crypto.randomUUID(), name, email, age, createdAt: new Date() }
}

async function fetchUser(id: string): Promise<{ id: string; name: string }> {
	return { id, name: 'Alice' }
}

function processData(data: string[], options: { limit: number }): number {
	return Math.min(data.length, options.limit)
}

// 🐨 Create a type `NewUser` using ReturnType<typeof createUser>
// 💰 Use ReturnType on createUser

// 🐨 Create a type `CreateUserParams` using Parameters<typeof createUser>
// 💰 Use Parameters on createUser

// 🐨 Create a type `FetchUserResult` using ReturnType and Awaited
// 💰 Combine Awaited with ReturnType for fetchUser

// 🐨 Create a type `ProcessDataArgs` using Parameters
// 💰 Use Parameters on processData

// 🐨 Create a wrapper function that logs calls to createUser
// It should have the same parameters and return type as createUser
// 💰 Match createUser's parameters and return type in the wrapper

// 🐨 Export your function so we can verify your work
// 💰 Export the function you created
