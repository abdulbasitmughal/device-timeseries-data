var express = require('express');
var router = express.Router();

var deviceDataLogController = require('../controllers').deviceDataLog;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/device/logdata', deviceDataLogController.add);
router.get('/api/device/logdata', deviceDataLogController.list);

module.exports = router;
