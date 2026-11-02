
const prices = [500, 1200, 850, 1500, 700, 2000, 950, 1100]

let sum = 0;
let max = prices[0]

for (let i = 0; i < prices.length; i++) {
    sum += prices[i];

    if (prices[i] > max) {
        max = prices[i];
    }
}

console.log('Сумма цен:', sum)
console.log('Максимальная цена:', max)

const average = sum / prices.length
console.log('Средняя цена:', average)

console.log('Цены дороже средней:')

for (let i = 0; i < prices.length; i++) {
    if (prices[i] > average) {
        console.log(prices[i])
    }
}

let index = -1

for (let i = 0; i < prices.length; i++) {
    if (prices[i] > 1000) {
        index = i
        break
    }
}

console.log('Индекс первой цены выше 1000:', index)
