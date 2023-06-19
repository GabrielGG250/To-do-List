// Função adicionar tarefa
function addTarefa(){

    const tituloTarefa = document.querySelector("#titulo-tarefa").value;

    if(tituloTarefa){
        // Tamplate
        const tamplate = document.querySelector(".tamplate");

        const novaTarefa = tamplate.cloneNode(true);

        // Adicionar o Titulo
        novaTarefa.querySelector(".tarefa").textContent = tituloTarefa;

        // Remover classes
        novaTarefa.classList.remove("tamplate");
        novaTarefa.classList.remove("hide");

        // Adicionar Tarefa
        const lista = document.querySelector("#lista");

        lista.appendChild(novaTarefa);

        // Evento de Remover
        const remover = novaTarefa.querySelector(".remover").addEventListener("click", function() {
            removerTarefa(this);
        })

        // Evento Completar Tarefa
        const completar = novaTarefa.querySelector(".completar").addEventListener("click", function() {
            completarTarefa(this);
        })

        // Limpar texto
        document.querySelector("#titulo-tarefa").value = "";
    }
};

// Função de Remover
function removerTarefa(tituloTarefa) {
    tituloTarefa.parentNode.remove(true)
};

// Função de Completar
function completarTarefa(tituloTarefa) {
    const tarefaCompleta = tituloTarefa.parentNode;

    tarefaCompleta.classList.toggle("done");
};

// Evento adicionar tarefa
const botao = document.querySelector("#botao");

botao.addEventListener("click", function(e) {

    e.preventDefault();

    addTarefa();

});