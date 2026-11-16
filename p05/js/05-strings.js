const name = 'клавиатура'
console.log(name.length, name[0], name.at(-1))
const changed = name
name[0] = 'K'
console.log(name)
console.log(name.toUpperCase(), name)
console.log(name[0].toUpperCase() + name.slice(1))  

const title = '     беспроводная мышь Logitech M185'
const clean = title.trim()
console.log(`[${clean}]`)
console.log(clean.includes('мышь'), clean.startsWith('бес'), clean.endsWith('185'))
console.log(clean.indexOf('мышь'), clean.indexOf('клавиатура'))
console.log(clean.slice(13, 17), clean.slice(-4))

const csv = 'Мышь;790;Электроника'
const parts = csv.split(';')
console.log(parts)
console.log(parts.join(' | '))
console.log('ab'.repeat(3), '7'.padStart(3, '0'), 'да-да-да'.replaceAll('да', 'нет'))
console.log('ёж' < 'яблоко', 'Яблоко'.localeCompare('ёж', 'ru'))
