let users = [];

function createUser(){

const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");

let user = {"userName": userName.value, "userEmail": userEmail.value, "userPassword": userPassword.value};

users.push(user);

let storageUsers = JSON.stringify(users);
    
localStorage.setItem("Usuarios", storageUsers);


}

let btnAddUser = document.getElementById("btnAddUser");
btnAddUser.addEventListener("click", createUser);


let traer_usuarios = localStorage.getItem("Usuarios");

let traer_usuarios_json = JSON.parse(traer_usuarios)


for (const users of traer_usuarios_json) {
    console.log("Nombre: ", users.userName);
    console.log("Email: ", users.userEmail);
    console.log("Contraseña: ", users.userPassword);
}



