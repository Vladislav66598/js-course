function deepFreeze(obj) {
    Object.freeze(obj)
    for (const key of Object.keys(obj)) {
        if (
            obj[key] !== null &&
            typeof obj[key] === 'object' &&
            !Object.isFrozen(obj[key])
        ) {
            deepFreeze(obj[key])
        }
    }
    return obj;
}

const state = deepFreeze({
    cart: [],
    filters: {}
});

function addToCart(state, item) {
    const newState = {
        ...state,
        cart: [...state.cart, item]
    };

    return deepFreeze(newState);
}

// Проверка работы
const newState = addToCart(state, {
    id: 1,
    name: 'Клавиатура',
    price: 1250
});

console.log('Старое состояние:', state);
console.log('Новое состояние:', newState);

console.log('Старое состояние заморожено:', Object.isFrozen(state));
console.log('Новая корзина заморожена:', Object.isFrozen(newState.cart));
console.log('Новое состояние заморожено:', Object.isFrozen(newState));