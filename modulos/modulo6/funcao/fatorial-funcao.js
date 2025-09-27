function fatorial(n) {
  // Função que calcula o fatorial de n
  let fat = 1; // Inicializa a variável fat com 1
  for (let c = n; c > 1; c--) {
    fat *= c; // Multiplica fat pelo valor atual de c
  }
  return fat; // Retorna o valor do fatorial
}

console.log(fatorial(5)); // Chama a função fatorial com o argumento 5 e exibe o resultado
// Saída: 120
