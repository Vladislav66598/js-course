let formatPrice = (p) => p + 'руб.';
console.log(formatPrice(100))

formatPrice = (p) => p.toFixed(2) + '₽';
console.log(formatPrice(100))

let showWelcome = function() {
    console.log('первый визит: покажем подсказки')
    showWelcome = function(){
        console.log('повторный визит: подсказки не нужны')
    }
}
showWelcome()
showWelcome()
showWelcome()