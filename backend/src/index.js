const express = require("express");
const readline = require("readline-sync");
const consign = require("consign");
const mongoose = require("mongoose");

const app = express();

const server = require('http').createServer(app);
const io = require("socket.io")(server);

consign()
    .include("src/config/middlewares.js")
    .then("src/controllers")
    .into(app);

mongoose.connect("mongodb://127.0.0.1:27017/projeto_at", { useNewUrlParser: true });

const port = 4000;

io.on("connection", socket => {
    console.log("Socket conectado: " + socket.id);
})

server.listen(port, () => {
    console.log(`Executando na porta ${port}`)
}) 