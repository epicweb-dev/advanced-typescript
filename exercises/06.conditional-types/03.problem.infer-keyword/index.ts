// Using the infer Keyword

// 🐨 Create MyReturnType<T> - extracts the return type of a function

// 🐨 Create MyParameters<T> - extracts function parameters as a tuple

// 🐨 Create PromiseValue<T> - extracts the resolved type of a Promise

// 🐨 Create FirstArg<T> - extracts just the first argument type

// 🐨 Create LastArg<T> - extracts the last argument type

// Test functions
type Fn1 = (a: string, b: number) => boolean
type Fn2 = () => Promise<string>
type Fn3 = (x: { id: string }, y: Array<number>, z: boolean) => void

// Test your types
// type R1 = MyReturnType<Fn1>    // boolean
// type R2 = MyReturnType<Fn2>    // Promise<string>
// type P1 = MyParameters<Fn1>   // [string, number]
// type P2 = MyParameters<Fn3>   // [{ id: string }, Array<number>, boolean]
// type V1 = PromiseValue<Promise<string>>  // string
// type V2 = PromiseValue<number>           // number
// type F1 = FirstArg<Fn1>       // string
// type L1 = LastArg<Fn3>        // boolean

// 🐨 Export your function so we can verify your work

// export { logResult }
