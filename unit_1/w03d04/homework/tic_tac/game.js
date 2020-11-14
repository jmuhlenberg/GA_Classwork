const game = [9, 9, 9, 9, 9, 9, 9, 9, 9]

//array for possible winning situations
const winningArray = [
  [game[0]+ game[1]+ game[2]],
  [game[3]+ game[4]+ game[5]],
  [game[6]+ game[7]+ game[8]],
  [game[0]+ game[3]+ game[6]],
  [game[1]+ game[4]+ game[7]],
  [game[2]+ game[5]+ game[8]],
  [game[0]+ game[4]+ game[8]],
  [game[2]+ game[4]+ game[6]]
]

//track turns
let turn = 0

let computerWins = 0
let playerWins = 0

//function for computer choice
const computerPlay = () => {
  //random number for computer play
  const randomNum = Math.floor(Math.random()*9)

  //if the index is not claimed by player
  if(game[randomNum] === 9){
    // console.log($('#'+randomNum));
    const $computerMove = $('#'+randomNum).text('O')
    $computerMove.removeClass('empty')
    $computerMove.addClass('o')
    game[randomNum] = 3
    turn++
    checkWin()
  }else if(game[randomNum] === 1 || game[randomNum] === 3){
    computerPlay()
  }else{
    return
  }
}


//check the outcome of the game
const checkWin = () => {
  if(turn < 9){
    if(game[0]+game[1]+game[2]===3){
      $('.game-end-message').addClass('show')
      $('.end-message-text').text('You won!')
      playerWins++
      // $('.playerGameWins').eq(0).append(` ${playerWins}`)
    }else if(game[3]+ game[4]+ game[5]===3){
      $('.game-end-message').addClass('show')
      $('.end-message-text').text('You won!')
      playerWins++
    }else if(game[6]+ game[7]+ game[8]===3){
      $('.game-end-message').addClass('show')
      $('.end-message-text').text('You won!')
      playerWins++
    }else if(game[0]+ game[3]+ game[6]===3){
      $('.game-end-message').addClass('show')
      $('.end-message-text').text('You won!')
    }else if(game[1]+ game[4]+ game[7]===3){
      $('.game-end-message').addClass('show')
      $('.end-message-text').text('You won!')
      playerWins++
    }else if(game[2]+ game[5]+ game[8]===3){
      $('.game-end-message').addClass('show')
      $('.end-message-text').text('You won!')
      playerWins++
    }else if(game[0]+ game[4]+ game[8]===3){
      $('.game-end-message').addClass('show')
      $('.end-message-text').text('You won!')
      playerWins++
    }else if(game[2]+ game[4]+ game[6]===3){
      $('.game-end-message').addClass('show')
      $('.end-message-text').text('You won!')
      playerWins++
    }else if(game[0]+game[1]+game[2]===9){
      $('.game-end-message').addClass('show')
      $('.end-message-text').text('The computer won!')
      computerWins++
    }else if(game[3]+ game[4]+ game[5]===9){
      $('.game-end-message').addClass('show')
      $('.end-message-text').text('The computer won!')
      computerWins++
    }else if(game[6]+ game[7]+ game[8]===9){
      $('.game-end-message').addClass('show')
      $('.end-message-text').text('The computer won!')
      computerWins++
    }else if(game[0]+ game[3]+ game[6]===9){
      $('.game-end-message').addClass('show')
      $('.end-message-text').text('The computer won!')
      computerWins++
    }else if(game[1]+ game[4]+ game[7]===9){
      $('.game-end-message').addClass('show')
      $('.end-message-text').text('The computer won!')
      computerWins++
    }else if(game[2]+ game[5]+ game[8]===9){
      $('.game-end-message').addClass('show')
      $('.end-message-text').text('The computer won!')
      computerWins++
    }else if(game[0]+ game[4]+ game[8]===9){
      $('.game-end-message').addClass('show')
      $('.end-message-text').text('The computer won!')
      computerWins++
    }else if(game[2]+ game[4]+ game[6]===9){
      $('.game-end-message').addClass('show')
      $('.end-message-text').text('The computer won!')
      computerWins++
    }else{
      return
    }
  }else{
    $('.game-end-message').toggleClass('show')
    $('.end-message-text').text('It was a draw! Play again?')
  }
}




//on load
$(() => {
  $('.box').on('click', (event) => {
    if(turn < 9){
      const $box = $(event.currentTarget)
      $(event.currentTarget).text('X')
      // $(event.currentTarget).removeClass('empty')
      $(event.currentTarget).addClass('x')
      const gameIndex = $(event.currentTarget).attr('id')
      game[gameIndex] = 1
      turn++
      checkWin()
      computerPlay()
    }else{
      $('.game-end-message').toggleClass('show')
      $('end-message-text').text('It was a draw')
    }
  })

  $('#restartBtn').on('click', () => {
    location.reload()
  })
})





/*
stuff to make the user select the size of the game.

//function to take user input and generate a grid (inputxinput)
const createGrid = (input) => {
  for(i=0; i<input; i++){
    const $row = $('<div class=row>')
    for(j=0; j<input; j++){
      const $box = $('<div class=box>')
      $row.append($box)
    }
    $('.display').append($row)
    //get row width
    const $rowWidth = $('.row').width()
    //create box width based on row width / input
    const $boxWidth = $rowWidth/input
    //add the attribute of width with the calculated width to box
    $('.box').css('width', $boxWidth)
  }
}

//on load
$(() => {

  $('form').on('submit', (event) => {
    event.preventDefault()
    const $inputValue = $('#input').val()
    parseInt($inputValue)
    createGrid($inputValue)
    $(event.currentTarget).trigger('reset')
  })

  $('.box').on('click', () => {
    console.log($(event.currentTarget));
    // $(event.currentTarget).text('X')
  })

})

*/
