const mongoose = require('mongoose')

const pumpkinSchema = new mongoose.Schema({
  description: { type: String, required: true },
  color: { type: String, required: true },
  readyToShip: Boolean
})

const Pumpkin = mongoose.model('Pumpkin', pumpkinSchema)

module.exports = Pumpkin
