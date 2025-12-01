
function adicionarTarefa() {
    
    const texto = (document.getElementById("tarefaInput").value);

    
    if (texto === "") {
        alert("Digite uma tarefa antes de adicionar!");
    } else {
        
        const li = document.createElement("li");
        li.textContent = texto;
        document.getElementById("listaTarefas").appendChild(li);

        
        document.getElementById("tarefaInput").value = "";
    }
}

