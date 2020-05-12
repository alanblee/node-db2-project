const knex = require("knex");
const knexfile = require("../knexfile.js");

const database = proccess.env.NODE_ENV || "development";

module.exports = knex(knexfile[database]);
