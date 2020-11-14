console.log('stranger things are coming');

// document.querySelector('h1').innerText = 'Welcome to the Upside Down';

//querying or reading
const image = document.querySelector('img')
// console.log(image)

//editing or updating
image.style.display = 'none'
image.style.display = 'block'
image.style.filter = 'grayscale(100%)'
image.style.width = '95%'
image.style.filter = ''


//create an element
const eggos = document.createElement('img')
eggos.setAttribute('src', 'https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg')

document.querySelector('.container').appendChild(eggos)

//editing the element
eggos.style.width = '100%'

//removing the element from the DOM
eggos.remove()

//working with more than one element of the same type
//html collection
console.log(document.querySelectorAll('li'))
document.querySelectorAll('li')[0].innerText = 'Demo Dog Hangout'
document.querySelectorAll('li')[4].style.color = 'hotpink'
document.querySelectorAll('li')[3].remove()
