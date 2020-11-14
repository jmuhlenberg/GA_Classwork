$(() => {
  const $body = $('body')


  const generateGrid = () => {
    for(i=0; i<32; i++){
      const $box = $('<div>').addClass('box').css('background-color', 'red')
      const $box2 = $('<div>').addClass('box').css('background-color', 'black')
      $body.append($box)
      $body.append($box2)
    }
  }

  const generateChecker = () => {
    for(i=0; i<32; i++){
      const $box = $('<div>').addClass('box').css('background-color', 'red')
      const $box2 = $('<div>').addClass('box').css('background-color', 'black')
      if(i < 4){
        $body.append($box)
        $body.append($box2)
      }else if(i >= 4 && i < 8){
        $body.append($box2)
        $body.append($box)
      }else if(i >= 8 && i < 12){
        $body.append($box)
        $body.append($box2)
      }else if(i >= 12 && i < 16){
        $body.append($box2)
        $body.append($box)
      }else if(i >= 20 && i < 24){
        $body.append($box)
        $body.append($box2)
      }else if(i >= 24 && i < 28){
        $body.append($box2)
        $body.append($box)
      }else if(i >= 28 && i < 32){
        $body.append($box)
        $body.append($box2)
      }
    }
  }

  generateGrid()

  // generateChecker()

  //they do the same thing...

})
