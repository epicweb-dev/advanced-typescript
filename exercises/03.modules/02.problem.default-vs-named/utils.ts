// Default vs Named Exports

// 🐨 Make formatCurrency available as a named import from this module
function formatCurrency(amount: number): string {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(amount)
}

// 🐨 Make formatDate available as a named import from this module
function formatDate(date: Date): string {
	return new Intl.DateTimeFormat('en-US').format(date)
}

// 🐨 Make Formatter the default export for this module
class Formatter {
	formatCurrency(amount: number): string {
		return formatCurrency(amount)
	}

	formatDate(date: Date): string {
		return formatDate(date)
	}
}
