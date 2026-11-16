const electronics = ['клавиатура', 'мышь']
const office = ['бумага', 'ручка']
const all = [...electronics, 'коврик', ...office]
console.log(all)
 
const copy = [...electronics]
copy.push('наушники')
console.log(electronics, copy)

const prices = [990, 1250, 430, 2100]
console.log(Math.max(prices))
console.log(Math.max(...prices), Math.min(...prices))

const cart = [{name : 'мышь', qty: 1}]
const cartCopy = [...cart]
cartCopy[0].qty = 5
console.log('оригинал:', cart[0].qty, 'копия:', cartCopy[0].qty)
console.log(cart === cartCopy, cart[0] === cartCopy[0])

const [first, second, ...rest] = prices
console.log(first, second, rest)
 
let x = 1, y = 2;
[x, y] = [y, x];
console.log('x =', x, 'y =', y);
