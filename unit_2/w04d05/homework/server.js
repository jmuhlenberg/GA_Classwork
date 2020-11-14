const express = require('express')
const app = express()

app.listen(3005, () => {
  console.log('hello');
})

//
// Greeting
//

app.get('/greeting', (req, res) => {
  res.send('Hello, stranger')
})

app.get('/greeting/:name', (req, res) => {
  res.send('What\'s up ' + req.params.name + '! It\'s so great to see you!' )
})

//
// Tip
//

app.get('/tip/:total/:tipPercentage', (req, res) => {
  // console.log(req.params.total);
  // console.log(req.params.tipPercentage);
  const tipTotal = (parseInt(req.params.total)) * (parseInt(req.params.tipPercentage)/100)
  res.send(`The tip amount is ${tipTotal}.`)

})

//
// Magic 8 Ball
//

const eightBallResponses =   ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/', (req, res) => {
  res.send('Ask The Great Magic 8 Ball a question.')
})

app.get('/magic/:question', (req, res) => {
  const randomIndex = Math.floor(Math.random()*eightBallResponses.length)
  console.log(randomIndex);
  res.send(`${req.params.question} <br> <h1>${eightBallResponses[randomIndex]}</h1>`)
})
