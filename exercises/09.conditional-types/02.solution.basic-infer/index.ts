// Introduction to the infer Keyword

// The `infer` keyword lets you extract types from within other types.
// Think of it as "pattern matching" for types.

// Extract the element type from an array
type ArrayElement<T> = T extends Array<infer E> ? E : never

// Extract the resolved type of a Promise (or return T if not a Promise)
type PromiseResult<T> = T extends Promise<infer U> ? U : T

// Extract the return type of a function
type FunctionReturn<T> = T extends (...args: any[]) => infer R ? R : never

// Test types
type Numbers = Array<number>
type Strings = Array<string>
type Users = Array<{ id: string; name: string }>

// Test ArrayElement
type N = ArrayElement<Numbers> // number
type S = ArrayElement<Strings> // string
type U = ArrayElement<Users> // { id: string; name: string }
type X = ArrayElement<string> // never (not an array)

// Test PromiseResult
type P1 = PromiseResult<Promise<string>> // string
type P2 = PromiseResult<Promise<number>> // number
type P3 = PromiseResult<boolean> // boolean (not a promise, returned as-is)

// Test FunctionReturn
type R1 = FunctionReturn<() => string> // string
type R2 = FunctionReturn<(x: number) => boolean> // boolean
type R3 = FunctionReturn<string> // never (not a function)

// Practical example
async function fetchUser(): Promise<{ id: string; name: string }> {
	return { id: '1', name: 'Alice' }
}

type FetchUserResult = PromiseResult<ReturnType<typeof fetchUser>>
// FetchUserResult is { id: string; name: string }

console.log('ArrayElement<Array<number>>:', 'number')
console.log('PromiseResult<Promise<string>>:', 'string')
console.log('FunctionReturn<() => boolean>:', 'boolean')

export { fetchUser }
