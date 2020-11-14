console.log('hi');

$(() => {
  const $div = $('<div id= top-container>')
  const $div2 = $('<div id= bottom-container>')

  const $body = $('body')

  const $h1 = $('<h1>Trois coleurs: rogue, blanc, et blue</h1>')

  const $couleur1 = $('<div class=couleur>')
  const $couleur2 = $('<div class=couleur>')
  const $couleur3 = $('<div class=couleur>')

  $body.append($div)
  $div.append($h1)
  $div.append($couleur1)
  $couleur1.css('background-color', 'firebrick')
  $div.append($couleur2)
  $couleur2.css('background-color', 'ivory')
  $div.append($couleur3)
  $couleur3.css('background-color', 'cornflowerblue')

  $body.append($div2)

  const $h12 = ('<h1>Lumpy Space Princess</h1>')
  const $img = ('<img src=https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9f/Lumpy_Space.png/revision/latest?cb=20110730224431>')
  $div2.append($h12)
  $div2.append($img)


  $h1.text('Three colors: red, white, and blue')
  $couleur2.css('background-color', 'black')
  $couleur3.css('background-color', 'orange')

  $body.append($div)
  $h12.text('Ice King')
  //change the image
  //$img.


})
