var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM side_effects;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(side_effects_id, callback) {
    var query = 'call side_effects_getinfo(?)';
    var queryData = [side_effects_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO side_effects (symptom, notes) VALUES (?, ?)';
    var queryData = [params.symptom, params.notes];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};

exports.update = function (params, callback) {
    var query = 'update side_effects set side_effects_id = ? set notes = ? where side_effects_id = ?';
    var queryData = [params.symptom, params.notes];
    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });

};