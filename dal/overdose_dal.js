var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'call med_overdose_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};


exports.insert = function(params, callback) {
    var query = 'INSERT INTO medication_overdose (medication_id, overdose_symptom) VALUES (?, ?)';
    var queryData = [params.medication_id, params.overdose_symptom];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};