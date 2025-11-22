const EmpleadoData = require("./empleado.data.js");

class EmpleadoStore {
  static obtenerEmpleados = async (data) => {
    try {
      const resp = await EmpleadoData.obtenerEmpleados(data);
      return resp;
    } catch (e) {
      return false;
    }
  };

  static crearEmpleado = async (data) => {
    try {
      const resp = await EmpleadoData.crearEmpleado(data);
      return resp;
    } catch (e) {
      return false;
    }
  };

  static modificarEmpleado = async (data) => {
    try {
      const resp = await EmpleadoData.modificarEmpleado(data);
      return resp;
    } catch (e) {
      return false;
    }
  };

  static eliminarEmpleado = async (data) => {
    try {
      const resp = await EmpleadoData.eliminarEmpleado(data);
      return resp;
    } catch (e) {
      return false;
    }
  };
}

module.exports = EmpleadoStore;
