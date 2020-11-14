
//function to change color
const changeColor = (event) => {
  //generate a random number
  const red = Math.ceil(Math.random()*256)
  const green = Math.ceil(Math.random()*256)
  const blue = Math.ceil(Math.random()*256)
  const gradient = Math.ceil(Math.random()/10)
  return color = `rgba(${red}, ${green}, ${blue}, ${gradient})`
  console.log(color);
}


//on load
$(() => {

  $('form').on('submit', (event) => {
    event.preventDefault()
    const $inputValue = $('#input').val()
    parseInt($inputValue)
    console.log($inputValue);
    for(i=0; i<$inputValue; i++){
      $('.display').append('<div class=userNumber>')
    }
    $(event.currentTarget).trigger('reset')
  })

  $('.userNumber').on('mouseover',changeColor)

})
