const express = require("express");

const app = express();

app.use(express.json());

const tarefas = [
  { id: 5, titulo: "Estudar PTAS", concluida: false },
  { id: 6, titulo: "Prova de portugues", concluida: true },
  { id: 7, titulo: "Atividade de quimica", concluida: false }
];

function autenticar(req, res, next) {
  console.log("Autenticação realizada.");
  next();
}

function validarTarefa(req, res, next) {
  const { titulo } = req.body;

  if (!titulo) {
    return res.status(400).json({
      erro: "O título é obrigatório."
    });
  }

  next();
}

function registrarLog(req, res, next) {
  console.log(
    `Tarefa sendo criada: ${req.body.titulo}`
  );

  next();
}

app.post(
  "/tarefas",
  [autenticar, validarTarefa, registrarLog],
  (req, res) => {

    const novaTarefa = {
      id: tarefas.length + 5,
      titulo: req.body.titulo,
      concluida: false
    };

    tarefas.push(novaTarefa);

    res.status(201).json({
      mensagem: "Tarefa criada com sucesso",
      tarefa: novaTarefa
    });
  }
);

app.listen(3000, () => {
  console.log(
    "Servidor rodando em http://localhost:3000"
  );
});