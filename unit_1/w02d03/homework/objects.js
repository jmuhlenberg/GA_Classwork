class Hamster {
  constructor(owner, name){
  this.owner = owner,
  this.name = name,
  this.price = 15
  }
  wheelRun(){
    console.log('squeak squeak');
  }
  eatFood(){
    console.log('nibble nibble');
  }
  getPrice(){
    return this.price
  }
}

const ginger = new Hamster('Bob', 'Ginger')
// console.log(ginger);
// ginger.wheelRun()
// ginger.eatFood()
// console.log(ginger.getPrice())

class Person{
  constructor(name, age, height, weight, mood, hamsters, bankAccount){
    this.name = name
    this.age = age || 0
    this.height = height || 0
    this.weight = weight || 0
    this.mood = mood || 0
    this.hamsters = [hamsters]
    this.bankAccount = bankAccount || 0
  }
  getName(){
    return this.name
  }
  getAge(){
    return this.age
  }
  getWeight(){
    return this.weight
  }
  greet(){
    console.log(`Hello, my name is ${this.name}.`);
  }
  eat(){
    this.weight++
    this.mood++
  }
  exercise(){
    this.weight--
  }
  ageUp(){
    this.age++
    this.height++
    this.weight++
    this.mood--
    this.bankAccount += 10
  }
  buyHamster(newHamster){
    newHamster.owner = this.name
    this.hamsters.push(newHamster.name)
    this.mood+=10
    this.bankAccount -= newHamster.getPrice()
  }
}

const timmy = new Person('Timmy', 5, 5, 100, 10, 'martha', 200)
// timmy.buyHamster(ginger)

// console.log(timmy);

//have timmy eat 5 times
for(i=0; i<5; i++){
timmy.eat()
}
// console.log(timmy);

//have timmy exercise 5 times
for(i=0; i<5; i++){
timmy.exercise()
}
// console.log(timmy);

//Age Timmy 9 years
for(i=0; i<9; i++){
timmy.ageUp()
}
// console.log(timmy);

//Create a hamster named "Gus"
const gus = new Hamster (null, 'Gus')

//Have Timmy "buy" Gus & set owner to Timmy
timmy.buyHamster(gus)
// console.log(timmy);

//age timmy 15 times
for(i=0; i<15; i++){
timmy.ageUp()
}
// console.log(timmy);

//Have Timmy eat twice
for(i=0; i<2; i++){
  timmy.eat()
}
// console.log(timmy);

//Have Timmy exercise twice
for(i=0; i<2; i++){
  timmy.exercise()
}
//console.log(timmy);
