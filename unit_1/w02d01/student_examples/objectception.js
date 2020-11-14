//Object-Ception

const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"]
}

//Access all values in the player.belongings array:
//console.log(adventurer.belongings)
//Access a specific item in the belongings array:
//console.log(adventurer.belongings[0])


//----------------------------------------------------------
//Iterate over an array that is within an object
for (let i=0; i < adventurer.belongings.length; i++) {
	//console.log(adventurer.belongings[i]);
}


//----------------------------------------------------------
//Use an object within an object
const adventurer1 = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat"
	}
}

//Access the companion object:
//console.log(adventurer1.companion)        // => {name: 'Velma', type: 'Bat'}
//Access the companion's name:
//console.log(adventurer1.companion.name)   // => 'Velma'
//Access the companion's type:
//console.log(adventurer1.companion.type)   // => 'Bat'


//----------------------------------------------------------
//Use an object within an object within an object
const adventurer2 = {
	name: 'Timothy',
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat",
		companion: {
			name: "Tim",
			type: "Parasite"
		}
	}
}

//console.log Tim's type
//console.log(adventurer2.companion.companion.type);


//----------------------------------------------------------
//Use an array within an object within an object within an object
const adventurer3 = {
	name: 'Timothy',
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat",
		companion: {
			name: "Tim",
			type: "Parasite",
			belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
		}
	}
}

//console.log 'health insurance'
//console.log(adventurer3.companion.companion.belongings[2]);
//to find the last item you'd have to store the value then enter that variable
let x = adventurer3.companion.companion.belongings.length-1
//console.log(adventurer3.companion.companion.belongings[x]);


//----------------------------------------------------------
//Use an array of objects
const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];

//you could reference them with indexes as usual
//console.log(movies[0]);
//you could reference the properties by asking for the index then the property
//console.log(movies[0].title);
//you could loop over the array and just print all of the titles
for(let i =0; i<movies.length; i++){
  //console.log(movies[i].title);
}


//----------------------------------------------------------
//More Combinations
//you can create a property for an object that is a function
const foo = {
    someMethod:()=>{
        console.log('oh hai');
    }
};

//foo.someMethod();//logs 'oh hai!'

//You can store an array in an array
const foo2 = [
    ["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"]
];

//console.log(foo2[1][2]); //1,2

//You can store a function in an array
const foo3 = [
    1,
    "hi",
    ()=>{
        console.log('fun');
    }
];

//foo3[2]();

//You can create a function that returns an object. Just add the . after the () since the return value of the function is an object
const summonBird = ()=>{
    return {
        color: 'blue'
    }
};

//console.log(summonBird().color); // => 'blue'
//console.log(summonBird());       // => {color: 'blue'}

//You can create a function that returns an array. Just add [index] after the () since the return value of the function is an array
const createBag = ()=>{
    return ['apple','banana','pear'];
};

//console.log(createBag()[1]);    // => 'banana'
//console.log(createBag()[2]);    // => 'pear'

//You can create a function that returns a function. Just add the () after the first () since the return value of the first function is another function
const generateSpell = ()=>{
    return ()=>{
        console.log('fireball!');
    }
};

//generateSpell()();


//=================================================
//=================================================
//Combining data types
//Looping with nested arrays/objects
const foo4 = {
    someArray:[1,2,3]
};

for(let element of foo4.someArray){
    //console.log(element);
}
//same as above
for (let i = 0; i < foo4.someArray.length; i++) {
    //console.log(foo4.someArray[i]);
}

//You can loop over an array in an array. Just add an additional [index] after the first [index]
const foo5 = [
    ["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"]
];

for(let row of foo5){
    for(let element of row){
        //console.log(element);
    }
}
//same as above
for (let i = 0; i < foo5.length; i++) {
    for (let j = 0; j < foo5[i].length; j++) {
        //console.log(foo5[i][j]);
    }
}

//===============================================
//Combine objects, arrays, and functions with three levels of nesting
//You can create a function that returns an object that has an array

const summonServant = () => {
	return {
		bagOfStuff: ['clothes', 'food', 'keys'],
		hat: {
			color: 'black',
		},
		washFeet:() => {
			console.log('washing...');
		}
	}
}
//You can create a function that returns an object that has an object
// console.log(summonServant().bagOfStuff[1]);
// console.log(summonServant().hat.color);
//You can create a function that returns an object that has a method
//summonServant().washFeet()

//You can create an object that has a method that returns an object
const wizard = {
	summonImp:() => {
		return{
			color: 'black'
		}
	},
	generateSpell:() => {
		return () => {
			console.log('fireball');
		}
	}
}
//console.log(wizard.summonImp().color);
//wizard.generateSpell()()

//You can create an array that has a function that returns an object
const bag = [
	1,
	'apple',
	() => {
		return{
			name: 'bob'
		}
	}
]
//console.log(bag[2]().name)

//You can create an array that has a function that returns a function
const bagnon = [
    1,
    'apple',
    ()=>{
        return ()=>{
            console.log('fireball!');
        }
    }
];

bagnon[2]()();

//===========================================================
//Stretch: Combine objects, arrays, and functions with four levels of nesting
