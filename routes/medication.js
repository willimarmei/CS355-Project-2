var express = require('express');
var router = express.Router();
var medication_dal = require('../dal/medication_dal');

/* GET users listing. */
router.get('/all', function(req, res, next) {
    medication_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('medication/medication_view_all', {medication: result});
        }
    })

});

router.get('/add', function(req, res) {
        res.render('medication/medication_add');
});

router.get('/insert', function(req, res) {
    medication_dal.insert(req.query, function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/medication/all');
        }
    });
});


router.get('/edit', function(req, res) {
    medication_dal.getinfo(req.query.medication_id, function (err, result) {
        if(err) {res.send(err); }
        else   {
            res.render('medication/medication_update',
                {medication: result[0][0]}
            );
        }
    });
});

router.get('/update', function (req, res) {
    medication_dal.update(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/medication/all');
        }
    });
});

router.get('/delete', function (req, res) {
    medication_dal.delete(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/medication/all');
        }
    });

});

module.exports = router;