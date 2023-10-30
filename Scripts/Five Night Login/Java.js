function MailList(email) {
    return (email.endsWith('@gmail.com') || email.endsWith('@icloud.com') || email.endsWith('@hotmail.com') || email.endsWith('@yahoo.com') || email.endsWith('@outlook.com') || email.endsWith('@mail.com'));
}

function Verify() {
    var email = document.getElementById('Email').value;
    var senha = document.getElementById("Senha").value;

    if (MailList(email) && senha.length >= 8) {
        Entrar();
    } else if (senha.length <= 7) {
        alert('Senha no minimo com 8 caracteres.');
    } else if (!MailList(email)){
        alert("Por favor insira um mail valido.")
    }
}

function Entrar() {
    var email = document.getElementById("Email");
    var senha = document.getElementById("Senha");

    if (email.value !== "" && senha.value !== "") {
        console.log("Email: " + email.value);
        console.log("Senha: " + senha.value);

        email.value = "";
        senha.value = "";
    }
}