const mongoose = require('mongoose')

const birdSchema = new mongoose.Schema({
  name: String,
  img: {type: String, default: 'https://via.placeholder.com/200'}
})

const Bird = mongoose.model('Bird', birdSchema)

module.exports = Bird
