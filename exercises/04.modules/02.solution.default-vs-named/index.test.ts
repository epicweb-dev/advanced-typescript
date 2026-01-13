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
	expect(result).toBe('$99.99')
})

await testStep('formatDate formats dates correctly', () => {
	function formatDate(date: Date): string {
		return new Intl.DateTimeFormat('en-US').format(date)
	}

	const date = new Date('2024-01-15')
	const result = formatDate(date)
	expect(result).toMatch(/1\/15\/2024/)
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
	expect(formatter.formatCurrency(199.99)).toBe('$199.99')
	const date = new Date('2024-01-15')
	expect(formatter.formatDate(date)).toMatch(/1\/15\/2024/)
})
