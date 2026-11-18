//Артикул: AB-12345
const articleRegex = /^[A-Z]{2}-\d{5}$/

const articles = [
    'AB-12345',
    'XY-98765',
    'CD-00001',
    'A-12345',
    'ABC-12345',
    'AB12345'
]

console.log('Проверка артикулов:')
articles.forEach(value => {
    console.log(value, articleRegex.test(value))
})


//Телефон: +7 (999) 123-45-67
const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/

const phones = [
    '+7 (999) 123-45-67',
    '+7 (912) 555-12-34',
    '+7 (900) 000-00-00',
    '8 (999) 123-45-67',
    '+7 999 123-45-67',
    '+7 (999) 1234567'
]

console.log('Проверка телефонов:')
phones.forEach(value => {
    console.log(value, phoneRegex.test(value))
})


// Email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const emails = [
    'user@mail.com',
    'test123@gmail.com',
    'name.surname@yandex.ru',
    'user@mail',
    '@gmail.com',
    'user mail@gmail.com'
]

console.log('Проверка email:')
emails.forEach(value => {
    console.log(value, emailRegex.test(value))
})