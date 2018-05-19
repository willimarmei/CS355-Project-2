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

exports.getinfo = function (params, callback) {
    var query = 'call generic_name_getinfo(?)';
    var queryData = [params.medication_id];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);

    });
};

exports.delete = function (params, callback) {
    var query = 'delete from medication_generic_name where medication_id = ? and generic_name = ?';
    var queryData = [params.medication_id, params.generic_name];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);

    });
};

exports.update = function(params, callback) {
    var query = 'update medication_generic_name set generic_name = ? where medication_id = ?';
    var queryData = [params.generic_name, params.medication_id];

    connection.query(query, queryData, function(err, result) {
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