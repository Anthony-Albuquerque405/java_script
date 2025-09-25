function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "estilo/homem-crianca.jpg");
        img.style.borderRadius = "50%";
        img.style.marginTop = "10px";
        img.style.width = "250px";
        img.style.height = "250px";
        img.style.objectFit = "cover";
        img.style.boxShadow = "0px 0px 15px black";
        img.style.border = "5px solid black";
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "estilo/homem-jovem.jpg");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "estilo/homem-crianca.jpg");
      } else {
        //Idoso
        img.setAttribute("src", "estilo/homem-velho.jpg");
      }
    }

    if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "estilo/mulher-crianca.jpg");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "estilo/mulher-jovem.jpg");
      } else if (idade < 50) {
        //Adulta
        img.setAttribute("src", "estilo/mulher-adulta.jpg");
      } else {
        //Idosa
        img.setAttribute("src", "estilo/mulher-velha.jpg");
      }
    }
    img.style.borderRadius = "50%";
    img.style.marginTop = "10px";
    img.style.width = "250px";
    img.style.height = "250px";
    img.style.objectFit = "cover";
    img.style.boxShadow = "0px 0px 15px black";
    img.style.border = "1px solid black";
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
