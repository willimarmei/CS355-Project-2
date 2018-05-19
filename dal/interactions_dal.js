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

exports.getinfo = function(params, callback) {
    var query = 'select i.*, m.medication_name as m1_name, m2.medication_name as m2_name from interactions i\n' +
        '\tjoin medication m on m.medication_id = i.medication1_id\n' +
        '    join medication m2 on m2.medication_id = i.medication2_id\n' +
        '    where medication1_id = ? and medication2_id = ?;';
    var queryData = [params.medication1_id, params.medication2_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.delete = function (params, callback) {
    var query = 'delete from interactions where medication1_id = ?';
    var queryData = [params.medication1_id];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);

    });
};

exports.update = function (params, callback) {
    var query = 'update interactions set medication1_id = ?, medication2_id = ?, notes = ? where medication1_id = ?';
    var queryData = [params.medication1_id, params.medication2_id, params.notes];
    connection.query(query, queryData, function (err, result) {
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