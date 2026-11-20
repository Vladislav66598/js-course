const title = document.getElementById('title')
title.style.color = '#1a73e8'
title.style.borderBottom = '2px solid #1a73e8'
title.style.paddingBottom = '4px'
console.log('style атрибут:', title.getAttribute('style'))
console.log('вычисленный размер шрифта:', getComputedStyle(title).fontSize)

const items = document.querySelectorAll('.product')
items[0].classList.add('selected')
items[1].classList.remove('sale')
items[2].classList.toggle('sale')
console.log(items[2].classList.contains('sale'), items[2].className)
 
const cheap = [...items].filter((el) => Number(el.dataset.price) < 500)
cheap.forEach((el) => el.classList.add('hidden'))

document.documentElement.style.setProperty('--accent', '#e53935')
title.style.color = 'var(--accent)'
console.log(getComputedStyle(document.documentElement).getPropertyValue('--accent'))


