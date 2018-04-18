var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'call med_generic_name_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function (medication_id, callback) {
    var query = 'call generic_name_getinfo(?)';
    var queryData = [medication_id];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);

    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO medication_generic_name (medication_id, generic_name) VALUES (?, ?)';
    var queryData = [params.medication_id, params.generic_name];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};