$(() => {

  $('form').on('submit', (event) => {

    event.preventDefault();

    const userInput = $('input[type="text"]').val()
    $('form').trigger('reset')

    console.log(userInput);


    $.ajax({  //.ajax is a function that takes an argument of an object
      url: 'https://www.omdbapi.com/?apikey=53aa2cd6&t=' +userInput
    }).then(
      (data) => {   //success callback
        $('#title').html(data.Title)
        $('#year').html(data.Year)
        $('#rated').html(data.Rated)
      },
      (error) => {   //fail callback
        console.log(error);
      }
    )


  })




})
