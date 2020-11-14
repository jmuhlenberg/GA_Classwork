class Pet {
  constructor(ownerName, petName){
    this.ownerName = ownerName,
    this.petName = petName
    }
    walk() {
      console.log('walka walka');
    }
    updateOwner(newOwner){
      this.ownerName = newOwner
    }
}

// const lizard = new Pet('John', 'wizard da lizard')
// console.log(lizard);
// lizard.walk()

class Dog extends Pet{
  constructor(ownerName, petName){
    super(ownerName, petName)
    this.price = 20
    }
    bark(){
      console.log('bark');
    }
    chaseTail(){
      console.log('oh boy oh boy oh boy');
    }
    getPrice(){
      return this.price
    }
}

const max = new Dog('John', 'Max')
// console.log(max);
// max.walk()
// max.chaseTail()
// max.bark()
// console.log(max.getPrice())
// max.ownerName = 'mary'
// console.log(max.ownerName);
max.updateOwner('blue')
console.log(max.ownerName);

class Cat extends Pet{
  constructor(ownerName, petName){
    super(ownerName, petName)
    this.price = 10
    }
    purr(){
      console.log('purrrrrr');
    }
    clean(){
      console.log('cleaning');
    }
    getPrice(){
      return this.price
    }
    walk(){
      //super.walk()
      console.log('strut strut');
    }
}

const watson = new Cat('John', 'Watson')
// console.log(watson);
// watson.purr()
// watson.clean()
// watson.getPrice()
// watson.walk()
watson.updateOwner('jerry')
console.log(watson.ownerName);
