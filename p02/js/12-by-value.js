function increaseNumber(n) {
    n = n + 1
    console.log('внутри функции n =', n)
}
let qty = 1
increaseNumber(qty)
console.log('снаружи qty =', qty)

function increaseOty(item) {
    item.qty = item.qty + 1
}

const line = {name: 'мышь', qty: 1}
increaseOty(line)
console.log('после вызова:', line)

function replaceItem(item) {
    item = {name : 'новый товар', qty: 99}
}

replaceItem(line)
console.log('после replaceItem:', line)

const withIncreaseOty = (item) => ({...item, qty:item.qty + 1})

const before = {name: 'клавиатура', qty: 1}
const after = withIncreaseOty(before)
console.log('before:', before)
console.log('after:', after)
console.log('это один объект?', before === after)