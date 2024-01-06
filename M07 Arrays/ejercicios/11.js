function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var elementosMultiplicados= [];

  for (var i = 0; i < array.length; i++) {
    elementosMultiplicados.push(array[i] * i)
  }

  return elementosMultiplicados;
}

module.exports = multiplicarElementosPorIndice;
