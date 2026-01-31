// Default vs Named Exports

// 🐨 Export formatCurrency as a named export
function formatCurrency(amount: number): string {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(amount)
}

// 🐨 Export formatDate as a named export
function formatDate(date: Date): string {
	return new Intl.DateTimeFormat('en-US').format(date)
}

// 🐨 Export Formatter as the default export
class Formatter {
	formatCurrency(amount: number): string {
		return formatCurrency(amount)
	}

	formatDate(date: Date): string {
		return formatDate(date)
	}
}
