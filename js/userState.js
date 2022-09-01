//funcion que cambia el estado segun el estado en todas las paginas
(function userState() {
  let userBtn = document.getElementById("userOnOff");
  let userOffline = JSON.parse(localStorage.getItem("online"));
  userOffline === "online"
    ? (userBtn.style.color = "green")
    : (userBtn.style.color = "red");
})();
