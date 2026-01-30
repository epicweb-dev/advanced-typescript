// Introduction to the infer Keyword

// The `infer` keyword lets you extract types from within other types.
// Think of it as "pattern matching" for types.

// 🐨 Create ArrayElement<T> - extracts the element type from an array
// If T is an array, extract its element type. Otherwise, return never.

// 🐨 Create PromiseResult<T> - extracts the resolved type of a Promise
// If T is a Promise, extract what it resolves to. Otherwise, return T as-is.

// 🐨 Create FunctionReturn<T> - extracts the return type of a function
// If T is a function, extract its return type. Otherwise, return never.

// Test types
type Numbers = Array<number>
type Strings = Array<string>
type Users = Array<{ id: string; name: string }>

// Test your types
// type N = ArrayElement<Numbers>     // number
// type S = ArrayElement<Strings>     // string
// type U = ArrayElement<Users>       // { id: string; name: string }
// type X = ArrayElement<string>      // never (not an array)

// type P1 = PromiseResult<Promise<string>>   // string
// type P2 = PromiseResult<Promise<number>>   // number
// type P3 = PromiseResult<boolean>           // boolean (not a promise, returned as-is)

// type R1 = FunctionReturn<() => string>     // string
// type R2 = FunctionReturn<(x: number) => boolean>  // boolean

// 🐨 Export your function so we can verify your work

// export { fetchUser }
