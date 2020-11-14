///////////////
// DEPENDENCIES
///////////////
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fruitsController = require('./controllers/fruits.js')


/////////
// ROUTES
// moved to controllers/fruits.js
/////////////////////////////////

app.use('/fruits', fruitsController)


//////////////
// CONNECTIONS
//////////////

app.listen(3000, ()=>{
    console.log('listening');
});

mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
  console.log('The connection with mongod is established')
})
