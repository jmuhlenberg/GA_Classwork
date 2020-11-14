![](/ga_cog.png)

# Tamagotchi Mini-Project

![](https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_963,h_601/https://2inn3u3s3k9e1asyaw3g5gb6-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/where-to-buy-tamagotchi-on-2019-new-pre-order-release-date.png)

Let's use our development skills to create a "living" pet! We'll use HTML, CSS, and JavaScript/jQuery to interact with our pet.

---

## Set Up

1. In today's `student_labs` folder, create a folder called `tamagotchi` and do your work for this assignment in there 

## `Tamagotchi` Class 

Create a Class for your tamagotchi. 

It should have the following attributes: 

- name 
- owner
- age
- hunger (should be a number)
- sleepiness (should be a number)
- boredom (should be a number)
    
It should have the following functions so that you can call it later on in the chrome console (e.g. `tamagotchiNameHere.feed()`): 
    
- a function to feed your pet (decrease its hunger) 
- a function to turn off the lights (decrease its sleepiness)
- a function to play with your pet (decrease its boredom)
- a function to age your pet (increase its age)
- a function that checks your pet's stats and has your pet pass away when its hunger, boredom, or sleepiness hits 10

## Create and take care of your pet 

1. Create your Tamagotchi by using the class you just wrote 
1. Use `setInterval()` to...
    - increase your pet's age every x minutes
    - ncrease your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing
    
## Hungry for More 

1. Make it so that your tamagotchi actually has an appearance and display it on the broswer  
1. Add functionality that lets your pet "morph" at certain ages (changes appearance)
1. Change from the console to the DOM, make  buttons to call the functions and update the view of tomagotchi's stats
1. Add functionality that lets your Tamagotchi give birth to baby tamagotchi
1. Add an `excercise()` method to your Tamagotchi that affects certain properties
1. Add anything you can think of... use your imagination, have fun!

--- 

### Acknowledgements

Thank you GA's Connected Classroom for providing the basis of this lab!
