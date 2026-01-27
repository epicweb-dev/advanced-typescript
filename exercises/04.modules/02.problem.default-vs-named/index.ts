// Default vs Named Exports

// 🐨 Import the named exports: formatCurrency and formatDate
// 💰 Import the named exports
import { formatCurrency, formatDate } from './utils.ts'

// 🐨 Import the default export: Formatter
// 💰 Import the default export
import Formatter from './utils.ts'

console.log(formatCurrency(99.99))
console.log(formatDate(new Date()))

const formatter = new Formatter()
console.log(formatter.formatCurrency(199.99))
console.log(formatter.formatDate(new Date()))

// 🐨 Export your imports so we can verify your work
