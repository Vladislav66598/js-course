for (const x of [2.5, 2.4, -2.5, -2.6]) {
    console.log(String(x).padStart(5), '| round', Math.round(x), '| floor', Math.floor(x),
        '| ceil', Math.ceil(x), '| trunc', Math.trunc(x))
}

const prices = [990, 1250, 430, 2100]
console.log('min', Math.min(...prices), 'max', Math.max(...prices))
console.log('abs', Math.abs(-15), 'pow', Math.pow(2, 8), 'sqrt', Math.sqrt(144))
console.log('PI', Math.PI.toFixed(4), 'диагональ 3x4:', Math.hypot(3, 4))
console.log('max пустого:', Math.max())

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
const rolls = []
for(let i = 0; i < 1000; i++) rolls.push(randomInt(1, 6 ))
console.log('все от 1 до 6:', rolls.every((n) => n => 1 && n <= 6))
console.log('встретились все значения:', new Set(rolls).size === 6)
