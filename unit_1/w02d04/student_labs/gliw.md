![](/ga_cog.png)

# Guess Letters in Words Game (GLiW)

You will be creating the popular game of Guess Letters in Words Game as a JavaScript console game!

Make sure you break the problem down before you tackle it. You are encouraged to base your solution on the functions/objects below (You don't have to write the objects/functions in order, but make a plan on how to tackle this project in small steps and commit often as you get parts working)

**Note:** It is encouraged that you follow the basic structure/recommended functions below. But if you work out a different solution to acomplish game play that's ok! Roll with it!

Here is an example game (when done with alerts and prompts instead of in the console) 

![](https://imgur.com/UqDlrsa.gif)

---

## Setting Up

1. Make an array called `words` that contain words to be guessed. Start simple by just having your player guess a single word. Later on, you can refactor your code so that your player is guessing phrases. But for now keep it simple

1. Make a function called `chooseWord` that returns a random word from the `words` array

## The `game` Object

1. Make an object called `game` that has the following attributes

* `guesses`
  * should be a number
* `guessedLetters`
  * should be an array of strings, by default set it to an empty array - you will push guessed letters into it later during gameplay
* `isOver()`
  * a function that checks whether to play another round, depending on if the game is won, lost, or can still be played (meaning, not won and the are still more than 0 guesses left)
   * Suggested functionality:
     * returns true if the word is fully guessed 
     * returns true if the number of guesses is 0
     * returns false if the game should still be in play
* `overMessage()`
  * returns "You win", if the word is completely guessed
  * returns "You lose", if `guesses` is 0
 
## The `Letter` class

In order to play GLiW, you will need information about each letter - what is its value? Is it hidden? You will also need a way to change its state (from hidden to not hidden), depending on if the player has guessed the letter. 

#### Attributes

* `value`
  * a string
* `hidden`
  * a boolean (should be set to true by default)
* `show()`
  * a function that will set `hidden` to false
* `display()`
  * a function that will return ` _ ` if the letter is hidden and return the value if the letter is not hidden

## The `Word` class

The Word class will help generate the Letter objects and store each letter as an object inside an array called `letters`.

#### Attributes

* `letters`
  * an array of `Letter` objects
* `getLetters(newWord)`
  * accepts an input argument, a string. It will split the string into `Letter` objects and push them into the `letters` array
* `isFound()`
  * returns true if no letters are still hidden 
  * returns false if at least one letter is hidden
* `test(letter)`
 * accepts an argument, a string 
 * goes through the Letters in the letter array and updates the `.hidden` value on the ones whose value matches the input argument `letter` and returns a boolean indicating if the letter was found
* `render()`
  * returns the word in its "guessed state"
  * e.g.: for the word 'closure', if the letters l, s, and e have been guessed, this function should return the string `_ l _ s _ _ e`


## More `game` Attributes
You may find writing these functions inside the `game` object very challenging at first. If you do, create them as global functions first just to get them working. If you finish or if you're comfortable with it, as a stretch, refactor your code so these functions are inside the `game` object instead of being global functions.

### `startGame()`
* Write a function called `startGame`. Suggested functionality:
  * set `game.guesses` to ten
  * reset the `game.guessedLetters` array
  * select a random word from `words` using the `chooseWord()` function and set it to a variable named `currentWord`
  * create a `new Word`, set it to a a variable named `currentGame`
  * call `currentGame.getLetters(currentWord)` to set up the `currentGame.letters` array. It should be an array of `Letters` objects
  * call playGame() once 
  
### `playGame()`
* Write a function called `playGame`. Suggested functionality:
 * Using the `game.isOver()` function, check if another round should be played or if the game is over 
 * Use if/if else/else to decide what should happen
 * If the game is not over:
   * Prompt the player to enter a letter
   `test(letter)` if `letter` hasn't been tried already. Push the `letter` tried into the array of `guessedLetters`
   * decrease the guess count each round 
   * check if the game is over `game.isOver()`
    * if `true` call overMessage()
    * if `false` call playGame() **caution** this may cause an infinite loop without the correct logic
    
---

## Hungry for More (choose any)

* After the game is over, give the user the option to either quit or start a new game, and implement the necessary code for this feature to work
* Hook it up to the DOM
* Improve user experience - allow users to enter upperletters or lowercase letters, let a user know they entered an invalid character (number, symbol), let a user know they entered more than one character, add more informative prompts/alerts and more!
* Switch from prompt/alert in the browser to an input field  and display the game progress in the browser (render guessed word, show played letters, number of guesses left). We will be covering how to do this in class next week. But if you are excited to research and implement this on your own- go for it!
