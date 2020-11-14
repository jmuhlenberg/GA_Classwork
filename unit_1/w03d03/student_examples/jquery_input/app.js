// console.log('todo');

const list = []

$(() => {
  // very simple example
  // $('#submit-btn').on('click',() => {
    // console.log('clicked')
    // const inputValue = $('#input-box').val()
    // console.log(inputValue)
  // })

  //form
  $('form').on('submit',(event) => {
    event.preventDefault()
    const inputValue = $('#todo').val()
    list.push(inputValue)
    console.log(list);
    $(event.currentTarget).trigger('reset')
    render()
  })

  const render = () => {
    const lastIndexOfList = list.length-1
    const $newLi = $('<li>').text(list[lastIndexOfList])
    $('ul').append($newLi)
    $newLi.on('click', (event) => {
      $(event.currentTarget).css('text-decoration', 'line-through')
    })
  }
})
