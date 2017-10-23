'use strict';
module.exports = (sequelize, DataTypes) => {
  var Types = sequelize.define(
    'Types',
    {
      title: DataTypes.STRING
    },
    { timestamps: false }
  );

  Types.associate = models => {
    User.hasMany(models.Products, {
      foreignKey: 'id'
    });
  };

  return Types;
};
