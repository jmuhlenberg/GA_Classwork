//function to query information given a number
const queryInformation = (numb) => {
  console.log('ajax starting');
  $.ajax({
    url: "https://data.zcityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD",
    type: 'GET',
    data:{
      '$limit': numb
    }
  }).then(
    (data) => {
      console.log('hi');
      console.log("Retrieved "+data.length+" records from the dataset!");
      for(i=0; i<numb; i++){
        const $row = $('<div class=row>')
        for(j=0; j<1; j++){
          const $newAlert = $('<div>')
          $newAlert.append(data[i].agency)
          $newAlert.append(data[i].borough)
          $newAlert.append(data[i].descriptor)
          $newAlert.append(data[i].resolution_description)
          $row.append($newAlert)
        }
        $('.displayResults').append($row)
      }
    },
    (error) => {
      console.log('There was an error');
      console.log(error);
    }
  )
}

//on button click display 10 results from the selected borough
const buttonClick = (button) => {

  $.ajax({
    url: "https://data.zcityofnewyork.us/resource/erm2-nwe9.json?borough="+button,
    type: 'GET',
    data:{
      '$limit': 10
    }
  }).then(
    (data) => {
      console.log(data);
      console.log("Retrieved "+data.length+" records from the dataset!");
      for(i=0; i<10; i++){
        const $row = $('<div class=row>')
        for(j=0; j<1; j++){
          const $newAlert = $('<div>')
          $newAlert.append(data[i].agency)
          $newAlert.append(data[i].borough)
          $newAlert.append(data[i].descriptor)
          $newAlert.append(data[i].resolution_description)
          $row.append($newAlert)
        }
        $('.displayResults').append($row)
      }
    },
    (error) => {
      console.log(error);
    }
  )
}

// const displayData = () => {
//
// }


$(() => {
  $('form').on('submit', (event) => {
    //prevent the default function of reset
    event.preventDefault()

    //collect the user's input
    const $userInput = $('input[type="text"]').val()
    //parse it into an integer
    parseInt($userInput)

    //now trigger reset
    $('form').trigger('reset')

    console.log($userInput);
    queryInformation($userInput)
  })

  $('button').on('click', () => {
    console.log(typeof($(event.currentTarget).attr('id')));
    const $userSelection = $(event.currentTarget).attr('id')
    const $userSelUpper = $userSelection.toUpperCase()
    console.log($userSelUpper);
    buttonClick($userSelUpper)
  })


})
