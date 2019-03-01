var express = require('express');
var router = express.Router();

/* GET my page. */
router.get('/mypage', function(req, res, next) {
  res.render('index/markup', {
    title: 'Its My Page', 
    name: 'This is my page content' ,
    name1: 'A bit about my page',
    dns: 'Nothing here'
  });
});

module.exports = router;

