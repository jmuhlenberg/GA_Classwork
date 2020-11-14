// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file properly!')};

// console.log($);

//jQuery way to create a div
//when you are creating an element you MUST use the <> around the element name.
//const $div = $('<div>')
//console.log($div);

//Vanilla JS way to create a div
//document.createElement('div')

//NOT using the $ as part of the variable name still gives us a jQuery object
//const div = $('<div>')

//it won't appear anywhere because we didn't append it to the body
// const $body = $('body')
// console.log($('body'));

//document on load function
$(  ()=> {
  const $div = $('<div>')
  //console.log($div);
  //adding a class to the element
  $div.addClass('meat')

  // const $h3 = $('<h3>')   //this seems like a long way to write out
  // $h3.text('Ostrich')
  const $h3 = $('<h3>').text( 'Ostrich' );
  $div.append($h3)

  const $body = $('body')
  // console.log($('body'));

  //append to add div to the body
  $body.append($div)

  const $div2 = $('<div>').addClass('fruit')
  // $div2.addClass('fruit')    //eliminate function by adding to above.
  const $h32 = $('<h3>').text('Banana')
  $div2.append($h32)
  $body.append($div2)
  // $body.append($div2).addClass('dairy').append($h32)  //this adds another div with the specified parameters - seems to make it an h3 not inside a div..
  $( '.meat' ).remove()

  //ways to prepend the image
  // const $img = $('<img src= https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D>')
  // $body.prepend($img)
  $body.prepend('<img src= https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D>')    //seems like you dont need to store the img to a variable.
  const $divs = $('div')
  // $divs.hide('slow')

  console.log($divs[2])
  //grab the children of this element
  // $divs[2].children()
  //this won't work because you're trying to select a vanilla DOM object

  console.log($divs.eq(2).children());

  //we are getting an h3 element back. Let's change it's text
  $divs.eq(2).children().text( 'Kohlrabi');

  //change css on the fly
  $body.css('border', '2em solid black')

  const $h3two = $('<h3>').text('Hello')

})
