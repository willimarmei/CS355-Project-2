var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM overdose;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO overdose (symptom) VALUES (?)';
    var queryData = [params.symptom];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};