// recursividade

function fatorial(n) {
  // Função que calcula o fatorial de n
  if (n == 1) {
    // Se n for igual a 1
    return 1; // Caso base: fatorial de 1 é 1
  } else {
    // Caso contrário
    return n * fatorial(n - 1); // Chamada recursiva
  }
}

console.log(fatorial(5)); // Chama a função fatorial com o argumento 5 e exibe o resultado
// Saída: 120
