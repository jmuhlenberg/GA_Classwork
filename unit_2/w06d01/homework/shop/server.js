/////////////////
// DEPENDENCIES//
/////////////////

const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const itemsController = require('./controllers/shop.js')

app.use('/store', itemsController)
app.use(express.static('public'))


/////////////////////////////////
// ROUTES                      //
// moved to controllers/logs.js//
/////////////////////////////////


/////////////
//LISTENERS//
/////////////

app.listen(port, () => {
  console.log('You have connected to the shop.');
})

mongoose.connect('mongodb://localhost:27017/mongostore', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
  console.log('Connected to mongostore db.')
})
