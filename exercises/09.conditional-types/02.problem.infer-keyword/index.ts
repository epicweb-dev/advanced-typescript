// Using the infer Keyword

// 🐨 Create MyReturnType<T> - extracts the return type of a function
// type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never

// 🐨 Create MyParameters<T> - extracts function parameters as a tuple
// 💰 type MyParameters<T> = T extends (...args: infer P) => any ? P : never

// 🐨 Create PromiseValue<T> - extracts the resolved type of a Promise
// type PromiseValue<T> = T extends Promise<infer U> ? U : T

// 🐨 Create FirstArg<T> - extracts just the first argument type
// 💰 type FirstArg<T> = T extends (first: infer F, ...rest: any[]) => any ? F : never

// 🐨 Create LastArg<T> - extracts the last argument type
// 💰 type LastArg<T> = T extends (...args: infer A) => any
// 💰   ? A extends [...infer _, infer L] ? L : never
// 💰   : never

// Test functions
type Fn1 = (a: string, b: number) => boolean
type Fn2 = () => Promise<string>
type Fn3 = (x: { id: string }, y: number[], z: boolean) => void

// Test your types
// type R1 = MyReturnType<Fn1>    // boolean
// type R2 = MyReturnType<Fn2>    // Promise<string>
// type P1 = MyParameters<Fn1>   // [string, number]
// type P2 = MyParameters<Fn3>   // [{ id: string }, number[], boolean]
// type V1 = PromiseValue<Promise<string>>  // string
// type V2 = PromiseValue<number>           // number
// type F1 = FirstArg<Fn1>       // string
// type L1 = LastArg<Fn3>        // boolean
