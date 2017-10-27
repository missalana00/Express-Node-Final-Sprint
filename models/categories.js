'use strict';
module.exports = (sequelize, DataTypes) => {
  var Categories = sequelize.define(
    'Categories',
    {
      title: DataTypes.STRING
    },
    { timestamps: false }
  );

  // Since categories has many, the "many" will have the foreign key on it
  Categories.associate = models => {
    Categories.hasMany(models.Products, {
      foreignKey: 'categoryID'
    });
  };

  return Categories;
};
