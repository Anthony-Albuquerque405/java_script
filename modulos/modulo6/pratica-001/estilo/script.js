let num = document.getElementById("fnum");
let lista = document.getElementById("flista");
let res = document.getElementById("res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    //se o numero n for entre 1 e 100
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    //se o numero n estiver na lista l
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    //se o numero n for entre 1 e 100 e se o numero n nao estiver na lista l
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Valor invalido ou ja encontrado na lista");
  }
  num.value = ""; //limpa o campo
  num.focus(); //coloca o cursor no campo
}

//função finalizar -------------------------------------------------

function finalizar() {
  if (valores.length == 0) {
    //se o tamanho da lista for igual a 0
    alert("Adicione valores antes de finalizar!");
  } else {
    //se o tamanho da lista for diferente de 0
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for (let pos in valores) {
      //para cada posiçao em valores
      soma += valores[pos];
      if (valores[pos] > maior) {
        maior = valores[pos];
      }
      if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }

    // exibir resultados

    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    media = soma / tot;
    res.innerHTML += `<p>A media dos valores digitados é ${media}.</p>`;
  }
}
