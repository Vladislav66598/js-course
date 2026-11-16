const a = [1, 2, 3]
const b = new Array(3)
const c = new Array(3, 4)
const d = Array.of(3)
console.log(a, c, d)
console.log(b.length, b[0], 0 in b)

console.log(Array.from('мышь'))
console.log(Array.from({ length: 5 }, (_, i) => i * i))
console.log(Array.from(new Set([3, 1, 3, 2, 1])))

const prices = [990, 1250, 430, 2100]
prices[6] = 500
console.log(prices.length, prices[5], 5 in prices)
prices.length = 2
console.log(prices.length, prices)
console.log(Array.isArray(prices), typeof prices)