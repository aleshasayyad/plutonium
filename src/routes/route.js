const express = require('express');
const underScore = require('underscore')
const loDash = require('lodash')
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)

  

    let weekend = ['sat', 'sun']
    let result = underScore.first(weekend)
    console.log('Underscore example result is', result)

    let year = ['jan', 'feb', 'march','april', 'may', 'jun', 'july', 'aug', 'sep', 'oct', 'nov', 'dec']
    console.log(loDash.chunk(year,3))

    let oddNum = [ 1,3,5,7,9,11,13,15,17,19]
    console.log(loDash.tail(oddNum))

    let arrays = [ 1,2,2,3,4]
    console.log(loDash.union(arrays))

    let object =  [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(loDash.fromPairs(object))
    
    abc.printName()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason