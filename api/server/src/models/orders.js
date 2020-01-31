'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    items: DataTypes.STRING,
  }, {});
  return Orders;
};