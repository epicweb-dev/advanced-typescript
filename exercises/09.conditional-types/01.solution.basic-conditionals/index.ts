// Basic Conditional Types

type IsString<T> = T extends string ? true : false

type IsArray<T> = T extends any[] ? true : false

type IsFunction<T> = T extends (...args: any[]) => any ? true : false

type Flatten<T> = T extends Array<infer U> ? U : T

type MyNonNullable<T> = T extends null | undefined ? never : T

// Test the types
type T1 = IsString<string> // true
type T2 = IsString<number> // false
type T3 = IsArray<string[]> // true
type T4 = IsArray<string> // false
type T5 = IsFunction<() => void> // true
type T6 = IsFunction<string> // false
type T7 = Flatten<string[]> // string
type T8 = Flatten<number> // number
type T9 = Flatten<number[][]> // number[] (only one level)
type T10 = MyNonNullable<string | null | undefined> // string

// Practical usage
function process<T>(value: T): Flatten<T> {
	if (Array.isArray(value)) {
		return value[0]
	}
	return value as Flatten<T>
}

const arr = process([1, 2, 3]) // number
const num = process(42) // number

console.log('Array result:', arr)
console.log('Number result:', num)

// 🦺 This line ensures TypeScript treats this as a module
export {}
