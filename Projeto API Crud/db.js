const { Pool } = require("pg");
// Configuração da conexão com o PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ordersdb",
  password: "38291245PP",
  port: 5432
});
// Exporta o pool para ser usado em outros arquivos
module.exports = pool;