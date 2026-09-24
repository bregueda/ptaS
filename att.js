const express = require("express");


const app = express();


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

const PORTA = 3000;

app.listen(PORTA, () => {
 
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});