// Default vs Named Exports

// 🐨 Bring formatCurrency and formatDate in from './utils.ts'
// @ts-expect-error - 💣 remove this comment when it passes
import { formatCurrency, formatDate } from './utils.ts'

// 🐨 Bring Formatter in from './utils.ts' as the default import
// @ts-expect-error - 💣 remove this comment when it passes
import Formatter from './utils.ts'

// console.log(formatCurrency(99.99))
// console.log(formatDate(new Date()))

const formatter = new Formatter()
// console.log(formatter.formatCurrency(199.99))
// console.log(formatter.formatDate(new Date()))

// 🐨 Export your imports so we can verify your work
// export { formatCurrency, formatDate, Formatter }
