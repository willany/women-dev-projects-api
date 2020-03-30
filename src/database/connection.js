const knex = require("knex");
const configuration = require("../../knexfile");
require("dotenv/config");

const env = process.env.NODE_ENV;

const connection = knex(
  env === "production" ? configuration.production : configuration.development
);

module.exports = connection;
