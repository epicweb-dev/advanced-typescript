// Using the infer Keyword

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never

type MyParameters<T> = T extends (...args: infer P) => any ? P : never

type PromiseValue<T> = T extends Promise<infer U> ? U : T

type FirstArg<T> = T extends (first: infer F, ...rest: any[]) => any ? F : never

type LastArg<T> = T extends (...args: infer A) => any
	? A extends [...infer _, infer L]
		? L
		: never
	: never

// Test functions
type Fn1 = (a: string, b: number) => boolean
type Fn2 = () => Promise<string>
type Fn3 = (x: { id: string }, y: number[], z: boolean) => void

// Test the types
type R1 = MyReturnType<Fn1> // boolean
type R2 = MyReturnType<Fn2> // Promise<string>
type P1 = MyParameters<Fn1> // [a: string, b: number]
type P2 = MyParameters<Fn3> // [x: { id: string }, y: number[], z: boolean]
type V1 = PromiseValue<Promise<string>> // string
type V2 = PromiseValue<number> // number (not a promise, returns as-is)
type F1 = FirstArg<Fn1> // string
type F2 = FirstArg<Fn3> // { id: string }
type L1 = LastArg<Fn3> // boolean

// Practical example: wrapping functions
function logResult<T extends (...args: any[]) => any>(
	fn: T,
	...args: MyParameters<T>
): MyReturnType<T> {
	const result = fn(...args)
	console.log('Result:', result)
	return result
}

function add(a: number, b: number): number {
	return a + b
}

const result = logResult(add, 5, 3) // TypeScript knows result is number
console.log('Final:', result)

export {}
