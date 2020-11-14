
const makeTriangle = () => {
  const $triangle = $('<div>').addClass('triangle')
  const $row = $('.row')
  $row.append($triangle)
}

const makeRow = () => {
  const $body = $('body')
  const $row = $('<div>').addClass('row')
  $body.append($row)
}

const makePyramids = (rows) => {
  for (i=0; i<=rows; i++){
    const $row = $('<div>').addClass('row')
    for(j=0; j<=i; j++){
      const $triangle = $('<div>').addClass('triangle')
      $row.append($triangle)
      // makeTriangle()
    }
    $('body').append($row)
  }
}


$(() => {
  // makeRow()
  // makeTriangle()

  makePyramids(3)
})
