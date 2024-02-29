const mysql = require('mysql');

let connection = null;

function connect() {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 3310,
        password: 'abc123...',
        database: 'easy_bookings'
    });

    connection.connect((error) => {
        if (error) {
            console.error('Error connecting to the database:', error.message);
            throw error;
        }
    });
}

function query(query, values, resultCallback) {
    connection.query(query, values, (error, result) => {
        if (error) {
            console.error('Error executing query:', error.message);
            resultCallback(null, error);
            return;
        }
        resultCallback(result, null);
    });
}

function disconnect() {
    connection.end((error) => {
        if (error) {
            console.error('Error disconnecting from the database:', error.message);
        }
    });
}

module.exports = {
    connect,
    disconnect,
    query
};