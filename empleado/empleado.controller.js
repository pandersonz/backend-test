const EmpleadoStore = require("./empleado.store.js");

const obtenerEmpleados = async (req, res) => {
  const resp = await EmpleadoStore.obtenerEmpleados();
  if (resp) {
    return res.status(200).send({
      code: "SUCCESS",
      message: "Obtener empleados fue un exito",
      body: resp,
    });
  }
  return res.status(400).send({
    code: "FAILURE",
    message: "ERROR",
  });
};

const crearEmpleado = async (req, res) => {
  const resp = await EmpleadoStore.crearEmpleado(req.body);
  if (resp) {
    return res.status(200).send({
      code: "SUCCESS",
      message: "Crear empleado fue un exito",
      body: resp,
    });
  }
  return res.status(400).send({
    code: "FAILURE",
    message: "ERROR",
  });
};

const modificarEmpleado = async (req, res) => {
  const resp = await EmpleadoStore.modificarEmpleado(req.body);
  if (resp) {
    return res.status(200).send({
      code: "SUCCESS",
      message: "Modificar empleado fue un exito",
      body: resp,
    });
  }
  return res.status(400).send({
    code: "FAILURE",
    message: "ERROR",
  });
};

const eliminarEmpleado = async (req, res) => {
  const resp = await EmpleadoStore.eliminarEmpleado(req.body);
  if (resp) {
    return res.status(200).send({
      code: "SUCCESS",
      message: "Eliminar empleado fue un exito",
      body: resp,
    });
  }
  return res.status(400).send({
    code: "FAILURE",
    message: "ERROR",
  });
};

module.exports = {
  obtenerEmpleados,
  crearEmpleado,
  modificarEmpleado,
  eliminarEmpleado,
};
