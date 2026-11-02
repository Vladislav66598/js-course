const price = 10000000
const discount = 15
const count = 3

const discountAmount = price * discount / 100
const finalPrice = price - discountAmount
const totalPrice = finalPrice * count

console.log('цена со скидкой:', (finalPrice/100).toFixed(2))
console.log('сумма за 3 штуки:', (totalPrice / 100).toFixed(2))

console.log(0.1 + 0.2)
console.log(0.1 + 0.2 === 0.3)