//Moment.js
//Libreria de JS que muestra el tiempo real, se agrego una funcion setInterval para que se actualice en cada segundo
const displayWatch = () => {
  document.getElementById("moment__container").innerText =
    moment().format("LT");
};
setInterval(displayWatch, 1000);
