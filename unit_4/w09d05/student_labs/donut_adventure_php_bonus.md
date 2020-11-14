[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Donut Adventure PHP

#### Learning Objectives

- Practice creating objects
- Object methods, classes
- Inheriting from a parent class

#### Prerequisites

- PHP

---

## Daring Adventure! - Getting Started 

1. Inside today's `student_labs` folder, create a folder called `donut_adventure`
2. Navigate inside the `donut_adventure` folder and create a `adventure.php` file.
3. Connect the files and for the rest of this homework, work in the `adventure.js` file. Confirm that you've successfully connected your files by console logging something and checking your browser developer tools console!

## Daring Adventure! - Let's Go!

![dancing donut](https://media.giphy.com/media/ToMjGpPgn8mV9iUOOw8/giphy.gif)

> The Adventure of Dougie the Donut on the Streets of NYC.

> Dougie is a funky fresh donut who has decided to walk his way from the Flat Iron District to Times Square where he wants to show off his sweet moves. Along the way, Dougie is approached by his arch nemesis Pizza Rat. Sometimes they fight, sometimes they just talk smack at each other. Anyway that it goes, let's try to get Dougie safely to Times Square!

For this section of the homework, you'll be making two objects that will interact. First we will create a Hero class, then an Enemy class, and instantiate our two objects from those classes.

### Our Hero 

Let's create our Hero class!

#### Attributes:
- name: set name from parameter in constructor method
- health: initially 100
- weapons are `sprinkleSpray` with damage of 5 and `sugarShock` with damage of 10.

- catchPhrases: use the following array 
    ``` 
    array('i\'m fresher than day old pizza', 
    'you can\'t count my calories');
    ```
    
#### Methods:
- talkSass: displays one of his catchphrases randomly
- announceHealth: displays his current health
- fight: for now,  displays `'i\'m ready to rumble'`

Now, using this Hero class, create an instance of our hero Dougie the donut.

:red_circle: **Commit your work!** <br>
Your commit message should read something like: <br>
"created our hero dougie"

### Our Enemy 

Now let's create our Enemy class!

#### Attributes:
- name: set name from parameter in constructor method
- health: initially 100
- weapons are `pepperoniStars` with damage of 5 and `cheeseGrease` with damage of 10.

- catchPhrases: 
    ```
    array('i\'m youtube famous',
    'i\'m more dangerous than an uncovered sewer');
    ```
    
#### Methods:
- talkSmack: displays one of his catchphrases randomly
- announceHealth: displays his current health
- fight: for now, displays `i\'m gonna flatten you like a slice of pepperoni!`

Now, using this Enemy class, create an instance of the enemy Pizza Rat.

![pizza rat](https://i.imgur.com/PCI8ZWP.png)

:red_circle: **Commit your work!** <br>
Your commit message should read something like: <br>
"created our enemy pizza rat"

### Walking Down the Street

Now, let's write their story! Dougie is walking down Flat Iron -- but oh no! He runs into Pizza rat!
   
1. Have Dougie `talkSass` 
1. Have Pizza Rat `talkSmack`
1. Have Dougie `announceHealth`
1. Have Pizza Rat `announceHealth`

### Fight!

Things have escalated between Dougie and Pizza Rat! 

1. Upgrade their fight methods so that it accesses one of their weapons and displays its hitpoints.
1. Keep upgrading this fight method to accept an argument called enemy so that when you call on the fight method you can pass in the entire Dougie or Pizza Rat object as the parameter. (i.e. `dougie.fight(pizzaRat)`)
1. Now that we are able to pass in Dougie or Pizza Rat as an object, we can make it so that our fight method subtracts from their health. 
    - Using the hitpoints from the weapon they're using, subtract that amount from the enemy's health (i.e. If Dougie fights Pizza Rat using sprinkleSpray, subtract sprinkleSpray's hitpoint value (5) from Pizza Rat's health)
    - Display the enemy name and their new health value (i.e. 'Dougie got hit by pepperoniStars! His health is now at 95!')

Now, they can fight!

1. Have Pizza Rat `fight` Dougie
1. Have Dougie `fight` Pizza Rat
1. Have Pizza Rat and Dougie both `announceHealth` to make sure their health has decreased! 

:red_circle: **Commit your work!** <br>
Your commit message should read something like: <br>
"dougie and pizza rat have fought"

---

## Hungry for More?


1. Make it into a game with an ending, until someone has 0 health left.

1. Randomize the weapon choice in the fight method.

1. Change to alert and prompts instead of using the console.

1. Expand this to your heart's content! Sky is the limit!

1. Finish your labs!


---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
