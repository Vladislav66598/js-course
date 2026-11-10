const CartModule = (function () {
    const items = [];

    return {
        add(item) {
            items.push(item);
        },

        remove(name) {
            const index = items.findIndex(it => it.name === name);

            if (index !== -1) {
                items.splice(index, 1);
            }
        },

        total() {
            let sum = 0;

            for (const it of items) {
                sum += it.price;
            }

            return sum;
        },

        items() {
            return [...items];
        }
    };
})();

CartModule.add({ name: 'Клавиатура', price: 1250 });
CartModule.add({ name: 'Мышь', price: 790 });

console.log('Товары:', CartModule.items());
console.log('Сумма:', CartModule.total());

CartModule.remove('Мышь');

console.log('После удаления:', CartModule.items());
console.log('Новая сумма:', CartModule.total());