const { validarEmpleado } = require('../empleado/empleado.validator');

describe('Validación de datos de empleado', () => {
  test('Empleado válido no debe retornar errores', () => {
    const empleado = {
      nombre: "Claudia Flores",
      ci: "2223344",
      celular: "72233944",
      cargo: "operador de ventas",
      direccionDomicilio: "Calle Bolivia #333",
      correo: "c.flores@gmail.com",
      estadoCivil: "Casado"
    };

    const errores = validarEmpleado(empleado);
    expect(errores.length).toBe(0);
  });

  test('Empleado con datos inválidos debe retornar errores', () => {
    const empleado = {
      nombre: "",
      ci: "abc",
      celular: "123",
      cargo: "",
      direccionDomicilio: "",
      correo: "correo_invalido",
      estadoCivil: ""
    };

    const errores = validarEmpleado(empleado);
    expect(errores).toEqual([
      'nombre inválido',
      'ci inválido',
      'celular inválido',
      'cargo inválido',
      'direccionDomicilio inválido',
      'correo inválido',
      'estadoCivil inválido'
    ]);
  });
});
