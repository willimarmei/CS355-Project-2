var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll1 = function(callback) {
    var query = 'call query1_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getAll2 = function(callback) {
    var query = 'call query2_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getAll3 = function(callback) {
    var query = 'call query3_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getAll4 = function(callback) {
    var query = 'call query4_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getAll5 = function(callback) {
    var query = 'call query5_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getAll6 = function(callback) {
    var query = 'call query6_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getAll7 = function(callback) {
    var query = 'call query7_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getAll8 = function(callback) {
    var query = 'call query8_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};
exports.getAll9 = function(callback) {
    var query = 'call query9_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};
exports.getAll10 = function(callback) {
    var query = 'call query10_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

