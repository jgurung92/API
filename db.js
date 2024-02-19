const Pool = require("pg").Pool;
const pool = new Pool({
    user: "jitengurung",
    host: "localhost",
    database: "nepalSupermarket",
    port: 5432,
})


module.exports = pool;