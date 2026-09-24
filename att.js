const express = require("express");

const app = express();

const tarefas = [
    
     { id: 5, titulo: "Estudar PTAS", concluida: false },
     { id: 6, titulo: "Prova de portugues", concluida: true },
     { id: 7, titulo: "Atividade de quimica", concluida: false }
 ];

function filtrarTarefas(req, res, next) {

  const { concluida } = req.query;

  if (concluida !== undefined) {

    const statusBuscado = concluida === "true";

    req.filtrarTarefas = tarefas.filter(
      t => t.concluida === statusBuscado
    );

  } else {

    req.filtrarTarefas = tarefas;

  }

  next();
}

app.get("/", (req, res) => {
  res.send("API de Tarefas no ar");
});

app.get("/tarefas", filtrarTarefas, (req, res) => {
  res.json(req.filtrarTarefas);
});

const PORTA = 3000;

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});