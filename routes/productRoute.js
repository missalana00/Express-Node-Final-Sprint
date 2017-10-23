'use strict';

const { Router } = require('express');
const router = Router();

const { getHomeProducts, getSelectedProduct, getProductCats } = require('../controllers/productsCtrl');

router.get('/home', getHomeProducts);
router.get('/products/:id', getSelectedProduct);
// router.get('/categories', getProductCats);

module.exports = router;
