const cache = new WeakMap()
let calculations = 0
 
function priceWithVat(product) {
    if (cache.has(product)) return cache.get(product)
    calculations++
    const result = Math.round(product.price * 1.2)
    cache.set(product, result)
    return result
}
const monitor = { name: 'монитор', price: 15000 }
console.log(priceWithVat(monitor), priceWithVat(monitor), priceWithVat(monitor))
console.log('вычислений выполнено:', calculations)

const clicks = new WeakMap()
const button = document.createElement('button')
button.textContent = 'в корзину'
clicks.set(button, 0)
for (let i = 0; i < 3; i++) clicks.set(button, clicks.get(button) + 1)
console.log('кнопка нажата', clicks.get(button), 'раза')
console.log('у самой кнопки нет лишних свойств:', Object.keys(button))
