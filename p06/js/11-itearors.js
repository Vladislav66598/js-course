const tags = ['usb', 'rgb']
const it = tags[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())

const cart = {
    items: [
        {name: 'мышь',price: 790, qty: 2},
        {name: 'коврик', price: 790, qty: 1},
    ],
    [Symbol.iterator]() {
        let index = 0
        const items = this.items
        return {
            next() {
                if(index < items.length) {
                    const item = items[index++]
                    return {value: `${item.name} x${item.qty} =${item.price} * ${item.qty}`, done: false}
                }
                return {value: undefined, done: true}
            },
        }
    },
}
for(const line of cart) console.log(line)
console.log([...cart])
