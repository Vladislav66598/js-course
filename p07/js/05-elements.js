const item = document.querySelector('[data-id="1"]')
console.log('textContent:', item.textContent)
console.log('innerText:', item.innerText)
console.log('innerHTML:', item.innerHTML)
console.log('outerHTML:', item.outerHTML)

document.getElementById('title').textContent = 'Каталог <b>со скидками</b>'
document.querySelector('.note').innerHTML = 'Цены указаны <b>с НДС</b>.'

const link = document.querySelector('.menu a')
console.log(link.tagName, link.id === '', link.className, link.href)
console.log(item.tagName, item.dataset.price, typeof item.dataset.price)


