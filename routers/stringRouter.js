const express = require('express')
const router = express.Router()

//Home page Router
router.get('/', function(req, res){
    res.send('Welcome to the Home page')
})


// About page Router
router.get('/about', function(req, res){
    res.send('Welcome to the About page')
})

//Exporting the router
module.exports = router