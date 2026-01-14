// Default vs Named Exports

import Formatter, { formatCurrency, formatDate } from './utils.ts'

console.log(formatCurrency(99.99))
console.log(formatDate(new Date()))

const formatter = new Formatter()
console.log(formatter.formatCurrency(199.99))
console.log(formatter.formatDate(new Date()))
