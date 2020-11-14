// console.log('Oh hey, I remember something like this')

const handOfCards = []

const playHand = () => {
  if(handOfCards.length === 2){
    console.log('checking', handOfCards);
  }else{
    console.log('adding to', handOfCards);
    //need to push something to handOfCards
    handOfCards.push($(event.currentTarget).children().eq(1).text())
    if (handOfCards.length === 2) {
      playHand()
    }
    })
  }
}

$(() => {

  const $card = $('.card').on('click',(event) => {
    //console.log(event.currentTarget);
    $(event.currentTarget).toggleClass('card-back')
  })



})
