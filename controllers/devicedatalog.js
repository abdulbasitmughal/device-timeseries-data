const TemperatureSensorReading = require('../models').TemperatureSensorReading;

module.exports = {
  
    add(req, res) {
      return TemperatureSensorReading
        .create({
          serial_number: req.body.serial_number,
          min_value: req.body.min_value,
          max_value: req.body.max_value,
          time_tag: req.body.time_tag
        })
        .then((classroom) => res.status(201).send(classroom))
        .catch((error) => res.status(400).send(error));
    },

    list(req, res) {
      return TemperatureSensorReading
        .findAll(
        //   {
        //   include: [{
        //     model: TemperatureSensorReading,
        //     as: 'serial_number'
        //   }],
        //   // order: [
        //   //   ['createdAt', 'DESC'],
        //   //   [{ model: TemperatureSensorReading, as: 'temperatureSensorReading' }, 'createdAt', 'DESC'],
        //   // ],
        // }
      )
        .then((temperatureSensorReading) => res.status(200).send(temperatureSensorReading))
        .catch((error) => { res.status(400).send(error); });
    },
  
  };