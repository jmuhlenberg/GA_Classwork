const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({
  name: String,
  species: String,
  img: {type: String, default: 'https://via.placeholder.com/200'},
  reservedForAdoption: Boolean
})

const Animal = mongoose.model('Animal', animalSchema)

module.exports = Animal
