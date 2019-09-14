const express = require("express");
const readline = require("readline-sync");
const consign = require("consign");
const mongoose = require("mongoose");

const app = express();

consign()
    .include("src/config/middlewares.js")
    .then("src/controllers")
    .into(app);

mongoose.connect("mongodb://127.0.0.1:27017/projeto_at", { useNewUrlParser: true });

(function (port = 8081) { 

port  = readline.question("Digite a porta de execucão: ");

app.listen(port, () => {
    console.log(`Executando na porta ${port}`)
}) 
} () );