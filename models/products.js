'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define(
    'Products',
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      categoryID: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      price: DataTypes.STRING,
      date_registered: DataTypes.DATE
    },
    { timestamps: false }
  );

  Products.associate = models => {
    Products.belongsTo(models.Categories, {
      foreignKey: 'categoryID'
    });
  };

  return Products;
};
