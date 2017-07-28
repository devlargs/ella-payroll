var variables = require('../variables');
var knex = require('knex')(variables.config);

module.exports = require('bookshelf')(knex);