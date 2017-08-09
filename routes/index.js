var express = require('express');
var router = express.Router();

var checkUser = function(session){
  if(session.user){
    return true;
  }else{
    return false;
  }
}

router.get('/', function(req, res, next) {
  if(checkUser(req.session)){
    res.redirect('/dashboard')
  }else{
    res.render('index', { 
      title: 'Express',
      page: 'login',
      classNames: 'hold-transition login-page',
      user: '%7B%7D'
    });
  }
});

router.get('/dashboard', function(req, res, next){
  if(checkUser(req.session, next)){
    res.render('index',{
      title: 'Dashboard',
      page: 'dashboard',
      classNames: 'hold-transition skin-blue sidebar-mini',
      user: req.session.user
    })
  }else{
    res.redirect('/')
  }
});

router.get('/employees', function(req, res, next){
  res.render('index', {
    title: 'Employees',
    page: 'employees',
    classNames: 'hold-transition skin-blue sidebar-mini',
    user: req.session.user
  })
})

router.get('/logout', function(req, res, next){
  req.session.destroy(function(err){
    res.redirect('/')
  })
})

module.exports = router;