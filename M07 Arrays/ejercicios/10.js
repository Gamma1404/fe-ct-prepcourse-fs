function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var indiceNumeroMayor = 0;
  var numeroMayor = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i] > numeroMayor) {
      indiceNumeroMayor = i;
      numeroMayor = array[i];
    }
  }

  return indiceNumeroMayor;
}

module.exports = encontrarIndiceMayor;
