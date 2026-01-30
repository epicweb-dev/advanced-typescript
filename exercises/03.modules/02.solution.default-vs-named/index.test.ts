import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('formatCurrency, formatDate, and Formatter are exported', () => {
	assert.ok(
		'formatCurrency' in solution,
		'🚨 Make sure you export "formatCurrency" - add: export { formatCurrency, formatDate, Formatter }',
	)
	assert.ok(
		'formatDate' in solution,
		'🚨 Make sure you export "formatDate" - add: export { formatCurrency, formatDate, Formatter }',
	)
	assert.ok(
		'Formatter' in solution,
		'🚨 Make sure you export "Formatter" - add: export { formatCurrency, formatDate, Formatter }',
	)
})

await test('formatCurrency formats numbers as currency', () => {
	const result = solution.formatCurrency(99.99)
	assert.strictEqual(
		result,
		'$99.99',
		'🚨 result should be "$99.99" - import formatCurrency correctly (default vs named export)',
	)
})

await test('formatDate formats dates correctly', () => {
	// Use explicit time to avoid timezone issues
	const date = new Date(2024, 0, 15, 12, 0, 0)
	const result = solution.formatDate(date)
	assert.ok(
		/1\/15\/2024/.test(result),
		'🚨 result should match "1/15/2024" - import formatDate correctly (default vs named export)',
	)
})

await test('Formatter class formats currency and dates', () => {
	const formatter = new solution.Formatter()
	assert.strictEqual(
		formatter.formatCurrency(199.99),
		'$199.99',
		'🚨 formatCurrency should return "$199.99" - import Formatter class correctly',
	)
	// Use explicit time to avoid timezone issues
	const date = new Date(2024, 0, 15, 12, 0, 0)
	assert.ok(
		/1\/15\/2024/.test(formatter.formatDate(date)),
		'🚨 formatDate should match "1/15/2024" - import Formatter class correctly',
	)
})
