var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'call med_side_effects_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO medication_side_effects (medication_id, side_effect_id) VALUES (?, ?)';
    var queryData = [params.medication_id, params.side_effect_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};

exports.update = function (params, callback) {
    var query = 'update medication_side_effects set (medication_id, side_effect_id) where (?, ?)';
    var queryData = [params.medication_id, params.side_effect_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    })
};