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

// getSelectedProduct
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

// getProductCats
// This function gets all categories, and for each category, includes data from
// the products model according to given specs in the include statement
module.exports.getProductCats = (req, res, next) => {
  // Below: requiring in information from products.js and categories.js models
  const { Products, Categories } = req.app.get('models');
  // Below: We are saying, for each category, include data from the products model according
  // to these specs
  // These will be grouped based on associations established in the models
  Categories.findAll({ include: [{ model: Products, limit: 3, order: [['date_registered', 'DESC']] }] })
    // Then, take the data, clean it up, and display it
    .then(categoriesData => {
      res.json({ categoriesData });
    })
    // And handle any errors that may occur
    .catch(err => {
      // console.log('ooops', err);
      next(err);
    });
};

// getSelectedCat
// This function takes the id of the category (categoryID) the user selected (clicked)
// and then finds all products that have that categoryID and displays them
module.exports.getSelectedCat = (req, res, next) => {
  // Below: requiring in information from products.js and categories.js models
  const { Products, Categories } = req.app.get('models');
  // Below: Saying, find the category whose id is the same as what is
  // the route params (what the user selected)
  Categories.findOne({
    raw: true,
    where: { id: req.params.id }
  }).then(categoryData => {
    // Now, find all products that have the associated category id
    Products.findAll({
      raw: true,
      where: { categoryID: req.params.id }
    })
      .then(products => {
        res.json({ categoryData, products });
      })
      .catch(err => {
        next(err);
      });
  });
};

// searchProducts
// This function
//
module.exports.searchProducts = (req, res, next) => {
  // Below: requiring in information from products.js
  const { Products } = req.app.get('models');
  // Below: Saying, find all products that have the exact title as what the user typed
  // into the search field (req.body.search --- search is the name of the input in the form in nav.pug)
  Products.findAll({
    raw: true,
    where: { title: req.body.search }
  })
    .then(thatProductData => {
      res.json({ thatProductData });
    })
    .catch(err => {
      next(err);
    });
};
