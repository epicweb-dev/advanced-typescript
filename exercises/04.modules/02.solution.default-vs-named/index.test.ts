import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('formatCurrency formats numbers as currency', () => {
	function formatCurrency(amount: number): string {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(amount)
	}

	const result = formatCurrency(99.99)
	expect(
		result,
		'🚨 result should be "$99.99" - import formatCurrency correctly (default vs named export)',
	).toBe('$99.99')
})

await testStep('formatDate formats dates correctly', () => {
	function formatDate(date: Date): string {
		return new Intl.DateTimeFormat('en-US').format(date)
	}

	// Use explicit time to avoid timezone issues
	const date = new Date(2024, 0, 15, 12, 0, 0)
	const result = formatDate(date)
	expect(
		result,
		'🚨 result should match "1/15/2024" - import formatDate correctly (default vs named export)',
	).toMatch(/1\/15\/2024/)
})

await testStep('Formatter class formats currency and dates', () => {
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
	expect(
		formatter.formatCurrency(199.99),
		'🚨 formatCurrency should return "$199.99" - import Formatter class correctly',
	).toBe('$199.99')
	// Use explicit time to avoid timezone issues
	const date = new Date(2024, 0, 15, 12, 0, 0)
	expect(
		formatter.formatDate(date),
		'🚨 formatDate should match "1/15/2024" - import Formatter class correctly',
	).toMatch(/1\/15\/2024/)
})
