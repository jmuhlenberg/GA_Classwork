

//on load function.
$(() => {
  let number1 = ''
  let number2 = ''
  let operator = null

  //function to clear
  $('#clear').on('click', () => {
    $('.screen').empty()
    number1 = ''
    number2 = ''
    operator = null
  })


  //functions to get the number selected
  //one
  $('#one').on('click', () => {
    if(operator === null){
      number1 = number1 + '1'
      $('.screen').append('1')
      console.log(number1);
    }else{
      number2 += '1'
      $('.screen').append('2')
      console.log(number2);
    }
  })



  //two
  $('#two').on('click', () => {
    if(operator === null){
      number1 = number1 + '2'
      $('.screen').append('2')
      console.log(number1);
    }else{
      number2 += '2'
      $('.screen').append('2')
      console.log(number2);
    }
  })


  //three
  $('#three').on('click', () => {
    if(operator === null){
      number1 = number1 + '3'
      $('.screen').append('3')
      console.log(number1);
    }else{
      number2 += '3'
      $('.screen').append('3')
      console.log(number2);
    }
  })


  //four
  $('#four').on('click', () => {
    if(operator === null){
      number1 = number1 + '4'
      $('.screen').append('4')
      console.log(number1);
    }else{
      number2 += '4'
      $('.screen').append('4')
      console.log(number2);
    }
  })

  //five
  $('#five').on('click', () => {
    if(operator === null){
      number1 = number1 + '5'
      $('.screen').append('5')
      console.log(number1);
    }else{
      number2 += '5'
      $('.screen').append('5')
      console.log(number2);
    }
  })

  //six
  $('#six').on('click', () => {
    if(operator === null){
      number1 = number1 + '6'
      $('.screen').append('6')
      console.log(number1);
    }else{
      number2 += '6'
      $('.screen').append('6')
      console.log(number2);
    }
  })

  //seven
  $('#seven').on('click', () => {
    if(operator === null){
      number1 = number1 + '7'
      $('.screen').append('7')
      console.log(number1);
    }else{
      number2 += '7'
      $('.screen').append('7')
      console.log(number2);
    }
  })

  //eight
  $('#eight').on('click', () => {
    if(operator === null){
      number1 = number1 + '8'
      $('.screen').append('8')
      console.log(number1);
    }else{
      number2 += '8'
      $('.screen').append('8')
      console.log(number2);
    }
  })

  //nine
  $('#nine').on('click', () => {
    if(operator === null){
      number1 = number1 + '9'
      $('.screen').append('9')
      console.log(number1);
    }else{
      number2 += '9'
      $('.screen').append('9')
      console.log(number2);
    }
  })

  //zero
  $('#zero').on('click', () => {
    if(operator === null){
      number1 = number1 + '0'
      $('.screen').append('0')
      console.log(number1);
    }else{
      number2 += '0'
      $('.screen').append('0')
      console.log(number2);
    }
  })

  //decimal
  $('#deci').on('click', () => {
    if(operator === null){
      number1 = number1 + '.'
      $('.screen').append('.')
      console.log(number1);
    }else{
      number2 += '.'
      $('.screen').append('.')
      console.log(number2);
    }
  })


  //add on click change operator to addition. function to add
  $('#add').on('click',() => {
    operator = 'add'
    $('.screen').append('+')
  })


  //function to subtract
  $('#minus').on('click',() => {
    operator = 'sub'
    $('.screen').append('-')
  })


  //function to multiply
  $('#mult').on('click',() => {
    operator = 'mult'
    $('.screen').append('x')
  })


  //function to divide
  $('#divide').on('click',() => {
    operator = 'divide'
    $('.screen').append('/')
  })


  //function to calculate
  //collect the operator



  //on equal
  $('#equal').on('click',() => {
    num1 = parseInt(number1)
    num2 = parseInt(number2)
    total = 0;
    if(operator === 'add'){
      total = num1+num2
    }else if(operator === 'sub'){
      total = num1-num2
    }else if(operator === 'mult'){
      total = num1*num2
    }else{
      total = num1/num2
    }
    $('.screen').append('=')
    $('.screen').append(total)
  })


})
