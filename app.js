function adicionarTarefa() {

    const campo = document.getElementById("tarefa");
    const lista = document.getElementById("lista");

    const texto = campo.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa.");
        return;
    }

    const item = document.createElement("li");

    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = texto;

    const concluir = document.createElement("button");
    concluir.textContent = "✓";

    concluir.onclick = function() {
        textoTarefa.style.textDecoration =
            textoTarefa.style.textDecoration === "line-through"
            ? "none"
            : "line-through";
    };

    const excluir = document.createElement("button");
    excluir.textContent = "🗑️";

    excluir.onclick = function() {
        item.remove();
    };

    item.appendChild(textoTarefa);
    item.appendChild(concluir);
    item.appendChild(excluir);

    lista.appendChild(item);

    campo.value = "";
    campo.focus();
}