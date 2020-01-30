'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      items: {
        allowNull: false,
        type: Sequelize.STRING
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'Products', key:'id'}
      },
      tableId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'Tables', key:'id'}
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};