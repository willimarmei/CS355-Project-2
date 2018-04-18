var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'call med_interactions_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};


exports.insert = function(params, callback) {
    var query = 'INSERT INTO interactions (medication1_id, medication2_id, notes) VALUES (?, ?, ?)';
    var queryData = [params.medication1_id, params.medication2_id, params.notes];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};