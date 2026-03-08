const authenticateToken = require("../middleware/authMiddleware");
// Importa o Express para criar rotas
const express = require("express");

// Cria um objeto router para organizar as rotas
const router = express.Router();

// Importa a conexão com o banco de dados
const pool = require("../db");


// CREATE ORDER
// Cria um novo pedido no banco de dados
router.post("/", async (req, res) => {

  try {

    // Pega os dados enviados no body da requisição
    const data = req.body;

    // Mapeia os dados recebidos para variáveis
    const orderId = data.numeroPedido;
    const value = data.valorTotal;
    const creationDate = new Date(data.dataCriacao);

    // Insere o pedido na tabela orders
    await pool.query(
      `INSERT INTO orders (order_id,value,creation_date)
       VALUES ($1,$2,$3)`,
      [orderId,value,creationDate]
    );

    // Percorre todos os itens do pedido
    // e insere cada um na tabela items
    for (const item of data.items) {

      await pool.query(
        `INSERT INTO items (order_id,product_id,quantity,price)
         VALUES ($1,$2,$3,$4)`,
        [
          orderId,
          item.idItem,
          item.quantidadeItem,
          item.valorItem
        ]
      );

    }

    // Retorna uma mensagem de sucesso
    res.json({message:"Order created successfully"});

  } catch(error) {

    // Se acontecer algum erro, retorna erro 500
    res.status(500).json({error:error.message});

  }

});


// GET ALL ORDERS
// Retorna todos os pedidos com seus itens
router.get("/", async (req,res)=>{

  try{

    // Consulta que junta orders e items
    // e organiza os itens em um array JSON
    const result = await pool.query(`
      SELECT 
        o.order_id,
        o.value,
        o.creation_date,
        json_agg(
          json_build_object(
            'productId', i.product_id,
            'quantity', i.quantity,
            'price', i.price
          )
        ) AS items
      FROM orders o
      LEFT JOIN items i ON o.order_id = i.order_id
      GROUP BY o.order_id
    `);

    // Retorna a lista de pedidos
    res.json(result.rows);

  }catch(error){

    res.status(500).json({error:error.message});

  }

});


// GET ORDER BY ID
// Busca um pedido específico pelo ID
router.get("/:id", async (req,res)=>{

  try{

    // Busca os dados do pedido
    const order = await pool.query(
      "SELECT * FROM orders WHERE order_id=$1",
      [req.params.id]
    );

    // Busca os itens relacionados ao pedido
    const items = await pool.query(
      "SELECT product_id,quantity,price FROM items WHERE order_id=$1",
      [req.params.id]
    );

    // Retorna o pedido com seus itens
    res.json({
      orderId:order.rows[0].order_id,
      value:order.rows[0].value,
      creationDate:order.rows[0].creation_date,
      items:items.rows
    });

  }catch(error){

    res.status(500).json({error:error.message});

  }

});


// UPDATE ORDER
// Atualiza o valor de um pedido
router.put("/:id", async (req,res)=>{

  try{

    // Pega o novo valor enviado no body
    const {value} = req.body;

    // Atualiza o valor do pedido
    const result = await pool.query(
      `UPDATE orders
       SET value=$1
       WHERE order_id=$2
       RETURNING *`,
      [value,req.params.id]
    );

    // Retorna o pedido atualizado
    res.json(result.rows[0]);

  }catch(error){

    res.status(500).json({error:error.message});

  }

});


// DELETE ORDER
// Remove um pedido e seus itens
router.delete("/:id", async (req,res)=>{

  try{

    // Primeiro remove os itens relacionados ao pedido
    await pool.query(
      "DELETE FROM items WHERE order_id=$1",
      [req.params.id]
    );

    // Depois remove o pedido da tabela orders
    await pool.query(
      "DELETE FROM orders WHERE order_id=$1",
      [req.params.id]
    );

    // Retorna mensagem de sucesso
    res.json({message:"Order deleted"});

  }catch(error){

    res.status(500).json({error:error.message});

  }

});

// Exporta o router para ser usado no server.js
module.exports = router;