var variables = require('../variables');
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'Z1x2c3V42015',
    database: 'esl'
  }
});

module.exports = require('bookshelf')(knex);