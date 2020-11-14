const mongoose = require('mongoose')
const Schema = mongoose.Schema


const logSchema = new Schema ({
  title: {type: String, required: true},
  entry: {type: String, required: true},
  shipIsBroken: Boolean,
}, {timestamps: true})

const Log = mongoose.model('Log', logSchema)

module.exports = Log
