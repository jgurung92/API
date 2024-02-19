const pool = require('../../db');
const queries = require('./queries');

//Get All Data
const getProducts = (req, res) => {
    pool.query(queries.getProducts,(error, results)=> {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

// Get/filter Products By ID
const getProductsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getProductsById,[id], (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

// Insert/Add products
const insertProducts = (req, res) => {
    const {id, name, category} = req.body;
    pool.query(queries.insertProducts,[id, name, category], (error, results) =>{
        if(error) throw error;
        res.status(200).send("Added New Product successfully");
    })
}

// UPDATE/MODIFY data/products:
const updateProducts = (req, res) => {
    // const id = parseInt(req.params.id);
    const {category, id} = req.body;
    pool.query(queries.updateProducts, [category, id],(error, results) => {
        if(error) throw error;
        res.status(200).send("Updated Products Successfully");

    })
}

//we can do many things in controller.js, some of them are:
//Get Data by Parameter
//Add new Data by Parameter
//Modify Data by Parameter

module.exports = {
    getProducts,
    getProductsById,
    insertProducts,
    updateProducts,
};