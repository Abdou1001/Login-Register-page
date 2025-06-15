const container = document.getElementById("container");
const btnRegister = document.getElementById("register-btn");
const btnLogin = document.getElementById("login-btn");

btnRegister.addEventListener("click", () => container.classList.add("active"));
btnLogin.addEventListener("click", () => container.classList.remove("active"));

