const getProducts = "SELECT * FROM products ";
const getProductsById = "SELECT * FROM products WHERE id = $1";
const insertProducts = "INSERT into products (id, name, category) VALUES ($1, $2, $3)";
const updateProducts = "UPDATE products SET category = $1 WHERE id = $2";

module.exports = {
    getProducts,
    getProductsById,
    insertProducts,
    updateProducts,
};