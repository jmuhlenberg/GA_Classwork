//========================================
//  Section 3 Array Methods w/ Callbacks
//========================================

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = [
  'The',
  'quick',
  'brown',
  'fox',
  'jumps',
  'over',
  'the',
  'lazy',
  'dog',
  'ldkfaukdsfudgfsk',
  'k'
]

//Every
//console.log(nums.every(index => index>=0))

//console.log(panagram.every(word => word.length < 8));


//Filter
//console.log(nums.filter(index => index<4))

//console.log(panagram.filter(word => word.length%2 === 0));


//Find
//console.log(nums.find(index => index/5 === 1));

//console.log(panagram.find(word => word.length > 5));

//Find Index
//console.log(nums.findIndex(index => index%3 === 0));

//console.log(panagram.findIndex(word => word.length<2));
//panagram.findIndex(word => console.log(word.length<2)); // <= this checks the trueness of the argument.


//For Each
// nums.forEach(index => console.log(index*3))

//panagram.forEach(word => console.log(word+'!'));
//panagram.forEach(word => console.log(`${word}`);)

//Map
//console.log(nums.map(index => index*100));

//console.log(panagram.map(word => word.toUpperCase()));


//Some
//console.log(nums.some(index => index/7));

//console.log(panagram.some(word => word.includes('a')));
