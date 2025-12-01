function adicionarTarefa() {
  const input = document.getElementById("tarefaInput");
  if (!input.value) return alert("Digite uma tarefa antes de adicionar!");
  const li = document.createElement("li");
  li.textContent = input.value;
  document.getElementById("listaTarefas").appendChild(li);
  input.value = "";
}