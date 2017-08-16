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
  Sequence.create().then(function (next) {
    var salt = bcrypt.genSaltSync(0);
    var hashed = bcrypt.hashSync(req.body.email, salt);
    next(hashed);
  }).then(function (next, hashed) {
    api.User.forge({ email: req.body.email, password: hashed }).save().then(function (response) {
      // res.send({ response: response })
      next(response)
    }).catch(function (err) {
      res.send({ err: err, status: false })
    });
  }).then(function(next, response){
    var body = {
      user_id: response.id, 
      first_name: 'TEST',
      middle_name: 'TEST',
      last_name: 'TEST',
      username: 'TEST',
      job_id: 2,
      address: '',
      contact: '09467015762',
      photo: '',
      shift_schedule: '9:00AM-6:00PM',
      day_off: "Saturday,Sunday",
      grace_period: 30,
      gender: 'M',
      leaves: 0,
      type: 0
    }

    api.UserInfo.forge(body).save().then(function(response2){
      res.send({ response: response2, status: true })
    }).catch(function(err){
      res.send({status: false, message: 'Error on creating user.', err: err})
    })
  })
});

router.delete('/user/:id', function (req, res, next) {
  api.User.where({ id: req.params.id }).destroy().then(function (response) {
    res.send({ status: true, message: 'Successfully deleted user.' })
  }).catch(function (err) {
    res.send({ status: false, message: 'Encountered error in deleting user.' })
  })
});

module.exports = router;