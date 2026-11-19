const obj = {}
obj[1] = 'число'
obj['1'] = 'строка'
console.log('объект:', Object.keys(obj), obj[1])
 
const map = new Map()
map.set(1, 'число')
map.set('1', 'строка')
console.log('Map:', map, map.get(1), map.size)

const cart = new Map()
function add(id, qty = 1) {
    cart.set(id, (cart.get(id) ?? 0) + qty)
}
add(101); add(205, 2); add(101)
console.log(Object.fromEntries(cart))
for (const [id, qty] of cart) console.log(`товар ${id}: ${qty} шт.`)
cart.delete(205)
console.log('после удаления позиций в корзине:', cart.size, '| has 205?', cart.has(205))

const mouse = { name: 'мышь' }
const views = new Map([[mouse, 15]])
console.log('просмотров у', mouse.name, views.get(mouse))
 
const prices = { mouse: 790, pad: 350 }
const priceMap = new Map(Object.entries(prices))
priceMap.set('cable', 200)
console.log(Object.fromEntries(priceMap))


