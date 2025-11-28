const ProductoData = require("../producto/producto.data");
const { runQuery } = require("../database/utils");

// Mock de runQuery
jest.mock("../database/utils", () => ({
  runQuery: jest.fn(),
}));

describe("ProductoData (unit tests)", () => {
  beforeAll(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // --------------------------------------------------
  // obtenerProductos
  // --------------------------------------------------
  test("obtenerProductos() debe retornar lista de productos", async () => {
    const mockRows = [
      { id: 1, nombre: "Laptop" },
    ];

    runQuery.mockResolvedValueOnce(mockRows);

    const result = await ProductoData.obtenerProductos();

    expect(runQuery).toHaveBeenCalledWith(`SELECT * FROM producto`);
    expect(result).toEqual(mockRows);
  });

  test("obtenerProductos() debe manejar errores", async () => {
    runQuery.mockRejectedValueOnce(new Error("DB ERROR"));

    const result = await ProductoData.obtenerProductos();

    expect(runQuery).toHaveBeenCalled();
    expect(result).toBeUndefined(); // porque tu código solo hace console.log y no lanza error
  });

  // --------------------------------------------------
  // crearProducto
  // --------------------------------------------------
  test("crearProducto() debe insertar un producto", async () => {
    const data = {
      nombre: "Monitor",
      cantidad: "5",
      precio: "300",
      sku: "MON123",
      detalle: "24 pulgadas",
      categoria: "Tecnología",
      tipoEmpaque: "Caja",
    };

    const mockResp = { insertId: 2 };

    runQuery.mockResolvedValueOnce(mockResp);

    const result = await ProductoData.crearProducto(data);

    expect(runQuery).toHaveBeenCalledWith(
      `INSERT INTO producto VALUES (0,?,?,?,?,?,?,?)`,
      [
        data.nombre,
        data.cantidad,
        data.precio,
        data.sku,
        data.detalle,
        data.categoria,
        data.tipoEmpaque,
      ]
    );

    expect(result).toEqual(mockResp);
  });

  test("crearProducto() debe manejar errores", async () => {
    runQuery.mockRejectedValueOnce(new Error("INSERT ERROR"));

    const result = await ProductoData.crearProducto({});

    expect(result).toBeUndefined();
  });

  // --------------------------------------------------
  // modificarProducto
  // --------------------------------------------------
  test("modificarProducto() debe actualizar un producto", async () => {
    const data = {
      id: 1,
      nombre: "Laptop",
      cantidad: "10",
      precio: "20",
      sku: "PX123",
      detalle: "detalle",
      categoria: "cat",
      tipoEmpaque: "Empaque",
    };

    const mockResp = { affectedRows: 3 };

    runQuery.mockResolvedValueOnce(mockResp);

    const result = await ProductoData.modificarProducto(data);

    expect(runQuery).toHaveBeenCalledWith(
      `UPDATE producto SET nombre = ?, cantidad=?, precio=?, sku=?, detalle=?, categoria=?, tipoEmpaque=? WHERE id=?`,
      [
        data.nombre,
        data.cantidad,
        data.precio,
        data.sku,
        data.detalle,
        data.categoria,
        data.tipoEmpaque,
        data.id,
      ]
    );

    expect(result).toEqual(mockResp);
  });

  test("modificarProducto() debe manejar errores", async () => {
    runQuery.mockRejectedValueOnce(new Error("UPDATE ERROR"));

    const result = await ProductoData.modificarProducto({});

    expect(result).toBeUndefined();
  });

  // --------------------------------------------------
  // eliminarProducto
  // --------------------------------------------------
  test("eliminarProducto() debe eliminar un producto por ID", async () => {
    const data = { id: 1 };
    const mockResp = { affectedRows: 1 };

    runQuery.mockResolvedValueOnce(mockResp);

    const result = await ProductoData.eliminarProducto(data);

    expect(runQuery).toHaveBeenCalledWith(
      `DELETE FROM producto WHERE id=?`,
      [data.id]
    );

    expect(result).toEqual(mockResp);
  });

  test("eliminarProducto() debe manejar errores", async () => {
    runQuery.mockRejectedValueOnce(new Error("DELETE ERROR"));

    const result = await ProductoData.eliminarProducto({});

    expect(result).toBeUndefined();
  });
});
