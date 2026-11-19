// корзина с итератором

const cart = {
    items: new Map(),

    add(id, qty = 1) {
        this.items.set(id, (this.items.get(id) ?? 0) + qty)
    },

    [Symbol.iterator]() {
        return this.items[Symbol.iterator]()
    }
}

cart.add(101, 2)
cart.add(205, 1)
cart.add(310, 3)

for (const [id, qty] of cart) {
    console.log(`Товар ${id}: ${qty} шт.`)
}


// генератор paginate()

function* paginate(items, size) {
    for (let i = 0; i < items.length; i += size) {
        yield items.slice(i, i + size)
    }
}

const products = [
    'Мышь',
    'Клавиатура',
    'Монитор',
    'Наушники',
    'Коврик',
    'Колонки',
    'Микрофон'
]

for (const page of paginate(products, 3)) {
    console.log('Страница:', page)
}