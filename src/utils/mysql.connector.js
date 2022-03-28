"use strict";
exports.__esModule = true;
exports.end = exports.execute = exports.init = void 0;
var dotenv = require("dotenv");
var mysql_1 = require("mysql");
dotenv.config();
var pool;
/**
 * generates pool connection to be used throughout the app
 */
var init = function () {
    try {
        pool = (0, mysql_1.createPool)({
            connectionLimit: process.env.MY_SQL_DB_CONNECTION_LIMIT ? parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT) : 4,
            host: process.env.MY_SQL_DB_HOST,
            user: process.env.MY_SQL_DB_USER,
            password: process.env.MY_SQL_DB_PASSWORD,
            database: process.env.MY_SQL_DB_DATABASE
        });
        console.debug('MySql Adapter Pool generated successfully');
    }
    catch (error) {
        console.error('[mysql.connector][init][Error]: ', error);
        throw new Error('failed to initialized pool');
    }
};
exports.init = init;
/**
 * executes SQL queries in MySQL db
 *
 * @param {string} query - provide a valid SQL query
 * @param {string[] | Object} params - provide the parameterized values used
 * in the query
 */
var execute = function (query, params) {
    try {
        if (!pool)
            throw new Error('Pool was not created. Ensure pool is created when running the app.');
        return new Promise(function (resolve, reject) {
            pool.query(query, params, function (error, results) {
                if (error)
                    reject(error);
                else
                    resolve(results);
            });
        });
    }
    catch (error) {
        console.error('[mysql.connector][execute][Error]: ', error);
        throw new Error('failed to execute MySQL query');
    }
};
exports.execute = execute;
function end() {
    pool.end(function (err) {
        if (err) {
            return console.log('error:' + err.message);
        }
    });
}
exports.end = end;
