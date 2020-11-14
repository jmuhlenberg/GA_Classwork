//console.log('hi');

// const host = {
//   name: 'Roget',
//   occupation: "creator of Roget's Thesaurus",
//   saySpecs() {
//     console.log(`My name is ${host.name}. My occupation is ${host.occupation}.`);
//   }
// }

//host.saySpecs()

class BasicHost {
  constructor(name, occupation){
    this.name = name
    this.occupation = occupation
    this.empathy = Math.ceil(Math.random()*20)
    this.loyalty = Math.ceil(Math.random()*20)
    this.aggression = Math.ceil(Math.random()*20)
    this.curiosity = Math.ceil(Math.random()*20)
    this.bulkApperception = Math.ceil(Math.random()*20)
  }
  saySpecs(){
    console.log(`My name is ${this.name}. My occupation is ${this.occupation}.`);
  }
}

let host1 = new BasicHost('Roget', "creator of Roget's Thesaurus")
//console.log(host1);
let host2 = new BasicHost('John', 'creator of my own destiny')

// host1.saySpecs()
// host2.saySpecs()

const names = [
  'Laila',
  'Jack',
  'Harley',
  'Hertha',
  'Darren',
  'Jolene',
  'Loura',
  'Lona',
  'Davida',
  'Reena',
  'Leland',
  'Ta',
  'Jen',
  'Linn',
  'Roslyn',
  'Margorie',
  'Rafaela',
  'Romona',
  'Shanel',
  'Stan'
]

const occupations = [
  'Clerical assistant',
  'Leaflet distributor',
  'Landowner',
  'Special constable',
  'Anaesthetist',
  'Park-keeper',
  'Butler',
  'Choreographer',
  'Blacksmith',
  'Chef',
  'Legal secretary',
  'Song writer',
  'Librarian',
  'Landscape gardener'
]

const hostArray = []

for (i=0; i<100; i++){
  hostArray.push(new BasicHost(names[Math.ceil(Math.random()*names.length-1)], occupations[Math.ceil(Math.random()*occupations.length-1)]));
}

//console.log(hostArray);

// hostArray[74].saySpecs()
// hostArray[35].saySpecs()
// hostArray[0].saySpecs()

// for (let index of hostArray){
//   hostArray[index].saySpecs()
// }
//unsure why this one isnt working...

// for(i=0; i<hostArray.length; i++){
//   hostArray[i].saySpecs()
// }

console.log(hostArray);
