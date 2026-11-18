function level3() { return null.price; }
function level2() { return level3(); }
function level1() { return level2(); }
 
try {
    level1()
} catch (err) {
    // уберём адрес сервера, чтобы строки были короче
    const lines = err.stack.replace(/https?:\/\/[^/]+\//g, '').split('\n')
    for (const line of lines) console.log(line)
}

function inner() {
    console.log('inner: начало');
    throw new Error('сбой в inner');
    console.log('inner: конец'); // недостижимо
}
function middle() {
    console.log('middle: до вызова')
    inner()
    console.log('middle: после вызова') // пропущено
}
function outer() {
    try {
        middle()
    } catch (e) {
        console.log('outer поймал:', e.message)
    }
}
outer();

function safe(fn, ...args) {
    try {
        return { ok: true, value: fn(...args) }
    } catch (error) {
        return { ok: false, error }
    }
}
console.log(safe(JSON.parse, '[1,2]'))
const r = safe(JSON.parse, '[1,')
console.log(r.ok, r.error.name)
