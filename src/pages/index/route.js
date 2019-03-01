var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/:name?', function(req, res, next) { */
  router.get('/', function(req, res, next) {
  res.render('index/markup', {
    name1: 'A bit about the internet',
    title: 'Express', 
    more: 'More content in the body of the page', 
    conclusion: 'This is the end', 
    blockcontent: 'Here\'s some pull out content' ,
    listitem1: 'M&S Cat',
    listitem2: 'Dog',
    listitem3: 'Fish',
    listitem4: 'Bird',
    listitem5: 'Rabbit',
    listitem6: 'Snake',
    img: 'https://via.placeholder.com/400x200',
    alt: 'My image',
    link1: '//marksandspencer.com',
    target1: '_blank',
    name: req.param('name'),
    username: req.query.usr
    }),
    res.render('mypage', {
      name1: 'Its a bit about my page',
      title: 'My page Yeh'     
    });,
    res.render('newpage', {
      name1: 'Its a new page',
      title: 'A new page Hah'     
    })
});

module.exports = router;
