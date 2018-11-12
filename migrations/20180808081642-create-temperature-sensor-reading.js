'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TemperatureSensorReadings', {
      serial_number: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      min_value: {
        type: Sequelize.DOUBLE
      },
      max_value: {
        type: Sequelize.DOUBLE
      },
      time_tag: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TemperatureSensorReadings');
  }
};