console.log("Ola mundo");
console.log('Testando aqui o JS')
//document.title = 'Lista Alterada';
//document.body.style.background = "green"
alert("Bem vindo ao JS");
console.log(5 == "5")
console.log (5 === "5")


function adicionarTarefa(){
    let tarefaInput = document.getElementById("tarefa");
    let tarefaTexto = tarefaInput.value.trim();
    //let tarefaTexto2 = document.getElementById("tarefa").value.trim()
    if (tarefaTexto === ""){
        alert('Digite uma tarefa!');
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${tarefaTexto} <button onClick="removerTarefa(this)" > Remover </button>`;

    document.getElementById("lista").appendChild(li);

    tarefaInput.value = "";
    
}

function removerTarefa(botao){
    botao.parentElement.remove();
}

