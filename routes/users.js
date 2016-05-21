var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({
    id: 1,
    name: 'Bob', 
    email: 'bob@mail.com'
  });
});

module.exports = router;
