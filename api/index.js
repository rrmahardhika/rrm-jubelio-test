"use strict";

const Hapi = require("@hapi/hapi");
const { db } = require("./db");
const { v4: uuidv4 } = require("uuid");

const axios = require("axios");
const baseURLStore =
  "https://codetesting.jubelio.store/wp-json/wc/v3/products?consumer_key=ck_1cbb2c1902d56b629cd9a555cc032c4b478b26ce&consumer_secret=cs_7be10f0328c5b1d6a1a3077165b226af71d8b9dc";

const init = async () => {
  const server = Hapi.server({
    port: 3030,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
        headers: ["Authorization", "Content-Type"],
        credentials: true,
        additionalHeaders: [
          "cache-control",
          "x-requested-with",
          "Access-Control-Allow-Origin",
        ],
      },
    },
  });

  server.route({
    method: "GET",
    path: "/product/retrieve",
    handler: (request, h) => {
      return axios.get(baseURLStore).then((response) => {
        var newProduct = {};
        response.data.forEach((product) => {
          //check data validation. if not, auto-assign default value
          if (product.slug == "") product.slug = "DEFAULT PRODUCT NAME"; //use slug due to all products have same name
          if (product.price == "") product.price = 0;
          if (product.sku == "") product.sku = uuidv4();
          if (product.images) {
            product.images =
              "http://www.rcdrilling.com/wp-content/uploads/2013/12/default_image_01-1024x1024-570x760.png";
          }
          newProduct = {
            Name: product.slug,
            SKU: product.sku,
            Price: product.price,
            Image: product.images,
            Description: product.description,
          };
          db.products.add(newProduct);
        });
        return h
          .response({
            success: true,
            message: "Berhasil import produk",
            data: null,
            code: 200,
          })
          .code(200);
      });
    },
  });

  server.route({
    method: "GET",
    path: "/product/page/{page}",
    handler: (request, h) => {
      return db.products
        .all(request.params.page)
        .then((res) => h.response(res).code(res.code));
    },
  });

  server.route({
    method: "POST",
    path: "/product/",
    handler: (request, h) => {
      return db.products
        .add(request.payload)
        .then((res) => h.response(res).code(res.code));
    },
  });

  server.route({
    method: "PUT",
    path: "/product/update/{id}",
    handler: (request, h) => {
      return db.products
        .update(request.payload, request.params.id)
        .then((res) => h.response(res).code(res.code));
    },
  });

  server.route({
    method: "GET",
    path: "/product/{id}",
    handler: (request, h) => {
      return db.products
        .getById(request.params.id)
        .then((res) => h.response(res).code(res.code));
    },
  });

  server.route({
    method: "DELETE",
    path: "/product/delete/{id}",
    handler: (request, h) => {
      return db.products
        .remove(request.params.id)
        .then((res) => h.response(res).code(res.code));
    },
  });

  server.route({
    method: "DELETE",
    path: "/product/all",
    handler: (request, h) => {
      return db.products
        .removeAll()
        .then((res) => h.response(res).code(res.code));
    },
  });

  server.start();
};
init();
