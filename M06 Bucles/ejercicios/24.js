function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var stringInvertido = [];
  var stringSeparado = texto.split('');

  for (var i = 0; i < stringSeparado.length; i++) {
    stringInvertido.unshift(stringSeparado[i]);    
  }

  return texto = stringInvertido.join('');
}

module.exports = invertirTexto;