var express = require('express');
var router = express.Router();
var queries_dal = require('../dal/queries_dal');


/* GET users listing. */
router.get('/all', function(req, res, next) {

    var callCount = 10;
    var callsFinished = 0;

    var data1 = null;
    queries_dal.getAll1(function(err, result) {
        data1 = result[0];
        onCallFinished();
    });

    var data2 = null;
    queries_dal.getAll2(function(err, result) {
        data2 = result[0];
        onCallFinished();
    });

    var data3 = null;
    queries_dal.getAll3(function(err, result) {
        data3 = result[0];
        onCallFinished();
    });

    var data4 = null;
    queries_dal.getAll4(function(err, result) {
        data4 = result[0];
        onCallFinished();
    });

    var data5 = null;
    queries_dal.getAll5(function(err, result) {
        data5 = result[0];
        onCallFinished();
    });

    var data6 = null;
    queries_dal.getAll6(function(err, result) {
        data6 = result[0];
        onCallFinished();
    });

    var data7 = null;
    queries_dal.getAll7(function(err, result) {
        data7 = result[0];
        onCallFinished();
    });

    var data8 = null;
    queries_dal.getAll8(function(err, result) {
        data8 = result[0];
        onCallFinished();
    });

    var data9 = null;
    queries_dal.getAll9(function(err, result) {
        data9 = result[0];
        onCallFinished();
    });

    var data10 = null;
    queries_dal.getAll10(function(err, result) {
        data10 = result[0];
        onCallFinished();
    });


    var onCallFinished = function() {
        callsFinished++;

        if(callsFinished == callCount) {
            console.log('Done');
            res.render('queries/queries_view_all', {
                query1Result: data1,
                query2Result: data2,
                query3Result: data3,
                query4Result: data4,
                query5Result: data5,
                query6Result: data6,
                query7Result: data7,
                query8Result: data8,
                query9Result: data9,
                query10Result: data10
            });
        }
    }
});

module.exports = router;