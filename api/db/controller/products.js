const cs = {};

class ProductsRepository {
  constructor(db, pgp) {
    this.db = db;
    this.pgp = pgp;

    createColumnsets(pgp);
  }

  async add(product) {
    var validation = validateInput(product);
    if (validation.valid) {
      return this.db
        .one(
          `SELECT COUNT(*) FROM public."Products" where "SKU"='${product.SKU}'`
        )
        .then((res) => {
          if (parseInt(res.count) > 0) {
            throw "SKU already exists!";
          }
          {
            return this.db
              .any(
                `INSERT INTO public."Products" values ('${product.Name}', '${product.SKU}', '${product.Image}', '${product.Description}', '${product.Price}')`
              )
              .then((res) => {
                return {
                  success: true,
                  message: "Berhasil Input Produk",
                  data: res,
                  code: 200,
                };
              });
          }
        })
        .catch((error) => {
          console.log(error);
          return {
            success: false,
            message: error,
            data: null,
            code: 400,
          };
        });
    } else {
      return {
        success: false,
        message: "Invalid request",
        data: validation.error_list,
        code: 400,
      };
    }
  }

  async remove(id) {
    return this.db
      .oneOrNone(`SELECT * FROM public."Products" where "SKU"='${id}'`)
      .then((res) => {
        if (res) {
          return this.db
            .any(`DELETE FROM public."Products" WHERE "SKU"='${id}'`)
            .then(() => {
              return {
                success: true,
                message: "Berhasil hapus produk",
                data: null,
                code: 200,
              };
            });
        } else {
          return {
            success: false,
            message: "Produk tidak ditemukan",
            data: null,
            code: 404,
          };
        }
      })
      .catch((error) => {
        console.log(error);
        return {
          success: false,
          message: error,
          data: null,
          code: 400,
        };
      });
  }

  async removeAll() {
    return this.db
      .any(`DELETE FROM public."Products"`)
      .then(() => {
        return {
          success: true,
          message: "Berhasil hapus semua produk",
          data: null,
          code: 200,
        };
      })
      .catch((error) => {
        console.log(error);
        return {
          success: false,
          message: error,
          data: null,
          code: 400,
        };
      });
  }
  async update(product, id) {
    var validation = validateInput(product);
    if (validation.valid) {
      return this.db
        .oneOrNone(`SELECT * FROM public."Products" where "SKU"='${id}'`)
        .then((res) => {
          if (res) {
            return this.db
              .any(
                `UPDATE public."Products" SET "SKU"='${product.SKU}', "Name"='${product.Name}', "Price"='${product.Price}', "Description"='${product.Description}', "Image"='${product.Image}' WHERE "SKU"='${id}'`
              )
              .then(() => {
                return {
                  success: true,
                  message: "Berhasil update produk",
                  data: null,
                  code: 200,
                };
              });
          } else {
            return {
              success: false,
              message: "Produk tidak ditemukan",
              data: null,
              code: 404,
            };
          }
        })
        .catch((error) => {
          console.log(error);
          return {
            success: false,
            message: error,
            data: null,
            code: 400,
          };
        });
    } else {
      return {
        success: false,
        message: "Invalid request",
        data: validation.error_list,
        code: 400,
      };
    }
  }

  async all(page) {
    var itemsPerPage = 8;
    var offset = itemsPerPage * (page - 1);
    return this.db
      .one(`SELECT COUNT(*) FROM public."Products"`)
      .then((count) => {
        var totalPages = Math.ceil(count.count / itemsPerPage);

        return this.db
          .any(
            `SELECT * FROM public."Products" ORDER BY "Name" ASC LIMIT ${itemsPerPage} OFFSET ${offset}`
          )
          .then((res) => {
            return {
              success: true,
              message: "Berhasil ambil data",
              data: {
                page: page,
                itemsPerPage: itemsPerPage,
                totalPages: totalPages,
                totalItems: count.count,
                list: res,
              },
              code: 200,
            };
          })
          .catch((error) => {
            console.log(error);
            return {
              success: false,
              message: error,
              data: null,
              code: 400,
            };
          });
      });
  }

  async getById(id) {
    return this.db
      .oneOrNone(`SELECT * FROM public."Products" where "SKU"='${id}'`)
      .then((res) => {
        if (res) {
          return {
            success: true,
            message: "Berhasil menemukan produk",
            data: res,
            code: 200,
          };
        } else {
          return {
            success: false,
            message: "Produk tidak ditemukan",
            data: null,
            code: 404,
          };
        }
      })
      .catch((error) => {
        console.log(error);
        return {
          success: false,
          message: error,
          data: null,
          code: 400,
        };
      });
  }
}

function validateInput(product) {
  let res = {
    valid: false,
    error_list: [],
  };
  if (product.Name == "") {
    res.error_list.push("Product name empty/invalid");
  }
  if (isNaN(product.Price) || product.Price == "") {
    res.error_list.push("Product price invalid");
  }
  if (product.Image == "") {
    res.error_list.push("Product image empty/invalid");
  }
  if (product.SKU == "") {
    res.error_list.push("Product sku empty/invalid");
  }
  if (res.error_list.length == 0) res.valid = true;
  else res.valid = false;

  return res;
}

function createColumnsets(pgp) {
  if (!cs.insert) {
    const table = new pgp.helpers.TableName({
      table: "products",
      schema: "public",
    });

    cs.insert = new pgp.helpers.ColumnSet(["name"], { table });
    cs.update = cs.insert.extend(["?id", "?user_id"]);
  }
  return cs;
}

module.exports = ProductsRepository;
