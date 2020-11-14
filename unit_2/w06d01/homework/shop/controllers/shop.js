////////////////
//DEPENDENCIES//
////////////////

const express = require('express')
const router = express.Router()
const Item = require('../models/item.js')
const methodOverride = require('method-override')


router.use(express.urlencoded({extended: true}))
router.use(methodOverride('_method'))

//////////
//ROUTES//
//////////

//index
router.get('/', (req, res)=>{
  Item.find({}, (error, allItems) => {
    res.render('index.ejs', {items: allItems});
  })
});

//new
router.get('/new', (req, res) => {
  res.render('new.ejs')
})

//create
router.post('/', (req, res) => {
  if(req.body.quantity > 0){
    req.body.isAvailable = true
  }else{
    req.body.isAvailable = false
  }
  Item.create(req.body, (error, createdItem) => {
    // res.send(req.body)
    res.redirect('/store')
  })
})

//show
router.get('/:id', (req, res)=>{
    Item.findById(req.params.id, (err, foundItem)=>{
        res.render('show.ejs', {item: foundItem});
    });
});

//delete
router.delete('/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/store')
  })
})

//edit
router.get('/:id/edit', (req, res) => {
  Item.findById(req.params.id, (err, foundItem) => {
    res.render('edit.ejs', {item: foundItem})
  })
})


//update
router.put('/:id', (req, res) => {
  if(req.body.quantity > 0){
    req.body.isAvailable = true
  }else{
    req.body.isAvailable = false
  }
  Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedItem) => {
    res.redirect('/store')
  })
})

//update quantity
//could use .patch because it only updates one item in this route
//.put updates everything
router.put('/:id/buy', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, {$inc: {quantity:-1}}, () => {
    res.redirect('/store')
  })
})


module.exports = router
