function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var sumaTotal = 0;
  arrayOfNums.map( (num) => sumaTotal += num );
  return sumaTotal;
}

module.exports = agregarNumeros;
