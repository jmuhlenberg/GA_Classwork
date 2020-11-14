//====================================
//   Section 2 Combining Datatypes
//====================================

const crayonBox = [
  {name: 'apricot', position:0},
  {name: 'bluetiful', position:1},
  {name: 'cerulean', position:2},
  {name: 'scarlet', position:3}
]
//console.log(crayonBox[2].name);

const bottle = {
  cap: ['metal', 'plastic'],
  color: ['blue', 'white', 'red', 'green']
}
//console.log(bottle.color[1]);

const receipt = [
  {category: 'produce', isFruit: false, name: 'lettuce', price: 2.99}
]
//console.log(receipt[0].isFruit);

const apartmentBuilding = [
  ['Bob', 'Jean', 'Rhett', 'Link']
]
//console.log(apartmentBuilding[0][3]);

const knit = () => {
  return {item: 'scarf', size: '6ft', color: 'red', weave: false}
}
//console.log(knit().item);

const crayonSelector = () => {
  return {color: ['apricot', 'bluetiful', 'cerulean', 'scarlet']}
}
//console.log(crayonSelector().color[0]);

const powerButton = () => {
  return options = () => {
    console.log('select a song');
  }
}
//powerButton()()

//Model a vending machine
const vendingMachine = {
  snacks: [{type: 'chips', price: 1.99}, {type: 'cookies', price: 2.50}, {type: 'soda', price: 2.99}],
  vend : (position) => {
    position+1
    console.log(vendingMachine.snacks[position-1].type)
    console.log('$'+vendingMachine.snacks[position-1].price);
  }
}

//vendingMachine.vend(1)


//===============================
//        Callbacks
//===============================

const add = (num1, num2) => {
  return num1+num2
}

const subtract = (num1, num2) => {
  return num1-num2
}

const multiply = (num1, num2) => {
  return num1*num2
}

const divide = (num1, num2) => {
  return num1/num2
}

const calculate = (num1, num2, operator) => {
  console.log(operator(num1, num2))
}

// calculate(4, 9, add)
// calculate(1, 4, subtract)
// calculate(3, 7, multiply)
// calculate(2, 10, divide)

//Function definition placement

const bar = () => {
  console.log('bar here')
}
//bar()

const foo = () => {
  console.log('foo here')
}
//foo()

//Error reading
foo();

const foo ()=>{
    console.log('hi');
}
