$(() => {

  const tDList = []

  //collect the data from the form, create an li and push it to 'buy' list
  $('form').on('submit',(event) => {
    event.preventDefault()
    const $newToBuy = $('#things-to-buy').val()
    tDList.push($newToBuy)
    // console.log(tDList);
    $(event.currentTarget).trigger('reset')
    moveToBought()
  })

  //
  const moveToBought = () => {
    const lastIndexOfList = tDList.length-1
    const $toBuy = $('<div class=item>').text(tDList[lastIndexOfList])
    $toBuy.append($('<button class=cart>In Cart</button>'))
    $('.buy-list').append($toBuy)
    $toBuy.on('click', (event) => {
      console.log(event.target);
      $('.bought-list').append($(event.currentTarget))
      //change the text in the button
      $(event.target).text('remove')
      //toggle class to remove later
      $($toBuy).toggleClass('remove')
      removeItem()
    })
  }

  //when the item is in the bought column and button is clicked. remove.
  const removeItem = () => {
    $('.remove').on('click',(event) => {
      console.log('goodbuy');
      $(event.currentTarget).remove()
    })
  }

})
