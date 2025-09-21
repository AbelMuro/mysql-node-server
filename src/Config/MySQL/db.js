const mysql = require('mysql2');

const pool = mysql.createPool({
        host: '73.92.75.163',                       // Administration -> Client Connections -> Copy the host
        port: 3306,
        user: 'root',                            // Administration -> Users and Privileges -> Copy the user name
        password: 'Darkness33!',                 // Use the password that you entered when you installed mySQL
        database: 'first_schema',                 // The name of the schema/database
});

module.exports = pool;