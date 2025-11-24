const { validarCliente } = require("../cliente/cliente.validation.js");

describe("validarCliente", () => {
  test("devuelve esValido=true cuando todos los datos son correctos", () => {
    const dataValida = {
      nombre: "Anthony",
      ci: "123456",
      celular: "7777777",
      nit: "111111",
      correo: "test@example.com",
      tipoCliente: "regular",
      direccion: "Calle Falsa 123",
    };

    const result = validarCliente(dataValida);

    expect(result.esValido).toBe(true);
    expect(result.errores).toHaveLength(0);
  });

  test("devuelve error cuando falta el nombre", () => {
    const data = {
      nombre: "",
      ci: "123456",
      celular: "7777777",
      nit: "111111",
      correo: "test@example.com",
      tipoCliente: "regular",
      direccion: "Calle Falsa 123",
    };

    const result = validarCliente(data);

    expect(result.esValido).toBe(false);
    expect(result.errores).toContain("El nombre es obligatorio");
  });

  test("devuelve error cuando el correo es inválido", () => {
    const data = {
      nombre: "Anthony",
      ci: "123456",
      celular: "7777777",
      nit: "111111",
      correo: "no-es-correo",
      tipoCliente: "regular",
      direccion: "Calle Falsa 123",
    };

    const result = validarCliente(data);

    expect(result.esValido).toBe(false);
    expect(result.errores).toContain("El correo no tiene un formato válido");
  });
});