const ClienteData = require("./cliente.data.js");

class ClienteStore {
  static obtenerClientes = async (data) => {
    try {
      const resp = await ClienteData.obtenerClientes(data);
      return resp;
    } catch (e) {
      return false;
    }
  };

  static crearCliente = async (data) => {
    try {
      const resp = await ClienteData.crearCliente(data);
      return resp;
    } catch (e) {
      return false;
    }
  };

  static modificarCliente = async (data) => {
    try {
      const resp = await ClienteData.modificarCliente(data);
      return resp;
    } catch (e) {
      return false;
    }
  };

  static eliminarCliente = async (data) => {
    try {
      const resp = await ClienteData.eliminarCliente(data);
      return resp;
    } catch (e) {
      return false;
    }
  };
}

module.exports = ClienteStore;
