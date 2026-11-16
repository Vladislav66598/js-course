class Cart {
    #items = []

    static MAX_ITEMS = 10

    add(product, quantity = 1) {
        const existingItem = this.#items.find(
            item => item.product.id === product.id
        )

        if (existingItem) {
            existingItem.quantity += quantity
            return
        }

        if (this.#items.length >= Cart.MAX_ITEMS) {
            console.log('Корзина заполнена')
            return
        }

        this.#items.push({
            product,
            quantity
        })
    }

    remove(productId) {
        this.#items = this.#items.filter(
            item => item.product.id !== productId
        )
    }

    changeQty(productId, quantity) {
        const item = this.#items.find(
            item => item.product.id === productId
        )

        if (!item) return

        if (quantity <= 0) {
            this.remove(productId)
            return
        }

        item.quantity = quantity
    }

    get total() {
        return this.#items.reduce(
            (sum, item) => sum + item.product.price * item.quantity,
            0
        )
    }

    get count() {
        return this.#items.reduce(
            (sum, item) => sum + item.quantity,
            0
        )
    }
}

// Проверка
const cart = new Cart()

const keyboard = { id: 1, title: 'Клавиатура', price: 1250 }
const mouse = { id: 2, title: 'Мышь', price: 790 }

cart.add(keyboard, 2)
cart.add(mouse, 1)

console.log(cart.total)
console.log(cart.count)

cart.changeQty(1, 1)
console.log(cart.total)

cart.remove(2)
console.log(cart.total)