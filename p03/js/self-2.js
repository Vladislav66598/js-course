
const product = {
    name: 'клавиатура',
    price: 1250,
    dimensions: {
        width: 44,
        height: 3
    },
    tags: ['механическая', 'USB', 'игровая']
};

// Поверхностное копирование
const copy1 = { ...product };

// Копирование через Object.assign
const copy2 = Object.assign({}, product);

// Глубокое копирование через structuredClone
const copy3 = structuredClone(product);

copy1.dimensions.width = 50;
copy2.dimensions.width = 60;
copy3.dimensions.width = 70;

console.log('Оригинал:', product.dimensions.width);
console.log('Spread:', copy1.dimensions.width);
console.log('Object.assign:', copy2.dimensions.width);
console.log('structuredClone:', copy3.dimensions.width);
