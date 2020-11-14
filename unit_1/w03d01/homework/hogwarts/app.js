// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {
  //==============================================
  //YEAR 1
  const $container = $('#container')
  //console.log($container);
  const $h1 = $('<h1>')
  $container.append($h1)
  $h1.text('Hogwarts')


  //==============================================
  //YEAR 2
  const $h2 = $('<h2>')
  $h2.text('John Muhlenberg')
  const $h3 = $('<h3>')
  $h3.text('Ravenclaw')
  const $h4pet = $('<h4 class=cat>')
  $h4pet.text('Wonton')
  const $h4wand = $('<h4>')
  $h4wand.text('Ebony Wand with Phoenix Feather Core')

  $container.append($h2)
  $container.append($h3)
  $container.append($h4pet)
  $container.append($h4wand)


  //==============================================
  //YEAR 3
  const $storage = $('<ol class=storage>Trunk</ol>')

  const $beer = $('<li>Butter Beer</li>')
  const $cloak = $('<li class=secret>Invisibility Cloak</li>')
  const $map = $('<li class=secret>Magic Map</li>')
  const $time = $('<li class=secret>Time Turner</li>')
  const $leash = $('<li class=cat>Leash</li>')
  const $jbeans = $('<li>Bertie Bott\'s Every Flavor [Jelly] Beans</li>')

  $storage.append($beer)
  $storage.append($cloak)
  $storage.append($map)
  $storage.append($time)
  $storage.append($leash)
  $storage.append($jbeans)

  $container.append($storage)


  //==============================================
  //YEAR 4
  const $classSchedule = $('<table>')
  const $h5 = $('<h5>')
  $h5.text('Spring 2017')
  $container.append($h5)
  $container.append($classSchedule)
  const $top = ('<tr><th>Day</th><th>Classes</th></tr>')
  const $monday = ('<tr><td>Monday</td><td>Herbology, Potions</td></tr>')
  $classSchedule.append($top)
  $classSchedule.append($monday)

  const $tuesday = ('<tr><td>Tuesday</td><td>Charms, Divination</td></tr>')
  $classSchedule.append($tuesday)

  const $wednesday = ('<tr><td>Wednesday</td><td>History of Magic, Transfiguration</td></tr>')
  $classSchedule.append($wednesday)

  const $thursday = ('<tr><td>Thursday</td><td>Defense Against the Dark Arts</td></tr>')
  $classSchedule.append($thursday)

  const $friday = ('<tr><td>Friday</td><td>Quidditch practice</td></tr>')
  $classSchedule.append($friday)


  //================================================
  //YEAR 5
  $h4wand.remove()
  $beer.remove()
  const $h4newWand = $('<h4>').text('Rosewood Wand with Dragon Heartstrings')
  $($h4pet).after($h4newWand)
  $($h4newWand).css('color', 'indigo')

  const $show = $('<div class=show-button>')
  $container.append($show)

  const $mission = $('<ul class=hide>Spy Mission</ul>')
  $h4pet.appendTo($mission)
  $container.append($mission)
  $h3.after($h4pet)


  //=================================================
  //YEAR 6
  $('.secret').hide('slow').delay(2000)
  $('.secret').show('slow')

  $h4pet.addClass('cabbage')
  console.log($h4pet);

  $h4pet.removeClass('cabbage')


  //=================================================
  //YEAR 7
  $h5.text('Fall 2018')
  $beer.appendTo($storage)
  $storage.addClass('chest')


});
