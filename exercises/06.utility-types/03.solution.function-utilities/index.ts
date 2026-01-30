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

type NewUser = ReturnType<typeof createUser>

type CreateUserParams = Parameters<typeof createUser>

type FetchUserResult = Awaited<ReturnType<typeof fetchUser>>

type ProcessDataArgs = Parameters<typeof processData>

function loggedCreateUser(...args: CreateUserParams): NewUser {
	console.log('Creating user with:', args)
	return createUser(...args)
}

// Test the types
const params: CreateUserParams = ['Alice', 'alice@example.com', 30]
const user = loggedCreateUser(...params)
console.log('Created user:', user)

// Type-safe access to the result
const userName: string = user.name
const userAge: number = user.age
console.log(`${userName} is ${userAge} years old`)

// Generic wrapper function example
function withLogging<T extends (...args: Array<any>) => any>(
	fn: T,
): (...args: Parameters<T>) => ReturnType<T> {
	return (...args) => {
		console.log('Calling with:', args)
		return fn(...args)
	}
}

const loggedProcess = withLogging(processData)
const result = loggedProcess(['a', 'b', 'c', 'd'], { limit: 2 })
console.log('Process result:', result)

export { loggedCreateUser }
