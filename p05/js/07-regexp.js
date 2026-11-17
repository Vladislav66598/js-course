const re1 = /мышь/
const re2 = new RegExp('мышь')
console.log(re1.test('беспроводная мышь') , re2.test('клавиатура'))
console.log(/мышь/.test('беспроводная МЫШЬ'), /мышь/i.test('беспроводная МЫШЬ'))

const query = 'мышь'
const dynamic = new RegExp(query, 'gi')
console.log(dynamic.source, dynamic.flags)
console.log(dynamic.test('мышь'), dynamic.lastIndex)
console.log(dynamic.test('мышь'), dynamic.lastIndex)
console.log(dynamic.test('мышь'), dynamic.lastIndex)
