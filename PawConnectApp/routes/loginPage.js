var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/loginPage', function(req, res, next) {
  res.render('loginPage', { title: 'Paws Connect' });
});

module.exports = router;