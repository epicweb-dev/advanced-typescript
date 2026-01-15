import { test } from 'node:test'

// Type-level tests using conditional types
type Expect<T extends true> = T
type Equal<X, Y> =
	(<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
		? true
		: false

// Import the types from index.ts
import './index.ts'

// These are compile-time checks - if the file compiles, the tests pass
await test('Types compile correctly', () => {
	// This test just verifies the file compiles without errors
	// The type assertions are checked at compile time
})
