let a  = 2+2;

debugger;

a++;

debugger;

console.log(a)

// Use the Javascript Debugger in Node
// You can execute in node with node inspect test.js
//
// Type c to continue to next debugger statement
// Type ctrl + c twice to quit
// Type repl to examine variables


//Use Proper Indentation
//Always indent your code. If a chunk of code is being execute under a certain condition (if/else, loops, functions), that condition owns that chunk of code. Show ownership with indentation
//good
if(true){
    const a = 2 + 2;
    console.log(a);
}

//bad
if(true){
    const a = 2 + 2;
console.log(a);
}

//bad
    if(true){
    const a = 2 + 2;
console.log(a);
    }

//This is the case if you have nested loops, if/else
if(true){
    if(false){
        console.log('hi');
    }
}


//Name Variables Semantically
// Be descriptive with variable names
// Better to have to copy/paste a long variable name than get confused later on.
const a = 1 + 2 + 3; //bad
const sumOfThreeNumbers = 1 + 2 + 3; //good

//Comment Code Properly
// Comment every line!
// Users should be able to know how everything works just by reading comments
//defining describePerson
//params: name (string), age (int)
//returns nothing
//summary: console logs an english string consisting of the person's name and how old they are
const describePerson = (name, age)=>{
    const finalString = name + " is " + age + " years old."; //create the message
    console.log(finalString); //log the message
}


//Use Common Programming Principles
// This has some great principles.
//
// http://www.artima.com/weblogs/viewpost.jsp?thread=331531
//
// Most important:
//
// DRY
// Don't Repeat Yourself
// Use a function instead of copy/paste
// Start small
// Write the smallest amount of code possible that you can test
// Don't write large chunks of code all at once
// Separation of concerns
// Encapsulate one chunk of functionality in its own function
// This abstracts away all the nitty gritty, giving the user (the other programmers) an interface
// User only needs to know how to use the function, not how it works (like a remote control)
// Keep things compartmentalized
// One chunk of functionality should do only its job and not have to know about or do anything else


//Describe How to Read Errors
// In general, look at the line number specified and any variables mentioned
// Look above the line number mentioned too for syntax errors
{
    let a = 2 + 2;
    a++;

console.log(a);


//Coerce Data Types
// Equality
// Don't use ==. Use ===
//
// When doing this, sometimes you'll need to change a variables datatype

const a = '1'
if(a === 1){ //will be false
    console.log('should not execute');
}
if(parseInt(a) === 1){
    console.log('parse int works');
}

//In general, you can convert between data types like so:
// parseInt() tries to convert a value to an integer
// parseFloat() tries to convert a value to a float
// .toString() can be appended to pretty much whatever to turn it into a string
// isNaN() will tell you if you have a value that is NaN (e.g. 0/0 and other weird math)

// Combining values
// Weird things happen when you accidentally combine values together that are not the same data type
// Always convert values to the correct data type and then combine. Don't leave it up to javascript to guess what you want
console.log(5 + '5'); //'55'
console.log(5 + parseInt('5')); //10
// Always make sure you know what your data types are:

const a = "1";
console.log(typeof a);


//More on Functions
// Basic Functions review
// Functions encapsulate (isolate) a set of commands pertaining to one set of functionality

// Get a users name
// Add an item to your cart
// Shoot the lizard creature
// etc
// Try not to have a function that "does" multiple things

// Loops and Functions
// When to use which?
// A loop is used whenever you do something repeatedly
// A function is used to simplify something more complex (e.g. Take the orange out of the fridge)
// Functions in Loops
// If executing a function multiple times, you don't need to define the function within the loop. Instead put it at the top

// GOOD
const myFunc = ()=>{
    console.log('hi');
}

for(let i = 0; i < 10; i++){
    myFunc();
}

//MEH
for(let i = 0; i < 10; i++){
    const myFunc = ()=>{
        console.log('hi');
    }

    myFunc();
}

// Loops in Functions
// You can have loops within a function:

const manyGreetings = ()=>{
    for(let i = 0; i < 10; i++){
        console.log('hi');
    }
}

manyGreetings();

// When/How to use a function in a program
// If you can try to have your functions defined at the top of the javascript file
// At the bare minimum, make sure you create your functions before calling them
// Good:
const func1 = ()=>{
    alert('hi');
}
const func2 = ()=>{
    alert('oh hai!!!!');
}

func1();
func2();

//Meh:
const func1 = ()=>{
    alert('hi');
}
func1();
//in the future might need to add func2() here before it's created

const func2 = ()=>{
    alert('oh hai!!!!');
}
func2();

//Bad:
const func1 = ()=>{
    alert('hi');
}
func1();
func2();
const func2 = ()=>{
    alert('oh hai!!!!');
}
