console.log("Ola Mundo");
alert("Ola Mundo");


function mudarTexto() {
    document.getElementById("mensagem").innerText = "Texto alterado!";
}



function mostrarNome() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resultado").innerText = "Olá, " + nome + "!";
}