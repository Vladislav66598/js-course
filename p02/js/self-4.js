function createCart() {
    const items = []

    return{
        add(item){
            items.push(item)
        },
        remove(name) {
        const index = items.findIndex(it => it.name === name);

        if (index !== -1) {
            items.splice(index, 1);
        }
        },
        total(){
            let sum = 0
            for(const it of items) sum += it.price
            return sum
        },
        items(){
            return[...items]
        }
    }
}
const cart = createCart();

cart.add({ name: 'Клавиатура', price: 1250 });
cart.add({ name: 'Мышь', price: 790 });

cart.remove('Мышь');

console.log(cart.items());
console.log(cart.total()); 

// Проверяем, что внешние изменения не затрагивают корзину
const externalItems = cart.items();

externalItems.push({ name: 'Монитор', price: 15000 });

console.log('Внешний массив:', externalItems);
console.log('Настоящая корзина:', cart.items());
console.log('Сумма корзины:', cart.total());