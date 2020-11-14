//======================================
// Section 1: Programming Fundamentals
//======================================

// KISS - Keep it simple stupid. This principle is about writing code simplistically. Documents can become very complex, so if you begin by writing simple, more legible code, it will be easier for others to understand and maintain it.

// Don't make me think - I like this principle because I'm guilty of breaking it... It's about writing code that's easily read and understood with minimum effort.

// Write code for the maintainer - this priciple is about being forward thinking and writing code that will simplify work down the line. eventually, someone  will be in charge of updating old code documents. If you begin by writing simple, understadable code, they will be able to accomplish more tasks throughout their day. Also liked this quote 'Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live.'

//Commenting Code
const f = l => {
//setting f to a function that accepts a value for l
  let es = 0,
  //set the value of es to 0
    p = 0,
    //set p to 0
    c = 1,
    //set c to 1
    n = 0
    //set n to 0
  while (c <= l) {
    //starting a while loop. while c is less than or equal to l is true, run this code block
    n = c + p
    //changing the value of n to c+p
    ;[c, p] = [n, c]
    //for the array of c, p set to n, c
    es += c % 2 === 0 ? c  0
    //increasing the value of es, if c%2 ===0, if that is true increase es by the value of c. if not, increase the value by 0.
  }
  return es
  //push the value of es to the function
}

//console.log(f(55))
//logs 55 through the funciton of f.


const f2 = limit => {
  //creating a function f2 that accecpts the parameter 'limit'
  let evenSum = 0
  //setting evenSum to 0
  let previous = 0
  //setting previous to 0
  let current = 1
  //setting current to 1
  while (current <= limit) {
    //start a while loop. while current is less than or equal to limit, run this code.
    let next = current + previous
    // setting the value of next to current+previous
    previous = current
    //resetting previous to the value of current
    current = next
    //resetting current to the value of next.

    if (current % 2 === 0) {
      //if the value of current%2 === 0 is true, do this code.
      evenSum += current
      //increase the value of evenSum by current.
    }
  }
  return evenSum
  //return the value of evenSum
}

//console.log(f2(55))

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
//A better name would have been 'printEvenSum'. I'm sure there is a way to make it easier to read, but it was much easier compared to the previous function.

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
//f2 for sure.

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
//yes, the semi-colon is necessary. I read that it's a pass : fail if the previous statement is true.
