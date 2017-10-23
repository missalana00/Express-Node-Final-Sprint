'use strict';
module.exports = (sequelize, DataTypes) => {
  var Categories = sequelize.define(
    'Categories',
    {
      title: DataTypes.STRING
    },
    { timestamps: false }
  );

  Categories.associate = models => {
    User.hasMany(models.Types, {
      foreignKey: 'id'
    });
  };

  Categories.associate = models => {
    User.hasMany(models.Products, {
      foreignKey: 'id'
    });
  };

  return Categories;
};
