function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagens");
  var data = new Date();
  // var hora = data.getHours();
  var hora = 8; //para testar a imagem
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = "imagens/manha.jpg";
    document.body.style.background = "#dfc999ff";
  } else if (hora >= 12 && hora <= 18) {
    //Boa tarde
    img.src = "imagens/tarde.jpg";
    document.body.style.background = "#ad6d53ff";
  } else {
    //Boa noite
    img.src = "imagens/noite.jpg";
    document.body.style.background = "#515154";
  }
}
