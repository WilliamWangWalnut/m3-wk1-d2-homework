var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render("index", { title: "Food Blog" }); //设定网页的title
});

module.exports = router;
