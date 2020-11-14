// DEPENDENCIES
const express = require('express')
const app = express()
const port = 3001


// DATABASE
const budget = require('./models/budget.js')


//MIDDLEWARE
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))


// ROUTES
//home
app.get('/', (req, res) => {
  console.log('homepage');
  res.send('Welcome to Budgtr<br><a href="/budgets">Budgtr</a>')
})

//index
app.get('/budgets', (req, res) => {
  console.log('index page');
  res.render('index.ejs', {allBudgetItems: budget})
})

//new
app.get('/budgets/new', (req, res) => {
  console.log('new page');
  res.render('new.ejs')
})

//create
app.post('/budgets', (req, res) => {
  budget.push(req.body)
  res.redirect('/budgets')
})

//show
app.get('/budgets/:id', (req, res) => {
  console.log('show page');
  res.render('show.ejs', {selectedBudgetItem: budget[req.params.id]})

})






// LISTENER
app.listen(port, () => {
  console.log('welcome to Budgtr');
})
