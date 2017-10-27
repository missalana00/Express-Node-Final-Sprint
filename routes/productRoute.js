'use strict';

const { Router } = require('express');
const router = Router();

const {
  getHomeProducts,
  getSelectedProduct,
  getProductCats,
  getSelectedCat,
  searchProducts
} = require('../controllers/productsCtrl');

router.get('/home', getHomeProducts);
router.get('/products/:id', getSelectedProduct);
router.get('/categories', getProductCats);
router.get('/categories/:id', getSelectedCat);
router.post('/search', searchProducts);

module.exports = router;
