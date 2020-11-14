const express = require('express')
const router = express.Router()
const Log = require('../models/logs.js')


const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}

/////////
// ROUTES
/////////

//logs index
router.get('/', (req, res)=>{
  Log.find({}, (error, allLogs) => {
    res.render('logs/logs.ejs', {logs: allLogs, currentUser: req.body.currentUser});
  })
});


//new log
router.get('/new', (req, res) => {
  res.render('logs/new.ejs', {currentUser: req.body.currentUser})
})


//create
router.post('/', (req, res) => {
  if(req.body.shipIsBroken === 'on'){
    req.body.shipIsBroken = true
  }else{
    req.body.shipIsBroken = false
  }
  Log.create(req.body, (error, createdLog) => {
    res.redirect('/logs', {currentUser: req.body.currentUser})
  })
})


//show
router.get('/:id', (req, res)=>{
  if(req.session.currentUser){
    Log.findById(req.params.id, (err, foundLog)=>{
        res.render('logs/show.ejs', {log: foundLog, currentUser: req.body.currentUser});
    });
  }else{
    res.redirect('/sessions/new')
  }
});


//delete
router.delete('/:id', (req, res) => {
  Log.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/logs')
  })
})


//edit
router.get('/:id/edit', (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    res.render('logs/edit.ejs', {log: foundLog, currentUser: req.body.currentUser})
  })
})


//update
router.put('/:id', (req, res) => {
  if(req.body.shipIsBroken ==='on'){
    req.body.shipIsBroken = true
  }else{
    req.body.shipIsBroken = false
  }
  Log.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLog) => {
    res.redirect('/logs')
  })
})

module.exports = router
