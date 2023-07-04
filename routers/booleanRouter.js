const express = require('express');
const router = express.Router()


router.get('/', function(req, res){
        res.send(true)
})
router.get('/false', function(req, res){
        res.send(false)
})
module.exports = router
