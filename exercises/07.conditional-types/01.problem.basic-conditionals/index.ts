// Basic Conditional Types

// 🐨 Create IsString<T> - returns true if T is string, false otherwise

// 🐨 Create IsArray<T> - returns true if T is an array

// 🐨 Create IsFunction<T> - returns true if T is a function

// 🐨 Create Flatten<T> - if T is an array, return element type; otherwise T

// 🐨 Create MyNonNullable<T> - removes null and undefined from T

// Test your types
// type T1 = IsString<string>        // true
// type T2 = IsString<number>        // false
// type T3 = IsArray<Array<string>>       // true
// type T4 = IsArray<string>         // false
// type T5 = Flatten<Array<string>>       // string
// type T6 = Flatten<number>         // number
// type T7 = MyNonNullable<string | null>  // string

// 🐨 Export your function so we can verify your work

// export { process }
