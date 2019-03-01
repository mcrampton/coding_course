var express = require('express');
var router = express.Router();

/* GET my page. */
router.get('/newpage', function(req, res, next) {
  res.render('index/markup', {
    title: 'Its A New Page', 
    name: 'This is a new page content' ,
    name1: 'A bit about the new page',
    dns: 'All gone here too'
  });
});

module.exports = router;

