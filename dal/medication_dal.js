var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM medication;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(medication_id, callback) {
    var query = 'call medication_getinfo(?)';
    var queryData = [medication_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO medication (medication_id, medication_name, purpose, how_to_take, warning) VALUES (?, ?, ?, ?, ?)';
    var queryData = [params.medication_id, params.medication_name, params.purpose, params.how_to_take, params.warning];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};

exports.update = function (params, callback) {
    var query = 'update medication set (medication_name, purpose, how_to_take, warning) where (?, ?, ?, ?)';
    var queryData = [params.medication_name, params.purpose, params.how_to_take, params.warning];
    connection.query(query, queryData, function(err, result) {
            callback(err, result);
        })
};