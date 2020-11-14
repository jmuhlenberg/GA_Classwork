class Tamagotchi {
  constructor(name, owner, type){
    this.name = name
    this.owner = owner
    this.type = type
    this.age = 0
    this.hunger = 0
    this.sleepiness = 0
    this.boredom = 0
  }
  //feed function to decrease hunger
  feed(){
    this.hunger--
  }
  //sleep function to decrease sleepiness
  turnOffLights(){
    this.sleepiness--
  }
  //pet function to decrease boredom
  pet(){
    this.boredom--
  }
  //as the Tamagotchi ages, increase age, sleepiness, boredom, and hunger
  ageUp(){
    this.age++
    this.sleepiness++
    this.boredom++
    this.hunger++
  }
  //check the status of the Tamagotchi.
  //if hunger, boredom, or sleepiness reaches 10, the Tamagotchi dies
  checkStatus(){
    console.log(`${this.name}'s current stats: `);
    console.log(`Age: ${this.age}`);
    console.log(`Hunger: ${this.hunger}`);
    console.log(`Sleepiness: ${this.sleepiness}`);
    console.log(`Boredom: ${this.boredom}`);
    if(this.hunger === 10 || this.boredom === 10 || this.sleepiness === 10){
      if(this.hunger === 10){
        console.log(`${this.name} has passed away from hunger...`);
        endGame()
      }else if(this.boredom === 10){
        console.log(`${this.name} has passed away from boredom...`);
        endGame()
      }else{
        console.log(`${this.name} has passed away from sleepiness...`);
        endGame()
      }
    }else{
      console.log(`${this.name} is doing well, but don\'t forget to give him attention!`);
    }
  }
}

//writing a function to start the game
const startGame = () => {
  let beginGamePrompt = prompt('Would you like to begin playing the game of Tamagotchi? The virtual pet simulator.', 'yes / no' )
  if (beginGamePrompt == 'yes'){
    let tamagotchiOwnerName = prompt('Please enter your name.', 'Your name')
    let tamagotchiPetName = prompt('Please enter your pet\'s name', 'Your pet\'s name')
    let tamagotchiType = prompt(`What animal is ${tamagotchiPetName}?`, 'Dog / Cat / Duck / Bunny')

    const newTamagotchi = new Tamagotchi(tamagotchiPetName, tamagotchiOwnerName, tamagotchiType)

    //want to  set the website image based on the entered tamagotchiType
    if(tamagotchiType == 'dog'){

    }else if(tamagotchiType == 'cat'){

    }else if(tamagotchiType == 'duck'){

    }else if(tamagotchiType == 'bunny'){

    }else{
      
    }

    alert(`${newTamagotchi.owner}, please meet your new pet ${newTamagotchi.name}, the ${newTamagotchi.type}!`)

    setInterval(() => {
      newTamagotchi.ageUp();
      newTamagotchi.checkStatus()
    }, 24000)

    setInterval(() => {
      newTamagotchi.boredom ++;
      newTamagotchi.checkStatus()
    }, 3000)

    setInterval(() => {
      newTamagotchi.sleepiness++;
      newTamagotchi.checkStatus()
    }, 16000)

    setInterval(() => {
      newTamagotchi.hunger++;
      newTamagotchi.checkStatus()
    }, 5000)
  }else{
    endGame()
  }
}

//writing a funtion to end the game.
const endGame = () => {
  alert('The simulation has ended. Please refresh the page to play again.')
}

// newTamagotchi.feed()
// newTamagotchi.ageUp()
// console.log(newTamagotchi);

startGame();
