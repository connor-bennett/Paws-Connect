var express = require('express');
var router = express.Router();

// functions

function night() {
  console.log("clicked");
  if( document.getElementById("buttonTest").style.backgroundColor == "orange"){
    document.getElementById("buttonTest").style.backgroundColor = "pink";
  } 
  else {
    document.getElementById("buttonTest").style.backgroundColor = "orange";
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Paws Connect' });
});

module.exports = router;
