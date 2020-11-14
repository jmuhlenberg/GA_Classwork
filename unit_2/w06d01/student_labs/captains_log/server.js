////////////////
// DEPENDENCIES
////////////////
const express = require('express')
const session = require('express-session')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require('dotenv').config()



/////////////////
// CONFIGURATION
/////////////////
const app = express()
const db = mongoose.connection
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI



///////////////
// MIDDLEWARE
///////////////
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))

mongoose.connect(
  mongodbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log('the connection with mongod is established at', mongodbURI)
  }
)

db.on('error', err => console.log(err.message + ' is mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

//////////
// ROUTES
//////////
//index
app.get('/', (req, res) => {
  res.render('logs/index.ejs', {currentUser: req.body.currentUser})
})



///////////////
// CONTROLLERS
///////////////
const logsController = require('./controllers/logs_controller.js')
app.use('/logs', logsController)

const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController)

const usersController = require('./controllers/users_controller.js')
app.use('/users', usersController)



/////////////
// LISTENERS
/////////////

app.listen(PORT, () => {
  console.log('Captain\'s Log, star date...');
})
