var express = require('express');
var router = express.Router();

/* GET my page. */
router.get('/newpage', function(req, res, next) {
  res.render('index/markup', {
    title: 'Its A New Page', 
    name: 'This is a new page content' ,
    name1: 'A bit about the new page',
    dns: 'All gone here too',
    navigation:'<header><nav role="navigation"><ul><li><a href="/">Home page</a></li><li><a href="/mypage">My Page</a></li><li><a href="/newpage">New Page</a></li><li><a href="/about">About Page</a></li></ul></nav></header>'
  });
});

module.exports = router;

