const link = document.querySelector('.menu a')
console.log('атрибут href:', link.getAttribute('href'))
console.log('свойство href:', link.href)
 
link.setAttribute('title', 'перейти в каталог');
link.setAttribute('target', '_blank')
console.log(link.hasAttribute('title'), link.outerHTML)
link.removeAttribute('target')
console.log(link.outerHTML)

const keyboard = document.querySelector('[data-id="1"]')
keyboard.dataset.stock = '12'
keyboard.dataset.oldPrice = '1500'
console.log(keyboard.outerHTML.split('>')[0] + '>')
console.log({ ...keyboard.dataset })
 
const total = [...document.querySelectorAll('.product')]
    .reduce((sum, el) => sum + Number(el.dataset.price), 0)
console.log('сумма цен:', total)

const btn = document.createElement('button')
btn.textContent = 'купить'
btn.disabled = true
document.getElementById('app').append(btn)
console.log(btn.outerHTML, btn.disabled)


