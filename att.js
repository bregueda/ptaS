const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API de Tarefas no ar");
});

const PORTA = 3000;

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});