const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')
const home = 'localhost:3001/'


sessions.get('/', (req,res) => {
  res.render('logs/index.ejs', {currentUser: req.body.currentUser})
})

//on 'Log In' click
sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs', {currentUser: req.body.currentUser})
})

//on sessions/new form submit(log in)
sessions.post('/', (req, res) => {
  User.findOne({username: req.body.username}, (err, foundUser) => {
    if(err){
      console.log(err);
      res.send('o0ps th3 db h4d a pr0bl3m')
    }else if(!foundUser){
      res.send('<a href"/">Sorry, no user was found</a>')
    }else{
      if(bcrypt.compareSync(req.body.password, foundUser.password)){
        console.log(foundUser);
        console.log('username and password match');

        req.session.currentUser = foundUser
        res.redirect('/')
      }else{
        res.send('<a href="/">password does not match</a>')
      }
    }
  })
})

//delete the session
sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/logs')
  })
})


module.exports = sessions
