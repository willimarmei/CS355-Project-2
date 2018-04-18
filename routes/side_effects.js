var express = require('express');
var router = express.Router();
var side_effects_dal = require('../dal/side_effects_dal');

/* GET users listing. */
router.get('/all', function(req, res, next) {
    side_effects_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('side_effects/side_effects_view_all', {side_effects: result});
        }
    })
});

router.get('/add', function(req, res) {
    side_effects_dal.getAll(function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('side_effects/side_effects_add');
        }
    })
});

router.get('/insert', function(req, res) {
    side_effects_dal.insert(req.query, function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/side_effects/all');
        }


    });
});

router.get('/edit', function(req, res) {
    side_effects_dal.getinfo(req.query.side_effects_id, function (err, result) {
        if(err) {req.send(err); }
        else {
            res.render('side_effects/side_effects_update',
                {side_effects_result: result[1]}
            );
        }

    });
});

router.get('update', function (req, res) {
    side_effects_dal.update(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/side_effects/all');
        }
    });
});
module.exports = router;