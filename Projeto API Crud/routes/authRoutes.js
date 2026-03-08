const express = require("express");
const jwt = require("jsonwebtoken");

// Criando um roteador do Express
const router = express.Router();

// Chave secreta usada para assinar o token JWT
const SECRET_KEY = "mi_clave_super_secreta";

// Rota de login simples para gerar um token
router.post("/login", (req, res) => {
  // Pega o username e a senha enviados no corpo da requisição
  const { username, password } = req.body;

  // Validação simples de exemplo
  if (username === "admin" && password === "1234") {
    // Se o usuário e senha forem corretos, gera um token JWT
    // O token contém o username e expira em 1 hora
    const token = jwt.sign({ username: username }, SECRET_KEY, { expiresIn: "1h" });

    // Retorna o token para o usuário
    return res.json({ token });
  }

  // Se as credenciais estiverem erradas, retorna erro 401
  res.status(401).json({ message: "Credenciais inválidas" });
});

// Exporta o roteador para ser usado em outros arquivos
module.exports = router;