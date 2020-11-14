const express = require('express')
const app = express()

app.listen(3009, () => {
  console.log('hello');
})


app.get('/', (req, res) => {
  res.send('99 Bottles of beer on the wall <a href="http://www.localhost:3009/98">take one down, pass it around</a>')
})


app.get('/:bottlesLeft', (req, res) => {
  let bottles = parseInt(req.params.bottlesLeft)
  bottles-=1
  if(bottles>=0){
    res.send(`${req.params.bottlesLeft} Bottles of beer on the wall <a href="http://www.localhost:3009/${bottles}">take one down, pass it around</a>`)
  }else{
    res.send('There are no more beers. You drank them all you lush! <br> <a href="http://www.localhost:3009/">Start Over?</a>')
  }
})
