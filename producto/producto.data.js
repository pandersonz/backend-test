const { runQuery } = require("../database/utils.js");

class ProductoData {
  static obtenerProductos = async (data) => {
    try {
      const resp = await runQuery(`SELECT * FROM producto`);
      return resp;
    } catch (err) {
      console.log("obtenerProductos err");
      console.log(err);
    }
  };

  static crearProducto = async (data) => {
    try {
      const resp = await runQuery(
        `INSERT INTO producto VALUES (0,?,?,?,?,?,?,?)`,
        [
          data.nombre,
          data.cantidad,
          data.precio,
          data.sku,
          data.detalle,
          data.categoria,
          data.tipoEmpaque,
        ]
      );
      return resp;
    } catch (err) {
      console.log("crearProducto err");
      console.log(err);
    }
  };

  static modificarProducto = async (data) => {
    try {
      const resp = await runQuery(
        `UPDATE producto SET nombre = ?, cantidad=?, precio=?, sku=?, detalle=?, categoria=?, tipoEmpaque=? WHERE id=?`,
        [
          data.nombre,
          data.cantidad,
          data.precio,
          data.sku,
          data.detalle,
          data.categoria,
          data.tipoEmpaque,
          data.id,
        ]
      );
      return resp;
    } catch (err) {
      console.log("modificarProducto err");
      console.log(err);
    }
  };

  static eliminarProducto = async (data) => {
    try {
      const resp = await runQuery(`DELETE FROM producto WHERE id=?`, [data.id]);
      return resp;
    } catch (err) {
      console.log("eliminarProducto err");
      console.log(err);
    }
  };
}
module.exports = ProductoData;
