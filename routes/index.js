var express = require('express');
var router = express.Router();
var { firebase } = require('../auth') 


router.use(function(req, res, next){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user)
      req.user = user;
      next();
    }else{
      console.log("No user yet")
      next();
    }
  });
})

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
