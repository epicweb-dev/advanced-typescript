// keyof and typeof Operators

type User = {
	id: string
	name: string
	email: string
	age: number
}

// 🐨 Create a type `UserKey` that is the union of User's keys

// 🐨 Create a function `getUserProperty` that:
// - Takes a user and a key (constrained to UserKey)
// - Returns the value at that key

// Using typeof with values
const config = {
	apiUrl: 'https://api.example.com',
	timeout: 5000,
	retries: 3,
}

// 🐨 Create a type `Config` based on the config object

// 🐨 Create a type `ConfigKey` from Config's keys

// Using as const for literal types
// 🐨 Preserve literal types for the httpMethods array
const httpMethods = ['GET', 'POST', 'PUT', 'DELETE']

// 🐨 Create a type `HttpMethod` from the array

// 🐨 Create a function `makeRequest` that:
// - Takes a method (constrained to HttpMethod) and url (string)
// - Logs and returns a string like `${method} ${url}`

// 🐨 Export your functions and values so we can verify your work

// export { getUserProperty, makeRequest, config, httpMethods }
