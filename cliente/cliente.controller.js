const ClienteStore = require("./cliente.store.js");

const obtenerClientes = async (req, res) => {
  const resp = await ClienteStore.obtenerClientes();
  if (resp) {
    return res.status(200).send({
      code: "SUCCESS",
      message: "Obtener clientes fue un exito",
      body: resp,
    });
  }
  return res.status(400).send({
    code: "FAILURE",
    message: "ERROR",
  });
};

const crearCliente = async (req, res) => {
  const resp = await ClienteStore.crearCliente(req.body);
  if (resp) {
    return res.status(200).send({
      code: "SUCCESS",
      message: "Crear cliente fue un exito",
      body: resp,
    });
  }
  return res.status(400).send({
    code: "FAILURE",
    message: "ERROR",
  });
};

const modificarCliente = async (req, res) => {
  const resp = await ClienteStore.modificarCliente(req.body);
  if (resp) {
    return res.status(200).send({
      code: "SUCCESS",
      message: "Modificar cliente fue un exito",
      body: resp,
    });
  }
  return res.status(400).send({
    code: "FAILURE",
    message: "ERROR",
  });
};

const eliminarCliente = async (req, res) => {
  const resp = await ClienteStore.eliminarCliente(req.body);
  if (resp) {
    return res.status(200).send({
      code: "SUCCESS",
      message: "Eliminar cliente fue un exito",
      body: resp,
    });
  }
  return res.status(400).send({
    code: "FAILURE",
    message: "ERROR",
  });
};

module.exports = {
  obtenerClientes,
  crearCliente,
  modificarCliente,
  eliminarCliente,
};
