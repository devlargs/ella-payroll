var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    page: 'login',
    classNames: 'hold-transition login-page'
  });
});

router.get('/blank', function(req, res, next){
  res.render('index',{
    title: 'Blank',
    page: 'blank',
    classNames: 'hold-transition skin-blue sidebar-mini'
  })
});

module.exports = router;
