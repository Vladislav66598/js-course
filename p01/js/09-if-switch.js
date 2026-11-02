const orderSum = 7400
let discountPercent

if (orderSum >= 10000){
    discountPercent = 10
} else if (orderSum >= 5000){
    discountPercent = 5
}else {
    discountPercent = 0
}
console.log(`сумма ${orderSum}, скидка ${discountPercent}%`)

function statusText (code){
    switch(code){
        case 0: return 'новый'
        case 1: return 'оплачен'
        case 2: return 'отправлен'
        default: return 'неизвестный статус'
    }
}
console.log(statusText(1), '|', statusText(5), '|', statusText('1'))

function dayType (day){
    let result = ''
    switch(day){
        case 'сб':
        case 'вс':
            result = 'выходной'
            break
        case 'пт' :
            result = 'короткий день, '
            default:
                result += 'рабочий'
    }
    return result
}
console.log(dayType('вс'), '|', dayType('пт'), '|', dayType('ср'))