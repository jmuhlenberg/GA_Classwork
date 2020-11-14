const addText = () => {
  $('body').append('It seems as if it has been clicked.')
}

const changeClass = () => {
  $('body').toggleClass('black' )
}

$(() => {
  const $btn = $('#btn').on('click', changeClass)
})
