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
    dns: '<h2 class="highlight">DNS</h2><p>DNS stands for Domain Name System. You buy a domain name from a registrar (e.g. 123-reg, GoDaddy). They arrange for your server\'s IP address to be added next to the domain name on a DNS server, so that people can find your site. This process can take a couple of days to spread out over the entire internet, as DNS servers take time to update one another using a \'gossiping\' mechanism.</p>',
    name: req.param('name'),
    navigation:'<header><nav role="navigation"><ul><li><a href="/">Home page</a></li><li><a href="/mypage">My Page</a></li><li><a href="/newpage">New Page</a></li><li><a href="/about">About Page</a></li></ul></nav></header>',
    username: req.query.usr,
    name: req.param('name')

     
    });
});

module.exports = router;
