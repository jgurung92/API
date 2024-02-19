const pool = require('../../db');
const queries = require('./queries');

//Get All Data
const getProducts = (req, res) => {
    pool.query(queries.getProducts,(error, results)=> {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

//we can do many things in controller.js, some of them are:
//Get Data by Parameter
//Add new Data by Parameter
//Modify Data by Parameter

module.exports = {
    getProducts,
};