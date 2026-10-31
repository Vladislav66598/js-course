console.log(typeof 42);              // число
console.log(typeof 'Клавиатура');    // строка
console.log(typeof true);            // логический
console.log(typeof undefined);       // не задано
console.log(typeof null);            // пусто
console.log(typeof 12345678901234567890n); // большое целое
console.log(typeof Symbol('id'));    // символ
console.log(typeof { name: 'Мышь' }); // объект

let value = 10;
console.log(value, typeof value);
value = 'десять';
console.log(value, typeof value);

console.log(1 / 0, -1 / 0);
console.log('abc' * 2);
console.log(typeof NaN);
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740992 + 1); // точность потеряна
console.log(9007199254740992n + 1n);


const name = 'Клавиатура';
const model = "K-120";
const price = 1250;
const line = `${name} ${model} стоит ${price} ₽`;
console.log(line);
console.log(`Через год: ${price * 1.1} ₽`);

let coupon;            // ещё не задано
let manager = null;    // известно, что менеджера нет
console.log(coupon, manager);
console.log(typeof [1, 2, 3], Array.isArray([1, 2, 3]));
