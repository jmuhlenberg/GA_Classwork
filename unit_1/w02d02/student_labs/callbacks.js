//Callback Drills

let x = 'log this string'
const callBack = (parameter) => {
  console.log(parameter);
  parameter()
}
//callBack(x)

const logFunc = () => {
  console.log('hi');
}
//logFunc()

//callBack(logFunc)

//the below function will log 'hi'
// const foo = (param, param2) => {
//     param(param2);
// }
//
// const bar = (param) => {
//     console.log(param);
// }

//foo(bar, 'hi');
//I was correct.

//the below funciton should log 'hello'
const foo = (param, param2) => {
    param(param2, 'hello');
}

const bar = (param, param2) => {
    console.log(param2);
}

//foo(bar, 'hi');
//I was correct

const baz = (param) => {
    console.log(param.toUpperCase());
}

// you should get HELLO
//foo(baz, 'hello')
//correct

//============================
//      Electric Mixer
//============================
const electricMixer = (attachment) => {
  console.log('This mixer is now: '+attachment());
}

// electricMixer(() => {
//   return 'spiralizing'
// })

const spiralizer = () => {
  return 'spiralizing'
}
//electricMixer(spiralizer)

const slicerDicer = () => {
  return 'slicin and dicin'
}
// electricMixer(spiralizer);
// electricMixer(slicerDicer);

const kneeder = () => {
  return 'kneeding the dough'
}
//electricMixer(kneeder);


//===============================
//  setInterval and setTimeout
//===============================
//Pseudo code for setInterval & setTimeout
// functionName(CALLBACK, MILLISECONDS)
// setTimeout(() => {
//   console.log('hi');
// }, 2000);
// setInterval(() => {
//   console.log('hi');
// }, 2000);


//Use SetInterval to display a number that increases by 1 each second (it's a clock!)
// setInterval(() => {
//   console.log('hi');
// }, 1000);
// you would use setTimeout to delay a display
// you would use setInterval

//===============================
//      Rep Master
//===============================
const wordReverse = (str) => {
  return str.split(' ').reverse().join(' ')
}
//console.log(wordReverse('howdy partner'))

const toUpperCase = (str) => {
  return str.toUpperCase()
}

const repMaster = (str, func) => {
  console.log(func(str) + ' proves that I am the rep MASTER!');
}

repMaster("Never give your heart to a blockhead", wordReverse);
repMaster("I finished this practice", toUpperCase);
