console.log('title:', document.title)
console.log('URL:', document.URL)
console.log('charset:', document.characterSet)
console.log('readyState:', document.readyState)
console.log('ссылок на странице:', document.links.length)

document.title = 'каталог (3 товара)'
console.log('новый title:', document.title)

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded, readyState:', document.readyState)
})
window.addEventListener('load', () => {
    console.log('load, readyState:', document.readyState)
})
console.log('конец скрипта')

