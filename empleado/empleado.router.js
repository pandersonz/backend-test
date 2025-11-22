"use strict";
const { Router } = require("express");
const {
  obtenerEmpleados,
  crearEmpleado,
  modificarEmpleado,
  eliminarEmpleado,
} = require("./empleado.controller.js");

//---------------------------------------------------
//            ROUTER FOR: /api/empleado/
//---------------------------------------------------

const EmpleadoRouter = Router();

EmpleadoRouter.get("/", obtenerEmpleados);
EmpleadoRouter.post("/", crearEmpleado);
EmpleadoRouter.put("/", modificarEmpleado);
EmpleadoRouter.delete("/", eliminarEmpleado);

module.exports = EmpleadoRouter;
