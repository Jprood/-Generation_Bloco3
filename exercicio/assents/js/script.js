let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let mapa = document.querySelector("#mapa");
let nomeOk = false;
let emailOk = false;
let assuntoOK = false;

nome.style.width = "100%";
email.style.width = "100%";
assunto.style.width = "100%";

function validaNome() {
    let txtNome = document.querySelector("#txtNome");
    if(nome.value.lenght <3) {
        txtNome.innerHTML = "nome invalido";
        txtNome.style.color = "red";
    }else {
        txtNome.innerHTML = "nome valido";
        txtNome.style.color = "green";
        nomeOk = true;
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail");
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "email invalido";
        txtEmail.style.color = "red";
    }else {
        txtEmail.innerHTML = "email valido";
        txtEmail.style.color = "green";
        emailOk = true;
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto");
    if(assunto.value.lenght > 100) {
        txtAssunto.innerHTML = "numero de caracteres excedidos";
        txtAssunto.style.color = "red";
        txtAssunto.style.display = "block";
    }else {
        txtAssunto.style.display = "nome";
        assuntoOk = true;
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("formulario enviado com sucesso!");
    }else {
        alert ("peencha o formulario corretamente antes de enviar ...")
    }
}

function mapaZoom() {
    mapa.style.width = "800px";
    mapa.style.height = "600px";
}

function mapaNormal() {
    mapa.style.width = "400px";
    mapa.style.height = "250px";
}
