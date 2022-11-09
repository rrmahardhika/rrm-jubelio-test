"use strict";

const Hapi = require("@hapi/hapi");
// const Con = require("./controller");
const hapiPgPromise = require("hapi-pg-promise");
const cn = {
  host: "localhost",
  port: 5432,
  database: "rrm-jubelio",
  user: "postgres",
  password: "ktj2021",
};
const plugin = {
  plugin: hapiPgPromise,
  options: {
    cn: cn,
    settings: {},
  },
};
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  await server.register(plugin);
  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      request.db
        .any(`SELECT "AAA"`)
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
      // return h.response(Con.read()).code(200);
      // var res = Con.readPg();
    },
  });

  server.start();
};
init();
