const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/somedata', (reqest, response) => {
  response.send('here is your information')
})

app.get('/alpha', (reqest, response) => {
  response.send('i am ze captain now')
})

app.listen(3000, () => {
  console.log('listening on port 3000');
})


app.get('/beta', (request, response) => {
  response.send('thats right')
})
