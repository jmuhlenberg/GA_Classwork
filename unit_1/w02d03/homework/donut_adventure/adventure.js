//console.log('hi');

/*
class Denizen{
  constructor(name, side){
  this.name = name
  this.health = 100
  this.side = side
  }
}
*/

class Hero {
  constructor(name){
    this.name = name
    this.health = 100
    this.weapons = {sprinkleSpray: 5, sugarShock: 10}
    this.catchPhrases = ['i\'m fresher than day old pizza', 'you can\'t count my calories']
  }
  talkSass(){
    console.log(this.catchPhrases[Math.floor(Math.random()*(this.catchPhrases.length))]);
  }
  announceHealth(){
    console.log(this.health);
  }
  fight(target){
    console.log('i\'m ready to rumble');
    let randomNum = Math.floor(Math.random()*2)
    if(randomNum === 0){
      console.log(`${this.name} used Sprinkle Spray. It did ${this.weapons.sprinkleSpray} damage!`)
      target.health -= this.weapons.sprinkleSpray
    }else{
      console.log(`${this.name} used  Sugar Shock. It did ${this.weapons.sugarShock} damage!`)
      target.health -= this.weapons.sugarShock
    }
  }
}

const doughie = new Hero('Doughie')
// console.log(doughie.catchPhrases);
// console.log(doughie.catchPhrases.length)
//doughie.talkSass()

class Enemy{
  constructor(name){
    this.name = name
    this.health = 100
    this.weapons = {pepperoniStars: 5, cheeseGrease: 10}
    this.catchPhrases = ['i\'m youtube famous', 'i\'m more dangerous than an uncovered sewer']
  }
  talkSmack(){
    console.log(this.catchPhrases[Math.floor(Math.random()*(this.catchPhrases.length))]);
  }
  announceHealth(){
    console.log(this.health);
  }
  fight(target){
    console.log('i\'m gonna flatten you like a slice of pepperoni!');
    let randomNum = Math.floor(Math.random()*2)
    if(randomNum === 0){
      console.log(`${this.name} used Pepperoni Stars. It did ${this.weapons.pepperoniStars} damage!`)
      target.health -= this.weapons.pepperoniStars
    }else{
      console.log(`${this.name} used  Cheese Grease. It did ${this.weapons.cheeseGrease} damage!`)
      target.health -= this.weapons.cheeseGrease
    }
  }
}

const pizzaRat = new Enemy('Pizza Rat')
//console.log(pizzaRat);

// doughie.talkSass()
// pizzaRat.talkSmack()
// doughie.announceHealth()
// pizzaRat.announceHealth()
// doughie.fight(pizzaRat)
// console.log(pizzaRat);



//===================================
//      Now, they can fight!
//===================================

doughie.talkSass()
pizzaRat.talkSmack()
doughie.announceHealth()
pizzaRat.announceHealth()

pizzaRat.fight(doughie)
doughie.fight(pizzaRat)

pizzaRat.announceHealth()
doughie.announceHealth()
