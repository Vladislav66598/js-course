console.log(Number.isInteger(5), Number.isInteger(5.5), Number.isInteger('5'))
console.log(Number.isSafeInteger(2 ** 53), Number.isSafeInteger(2 ** 53 - 1))
console.log(Number.isFinite(1 / 0), Number.isFinite('42'), isFinite('42'))
console.log(Number.MAX_SAFE_INTEGER, Number.EPSILON)

const a = 0.1 + 0.2
console.log(a === 0.3, Math.abs(a - 0.3) < Number.EPSILON)

function toKopecks(rubles) {
    return Math.round(Number((rubles * 100).toPrecision(15)))
}
function formatRub(kopecks) {
    return (kopecks / 100).toFixed(2) + ' ₽'
}
console.log(toKopecks(1.005), formatRub(toKopecks(1.005)))
console.log(formatRub(toKopecks(0.1) + toKopecks(0.2)))

