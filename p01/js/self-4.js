function getStatusSwitch(code){
    switch(code){
        case 0 : return 'новый'
        case 1 : return 'обработке'
        case 2 : return 'оплачен'
        case 3 : return 'отправлен'
        case 4 : return 'доствлен'
        default: return 'неизвестный статус'
    }
}

function getStatusTernary(code){
    return code === 0 ? 'новый'
    : code === 1 ? 'в обработке'
    : code === 2 ? 'оплачен'
    : code === 3 ? 'отправлен'
    : code === 4 ? 'доставлен'
    : 'неизвестный статус'
}

const statuses = {
    0: 'новый',
    1: 'в обработке',
    2: 'оплачен',
    3: 'отправлен',
    4: 'доставлен'
}
function getStatusObject (code){
    return statuses[code] ?? 'неизвестный статус'
}

console.log(getStatusSwitch(0)) 
console.log(getStatusTernary(2))
console.log(getStatusObject(4))