function validarCliente(data) {
  const errores = [];

  const { nombre, ci, celular, nit, correo, tipoCliente, direccion } = data || {};

  if (!nombre || nombre.trim() === "") {
    errores.push("El nombre es obligatorio");
  }

  if (!ci || !/^\d+$/.test(ci)) {
    errores.push("El CI es obligatorio y debe ser numérico");
  }

  if (!celular || !/^\d+$/.test(celular)) {
    errores.push("El celular es obligatorio y debe ser numérico");
  }

  if (!correo || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo)) {
    errores.push("El correo no tiene un formato válido");
  }

  if (!tipoCliente) {
    errores.push("El tipo de cliente es obligatorio");
  }

  if (!direccion || direccion.trim() === "") {
    errores.push("La dirección es obligatoria");
  }

  return {
    esValido: errores.length === 0,
    errores,
  };
}

module.exports = { validarCliente };