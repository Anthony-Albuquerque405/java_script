function verifivacar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 14) {
        //criança
        img.setAttribute("src", "homem-crianca.jpg");
        var verifc = "criança";
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "homem-jovem.jpg");
        var verifc = "jovem";
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "homem-adulto.jpg");
        var verifc = "adulto";
      } else {
        //idoso
        img.setAttribute("src", "homem-velho.jpg");
        var verifc = "idoso";
      }
    } else if (fsex[1].checked) {
      genero = "mulher";
      if (idade >= 0 && idade < 14) {
        //criança
        img.setAttribute("src", "mulher-crianca.jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "mulher-jovem.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "mulher-adulta.jpg");
      } else {
        //idoso
        img.setAttribute("src", "mulher-velha.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos uma ${genero} de ${idade} anos.`;
    res.appendChild(img);
  }
}
