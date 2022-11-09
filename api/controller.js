var pgp = require("pg-promise")();
const cn = {
  host: "127.0.0.1",
  port: 5432,
  database: "rrm-jubelio",
  user: "postgres",
  password: "ktj2021",
};
var db = pgp(cn);

const { Pool } = require("pg");
const pool = new Pool({
  host: "127.0.0.1",
  port: 5432,
  database: "rrm-jubelio",
  user: "postgres",
  password: "ktj2021",
});

const read = () => {
  db.any(`SELECT * from Public."Products"`)
    .then(function (data) {
      return {
        status: "success",
        data: data,
        message: "Retrieved ALL Products",
      };
    })
    .catch(function (err) {
      return err;
    });
};

const readPg = () => {
  pool.query("SELECT NOW()", (err, res) => {
    return res;
  });
};

module.exports = { read, readPg };
