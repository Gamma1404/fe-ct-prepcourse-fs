const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var recuentoDePropiedades = 0;
  for (var i in objeto) {
    recuentoDePropiedades++;
  }
  return recuentoDePropiedades;
};

module.exports = contarPropiedades;
