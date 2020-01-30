'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    value: DataTypes.INTEGER
  }, {});
  Products.associate = function(models) {
  	Products.hasMany(models.Orders)
  };
  return Products;
};