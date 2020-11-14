//remember to set up your window onload!


//on load function
$(() => {

  //triangle on click
  const triangle = () => {
    $('.triangle').on('click',(event) => {
      $(event.target).removeClass('triangle')
      $(event.target).addClass('circle')
      circle()
    })
  }

  //circle on click
  const circle = () => {
    $('.circle').on('click',(event) => {
      $(event.target).removeClass('circle')
      $(event.target).addClass('square')
      square()
    })
  }

  //square on click
  const square = () => {
    $('.square').on('click',(event) => {
      $(event.target).removeClass('square')
      $(event.target).addClass('triangle-down')
      triangleDown()
    })
  }

  //upside down triangle on click
  const triangleDown = () => {
    $('.triangle-down').on('click',(event) => {
      $(event.target).removeClass('triangle-down')
      $(event.target).addClass('heart')
      heart()
    })
  }

  //heart on click
  const heart = () => {
    $('.heart').on('click',(event) => {
      $(event.target).removeClass('heart')
      $(event.target).addClass('octagon')
      octagon()
    })
  }

  //octagon on click
  const octagon = () => {
    $('.octagon').on('click',(event) => {
      $(event.target).removeClass('octagon')
      $(event.target).addClass('triangle')
      triangle()
    })
  }

  triangle()

})
