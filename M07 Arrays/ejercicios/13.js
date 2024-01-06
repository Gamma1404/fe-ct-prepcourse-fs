function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var sumaTotal = 0;
  resultadosTest.map( (num) => sumaTotal += num );
  return sumaTotal / resultadosTest.length;
}

module.exports = promedioResultadosTest;
