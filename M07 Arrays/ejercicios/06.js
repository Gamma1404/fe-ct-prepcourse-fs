function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var arrayMultiplicado = array.map( (num) => {return num * 2});
  return arrayMultiplicado;
}

module.exports = duplicarElementos;
