//dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema


//schema
const hotelSchema = new Schema({
  name: {type: String, require: true, unique: true},
  location: String,
  rating: {type: Number, max: 5},
  vacancies: {type: Boolean},
  tags: {type: [String]},
  rooms: [{roomNumber: Number, size: String, price: Number, booked: Boolean}]
}, {timestamps: true})

const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel
