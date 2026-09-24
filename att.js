const express = require("express");

const app = express();


const tarefas = [
     { id: 5, titulo: "Estudar PTAS", concluida: false },
      { id: 6, titulo: "Prova de portugues", concluida: true },
      { id: 7, titulo: "Atividade de quimica", concluida: false }

    ];

function verificarTarefaExiste(req, res, next) {

  const idBusca = parseInt(req.params.id);

  const tarefa = tarefas.find(t => t.id === idBusca);

  if (!tarefa) {
    return res.status(404).json({
      erro: "Tarefa não encontrada."
    });
  }

  req.tarefa = tarefa;

  next();
}

app.get("/", (req, res) => {
  res.send("API de Tarefas no ar");
});

app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

app.get("/tarefas/:id", verificarTarefaExiste, (req, res) => {
  res.json(req.tarefa);
});

const PORTA = 3000;

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});