class Cart {
    #items = [];

    #findIndex(name) {
        return this.#items.findIndex((i) => i.name === name);
    }
    add(name, price, qty = 1) {
        const index = this.#findIndex(name);
        if (index >= 0) {
            this.#items[index].qty += qty;
        } else {
            this.#items.push({ name, price, qty });
        }
    }
    remove(name) {
        const index = this.#findIndex(name);
        if (index >= 0) {
            this.#items.splice(index, 1);
        }
    }
    count() {
        return this.#items.length;
    }
    total() {
        return this.#items.reduce((sum, i) => sum + i.price * i.qty, 0);
    }
    static isCart(obj) {
        return #items in obj;
    }
}

const cart = new Cart();

cart.add('Клавиатура', 1250);
cart.add('Мышь', 790, 2);

console.log('позиций:', cart.count(), 'сумма:', cart.total());

console.log(cart.items);
console.log(Object.keys(cart));
console.log(JSON.stringify(cart));

cart.add('Мышь', 790);

console.log('позиций:', cart.count(), 'сумма:', cart.total());
cart.remove('Клавиатура');
console.log('после удаления:', cart.count(), cart.total());
console.log(Cart.isCart(cart), Cart.isCart({ items: [] }));