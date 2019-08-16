var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send({
      id:'001',
      name:'shaozecai',
      age:18
  });
});

module.exports = router;
