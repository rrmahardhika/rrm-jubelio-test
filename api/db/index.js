const promise = require("bluebird");
const pgPromise = require("pg-promise");
const dbConfig = require("../db-config.json");
const { Products } = require("./controller/");

const initOptions = {
  promiseLib: promise,
  schema: "public",
  extend(obj, dc) {
    obj.products = new Products(obj, pgp);
  },
};
const pgp = pgPromise(initOptions);
const db = pgp(dbConfig);
module.exports = { db, pgp };
