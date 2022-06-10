const Pool = require("pg").Pool

const pool = new Pool({
    host: 'husky-online-database-1-instance-1.c1lpxq7vqqus.us-east-1.rds.amazonaws.com',
    port: 5432,
    user: 'headofthepack',
    password: 'camome34',
    database: 'husky-online-database',
    idle_in_transaction_session_timeout: 15
})

console.log("Im here")
module.exports = pool;
