function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var arrayMayusculas = array.map( (elemento) => {return elemento.toUpperCase()} );
  return arrayMayusculas;
}

module.exports = convertirStringAMayusculas;
