const $colorPalette = $('#color-palette')
const $myPalette = $('#my-palette')
const $generate = $('#generate')


const addColor = (event) => {
	const color = $(event.currentTarget).css('background-color');

	const $square = $('<div>');
	$square.addClass('square');
	$square.css('background-color', color);

	$myPalette.append($square)
}


const makePalette = () => {
  $colorPalette.empty()

	for(let i = 0; i < 150; i++){
		const $square = $('<div>');
		$square.addClass('square');

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red},${green},${blue})`;

    $square.css('background-color', color);

		$colorPalette.append($square);

	}
  $('.square').on('click', addColor)
}

$generate.on('click', makePalette);
