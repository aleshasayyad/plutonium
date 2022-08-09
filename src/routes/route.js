const { query } = require('express');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

router.get('/movies', function (req, res){
    let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(movies)
})
router.get('/movies/:indexNumber', function (req, res){
    let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let picture=req.params.indexNumber
    if(picture>movies.length){
        return res.send("error message")
    }else{
        console.log(req.params)
        console.log(picture)
        res.send(movies[picture])

    }
    // console.log(movies[picture])
    // res.send(movies[picture])
    
})
 router.get('/films', function (req, res){ 
    let filmsName=
    [ {
        "id": 1,
        "names": "The Shining"
       }, {
        "id": 2,
        "names": "Incendies"
       }, {
        "id": 3,
        "names": "Rang de Basanti"
       }, {
        "id": 4,
        "names": "Finding Nemo"
        
       }]
       res.send(filmsName)
    })
    router.get('/films/:filmId', function(req,res){
        let filmsName = [ {
            "id": 1,
            "names": "The Shining"
           }, {
            "id": 2,
            "name": "Incendies"
           }, {
            "id": 3,
            "names": "Rang de Basanti"
           }, {
            "id": 4,
            "name": "Finding Nemo"
           }]
           let xyz = req.params.filmId
           if(xyz>filmsName.length){
            return res.send("No movie exists with this id")
           }else{
            console.log(req.params)
            console.log(xyz)
            res.send(filmsName[xyz])
           }
    })
    router.get("/shoes",function(req,res){
        let QueryParams=req.query
        let brand=QueryParams.brand
        res.send("dummy response")
    })

    
   
module.exports = router;