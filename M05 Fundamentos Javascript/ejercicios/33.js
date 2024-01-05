function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  var primo = 0
  for (var i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      primo++;
    }
  }
  if (primo <= 2) {
    return true;
  } else {
    return false;
  }
}

module.exports = esNumeroPrimo;
