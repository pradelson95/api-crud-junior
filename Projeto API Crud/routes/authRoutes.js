const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Clave secreta directa
const SECRET_KEY = "mi_clave_super_secreta";

// Login simple para generar token
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Ejemplo simple de validación
  if (username === "admin" && password === "1234") {
    // Generar token con duración de 1 hora
    const token = jwt.sign({ username: username }, SECRET_KEY, { expiresIn: "1h" });
    return res.json({ token });
  }

  // Credenciales inválidas
  res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;