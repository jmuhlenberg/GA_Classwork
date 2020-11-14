const express = require('express')
const app = express()

const superheroes = [
  {name: "Superman", powers: ['flight', 'invulnerability', 'x-ray vision']},
  {name: 'Wonder Woman', powers: ['flight', 'invulnerability', 'x-ray vision']},
  {name: 'Black Panther', powers: ['strength']}
]

const villians = [
  {name: "Lex Luthor", powers: ["super brain"]},
  {name: "Ares", powers: ["shape shifting", "teleporting"]},
  {name: "Killmonger", powers: ["ability to fit in Black Panther's suit", "internet agreement that he looks badass"]}
]


app.get('/superheroes', (req, res) => {
  res.send(superheroes)
})

app.get('/superheroes/:index', (req, res) => {
  let powers = ''
  for(x=0; x<superheroes[req.params.index].powers.length; x++){
    powers+=`<li>${superheroes[req.params.index].powers[x]}</li>`
  }

  res.send(`<h1>${superheroes[req.params.index].name}</h1>
    <br>
    ${powers}`)
})




app.listen(3000, () => {
  console.log('Here to save the day!');
})
