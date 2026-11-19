// стек вызовов
function first() {
    second()
}
function second() {
    third()
}
function third() {
    fourth()
}
function fourth() {
    throw new Error('что-то пошло не так')
}
try {
    first()
} catch (error) {
    console.log('стек вызовов:')
    console.log(error.stack)

    const errorLine = error.stack
        .split('\n')
        .find(line => line.includes('fourth'))

    console.log('место ошибки:', errorLine)
}

// функция safe(fn)

function safe(fn) {
    try {
        return {
            ok: true,
            value: fn(),
            error: null
        }
    } catch (error) {
        return {
            ok: false,
            value: null,
            error: error
        }
    }
}

// проверка safe(fn)

function sum(a, b) {
    return a + b
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('на ноль делить нельзя')
    }

    return a / b
}

console.log('успешное выполнение:')
console.log(safe(() => sum(5, 3)))

console.log('выполнение с ошибкой:')
console.log(safe(() => divide(10, 0)))