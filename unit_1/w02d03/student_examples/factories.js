//OOP Factories

//Let's start with a car
class Car {
  constructor (maker, serialNumber) {
    this.serialNumber = serialNumber;
    this.maker = maker
  }
  drive () {
    console.log('Vroom Vroom');
  }
}

const newCar = new Car('Mazda', 12345);
console.log(newCar);

//Now let's make a factory class that will make cars for us.

class Factory {
  constructor(company){
    this.company = company
    this.cars = []
  }
  generateCar(){
    const newCar = new Car(this.company, this.cars.length)
    this.cars.push(newCar)
  }
  findCar(index){
    return this.cars[index]
  }
}

const tesla = new Factory('Tesla')
tesla.generateCar()
tesla.generateCar()
tesla.generateCar()
tesla.generateCar()
// console.log(tesla);
// console.log(tesla.findCar(0));

//Now we can easily create another new factory that produces its own cars

const porche = new Factory('Porche');
porche.generateCar();
porche.generateCar();
// console.log(porche);
// console.log(porche.findCar(0));



//Extra
//Create static properties for a class

// class Person {
//   static eyeColors () {
//     return ['blue', 'green', 'brown'];
//   }
//   // rest of class definition here...
// }
// // more code...
// const superman = new SuperHero('Clark Kent', 30, Person.eyeColors()[0], 'black');
