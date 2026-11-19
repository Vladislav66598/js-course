// объект и числовые ключи
const obj = {}
obj[1] = 'число'
obj['1'] = 'строка'

console.log('Объект:', Object.keys(obj), obj[1])

// Map и разные типы ключей
const map = new Map()
map.set(1, 'число')
map.set('1', 'строка')

console.log('Map:', map, map.get(1), map.size)

// корзина на Map
const cart = new Map()

function add(id, qty = 1) {
    cart.set(id, (cart.get(id) ?? 0) + qty)
}

add(101)
add(205, 2)
add(101)

console.log(Object.fromEntries(cart))

for (const [id, qty] of cart) {
    console.log(`товар ${id}: ${qty} шт.`)
}

cart.delete(205)

console.log(
    'после удаления позиции в корзине:',
    cart.size,
    '| has 205?',
    cart.has(205)
)

// объект в качестве ключа Map
const mouse = { name: 'мышь' }
const views = new Map([[mouse, 15]])

console.log('просмотров у', mouse.name, views.get(mouse))

// преобразование объекта в Map
const prices = { mouse: 790, pad: 350 }
const priceMap = new Map(Object.entries(prices))

priceMap.set('cable', 200)

console.log(Object.fromEntries(priceMap))

// уникальные теги товаров через Set
const products = [
    { id: 101, tags: ['электроника', 'компьютеры'] },
    { id: 205, tags: ['аксессуары', 'электроника'] },
    { id: 310, tags: ['компьютеры', 'игры'] }
];

const tags = new Set()

for (const product of products) {
    for (const tag of product.tags) {
        tags.add(tag)
    }
}

console.log('Уникальные теги:', tags)