'use strict';

// getHomeProducts
// This function gets all products and then limits the products displayed to
// the last twenty products added in descending order
module.exports.getHomeProducts = (req, res, next) => {
  // Below: requiring in information from products.js model
  const { Products } = req.app.get('models');
  // Below: brings back all the data from specified model, in this case Products
  Products.findAll({
    limit: 20,
    order: [['date_registered', 'DESC']]
  })
    // Then, take the data, clean it up, and display it
    .then(ProductsData => {
      res.json(ProductsData);
    })
    // And handle any errors that may occur
    .catch(err => {
      // console.log('ooops', err);
      next(err);
    });
};

// getSelected Product
// This function gets the detailed product information related to whatever product
// the user clicks on
// The id is then passed into the URL
module.exports.getSelectedProduct = (req, res, next) => {
  // Below: requiring in information from products.js model
  const { Products } = req.app.get('models');
  // Below: brings back the data for specific product
  // Here, we are saying find the product in the data based on the ID pass in by the user's click
  Products.findOne({
    raw: true,
    where: { id: req.params.id }
  })
    // Then, take the data, clean it up, and display it
    .then(SelectedProductData => {
      res.json(SelectedProductData);
    })
    // And handle any errors that may occur
    .catch(err => {
      // console.log('ooops', err);
      next(err);
    });
};
