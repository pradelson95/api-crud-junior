require("dotenv").config();
console.log("PORT:", process.env.PORT);

const express = require("express");

const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

// rutas de autenticación
app.use("/auth", authRoutes);

// rutas de pedidos
app.use("/order", orderRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});