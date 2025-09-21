// condições multiples

var agora = new Date();
var diaSem = agora.getDay();
var hora = agora.getHours();

/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/

switch (diaSem) {
  case 0:
    console.log("Domingo");
    console.log(`hora atual: ${hora} horas`);
    break;
  case 1:
    console.log("Segunda");
    console.log(`hora atual: ${hora} horas`);
    break;
  case 2:
    console.log("Terça");
    console.log(`hora atual: ${hora} horas`);
    break;
  case 3:
    console.log("Quarta");
    console.log(`hora atual: ${hora} horas`);
    break;
  case 4:
    console.log("Quinta");
    console.log(`hora atual: ${hora} horas`);
    break;
  case 5:
    console.log("Sexta");
    console.log(`hora atual: ${hora} horas`);
    break;
  case 6:
    console.log("Sábado");
    console.log(`hora atual: ${hora} horas`);
    break;
  default:
    console.log("[ERRO] Dia inválido!");
    break;
}
