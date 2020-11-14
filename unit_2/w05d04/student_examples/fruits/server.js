const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');
//include the method-override package
const methodOverride = require('method-override');


//middleware
app.use(express.urlencoded( { extended:false } ) );
app.use(express.static('public'))
//after app has been defined (up above, in methodOverride)
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));

app.get('/fruits/', (req, res) => {
    res.render(
        'index.ejs',
        {
            fruits:fruits
        }
    );
});

app.delete('/fruits/:indexOfFruitsArray', (req, res) => {
	fruits.splice(req.params.indexOfFruitsArray, 1); //remove the item from the array
	res.redirect('/fruits');  //redirect back to index route
});

app.put('/fruits/:indexOfFruitsArray', (req, res) => { //:indexOfFruitsArray is the index of our fruits array that we want to change
	if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
		req.body.readyToEat = true;
	} else { //if not checked, req.body.readyToEat is undefined
		req.body.readyToEat = false;
	}
	fruits[req.params.indexOfFruitsArray] = req.body; //in our fruits array, find the index that is specified in the url (:indexOfFruitsArray).  Set that element to the value of req.body (the input data)
	res.redirect('/fruits'); //redirect to the index page
});

app.get('/fruits/:indexOfFruitsArray/edit', (req, res)=>{
	res.render(
		'edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
			fruit: fruits[req.params.indexOfFruitsArray], //the fruit object
			index: req.params.indexOfFruitsArray //... and its index in the array
		}
	);
});

app.get('/fruits/new', (req, res) => {
    res.render('new.ejs');
});

// app.post('/products', (req, res) => {
//     console.log('Create route accessed');
//     console.log('req.body is: ', req.body);
//     res.send(req.body);
// })



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
