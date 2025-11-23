const { runQuery } = require("../database/utils.js");

class EmpleadoData {
  static obtenerEmpleados = async (data) => {
    try {
      const resp = await runQuery(`SELECT * FROM empleado`);
      return resp;
    } catch (err) {
      console.log("obtener empleados err");
      console.log(err);
    }
  };

  static crearEmpleado = async (data) => {
    try {
      const resp = await runQuery(
        `INSERT INTO empleado VALUES (0,?,?,?,?,?,?,?)`,
        [
          data.nombre,
          data.ci,
          data.celular,
          data.cargo,
          data.direccionDomicilio,
          data.correo,
          data.estadoCivil,
        ]
      );
      return resp;
    } catch (err) {
      console.log("crearEmpleado err");
      console.log(err);
    }
  };

  static modificarEmpleado = async (data) => {
    try {
      const resp = await runQuery(
        `UPDATE empleado SET nombre = ?, ci=?, celular=?, cargo=?, direccionDomicilio=?, correo=?, estadoCivil=? WHERE id=?`,
        [
          data.nombre,
          data.ci,
          data.celular,
          data.cargo,
          data.direccionDomicilio,
          data.correo,
          data.estadoCivil,
          data.id,
        ]
      );
      return resp;
    } catch (err) {
      console.log("modificarEmpleado err");
      console.log(err);
    }
  };

  static eliminarEmpleado = async (data) => {
    try {
      const resp = await runQuery(`DELETE FROM empleado WHERE id=?`, [data.id]);
      return resp;
    } catch (err) {
      console.log("eliminarEmpleado err");
      console.log(err);
    }
  };
}
module.exports = EmpleadoData;
