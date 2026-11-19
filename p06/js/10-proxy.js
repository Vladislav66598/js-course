const product = { name: 'мышь', price: 790 }
const logged = new Proxy(product, {
    get(target, key) {
        console.log(`чтение ${String(key)}`)
        return target[key]
    },
    set(target, key, value) {
        console.log(`запись ${String(key)} = ${value}`)
        target[key] = value
        return true
    },
})
logged.price = 750
console.log('цена:', logged.price)
console.log('исходный объект тоже изменился:', product.price)

function validated(obj) {
    return new Proxy(obj, {
        set(target, key, value) {
            if (key === 'price' && (typeof value !== 'number' || value < 0)) {
                throw new TypeError(`недопустимая цена: ${value}`)
            }
            target[key] = value
            return true
        },
    })
}
const keyboard = validated({ name: 'клавиатура', price: 1250 })
keyboard.price = 1100
try {
    keyboard.price = -5
} catch (e) {
    console.log(e.name, e.message)
}
console.log('цена осталась:', keyboard.price)

function render(state) {
    const app = document.getElementById('app')
    app.innerHTML = `<h2>Корзина</h2><p>Товаров: ${state.items.length}, ` +
        `сумма: ${state.items.reduce((s, i) => s + i.price, 0)} ₽</p>`
    console.log('render: товаров', state.items.length)
}
 
function reactive(initial, onChange) {
    return new Proxy(initial, {
        set(target, key, value) {
            target[key] = value
            onChange(target) // перерисовать при любом изменении
            return true;
        },
    })
}
 
const state = reactive({ items: [] }, render)
render(state)
state.items = [...state.items, { name: 'мышь', price: 790 }]
state.items = [...state.items, { name: 'коврик', price: 350 }]

state.items.push({ name: 'кабель', price: 200 });
console.log('после push в массиве', state.items.length, 'товара, но render не вызывался')

