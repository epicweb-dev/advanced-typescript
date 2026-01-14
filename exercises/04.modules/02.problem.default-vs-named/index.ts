// Default vs Named Exports

// 🐨 Import the named exports: formatCurrency and formatDate
// 💰 import { formatCurrency, formatDate } from './utils'
import { formatCurrency, formatDate } from './utils.ts'

// 🐨 Import the default export: Formatter
// 💰 import Formatter from './utils'
//    Or: import { default as Formatter } from './utils'
import Formatter from './utils.ts'

console.log(formatCurrency(99.99))
console.log(formatDate(new Date()))

const formatter = new Formatter()
console.log(formatter.formatCurrency(199.99))
console.log(formatter.formatDate(new Date()))
