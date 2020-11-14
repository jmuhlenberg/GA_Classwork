const express = require('express');
const app = express();
const port = 3000
const drinks = require('./models/drinks.js')
const food = require('./models/food.js')

//index page
app.get('/drinks', (req, res) => {
  res.render('drinks_index.ejs',{
    allDrinks: drinks,
    allFood: food
  })
})

//drinks show page
app.get('/drinks/:id', (req, res) => {
  res.render('drinks_show.ejs', {
    selectedDrink: drinks[req.params.id]
  })
})

//food show page
app.get('/food/:id', (req, res) => {
  res.render('food_show.ejs', {
    selectedFood: food[req.params.id]
  })
})



app.listen(port, () => {
  console.log('mmm beer');
})
