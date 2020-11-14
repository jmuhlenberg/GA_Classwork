// Dependencies
const express = require('express')
// Configuration
const app = express()
const PORT = 3003

const plants = [
  'Monstera Deliciosa',
  'Corpse Flower',
  'Elephant-Foot Yam',
  "Witches' Butter"
]

app.get('/plants', (req, res) => {
  res.send(plants)
})

app.get('/plants/awesome', (req, res) => {
  //this will never be reached
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `)
})

app.get('/plants/:indexOfPlantsArray', (req, res) => {
  // we named the variable indexOfPlants array
  console.log(req.params)
  // the user entered whatever value they wanted into the URL and that is being stored in the variable
  console.log(req.params.indexOfPlantsArray)
  res.send(plants[req.params.indexOfPlantsArray])
})



app.get('/plants/oops/:indexOfPlantsArray', (req, res) => {
  res.send(plants[req.params.indexOfPlantsArray])
  // error cannot send more than one response!
  res.send('this is the index: ' + req.params.indexOfPlantsArray)
})

app.get('/plants/fixed/:indexOfPlantsArray', (req, res) => {
  if (plants[req.params.indexOfPlantsArray]) {
    res.send(plants[req.params.indexOfPlantsArray])
  } else {
    res.send(
      'cannot find anything at this index: ' + req.params.indexOfPlantsArray
    )
  }
})

// Listener
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
