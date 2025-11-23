const { runQuery } = require("../database/utils.js");

class ClienteData {
  static obtenerClientes = async () => {
    try {
      const resp = await runQuery(`SELECT * FROM cliente`);
      return resp;
    } catch (err) {
      console.log("obtenerClientes err");
      console.log(err);
    }
  };

  static crearCliente = async (data) => {
    try {
      const resp = await runQuery(
        `INSERT INTO cliente VALUES (0,?,?,?,?,?,?,?)`,
        [
          data.nombre,
          data.ci,
          data.celular,
          data.nit,
          data.correo,
          data.tipoCliente,
          data.direccion,
        ]
      );
      return resp;
    } catch (err) {
      console.log("crearCliente err");
      console.log(err);
    }
  };

  static modificarCliente = async (data) => {
    try {
      const resp = await runQuery(
        `UPDATE cliente SET nombre = ?, ci=?, celular=?, nit=?, correo=?, tipoCliente=?, direccion=? WHERE id=?`,
        [
          data.nombre,
          data.ci,
          data.celular,
          data.nit,
          data.correo,
          data.tipoCliente,
          data.direccion,
          data.id,
        ]
      );
      return resp;
    } catch (err) {
      console.log("modificarCliente err");
      console.log(err);
    }
  };

  static eliminarCliente = async (data) => {
    try {
      const resp = await runQuery(`DELETE FROM cliente WHERE id=?`, [data.id]);
      return resp;
    } catch (err) {
      console.log("eliminarCliente err");
      console.log(err);
    }
  };
}
module.exports = ClienteData;
