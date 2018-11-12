'use strict';
module.exports = (sequelize, DataTypes) => {
  var TemperatureSensorReading = sequelize.define('TemperatureSensorReading', {
    serial_number: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    min_value: DataTypes.DOUBLE,
    max_value: DataTypes.DOUBLE,
    time_tag: DataTypes.DATE
  }, {});
  TemperatureSensorReading.associate = function(models) {
    // associations can be defined here
  };
  return TemperatureSensorReading;
};