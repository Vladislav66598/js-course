const products = [
    { id: 1, name: 'клавиатура', category: 'электроника', price: 1250, stock: 5 },
    { id: 2, name: 'мышь', category: 'электроника', price: 790, stock: 0 },
    { id: 3, name: 'монитор', category: 'электроника', price: 15990, stock: 2 },
    { id: 4, name: 'блокнот', category: 'канцелярия', price: 150, stock: 40 },
    { id: 5, name: 'ручка', category: 'канцелярия', price: 60, stock: 100 },
    { id: 6, name: 'наушники', category: 'электроника', price: 2990, stock: 7 },
]

const names = products.map((p) => p.name)
console.log(names)
const withVat = products.map((p) => ({name: p.name, price: Math.round(p.price * 1.2) }))
console.log(withVat[0], withVat.length)

const inStock = products.filter((p) => p.stock > 0)
console.log('в наличии:', inStock.length, 'из', products.length)
console.log(products.find((p) => p.price > 2000).name)
console.log(products.findIndex((p) => p.name === 'ручка'))
console.log(products.find((p) => p.price > 100000))

console.log('есть дороже 10000?', products.some((p) => p.price > 10000))
console.log('все в наличии?', products.every((p) => p.stock > 0))
console.log('есть ручка?', names.includes('ручка'))

const stockValue = products.reduce((sum, p) => sum + p.price * p.stock, 0)
console.log('стоимость склада:', stockValue)
 
const byCategory = products.reduce((groups, p) => {
    groups[p.category] = groups[p.category] || []
    groups[p.category].push(p.name)
    return groups
}, {});
console.log(byCategory)
console.log(byCategory['канцелярия'])

const nums = [10, 9, 1, 100, 25]
console.log([...nums].sort())
console.log([...nums].sort((a, b) => a - b))
console.log([...nums].sort((a, b) => b - a))

const original = [3, 1, 2]
const sorted = original.toSorted((a, b) => a - b)
console.log('toSorted:', original, sorted)
original.sort((a, b) => a - b)
console.log('sort:', original)
 
const list = ['a', 'b', 'c', 'd']
console.log(list.slice(1, 3), list)
console.log(list.splice(1, 2), list)

const tags = [['usb', 'rgb'], ['usb'], ['bluetooth', 'rgb']];
console.log(tags.flat());
console.log([...new Set(tags.flat())]);
 
const expensive = products
    .filter((p) => p.category === 'электроника' && p.price > 1000)
    .toSorted((a, b) => b.price - a.price)
    .map((p) => `${p.name} (${p.price} ₽)`)
console.log(expensive)
console.log(products.at(-1).name)

