const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema ({
  name: {type: String, required: true},
  image: {type: String},
  price: {type: Number, min: 0, required: true},
  details: {type: String, required: true},
  quantity: {type: Number, min: 0, required: true},
  isAvailable: {type: Boolean}
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item
