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
        img.setAttribute("src", "../imagens/homem-crianca.jpg");
        img.style.width = "250px";
        img.style.height = "250px";
        img.style.marginTop = "20px";
        img.style.borderRadius = "50%";
        img.style.display = "block";
        img.style.marginLeft = "auto";
        img.style.marginRight = "auto";
        img.style.objectFit = "cover";
        img.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
        img.style.border = "2px solid #000";
        img.style.padding = "5px";
        img.style.backgroundColor = "#f0f0f0";
      }
    } else if (idade < 21) {
      //Jovem
      img.setAttribute("src", "../imagens/homem-jovem.jpg");
    } else if (idade < 50) {
      //Adulto
      img.setAttribute(
        "src",
        "modulos/modulo4/projeto-idade/imagens/homem-crianca.jpg"
      );
    } else {
      //Idoso
      img.setAttribute("src", "../imagens/homem-velho.jpg");
    }
  }
  if (fsex[1].checked) {
    gênero = "Mulher";
    if (idade >= 0 && idade < 10) {
      //Criança
      img.setAttribute("src", "../imagens/mulher-crianca.jpg");
    } else if (idade < 21) {
      //Jovem
      img.setAttribute("src", "../imagens/mulher-jovem.jpg");
    } else if (idade < 50) {
      //Adulta
      img.setAttribute("src", "../imagens/mulher-adulta.jpg");
    } else {
      //Idosa
      img.setAttribute("src", "../imagens/mulher-velha.jpg");
    }
  }
  res.style.textAlign = "center";
  res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
  res.appendChild(img);
}
