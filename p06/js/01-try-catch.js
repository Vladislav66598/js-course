console.log('начало программы')
const broken = JSON.parse('{name: "мышь"}')
console.log('эта строка не выполнится')

try {
    console.log('пробуем разобрать JSON')
    const product = JSON.parse('{ name: "мышь" }')
    console.log('эта строка не выполнится:', product)
} catch (err) {
    console.log('перехвачена ошибка:', err.name)
    console.log('сообщение:', err.message)
}
console.log('программа продолжает работу')

function loadData(text) {
    try {
        const data = JSON.parse(text)
        return 'Загружено: ' + data.name
    } catch (err) {
        return 'Ошибка: ' + err.name
    } finally {
        console.log('finally: скрываем индикатор загрузки')
    }
}
console.log(loadData('{"name": "Клавиатура"}'))
console.log(loadData('не JSON'))

function isValidJSON(text) {
    try {
        JSON.parse(text)
        return true
    } catch {
        return false
    }
}
console.log(isValidJSON('[1, 2]'), isValidJSON('[1, 2'))

