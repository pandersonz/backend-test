"use strict";
const { Router } = require("express");
const {
  obtenerProductos,
  crearProducto,
  modificarProducto,
  eliminarProducto,
} = require("./producto.controller.js");

//---------------------------------------------------
//            ROUTER FOR: /api/producto/
//---------------------------------------------------

const ProductoRouter = Router();

ProductoRouter.get("/", obtenerProductos);
ProductoRouter.post("/", crearProducto);
ProductoRouter.put("/", modificarProducto);
ProductoRouter.delete("/", eliminarProducto);

module.exports = ProductoRouter;
