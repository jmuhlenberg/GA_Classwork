const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

//on 'Sign Up' click, send the user to the 'New User' page
users.get('/new', (req, res) => {
  res.render('users/new.ejs')
})

//create a new user with POST route
users.post('/', (req, res) => {
  //overwrite the user password with the hashed password,
  //then pass that in to our database
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    console.log('user is created', createdUser)
    res.redirect('/')
  })
})

module.exports = users
