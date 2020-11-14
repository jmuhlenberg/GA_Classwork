////////////////
//DEPENDENCIES
////////////////
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const pumpkinsController = require('./controllers/pumpkins.js')



/////////////
// CONFIG
/////////////
const app = express()
const db = mongoose.connection


///////////////
// MIDDLEWARE
///////////////
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

mongoose.connect('mongodb://localhost:27017/pumpkins', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true}, () => {
  console.log('connected to mongoose')
})

db.on('error', err => console.log(err.message + ' is mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))



//////////
// ROUTES
//////////
//index
app.get('/', (req, res) => {
  res.redirect('/pumpkins')
})



///////////////
//CONTROLLERS
///////////////

app.use('/pumpkins', pumpkinsController)



/////////////
// LISTENERS
/////////////

app.listen(3000, () => {
  console.log("1,2 Freddy's coming for you...now that he's unemployed...")
})
