const Pool = require("pg").Pool;
const pool = new Pool({
    // This is for connecting database locally:
    // user: "jitengurung",
    // host: "localhost",
    // database: "nepalSupermarket",
    // port: 5432,

    // This is for connecting database remotly(in cloud):
    user: jitengurung,
    host: dpg-cn1d8hla73kc73ehuu9g-a,
    database: inventory_6qk5,
    password: EoiLRGqXiIhuPd3Nvgvpy9JUFOH,
    dtabase: nepalSupermarket,
    port: 5432,

});


module.exports = pool;