var express = require('express');
var router = express.Router();
var api = require('../models/models');
var bcrypt = require('bcrypt');

router.post('/authenticate', function(req, res, next){
  api.User.where({ email: req.body.email }).fetch().then(function(response){
    console.log(response.password)
    // if(response == null){
    //   res.send({ message: 'There is no such user.'})
    // }else{
    //   console.log(response.password)
    //   bcrypt.compare(req.body.password, response.password, function(err, res){
    //     console.log(res)
    //     console.log(err)
    //   })
    // }
  }).catch(function(err){
    res.send({ error: err })
  })
})

router.get('/user', function(req, res, next) {
  api.User.fetchAll({withRelated: ['info']}).then(function(response){
    res.send({ status: true, response: response });
  }).catch(function(error){
    res.send({ status: false, error});
  });
});

router.get('/user/:id', function(req, res, next){
  api.UserInfo.where({ id: req.params.id }).fetch({withRelated: ['user', 'job_title']}).then(function(response){
    res.send({ status: true, response });
  }).catch(function(error){
    res.send({ status: false, error: error});
  });
});

module.exports = router;