// DEPENDENCIES
const express = require('express')
const app = express()
const pokemon = require('./models/pokemon.js')
const port = 3000
const methodOverride = require('method-override');


// MIDDLEWARE
app.use(express.urlencoded({ extended:false }));
app.use(express.static('public'))
app.use(methodOverride('_method'));





// PATHS
//index
app.get('/', (req, res) => {
  res.render('index.ejs', { data: pokemon })
})


//delete
app.delete('/:id', (req, res) => {
	pokemon.splice(req.params.id, 1)
	res.redirect('/')
})

//new
app.get('/new', (req, res) => {
  res.render('new.ejs')
});


//create
app.post('/', (req, res) => {
    // console.log(req.body)
    pokemon.push(req.body)
    res.redirect('/')
})

//edit
app.get('/:id/edit', (req, res) => {
  res.render('edit.ejs', {data: pokemon[req.params.id], index: req.params.id})
})

app.put('/:id', (req, res) => {
  console.log(req.body);
	pokemon[req.params.id] = req.body
	res.redirect('/')
})

//show
app.get('/:id', (req, res) => {
  res.render('show.ejs', { data: pokemon[req.params.id], index: req.params.id },
  console.log(pokemon[req.params.id]))
})


// LISTENERS

app.listen(port, () => {
  console.log('initializing pokedex');
})
