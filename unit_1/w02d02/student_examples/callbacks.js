//Callbacks
//A callback is just a function that you pass in as a parameter to another function. That second function will then do something and call that parameter function at some point. Let's see some examples:
// setTimeout(
//   () => {
//       console.log('hi');
//   },
//   2000
// );
//logs 'hi' after a 2000ms interval

// setInterval(
//   () => {
//       console.log('hi');
//   },
//   2000
// )
//constantly logs 'hi' in 2000ms intervals

const iceCreams = ['Vanilla','Chocolate','Strawberry','Rocky Road']

// iceCreams.forEach(
//   (currentElement) => {
//     console.log(currentElement);
//   }
// )
//loops through the array and passes each element through the array
//a more complex for loop
//the precursor to the 'for..of' loop

//What's going on behind the scenes
// const henchman = () => {
//   console.log("I'm the henchman");
// }
// console.log(henchman);
// henchman()

// const mobboss = (employee) => {
//   console.log(employee);
// }
// mobboss(henchman)
// mobboss(henchman())

//Once we've done this, we can execute the function that is passed in as a parameter (called a callback)
// const henchman = ()=>{
//     console.log("Right-o boss");
// }
// const mobboss = (employee)=>{
//     console.log("Go set a restaurant on fire");
//     employee();
// }
// mobboss(henchman);

//This is good because it allows us to perform some functionality and then do something unique once that's complete:
// const henchman = ()=>{
//     console.log("I'm the henchman");
// }
// const mobboss = (employee)=>{
//     console.log("Go do your specialty");
//     employee();
// }
// //mobboss(henchman);
// const thief = () => {
//   console.log('I\'m the thief');
// }
// const arsonist = () => {
//   console.log("I'm the arsonist");
// }
// mobboss(thief);
// mobboss(arsonist)

//If we want, we don't even need to assign the functions to variables
// const mobboss = (employee)=>{
//     console.log("I'm the boss");
//     employee();
// }
//mobboss(()=>{console.log("I'm the thief");});
//mobboss(()=>{console.log("I'm the arsonist");});

//We can reformat this:
const badGuy = (action) => {
    console.log("I'm going to do something...");
    action();
    console.log("I'm done");
    console.log("");
}

// badGuy(() => {console.log("Stealing a safe...");});
// badGuy(() => {console.log("Intimidating a local businessman");});

//The last form is very common, for instance:
// setTimeout(() => {console.log('hi');}, 2000)
// setInterval(() => {console.log('hi');}, 2000)

//Arrays have lots of helper functions that will do stuff for you so that you don't have to rely on a basic for loop all the time:
iceCreams.forEach((currentElement) => {
  //console.log(currentElement);
})

const updatedIceCreams = iceCreams.map((flavor) => {
  return flavor + " Ice Cream"
})

//console.log(updatedIceCreams);

//There are lots of other array functions:
// There are many others including:
// Every
// Filter
// Find
// Find Index
// Reduce
// Some
// Sort
