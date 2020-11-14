const express = require('express');
const mongoose = require('mongoose');
const Fruit = require('./models/fruits.js');
const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/fruits/seed', (req, res) => {
    Fruit.create(
        [
            {
               name:'grapefruit',
               color:'pink',
               readyToEat:true
            },
            {
                name:'grape',
                color:'purple',
                readyToEat:false
            },
            {
                name:'avocado',
                color:'green',
                readyToEat:true
            }
        ],
        (err, data) => {
            res.redirect('/fruits');
        }
    )
});

app.get('/fruits/new', (req, res) => {
    res.render('new.ejs');
});

app.get('/fruits/:id', (req, res) => {
    Fruit.findById(req.params.id, (error, foundFruit) => {
        res.render(
            'show.ejs',
            {
                fruit:foundFruit
            }
        );
    })
});

app.get('/fruits', (req, res) => {
    Fruit.find({}, (error, allFruits) => {
        res.render(
            'index.ejs',
            {
                fruits: allFruits
            }
        );
    })
});

app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit) => {
        res.redirect('/fruits')
    })
})

// $('div').on('click', () => {
//     console.log('bar');
// })
// console.log('foo');

app.listen(3000, () => {
    console.log('listening...');
})
mongoose.connect(
    'mongodb://localhost:27017/basiccrud',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    () => {
        console.log('connected to mongod');
    }
)
