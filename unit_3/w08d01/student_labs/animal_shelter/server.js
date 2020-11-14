//dependencies
const express = require('express')
const mongoose = require('mongoose')



//connections
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const MONGODBURI = process.env.MONGODBURI



mongoose.connect(MONGODBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

mongoose.connection.on('error', err =>
console.log(err.message, ' is Mongod not running?/Problem with Atlas Connection?'))

mongoose.connection.on('connected', () => {
  console.log('mongo connected: ', MONGODBURI);
})



//middleware
app.use(express.json())
app.use(express.static('public'))



//routes
const animalsController = require('./controllers/animal_controller.js')
app.use('/animals', animalsController)



//listener
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
