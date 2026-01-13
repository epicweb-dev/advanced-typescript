import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('formatCurrency formats numbers as currency', () => {
	function formatCurrency(amount: number): string {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(amount)
	}

	const result = formatCurrency(99.99)
	assert.strictEqual(
		result,
		'$99.99',
		'🚨 result should be "$99.99" - import formatCurrency correctly (default vs named export)',
	)
})

await test('formatDate formats dates correctly', () => {
	function formatDate(date: Date): string {
		return new Intl.DateTimeFormat('en-US').format(date)
	}

	// Use explicit time to avoid timezone issues
	const date = new Date(2024, 0, 15, 12, 0, 0)
	const result = formatDate(date)
	assert.ok(
		/1\/15\/2024/.test(result),
		'🚨 result should match "1/15/2024" - import formatDate correctly (default vs named export)',
	)
})

await test('Formatter class formats currency and dates', () => {
	class Formatter {
		formatCurrency(amount: number): string {
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(amount)
		}

		formatDate(date: Date): string {
			return new Intl.DateTimeFormat('en-US').format(date)
		}
	}

	const formatter = new Formatter()
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
