//dependencies
const mongoose = require('mongoose')
const db = mongoose.connection

//configuration
const mongoURI = 'mongodb://localhost:27017/hotel'

//models
const Hotel = require('./models/hotel.js')
const hotelSeed = require('./models/seed.js')


//connect
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
  console.log('The connection with mongod is established')
})


//connection errors / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))


// Hotel.create(hotelSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided hotel data')
// })

// hotel. collection.drop()

// Hotel.countDocuments({}, (err, data) => {
//   if(err) console.log(err.message);
//   console.log(`There are ${data} hotels in this database`);
// })



/////////
// CREATE
/////////

// Hotel.create({
//   'name': 'The Prancing Pony',
//   'location': 'Middle-Earth',
//   'rating': 4.5,
//   'vacancies': true,
//   'tags': ['Lord of the Rings', 'LOTR', 'Middle-Earth'],
//   'rooms': [{roomNumber: 01, size: 'Suite', price: 50, booked: false}]
// }, (err, data) => {
//     if(err) console.log(err.message);
//     console.log(`Added ${data.name} to the database`);
// })

// Hotel.countDocuments({}, (err, data) => {
//   if(err) console.log(err.message);
//   console.log(`There are ${data} hotels in this database`);
// })



///////
// READ
///////

//find all hotels
// Hotel.find({}, (err, data) => {
//   if(err) console.log(err.message);
//   console.log(data);
// })

//find all hotels, but return only the name
// Hotel.find({}, {name: 1, _id:0}, (err, data) => {
//   if(err) console.log(err.message);
//   console.log(data);
// })

//find my hotel
// Hotel.find({name: 'The Prancing Pony'}, (err, data) => {
//   if(err) console.log(err.message);
//   console.log(data);
// })

//find all hotels with vacanies, exclude ratings
// Hotel.find({vacancies: true}, {ratings:0}, (err, data) => {
//   if(err) console.log(err.message);
//   console.log(data);
// })



/////////
// DELETE
//////////

//delete Hotelicopter
// Hotel.findOneAndRemove({name: 'Hotelicopter'}, (err, hotel) => {
//   if(err) console.log(err);
//   console.log('The hotel was removed successfully');
// })

//delete Hilbert's Hotel
// Hotel.findOneAndRemove({name: 'Hilbert\'s Hotel'}, (err, hotel) => {
//   if(err) console.log(err);
//   console.log('The hotel was removed successfully');
// })

//the hotel in Colorado Rockies has been closed, delete it
// Hotel.findOneAndRemove({location: 'Colorado Rockies'}, (err, hotel) => {
//   if(err) console.log(err);
//   console.log('The hotel was removed successfully');
// })



/////////
// UPDATE
/////////

//update The Great Northern's rating to 5
// Hotel.findOneAndUpdate({name:'The Great Northern'}, {rating: 5}, (err, hotel)=>{
//   if (err) console.log(err);
//   console.log(hotel);
// })

// Hotel.find({name: 'The Great Northern'}, (err, data) => {
//   if(err) console.log(err.message);
//   console.log(data);
// })


//Motel Bambi vacancy to false
// Hotel.findOneAndUpdate({name:'Motel Bambi'}, {vacancies: false}, (err, hotel)=>{
//   if (err) console.log(err);
//   console.log(`${hotel.name} no longer has any vacancy.`);
// })

// Hotel.find({name: 'Motel Bambi'}, (err, data) => {
//   if(err) console.log(err.message);
//   console.log(data);
// })


//'White Bay, Oregon' hotel rating to 2
// Hotel.findOneAndUpdate({location:'White Bay, Oregon'}, {rating: 2}, (err, hotel)=>{
//   if (err) console.log(err);
//   console.log(`${hotel.name} rating has been updated.`);
// })

// Hotel.find({location:'White Bay, Oregon'}, (err, data) => {
//   if(err) console.log(err.message);
//   console.log(data);
// })



//provide updated count of hotels in database
// Hotel.countDocuments({}, (err, data) => {
//   if(err) console.log(err.message);
//   console.log(`There are ${data} hotels in this database`);
// })
