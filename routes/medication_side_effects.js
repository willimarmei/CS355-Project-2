var express = require('express');
var router = express.Router();
var medication_side_effects_dal = require('../dal/medication_side_effects_dal');
var medication_dal = require('../dal/medication_dal');
var side_effects_dal = require('../dal/side_effects_dal');

/* GET users listing. */
router.get('/all', function(req, res, next) {
    medication_side_effects_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('medication_side_effects/medication_side_effects_view_all', {med_side_effects_result:result[0]});
        }
    })
});

router.get('/add', function(req, res) {
    res.render('medication_side_effects/medication_side_effects_view_add');
});

router.get('/insert', function(req, res) {
    medication_side_effects_dal.insert(req.query, function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/medication_side_effects/all');
        }


    });
});

router.get('/edit', function(req, res) {
    medication_side_effects_dal.getinfo(req.query.medication_id, function (err, result) {
        if(err) {res.send(err); }
        else   {
            res.render('medication_side_effects/medication_side_effects_update',
                {medication_side_effects: result[0]}
            );
        }
    });
});

router.get('/update', function (req, res) {
    medication_side_effects_dal.update(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/medication_side_effects/all');
        }
    });
});

router.get('/delete', function (req, res) {
    medication_side_effects_dal.delete(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/medication_side_effects/all');
        }
    });

});

module.exports = router;