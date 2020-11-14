//dependencies
const express = require('express')
const animals = express.Router()
const Animal = require('../models/animal.js')

//ROUTES
//index route
animals.get('/', (req, res) => {
  Animal.find({}, (err, foundAnimals) => {
    res.json(foundAnimals)
  })
})


//create route
animals.post('/', (req, res) => {
  Animal.create(req.body, (err, createdAnimal) => {
    Animal.find({}, (err, foundAnimals) => {
      res.json(foundAnimals)
    })
  })
})


//udpate route
animals.put('/:id', (req, res) => {
  Animal.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedAnimal) => {
    if(err){
      res.send(err)
    } else {
      Animal.find({}, (err, foundAnimals) => {
        res.json(foundAnimals)
      })
    }
  })
})


//delete route
animals.delete('/:id', (req, res) => {
  Animal.findByIdAndRemove(req.params.id, (err, deletedAnimal) => {
    Animal.find({}, (err, foundAnimals) => {
      res.json(foundAnimals)
    })
  })
})

module.exports = animals
