const express = require("express");

const app = express();

app.use(express.json());

const tarefas = [
    
      { id: 5, titulo: "Estudar PTAS", concluida: false },
      { id: 6, titulo: "Prova de portugues", concluida: true },
      { id: 7, titulo: "Atividade de quimica", concluida: false }
  ];

app.get("/", (req, res) => {
  res.send("API de Tarefas no ar");
});

app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

app.post("/tarefas", (req, res) => {

  const { titulo } = req.body;

  if (!titulo) {
    return res.status(400).json({
      erro: "O título é obrigatório."
    });
  }

  const novaTarefa = {
    id: tarefas.length + 5,
    titulo: titulo,
    concluida: false
  };

  tarefas.push(novaTarefa);

  return res.status(201).json(novaTarefa);
});

const PORTA = 3000;

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});