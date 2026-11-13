function renderLine({ name, price, dimensions: { width = 0 } = {} }) {
    return `${name} — ${price} ₽, ширина: ${width}`;
}

// Первый товар — dimensions присутствует
const product1 = {
    name: 'Клавиатура',
    price: 1250,
    dimensions: {
        width: 45
    }
};

// Второй товар — dimensions отсутствует
const product2 = {
    name: 'Мышь',
    price: 790
};

console.log(renderLine(product1));
console.log(renderLine(product2));

// Получение email через optional chaining
const product = {
    name: 'Монитор'
};

const email = product?.supplier?.contact?.email ?? 'Email не указан';

console.log(email);