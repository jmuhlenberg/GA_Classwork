Title: React Black Jack<br>
Creator: Karolin Rafalski <br>
Competencies: PHP<br>

---

# PHP Blackjack

![Card image](https://i.imgur.com/a62n4Kz.png) ![Card image](https://i.imgur.com/9KINWK9.png)

Blackjack is a card game. Use the following outline to guide you to build a PHP Blackjack game. Feel free to solve this in a different order or come up with different ways to accomplish the required game play.

This game will be made up of two players. One will be a person interacting with the browser, the other will be The House, which will be played by the computer.

## Deliverables

- A working blackjack game that you can play in the terminal
- A way to deal 2 cards at once to both the player and computer and let them know who won.
-A way to keep track of bank totals for the user and computer

**BONUS**

- allow players to play another round


### Players

Players will have 3 properties, a name, a bankroll(amount of money), a hand (an array of cards)


### The Deck

- Create an empty array that will hold your card objects. This can just be an array, it does not need to be a class/object

### Cards

Recommended but not required: us a class to make the cards:

- make 52 card objects which should be made up of 4 sets of 13 cards
- Cards should have at least one property `value`
- Cards can have more properties like `face` and `suit`, but these are not needed for the core functionality of your game. Try practicing YAGNI (You Ain't Gonna Need It). Perhaps in building your cards, your solution will make more sense to have one or both properties, but don't add them just for the sake of adding them.
- Eventually, your cards will be made up of a div with the value displaying inside. You can style with a little CSS.
- DO NOT spend time looking for card images and figuring out how to add them to your project - your goal is to practice the basics of React and practice JS logic (and a little CSS practice) - looking for card images and adding them can easily take a large chunk of your time away from the main goals

#### 13 cards:

- cards 2 - 10 have the same face and value (a card with a face of 2 is worth 2 points)
- cards Jack, Queen and King are all worth 10
- An Ace should start out with a value of 11

In summary one set will be 13 cards with the values of 2 - 9, one card worth 11 and 4 cards that are worth 10

#### 4 sets of 13

- Find a way to make 4 sets of the 13 cards

### Cards - Suggested Approach (feel free to build them out how you want)

- Using classes, make 52 card objects (make Card class) which should be made up of 4 sets of 13 cards.
  - Hint: as you make each card, put it into your deck array

**Bonus**

- Add a suit of 'hearts', 'diamonds', 'spades' or 'clubs' to each set of 13 cards
- use symbols (google which work with ruby/ your console)

**Bonus**

- a face: cards 2-10 have the same face as their value, but Jack, Queen, and King have a value of 10. An Ace has a starting value of 11

### Shuffle the Deck

- Research how to shuffle the values in the array, the cards should be shuffled before playing

### Confirm success

- be sure to console log your cards and deck - inspect your deck for 52 cards, inspect your cards that they are all there, with the correct values and that the objects are what you expect

### Getting Started with React

- add state to your app : set your card deck as an empty array to start

- give each player 2 cards
- create two divs - one for each player, display their cards in their respective containers, also display their name bankroll - us a simple border properties in CSS to help visualize what is what.
- create a function that checks who has the bigger sum

### Win/Lose Logic

- player with the larger sum wins the hand
- display a message who won
- subtract 10 from the loser's bankroll and add 10 to the winner's bank roll
- if there is a tie, display a message that there is a tie, do not change the bank roll

**Bonuses:**

- Add a button to allow the players to take another turn
- generate another deck of cards, once you've depleted this deck
- if the player falls below 0 in their bankroll display a message and stop the game
- if the house falls below zero in its bankroll display a different message
- If the sum of the cards is greater than 21 the player automatically loses
- If the sum is greater than 21 (two aces), change an ace to have a value of 1
- allow the default bet amount to be changed
- Allow the player to add a card if they do not have a greater sum, remember if the sum is over 21 the player has gone bust and loses
- Create some logic to decide if the house should get another card
- Implement more features of the classic game

## Considerations

## Hungry For More

- Polish the game play to make it smoother, clearer, informative and fun to play
- allow for player to add more cards to their hand
- allow more game play options, like double-down and split
- allow creation of a new deck if the deck is used up
- allow player to choose how many decks of cards are used for gameplay
- sky is the limit with functionality. Add text colors, fun messaging, dealer hand logic of whether or not to add a card. Provide a suggestion for the player of whether to stay, hit, split, etc...
