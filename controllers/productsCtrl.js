'use strict';

module.exports.getHomeProducts = (req, res, next) => {
  // Below: requiring in information from products.js model
  const { Products } = req.app.get('models');
  // Below: brings back all the data from specified model, in this case Products
  Products.findAll({
    limit: 20,
    order: [['date_registered', 'DESC']]
  })
    // then, take the data, clean it up, and
    .then(ProductsData => {
      res.json(ProductsData);
    })
    .catch(err => {
      // console.log('ooops', err);
      next(err);
    });
};
