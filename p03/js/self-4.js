function diff(before, after) {
    const changed = [];

    // Добавленные и изменённые свойства
    for (const [key, value] of Object.entries(after)) {
        if (before[key] !== value) changed.push(key);
    }

    // Удалённые свойства
    for (const key of Object.keys(before)) {
        if (!(key in after)) changed.push(key);
    }

    return changed;
}
const productBefore = {
    name: 'мышь',
    price: 790,
    stock: 10,
    color: 'чёрный'
};

const productAfter = {
    name: 'мышь',
    price: 690,
    color: 'белый',
    category: 'электроника'
};

console.log(diff(productBefore, productAfter));