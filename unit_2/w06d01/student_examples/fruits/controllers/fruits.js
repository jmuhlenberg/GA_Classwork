const express = require('express')
const router = express.Router()
const Fruit = require('../models/fruits.js')
const methodOverride = require('method-override')

router.use(express.urlencoded({extended:true}));
router.use(methodOverride('_method'))

//
// ROUTES
//

//INDEX
router.get('/', (req, res)=>{
  Fruit.find({}, (error, allFruits) => {
    res.render('index.ejs', {fruits: allFruits})
  })
})

//CREATE
router.post('/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit)=>{
        res.redirect('/fruits')
    })
})

//NEW
router.get('/new', (req, res)=>{
    res.render('new.ejs')
})

//SHOW
router.get('/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('show.ejs', {
            fruit:foundFruit
        })
    })
})


//DELETE
router.delete('/:id', (req, res)=>{
    Fruit.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/')//redirect back to fruits index
    })
})


//EDIT
router.get('/:id/edit', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{ //find the fruit
        res.render(
    		'edit.ejs',
    		{
    			fruit: foundFruit //pass in found fruit
    		}
    	)
    })
})

//UPDATE
router.put('/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.redirect('/');
    });
});

module.exports = router
