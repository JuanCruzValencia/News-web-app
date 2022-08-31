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
const signupBtn = document.getElementById('signup__btn');
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
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
    users.push(newUser);
    saveUser(users);
    document.getElementById('signup__form').reset();
    //console.log('Ingreso correcto')
  } else {
    alert("Datos incorrectos");
  }
}
//funcion que verfica que ningun dato este en blanco
function validateSignup(newUser) {
  if (
    newUser.fullName.trim() === "" ||
    newUser.userName.trim() === "" ||
    newUser.email.trim() === "" ||
    newUser.password.trim() === ""
  ) {
    return false;
  }
  return true;
}
//boton y evento para loguearse
const loginBtn = document.getElementById("login__btn");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  login();
});
//funcion que toma el ingrso de usuario y contrasena
function login() {
  let userName = document.getElementById("login__username").value;
  let password = document.getElementById("login__password").value;
  validateUser(userName, password);
};
//funcion que verifica que el usuario exista y la contrasena sea correcta OK
function validateUser(userName, password) {
  let userStorage = JSON.parse(localStorage.getItem("users"));
  userStorage.map(user => {
    if(user.userName === userName && user.password === password){
        window.location.href = "../index.html";
        return true;
    }
    alert('Usuario o contrasena incorrecto')
    document.getElementById('login__form').reset();
  });
  //ingresar a con un map y verificar que existen
};
//funcion para desloguearse
function logout() {
  //funcion para deslogear al usuario y cambio el css
};
//guardo en una variable el estado del usuario
const userStateIcon = false;
//funcion que cambie el estado si estoy conectado
function userState(boolean) {
  //si el usuario esta logueado agrego una clase, sino agrego otra
};