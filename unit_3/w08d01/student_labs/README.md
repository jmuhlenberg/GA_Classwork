![](/ga_cog.png)

# Sunny Animal Shelter 

![](https://imgur.com/Wzz1JBe.png)

The Sunny Animal Shelter has been looking for volunteers to set up their website, so you offered your help because what better way to add onto your resume and use your newly aquired knowledge for web development? Let's get started, there are animals that need to be adopted!

**Learning Objectives**

- Full CRUD Express app with React frontend

**Prerequisites**

- JavaScript
- Node / Express
- React

---

## The Overview 

The animal shelter wants a shiny new site where they can list the animals they have up for adoption for potential adopters to see and maybe even reserve. The following user stories cover all the main functionality that they're hoping for. 

#### User Stories 

- As a user, I should be able to see all the animals up for adoption
- As a user, I should be able to add an animal as up for adoption 
- As a user, I should be able to edit an animal's information in case anything changes
- As a user, I should be able to delete an animal's listing in case they find a happy new home!

---

## The Steps

### Getting Started 

1. In today's `student_labs` folder, `mkdir animal_shelter` 
1. Don't forget to `cd animal_shelter` 
1. Create your server entry point `touch server.js`
1. Initialize this repo for npm `npm init -y`
1. Set up your basic express server! What packages do you need to install? What folders and files do you need? This should be easier now after unit 2, but if you need a refresher, look back at the notes!
1. Do all your work for this app inside the `animal_shelter` folder 

### Creating the Express API 

Set up a full CRUD Express API for the animals that will be listed on the website as up for adoption. Since we have no frontend at this point just yet, test to make sure your routes are working as you go along by using Postman. 

> _NOTE:_ Remember that we're creating an API, so our data will be coming back as JSON

#### Guide 

1. Create a controller for the animals 
1. Create an animal model, a sample schema can be found below: 
  ```js
  {
    name: String,
    species: String,
    image: String,
    reservedForAdoption: Boolean 
  }
  ```
1. Create a create route
1. Create an index route 
1. Create a delete route 
1. Create an edit route 
1. Make sure you test that all the above routes work with Postman before moving on to the frontend portion! 

### Consuming the API with React - Index and Create 

Now that we have an API, we want to actually connect it to a front-end. So, let's go ahead and create the front-end of the Animal Shelter's website that will use our API data. Beginning with the index and create! 

1. Set up your static files (i.e. the `public` folder that will hold all your files for the frontend) 
    - What files do you need? If you don't remember, look back at the notes!
1. Set up your `index.html` with the React script tags and a place to render your component 
1. In your `app.js`, write a basic component that just has an h1 of Sunny Animal Shelter and render it to your page to make sure everything's connected correctly
1. Once you're sure everything's connected, build out the CR functionality 
    - Create a form that on submit will make a POST request to your backend 
        - The create form should only have: name, species, and image 
        - Instead of giving the user the option to specify the reservedForAdoption value, make it be false by default for every animal listing created
    - Make it so that when your page loads, all the animals that are up for adoption will populate the page 

### Consuming the API with React - Delete and Update

Great! The shelter is already happy with just that functionality and it's been getting more people to visit! With the boom in adoptions, they now need a way to remove animal listings once they've found a new home. They've also noticed that they commonly made typos every now and then, so they would love a way to edit the listings in those cases! 

1. Build out the UD functionality
    - Add a "Found a new home" button on each animal, so that when the user clicks on it the animal will be removed from the shelter 
    - Make it so they can update an animal's listing 
        - Similar to the create form, do not worry about letting the user update the reservedForAdoption value. Just let them edit the name, species, and image 
        - If you want to let them updated that value, take a look at hungry for more!

And that's it! The shelter is very happy with the work you've done for them 🐶🐱

---
  
## Hungry for More? 

While the shelter is perfectly content with the current state of the app, as you worked on it you had a couple more feature ideas! 

#### In the backend 

1. Update the schema to add a few more details about the animals: age (Number), sex (String, male or female), breed (String)
    - Don't forget to update all your current database entries to make sure they have those fields as well!  

#### In the frontend

1. Make it so that when you click on an animal's name, it will toggle all the extra information that you just added (age/sex/breed)
    - On page load, don't show this information. Only show it when they click on an animal to see those extra details. When they click again, it should re-hide the information 
1. Add another button to each animal that says "Reserved" so that when a user clicks it, it automatically updates the animal's reservedForAdoption status
    - If the current status is true, it should change it to false and vice versa
1. Make buttons at the top of the page where you can filter by species (e.g. clicking on a "Cats" button will show only the cats) 
1. Style the frontend up! 
1. Think of other features you would personally like to add and try to implement them 
