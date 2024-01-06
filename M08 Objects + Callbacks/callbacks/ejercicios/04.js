function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  var total = 0;
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    total += arrayOfNumbers[i];
  }
  cb(total);
}

module.exports = sumarArray;
