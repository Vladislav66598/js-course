const processed = new WeakSet()
const order1 = { id: 1}
const order2 = { id: 2}

function processOrder(order) {
    if (processed.has(order)) return `заказ ${order.id} уже обработан`
    processed.add(order)
    return `обрабатывем заказ ${order.id}`
}
console.log(processOrder(order1))
console.log(processOrder(order1))
console.log(processOrder(order2))
console.log(processed)

console.log('size:', processed.size, '| forEach:', typeof processed.forEach)
try {
    processed.add(42)
} catch (e) {
    console.log(e.name, e.message)
}

