//////////////////////////////////////////////////////
//                Space Battle                      //
//////////////////////////////////////////////////////


//==========================================
//                Classes
//==========================================

//general ship class
class SpaceShip {
  constructor(name){
  this.name = name
  this.hull = 0
  this.firepower = 0
  this.accuracy = 0
  }
  attack(enemy){
    let chance = Math.floor((Math.random()*10)+1)
    if(chance > this.accuracy){
      alert('The attack missed!');
      console.log('Our accuracy: '+chance);
    }else{
      enemy.hull -= this.firepower
      alert('We hit the enemy ship! Don\'t let up!');
      console.log('Our accuracy: '+chance);
    }
  }
}

//class for the user's ship
class HeroShip extends SpaceShip {
  constructor(name){
    super(name)
    this.hull = 20
    this.firepower = 5
    this.accuracy = 7 //using whole numbers instead of decimals
  }
  retreat(){
    let runAway = prompt('Commander are you sure you\'d like to run away like a coward?', 'yes / no');
    if(runAway == 'yes'){
      alert('The enemy out strategized us..');
    }else{
      alert('That\'s the spirit Commander!');
    }
  }
  giveStatus(){
    alert(`Commander, here is the damage report: ${this.hull}/20`)
  }
}

//class for the enemy alien ship
class AlienShip extends SpaceShip {
  constructor(name){
    super(name)
    this.hull = Math.floor(Math.random()*(7-3)+3)
    this.fullHull = this.hull
    this.firepower = Math.floor(Math.random()*(5-2)+2)
    this.accuracy = Math.floor(Math.random()*(9-6)+6) //using whole numbers instead of decimals
  }
  attack(hero){
    let chance = Math.floor((Math.random()*10)+1)
    if(chance > this.accuracy){
      alert('The enemy attack missed us!');
      console.log('Enemy accuracy: '+chance);
    }else{
      hero.hull -= this.firepower
      alert(`We were hit by the enemy ship! Our hull is at ${hero.hull}.`);
      console.log('Enemy accuracy: '+chance);
    }
  }
}

class AlienFactory{
  constructor(){
    this.fleet = []
  }
  generateAlienShip(name){
    const alienBattleShip = new AlienShip(name)
    this.fleet.push(alienBattleShip)
  }
  shipDestroyed(){
    this.fleet.shift()
  }
}

//==========================================
//                 Actions
//==========================================

//create a battle function so that while the enemy ship has health, the user continues to attack
const battle= (hero, enemy, fleet) => {
  let action = prompt('Commander, look ahead, it\'s an alien battleship! Shall we engage?', 'yes / no / stop')
  if (action == 'yes') {
    alert('Prepare for battle! Fire the lasers!')
    hero.attack(enemy)
    if(enemy.hull > 0){
      enemy.attack(hero)
      continueBattle(hero, enemy, fleet)
    }else{
      alert('We destroyed the enemy!')
      action = 'stop'
    }
  }else if(action == 'no'){
    hero.retreat()
    action = 'stop'
  }else{
    action = 'stop'
    alert('You have stoped the simulation.')
  }
}

const continueBattle = (hero, enemy, fleet) => {
  let action = null
  while(action != 'stop'){
    if (hero.hull > 0 && enemy.hull > 0){
      action = prompt(`Commander, shall we continue battle? Our current hull is at ${hero.hull}/20. The enemy is at ${enemy.hull}/${enemy.fullHull}`, 'yes / no / stop')
      if (action == 'yes') {
        alert('Continue the attack! Fire the lasers!')
        hero.attack(enemy)
        if(enemy.hull <= 0){
          alert('We destroyed the enemy ship! Champagne all around!')
          action = 'stop'
          hero.giveStatus()
          fleet.shipDestroyed()
          }else{
          enemy.attack(hero)
          continueBattle(hero, enemy, fleet)
          }
        }else{
        hero.retreat()
        action = 'stop'
        }
    }else if(hero.hull = 0){
      alert('The enemy bested us...')
      action = 'stop'
    }else{
      alert('We destroyed the enemy ship! Champagne all around!')
      action = 'stop'
    }
  }
}


const startGame = () => {
  let userShipName = prompt('Welcome Commander, please name your ship.', 'ship name')
  const goodGuy = new HeroShip(userShipName)
  alert(`The battleship ${goodGuy.name} has now been commissioned. We are setting a course for Meiser 64 the Evil Eye Galaxy. This area is cluttered with asteroids and alien ships. Be prepared for battle.`)

  // const badGuy = new AlienShip('Alien Destroyer')
  // battle(goodGuy, badGuy)

  // generate the alien factor
  const alienFactory = new AlienFactory

  //for loop to create 5 alien ships with different attributes
  for(i=0; i<5; i++){
    alienFactory.generateAlienShip('Alien Destroyer '+i)
  }

  //log ships
  console.log(goodGuy);
  console.log(alienFactory);

  //start battling
  for (i=0; i<alienFactory.fleet.length; i++){
    battle(goodGuy, alienFactory.fleet[i], alienFactory.fleet)
    console.log(goodGuy);
    console.log(alienFactory.fleet);
    console.log(alienFactory.fleet[i]);
  }
}

//==========================================
//              Run the game
//==========================================

startGame()
