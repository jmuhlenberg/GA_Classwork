const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

//on 'Log In' click
sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs', {currentUser: req.session.currentUser})
})

//on sessions/new form submit (log in)
sessions.post('/', (req, res) => {
  // username is found and password matches
  // successful log in

  // username is not found - who cares about password if you don't have a username that is found?
  // unsuccessful login

  // username found but password doesn't match
  // unsuccessful login

  // some weird thing happened???????

  // Step 1 Look for the username
  User.findOne({username: req.body.username}, (err, foundUser) => {
    if(err){
      console.log(err);
      res.send('oops the db had a problem')
    }else if (!foundUser){
      res.send('<a href="/">Sorry, no user found </a>')
    }else{
      //user is found
      //check if passwords match
      if(bcrypt.compareSync(req.body.password, foundUser.password)){
        //add the user to our session
        req.session.currentUser = foundUser
        res.redirect('/')
      }else{
        //passwords do not match
        res.send('<a href="/">password does not match</a>')
      }
    }
  })
})

//delete the session
sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

module.exports = sessions
