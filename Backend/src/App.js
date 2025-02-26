require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Teste de rota inicial
app.get("/", (req, res) => {
    res.send("API do SGT-S está rodando!");
});

// Configuração da porta
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
