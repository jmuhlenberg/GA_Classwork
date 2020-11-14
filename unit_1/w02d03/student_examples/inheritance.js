//OOP Inheritance


//Make a class inherit attributes from a "parent class"
class Person {
  constructor(name, age, eyes, hair, lovesCats = false, isALynx) {
    this.legs = 2
    this.arms = 2
    this.name = name
    this.age = age
    this.eyes = eyes
    this.hair = hair
    this.lovesCats = lovesCats
    this.isALynx = isALynx || false
  }
  greet(otherPerson) {
    console.log('hi ' + otherPerson + '!')
  }
  classyGreeting(otherClassyPerson) {
    console.log('Greetings ' + otherClassyPerson.name + '!')
  }
  setHair(hairColor) {
    this.hair = hairColor
  }
  walk() {
    console.log('I hate when Burt has repossessed my car.')
  }
}
const marvelPerson = new Person('Carol Danvers', 30, 'brown', 'blonde')
//console.log(marvelPerson)

class SuperHero extends Person {
  constructor(name, age, eyes, hair){ //takes in these arguments
    super(name, age, eyes, hair) //sends them to the parent class constructor
    this.superPowers = [      //adds these super powers to each SuperHero class
      'flight',
      'superhuman strength',
      'energy blasts',
      'energy absorption',
      'ability augmentation',
      'super-speed',
      'enhanced hearing',
      'nigh-invulnerability'
    ]
  }
  fly(){
    console.log('Up up and away!');
  }
  greet(otherPerson){   //overriding previous functionality
    console.log(`Greetings Earthl- Oops, I mean ${otherPerson}`);
  }
  walk(){
    super.walk()
    this.fly()
  }
}

const captainMarvel = new SuperHero('Carol Danvers', 30, 'brown', 'blonde') //requires all the variables that are necessary from the Person class
// console.log(captainMarvel)
// captainMarvel.walk()
// captainMarvel.fly()


///And we can override previous functionality:
//captainMarvel.greet('Bob')

//We can even reference the parent class' method and extend its original functionality:
//captainMarvel.walk()

//This is the most useful on the constructor
console.log(captainMarvel)
//super is another special keyword/function. Try misspelling it - and you'll see it won't have the same functionality.
