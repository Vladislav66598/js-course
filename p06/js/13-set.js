const tags = new Set(['usb', 'rgb', 'usb', 'wireless', 'rgb'])
console.log('размер:', tags.size, 'значения:', [...tags])
tags.add('usb')
tags.add('bluetooth')
console.log('has rgb?', tags.has('rgb'))
tags.delete('rgb')
console.log(tags)

const catalog = [
    { name: 'мышь', tags: ['usb', 'wireless'] },
    { name: 'клавиатура', tags: ['usb', 'rgb'] },
    { name: 'наушники', tags: ['wireless', 'bluetooth'] },
]
const allTags = new Set()
for (const p of catalog) for (const t of p.tags) allTags.add(t)
console.log('все теги:', [...allTags])
 
const ids = [3, 1, 3, 2, 1]
console.log('без повторов:', [...new Set(ids)])

const mouseTags = new Set(catalog[0].tags)
const headphoneTags = new Set(catalog[2].tags)
const common = [...mouseTags].filter((t) => headphoneTags.has(t))
const onlyMouse = [...mouseTags].filter((t) => !headphoneTags.has(t))
console.log('общие:', common, 'только у мыши:', onlyMouse)

const set = new Set()
set.add({ id: 1 })
set.add({ id: 1 })
console.log('объектов в Set:', set.size)



