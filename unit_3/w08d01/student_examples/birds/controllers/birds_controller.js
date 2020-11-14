//dependencies
const express = require('express')
const birds = express.Router()
const Bird = require('../models/bird.js')
// const birdSeed = require('../models/bird_seed.js')

//routes
birds.get('/', (req, res) => {
  Bird.find({}, (err, foundBirds) => {
    res.json(foundBirds)
  })
})

birds.post('/', (req, res) => {
  //create a bird
  Bird.create(req.body, (err, createdBird) => {
    //find all the birds
    Bird.find({}, (err, foundBirds) => {
      //return json of all the birds
      res.json(foundBirds)
    })
  })
})

birds.put('/:id', (req, res) => {
  Bird.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBird) => {
    if(err){
      res.send(err)
    } else {
      Bird.find({}, (err, foundBirds) => {
        res.json(foundBirds)
      })
    }
  })
})

birds.delete('/:id', (req, res) => {
  Bird.findByIdAndRemove(req.params.id, (err, deletedBird) => {
    Bird.find({}, (err, foundBirds) => {
      res.json(foundBirds)
    })
  })
})


birds.get('/seed', (req, res) => {
  Bird.insertMany(birdSeed, (err, manyBirds) => {
    res.redirect('/')
  })
})

birds.get('/dropcollection', (req, res) => {
  Bird.collection.drop()
  res.redirect('/')
})

module.exports = birds
