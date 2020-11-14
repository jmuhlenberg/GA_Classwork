//on load function
$(() => {

  const addH2 = () => {
  const $h2 = $('<h2>').text('just getting started')
  $('body').append($h2)
  }

  const changeH2 = () => {
    $('h2').text('Getting warmed up.')
  }

  // addH2()
  // changeH2()

  //function to genterate random rgb values
  const randColorRGB = () => {
  	const red = Math.floor( Math.random() * 256 );
  	const green = Math.floor( Math.random() * 256 );
  	const blue = Math.floor( Math.random() * 256 );
  	return `rgb(${red}, ${green}, ${blue})`
  }


  //add 1000 divs to the DOM
  const generateSquares = (numberOfSquares) => {
    for(let i=1; i<=numberOfSquares; i++){
      // console.log(i);
      //make a square with jQuery - add a class that gives it shape
      const $square = $('<div>').addClass('square')
      //adding color to the squares
      const color = randColorRGB()
      $square.css('background-color', color)
      //add text to the square
      $square.text(i)
      //adding an id to each square
      $square.attr('id', 'square_'+i)
      //append the square to the body
      $('body').append($square)
    }
  }

  generateSquares(1000)

})
