var express = require('express');
var router = express.Router();
var api = require('../models/models');

router.get('/user', function(req, res, next) {
  api.User.fetchAll({withRelated: ['info']}).then(function(response){
    res.send({ status: true, response: response });
  }).catch(function(error){
    res.send({ status: false, error})
  })
});

router.get('/user/:id', function(req, res, next){
  api.UserInfo.where({ id: req.params.id }).fetch({withRelated: ['user']}).then(function(response){
    res.send({ status: true, response });
  }).catch(function(error){
    res.send({ status: false, error});
  })
})

module.exports = router;