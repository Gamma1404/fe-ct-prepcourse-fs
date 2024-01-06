function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var numerosPares = array.filter( (num) => num % 2 === 0)
  return numerosPares;
}

module.exports = filtrarNumerosPares;
