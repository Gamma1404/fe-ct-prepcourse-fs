function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  var stringLargo = array.find( (string) => string.length >= 5);
  return stringLargo;
}

module.exports = obtenerPrimerStringLargo;
