function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var sumaTotal = 0;
  for (var i = 1; i <= n; i++) {
    sumaTotal += i;
  }
  return sumaTotal;
}

module.exports = sumarHastaN;
