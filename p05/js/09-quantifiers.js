const phone = /^\+7 ?\(?\d{3}\)? ?\d{3}-?\d{2}-?\d{2}$/
const samples = ['+7 (999) 123-45-67', '+79991234567', '+7 999 1234567', '8 999 123-45-67', '+7 (99) 123-45-67']
for (const s of samples) {
    console.log(s.padEnd(20), phone.test(s))
}

const markup = '<b>Мышь</b> и <i>коврик</i>'
console.log(markup.match(/<.+>/g))
console.log(markup.match(/<.+?>/g))

