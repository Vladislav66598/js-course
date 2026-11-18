const order = new Date(2026, 8, 1, 14, 30)  // 1 сентября 2026, 14:30
console.log(order.toLocaleDateString('ru-RU'), order.toLocaleTimeString('ru-RU'))
console.log(new Date('2026-09-01').toISOString())
console.log(new Date(0).toISOString())
console.log(typeof Date.now(), Date.now() > 1.7e12)

console.log('год', order.getFullYear(), 'месяц', order.getMonth(), 'день', order.getDate())
const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
console.log('день недели:', order.getDay(), days[order.getDay()])

function addBusinessDays(date, count) {
    const result = new Date(date) // копия, исходную дату не меняем
    while (count > 0) {
        result.setDate(result.getDate() + 1)
        const day = result.getDay()
        if (day !== 0 && day !== 6) count--
    }
    return result
}
const friday = new Date(2026, 8, 4)
console.log('заказ:', friday.toLocaleDateString('ru-RU'), days[friday.getDay()])
const delivery = addBusinessDays(friday, 3)
console.log('доставка:', delivery.toLocaleDateString('ru-RU'), days[delivery.getDay()])

const start = new Date(2026, 8, 1)
const end = new Date(2026, 11, 31)
const MS_PER_DAY = 24 * 60 * 60 * 1000
console.log('дней до конца года:', Math.round((end - start) / MS_PER_DAY))
const lastDay = new Date(2026, 9, 0) // нулевой день октября
console.log('дней в сентябре:', lastDay.getDate())  

