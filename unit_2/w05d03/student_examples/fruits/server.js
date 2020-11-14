const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');

//middleware, can use normal JS in this bit
//cannot manipulate the DOM, but can manipulate the ejs files
// app.use((req, res, next) => {
//   console.log('I run for all routes');
//   next()
// })
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))


app.get('/fruits/', (req, res) => {
    res.render(
        'index.ejs',
        {
            allFruits:fruits
        }
    );
});

app.get('/fruits/new', (req, res) => {
  res.render('new.ejs')
})

//View body of a post request
// app.post('/fruits', (req, res)=>{
//     console.log(req.body);
//     res.send(req.body);
// });


// app.post('/products', (req, res) => {
//   console.log('create route accessed');
//   res.send('this route works')
// })
//use 'curl -X POST localhost:3000/products' to access the above through terminal => 'this route works'

app.post('/products', (req, res)=>{
    console.log('Create route accessed!');
    console.log('Req.body is: ', req.body);
    res.send(req.body);
});

//Redirect the user to another page
app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    console.log(fruits);
    res.redirect('/fruits') //send the user back to /fruits
});

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render(
        'show.ejs',
        {
            fruit: fruits[req.params.indexOfFruitsArray]
        }
    )
});

app.listen(3000, () => {
    console.log('listening...');
});
