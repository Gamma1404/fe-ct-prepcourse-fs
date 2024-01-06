function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  var nuevoArray = objetoUsuario.amigos;
  nuevoArray.push(nuevoAmigo);
  objetoUsuario.amigos = nuevoArray;
  return objetoUsuario;
}

module.exports = agregarAmigo;
