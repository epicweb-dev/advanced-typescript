// Default vs Named Exports

// 🐨 Export formatCurrency as a named export
// 💰 export function formatCurrency(amount: number): string { ... }

export function formatCurrency(amount: number): string {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(amount)
}

// 🐨 Export formatDate as a named export
export function formatDate(date: Date): string {
	return new Intl.DateTimeFormat('en-US').format(date)
}

// 🐨 Export Formatter as the default export
// 💰 export default class Formatter { ... }

export default class Formatter {
	formatCurrency(amount: number): string {
		return formatCurrency(amount)
	}

	formatDate(date: Date): string {
		return formatDate(date)
	}
}
