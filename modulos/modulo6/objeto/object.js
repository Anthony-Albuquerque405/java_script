// Criando um objeto

let amigo = {
  nome: "José",
  sexo: "M",
  peso: 85.4,
  engordar(p = 0) {
    console.log("Engordou");
    this.peso += p;
  },
};

// Testando o objeto

amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);
amigo.engordar(3);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);
