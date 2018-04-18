var express = require('express');
var router = express.Router();
var warning_dal = require('../dal/warning_dal');

/* GET users listing. */
router.get('/all', function(req, res, next) {
    warning_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('warning/warning_view_all', {warning: result[0]});
        }
    })

});

router.get('/add', function(req, res) {
    warning_dal.getAll(function(err, result) {
        if(err) {
        res.send(err);
        }
        else {
            res.render('warning/warning_add');
        }
    })
});

router.get('/insert', function(req, res) {
    warning_dal.insert(req.query, function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/warning/all');
        }


    });
});

router.get('/edit', function(req, res) {
    warning_dal.getinfo(req.query.medication_id, function (err, result) {
        if(err) {req.send(err); }
        else {
            res.render('warning/warning_update',
                // {skill_result: result[0][0]}
                {warning_result: result[1]}
            );
        }

    });
});

router.get('update', function (req, res) {
    warning_dal.update(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/warning/all');
        }
    });
});

module.exports = router;