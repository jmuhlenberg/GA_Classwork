const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('welcome to my hosted server');
})

app.get('/', (req, res) => {
  res.send('the simpsons')
})

app.get('/Homer', (req, res) => {
  res.send('doh')
})

app.get('/Marge', (req, res) => {
  res.send('Homie')
})

app.get('/Bart', (req, res) => {
  res.send('eat my shorts')
})

app.get('/Lisa', (req, res) => {
  res.send('sax')
})

app.get('/Maggie', (req, res) => {
  res.send('binkie')
})

app.get('/Snowball-II', (req, res) => {
  res.send('meow')
})

app.get('/Santas-little-helper', (req, res) => {
  res.send('woof')
})
