// 1 - applyDiscount - расчет скидки
// function declaration - уместна для обычных самостоятельных функций
function applyDiscount(price, percent = 0) {
    return price - price * percent / 100
}
console.log('объявление:', applyDiscount(1000, 20))

// function expression - уместна, когда функцию нужно сохранить в переменной
const applyDiscountExpr = function(price, percent = 0){
    return price - price * percent/100
}
console.log('функциональное выражение:', applyDiscountExpr(1000, 20))

// arrow function - уместна для коротких функций и callback-функций
const applyDiscountArrow = (price, percent) => {
    return price - price * percent / 100
}
console.log('стрелочная функция:', applyDiscountArrow(1000, 20))

// withVat - расчет цены с ндс
// function declaration
function withVat (price, rate = 20) {
    return price + price * rate / 100
}
console.log('объявление:',withVat(1000))

// function expression
const withVatExpr = function(price, rate = 20){
    return price + price * rate / 100
}
console.log('функциональное выражение:', withVatExpr(1000))

// arrow function
const withVatArrow = (price, rate = 20) => {
    return price + price * rate / 100
}
console.log('стрелочная функция:', withVatArrow(1000))

// format price - форматирование цены
// declaration
function formatPrice(value){
    return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value) + '₽'
}
console.log('объявление:', formatPrice(1250.5))

//expression
const formatPriceExpr = function(value){
    return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value) + '₽'
}
console.log('функциональное выражение:', formatPriceExpr(1250.5))

// arrow function
const formatPriceArrow = (value) => {
    return new Intl.NumberFormat('ru-RU', {
       minimumFractionDigits: 2,
       maximumFractionDigits: 2
    }).format(value) + '₽'
}
console.log('стрелочная функция:', formatPriceArrow(1250.5))