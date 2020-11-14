// Top Level DEMO
/////////////////
// Install
// npm install express-session


// Require in server.js
// const session = require('express-session')


// Use
// app.use(
//   session({
//     secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
//     resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
//     saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
//   })
// )



// Save user information on the session object
//////////////////////////////////////////////

// For each of the routes you create, the req variable will now have a session property which is itself an object. You can put things on this.

// app.get('/any', (req, res) => {
//   //any route will work
//   req.session.anyProperty = 'any value'
// })



// Retrieve user information saved on the session object
////////////////////////////////////////////////////////

// Once you add a property onto the session object, you can retrieve it when a user navigates to any other route. Then you can use it to make decisions based on the design of your application. Remember though, this session will end when the user closes their browser, or you restart your sever app.

// app.get('/retrieve', (req, res) => {
//   //any route will work
//   if (req.session.anyProperty === 'something you want it to') {
//     //test to see if that value exists
//     //do something if it's a match
//     console.log('it matches! cool')
//   } else {
//     //do something else if it's not
//     console.log('nope, not a match')
//   }
//   res.redirect('/')
// })




// Update user information saved on the session object
//////////////////////////////////////////////////////

// You can overwrite a session value somewhere else too, just like any other property on a normal JS object.

// app.get('/update', (req, res) => {
//   //any route will work
//   req.session.anyProperty = 'changing anyProperty to this value'
//   res.redirect('/')
// })




// Destroy the session
//////////////////////

// Lastly, you can forcibly destroy a session before a user closes their browser window.

// app.get('/destroy-route', () => {
//   //any route will work
//   req.session.destroy(err => {
//     if (err) {
//       //do something if destroying the session fails
//     } else {
//       //do something if destroying the session succeeds
//     }
//   })
//   res.redirect('/')
// })




// Explain what bcrypt does
///////////////////////////

// bcrypt is a package that will encrypt passwords so that if your database gets hacked, people's passwords won't be exposed


// Include bcrypt package//

// Standard install
// npm install bcrypt

// and require
// const bcrypt = require('bcrypt')

// Hash a string using bcrypt
// bcrypt does this thing called "salting" a string. It requires you to generate a salt which is used in the encryption process. This must be generated each time you hash a string. If you don't do this, the same string will get hashed to the same value each time. If this were to happen, someone with a common password could hack the database and see who else's hashed password had the same value as theirs and know that they have the same password as them.

// const hashedString = bcrypt.hashSync('yourStringHere', bcrypt.genSaltSync(10))

// Compare a string to a hashed value to see if they are the same//
// Because the same string gets encrypted differently every time, we have no way of actually seeing what the value of the string is. We can compare it to another string and see if the two are "mathematically" equivalent.

// bcrypt.compareSync('yourGuessHere', hashedString) //returns true or false
