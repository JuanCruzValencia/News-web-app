//Array donde guardo los usuarios al localStorage
const users = [];
//funcion que facilita guardar nuevos usuarios en el locaStorage
function saveUser(users) {
  //function que facilita guardar los cambios en el localStorage
  localStorage.setItem("users", JSON.stringify(users));
}
//Clase constructora de los usuarios
class User {
  constructor(fullName, userName, email, password) {
    (this.fullName = fullName),
      (this.userName = userName),
      (this.email = email),
      (this.password = password);
  }
}
//Evento boton registrar nuevo usuario
const signupBtn = document.getElementById("signup__btn");
signupBtn.addEventListener("click", () => {
  register();
});
//funcion para registrar nuevo usuario
function register() {
  //tomo los botones del registro y les asigno el valor a la clase
  let fullName = document.getElementById("signup__name").value;
  let userName = document.getElementById("signup__username").value;
  let email = document.getElementById("signup__email").value;
  let password = document.getElementById("signup__password").value;
  let rePassword = document.getElementById("signup__repassword").value;
  //guardo en una variable mi nuevo usuario
  let newUser = new User(fullName, userName, email, password, rePassword);
  //verifico que los campos sean correctos
  if (validateSignup(newUser)) {
    alert("Registrado con exito");
    users.push(newUser);
    saveUser(users);
    document.getElementById("signup__form").reset();
  }
}
//funcion que verfica que ningun dato este en blanco
function validateSignup(newUser) {
  if (localStorage.getItem("users")) {
    let userStorage = JSON.parse(localStorage.getItem("users"));
    let userMail = userStorage.map((user) => {
      return user.email;
    });
    if (newUser.email == userMail) {
      alert("El mail ya se encuentra registrado");
      return false;
    }
  }
  if (
    newUser.fullName.trim() === "" ||
    newUser.userName.trim() === "" ||
    newUser.email.trim() === "" ||
    newUser.password.trim() === ""
  ) {
    alert("No ingrese datos vacios");
    return false;
  }
  return true;
}
//boton y evento para loguearse
const loginBtn = document.getElementById("login__btn");
loginBtn.addEventListener("click", () => {
  login();
});
//funcion que toma el ingreso de usuario y contrasena
function login() {
  let userName = document.getElementById("login__username").value;
  let password = document.getElementById("login__password").value;
  validateUser(userName, password);
}
//funcion que verifica que el usuario exista y la contrasena sea correcta OK
function validateUser(userName, password) {
  let userStorage = JSON.parse(localStorage.getItem("users"));
  userStorage.map((user) => {
    if (user.userName === userName && user.password === password) {
      window.location.href = "../index.html";
      changeState("online");
      return true;
    }
    alert("Usuario o contrasena incorrecto");
    document.getElementById("login__form").reset();
  });
}
//Guardo en el storage una variable offline
(function userStateOff() {
  let userStateIcon = "offline";
  localStorage.setItem("online", JSON.stringify(userStateIcon));
})();
//funcion que cambia el estado segun el estado
(function userState() {
  let userBtn = document.getElementById("userOnOff");
  let userOffline = JSON.parse(localStorage.getItem("online"));
  userOffline === "online"
    ? (userBtn.style.color = "green")
    : (userBtn.style.color = "red");
})();
//funcion que cambie el estado si estoy conectado
function changeState(userStateIcon) {
  let userBtn = document.getElementById("userOnOff");
  localStorage.setItem("online", JSON.stringify(userStateIcon));
  let userOnline = JSON.parse(localStorage.getItem("online"));
  userOnline === "online"
    ? (userBtn.style.color = "green")
    : (userBtn.style.color = "red");
}

//prevenir cuando el usuario toca enter
let allInputs = document.querySelectorAll(".form__inputAll");
allInputs.forEach((input) => {
  input.addEventListener("keypress", (e) => {
    let key = e.charCode || e.keyCode || 0;
    if (key == 13) {
      alert("No presione la tecla enter");
      e.preventDefault();
    }
  });
});
