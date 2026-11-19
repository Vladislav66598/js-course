// дата заказа
const orderDate = new Date(2026, 10, 19)

// добавляем 3 рабочих дня
function addWorkingDays(date, days) {
    const result = new Date(date)

    let addedDays = 0

    while (addedDays < days) {
        result.setDate(result.getDate() + 1)

        const day = result.getDay()

        if (day !== 0 && day !== 6) {
            addedDays++
        }
    }

    return result
}

const deliveryDate = addWorkingDays(orderDate, 3)

// форматируем дату
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    return `${day}.${month}.${year}`
}

// считаем дни до конца месяца
const lastDayOfMonth = new Date(
    orderDate.getFullYear(),
    orderDate.getMonth() + 1,
    0
)

const daysLeft = lastDayOfMonth.getDate() - orderDate.getDate()

// выводим результаты
console.log('Дата заказа:', formatDate(orderDate));
console.log('Дата доставки:', formatDate(deliveryDate));
console.log('Дней до конца месяца:', daysLeft);