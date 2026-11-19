// демонстрация проблемы toFixed()

console.log((1.005).toFixed(2))

// функция округления денег

function roundMoney(value) {
    const kopecks = Math.round(value * 100)

    return kopecks / 100
}

console.log(roundMoney(1.005))
console.log(roundMoney(10.456))
console.log(roundMoney(99.999))