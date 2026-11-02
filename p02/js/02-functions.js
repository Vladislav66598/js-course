function greet(){
    console.log('добро пожаловать в магазин!')
}
greet()
greet()

console.log(greet)
console.log(typeof greet)

const sayBye = function (){
    console.log('спасибо за покупку!')
}
sayBye()

const alsoBye = sayBye
alsoBye()
console.log(alsoBye === sayBye)

function repeat(items, action){
    for(let i = 0;i < items; i++){
        action()
    }
}
repeat(3, greet)