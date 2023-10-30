function Entrar() {
    var email = document.getElementById("Email");
    var senha = document.getElementById("Senha");
    
 if (email.value != "" && senha.value != "")  {
    console.log("Email: " + email.value);
    console.log("Senha: " + senha.value);

    email.value = ""
    senha.value = ""
 }
}