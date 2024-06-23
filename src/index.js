const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const productoRoute = require("./routes/producto");
const usuarioRoute = require("./routes/usuario");

// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use("/api", productoRoute);
app.use("/api", usuarioRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose.connect(
  "mongodb+srv://mauricio:asdf1234@cluster0.d57qytk.mongodb.net/dblatata?retryWrites=true&w=majority"
);

// Servidor
app.listen(port, () => console.log("Escuchando en el puerto: ", port));
