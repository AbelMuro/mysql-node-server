const mysql = require('mysql2');

const pool = mysql.createPool({
        host: 'mysql-database.cbgm0e60ctjb.us-west-1.rds.amazonaws.com',                       
        port: 3306,
        user: 'admin',                  
        password: 'Darkness33!',                 
        database: 'first_schema',                
});

module.exports = pool;