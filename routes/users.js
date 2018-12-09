var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    code:0,
    msg:'ok',
    data:{
      name:'xhm',
      age:12
    }
  })
  // res.send('respond with a resource');
});

module.exports = router;
