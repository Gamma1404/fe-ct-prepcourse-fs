function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  var bucleConAumento = [];
  
  for (var i = 1; i <= 10; i++) {
    num += 2;
    bucleConAumento.push(num);
    if (i === num) {
      break;
    }
  }

  if (bucleConAumento.length === 10) {
    return bucleConAumento;
  } else {
    return 'Se interrumpió la ejecución';
  }
}

module.exports = breakStatement;
