// Basic Conditional Types

// 🐨 Create IsString<T> - returns true if T is string, false otherwise
// type IsString<T> = T extends string ? true : false

// 🐨 Create IsArray<T> - returns true if T is an array
// type IsArray<T> = T extends any[] ? true : false

// 🐨 Create IsFunction<T> - returns true if T is a function
// 💰 Functions match: (...args: any[]) => any

// 🐨 Create Flatten<T> - if T is an array, return element type; otherwise T
// type Flatten<T> = T extends Array<???> ? ??? : T
// 💰 Use (infer U) to capture the element type

// 🐨 Create MyNonNullable<T> - removes null and undefined from T
// 💰 type MyNonNullable<T> = T extends null | undefined ? never : T

// Test your types
// type T1 = IsString<string>        // true
// type T2 = IsString<number>        // false
// type T3 = IsArray<string[]>       // true
// type T4 = IsArray<string>         // false
// type T5 = Flatten<string[]>       // string
// type T6 = Flatten<number>         // number
// type T7 = MyNonNullable<string | null>  // string

export {}
