// Fondo de pantalla aleatorio

//Guardo en variables los objetos que necesito del html
const btn = document.getElementById("random-btn");

//Funcion que va a generar un valor Hex de letras y numeros aleatoreos
function randomAlfNum() {
  let alfNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let result = "";
  //itera 6 veces para generar el hexadecimal
  for (let i = 0; i < 6; i++) {
    result += alfNum[Math.floor(Math.random() * alfNum.length)];
  }
  return "#" + result;
}

//Agrego evento al boton para que cambie el color del fondo y ademas muestre el color en pantalla
btn.addEventListener("click", () => {
  document.body.style.backgroundColor = randomAlfNum();
});