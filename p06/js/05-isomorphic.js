function attempt(fn, ...args) {
    try {
        return [null, fn(...args)]
    } catch (err) {
        return [err, null]
    }
}
 
const [err1, cart] = attempt(JSON.parse, '{"items": [1, 2]}')
console.log('ошибка:', err1, 'корзина:', cart)
 
const [err2, broken] = attempt(JSON.parse, '{items')
if (err2) console.log('не удалось:', err2.name, '| результат:', broken)

function getEnvironment() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') return 'браузер'
    if (typeof process !== 'undefined' && process.versions?.node) return 'Node.js'
    return 'неизвестно'
}
console.log('код выполняется в окружении:', getEnvironment())
console.log('globalThis === window:', globalThis === window)

function describeError(err) {
    if (err instanceof Error) return `${err.name}: ${err.message}`
    return `Нестандартная ошибка: ${String(err)}`
}
for (const bad of [new TypeError('нет цены'), 'строка', 404]) {
    console.log(describeError(bad))
}
