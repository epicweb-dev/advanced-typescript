import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('MyReturnType extracts return type from function', () => {
	type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never

	type Fn1 = (a: string, b: number) => boolean
	type R1 = MyReturnType<Fn1>

	const fn: Fn1 = (a: string, b: number) => a.length > b
	const result: R1 = fn('hello', 3)
	assert.strictEqual(
		result,
		true,
		'🚨 result should be true - use infer R in conditional type T extends (...args: any[]) => infer R ? R : never',
	)
})

await test('MyParameters extracts parameter types from function', () => {
	type MyParameters<T> = T extends (...args: infer P) => any ? P : never

	type Fn1 = (a: string, b: number) => boolean
	type P1 = MyParameters<Fn1>

	const fn: Fn1 = (a: string, b: number) => a.length > b
	const params: P1 = ['hello', 5]
	const result = fn(...params)
	assert.strictEqual(
		result,
		false,
		'🚨 result should be false - use infer P in conditional type T extends (...args: infer P) => any ? P : never',
	)
})

await test('PromiseValue extracts resolved type from Promise', async () => {
	type PromiseValue<T> = T extends Promise<infer U> ? U : T

	type Fn2 = () => Promise<string>
	type V1 = PromiseValue<ReturnType<Fn2>>

	async function fn(): Promise<string> {
		return 'resolved'
	}

	const result: V1 = await fn()
	assert.strictEqual(
		result,
		'resolved',
		'🚨 result should be "resolved" - use infer U in conditional type T extends Promise<infer U> ? U : T',
	)
})

await test('FirstArg extracts first parameter type', () => {
	type FirstArg<T> = T extends (first: infer F, ...rest: any[]) => any
		? F
		: never

	type Fn3 = (x: { id: string }, y: number[], z: boolean) => void
	type F1 = FirstArg<Fn3>

	const fn: Fn3 = (x: { id: string }, y: number[], z: boolean) => {
		assert.strictEqual(
			x.id,
			'1',
			'🚨 x.id should be "1" - use infer F in conditional type T extends (first: infer F, ...rest: any[]) => any ? F : never',
		)
	}

	const firstArg: F1 = { id: '1' }
	fn(firstArg, [1, 2], true)
})

await test('LastArg extracts last parameter type', () => {
	type LastArg<T> = T extends (...args: infer A) => any
		? A extends [...infer _, infer L]
			? L
			: never
		: never

	type Fn3 = (x: { id: string }, y: number[], z: boolean) => void
	type L1 = LastArg<Fn3>

	const fn: Fn3 = (x: { id: string }, y: number[], z: boolean) => {
		assert.strictEqual(
			z,
			true,
			'🚨 z should be true - use infer L in conditional type T extends (...args: [...any[], infer L]) => any ? L : never',
		)
	}

	const lastArg: L1 = true
	fn({ id: '1' }, [1, 2], lastArg)
})

await test('logResult wrapper preserves function types', () => {
	type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never
	type MyParameters<T> = T extends (...args: infer P) => any ? P : never

	function logResult<T extends (...args: any[]) => any>(
		fn: T,
		...args: MyParameters<T>
	): MyReturnType<T> {
		const result = fn(...args)
		return result
	}

	function add(a: number, b: number): number {
		return a + b
	}

	const result = logResult(add, 5, 3)
	assert.strictEqual(
		result,
		8,
		'🚨 result should be 8 - combine MyParameters<T> and MyReturnType<T> to preserve function types',
	)
	assert.strictEqual(
		typeof result,
		'number',
		'🚨 typeof result should be "number" - infer keyword extracts types from function signatures',
	)
})
