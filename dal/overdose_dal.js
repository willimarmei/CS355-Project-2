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

exports.getinfo = function (params, callback) {
    var query = 'select medication_name, overdose_symptom, medication_overdose.medication_id from medication_overdose \n' +
        '    \n' +
        '    left join medication on medication_overdose.medication_id = medication.medication_id \n' +
        '    where medication_overdose.medication_id = ? and\n' +
        '    medication_overdose.overdose_symptom = ?';
    var queryData = [params.medication_id, params.symptom];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);

    });
};

exports.delete = function (params, callback) {
    var query = 'delete from medication_overdose where medication_id = ? and overdose_symptom = ?';
    var queryData = [params.medication_id, params.symptom];

    connection.query(query, queryData, function (err, result) {
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

exports.update = function (params, callback) {
    var query = 'update medication_overdose set overdose_symptom = ? where medication_id = ?';
    var queryData = [params.overdose_symptom, params.medication_id];
    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};