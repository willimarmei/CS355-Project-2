var express = require('express');
var router = express.Router();
var interactions_dal = require('../dal/interactions_dal');
var medication_dal = require('../dal/medication_dal');

/* GET users listing. */
router.get('/all', function(req, res, next) {
    interactions_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('interactions/interactions_view_all', {interaction_result: result[0]});
        }
    })

});

router.get('/add', function(req, res) {
    medication_dal.getAll(function (err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.render('interactions/interactions_add', {medication: result});
        }
    });
});

router.get('/insert', function(req, res) {
    interactions_dal.insert(req.query, function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/interactions/all');
        }


    });
});

router.get('/edit', function(req, res) {
    interactions_dal.getinfo(req.query, function (err, result) {
        if(err) {res.send(err); }
        else   {
            res.render('interactions/interactions_update',
                {medication: result[0]}
            );
        }
    });
});

router.get('/update', function (req, res) {
    interactions_dal.update(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/interactions/all');
        }
    });
});

router.get('/delete', function (req, res) {
    interactions_dal.delete(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/interactions/all');
        }
    });

});

module.exports = router;