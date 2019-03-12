var express = require('express');
var router = express.Router();

/* GET my page. */
router.get('/mypage', function(req, res, next) {
  res.render('index/markup', {
    title: 'Its My Page', 
    name: 'This is my page content' ,
    name1: 'A bit about my page',
    dns: 'Nothing here',
    navigation:'<header><nav role="navigation"><ul><li><a href="/">Home page</a></li><li><a href="/mypage">My Page</a></li><li><a href="/newpage">New Page</a></li><li><a href="/about">About Page</a></li></ul></nav></header>',
    username: req.query.usr,
    name: req.param('name')


  });
});

module.exports = router;

