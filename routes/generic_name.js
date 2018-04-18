var express = require('express');
var router = express.Router();
var generic_name_dal = require('../dal/generic_name_dal');
var medication_dal = require('../dal/medication_dal');

/* GET users listing. */
router.get('/all', function(req, res, next) {
    generic_name_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('generic_name/generic_name_view_all', {generic_name: result[0]});
        }
    })

});

router.get('/add', function(req, res) {
    medication_dal.getAll(function (err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.render('generic_name/generic_name_add', {medication: result});
        }
    });
});


router.get('/insert', function(req, res) {
    generic_name_dal.insert(req.query, function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/generic_name/all');
        }
    });
});

router.get('/edit', function(req, res) {
    generic_name_dal.getinfo(req.query.medication_id, function (err, result) {
        if(err) {res.send(err); }
        else   {
            res.render('generic_name/generic_name_update',
                {generic_name: result[0]}
            );
        }
    });
});

router.get('/update', function (req, res) {
    generic_name_dal.update(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/generic_name/all');
        }
    });
});

module.exports = router;