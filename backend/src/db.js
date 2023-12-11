//Db connection logic here.
const mysql = require('mysql');
const {dbLogger} = require('./logger.js');

const connection = mysql.createConnection({
    host: '135.181.106.58',
    user: 'jepsu',
    password: 'Devops2023!',
    database: 'converter',
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to converter(135.181.106.58) Hetzner database !');
    dbLogger.info('Connected to converter(135.181.106.58')
});

module.exports = connection;