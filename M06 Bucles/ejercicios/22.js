function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  var diasEnMes = 0;

  switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      diasEnMes = 31;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      diasEnMes = 30;
      break;

    case 2:
      diasEnMes = 28;
      break;

    default:
      diasEnMes = 0;
      break;
  }

  return diasEnMes;
}

module.exports = diasEnMes;
