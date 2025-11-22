"use strict";
const { Router } = require("express");
const {
  obtenerClientes,
  crearCliente,
  modificarCliente,
  eliminarCliente,
} = require("./cliente.controller.js");

//---------------------------------------------------
//            ROUTER FOR: /api/cliente/
//---------------------------------------------------

const ClienteRouter = Router();

ClienteRouter.get("/", obtenerClientes);
ClienteRouter.post("/", crearCliente);
ClienteRouter.put("/", modificarCliente);
ClienteRouter.delete("/", eliminarCliente);

module.exports = ClienteRouter;
