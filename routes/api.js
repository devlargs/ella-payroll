var express = require('express');
var router = express.Router();
var api = require('../models/models');
var bcrypt = require('bcrypt');

router.get('/', function (req, res, next) {
  res.send({ try: 1})
})

router.post('/authenticate', function (req, res, next) {
  api.User.where({ email: req.body.email }).fetch().then(function (response) {
    if (!response) {
      res.send({ message: 'There is no such user.' })
    } else {
      response = response.toJSON();
      bcrypt.compare(req.body.password, response.password, function (err, user) {
        if (user) {
          delete response.password;
          req.session.user = encodeURIComponent(JSON.stringify(response));
          res.send({ user: response, message: 'Successfully logged in.' });
        } else {
          res.send({ message: 'Invalid username and password. ' });
        }
      })
    }
  }).catch(function (err) {
    res.send({ error: err })
  })
})

router.get('/user', function (req, res, next) {
  api.User.fetchAll({ withRelated: ['info'] }).then(function (key) {
    res.send({ response: key, status: true })
  }).catch(function (err) {
    res.send({ error: err, status: false })
  })
})

router.get('/user/:id', function (req, res, next) {
  var query = {};

  query.withRelated = (req.query.withRelated) ? req.query.withRelated.split(".") : [];

  api.UserInfo.where({ id: req.params.id }).fetchAll(query).then(function (response) {
    res.send({ status: true, response });
  }).catch(function (error) {
    res.send({ status: false, error: 'Mismatch key' });
  });
});

router.delete('/user/:id', function(req, res, next){
  api.User.where({ id: req.params.id}).destroy().then(function(response){
    res.send({ status: true, message: 'Successfully deleted user.'})
  }).catch(function(err){
    res.send({ status: false, message: 'Encountered error in deleting user.'})
  })
})

module.exports = router;