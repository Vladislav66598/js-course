const id1 = Symbol('id')
const id2 = Symbol('id')
console.log(typeof id1, id1.description)
console.log('равны?', id1 === id2)

const INTERNAL = Symbol('internal')
const product = { name: 'мышь', price: 790, [INTERNAL]: 'служебная метка' }
console.log(Object.keys(product))
console.log(JSON.stringify(product))
for (const key in product) console.log('for..in:', key)
console.log('по символу:', product[INTERNAL])
console.log(Object.getOwnPropertySymbols(product))

console.log(Symbol.for('app.cart') === Symbol.for('app.cart'))
console.log(Symbol.keyFor(Symbol.for('app.cart')))
console.log(typeof Symbol.iterator, Symbol.iterator.toString())


