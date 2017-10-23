'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define(
    'Products',
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      type: DataTypes.STRING,
      category: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      price: DataTypes.STRING,
      date_registered: DataTypes.DATE
    },
    { timestamps: false }
  );

  Products.associate = models => {
    User.belongsTo(models.Categories, {
      foreignKey: 'id'
    });
  };

  Products.associate = models => {
    User.belongsTo(models.Types, {
      foreignKey: 'id'
    });
  };

  return Products;
};
