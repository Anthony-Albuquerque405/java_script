let num = [5, 8, 2, 9, 3];

num[3] = 6; // Alterando o valor do índice 3
num.push(7); // Adicionando o valor 7 ao final do array
num.length; // Mostra o tamanho do array
num.sort(); // Coloca o array em ordem crescente

console.log(`Nosso vetor é o ${num}`); // Mostra o array
console.log(`O vetor tem ${num.length} posições`); // Mostra o tamanho do array
console.log(`O primeiro valor do vetor é ${num[0]}`); // Mostra o valor do índice 0

let pos = num.indexOf(10); // Mostra o índice do valor 6
if (pos === -1) {
  console.log("O valor não foi encontrado!"); // Caso o valor não seja encontrado
} else {
  console.log(`O valor 6 está na posição ${pos}`); // Mostra a posição do valor 6
}

// --- IGNORE ---
