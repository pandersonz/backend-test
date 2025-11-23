const ProductoData = require("./producto.data.js");

class ProductoStore {
  static obtenerProductos = async (data) => {
    try {
      const resp = await ProductoData.obtenerProductos(data);
      return resp;
    } catch (e) {
      return false;
    }
  };

  static crearProducto = async (data) => {
    try {
      const resp = await ProductoData.crearProducto(data);
      return resp;
    } catch (e) {
      return false;
    }
  };

  static modificarProducto = async (data) => {
    try {
      const resp = await ProductoData.modificarProducto(data);
      return resp;
    } catch (e) {
      return false;
    }
  };

  static eliminarProducto = async (data) => {
    try {
      const resp = await ProductoData.eliminarProducto(data);
      return resp;
    } catch (e) {
      return false;
    }
  };
}

module.exports = ProductoStore;
