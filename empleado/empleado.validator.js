function validarEmpleado(empleado) {
  const errores = [];

  if (!empleado.nombre || typeof empleado.nombre !== 'string') {
    errores.push('nombre inválido');
  }

  if (!empleado.ci || !/^\d+$/.test(empleado.ci)) {
    errores.push('ci inválido');
  }

  if (!empleado.celular || !/^\d{7,10}$/.test(empleado.celular)) {
    errores.push('celular inválido');
  }

  if (!empleado.cargo || typeof empleado.cargo !== 'string') {
    errores.push('cargo inválido');
  }

  if (!empleado.direccionDomicilio || typeof empleado.direccionDomicilio !== 'string') {
    errores.push('direccionDomicilio inválido');
  }

  if (!empleado.correo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(empleado.correo)) {
    errores.push('correo inválido');
  }

  if (!empleado.estadoCivil || typeof empleado.estadoCivil !== 'string') {
    errores.push('estadoCivil inválido');
  }

  return errores;
}

module.exports = { validarEmpleado };
