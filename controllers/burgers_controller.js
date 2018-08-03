var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res){
    burger.selectAll(function(data){
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render('index', burgerObject);
    });
});

router.post('/api/burgers', function(req, res){
    var body = req.body;
    console.log('body', body);
    burger.insertOne('burger_name', body.burger_name, function(result){
        console.log(result);
        res.status(200).end()
    });
});

router.put('/api/burgers/:id', function(req, res){
    var condition = req.params.id;
    console.log("condition", condition);

    burger.updateOne('devoured', condition, function(result){
        console.log(result);
        if(result.changedRows == 0){
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    });

});

module.exports = router;