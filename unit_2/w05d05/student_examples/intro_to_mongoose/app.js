const mongoose = require('mongoose')
const Tweet = require('./tweet.js')

//configuration
// tell Mongoose where to connect to Mongo
// protocol, location, port, which subdb, if doesn't exist, it will be created
const mongoURI = 'mongodb://localhost:27017/'+'tweets'
//do less typing
const db = mongoose.connection

//actually make the connection
mongoose.connect(mongoURI, {useNewUrlParser:true, useUnifiedTopology:true}, () => {
  console.log('The connection is restarted');
})


//connection errors
//define callback functions for various events
db.on('error', err => {console.log(err.message+ 'is mongod not running?')})
db.on('connected', () => {console.log("mongo connected: ", mongoURI)})
db.on('disconnected', () => {console.log('mongo disconnected')})

//demonstration purposes
// setTimeout(() => {
//   db.close()
// }, 5000)

const myFirstTweet = {
  title: 'Deep Thoughts',
  body: 'Friends, I have been navel-gazing',
  author: 'Karolin'
}



const manyTweets = [
  {
    title: 'Deep Thoughts',
    body: 'Friends, I have been navel-gazing',
    author: 'Karolin'
  },
  {
    title: 'Sage Advice',
    body: 'Friends, I am vegan and so should you',
    author: 'Karolin',
    likes: 20
  },
  {
    title: 'Whole Reality',
    body: 'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
    author: 'Karolin',
    likes: 40
  },
  {
    title: 'Organic',
    body: 'Friends, I have spent $2300 to be one of the first people to own an organic smartphone',
    author: 'Karolin',
    likes: 162
  },
  {
    title: 'Confusion',
    body: 'Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?',
		author: 'Karolin',
    likes: -100
  },
  {
    title: 'Vespa',
    body: 'Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
    author: 'Karolin',
    likes: 2
  },
  {
    title: 'Licensed',
    body: 'Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson',
    author: 'Karolin',
    likes: 3
  },
  {
    title: 'Water',
    body: 'Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
    author: 'Karolin',
  },
];

// Tweet.insertMany(manyTweets, (error, tweets )=>{
//   if(error){
//     console.log(error)
//   } else {
//     console.log(tweets);
//   } db.close()
// });

// Tweet.create(manyTweets , (error, tweet) => {
//   if(error){ //if there is an error console log it
//     console.log(error);
//   } else { // else show us the created tweet
//     console.log(tweet);
//   }
// 	// get control of terminal back
// 	// else just use control c
//   db.close();
// });

//find all tweets
// Tweet.find((err, tweets)=>{
//   console.log(tweets);
//   db.close()
// })

//look for a specific tweet
// Tweet.find({}, 'title body', (err, tweets)=>{
//   console.log(tweets);
//   db.close();
// })

//We can also use advanced query options. Let's find the tweets that have 20 or more likes
// Tweet.find({ likes: { $gte:20 }}, (err, tweets)=>{
//   console.log(tweets);
//   db.close();
// });


//delete documents with Mongoose
// remove() danger! Will remove all instances
// findOneAndRemove() - this seems like a great choice
// .findByIdAndRemove()- finds by ID - great for delete routes in an express app!
Tweet.findOneAndRemove({title:'Deep Thoughts'}, (err, tweet)=>{
  if (err){
    console.log(err);
  } else {
    console.log('This is the deleted tweet:', tweet);
  }
  db.close()
  })


//update documents with Mongoose
//arguments are: values to change, return the updated item instead of the original, callback
Tweet.findOneAndUpdate({title:'Vespa'},{sponsored: true}, {new: true},(err, tweet)=>{
  if (err){
    console.log(err);
  } else {
    console.log(tweet);
  }
  db.close()
  })
