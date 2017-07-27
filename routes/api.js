var express = require('express');
var router = express.Router();
var bookshelf = require('../models/bookshelf');

var User = bookshelf.Model.extend({
  tableName: 'users',
  info: function(){
    return this.hasOne(UserInfo)
  }
})

var UserInfo = bookshelf.Model.extend({
  tableName: 'user_info',
  user: function(){
    return this.belongsTo(User)
  }
})

router.get('/user', function(req, res, next) {
  User.fetchAll().then(function(response){
    res.send({ status: true, response: response });
  }).catch(function(error){
    res.send({ status: false, error})
  })
});

router.get('/user/:id', function(req, res, next){
  User.where({ id: req.params.id }).fetch().then(function(response){
    res.send({ status: true, response });
  }).catch(function(error){
    res.send({ status: false, error})
  })
})


module.exports = router;