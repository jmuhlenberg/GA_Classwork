// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
const bakedGoods = require('./models/bakedgoods.js');

app.use(express.urlencoded({extended:false}))

// =======================================
//              ROUTES
// =======================================
// index route
app.get('/bakedgoods', (req, res) => {
  res.render('index.ejs', {allBakedGoods: bakedGoods});
});

app.get('/bakedgoods/new', (req, res) => {
  res.render('new.ejs')
})

app.post('/bakedgoods', (req, res) => {
  // res.send(req.body)
  bakedGoods.push(req.body)
  console.log(bakedGoods);
  res.redirect('/bakedgoods')
})

// show route
app.get('/bakedgoods/:id', (req, res) => {
  res.render('show.ejs', {selectedGood: bakedGoods[req.params.id]});
});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Biscoff Bakery app listening on port: ${port}`)
});
