var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index/markup', { 
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
    target1: '_blank'
  });
});

module.exports = router;
