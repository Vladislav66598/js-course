const arr = [3, 1, 2];

//push()
const a1 = [...arr];
a1.push(4);
console.log('push:', a1);

// sort()
const a2 = [...arr];
a2.sort();
console.log('sort:', a2);

// splice()
const a3 = [...arr];
a3.splice(1, 1);
console.log('splice:', a3);

// map()
const a4 = [...arr];
const resultMap = a4.map(x => x * 2);
console.log('map:', a4);
console.log('map result:', resultMap);

// filter()
const a5 = [...arr];
const resultFilter = a5.filter(x => x > 1);
console.log('filter:', a5);       
console.log('filter result:', resultFilter);

// slice()
const a6 = [...arr];
const resultSlice = a6.slice(0, 2);
console.log('slice:', a6); 
console.log('slice result:', resultSlice); 

// concat()
const a7 = [...arr];
const resultConcat = a7.concat([4, 5]);
console.log('concat:', a7);       
console.log('concat result:', resultConcat); 

// toSorted()
const a8 = [...arr];
const resultSorted = a8.toSorted();
console.log('toSorted:', a8);       
console.log('toSorted result:', resultSorted); 
