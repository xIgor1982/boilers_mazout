const Pool = require('pg').Pool

const pool = new Pool({
	user: process.env.POSTGRES_DB_USER,
	password: process.env.POSTGRES_DB_PASSWORD,
	host: process.env.POSTGRES_DB_HOST,
	port: process.env.POSTGRES_DB_PORT,
	database: process.env.POSTGRES_DB_NAME,
});


module.exports = pool