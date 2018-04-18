var express = require('express');
var router = express.Router();
var precautions_dal = require('../dal/precautions_dal');

/* GET users listing. */
router.get('/all', function(req, res, next) {
    precautions_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('precautions/precautions_view_all', {precautions: result});
        }
    })

});

router.get('/add', function(req, res) {
    res.render('precautions/precautions_add');
});

router.get('/insert', function(req, res) {
    precautions_dal.insert(req.query, function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/precautions/all');
        }


    });
});

router.get('/edit', function(req, res) {
    precautions_dal.getinfo(req.query.medication_id, function (err, result) {
        if(err) {res.send(err); }
        else   {
            res.render('precautions/precautions_update',
                {medication: result[1]}
            );
        }
    });
});

router.get('/update', function (req, res) {
    precautions_dal.update(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/precautions/all');
        }
    });
});
module.exports = router;