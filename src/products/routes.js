const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getProducts);
router.get('/:id', controller.getProductsById);
router.post('/', controller.insertProducts);
router.put('/', controller.updateProducts);

module.exports = router;