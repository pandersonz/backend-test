const ProductoStore = require("./producto.store.js");

const obtenerProductos = async (req, res) => {
  const resp = await ProductoStore.obtenerProductos();
  if (resp) {
    return res.status(200).send({
      code: "SUCCESS",
      message: "Obtener productos fue un exito",
      body: resp,
    });
  }
  return res.status(400).send({
    code: "FAILURE",
    message: "ERROR",
  });
};

const crearProducto = async (req, res) => {
  const resp = await ProductoStore.crearProducto(req.body);
  if (resp) {
    return res.status(200).send({
      code: "SUCCESS",
      message: "Crear producto fue un exito",
      body: resp,
    });
  }
  return res.status(400).send({
    code: "FAILURE",
    message: "ERROR",
  });
};

const modificarProducto = async (req, res) => {
  const resp = await ProductoStore.modificarProducto(req.body);
  if (resp) {
    return res.status(200).send({
      code: "SUCCESS",
      message: "Modificar producto fue un exito",
      body: resp,
    });
  }
  return res.status(400).send({
    code: "FAILURE",
    message: "ERROR",
  });
};

const eliminarProducto = async (req, res) => {
  const resp = await ProductoStore.eliminarProducto(req.body);
  if (resp) {
    return res.status(200).send({
      code: "SUCCESS",
      message: "Eliminar producto fue un exito",
      body: resp,
    });
  }
  return res.status(400).send({
    code: "FAILURE",
    message: "ERROR",
  });
};

module.exports = {
  obtenerProductos,
  crearProducto,
  modificarProducto,
  eliminarProducto,
};
