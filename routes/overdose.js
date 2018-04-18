var express = require('express');
var router = express.Router();
var overdose_dal = require('../dal/overdose_dal');
var medication_dal = require('../dal/medication_dal');
/* GET users listing. */
router.get('/all', function(req, res, next) {
    overdose_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('overdose/overdose_view_all', {overdose: result[0]});
        }
    })

});

router.get('/add', function(req, res) {
    medication_dal.getAll(function (err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.render('overdose/overdose_add', {medication: result});
        }
    });
});

router.get('/insert', function(req, res) {
    overdose_dal.insert(req.query, function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/overdose/all');
        }


    });
});

router.get('/edit', function(req, res) {
    overdose_dal.getinfo(req.query.medication_id, function (err, result) {
        if(err) {res.send(err); }
        else   {
            res.render('overdose/overdose_update',
                {medication: result[1]}
            );
        }
    });
});

router.get('/update', function (req, res) {
    overdose_dal.update(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/overdose/all');
        }
    });
});

module.exports = router;