// Explain why we need classes
// Sometimes we need to repetitively create new objects with the same attributes. Imagine we wanted to create a bunch of hotels for a boutique travel agency.

// We'd need at least:
// name
// location
// rating
// vacancies
// tags describing the hotel
// rooms (an array of objects with details of the rooms)

// Great! One object. How can we create another one? How about copy pasting, then changing all the details? Typing it all from scratch? What if someone makes a typo with a key? What if our boutique expands to 1000 hotels?

// There is a better way! We can create a class, which will be a blueprint or template for similar objects. Not only can we add data, we can also include functionality.

//Create a class to define the blueprint for creating objects
//capitalize the first letter of the variable so we know it's a class
class Person {
  constructor(name, age, eyes, hair, lovesCats = false, isLynx){    //add a constructor function, gets called once - each time the obj is created // add parameters to the constructor function to customize each object // setting some default values, lovesCats = false (new way)
    this.legs = 2
    this.arms = 2
    this.name = name
    this.age = age
    this.eyes = eyes
    this.hair = hair
    this.lovesCats = lovesCats
    this.isLynx = isLynx || false   // setting the default value as false (old way)
  }
  greet(otherPerson){   //add a function  //adding parameters
    console.log('hi! ' + otherPerson + '!');
  }
  classyGreeting(otherClassyPerson){    //objects interacting with other objects
    console.log('Greetings, '+otherClassyPerson.name+"!");
  }
  setHair(hairColor){     //defining a method to change hair color
    this.hair = hairColor
  }
  walk(){   //adding another function
    console.log("I hate when Burt has repossessed my car.");
  }
}
// now 'instantiate' or create new objects using this class. use the 'new' keyword by calling the class name like a function.
// const dud = new Person()
// const liz = new Person()
// console.log(dud);
// console.log(liz);
// console.log(typeof dud);
// console.log(typeof liz);

//Add methods to a class
// dud.greet()
// liz.greet()
// dud.greet('Liz')
// liz.greet('Dud')
// dud.greet('Alice')
// dud.walk()
// liz.greet('Alice')
// liz.walk()

//Set properties on an instance of a class
// console.log(dud);
// console.log(liz);
//console.log(dud);
//constructor is a special function. Try misspelling constructor (ie constr) and see if you still get the same results.
// - it does not produce the results at all.



//What is 'this'?
//Model a vending machine
//how it was likely done in the homework:
// const vendingMachine = {
//   snacks: [
//     {name: 'kitkat', price: 6},
//     {name: 'sun chips', price: 7},
//     {name: 'apple', price: 12}
//   ],
//   vend(input) {
//     console.log('vending', vendingMachine.snacks[input])
//   }
// }
//
// vendingMachine.vend(1)

//But now we are making new objects that can be named anything. So we need a way to say this object's snacks or this object's legs property - We need a pronoun, a generic term to refer to whatever the name of the object is.
const vendingMachine = {
  snacks: [
    {name: 'kitkat', price: 6},
    {name: 'sun chips', price: 7},
    {name: 'apple', price: 12}
  ],
  vend(input) {
    console.log('vending', this.snacks[input])
  }
}

//vendingMachine.vend(1)



//Make an instance of each class customizable
// const dud = new Person('Dud', 27, 'green', 'isLynx')
// const liz = new Person()
//console.log(dud)
//console.log(liz); //leaves the values as undefined < curious about how to set defaults



//Create default values
// const dud = new Person('Dud', 27, 'green', 'blonde')
// const liz = new Person('Liz', 29, 'brown', 'brown')
// console.log(dud)
// console.log(liz)



//Create methods to alter the properties of an instance
// dud.hair = 'supernova red'
// console.log(dud)

// But it's a nice practice to define a method that will alter that:
// const liz = new Person('Liz', 36, 'hazel', 'brown')
// console.log(liz)
// liz.setHair('chestnut with lowlights')
// console.log(liz)
//using this way.. everything is done with methods. other developers can quickly scan the class definition to determine what you'd like them to be able to do with the class.



//Objects interacting with other objects
const dud = new Person('Dud', 41, 'green', 'blonde', true, true)
const liz = new Person('Liz', 36, 'brown', 'brown')

dud.classyGreeting(liz)
liz.classyGreeting(dud)
