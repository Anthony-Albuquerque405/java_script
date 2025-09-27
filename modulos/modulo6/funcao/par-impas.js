function parimpar(n) {
  // parametro n
  if (n % 2 == 0) {
    return "Par"; // Retorna "Par" se n for par
  } else {
    return "Ímpar"; // Retorna "Ímpar" se n for ímpar
  }
}

let res = parimpar(11); // Chama a função

console.log(res); // Exibe o resultado
