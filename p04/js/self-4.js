class CartItem {
    constructor(product, qty = 1) {
        this.product = product
        this.qty = qty
    }

    set qty(value) {
        if (value < 1) {
            throw new RangeError('Количество товара должно быть не меньше 1')
        }

        this._qty = value
    }

    get qty() {
        return this._qty
    }
}

class Cart {
    #items = []

    add(product, qty = 1) {
        try {
            const item = new CartItem(product, qty)
            this.#items.push(item)
        } catch (error) {
            if (error instanceof RangeError) {
                console.log('Не удалось добавить товар:', error.message)
                return
            }

            throw error
        }
    }
}

const cart = new Cart()

const keyboard = { id: 1, title: 'Клавиатура', price: 1250 }

cart.add(keyboard, 2)
cart.add(keyboard, 0)

console.log('Программа продолжает работу')
