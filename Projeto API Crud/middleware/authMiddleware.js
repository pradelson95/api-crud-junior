const jwt = require("jsonwebtoken");

// Chave secreta para assinar os tokens JWT. Em um ambiente de produção, essa chave deve ser armazenada de forma segura, como em variáveis de ambiente, e não deve ser hardcoded no código-fonte.
const SECRET_KEY = "mi_clave_super_secreta";

// esse e o middleware de autenticação, ele verifica se o token JWT é válido antes de permitir o acesso às rotas protegidas. Ele extrai o token do cabeçalho de autorização, verifica sua validade e, se for válido, adiciona as informações do usuário à requisição para que possam ser usadas nas rotas subsequentes.
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  // Verifica se o token está presente
  if (!token) {
    return res.status(401).json({ message: "Token required" });
  }
  // Verifica a validade do token
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    // Adiciona as informações do usuário à requisição
    req.user = user;
    next();
  });
}
// Exporta o middleware para ser usado em outras partes da aplicação
module.exports = authenticateToken;