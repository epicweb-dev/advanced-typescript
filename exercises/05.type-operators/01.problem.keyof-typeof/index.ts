// keyof and typeof Operators

type User = {
	id: string
	name: string
	email: string
	age: number
}

// 🐨 Create a type `UserKey` that is the union of User's keys
// 💰 Use `keyof` to derive the union of keys

// 🐨 Create a function `getUserProperty` that:
// - Takes a user and a key (constrained to UserKey)
// - Returns the value at that key
// 💰 Constrain the key to UserKey and return the matching value type

// Using typeof with values
const config = {
	apiUrl: 'https://api.example.com',
	timeout: 5000,
	retries: 3,
}

// 🐨 Create a type `Config` from the config object using typeof
// 💰 Use `typeof` to derive a type from the value

// 🐨 Create a type `ConfigKey` from Config's keys
// 💰 Combine `keyof` with `typeof`

// Using as const for literal types
// 🐨 Add `as const` to preserve literal types
const httpMethods = ['GET', 'POST', 'PUT', 'DELETE']

// 🐨 Create a type `HttpMethod` from the array
// 💰 Use indexed access on the array type

// 🐨 Create a function `makeRequest` that:
// - Takes a method (constrained to HttpMethod) and url (string)
// - Logs and returns a string like `${method} ${url}`
// 💰 Constrain the method to the HttpMethod type

// 🐨 Export your functions and values so we can verify your work
// 💰 Export the functions and values you created
