const express = require("express");
const usuarioSchema = require("../models/usuarios");
const authController = require("../controllers/AuthController"); // Importa el controlador de autenticación


const router = express.Router();


// Endpoint para iniciar sesión
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const respuesta = await authController.iniciarSesion(email, password);
    res.json(respuesta);
  } catch (error) {
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
});


// crear usuario
router.post("/usuarios", (req, res) => {
  const usuario = usuarioSchema(req.body);
  usuario
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// obtener todos los usuarios
router.get("/usuarios", (req, res) => {
  usuarioSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener un usuario
router.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  usuarioSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// eliminar un usuario
router.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  usuarioSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// actualizar un usuario
router.put("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, email, password } = req.body;
  usuarioSchema
    .updateOne({ _id: id }, { $set: { nombre, email, password } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;