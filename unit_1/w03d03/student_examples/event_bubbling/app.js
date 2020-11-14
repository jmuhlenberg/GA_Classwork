//console.log('app.js')

$(() => {
  // Add jQuery code here
  $('.outside').on('click', (event) => {
    // console.log('OUTSIDE target is: ', $(event.target));
    // console.log('OUTSIDE currentTarget is: ', $(event.currentTarget));

    //doesnt matter where, this will always change blue to black
    // $(event.currentTarget).css('background-color', 'black')
    //this one will change the background color of the element that was clicked
    // $(event.target).css('background-color', 'black')
  })

  $('.inside').on('click', (event) => {
    console.log(('INSIDE target is: ', $(event.target)));
    console.log('INSIDE currentTarget is: ', $(event.currentTarget));
    //stop event bubbling by calling event.stopPropagation
    event.stopPropagation()
    //alternative to stopPropagation is to return false
    // return false
  })
  //
  // $('body').on('click', (event) => {
  // console.log('BODY is clicked')
  // })

})
