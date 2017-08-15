var express = require('express');
var router = express.Router();
var api = require('../models/models');
var bcrypt = require('bcrypt');
var Sequence = require('sequence').Sequence;

router.get('/', function (req, res, next) {

})

router.post('/authenticate', function (req, res, next) {
  api.User.where({ email: req.body.email }).fetch().then(function (response) {
    if (!response) {
      res.send({ message: 'There is no such user.' })
    } else {
      response = response.toJSON();

      console.log(bcrypt.compareSync(req.body.password, response.password))


      bcrypt.compare(req.body.password, response.password, function (err, user) {
        if (user) {
          delete response.password;
          req.session.user = encodeURIComponent(JSON.stringify(response));
          res.send({ status: true, user: response, message: 'Successfully logged in.' });
        } else {
          res.send({ status: false, message: 'Invalid username and password. ' });
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

router.post('/user', function (req, res, next) {
  // Sequence.create().then(function (next) {
  //   bcrypt.hash(req.body.email, 0).then(function (hashed) {
  //     next(hashed)
  //   }).catch(function (err) {
  //     res.send({ status: false, error: err })
  //   });
  // }).then(function (next, hashed) {
  //   api.User.forge({ email: req.body.email, password: hashed }).save().then(function (response) {
  //     res.send({ response: response })
  //   }).catch(function (err) {
  //     res.send({ err: err, status: false })
  //   });
  // });
});

router.delete('/user/:id', function (req, res, next) {
  api.User.where({ id: req.params.id }).destroy().then(function (response) {
    res.send({ status: true, message: 'Successfully deleted user.' })
  }).catch(function (err) {
    res.send({ status: false, message: 'Encountered error in deleting user.' })
  })
});

module.exports = router;