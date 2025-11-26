function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome  = sessionStorage.NOME_USUARIO;

    if (!email || !nome) {
        window.location = "../login.html"; 
        return;
    }
    
    var b_usuario = document.getElementById("b_usuario");
    if (b_usuario) {
        b_usuario.innerHTML = nome;
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

function verificarLoginAntes() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome  = sessionStorage.NOME_USUARIO;

    if (!email || !nome) {
        alert("Você precisa estar logado para responder os quizzes!");
        window.location = "../login.html";
        return false;
    }
    return true;
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}